import React, { useState, useMemo } from 'react';
import { Activity, Clock, Filter, Download, Trash2, ShoppingCart, FileText, Search, Eye, LogIn, LogOut, AlertCircle } from 'lucide-react';
import { useOperationLogStore, operationTypeLabels, type OperationType } from '../../stores/useOperationLogStore';
import { Button } from '../common/Button';

export const OperationLogViewer: React.FC = () => {
  const { logs, getLogs, getOperationStats, getTodayLogs, clearLogs } = useOperationLogStore();
  const [filterType, setFilterType] = useState<OperationType | 'all'>('all');
  const [showStats, setShowStats] = useState(false);

  const filteredLogs = useMemo(() => {
    if (filterType === 'all') return getLogs(200);
    return logs.filter(log => log.type === filterType).slice(0, 200);
  }, [logs, filterType, getLogs]);

  const stats = useMemo(() => getOperationStats(), [getOperationStats]);
  const todayCount = useMemo(() => getTodayLogs().length, [getTodayLogs]);

  const getIcon = (type: OperationType) => {
    switch (type) {
      case 'cart_add':
      case 'cart_remove':
      case 'cart_update':
      case 'cart_clear':
        return <ShoppingCart className="w-4 h-4" />;
      case 'pdf_export':
      case 'excel_export':
        return <FileText className="w-4 h-4" />;
      case 'search':
      case 'filter_apply':
        return <Search className="w-4 h-4" />;
      case 'product_view':
      case 'page_view':
        return <Eye className="w-4 h-4" />;
      case 'login':
        return <LogIn className="w-4 h-4" />;
      case 'logout':
        return <LogOut className="w-4 h-4" />;
      case 'error':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Activity className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: OperationType) => {
    switch (type) {
      case 'cart_add':
        return 'bg-green-100 text-green-700';
      case 'cart_remove':
      case 'cart_clear':
        return 'bg-red-100 text-red-700';
      case 'pdf_export':
      case 'excel_export':
        return 'bg-blue-100 text-blue-700';
      case 'estimate_finalize':
        return 'bg-purple-100 text-purple-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const formatTime = (date: Date) => {
    const d = new Date(date);
    return d.toLocaleString('ja-JP', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const exportLogs = () => {
    const data = filteredLogs.map(log => ({
      日時: formatTime(log.timestamp),
      タイプ: operationTypeLabels[log.type],
      アクション: log.action,
      詳細: JSON.stringify(log.details || {}),
      セッションID: log.sessionId,
    }));

    const csv = [
      Object.keys(data[0] || {}).join(','),
      ...data.map(row => Object.values(row).map(v => `"${v}"`).join(',')),
    ].join('\n');

    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `operation_log_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">操作ログ</h2>
            <span className="text-sm text-gray-500">
              （本日: {todayCount}件）
            </span>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowStats(!showStats)}
            >
              {showStats ? '一覧に戻る' : '統計表示'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={exportLogs}
            >
              <Download className="w-4 h-4 mr-1" />
              CSV出力
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearLogs}
              className="text-red-600 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              クリア
            </Button>
          </div>
        </div>

        {!showStats && (
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as OperationType | 'all')}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm bg-white text-gray-900"
            >
              <option value="all">すべて</option>
              {Object.entries(operationTypeLabels).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="p-4">
        {showStats ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {stats.map(({ type, count }) => (
              <div
                key={type}
                className={`p-4 rounded-lg ${getTypeColor(type)}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {getIcon(type)}
                  <span className="font-medium">{operationTypeLabels[type]}</span>
                </div>
                <div className="text-2xl font-bold">{count}</div>
              </div>
            ))}
          </div>
        ) : filteredLogs.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>操作ログがありません</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-[600px] overflow-y-auto">
            {filteredLogs.map((log) => (
              <div
                key={log.id}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100:bg-gray-700 transition-colors"
              >
                <div className={`p-2 rounded-lg ${getTypeColor(log.type)}`}>
                  {getIcon(log.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">
                      {log.action}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(log.type)}`}>
                      {operationTypeLabels[log.type]}
                    </span>
                  </div>
                  {log.details && Object.keys(log.details).length > 0 && (
                    <div className="mt-1 text-xs text-gray-500">
                      {Object.entries(log.details).map(([key, value]) => (
                        <span key={key} className="mr-3">
                          {key}: {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                    <Clock className="w-3 h-3" />
                    {formatTime(log.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
