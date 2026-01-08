import { describe, it, expect, beforeEach } from 'vitest';
import { useProductStore } from './useProductStore';
import type { Product } from '../types/product';

const mockProduct: Product = {
  id: 'test-product-1',
  name: 'テスト商品',
  categoryId: 'exterior',
  categoryName: '外壁',
  subcategory: 'wall',
  manufacturer: 'テストメーカー',
  modelNumber: 'TEST-001',
  isOption: false,
  variants: [
    {
      id: 'v1',
      color: 'ホワイト',
      colorCode: '#FFFFFF',
    },
  ],
  pricing: [{ planId: 'LACIE', price: 10000 }],
  unit: 'sqm',
};

describe('useProductStore', () => {
  beforeEach(() => {
    // ストアを初期状態にリセット
    useProductStore.setState({
      exteriorProducts: [],
      interiorProducts: [],
      waterProducts: [],
      furnitureProducts: [],
    });
  });

  describe('exteriorProducts', () => {
    it('should add exterior product', () => {
      const store = useProductStore.getState();
      store.addExteriorProduct(mockProduct);

      const state = useProductStore.getState();
      expect(state.exteriorProducts).toHaveLength(1);
      expect(state.exteriorProducts[0].name).toBe('テスト商品');
    });

    it('should update exterior product', () => {
      useProductStore.setState({
        exteriorProducts: [mockProduct],
      });

      const store = useProductStore.getState();
      store.updateExteriorProduct('test-product-1', { name: '更新済み商品' });

      const state = useProductStore.getState();
      expect(state.exteriorProducts[0].name).toBe('更新済み商品');
    });

    it('should delete exterior product', () => {
      useProductStore.setState({
        exteriorProducts: [mockProduct],
      });

      const store = useProductStore.getState();
      store.deleteExteriorProduct('test-product-1');

      const state = useProductStore.getState();
      expect(state.exteriorProducts).toHaveLength(0);
    });

    it('should not affect other products when updating', () => {
      const product2: Product = { ...mockProduct, id: 'test-product-2', name: '商品2' };
      useProductStore.setState({
        exteriorProducts: [mockProduct, product2],
      });

      const store = useProductStore.getState();
      store.updateExteriorProduct('test-product-1', { name: '更新済み' });

      const state = useProductStore.getState();
      expect(state.exteriorProducts[0].name).toBe('更新済み');
      expect(state.exteriorProducts[1].name).toBe('商品2');
    });
  });

  describe('interiorProducts', () => {
    it('should add interior product', () => {
      const interiorProduct = { ...mockProduct, categoryId: 'interior' };
      const store = useProductStore.getState();
      store.addInteriorProduct(interiorProduct);

      const state = useProductStore.getState();
      expect(state.interiorProducts).toHaveLength(1);
    });

    it('should update interior product', () => {
      const interiorProduct = { ...mockProduct, id: 'interior-1', categoryId: 'interior' };
      useProductStore.setState({
        interiorProducts: [interiorProduct],
      });

      const store = useProductStore.getState();
      store.updateInteriorProduct('interior-1', { name: '更新済みインテリア' });

      const state = useProductStore.getState();
      expect(state.interiorProducts[0].name).toBe('更新済みインテリア');
    });

    it('should delete interior product', () => {
      const interiorProduct = { ...mockProduct, id: 'interior-1', categoryId: 'interior' };
      useProductStore.setState({
        interiorProducts: [interiorProduct],
      });

      const store = useProductStore.getState();
      store.deleteInteriorProduct('interior-1');

      const state = useProductStore.getState();
      expect(state.interiorProducts).toHaveLength(0);
    });
  });

  describe('waterProducts', () => {
    it('should add water product', () => {
      const waterProduct = { ...mockProduct, categoryId: 'water' };
      const store = useProductStore.getState();
      store.addWaterProduct(waterProduct);

      const state = useProductStore.getState();
      expect(state.waterProducts).toHaveLength(1);
    });

    it('should update water product', () => {
      const waterProduct = { ...mockProduct, id: 'water-1', categoryId: 'water' };
      useProductStore.setState({
        waterProducts: [waterProduct],
      });

      const store = useProductStore.getState();
      store.updateWaterProduct('water-1', { manufacturer: '新メーカー' });

      const state = useProductStore.getState();
      expect(state.waterProducts[0].manufacturer).toBe('新メーカー');
    });

    it('should delete water product', () => {
      const waterProduct = { ...mockProduct, id: 'water-1', categoryId: 'water' };
      useProductStore.setState({
        waterProducts: [waterProduct],
      });

      const store = useProductStore.getState();
      store.deleteWaterProduct('water-1');

      const state = useProductStore.getState();
      expect(state.waterProducts).toHaveLength(0);
    });
  });

  describe('getAllProducts', () => {
    it('should return all products from all categories', () => {
      const exterior = { ...mockProduct, id: 'ext-1' };
      const interior = { ...mockProduct, id: 'int-1', categoryId: 'interior' };
      const water = { ...mockProduct, id: 'water-1', categoryId: 'water' };

      useProductStore.setState({
        exteriorProducts: [exterior],
        interiorProducts: [interior],
        waterProducts: [water],
      });

      const store = useProductStore.getState();
      const allProducts = store.getAllProducts();

      expect(allProducts).toHaveLength(3);
      expect(allProducts.map(p => p.id)).toContain('ext-1');
      expect(allProducts.map(p => p.id)).toContain('int-1');
      expect(allProducts.map(p => p.id)).toContain('water-1');
    });

    it('should return empty array when no products', () => {
      const store = useProductStore.getState();
      const allProducts = store.getAllProducts();

      expect(allProducts).toHaveLength(0);
    });
  });
});
