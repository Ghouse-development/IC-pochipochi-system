import React, { memo, useCallback } from 'react';
import { Ban, Check, X } from 'lucide-react';

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
    <div
      onClick={handleSelect}
      className={`bg-white border-2 rounded-2xl overflow-hidden cursor-pointer transition-all ${
        isSelected
          ? 'border-4 border-blue-500 shadow-xl shadow-blue-200 scale-[1.02]'
          : 'border-gray-200 hover:shadow-xl hover:border-blue-300 hover:scale-[1.02]'
      }`}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${categoryName}を${title}として設定`}
      aria-pressed={isSelected}
    >
      {/* 画像エリア（正方形） */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
        <div className="text-center">
          <Ban className="w-16 h-16 text-gray-400 mx-auto" />
          <span className="text-sm text-gray-500 mt-2 block">選択しない</span>
        </div>

        {/* バッジ */}
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 rounded-md text-xs font-bold shadow-md bg-gray-500 text-white">
            なし
          </span>
        </div>

        {/* 選択済みオーバーレイ */}
        {isSelected && (
          <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center">
            <button
              className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors group"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect();
              }}
            >
              <X className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
            </button>
            <div className="bg-white rounded-full p-3 shadow-xl ring-4 ring-blue-400/50">
              <Check className="w-8 h-8 text-blue-600" strokeWidth={3} />
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                選択中
              </span>
            </div>
          </div>
        )}
      </div>

      {/* 情報エリア */}
      <div className="p-4">
        <p className="text-sm text-gray-400 font-medium mb-1">{categoryName}</p>
        <h3 className="font-bold text-base text-gray-700 line-clamp-2 min-h-[2.5rem] mb-2 leading-snug">
          {title}
        </h3>

        {description && (
          <p className="text-xs text-gray-500 mb-2 line-clamp-2">
            {description}
          </p>
        )}

        {/* 価格 */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-2xl font-black text-emerald-600">
            標準
          </span>
        </div>
      </div>
    </div>
  );
};

export const NotNeededCard = memo(NotNeededCardComponent);
