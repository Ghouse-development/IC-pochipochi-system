import { useState, useEffect, useCallback } from 'react';
import {
  History,
  User,
  Calendar,
  Filter,
  ChevronDown,
  ChevronRight,
  FileText,
  Edit,
  Trash2,
  Plus,
  Clock,
  Activity
} from 'lucide-react';
import { AuditService, type AuditLogSummary, type DailyChangeSummary } from '../../services/auditService';
import { useUser } from '../../contexts/UserContext';
import { createLogger } from '../../lib/logger';

const logger = createLogger('AuditLogViewer');

export function AuditLogViewer() {
  const { currentUser } = useUser();
  const [logs, setLogs] = useState<AuditLogSummary[]>([]);
  const [dailySummary, setDailySummary] = useState<DailyChangeSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTable, setSelectedTable] = useState<string>('all');
  const [selectedUser, setSelectedUser] = useState<string>('all');
  const [expandedLogIds, setExpandedLogIds] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'logs' | 'summary'>('logs');

  const loadLogs = useCallback(async () => {
    setLoading(true);
    try {
      let data: AuditLogSummary[];

      if (selectedTable !== 'all') {
        data = await AuditService.getLogsByTable(selectedTable);
      } else if (selectedUser !== 'all') {
        data = await AuditService.getLogsByUser(selectedUser);
      } else {
        data = await AuditService.getRecentLogs(100);
      }

      setLogs(data);
    } catch (error) {
      logger.error('Error loading logs:', error);
    } finally {
      setLoading(false);
    }
  }, [selectedTable, selectedUser]);

  const loadDailySummary = useCallback(async () => {
    try {
      const data = await AuditService.getDailyChangeSummary(30);
      setDailySummary(data);
    } catch (error) {
      logger.error('Error loading daily summary:', error);
    }
  }, []);

  useEffect(() => {
    loadLogs();
    loadDailySummary();
  }, [loadLogs, loadDailySummary]);

  const toggleLogExpansion = (logId: string) => {
    const newExpanded = new Set(expandedLogIds);
    if (newExpanded.has(logId)) {
      newExpanded.delete(logId);
    } else {
      newExpanded.add(logId);
    }
    setExpandedLogIds(newExpanded);
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'INSERT':
        return <Plus className="w-4 h-4 text-green-600" />;
      case 'UPDATE':
        return <Edit className="w-4 h-4 text-blue-600" />;
      case 'DELETE':
        return <Trash2 className="w-4 h-4 text-red-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getActionColor = (action: string) => {
    switch (action) {
      case 'INSERT':
        return 'bg-green-100 text-green-800';
      case 'UPDATE':
        return 'bg-blue-100 text-blue-800';
      case 'DELETE':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // ユニークなテーブル名を取得
  const uniqueTableNames = Array.from(new Set(logs.map(log => log.table_name)));
  const uniqueUserEmails = Array.from(new Set(logs.map(log => log.user_email)));

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="border-b p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <History className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold">変更履歴</h2>
            {currentUser && (
              <span className="text-sm text-gray-500">
                （ログインユーザー: {currentUser.name}）
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-3 py-1 rounded ${
                activeTab === 'logs'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <History className="w-4 h-4 inline mr-1" />
              詳細ログ
            </button>
            <button
              onClick={() => setActiveTab('summary')}
              className={`px-3 py-1 rounded ${
                activeTab === 'summary'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Activity className="w-4 h-4 inline mr-1" />
              日次サマリー
            </button>
          </div>
        </div>

        {activeTab === 'logs' && (
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
                className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">すべてのテーブル</option>
                {uniqueTableNames.map(table => (
                  <option key={table} value={table}>
                    {AuditService.translateTableName(table)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-gray-500" />
              <select
                value={selectedUser}
                onChange={(e) => setSelectedUser(e.target.value)}
                className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">すべてのユーザー</option>
                {uniqueUserEmails.map(email => (
                  <option key={email} value={email}>
                    {email}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-600">読み込み中...</p>
          </div>
        ) : activeTab === 'logs' ? (
          <div className="space-y-2">
            {logs.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                変更履歴がありません
              </div>
            ) : (
              logs.map(log => {
                const isExpanded = expandedLogIds.has(log.id);
                const changes = AuditService.formatChanges(log.changes);

                return (
                  <div key={log.id} className="border rounded-lg">
                    <div
                      className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer"
                      onClick={() => toggleLogExpansion(log.id)}
                    >
                      <div className="flex items-center gap-3">
                        <button className="p-1">
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>

                        {getActionIcon(log.action)}

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">
                              {AuditService.translateTableName(log.table_name)}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${getActionColor(log.action)}`}>
                              {AuditService.translateAction(log.action)}
                            </span>
                            {log.record_name && (
                              <span className="text-sm text-gray-600">
                                「{log.record_name}」
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {log.user_name}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatDate(log.created_at)}
                            </span>
                            {log.changed_fields_count > 0 && (
                              <span className="flex items-center gap-1">
                                <Edit className="w-3 h-3" />
                                {log.changed_fields_count}項目変更
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {isExpanded && changes.length > 0 && (
                      <div className="border-t px-4 py-3 bg-gray-50">
                        <h4 className="text-sm font-medium mb-2">変更内容:</h4>
                        <ul className="space-y-1">
                          {changes.map((change, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-gray-400">•</span>
                              <span>{change}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {dailySummary.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                日次サマリーがありません
              </div>
            ) : (
              dailySummary.map(summary => (
                <div key={`${summary.change_date}-${summary.user_email}`} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-gray-600" />
                      <span className="font-medium">
                        {new Date(summary.change_date).toLocaleDateString('ja-JP')}
                      </span>
                      <span className="text-sm text-gray-600">- {summary.user_name}</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">
                      {summary.total_changes} 件の変更
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div className="text-center p-2 bg-green-50 rounded">
                      <Plus className="w-4 h-4 text-green-600 mx-auto mb-1" />
                      <div className="text-2xl font-bold text-green-600">{summary.inserts}</div>
                      <div className="text-xs text-gray-600">追加</div>
                    </div>
                    <div className="text-center p-2 bg-blue-50 rounded">
                      <Edit className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                      <div className="text-2xl font-bold text-blue-600">{summary.updates}</div>
                      <div className="text-xs text-gray-600">更新</div>
                    </div>
                    <div className="text-center p-2 bg-red-50 rounded">
                      <Trash2 className="w-4 h-4 text-red-600 mx-auto mb-1" />
                      <div className="text-2xl font-bold text-red-600">{summary.deletes}</div>
                      <div className="text-xs text-gray-600">削除</div>
                    </div>
                  </div>

                  {summary.changes_by_table && Object.keys(summary.changes_by_table).length > 0 && (
                    <div className="border-t pt-3">
                      <div className="text-xs text-gray-600 mb-2">テーブル別:</div>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(summary.changes_by_table).map(([table, count]) => (
                          <span
                            key={table}
                            className="text-xs px-2 py-1 bg-gray-100 rounded"
                          >
                            {AuditService.translateTableName(table)}: {count}件
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}