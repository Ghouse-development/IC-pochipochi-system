import React from 'react';
import { ChevronRight } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { SelectionCard } from './SelectionCard';
import type { ManufacturerConfig, ManufacturerSeries } from '../../config/waterEquipmentConfig';
import { hasSeriesSelection } from '../../config/waterEquipmentConfig';

interface ManufacturerSelectorProps {
  manufacturers: ManufacturerConfig[];
  selectedManufacturer: ManufacturerConfig | null;
  selectedSeries: ManufacturerSeries | null;
  onSelectManufacturer: (manufacturer: ManufacturerConfig) => void;
  onSelectSeries: (series: ManufacturerSeries | null) => void;
  onBack: () => void;
}

export const ManufacturerSelector: React.FC<ManufacturerSelectorProps> = ({
  manufacturers,
  selectedManufacturer,
  selectedSeries,
  onSelectManufacturer,
  onSelectSeries,
  onBack,
}) => {
  // シリーズ選択画面
  if (selectedManufacturer && hasSeriesSelection(selectedManufacturer) && !selectedSeries) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <button
            onClick={onBack}
            className="hover:text-blue-600 transition-colors"
          >
            メーカー選択
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-gray-900">
            {selectedManufacturer.name}
          </span>
        </div>

        <PageHeader
          title="シリーズを選択"
          subtitle="ご希望のシリーズを選択してください"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {selectedManufacturer.series.map((series) => (
            <SelectionCard
              key={series.id}
              id={series.id}
              name={series.name}
              placeholderEmoji="📦"
              placeholderBgColor="from-blue-100 to-cyan-100"
              isSelected={false}
              onClick={() => onSelectSeries(series)}
            />
          ))}
        </div>
      </div>
    );
  }

  // メーカー選択画面
  return (
    <div className="space-y-4">
      <PageHeader
        title="メーカーを選択"
        subtitle="ご希望のメーカーを選択してください"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {manufacturers.map((manufacturer) => (
          <SelectionCard
            key={manufacturer.id}
            id={manufacturer.id}
            name={manufacturer.name}
            description={hasSeriesSelection(manufacturer) ? `${manufacturer.series.length}シリーズ` : undefined}
            placeholderEmoji="🏭"
            placeholderBgColor="from-blue-100 to-cyan-100"
            isSelected={selectedManufacturer?.id === manufacturer.id}
            onClick={() => {
              onSelectManufacturer(manufacturer);
              if (!hasSeriesSelection(manufacturer)) {
                onSelectSeries(null);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 選択状態を表示するバー
interface SelectionBarProps {
  categoryName: string;
  selectedManufacturer: ManufacturerConfig | null;
  selectedSeries: ManufacturerSeries | null;
  onClear: () => void;
}

export const SelectionBar: React.FC<SelectionBarProps> = ({
  categoryName,
  selectedManufacturer,
  selectedSeries,
  onClear,
}) => {
  if (!selectedManufacturer) return null;

  return (
    <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-600">{categoryName}:</span>
        <span className="font-medium text-blue-700">
          {selectedManufacturer.name}
        </span>
        {selectedSeries && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="font-medium text-blue-700">
              {selectedSeries.name}
            </span>
          </>
        )}
      </div>
      <button
        onClick={onClear}
        className="text-sm text-gray-500 hover:text-gray-700:text-gray-200"
      >
        変更
      </button>
    </div>
  );
};

export default ManufacturerSelector;
