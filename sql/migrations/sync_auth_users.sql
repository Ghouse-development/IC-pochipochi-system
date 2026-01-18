-- Supabase Auth users を public.users テーブルに同期
-- 既存のユーザーは更新せず、新規ユーザーのみ追加

-- 20名のスタッフ情報（設計担当10名 + IC担当9名 + システム管理者1名）
-- 参照: 要件ファイル②-⑤

-- auth.usersから未同期のユーザーをpublic.usersに追加
INSERT INTO public.users (auth_id, email, full_name, role, is_active)
SELECT
  au.id as auth_id,
  au.email,
  COALESCE(
    au.raw_user_meta_data->>'full_name',
    au.raw_user_meta_data->>'name',
    REPLACE(REPLACE(SPLIT_PART(au.email, '@', 1), '-', ' '), '_', ' ')
  ) as full_name,
  CASE
    WHEN au.email = 'hn@g-house.osaka.jp' THEN 'admin'::user_role
    ELSE 'coordinator'::user_role
  END as role,
  true as is_active
FROM auth.users au
WHERE au.email IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM public.users pu
    WHERE pu.auth_id = au.id OR LOWER(pu.email) = LOWER(au.email)
  )
ON CONFLICT (auth_id) DO NOTHING;

-- 結果確認
SELECT
  id,
  auth_id,
  email,
  full_name,
  role,
  is_active,
  created_at
FROM public.users
ORDER BY role, full_name;
