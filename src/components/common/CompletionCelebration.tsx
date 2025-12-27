/**
 * 完了時の祝福・次ステップ案内
 * - カテゴリ完了を祝う
 * - 自然に次のアクションへ誘導
 */
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PartyPopper,
  ChevronRight,
  X,
  Sparkles,
  CheckCircle2,
  Paintbrush,
  Bath,
  FileText,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useSelectionStore } from '../../stores/useSelectionStore';

interface CategoryConfig {
  id: string;
  name: string;
  categories: string[];
  nextStep: {
    id: string;
    name: string;
    path: string;
    icon: React.ElementType;
  } | null;
  color: string;
}

const CATEGORY_CONFIGS: CategoryConfig[] = [
  {
    id: 'exterior',
    name: '外装',
    categories: ['外壁', '屋根', '玄関ドア', 'サッシ', '軒天', '破風・鼻隠し', '雨樋'],
    nextStep: {
      id: 'interior',
      name: '内装',
      path: '/catalog/interior',
      icon: Paintbrush,
    },
    color: 'blue',
  },
  {
    id: 'interior',
    name: '内装',
    categories: ['床材', '壁クロス', '天井クロス', '建具', '階段', '玄関タイル'],
    nextStep: {
      id: 'equipment',
      name: '設備',
      path: '/catalog/equipment',
      icon: Bath,
    },
    color: 'green',
  },
  {
    id: 'equipment',
    name: '設備',
    categories: ['キッチン', 'バス', '洗面台', 'トイレ', '給湯器'],
    nextStep: null, // 全完了
    color: 'orange',
  },
];

interface CompletionCelebrationProps {
  currentCategoryId: string;
  onCartClick?: () => void;
}

export const CompletionCelebration: React.FC<CompletionCelebrationProps> = ({
  currentCategoryId,
  onCartClick,
}) => {
  const navigate = useNavigate();
  const { getSelectionStatus } = useSelectionStore();
  const [showBanner, setShowBanner] = useState(false);
  const [celebratedCategories, setCelebratedCategories] = useState<Set<string>>(new Set());

  // 現在のカテゴリ設定
  const currentConfig = CATEGORY_CONFIGS.find((c) => c.id === currentCategoryId);

  // カテゴリの完了状態をチェック
  const checkCompletion = useCallback(() => {
    if (!currentConfig) return false;

    return currentConfig.categories.every((cat) => {
      const status = getSelectionStatus(cat);
      return status === 'selected' || status === 'not_needed';
    });
  }, [currentConfig, getSelectionStatus]);

  // 全カテゴリの完了状態
  const isAllComplete = useCallback(() => {
    return CATEGORY_CONFIGS.every((config) =>
      config.categories.every((cat) => {
        const status = getSelectionStatus(cat);
        return status === 'selected' || status === 'not_needed';
      })
    );
  }, [getSelectionStatus]);

  // 完了時のエフェクト
  useEffect(() => {
    const isComplete = checkCompletion();
    const alreadyCelebrated = celebratedCategories.has(currentCategoryId);

    if (isComplete && !alreadyCelebrated) {
      // 祝福を表示
      setShowBanner(true);
      setCelebratedCategories((prev) => new Set([...prev, currentCategoryId]));

      // 紙吹雪エフェクト
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B'],
        });
      } catch {
        // confettiが利用できない場合は無視
      }

      // 5秒後に自動で閉じる
      const timer = setTimeout(() => {
        setShowBanner(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [checkCompletion, currentCategoryId, celebratedCategories]);

  // バナーを閉じる
  const handleDismiss = () => {
    setShowBanner(false);
  };

  // 次へ進む
  const handleNext = () => {
    setShowBanner(false);
    if (isAllComplete()) {
      onCartClick?.();
    } else if (currentConfig?.nextStep) {
      navigate(currentConfig.nextStep.path);
    }
  };

  if (!showBanner || !currentConfig) return null;

  const allComplete = isAllComplete();
  const NextIcon = currentConfig.nextStep?.icon || FileText;

  return (
    <div className="fixed inset-x-0 top-16 z-50 flex justify-center px-4 animate-slide-down">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl border-2 border-green-200 overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-2">
                <PartyPopper className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  {allComplete ? 'すべて完了！' : `${currentConfig.name}の選択が完了しました！`}
                </h3>
                <p className="text-green-100 text-sm">
                  {allComplete
                    ? 'すべてのカテゴリの選択が終わりました'
                    : 'お疲れ様でした。次へ進みましょう'}
                </p>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-6">
          {allComplete ? (
            <>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <span className="text-lg font-bold text-gray-900">
                  見積書を作成できます
                </span>
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <p className="text-center text-gray-600 mb-4">
                カートの内容を確認して、見積書を出力しましょう。
              </p>
              <button
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg"
              >
                <FileText className="w-5 h-5" />
                カートを確認する
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-600">
                    {currentConfig.name}の選択が終わりました。
                    <br />
                    次は<span className="font-bold text-gray-900">{currentConfig.nextStep?.name}</span>を選びましょう。
                  </p>
                </div>
              </div>
              <button
                onClick={handleNext}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-${currentConfig.nextStep?.id === 'interior' ? 'green' : 'orange'}-500 to-${currentConfig.nextStep?.id === 'interior' ? 'emerald' : 'amber'}-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg`}
              >
                <NextIcon className="w-5 h-5" />
                {currentConfig.nextStep?.name}を選ぶ
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* あとで */}
          <button
            onClick={handleDismiss}
            className="w-full mt-3 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            あとで確認する
          </button>
        </div>
      </div>
    </div>
  );
};

// アニメーション用CSS
const styles = `
@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}
`;

// スタイルを注入
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
