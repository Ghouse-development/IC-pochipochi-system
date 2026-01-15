-- 管理者ユーザーの追加
-- hn@g-house.osaka.jp を管理者として登録
--
-- 注意: このSQLを実行する前に、Supabase Auth でユーザーを作成済みであること
-- Auth管理画面: https://supabase.com/dashboard/project/qqzqffkiyzeaampotgnn/auth/users

-- ===============================
-- 方法1: auth.usersから直接取得（推奨）
-- ===============================
INSERT INTO users (auth_id, email, full_name, role, is_active)
SELECT
  id as auth_id,
  email,
  '管理者' as full_name,
  'super_admin'::user_role as role,
  true as is_active
FROM auth.users
WHERE email = 'hn@g-house.osaka.jp'
ON CONFLICT (auth_id) DO UPDATE SET
  role = 'super_admin'::user_role,
  is_active = true,
  updated_at = NOW();

-- ===============================
-- 方法2: メールアドレスで既存レコードを更新
-- （auth_idがすでに設定されている場合）
-- ===============================
UPDATE users SET
  role = 'super_admin'::user_role,
  is_active = true,
  updated_at = NOW()
WHERE email = 'hn@g-house.osaka.jp';

-- ===============================
-- 確認用クエリ
-- ===============================
-- SELECT id, auth_id, email, role, is_active FROM users WHERE email = 'hn@g-house.osaka.jp';

-- ===============================
-- auth.usersの状態確認（管理者のみ実行可能）
-- ===============================
-- SELECT id, email, created_at FROM auth.users WHERE email = 'hn@g-house.osaka.jp';
