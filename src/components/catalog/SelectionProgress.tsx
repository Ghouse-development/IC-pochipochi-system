import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';

interface Step {
  id: string;
  label: string;
  icon: string;
  categories: string[];
}

const STEPS: Step[] = [
  { id: 'exterior', label: '外装', icon: '🏠', categories: ['外壁', 'ポーチ', '屋根', '樋', '軒天', '破風', '雨樋'] },
  { id: 'interior', label: '内装', icon: '🛋️', categories: ['床材', '壁クロス', '天井クロス', '巾木', '建具', '収納'] },
  { id: 'equipment', label: '設備', icon: '🚿', categories: ['キッチン', 'バス', '洗面台', 'トイレ', '給湯器', 'エアコン', '照明'] },
  { id: 'confirm', label: '確定', icon: '✅', categories: [] },
];

interface SelectionProgressProps {
  currentStep: string;
  onStepClick: (stepId: string) => void;
}

export const SelectionProgress: React.FC<SelectionProgressProps> = ({
  currentStep,
  onStepClick,
}) => {
  const { items } = useCartStore();

  const getStepStatus = (step: Step) => {
    if (step.id === 'confirm') {
      return items.length > 0 ? 'available' : 'locked';
    }

    const selectedInStep = items.filter(item =>
      step.categories.some(cat =>
        item.product.categoryName?.includes(cat) ||
        cat.includes(item.product.categoryName || '')
      )
    );

    if (selectedInStep.length > 0) {
      return 'completed';
    }
    return 'available';
  };

  const currentStepIndex = STEPS.findIndex(s => s.id === currentStep);

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        {STEPS.map((step, index) => {
          const status = getStepStatus(step);
          const isActive = step.id === currentStep;
          const isPast = index < currentStepIndex;

          return (
            <React.Fragment key={step.id}>
              <button
                onClick={() => status !== 'locked' && onStepClick(step.id)}
                disabled={status === 'locked'}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : status === 'completed'
                    ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    : status === 'locked'
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{step.icon}</span>
                <span className="hidden sm:inline font-medium text-sm">{step.label}</span>
                {status === 'completed' && !isActive && (
                  <Check className="w-4 h-4 text-blue-600" />
                )}
              </button>

              {index < STEPS.length - 1 && (
                <ChevronRight className={`w-5 h-5 flex-shrink-0 ${
                  isPast ? 'text-blue-400' : 'text-gray-300'
                }`} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* 進捗バー */}
      <div className="mt-3 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>選択済み: {items.length}件</span>
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"
              style={{ width: `${Math.min(100, (items.length / 15) * 100)}%` }}
            />
          </div>
          <span className="text-blue-600 font-medium">
            {items.length >= 15 ? '選択完了!' : `あと${15 - items.length}件`}
          </span>
        </div>
      </div>
    </div>
  );
};
