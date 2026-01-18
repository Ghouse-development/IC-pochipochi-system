-- 管理者「村上 由貴子」を追加
-- 2026-01-18
-- Email: my@g-house.osaka.jp
-- Phone: 090-6830-8505

-- 1. usersテーブルに追加
INSERT INTO users (email, full_name, phone, role, is_active)
VALUES (
  'my@g-house.osaka.jp',
  '村上 由貴子',
  '090-6830-8505',
  'admin',
  true
)
ON CONFLICT (email) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  phone = EXCLUDED.phone,
  role = 'admin',
  is_active = true,
  updated_at = NOW();

-- 確認用クエリ
-- SELECT * FROM users WHERE email = 'my@g-house.osaka.jp';
