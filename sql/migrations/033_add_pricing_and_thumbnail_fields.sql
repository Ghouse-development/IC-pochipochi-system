-- =====================================================
-- Migration: 原価・売価フィールド追加 & サムネイル画像分離
-- Date: 2026-01-18
-- Description:
--   1. itemsテーブルにサムネイル画像フィールド追加
--   2. item_pricingに原価・売価・粗利益率フィールド追加
--   3. 売価自動計算関数の作成
-- =====================================================

-- 1. itemsテーブルにサムネイル画像フィールド追加
ALTER TABLE items
ADD COLUMN IF NOT EXISTS thumbnail_url TEXT,
ADD COLUMN IF NOT EXISTS thumbnail_path TEXT;

COMMENT ON COLUMN items.thumbnail_url IS 'アイテム一覧で表示するサムネイル画像URL';
COMMENT ON COLUMN items.thumbnail_path IS 'サムネイル画像のStorageパス';

-- 2. item_pricingテーブルに原価・売価フィールド追加
-- 原価 = 材料費用(material_cost) + 工事費用(installation_cost)
-- 売価 = 原価 ÷ (1 - 粗利益率) を1000円単位で繰り上げ

ALTER TABLE item_pricing
ADD COLUMN IF NOT EXISTS material_cost INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS cost_price INTEGER GENERATED ALWAYS AS (COALESCE(material_cost, 0) + COALESCE(installation_cost, 0)) STORED,
ADD COLUMN IF NOT EXISTS gross_margin_rate NUMERIC(5,4) DEFAULT 0.30,
ADD COLUMN IF NOT EXISTS selling_price INTEGER DEFAULT 0;

COMMENT ON COLUMN item_pricing.material_cost IS '材料費用';
COMMENT ON COLUMN item_pricing.cost_price IS '原価（材料費用 + 工事費用）- 自動計算';
COMMENT ON COLUMN item_pricing.gross_margin_rate IS '粗利益率（デフォルト30%=0.30）';
COMMENT ON COLUMN item_pricing.selling_price IS '売価（1000円単位繰り上げ）';

-- 3. 売価自動計算関数の作成
CREATE OR REPLACE FUNCTION calculate_selling_price(
  p_material_cost INTEGER,
  p_installation_cost INTEGER,
  p_gross_margin_rate NUMERIC DEFAULT 0.30
) RETURNS INTEGER AS $$
DECLARE
  v_cost_price INTEGER;
  v_raw_selling_price NUMERIC;
  v_selling_price INTEGER;
BEGIN
  -- 原価計算
  v_cost_price := COALESCE(p_material_cost, 0) + COALESCE(p_installation_cost, 0);

  -- 原価が0の場合は0を返す
  IF v_cost_price = 0 THEN
    RETURN 0;
  END IF;

  -- 売価計算: 原価 ÷ (1 - 粗利益率)
  v_raw_selling_price := v_cost_price / (1 - COALESCE(p_gross_margin_rate, 0.30));

  -- 1000円単位で繰り上げ
  v_selling_price := CEIL(v_raw_selling_price / 1000) * 1000;

  RETURN v_selling_price;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

COMMENT ON FUNCTION calculate_selling_price IS '原価から売価を自動計算（粗利益率考慮、1000円単位繰り上げ）';

-- 4. 売価自動更新トリガー
CREATE OR REPLACE FUNCTION update_selling_price_trigger()
RETURNS TRIGGER AS $$
BEGIN
  -- 材料費または工事費が変更されたら売価を再計算
  NEW.selling_price := calculate_selling_price(
    NEW.material_cost,
    NEW.installation_cost,
    NEW.gross_margin_rate
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 既存のトリガーがあれば削除
DROP TRIGGER IF EXISTS trg_update_selling_price ON item_pricing;

-- トリガー作成
CREATE TRIGGER trg_update_selling_price
  BEFORE INSERT OR UPDATE OF material_cost, installation_cost, gross_margin_rate
  ON item_pricing
  FOR EACH ROW
  EXECUTE FUNCTION update_selling_price_trigger();

-- 5. 既存データの売価を計算して更新
UPDATE item_pricing
SET selling_price = calculate_selling_price(material_cost, installation_cost, gross_margin_rate)
WHERE selling_price IS NULL OR selling_price = 0;

-- 6. インデックス追加（パフォーマンス向上）
CREATE INDEX IF NOT EXISTS idx_items_thumbnail_url ON items(thumbnail_url) WHERE thumbnail_url IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_item_pricing_selling_price ON item_pricing(selling_price);

-- 確認用クエリ
-- SELECT
--   ip.id,
--   i.name as item_name,
--   ip.material_cost,
--   ip.installation_cost,
--   ip.cost_price,
--   ip.gross_margin_rate,
--   ip.selling_price
-- FROM item_pricing ip
-- JOIN items i ON ip.item_id = i.id
-- LIMIT 10;
