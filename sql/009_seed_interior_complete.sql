-- ========================================
-- 内装アイテム完全移行SQL
-- 生成日時: 2025-12-13T01:30:45.552Z
-- アイテム数: 317
-- ========================================

-- トランザクション開始
BEGIN;

-- 既存の内装アイテムを削除（クリーンアップ）
DELETE FROM item_pricing WHERE item_id IN (
  SELECT id FROM items WHERE category_id IN (
    SELECT id FROM categories WHERE category_type = 'interior'
  )
);
DELETE FROM item_variants WHERE item_id IN (
  SELECT id FROM items WHERE category_id IN (
    SELECT id FROM categories WHERE category_type = 'interior'
  )
);
DELETE FROM items WHERE category_id IN (
  SELECT id FROM categories WHERE category_type = 'interior'
);
DELETE FROM categories WHERE category_type = 'interior';

-- ========================================
-- カテゴリ登録 (39件)
-- ========================================
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('Gハウスオリジナル', 'interior-ghouse-original', 'interior', 'Gハウスオリジナル', 1, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('床材', 'interior-flooring', 'interior', '床材', 2, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('天井', 'interior-ceiling', 'interior', '天井', 3, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('間接照明', 'interior-indirect-lighting', 'interior', '間接照明', 4, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('カーテンBOX', 'interior-curtain-box', 'interior', 'カーテンBOX', 5, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('補強・下地', 'interior-reinforcement', 'interior', '補強・下地', 6, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('ニッチ', 'interior-niche', 'interior', 'ニッチ', 7, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('壁材', 'interior-wall-material', 'interior', '壁材', 8, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('建具', 'interior-fitting', 'interior', '建具', 9, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('階段', 'interior-stairs', 'interior', '階段', 10, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('収納', 'interior-storage', 'interior', '収納', 11, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('天井材', 'interior-ceiling-material', 'interior', '天井材', 12, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('畳', 'interior-tatami', 'interior', '畳', 13, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('小上がり', 'interior-koagari', 'interior', '小上がり', 14, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('お風呂', 'interior-bathroom', 'interior', 'お風呂', 15, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('点検口', 'interior-inspection-hatch', 'interior', '点検口', 16, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('換気システム', 'interior-ventilation', 'interior', '換気システム', 17, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('壁', 'interior-wall', 'interior', '壁', 18, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('室内ドア', 'interior-interior-door', 'interior', '室内ドア', 19, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('室内窓', 'interior-interior-window', 'interior', '室内窓', 20, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('アクセントパネル', 'interior-accent-panel', 'interior', 'アクセントパネル', 21, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('格子', 'interior-lattice', 'interior', '格子', 22, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('アクセントタイル', 'interior-accent-tile', 'interior', 'アクセントタイル', 23, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('インテリアカウンター', 'interior-interior-counter', 'interior', 'インテリアカウンター', 24, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('収納棚', 'interior-storage-shelf', 'interior', '収納棚', 25, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('玄関靴箱', 'interior-shoe-cabinet', 'interior', '玄関靴箱', 26, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('トイレ収納', 'interior-toilet-storage', 'interior', 'トイレ収納', 27, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('スロップシンク', 'interior-slop-sink', 'interior', 'スロップシンク', 28, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('洗濯パン', 'interior-laundry-pan', 'interior', '洗濯パン', 29, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('玄関手洗い', 'interior-entrance-washbasin', 'interior', '玄関手洗い', 30, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('物干し金物', 'interior-laundry-hardware', 'interior', '物干し金物', 31, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('乾太くん', 'interior-kantatsu-kun', 'interior', '乾太くん', 32, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('スイッチ/コンセント', 'interior-switch-outlet', 'interior', 'スイッチ/コンセント', 33, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('インターホン', 'interior-intercom', 'interior', 'インターホン', 34, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('エアコン', 'interior-aircon', 'interior', 'エアコン', 35, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('ダウンライト施工費', 'interior-downlight-install', 'interior', 'ダウンライト施工費', 36, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('洗濯機混合水栓', 'interior-washing-machine-faucet', 'interior', '洗濯機混合水栓', 37, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('ナノバブル発生装置', 'interior-nanobubble', 'interior', 'ナノバブル発生装置', 38, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;
INSERT INTO categories (name, slug, category_type, description, display_order, is_active, is_required)
VALUES ('アクセサリー', 'interior-accessory', 'interior', 'アクセサリー', 39, true, false)
ON CONFLICT (slug) DO UPDATE SET name = EXCLUDED.name, display_order = EXCLUDED.display_order;

-- ========================================
-- アイテム登録 (317件)
-- ========================================

-- 1. ダイニングテーブル スクエア
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-GHOUSE-DINING-TABLE-SQUARE',
  'ダイニングテーブル スクエア',
  'Gハウス',
  'Gハウスオリジナル',
  'DT-SQUARE',
  'サイズ：高さ720mm、奥行900mm、幅1500/1650/1800mm。天板耐荷重100kg。コンセント2口またはコンセント1口+USB Type A 1口',
  false,
  true,
  1
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 2. ダイニングテーブル スクエア（ラウンド脚）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG',
  'ダイニングテーブル スクエア（ラウンド脚）',
  'Gハウス',
  'Gハウスオリジナル',
  'DT-SQUARE-ROUND',
  'サイズ：高さ720mm、奥行900mm、幅1500/1650/1800mm。天板耐荷重100kg。ラウンド脚タイプ',
  false,
  true,
  2
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 3. ダイニングテーブル ラウンド（クワトロ脚）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO',
  'ダイニングテーブル ラウンド（クワトロ脚）',
  'Gハウス',
  'Gハウスオリジナル',
  'DT-ROUND-QUATTRO',
  'サイズ：高さ720mm、天板幅1100/1200mm。天板耐荷重100kg。クワトロ脚（4本脚）タイプ',
  false,
  true,
  3
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 4. ダイニングテーブル ラウンド（オクタ脚）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-GHOUSE-DINING-TABLE-ROUND-OCTA',
  'ダイニングテーブル ラウンド（オクタ脚）',
  'Gハウス',
  'Gハウスオリジナル',
  'DT-ROUND-OCTA',
  'サイズ：高さ720mm、天板幅1100/1200mm。天板耐荷重100kg。オクタ脚（八角形1本脚）タイプ',
  false,
  true,
  4
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 5. ベリティスフロアーベースコート
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-VERITIS-BASECOAT',
  'ベリティスフロアーベースコート',
  'Panasonic',
  '床材',
  'VERITIS-BASECOAT',
  '豊富な色柄を揃えたシートフロアー。ワックス不要、抗菌効果、汚れ・すり傷・凹み・キャスターに強い',
  true,
  true,
  5
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 6. ライブナチュラルMRX 2P
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-LIVE-NATURAL-MRX',
  'ライブナチュラルMRX 2P',
  '朝日ウッドテック',
  '床材',
  'LIVE-NATURAL-MRX',
  '天然木が持つ個性を美しく表現。突き板12mm、抗ウイルス、ホットカーペット対応、耐凹み傷',
  true,
  true,
  6
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 7. マイスターズウッドフロアー ハードコートクリア
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-MEISTERS-WOOD',
  'マイスターズウッドフロアー ハードコートクリア',
  'Panasonic',
  '床材',
  'MEISTERS-WOOD',
  '天然木突き板仕上げ。ワックス不要、抗菌、汚れ・すり傷・凹み・キャスターに強い',
  false,
  true,
  7
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 8. ライブナチュラルMSX/MSX-L 2P
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-LIVE-NATURAL-MSX',
  'ライブナチュラルMSX/MSX-L 2P',
  '朝日ウッドテック',
  '床材',
  'LIVE-NATURAL-MSX',
  '天然木の味わいをマットな質感で表現。突き板12mm、抗ウイルス、ホットカーペット対応',
  false,
  true,
  8
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 9. 銘木フロアーラスティック 2P
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-MEIBOKU-RUSTIC',
  '銘木フロアーラスティック 2P',
  'イクタ',
  '床材',
  'MEIBOKU-RUSTIC',
  'オイルの風合いを生かしたラスティック塗装。突き板12mm、「空気を洗う」健康フローリング',
  false,
  true,
  9
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 10. クルードフローリング303
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CRUDE-303',
  'クルードフローリング303',
  'イクタ',
  '床材',
  'CRUDE-303',
  '水廻り専用シートフローリング。抗ウイルス・抗菌、対汚染性、傷に強い',
  false,
  true,
  10
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 11. 銘木フロアーラスティック エイジング 2P
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-MEIBOKU-AGING',
  '銘木フロアーラスティック エイジング 2P',
  'イクタ',
  '床材',
  'MEIBOKU-AGING',
  '木目を強く打ち出したエイジング仕上げ。突き板12mm、「空気を洗う」健康フローリング',
  false,
  true,
  11
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 12. ビンテージフロアーラスティック 2P
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-VINTAGE-RUSTIC',
  'ビンテージフロアーラスティック 2P',
  'イクタ',
  '床材',
  'VINTAGE-RUSTIC',
  '天然木ならではの色味や節、自然の趣を感じられる。挽板12mm、「空気を洗う」健康フローリング',
  false,
  true,
  12
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 13. ライブナチュラルプレミアム ラスティック 2P
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-LIVE-NATURAL-PREMIUM',
  'ライブナチュラルプレミアム ラスティック 2P',
  '朝日ウッドテック',
  '床材',
  'LIVE-NATURAL-PREMIUM',
  '天然木が持つ個性を美しく表現。挽板12mm、ウイルス低減効果、防虫処理、抗菌効果',
  false,
  true,
  13
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 14. チャネルオリジナル ユニシリーズ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CHANNEL-UNI',
  'チャネルオリジナル ユニシリーズ',
  'チャネルオリジナル',
  '床材',
  'CHANNEL-UNI',
  '色の濃淡・小さな節・かすりなど自然な風合いや美しさを感じられる無垢床。ウレタン塗装。※別途配送料¥30,000',
  false,
  true,
  14
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 15. チャネルオリジナル ユニシリーズ（高級樹種）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CHANNEL-UNI-PREMIUM',
  'チャネルオリジナル ユニシリーズ（高級樹種）',
  'チャネルオリジナル',
  '床材',
  'CHANNEL-UNI-P',
  '色の濃淡・小さな節・かすりなど自然な風合いや美しさを感じられる無垢床。ウレタン塗装。※別途配送料¥30,000',
  false,
  true,
  15
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 16. チャネルオリジナル ヘリンボーン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CHANNEL-HERRINGBONE',
  'チャネルオリジナル ヘリンボーン',
  'チャネルオリジナル',
  '床材',
  'CHANNEL-HERRINGBONE',
  '赤味、入り皮など木の特徴が随所にみられバラエティーな表情を楽しめる。北海道産ナラ節無、国産木材、接着剤不使用。※別途配送料¥30,000',
  false,
  true,
  16
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 17. 玄関框（フローリング色合わせ）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-GENKAN-KAMACHI-STANDARD',
  '玄関框（フローリング色合わせ）',
  'Panasonic/朝日ウッドテック',
  '床材',
  'GENKAN-KAMACHI-STD',
  'ご選択いただいたフローリング色合わせとなります。付け框30×150。Panasonic ベリティス対応（シート仕上げ）、朝日ウッドテック Live Natural塗装品（マット塗装フロア対応）',
  true,
  true,
  17
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 18. 床見切り（フラットバー）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-FLOOR-TRIM-FLATBAR',
  '床見切り（フラットバー）',
  'Gハウス施工',
  '床材',
  'FLOOR-TRIM-FLATBAR',
  'フローリングと異素材の床材との間に納まる部材。シルバーのみ',
  true,
  true,
  18
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 19. 玄関框（プレイリーホームズ）〜1.8m
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-18',
  '玄関框（プレイリーホームズ）〜1.8m',
  'プレイリーホームズ',
  '床材',
  'PRAIRIE-KAMACHI-18',
  '6mmという薄さ、シンプルスマートの新しい提案。ゴム ウレタンブラック/ウレタンホワイト。長さ1.8m迄',
  false,
  true,
  19
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 20. 玄関框（プレイリーホームズ）〜2.8m
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-28',
  '玄関框（プレイリーホームズ）〜2.8m',
  'プレイリーホームズ',
  '床材',
  'PRAIRIE-KAMACHI-28',
  '6mmという薄さ、シンプルスマートの新しい提案。ゴム ウレタンブラック/ウレタンホワイト。長さ2.8m迄',
  false,
  true,
  20
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 21. CFシート
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CF-SHEET-TOLI',
  'CFシート',
  '東リ',
  '床材',
  'CF-SHEET',
  '防水性、クッション性に優れたビニール系のシート床材。手入れも手軽で汚れも落としやすい。水廻りにご使用可能',
  true,
  true,
  21
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 22. CFシート（水廻り以外）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CF-SHEET-TOLI-OTHER',
  'CFシート（水廻り以外）',
  '東リ',
  '床材',
  'CF-SHEET-OTHER',
  '防水性、クッション性に優れたビニール系のシート床材。水廻り以外でご使用される場合は追加費用',
  false,
  true,
  22
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 23. マティルEサイズ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-MATIL-E',
  'マティルEサイズ',
  '田島ルーフィング',
  '床材',
  'MATIL-E',
  '水廻りにご使用いただけるフロアタイル。水廻りでは追加費用無しでご採用可能',
  false,
  true,
  23
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 24. マティルEサイズ 水廻り専用
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-MATIL-E-WET',
  'マティルEサイズ 水廻り専用',
  '田島ルーフィング',
  '床材',
  'MATIL-E-WET',
  '水廻り専用のフロアタイル。水廻り以外でご使用される場合は追加費用',
  false,
  true,
  24
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 25. マティルWサイズ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-MATIL-W',
  'マティルWサイズ',
  '田島ルーフィング',
  '床材',
  'MATIL-W',
  '水廻りにご使用いただけるフロアタイル（ワイドサイズ）。水廻りでは追加費用無しでご採用可能',
  false,
  true,
  25
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 26. ロイヤルストーン スムースコンクリート
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-SMOOTH-CONCRETE',
  'ロイヤルストーン スムースコンクリート',
  '東リ',
  '床材',
  'PST40-SC',
  '定番のコンクリート柄。コンクリートの素地の質感をシームレスでリアルに再現。450mm×450mm（面取無）',
  false,
  true,
  26
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 27. ロイヤルストーン スムースコンクリート 水廻り専用
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-SMOOTH-CONCRETE-WET',
  'ロイヤルストーン スムースコンクリート 水廻り専用',
  '東リ',
  '床材',
  'PST40-SC-WET',
  '水廻り専用。水廻り以外でご使用される場合は追加費用。450mm×450mm（面取無）',
  false,
  true,
  27
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 28. ロイヤルストーン・モア コンコット
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-CONCOTTO',
  'ロイヤルストーン・モア コンコット',
  '東リ',
  '床材',
  'PST40-CC',
  'タイルの見た目や凹凸を再現したビニール系床材。耐久性と耐水性を兼ね備え水廻りにおすすめ。600mm×600mm（R面取）',
  false,
  true,
  28
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 29. ロイヤルストーン コンクリート 水廻り専用
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-CONCRETE-WET',
  'ロイヤルストーン コンクリート 水廻り専用',
  '東リ',
  '床材',
  'PST4032',
  '水廻り専用。水廻り以外でご使用される場合は追加費用。450mm×450mm（面取無）',
  false,
  true,
  29
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 30. ロイヤルストーン・モア フランモルタル
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-FRANC-MORTAR',
  'ロイヤルストーン・モア フランモルタル',
  '東リ',
  '床材',
  'PST40-FM',
  'モルタル調のフロアタイル。600mm×600mm（R面取）',
  false,
  true,
  30
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 31. ロイヤルストーン・モア ジオールストーン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-GEOL-STONE',
  'ロイヤルストーン・モア ジオールストーン',
  '東リ',
  '床材',
  'PST40-GS',
  '天然石の風合いを再現。600mm×600mm（R面取）',
  false,
  true,
  31
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 32. ロイヤルストーン クロムスレート 水廻り専用
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-CHROME-SLATE-WET',
  'ロイヤルストーン クロムスレート 水廻り専用',
  '東リ',
  '床材',
  'PST41-CS',
  '水廻り専用。水廻り以外でご使用される場合は追加費用。450mm×450mm（面取無）',
  false,
  true,
  32
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 33. ロイヤルストーン・モア フォグライム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-FOG-LIME',
  'ロイヤルストーン・モア フォグライム',
  '東リ',
  '床材',
  'PST40-FL',
  '洗練された天然石の風合いを程よいサイズでミックスさせたクールナチュラルスタイル。300mm×450mm（4面R面取）',
  false,
  true,
  33
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 34. ロイヤルストーン カララホワイト
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-CARRARA-WHITE',
  'ロイヤルストーン カララホワイト',
  '東リ',
  '床材',
  'PST4108',
  '天然石の自然な抑揚を表現。450mm×450mm（面取無）',
  false,
  true,
  34
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 35. ロイヤルウッド 籐
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-RATTAN',
  'ロイヤルウッド 籐',
  '東リ',
  '床材',
  'PWT4309',
  '籐（ラタン）柄のフロアタイル。450mm×450mm（面取無）',
  false,
  true,
  35
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 36. ロイヤルウッド・ヘリンボーン フレンチヘリンボーン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TOLI-FRENCH-HERRINGBONE',
  'ロイヤルウッド・ヘリンボーン フレンチヘリンボーン',
  '東リ',
  '床材',
  'PWT42-FH',
  'フレンチヘリンボーン柄のフロアタイル。450mm×450mm（面取無）',
  false,
  true,
  36
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 37. カーペットタイル NTPシリーズ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CARPET-NTP',
  'カーペットタイル NTPシリーズ',
  'sangetsu',
  '床材',
  'NTP-SERIES',
  '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
  false,
  true,
  37
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 38. カーペットタイル NTHシリーズ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CARPET-NTH',
  'カーペットタイル NTHシリーズ',
  'sangetsu',
  '床材',
  'NTH-SERIES',
  '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
  false,
  true,
  38
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 39. カーペットタイル NT-31xxxシリーズ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CARPET-NT31',
  'カーペットタイル NT-31xxxシリーズ',
  'sangetsu',
  '床材',
  'NT-31-SERIES',
  '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
  false,
  true,
  39
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 40. カーペットタイル NT-35xxxシリーズ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CARPET-NT35',
  'カーペットタイル NT-35xxxシリーズ',
  'sangetsu',
  '床材',
  'NT-35-SERIES',
  '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
  false,
  true,
  40
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 41. カーペットタイル NT-3xxシリーズ 無地
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CARPET-NT3-PLAIN',
  'カーペットタイル NT-3xxシリーズ 無地',
  'sangetsu',
  '床材',
  'NT-3-PLAIN',
  '耐久性やクッション性を兼ねそろえた素材。シンプルな無地タイプ',
  false,
  true,
  41
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 42. カーペットタイル DTシリーズ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-CARPET-DT',
  'カーペットタイル DTシリーズ',
  'sangetsu',
  '床材',
  'DT-SERIES',
  '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
  false,
  true,
  42
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 43. ランドストン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TILE-LANDSTONE',
  'ランドストン',
  'Nagoya mozaic',
  '床材',
  'CRD-X38',
  '内装壁・内装床で使用可能。600×600または300×600。工事費用一式¥30,000、6㎡以下は追加¥50,000',
  false,
  true,
  43
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 44. ピエトラソーニ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TILE-PIETRA-SONI',
  'ピエトラソーニ',
  'Nagoya mozaic',
  '床材',
  'PAN-X80',
  '内装壁・内装床で使用可能。600×600または300×600。工事費用一式¥30,000、6㎡以下は追加¥50,000',
  false,
  true,
  44
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 45. メンフィス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TILE-MEMPHIS',
  'メンフィス',
  'Lixil',
  '床材',
  'IPF-600/MMP',
  '内装壁・内装床で使用可能。600×600または300×600。工事費用一式¥30,000、6㎡以下は追加¥50,000。人気商品',
  false,
  true,
  45
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 46. タイル工事費用一式
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TILE-CONSTRUCTION-FEE',
  'タイル工事費用一式',
  'Gハウス施工',
  '床材',
  'TILE-CONST',
  'タイル施工時の工事費用一式。6㎡以下の施工の場合は追加¥50,000',
  false,
  true,
  46
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 47. タイル工事費用追加（6㎡以下）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TILE-CONSTRUCTION-FEE-SMALL',
  'タイル工事費用追加（6㎡以下）',
  'Gハウス施工',
  '床材',
  'TILE-CONST-SMALL',
  '6㎡以下のタイル施工時の追加工事費用',
  false,
  true,
  47
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 48. タイル目地色
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-TILE-GROUT-COLOR',
  'タイル目地色',
  'Gハウス施工',
  '床材',
  'TILE-GROUT',
  'タイル施工時の目地色選択',
  true,
  true,
  48
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 49. 勾配天井工事
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CEILING-SLOPE',
  '勾配天井工事',
  'Gハウス施工',
  '天井',
  'SLOPE-CEILING',
  '開放感のある勾配天井。※梁や火打ち梁が露出する場合あり',
  false,
  true,
  49
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 50. 天井高UP（H2600迄）100mm毎
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CEILING-HEIGHT-UP-100',
  '天井高UP（H2600迄）100mm毎',
  'Gハウス施工',
  '天井',
  'CEILING-UP-100',
  '天井高を100mm単位でアップ。※部屋別での変更不可、フロアごとの変更',
  false,
  true,
  50
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 51. 天井高UP（H2600迄）200mm毎
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CEILING-HEIGHT-UP-200',
  '天井高UP（H2600迄）200mm毎',
  'Gハウス施工',
  '天井',
  'CEILING-UP-200',
  '天井高を200mm単位でアップ。※部屋別での変更不可、フロアごとの変更',
  false,
  true,
  51
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 52. 下がり天井
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CEILING-DROP',
  '下がり天井',
  'Gハウス施工',
  '天井',
  'DROP-CEILING',
  'デザイン性の高い下がり天井',
  false,
  true,
  52
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 53. コーブ照明
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LIGHTING-COVE',
  'コーブ照明',
  'Gハウス施工',
  '間接照明',
  'COVE-LIGHTING',
  '天井を照らす間接照明。※照明器具は別途費用。1m以下は¥15,000',
  false,
  true,
  53
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 54. コーニス照明
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LIGHTING-CORNICE',
  'コーニス照明',
  'Gハウス施工',
  '間接照明',
  'CORNICE-LIGHTING',
  '壁を照らす間接照明。※勾配天井での採用不可。1m以下は¥15,000',
  false,
  true,
  54
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 55. アッパー照明
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LIGHTING-UPPER',
  'アッパー照明',
  'Gハウス施工',
  '間接照明',
  'UPPER-LIGHTING',
  '上部アクリル板（t5）含む。1m以下は¥20,000',
  false,
  true,
  55
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 56. カーテンBOX（天井埋込タイプ）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CURTAIN-BOX-CEILING',
  'カーテンBOX（天井埋込タイプ）',
  'Gハウス施工',
  'カーテンBOX',
  'CURTAIN-BOX-CEILING',
  '天井に埋め込むタイプ。※勾配天井時採用不可。カーテンレールは別途。1m以下は¥15,000',
  false,
  true,
  56
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 57. カーテンBOX（下がり壁タイプ）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CURTAIN-BOX-WALL',
  'カーテンBOX（下がり壁タイプ）',
  'Gハウス施工',
  'カーテンBOX',
  'CURTAIN-BOX-WALL',
  '下がり壁に設置するタイプ。カーテンレールは別途。1m以下は¥11,000',
  false,
  true,
  57
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 58. 壁下地補強
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-REINFORCEMENT-WALL',
  '壁下地補強',
  'Gハウス施工',
  '補強・下地',
  'WALL-REINFORCEMENT',
  '1カ所（1,800mm×900mm）の壁下地補強',
  false,
  true,
  58
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 59. 床補強
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-REINFORCEMENT-FLOOR',
  '床補強',
  'Gハウス施工',
  '補強・下地',
  'FLOOR-REINFORCEMENT',
  '床の補強工事',
  false,
  true,
  59
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 60. ロールカーテン用天井下地
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-REINFORCEMENT-ROLL-CURTAIN',
  'ロールカーテン用天井下地',
  'Gハウス施工',
  '補強・下地',
  'ROLL-CURTAIN-BASE',
  '下地材の厚み12mm・幅300mm。価格は長さにより変動（1m未満¥3,000、2m未満¥6,000、3m未満¥9,000、4m未満¥12,000）',
  false,
  true,
  60
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 61. マグネットクロス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-MAGNET-CLOTH',
  'マグネットクロス',
  'シンコール',
  '補強・下地',
  'MAGMAGIC',
  '600×750mmのクロス下地材。表面仕上がりはクロスのため悪目立ちせず自然な仕上がり。※カット・くりぬき施工不可',
  false,
  true,
  61
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 62. 造作ニッチ パターンA（H320×W320）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-A',
  '造作ニッチ パターンA（H320×W320）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-A',
  'H320×W320mmのニッチ。※外壁側の壁への施工不可（断熱材欠損防止）',
  false,
  true,
  62
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 63. 造作ニッチ パターンB（H650×W500）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-B',
  '造作ニッチ パターンB（H650×W500）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-B',
  'H650×W500mm。リモコンニッチとしても使用可能。※外壁側の壁への施工不可',
  false,
  true,
  63
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 64. 造作ニッチ パターンC（H250×W750）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-C',
  '造作ニッチ パターンC（H250×W750）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-C',
  'H250×W750mm。※外壁側の壁への施工不可',
  false,
  true,
  64
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 65. 造作ニッチ パターンD（H1050×W500）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-D',
  '造作ニッチ パターンD（H1050×W500）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-D',
  'H1050×W500mm（H650・H200・H200台有に限る）。※外壁側の壁への施工不可',
  false,
  true,
  65
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 66. 造作ニッチ パターンE（H250×W1600）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-E',
  '造作ニッチ パターンE（H250×W1600）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-E',
  'H250×W1600mm。リモコンニッチとしても使用可能。※外壁側の壁への施工不可',
  false,
  true,
  66
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 67. 造作ニッチ パターンF（H150×W780）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-F',
  '造作ニッチ パターンF（H150×W780）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-F',
  'H150×W780mm。棚奥行約100mm。※外壁側の壁への施工不可（断熱材欠損防止）',
  false,
  true,
  67
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 68. 造作ニッチ パターンG（H150×W1050）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-G',
  '造作ニッチ パターンG（H150×W1050）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-G',
  'H150×W1050mm。棚奥行約100mm。※外壁側の壁への施工不可（断熱材欠損防止）',
  false,
  true,
  68
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 69. 造作ニッチ パターンH（H320×W320）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-H',
  '造作ニッチ パターンH（H320×W320）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-H',
  'H320×W320mm。棚奥行約100mm。※外壁側の壁への施工不可（断熱材欠損防止）',
  false,
  true,
  69
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 70. 造作ニッチ パターンI（H250×W750・洗面室向け）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-I',
  '造作ニッチ パターンI（H250×W750・洗面室向け）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-I',
  'H250×W750mm、棚奥行約100mm。洗面室におすすめ。※外壁側の壁への施工不可',
  false,
  true,
  70
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 71. 造作ニッチ パターンJ（H550×W400・洗面室向け）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-J',
  '造作ニッチ パターンJ（H550×W400・洗面室向け）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-J',
  'H550×W400mm。洗面室におすすめ。※外壁側の壁への施工不可（断熱材欠損防止）',
  false,
  true,
  71
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 72. 造作ニッチ パターンK（H700×W400・洗面室向け）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-K',
  '造作ニッチ パターンK（H700×W400・洗面室向け）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-K',
  'H700×W400mm。洗面室におすすめ。※外壁側の壁への施工不可（断熱材欠損防止）',
  false,
  true,
  72
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 73. 造作ニッチ パターンL（H750×W400・洗面室向け）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-PATTERN-L',
  '造作ニッチ パターンL（H750×W400・洗面室向け）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-L',
  'H750×W400mm。洗面室におすすめ。※外壁側の壁への施工不可（断熱材欠損防止）',
  false,
  true,
  73
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 74. リモコンニッチ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-REMOTE',
  'リモコンニッチ',
  'Gハウス施工',
  'ニッチ',
  'REMOTE-NICHE',
  'インターホン・給湯器リモコン・エアコンリモコン等を収納。※配線スペース確保のため背面にふかし壁が必要な場合あり。配列変更不可',
  false,
  true,
  74
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 75. リザーブ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WALL-RESERVE',
  'リザーブ',
  'サンゲツ',
  '壁材',
  'RESERVE',
  '高耐久・高品質なビニルクロス',
  true,
  true,
  75
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 76. フェイス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WALL-FAITH',
  'フェイス',
  'サンゲツ',
  '壁材',
  'FAITH',
  'デザイン性の高いプレミアムクロス',
  false,
  true,
  76
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 77. ハピアベイシス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-HAPIA-BASIC',
  'ハピアベイシス',
  '大建工業',
  '建具',
  'HAPIA-BASIC',
  'シンプルで機能的な室内ドア',
  true,
  true,
  77
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 78. ベリティス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-VERITIS',
  'ベリティス',
  'Panasonic',
  '建具',
  'VERITIS-DOOR',
  '高品質な室内ドア',
  false,
  true,
  78
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 79. 木製階段
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-WOOD',
  '木製階段',
  'Gハウス',
  '階段',
  'WOOD-STAIRS',
  '標準的な木製階段',
  true,
  true,
  79
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 80. 鉄骨階段
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-STEEL',
  '鉄骨階段',
  'Gハウス',
  '階段',
  'STEEL-STAIRS',
  'モダンな鉄骨階段',
  false,
  true,
  80
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 81. ベリティス クローゼット
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STORAGE-VERITIS-CLOSET',
  'ベリティス クローゼット',
  'Panasonic',
  '収納',
  'VERITIS-CLOSET',
  '機能的で美しい収納システム',
  false,
  true,
  81
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 82. ウォークインクローゼット
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STORAGE-WALKIN-CLOSET',
  'ウォークインクローゼット',
  'Gハウス',
  '収納',
  'WALKIN-CLOSET',
  'ゆとりのあるウォークイン収納',
  false,
  true,
  82
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 83. ハイクリンボード
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CEILING-HYCLEAN-BOARD',
  'ハイクリンボード',
  '吉野石膏',
  '天井材',
  'HYCLEAN-BOARD',
  '吸ホルムアルデヒド石膏ボード',
  true,
  true,
  83
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 84. 勾配天井工事
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CEILING-SLOPE',
  '勾配天井工事',
  'Gハウス施工',
  '天井材',
  'SLOPE-CEILING',
  '開放感のある勾配天井',
  false,
  true,
  84
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 85. ニッチ L1（W400×H400×D100）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-L1',
  'ニッチ L1（W400×H400×D100）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-L1',
  'Lサイズニッチ（W400×H400×D100）',
  false,
  true,
  85
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 86. ニッチ M1（W300×H300×D100）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NICHE-M1',
  'ニッチ M1（W300×H300×D100）',
  'Gハウス施工',
  'ニッチ',
  'NICHE-M1',
  'Mサイズニッチ（W300×H300×D100）',
  false,
  true,
  86
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 87. 健やかたたみおもて/清流
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TATAMI-SUKOYAKA-SEIRYU',
  '健やかたたみおもて/清流',
  '大建工業',
  '畳',
  'SUKOYAKA-SEIRYU',
  '和室はもちろん、小上がりスペースにもおすすめ。強化和紙製、耐水性・耐久性に優れる',
  false,
  true,
  87
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 88. 小上がりスペース
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KOAGARI-SPACE',
  '小上がりスペース',
  'Gハウス施工',
  '小上がり',
  'KOAGARI-SPACE',
  '和室やリビングに畳スペースを設置。高さH300・H350・H400から選択可能。大きさは3帖・4.5帖・6帖',
  false,
  true,
  88
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 89. 小上がり下引出収納（H350）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KOAGARI-STORAGE-H350',
  '小上がり下引出収納（H350）',
  'Gハウス施工',
  '小上がり',
  'KOAGARI-STORAGE-H350',
  '小上がり下を有効活用する引出収納。収納高さH200程度。※小上がり高さH350用',
  false,
  true,
  89
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 90. 小上がり下引出収納（H400）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KOAGARI-STORAGE-H400',
  '小上がり下引出収納（H400）',
  'Gハウス施工',
  '小上がり',
  'KOAGARI-STORAGE-H400',
  '小上がり下を有効活用する引出収納。収納高さH250程度。※小上がり高さH400用',
  false,
  true,
  90
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 91. お風呂ドア枠
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-BATH-DOOR-FRAME',
  'お風呂ドア枠',
  'Gハウス施工',
  'お風呂',
  'BATH-DOOR-FRAME',
  'お風呂入口のドア枠カラーを選択',
  false,
  true,
  91
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 92. 床下点検口 600×600
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INSPECTION-FLOOR',
  '床下点検口 600×600',
  '城東テクノ',
  '点検口',
  'FLOOR-INSPECTION',
  '床下点検口600×600。間取りによって必要な点検口の数は変わります',
  true,
  true,
  92
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 93. 天井点検口 454×454
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INSPECTION-CEILING',
  '天井点検口 454×454',
  '城東テクノ',
  '点検口',
  'CEILING-INSPECTION',
  '天井点検口454×454。間取りによって必要な点検口の数は変わります',
  true,
  true,
  93
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 94. 床下収納庫 SPF-60S2
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-FLOOR-STORAGE',
  '床下収納庫 SPF-60S2',
  '城東テクノ',
  '収納',
  'SPF-60S2',
  '600×600床下収納庫。深さ約270㎜',
  false,
  true,
  94
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 95. Panasonic 第一種換気
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-VENTILATION-PANASONIC',
  'Panasonic 第一種換気',
  'Panasonic',
  '換気システム',
  'PANASONIC-VENT',
  '熱交換ユニット本体。給気グリル（天井付）、排気グリル（トイレ用天井付）付属。リモコンは本体と同色',
  true,
  true,
  95
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 96. 給気グリル（天井付）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-VENTILATION-SUPPLY-GRILL',
  '給気グリル（天井付）',
  'Panasonic',
  '換気システム',
  'FY-GPP024',
  '天井付給気グリル。第一種換気システム用',
  true,
  true,
  96
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 97. 排気グリル（トイレ用天井付）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-VENTILATION-EXHAUST-GRILL',
  '排気グリル（トイレ用天井付）',
  'Panasonic',
  '換気システム',
  'VB-GMR50PFC',
  'トイレ用天井付排気グリル。第一種換気システム用',
  true,
  true,
  97
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 98. DSDD換気システムへ変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-VENTILATION-DSDD',
  'DSDD換気システムへ変更',
  'DSDD',
  '換気システム',
  'DSDD-VENT',
  'DSDD換気システムへ変更。DSDD排気口（床付）※アイボリーのみ',
  false,
  true,
  98
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 99. 階段踏板/蹴込板 Panasonic
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-PANASONIC',
  '階段踏板/蹴込板 Panasonic',
  'Panasonic',
  '階段',
  'STAIRS-PANA',
  '床材とのコーディネイトができる11柄をラインアップ。※蹴込のみホワイト・ブラックを標準選択可',
  true,
  true,
  99
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 100. 階段踏板/蹴込板 WOODTEC Live Natural
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-WOODTEC',
  '階段踏板/蹴込板 WOODTEC Live Natural',
  'WOODTEC',
  '階段',
  'STAIRS-WOODTEC',
  'アイアン階段採用の場合は集成材塗装品。※シュガーホワイト(アッシュ)は蹴込板なし、ホワイト・ブラックより選択',
  true,
  true,
  100
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 101. 階段踏板 イクタ銘木
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-IKUTA',
  '階段踏板 イクタ銘木',
  'イクタ',
  '階段',
  'STAIRS-IKUTA',
  'イクタ銘木フロアーに合わせた階段踏板',
  false,
  true,
  101
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 102. 階段踏板 イクタ エイジング
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-IKUTA-AGING',
  '階段踏板 イクタ エイジング',
  'イクタ',
  '階段',
  'STAIRS-IKUTA-AGING',
  'イクタ銘木エイジングフロアーに合わせた階段踏板。※塗装品のため近似色塗装、色が合わない場合あり',
  false,
  true,
  102
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 103. 階段 踊り場形状
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-LANDING',
  '階段 踊り場形状',
  'Gハウス施工',
  '階段',
  'STAIRS-LANDING',
  '階段の踊り場形状変更',
  false,
  true,
  103
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 104. 手すり LIXIL スクエアタイプ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-HANDRAIL-LIXIL',
  '手すり LIXIL スクエアタイプ',
  'LIXIL',
  '階段',
  'HANDRAIL-LIXIL',
  '形状：スクエアタイプ。手すり棒とブラケットのセット',
  true,
  true,
  104
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 105. 壁付I型手摺追加 H600
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-HANDRAIL-WALL',
  '壁付I型手摺追加 H600',
  'LIXIL',
  '階段',
  'HANDRAIL-WALL',
  '壁付けI型手摺の追加（H600）',
  false,
  true,
  105
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 106. アイアン階段 スレート
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-IRON',
  'アイアン階段 スレート',
  'スレート',
  '階段',
  'IRON-STAIRS',
  '手摺形状：フラットバー（中桟1本・2本）・片側手摺のみ',
  false,
  true,
  106
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 107. アイアン階段 側板色
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-IRON-SIDE',
  'アイアン階段 側板色',
  'スレート',
  '階段',
  'IRON-STAIRS-SIDE',
  'アイアン階段の側板色選択',
  true,
  true,
  107
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 108. アイアンまわり階段
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-IRON-TURN',
  'アイアンまわり階段',
  'スレート',
  '階段',
  'IRON-STAIRS-TURN',
  'アイアン階段を曲がり階段にする追加オプション。一曲がりごとに追加',
  false,
  true,
  108
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 109. アイアン階段 転落防止型へ変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-IRON-SAFETY',
  'アイアン階段 転落防止型へ変更',
  'スレート',
  '階段',
  'IRON-STAIRS-SAFETY',
  '手すり形状を転落防止型へ変更',
  false,
  true,
  109
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 110. アイアン階段 両側手摺
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-IRON-DOUBLE',
  'アイアン階段 両側手摺',
  'スレート',
  '階段',
  'IRON-STAIRS-DOUBLE',
  '片側手摺から両側手摺への変更',
  false,
  true,
  110
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 111. ホール アイアン手すり
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-HALL-IRON-HANDRAIL',
  'ホール アイアン手すり',
  'Gハウス施工',
  '階段',
  'HALL-IRON-HANDRAIL',
  '手摺形状：フラットバー 上桟+中桟2本',
  false,
  true,
  111
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 112. カーペット階段
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-STAIRS-CARPET',
  'カーペット階段',
  'Gハウス施工',
  '階段',
  'CARPET-STAIRS',
  '1~2階分ごとにオプション。※ひな壇階段・アイアン階段では使用不可。1～2階と2～3階で採用の場合はオプション×2',
  false,
  true,
  112
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 113. 階段回り 腰壁笠木
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WALL-STAIR-KASAGI',
  '階段回り 腰壁笠木',
  'Panasonic',
  '壁',
  'STAIR-KASAGI',
  '標準高さFL+1100。階段部分斜め仕上がりとする',
  true,
  true,
  113
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 114. 薄見付窓枠TS型
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WALL-WINDOW-FRAME',
  '薄見付窓枠TS型',
  'Panasonic',
  '壁',
  'WINDOW-FRAME-TS',
  '見付6mmのスマートな窓台。※1色のみ採用可（2色以上採用不可）',
  true,
  true,
  114
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 115. クッション巾木スマート/H30
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WALL-BASEBOARD',
  'クッション巾木スマート/H30',
  'Panasonic',
  '壁',
  'BASEBOARD-H30',
  '高さ3cm控え目な巾木。※1色のみ採用可（2色以上採用不可）',
  true,
  true,
  115
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 116. 腰壁
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WALL-KOSHIKABE',
  '腰壁',
  'Gハウス施工',
  '壁',
  'KOSHIKABE',
  'FL+1000の腰壁。※1m以下は¥15,000',
  false,
  true,
  116
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 117. 垂壁
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WALL-TAREKABE',
  '垂壁',
  'Gハウス施工',
  '壁',
  'TAREKABE',
  '垂壁長さH200またはH400を選択',
  false,
  true,
  117
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 118. アーチ垂壁
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WALL-ARCH-TAREKABE',
  'アーチ垂壁',
  'Gハウス施工',
  '壁',
  'ARCH-TAREKABE',
  'アーチ型の垂壁。幅910mm',
  false,
  true,
  118
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 119. Panasonic VERITIS 開き戸 ハイドアH2400
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-VERITIS-STANDARD',
  'Panasonic VERITIS 開き戸 ハイドアH2400',
  'Panasonic',
  '室内ドア',
  'VERITIS-DOOR',
  'スタンダードレーベル/開き戸。PA/TAデザイン。各居室・トイレ・脱衣室・ランドリーのみ標準。2枚まで標準で片引き戸に変更可能',
  true,
  true,
  119
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 120. Panasonic VERITIS ペイントカラー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-VERITIS-PAINT',
  'Panasonic VERITIS ペイントカラー',
  'Panasonic',
  '室内ドア',
  'VERITIS-PAINT',
  'ペイントカラーへの変更差額（扉1枚W900まで）',
  false,
  true,
  120
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 121. Panasonic VERITIS ソリッドカラー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-VERITIS-SOLID',
  'Panasonic VERITIS ソリッドカラー',
  'Panasonic',
  '室内ドア',
  'VERITIS-SOLID',
  'ソリッドカラーへの変更差額（扉1枚W900まで）',
  false,
  true,
  121
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 122. 取手・ストッパーカラー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-HANDLE',
  '取手・ストッパーカラー',
  'Panasonic',
  '室内ドア',
  'DOOR-HANDLE',
  'ハンドル(A1型)/角型引手(C1型)。床付ストッパーはハンドルカラーと同じ',
  true,
  true,
  122
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 123. 開き戸追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-ADD-SWING',
  '開き戸追加',
  'Panasonic',
  '室内ドア',
  'DOOR-ADD-SWING',
  'リビングドア・書斎・洗面室・収納等の建具追加',
  false,
  true,
  123
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 124. 標準開戸から片引戸へ変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-CHANGE-SLIDING',
  '標準開戸から片引戸へ変更',
  'Panasonic',
  '室内ドア',
  'DOOR-CHANGE-SLIDE',
  '標準開戸から片引戸への変更差額。上吊りタイプ、下方レール無',
  false,
  true,
  124
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 125. 表示錠付きに変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-ADD-LOCK',
  '表示錠付きに変更',
  'Panasonic',
  '室内ドア',
  'DOOR-ADD-LOCK',
  '表示錠付きに変更差額。※トイレ、脱衣室の扉には標準で表示錠が付属',
  false,
  true,
  125
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 126. 引戸追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-ADD-SLIDING',
  '引戸追加',
  'Panasonic',
  '室内ドア',
  'DOOR-ADD-SLIDING',
  '引戸の追加。片引戸は3枚目からオプション',
  false,
  true,
  126
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 127. 収納用建具 折れ戸 PHデザイン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-STORAGE-FOLD',
  '収納用建具 折れ戸 PHデザイン',
  'Panasonic',
  '室内ドア',
  'STORAGE-FOLD',
  '折れ戸/壁芯々W910まで（H2400）。PHデザイン取手レス',
  false,
  true,
  127
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 128. 収納用建具 2枚引き違い戸 PAデザイン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-STORAGE-SLIDING2',
  '収納用建具 2枚引き違い戸 PAデザイン',
  'Panasonic',
  '室内ドア',
  'STORAGE-SLIDE2',
  '2枚引き違い戸/壁芯々W1820まで（H2400）',
  false,
  true,
  128
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 129. 収納建具 鏡追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-STORAGE-MIRROR',
  '収納建具 鏡追加',
  'Panasonic',
  '室内ドア',
  'STORAGE-MIRROR',
  '折れ戸のみ対応可',
  false,
  true,
  129
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 130. 建具デザイン変更（ガラス/アクリル入り）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-DESIGN-GLASS',
  '建具デザイン変更（ガラス/アクリル入り）',
  'Panasonic',
  '室内ドア',
  'DOOR-DESIGN-GLASS',
  'WB/WC/LD/MC/LBデザイン、ペットドア。※ガラスの変更は対応不可',
  false,
  true,
  130
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 131. 建具デザイン変更 HCデザイン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-DESIGN-HC',
  '建具デザイン変更 HCデザイン',
  'Panasonic',
  '室内ドア',
  'DOOR-DESIGN-HC',
  '引戸のみ対応。透明orフロスト長熱処理ガラス。引戸変更費用含む',
  false,
  true,
  131
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 132. 建具デザイン変更 HBデザイン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOOR-DESIGN-HB',
  '建具デザイン変更 HBデザイン',
  'Panasonic',
  '室内ドア',
  'DOOR-DESIGN-HB',
  '引戸のみ対応。透明orフロスト長熱処理ガラス。引戸変更費用含む',
  false,
  true,
  132
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 133. 室内窓 Aパターン 標準ガラス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WINDOW-A-STANDARD',
  '室内窓 Aパターン 標準ガラス',
  'Panasonic',
  '室内窓',
  'INT-WINDOW-A-STD',
  '優しい光を取り込み開放的に空間を仕切れる。A-1～A-4形状。透明熱処理ガラス',
  false,
  true,
  133
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 134. 室内窓 Aパターン オプションガラス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WINDOW-A-OPTION',
  '室内窓 Aパターン オプションガラス',
  'Panasonic',
  '室内窓',
  'INT-WINDOW-A-OPT',
  'カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス',
  false,
  true,
  134
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 135. 室内窓 Bパターン 標準ガラス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WINDOW-B-STANDARD',
  '室内窓 Bパターン 標準ガラス',
  'Panasonic',
  '室内窓',
  'INT-WINDOW-B-STD',
  'B-1～B-5形状。透明熱処理ガラス',
  false,
  true,
  135
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 136. 室内窓 Bパターン オプションガラス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WINDOW-B-OPTION',
  '室内窓 Bパターン オプションガラス',
  'Panasonic',
  '室内窓',
  'INT-WINDOW-B-OPT',
  'カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス',
  false,
  true,
  136
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 137. 室内窓 Cパターン 標準ガラス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WINDOW-C-STANDARD',
  '室内窓 Cパターン 標準ガラス',
  'Panasonic',
  '室内窓',
  'INT-WINDOW-C-STD',
  'C-1～C-3形状。透明熱処理ガラス',
  false,
  true,
  137
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 138. 室内窓 Cパターン オプションガラス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WINDOW-C-OPTION',
  '室内窓 Cパターン オプションガラス',
  'Panasonic',
  '室内窓',
  'INT-WINDOW-C-OPT',
  'カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス',
  false,
  true,
  138
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 139. 室内窓 突き出し窓に変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-WINDOW-AWNING',
  '室内窓 突き出し窓に変更',
  'Panasonic',
  '室内窓',
  'INT-WINDOW-AWNING',
  'FIX窓から突き出し窓への変更。例：B-5の場合 ¥15,000×2枚',
  false,
  true,
  139
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 140. THE WALL オーク（ツキ板）75mmピッチ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-PANEL-THEWALL-OAK75',
  'THE WALL オーク（ツキ板）75mmピッチ',
  '朝日ウッドテック',
  'アクセントパネル',
  'THEWALL-OAK75',
  'パネルサイズ2,730mm×600mm',
  false,
  true,
  140
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 141. THE WALL ツキ板ランダムピッチ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-PANEL-THEWALL-TSUKIITA',
  'THE WALL ツキ板ランダムピッチ',
  '朝日ウッドテック',
  'アクセントパネル',
  'THEWALL-TSUKIITA',
  'パネルサイズ2,730mm×600mm',
  false,
  true,
  141
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 142. THE WALL アカシア（ツキ板）ランダムピッチ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-PANEL-THEWALL-ACACIA',
  'THE WALL アカシア（ツキ板）ランダムピッチ',
  '朝日ウッドテック',
  'アクセントパネル',
  'THEWALL-ACACIA',
  'パネルサイズ2,730mm×600mm',
  false,
  true,
  142
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 143. THE WALL オーク（挽き板）レリーフ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-PANEL-THEWALL-OAK-RELIEF',
  'THE WALL オーク（挽き板）レリーフ',
  '朝日ウッドテック',
  'アクセントパネル',
  'THEWALL-OAK-RELIEF',
  'パネルサイズ2,730mm×600mm',
  false,
  true,
  143
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 144. THE WALL ブラックチェリー（挽き板）レリーフ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-PANEL-THEWALL-BC-RELIEF',
  'THE WALL ブラックチェリー（挽き板）レリーフ',
  '朝日ウッドテック',
  'アクセントパネル',
  'THEWALL-BC-RELIEF',
  'パネルサイズ2,730mm×600mm',
  false,
  true,
  144
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 145. THE WALL ヘムロック（挽き板）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-PANEL-THEWALL-HEMLOCK',
  'THE WALL ヘムロック（挽き板）',
  '朝日ウッドテック',
  'アクセントパネル',
  'THEWALL-HEMLOCK',
  'パネルサイズ2,730mm×600mm',
  false,
  true,
  145
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 146. セラールパネル
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-PANEL-CERAL',
  'セラールパネル',
  'AICA',
  'アクセントパネル',
  'CERAL-PANEL',
  '900mm×2,400mm。見切り材（2本）+¥8,000UP。※キッチン、メーカーカップボード吊戸～カウンター間は施工不可',
  false,
  true,
  146
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 147. セラール セレント
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-PANEL-CERAL-SERENT',
  'セラール セレント',
  'AICA',
  'アクセントパネル',
  'CERAL-SERENT',
  '900mm×2,400mm。見切り材（2本）+¥14,000UP。※キッチン、メーカーカップボード吊戸～カウンター間は施工不可',
  false,
  true,
  147
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 148. インテリア格子 W045（W276～465mm）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KOUSHI-W045',
  'インテリア格子 W045（W276～465mm）',
  'LIXIL',
  '格子',
  'KOUSHI-W045',
  '高さH895～2,495mmから選択可能。※腰壁を設置する場合は別途費用',
  false,
  true,
  148
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 149. インテリア格子 W085（W466～843mm）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KOUSHI-W085',
  'インテリア格子 W085（W466～843mm）',
  'LIXIL',
  '格子',
  'KOUSHI-W085',
  '高さH895～2,495mmから選択可能。※腰壁を設置する場合は別途費用',
  false,
  true,
  149
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 150. インテリア格子 W12（W843～1,221mm）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KOUSHI-W12',
  'インテリア格子 W12（W843～1,221mm）',
  'LIXIL',
  '格子',
  'KOUSHI-W12',
  '高さH895～2,495mmから選択可能。※腰壁を設置する場合は別途費用',
  false,
  true,
  150
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 151. インテリア格子 W16（W1,221～2,495mm）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KOUSHI-W16',
  'インテリア格子 W16（W1,221～2,495mm）',
  'LIXIL',
  '格子',
  'KOUSHI-W16',
  '高さH895～2,495mmから選択可能。※腰壁を設置する場合は別途費用',
  false,
  true,
  151
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 152. スカンジナビアストン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-SCANDINAVIA',
  'スカンジナビアストン',
  '名古屋モザイク',
  'アクセントタイル',
  'CHY-U20',
  '598×298×10mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  152
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 153. バイオフィリック
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-BIOPHILIC',
  'バイオフィリック',
  '名古屋モザイク',
  'アクセントタイル',
  'PST-U97',
  '596.5×297×8.5mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  153
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 154. セメンティング
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-CEMENTING',
  'セメンティング',
  '名古屋モザイク',
  'アクセントタイル',
  'ORG-U78',
  '598×298×9mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  154
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 155. モデネーゼ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-MODENESE',
  'モデネーゼ',
  '名古屋モザイク',
  'アクセントタイル',
  'XCV-U32',
  '598×298×10mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  155
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 156. ラヴィータ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-LAVITA',
  'ラヴィータ',
  '名古屋モザイク',
  'アクセントタイル',
  'MSY-U91',
  '598×298×8mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  156
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 157. ファータ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-FATA',
  'ファータ',
  '名古屋モザイク',
  'アクセントタイル',
  'FAT-01B',
  '300×300×6mm/1シート。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  157
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 158. タイル工事費用一式
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-CONSTRUCTION',
  'タイル工事費用一式',
  'Gハウス施工',
  'アクセントタイル',
  'TILE-CONST',
  'タイル施工に必要な工事費用。6㎡以下の場合は+¥50,000',
  false,
  true,
  158
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 159. エキピズム
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-EKIPIZM',
  'エキピズム',
  '名古屋モザイク工業',
  'アクセントタイル',
  'EKP-F9910',
  '200×65角凸面。立体感のある凸面タイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  159
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 160. マットアンドモア
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-MATTANDMORE',
  'マットアンドモア',
  '名古屋モザイク工業',
  'アクセントタイル',
  'FRE-Q3202',
  '750×250角平。大判でスタイリッシュな質感。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  160
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 161. WIG-WAG
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-WIGWAG',
  'WIG-WAG',
  '平田タイル',
  'アクセントタイル',
  'WIG-W',
  '75×150×10mm。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  161
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 162. パレッタ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-PALETTA',
  'パレッタ',
  '平田タイル',
  'アクセントタイル',
  'PL-800-F',
  '77×153×7mm。シンプルな白タイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  162
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 163. マーブルモザイク
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-MARBLEMOSAIC',
  'マーブルモザイク',
  '平田タイル',
  'アクセントタイル',
  'MBM-BCMIX',
  '297.5×304×10mm/1シート。天然大理石モザイク。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  163
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 164. Britz
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-BRITZ',
  'Britz',
  '平田タイル',
  'アクセントタイル',
  'HB-101',
  '300×300×6mm/1シート。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  164
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 165. 10Thirty
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-10THIRTY',
  '10Thirty',
  '平田タイル',
  'アクセントタイル',
  '13110',
  '98×298×8mm。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  165
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 166. タイル目地色
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-GROUT',
  'タイル目地色',
  '各メーカー',
  'アクセントタイル',
  'SS-11K',
  'タイル施工時の目地色選択',
  true,
  true,
  166
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 167. レシピ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-RECIPE',
  'レシピ',
  '平田タイル',
  'アクセントタイル',
  'RCP-B',
  '50×200×8mm。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  167
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 168. 釉かげ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-YUKAGE',
  '釉かげ',
  'LIXIL',
  'アクセントタイル',
  'DTL-40B/YGE-1',
  '40×227×6mm。ボーダー・レリーフBタイプ選択可。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  168
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 169. シャインリーフ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-SHINELEAF',
  'シャインリーフ',
  'LIXIL',
  'アクセントタイル',
  'DTL-R/SHL-1',
  '309×295×6.3mm/1シート。リーフ柄のモザイクタイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  169
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 170. INNOCENT MARBLE-イノセントマーブル
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-INNOCENTMARBLE',
  'INNOCENT MARBLE-イノセントマーブル',
  'LIXIL',
  'アクセントタイル',
  'DTL-1230P1/NIC-1',
  '288×294mm/1シート。天然大理石調モザイクタイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  170
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 171. GRAVEL GLASS-グラベルガラス
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TILE-GRAVELGLASS',
  'GRAVEL GLASS-グラベルガラス',
  'LIXIL',
  'アクセントタイル',
  'DTL-R/GVL-1',
  '292×301mm/1シート。ガラス質モザイクタイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  171
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 172. エコカラット グランクォーツ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ECOCARAT-GRANQUARTZ',
  'エコカラット グランクォーツ',
  'LIXIL',
  'アクセントタイル',
  'ECP-630/GRQ1',
  '606×303mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  172
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 173. エコカラット ラフセメント
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ECOCARAT-ROUGHCEMENT',
  'エコカラット ラフセメント',
  'LIXIL',
  'アクセントタイル',
  'ECP-615/RGC1',
  '606×151×7mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  173
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 174. エコカラット ヴァルスロック
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ECOCARAT-VALSROCK',
  'エコカラット ヴァルスロック',
  'LIXIL',
  'アクセントタイル',
  'ECP-315/VSR1N',
  '303×151mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  174
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 175. エコカラット ストーングレース
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ECOCARAT-STONEGRACE',
  'エコカラット ストーングレース',
  'LIXIL',
  'アクセントタイル',
  'ECP-630/STG1N',
  '606×303mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  175
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 176. エコカラット ラフクォーツ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ECOCARAT-ROUGHQUARTZ',
  'エコカラット ラフクォーツ',
  'LIXIL',
  'アクセントタイル',
  'ECP-375/RTZ1N',
  '303×75mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
  false,
  true,
  176
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 177. インテリアカウンター1（ちょい置きスペース）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-SMALL',
  'インテリアカウンター1（ちょい置きスペース）',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-1',
  '耐水集成タイプ・厚み24mm。トイレなど、ちょい置きスペースに。受け桟のみ（両側壁の場合のみ）',
  false,
  true,
  177
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 178. インテリアカウンター2 奥行100～200mm W～1000mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-SHELF-SMALL-W1000',
  'インテリアカウンター2 奥行100～200mm W～1000mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2A-W1000',
  '耐水集成タイプ・厚み24mm。アーチアングル3個使用。奥行150～300mmに対応。角はR加工なし',
  false,
  true,
  178
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 179. インテリアカウンター2 奥行100～200mm W1001～1800mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-SHELF-SMALL-W1800',
  'インテリアカウンター2 奥行100～200mm W1001～1800mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2A-W1800',
  '耐水集成タイプ・厚み24mm。アーチアングル4個使用。奥行150～300mmに対応。角はR加工なし',
  false,
  true,
  179
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 180. インテリアカウンター2 奥行100～200mm W1801～2800mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-SHELF-SMALL-W2800',
  'インテリアカウンター2 奥行100～200mm W1801～2800mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2A-W2800',
  '耐水集成タイプ・厚み24mm。アーチアングル6個使用。奥行150～300mmに対応。角はR加工なし',
  false,
  true,
  180
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 181. インテリアカウンター2 奥行100～200mm W2801～4000mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-SHELF-SMALL-W4000',
  'インテリアカウンター2 奥行100～200mm W2801～4000mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2A-W4000',
  '耐水集成タイプ・厚み24mm。アーチアングル9個使用。奥行150～300mmに対応。角はR加工なし',
  false,
  true,
  181
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 182. インテリアカウンター2 奥行201～450mm W～1000mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-STUDY-W1000',
  'インテリアカウンター2 奥行201～450mm W～1000mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2B-W1000',
  '耐水集成タイプ・厚み24mm。ブラケット3個使用。角はR加工なし',
  false,
  true,
  182
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 183. インテリアカウンター2 奥行201～450mm W1001～1800mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-STUDY-W1800',
  'インテリアカウンター2 奥行201～450mm W1001～1800mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2B-W1800',
  '耐水集成タイプ・厚み24mm。ブラケット4個使用。角はR加工なし',
  false,
  true,
  183
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 184. インテリアカウンター2 奥行201～450mm W1801～2800mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-STUDY-W2800',
  'インテリアカウンター2 奥行201～450mm W1801～2800mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2B-W2800',
  '耐水集成タイプ・厚み24mm。ブラケット6個使用。角はR加工なし',
  false,
  true,
  184
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 185. インテリアカウンター2 奥行201～450mm W2801～4000mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-STUDY-W4000',
  'インテリアカウンター2 奥行201～450mm W2801～4000mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2B-W4000',
  '耐水集成タイプ・厚み24mm。ブラケット9個使用。角はR加工なし',
  false,
  true,
  185
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 186. インテリアカウンター2 奥行451～600mm W～1000mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-WORK-W1000',
  'インテリアカウンター2 奥行451～600mm W～1000mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2C-W1000',
  '耐水集成タイプ・厚み24mm。ブラケット3個使用。角はR加工なし',
  false,
  true,
  186
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 187. インテリアカウンター2 奥行451～600mm W1001～1800mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-WORK-W1800',
  'インテリアカウンター2 奥行451～600mm W1001～1800mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2C-W1800',
  '耐水集成タイプ・厚み24mm。ブラケット4個使用。角はR加工なし',
  false,
  true,
  187
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 188. インテリアカウンター2 奥行451～600mm W1801～2800mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-WORK-W2800',
  'インテリアカウンター2 奥行451～600mm W1801～2800mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2C-W2800',
  '耐水集成タイプ・厚み24mm。ブラケット6個使用。角はR加工なし',
  false,
  true,
  188
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 189. インテリアカウンター2 奥行451～600mm W2801～4000mm
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-WORK-W4000',
  'インテリアカウンター2 奥行451～600mm W2801～4000mm',
  'Panasonic',
  'インテリアカウンター',
  'INT-COUNTER-2C-W4000',
  '耐水集成タイプ・厚み24mm。ブラケット9個使用。角はR加工なし',
  false,
  true,
  189
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 190. カウンター面材カラー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-FACECOLOR',
  'カウンター面材カラー',
  'Panasonic',
  'インテリアカウンター',
  'COUNTER-FACE',
  'インテリアカウンター用面材カラー選択',
  true,
  true,
  190
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 191. カウンターブラケットカラー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-BRACKET',
  'カウンターブラケットカラー',
  'Panasonic',
  'インテリアカウンター',
  'COUNTER-BRACKET',
  'インテリアカウンター用ブラケットカラー選択',
  true,
  true,
  191
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 192. 配線用キャップ穴加工
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-COUNTER-CABLEHOLE',
  '配線用キャップ穴加工',
  'Panasonic',
  'インテリアカウンター',
  'CABLE-HOLE',
  'カウンターへの配線用穴加工。φ60mmキャップ付き',
  false,
  true,
  192
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 193. 枕棚+PH W～910mm（各居室2カ所目から）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MAKURADANA-PH-W910',
  '枕棚+PH W～910mm（各居室2カ所目から）',
  'Gハウス施工',
  '収納棚',
  'SHELF-A-W910',
  '枕棚+パイプハンガー。FL+1800。枕棚ホワイト、パイプシルバー。W～910mm（壁芯々）。※WIC、納戸は含みません。各寝室1カ所は標準',
  false,
  true,
  193
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 194. 枕棚+PH W910～1820mm（各居室2カ所目から）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MAKURADANA-PH-W1820',
  '枕棚+PH W910～1820mm（各居室2カ所目から）',
  'Gハウス施工',
  '収納棚',
  'SHELF-A-W1820',
  '枕棚+パイプハンガー。FL+1800。枕棚ホワイト、パイプシルバー。W910～1820mm（壁芯々）。※WIC、納戸は含みません。各寝室1カ所は標準',
  false,
  true,
  194
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 195. 枕棚+PH W1820～2730mm（各居室2カ所目から）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MAKURADANA-PH-W2730',
  '枕棚+PH W1820～2730mm（各居室2カ所目から）',
  'Gハウス施工',
  '収納棚',
  'SHELF-A-W2730',
  '枕棚+パイプハンガー。FL+1800。枕棚ホワイト、パイプシルバー。W1820～2730mm（壁芯々）。※WIC、納戸は含みません。各寝室1カ所は標準',
  false,
  true,
  195
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 196. 枕棚のみ W～910mm（D450）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MAKURADANA-ONLY-W910',
  '枕棚のみ W～910mm（D450）',
  'Gハウス施工',
  '収納棚',
  'SHELF-B1-W910',
  '枕棚のみ D450mm。FL+1800。ホワイトのみ。W～910mm（壁芯々）',
  false,
  true,
  196
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 197. 枕棚のみ W910～1820mm（D450）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MAKURADANA-ONLY-W1820',
  '枕棚のみ W910～1820mm（D450）',
  'Gハウス施工',
  '収納棚',
  'SHELF-B1-W1820',
  '枕棚のみ D450mm。FL+1800。ホワイトのみ。W910～1820mm（壁芯々）',
  false,
  true,
  197
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 198. 枕棚のみ W1820～2730mm（D450）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MAKURADANA-ONLY-W2730',
  '枕棚のみ W1820～2730mm（D450）',
  'Gハウス施工',
  '収納棚',
  'SHELF-B1-W2730',
  '枕棚のみ D450mm。FL+1800。ホワイトのみ。W1820～2730mm（壁芯々）',
  false,
  true,
  198
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 199. 枕棚+中段 W～910mm（D840）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MAKURADANA-CHUDAN-W910',
  '枕棚+中段 W～910mm（D840）',
  'Gハウス施工',
  '収納棚',
  'SHELF-B2-W910',
  '枕棚+中段 D840mm。FL+800。ホワイトのみ。W～910mm（壁芯々）',
  false,
  true,
  199
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 200. 枕棚+中段 W910～1820mm（D840）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MAKURADANA-CHUDAN-W1820',
  '枕棚+中段 W910～1820mm（D840）',
  'Gハウス施工',
  '収納棚',
  'SHELF-B2-W1820',
  '枕棚+中段 D840mm。FL+800。ホワイトのみ。W910～1820mm（壁芯々）',
  false,
  true,
  200
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 201. 枕棚+中段 W1820～2730mm（D840）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MAKURADANA-CHUDAN-W2730',
  '枕棚+中段 W1820～2730mm（D840）',
  'Gハウス施工',
  '収納棚',
  'SHELF-B2-W2730',
  '枕棚+中段 D840mm。FL+800。ホワイトのみ。W1820～2730mm（壁芯々）',
  false,
  true,
  201
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 202. 中段のみ W～910mm（D840）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-CHUDAN-ONLY-W910',
  '中段のみ W～910mm（D840）',
  'Gハウス施工',
  '収納棚',
  'SHELF-B3-W910',
  '中段のみ D840mm。ホワイトのみ。W～910mm（壁芯々）',
  false,
  true,
  202
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 203. 中段のみ W910～1820mm（D840）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-CHUDAN-ONLY-W1820',
  '中段のみ W910～1820mm（D840）',
  'Gハウス施工',
  '収納棚',
  'SHELF-B3-W1820',
  '中段のみ D840mm。ホワイトのみ。W910～1820mm（壁芯々）',
  false,
  true,
  203
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 204. 中段のみ W1820～2730mm（D840）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-CHUDAN-ONLY-W2730',
  '中段のみ W1820～2730mm（D840）',
  'Gハウス施工',
  '収納棚',
  'SHELF-B3-W2730',
  '中段のみ D840mm。ホワイトのみ。W1820～2730mm（壁芯々）',
  false,
  true,
  204
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 205. 可動棚C D300×2枚（両壁収まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-C300-2',
  '可動棚C D300×2枚（両壁収まり）',
  'Gハウス施工',
  '収納棚',
  'C300-2',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  205
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 206. 可動棚C D300×4枚（両壁収まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-C300-4',
  '可動棚C D300×4枚（両壁収まり）',
  'Gハウス施工',
  '収納棚',
  'C300-4',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  206
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 207. 可動棚C D300×6枚（両壁収まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-C300-6',
  '可動棚C D300×6枚（両壁収まり）',
  'Gハウス施工',
  '収納棚',
  'C300-6',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  207
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 208. 可動棚C D450×2枚（両壁収まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-C450-2',
  '可動棚C D450×2枚（両壁収まり）',
  'Gハウス施工',
  '収納棚',
  'C450-2',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  208
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 209. 可動棚C D450×4枚（両壁収まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-C450-4',
  '可動棚C D450×4枚（両壁収まり）',
  'Gハウス施工',
  '収納棚',
  'C450-4',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  209
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 210. 可動棚C D450×6枚（両壁収まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-C450-6',
  '可動棚C D450×6枚（両壁収まり）',
  'Gハウス施工',
  '収納棚',
  'C450-6',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  210
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 211. 可動棚D D300×2枚 W～900mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D300-2-W900',
  '可動棚D D300×2枚 W～900mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D300-2-W900',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  211
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 212. 可動棚D D300×2枚 W900～1800mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D300-2-W1800',
  '可動棚D D300×2枚 W900～1800mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D300-2-W1800',
  '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  212
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 213. 可動棚D D300×4枚 W～900mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D300-4-W900',
  '可動棚D D300×4枚 W～900mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D300-4-W900',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  213
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 214. 可動棚D D300×4枚 W900～1800mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D300-4-W1800',
  '可動棚D D300×4枚 W900～1800mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D300-4-W1800',
  '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  214
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 215. 可動棚D D300×6枚 W～900mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D300-6-W900',
  '可動棚D D300×6枚 W～900mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D300-6-W900',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  215
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 216. 可動棚D D300×6枚 W900～1800mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D300-6-W1800',
  '可動棚D D300×6枚 W900～1800mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D300-6-W1800',
  '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  216
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 217. 可動棚D D450×2枚 W～900mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D450-2-W900',
  '可動棚D D450×2枚 W～900mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D450-2-W900',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  217
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 218. 可動棚D D450×2枚 W900～1800mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D450-2-W1800',
  '可動棚D D450×2枚 W900～1800mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D450-2-W1800',
  '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  218
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 219. 可動棚D D450×4枚 W～900mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D450-4-W900',
  '可動棚D D450×4枚 W～900mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D450-4-W900',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  219
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 220. 可動棚D D450×4枚 W900～1800mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D450-4-W1800',
  '可動棚D D450×4枚 W900～1800mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D450-4-W1800',
  '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  220
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 221. 可動棚D D450×6枚 W～900mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D450-6-W900',
  '可動棚D D450×6枚 W～900mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D450-6-W900',
  '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  221
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 222. 可動棚D D450×6枚 W900～1800mm（壁無し納まり）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-MOVABLE-D450-6-W1800',
  '可動棚D D450×6枚 W900～1800mm（壁無し納まり）',
  'Gハウス施工',
  '収納棚',
  'D450-6-W1800',
  '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  222
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 223. ハンガーパイプ2本 棚柱付（可動）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-HANGER-PIPE-2',
  'ハンガーパイプ2本 棚柱付（可動）',
  'Gハウス施工',
  '収納棚',
  'HANGER-2P',
  'W～1000mmまで。棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  223
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 224. ハンガーパイプ1セット追加（可動）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-HANGER-PIPE-ADD',
  'ハンガーパイプ1セット追加（可動）',
  'Gハウス施工',
  '収納棚',
  'HANGER-ADD',
  'W～1000mmまで。棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  224
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 225. ランドリー可動棚（W600）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-LAUNDRY',
  'ランドリー可動棚（W600）',
  'Gハウス施工',
  '収納棚',
  'LAUNDRY-SHELF',
  'D300棚板×1枚、D300パイプ付棚板×1枚。棚柱FL+2100。棚柱ブラケット：ホワイト、パイプ：シルバー。棚板ホワイトのみ',
  false,
  true,
  225
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 226. S1 樹脂製 可動棚
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-RESIN-S1',
  'S1 樹脂製 可動棚',
  'Gハウス施工',
  '収納棚',
  'SHELF-S1',
  '棚板D300×8枚。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー。W756mm',
  false,
  true,
  226
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 227. S2 樹脂製 可動棚
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-RESIN-S2',
  'S2 樹脂製 可動棚',
  'Gハウス施工',
  '収納棚',
  'SHELF-S2',
  '棚板D300×8枚。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー。W1132mm',
  false,
  true,
  227
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 228. S3 樹脂製 可動棚
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHELF-RESIN-S3',
  'S3 樹脂製 可動棚',
  'Gハウス施工',
  '収納棚',
  'SHELF-S3',
  '棚板D300×8枚。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー。W1682mm',
  false,
  true,
  228
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 229. P1 ハンガーパイプ セット①
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-HANGER-PIPE-SET-P1',
  'P1 ハンガーパイプ セット①',
  'Gハウス施工',
  '収納棚',
  'HANGER-P1',
  'ハンガーパイプセット。W～2900mm、H～1200mm。棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  229
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 230. P2 ハンガーパイプ セット②
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-HANGER-PIPE-SET-P2',
  'P2 ハンガーパイプ セット②',
  'Gハウス施工',
  '収納棚',
  'HANGER-P2',
  'ハンガーパイプセット。W～1450mm×2段、H～2000mm。棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  230
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 231. P3 ハンガーパイプ セット③
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-HANGER-PIPE-SET-P3',
  'P3 ハンガーパイプ セット③',
  'Gハウス施工',
  '収納棚',
  'HANGER-P3',
  'ハンガーパイプセット。W～2900mm+1450mm×2段、H～2000mm。棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  231
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 232. P4 ハンガーパイプ セット④
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-HANGER-PIPE-SET-P4',
  'P4 ハンガーパイプ セット④',
  'Gハウス施工',
  '収納棚',
  'HANGER-P4',
  'ハンガーパイプセット。W～2900mm+900mm×2段×2、H～2000mm。棚柱ブラケット・パイプ：シルバー',
  false,
  true,
  232
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 233. PKO ハンガーパイプ（固定）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-HANGER-PIPE-FIXED',
  'PKO ハンガーパイプ（固定）',
  'Gハウス施工',
  '収納棚',
  'HANGER-PKO',
  'W～1000mmまで。固定タイプ。パイプ：シルバー',
  false,
  true,
  233
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 234. コンポリア W800
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHOEBOX-COMPORIA-W800',
  'コンポリア W800',
  'Panasonic',
  '玄関靴箱',
  'COMPORIA-W800',
  'フロートタイプH2070。W800mm。ユニット内部ライトグレー色。斜め棚板で取り出しやすい。カウンターのみ/セパレート/トールプラン選択可。※コの字プラン選択不可',
  false,
  true,
  234
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 235. コンポリア W1200
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHOEBOX-COMPORIA-W1200',
  'コンポリア W1200',
  'Panasonic',
  '玄関靴箱',
  'COMPORIA-W1200',
  'フロートタイプH2070。W1200mm。ユニット内部ライトグレー色。斜め棚板で取り出しやすい。カウンターのみ/セパレート/コの字/トールプラン選択可',
  false,
  true,
  235
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 236. コンポリア W1600
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHOEBOX-COMPORIA-W1600',
  'コンポリア W1600',
  'Panasonic',
  '玄関靴箱',
  'COMPORIA-W1600',
  'フロートタイプH2070。W1600mm。ユニット内部ライトグレー色。斜め棚板で取り出しやすい。カウンターのみ/セパレート/コの字/トールプラン選択可',
  false,
  true,
  236
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 237. コンポリア 扉・カウンターカラー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHOEBOX-COMPORIA-DOORCOLOR',
  'コンポリア 扉・カウンターカラー',
  'Panasonic',
  '玄関靴箱',
  'COMPORIA-COLOR',
  '扉・カウンターカラー選択。ナチュラル/ペイント/ソリッドカラーから選択',
  true,
  true,
  237
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 238. コンポリア 扉デザイン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHOEBOX-COMPORIA-DOORDESIGN',
  'コンポリア 扉デザイン',
  'Panasonic',
  '玄関靴箱',
  'COMPORIA-DESIGN',
  '扉デザイン選択',
  true,
  true,
  238
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 239. コンポリア 取っ手
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHOEBOX-COMPORIA-HANDLE',
  'コンポリア 取っ手',
  'Panasonic',
  '玄関靴箱',
  'COMPORIA-HANDLE',
  '取っ手選択（フラットタイプ・框タイプ用）',
  true,
  true,
  239
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 240. コンポリア ミラー追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHOEBOX-COMPORIA-MIRROR',
  'コンポリア ミラー追加',
  'Panasonic',
  '玄関靴箱',
  'COMPORIA-MIRROR',
  '玄関靴箱にミラーを追加',
  false,
  true,
  240
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 241. コンポリア 集成材カウンターカラー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHOEBOX-COMPORIA-COUNTERCOLOR',
  'コンポリア 集成材カウンターカラー',
  'Panasonic',
  '玄関靴箱',
  'COMPORIA-COUNTER-COLOR',
  '集成材カウンターカラー選択。扉にはお選びいただけません',
  true,
  true,
  241
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 242. コンポリア カウンター仕上げ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SHOEBOX-COMPORIA-COUNTERSTYLE',
  'コンポリア カウンター仕上げ',
  'Panasonic',
  '玄関靴箱',
  'COMPORIA-COUNTER-STYLE',
  'カウンター仕上げ選択。※B型カウンターはロープラン・セパレートプランかつ、両側オープン時のみ選択可能',
  true,
  true,
  242
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 243. 造作トイレ 背面収納スペース（ZS）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TOILET-BACK-SPACE',
  '造作トイレ 背面収納スペース（ZS）',
  'Gハウス施工',
  'トイレ収納',
  'ZS',
  'スペースのみ（棚板は含まれない）。開口部有効寸法260mm以上確保必要。下地施工は別途費用',
  false,
  true,
  243
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 244. 造作トイレ 収納（TZ）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TOILET-STORAGE',
  '造作トイレ 収納（TZ）',
  'Gハウス施工',
  'トイレ収納',
  'TZ',
  'W150×H床～天井迄×D130（有効）。棚板×3枚（固定棚）。ふかし壁費用含む',
  false,
  true,
  244
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 245. 造作トイレ収納 台カラー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TOILET-STORAGE-COLOR',
  '造作トイレ収納 台カラー',
  'Gハウス施工',
  'トイレ収納',
  'TZ-COLOR',
  '造作トイレ収納の台カラー選択',
  true,
  true,
  245
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 246. サニタトイレ収納ボックス Sタイプ（TS）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TOILET-SANITA-BOX',
  'サニタトイレ収納ボックス Sタイプ（TS）',
  'Gハウス施工',
  'トイレ収納',
  'TS',
  'W300×H740×D117.4（有効）。クリアホワイトのみ。棚は可動式',
  false,
  true,
  246
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 247. トイレ上部収納（TR/TK）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-TOILET-UPPER-STORAGE',
  'トイレ上部収納（TR/TK）',
  'Gハウス施工',
  'トイレ収納',
  'TR-TK',
  '～W905迄×H470×D300（有効）。クリアホワイトのみ',
  false,
  true,
  247
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 248. スロップシンク ボウル／水栓／排水Pトラップ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SLOPSINK-SET',
  'スロップシンク ボウル／水栓／排水Pトラップ',
  'TOTO',
  'スロップシンク',
  'SK507-SET',
  'TOTO洗濯用流し（大型）SK507#NW1 + 壁付シングル混合水栓TKS05314J + 壁排水金具TK40P。給排水工事費用別途',
  false,
  true,
  248
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 249. スロップシンク 給排水工事費用
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SLOPSINK-PLUMBING',
  'スロップシンク 給排水工事費用',
  'Gハウス施工',
  'スロップシンク',
  'SLOP-PLUMB',
  'スロップシンク設置に必要な給排水工事',
  false,
  true,
  249
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 250. スロップシンク 笠木カラー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SLOPSINK-KASAGI-COLOR',
  'スロップシンク 笠木カラー',
  'Gハウス施工',
  'スロップシンク',
  'SLOP-KASAGI',
  'スロップシンク腰壁（H1200mm、標準FL+1200）の笠木カラー選択',
  true,
  true,
  250
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 251. 洗濯パン（GB745+排水トラップGB881セット）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LAUNDRY-PAN',
  '洗濯パン（GB745+排水トラップGB881セット）',
  'Panasonic',
  '洗濯パン',
  'GB745-SET',
  '洗濯パンGB745+排水トラップGB881セット。カラー：クールホワイト。外寸740×640×55mm、内寸690×590mm。PP製、耐荷重200kg',
  false,
  true,
  251
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 252. ボウルA（LY-493231）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ENTRANCE-BOWL-A',
  'ボウルA（LY-493231）',
  'KAKUDAI',
  '玄関手洗い',
  'LY-493231',
  'H130mm。間取りにより採用可否は異なります',
  false,
  true,
  252
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 253. ボウルB（LY-493232）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ENTRANCE-BOWL-B',
  'ボウルB（LY-493232）',
  'KAKUDAI',
  '玄関手洗い',
  'LY-493232',
  'H144mm。間取りにより採用可否は異なります',
  false,
  true,
  253
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 254. ボウルC（LY-493233）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ENTRANCE-BOWL-C',
  'ボウルC（LY-493233）',
  'KAKUDAI',
  '玄関手洗い',
  'LY-493233',
  'H144mm。間取りにより採用可否は異なります',
  false,
  true,
  254
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 255. 玄関手洗い 水栓
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ENTRANCE-FAUCET',
  '玄関手洗い 水栓',
  'KAKUDAI',
  '玄関手洗い',
  '193-001',
  '混合水栓。壁付けの場合ふかし壁施工費含む（W750迄 H1100）',
  false,
  true,
  255
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 256. 玄関手洗い 排水トラップ
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ENTRANCE-TRAP',
  '玄関手洗い 排水トラップ',
  'KAKUDAI',
  '玄関手洗い',
  '433-310-32',
  '排水トラップ',
  false,
  true,
  256
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 257. 耐水集成 インテリアカウンター
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ENTRANCE-COUNTER',
  '耐水集成 インテリアカウンター',
  'Panasonic',
  '玄関手洗い',
  'ENT-COUNTER',
  'D500/W1,000迄。壁付けの場合笠木材（南海プライウッド）¥6,000/枚別途',
  false,
  true,
  257
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 258. 玄関手洗い カウンターブラケット
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ENTRANCE-BRACKET',
  '玄関手洗い カウンターブラケット',
  'Panasonic',
  '玄関手洗い',
  'ENT-BRACKET',
  'カウンター用ブラケットカラー選択',
  true,
  true,
  258
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 259. 玄関手洗い 笠木材（南海プライウッド）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ENTRANCE-KASAGI',
  '玄関手洗い 笠木材（南海プライウッド）',
  '南海プライウッド',
  '玄関手洗い',
  'KASAGI',
  '壁付け水栓の場合に必要',
  false,
  true,
  259
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 260. ステンレスボウル一体型コーナーカウンターセット
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ENTRANCE-CORNER-SET',
  'ステンレスボウル一体型コーナーカウンターセット',
  'KAKUDAI',
  '玄関手洗い',
  '497-028-SET',
  'ボウル+排水トラップ+水栓（単水栓）セット。ステンレスボウル497-028、立水栓721-209、Sトラップ433-315-25他',
  false,
  true,
  260
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 261. ホスクリーン（川口技研）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LAUNDRY-HOSUCREEN',
  'ホスクリーン（川口技研）',
  '川口技研',
  '物干し金物',
  'SPC',
  'シンプルな着脱可能商品。天井金具部分カラー全3色。※2カ所目からオプション',
  false,
  true,
  261
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 262. Kacu（森田アルミ工業）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LAUNDRY-KACU',
  'Kacu（森田アルミ工業）',
  '森田アルミ工業',
  '物干し金物',
  'KACU',
  '高さ：H400・H500・H600。L型W1432、U型W1455、F型W2862、E型W2885。※2カ所目からオプション',
  false,
  true,
  262
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 263. Pid4M（森田アルミ工業）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LAUNDRY-PID4M',
  'Pid4M（森田アルミ工業）',
  '森田アルミ工業',
  '物干し金物',
  'PID4M',
  'ワイヤータイプ物干し。※2カ所目からオプション',
  false,
  true,
  263
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 264. ホスクリーン昇降タイプD（川口技研）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LAUNDRY-HOSUCREEN-LIFT-D',
  'ホスクリーン昇降タイプD（川口技研）',
  '川口技研',
  '物干し金物',
  'UTM',
  '竿に付帯のヒモで楽々操作可能。※洗濯物を干しながらの昇降はできません。※2カ所目からオプション',
  false,
  true,
  264
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 265. ホスクリーン昇降タイプE（川口技研）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LAUNDRY-HOSUCREEN-LIFT-E',
  'ホスクリーン昇降タイプE（川口技研）',
  '川口技研',
  '物干し金物',
  'URM',
  '付属の操作棒ですっきり操作可能。※洗濯物を干しながらの昇降が可能。※2カ所目からオプション',
  false,
  true,
  265
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 266. 乾太くん スタンダードタイプ 6kg
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KANTAKUN-STANDARD',
  '乾太くん スタンダードタイプ 6kg',
  'Rinnai',
  '乾太くん',
  'RDT-STD',
  'H684×W650×D641mm。6kg。上部に配管ダクトが露出。カラー指定不可',
  false,
  true,
  266
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 267. 乾太くん デラックスタイプ 6kg
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KANTAKUN-DELUXE-6',
  '乾太くん デラックスタイプ 6kg',
  'Rinnai',
  '乾太くん',
  'RDT-63',
  '671×W653×D554mm。6kg。上部に配管ダクトが露出。カラー指定不可',
  false,
  true,
  267
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 268. 乾太くん デラックスタイプ 9kg
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KANTAKUN-DELUXE-9',
  '乾太くん デラックスタイプ 9kg',
  'Rinnai',
  '乾太くん',
  'RDT-93',
  '671×W653×D674mm。9kg。上部に配管ダクトが露出。カラー指定不可',
  false,
  true,
  268
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 269. 乾太くん ガス引込工事
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KANTAKUN-GAS',
  '乾太くん ガス引込工事',
  'Gハウス施工',
  '乾太くん',
  'GAS-INSTALL',
  '最低ガス栓3カ所取付必要（引込+キッチンコンロ+ガスコック1カ所など）',
  false,
  true,
  269
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 270. 乾太くん専用架台
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KANTAKUN-STAND',
  '乾太くん専用架台',
  'Rinnai',
  '乾太くん',
  'KANTA-STAND',
  '乾太くん設置用専用架台',
  false,
  true,
  270
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 271. 乾太くん専用収納ユニット
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-KANTAKUN-STORAGE',
  '乾太くん専用収納ユニット',
  'Rinnai',
  '乾太くん',
  'KANTA-STORAGE',
  '乾太くん設置用収納ユニット',
  false,
  true,
  271
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 272. ほたるスイッチ追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SWITCH-HOTARU',
  'ほたるスイッチ追加',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-SW',
  'コスモワイド21 スクエアタイプ/ホワイト ほたるスイッチ追加',
  false,
  true,
  272
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 273. 3路・4路スイッチ追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-SWITCH-3WAY-4WAY',
  '3路・4路スイッチ追加',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-3W4W',
  '2カ所で同じ照明を入切できるスイッチ',
  false,
  true,
  273
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 274. 2口コンセント追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-2PORT',
  '2口コンセント追加',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-2P',
  'コスモワイド21 2口コンセント追加',
  false,
  true,
  274
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 275. 4口コンセント
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-4PORT',
  '4口コンセント',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-4P',
  'コスモワイド21 4口コンセント',
  false,
  true,
  275
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 276. TVコンセント追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-TV',
  'TVコンセント追加',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-TV',
  'TVコンセント追加',
  false,
  true,
  276
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 277. 電話コンセント追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-TEL',
  '電話コンセント追加',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-TEL',
  '電話コンセント追加',
  false,
  true,
  277
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 278. LANコンセント追加（空配管）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-LAN',
  'LANコンセント追加（空配管）',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-LAN',
  'LANコンセント追加（空配管）',
  false,
  true,
  278
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 279. 2口アース付専用コンセント追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-2P-EARTH-DEDICATED',
  '2口アース付専用コンセント追加',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-2PE-D',
  '電子レンジ・食洗機用 2口アース付専用コンセント追加',
  false,
  true,
  279
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 280. 2口アース付コンセント追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-2P-EARTH',
  '2口アース付コンセント追加',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-2PE',
  'トイレ・洗濯機・冷蔵庫用 2口アース付コンセント追加',
  false,
  true,
  280
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 281. エアコン用コンセント（100V）追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-AIRCON-100V',
  'エアコン用コンセント（100V）追加',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-AC100',
  'エアコン用コンセント（100V）追加',
  false,
  true,
  281
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 282. エアコン用コンセント（200V）追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-AIRCON-200V',
  'エアコン用コンセント（200V）追加',
  'Panasonic',
  'スイッチ/コンセント',
  'COSMO-WIDE21-AC200',
  'エアコン用コンセント（200V）追加 ※外壁面に設置不可、内壁がない場合天井付け',
  false,
  true,
  282
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 283. 床用コンセント F型アップコン
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-FLOOR-UPCON',
  '床用コンセント F型アップコン',
  'Panasonic',
  'スイッチ/コンセント',
  'F-UPCON',
  '床用コンセント F型アップコン',
  false,
  true,
  283
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 284. Sプレートコンセント
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-S-PLATE',
  'Sプレートコンセント',
  'Panasonic',
  'スイッチ/コンセント',
  'S-PLATE',
  'Sプレートコンセント（カ所別色変更不可）※外壁側は気密処理困難の為使用不可',
  false,
  true,
  284
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 285. アドバンスシリーズ（箇所別色変更可）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-ADVANCE-BASIC',
  'アドバンスシリーズ（箇所別色変更可）',
  'Panasonic',
  'スイッチ/コンセント',
  'ADVANCE-BASIC',
  'アドバンスシリーズ（箇所別色変更可）※リンクプラス機能はついていません',
  false,
  true,
  285
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 286. アドバンスシリーズ（箇所別色変更可能プラン）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-OUTLET-ADVANCE-PREMIUM',
  'アドバンスシリーズ（箇所別色変更可能プラン）',
  'Panasonic',
  'スイッチ/コンセント',
  'ADVANCE-PREMIUM',
  'アドバンスシリーズ（箇所別色変更可能プラン）',
  false,
  true,
  286
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 287. LAN用空配管
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CONDUIT-LAN',
  'LAN用空配管',
  'Panasonic',
  'スイッチ/コンセント',
  'CONDUIT-LAN',
  'LAN用空配管',
  false,
  true,
  287
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 288. 壁掛けテレビ用空配管
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-CONDUIT-WALLTV',
  '壁掛けテレビ用空配管',
  'Panasonic',
  'スイッチ/コンセント',
  'CONDUIT-WALLTV',
  '壁掛けテレビ用空配管',
  false,
  true,
  288
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 289. 外でもドアホン VL-SVD505KFに変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-SVD505KF-CHANGE',
  '外でもドアホン VL-SVD505KFに変更',
  'Panasonic',
  'インターホン',
  'VL-SVD505KF',
  'スマホで外から来客応対、録画機能、ドアホンから玄関ドアの施解錠可、スマホで玄関ドアの施解錠可',
  false,
  true,
  289
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 290. 外でもドアホン VL-SVD710KFに変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-SVD710KF-CHANGE',
  '外でもドアホン VL-SVD710KFに変更',
  'Panasonic',
  'インターホン',
  'VL-SVD710KF',
  'スマホで外から来客応対、録画機能、あんしん応対、ドアホンから玄関ドアの施解錠可、スマホで玄関ドアの施解錠可',
  false,
  true,
  290
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 291. テレビドアホン VL-SE50KPAに変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-SE50KPA-CHANGE',
  'テレビドアホン VL-SE50KPAに変更',
  'Panasonic',
  'インターホン',
  'VL-SE50KPA',
  '録画機能（SDカード別途必要）、増設モニター追加可能',
  false,
  true,
  291
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 292. どこでもドアホン VL-SVE310KLA 1セット追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-SVE310KLA-ADD',
  'どこでもドアホン VL-SVE310KLA 1セット追加',
  'Panasonic',
  'インターホン',
  'VL-SVE310KLA',
  'どこでもドアホン（玄関子機＋モニター親機）1セット追加',
  false,
  true,
  292
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 293. 外でもドアホン VL-SVD505KF 1セット追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-SVD505KF-ADD',
  '外でもドアホン VL-SVD505KF 1セット追加',
  'Panasonic',
  'インターホン',
  'VL-SVD505KF-ADD',
  '外でもドアホン（玄関子機＋モニター親機）1セット追加',
  false,
  true,
  293
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 294. 外でもドアホン VL-SVD710KF 1セット追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-SVD710KF-ADD',
  '外でもドアホン VL-SVD710KF 1セット追加',
  'Panasonic',
  'インターホン',
  'VL-SVD710KF-ADD',
  '外でもドアホン（玄関子機＋モニター親機）1セット追加',
  false,
  true,
  294
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 295. テレビドアホン VL-SE50KPA 1セット追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-SE50KPA-ADD',
  'テレビドアホン VL-SE50KPA 1セット追加',
  'Panasonic',
  'インターホン',
  'VL-SE50KPA-ADD',
  'テレビドアホン（玄関子機＋モニター親機）1セット追加',
  false,
  true,
  295
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 296. ワイヤレスモニター子機VL-WD623追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-WD623-ADD',
  'ワイヤレスモニター子機VL-WD623追加',
  'Panasonic',
  'インターホン',
  'VL-WD623',
  'ワイヤレスモニター子機（VL-SWE310KLA用）追加',
  false,
  true,
  296
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 297. ワイヤレスモニター子機VL-WD618追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-WD618-ADD',
  'ワイヤレスモニター子機VL-WD618追加',
  'Panasonic',
  'インターホン',
  'VL-WD618',
  'ワイヤレスモニター子機（VL-SWD505KF用）追加',
  false,
  true,
  297
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 298. ワイヤレスモニター子機VL-WD616追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-WD616-ADD',
  'ワイヤレスモニター子機VL-WD616追加',
  'Panasonic',
  'インターホン',
  'VL-WD616',
  'ワイヤレスモニター子機（VL-SWD710KF用）追加',
  false,
  true,
  298
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 299. 増設モニターVL-V632K追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-V632K-ADD',
  '増設モニターVL-V632K追加',
  'Panasonic',
  'インターホン',
  'VL-V632K',
  '増設モニター（VL-SE50KPA用）追加',
  false,
  true,
  299
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 300. 増設モニターVL-VH673K追加
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-INTERCOM-VH673K-ADD',
  '増設モニターVL-VH673K追加',
  'Panasonic',
  'インターホン',
  'VL-VH673K',
  '増設モニター（VL-SVD710KF用）追加',
  false,
  true,
  300
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 301. 三菱電機 霧ヶ峰 Zシリーズ 6畳用100V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-AIRCON-MITSUBISHI-Z-6',
  '三菱電機 霧ヶ峰 Zシリーズ 6畳用100V',
  '三菱電機',
  'エアコン',
  'MSZ-ZXV2225',
  'さらっと除湿冷房（室温の下がらない再熱除湿方式）',
  false,
  true,
  301
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 302. 三菱電機 霧ヶ峰 Zシリーズ 10畳用200V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-AIRCON-MITSUBISHI-Z-10',
  '三菱電機 霧ヶ峰 Zシリーズ 10畳用200V',
  '三菱電機',
  'エアコン',
  'MSZ-ZXV2825S',
  'さらっと除湿冷房（室温の下がらない再熱除湿方式）',
  false,
  true,
  302
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 303. 三菱電機 霧ヶ峰 Zシリーズ 14畳用200V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-AIRCON-MITSUBISHI-Z-14',
  '三菱電機 霧ヶ峰 Zシリーズ 14畳用200V',
  '三菱電機',
  'エアコン',
  'MSZ-ZXV4025S',
  'さらっと除湿冷房（室温の下がらない再熱除湿方式）',
  false,
  true,
  303
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 304. ダイキン GXシリーズ 6畳用100V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-AIRCON-DAIKIN-GX-6',
  'ダイキン GXシリーズ 6畳用100V',
  'ダイキン',
  'エアコン',
  'S224ATGS-W',
  'さらら除湿（ハイブリッド方式）再熱除湿と弱冷房除湿の中間',
  false,
  true,
  304
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 305. ダイキン GXシリーズ 10畳用100V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-AIRCON-DAIKIN-GX-10',
  'ダイキン GXシリーズ 10畳用100V',
  'ダイキン',
  'エアコン',
  'S284ATGS-W',
  'さらら除湿（ハイブリッド方式）再熱除湿と弱冷房除湿の中間',
  false,
  true,
  305
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 306. ダイキン GXシリーズ 14畳用200V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-AIRCON-DAIKIN-GX-14',
  'ダイキン GXシリーズ 14畳用200V',
  'ダイキン',
  'エアコン',
  'S404ATGP-W',
  'さらら除湿（ハイブリッド方式）再熱除湿と弱冷房除湿の中間',
  false,
  true,
  306
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 307. ダイキン Eシリーズ 6畳用100V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-AIRCON-DAIKIN-E-6',
  'ダイキン Eシリーズ 6畳用100V',
  'ダイキン',
  'エアコン',
  'S225ATES-W',
  '9段階セレクトドライ（弱冷房除湿）',
  false,
  true,
  307
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 308. ダイキン Eシリーズ 10畳用100V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-AIRCON-DAIKIN-E-10',
  'ダイキン Eシリーズ 10畳用100V',
  'ダイキン',
  'エアコン',
  'S285ATES-W',
  '9段階セレクトドライ（弱冷房除湿）',
  false,
  true,
  308
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 309. ダイキン Eシリーズ 14畳用200V
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-AIRCON-DAIKIN-E-14',
  'ダイキン Eシリーズ 14畳用200V',
  'ダイキン',
  'エアコン',
  'S405ATEP-W',
  '9段階セレクトドライ（弱冷房除湿）',
  false,
  true,
  309
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 310. ダウンライト施工費（10個まで）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOWNLIGHT-BASE',
  'ダウンライト施工費（10個まで）',
  '-',
  'ダウンライト施工費',
  'DOWNLIGHT-BASE',
  '省令準耐火仕様のため必要な施工。照明器具は別費用。',
  false,
  true,
  310
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 311. ダウンライト施工費（11個目から）
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-DOWNLIGHT-ADDITIONAL',
  'ダウンライト施工費（11個目から）',
  '-',
  'ダウンライト施工費',
  'DOWNLIGHT-ADD',
  '省令準耐火仕様のため必要な施工。照明器具は別費用。',
  false,
  true,
  311
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 312. 洗濯機混合水栓へ変更
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-LAUNDRY-MIXER-FAUCET',
  '洗濯機混合水栓へ変更',
  '-',
  '洗濯機混合水栓',
  'LAUNDRY-MIXER',
  '洗濯機用混合水栓へ変更',
  false,
  true,
  312
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 313. ナノバブル発生装置 BeautyAqua
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-NANOBUBBLE-BEAUTYAQUA',
  'ナノバブル発生装置 BeautyAqua',
  'BeautyAqua',
  'ナノバブル発生装置',
  'BEAUTYAQUA-20A',
  'ナノバブル発生装置 BeautyAqua 20A',
  false,
  true,
  313
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 314. ペーパーホルダー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ACCESSORY-PAPER-HOLDER',
  'ペーパーホルダー',
  '三栄',
  'アクセサリー',
  'W3701',
  'ペーパーホルダー（亜鉛ダイカスト素材）※スロップシンクには付属いたしません',
  true,
  true,
  314
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 315. ペーパーホルダー 2連
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ACCESSORY-PAPER-HOLDER-DOUBLE',
  'ペーパーホルダー 2連',
  '三栄',
  'アクセサリー',
  'W3801',
  'ペーパーホルダー 2連（亜鉛ダイカスト素材）※スロップシンクには付属いたしません',
  true,
  true,
  315
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 316. タオルバー
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ACCESSORY-TOWEL-BAR',
  'タオルバー',
  '三栄',
  'アクセサリー',
  'W5717-365',
  'タオルバー（アイアン）※スロップシンクには付属いたしません',
  true,
  true,
  316
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- 317. タオルリング
INSERT INTO items (
  item_code, name, manufacturer, category_name, model_number, note,
  is_hit, is_active, display_order
) VALUES (
  'INT-ACCESSORY-TOWEL-RING',
  'タオルリング',
  '三栄',
  'アクセサリー',
  'W5707',
  'タオルリング（アイアン）※スロップシンクには付属いたしません',
  true,
  true,
  317
) ON CONFLICT (item_code) DO UPDATE SET
  name = EXCLUDED.name,
  manufacturer = EXCLUDED.manufacturer,
  note = EXCLUDED.note;

-- ========================================
-- カテゴリID紐付け
-- ========================================
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-ghouse-original')
WHERE category_name = 'Gハウスオリジナル' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-flooring')
WHERE category_name = '床材' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-ceiling')
WHERE category_name = '天井' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-indirect-lighting')
WHERE category_name = '間接照明' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-curtain-box')
WHERE category_name = 'カーテンBOX' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-reinforcement')
WHERE category_name = '補強・下地' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-niche')
WHERE category_name = 'ニッチ' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-wall-material')
WHERE category_name = '壁材' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-fitting')
WHERE category_name = '建具' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-stairs')
WHERE category_name = '階段' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-storage')
WHERE category_name = '収納' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-ceiling-material')
WHERE category_name = '天井材' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-tatami')
WHERE category_name = '畳' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-koagari')
WHERE category_name = '小上がり' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-bathroom')
WHERE category_name = 'お風呂' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-inspection-hatch')
WHERE category_name = '点検口' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-ventilation')
WHERE category_name = '換気システム' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-wall')
WHERE category_name = '壁' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-interior-door')
WHERE category_name = '室内ドア' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-interior-window')
WHERE category_name = '室内窓' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-accent-panel')
WHERE category_name = 'アクセントパネル' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-lattice')
WHERE category_name = '格子' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-accent-tile')
WHERE category_name = 'アクセントタイル' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-interior-counter')
WHERE category_name = 'インテリアカウンター' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-storage-shelf')
WHERE category_name = '収納棚' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-shoe-cabinet')
WHERE category_name = '玄関靴箱' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-toilet-storage')
WHERE category_name = 'トイレ収納' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-slop-sink')
WHERE category_name = 'スロップシンク' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-laundry-pan')
WHERE category_name = '洗濯パン' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-entrance-washbasin')
WHERE category_name = '玄関手洗い' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-laundry-hardware')
WHERE category_name = '物干し金物' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-kantatsu-kun')
WHERE category_name = '乾太くん' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-switch-outlet')
WHERE category_name = 'スイッチ/コンセント' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-intercom')
WHERE category_name = 'インターホン' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-aircon')
WHERE category_name = 'エアコン' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-downlight-install')
WHERE category_name = 'ダウンライト施工費' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-washing-machine-faucet')
WHERE category_name = '洗濯機混合水栓' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-nanobubble')
WHERE category_name = 'ナノバブル発生装置' AND category_id IS NULL;
UPDATE items SET category_id = (SELECT id FROM categories WHERE slug = 'interior-accessory')
WHERE category_name = 'アクセサリー' AND category_id IS NULL;

-- ========================================
-- バリエーション登録
-- ========================================
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V1', 'オーク(OK)', '#8B7355', 1
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V2', 'チェリー(CR)', '#A0522D', 2
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V3', 'ウォールナット(WN)', '#5D4037', 3
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V4', 'ダークWN(DW)', '#3E2723', 4
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V5', 'ダストグレー(DU)', '#808080', 5
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V6', 'カブリード(KR)', '#696969', 6
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V7', 'ファインモルタル(FM)', '#A9A9A9', 7
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V8', 'アンジェロプレーン(AP)', '#D2B48C', 8
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V9', 'オフホワイト(OW)', '#FAF0E6', 9
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V10', 'ライトベージュ(LB)', '#F5DEB3', 10
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V11', 'ミディアムベージュ(MB)', '#D2B48C', 11
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V12', 'ダークベージュ(DB)', '#A08060', 12
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V13', 'ミディアムグレー(MG)', '#808080', 13
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V14', 'ダークグレー(DG)', '#505050', 14
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-V15', 'ブラック(BK)', '#1A1A1A', 15
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V1', 'オーク(OK)', '#8B7355', 1
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V2', 'チェリー(CR)', '#A0522D', 2
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V3', 'ウォールナット(WN)', '#5D4037', 3
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V4', 'ダークWN(DW)', '#3E2723', 4
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V5', 'ダストグレー(DU)', '#808080', 5
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V6', 'カブリード(KR)', '#696969', 6
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V7', 'ファインモルタル(FM)', '#A9A9A9', 7
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V8', 'アンジェロプレーン(AP)', '#D2B48C', 8
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V9', 'オフホワイト(OW)', '#FAF0E6', 9
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V10', 'ライトベージュ(LB)', '#F5DEB3', 10
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V11', 'ミディアムベージュ(MB)', '#D2B48C', 11
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V12', 'ダークベージュ(DB)', '#A08060', 12
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V13', 'ミディアムグレー(MG)', '#808080', 13
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V14', 'ダークグレー(DG)', '#505050', 14
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG-V15', 'ブラック(BK)', '#1A1A1A', 15
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V1', 'オーク(OK)', '#8B7355', 1
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V2', 'チェリー(CR)', '#A0522D', 2
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V3', 'ウォールナット(WN)', '#5D4037', 3
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V4', 'ダークWN(DW)', '#3E2723', 4
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V5', 'ダストグレー(DU)', '#808080', 5
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V6', 'カブリード(KR)', '#696969', 6
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V7', 'ファインモルタル(FM)', '#A9A9A9', 7
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V8', 'アンジェロプレーン(AP)', '#D2B48C', 8
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V9', 'オフホワイト(OW)', '#FAF0E6', 9
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V10', 'ライトベージュ(LB)', '#F5DEB3', 10
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V11', 'ミディアムベージュ(MB)', '#D2B48C', 11
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V12', 'ダークベージュ(DB)', '#A08060', 12
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V13', 'ミディアムグレー(MG)', '#808080', 13
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V14', 'ダークグレー(DG)', '#505050', 14
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO-V15', 'ブラック(BK)', '#1A1A1A', 15
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V1', 'オーク(OK)', '#8B7355', 1
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V2', 'チェリー(CR)', '#A0522D', 2
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V3', 'ウォールナット(WN)', '#5D4037', 3
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V4', 'ダークWN(DW)', '#3E2723', 4
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V5', 'ダストグレー(DU)', '#808080', 5
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V6', 'カブリード(KR)', '#696969', 6
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V7', 'ファインモルタル(FM)', '#A9A9A9', 7
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V8', 'アンジェロプレーン(AP)', '#D2B48C', 8
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V9', 'オフホワイト(OW)', '#FAF0E6', 9
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V10', 'ライトベージュ(LB)', '#F5DEB3', 10
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V11', 'ミディアムベージュ(MB)', '#D2B48C', 11
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V12', 'ダークベージュ(DB)', '#A08060', 12
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V13', 'ミディアムグレー(MG)', '#808080', 13
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V14', 'ダークグレー(DG)', '#505050', 14
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA-V15', 'ブラック(BK)', '#1A1A1A', 15
FROM items i WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V1', 'ウォールナット柄', '#5D4037', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V2', 'チェリー柄', '#A0522D', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V3', 'オーク柄', '#C8A882', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V4', 'メープル柄', '#E5C29F', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V5', 'エイジドチーク柄', '#8B6914', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V6', 'エイジドチェスナット柄', '#8B7355', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V7', 'カームチェリー柄', '#CD853F', 7
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V8', 'グレージュヒッコリー柄', '#B8A090', 8
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V9', 'ウォッシュドオーク柄', '#D4C5B9', 9
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V10', 'ホワイトオーク柄', '#F5F5DC', 10
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VERITIS-BASECOAT-V11', 'アイボリーアッシュ柄', '#FFFFF0', 11
FROM items i WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MRX-V1', 'ブラックチェリー', '#8B4513', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MRX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MRX-V2', 'ハードメイプル', '#E5C29F', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MRX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MRX-V3', 'ブラックウォルナット', '#3D2B1F', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MRX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MRX-V4', 'オーク', '#C8A882', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MRX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEISTERS-WOOD-V1', 'ウォールナットクリア', '#5D4037', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEISTERS-WOOD-V2', 'アカシアクリア', '#8B6914', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEISTERS-WOOD-V3', 'バーチラスティッククリア', '#D2B48C', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEISTERS-WOOD-V4', 'バーチクリア', '#DEB887', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEISTERS-WOOD-V5', 'メープルクリア', '#E5C29F', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEISTERS-WOOD-V6', 'アッシュクリア', '#D4C5B9', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V1', 'ブラックチェリー', '#8B4513', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V2', 'ハードメイプル', '#E5C29F', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V3', 'シカモア', '#F5F5DC', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V4', 'ブラックウォルナット', '#3D2B1F', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V5', 'バーチ', '#DEB887', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V6', 'オーク', '#C8A882', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V7', 'アカシア', '#8B6914', 7
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V8', 'ドライメイプル', '#D4C5B9', 8
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V9', 'ドライウォルナット', '#8B7355', 9
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V10', 'ドライオーク', '#B8A090', 10
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V11', 'シュガーホワイト（アッシュ）', '#FFFAF0', 11
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V12', 'ライトグレー（オーク）', '#D3D3D3', 12
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-MSX-V13', 'ミッドグレー（オーク）', '#A9A9A9', 13
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-RUSTIC-V1', 'ウォルナット', '#5D4037', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-RUSTIC-V2', 'ブラックチェリー', '#8B4513', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-RUSTIC-V3', 'イタヤカエデ', '#E5C29F', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-RUSTIC-V4', 'ナラ樫', '#C8A882', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-RUSTIC-V5', 'チーク', '#8B6914', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-RUSTIC-V6', 'アカシア', '#A0522D', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-RUSTIC-V7', 'ハードメープル', '#F5DEB3', 7
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CRUDE-303-V1', 'ピエトラホワイト', '#FAFAFA', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CRUDE-303'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CRUDE-303-V2', 'ピエトラグレー', '#A9A9A9', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CRUDE-303'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CRUDE-303-V3', 'ピエトラブラック', '#2F2F2F', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-CRUDE-303'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CRUDE-303-V4', 'テラゾーホワイト', '#F5F5F5', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-CRUDE-303'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CRUDE-303-V5', 'テラゾーグレー', '#C0C0C0', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-CRUDE-303'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CRUDE-303-V6', 'グランモルタル', '#808080', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-CRUDE-303'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-AGING-V1', 'エイジングナチュラル', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-AGING-V2', 'エイジングホワイト', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-AGING-V3', 'エイジングタイガ', '#8B7355', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-AGING-V4', 'エイジングカフェ', '#8B4513', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MEIBOKU-AGING-V5', 'エイジングビター', '#5D4037', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-MEIBOKU-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VINTAGE-RUSTIC-V1', 'チーク', '#8B6914', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-VINTAGE-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VINTAGE-RUSTIC-V2', 'ウォルナット', '#5D4037', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-VINTAGE-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VINTAGE-RUSTIC-V3', 'ブラックチェリー', '#8B4513', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-VINTAGE-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VINTAGE-RUSTIC-V4', 'カエデ', '#E5C29F', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-VINTAGE-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-VINTAGE-RUSTIC-V5', 'ナラ', '#C8A882', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-VINTAGE-RUSTIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-PREMIUM-V1', 'ブラックチェリー', '#8B4513', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-PREMIUM-V2', 'ハードメイプル', '#E5C29F', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-PREMIUM-V3', 'ブラックウォルナット', '#3D2B1F', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-PREMIUM-V4', 'オークN45°', '#C8A882', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-LIVE-NATURAL-PREMIUM-V5', 'バーチ', '#DEB887', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CHANNEL-UNI-V1', 'オーク', '#C8A882', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CHANNEL-UNI-V2', 'バーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CHANNEL-UNI-V3', 'ウォールナット', '#5D4037', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CHANNEL-UNI-PREMIUM-V1', 'ブラックチェリー', '#8B4513', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CHANNEL-UNI-PREMIUM-V2', 'チーク', '#8B6914', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CHANNEL-HERRINGBONE-V1', '北海道産ナラ節無（上小節含む）', '#C8A882', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CHANNEL-HERRINGBONE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-GENKAN-KAMACHI-STANDARD-V1', 'フローリング色合わせ', '#C8A882', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-FLOOR-TRIM-FLATBAR-V1', 'シルバー', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-FLOOR-TRIM-FLATBAR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-18-V1', 'ゴム ウレタンブラック', '#1A1A1A', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-18'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-18-V2', 'ゴム ウレタンホワイト', '#F5F5F5', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-18'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-28-V1', 'ゴム ウレタンブラック', '#1A1A1A', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-28'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-28-V2', 'ゴム ウレタンホワイト', '#F5F5F5', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-28'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V1', 'CF3738', '#9E9E9E', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V2', 'CF3739', '#BDBDBD', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V3', 'CF3746', '#E0E0E0', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V4', 'CF3747', '#F5F5F5', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V5', 'CF3751', '#D0D0D0', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V6', 'CF3752', '#C8C8C8', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V7', 'CF3761', '#A0A0A0', 7
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V8', 'CF3764', '#B8A090', 8
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V9', 'CF3770', '#8B6914', 9
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V10', 'CF9616', '#4A4A4A', 10
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V11', 'CF9617', '#C8A882', 11
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V12', 'CF9618', '#D2B48C', 12
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V13', 'CF9645', '#B89872', 13
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V14', 'CF9647', '#5A5A5A', 14
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V15', 'CF9649', '#A08060', 15
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V16', 'CF9650', '#3A3A3A', 16
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V17', 'CF9655', '#F0F0F0', 17
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V18', 'CF9664', '#2A2A2A', 18
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V19', 'CF9679', '#E8E0D8', 19
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V20', 'CF9689', '#D08040', 20
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V21', 'CF9690', '#E0A060', 21
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V22', 'CF9691', '#808080', 22
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V23', 'CF9693', '#A09080', 23
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V24', 'CF9694', '#E8E0D0', 24
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-V25', 'CF9696', '#F0E8E0', 25
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V1', 'CF3738', '#9E9E9E', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V2', 'CF3739', '#BDBDBD', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V3', 'CF3746', '#E0E0E0', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V4', 'CF3747', '#F5F5F5', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V5', 'CF3751', '#D0D0D0', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V6', 'CF3752', '#C8C8C8', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V7', 'CF3761', '#A0A0A0', 7
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V8', 'CF3764', '#B8A090', 8
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V9', 'CF3770', '#8B6914', 9
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V10', 'CF9616', '#4A4A4A', 10
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V11', 'CF9617', '#C8A882', 11
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V12', 'CF9618', '#D2B48C', 12
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V13', 'CF9645', '#B89872', 13
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V14', 'CF9647', '#5A5A5A', 14
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V15', 'CF9649', '#A08060', 15
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V16', 'CF9650', '#3A3A3A', 16
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V17', 'CF9655', '#F0F0F0', 17
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V18', 'CF9664', '#2A2A2A', 18
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V19', 'CF9679', '#E8E0D8', 19
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V20', 'CF9689', '#D08040', 20
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V21', 'CF9690', '#E0A060', 21
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V22', 'CF9691', '#808080', 22
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V23', 'CF9693', '#A09080', 23
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V24', 'CF9694', '#E8E0D0', 24
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CF-SHEET-TOLI-OTHER-V25', 'CF9696', '#F0E8E0', 25
FROM items i WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MATIL-E-V1', 'MAE-1140', '#9E9E9E', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-MATIL-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MATIL-E-V2', 'MAE-1142', '#BDBDBD', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-MATIL-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MATIL-E-V3', 'MAE-1143', '#E0E0E0', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-MATIL-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MATIL-E-V4', 'MAE-1109', '#F5F5F5', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-MATIL-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MATIL-E-V5', 'MAE-1206', '#FAFAFA', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-MATIL-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MATIL-E-WET-V1', 'MAE-1146', '#B0BEC5', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-MATIL-E-WET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MATIL-W-V1', 'MAW-1132', '#CFD8DC', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-MATIL-W'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-MATIL-W-V2', 'MAW-1133', '#ECEFF1', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-MATIL-W'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-V1', 'PST4019', '#A0A0A0', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-V2', 'PST4020', '#B0B0B0', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-V3', 'PST4021', '#C0C0C0', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-WET-V1', 'PST4022', '#909090', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-WET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-WET-V2', 'PST4023', '#808080', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-WET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-CONCOTTO-V1', 'PST4001', '#D0C8C0', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-CONCOTTO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-CONCOTTO-V2', 'PST4005', '#C8C0B8', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-CONCOTTO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-CONCOTTO-V3', 'PST4006', '#B8B0A8', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-CONCOTTO'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-CONCRETE-WET-V1', 'PST4032', '#707070', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-CONCRETE-WET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-FRANC-MORTAR-V1', 'PST4034', '#505050', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-FRANC-MORTAR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-FRANC-MORTAR-V2', 'PST4035', '#606060', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-FRANC-MORTAR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-GEOL-STONE-V1', 'PST4093', '#8A8A8A', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-GEOL-STONE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-GEOL-STONE-V2', 'PST4095', '#9A9A9A', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-GEOL-STONE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-CHROME-SLATE-WET-V1', 'PST4122', '#4A4A4A', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-CHROME-SLATE-WET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-CHROME-SLATE-WET-V2', 'PST4123', '#5A5A5A', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-CHROME-SLATE-WET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-FOG-LIME-V1', 'PST4077', '#E0E0E0', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-FOG-LIME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-FOG-LIME-V2', 'PST4080', '#D0D0D0', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-FOG-LIME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-FOG-LIME-V3', 'PST4083', '#C0C0C0', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-FOG-LIME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-FOG-LIME-V4', 'PST4086', '#B0B0B0', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-FOG-LIME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-FOG-LIME-V5', 'PST4089', '#A0A0A0', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-FOG-LIME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-CARRARA-WHITE-V1', 'PST4108', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-CARRARA-WHITE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-RATTAN-V1', 'PWT4309', '#D4B896', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-RATTAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-FRENCH-HERRINGBONE-V1', 'PWT4228', '#C8A882', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-FRENCH-HERRINGBONE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TOLI-FRENCH-HERRINGBONE-V2', 'PWT4229', '#B89872', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TOLI-FRENCH-HERRINGBONE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NTP-V1', 'NTP-70801', '#6B8E9F', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NTP'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NTP-V2', 'NTP-71101', '#E8E8E8', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NTP'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NTP-V3', 'NTP-71102', '#D0D0D0', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NTP'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NTP-V4', 'NTP-71105', '#B8B8B8', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NTP'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NTP-V5', 'NTP-71114', '#404050', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NTP'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NTH-V1', 'NTH-84009', '#3A5A7A', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NTH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NTH-V2', 'NTH-84010', '#4A6A8A', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NTH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NTH-V3', 'NTH-824', '#8A7A6A', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NTH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NTH-V4', 'NTH-841', '#5A5A6A', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NTH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT31-V1', 'NT-31104', '#2A3A4A', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT31'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT31-V2', 'NT-31402', '#3A3A3A', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT31'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT31-V3', 'NT-31403', '#4A4A4A', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT31'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT31-V4', 'NT-31505', '#5A5A5A', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT31'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT31-V5', 'NT-31507', '#6A6A6A', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT31'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT31-V6', 'NT-31801', '#7A7A7A', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT31'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT31-V7', 'NT-31803', '#8A8A8A', 7
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT31'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT31-V8', 'NT-31901', '#9A9A6A', 8
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT31'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT35-V1', 'NT-35003', '#1A1A1A', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT35'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT35-V2', 'NT-35006', '#4A6A4A', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT35'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V1', 'NT-311', '#A0A0A0', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V2', 'NT-316', '#B0B0B0', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V3', 'NT-336', '#8A7A6A', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V4', 'NT-339', '#7A6A5A', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V5', 'NT-340', '#6A5A4A', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V6', 'NT-341', '#3A3A3A', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V7', 'NT-342', '#5A4A3A', 7
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V8', 'NT-344', '#9A8A7A', 8
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V9', 'NT-371', '#8A8A8A', 9
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V10', 'NT-376', '#6A6A7A', 10
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V11', 'NT-379', '#2A2A2A', 11
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-NT3-PLAIN-V12', 'NT-382', '#4A3A2A', 12
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-DT-V1', 'DT-2201', '#D0C8B8', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-DT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-DT-V2', 'DT-2202', '#C8B8A0', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-DT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-DT-V3', 'DT-2204', '#A89080', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-DT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-CARPET-DT-V4', 'DT-2207', '#6A5A4A', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-CARPET-DT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-LANDSTONE-V1', 'CRD-X3810', '#E8E0D8', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-LANDSTONE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-LANDSTONE-V2', 'CRD-X3820', '#D8D0C8', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-LANDSTONE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-LANDSTONE-V3', 'CRD-X3830', '#C8C0B8', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-LANDSTONE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-LANDSTONE-V4', 'CRD-X3840', '#B8B0A8', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-LANDSTONE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-PIETRA-SONI-V1', 'PAN-X8010', '#F0E8E0', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-PIETRA-SONI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-PIETRA-SONI-V2', 'PAN-X8020', '#E8E0D8', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-PIETRA-SONI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-PIETRA-SONI-V3', 'PAN-X8030', '#D8D0C8', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-PIETRA-SONI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-PIETRA-SONI-V4', 'PAN-X8040', '#A89888', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-PIETRA-SONI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-PIETRA-SONI-V5', 'PAN-X8050', '#988878', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-PIETRA-SONI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-MEMPHIS-V1', 'IPF-600/MMP-21', '#E0D8D0', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-MEMPHIS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-MEMPHIS-V2', 'IPF-600/MMP-22', '#D0C8C0', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-MEMPHIS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-MEMPHIS-V3', 'IPF-600/MMP-23', '#C0B8B0', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-MEMPHIS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-MEMPHIS-V4', 'IPF-600/MMP-24', '#A09890', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-MEMPHIS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-MEMPHIS-V5', 'IPF-600/MMP-25', '#908880', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-MEMPHIS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-CONSTRUCTION-FEE-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-CONSTRUCTION-FEE-SMALL-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-GROUT-COLOR-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-GROUT-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-GROUT-COLOR-V2', 'ライトグレー', '#C0C0C0', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-GROUT-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-TILE-GROUT-COLOR-V3', 'ダークグレー', '#606060', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-TILE-GROUT-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CEILING-SLOPE-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CEILING-SLOPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CEILING-HEIGHT-UP-100-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-100'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CEILING-HEIGHT-UP-200-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-200'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CEILING-DROP-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CEILING-DROP'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LIGHTING-COVE-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-LIGHTING-COVE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LIGHTING-CORNICE-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-LIGHTING-CORNICE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LIGHTING-UPPER-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-LIGHTING-UPPER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CURTAIN-BOX-CEILING-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CURTAIN-BOX-CEILING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CURTAIN-BOX-WALL-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CURTAIN-BOX-WALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-REINFORCEMENT-WALL-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-REINFORCEMENT-WALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-REINFORCEMENT-FLOOR-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-REINFORCEMENT-FLOOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-REINFORCEMENT-ROLL-CURTAIN-V1', '1m未満', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-REINFORCEMENT-ROLL-CURTAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-REINFORCEMENT-ROLL-CURTAIN-V2', '2m未満', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-REINFORCEMENT-ROLL-CURTAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-REINFORCEMENT-ROLL-CURTAIN-V3', '3m未満', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-REINFORCEMENT-ROLL-CURTAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-REINFORCEMENT-ROLL-CURTAIN-V4', '4m未満', '#FFFFFF', 4
FROM items i WHERE i.item_code = 'INT-REINFORCEMENT-ROLL-CURTAIN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-MAGNET-CLOTH-V1', '標準', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-MAGNET-CLOTH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-A-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-A'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-A-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-A'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-A-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-A'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-A-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-A'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-A-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-A'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-A-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-A'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-B-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-B'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-B-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-B'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-B-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-B'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-B-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-B'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-B-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-B'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-B-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-B'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-C-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-C'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-C-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-C'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-C-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-C'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-C-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-C'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-C-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-C'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-C-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-C'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-D-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-D'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-D-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-D'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-D-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-D'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-D-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-D'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-D-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-D'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-D-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-D'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-E-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-E-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-E-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-E-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-E-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-E-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-F-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-F'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-F-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-F'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-F-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-F'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-F-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-F'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-F-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-F'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-F-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-F'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-G-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-G'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-G-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-G'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-G-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-G'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-G-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-G'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-G-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-G'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-G-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-G'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-H-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-H'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-H-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-H'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-H-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-H'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-H-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-H'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-H-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-H'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-H-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-H'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-I-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-I'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-I-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-I'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-I-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-I'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-I-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-I'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-I-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-I'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-I-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-I'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-J-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-J'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-J-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-J'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-J-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-J'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-J-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-J'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-J-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-J'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-J-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-J'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-K-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-K'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-K-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-K'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-K-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-K'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-K-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-K'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-K-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-K'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-K-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-K'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-L-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-L'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-L-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-L'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-L-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-L'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-L-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-L'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-L-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-L'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-PATTERN-L-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-PATTERN-L'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-REMOTE-V1', 'シェルホワイト', '#FFFAF0', 1
FROM items i WHERE i.item_code = 'INT-NICHE-REMOTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-REMOTE-V2', 'ナチュラルバーチ', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-NICHE-REMOTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-REMOTE-V3', 'ブライトウォールナット', '#8B6914', 3
FROM items i WHERE i.item_code = 'INT-NICHE-REMOTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-REMOTE-V4', 'アッシュウォールナット', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-NICHE-REMOTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-REMOTE-V5', 'ダークグレー', '#404040', 5
FROM items i WHERE i.item_code = 'INT-NICHE-REMOTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-REMOTE-V6', 'ゴム集成クリア塗装', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-NICHE-REMOTE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-RESERVE-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-WALL-RESERVE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-RESERVE-V2', 'ナチュラル', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'INT-WALL-RESERVE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-RESERVE-V3', 'グレー', '#D3D3D3', 3
FROM items i WHERE i.item_code = 'INT-WALL-RESERVE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-RESERVE-V4', 'ベージュ', '#F5DEB3', 4
FROM items i WHERE i.item_code = 'INT-WALL-RESERVE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-RESERVE-V5', 'ライトブルー', '#E6F3FF', 5
FROM items i WHERE i.item_code = 'INT-WALL-RESERVE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-FAITH-V1', 'パターン001', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-WALL-FAITH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-FAITH-V2', 'パターン002', '#E8E8E8', 2
FROM items i WHERE i.item_code = 'INT-WALL-FAITH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-FAITH-V3', 'パターン003', '#DCDCDC', 3
FROM items i WHERE i.item_code = 'INT-WALL-FAITH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-FAITH-V4', 'パターン004', '#F0F8FF', 4
FROM items i WHERE i.item_code = 'INT-WALL-FAITH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-FAITH-V5', 'パターン005', '#FFF8DC', 5
FROM items i WHERE i.item_code = 'INT-WALL-FAITH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-FAITH-V6', 'パターン006', '#F5F5DC', 6
FROM items i WHERE i.item_code = 'INT-WALL-FAITH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-FAITH-V7', 'パターン007', '#FFFACD', 7
FROM items i WHERE i.item_code = 'INT-WALL-FAITH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-FAITH-V8', 'パターン008', '#F0FFF0', 8
FROM items i WHERE i.item_code = 'INT-WALL-FAITH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-HAPIA-BASIC-V1', 'ネオホワイト', '#FAFAFA', 1
FROM items i WHERE i.item_code = 'INT-DOOR-HAPIA-BASIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-HAPIA-BASIC-V2', 'ライトオーカー', '#DEB887', 2
FROM items i WHERE i.item_code = 'INT-DOOR-HAPIA-BASIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-HAPIA-BASIC-V3', 'ティーブラウン', '#8B4513', 3
FROM items i WHERE i.item_code = 'INT-DOOR-HAPIA-BASIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-HAPIA-BASIC-V4', 'ダルブラウン', '#654321', 4
FROM items i WHERE i.item_code = 'INT-DOOR-HAPIA-BASIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-HAPIA-BASIC-V5', 'アッシュグレー', '#B2BEB5', 5
FROM items i WHERE i.item_code = 'INT-DOOR-HAPIA-BASIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-V1', 'ソフトホワイト', '#F8F8F8', 1
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-V2', 'ソフトオーク', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-V3', 'ソフトウォールナット', '#704214', 3
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-V4', 'ソフトグレー', '#A9A9A9', 4
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOOD-V1', 'ナチュラル', '#DEB887', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOOD-V2', 'ブラウン', '#8B4513', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOOD-V3', 'ダークブラウン', '#654321', 3
FROM items i WHERE i.item_code = 'INT-STAIRS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOOD-V4', 'ホワイト', '#FFFFFF', 4
FROM items i WHERE i.item_code = 'INT-STAIRS-WOOD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-STEEL-V1', 'ブラック', '#000000', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-STEEL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-STEEL-V2', 'ホワイト', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-STEEL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-STEEL-V3', 'グレー', '#808080', 3
FROM items i WHERE i.item_code = 'INT-STAIRS-STEEL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STORAGE-VERITIS-CLOSET-V1', 'ソフトホワイト', '#F8F8F8', 1
FROM items i WHERE i.item_code = 'INT-STORAGE-VERITIS-CLOSET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STORAGE-VERITIS-CLOSET-V2', 'ソフトオーク', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-STORAGE-VERITIS-CLOSET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STORAGE-VERITIS-CLOSET-V3', 'ソフトウォールナット', '#704214', 3
FROM items i WHERE i.item_code = 'INT-STORAGE-VERITIS-CLOSET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STORAGE-VERITIS-CLOSET-V4', 'ソフトグレー', '#A9A9A9', 4
FROM items i WHERE i.item_code = 'INT-STORAGE-VERITIS-CLOSET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STORAGE-WALKIN-CLOSET-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-STORAGE-WALKIN-CLOSET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STORAGE-WALKIN-CLOSET-V2', 'ナチュラル', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'INT-STORAGE-WALKIN-CLOSET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STORAGE-WALKIN-CLOSET-V3', 'ブラウン', '#8B4513', 3
FROM items i WHERE i.item_code = 'INT-STORAGE-WALKIN-CLOSET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CEILING-HYCLEAN-BOARD-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CEILING-HYCLEAN-BOARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CEILING-HYCLEAN-BOARD-V2', 'アイボリー', '#FFFFF0', 2
FROM items i WHERE i.item_code = 'INT-CEILING-HYCLEAN-BOARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CEILING-SLOPE-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CEILING-SLOPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CEILING-SLOPE-V2', 'ナチュラル', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'INT-CEILING-SLOPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-L1-V1', 'タイル：ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-NICHE-L1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-L1-V2', 'タイル：グレー', '#808080', 2
FROM items i WHERE i.item_code = 'INT-NICHE-L1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-L1-V3', 'タイル：ブラック', '#000000', 3
FROM items i WHERE i.item_code = 'INT-NICHE-L1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-L1-V4', 'クロス：ホワイト', '#FFFFFF', 4
FROM items i WHERE i.item_code = 'INT-NICHE-L1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-L1-V5', 'クロス：グレー', '#D3D3D3', 5
FROM items i WHERE i.item_code = 'INT-NICHE-L1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-L1-V6', 'クロス：ベージュ', '#F5DEB3', 6
FROM items i WHERE i.item_code = 'INT-NICHE-L1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-M1-V1', 'タイル：ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-NICHE-M1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-M1-V2', 'タイル：グレー', '#808080', 2
FROM items i WHERE i.item_code = 'INT-NICHE-M1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-M1-V3', 'タイル：ブラック', '#000000', 3
FROM items i WHERE i.item_code = 'INT-NICHE-M1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-M1-V4', 'クロス：ホワイト', '#FFFFFF', 4
FROM items i WHERE i.item_code = 'INT-NICHE-M1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-M1-V5', 'クロス：グレー', '#D3D3D3', 5
FROM items i WHERE i.item_code = 'INT-NICHE-M1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NICHE-M1-V6', 'クロス：ベージュ', '#F5DEB3', 6
FROM items i WHERE i.item_code = 'INT-NICHE-M1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V1', '01 銀白色（ぎんぱくしょく）', '#E8E8D0', 1
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V2', '02 黄金色（こがねいろ）', '#E6B422', 2
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V3', '06 亜麻色（あまいろ）', '#D6C6AF', 3
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V4', '09 墨染色（すみぞめいろ）', '#595857', 4
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V5', '10 乳白色（にゅうはくしょく）', '#FFFACD', 5
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V6', '11 銀鼠色（ぎんねずいろ）', '#91989F', 6
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V7', '12 栗色（くりいろ）', '#762F07', 7
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V8', '14 灰桜色（はいざくらいろ）', '#E8D3D1', 8
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V9', '15 白茶色（しらちゃいろ）', '#C1A78E', 9
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V10', '16 若草色（わかくさいろ）', '#C5E17A', 10
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V11', '19 胡桃色（くるみいろ）', '#9F8168', 11
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TATAMI-SUKOYAKA-SEIRYU-V12', '21 小麦色（こむぎいろ）', '#E5C99E', 12
FROM items i WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-SPACE-V1', 'H300（高さ300mm）', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-KOAGARI-SPACE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-SPACE-V2', 'H350（高さ350mm）', '#C8A882', 2
FROM items i WHERE i.item_code = 'INT-KOAGARI-SPACE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-SPACE-V3', 'H400（高さ400mm）', '#B8976A', 3
FROM items i WHERE i.item_code = 'INT-KOAGARI-SPACE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H350-V1', 'JC-516K（オーク）', '#C8A882', 1
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H350'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H350-V2', 'TJ-2062K（ウォルナット）', '#5D4037', 2
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H350'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H350-V3', 'K-6000KN（艶消しホワイト）', '#F5F5F5', 3
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H350'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H350-V4', 'K-6302KN（艶消しグレー）', '#A9A9A9', 4
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H350'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H350-V5', 'K-6306KN（艶消しブラック）', '#2F2F2F', 5
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H350'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H400-V1', 'JC-516K（オーク）', '#C8A882', 1
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H400'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H400-V2', 'TJ-2062K（ウォルナット）', '#5D4037', 2
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H400'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H400-V3', 'K-6000KN（艶消しホワイト）', '#F5F5F5', 3
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H400'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H400-V4', 'K-6302KN（艶消しグレー）', '#A9A9A9', 4
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H400'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOAGARI-STORAGE-H400-V5', 'K-6306KN（艶消しブラック）', '#2F2F2F', 5
FROM items i WHERE i.item_code = 'INT-KOAGARI-STORAGE-H400'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-BATH-DOOR-FRAME-V1', 'しっくいホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-BATH-DOOR-FRAME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-BATH-DOOR-FRAME-V2', 'オフブラック', '#2F2F2F', 2
FROM items i WHERE i.item_code = 'INT-BATH-DOOR-FRAME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-BATH-DOOR-FRAME-V3', 'パールグレー', '#C0C0C0', 3
FROM items i WHERE i.item_code = 'INT-BATH-DOOR-FRAME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INSPECTION-FLOOR-V1', 'IV（アイボリー）', '#FFFFF0', 1
FROM items i WHERE i.item_code = 'INT-INSPECTION-FLOOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INSPECTION-FLOOR-V2', 'NL（ナチュラル）', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-INSPECTION-FLOOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INSPECTION-FLOOR-V3', 'MB（ミディアムブラウン）', '#8B7355', 3
FROM items i WHERE i.item_code = 'INT-INSPECTION-FLOOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INSPECTION-FLOOR-V4', 'DB（ダークブラウン）', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-INSPECTION-FLOOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INSPECTION-FLOOR-V5', 'BB（ブラックブラウン）', '#3D2B1F', 5
FROM items i WHERE i.item_code = 'INT-INSPECTION-FLOOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INSPECTION-FLOOR-V6', 'LG（ライトグレー）', '#D3D3D3', 6
FROM items i WHERE i.item_code = 'INT-INSPECTION-FLOOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INSPECTION-CEILING-V1', 'W（ホワイト）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INSPECTION-CEILING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INSPECTION-CEILING-V2', 'SL（マットシルバー）', '#C0C0C0', 2
FROM items i WHERE i.item_code = 'INT-INSPECTION-CEILING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-STORAGE-V1', 'IV（アイボリー）', '#FFFFF0', 1
FROM items i WHERE i.item_code = 'INT-FLOOR-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-STORAGE-V2', 'NL（ナチュラル）', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-FLOOR-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-STORAGE-V3', 'MB（ミディアムブラウン）', '#8B7355', 3
FROM items i WHERE i.item_code = 'INT-FLOOR-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-STORAGE-V4', 'DB（ダークブラウン）', '#5D4037', 4
FROM items i WHERE i.item_code = 'INT-FLOOR-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-STORAGE-V5', 'BB（ブラックブラウン）', '#3D2B1F', 5
FROM items i WHERE i.item_code = 'INT-FLOOR-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-FLOOR-STORAGE-V6', 'LG（ライトグレー）', '#D3D3D3', 6
FROM items i WHERE i.item_code = 'INT-FLOOR-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-VENTILATION-PANASONIC-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-VENTILATION-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-VENTILATION-PANASONIC-V2', 'グレー', '#808080', 2
FROM items i WHERE i.item_code = 'INT-VENTILATION-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-VENTILATION-SUPPLY-GRILL-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-VENTILATION-SUPPLY-GRILL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-VENTILATION-SUPPLY-GRILL-V2', 'ライトブラウン', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-VENTILATION-SUPPLY-GRILL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-VENTILATION-SUPPLY-GRILL-V3', 'グレー', '#808080', 3
FROM items i WHERE i.item_code = 'INT-VENTILATION-SUPPLY-GRILL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-VENTILATION-SUPPLY-GRILL-V4', 'ブラック', '#2F2F2F', 4
FROM items i WHERE i.item_code = 'INT-VENTILATION-SUPPLY-GRILL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-VENTILATION-EXHAUST-GRILL-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-VENTILATION-EXHAUST-GRILL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-VENTILATION-EXHAUST-GRILL-V2', 'ライトブラウン', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-VENTILATION-EXHAUST-GRILL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-VENTILATION-DSDD-V1', 'アイボリー', '#FFFFF0', 1
FROM items i WHERE i.item_code = 'INT-VENTILATION-DSDD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V1', 'ウォールナット柄', '#5D4037', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V2', 'チェリー柄', '#A0522D', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V3', 'オーク柄', '#C8A882', 3
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V4', 'メープル柄', '#E5C29F', 4
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V5', 'ホワイトオーク柄', '#F5F5DC', 5
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V6', 'エイジドチーク柄', '#8B6914', 6
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V7', 'エイジドチェスナット柄', '#8B7355', 7
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V8', 'カームチェリー柄', '#CD853F', 8
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V9', 'グレージュヒッコリー柄', '#B8A090', 9
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V10', 'ウォッシュドオーク柄', '#D4C5B9', 10
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-PANASONIC-V11', 'アイボリーアッシュ柄', '#FFFFF0', 11
FROM items i WHERE i.item_code = 'INT-STAIRS-PANASONIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V1', 'ブラックチェリー', '#8B4513', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V2', 'シカモア', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V3', 'ハードメイプル', '#E5C29F', 3
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V4', 'ブラックウォルナット', '#3D2B1F', 4
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V5', 'バーチ', '#DEB887', 5
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V6', 'オーク', '#C8A882', 6
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V7', 'アカシア', '#8B6914', 7
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V8', 'ドライメイプル', '#D4C5B9', 8
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V9', 'ドライウォルナット', '#8B7355', 9
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V10', 'ドライオーク', '#B8A090', 10
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V11', 'シュガーホワイト（アッシュ）', '#FFFAF0', 11
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V12', 'ライトグレー（オーク）', '#D3D3D3', 12
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-WOODTEC-V13', 'ミッドグレー（オーク）', '#A9A9A9', 13
FROM items i WHERE i.item_code = 'INT-STAIRS-WOODTEC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-V1', 'ブラックチェリー', '#8B4513', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-V2', 'ハードメープル', '#E5C29F', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-V3', 'ナラ樫', '#C8A882', 3
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-V4', 'チーク', '#8B6914', 4
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-V5', 'イタヤカエデ', '#F5DEB3', 5
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-V6', 'アカシア', '#A0522D', 6
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-V7', 'ウォルナット', '#5D4037', 7
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-AGING-V1', 'エイジングナチュラル', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-AGING-V2', 'エイジングホワイト', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-AGING-V3', 'エイジングタイガ', '#8B7355', 3
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-AGING-V4', 'エイジングカフェ', '#6F4E37', 4
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IKUTA-AGING-V5', 'エイジングビター', '#3D2B1F', 5
FROM items i WHERE i.item_code = 'INT-STAIRS-IKUTA-AGING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-LANDING-V1', '踊り場形状', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-LANDING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-HANDRAIL-LIXIL-V1', 'ホワイト（W/プレシャスホワイト+YY/プレシャスホワイト）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-HANDRAIL-LIXIL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-HANDRAIL-LIXIL-V2', 'ブラック（AB/ブラック+BE/アイアンブラック）', '#2F2F2F', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-HANDRAIL-LIXIL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-HANDRAIL-WALL-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-HANDRAIL-WALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-HANDRAIL-WALL-V2', 'ブラック', '#2F2F2F', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-HANDRAIL-WALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IRON-V1', '手摺色：日塗工/N-95 つや消ホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-IRON'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IRON-V2', '手摺色：日塗工/N-60 つや消グレー', '#808080', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-IRON'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IRON-V3', '手摺色：日塗工/N-10 つや消ブラック', '#2F2F2F', 3
FROM items i WHERE i.item_code = 'INT-STAIRS-IRON'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IRON-SIDE-V1', '側板色：日塗工/N-95 つや消ホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-IRON-SIDE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IRON-SIDE-V2', '側板色：日塗工/N-60 つや消グレー', '#808080', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-IRON-SIDE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IRON-SIDE-V3', '側板色：日塗工/N-10 つや消ブラック', '#2F2F2F', 3
FROM items i WHERE i.item_code = 'INT-STAIRS-IRON-SIDE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IRON-TURN-V1', '一曲がり', '#808080', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-IRON-TURN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IRON-SAFETY-V1', '転落防止型', '#808080', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-IRON-SAFETY'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-IRON-DOUBLE-V1', '両側手摺', '#808080', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-IRON-DOUBLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-HALL-IRON-HANDRAIL-V1', '日塗工/N-95 つや消ホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-HALL-IRON-HANDRAIL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-HALL-IRON-HANDRAIL-V2', '日塗工/N-60 つや消グレー', '#808080', 2
FROM items i WHERE i.item_code = 'INT-HALL-IRON-HANDRAIL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-HALL-IRON-HANDRAIL-V3', '日塗工/N-10 つや消ブラック', '#2F2F2F', 3
FROM items i WHERE i.item_code = 'INT-HALL-IRON-HANDRAIL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V1', 'MDR-5014', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V2', 'MDR-5017', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V3', 'HDR-1052', '#808069', 3
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V4', 'HDR-1053', '#E8DCC8', 4
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V5', 'HDR-1054', '#B8A090', 5
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V6', 'CIR-5002', '#696969', 6
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V7', 'CIR-5006', '#C8B896', 7
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V8', 'CIR-5007', '#8B8B7A', 8
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V9', 'CIR-5008', '#5D4E37', 9
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V10', 'LIR-5032', '#A0A090', 10
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V11', 'LIR-5033', '#B8A878', 11
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V12', 'LIR-5036', '#D3D3D3', 12
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-STAIRS-CARPET-V13', 'LIR-5044', '#4A5568', 13
FROM items i WHERE i.item_code = 'INT-STAIRS-CARPET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-STAIR-KASAGI-V1', 'しっくいホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-WALL-STAIR-KASAGI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-STAIR-KASAGI-V2', 'ソイルブラック', '#2F2F2F', 2
FROM items i WHERE i.item_code = 'INT-WALL-STAIR-KASAGI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-WINDOW-FRAME-V1', 'しっくいホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-WALL-WINDOW-FRAME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-WINDOW-FRAME-V2', 'ソイルブラック', '#2F2F2F', 2
FROM items i WHERE i.item_code = 'INT-WALL-WINDOW-FRAME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-WINDOW-FRAME-V3', 'パールグレー', '#C0C0C0', 3
FROM items i WHERE i.item_code = 'INT-WALL-WINDOW-FRAME'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-BASEBOARD-V1', 'しっくいホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-WALL-BASEBOARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-BASEBOARD-V2', 'ソイルブラック', '#2F2F2F', 2
FROM items i WHERE i.item_code = 'INT-WALL-BASEBOARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-BASEBOARD-V3', 'パールグレー', '#C0C0C0', 3
FROM items i WHERE i.item_code = 'INT-WALL-BASEBOARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-KOSHIKABE-V1', 'しっくいホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-WALL-KOSHIKABE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-KOSHIKABE-V2', 'ソイルブラック', '#2F2F2F', 2
FROM items i WHERE i.item_code = 'INT-WALL-KOSHIKABE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-KOSHIKABE-V3', 'パールグレー', '#C0C0C0', 3
FROM items i WHERE i.item_code = 'INT-WALL-KOSHIKABE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-KOSHIKABE-V4', 'ゴム集成クリア塗装', '#D2B48C', 4
FROM items i WHERE i.item_code = 'INT-WALL-KOSHIKABE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-TAREKABE-V1', 'H200', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-WALL-TAREKABE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-TAREKABE-V2', 'H400', '#F5F5F5', 2
FROM items i WHERE i.item_code = 'INT-WALL-TAREKABE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WALL-ARCH-TAREKABE-V1', 'アーチ垂壁', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-WALL-ARCH-TAREKABE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-STANDARD-V1', 'ソフトウォールナット柄', '#8B7355', 1
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-STANDARD-V2', 'ウォールナット柄', '#5D4037', 2
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-STANDARD-V3', 'チェリー柄', '#A0522D', 3
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-STANDARD-V4', 'グレージュアッシュ柄', '#B8A090', 4
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-STANDARD-V5', 'イデアオーク柄', '#C8A882', 5
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-STANDARD-V6', 'メープル柄', '#E5C29F', 6
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-STANDARD-V7', 'ホワイトオーク柄', '#F5F5DC', 7
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-STANDARD-V8', 'ホワイトアッシュ柄', '#FAFAFA', 8
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-STANDARD-V9', 'しっくいホワイト柄', '#FFFFFF', 9
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-PAINT-V1', 'ブラックオーク柄', '#2F2F2F', 1
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-PAINT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-PAINT-V2', 'ネイビーオーク柄', '#1E3A5F', 2
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-PAINT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-PAINT-V3', 'ブルーグレーオーク柄', '#6B8E9F', 3
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-PAINT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-PAINT-V4', 'ビアンコルドオーク柄', '#F0E6D8', 4
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-PAINT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-SOLID-V1', 'ソイルブラック柄', '#2F2F2F', 1
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-SOLID'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-VERITIS-SOLID-V2', 'パールグレー柄', '#C0C0C0', 2
FROM items i WHERE i.item_code = 'INT-DOOR-VERITIS-SOLID'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-HANDLE-V1', 'サテンシルバー色（塗装）', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-DOOR-HANDLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-HANDLE-V2', 'オフブラック色（塗装）', '#2F2F2F', 2
FROM items i WHERE i.item_code = 'INT-DOOR-HANDLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-ADD-SWING-V1', '開き戸追加', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-DOOR-ADD-SWING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-CHANGE-SLIDING-V1', '片引戸へ変更', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-DOOR-CHANGE-SLIDING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-ADD-LOCK-V1', '表示錠追加', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-DOOR-ADD-LOCK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-ADD-SLIDING-V1', '引戸追加', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-DOOR-ADD-SLIDING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-STORAGE-FOLD-V1', '折れ戸', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-DOOR-STORAGE-FOLD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-STORAGE-SLIDING2-V1', '2枚引き違い戸', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-DOOR-STORAGE-SLIDING2'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-STORAGE-MIRROR-V1', '鏡追加', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-DOOR-STORAGE-MIRROR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-GLASS-V1', 'WBデザイン（半透明アクリル板）', '#E0E0E0', 1
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-GLASS-V2', 'WCデザイン（半透明あわせガラス）', '#E8E8E8', 2
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-GLASS-V3', 'LDデザイン（半透明アクリル板）', '#E0E0E0', 3
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-GLASS-V4', 'MCデザイン（半透明あわせガラス）', '#E8E8E8', 4
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-GLASS-V5', 'LBデザイン（半透明アクリル板）', '#E0E0E0', 5
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-GLASS-V6', 'PAデザイン+ペットドア（開口H280W180）', '#D2B48C', 6
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-HC-V1', 'HCデザイン（透明ガラス）', '#E8F4F8', 1
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-HC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-HC-V2', 'HCデザイン（フロストガラス）', '#F0F0F0', 2
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-HC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-HB-V1', 'HBデザイン（透明ガラス）', '#E8F4F8', 1
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-HB'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOOR-DESIGN-HB-V2', 'HBデザイン（フロストガラス）', '#F0F0F0', 2
FROM items i WHERE i.item_code = 'INT-DOOR-DESIGN-HB'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-A-STANDARD-V1', 'オフブラック', '#2F2F2F', 1
FROM items i WHERE i.item_code = 'INT-WINDOW-A-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-A-STANDARD-V2', 'ホワイト', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-WINDOW-A-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-A-OPTION-V1', 'オフブラック', '#2F2F2F', 1
FROM items i WHERE i.item_code = 'INT-WINDOW-A-OPTION'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-A-OPTION-V2', 'ホワイト', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-WINDOW-A-OPTION'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-B-STANDARD-V1', 'オフブラック', '#2F2F2F', 1
FROM items i WHERE i.item_code = 'INT-WINDOW-B-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-B-STANDARD-V2', 'ホワイト', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-WINDOW-B-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-B-OPTION-V1', 'オフブラック', '#2F2F2F', 1
FROM items i WHERE i.item_code = 'INT-WINDOW-B-OPTION'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-B-OPTION-V2', 'ホワイト', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-WINDOW-B-OPTION'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-C-STANDARD-V1', 'オフブラック', '#2F2F2F', 1
FROM items i WHERE i.item_code = 'INT-WINDOW-C-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-C-STANDARD-V2', 'ホワイト', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-WINDOW-C-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-C-OPTION-V1', 'オフブラック', '#2F2F2F', 1
FROM items i WHERE i.item_code = 'INT-WINDOW-C-OPTION'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-C-OPTION-V2', 'ホワイト', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-WINDOW-C-OPTION'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-WINDOW-AWNING-V1', '突き出し窓に変更', '#E8F4F8', 1
FROM items i WHERE i.item_code = 'INT-WINDOW-AWNING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-OAK75-V1', 'オーク（ツキ板）75mmピッチ', '#C8A882', 1
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-OAK75'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-TSUKIITA-V1', 'レッドシダー（ツキ板）ランダムピッチ', '#A0522D', 1
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-TSUKIITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-TSUKIITA-V2', 'ヘムロック（ツキ板）ランダムピッチ', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-TSUKIITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-TSUKIITA-V3', 'ブラックチェリー（ツキ板）75mmピッチ', '#8B4513', 3
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-TSUKIITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-TSUKIITA-V4', 'オーク（ツキ板）ランダムピッチ', '#C8A882', 4
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-TSUKIITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-ACACIA-V1', 'アカシア（ツキ板）ランダムピッチ', '#8B6914', 1
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-ACACIA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-OAK-RELIEF-V1', 'オーク（挽き板）レリーフ', '#C8A882', 1
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-OAK-RELIEF'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-BC-RELIEF-V1', 'ブラックチェリー（挽き板）レリーフ', '#8B4513', 1
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-BC-RELIEF'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-HEMLOCK-V1', 'ヘムロック（挽き板）Fフラット', '#D2B48C', 1
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-HEMLOCK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-HEMLOCK-V2', 'ヘムロック（挽き板）Tラウンド', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-HEMLOCK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-HEMLOCK-V3', 'ヘムロック（挽き板）Mマウント', '#D2B48C', 3
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-HEMLOCK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-THEWALL-HEMLOCK-V4', 'ヘムロック（挽き板）Mマウント（ウェーブ加工）', '#D2B48C', 4
FROM items i WHERE i.item_code = 'INT-PANEL-THEWALL-HEMLOCK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-V1', 'FKJ 6000ZYN24 ヘアライン仕上げ（見切り：スノーホワイト）', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-V2', 'FKJ 6300ZYN24 ヘアライン仕上げ（見切り：アイボリー）', '#FFFFF0', 2
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-V3', 'FKJ 6115ZYN24 ヘアライン仕上げ（見切り：シルバー）', '#C0C0C0', 3
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-V4', 'FKJ 6117ZYD24 ヘアライン仕上げ（見切り：シルバー）', '#A9A9A9', 4
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-V5', 'FKM 6000ZMN 艶有り（見切り：スノーホワイト）', '#FFFFFF', 5
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-V6', 'FKM 6005ZMN 艶有り（見切り：アイボリー）', '#FFFFF0', 6
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-V7', 'FKM 6110ZMN 艶有り（見切り：シルバー）', '#C0C0C0', 7
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-V8', 'FJ-936ZD 艶なし（見切り：シルバー）', '#808080', 8
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-SERENT-V1', '10301 Crunch Concrete Snow White（見切り：胡粉）', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL-SERENT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-SERENT-V2', '10302 Crunch Concrete Beige（見切り：白土）', '#F5F5DC', 2
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL-SERENT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-SERENT-V3', '10303 Crunch Concrete Gray（見切り：シルバー）', '#A9A9A9', 3
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL-SERENT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-SERENT-V4', '10304 Crunch Concrete Dark Gray（見切り：薄墨）', '#696969', 4
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL-SERENT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-SERENT-V5', '10300 Spread Metal（見切り：灰ねず）', '#808080', 5
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL-SERENT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-PANEL-CERAL-SERENT-V6', '10242 Grace Marble（見切り：胡粉）', '#E8E8E8', 6
FROM items i WHERE i.item_code = 'INT-PANEL-CERAL-SERENT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W045-V1', 'クリエペール', '#F5F5DC', 1
FROM items i WHERE i.item_code = 'INT-KOUSHI-W045'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W045-V2', 'クリエラスク', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-KOUSHI-W045'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W045-V3', 'クリエダーク', '#5D4037', 3
FROM items i WHERE i.item_code = 'INT-KOUSHI-W045'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W045-V4', 'コウノキ', '#8B7355', 4
FROM items i WHERE i.item_code = 'INT-KOUSHI-W045'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W085-V1', 'クリエペール', '#F5F5DC', 1
FROM items i WHERE i.item_code = 'INT-KOUSHI-W085'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W085-V2', 'クリエラスク', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-KOUSHI-W085'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W085-V3', 'クリエダーク', '#5D4037', 3
FROM items i WHERE i.item_code = 'INT-KOUSHI-W085'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W085-V4', 'コウノキ', '#8B7355', 4
FROM items i WHERE i.item_code = 'INT-KOUSHI-W085'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W12-V1', 'クリエペール', '#F5F5DC', 1
FROM items i WHERE i.item_code = 'INT-KOUSHI-W12'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W12-V2', 'クリエラスク', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-KOUSHI-W12'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W12-V3', 'クリエダーク', '#5D4037', 3
FROM items i WHERE i.item_code = 'INT-KOUSHI-W12'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W12-V4', 'コウノキ', '#8B7355', 4
FROM items i WHERE i.item_code = 'INT-KOUSHI-W12'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W16-V1', 'クリエペール', '#F5F5DC', 1
FROM items i WHERE i.item_code = 'INT-KOUSHI-W16'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W16-V2', 'クリエラスク', '#D2B48C', 2
FROM items i WHERE i.item_code = 'INT-KOUSHI-W16'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W16-V3', 'クリエダーク', '#5D4037', 3
FROM items i WHERE i.item_code = 'INT-KOUSHI-W16'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KOUSHI-W16-V4', 'コウノキ', '#8B7355', 4
FROM items i WHERE i.item_code = 'INT-KOUSHI-W16'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-SCANDINAVIA-V1', 'CHY-U2010', '#D3D3D3', 1
FROM items i WHERE i.item_code = 'INT-TILE-SCANDINAVIA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-SCANDINAVIA-V2', 'CHY-U2020', '#C8C8C8', 2
FROM items i WHERE i.item_code = 'INT-TILE-SCANDINAVIA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-SCANDINAVIA-V3', 'CHY-U2030', '#B8B8B8', 3
FROM items i WHERE i.item_code = 'INT-TILE-SCANDINAVIA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-SCANDINAVIA-V4', 'CHY-U2040', '#A8A8A8', 4
FROM items i WHERE i.item_code = 'INT-TILE-SCANDINAVIA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-SCANDINAVIA-V5', 'CHY-U2050', '#989898', 5
FROM items i WHERE i.item_code = 'INT-TILE-SCANDINAVIA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-BIOPHILIC-V1', 'PST-U9710', '#E8DCC8', 1
FROM items i WHERE i.item_code = 'INT-TILE-BIOPHILIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-BIOPHILIC-V2', 'PST-U9720', '#D8CCB8', 2
FROM items i WHERE i.item_code = 'INT-TILE-BIOPHILIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-BIOPHILIC-V3', 'PST-U9730', '#C8BCA8', 3
FROM items i WHERE i.item_code = 'INT-TILE-BIOPHILIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-BIOPHILIC-V4', 'PST-U9740', '#B8AC98', 4
FROM items i WHERE i.item_code = 'INT-TILE-BIOPHILIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-CEMENTING-V1', 'ORG-U7810', '#F5F5DC', 1
FROM items i WHERE i.item_code = 'INT-TILE-CEMENTING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-CEMENTING-V2', 'ORG-U7820', '#E8E0D0', 2
FROM items i WHERE i.item_code = 'INT-TILE-CEMENTING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-CEMENTING-V3', 'ORG-U7830', '#D8D0C0', 3
FROM items i WHERE i.item_code = 'INT-TILE-CEMENTING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-CEMENTING-V4', 'ORG-U7840', '#C8C0B0', 4
FROM items i WHERE i.item_code = 'INT-TILE-CEMENTING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-CEMENTING-V5', 'ORG-U7880', '#A09080', 5
FROM items i WHERE i.item_code = 'INT-TILE-CEMENTING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-CEMENTING-V6', 'ORG-U7890', '#908070', 6
FROM items i WHERE i.item_code = 'INT-TILE-CEMENTING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-MODENESE-V1', 'XCV-U3200', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-TILE-MODENESE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-MODENESE-V2', 'XCV-U3210', '#F5F5F5', 2
FROM items i WHERE i.item_code = 'INT-TILE-MODENESE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-MODENESE-V3', 'XCV-U3220', '#E8E8E8', 3
FROM items i WHERE i.item_code = 'INT-TILE-MODENESE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-MODENESE-V4', 'XCV-U3230', '#D8D8D8', 4
FROM items i WHERE i.item_code = 'INT-TILE-MODENESE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-MODENESE-V5', 'XCV-U3240', '#C8C8C8', 5
FROM items i WHERE i.item_code = 'INT-TILE-MODENESE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-LAVITA-V1', 'MSY-U9100', '#E8E0D8', 1
FROM items i WHERE i.item_code = 'INT-TILE-LAVITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-LAVITA-V2', 'MSY-U9110', '#D8D0C8', 2
FROM items i WHERE i.item_code = 'INT-TILE-LAVITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-LAVITA-V3', 'MSY-U9120', '#C8C0B8', 3
FROM items i WHERE i.item_code = 'INT-TILE-LAVITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-LAVITA-V4', 'MSY-U9130', '#B8B0A8', 4
FROM items i WHERE i.item_code = 'INT-TILE-LAVITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-LAVITA-V5', 'MSY-U9140', '#A8A098', 5
FROM items i WHERE i.item_code = 'INT-TILE-LAVITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-LAVITA-V6', 'MSY-U9150', '#989088', 6
FROM items i WHERE i.item_code = 'INT-TILE-LAVITA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-FATA-V1', 'FAT-01B（ブライト）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-TILE-FATA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-CONSTRUCTION-V1', '工事費用一式', '#808080', 1
FROM items i WHERE i.item_code = 'INT-TILE-CONSTRUCTION'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-EKIPIZM-V1', 'EKP-F9910（ホワイト）', '#F5F0E8', 1
FROM items i WHERE i.item_code = 'INT-TILE-EKIPIZM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-EKIPIZM-V2', 'EKP-F9920（ピンクベージュ）', '#E8D8D0', 2
FROM items i WHERE i.item_code = 'INT-TILE-EKIPIZM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-EKIPIZM-V3', 'EKP-F9930（グレージュ）', '#D0C8C0', 3
FROM items i WHERE i.item_code = 'INT-TILE-EKIPIZM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-EKIPIZM-V4', 'EKP-F9940（ブラウン）', '#6B4C3A', 4
FROM items i WHERE i.item_code = 'INT-TILE-EKIPIZM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-EKIPIZM-V5', 'EKP-F9950（ダークグリーン）', '#2B4038', 5
FROM items i WHERE i.item_code = 'INT-TILE-EKIPIZM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-EKIPIZM-V6', 'EKP-F9960（ディープグリーン）', '#1A3830', 6
FROM items i WHERE i.item_code = 'INT-TILE-EKIPIZM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-MATTANDMORE-V1', 'FRE-Q3202', '#D8D0C8', 1
FROM items i WHERE i.item_code = 'INT-TILE-MATTANDMORE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-WIGWAG-V1', 'WIG-W（ホワイト）', '#F0F0F0', 1
FROM items i WHERE i.item_code = 'INT-TILE-WIGWAG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-WIGWAG-V2', 'WIG-G（グレー）', '#A0A0A0', 2
FROM items i WHERE i.item_code = 'INT-TILE-WIGWAG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-WIGWAG-V3', 'WIG-B（ブラック）', '#303030', 3
FROM items i WHERE i.item_code = 'INT-TILE-WIGWAG'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-PALETTA-V1', 'PL-800-F（ホワイト）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-TILE-PALETTA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-MARBLEMOSAIC-V1', 'MBM-BCMIX', '#E8E8E0', 1
FROM items i WHERE i.item_code = 'INT-TILE-MARBLEMOSAIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-BRITZ-V1', 'HB-101（ホワイト）', '#F5F5F0', 1
FROM items i WHERE i.item_code = 'INT-TILE-BRITZ'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-BRITZ-V2', 'HB-109（ブラック）', '#303030', 2
FROM items i WHERE i.item_code = 'INT-TILE-BRITZ'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-10THIRTY-V1', '13110（ライトベージュ）', '#E8E0D8', 1
FROM items i WHERE i.item_code = 'INT-TILE-10THIRTY'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-10THIRTY-V2', '13120（ベージュ）', '#C8C0B0', 2
FROM items i WHERE i.item_code = 'INT-TILE-10THIRTY'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-10THIRTY-V3', '13140（グレー）', '#787068', 3
FROM items i WHERE i.item_code = 'INT-TILE-10THIRTY'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-GROUT-V1', '①ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-TILE-GROUT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-GROUT-V2', '②ライトグレー', '#C8C8C8', 2
FROM items i WHERE i.item_code = 'INT-TILE-GROUT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-GROUT-V3', '③グレー', '#909090', 3
FROM items i WHERE i.item_code = 'INT-TILE-GROUT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-GROUT-V4', '④ダークグレー', '#505050', 4
FROM items i WHERE i.item_code = 'INT-TILE-GROUT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-GROUT-V5', '⑤ベージュ', '#D8D0C0', 5
FROM items i WHERE i.item_code = 'INT-TILE-GROUT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-GROUT-V6', '⑥目地無し', '#F0F0F0', 6
FROM items i WHERE i.item_code = 'INT-TILE-GROUT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V1', 'RCP-B（ベージュ）', '#E8E0D0', 1
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V2', 'RCP-N（ナチュラル）', '#F5F0E8', 2
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V3', 'RCP-BD（ベージュダーク）', '#C0B8A8', 3
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V4', 'RCP-ND（ナチュラルダーク）', '#D8D0C0', 4
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V5', 'RCP-BP（ベージュピンク）', '#E8D8D0', 5
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V6', 'RCP-NP（ナチュラルピンク）', '#F0E0D8', 6
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V7', 'RCP-BW（ベージュホワイト）', '#F0E8E0', 7
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V8', 'RCP-NW（ナチュラルホワイト）', '#F8F5F0', 8
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V9', 'RCP-BL（ベージュライト）', '#E0D8C8', 9
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-RECIPE-V10', 'RCP-NL（ナチュラルライト）', '#F0E8E0', 10
FROM items i WHERE i.item_code = 'INT-TILE-RECIPE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-YUKAGE-V1', 'ボーダー YGE-1（ホワイト）', '#F5F5F0', 1
FROM items i WHERE i.item_code = 'INT-TILE-YUKAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-YUKAGE-V2', 'レリーフB YGE-1B（ホワイト）', '#F5F5F0', 2
FROM items i WHERE i.item_code = 'INT-TILE-YUKAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-YUKAGE-V3', 'ボーダー YGE-3（ブルー）', '#1A3050', 3
FROM items i WHERE i.item_code = 'INT-TILE-YUKAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-YUKAGE-V4', 'レリーフB YGE-3B（ブルー）', '#1A3050', 4
FROM items i WHERE i.item_code = 'INT-TILE-YUKAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-SHINELEAF-V1', 'DTL-R/SHL-1（ホワイト）', '#F5F5F0', 1
FROM items i WHERE i.item_code = 'INT-TILE-SHINELEAF'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-SHINELEAF-V2', 'DTL-R/SHL2（グレー）', '#C0C0B8', 2
FROM items i WHERE i.item_code = 'INT-TILE-SHINELEAF'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-INNOCENTMARBLE-V1', 'DTL-1230P1/NIC-1（ホワイト）', '#F0EDE8', 1
FROM items i WHERE i.item_code = 'INT-TILE-INNOCENTMARBLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-INNOCENTMARBLE-V2', 'DTL-1230P1/NIC-2（ベージュ）', '#E0D8D0', 2
FROM items i WHERE i.item_code = 'INT-TILE-INNOCENTMARBLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-INNOCENTMARBLE-V3', 'DTL-1230P1/NIC-3（グレー）', '#C8C0B8', 3
FROM items i WHERE i.item_code = 'INT-TILE-INNOCENTMARBLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-GRAVELGLASS-V1', 'DTL-R/GVL-1（ホワイト）', '#F0F0E8', 1
FROM items i WHERE i.item_code = 'INT-TILE-GRAVELGLASS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-GRAVELGLASS-V2', 'DTL-R/GVL-2（グレー）', '#B0B0A8', 2
FROM items i WHERE i.item_code = 'INT-TILE-GRAVELGLASS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TILE-GRAVELGLASS-V3', 'DTL-R/GVL-3（ブラック）', '#303030', 3
FROM items i WHERE i.item_code = 'INT-TILE-GRAVELGLASS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-GRANQUARTZ-V1', 'ECP-630/GRQ1（ライトグレー）', '#C8C0B8', 1
FROM items i WHERE i.item_code = 'INT-ECOCARAT-GRANQUARTZ'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-GRANQUARTZ-V2', 'EPC-630/GRQ3（ダークグレー）', '#686058', 2
FROM items i WHERE i.item_code = 'INT-ECOCARAT-GRANQUARTZ'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-ROUGHCEMENT-V1', 'ECP-615/RGC1（グレー）', '#A8A098', 1
FROM items i WHERE i.item_code = 'INT-ECOCARAT-ROUGHCEMENT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-ROUGHCEMENT-V2', 'ECP-615/RGC2（グレージュ）', '#B8B0A0', 2
FROM items i WHERE i.item_code = 'INT-ECOCARAT-ROUGHCEMENT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-ROUGHCEMENT-V3', 'ECP-615/RGC3（ダークグレー）', '#585048', 3
FROM items i WHERE i.item_code = 'INT-ECOCARAT-ROUGHCEMENT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-VALSROCK-V1', 'ECP-315/VSR1N（ホワイト）', '#F0EDE8', 1
FROM items i WHERE i.item_code = 'INT-ECOCARAT-VALSROCK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-VALSROCK-V2', 'ECP-315/VSR2N（グレー）', '#A8A098', 2
FROM items i WHERE i.item_code = 'INT-ECOCARAT-VALSROCK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-VALSROCK-V3', 'ECP-315/VSR3N（アッシュブラウン）', '#787068', 3
FROM items i WHERE i.item_code = 'INT-ECOCARAT-VALSROCK'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-STONEGRACE-V1', 'ECP-630/STG1N（グレー）', '#B0A8A0', 1
FROM items i WHERE i.item_code = 'INT-ECOCARAT-STONEGRACE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-STONEGRACE-V2', 'ECP-630/STG2N（ベージュ）', '#D0C8B8', 2
FROM items i WHERE i.item_code = 'INT-ECOCARAT-STONEGRACE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-STONEGRACE-V3', 'ECP-630/STG3N（ダークグレー）', '#686060', 3
FROM items i WHERE i.item_code = 'INT-ECOCARAT-STONEGRACE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-STONEGRACE-V4', 'ECP-630/STG4N（チャコール）', '#484040', 4
FROM items i WHERE i.item_code = 'INT-ECOCARAT-STONEGRACE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-ROUGHQUARTZ-V1', 'ECP-375/RTZ1N（ライトグレー）', '#D0C8C0', 1
FROM items i WHERE i.item_code = 'INT-ECOCARAT-ROUGHQUARTZ'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-ROUGHQUARTZ-V2', 'ECP-375/RTZ2N（ベージュ）', '#D8D0C0', 2
FROM items i WHERE i.item_code = 'INT-ECOCARAT-ROUGHQUARTZ'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ECOCARAT-ROUGHQUARTZ-V3', 'ECP-375/RTZ3N（ダークグレー）', '#787068', 3
FROM items i WHERE i.item_code = 'INT-ECOCARAT-ROUGHQUARTZ'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SMALL-V1', 'ソフトウォールナット色', '#8B6914', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SMALL-V2', 'ウォールナット色', '#5C4033', 2
FROM items i WHERE i.item_code = 'INT-COUNTER-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SMALL-V3', 'チェリー色', '#8B4513', 3
FROM items i WHERE i.item_code = 'INT-COUNTER-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SMALL-V4', 'グレージュアッシュ色', '#A89080', 4
FROM items i WHERE i.item_code = 'INT-COUNTER-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SMALL-V5', 'イデアオーク色', '#C8A870', 5
FROM items i WHERE i.item_code = 'INT-COUNTER-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SMALL-V6', 'メープル色', '#D4A86A', 6
FROM items i WHERE i.item_code = 'INT-COUNTER-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SMALL-V7', 'ホワイトオーク色', '#E8D8C0', 7
FROM items i WHERE i.item_code = 'INT-COUNTER-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SMALL-V8', 'ホワイトアッシュ色', '#F0E8E0', 8
FROM items i WHERE i.item_code = 'INT-COUNTER-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SMALL-V9', 'しっくいホワイト色', '#F5F0E8', 9
FROM items i WHERE i.item_code = 'INT-COUNTER-SMALL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SHELF-SMALL-W1000-V1', 'W～1000mm アングル3個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1000'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SHELF-SMALL-W1800-V1', 'W1001～1800mm アングル4個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SHELF-SMALL-W2800-V1', 'W1801～2800mm アングル6個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W2800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-SHELF-SMALL-W4000-V1', 'W2801～4000mm アングル9個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W4000'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-STUDY-W1000-V1', 'W～1000mm ブラケット3個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-STUDY-W1000'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-STUDY-W1800-V1', 'W1001～1800mm ブラケット4個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-STUDY-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-STUDY-W2800-V1', 'W1801～2800mm ブラケット6個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-STUDY-W2800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-STUDY-W4000-V1', 'W2801～4000mm ブラケット9個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-STUDY-W4000'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-WORK-W1000-V1', 'W～1000mm ブラケット3個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-WORK-W1000'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-WORK-W1800-V1', 'W1001～1800mm ブラケット4個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-WORK-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-WORK-W2800-V1', 'W1801～2800mm ブラケット6個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-WORK-W2800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-WORK-W4000-V1', 'W2801～4000mm ブラケット9個', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-WORK-W4000'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-FACECOLOR-V1', 'ソフトウォールナット色', '#8B6914', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-FACECOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-FACECOLOR-V2', 'ウォールナット色', '#5C4033', 2
FROM items i WHERE i.item_code = 'INT-COUNTER-FACECOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-FACECOLOR-V3', 'チェリー色', '#8B4513', 3
FROM items i WHERE i.item_code = 'INT-COUNTER-FACECOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-FACECOLOR-V4', 'グレージュアッシュ色', '#A89080', 4
FROM items i WHERE i.item_code = 'INT-COUNTER-FACECOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-FACECOLOR-V5', 'イデアオーク色', '#C8A870', 5
FROM items i WHERE i.item_code = 'INT-COUNTER-FACECOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-FACECOLOR-V6', 'メープル色', '#D4A86A', 6
FROM items i WHERE i.item_code = 'INT-COUNTER-FACECOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-FACECOLOR-V7', 'ホワイトオーク色', '#E8D8C0', 7
FROM items i WHERE i.item_code = 'INT-COUNTER-FACECOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-FACECOLOR-V8', 'ホワイトアッシュ色', '#F0E8E0', 8
FROM items i WHERE i.item_code = 'INT-COUNTER-FACECOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-FACECOLOR-V9', 'しっくいホワイト色', '#F5F0E8', 9
FROM items i WHERE i.item_code = 'INT-COUNTER-FACECOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-BRACKET-V1', 'サテンシルバー', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-BRACKET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-BRACKET-V2', 'オフブラック', '#303030', 2
FROM items i WHERE i.item_code = 'INT-COUNTER-BRACKET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-CABLEHOLE-V1', 'ブラウン', '#8B4513', 1
FROM items i WHERE i.item_code = 'INT-COUNTER-CABLEHOLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-CABLEHOLE-V2', 'ブラック', '#303030', 2
FROM items i WHERE i.item_code = 'INT-COUNTER-CABLEHOLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-COUNTER-CABLEHOLE-V3', 'グレー', '#808080', 3
FROM items i WHERE i.item_code = 'INT-COUNTER-CABLEHOLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MAKURADANA-PH-W910-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W910'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MAKURADANA-PH-W1820-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W1820'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MAKURADANA-PH-W2730-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W2730'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MAKURADANA-ONLY-W910-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W910'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MAKURADANA-ONLY-W1820-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W1820'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MAKURADANA-ONLY-W2730-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W2730'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MAKURADANA-CHUDAN-W910-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W910'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MAKURADANA-CHUDAN-W1820-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W1820'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MAKURADANA-CHUDAN-W2730-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W2730'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-CHUDAN-ONLY-W910-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W910'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-CHUDAN-ONLY-W1820-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W1820'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-CHUDAN-ONLY-W2730-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W2730'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C300-2-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-2'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C300-2-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-2'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C300-4-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-4'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C300-4-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-4'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C300-6-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C300-6-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C450-2-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-2'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C450-2-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-2'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C450-4-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-4'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C450-4-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-4'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C450-6-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-C450-6-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-2-W900-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-2-W900-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-2-W1800-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-2-W1800-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-4-W900-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-4-W900-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-4-W1800-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-4-W1800-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-6-W900-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-6-W900-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-6-W1800-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D300-6-W1800-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-2-W900-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-2-W900-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-2-W1800-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-2-W1800-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-4-W900-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-4-W900-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-4-W1800-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-4-W1800-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-6-W900-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-6-W900-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W900'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-6-W1800-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-MOVABLE-D450-6-W1800-V2', 'ダークグレー', '#404040', 2
FROM items i WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W1800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-HANGER-PIPE-2-V1', 'W～1000mm', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-2'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-HANGER-PIPE-ADD-V1', 'W～1000mm', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-LAUNDRY-V1', 'W600', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-LAUNDRY'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-RESIN-S1-V1', 'S1-①（シングル）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-RESIN-S1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-RESIN-S1-V2', 'S1-②（ダブル）', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-SHELF-RESIN-S1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-RESIN-S2-V1', 'S2-①（シングル）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-RESIN-S2'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-RESIN-S2-V2', 'S2-②（ダブル）', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-SHELF-RESIN-S2'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHELF-RESIN-S3-V1', 'S3', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SHELF-RESIN-S3'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-HANGER-PIPE-SET-P1-V1', 'P1', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-HANGER-PIPE-SET-P1'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-HANGER-PIPE-SET-P2-V1', 'P2', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-HANGER-PIPE-SET-P2'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-HANGER-PIPE-SET-P3-V1', 'P3', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-HANGER-PIPE-SET-P3'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-HANGER-PIPE-SET-P4-V1', 'P4', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-HANGER-PIPE-SET-P4'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-HANGER-PIPE-FIXED-V1', 'W～1000mm', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-HANGER-PIPE-FIXED'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-W800-V1', 'W800', '#C8A870', 1
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W800'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-W1200-V1', 'W1200', '#C8A870', 1
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1200'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-W1600-V1', 'W1600', '#C8A870', 1
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1600'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V1', 'ソフトウォールナット柄', '#8B6914', 1
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V2', 'ウォールナット柄', '#5C4033', 2
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V3', 'チェリー柄', '#8B4513', 3
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V4', 'グレージュアッシュ柄', '#A89080', 4
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V5', 'イデアオーク柄', '#C8A870', 5
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V6', 'メープル柄', '#D4A86A', 6
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V7', 'ホワイトオーク柄', '#E8D8C0', 7
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V8', 'ホワイトアッシュ柄', '#F0E8E0', 8
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V9', 'しっくいホワイト柄', '#F5F0E8', 9
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V10', 'ブラックオーク柄', '#303030', 10
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V11', 'ネイビーオーク柄', '#1A2840', 11
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V12', 'ブルーグレーオーク柄', '#607080', 12
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V13', 'ソイルブラック柄', '#202020', 13
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORCOLOR-V14', 'パールグレー柄', '#C8C8C8', 14
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORDESIGN-V1', 'フラットタイプ（取っ手付き）', '#E0E0E0', 1
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORDESIGN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORDESIGN-V2', 'フラットタッチタイプ（プッシュオープン）', '#E0E0E0', 2
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORDESIGN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-DOORDESIGN-V3', '框タイプ（框組デザイン）', '#E0E0E0', 3
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORDESIGN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-HANDLE-V1', 'T5型（丸型）サテンシルバー色', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-HANDLE-V2', 'T5型（丸型）オフブラック色', '#303030', 2
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-HANDLE-V3', 'T5型（丸型）真鍮色', '#B8860B', 3
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-HANDLE-V4', 'T3型（つまみ）サテンシルバー色', '#C0C0C0', 4
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-HANDLE-V5', 'T3型（つまみ）オフブラック色', '#303030', 5
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-HANDLE-V6', 'T3型（つまみ）真鍮色', '#B8860B', 6
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-MIRROR-V1', 'ミラー追加', '#E0E0E0', 1
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-MIRROR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR-V1', 'ウォールナット色', '#5C4033', 1
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR-V2', 'チェリー色', '#8B4513', 2
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR-V3', 'イデアオーク色', '#C8A870', 3
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR-V4', 'アッシュクリア色', '#E8D8C0', 4
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-COUNTERSTYLE-V1', 'A型カウンター（扉と面合わせ）', '#E0E0E0', 1
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERSTYLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SHOEBOX-COMPORIA-COUNTERSTYLE-V2', 'B型カウンター（カウンター伸び出し）', '#E0E0E0', 2
FROM items i WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERSTYLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-BACK-SPACE-V1', '背面収納スペース', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-TOILET-BACK-SPACE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-STORAGE-V1', '右側収納', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-TOILET-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-STORAGE-V2', '左側収納', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-TOILET-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-STORAGE-COLOR-V1', 'シェルホワイト', '#F5F5F0', 1
FROM items i WHERE i.item_code = 'INT-TOILET-STORAGE-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-STORAGE-COLOR-V2', 'ナチュラルバーチアッシュ', '#D4C4A8', 2
FROM items i WHERE i.item_code = 'INT-TOILET-STORAGE-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-STORAGE-COLOR-V3', 'ダークグレーウォールナット', '#505050', 3
FROM items i WHERE i.item_code = 'INT-TOILET-STORAGE-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-STORAGE-COLOR-V4', 'ブライトウォールナット', '#5C4033', 4
FROM items i WHERE i.item_code = 'INT-TOILET-STORAGE-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-SANITA-BOX-V1', '右吊元', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-TOILET-SANITA-BOX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-SANITA-BOX-V2', '左吊元', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-TOILET-SANITA-BOX'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-UPPER-STORAGE-V1', 'TR 両壁納まり（両サイドが壁）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-TOILET-UPPER-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-TOILET-UPPER-STORAGE-V2', 'TK 片壁納まり（片側オープン）', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-TOILET-UPPER-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-SET-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SLOPSINK-SET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-PLUMBING-V1', '1階 給水管（排水）追加', '#E0E0E0', 1
FROM items i WHERE i.item_code = 'INT-SLOPSINK-PLUMBING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-PLUMBING-V2', '1階 給湯追加', '#E0E0E0', 2
FROM items i WHERE i.item_code = 'INT-SLOPSINK-PLUMBING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-PLUMBING-V3', '2階 給水管（排水）追加', '#E0E0E0', 3
FROM items i WHERE i.item_code = 'INT-SLOPSINK-PLUMBING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-PLUMBING-V4', '2階 給湯追加', '#E0E0E0', 4
FROM items i WHERE i.item_code = 'INT-SLOPSINK-PLUMBING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-PLUMBING-V5', '3階 給水管（排水）追加', '#E0E0E0', 5
FROM items i WHERE i.item_code = 'INT-SLOPSINK-PLUMBING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-PLUMBING-V6', '3階 給湯追加', '#E0E0E0', 6
FROM items i WHERE i.item_code = 'INT-SLOPSINK-PLUMBING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-KASAGI-COLOR-V1', 'シェルホワイト', '#F5F5F0', 1
FROM items i WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-KASAGI-COLOR-V2', 'ナチュラルバーチ', '#D4C4A8', 2
FROM items i WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-KASAGI-COLOR-V3', 'ブライトウォールナット', '#5C4033', 3
FROM items i WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-KASAGI-COLOR-V4', 'アッシュウォールナット', '#6B5B4F', 4
FROM items i WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-KASAGI-COLOR-V5', 'ダークグレー', '#505050', 5
FROM items i WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SLOPSINK-KASAGI-COLOR-V6', 'ゴム集成クリア塗装', '#C8A870', 6
FROM items i WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-PAN-V1', 'クールホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-LAUNDRY-PAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BOWL-A-V1', 'マットホワイト（W）', '#F5F5F0', 1
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BOWL-A'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BOWL-A-V2', 'マットブラック（D）', '#303030', 2
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BOWL-A'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BOWL-A-V3', 'マットグレー（GY）', '#808080', 3
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BOWL-A'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BOWL-B-V1', 'マットホワイト（W）', '#F5F5F0', 1
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BOWL-B'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BOWL-B-V2', 'マットブラック（D）', '#303030', 2
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BOWL-B'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BOWL-B-V3', 'マットグレー（GY）', '#808080', 3
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BOWL-B'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BOWL-C-V1', 'マットホワイト（W）', '#F5F5F0', 1
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BOWL-C'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BOWL-C-V2', 'マットブラック（D）', '#303030', 2
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BOWL-C'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BOWL-C-V3', 'マットグレー（GY）', '#808080', 3
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BOWL-C'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-FAUCET-V1', '193-001 壁付け（シルバー）', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-ENTRANCE-FAUCET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-FAUCET-V2', '193-001-D 壁付け（マットブラック）', '#303030', 2
FROM items i WHERE i.item_code = 'INT-ENTRANCE-FAUCET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-FAUCET-V3', '183-309 カウンター置き（シルバー）', '#C0C0C0', 3
FROM items i WHERE i.item_code = 'INT-ENTRANCE-FAUCET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-FAUCET-V4', '183-309-D カウンター置き（マットブラック）', '#303030', 4
FROM items i WHERE i.item_code = 'INT-ENTRANCE-FAUCET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-TRAP-V1', '床排水（Sトラップ）433-310-32', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-ENTRANCE-TRAP'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-TRAP-V2', '壁排水（Pトラップ）433-401-32', '#C0C0C0', 2
FROM items i WHERE i.item_code = 'INT-ENTRANCE-TRAP'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-COUNTER-V1', 'シェルホワイト', '#F5F5F0', 1
FROM items i WHERE i.item_code = 'INT-ENTRANCE-COUNTER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-COUNTER-V2', 'ナチュラルバーチ', '#D4C4A8', 2
FROM items i WHERE i.item_code = 'INT-ENTRANCE-COUNTER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-COUNTER-V3', 'ブライトウォールナット', '#5C4033', 3
FROM items i WHERE i.item_code = 'INT-ENTRANCE-COUNTER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-COUNTER-V4', 'アッシュウォールナット', '#6B5B4F', 4
FROM items i WHERE i.item_code = 'INT-ENTRANCE-COUNTER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-COUNTER-V5', 'ダークグレー', '#505050', 5
FROM items i WHERE i.item_code = 'INT-ENTRANCE-COUNTER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BRACKET-V1', 'サテンシルバー', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BRACKET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-BRACKET-V2', 'オフブラック', '#303030', 2
FROM items i WHERE i.item_code = 'INT-ENTRANCE-BRACKET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-KASAGI-V1', '笠木材', '#C8A870', 1
FROM items i WHERE i.item_code = 'INT-ENTRANCE-KASAGI'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ENTRANCE-CORNER-SET-V1', 'ステンレス', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-ENTRANCE-CORNER-SET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-HOSUCREEN-V1', 'SPC-W（ホワイト）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-HOSUCREEN-V2', 'SPC-M（木目）', '#C8A870', 2
FROM items i WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-HOSUCREEN-V3', 'SPC-BL（ブラック）', '#303030', 3
FROM items i WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-KACU-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-LAUNDRY-KACU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-KACU-V2', 'ブラック', '#303030', 2
FROM items i WHERE i.item_code = 'INT-LAUNDRY-KACU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-PID4M-V1', 'Pid4M', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-LAUNDRY-PID4M'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-HOSUCREEN-LIFT-D-V1', 'UTM-S-W 1255mm', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-D'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-HOSUCREEN-LIFT-D-V2', 'UTM-L-W 1710mm', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-D'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-HOSUCREEN-LIFT-E-V1', 'URM-S-W 1340mm', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-HOSUCREEN-LIFT-E-V2', 'URM-L-W 1740mm', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-E'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KANTAKUN-STANDARD-V1', 'スタンダード 6kg', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-KANTAKUN-STANDARD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KANTAKUN-DELUXE-6-V1', 'RDT-63（下部操作パネル）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-KANTAKUN-DELUXE-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KANTAKUN-DELUXE-6-V2', 'RDT-63T（上部操作パネル）', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-KANTAKUN-DELUXE-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KANTAKUN-DELUXE-9-V1', 'RDT-93（下部操作パネル）', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-KANTAKUN-DELUXE-9'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KANTAKUN-DELUXE-9-V2', 'RDT-93T（上部操作パネル）', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-KANTAKUN-DELUXE-9'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KANTAKUN-GAS-V1', 'ガス引込工事', '#E0E0E0', 1
FROM items i WHERE i.item_code = 'INT-KANTAKUN-GAS'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KANTAKUN-STAND-V1', '専用架台', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-KANTAKUN-STAND'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-KANTAKUN-STORAGE-V1', '専用収納ユニット', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-KANTAKUN-STORAGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SWITCH-HOTARU-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SWITCH-HOTARU'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-SWITCH-3WAY-4WAY-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-SWITCH-3WAY-4WAY'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-2PORT-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-2PORT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-4PORT-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-4PORT'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-TV-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-TV'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-TEL-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-TEL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-LAN-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-LAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-2P-EARTH-DEDICATED-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-2P-EARTH-DEDICATED'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-2P-EARTH-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-2P-EARTH'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-AIRCON-100V-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-AIRCON-100V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-AIRCON-200V-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-AIRCON-200V'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-FLOOR-UPCON-V1', 'アイボリー', '#FFFFF0', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-FLOOR-UPCON'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-FLOOR-UPCON-V2', 'ブラウン（ナチュラルバーチ）', '#8B4513', 2
FROM items i WHERE i.item_code = 'INT-OUTLET-FLOOR-UPCON'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-FLOOR-UPCON-V3', 'ブラウン（バーチ）', '#A0522D', 3
FROM items i WHERE i.item_code = 'INT-OUTLET-FLOOR-UPCON'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-FLOOR-UPCON-V4', 'ダークブラウン（オーク）', '#5C4033', 4
FROM items i WHERE i.item_code = 'INT-OUTLET-FLOOR-UPCON'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-S-PLATE-V1', 'ホワイト', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-S-PLATE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-S-PLATE-V2', 'グレー', '#808080', 2
FROM items i WHERE i.item_code = 'INT-OUTLET-S-PLATE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-ADVANCE-BASIC-V1', 'マットホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-ADVANCE-BASIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-ADVANCE-BASIC-V2', 'マットグレー', '#808080', 2
FROM items i WHERE i.item_code = 'INT-OUTLET-ADVANCE-BASIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-ADVANCE-BASIC-V3', 'マットブラック', '#2C2C2C', 3
FROM items i WHERE i.item_code = 'INT-OUTLET-ADVANCE-BASIC'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-ADVANCE-PREMIUM-V1', 'マットホワイト', '#F5F5F5', 1
FROM items i WHERE i.item_code = 'INT-OUTLET-ADVANCE-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-ADVANCE-PREMIUM-V2', 'マットグレー', '#808080', 2
FROM items i WHERE i.item_code = 'INT-OUTLET-ADVANCE-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-OUTLET-ADVANCE-PREMIUM-V3', 'マットブラック', '#2C2C2C', 3
FROM items i WHERE i.item_code = 'INT-OUTLET-ADVANCE-PREMIUM'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CONDUIT-LAN-V1', '空配管', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CONDUIT-LAN'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-CONDUIT-WALLTV-V1', '空配管', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-CONDUIT-WALLTV'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-SVD505KF-CHANGE-V1', '外でもドアホン', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-SVD505KF-CHANGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-SVD710KF-CHANGE-V1', '外でもドアホン', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-SVD710KF-CHANGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-SE50KPA-CHANGE-V1', 'テレビドアホン', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-SE50KPA-CHANGE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-SVE310KLA-ADD-V1', 'どこでもドアホン', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-SVE310KLA-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-SVD505KF-ADD-V1', '外でもドアホン', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-SVD505KF-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-SVD710KF-ADD-V1', '外でもドアホン', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-SVD710KF-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-SE50KPA-ADD-V1', 'テレビドアホン', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-SE50KPA-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-WD623-ADD-V1', 'ワイヤレス子機', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-WD623-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-WD618-ADD-V1', 'ワイヤレス子機', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-WD618-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-WD616-ADD-V1', 'ワイヤレス子機', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-WD616-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-V632K-ADD-V1', '増設モニター', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-V632K-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-INTERCOM-VH673K-ADD-V1', '増設モニター', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-INTERCOM-VH673K-ADD'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-MITSUBISHI-Z-6-V1', '1階設置', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-MITSUBISHI-Z-6-V2', '2階設置', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-MITSUBISHI-Z-6-V3', '3階設置', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-MITSUBISHI-Z-10-V1', '1階設置', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-10'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-MITSUBISHI-Z-10-V2', '2階設置', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-10'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-MITSUBISHI-Z-10-V3', '3階設置', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-10'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-MITSUBISHI-Z-14-V1', '1階設置', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-14'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-MITSUBISHI-Z-14-V2', '2階設置', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-14'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-MITSUBISHI-Z-14-V3', '3階設置', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-14'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-GX-6-V1', '1階設置', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-GX-6-V2', '2階設置', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-GX-6-V3', '3階設置', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-GX-10-V1', '1階設置', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-10'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-GX-10-V2', '2階設置', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-10'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-GX-10-V3', '3階設置', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-10'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-GX-14-V1', '1階設置', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-14'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-GX-14-V2', '2階設置', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-14'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-GX-14-V3', '3階設置', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-14'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-E-6-V1', '1階設置', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-E-6-V2', '2階設置', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-E-6-V3', '3階設置', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-6'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-E-10-V1', '1階設置', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-10'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-E-10-V2', '2階設置', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-10'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-E-10-V3', '3階設置', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-10'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-E-14-V1', '1階設置', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-14'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-E-14-V2', '2階設置', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-14'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-AIRCON-DAIKIN-E-14-V3', '3階設置', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-14'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOWNLIGHT-BASE-V1', '10個まで', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-DOWNLIGHT-BASE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-DOWNLIGHT-ADDITIONAL-V1', '11個目以降', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-DOWNLIGHT-ADDITIONAL'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-LAUNDRY-MIXER-FAUCET-V1', '混合水栓', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-LAUNDRY-MIXER-FAUCET'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-NANOBUBBLE-BEAUTYAQUA-V1', 'BeautyAqua', '#FFFFFF', 1
FROM items i WHERE i.item_code = 'INT-NANOBUBBLE-BEAUTYAQUA'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-PAPER-HOLDER-V1', 'シルバー', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-PAPER-HOLDER-V2', 'ブラック', '#2C2C2C', 2
FROM items i WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-PAPER-HOLDER-V3', 'ホワイト', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE-V1', 'シルバー', '#C0C0C0', 1
FROM items i WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE-V2', 'ブラック', '#2C2C2C', 2
FROM items i WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE-V3', 'ホワイト', '#FFFFFF', 3
FROM items i WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-TOWEL-BAR-V1', 'ブラック', '#2C2C2C', 1
FROM items i WHERE i.item_code = 'INT-ACCESSORY-TOWEL-BAR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-TOWEL-BAR-V2', 'ホワイト', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-ACCESSORY-TOWEL-BAR'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-TOWEL-RING-V1', 'ブラック', '#2C2C2C', 1
FROM items i WHERE i.item_code = 'INT-ACCESSORY-TOWEL-RING'
ON CONFLICT DO NOTHING;
INSERT INTO item_variants (item_id, variant_code, color_name, color_code, display_order)
SELECT i.id, 'INT-ACCESSORY-TOWEL-RING-V2', 'ホワイト', '#FFFFFF', 2
FROM items i WHERE i.item_code = 'INT-ACCESSORY-TOWEL-RING'
ON CONFLICT DO NOTHING;

-- ========================================
-- 価格設定登録
-- ========================================
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 130000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 130000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 130000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 130000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 140000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 140000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 140000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 140000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-SQUARE-ROUND-LEG' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-QUATTRO' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 166000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 166000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 166000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 166000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-GHOUSE-DINING-TABLE-ROUND-OCTA' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-VERITIS-BASECOAT' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MRX' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MRX' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MRX' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MRX' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEISTERS-WOOD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-MSX' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEIBOKU-RUSTIC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 2000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CRUDE-303' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 2000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CRUDE-303' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CRUDE-303' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CRUDE-303' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEIBOKU-AGING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEIBOKU-AGING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEIBOKU-AGING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MEIBOKU-AGING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-VINTAGE-RUSTIC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-VINTAGE-RUSTIC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-VINTAGE-RUSTIC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-VINTAGE-RUSTIC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 16000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-LIVE-NATURAL-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 2000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-UNI-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-HERRINGBONE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 17000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-HERRINGBONE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 17000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-HERRINGBONE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 4000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CHANNEL-HERRINGBONE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-STANDARD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-STANDARD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-STANDARD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-STANDARD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-FLOOR-TRIM-FLATBAR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-FLOOR-TRIM-FLATBAR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-FLOOR-TRIM-FLATBAR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-FLOOR-TRIM-FLATBAR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-18' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-18' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-18' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-18' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-28' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-28' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-28' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-GENKAN-KAMACHI-PRAIRIE-28' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CF-SHEET-TOLI-OTHER' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-E' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-E' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-E' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-E' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-E-WET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-E-WET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-E-WET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-E-WET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-W' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-W' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-W' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-MATIL-W' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-WET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-WET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-WET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-SMOOTH-CONCRETE-WET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CONCOTTO' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CONCOTTO' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CONCOTTO' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CONCOTTO' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CONCRETE-WET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CONCRETE-WET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CONCRETE-WET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CONCRETE-WET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FRANC-MORTAR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FRANC-MORTAR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FRANC-MORTAR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FRANC-MORTAR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-GEOL-STONE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-GEOL-STONE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-GEOL-STONE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-GEOL-STONE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CHROME-SLATE-WET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CHROME-SLATE-WET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CHROME-SLATE-WET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CHROME-SLATE-WET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FOG-LIME' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FOG-LIME' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FOG-LIME' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FOG-LIME' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CARRARA-WHITE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CARRARA-WHITE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CARRARA-WHITE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-CARRARA-WHITE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-RATTAN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-RATTAN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-RATTAN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-RATTAN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FRENCH-HERRINGBONE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FRENCH-HERRINGBONE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FRENCH-HERRINGBONE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TOLI-FRENCH-HERRINGBONE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NTP' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NTP' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NTP' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NTP' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NTH' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NTH' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NTH' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NTH' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT31' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT31' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT31' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT31' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT35' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT35' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT35' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT35' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-NT3-PLAIN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 13000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-DT' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-DT' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-DT' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-CARPET-DT' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-LANDSTONE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-LANDSTONE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-LANDSTONE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-LANDSTONE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-PIETRA-SONI' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-PIETRA-SONI' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-PIETRA-SONI' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-PIETRA-SONI' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-MEMPHIS' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-MEMPHIS' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-MEMPHIS' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-MEMPHIS' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE-SMALL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE-SMALL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE-SMALL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-CONSTRUCTION-FEE-SMALL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-GROUT-COLOR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-GROUT-COLOR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-GROUT-COLOR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-TILE-GROUT-COLOR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-SLOPE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-SLOPE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-SLOPE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-SLOPE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-100' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-100' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-100' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8500, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-100' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-200' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-200' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-200' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HEIGHT-UP-200' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-DROP' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-DROP' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-DROP' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-DROP' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-COVE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-COVE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-COVE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-COVE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-CORNICE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-CORNICE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-CORNICE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-CORNICE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-UPPER' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-UPPER' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-UPPER' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LIGHTING-UPPER' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CURTAIN-BOX-CEILING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CURTAIN-BOX-CEILING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CURTAIN-BOX-CEILING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CURTAIN-BOX-CEILING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 11000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CURTAIN-BOX-WALL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 11000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CURTAIN-BOX-WALL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 11000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CURTAIN-BOX-WALL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 11000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CURTAIN-BOX-WALL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-WALL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-WALL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-WALL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-WALL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-FLOOR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-FLOOR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-FLOOR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-FLOOR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-ROLL-CURTAIN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-ROLL-CURTAIN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-ROLL-CURTAIN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-REINFORCEMENT-ROLL-CURTAIN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-MAGNET-CLOTH' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-MAGNET-CLOTH' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-MAGNET-CLOTH' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-MAGNET-CLOTH' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-A' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-A' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-A' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-A' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-B' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-B' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-B' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-B' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-C' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-C' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-C' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-C' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-D' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-D' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-D' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-D' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-E' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-E' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-E' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-E' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-F' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-F' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-F' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-F' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-G' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-G' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-G' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-G' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-H' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-H' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-H' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-H' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-I' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-I' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-I' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-I' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-J' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-J' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-J' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-J' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-K' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-K' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-K' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-K' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-L' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-L' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-L' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-PATTERN-L' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-REMOTE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-REMOTE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-REMOTE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-REMOTE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-RESERVE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-RESERVE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-RESERVE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-RESERVE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-FAITH' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-FAITH' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-FAITH' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-FAITH' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-HAPIA-BASIC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-HAPIA-BASIC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-HAPIA-BASIC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-HAPIA-BASIC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-WOOD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-WOOD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-WOOD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-WOOD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 300000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-STEEL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 300000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-STEEL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 280000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-STEEL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 250000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-STEEL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STORAGE-VERITIS-CLOSET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STORAGE-VERITIS-CLOSET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STORAGE-VERITIS-CLOSET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STORAGE-VERITIS-CLOSET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STORAGE-WALKIN-CLOSET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STORAGE-WALKIN-CLOSET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 70000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STORAGE-WALKIN-CLOSET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STORAGE-WALKIN-CLOSET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HYCLEAN-BOARD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HYCLEAN-BOARD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HYCLEAN-BOARD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-HYCLEAN-BOARD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-SLOPE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-SLOPE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-SLOPE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CEILING-SLOPE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-L1' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-L1' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-L1' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-L1' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-M1' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-M1' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-M1' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NICHE-M1' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TATAMI-SUKOYAKA-SEIRYU' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 29000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-SPACE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 29000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-SPACE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 29000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-SPACE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 29000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-SPACE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 87000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-STORAGE-H350' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 87000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-STORAGE-H350' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 87000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-STORAGE-H350' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 87000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-STORAGE-H350' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 92000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-STORAGE-H400' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 92000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-STORAGE-H400' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 92000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-STORAGE-H400' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 92000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOAGARI-STORAGE-H400' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-BATH-DOOR-FRAME' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-BATH-DOOR-FRAME' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-BATH-DOOR-FRAME' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-BATH-DOOR-FRAME' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-INSPECTION-FLOOR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-INSPECTION-FLOOR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-INSPECTION-FLOOR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-INSPECTION-FLOOR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-INSPECTION-CEILING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-INSPECTION-CEILING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-INSPECTION-CEILING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-INSPECTION-CEILING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-STORAGE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-STORAGE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-STORAGE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-FLOOR-STORAGE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-PANASONIC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-PANASONIC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-PANASONIC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-PANASONIC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-SUPPLY-GRILL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-SUPPLY-GRILL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-SUPPLY-GRILL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-SUPPLY-GRILL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-EXHAUST-GRILL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-EXHAUST-GRILL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-EXHAUST-GRILL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-EXHAUST-GRILL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 1500000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-DSDD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 1500000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-DSDD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 1500000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-DSDD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 1500000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-VENTILATION-DSDD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-PANASONIC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-PANASONIC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-PANASONIC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-PANASONIC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-WOODTEC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-WOODTEC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-WOODTEC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-WOODTEC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 240000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IKUTA' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 240000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IKUTA' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 240000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IKUTA' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 240000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IKUTA' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 350000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IKUTA-AGING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 350000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IKUTA-AGING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 350000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IKUTA-AGING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 350000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IKUTA-AGING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-LANDING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-LANDING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-LANDING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-LANDING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-HANDRAIL-LIXIL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-HANDRAIL-LIXIL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-HANDRAIL-LIXIL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-HANDRAIL-LIXIL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-HANDRAIL-WALL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-HANDRAIL-WALL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-HANDRAIL-WALL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-HANDRAIL-WALL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 950000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 950000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 950000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 950000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-SIDE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-SIDE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-SIDE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-SIDE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 100000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-TURN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 100000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-TURN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 100000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-TURN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 100000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-TURN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-SAFETY' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-SAFETY' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-SAFETY' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-SAFETY' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 250000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-DOUBLE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 250000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-DOUBLE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 250000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-DOUBLE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 250000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-IRON-DOUBLE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 240000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HALL-IRON-HANDRAIL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 240000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HALL-IRON-HANDRAIL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 240000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HALL-IRON-HANDRAIL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 240000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HALL-IRON-HANDRAIL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 350000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-CARPET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 210000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-CARPET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 210000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-CARPET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 210000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-STAIRS-CARPET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-STAIR-KASAGI' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-STAIR-KASAGI' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-STAIR-KASAGI' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-STAIR-KASAGI' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-WINDOW-FRAME' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-WINDOW-FRAME' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-WINDOW-FRAME' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-WINDOW-FRAME' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-BASEBOARD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-BASEBOARD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-BASEBOARD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-BASEBOARD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-KOSHIKABE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-KOSHIKABE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-KOSHIKABE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-KOSHIKABE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-TAREKABE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-TAREKABE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-TAREKABE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-TAREKABE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-ARCH-TAREKABE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-ARCH-TAREKABE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-ARCH-TAREKABE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WALL-ARCH-TAREKABE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-STANDARD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-PAINT' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-PAINT' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-PAINT' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-PAINT' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-SOLID' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-SOLID' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-SOLID' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-VERITIS-SOLID' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-HANDLE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-HANDLE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-HANDLE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-HANDLE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-SWING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-SWING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-SWING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-SWING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-CHANGE-SLIDING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-CHANGE-SLIDING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-CHANGE-SLIDING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-CHANGE-SLIDING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-LOCK' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-LOCK' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-LOCK' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-LOCK' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-SLIDING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-SLIDING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-SLIDING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-ADD-SLIDING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-FOLD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-FOLD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-FOLD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-FOLD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 90000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-SLIDING2' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 90000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-SLIDING2' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 90000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-SLIDING2' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 90000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-SLIDING2' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-MIRROR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-MIRROR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-MIRROR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-STORAGE-MIRROR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-GLASS' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 105000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-HC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 105000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-HC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 105000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-HC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 105000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-HC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-HB' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-HB' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-HB' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOOR-DESIGN-HB' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-A-STANDARD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-A-STANDARD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-A-STANDARD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-A-STANDARD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 105000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-A-OPTION' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 105000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-A-OPTION' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 105000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-A-OPTION' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 105000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-A-OPTION' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 135000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-B-STANDARD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 135000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-B-STANDARD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 135000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-B-STANDARD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 135000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-B-STANDARD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-B-OPTION' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-B-OPTION' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-B-OPTION' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-B-OPTION' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 197000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-C-STANDARD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 197000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-C-STANDARD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 197000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-C-STANDARD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 197000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-C-STANDARD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 295000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-C-OPTION' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 295000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-C-OPTION' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 295000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-C-OPTION' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 295000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-C-OPTION' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-AWNING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-AWNING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-AWNING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-WINDOW-AWNING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-OAK75' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-OAK75' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-OAK75' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-OAK75' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-TSUKIITA' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-TSUKIITA' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-TSUKIITA' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-TSUKIITA' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 21000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-ACACIA' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 21000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-ACACIA' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 21000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-ACACIA' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 21000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-ACACIA' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 48000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-OAK-RELIEF' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 48000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-OAK-RELIEF' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 48000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-OAK-RELIEF' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 48000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-OAK-RELIEF' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 55000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-BC-RELIEF' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 55000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-BC-RELIEF' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 55000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-BC-RELIEF' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 55000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-BC-RELIEF' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-HEMLOCK' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-HEMLOCK' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-HEMLOCK' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-THEWALL-HEMLOCK' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-CERAL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-CERAL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-CERAL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-CERAL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 44000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-CERAL-SERENT' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 44000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-CERAL-SERENT' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 44000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-CERAL-SERENT' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 44000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-PANEL-CERAL-SERENT' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W045' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W045' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W045' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W045' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 130000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W085' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 130000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W085' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 130000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W085' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 130000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W085' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 160000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W12' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 160000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W12' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 160000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W12' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 160000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W12' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 190000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W16' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 190000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W16' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 190000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W16' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 190000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KOUSHI-W16' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 26000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-SCANDINAVIA' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 26000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-SCANDINAVIA' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 26000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-SCANDINAVIA' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 26000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-SCANDINAVIA' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 28000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-BIOPHILIC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 28000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-BIOPHILIC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 28000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-BIOPHILIC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 28000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-BIOPHILIC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-CEMENTING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-CEMENTING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-CEMENTING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-CEMENTING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 28000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MODENESE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 28000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MODENESE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 28000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MODENESE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 28000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MODENESE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-LAVITA' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-LAVITA' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-LAVITA' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-LAVITA' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-FATA' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-FATA' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-FATA' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-FATA' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-CONSTRUCTION' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-CONSTRUCTION' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-CONSTRUCTION' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-CONSTRUCTION' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-EKIPIZM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-EKIPIZM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-EKIPIZM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-EKIPIZM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MATTANDMORE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MATTANDMORE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MATTANDMORE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MATTANDMORE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-WIGWAG' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-WIGWAG' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-WIGWAG' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-WIGWAG' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-PALETTA' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-PALETTA' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-PALETTA' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-PALETTA' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 53000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MARBLEMOSAIC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 53000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MARBLEMOSAIC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 53000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MARBLEMOSAIC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 53000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-MARBLEMOSAIC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-BRITZ' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-BRITZ' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-BRITZ' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-BRITZ' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-10THIRTY' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-10THIRTY' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-10THIRTY' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-10THIRTY' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-GROUT' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-GROUT' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-GROUT' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-GROUT' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 34000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-RECIPE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 34000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-RECIPE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 34000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-RECIPE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 34000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-RECIPE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-YUKAGE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-YUKAGE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-YUKAGE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 22000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-YUKAGE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 59000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-SHINELEAF' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 59000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-SHINELEAF' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 59000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-SHINELEAF' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 59000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-SHINELEAF' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 63000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-INNOCENTMARBLE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 63000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-INNOCENTMARBLE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 63000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-INNOCENTMARBLE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 63000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-INNOCENTMARBLE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-GRAVELGLASS' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-GRAVELGLASS' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-GRAVELGLASS' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TILE-GRAVELGLASS' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-GRANQUARTZ' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-GRANQUARTZ' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-GRANQUARTZ' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-GRANQUARTZ' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-ROUGHCEMENT' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-ROUGHCEMENT' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-ROUGHCEMENT' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-ROUGHCEMENT' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-VALSROCK' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-VALSROCK' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-VALSROCK' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-VALSROCK' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-STONEGRACE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-STONEGRACE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-STONEGRACE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-STONEGRACE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-ROUGHQUARTZ' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-ROUGHQUARTZ' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-ROUGHQUARTZ' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ECOCARAT-ROUGHQUARTZ' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SMALL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SMALL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SMALL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SMALL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1000' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1000' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1000' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1000' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 58000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 58000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 58000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 58000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W1800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 74000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W2800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 74000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W2800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 74000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W2800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 74000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W2800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 94000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W4000' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 94000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W4000' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 94000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W4000' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 94000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-SHELF-SMALL-W4000' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W1000' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W1000' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W1000' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W1000' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 64000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W1800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 64000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W1800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 64000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W1800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 64000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W1800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 81000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W2800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 81000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W2800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 81000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W2800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 81000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W2800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 115000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W4000' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 115000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W4000' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 115000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W4000' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 115000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-STUDY-W4000' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W1000' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W1000' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W1000' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W1000' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 103000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W1800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 103000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W1800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 103000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W1800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 103000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W1800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 141000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W2800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 141000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W2800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 141000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W2800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 141000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W2800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 192000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W4000' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 192000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W4000' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 192000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W4000' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 192000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-WORK-W4000' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-FACECOLOR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-FACECOLOR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-FACECOLOR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-FACECOLOR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-BRACKET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-BRACKET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-BRACKET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-BRACKET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-CABLEHOLE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-CABLEHOLE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-CABLEHOLE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-COUNTER-CABLEHOLE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W910' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W910' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W910' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W910' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W1820' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W1820' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W1820' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 31000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W1820' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W2730' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W2730' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W2730' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-PH-W2730' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W910' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W910' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W910' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W910' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 29000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W1820' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 29000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W1820' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 29000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W1820' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 29000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W1820' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 42000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W2730' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 42000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W2730' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 42000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W2730' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 42000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-ONLY-W2730' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W910' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W910' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W910' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W910' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W1820' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W1820' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W1820' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 41000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W1820' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W2730' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W2730' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W2730' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 61000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MAKURADANA-CHUDAN-W2730' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 21000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W910' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 21000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W910' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 21000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W910' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 21000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W910' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W1820' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W1820' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W1820' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W1820' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 52000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W2730' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 52000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W2730' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 52000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W2730' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 52000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-CHUDAN-ONLY-W2730' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-2' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-2' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-2' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 25000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-2' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-4' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-4' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-4' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 32000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-4' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-6' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-6' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-6' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C300-6' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-2' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-2' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-2' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-2' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-4' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-4' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-4' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-4' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 43000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-6' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 43000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-6' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 43000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-6' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 43000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-C450-6' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W900' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W900' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W900' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 33000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W900' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 40000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W1800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 40000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W1800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 40000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W1800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 40000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-2-W1800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 52000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W900' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 52000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W900' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 52000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W900' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 52000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W900' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 58000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W1800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 58000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W1800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 58000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W1800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 58000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-4-W1800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 84000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W900' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 84000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W900' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 84000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W900' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 84000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W900' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 94000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W1800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 94000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W1800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 94000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W1800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 94000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D300-6-W1800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W900' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W900' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W900' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W900' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W1800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W1800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W1800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-2-W1800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 63000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W900' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 63000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W900' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 63000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W900' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 63000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W900' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 70000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W1800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 70000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W1800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 70000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W1800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 70000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-4-W1800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 103000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W900' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 103000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W900' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 103000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W900' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 103000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W900' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 117000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W1800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 117000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W1800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 117000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W1800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 117000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-MOVABLE-D450-6-W1800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-2' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-2' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-2' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-2' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-HANGER-PIPE-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-LAUNDRY' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-LAUNDRY' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-LAUNDRY' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-LAUNDRY' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S1' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S1' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S1' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 71000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S1' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S2' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S2' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S2' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S2' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 141000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S3' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 141000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S3' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 141000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S3' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 141000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHELF-RESIN-S3' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P1' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P1' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P1' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P1' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P2' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P2' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P2' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P2' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P3' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P3' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P3' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 80000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P3' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P4' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P4' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P4' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-SET-P4' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-FIXED' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-FIXED' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-FIXED' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 10000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-HANGER-PIPE-FIXED' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 100000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W800' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 100000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W800' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 100000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W800' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 100000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W800' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1200' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1200' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1200' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1200' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1600' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1600' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1600' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-W1600' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORCOLOR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORDESIGN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORDESIGN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORDESIGN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-DOORDESIGN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-HANDLE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-MIRROR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-MIRROR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-MIRROR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-MIRROR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERCOLOR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERSTYLE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERSTYLE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERSTYLE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SHOEBOX-COMPORIA-COUNTERSTYLE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-BACK-SPACE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-BACK-SPACE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-BACK-SPACE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 35000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-BACK-SPACE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-STORAGE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-STORAGE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-STORAGE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 47000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-STORAGE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-STORAGE-COLOR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-STORAGE-COLOR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-STORAGE-COLOR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-STORAGE-COLOR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 53000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-SANITA-BOX' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 53000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-SANITA-BOX' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 53000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-SANITA-BOX' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 53000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-SANITA-BOX' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-UPPER-STORAGE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-UPPER-STORAGE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-UPPER-STORAGE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-TOILET-UPPER-STORAGE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 115000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-SET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 115000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-SET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 115000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-SET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 115000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-SET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-PLUMBING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-PLUMBING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-PLUMBING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-PLUMBING' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-SLOPSINK-KASAGI-COLOR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-PAN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-PAN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-PAN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-PAN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 99000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-A' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 99000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-A' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 99000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-A' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 99000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-A' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-B' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-B' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-B' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-B' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-C' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-C' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-C' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 85000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BOWL-C' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-FAUCET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-FAUCET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-FAUCET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-FAUCET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 19000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-TRAP' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 19000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-TRAP' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 19000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-TRAP' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 19000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-TRAP' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 48000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-COUNTER' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 48000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-COUNTER' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 48000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-COUNTER' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 48000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-COUNTER' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BRACKET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BRACKET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BRACKET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-BRACKET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-KASAGI' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-KASAGI' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-KASAGI' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-KASAGI' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 96000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-CORNER-SET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 96000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-CORNER-SET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 96000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-CORNER-SET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 96000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-ENTRANCE-CORNER-SET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-KACU' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-KACU' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-KACU' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-KACU' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-PID4M' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-PID4M' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-PID4M' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-PID4M' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-D' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-D' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-D' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-D' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-E' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-E' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-E' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-HOSUCREEN-LIFT-E' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 272000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STANDARD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 272000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STANDARD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 272000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STANDARD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 272000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STANDARD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 297000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-DELUXE-6' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 297000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-DELUXE-6' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 297000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-DELUXE-6' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 297000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-DELUXE-6' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 330000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-DELUXE-9' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 330000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-DELUXE-9' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 330000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-DELUXE-9' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 330000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-DELUXE-9' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 350000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-GAS' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 350000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-GAS' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 350000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-GAS' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 350000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-GAS' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STAND' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STAND' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STAND' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 30000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STAND' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 140000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STORAGE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 140000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STORAGE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 140000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STORAGE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 140000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-KANTAKUN-STORAGE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SWITCH-HOTARU' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SWITCH-HOTARU' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SWITCH-HOTARU' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 5000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SWITCH-HOTARU' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SWITCH-3WAY-4WAY' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SWITCH-3WAY-4WAY' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SWITCH-3WAY-4WAY' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-SWITCH-3WAY-4WAY' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2PORT' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2PORT' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2PORT' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2PORT' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-4PORT' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-4PORT' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-4PORT' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 8000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-4PORT' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-TV' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-TV' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-TV' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-TV' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-TEL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-TEL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-TEL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-TEL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-LAN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-LAN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-LAN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-LAN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2P-EARTH-DEDICATED' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2P-EARTH-DEDICATED' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2P-EARTH-DEDICATED' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2P-EARTH-DEDICATED' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2P-EARTH' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2P-EARTH' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2P-EARTH' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-2P-EARTH' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-AIRCON-100V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-AIRCON-100V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-AIRCON-100V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 6000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-AIRCON-100V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-AIRCON-200V' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-AIRCON-200V' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-AIRCON-200V' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-AIRCON-200V' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-FLOOR-UPCON' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-FLOOR-UPCON' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-FLOOR-UPCON' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-FLOOR-UPCON' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 9000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-S-PLATE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 9000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-S-PLATE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 9000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-S-PLATE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 9000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-S-PLATE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 72000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-ADVANCE-BASIC' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 72000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-ADVANCE-BASIC' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 72000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-ADVANCE-BASIC' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 72000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-ADVANCE-BASIC' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-ADVANCE-PREMIUM' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-ADVANCE-PREMIUM' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-ADVANCE-PREMIUM' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 120000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-OUTLET-ADVANCE-PREMIUM' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CONDUIT-LAN' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CONDUIT-LAN' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CONDUIT-LAN' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 12000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CONDUIT-LAN' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CONDUIT-WALLTV' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CONDUIT-WALLTV' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CONDUIT-WALLTV' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 15000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-CONDUIT-WALLTV' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD505KF-CHANGE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD505KF-CHANGE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD505KF-CHANGE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 37000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD505KF-CHANGE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD710KF-CHANGE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD710KF-CHANGE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD710KF-CHANGE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 50000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD710KF-CHANGE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SE50KPA-CHANGE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SE50KPA-CHANGE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SE50KPA-CHANGE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 27000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SE50KPA-CHANGE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 40000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVE310KLA-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 40000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVE310KLA-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 40000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVE310KLA-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 40000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVE310KLA-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 75000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD505KF-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 75000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD505KF-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 75000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD505KF-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 75000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD505KF-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 87000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD710KF-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 87000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD710KF-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 87000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD710KF-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 87000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SVD710KF-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 64000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SE50KPA-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 64000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SE50KPA-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 64000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SE50KPA-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 64000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-SE50KPA-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD623-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD623-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD623-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD623-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD618-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD618-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD618-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 18000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD618-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD616-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD616-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD616-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 20000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-WD616-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-V632K-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-V632K-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-V632K-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 24000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-V632K-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 62000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-VH673K-ADD' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 62000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-VH673K-ADD' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 62000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-VH673K-ADD' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 62000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-INTERCOM-VH673K-ADD' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 235000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-6' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 235000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-6' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 235000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-6' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 235000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-6' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 274000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-10' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 274000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-10' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 274000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-10' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 274000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-10' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 300000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-14' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 300000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-14' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 300000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-14' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 300000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-MITSUBISHI-Z-14' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 165000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-6' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 165000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-6' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 165000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-6' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 165000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-6' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 188000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-10' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 188000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-10' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 188000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-10' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 188000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-10' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 218000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-14' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 218000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-14' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 218000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-14' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 218000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-GX-14' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-6' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-6' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-6' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 110000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-6' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-10' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-10' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-10' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 150000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-10' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 192000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-14' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 192000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-14' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 192000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-14' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 192000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-AIRCON-DAIKIN-E-14' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOWNLIGHT-BASE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOWNLIGHT-BASE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOWNLIGHT-BASE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 60000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOWNLIGHT-BASE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOWNLIGHT-ADDITIONAL' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOWNLIGHT-ADDITIONAL' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOWNLIGHT-ADDITIONAL' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 3000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-DOWNLIGHT-ADDITIONAL' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-MIXER-FAUCET' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-MIXER-FAUCET' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-MIXER-FAUCET' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 36000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-LAUNDRY-MIXER-FAUCET' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NANOBUBBLE-BEAUTYAQUA' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NANOBUBBLE-BEAUTYAQUA' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NANOBUBBLE-BEAUTYAQUA' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 200000, false, true
FROM items i, products p
WHERE i.item_code = 'INT-NANOBUBBLE-BEAUTYAQUA' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-PAPER-HOLDER-DOUBLE' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-TOWEL-BAR' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-TOWEL-BAR' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-TOWEL-BAR' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-TOWEL-BAR' AND p.code = 'LIFE+'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-TOWEL-RING' AND p.code = 'LACIE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-TOWEL-RING' AND p.code = 'HOURS'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-TOWEL-RING' AND p.code = 'LIFE'
ON CONFLICT (item_id, variant_id, product_id) DO UPDATE SET price = EXCLUDED.price, is_standard = EXCLUDED.is_standard;
INSERT INTO item_pricing (item_id, product_id, price, is_standard, is_available)
SELECT i.id, p.id, 0, true, true
FROM items i, products p
WHERE i.item_code = 'INT-ACCESSORY-TOWEL-RING' AND p.code = 'LIFE+'
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
WHERE c.category_type = 'interior'
GROUP BY c.name, c.display_order
ORDER BY c.display_order;
