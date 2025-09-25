-- ========================================
-- Supabase Storage Bucket Setup
-- ========================================
-- このSQLをSupabaseのSQL Editorで実行してください

-- 1. Storage bucketを作成（既に存在する場合はスキップ）
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'product-images',
  'product-images',
  true, -- publicアクセスを許可
  5242880, -- 5MB制限
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

-- 2. Storage Policies（RLS）を設定
-- 注意: これらのポリシーはSupabaseダッシュボードのStorageセクションで設定することも可能です

-- 全員に読み取り権限を付与（publicバケットなので）
CREATE POLICY "Public Access for product-images"
ON storage.objects FOR SELECT
USING (bucket_id = 'product-images');

-- 認証されたユーザーにアップロード権限を付与
CREATE POLICY "Authenticated users can upload product images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

-- 認証されたユーザーに更新権限を付与
CREATE POLICY "Authenticated users can update product images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

-- 認証されたユーザーに削除権限を付与
CREATE POLICY "Authenticated users can delete product images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'product-images'
  AND auth.role() = 'authenticated'
);

-- 3. バケットの設定を確認
SELECT * FROM storage.buckets WHERE id = 'product-images';

-- ========================================
-- 使用方法:
-- ========================================
-- 1. Supabaseダッシュボードにログイン
-- 2. SQL Editorに移動
-- 3. 上記のSQLを実行
-- 4. Storageタブで'product-images'バケットが作成されていることを確認
-- ========================================