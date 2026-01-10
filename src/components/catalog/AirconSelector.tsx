import React, { useState } from 'react';
import { Check, X, Plus, Trash2, Wind, Thermometer, Building2, ChevronLeft, Image as ImageIcon } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { furnitureProducts } from '../../data/furnitureProducts';
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
  priceRange?: string;
  isSelected: boolean;
  onClick: () => void;
  manufacturer?: string;
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
  priceRange,
  isSelected,
  onClick,
  manufacturer,
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
            <span className="text-5xl mb-2 transition-transform duration-200 group-hover:scale-110">
              {placeholderEmoji}
            </span>
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

        {/* メーカーバッジ */}
        {manufacturer && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-white/90 text-gray-700 shadow-md">
              {manufacturer}
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
        {priceRange && (
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
            {priceRange}
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

// エアコンシリーズ定義
const AIRCON_SERIES = [
  { id: 'e', name: 'Eシリーズ', manufacturer: 'ダイキン', description: 'スタンダードモデル', priceRange: '11万〜19.2万円', icon: '❄️' },
  { id: 'gx', name: 'GXシリーズ', manufacturer: 'ダイキン', description: 'さらら除湿搭載', priceRange: '16.5万〜21.8万円', icon: '💧' },
  { id: 'z', name: '霧ヶ峰 Zシリーズ', manufacturer: '三菱電機', description: 'さらっと除湿冷房', priceRange: '23.5万〜30万円', icon: '🌀' },
];

// 畳数定義
const ROOM_SIZES = [
  { id: '6', name: '6畳用', description: '子供部屋・書斎など' },
  { id: '10', name: '10畳用', description: '寝室・洋室など' },
  { id: '14', name: '14畳用', description: 'リビング・LDKなど' },
];

// 設置階定義
const FLOOR_OPTIONS = [
  { id: '1f', name: '1階設置' },
  { id: '2f', name: '2階設置' },
  { id: '3f', name: '3階設置' },
];

// 風向調整板オプション
const WIND_PLATE_OPTIONS = [
  { id: 'with', name: 'あり', description: '風向きを細かく調整可能', price: 5000 },
  { id: 'without', name: 'なし', description: '標準仕様', price: 0 },
];

interface AirconUnit {
  id: string;
  series: string | null;
  roomSize: string | null;
  floor: string | null;
  windPlate: string | null;
}

interface AirconSelectorProps {
  onComplete: () => void;
  onCancel: () => void;
}

export const AirconSelector: React.FC<AirconSelectorProps> = ({
  onComplete,
  onCancel,
}) => {
  // カート操作
  const addItem = useCartStore((state) => state.addItem);

  // 複数台管理
  const [units, setUnits] = useState<AirconUnit[]>([
    { id: '1', series: null, roomSize: null, floor: null, windPlate: null }
  ]);
  const [activeUnitIndex, setActiveUnitIndex] = useState(0);
  const [showNoSelection, setShowNoSelection] = useState(false);

  const activeUnit = units[activeUnitIndex];

  // 現在のステップを計算
  const getCurrentStep = (unit: AirconUnit): 'series' | 'size' | 'floor' | 'windPlate' | 'complete' => {
    if (!unit.series) return 'series';
    if (!unit.roomSize) return 'size';
    if (!unit.floor) return 'floor';
    if (!unit.windPlate) return 'windPlate';
    return 'complete';
  };

  const currentStep = getCurrentStep(activeUnit);

  // ユニット更新
  const updateUnit = (field: keyof AirconUnit, value: string) => {
    setUnits(prev => prev.map((u, i) =>
      i === activeUnitIndex ? { ...u, [field]: value } : u
    ));
  };

  // 台数追加
  const addUnit = () => {
    const newId = String(units.length + 1);
    setUnits(prev => [...prev, { id: newId, series: null, roomSize: null, floor: null, windPlate: null }]);
    setActiveUnitIndex(units.length);
  };

  // 台数削除
  const removeUnit = (index: number) => {
    if (units.length === 1) return;
    setUnits(prev => prev.filter((_, i) => i !== index));
    if (activeUnitIndex >= units.length - 1) {
      setActiveUnitIndex(Math.max(0, units.length - 2));
    }
  };

  // 製品IDを取得
  const getProductId = (series: string, roomSize: string): string | null => {
    const seriesMap: Record<string, string> = {
      'e': 'daikin-e',
      'gx': 'daikin-gx',
      'z': 'mitsubishi-z',
    };
    const seriesKey = seriesMap[series];
    if (!seriesKey) return null;
    return `furn-aircon-${seriesKey}${roomSize}`;
  };

  // 製品を取得
  const getProduct = (productId: string): Product | undefined => {
    return furnitureProducts.find(p => p.id === productId);
  };

  // 完了したユニットをカートに追加
  const handleComplete = () => {
    const completeUnits = units.filter(u => getCurrentStep(u) === 'complete');

    completeUnits.forEach(unit => {
      const productId = getProductId(unit.series!, unit.roomSize!);
      if (!productId) return;

      const product = getProduct(productId);
      if (!product) return;

      // カートに追加（設置階と風向調整板の情報をdescriptionに含める）
      const floorName = FLOOR_OPTIONS.find(f => f.id === unit.floor)?.name || '';
      const windPlateName = unit.windPlate === 'with' ? '風向調整板あり' : '';
      const locationInfo = [floorName, windPlateName].filter(Boolean).join('、');
      const enhancedDescription = locationInfo
        ? `${product.description || ''} 【${locationInfo}】`
        : product.description;

      addItem({
        id: product.id,
        categoryId: product.categoryId,
        categoryName: product.categoryName,
        subcategory: product.subcategory || '',
        name: product.name,
        manufacturer: product.manufacturer,
        modelNumber: product.modelNumber,
        unit: product.unit,
        isOption: product.isOption,
        description: enhancedDescription,
        pricing: product.pricing,
        variants: product.variants,
      }, 1, product.variants?.[0]);
    });

    onComplete();
  };

  // 「選択しない」を選んだ場合
  const handleNoSelection = () => {
    setShowNoSelection(true);
  };

  const confirmNoSelection = () => {
    onComplete();
  };

  // 「選択しない」確認画面
  if (showNoSelection) {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
          <span className="text-4xl mb-4 block">❄️</span>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
            エアコンを選択しない
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            エアコンは施主支給または後から設置しますか？
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setShowNoSelection(false)}
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              戻る
            </button>
            <button
              onClick={confirmNoSelection}
              className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-medium"
            >
              選択しないで次へ
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 完了したユニット数を計算
  const completeUnitCount = units.filter(u => getCurrentStep(u) === 'complete').length;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            エアコンを選択
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            1台ずつ設定してください。複数台追加できます。
          </p>
        </div>
        <button
          onClick={handleNoSelection}
          className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          選択しない
        </button>
      </div>

      {/* 台数タブ */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
        {units.map((unit, index) => {
          const isComplete = getCurrentStep(unit) === 'complete';
          const isActive = index === activeUnitIndex;
          return (
            <button
              key={unit.id}
              onClick={() => setActiveUnitIndex(index)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-blue-500 text-white'
                  : isComplete
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {isComplete && <Check className="w-4 h-4" />}
              {index + 1}台目
              {units.length > 1 && !isActive && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeUnit(index);
                  }}
                  className="ml-1 p-0.5 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
                >
                  <X className="w-3 h-3 text-red-500" />
                </button>
              )}
            </button>
          );
        })}
        <button
          onClick={addUnit}
          className="flex items-center gap-1 px-3 py-2 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full border border-blue-300 dark:border-blue-700 border-dashed"
        >
          <Plus className="w-4 h-4" />
          追加
        </button>
      </div>

      {/* ステップ進行表示 */}
      <div className="flex items-center gap-2 mb-6 text-sm">
        {['series', 'size', 'floor', 'windPlate'].map((step, index) => {
          const stepLabels = ['①シリーズ', '②畳数', '③設置階', '④風向調整板'];
          const stepOrder = ['series', 'size', 'floor', 'windPlate'];
          const currentStepIndex = stepOrder.indexOf(currentStep);
          const isCompleted = currentStepIndex > index || currentStep === 'complete';
          const isCurrent = currentStep === step;

          return (
            <React.Fragment key={step}>
              <span className={`px-3 py-1 rounded-full ${
                isCompleted
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                  : isCurrent
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
              }`}>
                {isCompleted && <Check className="w-3 h-3 inline mr-1" />}
                {stepLabels[index]}
              </span>
              {index < 3 && <span className="text-gray-300">→</span>}
            </React.Fragment>
          );
        })}
      </div>

      {/* ステップ1: シリーズ選択 */}
      {currentStep === 'series' && (
        <div>
          <h4 className="font-medium text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <Thermometer className="w-5 h-5 text-blue-500" />
            シリーズを選んでください
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {AIRCON_SERIES.map((series) => (
              <SelectionCard
                key={series.id}
                id={series.id}
                name={series.name}
                description={series.description}
                placeholderEmoji={series.icon}
                placeholderBgColor={series.manufacturer === 'ダイキン' ? 'from-blue-100 to-cyan-100' : 'from-red-100 to-orange-100'}
                manufacturer={series.manufacturer}
                priceRange={series.priceRange}
                isSelected={activeUnit.series === series.id}
                onClick={() => updateUnit('series', series.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ステップ2: 畳数選択 */}
      {currentStep === 'size' && (
        <div>
          <button
            onClick={() => updateUnit('series', null as unknown as string)}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> シリーズ選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-500" />
            何畳用を選びますか？
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            選択中: {AIRCON_SERIES.find(s => s.id === activeUnit.series)?.manufacturer} {AIRCON_SERIES.find(s => s.id === activeUnit.series)?.name}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {ROOM_SIZES.map((size) => (
              <SelectionCard
                key={size.id}
                id={size.id}
                name={size.name}
                description={size.description}
                placeholderEmoji="🏠"
                placeholderBgColor="from-green-100 to-emerald-100"
                isSelected={activeUnit.roomSize === size.id}
                onClick={() => updateUnit('roomSize', size.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ステップ3: 設置階選択 */}
      {currentStep === 'floor' && (
        <div>
          <button
            onClick={() => updateUnit('roomSize', null as unknown as string)}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 畳数選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-500" />
            設置する階を選んでください
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {FLOOR_OPTIONS.map((floor) => (
              <SelectionCard
                key={floor.id}
                id={floor.id}
                name={floor.name}
                placeholderEmoji={floor.id === '1f' ? '1️⃣' : floor.id === '2f' ? '2️⃣' : '3️⃣'}
                placeholderBgColor="from-slate-100 to-gray-200"
                isSelected={activeUnit.floor === floor.id}
                onClick={() => updateUnit('floor', floor.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ステップ4: 風向調整板選択 */}
      {currentStep === 'windPlate' && (
        <div>
          <button
            onClick={() => updateUnit('floor', null as unknown as string)}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 設置階選択に戻る
          </button>
          <h4 className="font-medium text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <Wind className="w-5 h-5 text-blue-500" />
            風向調整板の有無
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {WIND_PLATE_OPTIONS.map((option) => (
              <SelectionCard
                key={option.id}
                id={option.id}
                name={option.name}
                description={option.description}
                placeholderEmoji={option.id === 'with' ? '🌬️' : '✕'}
                placeholderBgColor={option.id === 'with' ? 'from-blue-100 to-cyan-100' : 'from-gray-100 to-gray-200'}
                price={option.price}
                isSelected={activeUnit.windPlate === option.id}
                onClick={() => updateUnit('windPlate', option.id)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ステップ完了 */}
      {currentStep === 'complete' && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
          <Check className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h4 className="font-bold text-gray-800 dark:text-white mb-2">
            {activeUnitIndex + 1}台目の設定完了
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {AIRCON_SERIES.find(s => s.id === activeUnit.series)?.manufacturer} {AIRCON_SERIES.find(s => s.id === activeUnit.series)?.name} {ROOM_SIZES.find(r => r.id === activeUnit.roomSize)?.name}
            <br />
            {FLOOR_OPTIONS.find(f => f.id === activeUnit.floor)?.name}
            {activeUnit.windPlate === 'with' ? '、風向調整板あり' : ''}
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={addUnit}
              className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg border border-blue-300 dark:border-blue-700"
            >
              <Plus className="w-4 h-4 inline mr-1" />
              もう1台追加
            </button>
            <button
              onClick={() => {
                // 設定をリセットして最初から
                setUnits(prev => prev.map((u, i) =>
                  i === activeUnitIndex ? { ...u, series: null, roomSize: null, floor: null, windPlate: null } : u
                ));
              }}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Trash2 className="w-4 h-4 inline mr-1" />
              やり直す
            </button>
          </div>
        </div>
      )}

      {/* 決定ボタン */}
      <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={onCancel}
          className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          キャンセル
        </button>
        <button
          onClick={handleComplete}
          disabled={completeUnitCount === 0}
          className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-xl font-medium"
        >
          決定 ({completeUnitCount}台選択)
        </button>
      </div>
    </div>
  );
};

export default AirconSelector;
