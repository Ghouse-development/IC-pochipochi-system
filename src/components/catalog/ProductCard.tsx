import React, { useState, useRef, useEffect, memo, useCallback } from 'react';
import type { Product } from '../../types/product';
import { UNIT_SYMBOLS } from '../../types/product';
import { formatPrice, getProductPrice } from '../../lib/utils';
import { generateProductPlaceholder } from '../../utils/imageUtils';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCardComponent: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const price = getProductPrice(product.pricing);
  const defaultVariant = product.variants[0];

  const imagePlaceholder = generateProductPlaceholder(
    product.name,
    defaultVariant?.color
  );

  const displayImage = imageError
    ? imagePlaceholder
    : (defaultVariant?.imageUrl || defaultVariant?.thumbnailUrl || imagePlaceholder);

  const handleSelect = useCallback(() => {
    onSelect(product);
  }, [onSelect, product]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelect();
    }
  }, [handleSelect]);

  return (
    <div
      onClick={handleSelect}
      className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md hover:border-blue-300"
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${product.name}の詳細を見る。価格: ${price === 0 ? '標準' : formatPrice(price)}`}
    >
      {/* 画像エリア（正方形） */}
      <div ref={imgRef} className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Loading Skeleton */}
        {(!imageLoaded || !isVisible) && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]" />
        )}
        {isVisible && (
          <img
            src={displayImage}
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(true);
            }}
          />
        )}

        {/* バッジ（標準のみ表示） */}
        {!product.isOption && (
          <div className="absolute top-1 left-1">
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-white">
              標準
            </span>
          </div>
        )}
      </div>

      {/* 情報エリア - シンプル化 */}
      <div className="p-2">
        {/* アイテム名 */}
        <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
          {product.name}
        </h3>

        {/* 価格・単位 */}
        <div className="flex items-baseline gap-1 mt-1">
          <span className={`text-sm font-bold ${price === 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
            {price === 0 ? '標準' : formatPrice(price)}
          </span>
          {price > 0 && product.unit && (
            <span className="text-xs text-gray-500">
              /{UNIT_SYMBOLS[product.unit] || product.unit}
            </span>
          )}
        </div>

        {/* 選べるアイテム数 */}
        {product.variants.length > 1 && (
          <span className="text-[10px] text-gray-400">{product.variants.length}色から選択</span>
        )}
      </div>
    </div>
  );
};

// React.memoでメモ化（商品データとコールバックの変更を検知）
export const ProductCard = memo(ProductCardComponent, (prevProps, nextProps) => {
  const prevProduct = prevProps.product;
  const nextProduct = nextProps.product;

  // 基本プロパティの比較
  if (prevProduct.id !== nextProduct.id) return false;
  if (prevProduct.name !== nextProduct.name) return false;
  if (prevProduct.isOption !== nextProduct.isOption) return false;

  // 価格の比較
  const prevPrice = getProductPrice(prevProduct.pricing);
  const nextPrice = getProductPrice(nextProduct.pricing);
  if (prevPrice !== nextPrice) return false;

  // バリアント数の比較
  if (prevProduct.variants.length !== nextProduct.variants.length) return false;

  // コールバック参照の比較
  if (prevProps.onSelect !== nextProps.onSelect) return false;

  return true;
});