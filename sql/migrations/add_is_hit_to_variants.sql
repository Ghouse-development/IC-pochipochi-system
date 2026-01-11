-- バリアント（色）ごとにHIT設定を追加
-- 2026-01-11

-- item_variantsテーブルにis_hitカラムを追加
ALTER TABLE item_variants
ADD COLUMN IF NOT EXISTS is_hit BOOLEAN NOT NULL DEFAULT false;

-- コメント追加
COMMENT ON COLUMN item_variants.is_hit IS 'この色がHIT商品かどうか';

-- インデックス追加（HITアイテム検索用）
CREATE INDEX IF NOT EXISTS idx_item_variants_is_hit ON item_variants (is_hit) WHERE is_hit = true;
