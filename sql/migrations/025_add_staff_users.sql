-- 社内スタッフ（設計担当・IC担当）を追加
-- 2026-01-17

-- 設計担当（10名）
INSERT INTO users (email, full_name, role, phone, is_active)
VALUES
  ('ts@g-house.osaka.jp', '田中 聡', 'coordinator', '07023038643', true),
  ('kitamura-k@g-house.osaka.jp', '北村 晃平', 'coordinator', '09062978521', true),
  ('takahama-h@g-house.osaka.jp', '高濱 洋文', 'coordinator', '08066159788', true),
  ('hayashi-t@g-house.osaka.jp', '林 恭生', 'coordinator', '09035313531', true),
  ('adachi-m@g-house.osaka.jp', '足立 雅哉', 'coordinator', '08065594469', true),
  ('naito-s@g-house.osaka.jp', '内藤 智之', 'coordinator', '08065594771', true),
  ('shono-y@g-house.osaka.jp', '荘野 善宏', 'coordinator', '08059893583', true),
  ('wakasa-r@g-house.osaka.jp', '若狭 龍成', 'coordinator', '08066159802', true),
  ('ishii-y@g-house.osaka.jp', '石井 義信', 'coordinator', '08053794124', true),
  ('minoura-s@g-house.osaka.jp', '箕浦 三四郎', 'coordinator', '08058661886', true)
ON CONFLICT (email) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  phone = EXCLUDED.phone,
  is_active = true;

-- IC担当（9名）
INSERT INTO users (email, full_name, role, phone, is_active)
VALUES
  ('yn@g-house.osaka.jp', '柳川 奈緒', 'coordinator', '08093395946', true),
  ('ny@g-house.osaka.jp', '西川 由佳', 'coordinator', '08098297592', true),
  ('furukubo-c@g-house.osaka.jp', '古久保 知佳子', 'coordinator', '09029038363', true),
  ('shimada-m@g-house.osaka.jp', '島田 真奈', 'coordinator', '08059891760', true),
  ('yoshikawa-y@g-house.osaka.jp', '吉川 侑希', 'coordinator', '08065265806', true),
  ('nakagawa-c@g-house.osaka.jp', '中川 千尋', 'coordinator', '08065594441', true),
  ('imamura-s@g-house.osaka.jp', '今村 珠梨', 'coordinator', '08065594442', true),
  ('urakawa-c@g-house.osaka.jp', '浦川 千夏', 'coordinator', '08066443574', true),
  ('morinaga-n@g-house.osaka.jp', '森永 凪子', 'coordinator', '08053749250', true)
ON CONFLICT (email) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  phone = EXCLUDED.phone,
  is_active = true;
