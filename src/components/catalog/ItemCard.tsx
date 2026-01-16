import React, { useState } from 'react';
import { Check, Image as ImageIcon } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import type { ItemWithDetails, ItemVariant } from '../../types/database';
import type { RecommendBadgeInfo } from './catalogUtils';

// カテゴリごとのプレースホルダーアイコン・色
const CATEGORY_PLACEHOLDERS: Record<string, { emoji: string; bgColor: string }> = {
  '外壁': { emoji: '🏠', bgColor: 'from-amber-100 to-orange-100' },
  '屋根': { emoji: '🏠', bgColor: 'from-slate-200 to-gray-300' },
  '玄関ドア': { emoji: '🚪', bgColor: 'from-amber-100 to-yellow-100' },
  'サッシ': { emoji: '🪟', bgColor: 'from-sky-100 to-blue-100' },
  '床材': { emoji: '🪵', bgColor: 'from-amber-100 to-orange-100' },
  '壁クロス': { emoji: '🎨', bgColor: 'from-gray-100 to-slate-100' },
  '天井クロス': { emoji: '☁️', bgColor: 'from-white to-gray-100' },
  'キッチン': { emoji: '🍳', bgColor: 'from-red-100 to-orange-100' },
  'バス': { emoji: '🛁', bgColor: 'from-blue-100 to-cyan-100' },
  '洗面台': { emoji: '🪥', bgColor: 'from-cyan-100 to-blue-100' },
  'トイレ': { emoji: '🚽', bgColor: 'from-violet-100 to-purple-100' },
  'カーテン': { emoji: '🪟', bgColor: 'from-pink-100 to-rose-100' },
  '照明': { emoji: '💡', bgColor: 'from-yellow-100 to-amber-100' },
  'エコキュート': { emoji: '♨️', bgColor: 'from-orange-100 to-red-100' },
  '太陽光': { emoji: '☀️', bgColor: 'from-yellow-100 to-orange-100' },
  '蓄電池': { emoji: '🔋', bgColor: 'from-green-100 to-emerald-100' },
};

const getPlaceholder = (categoryName: string | undefined): { emoji: string; bgColor: string } => {
  if (!categoryName) return { emoji: '📦', bgColor: 'from-gray-100 to-gray-200' };

  for (const [key, value] of Object.entries(CATEGORY_PLACEHOLDERS)) {
    if (categoryName.includes(key) || key.includes(categoryName)) {
      return value;
    }
  }
  return { emoji: '📦', bgColor: 'from-gray-100 to-gray-200' };
};

