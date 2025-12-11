import React, { useState, useEffect, useMemo } from 'react';
import { Search, Loader2, ShoppingCart, Check } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';
import type { ItemWithDetails, Category, Product } from '../../types/database';

// DBアイテムをカート用に変換
const convertToCartItem = (item: ItemWithDetails, selectedPlanId: string) => {
  const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
  const variant = item.variants?.[0];
  const image = variant?.images?.[0];

  return {
    id: item.id,
    name: item.name,
    manufacturer: item.manufacturer || '',
    modelNumber: item.model_number || '',
    categoryName: item.category?.name || item.category_name || '',
    unit: item.unit?.symbol || '式',
    isOption: pricing ? !pricing.is_standard : false,
    pricing: item.pricing?.map(p => ({
      planId: p.product?.code || '',
      price: p.price,
      isStandard: p.is_standard,
    })) || [],
    variants: item.variants?.map(v => ({
      id: v.id,
      color: v.color_name,
      colorCode: v.color_code || undefined,
      imageUrl: v.images?.[0]?.image_url,
      thumbnailUrl: v.images?.[0]?.thumbnail_url || undefined,
    })) || [],
    selectedVariant: variant ? {
      id: variant.id,
      color: variant.color_name,
      colorCode: variant.color_code || undefined,
      imageUrl: image?.image_url,
      thumbnailUrl: image?.thumbnail_url || undefined,
    } : undefined,
    imageUrl: image?.image_url,
  };
};

