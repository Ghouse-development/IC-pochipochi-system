-- =====================================================
-- IC-pochipochi-system 商品データインポートSQL
-- 生成日時: 2025-12-27T03:28:19.466Z
-- =====================================================

-- このSQLは静的TypeScriptファイルから自動生成されました
-- 実行前に COMPLETE_SETUP.sql でカテゴリと単位を登録してください


-- ==============================
-- exteriorProducts.ts からのインポート
-- ==============================

-- 外壁: モナビストーンV
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-monabistone-v',
  'モナビストーンV',
  '外壁',
  'ニチハ',
  'EFA52xxFK/GK/TK',
  '横張のみの採用となります [モナビストーンV]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-monabistone-v'),
  'ext-wall-monabistone-v-v1',
  'フローMGグレー',
  'フローMGグレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-monabistone-v'),
  'ext-wall-monabistone-v-v2',
  'フローMGブラック',
  'フローMGブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-monabistone-v'),
  'ext-wall-monabistone-v-v3',
  'フローMGクリアホワイト',
  'フローMGクリアホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-monabistone-v'),
  'ext-wall-monabistone-v-v4',
  'フローMGホワイト',
  'フローMGホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-monabistone-v'),
  'ext-wall-monabistone-v-v5',
  'フローMGクリーム',
  'フローMGクリーム',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-monabistone-v'),
  'ext-wall-monabistone-v-v6',
  'フローMGネイビー',
  'フローMGネイビー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-monabistone-v'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-monabistone-v'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: リーガストーン調V
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-reega-stone',
  'リーガストーン調V',
  '外壁',
  'ニチハ',
  'EFX34xxCK/NK',
  '横張のみの採用となります [リーガストーン調V]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-reega-stone'),
  'ext-wall-reega-stone-v1',
  'ランダMGプラチナ',
  'ランダMGプラチナ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-reega-stone'),
  'ext-wall-reega-stone-v2',
  'ランダMGブラック',
  'ランダMGブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-reega-stone'),
  'ext-wall-reega-stone-v3',
  'ランダMGトリュフ',
  'ランダMGトリュフ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-reega-stone'),
  'ext-wall-reega-stone-v4',
  'ランダMGラテ',
  'ランダMGラテ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-reega-stone'),
  'ext-wall-reega-stone-v5',
  'ランダMGパウダー',
  'ランダMGパウダー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-reega-stone'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-reega-stone'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: ボルブストーン調V
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-bolb-stone',
  'ボルブストーン調V',
  '外壁',
  'ニチハ',
  'EFX3151FK',
  '横張のみの採用となります [ボルブストーン調V]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-bolb-stone'),
  'ext-wall-bolb-stone-v1',
  'エアルMGスノー',
  'エアルMGスノー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-bolb-stone'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-bolb-stone'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: ルボン プレミアム
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-lubon-premium',
  'ルボン プレミアム',
  '外壁',
  'KMEW',
  'ELS4xxP',
  'プレミアム外壁 シーリング目地に比べて継ぎ目が目立たない [ルボン プレミアム]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-lubon-premium'),
  'ext-wall-lubon-premium-v1',
  'レセピMGチタンホワイト30',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-lubon-premium'),
  'ext-wall-lubon-premium-v2',
  'レセピMGチタンチャコール30',
  'チャコール',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-lubon-premium'),
  'ext-wall-lubon-premium-v3',
  'レセピMGネロ30',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-lubon-premium'),
  'ext-wall-lubon-premium-v4',
  'レセピMGネイビー30',
  'ネイビー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-lubon-premium'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-lubon-premium'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: モエンエクセラード16 Fuge
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-moene-fuge',
  'モエンエクセラード16 Fuge',
  '外壁',
  'ニチハ',
  'EQS6xxD',
  'モエンエクセラード16 Fuge [モエンエクセラード16 Fuge]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-moene-fuge'),
  'ext-wall-moene-fuge-v1',
  'モベルクレージュⅡ',
  'ベージュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-moene-fuge'),
  'ext-wall-moene-fuge-v2',
  'シュマールベージュⅡ',
  'サンドベージュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-moene-fuge'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-moene-fuge'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: COOL イルミオ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-cool-illuminio',
  'COOL イルミオ',
  '外壁',
  'アイカ',
  'EFM5xxP',
  'COOL 遮熱性能付き外壁 [COOL イルミオ]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-cool-illuminio'),
  'ext-wall-cool-illuminio-v1',
  'メレホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-cool-illuminio'),
  'ext-wall-cool-illuminio-v2',
  'メレグレー',
  'グレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-cool-illuminio'),
  'ext-wall-cool-illuminio-v3',
  'メレブラウン',
  'ブラウン',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-cool-illuminio'),
  'ext-wall-cool-illuminio-v4',
  'メレブラック',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-cool-illuminio'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-cool-illuminio'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: 新フラット16 フィエルテ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-flat16',
  '新フラット16 フィエルテ',
  '外壁',
  'KMEW',
  'NH49xxA',
  'フラットデザイン外壁（16mm厚） [新フラット16]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-flat16'),
  'ext-wall-flat16-v1',
  'チタンコンクリー',
  'グレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-flat16'),
  'ext-wall-flat16-v2',
  'チタンアイロン',
  'ダークグレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-flat16'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-flat16'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: カンターピレ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-canterpile',
  'カンターピレ',
  '外壁',
  'KMEW',
  'NH5921A',
  'タイルデザイン外壁（16mm厚） [カンターピレ]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-canterpile'),
  'ext-wall-canterpile-v1',
  'シルクチタンホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-canterpile'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-canterpile'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: アルテミュール
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-artemur',
  'アルテミュール',
  '外壁',
  'KONOSHIMA',
  'ARTE-RCx-GC',
  'アルテミュール 木目調外壁 [アルテミュール]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-artemur'),
  'ext-wall-artemur-v1',
  'レッドシダーナチュラル',
  'レッドシダーナチュラル',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-artemur'),
  'ext-wall-artemur-v2',
  'レッドシダーエイジング',
  'レッドシダーエイジング',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-artemur'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-artemur'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  4500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: ジョリパットネオ∞ エンシェントブリック
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-jolypate',
  'ジョリパットネオ∞ エンシェントブリック',
  '外壁',
  'AICA',
  'JQ-620-Txxxx',
  'ジョリパットネオ∞ 塗装仕上げ [ジョリパットネオ∞]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-jolypate'),
  'ext-wall-jolypate-v1',
  'T1010',
  'クリーム',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-jolypate'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  12500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-jolypate'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  12500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外壁: SOLIDO typeM_LAP
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-wall' LIMIT 1),
  'ext-wall-solido',
  'SOLIDO typeM_LAP',
  '外壁',
  'KMEW',
  'SMGxxG',
  'SOLIDO 高級外壁材 HOURS/LACIE:5㎡以下は80,000円/式 LIFE+/LIFE:5㎡以下は110,000円/式 [SOLIDO]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-solido'),
  'ext-wall-solido-v1',
  '鉄黒（てつぐろ）',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-solido'),
  'ext-wall-solido-v2',
  'セメント',
  'グレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-solido'),
  'ext-wall-solido-v3',
  '錆茶（さびちゃ）',
  'ブラウン',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-solido'),
  'ext-wall-solido-v4',
  '灰（はい）',
  'ダークグレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-solido'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  17000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-solido'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  17000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-solido'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  21500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-wall-solido'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  21500
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- ポーチ: メンフィス
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'porch' LIMIT 1),
  'ext-porch-memphis',
  'メンフィス',
  'ポーチ',
  'LIXIL',
  'IPF-600/MMP-xx',
  '600×600 標準内外部ポーチサイズ：1.8m×1.8m [メンフィス]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-porch-memphis'),
  'ext-porch-memphis-v1',
  'MMP-11',
  'MMP-11',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-porch-memphis'),
  'ext-porch-memphis-v2',
  'MMP-12',
  'MMP-12',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-porch-memphis'),
  'ext-porch-memphis-v3',
  'MMP-13',
  'MMP-13',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-porch-memphis'),
  'ext-porch-memphis-v4',
  'MMP-14',
  'MMP-14',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-porch-memphis'),
  'ext-porch-memphis-v5',
  'MMP-15',
  'MMP-15',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-porch-memphis'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-porch-memphis'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 屋根: ニスクカラーSGL
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'roof' LIMIT 1),
  'ext-roof-nisc',
  'ニスクカラーSGL',
  '屋根',
  '日鉄鋼板',
  'NM-8697',
  '材料標準保証規格10年 国土交通大臣認定不燃材料 海岸500m以遠原板の穴あき25年保証 [屋根材]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-roof-nisc'),
  'ext-roof-nisc-v1',
  'Sブラック',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-roof-nisc'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-roof-nisc'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 樋: ファインスケアNF-I型
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'gutter' LIMIT 1),
  'ext-gutter-horizontal',
  'ファインスケアNF-I型',
  '樋',
  'Panasonic',
  'MQFxxxx',
  '横樋 [横樋]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-horizontal'),
  'ext-gutter-horizontal-v1',
  'ミルクホワイト',
  'ミルクホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-horizontal'),
  'ext-gutter-horizontal-v2',
  'パールグレー（しろ）',
  'パールグレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-horizontal'),
  'ext-gutter-horizontal-v3',
  'ブラック',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-horizontal'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-horizontal'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 樋: S30
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'gutter' LIMIT 1),
  'ext-gutter-vertical',
  'S30',
  '樋',
  'Panasonic',
  'KBPxxxx',
  '縦樋 [縦樋]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-vertical'),
  'ext-gutter-vertical-v1',
  'ミルクホワイト',
  'ミルクホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-vertical'),
  'ext-gutter-vertical-v2',
  'パールグレー（しろ）',
  'パールグレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-vertical'),
  'ext-gutter-vertical-v3',
  'ブラック',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-vertical'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-gutter-vertical'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 軒天: エンボス
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'soffit' LIMIT 1),
  'ext-soffit-emboss',
  'エンボス',
  '軒天',
  '神島化学',
  'EMBOSS',
  '軒天材 [エンボス]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-soffit-emboss'),
  'ext-soffit-emboss-v1',
  'エンボスホワイト',
  'エンボスホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-soffit-emboss'),
  'ext-soffit-emboss-v2',
  'エンボスブラック',
  'エンボスブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-soffit-emboss'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-soffit-emboss'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 軒天: アルテザート
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'soffit' LIMIT 1),
  'ext-soffit-artezart',
  'アルテザート',
  '軒天',
  'KONOSHIMA',
  'ARTE-RCN',
  '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可。5㎡までは80,000円/式 [アルテザート]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-soffit-artezart'),
  'ext-soffit-artezart-v1',
  'レッドシダーナチュラル',
  'レッドシダーナチュラル',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-soffit-artezart'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  18000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-soffit-artezart'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  18000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 窓: APW330
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'window' LIMIT 1),
  'ext-window-apw330',
  'APW330',
  '窓',
  'YKKAP',
  'APW330',
  '樹脂サッシ アルゴンガス ペアガラス 熱貫流率1.31W/(㎡・K) [APW330]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-apw330'),
  'ext-window-apw330-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-apw330'),
  'ext-window-apw330-v2',
  'プラチナステン',
  'プラチナステン',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-apw330'),
  'ext-window-apw330-v3',
  'ブラウン',
  'ブラウン',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-apw330'),
  'ext-window-apw330-v4',
  'ブラック',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-apw330'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-apw330'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 窓: 電動シャッター W1650まで
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'window' LIMIT 1),
  'ext-window-shutter-w1650',
  '電動シャッター W1650まで',
  '窓',
  'YKKAP',
  'SHUTTER-E-W1650',
  '電動シャッターへ変更 W1650まで [窓オプション]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-shutter-w1650'),
  'ext-window-shutter-w1650-v1',
  '標準色',
  '標準',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-shutter-w1650'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  36000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-shutter-w1650'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  36000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 窓: 電動シャッター W2560まで
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'window' LIMIT 1),
  'ext-window-shutter-w2560',
  '電動シャッター W2560まで',
  '窓',
  'YKKAP',
  'SHUTTER-E-W2560',
  '電動シャッターへ変更 W2560まで [窓オプション]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-shutter-w2560'),
  'ext-window-shutter-w2560-v1',
  '標準色',
  '標準',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-shutter-w2560'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  120000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-window-shutter-w2560'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  120000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 玄関ドア: ヴェナートD30
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'entrance-door' LIMIT 1),
  'ext-door-venato-d30',
  'ヴェナートD30',
  '玄関ドア',
  'YKKAP',
  'D30-C10N',
  '100V電気錠 ポケットキー付き 防火・非防火対応 [ヴェナートD30]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-door-venato-d30'),
  'ext-door-venato-d30-v1',
  'アイスブルーノーチェ',
  'アイスブルーノーチェ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-door-venato-d30'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-door-venato-d30'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: 外部コンセント（1カ所標準）
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-outlet-std',
  '外部コンセント（1カ所標準）',
  '外部設備',
  'Panasonic',
  'EXT-OUTLET',
  '外部コンセント（1カ所標準） [外部コンセント]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-outlet-std'),
  'ext-facility-outlet-std-v1',
  '標準',
  '標準',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-outlet-std'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-outlet-std'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: 外部コンセント追加
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-outlet-add',
  '外部コンセント追加',
  '外部設備',
  'Panasonic',
  'EXT-OUTLET-ADD',
  '外部コンセント追加 [外部コンセント]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-outlet-add'),
  'ext-facility-outlet-add-v1',
  '標準',
  '標準',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-outlet-add'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  12000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-outlet-add'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  12000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: EV用コンセント
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-ev-outlet',
  'EV用コンセント',
  '外部設備',
  'Panasonic',
  'EV-OUTLET',
  'EV用コンセント（1ヶ所） [外部コンセント]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-ev-outlet'),
  'ext-facility-ev-outlet-v1',
  '標準',
  '標準',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-ev-outlet'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  20000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-ev-outlet'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  20000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: 散水栓
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-sansui',
  '散水栓',
  '外部設備',
  'オンリーワン',
  'GM3-ALKCF',
  '散水栓（排水なし） 標準で1カ所取付可能 [外部水栓]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-sansui'),
  'ext-facility-sansui-v1',
  'メタリックシルバー',
  'メタリックシルバー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-sansui'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-sansui'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: 立水栓
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-tachimizu',
  '立水栓',
  '外部設備',
  'オンリーワン',
  'GM3-ALSCF',
  '立水栓（排水なし） 標準で1カ所取付可能 [外部水栓]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-tachimizu'),
  'ext-facility-tachimizu-v1',
  'ブラック',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-tachimizu'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-tachimizu'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: アルミ立水栓追加
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-tachimizu-add',
  'アルミ立水栓追加',
  '外部設備',
  'オンリーワン',
  'ALU-FAUCET-ADD',
  'アルミ立水栓追加 [外部水栓]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-tachimizu-add'),
  'ext-facility-tachimizu-add-v1',
  'シルバー',
  'シルバー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-tachimizu-add'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  28000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-tachimizu-add'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  28000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: 玄関用マルチフック
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-multihook',
  '玄関用マルチフック',
  '外部設備',
  '森田アルミ',
  'VIK',
  '玄関用マルチフック（下地込み） [外部設備]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-multihook'),
  'ext-facility-multihook-v1',
  'シルバー',
  'シルバー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-multihook'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  20000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-multihook'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  20000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: タープフック
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-tarphook',
  'タープフック',
  '外部設備',
  'フジワラ',
  'IP-12',
  'アイプレートIP-12（2個セット・下地込み） [外部設備]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-tarphook'),
  'ext-facility-tarphook-v1',
  'シルバー',
  'シルバー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-tarphook'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-tarphook'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: エアコンスリーブキャップ（5カ所標準）
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-ac-sleeve-std',
  'エアコンスリーブキャップ（5カ所標準）',
  '外部設備',
  '標準',
  'AC-SLEEVE',
  'エアコンスリーブキャップ（5カ所標準） [外部設備]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-ac-sleeve-std'),
  'ext-facility-ac-sleeve-std-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-ac-sleeve-std'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-ac-sleeve-std'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 外部設備: エアコンスリーブキャップ追加
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'exterior-facility' LIMIT 1),
  'ext-facility-ac-sleeve-add',
  'エアコンスリーブキャップ追加',
  '外部設備',
  '標準',
  'AC-SLEEVE-ADD',
  'エアコンスリーブキャップ追加 [外部設備]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-ac-sleeve-add'),
  'ext-facility-ac-sleeve-add-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-ac-sleeve-add'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  12000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-facility-ac-sleeve-add'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  12000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- エコキュート: エコキュート370L（標準）
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'ecocute' LIMIT 1),
  'ext-ecocute-standard',
  'エコキュート370L（標準）',
  'エコキュート',
  'Panasonic',
  'HE-S37LQS',
  'Sシリーズ 370L 標準（外部設置） [エコキュート]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-standard'),
  'ext-ecocute-standard-v1',
  '標準',
  '標準',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-standard'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-standard'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- エコキュート: エコキュート460L
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'ecocute' LIMIT 1),
  'ext-ecocute-460l',
  'エコキュート460L',
  'エコキュート',
  'Panasonic',
  'HE-S46LQS',
  'Sシリーズ 460Lに変更 [エコキュート]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-460l'),
  'ext-ecocute-460l-v1',
  '標準',
  '標準',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-460l'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  100000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-460l'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  100000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- エコキュート: ウルトラ高圧エコキュート370L
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'ecocute' LIMIT 1),
  'ext-ecocute-ultra-370l',
  'ウルトラ高圧エコキュート370L',
  'エコキュート',
  'Panasonic',
  'HE-SU37LQS',
  'Sシリーズ ウルトラ高圧370Lに変更 [エコキュート]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-ultra-370l'),
  'ext-ecocute-ultra-370l-v1',
  '標準',
  '標準',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-ultra-370l'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  100000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-ultra-370l'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  100000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- エコキュート: ウルトラ高圧エコキュート460L
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'ecocute' LIMIT 1),
  'ext-ecocute-ultra-460l',
  'ウルトラ高圧エコキュート460L',
  'エコキュート',
  'Panasonic',
  'HE-SU46LQS',
  'Sシリーズ ウルトラ高圧460Lに変更 [エコキュート]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-ultra-460l'),
  'ext-ecocute-ultra-460l-v1',
  '標準',
  '標準',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-ultra-460l'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  145000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'ext-ecocute-ultra-460l'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  145000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;



