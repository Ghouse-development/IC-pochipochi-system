import React, { useMemo } from 'react';
import { Sparkles, TrendingUp, Shuffle, ShoppingCart } from 'lucide-react';
import type { Product } from '../../types/product';
import { recommendationEngine } from '../../services/recommendationEngine';
import { formatPrice, getProductPrice } from '../../lib/utils';
import { UNIT_SYMBOLS } from '../../types/product';
import { useCartStore } from '../../stores/useCartStore';
import { getHexColor } from '../../utils/colorMapping';
import { generateProductPlaceholder } from '../../utils/imageUtils';

interface RecommendationPanelProps {
  selectedProducts: Product[];
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

export const RecommendationPanel: React.FC<RecommendationPanelProps> = ({
  selectedProducts,
  allProducts,
  onSelectProduct,
}) => {
  const { addItem } = useCartStore();

  // レコメンデーションを取得
  const recommendations = useMemo(() => {
    return recommendationEngine.getRecommendations(selectedProducts, allProducts, 6);
  }, [selectedProducts, allProducts]);

  // 補完商品を取得（最後に選択した商品に基づく）
  const frequentlyBoughtTogether = useMemo(() => {
    if (selectedProducts.length === 0) return [];
    const lastSelected = selectedProducts[selectedProducts.length - 1];
    return recommendationEngine.getFrequentlyBoughtTogether(lastSelected, allProducts, 4);
  }, [selectedProducts, allProducts]);

  // コーディネートセットを取得
  const coordinatedSets = useMemo(() => {
    return {
      modern: recommendationEngine.getCoordinatedSet('modern', allProducts),
      natural: recommendationEngine.getCoordinatedSet('natural', allProducts),
    };
  }, [allProducts]);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, 1, product.variants[0]);
  };

  if (recommendations.length === 0 && frequentlyBoughtTogether.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* おすすめ商品 */}
      {recommendations.length > 0 && (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-bold text-gray-900">あなたへのおすすめ</h3>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {recommendations.map(product => {
              const variant = product.variants[0];
              const price = getProductPrice(product.pricing);
              const imagePlaceholder = generateProductPlaceholder(product.name, variant?.color);
              const hexColor = variant ? getHexColor(variant.colorCode || variant.color) : '#CCCCCC';

              return (
                <button
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="bg-white rounded-xl p-3 text-left hover:shadow-md transition-all group"
                >
                  <div className="relative aspect-square mb-2 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={variant?.imageUrl || imagePlaceholder}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = imagePlaceholder;
                      }}
                    />
                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className="absolute bottom-2 right-2 p-2 bg-teal-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-teal-600"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{product.categoryName}</p>
                  <p className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: hexColor }}
                    />
                    <span className="text-xs text-gray-500">{product.variants.length}色</span>
                  </div>
                  <p className="text-sm font-bold text-teal-600 mt-1">
                    {price === 0 ? '標準' : `${formatPrice(price)}/${UNIT_SYMBOLS[product.unit] || product.unit}`}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* よく一緒に選ばれています */}
      {frequentlyBoughtTogether.length > 0 && (
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-bold text-gray-900">よく一緒に選ばれています</h3>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {frequentlyBoughtTogether.map(product => {
              const variant = product.variants[0];
              const price = getProductPrice(product.pricing);
              const imagePlaceholder = generateProductPlaceholder(product.name, variant?.color);

              return (
                <button
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="flex-shrink-0 w-40 bg-white rounded-xl p-3 text-left hover:shadow-md transition-all"
                >
                  <div className="aspect-square mb-2 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={variant?.imageUrl || imagePlaceholder}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = imagePlaceholder;
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 truncate">{product.categoryName}</p>
                  <p className="text-sm font-medium text-gray-900 line-clamp-2">{product.name}</p>
                  <p className="text-sm font-bold text-teal-600 mt-1">
                    {price === 0 ? '標準' : formatPrice(price)}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* スタイルコーディネート */}
      {selectedProducts.length === 0 && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Shuffle className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-bold text-gray-900">スタイル別コーディネート</h3>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {/* モダンスタイル */}
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">モダンスタイル</h4>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  シンプル・スタイリッシュ
                </span>
              </div>
              <div className="flex gap-2">
                {coordinatedSets.modern.slice(0, 4).map(product => {
                  const variant = product.variants[0];
                  const hexColor = variant ? getHexColor(variant.colorCode || variant.color) : '#CCCCCC';
                  return (
                    <button
                      key={product.id}
                      onClick={() => onSelectProduct(product)}
                      className="flex-1"
                      title={product.name}
                    >
                      <div
                        className="aspect-square rounded-lg border-2 border-gray-200 hover:border-teal-500 transition-colors"
                        style={{ backgroundColor: hexColor }}
                      />
                      <p className="text-[10px] text-gray-500 mt-1 truncate">{product.categoryName}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ナチュラルスタイル */}
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">ナチュラルスタイル</h4>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  木目・温かみ
                </span>
              </div>
              <div className="flex gap-2">
                {coordinatedSets.natural.slice(0, 4).map(product => {
                  const variant = product.variants[0];
                  const hexColor = variant ? getHexColor(variant.colorCode || variant.color) : '#CCCCCC';
                  return (
                    <button
                      key={product.id}
                      onClick={() => onSelectProduct(product)}
                      className="flex-1"
                      title={product.name}
                    >
                      <div
                        className="aspect-square rounded-lg border-2 border-gray-200 hover:border-teal-500 transition-colors"
                        style={{ backgroundColor: hexColor }}
                      />
                      <p className="text-[10px] text-gray-500 mt-1 truncate">{product.categoryName}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
