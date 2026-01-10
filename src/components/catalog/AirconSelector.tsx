import React, { useState } from 'react';
import { Check, X, Plus, Trash2, Wind, Thermometer, Building2, ChevronLeft } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { furnitureProducts } from '../../data/furnitureProducts';
import { SelectionCard } from './SelectionCard';
import type { Product } from '../../types/product';

// エアコンシリーズ定義
const AIRCON_SERIES = [
  { id: 'e', name: 'Eシリーズ', manufacturer: 'ダイキン', description: 'スタンダードモデル', icon: '❄️', productPrefix: 'furn-aircon-daikin-e' },
  { id: 'gx', name: 'GXシリーズ', manufacturer: 'ダイキン', description: 'さらら除湿搭載', icon: '💧', productPrefix: 'furn-aircon-daikin-gx' },
  { id: 'z', name: '霧ヶ峰 Zシリーズ', manufacturer: '三菱電機', description: 'さらっと除湿冷房', icon: '🌀', productPrefix: 'furn-aircon-mitsubishi-z' },
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
  { id: 'with', name: 'あり', description: '風向きを細かく調整可能', productId: 'furn-aircon-wind-plate' },
  { id: 'without', name: 'なし', description: '標準仕様' },
];

interface AirconUnit {
  id: string;
  series: string | null;
  roomSize: string | null;
  floor: string | null;
  windPlate: string | null;
}

interface AirconSelectorProps {
  selectedPlan: string;
  onComplete: () => void;
  onCancel: () => void;
}

export const AirconSelector: React.FC<AirconSelectorProps> = ({
  selectedPlan,
  onComplete,
  onCancel,
}) => {
  // カート操作
  const addItem = useCartStore((state) => state.addItem);

  // プラン別価格を取得
  const getPlanPrice = (productId: string): number => {
    const product = furnitureProducts.find(p => p.id === productId);
    if (!product?.pricing) return 0;
    const planPrice = product.pricing.find(p => p.plan === selectedPlan);
    return planPrice?.price ?? 0;
  };

  // シリーズの価格レンジを取得（6畳〜14畳の価格範囲）
  const getSeriesPriceRange = (productPrefix: string): string => {
    const prices = ['6', '10', '14'].map(size => getPlanPrice(`${productPrefix}${size}`)).filter(p => p > 0);
    if (prices.length === 0) return '';
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return `¥${(minPrice / 10000).toFixed(1)}万〜${(maxPrice / 10000).toFixed(1)}万円`;
  };

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
                priceRange={getSeriesPriceRange(series.productPrefix)}
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
            {ROOM_SIZES.map((size) => {
              const seriesInfo = AIRCON_SERIES.find(s => s.id === activeUnit.series);
              const productId = seriesInfo ? `${seriesInfo.productPrefix}${size.id}` : '';
              const price = productId ? getPlanPrice(productId) : 0;
              return (
                <SelectionCard
                  key={size.id}
                  id={size.id}
                  name={size.name}
                  description={size.description}
                  placeholderEmoji="🏠"
                  placeholderBgColor="from-green-100 to-emerald-100"
                  price={price}
                  isOption={price > 0}
                  isSelected={activeUnit.roomSize === size.id}
                  onClick={() => updateUnit('roomSize', size.id)}
                />
              );
            })}
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
            {WIND_PLATE_OPTIONS.map((option) => {
              const price = option.productId ? getPlanPrice(option.productId) : 0;
              return (
                <SelectionCard
                  key={option.id}
                  id={option.id}
                  name={option.name}
                  description={option.description}
                  placeholderEmoji={option.id === 'with' ? '🌬️' : '✕'}
                  placeholderBgColor={option.id === 'with' ? 'from-blue-100 to-cyan-100' : 'from-gray-100 to-gray-200'}
                  price={price}
                  isOption={price > 0}
                  isSelected={activeUnit.windPlate === option.id}
                  onClick={() => updateUnit('windPlate', option.id)}
                />
              );
            })}
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
