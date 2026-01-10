import React from 'react';
import { Check, Image as ImageIcon } from 'lucide-react';

/**
 * 選択カードコンポーネント（ItemCard風）
 *
 * 玄関ドア・エアコン・階段などのステップ選択UIで使用する共通コンポーネント
 */
export interface SelectionCardProps {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  placeholderEmoji?: string;
  placeholderBgColor?: string;
  isStandard?: boolean;
  isOption?: boolean;
  price?: number;
  priceRange?: string;
  isSelected: boolean;
  onClick: () => void;
  manufacturer?: string;
  colorCode?: string;
}

export const SelectionCard: React.FC<SelectionCardProps> = ({
  name,
  description,
  imageUrl,
  placeholderEmoji = '📦',
  placeholderBgColor = 'from-gray-100 to-gray-200',
  isStandard,
  isOption,
  price,
  priceRange,
  isSelected,
  onClick,
  manufacturer,
  colorCode,
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <article
      className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
        isSelected
          ? 'border-4 border-blue-500 shadow-xl shadow-blue-200 dark:shadow-blue-900/50 ring-4 ring-blue-100 dark:ring-blue-900/50 scale-[1.02]'
          : 'border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 hover:scale-[1.02]'
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`${name}${isSelected ? ' - 選択中' : ''}`}
      aria-pressed={isSelected}
    >
      {/* 画像エリア */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
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
          <div className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br ${placeholderBgColor}`}>
            {colorCode ? (
              <div
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg mb-2"
                style={{ backgroundColor: colorCode }}
              />
            ) : (
              <span className="text-5xl mb-2 transition-transform duration-200 group-hover:scale-110">
                {placeholderEmoji}
              </span>
            )}
            <div className="mt-2 flex items-center gap-1 text-gray-400">
              <ImageIcon className="w-3 h-3" />
              <span className="text-[10px]">画像準備中</span>
            </div>
          </div>
        )}

        {/* 標準/オプションバッジ */}
        {(isStandard || isOption) && (
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 rounded-md text-xs font-bold shadow-md ${
              isStandard
                ? 'bg-emerald-500 text-white'
                : 'bg-orange-500 text-white'
            }`}>
              {isStandard ? '標準' : 'オプション'}
            </span>
          </div>
        )}

        {/* メーカーバッジ */}
        {manufacturer && (
          <div className="absolute top-2 right-2">
            <span className="px-2 py-1 rounded-md text-xs font-medium bg-white/90 text-gray-700 shadow-md">
              {manufacturer}
            </span>
          </div>
        )}

        {/* 選択済みオーバーレイ */}
        {isSelected && (
          <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center">
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
        <h3 className="font-bold text-base text-gray-800 line-clamp-2 mb-1 leading-snug">
          {name}
        </h3>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mb-2">
            {description}
          </p>
        )}
        {priceRange && (
          <p className="text-2xl font-black text-gray-900 dark:text-gray-100">
            {priceRange}
          </p>
        )}
        {price !== undefined && (
          <p className={`text-2xl font-black ${price === 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-gray-100'}`}>
            {price === 0 ? '差額なし' : `+${price.toLocaleString()}円`}
          </p>
        )}
      </div>
    </article>
  );
};

export default SelectionCard;
