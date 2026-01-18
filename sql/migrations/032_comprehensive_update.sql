-- =====================================================
-- 総合マイグレーション: 2026-01-18
-- 内容:
--   1. itemsテーブルにサムネイル画像フィールド追加
--   2. item_pricingに原価・売価・粗利益率フィールド追加
--   3. 売価自動計算関数とトリガー
--   4. 新商品プラン追加（LIFE+ Limited, LIFE Limited, LIFE X）
-- =====================================================

-- =====================================================
-- 1. itemsテーブルにサムネイル画像フィールド追加
-- =====================================================
ALTER TABLE items
ADD COLUMN IF NOT EXISTS thumbnail_url TEXT,
ADD COLUMN IF NOT EXISTS thumbnail_path TEXT;

COMMENT ON COLUMN items.thumbnail_url IS 'アイテム一覧で表示するサムネイル画像URL';
COMMENT ON COLUMN items.thumbnail_path IS 'サムネイル画像のStorageパス';

-- =====================================================
-- 2. item_pricingテーブルに原価・売価フィールド追加
-- 原価 = 材料費用(material_cost) + 工事費用(installation_cost)
-- 売価 = 原価 ÷ (1 - 粗利益率) を1000円単位で繰り上げ
-- =====================================================
ALTER TABLE item_pricing
ADD COLUMN IF NOT EXISTS material_cost INTEGER DEFAULT 0,
ADD COLUMN IF NOT EXISTS gross_margin_rate NUMERIC(5,4) DEFAULT 0.30,
ADD COLUMN IF NOT EXISTS selling_price INTEGER DEFAULT 0;

COMMENT ON COLUMN item_pricing.material_cost IS '材料費用';
COMMENT ON COLUMN item_pricing.gross_margin_rate IS '粗利益率（デフォルト30%=0.30）';
COMMENT ON COLUMN item_pricing.selling_price IS '売価（1000円単位繰り上げ）';

-- =====================================================
-- 3. 売価自動計算関数の作成
-- =====================================================
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

-- =====================================================
-- 4. 売価自動更新トリガー
-- =====================================================
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

-- =====================================================
-- 5. 既存データの売価を計算して更新
-- =====================================================
UPDATE item_pricing
SET selling_price = calculate_selling_price(
  COALESCE(material_cost, 0),
  COALESCE(installation_cost, 0),
  COALESCE(gross_margin_rate, 0.30)
)
WHERE selling_price IS NULL OR selling_price = 0;

-- =====================================================
-- 6. インデックス追加（パフォーマンス向上）
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_items_thumbnail_url ON items(thumbnail_url) WHERE thumbnail_url IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_item_pricing_selling_price ON item_pricing(selling_price);

-- =====================================================
-- 7. 新商品プラン追加
-- LIFE+ Limited: LIFE+と同じオプション価格
-- LIFE Limited: LIFEと同じオプション価格
-- LIFE X: LIFEと同じオプション価格
-- =====================================================

-- まず既存のプランIDを確認
-- SELECT id, code, name FROM products ORDER BY display_order;

-- LIFE+ LimitedをLIFE+の後に追加
INSERT INTO products (id, code, name, description, display_order, is_active, created_at, updated_at)
SELECT
  gen_random_uuid(),
  'LIFE_PLUS_LIMITED',
  'LIFE+ Limited',
  'LIFE+ Limitedプラン',
  (SELECT display_order + 1 FROM products WHERE code = 'LIFE_PLUS'),
  true,
  NOW(),
  NOW()
WHERE NOT EXISTS (SELECT 1 FROM products WHERE code = 'LIFE_PLUS_LIMITED');

-- LIFE LimitedをLIFEの後に追加
INSERT INTO products (id, code, name, description, display_order, is_active, created_at, updated_at)
SELECT
  gen_random_uuid(),
  'LIFE_LIMITED',
  'LIFE Limited',
  'LIFE Limitedプラン',
  (SELECT display_order + 1 FROM products WHERE code = 'LIFE'),
  true,
  NOW(),
  NOW()
WHERE NOT EXISTS (SELECT 1 FROM products WHERE code = 'LIFE_LIMITED');

-- LIFE XをLIFE Limitedの後に追加
INSERT INTO products (id, code, name, description, display_order, is_active, created_at, updated_at)
SELECT
  gen_random_uuid(),
  'LIFE_X',
  'LIFE X',
  'LIFE Xプラン',
  (SELECT display_order + 2 FROM products WHERE code = 'LIFE'),
  true,
  NOW(),
  NOW()
WHERE NOT EXISTS (SELECT 1 FROM products WHERE code = 'LIFE_X');

