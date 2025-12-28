/**
 * ワークフローガイド
 * - 現在位置を常に表示
 * - 次のアクションを明確に案内
 * - 進捗を視覚化
 */
import React, { useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  Paintbrush,
  Bath,
  ShoppingCart,
  FileText,
  Check,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  AlertCircle,
  X,
} from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { useSelectionStore } from '../../stores/useSelectionStore';

interface WorkflowStep {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ElementType;
  path: string;
  categories: string[];
  color: string;
}

const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 'exterior',
    label: '外装を選ぶ',
    shortLabel: '外装',
    icon: Home,
    path: '/catalog/exterior',
    categories: ['外壁', '屋根', '玄関ドア', 'サッシ', '軒天', '破風・鼻隠し', '雨樋'],
    color: 'blue',
  },
  {
    id: 'interior',
    label: '内装を選ぶ',
    shortLabel: '内装',
    icon: Paintbrush,
    path: '/catalog/interior',
    categories: ['床材', '壁クロス', '天井クロス', '建具', '階段', '玄関タイル'],
    color: 'green',
  },
  {
    id: 'equipment',
    label: '設備を選ぶ',
    shortLabel: '設備',
    icon: Bath,
    path: '/catalog/equipment',
    categories: ['キッチン', 'バス', '洗面台', 'トイレ', '給湯器'],
    color: 'orange',
  },
  {
    id: 'cart',
    label: '選択内容を確認',
    shortLabel: '確認',
    icon: ShoppingCart,
    path: '/cart',
    categories: [],
    color: 'purple',
  },
  {
    id: 'export',
    label: '見積書を出力',
    shortLabel: '出力',
    icon: FileText,
    path: '/export',
    categories: [],
    color: 'pink',
  },
];

interface WorkflowGuideProps {
  onCartClick?: () => void;
}

