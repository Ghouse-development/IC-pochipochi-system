import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, ShoppingCart, Check, Sparkles, Star, ChevronRight, X, Package, Home, Sofa, Wrench, Eye, Scale, Zap, Heart, Clock } from 'lucide-react';
import { useToast } from '../common/Toast';
import { supabase } from '../../lib/supabase';
import { useCartStore } from '../../stores/useCartStore';
import { useFavoritesStore } from '../../stores/useFavoritesStore';
import { formatPrice } from '../../lib/utils';
import type { ItemWithDetails, Category, Product } from '../../types/database';
import { RecommendationPanel } from './RecommendationPanel';
import { ProductDetailModal } from './ProductDetailModal';
import { ProductCompareModal } from './ProductCompareModal';
import { RoomInteriorSelector } from '../interior/RoomInteriorSelector';
import * as Dialog from '@radix-ui/react-dialog';
import type { Product as CatalogProduct } from '../../types/product';

// 100点UIアニメーション
const animations = `
  @keyframes pochipochi {
    0% { transform: scale(1); }
    25% { transform: scale(0.95); }
    50% { transform: scale(1.08); }
    75% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
  @keyframes bounce-in {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes confetti-fall {
    0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg) scale(0); opacity: 0; }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes pulse-ring {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }
  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-pochipochi { animation: pochipochi 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .animate-bounce-in { animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .animate-shimmer {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-slide-up { animation: slide-up 0.3s ease-out; }
  .gradient-animate {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
`;

// DBアイテムをカート用に変換
const convertToCartItem = (item: ItemWithDetails, selectedPlanId: string) => {
  const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
  const variant = item.variants?.[0];
  const image = variant?.images?.[0];

  return {
    id: item.id,
    name: item.name,
    manufacturer: item.manufacturer || '',
    modelNumber: item.model_number || '',
    categoryName: item.category?.name || item.category_name || '',
    unit: item.unit?.symbol || '式',
    isOption: pricing ? !pricing.is_standard : false,
    pricing: item.pricing?.map(p => ({
      planId: p.product?.code || '',
      price: p.price,
      isStandard: p.is_standard,
    })) || [],
    variants: item.variants?.map(v => ({
      id: v.id,
      color: v.color_name,
      colorCode: v.color_code || undefined,
      imageUrl: v.images?.[0]?.image_url,
      thumbnailUrl: v.images?.[0]?.thumbnail_url || undefined,
    })) || [],
    selectedVariant: variant ? {
      id: variant.id,
      color: variant.color_name,
      colorCode: variant.color_code || undefined,
      imageUrl: image?.image_url,
      thumbnailUrl: image?.thumbnail_url || undefined,
    } : undefined,
    imageUrl: image?.image_url,
  };
};

// DBアイテムをRecommendation用のCatalogProductに変換
const convertToCatalogProduct = (item: ItemWithDetails): CatalogProduct => {
  const pricing = item.pricing?.find(p => p.product?.code === 'LACIE');

  return {
    id: item.id,
    categoryId: item.category_id || '',
    categoryName: item.category?.name || item.category_name || '',
    subcategory: '',
    name: item.name,
    manufacturer: item.manufacturer || '',
    modelNumber: item.model_number || '',
    unit: (item.unit?.symbol || '式') as CatalogProduct['unit'],
    isOption: pricing ? !pricing.is_standard : false,
    description: item.note || '', // noteフィールドをdescriptionにマッピング
    pricing: item.pricing?.map(p => ({
      plan: (p.product?.code || 'LACIE') as 'LACIE' | 'HOURS' | 'LIFE',
      planId: (p.product?.code || undefined) as 'LACIE' | 'HOURS' | 'LIFE' | undefined,
      price: p.price,
    })) || [],
    variants: item.variants?.map(v => ({
      id: v.id,
      color: v.color_name,
      colorCode: v.color_code || undefined,
      imageUrl: v.images?.[0]?.image_url,
      thumbnailUrl: v.images?.[0]?.thumbnail_url || undefined,
    })) || [],
  };
};

// ステップ定義
const STEPS = [
  { id: 'exterior', label: '外装', icon: Home, emoji: '🏠', gradient: 'from-emerald-500 to-teal-500' },
  { id: 'interior', label: '内装', icon: Sofa, emoji: '🛋️', gradient: 'from-blue-500 to-indigo-500' },
  { id: 'equipment', label: '設備', icon: Wrench, emoji: '🚿', gradient: 'from-cyan-500 to-blue-500' },
];

// スケルトンカード
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
    <div className="aspect-square animate-shimmer" />
    <div className="p-3 space-y-2">
      <div className="h-3 bg-gray-200 rounded animate-shimmer w-1/3" />
      <div className="h-4 bg-gray-200 rounded animate-shimmer" />
      <div className="h-8 bg-gray-200 rounded-xl animate-shimmer mt-3" />
    </div>
  </div>
);

// 検索ハイライトコンポーネント
const HighlightText: React.FC<{ text: string; searchTerm: string }> = ({ text, searchTerm }) => {
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
};

// 商品カードコンポーネント
interface ItemCardProps {
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
}

