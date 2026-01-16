-- item_variantsテーブルにmunsell_valueカラムを追加
-- マンセル値（例: 5Y 8/1, N 7, 10YR 4/2）を格納

ALTER TABLE item_variants
ADD COLUMN IF NOT EXISTS munsell_value VARCHAR(20);

-- インデックスを追加（検索用）
CREATE INDEX IF NOT EXISTS idx_item_variants_munsell_value
ON item_variants(munsell_value)
WHERE munsell_value IS NOT NULL;

-- コメント追加
COMMENT ON COLUMN item_variants.munsell_value IS 'マンセル値（例: 5Y 8/1, N 7）- 外壁色の標準色指定';