export const WorkflowGuide: React.FC<WorkflowGuideProps> = ({ onCartClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { items } = useCartStore();
  const { getSelectionStatus } = useSelectionStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // 現在のステップを判定
  const currentStep = useMemo(() => {
    const path = location.pathname;
    if (path.includes('/catalog/exterior')) return 'exterior';
    if (path.includes('/catalog/interior')) return 'interior';
    if (path.includes('/catalog/equipment')) return 'equipment';
    if (path.includes('/cart') || path.includes('/export')) return 'cart';
    return 'exterior';
  }, [location.pathname]);

  // 各ステップの進捗を計算
  const stepProgress = useMemo(() => {
    const progress: Record<string, { completed: number; total: number; percentage: number }> = {};

    WORKFLOW_STEPS.forEach((step) => {
      if (step.categories.length === 0) {
        // カート・出力ステップ
        progress[step.id] = {
          completed: items.length > 0 ? 1 : 0,
          total: 1,
          percentage: items.length > 0 ? 100 : 0,
        };
      } else {
        let completed = 0;
        step.categories.forEach((cat) => {
          const status = getSelectionStatus(cat);
          if (status === 'selected' || status === 'not_needed') {
            completed++;
          }
        });
        progress[step.id] = {
          completed,
          total: step.categories.length,
          percentage: Math.round((completed / step.categories.length) * 100),
        };
      }
    });

    return progress;
  }, [items.length, getSelectionStatus]);

  // 全体の進捗
  const overallProgress = useMemo(() => {
    const catalogSteps = WORKFLOW_STEPS.filter((s) => s.categories.length > 0);
    let totalCompleted = 0;
    let totalCategories = 0;

    catalogSteps.forEach((step) => {
      totalCompleted += stepProgress[step.id].completed;
      totalCategories += stepProgress[step.id].total;
    });

    return {
      completed: totalCompleted,
      total: totalCategories,
      percentage: totalCategories > 0 ? Math.round((totalCompleted / totalCategories) * 100) : 0,
    };
  }, [stepProgress]);

  // 次のアクションを決定
  const nextAction = useMemo(() => {
    // 未完了のステップを探す
    for (const step of WORKFLOW_STEPS) {
      if (step.categories.length > 0 && stepProgress[step.id].percentage < 100) {
        return {
          step,
          message: `${step.shortLabel}の選択を続けましょう`,
          action: () => navigate(step.path),
        };
      }
    }

    // 全カテゴリ完了
    if (items.length === 0) {
      return {
        step: WORKFLOW_STEPS[0],
        message: 'カートに商品を追加してください',
        action: () => navigate('/catalog/exterior'),
      };
    }

    return {
      step: WORKFLOW_STEPS[3],
      message: '選択内容を確認して見積書を出力できます',
      action: onCartClick || (() => {}),
    };
  }, [stepProgress, items.length, navigate, onCartClick]);

  // 閉じた状態で非表示
  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-20 right-4 z-40 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors border"
        title="進捗を表示"
      >
        <Sparkles className="w-5 h-5 text-blue-500" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 right-4 z-40 w-72 sm:w-80">
      {/* メインカード */}
      <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
        {/* ヘッダー */}
        <div
          className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-sm">選択の進捗</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{overallProgress.percentage}%</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsDismissed(true);
              }}
              className="p-1 hover:bg-white/20 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* プログレスバー */}
        <div className="h-1.5 bg-gray-200">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
            style={{ width: `${overallProgress.percentage}%` }}
          />
        </div>

        {/* 次のアクション */}
        <div className="px-4 py-3 bg-blue-50 border-b">
          <div className="flex items-center gap-2 text-sm">
            <div className="flex-shrink-0">
              {overallProgress.percentage === 100 ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-blue-500" />
              )}
            </div>
            <p className="text-gray-700 flex-1">{nextAction.message}</p>
          </div>
          {overallProgress.percentage < 100 && (
            <button
              onClick={nextAction.action}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              続ける
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
          {overallProgress.percentage === 100 && (
            <button
              onClick={onCartClick}
              className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              見積書を作成
              <FileText className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* 展開部分 - ステップ詳細 */}
        {isExpanded && (
          <div className="px-4 py-3 space-y-2">
            {WORKFLOW_STEPS.slice(0, 3).map((step, index) => {
              const progress = stepProgress[step.id];
              const isActive = currentStep === step.id;
              const isComplete = progress.percentage === 100;

              return (
                <button
                  key={step.id}
                  onClick={() => navigate(step.path)}
                  className={`w-full flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 border border-blue-300'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {/* ステップ番号 */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      isComplete
                        ? 'bg-green-500 text-white'
                        : isActive
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {isComplete ? <Check className="w-4 h-4" /> : index + 1}
                  </div>

                  {/* ラベル */}
                  <div className="flex-1 text-left">
                    <p className={`text-sm font-medium ${isActive ? 'text-blue-700' : 'text-gray-900'}`}>
                      {step.label}
                    </p>
                    <p className="text-xs text-gray-500">
                      {progress.completed}/{progress.total} 完了
                    </p>
                  </div>

                  {/* 進捗バー */}
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        isComplete ? 'bg-green-500' : 'bg-blue-400'
                      }`}
                      style={{ width: `${progress.percentage}%` }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* 展開トグル */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-1 py-2 text-sm text-gray-500 hover:bg-gray-50 transition-colors border-t"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              閉じる
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              詳細を見る
            </>
          )}
        </button>
      </div>
    </div>
  );
};

/**
 * コンパクト版ワークフローバー（ヘッダー用）
 */
export const WorkflowProgressBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getSelectionStatus } = useSelectionStore();

  const currentStep = useMemo(() => {
    const path = location.pathname;
    if (path.includes('/catalog/exterior')) return 'exterior';
    if (path.includes('/catalog/interior')) return 'interior';
    if (path.includes('/catalog/equipment')) return 'equipment';
    return 'exterior';
  }, [location.pathname]);

  // 進捗計算
  const stepStatus = useMemo(() => {
    return WORKFLOW_STEPS.slice(0, 3).map((step) => {
      let completed = 0;
      step.categories.forEach((cat) => {
        const status = getSelectionStatus(cat);
        if (status === 'selected' || status === 'not_needed') {
          completed++;
        }
      });
      return {
        ...step,
        completed,
        total: step.categories.length,
        isComplete: completed === step.categories.length,
        isCurrent: currentStep === step.id,
      };
    });
  }, [currentStep, getSelectionStatus]);

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {stepStatus.map((step, index) => {
        const Icon = step.icon;
        return (
          <React.Fragment key={step.id}>
            {index > 0 && (
              <div className={`w-4 sm:w-8 h-0.5 ${step.isComplete || stepStatus[index - 1].isComplete ? 'bg-green-400' : 'bg-gray-300'}`} />
            )}
            <button
              onClick={() => navigate(step.path)}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                step.isCurrent
                  ? 'bg-blue-100 text-blue-700 ring-2 ring-blue-300'
                  : step.isComplete
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              title={`${step.label} (${step.completed}/${step.total})`}
            >
              {step.isComplete ? (
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              ) : (
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              )}
              <span className="hidden sm:inline">{step.shortLabel}</span>
            </button>
          </React.Fragment>
        );
      })}
    </div>
  );
};
