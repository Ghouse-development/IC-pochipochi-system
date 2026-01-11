import React, { useState } from 'react';
import { Check, ChevronLeft, Star } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import type { Product, ProductVariant, PlanType } from '../../types/product';

// ポーチタイル種類
interface TileOption {
  id: string;
  name: string;
  manufacturer: string;
  description: string;
  price: number;
  isStandard: boolean;
  isRecommended?: boolean;
}

const PORCH_TILES: TileOption[] = [
  { id: 'mortar', name: 'モルタル金鏝抑え', manufacturer: '標準', description: '標準仕上げ（目地不要）', price: 0, isStandard: true },
  { id: 'nature2', name: 'ネイチャーII', manufacturer: 'Nagoya mozaic', description: '300×300 自然な風合い', price: 22000, isStandard: false, isRecommended: true },
  { id: 'vespa', name: 'ベスパ', manufacturer: 'LIXIL', description: '300×300 モダンデザイン', price: 22000, isStandard: false, isRecommended: true },
  { id: 'memphis', name: 'メンフィス', manufacturer: 'LIXIL', description: '600×600 大判タイル', price: 27000, isStandard: false },
  { id: 'landstone', name: 'ランドストン', manufacturer: 'Nagoya mozaic', description: '600×600 岩面', price: 5000, isStandard: false },
  { id: 'pietra-soni', name: 'ピエトラソーニ', manufacturer: 'Nagoya mozaic', description: '600×600 粗目', price: 5000, isStandard: false },
];

// 目地色オプション
interface GroutOption {
  id: string;
  name: string;
  colorCode: string;
  isRecommended?: boolean;
  recommendedFor?: string;
}

const GROUT_COLORS: GroutOption[] = [
  { id: 'white', name: '白', colorCode: '#FFFFFF', isRecommended: true, recommendedFor: '明るめのタイル' },
  { id: 'dark-gray', name: '濃い灰色', colorCode: '#4A4A4A' },
  { id: 'brown', name: 'こげ茶', colorCode: '#4A3728' },
  { id: 'beige', name: 'ベージュ', colorCode: '#D4C4A8' },
  { id: 'light-gray', name: '薄い灰色', colorCode: '#B8B8B8', isRecommended: true, recommendedFor: '暗めのタイル' },
];

interface PorchTileSelectorProps {
  selectedPlan: string;
  onComplete: () => void;
  onCancel: () => void;
}

