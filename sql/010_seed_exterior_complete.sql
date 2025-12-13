-- ========================================
-- 外装アイテム完全移行SQL
-- 生成日時: 2025-12-13T01:30:45.682Z
-- アイテム数: 151
-- ========================================

-- トランザクション開始
BEGIN;

-- 既存の外装アイテムを削除（クリーンアップ）
DELETE FROM item_pricing WHERE item_id IN (
  SELECT id FROM items WHERE category_id IN (
    SELECT id FROM categories WHERE category_type = 'exterior'
  )
);
DELETE FROM item_variants WHERE item_id IN (
  SELECT id FROM items WHERE category_id IN (
    SELECT id FROM categories WHERE category_type = 'exterior'
  )
);
DELETE FROM items WHERE category_id IN (
  SELECT id FROM categories WHERE category_type = 'exterior'
);
DELETE FROM categories WHERE category_type = 'exterior';

-- ========================================
-- カテゴリ登録 (14件)
-- ========================================
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('外壁', 'exterior-wall', 'exterior', '外壁', 1, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('ポーチ', 'exterior-porch', 'exterior', 'ポーチ', 2, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('屋根', 'exterior-roof', 'exterior', '屋根', 3, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('樋', 'exterior-gutter', 'exterior', '樋', 4, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('軒天', 'exterior-soffit', 'exterior', '軒天', 5, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('窓', 'exterior-window', 'exterior', '窓', 6, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('玄関ドア', 'exterior-entrance-door', 'exterior', '玄関ドア', 7, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('外部設備', 'exterior-equipment', 'exterior', '外部設備', 8, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('エコキュート', 'exterior-eco-cute', 'exterior', 'エコキュート', 9, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('ガレージシャッター', 'exterior-garage-shutter', 'exterior', 'ガレージシャッター', 10, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('庇', 'exterior-awning', 'exterior', '庇', 11, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('電動ガレージシャッター', 'exterior-electric-shutter', 'exterior', '電動ガレージシャッター', 12, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('換気システム', 'exterior-ventilation', 'exterior', '換気システム', 13, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('太陽光・蓄電池', 'exterior-solar-battery', 'exterior', '太陽光・蓄電池', 14, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;

-- ========================================
-- アイテム登録 (151件)
-- ========================================

-- 1. モナビストーンV
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-MONABISTONE-V',
  'モナビストーンV',
  'ニチハ',
  '外壁',
  'EFA52xxFK/GK/TK',
  '横張のみの採用となります',
  true,
  true,
  1
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 2. リーガストーン調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-REEGA-STONE',
  'リーガストーン調V',
  'ニチハ',
  '外壁',
  'EFX34xxCK/NK',
  '横張のみの採用となります',
  true,
  true,
  2
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 3. ボルブストーン調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-BOLB-STONE',
  'ボルブストーン調V',
  'ニチハ',
  '外壁',
  'EFX3151FK',
  '横張のみの採用となります',
  true,
  true,
  3
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 4. ルボン プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-LUBON-PREMIUM',
  'ルボン プレミアム',
  'KMEW',
  '外壁',
  'ELS4xxP',
  'プレミアム外壁 シーリング目地に比べて継ぎ目が目立たない',
  false,
  true,
  4
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 5. モエンエクセラード16 Fuge
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-MOENE-FUGE',
  'モエンエクセラード16 Fuge',
  'ニチハ',
  '外壁',
  'EQS6xxD',
  'モエンエクセラード16 Fuge',
  false,
  true,
  5
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 6. COOL イルミオ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-COOL-ILLUMINIO',
  'COOL イルミオ',
  'アイカ',
  '外壁',
  'EFM5xxP',
  'COOL 遮熱性能付き外壁',
  false,
  true,
  6
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 7. 新フラット16 フィエルテ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-FLAT16',
  '新フラット16 フィエルテ',
  'KMEW',
  '外壁',
  'NH49xxA',
  'フラットデザイン外壁（16mm厚）',
  false,
  true,
  7
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 8. カンターピレ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-CANTERPILE',
  'カンターピレ',
  'KMEW',
  '外壁',
  'NH5921A',
  'タイルデザイン外壁（16mm厚）',
  false,
  true,
  8
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 9. アルテミュール
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-ARTEMUR',
  'アルテミュール',
  'KONOSHIMA',
  '外壁',
  'ARTE-RCx-GC',
  'アルテミュール 木目調外壁',
  false,
  true,
  9
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 10. ジョリパットネオ∞ エンシェントブリック
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-JOLYPATE',
  'ジョリパットネオ∞ エンシェントブリック',
  'AICA',
  '外壁',
  'JQ-620-Txxxx',
  'ジョリパットネオ∞ 塗装仕上げ',
  false,
  true,
  10
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 11. SOLIDO typeM_LAP
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SOLIDO',
  'SOLIDO typeM_LAP',
  'KMEW',
  '外壁',
  'SMGxxG',
  'SOLIDO 高級外壁材 HOURS/LACIE:5㎡以下は80,000円/式 LIFE+/LIFE:5㎡以下は110,000円/式',
  false,
  true,
  11
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 12. メンフィス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-MEMPHIS',
  'メンフィス',
  'LIXIL',
  'ポーチ',
  'IPF-600/MMP-xx',
  '600×600 標準内外部ポーチサイズ：1.8m×1.8m',
  true,
  true,
  12
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 13. ニスクカラーSGL
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ROOF-NISC',
  'ニスクカラーSGL',
  '日鉄鋼板',
  '屋根',
  'NM-8697',
  '材料標準保証規格10年 国土交通大臣認定不燃材料 海岸500m以遠原板の穴あき25年保証',
  true,
  true,
  13
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 14. ファインスケアNF-I型
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-GUTTER-HORIZONTAL',
  'ファインスケアNF-I型',
  'Panasonic',
  '樋',
  'MQFxxxx',
  '横樋',
  true,
  true,
  14
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 15. S30
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-GUTTER-VERTICAL',
  'S30',
  'Panasonic',
  '樋',
  'KBPxxxx',
  '縦樋',
  true,
  true,
  15
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 16. エンボス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-SOFFIT-EMBOSS',
  'エンボス',
  '神島化学',
  '軒天',
  'EMBOSS',
  '軒天材',
  true,
  true,
  16
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 17. アルテザート
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-SOFFIT-ARTEZART',
  'アルテザート',
  'KONOSHIMA',
  '軒天',
  'ARTE-RCN',
  '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可。5㎡までは80,000円/式',
  false,
  true,
  17
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 18. APW330
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW330',
  'APW330',
  'YKKAP',
  '窓',
  'APW330',
  '樹脂サッシ アルゴンガス ペアガラス 熱貫流率1.31W/(㎡・K)',
  true,
  true,
  18
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 19. 電動シャッター W1650まで
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-SHUTTER-W1650',
  '電動シャッター W1650まで',
  'YKKAP',
  '窓',
  'SHUTTER-E-W1650',
  '電動シャッターへ変更 W1650まで',
  false,
  true,
  19
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 20. 電動シャッター W2560まで
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-SHUTTER-W2560',
  '電動シャッター W2560まで',
  'YKKAP',
  '窓',
  'SHUTTER-E-W2560',
  '電動シャッターへ変更 W2560まで',
  false,
  true,
  20
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 21. ヴェナートD30
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-DOOR-VENATO-D30',
  'ヴェナートD30',
  'YKKAP',
  '玄関ドア',
  'D30-C10N',
  '100V電気錠 ポケットキー付き 防火・非防火対応',
  true,
  true,
  21
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 22. 外部コンセント（1カ所標準）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-OUTLET-STD',
  '外部コンセント（1カ所標準）',
  'Panasonic',
  '外部設備',
  'EXT-OUTLET',
  '外部コンセント（1カ所標準）',
  true,
  true,
  22
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 23. 外部コンセント追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-OUTLET-ADD',
  '外部コンセント追加',
  'Panasonic',
  '外部設備',
  'EXT-OUTLET-ADD',
  '外部コンセント追加',
  false,
  true,
  23
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 24. EV用コンセント
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-EV-OUTLET',
  'EV用コンセント',
  'Panasonic',
  '外部設備',
  'EV-OUTLET',
  'EV用コンセント（1ヶ所）',
  false,
  true,
  24
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 25. 散水栓
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-SANSUI',
  '散水栓',
  'オンリーワン',
  '外部設備',
  'GM3-ALKCF',
  '散水栓（排水なし） 標準で1カ所取付可能',
  true,
  true,
  25
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 26. 立水栓
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-TACHIMIZU',
  '立水栓',
  'オンリーワン',
  '外部設備',
  'GM3-ALSCF',
  '立水栓（排水なし） 標準で1カ所取付可能',
  true,
  true,
  26
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 27. アルミ立水栓追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-TACHIMIZU-ADD',
  'アルミ立水栓追加',
  'オンリーワン',
  '外部設備',
  'ALU-FAUCET-ADD',
  'アルミ立水栓追加',
  false,
  true,
  27
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 28. 玄関用マルチフック
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-MULTIHOOK',
  '玄関用マルチフック',
  '森田アルミ',
  '外部設備',
  'VIK',
  '玄関用マルチフック（下地込み）',
  false,
  true,
  28
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 29. タープフック
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-TARPHOOK',
  'タープフック',
  'フジワラ',
  '外部設備',
  'IP-12',
  'アイプレートIP-12（2個セット・下地込み）',
  false,
  true,
  29
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 30. エアコンスリーブキャップ（5カ所標準）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-AC-SLEEVE-STD',
  'エアコンスリーブキャップ（5カ所標準）',
  '標準',
  '外部設備',
  'AC-SLEEVE',
  'エアコンスリーブキャップ（5カ所標準）',
  true,
  true,
  30
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 31. エアコンスリーブキャップ追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-AC-SLEEVE-ADD',
  'エアコンスリーブキャップ追加',
  '標準',
  '外部設備',
  'AC-SLEEVE-ADD',
  'エアコンスリーブキャップ追加',
  false,
  true,
  31
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 32. エコキュート370L（標準）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-STANDARD',
  'エコキュート370L（標準）',
  'Panasonic',
  'エコキュート',
  'HE-S37LQS',
  'Sシリーズ 370L 標準（外部設置）',
  true,
  true,
  32
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 33. エコキュート460L
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-460L',
  'エコキュート460L',
  'Panasonic',
  'エコキュート',
  'HE-S46LQS',
  'Sシリーズ 460Lに変更',
  false,
  true,
  33
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 34. ウルトラ高圧エコキュート370L
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-ULTRA-370L',
  'ウルトラ高圧エコキュート370L',
  'Panasonic',
  'エコキュート',
  'HE-SU37LQS',
  'Sシリーズ ウルトラ高圧370Lに変更',
  false,
  true,
  34
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 35. ウルトラ高圧エコキュート460L
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-ULTRA-460L',
  'ウルトラ高圧エコキュート460L',
  'Panasonic',
  'エコキュート',
  'HE-SU46LQS',
  'Sシリーズ ウルトラ高圧460Lに変更',
  false,
  true,
  35
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 36. シャルムロックV
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SHARMROCK-V',
  'シャルムロックV',
  'ニチハ',
  '外壁',
  'SHARMROCK-V',
  'レンガ調の高品質サイディング',
  true,
  true,
  36
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 37. リーガストーン調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-LEGALSTONE-V',
  'リーガストーン調V',
  'ニチハ',
  '外壁',
  'LEGALSTONE-V',
  '石材調の高級サイディング',
  true,
  true,
  37
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 38. ディスタシェイドV
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-DISTASHADE-V',
  'ディスタシェイドV',
  'ニチハ',
  '外壁',
  'DISTASHADE-V',
  '陰影が美しいモダンサイディング',
  true,
  true,
  38
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 39. ボルブストーン調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-VOLVSTONE-V',
  'ボルブストーン調V',
  'ニチハ',
  '外壁',
  'VOLVSTONE-V',
  '重厚感のある石材調サイディング',
  true,
  true,
  39
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 40. スプリットストーン調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SPLITSTONE-V',
  'スプリットストーン調V',
  'ニチハ',
  '外壁',
  'SPLITSTONE-V',
  '割石調の自然な風合い',
  true,
  true,
  40
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 41. コルモストーン調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-CORMOSTONE-V',
  'コルモストーン調V',
  'ニチハ',
  '外壁',
  'CORMOSTONE-V',
  'ナチュラルな石材調サイディング',
  true,
  true,
  41
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 42. グレインウッドV
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-GRAINWOOD-V',
  'グレインウッドV',
  'ニチハ',
  '外壁',
  'GRAINWOOD-V',
  '木目調の温かみのあるサイディング',
  true,
  true,
  42
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 43. マイスターウッド調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-MEISTERWOOD-V',
  'マイスターウッド調V',
  'ニチハ',
  '外壁',
  'MEISTERWOOD-V',
  '高級木目調サイディング',
  true,
  true,
  43
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 44. しぶきV
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SHIBUKI-V',
  'しぶきV',
  'ニチハ',
  '外壁',
  'SHIBUKI-V',
  '塗り壁調の風合い',
  true,
  true,
  44
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 45. アフェットV
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-AFFETTO-V',
  'アフェットV',
  'ニチハ',
  '外壁',
  'AFFETTO-V',
  'エレガントな表情のサイディング',
  true,
  true,
  45
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 46. ロックラインV
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-ROCKLINE-V',
  'ロックラインV',
  'ニチハ',
  '外壁',
  'ROCKLINE-V',
  'モダンなライン柄サイディング',
  true,
  true,
  46
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 47. ナチュラルラインV
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-NATURALLINE-V',
  'ナチュラルラインV',
  'ニチハ',
  '外壁',
  'NATURALLINE-V',
  'ナチュラルなストライプ柄',
  true,
  true,
  47
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 48. コンクリート打ちっ放し16V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-CONCRETE-16V',
  'コンクリート打ちっ放し16V',
  'ニチハ',
  '外壁',
  'CONCRETE-16V',
  'コンクリート打ちっ放し風サイディング',
  true,
  true,
  48
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 49. スティルランバー プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-STILL-LUMBER-PREMIUM',
  'スティルランバー プレミアム',
  'ニチハ',
  '外壁',
  'STILL-LUMBER-PREMIUM',
  'プレミアム木目調サイディング',
  false,
  true,
  49
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 50. ミルシュタイン プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-MILSTEIN-PREMIUM',
  'ミルシュタイン プレミアム',
  'ニチハ',
  '外壁',
  'MILSTEIN-PREMIUM',
  'プレミアム石材調サイディング',
  false,
  true,
  50
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 51. プリレートプレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-PRILETE-PREMIUM',
  'プリレートプレミアム',
  'ニチハ',
  '外壁',
  'PRILETE-PREMIUM',
  'プレミアム塗り壁調サイディング',
  false,
  true,
  51
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 52. キャスティングウッド プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-CASTINGWOOD-PREMIUM',
  'キャスティングウッド プレミアム',
  'ニチハ',
  '外壁',
  'CASTINGWOOD-PREMIUM',
  'リアルな木目調プレミアムサイディング',
  false,
  true,
  52
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 53. ハーモレイド
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-HARMORAID',
  'ハーモレイド',
  'ケイミュー',
  '外壁',
  'HARMORAID',
  '調和の取れたモダンサイディング',
  false,
  true,
  53
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 54. モダンスリット18
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-MODERN-SLIT-18',
  'モダンスリット18',
  'ケイミュー',
  '外壁',
  'MODERN-SLIT-18',
  'モダンなスリットデザイン',
  false,
  true,
  54
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 55. フィエルテ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-FIERTE',
  'フィエルテ',
  'ケイミュー',
  '外壁',
  'FIERTE',
  'コンクリート調高級サイディング',
  false,
  true,
  55
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 56. SPビレクト
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SP-BILECT',
  'SPビレクト',
  'IG工業',
  '外壁',
  'SP-BILECT',
  'モダンな金属系サイディング',
  false,
  true,
  56
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 57. ガルスパン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-GALSPAN',
  'ガルスパン',
  'IG工業',
  '外壁',
  'GALSPAN',
  'ガルバリウム鋼板サイディング',
  false,
  true,
  57
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 58. 吹付塗装/エンシェントブリック
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-ANCIENT-BRICK',
  '吹付塗装/エンシェントブリック',
  'AICA',
  '外壁',
  'ANCIENT-BRICK',
  'レンガ調の吹付塗装',
  false,
  true,
  58
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 59. 吹付塗装/ミーティア
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-METEOR',
  '吹付塗装/ミーティア',
  'AICA',
  '外壁',
  'METEOR',
  'モダンな吹付塗装',
  false,
  true,
  59
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 60. シントア プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SHINTOA-PREMIUM',
  'シントア プレミアム',
  'ニチハ',
  '外壁',
  'SHINTOA-PREMIUM',
  'Fu-geプレミアム シーリングレス外壁',
  false,
  true,
  60
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 61. スプーモ プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SPUMO-PREMIUM',
  'スプーモ プレミアム',
  'ニチハ',
  '外壁',
  'SPUMO-PREMIUM',
  'Fu-geプレミアム シーリングレス外壁',
  false,
  true,
  61
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 62. ヴィンテージウッド プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-VINTAGEWOOD-PREMIUM',
  'ヴィンテージウッド プレミアム',
  'ニチハ',
  '外壁',
  'VINTAGEWOOD-PREMIUM',
  'NOHASプレミアム 横張のみの採用となります',
  false,
  true,
  62
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 63. コンクリート打ちっ放し16 プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-CONCRETE16-PREMIUM',
  'コンクリート打ちっ放し16 プレミアム',
  'ニチハ',
  '外壁',
  'CONCRETE16-PREMIUM',
  'NOHASプレミアム 横張のみの採用となります',
  false,
  true,
  63
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 64. シャルムロック プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SHARMROCK-PREMIUM',
  'シャルムロック プレミアム',
  'ニチハ',
  '外壁',
  'SHARMROCK-PREMIUM',
  'NOHASプレミアム レンガ調サイディング',
  false,
  true,
  64
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 65. シャルムロックV コンティ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-CHARM-ROCK',
  'シャルムロックV コンティ',
  'ニチハ',
  '外壁',
  'EFA28xxFK',
  '横張のみの採用となります',
  true,
  true,
  65
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 66. ディスタンエイドV
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-DISTANCE-AID',
  'ディスタンエイドV',
  'ニチハ',
  '外壁',
  'EFA44xxYK',
  '横張のみの採用となります',
  true,
  true,
  66
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 67. スプリットストーン調V アプラ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SPLIT-STONE',
  'スプリットストーン調V アプラ',
  'ニチハ',
  '外壁',
  'EFX16xxNK',
  '横張のみの採用となります',
  true,
  true,
  67
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 68. コルモストーン調プレミアム フォンド
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-COLMO-PREMIUM',
  'コルモストーン調プレミアム フォンド',
  'ニチハ',
  '外壁',
  'ELG33xxNK',
  'プレミアム外壁 横張のみの採用となります',
  false,
  true,
  68
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 69. リーガストーン調プレミアム ランダ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-REGAS-PREMIUM',
  'リーガストーン調プレミアム ランダ',
  'ニチハ',
  '外壁',
  'ELG34xxNK',
  'プレミアム外壁 横張のみの採用となります',
  false,
  true,
  69
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 70. リントロック調プレミアム ラタル
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-LINTROCK-PREMIUM',
  'リントロック調プレミアム ラタル',
  'ニチハ',
  '外壁',
  'ELG1xxxNK',
  'プレミアム外壁 横張のみの採用となります',
  false,
  true,
  70
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 71. マグートプレミアム ルフィネ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-MAGUT-PREMIUM',
  'マグートプレミアム ルフィネ',
  'KMEW',
  '外壁',
  'ELG72xxK',
  'プレミアム外壁 横張のみの採用となります',
  false,
  true,
  71
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 72. フラークプレミアム プレス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-FLARK-PREMIUM',
  'フラークプレミアム プレス',
  'KMEW',
  '外壁',
  'ELG9xxFK/YK',
  'プレミアム外壁 横張のみの採用となります',
  false,
  true,
  72
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 73. フィーノ調プレミアム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-FINO-PREMIUM',
  'フィーノ調プレミアム',
  'KMEW',
  '外壁',
  'ELG3xxFK',
  'プレミアム外壁 横張のみの採用となります',
  false,
  true,
  73
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 74. フラットウォール
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-FLAT-WALL',
  'フラットウォール',
  'KMEW',
  '外壁',
  'EP52xxNK',
  'フラットデザイン外壁',
  true,
  true,
  74
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 75. ルビドフラット
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-RUBIDO-FLAT',
  'ルビドフラット',
  'KMEW',
  '外壁',
  'EQG4xxxK',
  'ルビドフラット 機密性能の観点から窓なしを推奨',
  true,
  true,
  75
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 76. トリル
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-TRILL',
  'トリル',
  'KMEW',
  '外壁',
  'EFA32xGK/TK',
  'トリル外壁',
  true,
  true,
  76
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 77. サンオートハイスピード
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-GARAGE-SUNAUTO',
  'サンオートハイスピード',
  '三和シャッター',
  'ガレージシャッター',
  'SUN-AUTO-HS',
  '電動シャッター 開放約13秒（高さ2.5mの場合） 障害物検知装置付き',
  false,
  true,
  77
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 78. 威風堂々
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-GARAGE-IFUDODO',
  '威風堂々',
  '三和シャッター',
  'ガレージシャッター',
  'IFU-DODO',
  'オーバースライダー方式 開放約10秒（高さ2.5mの場合） 障害物検知装置付き W2550 H2200',
  false,
  true,
  78
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 79. アルフィン庇
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-HISASHI-ALFIN',
  'アルフィン庇',
  'アルフィン',
  '庇',
  'AD2S/AF95',
  '庇（W1800サイズ）',
  false,
  true,
  79
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 80. APW430
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW430-UPGRADE',
  'APW430',
  'YKKAP',
  '窓',
  'APW430',
  '樹脂サッシ アルゴンガス トリプルガラス 熱貫流率0.90W/(㎡・K) ※LACIE/HOURS標準、LIFE+/LIFEオプション',
  false,
  true,
  80
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 81. 地上波TVアンテナ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-ANTENNA-TV',
  '地上波TVアンテナ',
  '標準',
  '外部設備',
  'TV-ANTENNA',
  '地上波TVアンテナ ブースター含む',
  false,
  true,
  81
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 82. BSアンテナ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-ANTENNA-BS',
  'BSアンテナ',
  '標準',
  '外部設備',
  'BS-ANTENNA',
  'BSアンテナ TVアンテナ＋80,000円',
  false,
  true,
  82
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 83. センサーライト付屋外ワイヤレスカメラ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-CAMERA-WIRELESS',
  'センサーライト付屋外ワイヤレスカメラ',
  'Panasonic',
  '外部設備',
  'VL-WD813K',
  'センサーライト付屋外ワイヤレスカメラ',
  false,
  true,
  83
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 84. モルタル金鏝抑え
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-MORTAR',
  'モルタル金鏝抑え',
  '標準',
  'ポーチ',
  'MORTAR',
  'モルタル金鏝仕上げ 標準1.8m×1.8m 将来的にヘアクラックが起こる可能性あり',
  true,
  true,
  84
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 85. ネイチャーⅡ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-NATURE2',
  'ネイチャーⅡ',
  'Nagoya mozaic',
  'ポーチ',
  'MSY-R30xx',
  '300×300タイル',
  false,
  true,
  85
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 86. ベスパ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-VESPA',
  'ベスパ',
  'LIXIL',
  'ポーチ',
  'IPF-300/VSP-SAx',
  '300×300タイル',
  false,
  true,
  86
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 87. ボルブストーン調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-BORBU-V',
  'ボルブストーン調V',
  'ニチハ',
  '外壁',
  'EFX315xFK/LK',
  '横張のみの採用となります',
  true,
  true,
  87
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 88. コルモストーン調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-COLMO-V',
  'コルモストーン調V',
  'ニチハ',
  '外壁',
  'EFX335xNK/RK',
  '横張のみの採用となります',
  true,
  true,
  88
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 89. コンクリート打ちっ放し16V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-CONCRETE-V',
  'コンクリート打ちっ放し16V',
  'ニチハ',
  '外壁',
  'EFA4351NK',
  '横張のみの採用となります',
  true,
  true,
  89
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 90. マイスターウッド調V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-MEISTER-V',
  'マイスターウッド調V',
  'ニチハ',
  '外壁',
  'EF935xFK/GK/YK',
  '横張のみの採用となります',
  true,
  true,
  90
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 91. SPビレクト
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-SPBILECT',
  'SPビレクト',
  'IG工業',
  '外壁',
  'SPI1-xxx',
  'SPビレクト 金属サイディング 変褪色・穴あき・赤さび10年保証 横張のみ ※HOURSアクセント面のみ標準(1色)、LACIE全面標準',
  false,
  true,
  91
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 92. ジョリパット エンシェントブリック
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-JOLYPATE-ANCIENT',
  'ジョリパット エンシェントブリック',
  'AICA',
  '外壁',
  'JQ-620-Txxx',
  'ジョリパットネオ∞ 塗装仕上げ ※筋が出やすく目立つことがあります',
  false,
  true,
  92
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 93. ジョリパット ミーティア
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WALL-METEORA',
  'ジョリパット ミーティア',
  'AICA',
  '外壁',
  'JQ-620-MT-Txxx',
  'ジョリパットネオ∞ ミーティア 塗装仕上げ ※筋が出やすく目立つことがあります',
  false,
  true,
  93
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 94. メンフィス 600×300
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-MEMPHIS-630',
  'メンフィス 600×300',
  'LIXIL',
  'ポーチ',
  'IPF-630/MMP-xx',
  '600×300タイル',
  false,
  true,
  94
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 95. ポーチサイズ拡張
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-EXPANSION',
  'ポーチサイズ拡張',
  '標準',
  'ポーチ',
  'PORCH-EXPANSION',
  'ポーチサイズ拡張 1.8m×1.8m以上の場合（1㎡未満拡張の場合も60,000円UP）',
  false,
  true,
  95
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 96. ランドストン 600角
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-LANDSTONE-600',
  'ランドストン 600角',
  'Nagoya mozaic',
  'ポーチ',
  'CRD-X39xxG',
  '600×600 岩面タイル ※外装標準品からの変更差額',
  false,
  true,
  96
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 97. ランドストン 600×300
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-LANDSTONE-630',
  'ランドストン 600×300',
  'Nagoya mozaic',
  'ポーチ',
  'CRD-U39xxG',
  '600×300 岩面タイル ※外装標準品からの変更差額',
  false,
  true,
  97
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 98. ピエトラソーニ 600角
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-PIETRA-600',
  'ピエトラソーニ 600角',
  'Nagoya mozaic',
  'ポーチ',
  'PAN-X81xxG',
  '600×600 粗目タイル ※外装標準品からの変更差額',
  false,
  true,
  98
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 99. ピエトラソーニ 600×300
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-PORCH-PIETRA-630',
  'ピエトラソーニ 600×300',
  'Nagoya mozaic',
  'ポーチ',
  'PAN-U81xxG',
  '600×300 粗目タイル ※外装標準品からの変更差額',
  false,
  true,
  99
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 100. ラフォーレソレイユ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-SOFFIT-SOLEIL',
  'ラフォーレソレイユ',
  '神島化学',
  '軒天',
  'LAFORET-SOLEIL-xx',
  '軒天材 ※準耐火仕様の場合、上階に居室が乗っている箇所は採用不可',
  false,
  true,
  100
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 101. ラフォーレティンバー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-SOFFIT-TIMBER',
  'ラフォーレティンバー',
  '神島化学',
  '軒天',
  'LAFORET-TIMBER-xx',
  '軒天材 ※準耐火仕様の場合、上階に居室が乗っている箇所は採用不可',
  false,
  true,
  101
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 102. サンオートハイスピード 防火仕様変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-GARAGE-OPT-BOUKA',
  'サンオートハイスピード 防火仕様変更',
  '三和シャッター',
  '電動ガレージシャッター',
  'SUN-AUTO-HS-BOUKA',
  '防火仕様に変更（1台分）',
  false,
  true,
  102
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 103. サンオートハイスピード スラットカラーリング（ブラック）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-GARAGE-OPT-BLACK',
  'サンオートハイスピード スラットカラーリング（ブラック）',
  '三和シャッター',
  '電動ガレージシャッター',
  'SUN-AUTO-HS-BLACK',
  'スラットカラーリング（1台分）※ブラックは別途塗装のため傷が目立ちやすい',
  false,
  true,
  103
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 104. 威風堂々 防火仕様変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-GARAGE-IFUDODO-BOUKA',
  '威風堂々 防火仕様変更',
  '三和シャッター',
  '電動ガレージシャッター',
  'IFU-DODO-BOUKA',
  '防火仕様に変更（1台分のみ）',
  false,
  true,
  104
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 105. 威風堂々 木目調パネル
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-GARAGE-IFUDODO-WOOD',
  '威風堂々 木目調パネル',
  '三和シャッター',
  '電動ガレージシャッター',
  'IFU-DODO-WOOD',
  '木目調パネル（1台分）※塗装で木目を表現、内部面はシルバー ※防火未対応',
  false,
  true,
  105
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 106. 防火地域用耐熱強化複層ガラス（網なし）~W1650
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-GLASS-BOUKA-W1650',
  '防火地域用耐熱強化複層ガラス（網なし）~W1650',
  'YKKAP',
  '窓',
  'APW330-GLASS-BOUKA-W1650',
  '防火地域用 耐熱強化複層ガラス（網なし）~W1650',
  false,
  true,
  106
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 107. 防火地域用耐熱強化複層ガラス（網なし）~W2560
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-GLASS-BOUKA-W2560',
  '防火地域用耐熱強化複層ガラス（網なし）~W2560',
  'YKKAP',
  '窓',
  'APW330-GLASS-BOUKA-W2560',
  '防火地域用 耐熱強化複層ガラス（網なし）~W2560',
  false,
  true,
  107
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 108. 安全合わせガラス（30mil）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-GLASS-SAFETY',
  '安全合わせガラス（30mil）',
  'YKKAP',
  '窓',
  'APW330-GLASS-SAFETY',
  '安全合わせガラス（30mil）',
  false,
  true,
  108
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 109. 窓追加（22条地域）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-ADD-22',
  '窓追加（22条地域）',
  'YKKAP',
  '窓',
  'APW330-ADD-22',
  '窓追加（22条地域）',
  false,
  true,
  109
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 110. 窓追加（準防火・防火地域）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-ADD-BOUKA',
  '窓追加（準防火・防火地域）',
  'YKKAP',
  '窓',
  'APW330-ADD-BOUKA',
  '窓追加（準防火・防火地域）',
  false,
  true,
  110
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 111. 掃出し窓追加（22条地域）~W1650
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-HAKIDASHI-22-W1650',
  '掃出し窓追加（22条地域）~W1650',
  'YKKAP',
  '窓',
  'APW330-ADD-HAKIDASHI-22-W1650',
  '掃出し窓追加（22条地域）~W1650',
  false,
  true,
  111
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 112. 掃出し窓追加（22条地域）~W2560
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-HAKIDASHI-22-W2560',
  '掃出し窓追加（22条地域）~W2560',
  'YKKAP',
  '窓',
  'APW330-ADD-HAKIDASHI-22-W2560',
  '掃出し窓追加（22条地域）~W2560',
  false,
  true,
  112
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 113. 掃出し窓追加（準防火・防火地域）~W1650
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-HAKIDASHI-BOUKA-W1650',
  '掃出し窓追加（準防火・防火地域）~W1650',
  'YKKAP',
  '窓',
  'APW330-ADD-HAKIDASHI-BOUKA-W1650',
  '掃出し窓追加（準防火・防火地域）~W1650',
  false,
  true,
  113
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 114. 掃出し窓追加（準防火・防火地域）~W2560
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-HAKIDASHI-BOUKA-W2560',
  '掃出し窓追加（準防火・防火地域）~W2560',
  'YKKAP',
  '窓',
  'APW330-ADD-HAKIDASHI-BOUKA-W2560',
  '掃出し窓追加（準防火・防火地域）~W2560',
  false,
  true,
  114
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 115. APW430
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW430',
  'APW430',
  'YKKAP',
  '窓',
  'APW430',
  '樹脂サッシ アルゴンガス トリプルガラス 熱貫流率0.90W/(㎡・K) LACIE/HOURS標準',
  true,
  true,
  115
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 116. 窓追加（22条地域）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW430-ADD-22',
  '窓追加（22条地域）',
  'YKKAP',
  '窓',
  'WINDOW-ADD-22',
  'APW430 窓追加（22条地域）',
  false,
  true,
  116
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 117. 窓追加（準防火・防火地域）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW430-ADD-FIRE',
  '窓追加（準防火・防火地域）',
  'YKKAP',
  '窓',
  'WINDOW-ADD-FIRE',
  'APW430 窓追加（準防火・防火地域）',
  false,
  true,
  117
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 118. 掃出し窓追加（22条地域）W1650
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW430-SLIDING-22-W1650',
  '掃出し窓追加（22条地域）W1650',
  'YKKAP',
  '窓',
  'WINDOW-ADD-SLIDING-22-W1650',
  '掃出し窓追加（22条地域）W1650まで',
  false,
  true,
  118
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 119. 掃出し窓追加（22条地域）W2560
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW430-SLIDING-22-W2560',
  '掃出し窓追加（22条地域）W2560',
  'YKKAP',
  '窓',
  'WINDOW-ADD-SLIDING-22-W2560',
  '掃出し窓追加（22条地域）W2560まで',
  false,
  true,
  119
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 120. 掃出し窓追加（準防火・防火地域）W1650
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW430-SLIDING-FIRE-W1650',
  '掃出し窓追加（準防火・防火地域）W1650',
  'YKKAP',
  '窓',
  'WINDOW-ADD-SLIDING-FIRE-W1650',
  '掃出し窓追加（準防火・防火地域）W1650まで',
  false,
  true,
  120
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 121. 掃出し窓追加（準防火・防火地域）W2560
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW430-SLIDING-FIRE-W2560',
  '掃出し窓追加（準防火・防火地域）W2560',
  'YKKAP',
  '窓',
  'WINDOW-ADD-SLIDING-FIRE-W2560',
  '掃出し窓追加（準防火・防火地域）W2560まで',
  false,
  true,
  121
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 122. 安全合わせガラス（30mil）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-WINDOW-APW430-GLASS-SAFETY',
  '安全合わせガラス（30mil）',
  'YKKAP',
  '窓',
  'GLASS-SAFETY-30MIL',
  '安全合わせガラス（30mil）W2560引き違い窓は非対応',
  false,
  true,
  122
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 123. ヴェナートD30 N08
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-DOOR-N08',
  'ヴェナートD30 N08',
  'YKKAP',
  '玄関ドア',
  'D30-N08',
  '木目の美感を引き立てる ナチュラルモダンデザイン 100V電気錠 ポケットキー付き',
  true,
  true,
  123
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 124. ヴェナートD30 N18
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-DOOR-N18',
  'ヴェナートD30 N18',
  'YKKAP',
  '玄関ドア',
  'D30-N18',
  '程よくラフなバランスが絶妙の アースナチュラルデザイン 100V電気錠 ポケットキー付き',
  true,
  true,
  124
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 125. ヴェナートD30 N15
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-DOOR-N15',
  'ヴェナートD30 N15',
  'YKKAP',
  '玄関ドア',
  'D30-N15',
  '木目の表情を引き立てる シンプルモダンデザイン 100V電気錠 ポケットキー付き',
  true,
  true,
  125
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 126. ヴェナートD30 C10
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-DOOR-C10',
  'ヴェナートD30 C10',
  'YKKAP',
  '玄関ドア',
  'D30-C10',
  'カラーの遊び心と多彩なコントラスト調和を追求する 彩りとなしのプレーンデザイン 100V電気錠 ポケットキー付き',
  true,
  true,
  126
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 127. 顔認証キー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-DOOR-FACE-AUTH',
  '顔認証キー',
  'YKKAP',
  '玄関ドア',
  'FACE-AUTH-KEY',
  '顔認証キー 非防火地域のみ使用可能 家族みんなに使いやすい認証範囲',
  false,
  true,
  127
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 128. ポケットキー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-DOOR-POCKET-KEY',
  'ポケットキー',
  'YKKAP',
  '玄関ドア',
  'POCKET-KEY',
  'ポケットキー追加 LIFE+/LACIE/HOURS標準、LIFEはオプション',
  false,
  true,
  128
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 129. 外部LAN用空配管
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-LAN',
  '外部LAN用空配管',
  '標準',
  '外部設備',
  'EXT-LAN-PIPE',
  '外部LAN用空配管',
  false,
  true,
  129
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 130. センサーライト付屋外ワイヤレスカメラ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-CAMERA-813K',
  'センサーライト付屋外ワイヤレスカメラ',
  'Panasonic',
  '外部設備',
  'VL-WD813K',
  'センサーライト付屋外ワイヤレスカメラ インターホンに最大4台まで接続可',
  false,
  true,
  130
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 131. センサーライト付屋外ワイヤレスカメラ（外でもドアホン用）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-CAMERA-500X',
  'センサーライト付屋外ワイヤレスカメラ（外でもドアホン用）',
  'Panasonic',
  '外部設備',
  'VL-CX500X',
  'SVD505（外でもドアホン）採用時のみ選択可能 最大2台まで接続可',
  false,
  true,
  131
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 132. 露出用四角ボックス（将来防犯カメラ用）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-BOX',
  '露出用四角ボックス（将来防犯カメラ用）',
  '未来工業',
  '外部設備',
  'PV4B-ANF',
  'LAN空配管+電源仕込み含む 将来防犯カメラ用',
  false,
  true,
  132
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 133. アルミ立水栓
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-FAUCET-ALUMI',
  'アルミ立水栓',
  'オンリーワン',
  '外部設備',
  'GM3-ALxxF',
  'アルミ立水栓 標準形状変更差額',
  false,
  true,
  133
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 134. ステンレス混合立水栓
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-FAUCET-STAINLESS',
  'ステンレス混合立水栓',
  'カクダイ',
  '外部設備',
  '624-202',
  'ステンレス混合立水栓 標準形状変更差額 別途給湯工事費用必要',
  false,
  true,
  134
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 135. 散水栓/立水栓（排水仕込み追加）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-FAUCET-DRAIN',
  '散水栓/立水栓（排水仕込み追加）',
  '標準',
  '外部設備',
  'FAUCET-DRAIN',
  '散水栓/立水栓（排水仕込み追加）',
  false,
  true,
  135
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 136. 散水栓/立水栓追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-FACILITY-FAUCET-ADD',
  '散水栓/立水栓追加',
  '標準',
  '外部設備',
  'FAUCET-ADD',
  '散水栓/立水栓追加（排水なし）',
  false,
  true,
  136
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 137. 換気ガラリ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-VENTILATION-GALARI',
  '換気ガラリ',
  '標準',
  '換気システム',
  'TRD-100xx-T',
  '換気システム用 換気ガラリ',
  true,
  true,
  137
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 138. DSDD給気口 カラー変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-VENTILATION-DSDD-COLOR',
  'DSDD給気口 カラー変更',
  '標準',
  '換気システム',
  'DSDD-COLOR',
  'DSDD換気システム採用時のみ カラー変更',
  false,
  true,
  138
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 139. 中継ポール
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-SOLAR-RELAY-POLE',
  '中継ポール',
  '標準',
  '太陽光・蓄電池',
  'RELAY-POLE',
  '太陽光設置用中継ポール',
  false,
  true,
  139
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 140. エコキュート370L薄型タイプ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-H-370-SLIM',
  'エコキュート370L薄型タイプ',
  'Panasonic',
  'エコキュート',
  'HE-H37LQS',
  'Hシリーズ 370L薄型タイプに変更',
  false,
  true,
  140
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 141. エコキュート460L薄型タイプ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-H-460-SLIM',
  'エコキュート460L薄型タイプ',
  'Panasonic',
  'エコキュート',
  'HE-H46LQS',
  'Hシリーズ 460L薄型タイプに変更',
  false,
  true,
  141
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 142. パワフル高圧エコキュート370L薄型
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-W-370-SLIM',
  'パワフル高圧エコキュート370L薄型',
  'Panasonic',
  'エコキュート',
  'HE-WU37LQS',
  'Wシリーズ パワフル高圧370L薄型タイプに変更',
  false,
  true,
  142
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 143. パワフル高圧エコキュート460L薄型
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-W-460-SLIM',
  'パワフル高圧エコキュート460L薄型',
  'Panasonic',
  'エコキュート',
  'HE-WU46LQS',
  'Wシリーズ パワフル高圧460L薄型タイプに変更',
  false,
  true,
  143
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 144. エコキュート室内設置に変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-INDOOR',
  'エコキュート室内設置に変更',
  'Panasonic',
  'エコキュート',
  'ECOCUTE-INDOOR',
  'エコキュート室内設置に変更',
  false,
  true,
  144
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 145. エコキュート インナーガレージ設置
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-GARAGE',
  'エコキュート インナーガレージ設置',
  'Panasonic',
  'エコキュート',
  'ECOCUTE-GARAGE',
  'エコキュート インナーガレージ設置に変更',
  false,
  true,
  145
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 146. 塩害用エコキュートに変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-SALT',
  '塩害用エコキュートに変更',
  'Panasonic',
  'エコキュート',
  'ECOCUTE-SALT',
  '塩害用エコキュートに変更 パワフル高圧薄型は対応なし',
  false,
  true,
  146
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 147. エコキュート370L追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-370-ADD',
  'エコキュート370L追加',
  'Panasonic',
  'エコキュート',
  'ECOCUTE-370-ADD',
  'エコキュート370L（標準）追加',
  false,
  true,
  147
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 148. おひさまエコキュート パワフル高圧370L
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-DAIKIN-370',
  'おひさまエコキュート パワフル高圧370L',
  'DAIKIN',
  'エコキュート',
  'EQA37YFPV',
  'DAIKIN おひさまエコキュート パワフル高圧370L お掃除浴槽採用時は必須',
  false,
  true,
  148
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 149. おひさまエコキュート パワフル高圧460L
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-DAIKIN-460',
  'おひさまエコキュート パワフル高圧460L',
  'DAIKIN',
  'エコキュート',
  'EQA46YFPV',
  'DAIKIN おひさまエコキュート パワフル高圧460L お掃除浴槽採用時は必須',
  false,
  true,
  149
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 150. ナイアガラ出湯 エコキュート370L（1・2階設置）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-HITACHI-370-12F',
  'ナイアガラ出湯 エコキュート370L（1・2階設置）',
  '日立',
  'エコキュート',
  'BHP-FV37WD',
  '日立 ナイアガラ出湯 エコキュート370L 浴槽1・2階設置',
  false,
  true,
  150
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 151. ナイアガラ出湯 エコキュート370L（3階設置）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'EXT-ECOCUTE-HITACHI-370-3F',
  'ナイアガラ出湯 エコキュート370L（3階設置）',
  '日立',
  'エコキュート',
  'BHP-FV37WD-3F',
  '日立 ナイアガラ出湯 エコキュート370L 浴槽3階設置',
  false,
  true,
  151
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- ========================================
-- カテゴリID紐付け
-- ========================================
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-wall')
WHERE category_name = '外壁' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-porch')
WHERE category_name = 'ポーチ' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-roof')
WHERE category_name = '屋根' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-gutter')
WHERE category_name = '樋' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-soffit')
WHERE category_name = '軒天' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-window')
WHERE category_name = '窓' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-entrance-door')
WHERE category_name = '玄関ドア' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-equipment')
WHERE category_name = '外部設備' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-eco-cute')
WHERE category_name = 'エコキュート' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-garage-shutter')
WHERE category_name = 'ガレージシャッター' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-awning')
WHERE category_name = '庇' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-electric-shutter')
WHERE category_name = '電動ガレージシャッター' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-ventilation')
WHERE category_name = '換気システム' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'exterior-solar-battery')
WHERE category_name = '太陽光・蓄電池' AND category_id IS NULL;

-- ========================================
-- バリエーション登録
-- ========================================
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHARMROCK-V-V1', 'コンティMGホワイト', '#FAFAFA', 1
FROM items i WHERE i.item_code = 'EXT-WALL-SHARMROCK-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHARMROCK-V-V2', 'コンティMGアッシュ', '#C4C4C4', 2
FROM items i WHERE i.item_code = 'EXT-WALL-SHARMROCK-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHARMROCK-V-V3', 'コンティMGアイボリー', '#FFFFF0', 3
FROM items i WHERE i.item_code = 'EXT-WALL-SHARMROCK-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHARMROCK-V-V4', 'コンティMGブラウン', '#8B4513', 4
FROM items i WHERE i.item_code = 'EXT-WALL-SHARMROCK-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHARMROCK-V-V5', 'コンティMGグレー', '#808080', 5
FROM items i WHERE i.item_code = 'EXT-WALL-SHARMROCK-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHARMROCK-V-V6', 'コンティMGチャコール', '#36454F', 6
FROM items i WHERE i.item_code = 'EXT-WALL-SHARMROCK-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-LEGALSTONE-V-V1', 'ランダMGプラチナ', '#E5E4E2', 1
FROM items i WHERE i.item_code = 'EXT-WALL-LEGALSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-LEGALSTONE-V-V2', 'ランダMGブラック', '#000000', 2
FROM items i WHERE i.item_code = 'EXT-WALL-LEGALSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-LEGALSTONE-V-V3', 'ランダMGラテ', '#C8B88B', 3
FROM items i WHERE i.item_code = 'EXT-WALL-LEGALSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-LEGALSTONE-V-V4', 'ランダMGトリュフ', '#5D4E37', 4
FROM items i WHERE i.item_code = 'EXT-WALL-LEGALSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-LEGALSTONE-V-V5', 'ランダMGパウダー', '#F5F5DC', 5
FROM items i WHERE i.item_code = 'EXT-WALL-LEGALSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-DISTASHADE-V-V1', 'ストレムMGホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'EXT-WALL-DISTASHADE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-DISTASHADE-V-V2', 'ストレムMGクリーム', '#FFFDD0', 2
FROM items i WHERE i.item_code = 'EXT-WALL-DISTASHADE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-DISTASHADE-V-V3', 'ストレムMGブラウン', '#8B4513', 3
FROM items i WHERE i.item_code = 'EXT-WALL-DISTASHADE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-DISTASHADE-V-V4', 'ストレムMGセピア', '#704214', 4
FROM items i WHERE i.item_code = 'EXT-WALL-DISTASHADE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-DISTASHADE-V-V5', 'ストレムMGネイビー', '#2F3E4C', 5
FROM items i WHERE i.item_code = 'EXT-WALL-DISTASHADE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-VOLVSTONE-V-V1', 'エアルMGスノー', '#FFFAFA', 1
FROM items i WHERE i.item_code = 'EXT-WALL-VOLVSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-VOLVSTONE-V-V2', 'エアルMGラテ', '#C8B88B', 2
FROM items i WHERE i.item_code = 'EXT-WALL-VOLVSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-VOLVSTONE-V-V3', 'エアルMGトリュフ', '#5D4E37', 3
FROM items i WHERE i.item_code = 'EXT-WALL-VOLVSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SPLITSTONE-V-V1', 'アプラMGクリーム', '#FFFDD0', 1
FROM items i WHERE i.item_code = 'EXT-WALL-SPLITSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SPLITSTONE-V-V2', 'アプラMGワイン', '#722F37', 2
FROM items i WHERE i.item_code = 'EXT-WALL-SPLITSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SPLITSTONE-V-V3', 'アプラMGキャロット', '#ED9121', 3
FROM items i WHERE i.item_code = 'EXT-WALL-SPLITSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CORMOSTONE-V-V1', 'フォンドMGシュガー', '#FFF8E7', 1
FROM items i WHERE i.item_code = 'EXT-WALL-CORMOSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CORMOSTONE-V-V2', 'フォンドMGリーフ', '#90A959', 2
FROM items i WHERE i.item_code = 'EXT-WALL-CORMOSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CORMOSTONE-V-V3', 'フォンドMGショコラ', '#3B2F2F', 3
FROM items i WHERE i.item_code = 'EXT-WALL-CORMOSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CORMOSTONE-V-V4', 'フォンドMGダーク', '#2F2F2F', 4
FROM items i WHERE i.item_code = 'EXT-WALL-CORMOSTONE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GRAINWOOD-V-V1', 'スペリオMGナチュラル', '#D2B48C', 1
FROM items i WHERE i.item_code = 'EXT-WALL-GRAINWOOD-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GRAINWOOD-V-V2', 'スペリオMGウォルナット', '#5D4037', 2
FROM items i WHERE i.item_code = 'EXT-WALL-GRAINWOOD-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GRAINWOOD-V-V3', 'スペリオMGブラック', '#000000', 3
FROM items i WHERE i.item_code = 'EXT-WALL-GRAINWOOD-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GRAINWOOD-V-V4', 'スペリオMGネイビー', '#2F3E4C', 4
FROM items i WHERE i.item_code = 'EXT-WALL-GRAINWOOD-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MEISTERWOOD-V-V1', 'イデアルMGボルドー', '#722F37', 1
FROM items i WHERE i.item_code = 'EXT-WALL-MEISTERWOOD-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MEISTERWOOD-V-V2', 'イデアルMGチャコール', '#36454F', 2
FROM items i WHERE i.item_code = 'EXT-WALL-MEISTERWOOD-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MEISTERWOOD-V-V3', 'イデアルMGブラウン', '#8B4513', 3
FROM items i WHERE i.item_code = 'EXT-WALL-MEISTERWOOD-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MEISTERWOOD-V-V4', 'イデアルMGグレー', '#808080', 4
FROM items i WHERE i.item_code = 'EXT-WALL-MEISTERWOOD-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MEISTERWOOD-V-V5', 'イデアルMGグリーン', '#2E7D32', 5
FROM items i WHERE i.item_code = 'EXT-WALL-MEISTERWOOD-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHIBUKI-V-V1', 'プラムMGバニラホワイトⅡ', '#FFF8DC', 1
FROM items i WHERE i.item_code = 'EXT-WALL-SHIBUKI-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHIBUKI-V-V2', 'プラムMGアッシュⅡ', '#C4C4C4', 2
FROM items i WHERE i.item_code = 'EXT-WALL-SHIBUKI-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHIBUKI-V-V3', 'プラムMGクリームⅡ', '#FFFDD0', 3
FROM items i WHERE i.item_code = 'EXT-WALL-SHIBUKI-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHIBUKI-V-V4', 'プラムMGブラウンⅡ', '#8B4513', 4
FROM items i WHERE i.item_code = 'EXT-WALL-SHIBUKI-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHIBUKI-V-V5', 'プラムMGセピアⅡ', '#704214', 5
FROM items i WHERE i.item_code = 'EXT-WALL-SHIBUKI-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHIBUKI-V-V6', 'プラムMGウィニーホワイトⅡ', '#FAFAFA', 6
FROM items i WHERE i.item_code = 'EXT-WALL-SHIBUKI-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHIBUKI-V-V7', 'プラムMGシェルトグレーⅡ', '#D3D3D3', 7
FROM items i WHERE i.item_code = 'EXT-WALL-SHIBUKI-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-AFFETTO-V-V1', 'ブリジェMGセピア', '#704214', 1
FROM items i WHERE i.item_code = 'EXT-WALL-AFFETTO-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-AFFETTO-V-V2', 'ブリジェMGピアラシルク', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'EXT-WALL-AFFETTO-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-AFFETTO-V-V3', 'ブリジェMGウォームグレー', '#808080', 3
FROM items i WHERE i.item_code = 'EXT-WALL-AFFETTO-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-AFFETTO-V-V4', 'ブリジェMGシェルトグレー', '#D3D3D3', 4
FROM items i WHERE i.item_code = 'EXT-WALL-AFFETTO-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ROCKLINE-V-V1', 'プラムMGホワイトⅡ', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'EXT-WALL-ROCKLINE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ROCKLINE-V-V2', 'プラムMGアイボリーⅡ', '#FFFFF0', 2
FROM items i WHERE i.item_code = 'EXT-WALL-ROCKLINE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ROCKLINE-V-V3', 'プラムMGアッシュⅡ', '#C4C4C4', 3
FROM items i WHERE i.item_code = 'EXT-WALL-ROCKLINE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-NATURALLINE-V-V1', 'プラムMGホワイトⅡ', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'EXT-WALL-NATURALLINE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-NATURALLINE-V-V2', 'プラムMGアイボリーⅡ', '#FFFFF0', 2
FROM items i WHERE i.item_code = 'EXT-WALL-NATURALLINE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-NATURALLINE-V-V3', 'プラムMGチャコールⅡ', '#36454F', 3
FROM items i WHERE i.item_code = 'EXT-WALL-NATURALLINE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-NATURALLINE-V-V4', 'プラムMGブルー', '#4169E1', 4
FROM items i WHERE i.item_code = 'EXT-WALL-NATURALLINE-V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CONCRETE-16V-V1', 'コンクリートMGライトグレー', '#D3D3D3', 1
FROM items i WHERE i.item_code = 'EXT-WALL-CONCRETE-16V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-STILL-LUMBER-PREMIUM-V1', 'スティルMGアッシュホワイト30', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'EXT-WALL-STILL-LUMBER-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-STILL-LUMBER-PREMIUM-V2', 'スティルMGブラウン30', '#8B4513', 2
FROM items i WHERE i.item_code = 'EXT-WALL-STILL-LUMBER-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-STILL-LUMBER-PREMIUM-V3', 'スティルMGアッシュブラウン30', '#A67B5B', 3
FROM items i WHERE i.item_code = 'EXT-WALL-STILL-LUMBER-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-STILL-LUMBER-PREMIUM-V4', 'スティルMGブラック30', '#000000', 4
FROM items i WHERE i.item_code = 'EXT-WALL-STILL-LUMBER-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MILSTEIN-PREMIUM-V1', 'ミルトMGホワイト30', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'EXT-WALL-MILSTEIN-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MILSTEIN-PREMIUM-V2', 'ミルトMGブラック30', '#000000', 2
FROM items i WHERE i.item_code = 'EXT-WALL-MILSTEIN-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MILSTEIN-PREMIUM-V3', 'ミルトMGグレー30', '#808080', 3
FROM items i WHERE i.item_code = 'EXT-WALL-MILSTEIN-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-PRILETE-PREMIUM-V1', 'クアラMGホワイト30', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'EXT-WALL-PRILETE-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-PRILETE-PREMIUM-V2', 'クアラMGアイボリー30', '#FFFFF0', 2
FROM items i WHERE i.item_code = 'EXT-WALL-PRILETE-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-PRILETE-PREMIUM-V3', 'クアラMGオーカー30', '#CC7722', 3
FROM items i WHERE i.item_code = 'EXT-WALL-PRILETE-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-PRILETE-PREMIUM-V4', 'クアラMGネロ30', '#252525', 4
FROM items i WHERE i.item_code = 'EXT-WALL-PRILETE-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-PRILETE-PREMIUM-V5', 'クアラMGネイビー30', '#000080', 5
FROM items i WHERE i.item_code = 'EXT-WALL-PRILETE-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CASTINGWOOD-PREMIUM-V1', 'ホワイトアッシュMG30', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CASTINGWOOD-PREMIUM-V2', 'ホワイトキャメルMG30', '#C19A6B', 2
FROM items i WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CASTINGWOOD-PREMIUM-V3', 'ナチュラルオーカーMG30', '#CC7722', 3
FROM items i WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CASTINGWOOD-PREMIUM-V4', 'ミディアムブラウンMG30', '#8B4513', 4
FROM items i WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CASTINGWOOD-PREMIUM-V5', 'ダークブラウンMG30', '#654321', 5
FROM items i WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CASTINGWOOD-PREMIUM-V6', 'カーボンブラックMG30', '#000000', 6
FROM items i WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CASTINGWOOD-PREMIUM-V7', 'スモークシルバーMG30', '#C0C0C0', 7
FROM items i WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CASTINGWOOD-PREMIUM-V8', 'ノースグリーンMG30', '#2E8B57', 8
FROM items i WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CASTINGWOOD-PREMIUM-V9', 'ダークグリーンMG30', '#013220', 9
FROM items i WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-HARMORAID-V1', 'QFマーチ チタン ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'EXT-WALL-HARMORAID'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-HARMORAID-V2', 'QFコンフォート チタン ベージュ', '#F5DEB3', 2
FROM items i WHERE i.item_code = 'EXT-WALL-HARMORAID'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-HARMORAID-V3', 'QFコンフォート チタン ブラウン', '#8B4513', 3
FROM items i WHERE i.item_code = 'EXT-WALL-HARMORAID'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-HARMORAID-V4', 'QFブリュレ チタン ブラック', '#000000', 4
FROM items i WHERE i.item_code = 'EXT-WALL-HARMORAID'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MODERN-SLIT-18-V1', 'QFシルク チタン ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'EXT-WALL-MODERN-SLIT-18'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MODERN-SLIT-18-V2', 'QFアトランティック チタン ブルー', '#4682B4', 2
FROM items i WHERE i.item_code = 'EXT-WALL-MODERN-SLIT-18'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MODERN-SLIT-18-V3', 'QFシルク チタン グレー', '#808080', 3
FROM items i WHERE i.item_code = 'EXT-WALL-MODERN-SLIT-18'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MODERN-SLIT-18-V4', 'QFダークロースト チタン ブラウン', '#3B2F2F', 4
FROM items i WHERE i.item_code = 'EXT-WALL-MODERN-SLIT-18'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-MODERN-SLIT-18-V5', 'QFチャコール チタン ブラック', '#36454F', 5
FROM items i WHERE i.item_code = 'EXT-WALL-MODERN-SLIT-18'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-FIERTE-V1', 'QFフィエルテ チタン コンクリート', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'EXT-WALL-FIERTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-FIERTE-V2', 'QFフィエルテ チタン アイロン', '#8B7D6B', 2
FROM items i WHERE i.item_code = 'EXT-WALL-FIERTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-FIERTE-V3', 'QFフィエルテ チタン リトスオオヤ', '#A0A0A0', 3
FROM items i WHERE i.item_code = 'EXT-WALL-FIERTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-FIERTE-V4', 'QFフィエルテ チタン マーブル', '#F0F0F0', 4
FROM items i WHERE i.item_code = 'EXT-WALL-FIERTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-FIERTE-V5', 'QFフィエルテ チタン ダークコンクリート', '#696969', 5
FROM items i WHERE i.item_code = 'EXT-WALL-FIERTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SP-BILECT-V1', 'マットブラック', '#1C1C1C', 1
FROM items i WHERE i.item_code = 'EXT-WALL-SP-BILECT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SP-BILECT-V2', 'クールブラウン', '#8B7355', 2
FROM items i WHERE i.item_code = 'EXT-WALL-SP-BILECT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SP-BILECT-V3', 'クールネイビー', '#003F87', 3
FROM items i WHERE i.item_code = 'EXT-WALL-SP-BILECT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SP-BILECT-V4', 'モスグリーン', '#4A5D23', 4
FROM items i WHERE i.item_code = 'EXT-WALL-SP-BILECT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SP-BILECT-V5', 'スマートガンメタ', '#2C3539', 5
FROM items i WHERE i.item_code = 'EXT-WALL-SP-BILECT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SP-BILECT-V6', 'ダークグレー', '#404040', 6
FROM items i WHERE i.item_code = 'EXT-WALL-SP-BILECT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SP-BILECT-V7', 'ライトアッシュ', '#C4C4C4', 7
FROM items i WHERE i.item_code = 'EXT-WALL-SP-BILECT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SP-BILECT-V8', 'ネオホワイト', '#FAFAFA', 8
FROM items i WHERE i.item_code = 'EXT-WALL-SP-BILECT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V1', 'ネオブラック', '#000000', 1
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V2', 'ビターブラウン', '#593A27', 2
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V3', 'グランブルー', '#003366', 3
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V4', 'モスグリーン', '#4A5D23', 4
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V5', 'シャンパンメタリック', '#F7E7CE', 5
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V6', 'シルバーメタリック', '#C0C0C0', 6
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V7', 'ダークメタリック', '#2F4F4F', 7
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V8', 'チタングレーメタリック', '#566573', 8
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V9', 'オータムレッド', '#CD5C5C', 9
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V10', 'カスタードイエロー', '#F0E68C', 10
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V11', 'ミストアイボリー', '#F5F5DC', 11
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-GALSPAN-V12', 'ネオホワイト', '#FAFAFA', 12
FROM items i WHERE i.item_code = 'EXT-WALL-GALSPAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V1', 'T1010', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V2', 'T3001', '#F5DEB3', 2
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V3', 'T3005', '#FFE4B5', 3
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V4', 'T3009', '#D2B48C', 4
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V5', 'T3010', '#DEB887', 5
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V6', 'T3400', '#F4A460', 6
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V7', 'T4001', '#8B7355', 7
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V8', 'T4024', '#A0522D', 8
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V9', 'T4403', '#8B4513', 9
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V10', 'T5009', '#696969', 10
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V11', 'T5403', '#708090', 11
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-ANCIENT-BRICK-V12', 'T6013', '#2F4F4F', 12
FROM items i WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V1', 'T1010', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V2', 'T3001', '#F5DEB3', 2
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V3', 'T3005', '#FFE4B5', 3
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V4', 'T3009', '#D2B48C', 4
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V5', 'T3010', '#DEB887', 5
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V6', 'T3400', '#F4A460', 6
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V7', 'T4001', '#8B7355', 7
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V8', 'T4024', '#A0522D', 8
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V9', 'T4403', '#8B4513', 9
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V10', 'T5009', '#696969', 10
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V11', 'T5403', '#708090', 11
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-METEOR-V12', 'T6013', '#2F4F4F', 12
FROM items i WHERE i.item_code = 'EXT-WALL-METEOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHINTOA-PREMIUM-V1', 'シントアMGホワイト30', '#FAFAFA', 1
FROM items i WHERE i.item_code = 'EXT-WALL-SHINTOA-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHINTOA-PREMIUM-V2', 'シントアMGオフホワイト30', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'EXT-WALL-SHINTOA-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHINTOA-PREMIUM-V3', 'シントアMGネイビー30', '#2F2F4F', 3
FROM items i WHERE i.item_code = 'EXT-WALL-SHINTOA-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHINTOA-PREMIUM-V4', 'シントアMGライトグレー30', '#D3D3D3', 4
FROM items i WHERE i.item_code = 'EXT-WALL-SHINTOA-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHINTOA-PREMIUM-V5', 'シントアMGミロリブルー30', '#4169E1', 5
FROM items i WHERE i.item_code = 'EXT-WALL-SHINTOA-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SPUMO-PREMIUM-V1', 'プリミエMGホワイト30', '#FAFAFA', 1
FROM items i WHERE i.item_code = 'EXT-WALL-SPUMO-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SPUMO-PREMIUM-V2', 'ラフラMGブラック30', '#1C1C1C', 2
FROM items i WHERE i.item_code = 'EXT-WALL-SPUMO-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SPUMO-PREMIUM-V3', 'ラフラMGグレー30', '#A9A9A9', 3
FROM items i WHERE i.item_code = 'EXT-WALL-SPUMO-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-VINTAGEWOOD-PREMIUM-V1', 'スキムドMGダルブラウン30', '#8B7355', 1
FROM items i WHERE i.item_code = 'EXT-WALL-VINTAGEWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-VINTAGEWOOD-PREMIUM-V2', 'スキムドMGレッド30', '#8B4513', 2
FROM items i WHERE i.item_code = 'EXT-WALL-VINTAGEWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-VINTAGEWOOD-PREMIUM-V3', 'スキムドMGアッシュ30', '#A67B5B', 3
FROM items i WHERE i.item_code = 'EXT-WALL-VINTAGEWOOD-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-CONCRETE16-PREMIUM-V1', 'MGグレー30', '#A9A9A9', 1
FROM items i WHERE i.item_code = 'EXT-WALL-CONCRETE16-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHARMROCK-PREMIUM-V1', 'マハビMGルビー30', '#722F37', 1
FROM items i WHERE i.item_code = 'EXT-WALL-SHARMROCK-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHARMROCK-PREMIUM-V2', 'マハビMGブラウン30', '#5C4033', 2
FROM items i WHERE i.item_code = 'EXT-WALL-SHARMROCK-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'EXT-WALL-SHARMROCK-PREMIUM-V3', 'マハビMGスモーク30', '#4A4A4A', 3
FROM items i WHERE i.item_code = 'EXT-WALL-SHARMROCK-PREMIUM'
ON CONFLICT DO NOTHING;

-- ========================================
-- 価格設定登録
-- ========================================
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHARMROCK-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHARMROCK-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHARMROCK-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHARMROCK-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-LEGALSTONE-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-LEGALSTONE-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-LEGALSTONE-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-LEGALSTONE-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-DISTASHADE-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-DISTASHADE-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-DISTASHADE-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-DISTASHADE-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-VOLVSTONE-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-VOLVSTONE-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-VOLVSTONE-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-VOLVSTONE-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SPLITSTONE-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SPLITSTONE-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SPLITSTONE-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SPLITSTONE-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CORMOSTONE-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CORMOSTONE-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CORMOSTONE-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CORMOSTONE-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-GRAINWOOD-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-GRAINWOOD-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-GRAINWOOD-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-GRAINWOOD-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MEISTERWOOD-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MEISTERWOOD-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MEISTERWOOD-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MEISTERWOOD-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHIBUKI-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHIBUKI-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHIBUKI-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHIBUKI-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-AFFETTO-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-AFFETTO-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-AFFETTO-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-AFFETTO-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-ROCKLINE-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-ROCKLINE-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-ROCKLINE-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-ROCKLINE-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-NATURALLINE-V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-NATURALLINE-V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-NATURALLINE-V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-NATURALLINE-V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CONCRETE-16V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CONCRETE-16V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CONCRETE-16V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CONCRETE-16V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-STILL-LUMBER-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-STILL-LUMBER-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-STILL-LUMBER-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-STILL-LUMBER-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MILSTEIN-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MILSTEIN-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MILSTEIN-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MILSTEIN-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-PRILETE-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-PRILETE-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-PRILETE-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-PRILETE-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CASTINGWOOD-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-HARMORAID' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-HARMORAID' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-HARMORAID' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-HARMORAID' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MODERN-SLIT-18' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MODERN-SLIT-18' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MODERN-SLIT-18' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-MODERN-SLIT-18' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-FIERTE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-FIERTE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-FIERTE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-FIERTE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SP-BILECT' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SP-BILECT' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 9500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SP-BILECT' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SP-BILECT' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-GALSPAN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-GALSPAN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 9500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-GALSPAN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-GALSPAN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-ANCIENT-BRICK' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-METEOR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-METEOR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-METEOR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-METEOR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHINTOA-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHINTOA-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHINTOA-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHINTOA-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SPUMO-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SPUMO-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SPUMO-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SPUMO-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-VINTAGEWOOD-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-VINTAGEWOOD-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-VINTAGEWOOD-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-VINTAGEWOOD-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CONCRETE16-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CONCRETE16-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CONCRETE16-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-CONCRETE16-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHARMROCK-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHARMROCK-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHARMROCK-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4500, false, true
FROM items i, products p
WHERE i.item_code = 'EXT-WALL-SHARMROCK-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;

-- ========================================
-- コミット
-- ========================================
COMMIT;

-- 確認クエリ
SELECT
  c.name as category,
  COUNT(i.id) as item_count
FROM categories c
LEFT JOIN items i ON i.category_id = c.id
WHERE c.category_type = 'exterior'
GROUP BY c.name, c.display_order
ORDER BY c.display_order;
