import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, ClipboardCheck, Check, Star, ChevronRight, ChevronLeft, Home, X, FileDown, HelpCircle, Eye, Flame } from 'lucide-react';
import { useToast } from '../common/Toast';
import { useTimeout } from '../../hooks/useTimeout';
import { useDebounce } from '../../hooks/useDebounce';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { createLogger } from '../../lib/logger';

const logger = createLogger('CatalogWithTabs');
import { useCartStore } from '../../stores/useCartStore';
import { useProductStore } from '../../stores/useProductStore';
import { useFavoritesStore } from '../../stores/useFavoritesStore';
import { sanitizeSearchQuery } from '../../lib/sanitize';
import { ANIMATION_DURATIONS, CART_MILESTONES, CATEGORY_GROUPS } from '../../lib/constants';
import type { ItemWithDetails, Category, Product, ItemVariant } from '../../types/database';
// RecommendationPanel removed - 不要
// ProductDetailModal removed - モーダル不使用
import { RoomInteriorSelector } from '../interior/RoomInteriorSelector';
import { useCustomerMode } from '../customer/CustomerModeWrapper';
import * as Dialog from '@radix-ui/react-dialog';
import type { Product as CatalogProduct } from '../../types/product';
import { ManufacturerSelector, SelectionBar } from './ManufacturerSelector';
import { getManufacturersForCategory, hasSeriesSelection, type ManufacturerConfig, type ManufacturerSeries } from '../../config/waterEquipmentConfig';
import { getCategoryOrderConfig } from '../../config/categoryOrder';

// 抽出したコンポーネント・ユーティリティ
import { ItemCard } from './ItemCard';
import { catalogAnimations, SkeletonCard, EmptyState, Confetti } from './CatalogUIComponents';
import {
  convertToCartItem,
  convertStaticToItemWithDetails,
  convertToCatalogProduct,
  STEPS,
  DESIGN_CATEGORIES,
  FURNITURE_CATEGORIES,
  ELECTRICAL_CATEGORIES,
  getRecommendBadge,
  getNotNeededOption,
  isHiddenCategory,
  deduplicateItems,
} from './catalogUtils';
import { NotNeededCard } from './NotNeededCard';
import { RoomSelectionModal } from './RoomSelectionModal';
import { ActionChecklist } from './ActionChecklist';
import { BeginnerGuide } from './BeginnerGuide';
import { EstimateExportDialog } from '../estimate/EstimateExportDialog';
import { useConfirmDialog } from '../common/ConfirmDialog';
import { useSelectionStore } from '../../stores/useSelectionStore';
import { ICProposalSelector, type ICProposalSelection } from './ICProposalSelector';
import { AirconSelector } from './AirconSelector';
import { EntranceDoorSelector } from './EntranceDoorSelector';
import { DiningTableSelector } from './DiningTableSelector';
import { StairSelector } from './StairSelector';
import { MultiColorAreaSelector } from './MultiColorAreaSelector';
import { BaseBuildingSelector } from './BaseBuildingSelector';
import { PorchTileSelector } from './PorchTileSelector';
import { PageHeader } from './PageHeader';
import { Pagination, ITEMS_PER_PAGE } from './Pagination';
import { CategorySelectionCard } from './CategorySelectionCard';
import { SelectionStatusBar } from './SelectionStatusBar';
import {
  EXTERIOR_WALL_MATERIAL_TYPES,
  EXTERIOR_FACILITY_TYPES,
  EXTERIOR_MATERIAL_TYPES,
  BASE_FLOOR_TYPES,
  PERIPHERAL_PARTS_TYPES,
  GARAGE_SHUTTER_OPTIONS,
  AWNING_OPTIONS,
  MULTI_COLOR_CATEGORY_NAMES,
} from '../../config/categorySelectorConfig';

interface CatalogWithTabsProps {
  onCartClick?: () => void;
}

