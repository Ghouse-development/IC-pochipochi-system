import React, { useState, useEffect } from 'react';
import { Check, ChevronLeft, Palette, ChevronDown, ChevronUp, Image as ImageIcon } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import type { Product, ProductVariant } from '../../types/product';

interface ColorSelection {
  colorIndex: number;
  product: Product | null;
  variant: ProductVariant | null;
  area: number;
}

interface MultiColorAreaSelectorProps {
  categoryId: string;
  categoryName: string;
  products: Product[];
  maxColors?: number;
  onComplete: () => void;
  onCancel: () => void;
}

// 商品カード（色選択内蔵）
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
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const variants = product.variants || [];
  const currentVariant = variants[selectedVariantIndex] || variants[0];

  // 選択済みの場合、該当バリアントを表示
  useEffect(() => {
    if (isSelected && selectedVariantId) {
      const idx = variants.findIndex(v => v.id === selectedVariantId);
      if (idx >= 0) setSelectedVariantIndex(idx);
    }
  }, [isSelected, selectedVariantId, variants]);

  const getVariantImage = (variant: ProductVariant | undefined): string | null => {
    if (!variant) return null;
    return variant.images?.[0] || variant.imageUrl || null;
  };

  const currentImage = getVariantImage(currentVariant);
  const hasMultipleVariants = variants.length > 1;

  const handleSelect = () => {
    if (currentVariant) {
      onSelect(product, currentVariant);
    }
  };

  const handleVariantClick = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    setSelectedVariantIndex(idx);
    // 選択中の商品の場合、バリアント変更も即座に反映
    if (isSelected && variants[idx]) {
      onSelect(product, variants[idx]);
    }
  };

  return (
    <div
      className={`bg-white rounded-xl border-2 overflow-hidden transition-all ${
        isSelected
          ? 'border-blue-500 ring-2 ring-blue-200 shadow-lg'
          : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
      }`}
    >
      {/* 画像エリア */}
      <div
        className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative cursor-pointer"
        onClick={handleSelect}
      >
        {currentImage ? (
          <img
            src={currentImage}
            alt={`${product.name} - ${currentVariant?.color || ''}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-4xl mb-2">🎨</span>
            {currentVariant?.color && (
              <span className="text-xs text-gray-500">{currentVariant.color}</span>
            )}
            <div className="mt-1 flex items-center gap-1 text-gray-400">
              <ImageIcon className="w-3 h-3" />
              <span className="text-[10px]">画像準備中</span>
            </div>
          </div>
        )}

        {/* 選択済みマーク */}
        {isSelected && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        )}
      </div>

      {/* 情報エリア */}
      <div className="p-3">
        <h4 className="font-bold text-sm text-gray-800 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h4>
        <p className="text-xs text-gray-500 mb-2">{product.manufacturer}</p>

        {/* 色選択（複数バリアントがある場合） */}
        {hasMultipleVariants && (
          <div className="mb-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowColorPicker(!showColorPicker);
              }}
              className="w-full flex items-center justify-between px-2 py-1.5 bg-gray-50 rounded-lg text-xs hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-1.5">
                {currentVariant?.colorCode && (
                  <div
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: currentVariant.colorCode }}
                  />
                )}
                <span className="text-gray-700 truncate max-w-[80px]">{currentVariant?.color || '色を選択'}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <span className="text-[10px]">{variants.length}色</span>
                {showColorPicker ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </div>
            </button>

            {/* 色選択パネル */}
            {showColorPicker && (
              <div className="mt-1.5 p-1.5 bg-gray-50 rounded-lg max-h-32 overflow-y-auto">
                <div className="grid grid-cols-4 gap-1">
                  {variants.map((variant, idx) => {
                    const variantImg = getVariantImage(variant);
                    const isVariantSelected = idx === selectedVariantIndex;
                    return (
                      <button
                        key={variant.id}
                        onClick={(e) => handleVariantClick(e, idx)}
                        className={`relative rounded overflow-hidden border transition-all ${
                          isVariantSelected
                            ? 'border-blue-500 ring-1 ring-blue-200'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        title={variant.color}
                      >
                        <div className="aspect-square bg-gray-100">
                          {variantImg ? (
                            <img src={variantImg} alt={variant.color} className="w-full h-full object-cover" />
                          ) : variant.colorCode ? (
                            <div className="w-full h-full" style={{ backgroundColor: variant.colorCode }} />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <ImageIcon className="w-3 h-3 text-gray-300" />
                            </div>
                          )}
                        </div>
                        {isVariantSelected && (
                          <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center">
                            <Check className="w-2 h-2 text-white" strokeWidth={3} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 選択ボタン */}
        <button
          onClick={handleSelect}
          className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${
            isSelected
              ? 'bg-blue-100 text-blue-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isSelected ? '選択中' : '選択する'}
        </button>
      </div>
    </div>
  );
};

export const MultiColorAreaSelector: React.FC<MultiColorAreaSelectorProps> = ({
  categoryId,
  categoryName,
  products,
  maxColors = 3,
  onComplete,
  onCancel,
}) => {
  const { addItemWithArea, clearCategoryItems, items } = useCartStore();

  // 既存の選択を復元
  const existingSelections = items
    .filter(i => i.product.categoryId === categoryId && i.colorIndex !== undefined)
    .map(i => ({
      colorIndex: i.colorIndex!,
      product: i.product,
      variant: i.selectedVariant,
      area: i.area || 0,
    }));

  const [step, setStep] = useState<'count' | 'select' | 'complete'>(
    existingSelections.length > 0 ? 'select' : 'count'
  );
  const [colorCount, setColorCount] = useState(
    existingSelections.length > 0 ? existingSelections.length : 1
  );
  const [selections, setSelections] = useState<ColorSelection[]>(
    existingSelections.length > 0
      ? existingSelections
      : [{ colorIndex: 1, product: null, variant: null, area: 0 }]
  );
  const [currentColorIndex, setCurrentColorIndex] = useState(1);

  // 色数に応じて選択配列を調整
  useEffect(() => {
    if (step === 'select') {
      const newSelections: ColorSelection[] = [];
      for (let i = 1; i <= colorCount; i++) {
        const existing = selections.find(s => s.colorIndex === i);
        newSelections.push(existing || { colorIndex: i, product: null, variant: null, area: 0 });
      }
      setSelections(newSelections);
    }
  }, [colorCount, step]);

  const handleColorCountSelect = (count: number) => {
    setColorCount(count);
    const newSelections: ColorSelection[] = [];
    for (let i = 1; i <= count; i++) {
      newSelections.push({ colorIndex: i, product: null, variant: null, area: 0 });
    }
    setSelections(newSelections);
    setCurrentColorIndex(1);
    setStep('select');
  };

  const handleProductSelect = (product: Product, variant: ProductVariant) => {
    setSelections(prev =>
      prev.map(s =>
        s.colorIndex === currentColorIndex
          ? { ...s, product, variant }
          : s
      )
    );
  };

  const handleAreaChange = (colorIndex: number, area: number) => {
    setSelections(prev =>
      prev.map(s =>
        s.colorIndex === colorIndex
          ? { ...s, area }
          : s
      )
    );
  };

  const handleComplete = () => {
    // カテゴリのアイテムをクリアしてから追加
    clearCategoryItems(categoryId);

    // 選択されたアイテムをカートに追加
    selections.forEach(selection => {
      if (selection.product && selection.variant && selection.area > 0) {
        addItemWithArea(
          selection.product,
          selection.variant,
          selection.area,
          selection.colorIndex
        );
      }
    });

    setStep('complete');
  };

  const currentSelection = selections.find(s => s.colorIndex === currentColorIndex);
  const allSelected = selections.every(s => s.product && s.variant && s.area > 0);

  // 製品をサブカテゴリでグループ化
  const groupedProducts = products.reduce((acc, product) => {
    const subcategory = product.subcategory || 'その他';
    if (!acc[subcategory]) acc[subcategory] = [];
    acc[subcategory].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <Palette className="w-6 h-6 text-blue-500" />
          {categoryName}を選択
        </h3>
        <p className="text-sm text-gray-600">
          使用する色の数と面積を指定してください
        </p>
      </div>

      {/* ステップ1: 色数選択 */}
      {step === 'count' && (
        <div>
          <h4 className="font-medium text-gray-800 mb-4">
            何色使いますか？
          </h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {[1, 2, 3].filter(n => n <= maxColors).map(count => (
              <button
                key={count}
                onClick={() => handleColorCountSelect(count)}
                className="p-6 border-2 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
              >
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: count }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 ${
                        i === 0 ? 'bg-blue-500 border-blue-500' :
                        i === 1 ? 'bg-green-500 border-green-500' :
                        'bg-orange-500 border-orange-500'
                      }`}
                    />
                  ))}
                </div>
                <p className="font-bold text-lg">{count}色</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ステップ2: 色選択 */}
      {step === 'select' && (
        <div>
          <button
            onClick={() => setStep('count')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 色数選択に戻る
          </button>

          {/* 色タブ */}
          <div className="flex gap-2 mb-6 border-b">
            {selections.map(selection => (
              <button
                key={selection.colorIndex}
                onClick={() => setCurrentColorIndex(selection.colorIndex)}
                className={`px-4 py-2 font-medium transition-all relative ${
                  currentColorIndex === selection.colorIndex
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  selection.colorIndex === 1 ? 'bg-blue-500' :
                  selection.colorIndex === 2 ? 'bg-green-500' :
                  'bg-orange-500'
                }`} />
                {selection.colorIndex}色目
                {selection.product && selection.area > 0 && (
                  <Check className="w-4 h-4 inline ml-1 text-green-500" />
                )}
              </button>
            ))}
          </div>

          {/* 現在の色の選択状態 */}
          {currentSelection && (
            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h5 className="font-medium text-gray-800">
                  <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                    currentColorIndex === 1 ? 'bg-blue-500' :
                    currentColorIndex === 2 ? 'bg-green-500' :
                    'bg-orange-500'
                  }`} />
                  {currentColorIndex}色目の設定
                </h5>
                {currentSelection.product && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      {currentSelection.product.name} / {currentSelection.variant?.color}
                    </span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="0"
                        step="0.1"
                        value={currentSelection.area || ''}
                        onChange={(e) => handleAreaChange(currentColorIndex, parseFloat(e.target.value) || 0)}
                        className="w-24 px-3 py-2 border rounded-lg text-right"
                        placeholder="0"
                      />
                      <span className="text-gray-600">㎡</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 製品選択 - 1商品1カード */}
          <div className="space-y-6">
            {Object.entries(groupedProducts).map(([subcategory, subcategoryProducts]) => (
              <div key={subcategory}>
                <h5 className="text-sm font-medium text-gray-500 mb-3">{subcategory}</h5>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                  {subcategoryProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      isSelected={currentSelection?.product?.id === product.id}
                      selectedVariantId={currentSelection?.variant?.id}
                      onSelect={handleProductSelect}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 完了ボタン */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex gap-2">
            <button
              onClick={onCancel}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              onClick={handleComplete}
              disabled={!allSelected}
              className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              選択を確定
            </button>
          </div>
        </div>
      )}

      {/* 完了画面 */}
      {step === 'complete' && (
        <div className="bg-green-50 rounded-xl p-6 text-center">
          <Check className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h4 className="font-bold text-gray-800 mb-2">
            {categoryName}の選択が完了しました
          </h4>
          <div className="text-sm text-gray-600 mb-4 space-y-1">
            {selections.map(selection => (
              selection.product && (
                <p key={selection.colorIndex}>
                  {selection.colorIndex}色目: {selection.product.name} ({selection.variant?.color}) - {selection.area}㎡
                </p>
              )
            ))}
          </div>
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
          >
            次のカテゴリへ
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiColorAreaSelector;
