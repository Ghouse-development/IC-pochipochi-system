/**
 * IC確認チェックリスト
 * - 打合せ時の確認項目管理
 * - チェック状態の永続化
 * - メモ追加機能
 */
import React, { useState, useMemo } from 'react';
import {
  CheckCircle,
  Circle,
  AlertTriangle,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Save,
  RotateCcw,
  ClipboardCheck,
} from 'lucide-react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useSelectionStore } from '../../stores/useSelectionStore';

// チェックリストアイテム
interface ChecklistItem {
  id: string;
  category: string;
  label: string;
  checked: boolean;
  note: string;
  required: boolean;
}

// チェックリストストア
interface ChecklistStore {
  items: ChecklistItem[];
  setChecked: (id: string, checked: boolean) => void;
  setNote: (id: string, note: string) => void;
  resetAll: () => void;
  initializeItems: (items: Omit<ChecklistItem, 'checked' | 'note'>[]) => void;
  getProgress: () => { total: number; checked: number; percentage: number };
}

const useChecklistStore = create<ChecklistStore>()(
  persist(
    (set, get) => ({
      items: [],

      setChecked: (id, checked) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, checked } : item
          ),
        }));
      },

      setNote: (id, note) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, note } : item
          ),
        }));
      },

      resetAll: () => {
        set((state) => ({
          items: state.items.map((item) => ({
            ...item,
            checked: false,
            note: '',
          })),
        }));
      },

      initializeItems: (newItems) => {
        const currentItems = get().items;
        const mergedItems = newItems.map((newItem) => {
          const existing = currentItems.find((i) => i.id === newItem.id);
          return {
            ...newItem,
            checked: existing?.checked ?? false,
            note: existing?.note ?? '',
          };
        });
        set({ items: mergedItems });
      },

      getProgress: () => {
        const items = get().items;
        const total = items.length;
        const checked = items.filter((i) => i.checked).length;
        return {
          total,
          checked,
          percentage: total > 0 ? Math.round((checked / total) * 100) : 0,
        };
      },
    }),
    {
      name: 'ic-review-checklist',
      version: 1,
    }
  )
);

// デフォルトのチェック項目
const DEFAULT_CHECKLIST_CATEGORIES = [
  {
    category: '基本確認',
    items: [
      { id: 'customer-info', label: 'お客様情報の確認', required: true },
      { id: 'project-info', label: 'プロジェクト情報の確認', required: true },
      { id: 'budget-confirm', label: '予算の確認', required: true },
      { id: 'schedule-confirm', label: 'スケジュールの確認', required: true },
    ],
  },
  {
    category: '外装確認',
    items: [
      { id: 'exterior-wall', label: '外壁の選択確認', required: true },
      { id: 'roof', label: '屋根の選択確認', required: true },
      { id: 'entrance-door', label: '玄関ドアの選択確認', required: true },
      { id: 'sash', label: 'サッシの選択確認', required: true },
      { id: 'exterior-color', label: '外装カラーバランス確認', required: false },
    ],
  },
  {
    category: '内装確認',
    items: [
      { id: 'flooring', label: '床材の選択確認', required: true },
      { id: 'wall-cloth', label: '壁クロスの選択確認', required: true },
      { id: 'ceiling-cloth', label: '天井クロスの選択確認', required: true },
      { id: 'interior-door', label: '建具の選択確認', required: true },
      { id: 'interior-color', label: '内装カラーバランス確認', required: false },
    ],
  },
  {
    category: '設備確認',
    items: [
      { id: 'kitchen', label: 'キッチンの選択確認', required: true },
      { id: 'bath', label: 'バスの選択確認', required: true },
      { id: 'washroom', label: '洗面台の選択確認', required: true },
      { id: 'toilet', label: 'トイレの選択確認', required: true },
      { id: 'showroom-estimate', label: 'ショールーム見積の確認', required: true },
    ],
  },
  {
    category: '最終確認',
    items: [
      { id: 'total-amount', label: '合計金額の確認', required: true },
      { id: 'missing-items', label: '未選択項目の確認', required: true },
      { id: 'special-notes', label: '特記事項の確認', required: false },
      { id: 'next-steps', label: '今後のスケジュール説明', required: true },
      { id: 'customer-signature', label: 'お客様確認サイン', required: true },
    ],
  },
];

interface ICReviewChecklistProps {
  onComplete?: () => void;
}

