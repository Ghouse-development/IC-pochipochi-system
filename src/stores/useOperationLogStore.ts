import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type OperationType =
  | 'page_view'
  | 'product_view'
  | 'cart_add'
  | 'cart_remove'
  | 'cart_update'
  | 'cart_clear'
  | 'search'
  | 'filter_apply'
  | 'pdf_export'
  | 'excel_export'
  | 'spec_export'
  | 'presentation_export'
  | 'bulk_export'
  | 'estimate_finalize'
  | 'estimate_save'
  | 'admin_action'
  | 'login'
  | 'logout'
  | 'error';

export interface OperationLog {
  id: string;
  timestamp: Date;
  type: OperationType;
  action: string;
  details?: Record<string, unknown>;
  userId?: string;
  sessionId: string;
}

interface OperationLogStore {
  logs: OperationLog[];
  sessionId: string;

  // ログを追加
  addLog: (type: OperationType, action: string, details?: Record<string, unknown>) => void;

  // ログを取得
  getLogs: (limit?: number) => OperationLog[];
  getLogsByType: (type: OperationType) => OperationLog[];
  getLogsByDateRange: (start: Date, end: Date) => OperationLog[];

  // セッション管理
  startNewSession: () => void;

  // ログをクリア
  clearLogs: () => void;

  // 統計
  getOperationStats: () => { type: OperationType; count: number }[];
  getTodayLogs: () => OperationLog[];
}

// セッションIDを生成
const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

export const useOperationLogStore = create<OperationLogStore>()(
  persist(
    (set, get) => ({
      logs: [],
      sessionId: generateSessionId(),

      addLog: (type, action, details) => {
        const newLog: OperationLog = {
          id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          timestamp: new Date(),
          type,
          action,
          details,
          sessionId: get().sessionId,
        };

        set((state) => ({
          logs: [newLog, ...state.logs].slice(0, 1000), // 最大1000件まで保持
        }));
      },

      getLogs: (limit = 100) => {
        return get().logs.slice(0, limit);
      },

      getLogsByType: (type) => {
        return get().logs.filter((log) => log.type === type);
      },

      getLogsByDateRange: (start, end) => {
        return get().logs.filter((log) => {
          const logDate = new Date(log.timestamp);
          return logDate >= start && logDate <= end;
        });
      },

      startNewSession: () => {
        const newSessionId = generateSessionId();
        set({ sessionId: newSessionId });
        get().addLog('page_view', 'セッション開始');
      },

      clearLogs: () => {
        set({ logs: [] });
      },

      getOperationStats: () => {
        const logs = get().logs;
        const statsMap = new Map<OperationType, number>();

        logs.forEach((log) => {
          const current = statsMap.get(log.type) || 0;
          statsMap.set(log.type, current + 1);
        });

        return Array.from(statsMap.entries())
          .map(([type, count]) => ({ type, count }))
          .sort((a, b) => b.count - a.count);
      },

      getTodayLogs: () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return get().getLogsByDateRange(today, tomorrow);
      },
    }),
    {
      name: 'ic-operation-log-storage',
      version: 1,
    }
  )
);

// ユーティリティ: 操作タイプの日本語名
export const operationTypeLabels: Record<OperationType, string> = {
  page_view: 'ページ閲覧',
  product_view: '商品閲覧',
  cart_add: 'カート追加',
  cart_remove: 'カート削除',
  cart_update: 'カート更新',
  cart_clear: 'カートクリア',
  search: '検索',
  filter_apply: 'フィルター適用',
  pdf_export: 'PDF出力',
  excel_export: 'Excel出力',
  spec_export: '仕様書出力',
  presentation_export: '提案資料出力',
  bulk_export: '一括出力',
  estimate_finalize: '見積確定',
  estimate_save: '見積保存',
  admin_action: '管理操作',
  login: 'ログイン',
  logout: 'ログアウト',
  error: 'エラー',
};
