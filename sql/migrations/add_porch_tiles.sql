-- ポーチタイル・目地データ追加
-- 実行前にcategories, units, productsテーブルにデータがあることを確認

-- ===============================
-- 1. ポーチタイル（porch-tile タグ）
-- ===============================

-- モルタル金鏝抑え（標準）
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('porch-mortar', 'モルタル金鏝抑え', '標準', '標準仕上げ（目地不要）', true, false, 0, ARRAY['porch-tile'])
ON CONFLICT (item_code) DO NOTHING;

-- モルタルのバリアント（1色のみ）
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-mortar-std', '標準', '#C0C0C0', true, 0
FROM items WHERE item_code = 'porch-mortar'
ON CONFLICT DO NOTHING;

-- ネイチャーII
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('porch-nature2', 'ネイチャーII', 'Nagoya mozaic', '300×300 自然な風合い', true, true, 1, ARRAY['porch-tile'])
ON CONFLICT (item_code) DO NOTHING;

-- ネイチャーIIのバリアント
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-nature2-lg', 'ライトグレー', '#B8B8B8', true, 0
FROM items WHERE item_code = 'porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-nature2-g', 'グレー', '#808080', true, 1
FROM items WHERE item_code = 'porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-nature2-dg', 'ダークグレー', '#505050', true, 2
FROM items WHERE item_code = 'porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-nature2-b', 'ベージュ', '#D4C4A8', true, 3
FROM items WHERE item_code = 'porch-nature2'
ON CONFLICT DO NOTHING;

-- ベスパ
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('porch-vespa', 'ベスパ', 'LIXIL', '300×300 モダンデザイン', true, true, 2, ARRAY['porch-tile'])
ON CONFLICT (item_code) DO NOTHING;

-- ベスパのバリアント
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-vespa-w', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-vespa-lg', 'ライトグレー', '#C0C0C0', true, 1
FROM items WHERE item_code = 'porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-vespa-g', 'グレー', '#808080', true, 2
FROM items WHERE item_code = 'porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-vespa-br', 'ブラウン', '#8B7355', true, 3
FROM items WHERE item_code = 'porch-vespa'
ON CONFLICT DO NOTHING;

-- メンフィス
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('porch-memphis', 'メンフィス', 'LIXIL', '600×600 大判タイル', true, false, 3, ARRAY['porch-tile'])
ON CONFLICT (item_code) DO NOTHING;

-- メンフィスのバリアント
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-memphis-w', 'ホワイト', '#FAFAFA', true, 0
FROM items WHERE item_code = 'porch-memphis'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-memphis-g', 'グレー', '#909090', true, 1
FROM items WHERE item_code = 'porch-memphis'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-memphis-dg', 'ダークグレー', '#4A4A4A', true, 2
FROM items WHERE item_code = 'porch-memphis'
ON CONFLICT DO NOTHING;

-- ランドストン
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('porch-landstone', 'ランドストン', 'Nagoya mozaic', '600×600 岩面', true, false, 4, ARRAY['porch-tile'])
ON CONFLICT (item_code) DO NOTHING;

-- ランドストンのバリアント
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-landstone-n', 'ナチュラル', '#C8BCA0', true, 0
FROM items WHERE item_code = 'porch-landstone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-landstone-g', 'グレー', '#8C8C8C', true, 1
FROM items WHERE item_code = 'porch-landstone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-landstone-dg', 'ダークグレー', '#5A5A5A', true, 2
FROM items WHERE item_code = 'porch-landstone'
ON CONFLICT DO NOTHING;

-- ピエトラソーニ
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('porch-pietra', 'ピエトラソーニ', 'Nagoya mozaic', '600×600 粗目', true, false, 5, ARRAY['porch-tile'])
ON CONFLICT (item_code) DO NOTHING;

-- ピエトラソーニのバリアント
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-pietra-n', 'ナチュラル', '#D8CDB8', true, 0
FROM items WHERE item_code = 'porch-pietra'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-pietra-g', 'グレー', '#A0A0A0', true, 1
FROM items WHERE item_code = 'porch-pietra'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'porch-pietra-br', 'ブラウン', '#7A6852', true, 2
FROM items WHERE item_code = 'porch-pietra'
ON CONFLICT DO NOTHING;

