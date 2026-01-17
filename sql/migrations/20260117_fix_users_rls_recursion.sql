-- usersテーブルのRLSポリシー修正（無限再帰問題を解決）
-- 問題: "Admins can read all users"ポリシーがusersテーブル内で自分自身を参照し、無限再帰が発生

-- ========================================
-- 方法1: シンプルな解決策（推奨）
-- 全ての認証済みユーザーが自分のデータを読めるようにする
-- 管理者チェックはアプリケーション側で行う
-- ========================================

-- 既存のポリシーを全て削除
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can read their own profile" ON users;
DROP POLICY IF EXISTS "Enable read access for users" ON users;
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Admins can insert users" ON users;
DROP POLICY IF EXISTS "Admins can update all users" ON users;
DROP POLICY IF EXISTS "Allow authenticated users to read users" ON users;
DROP POLICY IF EXISTS "Allow self insert" ON users;
DROP POLICY IF EXISTS "Allow self update" ON users;

-- 1. 認証済みユーザーは全ユーザーを読み取れる（管理画面のユーザー一覧表示用）
-- 実際の権限チェックはアプリケーション側で行う
CREATE POLICY "Allow authenticated users to read all users" ON users
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- 2. ユーザーは自分自身のデータを更新できる
CREATE POLICY "Allow self update" ON users
  FOR UPDATE
  USING (auth.uid() = auth_id)
  WITH CHECK (auth.uid() = auth_id);

-- 3. 認証済みユーザーは新規ユーザーを作成できる（初回ログイン時の自動作成用）
-- auth_idが自分自身の場合のみ
CREATE POLICY "Allow self insert" ON users
  FOR INSERT
  WITH CHECK (auth.uid() = auth_id);

-- 4. サービスロール（管理者API）用のポリシー
-- service_roleは既にRLSをバイパスするため、追加のポリシーは不要

-- ========================================
-- 確認用クエリ
-- ========================================
-- SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
-- FROM pg_policies
-- WHERE tablename = 'users';
