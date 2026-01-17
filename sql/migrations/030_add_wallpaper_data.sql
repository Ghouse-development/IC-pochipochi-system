-- クロス（壁紙）データ追加
-- ベースクロス（壁）・ベースクロス（天井）で共通使用
-- タグ: wallpaper

-- ===============================
-- SPシリーズ（サンゲツ）
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2501', 'SP2501', 'サンゲツ', 'SPシリーズ', true, true, 0, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2501-v1', 'SP2501', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2501' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2502', 'SP2502', 'サンゲツ', 'SPシリーズ', true, true, 1, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2502-v1', 'SP2502', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2502' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2504', 'SP2504', 'サンゲツ', 'SPシリーズ', true, false, 2, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2504-v1', 'SP2504', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2504' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2507', 'SP2507', 'サンゲツ', 'SPシリーズ', true, false, 3, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2507-v1', 'SP2507', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2507' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2530', 'SP2530', 'サンゲツ', 'SPシリーズ', true, false, 4, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2530-v1', 'SP2530', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2530' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2531', 'SP2531', 'サンゲツ', 'SPシリーズ', true, false, 5, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2531-v1', 'SP2531', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2531' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2532', 'SP2532', 'サンゲツ', 'SPシリーズ', true, false, 6, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2532-v1', 'SP2532', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2532' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2533', 'SP2533', 'サンゲツ', 'SPシリーズ', true, false, 7, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2533-v1', 'SP2533', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2533' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2539', 'SP2539', 'サンゲツ', 'SPシリーズ', true, false, 8, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2539-v1', 'SP2539', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2539' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2540', 'SP2540', 'サンゲツ', 'SPシリーズ', true, false, 9, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2540-v1', 'SP2540', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2540' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2541', 'SP2541', 'サンゲツ', 'SPシリーズ', true, false, 10, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2541-v1', 'SP2541', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2541' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2550', 'SP2550', 'サンゲツ', 'SPシリーズ', true, false, 11, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2550-v1', 'SP2550', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2550' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2551', 'SP2551', 'サンゲツ', 'SPシリーズ', true, false, 12, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2551-v1', 'SP2551', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2551' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2555', 'SP2555', 'サンゲツ', 'SPシリーズ', true, false, 13, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2555-v1', 'SP2555', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2555' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2556', 'SP2556', 'サンゲツ', 'SPシリーズ', true, false, 14, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2556-v1', 'SP2556', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2556' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2557', 'SP2557', 'サンゲツ', 'SPシリーズ', true, false, 15, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2557-v1', 'SP2557', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2557' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2562', 'SP2562', 'サンゲツ', 'SPシリーズ', true, false, 16, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2562-v1', 'SP2562', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2562' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2563', 'SP2563', 'サンゲツ', 'SPシリーズ', true, false, 17, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2563-v1', 'SP2563', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2563' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2564', 'SP2564', 'サンゲツ', 'SPシリーズ', true, false, 18, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2564-v1', 'SP2564', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2564' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2565', 'SP2565', 'サンゲツ', 'SPシリーズ', true, false, 19, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2565-v1', 'SP2565', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2565' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2567', 'SP2567', 'サンゲツ', 'SPシリーズ', true, false, 20, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2567-v1', 'SP2567', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2567' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2568', 'SP2568', 'サンゲツ', 'SPシリーズ', true, false, 21, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2568-v1', 'SP2568', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2568' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2569', 'SP2569', 'サンゲツ', 'SPシリーズ', true, false, 22, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2569-v1', 'SP2569', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2569' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2583', 'SP2583', 'サンゲツ', 'SPシリーズ', true, false, 23, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2583-v1', 'SP2583', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2583' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2584', 'SP2584', 'サンゲツ', 'SPシリーズ', true, false, 24, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2584-v1', 'SP2584', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2584' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2585', 'SP2585', 'サンゲツ', 'SPシリーズ', true, false, 25, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2585-v1', 'SP2585', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2585' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2586', 'SP2586', 'サンゲツ', 'SPシリーズ', true, false, 26, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2586-v1', 'SP2586', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2586' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2587', 'SP2587', 'サンゲツ', 'SPシリーズ', true, false, 27, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2587-v1', 'SP2587', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2587' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2588', 'SP2588', 'サンゲツ', 'SPシリーズ', true, false, 28, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2588-v1', 'SP2588', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2588' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2589', 'SP2589', 'サンゲツ', 'SPシリーズ', true, false, 29, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2589-v1', 'SP2589', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2589' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp2590', 'SP2590', 'サンゲツ', 'SPシリーズ', true, false, 30, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp2590-v1', 'SP2590', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp2590' ON CONFLICT DO NOTHING;