-- ===============================
-- 2. ポーチタイルの価格設定
-- ===============================

-- モルタル: 標準（0円）
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available, effective_date)
SELECT i.id, p.id, 0, true, true, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'porch-mortar' AND p.code IN ('LACIE', 'HOURS', 'LIFE_PLUS', 'LIFE')
ON CONFLICT DO NOTHING;

-- ネイチャーII: +22,000円
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available, effective_date)
SELECT i.id, p.id, 22000, false, true, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'porch-nature2' AND p.code IN ('LACIE', 'HOURS', 'LIFE_PLUS', 'LIFE')
ON CONFLICT DO NOTHING;

-- ベスパ: +22,000円
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available, effective_date)
SELECT i.id, p.id, 22000, false, true, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'porch-vespa' AND p.code IN ('LACIE', 'HOURS', 'LIFE_PLUS', 'LIFE')
ON CONFLICT DO NOTHING;

-- メンフィス: +27,000円
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available, effective_date)
SELECT i.id, p.id, 27000, false, true, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'porch-memphis' AND p.code IN ('LACIE', 'HOURS', 'LIFE_PLUS', 'LIFE')
ON CONFLICT DO NOTHING;

-- ランドストン: +5,000円
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available, effective_date)
SELECT i.id, p.id, 5000, false, true, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'porch-landstone' AND p.code IN ('LACIE', 'HOURS', 'LIFE_PLUS', 'LIFE')
ON CONFLICT DO NOTHING;

-- ピエトラソーニ: +5,000円
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available, effective_date)
SELECT i.id, p.id, 5000, false, true, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'porch-pietra' AND p.code IN ('LACIE', 'HOURS', 'LIFE_PLUS', 'LIFE')
ON CONFLICT DO NOTHING;

-- ===============================
-- 3. 目地色（porch-grout タグ）
-- ===============================

-- 白
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('grout-white', '白', '標準', '明るめのタイルにおすすめ', true, true, 0, ARRAY['porch-grout'])
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'grout-white-v1', '白', '#FFFFFF', true, 0
FROM items WHERE item_code = 'grout-white'
ON CONFLICT DO NOTHING;

-- 濃い灰色
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('grout-dark-gray', '濃い灰色', '標準', NULL, true, false, 1, ARRAY['porch-grout'])
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'grout-dark-gray-v1', '濃い灰色', '#4A4A4A', true, 0
FROM items WHERE item_code = 'grout-dark-gray'
ON CONFLICT DO NOTHING;

-- こげ茶
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('grout-brown', 'こげ茶', '標準', NULL, true, false, 2, ARRAY['porch-grout'])
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'grout-brown-v1', 'こげ茶', '#4A3728', true, 0
FROM items WHERE item_code = 'grout-brown'
ON CONFLICT DO NOTHING;

-- ベージュ
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('grout-beige', 'ベージュ', '標準', NULL, true, false, 3, ARRAY['porch-grout'])
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'grout-beige-v1', 'ベージュ', '#D4C4A8', true, 0
FROM items WHERE item_code = 'grout-beige'
ON CONFLICT DO NOTHING;

-- 薄い灰色
INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('grout-light-gray', '薄い灰色', '標準', '暗めのタイルにおすすめ', true, true, 4, ARRAY['porch-grout'])
ON CONFLICT (item_code) DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'grout-light-gray-v1', '薄い灰色', '#B8B8B8', true, 0
FROM items WHERE item_code = 'grout-light-gray'
ON CONFLICT DO NOTHING;

-- ===============================
-- 確認クエリ
-- ===============================
-- SELECT i.*, array_agg(v.color_name) as colors
-- FROM items i
-- LEFT JOIN item_variants v ON v.item_id = i.id
-- WHERE 'porch-tile' = ANY(i.tags) OR 'porch-grout' = ANY(i.tags)
-- GROUP BY i.id
-- ORDER BY i.display_order;
