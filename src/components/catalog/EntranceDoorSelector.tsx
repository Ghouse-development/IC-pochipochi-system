import React, { useState } from 'react';
import { Check, ChevronLeft, DoorOpen, Key, Grip, Monitor, Image as ImageIcon } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { exteriorProducts } from '../../data/exteriorProducts';
import type { Product } from '../../types/product';

// ====================
// 選択カードコンポーネント（ItemCard風）
// ====================
interface SelectionCardProps {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  placeholderEmoji?: string;
  placeholderBgColor?: string;
  isStandard?: boolean;
  isOption?: boolean;
  price?: number;
  isSelected: boolean;
  onClick: () => void;
  colorCode?: string;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  name,
  description,
  imageUrl,
  placeholderEmoji = '📦',
  placeholderBgColor = 'from-gray-100 to-gray-200',
  isStandard,
  isOption,
  price,
  isSelected,
  onClick,
  colorCode,
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <article
      className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
        isSelected
          ? 'border-4 border-blue-500 shadow-xl shadow-blue-200 dark:shadow-blue-900/50 ring-4 ring-blue-100 dark:ring-blue-900/50 scale-[1.02]'
          : 'border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 hover:scale-[1.02]'
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${name}${isSelected ? ' - 選択中' : ''}`}
      aria-pressed={isSelected}
    >
      {/* 画像エリア */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br ${placeholderBgColor}`}>
            {colorCode ? (
              <div
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg mb-2"
                style={{ backgroundColor: colorCode }}
              />
            ) : (
              <span className="text-5xl mb-2 transition-transform duration-200 group-hover:scale-110">
                {placeholderEmoji}
              </span>
            )}
            <div className="mt-2 flex items-center gap-1 text-gray-400">
              <ImageIcon className="w-3 h-3" />
              <span className="text-[10px]">画像準備中</span>
            </div>
          </div>
        )}

        {/* 標準/オプションバッジ */}
        {(isStandard || isOption) && (
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 rounded-md text-xs font-bold shadow-md ${
              isStandard
                ? 'bg-emerald-500 text-white'
                : 'bg-orange-500 text-white'
            }`}>
              {isStandard ? '標準' : 'オプション'}
            </span>
          </div>
        )}

        {/* 選択済みオーバーレイ */}
        {isSelected && (
          <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center">
            <div className="bg-white rounded-full p-3 shadow-xl ring-4 ring-blue-400/50">
              <Check className="w-8 h-8 text-blue-600" strokeWidth={3} />
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                選択中
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 情報エリア */}
      <div className="p-4">
        <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 line-clamp-2 mb-1 leading-snug">
          {name}
        </h3>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
            {description}
          </p>
        )}
        {price !== undefined && price > 0 && (
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
            +{price.toLocaleString()}円
          </p>
        )}
      </div>
    </article>
  );
};

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
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                    setSelectedHandle(null);
                    goToStep('handle');
                  }}
                />
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {getAvailableHandles().map((handle) => (
              <SelectionCard
                key={handle.id}
                id={handle.id}
                name={handle.name}
                imageUrl={HANDLE_IMAGES[handle.id]}
                placeholderEmoji="🖐️"
                placeholderBgColor="from-slate-100 to-gray-200"
                isStandard={handle.isStandard}
                isOption={!handle.isStandard}
                isSelected={selectedHandle === handle.id}
                onClick={() => {
                  setSelectedHandle(handle.id);
                  goToStep('interface');
                }}
              />
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
          <div className="grid grid-cols-2 gap-4">
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
