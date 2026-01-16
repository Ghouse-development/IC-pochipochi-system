-- otherデータ移行
-- 自動生成: 2026-01-16T02:46:40.650Z

-- カテゴリ

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'オリジナルダイニングテーブル',
  'dining-table',
  'other',
  true,
  false,
  0
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'エアコン',
  'aircon',
  'other',
  true,
  false,
  1
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'カーテン',
  'curtain',
  'other',
  true,
  false,
  2
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '家具',
  'furniture',
  'other',
  true,
  false,
  3
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

-- アイテム

-- ダイニングテーブル スクエア スクエア脚・ブラック W1500【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-bk-w1500-2port',
  'ダイニングテーブル スクエア スクエア脚・ブラック W1500【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-SQ-BK-W1500-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1500mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ブラック）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  0,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1500-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1500-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1500-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1500-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ブラック W1500【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-bk-w1500-1port-usb',
  'ダイニングテーブル スクエア スクエア脚・ブラック W1500【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-SQ-BK-W1500-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1500mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ブラック）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  1,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1500-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1500-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ブラック W1650【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-bk-w1650-2port',
  'ダイニングテーブル スクエア スクエア脚・ブラック W1650【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-SQ-BK-W1650-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1650mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ブラック）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  2,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1650-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1650-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1650-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1650-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ブラック W1650【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-bk-w1650-1port-usb',
  'ダイニングテーブル スクエア スクエア脚・ブラック W1650【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-SQ-BK-W1650-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1650mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ブラック）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  3,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1650-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1650-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ブラック W1800【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-bk-w1800-2port',
  'ダイニングテーブル スクエア スクエア脚・ブラック W1800【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-SQ-BK-W1800-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1800mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ブラック）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  4,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1800-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1800-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1800-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1800-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ブラック W1800【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-bk-w1800-1port-usb',
  'ダイニングテーブル スクエア スクエア脚・ブラック W1800【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-SQ-BK-W1800-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1800mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ブラック）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  5,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-bk-w1800-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-bk-w1800-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ホワイト W1500【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-wh-w1500-2port',
  'ダイニングテーブル スクエア スクエア脚・ホワイト W1500【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-SQ-WH-W1500-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1500mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  6,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1500-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1500-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1500-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1500-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ホワイト W1500【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-wh-w1500-1port-usb',
  'ダイニングテーブル スクエア スクエア脚・ホワイト W1500【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-SQ-WH-W1500-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1500mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  7,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1500-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1500-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ホワイト W1650【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-wh-w1650-2port',
  'ダイニングテーブル スクエア スクエア脚・ホワイト W1650【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-SQ-WH-W1650-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1650mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  8,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1650-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1650-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1650-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1650-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ホワイト W1650【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-wh-w1650-1port-usb',
  'ダイニングテーブル スクエア スクエア脚・ホワイト W1650【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-SQ-WH-W1650-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1650mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  9,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1650-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1650-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ホワイト W1800【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-wh-w1800-2port',
  'ダイニングテーブル スクエア スクエア脚・ホワイト W1800【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-SQ-WH-W1800-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1800mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  10,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1800-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1800-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1800-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1800-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア スクエア脚・ホワイト W1800【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-sq-wh-w1800-1port-usb',
  'ダイニングテーブル スクエア スクエア脚・ホワイト W1800【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-SQ-WH-W1800-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1800mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（スクエア・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  11,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-sq-wh-w1800-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 130000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-sq-wh-w1800-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ブラック W1500【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-bk-w1500-2port',
  'ダイニングテーブル スクエア ラウンド脚・ブラック W1500【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-RD-BK-W1500-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1500mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ブラック）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  12,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1500-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1500-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1500-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1500-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ブラック W1500【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-bk-w1500-1port-usb',
  'ダイニングテーブル スクエア ラウンド脚・ブラック W1500【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-RD-BK-W1500-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1500mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ブラック）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  13,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1500-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1500-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ブラック W1650【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-bk-w1650-2port',
  'ダイニングテーブル スクエア ラウンド脚・ブラック W1650【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-RD-BK-W1650-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1650mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ブラック）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  14,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1650-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1650-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1650-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1650-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ブラック W1650【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-bk-w1650-1port-usb',
  'ダイニングテーブル スクエア ラウンド脚・ブラック W1650【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-RD-BK-W1650-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1650mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ブラック）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  15,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1650-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1650-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ブラック W1800【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-bk-w1800-2port',
  'ダイニングテーブル スクエア ラウンド脚・ブラック W1800【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-RD-BK-W1800-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1800mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ブラック）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  16,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1800-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1800-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1800-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1800-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ブラック W1800【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-bk-w1800-1port-usb',
  'ダイニングテーブル スクエア ラウンド脚・ブラック W1800【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-RD-BK-W1800-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1800mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ブラック）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  17,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-bk-w1800-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-bk-w1800-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ホワイト W1500【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-wh-w1500-2port',
  'ダイニングテーブル スクエア ラウンド脚・ホワイト W1500【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-RD-WH-W1500-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1500mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  18,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1500-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1500-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1500-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1500-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ホワイト W1500【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-wh-w1500-1port-usb',
  'ダイニングテーブル スクエア ラウンド脚・ホワイト W1500【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-RD-WH-W1500-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1500mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  19,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1500-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1500-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ホワイト W1650【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-wh-w1650-2port',
  'ダイニングテーブル スクエア ラウンド脚・ホワイト W1650【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-RD-WH-W1650-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1650mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  20,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1650-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1650-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1650-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1650-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ホワイト W1650【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-wh-w1650-1port-usb',
  'ダイニングテーブル スクエア ラウンド脚・ホワイト W1650【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-RD-WH-W1650-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1650mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  21,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1650-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1650-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ホワイト W1800【コンセント 2口】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-wh-w1800-2port',
  'ダイニングテーブル スクエア ラウンド脚・ホワイト W1800【コンセント 2口】',
  'Gハウス',
  'GH-DT-SQ-RD-WH-W1800-2PORT',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1800mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 2口（テーブル端1カ所）',
  true,
  22,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-2port-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-2port'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1800-2port' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1800-2port' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1800-2port' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1800-2port' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル スクエア ラウンド脚・ホワイト W1800【コンセント 1口 + USB Type A】 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-sq-rd-wh-w1800-1port-usb',
  'ダイニングテーブル スクエア ラウンド脚・ホワイト W1800【コンセント 1口 + USB Type A】',
  'Gハウス',
  'GH-DT-SQ-RD-WH-W1800-1PORT-USB',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×D900mm×幅1800mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（ラウンド・ホワイト）
