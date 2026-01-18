-- 031_add_limited_plans.sql
-- LIFE X、LIFE Limited、LIFE+ Limitedプランを追加

-- LIFE X プランを追加（存在しない場合のみ）
INSERT INTO products (code, name, description, color_code, display_order, is_active)
SELECT 'LIFE_X', 'LIFE X', 'ライフエックス - 特別仕様（LIFEと同価格）', '#8b5cf6', 5, true
WHERE NOT EXISTS (SELECT 1 FROM products WHERE code = 'LIFE_X');

-- LIFE Limited プランを追加（存在しない場合のみ）
INSERT INTO products (code, name, description, color_code, display_order, is_active)
SELECT 'LIFE_LIMITED', 'LIFE Limited', 'ライフリミテッド - 限定仕様（LIFEと同価格）', '#ec4899', 6, true
WHERE NOT EXISTS (SELECT 1 FROM products WHERE code = 'LIFE_LIMITED');

-- LIFE+ Limited プランを追加（存在しない場合のみ）
INSERT INTO products (code, name, description, color_code, display_order, is_active)
SELECT 'LIFE_PLUS_LIMITED', 'LIFE+ Limited', 'ライフプラスリミテッド - 限定仕様（LIFE+と同価格）', '#14b8a6', 7, true
WHERE NOT EXISTS (SELECT 1 FROM products WHERE code = 'LIFE_PLUS_LIMITED');

-- 確認用クエリ
-- SELECT * FROM products ORDER BY display_order;