-- ==============================
-- interiorProducts.ts からのインポート
-- ==============================

-- 家具: Gハウスオリジナル ダイニングテーブル
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'furniture' LIMIT 1),
  'int-dt-001',
  'Gハウスオリジナル ダイニングテーブル',
  '家具',
  'Gハウス',
  'GH-DT-001',
  'メラミン化粧板天板、スチール脚、コンセント付き [ダイニングテーブル]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-dt-001'),
  'int-dt-001-v1',
  'NTナチュラル×スクエア・ブラック',
  'NTナチュラル×スクエア・ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-dt-001'),
  'int-dt-001-v2',
  'BRブラウン×スクエア・ブラック',
  'BRブラウン×スクエア・ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-dt-001'),
  'int-dt-001-v3',
  'DRダーク×スクエア・ブラック',
  'DRダーク×スクエア・ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-dt-001'),
  'int-dt-001-v4',
  'DUダストグレー×スクエア・ホワイト',
  'DUダストグレー×スクエア・ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-dt-001'),
  'int-dt-001-v5',
  'KRカブリード×ラウンド・ブラック',
  'KRカブリード×ラウンド・ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-dt-001'),
  'int-dt-001-v6',
  'FMファインモルタル×ラウンド・ホワイト',
  'FMファインモルタル×ラウンド・ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-dt-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  130000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-dt-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  140000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 床材: ブラックチェリー
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'flooring' LIMIT 1),
  'int-floor-001',
  'ブラックチェリー',
  '床材',
  '朝日ウッドテック',
  'MSX-BCH',
  '突き板フローリング、マット塗装 [ライブナチュラルMSX]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-001'),
  'int-floor-001-v1',
  'ブラックチェリー',
  'ブラックチェリー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 床材: ハードメイプル
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'flooring' LIMIT 1),
  'int-floor-002',
  'ハードメイプル',
  '床材',
  '朝日ウッドテック',
  'MSX-HMP',
  '突き板フローリング、マット塗装 [ライブナチュラルMSX]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-002'),
  'int-floor-002-v1',
  'ハードメイプル',
  'ハードメイプル',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 床材: シカモア
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'flooring' LIMIT 1),
  'int-floor-003',
  'シカモア',
  '床材',
  '朝日ウッドテック',
  'MSX-SYC',
  '突き板フローリング、マット塗装 [ライブナチュラルMSX]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-003'),
  'int-floor-003-v1',
  'シカモア',
  'シカモア',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 床材: ブラックウォルナット
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'flooring' LIMIT 1),
  'int-floor-004',
  'ブラックウォルナット',
  '床材',
  '朝日ウッドテック',
  'MSX-BWN',
  '突き板フローリング、マット塗装 [ライブナチュラルMSX]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-004'),
  'int-floor-004-v1',
  'ブラックウォルナット',
  'ブラックウォルナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-004'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-004'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 床材: オーク
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'flooring' LIMIT 1),
  'int-floor-005',
  'オーク',
  '床材',
  '朝日ウッドテック',
  'MSX-OAK',
  '突き板フローリング、マット塗装 [ライブナチュラルMSX]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-005'),
  'int-floor-005-v1',
  'オーク',
  'オーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-005'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-floor-005'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 建具: PAデザイン
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'interior-door' LIMIT 1),
  'int-door-001',
  'PAデザイン',
  '建具',
  'LIXIL',
  'PA',
  'ハイドア標準（H2400） [スタンダードレーベル]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  'int-door-001-v1',
  'ソフトウォールナット',
  'ソフトウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  'int-door-001-v2',
  'ウォールナット',
  'ウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  'int-door-001-v3',
  'チェリー',
  'チェリー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  'int-door-001-v4',
  'グレージュアッシュ',
  'グレージュアッシュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  'int-door-001-v5',
  'イタリアオーク',
  'イタリアオーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  'int-door-001-v6',
  'メープル',
  'メープル',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  'int-door-001-v7',
  'ホワイトオーク',
  'ホワイトオーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  'int-door-001-v8',
  'ホワイトアッシュ',
  'ホワイトアッシュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  'int-door-001-v9',
  'しっくいホワイト',
  'しっくいホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 建具: LAデザイン
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'interior-door' LIMIT 1),
  'int-door-002',
  'LAデザイン',
  '建具',
  'LIXIL',
  'LA',
  'ハイドア標準（H2400） [スタンダードレーベル]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  'int-door-002-v1',
  'ソフトウォールナット',
  'ソフトウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  'int-door-002-v2',
  'ウォールナット',
  'ウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  'int-door-002-v3',
  'チェリー',
  'チェリー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  'int-door-002-v4',
  'グレージュアッシュ',
  'グレージュアッシュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  'int-door-002-v5',
  'イタリアオーク',
  'イタリアオーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  'int-door-002-v6',
  'メープル',
  'メープル',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  'int-door-002-v7',
  'ホワイトオーク',
  'ホワイトオーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  'int-door-002-v8',
  'ホワイトアッシュ',
  'ホワイトアッシュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  'int-door-002-v9',
  'しっくいホワイト',
  'しっくいホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 建具: TAデザイン
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'interior-door' LIMIT 1),
  'int-door-003',
  'TAデザイン',
  '建具',
  'LIXIL',
  'TA',
  'ハイドア標準（H2400） [スタンダードレーベル]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  'int-door-003-v1',
  'ソフトウォールナット',
  'ソフトウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  'int-door-003-v2',
  'ウォールナット',
  'ウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  'int-door-003-v3',
  'チェリー',
  'チェリー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  'int-door-003-v4',
  'グレージュアッシュ',
  'グレージュアッシュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  'int-door-003-v5',
  'イタリアオーク',
  'イタリアオーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  'int-door-003-v6',
  'メープル',
  'メープル',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  'int-door-003-v7',
  'ホワイトオーク',
  'ホワイトオーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  'int-door-003-v8',
  'ホワイトアッシュ',
  'ホワイトアッシュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  'int-door-003-v9',
  'しっくいホワイト',
  'しっくいホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-door-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 階段: 階段セット
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'stairs' LIMIT 1),
  'int-stairs-001',
  '階段セット',
  '階段',
  'LIXIL',
  'STAIRS-SET',
  '踏板・蹴込板セット [階段踏板/蹴込板]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-001'),
  'int-stairs-001-v1',
  'しっくいホワイト',
  'しっくいホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-001'),
  'int-stairs-001-v2',
  'ソイルブラック',
  'ソイルブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-001'),
  'int-stairs-001-v3',
  'パールグレー',
  'パールグレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-001'),
  'int-stairs-001-v4',
  'ゴム集成クリア塗装',
  'ゴム集成クリア塗装',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 階段: 階段手摺セット
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'stairs' LIMIT 1),
  'int-stairs-002',
  '階段手摺セット',
  '階段',
  'LIXIL',
  'HANDRAIL-SET',
  '階段手摺（壁付け） [階段手摺]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  'int-stairs-002-v1',
  'ソフトウォールナット',
  'ソフトウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  'int-stairs-002-v2',
  'ウォールナット',
  'ウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  'int-stairs-002-v3',
  'チェリー',
  'チェリー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  'int-stairs-002-v4',
  'グレージュアッシュ',
  'グレージュアッシュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  'int-stairs-002-v5',
  'イタリアオーク',
  'イタリアオーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  'int-stairs-002-v6',
  'メープル',
  'メープル',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  'int-stairs-002-v7',
  'ホワイトオーク',
  'ホワイトオーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  'int-stairs-002-v8',
  'ホワイトアッシュ',
  'ホワイトアッシュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  'int-stairs-002-v9',
  'しっくいホワイト',
  'しっくいホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-stairs-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 収納: 枕棚+PH
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'storage' LIMIT 1),
  'int-storage-001',
  '枕棚+PH',
  '収納',
  'Panasonic',
  'STORAGE-A',
  '標準：枕棚+パイプハンガー（各寝室1カ所、横幅2730迄） [クローゼット]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-001'),
  'int-storage-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 収納: 枕棚+PH（追加）
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'storage' LIMIT 1),
  'int-storage-002',
  '枕棚+PH（追加）',
  '収納',
  'Panasonic',
  'STORAGE-B',
  'オプション：枕棚+パイプハンガー（追加分） [クローゼット]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-002'),
  'int-storage-002-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 収納: インテグレート可動棚
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'storage' LIMIT 1),
  'int-storage-003',
  'インテグレート可動棚',
  '収納',
  'Panasonic',
  'INTEGRATE-01',
  '可動棚システム（W900×H2400） [システム収納]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-003'),
  'int-storage-003-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-003'),
  'int-storage-003-v2',
  'ライトナチュラル',
  'ライトナチュラル',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-003'),
  'int-storage-003-v3',
  'ダークブラウン',
  'ダークブラウン',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  85000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-storage-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  90000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 造作: リモコンニッチ パターンA
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'niche' LIMIT 1),
  'int-niche-001',
  'リモコンニッチ パターンA',
  '造作',
  'Gハウス',
  'GH-NICHE-A',
  '壁埋め込み型リモコンニッチ（W300×H400） [リモコンニッチ]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-001'),
  'int-niche-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-001'),
  'int-niche-001-v2',
  'ナチュラルバーチ',
  'ナチュラルバーチ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-001'),
  'int-niche-001-v3',
  'アッシュウォールナット',
  'アッシュウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 造作: リモコンニッチ パターンB
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'niche' LIMIT 1),
  'int-niche-002',
  'リモコンニッチ パターンB',
  '造作',
  'Gハウス',
  'GH-NICHE-B',
  '壁埋め込み型リモコンニッチ（W450×H400） [リモコンニッチ]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-002'),
  'int-niche-002-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-002'),
  'int-niche-002-v2',
  'ナチュラルバーチ',
  'ナチュラルバーチ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-002'),
  'int-niche-002-v3',
  'アッシュウォールナット',
  'アッシュウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 造作: 飾り棚ニッチ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'niche' LIMIT 1),
  'int-niche-003',
  '飾り棚ニッチ',
  '造作',
  'Gハウス',
  'GH-NICHE-SHELF',
  '壁埋め込み型飾り棚（W600×H400） [飾り棚ニッチ]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-003'),
  'int-niche-003-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-003'),
  'int-niche-003-v2',
  'ナチュラルバーチ',
  'ナチュラルバーチ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-003'),
  'int-niche-003-v3',
  'アッシュウォールナット',
  'アッシュウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  25000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-niche-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  28000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 壁材: サンゲツ ベースクロス
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'wallpaper' LIMIT 1),
  'int-wall-001',
  'サンゲツ ベースクロス',
  '壁材',
  'サンゲツ',
  'SP-2801',
  '標準ベースクロス（全室標準） [ベースクロス]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-wall-001'),
  'int-wall-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-wall-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-wall-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 壁材: サンゲツ厳選カタログ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'wallpaper' LIMIT 1),
  'int-wall-002',
  'サンゲツ厳選カタログ',
  '壁材',
  'サンゲツ',
  'SANGETSU-SELECT',
  '標準アクセントクロス（1室1面まで無料） [アクセントクロス]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-wall-002'),
  'int-wall-002-v1',
  '厳選カタログから選択',
  '厳選カタログから選択',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-wall-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-wall-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 壁材: セメンティング
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'wallpaper' LIMIT 1),
  'int-tile-001',
  'セメンティング',
  '壁材',
  '名古屋モザイク',
  'ORG-U7810',
  '598×298×9mm角平 [アクセントタイル]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-001'),
  'int-tile-001-v1',
  'ホワイト系',
  'ホワイト系',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-001'),
  'int-tile-001-v2',
  'グレー系',
  'グレー系',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-001'),
  'int-tile-001-v3',
  'ブラウン系',
  'ブラウン系',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  32000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 壁材: モデネーゼ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'wallpaper' LIMIT 1),
  'int-tile-002',
  'モデネーゼ',
  '壁材',
  '名古屋モザイク',
  'XCV-U3200',
  '600×298×10mm角平 [アクセントタイル]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-002'),
  'int-tile-002-v1',
  'ホワイト系',
  'ホワイト系',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-002'),
  'int-tile-002-v2',
  'グレー系',
  'グレー系',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-002'),
  'int-tile-002-v3',
  'ベージュ系',
  'ベージュ系',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  28000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 壁材: ラヴィータ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'wallpaper' LIMIT 1),
  'int-tile-003',
  'ラヴィータ',
  '壁材',
  '名古屋モザイク',
  'MSY-U9100',
  '600×298×8mm角平 [アクセントタイル]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-003'),
  'int-tile-003-v1',
  'ホワイト系',
  'ホワイト系',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-003'),
  'int-tile-003-v2',
  'グレー系',
  'グレー系',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-003'),
  'int-tile-003-v3',
  'ブラウン系',
  'ブラウン系',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  22000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  24000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 壁材: ストーンベニア
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'wallpaper' LIMIT 1),
  'int-tile-004',
  'ストーンベニア',
  '壁材',
  'ADVAN',
  'SV-001',
  '天然石薄板タイル [アクセントタイル]',
  (SELECT id FROM units WHERE code = 'sqm' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-004'),
  'int-tile-004-v1',
  'クォーツサイト',
  'クォーツサイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-004'),
  'int-tile-004-v2',
  'スレート',
  'スレート',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-004'),
  'int-tile-004-v3',
  'サンドストーン',
  'サンドストーン',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-004'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  45000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-tile-004'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  48000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 電気設備: コスモワイド21
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'electrical' LIMIT 1),
  'int-elec-001',
  'コスモワイド21',
  '電気設備',
  'Panasonic',
  'COSMO-WIDE21',
  'スクエアタイプ/ホワイト（標準） [スイッチ/コンセント]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-001'),
  'int-elec-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 電気設備: アドバンスシリーズ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'electrical' LIMIT 1),
  'int-elec-002',
  'アドバンスシリーズ',
  '電気設備',
  'Panasonic',
  'ADVANCE-21',
  'デザインスイッチ [スイッチ/コンセント]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-002'),
  'int-elec-002-v1',
  'マットホワイト',
  'マットホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-002'),
  'int-elec-002-v2',
  'マットグレー',
  'マットグレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-002'),
  'int-elec-002-v3',
  'マットブラック',
  'マットブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  3000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  3000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 電気設備: USB充電用コンセント
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'electrical' LIMIT 1),
  'int-elec-003',
  'USB充電用コンセント',
  '電気設備',
  'Panasonic',
  'WTF14714W',
  'USB Type-A×2口付きコンセント [USB付コンセント]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-003'),
  'int-elec-003-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  8000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-elec-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  8000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 照明: LEDダウンライト 60W相当
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'lighting' LIMIT 1),
  'int-light-001',
  'LEDダウンライト 60W相当',
  '照明',
  'Panasonic',
  'NNN61510W',
  '標準ダウンライト（昼白色） [ダウンライト]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-001'),
  'int-light-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 照明: LEDダウンライト 調光タイプ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'lighting' LIMIT 1),
  'int-light-002',
  'LEDダウンライト 調光タイプ',
  '照明',
  'Panasonic',
  'NNN61511W',
  '調光機能付きダウンライト [ダウンライト]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-002'),
  'int-light-002-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  5000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  5000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 照明: ペンダントライト
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'lighting' LIMIT 1),
  'int-light-003',
  'ペンダントライト',
  '照明',
  'Panasonic',
  'LGB15141BK',
  'ダイニング用ペンダントライト [ペンダントライト]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-003'),
  'int-light-003-v1',
  'ブラック',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-003'),
  'int-light-003-v2',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-003'),
  'int-light-003-v3',
  'ウッド調',
  'ウッド調',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  25000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-light-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  28000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 換気: 第一種換気システム
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'ventilation' LIMIT 1),
  'int-vent-001',
  '第一種換気システム',
  '換気',
  'Panasonic',
  'FY-GPP024-W',
  '熱交換ユニット、給気グリル、排気グリル [換気システム]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-vent-001'),
  'int-vent-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-vent-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-vent-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 換気: 浴室換気暖房乾燥機
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'ventilation' LIMIT 1),
  'int-vent-002',
  '浴室換気暖房乾燥機',
  '換気',
  'Panasonic',
  'FY-13UGPS4D',
  '1室換気・暖房・乾燥・涼風 [換気扇]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-vent-002'),
  'int-vent-002-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-vent-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  85000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-vent-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  90000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 空調: Eシリーズ 6畳用
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'aircon' LIMIT 1),
  'int-ac-001',
  'Eシリーズ 6畳用',
  '空調',
  'ダイキン',
  'S225ATES-W',
  '100V対応、施工費含む [エアコン]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-001'),
  'int-ac-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  110000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  110000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 空調: Eシリーズ 8畳用
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'aircon' LIMIT 1),
  'int-ac-002',
  'Eシリーズ 8畳用',
  '空調',
  'ダイキン',
  'S255ATES-W',
  '100V対応、施工費含む [エアコン]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-002'),
  'int-ac-002-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  130000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  130000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 空調: Eシリーズ 10畳用
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'aircon' LIMIT 1),
  'int-ac-003',
  'Eシリーズ 10畳用',
  '空調',
  'ダイキン',
  'S285ATES-W',
  '100V対応、施工費含む [エアコン]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-003'),
  'int-ac-003-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-003'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 空調: Eシリーズ 14畳用
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'aircon' LIMIT 1),
  'int-ac-004',
  'Eシリーズ 14畳用',
  '空調',
  'ダイキン',
  'S405ATEP-W',
  '200V対応、施工費含む [エアコン]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-004'),
  'int-ac-004-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-004'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  192000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-004'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  192000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 空調: Eシリーズ 18畳用
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'aircon' LIMIT 1),
  'int-ac-005',
  'Eシリーズ 18畳用',
  '空調',
  'ダイキン',
  'S565ATEP-W',
  '200V対応、施工費含む [エアコン]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-005'),
  'int-ac-005-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-005'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  240000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-ac-005'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  240000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- カーテン: 遮光カーテン
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'curtain' LIMIT 1),
  'int-curtain-001',
  '遮光カーテン',
  'カーテン',
  'サンゲツ',
  'SC-3351',
  '標準遮光カーテン（寝室用） [ドレープカーテン]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-001'),
  'int-curtain-001-v1',
  'アイボリー',
  'アイボリー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-001'),
  'int-curtain-001-v2',
  'ベージュ',
  'ベージュ',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-001'),
  'int-curtain-001-v3',
  'グレー',
  'グレー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-001'),
  'int-curtain-001-v4',
  'ブラウン',
  'ブラウン',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-001'),
  'int-curtain-001-v5',
  'ネイビー',
  'ネイビー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- カーテン: ミラーレースカーテン
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'curtain' LIMIT 1),
  'int-curtain-002',
  'ミラーレースカーテン',
  'カーテン',
  'サンゲツ',
  'SC-3851',
  '標準レースカーテン（全室） [レースカーテン]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-002'),
  'int-curtain-002-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-002'),
  'int-curtain-002-v2',
  'オフホワイト',
  'オフホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-curtain-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- ブラインド: アルミブラインド 25mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'blind' LIMIT 1),
  'int-blind-001',
  'アルミブラインド 25mm',
  'ブラインド',
  'タチカワブラインド',
  'SB-25',
  'スラット幅25mm [アルミブラインド]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-001'),
  'int-blind-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-001'),
  'int-blind-001-v2',
  'シルバー',
  'シルバー',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-001'),
  'int-blind-001-v3',
  'ブラック',
  'ブラック',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  15000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  16000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- ブラインド: ウッドブラインド 35mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'blind' LIMIT 1),
  'int-blind-002',
  'ウッドブラインド 35mm',
  'ブラインド',
  'タチカワブラインド',
  'WB-35',
  'スラット幅35mm [ウッドブラインド]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-002'),
  'int-blind-002-v1',
  'ナチュラル',
  'ナチュラル',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-002'),
  'int-blind-002-v2',
  'ダークブラウン',
  'ダークブラウン',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-002'),
  'int-blind-002-v3',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  35000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-blind-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  38000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 造作家具: 造作TVボード
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'furniture' LIMIT 1),
  'int-furniture-001',
  '造作TVボード',
  '造作家具',
  'Gハウス',
  'GH-TV-001',
  'W1800×D450×H400 壁掛け式 [TVボード]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-001'),
  'int-furniture-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-001'),
  'int-furniture-001-v2',
  'オーク',
  'オーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-001'),
  'int-furniture-001-v3',
  'ウォールナット',
  'ウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  160000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 造作家具: 造作カウンター
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'furniture' LIMIT 1),
  'int-furniture-002',
  '造作カウンター',
  '造作家具',
  'Gハウス',
  'GH-COUNTER-001',
  'スタディカウンター W1800×D600 [カウンター]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-002'),
  'int-furniture-002-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-002'),
  'int-furniture-002-v2',
  'オーク',
  'オーク',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-002'),
  'int-furniture-002-v3',
  'ウォールナット',
  'ウォールナット',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  120000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-furniture-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  130000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 手摺: 室内用手摺
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'handrail' LIMIT 1),
  'int-handrail-001',
  '室内用手摺',
  '手摺',
  'TOTO',
  'YHB601',
  'I型手摺 L600mm [室内手摺]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-handrail-001'),
  'int-handrail-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-handrail-001'),
  'int-handrail-001-v2',
  'ライトウッド',
  'ライトウッド',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-handrail-001'),
  'int-handrail-001-v3',
  'ダークウッド',
  'ダークウッド',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-handrail-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  12000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-handrail-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  13000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 物干し: ホスクリーン
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'hanger' LIMIT 1),
  'int-hanger-001',
  'ホスクリーン',
  '物干し',
  '川口技研',
  'SPC-W',
  '天井付け室内物干し（2本1組） [室内物干し]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-hanger-001'),
  'int-hanger-001-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-hanger-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  15000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-hanger-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  16000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 物干し: ホシ姫サマ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'hanger' LIMIT 1),
  'int-hanger-002',
  'ホシ姫サマ',
  '物干し',
  'Panasonic',
  'CWFE12CM',
  '電動式室内物干しユニット [室内物干し]',
  (SELECT id FROM units WHERE code = 'piece' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-hanger-002'),
  'int-hanger-002-v1',
  'ホワイト',
  'ホワイト',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-hanger-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  85000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'int-hanger-002'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  90000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;



-- ==============================
-- waterEquipmentProducts.ts からのインポート
-- ==============================

-- キッチン: Panasonic S-Class アイランド型 2550mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'kitchen' LIMIT 1),
  'kitchen-panasonic-sclass-island-001',
  'Panasonic S-Class アイランド型 2550mm',
  'キッチン',
  'パナソニック',
  'S-Class-Island-2550',
  'アイランド型システムキッチン、IHコンロ、食器洗い乾燥機付き [システムキッチン]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-island-001'),
  'kitchen-panasonic-sclass-island-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-island-001'),
  'kitchen-panasonic-sclass-island-001-v2',
  'ダークグレー',
  'DARK_GRAY',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-island-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-island-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-island-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  200000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-island-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  250000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- キッチン: Panasonic S-Class ペニンシュラ型 2585mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'kitchen' LIMIT 1),
  'kitchen-panasonic-sclass-peninsula-001',
  'Panasonic S-Class ペニンシュラ型 2585mm',
  'キッチン',
  'パナソニック',
  'S-Class-Peninsula-2585',
  'ペニンシュラ型システムキッチン、IHコンロ、食器洗い乾燥機付き [システムキッチン]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-peninsula-001'),
  'kitchen-panasonic-sclass-peninsula-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-peninsula-001'),
  'kitchen-panasonic-sclass-peninsula-001-v2',
  'ウォールナット',
  'WALNUT',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-peninsula-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-peninsula-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  130000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-peninsula-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  180000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-panasonic-sclass-peninsula-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  230000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- キッチン: タカラスタンダード オフェリア 2550mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'kitchen' LIMIT 1),
  'kitchen-takara-ofelia-001',
  'タカラスタンダード オフェリア 2550mm',
  'キッチン',
  'タカラスタンダード',
  'OFELIA-2550',
  'ホーローシステムキッチン、高品位ホーロー仕様 [システムキッチン]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-ofelia-001'),
  'kitchen-takara-ofelia-001-v1',
  'クリスタルホワイト',
  'CRYSTAL_WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-ofelia-001'),
  'kitchen-takara-ofelia-001-v2',
  'ロイヤルブルー',
  'ROYAL_BLUE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-ofelia-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  120000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-ofelia-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  120000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-ofelia-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-ofelia-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  200000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- キッチン: タカラスタンダード グランディア 2700mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'kitchen' LIMIT 1),
  'kitchen-takara-grandia-001',
  'タカラスタンダード グランディア 2700mm',
  'キッチン',
  'タカラスタンダード',
  'GRANDIA-2700',
  '最高級ホーローシステムキッチン、フルフラット対面式 [システムキッチン]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-grandia-001'),
  'kitchen-takara-grandia-001-v1',
  'プレミアムホワイト',
  'PREMIUM_WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-grandia-001'),
  'kitchen-takara-grandia-001-v2',
  'ノーブルグレー',
  'NOBLE_GRAY',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-grandia-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  180000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-grandia-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  180000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-grandia-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  220000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-takara-grandia-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  280000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- キッチン: LIXIL リシェル 2550mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'kitchen' LIMIT 1),
  'kitchen-lixil-richelle-001',
  'LIXIL リシェル 2550mm',
  'キッチン',
  'LIXIL',
  'RICHELLE-2550',
  'セラミックトップ仕様、高機能システムキッチン [システムキッチン]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-richelle-001'),
  'kitchen-lixil-richelle-001-v1',
  'グレイッシュホワイト',
  'GRAYISH_WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-richelle-001'),
  'kitchen-lixil-richelle-001-v2',
  'チャコールブラック',
  'CHARCOAL_BLACK',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-richelle-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-richelle-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-richelle-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  190000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-richelle-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  240000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- キッチン: LIXIL ノクト 2400mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'kitchen' LIMIT 1),
  'kitchen-lixil-noct-001',
  'LIXIL ノクト 2400mm',
  'キッチン',
  'LIXIL',
  'NOCT-2400',
  'スタンダードシステムキッチン、機能性重視 [システムキッチン]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-noct-001'),
  'kitchen-lixil-noct-001-v1',
  'ピュアホワイト',
  'PURE_WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-noct-001'),
  'kitchen-lixil-noct-001-v2',
  'ダークウッド',
  'DARK_WOOD',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-noct-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  100000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-noct-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  100000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-noct-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  130000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'kitchen-lixil-noct-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  170000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- バスルーム: Panasonic オフローラ 1616サイズ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'bathroom' LIMIT 1),
  'bathroom-panasonic-oflora-1616-001',
  'Panasonic オフローラ 1616サイズ',
  'バスルーム',
  'パナソニック',
  'OFLORA-1616',
  'スミピカフロア、保温浴槽II、LEDライン照明付き [システムバス]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1616-001'),
  'bathroom-panasonic-oflora-1616-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1616-001'),
  'bathroom-panasonic-oflora-1616-001-v2',
  'ベージュ',
  'BEIGE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1616-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1616-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  80000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1616-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  120000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1616-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  180000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- バスルーム: Panasonic オフローラ 1618サイズ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'bathroom' LIMIT 1),
  'bathroom-panasonic-oflora-1618-001',
  'Panasonic オフローラ 1618サイズ',
  'バスルーム',
  'パナソニック',
  'OFLORA-1618',
  'ワイドサイズ、スミピカフロア、保温浴槽II、LEDライン照明付き [システムバス]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1618-001'),
  'bathroom-panasonic-oflora-1618-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1618-001'),
  'bathroom-panasonic-oflora-1618-001-v2',
  'グレー',
  'GRAY',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1618-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  20000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1618-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  100000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1618-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  140000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1618-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  200000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- バスルーム: Panasonic オフローラ 1620サイズ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'bathroom' LIMIT 1),
  'bathroom-panasonic-oflora-1620-001',
  'Panasonic オフローラ 1620サイズ',
  'バスルーム',
  'パナソニック',
  'OFLORA-1620',
  '特大サイズ、スミピカフロア、保温浴槽II、LEDライン照明付き [システムバス]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1620-001'),
  'bathroom-panasonic-oflora-1620-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1620-001'),
  'bathroom-panasonic-oflora-1620-001-v2',
  'ダークブラウン',
  'DARK_BROWN',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1620-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  40000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1620-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  120000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1620-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  160000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-panasonic-oflora-1620-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  220000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- バスルーム: LIXIL AX 1616サイズ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'bathroom' LIMIT 1),
  'bathroom-lixil-ax-1616-001',
  'LIXIL AX 1616サイズ',
  'バスルーム',
  'LIXIL',
  'AX-1616',
  'キレイサーモフロア、サーモバスS、エコフルシャワー付き [システムバス]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1616-001'),
  'bathroom-lixil-ax-1616-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1616-001'),
  'bathroom-lixil-ax-1616-001-v2',
  'ピンク',
  'PINK',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1616-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  90000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1616-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  90000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1616-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  130000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1616-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  190000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- バスルーム: LIXIL AX 1618サイズ
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'bathroom' LIMIT 1),
  'bathroom-lixil-ax-1618-001',
  'LIXIL AX 1618サイズ',
  'バスルーム',
  'LIXIL',
  'AX-1618',
  'ワイドサイズ、キレイサーモフロア、サーモバスS、エコフルシャワー付き [システムバス]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1618-001'),
  'bathroom-lixil-ax-1618-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1618-001'),
  'bathroom-lixil-ax-1618-001-v2',
  'ブルーグレー',
  'BLUE_GRAY',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1618-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  110000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1618-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  110000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1618-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-lixil-ax-1618-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  210000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- トイレ: Panasonic アラウーノ Z160
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'toilet' LIMIT 1),
  'toilet-panasonic-arauno-z160-001',
  'Panasonic アラウーノ Z160',
  'トイレ',
  'パナソニック',
  'ARAUNO-Z160',
  'タンクレス、泡コート、自動洗浄機能付き [タンクレストイレ]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-panasonic-arauno-z160-001'),
  'toilet-panasonic-arauno-z160-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-panasonic-arauno-z160-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-panasonic-arauno-z160-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  50000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-panasonic-arauno-z160-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  80000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-panasonic-arauno-z160-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  120000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- トイレ: TOTO GG-J1
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'toilet' LIMIT 1),
  'toilet-toto-ggj1-001',
  'TOTO GG-J1',
  'トイレ',
  'TOTO',
  'GG-J1',
  'タンク式、セフィオンテクト、トルネード洗浄 [タンク式トイレ]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-ggj1-001'),
  'toilet-toto-ggj1-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-ggj1-001'),
  'toilet-toto-ggj1-001-v2',
  'パステルアイボリー',
  'PASTEL_IVORY',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-ggj1-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-ggj1-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-ggj1-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  50000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-ggj1-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  80000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- トイレ: TOTO ZJ1
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'toilet' LIMIT 1),
  'toilet-toto-zj1-001',
  'TOTO ZJ1',
  'トイレ',
  'TOTO',
  'ZJ1',
  'コンパクトタンク式、セフィオンテクト、節水型 [タンク式トイレ]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-zj1-001'),
  'toilet-toto-zj1-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-zj1-001'),
  'toilet-toto-zj1-001-v2',
  'パステルピンク',
  'PASTEL_PINK',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-zj1-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  25000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-zj1-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  25000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-zj1-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  45000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'toilet-toto-zj1-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  70000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 洗面化粧台: TOTO オクターブ 750mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'washroom' LIMIT 1),
  'washroom-toto-octave-750-001',
  'TOTO オクターブ 750mm',
  '洗面化粧台',
  'TOTO',
  'OCTAVE-750',
  '3面鏡、LED照明、引き出し収納タイプ [洗面化粧台]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-750-001'),
  'washroom-toto-octave-750-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-750-001'),
  'washroom-toto-octave-750-001-v2',
  'ライトウッド',
  'LIGHT_WOOD',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-750-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-750-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-750-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  50000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-750-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  80000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 洗面化粧台: TOTO オクターブ 900mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'washroom' LIMIT 1),
  'washroom-toto-octave-900-001',
  'TOTO オクターブ 900mm',
  '洗面化粧台',
  'TOTO',
  'OCTAVE-900',
  '3面鏡ワイド、LED照明、大容量引き出し収納タイプ [洗面化粧台]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-900-001'),
  'washroom-toto-octave-900-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-900-001'),
  'washroom-toto-octave-900-001-v2',
  'ダークウッド',
  'DARK_WOOD',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-900-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  20000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-900-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  50000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-900-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  70000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-toto-octave-900-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  100000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 洗面化粧台: INAX ピアラ 750mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'washroom' LIMIT 1),
  'washroom-inax-piara-750-001',
  'INAX ピアラ 750mm',
  '洗面化粧台',
  'INAX',
  'PIARA-750',
  '3面鏡、LED照明、扉タイプ収納 [洗面化粧台]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-750-001'),
  'washroom-inax-piara-750-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-750-001'),
  'washroom-inax-piara-750-001-v2',
  'ミントグリーン',
  'MINT_GREEN',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-750-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  25000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-750-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  25000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-750-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  45000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-750-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  70000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 洗面化粧台: INAX ピアラ 900mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'washroom' LIMIT 1),
  'washroom-inax-piara-900-001',
  'INAX ピアラ 900mm',
  '洗面化粧台',
  'INAX',
  'PIARA-900',
  '3面鏡ワイド、LED照明、大容量扉タイプ収納 [洗面化粧台]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-900-001'),
  'washroom-inax-piara-900-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-900-001'),
  'washroom-inax-piara-900-001-v2',
  'チェリーウッド',
  'CHERRY_WOOD',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-900-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  45000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-900-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  45000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-900-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  65000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'washroom-inax-piara-900-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  90000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 給湯器: パナソニック エコキュート 370L フルオート
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'water-heater' LIMIT 1),
  'water-heater-eco-cute-370l-001',
  'パナソニック エコキュート 370L フルオート',
  '給湯器',
  'パナソニック',
  'HE-NS37KQS',
  '省エネ給湯器、フルオート、高圧力型 [エコキュート]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-370l-001'),
  'water-heater-eco-cute-370l-001-v1',
  'シルバー',
  'SILVER',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-370l-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-370l-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  100000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-370l-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-370l-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  200000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 給湯器: パナソニック エコキュート 460L フルオート
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'water-heater' LIMIT 1),
  'water-heater-eco-cute-460l-001',
  'パナソニック エコキュート 460L フルオート',
  '給湯器',
  'パナソニック',
  'HE-NS46KQS',
  '大容量省エネ給湯器、フルオート、高圧力型 [エコキュート]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-460l-001'),
  'water-heater-eco-cute-460l-001-v1',
  'シルバー',
  'SILVER',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-460l-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  50000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-460l-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  150000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-460l-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  200000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-heater-eco-cute-460l-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  250000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 水処理設備: 全館軟水システム
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'water-equipment' LIMIT 1),
  'water-softener-001',
  '全館軟水システム',
  '水処理設備',
  'パナソニック',
  'SOFT-WATER-SYSTEM',
  '全館軟水化システム、自動再生機能付き [軟水器]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-softener-001'),
  'water-softener-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-softener-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  200000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-softener-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  200000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-softener-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  250000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'water-softener-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  300000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- 洗面化粧台: コンパクト洗面台 600mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'washroom' LIMIT 1),
  'second-washroom-001',
  'コンパクト洗面台 600mm',
  '洗面化粧台',
  'TOTO',
  'COMPACT-600',
  '2階用コンパクト洗面台、1面鏡付き [2階洗面]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'second-washroom-001'),
  'second-washroom-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'second-washroom-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'second-washroom-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'second-washroom-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  40000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'second-washroom-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  50000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- ランドリー: マルチシンク 600mm
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'laundry' LIMIT 1),
  'laundry-sink-001',
  'マルチシンク 600mm',
  'ランドリー',
  'TOTO',
  'MULTI-SINK-600',
  '深型洗濯流し、水栓付き [洗濯流し]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'laundry-sink-001'),
  'laundry-sink-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'laundry-sink-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  20000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'laundry-sink-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  20000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'laundry-sink-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'laundry-sink-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  40000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- バスルーム設備: 浴室暖房乾燥機 1室換気
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'bathroom-equipment' LIMIT 1),
  'bathroom-heater-dryer-001',
  '浴室暖房乾燥機 1室換気',
  'バスルーム設備',
  'パナソニック',
  'FY-13UG7E',
  '浴室暖房・乾燥・涼風・換気機能 [浴室暖房乾燥機]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-001'),
  'bathroom-heater-dryer-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  true,
  0
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  30000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  40000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  50000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;

