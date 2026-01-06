-- =============================================
-- 外装カテゴリ修正SQL
-- 【必須項目（外装）】.txt の指示に基づく修正
-- =============================================

-- Step 1: 既存のカテゴリを全て削除
DELETE FROM categories WHERE step = 'exterior';

-- Step 2: 指示通りのカテゴリを挿入
-- 必須カテゴリ (is_required = true)
INSERT INTO categories (name, step, is_required, is_active, display_order) VALUES
-- ①外壁
('外壁', 'exterior', true, true, 1),
-- ②ポーチ
('ポーチ', 'exterior', true, true, 2),
-- ③屋根
('屋根', 'exterior', true, true, 3),
-- ④外部配管
('外部配管', 'exterior', true, true, 4),
-- A: ⑤⑥⑦⑧⑨ → 樋 (軒樋、縦樋、土台水切、バルコニー笠木、パラペット笠木)
('樋', 'exterior', true, true, 5),
-- ⑩軒天
('軒天', 'exterior', true, true, 6),
-- ⑪ガレージシャッター
('ガレージシャッター', 'exterior', true, true, 7),
-- ⑫窓
('窓', 'exterior', true, true, 8),
-- ⑬玄関ドア
('玄関ドア', 'exterior', true, true, 9),
-- B: ⑭〜㉓ → 外部設備 (電気メーターボックス、外部コンセント、EVコンセント、etc.)
('外部設備', 'exterior', true, true, 10);

-- 任意カテゴリ (is_required = false)
INSERT INTO categories (name, step, is_required, is_active, display_order) VALUES
('エコキュート', 'exterior', false, true, 11),
('換気システム', 'exterior', false, true, 12),
('太陽光・蓄電池', 'exterior', false, true, 13),
('庇', 'exterior', false, true, 14),
('破風', 'exterior', false, true, 15);

-- 確認用クエリ
SELECT name, step, is_required, display_order
FROM categories
WHERE step = 'exterior'
ORDER BY display_order;
