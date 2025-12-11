-- ========================================
-- 設備アイテムマスターデータ（シードデータ）
-- ========================================

-- ========================================
-- 1. 設備カテゴリ
-- ========================================
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES
  ('キッチン', 'kitchen', 'equipment', 'システムキッチン', 1, true, true),
  ('バス', 'bathroom', 'equipment', 'ユニットバス', 2, true, true),
  ('洗面台', 'vanity', 'equipment', '洗面化粧台', 3, true, true),
  ('トイレ', 'toilet', 'equipment', 'トイレ・便器', 4, true, true),
  ('給湯器', 'water-heater', 'equipment', '給湯設備', 5, true, true),
  ('エアコン', 'aircon', 'equipment', '空調設備', 6, true, false),
  ('照明', 'lighting', 'equipment', '照明器具', 7, true, false)
ON CONFLICT (slug) DO NOTHING;

-- ========================================
-- 2. キッチンアイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('LIXIL-KIT-AS', 'アレスタ I型 255', 'LIXIL', 'キッチン', 'AS-255', '食洗機付き・標準', false, true, 1),
  ('LIXIL-KIT-RI', 'リシェルSI I型 255', 'LIXIL', 'キッチン', 'RI-255', 'セラミックトップ', true, true, 2),
  ('PANA-KIT-LC', 'ラクシーナ I型 255', 'パナソニック', 'キッチン', 'LC-255', 'トリプルワイドIH対応', true, true, 3),
  ('PANA-KIT-LV', 'Lクラス I型 255', 'パナソニック', 'キッチン', 'LV-255', 'フルオーダー対応', false, true, 4),
  ('TAKA-KIT-OF', 'オフェリア I型 255', 'タカラスタンダード', 'キッチン', 'OF-255', 'ホーロー製', false, true, 5),
  ('TAKA-KIT-TR', 'トレーシア I型 255', 'タカラスタンダード', 'キッチン', 'TR-255', 'ホーロー・ハイグレード', true, true, 6),
  ('TOTO-KIT-MT', 'ミッテ I型 255', 'TOTO', 'キッチン', 'MT-255', '水ほうき水栓', false, true, 7),
  ('TOTO-KIT-CR', 'クラッソ I型 255', 'TOTO', 'キッチン', 'CR-255', 'きれい除菌水', true, true, 8)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 3. バスアイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('LIXIL-BATH-AR', 'アライズ 1616', 'LIXIL', 'バス', 'AR-1616', '標準ユニットバス', false, true, 1),
  ('LIXIL-BATH-SP', 'スパージュ 1616', 'LIXIL', 'バス', 'SP-1616', '肩湯・打たせ湯', true, true, 2),
  ('TOTO-BATH-SA', 'サザナ 1616', 'TOTO', 'バス', 'SA-1616', 'ほっカラリ床', true, true, 3),
  ('TOTO-BATH-SY', 'シンラ 1616', 'TOTO', 'バス', 'SY-1616', '楽湯・ファーストクラス浴槽', false, true, 4),
  ('PANA-BATH-OF', 'オフローラ 1616', 'パナソニック', 'バス', 'OF-1616', 'スゴピカ素材', false, true, 5),
  ('PANA-BATH-LC', 'Lクラス 1616', 'パナソニック', 'バス', 'LC-1616', '酸素美泡湯', true, true, 6),
  ('TAKA-BATH-RE', 'リラクシア 1616', 'タカラスタンダード', 'バス', 'RE-1616', 'ホーロー浴槽', false, true, 7)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 4. 洗面台アイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('LIXIL-VAN-PV', 'ピアラ 750', 'LIXIL', '洗面台', 'PV-750', '標準洗面台', false, true, 1),
  ('LIXIL-VAN-LC', 'ルミシス 900', 'LIXIL', '洗面台', 'LC-900', 'ハイグレード', true, true, 2),
  ('TOTO-VAN-OC', 'オクターブ 750', 'TOTO', '洗面台', 'OC-750', 'きれい除菌水', true, true, 3),
  ('TOTO-VAN-ES', 'エスクア 900', 'TOTO', '洗面台', 'ES-900', 'ハイグレード', false, true, 4),
  ('PANA-VAN-CL', 'シーライン 750', 'パナソニック', '洗面台', 'CL-750', 'スゴピカ素材', false, true, 5),
  ('PANA-VAN-LC', 'Lクラス 900', 'パナソニック', '洗面台', 'LV-900', 'ハイグレード', true, true, 6)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 5. トイレアイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('TOTO-TOI-ZJ', 'ZJ2', 'TOTO', 'トイレ', 'ZJ2', '標準トイレ', false, true, 1),
  ('TOTO-TOI-GG', 'GG', 'TOTO', 'トイレ', 'GG', 'ウォシュレット一体', true, true, 2),
  ('TOTO-TOI-NX', 'ネオレストNX', 'TOTO', 'トイレ', 'NX', '最高級トイレ', false, true, 3),
  ('LIXIL-TOI-BC', 'ベーシア', 'LIXIL', 'トイレ', 'BC', '標準トイレ', false, true, 4),
  ('LIXIL-TOI-SP', 'サティスS', 'LIXIL', 'トイレ', 'SP', 'タンクレス', true, true, 5),
  ('LIXIL-TOI-SG', 'サティスG', 'LIXIL', 'トイレ', 'SG', 'ハイグレードタンクレス', false, true, 6),
  ('PANA-TOI-AL', 'アラウーノS160', 'パナソニック', 'トイレ', 'AL-S160', '泡洗浄', true, true, 7),
  ('PANA-TOI-LV', 'アラウーノL150', 'パナソニック', 'トイレ', 'AL-L150', 'ハイグレード', false, true, 8)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 6. 給湯器アイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('RINN-WH-EC', 'エコジョーズ 24号', 'リンナイ', '給湯器', 'EC-24', 'ガス給湯器・標準', false, true, 1),
  ('RINN-WH-HP', 'ハイブリッド給湯器', 'リンナイ', '給湯器', 'HP-24', '省エネ', true, true, 2),
  ('PANA-WH-EC', 'エコキュート 370L', 'パナソニック', '給湯器', 'EC-370', 'ヒートポンプ', true, true, 3),
  ('PANA-WH-46', 'エコキュート 460L', 'パナソニック', '給湯器', 'EC-460', 'ヒートポンプ・大容量', false, true, 4),
  ('CORO-WH-EC', 'エコキュート 370L', 'コロナ', '給湯器', 'CEC-370', 'ヒートポンプ', false, true, 5),
  ('MITSU-WH-EC', 'エコキュート 370L', '三菱電機', '給湯器', 'MEC-370', 'ヒートポンプ', false, true, 6)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 7. エアコンアイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('PANA-AC-X', 'エオリア Xシリーズ', 'パナソニック', 'エアコン', 'EO-X', 'ハイグレード', true, true, 1),
  ('PANA-AC-J', 'エオリア Jシリーズ', 'パナソニック', 'エアコン', 'EO-J', '標準', false, true, 2),
  ('DAIK-AC-RX', 'うるさらX', 'ダイキン', 'エアコン', 'RX', '加湿・除湿', true, true, 3),
  ('DAIK-AC-AN', 'AN シリーズ', 'ダイキン', 'エアコン', 'AN', '標準', false, true, 4),
  ('MITSU-AC-ZW', '霧ヶ峰 Zシリーズ', '三菱電機', 'エアコン', 'ZW', 'ムーブアイ', true, true, 5)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 8. 照明アイテム
