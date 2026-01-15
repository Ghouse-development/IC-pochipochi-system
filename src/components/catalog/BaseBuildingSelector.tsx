import React, { useState, useMemo } from 'react';
import { Check, ChevronLeft } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { useCartStore } from '../../stores/useCartStore';
import { SelectionCard } from './SelectionCard';
import type { Product, ProductVariant, PlanType } from '../../types/product';

// 建具色カテゴリ
type ColorCategory = 'standard' | 'paint' | 'solid';

interface ColorOption {
  id: string;
  name: string;
  category: ColorCategory;
  price: number; // per location
}

// 標準カラー（全デザインで選択可能）
const STANDARD_COLORS: ColorOption[] = [
  { id: 'soft-walnut', name: 'ソフトウォールナット柄', category: 'standard', price: 0 },
  { id: 'walnut', name: 'ウォールナット柄', category: 'standard', price: 0 },
  { id: 'cherry', name: 'チェリー柄', category: 'standard', price: 0 },
  { id: 'grayge-ash', name: 'グレージュアッシュ柄', category: 'standard', price: 0 },
  { id: 'idea-oak', name: 'イデアオーク柄', category: 'standard', price: 0 },
  { id: 'maple', name: 'メープル柄', category: 'standard', price: 0 },
  { id: 'white-oak', name: 'ホワイトオーク柄', category: 'standard', price: 0 },
  { id: 'white-ash', name: 'ホワイトアッシュ柄', category: 'standard', price: 0 },
  { id: 'shikkui-white', name: 'しっくいホワイト柄', category: 'standard', price: 0 },
];

// ペイントカラー（+10,000円/箇所）
const PAINT_COLORS: ColorOption[] = [
  { id: 'black-oak', name: 'ブラックオーク柄', category: 'paint', price: 10000 },
  { id: 'navy-oak', name: 'ネイビーオーク柄', category: 'paint', price: 10000 },
  { id: 'bluegray-oak', name: 'ブルーグレーオーク柄', category: 'paint', price: 10000 },
  { id: 'bitterwald-oak', name: 'ビターウォルドオーク柄', category: 'paint', price: 10000 },
];

// ソリッドカラー（+20,000円/箇所）
const SOLID_COLORS: ColorOption[] = [
  { id: 'soil-black', name: 'ソイルブラック柄', category: 'solid', price: 20000 },
  { id: 'pearl-gray', name: 'パールグレー柄', category: 'solid', price: 20000 },
];

// デザインオプション
interface DesignOption {
  id: string;
  name: string;
  description: string;
  isStandard: boolean;
}

const DESIGN_OPTIONS: DesignOption[] = [
  { id: 'pa', name: 'PAデザイン', description: '居室・脱衣室・ランドリー用', isStandard: true },
  { id: 'ta', name: 'TAデザイン', description: 'トイレ用（上部スコープ有）', isStandard: true },
];

interface BaseBuildingSelectorProps {
  selectedPlan: string;
  onComplete: () => void;
  onCancel: () => void;
}

