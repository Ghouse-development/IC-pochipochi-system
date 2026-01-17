import React, { useState } from 'react';
import { Check, ChevronLeft } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { useCartStore } from '../../stores/useCartStore';
import { useProductStore } from '../../stores/useProductStore';
import { SelectionCard } from './SelectionCard';
import type { Product } from '../../types/product';

// ====================
// 階段タイプ定義
// ====================
const STAIR_TYPES = [
  {
    id: 'wood',
    name: '標準木製階段',
    description: 'Panasonic/WOODTEC/ikutaから選択',
    icon: '🪜',
    isStandard: true,
  },
  {
    id: 'iron',
    name: 'アイアン階段',
    description: 'スチール製のモダンなデザイン',
    icon: '🔩',
    isStandard: false,
    productId: 'int-stair-004',
  },
  {
    id: 'carpet',
    name: 'カーペット階段',
    description: '踏面にカーペットを敷いた仕様',
    icon: '🧶',
    isStandard: false,
    productId: 'int-stairs-carpet',
  },
];

// 木製階段メーカー
const WOOD_MANUFACTURERS = [
  { id: 'panasonic', name: 'Panasonic', productId: 'int-stair-001', description: '11柄ラインアップ' },
  { id: 'woodtec', name: 'WOODTEC Live Natural', productId: 'int-stair-002', description: '乱尺柄の天然木' },
  { id: 'ikuta', name: 'ikuta', productId: 'int-stair-003', description: '無垢材仕様' },
  { id: 'ikuta-aging', name: 'ikuta エイジング', productId: 'int-stair-003b', description: 'エイジング加工' },
];

// 手摺タイプ
const HANDRAIL_TYPES = [
  { id: 'lixil-white', name: 'LIXIL ホワイト', productId: 'int-stair-handrail-lixil', variantId: 'v1', description: 'スクエアタイプ壁付手摺' },
  { id: 'lixil-black', name: 'LIXIL ブラック', productId: 'int-stair-handrail-lixil', variantId: 'v2', description: 'スクエアタイプ壁付手摺' },
  { id: 'iron-handrail', name: 'アイアン手すり', productId: 'int-stair-005', description: 'フラットバー上桟+中桟2本' },
  { id: 'none', name: '手摺なし', description: '手摺を設置しない' },
];

// オプション
const STAIR_OPTIONS = [
  { id: 'landing', name: '踊り場形状変更', productId: 'int-stair-landing', description: '踊り場を追加' },
  { id: 'turn', name: '一曲がり追加', productId: 'int-stair-004b', description: 'アイアン階段用' },
  { id: 'double-handrail', name: '両側手摺', productId: 'int-stair-004d', description: 'アイアン階段用' },
  { id: 'fall-prevention', name: '転落防止型', productId: 'int-stair-004c', description: 'アイアン階段用' },
];

type Step = 'type' | 'manufacturer' | 'color' | 'handrail' | 'options' | 'complete';

interface StairSelectorProps {
  selectedPlan: string;
  onComplete: () => void;
  onCancel: () => void;
}

