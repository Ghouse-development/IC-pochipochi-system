import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface SelectionStatusBarProps {
  label: string;
  itemCount: number;
  onBack: () => void;
  backLabel?: string;
  variant?: 'default' | 'highlighted';
}

/**
 * 選択状態バーコンポーネント
 * カテゴリ内でサブカテゴリや素材タイプを選択した際に表示するナビゲーションバー
 */
export const SelectionStatusBar: React.FC<SelectionStatusBarProps> = ({
  label,
  itemCount,
  onBack,
  backLabel = '戻る',
  variant = 'default',
}) => {
  if (variant === 'highlighted') {
    return (
      <div className="mb-4 flex items-center justify-between bg-gray-50 p-3 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-bold text-lg">{label}</span>
          <span className="text-sm text-gray-500">{itemCount}件</span>
        </div>
        <button
          onClick={onBack}
          className="flex items-center gap-1 px-3 py-1.5 text-sm bg-white text-gray-600 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
        >
          <ChevronLeft className="w-4 h-4" />
          {backLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-gray-900 font-medium">{label}</span>
        <span className="text-sm text-gray-500">{itemCount}件</span>
      </div>
      <button
        onClick={onBack}
        className="flex items-center gap-1 px-2 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
        {backLabel}
      </button>
    </div>
  );
};

export default SelectionStatusBar;
