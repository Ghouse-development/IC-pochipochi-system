/**
 * お客様利用状況ダッシュボード
 * - お客様のログイン履歴
 * - 商品閲覧・選択履歴
 * - 選択進捗状況
 */
import React, { useMemo, useState } from 'react';
import {
  Clock,
  User,
  MousePointer,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Eye,
  ShoppingCart,
  Calendar,
  Activity,
  Filter,
} from 'lucide-react';
import {
  useOperationLogStore,
  type ActionType,
} from '../../stores/useOperationLogStore';
import { useSelectionStore } from '../../stores/useSelectionStore';
import { REQUIRED_CATEGORIES } from '../catalog/catalogUtils';

interface UsageDashboardProps {
  projectName?: string;
  customerName?: string;
}

type FilterType = 'all' | 'customer' | 'today';

export const UsageDashboard: React.FC<UsageDashboardProps> = ({
  projectName,
  customerName,
}) => {
  const {
    logs,
    getRecentLogs,
    getLogsByAction,
    getCustomerLogs,
    getCustomerStats,
    getTodayLogs,
  } = useOperationLogStore();
  const { getUnconfirmedCategories, getConfirmedCategories } = useSelectionStore();
  const [filter, setFilter] = useState<FilterType>('all');

  // 統計情報
  const stats = useMemo(() => {
    const customerStats = getCustomerStats();
    const allLogs = getRecentLogs(100);
    const viewLogs = getLogsByAction('view');
    const selectLogs = getLogsByAction('select');
    const confirmedCategories = getConfirmedCategories();
    const unconfirmedCategories = getUnconfirmedCategories(REQUIRED_CATEGORIES);

    // ログイン履歴（ユニークな日付）
    const loginDates = new Set(
      allLogs.map((log) => new Date(log.timestamp).toLocaleDateString('ja-JP'))
    );

    // 最終アクティビティ
    const lastActivity = allLogs[0]?.timestamp
      ? new Date(allLogs[0].timestamp)
      : null;

    return {
      totalViews: viewLogs.length,
      totalSelects: selectLogs.length,
      loginDays: loginDates.size,
      confirmedCount: confirmedCategories.length,
      unconfirmedCount: unconfirmedCategories.length,
      completionRate: REQUIRED_CATEGORIES.length > 0
        ? Math.round((confirmedCategories.length / REQUIRED_CATEGORIES.length) * 100)
        : 0,
      lastActivity,
      unconfirmedCategories,
      customerStats,
    };
  }, [logs, getRecentLogs, getLogsByAction, getConfirmedCategories, getUnconfirmedCategories, getCustomerStats]);

  // フィルタリングされたログ
  const filteredLogs = useMemo(() => {
    switch (filter) {
      case 'customer':
        return getCustomerLogs(20);
      case 'today':
        return getTodayLogs().slice(0, 20);
      default:
        return getRecentLogs(20);
    }
  }, [filter, getRecentLogs, getCustomerLogs, getTodayLogs]);

  const formatDate = (date: Date) => {
    return date.toLocaleString('ja-JP', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatFullDate = (date: Date) => {
    return date.toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getActionIcon = (action: ActionType) => {
    switch (action) {
      case 'view':
        return <Eye className="w-4 h-4 text-blue-500" />;
      case 'select':
        return <ShoppingCart className="w-4 h-4 text-green-500" />;
      case 'remove':
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      case 'login':
        return <User className="w-4 h-4 text-purple-500" />;
      case 'search':
        return <Filter className="w-4 h-4 text-orange-500" />;
      default:
        return <MousePointer className="w-4 h-4 text-gray-500" />;
    }
  };

  const getActionLabel = (action: ActionType) => {
    switch (action) {
      case 'view':
        return '閲覧';
      case 'select':
        return '選択';
      case 'remove':
        return '削除';
      case 'filter':
        return 'フィルタ';
      case 'search':
        return '検索';
      case 'login':
        return 'ログイン';
      default:
        return action;
    }
  };

  const getUserTypeBadge = (userType?: string) => {
    if (userType === 'customer') {
      return (
        <span className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-600 rounded">
          お客様
        </span>
      );
    } else if (userType === 'staff') {
      return (
        <span className="px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
          スタッフ
        </span>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900">お客様利用状況</h2>
          {customerName && (
            <p className="text-gray-500">
              {customerName}様 {projectName && `/ ${projectName}`}
            </p>
          )}
        </div>
        {stats.lastActivity && (
          <div className="text-sm text-gray-500 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border">
            <Activity className="w-4 h-4 text-green-500" />
            最終アクティビティ: {formatFullDate(stats.lastActivity)}
          </div>
        )}
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.totalViews}</p>
              <p className="text-sm text-gray-500">閲覧数</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <ShoppingCart className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.totalSelects}</p>
              <p className="text-sm text-gray-500">選択数</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.loginDays}</p>
              <p className="text-sm text-gray-500">アクセス日数</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stats.completionRate}%</p>
              <p className="text-sm text-gray-500">選択完了率</p>
            </div>
          </div>
        </div>
      </div>

      {/* 進捗状況 */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          選択進捗
        </h3>
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">
              {stats.confirmedCount} / {REQUIRED_CATEGORIES.length} カテゴリ完了
            </span>
            <span className="font-medium text-blue-600">{stats.completionRate}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all"
              style={{ width: `${stats.completionRate}%` }}
            />
          </div>
        </div>

        {stats.unconfirmedCategories.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-500" />
              未選択カテゴリ ({stats.unconfirmedCount}件)
            </h4>
            <div className="flex flex-wrap gap-2">
              {stats.unconfirmedCategories.slice(0, 10).map((cat) => (
                <span
                  key={cat}
                  className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded"
                >
                  {cat}
                </span>
              ))}
              {stats.unconfirmedCategories.length > 10 && (
                <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
                  他{stats.unconfirmedCategories.length - 10}件
                </span>
              )}
            </div>
          </div>
        )}

        {stats.unconfirmedCategories.length === 0 && stats.confirmedCount > 0 && (
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">すべてのカテゴリが選択済みです</span>
          </div>
        )}
      </div>

      {/* 最近のアクティビティ */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-500" />
            アクティビティ履歴
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                filter === 'all'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              すべて
            </button>
            <button
              onClick={() => setFilter('customer')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                filter === 'customer'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              お客様のみ
            </button>
            <button
              onClick={() => setFilter('today')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                filter === 'today'
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              今日
            </button>
          </div>
        </div>

        {filteredLogs.length > 0 ? (
          <div className="space-y-2">
            {filteredLogs.map((log, idx) => (
              <div
                key={log.id || idx}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg border border-gray-100"
              >
                {getActionIcon(log.action)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">
                      {getActionLabel(log.action)}
                    </span>
                    {getUserTypeBadge(log.userType)}
                  </div>
                  {(log.details?.categoryName || log.details?.itemName) && (
                    <p className="text-sm text-gray-500 truncate">
                      {log.details.categoryName && (
                        <span>{log.details.categoryName as string}</span>
                      )}
                      {log.details.itemName && (
                        <span> / {log.details.itemName as string}</span>
                      )}
                    </p>
                  )}
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">
                  {formatDate(new Date(log.timestamp))}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <MousePointer className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-400">
              {filter === 'customer'
                ? 'お客様のアクティビティがありません'
                : filter === 'today'
                ? '今日のアクティビティがありません'
                : 'アクティビティがありません'}
            </p>
          </div>
        )}
      </div>

      {/* お客様統計サマリー */}
      {stats.customerStats.lastActivity && (
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-500" />
            お客様アクティビティサマリー
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">
                {stats.customerStats.totalViews}
              </p>
              <p className="text-xs text-gray-500">閲覧回数</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">
                {stats.customerStats.totalSelects}
              </p>
              <p className="text-xs text-gray-500">選択回数</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">
                {stats.customerStats.loginDays}
              </p>
              <p className="text-xs text-gray-500">ログイン日数</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">
                {formatFullDate(stats.customerStats.lastActivity)}
              </p>
              <p className="text-xs text-gray-500">最終アクセス</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
