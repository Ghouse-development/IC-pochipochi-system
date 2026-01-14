import React, { useState, useEffect } from 'react';
import { X, ChevronRight, ChevronLeft, CheckCircle, Package, ShoppingCart, FileText, Settings, HelpCircle, Lightbulb, Target, Zap } from 'lucide-react';
import { Button } from './Button';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tips: string[];
  targetElement?: string; // CSS selector for highlighting
}

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'IC-pochipochiシステムへようこそ',
    description: '住宅の外装・内装・水廻り設備を簡単に選択できるシステムです。お客様との打ち合わせで商品を選び、見積書や仕様書を作成できます。',
    icon: <Zap className="w-8 h-8 text-blue-500" />,
    tips: [
      'このシステムで商品選択から見積作成まで一貫して行えます',
      'お客様と一緒に画面を見ながら選択できます',
      'プラン（LACIE, HOURS等）によって価格が異なります',
    ],
  },
  {
    id: 'catalog',
    title: 'カタログの使い方',
    description: '上部のタブで「外装」「内装」「水廻り」を切り替えます。左側のカテゴリメニューで絞り込み、商品をクリックして詳細を確認します。',
    icon: <Package className="w-8 h-8 text-blue-500" />,
    tips: [
      '商品カードをクリックすると詳細モーダルが開きます',
      'カラーバリエーションがある場合は選択できます',
      'メーカーでの絞り込みも可能です',
      '標準仕様は追加料金0円、オプションは追加料金がかかります',
    ],
    targetElement: '.catalog-tabs',
  },
  {
    id: 'cart',
    title: 'カートと商品選択',
    description: '右上のカートアイコンをクリックすると、選択した商品の一覧が表示されます。数量変更や削除も可能です。',
    icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
    tips: [
      '商品を追加すると右上にバッジ数が増えます',
      'カート内で数量を調整できます',
      'カテゴリによっては1つのみ選択可能なものがあります',
      'カートを閉じると確定確認のモーダルが表示されます',
    ],
    targetElement: '.cart-button',
  },
  {
    id: 'export',
    title: '見積書・仕様書の作成',
    description: 'カート画面から見積書（PDF/Excel）や仕様書を出力できます。お客様への提案資料としてご活用ください。',
    icon: <FileText className="w-8 h-8 text-purple-500" />,
    tips: [
      'Excel形式は編集可能、PDF形式は提出用に最適',
      '仕様書にはカラーや型番情報が含まれます',
      '会社情報や税率は管理画面で設定できます',
      '全形式を一括でダウンロードすることも可能です',
    ],
  },
  {
    id: 'admin',
    title: '管理機能について',
    description: '管理者権限がある場合、右上のメニューから管理ダッシュボードにアクセスできます。商品管理、統計、業者発注などの機能があります。',
    icon: <Settings className="w-8 h-8 text-orange-500" />,
    tips: [
      '商品の追加・編集・削除ができます',
      '採用統計で人気商品を確認できます',
      '業者への発注書を作成・管理できます',
      'システム設定で会社情報や税率を変更できます',
    ],
  },
  {
    id: 'tips',
    title: 'よく使うテクニック',
    description: 'お客様との打ち合わせを効率化するためのテクニックをご紹介します。',
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    tips: [
      'プランを切り替えて価格を比較できます',
      '商品の比較機能を使って複数商品を並べて検討できます',
      '共有機能でお客様にURLを送信できます',
      'お気に入り機能で頻繁に使う商品を保存できます',
    ],
  },
  {
    id: 'complete',
    title: 'ガイド完了',
    description: 'これで基本的な使い方は完了です。不明な点があればヘルプをご確認いただくか、管理者にお問い合わせください。',
    icon: <Target className="w-8 h-8 text-blue-500" />,
    tips: [
      'このガイドはいつでも再表示できます',
      '実際に操作しながら覚えていきましょう',
      '困ったときは右上のヘルプボタンをクリック',
    ],
  },
];

interface OnboardingGuideProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const OnboardingGuide: React.FC<OnboardingGuideProps> = ({
  isOpen,
  onClose,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const step = ONBOARDING_STEPS[currentStep];
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;
  const isFirstStep = currentStep === 0;

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      setCompletedSteps([]);
    }
  }, [isOpen]);

  const handleNext = () => {
    if (!completedSteps.includes(step.id)) {
      setCompletedSteps(prev => [...prev, step.id]);
    }

    if (isLastStep) {
      onComplete();
      onClose();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* オーバーレイ */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleSkip}
      />

      {/* メインカード */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl">
                {step.icon}
              </div>
              <div>
                <p className="text-blue-100 text-sm">
                  ステップ {currentStep + 1} / {ONBOARDING_STEPS.length}
                </p>
                <h2 className="text-xl font-bold">{step.title}</h2>
              </div>
            </div>
            <button
              onClick={handleSkip}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* プログレスバー */}
        <div className="h-1 bg-gray-200">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / ONBOARDING_STEPS.length) * 100}%` }}
          />
        </div>

        {/* コンテンツ */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">{step.description}</p>

          {/* ヒント */}
          <div className="space-y-3">
            {step.tips.map((tip, tipIndex) => (
              <div
                key={`${step.id}-tip-${tipIndex}`}
                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* フッター */}
        <div className="flex items-center justify-between p-4 border-t border-gray-100 bg-gray-50">
          <button
            onClick={handleSkip}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            スキップ
          </button>

          <div className="flex items-center gap-3">
            {!isFirstStep && (
              <Button variant="outline" onClick={handlePrevious}>
                <ChevronLeft className="w-4 h-4 mr-1" />
                前へ
              </Button>
            )}
            <Button variant="primary" onClick={handleNext}>
              {isLastStep ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-1" />
                  完了
                </>
              ) : (
                <>
                  次へ
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>

        {/* ステップインジケーター */}
        <div className="flex justify-center gap-2 pb-4">
          {ONBOARDING_STEPS.map((stepItem, index) => (
            <button
              key={stepItem.id}
              onClick={() => setCurrentStep(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStep
                  ? 'bg-blue-500 w-6'
                  : completedSteps.includes(ONBOARDING_STEPS[index].id)
                  ? 'bg-blue-300'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ヘルプボタンコンポーネント
export const HelpButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-20 right-4 z-40 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors group"
      title="ヘルプ・ガイドを表示"
    >
      <HelpCircle className="w-6 h-6" />
      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        使い方ガイド
      </span>
    </button>
  );
};

// 初回表示チェック用のカスタムフック
export const useOnboarding = () => {
  const STORAGE_KEY = 'lifex-onboarding-completed';

  const [showOnboarding, setShowOnboarding] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'true';
  });

  // 初回アクセス時の自動表示は無効化
  // ユーザーがヘルプボタンをクリックした時のみ表示
  useEffect(() => {
    // 自動表示は行わない
  }, [hasCompletedOnboarding]);

  const openOnboarding = () => setShowOnboarding(true);
  const closeOnboarding = () => setShowOnboarding(false);

  const completeOnboarding = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setHasCompletedOnboarding(true);
    setShowOnboarding(false);
  };

  const resetOnboarding = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHasCompletedOnboarding(false);
  };

  return {
    showOnboarding,
    hasCompletedOnboarding,
    openOnboarding,
    closeOnboarding,
    completeOnboarding,
    resetOnboarding,
  };
};
