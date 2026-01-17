/**
 * レコメンドパネル
 * - 床を選んだら巾木・窓台をオススメ
 * - カラーコーディネート提案
 * - 関連商品の表示
 */
import React, { useMemo } from 'react';
import { Sparkles, Palette, ArrowRight, Check } from 'lucide-react';
import { recommendationEngine } from '../../services/recommendationEngine';
import type { Product, ProductVariant } from '../../types/product';

interface RecommendationPanelProps {
  selectedProduct: Product;
  selectedVariant?: ProductVariant;
  allProducts: Product[];
  cartProductIds: Set<string>;
  onProductSelect: (product: Product, variant?: ProductVariant) => void;
}

export const RecommendationPanel: React.FC<RecommendationPanelProps> = ({
  selectedProduct,
  selectedVariant,
  allProducts,
  cartProductIds,
  onProductSelect,
}) => {
  // カラーコーディネート提案
  const colorCoordinated = useMemo(() => {
    return recommendationEngine.getColorCoordinated(selectedProduct, allProducts, 4);
  }, [selectedProduct, allProducts]);

  // 一緒に選ばれている商品
  const frequentlyBought = useMemo(() => {
    return recommendationEngine.getFrequentlyBoughtTogether(selectedProduct, allProducts, 4);
  }, [selectedProduct, allProducts]);

  // カテゴリ別のラベル
  const getCategoryLabel = (categoryName: string): string => {
    const labels: Record<string, string> = {
      '巾木': '巾木（床との境目）',
      '窓台': '窓台・窓枠',
      '建具': 'ドア・建具',
      '壁クロス': '壁紙',
      '天井クロス': '天井',
      'カーテン': 'カーテン・ブラインド',
    };
    return labels[categoryName] || categoryName;
  };

  // 色の説明
  const getColorReason = (product: Product): string | null => {
    if (!selectedVariant?.color) return null;

    const baseColor = selectedVariant.color.toLowerCase();
    const productColors = product.variants.map(v => v.color.toLowerCase()).join(' ');

    if (baseColor.includes('ホワイト') || baseColor.includes('白')) {
      if (productColors.includes('ホワイト') || productColors.includes('白')) {
        return '同じホワイト系で統一感UP';
      }
    }
    if (baseColor.includes('ナチュラル') || baseColor.includes('オーク')) {
      if (productColors.includes('ナチュラル') || productColors.includes('オーク')) {
        return '木目調で温かみのある空間に';
      }
    }
    if (baseColor.includes('ブラウン') || baseColor.includes('ウォールナット')) {
      if (productColors.includes('ブラウン') || productColors.includes('ウォールナット')) {
        return 'ダークブラウンで落ち着いた雰囲気';
      }
    }
    return '色の相性が良いオススメ';
  };

  // 価格表示
  const formatPrice = (product: Product): string => {
    const price = product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
    if (price === 0) return '標準仕様';
    return `+¥${price.toLocaleString()}`;
  };

  if (colorCoordinated.length === 0 && frequentlyBought.length === 0) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-200 overflow-hidden">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <h3 className="font-bold text-lg">
            {selectedProduct.categoryName}を選んだあなたへオススメ
          </h3>
        </div>
        <p className="text-sm opacity-90 mt-1">
          選んだ「{selectedVariant?.color || selectedProduct.name}」に合う商品
        </p>
      </div>

      {/* カラーコーディネート提案 */}
      {colorCoordinated.length > 0 && (
        <div className="p-4 border-b border-amber-200">
          <div className="flex items-center gap-2 mb-3">
            <Palette className="w-4 h-4 text-amber-600" />
            <h4 className="font-bold text-gray-800">色を合わせるならコレ！</h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {colorCoordinated.map((product) => {
              const isInCart = cartProductIds.has(product.id);
              const colorReason = getColorReason(product);
              const matchingVariant = product.variants.find(v => {
                const baseKeywords = (selectedVariant?.color || '').toLowerCase().split(/[\s・]/);
                return baseKeywords.some(k => k && v.color.toLowerCase().includes(k));
              }) || product.variants[0];

              return (
                <button
                  key={product.id}
                  onClick={() => onProductSelect(product, matchingVariant)}
                  disabled={isInCart}
                  className={`relative text-left p-3 rounded-lg border-2 transition-all ${
                    isInCart
                      ? 'bg-blue-50 border-blue-300 cursor-default'
                      : 'bg-white border-amber-200 hover:border-amber-400 hover:shadow-md'
                  }`}
                >
                  {isInCart && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="text-xs text-amber-600 font-medium mb-1">
                    {getCategoryLabel(product.categoryName)}
                  </div>
                  <div className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                    {product.name}
                  </div>
                  {matchingVariant && (
                    <div className="text-xs text-gray-600 mb-2">
                      色: {matchingVariant.color}
                    </div>
                  )}
                  {colorReason && (
                    <div className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded-full inline-block mb-2">
                      {colorReason}
                    </div>
                  )}
                  <div className={`text-sm font-bold ${
                    product.isOption ? 'text-orange-600' : 'text-blue-600'
                  }`}>
                    {formatPrice(product)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 一緒に選ばれている商品 */}
      {frequentlyBought.length > 0 && (
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <ArrowRight className="w-4 h-4 text-amber-600" />
            <h4 className="font-bold text-gray-800">一緒に選ばれています</h4>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {frequentlyBought.map((product) => {
              const isInCart = cartProductIds.has(product.id);

              return (
                <button
                  key={product.id}
                  onClick={() => onProductSelect(product)}
                  disabled={isInCart}
                  className={`flex-shrink-0 w-40 text-left p-3 rounded-lg border-2 transition-all ${
                    isInCart
                      ? 'bg-blue-50 border-blue-300'
                      : 'bg-white border-gray-200 hover:border-amber-400'
                  }`}
                >
                  {isInCart && (
                    <div className="flex items-center gap-1 text-xs text-blue-600 mb-1">
                      <Check className="w-3 h-3" />
                      選択済み
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mb-1">
                    {product.categoryName}
                  </div>
                  <div className="font-medium text-gray-900 text-sm line-clamp-2 mb-2">
                    {product.name}
                  </div>
                  <div className={`text-sm font-bold ${
                    product.isOption ? 'text-orange-600' : 'text-blue-600'
                  }`}>
                    {formatPrice(product)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * 未選択カテゴリの提案パネル
 */
interface MissingCategoriesPanelProps {
  selectedProducts: Product[];
  allProducts: Product[];
  catalogType: 'exterior' | 'interior' | 'water';
  onProductSelect: (product: Product) => void;
}

export const MissingCategoriesPanel: React.FC<MissingCategoriesPanelProps> = ({
  selectedProducts,
  allProducts,
  catalogType,
  onProductSelect,
}) => {
  const missingCategories = useMemo(() => {
    return recommendationEngine.getMissingCategories(
      selectedProducts,
      allProducts,
      catalogType,
      4
    );
  }, [selectedProducts, allProducts, catalogType]);

  if (missingCategories.length === 0) return null;

  const catalogName = {
    exterior: '外装',
    interior: '内装',
    water: '水廻り',
  }[catalogType];

  return (
    <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-bold text-blue-800">
          {catalogName}で選ばれていないカテゴリ
        </h3>
      </div>
      <p className="text-sm text-blue-700 mb-4">
        以下のカテゴリはまだ選択されていません。必要に応じてご検討ください。
      </p>
      <div className="grid grid-cols-2 gap-3">
        {missingCategories.map(({ category, topProduct }) => (
          <button
            key={category}
            onClick={() => onProductSelect(topProduct)}
            className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-colors text-left"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold text-lg">
                {category.charAt(0)}
              </span>
            </div>
            <div>
              <div className="font-bold text-gray-900">{category}</div>
              <div className="text-xs text-gray-500">
                例: {topProduct.name}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

/**
 * 予算ベースのレコメンド
 */
interface BudgetRecommendationProps {
  budget: number;
  selectedProducts: Product[];
  allProducts: Product[];
  onProductSelect: (product: Product) => void;
}

export const BudgetRecommendation: React.FC<BudgetRecommendationProps> = ({
  budget,
  selectedProducts,
  allProducts,
  onProductSelect,
}) => {
  const recommendations = useMemo(() => {
    return recommendationEngine.getBudgetBasedRecommendations(
      budget,
      selectedProducts,
      allProducts,
      4
    );
  }, [budget, selectedProducts, allProducts]);

  const currentTotal = selectedProducts.reduce((sum, p) => {
    const price = p.pricing.find(pr => pr.plan === 'LACIE' || pr.planId === 'LACIE')?.price || 0;
    return sum + price;
  }, 0);

  const remaining = budget - currentTotal;
  const percentage = Math.min((currentTotal / budget) * 100, 100);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <h3 className="font-bold text-gray-800 mb-3">予算状況</h3>

      {/* 予算バー */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">使用額</span>
          <span className="font-bold">¥{currentTotal.toLocaleString()} / ¥{budget.toLocaleString()}</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${
              percentage > 100 ? 'bg-red-500' : percentage > 80 ? 'bg-orange-500' : 'bg-blue-500'
            }`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
        <div className="text-right text-sm mt-1">
          残り: <span className={remaining >= 0 ? 'text-blue-600' : 'text-red-600'}>
            ¥{remaining.toLocaleString()}
          </span>
        </div>
      </div>

      {/* 予算内オススメ */}
      {recommendations.withinBudget.length > 0 && remaining > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            予算内で追加できる商品
          </h4>
          <div className="space-y-2">
            {recommendations.withinBudget.slice(0, 3).map((product) => {
              const price = product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
              return (
                <button
                  key={product.id}
                  onClick={() => onProductSelect(product)}
                  className="w-full flex items-center justify-between p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    <div className="text-xs text-gray-500">{product.categoryName}</div>
                  </div>
                  <span className="text-blue-600 font-bold">
                    +¥{price.toLocaleString()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
