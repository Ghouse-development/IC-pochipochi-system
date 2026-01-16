-- equipmentデータ移行
-- 自動生成: 2026-01-16T02:46:40.645Z

-- カテゴリ

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'キッチン',
  'kitchen',
  'equipment',
  true,
  false,
  0
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'バスルーム',
  'bathroom',
  'equipment',
  true,
  false,
  1
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'トイレ',
  'toilet',
  'equipment',
  true,
  false,
  2
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '洗面化粧台',
  'washroom',
  'equipment',
  true,
  false,
  3
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '給湯器',
  'water-heater',
  'equipment',
  true,
  false,
  4
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '玄関手洗い',
  'entrance-wash',
  'equipment',
  true,
  false,
  5
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ランドリー',
  'laundry',
  'equipment',
  true,
  false,
  6
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'バスルーム設備',
  'bathroom-equipment',
  'equipment',
  true,
  false,
  7
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

-- アイテム

-- Panasonic S-Class アイランド型 2550mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'kitchen-panasonic-sclass-island-001',
  'Panasonic S-Class アイランド型 2550mm',
  'Panasonic',
  'S-Class-Island-2550',
  NULL,
  'アイランド型システムキッチン、IHコンロ、食器洗い乾燥機付き',
  true,
  0,
  ARRAY['kitchen']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-panasonic-sclass-island-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'kitchen-panasonic-sclass-island-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-panasonic-sclass-island-001-v2', 'ダークグレー', 'DARK_GRAY', true, 1
FROM items WHERE item_code = 'kitchen-panasonic-sclass-island-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-panasonic-sclass-island-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-panasonic-sclass-island-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-panasonic-sclass-island-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 250000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-panasonic-sclass-island-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- Panasonic S-Class ペニンシュラ型 2585mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'kitchen-panasonic-sclass-peninsula-001',
  'Panasonic S-Class ペニンシュラ型 2585mm',
  'Panasonic',
  'S-Class-Peninsula-2585',
  NULL,
  'ペニンシュラ型システムキッチン、IHコンロ、食器洗い乾燥機付き',
  true,
  1,
  ARRAY['kitchen']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-panasonic-sclass-peninsula-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'kitchen-panasonic-sclass-peninsula-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-panasonic-sclass-peninsula-001-v2', 'ウォールナット', 'WALNUT', true, 1
FROM items WHERE item_code = 'kitchen-panasonic-sclass-peninsula-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-panasonic-sclass-peninsula-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-panasonic-sclass-peninsula-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 180000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-panasonic-sclass-peninsula-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 230000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-panasonic-sclass-peninsula-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- タカラスタンダード オフェリア 2550mm (タカラスタンダード)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'kitchen-takara-ofelia-001',
  'タカラスタンダード オフェリア 2550mm',
  'タカラスタンダード',
  'OFELIA-2550',
  NULL,
  'ホーローシステムキッチン、高品位ホーロー仕様',
  true,
  2,
  ARRAY['kitchen']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-takara-ofelia-001-v1', 'クリスタルホワイト', 'CRYSTAL_WHITE', true, 0
FROM items WHERE item_code = 'kitchen-takara-ofelia-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-takara-ofelia-001-v2', 'ロイヤルブルー', 'ROYAL_BLUE', true, 1
FROM items WHERE item_code = 'kitchen-takara-ofelia-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-takara-ofelia-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-takara-ofelia-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-takara-ofelia-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-takara-ofelia-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- タカラスタンダード グランディア 2700mm (タカラスタンダード)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'kitchen-takara-grandia-001',
  'タカラスタンダード グランディア 2700mm',
  'タカラスタンダード',
  'GRANDIA-2700',
  NULL,
  '最高級ホーローシステムキッチン、フルフラット対面式',
  true,
  3,
  ARRAY['kitchen']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-takara-grandia-001-v1', 'プレミアムホワイト', 'PREMIUM_WHITE', true, 0
FROM items WHERE item_code = 'kitchen-takara-grandia-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-takara-grandia-001-v2', 'ノーブルグレー', 'NOBLE_GRAY', true, 1
FROM items WHERE item_code = 'kitchen-takara-grandia-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 180000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-takara-grandia-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 180000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-takara-grandia-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 220000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-takara-grandia-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 280000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-takara-grandia-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- LIXIL リシェル 2550mm (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'kitchen-lixil-richelle-001',
  'LIXIL リシェル 2550mm',
  'LIXIL',
  'RICHELLE-2550',
  NULL,
  'セラミックトップ仕様、高機能システムキッチン',
  true,
  4,
  ARRAY['kitchen']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-lixil-richelle-001-v1', 'グレイッシュホワイト', 'GRAYISH_WHITE', true, 0