export const StairSelector: React.FC<StairSelectorProps> = ({
  selectedPlan,
  onComplete,
  onCancel,
}) => {
  const addItem = useCartStore((state) => state.addItem);
  const interiorProducts = useProductStore((state) => state.interiorProducts);

  // プラン別価格を取得
  const getPlanPrice = (productId: string): number => {
    const product = interiorProducts.find(p => p.id === productId);
    if (!product?.pricing) return 0;
    const planPrice = product.pricing.find(p => p.plan === selectedPlan);
    return planPrice?.price ?? 0;
  };

  // 選択状態
  const [currentStep, setCurrentStep] = useState<Step>('type');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedHandrail, setSelectedHandrail] = useState<string | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // 製品を取得
  const getProduct = (productId: string): Product | undefined => {
    return interiorProducts.find(p => p.id === productId);
  };

  // 選択したメーカーの製品を取得
  const getSelectedManufacturerProduct = (): Product | undefined => {
    const mfr = WOOD_MANUFACTURERS.find(m => m.id === selectedManufacturer);
    return mfr ? getProduct(mfr.productId) : undefined;
  };

  // 色バリエーションを取得
  const getColorVariants = () => {
    if (selectedType === 'wood') {
      const product = getSelectedManufacturerProduct();
      return product?.variants || [];
    } else if (selectedType === 'iron') {
      const product = getProduct('int-stair-004');
      return product?.variants || [];
    } else if (selectedType === 'carpet') {
      const product = getProduct('int-stairs-carpet');
      return product?.variants || [];
    }
    return [];
  };

  // ステップ数を計算（タイプによって変わる）
  const getSteps = () => {
    if (selectedType === 'wood') {
      return ['①タイプ', '②メーカー', '③色', '④手摺', '⑤オプション'];
    } else if (selectedType === 'iron' || selectedType === 'carpet') {
      return ['①タイプ', '②色', '③手摺', '④オプション'];
    }
    return ['①タイプ', '②メーカー', '③色', '④手摺', '⑤オプション'];
  };

  // 現在のステップインデックス
  const getCurrentStepIndex = () => {
    if (selectedType === 'wood') {
      const steps: Step[] = ['type', 'manufacturer', 'color', 'handrail', 'options'];
      return steps.indexOf(currentStep);
    } else {
      const steps: Step[] = ['type', 'color', 'handrail', 'options'];
      return steps.indexOf(currentStep === 'manufacturer' ? 'color' : currentStep);
    }
  };

  // ステップを戻る
  const goBack = () => {
    switch (currentStep) {
      case 'manufacturer':
        setCurrentStep('type');
        setSelectedManufacturer(null);
        break;
      case 'color':
        if (selectedType === 'wood') {
          setCurrentStep('manufacturer');
        } else {
          setCurrentStep('type');
        }
        setSelectedColor(null);
        break;
      case 'handrail':
        setCurrentStep('color');
        setSelectedHandrail(null);
        break;
      case 'options':
        setCurrentStep('handrail');
        setSelectedOptions([]);
        break;
      default:
        break;
    }
  };

  // オプション選択のトグル
  const toggleOption = (optionId: string) => {
    setSelectedOptions(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  // 完了処理
  const handleComplete = () => {
    // 1. 階段本体をカートに追加
    if (selectedType === 'wood') {
      const mfr = WOOD_MANUFACTURERS.find(m => m.id === selectedManufacturer);
      if (mfr) {
        const product = getProduct(mfr.productId);
        if (product && selectedColor) {
          const variant = product.variants?.find(v => v.id === selectedColor);
          addItem(product, 1, variant);
        }
      }
    } else if (selectedType === 'iron') {
      const product = getProduct('int-stair-004');
      if (product && selectedColor) {
        const variant = product.variants?.find(v => v.id === selectedColor);
        addItem(product, 1, variant);
      }
    } else if (selectedType === 'carpet') {
      const product = getProduct('int-stairs-carpet');
      if (product && selectedColor) {
        const variant = product.variants?.find(v => v.id === selectedColor);
        addItem(product, 1, variant);
      }
    }

    // 2. 手摺をカートに追加
    if (selectedHandrail && selectedHandrail !== 'none') {
      const handrail = HANDRAIL_TYPES.find(h => h.id === selectedHandrail);
      if (handrail?.productId) {
        const product = getProduct(handrail.productId);
        if (product) {
          // variantIdがある場合はそれを使用、なければ最初のバリアント
          const variant = handrail.variantId
            ? product.variants?.find(v => v.id === handrail.variantId)
            : product.variants?.[0];
          addItem(product, 1, variant);
        }
      }
    }

    // 3. オプションをカートに追加
    selectedOptions.forEach(optionId => {
      const option = STAIR_OPTIONS.find(o => o.id === optionId);
      if (option?.productId) {
        const product = getProduct(option.productId);
        if (product) {
          addItem(product, 1, product.variants?.[0]);
        }
      }
    });

    setCurrentStep('complete');
  };

  // 利用可能なオプションをフィルタ（階段タイプによって異なる）
  const getAvailableOptions = () => {
    if (selectedType === 'iron') {
      return STAIR_OPTIONS.filter(o => ['landing', 'turn', 'double-handrail', 'fall-prevention'].includes(o.id));
    }
    return STAIR_OPTIONS.filter(o => o.id === 'landing');
  };

  const steps = getSteps();
  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* ヘッダー */}
      <PageHeader
        title="階段を選択"
        subtitle="階段タイプと仕様を選んでください"
      />

      {/* ステップ進行表示 */}
      {currentStep !== 'complete' && (
        <div className="flex items-center gap-2 mb-6 text-sm overflow-x-auto pb-2">
          {steps.map((step, index) => {
            const isCompleted = currentStepIndex > index;
            const isCurrent = currentStepIndex === index;

            return (
              <React.Fragment key={step}>
                <span className={`px-3 py-1 rounded-full whitespace-nowrap ${
                  isCompleted
                    ? 'bg-blue-100 text-blue-700'
                    : isCurrent
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                }`}>
                  {isCompleted && <Check className="w-3 h-3 inline mr-1" />}
                  {step}
                </span>
                {index < steps.length - 1 && <span className="text-gray-300">→</span>}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* ステップ1: 階段タイプ選択 */}
      {currentStep === 'type' && (
        <div>
          <h4 className="font-medium text-gray-800 mb-4">
            階段タイプを選んでください
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {STAIR_TYPES.map((type) => {
              const price = type.productId ? getPlanPrice(type.productId) : 0;
              return (
                <SelectionCard
                  key={type.id}
                  id={type.id}
                  name={type.name}
                  description={type.description}
                  placeholderEmoji={type.icon}
                  placeholderBgColor={type.id === 'wood' ? 'from-amber-100 to-yellow-100' : type.id === 'iron' ? 'from-slate-200 to-gray-300' : 'from-pink-100 to-rose-100'}
                  isStandard={price === 0}
                  isOption={price > 0}
                  price={price}
                  isSelected={selectedType === type.id}
                  onClick={() => {
                    setSelectedType(type.id);
                    if (type.id === 'wood') {
                      setCurrentStep('manufacturer');
                    } else {
                      setCurrentStep('color');
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* ステップ2: メーカー選択（木製階段のみ） */}
      {currentStep === 'manufacturer' && selectedType === 'wood' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> タイプ選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 mb-4">
            メーカーを選んでください
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {WOOD_MANUFACTURERS.map((mfr) => {
              const price = getPlanPrice(mfr.productId);
              return (
                <SelectionCard
                  key={mfr.id}
                  id={mfr.id}
                  name={mfr.name}
                  description={mfr.description}
                  manufacturer={mfr.name.split(' ')[0]}
                  placeholderEmoji="🪵"
                  placeholderBgColor="from-amber-100 to-orange-100"
                  isStandard={price === 0}
                  isOption={price > 0}
                  price={price}
                  isSelected={selectedManufacturer === mfr.id}
                  onClick={() => {
                    setSelectedManufacturer(mfr.id);
                    setCurrentStep('color');
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* ステップ3: 色選択 */}
      {currentStep === 'color' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            {selectedType === 'wood' ? 'メーカー選択に戻る' : 'タイプ選択に戻る'}
          </button>
          <h4 className="font-medium text-gray-800 mb-2">
            色・柄を選んでください
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            {selectedType === 'wood' && `選択中: ${WOOD_MANUFACTURERS.find(m => m.id === selectedManufacturer)?.name}`}
            {selectedType === 'iron' && '選択中: アイアン階段'}
            {selectedType === 'carpet' && '選択中: カーペット階段'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 max-h-96 overflow-y-auto">
            {getColorVariants().map((variant) => (
              <SelectionCard
                key={variant.id}
                id={variant.id}
                name={variant.color}
                placeholderEmoji={selectedType === 'carpet' ? '🧶' : selectedType === 'iron' ? '🎨' : '🪵'}
                placeholderBgColor={selectedType === 'carpet' ? 'from-pink-100 to-rose-100' : selectedType === 'iron' ? 'from-slate-100 to-gray-200' : 'from-amber-100 to-orange-100'}
                isSelected={selectedColor === variant.id}
                onClick={() => {
                  setSelectedColor(variant.id);
                  setCurrentStep('handrail');
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* ステップ4: 手摺選択 */}
      {currentStep === 'handrail' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 色選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 mb-4">
            手摺を選んでください
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {HANDRAIL_TYPES.map((handrail) => {
              const price = handrail.productId ? getPlanPrice(handrail.productId) : 0;
              return (
                <SelectionCard
                  key={handrail.id}
                  id={handrail.id}
                  name={handrail.name}
                  description={handrail.description}
                  placeholderEmoji={handrail.id === 'none' ? '✕' : '🛡️'}
                  placeholderBgColor={handrail.id === 'none' ? 'from-gray-100 to-gray-200' : 'from-slate-100 to-gray-200'}
                  isStandard={price === 0 && handrail.id !== 'none'}
                  isOption={price > 0}
                  price={price}
                  isSelected={selectedHandrail === handrail.id}
                  onClick={() => {
                    setSelectedHandrail(handrail.id);
                    setCurrentStep('options');
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* ステップ5: オプション選択 */}
      {currentStep === 'options' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 手摺選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 mb-4">
            オプションを選択（複数選択可）
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-4">
            {getAvailableOptions().map((option) => {
              const price = getPlanPrice(option.productId);
              return (
                <SelectionCard
                  key={option.id}
                  id={option.id}
                  name={option.name}
                  description={option.description}
                  placeholderEmoji="➕"
                  placeholderBgColor="from-blue-100 to-cyan-100"
                  isOption={price > 0}
                  price={price}
                  isSelected={selectedOptions.includes(option.id)}
                  onClick={() => toggleOption(option.id)}
                />
              );
            })}
          </div>
          <button
            onClick={handleComplete}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
          >
            決定
          </button>
        </div>
      )}

      {/* 完了画面 */}
      {currentStep === 'complete' && (
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <Check className="w-12 h-12 text-blue-500 mx-auto mb-3" />
          <h4 className="font-bold text-gray-800 mb-2">
            階段の選択が完了しました
          </h4>
          <div className="text-sm text-gray-600 mb-4 space-y-1">
            <p>タイプ: {STAIR_TYPES.find(t => t.id === selectedType)?.name}</p>
            {selectedType === 'wood' && (
              <p>メーカー: {WOOD_MANUFACTURERS.find(m => m.id === selectedManufacturer)?.name}</p>
            )}
            <p>色: {getColorVariants().find(v => v.id === selectedColor)?.color}</p>
            <p>手摺: {HANDRAIL_TYPES.find(h => h.id === selectedHandrail)?.name}</p>
            {selectedOptions.length > 0 && (
              <p>オプション: {selectedOptions.map(id => STAIR_OPTIONS.find(o => o.id === id)?.name).join(', ')}</p>
            )}
          </div>
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
          >
            次のカテゴリへ
          </button>
        </div>
      )}

      {/* キャンセルボタン */}
      {currentStep !== 'complete' && currentStep !== 'options' && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={onCancel}
            className="w-full py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50:bg-gray-800"
          >
            キャンセル
          </button>
        </div>
      )}
    </div>
  );
};

export default StairSelector;
