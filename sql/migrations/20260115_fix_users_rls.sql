-- ユーザーが自分自身のデータを読み取れるようにRLSポリシーを追加

-- 既存のポリシーを削除（存在する場合）
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can read their own profile" ON users;
DROP POLICY IF EXISTS "Enable read access for users" ON users;

-- ユーザーが自分自身のデータを読み取れるポリシーを追加
CREATE POLICY "Users can read own data" ON users
  FOR SELECT
  USING (auth.uid() = auth_id);

-- 管理者は全ユーザーを読み取れる
DROP POLICY IF EXISTS "Admins can read all users" ON users;
CREATE POLICY "Admins can read all users" ON users
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users u
      WHERE u.auth_id = auth.uid()
      AND u.role IN ('admin', 'super_admin')
    )
  );

-- 認証済みユーザーは自分のデータを更新できる
DROP POLICY IF EXISTS "Users can update own data" ON users;
CREATE POLICY "Users can update own data" ON users
  FOR UPDATE
  USING (auth.uid() = auth_id);

-- 管理者はユーザーを作成できる
DROP POLICY IF EXISTS "Admins can insert users" ON users;
CREATE POLICY "Admins can insert users" ON users
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users u
      WHERE u.auth_id = auth.uid()
      AND u.role IN ('admin', 'super_admin')
    )
  );

-- 管理者は全ユーザーを更新できる
DROP POLICY IF EXISTS "Admins can update all users" ON users;
CREATE POLICY "Admins can update all users" ON users
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM users u
      WHERE u.auth_id = auth.uid()
      AND u.role IN ('admin', 'super_admin')
    )
  );
