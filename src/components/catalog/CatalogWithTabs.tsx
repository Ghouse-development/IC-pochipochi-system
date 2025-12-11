import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, Loader2, ShoppingCart, Check, Sparkles, Star, ChevronRight, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';
import type { ItemWithDetails, Category, Product } from '../../types/database';

// アニメーション用のCSS
const pulseAnimation = `
  @keyframes pochipochi {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes confetti {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(-100px) rotate(720deg); opacity: 0; }
  }
  @keyframes slideIn {
    from { transform: translateX(20px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
`;

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

// ステップ定義
const STEPS = [
  { id: 'exterior', label: '外装', icon: '🏠', color: 'green' },
  { id: 'interior', label: '内装', icon: '🛋️', color: 'blue' },
  { id: 'equipment', label: '設備', icon: '🚿', color: 'cyan' },
];

export const CatalogWithTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'exterior' | 'interior' | 'equipment'>('exterior');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'standard' | 'option'>('all');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('LACIE');
  const [addedItemId, setAddedItemId] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // データ
  const [items, setItems] = useState<ItemWithDetails[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [plans, setPlans] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // カート
  const { items: cartItems, addItem, removeItem, getTotalPrice } = useCartStore();
  const cartItemIds = useMemo(() => new Set(cartItems.map(i => i.product.id)), [cartItems]);
  const totalPrice = getTotalPrice();

  // プラン取得
  useEffect(() => {
    const fetchPlans = async () => {
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      if (data) setPlans(data);
    };
    fetchPlans();
  }, []);

  // カテゴリ取得
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await supabase
        .from('categories')
        .select('*')
        .eq('category_type', activeTab)
        .eq('is_active', true)
        .order('display_order');
      if (data) {
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
        let query = supabase
          .from('items')
          .select(`
            *,
            category:categories(*),
            unit:units(*),
            variants:item_variants(*, images:item_variant_images(*)),
            pricing:item_pricing(*, product:products(*))
          `)
          .eq('is_active', true);

        if (selectedCategoryId) {
          query = query.eq('category_id', selectedCategoryId);
        } else {
          const { data: categoryIds } = await supabase
            .from('categories')
            .select('id')
            .eq('category_type', activeTab)
            .eq('is_active', true);

          if (categoryIds?.length) {
            query = query.in('category_id', categoryIds.map(c => c.id));
          }
        }

        const { data, error: fetchError } = await query.order('display_order');
        if (fetchError) throw fetchError;
        setItems((data as ItemWithDetails[]) || []);
      } catch (err) {
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
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        if (!item.name.toLowerCase().includes(term) &&
            !item.manufacturer?.toLowerCase().includes(term)) {
          return false;
        }
      }
      const pricing = item.pricing?.find(p => p.product?.code === selectedPlanId);
      if (filterType === 'standard' && pricing && !pricing.is_standard) return false;
      if (filterType === 'option' && pricing?.is_standard) return false;
      return true;
    });
  }, [items, searchTerm, filterType, selectedPlanId]);

  // カートに追加（アニメーション付き）
  const handleAddToCart = useCallback((item: ItemWithDetails) => {
    const cartProduct = convertToCartItem(item, selectedPlanId);
    addItem(cartProduct as any, 1);
    useCartStore.getState().setSelectedPlanId(selectedPlanId);

    // アニメーション
    setAddedItemId(item.id);
    setTimeout(() => setAddedItemId(null), 600);

    // 5個選択ごとに紙吹雪
    if ((cartItems.length + 1) % 5 === 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  }, [addItem, cartItems.length, selectedPlanId]);

  const handleRemoveFromCart = useCallback((itemId: string) => {
    removeItem(itemId);
  }, [removeItem]);

  const getPrice = (item: ItemWithDetails) => {
    return item.pricing?.find(p => p.product?.code === selectedPlanId)?.price || 0;
  };

  const isStandard = (item: ItemWithDetails) => {
    return item.pricing?.find(p => p.product?.code === selectedPlanId)?.is_standard ?? false;
  };

  const getImageUrl = (item: ItemWithDetails) => {
    const variant = item.variants?.[0];
    return variant?.images?.[0]?.image_url || variant?.images?.[0]?.thumbnail_url || null;
  };

  // カテゴリ別選択数
  const getCategoryCount = (categoryName: string) => {
    return cartItems.filter(i =>
      i.product.categoryName === categoryName
    ).length;
  };

  return (
    <>
      <style>{pulseAnimation}</style>

      {/* 紙吹雪エフェクト */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: '50%',
                animation: `confetti 1.5s ease-out forwards`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              {['🎉', '✨', '⭐', '🌟'][i % 4]}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col h-full bg-gray-50">
        {/* プログレスヘッダー */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white px-4 py-3">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              {STEPS.map((step, index) => {
                const isActive = step.id === activeTab;
                const stepItems = cartItems.filter(i => {
                  const cat = i.product.categoryName;
                  if (step.id === 'exterior') return ['外壁', 'ポーチ', '屋根', '樋', '軒天'].some(c => cat?.includes(c));
                  if (step.id === 'interior') return ['床材', '壁クロス', '天井クロス', '巾木', '建具'].some(c => cat?.includes(c));
                  return ['キッチン', 'バス', '洗面台', 'トイレ', '給湯器'].some(c => cat?.includes(c));
                });

                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => setActiveTab(step.id as any)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                        isActive
                          ? 'bg-white text-teal-600 shadow-lg'
                          : 'bg-white/20 hover:bg-white/30'
                      }`}
                    >
                      <span className="text-xl">{step.icon}</span>
                      <span className="hidden sm:inline font-medium">{step.label}</span>
                      {stepItems.length > 0 && (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                          isActive ? 'bg-teal-100 text-teal-700' : 'bg-white/30'
                        }`}>
                          {stepItems.length}
                        </span>
                      )}
                    </button>
                    {index < STEPS.length - 1 && (
                      <ChevronRight className="w-5 h-5 text-white/50" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* 合計表示 */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-white/80">オプション合計</p>
                <p className="text-xl font-bold">{formatPrice(totalPrice)}</p>
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1">
                <span className="font-bold">{cartItems.length}</span>
                <span className="text-sm ml-1">件選択</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* 左サイドバー */}
          <div className="hidden lg:block w-64 bg-white border-r overflow-y-auto">
            <div className="p-4 space-y-6">
              {/* プラン選択 */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  プラン
                </h3>
                <div className="space-y-2">
                  {plans.map(plan => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.code)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all ${
                        selectedPlanId === plan.code
                          ? 'bg-teal-100 text-teal-800 ring-2 ring-teal-500'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <span className="font-medium">{plan.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* カテゴリ */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">カテゴリ</h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategoryId(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      !selectedCategoryId ? 'bg-teal-100 text-teal-800 font-medium' : 'hover:bg-gray-100'
                    }`}
                  >
                    すべて表示
                  </button>
                  {categories.map(cat => {
                    const count = getCategoryCount(cat.name);
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategoryId(cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-all ${
                          selectedCategoryId === cat.id
                            ? 'bg-teal-100 text-teal-800 font-medium'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <span>{cat.name}</span>
                        {count > 0 && (
                          <span className="bg-teal-500 text-white px-2 py-0.5 rounded-full text-xs">
                            {count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* フィルター */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">タイプ</h3>
                <div className="flex gap-1">
                  {[
                    { value: 'all', label: 'すべて' },
                    { value: 'standard', label: '標準' },
                    { value: 'option', label: 'OP' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFilterType(opt.value as any)}
                      className={`flex-1 px-2 py-1.5 rounded text-xs font-medium transition-all ${
                        filterType === opt.value
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* メインエリア */}
          <div className="flex-1 overflow-y-auto">
            {/* 検索バー */}
            <div className="sticky top-0 bg-white border-b z-10 p-4">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="商品名・メーカーで検索..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* 商品グリッド */}
            <div className="p-4">
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
                </div>
              ) : error ? (
                <div className="text-center py-20 text-red-500">{error}</div>
              ) : filteredItems.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">該当する商品がありません</p>
                  <p className="text-gray-400 text-sm mt-2">別のカテゴリを選択してください</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {filteredItems.map((item) => {
                    const price = getPrice(item);
                    const standard = isStandard(item);
                    const imageUrl = getImageUrl(item);
                    const inCart = cartItemIds.has(item.id);
                    const isJustAdded = addedItemId === item.id;
                    const variant = item.variants?.[0];

                    return (
                      <div
                        key={item.id}
                        className={`bg-white rounded-2xl shadow-sm overflow-hidden border-2 transition-all duration-300 ${
                          inCart ? 'border-teal-500 shadow-teal-100' : 'border-transparent hover:shadow-md'
                        } ${isJustAdded ? 'animate-[pochipochi_0.3s_ease-in-out]' : ''}`}
                        style={{ animation: isJustAdded ? 'pochipochi 0.3s ease-in-out' : undefined }}
                      >
                        {/* 画像エリア */}
                        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                          {imageUrl ? (
                            <img src={imageUrl} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center">
                              <div
                                className="w-16 h-16 rounded-full mb-2"
                                style={{
                                  background: variant?.color_code
                                    ? `linear-gradient(135deg, ${variant.color_code}, ${variant.color_code}88)`
                                    : 'linear-gradient(135deg, #e5e7eb, #d1d5db)'
                                }}
                              />
                              <span className="text-xs text-gray-400">{variant?.color_name || item.manufacturer}</span>
                            </div>
                          )}

                          {/* バッジ */}
                          <div className="absolute top-2 left-2 flex flex-col gap-1">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                              standard ? 'bg-teal-500 text-white' : 'bg-orange-500 text-white'
                            }`}>
                              {standard ? '標準' : 'OP'}
                            </span>
                            {item.is_hit && (
                              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-red-500 text-white flex items-center gap-1">
                                <Sparkles className="w-3 h-3" /> HIT
                              </span>
                            )}
                          </div>

                          {/* 選択済みオーバーレイ */}
                          {inCart && (
                            <div className="absolute inset-0 bg-teal-500/20 flex items-center justify-center">
                              <div className="bg-white rounded-full p-2 shadow-lg">
                                <Check className="w-6 h-6 text-teal-600" />
                              </div>
                            </div>
                          )}
                        </div>

                        {/* 情報エリア */}
                        <div className="p-3">
                          <p className="text-xs text-gray-500 truncate">{item.manufacturer}</p>
                          <h3 className="font-medium text-sm text-gray-900 line-clamp-2 h-10 mb-1">
                            {item.name}
                          </h3>

                          {/* 価格 */}
                          <div className="flex items-baseline gap-1 mb-3">
                            <span className={`text-lg font-bold ${price === 0 ? 'text-teal-600' : 'text-gray-900'}`}>
                              {price === 0 ? '標準仕様' : formatPrice(price)}
                            </span>
                            {price > 0 && item.unit && (
                              <span className="text-xs text-gray-400">/{item.unit.symbol}</span>
                            )}
                          </div>

                          {/* ボタン */}
                          {inCart ? (
                            <button
                              onClick={() => handleRemoveFromCart(item.id)}
                              className="w-full py-2.5 rounded-xl text-sm font-medium bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600 flex items-center justify-center gap-2 transition-colors"
                            >
                              <X className="w-4 h-4" />
                              選択を解除
                            </button>
                          ) : (
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="w-full py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all active:scale-95"
                            >
                              <ShoppingCart className="w-4 h-4" />
                              選択する
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
