import React from 'react';
import { Check, Image as ImageIcon, X } from 'lucide-react';
import { formatPrice } from '../../lib/utils';

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
  onDeselect?: () => void;
  manufacturer?: string;
  colorCode?: string;
}

export const SelectionCard: React.FC<SelectionCardProps> = ({
  name,
  imageUrl,
  placeholderEmoji = '📦',
  placeholderBgColor = 'from-gray-100 to-gray-200',
  isStandard,
  isOption,
  price,
  priceRange,
  isSelected,
  onClick,
  onDeselect,
  manufacturer,
  colorCode,
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <article
      className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
        isSelected
          ? 'border-2 border-blue-500 shadow-xl shadow-blue-200 scale-[1.02]'
          : 'border-2 border-gray-200 hover:shadow-xl hover:border-blue-300 hover:scale-[1.02]'
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
      {/* 画像エリア（正方形） */}
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

        {/* 選択済みオーバーレイ - クリックで解除可能 */}
        {isSelected && (
          <div
            className="absolute inset-0 bg-blue-500/30 flex items-center justify-center cursor-pointer hover:bg-blue-500/40 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              if (onDeselect) onDeselect();
              else onClick();
            }}
            title="クリックで選択解除"
          >
            {/* 解除ボタン（右上） */}
            <button
              className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors group"
              onClick={(e) => {
                e.stopPropagation();
                if (onDeselect) onDeselect();
                else onClick();
              }}
              aria-label="選択解除"
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
      <div className="p-2">
        {manufacturer && (
          <p className="text-[10px] text-gray-500 truncate">{manufacturer}</p>
        )}
        <h3 className="font-bold text-xs text-gray-800 line-clamp-2 mb-0.5 min-h-[1.5rem]">
          {name}
        </h3>
        {priceRange && (
          <p className="text-sm font-black text-gray-900">
            {priceRange}
          </p>
        )}
        {price !== undefined && (
          <p className={`text-sm font-black ${price === 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
            {price === 0 ? '標準' : formatPrice(price)}
          </p>
        )}
      </div>
    </article>
  );
};

export default SelectionCard;
