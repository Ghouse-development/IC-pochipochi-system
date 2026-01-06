import React, { useMemo, useState } from 'react';
import { Check, ChevronRight, FileText, AlertCircle, Circle, HelpCircle, Lightbulb, X } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import type { Category } from '../../types/database';
import type { CartItem } from '../../types/product';
import { isRequiredCategory, getCategoryExplanation } from './catalogUtils';

// 用語説明ポップオーバー
const CategoryHelpPopover: React.FC<{
  categoryName: string;
  onClose: () => void;
}> = ({ categoryName, onClose }) => {
  const explanation = getCategoryExplanation(categoryName);
  if (!explanation) return null;

  return (
    <div className="absolute left-0 top-full mt-1 z-50 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-3 animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
      >
        <X className="w-3 h-3 text-gray-400" />
      </button>
      <h4 className="font-bold text-sm text-gray-800 dark:text-gray-200 mb-1.5 pr-6">
        {categoryName}とは？
      </h4>
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
        {explanation.description}
      </p>
      <div className="flex items-start gap-1.5 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-2">
        <Lightbulb className="w-3.5 h-3.5 text-yellow-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-yellow-700 dark:text-yellow-400">
          {explanation.tip}
        </p>
      </div>
    </div>
  );
};

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
  // 用語説明ポップオーバーの状態
  const [helpOpenCategoryId, setHelpOpenCategoryId] = useState<string | null>(null);

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
      <div className="p-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-sm font-bold text-gray-800 dark:text-white flex items-center justify-between">
          <span>カテゴリ</span>
          <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
            {progress.completed}/{progress.total}
          </span>
        </h2>
      </div>

      {/* カテゴリリスト */}
      <div className="flex-1 overflow-y-auto">
        {/* 必須・未選択カテゴリ */}
        {requiredUnselected.length > 0 && (
          <div className="p-3">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-red-100 dark:border-red-900">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wide">
                必須・未選択 ({requiredUnselected.length})
              </span>
            </div>
            <div className="space-y-1.5">
              {requiredUnselected.map((cat) => {
                const isSelected = selectedCategoryId === cat.id;
                const hasExplanation = getCategoryExplanation(cat.name) !== null;

                return (
                  <div key={cat.id} className="relative">
                    <button
                      onClick={() => onCategorySelect(cat.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-red-100 dark:bg-red-900/50 border-2 border-red-400 shadow-md'
                          : 'bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700 hover:shadow-sm'
                      }`}
                    >
                      {/* 必須マーク */}
                      <div className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-sm text-gray-800 dark:text-gray-200 truncate">
                            {cat.name}
                          </span>
                          {hasExplanation && (
                            <span
                              role="button"
                              tabIndex={0}
                              onClick={(e) => {
                                e.stopPropagation();
                                setHelpOpenCategoryId(helpOpenCategoryId === cat.id ? null : cat.id);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.stopPropagation();
                                  setHelpOpenCategoryId(helpOpenCategoryId === cat.id ? null : cat.id);
                                }
                              }}
                              className="p-0.5 hover:bg-red-200 dark:hover:bg-red-800 rounded-full cursor-pointer"
                              title="用語説明を見る"
                            >
                              <HelpCircle className="w-3.5 h-3.5 text-red-400" />
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-red-500 font-medium">必須 - 選択してください</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        isSelected ? 'text-red-500 translate-x-1' : 'text-red-300 dark:text-red-600'
                      }`} />
                    </button>
                    {helpOpenCategoryId === cat.id && (
                      <CategoryHelpPopover
                        categoryName={cat.name}
                        onClose={() => setHelpOpenCategoryId(null)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 任意・未選択カテゴリ */}
        {optionalUnselected.length > 0 && (
          <div className="p-3">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
              <Circle className="w-4 h-4 text-gray-400" />
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                任意・未選択 ({optionalUnselected.length})
              </span>
            </div>
            <div className="space-y-1.5">
              {optionalUnselected.map((cat) => {
                const isSelected = selectedCategoryId === cat.id;
                const hasExplanation = getCategoryExplanation(cat.name) !== null;

                return (
                  <div key={cat.id} className="relative">
                    <button
                      onClick={() => onCategorySelect(cat.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-400 shadow-md'
                          : 'bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-sm'
                      }`}
                    >
                      {/* 空のチェックマーク */}
                      <div className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <Circle className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-sm text-gray-800 dark:text-gray-200 truncate">
                            {cat.name}
                          </span>
                          {hasExplanation && (
                            <span
                              role="button"
                              tabIndex={0}
                              onClick={(e) => {
                                e.stopPropagation();
                                setHelpOpenCategoryId(helpOpenCategoryId === cat.id ? null : cat.id);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.stopPropagation();
                                  setHelpOpenCategoryId(helpOpenCategoryId === cat.id ? null : cat.id);
                                }
                              }}
                              className="p-0.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full cursor-pointer"
                              title="用語説明を見る"
                            >
                              <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">任意</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        isSelected ? 'text-blue-500 translate-x-1' : 'text-gray-300 dark:text-gray-600'
                      }`} />
                    </button>
                    {helpOpenCategoryId === cat.id && (
                      <CategoryHelpPopover
                        categoryName={cat.name}
                        onClose={() => setHelpOpenCategoryId(null)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 選択済みカテゴリ */}
        {selectedCategories.length > 0 && (
          <div className="p-3 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
              <Check className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
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
                        ? 'bg-emerald-50 dark:bg-emerald-900/30 ring-2 ring-emerald-400 shadow-md'
                        : 'bg-white dark:bg-gray-800 border border-emerald-200 dark:border-emerald-900 hover:border-emerald-300 dark:hover:border-emerald-800'
                    }`}
                  >
                    {/* カテゴリヘッダー */}
                    <div className="flex items-center gap-2 p-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-sm text-gray-800 dark:text-gray-200 block truncate">
                          {cat.name}
                        </span>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                          {items.length}件選択
                        </span>
                      </div>
                      {itemPrice > 0 && (
                        <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
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
                            className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 overflow-hidden border-2 border-white dark:border-gray-800 shadow-sm"
                            style={{ zIndex: 3 - idx }}
                          >
                            {item.product.variants?.[0]?.imageUrl ? (
                              <img
                                src={item.product.variants[0].imageUrl}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-400 dark:text-gray-500 p-0.5 text-center leading-tight">
                                {item.product.name.substring(0, 4)}
                              </div>
                            )}
                          </div>
                        ))}
                        {items.length > 3 && (
                          <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300 border-2 border-white dark:border-gray-800">
                            +{items.length - 3}
                          </div>
                        )}
                      </div>
                      {/* 商品名 */}
                      <p className="flex-1 text-[11px] text-gray-500 dark:text-gray-400 truncate">
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
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">合計コスト</span>
          <span className="text-xl font-bold text-gray-900 dark:text-white">
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
