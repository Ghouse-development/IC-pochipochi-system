-- ========================================
-- 内装アイテムマスターデータ（シードデータ）
-- ========================================

-- ========================================
-- 1. 床材カテゴリ
-- ========================================
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES
  ('床材', 'flooring', 'interior', 'フローリング・床材', 1, true, true),
  ('壁クロス', 'wall-cross', 'interior', '壁紙・クロス', 2, true, true),
  ('天井クロス', 'ceiling-cross', 'interior', '天井クロス', 3, true, true),
  ('巾木', 'baseboard', 'interior', '巾木・幅木', 4, true, false),
  ('建具', 'door', 'interior', '室内ドア・建具', 5, true, true),
  ('収納', 'storage', 'interior', 'クローゼット・収納', 6, true, false)
ON CONFLICT (slug) DO NOTHING;

-- ========================================
-- 2. 床材アイテム
-- ========================================

-- 朝日ウッドテック ライブナチュラル
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('ASAHI-LN-OAK', 'ライブナチュラル オーク', '朝日ウッドテック', '床材', 'LN-OAK-001', '無垢挽板フローリング', true, true, 1),
  ('ASAHI-LN-WAL', 'ライブナチュラル ウォールナット', '朝日ウッドテック', '床材', 'LN-WAL-001', '無垢挽板フローリング', true, true, 2),
  ('ASAHI-LN-CHE', 'ライブナチュラル チェリー', '朝日ウッドテック', '床材', 'LN-CHE-001', '無垢挽板フローリング', false, true, 3)
ON CONFLICT (item_code) DO NOTHING;

-- パナソニック ベリティス
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('PANA-VER-OAK', 'ベリティス オーク柄', 'パナソニック', '床材', 'VER-OAK-001', '複合フローリング', false, true, 4),
  ('PANA-VER-WAL', 'ベリティス ウォールナット柄', 'パナソニック', '床材', 'VER-WAL-001', '複合フローリング', false, true, 5),
  ('PANA-VER-WH', 'ベリティス ホワイトオーク柄', 'パナソニック', '床材', 'VER-WH-001', '複合フローリング', true, true, 6)
ON CONFLICT (item_code) DO NOTHING;

-- DAIKEN ハピアフロア
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('DAIKEN-HAP-NA', 'ハピアフロア ナチュラル', 'DAIKEN', '床材', 'HAP-NA-001', '高機能床材', false, true, 7),
  ('DAIKEN-HAP-DA', 'ハピアフロア ダーク', 'DAIKEN', '床材', 'HAP-DA-001', '高機能床材', false, true, 8)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 3. 壁クロスアイテム
-- ========================================

-- サンゲツ
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('SANG-SP-WH', 'SP スタンダード ホワイト', 'サンゲツ', '壁クロス', 'SP-001', '量産クロス・標準', false, true, 1),
  ('SANG-SP-IV', 'SP スタンダード アイボリー', 'サンゲツ', '壁クロス', 'SP-002', '量産クロス・標準', false, true, 2),
  ('SANG-RE-ST', 'RE ストーン調', 'サンゲツ', '壁クロス', 'RE-ST-001', '1000クラス・アクセント', true, true, 3),
  ('SANG-RE-WD', 'RE ウッド調', 'サンゲツ', '壁クロス', 'RE-WD-001', '1000クラス・アクセント', true, true, 4),
  ('SANG-FE-TX', 'FE テクスチャー', 'サンゲツ', '壁クロス', 'FE-TX-001', 'ファイン・ハイグレード', false, true, 5)
ON CONFLICT (item_code) DO NOTHING;

