-- =====================================================
-- カテゴリ修正SQL（統合版）
-- 実行日: 2026-01-06
-- 目的: 樋・屋根・外部設備・TV視聴・窓タイプのカテゴリを修正
-- =====================================================

-- トランザクション開始
BEGIN;

-- =====================================================
-- 1. カテゴリマスタの追加・更新
-- =====================================================

-- 樋・水切カテゴリを追加（存在しない場合）
INSERT INTO categories (name, slug, category_type, is_active, display_order)
SELECT '樋・水切', 'gutter', 'exterior', true, 50
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = '樋・水切');

-- TV視聴カテゴリを追加
INSERT INTO categories (name, slug, category_type, is_active, display_order)
SELECT 'TV視聴', 'tv-viewing', 'exterior', true, 55
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = 'TV視聴');

-- 窓タイプカテゴリを追加（設計用）
INSERT INTO categories (name, slug, category_type, is_active, display_order)
SELECT '窓タイプ', 'window-type', 'exterior', true, 25
WHERE NOT EXISTS (SELECT 1 FROM categories WHERE name = '窓タイプ');

-- 外部配管カテゴリを非アクティブに（外部設備に統合）
UPDATE categories
SET is_active = false
WHERE name = '外部配管';

-- =====================================================
-- 2. 樋関連アイテムのカテゴリ修正
-- =====================================================

-- 樋・水切カテゴリIDを取得してアイテムを更新
UPDATE items
SET category_name = '樋・水切',
    category_id = (SELECT id FROM categories WHERE name = '樋・水切' LIMIT 1)
WHERE item_code IN (
    'ext-gutter-horizontal',    -- ファインスケアNF-I型（軒樋）
    'ext-gutter-vertical',      -- S30（竪樋）
    'ext-parapet-coping',       -- パラペット笠木
    'ext-balcony-coping',       -- バルコニー笠木
    'ext-foundation-flashing'   -- 土台水切
)
OR category_name IN ('樋', '横樋', '縦樋', '竪樋', '軒樋');

-- 屋根カテゴリから樋関連を除外（誤って屋根に入っている場合）
UPDATE items
SET category_name = '樋・水切',
    category_id = (SELECT id FROM categories WHERE name = '樋・水切' LIMIT 1)
WHERE category_name = '屋根'
AND (
    name LIKE '%樋%'
    OR name LIKE '%ファインスケア%'
    OR name LIKE '%S30%'
    OR name LIKE '%PC30%'
    OR name LIKE '%水切%'
    OR name LIKE '%笠木%'
);

-- =====================================================
-- 3. 外部設備関連アイテムの修正
-- =====================================================

-- 外部配管を外部設備に移動
UPDATE items
SET category_name = '外部設備',
    category_id = (SELECT id FROM categories WHERE name = '外部設備' LIMIT 1)
WHERE category_name = '外部配管';

-- =====================================================
-- 4. 屋根カテゴリの確認（1アイテムのみであるべき）
-- =====================================================

-- 屋根カテゴリのアイテム確認クエリ（実行して確認）
-- SELECT * FROM items WHERE category_name = '屋根';

-- =====================================================
-- 5. TV視聴アイテムの追加
-- =====================================================

-- TV視聴アイテムが存在しない場合は追加
INSERT INTO items (item_code, name, category_name, category_id, manufacturer, model_number, note, is_active, display_order)
SELECT
    'ext-tv-antenna-only',
    '地上波TVアンテナのみ',
    'TV視聴',
    (SELECT id FROM categories WHERE name = 'TV視聴' LIMIT 1),
    '標準',
    'TV-ANTENNA-ONLY',
    '地上波TVアンテナ設置工事一式 [TV視聴]',
    true,
    1
WHERE NOT EXISTS (SELECT 1 FROM items WHERE item_code = 'ext-tv-antenna-only');

INSERT INTO items (item_code, name, category_name, category_id, manufacturer, model_number, note, is_active, display_order)
SELECT
    'ext-tv-antenna-bs',
    '地上波TVアンテナ＋BSアンテナ',
    'TV視聴',
    (SELECT id FROM categories WHERE name = 'TV視聴' LIMIT 1),
    '標準',
    'TV-ANTENNA-BS',
    '地上波TVアンテナ＋BSアンテナ設置工事一式 [TV視聴]',
    true,
    2
WHERE NOT EXISTS (SELECT 1 FROM items WHERE item_code = 'ext-tv-antenna-bs');

INSERT INTO items (item_code, name, category_name, category_id, manufacturer, model_number, note, is_active, display_order)
SELECT
    'ext-tv-fiber-ghouse',
    '光ケーブル（Gハウス提携会社紹介）',
    'TV視聴',
    (SELECT id FROM categories WHERE name = 'TV視聴' LIMIT 1),
    'Gハウス提携',
    'TV-FIBER-GHOUSE',
    'Gハウス提携会社をご紹介いたします [TV視聴]',
    true,
    3
WHERE NOT EXISTS (SELECT 1 FROM items WHERE item_code = 'ext-tv-fiber-ghouse');

INSERT INTO items (item_code, name, category_name, category_id, manufacturer, model_number, note, is_active, display_order)
SELECT
    'ext-tv-fiber-self',
    '光ケーブル（自分で業者を探す）',
    'TV視聴',
    (SELECT id FROM categories WHERE name = 'TV視聴' LIMIT 1),
    'お客様手配',
    'TV-FIBER-SELF',
    'お客様ご自身で業者を手配されます [TV視聴]',
    true,
    4
