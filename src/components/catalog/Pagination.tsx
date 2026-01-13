import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ページネーションコンポーネント
 * 12アイテム/ページ（PC: 6列×2行）
 */
interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage?: number;
  onPageChange: (page: number) => void;
}

export const ITEMS_PER_PAGE = 12;

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage = ITEMS_PER_PAGE,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-4 pb-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="前のページ"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          // Show first, last, current, and adjacent pages
          const showPage = page === 1 ||
                          page === totalPages ||
                          Math.abs(page - currentPage) <= 1;
          const showEllipsis = !showPage &&
                              (page === 2 || page === totalPages - 1);

          if (showEllipsis) {
            return <span key={page} className="px-1 text-gray-400">...</span>;
          }

          if (!showPage) return null;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                page === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="次のページ"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <span className="text-xs text-gray-500 ml-2">
        {totalItems}件中 {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalItems)}件
      </span>
    </div>
  );
};

/**
 * ページネーション用のアイテムスライスを取得
 */
export const getPageItems = <T,>(items: T[], currentPage: number, itemsPerPage = ITEMS_PER_PAGE): T[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return items.slice(startIndex, startIndex + itemsPerPage);
};

export default Pagination;
