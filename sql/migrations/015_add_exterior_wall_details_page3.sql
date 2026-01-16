-- 外壁アイテム詳細データ追加（スタイルブック3ページ目）
-- マンセル値、カタログURL、画像URLを追加

-- ============================================
-- 1. items テーブルに catalog_url を追加
-- ============================================

-- モナビストーンV
UPDATE items SET
  catalog_url = 'https://www.nichiha.co.jp/wallsearch/item?item_id=EFA5256FK'
WHERE item_code = 'ext-wall-monabistone-v';

-- シャルムロックV
UPDATE items SET
  catalog_url = 'https://www.nichiha.co.jp/wallsearch/item?item_id=EFA2851FK'
WHERE item_code = 'ext-wall-sharm-rock-v';

-- リーガストーン調V
UPDATE items SET
  catalog_url = 'https://www.nichiha.co.jp/wallsearch/item?item_id=EFX3455CK'
WHERE item_code = 'ext-wall-reega-stone';

-- ディスタシェイドV
UPDATE items SET
  catalog_url = 'https://www.nichiha.co.jp/wallsearch/item?item_id=EFA5456YK'
WHERE item_code = 'ext-wall-dista-shade-v';

-- ============================================
-- 2. item_variants テーブルに munsell_value を追加
-- ============================================

-- モナビストーンV バリアント
UPDATE item_variants SET munsell_value = 'N 7'
WHERE variant_code = 'ext-wall-monabistone-v-v1'; -- フローMGグレー

UPDATE item_variants SET munsell_value = 'N 2'
WHERE variant_code = 'ext-wall-monabistone-v-v2'; -- フローMGブラック

UPDATE item_variants SET munsell_value = 'N 9'
WHERE variant_code = 'ext-wall-monabistone-v-v3'; -- フローMGクリアホワイト

UPDATE item_variants SET munsell_value = '2.5Y 9/1'
WHERE variant_code = 'ext-wall-monabistone-v-v4'; -- フローMGホワイト

UPDATE item_variants SET munsell_value = '10YR 8/2'
WHERE variant_code = 'ext-wall-monabistone-v-v5'; -- フローMGクリーム

UPDATE item_variants SET munsell_value = 'N 3'
WHERE variant_code = 'ext-wall-monabistone-v-v6'; -- フローMGネイビー

-- シャルムロックV バリアント
UPDATE item_variants SET munsell_value = '5Y 8/1'
WHERE variant_code = 'ext-wall-sharm-rock-v-v1'; -- コンティMGホワイト

UPDATE item_variants SET munsell_value = '10YR 7/2'
WHERE variant_code = 'ext-wall-sharm-rock-v-v2'; -- コンティMGアッシュ

UPDATE item_variants SET munsell_value = '5Y 7/2'
WHERE variant_code = 'ext-wall-sharm-rock-v-v3'; -- コンティMGアイボリー

UPDATE item_variants SET munsell_value = '10YR 4/2'
WHERE variant_code = 'ext-wall-sharm-rock-v-v4'; -- コンティMGブラウン

UPDATE item_variants SET munsell_value = '2.5Y 5/1'
WHERE variant_code = 'ext-wall-sharm-rock-v-v5'; -- コンティMGグレー

UPDATE item_variants SET munsell_value = '2.5Y 3/1'
WHERE variant_code = 'ext-wall-sharm-rock-v-v6'; -- コンティMGチャコール

-- リーガストーン調V バリアント
UPDATE item_variants SET munsell_value = '5Y 7/1'
WHERE variant_code = 'ext-wall-reega-stone-v1'; -- ランダMGプラチナ

UPDATE item_variants SET munsell_value = '2.5Y 3/1'
WHERE variant_code = 'ext-wall-reega-stone-v2'; -- ランダMGブラック

UPDATE item_variants SET munsell_value = '2.5Y 6/4'
WHERE variant_code = 'ext-wall-reega-stone-v3'; -- ランダMGラテ

UPDATE item_variants SET munsell_value = '5YR 4/1'
WHERE variant_code = 'ext-wall-reega-stone-v4'; -- ランダMGトリュフ

UPDATE item_variants SET munsell_value = '10Y 8/1'
WHERE variant_code = 'ext-wall-reega-stone-v5'; -- ランダMGパウダー

-- ディスタシェイドV バリアント
UPDATE item_variants SET munsell_value = '5B 2/1'
WHERE variant_code = 'ext-wall-dista-shade-v-v1'; -- ストレムMGネイビー

UPDATE item_variants SET munsell_value = '10YR 9/1'
WHERE variant_code = 'ext-wall-dista-shade-v-v2'; -- ストレムMGホワイト

UPDATE item_variants SET munsell_value = '10R 8/1'
WHERE variant_code = 'ext-wall-dista-shade-v-v3'; -- ストレムMGクリーム

UPDATE item_variants SET munsell_value = '2.5Y 5/4'
WHERE variant_code = 'ext-wall-dista-shade-v-v4'; -- ストレムMGブラウン

UPDATE item_variants SET munsell_value = '10YR 4/2'
WHERE variant_code = 'ext-wall-dista-shade-v-v5'; -- ストレムMGセピア

-- ============================================
-- 3. item_variant_images テーブルに画像を追加
-- ============================================

-- モナビストーンV 画像
INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5256C2K_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-monabistone-v-v1'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5257FK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-monabistone-v-v2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5251GK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-monabistone-v-v3'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5252GK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-monabistone-v-v4'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5253GK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-monabistone-v-v5'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5254TK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-monabistone-v-v6'
ON CONFLICT DO NOTHING;

-- シャルムロックV 画像
INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA2851CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-sharm-rock-v-v1'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA2852CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-sharm-rock-v-v2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA2853CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-sharm-rock-v-v3'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA2854CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-sharm-rock-v-v4'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA2855FK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-sharm-rock-v-v5'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA2856CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-sharm-rock-v-v6'
ON CONFLICT DO NOTHING;

-- リーガストーン調V 画像
INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3455CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-reega-stone-v1'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3457CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-reega-stone-v2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3451NK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-reega-stone-v3'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3452RK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-reega-stone-v4'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3453CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-reega-stone-v5'
ON CONFLICT DO NOTHING;

-- ディスタシェイドV 画像
INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5456CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-dista-shade-v-v1'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5451YK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-dista-shade-v-v2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5452YK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-dista-shade-v-v3'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5453CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-dista-shade-v-v4'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA5454CK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-dista-shade-v-v5'
ON CONFLICT DO NOTHING;
