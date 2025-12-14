import React, { useState, useRef, useEffect } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { ImageService } from '../../services/imageService';
import type { ProductImage } from '../../lib/supabase';
import { createLogger } from '../../lib/logger';

const logger = createLogger('ImageUpload');

interface ImageUploadProps {
  productCode: string;
  productName?: string;
  category?: string;
  subcategory?: string;
  onUploadComplete?: (images: ProductImage[]) => void;
  existingImages?: ProductImage[];
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  productCode,
  productName,
  category,
  subcategory,
  onUploadComplete,
  existingImages = []
}) => {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState<ProductImage[]>(existingImages);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 許可する画像形式（SVGを除外してXSSリスクを回避）
  const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  const ACCEPT_STRING = ALLOWED_IMAGE_TYPES.join(',');

  // ObjectURLのクリーンアップ（コンポーネントアンマウント時）
  useEffect(() => {
    return () => {
      previewUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [previewUrls]);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    // ファイルタイプのバリデーション
    const validFiles = Array.from(files).filter(file => {
      if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        logger.warn(`Invalid file type: ${file.type}. Allowed: ${ALLOWED_IMAGE_TYPES.join(', ')}`);
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) {
      return;
    }

    setUploading(true);

    try {
      // Create preview URLs
      const previews = validFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls(previews);

      // Upload images
      const uploadedImages = await ImageService.batchUploadImages(
        validFiles,
        productCode,
        productName,
        category,
        subcategory
      );

      if (uploadedImages.length > 0) {
        setImages([...images, ...uploadedImages]);
        onUploadComplete?.(uploadedImages);
      }

      // Clear preview URLs
      previews.forEach(url => URL.revokeObjectURL(url));
      setPreviewUrls([]);
    } catch (error) {
      logger.error('Error uploading images:', error);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDeleteImage = async (imageId: string, imagePath?: string) => {
    const success = await ImageService.deleteImage(imageId, imagePath);
    if (success) {
      setImages(images.filter(img => img.id !== imageId));
    }
  };

  const handleSetPrimary = async (imageId: string) => {
    const success = await ImageService.setPrimaryImage(productCode, imageId);
    if (success) {
      setImages(images.map(img => ({
        ...img,
        is_primary: img.id === imageId
      })));
    }
  };

  return (
    <div className="space-y-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={ACCEPT_STRING}
          onChange={handleFileSelect}
          className="hidden"
          disabled={uploading}
          aria-label="画像ファイルを選択"
          id="image-upload-input"
        />

        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="w-full flex flex-col items-center justify-center space-y-2 text-gray-600 hover:text-gray-800 disabled:opacity-50"
        >
          {uploading ? (
            <>
              <Loader2 className="h-12 w-12 animate-spin" />
              <span>アップロード中...</span>
            </>
          ) : (
            <>
              <Upload className="h-12 w-12" />
              <span>画像をアップロード</span>
              <span className="text-sm text-gray-500">
                クリックまたはドラッグ＆ドロップ
              </span>
            </>
          )}
        </button>
      </div>

      {/* Preview URLs */}
      {previewUrls.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
          {previewUrls.map((url) => (
            <div key={url} className="relative">
              <img
                src={url}
                alt="Preview"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <Loader2 className="h-8 w-8 text-white animate-spin" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Uploaded Images */}
      {images.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">アップロード済み画像</h3>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative group">
                <img
                  src={image.image_url}
                  alt={image.file_name}
                  className="w-full h-32 object-cover rounded-lg"
                />

                {image.is_primary && (
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    メイン
                  </div>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                  {!image.is_primary && (
                    <button
                      onClick={() => image.id && handleSetPrimary(image.id)}
                      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      title="メイン画像に設定"
                    >
                      <ImageIcon className="h-4 w-4" />
                    </button>
                  )}
                  <button
                    onClick={() => image.id && handleDeleteImage(image.id, image.image_path)}
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                    title="削除"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};