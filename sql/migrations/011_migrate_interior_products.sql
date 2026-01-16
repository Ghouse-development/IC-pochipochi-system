-- interiorデータ移行
-- 自動生成: 2026-01-16T02:46:40.631Z

-- カテゴリ

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ベース床',
  'base-floor',
  'interior',
  true,
  false,
  0
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '天井',
  'ceiling',
  'interior',
  true,
  false,
  1
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '間接照明',
  'indirect-lighting',
  'interior',
  true,
  false,
  2
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '階段',
  'stairs',
  'interior',
  true,
  false,
  3
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '格子',
  'lattice',
  'interior',
  true,
  false,
  4
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'カウンター',
  'counter',
  'interior',
  true,
  false,
  5
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'トイレ収納',
  'toilet-storage',
  'interior',
  true,
  false,
  6
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'カーテンBOX',
  'curtain-box',
  'interior',
  true,
  false,
  7
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ベース建具',
  'interior-door',
  'interior',
  true,
  false,
  8
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '居室収納',
  'room-storage',
  'interior',
  true,
  false,
  9
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '造作',
  'niche',
  'interior',
  true,
  false,
  10
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '補強・下地',
  'reinforcement',
  'interior',
  true,
  false,
  11
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '壁材',
  'wall',
  'interior',
  true,
  false,
  12
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ベースクロス（壁）',
  'base-wall-cloth',
  'interior',
  true,
  false,
  13
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ベースクロス（天井）',
  'base-ceiling-cloth',
  'interior',
  true,
  false,
  14
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '電気設備',
  'electrical',
  'interior',
  true,
  false,
  15
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '照明',
  'lighting',
  'interior',
  true,
  false,
  16
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '換気',
  'ventilation',
  'interior',
  true,
  false,
  17
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '手摺',
  'handrail',
  'interior',
  true,
  false,
  18
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '物干し',
  'hanger',
  'interior',
  true,
  false,
  19
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '水回り設備',
  'bathroom',
  'interior',
  true,
  false,
  20
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '点検口',
  'hatch',
  'interior',
  true,
  false,
  21
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'その他収納',
  'other-storage',
  'interior',
  true,
  false,
  22
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '周辺部材',
  'peripheral-parts',
  'interior',
  true,
  false,
  23
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '室内窓',
  'window-interior',
  'interior',
  true,
  false,
  24
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '玄関収納',
  'entrance-storage',
  'interior',
  true,
  false,
  25
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '設備',
  'sanitary',
  'interior',
  true,
  false,
  26
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '設備',
  'appliance',
  'interior',
  true,
  false,
  27
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ガス乾燥機',
  'gas-dryer',
  'interior',
  true,
  false,
  28
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

-- アイテム

