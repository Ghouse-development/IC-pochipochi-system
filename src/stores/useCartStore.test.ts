import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from './useCartStore';
import type { Product, ProductVariant } from '../types/product';

// テスト用のモックプロダクト
const createMockProduct = (id: string, name: string, price: number): Product => ({
  id,
  categoryId: 'cat-1',
  categoryName: '床材',
  subcategory: 'フローリング',
  name,
  manufacturer: 'LIFE X',
  modelNumber: `MODEL-${id}`,
  unit: '㎡',
  isOption: false,
  variants: [
    { id: `${id}-v1`, color: 'ナチュラル', images: [] },
    { id: `${id}-v2`, color: 'ダーク', images: [] },
  ],
  pricing: [
    { planId: 'LACIE', price },
    { planId: 'HOURS', price: price * 0.9 },
  ],
});

describe('useCartStore', () => {
  beforeEach(() => {
    // 各テスト前にストアをリセット
    useCartStore.setState({ items: [], selectedPlanId: 'LACIE' });
  });

  describe('addItem', () => {
    it('should add a new item to cart', () => {
      const product = createMockProduct('prod-1', 'テスト商品', 1000);

      useCartStore.getState().addItem(product, 1);

      const { items } = useCartStore.getState();
      expect(items).toHaveLength(1);
      expect(items[0].product.id).toBe('prod-1');
      expect(items[0].quantity).toBe(1);
    });

    it('should increase quantity if same product already exists', () => {
      const product = createMockProduct('prod-1', 'テスト商品', 1000);

      useCartStore.getState().addItem(product, 1);
      useCartStore.getState().addItem(product, 2);

      const { items } = useCartStore.getState();
      expect(items).toHaveLength(1);
      expect(items[0].quantity).toBe(3);
    });

    it('should add as separate item if different variant', () => {
      const product = createMockProduct('prod-1', 'テスト商品', 1000);
      const variant1: ProductVariant = { id: 'prod-1-v1', color: 'ナチュラル', images: [] };
      const variant2: ProductVariant = { id: 'prod-1-v2', color: 'ダーク', images: [] };

      useCartStore.getState().addItem(product, 1, variant1);
      useCartStore.getState().addItem(product, 1, variant2);

      const { items } = useCartStore.getState();
      expect(items).toHaveLength(2);
    });

    it('should use first variant if not specified', () => {
      const product = createMockProduct('prod-1', 'テスト商品', 1000);

      useCartStore.getState().addItem(product);

      const { items } = useCartStore.getState();
      expect(items[0].selectedVariant?.id).toBe('prod-1-v1');
    });
  });

  describe('removeItem', () => {
    it('should remove item from cart', () => {
      const product = createMockProduct('prod-1', 'テスト商品', 1000);
      useCartStore.getState().addItem(product, 1);

      useCartStore.getState().removeItem('prod-1');

      const { items } = useCartStore.getState();
      expect(items).toHaveLength(0);
    });

    it('should not affect other items', () => {
      const product1 = createMockProduct('prod-1', 'テスト商品1', 1000);
      const product2 = createMockProduct('prod-2', 'テスト商品2', 2000);

      useCartStore.getState().addItem(product1, 1);
      useCartStore.getState().addItem(product2, 1);
      useCartStore.getState().removeItem('prod-1');

      const { items } = useCartStore.getState();
      expect(items).toHaveLength(1);
      expect(items[0].product.id).toBe('prod-2');
    });
  });

  describe('updateQuantity', () => {
    it('should update item quantity', () => {
      const product = createMockProduct('prod-1', 'テスト商品', 1000);
      useCartStore.getState().addItem(product, 1);

      useCartStore.getState().updateQuantity('prod-1', 5);

      const { items } = useCartStore.getState();
      expect(items[0].quantity).toBe(5);
    });

    it('should remove item if quantity is 0 or less', () => {
      const product = createMockProduct('prod-1', 'テスト商品', 1000);
      useCartStore.getState().addItem(product, 1);

      useCartStore.getState().updateQuantity('prod-1', 0);

      const { items } = useCartStore.getState();
      expect(items).toHaveLength(0);
    });
  });

  describe('clearCart', () => {
    it('should remove all items', () => {
      const product1 = createMockProduct('prod-1', 'テスト商品1', 1000);
      const product2 = createMockProduct('prod-2', 'テスト商品2', 2000);

      useCartStore.getState().addItem(product1, 1);
      useCartStore.getState().addItem(product2, 2);
      useCartStore.getState().clearCart();

      const { items } = useCartStore.getState();
      expect(items).toHaveLength(0);
    });
  });

  describe('getTotalPrice', () => {
    it('should calculate total price correctly', () => {
      const product1 = createMockProduct('prod-1', 'テスト商品1', 1000);
      const product2 = createMockProduct('prod-2', 'テスト商品2', 2000);

      useCartStore.getState().addItem(product1, 2); // 1000 * 2 = 2000
      useCartStore.getState().addItem(product2, 3); // 2000 * 3 = 6000

      const total = useCartStore.getState().getTotalPrice();
      expect(total).toBe(8000);
    });

    it('should return 0 for empty cart', () => {
      const total = useCartStore.getState().getTotalPrice();
      expect(total).toBe(0);
    });

    it('should use selected plan price', () => {
      const product = createMockProduct('prod-1', 'テスト商品', 1000);

      useCartStore.getState().addItem(product, 1);

      // LACIE plan (default)
      let total = useCartStore.getState().getTotalPrice();
      expect(total).toBe(1000);

      // HOURS plan (10% discount)
      useCartStore.getState().setSelectedPlanId('HOURS');
      total = useCartStore.getState().getTotalPrice();
      expect(total).toBe(900);
    });
  });

  describe('reorderItems', () => {
    it('should reorder items in cart', () => {
      const product1 = createMockProduct('prod-1', 'テスト商品1', 1000);
      const product2 = createMockProduct('prod-2', 'テスト商品2', 2000);

      useCartStore.getState().addItem(product1, 1);
      useCartStore.getState().addItem(product2, 1);

      const { items } = useCartStore.getState();
      const reorderedItems = [...items].reverse();

      useCartStore.getState().reorderItems(reorderedItems);

      const newItems = useCartStore.getState().items;
      expect(newItems[0].product.id).toBe('prod-2');
      expect(newItems[1].product.id).toBe('prod-1');
    });
  });
});
