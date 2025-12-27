/**
 * アクティビティロガーフック
 * カタログ操作をログに記録する
 */
import { useCallback } from 'react';
import { useOperationLogStore } from '../stores/useOperationLogStore';

export const useActivityLogger = () => {
  const { addLog, currentUserType } = useOperationLogStore();

  // 商品閲覧ログ
  const logProductView = useCallback(
    (productId: string, productName: string, categoryName?: string) => {
      addLog('product_view', 'view', {
        productId,
        itemName: productName,
        categoryName,
      });
    },
    [addLog]
  );

  // 商品選択ログ
  const logProductSelect = useCallback(
    (productId: string, productName: string, categoryName?: string, variantId?: string) => {
      addLog('cart_add', 'select', {
        productId,
        itemName: productName,
        categoryName,
        variantId,
      });
    },
    [addLog]
  );

  // 商品削除ログ
  const logProductRemove = useCallback(
    (productId: string, productName: string, categoryName?: string) => {
      addLog('cart_remove', 'remove', {
        productId,
        itemName: productName,
        categoryName,
      });
    },
    [addLog]
  );

  // 検索ログ
  const logSearch = useCallback(
    (query: string) => {
      addLog('search', 'search', {
        searchQuery: query,
      });
    },
    [addLog]
  );

  // フィルタ適用ログ
  const logFilter = useCallback(
    (filterType: string, filterValue: string) => {
      addLog('filter_apply', 'filter', {
        filterValue: `${filterType}: ${filterValue}`,
      });
    },
    [addLog]
  );

  // ページ閲覧ログ
  const logPageView = useCallback(
    (pageName: string, categoryName?: string) => {
      addLog('page_view', 'view', {
        itemName: pageName,
        categoryName,
      });
    },
    [addLog]
  );

  // カテゴリ閲覧ログ
  const logCategoryView = useCallback(
    (categoryName: string) => {
      addLog('page_view', 'view', {
        categoryName,
      });
    },
    [addLog]
  );

  return {
    logProductView,
    logProductSelect,
    logProductRemove,
    logSearch,
    logFilter,
    logPageView,
    logCategoryView,
    currentUserType,
  };
};