-- ベリティスフロアーベースコート (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-veritis-basecoat',
  'ベリティスフロアーベースコート',
  'Panasonic',
  'VERITIS-BC',
  'シート',
  '豊富な色柄を揃えたシートフロアー ワックス不要 抗菌効果 汚れ・すり傷・凹み・キャスターに強い',
  true,
  0,
  ARRAY['base-floor']
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
  id, 'int-floor-veritis-basecoat-v1', 'ウォールナット柄', NULL, true, 0
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v2', 'チェリー柄', NULL, true, 1
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v3', 'オーク柄', NULL, true, 2
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v4', 'メープル柄', NULL, true, 3
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v5', 'エイジドチーク柄', NULL, true, 4
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v6', 'エイジドチェスナット柄', NULL, true, 5
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v7', 'カームチェリー柄', NULL, true, 6
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v8', 'グレージュヒッコリー柄', NULL, true, 7
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v9', 'ウォッシュドオーク柄', NULL, true, 8
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v10', 'ホワイトオーク柄', NULL, true, 9
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-veritis-basecoat-v11', 'アイボリーアッシュ柄', NULL, true, 10
FROM items WHERE item_code = 'int-floor-veritis-basecoat'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-veritis-basecoat' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-veritis-basecoat' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-veritis-basecoat' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-veritis-basecoat' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ライブナチュラルMRX 2P (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-live-natural-mrx',
  'ライブナチュラルMRX 2P',
  '朝日ウッドテック',
  'MRX-2P',
  '突板',
  '突き板仕様 床厚12mm マット塗装 フリーワックス ホットカーペット対応 ヒビワレ防止 耐凹み傷 抗ウイルス 耐摩擦',
  true,
  1,
  ARRAY['base-floor']
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
  id, 'int-floor-live-natural-mrx-v1', 'ブラックチェリー', NULL, true, 0
FROM items WHERE item_code = 'int-floor-live-natural-mrx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-mrx-v2', 'ハードメイプル', NULL, true, 1
FROM items WHERE item_code = 'int-floor-live-natural-mrx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-mrx-v3', 'ブラックウォルナット', NULL, true, 2
FROM items WHERE item_code = 'int-floor-live-natural-mrx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-mrx-v4', 'オーク', NULL, true, 3
FROM items WHERE item_code = 'int-floor-live-natural-mrx'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-mrx' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-mrx' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-mrx' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-mrx' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ライブナチュラルMSX/MSX-L (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-live-natural-msx',
  'ライブナチュラルMSX/MSX-L',
  '朝日ウッドテック',
  'MSX/MSX-L',
  '突板',
  '突き板フローリング 12mm厚 マット塗装 フリーワックス ホットカーペット対応 抗ウイルス',
  true,
  2,
  ARRAY['base-floor']
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
  id, 'int-floor-live-natural-msx-v1', 'ブラックチェリー', NULL, true, 0
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v2', 'ハードメイプル', NULL, true, 1
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v3', 'シカモア', NULL, true, 2
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v4', 'ブラックウォルナット', NULL, true, 3
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v5', 'バーチ', NULL, true, 4
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v6', 'オーク', NULL, true, 5
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v7', 'アカシア（3P）', NULL, true, 6
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v8', 'ドライメイプル', NULL, true, 7
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v9', 'ドライウォルナット', NULL, true, 8
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v10', 'ドライオーク', NULL, true, 9
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v11', 'シュガーホワイト（アッシュ）', NULL, true, 10
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v12', 'ライトグレー（オーク）', NULL, true, 11
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-msx-v13', 'ミッドグレー（オーク）', NULL, true, 12
FROM items WHERE item_code = 'int-floor-live-natural-msx'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-msx' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-msx' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-msx' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-msx' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- マイスターズウッドフロアー ハードコートクリア (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-meisters-wood',
  'マイスターズウッドフロアー ハードコートクリア',
  'Panasonic',
  'MEISTERS-HC',
  '突板',
  '天然木突き板 ワックス不要 抗菌効果 汚れ・すり傷・凹み・キャスターに強い',
  true,
  3,
  ARRAY['base-floor']
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
  id, 'int-floor-meisters-wood-v1', 'ウォールナットクリア', NULL, true, 0
FROM items WHERE item_code = 'int-floor-meisters-wood'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-wood-v2', 'アカシアクリア', NULL, true, 1
FROM items WHERE item_code = 'int-floor-meisters-wood'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-wood-v3', 'バーチラスティッククリア', NULL, true, 2
FROM items WHERE item_code = 'int-floor-meisters-wood'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-wood-v4', 'バーチクリア', NULL, true, 3
FROM items WHERE item_code = 'int-floor-meisters-wood'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-wood-v5', 'アッシュクリア', NULL, true, 4
FROM items WHERE item_code = 'int-floor-meisters-wood'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-wood-v6', 'メープルクリア', NULL, true, 5
FROM items WHERE item_code = 'int-floor-meisters-wood'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-wood-v7', 'ハードメープル', NULL, true, 6
FROM items WHERE item_code = 'int-floor-meisters-wood'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meisters-wood' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meisters-wood' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meisters-wood' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meisters-wood' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 銘木フロアーラスティック 2P (イクタ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-meiboku-rustic',
  '銘木フロアーラスティック 2P',
  'イクタ',
  'MEIBOKU-RUSTIC',
  '突板',
  '突き板12mm厚 オイル風合いラスティック塗装 「空気を洗う」健康フローリング 消臭・ウイルス低減・VOC低減効果',
  true,
  4,
  ARRAY['base-floor']
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
  id, 'int-floor-meiboku-rustic-v1', 'ウォルナット', NULL, true, 0
FROM items WHERE item_code = 'int-floor-meiboku-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-rustic-v2', 'ブラックチェリー', NULL, true, 1
FROM items WHERE item_code = 'int-floor-meiboku-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-rustic-v3', 'イタヤカエデ', NULL, true, 2
FROM items WHERE item_code = 'int-floor-meiboku-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-rustic-v4', 'ナラ樫', NULL, true, 3
FROM items WHERE item_code = 'int-floor-meiboku-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-rustic-v5', 'チーク', NULL, true, 4
FROM items WHERE item_code = 'int-floor-meiboku-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-rustic-v6', 'アカシア', NULL, true, 5
FROM items WHERE item_code = 'int-floor-meiboku-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-rustic-v7', 'ハードメープル', NULL, true, 6
FROM items WHERE item_code = 'int-floor-meiboku-rustic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meiboku-rustic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meiboku-rustic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meiboku-rustic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meiboku-rustic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- クルードフローリング303 (イクタ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-crude-303',
  'クルードフローリング303',
  'イクタ',
  'CRUDE-303',
  'シート',
  '水廻り専用フローリング 素材の美しさを打ち出したマットな風合い 抗ウイルス・抗菌 消臭効果 ※水廻り以外でご使用される場合は追加費用',
  true,
  5,
  ARRAY['base-floor']
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
  id, 'int-floor-crude-303-v1', 'ピエトラホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-floor-crude-303'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-crude-303-v2', 'ピエトラグレー', NULL, true, 1
FROM items WHERE item_code = 'int-floor-crude-303'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-crude-303-v3', 'ピエトラブラック', NULL, true, 2
FROM items WHERE item_code = 'int-floor-crude-303'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-crude-303-v4', 'テラゾーホワイト', NULL, true, 3
FROM items WHERE item_code = 'int-floor-crude-303'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-crude-303-v5', 'テラゾーグレー', NULL, true, 4
FROM items WHERE item_code = 'int-floor-crude-303'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-crude-303-v6', 'グランモルタル', NULL, true, 5
FROM items WHERE item_code = 'int-floor-crude-303'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-crude-303' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-crude-303' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 2000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-crude-303' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 2000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-crude-303' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 銘木フロアーラスティック エイジング 2P (イクタ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-meiboku-aging',
  '銘木フロアーラスティック エイジング 2P',
  'イクタ',
  'MEIBOKU-AGING',
  '突板',
  '突き板12mm厚 木目を強く打ち出したエイジング仕上げ ※塗装品のため近似色塗装になります',
  true,
  6,
  ARRAY['base-floor']
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
  id, 'int-floor-meiboku-aging-v1', 'エイジングナチュラル', NULL, true, 0
FROM items WHERE item_code = 'int-floor-meiboku-aging'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-aging-v2', 'エイジングホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-floor-meiboku-aging'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-aging-v3', 'エイジングタイガ', NULL, true, 2
FROM items WHERE item_code = 'int-floor-meiboku-aging'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-aging-v4', 'エイジングカフェ', NULL, true, 3
FROM items WHERE item_code = 'int-floor-meiboku-aging'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meiboku-aging-v5', 'エイジングビター', NULL, true, 4
FROM items WHERE item_code = 'int-floor-meiboku-aging'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meiboku-aging' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meiboku-aging' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meiboku-aging' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meiboku-aging' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ビンテージフロアーラスティック 2P (イクタ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-vintage-rustic',
  'ビンテージフロアーラスティック 2P',
  'イクタ',
  'VINTAGE-RUSTIC',
  '挽板',
  '挽き板12mm厚 天然木ならではの色味や節、自然の趣を感じられるフロア 「空気を洗う」健康フローリング',
  true,
  7,
  ARRAY['base-floor']
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
  id, 'int-floor-vintage-rustic-v1', 'チーク', NULL, true, 0
FROM items WHERE item_code = 'int-floor-vintage-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-vintage-rustic-v2', 'ウォルナット', NULL, true, 1
FROM items WHERE item_code = 'int-floor-vintage-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-vintage-rustic-v3', 'ブラックチェリー', NULL, true, 2
FROM items WHERE item_code = 'int-floor-vintage-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-vintage-rustic-v4', 'ナラ', NULL, true, 3
FROM items WHERE item_code = 'int-floor-vintage-rustic'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-vintage-rustic-v5', 'カエデ', NULL, true, 4
FROM items WHERE item_code = 'int-floor-vintage-rustic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-vintage-rustic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-vintage-rustic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-vintage-rustic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-vintage-rustic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ライブナチュラルプレミアム ラスティック 2P (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-live-natural-premium',
  'ライブナチュラルプレミアム ラスティック 2P',
  '朝日ウッドテック',
  'LIVNATURAL-PREMIUM',
  '挽板',
  '挽き板12mm厚 天然木が持つ、木それぞれの個性を美しく表現したフロア GOOD DESIGN賞受賞',
  true,
  8,
  ARRAY['base-floor']
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
  id, 'int-floor-live-natural-premium-v1', 'ブラックチェリー', NULL, true, 0
FROM items WHERE item_code = 'int-floor-live-natural-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-premium-v2', 'ハードメイプル', NULL, true, 1
FROM items WHERE item_code = 'int-floor-live-natural-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-premium-v3', 'ブラックウォルナット', NULL, true, 2
FROM items WHERE item_code = 'int-floor-live-natural-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-premium-v4', 'オークN45°', NULL, true, 3
FROM items WHERE item_code = 'int-floor-live-natural-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-live-natural-premium-v5', 'バーチ', NULL, true, 4
FROM items WHERE item_code = 'int-floor-live-natural-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 16000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-premium' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-live-natural-premium' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 玄関框（フローリング色合わせ） (Panasonic/朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-entrance-frame-std',
  '玄関框（フローリング色合わせ）',
  'Panasonic/朝日ウッドテック',
  'ENTRANCE-FRAME-STD',
  NULL,
  'ご選択いただいたフローリング色合わせとなります ※付け框30×150となります',
  true,
  9,
  ARRAY['base-floor']
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
  id, 'int-floor-entrance-frame-std-v1', 'フローリング色合わせ', NULL, true, 0
FROM items WHERE item_code = 'int-floor-entrance-frame-std'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-std' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-std' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-std' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-std' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 玄関框（プレイリーホームズ）〜1.8m迄 (プレイリーホームズ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-entrance-frame-prairie-18',
  '玄関框（プレイリーホームズ）〜1.8m迄',
  'プレイリーホームズ',
  'PRAIRIE-FRAME-18',
  NULL,
  '6mmという美薄、シンプルスマートの新しい提案',
  true,
  10,
  ARRAY['base-floor']
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
  id, 'int-floor-entrance-frame-prairie-18-v1', 'ゴム ウレタンブラック', NULL, true, 0
FROM items WHERE item_code = 'int-floor-entrance-frame-prairie-18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-entrance-frame-prairie-18-v2', 'ゴム ウレタンホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-floor-entrance-frame-prairie-18'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-prairie-18' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-prairie-18' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-prairie-18' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-prairie-18' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 玄関框（プレイリーホームズ）〜2.8m迄 (プレイリーホームズ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-entrance-frame-prairie-28',
  '玄関框（プレイリーホームズ）〜2.8m迄',
  'プレイリーホームズ',
  'PRAIRIE-FRAME-28',
  NULL,
  '6mmという美薄、シンプルスマートの新しい提案',
  true,
  11,
  ARRAY['base-floor']
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
  id, 'int-floor-entrance-frame-prairie-28-v1', 'ゴム ウレタンブラック', NULL, true, 0
FROM items WHERE item_code = 'int-floor-entrance-frame-prairie-28'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-entrance-frame-prairie-28-v2', 'ゴム ウレタンホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-floor-entrance-frame-prairie-28'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-prairie-28' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-prairie-28' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-prairie-28' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-entrance-frame-prairie-28' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 床見切り（フラットバー） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-flatbar',
  '床見切り（フラットバー）',
  'Gハウス',
  'FLATBAR',
  NULL,
  'フローリングと異素材の床材との間に納まる部材です ※シルバーのみ',
  true,
  12,
  ARRAY['base-floor']
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
  id, 'int-floor-flatbar-v1', 'シルバー', NULL, true, 0
FROM items WHERE item_code = 'int-floor-flatbar'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-flatbar' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-flatbar' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-flatbar' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-flatbar' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- CFシート (東リ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-cf-sheet',
  'CFシート',
  '東リ',
  'CF-SHEET',
  'CFシート',
  '防水性、クッション性に優れたビニール系のシート床材 手入れも手軽で汚れも落としやすい ※水廻り専用のため、水廻り以外でご使用される場合は追加費用',
  true,
  13,
  ARRAY['base-floor']
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
  id, 'int-floor-cf-sheet-v1', 'CF3738', NULL, true, 0
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v2', 'CF3739', NULL, true, 1
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v3', 'CF3746', NULL, true, 2
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v4', 'CF3747', NULL, true, 3
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v5', 'CF3751', NULL, true, 4
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v6', 'CF3752', NULL, true, 5
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v7', 'CF3761', NULL, true, 6
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v8', 'CF3764', NULL, true, 7
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v9', 'CF3770', NULL, true, 8
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v10', 'CF9616', NULL, true, 9
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v11', 'CF9617', NULL, true, 10
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v12', 'CF9618', NULL, true, 11
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v13', 'CF9645', NULL, true, 12
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v14', 'CF9647', NULL, true, 13
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v15', 'CF9649', NULL, true, 14
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v16', 'CF9650', NULL, true, 15
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v17', 'CF9655', NULL, true, 16
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v18', 'CF9664', NULL, true, 17
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v19', 'CF9679', NULL, true, 18
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v20', 'CF9689', NULL, true, 19
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v21', 'CF9690', NULL, true, 20
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v22', 'CF9691', NULL, true, 21
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v23', 'CF9693', NULL, true, 22
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v24', 'CF9694', NULL, true, 23
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-cf-sheet-v25', 'CF9696', NULL, true, 24
FROM items WHERE item_code = 'int-floor-cf-sheet'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-cf-sheet' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-cf-sheet' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-cf-sheet' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-cf-sheet' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ライブナチュラルMRX 2P (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-mrx',
  'ライブナチュラルMRX 2P',
  '朝日ウッドテック',
  'MRX-2P',
  '突板',
  '突き板仕様 床厚12mm マット塗装 フリーワックス ホットカーペット対応 ヒビワレ防止 耐凹み傷 抗ウイルス 耐摩擦',
  true,
  14,
  ARRAY['base-floor']
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
  id, 'int-floor-mrx-v1', 'ブラックチェリー', NULL, true, 0
FROM items WHERE item_code = 'int-floor-mrx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-mrx-v2', 'ハードメイプル', NULL, true, 1
FROM items WHERE item_code = 'int-floor-mrx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-mrx-v3', 'ブラックウォルナット', NULL, true, 2
FROM items WHERE item_code = 'int-floor-mrx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-mrx-v4', 'オーク', NULL, true, 3
FROM items WHERE item_code = 'int-floor-mrx'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-mrx' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-mrx' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-mrx' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-mrx' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ライブナチュラルMSX/MSX-L (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-msx',
  'ライブナチュラルMSX/MSX-L',
  '朝日ウッドテック',
  'MSX/MSX-L',
  '突板',
  '突き板フローリング 12mm厚 マット塗装 フリーワックス ホットカーペット対応 抗ウイルス',
  true,
  15,
  ARRAY['base-floor']
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
  id, 'int-floor-msx-v1', 'ブラックチェリー', NULL, true, 0
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v2', 'ハードメイプル', NULL, true, 1
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v3', 'シカモア', NULL, true, 2
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v4', 'ブラックウォルナット', NULL, true, 3
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v5', 'バーチ', NULL, true, 4
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v6', 'オーク', NULL, true, 5
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v7', 'アカシア（3P）', NULL, true, 6
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v8', 'ドライメイプル', NULL, true, 7
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v9', 'ドライウォルナット', NULL, true, 8
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v10', 'ドライオーク', NULL, true, 9
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v11', 'シュガーホワイト（アッシュ）', NULL, true, 10
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v12', 'ライトグレー（オーク）', NULL, true, 11
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-msx-v13', 'ミッドグレー（オーク）', NULL, true, 12
FROM items WHERE item_code = 'int-floor-msx'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-msx' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-msx' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-msx' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-msx' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- マイスターズウッドフロアー ハードコートクリア (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-meisters',
  'マイスターズウッドフロアー ハードコートクリア',
  'Panasonic',
  'MEISTERS-HC',
  '突板',
  '天然木突き板 ワックス不要 抗菌効果 汚れ・すり傷・凹み・キャスターに強い',
  true,
  16,
  ARRAY['base-floor']
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
  id, 'int-floor-meisters-v1', 'ウォールナットクリア', NULL, true, 0
FROM items WHERE item_code = 'int-floor-meisters'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-v2', 'アカシアクリア', NULL, true, 1
FROM items WHERE item_code = 'int-floor-meisters'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-v3', 'バーチラスティッククリア', NULL, true, 2
FROM items WHERE item_code = 'int-floor-meisters'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-v4', 'バーチクリア', NULL, true, 3
FROM items WHERE item_code = 'int-floor-meisters'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-v5', 'アッシュクリア', NULL, true, 4
FROM items WHERE item_code = 'int-floor-meisters'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-v6', 'メープルクリア', NULL, true, 5
FROM items WHERE item_code = 'int-floor-meisters'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-meisters-v7', 'ハードメープル', NULL, true, 6
FROM items WHERE item_code = 'int-floor-meisters'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meisters' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meisters' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meisters' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-meisters' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 銘木フロアーラスティック 2P (イクタ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-ikuta',
  '銘木フロアーラスティック 2P',
  'イクタ',
  'MEIBOKU-RUSTIC',
  '突板',
  '突き板12mm厚 オイル風合いラスティック塗装 「空気を洗う」健康フローリング 消臭・ウイルス低減・VOC低減効果',
  true,
  17,
  ARRAY['base-floor']
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
  id, 'int-floor-ikuta-v1', 'ウォルナット', NULL, true, 0
FROM items WHERE item_code = 'int-floor-ikuta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-ikuta-v2', 'ブラックチェリー', NULL, true, 1
FROM items WHERE item_code = 'int-floor-ikuta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-ikuta-v3', 'イタヤカエデ', NULL, true, 2
FROM items WHERE item_code = 'int-floor-ikuta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-ikuta-v4', 'ナラ樫', NULL, true, 3
FROM items WHERE item_code = 'int-floor-ikuta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-ikuta-v5', 'チーク', NULL, true, 4
FROM items WHERE item_code = 'int-floor-ikuta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-ikuta-v6', 'アカシア', NULL, true, 5
FROM items WHERE item_code = 'int-floor-ikuta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-ikuta-v7', 'ハードメープル', NULL, true, 6
FROM items WHERE item_code = 'int-floor-ikuta'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-ikuta' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-ikuta' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-ikuta' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-ikuta' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ライブナチュラルプレミアム ラスティック 2P (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-livnatural-premium',
  'ライブナチュラルプレミアム ラスティック 2P',
  '朝日ウッドテック',
  'LIVNATURAL-PREMIUM',
  '挽板',
  '挽き板12mm厚 天然木が持つ、木それぞれの個性を美しく表現したフロア GOOD DESIGN賞受賞',
  true,
  18,
  ARRAY['base-floor']
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
  id, 'int-floor-livnatural-premium-v1', 'ブラックチェリー', NULL, true, 0
FROM items WHERE item_code = 'int-floor-livnatural-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-livnatural-premium-v2', 'ハードメイプル', NULL, true, 1
FROM items WHERE item_code = 'int-floor-livnatural-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-livnatural-premium-v3', 'ブラックウォルナット', NULL, true, 2
FROM items WHERE item_code = 'int-floor-livnatural-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-livnatural-premium-v4', 'オークN45°', NULL, true, 3
FROM items WHERE item_code = 'int-floor-livnatural-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-livnatural-premium-v5', 'バーチ', NULL, true, 4
FROM items WHERE item_code = 'int-floor-livnatural-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-livnatural-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-livnatural-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 16000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-livnatural-premium' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 16000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-livnatural-premium' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- チャネルオリジナル ユニシリーズ（オーク・バーチ・ウォールナット） (チャネルオリジナル)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-channel-uni-a',
  'チャネルオリジナル ユニシリーズ（オーク・バーチ・ウォールナット）',
  'チャネルオリジナル',
  'CHANNEL-UNI-A',
  '無垢',
  '無垢床 ウレタン塗装 色の濃淡・小さな節・かすりなど自然な風合いや美しさを感じられる ※別途配送料¥30,000',
  true,
  19,
  ARRAY['base-floor']
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
  id, 'int-floor-channel-uni-a-v1', 'オーク', NULL, true, 0
FROM items WHERE item_code = 'int-floor-channel-uni-a'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-channel-uni-a-v2', 'バーチ', NULL, true, 1
FROM items WHERE item_code = 'int-floor-channel-uni-a'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-channel-uni-a-v3', 'ウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-floor-channel-uni-a'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-uni-a' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-uni-a' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-uni-a' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-uni-a' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- チャネルオリジナル ユニシリーズ（ブラックチェリー・チーク） (チャネルオリジナル)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-channel-uni-b',
  'チャネルオリジナル ユニシリーズ（ブラックチェリー・チーク）',
  'チャネルオリジナル',
  'CHANNEL-UNI-B',
  '無垢',
  '無垢床 ウレタン塗装 色の濃淡・小さな節・かすりなど自然な風合いや美しさを感じられる ※別途配送料¥30,000',
  true,
  20,
  ARRAY['base-floor']
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
  id, 'int-floor-channel-uni-b-v1', 'ブラックチェリー', NULL, true, 0
FROM items WHERE item_code = 'int-floor-channel-uni-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-channel-uni-b-v2', 'チーク', NULL, true, 1
FROM items WHERE item_code = 'int-floor-channel-uni-b'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 18000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-uni-b' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-uni-b' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-uni-b' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 2000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-uni-b' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- チャネルオリジナル ヘリンボーン (チャネルオリジナル)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-channel-herringbone',
  'チャネルオリジナル ヘリンボーン',
  'チャネルオリジナル',
  'CHANNEL-HERRINGBONE',
  '無垢',
  '無垢床 ウレタン塗装 北海道産ナラ節無（上小節含む）赤味、入り皮など木の特徴が随所にみられバラエティーな表情を楽しめる 国産木材 接着剤不使用 ※別途配送料¥30,000',
  true,
  21,
  ARRAY['base-floor']
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
  id, 'int-floor-channel-herringbone-v1', '北海道産ナラ節無', NULL, true, 0
FROM items WHERE item_code = 'int-floor-channel-herringbone'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-herringbone' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 17000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-herringbone' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 17000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-herringbone' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-channel-herringbone' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- マティル (田島ルーフィング)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-matil',
  'マティル',
  '田島ルーフィング',
  'MATIL',
  'フロアタイル',
  '水廻り対応フロアタイル（水廻りでは追加費用なし）',
  true,
  22,
  ARRAY['base-floor']
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
  id, 'int-floor-matil-v1', 'MAE-1140', NULL, true, 0
FROM items WHERE item_code = 'int-floor-matil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-matil-v2', 'MAE-1142', NULL, true, 1
FROM items WHERE item_code = 'int-floor-matil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-matil-v3', 'MAE-1143', NULL, true, 2
FROM items WHERE item_code = 'int-floor-matil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-matil-v4', 'MAE-1146', NULL, true, 3
FROM items WHERE item_code = 'int-floor-matil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-matil-v5', 'MAE-1109', NULL, true, 4
FROM items WHERE item_code = 'int-floor-matil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-matil-v6', 'MAE-1206', NULL, true, 5
FROM items WHERE item_code = 'int-floor-matil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-matil-v7', 'MAW-1132', NULL, true, 6
FROM items WHERE item_code = 'int-floor-matil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-matil-v8', 'MAW-1133', NULL, true, 7
FROM items WHERE item_code = 'int-floor-matil'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-matil' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-matil' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 7000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-matil' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 7000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-matil' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- カーペットタイル (sangetsu)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-carpet',
  'カーペットタイル',
  'sangetsu',
  'NTP/NTH/NT',
  'カーペットタイル',
  '耐久性・クッション性を兼ねそろえた素材 床に座って過ごすことが多いお部屋におすすめ',
  true,
  23,
  ARRAY['base-floor']
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
  id, 'int-floor-carpet-v1', 'NTP-70801', NULL, true, 0
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v2', 'NTP-71101', NULL, true, 1
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v3', 'NTP-71102', NULL, true, 2
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v4', 'NTP-71105', NULL, true, 3
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v5', 'NTP-71114', NULL, true, 4
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v6', 'NTH-84009', NULL, true, 5
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v7', 'NTH-84010', NULL, true, 6
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v8', 'NTH-824', NULL, true, 7
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v9', 'NTH-841', NULL, true, 8
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v10', 'NT-31104', NULL, true, 9
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v11', 'NT-31402', NULL, true, 10
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v12', 'NT-31403', NULL, true, 11
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v13', 'NT-31505', NULL, true, 12
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v14', 'NT-31507', NULL, true, 13
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v15', 'NT-31801', NULL, true, 14
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v16', 'NT-31803', NULL, true, 15
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v17', 'NT-31901', NULL, true, 16
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v18', 'NT-35003', NULL, true, 17
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-v19', 'NT-35006', NULL, true, 18
FROM items WHERE item_code = 'int-floor-carpet'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- カーペットタイル NTシリーズ (sangetsu)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-carpet-nt',
  'カーペットタイル NTシリーズ',
  'sangetsu',
  'NT-311-382',
  'カーペットタイル',
  '耐久性・クッション性を兼ねそろえた素材 床に座って過ごすことが多いお部屋におすすめ',
  true,
  24,
  ARRAY['base-floor']
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
  id, 'int-floor-carpet-nt-v1', 'NT-311', NULL, true, 0
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v2', 'NT-316', NULL, true, 1
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v3', 'NT-336', NULL, true, 2
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v4', 'NT-339', NULL, true, 3
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v5', 'NT-340', NULL, true, 4
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v6', 'NT-341', NULL, true, 5
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v7', 'NT-342', NULL, true, 6
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v8', 'NT-344', NULL, true, 7
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v9', 'NT-371', NULL, true, 8
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v10', 'NT-376', NULL, true, 9
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v11', 'NT-379', NULL, true, 10
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-nt-v12', 'NT-382', NULL, true, 11
FROM items WHERE item_code = 'int-floor-carpet-nt'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet-nt' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet-nt' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet-nt' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet-nt' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- カーペットタイル DTシリーズ（プレミアム） (sangetsu)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-carpet-dt',
  'カーペットタイル DTシリーズ（プレミアム）',
  'sangetsu',
  'DT-2201-2207',
  'カーペットタイル',
  '耐久性・クッション性を兼ねそろえた素材 床に座って過ごすことが多いお部屋におすすめ（プレミアム）',
  true,
  25,
  ARRAY['base-floor']
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
  id, 'int-floor-carpet-dt-v1', 'DT-2201', NULL, true, 0
FROM items WHERE item_code = 'int-floor-carpet-dt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-dt-v2', 'DT-2202', NULL, true, 1
FROM items WHERE item_code = 'int-floor-carpet-dt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-dt-v3', 'DT-2204', NULL, true, 2
FROM items WHERE item_code = 'int-floor-carpet-dt'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-carpet-dt-v4', 'DT-2207', NULL, true, 3
FROM items WHERE item_code = 'int-floor-carpet-dt'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet-dt' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet-dt' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet-dt' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-carpet-dt' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 磁器タイル（玄関・土間） (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-ceramic-tile-001',
  '磁器タイル（玄関・土間）',
  'LIXIL',
  'CERAMIC-TILE-001',
  '磁器タイル',
  '玄関・土間に最適な磁器タイル 滑りにくく耐久性に優れる',
  true,
  26,
  ARRAY['base-floor']
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
  id, 'int-floor-ceramic-tile-001-v1', 'グレー', NULL, true, 0
FROM items WHERE item_code = 'int-floor-ceramic-tile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-ceramic-tile-001-v2', 'ベージュ', NULL, true, 1
FROM items WHERE item_code = 'int-floor-ceramic-tile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-ceramic-tile-001-v3', 'ホワイト', NULL, true, 2
FROM items WHERE item_code = 'int-floor-ceramic-tile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floor-ceramic-tile-001-v4', 'ブラック', NULL, true, 3
FROM items WHERE item_code = 'int-floor-ceramic-tile-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-ceramic-tile-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-ceramic-tile-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-ceramic-tile-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-ceramic-tile-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 勾配天井工事 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ceiling-slope',
  '勾配天井工事',
  'Gハウス',
  'CEILING-SLOPE',
  NULL,
  '天井変更する範囲の床坪数にて算出 ※梁や火打ち梁が露出する場合がございます',
  true,
  27,
  ARRAY['ceiling']
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
  id, 'int-ceiling-slope-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-ceiling-slope'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-slope' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-slope' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-slope' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-slope' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 天井高UP（H2600迄）100mm毎 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ceiling-up-100',
  '天井高UP（H2600迄）100mm毎',
  'Gハウス',
  'CEILING-UP-100',
  NULL,
  '部屋別での変更不可 フロアごとの変更',
  true,
  28,
  ARRAY['ceiling']
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
  id, 'int-ceiling-up-100-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-ceiling-up-100'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-up-100' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-up-100' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-up-100' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-up-100' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 天井高UP（H2600迄）200mm毎 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ceiling-up-200',
  '天井高UP（H2600迄）200mm毎',
  'Gハウス',
  'CEILING-UP-200',
  NULL,
  '部屋別での変更不可 フロアごとの変更',
  true,
  29,
  ARRAY['ceiling']
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
  id, 'int-ceiling-up-200-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-ceiling-up-200'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-up-200' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-up-200' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-up-200' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-up-200' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 下がり天井 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ceiling-down',
  '下がり天井',
  'Gハウス',
  'CEILING-DOWN',
  NULL,
  '100mm毎',
  true,
  30,
  ARRAY['ceiling']
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
  id, 'int-ceiling-down-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-ceiling-down'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-down' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-down' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-down' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-down' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- コーブ照明 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-indirect-cove',
  'コーブ照明',
  'Gハウス',
  'INDIRECT-COVE',
  NULL,
  '※間接照明の光によりクロスの継ぎ目や下地浮きが目立つ場合があります ※照明器具は別途費用 ※1m以下は¥15,000',
  true,
  31,
  ARRAY['indirect-lighting']
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
  id, 'int-indirect-cove-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-indirect-cove'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-cove' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-cove' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-cove' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-cove' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- コーニス照明 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-indirect-cornice',
  'コーニス照明',
  'Gハウス',
  'INDIRECT-CORNICE',
  NULL,
  '※勾配天井での採用不可 ※1m以下は¥15,000',
  true,
  32,
  ARRAY['indirect-lighting']
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
  id, 'int-indirect-cornice-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-indirect-cornice'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-cornice' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-cornice' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-cornice' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-cornice' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- アッパー照明 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-indirect-upper',
  'アッパー照明',
  'Gハウス',
  'INDIRECT-UPPER',
  NULL,
  '上部アクリル板含む t5 ※1m以下は¥20,000',
  true,
  33,
  ARRAY['indirect-lighting']
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
  id, 'int-indirect-upper-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-indirect-upper'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-upper' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-upper' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-upper' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-indirect-upper' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- カーペット階段 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stairs-carpet',
  'カーペット階段',
  'Gハウス',
  'CARPET-STAIRS',
  NULL,
  '※ひな壇階段では使用不可 ※アイアン階段では使用不可 ※1〜2階分ごとにオプション',
  true,
  34,
  ARRAY['stairs']
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
  id, 'int-stairs-carpet-v1', 'CIR5002', NULL, true, 0
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v2', 'CIR-5006', NULL, true, 1
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v3', 'CIR-5007', NULL, true, 2
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v4', 'CIR-5008', NULL, true, 3
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v5', 'LIR-5032', NULL, true, 4
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v6', 'LIR-5033', NULL, true, 5
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v7', 'LIR-5036', NULL, true, 6
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v8', 'LIR-5044', NULL, true, 7
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v9', 'MDR-5014', NULL, true, 8
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v10', 'MDR-5017', NULL, true, 9
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v11', 'HDR-1052', NULL, true, 10
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v12', 'HDR-1053', NULL, true, 11
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-carpet-v13', 'HDR-1054', NULL, true, 12
FROM items WHERE item_code = 'int-stairs-carpet'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stairs-carpet' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 210000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stairs-carpet' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 210000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stairs-carpet' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 210000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stairs-carpet' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 格子なし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-lattice-none',
  '格子なし（標準）',
  '-',
  'NONE',
  NULL,
  '格子を設置しない場合はこちらを選択',
  true,
  35,
  ARRAY['lattice']
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
  id, 'int-lattice-none-v1', '-', NULL, true, 0
FROM items WHERE item_code = 'int-lattice-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- インテリア格子 W045（W276〜465mm） (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-lattice-w045',
  'インテリア格子 W045（W276〜465mm）',
  'LIXIL',
  'LATTICE-W045',
  NULL,
  '高さH895〜2,495mm選択可 ※腰壁設置は別途費用',
  true,
  36,
  ARRAY['lattice']
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
  id, 'int-lattice-w045-v1', 'クリエペール', NULL, true, 0
FROM items WHERE item_code = 'int-lattice-w045'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w045-v2', 'クリエラスク', NULL, true, 1
FROM items WHERE item_code = 'int-lattice-w045'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w045-v3', 'クリエダーク', NULL, true, 2
FROM items WHERE item_code = 'int-lattice-w045'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w045-v4', 'コウノキ', NULL, true, 3
FROM items WHERE item_code = 'int-lattice-w045'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w045' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w045' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w045' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w045' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- インテリア格子 W085（W466〜843mm） (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-lattice-w085',
  'インテリア格子 W085（W466〜843mm）',
  'LIXIL',
  'LATTICE-W085',
  NULL,
  '高さH895〜2,495mm選択可 ※腰壁設置は別途費用',
  true,
  37,
  ARRAY['lattice']
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
  id, 'int-lattice-w085-v1', 'クリエペール', NULL, true, 0
FROM items WHERE item_code = 'int-lattice-w085'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w085-v2', 'クリエラスク', NULL, true, 1
FROM items WHERE item_code = 'int-lattice-w085'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w085-v3', 'クリエダーク', NULL, true, 2
FROM items WHERE item_code = 'int-lattice-w085'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w085-v4', 'コウノキ', NULL, true, 3
FROM items WHERE item_code = 'int-lattice-w085'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w085' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w085' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w085' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w085' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- インテリア格子 W12（W843〜1,221mm） (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-lattice-w12',
  'インテリア格子 W12（W843〜1,221mm）',
  'LIXIL',
  'LATTICE-W12',
  NULL,
  '高さH895〜2,495mm選択可 ※腰壁設置は別途費用',
  true,
  38,
  ARRAY['lattice']
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
  id, 'int-lattice-w12-v1', 'クリエペール', NULL, true, 0
FROM items WHERE item_code = 'int-lattice-w12'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w12-v2', 'クリエラスク', NULL, true, 1
FROM items WHERE item_code = 'int-lattice-w12'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w12-v3', 'クリエダーク', NULL, true, 2
FROM items WHERE item_code = 'int-lattice-w12'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w12-v4', 'コウノキ', NULL, true, 3
FROM items WHERE item_code = 'int-lattice-w12'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 160000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w12' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 160000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w12' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 160000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w12' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 160000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w12' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- インテリア格子 W16（W1,221〜2,495mm） (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-lattice-w16',
  'インテリア格子 W16（W1,221〜2,495mm）',
  'LIXIL',
  'LATTICE-W16',
  NULL,
  '高さH895〜2,495mm選択可 ※腰壁設置は別途費用',
  true,
  39,
  ARRAY['lattice']
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
  id, 'int-lattice-w16-v1', 'クリエペール', NULL, true, 0
FROM items WHERE item_code = 'int-lattice-w16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w16-v2', 'クリエラスク', NULL, true, 1
FROM items WHERE item_code = 'int-lattice-w16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w16-v3', 'クリエダーク', NULL, true, 2
FROM items WHERE item_code = 'int-lattice-w16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-lattice-w16-v4', 'コウノキ', NULL, true, 3
FROM items WHERE item_code = 'int-lattice-w16'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 190000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w16' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 190000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w16' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 190000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w16' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 190000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lattice-w16' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- カウンターなし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-none',
  'カウンターなし（標準）',
  '-',
  'NONE',
  NULL,
  'インテリアカウンターを設置しない場合はこちらを選択',
  true,
  40,
  ARRAY['counter']
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
  id, 'int-counter-none-v1', '-', NULL, true, 0
FROM items WHERE item_code = 'int-counter-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- インテリアカウンター（トイレ用） (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-toilet',
  'インテリアカウンター（トイレ用）',
  'Panasonic',
  'COUNTER-TOILET',
  NULL,
  '耐水集成タイプ 厚み24mm トイレなどちょい置きスペースに 長さ1400mm以下 奥行300mm以下',
  true,
  41,
  ARRAY['counter']
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
  id, 'int-counter-toilet-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-toilet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-toilet-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-toilet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-toilet-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-toilet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-toilet-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-toilet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-toilet-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-toilet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-toilet-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-toilet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-toilet-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-toilet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-toilet-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-toilet'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-toilet-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-toilet'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-toilet' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-toilet' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-toilet' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-toilet' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行100〜200mm W〜1000mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-shelf-w1000',
  '奥行100〜200mm W〜1000mm',
  'Panasonic',
  'COUNTER-D200-W1000',
  NULL,
  '飾り棚用 耐水集成タイプ 厚み24mm アングル3個',
  true,
  42,
  ARRAY['counter']
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
  id, 'int-counter-shelf-w1000-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-shelf-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1000-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-shelf-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1000-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-shelf-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1000-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-shelf-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1000-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-shelf-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1000-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-shelf-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1000-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-shelf-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1000-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-shelf-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1000-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-shelf-w1000'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 41000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w1000' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 41000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w1000' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 41000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w1000' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 41000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w1000' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行100〜200mm W1001〜1800mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-shelf-w1800',
  '奥行100〜200mm W1001〜1800mm',
  'Panasonic',
  'COUNTER-D200-W1800',
  NULL,
  '飾り棚用 耐水集成タイプ 厚み24mm アングル4個',
  true,
  43,
  ARRAY['counter']
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
  id, 'int-counter-shelf-w1800-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-shelf-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1800-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-shelf-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1800-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-shelf-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1800-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-shelf-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1800-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-shelf-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1800-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-shelf-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1800-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-shelf-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1800-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-shelf-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w1800-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-shelf-w1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 58000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w1800' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 58000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w1800' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 58000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w1800' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 58000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w1800' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行100〜200mm W1801〜2800mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-shelf-w2800',
  '奥行100〜200mm W1801〜2800mm',
  'Panasonic',
  'COUNTER-D200-W2800',
  NULL,
  '飾り棚用 耐水集成タイプ 厚み24mm アングル6個',
  true,
  44,
  ARRAY['counter']
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
  id, 'int-counter-shelf-w2800-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-shelf-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w2800-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-shelf-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w2800-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-shelf-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w2800-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-shelf-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w2800-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-shelf-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w2800-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-shelf-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w2800-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-shelf-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w2800-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-shelf-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w2800-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-shelf-w2800'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 74000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w2800' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 74000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w2800' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 74000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w2800' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 74000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w2800' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行100〜200mm W2801〜4000mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-shelf-w4000',
  '奥行100〜200mm W2801〜4000mm',
  'Panasonic',
  'COUNTER-D200-W4000',
  NULL,
  '飾り棚用 耐水集成タイプ 厚み24mm アングル9個',
  true,
  45,
  ARRAY['counter']
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
  id, 'int-counter-shelf-w4000-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-shelf-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w4000-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-shelf-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w4000-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-shelf-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w4000-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-shelf-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w4000-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-shelf-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w4000-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-shelf-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w4000-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-shelf-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w4000-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-shelf-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-shelf-w4000-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-shelf-w4000'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 94000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w4000' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 94000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w4000' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 94000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w4000' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 94000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-shelf-w4000' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行201〜450mm W〜1000mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-study-w1000',
  '奥行201〜450mm W〜1000mm',
  'Panasonic',
  'COUNTER-D450-W1000',
  NULL,
  'スタディスペース用 耐水集成タイプ 厚み24mm ブラケット3個',
  true,
  46,
  ARRAY['counter']
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
  id, 'int-counter-study-w1000-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-study-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1000-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-study-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1000-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-study-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1000-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-study-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1000-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-study-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1000-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-study-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1000-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-study-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1000-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-study-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1000-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-study-w1000'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 41000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w1000' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 41000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w1000' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 41000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w1000' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 41000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w1000' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行201〜450mm W1001〜1800mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-study-w1800',
  '奥行201〜450mm W1001〜1800mm',
  'Panasonic',
  'COUNTER-D450-W1800',
  NULL,
  'スタディスペース用 耐水集成タイプ 厚み24mm ブラケット4個',
  true,
  47,
  ARRAY['counter']
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
  id, 'int-counter-study-w1800-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-study-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1800-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-study-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1800-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-study-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1800-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-study-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1800-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-study-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1800-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-study-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1800-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-study-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1800-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-study-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w1800-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-study-w1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 64000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w1800' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 64000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w1800' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 64000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w1800' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 64000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w1800' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行201〜450mm W1801〜2800mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-study-w2800',
  '奥行201〜450mm W1801〜2800mm',
  'Panasonic',
  'COUNTER-D450-W2800',
  NULL,
  'スタディスペース用 耐水集成タイプ 厚み24mm ブラケット6個',
  true,
  48,
  ARRAY['counter']
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
  id, 'int-counter-study-w2800-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-study-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w2800-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-study-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w2800-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-study-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w2800-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-study-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w2800-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-study-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w2800-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-study-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w2800-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-study-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w2800-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-study-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w2800-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-study-w2800'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 81000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w2800' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 81000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w2800' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 81000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w2800' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 81000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w2800' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行201〜450mm W2801〜4000mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-study-w4000',
  '奥行201〜450mm W2801〜4000mm',
  'Panasonic',
  'COUNTER-D450-W4000',
  NULL,
  'スタディスペース用 耐水集成タイプ 厚み24mm ブラケット9個',
  true,
  49,
  ARRAY['counter']
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
  id, 'int-counter-study-w4000-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-study-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w4000-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-study-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w4000-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-study-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w4000-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-study-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w4000-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-study-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w4000-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-study-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w4000-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-study-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w4000-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-study-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-study-w4000-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-study-w4000'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 115000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w4000' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 115000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w4000' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 115000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w4000' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 115000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-study-w4000' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行451〜600mm W〜1000mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-work-w1000',
  '奥行451〜600mm W〜1000mm',
  'Panasonic',
  'COUNTER-D600-W1000',
  NULL,
  'ワークスペース用 耐水集成タイプ 厚み24mm ブラケット3個',
  true,
  50,
  ARRAY['counter']
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
  id, 'int-counter-work-w1000-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-work-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1000-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-work-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1000-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-work-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1000-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-work-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1000-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-work-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1000-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-work-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1000-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-work-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1000-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-work-w1000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1000-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-work-w1000'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 61000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w1000' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 61000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w1000' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 61000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w1000' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 61000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w1000' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行451〜600mm W1001〜1800mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-work-w1800',
  '奥行451〜600mm W1001〜1800mm',
  'Panasonic',
  'COUNTER-D600-W1800',
  NULL,
  'ワークスペース用 耐水集成タイプ 厚み24mm ブラケット4個',
  true,
  51,
  ARRAY['counter']
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
  id, 'int-counter-work-w1800-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-work-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1800-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-work-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1800-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-work-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1800-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-work-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1800-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-work-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1800-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-work-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1800-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-work-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1800-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-work-w1800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w1800-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-work-w1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 103000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w1800' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 103000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w1800' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 103000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w1800' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 103000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w1800' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行451〜600mm W1801〜2800mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-work-w2800',
  '奥行451〜600mm W1801〜2800mm',
  'Panasonic',
  'COUNTER-D600-W2800',
  NULL,
  'ワークスペース用 耐水集成タイプ 厚み24mm ブラケット6個',
  true,
  52,
  ARRAY['counter']
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
  id, 'int-counter-work-w2800-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-work-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w2800-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-work-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w2800-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-work-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w2800-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-work-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w2800-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-work-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w2800-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-work-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w2800-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-work-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w2800-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-work-w2800'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w2800-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-work-w2800'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 141000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w2800' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 141000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w2800' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 141000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w2800' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 141000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w2800' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 奥行451〜600mm W2801〜4000mm (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-work-w4000',
  '奥行451〜600mm W2801〜4000mm',
  'Panasonic',
  'COUNTER-D600-W4000',
  NULL,
  'ワークスペース用 耐水集成タイプ 厚み24mm ブラケット9個',
  true,
  53,
  ARRAY['counter']
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
  id, 'int-counter-work-w4000-v1', 'ソフトウォールナット色 LV', NULL, true, 0
FROM items WHERE item_code = 'int-counter-work-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w4000-v2', 'ウォールナット色 TY', NULL, true, 1
FROM items WHERE item_code = 'int-counter-work-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w4000-v3', 'チェリー色 CY', NULL, true, 2
FROM items WHERE item_code = 'int-counter-work-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w4000-v4', 'グレージュアッシュ色 RV', NULL, true, 3
FROM items WHERE item_code = 'int-counter-work-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w4000-v5', 'イデアオーク色 EV', NULL, true, 4
FROM items WHERE item_code = 'int-counter-work-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w4000-v6', 'メープル色 OY', NULL, true, 5
FROM items WHERE item_code = 'int-counter-work-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w4000-v7', 'ホワイトオーク色 WY', NULL, true, 6
FROM items WHERE item_code = 'int-counter-work-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w4000-v8', 'ホワイトアッシュ色 GY', NULL, true, 7
FROM items WHERE item_code = 'int-counter-work-w4000'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-work-w4000-v9', 'しっくいホワイト色 PY', NULL, true, 8
FROM items WHERE item_code = 'int-counter-work-w4000'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 192000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w4000' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 192000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w4000' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 192000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w4000' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 192000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-work-w4000' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 配線用キャップ穴加工 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-counter-cable-cap',
  '配線用キャップ穴加工',
  'Panasonic',
  'COUNTER-CABLE-CAP',
  NULL,
  'カウンターに配線用キャップ穴を加工',
  true,
  54,
  ARRAY['counter']
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
  id, 'int-counter-cable-cap-v1', 'ブラウン', NULL, true, 0
FROM items WHERE item_code = 'int-counter-cable-cap'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-cable-cap-v2', 'ブラック', NULL, true, 1
FROM items WHERE item_code = 'int-counter-cable-cap'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-counter-cable-cap-v3', 'グレー', NULL, true, 2
FROM items WHERE item_code = 'int-counter-cable-cap'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-cable-cap' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-cable-cap' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-cable-cap' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-counter-cable-cap' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作トイレ 背面収納スペース (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-toilet-storage-back',
  '造作トイレ 背面収納スペース',
  'Gハウス',
  'TOILET-BACK-SPACE',
  NULL,
  '※スペースのみ 棚板含まず ※下地施工は別途費用 ※開口部有効寸法260mm以上必要',
  true,
  55,
  ARRAY['toilet-storage']
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
  id, 'int-toilet-storage-back-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-toilet-storage-back'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-back' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-back' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-back' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-back' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作トイレ 収納 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-toilet-storage-side',
  '造作トイレ 収納',
  'Gハウス',
  'TOILET-SIDE-STORAGE',
  NULL,
  'W150×H床〜天井×D130(有効) 棚板3枚（固定棚）ふかし壁費用含む',
  true,
  56,
  ARRAY['toilet-storage']
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
  id, 'int-toilet-storage-side-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-toilet-storage-side'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-toilet-storage-side-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-toilet-storage-side'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-toilet-storage-side-v3', 'アッシュウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-toilet-storage-side'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-toilet-storage-side-v4', 'ダークグレー', NULL, true, 3
FROM items WHERE item_code = 'int-toilet-storage-side'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-toilet-storage-side-v5', 'ブライトウォールナット', NULL, true, 4
FROM items WHERE item_code = 'int-toilet-storage-side'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-side' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-side' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-side' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-side' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- サニタトイレ収納ボックス Sタイプ (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-toilet-storage-sanita',
  'サニタトイレ収納ボックス Sタイプ',
  'Gハウス',
  'SANITA-TOILET-S',
  NULL,
  'W300×H740×D117.4(有効) ※クリアホワイトのみ 扉開き方向選択可',
  true,
  57,
  ARRAY['toilet-storage']
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
  id, 'int-toilet-storage-sanita-v1', 'クリアホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-toilet-storage-sanita'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-sanita' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-sanita' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-sanita' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-sanita' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- トイレ上部収納 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-toilet-storage-upper',
  'トイレ上部収納',
  'Gハウス',
  'TOILET-UPPER-STORAGE',
  NULL,
  '〜W905×H470×D300(有効) ※クリアホワイトのみ 両壁納まり/片壁納まり選択可',
  true,
  58,
  ARRAY['toilet-storage']
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
  id, 'int-toilet-storage-upper-v1', 'クリアホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-toilet-storage-upper'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-upper' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-upper' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-upper' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-toilet-storage-upper' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- カーテンBOX（天井埋込タイプ） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-curtain-box-ceiling',
  'カーテンBOX（天井埋込タイプ）',
  'Gハウス',
  'CURTAIN-BOX-CEILING',
  NULL,
  '※勾配天井時 採用不可 ※カーテンレールは付属いたしません ※1m以下は¥15,000',
  true,
  59,
  ARRAY['curtain-box']
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
  id, 'int-curtain-box-ceiling-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-curtain-box-ceiling'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-curtain-box-ceiling' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-curtain-box-ceiling' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-curtain-box-ceiling' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-curtain-box-ceiling' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- カーテンBOX（下がり壁タイプ） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-curtain-box-wall',
  'カーテンBOX（下がり壁タイプ）',
  'Gハウス',
  'CURTAIN-BOX-WALL',
  NULL,
  '※カーテンレールは付属いたしません ※1m以下は¥11,000',
  true,
  60,
  ARRAY['curtain-box']
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
  id, 'int-curtain-box-wall-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-curtain-box-wall'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 11000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-curtain-box-wall' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 11000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-curtain-box-wall' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 11000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-curtain-box-wall' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 11000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-curtain-box-wall' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS PAデザイン ハイドアH2400 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-std-pa',
  'VERITIS PAデザイン ハイドアH2400',
  'Panasonic',
  'VERITIS-PA-H2400',
  NULL,
  'ハイドア標準（H2400）開き戸・各居室・トイレ・脱衣室・ランドリーのみ標準装備',
  true,
  61,
  ARRAY['interior-door']
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
  id, 'door-std-pa-v1', 'ソフトウォールナット柄', NULL, true, 0
FROM items WHERE item_code = 'door-std-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-pa-v2', 'ウォールナット柄', NULL, true, 1
FROM items WHERE item_code = 'door-std-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-pa-v3', 'チェリー柄', NULL, true, 2
FROM items WHERE item_code = 'door-std-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-pa-v4', 'グレージュアッシュ柄', NULL, true, 3
FROM items WHERE item_code = 'door-std-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-pa-v5', 'イデアオーク柄', NULL, true, 4
FROM items WHERE item_code = 'door-std-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-pa-v6', 'メープル柄', NULL, true, 5
FROM items WHERE item_code = 'door-std-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-pa-v7', 'ホワイトオーク柄', NULL, true, 6
FROM items WHERE item_code = 'door-std-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-pa-v8', 'ホワイトアッシュ柄', NULL, true, 7
FROM items WHERE item_code = 'door-std-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-pa-v9', 'しっくいホワイト柄', NULL, true, 8
FROM items WHERE item_code = 'door-std-pa'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-std-pa' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-std-pa' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-std-pa' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-std-pa' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS TAデザイン トイレ用ハイドアH2400 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-std-ta',
  'VERITIS TAデザイン トイレ用ハイドアH2400',
  'Panasonic',
  'VERITIS-TA-H2400',
  NULL,
  'トイレ用扉（上部にスコープ有）ハイドア標準（H2400）',
  true,
  62,
  ARRAY['interior-door']
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
  id, 'door-std-ta-v1', 'ソフトウォールナット柄', NULL, true, 0
FROM items WHERE item_code = 'door-std-ta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-ta-v2', 'ウォールナット柄', NULL, true, 1
FROM items WHERE item_code = 'door-std-ta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-ta-v3', 'チェリー柄', NULL, true, 2
FROM items WHERE item_code = 'door-std-ta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-ta-v4', 'グレージュアッシュ柄', NULL, true, 3
FROM items WHERE item_code = 'door-std-ta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-ta-v5', 'イデアオーク柄', NULL, true, 4
FROM items WHERE item_code = 'door-std-ta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-ta-v6', 'メープル柄', NULL, true, 5
FROM items WHERE item_code = 'door-std-ta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-ta-v7', 'ホワイトオーク柄', NULL, true, 6
FROM items WHERE item_code = 'door-std-ta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-ta-v8', 'ホワイトアッシュ柄', NULL, true, 7
FROM items WHERE item_code = 'door-std-ta'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-std-ta-v9', 'しっくいホワイト柄', NULL, true, 8
FROM items WHERE item_code = 'door-std-ta'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-std-ta' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-std-ta' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-std-ta' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-std-ta' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS ペイントカラー ブラックオーク柄 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-paint-blackoak',
  'VERITIS ペイントカラー ブラックオーク柄',
  'Panasonic',
  'VERITIS-PAINT-BLACKOAK',
  NULL,
  'ペイントカラー変更（扉1枚W900まで）',
  true,
  63,
  ARRAY['interior-door']
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
  id, 'door-paint-blackoak-v1', 'ブラックオーク柄', NULL, true, 0
FROM items WHERE item_code = 'door-paint-blackoak'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-blackoak' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-blackoak' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-blackoak' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-blackoak' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS ペイントカラー ネイビーオーク柄 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-paint-navyoak',
  'VERITIS ペイントカラー ネイビーオーク柄',
  'Panasonic',
  'VERITIS-PAINT-NAVYOAK',
  NULL,
  'ペイントカラー変更（扉1枚W900まで）',
  true,
  64,
  ARRAY['interior-door']
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
  id, 'door-paint-navyoak-v1', 'ネイビーオーク柄', NULL, true, 0
FROM items WHERE item_code = 'door-paint-navyoak'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-navyoak' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-navyoak' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-navyoak' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-navyoak' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS ペイントカラー ブルーグレーオーク柄 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-paint-bluegrayoak',
  'VERITIS ペイントカラー ブルーグレーオーク柄',
  'Panasonic',
  'VERITIS-PAINT-BLUEGRAYOAK',
  NULL,
  'ペイントカラー変更（扉1枚W900まで）',
  true,
  65,
  ARRAY['interior-door']
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
  id, 'door-paint-bluegrayoak-v1', 'ブルーグレーオーク柄', NULL, true, 0
FROM items WHERE item_code = 'door-paint-bluegrayoak'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-bluegrayoak' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-bluegrayoak' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-bluegrayoak' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-bluegrayoak' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS ペイントカラー ビターウォルドオーク柄 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-paint-bitterwald',
  'VERITIS ペイントカラー ビターウォルドオーク柄',
  'Panasonic',
  'VERITIS-PAINT-BITTERWALD',
  NULL,
  'ペイントカラー変更（扉1枚W900まで）',
  true,
  66,
  ARRAY['interior-door']
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
  id, 'door-paint-bitterwald-v1', 'ビターウォルドオーク柄', NULL, true, 0
FROM items WHERE item_code = 'door-paint-bitterwald'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-bitterwald' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-bitterwald' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-bitterwald' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-paint-bitterwald' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS ソリッドカラー ソイルブラック柄 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-solid-soilblack',
  'VERITIS ソリッドカラー ソイルブラック柄',
  'Panasonic',
  'VERITIS-SOLID-SOILBLACK',
  NULL,
  'ソリッドカラー変更（扉1枚W900まで）',
  true,
  67,
  ARRAY['interior-door']
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
  id, 'door-solid-soilblack-v1', 'ソイルブラック柄', NULL, true, 0
FROM items WHERE item_code = 'door-solid-soilblack'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-solid-soilblack' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-solid-soilblack' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-solid-soilblack' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-solid-soilblack' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS ソリッドカラー パールグレー柄 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-solid-pearlgray',
  'VERITIS ソリッドカラー パールグレー柄',
  'Panasonic',
  'VERITIS-SOLID-PEARLGRAY',
  NULL,
  'ソリッドカラー変更（扉1枚W900まで）',
  true,
  68,
  ARRAY['interior-door']
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
  id, 'door-solid-pearlgray-v1', 'パールグレー柄', NULL, true, 0
FROM items WHERE item_code = 'door-solid-pearlgray'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-solid-pearlgray' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-solid-pearlgray' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-solid-pearlgray' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-solid-pearlgray' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ハンドル(A1型) サテンシルバー色 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-handle-silver',
  'ハンドル(A1型) サテンシルバー色',
  'Panasonic',
  'MJE1851ST',
  NULL,
  '開き戸用ハンドル サテンシルバー色（塗装）',
  true,
  69,
  ARRAY['interior-door']
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
  id, 'door-handle-silver-v1', 'サテンシルバー色', NULL, true, 0
FROM items WHERE item_code = 'door-handle-silver'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-handle-silver' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-handle-silver' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-handle-silver' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-handle-silver' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ハンドル(A1型) オフブラック色 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-handle-black',
  'ハンドル(A1型) オフブラック色',
  'Panasonic',
  'MJE1852ST',
  NULL,
  '開き戸用ハンドル オフブラック色（塗装）',
  true,
  70,
  ARRAY['interior-door']
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
  id, 'door-handle-black-v1', 'オフブラック色', NULL, true, 0
FROM items WHERE item_code = 'door-handle-black'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-handle-black' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-handle-black' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-handle-black' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-handle-black' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 角型引手(C1型) サテンシルバー色 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-pull-silver',
  '角型引手(C1型) サテンシルバー色',
  'Panasonic',
  'MJE1851BN',
  NULL,
  '引戸用引手 サテンシルバー色（塗装）',
  true,
  71,
  ARRAY['interior-door']
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
  id, 'door-pull-silver-v1', 'サテンシルバー色', NULL, true, 0
FROM items WHERE item_code = 'door-pull-silver'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-pull-silver' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-pull-silver' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-pull-silver' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-pull-silver' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 角型引手(C1型) オフブラック色 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-pull-black',
  '角型引手(C1型) オフブラック色',
  'Panasonic',
  'MJE1852BN',
  NULL,
  '引戸用引手 オフブラック色（塗装）',
  true,
  72,
  ARRAY['interior-door']
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
  id, 'door-pull-black-v1', 'オフブラック色', NULL, true, 0
FROM items WHERE item_code = 'door-pull-black'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-pull-black' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-pull-black' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-pull-black' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-pull-black' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS 収納用折戸 PHデザイン (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-storage-fold-ph',
  'VERITIS 収納用折戸 PHデザイン',
  'Panasonic',
  'VERITIS-CL-FOLD-PH',
  NULL,
  '折れ戸/壁芯々W910まで（H2400）取手レス',
  true,
  73,
  ARRAY['interior-door']
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
  id, 'door-storage-fold-ph-v1', 'ソフトウォールナット柄', NULL, true, 0
FROM items WHERE item_code = 'door-storage-fold-ph'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-ph-v2', 'ウォールナット柄', NULL, true, 1
FROM items WHERE item_code = 'door-storage-fold-ph'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-ph-v3', 'チェリー柄', NULL, true, 2
FROM items WHERE item_code = 'door-storage-fold-ph'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-ph-v4', 'グレージュアッシュ柄', NULL, true, 3
FROM items WHERE item_code = 'door-storage-fold-ph'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-ph-v5', 'イデアオーク柄', NULL, true, 4
FROM items WHERE item_code = 'door-storage-fold-ph'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-ph-v6', 'メープル柄', NULL, true, 5
FROM items WHERE item_code = 'door-storage-fold-ph'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-ph-v7', 'ホワイトオーク柄', NULL, true, 6
FROM items WHERE item_code = 'door-storage-fold-ph'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-ph-v8', 'ホワイトアッシュ柄', NULL, true, 7
FROM items WHERE item_code = 'door-storage-fold-ph'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-ph-v9', 'しっくいホワイト柄', NULL, true, 8
FROM items WHERE item_code = 'door-storage-fold-ph'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-ph' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-ph' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-ph' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-ph' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS 収納用折戸 PAデザイン (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-storage-fold-pa',
  'VERITIS 収納用折戸 PAデザイン',
  'Panasonic',
  'VERITIS-CL-FOLD-PA',
  NULL,
  '折れ戸/壁芯々W910まで（H2400）',
  true,
  74,
  ARRAY['interior-door']
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
  id, 'door-storage-fold-pa-v1', 'ソフトウォールナット柄', NULL, true, 0
FROM items WHERE item_code = 'door-storage-fold-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-pa-v2', 'ウォールナット柄', NULL, true, 1
FROM items WHERE item_code = 'door-storage-fold-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-pa-v3', 'チェリー柄', NULL, true, 2
FROM items WHERE item_code = 'door-storage-fold-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-pa-v4', 'グレージュアッシュ柄', NULL, true, 3
FROM items WHERE item_code = 'door-storage-fold-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-pa-v5', 'イデアオーク柄', NULL, true, 4
FROM items WHERE item_code = 'door-storage-fold-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-pa-v6', 'メープル柄', NULL, true, 5
FROM items WHERE item_code = 'door-storage-fold-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-pa-v7', 'ホワイトオーク柄', NULL, true, 6
FROM items WHERE item_code = 'door-storage-fold-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-pa-v8', 'ホワイトアッシュ柄', NULL, true, 7
FROM items WHERE item_code = 'door-storage-fold-pa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-fold-pa-v9', 'しっくいホワイト柄', NULL, true, 8
FROM items WHERE item_code = 'door-storage-fold-pa'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-pa' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-pa' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-pa' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-pa' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS 収納用折戸 鏡追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-storage-fold-mirror',
  'VERITIS 収納用折戸 鏡追加',
  'Panasonic',
  'VERITIS-CL-FOLD-MIRROR',
  NULL,
  '折れ戸に鏡追加（折れ戸のみ対応可）',
  true,
  75,
  ARRAY['interior-door']
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
  id, 'door-storage-fold-mirror-v1', '鏡付き', NULL, true, 0
FROM items WHERE item_code = 'door-storage-fold-mirror'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-mirror' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-mirror' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-mirror' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-fold-mirror' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS 収納用2枚引き違い戸 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-storage-slide2',
  'VERITIS 収納用2枚引き違い戸',
  'Panasonic',
  'VERITIS-CL-SLIDE2',
  NULL,
  '2枚引き違い戸/壁芯々W1820まで（H2400）',
  true,
  76,
  ARRAY['interior-door']
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
  id, 'door-storage-slide2-v1', 'ソフトウォールナット柄', NULL, true, 0
FROM items WHERE item_code = 'door-storage-slide2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-slide2-v2', 'ウォールナット柄', NULL, true, 1
FROM items WHERE item_code = 'door-storage-slide2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-slide2-v3', 'チェリー柄', NULL, true, 2
FROM items WHERE item_code = 'door-storage-slide2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-slide2-v4', 'グレージュアッシュ柄', NULL, true, 3
FROM items WHERE item_code = 'door-storage-slide2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-slide2-v5', 'イデアオーク柄', NULL, true, 4
FROM items WHERE item_code = 'door-storage-slide2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-slide2-v6', 'メープル柄', NULL, true, 5
FROM items WHERE item_code = 'door-storage-slide2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-slide2-v7', 'ホワイトオーク柄', NULL, true, 6
FROM items WHERE item_code = 'door-storage-slide2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-slide2-v8', 'ホワイトアッシュ柄', NULL, true, 7
FROM items WHERE item_code = 'door-storage-slide2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-storage-slide2-v9', 'しっくいホワイト柄', NULL, true, 8
FROM items WHERE item_code = 'door-storage-slide2'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 90000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-slide2' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 90000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-slide2' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 90000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-slide2' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 90000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-storage-slide2' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS WBデザイン 半透明アクリル板 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-wb',
  'VERITIS WBデザイン 半透明アクリル板',
  'Panasonic',
  'VERITIS-WB',
  NULL,
  '建具デザイン変更 WBデザイン 開戸/引戸（半透明アクリル板）',
  true,
  77,
  ARRAY['interior-door']
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
  id, 'door-design-wb-v1', '標準9色', NULL, true, 0
FROM items WHERE item_code = 'door-design-wb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-wb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-wb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-wb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-wb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS WCデザイン 半透明あわせガラス (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-wc',
  'VERITIS WCデザイン 半透明あわせガラス',
  'Panasonic',
  'VERITIS-WC',
  NULL,
  '建具デザイン変更 WCデザイン 開戸/引戸（半透明あわせガラス）',
  true,
  78,
  ARRAY['interior-door']
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
  id, 'door-design-wc-v1', '標準9色', NULL, true, 0
FROM items WHERE item_code = 'door-design-wc'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-wc' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-wc' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-wc' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-wc' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS LDデザイン 半透明アクリル板 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-ld',
  'VERITIS LDデザイン 半透明アクリル板',
  'Panasonic',
  'VERITIS-LD',
  NULL,
  '建具デザイン変更 LDデザイン 開戸/引戸（半透明アクリル板）',
  true,
  79,
  ARRAY['interior-door']
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
  id, 'door-design-ld-v1', '標準9色', NULL, true, 0
FROM items WHERE item_code = 'door-design-ld'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-ld' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-ld' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-ld' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-ld' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS MCデザイン 半透明あわせガラス (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-mc',
  'VERITIS MCデザイン 半透明あわせガラス',
  'Panasonic',
  'VERITIS-MC',
  NULL,
  '建具デザイン変更 MCデザイン 開戸/引戸（半透明あわせガラス）',
  true,
  80,
  ARRAY['interior-door']
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
  id, 'door-design-mc-v1', '標準9色', NULL, true, 0
FROM items WHERE item_code = 'door-design-mc'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-mc' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-mc' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-mc' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-mc' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS LBデザイン 半透明アクリル板 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-lb',
  'VERITIS LBデザイン 半透明アクリル板',
  'Panasonic',
  'VERITIS-LB',
  NULL,
  '建具デザイン変更 LBデザイン 開戸/引戸（半透明アクリル板）',
  true,
  81,
  ARRAY['interior-door']
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
  id, 'door-design-lb-v1', '標準9色', NULL, true, 0
FROM items WHERE item_code = 'door-design-lb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-lb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-lb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-lb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-lb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS PAデザイン+ペットドア (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-petdoor',
  'VERITIS PAデザイン+ペットドア',
  'Panasonic',
  'VERITIS-PA-PET',
  NULL,
  'PAデザイン+ペットドア 開戸（開口 H280×W180）',
  true,
  82,
  ARRAY['interior-door']
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
  id, 'door-design-petdoor-v1', '標準9色', NULL, true, 0
FROM items WHERE item_code = 'door-design-petdoor'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-petdoor' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-petdoor' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-petdoor' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-petdoor' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS HCデザイン ガラス引戸 変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-hc-change',
  'VERITIS HCデザイン ガラス引戸 変更',
  'Panasonic',
  'VERITIS-HC-CHANGE',
  NULL,
  'HCデザイン（透明orフロスト長熱処理ガラス）引戸のみ対応・引戸変更費用含む',
  true,
  83,
  ARRAY['interior-door']
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
  id, 'door-design-hc-change-v1', '透明ガラス', NULL, true, 0
FROM items WHERE item_code = 'door-design-hc-change'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-design-hc-change-v2', 'フロストガラス', NULL, true, 1
FROM items WHERE item_code = 'door-design-hc-change'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 105000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hc-change' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 105000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hc-change' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 105000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hc-change' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 105000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hc-change' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS HCデザイン ガラス引戸 追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-hc-add',
  'VERITIS HCデザイン ガラス引戸 追加',
  'Panasonic',
  'VERITIS-HC-ADD',
  NULL,
  'HCデザイン（透明orフロスト長熱処理ガラス）引戸追加',
  true,
  84,
  ARRAY['interior-door']
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
  id, 'door-design-hc-add-v1', '透明ガラス', NULL, true, 0
FROM items WHERE item_code = 'door-design-hc-add'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-design-hc-add-v2', 'フロストガラス', NULL, true, 1
FROM items WHERE item_code = 'door-design-hc-add'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hc-add' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hc-add' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hc-add' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hc-add' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS HBデザイン ガラス引戸 変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-hb-change',
  'VERITIS HBデザイン ガラス引戸 変更',
  'Panasonic',
  'VERITIS-HB-CHANGE',
  NULL,
  'HBデザイン（透明orフロスト長熱処理ガラス）引戸のみ対応・引戸変更費用含む',
  true,
  85,
  ARRAY['interior-door']
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
  id, 'door-design-hb-change-v1', '透明ガラス', NULL, true, 0
FROM items WHERE item_code = 'door-design-hb-change'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-design-hb-change-v2', 'フロストガラス', NULL, true, 1
FROM items WHERE item_code = 'door-design-hb-change'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hb-change' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hb-change' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hb-change' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hb-change' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS HBデザイン ガラス引戸 追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-design-hb-add',
  'VERITIS HBデザイン ガラス引戸 追加',
  'Panasonic',
  'VERITIS-HB-ADD',
  NULL,
  'HBデザイン（透明orフロスト長熱処理ガラス）引戸追加',
  true,
  86,
  ARRAY['interior-door']
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
  id, 'door-design-hb-add-v1', '透明ガラス', NULL, true, 0
FROM items WHERE item_code = 'door-design-hb-add'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'door-design-hb-add-v2', 'フロストガラス', NULL, true, 1
FROM items WHERE item_code = 'door-design-hb-add'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hb-add' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hb-add' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hb-add' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-design-hb-add' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS 開き戸追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-add-swing',
  'VERITIS 開き戸追加',
  'Panasonic',
  'VERITIS-ADD-SWING',
  NULL,
  '開き戸追加（リビングドア・書斎・洗面室・収納等）',
  true,
  87,
  ARRAY['interior-door']
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
  id, 'door-add-swing-v1', '標準9色', NULL, true, 0
FROM items WHERE item_code = 'door-add-swing'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-swing' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-swing' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-swing' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-swing' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS 標準開戸から片引戸へ変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-change-sliding',
  'VERITIS 標準開戸から片引戸へ変更',
  'Panasonic',
  'VERITIS-CHANGE-SLIDE',
  NULL,
  '標準開戸から片引戸へ変更差額（上吊りタイプ、下方レール無）※2枚まで標準で変更可能、3枚目からオプション',
  true,
  88,
  ARRAY['interior-door']
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
  id, 'door-change-sliding-v1', '標準9色', NULL, true, 0
FROM items WHERE item_code = 'door-change-sliding'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-change-sliding' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-change-sliding' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-change-sliding' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-change-sliding' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS 表示錠追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-add-lock',
  'VERITIS 表示錠追加',
  'Panasonic',
  'VERITIS-ADD-LOCK',
  NULL,
  '表示錠付きに変更差額（※トイレ・脱衣室は標準で表示錠付属）',
  true,
  89,
  ARRAY['interior-door']
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
  id, 'door-add-lock-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'door-add-lock'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-lock' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-lock' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-lock' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-lock' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- VERITIS 引戸追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'door-add-sliding',
  'VERITIS 引戸追加',
  'Panasonic',
  'VERITIS-ADD-SLIDE',
  NULL,
  '引戸追加（リビングドア・書斎・洗面室・収納等）',
  true,
  90,
  ARRAY['interior-door']
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
  id, 'door-add-sliding-v1', '標準9色', NULL, true, 0
FROM items WHERE item_code = 'door-add-sliding'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-sliding' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-sliding' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-sliding' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'door-add-sliding' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 階段セット (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stairs-001',
  '階段セット',
  'LIXIL',
  'STAIRS-SET',
  NULL,
  '踏板・蹴込板セット',
  true,
  91,
  ARRAY['stairs']
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
  id, 'int-stairs-001-v1', 'しっくいホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-stairs-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-001-v2', 'ソイルブラック', NULL, true, 1
FROM items WHERE item_code = 'int-stairs-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-001-v3', 'パールグレー', NULL, true, 2
FROM items WHERE item_code = 'int-stairs-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-001-v4', 'ゴム集成クリア塗装', NULL, true, 3
FROM items WHERE item_code = 'int-stairs-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stairs-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stairs-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 階段手摺セット (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stairs-002',
  '階段手摺セット',
  'LIXIL',
  'HANDRAIL-SET',
  NULL,
  '階段手摺（壁付け）',
  true,
  92,
  ARRAY['stairs']
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
  id, 'int-stairs-002-v1', 'ソフトウォールナット', NULL, true, 0
FROM items WHERE item_code = 'int-stairs-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-002-v2', 'ウォールナット', NULL, true, 1
FROM items WHERE item_code = 'int-stairs-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-002-v3', 'チェリー', NULL, true, 2
FROM items WHERE item_code = 'int-stairs-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-002-v4', 'グレージュアッシュ', NULL, true, 3
FROM items WHERE item_code = 'int-stairs-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-002-v5', 'イタリアオーク', NULL, true, 4
FROM items WHERE item_code = 'int-stairs-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-002-v6', 'メープル', NULL, true, 5
FROM items WHERE item_code = 'int-stairs-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-002-v7', 'ホワイトオーク', NULL, true, 6
FROM items WHERE item_code = 'int-stairs-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-002-v8', 'ホワイトアッシュ', NULL, true, 7
FROM items WHERE item_code = 'int-stairs-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stairs-002-v9', 'しっくいホワイト', NULL, true, 8
FROM items WHERE item_code = 'int-stairs-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stairs-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stairs-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 枕棚+PH (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-storage-001',
  '枕棚+PH',
  'Panasonic',
  'STORAGE-A',
  NULL,
  '標準：枕棚+パイプハンガー（各寝室1カ所、横幅2730迄）',
  true,
  93,
  ARRAY['room-storage']
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
  id, 'int-storage-001-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-storage-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 枕棚+PH（追加） (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-storage-002',
  '枕棚+PH（追加）',
  'Panasonic',
  'STORAGE-B',
  NULL,
  'オプション：枕棚+パイプハンガー（追加分）',
  true,
  94,
  ARRAY['room-storage']
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
  id, 'int-storage-002-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-storage-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- インテグレート可動棚 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-storage-003',
  'インテグレート可動棚',
  'Panasonic',
  'INTEGRATE-01',
  NULL,
  '可動棚システム（W900×H2400）',
  true,
  95,
  ARRAY['room-storage']
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
  id, 'int-storage-003-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-storage-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-storage-003-v2', 'ライトナチュラル', NULL, true, 1
FROM items WHERE item_code = 'int-storage-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-storage-003-v3', 'ダークブラウン', NULL, true, 2
FROM items WHERE item_code = 'int-storage-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 90000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンA（H320×W320） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-a',
  '造作ニッチ パターンA（H320×W320）',
  'Gハウス',
  'NICHE-A',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています（断熱材の欠損の原因となる為）',
  true,
  96,
  ARRAY['niche']
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
  id, 'int-niche-pattern-a-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-a'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-a-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-a'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-a-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-a'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-a-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-a'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-a-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-a'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-a-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-a'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-a' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-a' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-a' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-a' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンB（H650×W500）※リモコンニッチ可能 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-b',
  '造作ニッチ パターンB（H650×W500）※リモコンニッチ可能',
  'Gハウス',
  'NICHE-B',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  97,
  ARRAY['niche']
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
  id, 'int-niche-pattern-b-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-b-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-b-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-b-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-b-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-b-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-b'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-b' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-b' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-b' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-b' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンC（H250×W750） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-c',
  '造作ニッチ パターンC（H250×W750）',
  'Gハウス',
  'NICHE-C',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  98,
  ARRAY['niche']
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
  id, 'int-niche-pattern-c-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-c'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-c-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-c'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-c-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-c'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-c-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-c'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-c-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-c'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-c-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-c'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-c' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-c' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-c' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-c' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンD（H1050×W500） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-d',
  '造作ニッチ パターンD（H1050×W500）',
  'Gハウス',
  'NICHE-D',
  NULL,
  'H650・H200・H200 台有に限る 棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  99,
  ARRAY['niche']
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
  id, 'int-niche-pattern-d-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-d'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-d-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-d'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-d-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-d'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-d-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-d'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-d-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-d'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-d-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-d'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-d' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-d' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-d' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-d' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンE（H250×W1600）※リモコンニッチ可能 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-e',
  '造作ニッチ パターンE（H250×W1600）※リモコンニッチ可能',
  'Gハウス',
  'NICHE-E',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  100,
  ARRAY['niche']
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
  id, 'int-niche-pattern-e-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-e-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-e-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-e-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-e-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-e-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-e'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-e' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-e' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-e' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-e' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンF（H150×W780） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-f',
  '造作ニッチ パターンF（H150×W780）',
  'Gハウス',
  'NICHE-F',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  101,
  ARRAY['niche']
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
  id, 'int-niche-pattern-f-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-f'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-f-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-f'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-f-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-f'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-f-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-f'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-f-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-f'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-f-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-f'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-f' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-f' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-f' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-f' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンG（H150×W1050） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-g',
  '造作ニッチ パターンG（H150×W1050）',
  'Gハウス',
  'NICHE-G',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  102,
  ARRAY['niche']
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
  id, 'int-niche-pattern-g-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-g'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-g-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-g'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-g-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-g'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-g-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-g'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-g-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-g'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-g-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-g'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-g' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-g' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-g' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-g' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンH（H320×W320） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-h',
  '造作ニッチ パターンH（H320×W320）',
  'Gハウス',
  'NICHE-H',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  103,
  ARRAY['niche']
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
  id, 'int-niche-pattern-h-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-h'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-h-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-h'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-h-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-h'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-h-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-h'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-h-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-h'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-h-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-h'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-h' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-h' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-h' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-h' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンI（H250×W750） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-i',
  '造作ニッチ パターンI（H250×W750）',
  'Gハウス',
  'NICHE-I',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  104,
  ARRAY['niche']
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
  id, 'int-niche-pattern-i-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-i'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-i-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-i'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-i-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-i'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-i-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-i'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-i-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-i'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-i-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-i'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-i' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-i' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-i' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-i' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンJ（H550×W400）洗面室におすすめ (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-j',
  '造作ニッチ パターンJ（H550×W400）洗面室におすすめ',
  'Gハウス',
  'NICHE-J',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  105,
  ARRAY['niche']
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
  id, 'int-niche-pattern-j-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-j'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-j-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-j'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-j-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-j'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-j-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-j'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-j-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-j'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-j-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-j'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-j' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-j' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-j' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-j' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンK（H700×W400）洗面室におすすめ (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-k',
  '造作ニッチ パターンK（H700×W400）洗面室におすすめ',
  'Gハウス',
  'NICHE-K',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  106,
  ARRAY['niche']
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
  id, 'int-niche-pattern-k-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-k'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-k-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-k'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-k-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-k'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-k-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-k'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-k-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-k'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-k-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-k'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-k' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-k' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-k' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-k' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 造作ニッチ パターンL（H750×W400）洗面室におすすめ (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-pattern-l',
  '造作ニッチ パターンL（H750×W400）洗面室におすすめ',
  'Gハウス',
  'NICHE-L',
  NULL,
  '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
  true,
  107,
  ARRAY['niche']
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
  id, 'int-niche-pattern-l-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-pattern-l'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-l-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-pattern-l'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-l-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-pattern-l'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-l-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-pattern-l'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-l-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-pattern-l'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-pattern-l-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-pattern-l'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-l' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-l' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-l' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-pattern-l' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- リモコンニッチ パターンB（H650×W500） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-remote-b',
  'リモコンニッチ パターンB（H650×W500）',
  'Gハウス',
  'REMOTE-NICHE-B',
  NULL,
  '配線スペース確保のため背面にふかし壁が必要な場合あり。ふかし壁を設けない場合は棚板奥行約30〜40mm',
  true,
  108,
  ARRAY['niche']
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
  id, 'int-niche-remote-b-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-remote-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-b-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-remote-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-b-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-remote-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-b-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-remote-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-b-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-remote-b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-b-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-remote-b'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-remote-b' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-remote-b' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-remote-b' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-remote-b' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- リモコンニッチ パターンE（H250×W1600） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-niche-remote-e',
  'リモコンニッチ パターンE（H250×W1600）',
  'Gハウス',
  'REMOTE-NICHE-E',
  NULL,
  '配線スペース確保のため背面にふかし壁が必要な場合あり。ふかし壁を設けない場合は棚板奥行約30〜40mm',
  true,
  109,
  ARRAY['niche']
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
  id, 'int-niche-remote-e-v1', 'シェルホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-niche-remote-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-e-v2', 'ナチュラルバーチ', NULL, true, 1
FROM items WHERE item_code = 'int-niche-remote-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-e-v3', 'ブライトウォールナット', NULL, true, 2
FROM items WHERE item_code = 'int-niche-remote-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-e-v4', 'アッシュウォールナット', NULL, true, 3
FROM items WHERE item_code = 'int-niche-remote-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-e-v5', 'ダークグレー', NULL, true, 4
FROM items WHERE item_code = 'int-niche-remote-e'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-niche-remote-e-v6', 'ゴム集成クリア塗装', NULL, true, 5
FROM items WHERE item_code = 'int-niche-remote-e'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-remote-e' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-remote-e' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-remote-e' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-niche-remote-e' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 床補強なし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floor-reinforce-none',
  '床補強なし（標準）',
  '-',
  'NONE',
  NULL,
  '床補強を行わない場合はこちらを選択',
  true,
  110,
  ARRAY['reinforcement']
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
  id, 'int-floor-reinforce-none-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-floor-reinforce-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-reinforce-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-reinforce-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-reinforce-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floor-reinforce-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 床補強 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-reinforce-floor',
  '床補強',
  'Gハウス',
  'REINFORCE-FLOOR',
  NULL,
  '床補強工事（ピアノ、水槽など重量物設置用）',
  true,
  111,
  ARRAY['reinforcement']
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
  id, 'int-reinforce-floor-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-reinforce-floor'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-floor' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-floor' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-floor' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-floor' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 壁下地なし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-reinforce-none',
  '壁下地なし（標準）',
  '-',
  'NONE',
  NULL,
  '壁下地補強を行わない場合はこちらを選択',
  true,
  112,
  ARRAY['reinforcement']
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
  id, 'int-wall-reinforce-none-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-wall-reinforce-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-reinforce-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-reinforce-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-reinforce-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-reinforce-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 壁下地補強 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-reinforce-wall',
  '壁下地補強',
  'Gハウス',
  'REINFORCE-WALL',
  NULL,
  '1カ所（1,800mm×900mm）',
  true,
  113,
  ARRAY['reinforcement']
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
  id, 'int-reinforce-wall-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-reinforce-wall'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-wall' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-wall' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-wall' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-wall' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 天井下地なし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ceiling-reinforce-none',
  '天井下地なし（標準）',
  '-',
  'NONE',
  NULL,
  '天井下地補強を行わない場合はこちらを選択',
  true,
  114,
  ARRAY['reinforcement']
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
  id, 'int-ceiling-reinforce-none-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-ceiling-reinforce-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-reinforce-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-reinforce-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-reinforce-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-reinforce-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ロールカーテン用天井下地（1m未満） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-reinforce-ceiling-1m',
  'ロールカーテン用天井下地（1m未満）',
  'Gハウス',
  'REINFORCE-CEILING-1M',
  NULL,
  '下地材の厚み12mm・幅は300mm 長さ1m未満',
  true,
  115,
  ARRAY['reinforcement']
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
  id, 'int-reinforce-ceiling-1m-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-reinforce-ceiling-1m'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-1m' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-1m' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-1m' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-1m' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ロールカーテン用天井下地（2m未満） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-reinforce-ceiling-2m',
  'ロールカーテン用天井下地（2m未満）',
  'Gハウス',
  'REINFORCE-CEILING-2M',
  NULL,
  '下地材の厚み12mm・幅は300mm 長さ2m未満',
  true,
  116,
  ARRAY['reinforcement']
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
  id, 'int-reinforce-ceiling-2m-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-reinforce-ceiling-2m'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-2m' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-2m' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-2m' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-2m' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ロールカーテン用天井下地（3m未満） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-reinforce-ceiling-3m',
  'ロールカーテン用天井下地（3m未満）',
  'Gハウス',
  'REINFORCE-CEILING-3M',
  NULL,
  '下地材の厚み12mm・幅は300mm 長さ3m未満',
  true,
  117,
  ARRAY['reinforcement']
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
  id, 'int-reinforce-ceiling-3m-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-reinforce-ceiling-3m'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 9000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-3m' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 9000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-3m' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 9000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-3m' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 9000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-3m' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ロールカーテン用天井下地（4m未満） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-reinforce-ceiling-4m',
  'ロールカーテン用天井下地（4m未満）',
  'Gハウス',
  'REINFORCE-CEILING-4M',
  NULL,
  '下地材の厚み12mm・幅は300mm 長さ4m未満',
  true,
  118,
  ARRAY['reinforcement']
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
  id, 'int-reinforce-ceiling-4m-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-reinforce-ceiling-4m'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-4m' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-4m' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-4m' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-reinforce-ceiling-4m' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- マグネットクロス（マグマジック） (シンコール)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-magnet-cloth',
  'マグネットクロス（マグマジック）',
  'シンコール',
  'MAGMAGIC',
  NULL,
  '600×750のクロス下地材 表面仕上がりはクロス ※カット、くりぬき施工は不可 コンセント、スイッチ等の干渉にご注意',
  true,
  119,
  ARRAY['wall']
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
  id, 'int-magnet-cloth-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-magnet-cloth'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-magnet-cloth' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-magnet-cloth' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-magnet-cloth' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-magnet-cloth' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- サンゲツ ベースクロス (サンゲツ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-base-001',
  'サンゲツ ベースクロス',
  'サンゲツ',
  'SP-2801',
  NULL,
  '標準ベースクロス（全室標準）',
  true,
  120,
  ARRAY['base-wall-cloth']
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
  id, 'int-wall-base-001-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-wall-base-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-base-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-base-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- サンゲツ ベースクロス（天井） (サンゲツ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ceiling-base-001',
  'サンゲツ ベースクロス（天井）',
  'サンゲツ',
  'SP-2801-C',
  NULL,
  '標準天井クロス（全室標準）壁と同色',
  true,
  121,
  ARRAY['base-ceiling-cloth']
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
  id, 'int-ceiling-base-001-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-ceiling-base-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-base-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ceiling-base-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- サンゲツ厳選カタログ 標準面積内 (サンゲツ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-accent-001',
  'サンゲツ厳選カタログ 標準面積内',
  'サンゲツ',
  'SANGETSU-SELECT',
  NULL,
  '標準アクセントクロス 坪×2㎡＝標準面積まで無料',
  true,
  122,
  ARRAY['wall']
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
  id, 'int-wall-accent-001-v1', '厳選カタログから選択', NULL, true, 0
FROM items WHERE item_code = 'int-wall-accent-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-accent-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-accent-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-accent-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-accent-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- アクセントクロス追加（標準面積超過分） (サンゲツ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-accent-002',
  'アクセントクロス追加（標準面積超過分）',
  'サンゲツ',
  'SANGETSU-SELECT-EXTRA',
  NULL,
  '標準面積（坪×2㎡）を超える場合のオプション',
  true,
  123,
  ARRAY['wall']
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
  id, 'int-wall-accent-002-v1', '厳選カタログから選択', NULL, true, 0
FROM items WHERE item_code = 'int-wall-accent-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1400, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-accent-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1400, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-accent-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1400, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-accent-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1400, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-accent-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ストーンベニア (ADVAN)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-advan-001',
  'ストーンベニア',
  'ADVAN',
  'SV-001',
  NULL,
  '天然石薄板タイル',
  true,
  124,
  ARRAY['wall']
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
  id, 'int-tile-advan-001-v1', 'クォーツサイト', NULL, true, 0
FROM items WHERE item_code = 'int-tile-advan-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-advan-001-v2', 'スレート', NULL, true, 1
FROM items WHERE item_code = 'int-tile-advan-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-advan-001-v3', 'サンドストーン', NULL, true, 2
FROM items WHERE item_code = 'int-tile-advan-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 45000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-advan-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 48000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-advan-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- コスモワイド21 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-elec-001',
  'コスモワイド21',
  'Panasonic',
  'COSMO-WIDE21',
  NULL,
  'スクエアタイプ/ホワイト（標準）',
  true,
  125,
  ARRAY['electrical']
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
  id, 'int-elec-001-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-elec-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-elec-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-elec-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- LEDダウンライト 60W相当 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-light-001',
  'LEDダウンライト 60W相当',
  'Panasonic',
  'NNN61510W',
  NULL,
  '標準ダウンライト（昼白色）',
  true,
  126,
  ARRAY['lighting']
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
  id, 'int-light-001-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-light-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-light-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-light-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- LEDダウンライト 調光タイプ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-light-002',
  'LEDダウンライト 調光タイプ',
  'Panasonic',
  'NNN61511W',
  NULL,
  '調光機能付きダウンライト',
  true,
  127,
  ARRAY['lighting']
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
  id, 'int-light-002-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-light-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-light-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-light-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ペンダントライト (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-light-003',
  'ペンダントライト',
  'Panasonic',
  'LGB15141BK',
  NULL,
  'ダイニング用ペンダントライト',
  true,
  128,
  ARRAY['lighting']
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
  id, 'int-light-003-v1', 'ブラック', NULL, true, 0
FROM items WHERE item_code = 'int-light-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-light-003-v2', 'ホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-light-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-light-003-v3', 'ウッド調', NULL, true, 2
FROM items WHERE item_code = 'int-light-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-light-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-light-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 第一種換気システム 熱交換ユニット本体 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-vent-001',
  '第一種換気システム 熱交換ユニット本体',
  'Panasonic',
  'FY-VENT-UNIT',
  NULL,
  '熱交換ユニット本体（リモコンは本体と同色）',
  true,
  129,
  ARRAY['ventilation']
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
  id, 'int-vent-001-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-vent-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-vent-001-v2', 'グレー', NULL, true, 1
FROM items WHERE item_code = 'int-vent-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 給気グリル（天井付） (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-vent-grill-supply',
  '給気グリル（天井付）',
  'Panasonic',
  'FY-GPP024',
  NULL,
  '第一種換気 給気グリル',
  true,
  130,
  ARRAY['ventilation']
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
  id, 'int-vent-grill-supply-v1', 'ホワイト（FY-GPP024-W）', NULL, true, 0
FROM items WHERE item_code = 'int-vent-grill-supply'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-vent-grill-supply-v2', 'ライトブラウン（FY-GPP024-T）', NULL, true, 1
FROM items WHERE item_code = 'int-vent-grill-supply'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-vent-grill-supply-v3', 'グレー（FY-GPP024-H）', NULL, true, 2
FROM items WHERE item_code = 'int-vent-grill-supply'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-vent-grill-supply-v4', 'ブラック（FY-GPP024-K）', NULL, true, 3
FROM items WHERE item_code = 'int-vent-grill-supply'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-grill-supply' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-grill-supply' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-grill-supply' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-grill-supply' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 排気グリル（トイレ用天井付） (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-vent-grill-exhaust',
  '排気グリル（トイレ用天井付）',
  'Panasonic',
  'VB-GMR50PFC',
  NULL,
  '第一種換気 排気グリル',
  true,
  131,
  ARRAY['ventilation']
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
  id, 'int-vent-grill-exhaust-v1', 'ホワイト（VB-GMR50PFC-W）', NULL, true, 0
FROM items WHERE item_code = 'int-vent-grill-exhaust'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-vent-grill-exhaust-v2', 'ライトブラウン（VB-GMR50PFC-T）', NULL, true, 1
FROM items WHERE item_code = 'int-vent-grill-exhaust'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-grill-exhaust' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-grill-exhaust' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-grill-exhaust' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-vent-grill-exhaust' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内用手摺 (TOTO)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-handrail-001',
  '室内用手摺',
  'TOTO',
  'YHB601',
  NULL,
  'I型手摺 L600mm',
  true,
  132,
  ARRAY['handrail']
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
  id, 'int-handrail-001-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-handrail-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-handrail-001-v2', 'ライトウッド', NULL, true, 1
FROM items WHERE item_code = 'int-handrail-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-handrail-001-v3', 'ダークウッド', NULL, true, 2
FROM items WHERE item_code = 'int-handrail-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-handrail-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 13000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-handrail-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ホスクリーン（1カ所標準） (川口技研)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-hanger-001',
  'ホスクリーン（1カ所標準）',
  '川口技研',
  'SPC-W',
  NULL,
  '天井付け室内物干し（2本1組）※1カ所標準',
  true,
  133,
  ARRAY['hanger']
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
  id, 'int-hanger-001-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-hanger-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ホスクリーン追加 (川口技研)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-hanger-001-add',
  'ホスクリーン追加',
  '川口技研',
  'SPC-W',
  NULL,
  '天井付け室内物干し 追加（2カ所目以降）',
  true,
  134,
  ARRAY['hanger']
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
  id, 'int-hanger-001-add-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-hanger-001-add'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-001-add' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 16000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-001-add' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-001-add' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-001-add' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ホシ姫サマ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-hanger-002',
  'ホシ姫サマ',
  'Panasonic',
  'CWFE12CM',
  NULL,
  '電動式室内物干しユニット',
  true,
  135,
  ARRAY['hanger']
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
  id, 'int-hanger-002-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-hanger-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 85000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 90000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- フロアタイル コンクリート調 (東リ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floortile-001',
  'フロアタイル コンクリート調',
  '東リ',
  'PST4019-4035',
  'フロアタイル',
  'コンクリート調フロアタイル ※水廻りにご使用可能 ※水廻り以外でご使用の場合は追加費用',
  true,
  136,
  ARRAY['base-floor']
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
  id, 'int-floortile-001-v1', 'PST4019 スムースコンクリート', NULL, true, 0
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v2', 'PST4020 スムースコンクリート', NULL, true, 1
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v3', 'PST4021 スムースコンクリート', NULL, true, 2
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v4', 'PST4022 スムースコンクリート', NULL, true, 3
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v5', 'PST4023 スムースコンクリート', NULL, true, 4
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v6', 'PST4032 コンクリート', NULL, true, 5
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v7', 'PST4001 コンコット', NULL, true, 6
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v8', 'PST4005 コンコット', NULL, true, 7
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v9', 'PST4006 コンコット', NULL, true, 8
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v10', 'PST4034 フランモルタル', NULL, true, 9
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-001-v11', 'PST4035 フランモルタル', NULL, true, 10
FROM items WHERE item_code = 'int-floortile-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- フロアタイル 石目調 (東リ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floortile-002',
  'フロアタイル 石目調',
  '東リ',
  'PST4077-4123',
  'フロアタイル',
  '石目調フロアタイル ※水廻りにご使用可能',
  true,
  137,
  ARRAY['base-floor']
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
  id, 'int-floortile-002-v1', 'PST4093 ジオールストーン', NULL, true, 0
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-002-v2', 'PST4095 ジオールストーン', NULL, true, 1
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-002-v3', 'PST4077 フォグライム', NULL, true, 2
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-002-v4', 'PST4080 フォグライム', NULL, true, 3
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-002-v5', 'PST4083 フォグライム', NULL, true, 4
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-002-v6', 'PST4086 フォグライム', NULL, true, 5
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-002-v7', 'PST4089 フォグライム', NULL, true, 6
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-002-v8', 'PST4122 クロムスレート', NULL, true, 7
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-002-v9', 'PST4123 クロムスレート', NULL, true, 8
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-002-v10', 'PST4108 カララホワイト', NULL, true, 9
FROM items WHERE item_code = 'int-floortile-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- フロアタイル 木目調 (東リ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-floortile-003',
  'フロアタイル 木目調',
  '東リ',
  'PWT4228-4309',
  'フロアタイル',
  '木目調フロアタイル ※水廻りにご使用可能',
  true,
  138,
  ARRAY['base-floor']
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
  id, 'int-floortile-003-v1', 'PWT4309 籐', NULL, true, 0
FROM items WHERE item_code = 'int-floortile-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-003-v2', 'PWT4228 フレンチヘリンボーン', NULL, true, 1
FROM items WHERE item_code = 'int-floortile-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-floortile-003-v3', 'PWT4229 フレンチヘリンボーン', NULL, true, 2
FROM items WHERE item_code = 'int-floortile-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-floortile-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- タイル目地色 (共通)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-grout-001',
  'タイル目地色',
  '共通',
  'SS-GROUT',
  'タイル',
  'タイル床材選択時に目地色を選択（タイル施工費に含む）',
  true,
  139,
  ARRAY['base-floor']
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
  id, 'int-tile-grout-001-v1', '①ホワイト（SS-11K）', NULL, true, 0
FROM items WHERE item_code = 'int-tile-grout-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-grout-001-v2', '②ライトグレー（SS-32K）', NULL, true, 1
FROM items WHERE item_code = 'int-tile-grout-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-grout-001-v3', '③ダークグレー（SS-23K）', NULL, true, 2
FROM items WHERE item_code = 'int-tile-grout-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-grout-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-grout-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-grout-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-grout-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ランドストン (Nagoya mozaic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-floor-001',
  'ランドストン',
  'Nagoya mozaic',
  'CRD-X/PAN-X',
  'タイル',
  '内装壁、内装床で使用可能 600×600/300×600 工事費用一式¥30,000 6㎡以下の場合追加¥50,000',
  true,
  140,
  ARRAY['base-floor']
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
  id, 'int-tile-floor-001-v1', 'CRD-X3810', NULL, true, 0
FROM items WHERE item_code = 'int-tile-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-001-v2', 'CRD-X3820', NULL, true, 1
FROM items WHERE item_code = 'int-tile-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-001-v3', 'CRD-X3830', NULL, true, 2
FROM items WHERE item_code = 'int-tile-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-001-v4', 'CRD-X3840', NULL, true, 3
FROM items WHERE item_code = 'int-tile-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-001-v5', 'PAN-X8010', NULL, true, 4
FROM items WHERE item_code = 'int-tile-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-001-v6', 'PAN-X8020', NULL, true, 5
FROM items WHERE item_code = 'int-tile-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-001-v7', 'PAN-X8030', NULL, true, 6
FROM items WHERE item_code = 'int-tile-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-001-v8', 'PAN-X8040', NULL, true, 7
FROM items WHERE item_code = 'int-tile-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-001-v9', 'PAN-X8050', NULL, true, 8
FROM items WHERE item_code = 'int-tile-floor-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ピエトラソーニ (Nagoya mozaic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-floor-002',
  'ピエトラソーニ',
  'Nagoya mozaic',
  'IPF-600/MMP',
  'タイル',
  '内装壁、内装床で使用可能 600×600/300×600 工事費用一式¥30,000 6㎡以下の場合追加¥50,000',
  true,
  141,
  ARRAY['base-floor']
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
  id, 'int-tile-floor-002-v1', 'IPF-600/MMP-21', NULL, true, 0
FROM items WHERE item_code = 'int-tile-floor-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-002-v2', 'IPF-600/MMP-22', NULL, true, 1
FROM items WHERE item_code = 'int-tile-floor-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-002-v3', 'IPF-600/MMP-23', NULL, true, 2
FROM items WHERE item_code = 'int-tile-floor-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-002-v4', 'IPF-600/MMP-24', NULL, true, 3
FROM items WHERE item_code = 'int-tile-floor-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-002-v5', 'IPF-600/MMP-25', NULL, true, 4
FROM items WHERE item_code = 'int-tile-floor-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- メンフィス (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-floor-003',
  'メンフィス',
  'LIXIL',
  'IPF-600/MNP',
  'タイル',
  '内装壁、内装床で使用可能 600×600/300×600 工事費用一式¥30,000 6㎡以下の場合追加¥50,000',
  true,
  142,
  ARRAY['base-floor']
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
  id, 'int-tile-floor-003-v1', 'IPF-600/MNP-21', NULL, true, 0
FROM items WHERE item_code = 'int-tile-floor-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-003-v2', 'IPF-600/MNP-22', NULL, true, 1
FROM items WHERE item_code = 'int-tile-floor-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-003-v3', 'IPF-600/MNP-23', NULL, true, 2
FROM items WHERE item_code = 'int-tile-floor-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-003-v4', 'IPF-600/MNP-24', NULL, true, 3
FROM items WHERE item_code = 'int-tile-floor-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-floor-003-v5', 'IPF-600/MNP-25', NULL, true, 4
FROM items WHERE item_code = 'int-tile-floor-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-floor-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 健やかたたみおもて 清流 (大建工業)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tatami-001',
  '健やかたたみおもて 清流',
  '大建工業',
  'SUKOYAKA-SEIRYU',
  NULL,
  '機能畳 半畳タイプ',
  true,
  143,
  ARRAY['base-floor']
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
  id, 'int-tatami-001-v1', '01 銀白色（ぎんぱくしょく）', '#E8E8D0', true, 0
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v2', '02 黄金色（こがねいろ）', '#DAA520', true, 1
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v3', '06 亜麻色（あまいろ）', '#C4B7A6', true, 2
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v4', '09 墨染色（すみぞめいろ）', '#595857', true, 3
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v5', '10 乳白色（にゅうはくしょく）', '#F5F5DC', true, 4
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v6', '11 銀鼠色（ぎんねずいろ）', '#91989F', true, 5
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v7', '12 墨染色（くりいろ）', '#6C3524', true, 6
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v8', '14 灰桜色（はいざくらいろ）', '#E8D3D1', true, 7
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v9', '15 白茶色（しらちゃいろ）', '#C5A882', true, 8
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v10', '16 若草色（わかくさいろ）', '#A4C520', true, 9
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v11', '19 胡桃色（くるみいろ）', '#8B6914', true, 10
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tatami-001-v12', '21 小麦色（こむぎいろ）', '#D4A76A', true, 11
FROM items WHERE item_code = 'int-tatami-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tatami-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tatami-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tatami-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tatami-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 小上がりスペース (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-koagari-001',
  '小上がりスペース',
  'Gハウス',
  'KOAGARI-001',
  NULL,
  '小上がり造作工事',
  true,
  144,
  ARRAY['base-floor']
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
  id, 'int-koagari-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-koagari-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 29000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 29000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 29000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 29000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 小上がり下引出収納 H350 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-koagari-002',
  '小上がり下引出収納 H350',
  'Gハウス',
  'KOAGARI-STR-H350',
  NULL,
  '小上がり下収納 引出タイプ H350（収納高さH200程度）',
  true,
  145,
  ARRAY['room-storage']
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
  id, 'int-koagari-002-v1', 'JC-516K（オーク）', NULL, true, 0
FROM items WHERE item_code = 'int-koagari-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-koagari-002-v2', 'TJ-2062K（ウォルナット）', NULL, true, 1
FROM items WHERE item_code = 'int-koagari-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-koagari-002-v3', 'K-6000KN（艶消しホワイト）', NULL, true, 2
FROM items WHERE item_code = 'int-koagari-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-koagari-002-v4', 'K-6302KN（艶消しグレー）', NULL, true, 3
FROM items WHERE item_code = 'int-koagari-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-koagari-002-v5', 'K-6306KN（艶消しブラック）', NULL, true, 4
FROM items WHERE item_code = 'int-koagari-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 87000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 87000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 87000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 87000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 小上がり下引出収納 H400 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-koagari-003',
  '小上がり下引出収納 H400',
  'Gハウス',
  'KOAGARI-STR-H400',
  NULL,
  '小上がり下収納 引出タイプ H400（収納高さH250程度）',
  true,
  146,
  ARRAY['room-storage']
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
  id, 'int-koagari-003-v1', 'JC-516K（オーク）', NULL, true, 0
FROM items WHERE item_code = 'int-koagari-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-koagari-003-v2', 'TJ-2062K（ウォルナット）', NULL, true, 1
FROM items WHERE item_code = 'int-koagari-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-koagari-003-v3', 'K-6000KN（艶消しホワイト）', NULL, true, 2
FROM items WHERE item_code = 'int-koagari-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-koagari-003-v4', 'K-6302KN（艶消しグレー）', NULL, true, 3
FROM items WHERE item_code = 'int-koagari-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-koagari-003-v5', 'K-6306KN（艶消しブラック）', NULL, true, 4
FROM items WHERE item_code = 'int-koagari-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 92000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 92000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 92000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 92000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-koagari-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- お風呂ドア枠 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-bath-doorframe-001',
  'お風呂ドア枠',
  'Gハウス',
  'BATH-DOORFRAME',
  NULL,
  'お風呂ドア枠',
  true,
  147,
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
  id, 'int-bath-doorframe-001-v1', 'しっくいホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-bath-doorframe-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-bath-doorframe-001-v2', 'オフブラック', NULL, true, 1
FROM items WHERE item_code = 'int-bath-doorframe-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-bath-doorframe-001-v3', 'パールグレー', NULL, true, 2
FROM items WHERE item_code = 'int-bath-doorframe-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-bath-doorframe-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-bath-doorframe-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-bath-doorframe-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-bath-doorframe-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 床下点検口 600×600 (城東テクノ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-hatch-floor-001',
  '床下点検口 600×600',
  '城東テクノ',
  'SPF-R60',
  NULL,
  '床下点検口 600×600',
  true,
  148,
  ARRAY['hatch']
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
  id, 'int-hatch-floor-001-v1', 'IV アイボリー', NULL, true, 0
FROM items WHERE item_code = 'int-hatch-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-hatch-floor-001-v2', 'NL ナチュラル', NULL, true, 1
FROM items WHERE item_code = 'int-hatch-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-hatch-floor-001-v3', 'MB ミディアムブラウン', NULL, true, 2
FROM items WHERE item_code = 'int-hatch-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-hatch-floor-001-v4', 'DB ダークブラウン', NULL, true, 3
FROM items WHERE item_code = 'int-hatch-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-hatch-floor-001-v5', 'BB ブラックブラウン', NULL, true, 4
FROM items WHERE item_code = 'int-hatch-floor-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-hatch-floor-001-v6', 'LG ライトグレー', NULL, true, 5
FROM items WHERE item_code = 'int-hatch-floor-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hatch-floor-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hatch-floor-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hatch-floor-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hatch-floor-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 天井点検口 454×454 (城東テクノ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-hatch-ceiling-001',
  '天井点検口 454×454',
  '城東テクノ',
  'CDE-45',
  NULL,
  '天井点検口 454×454',
  true,
  149,
  ARRAY['hatch']
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
  id, 'int-hatch-ceiling-001-v1', 'W ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-hatch-ceiling-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-hatch-ceiling-001-v2', 'SL マットシルバー（マット調アルミ色）', NULL, true, 1
FROM items WHERE item_code = 'int-hatch-ceiling-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hatch-ceiling-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hatch-ceiling-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hatch-ceiling-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hatch-ceiling-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 床下収納庫 (城東テクノ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-storage-floor-001',
  '床下収納庫',
  '城東テクノ',
  'SPF-60S2',
  NULL,
  '床下収納庫 600×600（深さ約270mm）',
  true,
  150,
  ARRAY['other-storage']
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
  id, 'int-storage-floor-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-storage-floor-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-floor-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-floor-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-floor-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-storage-floor-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 階段踏板/蹴込板 パナソニック仕様 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-001',
  '階段踏板/蹴込板 パナソニック仕様',
  'Panasonic',
  'STAIR-PNS',
  NULL,
  '階段踏板・蹴込板（標準）床材とのコーディネイトができる11柄をラインアップ ※蹴込のみホワイト・ブラックを標準選択可',
  true,
  151,
  ARRAY['stairs']
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
  id, 'int-stair-001-v1', 'ウォールナット柄', NULL, true, 0
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v2', 'チェリー柄', NULL, true, 1
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v3', 'オーク柄', NULL, true, 2
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v4', 'メープル柄', NULL, true, 3
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v5', 'ホワイトオーク柄', NULL, true, 4
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v6', 'エイジドチーク柄', NULL, true, 5
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v7', 'エイジドチェスナット柄', NULL, true, 6
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v8', 'カームチェリー柄', NULL, true, 7
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v9', 'グレージュヒッコリー柄', NULL, true, 8
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v10', 'ウォッシュドオーク柄', NULL, true, 9
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-001-v11', 'アイボリーアッシュ柄', NULL, true, 10
FROM items WHERE item_code = 'int-stair-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 階段踏板/蹴込板 WOODTEC Live Natural仕様 (WOODTEC)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-002',
  '階段踏板/蹴込板 WOODTEC Live Natural仕様',
  'WOODTEC',
  'STAIR-WT-LN',
  NULL,
  '階段踏板・蹴込板（WOODTEC Live Natural 乱尺柄）※シュガーホワイト(アッシュ)は蹴込板がありません。ホワイト・ブラックよりご選択いただけます。',
  true,
  152,
  ARRAY['stairs']
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
  id, 'int-stair-002-v1', 'ブラックチェリー 乱尺柄', NULL, true, 0
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v2', 'シカモア 乱尺柄', NULL, true, 1
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v3', 'ハードメープル 乱尺柄', NULL, true, 2
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v4', 'ナラ樫 乱尺柄', NULL, true, 3
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v5', 'ブラックウォルナット 乱尺柄', NULL, true, 4
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v6', 'バーチ 乱尺柄', NULL, true, 5
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v7', 'オーク 乱尺柄', NULL, true, 6
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v8', 'アカシア 乱尺柄', NULL, true, 7
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v9', 'ドライメイプル 乱尺柄', NULL, true, 8
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v10', 'ドライウォルナット 乱尺柄', NULL, true, 9
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v11', 'ドライオーク 乱尺柄', NULL, true, 10
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v12', 'シュガーホワイト（アッシュ）乱尺柄', NULL, true, 11
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v13', 'ライトグレー（オーク）乱尺柄', NULL, true, 12
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-002-v14', 'ミドルグレー（オーク）乱尺柄', NULL, true, 13
FROM items WHERE item_code = 'int-stair-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 階段踏板/蹴込板 ikuta仕様 (ikuta)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-003',
  '階段踏板/蹴込板 ikuta仕様',
  'ikuta',
  'STAIR-IKT',
  NULL,
  '階段踏板・蹴込板（ikuta）※塗装品のため近似色塗装になります。',
  true,
  153,
  ARRAY['stairs']
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
  id, 'int-stair-003-v1', 'ブラックチェリー', NULL, true, 0
FROM items WHERE item_code = 'int-stair-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003-v2', 'ハードメープル', NULL, true, 1
FROM items WHERE item_code = 'int-stair-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003-v3', 'ナラ樫', NULL, true, 2
FROM items WHERE item_code = 'int-stair-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003-v4', 'チーク', NULL, true, 3
FROM items WHERE item_code = 'int-stair-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003-v5', 'イタヤカエデ', NULL, true, 4
FROM items WHERE item_code = 'int-stair-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003-v6', 'アカシア', NULL, true, 5
FROM items WHERE item_code = 'int-stair-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003-v7', 'ウォルナット', NULL, true, 6
FROM items WHERE item_code = 'int-stair-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 240000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 240000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 240000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 240000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 階段踏板/蹴込板 ikutaエイジング仕様 (ikuta)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-003b',
  '階段踏板/蹴込板 ikutaエイジング仕様',
  'ikuta',
  'STAIR-IKT-AGING',
  NULL,
  '階段踏板・蹴込板（ikutaエイジング）※塗装品のため近似色塗装になります。',
  true,
  154,
  ARRAY['stairs']
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
  id, 'int-stair-003b-v1', 'エイジングナチュラル', NULL, true, 0
FROM items WHERE item_code = 'int-stair-003b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003b-v2', 'エイジングホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-stair-003b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003b-v3', 'エイジングタイガ', NULL, true, 2
FROM items WHERE item_code = 'int-stair-003b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003b-v4', 'エイジングカフェ', NULL, true, 3
FROM items WHERE item_code = 'int-stair-003b'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-003b-v5', 'エイジングビター', NULL, true, 4
FROM items WHERE item_code = 'int-stair-003b'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-003b' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-003b' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-003b' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-003b' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 階段 踊り場形状 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-landing',
  '階段 踊り場形状',
  'Gハウス',
  'STAIR-LANDING',
  NULL,
  '階段踊り場形状変更',
  true,
  155,
  ARRAY['stairs']
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
  id, 'int-stair-landing-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-stair-landing'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-landing' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-landing' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-landing' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-landing' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- アイアン階段 スレート (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-004',
  'アイアン階段 スレート',
  'Gハウス',
  'IRON-STAIR-SLATE',
  NULL,
  'アイアン階段（スレートタイプ）手摺形状：フラットバー（中桟1本・2本）・片側手摺のみ ※踏板は集成材塗装品',
  true,
  156,
  ARRAY['stairs']
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
  id, 'int-stair-004-v1', '日塗工/N-95 つや消ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-stair-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-004-v2', '日塗工/N-60 つや消グレー', NULL, true, 1
FROM items WHERE item_code = 'int-stair-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-004-v3', '日塗工/N-10 つや消ブラック', NULL, true, 2
FROM items WHERE item_code = 'int-stair-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 950000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 950000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 950000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 950000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- アイアンまわり階段（一曲がり追加） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-004b',
  'アイアンまわり階段（一曲がり追加）',
  'Gハウス',
  'IRON-STAIR-TURN',
  NULL,
  'アイアン階段 一曲がり追加オプション',
  true,
  157,
  ARRAY['stairs']
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
  id, 'int-stair-004b-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-stair-004b'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004b' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004b' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004b' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004b' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- アイアン階段 転落防止型へ変更 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-004c',
  'アイアン階段 転落防止型へ変更',
  'Gハウス',
  'IRON-STAIR-SAFE',
  NULL,
  'アイアン階段 手すり形状 転落防止型へ変更',
  true,
  158,
  ARRAY['stairs']
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
  id, 'int-stair-004c-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-stair-004c'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004c' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004c' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004c' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004c' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- アイアン階段 両側手摺 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-004d',
  'アイアン階段 両側手摺',
  'Gハウス',
  'IRON-STAIR-BOTH',
  NULL,
  'アイアン階段 両側手摺へ変更',
  true,
  159,
  ARRAY['stairs']
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
  id, 'int-stair-004d-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-stair-004d'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 250000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004d' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 250000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004d' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 250000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004d' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 250000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-004d' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ホール アイアン手すり (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-005',
  'ホール アイアン手すり',
  'Gハウス',
  'IRON-HANDRAIL',
  NULL,
  'ホール用アイアン手すり 手摺形状：フラットバー 上桟+中桟2本',
  true,
  160,
  ARRAY['stairs']
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
  id, 'int-stair-005-v1', '日塗工/N-95 つや消ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-stair-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-005-v2', '日塗工/N-60 つや消グレー', NULL, true, 1
FROM items WHERE item_code = 'int-stair-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-005-v3', '日塗工/N-10 つや消ブラック', NULL, true, 2
FROM items WHERE item_code = 'int-stair-005'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 240000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-005' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 240000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-005' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 240000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-005' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 240000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-005' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 手すり LIXIL スクエアタイプ (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-handrail-lixil',
  '手すり LIXIL スクエアタイプ',
  'LIXIL',
  'HANDRAIL-LIXIL',
  NULL,
  '階段手すり LIXIL スクエアタイプ',
  true,
  161,
  ARRAY['stairs']
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
  id, 'int-stair-handrail-lixil-v1', 'ホワイト（手すり棒W/プレシャスホワイト、ブラケットYY/プレシャスホワイト）', NULL, true, 0
FROM items WHERE item_code = 'int-stair-handrail-lixil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-handrail-lixil-v2', 'ブラック（手すり棒AB/ブラック、ブラケットBE/アイアンブラック）', NULL, true, 1
FROM items WHERE item_code = 'int-stair-handrail-lixil'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-handrail-lixil' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-handrail-lixil' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-handrail-lixil' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-handrail-lixil' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 壁付I型手摺追加 H600 (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-stair-handrail-add',
  '壁付I型手摺追加 H600',
  'LIXIL',
  'HANDRAIL-I-H600',
  NULL,
  '壁付I型手摺追加 H600',
  true,
  162,
  ARRAY['stairs']
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
  id, 'int-stair-handrail-add-v1', 'ホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-stair-handrail-add'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-stair-handrail-add-v2', 'ブラック', NULL, true, 1
FROM items WHERE item_code = 'int-stair-handrail-add'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-handrail-add' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-handrail-add' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-handrail-add' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-stair-handrail-add' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 階段回り 腰壁笠木 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-kasagi',
  '階段回り 腰壁笠木',
  'Panasonic',
  'KASAGI-STAIR',
  '腰壁笠木',
  '階段回り腰壁笠木 標準高さFL+1100 階段部分斜め仕上がりとする ※腰壁がある場合のみ',
  true,
  163,
  ARRAY['peripheral-parts']
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
  id, 'int-wall-kasagi-v1', 'しっくいホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-wall-kasagi'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-kasagi-v2', 'ソイルブラック', NULL, true, 1
FROM items WHERE item_code = 'int-wall-kasagi'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-kasagi' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-kasagi' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-kasagi' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-kasagi' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 腰壁笠木不要 (不要)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-kasagi-none',
  '腰壁笠木不要',
  '不要',
  'KASAGI-NONE',
  '腰壁笠木',
  '腰壁がない場合は不要',
  true,
  164,
  ARRAY['peripheral-parts']
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
  id, 'int-wall-kasagi-none-v1', '不要', NULL, true, 0
FROM items WHERE item_code = 'int-wall-kasagi-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-kasagi-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-kasagi-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-kasagi-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-kasagi-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 薄見付窓枠TS型 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-madowaku',
  '薄見付窓枠TS型',
  'Panasonic',
  'TS-MADOWAKU',
  '窓台',
  '見付6mmのスマートな窓台 ※1色のみ採用可（2色以上採用不可）',
  true,
  165,
  ARRAY['peripheral-parts']
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
  id, 'int-wall-madowaku-v1', 'しっくいホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-wall-madowaku'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-madowaku-v2', 'ソイルブラック', NULL, true, 1
FROM items WHERE item_code = 'int-wall-madowaku'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-madowaku-v3', 'パールグレー', NULL, true, 2
FROM items WHERE item_code = 'int-wall-madowaku'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-madowaku' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-madowaku' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-madowaku' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-madowaku' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- クッション巾木スマート/H30 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-habaki',
  'クッション巾木スマート/H30',
  'Panasonic',
  'HABAKI-H30',
  '巾木',
  '高さ3cm控え目な巾木 ※1色のみ採用可（2色以上採用不可）',
  true,
  166,
  ARRAY['peripheral-parts']
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
  id, 'int-wall-habaki-v1', 'しっくいホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-wall-habaki'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-habaki-v2', 'ソイルブラック', NULL, true, 1
FROM items WHERE item_code = 'int-wall-habaki'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-habaki-v3', 'パールグレー', NULL, true, 2
FROM items WHERE item_code = 'int-wall-habaki'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-habaki' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-habaki' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-habaki' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-habaki' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 腰壁 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-001',
  '腰壁',
  'Gハウス',
  'KOSHIKABE-001',
  NULL,
  '腰壁造作 FL+1000 ※1m以下は¥15,000',
  true,
  167,
  ARRAY['wall']
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
  id, 'int-wall-001-v1', 'しっくいホワイト', NULL, true, 0
FROM items WHERE item_code = 'int-wall-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-001-v2', 'ソイルブラック', NULL, true, 1
FROM items WHERE item_code = 'int-wall-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-001-v3', 'パールグレー', NULL, true, 2
FROM items WHERE item_code = 'int-wall-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-001-v4', 'ゴム集成クリア塗装', NULL, true, 3
FROM items WHERE item_code = 'int-wall-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 垂壁 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-002',
  '垂壁',
  'Gハウス',
  'TAREKABE-001',
  NULL,
  '垂壁造作',
  true,
  168,
  ARRAY['wall']
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
  id, 'int-wall-002-v1', 'H200', NULL, true, 0
FROM items WHERE item_code = 'int-wall-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-002-v2', 'H400', NULL, true, 1
FROM items WHERE item_code = 'int-wall-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- アーチ垂壁 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-003',
  'アーチ垂壁',
  'Gハウス',
  'ARCH-TAREKABE',
  NULL,
  'アーチ型垂壁造作',
  true,
  169,
  ARRAY['wall']
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
  id, 'int-wall-003-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-wall-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓なし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-window-none',
  '室内窓なし（標準）',
  '-',
  'NONE',
  NULL,
  '室内窓を設置しない場合はこちらを選択',
  true,
  170,
  ARRAY['window-interior']
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
  id, 'int-window-none-v1', '-', NULL, true, 0
FROM items WHERE item_code = 'int-window-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓 Aパターン 標準ガラス (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-window-a-standard',
  '室内窓 Aパターン 標準ガラス',
  'Panasonic',
  'INT-WINDOW-A-STD',
  NULL,
  '室内窓 Aパターン（A-1〜A-4形状）FIX窓・透明熱処理ガラス',
  true,
  171,
  ARRAY['window-interior']
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
  id, 'int-window-a-standard-v1', 'オフブラック', NULL, true, 0
FROM items WHERE item_code = 'int-window-a-standard'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-window-a-standard-v2', 'ホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-window-a-standard'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-a-standard' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-a-standard' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-a-standard' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-a-standard' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓 Aパターン オプションガラス (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-window-a-option',
  '室内窓 Aパターン オプションガラス',
  'Panasonic',
  'INT-WINDOW-A-OPT',
  NULL,
  '室内窓 Aパターン オプションガラス（カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス）',
  true,
  172,
  ARRAY['window-interior']
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
  id, 'int-window-a-option-v1', 'オフブラック', NULL, true, 0
FROM items WHERE item_code = 'int-window-a-option'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-window-a-option-v2', 'ホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-window-a-option'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 105000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-a-option' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 105000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-a-option' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 105000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-a-option' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 105000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-a-option' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓 Bパターン 標準ガラス (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-window-b-standard',
  '室内窓 Bパターン 標準ガラス',
  'Panasonic',
  'INT-WINDOW-B-STD',
  NULL,
  '室内窓 Bパターン（B-1〜B-5形状）FIX窓・透明熱処理ガラス',
  true,
  173,
  ARRAY['window-interior']
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
  id, 'int-window-b-standard-v1', 'オフブラック', NULL, true, 0
FROM items WHERE item_code = 'int-window-b-standard'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-window-b-standard-v2', 'ホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-window-b-standard'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 135000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-b-standard' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 135000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-b-standard' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 135000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-b-standard' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 135000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-b-standard' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓 Bパターン オプションガラス (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-window-b-option',
  '室内窓 Bパターン オプションガラス',
  'Panasonic',
  'INT-WINDOW-B-OPT',
  NULL,
  '室内窓 Bパターン オプションガラス（カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス）',
  true,
  174,
  ARRAY['window-interior']
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
  id, 'int-window-b-option-v1', 'オフブラック', NULL, true, 0
FROM items WHERE item_code = 'int-window-b-option'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-window-b-option-v2', 'ホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-window-b-option'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-b-option' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-b-option' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-b-option' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-b-option' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓 Cパターン 標準ガラス (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-window-c-standard',
  '室内窓 Cパターン 標準ガラス',
  'Panasonic',
  'INT-WINDOW-C-STD',
  NULL,
  '室内窓 Cパターン（C-1〜C-3形状）FIX窓・透明熱処理ガラス',
  true,
  175,
  ARRAY['window-interior']
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
  id, 'int-window-c-standard-v1', 'オフブラック', NULL, true, 0
FROM items WHERE item_code = 'int-window-c-standard'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-window-c-standard-v2', 'ホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-window-c-standard'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 197000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-c-standard' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 197000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-c-standard' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 197000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-c-standard' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 197000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-c-standard' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓 Cパターン オプションガラス (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-window-c-option',
  '室内窓 Cパターン オプションガラス',
  'Panasonic',
  'INT-WINDOW-C-OPT',
  NULL,
  '室内窓 Cパターン オプションガラス（カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス）',
  true,
  176,
  ARRAY['window-interior']
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
  id, 'int-window-c-option-v1', 'オフブラック', NULL, true, 0
FROM items WHERE item_code = 'int-window-c-option'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-window-c-option-v2', 'ホワイト', NULL, true, 1
FROM items WHERE item_code = 'int-window-c-option'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 295000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-c-option' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 295000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-c-option' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 295000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-c-option' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 295000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-c-option' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓 突き出し窓変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-window-awning-change',
  '室内窓 突き出し窓変更',
  'Panasonic',
  'INT-WINDOW-AWNING',
  NULL,
  'FIX窓から突き出し窓への変更（上部のみ開閉可能な形状に適用可）',
  true,
  177,
  ARRAY['window-interior']
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
  id, 'int-window-awning-change-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-window-awning-change'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-awning-change' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-awning-change' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-awning-change' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-window-awning-change' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- パネルなし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-panel-none',
  'パネルなし（標準）',
  '-',
  'NONE',
  NULL,
  'アクセントパネルを設置しない場合はこちらを選択',
  true,
  178,
  ARRAY['wall']
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
  id, 'int-panel-none-v1', '-', NULL, true, 0
FROM items WHERE item_code = 'int-panel-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- THE WALL ¥15,000/㎡ (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-panel-001',
  'THE WALL ¥15,000/㎡',
  '朝日ウッドテック',
  'THEWALL-15000',
  NULL,
  'ウッドパネル パネルサイズ2,730mm×600mm',
  true,
  179,
  ARRAY['wall']
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
  id, 'int-panel-001-v1', 'オーク（ツキ板）75mmピッチ', NULL, true, 0
FROM items WHERE item_code = 'int-panel-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- THE WALL ¥20,000/㎡ (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-panel-002',
  'THE WALL ¥20,000/㎡',
  '朝日ウッドテック',
  'THEWALL-20000',
  NULL,
  'ウッドパネル パネルサイズ2,730mm×600mm',
  true,
  180,
  ARRAY['wall']
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
  id, 'int-panel-002-v1', 'レッドシダー（ツキ板）ランダムピッチ', NULL, true, 0
FROM items WHERE item_code = 'int-panel-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-002-v2', 'ヘムロック（ツキ板）ランダムピッチ', NULL, true, 1
FROM items WHERE item_code = 'int-panel-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-002-v3', 'ブラックチェリー（ツキ板）75mmピッチ', NULL, true, 2
FROM items WHERE item_code = 'int-panel-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-002-v4', 'オーク（ツキ板）ランダムピッチ', NULL, true, 3
FROM items WHERE item_code = 'int-panel-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- THE WALL ¥21,000/㎡ (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-panel-002b',
  'THE WALL ¥21,000/㎡',
  '朝日ウッドテック',
  'THEWALL-21000',
  NULL,
  'ウッドパネル パネルサイズ2,730mm×600mm',
  true,
  181,
  ARRAY['wall']
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
  id, 'int-panel-002b-v1', 'アカシア（ツキ板）ランダムピッチ', NULL, true, 0
FROM items WHERE item_code = 'int-panel-002b'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 21000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-002b' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 21000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-002b' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 21000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-002b' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 21000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-002b' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- THE WALL ¥48,000/㎡ (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-panel-003',
  'THE WALL ¥48,000/㎡',
  '朝日ウッドテック',
  'THEWALL-48000',
  NULL,
  'ウッドパネル パネルサイズ2,730mm×600mm',
  true,
  182,
  ARRAY['wall']
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
  id, 'int-panel-003-v1', 'オーク（挽き板）レリーフ', NULL, true, 0
FROM items WHERE item_code = 'int-panel-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 48000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 48000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 48000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 48000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- THE WALL ¥55,000/㎡ (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-panel-003b',
  'THE WALL ¥55,000/㎡',
  '朝日ウッドテック',
  'THEWALL-55000',
  NULL,
  'ウッドパネル パネルサイズ2,730mm×600mm',
  true,
  183,
  ARRAY['wall']
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
  id, 'int-panel-003b-v1', 'ブラックチェリー（挽き板）レリーフ', NULL, true, 0
FROM items WHERE item_code = 'int-panel-003b'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 55000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003b' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 55000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003b' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 55000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003b' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 55000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003b' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- THE WALL ¥60,000/㎡ (朝日ウッドテック)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-panel-003c',
  'THE WALL ¥60,000/㎡',
  '朝日ウッドテック',
  'THEWALL-60000',
  NULL,
  'ウッドパネル パネルサイズ2,730mm×600mm',
  true,
  184,
  ARRAY['wall']
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
  id, 'int-panel-003c-v1', 'ヘムロック（挽き板）Fフラット', NULL, true, 0
FROM items WHERE item_code = 'int-panel-003c'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-003c-v2', 'ヘムロック（挽き板）Tラウンド', NULL, true, 1
FROM items WHERE item_code = 'int-panel-003c'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-003c-v3', 'ヘムロック（挽き板）Mマウント', NULL, true, 2
FROM items WHERE item_code = 'int-panel-003c'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-003c-v4', 'ヘムロック（挽き板）Mマウント（ウェーブ加工）', NULL, true, 3
FROM items WHERE item_code = 'int-panel-003c'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003c' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003c' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003c' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-003c' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- セラール (AICA)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-panel-004',
  'セラール',
  'AICA',
  'CERARL',
  NULL,
  'セラールパネル 900mm×2,400mm ※キッチン・メーカーカップボード吊戸〜カウンター間は施工不可 見切り材（2本）+¥8,000 UP',
  true,
  185,
  ARRAY['wall']
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
  id, 'int-panel-004-v1', 'ヘアライン仕上げ FKJ 6000ZYN24（見切り スノーホワイト）', NULL, true, 0
FROM items WHERE item_code = 'int-panel-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-004-v2', 'ヘアライン仕上げ FKJ 6300ZYN24（見切り アイボリー）', NULL, true, 1
FROM items WHERE item_code = 'int-panel-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-004-v3', 'ヘアライン仕上げ FKJ 6115ZYN24（見切り シルバー）', NULL, true, 2
FROM items WHERE item_code = 'int-panel-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-004-v4', 'ヘアライン仕上げ FKJ 6117ZYD24（見切り シルバー）', NULL, true, 3
FROM items WHERE item_code = 'int-panel-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-004-v5', '艶有り FKM 6000ZMN（見切り スノーホワイト）', NULL, true, 4
FROM items WHERE item_code = 'int-panel-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-004-v6', '艶有り FKM 6005ZMN（見切り アイボリー）', NULL, true, 5
FROM items WHERE item_code = 'int-panel-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-004-v7', '艶有り FKM 6110ZMN（見切り シルバー）', NULL, true, 6
FROM items WHERE item_code = 'int-panel-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-004-v8', '艶なし FJ-936ZD（見切り シルバー）', NULL, true, 7
FROM items WHERE item_code = 'int-panel-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 33000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 33000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 33000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 33000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- セラール セレント (AICA)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-panel-005',
  'セラール セレント',
  'AICA',
  'CERARL-SELENT',
  NULL,
  'セラール セレント 900mm×2,400mm 見切り材（2本）+¥14,000 UP',
  true,
  186,
  ARRAY['wall']
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
  id, 'int-panel-005-v1', 'Crunch Concrete Snow White 10301（見切り 胡粉 GOFUN）', NULL, true, 0
FROM items WHERE item_code = 'int-panel-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-005-v2', 'Crunch Concrete Beige 10302（見切り 白土 HAKUDO）', NULL, true, 1
FROM items WHERE item_code = 'int-panel-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-005-v3', 'Crunch Concrete Gray 10303（見切り シルバー）', NULL, true, 2
FROM items WHERE item_code = 'int-panel-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-005-v4', 'Crunch Concrete Dark Gray 10304（見切り 薄墨 USUZUMI）', NULL, true, 3
FROM items WHERE item_code = 'int-panel-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-005-v5', 'Spread Metal 10300（見切り 灰ねず HAINEZU）', NULL, true, 4
FROM items WHERE item_code = 'int-panel-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-panel-005-v6', 'Grace Marble 10242（見切り 胡粉 GOFUN）', NULL, true, 5
FROM items WHERE item_code = 'int-panel-005'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 44000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-005' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 44000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-005' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 44000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-005' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 44000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-panel-005' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- タイルなし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-tile-none',
  'タイルなし（標準）',
  '-',
  'NONE',
  NULL,
  'アクセントタイルを設置しない場合はこちらを選択',
  true,
  187,
  ARRAY['wall']
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
  id, 'int-wall-tile-none-v1', '-', NULL, true, 0
FROM items WHERE item_code = 'int-wall-tile-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-tile-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-tile-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-tile-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-tile-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 壁タイル目地色 (共通)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-wall-tile-grout-001',
  '壁タイル目地色',
  '共通',
  'SS-WALL-GROUT',
  NULL,
  '壁アクセントタイル選択時に目地色を選択（タイル施工費に含む）※エコカラットは目地無しのみ',
  true,
  188,
  ARRAY['wall']
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
  id, 'int-wall-tile-grout-001-v1', '①ホワイト（SS-11K）', NULL, true, 0
FROM items WHERE item_code = 'int-wall-tile-grout-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-tile-grout-001-v2', '②ライトグレー（SS-32K）', NULL, true, 1
FROM items WHERE item_code = 'int-wall-tile-grout-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-tile-grout-001-v3', '③グレー（SS-22K）', NULL, true, 2
FROM items WHERE item_code = 'int-wall-tile-grout-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-tile-grout-001-v4', '④ダークグレー（SS-23K）', NULL, true, 3
FROM items WHERE item_code = 'int-wall-tile-grout-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-tile-grout-001-v5', '⑤ベージュ（SS-33K）', NULL, true, 4
FROM items WHERE item_code = 'int-wall-tile-grout-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-wall-tile-grout-001-v6', '⑥目地無し', NULL, true, 5
FROM items WHERE item_code = 'int-wall-tile-grout-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-tile-grout-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-tile-grout-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-tile-grout-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-wall-tile-grout-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- スカンジナビアストン (名古屋モザイク)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-001',
  'スカンジナビアストン',
  '名古屋モザイク',
  'SCANDINAVIA-STONE',
  NULL,
  'アクセントタイル',
  true,
  189,
  ARRAY['wall']
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
  id, 'int-tile-001-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-001-v2', 'グレー', '#808080', true, 1
FROM items WHERE item_code = 'int-tile-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 26000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 26000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 26000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 26000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- バイオフィリック (名古屋モザイク)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-002',
  'バイオフィリック',
  '名古屋モザイク',
  'BIOPHILIC',
  NULL,
  'アクセントタイル',
  true,
  190,
  ARRAY['wall']
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
  id, 'int-tile-002-v1', 'グリーン', '#2E8B57', true, 0
FROM items WHERE item_code = 'int-tile-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-002-v2', 'ベージュ', '#D4C4A8', true, 1
FROM items WHERE item_code = 'int-tile-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- セメンティング (名古屋モザイク)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-003',
  'セメンティング',
  '名古屋モザイク',
  'CEMENTING',
  NULL,
  'アクセントタイル コンクリート調',
  true,
  191,
  ARRAY['wall']
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
  id, 'int-tile-003-v1', 'グレー', '#808080', true, 0
FROM items WHERE item_code = 'int-tile-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- モデネーゼ (名古屋モザイク)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-004',
  'モデネーゼ',
  '名古屋モザイク',
  'MODENESE',
  NULL,
  'アクセントタイル',
  true,
  192,
  ARRAY['wall']
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
  id, 'int-tile-004-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-004-v2', 'グレー', '#808080', true, 1
FROM items WHERE item_code = 'int-tile-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ラヴィータ (名古屋モザイク)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-005',
  'ラヴィータ',
  '名古屋モザイク',
  'LAVITA',
  NULL,
  'アクセントタイル',
  true,
  193,
  ARRAY['wall']
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
  id, 'int-tile-005-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-005-v2', 'ベージュ', '#D4C4A8', true, 1
FROM items WHERE item_code = 'int-tile-005'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-005' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-005' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-005' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-005' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ファータ (名古屋モザイク)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-006',
  'ファータ',
  '名古屋モザイク',
  'FATA',
  NULL,
  'アクセントタイル',
  true,
  194,
  ARRAY['wall']
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
  id, 'int-tile-006-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-006'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-006' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-006' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-006' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-006' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- エキピズム (名古屋モザイク)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-007',
  'エキピズム',
  '名古屋モザイク',
  'EKIPISM',
  NULL,
  'アクセントタイル',
  true,
  195,
  ARRAY['wall']
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
  id, 'int-tile-007-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-007'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-007-v2', 'グレー', '#808080', true, 1
FROM items WHERE item_code = 'int-tile-007'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-007' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-007' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-007' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-007' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- マットアンドモア (名古屋モザイク)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-008',
  'マットアンドモア',
  '名古屋モザイク',
  'MAT-AND-MORE',
  NULL,
  'アクセントタイル',
  true,
  196,
  ARRAY['wall']
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
  id, 'int-tile-008-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-008'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-008-v2', 'グレー', '#808080', true, 1
FROM items WHERE item_code = 'int-tile-008'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-008' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-008' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-008' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-008' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- WIG-WAG (平田タイル)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-009',
  'WIG-WAG',
  '平田タイル',
  'WIG-WAG',
  NULL,
  'アクセントタイル',
  true,
  197,
  ARRAY['wall']
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
  id, 'int-tile-009-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-009'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-009-v2', 'グリーン', '#2E8B57', true, 1
FROM items WHERE item_code = 'int-tile-009'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 31000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-009' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 31000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-009' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 31000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-009' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 31000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-009' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- パレッタ (平田タイル)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-010',
  'パレッタ',
  '平田タイル',
  'PALETTA',
  NULL,
  'アクセントタイル',
  true,
  198,
  ARRAY['wall']
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
  id, 'int-tile-010-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-010'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-010-v2', 'グレー', '#808080', true, 1
FROM items WHERE item_code = 'int-tile-010'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-010' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-010' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-010' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-010' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- マーブルモザイク (平田タイル)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-011',
  'マーブルモザイク',
  '平田タイル',
  'MARBLE-MOSAIC',
  NULL,
  'アクセントタイル 大理石調',
  true,
  199,
  ARRAY['wall']
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
  id, 'int-tile-011-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-011'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-011-v2', 'グレー', '#808080', true, 1
FROM items WHERE item_code = 'int-tile-011'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-011' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-011' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-011' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-011' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- Britz (平田タイル)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-012',
  'Britz',
  '平田タイル',
  'BRITZ',
  NULL,
  'アクセントタイル',
  true,
  200,
  ARRAY['wall']
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
  id, 'int-tile-012-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-012'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-012' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-012' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-012' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-012' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 10Thirty (平田タイル)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-013',
  '10Thirty',
  '平田タイル',
  '10THIRTY',
  NULL,
  'アクセントタイル',
  true,
  201,
  ARRAY['wall']
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
  id, 'int-tile-013-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-013'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-013-v2', 'グレー', '#808080', true, 1
FROM items WHERE item_code = 'int-tile-013'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 31000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-013' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 31000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-013' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 31000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-013' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 31000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-013' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- レシピ (平田タイル)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-014',
  'レシピ',
  '平田タイル',
  'RECIPE',
  NULL,
  'アクセントタイル',
  true,
  202,
  ARRAY['wall']
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
  id, 'int-tile-014-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-014'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 34000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-014' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 34000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-014' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 34000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-014' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 34000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-014' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 釉かげ (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-015',
  '釉かげ',
  'LIXIL',
  'YUKAGE',
  NULL,
  'アクセントタイル',
  true,
  203,
  ARRAY['wall']
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
  id, 'int-tile-015-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-015'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-tile-015-v2', 'グレー', '#808080', true, 1
FROM items WHERE item_code = 'int-tile-015'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-015' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-015' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-015' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-015' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- シャインリーフ (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-016',
  'シャインリーフ',
  'LIXIL',
  'SHINE-LEAF',
  NULL,
  'アクセントタイル',
  true,
  204,
  ARRAY['wall']
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
  id, 'int-tile-016-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-016'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 59000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-016' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 59000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-016' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 59000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-016' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 59000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-016' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- イノセントマーブル (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-017',
  'イノセントマーブル',
  'LIXIL',
  'INNOCENT-MARBLE',
  NULL,
  'アクセントタイル 大理石調',
  true,
  205,
  ARRAY['wall']
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
  id, 'int-tile-017-v1', 'ホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-tile-017'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 63000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-017' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 63000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-017' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 63000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-017' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 63000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-017' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- グラベルガラス (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tile-018',
  'グラベルガラス',
  'LIXIL',
  'GRAVEL-GLASS',
  NULL,
  'アクセントタイル ガラス',
  true,
  206,
  ARRAY['wall']
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
  id, 'int-tile-018-v1', 'クリア', '#E8E8E8', true, 0
FROM items WHERE item_code = 'int-tile-018'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 61000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-018' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 61000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-018' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 61000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-018' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 61000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tile-018' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- エコカラットなし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ecocarat-none',
  'エコカラットなし（標準）',
  '-',
  'NONE',
  NULL,
  'エコカラットを設置しない場合はこちらを選択',
  true,
  207,
  ARRAY['wall']
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
  id, 'int-ecocarat-none-v1', '-', NULL, true, 0
FROM items WHERE item_code = 'int-ecocarat-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- エコカラット グランクォーツ (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ecocarat-001',
  'エコカラット グランクォーツ',
  'LIXIL',
  'ECOCARAT-GRANQUARTZ',
  NULL,
  'エコカラット 606×303mm',
  true,
  208,
  ARRAY['wall']
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
  id, 'int-ecocarat-001-v1', 'ECP-630/GRQ1（ライトグレー）', NULL, true, 0
FROM items WHERE item_code = 'int-ecocarat-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-001-v2', 'EPC-630/GRQ3（ダークグレー）', NULL, true, 1
FROM items WHERE item_code = 'int-ecocarat-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- エコカラット ラフセメント (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ecocarat-002',
  'エコカラット ラフセメント',
  'LIXIL',
  'ECOCARAT-ROUGHCEMENT',
  NULL,
  'エコカラット 606×151×7mm',
  true,
  209,
  ARRAY['wall']
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
  id, 'int-ecocarat-002-v1', 'ECP-615/RGC1（グレー）', NULL, true, 0
FROM items WHERE item_code = 'int-ecocarat-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-002-v2', 'ECP-615/RGC2（グレージュ）', NULL, true, 1
FROM items WHERE item_code = 'int-ecocarat-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-002-v3', 'ECP-615/RGC3（ダークグレー）', NULL, true, 2
FROM items WHERE item_code = 'int-ecocarat-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- エコカラット ヴァルスロック (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ecocarat-003',
  'エコカラット ヴァルスロック',
  'LIXIL',
  'ECOCARAT-VALSROCK',
  NULL,
  'エコカラット 303×151mm',
  true,
  210,
  ARRAY['wall']
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
  id, 'int-ecocarat-003-v1', 'ECP-315/VSR1N（ホワイト）', NULL, true, 0
FROM items WHERE item_code = 'int-ecocarat-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-003-v2', 'ECP-315/VSR2N（グレー）', NULL, true, 1
FROM items WHERE item_code = 'int-ecocarat-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-003-v3', 'ECP-315/VSR3N（アッシュブラウン）', NULL, true, 2
FROM items WHERE item_code = 'int-ecocarat-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- エコカラット ストーングレース (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ecocarat-004',
  'エコカラット ストーングレース',
  'LIXIL',
  'ECOCARAT-STONEGRACE',
  NULL,
  'エコカラット 606×303mm',
  true,
  211,
  ARRAY['wall']
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
  id, 'int-ecocarat-004-v1', 'ECP-630/STG1N（グレー）', NULL, true, 0
FROM items WHERE item_code = 'int-ecocarat-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-004-v2', 'ECP-630/STG2N（ベージュ）', NULL, true, 1
FROM items WHERE item_code = 'int-ecocarat-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-004-v3', 'ECP-630/STG3N（ダークグレー）', NULL, true, 2
FROM items WHERE item_code = 'int-ecocarat-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-004-v4', 'ECP-630/STG4N（チャコール）', NULL, true, 3
FROM items WHERE item_code = 'int-ecocarat-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- エコカラット ラフクォーツ (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-ecocarat-005',
  'エコカラット ラフクォーツ',
  'LIXIL',
  'ECOCARAT-ROUGHQUARTZ',
  NULL,
  'エコカラット 303×75mm',
  true,
  212,
  ARRAY['wall']
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
  id, 'int-ecocarat-005-v1', 'ECP-375/RTZ1N（ライトグレー）', NULL, true, 0
FROM items WHERE item_code = 'int-ecocarat-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-005-v2', 'ECP-375/RTZ2N（ベージュ）', NULL, true, 1
FROM items WHERE item_code = 'int-ecocarat-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-ecocarat-005-v3', 'ECP-375/RTZ3N（ダークグレー）', NULL, true, 2
FROM items WHERE item_code = 'int-ecocarat-005'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-005' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-005' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-005' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-ecocarat-005' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 枕棚+PH（2カ所目以降）W910 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-shelf-001',
  '枕棚+PH（2カ所目以降）W910',
  'Panasonic',
  'SHELF-PH-910',
  NULL,
  '枕棚+パイプハンガー W910',
  true,
  213,
  ARRAY['room-storage']
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
  id, 'int-shelf-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-shelf-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 枕棚+PH（2カ所目以降）W1820 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-shelf-002',
  '枕棚+PH（2カ所目以降）W1820',
  'Panasonic',
  'SHELF-PH-1820',
  NULL,
  '枕棚+パイプハンガー W1820',
  true,
  214,
  ARRAY['room-storage']
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
  id, 'int-shelf-002-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-shelf-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 35000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 枕棚+PH（2カ所目以降）W2730 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-shelf-003',
  '枕棚+PH（2カ所目以降）W2730',
  'Panasonic',
  'SHELF-PH-2730',
  NULL,
  '枕棚+パイプハンガー W2730',
  true,
  215,
  ARRAY['room-storage']
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
  id, 'int-shelf-003-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-shelf-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 47000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 枕棚のみ W910 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-shelf-004',
  '枕棚のみ W910',
  'Panasonic',
  'SHELF-ONLY-910',
  NULL,
  '枕棚のみ W910',
  true,
  216,
  ARRAY['room-storage']
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
  id, 'int-shelf-004-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-shelf-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 18000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 18000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 18000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 18000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 枕棚+中段 W910 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-shelf-005',
  '枕棚+中段 W910',
  'Panasonic',
  'SHELF-MID-910',
  NULL,
  '枕棚+中段 W910',
  true,
  217,
  ARRAY['room-storage']
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
  id, 'int-shelf-005-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-shelf-005'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-005' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-005' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-005' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shelf-005' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 可動棚 両壁収まり C300-2 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-movable-shelf-001',
  '可動棚 両壁収まり C300-2',
  'Gハウス',
  'C300-2',
  NULL,
  '可動棚 D300×2枚 W〜900mm',
  true,
  218,
  ARRAY['room-storage']
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
  id, 'int-movable-shelf-001-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-movable-shelf-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-movable-shelf-001-v2', 'ダークグレー', '#404040', true, 1
FROM items WHERE item_code = 'int-movable-shelf-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 可動棚 両壁収まり C300-4 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-movable-shelf-002',
  '可動棚 両壁収まり C300-4',
  'Gハウス',
  'C300-4',
  NULL,
  '可動棚 D300×4枚 W〜900mm',
  true,
  219,
  ARRAY['room-storage']
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
  id, 'int-movable-shelf-002-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-movable-shelf-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-movable-shelf-002-v2', 'ダークグレー', '#404040', true, 1
FROM items WHERE item_code = 'int-movable-shelf-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 可動棚 両壁収まり C300-6 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-movable-shelf-003',
  '可動棚 両壁収まり C300-6',
  'Gハウス',
  'C300-6',
  NULL,
  '可動棚 D300×6枚 W〜900mm',
  true,
  220,
  ARRAY['room-storage']
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
  id, 'int-movable-shelf-003-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-movable-shelf-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-movable-shelf-003-v2', 'ダークグレー', '#404040', true, 1
FROM items WHERE item_code = 'int-movable-shelf-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 可動棚 両壁収まり C450-4 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-movable-shelf-004',
  '可動棚 両壁収まり C450-4',
  'Gハウス',
  'C450-4',
  NULL,
  '可動棚 D450×4枚 W〜900mm',
  true,
  221,
  ARRAY['room-storage']
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
  id, 'int-movable-shelf-004-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-movable-shelf-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-movable-shelf-004-v2', 'ダークグレー', '#404040', true, 1
FROM items WHERE item_code = 'int-movable-shelf-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 可動棚 両壁収まり C450-6 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-movable-shelf-005',
  '可動棚 両壁収まり C450-6',
  'Gハウス',
  'C450-6',
  NULL,
  '可動棚 D450×6枚 W〜900mm',
  true,
  222,
  ARRAY['room-storage']
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
  id, 'int-movable-shelf-005-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-movable-shelf-005'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-movable-shelf-005-v2', 'ダークグレー', '#404040', true, 1
FROM items WHERE item_code = 'int-movable-shelf-005'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 43000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-005' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 43000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-005' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 43000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-005' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 43000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-005' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ランドリー可動棚 W600 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-movable-shelf-006',
  'ランドリー可動棚 W600',
  'Gハウス',
  'LAUNDRY-SHELF-600',
  NULL,
  'ランドリー可動棚 D300棚板+パイプ付棚板',
  true,
  223,
  ARRAY['other-storage']
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
  id, 'int-movable-shelf-006-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-movable-shelf-006'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-006' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-006' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-006' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-movable-shelf-006' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 樹脂製可動棚 S1 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-resin-shelf-001',
  '樹脂製可動棚 S1',
  'Gハウス',
  'RESIN-S1',
  NULL,
  '樹脂製可動棚 D300×8枚 W756',
  true,
  224,
  ARRAY['room-storage']
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
  id, 'int-resin-shelf-001-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-resin-shelf-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-resin-shelf-001-v2', 'ダークグレー', '#404040', true, 1
FROM items WHERE item_code = 'int-resin-shelf-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 71000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 樹脂製可動棚 S2 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-resin-shelf-002',
  '樹脂製可動棚 S2',
  'Gハウス',
  'RESIN-S2',
  NULL,
  '樹脂製可動棚 D300×8枚 W1132',
  true,
  225,
  ARRAY['room-storage']
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
  id, 'int-resin-shelf-002-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-resin-shelf-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-resin-shelf-002-v2', 'ダークグレー', '#404040', true, 1
FROM items WHERE item_code = 'int-resin-shelf-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 樹脂製可動棚 S3 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-resin-shelf-003',
  '樹脂製可動棚 S3',
  'Gハウス',
  'RESIN-S3',
  NULL,
  '樹脂製可動棚 D300×8枚 W1682',
  true,
  226,
  ARRAY['room-storage']
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
  id, 'int-resin-shelf-003-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-resin-shelf-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-resin-shelf-003-v2', 'ダークグレー', '#404040', true, 1
FROM items WHERE item_code = 'int-resin-shelf-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 141000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 141000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 141000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 141000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-resin-shelf-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ハンガーパイプセット P1 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-hanger-pipe-001',
  'ハンガーパイプセット P1',
  'Gハウス',
  'HANGER-P1',
  NULL,
  'ハンガーパイプセット① W〜2900mm',
  true,
  227,
  ARRAY['room-storage']
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
  id, 'int-hanger-pipe-001-v1', 'シルバー', '#C0C0C0', true, 0
FROM items WHERE item_code = 'int-hanger-pipe-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ハンガーパイプセット P2 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-hanger-pipe-002',
  'ハンガーパイプセット P2',
  'Gハウス',
  'HANGER-P2',
  NULL,
  'ハンガーパイプセット② 2段タイプ',
  true,
  228,
  ARRAY['room-storage']
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
  id, 'int-hanger-pipe-002-v1', 'シルバー', '#C0C0C0', true, 0
FROM items WHERE item_code = 'int-hanger-pipe-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ハンガーパイプセット P3 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-hanger-pipe-003',
  'ハンガーパイプセット P3',
  'Gハウス',
  'HANGER-P3',
  NULL,
  'ハンガーパイプセット③ W〜2900mm 2段',
  true,
  229,
  ARRAY['room-storage']
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
  id, 'int-hanger-pipe-003-v1', 'シルバー', '#C0C0C0', true, 0
FROM items WHERE item_code = 'int-hanger-pipe-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ハンガーパイプセット P4 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-hanger-pipe-004',
  'ハンガーパイプセット P4',
  'Gハウス',
  'HANGER-P4',
  NULL,
  'ハンガーパイプセット④ 大型2段',
  true,
  230,
  ARRAY['room-storage']
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
  id, 'int-hanger-pipe-004-v1', 'シルバー', '#C0C0C0', true, 0
FROM items WHERE item_code = 'int-hanger-pipe-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-hanger-pipe-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- コンポリア W800 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-shoebox-001',
  'コンポリア W800',
  'Panasonic',
  'COMPOLIA-W800',
  NULL,
  '玄関靴箱 フロートタイプ W800 H2070',
  true,
  231,
  ARRAY['entrance-storage']
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
  id, 'int-shoebox-001-v1', 'ソフトウォールナット柄', '#5C4033', true, 0
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v2', 'ウォールナット柄', '#4A3728', true, 1
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v3', 'チェリー柄', '#B5651D', true, 2
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v4', 'ホワイトオーク柄', '#E8DCC8', true, 3
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v5', 'ホワイトアッシュ柄', '#F5F5DC', true, 4
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v6', 'しっくいホワイト柄', '#FFFFFF', true, 5
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v7', 'オーク柄', '#C4A35A', true, 6
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v8', 'メープル柄', '#E3B778', true, 7
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v9', 'ビターエルム柄', '#3D2B1F', true, 8
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v10', 'エイジングオーク柄', '#8B7355', true, 9
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v11', 'グレーウォールナット柄', '#696969', true, 10
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v12', 'クリアベージュ柄', '#D4C4A8', true, 11
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v13', 'スモークオーク柄', '#6B5B4F', true, 12
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-001-v14', 'ミディアムオーク柄', '#9C7A3C', true, 13
FROM items WHERE item_code = 'int-shoebox-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- コンポリア W1200 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-shoebox-002',
  'コンポリア W1200',
  'Panasonic',
  'COMPOLIA-W1200',
  NULL,
  '玄関靴箱 フロートタイプ W1200 H2070',
  true,
  232,
  ARRAY['entrance-storage']
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
  id, 'int-shoebox-002-v1', 'ソフトウォールナット柄', '#5C4033', true, 0
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v2', 'ウォールナット柄', '#4A3728', true, 1
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v3', 'チェリー柄', '#B5651D', true, 2
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v4', 'ホワイトオーク柄', '#E8DCC8', true, 3
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v5', 'ホワイトアッシュ柄', '#F5F5DC', true, 4
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v6', 'しっくいホワイト柄', '#FFFFFF', true, 5
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v7', 'オーク柄', '#C4A35A', true, 6
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v8', 'メープル柄', '#E3B778', true, 7
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v9', 'ビターエルム柄', '#3D2B1F', true, 8
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v10', 'エイジングオーク柄', '#8B7355', true, 9
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v11', 'グレーウォールナット柄', '#696969', true, 10
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v12', 'クリアベージュ柄', '#D4C4A8', true, 11
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v13', 'スモークオーク柄', '#6B5B4F', true, 12
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-002-v14', 'ミディアムオーク柄', '#9C7A3C', true, 13
FROM items WHERE item_code = 'int-shoebox-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- コンポリア W1600 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-shoebox-003',
  'コンポリア W1600',
  'Panasonic',
  'COMPOLIA-W1600',
  NULL,
  '玄関靴箱 フロートタイプ W1600 H2070',
  true,
  233,
  ARRAY['entrance-storage']
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
  id, 'int-shoebox-003-v1', 'ソフトウォールナット柄', '#5C4033', true, 0
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v2', 'ウォールナット柄', '#4A3728', true, 1
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v3', 'チェリー柄', '#B5651D', true, 2
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v4', 'ホワイトオーク柄', '#E8DCC8', true, 3
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v5', 'ホワイトアッシュ柄', '#F5F5DC', true, 4
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v6', 'しっくいホワイト柄', '#FFFFFF', true, 5
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v7', 'オーク柄', '#C4A35A', true, 6
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v8', 'メープル柄', '#E3B778', true, 7
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v9', 'ビターエルム柄', '#3D2B1F', true, 8
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v10', 'エイジングオーク柄', '#8B7355', true, 9
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v11', 'グレーウォールナット柄', '#696969', true, 10
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v12', 'クリアベージュ柄', '#D4C4A8', true, 11
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v13', 'スモークオーク柄', '#6B5B4F', true, 12
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-shoebox-003-v14', 'ミディアムオーク柄', '#9C7A3C', true, 13
FROM items WHERE item_code = 'int-shoebox-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- コンポリア ミラー追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-shoebox-004',
  'コンポリア ミラー追加',
  'Panasonic',
  'COMPOLIA-MIRROR',
  NULL,
  '玄関靴箱用ミラー追加',
  true,
  234,
  ARRAY['entrance-storage']
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
  id, 'int-shoebox-004-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-shoebox-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-shoebox-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- スロップシンク (TOTO)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-slop-sink-001',
  'スロップシンク',
  'TOTO',
  'SK507-SLOP',
  NULL,
  'スロップシンク ボウル/水栓/排水Pトラップセット',
  true,
  235,
  ARRAY['sanitary']
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
  id, 'int-slop-sink-001-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-slop-sink-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 115000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-slop-sink-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 115000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-slop-sink-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 115000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-slop-sink-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 115000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-slop-sink-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 洗濯パン (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-washing-pan-001',
  '洗濯パン',
  'Panasonic',
  'GB745-881',
  NULL,
  '洗濯パン GB745+排水トラップGB881セット',
  true,
  236,
  ARRAY['sanitary']
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
  id, 'int-washing-pan-001-v1', 'クールホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-washing-pan-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-washing-pan-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-washing-pan-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-washing-pan-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-washing-pan-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- Kacu (森田アルミ工業)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-laundry-pole-001',
  'Kacu',
  '森田アルミ工業',
  'KACU',
  NULL,
  '室内物干し金物 2カ所目から',
  true,
  237,
  ARRAY['hanger']
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
  id, 'int-laundry-pole-001-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-laundry-pole-001'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-laundry-pole-001-v2', 'ブラック', '#1A1A1A', true, 1
FROM items WHERE item_code = 'int-laundry-pole-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- Pid4M (森田アルミ工業)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-laundry-pole-002',
  'Pid4M',
  '森田アルミ工業',
  'PID4M',
  NULL,
  'ワイヤー式室内物干し 2カ所目から',
  true,
  238,
  ARRAY['hanger']
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
  id, 'int-laundry-pole-002-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-laundry-pole-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ホスクリーン昇降タイプ UTM (川口技研)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-laundry-pole-003',
  'ホスクリーン昇降タイプ UTM',
  '川口技研',
  'UTM-S-W',
  NULL,
  'ホスクリーン昇降タイプ（ヒモ操作）2カ所目から',
  true,
  239,
  ARRAY['hanger']
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
  id, 'int-laundry-pole-003-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-laundry-pole-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ホスクリーン昇降タイプ URM (川口技研)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-laundry-pole-004',
  'ホスクリーン昇降タイプ URM',
  '川口技研',
  'URM-S-W',
  NULL,
  'ホスクリーン昇降タイプ（操作棒）2カ所目から',
  true,
  240,
  ARRAY['hanger']
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
  id, 'int-laundry-pole-004-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-laundry-pole-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 24000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-laundry-pole-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ガス引込工事 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-gas-001',
  'ガス引込工事',
  'Gハウス',
  'GAS-INSTALL',
  NULL,
  'ガス引込工事（最低ガス栓3カ所取付必要）',
  true,
  241,
  ARRAY['appliance']
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
  id, 'int-gas-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-gas-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-gas-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-gas-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-gas-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-gas-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- スイッチ追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-switch-001',
  'スイッチ追加',
  'Panasonic',
  'SWITCH-ADD',
  NULL,
  'スイッチ追加（コスモワイド21）',
  true,
  242,
  ARRAY['electrical']
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
  id, 'int-switch-001-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-switch-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-switch-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-switch-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-switch-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-switch-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- コンセント追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-outlet-001',
  'コンセント追加',
  'Panasonic',
  'OUTLET-ADD',
  NULL,
  'コンセント追加（2口）',
  true,
  243,
  ARRAY['electrical']
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
  id, 'int-outlet-001-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-outlet-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 6000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 4口コンセント (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-outlet-002',
  '4口コンセント',
  'Panasonic',
  'OUTLET-4',
  NULL,
  '4口コンセント追加',
  true,
  244,
  ARRAY['electrical']
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
  id, 'int-outlet-002-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-outlet-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 床用コンセント F型アップコン (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-outlet-003',
  '床用コンセント F型アップコン',
  'Panasonic',
  'FLOOR-OUTLET',
  NULL,
  '床用コンセント F型アップコン',
  true,
  245,
  ARRAY['electrical']
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
  id, 'int-outlet-003-v1', 'アイボリー', '#FFFFF0', true, 0
FROM items WHERE item_code = 'int-outlet-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-outlet-003-v2', 'ブラウン', '#8B4513', true, 1
FROM items WHERE item_code = 'int-outlet-003'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-outlet-003-v3', 'ダークブラウン', '#5C4033', true, 2
FROM items WHERE item_code = 'int-outlet-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- アドバンスシリーズ一式 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-outlet-004',
  'アドバンスシリーズ一式',
  'Panasonic',
  'ADVANCE-SERIES',
  NULL,
  'アドバンスシリーズ全箇所変更',
  true,
  246,
  ARRAY['electrical']
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
  id, 'int-outlet-004-v1', 'マットホワイト', '#F5F5F5', true, 0
FROM items WHERE item_code = 'int-outlet-004'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'int-outlet-004-v2', 'マットグレー', '#808080', true, 1
FROM items WHERE item_code = 'int-outlet-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 72000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 72000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 72000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 72000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-outlet-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- LAN用空配管追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-lan-001',
  'LAN用空配管追加',
  'Panasonic',
  'LAN-CONDUIT',
  NULL,
  'LAN用空配管追加',
  true,
  247,
  ARRAY['electrical']
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
  id, 'int-lan-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-lan-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lan-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lan-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lan-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-lan-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 壁掛けテレビ用空配管 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-tv-001',
  '壁掛けテレビ用空配管',
  'Panasonic',
  'TV-CONDUIT',
  NULL,
  '壁掛けテレビ用空配管',
  true,
  248,
  ARRAY['electrical']
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
  id, 'int-tv-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-tv-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tv-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tv-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tv-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-tv-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 外でもドアホン VL-SVD505KF変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-intercom-001',
  '外でもドアホン VL-SVD505KF変更',
  'Panasonic',
  'VL-SVD505KF',
  NULL,
  '外でもドアホン（スマホ対応）への変更',
  true,
  249,
  ARRAY['electrical']
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
  id, 'int-intercom-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-intercom-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 37000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 外でもドアホン VL-SVD710KF変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-intercom-002',
  '外でもドアホン VL-SVD710KF変更',
  'Panasonic',
  'VL-SVD710KF',
  NULL,
  '外でもドアホン上位機種（スマホ対応）への変更',
  true,
  250,
  ARRAY['electrical']
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
  id, 'int-intercom-002-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-intercom-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- テレビドアホン VL-SE50KPA変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-intercom-003',
  'テレビドアホン VL-SE50KPA変更',
  'Panasonic',
  'VL-SE50KPA',
  NULL,
  'テレビドアホンへの変更',
  true,
  251,
  ARRAY['electrical']
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
  id, 'int-intercom-003-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-intercom-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-intercom-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダウンライト施工費（10個まで） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-downlight-001',
  'ダウンライト施工費（10個まで）',
  'Gハウス',
  'DOWNLIGHT-10',
  NULL,
  'ダウンライト施工費（10個まで）※照明器具別途',
  true,
  252,
  ARRAY['lighting']
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
  id, 'int-downlight-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-downlight-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-downlight-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-downlight-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-downlight-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-downlight-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダウンライト施工費（11個目以降） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-downlight-002',
  'ダウンライト施工費（11個目以降）',
  'Gハウス',
  'DOWNLIGHT-ADD',
  NULL,
  'ダウンライト施工費（11個目から1個あたり）',
  true,
  253,
  ARRAY['lighting']
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
  id, 'int-downlight-002-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-downlight-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-downlight-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-downlight-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-downlight-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 3000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-downlight-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 洗濯機混合水栓へ変更 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-washing-faucet-001',
  '洗濯機混合水栓へ変更',
  'Gハウス',
  'WASH-FAUCET-MIX',
  NULL,
  '洗濯機用水栓を混合水栓へ変更',
  true,
  254,
  ARRAY['sanitary']
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
  id, 'int-washing-faucet-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-washing-faucet-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-washing-faucet-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-washing-faucet-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-washing-faucet-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-washing-faucet-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ナノバブル発生装置 BeautyAqua (BeautyAqua)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-nanobubble-001',
  'ナノバブル発生装置 BeautyAqua',
  'BeautyAqua',
  'BEAUTYAQUA-20A',
  NULL,
  'ナノバブル発生装置 20A',
  true,
  255,
  ARRAY['sanitary']
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
  id, 'int-nanobubble-001-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-nanobubble-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-nanobubble-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-nanobubble-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-nanobubble-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-nanobubble-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 乾太くん スタンダード 5kg (リンナイ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-dryer-001',
  '乾太くん スタンダード 5kg',
  'リンナイ',
  'RDT-54S',
  NULL,
  'ガス衣類乾燥機 スタンダードタイプ 5kg ※ガス引込み必須',
  true,
  256,
  ARRAY['gas-dryer']
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
  id, 'int-dryer-001-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-dryer-001'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 272000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-001' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 272000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-001' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 272000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-001' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 272000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-001' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 乾太くん デラックス 6kg (リンナイ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-dryer-002',
  '乾太くん デラックス 6kg',
  'リンナイ',
  'RDT-63',
  NULL,
  'ガス衣類乾燥機 デラックスタイプ 6kg ※ガス引込み必須',
  true,
  257,
  ARRAY['gas-dryer']
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
  id, 'int-dryer-002-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-dryer-002'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 297000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-002' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 297000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-002' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 297000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-002' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 297000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-002' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 乾太くん デラックス 9kg (リンナイ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-dryer-003',
  '乾太くん デラックス 9kg',
  'リンナイ',
  'RDT-93',
  NULL,
  'ガス衣類乾燥機 デラックスタイプ 9kg ※ガス引込み必須',
  true,
  258,
  ARRAY['gas-dryer']
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
  id, 'int-dryer-003-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-dryer-003'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 330000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-003' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 330000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-003' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 330000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-003' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 330000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-003' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 乾太くん専用架台 (リンナイ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-dryer-004',
  '乾太くん専用架台',
  'リンナイ',
  'DS-KADAI',
  NULL,
  '乾太くん専用架台 ※乾太くん選択時のみ',
  true,
  259,
  ARRAY['gas-dryer']
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
  id, 'int-dryer-004-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'int-dryer-004'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-004' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-004' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-004' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-004' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 乾太くん専用収納ユニット (リンナイ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-dryer-005',
  '乾太くん専用収納ユニット',
  'リンナイ',
  'DS-UNIT',
  NULL,
  '乾太くん専用収納ユニット ※乾太くん選択時のみ',
  true,
  260,
  ARRAY['gas-dryer']
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
  id, 'int-dryer-005-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'int-dryer-005'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-005' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-005' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-005' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-005' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ガス乾燥機なし（標準） (-)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'int-dryer-none',
  'ガス乾燥機なし（標準）',
  '-',
  'DRYER-NONE',
  NULL,
  'ガス乾燥機を設置しない場合はこちらを選択',
  true,
  261,
  ARRAY['gas-dryer']
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
  id, 'int-dryer-none-v1', '選択なし', NULL, true, 0
FROM items WHERE item_code = 'int-dryer-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'int-dryer-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;