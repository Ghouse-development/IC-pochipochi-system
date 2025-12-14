import { describe, it, expect, beforeEach } from 'vitest';
import { useOperationLogStore } from './useOperationLogStore';

describe('useOperationLogStore', () => {
  beforeEach(() => {
    useOperationLogStore.setState({
      logs: [],
      sessionId: 'test-session-id',
    });
  });

  describe('addLog', () => {
    it('should add a log entry', () => {
      const store = useOperationLogStore.getState();
      store.addLog('page_view', 'ホームページ閲覧');

      const state = useOperationLogStore.getState();
      expect(state.logs).toHaveLength(1);
      expect(state.logs[0].action).toBe('ホームページ閲覧');
      expect(state.logs[0].type).toBe('page_view');
    });

    it('should add log with details', () => {
      const store = useOperationLogStore.getState();
      store.addLog('product_view', '商品閲覧', { productId: '123' });

      const state = useOperationLogStore.getState();
      expect(state.logs[0].details).toEqual({ productId: '123' });
    });

    it('should add logs at the beginning', () => {
      const store = useOperationLogStore.getState();
      store.addLog('page_view', 'アクション1');
      store.addLog('page_view', 'アクション2');

      const state = useOperationLogStore.getState();
      expect(state.logs[0].action).toBe('アクション2');
      expect(state.logs[1].action).toBe('アクション1');
    });

    it('should include sessionId', () => {
      const store = useOperationLogStore.getState();
      store.addLog('page_view', 'テスト');

      const state = useOperationLogStore.getState();
      expect(state.logs[0].sessionId).toBe('test-session-id');
    });

    it('should limit to 1000 logs', { timeout: 30000 }, () => {
      const store = useOperationLogStore.getState();
      for (let i = 0; i < 1100; i++) {
        store.addLog('page_view', `アクション${i}`);
      }

      const state = useOperationLogStore.getState();
      expect(state.logs).toHaveLength(1000);
    });
  });

  describe('getLogs', () => {
    it('should return limited logs', () => {
      const store = useOperationLogStore.getState();
      for (let i = 0; i < 150; i++) {
        store.addLog('page_view', `アクション${i}`);
      }

      const logs = store.getLogs(50);
      expect(logs).toHaveLength(50);
    });

    it('should default to 100 logs', () => {
      const store = useOperationLogStore.getState();
      for (let i = 0; i < 150; i++) {
        store.addLog('page_view', `アクション${i}`);
      }

      const logs = store.getLogs();
      expect(logs).toHaveLength(100);
    });
  });

  describe('getLogsByType', () => {
    it('should filter logs by type', () => {
      const store = useOperationLogStore.getState();
      store.addLog('page_view', 'ページ閲覧');
      store.addLog('cart_add', 'カート追加');
      store.addLog('page_view', '別のページ閲覧');

      const pageViewLogs = store.getLogsByType('page_view');
      expect(pageViewLogs).toHaveLength(2);
    });

    it('should return empty array if no matching type', () => {
      const store = useOperationLogStore.getState();
      store.addLog('page_view', 'ページ閲覧');

      const cartLogs = store.getLogsByType('cart_add');
      expect(cartLogs).toHaveLength(0);
    });
  });

  describe('getLogsByDateRange', () => {
    it('should filter logs by date range', () => {
      const now = new Date();
      const yesterday = new Date(now);
      yesterday.setDate(yesterday.getDate() - 1);
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const store = useOperationLogStore.getState();
      store.addLog('page_view', '今日のログ');

      const logs = store.getLogsByDateRange(yesterday, tomorrow);
      expect(logs.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('startNewSession', () => {
    it('should generate new session id', () => {
      const oldSessionId = useOperationLogStore.getState().sessionId;
      const store = useOperationLogStore.getState();
      store.startNewSession();

      const newSessionId = useOperationLogStore.getState().sessionId;
      expect(newSessionId).not.toBe(oldSessionId);
    });

    it('should add session start log', () => {
      const store = useOperationLogStore.getState();
      store.startNewSession();

      const state = useOperationLogStore.getState();
      expect(state.logs.some(log => log.action === 'セッション開始')).toBe(true);
    });
  });

  describe('clearLogs', () => {
    it('should clear all logs', () => {
      const store = useOperationLogStore.getState();
      store.addLog('page_view', 'テスト1');
      store.addLog('page_view', 'テスト2');

      store.clearLogs();

      const state = useOperationLogStore.getState();
      expect(state.logs).toHaveLength(0);
    });
  });

  describe('getOperationStats', () => {
    it('should return operation statistics', () => {
      const store = useOperationLogStore.getState();
      store.addLog('page_view', 'テスト1');
      store.addLog('page_view', 'テスト2');
      store.addLog('cart_add', 'カート追加');

      const stats = store.getOperationStats();
      expect(stats).toContainEqual({ type: 'page_view', count: 2 });
      expect(stats).toContainEqual({ type: 'cart_add', count: 1 });
    });

    it('should sort by count descending', () => {
      const store = useOperationLogStore.getState();
      store.addLog('cart_add', 'カート1');
      store.addLog('page_view', 'ページ1');
      store.addLog('page_view', 'ページ2');
      store.addLog('page_view', 'ページ3');

      const stats = store.getOperationStats();
      expect(stats[0].type).toBe('page_view');
      expect(stats[0].count).toBe(3);
    });
  });

  describe('getTodayLogs', () => {
    it('should return only today logs', () => {
      const store = useOperationLogStore.getState();
      store.addLog('page_view', '今日のログ');

      const todayLogs = store.getTodayLogs();
      expect(todayLogs.length).toBeGreaterThanOrEqual(1);
    });
  });
});
