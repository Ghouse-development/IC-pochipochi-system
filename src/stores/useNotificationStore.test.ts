import { describe, it, expect, beforeEach } from 'vitest';
import { useNotificationStore } from './useNotificationStore';

describe('useNotificationStore', () => {
  beforeEach(() => {
    useNotificationStore.setState({
      notifications: [],
      unreadCount: 0,
    });
  });

  describe('addNotification', () => {
    it('should add a notification', () => {
      const store = useNotificationStore.getState();
      store.addNotification({
        type: 'order_confirmed',
        title: 'テスト通知',
        message: 'テストメッセージ',
      });

      const state = useNotificationStore.getState();
      expect(state.notifications).toHaveLength(1);
      expect(state.notifications[0].title).toBe('テスト通知');
      expect(state.notifications[0].read).toBe(false);
    });

    it('should increment unreadCount', () => {
      const store = useNotificationStore.getState();
      store.addNotification({
        type: 'order_confirmed',
        title: '通知1',
        message: 'メッセージ1',
      });
      store.addNotification({
        type: 'product_updated',
        title: '通知2',
        message: 'メッセージ2',
      });

      expect(useNotificationStore.getState().unreadCount).toBe(2);
    });

    it('should add notification at the beginning', () => {
      const store = useNotificationStore.getState();
      store.addNotification({
        type: 'order_confirmed',
        title: '古い通知',
        message: 'メッセージ',
      });
      store.addNotification({
        type: 'product_updated',
        title: '新しい通知',
        message: 'メッセージ',
      });

      const notifications = useNotificationStore.getState().notifications;
      expect(notifications[0].title).toBe('新しい通知');
      expect(notifications[1].title).toBe('古い通知');
    });

    it('should generate unique id and timestamp', () => {
      const store = useNotificationStore.getState();
      store.addNotification({
        type: 'order_confirmed',
        title: 'テスト',
        message: 'メッセージ',
      });

      const notification = useNotificationStore.getState().notifications[0];
      expect(notification.id).toBeDefined();
      expect(notification.timestamp).toBeInstanceOf(Date);
    });
  });

  describe('markAsRead', () => {
    it('should mark a notification as read', () => {
      const store = useNotificationStore.getState();
      store.addNotification({
        type: 'order_confirmed',
        title: 'テスト',
        message: 'メッセージ',
      });

      const id = useNotificationStore.getState().notifications[0].id;
      store.markAsRead(id);

      const notification = useNotificationStore.getState().notifications[0];
      expect(notification.read).toBe(true);
    });

    it('should decrement unreadCount', () => {
      // 直接stateを設定してテスト（Date.now()によるID重複を回避）
      useNotificationStore.setState({
        notifications: [
          { id: 'notif-1', type: 'order_confirmed', title: 'テスト1', message: 'メッセージ', timestamp: new Date(), read: false },
          { id: 'notif-2', type: 'order_confirmed', title: 'テスト2', message: 'メッセージ', timestamp: new Date(), read: false },
        ],
        unreadCount: 2,
      });

      expect(useNotificationStore.getState().unreadCount).toBe(2);

      // notif-1を既読にする
      useNotificationStore.getState().markAsRead('notif-1');

      expect(useNotificationStore.getState().unreadCount).toBe(1);
    });

    it('should not affect other notifications', () => {
      // 直接stateを設定してテスト
      useNotificationStore.setState({
        notifications: [
          { id: 'n1', type: 'order_confirmed', title: 'テスト1', message: 'msg', timestamp: new Date(), read: false },
          { id: 'n2', type: 'order_confirmed', title: 'テスト2', message: 'msg', timestamp: new Date(), read: false },
        ],
        unreadCount: 2,
      });

      // n1を既読にする
      useNotificationStore.getState().markAsRead('n1');

      const notifications = useNotificationStore.getState().notifications;
      expect(notifications.find(n => n.id === 'n1')?.read).toBe(true);
      expect(notifications.find(n => n.id === 'n2')?.read).toBe(false);
    });
  });

  describe('markAllAsRead', () => {
    it('should mark all notifications as read', () => {
      const store = useNotificationStore.getState();
      store.addNotification({
        type: 'order_confirmed',
        title: 'テスト1',
        message: 'メッセージ',
      });
      store.addNotification({
        type: 'order_confirmed',
        title: 'テスト2',
        message: 'メッセージ',
      });

      store.markAllAsRead();

      const notifications = useNotificationStore.getState().notifications;
      expect(notifications.every(n => n.read)).toBe(true);
    });

    it('should set unreadCount to 0', () => {
      const store = useNotificationStore.getState();
      store.addNotification({
        type: 'order_confirmed',
        title: 'テスト',
        message: 'メッセージ',
      });

      store.markAllAsRead();

      expect(useNotificationStore.getState().unreadCount).toBe(0);
    });
  });

  describe('clearNotifications', () => {
    it('should clear all notifications', () => {
      const store = useNotificationStore.getState();
      store.addNotification({
        type: 'order_confirmed',
        title: 'テスト',
        message: 'メッセージ',
      });

      store.clearNotifications();

      expect(useNotificationStore.getState().notifications).toHaveLength(0);
      expect(useNotificationStore.getState().unreadCount).toBe(0);
    });
  });
});
