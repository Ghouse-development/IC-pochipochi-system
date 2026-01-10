import React, { useState } from 'react';
import { Check, ChevronLeft, DoorOpen, Key, Grip, Monitor } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { exteriorProducts } from '../../data/exteriorProducts';
import type { Product } from '../../types/product';

// ドアデザイン定義（4種類）
const DOOR_DESIGNS = [
  { id: 'N08', name: 'N08', description: '木目の水平線が印象的', productId: 'ext-door-n08' },
  { id: 'N18', name: 'N18', description: '框とくふなバランスが印象的', productId: 'ext-door-n18' },
  { id: 'N15', name: 'N15', description: '木目の水平線が印象的', productId: 'ext-door-n15' },
  { id: 'C10', name: 'C10', description: 'プレーンデザイン', productId: 'ext-door-c10' },
];

// 鍵の種類定義（3パターン）
const KEY_TYPES: Array<{
  id: string;
  name: string;
  description: string;
  standardFor: string[];
  optionFor: string[];
  productId?: string;
  price?: number;
}> = [
  {
    id: 'manual',
    name: '手動キー',
    description: '従来の鍵で施解錠',
    standardFor: ['LIFE'],
    optionFor: ['LIFE+', 'HOURS', 'LACIE'],
  },
  {
    id: 'pocket',
    name: 'ポケットキー',
    description: 'リモコンキーで施解錠',
    standardFor: ['LIFE+', 'HOURS', 'LACIE'],
    optionFor: ['LIFE'],
  },
  {
    id: 'face',
    name: '顔認証キー',
    description: '顔認証で施解錠（非防火地域のみ）',
    standardFor: [],
    optionFor: ['LIFE', 'LIFE+', 'HOURS', 'LACIE'],
    productId: 'ext-door-face-auth',
    price: 200000,
  },
];

// ハンドル形状定義（鍵の種類によって選択肢が変わる）
const HANDLE_TYPES = {
  electronic: [ // 電子錠（ポケットキー・顔認証キー）用
    { id: 'straight', name: 'ストレートハンドル', productId: 'ext-door-handle-straight', isStandard: true },
    { id: 'curve', name: '洋風カーブハンドル', productId: 'ext-door-handle-curve', isStandard: false },
  ],
  manual: [ // 手動錠用
    { id: 'round-straight', name: '丸型ストレートハンドル', productId: 'ext-door-handle-round-straight', isStandard: true },
    { id: 'square-straight', name: '角型ストレートハンドル', productId: 'ext-door-handle-square-straight', isStandard: false },
    { id: 'iron', name: 'ロートアイアン調ハンドル', productId: 'ext-door-handle-iron', isStandard: false },
  ],
};

// 操作盤付インターフェースユニット
const INTERFACE_UNIT = {
  id: 'interface-unit',
  name: '操作盤付インターフェースユニット',
  productId: 'ext-door-interface-unit',
  description: '玄関ドア付近に設置する操作盤',
};

type Step = 'design' | 'color' | 'key' | 'handle' | 'interface' | 'complete';

interface EntranceDoorSelectorProps {
  selectedPlan: string;
  onComplete: () => void;
  onCancel: () => void;
}