-- ===============================
-- REシリーズ（サンゲツ Reserve）
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55003', 'RE55003', 'サンゲツ', 'REシリーズ', true, true, 100, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55003-v1', 'RE55003', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55003' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55007', 'RE55007', 'サンゲツ', 'REシリーズ', true, false, 101, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55007-v1', 'RE55007', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55007' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55008', 'RE55008', 'サンゲツ', 'REシリーズ', true, false, 102, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55008-v1', 'RE55008', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55008' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55009', 'RE55009', 'サンゲツ', 'REシリーズ', true, false, 103, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55009-v1', 'RE55009', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55009' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55010', 'RE55010', 'サンゲツ', 'REシリーズ', true, false, 104, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55010-v1', 'RE55010', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55010' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55038', 'RE55038', 'サンゲツ', 'REシリーズ', true, false, 105, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55038-v1', 'RE55038', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55038' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55039', 'RE55039', 'サンゲツ', 'REシリーズ', true, false, 106, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55039-v1', 'RE55039', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55039' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55056', 'RE55056', 'サンゲツ', 'REシリーズ', true, false, 107, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55056-v1', 'RE55056', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55056' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55078', 'RE55078', 'サンゲツ', 'REシリーズ', true, false, 108, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55078-v1', 'RE55078', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55078' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55096', 'RE55096', 'サンゲツ', 'REシリーズ', true, false, 109, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55096-v1', 'RE55096', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55096' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55097', 'RE55097', 'サンゲツ', 'REシリーズ', true, false, 110, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55097-v1', 'RE55097', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55097' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55224', 'RE55224', 'サンゲツ', 'REシリーズ', true, false, 111, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55224-v1', 'RE55224', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55224' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55228', 'RE55228', 'サンゲツ', 'REシリーズ', true, false, 112, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55228-v1', 'RE55228', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55228' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55582', 'RE55582', 'サンゲツ', 'REシリーズ', true, false, 113, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55582-v1', 'RE55582', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55582' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55583', 'RE55583', 'サンゲツ', 'REシリーズ', true, false, 114, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55583-v1', 'RE55583', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55583' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55584', 'RE55584', 'サンゲツ', 'REシリーズ', true, false, 115, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55584-v1', 'RE55584', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55584' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55585', 'RE55585', 'サンゲツ', 'REシリーズ', true, false, 116, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55585-v1', 'RE55585', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55585' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55586', 'RE55586', 'サンゲツ', 'REシリーズ', true, false, 117, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55586-v1', 'RE55586', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55586' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55613', 'RE55613', 'サンゲツ', 'REシリーズ', true, false, 118, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55613-v1', 'RE55613', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55613' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55615', 'RE55615', 'サンゲツ', 'REシリーズ', true, false, 119, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55615-v1', 'RE55615', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55615' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55616', 'RE55616', 'サンゲツ', 'REシリーズ', true, false, 120, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55616-v1', 'RE55616', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55616' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55632', 'RE55632', 'サンゲツ', 'REシリーズ', true, false, 121, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55632-v1', 'RE55632', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55632' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55633', 'RE55633', 'サンゲツ', 'REシリーズ', true, false, 122, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55633-v1', 'RE55633', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55633' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55651', 'RE55651', 'サンゲツ', 'REシリーズ', true, false, 123, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55651-v1', 'RE55651', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55651' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55652', 'RE55652', 'サンゲツ', 'REシリーズ', true, false, 124, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55652-v1', 'RE55652', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55652' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55653', 'RE55653', 'サンゲツ', 'REシリーズ', true, false, 125, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55653-v1', 'RE55653', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55653' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55655', 'RE55655', 'サンゲツ', 'REシリーズ', true, false, 126, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55655-v1', 'RE55655', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55655' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55656', 'RE55656', 'サンゲツ', 'REシリーズ', true, false, 127, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55656-v1', 'RE55656', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55656' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55659', 'RE55659', 'サンゲツ', 'REシリーズ', true, false, 128, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55659-v1', 'RE55659', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55659' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re55660', 'RE55660', 'サンゲツ', 'REシリーズ', true, false, 129, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're55660-v1', 'RE55660', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re55660' ON CONFLICT DO NOTHING;

