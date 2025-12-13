import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ChevronLeft, ChevronRight, Plus, Minus, ShoppingCart, Check, AlertCircle } from 'lucide-react';
import type { Product, ProductVariant } from '../../types/product';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { formatPrice } from '../../lib/utils';
import { useCartStore } from '../../stores/useCartStore';
import { cn } from '../../lib/utils';
import { getCategoryRule } from '../../config/categoryRules';
import { getHexColor } from '../../utils/colorMapping';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem, items } = useCartStore();
  
  if (!product) return null;
  
  const variant = selectedVariant || product.variants[0];
  const price = product.pricing.find((p) => p.planId === 'LACIE')?.price || 0;
  const totalPrice = price * quantity;
  
  // カテゴリルールを取得
  const categoryRule = getCategoryRule(product.categoryName);
  const isSingleSelection = categoryRule.selectionType === 'single';
  
  // 同じカテゴリの商品がカートにあるかチェック
  const hasSameCategoryItem = items.some(
    item => item.product.categoryName === product.categoryName && 
           item.product.id !== product.id
  );
  
  // 同じカテゴリの商品数をカウント
  const sameCategoryCount = items.filter(
    item => item.product.categoryName === product.categoryName
  ).length;
  
  // 選択可能かチェック
  const canAddToCart = () => {
    if (isSingleSelection && hasSameCategoryItem) {
      return false;
    }
    if (categoryRule.maxSelection && sameCategoryCount >= categoryRule.maxSelection) {
      return false;
    }
    return true;
  };
  
  const imagePlaceholder = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(`
    <svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#f3f4f6"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="sans-serif" font-size="20">
        ${product.name}
      </text>
    </svg>
  `)))}`;
  
  const handleAddToCart = () => {
    if (!canAddToCart()) {
      if (isSingleSelection) {
        alert(`${product.categoryName}は1つのみ選択可能です。既に選択されている商品を削除してから追加してください。`);
      } else if (categoryRule.maxSelection) {
        alert(`${product.categoryName}は最大${categoryRule.maxSelection}つまで選択可能です。`);
      }
      return;
    }

    addItem(product, quantity, variant);

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1500);
  };
  
  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };
  
  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.variants.length - 1 : prev - 1
    );
    setSelectedVariant(product.variants[currentImageIndex === 0 ? product.variants.length - 1 : currentImageIndex - 1]);
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.variants.length - 1 ? 0 : prev + 1
    );
    setSelectedVariant(product.variants[currentImageIndex === product.variants.length - 1 ? 0 : currentImageIndex + 1]);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden z-50">
          <div className="flex h-full">
            {/* 画像エリア */}
            <div className="flex-1 bg-gray-50 relative">
              {product.variants.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
              
              <img
                src={variant.imageUrl || imagePlaceholder}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = imagePlaceholder;
                }}
              />
              
              {/* サムネイル */}
              {product.variants.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {product.variants.map((v, index) => (
                    <button
                      key={v.id}
                      onClick={() => {
                        setSelectedVariant(v);
                        setCurrentImageIndex(index);
                      }}
                      className={cn(
                        'w-16 h-16 rounded border-2 overflow-hidden',
                        variant.id === v.id ? 'border-blue-500' : 'border-gray-300'
                      )}
                    >
                      <img
                        src={v.thumbnailUrl || v.imageUrl || imagePlaceholder}
                        alt={v.color}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = imagePlaceholder;
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* 詳細エリア */}
            <div className="w-96 p-6 flex flex-col">
              <Dialog.Close className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded">
                <X className="w-5 h-5" />
              </Dialog.Close>
              
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h2>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500">メーカー名:</span>
                  <span className="text-sm font-medium">{product.manufacturer}</span>
                  {product.modelNumber && (
                    <>
                      <span className="text-sm text-gray-500">品番:</span>
                      <span className="text-sm font-medium">{product.modelNumber}</span>
                    </>
                  )}
                </div>
                
                {/* カラー選択 */}
                {product.variants.length > 1 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">カラー選択 ({product.variants.length}色)</h3>
                    <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                      {product.variants.map((v) => {
                        const hexColor = getHexColor(v.colorCode) !== '#CCCCCC'
                          ? getHexColor(v.colorCode)
                          : getHexColor(v.color);
                        return (
                          <button
                            key={v.id}
                            onClick={() => setSelectedVariant(v)}
                            className={cn(
                              'flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all',
                              variant.id === v.id
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-gray-300 hover:border-gray-400'
                            )}
                          >
                            <div
                              className="w-5 h-5 rounded-full border border-gray-300 shadow-sm flex-shrink-0"
                              style={{ backgroundColor: hexColor }}
                            />
                            <span className="text-sm whitespace-nowrap">{v.color}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                {/* カテゴリルール表示 */}
                {categoryRule.description && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-700">{categoryRule.description}</span>
                    </div>
                  </div>
                )}
                
                {/* 価格情報 */}
                <div className="border-t pt-4 mb-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(price)}
                    </span>
                    <span className="text-sm text-gray-500">/ {product.unit}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {product.isOption ? (
                      <Badge variant="option">オプション</Badge>
                    ) : (
                      <Badge variant="standard">標準仕様</Badge>
                    )}
                  </div>
                </div>
                
                {/* 数量選択 */}
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">数量</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="p-2 hover:bg-gray-100 disabled:opacity-50"
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 min-w-[60px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="p-2 hover:bg-gray-100 disabled:opacity-50"
                        disabled={quantity >= 99}
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">{product.unit}</span>
                  </div>
                </div>
                
                {/* 合計金額 */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">合計金額</span>
                    <span className="text-xl font-bold text-gray-900">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>
                
                {/* 説明 */}
                {product.description && (
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">商品説明</h3>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>
                )}
                
                {/* 選択制限の警告 */}
                {!canAddToCart() && (
                  <div className="mb-4 p-3 bg-red-50 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
                      <div className="text-sm text-red-700">
                        {isSingleSelection && (
                          <p>このカテゴリは1つのみ選択可能です。既に別の商品が選択されています。</p>
                        )}
                        {categoryRule.maxSelection && sameCategoryCount >= categoryRule.maxSelection && (
                          <p>このカテゴリは最大{categoryRule.maxSelection}つまで選択可能です。</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* アクションボタン */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  閉じる
                </Button>
                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  className="flex-1"
                  disabled={isAdded || !canAddToCart()}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4 mr-1" />
                      追加しました
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      カートに追加
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};