import { Home, Sofa, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ItemWithDetails } from '../../types/database';
import type { Product as CatalogProduct } from '../../types/product';

// DBアイテムをカート用のProduct型に変換
export const convertToCartItem = (item: ItemWithDetails): CatalogProduct => {
  const pricing = item.pricing?.find(p => p.product?.code === 'LACIE');

  return {
    id: item.id,
    categoryId: item.category_id || '',
    categoryName: item.category?.name || '',
    subcategory: item.category_name || '',
    name: item.name,
    manufacturer: item.manufacturer || '',
    modelNumber: item.model_number || '',
    unit: (item.unit?.symbol || '式') as CatalogProduct['unit'],
    isOption: pricing ? !pricing.is_standard : false,
    description: item.note || '',
    pricing: item.pricing?.map(p => ({
      plan: (p.product?.code || 'LACIE') as 'LACIE' | 'HOURS' | 'LIFE',
      planId: (p.product?.code || 'LACIE') as 'LACIE' | 'HOURS' | 'LIFE',
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

// 静的データ（Product）をItemWithDetails形式に変換（フォールバック用）
export const convertStaticToItemWithDetails = (product: CatalogProduct, categoryType: string): ItemWithDetails => {
  return {
    id: product.id,
    name: product.name,
    manufacturer: product.manufacturer,
    model_number: product.modelNumber,
    category_id: product.categoryId,
    category_name: product.subcategory,
    note: product.description,
    is_active: true,
    display_order: 0,
    category: {
      id: product.categoryId,
      name: product.categoryName,
      category_type: categoryType,
      is_active: true,
      display_order: 0,
    },
    unit: {
      id: 'unit-1',
      symbol: product.unit,
      name: product.unit,
    },
    variants: product.variants?.map((v, idx) => ({
      id: v.id || `variant-${idx}`,
      color_name: v.color,
      color_code: v.colorCode || v.color,
      images: v.imageUrl
        ? [{ id: 'img-1', image_url: v.imageUrl, thumbnail_url: v.thumbnailUrl }]
        : (v.images?.length ? v.images.map((img, i) => ({ id: `img-${i}`, image_url: img, thumbnail_url: img })) : []),
    })) || [],
    pricing: product.pricing?.map(p => ({
      id: `pricing-${p.plan || p.planId}`,
      price: p.price,
      is_standard: p.price === 0,
      product: {
        id: `plan-${p.plan || p.planId}`,
        code: (p.plan || p.planId) as string,
        name: (p.plan || p.planId) as string,
      },
    })) || [],
  } as ItemWithDetails;
};

// DBアイテムをRecommendation用のCatalogProductに変換
export const convertToCatalogProduct = (item: ItemWithDetails): CatalogProduct => {
  const pricing = item.pricing?.find(p => p.product?.code === 'LACIE');

  return {
    id: item.id,
    categoryId: item.category_id || '',
    categoryName: item.category?.name || '',
    subcategory: item.category_name || '',
    name: item.name,
    manufacturer: item.manufacturer || '',
    modelNumber: item.model_number || '',
    unit: (item.unit?.symbol || '式') as CatalogProduct['unit'],
    isOption: pricing ? !pricing.is_standard : false,
    description: item.note || '',
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
export type StepId = 'exterior' | 'interior' | 'equipment';
export type FilterTypeValue = 'all' | 'standard' | 'option';

export interface StepDefinition {
  id: StepId;
  label: string;
  icon: LucideIcon;
  emoji: string;
  gradient: string;
}

export const STEPS: StepDefinition[] = [
  { id: 'exterior', label: '外装', icon: Home, emoji: '🏠', gradient: 'from-emerald-500 to-teal-500' },
  { id: 'interior', label: '内装', icon: Sofa, emoji: '🛋️', gradient: 'from-blue-500 to-indigo-500' },
  { id: 'equipment', label: '設備', icon: Wrench, emoji: '🚿', gradient: 'from-cyan-500 to-blue-500' },
];
