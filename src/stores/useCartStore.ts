import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, ProductVariant, PlanType } from '../types/product';
import { useOperationLogStore, type ActionType } from './useOperationLogStore';

// 操作ログを追加するヘルパー関数
const addOperationLog = (
  type: 'cart_add' | 'cart_remove' | 'cart_update' | 'cart_clear',
  action: ActionType,
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
  addItemWithArea: (product: Product, variant: ProductVariant, area: number, colorIndex: number) => void;
  removeItem: (productId: string) => void;
  removeItemByColorIndex: (productId: string, colorIndex: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateItemArea: (productId: string, colorIndex: number, area: number) => void;
  reorderItems: (items: CartItem[]) => void;
  clearCart: () => void;
  clearCategoryItems: (categoryId: string) => void;
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
      addOperationLog('cart_add', 'select', {
        productId: product.id,
        productName: product.name,
        itemName: `${product.name}をカートに追加`,
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

      // 壁クロス選択時は天井クロスとしても自動追加
      const isWallCloth = product.categoryName?.includes('壁クロス') ||
                          product.subcategory?.includes('ベースクロス') ||
                          product.subcategory?.includes('壁クロス');

      if (isWallCloth) {
        // 天井クロス用のアイテムを作成（同じ製品、カテゴリ名を変更）
        const ceilingProduct = {
          ...product,
          id: `${product.id}-ceiling-auto`,
          categoryName: '天井クロス',
          subcategory: '天井クロス（壁クロス連動）',
        };
        const ceilingItem: CartItem = {
          product: ceilingProduct,
          selectedVariant,
          quantity,
          plan: state.selectedPlanId as PlanType,
        };

        // 既存の天井クロス（自動追加分）を削除してから追加
        const filteredItems = state.items.filter(
          (i) => !i.product.id.endsWith('-ceiling-auto')
        );

        return {
          items: [...filteredItems, newItem, ceilingItem],
          lastUpdated: new Date().toISOString(),
        };
      }

      return { items: [...state.items, newItem], lastUpdated: new Date().toISOString() };
    });
  },

  addItemWithArea: (product, variant, area, colorIndex) => {
    set((state) => {
      // 既存の同じ商品+バリアント+colorIndexを探す
      const existingItem = state.items.find(
        (i) => i.product.id === product.id &&
               i.selectedVariant?.id === variant.id &&
               i.colorIndex === colorIndex
      );

      addOperationLog('cart_add', 'select', {
        productId: product.id,
        productName: product.name,
        itemName: `${product.name}（${colorIndex}色目）をカートに追加`,
        area,
        colorIndex,
        variant: variant.color,
        isUpdate: !!existingItem,
      });

      if (existingItem) {
        // 既存アイテムの面積を更新
        return {
          items: state.items.map((i) =>
            i.product.id === product.id &&
            i.selectedVariant?.id === variant.id &&
            i.colorIndex === colorIndex
              ? { ...i, area }
              : i
          ),
          lastUpdated: new Date().toISOString(),
        };
      }

      const newItem: CartItem = {
        product,
        selectedVariant: variant,
        quantity: 1,
        plan: state.selectedPlanId as PlanType,
        area,
        colorIndex,
      };

      return { items: [...state.items, newItem], lastUpdated: new Date().toISOString() };
    });
  },

  removeItem: (productId) => {
    const state = get();
    const item = state.items.find((i) => i.product.id === productId);
    if (item) {
      addOperationLog('cart_remove', 'remove', {
        productId,
        productName: item.product.name,
        itemName: `${item.product.name}をカートから削除`,
      });
    }

    // 壁クロス削除時は連動する天井クロスも削除
    const isWallCloth = item?.product.categoryName?.includes('壁クロス') ||
                        item?.product.subcategory?.includes('ベースクロス') ||
                        item?.product.subcategory?.includes('壁クロス');
    const ceilingAutoId = `${productId}-ceiling-auto`;

    set((state) => ({
      items: state.items.filter((i) => {
        if (i.product.id === productId) return false;
        // 壁クロス削除時は連動する天井クロスも削除
        if (isWallCloth && i.product.id === ceilingAutoId) return false;
        return true;
      }),
      lastUpdated: new Date().toISOString(),
    }));
  },

  removeItemByColorIndex: (productId, colorIndex) => {
    const state = get();
    const item = state.items.find(
      (i) => i.product.id === productId && i.colorIndex === colorIndex
    );
    if (item) {
      addOperationLog('cart_remove', 'remove', {
        productId,
        productName: item.product.name,
        itemName: `${item.product.name}（${colorIndex}色目）をカートから削除`,
        colorIndex,
      });
    }

    set((state) => ({
      items: state.items.filter(
        (i) => !(i.product.id === productId && i.colorIndex === colorIndex)
      ),
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
      addOperationLog('cart_update', 'other', {
        productId,
        productName: item.product.name,
        itemName: `${item.product.name}の数量を${quantity}に変更`,
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

  updateItemArea: (productId, colorIndex, area) => {
    const state = get();
    const item = state.items.find(
      (i) => i.product.id === productId && i.colorIndex === colorIndex
    );
    if (item) {
      addOperationLog('cart_update', 'other', {
        productId,
        productName: item.product.name,
        itemName: `${item.product.name}（${colorIndex}色目）の面積を${area}㎡に変更`,
        oldArea: item.area,
        newArea: area,
        colorIndex,
      });
    }

    set((state) => ({
      items: state.items.map((i) =>
        i.product.id === productId && i.colorIndex === colorIndex
          ? { ...i, area }
          : i
      ),
      lastUpdated: new Date().toISOString(),
    }));
  },

  reorderItems: (newItems) => {
    set({ items: newItems, lastUpdated: new Date().toISOString() });
  },

  clearCart: () => {
    const state = get();
    addOperationLog('cart_clear', 'remove', {
      itemName: 'カートをクリア',
      itemCount: state.items.length,
    });
    set({ items: [], lastUpdated: new Date().toISOString() });
  },

  clearCategoryItems: (categoryId) => {
    const state = get();
    const categoryItems = state.items.filter(i => i.product.categoryId === categoryId);
    if (categoryItems.length > 0) {
      addOperationLog('cart_clear', 'remove', {
        itemName: `${categoryItems[0].product.categoryName}の選択をクリア`,
        itemCount: categoryItems.length,
      });
    }
    set((state) => ({
      items: state.items.filter(i => i.product.categoryId !== categoryId),
      lastUpdated: new Date().toISOString(),
    }));
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