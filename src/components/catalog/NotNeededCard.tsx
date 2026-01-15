import React, { memo, useCallback } from 'react';
import { Ban, Check } from 'lucide-react';

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
      className={`bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 ${
        isSelected
          ? 'border-4 border-blue-500 shadow-xl shadow-blue-200 scale-[1.02]'
          : 'border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl hover:scale-[1.02]'
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
          <Ban className="w-12 h-12 text-gray-400 mx-auto" />
          <span className="text-xs text-gray-500 mt-1 block">選択しない</span>
        </div>

        {/* バッジ */}
        <div className="absolute top-1 left-1">
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-gray-500 text-white">
            なし
          </span>
        </div>

        {/* 選択済みマーク */}
        {isSelected && (
          <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
        )}
      </div>

      {/* 情報エリア */}
      <div className="p-3">
        <h3 className="font-bold text-sm text-gray-800 line-clamp-2 mb-1">
          {title}
        </h3>

        {/* 価格 */}
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-black text-emerald-600">
            標準
          </span>
        </div>
      </div>
    </div>
  );
};

export const NotNeededCard = memo(NotNeededCardComponent);