-- ===============================
-- マグマジック
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-magmagic-v', 'マグマジックSP：縦貼り', 'サンゲツ', 'マグネット対応壁紙', true, false, 200, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'magmagic-v-v1', '縦貼り', '#E8E8E8', true, 0 FROM items WHERE item_code = 'wallpaper-magmagic-v' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-magmagic-h', 'マグマジックSP：横貼り', 'サンゲツ', 'マグネット対応壁紙', true, false, 201, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'magmagic-h-v1', '横貼り', '#E8E8E8', true, 0 FROM items WHERE item_code = 'wallpaper-magmagic-h' ON CONFLICT DO NOTHING;

-- ===============================
-- タイル
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-tile', 'タイル張り', '各社', '壁面タイル仕上げ', true, false, 210, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'tile-v1', 'タイル張り', '#D0D0D0', true, 0 FROM items WHERE item_code = 'wallpaper-tile' ON CONFLICT DO NOTHING;

-- ===============================
-- 旧SPシリーズ
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9701', 'SP9701', 'サンゲツ', '旧SPシリーズ', true, false, 300, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9701-v1', 'SP9701', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9701' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9702', 'SP9702', 'サンゲツ', '旧SPシリーズ', true, false, 301, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9702-v1', 'SP9702', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9702' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9703', 'SP9703', 'サンゲツ', '旧SPシリーズ', true, false, 302, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9703-v1', 'SP9703', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9703' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9704', 'SP9704', 'サンゲツ', '旧SPシリーズ', true, false, 303, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9704-v1', 'SP9704', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9704' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9729', 'SP9729', 'サンゲツ', '旧SPシリーズ', true, false, 304, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9729-v1', 'SP9729', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9729' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9730', 'SP9730', 'サンゲツ', '旧SPシリーズ', true, false, 305, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9730-v1', 'SP9730', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9730' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9731', 'SP9731', 'サンゲツ', '旧SPシリーズ', true, false, 306, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9731-v1', 'SP9731', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9731' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9732', 'SP9732', 'サンゲツ', '旧SPシリーズ', true, false, 307, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9732-v1', 'SP9732', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9732' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9733', 'SP9733', 'サンゲツ', '旧SPシリーズ', true, false, 308, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9733-v1', 'SP9733', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9733' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9736', 'SP9736', 'サンゲツ', '旧SPシリーズ', true, false, 309, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9736-v1', 'SP9736', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9736' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9737', 'SP9737', 'サンゲツ', '旧SPシリーズ', true, false, 310, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9737-v1', 'SP9737', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9737' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9776', 'SP9776', 'サンゲツ', '旧SPシリーズ', true, false, 311, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9776-v1', 'SP9776', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9776' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9777', 'SP9777', 'サンゲツ', '旧SPシリーズ', true, false, 312, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9777-v1', 'SP9777', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9777' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9780', 'SP9780', 'サンゲツ', '旧SPシリーズ', true, false, 313, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9780-v1', 'SP9780', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9780' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9789', 'SP9789', 'サンゲツ', '旧SPシリーズ', true, false, 314, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9789-v1', 'SP9789', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9789' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9791', 'SP9791', 'サンゲツ', '旧SPシリーズ', true, false, 315, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9791-v1', 'SP9791', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9791' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9792', 'SP9792', 'サンゲツ', '旧SPシリーズ', true, false, 316, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9792-v1', 'SP9792', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9792' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9793', 'SP9793', 'サンゲツ', '旧SPシリーズ', true, false, 317, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9793-v1', 'SP9793', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9793' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9794', 'SP9794', 'サンゲツ', '旧SPシリーズ', true, false, 318, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9794-v1', 'SP9794', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9794' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9795', 'SP9795', 'サンゲツ', '旧SPシリーズ', true, false, 319, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9795-v1', 'SP9795', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9795' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9796', 'SP9796', 'サンゲツ', '旧SPシリーズ', true, false, 320, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9796-v1', 'SP9796', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9796' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9797', 'SP9797', 'サンゲツ', '旧SPシリーズ', true, false, 321, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9797-v1', 'SP9797', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9797' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9798', 'SP9798', 'サンゲツ', '旧SPシリーズ', true, false, 322, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9798-v1', 'SP9798', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9798' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9799', 'SP9799', 'サンゲツ', '旧SPシリーズ', true, false, 323, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9799-v1', 'SP9799', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9799' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9800', 'SP9800', 'サンゲツ', '旧SPシリーズ', true, false, 324, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9800-v1', 'SP9800', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9800' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9803', 'SP9803', 'サンゲツ', '旧SPシリーズ', true, false, 325, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9803-v1', 'SP9803', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9803' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9804', 'SP9804', 'サンゲツ', '旧SPシリーズ', true, false, 326, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9804-v1', 'SP9804', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9804' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-sp9805', 'SP9805', 'サンゲツ', '旧SPシリーズ', true, false, 327, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'sp9805-v1', 'SP9805', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-sp9805' ON CONFLICT DO NOTHING;

