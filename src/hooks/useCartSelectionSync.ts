/**
 * カートと選択状態の同期フック
 * - カートに商品を追加した時に自動で選択状態を更新
 * - カートから商品を削除した時に選択状態をクリア
 */
import { useEffect, useCallback } from 'react';
import { useCartStore } from '../stores/useCartStore';
import { useSelectionStore } from '../stores/useSelectionStore';

export const useCartSelectionSync = () => {
  const { items } = useCartStore();
  const { setProductSelection, clearSelection, selections } = useSelectionStore();

  // カートアイテムの変更を監視して選択状態を同期
  useEffect(() => {
    // カートにあるカテゴリのセット
    const cartCategories = new Set(items.map((item) => item.product.categoryName));

    // カートアイテムを選択状態に反映
    items.forEach((item) => {
      const currentSelection = selections[item.product.categoryName];
      const isAlreadySelected =
        currentSelection?.status === 'selected' &&
        currentSelection?.selectedProductId === item.product.id;

      // まだ選択されていない、または別の商品が選択されている場合は更新
      if (!isAlreadySelected) {
        setProductSelection(
          item.product.categoryName,
          item.product.id,
          item.product.name,
          item.selectedVariant?.id,
          item.selectedVariant?.color
        );
      }
    });

    // カートから削除されたカテゴリの選択状態をクリア
    // （ただし、not_neededの場合はクリアしない）
    Object.keys(selections).forEach((category) => {
      const selection = selections[category];
      if (
        selection.status === 'selected' &&
        selection.selectedProductId &&
        !cartCategories.has(category)
      ) {
        // カートにないがselected状態の場合、カートから削除されたと判断
        // ただし、選択ストアから直接選択されたものは維持する
        // (selectedProductIdがカートに存在しない商品の場合)
        const isInCart = items.some(
          (item) => item.product.id === selection.selectedProductId
        );
        if (!isInCart && selection.selectedProductId) {
          // この商品がカートから削除された場合のみクリア
          clearSelection(category);
        }
      }
    });
  }, [items, selections, setProductSelection, clearSelection]);

  // 手動で選択を同期するための関数
  const syncCartToSelection = useCallback(() => {
    items.forEach((item) => {
      setProductSelection(
        item.product.categoryName,
        item.product.id,
        item.product.name,
        item.selectedVariant?.id,
        item.selectedVariant?.color
      );
    });
  }, [items, setProductSelection]);

  return {
    syncCartToSelection,
  };
};

/**
 * カートアイテム追加時に選択状態を更新するフック
 * ProductDetailModalなどで使用
 */
export const useAddToCartWithSelection = () => {
  const { addItem } = useCartStore();
  const { setProductSelection } = useSelectionStore();

  const addItemWithSelection = useCallback(
    (
      product: Parameters<typeof addItem>[0],
      quantity: number,
      variant?: Parameters<typeof addItem>[2],
      rooms?: string[]
    ) => {
      // カートに追加
      addItem(product, quantity, variant);

      // 選択状態を更新
      setProductSelection(
        product.categoryName,
        product.id,
        product.name,
        variant?.id,
        variant?.color,
        rooms
      );
    },
    [addItem, setProductSelection]
  );

  return {
    addItemWithSelection,
  };
};
