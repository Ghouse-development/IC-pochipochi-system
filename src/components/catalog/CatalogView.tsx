import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types/product';
import type { FilterOptions } from '../../types/filter';
import { ProductCard } from './ProductCard';
import { FilterSidebar } from './FilterSidebar';
// ProductSelectionModal removed - モーダル不使用、詳細ページへ遷移
import { categories } from '../../data/mockData';
import { useProductStore } from '../../stores/useProductStore';
import { Search, Filter, X } from 'lucide-react';

interface CatalogViewProps {
  catalogType?: 'exterior' | 'interior' | 'water';
}

export const CatalogView: React.FC<CatalogViewProps> = ({ catalogType = 'interior' }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    subcategories: [],
    priceRange: { min: 0, max: 100000 },
    showStandard: true,
    showOption: true,
    searchQuery: '',
  });
  
  // ProductStoreから商品を取得
  const exteriorProducts = useProductStore((state) => state.exteriorProducts);
  const interiorProducts = useProductStore((state) => state.interiorProducts);
  const waterProducts = useProductStore((state) => state.waterProducts);
  
  // カタログタイプに応じて商品を選択
  const products = useMemo(() => {
    switch (catalogType) {
      case 'exterior':
        return exteriorProducts;
      case 'interior':
        return interiorProducts;
      case 'water':
        return waterProducts;
      default:
        return interiorProducts;
    }
  }, [catalogType, exteriorProducts, interiorProducts, waterProducts]);
  
  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    // カテゴリフィルター
    if (filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories.includes(product.categoryId) || 
        filters.categories.includes(product.categoryName)
      );
    }
    
    // サブカテゴリフィルター
    if (filters.subcategories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.subcategories.includes(product.subcategory)
      );
    }
    
    // 標準/オプションフィルター
    filtered = filtered.filter((product) => {
      if (product.isOption && !filters.showOption) return false;
      if (!product.isOption && !filters.showStandard) return false;
      return true;
    });
    
    // 検索フィルター
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        product.manufacturer.toLowerCase().includes(query) ||
        product.modelNumber?.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [filters, searchQuery, products]);
  
  // 商品詳細ページへ遷移
  const handleProductSelect = (product: Product) => {
    navigate(`/item/${product.id}`);
  };
  
  const handleResetFilters = () => {
    setFilters({
      categories: [],
      subcategories: [],
      priceRange: { min: 0, max: 100000 },
      showStandard: true,
      showOption: true,
      searchQuery: '',
    });
    setSearchQuery('');
  };

  return (
    <div className="flex h-full relative">
      {/* デスクトップ用サイドバー */}
      <div className="hidden lg:block w-64 flex-shrink-0 p-6 border-r border-gray-200 overflow-y-auto">
        <FilterSidebar
          categories={categories}
          filters={filters}
          onFilterChange={setFilters}
          onReset={handleResetFilters}
          catalogType={catalogType}
        />
      </div>
      
      {/* メインコンテンツ */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
        {/* 検索バーとフィルターボタン */}
        <div className="mb-4 sm:mb-6">
          <div className="flex gap-2">
            {/* モバイル用フィルターボタン */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden px-3 py-2 bg-white border border-gray-300 rounded-lg flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              <span className="text-sm">フィルター</span>
            </button>
            
            {/* 検索バー */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="商品を検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
        
        {/* 検索結果数 */}
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            {filteredProducts.length}件の商品が見つかりました
          </p>
        </div>
        
        {/* 商品グリッド */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={handleProductSelect}
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 px-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="font-medium text-gray-900 mb-2">該当する商品が見つかりませんでした</h3>
            <p className="text-sm text-gray-500 mb-4">
              フィルター条件を変更するか、リセットしてみてください
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              フィルターをリセット
            </button>
          </div>
        )}
      </div>
      
      {/* モバイル用フィルタードロワー */}
      {isFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsFilterOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">フィルター</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
              <FilterSidebar
                categories={categories}
                filters={filters}
                onFilterChange={setFilters}
                onReset={handleResetFilters}
                catalogType={catalogType}
              />
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};