export const CatalogWithTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'exterior' | 'interior' | 'equipment'>('exterior');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'standard' | 'option'>('all');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('LACIE');

  // データ
  const [items, setItems] = useState<ItemWithDetails[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [plans, setPlans] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // カート
  const { items: cartItems, addItem } = useCartStore();
  const cartItemIds = useMemo(() => new Set(cartItems.map(i => i.product.id)), [cartItems]);

  // プラン取得
  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('display_order');

      if (!error && data) {
        setPlans(data);
      }
    };
    fetchPlans();
  }, []);

  // カテゴリ取得
  useEffect(() => {
    const fetchCategories = async () => {
      const categoryType = activeTab === 'equipment' ? 'equipment' : activeTab;
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .eq('category_type', categoryType)
        .eq('is_active', true)
        .order('display_order');

      if (!error && data) {
        setCategories(data);
        setSelectedCategoryId(null);
      }
    };
    fetchCategories();
  }, [activeTab]);

  // アイテム取得
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const categoryType = activeTab === 'equipment' ? 'equipment' : activeTab;

        let query = supabase
          .from('items')
          .select(`
            *,
            category:categories(*),
            unit:units(*),
            variants:item_variants(
              *,
              images:item_variant_images(*)
            ),
            pricing:item_pricing(
              *,
              product:products(*)
            )
          `)
          .eq('is_active', true);

        // カテゴリタイプでフィルター
        if (selectedCategoryId) {
          query = query.eq('category_id', selectedCategoryId);
        } else {
          // カテゴリタイプで絞り込み（サブクエリ）
          const { data: categoryIds } = await supabase
            .from('categories')
            .select('id')
            .eq('category_type', categoryType)
            .eq('is_active', true);

          if (categoryIds && categoryIds.length > 0) {
            query = query.in('category_id', categoryIds.map(c => c.id));
          }
        }

        const { data, error: fetchError } = await query.order('display_order');

        if (fetchError) throw fetchError;
        setItems((data as ItemWithDetails[]) || []);
      } catch (err) {
        console.error('Failed to fetch items:', err);
        setError('データの読み込みに失敗しました');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, [activeTab, selectedCategoryId]);

  // フィルタリング
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      // 検索フィルター
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        if (!item.name.toLowerCase().includes(term) &&
            !item.manufacturer?.toLowerCase().includes(term) &&
            !item.item_code.toLowerCase().includes(term)) {
          return false;
        }
      }

      // タイプフィルター
      const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
      if (filterType === 'standard' && pricing && !pricing.is_standard) return false;
      if (filterType === 'option' && pricing && pricing.is_standard) return false;

      return true;
    });
  }, [items, searchTerm, filterType, selectedPlanId]);

  // カートに追加
  const handleAddToCart = (item: ItemWithDetails) => {
    const cartProduct = convertToCartItem(item, selectedPlanId);
    addItem(cartProduct as any, 1);

    // カートストアのプランも同期
    useCartStore.getState().setSelectedPlanId(selectedPlanId);
  };

  const getPrice = (item: ItemWithDetails) => {
    const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
    return pricing?.price || 0;
  };

  const isStandard = (item: ItemWithDetails) => {
    const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
    return pricing?.is_standard ?? false;
  };

  const getImageUrl = (item: ItemWithDetails) => {
    const variant = item.variants?.[0];
    const image = variant?.images?.[0];
    return image?.image_url || image?.thumbnail_url || null;
  };

  return (
    <div className="flex h-full">
      {/* 左側のサイドバー */}
      <div className="hidden lg:block w-64 border-r border-gray-200 bg-white overflow-y-auto">
        <div className="p-4 space-y-6">
          {/* プラン選択 */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">プラン</h3>
            <div className="space-y-2">
              {plans.map(plan => (
                <label key={plan.id} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    checked={selectedPlanId === plan.code}
                    onChange={() => setSelectedPlanId(plan.code)}
                    className="mr-2"
                  />
                  <span
                    className="text-sm font-medium px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: plan.color_code ? `${plan.color_code}20` : '#f3f4f6',
                      color: plan.color_code || '#374151'
                    }}
                  >
                    {plan.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* 検索 */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="商品を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* カテゴリフィルター */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">カテゴリ</h3>
            <div className="space-y-1">
              <button
                onClick={() => setSelectedCategoryId(null)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  !selectedCategoryId ? 'bg-teal-100 text-teal-800' : 'hover:bg-gray-100'
                }`}
              >
                すべて
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategoryId(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategoryId === category.id ? 'bg-teal-100 text-teal-800' : 'hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* タイプフィルター */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">タイプ</h3>
            <div className="flex gap-2">
              {[
                { value: 'all', label: 'すべて' },
                { value: 'standard', label: '標準' },
                { value: 'option', label: 'OP' },
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => setFilterType(option.value as any)}
                  className={`flex-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    filterType === option.value
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        {/* タブナビゲーション */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-4 sm:px-6 flex items-center justify-between">
            <div className="flex gap-1">
              {[
                { id: 'exterior', label: '外装', color: 'green' },
                { id: 'interior', label: '内装', color: 'blue' },
                { id: 'equipment', label: '設備', color: 'cyan' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3 px-4 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? `border-${tab.color}-500 text-${tab.color}-600`
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                  style={{
                    borderBottomColor: activeTab === tab.id ?
                      (tab.color === 'green' ? '#22c55e' : tab.color === 'blue' ? '#3b82f6' : '#06b6d4') :
                      'transparent',
                    color: activeTab === tab.id ?
                      (tab.color === 'green' ? '#16a34a' : tab.color === 'blue' ? '#2563eb' : '#0891b2') :
                      undefined
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* 現在のプラン表示 */}
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <span className="text-gray-500">選択中:</span>
              <span className="font-semibold text-teal-600">{selectedPlanId}</span>
            </div>
          </div>
        </div>

        {/* モバイル用検索・フィルター */}
        <div className="lg:hidden p-4 bg-white border-b space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="商品を検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {plans.map(plan => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.code)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedPlanId === plan.code
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* 商品一覧 */}
        <div className="p-4 sm:p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
              <span className="ml-2 text-gray-600">読み込み中...</span>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">該当する商品がありません</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
              {filteredItems.map((item) => {
                const price = getPrice(item);
                const standard = isStandard(item);
                const imageUrl = getImageUrl(item);
                const inCart = cartItemIds.has(item.id);
                const variant = item.variants?.[0];

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-xl shadow-sm overflow-hidden border-2 transition-all hover:shadow-md ${
                      inCart ? 'border-teal-500' : 'border-transparent'
                    }`}
                  >
                    {/* 画像 */}
                    <div className="aspect-square bg-gray-100 relative">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                          <span className="text-4xl text-gray-300">📷</span>
                        </div>
                      )}

                      {/* 標準/オプションバッジ */}
                      <div className="absolute top-2 left-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          standard
                            ? 'bg-teal-100 text-teal-800'
                            : 'bg-orange-100 text-orange-800'
                        }`}>
                          {standard ? '標準' : 'OP'}
                        </span>
                      </div>

                      {/* HITバッジ */}
                      {item.is_hit && (
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white">
                            HIT
                          </span>
                        </div>
                      )}
                    </div>

                    {/* 情報 */}
                    <div className="p-3">
                      <p className="text-xs text-gray-500 mb-0.5">{item.manufacturer}</p>
                      <h3 className="font-medium text-sm text-gray-900 line-clamp-2 mb-1">
                        {item.name}
                      </h3>
                      {variant && (
                        <p className="text-xs text-gray-500 mb-2">
                          {variant.color_name}
                        </p>
                      )}

                      {/* 価格 */}
                      <div className="flex items-baseline justify-between mb-3">
                        <span className={`text-lg font-bold ${
                          price === 0 ? 'text-teal-600' : 'text-gray-900'
                        }`}>
                          {price === 0 ? '標準' : formatPrice(price)}
                        </span>
                        {price > 0 && item.unit && (
                          <span className="text-xs text-gray-500">
                            /{item.unit.symbol}
                          </span>
                        )}
                      </div>

                      {/* カート追加ボタン */}
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={inCart}
                        className={`w-full py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 transition-colors ${
                          inCart
                            ? 'bg-teal-100 text-teal-700 cursor-default'
                            : 'bg-teal-600 text-white hover:bg-teal-700 active:scale-95'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-4 h-4" />
                            選択済み
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4" />
                            選択する
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
