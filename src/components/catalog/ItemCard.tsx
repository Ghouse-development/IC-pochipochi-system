import React, { useState } from 'react';
import { ShoppingCart, Check, Sparkles, X, Heart, ThumbsUp, Star, Image as ImageIcon } from 'lucide-react';
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

// 商品カードコンポーネント
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
  isStandard,
  getImageUrl: _getImageUrl,
  cartItemIds,
  addedItemId,
  hoveredItem,
  setHoveredItem,
  handleOpenDetail,
  handleAddToCart,
  handleRemoveFromCart,
  handleToggleFavorite,
  isFavorite,
  searchTerm,
  showManufacturer = true,
  planName: _planName,
  recommendBadge,
}) => {
  const [imageError, setImageError] = useState(false);
  const [selectedVariantIndex, _setSelectedVariantIndex] = useState(0);
  

  const price = getPrice(item);
  const standard = isStandard(item);
  const variants = item.variants || [];
  const selectedVariant = variants[selectedVariantIndex] || variants[0];
  const inCart = cartItemIds.has(item.id);
  const isJustAdded = addedItemId === item.id;
  const isHovered = hoveredItem === item.id;
  const inFavorite = isFavorite(item.id);
  

  // 選択中のバリアントの画像を取得
  const getVariantImageUrl = (variant: ItemVariant | undefined): string | null => {
    if (!variant) return null;
    const primaryImage = variant.images?.find(img => img.is_primary);
    return primaryImage?.image_url || variant.images?.[0]?.image_url || null;
  };

  const currentImageUrl = getVariantImageUrl(selectedVariant);

  const handleSelectAndAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleAddToCart(item, selectedVariant);
  };

  return (
    <article
      className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
        inCart
          ? 'border-2 border-blue-500 shadow-xl shadow-blue-200 ring-2 ring-blue-100 scale-[1.02]'
          : 'border-2 border-gray-200 shadow-md hover:shadow-xl hover:border-blue-300'
      } ${isJustAdded ? 'animate-pochipochi' : ''}`}
      style={{ animationDelay: `${index * 30}ms` }}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      tabIndex={0}
      aria-label={`${item.name}${inCart ? ' - 選択済み' : ''}`}
    >
      {/* 画像エリア（正方形） - クリックで詳細 */}
      <div
        className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden cursor-pointer"
        onClick={() => handleOpenDetail(item)}
      >
        {currentImageUrl && !imageError ? (
          <img
            src={currentImageUrl}
            alt={`${item.name} - ${selectedVariant?.color_name || ''}`}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
            onError={() => setImageError(true)}
          />
        ) : (
          (() => {
            const placeholder = getPlaceholder(item.category?.name);
            return (
              <div className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br ${placeholder.bgColor}`}>
                <span className={`text-2xl mb-2 transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`}>
                  {placeholder.emoji}
                </span>
                {selectedVariant?.color_name && (
                  <div className="flex items-center gap-2 mt-1">
                    {selectedVariant.color_code && (
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: selectedVariant.color_code }}
                      />
                    )}
                    <span className="text-xs text-gray-600 font-medium">{selectedVariant.color_name}</span>
                  </div>
                )}
                <div className="mt-2 flex items-center gap-1 text-gray-400">
                  <ImageIcon className="w-3 h-3" />
                  <span className="text-[10px]">画像準備中</span>
                </div>
              </div>
            );
          })()
        )}

        {/* バッジ */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {recommendBadge && (
            <span className={`px-2.5 py-1.5 rounded-lg text-xs font-bold shadow-lg border flex items-center gap-1 ${recommendBadge.bgColor} ${recommendBadge.color}`}>
              {recommendBadge.type === 'popular' && <Star className="w-3.5 h-3.5 fill-current" />}
              {recommendBadge.type === 'recommended' && <ThumbsUp className="w-3.5 h-3.5" />}
              {recommendBadge.label}
            </span>
          )}
          <span className={`px-2 py-1 rounded-md text-xs font-bold shadow-md ${
            standard ? 'bg-emerald-500 text-white' : 'bg-orange-500 text-white'
          }`}>
            {standard ? '標準' : 'オプション'}
          </span>
        </div>

        {/* お気に入り */}
        <div className="absolute top-1.5 right-1.5 flex flex-col gap-1">
          {/* HIT表示：アイテムまたは選択中のバリアントがHITの場合 */}
          {(item.is_hit || selectedVariant?.is_hit) && (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500 text-white shadow-sm flex items-center gap-0.5">
              <Sparkles className="w-2.5 h-2.5" />
            </span>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleFavorite(item.id);
            }}
            className={`p-1.5 rounded-full shadow-sm transition-all ${
              inFavorite ? 'bg-pink-500 text-white' : 'bg-white/90 text-gray-400 hover:text-pink-500'
            }`}
            aria-label={inFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
          >
            <Heart className={`w-3.5 h-3.5 ${inFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* 選択済みオーバーレイ */}
        {inCart && (
          <div
            className="absolute inset-0 bg-blue-500/30 flex items-center justify-center cursor-pointer hover:bg-blue-500/40 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFromCart(item.id);
            }}
          >
            <button
              className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors group"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFromCart(item.id);
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
      <div className="p-2">
        {showManufacturer && (
          <p className="text-sm text-gray-500 font-medium mb-1 truncate">{item.manufacturer}</p>
        )}
        <h3 className="font-bold text-base text-gray-800 line-clamp-2 min-h-[2.5rem] mb-2 leading-snug">
          <HighlightText text={item.name} searchTerm={searchTerm} />
        </h3>

        {/* 価格 */}
        <div className="flex items-baseline gap-1.5 mb-3">
          <span className={`text-sm font-black ${price === 0 ? 'text-emerald-600' : 'text-gray-900'}`}>
            {price === 0 ? '標準' : formatPrice(price)}
          </span>
          {item.unit && (
            <span className="text-sm text-gray-500">/{item.unit.symbol}</span>
          )}
          {variants.length > 1 && (
            <span className="text-xs text-gray-400">({variants.length}色)</span>
          )}
        </div>


        {/* アクションボタン */}
        {inCart ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFromCart(item.id);
            }}
            className="w-full py-1.5 rounded-lg text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <X className="w-4 h-4" />
            選択解除
          </button>
        ) : (
          <button
            onClick={handleSelectAndAdd}
            className="w-full py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-blue-600 to-blue-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
            選択する
          </button>
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
    prevProps.isFavorite(prevProps.item.id) === nextProps.isFavorite(nextProps.item.id) &&
    prevProps.searchTerm === nextProps.searchTerm
  );
});
