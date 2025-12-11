-- ========================================
-- Supabase Storage バケット設定
-- ========================================
-- Supabase ダッシュボード > Storage > New bucket から作成するか、
-- このSQLをSQL Editorで実行してください
-- ========================================

-- アイテム画像用バケット
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'item-images',
  'item-images',
  true,
  10485760, -- 10MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 10485760,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

-- プロジェクト資料用バケット（見積書、仕様書等）
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'project-documents',
  'project-documents',
  false,
  52428800, -- 50MB
  ARRAY['application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
)
ON CONFLICT (id) DO UPDATE SET
  public = false,
  file_size_limit = 52428800,
  allowed_mime_types = ARRAY['application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];

-- 会社ロゴ・システム画像用バケット
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'system-assets',
  'system-assets',
  true,
  5242880, -- 5MB
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'];

-- ========================================
-- Storage RLS ポリシー
-- ========================================

-- item-images: 誰でも閲覧可、認証ユーザーのみアップロード可
CREATE POLICY "Public can view item images"
ON storage.objects FOR SELECT
USING (bucket_id = 'item-images');

CREATE POLICY "Authenticated users can upload item images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'item-images');

CREATE POLICY "Authenticated users can update item images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'item-images');

CREATE POLICY "Authenticated users can delete item images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'item-images');

-- project-documents: プロジェクトメンバーのみアクセス可
CREATE POLICY "Project members can view documents"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'project-documents'
);

CREATE POLICY "Authenticated users can upload documents"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'project-documents');

CREATE POLICY "Authenticated users can delete documents"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'project-documents');

-- system-assets: 誰でも閲覧可、認証ユーザーのみアップロード可
CREATE POLICY "Public can view system assets"
ON storage.objects FOR SELECT
USING (bucket_id = 'system-assets');

CREATE POLICY "Authenticated users can manage system assets"
ON storage.objects FOR ALL
TO authenticated
USING (bucket_id = 'system-assets')
WITH CHECK (bucket_id = 'system-assets');

-- ========================================
-- 完了メッセージ
-- ========================================

DO $$
BEGIN
  RAISE NOTICE 'Storageバケットが正常に作成されました。';
END
$$;