export const BaseBuildingSelector: React.FC<BaseBuildingSelectorProps> = ({
  selectedPlan,
  onComplete,
  onCancel,
}) => {
  const { addItem, items, clearCategoryItems } = useCartStore();

  // 既存の選択を確認
  const existingItem = items.find(i => i.product.categoryName === 'ベース建具');

  const [step, setStep] = useState<'color-category' | 'color' | 'design' | 'complete'>(
    existingItem ? 'complete' : 'color-category'
  );
  const [selectedColorCategory, setSelectedColorCategory] = useState<ColorCategory | null>(null);
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<DesignOption | null>(null);

  // 選択中のカラーリスト
  const availableColors = useMemo(() => {
    switch (selectedColorCategory) {
      case 'standard': return STANDARD_COLORS;
      case 'paint': return PAINT_COLORS;
      case 'solid': return SOLID_COLORS;
      default: return [];
    }
  }, [selectedColorCategory]);

  const handleColorCategorySelect = (category: ColorCategory) => {
    setSelectedColorCategory(category);
    setStep('color');
  };

  const handleColorSelect = (color: ColorOption) => {
    setSelectedColor(color);
    setStep('design');
  };

  const handleDesignSelect = (design: DesignOption) => {
    setSelectedDesign(design);
  };

  const handleComplete = () => {
    if (!selectedColor || !selectedDesign) return;

    // 既存のベース建具をクリア
    clearCategoryItems('interior-door');

    // 新しいアイテムを作成
    const product: Product = {
      id: `door-base-${selectedColor.id}-${selectedDesign.id}`,
      categoryId: 'interior-door',
      categoryName: 'ベース建具',
      subcategory: selectedColor.category === 'standard' ? '室内ドア標準' :
                   selectedColor.category === 'paint' ? '室内ドア ペイントカラー' :
                   '室内ドア ソリッドカラー',
      name: `VERITIS ${selectedDesign.name} ${selectedColor.name}`,
      manufacturer: 'Panasonic',
      modelNumber: `VERITIS-${selectedDesign.id.toUpperCase()}-${selectedColor.id.toUpperCase()}`,
      unit: '個',
      isOption: selectedColor.price > 0,
      variants: [
        { id: 'v1', color: selectedColor.name }
      ],
      pricing: [
        { plan: selectedPlan as PlanType, price: selectedColor.price }
      ],
    };

    const variant: ProductVariant = { id: 'v1', color: selectedColor.name };
    addItem(product, 1, variant);

    setStep('complete');
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* ヘッダー */}
      <PageHeader
        title="ベース建具を選択"
        subtitle="室内ドアの色とデザインを選んでください"
      />

      {/* ステップインジケーター */}
      {step !== 'complete' && (
        <div className="flex items-center gap-2 mb-4">
          <div className={`flex items-center gap-1 ${step === 'color-category' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
            <span>カラータイプ</span>
          </div>
          <div className="w-8 h-px bg-gray-300" />
          <div className={`flex items-center gap-1 ${step === 'color' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
            <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm">2</span>
            <span>色</span>
          </div>
          <div className="w-8 h-px bg-gray-300" />
          <div className={`flex items-center gap-1 ${step === 'design' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
            <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm">3</span>
            <span>デザイン</span>
          </div>
        </div>
      )}

      {/* ステップ1: カラータイプ選択 */}
      {step === 'color-category' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          <SelectionCard
            id="standard"
            name="標準カラー"
            description="9色から選べます"
            placeholderEmoji="🎨"
            placeholderBgColor="from-amber-100 to-orange-100"
            isStandard={true}
            price={0}
            isSelected={selectedColorCategory === 'standard'}
            onClick={() => handleColorCategorySelect('standard')}
          />
          <SelectionCard
            id="paint"
            name="ペイントカラー"
            description="4色から選べます"
            placeholderEmoji="🖌️"
            placeholderBgColor="from-blue-100 to-indigo-100"
            price={10000}
            unit="箇所"
            isSelected={selectedColorCategory === 'paint'}
            onClick={() => handleColorCategorySelect('paint')}
          />
          <SelectionCard
            id="solid"
            name="ソリッドカラー"
            description="2色から選べます"
            placeholderEmoji="✨"
            placeholderBgColor="from-gray-200 to-slate-300"
            price={20000}
            unit="箇所"
            isSelected={selectedColorCategory === 'solid'}
            onClick={() => handleColorCategorySelect('solid')}
          />
        </div>
      )}

      {/* ステップ2: 色選択 */}
      {step === 'color' && (
        <div>
          <button
            onClick={() => setStep('color-category')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> カラータイプ選択に戻る
          </button>

          <h4 className="font-medium text-gray-800 mb-4">
            {selectedColorCategory === 'standard' ? '標準カラー' :
             selectedColorCategory === 'paint' ? 'ペイントカラー' :
             'ソリッドカラー'}を選択
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {availableColors.map(color => (
              <SelectionCard
                key={color.id}
                id={color.id}
                name={color.name}
                description={color.price > 0 ? `+¥${color.price.toLocaleString()}/箇所` : '標準'}
                placeholderEmoji="🎨"
                placeholderBgColor="from-amber-100 to-orange-100"
                isSelected={selectedColor?.id === color.id}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ステップ3: デザイン選択 */}
      {step === 'design' && selectedColor && (
        <div>
          <button
            onClick={() => setStep('color')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 色選択に戻る
          </button>

          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">選択中の色: </span>
            <span className="font-medium">{selectedColor.name}</span>
            {selectedColor.price > 0 && (
              <span className="ml-2 text-orange-600">
                (+¥{selectedColor.price.toLocaleString()}/箇所)
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-4">
            {DESIGN_OPTIONS.map(design => (
              <SelectionCard
                key={design.id}
                id={design.id}
                name={design.name}
                description={design.description}
                placeholderEmoji="🚪"
                placeholderBgColor="from-amber-100 to-yellow-100"
                isStandard={design.isStandard}
                isSelected={selectedDesign?.id === design.id}
                onClick={() => handleDesignSelect(design)}
              />
            ))}
          </div>

          {/* 完了ボタン */}
          <div className="flex gap-2">
            <button
              onClick={onCancel}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              onClick={handleComplete}
              disabled={!selectedDesign}
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
            ベース建具の選択が完了しました
          </h4>
          {selectedColor && selectedDesign && (
            <p className="text-sm text-gray-600 mb-4">
              {selectedDesign.name} / {selectedColor.name}
              {selectedColor.price > 0 && ` (+¥${selectedColor.price.toLocaleString()}/箇所)`}
            </p>
          )}
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

export default BaseBuildingSelector;
