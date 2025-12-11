import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import type { Product, ProductVariant, UnitType } from '../../types/product';
import { Button } from '../common/Button';

interface ProductFormProps {
  product?: Product;
  onSave: (product: Partial<Product>) => void;
  onClose: () => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({ product, onSave, onClose }) => {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: product?.name || '',
    categoryId: product?.categoryId || '',
    categoryName: product?.categoryName || '',
    subcategory: product?.subcategory || '',
    manufacturer: product?.manufacturer || 'LIFE X',
    modelNumber: product?.modelNumber || '',
    unit: product?.unit || 'piece',
    isOption: product?.isOption ?? true,
    description: product?.description || '',
    variants: product?.variants || [{ id: 'v1', color: '', images: [] }],
    pricing: product?.pricing || [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const addVariant = () => {
    const newVariant: ProductVariant = {
      id: `v${(formData.variants?.length || 0) + 1}`,
      color: '',
      images: []
    };
    setFormData({
      ...formData,
      variants: [...(formData.variants || []), newVariant]
    });
  };

  const removeVariant = (index: number) => {
    setFormData({
      ...formData,
      variants: formData.variants?.filter((_, i) => i !== index)
    });
  };

  const updateVariant = (index: number, color: string) => {
    const updatedVariants = [...(formData.variants || [])];
    updatedVariants[index] = { ...updatedVariants[index], color };
    setFormData({ ...formData, variants: updatedVariants });
  };

  const updatePricing = (plan: 'LACIE' | 'HOURS', price: number) => {
    const updatedPricing = formData.pricing?.map(p => 
      p.plan === plan ? { ...p, price } : p
    ) || [];
    setFormData({ ...formData, pricing: updatedPricing });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {product ? '商品編集' : '新規商品追加'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* 基本情報 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">基本情報</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  商品名 *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  型番
                </label>
                <input
                  type="text"
                  value={formData.modelNumber}
                  onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  カテゴリ *
                </label>
                <input
                  type="text"
                  required
                  value={formData.categoryName}
                  onChange={(e) => setFormData({ ...formData, categoryName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="例: 外壁材, 床材, 建具"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  サブカテゴリ
                </label>
                <input
                  type="text"
                  value={formData.subcategory}
                  onChange={(e) => setFormData({ ...formData, subcategory: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  メーカー
                </label>
                <input
                  type="text"
                  value={formData.manufacturer}
                  onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  単位
                </label>
                <select
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value as UnitType })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="sqm">㎡</option>
                  <option value="piece">個</option>
                  <option value="set">一式</option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                説明
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isOption}
                  onChange={(e) => setFormData({ ...formData, isOption: e.target.checked })}
                  className="mr-2"
                />
                <span className="text-sm font-medium text-gray-700">オプション商品</span>
              </label>
            </div>
          </div>

          {/* カラーバリエーション */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">カラーバリエーション</h3>
              <Button type="button" size="sm" onClick={addVariant}>
                <Plus className="w-4 h-4 mr-1" />
                追加
              </Button>
            </div>
            <div className="space-y-2">
              {formData.variants?.map((variant, index) => (
                <div key={variant.id} className="flex gap-2">
                  <input
                    type="text"
                    value={variant.color}
                    onChange={(e) => updateVariant(index, e.target.value)}
                    placeholder="カラー名"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {formData.variants && formData.variants.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeVariant(index)}
                      className="p-2 text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 価格設定 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">価格設定</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LACIE プラン価格
                </label>
                <input
                  type="number"
                  value={formData.pricing?.find(p => p.plan === 'LACIE')?.price || 0}
                  onChange={(e) => updatePricing('LACIE', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  HOURS プラン価格
                </label>
                <input
                  type="number"
                  value={formData.pricing?.find(p => p.plan === 'HOURS')?.price || 0}
                  onChange={(e) => updatePricing('HOURS', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* アクションボタン */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="secondary" onClick={onClose}>
              キャンセル
            </Button>
            <Button type="submit" variant="primary">
              保存
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};