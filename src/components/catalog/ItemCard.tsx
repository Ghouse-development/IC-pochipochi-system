import React from 'react';
import { ShoppingCart, Check, Sparkles, X, Eye, Scale, Heart, ThumbsUp, Star, Image as ImageIcon } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import type { ItemWithDetails } from '../../types/database';
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
  '洗面台': { emoji: '🪥', bgColor: 'from-cyan-100 to-teal-100' },
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
  handleAddToCart: (item: ItemWithDetails) => void;
  handleRemoveFromCart: (itemId: string) => void;
  handleToggleCompare: (item: ItemWithDetails) => void;
  isInCompare: (itemId: string) => boolean;
  handleToggleFavorite: (itemId: string) => void;
  isFavorite: (itemId: string) => boolean;
  searchTerm: string;
  showManufacturer?: boolean;
  planName?: string; // プラン名（LIFE+, HOURS等）
  recommendBadge?: RecommendBadgeInfo | null; // おすすめバッジ
}

const ItemCardComponent: React.FC<ItemCardProps> = ({
  item,
  index,
  getPrice,
  isStandard,
  getImageUrl,
  cartItemIds,
  addedItemId,
  hoveredItem,
  setHoveredItem,
  handleOpenDetail,
  handleAddToCart,
  handleRemoveFromCart,
  handleToggleCompare,
  isInCompare,
  handleToggleFavorite,
  isFavorite,
  searchTerm,
  showManufacturer = true,
  planName: _planName,
  recommendBadge,
}) => {
  const [imageError, setImageError] = React.useState(false);
  const price = getPrice(item);
  const standard = isStandard(item);
  const imageUrl = getImageUrl(item);
  const inCart = cartItemIds.has(item.id);
  const isJustAdded = addedItemId === item.id;
  const isHovered = hoveredItem === item.id;
  const variant = item.variants?.[0];
  const inCompare = isInCompare(item.id);
  const inFavorite = isFavorite(item.id);
  const hasMultipleVariants = (item.variants?.length || 0) > 1;

  return (
    <article
      className={`group bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border-2 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
        inCart
          ? 'border-teal-400 shadow-md shadow-teal-100 dark:shadow-teal-900/30 ring-2 ring-teal-50 dark:ring-teal-900/50'
          : inCompare
          ? 'border-purple-400 shadow-md shadow-purple-100 dark:shadow-purple-900/30'
          : 'border-transparent hover:border-gray-200 dark:hover:border-gray-600 hover:shadow-lg'
      } ${isJustAdded ? 'animate-pochipochi' : ''}`}
      style={{ animationDelay: `${index * 30}ms` }}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      onClick={() => handleOpenDetail(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpenDetail(item);
        }
      }}
      tabIndex={0}
      aria-label={`${item.name}${inCart ? ' - 選択済み' : ''}${inCompare ? ' - 比較中' : ''}`}
    >
      {/* 画像エリア */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
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
              <div className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br ${placeholder.bgColor}`}>
                {/* カテゴリ絵文字 */}
                <span className={`text-5xl mb-2 transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`}>
                  {placeholder.emoji}
                </span>
                {/* 色情報（あれば） */}
                {variant?.color_name && (
                  <div className="flex items-center gap-2 mt-1">
                    {variant.color_code && (
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: variant.color_code }}
                      />
                    )}
                    <span className="text-xs text-gray-600 font-medium">{variant.color_name}</span>
                  </div>
                )}
                {/* 画像準備中の表示 */}
                <div className="mt-2 flex items-center gap-1 text-gray-400">
                  <ImageIcon className="w-3 h-3" />
                  <span className="text-[10px]">画像準備中</span>
                </div>
              </div>
            );
          })()
        )}

        {/* バッジ - おすすめ + 標準/OP */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {/* おすすめバッジ（最上部に大きく表示） */}
          {recommendBadge && (
            <span className={`px-2.5 py-1.5 rounded-lg text-xs font-bold shadow-lg border flex items-center gap-1 ${recommendBadge.bgColor} ${recommendBadge.color}`}>
              {recommendBadge.type === 'popular' && <Star className="w-3.5 h-3.5 fill-current" />}
              {recommendBadge.type === 'recommended' && <ThumbsUp className="w-3.5 h-3.5" />}
              {recommendBadge.label}
            </span>
          )}
          {/* 標準/OPタグ */}
          <div className="flex items-center gap-1">
            <span className={`px-2 py-1 rounded-md text-xs font-bold shadow-md ${
              standard
                ? 'bg-emerald-500 text-white'
                : 'bg-orange-500 text-white'
            }`}>
              {standard ? '標準' : 'オプション'}
            </span>
          </div>
        </div>

        {/* HITバッジ & お気に入り & 比較ボタン */}
        <div className="absolute top-1.5 right-1.5 flex flex-col gap-1">
          {item.is_hit && (
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
              inFavorite
                ? 'bg-pink-500 text-white'
                : 'bg-white/90 text-gray-400 hover:text-pink-500'
            }`}
            aria-label={inFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
            aria-pressed={inFavorite}
          >
            <Heart className={`w-3.5 h-3.5 ${inFavorite ? 'fill-current' : ''}`} aria-hidden="true" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleCompare(item);
            }}
            className={`p-1.5 rounded-full shadow-sm transition-all ${
              inCompare
                ? 'bg-purple-500 text-white'
                : 'bg-white/90 text-gray-400 hover:text-purple-500'
            }`}
            aria-label={inCompare ? '比較から削除' : '比較に追加'}
            aria-pressed={inCompare}
          >
            <Scale className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

        {/* 選択済みオーバーレイ - G HOUSE風の大きなチェックマーク */}
        {inCart && (
          <div className="absolute inset-0 bg-teal-500/30 flex items-center justify-center">
            <div className="bg-white rounded-full p-3 shadow-xl ring-4 ring-teal-400/50">
              <Check className="w-8 h-8 text-teal-600" strokeWidth={3} />
            </div>
            {/* 選択中ラベル */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
              <span className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded-full shadow-lg">
                選択中
              </span>
            </div>
          </div>
        )}

        {/* 比較中マーク */}
        {inCompare && !inCart && (
          <div className="absolute bottom-1.5 right-1.5">
            <div className="bg-purple-500 rounded-full p-1">
              <Scale className="w-3 h-3 text-white" />
            </div>
          </div>
        )}
      </div>

      {/* 情報エリア - G HOUSE風に大きく */}
      <div className="p-4">
        {showManufacturer && (
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1 truncate">{item.manufacturer}</p>
        )}
        <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200 line-clamp-2 min-h-[2.5rem] mb-2 leading-snug">
          <HighlightText text={item.name} searchTerm={searchTerm} />
        </h3>

        {/* 価格と単位 */}
        <div className="flex items-baseline gap-1.5 mb-3">
          <span className={`text-xl font-bold ${price === 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-gray-900 dark:text-gray-100'}`}>
            {price === 0 ? '標準' : formatPrice(price)}
          </span>
          {item.unit && (
            <span className="text-xs text-gray-400 dark:text-gray-500">/{item.unit.symbol}</span>
          )}
        </div>

        {/* アクションボタン - G HOUSE風に大きく */}
        {inCart ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFromCart(item.id);
            }}
            className="w-full py-3 rounded-xl text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 flex items-center justify-center gap-2 transition-all active:scale-95"
            aria-label={`${item.name}を選択解除`}
          >
            <X className="w-4 h-4" aria-hidden="true" />
            選択解除
          </button>
        ) : hasMultipleVariants ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenDetail(item);
            }}
            className="w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 transition-all active:scale-95"
            aria-label={`${item.name}の${item.variants?.length}色を見る`}
          >
            <Eye className="w-4 h-4" aria-hidden="true" />
            {item.variants?.length}色から選ぶ
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(item);
            }}
            className="w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-teal-500 to-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 transition-all active:scale-95"
            aria-label={`${item.name}を選択`}
          >
            <ShoppingCart className="w-4 h-4" aria-hidden="true" />
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
    prevProps.isInCompare(prevProps.item.id) === nextProps.isInCompare(nextProps.item.id) &&
    prevProps.isFavorite(prevProps.item.id) === nextProps.isFavorite(nextProps.item.id) &&
    prevProps.searchTerm === nextProps.searchTerm
  );
});
