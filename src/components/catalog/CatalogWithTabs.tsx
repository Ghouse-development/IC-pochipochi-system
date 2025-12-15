import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, ShoppingCart, Check, Star, ChevronRight, Home, Zap, Heart, Clock, X, Scale } from 'lucide-react';
import { useToast } from '../common/Toast';
import { useTimeout } from '../../hooks/useTimeout';
import { useDebounce } from '../../hooks/useDebounce';
import { supabase } from '../../lib/supabase';
import { createLogger } from '../../lib/logger';

const logger = createLogger('CatalogWithTabs');
import { useCartStore } from '../../stores/useCartStore';
import { useProductStore } from '../../stores/useProductStore';
import { useFavoritesStore } from '../../stores/useFavoritesStore';
import { formatPrice } from '../../lib/utils';
import { sanitizeSearchQuery } from '../../lib/sanitize';
import { ANIMATION_DURATIONS, CART_MILESTONES, CATEGORY_GROUPS } from '../../lib/constants';
import type { ItemWithDetails, Category, Product } from '../../types/database';
import { RecommendationPanel } from './RecommendationPanel';
import { ProductDetailModal } from './ProductDetailModal';
import { ProductCompareModal } from './ProductCompareModal';
import { RecentlyViewed } from './RecentlyViewed';
import { RoomInteriorSelector } from '../interior/RoomInteriorSelector';
import { useCustomerMode, CustomerWelcomeBanner } from '../customer/CustomerModeWrapper';
import * as Dialog from '@radix-ui/react-dialog';
import type { Product as CatalogProduct } from '../../types/product';

// 抽出したコンポーネント・ユーティリティ
import { ItemCard } from './ItemCard';
import { catalogAnimations, SkeletonCard, EmptyState, Confetti } from './CatalogUIComponents';
import {
  convertToCartItem,
  convertStaticToItemWithDetails,
  convertToCatalogProduct,
  STEPS,
  type FilterTypeValue,
} from './catalogUtils';

// ユーティリティ関数とコンポーネント (ItemCard, SkeletonCard, EmptyState, Confetti) はインポート済み

interface CatalogWithTabsProps {
  onCartClick?: () => void;
}

