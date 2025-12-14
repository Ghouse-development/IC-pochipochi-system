import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RecentlyViewedItem {
  id: string;
  name: string;
  imageUrl?: string;
  categoryName: string;
  price: number;
  viewedAt: Date;
}

interface RecentlyViewedStore {
  items: RecentlyViewedItem[];
  maxItems: number;

  addItem: (item: Omit<RecentlyViewedItem, 'viewedAt'>) => void;
  removeItem: (id: string) => void;
  clearAll: () => void;
  getRecentItems: (limit?: number) => RecentlyViewedItem[];
}

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
  persist(
    (set, get) => ({
      items: [],
      maxItems: 20,

      addItem: (item) => {
        set((state) => {
          // 既存のアイテムを削除（重複防止）
          const filtered = state.items.filter((i) => i.id !== item.id);

          // 新しいアイテムを先頭に追加
          const newItems = [
            { ...item, viewedAt: new Date() },
            ...filtered,
          ].slice(0, state.maxItems);

          return { items: newItems };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      clearAll: () => {
        set({ items: [] });
      },

      getRecentItems: (limit = 10) => {
        return get().items.slice(0, limit);
      },
    }),
    {
      name: 'ic-recently-viewed-storage',
      version: 1,
    }
  )
);
