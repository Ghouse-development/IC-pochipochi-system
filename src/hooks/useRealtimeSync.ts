/**
 * リアルタイム同期フック
 * Supabase Realtimeを使用して、複数端末間で選択内容を同期
 */

import { useEffect, useCallback, useRef, useState } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useCartStore } from '../stores/useCartStore';
import { createLogger } from '../lib/logger';
import type { RealtimeChannel, RealtimePostgresChangesPayload } from '@supabase/supabase-js';

const logger = createLogger('RealtimeSync');

interface SyncStatus {
  isConnected: boolean;
  lastSyncAt: Date | null;
  pendingChanges: number;
}

interface SelectionChange {
  type: 'INSERT' | 'UPDATE' | 'DELETE';
  projectId: string;
  itemId: string;
  variantId?: string;
  quantity?: number;
  selectedBy?: string;
  selectedAt: string;
}

interface SelectionRecord {
  project_id: string;
  item_id: string;
  variant_id?: string;
  quantity?: number;
  selected_by?: string;
  selected_at?: string;
}

export function useRealtimeSync(projectId: string | null) {
  const [syncStatus, setSyncStatus] = useState<SyncStatus>({
    isConnected: false,
    lastSyncAt: null,
    pendingChanges: 0,
  });

  const channelRef = useRef<RealtimeChannel | null>(null);
  const { items, removeItem } = useCartStore();

  // 外部からの変更を適用（自分の変更は無視）
  const applyExternalChange = useCallback((change: SelectionChange) => {
    logger.info('Applying external change:', change);

    // 自分の変更かどうかをチェック（セッションIDなどで判断）
    // 今はシンプルに全ての変更を適用

    if (change.type === 'DELETE') {
      // カートから削除
      const existingItem = items.find(i =>
        i.product.id === change.itemId &&
        i.selectedVariant?.id === change.variantId
      );
      if (existingItem) {
        removeItem(existingItem.product.id);
      }
    }

    setSyncStatus(prev => ({
      ...prev,
      lastSyncAt: new Date(),
    }));
  }, [items, removeItem]);

  // Supabase Realtimeに接続
  useEffect(() => {
    if (!projectId || !isSupabaseConfigured) {
      return;
    }

    // プロジェクト固有のチャンネルを作成
    const channelName = `selections:project_id=eq.${projectId}`;

    const channel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'selections',
          filter: `project_id=eq.${projectId}`,
        },
        (payload: RealtimePostgresChangesPayload<SelectionRecord>) => {
          logger.info('Realtime change received:', payload);

          const newRecord = payload.new as SelectionRecord | undefined;
          const oldRecord = payload.old as SelectionRecord | undefined;

          const change: SelectionChange = {
            type: payload.eventType as 'INSERT' | 'UPDATE' | 'DELETE',
            projectId: newRecord?.project_id || oldRecord?.project_id || '',
            itemId: newRecord?.item_id || oldRecord?.item_id || '',
            variantId: newRecord?.variant_id || oldRecord?.variant_id,
            quantity: newRecord?.quantity,
            selectedBy: newRecord?.selected_by,
            selectedAt: newRecord?.selected_at || new Date().toISOString(),
          };

          applyExternalChange(change);
        }
      )
      .subscribe((status) => {
        logger.info('Realtime subscription status:', status);
        setSyncStatus(prev => ({
          ...prev,
          isConnected: status === 'SUBSCRIBED',
        }));
      });

    channelRef.current = channel;

    return () => {
      if (channelRef.current) {
        supabase.removeChannel(channelRef.current);
        channelRef.current = null;
      }
    };
  }, [projectId, applyExternalChange]);

  // ローカルの変更をサーバーに同期
  const syncToServer = useCallback(async () => {
    if (!projectId || !isSupabaseConfigured) {
      return;
    }

    try {
      // カートの内容をselectionsテーブルに保存
      const selectionsToUpsert = items.map(item => {
        const unitPrice = item.product.pricing?.[0]?.price || 0;
        return {
          project_id: projectId,
          item_id: item.product.id,
          variant_id: item.selectedVariant?.id || null,
          quantity: item.quantity,
          unit_price: unitPrice,
          calculated_price: unitPrice * item.quantity,
          selected_at: new Date().toISOString(),
        };
      });

      if (selectionsToUpsert.length > 0) {
        const { error } = await supabase
          .from('selections')
          .upsert(selectionsToUpsert, {
            onConflict: 'project_id,item_id,variant_id',
          });

        if (error) {
          logger.error('Failed to sync selections:', error);
        } else {
          setSyncStatus(prev => ({
            ...prev,
            lastSyncAt: new Date(),
            pendingChanges: 0,
          }));
        }
      }
    } catch (err) {
      logger.error('Sync error:', err);
    }
  }, [projectId, items]);

  // サーバーから最新のデータを取得
  const fetchFromServer = useCallback(async () => {
    if (!projectId || !isSupabaseConfigured) {
      return null;
    }

    try {
      const { data, error } = await supabase
        .from('selections')
        .select(`
          *,
          item:items(*),
          variant:item_variants(*)
        `)
        .eq('project_id', projectId);

      if (error) {
        logger.error('Failed to fetch selections:', error);
        return null;
      }

      return data;
    } catch (err) {
      logger.error('Fetch error:', err);
      return null;
    }
  }, [projectId]);

  return {
    syncStatus,
    syncToServer,
    fetchFromServer,
    isConnected: syncStatus.isConnected,
  };
}

/**
 * プレゼンス（オンラインユーザー）管理フック
 * 同じプロジェクトを見ている他のユーザーを表示
 */
export function usePresence(projectId: string | null, userId: string | null) {
  const [onlineUsers, setOnlineUsers] = useState<Array<{
    id: string;
    name: string;
    lastSeen: Date;
  }>>([]);

  useEffect(() => {
    if (!projectId || !userId || !isSupabaseConfigured) {
      return;
    }

    const channel = supabase.channel(`presence:${projectId}`);

    channel
      .on('presence', { event: 'sync' }, () => {
        const state = channel.presenceState();
        const users = Object.values(state)
          .flat()
          .map((presence: unknown) => {
            const p = presence as { user_id: string; user_name: string; online_at: string };
            return {
              id: p.user_id,
              name: p.user_name,
              lastSeen: new Date(p.online_at),
            };
          });
        setOnlineUsers(users);
      })
      .subscribe(async (status) => {
        if (status === 'SUBSCRIBED') {
          await channel.track({
            user_id: userId,
            user_name: 'ユーザー', // 実際のユーザー名を使用
            online_at: new Date().toISOString(),
          });
        }
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [projectId, userId]);

  return { onlineUsers };
}