-- =====================================================
-- 8. LIFE+ Limitedの価格設定をLIFE+からコピー
-- =====================================================
INSERT INTO item_pricing (
  id, item_id, variant_id, product_id, is_available, is_standard,
  price, material_cost, installation_cost, gross_margin_rate, selling_price,
  effective_date, created_at, updated_at
)
SELECT
  gen_random_uuid(),
  ip.item_id,
  ip.variant_id,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS_LIMITED'),
  ip.is_available,
  ip.is_standard,
  ip.price,
  COALESCE(ip.material_cost, 0),
  ip.installation_cost,
  COALESCE(ip.gross_margin_rate, 0.30),
  COALESCE(ip.selling_price, 0),
  CURRENT_DATE,
  NOW(),
  NOW()
FROM item_pricing ip
JOIN products p ON ip.product_id = p.id
WHERE p.code = 'LIFE_PLUS'
AND NOT EXISTS (
  SELECT 1 FROM item_pricing ip2
  JOIN products p2 ON ip2.product_id = p2.id
  WHERE p2.code = 'LIFE_PLUS_LIMITED'
  AND ip2.item_id = ip.item_id
  AND COALESCE(ip2.variant_id, '00000000-0000-0000-0000-000000000000') = COALESCE(ip.variant_id, '00000000-0000-0000-0000-000000000000')
);

-- =====================================================
-- 9. LIFE Limitedの価格設定をLIFEからコピー
-- =====================================================
INSERT INTO item_pricing (
  id, item_id, variant_id, product_id, is_available, is_standard,
  price, material_cost, installation_cost, gross_margin_rate, selling_price,
  effective_date, created_at, updated_at
)
SELECT
  gen_random_uuid(),
  ip.item_id,
  ip.variant_id,
  (SELECT id FROM products WHERE code = 'LIFE_LIMITED'),
  ip.is_available,
  ip.is_standard,
  ip.price,
  COALESCE(ip.material_cost, 0),
  ip.installation_cost,
  COALESCE(ip.gross_margin_rate, 0.30),
  COALESCE(ip.selling_price, 0),
  CURRENT_DATE,
  NOW(),
  NOW()
FROM item_pricing ip
JOIN products p ON ip.product_id = p.id
WHERE p.code = 'LIFE'
AND NOT EXISTS (
  SELECT 1 FROM item_pricing ip2
  JOIN products p2 ON ip2.product_id = p2.id
  WHERE p2.code = 'LIFE_LIMITED'
  AND ip2.item_id = ip.item_id
  AND COALESCE(ip2.variant_id, '00000000-0000-0000-0000-000000000000') = COALESCE(ip.variant_id, '00000000-0000-0000-0000-000000000000')
);

-- =====================================================
-- 10. LIFE Xの価格設定をLIFEからコピー
-- =====================================================
INSERT INTO item_pricing (
  id, item_id, variant_id, product_id, is_available, is_standard,
  price, material_cost, installation_cost, gross_margin_rate, selling_price,
  effective_date, created_at, updated_at
)
SELECT
  gen_random_uuid(),
  ip.item_id,
  ip.variant_id,
  (SELECT id FROM products WHERE code = 'LIFE_X'),
  ip.is_available,
  ip.is_standard,
  ip.price,
  COALESCE(ip.material_cost, 0),
  ip.installation_cost,
  COALESCE(ip.gross_margin_rate, 0.30),
  COALESCE(ip.selling_price, 0),
  CURRENT_DATE,
  NOW(),
  NOW()
FROM item_pricing ip
JOIN products p ON ip.product_id = p.id
WHERE p.code = 'LIFE'
AND NOT EXISTS (
  SELECT 1 FROM item_pricing ip2
  JOIN products p2 ON ip2.product_id = p2.id
  WHERE p2.code = 'LIFE_X'
  AND ip2.item_id = ip.item_id
  AND COALESCE(ip2.variant_id, '00000000-0000-0000-0000-000000000000') = COALESCE(ip.variant_id, '00000000-0000-0000-0000-000000000000')
);

-- =====================================================
-- 確認用クエリ
-- =====================================================
-- SELECT id, code, name, display_order FROM products ORDER BY display_order;
--
-- SELECT
--   ip.id,
--   i.name as item_name,
--   p.name as product_name,
--   ip.material_cost,
--   ip.installation_cost,
--   (ip.material_cost + ip.installation_cost) as cost_price,
--   ip.gross_margin_rate,
--   ip.selling_price
-- FROM item_pricing ip
-- JOIN items i ON ip.item_id = i.id
-- JOIN products p ON ip.product_id = p.id
-- ORDER BY i.name, p.display_order
-- LIMIT 20;

-- =====================================================
-- 11. 「その他収納」カテゴリを非表示に
-- =====================================================
UPDATE categories
SET is_active = false
WHERE slug = 'other-storage'
   OR name = 'その他収納';
