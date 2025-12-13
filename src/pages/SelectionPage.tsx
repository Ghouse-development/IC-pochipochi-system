import { useState, useEffect, useMemo } from 'react';
import {
  ChevronLeft,
  Check,
  Star,
  ShoppingCart,
  Info,
  X,
  ZoomIn,
  AlertCircle,
} from 'lucide-react';
import { categoriesApi, itemsApi, selectionsApi, projectsApi } from '../services/api';
import type {
  Category,
  ItemWithDetails,
  Project,
  Selection,
  ItemVariant,
} from '../types/database';

interface SelectionPageProps {
  projectId: string;
  onBack?: () => void;
}

export function SelectionPage({ projectId, onBack }: SelectionPageProps) {
  const [project, setProject] = useState<Project | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [items, setItems] = useState<ItemWithDetails[]>([]);
  const [selections, setSelections] = useState<Selection[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsLoading, setItemsLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemWithDetails | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ItemVariant | null>(null);
  const [showCartSummary, setShowCartSummary] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load project and categories
  useEffect(() => {
    loadInitialData();
  }, [projectId]);

  const loadInitialData = async () => {
    setIsLoading(true);
    try {
      const [projectData, categoriesData, selectionsData] = await Promise.all([
        projectsApi.getById(projectId),
        categoriesApi.getWithChildren(),
        selectionsApi.getByProject(projectId),
      ]);

      setProject(projectData);
      setCategories(categoriesData);
      setSelections(selectionsData);

      // Set first category as active
      if (categoriesData.length > 0) {
        const firstParent = categoriesData[0];
        const firstChild = firstParent.children?.[0];
        setActiveCategory(firstChild || firstParent);
      }
    } catch (err) {
      console.error('Error loading data:', err);
      setError('データの読み込みに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  // Load items when category changes
  useEffect(() => {
    if (activeCategory && project?.product_id) {
      loadItems();
    }
  }, [activeCategory, project?.product_id]);

  const loadItems = async () => {
    if (!activeCategory || !project?.product_id) return;

    setItemsLoading(true);
    try {
      const itemsData = await itemsApi.getByProductAndCategory(
        project.product_id,
        activeCategory.id
      );
      setItems(itemsData);
    } catch (err) {
      console.error('Error loading items:', err);
    } finally {
      setItemsLoading(false);
    }
  };

  // Get selection for item
  const getSelectionForItem = (itemId: string) => {
    return selections.find((s) => s.item_id === itemId);
  };

  // Handle item selection
  const handleSelectItem = async (item: ItemWithDetails, variant?: ItemVariant) => {
    if (!activeCategory) return;

    try {
      // Check if this category already has a selection
      const existingSelection = selections.find(
        (s) => s.category_id === activeCategory.id
      );

      if (existingSelection) {
        // Remove existing selection
        await selectionsApi.delete(existingSelection.id);
      }

      // Add new selection
      const newSelection = await selectionsApi.create({
        project_id: projectId,
        category_id: activeCategory.id,
        item_id: item.id,
        variant_id: variant?.id,
        quantity: 1,
      });

      // Update local state
      setSelections((prev) => {
        const filtered = prev.filter((s) => s.category_id !== activeCategory.id);
        return [...filtered, newSelection];
      });

      setSelectedItem(null);
      setSelectedVariant(null);
    } catch (err) {
      console.error('Error selecting item:', err);
      setError('アイテムの選択に失敗しました');
    }
  };

  // Calculate progress
  const requiredCategories = useMemo(() => {
    return categories.flatMap((parent) =>
      (parent.children || []).filter((child) => child.is_required)
    );
  }, [categories]);

  const completedCategories = useMemo(() => {
    return requiredCategories.filter((cat) =>
      selections.some((s) => s.category_id === cat.id)
    );
  }, [requiredCategories, selections]);

  const progress = requiredCategories.length > 0
    ? (completedCategories.length / requiredCategories.length) * 100
    : 0;

  // Get total price
  const totalPrice = useMemo(() => {
    return selections.reduce((sum, s) => sum + (s.total_price || 0), 0);
  }, [selections]);

  // Format price
  const formatPrice = (price: number) => {
    return price.toLocaleString('ja-JP') + '円';
  };

  // Get unit symbol
  const getUnitSymbol = (item: ItemWithDetails) => {
    return item.unit?.symbol || '';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <button
                  onClick={onBack}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              )}
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  {project?.name || 'プロジェクト'}
                </h1>
                <p className="text-sm text-gray-500">
                  {project?.product?.name} | {project?.customer_name}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Progress indicator */}
              <div className="hidden md:flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {completedCategories.length}/{requiredCategories.length}
                </span>
              </div>
              {/* Cart summary button */}
              <button
                onClick={() => setShowCartSummary(true)}
                className="relative p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
              >
                <ShoppingCart className="w-5 h-5" />
                {selections.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {selections.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Category navigation */}
        <div className="border-t border-gray-200 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
              {categories.map((parent) => (
                <div key={parent.id} className="flex-shrink-0">
                  <div className="text-xs font-medium text-gray-500 mb-1 px-2">
                    {parent.name}
                  </div>
                  <div className="flex gap-1">
                    {(parent.children || []).map((child) => {
                      const isActive = activeCategory?.id === child.id;
                      const isComplete = selections.some(
                        (s) => s.category_id === child.id
                      );
                      return (
                        <button
                          key={child.id}
                          onClick={() => setActiveCategory(child)}
                          className={`
                            px-3 py-1.5 rounded-full text-sm font-medium transition-all
                            flex items-center gap-1
                            ${isActive
                              ? 'bg-teal-600 text-white'
                              : isComplete
                              ? 'bg-green-100 text-green-700 hover:bg-green-200'
                              : 'bg-white text-gray-700 hover:bg-gray-100'
                            }
                            ${child.is_required && !isComplete ? 'ring-2 ring-red-200' : ''}
                          `}
                        >
                          {child.name}
                          {isComplete && <Check className="w-3.5 h-3.5" />}
                          {child.is_required && !isComplete && (
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Error message */}
      {error && (
        <div className="max-w-7xl mx-auto px-4 mt-4">
          <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            {error}
            <button
              onClick={() => setError(null)}
              className="ml-auto text-red-900"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 w-full">
        {/* Current category header */}
        {activeCategory && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {activeCategory.name}
              {activeCategory.is_required && (
                <span className="ml-2 text-sm text-red-500 font-normal">
                  (必須)
                </span>
              )}
            </h2>
            {activeCategory.description && (
              <p className="text-gray-600 mt-1">{activeCategory.description}</p>
            )}
          </div>
        )}

        {/* Items grid */}
        {itemsLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            このカテゴリにはアイテムがありません
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => {
              const selection = getSelectionForItem(item.id);
              const isSelected = !!selection;
              const pricing = item.pricing?.[0];
              const primaryVariant = item.variants?.[0];
              const primaryImage = primaryVariant?.images?.find(
                (img) => img.is_primary
              ) || primaryVariant?.images?.[0];

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`
                    bg-white rounded-xl overflow-hidden shadow-sm border-2 cursor-pointer
                    transition-all hover:shadow-md
                    ${isSelected ? 'border-teal-500 ring-2 ring-teal-100' : 'border-transparent'}
                  `}
                >
                  {/* Image */}
                  <div className="relative aspect-square bg-gray-100">
                    {primaryImage ? (
                      <img
                        src={primaryImage.thumbnail_url || primaryImage.image_url}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                    {item.is_hit && (
                      <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        HIT
                      </div>
                    )}
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {item.variants && item.variants.length > 1 && (
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-0.5 rounded text-xs">
                        {item.variants.length}色
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-3">
                    <div className="text-xs text-gray-500 mb-1">
                      {item.manufacturer}
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
                      {item.name}
                    </h3>
                    {pricing && (
                      <div className="mt-2">
                        <span
                          className={`text-sm font-bold ${
                            pricing.is_standard
                              ? 'text-green-600'
                              : 'text-gray-900'
                          }`}
                        >
                          {pricing.is_standard ? (
                            '標準'
                          ) : (
                            <>
                              {formatPrice(pricing.price)}
                              {getUnitSymbol(item) && (
                                <span className="text-xs font-normal text-gray-500">
                                  /{getUnitSymbol(item)}
                                </span>
                              )}
                            </>
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Item detail modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full max-w-2xl md:rounded-t-2xl md:rounded-b-2xl rounded-t-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">
                {selectedItem.name}
              </h3>
              <button
                onClick={() => {
                  setSelectedItem(null);
                  setSelectedVariant(null);
                }}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Main image */}
              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                {selectedVariant?.images?.[0] ||
                selectedItem.variants?.[0]?.images?.[0] ? (
                  <img
                    src={
                      (
                        selectedVariant?.images?.[0] ||
                        selectedItem.variants?.[0]?.images?.[0]
                      )?.image_url
                    }
                    alt={selectedItem.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <button className="absolute bottom-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white">
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>

              {/* Variant selector */}
              {selectedItem.variants && selectedItem.variants.length > 1 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    カラーバリエーション
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.variants.map((variant) => {
                      const isActive = selectedVariant?.id === variant.id;
                      const variantImage = variant.images?.[0];
                      return (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariant(variant)}
                          className={`
                            relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all
                            ${isActive ? 'border-teal-500 ring-2 ring-teal-100' : 'border-gray-200 hover:border-gray-300'}
                          `}
                        >
                          {variantImage ? (
                            <img
                              src={variantImage.thumbnail_url || variantImage.image_url}
                              alt={variant.color_name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div
                              className="w-full h-full"
                              style={{ backgroundColor: variant.color_code || '#ccc' }}
                            />
                          )}
                          {isActive && (
                            <div className="absolute inset-0 bg-teal-500/20 flex items-center justify-center">
                              <Check className="w-5 h-5 text-teal-600" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {selectedVariant && (
                    <p className="text-sm text-gray-600 mt-2">
                      選択中: {selectedVariant.color_name}
                    </p>
                  )}
                </div>
              )}

              {/* Item details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">メーカー</span>
                  <span className="text-gray-900">{selectedItem.manufacturer || '-'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">型番</span>
                  <span className="text-gray-900">{selectedItem.model_number || '-'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">商品コード</span>
                  <span className="text-gray-900">{selectedItem.item_code}</span>
                </div>
                {selectedItem.pricing?.[0] && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">価格</span>
                    <span className="text-gray-900 font-bold">
                      {selectedItem.pricing[0].is_standard ? (
                        <span className="text-green-600">標準仕様</span>
                      ) : (
                        <>
                          {formatPrice(selectedItem.pricing[0].price)}
                          {getUnitSymbol(selectedItem) && (
                            <span className="font-normal">/{getUnitSymbol(selectedItem)}</span>
                          )}
                        </>
                      )}
                    </span>
                  </div>
                )}
                {selectedItem.note && (
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p>{selectedItem.note}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Action button */}
              <button
                onClick={() =>
                  handleSelectItem(selectedItem, selectedVariant || selectedItem.variants?.[0])
                }
                className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
              >
                このアイテムを選択
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart summary modal */}
      {showCartSummary && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center">
          <div className="bg-white w-full max-w-lg md:rounded-2xl rounded-t-2xl max-h-[80vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">選択内容</h3>
              <button
                onClick={() => setShowCartSummary(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {selections.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  まだアイテムが選択されていません
                </div>
              ) : (
                <div className="space-y-3">
                  {selections.map((selection) => (
                    <div
                      key={selection.id}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="text-xs text-gray-500">
                          {selection.category?.name}
                        </div>
                        <div className="font-medium text-gray-900">
                          {selection.item?.name}
                        </div>
                        {selection.variant && (
                          <div className="text-sm text-gray-600">
                            {selection.variant.color_name}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">
                          {selection.total_price === 0
                            ? '標準'
                            : formatPrice(selection.total_price)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">合計オプション価格<span className="text-xs text-gray-400 ml-1">税別</span></span>
                <span className="text-xl font-bold text-gray-900">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">必須カテゴリ進捗</span>
                  <span className="text-gray-900">
                    {completedCategories.length}/{requiredCategories.length}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-500 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                {progress < 100 && (
                  <p className="text-xs text-red-500 mt-1">
                    すべての必須カテゴリを選択してください
                  </p>
                )}
              </div>

              <button
                disabled={progress < 100}
                className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                選択を確定する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