const ItemCard: React.FC<ItemCardProps> = ({
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
}) => {
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
    <div
      className={`group bg-white rounded-xl shadow-sm overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
        inCart
          ? 'border-teal-400 shadow-md shadow-teal-100 ring-2 ring-teal-50'
          : inCompare
          ? 'border-purple-400 shadow-md shadow-purple-100'
          : 'border-transparent hover:border-gray-200 hover:shadow-lg'
      } ${isJustAdded ? 'animate-pochipochi' : ''}`}
      style={{ animationDelay: `${index * 30}ms` }}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
      onClick={() => handleOpenDetail(item)}
    >
      {/* 画像エリア - よりコンパクトに */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={item.name}
            className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-3">
            <div
              className={`w-16 h-16 rounded-xl mb-2 transition-transform duration-200 ${isHovered ? 'scale-105' : ''}`}
              style={{
                background: variant?.color_code
                  ? `linear-gradient(135deg, ${variant.color_code}, ${variant.color_code}88)`
                  : 'linear-gradient(135deg, #e5e7eb, #d1d5db)'
              }}
            />
            <span className="text-xs text-gray-400 text-center line-clamp-1">{variant?.color_name || ''}</span>
          </div>
        )}

        {/* バッジ - コンパクト化 */}
        <div className="absolute top-1.5 left-1.5">
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${
            standard
              ? 'bg-teal-500 text-white'
              : 'bg-orange-500 text-white'
          }`}>
            {standard ? '標準' : 'OP'}
          </span>
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
            title={inFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
          >
            <Heart className={`w-3.5 h-3.5 ${inFavorite ? 'fill-current' : ''}`} />
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
            title={inCompare ? '比較から削除' : '比較に追加'}
          >
            <Scale className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 選択済みオーバーレイ */}
        {inCart && (
          <div className="absolute inset-0 bg-teal-500/20 flex items-center justify-center">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <Check className="w-6 h-6 text-teal-600" strokeWidth={3} />
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

      {/* 情報エリア - コンパクト化 */}
      <div className="p-2.5">
        {showManufacturer && (
          <p className="text-[10px] text-gray-400 font-medium mb-0.5 truncate">{item.manufacturer}</p>
        )}
        <h3 className="font-medium text-xs text-gray-800 line-clamp-2 min-h-[2rem] mb-1.5 leading-tight">
          <HighlightText text={item.name} searchTerm={searchTerm} />
        </h3>

        {/* 価格 */}
        <div className="flex items-baseline gap-1 mb-2">
          <span className={`text-base font-bold ${price === 0 ? 'text-teal-600' : 'text-gray-900'}`}>
            {price === 0 ? '標準' : formatPrice(price)}
          </span>
          {price > 0 && item.unit && (
            <span className="text-[10px] text-gray-400">/{item.unit.symbol}</span>
          )}
        </div>

        {/* アクションボタン - タップしやすく */}
        {inCart ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFromCart(item.id);
            }}
            className="w-full py-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 flex items-center justify-center gap-1.5 transition-all active:scale-95"
          >
            <X className="w-3.5 h-3.5" />
            解除
          </button>
        ) : hasMultipleVariants ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleOpenDetail(item);
            }}
            className="w-full py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95"
          >
            <Eye className="w-3.5 h-3.5" />
            {item.variants?.length}色
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(item);
            }}
            className="w-full py-2 rounded-lg text-xs font-bold bg-gradient-to-r from-teal-500 to-emerald-500 text-white flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            選択
          </button>
        )}
      </div>
    </div>
  );
};

// 空状態
const EmptyState = ({ searchTerm, onClear }: { searchTerm: string; onClear: () => void }) => (
  <div className="flex flex-col items-center justify-center py-20 animate-slide-up">
    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6 animate-float">
      <Package className="w-12 h-12 text-gray-400" />
    </div>
    <h3 className="text-xl font-bold text-gray-700 mb-2">商品が見つかりません</h3>
    <p className="text-gray-500 mb-6 text-center max-w-sm">
      {searchTerm
        ? `「${searchTerm}」に一致する商品がありません`
        : 'このカテゴリには商品がありません'}
    </p>
    {searchTerm && (
      <button
        onClick={onClear}
        className="px-6 py-2.5 bg-teal-500 text-white rounded-full font-medium hover:bg-teal-600 transition-all hover:scale-105 active:scale-95"
      >
        検索をクリア
      </button>
    )}
  </div>
);

// 紙吹雪コンポーネント
const Confetti = ({ show }: { show: boolean }) => {
  if (!show) return null;
  const confettiItems = ['🎉', '✨', '⭐', '🌟', '💫', '🎊', '💎', '🔮'];

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-50px',
            animation: `confetti-fall ${2 + Math.random() * 2}s linear forwards`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        >
          {confettiItems[i % confettiItems.length]}
        </div>
      ))}
    </div>
  );
};

export const CatalogWithTabs: React.FC = () => {
  // URLパラメータ
  const { step = 'exterior', categoryId: urlCategoryId, productId: urlProductId } = useParams<{
    step?: string;
    categoryId?: string;
    productId?: string;
  }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // URLからactiveTabを設定
  const activeTab = (['exterior', 'interior', 'equipment'].includes(step) ? step : 'exterior') as 'exterior' | 'interior' | 'equipment';
  const selectedCategoryId = urlCategoryId || null;

  // URLクエリパラメータから検索・フィルターを取得
  const searchTerm = searchParams.get('q') || '';
  const filterType = (searchParams.get('filter') as 'all' | 'standard' | 'option') || 'all';

  // 検索・フィルター更新関数（URL同期）
  const setSearchTerm = useCallback((term: string) => {
    setSearchParams(prev => {
      if (term) {
        prev.set('q', term);
      } else {
        prev.delete('q');
      }
      return prev;
    });
  }, [setSearchParams]);

  const setFilterType = useCallback((type: 'all' | 'standard' | 'option') => {
    setSearchParams(prev => {
      if (type !== 'all') {
        prev.set('filter', type);
      } else {
        prev.delete('filter');
      }
      return prev;
    });
  }, [setSearchParams]);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('LACIE');
  const [addedItemId, setAddedItemId] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // 商品詳細モーダル用
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<CatalogProduct | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // 比較機能用
  const [compareProducts, setCompareProducts] = useState<CatalogProduct[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // 部屋別内装プランナー
  const [isRoomPlannerOpen, setIsRoomPlannerOpen] = useState(false);

  // データ
  const [items, setItems] = useState<ItemWithDetails[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [plans, setPlans] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // カート
  const { items: cartItems, addItem, removeItem, getTotalPrice } = useCartStore();
  const cartItemIds = useMemo(() => new Set(cartItems.map(i => i.product.id)), [cartItems]);
  const totalPrice = getTotalPrice();
  const toast = useToast();

  // お気に入り・履歴
  const { favorites, toggleFavorite, isFavorite, addRecentlyViewed, recentlyViewed } = useFavoritesStore();
  const handleToggleFavorite = useCallback((itemId: string) => {
    toggleFavorite(itemId);
    const wasFavorite = favorites.includes(itemId);
    if (wasFavorite) {
      toast.info('お気に入り解除');
    } else {
      toast.success('お気に入り追加');
    }
  }, [toggleFavorite, favorites, toast]);

  // クイック選択モード
  const [quickSelectMode, setQuickSelectMode] = useState(false);

  // タブ切替（URL遷移）
  const setActiveTab = useCallback((newTab: 'exterior' | 'interior' | 'equipment') => {
    navigate(`/catalog/${newTab}`);
  }, [navigate]);

  // カテゴリ選択（URL遷移）
  const setSelectedCategoryId = useCallback((catId: string | null) => {
    if (catId) {
      navigate(`/catalog/${activeTab}/${catId}`);
    } else {
      navigate(`/catalog/${activeTab}`);
    }
  }, [navigate, activeTab]);

  // プラン取得
  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      if (data) setPlans(data);
    };
    fetchPlans();
  }, []);

  // モバイル進捗パネル
  const [showMobileProgress, setShowMobileProgress] = useState(false);

  // カテゴリ取得 + 最初の未決カテゴリを自動選択
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase
        .from('categories')
        .select('*')
        .eq('category_type', activeTab)
        .eq('is_active', true)
        .order('display_order');
      if (data) {
        setCategories(data);
        // 最初の未決カテゴリを自動選択
        const firstUndecided = data.find(cat =>
          !cartItems.some(item => item.product.categoryName === cat.name)
        );
        setSelectedCategoryId(firstUndecided?.id || data[0]?.id || null);
      }
    };
    fetchCategories();
  }, [activeTab]);

  // アイテム取得
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let query = supabase
          .from('items')
          .select(`
            *,
            category:categories(*),
            unit:units(*),
            variants:item_variants(*, images:item_variant_images(*)),
            pricing:item_pricing(*, product:products(*))
          `)
          .eq('is_active', true);

        if (selectedCategoryId) {
          query = query.eq('category_id', selectedCategoryId);
        } else {
          const { data: categoryIds } = await supabase
            .from('categories')
            .select('id')
            .eq('category_type', activeTab)
            .eq('is_active', true);

          if (categoryIds?.length) {
            query = query.in('category_id', categoryIds.map(c => c.id));
          }
        }

        const { data, error: fetchError } = await query.order('display_order');
        if (fetchError) throw fetchError;
        setItems((data as ItemWithDetails[]) || []);
      } catch {
        setError('データの読み込みに失敗しました');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [activeTab, selectedCategoryId]);

  // フィルタリング
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        if (!item.name.toLowerCase().includes(term) &&
            !item.manufacturer?.toLowerCase().includes(term)) {
          return false;
        }
      }
      const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
      if (filterType === 'standard' && pricing && !pricing.is_standard) return false;
      if (filterType === 'option' && pricing?.is_standard) return false;
      return true;
    });
  }, [items, searchTerm, filterType, selectedPlanId]);

  // レコメンド用にCatalogProduct形式に変換
  const catalogProducts = useMemo(() => {
    return items.map(convertToCatalogProduct);
  }, [items]);

  // カートに入っている商品をCatalogProduct形式で取得
  const selectedProducts = useMemo(() => {
    return cartItems.map(item => ({
      id: item.product.id,
      categoryId: '',
      categoryName: item.product.categoryName,
      subcategory: '',
      name: item.product.name,
      manufacturer: item.product.manufacturer,
      modelNumber: item.product.modelNumber,
      unit: (item.product.unit || '式') as CatalogProduct['unit'],
      isOption: item.product.isOption,
      description: '',
      pricing: item.product.pricing.map(p => ({
        plan: (p.planId || 'LACIE') as 'LACIE' | 'HOURS' | 'LIFE',
        planId: p.planId as 'LACIE' | 'HOURS' | 'LIFE' | undefined,
        price: p.price,
      })),
      variants: item.product.variants,
    })) as CatalogProduct[];
  }, [cartItems]);

  // カートに追加
  const handleAddToCart = useCallback((item: ItemWithDetails) => {
    const cartProduct = convertToCartItem(item, selectedPlanId);
    addItem(cartProduct as any, 1);
    useCartStore.getState().setSelectedPlanId(selectedPlanId);

    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 500);

    // Toast通知
    toast.success('追加しました', item.name);

    // マイルストーン演出
    const newCount = cartItems.length + 1;
    if (newCount === 5 || newCount === 10 || newCount === 15 || newCount === 20) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }

    // クイック選択モードで自動的に次のカテゴリへ
    if (quickSelectMode) {
      setTimeout(() => goToNextCategory(), 300);
    }
  }, [addItem, cartItems.length, selectedPlanId, toast, quickSelectMode, goToNextCategory]);

  const handleRemoveFromCart = useCallback((itemId: string) => {
    const item = cartItems.find(i => i.product.id === itemId);
    removeItem(itemId);
    if (item) {
      toast.info('解除しました', item.product.name);
    }
  }, [removeItem, cartItems, toast]);

  // 商品詳細モーダルを開く（URL付き）
  const handleOpenDetail = useCallback((item: ItemWithDetails) => {
    const product = convertToCatalogProduct(item);
    setSelectedProductForDetail(product);
    setIsDetailModalOpen(true);
    // 最近見た商品に追加
    addRecentlyViewed(item.id);
    // URLを更新（ブラウザ履歴に追加）
    if (selectedCategoryId) {
      navigate(`/catalog/${activeTab}/${selectedCategoryId}/${item.id}`);
    }
  }, [navigate, activeTab, selectedCategoryId, addRecentlyViewed]);

  // 比較に追加/削除
  const handleToggleCompare = useCallback((item: ItemWithDetails) => {
    const product = convertToCatalogProduct(item);
    setCompareProducts(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else if (prev.length < 3) {
        return [...prev, product];
      }
      return prev;
    });
  }, []);

  // 比較リストにあるかチェック
  const isInCompare = useCallback((itemId: string) => {
    return compareProducts.some(p => p.id === itemId);
  }, [compareProducts]);

  const getPrice = (item: ItemWithDetails) => {
    return item.pricing?.find(p => p.product?.code === selectedPlanId)?.price || 0;
  };

  const isStandard = (item: ItemWithDetails) => {
    return item.pricing?.find(p => p.product?.code === selectedPlanId)?.is_standard ?? false;
  };

  const getImageUrl = (item: ItemWithDetails) => {
    const variant = item.variants?.[0];
    return variant?.images?.[0]?.image_url || variant?.images?.[0]?.thumbnail_url || null;
  };

  const getCategoryCount = (categoryName: string) => {
    return cartItems.filter(i => i.product.categoryName === categoryName).length;
  };

  // 各ステップの選択数
  const getStepCount = (stepId: string) => {
    return cartItems.filter(i => {
      const cat = i.product.categoryName;
      if (stepId === 'exterior') return ['外壁', 'ポーチ', '屋根', '樋', '軒天', '破風', '雨戸'].some(c => cat?.includes(c));
      if (stepId === 'interior') return ['床材', '壁クロス', '天井クロス', '巾木', '建具', '収納'].some(c => cat?.includes(c));
      return ['キッチン', 'バス', '洗面台', 'トイレ', '給湯器', 'エアコン', '照明'].some(c => cat?.includes(c));
    }).length;
  };

  // 未決・決定カテゴリ
  const decidedCategories = useMemo(() =>
    categories.filter(cat => cartItems.some(item => item.product.categoryName === cat.name)),
    [categories, cartItems]
  );
  const undecidedCategories = useMemo(() =>
    categories.filter(cat => !cartItems.some(item => item.product.categoryName === cat.name)),
    [categories, cartItems]
  );
  const currentCategoryProgress = categories.length > 0
    ? Math.round((decidedCategories.length / categories.length) * 100)
    : 0;
  const isCurrentStepComplete = undecidedCategories.length === 0 && categories.length > 0;

  // 次のカテゴリへ進む
  const goToNextCategory = useCallback(() => {
    const currentIndex = categories.findIndex(c => c.id === selectedCategoryId);
    const nextUndecided = categories.slice(currentIndex + 1).find(cat =>
      !cartItems.some(item => item.product.categoryName === cat.name)
    ) || undecidedCategories[0];

    if (nextUndecided) {
      setSelectedCategoryId(nextUndecided.id);
    }
  }, [categories, selectedCategoryId, cartItems, undecidedCategories]);

  // 次のステップへ進む
  const goToNextStep = useCallback(() => {
    const currentIndex = STEPS.findIndex(s => s.id === activeTab);
    if (currentIndex < STEPS.length - 1) {
      setActiveTab(STEPS[currentIndex + 1].id as any);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [activeTab]);

  // 現在のカテゴリが決定済みかチェック
  const isCurrentCategoryDecided = useMemo(() => {
    const currentCat = categories.find(c => c.id === selectedCategoryId);
    return currentCat ? cartItems.some(item => item.product.categoryName === currentCat.name) : false;
  }, [categories, selectedCategoryId, cartItems]);

  // URLの商品IDで詳細モーダルを自動的に開く
  useEffect(() => {
    if (urlProductId && items.length > 0) {
      const item = items.find(i => i.id === urlProductId);
      if (item) {
        const product = convertToCatalogProduct(item);
        setSelectedProductForDetail(product);
        setIsDetailModalOpen(true);
      }
    }
  }, [urlProductId, items]);

  // モーダルを閉じる（URLから商品IDを削除）
  const handleCloseDetailModal = useCallback(() => {
    setIsDetailModalOpen(false);
    setSelectedProductForDetail(null);
    // URLから商品IDを削除
    if (selectedCategoryId) {
      navigate(`/catalog/${activeTab}/${selectedCategoryId}`);
    } else {
      navigate(`/catalog/${activeTab}`);
    }
  }, [navigate, activeTab, selectedCategoryId]);

  // キーボードショートカット
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // モーダルが開いている場合はEscでのみ閉じる
      if (isDetailModalOpen || isCompareModalOpen || isRoomPlannerOpen) {
        if (e.key === 'Escape') {
          if (isDetailModalOpen) handleCloseDetailModal();
          if (isCompareModalOpen) setIsCompareModalOpen(false);
          if (isRoomPlannerOpen) setIsRoomPlannerOpen(false);
        }
        return;
      }

      // 検索ボックスにフォーカスがある場合
      if (document.activeElement?.tagName === 'INPUT') {
        if (e.key === 'Escape') {
          (document.activeElement as HTMLInputElement).blur();
          setSearchTerm('');
        }
        return;
      }

      // グローバルショートカット
      switch (e.key) {
        case '/':
        case 'f':
          if (e.ctrlKey || e.metaKey || e.key === '/') {
            e.preventDefault();
            const searchInput = document.querySelector('input[placeholder="検索..."]') as HTMLInputElement;
            searchInput?.focus();
          }
          break;
        case 'n':
          // 次のカテゴリへ
          if (undecidedCategories.length > 0) {
            goToNextCategory();
          }
          break;
        case 'q':
          // クイック選択モード切替
          setQuickSelectMode(prev => !prev);
          break;
        case 'Escape':
          // 検索をクリア
          if (searchTerm) {
            setSearchTerm('');
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDetailModalOpen, isCompareModalOpen, isRoomPlannerOpen, handleCloseDetailModal, searchTerm, setSearchTerm, undecidedCategories, goToNextCategory]);

  return (
    <>
      <style>{animations}</style>
      <Confetti show={showConfetti} />

      <div className="flex flex-col h-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-500 gradient-animate text-white shadow-lg">
          {/* ステップナビゲーション */}
          <div className="px-4 py-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-2 sm:gap-4">
                {STEPS.map((step, index) => {
                  const isActive = step.id === activeTab;
                  const stepCount = getStepCount(step.id);
                  const Icon = step.icon;

                  return (
                    <React.Fragment key={step.id}>
                      <button
                        onClick={() => setActiveTab(step.id as any)}
                        className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-2xl transition-all duration-300 ${
                          isActive
                            ? 'bg-white text-teal-600 shadow-xl scale-105'
                            : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                        }`}
                      >
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-teal-500' : ''}`} />
                        <span className="hidden sm:inline font-semibold">{step.label}</span>
                        <span className="sm:hidden text-lg">{step.emoji}</span>
                        {stepCount > 0 && (
                          <span className={`absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold animate-bounce-in ${
                            isActive ? 'bg-teal-500 text-white' : 'bg-white text-teal-600'
                          }`}>
                            {stepCount}
                          </span>
                        )}
                      </button>
                      {index < STEPS.length - 1 && (
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/40" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* 合計表示 */}
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="text-right hidden sm:block">
                  <p className="text-xs text-white/70">オプション合計</p>
                  <p className="text-lg sm:text-xl font-bold">{formatPrice(totalPrice)}</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold text-lg">{cartItems.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* プログレスバー - カテゴリベース */}
          <div className="px-4 pb-3">
            <div className="max-w-6xl mx-auto">
              {(() => {
                const decidedCount = categories.filter(cat =>
                  cartItems.some(item => item.product.categoryName === cat.name)
                ).length;
                const totalCount = categories.length;
                const catProgressPercent = totalCount > 0 ? (decidedCount / totalCount) * 100 : 0;
                return (
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 rounded-full transition-all duration-500"
                        style={{ width: `${catProgressPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-white/80 whitespace-nowrap">
                      {decidedCount === totalCount && totalCount > 0
                        ? '🎉 完了!'
                        : `${decidedCount}/${totalCount}カテゴリ`}
                    </span>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* カテゴリナビゲーション - 決定/未決ステータス表示 */}
        <div className="bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto scrollbar-thin">
            {categories.map((cat, idx) => {
              const count = getCategoryCount(cat.name);
              const isDecided = count > 0;
              const isSelected = selectedCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategoryId(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isSelected
                      ? isDecided
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg'
                        : 'bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-lg'
                      : isDecided
                        ? 'bg-teal-100 text-teal-700 border-2 border-teal-300'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {isDecided ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="w-4 h-4 flex items-center justify-center text-xs font-bold rounded-full bg-current/20">
                      {idx + 1}
                    </span>
                  )}
                  <span>{cat.name}</span>
                  {isDecided && (
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/30' : 'bg-teal-200'
                    }`}>
                      {count}件
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* サイドバー (PC) - 未決/決定表示 */}
          <div className="hidden lg:flex flex-col w-72 bg-white/80 backdrop-blur-sm border-r border-gray-200 overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* プラン選択（コンパクト） */}
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <select
                  value={selectedPlanId}
                  onChange={(e) => setSelectedPlanId(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-teal-500"
                >
                  {plans.map(plan => (
                    <option key={plan.id} value={plan.code}>{plan.name}</option>
                  ))}
                </select>
              </div>

              {/* 進捗サマリー */}
              {(() => {
                const decidedCategories = categories.filter(cat =>
                  cartItems.some(item => item.product.categoryName === cat.name)
                );
                const undecidedCategories = categories.filter(cat =>
                  !cartItems.some(item => item.product.categoryName === cat.name)
                );
                const progressPercent = categories.length > 0
                  ? Math.round((decidedCategories.length / categories.length) * 100)
                  : 0;

                return (
                  <>
                    {/* 進捗バー */}
                    <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-gray-700">
                          {STEPS.find(s => s.id === activeTab)?.label}の進捗
                        </span>
                        <span className="text-lg font-bold text-teal-600">
                          {decidedCategories.length}/{categories.length}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full transition-all duration-500"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-center">
                        {progressPercent === 100 ? '🎉 完了!' : `残り${undecidedCategories.length}カテゴリ`}
                      </p>
                    </div>

                    {/* 未決項目 */}
                    {undecidedCategories.length > 0 && (
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                          未決項目
                          <span className="text-orange-500">({undecidedCategories.length})</span>
                        </h3>
                        <div className="space-y-1">
                          {undecidedCategories.map(cat => (
                            <button
                              key={cat.id}
                              onClick={() => setSelectedCategoryId(cat.id)}
                              className={`w-full flex items-center justify-between p-2 rounded-lg text-sm transition-all ${
                                selectedCategoryId === cat.id
                                  ? 'bg-orange-100 border-2 border-orange-300 text-orange-700'
                                  : 'bg-orange-50 hover:bg-orange-100 text-gray-700 border border-orange-200'
                              }`}
                            >
                              <span className="font-medium">{cat.name}</span>
                              <ChevronRight className="w-4 h-4 text-orange-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 決定項目 */}
                    {decidedCategories.length > 0 && (
                      <div>
                        <h3 className="font-bold text-gray-800 mb-2 text-sm flex items-center gap-2">
                          <Check className="w-4 h-4 text-teal-500" />
                          決定項目
                          <span className="text-teal-500">({decidedCategories.length})</span>
                        </h3>
                        <div className="space-y-1.5">
                          {decidedCategories.map(cat => {
                            const selectedItems = cartItems.filter(
                              item => item.product.categoryName === cat.name
                            );
                            return (
                              <button
                                key={cat.id}
                                onClick={() => setSelectedCategoryId(cat.id)}
                                className={`w-full p-2 rounded-lg text-sm transition-all text-left ${
                                  selectedCategoryId === cat.id
                                    ? 'bg-teal-100 border-2 border-teal-300'
                                    : 'bg-teal-50 hover:bg-teal-100 border border-teal-200'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-teal-700">{cat.name}</span>
                                  <span className="text-xs bg-teal-500 text-white px-1.5 py-0.5 rounded-full">
                                    {selectedItems.length}件
                                  </span>
                                </div>
                                <div className="mt-1 space-y-0.5">
                                  {selectedItems.slice(0, 2).map(item => (
                                    <p key={item.product.id} className="text-xs text-gray-600 truncate">
                                      ・{item.product.name}
                                    </p>
                                  ))}
                                  {selectedItems.length > 2 && (
                                    <p className="text-xs text-gray-400">
                                      他{selectedItems.length - 2}件
                                    </p>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}

              {/* お気に入り */}
              {favorites.length > 0 && (
                <div className="pt-3 border-t border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2 text-sm flex items-center gap-2">
                    <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
                    お気に入り
                    <span className="text-pink-500">({favorites.length})</span>
                  </h3>
                  <div className="space-y-1">
                    {favorites.slice(0, 3).map(favId => {
                      const item = items.find(i => i.id === favId);
                      if (!item) return null;
                      return (
                        <button
                          key={favId}
                          onClick={() => handleOpenDetail(item)}
                          className="w-full flex items-center justify-between p-2 bg-pink-50 hover:bg-pink-100 rounded-lg text-sm transition-all border border-pink-200"
                        >
                          <span className="font-medium text-gray-700 truncate">{item.name}</span>
                          <ChevronRight className="w-4 h-4 text-pink-400 flex-shrink-0" />
                        </button>
                      );
                    })}
                    {favorites.length > 3 && (
                      <p className="text-xs text-pink-400 text-center">他{favorites.length - 3}件</p>
                    )}
                  </div>
                </div>
              )}

              {/* 最近見た商品 */}
              {recentlyViewed.length > 0 && (
                <div className="pt-3 border-t border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    最近見た商品
                  </h3>
                  <div className="space-y-1">
                    {recentlyViewed.slice(0, 3).map(viewedId => {
                      const item = items.find(i => i.id === viewedId);
                      if (!item) return null;
                      return (
                        <button
                          key={viewedId}
                          onClick={() => handleOpenDetail(item)}
                          className="w-full flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm transition-all"
                        >
                          <span className="text-gray-600 truncate">{item.name}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 部屋別プランナー（内装タブの時のみ） */}
              {activeTab === 'interior' && (
                <div className="pt-3 border-t border-gray-200">
                  <button
                    onClick={() => setIsRoomPlannerOpen(true)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium text-sm hover:from-blue-600 hover:to-indigo-600 transition-all shadow-md"
                  >
                    <Home className="w-4 h-4" />
                    部屋別プランナー
                  </button>
                </div>
              )}

              {/* アクションボタン */}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                {isCurrentStepComplete ? (
                  <button
                    onClick={goToNextStep}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    🎉 次のステップへ進む
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : isCurrentCategoryDecided && undecidedCategories.length > 0 ? (
                  <button
                    onClick={goToNextCategory}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                    title="キーボードショートカット: N"
                  >
                    次のカテゴリへ
                    <span className="text-[10px] bg-white/20 px-1.5 rounded">N</span>
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {/* メインエリア */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* 検索バー＋フィルター */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-10 p-3">
              <div className="flex items-center gap-2 max-w-4xl mx-auto">
                {/* 検索 */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="検索... (/ でフォーカス)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 border-0 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
                  />
                  {searchTerm ? (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full"
                    >
                      <X className="w-3 h-3 text-gray-400" />
                    </button>
                  ) : (
                    <span className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 bg-gray-200 px-1.5 py-0.5 rounded">
                      /
                    </span>
                  )}
                </div>

                {/* クイック選択モードトグル */}
                <button
                  onClick={() => setQuickSelectMode(!quickSelectMode)}
                  className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                    quickSelectMode
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title="クイック選択 (Q): 商品選択後に自動で次のカテゴリへ移動"
                >
                  <Zap className="w-4 h-4" />
                  <span className="hidden md:inline">{quickSelectMode ? 'クイック ON' : 'クイック'}</span>
                  <span className="hidden lg:block text-[10px] ml-1 bg-black/10 px-1 rounded">Q</span>
                </button>
              </div>
            </div>

            {/* モバイル用フィルターバー */}
            <div className="lg:hidden bg-white border-b border-gray-100 px-3 py-2">
              <div className="flex items-center gap-2">
                {/* プラン選択 */}
                <select
                  value={selectedPlanId}
                  onChange={(e) => setSelectedPlanId(e.target.value)}
                  className="flex-1 px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 focus:ring-2 focus:ring-teal-500"
                >
                  {plans.map(plan => (
                    <option key={plan.id} value={plan.code}>{plan.name}</option>
                  ))}
                </select>

                {/* タイプフィルター */}
                <div className="flex bg-gray-100 p-1 rounded-xl">
                  {[
                    { value: 'all', label: 'すべて', color: 'gray' },
                    { value: 'standard', label: '標準', color: 'teal' },
                    { value: 'option', label: 'OP', color: 'orange' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFilterType(opt.value as any)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                        filterType === opt.value
                          ? opt.value === 'standard'
                            ? 'bg-teal-500 text-white shadow-sm'
                            : opt.value === 'option'
                            ? 'bg-orange-500 text-white shadow-sm'
                            : 'bg-white text-gray-700 shadow-sm'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* クイック選択モード */}
                <button
                  onClick={() => setQuickSelectMode(!quickSelectMode)}
                  className={`p-2.5 rounded-xl transition-all ${
                    quickSelectMode
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                  title="クイック選択モード"
                >
                  <Zap className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 商品グリッド */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 pb-24 lg:pb-4">
              {isLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {[...Array(10)].map((_, i) => <SkeletonCard key={i} />)}
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-red-500 font-medium">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    再読み込み
                  </button>
                </div>
              ) : filteredItems.length === 0 ? (
                <EmptyState searchTerm={searchTerm} onClear={() => setSearchTerm('')} />
              ) : (
                <>
                  {/* メーカー別グループ化表示（カテゴリ選択時のみ） */}
                  {selectedCategoryId && (() => {
                    // メーカー別にグループ化
                    const groupedByManufacturer = filteredItems.reduce((acc, item) => {
                      const mfr = item.manufacturer || 'その他';
                      if (!acc[mfr]) acc[mfr] = [];
                      acc[mfr].push(item);
                      return acc;
                    }, {} as Record<string, typeof filteredItems>);
                    const manufacturers = Object.keys(groupedByManufacturer);

                    // メーカーが2つ以上ある場合のみグループ化表示
                    if (manufacturers.length > 1) {
                      return (
                        <div className="space-y-6">
                          {manufacturers.map(mfr => (
                            <div key={mfr} className="animate-slide-up">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-1 h-5 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" />
                                <h3 className="font-bold text-gray-800">{mfr}</h3>
                                <span className="text-xs text-gray-400">({groupedByManufacturer[mfr].length}件)</span>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                                {groupedByManufacturer[mfr].map((item, index) => (
                                  <ItemCard
                                    key={item.id}
                                    item={item}
                                    index={index}
                                    getPrice={getPrice}
                                    isStandard={isStandard}
                                    getImageUrl={getImageUrl}
                                    cartItemIds={cartItemIds}
                                    addedItemId={addedItemId}
                                    hoveredItem={hoveredItem}
                                    setHoveredItem={setHoveredItem}
                                    handleOpenDetail={handleOpenDetail}
                                    handleAddToCart={handleAddToCart}
                                    handleRemoveFromCart={handleRemoveFromCart}
                                    handleToggleCompare={handleToggleCompare}
                                    isInCompare={isInCompare}
                                    handleToggleFavorite={handleToggleFavorite}
                                    isFavorite={isFavorite}
                                    searchTerm={searchTerm}
                                    showManufacturer={false}
                                  />
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }
                    return null;
                  })()}

                  {/* 通常グリッド表示 */}
                  {(!selectedCategoryId || (() => {
                    const groupedByManufacturer = filteredItems.reduce((acc, item) => {
                      const mfr = item.manufacturer || 'その他';
                      if (!acc[mfr]) acc[mfr] = [];
                      acc[mfr].push(item);
                      return acc;
                    }, {} as Record<string, typeof filteredItems>);
                    return Object.keys(groupedByManufacturer).length <= 1;
                  })()) && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                      {filteredItems.map((item, index) => (
                        <ItemCard
                          key={item.id}
                          item={item}
                          index={index}
                          getPrice={getPrice}
                          isStandard={isStandard}
                          getImageUrl={getImageUrl}
                          cartItemIds={cartItemIds}
                          addedItemId={addedItemId}
                          hoveredItem={hoveredItem}
                          setHoveredItem={setHoveredItem}
                          handleOpenDetail={handleOpenDetail}
                          handleAddToCart={handleAddToCart}
                          handleRemoveFromCart={handleRemoveFromCart}
                          handleToggleCompare={handleToggleCompare}
                          isInCompare={isInCompare}
                          handleToggleFavorite={handleToggleFavorite}
                          isFavorite={isFavorite}
                          searchTerm={searchTerm}
                          showManufacturer={true}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* レコメンドパネル */}
              {catalogProducts.length > 0 && (
                <div className="mt-8 pb-8">
                  <RecommendationPanel
                    selectedProducts={selectedProducts}
                    allProducts={catalogProducts}
                    onSelectProduct={(product) => {
                      // 該当するDBアイテムを探してカートに追加
                      const dbItem = items.find(item => item.id === product.id);
                      if (dbItem) {
                        handleAddToCart(dbItem);
                      }
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* モバイル用 - 下部ナビゲーションバー */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg safe-area-pb">
          <div className="flex items-center justify-between p-3 gap-3">
            {/* 進捗表示 */}
            <button
              onClick={() => setShowMobileProgress(true)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-xl"
            >
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 -rotate-90">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                  <circle
                    cx="20" cy="20" r="16" fill="none" stroke="#14b8a6" strokeWidth="4"
                    strokeDasharray={`${currentCategoryProgress} 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                  {decidedCategories.length}/{categories.length}
                </span>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">進捗</p>
                <p className="text-sm font-bold text-gray-700">
                  {undecidedCategories.length > 0 ? `残り${undecidedCategories.length}` : '完了!'}
                </p>
              </div>
            </button>

            {/* メインアクション */}
            {isCurrentStepComplete ? (
              <button
                onClick={goToNextStep}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-bold shadow-lg"
              >
                次のステップへ
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : isCurrentCategoryDecided ? (
              <button
                onClick={goToNextCategory}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-bold shadow-lg"
              >
                次のカテゴリへ
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-orange-100 text-orange-700 rounded-xl font-medium">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                {categories.find(c => c.id === selectedCategoryId)?.name || 'カテゴリ'}を選択中
              </div>
            )}

            {/* カート */}
            <button className="relative p-3 bg-teal-500 text-white rounded-xl">
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* モバイル進捗パネル（ボトムシート） */}
        {showMobileProgress && (
          <>
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-50"
              onClick={() => setShowMobileProgress(false)}
            />
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl max-h-[70vh] overflow-y-auto animate-slide-up">
              <div className="sticky top-0 bg-white p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-gray-900">選択状況</h3>
                  <button
                    onClick={() => setShowMobileProgress(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                {/* 進捗バー */}
                <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${currentCategoryProgress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {decidedCategories.length}/{categories.length} カテゴリ完了
                </p>
              </div>

              <div className="p-4 space-y-4">
                {/* 未決項目 */}
                {undecidedCategories.length > 0 && (
                  <div>
                    <h4 className="font-bold text-sm text-orange-600 mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                      未選択 ({undecidedCategories.length})
                    </h4>
                    <div className="space-y-2">
                      {undecidedCategories.map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategoryId(cat.id);
                            setShowMobileProgress(false);
                          }}
                          className="w-full flex items-center justify-between p-3 bg-orange-50 rounded-xl border border-orange-200"
                        >
                          <span className="font-medium text-gray-700">{cat.name}</span>
                          <ChevronRight className="w-5 h-5 text-orange-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 決定項目 */}
                {decidedCategories.length > 0 && (
                  <div>
                    <h4 className="font-bold text-sm text-teal-600 mb-2 flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      選択済み ({decidedCategories.length})
                    </h4>
                    <div className="space-y-2">
                      {decidedCategories.map(cat => {
                        const selectedItems = cartItems.filter(item => item.product.categoryName === cat.name);
                        return (
                          <button
                            key={cat.id}
                            onClick={() => {
                              setSelectedCategoryId(cat.id);
                              setShowMobileProgress(false);
                            }}
                            className="w-full p-3 bg-teal-50 rounded-xl border border-teal-200 text-left"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-teal-700">{cat.name}</span>
                              <span className="text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full">
                                {selectedItems.length}件
                              </span>
                            </div>
                            <div className="mt-1 text-sm text-gray-600">
                              {selectedItems.map(i => i.product.name).join(', ')}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* 比較バー（PC用） */}
        {compareProducts.length > 0 && (
          <div className="hidden lg:flex fixed bottom-0 left-0 right-0 bg-purple-600 text-white py-3 px-6 items-center justify-between z-40">
            <div className="flex items-center gap-4">
              <Scale className="w-5 h-5" />
              <span className="font-medium">比較中: {compareProducts.length}件</span>
              <div className="flex gap-2">
                {compareProducts.map(p => (
                  <span key={p.id} className="bg-white/20 px-2 py-1 rounded text-sm">
                    {p.name.substring(0, 15)}...
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setCompareProducts([])}
                className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
              >
                クリア
              </button>
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                比較する
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 商品詳細モーダル */}
      <ProductDetailModal
        product={selectedProductForDetail}
        isOpen={isDetailModalOpen}
        onClose={handleCloseDetailModal}
      />

      {/* 比較モーダル */}
      <ProductCompareModal
        products={compareProducts}
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
        onRemoveProduct={(productId) => setCompareProducts(prev => prev.filter(p => p.id !== productId))}
      />

      {/* 部屋別プランナーモーダル */}
      <Dialog.Root open={isRoomPlannerOpen} onOpenChange={setIsRoomPlannerOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl w-[95vw] max-w-6xl max-h-[90vh] overflow-hidden z-50">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Home className="w-6 h-6" />
                <h2 className="text-lg font-bold">部屋別内装プランナー</h2>
              </div>
              <Dialog.Close className="p-2 hover:bg-white/20 rounded-full">
                <X className="w-5 h-5" />
              </Dialog.Close>
            </div>
            <div className="overflow-y-auto max-h-[calc(90vh-60px)]">
              <RoomInteriorSelector
                interiorProducts={catalogProducts.filter(p =>
                  ['床材', '壁クロス', '天井クロス', '巾木'].some(cat => p.categoryName.includes(cat))
                )}
                onSelectionsChange={(selections) => {
                  console.log('Room selections:', selections);
                  // TODO: カートに反映する処理
                }}
              />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
