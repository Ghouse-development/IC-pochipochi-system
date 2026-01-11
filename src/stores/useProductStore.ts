import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, ProductVariant, PricingInfo } from '../types/product';
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

// 単位コードからIDを取得するためのキャッシュ
let unitCache: Map<string, string> | null = null;
let categoryCache: Map<string, { id: string; type: string }> | null = null;
let productCodeCache: Map<string, string> | null = null;

// キャッシュ初期化
const initializeCaches = async () => {
  if (unitCache && categoryCache && productCodeCache) return;
  if (!isSupabaseConfigured) {
    // Supabase未設定時は空のキャッシュを設定
    unitCache = new Map();
    categoryCache = new Map();
    productCodeCache = new Map();
    return;
  }

  try {
    // 単位マスタを取得
    const { data: units } = await supabase.from('units').select('id, code');
    unitCache = new Map((units || []).map(u => [u.code, u.id]));

    // カテゴリマスタを取得
    const { data: categories } = await supabase.from('categories').select('id, slug, category_type');
    categoryCache = new Map((categories || []).map(c => [c.slug, { id: c.id, type: c.category_type }]));

    // 商品（プラン）マスタを取得
    const { data: products } = await supabase.from('products').select('id, code');
    productCodeCache = new Map((products || []).map(p => [p.code, p.id]));
  } catch (err) {
    logger.error('Failed to initialize caches:', err);
  }
};

// ProductをDB形式に変換
const convertProductToDBItem = async (product: Product, _categoryType: string) => {
  await initializeCaches();

  // カテゴリIDを取得
  const categoryInfo = categoryCache?.get(product.categoryId);
  const categoryId = categoryInfo?.id || null;

  // 単位IDを取得（日本語→コードの変換も対応）
  const unitCodeMap: Record<string, string> = {
    '㎡': 'sqm', '個': 'piece', '箇所': 'location', '一式': 'set',
    '梱': 'package', '枚': 'sheet', 'm': 'meter', '台': 'unit', '組': 'pair', '式': 'set'
  };
  const unitCode = unitCodeMap[product.unit] || product.unit;
  const unitId = unitCache?.get(unitCode) || null;

  // noteフィールド（説明 + [subcategory]）
  const note = product.subcategory
    ? `${product.description || ''} [${product.subcategory}]`.trim()
    : product.description || null;

  return {
    item_code: product.id,
    name: product.name,
    category_id: categoryId,
    category_name: product.categoryName,
    manufacturer: product.manufacturer || null,
    series: product.series || null,
    model_number: product.modelNumber || null,
    note,
    unit_id: unitId,
    material_type: product.materialType || null,
    is_active: true,
    is_hit: false,
    display_order: 0,
  };
};

// バリアントをDB形式に変換
const convertVariantToDBFormat = (variant: ProductVariant, itemId: string) => ({
  item_id: itemId,
  variant_code: variant.id,
  color_name: variant.color,
  color_code: variant.colorCode || null,
  description: null,
  is_active: true,
  display_order: 0,
});

// 価格情報をDB形式に変換
const convertPricingToDBFormat = async (pricing: PricingInfo, itemId: string) => {
  await initializeCaches();

  const planCode = pricing.plan || pricing.planId || 'LACIE';
  // LIFE+はDB上ではLIFE_PLUSとして保存
  const dbPlanCode = planCode === 'LIFE+' ? 'LIFE_PLUS' : planCode;
  const productId = productCodeCache?.get(dbPlanCode) || null;

  return {
    item_id: itemId,
    product_id: productId,
    price: pricing.price,
    is_standard: true,
    is_available: true,
    installation_cost: 0,
    effective_date: new Date().toISOString().split('T')[0],
  };
};

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