-- ========================================
INSERT INTO items (item_code, name, manufacturer, category_name, model_number, note, is_hit, is_active, display_order)
VALUES
  ('PANA-LT-DL', 'ダウンライト LED', 'パナソニック', '照明', 'DL-LED', '標準', false, true, 1),
  ('PANA-LT-SL', 'シーリングライト LED', 'パナソニック', '照明', 'SL-LED', 'リモコン調光', false, true, 2),
  ('PANA-LT-PD', 'ペンダントライト', 'パナソニック', '照明', 'PD-LED', 'ダイニング用', true, true, 3),
  ('ODLC-LT-DL', 'ダウンライト LED', 'オーデリック', '照明', 'ODL-LED', '標準', false, true, 4),
  ('ODLC-LT-SP', 'スポットライト LED', 'オーデリック', '照明', 'OSP-LED', 'アクセント', true, true, 5),
  ('KOIZ-LT-PD', 'ペンダントライト', 'コイズミ', '照明', 'KPD-LED', 'デザイン照明', true, true, 6)
ON CONFLICT (item_code) DO NOTHING;

-- ========================================
-- 9. カテゴリIDの紐付け
-- ========================================
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'kitchen') WHERE category_name = 'キッチン' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'bathroom') WHERE category_name = 'バス' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'vanity') WHERE category_name = '洗面台' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'toilet') WHERE category_name = 'トイレ' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'water-heater') WHERE category_name = '給湯器' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'aircon') WHERE category_name = 'エアコン' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'lighting') WHERE category_name = '照明' AND category_id IS NULL;

