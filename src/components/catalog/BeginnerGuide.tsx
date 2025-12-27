import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, Lightbulb, Home, Sofa, Wrench, Ruler, CheckCircle } from 'lucide-react';

interface GuideStep {
  id: number;
  title: string;
  description: string;
  tip: string;
  icon: React.ReactNode;
}

const GUIDE_STEPS: GuideStep[] = [
  {
    id: 1,
    title: 'ようこそ！家づくりを始めましょう',
    description: 'このシステムでは、お家に使う材料や設備を選んでいきます。難しく考えなくて大丈夫！一緒に進めていきましょう。',
    tip: '分からない言葉があれば「？」マークを押すと説明が見られます',
    icon: <Home className="w-8 h-8" />,
  },
  {
    id: 2,
    title: '4つのステップで選びます',
    description: '「設計」→「外装」→「内装」→「設備」の順番で選んでいきます。上のタブをクリックして切り替えられます。',
    tip: '順番通りでなくても、好きなところから選べます',
    icon: <Ruler className="w-8 h-8" />,
  },
  {
    id: 3,
    title: '必須と任意があります',
    description: '赤い「！」マークは必ず選ぶ項目です。グレーの項目は選ばなくても大丈夫です（後から追加もできます）。',
    tip: '必須項目を全部選ぶと、家が建てられる状態になります',
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    id: 4,
    title: '迷ったら「おすすめ」を選ぼう',
    description: '「迷ったらコレ」「人気No.1」のバッジがついた商品は、多くのお客様に選ばれています。',
    tip: '標準品（緑）は追加料金なし。オプション（オレンジ）は追加料金がかかります',
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    id: 5,
    title: '準備完了！始めましょう',
    description: '左のチェックリストを見ながら、一つずつ選んでいきましょう。選んだものはチェックマークがつきます。',
    tip: '途中で保存されるので、いつでも中断・再開できます',
    icon: <Sofa className="w-8 h-8" />,
  },
];

const STORAGE_KEY = 'pochipochi_guide_completed';

interface BeginnerGuideProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const BeginnerGuide: React.FC<BeginnerGuideProps> = ({ onComplete, forceShow = false }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (forceShow) {
      setIsVisible(true);
      return;
    }
    // 初回訪問かチェック
    const completed = localStorage.getItem(STORAGE_KEY);
    if (!completed) {
      setIsVisible(true);
    }
  }, [forceShow]);

  const handleNext = () => {
    if (currentStep < GUIDE_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleComplete = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsVisible(false);
    onComplete();
  };

  const handleSkip = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsVisible(false);
    onComplete();
  };

  if (!isVisible) return null;

  const step = GUIDE_STEPS[currentStep];
  const progress = ((currentStep + 1) / GUIDE_STEPS.length) * 100;

  return (
    <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👋</span>
              <span className="font-bold">はじめての方へ</span>
            </div>
            <button
              onClick={handleSkip}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              title="スキップ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* プログレスバー */}
          <div className="mt-3 h-1.5 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-1 text-xs text-white/80 text-right">
            {currentStep + 1} / {GUIDE_STEPS.length}
          </div>
        </div>

        {/* コンテンツ */}
        <div className="p-6">
          {/* アイコン */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400">
              {step.icon}
            </div>
          </div>

          {/* タイトル */}
          <h2 className="text-xl font-bold text-center text-gray-800 dark:text-gray-200 mb-3">
            {step.title}
          </h2>

          {/* 説明 */}
          <p className="text-gray-600 dark:text-gray-400 text-center mb-4 leading-relaxed">
            {step.description}
          </p>

          {/* ヒント */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-3 flex items-start gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-700 dark:text-yellow-400">
              {step.tip}
            </p>
          </div>
        </div>

        {/* フッター */}
        <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            戻る
          </button>

          <button
            onClick={handleSkip}
            className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            スキップ
          </button>

          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-medium transition-colors"
          >
            {currentStep === GUIDE_STEPS.length - 1 ? '始める' : '次へ'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ガイドを再表示するためのヘルパー
export const resetBeginnerGuide = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const hasCompletedGuide = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) === 'true';
};
