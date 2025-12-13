import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();

  if (!isOpen) return null;

  return (
    <>
      {/* オーバーレイ */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />
      
      {/* サイドバー */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 flex flex-col">
        {/* ヘッダー */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">選択中の商品</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* カート内容 */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">カートに商品がありません</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const price = item.product.pricing.find(
                  (p) => p.plan === 'LACIE' || p.planId === 'LACIE'
                )?.price || 0;
                
                return (
                  <div
                    key={`${item.product.id}-${item.selectedVariant.id}`}
                    className="bg-gray-50 rounded-lg p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900 flex-1">
                        {item.product.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                    
                    <div className="text-xs text-gray-500 mb-2">
                      {item.selectedVariant.color} | {item.product.manufacturer}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-1 hover:bg-gray-200 rounded"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <span className="text-xs text-gray-500">
                          {item.product.unit}
                        </span>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm font-semibold">
                          {formatPrice(price * item.quantity)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatPrice(price)} / {item.product.unit}
                        </p>
                      </div>
                    </div>
                    
                    {item.product.isOption && (
                      <Badge variant="option" className="mt-2">
                        オプション
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
        {/* フッター */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">合計金額</span>
              <span className="text-2xl font-bold text-blue-600">
                {formatPrice(totalPrice)}
              </span>
            </div>
            
            <div className="space-y-2">
              <Button variant="primary" className="w-full" onClick={onClose}>
                仕様を確定
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                カートをクリア
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};