-- リリカラ
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('LILI-LB-WH', 'LB ベーシック ホワイト', 'リリカラ', '壁クロス', 'LB-WH-001', '量産クロス・標準', false, true, 6),
  ('LILI-LL-AC', 'LL アクセント', 'リリカラ', '壁クロス', 'LL-AC-001', '1000クラス', true, true, 7),
  ('LILI-LW-PR', 'LW プレミアム', 'リリカラ', '壁クロス', 'LW-PR-001', 'ハイグレード', false, true, 8)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 4. 天井クロスアイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('SANG-CE-WH', '天井クロス ホワイト', 'サンゲツ', '天井クロス', 'CE-WH-001', '標準天井', false, true, 1),
  ('SANG-CE-IV', '天井クロス アイボリー', 'サンゲツ', '天井クロス', 'CE-IV-001', '標準天井', false, true, 2),
  ('SANG-CE-WD', '天井クロス 木目調', 'サンゲツ', '天井クロス', 'CE-WD-001', 'アクセント天井', true, true, 3),
  ('LILI-CE-WH', '天井クロス ホワイト', 'リリカラ', '天井クロス', 'LCE-WH-001', '標準天井', false, true, 4)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 5. 巾木アイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('PANA-BH-WH', '巾木 ホワイト', 'パナソニック', '巾木', 'BH-WH-001', 'H60mm', false, true, 1),
  ('PANA-BH-NA', '巾木 ナチュラル', 'パナソニック', '巾木', 'BH-NA-001', 'H60mm', false, true, 2),
  ('PANA-BH-DA', '巾木 ダーク', 'パナソニック', '巾木', 'BH-DA-001', 'H60mm', false, true, 3),
  ('DAIKEN-BH-WH', '巾木 ホワイト', 'DAIKEN', '巾木', 'DBH-WH-001', 'H60mm', false, true, 4)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 6. 建具アイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('PANA-DR-VER', 'ベリティス 片開きドア', 'パナソニック', '建具', 'DR-VER-001', '標準ドア', false, true, 1),
  ('PANA-DR-SL', 'ベリティス 引戸', 'パナソニック', '建具', 'DR-SL-001', '上吊り引戸', true, true, 2),
  ('LIXIL-DR-LA', 'ラシッサ 片開きドア', 'LIXIL', '建具', 'LA-DR-001', '標準ドア', false, true, 3),
  ('LIXIL-DR-SL', 'ラシッサ 引戸', 'LIXIL', '建具', 'LA-SL-001', '上吊り引戸', true, true, 4),
  ('EIDAI-DR-SK', 'スキスム 片開きドア', '永大産業', '建具', 'SK-DR-001', 'ハイドア対応', false, true, 5)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 7. カテゴリIDの紐付け
-- ========================================
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'flooring') WHERE category_name = '床材' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'wall-cross') WHERE category_name = '壁クロス' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'ceiling-cross') WHERE category_name = '天井クロス' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'baseboard') WHERE category_name = '巾木' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'door') WHERE category_name = '建具' AND category_id IS NULL;

-- ========================================
-- 8. バリエーション追加
-- ========================================

-- 床材バリエーション
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'OAK-NA', 'ナチュラルオーク', '#D4A574', 1 FROM items i WHERE i.item_code = 'ASAHI-LN-OAK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'OAK-LT', 'ライトオーク', '#E8D4B8', 2 FROM items i WHERE i.item_code = 'ASAHI-LN-OAK'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'WAL-DA', 'ダークウォールナット', '#5C4033', 1 FROM items i WHERE i.item_code = 'ASAHI-LN-WAL'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'CHE-NA', 'ナチュラルチェリー', '#B5651D', 1 FROM items i WHERE i.item_code = 'ASAHI-LN-CHE'
ON CONFLICT DO NOTHING;

-- 壁クロスバリエーション
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'WH-01', 'ホワイト', '#FFFFFF', 1 FROM items i WHERE i.item_code = 'SANG-SP-WH'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'IV-01', 'アイボリー', '#FFFFF0', 1 FROM items i WHERE i.item_code = 'SANG-SP-IV'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'ST-GR', 'グレーストーン', '#808080', 1 FROM items i WHERE i.item_code = 'SANG-RE-ST'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'ST-BG', 'ベージュストーン', '#D4C4A8', 2 FROM items i WHERE i.item_code = 'SANG-RE-ST'
ON CONFLICT DO NOTHING;

INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'WD-NA', 'ナチュラルウッド', '#C4A484', 1 FROM items i WHERE i.item_code = 'SANG-RE-WD'
ON CONFLICT DO NOTHING;

-- ========================================
-- 9. 価格設定
-- ========================================

-- 床材価格（全プラン）
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code IN ('PANA-VER-OAK', 'PANA-VER-WAL', 'PANA-VER-WH', 'DAIKEN-HAP-NA', 'DAIKEN-HAP-DA') THEN 0
    ELSE 15000
  END,
  CASE
    WHEN i.item_code IN ('PANA-VER-OAK', 'PANA-VER-WAL', 'PANA-VER-WH', 'DAIKEN-HAP-NA', 'DAIKEN-HAP-DA') THEN true
    ELSE false
  END,
  true
FROM items i, products p
WHERE i.category_name = '床材'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- 壁クロス価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code LIKE '%SP%' THEN 0
    WHEN i.item_code LIKE '%RE%' THEN 3000
    ELSE 5000
  END,
  CASE WHEN i.item_code LIKE '%SP%' THEN true ELSE false END,
  true
FROM items i, products p
WHERE i.category_name = '壁クロス'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- 天井クロス価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE WHEN i.item_code LIKE '%WD%' THEN 2000 ELSE 0 END,
  CASE WHEN i.item_code LIKE '%WD%' THEN false ELSE true END,
  true
FROM items i, products p
WHERE i.category_name = '天井クロス'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- 巾木価格（全部標準）
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.category_name = '巾木'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- 建具価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code LIKE '%SL%' THEN 25000
    ELSE 0
  END,
  CASE WHEN i.item_code LIKE '%SL%' THEN false ELSE true END,
  true
FROM items i, products p
WHERE i.category_name = '建具'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;
