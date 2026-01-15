import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

/**
 * カテゴリ選択カードコンポーネント
 *
 * 素材タイプ選択、外部設備カテゴリ選択など、カテゴリを選ぶ際のカードUI
 * SelectionCardと統一されたデザインを使用
 */
export interface CategorySelectionCardProps {
  id: string;
  name: string;
  emoji?: string;
  imageUrl?: string;
  badgeText?: string;
  badgeType?: 'category' | 'required' | 'optional' | 'custom';
  itemCount?: number;
  onClick: () => void;
  isSelected?: boolean;
  disabled?: boolean;
}

export const CategorySelectionCard: React.FC<CategorySelectionCardProps> = ({
  name,
  emoji = '📦',
  imageUrl,
  badgeText,
  badgeType = 'category',
  itemCount = 0,
  onClick,
  isSelected = false,
  disabled = false,
}) => {
  const [imageError, setImageError] = React.useState(false);

  // バッジの色を決定
  const getBadgeStyle = () => {
    switch (badgeType) {
      case 'required':
        return 'bg-blue-500 text-white';
      case 'optional':
        return 'bg-gray-500 text-white';
      case 'custom':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  // 表示するバッジテキスト
  const displayBadgeText = badgeText || (
    badgeType === 'required' ? '必須' :
    badgeType === 'optional' ? '任意' : 'カテゴリ'
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 text-left w-full ${
        isSelected
          ? 'border-2 border-blue-500 shadow-lg'
          : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      {/* 画像エリア（正方形） */}
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
              {emoji}
            </span>
            <div className="mt-1 flex items-center gap-1 text-gray-400">
              <ImageIcon className="w-3 h-3" />
              <span className="text-[10px]">画像準備中</span>
            </div>
          </div>
        )}

        {/* バッジ */}
        <div className="absolute top-1 left-1">
          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${getBadgeStyle()}`}>
            {displayBadgeText}
          </span>
        </div>
      </div>

      {/* 情報エリア */}
      <div className="p-2">
        <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
          {name}
        </h3>
        <span className="text-[10px] text-gray-400">
          {itemCount > 0 ? `${itemCount}種類から選択` : '準備中'}
        </span>
      </div>
    </button>
  );
};

export default CategorySelectionCard;
