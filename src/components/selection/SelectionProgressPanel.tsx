/**
 * 選択進捗パネル
 * - カテゴリごとの選択状況表示
 * - 外装/内装/設備の分類表示
 * - 進捗率の可視化
 */
import React, { useMemo } from 'react';
import {
  CheckCircle,
  Circle,
  XCircle,
  Home,
  Paintbrush,
  Wrench,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
} from 'lucide-react';
import { useSelectionStore, type SelectionStatus } from '../../stores/useSelectionStore';
import { REQUIRED_CATEGORIES } from '../catalog/catalogUtils';

interface SelectionProgressPanelProps {
  compact?: boolean;
  onCategoryClick?: (categoryName: string) => void;
}

// カテゴリをグループ分け
const CATEGORY_GROUPS = {
  exterior: {
    label: '外装',
    icon: Home,
    color: 'blue',
    categories: ['外壁', '屋根', '玄関ドア', 'サッシ', '軒天', '破風', '雨樋', 'ポスト', '表札'],
  },
  interior: {
    label: '内装',
    icon: Paintbrush,
    color: 'green',
    categories: ['床材', '壁クロス', '天井クロス', '巾木', '建具', '階段'],
  },
  equipment: {
    label: '設備',
    icon: Wrench,
    color: 'orange',
    categories: ['給気口', '床下点検口', '天井点検口', 'タオルリング', 'タオルバー', 'ペーパーホルダー', 'キッチン', 'バス', '洗面台', 'トイレ'],
  },
};

type GroupKey = keyof typeof CATEGORY_GROUPS;

