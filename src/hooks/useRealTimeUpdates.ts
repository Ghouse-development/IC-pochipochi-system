/**
 * Supabase リアルタイム更新フック
 * データベース変更のリアルタイム監視
 */
import { useEffect, useCallback, useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { RealtimeChannel, RealtimePostgresChangesPayload } from '@supabase/supabase-js';

type ChangeEvent = 'INSERT' | 'UPDATE' | 'DELETE' | '*';

interface UseRealTimeOptions<T extends Record<string, unknown>> {
  table: string;
  schema?: string;
  event?: ChangeEvent;
  filter?: string;
  onInsert?: (payload: T) => void;
  onUpdate?: (payload: { old: T; new: T }) => void;
  onDelete?: (payload: T) => void;
  onChange?: (payload: RealtimePostgresChangesPayload<T>) => void;
  enabled?: boolean;
}

export function useRealTimeUpdates<T extends Record<string, unknown>>(
  options: UseRealTimeOptions<T>
) {
  const {
    table,
    schema = 'public',
    event = '*',
    filter,
    onInsert,
    onUpdate,
    onDelete,
    onChange,
    enabled = true,
  } = options;

  const channelRef = useRef<RealtimeChannel | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const handlePayload = useCallback(
    (payload: RealtimePostgresChangesPayload<T>) => {
      onChange?.(payload);

      switch (payload.eventType) {
        case 'INSERT':
          onInsert?.(payload.new as T);
          break;
        case 'UPDATE':
          onUpdate?.({
            old: payload.old as T,
            new: payload.new as T,
          });
          break;
        case 'DELETE':
          onDelete?.(payload.old as T);
          break;
      }
    },
    [onChange, onInsert, onUpdate, onDelete]
  );

  useEffect(() => {
    if (!enabled) {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
        setIsConnected(false);
      }
      return;
    }

    const channelName = `realtime:${schema}:${table}:${filter || 'all'}`;

    // チャンネルの設定
    const channelConfig: Parameters<typeof supabase.channel>[1] = {
      config: {
        broadcast: { self: true },
      },
    };

    const channel = supabase.channel(channelName, channelConfig);

    // PostgreSQL Changes の購読
    const subscribeConfig = {
      event,
      schema,
      table,
      ...(filter && { filter }),
    } as const;

    channel
      .on(
        'postgres_changes' as never,
        subscribeConfig as never,
        handlePayload as never
      )
      .subscribe((status) => {
        if (status === 'SUBSCRIBED') {
          setIsConnected(true);
          setError(null);
        } else if (status === 'CHANNEL_ERROR') {
          setIsConnected(false);
          setError(new Error('リアルタイム接続に失敗しました'));
        } else if (status === 'TIMED_OUT') {
          setIsConnected(false);
          setError(new Error('接続がタイムアウトしました'));
        }
      });

    channelRef.current = channel;

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
        setIsConnected(false);
      }
    };
  }, [enabled, table, schema, event, filter, handlePayload]);

  // 手動で再接続
  const reconnect = useCallback(() => {
    if (channelRef.current) {
      supabase.removeChannel(channelRef.current);
      channelRef.current = null;
    }
    setIsConnected(false);
    setError(null);
    // useEffect が再実行される
  }, []);

  return {
    isConnected,
    error,
    reconnect,
  };
}

// プロジェクト更新の監視
export function useProjectUpdates(
  projectId: string | null,
  callbacks: {
    onUpdate?: (project: Record<string, unknown>) => void;
  }
) {
  return useRealTimeUpdates({
    table: 'projects',
    filter: projectId ? `id=eq.${projectId}` : undefined,
    onUpdate: callbacks.onUpdate ? ({ new: data }) => callbacks.onUpdate!(data) : undefined,
    enabled: !!projectId,
  });
}

// 通知の監視
export function useNotificationUpdates(
  userId: string | null,
  callbacks: {
    onNewNotification?: (notification: Record<string, unknown>) => void;
  }
) {
  return useRealTimeUpdates({
    table: 'notifications',
    filter: userId ? `user_id=eq.${userId}` : undefined,
    event: 'INSERT',
    onInsert: callbacks.onNewNotification,
    enabled: !!userId,
  });
}

// カート同期の監視（複数デバイス間）
export function useCartSync(
  userId: string | null,
  callbacks: {
    onCartUpdate?: (cart: Record<string, unknown>) => void;
  }
) {
  return useRealTimeUpdates({
    table: 'carts',
    filter: userId ? `user_id=eq.${userId}` : undefined,
    onUpdate: callbacks.onCartUpdate ? ({ new: data }) => callbacks.onCartUpdate!(data) : undefined,
    enabled: !!userId,
  });
}

// 複数テーブルの監視
interface MultiTableConfig<T extends Record<string, unknown>> {
  table: string;
  filter?: string;
  callback: (payload: RealtimePostgresChangesPayload<T>) => void;
}

export function useMultiTableUpdates<T extends Record<string, unknown>>(
  configs: MultiTableConfig<T>[],
  enabled = true
) {
  const channelsRef = useRef<RealtimeChannel[]>([]);
  const [connectionStates, setConnectionStates] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!enabled) {
      channelsRef.current.forEach((channel) => supabase.removeChannel(channel));
      channelsRef.current = [];
      setConnectionStates({});
      return;
    }

    const channels: RealtimeChannel[] = [];

    configs.forEach((config) => {
      const channelName = `realtime:${config.table}:${config.filter || 'all'}`;
      const channel = supabase.channel(channelName);

      channel
        .on(
          'postgres_changes' as never,
          {
            event: '*',
            schema: 'public',
            table: config.table,
            ...(config.filter && { filter: config.filter }),
          } as never,
          config.callback as never
        )
        .subscribe((status) => {
          setConnectionStates((prev) => ({
            ...prev,
            [config.table]: status === 'SUBSCRIBED',
          }));
        });

      channels.push(channel);
    });

    channelsRef.current = channels;

    return () => {
      channels.forEach((channel) => supabase.removeChannel(channel));
      channelsRef.current = [];
    };
  }, [configs, enabled]);

  return {
    connectionStates,
    isAllConnected: Object.values(connectionStates).every(Boolean),
  };
}

// ブロードキャスト機能（ユーザー間のリアルタイム通信）
export function useBroadcast<T>(channelName: string) {
  const channelRef = useRef<RealtimeChannel | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const channel = supabase.channel(channelName);

    channel.subscribe((status) => {
      setIsConnected(status === 'SUBSCRIBED');
    });

    channelRef.current = channel;

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
      }
    };
  }, [channelName]);

  const broadcast = useCallback(
    (event: string, payload: T) => {
      if (channelRef.current && isConnected) {
        channelRef.current.send({
          type: 'broadcast',
          event,
          payload,
        });
      }
    },
    [isConnected]
  );

  const subscribe = useCallback(
    (event: string, callback: (payload: T) => void) => {
      if (channelRef.current) {
        channelRef.current.on('broadcast', { event }, ({ payload }) => {
          callback(payload as T);
        });
      }
    },
    []
  );

  return {
    isConnected,
    broadcast,
    subscribe,
  };
}
