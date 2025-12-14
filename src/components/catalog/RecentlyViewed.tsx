import React from 'react';
import { Clock, X } from 'lucide-react';
import { useRecentlyViewedStore } from '../../stores/useRecentlyViewedStore';
import { formatPrice } from '../../lib/utils';

interface RecentlyViewedProps {
  onProductClick: (productId: string) => void;
  maxItems?: number;
}

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({
  onProductClick,
  maxItems = 6,
}) => {
  const { items, removeItem, clearAll } = useRecentlyViewedStore();
  const recentItems = items.slice(0, maxItems);

  if (recentItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-gray-700">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">最近閲覧した商品</span>
          <span className="text-xs text-gray-400">({recentItems.length})</span>
        </div>
        {recentItems.length > 0 && (
          <button
            onClick={clearAll}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            クリア
          </button>
        )}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
        {recentItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-24 group relative cursor-pointer"
            onClick={() => onProductClick(item.id)}
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    No Image
                  </div>
                )}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeItem(item.id);
                }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gray-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <div className="mt-1">
              <p className="text-xs text-gray-700 truncate" title={item.name}>
                {item.name}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {item.categoryName}
              </p>
              {item.price > 0 && (
                <p className="text-xs text-teal-600 font-medium">
                  {formatPrice(item.price)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