export const SelectionProgressPanel: React.FC<SelectionProgressPanelProps> = ({
  compact = false,
  onCategoryClick,
}) => {
  const { selections, getSelectionStatus } = useSelectionStore();
  const [expandedGroups, setExpandedGroups] = React.useState<Set<GroupKey>>(
    new Set(['exterior', 'interior', 'equipment'])
  );

  // グループごとの進捗を計算
  const groupStats = useMemo(() => {
    const stats: Record<GroupKey, { total: number; completed: number; notNeeded: number }> = {
      exterior: { total: 0, completed: 0, notNeeded: 0 },
      interior: { total: 0, completed: 0, notNeeded: 0 },
      equipment: { total: 0, completed: 0, notNeeded: 0 },
    };

    (Object.keys(CATEGORY_GROUPS) as GroupKey[]).forEach((groupKey) => {
      const group = CATEGORY_GROUPS[groupKey];
      group.categories.forEach((cat) => {
        stats[groupKey].total++;
        const status = getSelectionStatus(cat);
        if (status === 'selected') {
          stats[groupKey].completed++;
        } else if (status === 'not_needed') {
          stats[groupKey].notNeeded++;
        }
      });
    });

    return stats;
  }, [selections, getSelectionStatus]);

  // 全体の進捗
  const totalStats = useMemo(() => {
    const total = REQUIRED_CATEGORIES.length;
    let completed = 0;
    let notNeeded = 0;

    REQUIRED_CATEGORIES.forEach((cat) => {
      const status = getSelectionStatus(cat);
      if (status === 'selected') completed++;
      else if (status === 'not_needed') notNeeded++;
    });

    return {
      total,
      completed,
      notNeeded,
      remaining: total - completed - notNeeded,
      percentage: Math.round(((completed + notNeeded) / total) * 100),
    };
  }, [selections, getSelectionStatus]);

  const toggleGroup = (group: GroupKey) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(group)) {
      newExpanded.delete(group);
    } else {
      newExpanded.add(group);
    }
    setExpandedGroups(newExpanded);
  };

  const getStatusIcon = (status: SelectionStatus) => {
    switch (status) {
      case 'selected':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'not_needed':
        return <XCircle className="w-4 h-4 text-gray-400" />;
      default:
        return <Circle className="w-4 h-4 text-gray-300" />;
    }
  };

  const getGroupColor = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-100', text: 'text-blue-600', progress: 'bg-blue-500' };
      case 'green':
        return { bg: 'bg-green-100', text: 'text-green-600', progress: 'bg-green-500' };
      case 'orange':
        return { bg: 'bg-orange-100', text: 'text-orange-600', progress: 'bg-orange-500' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600', progress: 'bg-gray-500' };
    }
  };

  if (compact) {
    return (
      <div className="bg-white rounded-xl shadow-sm border p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-900">選択進捗</h3>
          <span className="text-2xl font-bold text-blue-600">{totalStats.percentage}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all"
            style={{ width: `${totalStats.percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>{totalStats.completed}件選択済</span>
          <span>{totalStats.remaining}件未選択</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* 全体進捗 */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">選択進捗</h2>
          <div className="text-right">
            <span className="text-3xl font-bold text-blue-600">{totalStats.percentage}%</span>
            <p className="text-sm text-gray-500">
              {totalStats.completed + totalStats.notNeeded} / {totalStats.total}
            </p>
          </div>
        </div>

        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="h-full flex">
            <div
              className="bg-green-500 transition-all"
              style={{ width: `${(totalStats.completed / totalStats.total) * 100}%` }}
            />
            <div
              className="bg-gray-400 transition-all"
              style={{ width: `${(totalStats.notNeeded / totalStats.total) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-gray-600">選択済み: {totalStats.completed}件</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-full" />
            <span className="text-gray-600">不要: {totalStats.notNeeded}件</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-200 rounded-full" />
            <span className="text-gray-600">未選択: {totalStats.remaining}件</span>
          </div>
        </div>

        {totalStats.remaining > 0 && (
          <div className="mt-4 flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-2 rounded-lg">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm">
              まだ{totalStats.remaining}件のカテゴリが未選択です
            </span>
          </div>
        )}
      </div>

      {/* グループ別進捗 */}
      {(Object.keys(CATEGORY_GROUPS) as GroupKey[]).map((groupKey) => {
        const group = CATEGORY_GROUPS[groupKey];
        const stats = groupStats[groupKey];
        const colors = getGroupColor(group.color);
        const Icon = group.icon;
        const isExpanded = expandedGroups.has(groupKey);
        const groupPercentage = Math.round(
          ((stats.completed + stats.notNeeded) / stats.total) * 100
        );

        return (
          <div key={groupKey} className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {/* グループヘッダー */}
            <button
              onClick={() => toggleGroup(groupKey)}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 ${colors.bg} rounded-lg`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900">{group.label}</h3>
                  <p className="text-sm text-gray-500">
                    {stats.completed + stats.notNeeded} / {stats.total} 完了
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${colors.progress} transition-all`}
                    style={{ width: `${groupPercentage}%` }}
                  />
                </div>
                <span className={`font-bold ${colors.text}`}>{groupPercentage}%</span>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* カテゴリ一覧 */}
            {isExpanded && (
              <div className="border-t px-4 py-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {group.categories.map((category) => {
                    const status = getSelectionStatus(category);
                    const selection = selections[category];

                    return (
                      <button
                        key={category}
                        onClick={() => onCategoryClick?.(category)}
                        className={`flex items-center gap-2 p-2 rounded-lg text-left transition-colors ${
                          status === 'selected'
                            ? 'bg-green-50 hover:bg-green-100'
                            : status === 'not_needed'
                            ? 'bg-gray-50 hover:bg-gray-100'
                            : 'bg-white hover:bg-gray-50 border'
                        }`}
                      >
                        {getStatusIcon(status)}
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate ${
                            status === 'unconfirmed' ? 'text-gray-600' : 'text-gray-900'
                          }`}>
                            {category}
                          </p>
                          {selection?.selectedProductName && (
                            <p className="text-xs text-gray-500 truncate">
                              {selection.selectedProductName}
                            </p>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
