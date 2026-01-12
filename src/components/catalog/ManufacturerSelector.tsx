import React from 'react';
import { ChevronRight } from 'lucide-react';
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
            className="hover:text-teal-600:text-teal-400 transition-colors"
          >
            メーカー選択
          </button>
          <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-gray-900">
            {selectedManufacturer.name}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">
          シリーズを選択してください
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {selectedManufacturer.series.map((series) => (
            <button
              key={series.id}
              onClick={() => onSelectSeries(series)}
              className="p-6 bg-white border-2 border-gray-200 rounded-xl hover:border-teal-500:border-teal-400 hover:shadow-lg transition-all duration-200 text-center group"
            >
              <div className="text-lg font-semibold text-gray-900 group-hover:text-teal-600:text-teal-400">
                {series.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // メーカー選択画面
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        メーカーを選択してください
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {manufacturers.map((manufacturer) => (
          <button
            key={manufacturer.id}
            onClick={() => {
              onSelectManufacturer(manufacturer);
              // シリーズが1つ以下の場合は自動的にnullを設定
              if (!hasSeriesSelection(manufacturer)) {
                onSelectSeries(null);
              }
            }}
            className={`p-6 bg-white border-2 rounded-xl hover:shadow-lg transition-all duration-200 text-center group ${
              selectedManufacturer?.id === manufacturer.id
                ? 'border-teal-500 ring-2 ring-teal-500/20'
                : 'border-gray-200 hover:border-teal-500:border-teal-400'
            }`}
          >
            <div className={`text-lg font-semibold ${
              selectedManufacturer?.id === manufacturer.id
                ? 'text-teal-600'
                : 'text-gray-900 group-hover:text-teal-600:text-teal-400'
            }`}>
              {manufacturer.name}
            </div>
            {hasSeriesSelection(manufacturer) && (
              <div className="mt-2 text-xs text-gray-500">
                {manufacturer.series.length}シリーズ
              </div>
            )}
          </button>
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
    <div className="flex items-center justify-between bg-teal-50 border border-teal-200 rounded-lg px-4 py-2">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-600">{categoryName}:</span>
        <span className="font-medium text-teal-700">
          {selectedManufacturer.name}
        </span>
        {selectedSeries && (
          <>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="font-medium text-teal-700">
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