-- ===============================
-- 旧REシリーズ
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re53020', 'RE53020', 'サンゲツ', '旧REシリーズ', true, false, 400, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're53020-v1', 'RE53020', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re53020' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re53032', 'RE53032', 'サンゲツ', '旧REシリーズ', true, false, 401, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're53032-v1', 'RE53032', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re53032' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re53033', 'RE53033', 'サンゲツ', '旧REシリーズ', true, false, 402, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're53033-v1', 'RE53033', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re53033' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re53325', 'RE53325', 'サンゲツ', '旧REシリーズ', true, false, 403, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're53325-v1', 'RE53325', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re53325' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re53332', 'RE53332', 'サンゲツ', '旧REシリーズ', true, false, 404, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're53332-v1', 'RE53332', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re53332' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re53333', 'RE53333', 'サンゲツ', '旧REシリーズ', true, false, 405, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're53333-v1', 'RE53333', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re53333' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re53342', 'RE53342', 'サンゲツ', '旧REシリーズ', true, false, 406, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're53342-v1', 'RE53342', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re53342' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-re53345', 'RE53345', 'サンゲツ', '旧REシリーズ', true, false, 407, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 're53345-v1', 'RE53345', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-re53345' ON CONFLICT DO NOTHING;

-- ===============================
-- 旧FEシリーズ
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76032', 'FE76032', 'サンゲツ', '旧FEシリーズ', true, false, 500, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76032-v1', 'FE76032', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76032' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76038', 'FE76038', 'サンゲツ', '旧FEシリーズ', true, false, 501, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76038-v1', 'FE76038', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76038' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76039', 'FE76039', 'サンゲツ', '旧FEシリーズ', true, false, 502, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76039-v1', 'FE76039', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76039' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76040', 'FE76040', 'サンゲツ', '旧FEシリーズ', true, false, 503, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76040-v1', 'FE76040', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76040' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76042', 'FE76042', 'サンゲツ', '旧FEシリーズ', true, false, 504, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76042-v1', 'FE76042', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76042' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76076', 'FE76076', 'サンゲツ', '旧FEシリーズ', true, false, 505, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76076-v1', 'FE76076', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76076' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76098', 'FE76098', 'サンゲツ', '旧FEシリーズ', true, false, 506, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76098-v1', 'FE76098', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76098' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76114', 'FE76114', 'サンゲツ', '旧FEシリーズ', true, false, 507, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76114-v1', 'FE76114', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76114' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76121', 'FE76121', 'サンゲツ', '旧FEシリーズ', true, false, 508, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76121-v1', 'FE76121', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76121' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76122', 'FE76122', 'サンゲツ', '旧FEシリーズ', true, false, 509, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76122-v1', 'FE76122', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76122' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76123', 'FE76123', 'サンゲツ', '旧FEシリーズ', true, false, 510, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76123-v1', 'FE76123', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76123' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76124', 'FE76124', 'サンゲツ', '旧FEシリーズ', true, false, 511, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76124-v1', 'FE76124', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76124' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76138', 'FE76138', 'サンゲツ', '旧FEシリーズ', true, false, 512, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76138-v1', 'FE76138', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76138' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76139', 'FE76139', 'サンゲツ', '旧FEシリーズ', true, false, 513, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76139-v1', 'FE76139', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76139' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76140', 'FE76140', 'サンゲツ', '旧FEシリーズ', true, false, 514, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76140-v1', 'FE76140', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76140' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76141', 'FE76141', 'サンゲツ', '旧FEシリーズ', true, false, 515, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76141-v1', 'FE76141', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76141' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76142', 'FE76142', 'サンゲツ', '旧FEシリーズ', true, false, 516, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76142-v1', 'FE76142', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76142' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76254', 'FE76254', 'サンゲツ', '旧FEシリーズ', true, false, 517, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76254-v1', 'FE76254', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76254' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76255', 'FE76255', 'サンゲツ', '旧FEシリーズ', true, false, 518, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76255-v1', 'FE76255', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76255' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76256', 'FE76256', 'サンゲツ', '旧FEシリーズ', true, false, 519, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76256-v1', 'FE76256', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76256' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76279', 'FE76279', 'サンゲツ', '旧FEシリーズ', true, false, 520, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76279-v1', 'FE76279', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76279' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76571', 'FE76571', 'サンゲツ', '旧FEシリーズ', true, false, 521, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76571-v1', 'FE76571', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76571' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76572', 'FE76572', 'サンゲツ', '旧FEシリーズ', true, false, 522, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76572-v1', 'FE76572', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76572' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76580', 'FE76580', 'サンゲツ', '旧FEシリーズ', true, false, 523, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76580-v1', 'FE76580', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76580' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76582', 'FE76582', 'サンゲツ', '旧FEシリーズ', true, false, 524, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76582-v1', 'FE76582', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76582' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76585', 'FE76585', 'サンゲツ', '旧FEシリーズ', true, false, 525, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76585-v1', 'FE76585', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76585' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76586', 'FE76586', 'サンゲツ', '旧FEシリーズ', true, false, 526, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76586-v1', 'FE76586', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76586' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76616', 'FE76616', 'サンゲツ', '旧FEシリーズ', true, false, 527, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76616-v1', 'FE76616', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76616' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76618', 'FE76618', 'サンゲツ', '旧FEシリーズ', true, false, 528, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76618-v1', 'FE76618', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76618' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76619', 'FE76619', 'サンゲツ', '旧FEシリーズ', true, false, 529, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76619-v1', 'FE76619', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76619' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76627', 'FE76627', 'サンゲツ', '旧FEシリーズ', true, false, 530, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76627-v1', 'FE76627', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76627' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76628', 'FE76628', 'サンゲツ', '旧FEシリーズ', true, false, 531, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76628-v1', 'FE76628', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76628' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76640', 'FE76640', 'サンゲツ', '旧FEシリーズ', true, false, 532, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76640-v1', 'FE76640', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76640' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76656', 'FE76656', 'サンゲツ', '旧FEシリーズ', true, false, 533, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76656-v1', 'FE76656', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76656' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76657', 'FE76657', 'サンゲツ', '旧FEシリーズ', true, false, 534, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76657-v1', 'FE76657', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76657' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76658', 'FE76658', 'サンゲツ', '旧FEシリーズ', true, false, 535, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76658-v1', 'FE76658', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76658' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76659', 'FE76659', 'サンゲツ', '旧FEシリーズ', true, false, 536, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76659-v1', 'FE76659', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76659' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76660', 'FE76660', 'サンゲツ', '旧FEシリーズ', true, false, 537, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76660-v1', 'FE76660', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76660' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76661', 'FE76661', 'サンゲツ', '旧FEシリーズ', true, false, 538, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76661-v1', 'FE76661', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76661' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76662', 'FE76662', 'サンゲツ', '旧FEシリーズ', true, false, 539, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76662-v1', 'FE76662', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76662' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76753', 'FE76753', 'サンゲツ', '旧FEシリーズ', true, false, 540, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76753-v1', 'FE76753', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76753' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-fe76754', 'FE76754', 'サンゲツ', '旧FEシリーズ', true, false, 541, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'fe76754-v1', 'FE76754', '#F8F8F8', true, 0 FROM items WHERE item_code = 'wallpaper-fe76754' ON CONFLICT DO NOTHING;

