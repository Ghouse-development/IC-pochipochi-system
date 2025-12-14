import React, { useState, useMemo } from 'react';
import { useProductStore } from '../../stores/useProductStore';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { FilterSidebarNew as FilterSidebar } from './FilterSidebarNew';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { Product } from '../../types/product';
import { getProductPrice } from '../../lib/utils';

export const AllCatalogView: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);
  const [filterType, setFilterType] = useState<'all' | 'standard' | 'option'>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);

  const { exteriorProducts, interiorProducts, waterProducts } = useProductStore();

  // すべての商品を結合
  const allProducts = useMemo(() => {
    return [
      ...exteriorProducts.map(p => ({ ...p, catalogType: 'exterior' as const })),
      ...interiorProducts.map(p => ({ ...p, catalogType: 'interior' as const })),
      ...waterProducts.map(p => ({ ...p, catalogType: 'water' as const }))
    ];
  }, [exteriorProducts, interiorProducts, waterProducts]);

  // カテゴリ別にグループ化
  const groupedProducts = useMemo(() => {
    const groups: Record<string, Array<Product & { catalogType: 'exterior' | 'interior' | 'water' }>> = {};
    
    allProducts.forEach(product => {
      const categoryKey = `${product.catalogType === 'exterior' ? 'エクステリア' : 
                           product.catalogType === 'interior' ? 'インテリア' : '水廻り'} - ${product.categoryName}`;
      if (!groups[categoryKey]) {
        groups[categoryKey] = [];
      }
      groups[categoryKey].push(product);
    });

    return groups;
  }, [allProducts]);

  // フィルタリングされた商品
  const filteredGroupedProducts = useMemo(() => {
    const filtered: typeof groupedProducts = {};
    
    Object.entries(groupedProducts).forEach(([category, products]) => {
      const filteredProducts = products.filter(product => {
        // 検索フィルター
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            !product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())) {
          return false;
        }

        // タイプフィルター
        if (filterType === 'standard' && product.isOption) return false;
        if (filterType === 'option' && !product.isOption) return false;

        // 価格フィルター
        const price = getProductPrice(product.pricing);
        if (price < priceRange[0] || price > priceRange[1]) return false;

        // カテゴリフィルター
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.categoryName)) {
          return false;
        }

        // サブカテゴリフィルター
        if (selectedSubcategories.length > 0 && !selectedSubcategories.includes(product.subcategory)) {
          return false;
        }

        // メーカーフィルター
        if (selectedManufacturers.length > 0 && !selectedManufacturers.includes(product.manufacturer)) {
          return false;
        }

        return true;
      });

      if (filteredProducts.length > 0) {
        filtered[category] = filteredProducts;
      }
    });

    return filtered;
  }, [groupedProducts, searchTerm, filterType, priceRange, selectedCategories, selectedSubcategories, selectedManufacturers]);

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="flex h-full">
      {/* PC用フィルターサイドバー */}
      <div className="hidden lg:block w-64 border-r border-gray-200 bg-white overflow-y-auto">
        <FilterSidebar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategories={selectedCategories}
          onCategoriesChange={setSelectedCategories}
          selectedSubcategories={selectedSubcategories}
          onSubcategoriesChange={setSelectedSubcategories}
          selectedManufacturers={selectedManufacturers}
          onManufacturersChange={setSelectedManufacturers}
          filterType={filterType}
          onFilterTypeChange={setFilterType}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          catalogType="all"
        />
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 sm:p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">LIFE X カタログ</h1>
            <p className="text-sm text-gray-600 mt-2">すべての商品をカテゴリ別に表示</p>
          </div>

          {/* モバイル用検索とフィルター */}
          <div className="lg:hidden mb-4 space-y-3">
            <input
              type="text"
              placeholder="商品を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setIsFilterOpen(true)}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              フィルター設定
            </button>
          </div>

          {/* カテゴリ別商品表示 */}
          <div className="space-y-6">
            {Object.entries(filteredGroupedProducts).map(([category, products]) => (
              <div key={category} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{category}</span>
                    <span className="text-sm text-gray-500">({products.length}件)</span>
                  </div>
                  {expandedCategories.has(category) ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {expandedCategories.has(category) && (
                  <div className="p-4 bg-white">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
                      {products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onSelect={handleProductSelect}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {Object.keys(filteredGroupedProducts).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">該当する商品が見つかりませんでした</p>
            </div>
          )}
        </div>
      </div>

      {/* モバイル用フィルターモーダル */}
      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsFilterOpen(false)}>
          <div className="bg-white w-80 h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b">
              <h2 className="font-bold text-lg">フィルター</h2>
            </div>
            <FilterSidebar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategories={selectedCategories}
              onCategoriesChange={setSelectedCategories}
              selectedSubcategories={selectedSubcategories}
              onSubcategoriesChange={setSelectedSubcategories}
              selectedManufacturers={selectedManufacturers}
              onManufacturersChange={setSelectedManufacturers}
              filterType={filterType}
              onFilterTypeChange={setFilterType}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              catalogType="all"
            />
          </div>
        </div>
      )}

      {/* 商品詳細モーダル */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};