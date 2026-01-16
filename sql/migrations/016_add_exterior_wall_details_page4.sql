-- 外壁アイテム詳細データ追加（スタイルブック4ページ目）
-- マンセル値、カタログURL、画像URLを追加
-- ポルプストーン調Vは新規追加

-- ============================================
-- 1. ポルプストーン調V（新規追加）
-- ============================================

INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  catalog_url, is_active, display_order, tags
) VALUES (
  'ext-wall-polpstone-v',
  'ポルプストーン調V',
  'ニチハ',
  'EFX31xxFK/NK/LK/RK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  'https://www.nichiha.co.jp/wallsearch/item?item_id=EFX3151FK',
  true,
  5,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  catalog_url = EXCLUDED.catalog_url,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

-- ポルプストーン調V バリアント
INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, munsell_value, is_active, display_order
) SELECT
  id, 'ext-wall-polpstone-v-v1', 'エアルMGスノー', 'EFX3151FK', '5Y 7/1', true, 0
FROM items WHERE item_code = 'ext-wall-polpstone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, munsell_value, is_active, display_order
) SELECT
  id, 'ext-wall-polpstone-v-v2', 'エアルMGラテ', 'EFX3152FK', '7.5YR 5/3', true, 1
FROM items WHERE item_code = 'ext-wall-polpstone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, munsell_value, is_active, display_order
) SELECT
  id, 'ext-wall-polpstone-v-v3', 'エアルMGトリュフ', 'EFX3153LK', '2.5Y 3/2', true, 2
FROM items WHERE item_code = 'ext-wall-polpstone-v'
ON CONFLICT DO NOTHING;

-- ポルプストーン調V 価格設定（全プラン標準）
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-polpstone-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-polpstone-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-polpstone-v' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-polpstone-v' AND p.code = 'life'
ON CONFLICT DO NOTHING;

-- ポルプストーン調V 画像
INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3151FK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-polpstone-v-v1'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3152FK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-polpstone-v-v2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3153LK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-polpstone-v-v3'
ON CONFLICT DO NOTHING;

-- ============================================
-- 2. 既存アイテムの catalog_url を追加
-- ============================================

-- スプリットストーン調V
UPDATE items SET
  catalog_url = 'https://www.nichiha.co.jp/wallsearch/item?item_id=EFX1651NK'
WHERE item_code = 'ext-wall-split-stone-v';

-- コルモストーン調V
UPDATE items SET
  catalog_url = 'https://www.nichiha.co.jp/wallsearch/item?item_id=EFX3355NK'
WHERE item_code = 'ext-wall-colmo-stone-v';

-- コンクリート打ちっ放し16V
UPDATE items SET
  catalog_url = 'https://www.nichiha.co.jp/wallsearch/item?item_id=EFA4351NK'
WHERE item_code = 'ext-wall-concrete-16v';

-- ============================================
-- 3. 既存バリアントに munsell_value を追加
-- ============================================

-- スプリットストーン調V バリアント
UPDATE item_variants SET munsell_value = '5Y 7/2'
WHERE variant_code = 'ext-wall-split-stone-v-v1'; -- アプラMGクリーム

UPDATE item_variants SET munsell_value = '10YR 6/4'
WHERE variant_code = 'ext-wall-split-stone-v-v2'; -- アプラMGワイン

UPDATE item_variants SET munsell_value = '2.5Y 7/6'
WHERE variant_code = 'ext-wall-split-stone-v-v3'; -- アプラMGキャロット

-- コルモストーン調V バリアント
UPDATE item_variants SET munsell_value = '5Y 4/1'
WHERE variant_code = 'ext-wall-colmo-stone-v-v1'; -- フォンドMGダーク

UPDATE item_variants SET munsell_value = '10YR 8/1'
WHERE variant_code = 'ext-wall-colmo-stone-v-v2'; -- フォンドMGシュガー

UPDATE item_variants SET munsell_value = '2.5Y 6/3'
WHERE variant_code = 'ext-wall-colmo-stone-v-v3'; -- フォンドMGリーフ

UPDATE item_variants SET munsell_value = '7.5YR 3/4'
WHERE variant_code = 'ext-wall-colmo-stone-v-v4'; -- フォンドMGショコラ

-- コンクリート打ちっ放し16V バリアント
UPDATE item_variants SET munsell_value = 'N 7'
WHERE variant_code = 'ext-wall-concrete-16v-v1'; -- コンクリートMGライトグレー

-- ============================================
-- 4. 既存バリアントに画像を追加
-- ============================================

-- スプリットストーン調V 画像
INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX1651NK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-split-stone-v-v1'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX1652NK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-split-stone-v-v2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX1653NK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-split-stone-v-v3'
ON CONFLICT DO NOTHING;

-- コルモストーン調V 画像
INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3355NK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-colmo-stone-v-v1'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3351NK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-colmo-stone-v-v2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3352NK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-colmo-stone-v-v3'
ON CONFLICT DO NOTHING;

INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFX3353RK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-colmo-stone-v-v4'
ON CONFLICT DO NOTHING;

-- コンクリート打ちっ放し16V 画像
INSERT INTO item_variant_images (variant_id, image_url, is_primary, display_order)
SELECT id, 'https://www.nichiha.co.jp/img/product/tn/EFA4351NK_tn.jpg', true, 0
FROM item_variants WHERE variant_code = 'ext-wall-concrete-16v-v1'
ON CONFLICT DO NOTHING;