const convertDBItemToProduct = (item: DBItem, _categoryType: string): Product => {
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

// カテゴリタイプでアイテムを取得するヘルパー
const fetchItemsByCategory = async (categoryType: string): Promise<Product[]> => {
  // Supabase未設定時は空配列を返す（静的データにフォールバック）
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
      exteriorProducts: [],
      interiorProducts: [],
      waterProducts: [],
      furnitureProducts: [],
      isLoading: false,
      isDBConnected: false,
      lastFetchedAt: null,

      // DB優先でデータを取得
      fetchProducts: async () => {
        set({ isLoading: true });

        try {
          // 並列でDB取得（家具・家電も含む）
          const [exteriorFromDB, interiorFromDB, equipmentFromDB, otherFromDB] = await Promise.all([
            fetchItemsByCategory('exterior'),
            fetchItemsByCategory('interior'),
            fetchItemsByCategory('equipment'),
            fetchItemsByCategory('other'), // 家具・家電・その他
          ]);

          // DBにデータがあれば使用（バリアント有無は問わない）
          const hasExteriorData = exteriorFromDB.length > 0;
          const hasInteriorData = interiorFromDB.length > 0;
          const hasEquipmentData = equipmentFromDB.length > 0;
          const hasOtherData = otherFromDB.length > 0;

          const isDBConnected = hasExteriorData || hasInteriorData || hasEquipmentData || hasOtherData;

          // ログ出力
          logger.info(`DB fetch results: exterior=${exteriorFromDB.length}, interior=${interiorFromDB.length}, equipment=${equipmentFromDB.length}, other=${otherFromDB.length}`);

          // DBにデータがない場合のみ静的データをフォールバックとして読み込む
          let finalExterior = exteriorFromDB;
          let finalInterior = interiorFromDB;
          let finalWater = equipmentFromDB;
          let finalFurniture = otherFromDB;

          if (!isDBConnected) {
            logger.info('Loading static data as fallback...');
            const staticData = await loadStaticData();
            finalExterior = hasExteriorData ? exteriorFromDB : staticData.exterior;
            finalInterior = hasInteriorData ? interiorFromDB : staticData.interior;
            finalWater = hasEquipmentData ? equipmentFromDB : staticData.water;
            finalFurniture = hasOtherData ? otherFromDB : staticData.furniture;
          }

          set({
            exteriorProducts: finalExterior,
            interiorProducts: finalInterior,
            waterProducts: finalWater,
            furnitureProducts: finalFurniture,
            isLoading: false,
            isDBConnected,
            lastFetchedAt: new Date(),
          });

          if (isDBConnected) {
            logger.info('Products loaded from database');
          } else {
            logger.info('Products loaded from static files (DB has no data)');
          }
        } catch (err) {
          logger.error('Error fetching products:', err);
          // エラー時は静的データを使用（動的読み込み）
          try {
            const staticData = await loadStaticData();
            set({
              exteriorProducts: staticData.exterior,
              interiorProducts: staticData.interior,
              waterProducts: staticData.water,
              furnitureProducts: staticData.furniture,
              isLoading: false,
              isDBConnected: false,
            });
          } catch (loadErr) {
            logger.error('Failed to load static data:', loadErr);
            set({ isLoading: false, isDBConnected: false });
          }
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

        // DB同期
        try {
          const dbItem = await convertProductToDBItem(product, 'exterior');
          const { data: insertedItem, error: itemError } = await supabase
            .from('items')
            .insert(dbItem)
            .select('id')
            .single();

          if (itemError) throw itemError;

          const itemId = insertedItem.id;

          // バリアントを挿入
          if (product.variants.length > 0) {
            const variants = product.variants.map(v => convertVariantToDBFormat(v, itemId));
            const { data: insertedVariants, error: variantError } = await supabase
              .from('item_variants')
              .insert(variants)
              .select('id, variant_code');

            if (variantError) {
              logger.error('Failed to insert variants:', variantError);
            } else if (insertedVariants) {
              // バリアント画像を挿入
              const variantImages = product.variants.flatMap((v) => {
                const dbVariant = insertedVariants.find(dv => dv.variant_code === v.id);
                if (!dbVariant || !v.imageUrl) return [];
                return [{
                  variant_id: dbVariant.id,
                  image_url: v.imageUrl,
                  thumbnail_url: v.thumbnailUrl || null,
                  is_primary: true,
                  display_order: 0,
                }];
              });
              if (variantImages.length > 0) {
                await supabase.from('item_variant_images').insert(variantImages);
              }
            }
          }

          // 価格情報を挿入
          if (product.pricing.length > 0) {
            const pricingPromises = product.pricing.map(p => convertPricingToDBFormat(p, itemId));
            const pricingData = await Promise.all(pricingPromises);
            const validPricing = pricingData.filter(p => p.product_id !== null);
            if (validPricing.length > 0) {
              await supabase.from('item_pricing').insert(validPricing);
            }
          }

          logger.info(`Product ${product.id} synced to database`);
        } catch (err) {
          logger.error('Failed to sync product to database:', err);
        }
      },

      updateExteriorProduct: async (id, updatedData) => {
        set((state) => ({
          exteriorProducts: state.exteriorProducts.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          )
        }));

        // DB同期
        try {
          const updateFields: Record<string, unknown> = {};
          if (updatedData.name) updateFields.name = updatedData.name;
          if (updatedData.manufacturer !== undefined) updateFields.manufacturer = updatedData.manufacturer;
          if (updatedData.modelNumber !== undefined) updateFields.model_number = updatedData.modelNumber;
          if (updatedData.description !== undefined) updateFields.note = updatedData.description;
          if (updatedData.materialType !== undefined) updateFields.material_type = updatedData.materialType;
          if (updatedData.series !== undefined) updateFields.series = updatedData.series;

          if (Object.keys(updateFields).length > 0) {
            const { error } = await supabase
              .from('items')
              .update(updateFields)
              .eq('item_code', id);

            if (error) throw error;
            logger.info(`Product ${id} updated in database`);
          }
        } catch (err) {
          logger.error('Failed to update product in database:', err);
        }
      },

      deleteExteriorProduct: async (id) => {
        set((state) => ({
          exteriorProducts: state.exteriorProducts.filter(p => p.id !== id)
        }));

        // DB同期（論理削除）
        try {
          const { error } = await supabase
            .from('items')
            .update({ is_active: false })
            .eq('item_code', id);

          if (error) throw error;
          logger.info(`Product ${id} deactivated in database`);
        } catch (err) {
          logger.error('Failed to deactivate product in database:', err);
        }
      },

      // インテリア商品管理（DB同期）
      addInteriorProduct: async (product) => {
        set((state) => ({
          interiorProducts: [...state.interiorProducts, product]
        }));

        // DB同期（エクステリアと同じロジック）
        try {
          const dbItem = await convertProductToDBItem(product, 'interior');
          const { data: insertedItem, error: itemError } = await supabase
            .from('items')
            .insert(dbItem)
            .select('id')
            .single();

          if (itemError) throw itemError;

          const itemId = insertedItem.id;

          // バリアントを挿入
          if (product.variants.length > 0) {
            const variants = product.variants.map(v => convertVariantToDBFormat(v, itemId));
            const { data: insertedVariants, error: variantError } = await supabase
              .from('item_variants')
              .insert(variants)
              .select('id, variant_code');

            if (variantError) {
              logger.error('Failed to insert variants:', variantError);
            } else if (insertedVariants) {
              const variantImages = product.variants.flatMap(v => {
                const dbVariant = insertedVariants.find(dv => dv.variant_code === v.id);
                if (!dbVariant || !v.imageUrl) return [];
                return [{
                  variant_id: dbVariant.id,
                  image_url: v.imageUrl,
                  thumbnail_url: v.thumbnailUrl || null,
                  is_primary: true,
                  display_order: 0,
                }];
              });
              if (variantImages.length > 0) {
                await supabase.from('item_variant_images').insert(variantImages);
              }
            }
          }

          // 価格情報を挿入
          if (product.pricing.length > 0) {
            const pricingPromises = product.pricing.map(p => convertPricingToDBFormat(p, itemId));
            const pricingData = await Promise.all(pricingPromises);
            const validPricing = pricingData.filter(p => p.product_id !== null);
            if (validPricing.length > 0) {
              await supabase.from('item_pricing').insert(validPricing);
            }
          }

          logger.info(`Interior product ${product.id} synced to database`);
        } catch (err) {
          logger.error('Failed to sync interior product to database:', err);
        }
      },

      updateInteriorProduct: async (id, updatedData) => {
        set((state) => ({
          interiorProducts: state.interiorProducts.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          )
        }));

        // DB同期
        try {
          const updateFields: Record<string, unknown> = {};
          if (updatedData.name) updateFields.name = updatedData.name;
          if (updatedData.manufacturer !== undefined) updateFields.manufacturer = updatedData.manufacturer;
          if (updatedData.modelNumber !== undefined) updateFields.model_number = updatedData.modelNumber;
          if (updatedData.description !== undefined) updateFields.note = updatedData.description;
          if (updatedData.materialType !== undefined) updateFields.material_type = updatedData.materialType;

          if (Object.keys(updateFields).length > 0) {
            const { error } = await supabase
              .from('items')
              .update(updateFields)
              .eq('item_code', id);

            if (error) throw error;
            logger.info(`Interior product ${id} updated in database`);
          }
        } catch (err) {
          logger.error('Failed to update interior product in database:', err);
        }
      },

      deleteInteriorProduct: async (id) => {
        set((state) => ({
          interiorProducts: state.interiorProducts.filter(p => p.id !== id)
        }));

        // DB同期（論理削除）
        try {
          const { error } = await supabase
            .from('items')
            .update({ is_active: false })
            .eq('item_code', id);

          if (error) throw error;
          logger.info(`Interior product ${id} deactivated in database`);
        } catch (err) {
          logger.error('Failed to deactivate interior product in database:', err);
        }
      },

      // 水廻り商品管理（DB同期）
      addWaterProduct: async (product) => {
        set((state) => ({
          waterProducts: [...state.waterProducts, product]
        }));

        // DB同期
        try {
          const dbItem = await convertProductToDBItem(product, 'equipment');
          const { data: insertedItem, error: itemError } = await supabase
            .from('items')
            .insert(dbItem)
            .select('id')
            .single();

          if (itemError) throw itemError;

          const itemId = insertedItem.id;

          // バリアントを挿入
          if (product.variants.length > 0) {
            const variants = product.variants.map(v => convertVariantToDBFormat(v, itemId));
            const { data: insertedVariants, error: variantError } = await supabase
              .from('item_variants')
              .insert(variants)
              .select('id, variant_code');

            if (variantError) {
              logger.error('Failed to insert variants:', variantError);
            } else if (insertedVariants) {
              const variantImages = product.variants.flatMap(v => {
                const dbVariant = insertedVariants.find(dv => dv.variant_code === v.id);
                if (!dbVariant || !v.imageUrl) return [];
                return [{
                  variant_id: dbVariant.id,
                  image_url: v.imageUrl,
                  thumbnail_url: v.thumbnailUrl || null,
                  is_primary: true,
                  display_order: 0,
                }];
              });
              if (variantImages.length > 0) {
                await supabase.from('item_variant_images').insert(variantImages);
              }
            }
          }

          // 価格情報を挿入
          if (product.pricing.length > 0) {
            const pricingPromises = product.pricing.map(p => convertPricingToDBFormat(p, itemId));
            const pricingData = await Promise.all(pricingPromises);
            const validPricing = pricingData.filter(p => p.product_id !== null);
            if (validPricing.length > 0) {
              await supabase.from('item_pricing').insert(validPricing);
            }
          }

          logger.info(`Water product ${product.id} synced to database`);
        } catch (err) {
          logger.error('Failed to sync water product to database:', err);
        }
      },

      updateWaterProduct: async (id, updatedData) => {
        set((state) => ({
          waterProducts: state.waterProducts.map(p =>
            p.id === id ? { ...p, ...updatedData } : p
          )
        }));

        // DB同期
        try {
          const updateFields: Record<string, unknown> = {};
          if (updatedData.name) updateFields.name = updatedData.name;
          if (updatedData.manufacturer !== undefined) updateFields.manufacturer = updatedData.manufacturer;
          if (updatedData.modelNumber !== undefined) updateFields.model_number = updatedData.modelNumber;
          if (updatedData.description !== undefined) updateFields.note = updatedData.description;
          if (updatedData.series !== undefined) updateFields.series = updatedData.series;

          if (Object.keys(updateFields).length > 0) {
            const { error } = await supabase
              .from('items')
              .update(updateFields)
              .eq('item_code', id);

            if (error) throw error;
            logger.info(`Water product ${id} updated in database`);
          }
        } catch (err) {
          logger.error('Failed to update water product in database:', err);
        }
      },

      deleteWaterProduct: async (id) => {
        set((state) => ({
          waterProducts: state.waterProducts.filter(p => p.id !== id)
        }));

        // DB同期（論理削除）
        try {
          const { error } = await supabase
            .from('items')
            .update({ is_active: false })
            .eq('item_code', id);

          if (error) throw error;
          logger.info(`Water product ${id} deactivated in database`);
        } catch (err) {
          logger.error('Failed to deactivate water product in database:', err);
        }
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
