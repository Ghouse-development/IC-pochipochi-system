import React, { useState } from 'react';
import { Check, ChevronLeft, Star, Loader2, Image as ImageIcon } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { usePorchItems, type TileOption, type GroutOption } from '../../hooks/usePorchItems';
import type { Product, ProductVariant, PlanType } from '../../types/product';

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
  const { tiles, groutColors, isLoading } = usePorchItems(selectedPlan);

  // 既存のポーチ選択を確認
  const existingPorchItem = items.find(i => i.product.categoryName === 'ポーチ');
  const existingGroutItem = items.find(i => i.product.categoryName === 'ポーチタイル目地');

  const [step, setStep] = useState<'tile' | 'grout' | 'complete'>(
    existingPorchItem ? 'complete' : 'tile'
  );
  const [selectedTile, setSelectedTile] = useState<TileOption | null>(null);
  const [selectedGrout, setSelectedGrout] = useState<GroutOption | null>(null);

  // 選び直す処理
  const handleReselect = () => {
    clearCategoryItems('porch');
    clearCategoryItems('porch-grout');
    setSelectedTile(null);
    setSelectedGrout(null);
    setStep('tile');
  };

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
        { id: 'v1', color: selectedTile.name, imageUrl: selectedTile.imageUrl }
      ],
      pricing: [
        { plan: selectedPlan as PlanType, price: selectedTile.price }
      ],
    };

    const tileVariant: ProductVariant = { id: 'v1', color: selectedTile.name, imageUrl: selectedTile.imageUrl };
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

  // 標準タイルとオプションタイルを分離
  const standardTiles = tiles.filter(t => t.isStandard);
  const optionTiles = tiles.filter(t => !t.isStandard);

  // ローディング中
  if (isLoading) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          <span className="ml-2 text-gray-600">読み込み中...</span>
        </div>
      </div>
    );
  }

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
          {standardTiles.length > 0 && (
            <div className="mb-6">
              <h5 className="text-sm font-medium text-gray-500 mb-3">標準</h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {standardTiles.map(tile => (
                  <TileButton
                    key={tile.id}
                    tile={tile}
                    isSelected={selectedTile?.id === tile.id}
                    onClick={() => handleTileSelect(tile)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* タイルオプション */}
          {optionTiles.length > 0 && (
            <div>
              <h5 className="text-sm font-medium text-gray-500 mb-3">タイル（オプション）</h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {optionTiles.map(tile => (
                  <TileButton
                    key={tile.id}
                    tile={tile}
                    isSelected={selectedTile?.id === tile.id}
                    onClick={() => handleTileSelect(tile)}
                  />
                ))}
              </div>
            </div>
          )}
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

          <div className="mb-4 p-3 bg-gray-50 rounded-lg flex items-center gap-3">
            {selectedTile.imageUrl && (
              <img
                src={selectedTile.imageUrl}
                alt={selectedTile.name}
                className="w-12 h-12 object-cover rounded"
              />
            )}
            <div>
              <span className="text-sm text-gray-600">選択中のタイル: </span>
              <span className="font-medium">{selectedTile.name}</span>
            </div>
          </div>

          <h4 className="font-medium text-gray-800 mb-4">目地色を選択</h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {groutColors.map(grout => (
              <button
                key={grout.id}
                onClick={() => handleGroutSelect(grout)}
                className={`relative p-4 border-2 rounded-xl text-left transition-all ${
                  selectedGrout?.id === grout.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {/* おすすめバッジ（表示のみ、自動選択なし） */}
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
          {/* 新規選択時 */}
          {selectedTile && (
            <div className="text-sm text-gray-600 mb-4">
              {selectedTile.imageUrl && (
                <img
                  src={selectedTile.imageUrl}
                  alt={selectedTile.name}
                  className="w-16 h-16 object-cover rounded mx-auto mb-2"
                />
              )}
              <p>{selectedTile.name}</p>
              {selectedGrout && <p>目地色: {selectedGrout.name}</p>}
            </div>
          )}
          {/* 既存選択（カートから）時 */}
          {!selectedTile && existingPorchItem && (
            <div className="text-sm text-gray-600 mb-4">
              <p>{existingPorchItem.product.name}</p>
              {existingGroutItem && (
                <p>目地色: {existingGroutItem.selectedVariant?.color || existingGroutItem.product.name}</p>
              )}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleReselect}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50"
            >
              選び直す
            </button>
            <button
              onClick={onComplete}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
            >
              次のカテゴリへ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// タイルボタンコンポーネント
interface TileButtonProps {
  tile: TileOption;
  isSelected: boolean;
  onClick: () => void;
}

const TileButton: React.FC<TileButtonProps> = ({ tile, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`relative border-2 rounded-xl text-left transition-all overflow-hidden ${
      isSelected
        ? 'border-blue-500 bg-blue-50'
        : 'border-gray-200 hover:border-blue-300'
    }`}
  >
    {/* 画像エリア */}
    <div className="w-full h-24 bg-gray-100 flex items-center justify-center">
      {tile.imageUrl ? (
        <img
          src={tile.imageUrl}
          alt={tile.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // 画像読み込みエラー時はプレースホルダーを表示
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = '<div class="flex items-center justify-center w-full h-full text-gray-400"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>';
            }
          }}
        />
      ) : (
        <ImageIcon className="w-8 h-8 text-gray-400" />
      )}
    </div>

    {/* おすすめバッジ（表示のみ、自動選択なし） */}
    {tile.isRecommended && (
      <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs">
        <Star className="w-3 h-3 fill-amber-500" />
        オススメ
      </div>
    )}

    {/* 情報エリア */}
    <div className="p-3">
      <div className="font-medium text-gray-900">{tile.name}</div>
      {!tile.isStandard && (
        <div className="text-xs text-gray-500">{tile.manufacturer}</div>
      )}
      <div className="text-xs text-gray-500 mt-1">{tile.description}</div>
      <div className={`text-sm font-medium mt-2 ${tile.isStandard ? 'text-blue-600' : 'text-orange-600'}`}>
        {tile.isStandard ? '標準' : `+¥${tile.price.toLocaleString()}/㎡`}
      </div>
    </div>

    {/* 選択状態 */}
    {isSelected && (
      <div className="absolute top-2 left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
        <Check className="w-4 h-4 text-white" />
      </div>
    )}
  </button>
);

export default PorchTileSelector;