-- ===============================
-- 旧THシリーズ
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-th32351', 'TH32351', 'サンゲツ', '旧THシリーズ', true, false, 600, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'th32351-v1', 'TH32351', '#FAFAFA', true, 0 FROM items WHERE item_code = 'wallpaper-th32351' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-th32352', 'TH32352', 'サンゲツ', '旧THシリーズ', true, false, 601, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'th32352-v1', 'TH32352', '#FAFAFA', true, 0 FROM items WHERE item_code = 'wallpaper-th32352' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-th32711', 'TH32711', 'サンゲツ', '旧THシリーズ', true, false, 602, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'th32711-v1', 'TH32711', '#FAFAFA', true, 0 FROM items WHERE item_code = 'wallpaper-th32711' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-th32712', 'TH32712', 'サンゲツ', '旧THシリーズ', true, false, 603, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'th32712-v1', 'TH32712', '#FAFAFA', true, 0 FROM items WHERE item_code = 'wallpaper-th32712' ON CONFLICT DO NOTHING;

-- ===============================
-- 旧BA/BB シリーズ
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-ba6155', 'BA6155', 'サンゲツ', '旧BAシリーズ', true, false, 700, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'ba6155-v1', 'BA6155', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-ba6155' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-bb8331', 'BB8331', 'サンゲツ', '旧BBシリーズ', true, false, 701, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'bb8331-v1', 'BB8331', '#F0F0F0', true, 0 FROM items WHERE item_code = 'wallpaper-bb8331' ON CONFLICT DO NOTHING;

