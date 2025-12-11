import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import type { Product, ProductVariant, UnitType } from '../../types/product';
import { Button } from '../common/Button';

interface ProductFormNewProps {
  product?: Product;
  onSave: (product: Partial<Product>) => void;
  onClose: () => void;
  catalogType: 'exterior' | 'interior' | 'water';
}

export const ProductFormNew: React.FC<ProductFormNewProps> = ({ 
  product, 
  onSave, 
  onClose,
  catalogType 
}) => {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: product?.name || '',
    categoryName: product?.categoryName || '',
    manufacturer: product?.manufacturer || '',
    modelNumber: product?.modelNumber || '',
    unit: product?.unit || 'piece',
    isOption: product?.isOption ?? true,
    description: product?.description || '',
    variants: product?.variants || [{ 
      id: 'v1', 
      color: '', 
      colorCode: '',
      imageUrl: '',
      images: [] 
    }],
    pricing: product?.pricing || [
      { planId: 'LACIE', price: 0 }
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
      colorCode: '',
      imageUrl: '',
      images: []
    };
    setFormData({
      ...formData,
      variants: [...(formData.variants || []), newVariant]
    });
  };

  const removeVariant = (index: number) => {
    if ((formData.variants?.length || 0) <= 1) return;
    setFormData({
      ...formData,
      variants: formData.variants?.filter((_, i) => i !== index)
    });
  };

  const updateVariant = (index: number, field: string, value: string) => {
    const updatedVariants = [...(formData.variants || [])];
    updatedVariants[index] = { ...updatedVariants[index], [field]: value };
    setFormData({ ...formData, variants: updatedVariants });
  };

  const updatePrice = (price: number) => {
    setFormData({ 
      ...formData, 
      pricing: [{ planId: 'LACIE', price }]
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {product ? '商品編集' : '新規商品追加'} - {
              catalogType === 'exterior' ? 'エクステリア' :
              catalogType === 'interior' ? 'インテリア' : '水廻り'
            }
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* 基本情報 */}
            <div>
              <h3 className="text-lg font-semibold mb-4">基本情報</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    placeholder="例: 床材"
                  />
                </div>
                
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
                    placeholder="例: フローリング材"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    メーカー *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.manufacturer}
                    onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例: LIFE X"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    品番
                  </label>
                  <input
                    type="text"
                    value={formData.modelNumber}
                    onChange={(e) => setFormData({ ...formData, modelNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="例: LX-FL-001"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    価格 *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={formData.pricing?.[0]?.price || 0}
                    onChange={(e) => updatePrice(parseInt(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    単位 *
                  </label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value as UnitType })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="個">個</option>
                    <option value="㎡">㎡</option>
                    <option value="m">m</option>
                    <option value="式">式</option>
                    <option value="セット">セット</option>
                    <option value="枚">枚</option>
                    <option value="本">本</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    タイプ *
                  </label>
                  <select
                    value={formData.isOption ? 'option' : 'standard'}
                    onChange={(e) => setFormData({ ...formData, isOption: e.target.value === 'option' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="standard">標準</option>
                    <option value="option">オプション</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    備考
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="商品の詳細説明を入力してください"
                  />
                </div>
              </div>
            </div>

            {/* 色・画像情報 */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">色・画像情報</h3>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addVariant}
                >
                  <Plus className="w-4 h-4 mr-1" />
                  色を追加
                </Button>
              </div>

              <div className="space-y-4">
                {formData.variants?.map((variant, index) => (
                  <div key={variant.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium">色 {index + 1}</h4>
                      {(formData.variants?.length || 0) > 1 && (
                        <button
                          type="button"
                          onClick={() => removeVariant(index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          色名
                        </label>
                        <input
                          type="text"
                          value={variant.color}
                          onChange={(e) => updateVariant(index, 'color', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="例: ナチュラル"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          カラーコード
                        </label>
                        <input
                          type="text"
                          value={variant.colorCode || ''}
                          onChange={(e) => updateVariant(index, 'colorCode', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="例: #F5F5DC"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          画像URL
                        </label>
                        <input
                          type="text"
                          value={variant.imageUrl || ''}
                          onChange={(e) => updateVariant(index, 'imageUrl', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="画像のURL"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* フッター */}
          <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              キャンセル
            </Button>
            <Button type="submit" variant="primary">
              {product ? '更新' : '追加'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};