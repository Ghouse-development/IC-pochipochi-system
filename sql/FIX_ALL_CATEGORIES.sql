-- =============================================
-- カテゴリ一括修正SQL
-- 外装 + 家具・家電
-- =============================================

-- ========== 外装カテゴリ ==========
DELETE FROM categories WHERE category_type = 'exterior';

INSERT INTO categories (name, slug, category_type, is_required, is_active, display_order) VALUES
('外壁', 'gaiheki', 'exterior', true, true, 1),
('ポーチ', 'porch', 'exterior', true, true, 2),
('屋根', 'yane', 'exterior', true, true, 3),
('外部配管', 'gaibu-haikan', 'exterior', true, true, 4),
('樋', 'toi', 'exterior', true, true, 5),
('軒天', 'nokiten', 'exterior', true, true, 6),
('ガレージシャッター', 'garage-shutter', 'exterior', true, true, 7),
('窓', 'mado', 'exterior', true, true, 8),
('玄関ドア', 'genkan-door', 'exterior', true, true, 9),
('外部設備', 'gaibu-setsubi', 'exterior', true, true, 10),
('エコキュート', 'ecocute', 'exterior', false, true, 11),
('換気システム', 'kanki-system', 'exterior', false, true, 12),
('太陽光・蓄電池', 'solar-battery', 'exterior', false, true, 13),
('庇', 'hisashi', 'exterior', false, true, 14),
('破風', 'hafu', 'exterior', false, true, 15);

-- ========== 家具・家電カテゴリ ==========
DELETE FROM categories WHERE category_type = 'furniture';

INSERT INTO categories (name, slug, category_type, is_required, is_active, display_order) VALUES
('オリジナルダイニングテーブル', 'original-dining-table', 'furniture', false, true, 1),
('エアコン', 'aircon', 'furniture', false, true, 2),
('カーテン', 'curtain', 'furniture', false, true, 3),
('家具', 'kagu', 'furniture', false, true, 4);
