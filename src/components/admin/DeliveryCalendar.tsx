import React, { useState, useMemo } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Package, Clock, AlertTriangle, Check, Plus } from 'lucide-react';
import { Button } from '../common/Button';

interface DeliveryItem {
  id: string;
  projectName: string;
  customerName: string;
  items: string[];
  deliveryDate: Date;
  status: 'pending' | 'confirmed' | 'delivered' | 'delayed';
  notes?: string;
}

// ダミーデータ（実際はSupabaseから取得）
const SAMPLE_DELIVERIES: DeliveryItem[] = [
  {
    id: '1',
    projectName: '山田邸新築工事',
    customerName: '山田太郎',
    items: ['システムキッチン', 'ユニットバス', '洗面台'],
    deliveryDate: new Date(2025, 0, 15),
    status: 'confirmed',
  },
  {
    id: '2',
    projectName: '鈴木邸リフォーム',
    customerName: '鈴木花子',
    items: ['フローリング', '壁クロス'],
    deliveryDate: new Date(2025, 0, 20),
    status: 'pending',
  },
];

export const DeliveryCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [_showAddModal, setShowAddModal] = useState(false);
  const [deliveries] = useState<DeliveryItem[]>(SAMPLE_DELIVERIES);

  // カレンダーの日付を生成
  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPadding = firstDay.getDay();
    const totalDays = lastDay.getDate();

    const days: (Date | null)[] = [];

    // 前月の空白
    for (let i = 0; i < startPadding; i++) {
      days.push(null);
    }

    // 当月の日付
    for (let i = 1; i <= totalDays; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  }, [currentDate]);

  // 日付ごとの納期件数
  const deliveriesByDate = useMemo(() => {
    const map = new Map<string, DeliveryItem[]>();
    deliveries.forEach((d) => {
      const key = d.deliveryDate.toISOString().split('T')[0];
      const existing = map.get(key) || [];
      map.set(key, [...existing, d]);
    });
    return map;
  }, [deliveries]);

  const getDeliveriesForDate = (date: Date) => {
    const key = date.toISOString().split('T')[0];
    return deliveriesByDate.get(key) || [];
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const getStatusColor = (status: DeliveryItem['status']) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'delivered':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'delayed':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusIcon = (status: DeliveryItem['status']) => {
    switch (status) {
      case 'confirmed':
        return <Check className="w-3 h-3" />;
      case 'pending':
        return <Clock className="w-3 h-3" />;
      case 'delayed':
        return <AlertTriangle className="w-3 h-3" />;
      default:
        return <Package className="w-3 h-3" />;
    }
  };

  const statusLabels = {
    pending: '未確定',
    confirmed: '確定',
    delivered: '納品済',
    delayed: '遅延',
  };

  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];
  const monthName = `${currentDate.getFullYear()}年${currentDate.getMonth() + 1}月`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
      {/* ヘッダー */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">納期カレンダー</h2>
          </div>
          <Button variant="primary" size="sm" onClick={() => setShowAddModal(true)}>
            <Plus className="w-4 h-4 mr-1" />
            納期追加
          </Button>
        </div>
      </div>

      {/* カレンダーナビゲーション */}
      <div className="p-4 flex items-center justify-between bg-gray-50 dark:bg-gray-700/50">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <span className="text-lg font-medium text-gray-900 dark:text-gray-100">{monthName}</span>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* カレンダーグリッド */}
      <div className="p-4">
        {/* 曜日ヘッダー */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day, idx) => (
            <div
              key={day}
              className={`text-center text-sm font-medium py-2 ${
                idx === 0 ? 'text-red-500' : idx === 6 ? 'text-blue-500' : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* 日付グリッド */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((date, idx) => {
            if (!date) {
              return <div key={`empty-${idx}`} className="aspect-square" />;
            }

            const dayDeliveries = getDeliveriesForDate(date);
            const isToday = date.toDateString() === new Date().toDateString();
            const isSelected = selectedDate?.toDateString() === date.toDateString();
            const dayOfWeek = date.getDay();

            return (
              <button
                key={date.toISOString()}
                onClick={() => setSelectedDate(date)}
                className={`aspect-square p-1 rounded-lg transition-all ${
                  isSelected
                    ? 'bg-indigo-500 text-white'
                    : isToday
                    ? 'bg-indigo-100 dark:bg-indigo-900/30'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div
                  className={`text-sm font-medium ${
                    isSelected
                      ? 'text-white'
                      : dayOfWeek === 0
                      ? 'text-red-500'
                      : dayOfWeek === 6
                      ? 'text-blue-500'
                      : 'text-gray-900 dark:text-gray-100'
                  }`}
                >
                  {date.getDate()}
                </div>
                {dayDeliveries.length > 0 && (
                  <div className="flex justify-center gap-0.5 mt-1">
                    {dayDeliveries.slice(0, 3).map((d, i) => (
                      <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          d.status === 'delayed'
                            ? 'bg-red-500'
                            : d.status === 'confirmed'
                            ? 'bg-green-500'
                            : 'bg-yellow-500'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 選択日の納期一覧 */}
      {selectedDate && (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            {selectedDate.toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            の納期
          </h3>
          {getDeliveriesForDate(selectedDate).length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">納期予定はありません</p>
          ) : (
            <div className="space-y-3">
              {getDeliveriesForDate(selectedDate).map((d) => (
                <div
                  key={d.id}
                  className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 dark:text-gray-100">{d.projectName}</span>
                    <span className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${getStatusColor(d.status)}`}>
                      {getStatusIcon(d.status)}
                      {statusLabels[d.status]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{d.customerName} 様</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {d.items.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 凡例 */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-600 dark:text-gray-400">確定</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="text-gray-600 dark:text-gray-400">未確定</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-gray-600 dark:text-gray-400">遅延</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-gray-600 dark:text-gray-400">納品済</span>
          </div>
        </div>
      </div>
    </div>
  );
};
