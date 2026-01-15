import React, { useState } from 'react';
import { Check, ChevronLeft, Loader2 } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { SelectionCard } from './SelectionCard';
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

    // ======================================
    // ポーチタイル → 玄関床・シューズクローク連動
    // タイルを選択した場合、玄関床とシューズクローク床も同じタイルをプリセット
    // ======================================
    if (!isMortar(selectedTile)) {
      // 既存の連動アイテムをクリア
      clearCategoryItems('entrance-floor-linked');
      clearCategoryItems('shoes-closet-floor-linked');

      // 玄関床用アイテムを作成（ポーチタイル連動）
      const entranceFloorProduct: Product = {
        id: `int-entrance-floor-${selectedTile.id}-linked`,
        categoryId: 'entrance-floor-linked',
        categoryName: '玄関床',
        subcategory: `${selectedTile.name}（ポーチ連動）`,
        name: `${selectedTile.name}${selectedColor ? ` (${colorName})` : ''} ※ポーチ連動`,
        manufacturer: selectedTile.manufacturer,
        modelNumber: `ENT-FLOOR-${selectedTile.id.toUpperCase()}`,
        unit: '㎡',
        isOption: !selectedTile.isStandard,
        variants: [
          { id: selectedColor?.id || 'v1', color: colorName, imageUrl: colorImageUrl }
        ],
        pricing: [
          { plan: selectedPlan as PlanType, price: selectedTile.price }
        ],
      };
      addItem(entranceFloorProduct, 1, tileVariant);

      // シューズクローク床用アイテムを作成（ポーチタイル連動）
      const shoesClosetFloorProduct: Product = {
        id: `int-shoes-closet-floor-${selectedTile.id}-linked`,
        categoryId: 'shoes-closet-floor-linked',
        categoryName: 'シューズクローク床',
        subcategory: `${selectedTile.name}（ポーチ連動）`,
        name: `${selectedTile.name}${selectedColor ? ` (${colorName})` : ''} ※ポーチ連動`,
        manufacturer: selectedTile.manufacturer,
        modelNumber: `SC-FLOOR-${selectedTile.id.toUpperCase()}`,
        unit: '㎡',
        isOption: !selectedTile.isStandard,
        variants: [
          { id: selectedColor?.id || 'v1', color: colorName, imageUrl: colorImageUrl }
        ],
        pricing: [
          { plan: selectedPlan as PlanType, price: selectedTile.price }
        ],
      };
      addItem(shoesClosetFloorProduct, 1, tileVariant);
    }

    setStep('complete');
  };

  // 標準タイルとオプションタイルを分離
  const standardTiles = tiles.filter(t => t.isStandard);
  const optionTiles = tiles.filter(t => !t.isStandard);

  // ローディング中
  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4">
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
      <div className="max-w-6xl mx-auto px-4">
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
    <div className="max-w-6xl mx-auto px-4">
      {/* ヘッダー */}
      <PageHeader
        title="ポーチを選択"
        subtitle="ポーチの仕上げとタイルの目地色を選んでください"
      />


      {/* タイル選択 */}
      {step === 'tile' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {/* 標準を先に、オプションを後に表示 */}
          {[...standardTiles, ...optionTiles].map(tile => (
            <SelectionCard
              key={tile.id}
              id={tile.id}
              name={tile.name}
              imageUrl={tile.imageUrl}
              placeholderEmoji="🚶"
              placeholderBgColor="from-gray-100 to-slate-100"
              isStandard={tile.isStandard}
              isOption={!tile.isStandard}
              price={tile.isStandard ? 0 : tile.price}
              unit="㎡"
              variantCount={tile.colorVariants?.length}
              isSelected={selectedTile?.id === tile.id}
              onClick={() => handleTileSelect(tile)}
            />
          ))}
        </div>
      )}

      {/* 色選択（複数バリアントがある場合のみ） */}
      {step === 'color' && selectedTile && selectedTile.colorVariants && (
        <div>
          <button
            onClick={() => setStep('tile')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 戻る
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-4">
            {selectedTile.colorVariants.map(color => (
              <SelectionCard
                key={color.id}
                id={color.id}
                name={color.colorName}
                imageUrl={color.imageUrl}
                colorCode={color.colorCode}
                placeholderEmoji="🎨"
                placeholderBgColor="from-gray-100 to-slate-100"
                isSelected={selectedColor?.id === color.id}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </div>
        </div>
      )}

      {/* 目地色選択 */}
      {step === 'grout' && selectedTile && (
        <div>
          <button
            onClick={() => needsColorSelection(selectedTile) ? setStep('color') : setStep('tile')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> 戻る
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-4">
            {groutColors.map(grout => (
              <SelectionCard
                key={grout.id}
                id={grout.id}
                name={grout.name}
                colorCode={grout.colorCode}
                placeholderEmoji="🧱"
                placeholderBgColor="from-gray-200 to-slate-300"
                isSelected={selectedGrout?.id === grout.id}
                onClick={() => handleGroutSelect(grout)}
              />
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
              {/* 連動した項目を表示（タイル選択時のみ） */}
              {!isMortar(selectedTile) && (
                <div className="mt-3 pt-3 border-t border-green-200">
                  <p className="text-xs text-green-700 font-medium mb-1">🔗 以下も自動でプリセットされました</p>
                  <p className="text-xs text-gray-500">• 玄関床: {selectedTile.name}</p>
                  <p className="text-xs text-gray-500">• シューズクローク床: {selectedTile.name}</p>
                </div>
              )}
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

export default PorchTileSelector;
