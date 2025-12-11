import React, { useState } from 'react';
import { X, Check, Palette, Info } from 'lucide-react';
import type { Product, ProductVariant } from '../../types/product';
import { formatPrice } from '../../lib/utils';
import { generateProductPlaceholder, getThumbnailUrl } from '../../utils/imageUtils';

interface ProductSelectionModalProps {
  product: Product;
  onClose: () => void;
  onSelect: (product: Product, variant: ProductVariant) => void;
}

export const ProductSelectionModal: React.FC<ProductSelectionModalProps> = ({
  product,
  onClose,
  onSelect,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const price = product.pricing.find((p) => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;

  const handleConfirm = () => {
    onSelect(product, selectedVariant);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Left: Image */}
            <div>
              <div className="aspect-w-16 aspect-h-12 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={
                    imageError[selectedVariant.id]
                      ? generateProductPlaceholder(product.name, selectedVariant.color)
                      : selectedVariant.imageUrl || generateProductPlaceholder(product.name, selectedVariant.color)
                  }
                  alt={`${product.name} - ${selectedVariant.color}`}
                  className="w-full h-full object-cover"
                  onError={() => {
                    setImageError(prev => ({ ...prev, [selectedVariant.id]: true }));
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Info className="w-4 h-4 mr-2" />
                  <span>{product.manufacturer}</span>
                </div>
                {product.modelNumber && (
                  <div className="text-sm text-gray-500">
                    型番: {product.modelNumber}
                  </div>
                )}
                {product.description && (
                  <p className="text-sm text-gray-600 mt-3">
                    {product.description}
                  </p>
                )}
              </div>
            </div>

            {/* Right: Color Selection */}
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  カラーバリエーション
                </h3>

                {/* Color Options Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`
                        relative p-4 rounded-lg border-2 transition-all
                        ${selectedVariant.id === variant.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        {/* Color Swatch */}
                        <div
                          className="w-10 h-10 rounded-md border border-gray-300 flex-shrink-0"
                          style={{
                            backgroundColor: variant.colorCode || '#e5e7eb',
                            backgroundImage: `url(${getThumbnailUrl(variant.thumbnailUrl, product.name, variant.colorCode)})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />

                        {/* Color Name */}
                        <div className="text-left flex-1">
                          <div className="font-medium text-gray-900">
                            {variant.color}
                          </div>
                          {variant.colorCode && (
                            <div className="text-xs text-gray-500">
                              {variant.colorCode}
                            </div>
                          )}
                        </div>

                        {/* Selected Checkmark */}
                        {selectedVariant.id === variant.id && (
                          <div className="absolute top-2 right-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Color Details */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">選択中のカラー</h4>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-16 h-16 rounded-md border-2 border-gray-300"
                    style={{
                      backgroundColor: selectedVariant.colorCode || '#e5e7eb',
                      backgroundImage: `url(${getThumbnailUrl(selectedVariant.thumbnailUrl, product.name, selectedVariant.colorCode)})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {selectedVariant.color}
                    </div>
                    {selectedVariant.colorCode && (
                      <div className="text-sm text-gray-500">
                        コード: {selectedVariant.colorCode}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Price Info */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">価格</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {price === 0 ? '標準仕様' : formatPrice(price)}
                  </span>
                </div>
                {price > 0 && product.unit && (
                  <div className="text-sm text-gray-600 text-right mt-1">
                    / {product.unit}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              {product.isOption ? (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                  オプション製品
                </span>
              ) : (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">
                  標準仕様
                </span>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                キャンセル
              </button>
              <button
                onClick={handleConfirm}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Check className="w-5 h-5" />
                この色で決定
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};