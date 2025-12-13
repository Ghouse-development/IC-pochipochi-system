import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ShoppingCart } from 'lucide-react';
import type { Product } from '../../types/product';
import { UNIT_SYMBOLS } from '../../types/product';
import { formatPrice } from '../../lib/utils';
import { useCartStore } from '../../stores/useCartStore';
import { getHexColor } from '../../utils/colorMapping';
import { generateProductPlaceholder } from '../../utils/imageUtils';

interface ProductCompareModalProps {
  products: Product[];
  isOpen: boolean;
  onClose: () => void;
  onRemoveProduct: (productId: string) => void;
}

export const ProductCompareModal: React.FC<ProductCompareModalProps> = ({
  products,
  isOpen,
  onClose,
  onRemoveProduct,
}) => {
  const { addItem } = useCartStore();

  if (products.length === 0) return null;

  // 比較項目を抽出
  const compareItems = [
    { key: 'manufacturer', label: 'メーカー' },
    { key: 'modelNumber', label: '品番' },
    { key: 'unit', label: '単位' },
    { key: 'isOption', label: '仕様' },
    { key: 'variants', label: 'カラー数' },
    { key: 'price', label: '価格' },
    { key: 'description', label: '説明' },
  ];

  const getValue = (product: Product, key: string) => {
    switch (key) {
      case 'manufacturer':
        return product.manufacturer;
      case 'modelNumber':
        return product.modelNumber || '-';
      case 'unit':
        return UNIT_SYMBOLS[product.unit] || product.unit;
      case 'isOption':
        return product.isOption ? 'オプション' : '標準仕様';
      case 'variants':
        return `${product.variants.length}色`;
      case 'price':
        const price = product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
        return price === 0 ? '標準仕様' : `${formatPrice(price)}/${UNIT_SYMBOLS[product.unit] || product.unit}`;
      case 'description':
        return product.description || '-';
      default:
        return '-';
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem(product, 1, product.variants[0]);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden z-50">
          {/* ヘッダー */}
          <div className="sticky top-0 bg-gradient-to-r from-teal-600 to-teal-500 text-white p-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">商品比較 ({products.length}件)</h2>
            <Dialog.Close className="p-1 hover:bg-white/20 rounded-full">
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          {/* 比較テーブル */}
          <div className="overflow-auto max-h-[calc(90vh-80px)]">
            <table className="w-full border-collapse">
              {/* 商品ヘッダー */}
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left text-sm font-medium text-gray-500 w-32 sticky left-0 bg-gray-50 z-10">
                    項目
                  </th>
                  {products.map(product => {
                    const variant = product.variants[0];
                    const imagePlaceholder = generateProductPlaceholder(product.name, variant?.color);
                    return (
                      <th key={product.id} className="p-4 text-center min-w-[200px]">
                        <div className="relative">
                          <button
                            onClick={() => onRemoveProduct(product.id)}
                            className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 z-10"
                          >
                            <X className="w-3 h-3" />
                          </button>
                          <div className="w-32 h-32 mx-auto mb-3 rounded-xl overflow-hidden bg-gray-100">
                            <img
                              src={variant?.imageUrl || imagePlaceholder}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = imagePlaceholder;
                              }}
                            />
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">{product.categoryName}</p>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              {/* 比較行 */}
              <tbody>
                {compareItems.map((item, index) => (
                  <tr key={item.key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-sm font-medium text-gray-700 sticky left-0 bg-inherit">
                      {item.label}
                    </td>
                    {products.map(product => (
                      <td key={product.id} className="p-4 text-center text-sm text-gray-900">
                        {item.key === 'isOption' ? (
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            product.isOption
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-green-100 text-green-700'
                          }`}>
                            {getValue(product, item.key)}
                          </span>
                        ) : item.key === 'description' ? (
                          <span className="text-xs text-gray-600 line-clamp-3">
                            {getValue(product, item.key)}
                          </span>
                        ) : (
                          getValue(product, item.key)
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* カラーバリエーション行 */}
                <tr className="bg-white">
                  <td className="p-4 text-sm font-medium text-gray-700 sticky left-0 bg-white">
                    カラー
                  </td>
                  {products.map(product => (
                    <td key={product.id} className="p-4">
                      <div className="flex flex-wrap justify-center gap-1">
                        {product.variants.slice(0, 8).map(variant => {
                          const hexColor = getHexColor(variant.colorCode) !== '#CCCCCC'
                            ? getHexColor(variant.colorCode)
                            : getHexColor(variant.color);
                          return (
                            <div
                              key={variant.id}
                              className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm"
                              style={{ backgroundColor: hexColor }}
                              title={variant.color}
                            />
                          );
                        })}
                        {product.variants.length > 8 && (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
                            <span className="text-[10px] text-gray-600">+{product.variants.length - 8}</span>
                          </div>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* カートに追加ボタン */}
                <tr className="bg-gray-100">
                  <td className="p-4 text-sm font-medium text-gray-700 sticky left-0 bg-gray-100">
                    アクション
                  </td>
                  {products.map(product => (
                    <td key={product.id} className="p-4 text-center">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        カートに追加
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