export const CatalogWithTabs: React.FC<CatalogWithTabsProps> = ({ onCartClick }) => {
  // URLパラメータ（categoryIdはslugとして扱う）
  const { step = 'exterior', categoryId: urlCategorySlug, productId: urlProductId } = useParams<{
    step?: string;
    categoryId?: string;
    productId?: string;
  }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // お客様モード判定（早期に取得）
  const { isCustomerMode } = useCustomerMode();

  // URLからactiveTabを設定
  // お客様モードでは設計タブにアクセスできない
  // 'other'タブ（カーテン・家具のIC提案）も許可
  const activeTab = (['design', 'exterior', 'interior', 'equipment', 'electrical', 'furniture', 'other'].includes(step) ? step : 'exterior') as 'design' | 'exterior' | 'interior' | 'equipment' | 'electrical' | 'furniture' | 'other';
  const selectedCategorySlug = urlCategorySlug || null;

  // お客様モードで設計タブの閲覧専用フラグ
  const isDesignReadOnly = isCustomerMode && activeTab === 'design';

  // URLクエリパラメータから検索・フィルターを取得
  const searchTerm = searchParams.get('q') || '';
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const filterType = (searchParams.get('filter') as 'all' | 'standard' | 'option') || 'all';
  const selectedMaterialType = searchParams.get('material') || ''; // 素材タイプフィルター
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

  const setSelectedMaterialType = useCallback((material: string) => {
    setSearchParams(prev => {
      if (material) {
        prev.set('material', material);
      } else {
        prev.delete('material');
      }
      // 素材タイプを変更したらサブカテゴリをリセット
      prev.delete('sub');
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
  const [showGuide, setShowGuide] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // 選択解除確認ダイアログ
  const { confirm: confirmRemoval, ConfirmDialogComponent: RemovalConfirmDialog } = useConfirmDialog();

  // 見積書出力ダイアログ
  const [isEstimateDialogOpen, setIsEstimateDialogOpen] = useState(false);

  // 部屋別内装プランナー
  const [isRoomPlannerOpen, setIsRoomPlannerOpen] = useState(false);

  // お気に入りフィルター
  const [showFavoritesOnly] = useState(false);

  // 廃番商品を非表示（デフォルトで非表示）
  const [hideDiscontinued, setHideDiscontinued] = useState(true);

  // 選択状態ストア（永続化対応）
  const {
    setNotNeeded,
    setProductSelection,
    clearSelection,
    getSelectionStatus,
    canEdit,
  } = useSelectionStore();

  // 部屋選択モーダル用
  const [roomSelectionModal, setRoomSelectionModal] = useState<{
    isOpen: boolean;
    categoryName: string;
    productId: string;
    productName: string;
    variantId?: string;
    variantName?: string;
  } | null>(null);

  // 水回り設備のメーカー/シリーズ選択
  const [selectedManufacturer, setSelectedManufacturer] = useState<ManufacturerConfig | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<ManufacturerSeries | null>(null);

  // ページネーション（12アイテム/ページ）
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = ITEMS_PER_PAGE; // 12件/ページ（6列×2行）

  // アクションチェックリスト表示切り替え
  const [showActionChecklist, setShowActionChecklist] = useState(true);

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

  // 静的データ（フォールバック用）
  const { exteriorProducts, interiorProducts, waterProducts, furnitureProducts } = useProductStore();

  // お気に入り・履歴
  const { favorites, toggleFavorite, isFavorite } = useFavoritesStore();
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
  const [_quickSelectMode, setQuickSelectMode] = useState(false);

  // タブ切替（URL遷移）
  const setActiveTab = useCallback((newTab: 'design' | 'exterior' | 'interior' | 'equipment' | 'electrical' | 'furniture' | 'other') => {
    navigate(`/catalog/${newTab}`);
  }, [navigate]);

  // カテゴリ選択（URL遷移） - IDからslugを検索してnavigateする
  const setSelectedCategoryId = useCallback((catId: string | null) => {
    if (catId) {
      // IDからカテゴリを検索してslugを取得
      const category = categories.find(c => c.id === catId);
      if (category?.slug) {
        navigate(`/catalog/${activeTab}/${category.slug}`);
      } else {
        // フォールバック: IDをそのまま使用
        navigate(`/catalog/${activeTab}/${catId}`);
      }
    } else {
      navigate(`/catalog/${activeTab}`);
    }
  }, [navigate, activeTab, categories]);

  // プラン取得
  useEffect(() => {
    const fetchPlans = async () => {
      if (!isSupabaseConfigured) return; // オフラインモード時はスキップ
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      if (data) setPlans(data);
    };
    fetchPlans();
  }, []);

  // カテゴリ取得 - Supabaseから取得、フォールバックとして静的データを使用
  useEffect(() => {
    const fetchCategories = async () => {
      // 「設計」タブの場合は、外装と設備からDESIGN_CATEGORIESを抽出
      if (activeTab === 'design') {
        let uniqueDesignCategories: Category[] = [];

        // Supabaseが設定されている場合のみAPIを呼び出す
        if (isSupabaseConfigured) {
          // 外装と設備の両方からカテゴリを取得
          const { data: extCategories } = await supabase
            .from('categories')
            .select('*')
            .eq('category_type', 'exterior')
            .eq('is_active', true)
            .order('display_order');

          const { data: eqCategories } = await supabase
            .from('categories')
            .select('*')
            .eq('category_type', 'equipment')
            .eq('is_active', true)
            .order('display_order');

          const allCategories = [...(extCategories || []), ...(eqCategories || [])];
          // DESIGN_CATEGORIESに含まれるもののみをフィルタ（完全一致のみ）
          const designCategories = allCategories.filter(cat =>
            DESIGN_CATEGORIES.some(dc => cat.name === dc)
          );
          // 重複除去（同名カテゴリがある場合は最初のものを使用）
          uniqueDesignCategories = designCategories.filter((cat, index, self) =>
            index === self.findIndex(c => c.name === cat.name)
          );
        }

        if (uniqueDesignCategories.length > 0) {
          setCategories(uniqueDesignCategories);
          const firstUndecided = uniqueDesignCategories.find(cat =>
            !cartItems.some(item => item.product.categoryName === cat.name)
          );
          // URLでカテゴリが指定されていない場合のみ自動選択
          if (!selectedCategoryId && !selectedCategorySlug) {
            setSelectedCategoryId(firstUndecided?.id || uniqueDesignCategories[0]?.id || null);
          }
        } else {
          // 静的データからフォールバック
          const allProducts = [...exteriorProducts, ...waterProducts];
          const categoryMap = new Map<string, Category>();
          allProducts.forEach((p, idx) => {
            if (p.categoryName && !categoryMap.has(p.categoryName) &&
                DESIGN_CATEGORIES.some(dc => p.categoryName === dc)) {
              categoryMap.set(p.categoryName, {
                id: `cat-design-${idx}`,
                parent_id: null,
                name: p.categoryName,
                slug: p.categoryName.toLowerCase().replace(/\s+/g, '-'),
                description: null,
                category_type: 'exterior' as const,
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
          // URLでカテゴリが指定されていない場合のみ自動選択
          if (!selectedCategoryId && !selectedCategorySlug && generatedCategories.length > 0) {
            setSelectedCategoryId(generatedCategories[0]?.id || null);
          }
        }
        return;
      }

      // 通常のタブ（外装・内装・設備）の場合
      let supabaseCategories: Category[] | null = null;
      if (isSupabaseConfigured) {
        const { data } = await supabase
          .from('categories')
          .select('*')
          .eq('category_type', activeTab)
          .eq('is_active', true)
          .order('display_order');
        supabaseCategories = data;
      }

      if (supabaseCategories && supabaseCategories.length > 0) {
        // DESIGN_CATEGORIESを除外（設計タブに移動したため）
        const filteredCategories = activeTab === 'interior'
          ? supabaseCategories
          : supabaseCategories.filter(cat =>
              !DESIGN_CATEGORIES.some(dc => cat.name === dc)
            );
        // 非表示カテゴリを除外（天井クロスなど壁クロスに連動するもの）
        const visibleCategories = filteredCategories.filter(cat =>
          !isHiddenCategory(cat.name)
        );
        // 重複除去（同名カテゴリがある場合は最初のものを使用）
        const uniqueCategories = visibleCategories.filter((cat, index, self) =>
          index === self.findIndex(c => c.name === cat.name)
        );
        // categoryOrder.tsの設定に従ってソート
        const catalogType = activeTab === 'exterior' ? 'exterior'
          : activeTab === 'interior' ? 'interior'
          : activeTab === 'equipment' ? 'water'
          : activeTab === 'electrical' ? 'electrical'
          : 'furniture';
        const orderConfig = getCategoryOrderConfig(catalogType);
        const orderMap = new Map(orderConfig.map((c, i) => [c.name, i]));
        const sortedCategories = [...uniqueCategories].sort((a, b) => {
          const orderA = orderMap.get(a.name) ?? 999;
          const orderB = orderMap.get(b.name) ?? 999;
          if (orderA !== orderB) return orderA - orderB;
          // 順序が同じ場合はdisplay_order、それも同じなら名前順
          if (a.display_order !== b.display_order) return a.display_order - b.display_order;
          return a.name.localeCompare(b.name, 'ja');
        });
        setCategories(sortedCategories);
        // 最初の未決カテゴリを自動選択（URLでカテゴリが指定されていない場合のみ）
        const firstUndecided = uniqueCategories.find(cat =>
          !cartItems.some(item => item.product.categoryName === cat.name)
        );
        if (!selectedCategoryId && !selectedCategorySlug) {
          setSelectedCategoryId(firstUndecided?.id || uniqueCategories[0]?.id || null);
        }
      } else {
        // Supabaseにデータがない場合は静的データからカテゴリを生成
        let products: CatalogProduct[] = [];
        if (activeTab === 'exterior') {
          products = exteriorProducts;
        } else if (activeTab === 'interior') {
          // 内装タブ：ELECTRICAL_CATEGORIESとFURNITURE_CATEGORIESを除外
          products = interiorProducts.filter(p =>
            !ELECTRICAL_CATEGORIES.some(ec => p.categoryName.includes(ec) || ec.includes(p.categoryName)) &&
            !FURNITURE_CATEGORIES.some(fc => p.categoryName.includes(fc) || fc.includes(p.categoryName))
          );
        } else if (activeTab === 'equipment') {
          products = waterProducts;
        } else if (activeTab === 'electrical') {
          // 電気設備タブ：interiorProductsからELECTRICAL_CATEGORIESを抽出
          products = interiorProducts.filter(p =>
            ELECTRICAL_CATEGORIES.some(ec => p.categoryName.includes(ec) || ec.includes(p.categoryName))
          );
        } else if (activeTab === 'furniture') {
          products = furnitureProducts;
        }

        const categoryMap = new Map<string, Category>();
        products.forEach((p, idx) => {
          // DESIGN_CATEGORIESを除外（内装以外、furnitureは除外しない）
          const isDesignCategory = DESIGN_CATEGORIES.some(dc => p.categoryName === dc);
          // 非表示カテゴリを除外（天井クロスなど）
          const isHidden = isHiddenCategory(p.categoryName);
          if (p.categoryName && !categoryMap.has(p.categoryName) && !isHidden && (activeTab === 'interior' || activeTab === 'furniture' || !isDesignCategory)) {
            categoryMap.set(p.categoryName, {
              id: `cat-${activeTab}-${idx}`,
              parent_id: null,
              name: p.categoryName,
              slug: p.categoryName.toLowerCase().replace(/\s+/g, '-'),
              description: null,
              category_type: activeTab === 'furniture' ? 'interior' : activeTab as 'exterior' | 'interior' | 'equipment',
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
        // categoryOrder.tsの設定に従ってソート
        const catalogType = activeTab === 'exterior' ? 'exterior'
          : activeTab === 'interior' ? 'interior'
          : activeTab === 'equipment' ? 'water'
          : activeTab === 'electrical' ? 'electrical'
          : 'furniture';
        const orderConfig = getCategoryOrderConfig(catalogType);
        const orderMap = new Map(orderConfig.map((c, i) => [c.name, i]));
        const sortedCategories = generatedCategories.sort((a, b) => {
          const orderA = orderMap.get(a.name) ?? 999;
          const orderB = orderMap.get(b.name) ?? 999;
          if (orderA !== orderB) return orderA - orderB;
          if (a.display_order !== b.display_order) return a.display_order - b.display_order;
          return a.name.localeCompare(b.name, 'ja');
        });
        setCategories(sortedCategories);

        // URLでカテゴリが指定されていない場合のみ自動選択
        const firstUndecided = sortedCategories.find(cat =>
          !cartItems.some(item => item.product.categoryName === cat.name)
        );
        if (!selectedCategoryId && !selectedCategorySlug) {
          setSelectedCategoryId(firstUndecided?.id || sortedCategories[0]?.id || null);
        }
      }
    };

    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, exteriorProducts, interiorProducts, waterProducts, furnitureProducts, cartItems, selectedCategorySlug]); // selectedCategorySlugも依存配列に追加

  // slugからカテゴリIDを導出
  const selectedCategoryId = useMemo(() => {
    if (!selectedCategorySlug || categories.length === 0) return null;
    const category = categories.find(c => c.slug === selectedCategorySlug);
    return category?.id || null;
  }, [selectedCategorySlug, categories]);

  // タブ変更時にカテゴリが未選択の場合、最初のカテゴリを自動選択
  useEffect(() => {
    if (categories.length > 0 && !selectedCategorySlug) {
      const firstCategory = categories[0];
      if (firstCategory) {
        navigate(`/catalog/${activeTab}/${firstCategory.slug}`, { replace: true });
      }
    }
  }, [categories, selectedCategorySlug, activeTab, navigate]);

  // 静的データからItemWithDetails形式のデータを取得
  const getStaticItems = useCallback((tab: string): ItemWithDetails[] => {
    let products: CatalogProduct[] = [];
    if (tab === 'design') {
      // 設計タブ：外装と設備からDESIGN_CATEGORIESに該当するものを抽出
      const allProducts = [...exteriorProducts, ...waterProducts];
      products = allProducts.filter(p =>
        DESIGN_CATEGORIES.some(dc => p.categoryName === dc)
      );
    } else if (tab === 'exterior') {
      // 外装タブ：DESIGN_CATEGORIESを除外
      products = exteriorProducts.filter(p =>
        !DESIGN_CATEGORIES.some(dc => p.categoryName === dc)
      );
    } else if (tab === 'interior') {
      // 内装タブ：FURNITURE_CATEGORIESとELECTRICAL_CATEGORIESを除外
      products = interiorProducts.filter(p =>
        !FURNITURE_CATEGORIES.some(fc => p.categoryName.includes(fc) || fc.includes(p.categoryName)) &&
        !ELECTRICAL_CATEGORIES.some(ec => p.categoryName.includes(ec) || ec.includes(p.categoryName))
      );
    } else if (tab === 'electrical') {
      // 電気設備タブ：interiorProductsからELECTRICAL_CATEGORIESを抽出
      products = interiorProducts.filter(p =>
        ELECTRICAL_CATEGORIES.some(ec => p.categoryName.includes(ec) || ec.includes(p.categoryName))
      );
    } else if (tab === 'furniture') {
      // 家具・家電タブ：furnitureProductsを直接使用
      products = furnitureProducts;
    } else if (tab === 'equipment') {
      // 水廻り設備タブ：DESIGN_CATEGORIESを除外
      products = waterProducts.filter(p =>
        !DESIGN_CATEGORIES.some(dc => p.categoryName === dc)
      );
    }
    return products.map(p => convertStaticToItemWithDetails(p, tab === 'design' ? 'exterior' : (tab === 'furniture' || tab === 'electrical' ? 'interior' : tab)));
  }, [exteriorProducts, interiorProducts, waterProducts, furnitureProducts]);

  // アイテム取得 - Supabaseから取得、データがない場合は静的データにフォールバック
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      setError(null);

      try {
        let supabaseItems: ItemWithDetails[] | null = null;

        // Supabaseが設定されている場合のみAPIを呼び出す
        if (isSupabaseConfigured) {
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
          }
          // カテゴリ未選択時は全アイテムを取得し、後でJavaScriptでフィルタ

          const { data, error: fetchError } = await query;
          supabaseItems = data;

          if (fetchError) {
            logger.error('Supabase fetch error:', fetchError);
          }
        }

        // Supabaseにデータがある場合はSupabaseを優先使用
        if (supabaseItems && supabaseItems.length > 0) {
          // タブに応じてカテゴリタイプでフィルタ
          // activeTab → category_type マッピング:
          // - design: DESIGN_CATEGORIES名で抽出（exterior/equipment両方から）
          // - exterior: category_type='exterior'、DESIGN_CATEGORIES除外
          // - interior: category_type='interior'、ELECTRICAL/FURNITURE除外
          // - electrical: category_type='interior'、ELECTRICAL_CATEGORIESのみ
          // - furniture: category_type='other'
          // - equipment: category_type='equipment'、DESIGN_CATEGORIES除外
          let filteredItems = supabaseItems;

          if (activeTab === 'design') {
            filteredItems = supabaseItems.filter(item =>
              DESIGN_CATEGORIES.some(dc => item.category?.name === dc)
            );
          } else if (activeTab === 'exterior') {
            filteredItems = supabaseItems.filter(item =>
              item.category?.category_type === 'exterior' &&
              !DESIGN_CATEGORIES.some(dc => item.category?.name === dc)
            );
          } else if (activeTab === 'interior') {
            filteredItems = supabaseItems.filter(item =>
              item.category?.category_type === 'interior' &&
              !ELECTRICAL_CATEGORIES.some(ec => item.category?.name?.includes(ec) || ec.includes(item.category?.name || '')) &&
              !FURNITURE_CATEGORIES.some(fc => item.category?.name?.includes(fc) || fc.includes(item.category?.name || ''))
            );
          } else if (activeTab === 'electrical') {
            filteredItems = supabaseItems.filter(item =>
              item.category?.category_type === 'interior' &&
              ELECTRICAL_CATEGORIES.some(ec => item.category?.name?.includes(ec) || ec.includes(item.category?.name || ''))
            );
          } else if (activeTab === 'furniture') {
            filteredItems = supabaseItems.filter(item =>
              item.category?.category_type === 'other'
            );
          } else if (activeTab === 'equipment') {
            filteredItems = supabaseItems.filter(item =>
              item.category?.category_type === 'equipment' &&
              !DESIGN_CATEGORIES.some(dc => item.category?.name === dc)
            );
          }

          if (filteredItems.length > 0) {
            // 重複を除去して設定
            setItems(deduplicateItems(filteredItems));
            setIsLoading(false);
            return;
          }
        }

        // Supabaseにデータがない場合は静的データにフォールバック
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

        // 重複を除去して設定
        setItems(deduplicateItems(filteredStaticItems));
      } catch (err) {
        logger.error('Error fetching items:', err);
        setError('データの取得に失敗しました');
        // エラー時も静的データにフォールバック
        const staticItems = getStaticItems(activeTab);
        setItems(deduplicateItems(staticItems));
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [activeTab, selectedCategoryId, getStaticItems, categories]);

  // 現在のカテゴリ名を取得
  const currentCategoryName = useMemo(() => {
    if (!selectedCategoryId) return null;
    return categories.find(c => c.id === selectedCategoryId)?.name || null;
  }, [selectedCategoryId, categories]);

  // 水回り設備のメーカーリストを取得
  const waterEquipmentManufacturers = useMemo(() => {
    if (activeTab !== 'equipment' || !currentCategoryName) return [];
    return getManufacturersForCategory(currentCategoryName);
  }, [activeTab, currentCategoryName]);

  // カテゴリ変更時にメーカー/シリーズをリセット
  useEffect(() => {
    setSelectedManufacturer(null);
    setSelectedSeries(null);
  }, [selectedCategoryId]);

  // メーカー選択が必要かどうか
  const needsManufacturerSelection = waterEquipmentManufacturers.length > 0;

  // メーカー/シリーズ選択が完了しているか
  const isManufacturerSelectionComplete = useMemo(() => {
    if (!needsManufacturerSelection) return true;
    if (!selectedManufacturer) return false;
    // シリーズ選択が必要な場合
    if (hasSeriesSelection(selectedManufacturer) && !selectedSeries) return false;
    return true;
  }, [needsManufacturerSelection, selectedManufacturer, selectedSeries]);

  // noteカラムから素材タイプを判定するヘルパー関数
  const getMaterialTypeFromNote = (note: string | null | undefined): string => {
    if (!note) return '窯業系サイディング'; // デフォルトは窯業系
    const lowerNote = note.toLowerCase();
    if (lowerNote.includes('ガルバリウム') || lowerNote.includes('金属サイディング') || lowerNote.includes('金属系')) {
      return 'ガルバリウム鋼板';
    }
    if (lowerNote.includes('塗り壁') || lowerNote.includes('漆喰') || lowerNote.includes('ジョリパット') || lowerNote.includes('塗装仕上げ')) {
      return '塗り壁';
    }
    return '窯業系サイディング';
  };

  // 設計タブ用: 窓タイプ選択
  const WINDOW_TYPE_OPTIONS = [
    { id: 'apw330', name: 'APW330', description: '樹脂サッシ・ペアガラス（標準）' },
    { id: 'apw430', name: 'APW430', description: '樹脂サッシ・トリプルガラス', isOption: true },
  ];

  // 設計タブ用: ガス引込み選択
  const GAS_SUPPLY_OPTIONS = [
    { id: 'gas-supply-yes', name: 'あり', description: 'ガスを引き込む（乾太くん等）' },
    { id: 'gas-supply-no', name: 'なし', description: 'オール電化' },
  ];

  // 設計タブ用: 室内窓選択（有無のみ、種類・ガラスは内装タブ）
  const INTERIOR_WINDOW_OPTIONS = [
    { id: 'interior-window-yes', name: 'あり', description: '室内窓を設置する' },
    { id: 'interior-window-no', name: 'なし', description: '室内窓なし' },
  ];

  // 設計タブ用: 給湯器種類選択
  const WATER_HEATER_OPTIONS = [
    { id: 'ecocute', name: 'エコキュート', description: '電気給湯器（標準）', subcategory: 'エコキュート' },
    { id: 'ohisama', name: 'おひさまエコキュート', description: '太陽光連携型給湯器', subcategory: 'おひさまエコキュート' },
    { id: 'niagara', name: 'ナイアガラ出湯', description: '高圧給湯エコキュート', subcategory: 'ナイアガラ出湯' },
    { id: 'ecojozu', name: 'エコジョーズ', description: 'ガス給湯器（ガス引込み必要）', subcategory: 'エコジョーズ' },
  ];

  // 家具・家電タブ用: 乾太くん選択オプション
  const GAS_DRYER_OPTIONS = [
    { id: 'dryer-none', name: '選択しない', description: 'ガス乾燥機を設置しない', productId: 'furn-dryer-none', icon: '❌', price: 0 },
    { id: 'dryer-standard-5kg', name: 'スタンダード 5kg', description: '一般家庭向け（約52分で乾燥）', productId: 'furn-dryer-001', icon: '👕', price: 272000 },
    { id: 'dryer-deluxe-6kg', name: 'デラックス 6kg', description: '容量たっぷり・静音設計', productId: 'furn-dryer-002', icon: '👔', price: 297000 },
    { id: 'dryer-deluxe-9kg', name: 'デラックス 9kg', description: '大容量・大家族向け', productId: 'furn-dryer-003', icon: '🧥', price: 330000 },
  ];

  // 乾太くん関連オプション（架台・収納）
  const GAS_DRYER_ACCESSORIES = [
    { id: 'kadai', name: '専用架台', description: '乾太くん専用架台 ※乾太くん選択時のみ', productId: 'furn-dryer-004', price: 30000 },
    { id: 'unit', name: '専用収納ユニット', description: '乾太くん専用収納ユニット ※乾太くん選択時のみ', productId: 'furn-dryer-005', price: 140000 },
  ];

  // カートから設計選択状態を取得
  const hasGarageShutter = cartItems.some(item =>
    item.product.categoryName?.includes('ガレージシャッター') ||
    item.product.name?.includes('ガレージシャッター')
  );
  const hasAwning = cartItems.some(item =>
    item.product.categoryName === '庇' ||
    item.product.name?.includes('庇')
  );
  const hasAPW430 = cartItems.some(item =>
    item.product.name?.includes('APW430')
  );
  // ガス引込み選択状態をチェック
  const hasGasSupply = cartItems.some(item =>
    item.product.id === 'ext-gas-supply-yes' ||
    item.product.name?.includes('ガス引込みあり')
  );
  const hasNoGas = cartItems.some(item =>
    item.product.id === 'ext-gas-supply-no' ||
    item.product.name?.includes('ガス引込みなし')
  );
  // 室内窓選択状態をチェック
  const hasInteriorWindow = cartItems.some(item =>
    item.product.id === 'ext-interior-window-yes' ||
    item.product.name?.includes('室内窓あり')
  );
  const hasNoInteriorWindow = cartItems.some(item =>
    item.product.id === 'ext-interior-window-no' ||
    item.product.name?.includes('室内窓なし')
  );

  // 利用可能な素材タイプを抽出（固定順序: 窯業系サイディング → ガルバリウム鋼板 → 塗り壁）
  const availableMaterialTypes = useMemo(() => {
    const materialOrder = ['窯業系サイディング', 'ガルバリウム鋼板', '塗り壁'];
    const materials = new Set<string>();
    items.forEach(item => {
      const materialType = getMaterialTypeFromNote(item.note);
      if (materialType) materials.add(materialType);
    });
    return Array.from(materials).sort((a, b) => {
      const indexA = materialOrder.indexOf(a);
      const indexB = materialOrder.indexOf(b);
      // 定義順にソート、未定義のものは末尾
      if (indexA === -1 && indexB === -1) return a.localeCompare(b, 'ja');
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });
  }, [items]);

  // 利用可能なサブカテゴリを抽出（素材タイプでフィルタ）
  const availableSubcategories = useMemo(() => {
    const subs = new Set<string>();
    items.forEach(item => {
      // 素材タイプが選択されている場合、その素材タイプのアイテムのみ対象
      const materialType = getMaterialTypeFromNote(item.note);
      if (selectedMaterialType && materialType !== selectedMaterialType && item.category_name !== selectedMaterialType) return;
      if (item.category_name) subs.add(item.category_name);
    });
    return Array.from(subs).sort((a, b) => a.localeCompare(b, 'ja'));
  }, [items, selectedMaterialType]);

  const availableColors = useMemo(() => {
    const colors = new Set<string>();
    items.forEach(item => {
      // 素材タイプ・サブカテゴリでフィルタ
      const materialType = getMaterialTypeFromNote(item.note);
      if (selectedMaterialType && materialType !== selectedMaterialType && item.category_name !== selectedMaterialType) return;
      if (selectedSubcategory && item.category_name !== selectedSubcategory) return;
      item.variants?.forEach(v => {
        if (v.color_name) colors.add(v.color_name);
      });
    });
    return Array.from(colors).sort((a, b) => a.localeCompare(b, 'ja'));
  }, [items, selectedMaterialType, selectedSubcategory]);

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
      // 素材タイプフィルター（外部建材はcategory_nameも考慮）
      if (selectedMaterialType) {
        // 外壁カテゴリの素材タイプフィルターは、外壁カテゴリのアイテムのみ対象
        // これにより、別カテゴリのアイテムが誤って表示されるのを防ぐ
        if (currentCategoryName === '外壁' && item.category?.name !== '外壁') {
          return false;
        }
        const materialType = getMaterialTypeFromNote(item.note);
        const matchesMaterialType = materialType === selectedMaterialType;
        const matchesCategoryName = item.category_name === selectedMaterialType;
        if (!matchesMaterialType && !matchesCategoryName) return false;
      }
      // サブカテゴリフィルター（商品名）
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
      // ガス引込み依存フィルター（ガス無しの場合、乾太くん等を非表示）
      // @ts-expect-error - requiresGas is an optional field added for gas dependency check
      if (item.requires_gas || (item as unknown as { requiresGas?: boolean }).requiresGas) {
        if (hasNoGas || !hasGasSupply) {
          return false;
        }
      }
      // 水回り設備のメーカー/シリーズフィルター
      if (needsManufacturerSelection && selectedManufacturer) {
        // メーカー名でフィルタ
        if (item.manufacturer !== selectedManufacturer.name) return false;
        // シリーズでフィルタ（シリーズ選択がある場合）
        if (selectedSeries && item.series !== selectedSeries.name) return false;
      }
      return true;
    });

    // カテゴリの表示順序設定を取得
    const catalogType = activeTab === 'exterior' || activeTab === 'design' ? 'exterior'
      : activeTab === 'interior' ? 'interior'
      : activeTab === 'equipment' ? 'water'
      : activeTab === 'electrical' ? 'electrical'
      : 'furniture';
    const categoryOrderConfig = getCategoryOrderConfig(catalogType);

    // 選択中カテゴリのサブカテゴリ順序を取得
    const selectedCategoryConfig = categoryOrderConfig.find(c =>
      filtered[0]?.category?.name === c.name ||
      (filtered[0]?.category?.name && c.name.includes(filtered[0].category.name))
    );
    const subcategoryOrder = selectedCategoryConfig?.subcategoryOrder || [];

    // ソート: サブカテゴリ順序 → 標準品優先 → 価格順
    return filtered.sort((a, b) => {
      // 1. サブカテゴリを定義順にソート（定義されていない場合は後ろ）
      const subA = a.category_name || a.name || '';
      const subB = b.category_name || b.name || '';
      if (subA !== subB) {
        const orderA = subcategoryOrder.findIndex(s => subA.includes(s) || s.includes(subA));
        const orderB = subcategoryOrder.findIndex(s => subB.includes(s) || s.includes(subB));
        // 定義されていないものは後ろに
        const effectiveOrderA = orderA === -1 ? 999 : orderA;
        const effectiveOrderB = orderB === -1 ? 999 : orderB;
        if (effectiveOrderA !== effectiveOrderB) return effectiveOrderA - effectiveOrderB;
        // 同じ順序の場合は日本語順
        return subA.localeCompare(subB, 'ja');
      }

      // 2. 標準品を先に
      const pricingA = a.pricing?.find(p => p.product?.code === selectedPlanId);
      const pricingB = b.pricing?.find(p => p.product?.code === selectedPlanId);
      const isStandardA = pricingA?.is_standard ?? false;
      const isStandardB = pricingB?.is_standard ?? false;
      if (isStandardA !== isStandardB) return isStandardA ? -1 : 1;

      // 3. 価格順（安い順）
      const priceA = pricingA?.price ?? 0;
      const priceB = pricingB?.price ?? 0;
      if (priceA !== priceB) return priceA - priceB;

      // 4. 商品名順
      return (a.name || '').localeCompare(b.name || '', 'ja');
    });
  }, [items, debouncedSearchTerm, filterType, selectedPlanId, selectedMaterialType, selectedSubcategory, selectedColor, priceMax, showFavoritesOnly, favorites, hideDiscontinued, needsManufacturerSelection, selectedManufacturer, selectedSeries, activeTab, hasGasSupply, hasNoGas, currentCategoryName]);

  // ページネーション計算
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredItems.slice(start, end);
  }, [filteredItems, currentPage, itemsPerPage]);

  // フィルター変更時にページをリセット
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm, filterType, selectedMaterialType, selectedSubcategory, selectedColor, priceMax, showFavoritesOnly, hideDiscontinued, selectedCategoryId]);

  // レコメンド用にCatalogProduct形式に変換
  const catalogProducts = useMemo(() => {
    return items.map(convertToCatalogProduct);
  }, [items]);

  // 複数色選択が必要なカテゴリかどうか判定
  const needsMultiColorSelector = useMemo(() => {
    if (!currentCategoryName) return false;
    if (!MULTI_COLOR_CATEGORY_NAMES.includes(currentCategoryName)) return false;

    // 素材タイプ選択が必要なカテゴリは、素材タイプ選択後のみ表示
    const needsMaterialTypeFirst = ['外壁', 'ベース床'].includes(currentCategoryName);
    if (needsMaterialTypeFirst && !selectedMaterialType) return false;

    return true;
  }, [currentCategoryName, selectedMaterialType]);

  // 複数色選択用の商品リスト（CatalogProduct形式）
  const multiColorProducts = useMemo(() => {
    if (!needsMultiColorSelector) return [];
    return filteredItems.map(convertToCatalogProduct);
  }, [needsMultiColorSelector, filteredItems]);

  // 特殊セレクター（独自のPageHeaderを持つ）を使用するかを判定
  const usesSpecialSelector = useMemo(() => {
    if (!currentCategoryName) return false;

    // 特殊セレクターを持つカテゴリ
    const specialSelectorCategories = ['エアコン', 'カーテン', '家具', '玄関ドア', 'オリジナルダイニングテーブル', '階段', 'ベース建具'];
    if (specialSelectorCategories.includes(currentCategoryName)) return true;

    // ポーチ（ただし目地・サイズは除く）
    if (activeTab === 'exterior' && currentCategoryName === 'ポーチ') return true;
    if (activeTab === 'exterior' && currentCategoryName?.includes('ポーチ') && !currentCategoryName?.includes('サイズ') && !currentCategoryName?.includes('目地')) return true;

    // MultiColorAreaSelector
    if (needsMultiColorSelector) return true;

    // ManufacturerSelector（水回り設備のメーカー選択）
    if (needsManufacturerSelection && !isManufacturerSelectionComplete) return true;

    // 素材タイプ選択画面（外壁、外部設備、外部建材、ベース床、周辺部材）
    if (['外壁', '外部設備', '外部建材', 'ベース床', '周辺部材'].includes(currentCategoryName) && !selectedMaterialType) return true;

    // 設計タブの各カテゴリ
    if (activeTab === 'design') return true;

    // ガス乾燥機
    if (activeTab === 'furniture' && currentCategoryName === 'ガス乾燥機') return true;

    // 外装タブでガレージシャッター・庇未設定の場合
    if (activeTab === 'exterior' && currentCategoryName?.includes('ガレージシャッター') && !hasGarageShutter) return true;
    if (activeTab === 'exterior' && currentCategoryName === '庇' && !hasAwning) return true;

    return false;
  }, [currentCategoryName, activeTab, needsMultiColorSelector, needsManufacturerSelection, isManufacturerSelectionComplete, selectedMaterialType, hasGarageShutter, hasAwning]);

  // カートに追加（部屋選択が必要な場合はモーダルを表示）
  const handleAddToCart = useCallback((item: ItemWithDetails, variantOrSkip?: ItemVariant | boolean) => {
    // 仕様確定済みの場合は編集不可
    if (!canEdit()) {
      toast.error('編集不可', '仕様が確定されているため、変更できません');
      return;
    }

    // 第2引数がbooleanの場合はskipRoomSelection、それ以外はvariant
    const isSkipRoomSelection = typeof variantOrSkip === 'boolean';
    const skipRoomSelection = isSkipRoomSelection ? variantOrSkip : false;
    const selectedVariant = !isSkipRoomSelection && variantOrSkip ? variantOrSkip : item.variants?.[0];

    const categoryName = item.category?.name || '';
    const notNeededOption = getNotNeededOption(categoryName);

    // 部屋選択が必要な場合（かつスキップフラグがない場合）
    if (notNeededOption?.requiresRoomSelection && !skipRoomSelection) {
      setRoomSelectionModal({
        isOpen: true,
        categoryName,
        productId: item.id,
        productName: item.name,
        variantId: selectedVariant?.id,
        variantName: selectedVariant?.color_name,
      });
      return;
    }

    const cartProduct = convertToCartItem(item);
    // 選択されたバリアントをカート用の形式に変換
    const cartVariant = selectedVariant ? {
      id: selectedVariant.id,
      color: selectedVariant.color_name,
      colorCode: selectedVariant.color_code || undefined,
      imageUrl: selectedVariant.images?.[0]?.image_url,
      thumbnailUrl: selectedVariant.images?.[0]?.thumbnail_url || undefined,
    } : undefined;
    addItem(cartProduct, 1, cartVariant);
    useCartStore.getState().setSelectedPlanId(selectedPlanId);

    // 選択状態ストアにも保存
    setProductSelection(
      categoryName,
      item.id,
      item.name,
      selectedVariant?.id,
      selectedVariant?.color_name
    );

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addItem, cartItems.length, selectedPlanId, toast, setProductSelection, canEdit]); // setTimeoutはグローバル関数

  // 部屋選択完了時のハンドラー
  const handleRoomSelectionConfirm = useCallback((selectedRooms: string[]) => {
    if (!roomSelectionModal) return;

    const { categoryName, productId, productName, variantId, variantName } = roomSelectionModal;

    // 選択状態ストアに保存（部屋情報付き）
    setProductSelection(categoryName, productId, productName, variantId, variantName, selectedRooms);

    // カートにも追加
    const item = items.find(i => i.id === productId);
    if (item) {
      const cartProduct = convertToCartItem(item);
      addItem(cartProduct, 1);
      useCartStore.getState().setSelectedPlanId(selectedPlanId);

      setAddedItemId(item.id);
      setTimeout(() => setAddedItemId(null), ANIMATION_DURATIONS.CART_ITEM_HIGHLIGHT);

      toast.success('追加しました', `${productName}（${selectedRooms.length}部屋）`);
    }

    setRoomSelectionModal(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomSelectionModal, items, addItem, selectedPlanId, setProductSelection, toast]); // setTimeoutはグローバル関数

  const handleRemoveFromCart = useCallback(async (itemId: string) => {
    // 仕様確定済みの場合は編集不可
    if (!canEdit()) {
      toast.error('編集不可', '仕様が確定されているため、変更できません');
      return;
    }

    const item = cartItems.find(i => i.product.id === itemId);
    if (!item) return;

    const confirmed = await confirmRemoval({
      title: '選択を解除しますか？',
      message: `「${item.product.name}」の選択を解除します。\n解除した場合、再度選択し直す必要があります。`,
      confirmText: '解除する',
      cancelText: 'キャンセル',
      variant: 'warning',
    });

    if (confirmed) {
      removeItem(itemId);
      toast.info('解除しました', item.product.name);
    }
  }, [removeItem, cartItems, toast, confirmRemoval, canEdit]);

  // 商品詳細ページへ遷移
  const handleOpenDetail = useCallback((item: ItemWithDetails) => {
    navigate(`/item/${item.id}`);
  }, [navigate]);

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
  }, [categories, selectedCategoryId, cartItems, undecidedCategories, setSelectedCategoryId]);

  // 次のステップへ進む
  const goToNextStep = useCallback(() => {
    const currentIndex = STEPS.findIndex(s => s.id === activeTab);
    if (currentIndex < STEPS.length - 1) {
      setActiveTab(STEPS[currentIndex + 1].id);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), ANIMATION_DURATIONS.CONFETTI);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, setActiveTab]); // setTimeoutはグローバル関数

  // 現在のカテゴリが決定済みかチェック
  const isCurrentCategoryDecided = useMemo(() => {
    const currentCat = categories.find(c => c.id === selectedCategoryId);
    return currentCat ? cartItems.some(item => item.product.categoryName === currentCat.name) : false;
  }, [categories, selectedCategoryId, cartItems]);

  // URLの商品IDがある場合は詳細ページにリダイレクト
  useEffect(() => {
    if (urlProductId && items.length > 0) {
      // 詳細ページへリダイレクト
      navigate(`/item/${urlProductId}`, { replace: true });
    }
  }, [urlProductId, items, navigate]);

  // キーボードショートカット
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 部屋プランナーが開いている場合はEscでのみ閉じる
      if (isRoomPlannerOpen) {
        if (e.key === 'Escape') {
          setIsRoomPlannerOpen(false);
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
  }, [isRoomPlannerOpen, searchTerm, setSearchTerm, undecidedCategories, goToNextCategory]);

  return (
    <>
      <style>{catalogAnimations}</style>
      <Confetti show={showConfetti} />

      {/* 初心者向けガイド（ボタンで表示） */}
      <BeginnerGuide
        isOpen={showGuide}
        onClose={() => setShowGuide(false)}
        onComplete={() => setShowGuide(false)}
      />

      <div className="flex flex-col h-full bg-gray-50">
        {/* ヘッダー - コンパクト・固定 */}
        <div className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
          {/* ステップナビゲーション */}
          <div className="px-4 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-4" data-tutorial="main-tabs">
                {/* お客様モードでは設計タブに閲覧のみマーカーを表示 */}
                {STEPS.map((step, index) => {
                  const isActive = step.id === activeTab;
                  const stepCount = getStepCount(step.id);
                  const Icon = step.icon;
                  const isDesignTab = step.id === 'design';
                  const isReadOnlyTab = isCustomerMode && isDesignTab;

                  return (
                    <React.Fragment key={step.id}>
                      <button
                        onClick={() => setActiveTab(step.id)}
                        title={isReadOnlyTab ? `${step.description}（閲覧のみ）` : step.description}
                        className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-white text-blue-600 shadow-md'
                            : isReadOnlyTab
                            ? 'bg-white/10 hover:bg-white/20 opacity-75'
                            : 'bg-white/20 hover:bg-white/30'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-blue-500' : ''}`} />
                        <span className="hidden sm:inline text-sm font-medium">{step.label}</span>
                        <span className="sm:hidden text-sm">{step.emoji}</span>
                        {isReadOnlyTab && (
                          <span className="hidden sm:inline text-[10px] px-1 py-0.5 bg-gray-200 text-gray-600 rounded ml-1">
                            閲覧
                          </span>
                        )}
                        {stepCount > 0 && (
                          <span className={`absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center rounded-full text-[10px] font-bold ${
                            isActive ? 'bg-blue-500 text-white' : 'bg-white text-blue-600'
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

              {/* 検索バー（青いバー内） */}
              <div className="hidden sm:flex items-center flex-1 max-w-xs mx-4">
                <div className="relative w-full">
                  <label htmlFor="catalog-search-header" className="sr-only">商品を検索</label>
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" aria-hidden="true" />
                  <input
                    id="catalog-search-header"
                    type="text"
                    placeholder="検索..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-8 pr-8 py-1.5 bg-white/20 border border-white/30 rounded-lg text-sm text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-0.5 hover:bg-white/20 rounded-full"
                      aria-label="検索をクリア"
                    >
                      <X className="w-3.5 h-3.5 text-white/80" />
                    </button>
                  )}
                </div>
              </div>

              {/* 選択数表示 */}
              <div className="bg-white/20 rounded-lg px-2 py-1 flex items-center gap-1" data-tutorial="cart-button">
                <ClipboardCheck className="w-4 h-4" />
                <span className="font-bold text-sm">{cartItems.length}</span>
              </div>
            </div>
          </div>

          {/* プログレスバー - コンパクト */}
          <div className="px-4 pb-2">
            <div>
              {(() => {
                const decidedCount = categories.filter(cat =>
                  cartItems.some(item => item.product.categoryName === cat.name)
                ).length;
                const totalCount = categories.length;
                const catProgressPercent = totalCount > 0 ? (decidedCount / totalCount) * 100 : 0;
                const isComplete = decidedCount === totalCount && totalCount > 0;
                return (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-white/80">{decidedCount}/{totalCount}</span>
                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ${isComplete ? 'bg-blue-400' : 'bg-white'}`}
                        style={{ width: `${catProgressPercent}%` }}
                      />
                    </div>
                    {isComplete ? (
                      <span className="text-xs font-bold text-blue-300">完了</span>
                    ) : (
                      <span className="text-xs text-white/80">残{totalCount - decidedCount}</span>
                    )}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>


        <div className="flex flex-1 overflow-hidden">
          {/* 左サイドバー - アクションチェックリスト - コンパクト（モバイルでは非表示） */}
          <div className={`hidden lg:flex flex-col bg-white border-r border-gray-200 h-[calc(100vh-140px)] transition-all duration-300 flex-shrink-0 ${
            showActionChecklist ? 'w-64' : 'w-12'
          }`}>
            {showActionChecklist ? (
              <>
                {/* プラン選択 */}
                <div className="p-3 border-b border-gray-200">
                  <div className="flex items-center gap-2" data-tutorial="plan-selector">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <select
                      value={selectedPlanId}
                      onChange={(e) => setSelectedPlanId(e.target.value)}
                      className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium focus:ring-2 focus:ring-blue-500"
                    >
                      {plans.map(plan => (
                        <option key={plan.id} value={plan.code}>{plan.name}</option>
                      ))}
                    </select>
                    <button
                      onClick={() => setShowActionChecklist(false)}
                      className="p-1.5 hover:bg-gray-100:bg-gray-700 rounded"
                      title="サイドバーを閉じる"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* アクションチェックリスト */}
                <ActionChecklist
                  categories={categories}
                  cartItems={cartItems}
                  totalPrice={totalPrice}
                  selectedCategoryId={selectedCategoryId}
                  onCategorySelect={(catId) => setSelectedCategoryId(catId)}
                  onReportClick={onCartClick}
                />

                {/* 部屋別プランナー（内装タブの時のみ） */}
                {activeTab === 'interior' && (
                  <div className="p-3 border-t border-gray-200">
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
                <div className="p-3 border-t border-gray-200">
                  {isCurrentStepComplete ? (
                    <button
                      onClick={goToNextStep}
                      aria-label="次のステップへ進む"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors"
                    >
                      次のステップへ
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : isCurrentCategoryDecided && undecidedCategories.length > 0 ? (
                    <button
                      onClick={goToNextCategory}
                      aria-label="次のカテゴリへ進む"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors"
                    >
                      次のカテゴリへ
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : null}
                </div>

                {/* ヘルプボタン */}
                <div className="mt-auto p-3 border-t border-gray-200">
                  <button
                    onClick={() => setShowGuide(true)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100:bg-gray-700 rounded-lg text-sm transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                    使い方ガイド
                  </button>
                </div>
              </>
            ) : (
              /* 折りたたみ時の表示 */
              <div className="flex flex-col items-center py-4 gap-4">
                <button
                  onClick={() => setShowActionChecklist(true)}
                  className="p-2 hover:bg-gray-100:bg-gray-700 rounded"
                  title="一覧を開く"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <div className="writing-mode-vertical text-xs text-gray-500 font-medium">
                  選ぶもの
                </div>
                <div className="text-xs font-bold text-blue-600">
                  {decidedCategories.length}/{categories.length}
                </div>
              </div>
            )}
          </div>


          {/* メインエリア */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* モバイル用：検索バー＋プラン選択 */}
            <div className="sm:hidden bg-white border-b border-gray-100 px-3 py-2 space-y-2">
              {/* モバイル検索バー */}
              <div className="relative">
                <label htmlFor="catalog-search-mobile" className="sr-only">商品を検索</label>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
                <input
                  id="catalog-search-mobile"
                  type="text"
                  placeholder="商品を検索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white:bg-gray-600 transition-all placeholder:text-gray-400:text-gray-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200:bg-gray-600 rounded-full"
                    aria-label="検索をクリア"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>
                )}
              </div>
              {/* モバイルプラン選択 */}
              <div className="flex items-center gap-2">
                <label htmlFor="mobile-plan-select" className="sr-only">プランを選択</label>
                <select
                  id="mobile-plan-select"
                  value={selectedPlanId}
                  onChange={(e) => setSelectedPlanId(e.target.value)}
                  className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500"
                  aria-label="プランを選択"
                >
                  {plans.map(plan => (
                    <option key={plan.id} value={plan.code}>{plan.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 素材タイプ・サブカテゴリ・色フィルター（カテゴリ選択時のみ表示） */}
            {selectedCategoryId && (availableMaterialTypes.length > 1 || availableSubcategories.length > 1 || availableColors.length > 1) && (
              <div className="bg-white border-b border-gray-100 px-3 py-2">
                <div className="flex flex-wrap items-center gap-2">
                  {/* 素材タイプフィルター（2段階目: 窯業系/金属/塗り壁 等） */}
                  {availableMaterialTypes.length > 1 && (
                    <div className="flex items-center gap-1">
                      <label htmlFor="material-filter" className="text-xs text-gray-500">素材:</label>
                      <select
                        id="material-filter"
                        value={selectedMaterialType}
                        onChange={(e) => setSelectedMaterialType(e.target.value)}
                        className="px-2 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-xs font-medium text-blue-700 focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">すべての素材 ({availableMaterialTypes.length}種)</option>
                        {availableMaterialTypes.map(mat => (
                          <option key={mat} value={mat}>{mat}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {/* サブカテゴリフィルター（商品シリーズ名） */}
                  {availableSubcategories.length > 1 && (
                    <div className="flex items-center gap-1">
                      <label htmlFor="subcategory-filter" className="text-xs text-gray-500">商品:</label>
                      <select
                        id="subcategory-filter"
                        value={selectedSubcategory}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                        className="px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-blue-500"
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
                      <label htmlFor="color-filter" className="text-xs text-gray-500">色:</label>
                      <select
                        id="color-filter"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-blue-500"
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
                    <label htmlFor="price-filter" className="text-xs text-gray-500">上限:</label>
                    <select
                      id="price-filter"
                      value={priceMax}
                      onChange={(e) => setPriceMax(parseInt(e.target.value, 10))}
                      className="px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 focus:ring-2 focus:ring-blue-500"
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
                      className="w-3.5 h-3.5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                    />
                    <span className="text-xs text-gray-500">廃番も表示</span>
                  </label>
                  {/* フィルタークリア */}
                  {(selectedMaterialType || selectedSubcategory || selectedColor || priceMax > 0) && (
                    <button
                      onClick={() => {
                        setSelectedMaterialType('');
                        setSelectedSubcategory('');
                        setSelectedColor('');
                        setPriceMax(0);
                      }}
                      className="px-2 py-1 text-xs text-red-500 hover:text-red-600 hover:bg-red-50:bg-red-900/20 rounded-lg transition-colors"
                    >
                      クリア
                    </button>
                  )}
                  {/* 結果件数 */}
                  <span className="ml-auto text-xs text-gray-400">
                    {filteredItems.length}件
                  </span>
                </div>
              </div>
            )}

            {/* 商品グリッド */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 pb-24 lg:pb-4" data-tutorial="product-grid">
              {/* グローバルPageHeader - 特殊セレクター以外のカテゴリ用（常に最初に表示） */}
              {!isLoading && !error && !usesSpecialSelector && currentCategoryName && (
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader
                    title={selectedMaterialType ? `${selectedMaterialType}を選択` : `${currentCategoryName}を選択`}
                    subtitle={filteredItems.length > 0 ? `${filteredItems.length}件の商品から選んでください` : '該当する商品がありません'}
                  />
                </div>
              )}

              {isLoading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {[...Array(12)].map((_, i) => <SkeletonCard key={i} />)}
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-red-500 font-medium mb-2">{error}</p>
                  <p className="text-gray-500 text-sm mb-4">
                    接続を確認して再試行してください
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setError(null)}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200:bg-gray-600 text-sm"
                    >
                      エラーをクリア
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
                    >
                      再読み込み
                    </button>
                  </div>
                </div>
              ) : currentCategoryName === 'エアコン' ? (
                /* エアコン選択UI */
                <AirconSelector
                  selectedPlan={selectedPlanId}
                  onComplete={() => {
                    toast.success('エアコンをカートに追加しました');
                    goToNextCategory();
                  }}
                  onCancel={() => {
                    // 前のカテゴリに戻るか、サイドバーで別のカテゴリを選択可能
                  }}
                />
              ) : (currentCategoryName === 'カーテン' || currentCategoryName === '家具') ? (
                /* IC提案選択UI（カーテン・家具用） */
                <div className="max-w-2xl mx-auto">
                  <ICProposalSelector
                    categoryName={currentCategoryName as 'カーテン' | '家具'}
                    onSelect={(selection: ICProposalSelection) => {
                      if (selection.wantsProposal) {
                        // IC提案を希望する場合
                        const details = currentCategoryName === 'カーテン'
                          ? `部屋: ${selection.selectedRooms?.join(', ') || '未選択'}`
                          : `家具: ${selection.selectedFurnitureTypes?.join(', ') || '未選択'}${selection.otherText ? ` (その他: ${selection.otherText})` : ''}`;
                        toast.success(`${currentCategoryName}: IC提案を希望 - ${details}`);
                        // IC提案の選択状態をストアに保存
                        setProductSelection(
                          currentCategoryName,
                          'ic-proposal',
                          `IC提案希望 - ${details}`,
                          undefined,
                          undefined,
                          selection.selectedRooms
                        );
                      } else {
                        // IC提案を希望しない場合
                        setNotNeeded(currentCategoryName, '提案不要');
                        toast.info(`${currentCategoryName}: 提案不要`);
                      }
                      // 次のカテゴリへ移動
                      goToNextCategory();
                    }}
                    onCancel={() => {
                      // 前のカテゴリに戻るか、サイドバーで別のカテゴリを選択可能
                    }}
                  />
                </div>
              ) : activeTab === 'exterior' && currentCategoryName?.includes('ガレージシャッター') && !hasGarageShutter ? (
                /* 外装タブ: ガレージシャッター未設定メッセージ */
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader
                    title="ガレージシャッターを選択"
                    subtitle="設計タブで設定してください"
                  />
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <span className="text-2xl mb-2 block">🚗</span>
                    <h2 className="text-lg font-medium text-gray-900 mb-2">
                      ガレージシャッターは設定されていません
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      設計タブで「あり」を選択すると、ここで色を選択できます。
                    </p>
                    <button
                      onClick={() => navigate('/catalog/design')}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      設計タブで設定する
                    </button>
                  </div>
                </div>
              ) : activeTab === 'exterior' && currentCategoryName === '庇' && !hasAwning ? (
                /* 外装タブ: 庇未設定メッセージ */
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader
                    title="庇（ひさし）を選択"
                    subtitle="設計タブで設定してください"
                  />
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                    <span className="text-2xl mb-2 block">🏠</span>
                    <h2 className="text-lg font-medium text-gray-900 mb-2">
                      庇は設定されていません
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      設計タブで「あり」を選択すると、ここで色を選択できます。
                    </p>
                    <button
                      onClick={() => navigate('/catalog/design')}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      設計タブで設定する
                    </button>
                  </div>
                </div>
              ) : currentCategoryName === '外壁' && !selectedMaterialType ? (
                /* 素材タイプ選択カード（外壁用）- 常に3つ表示 */
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader title="素材を選択" subtitle="外壁の素材タイプを選んでください" />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {EXTERIOR_WALL_MATERIAL_TYPES.map((material) => {
                      const itemCount = items.filter(i => getMaterialTypeFromNote(i.note) === material).length;
                      const categoryEmoji = material.includes('タイル') ? '🪨' : material.includes('塗り') ? '🖌️' : material.includes('サイディング') ? '🏠' : '🧱';
                      return (
                        <CategorySelectionCard
                          key={material}
                          id={material}
                          name={material}
                          emoji={categoryEmoji}
                          badgeType="category"
                          itemCount={itemCount}
                          onClick={() => setSelectedMaterialType(material)}
                        />
                      );
                    })}
                  </div>
                </div>
              ) : currentCategoryName === '玄関ドア' ? (
                /* 玄関ドア選択UI（5ステップ） */
                <EntranceDoorSelector
                  selectedPlan={selectedPlanId}
                  onComplete={() => {
                    toast.success('玄関ドアをカートに追加しました');
                    goToNextCategory();
                  }}
                  onCancel={() => {
                    // 前のカテゴリに戻るか、サイドバーで別のカテゴリを選択可能
                  }}
                />
              ) : currentCategoryName === 'オリジナルダイニングテーブル' ? (
                /* オリジナルダイニングテーブル選択UI（段階選択） */
                <DiningTableSelector
                  selectedPlan={selectedPlanId}
                  onComplete={() => {
                    toast.success('ダイニングテーブルをカートに追加しました');
                    goToNextCategory();
                  }}
                  onCancel={() => {
                    // キャンセル処理
                  }}
                />
              ) : currentCategoryName === '階段' ? (
                /* 階段選択UI（カード型ステップ選択） */
                <StairSelector
                  selectedPlan={selectedPlanId}
                  onComplete={() => {
                    toast.success('階段をカートに追加しました');
                    goToNextCategory();
                  }}
                  onCancel={() => {
                    // キャンセル処理
                  }}
                />
              ) : currentCategoryName === 'ベース建具' ? (
                /* ベース建具選択UI（色→デザインの順） */
                <BaseBuildingSelector
                  selectedPlan={selectedPlanId}
                  onComplete={() => {
                    toast.success('ベース建具をカートに追加しました');
                    goToNextCategory();
                  }}
                  onCancel={() => {
                    // キャンセル処理
                  }}
                />
              ) : activeTab === 'exterior' && (currentCategoryName === 'ポーチ' || (currentCategoryName?.includes('ポーチ') && !currentCategoryName?.includes('サイズ') && !currentCategoryName?.includes('目地'))) ? (
                /* ポーチタイル選択UI（タイル→目地色の順） */
                <PorchTileSelector
                  selectedPlan={selectedPlanId}
                  onComplete={() => {
                    toast.success('ポーチをカートに追加しました');
                    goToNextCategory();
                  }}
                  onCancel={() => {
                    // キャンセル処理
                  }}
                />
              ) : currentCategoryName === '外部設備' && !selectedMaterialType ? (
                /* 外部設備カテゴリ選択カード */
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader title="外部設備を選択" subtitle="以下の項目は必須です。各カテゴリから選択してください" />
                  {/* 必須カテゴリ（8項目） */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-4">
                    {EXTERIOR_FACILITY_TYPES.filter(t => t.required).map((type) => {
                      const itemCount = items.filter(i => i.category_name === type.id).length;
                      const categoryEmoji = type.id.includes('アンテナ') || type.id.includes('TV') ? '📡' : type.id.includes('給湯') ? '🔥' : type.id.includes('ポスト') ? '📮' : type.id.includes('表札') ? '🏠' : type.id.includes('インターホン') ? '🔔' : type.id.includes('散水') ? '💧' : type.id.includes('立水栓') ? '🚰' : '⚡';
                      return (
                        <CategorySelectionCard
                          key={type.id}
                          id={type.id}
                          name={type.name}
                          emoji={categoryEmoji}
                          badgeType="required"
                          itemCount={itemCount}
                          onClick={() => setSelectedMaterialType(type.id)}
                        />
                      );
                    })}
                  </div>
                  {/* その他オプション */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm text-gray-500 mb-3">オプション設備</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                      {EXTERIOR_FACILITY_TYPES.filter(t => !t.required).map((type) => {
                        const itemCount = items.filter(i => i.category_name === type.id).length;
                        return (
                          <CategorySelectionCard
                            key={type.id}
                            id={type.id}
                            name={type.name}
                            emoji="🔧"
                            badgeType="optional"
                            itemCount={itemCount}
                            onClick={() => setSelectedMaterialType(type.id)}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : currentCategoryName === '外部建材' && !selectedMaterialType ? (
                /* 外部建材カテゴリ選択カード（商品カードと統一デザイン） */
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader
                    title="外部建材を選択"
                    subtitle="樋・水切り・破風などの外部建材を選んでください"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {EXTERIOR_MATERIAL_TYPES.map((type) => {
                      const itemCount = items.filter(i => i.category_name === type.id).length;
                      const categoryEmoji = type.id === '軒樋' ? '🏠' : type.id === '竪樋' ? '📐' : type.id === '土台水切' ? '💧' : type.id === 'パラペット笠木' ? '🏗️' : type.id === 'バルコニー笠木' ? '🏠' : '🔧';
                      return (
                        <CategorySelectionCard
                          key={type.id}
                          id={type.id}
                          name={type.name}
                          emoji={categoryEmoji}
                          badgeType="category"
                          itemCount={itemCount}
                          onClick={() => setSelectedMaterialType(type.id)}
                        />
                      );
                    })}
                  </div>
                </div>
              ) : currentCategoryName === 'ベース床' && !selectedMaterialType ? (
                /* ベース床カテゴリ選択カード（商品カードと統一デザイン） */
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader
                    title="床材を選択"
                    subtitle="お部屋に合った床材タイプを選んでください"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {BASE_FLOOR_TYPES.map((type) => {
                      const itemCount = items.filter(i => i.category_name === type.id).length;
                      const categoryEmoji = type.name.includes('フローリング') ? '🪵' : type.name.includes('タイル') ? '🪨' : type.name.includes('畳') ? '🟩' : '🔲';
                      return (
                        <CategorySelectionCard
                          key={type.id}
                          id={type.id}
                          name={type.name}
                          emoji={categoryEmoji}
                          badgeType="category"
                          itemCount={itemCount}
                          onClick={() => setSelectedMaterialType(type.id)}
                        />
                      );
                    })}
                  </div>
                </div>
              ) : currentCategoryName === '周辺部材' && !selectedMaterialType ? (
                /* 周辺部材カテゴリ選択カード（商品カードと統一デザイン） */
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader
                    title="周辺部材を選択"
                    subtitle="各部材を選んでください"
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {PERIPHERAL_PARTS_TYPES.map((type) => {
                      const itemCount = items.filter(i => i.category_name === type.id).length;
                      const isOptional = 'optional' in type && type.optional;
                      return (
                        <CategorySelectionCard
                          key={type.id}
                          id={type.id}
                          name={type.name}
                          emoji="🔧"
                          badgeType={isOptional ? 'optional' : 'category'}
                          itemCount={itemCount}
                          onClick={() => setSelectedMaterialType(type.id)}
                        />
                      );
                    })}
                  </div>
                </div>
              ) : activeTab === 'design' && (currentCategoryName?.includes('ガレージシャッター') || currentCategoryName?.includes('電動ガレージシャッター')) ? (
                /* 設計タブ: ガレージシャッター有無選択カード */
                <div className="max-w-6xl mx-auto px-4">
                  {isDesignReadOnly && (
                    <div className="mb-4 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-700 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        閲覧専用：設計担当が設定した内容を表示しています
                      </p>
                    </div>
                  )}
                  <PageHeader
                    title="ガレージシャッター"
                    subtitle={isDesignReadOnly ? '設計担当が設定した内容です' : '電動ガレージシャッターの種類を選択してください'}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {GARAGE_SHUTTER_OPTIONS.map((option) => {
                      const isSelected = cartItems.some(item => item.product.id === option.productId);
                      const emoji = option.id === 'garage-shutter-no' ? '🏠' : option.id === 'garage-shutter-sunauto' ? '🚗' : '🚙';
                      return (
                        <button
                          key={option.id}
                          disabled={isDesignReadOnly}
                          onClick={() => {
                            if (isDesignReadOnly) return;
                            // 既存のガレージシャッター選択をクリア
                            const garageItems = cartItems.filter(item =>
                              item.product.categoryName?.includes('ガレージシャッター')
                            );
                            garageItems.forEach(item => removeItem(item.product.id));
                            // 対応する商品をカートに追加（なし以外の場合も追加してOK）
                            const product = items.find(i => i.id === option.productId);
                            if (product) {
                              const catalogProduct = {
                                id: product.id,
                                categoryId: product.category_id || '',
                                categoryName: product.category?.name || '電動ガレージシャッター',
                                subcategory: product.category_name || '',
                                name: product.name,
                                manufacturer: product.manufacturer || '',
                                modelNumber: product.model_number || '',
                                unit: product.unit?.symbol || 'セット',
                                isOption: !product.pricing?.some(p => p.is_standard),
                                variants: product.variants?.map(v => ({
                                  id: v.id,
                                  color: v.color_name || '',
                                  colorCode: v.color_code || '',
                                })) || [],
                                pricing: product.pricing?.map(p => ({
                                  plan: p.product?.code,
                                  price: p.price,
                                })) || [],
                              };
                              addItem(catalogProduct as any, 1, catalogProduct.variants[0] as any);
                            }
                            // 次のカテゴリへ移動
                            goToNextCategory();
                          }}
                          className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 text-left w-full ${
                            isSelected
                              ? 'border-2 border-blue-500 shadow-lg'
                              : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
                          } ${isDesignReadOnly ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {/* 画像エリア（正方形） */}
                          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col items-center justify-center">
                            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                              {emoji}
                            </span>
                            {/* 選択済みマーク */}
                            {isSelected && (
                              <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                          {/* 情報エリア */}
                          <div className="p-2">
                            <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
                              {option.name}
                            </h3>
                            <span className="text-[10px] text-gray-400 line-clamp-2">{option.description}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {!isDesignReadOnly && (
                    <p className="text-xs text-gray-400 mt-4 text-center">
                      ※この設定は設計担当が管理者画面で設定します
                    </p>
                  )}
                </div>
              ) : activeTab === 'design' && currentCategoryName === '庇' ? (
                /* 設計タブ: 庇種類選択カード */
                <div className="max-w-6xl mx-auto px-4">
                  {isDesignReadOnly && (
                    <div className="mb-4 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-700 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        閲覧専用：設計担当が設定した内容を表示しています
                      </p>
                    </div>
                  )}
                  <PageHeader
                    title="庇（ひさし）"
                    subtitle={isDesignReadOnly ? '設計担当が設定した内容です' : '玄関・窓上に設置する庇の種類を選択してください'}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {AWNING_OPTIONS.map((option) => {
                      const isSelected = cartItems.some(item => item.product.id === option.productId);
                      const emoji = option.id === 'awning-no' ? '🚪' : option.id === 'awning-ad2s' ? '🏠' : '🏡';
                      return (
                        <button
                          key={option.id}
                          disabled={isDesignReadOnly}
                          onClick={() => {
                            if (isDesignReadOnly) return;
                            // 既存の庇選択をクリア
                            const awningItems = cartItems.filter(item =>
                              item.product.categoryName === '庇'
                            );
                            awningItems.forEach(item => removeItem(item.product.id));
                            // 対応する商品をカートに追加
                            const product = items.find(i => i.id === option.productId);
                            if (product) {
                              const catalogProduct = {
                                id: product.id,
                                categoryId: product.category_id || '',
                                categoryName: product.category?.name || '庇',
                                subcategory: product.category_name || '',
                                name: product.name,
                                manufacturer: product.manufacturer || '',
                                modelNumber: product.model_number || '',
                                unit: product.unit?.symbol || 'セット',
                                isOption: !product.pricing?.some(p => p.is_standard),
                                variants: product.variants?.map(v => ({
                                  id: v.id,
                                  color: v.color_name || '',
                                  colorCode: v.color_code || '',
                                })) || [],
                                pricing: product.pricing?.map(p => ({
                                  plan: p.product?.code,
                                  price: p.price,
                                })) || [],
                              };
                              addItem(catalogProduct as any, 1, catalogProduct.variants[0] as any);
                            }
                            // 次のカテゴリへ移動
                            goToNextCategory();
                          }}
                          className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 text-left w-full ${
                            isSelected
                              ? 'border-2 border-blue-500 shadow-lg'
                              : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
                          } ${isDesignReadOnly ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {/* 画像エリア（正方形） */}
                          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col items-center justify-center">
                            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                              {emoji}
                            </span>
                            {/* 選択済みマーク */}
                            {isSelected && (
                              <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                          {/* 情報エリア */}
                          <div className="p-2">
                            <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
                              {option.name}
                            </h3>
                            <span className="text-[10px] text-gray-400 line-clamp-2">{option.description}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {!isDesignReadOnly && (
                    <p className="text-xs text-gray-400 mt-4 text-center">
                      ※この設定は設計担当が管理者画面で設定します
                    </p>
                  )}
                </div>
              ) : activeTab === 'design' && currentCategoryName === '窓タイプ' ? (
                /* 設計タブ: 窓タイプ選択カード */
                <div className="max-w-6xl mx-auto px-4">
                  {isDesignReadOnly && (
                    <div className="mb-4 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-700 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        閲覧専用：設計担当が設定した内容を表示しています
                      </p>
                    </div>
                  )}
                  <PageHeader
                    title="窓タイプ"
                    subtitle={isDesignReadOnly ? '設計担当が設定した内容です' : '樹脂サッシのグレードを選択してください（※色は外装タブで選択）'}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {WINDOW_TYPE_OPTIONS.map((option) => {
                      const isSelected = option.id === 'apw430' ? hasAPW430 : !hasAPW430;
                      return (
                        <button
                          key={option.id}
                          disabled={isDesignReadOnly}
                          onClick={() => {
                            if (isDesignReadOnly) return;
                            // 窓タイプの選択はカートに追加する処理が必要
                            // 対象のアイテムを探してカートに追加
                            const targetItem = items.find(item =>
                              item.name?.includes(option.id.toUpperCase())
                            );
                            if (targetItem) {
                              // 既存の窓タイプをカートから削除
                              const existingWindowTypes = cartItems.filter(item =>
                                item.product.categoryName === '窓タイプ'
                              );
                              existingWindowTypes.forEach(item => removeItem(item.product.id));
                              // 新しい窓タイプを追加
                              addItem(convertToCartItem(targetItem));
                            }
                            goToNextCategory();
                          }}
                          className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 text-left w-full ${
                            isSelected
                              ? 'border-2 border-blue-500 shadow-lg'
                              : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
                          } ${isDesignReadOnly ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {/* 画像エリア（正方形） */}
                          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col items-center justify-center">
                            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">🪟</span>
                            {/* バッジ */}
                            {'isOption' in option && option.isOption && (
                              <div className="absolute top-1 left-1">
                                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-500 text-white">
                                  オプション
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
                          {/* 情報エリア */}
                          <div className="p-2">
                            <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
                              {option.name}
                            </h3>
                            <span className="text-[10px] text-gray-400 line-clamp-2">{option.description}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {!isDesignReadOnly && (
                    <p className="text-xs text-gray-400 mt-4 text-center">
                      ※この設定は設計担当が管理者画面で設定します
                    </p>
                  )}
                </div>
              ) : activeTab === 'design' && currentCategoryName === 'ガス引込み' ? (
                /* 設計タブ: ガス引込み選択カード */
                <div className="max-w-6xl mx-auto px-4">
                  {isDesignReadOnly && (
                    <div className="mb-4 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-700 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        閲覧専用：設計担当が設定した内容を表示しています
                      </p>
                    </div>
                  )}
                  <PageHeader
                    title="ガス引込み"
                    subtitle={isDesignReadOnly ? '設計担当が設定した内容です' : 'ガスの引き込み有無を選択（※ありの場合、乾太くん選択可）'}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {GAS_SUPPLY_OPTIONS.map((option) => {
                      const isSelected = option.id === 'gas-supply-yes' ? hasGasSupply : hasNoGas;
                      return (
                        <button
                          key={option.id}
                          disabled={isDesignReadOnly}
                          onClick={() => {
                            if (isDesignReadOnly) return;
                            // 既存のガス引込み選択をカートから削除
                            const existingGasItems = cartItems.filter(item =>
                              item.product.categoryId === 'gas-supply' ||
                              item.product.categoryName === 'ガス引込み'
                            );
                            existingGasItems.forEach(item => removeItem(item.product.id));

                            // 対応する商品をカートに追加
                            const targetProductId = option.id === 'gas-supply-yes' ? 'ext-gas-supply-yes' : 'ext-gas-supply-no';
                            const targetProduct = items.find(item => item.id === targetProductId);
                            if (targetProduct) {
                              addItem(convertToCartItem(targetProduct));
                            }

                            // 「なし」を選択した場合、乾太くん等のガス必須商品をカートから削除
                            if (option.id === 'gas-supply-no') {
                              const gasRequiredItems = cartItems.filter(item =>
                                (item.product as unknown as { requiresGas?: boolean }).requiresGas
                              );
                              gasRequiredItems.forEach(item => removeItem(item.product.id));
                            }

                            // 次のカテゴリへ移動
                            goToNextCategory();
                          }}
                          className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 text-left w-full ${
                            isSelected
                              ? 'border-2 border-blue-500 shadow-lg'
                              : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
                          } ${isDesignReadOnly ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {/* 画像エリア（正方形） */}
                          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col items-center justify-center">
                            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                              {option.id === 'gas-supply-yes' ? '🔥' : '⚡'}
                            </span>
                            {/* 選択済みマーク */}
                            {isSelected && (
                              <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                          {/* 情報エリア */}
                          <div className="p-2">
                            <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
                              {option.name}
                            </h3>
                            <span className="text-[10px] text-gray-400 line-clamp-2">{option.description}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {!isDesignReadOnly && (
                    <p className="text-xs text-gray-400 mt-4 text-center">
                      ※この設定は設計担当が管理者画面で設定します
                    </p>
                  )}
                </div>
              ) : activeTab === 'design' && currentCategoryName === '室内窓' ? (
                /* 設計タブ: 室内窓選択カード（有無のみ） */
                <div className="max-w-6xl mx-auto px-4">
                  {isDesignReadOnly && (
                    <div className="mb-4 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-700 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        閲覧専用：設計担当が設定した内容を表示しています
                      </p>
                    </div>
                  )}
                  <PageHeader
                    title="室内窓"
                    subtitle={isDesignReadOnly ? '設計担当が設定した内容です' : '室内窓の設置有無を選択（※ありの場合、内装タブで詳細選択）'}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {INTERIOR_WINDOW_OPTIONS.map((option) => {
                      const isSelected = option.id === 'interior-window-yes' ? hasInteriorWindow : hasNoInteriorWindow;
                      return (
                        <button
                          key={option.id}
                          disabled={isDesignReadOnly}
                          onClick={() => {
                            if (isDesignReadOnly) return;
                            // 既存の室内窓選択をカートから削除
                            const existingItems = cartItems.filter(item =>
                              item.product.categoryId === 'interior-window' ||
                              item.product.categoryName === '室内窓'
                            );
                            existingItems.forEach(item => removeItem(item.product.id));

                            // 対応する商品をカートに追加
                            const targetProductId = option.id === 'interior-window-yes' ? 'ext-interior-window-yes' : 'ext-interior-window-no';
                            const targetProduct = items.find(item => item.id === targetProductId);
                            if (targetProduct) {
                              addItem(convertToCartItem(targetProduct));
                            }

                            // 次のカテゴリへ移動
                            goToNextCategory();
                          }}
                          className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 text-left w-full ${
                            isSelected
                              ? 'border-2 border-blue-500 shadow-lg'
                              : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
                          } ${isDesignReadOnly ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {/* 画像エリア（正方形） */}
                          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col items-center justify-center">
                            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                              {option.id === 'interior-window-yes' ? '🪟' : '🚫'}
                            </span>
                            {/* 選択済みマーク */}
                            {isSelected && (
                              <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                          {/* 情報エリア */}
                          <div className="p-2">
                            <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
                              {option.name}
                            </h3>
                            <span className="text-[10px] text-gray-400 line-clamp-2">{option.description}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {!isDesignReadOnly && (
                    <p className="text-xs text-gray-400 mt-4 text-center">
                      ※この設定は設計担当が管理者画面で設定します
                    </p>
                  )}
                </div>
              ) : activeTab === 'design' && currentCategoryName === '給湯器' ? (
                /* 設計タブ: 給湯器種類選択カード */
                <div className="max-w-6xl mx-auto px-4">
                  {isDesignReadOnly && (
                    <div className="mb-4 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-700 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        閲覧専用：設計担当が設定した内容を表示しています
                      </p>
                    </div>
                  )}
                  <PageHeader
                    title="給湯器の種類"
                    subtitle={isDesignReadOnly ? '設計担当が設定した内容です' : '給湯器の種類を選択（外装タブで容量等の詳細選択）'}
                  />
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {WATER_HEATER_OPTIONS.map((option) => {
                      const isSelected = cartItems.some(item =>
                        item.product.categoryName === '給湯器' &&
                        (item.product.subcategory === option.subcategory || item.product.name?.includes(option.name.split('エコ')[0]))
                      );
                      const emoji = option.id === 'ecocute' ? '♨️' : option.id === 'ohisama' ? '☀️' : option.id === 'niagara' ? '💧' : '🔥';
                      return (
                        <button
                          key={option.id}
                          disabled={isDesignReadOnly}
                          onClick={() => {
                            if (isDesignReadOnly) return;
                            // 既存の給湯器選択をクリア
                            const heaterItems = cartItems.filter(item =>
                              item.product.categoryName === '給湯器'
                            );
                            heaterItems.forEach(item => removeItem(item.product.id));
                            // 対応するカテゴリの最初の商品をカートに追加
                            const targetProduct = items.find(i =>
                              i.category?.name === '給湯器' &&
                              i.category_name === option.subcategory
                            );
                            if (targetProduct) {
                              const catalogProduct = {
                                id: targetProduct.id,
                                categoryId: targetProduct.category_id || '',
                                categoryName: targetProduct.category?.name || '給湯器',
                                subcategory: targetProduct.category_name || '',
                                name: targetProduct.name,
                                manufacturer: targetProduct.manufacturer || '',
                                modelNumber: targetProduct.model_number || '',
                                unit: targetProduct.unit?.symbol || '個',
                                isOption: !targetProduct.pricing?.some(p => p.is_standard),
                                variants: targetProduct.variants?.map(v => ({
                                  id: v.id,
                                  color: v.color_name || '',
                                  colorCode: v.color_code || '',
                                })) || [],
                                pricing: targetProduct.pricing?.map(p => ({
                                  plan: p.product?.code,
                                  price: p.price,
                                })) || [],
                              };
                              addItem(catalogProduct as any, 1, catalogProduct.variants[0] as any);
                            }
                            // 次のカテゴリへ移動
                            goToNextCategory();
                          }}
                          className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 text-left w-full ${
                            isSelected
                              ? 'border-2 border-blue-500 shadow-lg'
                              : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
                          } ${isDesignReadOnly ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          {/* 画像エリア（正方形） */}
                          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col items-center justify-center">
                            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                              {emoji}
                            </span>
                            {/* 選択済みマーク */}
                            {isSelected && (
                              <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                              </div>
                            )}
                          </div>
                          {/* 情報エリア */}
                          <div className="p-2">
                            <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
                              {option.name}
                            </h3>
                            <span className="text-[10px] text-gray-400 line-clamp-2">{option.description}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {!isDesignReadOnly && (
                    <p className="text-xs text-gray-400 mt-4 text-center">
                      ※この設定は設計担当が管理者画面で設定します
                    </p>
                  )}
                </div>
              ) : needsManufacturerSelection && !isManufacturerSelectionComplete ? (
                /* メーカー/シリーズ選択（水回り設備用） */
                <div className="max-w-4xl mx-auto">
                  <ManufacturerSelector
                    manufacturers={waterEquipmentManufacturers}
                    selectedManufacturer={selectedManufacturer}
                    selectedSeries={selectedSeries}
                    onSelectManufacturer={setSelectedManufacturer}
                    onSelectSeries={setSelectedSeries}
                    onBack={() => {
                      setSelectedManufacturer(null);
                      setSelectedSeries(null);
                    }}
                  />
                </div>
              ) : activeTab === 'furniture' && currentCategoryName === 'ガス乾燥機' && !hasGasSupply ? (
                /* 家具・家電タブ: ガス乾燥機カテゴリでガス未選択時のプロンプト */
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader
                    title="ガス乾燥機を選択"
                    subtitle="ガス引込みが必要です"
                  />
                  <div className="max-w-2xl mx-auto py-8">
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-8 text-center">
                    <div className="text-5xl mb-4">🔥</div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      乾太くんをご検討ですか？
                    </h2>
                    <p className="text-gray-600 mb-4">
                      ガス衣類乾燥機「乾太くん」を設置するには、<br />
                      <span className="font-semibold text-orange-600">ガス引込み工事（税別 35万円）</span>が必要です。
                    </p>
                    <div className="bg-white rounded-lg p-3 mb-6 text-left">
                      <h3 className="font-semibold text-gray-900 mb-2">乾太くんのメリット</h3>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>✓ 電気式の約1/3の時間で乾燥（5kgで約52分）</li>
                        <li>✓ ふんわり仕上がり、生乾き臭なし</li>
                        <li>✓ 天候に左右されない</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => {
                        // 設計タブのガス引込みカテゴリに移動 - slugベースで
                        const gasCategory = categories.find(c => c.name === 'ガス引込み');
                        if (gasCategory?.slug) {
                          navigate(`/catalog/design/${gasCategory.slug}`);
                        } else {
                          navigate('/catalog/design');
                        }
                      }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg transition-all"
                    >
                      <Flame className="w-5 h-5" />
                      ガス引込みを追加する
                    </button>
                    <p className="text-xs text-gray-500 mt-4">
                      ※設計タブでガス引込みの有無を選択できます
                    </p>
                  </div>
                  </div>
                </div>
              ) : activeTab === 'furniture' && currentCategoryName === 'ガス乾燥機' && hasGasSupply ? (
                /* 家具・家電タブ: ガス乾燥機カテゴリでガス引込み済みの場合、カード選択UI */
                <div className="max-w-6xl mx-auto px-4">
                  <PageHeader
                    title="ガス乾燥機を選択"
                    subtitle="乾太くんの本体とアクセサリを選んでください"
                  />
                  {/* 乾太くんのメリットバナー */}
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">🔥</span>
                      <h3 className="font-bold text-gray-900">乾太くん（ガス衣類乾燥機）</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      電気式の約1/3の時間でふっくら乾燥。ガス引込み済みのため選択可能です。
                    </p>
                  </div>

                  {/* 乾太くん本体選択 */}
                  <div className="mb-8">
                    <h4 className="text-sm font-medium text-gray-500 mb-3">本体を選択</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                      {GAS_DRYER_OPTIONS.map((option) => {
                        const isSelected = cartItems.some(i => i.product.id === option.productId);
                        return (
                          <button
                            key={option.id}
                            onClick={() => {
                              // 既存の乾太くん本体を削除
                              GAS_DRYER_OPTIONS.forEach(opt => {
                                const item = cartItems.find(i => i.product.id === opt.productId);
                                if (item) removeItem(item.product.id);
                              });
                              // 選択しない以外の場合、商品を追加
                              if (option.productId !== 'furn-dryer-none') {
                                const product = items.find(i => i.id === option.productId);
                                if (product) {
                                  addItem(convertToCartItem(product), 1);
                                  toast.success('選択しました', option.name);
                                }
                              } else {
                                // 選択しない場合、アクセサリも削除
                                GAS_DRYER_ACCESSORIES.forEach(acc => {
                                  const item = cartItems.find(i => i.product.id === acc.productId);
                                  if (item) removeItem(item.product.id);
                                });
                                toast.info('乾太くんを選択解除しました');
                              }
                            }}
                            className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 text-left w-full ${
                              isSelected
                                ? 'border-2 border-blue-500 shadow-lg'
                                : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
                            }`}
                          >
                            {/* 画像エリア（正方形） */}
                            <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col items-center justify-center">
                              <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
                                {option.icon}
                              </span>
                              {/* 選択済みマーク */}
                              {isSelected && (
                                <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                </div>
                              )}
                            </div>
                            {/* 情報エリア */}
                            <div className="p-2">
                              <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
                                {option.name}
                              </h3>
                              <div className="flex items-baseline gap-1 mt-1">
                                <span className={`text-sm font-bold ${option.price === 0 ? 'text-blue-600' : 'text-gray-900'}`}>
                                  {option.price === 0 ? '標準' : `+¥${option.price.toLocaleString()}`}
                                </span>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 乾太くんアクセサリ選択（本体選択時のみ表示） */}
                  {cartItems.some(i =>
                    i.product.id === 'furn-dryer-001' ||
                    i.product.id === 'furn-dryer-002' ||
                    i.product.id === 'furn-dryer-003'
                  ) && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-3">オプション（任意）</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                        {GAS_DRYER_ACCESSORIES.map((option) => {
                          const isSelected = cartItems.some(i => i.product.id === option.productId);
                          return (
                            <button
                              key={option.id}
                              onClick={() => {
                                if (isSelected) {
                                  removeItem(option.productId);
                                  toast.info('解除しました', option.name);
                                } else {
                                  const product = items.find(i => i.id === option.productId);
                                  if (product) {
                                    addItem(convertToCartItem(product), 1);
                                    toast.success('追加しました', option.name);
                                  }
                                }
                              }}
                              className={`group bg-white rounded-lg overflow-hidden transition-all duration-200 text-left w-full ${
                                isSelected
                                  ? 'border-2 border-blue-500 shadow-lg'
                                  : 'border border-gray-200 hover:border-blue-300 hover:shadow-md'
                              }`}
                            >
                              {/* 画像エリア（正方形） */}
                              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex flex-col items-center justify-center">
                                <span className="text-2xl transition-transform duration-200 group-hover:scale-110">🔧</span>
                                {/* 選択済みマーク */}
                                {isSelected && (
                                  <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-1">
                                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                  </div>
                                )}
                              </div>
                              {/* 情報エリア */}
                              <div className="p-2">
                                <h3 className="font-bold text-xs text-gray-800 line-clamp-2 min-h-[2rem] leading-tight">
                                  {option.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mt-1">
                                  <span className="text-sm font-bold text-gray-900">
                                    +¥{option.price.toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : needsMultiColorSelector ? (
                /* 複数色・面積指定選択UI（外壁、軒天、ベース床、クロス等） */
                <MultiColorAreaSelector
                  categoryId={selectedCategoryId || ''}
                  categoryName={currentCategoryName || ''}
                  products={multiColorProducts}
                  maxColors={3}
                  onComplete={() => {
                    toast.success(`${currentCategoryName}の選択が完了しました`);
                    goToNextCategory();
                  }}
                  onCancel={() => {
                    // 素材タイプ選択に戻る（該当する場合）
                    if (['外壁', 'ベース床'].includes(currentCategoryName || '')) {
                      setSelectedMaterialType('');
                    }
                  }}
                />
              ) : filteredItems.length === 0 ? (
                <div className="max-w-6xl mx-auto px-4">
                  {/* PageHeaderはグローバル位置で表示済み */}
                  <EmptyState searchTerm={searchTerm} onClear={() => setSearchTerm('')} />
                </div>
              ) : (
                <div className="max-w-6xl mx-auto px-4">
                  {/* PageHeaderはグローバル位置で表示済み */}

                  {/* 選択状態バー（サブカテゴリ選択時に表示） */}
                  {selectedMaterialType && ['外壁', '玄関ドア', '外部設備', '外部建材', 'ベース床', '周辺部材'].includes(currentCategoryName || '') && (
                    <SelectionStatusBar
                      label={
                        currentCategoryName === '玄関ドア'
                          ? (selectedMaterialType === 'ハンドル' ? 'ハンドル形状' :
                             selectedMaterialType === 'オプション' ? '追加オプション' :
                             `デザイン: ${selectedMaterialType}`)
                          : selectedMaterialType
                      }
                      itemCount={filteredItems.length}
                      onBack={() => setSelectedMaterialType('')}
                      backLabel={currentCategoryName === '外部建材' ? '他の建材を選ぶ' : '戻る'}
                      variant={currentCategoryName === '外部建材' ? 'highlighted' : 'default'}
                    />
                  )}

                  {/* メーカー選択状態バー（水回り設備用） */}
                  {needsManufacturerSelection && selectedManufacturer && currentCategoryName && (
                    <div className="mb-4">
                      <SelectionBar
                        categoryName={currentCategoryName}
                        selectedManufacturer={selectedManufacturer}
                        selectedSeries={selectedSeries}
                        onClear={() => {
                          setSelectedManufacturer(null);
                          setSelectedSeries(null);
                        }}
                      />
                    </div>
                  )}

                  {/* 商品グリッド - 最大6列表示 */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                    {(() => {
                      // 現在のカテゴリ用の「不要」オプションを取得
                      const currentCategoryName = selectedCategoryId
                        ? categories.find(c => c.id === selectedCategoryId)?.name
                        : null;
                      const notNeededOption = currentCategoryName
                        ? getNotNeededOption(currentCategoryName)
                        : null;
                      const isNotNeededSelected = currentCategoryName
                        ? getSelectionStatus(currentCategoryName) === 'not_needed'
                        : false;

                      // カテゴリごとの最初の標準品IDと標準品数を計算
                      const firstStandardByCategory = new Map<string, string>();
                      const standardCountByCategory = new Map<string, number>();
                      filteredItems.forEach(item => {
                        const catName = item.category?.name || '';
                        if (isStandard(item)) {
                          if (!firstStandardByCategory.has(catName)) {
                            firstStandardByCategory.set(catName, item.id);
                          }
                          standardCountByCategory.set(catName, (standardCountByCategory.get(catName) || 0) + 1);
                        }
                      });

                      return (
                        <>
                          {/* 「不要」カード（対象カテゴリの場合のみ表示） */}
                          {notNeededOption && currentCategoryName && (
                            <NotNeededCard
                              categoryName={currentCategoryName}
                              title={notNeededOption.title}
                              description={notNeededOption.description}
                              isSelected={isNotNeededSelected}
                              onSelect={() => {
                                if (isNotNeededSelected) {
                                  // 選択解除
                                  clearSelection(currentCategoryName);
                                  toast.info(`${currentCategoryName}: 選択解除`);
                                } else {
                                  // 不要として設定
                                  setNotNeeded(currentCategoryName, notNeededOption.title);
                                  toast.success(`${currentCategoryName}: ${notNeededOption.title}`);
                                }
                              }}
                            />
                          )}

                          {/* 商品カード */}
                          {paginatedItems.map((item, index) => {
                        const catName = item.category?.name || '';
                        const isFirstStandard = firstStandardByCategory.get(catName) === item.id;
                        const standardCount = standardCountByCategory.get(catName) || 0;
                        const badge = getRecommendBadge(item, isStandard(item), isFirstStandard, standardCount);

                        return (
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
                            handleToggleFavorite={handleToggleFavorite}
                            isFavorite={isFavorite}
                            searchTerm={searchTerm}
                            showManufacturer={true}
                            planName={selectedPlanId}
                            recommendBadge={badge}
                          />
                        );
                      })}
                        </>
                      );
                    })()}
                  </div>

                  {/* ページネーション */}
                  <Pagination
                    currentPage={currentPage}
                    totalItems={filteredItems.length}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}

            </div>
          </div>
        </div>

        {/* モバイル用 - 下部ナビゲーションバー */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg safe-area-pb">
          <div className="flex items-center justify-between p-3 gap-3">
            {/* メインアクション */}
            {isCurrentStepComplete ? (
              <button
                onClick={goToNextStep}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold shadow-lg"
              >
                次のステップへ
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : isCurrentCategoryDecided ? (
              <button
                onClick={goToNextCategory}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-bold shadow-lg"
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

            {/* 見積書出力 */}
            <button
              onClick={() => setIsEstimateDialogOpen(true)}
              className="relative p-3 bg-indigo-500 text-white rounded-xl active:scale-95 transition-transform hover:bg-indigo-600"
              aria-label="見積書を出力"
              title="見積書を出力（PDF/Excel）"
            >
              <FileDown className="w-5 h-5" />
            </button>

            {/* 選択リスト */}
            <button
              onClick={onCartClick}
              className="relative p-3 bg-blue-500 text-white rounded-xl active:scale-95 transition-transform"
              aria-label={`選択した仕様を確認（${cartItems.length}件）`}
            >
              <ClipboardCheck className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* 見積書出力ダイアログ */}
      <EstimateExportDialog
        isOpen={isEstimateDialogOpen}
        onClose={() => setIsEstimateDialogOpen(false)}
      />

      {/* 選択解除確認ダイアログ */}
      <RemovalConfirmDialog />

      {/* 部屋選択モーダル（商品の適用部屋を選択） */}
      {roomSelectionModal && (
        <RoomSelectionModal
          isOpen={roomSelectionModal.isOpen}
          onClose={() => setRoomSelectionModal(null)}
          onConfirm={handleRoomSelectionConfirm}
          categoryName={roomSelectionModal.categoryName}
          productName={roomSelectionModal.productName}
        />
      )}

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