-- ===============================
-- 旧LBシリーズ
-- ===============================

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-lb9550', 'LB9550', 'サンゲツ', '旧LBシリーズ', true, false, 800, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'lb9550-v1', 'LB9550', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-lb9550' ON CONFLICT DO NOTHING;

INSERT INTO items (item_code, name, manufacturer, note, is_active, is_recommended, display_order, tags)
VALUES ('wallpaper-lb9577', 'LB9577', 'サンゲツ', '旧LBシリーズ', true, false, 801, ARRAY['wallpaper'])
ON CONFLICT (item_code) DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, is_active, display_order)
SELECT id, 'lb9577-v1', 'LB9577', '#F5F5F5', true, 0 FROM items WHERE item_code = 'wallpaper-lb9577' ON CONFLICT DO NOTHING;

-- ===============================
-- 価格設定（全クロス標準0円）
-- ===============================

INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available, effective_date)
SELECT i.id, p.id, 0, true, true, CURRENT_DATE
FROM items i
CROSS JOIN products p
WHERE i.tags @> ARRAY['wallpaper']
  AND p.code IN ('LACIE', 'HOURS', 'LIFE_PLUS', 'LIFE')
ON CONFLICT DO NOTHING;

-- ===============================
-- 確認クエリ
-- ===============================
-- SELECT i.name, i.manufacturer, i.note, COUNT(v.id) as variant_count
-- FROM items i
-- LEFT JOIN item_variants v ON v.item_id = i.id
-- WHERE 'wallpaper' = ANY(i.tags)
-- GROUP BY i.id
-- ORDER BY i.display_order;
