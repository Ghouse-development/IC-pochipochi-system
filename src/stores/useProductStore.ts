import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, ProductVariant, PricingInfo, PlanType } from '../types/product';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { createLogger } from '../lib/logger';

const logger = createLogger('ProductStore');

// 静的データの動的インポート（フォールバック時のみ読み込み）
const loadStaticData = async (): Promise<{
  exterior: Product[];
  interior: Product[];
  water: Product[];
  furniture: Product[];
}> => {
  const [
    { exteriorProducts },
    { interiorProducts },
    { waterEquipmentProducts },
    { furnitureProducts },
  ] = await Promise.all([
    import('../data/exteriorProducts'),
    import('../data/interiorProducts'),
    import('../data/waterEquipmentProducts'),
    import('../data/furnitureProducts'),
  ]);
  return {
    exterior: exteriorProducts,
    interior: interiorProducts,
    water: waterEquipmentProducts,
    furniture: furnitureProducts,
  };
};

// プランコードマッピング（DB → TypeScript）
const DB_PLAN_CODE_MAP: Record<string, PlanType> = {
  'lacie': 'LACIE',
  'hours': 'HOURS',
  'life-plus': 'LIFE+',
  'life': 'LIFE',
  'life-x': 'LIFE_X',
};

// DBアイテム型定義
interface DBItem {
  id: string;
  item_code: string;
  name: string;
  manufacturer: string | null;
  model_number: string | null;
  material_type: string | null;
  note: string | null;
  catalog_url: string | null;
  is_hit: boolean;
  is_active: boolean;
  display_order: number;
  tags: string[] | null;
  category: {
    id: string;
    slug: string;
    name: string;
    category_type: string;
  } | null;
  variants: Array<{
    id: string;
    variant_code: string;
    color_name: string;
    color_code: string | null;
    is_active: boolean;
    display_order: number;
    is_hit: boolean;
    images: Array<{
      id: string;
      image_url: string;
      thumbnail_url: string | null;
      is_primary: boolean;
      display_order: number;
    }>;
  }>;
  pricing: Array<{
    id: string;
    price: number;
    is_standard: boolean;
    is_available: boolean;
    product: {
      id: string;
      code: string;
      name: string;
    } | null;
  }>;
}

// DBアイテムをProduct型に変換
const convertDBItemToProduct = (item: DBItem): Product => {
  // カテゴリ情報
  const categorySlug = item.category?.slug || (item.tags?.[0] || 'unknown');
  const categoryName = item.category?.name || item.tags?.[0] || 'その他';

  // バリアント変換
  const variants: ProductVariant[] = item.variants
    .filter(v => v.is_active)
    .sort((a, b) => a.display_order - b.display_order)
    .map(v => ({
      id: v.variant_code.replace(`${item.item_code}-`, ''),
      color: v.color_name,
      colorCode: v.color_code || '',
      images: v.images
        .sort((a, b) => a.display_order - b.display_order)
        .map(img => img.image_url),
      thumbnailUrl: v.images.find(img => img.is_primary)?.thumbnail_url || v.images[0]?.image_url,
    }));

  // 価格変換
  const pricing: PricingInfo[] = item.pricing
    .filter(p => p.is_available && p.product)
    .map(p => ({
      plan: DB_PLAN_CODE_MAP[p.product!.code] || (p.product!.name as PlanType),
      price: Number(p.price),
    }));

  // is_standardから判定
  const isOption = !item.pricing.some(p => p.is_standard && p.price === 0);

  return {
    id: item.item_code,
    categoryId: categorySlug,
    categoryName: categoryName,
    subcategory: '',
    name: item.name,
    manufacturer: item.manufacturer || '',
    modelNumber: item.model_number || '',
    unit: '㎡', // デフォルト、必要に応じてDB拡張
    isOption,
    isHit: item.is_hit,
    variants,
    pricing,
    description: item.note || undefined,
    materialType: item.material_type || undefined,
  };
};

