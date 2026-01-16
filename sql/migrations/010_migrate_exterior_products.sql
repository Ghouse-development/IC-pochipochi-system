-- exteriorデータ移行
-- 自動生成: 2026-01-16T02:46:40.617Z

-- カテゴリ

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '外壁',
  'exterior-wall',
  'exterior',
  true,
  false,
  0
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ポーチ',
  'porch',
  'exterior',
  true,
  false,
  1
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ポーチサイズ拡張',
  'porch-size',
  'exterior',
  true,
  false,
  2
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ポーチタイル目地',
  'porch-grout',
  'exterior',
  true,
  false,
  3
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '屋根',
  'roof',
  'exterior',
  true,
  false,
  4
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '外部設備',
  'exterior-facility',
  'exterior',
  true,
  false,
  5
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '外部建材',
  'fascia',
  'exterior',
  true,
  false,
  6
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '外部建材',
  'gutter',
  'exterior',
  true,
  false,
  7
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '軒天',
  'soffit',
  'exterior',
  true,
  false,
  8
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '庇',
  'awning',
  'exterior',
  true,
  false,
  9
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '電動ガレージシャッター',
  'garage-shutter',
  'exterior',
  true,
  false,
  10
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '窓タイプ',
  'window-type',
  'exterior',
  true,
  false,
  11
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '窓',
  'window',
  'exterior',
  true,
  false,
  12
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '玄関ドア',
  'entrance-door',
  'exterior',
  true,
  false,
  13
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '給湯器',
  'ecocute',
  'exterior',
  true,
  false,
  14
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '換気システム選択',
  'ventilation-system',
  'exterior',
  true,
  false,
  15
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'インターホン個数',
  'intercom-qty',
  'exterior',
  true,
  false,
  16
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '太陽光',
  'solar',
  'exterior',
  true,
  false,
  17
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '外部設備',
  'exterior-equipment',
  'exterior',
  true,
  false,
  18
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '蓄電池',
  'battery',
  'exterior',
  true,
  false,
  19
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'V2H',
  'v2h',
  'exterior',
  true,
  false,
  20
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '外部設備',
  'sukkiri-pole',
  'exterior',
  true,
  false,
  21
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  '天井変更工事',
  'ceiling-work',
  'exterior',
  true,
  false,
  22
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

INSERT INTO categories (
  name, slug, category_type, is_active, is_required, display_order
) VALUES (
  'ガス引込み',
  'gas-supply',
  'exterior',
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
  'interior-window',
  'exterior',
  true,
  false,
  24
) ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  category_type = EXCLUDED.category_type;

-- アイテム

