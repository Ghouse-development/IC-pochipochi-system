/**
 * Item（DB層）↔ Product（UI層）型変換ユーティリティ
 *
 * データの流れ:
 *   Supabase → ItemWithDetails (snake_case) → Product (camelCase) → UI
 *   UI → Product → ItemWithDetails → Supabase
 */

import type { ItemWithDetails, ItemVariant, ItemVariantImage, ItemPricing } from '../types/database';
import type { Product, ProductVariant, PricingInfo, PlanType } from '../types/product';
import { createLogger } from '../lib/logger';

const logger = createLogger('TypeConverters');

/**
 * ProductCode（LIFE, HOURS等）をPlanTypeに変換
 */
function productCodeToPlanType(code: string): PlanType | undefined {
  const mapping: Record<string, PlanType> = {
    'LIFE': 'LIFE',
    'LIFE+': 'LIFE+',
    'HOURS': 'HOURS',
    'LACIE': 'LACIE',
    'LIFE_X': 'LIFE_X',
  };
  return mapping[code.toUpperCase()];
}

/**
 * ItemVariantImage配列から画像URLを抽出
 */
function extractImageUrls(images: ItemVariantImage[]): {
  primaryUrl?: string;
  thumbnailUrl?: string;
  allUrls: string[];
} {
  const sorted = [...images].sort((a, b) => {
    if (a.is_primary && !b.is_primary) return -1;
    if (!a.is_primary && b.is_primary) return 1;
    return a.display_order - b.display_order;
  });

  const primary = sorted.find(img => img.is_primary) ?? sorted[0];

  return {
    primaryUrl: primary?.image_url,
    thumbnailUrl: primary?.thumbnail_url ?? primary?.image_url,
    allUrls: sorted.map(img => img.image_url),
  };
}

/**
 * ItemVariant（DB） → ProductVariant（UI）変換
 */
export function itemVariantToProductVariant(variant: ItemVariant & { images?: ItemVariantImage[] }): ProductVariant {
  const imageInfo = variant.images ? extractImageUrls(variant.images) : { allUrls: [] };

  return {
    id: variant.id,
    color: variant.color_name,
    colorCode: variant.color_code ?? undefined,
    modelNumber: variant.variant_code,
    imageUrl: imageInfo.primaryUrl,
    thumbnailUrl: imageInfo.thumbnailUrl,
    images: imageInfo.allUrls.length > 0 ? imageInfo.allUrls : undefined,
  };
}

/**
 * ItemPricing（DB） → PricingInfo（UI）変換
 */
export function itemPricingToPricingInfo(pricing: ItemPricing & { product?: { code: string } }): PricingInfo {
  const planType = pricing.product?.code ? productCodeToPlanType(pricing.product.code) : undefined;

  return {
    planId: planType,
    plan: planType,
    price: pricing.price,
  };
}

/**
 * ItemWithDetails（DB層） → Product（UI層）変換
 *
 * @param item - Supabaseから取得したItemWithDetails
 * @returns UI用のProduct型
 */
export function itemToProduct(item: ItemWithDetails): Product {
  // Variants変換
  const variants: ProductVariant[] = item.variants.map(v => itemVariantToProductVariant(v));

  // Pricing変換
  const pricing: PricingInfo[] = item.pricing
    .filter(p => p.is_available)
    .map(p => itemPricingToPricingInfo(p));

  // Category情報
  const categoryName = item.category?.name ?? item.category_name ?? '';

  return {
    id: item.id,
    categoryId: item.category_id ?? '',
    categoryName: categoryName,
    subcategory: item.category_name ?? '',
    name: item.name,
    manufacturer: item.manufacturer ?? '',
    modelNumber: item.model_number ?? '',
    unit: item.unit?.code ?? 'piece',
    isOption: !item.is_hit,
    variants,
    pricing,
    description: item.note ?? undefined,
  };
}

/**
 * 複数のItemWithDetailsを一括変換
 */
export function itemsToProducts(items: ItemWithDetails[]): Product[] {
  return items.map(itemToProduct);
}

/**
 * Product（UI層） → ItemWithDetails（DB層）部分変換
 * 注意: 完全な変換は不可能（DBには存在しないフィールドがある）
 * 主に比較や検証用途
 */
export function productToPartialItem(product: Product): Partial<ItemWithDetails> {
  return {
    id: product.id,
    category_id: product.categoryId || null,
    name: product.name,
    category_name: product.subcategory || null,
    model_number: product.modelNumber || null,
    manufacturer: product.manufacturer || null,
    note: product.description || null,
    is_hit: !product.isOption,
    is_active: true,
    is_discontinued: false,
  };
}

/**
 * 型ガード: ItemWithDetailsかどうか判定
 */
export function isItemWithDetails(obj: unknown): obj is ItemWithDetails {
  if (!obj || typeof obj !== 'object') return false;
  const item = obj as Record<string, unknown>;
  return (
    typeof item.id === 'string' &&
    typeof item.name === 'string' &&
    'category' in item &&
    'variants' in item &&
    Array.isArray(item.variants) &&
    'pricing' in item &&
    Array.isArray(item.pricing)
  );
}

/**
 * 型ガード: Productかどうか判定
 */
export function isProduct(obj: unknown): obj is Product {
  if (!obj || typeof obj !== 'object') return false;
  const product = obj as Record<string, unknown>;
  return (
    typeof product.id === 'string' &&
    typeof product.name === 'string' &&
    typeof product.categoryId === 'string' &&
    'variants' in product &&
    Array.isArray(product.variants) &&
    'pricing' in product &&
    Array.isArray(product.pricing)
  );
}

/**
 * 安全な変換（型ガード付き）
 */
export function safeItemToProduct(item: unknown): Product | null {
  if (!isItemWithDetails(item)) {
    logger.warn('Invalid ItemWithDetails object:', item);
    return null;
  }
  return itemToProduct(item);
}

/**
 * 安全な一括変換（無効なアイテムはスキップ）
 */
export function safeItemsToProducts(items: unknown[]): Product[] {
  return items
    .map(safeItemToProduct)
    .filter((p): p is Product => p !== null);
}