export const ICReviewChecklist: React.FC<ICReviewChecklistProps> = ({
  onComplete,
}) => {
  const { items, setChecked, setNote, resetAll, initializeItems, getProgress } =
    useChecklistStore();
  const { customerName, projectName } = useSelectionStore();

  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(DEFAULT_CHECKLIST_CATEGORIES.map((c) => c.category))
  );
  const [editingNote, setEditingNote] = useState<string | null>(null);

  // 初期化
  React.useEffect(() => {
    const allItems = DEFAULT_CHECKLIST_CATEGORIES.flatMap((cat) =>
      cat.items.map((item) => ({
        ...item,
        category: cat.category,
      }))
    );
    initializeItems(allItems);
  }, [initializeItems]);

  // カテゴリごとにアイテムをグループ化
  const groupedItems = useMemo(() => {
    const groups: Record<string, ChecklistItem[]> = {};
    items.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [items]);

  // 進捗状況
  const progress = getProgress();
  const requiredItems = items.filter((i) => i.required);
  const requiredChecked = requiredItems.filter((i) => i.checked).length;
  const allRequiredChecked = requiredChecked === requiredItems.length;

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const handleComplete = () => {
    if (allRequiredChecked) {
      onComplete?.();
    }
  };

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <ClipboardCheck className="w-6 h-6 text-blue-500" />
              IC確認チェックリスト
            </h2>
            <p className="text-gray-500 mt-1">
              {customerName || 'お客様'}様 / {projectName || 'プロジェクト'}
            </p>
          </div>
          <button
            onClick={resetAll}
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            リセット
          </button>
        </div>

        {/* 進捗バー */}
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">
              確認済み: {progress.checked} / {progress.total}
            </span>
            <span className="font-medium text-blue-600">{progress.percentage}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-500 transition-all"
              style={{ width: `${progress.percentage}%` }}
            />
          </div>
        </div>

        {/* 必須項目の状態 */}
        <div className="mt-4 flex items-center gap-2">
          {allRequiredChecked ? (
            <span className="flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg text-sm">
              <CheckCircle className="w-4 h-4" />
              すべての必須項目を確認済み
            </span>
          ) : (
            <span className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg text-sm">
              <AlertTriangle className="w-4 h-4" />
              必須項目: {requiredChecked} / {requiredItems.length}
            </span>
          )}
        </div>
      </div>

      {/* カテゴリ別チェックリスト */}
      {DEFAULT_CHECKLIST_CATEGORIES.map((category) => {
        const categoryItems = groupedItems[category.category] || [];
        const categoryChecked = categoryItems.filter((i) => i.checked).length;
        const isExpanded = expandedCategories.has(category.category);

        return (
          <div
            key={category.category}
            className="bg-white rounded-xl shadow-sm border overflow-hidden"
          >
            {/* カテゴリヘッダー */}
            <button
              onClick={() => toggleCategory(category.category)}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-900">{category.category}</h3>
                <span className="text-sm text-gray-500">
                  ({categoryChecked}/{categoryItems.length})
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all"
                    style={{
                      width: `${
                        categoryItems.length > 0
                          ? (categoryChecked / categoryItems.length) * 100
                          : 0
                      }%`,
                    }}
                  />
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* チェック項目 */}
            {isExpanded && (
              <div className="border-t divide-y">
                {categoryItems.map((item) => (
                  <div key={item.id} className="px-6 py-3">
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => setChecked(item.id, !item.checked)}
                        className="mt-0.5 flex-shrink-0"
                      >
                        {item.checked ? (
                          <CheckCircle className="w-5 h-5 text-blue-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300 hover:text-gray-400" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`${
                              item.checked ? 'text-gray-500 line-through' : 'text-gray-900'
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.required && (
                            <span className="px-1.5 py-0.5 text-xs bg-red-100 text-red-600 rounded">
                              必須
                            </span>
                          )}
                        </div>

                        {/* メモ */}
                        {editingNote === item.id ? (
                          <div className="mt-2 flex gap-2">
                            <input
                              type="text"
                              value={item.note}
                              onChange={(e) => setNote(item.id, e.target.value)}
                              placeholder="メモを入力..."
                              className="flex-1 px-3 py-1.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
                              autoFocus
                            />
                            <button
                              onClick={() => setEditingNote(null)}
                              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                              <Save className="w-4 h-4" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setEditingNote(item.id)}
                            className="mt-1 flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600"
                          >
                            <MessageSquare className="w-3 h-3" />
                            {item.note || 'メモを追加...'}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      {/* 確認完了ボタン */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-900">確認完了</p>
            <p className="text-sm text-gray-500">
              すべての必須項目を確認したら、確認完了ボタンを押してください
            </p>
          </div>
          <button
            onClick={handleComplete}
            disabled={!allRequiredChecked}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <CheckCircle className="w-5 h-5" />
            確認完了
          </button>
        </div>
      </div>
    </div>
  );
};
