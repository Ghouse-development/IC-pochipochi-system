import { describe, it, expect, beforeEach } from 'vitest';
import { useFavoritesStore } from './useFavoritesStore';

describe('useFavoritesStore', () => {
  beforeEach(() => {
    // ストアをリセット
    useFavoritesStore.setState({
      favorites: [],
      recentlyViewed: [],
    });
  });

  describe('favorites', () => {
    it('should add a favorite', () => {
      const store = useFavoritesStore.getState();
      store.addFavorite('product-1');

      expect(useFavoritesStore.getState().favorites).toContain('product-1');
    });

    it('should not add duplicate favorites', () => {
      const store = useFavoritesStore.getState();
      store.addFavorite('product-1');
      store.addFavorite('product-1');

      expect(useFavoritesStore.getState().favorites).toHaveLength(1);
    });

    it('should remove a favorite', () => {
      useFavoritesStore.setState({ favorites: ['product-1', 'product-2'] });
      const store = useFavoritesStore.getState();
      store.removeFavorite('product-1');

      expect(useFavoritesStore.getState().favorites).not.toContain('product-1');
      expect(useFavoritesStore.getState().favorites).toContain('product-2');
    });

    it('should toggle favorite on', () => {
      const store = useFavoritesStore.getState();
      store.toggleFavorite('product-1');

      expect(useFavoritesStore.getState().favorites).toContain('product-1');
    });

    it('should toggle favorite off', () => {
      useFavoritesStore.setState({ favorites: ['product-1'] });
      const store = useFavoritesStore.getState();
      store.toggleFavorite('product-1');

      expect(useFavoritesStore.getState().favorites).not.toContain('product-1');
    });

    it('should check if product is favorite', () => {
      useFavoritesStore.setState({ favorites: ['product-1'] });
      const store = useFavoritesStore.getState();

      expect(store.isFavorite('product-1')).toBe(true);
      expect(store.isFavorite('product-2')).toBe(false);
    });
  });

  describe('recentlyViewed', () => {
    it('should add recently viewed product', () => {
      const store = useFavoritesStore.getState();
      store.addRecentlyViewed('product-1');

      expect(useFavoritesStore.getState().recentlyViewed).toContain('product-1');
    });

    it('should move existing product to front', () => {
      useFavoritesStore.setState({ recentlyViewed: ['product-1', 'product-2', 'product-3'] });
      const store = useFavoritesStore.getState();
      store.addRecentlyViewed('product-2');

      const recentlyViewed = useFavoritesStore.getState().recentlyViewed;
      expect(recentlyViewed[0]).toBe('product-2');
      expect(recentlyViewed).toHaveLength(3);
    });

    it('should limit to 20 items', () => {
      const products = Array.from({ length: 25 }, (_, i) => `product-${i}`);
      useFavoritesStore.setState({ recentlyViewed: products.slice(0, 20) });

      const store = useFavoritesStore.getState();
      store.addRecentlyViewed('product-new');

      const recentlyViewed = useFavoritesStore.getState().recentlyViewed;
      expect(recentlyViewed).toHaveLength(20);
      expect(recentlyViewed[0]).toBe('product-new');
    });

    it('should clear recently viewed', () => {
      useFavoritesStore.setState({ recentlyViewed: ['product-1', 'product-2'] });
      const store = useFavoritesStore.getState();
      store.clearRecentlyViewed();

      expect(useFavoritesStore.getState().recentlyViewed).toHaveLength(0);
    });
  });
});
