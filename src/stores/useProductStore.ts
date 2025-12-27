import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/product';
import { supabase } from '../lib/supabase';
import { createLogger } from '../lib/logger';

// 静的データ（フォールバック用）
import { exteriorProducts as staticExteriorProducts } from '../data/exteriorProducts';
import { interiorProducts as staticInteriorProducts } from '../data/interiorProducts';
import { waterEquipmentProducts as staticWaterProducts } from '../data/waterEquipmentProducts';

const logger = createLogger('ProductStore');

// DBのitem_pricingからプランコードをProduct.PricingInfo.planに変換
const PLAN_CODE_MAP: Record<string, 'LACIE' | 'HOURS' | 'LIFE+' | 'LIFE'> = {
  'LACIE': 'LACIE',
  'HOURS': 'HOURS',
  'LIFE_PLUS': 'LIFE+',
  'LIFE': 'LIFE',
};

// DBのItemデータをProduct型に変換
interface DBItem {
  id: string;
  item_code: string;
  name: string;
  manufacturer: string | null;
  model_number: string | null;
  note: string | null;
  category_name: string | null;
  is_active: boolean;
  category?: {
    id: string;
    name: string;
    slug: string;
    category_type: string;
  } | null;
  unit?: {
    code: string;
    symbol: string;
  } | null;
  variants?: Array<{
    id: string;
    variant_code: string;
    color_name: string;
    color_code: string | null;
    images?: Array<{
      image_url: string;
      thumbnail_url: string | null;
    }>;
  }>;
  pricing?: Array<{
    price: number;
    is_standard: boolean;
    product?: {
      code: string;
    } | null;
  }>;
}

const convertDBItemToProduct = (item: DBItem, categoryType: string): Product => {
  // noteから[subcategory]を抽出
  let subcategory = '';
  if (item.note) {
    const match = item.note.match(/\[([^\]]+)\]$/);
    if (match) {
      subcategory = match[1];
    }
  }

  // pricingからisOptionを判定
  const isOption = item.pricing?.some(p => !p.is_standard) ?? false;

  return {
    id: item.item_code || item.id,
    categoryId: item.category?.slug || '',
    categoryName: item.category?.name || item.category_name || '',
    subcategory: subcategory || item.category_name || '',
    name: item.name,
    manufacturer: item.manufacturer || '',
    modelNumber: item.model_number || '',
    unit: (item.unit?.code || 'piece') as Product['unit'],
    isOption,
    description: item.note?.replace(/\s*\[[^\]]+\]$/, '') || '',
    variants: item.variants?.map(v => ({
      id: v.id,
      color: v.color_name,
      colorCode: v.color_code || undefined,
      imageUrl: v.images?.[0]?.image_url,
      thumbnailUrl: v.images?.[0]?.thumbnail_url || undefined,
      images: v.images?.map(img => img.image_url) || [],
    })) || [],
    pricing: item.pricing?.map(p => ({
      plan: PLAN_CODE_MAP[p.product?.code || 'LACIE'] || 'LACIE',
      planId: PLAN_CODE_MAP[p.product?.code || 'LACIE'] || 'LACIE',
      price: p.price,
    })) || [],
  };
};

interface ProductStore {
  exteriorProducts: Product[];
  interiorProducts: Product[];
  waterProducts: Product[];

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

// カテゴリタイプでアイテムを取得するヘルパー
const fetchItemsByCategory = async (categoryType: string): Promise<Product[]> => {
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

    // カテゴリタイプでフィルタリング
    const filteredItems = data.filter(item =>
      item.category?.category_type === categoryType
    );

    // バリアント情報があるかチェック（データ完全性の確認）
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

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      exteriorProducts: staticExteriorProducts,
      interiorProducts: staticInteriorProducts,
      waterProducts: staticWaterProducts,
      isLoading: false,
      isDBConnected: false,
      lastFetchedAt: null,

      // DB優先でデータを取得
      fetchProducts: async () => {
        set({ isLoading: true });

        try {
          // 並列でDB取得
          const [exteriorFromDB, interiorFromDB, equipmentFromDB] = await Promise.all([
            fetchItemsByCategory('exterior'),
            fetchItemsByCategory('interior'),
            fetchItemsByCategory('equipment'),
          ]);

          // DBにデータがあれば使用、なければ静的データにフォールバック
          const hasExteriorData = exteriorFromDB.length > 0 &&
            exteriorFromDB.some(p => p.variants.length > 0);
          const hasInteriorData = interiorFromDB.length > 0 &&
            interiorFromDB.some(p => p.variants.length > 0);
          const hasEquipmentData = equipmentFromDB.length > 0 &&
            equipmentFromDB.some(p => p.variants.length > 0);

          const isDBConnected = hasExteriorData || hasInteriorData || hasEquipmentData;

          set({
            exteriorProducts: hasExteriorData ? exteriorFromDB : staticExteriorProducts,
            interiorProducts: hasInteriorData ? interiorFromDB : staticInteriorProducts,
            waterProducts: hasEquipmentData ? equipmentFromDB : staticWaterProducts,
            isLoading: false,
            isDBConnected,
            lastFetchedAt: new Date(),
          });

          if (isDBConnected) {
            logger.info('Products loaded from database');
          } else {
            logger.info('Products loaded from static files (DB has no data or variants)');
          }
        } catch (err) {
          logger.error('Error fetching products:', err);
          // エラー時は静的データを使用
          set({
            exteriorProducts: staticExteriorProducts,
            interiorProducts: staticInteriorProducts,
            waterProducts: staticWaterProducts,
            isLoading: false,
            isDBConnected: false,
          });
        }
      },

      refreshProducts: async () => {
        await get().fetchProducts();
      },

      // エクステリア商品管理（DB同期）
      addExteriorProduct: async (product) => {
        // ローカルステートを即座に更新
        set((state) => ({
          exteriorProducts: [...state.exteriorProducts, product]
        }));
        // TODO: DB同期（Supabase insert）
      },

      updateExteriorProduct: async (id, updatedData) => {
        set((state) => ({
          exteriorProducts: state.exteriorProducts.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          )
        }));
        // TODO: DB同期（Supabase update）
      },

      deleteExteriorProduct: async (id) => {
        set((state) => ({
          exteriorProducts: state.exteriorProducts.filter(p => p.id !== id)
        }));
        // TODO: DB同期（Supabase delete）
      },

      // インテリア商品管理（DB同期）
      addInteriorProduct: async (product) => {
        set((state) => ({
          interiorProducts: [...state.interiorProducts, product]
        }));
      },

      updateInteriorProduct: async (id, updatedData) => {
        set((state) => ({
          interiorProducts: state.interiorProducts.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          )
        }));
      },

      deleteInteriorProduct: async (id) => {
        set((state) => ({
          interiorProducts: state.interiorProducts.filter(p => p.id !== id)
        }));
      },

      // 水廻り商品管理（DB同期）
      addWaterProduct: async (product) => {
        set((state) => ({
          waterProducts: [...state.waterProducts, product]
        }));
      },

      updateWaterProduct: async (id, updatedData) => {
        set((state) => ({
          waterProducts: state.waterProducts.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          )
        }));
      },

      deleteWaterProduct: async (id) => {
        set((state) => ({
          waterProducts: state.waterProducts.filter(p => p.id !== id)
        }));
      },

      // 全商品取得
      getAllProducts: () => {
        const state = get();
        return [
          ...state.exteriorProducts,
          ...state.interiorProducts,
          ...state.waterProducts
        ];
      }
    }),
    {
      name: 'lifex-products-storage',
      version: 2, // バージョンアップで古いキャッシュを無効化
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
