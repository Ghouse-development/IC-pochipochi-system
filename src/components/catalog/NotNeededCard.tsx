import React, { memo, useCallback } from 'react';
import { X, Ban, Info } from 'lucide-react';
import { Card } from '../common/Card';

interface NotNeededCardProps {
  categoryName: string;
  title: string;
  description?: string;
  isSelected: boolean;
  onSelect: () => void;
}

const NotNeededCardComponent: React.FC<NotNeededCardProps> = ({
  categoryName,
  title,
  description,
  isSelected,
  onSelect,
}) => {
  const handleSelect = useCallback(() => {
    onSelect();
  }, [onSelect]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelect();
    }
  }, [handleSelect]);

  return (
    <Card
      hoverable
      onClick={handleSelect}
      className={`overflow-hidden transition-all duration-200 ${
        isSelected
          ? 'ring-2 ring-gray-500 bg-gray-50'
          : 'hover:ring-2 hover:ring-gray-300'
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${categoryName}を${title}として設定`}
      aria-pressed={isSelected}
    >
      {/* アイコンエリア */}
      <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center h-32 sm:h-48">
        <div className="text-center">
          <Ban className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-2" />
          {isSelected && (
            <div className="absolute top-2 right-2 bg-gray-600 text-white rounded-full p-1">
              <X className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>

      <div className="p-2 sm:p-4">
        <div className="flex items-start justify-between mb-1 sm:mb-2">
          <h3 className="text-xs sm:text-sm font-semibold text-gray-700 line-clamp-2 flex-1">
            {title}
          </h3>
          <span className="ml-1 sm:ml-2 flex-shrink-0 text-xs px-2 py-0.5 bg-gray-200 text-gray-600 rounded-full">
            選択可
          </span>
        </div>

        {description && (
          <div className="flex items-start gap-1 mt-2">
            <Info className="w-3 h-3 text-gray-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-500 line-clamp-2">
              {description}
            </p>
          </div>
        )}

        <div className="flex items-baseline justify-between mt-2 sm:mt-3">
          <span className="text-sm sm:text-lg font-bold text-gray-500">
            ¥0
          </span>
          <span className="text-xs text-gray-400">
            追加費用なし
          </span>
        </div>
      </div>
    </Card>
  );
};

export const NotNeededCard = memo(NotNeededCardComponent);
