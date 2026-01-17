import React, { useState } from 'react';
import { Check, ChevronLeft } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { useCartStore } from '../../stores/useCartStore';
import { useProductStore } from '../../stores/useProductStore';
import { SelectionCard } from './SelectionCard';
import type { Product } from '../../types/product';

// ====================
// 画像パス定義（写真ベース）
// 画像ファイルは /public/images/exterior/doors/ に配置
// ====================
const DOOR_IMAGE_BASE = '/images/exterior/doors';

// ドアデザイン画像パス
export const DOOR_DESIGN_IMAGES: Record<string, string> = {
  'N08': `${DOOR_IMAGE_BASE}/designs/n08.jpg`,
  'N18': `${DOOR_IMAGE_BASE}/designs/n18.jpg`,
  'N15': `${DOOR_IMAGE_BASE}/designs/n15.jpg`,
  'C10': `${DOOR_IMAGE_BASE}/designs/c10.jpg`,
};

// ドアカラー画像パス（デザイン-カラー）
export const getDoorColorImagePath = (designId: string, colorName: string): string => {
  const sanitizedColor = colorName.replace(/\s+/g, '-').toLowerCase();
  return `${DOOR_IMAGE_BASE}/colors/${designId.toLowerCase()}-${sanitizedColor}.jpg`;
};

// ハンドル画像パス
export const HANDLE_IMAGES: Record<string, string> = {
  'straight': `${DOOR_IMAGE_BASE}/handles/straight.jpg`,
  'curve': `${DOOR_IMAGE_BASE}/handles/curve.jpg`,
  'round-straight': `${DOOR_IMAGE_BASE}/handles/round-straight.jpg`,
  'square-straight': `${DOOR_IMAGE_BASE}/handles/square-straight.jpg`,
  'iron': `${DOOR_IMAGE_BASE}/handles/iron.jpg`,
};

// 鍵タイプ画像パス
export const KEY_IMAGES: Record<string, string> = {
  'manual': `${DOOR_IMAGE_BASE}/keys/manual.jpg`,
  'pocket': `${DOOR_IMAGE_BASE}/keys/pocket.jpg`,
  'face': `${DOOR_IMAGE_BASE}/keys/face.jpg`,
};


