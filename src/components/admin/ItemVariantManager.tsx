import { useState, useEffect } from 'react';
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
} from 'lucide-react';
import { itemVariantsApi, itemVariantImagesApi } from '../../services/api';
import type { ItemVariant, ItemVariantImage } from '../../types/database';
import { useToast } from '../common/Toast';
import { createLogger } from '../../lib/logger';

const logger = createLogger('ItemVariantManager');

interface ItemVariantManagerProps {
  itemId: string;
  itemName: string;
  variants: ItemVariant[];
  onVariantsChange: () => void;
}

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

  useEffect(() => {
    setVariants(initialVariants);
  }, [initialVariants]);

  const handleCreateVariant = () => {
    setEditingVariant({
      id: '',
      item_id: itemId,
      variant_code: '',
      color_name: '',
      color_code: '',
      description: '',
      is_active: true,
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
        });
      } else {
        // Update existing variant
        savedVariant = await itemVariantsApi.update(variant.id, {
          color_name: variant.color_name,
          color_code: variant.color_code || undefined,
          description: variant.description || undefined,
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
          {variants.map(variant => (
            <div
              key={variant.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Thumbnail */}
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
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {variant.images?.length || 0}枚
                </div>
              </div>

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
          ))}
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
  const [formData, setFormData] = useState({
    color_name: variant.color_name,
    color_code: variant.color_code || '',
    description: variant.description || '',
  });
  const [images, setImages] = useState<ItemVariantImage[]>(variant.images || []);
  const [imageUrl, setImageUrl] = useState('');
  const [urlError, setUrlError] = useState('');

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
          </div>

          {/* Images */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              画像登録
            </h4>

            {/* URL Input */}
            <div className="mb-4 p-3 bg-teal-50 border border-teal-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Link className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">画像URLを入力</span>
              </div>
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
                  className="flex-1 px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 text-sm"
                />
                <button
                  onClick={handleAddImageFromUrl}
                  disabled={!imageUrl.trim()}
                  className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50 text-sm"
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
