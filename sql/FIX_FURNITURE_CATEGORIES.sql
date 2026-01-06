-- =============================================
-- 家具・家電カテゴリ修正SQL
-- 指示: ①オリジナルダイニングテーブル ②エアコン ③カーテン ④家具
-- =============================================

-- Step 1: 既存のカテゴリを全て削除
DELETE FROM categories WHERE step = 'furniture';

-- Step 2: 指示通りのカテゴリを挿入
INSERT INTO categories (name, step, is_required, is_active, display_order) VALUES
('オリジナルダイニングテーブル', 'furniture', false, true, 1),
('エアコン', 'furniture', false, true, 2),
('カーテン', 'furniture', false, true, 3),
('家具', 'furniture', false, true, 4);

-- Step 3: 不要な商品を削除 (ミラーレースカーテン)
-- ※商品テーブルがある場合
-- DELETE FROM products WHERE name LIKE '%ミラーレースカーテン%';

-- 確認用クエリ
SELECT name, step, is_required, display_order
FROM categories
WHERE step = 'furniture'
ORDER BY display_order;
