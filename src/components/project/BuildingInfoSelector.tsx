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

interface RoomOption {
  id: string;
  name: string;
  floor: number;
}

interface BuildingInfoSelectorProps {
  value: BuildingInfo;
  onChange: (value: BuildingInfo) => void;
  onComplete?: () => void;
  sections?: BuildingInfoSection[]; // カスタムセクションリスト（指定しない場合は全セクション）
  rooms?: RoomOption[]; // 登録済み部屋リスト（部屋選択UI用）
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
  value: string | string[] | undefined;
  onChange: (value: string | string[]) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ category, value, onChange }) => {
  // 複数選択の場合の選択状態チェック
  const isSelected = (optionId: string): boolean => {
    if (category.multiple) {
      const values = Array.isArray(value) ? value : [];
      return values.includes(optionId);
    }
    return value === optionId;
  };

  // 複数選択の場合のクリック処理
  const handleClick = (optionId: string) => {
    if (category.multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      if (currentValues.includes(optionId)) {
        // 既に選択されている場合は削除
        onChange(currentValues.filter(v => v !== optionId));
      } else {
        // 未選択の場合は追加
        onChange([...currentValues, optionId]);
      }
    } else {
      onChange(optionId);
    }
  };

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
            isSelected={isSelected(option.id)}
            onClick={() => handleClick(option.id)}
          />
        ))}
      </div>
    </div>
  );
};

// 追加入力フィールドコンポーネント（ポーチ面積、軒天面積など）
interface AdditionalInputProps {
  categoryId: string;
  values: BuildingInfo;
  onChangeExtra: (field: string, value: number | string | string[] | number[] | undefined) => void;
}