// カテゴリタイプでアイテムを取得
const fetchItemsByCategory = async (categoryType: string): Promise<Product[]> => {
  if (!isSupabaseConfigured) {
    logger.debug(`Supabase not configured, skipping ${categoryType} fetch`);
    return [];
  }

  try {
    const { data, error } = await supabase
      .from('items')
      .select(`
        *,
        category:categories(*),
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

    if (error) {
      logger.error(`Error fetching ${categoryType} items:`, error);
      return [];
    }

    if (!data || data.length === 0) {
      logger.debug(`No ${categoryType} items found in DB`);
      return [];
    }

    // カテゴリタイプでフィルタ
    const filteredItems = data.filter(item =>
      item.category?.category_type === categoryType ||
      (item.tags && item.tags.some((tag: string) => tag.startsWith(categoryType)))
    );

    logger.info(`Fetched ${filteredItems.length} ${categoryType} items from Supabase`);

    return filteredItems.map(item => convertDBItemToProduct(item as DBItem));
  } catch (err) {
    logger.error(`Error fetching ${categoryType} items:`, err);
    return [];
  }
};

interface ProductStore {
  exteriorProducts: Product[];
  interiorProducts: Product[];
  waterProducts: Product[];
  furnitureProducts: Product[];

  // データ読み込み状態
  isLoading: boolean;
  isDBConnected: boolean;
  lastFetchedAt: Date | null;

  // データ取得（DB優先、静的データフォールバック）
  fetchProducts: () => Promise<void>;
  refreshProducts: () => Promise<void>;

  // エクステリア商品管理（DBと同期）
  addExteriorProduct: (product: Product) => Promise<void>;
  updateExteriorProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteExteriorProduct: (id: string) => Promise<void>;

  // インテリア商品管理（DBと同期）
  addInteriorProduct: (product: Product) => Promise<void>;
  updateInteriorProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteInteriorProduct: (id: string) => Promise<void>;

  // 水廻り商品管理（DBと同期）
  addWaterProduct: (product: Product) => Promise<void>;
  updateWaterProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteWaterProduct: (id: string) => Promise<void>;

  // 全商品取得
  getAllProducts: () => Product[];
}


export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      exteriorProducts: [],
      interiorProducts: [],
      waterProducts: [],
      furnitureProducts: [],
      isLoading: false,
      isDBConnected: false,
      lastFetchedAt: null,

      // Supabase優先、静的データフォールバック
      fetchProducts: async () => {
        set({ isLoading: true });

        try {
          // 1. まずSupabaseから取得を試みる
          if (isSupabaseConfigured) {
            logger.info('Fetching products from Supabase...');

            const [exterior, interior, equipment, other] = await Promise.all([
              fetchItemsByCategory('exterior'),
              fetchItemsByCategory('interior'),
              fetchItemsByCategory('equipment'),
              fetchItemsByCategory('other'),
            ]);

            const totalFromDB = exterior.length + interior.length + equipment.length + other.length;

            if (totalFromDB > 0) {
              set({
                exteriorProducts: exterior,
                interiorProducts: interior,
                waterProducts: equipment,
                furnitureProducts: other,
                isLoading: false,
                isDBConnected: true,
                lastFetchedAt: new Date(),
              });

              logger.info(`Products loaded from Supabase: ${totalFromDB} items (exterior: ${exterior.length}, interior: ${interior.length}, equipment: ${equipment.length}, other: ${other.length})`);
              return;
            }

            logger.warn('Supabase returned no products, falling back to static data');
          }

          // 2. Supabaseが空または未設定の場合は静的データにフォールバック
          const staticData = await loadStaticData();

          set({
            exteriorProducts: staticData.exterior,
            interiorProducts: staticData.interior,
            waterProducts: staticData.water,
            furnitureProducts: staticData.furniture,
            isLoading: false,
            isDBConnected: false,
            lastFetchedAt: new Date(),
          });

          logger.info('Products loaded from static files (fallback)');

        } catch (err) {
          logger.error('Error loading products:', err);

          // エラー時も静的データにフォールバック
          try {
            const staticData = await loadStaticData();
            set({
              exteriorProducts: staticData.exterior,
              interiorProducts: staticData.interior,
              waterProducts: staticData.water,
              furnitureProducts: staticData.furniture,
              isLoading: false,
              isDBConnected: false,
              lastFetchedAt: new Date(),
            });
            logger.info('Products loaded from static files (error fallback)');
          } catch (staticErr) {
            logger.error('Failed to load static data:', staticErr);
            set({ isLoading: false, isDBConnected: false });
          }
        }
      },

      refreshProducts: async () => {
        await get().fetchProducts();
      },

      // エクステリア商品管理（ローカルステート更新、再フェッチでDB同期）
      addExteriorProduct: async (product) => {
        set((state) => ({
          exteriorProducts: [...state.exteriorProducts, product]
        }));
        logger.info(`Product ${product.id} added locally`);
      },

      updateExteriorProduct: async (id, updatedData) => {
        set((state) => ({
          exteriorProducts: state.exteriorProducts.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          )
        }));
        logger.info(`Product ${id} updated locally`);
      },

      deleteExteriorProduct: async (id) => {
        set((state) => ({
          exteriorProducts: state.exteriorProducts.filter(p => p.id !== id)
        }));
        logger.info(`Product ${id} deleted locally`);
      },

      // インテリア商品管理（ローカルステート更新、再フェッチでDB同期）
      addInteriorProduct: async (product) => {
        set((state) => ({
          interiorProducts: [...state.interiorProducts, product]
        }));
        logger.info(`Interior product ${product.id} added locally`);
      },

      updateInteriorProduct: async (id, updatedData) => {
        set((state) => ({
          interiorProducts: state.interiorProducts.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          )
        }));
        logger.info(`Interior product ${id} updated locally`);
      },

      deleteInteriorProduct: async (id) => {
        set((state) => ({
          interiorProducts: state.interiorProducts.filter(p => p.id !== id)
        }));
        logger.info(`Interior product ${id} deleted locally`);
      },

      // 水廻り商品管理（ローカルステート更新、再フェッチでDB同期）
      addWaterProduct: async (product) => {
        set((state) => ({
          waterProducts: [...state.waterProducts, product]
        }));
        logger.info(`Water product ${product.id} added locally`);
      },

      updateWaterProduct: async (id, updatedData) => {
        set((state) => ({
          waterProducts: state.waterProducts.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          )
        }));
        logger.info(`Water product ${id} updated locally`);
      },

      deleteWaterProduct: async (id) => {
        set((state) => ({
          waterProducts: state.waterProducts.filter(p => p.id !== id)
        }));
        logger.info(`Water product ${id} deleted locally`);
      },

      // 全商品取得
      getAllProducts: () => {
        const state = get();
        return [
          ...state.exteriorProducts,
          ...state.interiorProducts,
          ...state.waterProducts,
          ...state.furnitureProducts
        ];
      }
    }),
    {
      name: 'lifex-products-storage',
      version: 3, // バージョンアップで古いキャッシュを無効化
      partialize: (state) => ({
        // 永続化するのは最小限（読み込み状態は保存しない）
        lastFetchedAt: state.lastFetchedAt,
        isDBConnected: state.isDBConnected,
      }),
    }
  )
);

// アプリ起動時に自動でフェッチ
// 商品データは永続化されないため、毎回読み込む必要がある
const autoFetch = () => {
  const state = useProductStore.getState();
  const hasProducts = state.exteriorProducts.length > 0 ||
                      state.interiorProducts.length > 0 ||
                      state.waterProducts.length > 0 ||
                      state.furnitureProducts.length > 0;

  // 商品が空なら必ずフェッチ（lastFetchedAtに関係なく）
  if (!hasProducts) {
    state.fetchProducts();
  }
};

// 初回ロード時に実行
if (typeof window !== 'undefined') {
  // 遅延実行で他の初期化を待つ
  setTimeout(autoFetch, 100);
}
