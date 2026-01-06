-- ============================================
-- 外装カテゴリ更新SQL
-- 【必須項目（外装）】の要望に基づく更新
-- ============================================

-- ============================================
-- 1. 必須カテゴリの設定（is_required = true）
-- ============================================

-- 外壁（必須①）
UPDATE categories SET is_required = true, display_order = 1
WHERE name = '外壁' AND category_type = 'exterior';

-- ポーチ（必須②）
UPDATE categories SET is_required = true, display_order = 2
WHERE name = 'ポーチ' AND category_type = 'exterior';

-- 屋根（必須③）
UPDATE categories SET is_required = true, display_order = 3
WHERE name = '屋根' AND category_type = 'exterior';

-- 外部配管（必須④）
UPDATE categories SET is_required = true, display_order = 4
WHERE name = '外部配管' AND category_type = 'exterior';

-- 樋（必須⑤⑥⑦⑧⑨統合）
UPDATE categories SET is_required = true, display_order = 5
WHERE name = '樋' AND category_type = 'exterior';

-- 軒天（必須⑩ - 条件付き）
UPDATE categories SET is_required = true, display_order = 6
WHERE name = '軒天' AND category_type = 'exterior';

-- ガレージシャッター（必須⑪ - 条件付き）
UPDATE categories SET is_required = true, display_order = 7
WHERE name = 'ガレージシャッター' AND category_type = 'exterior';

UPDATE categories SET is_required = true, display_order = 7
WHERE name = '電動ガレージシャッター' AND category_type = 'exterior';

-- 窓（必須⑫）
UPDATE categories SET is_required = true, display_order = 8
WHERE name = '窓' AND category_type = 'exterior';

-- 玄関ドア（必須⑬）
UPDATE categories SET is_required = true, display_order = 9
WHERE name = '玄関ドア' AND category_type = 'exterior';

-- 外部設備（必須⑭〜㉓統合）
UPDATE categories SET is_required = true, display_order = 10
WHERE name = '外部設備' AND category_type = 'exterior';

-- ============================================
-- 2. 任意カテゴリの設定（is_required = false）
-- ============================================

-- 破風（任意）
UPDATE categories SET is_required = false, display_order = 20
WHERE name = '破風' AND category_type = 'exterior';

-- 庇（任意）
UPDATE categories SET is_required = false, display_order = 21
WHERE name = '庇' AND category_type = 'exterior';

-- ============================================
-- 3. 不要カテゴリの非表示化
-- ============================================

-- 笠木カテゴリを非表示（樋に統合したため）
UPDATE categories SET is_active = false
WHERE name = '笠木' AND category_type = 'exterior';

-- スッキリポールカテゴリを非表示（外部設備に統合したため）
UPDATE categories SET is_active = false
WHERE name = 'スッキリポール' AND category_type = 'exterior';

-- ============================================
-- 4. アイテムのカテゴリ移動
-- ============================================

-- 土台水切を「樋」カテゴリに移動
UPDATE items SET category_id = (
  SELECT id FROM categories WHERE name = '樋' AND category_type = 'exterior' LIMIT 1
)
WHERE name LIKE '%土台水切%';

-- パラペット笠木を「樋」カテゴリに移動
UPDATE items SET category_id = (
  SELECT id FROM categories WHERE name = '樋' AND category_type = 'exterior' LIMIT 1
)
WHERE name LIKE '%パラペット笠木%';

-- バルコニー笠木を「樋」カテゴリに移動
UPDATE items SET category_id = (
  SELECT id FROM categories WHERE name = '樋' AND category_type = 'exterior' LIMIT 1
)
WHERE name LIKE '%バルコニー笠木%';

-- スッキリポールを「外部設備」カテゴリに移動
UPDATE items SET category_id = (
  SELECT id FROM categories WHERE name = '外部設備' AND category_type = 'exterior' LIMIT 1
)
WHERE name LIKE '%スッキリポール%';

-- スリムダクトを「外部設備」カテゴリに移動
UPDATE items SET category_id = (
  SELECT id FROM categories WHERE name = '外部設備' AND category_type = 'exterior' LIMIT 1
)
WHERE name LIKE '%スリムダクト%';

-- ============================================
-- 5. 確認クエリ
-- ============================================

-- 外装カテゴリの一覧確認
SELECT name, is_required, is_active, display_order
FROM categories
WHERE category_type = 'exterior'
ORDER BY display_order;