export const EntranceDoorSelector: React.FC<EntranceDoorSelectorProps> = ({
  selectedPlan,
  onComplete,
  onCancel,
}) => {
  const addItem = useCartStore((state) => state.addItem);

  // 選択状態
  const [currentStep, setCurrentStep] = useState<Step>('design');
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedKeyType, setSelectedKeyType] = useState<string | null>(null);
  const [selectedHandle, setSelectedHandle] = useState<string | null>(null);
  const [wantsInterfaceUnit, setWantsInterfaceUnit] = useState<boolean | null>(null);

  // 製品を取得
  const getProduct = (productId: string): Product | undefined => {
    return exteriorProducts.find(p => p.id === productId);
  };

  // 選択したドアデザインの製品を取得
  const getSelectedDoorProduct = (): Product | undefined => {
    const design = DOOR_DESIGNS.find(d => d.id === selectedDesign);
    return design ? getProduct(design.productId) : undefined;
  };

  // 選択したドアの色バリアントを取得
  const getDoorColors = () => {
    const product = getSelectedDoorProduct();
    return product?.variants || [];
  };

  // 鍵の種類が電子錠かどうか
  const isElectronicKey = selectedKeyType === 'pocket' || selectedKeyType === 'face';

  // 利用可能なハンドルを取得
  const getAvailableHandles = () => {
    return isElectronicKey ? HANDLE_TYPES.electronic : HANDLE_TYPES.manual;
  };

  // ステップを進める
  const goToStep = (step: Step) => {
    setCurrentStep(step);
  };

  // ステップを戻る
  const goBack = () => {
    switch (currentStep) {
      case 'color':
        setCurrentStep('design');
        setSelectedColor(null);
        break;
      case 'key':
        setCurrentStep('color');
        setSelectedKeyType(null);
        break;
      case 'handle':
        setCurrentStep('key');
        setSelectedHandle(null);
        break;
      case 'interface':
        setCurrentStep('handle');
        setWantsInterfaceUnit(null);
        break;
      default:
        break;
    }
  };

  // 完了処理
  const handleComplete = () => {
    // 1. ドア本体をカートに追加
    const doorProduct = getSelectedDoorProduct();
    if (doorProduct && selectedColor) {
      const variant = doorProduct.variants?.find(v => v.id === selectedColor);
      addItem(doorProduct, 1, variant);
    }

    // 2. 顔認証キーの場合は追加
    if (selectedKeyType === 'face') {
      const faceAuthProduct = getProduct('ext-door-face-auth');
      if (faceAuthProduct) {
        addItem(faceAuthProduct, 1, faceAuthProduct.variants?.[0]);
      }
    }

    // 3. ハンドルをカートに追加
    const handles = getAvailableHandles();
    const handleConfig = handles.find(h => h.id === selectedHandle);
    if (handleConfig) {
      const handleProduct = getProduct(handleConfig.productId);
      if (handleProduct) {
        addItem(handleProduct, 1, handleProduct.variants?.[0]);
      }
    }

    // 4. インターフェースユニットをカートに追加
    if (wantsInterfaceUnit) {
      const interfaceProduct = getProduct(INTERFACE_UNIT.productId);
      if (interfaceProduct) {
        addItem(interfaceProduct, 1, interfaceProduct.variants?.[0]);
      }
    }

    setCurrentStep('complete');
  };

  // ステップ進行表示
  const steps = ['①デザイン', '②色', '③鍵', '④ハンドル', '⑤操作盤'];
  const stepOrder: Step[] = ['design', 'color', 'key', 'handle', 'interface'];
  const currentStepIndex = stepOrder.indexOf(currentStep);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <DoorOpen className="w-6 h-6 text-blue-500" />
          玄関ドアを選択
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          5つのステップで選んでください
        </p>
      </div>

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
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                    : isCurrent
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                }`}>
                  {isCompleted && <Check className="w-3 h-3 inline mr-1" />}
                  {step}
                </span>
                {index < 4 && <span className="text-gray-300">→</span>}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* ステップ1: ドアデザイン選択 */}
      {currentStep === 'design' && (
        <div>
          <h4 className="font-medium text-gray-800 dark:text-white mb-4">
            ドアデザインを選んでください
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DOOR_DESIGNS.map((design) => (
              <button
                key={design.id}
                onClick={() => {
                  setSelectedDesign(design.id);
                  goToStep('color');
                }}
                className="flex flex-col items-center p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all"
              >
                <span className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {design.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  {design.description}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ステップ2: 色選択 */}
      {currentStep === 'color' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> デザイン選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 dark:text-white mb-2">
            色を選んでください
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            選択中: {DOOR_DESIGNS.find(d => d.id === selectedDesign)?.name}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {getDoorColors().map((variant) => (
              <button
                key={variant.id}
                onClick={() => {
                  setSelectedColor(variant.id);
                  goToStep('key');
                }}
                className="flex items-center gap-3 p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all"
              >
                {variant.colorCode && (
                  <div
                    className="w-8 h-8 rounded-full border border-gray-300"
                    style={{ backgroundColor: variant.colorCode.startsWith('#') ? variant.colorCode : undefined }}
                  />
                )}
                <span className="font-medium text-gray-800 dark:text-white">
                  {variant.color}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ステップ3: 鍵の種類選択 */}
      {currentStep === 'key' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 色選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <Key className="w-5 h-5 text-blue-500" />
            鍵の種類を選んでください
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {KEY_TYPES.map((keyType) => {
              const isStandard = keyType.standardFor.includes(selectedPlan);
              return (
                <button
                  key={keyType.id}
                  onClick={() => {
                    setSelectedKeyType(keyType.id);
                    setSelectedHandle(null); // ハンドル選択をリセット
                    goToStep('handle');
                  }}
                  className="flex flex-col items-start p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all text-left"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-gray-800 dark:text-white">
                      {keyType.name}
                    </span>
                    {isStandard ? (
                      <span className="px-2 py-0.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                        標準
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">
                        オプション
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {keyType.description}
                  </span>
                  {keyType.price && (
                    <span className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                      +{keyType.price.toLocaleString()}円
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ステップ4: ハンドル形状選択 */}
      {currentStep === 'handle' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 鍵の種類選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 dark:text-white mb-2 flex items-center gap-2">
            <Grip className="w-5 h-5 text-blue-500" />
            ハンドル形状を選んでください
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {isElectronicKey ? '電子錠用ハンドル' : '手動錠用ハンドル'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {getAvailableHandles().map((handle) => (
              <button
                key={handle.id}
                onClick={() => {
                  setSelectedHandle(handle.id);
                  goToStep('interface');
                }}
                className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all"
              >
                <span className="font-medium text-gray-800 dark:text-white">
                  {handle.name}
                </span>
                {handle.isStandard && (
                  <span className="px-2 py-0.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                    標準
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ステップ5: 操作盤付インターフェースユニット */}
      {currentStep === 'interface' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> ハンドル選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-500" />
            操作盤付インターフェースユニット
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            玄関ドア付近に設置する操作盤です
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setWantsInterfaceUnit(true);
                handleComplete();
              }}
              className="flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all"
            >
              <Check className="w-8 h-8 text-green-500 mb-2" />
              <span className="font-bold text-gray-800 dark:text-white">
                あり
              </span>
            </button>
            <button
              onClick={() => {
                setWantsInterfaceUnit(false);
                handleComplete();
              }}
              className="flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all"
            >
              <span className="w-8 h-8 text-gray-400 mb-2 flex items-center justify-center text-2xl">−</span>
              <span className="font-bold text-gray-800 dark:text-white">
                なし
              </span>
            </button>
          </div>
        </div>
      )}

      {/* 完了画面 */}
      {currentStep === 'complete' && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
          <Check className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h4 className="font-bold text-gray-800 dark:text-white mb-2">
            玄関ドアの選択が完了しました
          </h4>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 space-y-1">
            <p>デザイン: {DOOR_DESIGNS.find(d => d.id === selectedDesign)?.name}</p>
            <p>色: {getDoorColors().find(v => v.id === selectedColor)?.color}</p>
            <p>鍵: {KEY_TYPES.find(k => k.id === selectedKeyType)?.name}</p>
            <p>ハンドル: {getAvailableHandles().find(h => h.id === selectedHandle)?.name}</p>
            <p>操作盤: {wantsInterfaceUnit ? 'あり' : 'なし'}</p>
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
      {currentStep !== 'complete' && (
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onCancel}
            className="w-full py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            キャンセル
          </button>
        </div>
      )}
    </div>
  );
};

export default EntranceDoorSelector;
