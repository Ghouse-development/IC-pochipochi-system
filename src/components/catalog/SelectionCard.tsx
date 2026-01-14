import React from 'react';
import { Check, Image as ImageIcon } from 'lucide-react';
import { formatPrice } from '../../lib/utils';

/**
 * 選択カードコンポーネント（シンプル版）
 *
 * 表示内容: サムネイル画像、バッジ、アイテム名、価格、単位、選べるアイテム数のみ
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
  variantCount?: number;
  unit?: string;
}

export const SelectionCard: React.FC<SelectionCardProps> = ({
  name,
  imageUrl,
  placeholderEmoji = '📦',
  placeholderBgColor = 'from-gray-100 to-gray-200',
  isStandard,
  price,
  isSelected,
  onClick,
  colorCode,
  variantCount,
  unit,
}) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <article
      className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 cursor-pointer ${
        isSelected
          ? 'border-2 border-blue-500 shadow-lg'
          : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
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
          <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${placeholderBgColor}`}>
            {colorCode ? (
              <div
                className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: colorCode }}
              />
            ) : (
              <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                {placeholderEmoji}
              </span>
            )}
            <div className="mt-1 flex items-center gap-1 text-gray-400">
              <ImageIcon className="w-3 h-3" />
              <span className="text-[10px]">画像準備中</span>
            </div>
          </div>
        )}

        {/* バッジ（標準のみ表示） */}
        {isStandard && (
          <div className="absolute top-1 left-1">
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-white">
              標準
            </span>
          </div>
        )}

        {/* 選択済みマーク */}
        {isSelected && (
          <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
        )}
      </div>

      {/* 情報エリア - シンプル化 */}
      <div className="p-2">
        {/* アイテム名 */}
        <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
          {name}
        </h3>

        {/* 価格・単位 */}
        <div className="flex items-baseline gap-1 mt-1">
          <span className={`text-sm font-bold ${price === 0 || price === undefined ? 'text-emerald-600' : 'text-gray-900'}`}>
            {price === 0 || price === undefined ? '標準' : formatPrice(price)}
          </span>
          {unit && price !== 0 && price !== undefined && (
            <span className="text-xs text-gray-500">/{unit}</span>
          )}
        </div>

        {/* 選べるアイテム数 */}
        {variantCount && variantCount > 1 && (
          <span className="text-[10px] text-gray-400">{variantCount}色から選択</span>
        )}
      </div>
    </article>
  );
};

export default SelectionCard;
