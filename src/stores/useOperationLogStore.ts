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

// アクションタイプ（UsageDashboard用）
export type ActionType = 'view' | 'select' | 'remove' | 'filter' | 'search' | 'login' | 'export' | 'other';

// ユーザータイプ
export type UserType = 'customer' | 'staff' | 'unknown';

export interface OperationLog {
  id: string;
  timestamp: Date;
  type: OperationType;
  action: ActionType;
  details?: Record<string, unknown> & {
    categoryName?: string;
    itemName?: string;
    productId?: string;
  };
  userId?: string;
  userType?: UserType;
  sessionId: string;
}

// プロジェクトごとのデータをLocalStorageに保存/読み込み
const getProjectStorageKey = (projectId: string) => `ic-pochipochi-oplog-${projectId}`;

const saveLogData = (projectId: string, logs: OperationLog[]) => {
  try {
    localStorage.setItem(getProjectStorageKey(projectId), JSON.stringify(logs));
  } catch (e) {
    console.error('Failed to save operation log data:', e);
  }
};

const loadLogData = (projectId: string): OperationLog[] | null => {
  try {
    const data = localStorage.getItem(getProjectStorageKey(projectId));
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to load operation log data:', e);
  }
  return null;
};

interface OperationLogStore {
  currentProjectId: string | null;
  logs: OperationLog[];
  sessionId: string;
  currentUserType: UserType;

  // プロジェクト切り替え
  setCurrentProject: (projectId: string) => void;
  getCurrentProjectId: () => string | null;

  // ログを追加
  addLog: (type: OperationType, action: ActionType, details?: Record<string, unknown>) => void;

  // ログを取得
  getLogs: (limit?: number) => OperationLog[];
  getRecentLogs: (limit?: number) => OperationLog[];
  getLogsByType: (type: OperationType) => OperationLog[];
  getLogsByAction: (action: ActionType) => OperationLog[];
  getLogsByDateRange: (start: Date, end: Date) => OperationLog[];
  getCustomerLogs: (limit?: number) => OperationLog[];

  // セッション管理
  startNewSession: (userType?: UserType) => void;
  setUserType: (userType: UserType) => void;

  // ログをクリア
  clearLogs: () => void;

  // 統計
  getOperationStats: () => { type: OperationType; count: number }[];
  getTodayLogs: () => OperationLog[];
  getCustomerStats: () => {
    totalViews: number;
    totalSelects: number;
    loginDays: number;
    lastActivity: Date | null;
  };
}

// セッションIDを生成
const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

export const useOperationLogStore = create<OperationLogStore>()(
  persist(
    (set, get) => ({
      currentProjectId: null,
      logs: [],
      sessionId: generateSessionId(),
      currentUserType: 'unknown' as UserType,

      setCurrentProject: (projectId) => {
        const currentState = get();

        // 現在のプロジェクトデータを保存
        if (currentState.currentProjectId) {
          saveLogData(currentState.currentProjectId, currentState.logs);
        }

        // 新しいプロジェクトのデータを読み込み
        const savedLogs = loadLogData(projectId);

        set({
          currentProjectId: projectId,
          logs: savedLogs || [],
        });
      },

      getCurrentProjectId: () => get().currentProjectId,

      addLog: (type, action, details) => {
        const newLog: OperationLog = {
          id: `log_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          timestamp: new Date(),
          type,
          action,
          details,
          userType: get().currentUserType,
          sessionId: get().sessionId,
        };

        set((state) => ({
          logs: [newLog, ...state.logs].slice(0, 1000), // 最大1000件まで保持
        }));
      },

      getLogs: (limit = 100) => {
        return get().logs.slice(0, limit);
      },

      getRecentLogs: (limit = 100) => {
        return get().logs.slice(0, limit);
      },

      getLogsByType: (type) => {
        return get().logs.filter((log) => log.type === type);
      },

      getLogsByAction: (action) => {
        return get().logs.filter((log) => log.action === action);
      },

      getLogsByDateRange: (start, end) => {
        return get().logs.filter((log) => {
          const logDate = new Date(log.timestamp);
          return logDate >= start && logDate <= end;
        });
      },

      getCustomerLogs: (limit = 100) => {
        return get().logs.filter((log) => log.userType === 'customer').slice(0, limit);
      },

      startNewSession: (userType = 'unknown') => {
        const newSessionId = generateSessionId();
        set({ sessionId: newSessionId, currentUserType: userType });
        get().addLog('login', 'login', { action: 'セッション開始' });
      },

      setUserType: (userType) => {
        set({ currentUserType: userType });
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

      getCustomerStats: () => {
        const customerLogs = get().logs.filter((log) => log.userType === 'customer');
        const viewLogs = customerLogs.filter((log) => log.action === 'view');
        const selectLogs = customerLogs.filter((log) => log.action === 'select');

        // ユニークなログイン日をカウント
        const loginDates = new Set(
          customerLogs
            .filter((log) => log.action === 'login')
            .map((log) => new Date(log.timestamp).toLocaleDateString('ja-JP'))
        );

        // 最終アクティビティ
        const lastActivity = customerLogs[0]?.timestamp
          ? new Date(customerLogs[0].timestamp)
          : null;

        return {
          totalViews: viewLogs.length,
          totalSelects: selectLogs.length,
          loginDays: loginDates.size,
          lastActivity,
        };
      },
    }),
    {
      name: 'ic-operation-log-storage',
      version: 2,
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