FROM items WHERE item_code = 'kitchen-lixil-richelle-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-lixil-richelle-001-v2', 'チャコールブラック', 'CHARCOAL_BLACK', true, 1
FROM items WHERE item_code = 'kitchen-lixil-richelle-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-lixil-richelle-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-lixil-richelle-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 190000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-lixil-richelle-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 240000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-lixil-richelle-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- グラフテクト キッチン (グラフテクト)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'kitchen-graftekt-001',
  'グラフテクト キッチン',
  'グラフテクト',
  'GRAFTEKT-KITCHEN',
  NULL,
  'デザイン性と機能性を兼ね備えたキッチン。29色×11レイアウトから選択可能',
  true,
  5,
  ARRAY['kitchen']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v1', 'ミッドナイトブラック', 'MIDNIGHT_BLACK', true, 0
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v2', 'クラウドホワイト', 'CLOUD_WHITE', true, 1
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v3', 'チャコールグレー', 'CHARCOAL_GRAY', true, 2
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v4', 'ペールグレー', 'PALE_GRAY', true, 3
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v5', 'ウォームベージュ', 'WARM_BEIGE', true, 4
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v6', 'モカブラウン', 'MOCHA_BROWN', true, 5
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v7', 'ダークウォールナット', 'DARK_WALNUT', true, 6
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v8', 'ナチュラルオーク', 'NATURAL_OAK', true, 7
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v9', 'ライトアッシュ', 'LIGHT_ASH', true, 8
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v10', 'グレイッシュブルー', 'GRAYISH_BLUE', true, 9
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v11', 'オリーブグリーン', 'OLIVE_GREEN', true, 10
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v12', 'テラコッタ', 'TERRACOTTA', true, 11
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v13', 'サンドベージュ', 'SAND_BEIGE', true, 12
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v14', 'ストーングレー', 'STONE_GRAY', true, 13
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v15', 'アイボリー', 'IVORY', true, 14
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v16', 'シャンパンゴールド', 'CHAMPAGNE_GOLD', true, 15
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v17', 'ローズウッド', 'ROSEWOOD', true, 16
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v18', 'マホガニー', 'MAHOGANY', true, 17
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v19', 'エボニー', 'EBONY', true, 18
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v20', 'スモークオーク', 'SMOKE_OAK', true, 19
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v21', 'ピュアホワイト', 'PURE_WHITE', true, 20
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v22', 'マットブラック', 'MATTE_BLACK', true, 21
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v23', 'スレートグレー', 'SLATE_GRAY', true, 22
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v24', 'ウォームグレー', 'WARM_GRAY', true, 23
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v25', 'ハニーオーク', 'HONEY_OAK', true, 24
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v26', 'チェスナット', 'CHESTNUT', true, 25
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v27', 'ペブルグレー', 'PEBBLE_GRAY', true, 26
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v28', 'ミストホワイト', 'MIST_WHITE', true, 27
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-graftekt-001-v29', 'アンティークブラウン', 'ANTIQUE_BROWN', true, 28
FROM items WHERE item_code = 'kitchen-graftekt-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1750000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-graftekt-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1750000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-graftekt-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1800000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-graftekt-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1850000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-graftekt-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- LIXIL ノクト 2400mm (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'kitchen-lixil-noct-001',
  'LIXIL ノクト 2400mm',
  'LIXIL',
  'NOCT-2400',
  NULL,
  'スタンダードシステムキッチン、機能性重視',
  true,
  6,
  ARRAY['kitchen']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-lixil-noct-001-v1', 'ピュアホワイト', 'PURE_WHITE', true, 0