【耐荷重】100kg
【コンセント】コンセント 1口 + USB Type A（テーブル端1カ所）',
  true,
  23,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-sq-rd-wh-w1800-1port-usb-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-sq-rd-wh-w1800-1port-usb' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル ラウンド クワトロ脚・ブラック φ1100 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-rd-qt-bk-d1100',
  'ダイニングテーブル ラウンド クワトロ脚・ブラック φ1100',
  'Gハウス',
  'GH-DT-RD-QT-BK-D1100',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板（丸形）、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×天板幅1100mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（クワトロ・ブラック）
【耐荷重】100kg
【重量】天板:20-22kg, クワトロ脚:15.2kg（4本合計）',
  true,
  24,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1100-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1100'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-bk-d1100' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-bk-d1100' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-bk-d1100' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-bk-d1100' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル ラウンド クワトロ脚・ブラック φ1200 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-rd-qt-bk-d1200',
  'ダイニングテーブル ラウンド クワトロ脚・ブラック φ1200',
  'Gハウス',
  'GH-DT-RD-QT-BK-D1200',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板（丸形）、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×天板幅1200mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（クワトロ・ブラック）
【耐荷重】100kg
【重量】天板:20-22kg, クワトロ脚:15.2kg（4本合計）',
  true,
  25,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-bk-d1200-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-rd-qt-bk-d1200'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-bk-d1200' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-bk-d1200' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-bk-d1200' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-bk-d1200' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル ラウンド クワトロ脚・ホワイト φ1100 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-rd-qt-wh-d1100',
  'ダイニングテーブル ラウンド クワトロ脚・ホワイト φ1100',
  'Gハウス',
  'GH-DT-RD-QT-WH-D1100',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板（丸形）、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×天板幅1100mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（クワトロ・ホワイト）
【耐荷重】100kg
【重量】天板:20-22kg, クワトロ脚:15.2kg（4本合計）',
  true,
  26,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1100-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1100'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-wh-d1100' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-wh-d1100' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-wh-d1100' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-wh-d1100' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル ラウンド クワトロ脚・ホワイト φ1200 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-rd-qt-wh-d1200',
  'ダイニングテーブル ラウンド クワトロ脚・ホワイト φ1200',
  'Gハウス',
  'GH-DT-RD-QT-WH-D1200',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板（丸形）、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×天板幅1200mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（クワトロ・ホワイト）
