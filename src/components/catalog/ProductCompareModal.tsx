import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ShoppingCart, Printer, Star, Check, AlertCircle, Share2, FileSpreadsheet } from 'lucide-react';
import type { Product } from '../../types/product';
import { UNIT_SYMBOLS } from '../../types/product';
import { formatPrice, getProductPrice } from '../../lib/utils';
import { useCartStore } from '../../stores/useCartStore';
import { useToast } from '../common/Toast';
import { getHexColor } from '../../utils/colorMapping';
import { generateProductPlaceholder } from '../../utils/imageUtils';
import { useTimeout } from '../../hooks/useTimeout';

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
  const { setTimeout } = useTimeout();
  const toast = useToast();
  const [highlightBest, setHighlightBest] = useState(true);
  const [showDifferences, setShowDifferences] = useState(true);
  const [copied, setCopied] = useState(false);

  if (products.length === 0) return null;

  // 比較項目を抽出
  const compareItems = [
    { key: 'manufacturer', label: 'メーカー', type: 'text' },
    { key: 'modelNumber', label: '品番', type: 'text' },
    { key: 'unit', label: '単位', type: 'text' },
    { key: 'isOption', label: '仕様', type: 'badge' },
    { key: 'variants', label: 'カラー数', type: 'number', higherBetter: true },
    { key: 'price', label: '価格', type: 'price', higherBetter: false },
    { key: 'description', label: '説明', type: 'text' },
  ];

  const getNumericValue = (product: Product, key: string): number | null => {
    switch (key) {
      case 'variants':
        return product.variants.length;
      case 'price':
        return getProductPrice(product.pricing);
      default:
        return null;
    }
  };

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
      case 'price': {
        const price = getProductPrice(product.pricing);
        return price === 0 ? '標準仕様' : `${formatPrice(price)}/${UNIT_SYMBOLS[product.unit] || product.unit}`;
      }
      case 'description':
        return product.description || '-';
      default:
        return '-';
    }
  };

  // 最良値を判定
  const getBestValue = (key: string, higherBetter: boolean): number | null => {
    const values = products.map(p => getNumericValue(p, key)).filter((v): v is number => v !== null);
    if (values.length === 0) return null;
    return higherBetter ? Math.max(...values) : Math.min(...values);
  };

  // 値が異なるかチェック
  const hasDifferentValues = (key: string): boolean => {
    const values = products.map(p => getValue(p, key));
    return new Set(values).size > 1;
  };

  // 最良値かどうかチェック
  const isBestValue = (product: Product, key: string, higherBetter: boolean): boolean => {
    const value = getNumericValue(product, key);
    const best = getBestValue(key, higherBetter);
    return value !== null && best !== null && value === best;
  };

  const handleAddToCart = (product: Product) => {
    addItem(product, 1, product.variants[0]);
  };

  // CSV出力
  const exportToCSV = () => {
    const headers = ['項目', ...products.map(p => p.name)];
    const rows = compareItems.map(item => [
      item.label,
      ...products.map(p => getValue(p, item.key))
    ]);
    rows.push(['カラー数', ...products.map(p => `${p.variants.length}色`)]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `商品比較_${new Date().toLocaleDateString('ja-JP')}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // 印刷
  const handlePrint = () => {
    window.print();
  };

  // 共有URL生成
  const generateShareUrl = () => {
    const productIds = products.map(p => p.id).join(',');
    const url = `${window.location.origin}/compare?products=${productIds}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        toast.success('URLをコピーしました');
      })
      .catch(() => {
        toast.error('コピー失敗', 'クリップボードへのアクセスが許可されていません');
      });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden z-50">
          {/* ヘッダー */}
          <div className="sticky top-0 z-20">
            <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-4 flex items-center justify-between">
              <h2 className="text-lg font-bold">商品比較 ({products.length}件)</h2>
              <Dialog.Close className="p-1 hover:bg-white/20 rounded-full">
                <X className="w-5 h-5" />
              </Dialog.Close>
            </div>

            {/* ツールバー */}
            <div className="bg-gray-100 dark:bg-gray-800 p-2 flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={highlightBest}
                    onChange={(e) => setHighlightBest(e.target.checked)}
                    className="rounded text-teal-600 focus:ring-teal-500"
                  />
                  <Star className="w-4 h-4" />
                  最良値ハイライト
                </label>
                <label className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showDifferences}
                    onChange={(e) => setShowDifferences(e.target.checked)}
                    className="rounded text-teal-600 focus:ring-teal-500"
                  />
                  <AlertCircle className="w-4 h-4" />
                  差分表示
                </label>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={generateShareUrl}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  title="共有URLをコピー"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
                  {copied ? 'コピー完了' : '共有'}
                </button>
                <button
                  onClick={exportToCSV}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  title="CSVとしてエクスポート"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  CSV
                </button>
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors print:hidden"
                  title="印刷"
                >
                  <Printer className="w-4 h-4" />
                  印刷
                </button>
              </div>
            </div>
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
                              loading="lazy"
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
                {compareItems.map((item, index) => {
                  const isDifferent = hasDifferentValues(item.key);
                  const itemConfig = item as typeof compareItems[0] & { higherBetter?: boolean };

                  return (
                    <tr
                      key={item.key}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${
                        showDifferences && isDifferent ? 'ring-1 ring-inset ring-yellow-300' : ''
                      }`}
                    >
                      <td className={`p-4 text-sm font-medium text-gray-700 sticky left-0 bg-inherit ${
                        showDifferences && isDifferent ? 'bg-yellow-50' : ''
                      }`}>
                        <div className="flex items-center gap-1">
                          {item.label}
                          {showDifferences && isDifferent && (
                            <AlertCircle className="w-3 h-3 text-yellow-600" aria-label="値が異なります" />
                          )}
                        </div>
                      </td>
                      {products.map(product => {
                        const isBest = highlightBest &&
                          itemConfig.higherBetter !== undefined &&
                          isBestValue(product, item.key, itemConfig.higherBetter);

                        return (
                          <td
                            key={product.id}
                            className={`p-4 text-center text-sm text-gray-900 transition-colors ${
                              isBest ? 'bg-green-50 ring-2 ring-inset ring-green-400' : ''
                            }`}
                          >
                            <div className="flex items-center justify-center gap-1">
                              {isBest && <Star className="w-4 h-4 text-green-600 fill-green-600" />}
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
                                <span className={isBest ? 'font-bold text-green-700' : ''}>
                                  {getValue(product, item.key)}
                                </span>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

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
