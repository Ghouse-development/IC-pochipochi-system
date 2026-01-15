/**
 * 建築情報カード選択コンポーネント
 * プロジェクト登録時に建築情報をカードで選択
 */

import React from 'react';
import { Check, ChevronRight, ChevronLeft } from 'lucide-react';
import {
  BUILDING_INFO_SECTIONS,
  type BuildingInfo,
  type BuildingInfoSection,
  type BuildingInfoCategory,
  type BuildingInfoOption,
} from '../../config/buildingInfoConfig';

interface BuildingInfoSelectorProps {
  value: BuildingInfo;
  onChange: (value: BuildingInfo) => void;
  onComplete?: () => void;
}

// 選択カードコンポーネント
interface SelectionCardProps {
  option: BuildingInfoOption;
  isSelected: boolean;
  onClick: () => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({ option, isSelected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative p-4 rounded-xl border-2 transition-all text-left w-full
        ${isSelected
          ? 'border-blue-500 bg-blue-50 shadow-lg shadow-blue-100'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
        }
      `}
    >
      {/* 選択マーク */}
      {isSelected && (
        <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        </div>
      )}

      {/* ラベル */}
      <div className={`font-bold text-sm ${isSelected ? 'text-blue-700' : 'text-gray-800'}`}>
        {option.label}
      </div>

      {/* 説明 */}
      {option.description && (
        <div className={`text-xs mt-1 ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>
          {option.description}
        </div>
      )}
    </button>
  );
};

// カテゴリ選択コンポーネント
interface CategorySelectorProps {
  category: BuildingInfoCategory;
  value: string | undefined;
  onChange: (value: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ category, value, onChange }) => {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
        {category.name}
        {category.required && <span className="text-red-500 text-xs">*必須</span>}
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {category.options.map(option => (
          <SelectionCard
            key={option.id}
            option={option}
            isSelected={value === option.id}
            onClick={() => onChange(option.id)}
          />
        ))}
      </div>
    </div>
  );
};

// セクションコンポーネント
interface SectionViewProps {
  section: BuildingInfoSection;
  values: BuildingInfo;
  onChange: (categoryId: string, value: string) => void;
}

const SectionView: React.FC<SectionViewProps> = ({ section, values, onChange }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        {section.title}
      </h3>
      {section.categories.map(category => (
        <CategorySelector
          key={category.id}
          category={category}
          value={values[category.id as keyof BuildingInfo]}
          onChange={(value) => onChange(category.id, value)}
        />
      ))}
    </div>
  );
};

export const BuildingInfoSelector: React.FC<BuildingInfoSelectorProps> = ({
  value,
  onChange,
  onComplete,
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = React.useState(0);
  const currentSection = BUILDING_INFO_SECTIONS[currentSectionIndex];
  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === BUILDING_INFO_SECTIONS.length - 1;

  const handleCategoryChange = (categoryId: string, optionValue: string) => {
    onChange({
      ...value,
      [categoryId]: optionValue,
    });
  };

  const handleNext = () => {
    if (isLastSection) {
      onComplete?.();
    } else {
      setCurrentSectionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirstSection) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };

  // 現在のセクションで必須項目が全て入力されているか
  const isCurrentSectionComplete = currentSection.categories
    .filter(cat => cat.required)
    .every(cat => value[cat.id as keyof BuildingInfo]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* プログレスバー */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>{currentSection.title}</span>
          <span>{currentSectionIndex + 1} / {BUILDING_INFO_SECTIONS.length}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((currentSectionIndex + 1) / BUILDING_INFO_SECTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* セクションステップ表示 */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {BUILDING_INFO_SECTIONS.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setCurrentSectionIndex(index)}
            className={`
              px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all
              ${index === currentSectionIndex
                ? 'bg-blue-500 text-white font-bold'
                : index < currentSectionIndex
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-500'
              }
            `}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* 現在のセクション */}
      <SectionView
        section={currentSection}
        values={value}
        onChange={handleCategoryChange}
      />

      {/* ナビゲーション */}
      <div className="flex justify-between mt-8 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={handlePrev}
          disabled={isFirstSection}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
            ${isFirstSection
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100'
            }
          `}
        >
          <ChevronLeft className="w-5 h-5" />
          前へ
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={!isCurrentSectionComplete}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all
            ${isCurrentSectionComplete
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          {isLastSection ? '完了' : '次へ'}
          {!isLastSection && <ChevronRight className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

// 全セクション一覧表示（確認画面用）
export const BuildingInfoSummary: React.FC<{ value: BuildingInfo }> = ({ value }) => {
  return (
    <div className="space-y-4">
      {BUILDING_INFO_SECTIONS.map(section => (
        <div key={section.id} className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-bold text-gray-800 mb-2">{section.title}</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {section.categories.map(category => {
              const selectedValue = value[category.id as keyof BuildingInfo];
              const option = category.options.find(o => o.id === selectedValue);
              return (
                <div key={category.id} className="flex justify-between">
                  <span className="text-gray-600">{category.name}:</span>
                  <span className="font-medium text-gray-800">{option?.label || '-'}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BuildingInfoSelector;
