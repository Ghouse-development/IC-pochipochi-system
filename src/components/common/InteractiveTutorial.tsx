import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronRight, ChevronLeft, Play, SkipForward, CheckCircle, MousePointer, Sparkles } from 'lucide-react';
import { Button } from './Button';
import { STORAGE_KEYS } from '../../lib/constants';

export interface TutorialStep {
  id: string;
  title: string;
  content: string;
  target?: string; // CSS selector
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'center';
  action?: 'click' | 'hover' | 'scroll' | 'none';
  actionText?: string;
  highlightPadding?: number;
  disableOverlay?: boolean;
  onEnter?: () => void;
  onExit?: () => void;
}

interface InteractiveTutorialProps {
  steps: TutorialStep[];
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
  showProgress?: boolean;
  allowSkip?: boolean;
}

// スポットライトオーバーレイ
const SpotlightOverlay: React.FC<{
  targetRect: DOMRect | null;
  padding: number;
  onClick?: () => void;
}> = ({ targetRect, padding, onClick }) => {
  if (!targetRect) {
    return (
      <div
        className="fixed inset-0 bg-black/60 z-[9998] transition-opacity duration-300"
        onClick={onClick}
      />
    );
  }

  const spotlightStyle = {
    top: targetRect.top - padding,
    left: targetRect.left - padding,
    width: targetRect.width + padding * 2,
    height: targetRect.height + padding * 2,
  };

  return (
    <>
      {/* 4つの暗い領域でスポットライト効果を作成 */}
      <div className="fixed inset-0 z-[9998] pointer-events-none">
        {/* 上部 */}
        <div
          className="absolute bg-black/60 left-0 right-0 top-0 transition-all duration-300"
          style={{ height: spotlightStyle.top }}
        />
        {/* 下部 */}
        <div
          className="absolute bg-black/60 left-0 right-0 bottom-0 transition-all duration-300"
          style={{ top: spotlightStyle.top + spotlightStyle.height }}
        />
        {/* 左部 */}
        <div
          className="absolute bg-black/60 left-0 transition-all duration-300"
          style={{
            top: spotlightStyle.top,
            width: spotlightStyle.left,
            height: spotlightStyle.height
          }}
        />
        {/* 右部 */}
        <div
          className="absolute bg-black/60 right-0 transition-all duration-300"
          style={{
            top: spotlightStyle.top,
            left: spotlightStyle.left + spotlightStyle.width,
            height: spotlightStyle.height
          }}
        />
      </div>

      {/* クリック可能な透明オーバーレイ */}
      <div
        className="fixed inset-0 z-[9997]"
        onClick={onClick}
      />

      {/* スポットライト枠（パルスアニメーション） */}
      <div
        className="fixed z-[9999] pointer-events-none transition-all duration-300"
        style={spotlightStyle}
      >
        <div className="absolute inset-0 border-2 border-teal-400 rounded-lg animate-pulse" />
        <div className="absolute inset-0 border-2 border-teal-400/50 rounded-lg animate-ping" />
      </div>
    </>
  );
};

