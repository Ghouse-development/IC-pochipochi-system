import React, { useState, useRef, useEffect, memo, useCallback } from 'react';
import type { Product } from '../../types/product';
import { UNIT_SYMBOLS } from '../../types/product';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { formatPrice, getProductPrice } from '../../lib/utils';
import { generateProductPlaceholder } from '../../utils/imageUtils';
import { getHexColor } from '../../utils/colorMapping';

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
    <Card
      hoverable
      onClick={handleSelect}
      className="overflow-hidden"
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${product.name}の詳細を見る。価格: ${price === 0 ? '標準仕様' : formatPrice(price)}`}
    >
      <div ref={imgRef} className="aspect-w-16 aspect-h-12 bg-gray-100 relative">
        {/* Loading Skeleton */}
        {(!imageLoaded || !isVisible) && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]" />
        )}
        {isVisible && (
          <img
            src={displayImage}
            alt={product.name}
            className={`w-full h-32 sm:h-48 object-cover transition-opacity duration-300 ${
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
      </div>
      
      <div className="p-2 sm:p-4">
        <div className="flex items-start justify-between mb-1 sm:mb-2">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2 flex-1">
            {product.name}
          </h3>
          {product.isOption ? (
            <Badge variant="option" className="ml-1 sm:ml-2 flex-shrink-0 text-xs">
              オプション
            </Badge>
          ) : (
            <Badge variant="standard" className="ml-1 sm:ml-2 flex-shrink-0 text-xs">
              標準
            </Badge>
          )}
        </div>
        
        <p className="text-xs text-gray-500 mb-0.5 sm:mb-1">{product.manufacturer}</p>
        
        {product.modelNumber && (
          <p className="text-xs text-gray-400 mb-1 sm:mb-2 hidden sm:block">{product.modelNumber}</p>
        )}
        
        <div className="flex items-baseline justify-between mt-2 sm:mt-3">
          <span className="text-sm sm:text-lg font-bold text-gray-900">
            {price === 0 ? '標準仕様' : formatPrice(price)}
          </span>
          {price > 0 && product.unit && (
            <span className="text-xs text-gray-500">
              / {UNIT_SYMBOLS[product.unit] || product.unit}
            </span>
          )}
        </div>
        
        {product.variants.length > 1 && (
          <div className="flex gap-1 mt-3">
            {product.variants.slice(0, 5).map((variant) => {
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
            {product.variants.length > 5 && (
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
                <span className="text-xs text-gray-600">+{product.variants.length - 5}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
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
  if (prevProduct.manufacturer !== nextProduct.manufacturer) return false;

  // 価格の比較
  const prevPrice = getProductPrice(prevProduct.pricing);
  const nextPrice = getProductPrice(nextProduct.pricing);
  if (prevPrice !== nextPrice) return false;

  // バリアント数の比較（カラーバリエーション表示に影響）
  if (prevProduct.variants.length !== nextProduct.variants.length) return false;

  // コールバック参照の比較
  if (prevProps.onSelect !== nextProps.onSelect) return false;

  return true;
});