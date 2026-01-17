/**
 * 選択履歴コンポーネント
 * お客様が「誰がいつ何を変更したか」を確認できる画面
 */

import React, { useState, useMemo } from 'react';
import { History, ChevronDown, ChevronUp, Clock, Package, Filter } from 'lucide-react';
import { useOperationLogStore, type OperationLog } from '../../stores/useOperationLogStore';

interface SelectionHistoryProps {
  projectId?: string;
  maxItems?: number;
}

// ログタイプの日本語ラベル
const LOG_TYPE_LABELS: Record<string, string> = {
  cart_add: '商品を追加',
  cart_remove: '商品を削除',
  cart_update: '数量を変更',
  cart_clear: 'カートをクリア',
  selection_confirm: '選択を確定',
  selection_cancel: '選択をキャンセル',
  room_apply: '部屋に適用',
  variant_change: 'バリエーション変更',
  product_view: '商品を閲覧',
  page_view: 'ページを閲覧',
};

// ユーザータイプの日本語ラベル
const USER_TYPE_LABELS: Record<string, string> = {
  customer: 'お客様',
  staff: 'スタッフ',
  unknown: 'ゲスト',
};

// 時間のフォーマット
const formatTime = (timestamp: Date): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  // 1分以内
  if (diff < 60000) {
    return 'たった今';
  }
  // 1時間以内
  if (diff < 3600000) {
    return `${Math.floor(diff / 60000)}分前`;
  }
  // 今日
  if (date.toDateString() === now.toDateString()) {
    return date.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
  }
  // 昨日
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return `昨日 ${date.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })}`;
  }
  // それ以前
  return date.toLocaleDateString('ja-JP', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// ログアイテムの表示コンポーネント
const HistoryItem: React.FC<{ log: OperationLog }> = ({ log }) => {
  const actionLabel = LOG_TYPE_LABELS[log.type] || log.type;
  const userType = log.userType || 'unknown';
  const userLabel = USER_TYPE_LABELS[userType] || userType;

  // アクションに応じたアイコンの色
  const getActionColor = () => {
    if (log.type.includes('add') || log.type.includes('confirm')) {
      return 'text-blue-600 bg-blue-100';
    }
    if (log.type.includes('remove') || log.type.includes('cancel') || log.type.includes('clear')) {
      return 'text-red-600 bg-red-100';
    }
    if (log.type.includes('update') || log.type.includes('change')) {
      return 'text-blue-600 bg-blue-100';
    }
    return 'text-gray-600 bg-gray-100';
  };

  // 詳細情報から表示用の値を取得
  const productName = log.details?.productName as string | undefined;
  const variant = log.details?.variant as string | undefined;
  const quantity = log.details?.quantity as number | undefined;

  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
      {/* アイコン */}
      <div className={`p-2 rounded-full ${getActionColor()}`}>
        <Package className="w-4 h-4" />
      </div>

      {/* 内容 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">{actionLabel}</span>
          <span className={`text-xs px-1.5 py-0.5 rounded ${
            userType === 'customer' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
          }`}>
            {userLabel}
          </span>
        </div>

        {/* 詳細情報 */}
        {log.details && (
          <div className="mt-1 text-sm text-gray-600">
            {productName && (
              <span className="block">{productName}</span>
            )}
            {variant && (
              <span className="text-gray-500">バリエーション: {variant}</span>
            )}
            {quantity !== undefined && (
              <span className="text-gray-500 ml-2">数量: {quantity}</span>
            )}
          </div>
        )}
      </div>

      {/* 時刻 */}
      <div className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap">
        <Clock className="w-3 h-3" />
        {formatTime(log.timestamp)}
      </div>
    </div>
  );
};

export const SelectionHistory: React.FC<SelectionHistoryProps> = ({
  maxItems = 50,
}) => {
  const { logs } = useOperationLogStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');

  // 選択関連のログのみフィルタリング
  const selectionLogs = useMemo(() => {
    const relevantTypes = [
      'cart_add',
      'cart_remove',
      'cart_update',
      'cart_clear',
      'selection_confirm',
      'selection_cancel',
      'room_apply',
      'variant_change',
    ];

    let filtered = logs.filter((log) => relevantTypes.includes(log.type));

    if (filterType !== 'all') {
      filtered = filtered.filter((log) => log.userType === filterType);
    }

    return filtered.slice(0, maxItems);
  }, [logs, filterType, maxItems]);

  // 表示するログ（展開状態に応じて）
  const displayLogs = isExpanded ? selectionLogs : selectionLogs.slice(0, 5);

  if (selectionLogs.length === 0) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <History className="w-5 h-5 text-gray-600" />
          <h3 className="font-bold text-gray-900">変更履歴</h3>
        </div>
        <p className="text-gray-500 text-sm text-center py-4">
          まだ変更履歴がありません
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* ヘッダー */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-gray-600" />
            <h3 className="font-bold text-gray-900">変更履歴</h3>
            <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
              {selectionLogs.length}件
            </span>
          </div>

          {/* フィルター */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="text-xs border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">すべて</option>
              <option value="customer">お客様のみ</option>
              <option value="staff">スタッフのみ</option>
            </select>
          </div>
        </div>
      </div>

      {/* ログ一覧 */}
      <div className="px-4">
        {displayLogs.map((log) => (
          <HistoryItem key={log.id} log={log} />
        ))}
      </div>

      {/* 展開/折りたたみボタン */}
      {selectionLogs.length > 5 && (
        <div className="px-4 py-3 border-t border-gray-100">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-1 text-sm text-blue-600 hover:text-blue-700"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                折りたたむ
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                すべて表示 ({selectionLogs.length}件)
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectionHistory;