const AdditionalInputs: React.FC<AdditionalInputProps> = ({ categoryId, values, onChangeExtra }) => {
  // ポーチ拡張 - 面積入力
  if (categoryId === 'porch_extension' && values.porch_extension === 'yes') {
    return (
      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ポーチ拡張面積
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            step="0.1"
            min="0"
            value={values.porch_extension_area || ''}
            onChange={(e) => onChangeExtra('porch_extension_area', e.target.value ? parseFloat(e.target.value) : undefined)}
            placeholder="0.0"
            className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <span className="text-gray-500 text-sm">㎡</span>
          <span className="text-xs text-gray-400">（金額に反映されます）</span>
        </div>
      </div>
    );
  }

  // 軒天 - 各箇所の面積入力
  if (categoryId === 'eaves_ceiling' && values.eaves_ceiling && values.eaves_ceiling !== 'no') {
    const count = parseInt(values.eaves_ceiling, 10) || 0;
    const areas = values.eaves_ceiling_areas || [];
    return (
      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          軒天面積（各箇所）
        </label>
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: count }, (_, i) => (
            <div key={i} className="flex items-center gap-1">
              <span className="text-xs text-gray-500">{i + 1}ヶ所目:</span>
              <input
                type="number"
                step="0.1"
                min="0"
                value={areas[i] || ''}
                onChange={(e) => {
                  const newAreas = [...areas];
                  newAreas[i] = e.target.value ? parseFloat(e.target.value) : 0;
                  onChangeExtra('eaves_ceiling_areas', newAreas);
                }}
                placeholder="0.0"
                className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <span className="text-gray-500 text-xs">㎡</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 太陽光 - 階層選択UI
  if (categoryId === 'solar' && values.solar === 'yes') {
    return (
      <div className="mt-3 space-y-3">
        {/* 第1階層: ネクストエナジー / その他 */}
        <div className="p-3 bg-blue-50 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            太陽光メーカー
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                onChangeExtra('solar_brand', 'nextenergy');
                onChangeExtra('solar_other_brand', undefined);
                onChangeExtra('solar_other', undefined);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                values.solar_brand === 'nextenergy'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-300'
              }`}
            >
              ネクストエナジー
            </button>
            <button
              type="button"
              onClick={() => onChangeExtra('solar_brand', 'other')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                values.solar_brand === 'other'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-blue-300'
              }`}
            >
              その他
            </button>
          </div>
        </div>

        {/* 第2階層: その他の場合のメーカー選択 */}
        {values.solar_brand === 'other' && (
          <div className="p-3 bg-yellow-50 rounded-lg">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              その他メーカー
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {[
                { id: 'canadian', label: 'カナディアンソーラー' },
                { id: 'maxeon', label: 'マキシオン' },
                { id: 'choshu', label: '長州産業' },
                { id: 'other', label: 'その他' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    onChangeExtra('solar_other_brand', opt.id);
                    if (opt.id !== 'other') {
                      onChangeExtra('solar_other', undefined);
                    }
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    values.solar_other_brand === opt.id
                      ? 'bg-yellow-500 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-yellow-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* 第3階層: その他の場合の自由入力 */}
            {values.solar_other_brand === 'other' && (
              <div className="mt-2">
                <input
                  type="text"
                  value={values.solar_other || ''}
                  onChange={(e) => onChangeExtra('solar_other', e.target.value)}
                  placeholder="メーカー名を入力"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // 蓄電池 - その他の自由入力
  if (categoryId === 'battery' && values.battery === 'other') {
    return (
      <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          蓄電池メーカー名（その他）
        </label>
        <input
          type="text"
          value={values.battery_other || ''}
          onChange={(e) => onChangeExtra('battery_other', e.target.value)}
          placeholder="メーカー名を入力"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }

  // 庇 - タイプ選択
  if (categoryId === 'canopy' && values.canopy && values.canopy !== 'no') {
    const count = parseInt(values.canopy, 10) || 0;
    const types = values.canopy_types || [];
    return (
      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          庇タイプ（各箇所）
        </label>
        <div className="space-y-2">
          {Array.from({ length: count }, (_, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-16">{i + 1}ヶ所目:</span>
              <select
                value={types[i] || 'type_a'}
                onChange={(e) => {
                  const newTypes = [...types];
                  newTypes[i] = e.target.value;
                  onChangeExtra('canopy_types', newTypes);
                }}
                className="px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="type_a">タイプA（標準）</option>
                <option value="type_b">タイプB（大型）</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ビルトインガレージ - タイプ選択
  if (categoryId === 'garage_shutter' && values.garage_shutter && values.garage_shutter !== 'no') {
    const count = parseInt(values.garage_shutter, 10) || 0;
    const types = values.garage_types || [];
    return (
      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ガレージタイプ（各箇所）
        </label>
        <div className="space-y-2">
          {Array.from({ length: count }, (_, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-xs text-gray-500 w-16">{i + 1}ヶ所目:</span>
              <select
                value={types[i] || 'type_a'}
                onChange={(e) => {
                  const newTypes = [...types];
                  newTypes[i] = e.target.value;
                  onChangeExtra('garage_types', newTypes);
                }}
                className="px-3 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="type_a">タイプA（標準）</option>
                <option value="type_b">タイプB（大型）</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

// セクションコンポーネント
interface SectionViewProps {
  section: BuildingInfoSection;
  values: BuildingInfo;
  onChange: (categoryId: string, value: string | string[]) => void;
  onChangeExtra: (field: string, value: number | string | string[] | number[] | undefined) => void;
}

const SectionView: React.FC<SectionViewProps> = ({ section, values, onChange, onChangeExtra }) => {
  // 表示条件に基づいてカテゴリをフィルタリング
  const visibleCategories = section.categories.filter(category => {
    // 3階建て以外の場合、2F-3F間のアイアン階段を非表示
    if (category.id === 'iron_stairs_2f_3f' && values.floors !== '3f') {
      return false;
    }
    // 平屋の場合、1F-2F間のアイアン階段を非表示
    if (category.id === 'iron_stairs_1f_2f' && values.floors === '1f') {
      return false;
    }
    return true;
  });

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
        {section.title}
      </h3>
      {visibleCategories.map(category => (
        <div key={category.id}>
          <CategorySelector
            category={category}
            value={values[category.id as keyof BuildingInfo] as string | string[] | undefined}
            onChange={(value) => onChange(category.id, value)}
          />
          <AdditionalInputs
            categoryId={category.id}
            values={values}
            onChangeExtra={onChangeExtra}
          />
        </div>
      ))}
    </div>
  );
};

export const BuildingInfoSelector: React.FC<BuildingInfoSelectorProps> = ({
  value,
  onChange,
  onComplete,
  sections = BUILDING_INFO_SECTIONS,
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = React.useState(0);
  const currentSection = sections[currentSectionIndex];
  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === sections.length - 1;

  const handleCategoryChange = (categoryId: string, optionValue: string | string[]) => {
    onChange({
      ...value,
      [categoryId]: optionValue,
    });
  };

  // 追加フィールド（面積、自由入力など）の変更処理
  const handleExtraChange = (field: string, fieldValue: number | string | string[] | number[] | undefined) => {
    onChange({
      ...value,
      [field]: fieldValue,
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
          <span>{currentSectionIndex + 1} / {sections.length}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((currentSectionIndex + 1) / sections.length) * 100}%` }}
          />
        </div>
      </div>

      {/* セクションステップ表示 */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {sections.map((section, index) => (
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
        onChangeExtra={handleExtraChange}
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
              // 複数選択の場合の表示
              if (category.multiple && Array.isArray(selectedValue)) {
                const labels = selectedValue
                  .map(v => category.options.find(o => o.id === v)?.label)
                  .filter(Boolean)
                  .join('、');
                return (
                  <div key={category.id} className="flex justify-between col-span-2">
                    <span className="text-gray-600">{category.name}:</span>
                    <span className="font-medium text-gray-800">{labels || '選択なし'}</span>
                  </div>
                );
              }
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
