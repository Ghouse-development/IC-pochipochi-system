/**
 * 商品グリッドコンポーネント（将来のリファクタリング用）
 *
 * このコンポーネントはCatalogWithTabsの分割リファクタリング用に
 * 準備されたものです。現在は使用されていません。
 *
 * - 商品カードの表示
 * - ページネーション
 * - ローディング・空状態の表示
 */
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SkeletonCard, EmptyState } from './CatalogUIComponents';
import type { ItemWithDetails } from '../../types/database';

interface ProductGridProps {
  items: ItemWithDetails[];
  isLoading: boolean;
  searchTerm?: string;
  onClearSearch?: () => void;
  // ページネーション
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  // カードレンダリング関数（親から渡す）
  renderCard: (item: ItemWithDetails, index: number) => React.ReactNode;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  items,
  isLoading,
  searchTerm,
  onClearSearch,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  renderCard,
}) => {
  // ページネーション計算
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);

  // ページ変更時にスクロールトップ
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ローディング中
  if (isLoading) {
    return (
      <div className="p-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  // 空状態
  if (items.length === 0) {
    return (
      <EmptyState
        searchTerm={searchTerm || ''}
        onClear={onClearSearch || (() => {})}
      />
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* 商品グリッド */}
      <div className="flex-1 p-4 overflow-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
          {paginatedItems.map((item, index) => renderCard(item, startIndex + index))}
        </div>
      </div>

      {/* ページネーション */}
      {totalPages > 1 && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {startIndex + 1} - {Math.min(endIndex, items.length)} / {items.length} 件
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* ページ番号 */}
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum: number;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                      currentPage === pageNum
                        ? 'bg-teal-500 text-white'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
