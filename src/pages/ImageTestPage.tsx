import { useState } from 'react';
import { ImageUpload } from '../components/admin/ImageUpload';
import type { ProductImage } from '../lib/supabase';

export function ImageTestPage() {
  const [uploadedImages, setUploadedImages] = useState<ProductImage[]>([]);
  const [testProductCode] = useState('TEST_PRODUCT_001');

  const handleUploadComplete = (images: ProductImage[]) => {
    setUploadedImages(prev => [...prev, ...images]);
    console.log('Uploaded images:', images);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">画像アップロードテスト</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">商品情報</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">製品コード:</span> {testProductCode}
            </div>
            <div>
              <span className="font-medium">製品名:</span> テスト製品
            </div>
            <div>
              <span className="font-medium">カテゴリ:</span> Exterior
            </div>
            <div>
              <span className="font-medium">サブカテゴリ:</span> Door
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">画像アップロード</h2>
          <ImageUpload
            productCode={testProductCode}
            productName="テスト製品"
            category="Exterior"
            subcategory="Door"
            onUploadComplete={handleUploadComplete}
            existingImages={uploadedImages}
          />
        </div>

        {uploadedImages.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-xl font-semibold mb-4">アップロード済み画像の詳細</h2>
            <div className="space-y-4">
              {uploadedImages.map((image, index) => (
                <div key={image.id || index} className="border rounded p-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium">ID:</span> {image.id}
                    </div>
                    <div>
                      <span className="font-medium">ファイル名:</span> {image.file_name}
                    </div>
                    <div>
                      <span className="font-medium">サイズ:</span> {image.file_size ? `${(image.file_size / 1024).toFixed(2)} KB` : 'N/A'}
                    </div>
                    <div>
                      <span className="font-medium">タイプ:</span> {image.mime_type}
                    </div>
                    <div>
                      <span className="font-medium">メイン画像:</span> {image.is_primary ? 'はい' : 'いいえ'}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium">URL:</span>
                      <a href={image.image_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                        {image.image_url}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">使用方法</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>上記のアップロードエリアをクリックするか、画像をドラッグ＆ドロップ</li>
            <li>複数の画像を一度に選択可能（最初の画像が自動的にメイン画像になります）</li>
            <li>対応形式: JPEG, PNG, GIF, WebP, SVG</li>
            <li>最大ファイルサイズ: 5MB</li>
            <li>アップロード後、画像にマウスオーバーすると削除・メイン画像設定が可能</li>
          </ol>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
          <h3 className="font-semibold text-yellow-800 mb-2">注意事項</h3>
          <ul className="list-disc list-inside text-sm text-yellow-700 space-y-1">
            <li>Supabaseのバケット（product-images）が作成されている必要があります</li>
            <li>product_imagesテーブルが作成されている必要があります</li>
            <li>環境変数（.env）にSupabaseの認証情報が設定されている必要があります</li>
          </ul>
        </div>
      </div>
    </div>
  );
}