// ツールチップ
const TutorialTooltip: React.FC<{
  step: TutorialStep;
  currentIndex: number;
  totalSteps: number;
  targetRect: DOMRect | null;
  onNext: () => void;
  onPrev: () => void;
  onSkip: () => void;
  onClose: () => void;
  showProgress: boolean;
  allowSkip: boolean;
}> = ({
  step,
  currentIndex,
  totalSteps,
  targetRect,
  onNext,
  onPrev,
  onSkip,
  onClose,
  showProgress,
  allowSkip,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === totalSteps - 1;

  useEffect(() => {
    if (!tooltipRef.current) return;

    const tooltip = tooltipRef.current;
    const tooltipRect = tooltip.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const padding = 16;

    let top = 0;
    let left = 0;

    if (!targetRect || step.placement === 'center') {
      // 中央配置
      top = (windowHeight - tooltipRect.height) / 2;
      left = (windowWidth - tooltipRect.width) / 2;
    } else {
      const placement = step.placement || 'bottom';

      switch (placement) {
        case 'top':
          top = targetRect.top - tooltipRect.height - padding;
          left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
          break;
        case 'bottom':
          top = targetRect.bottom + padding;
          left = targetRect.left + (targetRect.width - tooltipRect.width) / 2;
          break;
        case 'left':
          top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
          left = targetRect.left - tooltipRect.width - padding;
          break;
        case 'right':
          top = targetRect.top + (targetRect.height - tooltipRect.height) / 2;
          left = targetRect.right + padding;
          break;
      }

      // 画面外にはみ出さないように調整
      if (left < padding) left = padding;
      if (left + tooltipRect.width > windowWidth - padding) {
        left = windowWidth - tooltipRect.width - padding;
      }
      if (top < padding) top = padding;
      if (top + tooltipRect.height > windowHeight - padding) {
        top = windowHeight - tooltipRect.height - padding;
      }
    }

    setPosition({ top, left });
  }, [targetRect, step.placement]);

  return (
    <div
      ref={tooltipRef}
      className="fixed z-[10000] w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 animate-bounce-in"
      style={{ top: position.top, left: position.left }}
    >
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">
              {showProgress && `ステップ ${currentIndex + 1} / ${totalSteps}`}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="閉じる"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <h3 className="text-lg font-bold mt-2">{step.title}</h3>
      </div>

      {/* コンテンツ */}
      <div className="p-4">
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {step.content}
        </p>

        {step.action && step.action !== 'none' && (
          <div className="mt-3 flex items-center gap-2 text-teal-600 dark:text-teal-400 text-sm">
            <MousePointer className="w-4 h-4 animate-bounce" />
            <span>{step.actionText || 'ハイライトされた要素を操作してみましょう'}</span>
          </div>
        )}
      </div>

      {/* プログレスバー */}
      {showProgress && (
        <div className="px-4 pb-2">
          <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-teal-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* フッター */}
      <div className="px-4 pb-4 flex items-center justify-between">
        <div>
          {allowSkip && !isLastStep && (
            <button
              onClick={onSkip}
              className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center gap-1"
            >
              <SkipForward className="w-4 h-4" />
              スキップ
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          {!isFirstStep && (
            <Button
              variant="outline"
              size="sm"
              onClick={onPrev}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              戻る
            </Button>
          )}
          <Button
            variant="primary"
            size="sm"
            onClick={onNext}
            className="flex items-center gap-1"
          >
            {isLastStep ? (
              <>
                <CheckCircle className="w-4 h-4" />
                完了
              </>
            ) : (
              <>
                次へ
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* アニメーション用CSS */}
      <style>{`
        @keyframes bounce-in {
          0% { transform: scale(0.9); opacity: 0; }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export const InteractiveTutorial: React.FC<InteractiveTutorialProps> = ({
  steps,
  isOpen,
  onClose,
  onComplete,
  showProgress = true,
  allowSkip = true,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const currentStep = steps[currentStepIndex];

  // ターゲット要素の位置を更新
  const updateTargetRect = useCallback(() => {
    if (!currentStep?.target) {
      setTargetRect(null);
      return;
    }

    const element = document.querySelector(currentStep.target);
    if (element) {
      const rect = element.getBoundingClientRect();
      setTargetRect(rect);

      // 要素が画面外の場合はスクロール
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setTargetRect(null);
    }
  }, [currentStep]);

  useEffect(() => {
    if (!isOpen) return;

    updateTargetRect();

    // リサイズ・スクロール時に位置を更新
    const handleUpdate = () => updateTargetRect();
    window.addEventListener('resize', handleUpdate);
    window.addEventListener('scroll', handleUpdate, true);

    return () => {
      window.removeEventListener('resize', handleUpdate);
      window.removeEventListener('scroll', handleUpdate, true);
    };
  }, [isOpen, updateTargetRect]);

  useEffect(() => {
    if (!isOpen) return;

    // ステップ変更時のコールバック
    currentStep?.onEnter?.();

    return () => {
      currentStep?.onExit?.();
    };
  }, [currentStepIndex, isOpen, currentStep]);

  // ESCキーで閉じる
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStepIndex]);

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    // チュートリアル完了をローカルストレージに保存
    localStorage.setItem(STORAGE_KEYS.TUTORIAL_COMPLETED, 'true');
    localStorage.setItem(STORAGE_KEYS.TUTORIAL_COMPLETED_AT, new Date().toISOString());
    setCurrentStepIndex(0);
    onComplete?.();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* スポットライトオーバーレイ */}
      {!currentStep?.disableOverlay && (
        <SpotlightOverlay
          targetRect={targetRect}
          padding={currentStep?.highlightPadding ?? 8}
        />
      )}

      {/* ツールチップ */}
      <TutorialTooltip
        step={currentStep}
        currentIndex={currentStepIndex}
        totalSteps={steps.length}
        targetRect={targetRect}
        onNext={handleNext}
        onPrev={handlePrev}
        onSkip={handleSkip}
        onClose={onClose}
        showProgress={showProgress}
        allowSkip={allowSkip}
      />
    </>
  );
};

// デフォルトのチュートリアルステップ
export const DEFAULT_TUTORIAL_STEPS: TutorialStep[] = [
  {
    id: 'welcome',
    title: 'ぽちぽちシステムへようこそ！',
    content: 'このチュートリアルでは、システムの基本的な使い方を説明します。矢印キーまたはボタンで進めてください。',
    placement: 'center',
  },
  {
    id: 'tabs',
    title: 'タブで切り替え',
    content: '「外装」「内装」「水廻り」のタブをクリックして、カテゴリを切り替えます。お客様の要望に合わせて選んでいきましょう。',
    target: '[data-tutorial="main-tabs"]',
    placement: 'bottom',
    highlightPadding: 12,
  },
  {
    id: 'categories',
    title: 'カテゴリ選択',
    content: '左側のカテゴリ一覧から、詳細なカテゴリを選択できます。緑のチェックマークは選択済みのカテゴリです。',
    target: '[data-tutorial="category-list"]',
    placement: 'right',
    highlightPadding: 8,
  },
  {
    id: 'products',
    title: '商品を選ぶ',
    content: '商品カードをクリックすると詳細が表示されます。「選択」ボタンでカートに追加できます。色のバリエーションがある商品は、お好みの色を選べます。',
    target: '[data-tutorial="product-grid"]',
    placement: 'top',
    highlightPadding: 16,
  },
  {
    id: 'cart',
    title: 'カートを確認',
    content: '右上のカートアイコンをクリックすると、選択した商品の一覧と合計金額を確認できます。',
    target: '[data-tutorial="cart-button"]',
    placement: 'bottom',
    highlightPadding: 8,
  },
  {
    id: 'plan',
    title: 'プラン切り替え',
    content: 'プランを切り替えると、価格が自動的に変わります。お客様のプランに合わせて選択してください。',
    target: '[data-tutorial="plan-selector"]',
    placement: 'bottom',
    highlightPadding: 8,
  },
  {
    id: 'export',
    title: '見積書・仕様書の出力',
    content: 'カート画面から「見積書作成」「Excel出力」「PDF出力」などが可能です。お客様への提案資料を簡単に作成できます。',
    placement: 'center',
  },
  {
    id: 'complete',
    title: 'チュートリアル完了！',
    content: 'これで基本的な操作は完了です。実際に商品を選んでみましょう！困ったときはいつでもヘルプボタンから確認できます。',
    placement: 'center',
  },
];

// チュートリアル開始ボタン
export const TutorialStartButton: React.FC<{
  onClick: () => void;
  className?: string;
}> = ({ onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all shadow-md hover:shadow-lg ${className}`}
    title="使い方ガイドを開始"
  >
    <Play className="w-4 h-4" />
    <span className="text-sm font-medium">使い方ガイド</span>
  </button>
);
