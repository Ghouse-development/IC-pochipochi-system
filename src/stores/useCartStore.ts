import { create } from 'zustand';
import type { CartItem, Product, ProductVariant } from '../types/product';

interface CartStore {
  items: CartItem[];
  selectedPlanId: string;
  setSelectedPlanId: (planId: string) => void;
  addItem: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  selectedPlanId: 'LACIE',

  setSelectedPlanId: (planId) => {
    set({ selectedPlanId: planId });
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

      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.product.id === product.id &&
            i.selectedVariant?.id === selectedVariant.id
              ? { ...i, quantity: i.quantity + quantity }
              : i
          ),
        };
      }

      const newItem: CartItem = {
        product,
        selectedVariant,
        quantity,
        plan: state.selectedPlanId as any,
      };

      return { items: [...state.items, newItem] };
    });
  },
  
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    }));
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      ),
    }));
  },
  
  clearCart: () => {
    set({ items: [] });
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
}));