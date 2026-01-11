import React, { useState } from 'react';
import {
  Bell,
  Mail,
  Users,
  Building,
  Truck,
  FileText,
  CheckCircle,
  Clock,
  Send,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';

// 通知先部署定義
interface Department {
  id: string;
  name: string;
  icon: React.ElementType;
  notifyOn: ('selection_confirmed' | 'order_placed' | 'change_request')[];
  contacts: { name: string; email: string; role: string }[];
  autoNotify: boolean;
}

const DEPARTMENTS: Department[] = [
  {
    id: 'construction',
    name: '工事部',
    icon: Building,
    notifyOn: ['selection_confirmed', 'change_request'],
    contacts: [
      { name: '工事担当者', email: 'construction@ghouse.com', role: '工事管理' },
    ],
    autoNotify: true,
  },
  {
    id: 'procurement',
    name: '仕入部',
    icon: Truck,
    notifyOn: ['selection_confirmed', 'order_placed'],
    contacts: [
      { name: '仕入担当者', email: 'procurement@ghouse.com', role: '発注管理' },
    ],
    autoNotify: true,
  },
  {
    id: 'accounting',
    name: '経理部',
    icon: FileText,
    notifyOn: ['order_placed'],
    contacts: [
      { name: '経理担当者', email: 'accounting@ghouse.com', role: '請求管理' },
    ],
    autoNotify: false,
  },
  {
    id: 'customer_service',
    name: 'カスタマーサービス',
    icon: Users,
    notifyOn: ['selection_confirmed'],
    contacts: [
      { name: 'CS担当者', email: 'cs@ghouse.com', role: '顧客対応' },
    ],
    autoNotify: false,
  },
];

interface NotificationLog {
  id: string;
  timestamp: string;
  type: string;
  department: string;
  status: 'sent' | 'pending' | 'failed';
  message: string;
}

interface AutoNotificationSystemProps {
  projectId?: string;
  projectName?: string;
  onNotificationSent?: (departmentId: string) => void;
}

export const AutoNotificationSystem: React.FC<AutoNotificationSystemProps> = ({
  projectName = '新規プロジェクト',
  onNotificationSent,
}) => {
  const [departments, setDepartments] = useState<Department[]>(DEPARTMENTS);
  const [notificationLogs, setNotificationLogs] = useState<NotificationLog[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // 自動通知設定の切り替え
  const toggleAutoNotify = (departmentId: string) => {
    setDepartments(prev =>
      prev.map(d =>
        d.id === departmentId ? { ...d, autoNotify: !d.autoNotify } : d
      )
    );
  };

  // 通知送信
  const sendNotification = async (departmentId: string, type: string) => {
    const department = departments.find(d => d.id === departmentId);
    if (!department) return;

    setIsSending(true);

    // 実際のAPI呼び出しはここで実装
    // await supabase.functions.invoke('send-notification', { ... })

    // シミュレーション
    await new Promise(resolve => setTimeout(resolve, 500));

    const log: NotificationLog = {
      id: `${Date.now()}`,
      timestamp: new Date().toISOString(),
      type,
      department: department.name,
      status: 'sent',
      message: `${projectName}の${type === 'selection_confirmed' ? '選択確定' : '発注'}通知`,
    };

    setNotificationLogs(prev => [log, ...prev]);
    onNotificationSent?.(departmentId);
    setIsSending(false);
  };

  // 全部署に一括通知
  const sendAllNotifications = async () => {
    const autoNotifyDepts = departments.filter(d => d.autoNotify);
    for (const dept of autoNotifyDepts) {
      await sendNotification(dept.id, 'selection_confirmed');
    }
  };

  return (
    <Card className="overflow-hidden">
      {/* ヘッダー */}
      <div
        className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Bell className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">
              他部署自動通知
            </h3>
            <p className="text-sm text-gray-600">
              選択確定時に関連部署へ自動通知
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {departments.filter(d => d.autoNotify).length}/{departments.length}部署
          </span>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="p-4 space-y-4">
          {/* 通知先一覧 */}
          <div className="space-y-2">
            {departments.map(dept => (
              <div
                key={dept.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    dept.autoNotify
                      ? 'bg-green-100'
                      : 'bg-gray-200'
                  }`}>
                    <dept.icon className={`w-4 h-4 ${
                      dept.autoNotify
                        ? 'text-green-600'
                        : 'text-gray-400'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {dept.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {dept.contacts[0]?.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAutoNotify(dept.id);
                    }}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      dept.autoNotify
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                    }`}
                  >
                    <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      dept.autoNotify ? 'left-7' : 'left-1'
                    }`} />
                  </button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => sendNotification(dept.id, 'selection_confirmed')}
                    disabled={isSending}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* 一括送信ボタン */}
          <Button
            variant="primary"
            className="w-full"
            onClick={sendAllNotifications}
            disabled={isSending || departments.filter(d => d.autoNotify).length === 0}
          >
            {isSending ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                送信中...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                選択確定を全部署に通知
              </>
            )}
          </Button>

          {/* 通知履歴 */}
          {notificationLogs.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                送信履歴
              </h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {notificationLogs.slice(0, 5).map(log => (
                  <div
                    key={log.id}
                    className="flex items-center justify-between text-sm p-2 bg-white rounded border border-gray-200"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600">
                        {log.department}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(log.timestamp).toLocaleTimeString('ja-JP')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 通知テンプレート説明 */}
          <div className="p-3 bg-blue-50 rounded-lg text-sm">
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-800">
                  自動通知内容
                </p>
                <ul className="mt-1 text-blue-700 list-disc list-inside">
                  <li>プロジェクト名・顧客名</li>
                  <li>選択商品一覧（カテゴリ別）</li>
                  <li>合計金額</li>
                  <li>納期・施工予定日</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

// 通知送信ユーティリティ
export const sendDepartmentNotification = async (
  _departmentId: string,
  _projectData: {
    projectId: string;
    projectName: string;
    customerName: string;
    selections: unknown[];
    totalAmount: number;
  }
) => {
  // Supabase Edge Functionを使用した通知送信
  // 実際の実装ではここでAPIを呼び出す
  // デバッグ: Sending notification to department: _departmentId, _projectData
  return { success: true };
};