【耐荷重】100kg
【重量】天板:20-22kg, クワトロ脚:15.2kg（4本合計）',
  true,
  27,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-qt-wh-d1200-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-rd-qt-wh-d1200'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-wh-d1200' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-wh-d1200' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-wh-d1200' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-qt-wh-d1200' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル ラウンド オクタ脚・ブラック φ1100 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-rd-oc-bk-d1100',
  'ダイニングテーブル ラウンド オクタ脚・ブラック φ1100',
  'Gハウス',
  'GH-DT-RD-OC-BK-D1100',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板（丸形）、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×天板幅1100mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（オクタ・ブラック）
【耐荷重】100kg
【重量】天板:20-22kg, オクタ脚:50kg',
  true,
  28,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1100-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1100'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-bk-d1100' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-bk-d1100' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-bk-d1100' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-bk-d1100' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル ラウンド オクタ脚・ブラック φ1200 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-rd-oc-bk-d1200',
  'ダイニングテーブル ラウンド オクタ脚・ブラック φ1200',
  'Gハウス',
  'GH-DT-RD-OC-BK-D1200',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板（丸形）、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×天板幅1200mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（オクタ・ブラック）
【耐荷重】100kg
【重量】天板:20-22kg, オクタ脚:50kg',
  true,
  29,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-bk-d1200-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-rd-oc-bk-d1200'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-bk-d1200' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-bk-d1200' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-bk-d1200' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-bk-d1200' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル ラウンド オクタ脚・ホワイト φ1100 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-rd-oc-wh-d1100',
  'ダイニングテーブル ラウンド オクタ脚・ホワイト φ1100',
  'Gハウス',
  'GH-DT-RD-OC-WH-D1100',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板（丸形）、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×天板幅1100mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（オクタ・ホワイト）
【耐荷重】100kg
【重量】天板:20-22kg, オクタ脚:50kg',
  true,
  30,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1100-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1100'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-wh-d1100' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-wh-d1100' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-wh-d1100' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-wh-d1100' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル ラウンド オクタ脚・ホワイト φ1200 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-dt-rd-oc-wh-d1200',
  'ダイニングテーブル ラウンド オクタ脚・ホワイト φ1200',
  'Gハウス',
  'GH-DT-RD-OC-WH-D1200',
  NULL,
  'Gハウスオリジナル商品。メラミン化粧板天板（丸形）、スチール脚。テーブルのみの販売です。
