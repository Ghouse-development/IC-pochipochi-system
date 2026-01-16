/**
 * ネットワーク状態監視フック
 * オフライン検知、再接続通知、自動リトライを提供
 */
import { useState, useEffect, useCallback, useRef } from 'react';

export interface NetworkStatus {
  isOnline: boolean;
  wasOffline: boolean;
  connectionType: string | null;
  effectiveType: string | null;
  downlink: number | null;
  rtt: number | null;
  lastOnlineAt: Date | null;
  lastOfflineAt: Date | null;
}

interface UseNetworkStatusOptions {
  onOnline?: () => void;
  onOffline?: () => void;
  onReconnect?: () => void;
  pingUrl?: string;
  pingInterval?: number;
}

// Navigator.connection の型定義
interface NetworkInformation {
  type?: string;
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  addEventListener: (type: string, listener: () => void) => void;
  removeEventListener: (type: string, listener: () => void) => void;
}

declare global {
  interface Navigator {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  }
}

export function useNetworkStatus(options: UseNetworkStatusOptions = {}) {
  const {
    onOnline,
    onOffline,
    onReconnect,
    pingUrl = '', // 空の場合はnavigator.onLineのみを使用
    pingInterval = 30000,
  } = options;

  const [status, setStatus] = useState<NetworkStatus>({
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    wasOffline: false,
    connectionType: null,
    effectiveType: null,
    downlink: null,
    rtt: null,
    lastOnlineAt: null,
    lastOfflineAt: null,
  });

  const wasOfflineRef = useRef(false);
  const pingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // 接続情報を取得
  const getConnectionInfo = useCallback(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      return {
        connectionType: connection.type || null,
        effectiveType: connection.effectiveType || null,
        downlink: connection.downlink || null,
        rtt: connection.rtt || null,
      };
    }
    return {
      connectionType: null,
      effectiveType: null,
      downlink: null,
      rtt: null,
    };
  }, []);

  // 実際の接続確認（ping）
  const checkConnection = useCallback(async (): Promise<boolean> => {
    // pingUrlが空の場合はnavigator.onLineのみを使用
    if (!pingUrl) {
      return navigator.onLine;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(pingUrl, {
        method: 'HEAD',
        cache: 'no-store',
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return response.ok;
    } catch {
      return false;
    }
  }, [pingUrl]);

  // オンライン時の処理
  const handleOnline = useCallback(() => {
    const connectionInfo = getConnectionInfo();
    const now = new Date();

    setStatus((prev) => ({
      ...prev,
      ...connectionInfo,
      isOnline: true,
      wasOffline: wasOfflineRef.current,
      lastOnlineAt: now,
    }));

    if (wasOfflineRef.current) {
      onReconnect?.();
      wasOfflineRef.current = false;
    }

    onOnline?.();
  }, [getConnectionInfo, onOnline, onReconnect]);

  // オフライン時の処理
  const handleOffline = useCallback(() => {
    wasOfflineRef.current = true;
    const now = new Date();

    setStatus((prev) => ({
      ...prev,
      isOnline: false,
      wasOffline: true,
      lastOfflineAt: now,
    }));

    onOffline?.();
  }, [onOffline]);

  // 接続状態の変更を監視
  const handleConnectionChange = useCallback(() => {
    const connectionInfo = getConnectionInfo();
    setStatus((prev) => ({
      ...prev,
      ...connectionInfo,
    }));
  }, [getConnectionInfo]);

  // 定期的な接続確認
  useEffect(() => {
    const startPing = () => {
      pingIntervalRef.current = setInterval(async () => {
        if (navigator.onLine) {
          const isConnected = await checkConnection();
          if (!isConnected && status.isOnline) {
            handleOffline();
          } else if (isConnected && !status.isOnline) {
            handleOnline();
          }
        }
      }, pingInterval);
    };

    startPing();

    return () => {
      if (pingIntervalRef.current) {
        clearInterval(pingIntervalRef.current);
      }
    };
  }, [checkConnection, handleOffline, handleOnline, pingInterval, status.isOnline]);

  // イベントリスナーの設定
  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      connection.addEventListener('change', handleConnectionChange);
    }

    // 初期状態の設定
    const connectionInfo = getConnectionInfo();
    setStatus((prev) => ({
      ...prev,
      ...connectionInfo,
      isOnline: navigator.onLine,
    }));

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);

      if (connection) {
        connection.removeEventListener('change', handleConnectionChange);
      }
    };
  }, [handleOnline, handleOffline, handleConnectionChange, getConnectionInfo]);

  // 手動で接続を確認
  const forceCheck = useCallback(async () => {
    const isConnected = await checkConnection();
    if (isConnected !== status.isOnline) {
      if (isConnected) {
        handleOnline();
      } else {
        handleOffline();
      }
    }
    return isConnected;
  }, [checkConnection, handleOffline, handleOnline, status.isOnline]);

  return {
    ...status,
    forceCheck,
  };
}

// オフライン時のリトライキュー
interface RetryItem<T> {
  id: string;
  fn: () => Promise<T>;
  retries: number;
  maxRetries: number;
  createdAt: Date;
}

export function useRetryQueue<T>() {
  const [queue, setQueue] = useState<RetryItem<T>[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { isOnline } = useNetworkStatus();

  const addToQueue = useCallback((fn: () => Promise<T>, maxRetries = 3) => {
    const item: RetryItem<T> = {
      id: `retry_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      fn,
      retries: 0,
      maxRetries,
      createdAt: new Date(),
    };
    setQueue((prev) => [...prev, item]);
    return item.id;
  }, []);

  const removeFromQueue = useCallback((id: string) => {
    setQueue((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const processQueue = useCallback(async () => {
    if (!isOnline || isProcessing || queue.length === 0) return;

    setIsProcessing(true);

    for (const item of queue) {
      try {
        await item.fn();
        removeFromQueue(item.id);
      } catch (error) {
        if (item.retries < item.maxRetries) {
          setQueue((prev) =>
            prev.map((q) =>
              q.id === item.id ? { ...q, retries: q.retries + 1 } : q
            )
          );
        } else {
          removeFromQueue(item.id);
          console.error('Max retries reached for:', item.id, error);
        }
      }
    }

    setIsProcessing(false);
  }, [isOnline, isProcessing, queue, removeFromQueue]);

  // オンライン復帰時にキューを処理
  useEffect(() => {
    if (isOnline && queue.length > 0) {
      processQueue();
    }
  }, [isOnline, processQueue, queue.length]);

  return {
    queue,
    queueLength: queue.length,
    isProcessing,
    addToQueue,
    removeFromQueue,
    processQueue,
  };
}