export const PorchTileSelector: React.FC<PorchTileSelectorProps> = ({
  selectedPlan,
  onComplete,
  onCancel,
}) => {
  const { addItem, items, clearCategoryItems } = useCartStore();

  // 既存のポーチ選択を確認
  const existingItem = items.find(i => i.product.categoryName === 'ポーチ');

  const [step, setStep] = useState<'tile' | 'grout' | 'complete'>(
    existingItem ? 'complete' : 'tile'
  );
  const [selectedTile, setSelectedTile] = useState<TileOption | null>(null);
  const [selectedGrout, setSelectedGrout] = useState<GroutOption | null>(null);

  const handleTileSelect = (tile: TileOption) => {
    setSelectedTile(tile);
    // モルタルの場合は目地不要なので完了へ
    if (tile.id === 'mortar') {
      setStep('complete');
    } else {
      setStep('grout');
    }
  };

  const handleGroutSelect = (grout: GroutOption) => {
    setSelectedGrout(grout);
  };

  const handleComplete = () => {
    if (!selectedTile) return;

    // 既存のポーチをクリア
    clearCategoryItems('porch');

    // タイルアイテムを作成
    const tileProduct: Product = {
      id: `ext-porch-${selectedTile.id}`,
      categoryId: 'porch',
      categoryName: 'ポーチ',
      subcategory: selectedTile.name,
      name: selectedTile.name,
      manufacturer: selectedTile.manufacturer,
      modelNumber: `PORCH-${selectedTile.id.toUpperCase()}`,
      unit: '㎡',
      isOption: !selectedTile.isStandard,
      variants: [
        { id: 'v1', color: selectedTile.name }
      ],
      pricing: [
        { plan: selectedPlan as PlanType, price: selectedTile.price }
      ],
    };

    const tileVariant: ProductVariant = { id: 'v1', color: selectedTile.name };
    addItem(tileProduct, 1, tileVariant);

    // タイル選択時のみ目地も追加
    if (selectedTile.id !== 'mortar' && selectedGrout) {
      const groutProduct: Product = {
        id: 'ext-porch-grout',
        categoryId: 'porch-grout',
        categoryName: 'ポーチタイル目地',
        subcategory: '目地色',
        name: `ポーチタイル目地色（${selectedGrout.name}）`,
        manufacturer: '標準',
        modelNumber: `GROUT-${selectedGrout.id.toUpperCase()}`,
        unit: '一式',
        isOption: false,
        variants: [
          { id: 'v1', color: selectedGrout.name, colorCode: selectedGrout.colorCode }
        ],
        pricing: [
          { plan: selectedPlan as PlanType, price: 0 }
        ],
      };

      const groutVariant: ProductVariant = { id: 'v1', color: selectedGrout.name, colorCode: selectedGrout.colorCode };
      addItem(groutProduct, 1, groutVariant);
    }

    setStep('complete');
  };

  // モルタル以外のタイルは目地選択が必要
  const needsGrout = selectedTile && selectedTile.id !== 'mortar';

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          🚶 ポーチを選択
        </h3>
        <p className="text-sm text-gray-600">
          ポーチの仕上げとタイルの目地色を選んでください
        </p>
      </div>

      {/* ステップインジケーター */}
      {step !== 'complete' && (
        <div className="flex items-center gap-2 mb-6">
          <div className={`flex items-center gap-1 ${step === 'tile' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
            <span>タイル選択</span>
          </div>
          {needsGrout && (
            <>
              <div className="w-8 h-px bg-gray-300" />
              <div className={`flex items-center gap-1 ${step === 'grout' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-sm">2</span>
                <span>目地色</span>
              </div>
            </>
          )}
        </div>
      )}

      {/* ステップ1: タイル選択 */}
      {step === 'tile' && (
        <div>
          <h4 className="font-medium text-gray-800 mb-4">ポーチの仕上げを選択</h4>

          {/* 標準オプション */}
          <div className="mb-6">
            <h5 className="text-sm font-medium text-gray-500 mb-3">標準</h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PORCH_TILES.filter(t => t.isStandard).map(tile => (
                <button
                  key={tile.id}
                  onClick={() => handleTileSelect(tile)}
                  className={`relative p-4 border-2 rounded-xl text-left transition-all ${
                    selectedTile?.id === tile.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="font-medium text-gray-900">{tile.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{tile.description}</div>
                  <div className="text-sm font-medium text-blue-600 mt-2">標準</div>
                </button>
              ))}
            </div>
          </div>

          {/* タイルオプション */}
          <div>
            <h5 className="text-sm font-medium text-gray-500 mb-3">タイル（オプション）</h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {PORCH_TILES.filter(t => !t.isStandard).map(tile => (
                <button
                  key={tile.id}
                  onClick={() => handleTileSelect(tile)}
                  className={`relative p-4 border-2 rounded-xl text-left transition-all ${
                    selectedTile?.id === tile.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {tile.isRecommended && (
                    <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs">
                      <Star className="w-3 h-3 fill-amber-500" />
                      オススメ
                    </div>
                  )}
                  <div className="font-medium text-gray-900">{tile.name}</div>
                  <div className="text-xs text-gray-500">{tile.manufacturer}</div>
                  <div className="text-xs text-gray-500 mt-1">{tile.description}</div>
                  <div className="text-sm font-medium text-orange-600 mt-2">
                    +¥{tile.price.toLocaleString()}/㎡
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ステップ2: 目地色選択 */}
      {step === 'grout' && selectedTile && (
        <div>
          <button
            onClick={() => setStep('tile')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> タイル選択に戻る
          </button>

          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <span className="text-sm text-gray-600">選択中のタイル: </span>
            <span className="font-medium">{selectedTile.name}</span>
          </div>

          <h4 className="font-medium text-gray-800 mb-4">目地色を選択</h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {GROUT_COLORS.map(grout => (
              <button
                key={grout.id}
                onClick={() => handleGroutSelect(grout)}
                className={`relative p-4 border-2 rounded-xl text-left transition-all ${
                  selectedGrout?.id === grout.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {grout.isRecommended && (
                  <div className="absolute top-1 right-1 flex items-center gap-0.5 px-1.5 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs">
                    <Star className="w-2.5 h-2.5 fill-amber-500" />
                  </div>
                )}
                <div
                  className="w-full h-8 rounded mb-2 border border-gray-300"
                  style={{ backgroundColor: grout.colorCode }}
                />
                <div className="text-sm font-medium text-gray-900">{grout.name}</div>
                {grout.recommendedFor && (
                  <div className="text-xs text-amber-600 mt-1">{grout.recommendedFor}に◎</div>
                )}
                {selectedGrout?.id === grout.id && (
                  <Check className="absolute top-2 left-2 w-4 h-4 text-blue-500" />
                )}
              </button>
            ))}
          </div>

          {/* 完了ボタン */}
          <div className="flex gap-4">
            <button
              onClick={onCancel}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              onClick={handleComplete}
              disabled={!selectedGrout}
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
            ポーチの選択が完了しました
          </h4>
          {selectedTile && (
            <div className="text-sm text-gray-600 mb-4">
              <p>{selectedTile.name}</p>
              {selectedGrout && <p>目地色: {selectedGrout.name}</p>}
            </div>
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

export default PorchTileSelector;
