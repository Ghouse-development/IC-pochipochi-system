import React, { useState } from 'react';
import { Check, ChevronLeft, Star, Loader2, Image as ImageIcon } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { usePorchItems, type TileOption, type GroutOption, type TileColorVariant } from '../../hooks/usePorchItems';
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

  const [step, setStep] = useState<'tile' | 'color' | 'grout' | 'complete'>(
    existingPorchItem ? 'complete' : 'tile'
  );
  const [selectedTile, setSelectedTile] = useState<TileOption | null>(null);
  const [selectedColor, setSelectedColor] = useState<TileColorVariant | null>(null);
  const [selectedGrout, setSelectedGrout] = useState<GroutOption | null>(null);

  // 選び直す処理
  const handleReselect = () => {
    clearCategoryItems('porch');
    clearCategoryItems('porch-grout');
    setSelectedTile(null);
    setSelectedColor(null);
    setSelectedGrout(null);
    setStep('tile');
  };

  // モルタルかどうかを判定（名前に「モルタル」を含むか、標準で目地不要のもの）
  const isMortar = (tile: TileOption) => {
    return tile.name.includes('モルタル') || tile.description?.includes('目地不要');
  };

  // 色選択が必要かどうか（複数バリアントがある場合）
  const needsColorSelection = (tile: TileOption) => {
    return tile.colorVariants && tile.colorVariants.length > 1;
  };

  const handleTileSelect = (tile: TileOption) => {
    setSelectedTile(tile);
    setSelectedColor(null);

    // モルタルの場合は目地不要なので完了へ
    if (isMortar(tile)) {
      setStep('complete');
    } else if (needsColorSelection(tile)) {
      // 色選択が必要な場合
      setStep('color');
    } else {
      // 色が1つだけの場合は自動選択して目地選択へ
      if (tile.colorVariants && tile.colorVariants.length === 1) {
        setSelectedColor(tile.colorVariants[0]);
      }
      setStep('grout');
    }
  };

  const handleColorSelect = (color: TileColorVariant) => {
    setSelectedColor(color);
    setStep('grout');
  };

  const handleGroutSelect = (grout: GroutOption) => {
    setSelectedGrout(grout);
  };

  const handleComplete = () => {
    if (!selectedTile) return;

    // 既存のポーチをクリア
    clearCategoryItems('porch');

    // 選択された色の名前と画像
    const colorName = selectedColor?.colorName || selectedTile.name;
    const colorImageUrl = selectedColor?.imageUrl || selectedTile.imageUrl;

    // タイルアイテムを作成
    const tileProduct: Product = {
      id: `ext-porch-${selectedTile.id}`,
      categoryId: 'porch',
      categoryName: 'ポーチ',
      subcategory: selectedTile.name,
      name: `${selectedTile.name}${selectedColor ? ` (${colorName})` : ''}`,
      manufacturer: selectedTile.manufacturer,
      modelNumber: `PORCH-${selectedTile.id.toUpperCase()}`,
      unit: '㎡',
      isOption: !selectedTile.isStandard,
      variants: [
        { id: selectedColor?.id || 'v1', color: colorName, imageUrl: colorImageUrl }
      ],
      pricing: [
        { plan: selectedPlan as PlanType, price: selectedTile.price }
      ],
    };

    const tileVariant: ProductVariant = { id: selectedColor?.id || 'v1', color: colorName, imageUrl: colorImageUrl };
    addItem(tileProduct, 1, tileVariant);

    // タイル選択時のみ目地も追加（モルタル以外）
    if (!isMortar(selectedTile) && selectedGrout) {
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
  const needsGrout = selectedTile && !isMortar(selectedTile);

  // 標準タイルとオプションタイルを分離
  const standardTiles = tiles.filter(t => t.isStandard);
  const optionTiles = tiles.filter(t => !t.isStandard);

  // ローディング中
  if (isLoading) {
    return (
      <div className="p-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          <span className="ml-2 text-gray-600">読み込み中...</span>
        </div>
      </div>
    );
  }

  // データがない場合
  if (tiles.length === 0) {
    return (
      <div className="p-4 max-w-6xl mx-auto">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
          <p className="text-amber-800 font-medium mb-2">ポーチタイルのデータがありません</p>
          <p className="text-sm text-amber-600 mb-4">
            管理画面でポーチタイル（porch-tileタグ）を登録してください
          </p>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            戻る
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          🚶 ポーチを選択
        </h3>
        <p className="text-sm text-gray-600">
          ポーチの仕上げとタイルの目地色を選んでください
        </p>
      </div>

      {/* ステップインジケーター */}
      {step !== 'complete' && (
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <div className={`flex items-center gap-1 ${step === 'tile' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${step === 'tile' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}>1</span>
            <span>タイル</span>
          </div>
          {selectedTile && needsColorSelection(selectedTile) && (
            <>
              <div className="w-6 h-px bg-gray-300" />
              <div className={`flex items-center gap-1 ${step === 'color' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${step === 'color' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}>2</span>
                <span>色</span>
              </div>
            </>
          )}
          {needsGrout && (
            <>
              <div className="w-6 h-px bg-gray-300" />
              <div className={`flex items-center gap-1 ${step === 'grout' ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${step === 'grout' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}>{selectedTile && needsColorSelection(selectedTile) ? '3' : '2'}</span>
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
            <div className="mb-4">
              <h5 className="text-sm font-medium text-gray-500 mb-3">標準</h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
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

      {/* ステップ2: 色選択（複数バリアントがある場合のみ） */}
      {step === 'color' && selectedTile && selectedTile.colorVariants && (
        <div>
          <button
            onClick={() => setStep('tile')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> タイル選択に戻る
          </button>

          <div className="mb-4 p-3 bg-gray-50 rounded-lg flex items-center gap-2">
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

          <h4 className="font-medium text-gray-800 mb-4">色を選択（{selectedTile.colorVariants.length}色）</h4>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 mb-4">
            {selectedTile.colorVariants.map(color => (
              <button
                key={color.id}
                onClick={() => handleColorSelect(color)}
                className={`relative border-2 rounded-xl text-left transition-all overflow-hidden ${
                  selectedColor?.id === color.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {/* 色画像 */}
                <div className="aspect-[4/3] bg-gray-100">
                  {color.imageUrl ? (
                    <img
                      src={color.imageUrl}
                      alt={color.colorName}
                      className="w-full h-full object-cover"
                    />
                  ) : color.colorCode ? (
                    <div
                      className="w-full h-full"
                      style={{ backgroundColor: color.colorCode }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-8 h-8 text-gray-300" />
                    </div>
                  )}
                </div>
                {/* 色名 */}
                <div className="p-2">
                  <span className="text-sm font-medium text-gray-900">{color.colorName}</span>
                </div>
                {/* 選択チェック */}
                {selectedColor?.id === color.id && (
                  <div className="absolute top-2 left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ステップ3: 目地色選択 */}
      {step === 'grout' && selectedTile && (
        <div>
          <button
            onClick={() => needsColorSelection(selectedTile) ? setStep('color') : setStep('tile')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> {needsColorSelection(selectedTile) ? '色選択に戻る' : 'タイル選択に戻る'}
          </button>

          <div className="mb-4 p-3 bg-gray-50 rounded-lg flex items-center gap-2">
            {(selectedColor?.imageUrl || selectedTile.imageUrl) && (
              <img
                src={selectedColor?.imageUrl || selectedTile.imageUrl}
                alt={selectedColor?.colorName || selectedTile.name}
                className="w-12 h-12 object-cover rounded"
              />
            )}
            <div>
              <span className="text-sm text-gray-600">選択中: </span>
              <span className="font-medium">{selectedTile.name}</span>
              {selectedColor && (
                <span className="text-sm text-gray-500 ml-1">({selectedColor.colorName})</span>
              )}
            </div>
          </div>

          <h4 className="font-medium text-gray-800 mb-4">目地色を選択</h4>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-2 mb-4">
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
    className={`relative bg-white border-2 rounded-lg text-left transition-all overflow-hidden ${
      isSelected
        ? 'border-2 border-blue-500 shadow-xl shadow-blue-200 scale-[1.02]'
        : 'border-gray-200 hover:shadow-xl hover:border-blue-300 hover:scale-[1.02]'
    }`}
  >
    {/* 画像エリア（正方形） */}
    <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
      {tile.imageUrl ? (
        <img
          src={tile.imageUrl}
          alt={tile.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = '<div class="flex flex-col items-center justify-center w-full h-full text-gray-400"><span class="text-2xl mb-1">🚶</span><span class="text-xs">画像準備中</span></div>';
            }
          }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-400">
          <span className="text-2xl mb-1">🚶</span>
          <span className="text-xs">画像準備中</span>
        </div>
      )}

      {/* バッジ（左上） */}
      <div className="absolute top-2 left-2 flex flex-col gap-1">
        {tile.isRecommended && (
          <span className="px-2 py-1 rounded-md text-xs font-bold shadow-md bg-amber-500 text-white flex items-center gap-1">
            <Star className="w-3 h-3 fill-white" />
            オススメ
          </span>
        )}
        <span className={`px-2 py-1 rounded-md text-xs font-bold shadow-md ${
          tile.isStandard ? 'bg-emerald-500 text-white' : 'bg-orange-500 text-white'
        }`}>
          {tile.isStandard ? '標準' : 'オプション'}
        </span>
      </div>

      {/* 選択済みオーバーレイ */}
      {isSelected && (
        <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center">
          <div className="bg-white rounded-full p-3 shadow-xl ring-2 ring-blue-400/50">
            <Check className="w-6 h-6 text-blue-600" strokeWidth={3} />
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
    <div className="p-2">
      <p className="text-xs text-gray-500 mb-0.5 truncate">{tile.manufacturer}</p>
      <h3 className="font-bold text-xs text-gray-800 line-clamp-2 mb-1">
        {tile.name}
      </h3>
      <div className="flex items-baseline gap-1">
        <span className={`text-sm font-black ${tile.isStandard ? 'text-emerald-600' : 'text-gray-900'}`}>
          {tile.isStandard ? '標準' : `+¥${tile.price.toLocaleString()}`}
        </span>
        {!tile.isStandard && (
          <span className="text-xs text-gray-500">/㎡</span>
        )}
      </div>
    </div>
  </button>
);

export default PorchTileSelector;
