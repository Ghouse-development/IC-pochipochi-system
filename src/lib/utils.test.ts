import { describe, it, expect } from 'vitest';
import { cn, formatPrice, formatPriceWithUnit, getProductPrice } from './utils';

describe('cn (className merge utility)', () => {
  it('should merge class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const showBar = false;
    expect(cn('foo', showBar && 'bar', 'baz')).toBe('foo baz');
  });

  it('should handle Tailwind class conflicts', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('should handle arrays', () => {
    expect(cn(['foo', 'bar'])).toBe('foo bar');
  });

  it('should handle undefined and null', () => {
    expect(cn('foo', undefined, null, 'bar')).toBe('foo bar');
  });
});

describe('formatPrice', () => {
  it('should format price in Japanese Yen', () => {
    expect(formatPrice(1000)).toBe('￥1,000');
  });

  it('should handle zero', () => {
    expect(formatPrice(0)).toBe('￥0');
  });

  it('should handle large numbers with thousands separators', () => {
    expect(formatPrice(1234567)).toBe('￥1,234,567');
  });

  it('should handle decimal values by rounding', () => {
    expect(formatPrice(1000.5)).toBe('￥1,001');
    expect(formatPrice(1000.4)).toBe('￥1,000');
  });

  it('should handle negative numbers', () => {
    expect(formatPrice(-1000)).toBe('-￥1,000');
  });
});

describe('formatPriceWithUnit', () => {
  it('should format price with unit', () => {
    expect(formatPriceWithUnit(1000, '㎡')).toBe('￥1,000 / ㎡');
  });

  it('should handle different units', () => {
    expect(formatPriceWithUnit(5000, '個')).toBe('￥5,000 / 個');
    expect(formatPriceWithUnit(10000, 'セット')).toBe('￥10,000 / セット');
  });
});

describe('getProductPrice', () => {
  it('should return price for matching plan', () => {
    const pricing = [
      { plan: 'HOURS', price: 1000 },
      { plan: 'LACIE', price: 2000 },
      { plan: 'LIFE', price: 3000 },
    ];
    expect(getProductPrice(pricing, 'LACIE')).toBe(2000);
  });

  it('should return price for matching planId', () => {
    const pricing = [
      { planId: 'HOURS', price: 1000 },
      { planId: 'LACIE', price: 2000 },
    ];
    expect(getProductPrice(pricing, 'LACIE')).toBe(2000);
  });

  it('should return default value when plan not found', () => {
    const pricing = [{ plan: 'HOURS', price: 1000 }];
    expect(getProductPrice(pricing, 'LACIE', 0)).toBe(0);
    expect(getProductPrice(pricing, 'LACIE', -1)).toBe(-1);
  });

  it('should handle empty array', () => {
    expect(getProductPrice([], 'LACIE')).toBe(0);
  });

  it('should handle undefined pricing', () => {
    expect(getProductPrice(undefined, 'LACIE')).toBe(0);
  });

  it('should handle null pricing', () => {
    expect(getProductPrice(null, 'LACIE')).toBe(0);
  });

  it('should default to LACIE plan when planId not specified', () => {
    const pricing = [
      { plan: 'HOURS', price: 1000 },
      { plan: 'LACIE', price: 2000 },
    ];
    expect(getProductPrice(pricing)).toBe(2000);
  });

  it('should handle mixed plan/planId fields', () => {
    const pricing = [
      { plan: 'HOURS', price: 1000 },
      { planId: 'LACIE', price: 2000 },
    ];
    expect(getProductPrice(pricing, 'LACIE')).toBe(2000);
  });

  it('should return default when price is undefined', () => {
    const pricing = [{ plan: 'LACIE' }];
    expect(getProductPrice(pricing as { plan: string; price?: number }[], 'LACIE')).toBe(0);
  });
});
