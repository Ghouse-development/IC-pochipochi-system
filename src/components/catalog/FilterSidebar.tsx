import React, { useMemo } from 'react';
import type { Category } from '../../types/product';
import type { FilterOptions } from '../../types/filter';
import { useProductStore } from '../../stores/useProductStore';
import { sortCategories, getCategoryOrderConfig } from '../../config/categoryOrder';

interface FilterSidebarProps {
  categories: Category[];
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onReset: () => void;
  catalogType?: 'exterior' | 'interior' | 'water';
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  filters,
  onFilterChange,
  onReset,
  catalogType = 'interior',
}) => {
  const { exteriorProducts, interiorProducts, waterProducts } = useProductStore();
  
  // カタログタイプに応じたカテゴリを動的に生成（ソート済み）
  const dynamicCategories = useMemo(() => {
    let products = [];
    switch (catalogType) {
      case 'exterior':
        products = exteriorProducts;
        break;
      case 'interior':
        products = interiorProducts;
        break;
      case 'water':
        products = waterProducts;
        break;
    }

    // カテゴリを集計
    const categoryMap = new Map<string, Set<string>>();
    products.forEach(product => {
      if (!categoryMap.has(product.categoryName)) {
        categoryMap.set(product.categoryName, new Set());
      }
      if (product.subcategory) {
        categoryMap.get(product.categoryName)?.add(product.subcategory);
      }
    });

    // 未ソートのカテゴリリスト
    const unsortedCategories = Array.from(categoryMap.entries()).map(([name, subcategories]) => ({
      name,
      subcategories: Array.from(subcategories)
    }));

    // カテゴリ順序設定を適用してソート
    const orderConfig = getCategoryOrderConfig(catalogType);
    return sortCategories(unsortedCategories, orderConfig);
  }, [catalogType, exteriorProducts, interiorProducts, waterProducts]);
  
  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((id) => id !== categoryId)
      : [...filters.categories, categoryId];
    
    onFilterChange({
      ...filters,
      categories: newCategories,
    });
  };
  
  const handleSubcategoryToggle = (subcategory: string) => {
    const newSubcategories = filters.subcategories.includes(subcategory)
      ? filters.subcategories.filter((s) => s !== subcategory)
      : [...filters.subcategories, subcategory];
    
    onFilterChange({
      ...filters,
      subcategories: newSubcategories,
    });
  };

  return (
    <div className="w-64 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">フィルター</h2>
        <button
          onClick={onReset}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          リセット
        </button>
      </div>
      
      <div className="space-y-6">
        {/* カテゴリフィルター */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">カテゴリ</h3>
          <div className="space-y-2">
            {dynamicCategories.length > 0 ? (
              dynamicCategories.map((category) => (
                <div key={category.name}>
                  <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.name)}
                      onChange={() => handleCategoryToggle(category.name)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 font-medium flex items-center gap-1">
                      {category.icon && <span>{category.icon}</span>}
                      {category.name}
                    </span>
                  </label>
                  {category.subcategories.length > 0 && filters.categories.includes(category.name) && (
                    <div className="ml-6 mt-1 space-y-1 border-l-2 border-gray-200 pl-2">
                      {category.subcategories.map((subcategory) => (
                        <label
                          key={subcategory}
                          className="flex items-center cursor-pointer hover:bg-gray-50 p-1 rounded"
                        >
                          <input
                            type="checkbox"
                            checked={filters.subcategories.includes(subcategory)}
                            onChange={() => handleSubcategoryToggle(subcategory)}
                            className="w-3 h-3 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-2 text-xs text-gray-600">{subcategory}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{category.name}</span>
                </label>
              ))
            )}
          </div>
        </div>
        
        
        {/* 標準/オプション */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">仕様</h3>
          <div className="space-y-2">
            <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.showStandard}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    showStandard: !filters.showStandard,
                  })
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">標準仕様</span>
            </label>
            <label className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={filters.showOption}
                onChange={() =>
                  onFilterChange({
                    ...filters,
                    showOption: !filters.showOption,
                  })
                }
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">オプション</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};