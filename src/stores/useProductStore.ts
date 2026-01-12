import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/product';
// DB連携用（将来のSupabaseデータ移行時に使用）
// import type { ProductVariant, PricingInfo } from '../types/product';
// import { supabase, isSupabaseConfigured } from '../lib/supabase';
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

/*
 * =============================================================================
 * DB連携用のヘルパー関数（将来のSupabaseデータ移行時に使用）
 * 現在は静的データを優先しているため、すべてコメントアウト
 * =============================================================================
 *
let unitCache: Map<string, string> | null = null;
let categoryCache: Map<string, { id: string; type: string }> | null = null;
let productCodeCache: Map<string, string> | null = null;

const initializeCaches = async () => { ... };
const convertProductToDBItem = async (product: Product, _categoryType: string) => { ... };
const convertVariantToDBFormat = (variant: ProductVariant, itemId: string) => { ... };
const convertPricingToDBFormat = async (pricing: PricingInfo, itemId: string) => { ... };
const PLAN_CODE_MAP = { ... };
interface DBItem { ... }
const convertDBItemToProduct = (item: DBItem, _categoryType: string): Product => { ... };
*/

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

/*
 * カテゴリタイプでアイテムを取得するヘルパー（将来のDB連携用）
 * 現在は静的データを優先しているため未使用
 * DBにデータを移行したら、この関数を有効化する
 *
const fetchItemsByCategory = async (categoryType: string): Promise<Product[]> => {
  if (!isSupabaseConfigured) {
    return [];
  }

  try {
    const { data, error } = await supabase
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

    if (error) {
      logger.error(`Error fetching ${categoryType} items:`, error);
      return [];
    }

    if (!data || data.length === 0) {
      return [];
    }

    const filteredItems = data.filter(item =>
      item.category?.category_type === categoryType
    );

    const hasVariants = filteredItems.some(item => item.variants && item.variants.length > 0);
    if (!hasVariants) {
      logger.warn(`No variants found for ${categoryType} items, may need DB import`);
    }

    return filteredItems.map(item => convertDBItemToProduct(item as DBItem, categoryType));
  } catch (err) {
    logger.error(`Error fetching ${categoryType} items:`, err);
    return [];
  }
};
*/

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

      // 静的データ優先で即座に表示（DBは後でバックグラウンド同期）
      fetchProducts: async () => {
        set({ isLoading: true });

        try {
          // 1. まず静的データを即座に読み込み（高速）
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

          logger.info('Products loaded from static files (instant)');

          // 2. バックグラウンドでDBをチェック（将来的にDB優先に切り替え時用）
          // 現在はDBにデータがないため、静的データのみ使用
          // DBにデータが入ったら、ここでマージ処理を追加可能

        } catch (err) {
          logger.error('Error loading products:', err);
          set({ isLoading: false, isDBConnected: false });
        }
      },

      refreshProducts: async () => {
        await get().fetchProducts();
      },

      // エクステリア商品管理（ローカルのみ、DB同期は将来対応）
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

      // インテリア商品管理（ローカルのみ、DB同期は将来対応）
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

      // 水廻り商品管理（ローカルのみ、DB同期は将来対応）
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

// アプリ起動時に自動でDBからフェッチ（1分以上経過していれば）
const autoFetch = () => {
  const state = useProductStore.getState();
  const lastFetch = state.lastFetchedAt;
  const shouldFetch = !lastFetch || (Date.now() - new Date(lastFetch).getTime() > 60000);

  if (shouldFetch) {
    state.fetchProducts();
  }
};

// 初回ロード時に実行
if (typeof window !== 'undefined') {
  // 遅延実行で他の初期化を待つ
  setTimeout(autoFetch, 100);
}
