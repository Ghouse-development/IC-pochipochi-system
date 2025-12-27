/**
 * ショールーム見積ストア
 * - ICコーディネーターがショールームで決めた見積情報を管理
 * - キッチン、バス、洗面台、トイレなどの詳細見積
 * - LocalStorage永続化
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ショールーム見積アイテム
export interface ShowroomEstimateItem {
  id: string;
  category: 'kitchen' | 'bath' | 'washroom' | 'toilet' | 'other';
  categoryLabel: string;
  manufacturer: string;
  productName: string;
  modelNumber: string;
  color?: string;
  options: string[];
  basePrice: number;
  optionPrice: number;
  totalPrice: number;
  notes?: string;
  visitDate?: string;
  addedAt: string;
  addedBy?: string;
}

// カテゴリラベル
export const SHOWROOM_CATEGORIES = {
  kitchen: 'キッチン',
  bath: 'バス・ユニットバス',
  washroom: '洗面台',
  toilet: 'トイレ',
  other: 'その他設備',
} as const;

export interface ShowroomEstimateState {
  items: ShowroomEstimateItem[];

  // アクション
  addItem: (item: Omit<ShowroomEstimateItem, 'id' | 'addedAt'>) => void;
  updateItem: (id: string, updates: Partial<ShowroomEstimateItem>) => void;
  removeItem: (id: string) => void;
  getItemsByCategory: (category: ShowroomEstimateItem['category']) => ShowroomEstimateItem[];
  getTotalPrice: () => number;
  clearAll: () => void;
}

export const useShowroomEstimateStore = create<ShowroomEstimateState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const newItem: ShowroomEstimateItem = {
          ...item,
          id: `showroom-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          addedAt: new Date().toISOString(),
        };
        set((state) => ({
          items: [...state.items, newItem],
        }));
      },

      updateItem: (id, updates) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, ...updates } : item
          ),
        }));
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      getItemsByCategory: (category) => {
        return get().items.filter((item) => item.category === category);
      },

      getTotalPrice: () => {
        return get().items.reduce((sum, item) => sum + item.totalPrice, 0);
      },

      clearAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'ic-pochipochi-showroom-estimates',
      version: 1,
    }
  )
);
