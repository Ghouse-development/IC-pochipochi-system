import { create } from 'zustand';

export interface NotificationData {
  orderId?: string;
  productId?: string;
  versionId?: string;
  [key: string]: unknown;
}

export interface Notification {
  id: string;
  type: 'order_confirmed' | 'order_modified' | 'product_updated' | 'version_changed';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  data?: NotificationData;
}

interface NotificationStore {
  notifications: Notification[];
  unreadCount: number;
  
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotifications: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  unreadCount: 0,
  
  addNotification: (notification) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false,
    };
    
    set((state) => ({
      notifications: [newNotification, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    }));
  },
  
  markAsRead: (id) => {
    set((state) => {
      const notifications = state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      );
      const unreadCount = notifications.filter((n) => !n.read).length;
      return { notifications, unreadCount };
    });
  },
  
  markAllAsRead: () => {
    set((state) => ({
      notifications: state.notifications.map((n) => ({ ...n, read: true })),
      unreadCount: 0,
    }));
  },
  
  clearNotifications: () => {
    set({ notifications: [], unreadCount: 0 });
  },
}));