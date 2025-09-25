# Supabase Storage Setup Guide

## 1. バケットの作成

Supabaseダッシュボードで以下の手順を実行してください：

### 方法1: SQL Editorを使用（推奨）

1. Supabaseダッシュボードにログイン
2. 左メニューから「SQL Editor」を選択
3. `sql/create_storage_bucket.sql`の内容をコピーして実行

### 方法2: UIから作成

1. Supabaseダッシュボードの「Storage」セクションへ移動
2. 「New bucket」をクリック
3. 以下の設定で作成：
   - Bucket name: `product-images`
   - Public bucket: ✅ ON
   - File size limit: 5MB
   - Allowed MIME types:
     - image/jpeg
     - image/png
     - image/gif
     - image/webp
     - image/svg+xml

## 2. RLS（Row Level Security）ポリシー設定

### Storage ポリシー

Storageタブ > Policies から以下を設定：

1. **SELECT（読み取り）ポリシー**
   - Policy name: `Public Access for product-images`
   - Target roles: `anon, authenticated`
   - WITH CHECK: `true`

2. **INSERT（アップロード）ポリシー**
   - Policy name: `Authenticated users can upload`
   - Target roles: `authenticated`
   - WITH CHECK: `bucket_id = 'product-images'`

3. **UPDATE（更新）ポリシー**
   - Policy name: `Authenticated users can update`
   - Target roles: `authenticated`
   - USING: `bucket_id = 'product-images'`

4. **DELETE（削除）ポリシー**
   - Policy name: `Authenticated users can delete`
   - Target roles: `authenticated`
   - USING: `bucket_id = 'product-images'`

## 3. データベーステーブル作成

SQL Editorで`sql/create_product_images_table.sql`を実行してください。

## 4. 環境変数の設定

`.env`ファイルに以下を追加：

```env
VITE_SUPABASE_URL=https://pnurwehyjmiyevwtekip.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBudXJ3ZWh5am1peWV2d3Rla2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3NTEwODQsImV4cCI6MjA3NDMyNzA4NH0.K7JybxT95cElbF-FXLBDHvHQ4S-FrphP1E9cScSKJoo
```

## 5. 使用方法

### 画像アップロード

```typescript
import { ImageService } from './services/imageService';

// 単一画像のアップロード
const file = event.target.files[0];
const result = await ImageService.uploadProductImage(
  file,
  'PRODUCT_CODE_001',
  'Product Name',
  'Exterior',
  'Door',
  true // isPrimary
);

// 複数画像の一括アップロード
const files = Array.from(event.target.files);
const results = await ImageService.batchUploadImages(
  files,
  'PRODUCT_CODE_001',
  'Product Name',
  'Exterior',
  'Door'
);
```

### 画像の取得

```typescript
// 商品の全画像を取得
const images = await ImageService.getProductImages('PRODUCT_CODE_001');

// メイン画像のみ取得
const primaryImage = await ImageService.getPrimaryImage('PRODUCT_CODE_001');

// カテゴリー別に取得
const categoryImages = await ImageService.getImagesByCategory('Exterior');
```

## トラブルシューティング

### バケットが見つからない場合
- SQL Editorで`SELECT * FROM storage.buckets;`を実行して確認
- バケットが存在しない場合は`sql/create_storage_bucket.sql`を再実行

### アップロードエラーの場合
- ファイルサイズが5MB以下か確認
- MIMEタイプが許可されているか確認
- ネットワーク接続を確認

### 画像が表示されない場合
- バケットがpublicに設定されているか確認
- RLSポリシーが正しく設定されているか確認
- URLが正しく生成されているか確認