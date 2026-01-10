import React, { useState } from 'react';
import { X, ChevronUp, ChevronDown, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';

export const SelectedItemsBar: React.FC = () => {
  const { items, removeItem, getTotalPrice, selectedPlanId } = useCartStore();
  const [isExpanded, setIsExpanded] = useState(false);

  if (items.length === 0) return null;

  const totalPrice = getTotalPrice();

  // カテゴリでグループ化
  const groupedItems = items.reduce((acc, item) => {
    const category = item.product.categoryName || 'その他';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      {/* 展開時のオーバーレイ */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 pointer-events-auto"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* メインバー */}
      <div className="relative pointer-events-auto">
        {/* 展開パネル */}
        {isExpanded && (
          <div className="bg-white border-t border-gray-200 shadow-xl max-h-[50vh] overflow-y-auto animate-slide-up">
            <div className="max-w-7xl mx-auto p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-teal-600" />
                  選択済みアイテム（{items.length}件）
                </h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* カテゴリごとのアイテム */}
              <div className="space-y-4">
                {Object.entries(groupedItems).map(([category, categoryItems]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">
                      {category}（{categoryItems.length}件）
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {categoryItems.map((item) => {
                        const price = item.product.pricing?.find(
                          (p) => p.planId === selectedPlanId || p.plan === selectedPlanId
                        )?.price || 0;

                        return (
                          <div
                            key={`${item.product.id}-${item.selectedVariant.id}`}
                            className="flex items-center justify-between bg-gray-50 rounded-lg p-3 group hover:bg-red-50 transition-colors"
                          >
                            <div className="flex-1 min-w-0 mr-2">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {item.product.name}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {item.selectedVariant.color} • {formatPrice(price)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-100 rounded-full transition-colors flex-shrink-0"
                              title="選択解除"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 常時表示バー */}
        <div
          className="bg-gradient-to-r from-teal-600 to-teal-500 text-white cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <span className="font-semibold">{items.length}件選択中</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm opacity-80">
                {/* 最新3件を表示 */}
                {items.slice(-3).map((item, i) => (
                  <React.Fragment key={item.product.id}>
                    {i > 0 && <span>•</span>}
                    <span className="truncate max-w-[120px]">{item.product.name}</span>
                  </React.Fragment>
                ))}
                {items.length > 3 && <span>他{items.length - 3}件</span>}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-xs opacity-80">オプション合計</p>
                <p className="font-bold text-lg">{formatPrice(totalPrice)}</p>
              </div>
              <div className="flex items-center gap-1 text-sm opacity-80">
                {isExpanded ? (
                  <>
                    <span>閉じる</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>開いて解除</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};
