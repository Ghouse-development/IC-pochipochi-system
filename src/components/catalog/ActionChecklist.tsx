import React, { useMemo } from 'react';
import { Check, ChevronRight, FileText, AlertCircle, Circle } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import type { Category } from '../../types/database';
import type { CartItem } from '../../types/product';
import { isRequiredCategory } from './catalogUtils';

interface ActionChecklistProps {
  categories: Category[];
  cartItems: CartItem[];
  totalPrice: number;
  selectedCategoryId: string | null;
  onCategorySelect: (categoryId: string) => void;
  onReportClick?: () => void;
}

export const ActionChecklist: React.FC<ActionChecklistProps> = ({
  categories,
  cartItems,
  totalPrice,
  selectedCategoryId,
  onCategorySelect,
  onReportClick,
}) => {
  // カテゴリごとの選択済み商品を集計
  const categorySelections = useMemo(() => {
    const selections = new Map<string, CartItem[]>();
    categories.forEach(cat => {
      const items = cartItems.filter(item => item.product.categoryName === cat.name);
      selections.set(cat.id, items);
    });
    return selections;
  }, [categories, cartItems]);

  // 進捗計算
  const progress = useMemo(() => {
    const total = categories.length;
    const completed = categories.filter(cat => {
      const items = categorySelections.get(cat.id);
      return items && items.length > 0;
    }).length;

    // 必須カテゴリの進捗を計算
    const requiredCats = categories.filter(cat => isRequiredCategory(cat.name));
    const requiredTotal = requiredCats.length;
    const requiredCompleted = requiredCats.filter(cat => {
      const items = categorySelections.get(cat.id);
      return items && items.length > 0;
    }).length;

    return {
      total,
      completed,
      requiredTotal,
      requiredCompleted,
      percent: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [categories, categorySelections]);

  // カテゴリを分類: 必須未選択 / 任意未選択 / 選択済み
  const { requiredUnselected, optionalUnselected, selectedCategories } = useMemo(() => {
    const reqUnsel: Category[] = [];
    const optUnsel: Category[] = [];
    const selected: Category[] = [];

    categories.forEach(cat => {
      const items = categorySelections.get(cat.id);
      const hasSelection = items && items.length > 0;
      const isRequired = isRequiredCategory(cat.name);

      if (hasSelection) {
        selected.push(cat);
      } else if (isRequired) {
        reqUnsel.push(cat);
      } else {
        optUnsel.push(cat);
      }
    });

    return {
      requiredUnselected: reqUnsel,
      optionalUnselected: optUnsel,
      selectedCategories: selected,
    };
  }, [categories, categorySelections]);

  return (
    <div className="flex flex-col h-full">
      {/* ヘッダー - シンプルモダン */}
      <div className="p-3 bg-white border-b border-gray-200">
        <h2 className="text-sm font-bold text-gray-800 flex items-center justify-between">
          <span>カテゴリ</span>
          <span className="text-xs font-normal text-gray-500">
            {progress.completed}/{progress.total}
          </span>
        </h2>
      </div>

      {/* カテゴリリスト */}
      <div className="flex-1 overflow-y-auto">
        {/* 必須・未選択カテゴリ */}
        {requiredUnselected.length > 0 && (
          <div className="p-3">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-red-100">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                必須・未選択 ({requiredUnselected.length})
              </span>
            </div>
            <div className="space-y-1.5">
              {requiredUnselected.map((cat) => {
                const isSelected = selectedCategoryId === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => onCategorySelect(cat.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-red-100 border-2 border-red-400 shadow-md'
                        : 'bg-red-50 border-2 border-red-200 hover:border-red-300 hover:shadow-sm'
                    }`}
                  >
                    {/* 必須マーク */}
                    <div className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-sm text-gray-800 truncate block">
                        {cat.name}
                      </span>
                      <span className="text-[10px] text-red-500 font-medium">必須 - 選択してください</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected ? 'text-red-500 translate-x-1' : 'text-red-300'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 任意・未選択カテゴリ */}
        {optionalUnselected.length > 0 && (
          <div className="p-3">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
              <Circle className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                任意・未選択 ({optionalUnselected.length})
              </span>
            </div>
            <div className="space-y-1.5">
              {optionalUnselected.map((cat) => {
                const isSelected = selectedCategoryId === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => onCategorySelect(cat.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-blue-100 border-2 border-blue-400 shadow-md'
                        : 'bg-white border-2 border-gray-100 hover:border-blue-200 hover:shadow-sm'
                    }`}
                  >
                    {/* 空のチェックマーク */}
                    <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Circle className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-sm text-gray-800 truncate block">
                        {cat.name}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">任意</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected ? 'text-blue-500 translate-x-1' : 'text-gray-300'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 選択済みカテゴリ */}
        {selectedCategories.length > 0 && (
          <div className="p-3 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
              <Check className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                選択済み ({selectedCategories.length})
              </span>
            </div>
            <div className="space-y-2">
              {selectedCategories.map(cat => {
                const items = categorySelections.get(cat.id) || [];
                const isSelected = selectedCategoryId === cat.id;
                const firstItem = items[0];
                const itemPrice = items.reduce((sum, item) => {
                  const price = item.product.pricing?.find((p: { price: number }) => p.price)?.price || 0;
                  return sum + price * item.quantity;
                }, 0);

                return (
                  <button
                    key={cat.id}
                    onClick={() => onCategorySelect(cat.id)}
                    className={`w-full rounded-xl text-left transition-all overflow-hidden ${
                      isSelected
                        ? 'bg-blue-50 ring-2 ring-blue-400 shadow-md'
                        : 'bg-white border border-blue-200 hover:border-blue-300:border-blue-800'
                    }`}
                  >
                    {/* カテゴリヘッダー */}
                    <div className="flex items-center gap-2 p-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-sm text-gray-800 block truncate">
                          {cat.name}
                        </span>
                        <span className="text-[10px] text-blue-600 font-medium">
                          {items.length}件選択
                        </span>
                      </div>
                      {itemPrice > 0 && (
                        <span className="text-xs font-bold text-gray-600">
                          {formatPrice(itemPrice)}
                        </span>
                      )}
                    </div>

                    {/* 選択商品プレビュー */}
                    <div className="px-3 pb-3 flex items-center gap-2">
                      {/* サムネイル */}
                      <div className="flex -space-x-2">
                        {items.slice(0, 3).map((item, idx) => (
                          <div
                            key={item.product.id}
                            className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden border-2 border-white shadow-sm"
                            style={{ zIndex: 3 - idx }}
                          >
                            {item.product.variants?.[0]?.imageUrl ? (
                              <img
                                src={item.product.variants[0].imageUrl}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-400 p-0.5 text-center leading-tight">
                                {item.product.name.substring(0, 4)}
                              </div>
                            )}
                          </div>
                        ))}
                        {items.length > 3 && (
                          <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 border-2 border-white">
                            +{items.length - 3}
                          </div>
                        )}
                      </div>
                      {/* 商品名 */}
                      <p className="flex-1 text-[11px] text-gray-500 truncate">
                        {firstItem?.product.name}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* フッター - 合計コスト */}
      <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600 font-medium">合計コスト</span>
          <span className="text-xl font-bold text-gray-900">
            {formatPrice(totalPrice)}
          </span>
        </div>
        {onReportClick && (
          <button
            onClick={onReportClick}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium text-sm transition-all shadow-lg shadow-blue-500/25"
          >
            <FileText className="w-4 h-4" />
            レポートを見る
          </button>
        )}
      </div>
    </div>
  );
};
