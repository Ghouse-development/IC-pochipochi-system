import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Plus,
  Trash2,
  Image as ImageIcon,
  Palette,
  Save,
  X,
  Check,
  Link,
  AlertCircle,
  Upload,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { itemVariantsApi, itemVariantImagesApi } from '../../services/api';
import type { ItemVariant, ItemVariantImage } from '../../types/database';
import { useToast } from '../common/Toast';
import { createLogger } from '../../lib/logger';
import { supabase, STORAGE_BUCKETS } from '../../lib/supabase';

const logger = createLogger('ItemVariantManager');

interface ItemVariantManagerProps {
  itemId: string;
  itemName: string;
  variants: ItemVariant[];
  onVariantsChange: () => void;
}

// 許可する画像形式
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export function ItemVariantManager({
  itemId,
  itemName: _itemName,
  variants: initialVariants,
  onVariantsChange,
}: ItemVariantManagerProps) {
  // Note: _itemName is reserved for future use (e.g., in confirmation dialogs)
  const toast = useToast();
  const [variants, setVariants] = useState<ItemVariant[]>(initialVariants);
  const [editingVariant, setEditingVariant] = useState<ItemVariant | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [draggingOverVariantId, setDraggingOverVariantId] = useState<string | null>(null);
  const [uploadingVariantId, setUploadingVariantId] = useState<string | null>(null);

  useEffect(() => {
    setVariants(initialVariants);
  }, [initialVariants]);

  // バリアントカードへの直接画像アップロード
  const uploadImageToVariant = async (variantId: string, files: File[]) => {
    const validFiles = files.filter(file => ALLOWED_IMAGE_TYPES.includes(file.type));
    if (validFiles.length === 0) {
      toast.error('エラー', '対応形式: JPEG, PNG, WebP, GIF');
      return;
    }

    const variant = variants.find(v => v.id === variantId);
    if (!variant) return;

    setUploadingVariantId(variantId);

    try {
      for (const file of validFiles) {
        const timestamp = Date.now();
        const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filePath = `variants/${itemId}/${timestamp}_${safeName}`;

        // Supabase Storageにアップロード
        const { data, error } = await supabase.storage
          .from(STORAGE_BUCKETS.ITEM_IMAGES)
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false,
          });

        if (error) {
          logger.error('Upload error:', error);
          toast.error('アップロード失敗', `${file.name}: ${error.message}`);
          continue;
        }

        // 公開URLを取得
        const { data: urlData } = supabase.storage
          .from(STORAGE_BUCKETS.ITEM_IMAGES)
          .getPublicUrl(data.path);

        // DBに画像を登録
        await itemVariantImagesApi.create({
          variant_id: variantId,
          image_url: urlData.publicUrl,
          thumbnail_url: urlData.publicUrl,
          alt_text: variant.color_name || file.name,
          is_primary: !variant.images || variant.images.length === 0,
          display_order: variant.images?.length || 0,
        });
      }

      toast.success('アップロード完了', `${validFiles.length}枚の画像を追加しました`);
      onVariantsChange(); // リフレッシュ
    } catch (err) {
      logger.error('Upload exception:', err);
      toast.error('アップロード失敗', '画像の保存に失敗しました');
    } finally {
      setUploadingVariantId(null);
    }
  };

  // カードへのドラッグ&ドロップハンドラー
  const handleCardDragEnter = (e: React.DragEvent, variantId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingOverVariantId(variantId);
  };

  const handleCardDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingOverVariantId(null);
  };

  const handleCardDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleCardDrop = (e: React.DragEvent, variantId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingOverVariantId(null);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      uploadImageToVariant(variantId, files);
    }
  };

  const handleCreateVariant = () => {
    setEditingVariant({
      id: '',
      item_id: itemId,
      variant_code: '',
      color_name: '',
      color_code: '',
      description: '',
      is_active: true,
      is_hit: false,
      display_order: variants.length,
      created_at: '',
      updated_at: '',
      images: [],
    });
    setIsCreating(true);
  };

  const handleEditVariant = (variant: ItemVariant) => {
    setEditingVariant({ ...variant });
    setIsCreating(false);
  };

  const handleDeleteVariant = async (variantId: string) => {
    if (!confirm('このバリエーションを削除してもよろしいですか？')) return;

    try {
      await itemVariantsApi.delete(variantId);
      setVariants(prev => prev.filter(v => v.id !== variantId));
      toast.success('削除完了', 'バリエーションを削除しました');
      onVariantsChange();
    } catch (err) {
      logger.error('Failed to delete variant:', err);
      toast.error('エラー', 'バリエーションの削除に失敗しました');
    }
  };

  const handleSaveVariant = async (variant: ItemVariant, images: ItemVariantImage[]) => {
    setIsSaving(true);

    try {
      let savedVariant: ItemVariant;

      if (isCreating) {
        // Create new variant
        savedVariant = await itemVariantsApi.create({
          item_id: itemId,
          variant_code: variant.variant_code || `${itemId}_${variant.color_name}`,
          color_name: variant.color_name,
          color_code: variant.color_code || undefined,
          is_hit: variant.is_hit || undefined,
        });
      } else {
        // Update existing variant
        savedVariant = await itemVariantsApi.update(variant.id, {
          color_name: variant.color_name,
          color_code: variant.color_code || undefined,
          description: variant.description || undefined,
          is_hit: variant.is_hit,
        });
      }

      // Save images
      for (const image of images) {
        if (image.id.startsWith('new_') || image.id.startsWith('url_')) {
          // New image - create
          await itemVariantImagesApi.create({
            variant_id: savedVariant.id,
            image_url: image.image_url,
            thumbnail_url: image.thumbnail_url || image.image_url,
            alt_text: image.alt_text || variant.color_name,
            is_primary: image.is_primary,
            display_order: image.display_order,
          });
        }
      }

      toast.success('保存完了', 'バリエーションを保存しました');
      setEditingVariant(null);
      setIsCreating(false);
      onVariantsChange();
    } catch (err) {
      logger.error('Failed to save variant:', err);
      toast.error('エラー', 'バリエーションの保存に失敗しました');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-900">
          バリエーション（色）一覧
        </h4>
        <button
          onClick={handleCreateVariant}
          className="flex items-center gap-2 px-3 py-1.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm"
        >
          <Plus className="w-4 h-4" />
          色を追加
        </button>
      </div>

      {variants.length === 0 ? (
        <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
          <Palette className="w-12 h-12 mx-auto mb-2 text-gray-300" />
          <p>バリエーションがありません</p>
          <p className="text-sm mt-1">「色を追加」ボタンで登録してください</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {variants.map(variant => {
            const isUploading = uploadingVariantId === variant.id;
            const isDragOver = draggingOverVariantId === variant.id;

            return (
              <div
                key={variant.id}
                onDragEnter={(e) => handleCardDragEnter(e, variant.id)}
                onDragLeave={handleCardDragLeave}
                onDragOver={handleCardDragOver}
                onDrop={(e) => handleCardDrop(e, variant.id)}
                className={`bg-white border-2 rounded-lg overflow-hidden transition-all ${
                  isDragOver
                    ? 'border-teal-500 shadow-lg scale-[1.02]'
                    : 'border-gray-200 hover:shadow-md'
                }`}
              >
                {/* Thumbnail with Drop Overlay */}
                <div className="aspect-square bg-gray-100 relative">
                  {variant.images && variant.images.length > 0 ? (
                    <img
                      src={variant.images.find(i => i.is_primary)?.image_url || variant.images[0].image_url}
                      alt={variant.color_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-gray-300" />
                    </div>
                  )}

                  {/* ドラッグオーバー時のオーバーレイ */}
                  {isDragOver && (
                    <div className="absolute inset-0 bg-teal-500/80 flex flex-col items-center justify-center text-white">
                      <Upload className="w-10 h-10 mb-2" />
                      <p className="text-sm font-medium">ドロップして追加</p>
                    </div>
                  )}

                  {/* アップロード中のオーバーレイ */}
                  {isUploading && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white">
                      <Loader2 className="w-10 h-10 mb-2 animate-spin" />
                      <p className="text-sm">アップロード中...</p>
                    </div>
                  )}

                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    {variant.images?.length || 0}枚
                  </div>
                </div>

                {/* HIT badge */}
                {variant.is_hit && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-1.5 py-0.5 rounded-full text-xs font-bold flex items-center gap-0.5 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    HIT
                  </div>
                )}

                {/* Info */}
                <div className="p-3">
                  <h5 className="font-medium text-gray-900 truncate">{variant.color_name}</h5>
                  {variant.color_code && (
                    <p className="text-sm text-gray-500 truncate">{variant.color_code}</p>
                  )}
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleEditVariant(variant)}
                      className="flex-1 px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                    >
                      編集
                    </button>
                    <button
                      onClick={() => handleDeleteVariant(variant.id)}
                      className="px-2 py-1 text-sm text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit Modal */}
      {editingVariant && (
        <VariantEditModal
          variant={editingVariant}
          isCreating={isCreating}
          isSaving={isSaving}
          onSave={handleSaveVariant}
          onClose={() => {
            setEditingVariant(null);
            setIsCreating(false);
          }}
        />
      )}
    </div>
  );
}

// Variant Edit Modal
function VariantEditModal({
  variant,
  isCreating,
  isSaving,
  onSave,
  onClose,
}: {
  variant: ItemVariant;
  isCreating: boolean;
  isSaving: boolean;
  onSave: (variant: ItemVariant, images: ItemVariantImage[]) => void;
  onClose: () => void;
}) {
  const toast = useToast();
  const [formData, setFormData] = useState({
    color_name: variant.color_name,
    color_code: variant.color_code || '',
    description: variant.description || '',
    is_hit: variant.is_hit || false,
  });
  const [images, setImages] = useState<ItemVariantImage[]>(variant.images || []);
  const [imageUrl, setImageUrl] = useState('');
  const [urlError, setUrlError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // ドラッグ&ドロップハンドラー
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // dropZone外に出た時のみfalseにする
    if (dropZoneRef.current && !dropZoneRef.current.contains(e.relatedTarget as Node)) {
      setIsDragging(false);
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  // ファイルアップロード処理
  const uploadFiles = async (files: File[]) => {
    const validFiles = files.filter(file => ALLOWED_IMAGE_TYPES.includes(file.type));

    if (validFiles.length === 0) {
      toast.error('エラー', '対応形式: JPEG, PNG, WebP, GIF');
      return;
    }

    setIsUploading(true);
    setUploadProgress(validFiles.map(f => f.name));

    const newImages: ItemVariantImage[] = [];

    for (const file of validFiles) {
      try {
        // ファイル名を生成（タイムスタンプ + オリジナル名）
        const timestamp = Date.now();
        const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filePath = `variants/${variant.item_id}/${timestamp}_${safeName}`;

        // Supabase Storageにアップロード
        const { data, error } = await supabase.storage
          .from(STORAGE_BUCKETS.ITEM_IMAGES)
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: false,
          });

        if (error) {
          logger.error('Upload error:', error);
          toast.error('アップロード失敗', `${file.name}: ${error.message}`);
          continue;
        }

        // 公開URLを取得
        const { data: urlData } = supabase.storage
          .from(STORAGE_BUCKETS.ITEM_IMAGES)
          .getPublicUrl(data.path);

        const newImage: ItemVariantImage = {
          id: `new_${timestamp}_${Math.random().toString(36).substr(2, 9)}`,
          variant_id: variant.id,
          image_url: urlData.publicUrl,
          image_path: data.path,
          thumbnail_url: urlData.publicUrl,
          file_name: file.name,
          file_size: file.size,
          mime_type: file.type,
          alt_text: formData.color_name || file.name,
          is_primary: images.length === 0 && newImages.length === 0,
          display_order: images.length + newImages.length,
          created_at: '',
          updated_at: '',
        };

        newImages.push(newImage);
      } catch (err) {
        logger.error('Upload exception:', err);
        toast.error('アップロード失敗', `${file.name}`);
      }
    }

    if (newImages.length > 0) {
      setImages(prev => [...prev, ...newImages]);
      toast.success('アップロード完了', `${newImages.length}枚の画像を追加しました`);
    }

    setIsUploading(false);
    setUploadProgress([]);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      uploadFiles(files);
    }
  }, [images.length, formData.color_name, variant.id, variant.item_id]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      uploadFiles(Array.from(files));
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAddImageFromUrl = () => {
    if (!imageUrl.trim()) {
      setUrlError('URLを入力してください');
      return;
    }

    try {
      new URL(imageUrl);
    } catch {
      setUrlError('有効なURLを入力してください');
      return;
    }

    const newImage: ItemVariantImage = {
      id: `url_${Date.now()}`,
      variant_id: variant.id,
      image_url: imageUrl.trim(),
      image_path: null,
      thumbnail_url: imageUrl.trim(),
      file_name: null,
      file_size: null,
      mime_type: null,
      alt_text: formData.color_name,
      is_primary: images.length === 0,
      display_order: images.length,
      created_at: '',
      updated_at: '',
    };

    setImages(prev => [...prev, newImage]);
    setImageUrl('');
    setUrlError('');
  };

  const handleDeleteImage = (imageId: string) => {
    setImages(prev => prev.filter(img => img.id !== imageId));
  };

  const handleSetPrimaryImage = (imageId: string) => {
    setImages(prev =>
      prev.map(img => ({
        ...img,
        is_primary: img.id === imageId,
      }))
    );
  };

  const handleSubmit = () => {
    if (!formData.color_name.trim()) {
      return;
    }

    onSave(
      {
        ...variant,
        color_name: formData.color_name,
        color_code: formData.color_code || null,
        description: formData.description || null,
        is_hit: formData.is_hit,
      },
      images
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">
            {isCreating ? '新規バリエーション' : 'バリエーション編集'}
          </h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Color Info */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                色名称 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.color_name}
                onChange={e => setFormData({ ...formData, color_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="例: フローMGグレー"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                品番・コード
              </label>
              <input
                type="text"
                value={formData.color_code}
                onChange={e => setFormData({ ...formData, color_code: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="例: FMG-001"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                説明
              </label>
              <textarea
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                rows={2}
                placeholder="色の説明やメモ"
              />
            </div>

            {/* HIT設定 */}
            <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
              <input
                type="checkbox"
                id="variant-is-hit"
                checked={formData.is_hit}
                onChange={e => setFormData({ ...formData, is_hit: e.target.checked })}
                className="w-5 h-5 text-red-500 rounded border-gray-300 focus:ring-red-500"
              />
              <label htmlFor="variant-is-hit" className="flex items-center gap-2 cursor-pointer">
                <Sparkles className="w-4 h-4 text-red-500" />
                <span className="font-medium text-gray-800">この色をHIT表示する</span>
              </label>
            </div>
          </div>

          {/* Images */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              画像登録
            </h4>

            {/* ドラッグ&ドロップエリア */}
            <div
              ref={dropZoneRef}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className={`mb-4 border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                isDragging
                  ? 'border-teal-500 bg-teal-50'
                  : 'border-gray-300 hover:border-teal-400 hover:bg-gray-50'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleFileSelect}
                className="hidden"
                disabled={isUploading}
              />

              {isUploading ? (
                <div className="space-y-2">
                  <Loader2 className="w-10 h-10 mx-auto text-teal-500 animate-spin" />
                  <p className="text-sm text-gray-600">アップロード中...</p>
                  {uploadProgress.map((name, i) => (
                    <p key={i} className="text-xs text-gray-500 truncate">{name}</p>
                  ))}
                </div>
              ) : isDragging ? (
                <div className="space-y-2">
                  <Upload className="w-10 h-10 mx-auto text-teal-500" />
                  <p className="text-sm font-medium text-teal-600">ここにドロップして追加</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="w-10 h-10 mx-auto text-gray-400" />
                  <p className="text-sm text-gray-600">
                    画像をドラッグ&ドロップ
                  </p>
                  <p className="text-xs text-gray-400">または</p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-teal-600 text-white text-sm rounded-lg hover:bg-teal-700"
                  >
                    ファイルを選択
                  </button>
                  <p className="text-xs text-gray-400 mt-2">
                    JPEG, PNG, WebP, GIF 対応
                  </p>
                </div>
              )}
            </div>

            {/* URL Input（折りたたみ可能） */}
            <details className="mb-4">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1">
                <Link className="w-4 h-4" />
                URLから追加
              </summary>
              <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={e => {
                      setImageUrl(e.target.value);
                      setUrlError('');
                    }}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddImageFromUrl();
                      }
                    }}
                    placeholder="https://example.com/image.jpg"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-sm"
                  />
                  <button
                    onClick={handleAddImageFromUrl}
                    disabled={!imageUrl.trim()}
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 text-sm"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {urlError && (
                  <div className="mt-2 flex items-center gap-1 text-red-500 text-xs">
                    <AlertCircle className="w-3 h-3" />
                    {urlError}
                  </div>
                )}
              </div>
            </details>

            {/* Image Grid */}
            {images.length > 0 ? (
              <div className="grid grid-cols-4 gap-3">
                {images.map(image => (
                  <div key={image.id} className="relative group">
                    <img
                      src={image.image_url}
                      alt={image.alt_text || ''}
                      className="w-full aspect-square object-cover rounded-lg border border-gray-200"
                    />
                    {image.is_primary && (
                      <div className="absolute top-1 left-1 bg-teal-500 text-white text-xs px-1.5 py-0.5 rounded">
                        メイン
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                      {!image.is_primary && (
                        <button
                          onClick={() => handleSetPrimaryImage(image.id)}
                          className="p-1.5 bg-teal-500 text-white rounded hover:bg-teal-600"
                          title="メイン画像に設定"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteImage(image.id)}
                        className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600"
                        title="削除"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-500 bg-gray-50 rounded-lg">
                <ImageIcon className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p className="text-sm">画像がありません</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            キャンセル
          </button>
          <button
            onClick={handleSubmit}
            disabled={isSaving || !formData.color_name.trim()}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 flex items-center gap-2"
          >
            {isSaving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                保存中...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                保存
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
