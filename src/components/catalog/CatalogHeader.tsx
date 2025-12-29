/**
 * カタログヘッダーコンポーネント
 * - ステップナビゲーション
 * - カート合計表示
 * - プログレスバー
 */
import React from 'react';
import { ClipboardCheck, ChevronRight } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { STEPS } from './catalogUtils';
import type { Category } from '../../types/database';
import type { CartItem } from '../../types/product';

interface CatalogHeaderProps {
  activeTab: 'design' | 'exterior' | 'interior' | 'equipment' | 'furniture';
  setActiveTab: (tab: 'design' | 'exterior' | 'interior' | 'equipment' | 'furniture') => void;
  isCustomerMode: boolean;
  totalPrice: number;
  cartItems: CartItem[];
  categories: Category[];
  getStepCount: (stepId: string) => number;
}

export const CatalogHeader: React.FC<CatalogHeaderProps> = ({
  activeTab,
  setActiveTab,
  isCustomerMode,
  totalPrice,
  cartItems,
  categories,
  getStepCount,
}) => {
  // プログレス計算
  const decidedCount = categories.filter(cat =>
    cartItems.some(item => item.product.categoryName === cat.name)
  ).length;
  const totalCount = categories.length;
  const catProgressPercent = totalCount > 0 ? (decidedCount / totalCount) * 100 : 0;
  const isComplete = decidedCount === totalCount && totalCount > 0;

  return (
    <div className="bg-teal-600 text-white shadow-lg">
      {/* ステップナビゲーション */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4" data-tutorial="main-tabs">
            {/* お客様モードでは設計タブを非表示 */}
            {STEPS.filter(step => !isCustomerMode || step.id !== 'design').map((step, index, filteredSteps) => {
              const isActive = step.id === activeTab;
              const stepCount = getStepCount(step.id);
              const Icon = step.icon;

              return (
                <React.Fragment key={step.id}>
                  <button
                    onClick={() => setActiveTab(step.id)}
                    title={step.description}
                    className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-teal-600 shadow-md'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-teal-500' : ''}`} />
                    <span className="hidden sm:inline text-sm font-medium">{step.label}</span>
                    <span className="sm:hidden text-sm">{step.emoji}</span>
                    {stepCount > 0 && (
                      <span className={`absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full text-[10px] font-bold ${
                        isActive ? 'bg-teal-500 text-white' : 'bg-white text-teal-600'
                      }`}>
                        {stepCount}
                      </span>
                    )}
                  </button>
                  {index < filteredSteps.length - 1 && (
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* 合計表示 - コンパクト */}
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] text-white/70">合計</p>
              <p className="text-sm font-bold">{formatPrice(totalPrice)}</p>
            </div>
            <div className="bg-white/20 rounded-lg px-2 py-1 flex items-center gap-1" data-tutorial="cart-button">
              <ClipboardCheck className="w-4 h-4" />
              <span className="font-bold text-sm">{cartItems.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* プログレスバー - コンパクト */}
      <div className="px-4 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-white/80">{decidedCount}/{totalCount}</span>
          <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${isComplete ? 'bg-emerald-400' : 'bg-white'}`}
              style={{ width: `${catProgressPercent}%` }}
            />
          </div>
          {isComplete ? (
            <span className="text-xs font-bold text-emerald-300">完了</span>
          ) : (
            <span className="text-xs text-white/80">残{totalCount - decidedCount}</span>
          )}
        </div>
      </div>
    </div>
  );
};