-- ========================================
-- 10. バリエーション追加
-- ========================================

-- キッチンカラーバリエーション
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'WH', 'ホワイト', '#FFFFFF', 1 FROM items i WHERE i.category_name = 'キッチン'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'GR', 'グレージュ', '#C4B8A8', 2 FROM items i WHERE i.category_name = 'キッチン'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'WD', 'ウォールナット', '#5C4033', 3 FROM items i WHERE i.category_name = 'キッチン'
ON CONFLICT DO NOTHING;

-- バスカラーバリエーション
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'WH', 'ホワイト', '#FFFFFF', 1 FROM items i WHERE i.category_name = 'バス'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'BG', 'ベージュ', '#F5F5DC', 2 FROM items i WHERE i.category_name = 'バス'
ON CONFLICT DO NOTHING;

-- トイレカラーバリエーション
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'WH', 'ホワイト', '#FFFFFF', 1 FROM items i WHERE i.category_name = 'トイレ'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'IV', 'アイボリー', '#FFFFF0', 2 FROM items i WHERE i.category_name = 'トイレ'
ON CONFLICT DO NOTHING;

-- ========================================
-- 11. 価格設定
-- ========================================

-- キッチン価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code IN ('LIXIL-KIT-AS', 'TAKA-KIT-OF', 'TOTO-KIT-MT') THEN 0
    WHEN i.item_code IN ('LIXIL-KIT-RI', 'PANA-KIT-LC', 'TAKA-KIT-TR', 'TOTO-KIT-CR') THEN 350000
    ELSE 650000
  END,
  CASE WHEN i.item_code IN ('LIXIL-KIT-AS', 'TAKA-KIT-OF', 'TOTO-KIT-MT') THEN true ELSE false END,
  true
FROM items i, products p
WHERE i.category_name = 'キッチン'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- バス価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code IN ('LIXIL-BATH-AR', 'PANA-BATH-OF', 'TAKA-BATH-RE') THEN 0
    WHEN i.item_code IN ('TOTO-BATH-SA') THEN 150000
    ELSE 350000
  END,
  CASE WHEN i.item_code IN ('LIXIL-BATH-AR', 'PANA-BATH-OF', 'TAKA-BATH-RE') THEN true ELSE false END,
  true
FROM items i, products p
WHERE i.category_name = 'バス'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- 洗面台価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code LIKE '%750%' OR i.item_code IN ('LIXIL-VAN-PV', 'PANA-VAN-CL') THEN 0
    ELSE 120000
  END,
  CASE WHEN i.item_code LIKE '%750%' OR i.item_code IN ('LIXIL-VAN-PV', 'PANA-VAN-CL') THEN true ELSE false END,
  true
FROM items i, products p
WHERE i.category_name = '洗面台'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- トイレ価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code IN ('TOTO-TOI-ZJ', 'LIXIL-TOI-BC') THEN 0
    WHEN i.item_code IN ('TOTO-TOI-GG', 'LIXIL-TOI-SP', 'PANA-TOI-AL') THEN 80000
    ELSE 200000
  END,
  CASE WHEN i.item_code IN ('TOTO-TOI-ZJ', 'LIXIL-TOI-BC') THEN true ELSE false END,
  true
FROM items i, products p
WHERE i.category_name = 'トイレ'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- 給湯器価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code LIKE '%EC-24%' OR i.item_code = 'RINN-WH-EC' THEN 0
    WHEN i.item_code LIKE '%370%' THEN 250000
    ELSE 350000
  END,
  CASE WHEN i.item_code LIKE '%EC-24%' OR i.item_code = 'RINN-WH-EC' THEN true ELSE false END,
  true
FROM items i, products p
WHERE i.category_name = '給湯器'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- エアコン価格（全部オプション）
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code LIKE '%J%' OR i.item_code LIKE '%AN%' THEN 80000
    ELSE 150000
  END,
  false,
  true
FROM items i, products p
WHERE i.category_name = 'エアコン'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;

-- 照明価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id,
  CASE
    WHEN i.item_code LIKE '%DL%' OR i.item_code LIKE '%SL%' THEN 0
    ELSE 15000
  END,
  CASE WHEN i.item_code LIKE '%DL%' OR i.item_code LIKE '%SL%' THEN true ELSE false END,
  true
FROM items i, products p
WHERE i.category_name = '照明'
  AND p.code IN ('LIFE', 'LIFE_PLUS', 'HOURS', 'LACIE')
ON CONFLICT (item_id, variant_id, product_id) DO NOTHING;
