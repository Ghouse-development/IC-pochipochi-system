-- RLSポリシーからsuper_admin参照を削除（enum値として存在しないため）
-- 最高権限はadminに統一

-- 既存のポリシーを削除
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Admins can insert users" ON users;
DROP POLICY IF EXISTS "Admins can update all users" ON users;

-- ユーザーが自分自身のデータを読み取れるポリシー
CREATE POLICY "Users can read own data" ON users
  FOR SELECT
  USING (auth.uid() = auth_id);

-- 管理者は全ユーザーを読み取れる（adminのみ、super_adminは存在しない）
CREATE POLICY "Admins can read all users" ON users
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users u
      WHERE u.auth_id = auth.uid()
      AND u.role = 'admin'
    )
  );

-- 認証済みユーザーは自分のデータを更新できる
CREATE POLICY "Users can update own data" ON users
  FOR UPDATE
  USING (auth.uid() = auth_id);

-- 管理者はユーザーを作成できる
CREATE POLICY "Admins can insert users" ON users
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users u
      WHERE u.auth_id = auth.uid()
      AND u.role = 'admin'
    )
    OR NOT EXISTS (SELECT 1 FROM users) -- 最初のユーザー登録を許可
  );

-- 管理者は全ユーザーを更新できる
CREATE POLICY "Admins can update all users" ON users
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM users u
      WHERE u.auth_id = auth.uid()
      AND u.role = 'admin'
    )
  );

-- RLSが有効になっていることを確認
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
