/**
 * 同期ステータスインジケーター
 * リアルタイム同期の状態を表示
 */

import React from 'react';
import { RefreshCw, Users, Cloud, CloudOff } from 'lucide-react';

interface SyncStatusIndicatorProps {
  isConnected: boolean;
  lastSyncAt: Date | null;
  onlineUsers?: Array<{ id: string; name: string }>;
  onSync?: () => void;
  isSyncing?: boolean;
}

export const SyncStatusIndicator: React.FC<SyncStatusIndicatorProps> = ({
  isConnected,
  lastSyncAt,
  onlineUsers = [],
  onSync,
  isSyncing = false,
}) => {
  const formatLastSync = (date: Date | null) => {
    if (!date) return '未同期';
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 60) return '今';
    if (diff < 3600) return `${Math.floor(diff / 60)}分前`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}時間前`;
    return date.toLocaleDateString('ja-JP');
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      {/* 接続状態 */}
      <div
        className={`flex items-center gap-1.5 px-2 py-1 rounded-full ${
          isConnected
            ? 'bg-blue-100 text-blue-700'
            : 'bg-gray-100 text-gray-500'
        }`}
      >
        {isConnected ? (
          <>
            <Cloud className="w-3.5 h-3.5" />
            <span className="text-xs">同期中</span>
          </>
        ) : (
          <>
            <CloudOff className="w-3.5 h-3.5" />
            <span className="text-xs">オフライン</span>
          </>
        )}
      </div>

      {/* 最終同期時刻 */}
      {lastSyncAt && (
        <div className="text-xs text-gray-500">
          最終: {formatLastSync(lastSyncAt)}
        </div>
      )}

      {/* オンラインユーザー数 */}
      {onlineUsers.length > 0 && (
        <div className="flex items-center gap-1 text-xs text-blue-600">
          <Users className="w-3.5 h-3.5" />
          <span>{onlineUsers.length}人が閲覧中</span>
        </div>
      )}

      {/* 手動同期ボタン */}
      {onSync && (
        <button
          onClick={onSync}
          disabled={isSyncing}
          className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors disabled:opacity-50"
          title="手動で同期"
        >
          <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
        </button>
      )}
    </div>
  );
};

/**
 * コンパクト版（モバイル用）
 */
export const SyncStatusBadge: React.FC<{
  isConnected: boolean;
  onlineCount?: number;
}> = ({ isConnected, onlineCount = 0 }) => {
  return (
    <div className="flex items-center gap-1">
      <div
        className={`w-2 h-2 rounded-full ${
          isConnected ? 'bg-blue-500' : 'bg-gray-400'
        }`}
      />
      {onlineCount > 1 && (
        <span className="text-xs text-gray-500">{onlineCount}</span>
      )}
    </div>
  );
};

export default SyncStatusIndicator;