【サイズ】H720mm×天板幅1200mm
【天板】パーティクルボード（表面：メラミン化粧板、裏面：メラミン化粧板白色）
【脚】スチール焼付粉体塗装（オクタ・ホワイト）
【耐荷重】100kg
【重量】天板:20-22kg, オクタ脚:50kg',
  true,
  31,
  ARRAY['dining-table']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v1', 'OKオーク', '#C4A77D', true, 0
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v2', 'CRチェリー', '#8B4513', true, 1
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v3', 'WNウォールナット', '#5D4037', true, 2
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v4', 'DWダークWN', '#3E2723', true, 3
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v5', 'DUダストグレー', '#9E9E9E', true, 4
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v6', 'KRカブリード', '#8D6E63', true, 5
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v7', 'FMファインモルタル', '#A1887F', true, 6
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v8', 'APアンジェロプレーン', '#BCAAA4', true, 7
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v9', 'OWオフホワイト', '#FAFAFA', true, 8
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v10', 'LBライトベージュ', '#E8DED1', true, 9
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v11', 'MBミディアムベージュ', '#D7CCC8', true, 10
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v12', 'DBダークベージュ', '#BCAAA4', true, 11
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v13', 'MGミディアムグレー', '#9E9E9E', true, 12
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v14', 'DGダークグレー', '#616161', true, 13
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-dt-rd-oc-wh-d1200-v15', 'BKブラック', '#212121', true, 14
FROM items WHERE item_code = 'furn-dt-rd-oc-wh-d1200'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-wh-d1200' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-wh-d1200' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-wh-d1200' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 166000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-dt-rd-oc-wh-d1200' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイキン Eシリーズ 6畳用 (ダイキン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-daikin-e6',
  'ダイキン Eシリーズ 6畳用',
  'ダイキン',
  'S225ATES-W',
  NULL,
  'ダイキン Eシリーズ 6畳用 100V 施工費込',
  true,
  32,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-daikin-e6-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'furn-aircon-daikin-e6'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e6' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e6' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e6' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 110000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e6' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイキン Eシリーズ 10畳用 (ダイキン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-daikin-e10',
  'ダイキン Eシリーズ 10畳用',
  'ダイキン',
  'S285ATES-W',
  NULL,
  'ダイキン Eシリーズ 10畳用 100V 施工費込',
  true,
  33,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-daikin-e10-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'furn-aircon-daikin-e10'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e10' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e10' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e10' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e10' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイキン Eシリーズ 14畳用 (ダイキン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-daikin-e14',
  'ダイキン Eシリーズ 14畳用',
  'ダイキン',
  'S405ATEP-W',
  NULL,
  'ダイキン Eシリーズ 14畳用 200V 施工費込',
  true,
  34,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-daikin-e14-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'furn-aircon-daikin-e14'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 192000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e14' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 192000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e14' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 192000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e14' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 192000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-e14' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイキン GXシリーズ 6畳用 (ダイキン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-daikin-gx6',
  'ダイキン GXシリーズ 6畳用',
  'ダイキン',
  'S224ATGS-W',
  NULL,
  'ダイキン GXシリーズ 6畳用 100V 施工費込（さらら除湿）',
  true,
  35,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-daikin-gx6-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'furn-aircon-daikin-gx6'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 165000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx6' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 165000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx6' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 165000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx6' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 165000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx6' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイキン GXシリーズ 10畳用 (ダイキン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-daikin-gx10',
  'ダイキン GXシリーズ 10畳用',
  'ダイキン',
  'S284ATGS-W',
  NULL,
  'ダイキン GXシリーズ 10畳用 100V 施工費込（さらら除湿）',
  true,
  36,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-daikin-gx10-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'furn-aircon-daikin-gx10'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 188000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx10' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 188000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx10' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 188000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx10' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 188000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx10' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイキン GXシリーズ 14畳用 (ダイキン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-daikin-gx14',
  'ダイキン GXシリーズ 14畳用',
  'ダイキン',
  'S404ATGP-W',
  NULL,
  'ダイキン GXシリーズ 14畳用 200V 施工費込（さらら除湿）',
  true,
  37,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-daikin-gx14-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'furn-aircon-daikin-gx14'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 218000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx14' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 218000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx14' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 218000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx14' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 218000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-daikin-gx14' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 三菱電機 霧ヶ峰 Zシリーズ 6畳用 (三菱電機)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-mitsubishi-z6',
  '三菱電機 霧ヶ峰 Zシリーズ 6畳用',
  '三菱電機',
  'MSZ-ZXV2225',
  NULL,
  '霧ヶ峰 Zシリーズ 6畳用 100V 施工費込（さらっと除湿冷房）',
  true,
  38,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-mitsubishi-z6-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'furn-aircon-mitsubishi-z6'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 235000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z6' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 235000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z6' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 235000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z6' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 235000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z6' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 三菱電機 霧ヶ峰 Zシリーズ 10畳用 (三菱電機)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-mitsubishi-z10',
  '三菱電機 霧ヶ峰 Zシリーズ 10畳用',
  '三菱電機',
  'MSZ-ZXV2825S',
  NULL,
  '霧ヶ峰 Zシリーズ 10畳用 200V 施工費込（さらっと除湿冷房）',
  true,
  39,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-mitsubishi-z10-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'furn-aircon-mitsubishi-z10'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 274000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z10' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 274000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z10' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 274000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z10' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 274000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z10' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 三菱電機 霧ヶ峰 Zシリーズ 14畳用 (三菱電機)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-mitsubishi-z14',
  '三菱電機 霧ヶ峰 Zシリーズ 14畳用',
  '三菱電機',
  'MSZ-ZXV4025S',
  NULL,
  '霧ヶ峰 Zシリーズ 14畳用 200V 施工費込（さらっと除湿冷房）',
  true,
  40,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-mitsubishi-z14-v1', 'ホワイト', '#FFFFFF', true, 0
FROM items WHERE item_code = 'furn-aircon-mitsubishi-z14'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z14' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z14' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z14' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-mitsubishi-z14' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 風向調整板 (共通)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-aircon-wind-plate',
  '風向調整板',
  '共通',
  'WIND-PLATE',
  NULL,
  'エアコン風向きを細かく調整できるオプション部品',
  true,
  41,
  ARRAY['aircon']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-aircon-wind-plate-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'furn-aircon-wind-plate'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-wind-plate' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-wind-plate' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-wind-plate' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-aircon-wind-plate' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- カーテン（IC提案） (IC提案)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-curtain-ic',
  'カーテン（IC提案）',
  'IC提案',
  'CURTAIN-IC',
  NULL,
  'インテリアコーディネーターがお部屋に合わせたカーテンをご提案いたします',
  true,
  42,
  ARRAY['curtain']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-curtain-ic-v1', 'IC提案', NULL, true, 0
FROM items WHERE item_code = 'furn-curtain-ic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-curtain-ic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-curtain-ic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-curtain-ic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-curtain-ic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ソファ（IC提案） (IC提案)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-sofa-ic',
  'ソファ（IC提案）',
  'IC提案',
  'SOFA-IC',
  NULL,
  'インテリアコーディネーターがお部屋に合わせたソファをご提案いたします',
  true,
  43,
  ARRAY['furniture']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-sofa-ic-v1', 'IC提案', NULL, true, 0
FROM items WHERE item_code = 'furn-sofa-ic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-sofa-ic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-sofa-ic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-sofa-ic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-sofa-ic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- TVボード（IC提案） (IC提案)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-tvboard-ic',
  'TVボード（IC提案）',
  'IC提案',
  'TVBOARD-IC',
  NULL,
  'インテリアコーディネーターがお部屋に合わせたTVボードをご提案いたします',
  true,
  44,
  ARRAY['furniture']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-tvboard-ic-v1', 'IC提案', NULL, true, 0
FROM items WHERE item_code = 'furn-tvboard-ic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-tvboard-ic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-tvboard-ic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-tvboard-ic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-tvboard-ic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- センターテーブル（IC提案） (IC提案)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-centertable-ic',
  'センターテーブル（IC提案）',
  'IC提案',
  'CENTERTABLE-IC',
  NULL,
  'インテリアコーディネーターがお部屋に合わせたセンターテーブルをご提案いたします',
  true,
  45,
  ARRAY['furniture']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-centertable-ic-v1', 'IC提案', NULL, true, 0
FROM items WHERE item_code = 'furn-centertable-ic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-centertable-ic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-centertable-ic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-centertable-ic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-centertable-ic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ラグ（IC提案） (IC提案)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-rug-ic',
  'ラグ（IC提案）',
  'IC提案',
  'RUG-IC',
  NULL,
  'インテリアコーディネーターがお部屋に合わせたラグをご提案いたします',
  true,
  46,
  ARRAY['furniture']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-rug-ic-v1', 'IC提案', NULL, true, 0
FROM items WHERE item_code = 'furn-rug-ic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-rug-ic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-rug-ic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-rug-ic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-rug-ic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングテーブル（IC提案） (IC提案)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-diningtable-ic',
  'ダイニングテーブル（IC提案）',
  'IC提案',
  'DININGTABLE-IC',
  NULL,
  'インテリアコーディネーターがお部屋に合わせたダイニングテーブルをご提案いたします',
  true,
  47,
  ARRAY['furniture']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-diningtable-ic-v1', 'IC提案', NULL, true, 0
FROM items WHERE item_code = 'furn-diningtable-ic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-diningtable-ic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-diningtable-ic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-diningtable-ic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-diningtable-ic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ダイニングチェア（IC提案） (IC提案)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-diningchair-ic',
  'ダイニングチェア（IC提案）',
  'IC提案',
  'DININGCHAIR-IC',
  NULL,
  'インテリアコーディネーターがお部屋に合わせたダイニングチェアをご提案いたします',
  true,
  48,
  ARRAY['furniture']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-diningchair-ic-v1', 'IC提案', NULL, true, 0
FROM items WHERE item_code = 'furn-diningchair-ic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-diningchair-ic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-diningchair-ic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-diningchair-ic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-diningchair-ic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ベッド（IC提案） (IC提案)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-bed-ic',
  'ベッド（IC提案）',
  'IC提案',
  'BED-IC',
  NULL,
  'インテリアコーディネーターがお部屋に合わせたベッドをご提案いたします',
  true,
  49,
  ARRAY['furniture']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-bed-ic-v1', 'IC提案', NULL, true, 0
FROM items WHERE item_code = 'furn-bed-ic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-bed-ic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-bed-ic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-bed-ic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-bed-ic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- その他家具（IC提案） (IC提案)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'furn-other-ic',
  'その他家具（IC提案）',
  'IC提案',
  'OTHER-IC',
  NULL,
  'その他ご希望の家具があればインテリアコーディネーターにご相談ください（自由入力可）',
  true,
  50,
  ARRAY['furniture']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'furn-other-ic-v1', 'IC提案', NULL, true, 0
FROM items WHERE item_code = 'furn-other-ic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-other-ic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-other-ic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-other-ic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'furn-other-ic' AND p.code = 'life'
ON CONFLICT DO NOTHING;