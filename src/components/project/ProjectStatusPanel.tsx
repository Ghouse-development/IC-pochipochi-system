/**
 * プロジェクト確定パネル
 * - 現在のステータス表示
 * - ステータス変更ボタン
 * - 確定履歴
 */
import React, { useState, useCallback } from 'react';
import {
  CheckCircle,
  Clock,
  AlertCircle,
  Lock,
  Unlock,
  ChevronDown,
  ChevronUp,
  User,
  FileCheck,
} from 'lucide-react';
import {
  useSelectionStore,
  type ProjectStatus,
} from '../../stores/useSelectionStore';

// ステータスごとの設定
const STATUS_CONFIG: Record<ProjectStatus, {
  label: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  description: string;
}> = {
  draft: {
    label: '下書き',
    icon: Clock,
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    description: 'プロジェクト作成中',
  },
  customer_selecting: {
    label: 'お客様選択中',
    icon: User,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'お客様がアイテムを選択中',
  },
  ic_review: {
    label: 'IC確認中',
    icon: FileCheck,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'ICコーディネーターが確認中',
  },
  confirmed: {
    label: '確定済み',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: '仕様が確定されました',
  },
  finalized: {
    label: '最終確定',
    icon: Lock,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    description: '変更不可（契約済み）',
  },
};

// 次のステータスへの遷移
const NEXT_STATUS: Partial<Record<ProjectStatus, ProjectStatus>> = {
  draft: 'customer_selecting',
  customer_selecting: 'ic_review',
  ic_review: 'confirmed',
  confirmed: 'finalized',
};

// 前のステータスへの遷移（ロールバック）
const PREV_STATUS: Partial<Record<ProjectStatus, ProjectStatus>> = {
  customer_selecting: 'draft',
  ic_review: 'customer_selecting',
  confirmed: 'ic_review',
  // finalizedからは戻れない
};

interface ProjectStatusPanelProps {
  isStaff?: boolean; // スタッフかどうか（お客様は一部操作不可）
  userName?: string;
}

export const ProjectStatusPanel: React.FC<ProjectStatusPanelProps> = ({
  isStaff = true,
  userName = 'スタッフ',
}) => {
  const {
    projectStatus,
    statusHistory,
    setProjectStatus,
    customerName,
    projectName,
  } = useSelectionStore();

  const [showHistory, setShowHistory] = useState(false);
  const [confirmNotes, setConfirmNotes] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [pendingStatus, setPendingStatus] = useState<ProjectStatus | null>(null);

  const config = STATUS_CONFIG[projectStatus];
  const Icon = config.icon;

  const nextStatus = NEXT_STATUS[projectStatus];
  const prevStatus = PREV_STATUS[projectStatus];

  const handleStatusChange = useCallback((newStatus: ProjectStatus) => {
    setPendingStatus(newStatus);
    setShowConfirmDialog(true);
  }, []);

  const confirmStatusChange = useCallback(() => {
    if (pendingStatus) {
      setProjectStatus(pendingStatus, userName, confirmNotes || undefined);
      setShowConfirmDialog(false);
      setPendingStatus(null);
      setConfirmNotes('');
    }
  }, [pendingStatus, userName, confirmNotes, setProjectStatus]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      {/* ヘッダー */}
      <div className={`p-4 ${config.bgColor}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon className={`w-8 h-8 ${config.color}`} />
            <div>
              <h2 className={`text-lg font-bold ${config.color}`}>{config.label}</h2>
              <p className="text-sm text-gray-600">{config.description}</p>
            </div>
          </div>
          {projectStatus === 'finalized' && (
            <Lock className="w-6 h-6 text-purple-600" />
          )}
        </div>
      </div>

      {/* プロジェクト情報 */}
      <div className="p-4 border-b">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">お客様名:</span>
            <span className="ml-2 font-medium">{customerName || '未設定'}</span>
          </div>
          <div>
            <span className="text-gray-500">プロジェクト:</span>
            <span className="ml-2 font-medium">{projectName || '未設定'}</span>
          </div>
        </div>
      </div>

      {/* アクションボタン */}
      {isStaff && projectStatus !== 'finalized' && (
        <div className="p-4 flex flex-wrap gap-3">
          {nextStatus && (
            <button
              onClick={() => handleStatusChange(nextStatus)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              {STATUS_CONFIG[nextStatus].label}へ進める
            </button>
          )}
          {prevStatus && (
            <button
              onClick={() => handleStatusChange(prevStatus)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Unlock className="w-4 h-4" />
              {STATUS_CONFIG[prevStatus].label}に戻す
            </button>
          )}
        </div>
      )}

      {/* 確定履歴 */}
      <div className="border-t">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full p-3 flex items-center justify-between text-sm text-gray-600 hover:bg-gray-50"
        >
          <span>ステータス履歴 ({statusHistory.length}件)</span>
          {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        {showHistory && statusHistory.length > 0 && (
          <div className="px-4 pb-4 space-y-2">
            {[...statusHistory].reverse().map((history, idx) => {
              const historyConfig = STATUS_CONFIG[history.status];
              const HistoryIcon = historyConfig.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-2 bg-gray-50 rounded-lg text-sm"
                >
                  <HistoryIcon className={`w-4 h-4 mt-0.5 ${historyConfig.color}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{historyConfig.label}</span>
                      <span className="text-gray-400 text-xs">
                        {formatDate(history.timestamp)}
                      </span>
                    </div>
                    {history.by && (
                      <div className="text-gray-500 text-xs">by {history.by}</div>
                    )}
                    {history.notes && (
                      <div className="text-gray-600 mt-1">{history.notes}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {showHistory && statusHistory.length === 0 && (
          <div className="px-4 pb-4 text-sm text-gray-400 text-center">
            履歴がありません
          </div>
        )}
      </div>

      {/* 確認ダイアログ */}
      {showConfirmDialog && pendingStatus && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-bold">ステータス変更の確認</h3>
            </div>
            <p className="text-gray-600 mb-4">
              ステータスを「<span className="font-medium">{STATUS_CONFIG[pendingStatus].label}</span>」に変更します。
            </p>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                メモ（任意）
              </label>
              <textarea
                value={confirmNotes}
                onChange={(e) => setConfirmNotes(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                rows={2}
                placeholder="変更理由などを記入..."
              />
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowConfirmDialog(false);
                  setPendingStatus(null);
                  setConfirmNotes('');
                }}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                キャンセル
              </button>
              <button
                onClick={confirmStatusChange}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                変更する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
