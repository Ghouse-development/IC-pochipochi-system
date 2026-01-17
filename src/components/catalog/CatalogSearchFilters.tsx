/**
 * カタログ検索・フィルターコンポーネント
 * - 検索入力
 * - フィルタータブ（全て/標準/オプション）
 * - 追加フィルター（素材、色、価格など）
 */
import React from 'react';
import { Search, Heart, X } from 'lucide-react';
import type { FilterTypeValue } from './catalogUtils';

interface CatalogSearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: FilterTypeValue;
  setFilterType: (type: FilterTypeValue) => void;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (show: boolean) => void;
  favoritesCount: number;
  // 素材・色フィルター
  selectedMaterialType?: string;
  setSelectedMaterialType?: (material: string) => void;
  selectedColor?: string;
  setSelectedColor?: (color: string) => void;
  priceMax?: number;
  setPriceMax?: (price: number) => void;
  // 利用可能なフィルターオプション
  availableMaterialTypes?: string[];
  availableColors?: string[];
  // 件数表示
  filteredItemsCount: number;
  totalItemsCount: number;
}

export const CatalogSearchFilters: React.FC<CatalogSearchFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  showFavoritesOnly,
  setShowFavoritesOnly,
  favoritesCount,
  selectedMaterialType,
  setSelectedMaterialType,
  selectedColor,
  setSelectedColor,
  priceMax,
  setPriceMax,
  availableMaterialTypes = [],
  availableColors = [],
  filteredItemsCount,
  totalItemsCount,
}) => {
  const hasActiveFilters = searchTerm || filterType !== 'all' || showFavoritesOnly ||
    selectedMaterialType || selectedColor || (priceMax && priceMax > 0);

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilterType('all');
    setShowFavoritesOnly(false);
    setSelectedMaterialType?.('');
    setSelectedColor?.('');
    setPriceMax?.(0);
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 space-y-3">
      {/* 検索バー */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* お気に入りトグル */}
        <button
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-all ${
            showFavoritesOnly
              ? 'bg-pink-50 border-pink-300 text-pink-600'
              : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
          <span className="text-sm hidden sm:inline">お気に入り</span>
          {favoritesCount > 0 && (
            <span className="text-xs bg-pink-100 text-pink-600 px-1.5 rounded-full">
              {favoritesCount}
            </span>
          )}
        </button>
      </div>

      {/* フィルタータブ */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex bg-gray-100 rounded-lg p-0.5">
          {[
            { value: 'all', label: '全て' },
            { value: 'standard', label: '標準' },
            { value: 'option', label: 'オプション' },
          ].map(({ value, label }) => (
            <button
              key={value}
              onClick={() => setFilterType(value as FilterTypeValue)}
              className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                filterType === value
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 素材タイプフィルター */}
        {availableMaterialTypes.length > 0 && setSelectedMaterialType && (
          <select
            value={selectedMaterialType || ''}
            onChange={(e) => setSelectedMaterialType(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">素材を選択</option>
            {availableMaterialTypes.map(material => (
              <option key={material} value={material}>{material}</option>
            ))}
          </select>
        )}

        {/* 色フィルター */}
        {availableColors.length > 0 && setSelectedColor && (
          <select
            value={selectedColor || ''}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="text-sm border border-gray-300 rounded-lg px-2 py-1.5 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">色を選択</option>
            {availableColors.map(color => (
              <option key={color} value={color}>{color}</option>
            ))}
          </select>
        )}

        {/* フィルタークリア */}
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <X className="w-3 h-3" />
            クリア
          </button>
        )}

        {/* 件数表示 */}
        <span className="text-sm text-gray-500 ml-auto">
          {filteredItemsCount} / {totalItemsCount} 件
        </span>
      </div>
    </div>
  );
};
