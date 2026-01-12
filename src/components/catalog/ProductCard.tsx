import React, { useState, useRef, useEffect, memo, useCallback } from 'react';
import type { Product } from '../../types/product';
import { UNIT_SYMBOLS } from '../../types/product';
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
    <div
      onClick={handleSelect}
      className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:border-blue-300 hover:scale-[1.02]"
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${product.name}の詳細を見る。価格: ${price === 0 ? '標準' : formatPrice(price)}`}
    >
      {/* 画像エリア（正方形） */}
      <div ref={imgRef} className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
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

        {/* バッジ */}
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-1 rounded-md text-xs font-bold shadow-md ${
            product.isOption ? 'bg-orange-500 text-white' : 'bg-emerald-500 text-white'
          }`}>
            {product.isOption ? 'オプション' : '標準'}
          </span>
        </div>
      </div>

      {/* 情報エリア */}
      <div className="p-3">
        <p className="text-xs text-gray-500 mb-0.5 truncate">{product.manufacturer}</p>
        <h3 className="font-bold text-sm text-gray-800 line-clamp-2 mb-1">
          {product.name}
        </h3>

        {/* 価格 */}
        <div className="flex items-baseline gap-1 mb-2">
          <span className={`text-sm font-black ${price === 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
            {price === 0 ? '標準' : formatPrice(price)}
          </span>
          {price > 0 && product.unit && (
            <span className="text-xs text-gray-500">
              /{UNIT_SYMBOLS[product.unit] || product.unit}
            </span>
          )}
        </div>

        {/* 色バリアント（サムネイル表示） */}
        {product.variants.length > 1 && (
          <div className="flex gap-1 flex-wrap">
            {product.variants.slice(0, 4).map((variant) => {
              const hasImage = variant.imageUrl || variant.thumbnailUrl;
              const hexColor = getHexColor(variant.colorCode) !== '#CCCCCC'
                ? getHexColor(variant.colorCode)
                : getHexColor(variant.color);
              return hasImage ? (
                <img
                  key={variant.id}
                  src={variant.thumbnailUrl || variant.imageUrl}
                  alt={variant.color}
                  className="w-6 h-6 rounded object-cover border border-gray-200"
                  title={variant.color}
                />
              ) : (
                <div
                  key={variant.id}
                  className="w-6 h-6 rounded border border-gray-200"
                  style={{ backgroundColor: hexColor }}
                  title={variant.color}
                />
              );
            })}
            {product.variants.length > 4 && (
              <div className="w-6 h-6 rounded border border-gray-200 bg-gray-100 flex items-center justify-center">
                <span className="text-[10px] text-gray-600">+{product.variants.length - 4}</span>
              </div>
            )}
          </div>
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