// 検索ハイライトコンポーネント
export const HighlightText = React.memo<{ text: string; searchTerm: string }>(({ text, searchTerm }) => {
  if (!searchTerm.trim()) return <>{text}</>;

  const parts = text.split(new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={i} className="bg-yellow-200 text-gray-900 px-0.5 rounded">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
});
HighlightText.displayName = 'HighlightText';

// 商品カードコンポーネント（シンプル版）
// 表示内容: サムネイル画像、アイテム名、価格、単位、選べるアイテム数のみ
export interface ItemCardProps {
  item: ItemWithDetails;
  index: number;
  getPrice: (item: ItemWithDetails) => number;
  isStandard: (item: ItemWithDetails) => boolean;
  getImageUrl: (item: ItemWithDetails) => string | null;
  cartItemIds: Set<string>;
  addedItemId: string | null;
  hoveredItem: string | null;
  setHoveredItem: (id: string | null) => void;
  handleOpenDetail: (item: ItemWithDetails) => void;
  handleAddToCart: (item: ItemWithDetails, variant?: ItemVariant) => void;
  handleRemoveFromCart: (itemId: string) => void;
  handleToggleFavorite: (itemId: string) => void;
  isFavorite: (itemId: string) => boolean;
  searchTerm: string;
  showManufacturer?: boolean;
  planName?: string;
  recommendBadge?: RecommendBadgeInfo | null;
}

const ItemCardComponent: React.FC<ItemCardProps> = ({
  item,
  index,
  getPrice,
  isStandard: _isStandard,
  cartItemIds,
  addedItemId,
  hoveredItem,
  setHoveredItem,
  handleOpenDetail,
  searchTerm,
}) => {
  // isStandard is received but not used in simplified UI (badge removed)
  void _isStandard;
  const [imageError, setImageError] = useState(false);

  const price = getPrice(item);
  const variants = item.variants || [];
  const selectedVariant = variants[0];
  const inCart = cartItemIds.has(item.id);
  const isJustAdded = addedItemId === item.id;
  const isHovered = hoveredItem === item.id;

  // 選択中のバリアントの画像を取得
  const getVariantImageUrl = (variant: ItemVariant | undefined): string | null => {
    if (!variant) return null;
    const primaryImage = variant.images?.find(img => img.is_primary);
    return primaryImage?.image_url || variant.images?.[0]?.image_url || null;
  };

  const currentImageUrl = getVariantImageUrl(selectedVariant);

  return (
    <article
      className={`group bg-white rounded-2xl overflow-hidden transition-all duration-200 cursor-pointer ${
        inCart
          ? 'border-4 border-blue-500 shadow-xl shadow-blue-200 scale-[1.02]'
          : 'border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl hover:scale-[1.02]'
      } ${isJustAdded ? 'animate-pochipochi' : ''}`}
      style={{ animationDelay: `${index * 30}ms` }}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      onClick={() => handleOpenDetail(item)}
      tabIndex={0}
      aria-label={`${item.name}${inCart ? ' - 選択済み' : ''}`}
    >
      {/* 画像エリア（正方形） */}
      <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {currentImageUrl && !imageError ? (
          <img
            src={currentImageUrl}
            alt={item.name}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
            onError={() => setImageError(true)}
          />
        ) : (
          (() => {
            const placeholder = getPlaceholder(item.category?.name);
            return (
              <div className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${placeholder.bgColor}`}>
                <span className={`text-2xl transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`}>
                  {placeholder.emoji}
                </span>
                <div className="mt-1 flex items-center gap-1 text-gray-400">
                  <ImageIcon className="w-3 h-3" />
                  <span className="text-[10px]">画像準備中</span>
                </div>
              </div>
            );
          })()
        )}

        {/* 選択済みマーク */}
        {inCart && (
          <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
            <Check className="w-3 h-3 text-white" strokeWidth={3} />
          </div>
        )}
      </div>

      {/* 情報エリア */}
      <div className="p-3">
        {/* メーカー名 */}
        {item.manufacturer && (
          <p className="text-xs text-gray-500 mb-0.5 truncate">{item.manufacturer}</p>
        )}
        {/* アイテム名 */}
        <h3 className="font-bold text-sm text-gray-800 line-clamp-2 mb-1">
          <HighlightText text={item.name} searchTerm={searchTerm} />
        </h3>

        {/* 価格・単位 */}
        <div className="flex items-baseline gap-1">
          <span className={`text-lg font-black ${price === 0 ? 'text-blue-600' : 'text-gray-900'}`}>
            {price === 0 ? '標準' : formatPrice(price)}
          </span>
          {item.unit && price > 0 && (
            <span className="text-sm text-gray-500">/{item.unit.symbol}</span>
          )}
        </div>
        {variants.length > 1 && (
          <span className="text-xs text-gray-400">{variants.length}色から選択</span>
        )}
      </div>
    </article>
  );
};

// React.memoでItemCardをメモ化
export const ItemCard = React.memo(ItemCardComponent, (prevProps, nextProps) => {
  return (
    prevProps.item.id === nextProps.item.id &&
    prevProps.cartItemIds === nextProps.cartItemIds &&
    prevProps.addedItemId === nextProps.addedItemId &&
    prevProps.hoveredItem === nextProps.hoveredItem &&
    prevProps.searchTerm === nextProps.searchTerm
  );
});