-- バスルーム設備: 浴室暖房乾燥機 3室換気
INSERT INTO items (category_id, item_code, name, category_name, manufacturer, model_number, note, unit_id, is_active, display_order)
VALUES (
  (SELECT id FROM categories WHERE slug = 'bathroom-equipment' LIMIT 1),
  'bathroom-heater-dryer-3room-001',
  '浴室暖房乾燥機 3室換気',
  'バスルーム設備',
  'パナソニック',
  'FY-13UG7E-3',
  '浴室・洗面・トイレ3室換気対応 [浴室暖房乾燥機]',
  (SELECT id FROM units WHERE code = 'set' LIMIT 1),
  true,
  0
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  category_name = EXCLUDED.category_name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  note = EXCLUDED.note;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-3room-001'),
  'bathroom-heater-dryer-3room-001-v1',
  'ホワイト',
  'WHITE',
  true
) ON CONFLICT (item_id, variant_code) DO UPDATE SET
  color_name = EXCLUDED.color_name,
  color_code = EXCLUDED.color_code;

INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-3room-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE_PLUS' LIMIT 1),
  true,
  false,
  20000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-3room-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LIFE' LIMIT 1),
  true,
  false,
  50000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-3room-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'HOURS' LIMIT 1),
  true,
  false,
  60000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;
INSERT INTO item_pricing (item_id, variant_id, product_id, is_available, is_standard, price)
VALUES (
  (SELECT id FROM items WHERE item_code = 'bathroom-heater-dryer-3room-001'),
  NULL,
  (SELECT id FROM products WHERE code = 'LACIE' LIMIT 1),
  true,
  false,
  70000
) ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET
  is_standard = EXCLUDED.is_standard,
  price = EXCLUDED.price;


-- =====================================================
-- インポート完了
-- =====================================================
