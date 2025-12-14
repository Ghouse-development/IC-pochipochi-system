import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, ProductVariant, PlanType } from '../types/product';
import { useOperationLogStore } from './useOperationLogStore';

// 操作ログを追加するヘルパー関数
const addOperationLog = (
  type: 'cart_add' | 'cart_remove' | 'cart_update' | 'cart_clear',
  action: string,
  details?: Record<string, unknown>
) => {
  // storeからaddLogを直接取得して呼び出す
  useOperationLogStore.getState().addLog(type, action, details);
};

interface CartStore {
  items: CartItem[];
  selectedPlanId: string;
  lastUpdated: string | null;
  setSelectedPlanId: (planId: string) => void;
  addItem: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  reorderItems: (items: CartItem[]) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
  items: [],
  selectedPlanId: 'LACIE',
  lastUpdated: null,

  setSelectedPlanId: (planId) => {
    set({ selectedPlanId: planId, lastUpdated: new Date().toISOString() });
  },

  addItem: (product, quantity = 1, variant) => {
    set((state) => {
      // バリアントが指定されていない場合は最初のバリアントを使用
      const selectedVariant = variant || product.variants?.[0] || {
        id: `${product.id}-default`,
        color: 'デフォルト',
      };

      const existingItem = state.items.find(
        (i) => i.product.id === product.id &&
               i.selectedVariant?.id === selectedVariant.id
      );

      // 操作ログを記録
      addOperationLog('cart_add', `${product.name}をカートに追加`, {
        productId: product.id,
        productName: product.name,
        quantity,
        variant: selectedVariant.color,
        isUpdate: !!existingItem,
      });

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id &&
            i.selectedVariant?.id === selectedVariant.id
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
          lastUpdated: new Date().toISOString(),
        };
      }

      const newItem: CartItem = {
        product,
        selectedVariant,
        quantity,
        plan: state.selectedPlanId as PlanType,
      };

      return { items: [...state.items, newItem], lastUpdated: new Date().toISOString() };
    });
  },

  removeItem: (productId) => {
    const state = get();
    const item = state.items.find((i) => i.product.id === productId);
    if (item) {
      addOperationLog('cart_remove', `${item.product.name}をカートから削除`, {
        productId,
        productName: item.product.name,
      });
    }
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
      lastUpdated: new Date().toISOString(),
    }));
  },

  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }

    const state = get();
    const item = state.items.find((i) => i.product.id === productId);
    if (item) {
      addOperationLog('cart_update', `${item.product.name}の数量を${quantity}に変更`, {
        productId,
        productName: item.product.name,
        oldQuantity: item.quantity,
        newQuantity: quantity,
      });
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      ),
      lastUpdated: new Date().toISOString(),
    }));
  },

  reorderItems: (newItems) => {
    set({ items: newItems, lastUpdated: new Date().toISOString() });
  },

  clearCart: () => {
    const state = get();
    addOperationLog('cart_clear', 'カートをクリア', {
      itemCount: state.items.length,
    });
    set({ items: [], lastUpdated: new Date().toISOString() });
  },
  
  getTotalPrice: () => {
    const { items, selectedPlanId } = get();
    return items.reduce((total, item) => {
      const price = item.product.pricing?.find(
        (p) => p.planId === selectedPlanId || p.plan === selectedPlanId
      )?.price || 0;
      return total + price * item.quantity;
    }, 0);
  },
    }),
    {
      name: 'ic-cart-storage',
      // 7日間で自動クリア（古いカートデータを削除）
      partialize: (state) => ({
        items: state.items,
        selectedPlanId: state.selectedPlanId,
        lastUpdated: state.lastUpdated,
      }),
    }
  )
);