WHERE NOT EXISTS (SELECT 1 FROM items WHERE item_code = 'ext-tv-fiber-self');

INSERT INTO items (item_code, name, category_name, category_id, manufacturer, model_number, note, is_active, display_order)
SELECT
    'ext-tv-not-needed',
    'TV視聴不要',
    'TV視聴',
    (SELECT id FROM categories WHERE name = 'TV視聴' LIMIT 1),
    '不要',
    'TV-NOT-NEEDED',
    'TV視聴の設備は不要です [TV視聴]',
    true,
    5
WHERE NOT EXISTS (SELECT 1 FROM items WHERE item_code = 'ext-tv-not-needed');

-- =====================================================
-- 6. 窓タイプアイテムの追加
-- =====================================================

INSERT INTO items (item_code, name, category_name, category_id, manufacturer, model_number, note, is_active, display_order)
SELECT
    'ext-window-type-apw330',
    'APW330（樹脂サッシ・ペアガラス）',
    '窓タイプ',
    (SELECT id FROM categories WHERE name = '窓タイプ' LIMIT 1),
    'YKKAP',
    'APW330',
    '樹脂サッシ アルゴンガス ペアガラス 熱貫流率1.31W/(㎡・K) [窓タイプ]',
    true,
    1
WHERE NOT EXISTS (SELECT 1 FROM items WHERE item_code = 'ext-window-type-apw330');

INSERT INTO items (item_code, name, category_name, category_id, manufacturer, model_number, note, is_active, display_order)
SELECT
    'ext-window-type-apw430',
    'APW430（樹脂サッシ・トリプルガラス）',
    '窓タイプ',
    (SELECT id FROM categories WHERE name = '窓タイプ' LIMIT 1),
    'YKKAP',
    'APW430',
    '樹脂サッシ トリプルガラス 熱貫流率0.90W/(㎡・K) より高い断熱性能 [窓タイプ]',
    true,
    2
WHERE NOT EXISTS (SELECT 1 FROM items WHERE item_code = 'ext-window-type-apw430');

-- =====================================================
-- 7. 価格情報の追加（TV視聴・窓タイプ）
-- =====================================================

-- TV視聴の価格（LACIE/HOURS用）
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available, effective_date)
SELECT
    i.id,
    p.id,
    CASE
        WHEN i.item_code = 'ext-tv-antenna-only' THEN 80000
        WHEN i.item_code = 'ext-tv-antenna-bs' THEN 95000
        ELSE 0
    END,
    CASE
        WHEN i.item_code IN ('ext-tv-fiber-ghouse', 'ext-tv-fiber-self', 'ext-tv-not-needed') THEN true
        ELSE false
    END,
    true,
    CURRENT_DATE
FROM items i
CROSS JOIN products p
WHERE i.item_code LIKE 'ext-tv-%'
AND p.code IN ('LACIE', 'HOURS')
AND NOT EXISTS (
    SELECT 1 FROM item_pricing ip
    WHERE ip.item_id = i.id AND ip.product_id = p.id
);

-- 窓タイプの価格
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available, effective_date)
SELECT
    i.id,
    p.id,
    CASE
        WHEN i.item_code = 'ext-window-type-apw330' THEN 0
        WHEN i.item_code = 'ext-window-type-apw430' THEN 300000
        ELSE 0
    END,
    CASE WHEN i.item_code = 'ext-window-type-apw330' THEN true ELSE false END,
    true,
    CURRENT_DATE
FROM items i
CROSS JOIN products p
WHERE i.item_code LIKE 'ext-window-type-%'
AND p.code IN ('LACIE', 'HOURS')
AND NOT EXISTS (
    SELECT 1 FROM item_pricing ip
    WHERE ip.item_id = i.id AND ip.product_id = p.id
);

-- =====================================================
-- 8. バリアント情報の追加（TV視聴・窓タイプ）
-- =====================================================

INSERT INTO item_variants (item_id, variant_code, color_name, is_active, display_order)
SELECT
    i.id,
    'v1',
    CASE
        WHEN i.item_code = 'ext-tv-not-needed' THEN '不要'
        ELSE '標準'
    END,
    true,
    0
FROM items i
WHERE i.item_code LIKE 'ext-tv-%' OR i.item_code LIKE 'ext-window-type-%'
AND NOT EXISTS (
    SELECT 1 FROM item_variants iv WHERE iv.item_id = i.id
);

-- コミット
COMMIT;

-- =====================================================
-- 確認クエリ（実行後に確認用）
-- =====================================================

-- カテゴリ別アイテム数の確認
-- SELECT category_name, COUNT(*) as count FROM items WHERE is_active = true GROUP BY category_name ORDER BY category_name;

-- 樋・水切カテゴリのアイテム確認
-- SELECT item_code, name, category_name FROM items WHERE category_name = '樋・水切';

-- 屋根カテゴリのアイテム確認（1件のみであるべき）
-- SELECT item_code, name, category_name FROM items WHERE category_name = '屋根';

-- TV視聴カテゴリのアイテム確認
-- SELECT item_code, name, category_name FROM items WHERE category_name = 'TV視聴';