FROM items WHERE item_code = 'kitchen-lixil-noct-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'kitchen-lixil-noct-001-v2', 'ダークウッド', 'DARK_WOOD', true, 1
FROM items WHERE item_code = 'kitchen-lixil-noct-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-lixil-noct-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-lixil-noct-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-lixil-noct-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 170000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'kitchen-lixil-noct-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- Panasonic オフローラ 1616サイズ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'bathroom-panasonic-oflora-1616-001',
  'Panasonic オフローラ 1616サイズ',
  'Panasonic',
  'OFLORA-1616',
  NULL,
  'スミピカフロア、保温浴槽II、LEDライン照明付き',
  true,
  7,
  ARRAY['bathroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-panasonic-oflora-1616-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'bathroom-panasonic-oflora-1616-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-panasonic-oflora-1616-001-v2', 'ベージュ', 'BEIGE', true, 1
FROM items WHERE item_code = 'bathroom-panasonic-oflora-1616-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1616-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1616-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1616-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 180000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1616-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- Panasonic オフローラ 1618サイズ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'bathroom-panasonic-oflora-1618-001',
  'Panasonic オフローラ 1618サイズ',
  'Panasonic',
  'OFLORA-1618',
  NULL,
  'ワイドサイズ、スミピカフロア、保温浴槽II、LEDライン照明付き',
  true,
  8,
  ARRAY['bathroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-panasonic-oflora-1618-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'bathroom-panasonic-oflora-1618-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-panasonic-oflora-1618-001-v2', 'グレー', 'GRAY', true, 1
FROM items WHERE item_code = 'bathroom-panasonic-oflora-1618-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1618-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1618-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1618-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1618-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- Panasonic オフローラ 1620サイズ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'bathroom-panasonic-oflora-1620-001',
  'Panasonic オフローラ 1620サイズ',
  'Panasonic',
  'OFLORA-1620',
  NULL,
  '特大サイズ、スミピカフロア、保温浴槽II、LEDライン照明付き',
  true,
  9,
  ARRAY['bathroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-panasonic-oflora-1620-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'bathroom-panasonic-oflora-1620-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-panasonic-oflora-1620-001-v2', 'ダークブラウン', 'DARK_BROWN', true, 1
FROM items WHERE item_code = 'bathroom-panasonic-oflora-1620-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 40000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1620-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1620-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 160000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1620-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 220000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-panasonic-oflora-1620-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- LIXIL AX 1616サイズ (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'bathroom-lixil-ax-1616-001',
  'LIXIL AX 1616サイズ',
  'LIXIL',
  'AX-1616',
  NULL,
  'キレイサーモフロア、サーモバスS、エコフルシャワー付き',
  true,
  10,
  ARRAY['bathroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-lixil-ax-1616-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'bathroom-lixil-ax-1616-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-lixil-ax-1616-001-v2', 'ピンク', 'PINK', true, 1
FROM items WHERE item_code = 'bathroom-lixil-ax-1616-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 90000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-lixil-ax-1616-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 90000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-lixil-ax-1616-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-lixil-ax-1616-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 190000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-lixil-ax-1616-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- LIXIL AX 1618サイズ (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'bathroom-lixil-ax-1618-001',
  'LIXIL AX 1618サイズ',
  'LIXIL',
  'AX-1618',
  NULL,
  'ワイドサイズ、キレイサーモフロア、サーモバスS、エコフルシャワー付き',
  true,
  11,
  ARRAY['bathroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-lixil-ax-1618-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'bathroom-lixil-ax-1618-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-lixil-ax-1618-001-v2', 'ブルーグレー', 'BLUE_GRAY', true, 1
FROM items WHERE item_code = 'bathroom-lixil-ax-1618-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-lixil-ax-1618-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-lixil-ax-1618-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-lixil-ax-1618-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 210000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-lixil-ax-1618-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- Panasonic アラウーノ Z160 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'toilet-panasonic-arauno-z160-001',
  'Panasonic アラウーノ Z160',
  'Panasonic',
  'ARAUNO-Z160',
  NULL,
  'タンクレス、泡コート、自動洗浄機能付き',
  true,
  12,
  ARRAY['toilet']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'toilet-panasonic-arauno-z160-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'toilet-panasonic-arauno-z160-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-panasonic-arauno-z160-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-panasonic-arauno-z160-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-panasonic-arauno-z160-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-panasonic-arauno-z160-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- TOTO GG-J1 (TOTO)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'toilet-toto-ggj1-001',
  'TOTO GG-J1',
  'TOTO',
  'GG-J1',
  NULL,
  'タンク式、セフィオンテクト、トルネード洗浄',
  true,
  13,
  ARRAY['toilet']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'toilet-toto-ggj1-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'toilet-toto-ggj1-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'toilet-toto-ggj1-001-v2', 'パステルアイボリー', 'PASTEL_IVORY', true, 1
FROM items WHERE item_code = 'toilet-toto-ggj1-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-toto-ggj1-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-toto-ggj1-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-toto-ggj1-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-toto-ggj1-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- TOTO ZJ1 (TOTO)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'toilet-toto-zj1-001',
  'TOTO ZJ1',
  'TOTO',
  'ZJ1',
  NULL,
  'コンパクトタンク式、セフィオンテクト、節水型',
  true,
  14,
  ARRAY['toilet']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'toilet-toto-zj1-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'toilet-toto-zj1-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'toilet-toto-zj1-001-v2', 'パステルピンク', 'PASTEL_PINK', true, 1
FROM items WHERE item_code = 'toilet-toto-zj1-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-toto-zj1-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-toto-zj1-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 45000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-toto-zj1-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 70000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'toilet-toto-zj1-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- TOTO オクターブ 750mm (TOTO)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'washroom-toto-octave-750-001',
  'TOTO オクターブ 750mm',
  'TOTO',
  'OCTAVE-750',
  NULL,
  '3面鏡、LED照明、引き出し収納タイプ',
  true,
  15,
  ARRAY['washroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'washroom-toto-octave-750-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'washroom-toto-octave-750-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'washroom-toto-octave-750-001-v2', 'ライトウッド', 'LIGHT_WOOD', true, 1
FROM items WHERE item_code = 'washroom-toto-octave-750-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-toto-octave-750-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-toto-octave-750-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-toto-octave-750-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-toto-octave-750-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- TOTO オクターブ 900mm (TOTO)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'washroom-toto-octave-900-001',
  'TOTO オクターブ 900mm',
  'TOTO',
  'OCTAVE-900',
  NULL,
  '3面鏡ワイド、LED照明、大容量引き出し収納タイプ',
  true,
  16,
  ARRAY['washroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'washroom-toto-octave-900-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'washroom-toto-octave-900-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'washroom-toto-octave-900-001-v2', 'ダークウッド', 'DARK_WOOD', true, 1
FROM items WHERE item_code = 'washroom-toto-octave-900-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-toto-octave-900-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-toto-octave-900-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 70000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-toto-octave-900-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-toto-octave-900-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- LIXIL ピアラ 750mm (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'washroom-lixil-piara-750-001',
  'LIXIL ピアラ 750mm',
  'LIXIL',
  'PIARA-750',
  NULL,
  '3面鏡、LED照明、扉タイプ収納',
  true,
  17,
  ARRAY['washroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'washroom-lixil-piara-750-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'washroom-lixil-piara-750-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'washroom-lixil-piara-750-001-v2', 'ミントグリーン', 'MINT_GREEN', true, 1
FROM items WHERE item_code = 'washroom-lixil-piara-750-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-lixil-piara-750-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-lixil-piara-750-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 45000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-lixil-piara-750-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 70000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-lixil-piara-750-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- LIXIL ピアラ 900mm (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'washroom-lixil-piara-900-001',
  'LIXIL ピアラ 900mm',
  'LIXIL',
  'PIARA-900',
  NULL,
  '3面鏡ワイド、LED照明、大容量扉タイプ収納',
  true,
  18,
  ARRAY['washroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'washroom-lixil-piara-900-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'washroom-lixil-piara-900-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'washroom-lixil-piara-900-001-v2', 'チェリーウッド', 'CHERRY_WOOD', true, 1
FROM items WHERE item_code = 'washroom-lixil-piara-900-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 45000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-lixil-piara-900-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 45000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-lixil-piara-900-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 65000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-lixil-piara-900-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 90000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'washroom-lixil-piara-900-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- パナソニック エコキュート 370L フルオート (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'water-heater-eco-cute-370l-001',
  'パナソニック エコキュート 370L フルオート',
  'Panasonic',
  'HE-NS37KQS',
  NULL,
  '省エネ給湯器、フルオート、高圧力型',
  true,
  19,
  ARRAY['water-heater']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'water-heater-eco-cute-370l-001-v1', 'シルバー', 'SILVER', true, 0
FROM items WHERE item_code = 'water-heater-eco-cute-370l-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'water-heater-eco-cute-370l-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'water-heater-eco-cute-370l-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'water-heater-eco-cute-370l-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'water-heater-eco-cute-370l-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- パナソニック エコキュート 460L フルオート (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'water-heater-eco-cute-460l-001',
  'パナソニック エコキュート 460L フルオート',
  'Panasonic',
  'HE-NS46KQS',
  NULL,
  '大容量省エネ給湯器、フルオート、高圧力型',
  true,
  20,
  ARRAY['water-heater']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'water-heater-eco-cute-460l-001-v1', 'シルバー', 'SILVER', true, 0
FROM items WHERE item_code = 'water-heater-eco-cute-460l-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'water-heater-eco-cute-460l-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'water-heater-eco-cute-460l-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'water-heater-eco-cute-460l-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 250000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'water-heater-eco-cute-460l-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- コンパクト洗面台 600mm (TOTO)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'second-washroom-001',
  'コンパクト洗面台 600mm',
  'TOTO',
  'COMPACT-600',
  NULL,
  '2階用コンパクト洗面台、1面鏡付き',
  true,
  21,
  ARRAY['washroom']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'second-washroom-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'second-washroom-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'second-washroom-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'second-washroom-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 40000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'second-washroom-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'second-washroom-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- 玄関手洗いなし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'entrance-wash-none',
  '玄関手洗いなし（標準）',
  '-',
  'NONE',
  NULL,
  '玄関手洗いを設置しない場合はこちらを選択',
  true,
  22,
  ARRAY['entrance-wash']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'entrance-wash-none-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'entrance-wash-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 玄関手洗い ボウルA (KAKUDAI)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'entrance-wash-001',
  '玄関手洗い ボウルA',
  'KAKUDAI',
  'LY-493231',
  NULL,
  '玄関手洗いボウル 角型',
  true,
  23,
  ARRAY['entrance-wash']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'entrance-wash-001-v1', 'マットホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'entrance-wash-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'entrance-wash-001-v2', 'マットブラック', '#1A1A1A', true, 1
FROM items WHERE item_code = 'entrance-wash-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'entrance-wash-001-v3', 'マットグレー', '#808080', true, 2
FROM items WHERE item_code = 'entrance-wash-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 99000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 99000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 99000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 99000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 玄関手洗い ボウルB (KAKUDAI)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'entrance-wash-002',
  '玄関手洗い ボウルB',
  'KAKUDAI',
  'LY-493232',
  NULL,
  '玄関手洗いボウル 丸型深',
  true,
  24,
  ARRAY['entrance-wash']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'entrance-wash-002-v1', 'マットホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'entrance-wash-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'entrance-wash-002-v2', 'マットブラック', '#1A1A1A', true, 1
FROM items WHERE item_code = 'entrance-wash-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'entrance-wash-002-v3', 'マットグレー', '#808080', true, 2
FROM items WHERE item_code = 'entrance-wash-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 玄関手洗い ステンレスコーナーカウンター (KAKUDAI)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'entrance-wash-003',
  '玄関手洗い ステンレスコーナーカウンター',
  'KAKUDAI',
  'STAINLESS-CORNER',
  NULL,
  'ステンレスボウル一体型コーナーカウンター（ボウル+排水+水栓）',
  true,
  25,
  ARRAY['entrance-wash']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'entrance-wash-003-v1', 'ステンレス', '#C0C0C0', true, 0
FROM items WHERE item_code = 'entrance-wash-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 96000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 96000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 96000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 96000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'entrance-wash-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- マルチシンク 600mm (TOTO)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'laundry-sink-001',
  'マルチシンク 600mm',
  'TOTO',
  'MULTI-SINK-600',
  NULL,
  '深型洗濯流し、水栓付き',
  true,
  26,
  ARRAY['laundry']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'laundry-sink-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'laundry-sink-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'laundry-sink-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'laundry-sink-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'laundry-sink-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 40000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'laundry-sink-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- 浴室暖房乾燥機 1室換気 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'bathroom-heater-dryer-001',
  '浴室暖房乾燥機 1室換気',
  'Panasonic',
  'FY-13UG7E',
  NULL,
  '浴室暖房・乾燥・涼風・換気機能',
  true,
  27,
  ARRAY['bathroom-equipment']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-heater-dryer-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'bathroom-heater-dryer-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-heater-dryer-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-heater-dryer-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 40000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-heater-dryer-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-heater-dryer-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;
-- 浴室暖房乾燥機 3室換気 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'bathroom-heater-dryer-3room-001',
  '浴室暖房乾燥機 3室換気',
  'Panasonic',
  'FY-13UG7E-3',
  NULL,
  '浴室・洗面・トイレ3室換気対応',
  true,
  28,
  ARRAY['bathroom-equipment']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'bathroom-heater-dryer-3room-001-v1', 'ホワイト', 'WHITE', true, 0
FROM items WHERE item_code = 'bathroom-heater-dryer-3room-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-heater-dryer-3room-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-heater-dryer-3room-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-heater-dryer-3room-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 70000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'bathroom-heater-dryer-3room-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;