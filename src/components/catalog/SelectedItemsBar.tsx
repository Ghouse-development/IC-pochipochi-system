import React, { useState } from 'react';
import { X, ChevronUp, ChevronDown, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';

interface SelectedItemsBarProps {
  isCartOpen?: boolean;
}

export const SelectedItemsBar: React.FC<SelectedItemsBarProps> = ({ isCartOpen: _isCartOpen = false }) => {
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
    <div className="fixed bottom-0 left-0 w-64 z-40 pointer-events-none transition-all duration-300 hidden lg:block">
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
          <div className="bg-white border border-gray-200 rounded-t-xl shadow-xl max-h-[60vh] overflow-y-auto animate-slide-up">
            <div className="p-3">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-blue-600" />
                  選択済み（{items.length}件）
                </h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1.5 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* カテゴリごとのアイテム */}
              <div className="space-y-3">
                {Object.entries(groupedItems).map(([category, categoryItems]) => (
                  <div key={category}>
                    <h4 className="text-xs font-medium text-gray-500 mb-1.5">
                      {category}（{categoryItems.length}）
                    </h4>
                    <div className="space-y-1">
                      {categoryItems.map((item) => {
                        const price = item.product.pricing?.find(
                          (p) => p.planId === selectedPlanId || p.plan === selectedPlanId
                        )?.price || 0;

                        return (
                          <div
                            key={`${item.product.id}-${item.selectedVariant.id}`}
                            className="flex items-center justify-between bg-gray-50 rounded-lg p-2 group hover:bg-red-50 transition-colors"
                          >
                            <div className="flex-1 min-w-0 mr-2">
                              <p className="text-xs font-medium text-gray-900 truncate">
                                {item.product.name}
                              </p>
                              <p className="text-[10px] text-gray-500 truncate">
                                {item.selectedVariant.color} • {formatPrice(price)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-100 rounded-full transition-colors flex-shrink-0"
                              title="選択解除"
                            >
                              <Trash2 className="w-3 h-3" />
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
          className={`bg-gradient-to-r from-blue-600 to-blue-500 text-white cursor-pointer ${isExpanded ? '' : 'rounded-t-xl'}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="px-3 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              <span className="font-semibold text-sm">{items.length}件選択</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">{formatPrice(totalPrice)}</span>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
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