-- モナビストーンV (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-monabistone-v',
  'モナビストーンV',
  'ニチハ',
  'EFA52xxFK/GK/TK',
  '窯業系サイディング',
  '横張のみの採用となります',
  true,
  0,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-monabistone-v-v1', 'フローMGグレー', 'フローMGグレー', true, 0
FROM items WHERE item_code = 'ext-wall-monabistone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-monabistone-v-v2', 'フローMGブラック', 'フローMGブラック', true, 1
FROM items WHERE item_code = 'ext-wall-monabistone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-monabistone-v-v3', 'フローMGクリアホワイト', 'フローMGクリアホワイト', true, 2
FROM items WHERE item_code = 'ext-wall-monabistone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-monabistone-v-v4', 'フローMGホワイト', 'フローMGホワイト', true, 3
FROM items WHERE item_code = 'ext-wall-monabistone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-monabistone-v-v5', 'フローMGクリーム', 'フローMGクリーム', true, 4
FROM items WHERE item_code = 'ext-wall-monabistone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-monabistone-v-v6', 'フローMGネイビー', 'フローMGネイビー', true, 5
FROM items WHERE item_code = 'ext-wall-monabistone-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-monabistone-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-monabistone-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- シャルムロックV (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-sharm-rock-v',
  'シャルムロックV',
  'ニチハ',
  'EFA28xxFK/CK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  1,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sharm-rock-v-v1', 'コンティMGホワイト', 'EFA2851FK', true, 0
FROM items WHERE item_code = 'ext-wall-sharm-rock-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sharm-rock-v-v2', 'コンティMGアッシュ', 'EFA2852FK', true, 1
FROM items WHERE item_code = 'ext-wall-sharm-rock-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sharm-rock-v-v3', 'コンティMGアイボリー', 'EFA2853FK', true, 2
FROM items WHERE item_code = 'ext-wall-sharm-rock-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sharm-rock-v-v4', 'コンティMGブラウン', 'EFA2854FK', true, 3
FROM items WHERE item_code = 'ext-wall-sharm-rock-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sharm-rock-v-v5', 'コンティMGグレー', 'EFA2855FK', true, 4
FROM items WHERE item_code = 'ext-wall-sharm-rock-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sharm-rock-v-v6', 'コンティMGチャコール', 'EFA2856CK', true, 5
FROM items WHERE item_code = 'ext-wall-sharm-rock-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sharm-rock-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sharm-rock-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- リーガストーン調V (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-reega-stone',
  'リーガストーン調V',
  'ニチハ',
  'EFX34xxCK/NK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  2,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-reega-stone-v1', 'ランダMGプラチナ', 'EFX3455CK', true, 0
FROM items WHERE item_code = 'ext-wall-reega-stone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-reega-stone-v2', 'ランダMGブラック', 'EFX3457CK', true, 1
FROM items WHERE item_code = 'ext-wall-reega-stone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-reega-stone-v3', 'ランダMGラテ', 'EFX3451NK', true, 2
FROM items WHERE item_code = 'ext-wall-reega-stone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-reega-stone-v4', 'ランダMGトリュフ', 'EFX3452RK', true, 3
FROM items WHERE item_code = 'ext-wall-reega-stone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-reega-stone-v5', 'ランダMGパウダー', 'EFX3453CK', true, 4
FROM items WHERE item_code = 'ext-wall-reega-stone'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-reega-stone' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-reega-stone' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ディスタシェイドV (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-dista-shade-v',
  'ディスタシェイドV',
  'ニチハ',
  'EFA54xxYK/LK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  3,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-dista-shade-v-v1', 'ストレムMGネイビー', 'EFA5456YK', true, 0
FROM items WHERE item_code = 'ext-wall-dista-shade-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-dista-shade-v-v2', 'ストレムMGホワイト', 'EFA5451YK', true, 1
FROM items WHERE item_code = 'ext-wall-dista-shade-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-dista-shade-v-v3', 'ストレムMGクリーム', 'EFA5452YK', true, 2
FROM items WHERE item_code = 'ext-wall-dista-shade-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-dista-shade-v-v4', 'ストレムMGブラウン', 'EFA5453YK', true, 3
FROM items WHERE item_code = 'ext-wall-dista-shade-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-dista-shade-v-v5', 'ストレムMGセピア', 'EFA5454LK', true, 4
FROM items WHERE item_code = 'ext-wall-dista-shade-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-dista-shade-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-dista-shade-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ボルブストーン調V (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-bolb-stone',
  'ボルブストーン調V',
  'ニチハ',
  'EFX31xxFK/NK/LK/RK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  4,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-bolb-stone-v1', 'エアルMGスノー', 'EFX3151FK', true, 0
FROM items WHERE item_code = 'ext-wall-bolb-stone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-bolb-stone-v2', 'エアルMGラテ', 'EFX3152FK', true, 1
FROM items WHERE item_code = 'ext-wall-bolb-stone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-bolb-stone-v3', 'エアルMGトリュフ', 'EFX3153LK', true, 2
FROM items WHERE item_code = 'ext-wall-bolb-stone'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-bolb-stone' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-bolb-stone' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- スプリットストーン調V (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-split-stone-v',
  'スプリットストーン調V',
  'ニチハ',
  'EFX16xxNK/GK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  5,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-split-stone-v-v1', 'アブラMGクリーム', 'EFX1651NK', true, 0
FROM items WHERE item_code = 'ext-wall-split-stone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-split-stone-v-v2', 'アブラMGワイン', 'EFX1652NK', true, 1
FROM items WHERE item_code = 'ext-wall-split-stone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-split-stone-v-v3', 'アブラMGキャロット', 'EFX1653NK', true, 2
FROM items WHERE item_code = 'ext-wall-split-stone-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-split-stone-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-split-stone-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- コルモストーン調V (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-colmo-stone-v',
  'コルモストーン調V',
  'ニチハ',
  'EFX33xxNK/CK/FK/RK/AK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  6,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmo-stone-v-v1', 'フォンドMGダーク', 'EFX3355NK', true, 0
FROM items WHERE item_code = 'ext-wall-colmo-stone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmo-stone-v-v2', 'フォンドMGシュガー', 'EFX3351NK', true, 1
FROM items WHERE item_code = 'ext-wall-colmo-stone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmo-stone-v-v3', 'フォンドMGリーフ', 'EFX3352NK', true, 2
FROM items WHERE item_code = 'ext-wall-colmo-stone-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmo-stone-v-v4', 'フォンドMGショコラ', 'EFX3353RK', true, 3
FROM items WHERE item_code = 'ext-wall-colmo-stone-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-colmo-stone-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-colmo-stone-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- コンクリート打ちっ放し16V (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-concrete-16v',
  'コンクリート打ちっ放し16V',
  'ニチハ',
  'EFA4351NK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  7,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-concrete-16v-v1', 'コンクリートMGライトグレー', 'EFA4351NK', true, 0
FROM items WHERE item_code = 'ext-wall-concrete-16v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-concrete-16v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-concrete-16v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- グレインウッドV (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-grainwood-v',
  'グレインウッドV',
  'ニチハ',
  'EFA22xxYK/FK/LK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  8,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-grainwood-v-v1', 'スペリオMGネイビー', 'EFA2258YK', true, 0
FROM items WHERE item_code = 'ext-wall-grainwood-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-grainwood-v-v2', 'スペリオMGナチュラル', 'EFA2251FK', true, 1
FROM items WHERE item_code = 'ext-wall-grainwood-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-grainwood-v-v3', 'スペリオMGウォルナット', 'EFA2256FK', true, 2
FROM items WHERE item_code = 'ext-wall-grainwood-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-grainwood-v-v4', 'スペリオMGブラック', 'EFA2255LK', true, 3
FROM items WHERE item_code = 'ext-wall-grainwood-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-grainwood-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-grainwood-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- マイスターウッド調V (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-meister-wood-v',
  'マイスターウッド調V',
  'ニチハ',
  'EF93xxFK/GK/YK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  9,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-meister-wood-v-v1', 'イデアルMGボルドー', 'EF9355FK', true, 0
FROM items WHERE item_code = 'ext-wall-meister-wood-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-meister-wood-v-v2', 'イデアルMGチャコール', 'EF9356FK', true, 1
FROM items WHERE item_code = 'ext-wall-meister-wood-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-meister-wood-v-v3', 'イデアルMGブラウン', 'EF9357GK', true, 2
FROM items WHERE item_code = 'ext-wall-meister-wood-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-meister-wood-v-v4', 'イデアルMGグレー', 'EF9358YK', true, 3
FROM items WHERE item_code = 'ext-wall-meister-wood-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-meister-wood-v-v5', 'イデアルMGグリーン', 'EF9359YK', true, 4
FROM items WHERE item_code = 'ext-wall-meister-wood-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-meister-wood-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-meister-wood-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- しぶきV (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-shibuki-v',
  'しぶきV',
  'ニチハ',
  'EF53xxC2K/JK/GK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  10,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shibuki-v-v1', 'プラムMGバニラホワイトII', 'EF5356C2K', true, 0
FROM items WHERE item_code = 'ext-wall-shibuki-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shibuki-v-v2', 'プラムMGアッシュII', 'EF5357JK', true, 1
FROM items WHERE item_code = 'ext-wall-shibuki-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shibuki-v-v3', 'プラムMGクリームII', 'EF5358JK', true, 2
FROM items WHERE item_code = 'ext-wall-shibuki-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shibuki-v-v4', 'プラムMGブラウンII', 'EF5359JK', true, 3
FROM items WHERE item_code = 'ext-wall-shibuki-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shibuki-v-v5', 'プラムMGセピアII', 'EF5362JK', true, 4
FROM items WHERE item_code = 'ext-wall-shibuki-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shibuki-v-v6', 'プラムMGウィニーホワイトII', 'EF5363GK', true, 5
FROM items WHERE item_code = 'ext-wall-shibuki-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shibuki-v-v7', 'プラムMGシェルトグレーII', 'EF5364GK', true, 6
FROM items WHERE item_code = 'ext-wall-shibuki-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-shibuki-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-shibuki-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- アフェットV (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-affet-v',
  'アフェットV',
  'ニチハ',
  'EFA53xxFK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  11,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-affet-v-v1', 'ブリジェMGセピア', 'EFA5351FK', true, 0
FROM items WHERE item_code = 'ext-wall-affet-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-affet-v-v2', 'ブリジェMGピアシルク', 'EFA5353FK', true, 1
FROM items WHERE item_code = 'ext-wall-affet-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-affet-v-v3', 'ブリジェMGウォームグレー', 'EFA5354FK', true, 2
FROM items WHERE item_code = 'ext-wall-affet-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-affet-v-v4', 'ブリジェMGシェルトグレー', 'EFA5355FK', true, 3
FROM items WHERE item_code = 'ext-wall-affet-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-affet-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-affet-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ロックラインV (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-rockline-v',
  'ロックラインV',
  'ニチハ',
  'EF90xxGK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  12,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rockline-v-v1', 'プラムMGホワイトII', 'EF9051GK', true, 0
FROM items WHERE item_code = 'ext-wall-rockline-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rockline-v-v2', 'プラムMGアイボリーII', 'EF9052GK', true, 1
FROM items WHERE item_code = 'ext-wall-rockline-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rockline-v-v3', 'プラムMGアッシュII', 'EF9053GK', true, 2
FROM items WHERE item_code = 'ext-wall-rockline-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-rockline-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-rockline-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ナチュラルラインV (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-naturalline-v',
  'ナチュラルラインV',
  'ニチハ',
  'EFX37xxGK/TK',
  '窯業系サイディング',
  '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
  true,
  13,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-naturalline-v-v1', 'プラムMGホワイトII', 'EFX3751GK', true, 0
FROM items WHERE item_code = 'ext-wall-naturalline-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-naturalline-v-v2', 'プラムMGアイボリーII', 'EFX3752GK', true, 1
FROM items WHERE item_code = 'ext-wall-naturalline-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-naturalline-v-v3', 'プラムMGチャコールII', 'EFX3754TK', true, 2
FROM items WHERE item_code = 'ext-wall-naturalline-v'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-naturalline-v-v4', 'プラムMGブルー', 'EFX3757GK', true, 3
FROM items WHERE item_code = 'ext-wall-naturalline-v'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-naturalline-v' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-naturalline-v' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ルボン プレミアム (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-lubon-premium',
  'ルボン プレミアム',
  'KMEW',
  'ELS4xxP',
  '窯業系サイディング',
  'プレミアム外壁 シーリング目地に比べて継ぎ目が目立たない',
  true,
  14,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-lubon-premium-v1', 'レセピMGチタンホワイト30', 'ホワイト', true, 0
FROM items WHERE item_code = 'ext-wall-lubon-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-lubon-premium-v2', 'レセピMGチタンチャコール30', 'チャコール', true, 1
FROM items WHERE item_code = 'ext-wall-lubon-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-lubon-premium-v3', 'レセピMGネロ30', 'ブラック', true, 2
FROM items WHERE item_code = 'ext-wall-lubon-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-lubon-premium-v4', 'レセピMGネイビー30', 'ネイビー', true, 3
FROM items WHERE item_code = 'ext-wall-lubon-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-lubon-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-lubon-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- スティルランバー プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-stillumber-premium',
  'スティルランバー プレミアム',
  'ニチハ',
  'ELS61xY',
  '窯業系サイディング',
  'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
  true,
  15,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-stillumber-premium-v1', 'スティルMGアッシュホワイト30', 'ELS611Y', true, 0
FROM items WHERE item_code = 'ext-wall-stillumber-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-stillumber-premium-v2', 'スティルMGブラウン30', 'ELS612Y', true, 1
FROM items WHERE item_code = 'ext-wall-stillumber-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-stillumber-premium-v3', 'スティルMGアッシュブラウン30', 'ELS613Y', true, 2
FROM items WHERE item_code = 'ext-wall-stillumber-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-stillumber-premium-v4', 'スティルMGブラック30', 'ELS614Y', true, 3
FROM items WHERE item_code = 'ext-wall-stillumber-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-stillumber-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-stillumber-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ミルシュタイン プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-milstein-premium',
  'ミルシュタイン プレミアム',
  'ニチハ',
  'ELS49xP',
  '窯業系サイディング',
  'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
  true,
  16,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-milstein-premium-v1', 'ミルトMGホワイト30', 'ELS491P', true, 0
FROM items WHERE item_code = 'ext-wall-milstein-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-milstein-premium-v2', 'ミルトMGブラック30', 'ELS494P', true, 1
FROM items WHERE item_code = 'ext-wall-milstein-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-milstein-premium-v3', 'ミルトMGグレー30', 'ELS495P', true, 2
FROM items WHERE item_code = 'ext-wall-milstein-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-milstein-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-milstein-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- プリレート プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-prirate-premium',
  'プリレート プレミアム',
  'ニチハ',
  'ELS42xP',
  '窯業系サイディング',
  'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
  true,
  17,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-prirate-premium-v1', 'クアラMGホワイト30', 'ELS421P', true, 0
FROM items WHERE item_code = 'ext-wall-prirate-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-prirate-premium-v2', 'クアラMGアイボリー30', 'ELS422P', true, 1
FROM items WHERE item_code = 'ext-wall-prirate-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-prirate-premium-v3', 'クアラMGオーカー30', 'ELS423P', true, 2
FROM items WHERE item_code = 'ext-wall-prirate-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-prirate-premium-v4', 'クアラMGネロ30', 'ELS426P', true, 3
FROM items WHERE item_code = 'ext-wall-prirate-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-prirate-premium-v5', 'クアラMGネイビー30', 'ELS427P', true, 4
FROM items WHERE item_code = 'ext-wall-prirate-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-prirate-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-prirate-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- シントア プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-sintoa-premium',
  'シントア プレミアム',
  'ニチハ',
  'ELS46xF',
  '窯業系サイディング',
  'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
  true,
  18,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sintoa-premium-v1', 'シントアMGホワイト30', 'ELS461F', true, 0
FROM items WHERE item_code = 'ext-wall-sintoa-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sintoa-premium-v2', 'シントアMGオフホワイト30', 'ELS462F', true, 1
FROM items WHERE item_code = 'ext-wall-sintoa-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sintoa-premium-v3', 'シントアMGネイビー30', 'ELS463F', true, 2
FROM items WHERE item_code = 'ext-wall-sintoa-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sintoa-premium-v4', 'シントアMGライトグレー30', 'ELS465F', true, 3
FROM items WHERE item_code = 'ext-wall-sintoa-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sintoa-premium-v5', 'シントアMGミロリブルー30', 'ELS466F', true, 4
FROM items WHERE item_code = 'ext-wall-sintoa-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sintoa-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sintoa-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- スプーモ プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-spumo-premium',
  'スプーモ プレミアム',
  'ニチハ',
  'ELS44xE/P',
  '窯業系サイディング',
  'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
  true,
  19,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-spumo-premium-v1', 'プリミエMGホワイト30', 'ELS446E', true, 0
FROM items WHERE item_code = 'ext-wall-spumo-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-spumo-premium-v2', 'ラフラMGブラック30', 'ELS448E', true, 1
FROM items WHERE item_code = 'ext-wall-spumo-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-spumo-premium-v3', 'ラフラMGグレー30', 'ELS449E', true, 2
FROM items WHERE item_code = 'ext-wall-spumo-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-spumo-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-spumo-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- キャスティングウッド プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-castingwood-premium',
  'キャスティングウッド プレミアム',
  'ニチハ',
  'ELG24xxNK',
  '窯業系サイディング',
  'Fu-ge PREMIUM 横張のみの採用となります',
  true,
  20,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-castingwood-premium-v1', 'ダークグリーンMG30', 'ELG2412NK', true, 0
FROM items WHERE item_code = 'ext-wall-castingwood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-castingwood-premium-v2', 'ミディアムブラウンMG30', 'ELG241NK', true, 1
FROM items WHERE item_code = 'ext-wall-castingwood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-castingwood-premium-v3', 'ホワイトアッシュMG30', 'ELG245NK', true, 2
FROM items WHERE item_code = 'ext-wall-castingwood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-castingwood-premium-v4', 'ホワイトキャメルMG30', 'ELG246NK', true, 3
FROM items WHERE item_code = 'ext-wall-castingwood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-castingwood-premium-v5', 'スモークシルバーMG30', 'ELG247NK', true, 4
FROM items WHERE item_code = 'ext-wall-castingwood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-castingwood-premium-v6', 'ナチュラルオーカーMG30', 'ELG248NK', true, 5
FROM items WHERE item_code = 'ext-wall-castingwood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-castingwood-premium-v7', 'ノースグリーンMG30', 'ELG249NK', true, 6
FROM items WHERE item_code = 'ext-wall-castingwood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-castingwood-premium-v8', 'ダークブラウンMG30', 'ELG2410NK', true, 7
FROM items WHERE item_code = 'ext-wall-castingwood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-castingwood-premium-v9', 'カーボンブラックMG30', 'ELG2411NK', true, 8
FROM items WHERE item_code = 'ext-wall-castingwood-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-castingwood-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-castingwood-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ヴィンテージウッド プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-vintagewood-premium',
  'ヴィンテージウッド プレミアム',
  'ニチハ',
  'ELG76xFK',
  '窯業系サイディング',
  'Fu-ge PREMIUM 横張のみの採用となります',
  true,
  21,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-vintagewood-premium-v1', 'スキムドMGダルブラウン30', 'ELG762FK', true, 0
FROM items WHERE item_code = 'ext-wall-vintagewood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-vintagewood-premium-v2', 'スキムドMGレッド30', 'ELG765FK', true, 1
FROM items WHERE item_code = 'ext-wall-vintagewood-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-vintagewood-premium-v3', 'スキムドMGアッシュ30', 'ELG766FK', true, 2
FROM items WHERE item_code = 'ext-wall-vintagewood-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-vintagewood-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-vintagewood-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- コンクリート打ちっ放し16 プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-concrete-premium',
  'コンクリート打ちっ放し16 プレミアム',
  'ニチハ',
  'ELG432NK',
  '窯業系サイディング',
  'Fu-ge PREMIUM 横張のみの採用となります',
  true,
  22,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-concrete-premium-v1', 'MGグレー30', 'ELG432NK', true, 0
FROM items WHERE item_code = 'ext-wall-concrete-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-concrete-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-concrete-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- シャルムロック プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-sharmrock-premium',
  'シャルムロック プレミアム',
  'ニチハ',
  'ELG28xFK',
  '窯業系サイディング',
  'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない',
  true,
  23,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sharmrock-premium-v1', 'マハビMGルビー30', 'ELG283FK', true, 0
FROM items WHERE item_code = 'ext-wall-sharmrock-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sharmrock-premium-v2', 'マハビMGブラウン30', 'ELG284FK', true, 1
FROM items WHERE item_code = 'ext-wall-sharmrock-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sharmrock-premium-v3', 'マハビMGスモーク30', 'ELG285FK', true, 2
FROM items WHERE item_code = 'ext-wall-sharmrock-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sharmrock-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sharmrock-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- コルモストーン調 プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-colmostone-premium',
  'コルモストーン調 プレミアム',
  'ニチハ',
  'ELG33xNK',
  '窯業系サイディング',
  'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない',
  true,
  24,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmostone-premium-v1', 'フォンドMGアッシュグレー30', 'ELG3310NK', true, 0
FROM items WHERE item_code = 'ext-wall-colmostone-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmostone-premium-v2', 'フォンドMGネイビー30', 'ELG3311NK', true, 1
FROM items WHERE item_code = 'ext-wall-colmostone-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmostone-premium-v3', 'フォンドMGホワイト30', 'ELG331NK', true, 2
FROM items WHERE item_code = 'ext-wall-colmostone-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmostone-premium-v4', 'フォンドMGブラウン30', 'ELG333NK', true, 3
FROM items WHERE item_code = 'ext-wall-colmostone-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmostone-premium-v5', 'フォンドMGアイボリー30', 'ELG336NK', true, 4
FROM items WHERE item_code = 'ext-wall-colmostone-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmostone-premium-v6', 'フォンドMGダークブラウン30', 'ELG338NK', true, 5
FROM items WHERE item_code = 'ext-wall-colmostone-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-colmostone-premium-v7', 'フォンドMGブラック30', 'ELG339NK', true, 6
FROM items WHERE item_code = 'ext-wall-colmostone-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-colmostone-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-colmostone-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- リーガストーン調 プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-reegastone-premium',
  'リーガストーン調 プレミアム',
  'ニチハ',
  'ELG34xNK',
  '窯業系サイディング',
  'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない',
  true,
  25,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-reegastone-premium-v1', 'ランダMGチャコール30', 'ELG342NK', true, 0
FROM items WHERE item_code = 'ext-wall-reegastone-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-reegastone-premium-v2', 'ランダMGホワイト30', 'ELG344NK', true, 1
FROM items WHERE item_code = 'ext-wall-reegastone-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-reegastone-premium-v3', 'ランダMGグレージュ30', 'ELG346NK', true, 2
FROM items WHERE item_code = 'ext-wall-reegastone-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-reegastone-premium-v4', 'ランダMGネロ30', 'ELG347NK', true, 3
FROM items WHERE item_code = 'ext-wall-reegastone-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-reegastone-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-reegastone-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- リントロック調 プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-lintrock-premium',
  'リントロック調 プレミアム',
  'ニチハ',
  'ELG18xNK',
  '窯業系サイディング',
  'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない',
  true,
  26,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-lintrock-premium-v1', 'ラクルMGホワイト30', 'ELG181NK', true, 0
FROM items WHERE item_code = 'ext-wall-lintrock-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-lintrock-premium-v2', 'ラクルMGベージュ30', 'ELG182NK', true, 1
FROM items WHERE item_code = 'ext-wall-lintrock-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-lintrock-premium-v3', 'ラクルMGブラウン30', 'ELG183NK', true, 2
FROM items WHERE item_code = 'ext-wall-lintrock-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-lintrock-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-lintrock-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- マグート プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-magut-premium',
  'マグート プレミアム',
  'ニチハ',
  'ELG72xNK',
  '窯業系サイディング',
  'Fu-ge PREMIUM 横張のみの採用となります',
  true,
  27,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-magut-premium-v1', 'ルフィネMGクリアホワイト30', 'ELG721NK', true, 0
FROM items WHERE item_code = 'ext-wall-magut-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-magut-premium-v2', 'ルフィネMGグレー30', 'ELG723NK', true, 1
FROM items WHERE item_code = 'ext-wall-magut-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-magut-premium-v3', 'ルフィネMGブラック30', 'ELG724NK', true, 2
FROM items WHERE item_code = 'ext-wall-magut-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-magut-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-magut-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- フラーグ プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-frag-premium',
  'フラーグ プレミアム',
  'ニチハ',
  'ELG94xYK/FK',
  '窯業系サイディング',
  'Fu-ge PREMIUM 横張のみの採用となります',
  true,
  28,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-frag-premium-v1', 'プレスMGグレー30', 'ELG946YK', true, 0
FROM items WHERE item_code = 'ext-wall-frag-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-frag-premium-v2', 'プレスMGネイビー30', 'ELG947YK', true, 1
FROM items WHERE item_code = 'ext-wall-frag-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-frag-premium-v3', 'プレスMGホワイト30', 'ELG941FK', true, 2
FROM items WHERE item_code = 'ext-wall-frag-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-frag-premium-v4', 'プレスMGアイボリー30', 'ELG942FK', true, 3
FROM items WHERE item_code = 'ext-wall-frag-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-frag-premium-v5', 'プレスMGビター30', 'ELG945FK', true, 4
FROM items WHERE item_code = 'ext-wall-frag-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-frag-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-frag-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- フィーノ調 プレミアム (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-fino-premium',
  'フィーノ調 プレミアム',
  'ニチハ',
  'ELG38xFK',
  '窯業系サイディング',
  'Fu-ge PREMIUM 横張のみの採用となります',
  true,
  29,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-fino-premium-v1', 'フロストMGホワイト30', 'ELG386FK', true, 0
FROM items WHERE item_code = 'ext-wall-fino-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-fino-premium-v2', 'リベルMGクリアホワイト30', 'ELG3811FK', true, 1
FROM items WHERE item_code = 'ext-wall-fino-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-fino-premium-v3', 'パティMGホワイト30', 'ELG3812FK', true, 2
FROM items WHERE item_code = 'ext-wall-fino-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-fino-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-fino-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- フラットウォール (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-flatwall-premium',
  'フラットウォール',
  'ニチハ',
  'EPS24xNK',
  '窯業系サイディング',
  'Fu-ge PREMIUM 横張のみの採用となります',
  true,
  30,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-flatwall-premium-v1', 'アグレアMGピュアホワイト', 'EPS241NK', true, 0
FROM items WHERE item_code = 'ext-wall-flatwall-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-flatwall-premium-v2', 'プリミエMGホワイト', 'EPS242NK', true, 1
FROM items WHERE item_code = 'ext-wall-flatwall-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-flatwall-premium-v3', 'アグレアMGベージュ', 'EPS243NK', true, 2
FROM items WHERE item_code = 'ext-wall-flatwall-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-flatwall-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-flatwall-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ルビドフラット (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-rubidflat-premium',
  'ルビドフラット',
  'ニチハ',
  'EQG4xxEK/NK',
  '窯業系サイディング',
  'Fu-ge PREMIUM 横張のみの採用となります',
  true,
  31,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rubidflat-premium-v1', 'ルビドMGピュアホワイト', 'EQG415EK', true, 0
FROM items WHERE item_code = 'ext-wall-rubidflat-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rubidflat-premium-v2', 'ルビドMGオリアンホワイト', 'EQG416EK', true, 1
FROM items WHERE item_code = 'ext-wall-rubidflat-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rubidflat-premium-v3', 'ルビドMGパステルグレー', 'EQG417EK', true, 2
FROM items WHERE item_code = 'ext-wall-rubidflat-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rubidflat-premium-v4', 'ルビドMGパールグレー', 'EQG418EK', true, 3
FROM items WHERE item_code = 'ext-wall-rubidflat-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rubidflat-premium-v5', 'ルビドMGエアホワイト', 'EQG419NK', true, 4
FROM items WHERE item_code = 'ext-wall-rubidflat-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rubidflat-premium-v6', 'ルビドMGエアグレー', 'EQG4110NK', true, 5
FROM items WHERE item_code = 'ext-wall-rubidflat-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rubidflat-premium-v7', 'ルビドMGエアブラウン', 'EQG4111NK', true, 6
FROM items WHERE item_code = 'ext-wall-rubidflat-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-rubidflat-premium-v8', 'ルビドMGエアブラック', 'EQG4112NK', true, 7
FROM items WHERE item_code = 'ext-wall-rubidflat-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-rubidflat-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-rubidflat-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- トリル (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-trill-premium',
  'トリル',
  'ニチハ',
  'EPA32xGK/TK',
  '窯業系サイディング',
  'Fu-ge PREMIUM 横張のみの採用となります',
  true,
  32,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-trill-premium-v1', 'リベルMGクリアホワイトII', 'EPA321GK', true, 0
FROM items WHERE item_code = 'ext-wall-trill-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-trill-premium-v2', 'プリミエMGホワイト', 'EPA322GK', true, 1
FROM items WHERE item_code = 'ext-wall-trill-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-trill-premium-v3', 'カルモMGシルバー', 'EPA324GK', true, 2
FROM items WHERE item_code = 'ext-wall-trill-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-trill-premium-v4', 'フレスコMGネイビー', 'EPA3213GK', true, 3
FROM items WHERE item_code = 'ext-wall-trill-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-trill-premium-v5', 'ノーマMGチャコール', 'EPA326TK', true, 4
FROM items WHERE item_code = 'ext-wall-trill-premium'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-trill-premium-v6', 'フィグMGレッド', 'EPA329GK', true, 5
FROM items WHERE item_code = 'ext-wall-trill-premium'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-trill-premium' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-trill-premium' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- COOL イルミオ (ニチハ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-cool-illuminio',
  'COOL イルミオ',
  'ニチハ',
  'EFM5xxP/E・EJM5xxE',
  '窯業系サイディング',
  'COOL 遮熱性能付き外壁 芋目地・馬目地を選択可',
  true,
  33,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cool-illuminio-v1', 'メレホワイト', 'EFM508P', true, 0
FROM items WHERE item_code = 'ext-wall-cool-illuminio'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cool-illuminio-v2', 'メレグレー', 'EFM509P', true, 1
FROM items WHERE item_code = 'ext-wall-cool-illuminio'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cool-illuminio-v3', 'メレブラウン', 'EFM510P', true, 2
FROM items WHERE item_code = 'ext-wall-cool-illuminio'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cool-illuminio-v4', 'メレブラック', 'EFM511P', true, 3
FROM items WHERE item_code = 'ext-wall-cool-illuminio'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cool-illuminio-v5', 'イルミオホワイト', 'EFM501E', true, 4
FROM items WHERE item_code = 'ext-wall-cool-illuminio'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cool-illuminio-v6', 'イルミオアイボリー', 'EFM502E', true, 5
FROM items WHERE item_code = 'ext-wall-cool-illuminio'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cool-illuminio-v7', 'イルミオライトグレー', 'EFM503E', true, 6
FROM items WHERE item_code = 'ext-wall-cool-illuminio'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cool-illuminio-v8', 'グラニットホワイト', 'EJM501E', true, 7
FROM items WHERE item_code = 'ext-wall-cool-illuminio'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cool-illuminio-v9', 'ウェーブブラウン', 'EJM502E', true, 8
FROM items WHERE item_code = 'ext-wall-cool-illuminio'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-cool-illuminio' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-cool-illuminio' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ハーモレイド (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-harmolade',
  'ハーモレイド',
  'KMEW',
  'NH520x',
  '窯業系サイディング',
  'ネオロック・光セラ18 18mm厚 横張のみ',
  true,
  34,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-harmolade-v1', 'QFマーチ チタン ホワイト', 'NH5201', true, 0
FROM items WHERE item_code = 'ext-wall-harmolade'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-harmolade-v2', 'QFコンフォート チタン ベージュ', 'NH5202', true, 1
FROM items WHERE item_code = 'ext-wall-harmolade'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-harmolade-v3', 'QFコンフォート チタン ブラウン', 'NH5203', true, 2
FROM items WHERE item_code = 'ext-wall-harmolade'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-harmolade-v4', 'QFブリュエ チタン ブラック', 'NH5204', true, 3
FROM items WHERE item_code = 'ext-wall-harmolade'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-harmolade' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-harmolade' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- モダンスリット18 (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-modernslit18',
  'モダンスリット18',
  'KMEW',
  'NH544x',
  '窯業系サイディング',
  'ネオロック・光セラ18 18mm厚 横張のみ',
  true,
  35,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-modernslit18-v1', 'QFシルク チタン ホワイト', 'NH5441', true, 0
FROM items WHERE item_code = 'ext-wall-modernslit18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-modernslit18-v2', 'QFアトランティック チタン ブルー', 'NH5445', true, 1
FROM items WHERE item_code = 'ext-wall-modernslit18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-modernslit18-v3', 'QFシルク チタン グレー', 'NH5447', true, 2
FROM items WHERE item_code = 'ext-wall-modernslit18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-modernslit18-v4', 'QFダーククロースト チタン ブラウン', 'NH5449', true, 3
FROM items WHERE item_code = 'ext-wall-modernslit18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-modernslit18-v5', 'QFチャコール チタン ブラック', 'NH54410', true, 4
FROM items WHERE item_code = 'ext-wall-modernslit18'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-modernslit18' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-modernslit18' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- レスティ (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-resty',
  'レスティ',
  'KMEW',
  'NH523xU',
  '窯業系サイディング',
  'ネオロック・光セラ18 18mm厚 横張のみ',
  true,
  36,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-resty-v1', 'QFミルキー チタン ホワイト', 'NH5231U', true, 0
FROM items WHERE item_code = 'ext-wall-resty'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-resty-v2', 'QFアッシュ チタン ベージュ', 'NH5232U', true, 1
FROM items WHERE item_code = 'ext-wall-resty'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-resty-v3', 'QFマックス チタン ホワイト', 'NH5234U', true, 2
FROM items WHERE item_code = 'ext-wall-resty'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-resty-v4', 'QFダスキー チタン ブルー', 'NH5235U', true, 3
FROM items WHERE item_code = 'ext-wall-resty'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-resty' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-resty' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ニューインプレース18 (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-newimplace18',
  'ニューインプレース18',
  'KMEW',
  'NH564xA',
  '窯業系サイディング',
  'ネオロック・光セラ18 セラトピア 18mm厚',
  true,
  37,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-newimplace18-v1', 'QFインプレース チタン ホワイト', 'NH5641A', true, 0
FROM items WHERE item_code = 'ext-wall-newimplace18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-newimplace18-v2', 'QFインプレース チタン ブラウン', 'NH5642A', true, 1
FROM items WHERE item_code = 'ext-wall-newimplace18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-newimplace18-v3', 'QFインプレース チタン グレー', 'NH5643A', true, 2
FROM items WHERE item_code = 'ext-wall-newimplace18'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-newimplace18' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-newimplace18' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 木枠コンクリート調18 (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-kiwaku-concrete18',
  '木枠コンクリート調18',
  'KMEW',
  'NH576xA',
  '窯業系サイディング',
  'ネオロック・光セラ18 セラトピア 18mm厚 横張のみ',
  true,
  38,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-kiwaku-concrete18-v1', 'QF木枠 チタン ライトグレー', 'NH5761A', true, 0
FROM items WHERE item_code = 'ext-wall-kiwaku-concrete18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-kiwaku-concrete18-v2', 'QF木枠 チタン ウォームグレー', 'NH5762A', true, 1
FROM items WHERE item_code = 'ext-wall-kiwaku-concrete18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-kiwaku-concrete18-v3', 'QF木枠 チタン ミドルグレー', 'NH5763A', true, 2
FROM items WHERE item_code = 'ext-wall-kiwaku-concrete18'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-kiwaku-concrete18' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-kiwaku-concrete18' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- フィエルテ (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-fierute',
  'フィエルテ',
  'KMEW',
  'NH497xA',
  '窯業系サイディング',
  'FLAT DESIGN PANEL 横張のみ',
  true,
  39,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-fierute-v1', 'QFフィエルテ チタン コンクリート', 'NH4971A', true, 0
FROM items WHERE item_code = 'ext-wall-fierute'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-fierute-v2', 'QFフィエルテ チタン アイロン', 'NH4976A', true, 1
FROM items WHERE item_code = 'ext-wall-fierute'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-fierute-v3', 'QFフィエルテ チタン リトスオヤ', 'NH4978A', true, 2
FROM items WHERE item_code = 'ext-wall-fierute'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-fierute-v4', 'QFフィエルテ チタン マーブル', 'NH4975A', true, 3
FROM items WHERE item_code = 'ext-wall-fierute'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-fierute-v5', 'QFフィエルテ チタン ダークコンクリート', 'NH49711A', true, 4
FROM items WHERE item_code = 'ext-wall-fierute'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-fierute' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-fierute' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- シンプルストライプ (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-simplestripe',
  'シンプルストライプ',
  'KMEW',
  'NH588xU',
  '窯業系サイディング',
  'ネオロック・光セラ18 18mm厚 横張のみ',
  true,
  40,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-simplestripe-v1', 'QFシルク チタン ホワイト', 'NH5882U', true, 0
FROM items WHERE item_code = 'ext-wall-simplestripe'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-simplestripe-v2', 'QFダスキー チタン グレー', 'NH5883U', true, 1
FROM items WHERE item_code = 'ext-wall-simplestripe'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-simplestripe-v3', 'QFアッシュ チタン グリーン', 'NH5884U', true, 2
FROM items WHERE item_code = 'ext-wall-simplestripe'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-simplestripe-v4', 'QFアトランティック チタン ブルー', 'NH5885U', true, 3
FROM items WHERE item_code = 'ext-wall-simplestripe'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-simplestripe-v5', 'QFチャコール チタン ブラック', 'NH5886U', true, 4
FROM items WHERE item_code = 'ext-wall-simplestripe'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-simplestripe-v6', 'QFマックス チタン ブラック', 'NH5887U', true, 5
FROM items WHERE item_code = 'ext-wall-simplestripe'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-simplestripe' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-simplestripe' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- シックイフラット (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-shikkuiflat',
  'シックイフラット',
  'KMEW',
  'EH753xH',
  '窯業系サイディング',
  'エクセレージ・光セラ15 横張のみ',
  true,
  41,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shikkuiflat-v1', 'QFラント チタン ホワイト', 'EH7531H', true, 0
FROM items WHERE item_code = 'ext-wall-shikkuiflat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shikkuiflat-v2', 'QFゼレノ チタン グレージュ', 'EH7532H', true, 1
FROM items WHERE item_code = 'ext-wall-shikkuiflat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shikkuiflat-v3', 'QFラント チタン ダークグレー', 'EH7533H', true, 2
FROM items WHERE item_code = 'ext-wall-shikkuiflat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shikkuiflat-v4', 'QFゼレノ チタン ディープグレー', 'EH7534H', true, 3
FROM items WHERE item_code = 'ext-wall-shikkuiflat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shikkuiflat-v5', 'QFゼレノ チタン ブラウニーブラック', 'EH7535H', true, 4
FROM items WHERE item_code = 'ext-wall-shikkuiflat'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shikkuiflat-v6', 'QFアルバ チタン ブラック', 'EH7536H', true, 5
FROM items WHERE item_code = 'ext-wall-shikkuiflat'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-shikkuiflat' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-shikkuiflat' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- カンタービレ (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-cantabile',
  'カンタービレ',
  'KMEW',
  'NH592xA',
  '窯業系サイディング',
  'ネオロック・光セラ18 18mm厚',
  true,
  42,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cantabile-v1', 'QFシルク チタン ホワイト', 'NH5921A', true, 0
FROM items WHERE item_code = 'ext-wall-cantabile'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cantabile-v2', 'QFテンダー チタン ベージュ', 'NH5922A', true, 1
FROM items WHERE item_code = 'ext-wall-cantabile'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cantabile-v3', 'QFシルク チタン グレー', 'NH5923A', true, 2
FROM items WHERE item_code = 'ext-wall-cantabile'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cantabile-v4', 'QFミッド チタン グレー', 'NH5924A', true, 3
FROM items WHERE item_code = 'ext-wall-cantabile'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cantabile-v5', 'QFダスキー チタン グレー', 'NH5925A', true, 4
FROM items WHERE item_code = 'ext-wall-cantabile'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-cantabile-v6', 'QFプリント チタン ブラック', 'NH5926A', true, 5
FROM items WHERE item_code = 'ext-wall-cantabile'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-cantabile' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-cantabile' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- アルテミュール (KONOSHIMA)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-artemur',
  'アルテミュール',
  'KONOSHIMA',
  'ARTE-RCx-GC',
  '窯業系サイディング',
  'アルテミュール 木目調外壁',
  true,
  43,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-artemur-v1', 'レッドシダーナチュラルGC', '8.8YR 6.3/3.4', true, 0
FROM items WHERE item_code = 'ext-wall-artemur'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-artemur-v2', 'レッドシダーエイジングGC', '7.9YR 4.7/5.3', true, 1
FROM items WHERE item_code = 'ext-wall-artemur'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-artemur-v3', 'オークナチュラルGC', '8.9YR 7.2/3.9', true, 2
FROM items WHERE item_code = 'ext-wall-artemur'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-artemur-v4', 'オークヴィンテージGC', '8.5YR 6/0.5', true, 3
FROM items WHERE item_code = 'ext-wall-artemur'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-artemur-v5', 'ウォルナットナチュラルGC', '6.4YR 4.3/1.8', true, 4
FROM items WHERE item_code = 'ext-wall-artemur'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-artemur-v6', 'ウォルナットダークGC', '6.3YR 3.8/1.7', true, 5
FROM items WHERE item_code = 'ext-wall-artemur'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-artemur' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-artemur' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- SPビレクト (IG工業)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-sp-birect',
  'SPビレクト',
  'IG工業',
  'SPI1-xxx',
  'ガルバリウム鋼板',
  '金属サイディング 変褪色・穴あき・赤さび10年保証 横張のみ採用可能 HOURS:アクセント面のみ標準（1色のみ）/LACIE:全面標準',
  true,
  44,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v1', 'Fマットブラック', 'Fマットブラック', true, 0
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v2', 'Fネオホワイト', 'Fネオホワイト', true, 1
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v3', 'Fモスグリーン', 'Fモスグリーン', true, 2
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v4', 'マットブラック', 'SPI1-301', true, 3
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v5', 'クールブラウン', 'SPI1-383', true, 4
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v6', 'クールネイビー', 'SPI1-384', true, 5
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v7', 'モスグリーン', 'SPI1-394', true, 6
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v8', 'スマートガンメタ', 'SPI1-305', true, 7
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v9', 'ダークグレー', 'SPI1-315', true, 8
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v10', 'ライトアッシュ', 'SPI1-318', true, 9
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-sp-birect-v11', 'ネオホワイト', 'SPI1-370', true, 10
FROM items WHERE item_code = 'ext-wall-sp-birect'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sp-birect' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sp-birect' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 9500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sp-birect' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 9500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-sp-birect' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ガルスパン (IG工業)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-galuspan',
  'ガルスパン',
  'IG工業',
  'SPJ1-xxx',
  'ガルバリウム鋼板',
  '金属サイディング 変褪色・穴あき・赤さび10年保証 横張のみ採用可能 HOURS:アクセント面のみ標準（1色のみ）/LACIE:全面標準',
  true,
  45,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v1', 'ネオブラック', 'SPJ1-310', true, 0
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v2', 'ビターブラウン', 'SPJ1-358', true, 1
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v3', 'グランブルー', 'SPJ1-387', true, 2
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v4', 'モスグリーン', 'SPJ1-394', true, 3
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v5', 'シャンパンメタリック', 'SPJ1-393', true, 4
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v6', 'シルバーメタリック', 'SPJ1-306', true, 5
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v7', 'ダークメタリック', 'SPJ1-380', true, 6
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v8', 'チタングレーメタリック', 'SPJ1-391', true, 7
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v9', 'オータムレッド', 'SPJ1-361', true, 8
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v10', 'カスタードイエロー', 'SPJ1-355', true, 9
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v11', 'ミストアイボリー', 'SPJ1-337', true, 10
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-galuspan-v12', 'ネオホワイト', 'SPJ1-370', true, 11
FROM items WHERE item_code = 'ext-wall-galuspan'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-galuspan' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-galuspan' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 9500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-galuspan' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 9500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-galuspan' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 新フラット16 (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-shin-flat16',
  '新フラット16',
  'KMEW',
  'EH74xxK',
  '窯業系サイディング',
  'エクセレージ・光セラ16 16mm厚',
  true,
  46,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v1', 'サテン チタン ホワイト', 'EH7483K', true, 0
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v2', 'シルク チタン ホワイト', 'EH7484K', true, 1
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v3', 'アッシュ チタン ベージュ', 'EH7485K', true, 2
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v4', 'シルバー チタン グレー', 'EH7487K', true, 3
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v5', 'スロー チタン グレー', 'EH7486K', true, 4
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v6', 'ナチュラル チタン グレー', 'EH7488K', true, 5
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v7', 'グレー チタン ベージュ', 'EH7489K', true, 6
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v8', 'シルク チタン グレー', 'EH74810K', true, 7
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v9', 'フリント チタン ブラック', 'EH74818K', true, 8
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v10', 'ストレート チタン グレー', 'EH74819K', true, 9
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v11', 'モス チタン グリーン', 'EH74812K', true, 10
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v12', 'アッシュ チタン グリーン', 'EH74815K', true, 11
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-shin-flat16-v13', 'ベルベット チタン ブラウン', 'EH74817K', true, 12
FROM items WHERE item_code = 'ext-wall-shin-flat16'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-shin-flat16' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 4500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-shin-flat16' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ジョリパットネオ∞ エンシェントブリック (AICA)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-jolypate-ancient-brick',
  'ジョリパットネオ∞ エンシェントブリック',
  'AICA',
  'JQ-620',
  '塗り壁',
  'ジョリパットネオ∞ 塗装仕上げ 筋が出やすく目立つことがあります HOURS:アクセント面のみ標準（1色のみ）/LACIE:全面標準',
  true,
  47,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v1', 'T1010', '3.81Y 8.48/0.71', true, 0
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v2', 'T3001', '3.72GY 7.03/0.35', true, 1
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v3', 'T3005', '4.22Y 6.99/0.88', true, 2
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v4', 'T3009', '9.18YR 6.96/1.29', true, 3
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v5', 'T3010', '4.41Y 6.94/1.17', true, 4
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v6', 'T3400', '8.82Y 7.64/0.22', true, 5
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v7', 'T4001', '5.96GY 5.66/0.31', true, 6
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v8', 'T4024', '2.36Y 5.55/2.86', true, 7
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v9', 'T4403', '0.23G 5.50/0.17', true, 8
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v10', 'T5009', '9.12YR 4.62/0.83', true, 9
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v11', 'T5403', '4.60BG 4.44/0.2', true, 10
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-ancient-brick-v12', 'T6013', '1.68PB 3.49/0.23', true, 11
FROM items WHERE item_code = 'ext-wall-jolypate-ancient-brick'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-jolypate-ancient-brick' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-jolypate-ancient-brick' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-jolypate-ancient-brick' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-jolypate-ancient-brick' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ジョリパットネオ∞ ミーティア (AICA)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-jolypate-meteor',
  'ジョリパットネオ∞ ミーティア',
  'AICA',
  'JQ-620',
  '塗り壁',
  'ジョリパットネオ∞ 塗装仕上げ 筋が出やすく目立つことがあります HOURS:アクセント面のみ標準（1色のみ）/LACIE:全面標準',
  true,
  48,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v1', 'T1010', '3.81Y 8.48/0.71', true, 0
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v2', 'T3001', '3.72GY 7.03/0.35', true, 1
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v3', 'T3005', '4.22Y 6.99/0.88', true, 2
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v4', 'T3009', '9.18YR 6.96/1.29', true, 3
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v5', 'T3010', '4.41Y 6.94/1.17', true, 4
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v6', 'T3400', '8.82Y 7.64/0.22', true, 5
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v7', 'T4001', '5.96GY 5.66/0.31', true, 6
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v8', 'T4024', '2.36Y 5.55/2.86', true, 7
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v9', 'T4403', '0.23G 5.50/0.17', true, 8
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v10', 'T5009', '9.12YR 4.62/0.83', true, 9
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v11', 'T5403', '4.60BG 4.44/0.2', true, 10
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-jolypate-meteor-v12', 'T6013', '1.68PB 3.49/0.23', true, 11
FROM items WHERE item_code = 'ext-wall-jolypate-meteor'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-jolypate-meteor' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-jolypate-meteor' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-jolypate-meteor' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-jolypate-meteor' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- SOLIDO typeM_LAP (KMEW)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-wall-solido',
  'SOLIDO typeM_LAP',
  'KMEW',
  'SMGxxG',
  '窯業系サイディング',
  'SOLIDO 高級外壁材 HOURS/LACIE:5㎡以下は80,000円/式 LIFE+/LIFE:5㎡以下は110,000円/式',
  true,
  49,
  ARRAY['exterior-wall']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-solido-v1', '鉄黒（てつぐろ）', 'SMG72G', true, 0
FROM items WHERE item_code = 'ext-wall-solido'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-solido-v2', 'セメント', 'SMG85G', true, 1
FROM items WHERE item_code = 'ext-wall-solido'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-solido-v3', '錆茶（さびちゃ）', 'SMG21G', true, 2
FROM items WHERE item_code = 'ext-wall-solido'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-wall-solido-v4', '灰（はい）', 'SMG65G', true, 3
FROM items WHERE item_code = 'ext-wall-solido'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 17000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-solido' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 17000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-solido' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 21500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-solido' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 21500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-wall-solido' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- モルタル金鏝抑え (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-porch-mortar',
  'モルタル金鏝抑え',
  '標準',
  'MORTAR',
  NULL,
  '標準内外部ポーチサイズ：1.8m×1.8m 将来的に乾燥収縮により構造上支障のないヘアークラック（ひび割れ）がおこる可能性があります',
  true,
  50,
  ARRAY['porch']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-mortar-v1', 'モルタル仕上げ', 'モルタル', true, 0
FROM items WHERE item_code = 'ext-porch-mortar'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-mortar' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-mortar' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ネイチャーII (Nagoya mozaic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-porch-nature2',
  'ネイチャーII',
  'Nagoya mozaic',
  'MSY-R30xx',
  NULL,
  '300×300 標準内外部ポーチサイズ：1.8m×1.8m',
  true,
  51,
  ARRAY['porch']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-nature2-v1', 'MSY-R3010', 'MSY-R3010', true, 0
FROM items WHERE item_code = 'ext-porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-nature2-v2', 'MSY-R3020', 'MSY-R3020', true, 1
FROM items WHERE item_code = 'ext-porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-nature2-v3', 'MSY-R3030', 'MSY-R3030', true, 2
FROM items WHERE item_code = 'ext-porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-nature2-v4', 'MSY-R3040', 'MSY-R3040', true, 3
FROM items WHERE item_code = 'ext-porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-nature2-v5', 'MSY-R3050', 'MSY-R3050', true, 4
FROM items WHERE item_code = 'ext-porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-nature2-v6', 'MSY-R3070', 'MSY-R3070', true, 5
FROM items WHERE item_code = 'ext-porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-nature2-v7', 'MSY-R3080', 'MSY-R3080', true, 6
FROM items WHERE item_code = 'ext-porch-nature2'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-nature2-v8', 'MSY-R3090', 'MSY-R3090', true, 7
FROM items WHERE item_code = 'ext-porch-nature2'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-nature2' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-nature2' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ベスパ (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-porch-vespa',
  'ベスパ',
  'LIXIL',
  'IPF-300/VSP-xxx',
  NULL,
  '300×300 標準内外部ポーチサイズ：1.8m×1.8m',
  true,
  52,
  ARRAY['porch']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-vespa-v1', 'VSP-SA1', 'IPF-300/VSP-SA1', true, 0
FROM items WHERE item_code = 'ext-porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-vespa-v2', 'VSP-SA2', 'IPF-300/VSP-SA2', true, 1
FROM items WHERE item_code = 'ext-porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-vespa-v3', 'VSP-SA3', 'IPF-300/VSP-SA3', true, 2
FROM items WHERE item_code = 'ext-porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-vespa-v4', 'VSP-SL1', 'IPF-300/VSP-SL1', true, 3
FROM items WHERE item_code = 'ext-porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-vespa-v5', 'VSP-SL2', 'IPF-300/VSP-SL2', true, 4
FROM items WHERE item_code = 'ext-porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-vespa-v6', 'VSP-SL3', 'IPF-300/VSP-SL3', true, 5
FROM items WHERE item_code = 'ext-porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-vespa-v7', 'VSP-SL4', 'IPF-300/VSP-SL4', true, 6
FROM items WHERE item_code = 'ext-porch-vespa'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-vespa-v8', 'VSP-SL5', 'IPF-300/VSP-SL5', true, 7
FROM items WHERE item_code = 'ext-porch-vespa'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-vespa' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 22000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-vespa' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- メンフィス (LIXIL)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-porch-memphis',
  'メンフィス',
  'LIXIL',
  'IPF-600/MMP-xx',
  NULL,
  '600×600 / 600×300 標準内外部ポーチサイズ：1.8m×1.8m',
  true,
  53,
  ARRAY['porch']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-memphis-v1', 'MMP-11', 'IPF-600/MMP-11', true, 0
FROM items WHERE item_code = 'ext-porch-memphis'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-memphis-v2', 'MMP-12', 'IPF-600/MMP-12', true, 1
FROM items WHERE item_code = 'ext-porch-memphis'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-memphis-v3', 'MMP-13', 'IPF-600/MMP-13', true, 2
FROM items WHERE item_code = 'ext-porch-memphis'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-memphis-v4', 'MMP-14', 'IPF-600/MMP-14', true, 3
FROM items WHERE item_code = 'ext-porch-memphis'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-memphis-v5', 'MMP-15', 'IPF-600/MMP-15', true, 4
FROM items WHERE item_code = 'ext-porch-memphis'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-memphis' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 27000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-memphis' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ポーチサイズ拡張 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-porch-expansion',
  'ポーチサイズ拡張',
  '標準',
  'PORCH-EXP',
  NULL,
  '1.8m×1.8m以上の場合（1㎡未満拡張の場合も同額）',
  true,
  54,
  ARRAY['porch-size']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-expansion-v1', '拡張', '拡張', true, 0
FROM items WHERE item_code = 'ext-porch-expansion'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-expansion' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-expansion' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ランドストン (Nagoya mozaic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-porch-landstone',
  'ランドストン',
  'Nagoya mozaic',
  'CRD-X39xxG',
  NULL,
  '600×600 / 300×600 岩面 外装標準品からの変更差額',
  true,
  55,
  ARRAY['porch']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-landstone-v1', 'CRD-X3910G', 'CRD-X3910G', true, 0
FROM items WHERE item_code = 'ext-porch-landstone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-landstone-v2', 'CRD-X3920G', 'CRD-X3920G', true, 1
FROM items WHERE item_code = 'ext-porch-landstone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-landstone-v3', 'CRD-X3930G', 'CRD-X3930G', true, 2
FROM items WHERE item_code = 'ext-porch-landstone'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-landstone-v4', 'CRD-X3940G', 'CRD-X3940G', true, 3
FROM items WHERE item_code = 'ext-porch-landstone'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-landstone' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-landstone' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-landstone' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-landstone' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ピエトラソーニ (Nagoya mozaic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-porch-pietra-soni',
  'ピエトラソーニ',
  'Nagoya mozaic',
  'PAN-X81xxG',
  NULL,
  '600×600 / 300×600 粗目 外装標準品からの変更差額',
  true,
  56,
  ARRAY['porch']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-pietra-soni-v1', 'PAN-X8110G', 'PAN-X8110G', true, 0
FROM items WHERE item_code = 'ext-porch-pietra-soni'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-pietra-soni-v2', 'PAN-X8120G', 'PAN-X8120G', true, 1
FROM items WHERE item_code = 'ext-porch-pietra-soni'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-pietra-soni-v3', 'PAN-X8130G', 'PAN-X8130G', true, 2
FROM items WHERE item_code = 'ext-porch-pietra-soni'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-pietra-soni-v4', 'PAN-X8140G', 'PAN-X8140G', true, 3
FROM items WHERE item_code = 'ext-porch-pietra-soni'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-pietra-soni-v5', 'PAN-X8150G', 'PAN-X8150G', true, 4
FROM items WHERE item_code = 'ext-porch-pietra-soni'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-pietra-soni' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 5000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-pietra-soni' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-pietra-soni' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 32000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-pietra-soni' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ポーチタイル目地色 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-porch-grout',
  'ポーチタイル目地色',
  '標準',
  'GROUT-PORCH',
  NULL,
  'ポーチタイル選択時に目地色を選択（タイル施工費に含む）※おすすめ: 明るめのタイルには白系、暗めのタイルには灰色系',
  true,
  57,
  ARRAY['porch-grout']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-grout-v1', '①白（オススメ）', '#FFFFFF', true, 0
FROM items WHERE item_code = 'ext-porch-grout'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-grout-v2', '②濃い灰色', '#4A4A4A', true, 1
FROM items WHERE item_code = 'ext-porch-grout'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-grout-v3', '③こげ茶', '#4A3728', true, 2
FROM items WHERE item_code = 'ext-porch-grout'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-grout-v4', '④ベージュ', '#D4C4A8', true, 3
FROM items WHERE item_code = 'ext-porch-grout'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-porch-grout-v5', '⑤薄い灰色（オススメ）', '#B8B8B8', true, 4
FROM items WHERE item_code = 'ext-porch-grout'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-grout' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-grout' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-grout' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-porch-grout' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ニスクカラーSGL (日鉄鋼板)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-roof-nisc',
  'ニスクカラーSGL',
  '日鉄鋼板',
  'NM-8697',
  NULL,
  '材料標準保証規格10年 国土交通大臣認定不燃材料 海岸500m以遠原板の穴あき25年保証',
  true,
  58,
  ARRAY['roof']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-roof-nisc-v1', 'Sブラック', 'ブラック', true, 0
FROM items WHERE item_code = 'ext-roof-nisc'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-roof-nisc' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-roof-nisc' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 外部配管 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-pipe',
  '外部配管',
  '標準',
  'EXT-PIPE',
  '外部配管',
  '外部配管カラーは単色グレーのみ',
  true,
  59,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-pipe-v1', 'グレー', 'グレー', true, 0
FROM items WHERE item_code = 'ext-pipe'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-pipe' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-pipe' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 破風 EP塗装 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-fascia',
  '破風 EP塗装',
  '標準',
  'FASCIA-EP',
  NULL,
  '軒を延長する場合、取り付けが必要になります',
  true,
  60,
  ARRAY['fascia']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-fascia-v1', 'ホワイト', 'ホワイト', true, 0
FROM items WHERE item_code = 'ext-fascia'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-fascia-v2', 'ブラック', 'ブラック', true, 1
FROM items WHERE item_code = 'ext-fascia'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-fascia' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-fascia' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ファインスケアNF-I型 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-gutter-horizontal',
  'ファインスケアNF-I型',
  'Panasonic',
  'MQFxxxx',
  NULL,
  '軒樋（横樋）',
  true,
  61,
  ARRAY['gutter']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-horizontal-v1', 'ミルクホワイト', 'MQF0180J', true, 0
FROM items WHERE item_code = 'ext-gutter-horizontal'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-horizontal-v2', 'パールグレー（しろ）', 'MQF1180J', true, 1
FROM items WHERE item_code = 'ext-gutter-horizontal'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-horizontal-v3', 'しんちゃ', 'MQF5180', true, 2
FROM items WHERE item_code = 'ext-gutter-horizontal'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-horizontal-v4', 'ブラック', 'MQF6180J', true, 3
FROM items WHERE item_code = 'ext-gutter-horizontal'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-horizontal-v5', 'モダンベージュ', 'MQFX180J', true, 4
FROM items WHERE item_code = 'ext-gutter-horizontal'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-horizontal-v6', 'オークブラウン', 'MQFZ180J', true, 5
FROM items WHERE item_code = 'ext-gutter-horizontal'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gutter-horizontal' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gutter-horizontal' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- S30 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-gutter-vertical',
  'S30',
  'Panasonic',
  'KBPxxxx',
  NULL,
  '竪樋（縦樋）',
  true,
  62,
  ARRAY['gutter']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-vertical-v1', 'ミルクホワイト', 'KBP0261K', true, 0
FROM items WHERE item_code = 'ext-gutter-vertical'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-vertical-v2', 'パールグレー（しろ）', 'KBP1261K', true, 1
FROM items WHERE item_code = 'ext-gutter-vertical'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-vertical-v3', 'しんちゃ', 'KBP5261K', true, 2
FROM items WHERE item_code = 'ext-gutter-vertical'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-vertical-v4', 'ブラック', 'KBP6261K', true, 3
FROM items WHERE item_code = 'ext-gutter-vertical'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-vertical-v5', 'モダンベージュ', 'KBPX261K', true, 4
FROM items WHERE item_code = 'ext-gutter-vertical'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gutter-vertical-v6', 'オークブラウン', 'KBPZ261K', true, 5
FROM items WHERE item_code = 'ext-gutter-vertical'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gutter-vertical' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gutter-vertical' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エンボス (神島化学)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-soffit-emboss',
  'エンボス',
  '神島化学',
  'EMBOSS',
  NULL,
  '軒天材',
  true,
  63,
  ARRAY['soffit']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-emboss-v1', 'Wファリーホワイト', 'Wファリーホワイト', true, 0
FROM items WHERE item_code = 'ext-soffit-emboss'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-emboss-v2', 'Wエストアイボリー', 'Wエストアイボリー', true, 1
FROM items WHERE item_code = 'ext-soffit-emboss'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-emboss-v3', 'Wファインステン', 'Wファインステン', true, 2
FROM items WHERE item_code = 'ext-soffit-emboss'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-emboss-v4', 'Wエボニーブラウン', 'Wエボニーブラウン', true, 3
FROM items WHERE item_code = 'ext-soffit-emboss'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-emboss-v5', 'Wチャコールブラック', 'Wチャコールブラック', true, 4
FROM items WHERE item_code = 'ext-soffit-emboss'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-soffit-emboss' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-soffit-emboss' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ラフォーレソレイユ (神島化学)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-soffit-laforet-soleil',
  'ラフォーレソレイユ',
  '神島化学',
  'LAFORET-SOLEIL',
  NULL,
  '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可',
  true,
  64,
  ARRAY['soffit']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-laforet-soleil-v1', 'グレイッシュシダー', 'グレイッシュシダー', true, 0
FROM items WHERE item_code = 'ext-soffit-laforet-soleil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-laforet-soleil-v2', 'ナチュラルダーク', 'ナチュラルダーク', true, 1
FROM items WHERE item_code = 'ext-soffit-laforet-soleil'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-laforet-soleil-v3', 'ウォルナット', 'ウォルナット', true, 2
FROM items WHERE item_code = 'ext-soffit-laforet-soleil'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-soffit-laforet-soleil' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-soffit-laforet-soleil' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ラフォーレティンバー (神島化学)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-soffit-laforet-timber',
  'ラフォーレティンバー',
  '神島化学',
  'LAFORET-TIMBER',
  NULL,
  '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可',
  true,
  65,
  ARRAY['soffit']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-laforet-timber-v1', 'スモーキイエロー', 'スモーキイエロー', true, 0
FROM items WHERE item_code = 'ext-soffit-laforet-timber'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-laforet-timber-v2', 'キャラメルブラウン', 'キャラメルブラウン', true, 1
FROM items WHERE item_code = 'ext-soffit-laforet-timber'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-laforet-timber-v3', 'レッドブラウン', 'レッドブラウン', true, 2
FROM items WHERE item_code = 'ext-soffit-laforet-timber'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-laforet-timber-v4', 'チャコール', 'チャコール', true, 3
FROM items WHERE item_code = 'ext-soffit-laforet-timber'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-soffit-laforet-timber' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-soffit-laforet-timber' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- アルテザート (KONOSHIMA)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-soffit-artezart',
  'アルテザート',
  'KONOSHIMA',
  'ARTE-RCN',
  '窯業系サイディング',
  '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可。5㎡までは80,000円/式',
  true,
  66,
  ARRAY['soffit']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-artezart-v1', 'レッドシダーナチュラル', 'レッドシダーナチュラル', true, 0
FROM items WHERE item_code = 'ext-soffit-artezart'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-artezart-v2', 'レッドシダーエイジング', 'レッドシダーエイジング', true, 1
FROM items WHERE item_code = 'ext-soffit-artezart'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-artezart-v3', 'オークナチュラル', 'オークナチュラル', true, 2
FROM items WHERE item_code = 'ext-soffit-artezart'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-artezart-v4', 'オークヴィンテージ', 'オークヴィンテージ', true, 3
FROM items WHERE item_code = 'ext-soffit-artezart'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-artezart-v5', 'ウォルナットナチュラル', 'ウォルナットナチュラル', true, 4
FROM items WHERE item_code = 'ext-soffit-artezart'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-soffit-artezart-v6', 'ウォルナットダーク', 'ウォルナットダーク', true, 5
FROM items WHERE item_code = 'ext-soffit-artezart'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 18000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-soffit-artezart' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 18000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-soffit-artezart' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- アルフィン庇 AD2S (アルフィン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-awning-alfin-ad2s',
  'アルフィン庇 AD2S',
  'アルフィン',
  'AD2S',
  NULL,
  'W1800×D900',
  true,
  67,
  ARRAY['awning']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-ad2s-v1', 'ステンカラー', 'ステンカラー', true, 0
FROM items WHERE item_code = 'ext-awning-alfin-ad2s'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-ad2s-v2', 'シルバー', 'シルバー', true, 1
FROM items WHERE item_code = 'ext-awning-alfin-ad2s'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-ad2s-v3', 'ブラック', 'ブラック', true, 2
FROM items WHERE item_code = 'ext-awning-alfin-ad2s'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 258000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-alfin-ad2s' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 258000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-alfin-ad2s' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 258000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-alfin-ad2s' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 258000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-alfin-ad2s' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- アルフィン庇 AF95シリーズ 木目調仕上げ (アルフィン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-awning-alfin-af95',
  'アルフィン庇 AF95シリーズ 木目調仕上げ',
  'アルフィン',
  'AF95',
  NULL,
  'W1800×D950 屋根部カラー×軒天面カラーの組み合わせ（16パターン）',
  true,
  68,
  ARRAY['awning']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v01', 'ステンカラー×ヒッコリー', 'ステンカラー×ヒッコリー', true, 0
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v02', 'ステンカラー×ウォルナット', 'ステンカラー×ウォルナット', true, 1
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v03', 'ステンカラー×チーク', 'ステンカラー×チーク', true, 2
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v04', 'ステンカラー×ナラ', 'ステンカラー×ナラ', true, 3
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v05', 'シルバー×ヒッコリー', 'シルバー×ヒッコリー', true, 4
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v06', 'シルバー×ウォルナット', 'シルバー×ウォルナット', true, 5
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v07', 'シルバー×チーク', 'シルバー×チーク', true, 6
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v08', 'シルバー×ナラ', 'シルバー×ナラ', true, 7
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v09', 'ブロンズ×ヒッコリー', 'ブロンズ×ヒッコリー', true, 8
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v10', 'ブロンズ×ウォルナット', 'ブロンズ×ウォルナット', true, 9
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v11', 'ブロンズ×チーク', 'ブロンズ×チーク', true, 10
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v12', 'ブロンズ×ナラ', 'ブロンズ×ナラ', true, 11
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v13', 'ブラック×ヒッコリー', 'ブラック×ヒッコリー', true, 12
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v14', 'ブラック×ウォルナット', 'ブラック×ウォルナット', true, 13
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v15', 'ブラック×チーク', 'ブラック×チーク', true, 14
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-alfin-af95-v16', 'ブラック×ナラ', 'ブラック×ナラ', true, 15
FROM items WHERE item_code = 'ext-awning-alfin-af95'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 352000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-alfin-af95' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 352000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-alfin-af95' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 352000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-alfin-af95' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 352000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-alfin-af95' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 庇不要 (不要)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-awning-none',
  '庇不要',
  '不要',
  'AWNING-NONE',
  NULL,
  '庇を設置しない場合',
  true,
  69,
  ARRAY['awning']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-awning-none-v1', '不要', '不要', true, 0
FROM items WHERE item_code = 'ext-awning-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-awning-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- サンオートハイスピード (三和シャッター)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-garage-shutter-sunauto',
  'サンオートハイスピード',
  '三和シャッター',
  'SUNAUTO-HS',
  NULL,
  '非防火/施工費込み W2550×H2200 巻き取り式 開放約13秒 障害物検知装置付き 防火仕様+60,000円 ブラック塗装+60,000円',
  true,
  70,
  ARRAY['garage-shutter']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-sunauto-v1', 'サンド', 'カラー鋼板', true, 0
FROM items WHERE item_code = 'ext-garage-shutter-sunauto'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-sunauto-v2', 'ライトグレー', 'カラー鋼板', true, 1
FROM items WHERE item_code = 'ext-garage-shutter-sunauto'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-sunauto-v3', 'ホワイト', 'カラー鋼板', true, 2
FROM items WHERE item_code = 'ext-garage-shutter-sunauto'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-sunauto-v4', 'クールシルバー', '高耐食カラー鋼板', true, 3
FROM items WHERE item_code = 'ext-garage-shutter-sunauto'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-sunauto-v5', 'ビンテージウォールナット', '樹脂フィルム化粧鋼板', true, 4
FROM items WHERE item_code = 'ext-garage-shutter-sunauto'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 540000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-sunauto' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 540000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-sunauto' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 540000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-sunauto' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 540000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-sunauto' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 威風堂々 (三和シャッター)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-garage-shutter-ifudo',
  '威風堂々',
  '三和シャッター',
  'IFUDO',
  NULL,
  '非防火/施工費込み W2550×H2200 オーバースライダー 開放約10秒 障害物検知装置付き ピンチレスパネル採用 防火仕様+60,000円 木目調カラー+660,000円',
  true,
  71,
  ARRAY['garage-shutter']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-ifudo-v1', 'ステンカラー', 'ステンカラー', true, 0
FROM items WHERE item_code = 'ext-garage-shutter-ifudo'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-ifudo-v2', 'シルバー', 'シルバー', true, 1
FROM items WHERE item_code = 'ext-garage-shutter-ifudo'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-ifudo-v3', 'ウォールナット', '木目調', true, 2
FROM items WHERE item_code = 'ext-garage-shutter-ifudo'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-ifudo-v4', 'オーシャンチーク', '木目調', true, 3
FROM items WHERE item_code = 'ext-garage-shutter-ifudo'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-ifudo-v5', 'スイングナット', '木目調', true, 4
FROM items WHERE item_code = 'ext-garage-shutter-ifudo'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-ifudo-v6', 'シャーメープル', '木目調', true, 5
FROM items WHERE item_code = 'ext-garage-shutter-ifudo'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1290000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-ifudo' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1290000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-ifudo' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1290000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-ifudo' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1290000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-ifudo' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ガレージシャッター不要 (不要)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-garage-shutter-none',
  'ガレージシャッター不要',
  '不要',
  'GARAGE-NONE',
  NULL,
  'ガレージシャッターを設置しない場合',
  true,
  72,
  ARRAY['garage-shutter']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-garage-shutter-none-v1', '不要', '不要', true, 0
FROM items WHERE item_code = 'ext-garage-shutter-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-garage-shutter-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- APW330（樹脂サッシ・ペアガラス） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-type-apw330',
  'APW330（樹脂サッシ・ペアガラス）',
  'YKKAP',
  'APW330',
  NULL,
  '樹脂サッシ アルゴンガス ペアガラス 熱貫流率1.31W/(㎡・K)',
  true,
  73,
  ARRAY['window-type']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-type-apw330-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-type-apw330'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-type-apw330' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-type-apw330' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- APW430（樹脂サッシ・トリプルガラス） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-type-apw430',
  'APW430（樹脂サッシ・トリプルガラス）',
  'YKKAP',
  'APW430',
  NULL,
  '樹脂サッシ トリプルガラス 熱貫流率0.90W/(㎡・K) より高い断熱性能',
  true,
  74,
  ARRAY['window-type']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-type-apw430-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-type-apw430'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-type-apw430' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-type-apw430' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- APW330 (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-apw330',
  'APW330',
  'YKKAP',
  'APW330',
  NULL,
  '樹脂サッシ アルゴンガス ペアガラス 熱貫流率1.31W/(㎡・K) 防火仕様1.55W/(㎡・K) 外観色4色×内観色5色の組み合わせ',
  true,
  75,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw330-v1', 'ホワイト（外観）', 'ホワイト', true, 0
FROM items WHERE item_code = 'ext-window-apw330'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw330-v2', 'プラチナステン（外観）', 'プラチナステン', true, 1
FROM items WHERE item_code = 'ext-window-apw330'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw330-v3', 'ブラウン（外観）', 'ブラウン', true, 2
FROM items WHERE item_code = 'ext-window-apw330'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw330-v4', 'ブラック（外観）', 'ブラック', true, 3
FROM items WHERE item_code = 'ext-window-apw330'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw330' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw330' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 電動シャッター W1650まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-shutter-w1650',
  '電動シャッター W1650まで',
  'YKKAP',
  'SHUTTER-E-W1650',
  NULL,
  '電動シャッターへ変更 W1650まで',
  true,
  76,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-shutter-w1650-v1', '標準色', '標準', true, 0
FROM items WHERE item_code = 'ext-window-shutter-w1650'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-shutter-w1650' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-shutter-w1650' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 電動シャッター W2560まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-shutter-w2560',
  '電動シャッター W2560まで',
  'YKKAP',
  'SHUTTER-E-W2560',
  NULL,
  '電動シャッターへ変更 W2560まで',
  true,
  77,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-shutter-w2560-v1', '標準色', '標準', true, 0
FROM items WHERE item_code = 'ext-window-shutter-w2560'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-shutter-w2560' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-shutter-w2560' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 耐熱強化複層ガラス（網なし） W1650まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-heatproof-w1650',
  '耐熱強化複層ガラス（網なし） W1650まで',
  'YKKAP',
  'HEAT-PROOF-W1650',
  NULL,
  '防火地域用：耐熱強化複層ガラス（網なし） W1650まで',
  true,
  78,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-heatproof-w1650-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-heatproof-w1650'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 18000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-heatproof-w1650' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 18000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-heatproof-w1650' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 耐熱強化複層ガラス（網なし） W2560まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-heatproof-w2560',
  '耐熱強化複層ガラス（網なし） W2560まで',
  'YKKAP',
  'HEAT-PROOF-W2560',
  NULL,
  '防火地域用：耐熱強化複層ガラス（網なし） W2560まで',
  true,
  79,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-heatproof-w2560-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-heatproof-w2560'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-heatproof-w2560' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-heatproof-w2560' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 安全合わせガラス（30mil） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-safety-glass',
  '安全合わせガラス（30mil）',
  'YKKAP',
  'SAFETY-GLASS-30',
  NULL,
  '安全合わせガラス（30mil）',
  true,
  80,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-safety-glass-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-safety-glass'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-safety-glass' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-safety-glass' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 窓追加（22条地域） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-add-22',
  '窓追加（22条地域）',
  'YKKAP',
  'WINDOW-ADD-22',
  NULL,
  '窓追加（22条地域）',
  true,
  81,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-add-22-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-add-22'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-22' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 50000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-22' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 窓追加（準防火・防火地域） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-add-fire',
  '窓追加（準防火・防火地域）',
  'YKKAP',
  'WINDOW-ADD-FIRE',
  NULL,
  '窓追加（準防火・防火地域）',
  true,
  82,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-add-fire-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-add-fire'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-fire' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-fire' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 掃出し窓追加（22条地域）W1650まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-add-sliding-22-w1650',
  '掃出し窓追加（22条地域）W1650まで',
  'YKKAP',
  'SLIDING-ADD-22-W1650',
  NULL,
  '掃出し窓追加（22条地域）W1650まで',
  true,
  83,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-add-sliding-22-w1650-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-add-sliding-22-w1650'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-sliding-22-w1650' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 150000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-sliding-22-w1650' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 掃出し窓追加（22条地域）W2560まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-add-sliding-22-w2560',
  '掃出し窓追加（22条地域）W2560まで',
  'YKKAP',
  'SLIDING-ADD-22-W2560',
  NULL,
  '掃出し窓追加（22条地域）W2560まで',
  true,
  84,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-add-sliding-22-w2560-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-add-sliding-22-w2560'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-sliding-22-w2560' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-sliding-22-w2560' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 掃出し窓追加（準防火・防火地域）W1650まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-add-sliding-fire-w1650',
  '掃出し窓追加（準防火・防火地域）W1650まで',
  'YKKAP',
  'SLIDING-ADD-FIRE-W1650',
  NULL,
  '掃出し窓追加（準防火・防火地域）W1650まで',
  true,
  85,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-add-sliding-fire-w1650-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-add-sliding-fire-w1650'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-sliding-fire-w1650' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-sliding-fire-w1650' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 掃出し窓追加（準防火・防火地域）W2560まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-add-sliding-fire-w2560',
  '掃出し窓追加（準防火・防火地域）W2560まで',
  'YKKAP',
  'SLIDING-ADD-FIRE-W2560',
  NULL,
  '掃出し窓追加（準防火・防火地域）W2560まで',
  true,
  86,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-add-sliding-fire-w2560-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-add-sliding-fire-w2560'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-sliding-fire-w2560' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-add-sliding-fire-w2560' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- APW430 (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-apw430',
  'APW430',
  'YKKAP',
  'APW430',
  NULL,
  '樹脂サッシ アルゴンガス トリプルガラス 熱貫流率0.90W/(㎡・K) 防火仕様1.03W/(㎡・K) LACIE/HOURS標準 LIFE+/LIFEはオプション（¥20,000×施工坪数/式）',
  true,
  87,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-v1', 'ホワイト（外観）', 'ホワイト', true, 0
FROM items WHERE item_code = 'ext-window-apw430'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-v2', 'プラチナステン（外観）', 'プラチナステン', true, 1
FROM items WHERE item_code = 'ext-window-apw430'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-v3', 'ブラウン（外観）', 'ブラウン', true, 2
FROM items WHERE item_code = 'ext-window-apw430'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-v4', 'ブラック（外観）', 'ブラック', true, 3
FROM items WHERE item_code = 'ext-window-apw430'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- APW430 安全合わせガラス（30mil） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-apw430-safety-glass',
  'APW430 安全合わせガラス（30mil）',
  'YKKAP',
  'APW430-SAFETY-GLASS',
  NULL,
  'APW430用 安全合わせガラス（30mil） W2560引き違い窓は非対応',
  true,
  88,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-safety-glass-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-apw430-safety-glass'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-safety-glass' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-safety-glass' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- APW430 窓追加（22条地域） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-apw430-add-22',
  'APW430 窓追加（22条地域）',
  'YKKAP',
  'APW430-ADD-22',
  NULL,
  'APW430 窓追加（22条地域）',
  true,
  89,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-add-22-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-apw430-add-22'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-add-22' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-add-22' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- APW430 窓追加（準防火・防火地域） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-apw430-add-fire',
  'APW430 窓追加（準防火・防火地域）',
  'YKKAP',
  'APW430-ADD-FIRE',
  NULL,
  'APW430 窓追加（準防火・防火地域）',
  true,
  90,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-add-fire-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-apw430-add-fire'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 180000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-add-fire' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 180000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-add-fire' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- APW430 掃出し窓追加（22条地域）W1650まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-apw430-sliding-22-w1650',
  'APW430 掃出し窓追加（22条地域）W1650まで',
  'YKKAP',
  'APW430-SLIDING-22-W1650',
  NULL,
  'APW430 掃出し窓追加（22条地域）W1650まで',
  true,
  91,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-sliding-22-w1650-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-apw430-sliding-22-w1650'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-sliding-22-w1650' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 300000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-sliding-22-w1650' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- APW430 掃出し窓追加（22条地域）W2560まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-apw430-sliding-22-w2560',
  'APW430 掃出し窓追加（22条地域）W2560まで',
  'YKKAP',
  'APW430-SLIDING-22-W2560',
  NULL,
  'APW430 掃出し窓追加（22条地域）W2560まで',
  true,
  92,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-sliding-22-w2560-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-apw430-sliding-22-w2560'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 400000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-sliding-22-w2560' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 400000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-sliding-22-w2560' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- APW430 掃出し窓追加（準防火・防火地域）W1650まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-apw430-sliding-fire-w1650',
  'APW430 掃出し窓追加（準防火・防火地域）W1650まで',
  'YKKAP',
  'APW430-SLIDING-FIRE-W1650',
  NULL,
  'APW430 掃出し窓追加（準防火・防火地域）W1650まで',
  true,
  93,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-sliding-fire-w1650-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-apw430-sliding-fire-w1650'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 400000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-sliding-fire-w1650' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 400000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-sliding-fire-w1650' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- APW430 掃出し窓追加（準防火・防火地域）W2560まで (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-window-apw430-sliding-fire-w2560',
  'APW430 掃出し窓追加（準防火・防火地域）W2560まで',
  'YKKAP',
  'APW430-SLIDING-FIRE-W2560',
  NULL,
  'APW430 掃出し窓追加（準防火・防火地域）W2560まで',
  true,
  94,
  ARRAY['window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-window-apw430-sliding-fire-w2560-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-window-apw430-sliding-fire-w2560'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 600000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-sliding-fire-w2560' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 600000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-window-apw430-sliding-fire-w2560' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ヴェナートD30 N08 (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-venato-d30-n08',
  'ヴェナートD30 N08',
  'YKKAP',
  'D30-N08',
  'N08',
  '木目の水平線が印象的なドアデザイン 100V電気錠 ポケットキー付き 防火・非防火対応',
  true,
  95,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n08-v1', 'キャラメルチーク', 'N08-CT', true, 0
FROM items WHERE item_code = 'ext-door-venato-d30-n08'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n08-v2', 'ショコラウォールナット', 'N08-SW', true, 1
FROM items WHERE item_code = 'ext-door-venato-d30-n08'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n08-v3', 'ハニーチェリー', 'N08-HC', true, 2
FROM items WHERE item_code = 'ext-door-venato-d30-n08'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n08-v4', '桑炭', 'N08-KS', true, 3
FROM items WHERE item_code = 'ext-door-venato-d30-n08'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n08' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n08' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n08' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 75000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n08' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ヴェナートD30 N18 (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-venato-d30-n18',
  'ヴェナートD30 N18',
  'YKKAP',
  'D30-N18',
  'N18',
  '框とくふなバランスが印象的なコンテンポラリーデザイン 100V電気錠 ポケットキー付き 防火・非防火対応',
  true,
  96,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n18-v1', 'キャラメルチーク', 'N18-CT', true, 0
FROM items WHERE item_code = 'ext-door-venato-d30-n18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n18-v2', 'ショコラウォールナット', 'N18-SW', true, 1
FROM items WHERE item_code = 'ext-door-venato-d30-n18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n18-v3', 'ハニーチェリー', 'N18-HC', true, 2
FROM items WHERE item_code = 'ext-door-venato-d30-n18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n18-v4', 'マキアートパイン', 'N18-MP', true, 3
FROM items WHERE item_code = 'ext-door-venato-d30-n18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n18-v5', 'ティーブラウン', 'N18-TB', true, 4
FROM items WHERE item_code = 'ext-door-venato-d30-n18'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n18-v6', '桑炭', 'N18-KS', true, 5
FROM items WHERE item_code = 'ext-door-venato-d30-n18'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n18' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n18' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n18' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 75000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n18' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ヴェナートD30 N15 (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-venato-d30-n15',
  'ヴェナートD30 N15',
  'YKKAP',
  'D30-N15',
  'N15',
  '木目の水平線が印象的なドアデザイン 100V電気錠 ポケットキー付き 防火・非防火対応',
  true,
  97,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n15-v1', 'キャラメルチーク', 'N15-CT', true, 0
FROM items WHERE item_code = 'ext-door-venato-d30-n15'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n15-v2', 'ショコラウォールナット', 'N15-SW', true, 1
FROM items WHERE item_code = 'ext-door-venato-d30-n15'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n15-v3', 'ハニーチェリー', 'N15-HC', true, 2
FROM items WHERE item_code = 'ext-door-venato-d30-n15'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n15-v4', 'マキアートパイン', 'N15-MP', true, 3
FROM items WHERE item_code = 'ext-door-venato-d30-n15'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-n15-v5', '桑炭', 'N15-KS', true, 4
FROM items WHERE item_code = 'ext-door-venato-d30-n15'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n15' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n15' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n15' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 75000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-n15' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ヴェナートD30 C10 (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-venato-d30-c10',
  'ヴェナートD30 C10',
  'YKKAP',
  'D30-C10',
  'C10',
  'カラーの組合わせや形状でエントランス意匠を演出するプレーンデザイン 100V電気錠 ポケットキー付き 防火・非防火対応',
  true,
  98,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v1', 'プラチナステン', 'C10-PS', true, 0
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v2', 'カームブラック', 'C10-CB', true, 1
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v3', 'ピュアシルバー', 'C10-PV', true, 2
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v4', 'ホワイト', 'C10-WH', true, 3
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v5', 'マットブラウン', 'C10-MB', true, 4
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v6', 'マットダークグレー', 'C10-MDG', true, 5
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v7', 'マットネイビー', 'C10-MN', true, 6
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v8', 'マットワインレッド', 'C10-MWR', true, 7
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v9', 'マットモスグリーン', 'C10-MMG', true, 8
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v10', 'マットオリーブ', 'C10-MO', true, 9
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v11', 'マットベージュ', 'C10-MBE', true, 10
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-venato-d30-c10-v12', 'マットアイボリー', 'C10-MI', true, 11
FROM items WHERE item_code = 'ext-door-venato-d30-c10'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-c10' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-c10' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-c10' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 75000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-venato-d30-c10' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ストレートハンドル（電子錠） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-handle-straight',
  'ストレートハンドル（電子錠）',
  'YKKAP',
  'HANDLE-STRAIGHT',
  'ハンドル',
  '電子錠用ストレートハンドル 人気商品（HIT!）',
  true,
  99,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-handle-straight-v1', 'ブラック', 'BK', true, 0
FROM items WHERE item_code = 'ext-door-handle-straight'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-handle-straight-v2', 'シルバー', 'SV', true, 1
FROM items WHERE item_code = 'ext-door-handle-straight'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-straight' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-straight' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-straight' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-straight' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 洋風カーブハンドル（電子錠） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-handle-curve',
  '洋風カーブハンドル（電子錠）',
  'YKKAP',
  'HANDLE-CURVE',
  'ハンドル',
  '電子錠用洋風カーブハンドル',
  true,
  100,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-handle-curve-v1', '標準', 'STD', true, 0
FROM items WHERE item_code = 'ext-door-handle-curve'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-curve' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-curve' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-curve' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-curve' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 丸型ストレートハンドル（手動錠） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-handle-round-straight',
  '丸型ストレートハンドル（手動錠）',
  'YKKAP',
  'HANDLE-ROUND-STRAIGHT',
  'ハンドル',
  '手動錠用丸型ストレートハンドル',
  true,
  101,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-handle-round-straight-v1', 'シルバー', 'SV', true, 0
FROM items WHERE item_code = 'ext-door-handle-round-straight'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-handle-round-straight-v2', 'ブラック', 'BK', true, 1
FROM items WHERE item_code = 'ext-door-handle-round-straight'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-round-straight' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-round-straight' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-round-straight' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-round-straight' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 角型ストレートハンドル（手動錠） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-handle-square-straight',
  '角型ストレートハンドル（手動錠）',
  'YKKAP',
  'HANDLE-SQUARE-STRAIGHT',
  'ハンドル',
  '手動錠用角型ストレートハンドル',
  true,
  102,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-handle-square-straight-v1', 'シルバー', 'SV', true, 0
FROM items WHERE item_code = 'ext-door-handle-square-straight'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-handle-square-straight-v2', 'ブラック', 'BK', true, 1
FROM items WHERE item_code = 'ext-door-handle-square-straight'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-square-straight' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-square-straight' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-square-straight' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-square-straight' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ロートアイアン調ハンドル（手動錠） (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-handle-iron',
  'ロートアイアン調ハンドル（手動錠）',
  'YKKAP',
  'HANDLE-IRON',
  'ハンドル',
  '手動錠用ロートアイアン調ハンドル',
  true,
  103,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-handle-iron-v1', 'ブラック', 'BK', true, 0
FROM items WHERE item_code = 'ext-door-handle-iron'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-iron' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-iron' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-iron' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-handle-iron' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 顔認証キー (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-face-auth',
  '顔認証キー',
  'YKKAP',
  'FACE-AUTH',
  'オプション',
  '顔認証キー 非防火地域のみ使用可能 音声ガイド付き 顔データの登録も簡単',
  true,
  104,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-face-auth-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-door-face-auth'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-face-auth' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-face-auth' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-face-auth' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-face-auth' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 操作盤付インターフェースユニット (YKKAP)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-door-interface-unit',
  '操作盤付インターフェースユニット',
  'YKKAP',
  'INTERFACE-UNIT',
  'オプション',
  '玄関ドア付近に設置する操作盤付インターフェースユニット',
  true,
  105,
  ARRAY['entrance-door']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-door-interface-unit-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-door-interface-unit'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-interface-unit' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-interface-unit' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-interface-unit' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-door-interface-unit' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 外部コンセント（1カ所標準） (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-outlet-std',
  '外部コンセント（1カ所標準）',
  'Panasonic',
  'EXT-OUTLET',
  'その他オプション',
  '外部コンセント（1カ所標準）。外壁色に合わせた色を選択できます。',
  true,
  106,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-outlet-std-v1', 'ホワイト', 'W', true, 0
FROM items WHERE item_code = 'ext-facility-outlet-std'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-outlet-std-v2', 'アイボリー', 'I', true, 1
FROM items WHERE item_code = 'ext-facility-outlet-std'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-outlet-std-v3', 'ブラウン', 'BR', true, 2
FROM items WHERE item_code = 'ext-facility-outlet-std'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-outlet-std-v4', 'ブラック', 'BK', true, 3
FROM items WHERE item_code = 'ext-facility-outlet-std'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-outlet-std' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-outlet-std' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 外部コンセント追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-outlet-add',
  '外部コンセント追加',
  'Panasonic',
  'EXT-OUTLET-ADD',
  'その他オプション',
  '外部コンセント追加。外壁色に合わせた色を選択できます。',
  true,
  107,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-outlet-add-v1', 'ホワイト', 'W', true, 0
FROM items WHERE item_code = 'ext-facility-outlet-add'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-outlet-add-v2', 'アイボリー', 'I', true, 1
FROM items WHERE item_code = 'ext-facility-outlet-add'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-outlet-add-v3', 'ブラウン', 'BR', true, 2
FROM items WHERE item_code = 'ext-facility-outlet-add'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-outlet-add-v4', 'ブラック', 'BK', true, 3
FROM items WHERE item_code = 'ext-facility-outlet-add'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-outlet-add' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-outlet-add' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- EV用コンセント (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-ev-outlet',
  'EV用コンセント',
  'Panasonic',
  'EV-OUTLET',
  'その他オプション',
  'EV用コンセント（1ヶ所）',
  true,
  108,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-ev-outlet-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-facility-ev-outlet'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-ev-outlet' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-ev-outlet' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 散水栓 (オンリーワン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-sansui',
  '散水栓',
  'オンリーワン',
  'GM3-ALKCF',
  '外部水栓',
  '散水栓（排水なし） 標準で1カ所取付可能',
  true,
  109,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-sansui-v1', 'メタリックシルバー', 'メタリックシルバー', true, 0
FROM items WHERE item_code = 'ext-facility-sansui'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-sansui' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-sansui' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 立水栓 (オンリーワン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-tachimizu',
  '立水栓',
  'オンリーワン',
  'GM3-ALSCF',
  '外部水栓',
  '立水栓（排水なし） 標準で1カ所取付可能',
  true,
  110,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-tachimizu-v1', 'ブラック', 'ブラック', true, 0
FROM items WHERE item_code = 'ext-facility-tachimizu'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-tachimizu' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-tachimizu' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- アルミ立水栓追加 (オンリーワン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-tachimizu-add',
  'アルミ立水栓追加',
  'オンリーワン',
  'ALU-FAUCET-ADD',
  '外部水栓',
  'アルミ立水栓追加',
  true,
  111,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-tachimizu-add-v1', 'シルバー', 'シルバー', true, 0
FROM items WHERE item_code = 'ext-facility-tachimizu-add'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-tachimizu-add' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-tachimizu-add' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 玄関用マルチフック (森田アルミ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-multihook',
  '玄関用マルチフック',
  '森田アルミ',
  'VIK',
  'その他オプション',
  '玄関用マルチフック（下地込み）',
  true,
  112,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-multihook-v1', 'シルバー', 'シルバー', true, 0
FROM items WHERE item_code = 'ext-facility-multihook'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-multihook' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 20000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-multihook' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- タープフック (フジワラ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-tarphook',
  'タープフック',
  'フジワラ',
  'IP-12',
  'その他オプション',
  'アイプレートIP-12（2個セット・下地込み）',
  true,
  113,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-tarphook-v1', 'シルバー', 'シルバー', true, 0
FROM items WHERE item_code = 'ext-facility-tarphook'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-tarphook' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-tarphook' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エアコンスリーブキャップ（5カ所標準） (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-ac-sleeve-std',
  'エアコンスリーブキャップ（5カ所標準）',
  '標準',
  'AC-SLEEVE',
  'エアコンスリーブキャップ',
  'エアコンスリーブキャップ（5カ所標準）',
  true,
  114,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-ac-sleeve-std-v1', 'ホワイト', 'ホワイト', true, 0
FROM items WHERE item_code = 'ext-facility-ac-sleeve-std'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-ac-sleeve-std-v2', 'アイボリー', 'アイボリー', true, 1
FROM items WHERE item_code = 'ext-facility-ac-sleeve-std'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-ac-sleeve-std-v3', 'ブラウン', 'ブラウン', true, 2
FROM items WHERE item_code = 'ext-facility-ac-sleeve-std'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-ac-sleeve-std-v4', 'ブラック', 'ブラック', true, 3
FROM items WHERE item_code = 'ext-facility-ac-sleeve-std'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-ac-sleeve-std' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-ac-sleeve-std' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エアコンスリーブキャップ追加 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-ac-sleeve-add',
  'エアコンスリーブキャップ追加',
  '標準',
  'AC-SLEEVE-ADD',
  'エアコンスリーブキャップ',
  'エアコンスリーブキャップ追加',
  true,
  115,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-ac-sleeve-add-v1', 'ホワイト', 'ホワイト', true, 0
FROM items WHERE item_code = 'ext-facility-ac-sleeve-add'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-ac-sleeve-add-v2', 'アイボリー', 'アイボリー', true, 1
FROM items WHERE item_code = 'ext-facility-ac-sleeve-add'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-ac-sleeve-add-v3', 'ブラウン', 'ブラウン', true, 2
FROM items WHERE item_code = 'ext-facility-ac-sleeve-add'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-ac-sleeve-add-v4', 'ブラック', 'ブラック', true, 3
FROM items WHERE item_code = 'ext-facility-ac-sleeve-add'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-ac-sleeve-add' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-ac-sleeve-add' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 外部LAN用空配管 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-lan-pipe',
  '外部LAN用空配管',
  '標準',
  'LAN-PIPE',
  '外部LAN用空配管',
  '外部LAN用空配管',
  true,
  116,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-lan-pipe-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-facility-lan-pipe'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-lan-pipe' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-lan-pipe' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- センサーライト付屋外ワイヤレスカメラ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-wireless-camera',
  'センサーライト付屋外ワイヤレスカメラ',
  'Panasonic',
  'VL-WD813K',
  'その他オプション',
  'センサーライト付屋外ワイヤレスカメラ インターホンに最大4台まで接続可',
  true,
  117,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-wireless-camera-v1', '標準', 'VL-WD813K', true, 0
FROM items WHERE item_code = 'ext-facility-wireless-camera'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-wireless-camera' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 120000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-wireless-camera' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 屋外ワイヤレスカメラ VL-CX500 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-wireless-camera-cx500',
  '屋外ワイヤレスカメラ VL-CX500',
  'Panasonic',
  'VL-CX500X',
  'その他オプション',
  'SVD505（外でもドアホン）採用時のみ選択可能 最大2台まで接続可',
  true,
  118,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-wireless-camera-cx500-v1', 'グレー', 'VL-CX500X-H', true, 0
FROM items WHERE item_code = 'ext-facility-wireless-camera-cx500'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-wireless-camera-cx500-v2', 'ブラック', 'VL-CX500XA-K', true, 1
FROM items WHERE item_code = 'ext-facility-wireless-camera-cx500'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-wireless-camera-cx500' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 140000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-wireless-camera-cx500' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 露出用四角ボックス（将来防犯カメラ用） (未来工業)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-security-box',
  '露出用四角ボックス（将来防犯カメラ用）',
  '未来工業',
  'PV4B-ANF',
  'その他オプション',
  'LAN空配管+電源仕込み含む',
  true,
  119,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-security-box-v1', 'ベージュ', 'PV4B-ANFJ', true, 0
FROM items WHERE item_code = 'ext-facility-security-box'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-security-box-v2', 'ミルキーホワイト', 'PV4B-ANFM', true, 1
FROM items WHERE item_code = 'ext-facility-security-box'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-security-box-v3', 'グレー', 'PV4B-ANF', true, 2
FROM items WHERE item_code = 'ext-facility-security-box'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-security-box-v4', 'ブラック', 'PV4B-ANFK', true, 3
FROM items WHERE item_code = 'ext-facility-security-box'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-security-box' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 28000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-security-box' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 散水栓/立水栓追加 (オンリーワン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-faucet-add',
  '散水栓/立水栓追加',
  'オンリーワン',
  'GM3-ALxxx',
  '外部水栓',
  '散水栓または立水栓（排水なし）追加',
  true,
  120,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-faucet-add-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-facility-faucet-add'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-faucet-add' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 36000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-faucet-add' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 散水栓/立水栓（排水仕込み追加） (オンリーワン)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-faucet-drain',
  '散水栓/立水栓（排水仕込み追加）',
  'オンリーワン',
  'FAUCET-DRAIN',
  '外部水栓',
  '散水栓/立水栓に排水仕込みを追加',
  true,
  121,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-faucet-drain-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-facility-faucet-drain'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-faucet-drain' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-faucet-drain' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ステンレス混合立水栓 (カクダイ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-stainless-faucet',
  'ステンレス混合立水栓',
  'カクダイ',
  '624-202',
  '外部水栓',
  'ステンレス混合立水栓 標準形状変更差額 別途給湯工事費用必要',
  true,
  122,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-stainless-faucet-v1', 'ステンレス', '624-202', true, 0
FROM items WHERE item_code = 'ext-facility-stainless-faucet'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-stainless-faucet' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 53000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-stainless-faucet' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 電気メーターボックス (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-facility-meter-box',
  '電気メーターボックス',
  '標準',
  'METER-BOX',
  '電気メーター',
  '電気メーターボックス',
  true,
  123,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-meter-box-v1', 'ホワイト/シルバー', 'ホワイト/シルバー', true, 0
FROM items WHERE item_code = 'ext-facility-meter-box'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-meter-box-v2', 'シャンパンブロンズ', 'シャンパンブロンズ', true, 1
FROM items WHERE item_code = 'ext-facility-meter-box'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-meter-box-v3', 'ホワイト', 'ホワイト', true, 2
FROM items WHERE item_code = 'ext-facility-meter-box'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-facility-meter-box-v4', 'ブラック', 'ブラック', true, 3
FROM items WHERE item_code = 'ext-facility-meter-box'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-meter-box' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-facility-meter-box' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エコキュート370L（標準） (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-standard',
  'エコキュート370L（標準）',
  'Panasonic',
  'HE-S37LQS',
  NULL,
  'Sシリーズ 370L 標準（外部設置）',
  true,
  124,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-standard-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-standard'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-standard' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-standard' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エコキュート460L (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-460l',
  'エコキュート460L',
  'Panasonic',
  'HE-S46LQS',
  NULL,
  'Sシリーズ 460Lに変更',
  true,
  125,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-460l-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-460l'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-460l' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-460l' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ウルトラ高圧エコキュート370L (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-ultra-370l',
  'ウルトラ高圧エコキュート370L',
  'Panasonic',
  'HE-SU37LQS',
  NULL,
  'Sシリーズ ウルトラ高圧370Lに変更',
  true,
  126,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-ultra-370l-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-ultra-370l'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-ultra-370l' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-ultra-370l' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ウルトラ高圧エコキュート460L (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-ultra-460l',
  'ウルトラ高圧エコキュート460L',
  'Panasonic',
  'HE-SU46LQS',
  NULL,
  'Sシリーズ ウルトラ高圧460Lに変更',
  true,
  127,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-ultra-460l-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-ultra-460l'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 145000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-ultra-460l' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 145000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-ultra-460l' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エコキュート370L（標準）追加 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-370l-add',
  'エコキュート370L（標準）追加',
  'Panasonic',
  'HE-S37LQS-ADD',
  NULL,
  'エコキュート370L（標準）を追加',
  true,
  128,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-370l-add-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-370l-add'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-370l-add' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 350000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-370l-add' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エコキュート室内設置に変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-indoor',
  'エコキュート室内設置に変更',
  'Panasonic',
  'ECOCUTE-INDOOR',
  NULL,
  '室内設置に変更',
  true,
  129,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-indoor-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-indoor'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-indoor' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-indoor' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エコキュート インナーガレージ設置に変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-garage',
  'エコキュート インナーガレージ設置に変更',
  'Panasonic',
  'ECOCUTE-GARAGE',
  NULL,
  'インナーガレージ設置に変更',
  true,
  130,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-garage-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-garage'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-garage' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 60000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-garage' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 塩害用エコキュートに変更 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-salt',
  '塩害用エコキュートに変更',
  'Panasonic',
  'ECOCUTE-SALT',
  NULL,
  '塩害用エコキュートに変更 パワフル高圧薄型は非対応',
  true,
  131,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-salt-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-salt'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-salt' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-salt' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エコキュート370L薄型タイプ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-370l-slim',
  'エコキュート370L薄型タイプ',
  'Panasonic',
  'HE-H37LQS',
  NULL,
  'Hシリーズ 370L薄型タイプに変更',
  true,
  132,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-370l-slim-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-370l-slim'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-370l-slim' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 100000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-370l-slim' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エコキュート460L薄型タイプ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-460l-slim',
  'エコキュート460L薄型タイプ',
  'Panasonic',
  'HE-H46LQS',
  NULL,
  'Hシリーズ 460L薄型タイプに変更',
  true,
  133,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-460l-slim-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-460l-slim'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 145000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-460l-slim' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 145000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-460l-slim' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エコキュート370Lパワフル高圧薄型タイプ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-370l-powerful-slim',
  'エコキュート370Lパワフル高圧薄型タイプ',
  'Panasonic',
  'HE-WU37LQS',
  NULL,
  'Wシリーズ 370Lパワフル高圧薄型タイプに変更',
  true,
  134,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-370l-powerful-slim-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-370l-powerful-slim'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 220000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-370l-powerful-slim' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 220000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-370l-powerful-slim' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- エコキュート460Lパワフル高圧薄型タイプ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-460l-powerful-slim',
  'エコキュート460Lパワフル高圧薄型タイプ',
  'Panasonic',
  'HE-WU46LQS',
  NULL,
  'Wシリーズ 460Lパワフル高圧薄型タイプに変更',
  true,
  135,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-460l-powerful-slim-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-460l-powerful-slim'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 270000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-460l-powerful-slim' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 270000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-460l-powerful-slim' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- おひさまエコキュート パワフル高圧370L (DAIKIN)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-daikin-370l',
  'おひさまエコキュート パワフル高圧370L',
  'DAIKIN',
  'EQA37YFPV',
  NULL,
  'おひさまエコキュート パワフル高圧370L お掃除浴槽を採用する場合必須',
  true,
  136,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-daikin-370l-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-daikin-370l'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 152000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-daikin-370l' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 152000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-daikin-370l' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- おひさまエコキュート パワフル高圧460L (DAIKIN)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-daikin-460l',
  'おひさまエコキュート パワフル高圧460L',
  'DAIKIN',
  'EQA46YFPV',
  NULL,
  'おひさまエコキュート パワフル高圧460L お掃除浴槽を採用する場合必須',
  true,
  137,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-daikin-460l-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-daikin-460l'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 196000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-daikin-460l' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 196000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-daikin-460l' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ナイアガラ出湯 エコキュート370L（1・2階設置） (日立)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-hitachi-370l',
  'ナイアガラ出湯 エコキュート370L（1・2階設置）',
  '日立',
  'BHP-FV37WD',
  NULL,
  'ナイアガラ出湯 エコキュート370L 浴槽1・2階設置',
  true,
  138,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-hitachi-370l-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-hitachi-370l'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 212000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-hitachi-370l' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 212000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-hitachi-370l' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ナイアガラ出湯 エコキュート370L（3階設置） (日立)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ecocute-hitachi-370l-3f',
  'ナイアガラ出湯 エコキュート370L（3階設置）',
  '日立',
  'BHP-FV37WD-3F',
  NULL,
  'ナイアガラ出湯 エコキュート370L 浴槽3階設置',
  true,
  139,
  ARRAY['ecocute']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ecocute-hitachi-370l-3f-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ecocute-hitachi-370l-3f'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 236000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-hitachi-370l-3f' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 236000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ecocute-hitachi-370l-3f' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- Panasonic第一種換気システム (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ventilation-panasonic',
  'Panasonic第一種換気システム',
  'Panasonic',
  'PANA-VENT-1',
  NULL,
  'Panasonic第一種換気システムを採用',
  true,
  140,
  ARRAY['ventilation-system']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-panasonic-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ventilation-panasonic'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-panasonic' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-panasonic' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-panasonic' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-panasonic' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- DSDD換気システム (DSDD)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ventilation-dsdd',
  'DSDD換気システム',
  'DSDD',
  'DSDD-VENT',
  NULL,
  'DSDD第一種全熱交換換気システムへ変更',
  true,
  141,
  ARRAY['ventilation-system']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-dsdd-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-ventilation-dsdd'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1500000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-dsdd' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1500000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-dsdd' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1500000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-dsdd' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1500000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-dsdd' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- インターホン1台 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-intercom-qty-1',
  'インターホン1台',
  '標準',
  'INTERCOM-1',
  NULL,
  'インターホン親機1台（標準）',
  true,
  142,
  ARRAY['intercom-qty']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-intercom-qty-1-v1', '1台', '1台', true, 0
FROM items WHERE item_code = 'ext-intercom-qty-1'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-1' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-1' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-1' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-1' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- インターホン2台 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-intercom-qty-2',
  'インターホン2台',
  '標準',
  'INTERCOM-2',
  NULL,
  'インターホン親機2台（追加）',
  true,
  143,
  ARRAY['intercom-qty']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-intercom-qty-2-v1', '2台', '2台', true, 0
FROM items WHERE item_code = 'ext-intercom-qty-2'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-2' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-2' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-2' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-2' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- インターホン3台 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-intercom-qty-3',
  'インターホン3台',
  '標準',
  'INTERCOM-3',
  NULL,
  'インターホン親機3台（追加2台）',
  true,
  144,
  ARRAY['intercom-qty']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-intercom-qty-3-v1', '3台', '3台', true, 0
FROM items WHERE item_code = 'ext-intercom-qty-3'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-3' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-3' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-3' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 30000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-intercom-qty-3' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 換気ガラリ (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ventilation-louver',
  '換気ガラリ',
  '標準',
  'TRD-100xx-T',
  NULL,
  '換気ガラリ',
  true,
  145,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-louver-v1', 'シルバーメタリック', 'TRD-100SM-T', true, 0
FROM items WHERE item_code = 'ext-ventilation-louver'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-louver-v2', 'クリア', 'TRD-100HL-T', true, 1
FROM items WHERE item_code = 'ext-ventilation-louver'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-louver-v3', 'アイボリー', 'TRD-100IV-T', true, 2
FROM items WHERE item_code = 'ext-ventilation-louver'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-louver-v4', 'ブラック', 'TRD-100BK-T', true, 3
FROM items WHERE item_code = 'ext-ventilation-louver'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-louver-v5', 'ブラウン', 'TRD-100BR-T', true, 4
FROM items WHERE item_code = 'ext-ventilation-louver'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-louver-v6', 'ホワイト', 'TRD-100WH-T', true, 5
FROM items WHERE item_code = 'ext-ventilation-louver'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-louver' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-louver' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- Panasonic換気システム用 サイクロン給気フード (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-cyclone-hood',
  'Panasonic換気システム用 サイクロン給気フード',
  'Panasonic',
  'CYCLONE-HOOD',
  NULL,
  '計算値・地域により適正のものを採用',
  true,
  146,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-cyclone-hood-v1', 'シルバー', 'シルバー', true, 0
FROM items WHERE item_code = 'ext-cyclone-hood'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-cyclone-hood-v2', 'ブラック', 'ブラック', true, 1
FROM items WHERE item_code = 'ext-cyclone-hood'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-cyclone-hood-v3', 'ホワイト', 'ホワイト', true, 2
FROM items WHERE item_code = 'ext-cyclone-hood'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-cyclone-hood' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-cyclone-hood' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- DSDD給気口 カラー変更 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-dsdd-color-change',
  'DSDD給気口 カラー変更',
  '標準',
  'DSDD-COLOR',
  NULL,
  'DSDD換気システム採用時 焼付塗装にて黒に変更可',
  true,
  147,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-dsdd-color-change-v1', 'ブラック', 'ブラック', true, 0
FROM items WHERE item_code = 'ext-dsdd-color-change'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-dsdd-color-change' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 25000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-dsdd-color-change' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 太陽光なし（標準） (不要)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-solar-none',
  '太陽光なし（標準）',
  '不要',
  'SOLAR-NONE',
  NULL,
  '太陽光パネルを設置しない場合',
  true,
  148,
  ARRAY['solar']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-solar-none-v1', '不要', '不要', true, 0
FROM items WHERE item_code = 'ext-solar-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 太陽光あり (別途)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-solar-yes',
  '太陽光あり',
  '別途',
  'SOLAR-YES',
  NULL,
  '太陽光パネルを設置する（金額は資金計画書に記載）',
  true,
  149,
  ARRAY['solar']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-solar-yes-v1', '設置あり', '設置あり', true, 0
FROM items WHERE item_code = 'ext-solar-yes'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-yes' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-yes' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-yes' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-yes' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 中継ポール (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-solar-relay-pole',
  '中継ポール',
  '標準',
  'RELAY-POLE',
  NULL,
  '中継ポール',
  true,
  150,
  ARRAY['exterior-equipment']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-solar-relay-pole-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-solar-relay-pole'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 250000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-relay-pole' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 250000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-solar-relay-pole' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 設置しない (不要)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-battery-none',
  '設置しない',
  '不要',
  'BATTERY-NONE',
  NULL,
  '蓄電池を設置しない場合',
  true,
  151,
  ARRAY['battery']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-battery-none-v1', '不要', '不要', true, 0
FROM items WHERE item_code = 'ext-battery-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-battery-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-battery-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-battery-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-battery-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 設置する (別途)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-battery-yes',
  '設置する',
  '別途',
  'BATTERY-YES',
  NULL,
  '蓄電池を設置する（オプション）',
  true,
  152,
  ARRAY['battery']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-battery-yes-v1', '設置あり', '設置あり', true, 0
FROM items WHERE item_code = 'ext-battery-yes'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1500000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-battery-yes' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1500000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-battery-yes' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1500000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-battery-yes' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 1500000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-battery-yes' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- V2Hなし（標準） (不要)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-v2h-none',
  'V2Hなし（標準）',
  '不要',
  'V2H-NONE',
  NULL,
  'V2Hを設置しない場合',
  true,
  153,
  ARRAY['v2h']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-v2h-none-v1', '不要', '不要', true, 0
FROM items WHERE item_code = 'ext-v2h-none'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-v2h-none' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-v2h-none' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-v2h-none' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-v2h-none' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- V2Hあり (別途)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-v2h-yes',
  'V2Hあり',
  '別途',
  'V2H-YES',
  NULL,
  'V2Hを設置する',
  true,
  154,
  ARRAY['v2h']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-v2h-yes-v1', '設置あり', '設置あり', true, 0
FROM items WHERE item_code = 'ext-v2h-yes'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-v2h-yes' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-v2h-yes' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-v2h-yes' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-v2h-yes' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- スリムダクト (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-slim-duct',
  'スリムダクト',
  '標準',
  'SLIM-DUCT',
  'その他オプション',
  '太陽光設置の場合に使用',
  true,
  155,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-slim-duct-v1', 'ホワイト（W）', 'W', true, 0
FROM items WHERE item_code = 'ext-slim-duct'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-slim-duct-v2', 'アイボリー（I）', 'I', true, 1
FROM items WHERE item_code = 'ext-slim-duct'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-slim-duct-v3', 'ブラック（K）', 'K', true, 2
FROM items WHERE item_code = 'ext-slim-duct'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-slim-duct-v4', 'グレー（G）', 'G', true, 3
FROM items WHERE item_code = 'ext-slim-duct'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-slim-duct-v5', 'ブラウン（B）', 'B', true, 4
FROM items WHERE item_code = 'ext-slim-duct'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-slim-duct' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-slim-duct' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- パラペット笠木 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-parapet-coping',
  'パラペット笠木',
  '標準',
  'PARAPET-COPING',
  NULL,
  'パラペット笠木',
  true,
  156,
  ARRAY['gutter']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-parapet-coping-v1', 'ホワイト', 'ホワイト', true, 0
FROM items WHERE item_code = 'ext-parapet-coping'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-parapet-coping-v2', 'ブラック', 'ブラック', true, 1
FROM items WHERE item_code = 'ext-parapet-coping'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-parapet-coping-v3', 'プラチナステン', 'プラチナステン', true, 2
FROM items WHERE item_code = 'ext-parapet-coping'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-parapet-coping-v4', 'ブラウン', 'ブラウン', true, 3
FROM items WHERE item_code = 'ext-parapet-coping'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-parapet-coping' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-parapet-coping' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- バルコニー笠木 (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-balcony-coping',
  'バルコニー笠木',
  '標準',
  'BALCONY-COPING',
  NULL,
  'バルコニー笠木',
  true,
  157,
  ARRAY['gutter']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-balcony-coping-v1', 'ホワイト', 'ホワイト', true, 0
FROM items WHERE item_code = 'ext-balcony-coping'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-balcony-coping-v2', 'ブラック', 'ブラック', true, 1
FROM items WHERE item_code = 'ext-balcony-coping'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-balcony-coping-v3', 'プラチナステン', 'プラチナステン', true, 2
FROM items WHERE item_code = 'ext-balcony-coping'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-balcony-coping-v4', 'ブラウン', 'ブラウン', true, 3
FROM items WHERE item_code = 'ext-balcony-coping'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-balcony-coping' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-balcony-coping' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 土台水切 (城東テクノ)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-foundation-flashing',
  '土台水切',
  '城東テクノ',
  'WKF-N18',
  NULL,
  '土台水切',
  true,
  158,
  ARRAY['gutter']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-foundation-flashing-v1', 'シルキーホワイト', 'SW', true, 0
FROM items WHERE item_code = 'ext-foundation-flashing'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-foundation-flashing-v2', 'ブラック', 'BK', true, 1
FROM items WHERE item_code = 'ext-foundation-flashing'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-foundation-flashing-v3', 'ステンカラー', 'SC', true, 2
FROM items WHERE item_code = 'ext-foundation-flashing'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-foundation-flashing-v4', 'ファッションブラウン', 'FB', true, 3
FROM items WHERE item_code = 'ext-foundation-flashing'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-foundation-flashing' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-foundation-flashing' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- スマート防雨型ジョイントボックス (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-joint-box',
  'スマート防雨型ジョイントボックス',
  'Panasonic',
  'WK4201S',
  'その他オプション',
  'スマート防雨型ジョイントボックス（ノックアウトG22〈φ27〉×3）',
  true,
  159,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-joint-box-v1', 'ミルキーホワイト', 'ミルキーホワイト', true, 0
FROM items WHERE item_code = 'ext-joint-box'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-joint-box' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-joint-box' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 換気フード（キッチン・浴室）TRDシリーズ (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ventilation-hood-kb',
  '換気フード（キッチン・浴室）TRDシリーズ',
  'Panasonic',
  'TRD',
  '換気フード',
  '換気フード（キッチン・浴室）TRDシリーズ',
  true,
  160,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-hood-kb-v1', 'シルバー', 'シルバー', true, 0
FROM items WHERE item_code = 'ext-ventilation-hood-kb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-hood-kb-v2', 'ホワイト', 'ホワイト', true, 1
FROM items WHERE item_code = 'ext-ventilation-hood-kb'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-hood-kb-v3', 'ブラック', 'ブラック', true, 2
FROM items WHERE item_code = 'ext-ventilation-hood-kb'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-hood-kb' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-hood-kb' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 換気ガラリ（換気システム） (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ventilation-grille',
  '換気ガラリ（換気システム）',
  '標準',
  'VENT-GRILLE',
  '換気ガラリ',
  '換気システム用換気ガラリ',
  true,
  161,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-grille-v1', 'シルバー', 'シルバー', true, 0
FROM items WHERE item_code = 'ext-ventilation-grille'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-grille-v2', 'ホワイト', 'ホワイト', true, 1
FROM items WHERE item_code = 'ext-ventilation-grille'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ventilation-grille-v3', 'ブラック', 'ブラック', true, 2
FROM items WHERE item_code = 'ext-ventilation-grille'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-grille' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ventilation-grille' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- ナノバブル発生装置 Beauty Aqua（20A） (創建エース)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-nanobubble',
  'ナノバブル発生装置 Beauty Aqua（20A）',
  '創建エース',
  'BA-20A',
  'その他オプション',
  'ナノバブル発生装置 Beauty Aqua（20A）',
  true,
  162,
  ARRAY['exterior-facility']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-nanobubble-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-nanobubble'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-nanobubble' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 200000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-nanobubble' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 中継ポール（スッキリポール スタンダードタイプ）電気メーター一体型 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-sukkiri-pole-standard',
  '中継ポール（スッキリポール スタンダードタイプ）電気メーター一体型',
  'Panasonic',
  'DDP8-STD',
  NULL,
  '中継ポール（スッキリポール スタンダードタイプ）電気メーター一体型',
  true,
  163,
  ARRAY['sukkiri-pole']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-sukkiri-pole-standard-v1', 'アイボリー', 'アイボリー', true, 0
FROM items WHERE item_code = 'ext-sukkiri-pole-standard'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-sukkiri-pole-standard-v2', 'コーヒーブラウン', 'コーヒーブラウン', true, 1
FROM items WHERE item_code = 'ext-sukkiri-pole-standard'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 520000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-sukkiri-pole-standard' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 520000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-sukkiri-pole-standard' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 中継ポール（スッキリポール スマートタイプ）電気メーター一体型 (Panasonic)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-sukkiri-pole-smart',
  '中継ポール（スッキリポール スマートタイプ）電気メーター一体型',
  'Panasonic',
  'DDP8-SMART',
  NULL,
  '中継ポール（スッキリポール スマートタイプ）電気メーター一体型',
  true,
  164,
  ARRAY['sukkiri-pole']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-sukkiri-pole-smart-v1', 'ホワイトシルバー', 'ホワイトシルバー', true, 0
FROM items WHERE item_code = 'ext-sukkiri-pole-smart'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-sukkiri-pole-smart-v2', 'シャンパンブロンズ', 'シャンパンブロンズ', true, 1
FROM items WHERE item_code = 'ext-sukkiri-pole-smart'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 580000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-sukkiri-pole-smart' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 580000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-sukkiri-pole-smart' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 地上波TVアンテナのみ (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-tv-antenna-only',
  '地上波TVアンテナのみ',
  '標準',
  'TV-ANTENNA-ONLY',
  NULL,
  '地上波TVアンテナ設置工事一式',
  true,
  165,
  ARRAY['exterior-equipment']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-tv-antenna-only-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-tv-antenna-only'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-antenna-only' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 80000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-antenna-only' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 地上波TVアンテナ＋BSアンテナ (標準)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-tv-antenna-bs',
  '地上波TVアンテナ＋BSアンテナ',
  '標準',
  'TV-ANTENNA-BS',
  NULL,
  '地上波TVアンテナ＋BSアンテナ設置工事一式',
  true,
  166,
  ARRAY['exterior-equipment']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-tv-antenna-bs-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-tv-antenna-bs'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 95000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-antenna-bs' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 95000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-antenna-bs' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 光ケーブル（Gハウス提携会社紹介） (Gハウス提携)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-tv-fiber-ghouse',
  '光ケーブル（Gハウス提携会社紹介）',
  'Gハウス提携',
  'TV-FIBER-GHOUSE',
  NULL,
  'Gハウス提携会社をご紹介いたします',
  true,
  167,
  ARRAY['exterior-equipment']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-tv-fiber-ghouse-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-tv-fiber-ghouse'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-fiber-ghouse' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-fiber-ghouse' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 光ケーブル（自分で業者を探す） (お客様手配)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-tv-fiber-self',
  '光ケーブル（自分で業者を探す）',
  'お客様手配',
  'TV-FIBER-SELF',
  NULL,
  'お客様ご自身で業者を手配されます',
  true,
  168,
  ARRAY['exterior-equipment']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-tv-fiber-self-v1', '標準', '標準', true, 0
FROM items WHERE item_code = 'ext-tv-fiber-self'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-fiber-self' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-fiber-self' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- TV視聴不要 (不要)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-tv-not-needed',
  'TV視聴不要',
  '不要',
  'TV-NOT-NEEDED',
  NULL,
  'TV視聴の設備は不要です',
  true,
  169,
  ARRAY['exterior-equipment']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-tv-not-needed-v1', '不要', '不要', true, 0
FROM items WHERE item_code = 'ext-tv-not-needed'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-not-needed' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-tv-not-needed' AND p.code = 'hours'
ON CONFLICT DO NOTHING;
-- 勾配天井工事 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ceiling-slope',
  '勾配天井工事',
  'Gハウス',
  'CEILING-SLOPE',
  NULL,
  '天井変更する範囲の床坪数にて算出 ※梁や火打ち梁が露出する場合がございます',
  true,
  170,
  ARRAY['ceiling-work']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ceiling-slope-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'ext-ceiling-slope'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-slope' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-slope' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-slope' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 10000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-slope' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 天井高UP（H2600迄）100mm毎 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ceiling-up-100',
  '天井高UP（H2600迄）100mm毎',
  'Gハウス',
  'CEILING-UP-100',
  NULL,
  '部屋別での変更不可 フロアごとの変更',
  true,
  171,
  ARRAY['ceiling-work']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ceiling-up-100-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'ext-ceiling-up-100'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-up-100' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-up-100' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-up-100' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8500, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-up-100' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 天井高UP（H2600迄）200mm毎 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ceiling-up-200',
  '天井高UP（H2600迄）200mm毎',
  'Gハウス',
  'CEILING-UP-200',
  NULL,
  '部屋別での変更不可 フロアごとの変更',
  true,
  172,
  ARRAY['ceiling-work']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ceiling-up-200-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'ext-ceiling-up-200'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-up-200' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-up-200' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-up-200' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 12000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-up-200' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 下がり天井 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-ceiling-down',
  '下がり天井',
  'Gハウス',
  'CEILING-DOWN',
  NULL,
  '100mm毎',
  true,
  173,
  ARRAY['ceiling-work']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-ceiling-down-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'ext-ceiling-down'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-down' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-down' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-down' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 8000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-ceiling-down' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 火打ち梁 (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-hiuchi-beam',
  '火打ち梁',
  'Gハウス',
  'HIUCHI-BEAM',
  NULL,
  '勾配天井で露出する火打ち梁の塗装仕上げ',
  true,
  174,
  ARRAY['ceiling-work']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-hiuchi-beam-v1', '標準', NULL, true, 0
FROM items WHERE item_code = 'ext-hiuchi-beam'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-hiuchi-beam' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-hiuchi-beam' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-hiuchi-beam' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, false, 15000, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-hiuchi-beam' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ガス引込みあり (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-gas-supply-yes',
  'ガス引込みあり',
  'Gハウス',
  'GAS-YES',
  NULL,
  'ガス引込みを行う（乾太くん等のガス機器が選択可能になります）',
  true,
  175,
  ARRAY['gas-supply']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gas-supply-yes-v1', 'ガス有り', NULL, true, 0
FROM items WHERE item_code = 'ext-gas-supply-yes'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gas-supply-yes' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gas-supply-yes' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gas-supply-yes' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gas-supply-yes' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- ガス引込みなし（オール電化） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-gas-supply-no',
  'ガス引込みなし（オール電化）',
  'Gハウス',
  'GAS-NO',
  NULL,
  'ガス引込みを行わない（オール電化住宅）※乾太くん等のガス機器は選択できません',
  true,
  176,
  ARRAY['gas-supply']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-gas-supply-no-v1', 'ガス無し', NULL, true, 0
FROM items WHERE item_code = 'ext-gas-supply-no'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gas-supply-no' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gas-supply-no' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gas-supply-no' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-gas-supply-no' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓あり (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-interior-window-yes',
  '室内窓あり',
  'Gハウス',
  'IWIN-YES',
  NULL,
  '室内窓を設置する※内装タブで種類・ガラスを選択',
  true,
  177,
  ARRAY['interior-window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-interior-window-yes-v1', '室内窓あり', NULL, true, 0
FROM items WHERE item_code = 'ext-interior-window-yes'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-interior-window-yes' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-interior-window-yes' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-interior-window-yes' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-interior-window-yes' AND p.code = 'life'
ON CONFLICT DO NOTHING;
-- 室内窓なし（標準） (Gハウス)
INSERT INTO items (
  item_code, name, manufacturer, model_number, material_type, note,
  is_active, display_order, tags
) VALUES (
  'ext-interior-window-no',
  '室内窓なし（標準）',
  'Gハウス',
  'IWIN-NO',
  NULL,
  '室内窓を設置しない',
  true,
  178,
  ARRAY['interior-window']
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  model_number = EXCLUDED.model_number,
  material_type = EXCLUDED.material_type,
  note = EXCLUDED.note,
  tags = EXCLUDED.tags;

INSERT INTO item_variants (
  item_id, variant_code, color_name, color_code, is_active, display_order
) SELECT
  id, 'ext-interior-window-no-v1', '室内窓なし', NULL, true, 0
FROM items WHERE item_code = 'ext-interior-window-no'
ON CONFLICT DO NOTHING;
INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-interior-window-no' AND p.code = 'lacie'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-interior-window-no' AND p.code = 'hours'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-interior-window-no' AND p.code = 'life-plus'
ON CONFLICT DO NOTHING;

INSERT INTO item_pricing (
  item_id, product_id, is_available, is_standard, price, installation_cost, effective_date
) SELECT
  i.id, p.id, true, true, 0, 0, CURRENT_DATE
FROM items i, products p
WHERE i.item_code = 'ext-interior-window-no' AND p.code = 'life'
ON CONFLICT DO NOTHING;