/**
 * カテゴリサイドバーコンポーネント
 * - カテゴリリスト
 * - 選択状態の表示
 * - 未決定カテゴリのハイライト
 */
import React from 'react';
import { Check, AlertCircle, ChevronRight } from 'lucide-react';
import type { Category } from '../../types/database';
import type { CartItem } from '../../types/product';

interface CategorySidebarProps {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
  cartItems: CartItem[];
  activeTab?: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  cartItems,
  activeTab: _activeTab,
  isCollapsed = false,
  onToggleCollapse,
}) => {
  // カテゴリが決定済みかどうかを判定
  const isCategoryDecided = (categoryName: string) => {
    return cartItems.some(item => item.product.categoryName === categoryName);
  };

  // カテゴリごとの選択数を取得
  const getCategorySelectionCount = (categoryName: string) => {
    return cartItems.filter(item => item.product.categoryName === categoryName).length;
  };

  if (isCollapsed) {
    return (
      <div className="w-12 bg-white border-r border-gray-200 flex flex-col items-center py-2">
        <button
          onClick={onToggleCollapse}
          className="p-2 hover:bg-gray-100 rounded-lg"
          title="カテゴリを展開"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
        <div className="mt-4 space-y-2">
          {categories.map(category => {
            const isDecided = isCategoryDecided(category.name);
            const isSelected = category.id === selectedCategoryId;
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-teal-500 text-white'
                    : isDecided
                      ? 'bg-green-100 text-green-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title={category.name}
              >
                {isDecided ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-xs font-bold">
                    {category.name.charAt(0)}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="w-56 bg-white border-r border-gray-200 overflow-y-auto flex-shrink-0">
      <div className="p-3 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-bold text-gray-800 text-sm">カテゴリ</h3>
        {onToggleCollapse && (
          <button
            onClick={onToggleCollapse}
            className="p-1 hover:bg-gray-100 rounded"
            title="カテゴリを折りたたむ"
          >
            <ChevronRight className="w-4 h-4 text-gray-400 rotate-180" />
          </button>
        )}
      </div>

      <div className="p-2 space-y-1">
        {categories.map(category => {
          const isDecided = isCategoryDecided(category.name);
          const isSelected = category.id === selectedCategoryId;
          const selectionCount = getCategorySelectionCount(category.name);

          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center gap-2 group ${
                isSelected
                  ? 'bg-teal-50 text-teal-700 border border-teal-200'
                  : isDecided
                    ? 'bg-green-50 text-green-700 hover:bg-green-100'
                    : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {/* 状態アイコン */}
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                isDecided
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-200 text-gray-400 group-hover:bg-gray-300'
              }`}>
                {isDecided ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <span className="text-[10px] font-bold">?</span>
                )}
              </div>

              {/* カテゴリ名 */}
              <span className="text-sm font-medium flex-1 truncate">
                {category.name}
              </span>

              {/* 選択数 */}
              {selectionCount > 0 && (
                <span className="text-xs bg-teal-100 text-teal-600 px-1.5 py-0.5 rounded-full">
                  {selectionCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 未決定カテゴリの警告 */}
      {categories.length > 0 && categories.some(cat => !isCategoryDecided(cat.name)) && (
        <div className="p-3 border-t border-gray-200">
          <div className="flex items-start gap-2 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>
              未決定のカテゴリがあります。<br />
              「不要」を選ぶか商品を選択してください。
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
