import React, { useState, useEffect } from 'react';
import { Check, ChevronLeft, Image as ImageIcon, X, ExternalLink, Home } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { RoomApplyModal } from './RoomApplyModal';
import { useCartStore } from '../../stores/useCartStore';
import { STANDARD_ROOMS } from '../../types/product';
import type { Product, ProductVariant } from '../../types/product';

interface RoomBasedMaterialSelectorProps {
  categoryId: string;
  categoryName: string;
  products: Product[];
  onComplete: () => void;
  onCancel: () => void;
}

// 色選択モーダル
interface ColorSelectModalProps {
  product: Product;
  onSelect: (variant: ProductVariant) => void;
  onClose: () => void;
}

const ColorSelectModal: React.FC<ColorSelectModalProps> = ({ product, onSelect, onClose }) => {
  const variants = product.variants || [];
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [previewIndex, setPreviewIndex] = useState(0);

  const getVariantImage = (variant: ProductVariant | undefined): string | null => {
    if (!variant) return null;
    return variant.images?.[0] || variant.imageUrl || null;
  };

  const displayIndex = selectedIndex ?? previewIndex;
  const displayVariant = variants[displayIndex];
  const displayImage = getVariantImage(displayVariant);
  const selectedVariant = selectedIndex !== null ? variants[selectedIndex] : null;

  const handleColorClick = (idx: number) => {
    setSelectedIndex(idx);
  };

  const handleConfirm = () => {
    if (selectedVariant) {
      onSelect(selectedVariant);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-bold text-gray-800">{product.name} - 色を選択</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-4">
            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden">
              {displayImage ? (
                <img
                  src={displayImage}
                  alt={displayVariant?.color || ''}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <span className="text-4xl">🎨</span>
                  <span className="text-sm text-gray-500 mt-2">{displayVariant?.color}</span>
                </div>
              )}
            </div>
            <div className="mt-3 text-center">
              <p className="text-lg font-bold text-gray-800">
                {displayVariant?.color || '色を選択してください'}
              </p>
              {selectedVariant && (
                <p className="text-sm text-blue-600 mt-1">選択中</p>
              )}
            </div>
          </div>

          <div className="md:w-1/2 p-4 border-t md:border-t-0 md:border-l overflow-y-auto max-h-[70vh]">
            <p className="text-sm text-gray-600 mb-3">{variants.length}色から選択</p>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {variants.map((variant, idx) => {
                const variantImage = getVariantImage(variant);
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={variant.id}
                    onClick={() => handleColorClick(idx)}
                    onMouseEnter={() => setPreviewIndex(idx)}
                    className={`aspect-square rounded-lg border-2 overflow-hidden transition-all hover:scale-105 relative ${
                      isSelected
                        ? 'border-blue-500 ring-2 ring-blue-300'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {variantImage ? (
                      <img
                        src={variantImage}
                        alt={variant.color}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-[10px] text-gray-500 p-1"
                        style={{ backgroundColor: variant.colorCode || '#eee' }}
                      >
                        {variant.color}
                      </div>
                    )}
                    {isSelected && (
                      <div className="absolute top-0.5 right-0.5 bg-blue-500 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {product.description && (
              <div className="bg-blue-50 rounded-lg p-3 mb-3">
                <p className="text-xs font-bold text-blue-800 mb-1">商品特徴</p>
                <p className="text-sm text-blue-700">{product.description}</p>
              </div>
            )}

            {product.productUrl && (
              <a
                href={product.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm bg-gray-50 rounded-lg p-3"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="underline">メーカーサイトで詳細を見る</span>
              </a>
            )}
          </div>
        </div>

        <div className="p-4 border-t flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
          >
            キャンセル
          </button>
          <button
            onClick={handleConfirm}
            disabled={selectedVariant === null}
            className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            {selectedVariant ? `「${selectedVariant.color}」に決定` : '色を選択してください'}
          </button>
        </div>
      </div>
    </div>
  );
};

// 商品カード
interface ProductCardProps {
  product: Product;
  isSelected: boolean;
  selectedVariantId?: string;
  onSelect: (product: Product, variant: ProductVariant) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isSelected,
  selectedVariantId,
  onSelect,
}) => {
  const [showColorModal, setShowColorModal] = useState(false);
  const [displayVariantIndex, setDisplayVariantIndex] = useState(0);

  const variants = product.variants || [];
  const displayVariant = variants[displayVariantIndex] || variants[0];

  useEffect(() => {
    if (isSelected && selectedVariantId) {
      const idx = variants.findIndex(v => v.id === selectedVariantId);
      if (idx >= 0) setDisplayVariantIndex(idx);
    }
  }, [isSelected, selectedVariantId, variants]);

  const getVariantImage = (variant: ProductVariant | undefined): string | null => {
    if (!variant) return null;
    return variant.images?.[0] || variant.imageUrl || null;
  };

  const currentImage = getVariantImage(displayVariant);
  const hasMultipleVariants = variants.length > 1;

  const handleCardClick = () => {
    if (hasMultipleVariants) {
      setShowColorModal(true);
    } else if (displayVariant) {
      onSelect(product, displayVariant);
    }
  };

  const handleColorSelect = (variant: ProductVariant) => {
    onSelect(product, variant);
    setShowColorModal(false);
    const idx = variants.findIndex(v => v.id === variant.id);
    if (idx >= 0) setDisplayVariantIndex(idx);
  };

  return (
    <>
      <div
        className={`bg-white rounded-lg overflow-hidden transition-all cursor-pointer ${
          isSelected
            ? 'border-2 border-blue-500 shadow-lg'
            : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
        }`}
        onClick={handleCardClick}
      >
        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative">
          {currentImage ? (
            <img
              src={currentImage}
              alt={`${product.name} - ${displayVariant?.color || ''}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <span className="text-2xl">🎨</span>
              {displayVariant?.color && (
                <span className="text-xs text-gray-500">{displayVariant.color}</span>
              )}
              <div className="mt-1 flex items-center gap-1 text-gray-400">
                <ImageIcon className="w-3 h-3" />
                <span className="text-[10px]">画像準備中</span>
              </div>
            </div>
          )}

          {isSelected && (
            <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
          )}
        </div>

        <div className="p-2">
          <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-sm font-bold text-blue-600">標準</span>
          </div>
          {hasMultipleVariants && (
            <p className="text-[10px] text-blue-600 mt-1">
              タップで{variants.length}色から選択
            </p>
          )}
        </div>
      </div>

      {showColorModal && (
        <ColorSelectModal
          product={product}
          onSelect={handleColorSelect}
          onClose={() => setShowColorModal(false)}
        />
      )}
    </>
  );
};

// メインセレクター
export const RoomBasedMaterialSelector: React.FC<RoomBasedMaterialSelectorProps> = ({
  categoryId,
  categoryName,
  products,
  onComplete,
  onCancel,
}) => {
  const { addItemWithRooms, clearCategoryItems, items } = useCartStore();

  // 既存の選択を復元
  const existingItem = items.find(
    i => i.product.categoryId === categoryId && i.appliedRooms && i.appliedRooms.length > 0
  );

  const [step, setStep] = useState<'select' | 'rooms' | 'complete'>(
    existingItem ? 'rooms' : 'select'
  );
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    existingItem ? existingItem.product as Product : null
  );
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    existingItem ? existingItem.selectedVariant : null
  );
  const [selectedRooms, setSelectedRooms] = useState<string[]>(
    existingItem?.appliedRooms || []
  );
  const [showRoomModal, setShowRoomModal] = useState(false);

  const handleProductSelect = (product: Product, variant: ProductVariant) => {
    setSelectedProduct(product);
    setSelectedVariant(variant);
    setShowRoomModal(true);
  };

  const handleRoomConfirm = (rooms: string[]) => {
    setSelectedRooms(rooms);
    setShowRoomModal(false);

    if (selectedProduct && selectedVariant && rooms.length > 0) {
      // カテゴリのアイテムをクリアしてから追加
      clearCategoryItems(categoryId);
      addItemWithRooms(selectedProduct, selectedVariant, rooms);
      setStep('complete');
    }
  };

  // 選択した部屋名を取得
  const getSelectedRoomNames = () => {
    return selectedRooms
      .map(id => STANDARD_ROOMS.find(r => r.id === id)?.name)
      .filter(Boolean)
      .join('、');
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <PageHeader
        title={`${categoryName}を選択`}
        subtitle={
          step === 'select'
            ? '商品を選択してください'
            : step === 'rooms'
            ? '適用する部屋を選択してください'
            : '選択が完了しました'
        }
      />

      {/* ステップ1: 商品選択 */}
      {step === 'select' && (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                isSelected={selectedProduct?.id === product.id}
                selectedVariantId={selectedVariant?.id}
                onSelect={handleProductSelect}
              />
            ))}
          </div>
        </div>
      )}

      {/* ステップ2: 部屋選択後の確認 */}
      {step === 'complete' && selectedProduct && selectedVariant && (
        <div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Check className="w-5 h-5 text-green-600" />
              <h3 className="font-bold text-green-800">選択完了</h3>
            </div>
            <div className="space-y-2 text-sm text-green-700">
              <p><span className="font-medium">商品:</span> {selectedProduct.name}</p>
              <p><span className="font-medium">色:</span> {selectedVariant.color}</p>
              <p className="flex items-start gap-1">
                <Home className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><span className="font-medium">適用部屋:</span> {getSelectedRoomNames()}</span>
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setStep('select');
                setSelectedProduct(null);
                setSelectedVariant(null);
                setSelectedRooms([]);
              }}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              選び直す
            </button>
            <button
              onClick={() => setShowRoomModal(true)}
              className="flex-1 py-3 px-4 border border-blue-300 bg-blue-50 rounded-xl text-blue-700 hover:bg-blue-100 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              部屋を変更
            </button>
            <button
              onClick={onComplete}
              className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              次へ進む
            </button>
          </div>
        </div>
      )}

      {/* 部屋選択モーダル */}
      <RoomApplyModal
        isOpen={showRoomModal}
        onClose={() => {
          setShowRoomModal(false);
          if (step === 'select') {
            // 商品選択に戻る
          }
        }}
        onConfirm={handleRoomConfirm}
        categoryName={categoryName}
        productName={`${selectedProduct?.name || ''} / ${selectedVariant?.color || ''}`}
        initialRooms={selectedRooms}
      />

      {/* キャンセルボタン */}
      {step === 'select' && (
        <div className="mt-6">
          <button
            onClick={onCancel}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            キャンセル
          </button>
        </div>
      )}
    </div>
  );
};

export default RoomBasedMaterialSelector;
