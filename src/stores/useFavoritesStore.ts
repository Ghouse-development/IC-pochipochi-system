import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[]; // 商品ID配列
  recentlyViewed: string[]; // 最近見た商品ID配列
  addFavorite: (productId: string) => void;
  removeFavorite: (productId: string) => void;
  toggleFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  addRecentlyViewed: (productId: string) => void;
  clearRecentlyViewed: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      recentlyViewed: [],

      addFavorite: (productId: string) => {
        set((state) => ({
          favorites: state.favorites.includes(productId)
            ? state.favorites
            : [...state.favorites, productId],
        }));
      },

      removeFavorite: (productId: string) => {
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== productId),
        }));
      },

      toggleFavorite: (productId: string) => {
        const { favorites } = get();
        if (favorites.includes(productId)) {
          get().removeFavorite(productId);
        } else {
          get().addFavorite(productId);
        }
      },

      isFavorite: (productId: string) => {
        return get().favorites.includes(productId);
      },

      addRecentlyViewed: (productId: string) => {
        set((state) => {
          // 既に存在する場合は先頭に移動
          const filtered = state.recentlyViewed.filter((id) => id !== productId);
          // 最大20件に制限
          const updated = [productId, ...filtered].slice(0, 20);
          return { recentlyViewed: updated };
        });
      },

      clearRecentlyViewed: () => {
        set({ recentlyViewed: [] });
      },
    }),
    {
      name: 'ic-favorites-storage',
    }
  )
);
