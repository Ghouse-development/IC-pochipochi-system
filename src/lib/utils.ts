import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 商品の価格を取得するユーティリティ関数
 * pricing配列から指定プランの価格を検索
 * @param pricing - 価格情報の配列
 * @param planId - プランID（デフォルト: 'LACIE'）
 * @param defaultValue - 見つからない場合のデフォルト値（デフォルト: 0）
 */
export function getProductPrice(
  pricing: Array<{ plan?: string; planId?: string; price?: number }> | undefined | null,
  planId: string = 'LACIE',
  defaultValue: number = 0
): number {
  if (!pricing || !Array.isArray(pricing)) return defaultValue;
  const found = pricing.find(p => p.plan === planId || p.planId === planId);
  return found?.price ?? defaultValue;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatPriceWithUnit(price: number, unit: string): string {
  const formattedPrice = formatPrice(price);
  return `${formattedPrice} / ${unit}`;
}