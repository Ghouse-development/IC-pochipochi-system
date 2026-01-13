import React, { useState, useMemo } from 'react';
import { Check, ChevronLeft } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { useCartStore } from '../../stores/useCartStore';
import { SelectionCard } from './SelectionCard';
import diningTableConfig from '../../data/config/diningTableConfig.json';
import type { Product } from '../../types/product';

// ====================
// 型定義
// ====================
interface TopColor {
  id: string;
  name: string;
  code: string;
  hexColor: string;
}

interface LegOption {
  id: string;
  shape: string;
  color: string;
  price: number;
}

interface SizeOption {
  id: string;
  name: string;
  displayName: string;
  price: number;
}

interface OutletOption {
  id: string;
  name: string;
  price: number;
}

type TableShape = 'square' | 'round' | 'none';
type Step = 'shape' | 'size' | 'leg' | 'color' | 'outlet' | 'complete';

interface DiningTableSelectorProps {
  selectedPlan: string;
  onComplete: () => void;
  onCancel: () => void;
}

// ====================
// コンポーネント
// ====================
export const DiningTableSelector: React.FC<DiningTableSelectorProps> = ({
  selectedPlan: _selectedPlan,
  onComplete,
  onCancel,
}) => {
  const addItem = useCartStore((state) => state.addItem);

  // 選択状態
  const [currentStep, setCurrentStep] = useState<Step>('shape');
  const [selectedShape, setSelectedShape] = useState<TableShape | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedLeg, setSelectedLeg] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedOutlet, setSelectedOutlet] = useState<string | null>(null);

  // 設定データ
  const topColors = diningTableConfig.topColors as TopColor[];
  const squareConfig = diningTableConfig.squareTable;
  const roundConfig = diningTableConfig.roundTable;

  // 現在の形状に応じた設定を取得
  const currentConfig = useMemo(() => {
    if (selectedShape === 'square') return squareConfig;
    if (selectedShape === 'round') return roundConfig;
    return null;
  }, [selectedShape, squareConfig, roundConfig]);

  // 脚の選択肢
  const legOptions = useMemo(() => {
    if (!currentConfig) return [];
    return currentConfig.legOptions as LegOption[];
  }, [currentConfig]);

  // サイズの選択肢
  const sizeOptions = useMemo(() => {
    if (!currentConfig) return [];
    return currentConfig.sizes as SizeOption[];
  }, [currentConfig]);

  // コンセント選択肢（スクエアのみ）
  const outletOptions = useMemo(() => {
    if (selectedShape !== 'square') return [];
    return squareConfig.outletOptions as OutletOption[];
  }, [selectedShape, squareConfig]);

  // 合計価格を計算
  const totalPrice = useMemo(() => {
    if (selectedShape === 'none') return 0;
    const leg = legOptions.find(l => l.id === selectedLeg);
    const size = sizeOptions.find(s => s.id === selectedSize);
    const outlet = outletOptions.find(o => o.id === selectedOutlet);
    return (leg?.price || 0) + (size?.price || 0) + (outlet?.price || 0);
  }, [selectedLeg, selectedSize, selectedOutlet, legOptions, sizeOptions, outletOptions, selectedShape]);

  // 次のステップへ
  const goToNextStep = () => {
    if (currentStep === 'shape') {
      if (selectedShape === 'none') {
        // テーブルなしを選択した場合は即完了
        handleComplete();
      } else {
        setCurrentStep('size');
      }
    } else if (currentStep === 'size') {
      setCurrentStep('leg');
    } else if (currentStep === 'leg') {
      setCurrentStep('color');
    } else if (currentStep === 'color') {
      if (selectedShape === 'square') {
        setCurrentStep('outlet');
      } else {
        setCurrentStep('complete');
      }
    } else if (currentStep === 'outlet') {
      setCurrentStep('complete');
    }
  };

  // 前のステップへ
  const goToPrevStep = () => {
    if (currentStep === 'size') {
      setCurrentStep('shape');
      setSelectedSize(null);
    } else if (currentStep === 'leg') {
      setCurrentStep('size');
      setSelectedLeg(null);
    } else if (currentStep === 'color') {
      setCurrentStep('leg');
      setSelectedColor(null);
    } else if (currentStep === 'outlet') {
      setCurrentStep('color');
      setSelectedOutlet(null);
    } else if (currentStep === 'complete') {
      if (selectedShape === 'square') {
        setCurrentStep('outlet');
      } else {
        setCurrentStep('color');
      }
    }
  };

  // 選択完了処理
  const handleComplete = () => {
    if (selectedShape === 'none') {
      // テーブルなしの場合は「選択しない」アイテムを追加
      const noneProduct: Product = {
        id: 'furn-dt-none',
        categoryId: 'dining-table',
        categoryName: 'オリジナルダイニングテーブル',
        subcategory: 'なし',
        name: 'オリジナルダイニングテーブルなし（標準）',
        manufacturer: '-',
        modelNumber: 'DT-NONE',
        unit: 'セット',
        isOption: false,
        description: 'オリジナルダイニングテーブルを設置しない場合',
        variants: [{ id: 'v1', color: '選択なし', images: [] }],
        pricing: [
          { plan: 'LACIE', price: 0 },
          { plan: 'HOURS', price: 0 },
          { plan: 'LIFE+', price: 0 },
          { plan: 'LIFE', price: 0 },
        ],
      };
      addItem(noneProduct, 1, noneProduct.variants[0]);
      onComplete();
      return;
    }

    // 選択した組み合わせで商品を作成
    const leg = legOptions.find(l => l.id === selectedLeg);
    const size = sizeOptions.find(s => s.id === selectedSize);
    const color = topColors.find(c => c.id === selectedColor);
    const outlet = outletOptions.find(o => o.id === selectedOutlet);

    if (!leg || !size || !color || !currentConfig) return;

    const isSquare = selectedShape === 'square';
    const productId = isSquare
      ? `furn-dt-sq-${leg.id}-${size.id}-${outlet?.id || 'none'}`.toLowerCase()
      : `furn-dt-rd-${leg.id}-${size.id}`.toLowerCase();

    const productName = isSquare
      ? `${squareConfig.fullName} ${leg.shape}脚・${leg.color} ${size.displayName}【${outlet?.name}】`
      : `${roundConfig.fullName} ${leg.shape}脚・${leg.color} ${size.displayName}`;

    const specs = isSquare ? squareConfig.specs : roundConfig.specs;
    const description = isSquare
      ? `${squareConfig.description}\n【サイズ】H${specs.height}×D${(specs as typeof squareConfig.specs).depth}×${size.name}\n【天板カラー】${color.name}（${color.code}）\n【脚】${leg.shape}・${leg.color}\n【コンセント】${outlet?.name}`
      : `${roundConfig.description}\n【サイズ】H${specs.height}×${size.name}\n【天板カラー】${color.name}（${color.code}）\n【脚】${leg.shape}・${leg.color}`;

    const product: Product = {
      id: productId,
      categoryId: 'dining-table',
      categoryName: 'オリジナルダイニングテーブル',
      subcategory: isSquare ? 'スクエアテーブル' : 'ラウンドテーブル',
      name: productName,
      manufacturer: 'Gハウス',
      modelNumber: `GH-${productId.toUpperCase()}`,
      unit: '台',
      isOption: true,
      description,
      variants: [{ id: 'v1', color: color.name, colorCode: color.hexColor, images: [] }],
      pricing: [
        { plan: 'LACIE', price: totalPrice },
        { plan: 'HOURS', price: totalPrice },
        { plan: 'LIFE+', price: totalPrice },
        { plan: 'LIFE', price: totalPrice },
      ],
    };

    addItem(product, 1, product.variants[0]);
    onComplete();
  };

  // ステップ説明
  const getStepDescription = () => {
    switch (currentStep) {
      case 'shape': return 'スクエアまたはラウンドテーブルをお選びください';
      case 'size': return 'テーブルのサイズをお選びください';
      case 'leg': return '脚の形状と色をお選びください';
      case 'color': return '天板の色をお選びください（15色から選択）';
      case 'outlet': return 'テーブルに付けるコンセントの形状をお選びください';
      case 'complete': return '以下の内容でよろしければ「決定」ボタンを押してください';
      default: return '';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* ヘッダー */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          {currentStep !== 'shape' && (
            <button
              onClick={goToPrevStep}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <PageHeader
            title="オリジナルダイニングテーブル選択"
            subtitle={getStepDescription()}
          />
        </div>
      </div>

      {/* コンテンツ */}
      <div className="p-4 max-h-[60vh] overflow-y-auto">
        {/* Step 1: 形状選択 */}
        {currentStep === 'shape' && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            <SelectionCard
              id="square"
              name="スクエアテーブル"
              description="四角いテーブル。1500/1650/1800mmの3サイズ"
              placeholderEmoji="⬛"
              placeholderBgColor="from-amber-100 to-amber-200"
              isSelected={selectedShape === 'square'}
              onClick={() => setSelectedShape('square')}
              priceRange="¥130,000〜"
            />
            <SelectionCard
              id="round"
              name="ラウンドテーブル"
              description="丸いテーブル。φ1100/1200mmの2サイズ"
              placeholderEmoji="⭕"
              placeholderBgColor="from-orange-100 to-orange-200"
              isSelected={selectedShape === 'round'}
              onClick={() => setSelectedShape('round')}
              priceRange="¥120,000〜"
            />
            <SelectionCard
              id="none"
              name="選択しない（標準）"
              description="オリジナルダイニングテーブルを設置しない"
              placeholderEmoji="✖️"
              placeholderBgColor="from-gray-100 to-gray-200"
              isStandard={true}
              isSelected={selectedShape === 'none'}
              onClick={() => setSelectedShape('none')}
              price={0}
            />
          </div>
        )}

        {/* Step 2: サイズ選択 */}
        {currentStep === 'size' && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {sizeOptions.map((size) => (
              <SelectionCard
                key={size.id}
                id={size.id}
                name={size.displayName}
                description={size.name}
                placeholderEmoji="📐"
                placeholderBgColor="from-blue-100 to-blue-200"
                isSelected={selectedSize === size.id}
                onClick={() => setSelectedSize(size.id)}
                price={size.price}
              />
            ))}
          </div>
        )}

        {/* Step 3: 脚タイプ選択 */}
        {currentStep === 'leg' && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {legOptions.map((leg) => (
              <SelectionCard
                key={leg.id}
                id={leg.id}
                name={`${leg.shape}脚`}
                description={`${leg.color}カラー`}
                placeholderEmoji={leg.color === 'ブラック' ? '⬛' : '⬜'}
                placeholderBgColor={leg.color === 'ブラック' ? 'from-gray-700 to-gray-900' : 'from-gray-100 to-gray-200'}
                isSelected={selectedLeg === leg.id}
                onClick={() => setSelectedLeg(leg.id)}
                price={leg.price}
              />
            ))}
          </div>
        )}

        {/* Step 4: 天板カラー選択 */}
        {currentStep === 'color' && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {topColors.map((color) => (
              <SelectionCard
                key={color.id}
                id={color.id}
                name={color.name}
                description={color.code}
                colorCode={color.hexColor}
                placeholderBgColor="from-gray-100 to-gray-200"
                isSelected={selectedColor === color.id}
                onClick={() => setSelectedColor(color.id)}
              />
            ))}
          </div>
        )}

        {/* Step 5: コンセント選択（スクエアのみ） */}
        {currentStep === 'outlet' && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {outletOptions.map((outlet) => (
              <SelectionCard
                key={outlet.id}
                id={outlet.id}
                name={outlet.name}
                description="テーブル端1カ所に設置"
                placeholderEmoji="🔌"
                placeholderBgColor="from-yellow-100 to-yellow-200"
                isSelected={selectedOutlet === outlet.id}
                onClick={() => setSelectedOutlet(outlet.id)}
                price={outlet.price}
              />
            ))}
          </div>
        )}

        {/* 確認画面 */}
        {currentStep === 'complete' && (
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">形状:</span>
                <span className="font-medium">{selectedShape === 'square' ? 'スクエアテーブル' : 'ラウンドテーブル'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">サイズ:</span>
                <span className="font-medium">{sizeOptions.find(s => s.id === selectedSize)?.displayName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">脚タイプ:</span>
                <span className="font-medium">
                  {legOptions.find(l => l.id === selectedLeg)?.shape}脚・
                  {legOptions.find(l => l.id === selectedLeg)?.color}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">天板カラー:</span>
                <span className="font-medium flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: topColors.find(c => c.id === selectedColor)?.hexColor }}
                  />
                  {topColors.find(c => c.id === selectedColor)?.name}
                </span>
              </div>
              {selectedShape === 'square' && (
                <div className="flex justify-between">
                  <span className="text-gray-600">コンセント:</span>
                  <span className="font-medium">{outletOptions.find(o => o.id === selectedOutlet)?.name}</span>
                </div>
              )}
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between text-lg font-bold">
                  <span>合計:</span>
                  <span className="text-amber-600">¥{totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* フッター */}
      <div className="p-4 border-t bg-gray-50 flex justify-between">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          キャンセル
        </button>
        <button
          onClick={currentStep === 'complete' ? handleComplete : goToNextStep}
          disabled={
            (currentStep === 'shape' && !selectedShape) ||
            (currentStep === 'size' && !selectedSize) ||
            (currentStep === 'leg' && !selectedLeg) ||
            (currentStep === 'color' && !selectedColor) ||
            (currentStep === 'outlet' && !selectedOutlet)
          }
          className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          {currentStep === 'complete' ? (
            <>
              <Check className="w-4 h-4" />
              決定
            </>
          ) : (
            '次へ'
          )}
        </button>
      </div>
    </div>
  );
};

export default DiningTableSelector;
