/**
 * React Query クライアント設定
 * キャッシュ管理、自動リトライ、エラーハンドリングを統合
 */

import { QueryClient } from '@tanstack/react-query';

/**
 * デフォルトのクエリ設定
 */
const defaultQueryOptions = {
  queries: {
    // キャッシュの有効期間（5分）
    staleTime: 5 * 60 * 1000,
    // ガベージコレクションまでの時間（30分）
    gcTime: 30 * 60 * 1000,
    // 自動リトライ設定
    retry: (failureCount: number, error: Error) => {
      // ネットワークエラーの場合は最大3回リトライ
      if (error.message.includes('network') || error.message.includes('fetch')) {
        return failureCount < 3;
      }
      // 4xx エラーはリトライしない
      if (error.message.includes('4')) {
        return false;
      }
      // その他のエラーは1回だけリトライ
      return failureCount < 1;
    },
    // リトライ間隔（エクスポネンシャルバックオフ）
    retryDelay: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000),
    // ウィンドウフォーカス時のリフェッチ（無効化）
    refetchOnWindowFocus: false,
    // ネットワーク復帰時のリフェッチ
    refetchOnReconnect: true,
  },
  mutations: {
    // ミューテーションのリトライ（デフォルトなし）
    retry: false,
  },
};

/**
 * QueryClient インスタンス
 */
export const queryClient = new QueryClient({
  defaultOptions: defaultQueryOptions,
});

/**
 * キャッシュをクリアするユーティリティ
 */
export function clearQueryCache(): void {
  queryClient.clear();
}

/**
 * 特定のクエリを無効化
 */
export function invalidateQueries(queryKey: string[]): Promise<void> {
  return queryClient.invalidateQueries({ queryKey });
}

/**
 * プリフェッチ用ユーティリティ
 */
export async function prefetchQuery<T>(
  queryKey: string[],
  queryFn: () => Promise<T>,
  staleTime?: number
): Promise<void> {
  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
    staleTime: staleTime ?? defaultQueryOptions.queries.staleTime,
  });
}