// ドアデザイン定義（4種類）
const DOOR_DESIGNS = [
  { id: 'N08', name: 'N08', description: '木目の水平線が印象的', productId: 'ext-door-venato-d30-n08', icon: '═' },
  { id: 'N18', name: 'N18', description: '框とくふなバランスが印象的', productId: 'ext-door-venato-d30-n18', icon: '╬' },
  { id: 'N15', name: 'N15', description: '木目の水平線が印象的', productId: 'ext-door-venato-d30-n15', icon: '≡' },
  { id: 'C10', name: 'C10', description: 'プレーンデザイン', productId: 'ext-door-venato-d30-c10', icon: '▢' },
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

// ハンドルの形状+色の組み合わせ
interface HandleColorCombo {
  id: string;
  handleId: string;
  handleName: string;
  colorId: string;
  colorName: string;
  productId: string;
  isStandard: boolean;
}

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
  const exteriorProducts = useProductStore((state) => state.exteriorProducts);

  // 選択状態
  const [currentStep, setCurrentStep] = useState<Step>('design');
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedKeyType, setSelectedKeyType] = useState<string | null>(null);
  const [selectedHandleCombo, setSelectedHandleCombo] = useState<HandleColorCombo | null>(null);
  const [wantsInterfaceUnit, setWantsInterfaceUnit] = useState<boolean | null>(false); // デフォルトで「なし」を選択

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

  // ハンドル形状+色の全組み合わせを取得
  const getHandleColorCombos = (): HandleColorCombo[] => {
    const handles = getAvailableHandles();
    const combos: HandleColorCombo[] = [];

    handles.forEach((handle) => {
      const handleProduct = getProduct(handle.productId);
      const variants = handleProduct?.variants || [];

      variants.forEach((variant) => {
        combos.push({
          id: `${handle.id}-${variant.id}`,
          handleId: handle.id,
          handleName: handle.name,
          colorId: variant.id,
          colorName: variant.color,
          productId: handle.productId,
          isStandard: handle.isStandard,
        });
      });
    });

    return combos;
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
        setSelectedHandleCombo(null);
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

    // 3. ハンドルをカートに追加（選択した形状+色の組み合わせ）
    if (selectedHandleCombo) {
      const handleProduct = getProduct(selectedHandleCombo.productId);
      if (handleProduct) {
        const handleVariant = handleProduct.variants?.find(v => v.id === selectedHandleCombo.colorId);
        addItem(handleProduct, 1, handleVariant);
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

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* ヘッダー */}
      <PageHeader
        title="玄関ドアを選択"
        subtitle="5つのステップで選んでください"
      />

      {/* ドアデザイン選択 */}
      {currentStep === 'design' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {DOOR_DESIGNS.map((design) => (
            <SelectionCard
              key={design.id}
              id={design.id}
              name={design.name}
              description={design.description}
              imageUrl={DOOR_DESIGN_IMAGES[design.id]}
              placeholderEmoji="🚪"
              placeholderBgColor="from-amber-100 to-yellow-100"
              isSelected={selectedDesign === design.id}
              onClick={() => {
                setSelectedDesign(design.id);
                goToStep('color');
              }}
            />
          ))}
        </div>
      )}

      {/* 色選択 */}
      {currentStep === 'color' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 戻る
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {getDoorColors().map((variant) => (
              <SelectionCard
                key={variant.id}
                id={variant.id}
                name={variant.color}
                imageUrl={selectedDesign ? getDoorColorImagePath(selectedDesign, variant.color) : undefined}
                colorCode={variant.colorCode?.startsWith('#') ? variant.colorCode : undefined}
                placeholderEmoji="🎨"
                placeholderBgColor="from-gray-100 to-slate-100"
                isSelected={selectedColor === variant.id}
                onClick={() => {
                  setSelectedColor(variant.id);
                  goToStep('key');
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 鍵の種類選択 */}
      {currentStep === 'key' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 戻る
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {KEY_TYPES.map((keyType) => {
              const isStandard = keyType.standardFor.includes(selectedPlan);
              return (
                <SelectionCard
                  key={keyType.id}
                  id={keyType.id}
                  name={keyType.name}
                  description={keyType.description}
                  imageUrl={KEY_IMAGES[keyType.id]}
                  placeholderEmoji="🔑"
                  placeholderBgColor="from-yellow-100 to-amber-100"
                  isStandard={isStandard}
                  isOption={!isStandard}
                  price={keyType.price}
                  isSelected={selectedKeyType === keyType.id}
                  onClick={() => {
                    setSelectedKeyType(keyType.id);
                    setSelectedHandleCombo(null);
                    goToStep('handle');
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* ハンドル選択 */}
      {currentStep === 'handle' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 戻る
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {getHandleColorCombos().map((combo) => (
              <SelectionCard
                key={combo.id}
                id={combo.id}
                name={`${combo.handleName}`}
                description={combo.colorName}
                imageUrl={HANDLE_IMAGES[combo.handleId]}
                placeholderEmoji={combo.colorName === 'ブラック' ? '⬛' : '⬜'}
                placeholderBgColor={combo.colorName === 'ブラック' ? 'from-gray-800 to-gray-900' : 'from-gray-200 to-gray-300'}
                isStandard={combo.isStandard}
                isOption={!combo.isStandard}
                isSelected={selectedHandleCombo?.id === combo.id}
                onClick={() => {
                  setSelectedHandleCombo(combo);
                  goToStep('interface');
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* 操作盤選択 */}
      {currentStep === 'interface' && (
        <div>
          <button
            onClick={goBack}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 戻る
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            <SelectionCard
              id="interface-yes"
              name="あり"
              description="操作盤を設置する"
              placeholderEmoji="📟"
              placeholderBgColor="from-blue-100 to-cyan-100"
              isSelected={wantsInterfaceUnit === true}
              onClick={() => {
                setWantsInterfaceUnit(true);
                handleComplete();
              }}
            />
            <SelectionCard
              id="interface-no"
              name="なし"
              description="操作盤を設置しない"
              placeholderEmoji="✕"
              placeholderBgColor="from-gray-100 to-gray-200"
              isSelected={wantsInterfaceUnit === false}
              onClick={() => {
                setWantsInterfaceUnit(false);
                handleComplete();
              }}
            />
          </div>
        </div>
      )}

      {/* 完了画面 */}
      {currentStep === 'complete' && (
        <div className="bg-green-50 rounded-xl p-6 text-center">
          <Check className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h4 className="font-bold text-gray-800 mb-2">
            玄関ドアの選択が完了しました
          </h4>
          <div className="text-sm text-gray-600 mb-4 space-y-1">
            <p>デザイン: {DOOR_DESIGNS.find(d => d.id === selectedDesign)?.name}</p>
            <p>色: {getDoorColors().find(v => v.id === selectedColor)?.color}</p>
            <p>鍵: {KEY_TYPES.find(k => k.id === selectedKeyType)?.name}</p>
            <p>ハンドル: {selectedHandleCombo?.handleName}（{selectedHandleCombo?.colorName}）</p>
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

export default EntranceDoorSelector;
