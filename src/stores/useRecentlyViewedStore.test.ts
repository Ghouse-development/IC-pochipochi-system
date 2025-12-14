import { describe, it, expect, beforeEach } from 'vitest';
import { useRecentlyViewedStore } from './useRecentlyViewedStore';

const mockItem = {
  id: 'item-1',
  name: 'テスト商品',
  imageUrl: 'https://example.com/image.jpg',
  categoryName: '外装',
  price: 10000,
};

describe('useRecentlyViewedStore', () => {
  beforeEach(() => {
    useRecentlyViewedStore.setState({
      items: [],
      maxItems: 20,
    });
  });

  describe('addItem', () => {
    it('should add an item', () => {
      const store = useRecentlyViewedStore.getState();
      store.addItem(mockItem);

      const state = useRecentlyViewedStore.getState();
      expect(state.items).toHaveLength(1);
      expect(state.items[0].name).toBe('テスト商品');
    });

    it('should add viewedAt timestamp', () => {
      const store = useRecentlyViewedStore.getState();
      store.addItem(mockItem);

      const state = useRecentlyViewedStore.getState();
      expect(state.items[0].viewedAt).toBeInstanceOf(Date);
    });

    it('should add new items at the beginning', () => {
      const store = useRecentlyViewedStore.getState();
      store.addItem({ ...mockItem, id: 'item-1', name: '商品1' });
      store.addItem({ ...mockItem, id: 'item-2', name: '商品2' });

      const state = useRecentlyViewedStore.getState();
      expect(state.items[0].name).toBe('商品2');
      expect(state.items[1].name).toBe('商品1');
    });

    it('should move existing item to front when re-added', () => {
      const store = useRecentlyViewedStore.getState();
      store.addItem({ ...mockItem, id: 'item-1', name: '商品1' });
      store.addItem({ ...mockItem, id: 'item-2', name: '商品2' });
      store.addItem({ ...mockItem, id: 'item-1', name: '商品1' });

      const state = useRecentlyViewedStore.getState();
      expect(state.items).toHaveLength(2);
      expect(state.items[0].name).toBe('商品1');
    });

    it('should limit to maxItems', () => {
      useRecentlyViewedStore.setState({ maxItems: 3, items: [] });
      const store = useRecentlyViewedStore.getState();

      for (let i = 0; i < 5; i++) {
        store.addItem({ ...mockItem, id: `item-${i}`, name: `商品${i}` });
      }

      const state = useRecentlyViewedStore.getState();
      expect(state.items).toHaveLength(3);
      expect(state.items[0].id).toBe('item-4');
    });
  });

  describe('removeItem', () => {
    it('should remove an item by id', () => {
      useRecentlyViewedStore.setState({
        items: [
          { ...mockItem, viewedAt: new Date() },
          { ...mockItem, id: 'item-2', name: '商品2', viewedAt: new Date() },
        ],
        maxItems: 20,
      });

      const store = useRecentlyViewedStore.getState();
      store.removeItem('item-1');

      const state = useRecentlyViewedStore.getState();
      expect(state.items).toHaveLength(1);
      expect(state.items[0].id).toBe('item-2');
    });

    it('should do nothing if item not found', () => {
      useRecentlyViewedStore.setState({
        items: [{ ...mockItem, viewedAt: new Date() }],
        maxItems: 20,
      });

      const store = useRecentlyViewedStore.getState();
      store.removeItem('non-existent');

      const state = useRecentlyViewedStore.getState();
      expect(state.items).toHaveLength(1);
    });
  });

  describe('clearAll', () => {
    it('should clear all items', () => {
      useRecentlyViewedStore.setState({
        items: [
          { ...mockItem, viewedAt: new Date() },
          { ...mockItem, id: 'item-2', viewedAt: new Date() },
        ],
        maxItems: 20,
      });

      const store = useRecentlyViewedStore.getState();
      store.clearAll();

      const state = useRecentlyViewedStore.getState();
      expect(state.items).toHaveLength(0);
    });
  });

  describe('getRecentItems', () => {
    it('should return limited items', () => {
      const items = Array.from({ length: 15 }, (_, i) => ({
        ...mockItem,
        id: `item-${i}`,
        name: `商品${i}`,
        viewedAt: new Date(),
      }));
      useRecentlyViewedStore.setState({ items, maxItems: 20 });

      const store = useRecentlyViewedStore.getState();
      const recent = store.getRecentItems(5);

      expect(recent).toHaveLength(5);
    });

    it('should default to 10 items', () => {
      const items = Array.from({ length: 15 }, (_, i) => ({
        ...mockItem,
        id: `item-${i}`,
        name: `商品${i}`,
        viewedAt: new Date(),
      }));
      useRecentlyViewedStore.setState({ items, maxItems: 20 });

      const store = useRecentlyViewedStore.getState();
      const recent = store.getRecentItems();

      expect(recent).toHaveLength(10);
    });

    it('should return all items if less than limit', () => {
      const items = [{ ...mockItem, viewedAt: new Date() }];
      useRecentlyViewedStore.setState({ items, maxItems: 20 });

      const store = useRecentlyViewedStore.getState();
      const recent = store.getRecentItems(10);

      expect(recent).toHaveLength(1);
    });
  });
});