export const CatalogWithTabs: React.FC<CatalogWithTabsProps> = ({ onCartClick }) => {
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
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const filterType = (searchParams.get('filter') as 'all' | 'standard' | 'option') || 'all';
  const selectedSubcategory = searchParams.get('sub') || '';
  const selectedColor = searchParams.get('color') || '';
  const priceMax = parseInt(searchParams.get('maxPrice') || '0', 10) || 0;

  // 検索・フィルター更新関数（URL同期）
  const setSearchTerm = useCallback((term: string) => {
    const sanitized = sanitizeSearchQuery(term);
    setSearchParams(prev => {
      if (sanitized) {
        prev.set('q', sanitized);
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

  const setSelectedSubcategory = useCallback((sub: string) => {
    setSearchParams(prev => {
      if (sub) {
        prev.set('sub', sub);
      } else {
        prev.delete('sub');
      }
      return prev;
    });
  }, [setSearchParams]);

  const setSelectedColor = useCallback((color: string) => {
    setSearchParams(prev => {
      if (color) {
        prev.set('color', color);
      } else {
        prev.delete('color');
      }
      return prev;
    });
  }, [setSearchParams]);

  const setPriceMax = useCallback((price: number) => {
    setSearchParams(prev => {
      if (price > 0) {
        prev.set('maxPrice', price.toString());
      } else {
        prev.delete('maxPrice');
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

  // お気に入りフィルター
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // 廃番商品を非表示（デフォルトで非表示）
  const [hideDiscontinued, setHideDiscontinued] = useState(true);

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
  const { setTimeout } = useTimeout();

  // 顧客モード
  const { isCustomerMode } = useCustomerMode();

  // 静的データ（フォールバック用）
  const { exteriorProducts, interiorProducts, waterProducts } = useProductStore();

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

  // カテゴリ取得 - Supabaseから取得、フォールバックとして静的データを使用
  useEffect(() => {
    const fetchCategories = async () => {
      // まずSupabaseからカテゴリを取得
      const { data: supabaseCategories } = await supabase
        .from('categories')
        .select('*')
        .eq('category_type', activeTab)
        .eq('is_active', true)
        .order('display_order');

      if (supabaseCategories && supabaseCategories.length > 0) {
        setCategories(supabaseCategories);
        // 最初の未決カテゴリを自動選択
        const firstUndecided = supabaseCategories.find(cat =>
          !cartItems.some(item => item.product.categoryName === cat.name)
        );
        if (!selectedCategoryId) {
          setSelectedCategoryId(firstUndecided?.id || supabaseCategories[0]?.id || null);
        }
      } else {
        // Supabaseにデータがない場合は静的データからカテゴリを生成
        let products: CatalogProduct[] = [];
        if (activeTab === 'exterior') {
          products = exteriorProducts;
        } else if (activeTab === 'interior') {
          products = interiorProducts;
        } else if (activeTab === 'equipment') {
          products = waterProducts;
        }

        const categoryMap = new Map<string, Category>();
        products.forEach((p, idx) => {
          if (p.categoryName && !categoryMap.has(p.categoryName)) {
            categoryMap.set(p.categoryName, {
              id: `cat-${activeTab}-${idx}`,
              parent_id: null,
              name: p.categoryName,
              slug: p.categoryName.toLowerCase().replace(/\s+/g, '-'),
              description: null,
              category_type: activeTab as 'exterior' | 'interior' | 'equipment',
              is_active: true,
              is_required: false,
              display_order: idx,
              icon: null,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            });
          }
        });

        const generatedCategories = Array.from(categoryMap.values());
        setCategories(generatedCategories);

        const firstUndecided = generatedCategories.find(cat =>
          !cartItems.some(item => item.product.categoryName === cat.name)
        );
        if (!selectedCategoryId) {
          setSelectedCategoryId(firstUndecided?.id || generatedCategories[0]?.id || null);
        }
      }
    };

    fetchCategories();
  }, [activeTab, exteriorProducts, interiorProducts, waterProducts, cartItems]);

  // 静的データからItemWithDetails形式のデータを取得
  const getStaticItems = useCallback((tab: string): ItemWithDetails[] => {
    let products: CatalogProduct[] = [];
    if (tab === 'exterior') {
      products = exteriorProducts;
    } else if (tab === 'interior') {
      products = interiorProducts;
    } else if (tab === 'equipment') {
      products = waterProducts;
    }
    return products.map(p => convertStaticToItemWithDetails(p, tab));
  }, [exteriorProducts, interiorProducts, waterProducts]);

  // アイテム取得 - Supabaseから取得、データがない場合は静的データにフォールバック
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Supabaseからアイテムを取得（カテゴリでフィルタ）
        let query = supabase
          .from('items')
          .select(`
            *,
            category:categories(*),
            unit:units(*),
            variants:item_variants(
              *,
              images:item_variant_images(*)
            ),
            pricing:item_pricing(
              *,
              product:products(*)
            )
          `)
          .eq('is_active', true)
          .order('display_order');

        // カテゴリでフィルタ
        if (selectedCategoryId) {
          query = query.eq('category_id', selectedCategoryId);
        } else {
          // カテゴリタイプでフィルタ（カテゴリ未選択時）
          query = query.eq('category.category_type', activeTab);
        }

        const { data: supabaseItems, error: fetchError } = await query;

        if (fetchError) {
          logger.error('Supabase fetch error:', fetchError);
        }

        // Supabaseにデータがあり、バリアント情報も含まれている場合はそれを使用
        if (supabaseItems && supabaseItems.length > 0) {
          // バリアント情報があるかチェック
          const hasVariants = supabaseItems.some(item => item.variants && item.variants.length > 0);

          if (hasVariants) {
            // カテゴリタイプでフィルタ（JOINの条件が効かない場合の補完）
            const filteredItems = supabaseItems.filter(item =>
              item.category?.category_type === activeTab
            );
            setItems(filteredItems.length > 0 ? filteredItems : supabaseItems);
            setIsLoading(false);
            return;
          }
        }

        // Supabaseにデータがない、またはバリアント情報がない場合は静的データを使用
        const staticItems = getStaticItems(activeTab);

        // カテゴリでフィルタリング
        let filteredStaticItems = staticItems;
        if (selectedCategoryId) {
          const selectedCategory = categories.find(c => c.id === selectedCategoryId);
          if (selectedCategory) {
            filteredStaticItems = staticItems.filter(item =>
              item.category?.name === selectedCategory.name ||
              item.category_name === selectedCategory.name
            );
          }
        }

        setItems(filteredStaticItems);
      } catch (err) {
        logger.error('Error fetching items:', err);
        setError('データの取得に失敗しました');
        // エラー時も静的データにフォールバック
        const staticItems = getStaticItems(activeTab);
        setItems(staticItems);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [activeTab, selectedCategoryId, getStaticItems, categories]);

  // 利用可能なサブカテゴリと色を抽出
  const availableSubcategories = useMemo(() => {
    const subs = new Set<string>();
    items.forEach(item => {
      if (item.category_name) subs.add(item.category_name);
    });
    return Array.from(subs).sort((a, b) => a.localeCompare(b, 'ja'));
  }, [items]);

  const availableColors = useMemo(() => {
    const colors = new Set<string>();
    items.forEach(item => {
      item.variants?.forEach(v => {
        if (v.color_name) colors.add(v.color_name);
      });
    });
    return Array.from(colors).sort((a, b) => a.localeCompare(b, 'ja'));
  }, [items]);

  // フィルタリング（デバウンス適用）
  const filteredItems = useMemo(() => {
    const filtered = items.filter(item => {
      // 検索フィルター（あいまい検索対応）
      if (debouncedSearchTerm) {
        const term = debouncedSearchTerm.toLowerCase();
        // ひらがな→カタカナ変換
        const toKatakana = (str: string) => str.replace(/[\u3041-\u3096]/g, ch =>
          String.fromCharCode(ch.charCodeAt(0) + 0x60));
        // カタカナ→ひらがな変換
        const toHiragana = (str: string) => str.replace(/[\u30A1-\u30F6]/g, ch =>
          String.fromCharCode(ch.charCodeAt(0) - 0x60));

        const termKata = toKatakana(term);
        const termHira = toHiragana(term);
        const name = item.name.toLowerCase();
        const nameKata = toKatakana(name);
        const nameHira = toHiragana(name);
        const manu = (item.manufacturer || '').toLowerCase();
        const manuKata = toKatakana(manu);
        const model = (item.model_number || '').toLowerCase();

        const matches =
          name.includes(term) || name.includes(termKata) || name.includes(termHira) ||
          nameKata.includes(term) || nameKata.includes(termKata) ||
          nameHira.includes(term) || nameHira.includes(termHira) ||
          manu.includes(term) || manu.includes(termKata) ||
          manuKata.includes(term) || manuKata.includes(termKata) ||
          model.includes(term);

        if (!matches) return false;
      }
      // 標準/オプションフィルター
      const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
      if (filterType === 'standard' && pricing && !pricing.is_standard) return false;
      if (filterType === 'option' && pricing?.is_standard) return false;
      // サブカテゴリフィルター
      if (selectedSubcategory && item.category_name !== selectedSubcategory) return false;
      // 色フィルター
      if (selectedColor) {
        const hasColor = item.variants?.some(v => v.color_name === selectedColor);
        if (!hasColor) return false;
      }
      // 価格フィルター
      if (priceMax > 0) {
        const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
        const price = pricing?.price ?? 0;
        if (price > priceMax) return false;
      }
      // お気に入りフィルター
      if (showFavoritesOnly && !favorites.includes(item.id)) {
        return false;
      }
      // 廃番フィルター
      if (hideDiscontinued && item.is_discontinued) {
        return false;
      }
      return true;
    });

    // ソート: サブカテゴリ → 標準品優先 → メーカー名
    return filtered.sort((a, b) => {
      // 1. サブカテゴリでグループ化
      const subA = a.category_name || '';
      const subB = b.category_name || '';
      if (subA !== subB) return subA.localeCompare(subB, 'ja');

      // 2. 標準品を先に
      const pricingA = a.pricing?.find(p => p.product?.code === selectedPlanId);
      const pricingB = b.pricing?.find(p => p.product?.code === selectedPlanId);
      const isStandardA = pricingA?.is_standard ?? false;
      const isStandardB = pricingB?.is_standard ?? false;
      if (isStandardA !== isStandardB) return isStandardA ? -1 : 1;

      // 3. メーカー名順
      const manuA = a.manufacturer || '';
      const manuB = b.manufacturer || '';
      if (manuA !== manuB) return manuA.localeCompare(manuB, 'ja');

      // 4. 商品名順
      return (a.name || '').localeCompare(b.name || '', 'ja');
    });
  }, [items, debouncedSearchTerm, filterType, selectedPlanId, selectedSubcategory, selectedColor, priceMax, showFavoritesOnly, favorites, hideDiscontinued]);

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
    const cartProduct = convertToCartItem(item);
    addItem(cartProduct, 1);
    useCartStore.getState().setSelectedPlanId(selectedPlanId);

    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), ANIMATION_DURATIONS.CART_ITEM_HIGHLIGHT);

    // Toast通知
    toast.success('追加しました', item.name);

    // マイルストーン演出
    const newCount = cartItems.length + 1;
    if (CART_MILESTONES.CONFETTI_THRESHOLDS.includes(newCount)) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), ANIMATION_DURATIONS.CONFETTI);
    }
  }, [addItem, cartItems.length, selectedPlanId, toast]);

  const handleRemoveFromCart = useCallback((itemId: string) => {
    const item = cartItems.find(i => i.product.id === itemId);
    removeItem(itemId);
    if (item) {
      toast.info('解除しました', item.product.name);
    }
  }, [removeItem, cartItems, toast]);

  // 標準品一括選択
  const handleSelectAllStandard = useCallback(() => {
    const standardItems = filteredItems.filter(item => {
      const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
      return pricing?.is_standard && !cartItemIds.has(item.id);
    });

    if (standardItems.length === 0) {
      toast.info('選択可能な標準品がありません');
      return;
    }

    standardItems.forEach(item => {
      const cartProduct = convertToCartItem(item);
      addItem(cartProduct, 1);
    });

    toast.success(`${standardItems.length}件の標準品を選択しました`);

    // 紙吹雪
    if (standardItems.length >= 3) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), ANIMATION_DURATIONS.CONFETTI);
    }
  }, [filteredItems, selectedPlanId, cartItemIds, addItem, toast]);

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
      if (stepId === 'exterior') return CATEGORY_GROUPS.EXTERIOR.some(c => cat?.includes(c));
      if (stepId === 'interior') return CATEGORY_GROUPS.INTERIOR.some(c => cat?.includes(c));
      return CATEGORY_GROUPS.EQUIPMENT.some(c => cat?.includes(c));
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
      setActiveTab(STEPS[currentIndex + 1].id);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), ANIMATION_DURATIONS.CONFETTI);
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

  // レコメンドから商品を選択した時の処理
  const handleRecommendedProductSelect = useCallback((product: CatalogProduct) => {
    setSelectedProductForDetail(product);
    setIsDetailModalOpen(true);
  }, []);

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
      <style>{catalogAnimations}</style>
      <Confetti show={showConfetti} />

      {/* 顧客モード時のウェルカムバナー */}
      {isCustomerMode && <CustomerWelcomeBanner />}

      <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900">
        {/* ヘッダー - 統一デザイン */}
        <div className="bg-teal-600 text-white shadow-lg">
          {/* ステップナビゲーション */}
          <div className="px-4 py-4">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
              <div className="flex items-center gap-2 sm:gap-4" data-tutorial="main-tabs">
                {STEPS.map((step, index) => {
                  const isActive = step.id === activeTab;
                  const stepCount = getStepCount(step.id);
                  const Icon = step.icon;

                  return (
                    <React.Fragment key={step.id}>
                      <button
                        onClick={() => setActiveTab(step.id)}
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
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2" data-tutorial="cart-button">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-bold text-lg">{cartItems.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* プログレスバー - シンプル化 */}
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
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white rounded-full transition-all duration-500"
                        style={{ width: `${catProgressPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-white/90 whitespace-nowrap">
                      {decidedCount}/{totalCount}
                    </span>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>

        {/* カテゴリナビゲーション - 決定/未決ステータス表示 */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto scrollbar-thin" data-tutorial="category-list">
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
          {/* サイドバー (PC) - 未決/決定表示 - スティッキー */}
          <div className="hidden lg:flex flex-col w-72 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 sticky top-0 h-[calc(100vh-180px)] overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* プラン選択（コンパクト） */}
              <div className="flex items-center gap-2" data-tutorial="plan-selector">
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
                    {/* 進捗バー - シンプル */}
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          {STEPS.find(s => s.id === activeTab)?.label}
                        </span>
                        <span className="text-sm font-bold text-teal-600">
                          {decidedCategories.length}/{categories.length}
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-500 rounded-full transition-all duration-500"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* 未決項目 */}
                    {undecidedCategories.length > 0 && (
                      <div>
                        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                          未選択 ({undecidedCategories.length})
                        </h3>
                        <div className="space-y-1">
                          {undecidedCategories.map(cat => (
                            <button
                              key={cat.id}
                              onClick={() => setSelectedCategoryId(cat.id)}
                              aria-label={`${cat.name}カテゴリを選択`}
                              className={`w-full flex items-center justify-between p-2.5 rounded-lg text-sm transition-all ${
                                selectedCategoryId === cat.id
                                  ? 'bg-teal-50 border border-teal-300 text-teal-700'
                                  : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                              }`}
                            >
                              <span className="font-medium">{cat.name}</span>
                              <ChevronRight className="w-4 h-4 text-gray-400" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* 決定項目 */}
                    {decidedCategories.length > 0 && (
                      <div>
                        <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          選択済み ({decidedCategories.length})
                        </h3>
                        <div className="space-y-1">
                          {decidedCategories.map(cat => {
                            const selectedItems = cartItems.filter(
                              item => item.product.categoryName === cat.name
                            );
                            return (
                              <button
                                key={cat.id}
                                onClick={() => setSelectedCategoryId(cat.id)}
                                aria-label={`${cat.name}カテゴリを編集`}
                                className={`w-full p-2.5 rounded-lg text-sm transition-all text-left ${
                                  selectedCategoryId === cat.id
                                    ? 'bg-emerald-50 border border-emerald-300'
                                    : 'bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-200'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-medium text-gray-700">{cat.name}</span>
                                  <span className="text-xs text-emerald-600 font-medium">
                                    {selectedItems.length}件
                                  </span>
                                </div>
                                <p className="text-xs text-gray-500 truncate mt-0.5">
                                  {selectedItems.map(i => i.product.name).join(', ')}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}

              {/* お気に入り - シンプル */}
              {favorites.length > 0 && (
                <div className="pt-3 border-t border-gray-100">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-pink-500" />
                    お気に入り ({favorites.length})
                  </h3>
                  <div className="space-y-1">
                    {favorites.slice(0, 3).map(favId => {
                      const item = items.find(i => i.id === favId);
                      if (!item) return null;
                      return (
                        <button
                          key={favId}
                          onClick={() => handleOpenDetail(item)}
                          aria-label={`${item.name}を表示`}
                          className="w-full flex items-center justify-between p-2 bg-white hover:bg-gray-50 rounded-lg text-sm transition-all border border-gray-200"
                        >
                          <span className="text-gray-700 truncate">{item.name}</span>
                          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* 最近見た商品 - シンプル */}
              {recentlyViewed.length > 0 && (
                <div className="pt-3 border-t border-gray-100">
                  <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    履歴
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {recentlyViewed.slice(0, 5).map(viewedId => {
                      const item = items.find(i => i.id === viewedId);
                      if (!item) return null;
                      return (
                        <button
                          key={viewedId}
                          onClick={() => handleOpenDetail(item)}
                          aria-label={`${item.name}を表示`}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs text-gray-600 transition-colors truncate max-w-[120px]"
                        >
                          {item.name}
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
              <div className="pt-3 border-t border-gray-100">
                {isCurrentStepComplete ? (
                  <button
                    onClick={goToNextStep}
                    aria-label="次のステップへ進む"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors"
                  >
                    次のステップへ
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : isCurrentCategoryDecided && undecidedCategories.length > 0 ? (
                  <button
                    onClick={goToNextCategory}
                    aria-label="次のカテゴリへ進む"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-medium transition-colors"
                  >
                    次のカテゴリへ
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {/* メインエリア */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* 検索バー＋フィルター */}
            <div className="sticky top-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-b border-gray-100 dark:border-gray-700 z-10 p-3">
              <div className="flex items-center gap-2 max-w-4xl mx-auto">
                {/* 検索 */}
                <div className="relative flex-1">
                  <label htmlFor="catalog-search" className="sr-only">商品を検索</label>
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                  <input
                    id="catalog-search"
                    type="text"
                    placeholder="検索... (/ でフォーカス)"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border-0 rounded-xl text-sm focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-gray-600 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  />
                  {searchTerm ? (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full"
                    >
                      <X className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                    </button>
                  ) : (
                    <span className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 dark:text-gray-500 bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded">
                      /
                    </span>
                  )}
                </div>

                {/* アクションボタン群 - シンプル化 */}
                <div className="hidden sm:flex items-center gap-1">
                  <button
                    onClick={handleSelectAllStandard}
                    className="p-2.5 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors"
                    title="標準品を一括選択"
                    aria-label="標準品を一括選択"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setQuickSelectMode(!quickSelectMode)}
                    className={`p-2.5 rounded-lg transition-colors ${
                      quickSelectMode
                        ? 'bg-amber-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                    title="クイック選択モード (Q)"
                    aria-label="クイック選択モード"
                  >
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* モバイル用フィルターバー */}
            <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-3 py-2">
              <div className="flex items-center gap-2">
                {/* プラン選択 */}
                <label htmlFor="mobile-plan-select" className="sr-only">プランを選択</label>
                <select
                  id="mobile-plan-select"
                  value={selectedPlanId}
                  onChange={(e) => setSelectedPlanId(e.target.value)}
                  className="flex-1 px-3 py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-teal-500"
                  aria-label="プランを選択"
                >
                  {plans.map(plan => (
                    <option key={plan.id} value={plan.code}>{plan.name}</option>
                  ))}
                </select>

                {/* タイプフィルター */}
                <div className="flex bg-gray-100 dark:bg-gray-700 p-1 rounded-xl">
                  {[
                    { value: 'all', label: 'すべて', color: 'gray' },
                    { value: 'standard', label: '標準', color: 'teal' },
                    { value: 'option', label: 'OP', color: 'orange' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFilterType(opt.value as FilterTypeValue)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                        filterType === opt.value
                          ? opt.value === 'standard'
                            ? 'bg-teal-500 text-white shadow-sm'
                            : opt.value === 'option'
                            ? 'bg-orange-500 text-white shadow-sm'
                            : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-200 shadow-sm'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                {/* お気に入りフィルター */}
                {favorites.length > 0 && (
                  <button
                    onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                    className={`p-2.5 rounded-xl transition-all flex items-center gap-1.5 ${
                      showFavoritesOnly
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-pink-500'
                    }`}
                    title={showFavoritesOnly ? 'すべて表示' : `お気に入りのみ (${favorites.length})`}
                  >
                    <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
                    {showFavoritesOnly && <span className="text-xs font-bold">{favorites.length}</span>}
                  </button>
                )}

                {/* クイック選択モード */}
                <button
                  onClick={() => setQuickSelectMode(!quickSelectMode)}
                  className={`p-2.5 rounded-xl transition-all ${
                    quickSelectMode
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                  }`}
                  title="クイック選択モード"
                >
                  <Zap className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* サブカテゴリ・色フィルター（カテゴリ選択時のみ表示） */}
            {selectedCategoryId && (availableSubcategories.length > 1 || availableColors.length > 1) && (
              <div className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-3 py-2">
                <div className="flex flex-wrap items-center gap-2">
                  {/* サブカテゴリフィルター */}
                  {availableSubcategories.length > 1 && (
                    <div className="flex items-center gap-1">
                      <label htmlFor="subcategory-filter" className="text-xs text-gray-500 dark:text-gray-400">種類:</label>
                      <select
                        id="subcategory-filter"
                        value={selectedSubcategory}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                        className="px-2 py-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">すべて ({availableSubcategories.length}種)</option>
                        {availableSubcategories.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {/* 色フィルター */}
                  {availableColors.length > 1 && (
                    <div className="flex items-center gap-1">
                      <label htmlFor="color-filter" className="text-xs text-gray-500 dark:text-gray-400">色:</label>
                      <select
                        id="color-filter"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="px-2 py-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">すべての色 ({availableColors.length}色)</option>
                        {availableColors.map(color => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {/* 価格フィルター */}
                  <div className="flex items-center gap-1">
                    <label htmlFor="price-filter" className="text-xs text-gray-500 dark:text-gray-400">上限:</label>
                    <select
                      id="price-filter"
                      value={priceMax}
                      onChange={(e) => setPriceMax(parseInt(e.target.value, 10))}
                      className="px-2 py-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-teal-500"
                    >
                      <option value="0">上限なし</option>
                      <option value="10000">1万円以下</option>
                      <option value="30000">3万円以下</option>
                      <option value="50000">5万円以下</option>
                      <option value="100000">10万円以下</option>
                      <option value="200000">20万円以下</option>
                    </select>
                  </div>
                  {/* 廃番表示切替 */}
                  <label className="flex items-center gap-1.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={!hideDiscontinued}
                      onChange={(e) => setHideDiscontinued(!e.target.checked)}
                      className="w-3.5 h-3.5 rounded border-gray-300 text-teal-500 focus:ring-teal-500"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">廃番も表示</span>
                  </label>
                  {/* フィルタークリア */}
                  {(selectedSubcategory || selectedColor || priceMax > 0) && (
                    <button
                      onClick={() => {
                        setSelectedSubcategory('');
                        setSelectedColor('');
                        setPriceMax(0);
                      }}
                      className="px-2 py-1 text-xs text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      クリア
                    </button>
                  )}
                  {/* 結果件数 */}
                  <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">
                    {filteredItems.length}件
                  </span>
                </div>
              </div>
            )}

            {/* 商品グリッド */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 pb-24 lg:pb-4" data-tutorial="product-grid">
              {/* 最近閲覧した商品 */}
              <RecentlyViewed
                onProductClick={(productId) => {
                  const item = items.find(i => i.id === productId);
                  if (item) {
                    setSelectedProductForDetail(convertToCatalogProduct(item));
                  }
                }}
                maxItems={6}
              />

              {isLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {[...Array(10)].map((_, i) => <SkeletonCard key={i} />)}
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-red-500 dark:text-red-400 font-medium mb-2">{error}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    接続を確認して再試行してください
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setError(null)}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 text-sm"
                    >
                      エラーをクリア
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 text-sm"
                    >
                      再読み込み
                    </button>
                  </div>
                </div>
              ) : filteredItems.length === 0 ? (
                <EmptyState searchTerm={searchTerm} onClear={() => setSearchTerm('')} />
              ) : (
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
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg safe-area-pb">
          <div className="flex items-center justify-between p-3 gap-3">
            {/* 進捗表示 */}
            <button
              onClick={() => setShowMobileProgress(true)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-xl"
            >
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 -rotate-90">
                  <circle cx="20" cy="20" r="16" fill="none" className="stroke-gray-200 dark:stroke-gray-600" strokeWidth="4" />
                  <circle
                    cx="20" cy="20" r="16" fill="none" stroke="#14b8a6" strokeWidth="4"
                    strokeDasharray={`${currentCategoryProgress} 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-200">
                  {decidedCategories.length}/{categories.length}
                </span>
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 dark:text-gray-400">進捗</p>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-200">
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
              <div className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-xl font-medium">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                {categories.find(c => c.id === selectedCategoryId)?.name || 'カテゴリ'}を選択中
              </div>
            )}

            {/* カート */}
            <button
              onClick={onCartClick}
              className="relative p-3 bg-teal-500 text-white rounded-xl active:scale-95 transition-transform"
              aria-label={`カートを開く（${cartItems.length}件）`}
            >
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
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 rounded-t-3xl shadow-2xl max-h-[70vh] overflow-y-auto animate-slide-up">
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">選択状況</h3>
                  <button
                    onClick={() => setShowMobileProgress(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                  >
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
                {/* 進捗バー */}
                <div className="mt-3 bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${currentCategoryProgress}%` }}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {decidedCategories.length}/{categories.length} カテゴリ完了
                </p>
              </div>

              <div className="p-4 space-y-4">
                {/* 未決項目 */}
                {undecidedCategories.length > 0 && (
                  <div>
                    <h4 className="font-bold text-sm text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-2">
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
                          className="w-full flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800"
                        >
                          <span className="font-medium text-gray-700 dark:text-gray-200">{cat.name}</span>
                          <ChevronRight className="w-5 h-5 text-orange-400" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 決定項目 */}
                {decidedCategories.length > 0 && (
                  <div>
                    <h4 className="font-bold text-sm text-teal-600 dark:text-teal-400 mb-2 flex items-center gap-2">
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
                            className="w-full p-3 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-200 dark:border-teal-800 text-left"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-teal-700 dark:text-teal-300">{cat.name}</span>
                              <span className="text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full">
                                {selectedItems.length}件
                              </span>
                            </div>
                            <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
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
        allProducts={catalogProducts}
        onProductSelect={handleRecommendedProductSelect}
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
                  // RoomInteriorSelector内部でカート追加処理あり
                  if (selections.length > 0) {
                    toast.info('内装設定', `${selections.length}件の部屋設定が変更されました`);
                  }
                }}
              />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
