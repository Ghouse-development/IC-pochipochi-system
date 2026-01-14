import { useState, useEffect, useMemo } from 'react';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Upload,
  Download,
  RefreshCw,
  Image as ImageIcon,
  Tag,
  Star,
  AlertTriangle,
  Palette,
  DollarSign,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { itemsApi, categoriesApi, productsApi, unitsApi } from '../../services/api';
import { ItemVariantManager } from './ItemVariantManager';
import { ItemPricingManager } from './ItemPricingManager';
import { useDebounce } from '../../hooks/useDebounce';
import { supabase } from '../../lib/supabase';
import type { ItemWithDetails, Category, Product } from '../../types/database';
import { ConfirmDialog } from '../common/ConfirmDialog';
import { useToast } from '../common/Toast';
import { createLogger } from '../../lib/logger';

const logger = createLogger('ItemManager');

export function ItemManager() {
  const toast = useToast();
  const [items, setItems] = useState<ItemWithDetails[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [units, setUnits] = useState<{ id: string; code: string; name: string; symbol: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [manufacturerFilter, setManufacturerFilter] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemWithDetails | null>(null);
  const [showImportModal, setShowImportModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Delete confirmation state
  const [deleteConfirm, setDeleteConfirm] = useState<{
    isOpen: boolean;
    itemId: string | null;
    isInUse: boolean;
    message: string;
  }>({ isOpen: false, itemId: null, isInUse: false, message: '' });

  useEffect(() => {
    let mounted = true;

    const loadDataAsync = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const [categoriesData, productsData, unitsData] = await Promise.all([
          categoriesApi.getAll(),
          productsApi.getAll(),
          unitsApi.getAll(),
        ]);

        if (mounted) {
          setCategories(categoriesData);
          setProducts(productsData);
          setUnits(unitsData);

          // Load items for selected category or all
          await loadItems(categoryFilter === 'all' ? undefined : categoryFilter);
        }
      } catch (err) {
        if (mounted) {
          const message = 'データの読み込みに失敗しました';
          setError(message);
          toast.error('エラー', message);
          logger.error(err);
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    loadDataAsync();

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 初期化用effectのため、依存配列は空

  const loadItems = async (categoryId?: string) => {
    try {
      let itemsData: ItemWithDetails[];
      if (categoryId) {
        itemsData = await itemsApi.getByCategoryWithDetails(categoryId);
      } else {
        // Load all items with details (variants, pricing)
        itemsData = await itemsApi.getAllWithDetails();
      }
      setItems(itemsData);
    } catch (err) {
      logger.error('Failed to load items:', err);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      loadItems(categoryFilter === 'all' ? undefined : categoryFilter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryFilter]); // カテゴリ変更時のみ再読み込み

  // Get unique manufacturers
  const manufacturers = useMemo(() =>
    [...new Set(items.map((item) => item.manufacturer).filter(Boolean))],
    [items]
  );

  // Build category path map for sorting
  const categoryPathMap = useMemo(() => {
    const map = new Map<string, { path: string; order: number }>();

    // Sort parent categories by display_order
    const sortedParents = [...categories]
      .filter(c => !c.parent_id)
      .sort((a, b) => (a.display_order || 0) - (b.display_order || 0));

    sortedParents.forEach((parent, parentIndex) => {
      map.set(parent.id, { path: parent.name, order: parentIndex * 1000 });

      // Sort child categories by display_order
      const children = categories
        .filter(c => c.parent_id === parent.id)
        .sort((a, b) => (a.display_order || 0) - (b.display_order || 0));

      children.forEach((child, childIndex) => {
        map.set(child.id, {
          path: `${parent.name} > ${child.name}`,
          order: parentIndex * 1000 + childIndex + 1
        });
      });
    });

    return map;
  }, [categories]);

  // Filter and sort items (memoized for performance, uses debounced search)
  const filteredItems = useMemo(() => {
    const searchLower = debouncedSearchTerm.toLowerCase();
    const filtered = items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchLower) ||
        item.item_code.toLowerCase().includes(searchLower) ||
        item.manufacturer?.toLowerCase().includes(searchLower);
      const matchesManufacturer =
        manufacturerFilter === 'all' || item.manufacturer === manufacturerFilter;
      return matchesSearch && matchesManufacturer;
    });

    // Sort by category hierarchy, then by display_order, then by name
    return filtered.sort((a, b) => {
      const catA = a.category_id ? categoryPathMap.get(a.category_id)?.order ?? 9999 : 9999;
      const catB = b.category_id ? categoryPathMap.get(b.category_id)?.order ?? 9999 : 9999;

      if (catA !== catB) return catA - catB;

      // Same category - sort by display_order then name
      const orderA = a.display_order ?? 9999;
      const orderB = b.display_order ?? 9999;
      if (orderA !== orderB) return orderA - orderB;

      return a.name.localeCompare(b.name, 'ja');
    });
  }, [items, debouncedSearchTerm, manufacturerFilter, categoryPathMap]);

  // Build category tree for display
  const parentCategories = categories.filter((c) => !c.parent_id);
  const getCategoryName = (categoryId: string | null) => {
    if (!categoryId) return '-';
    const category = categories.find((c) => c.id === categoryId);
    if (!category) return '-';
    if (category.parent_id) {
      const parent = categories.find((c) => c.id === category.parent_id);
      return `${parent?.name || ''} > ${category.name}`;
    }
    return category.name;
  };

  // Get unit symbol for display
  const getUnitSymbol = (unitId: string | null) => {
    if (!unitId) return '';
    const unit = units.find((u) => u.id === unitId);
    return unit?.symbol || '';
  };

  // Format price with unit
  const formatPriceWithUnit = (price: number | undefined, unitId: string | null) => {
    if (price === undefined || price === null) return '-';
    const unitSymbol = getUnitSymbol(unitId);
    const formattedPrice = price.toLocaleString('ja-JP');
    return unitSymbol ? `${formattedPrice}円/${unitSymbol}` : `${formattedPrice}円`;
  };

  const handleDeleteItem = async (itemId: string) => {
    try {
      // Check if item is used in any selections
      const { data: selections } = await supabase
        .from('selections')
        .select('id')
        .eq('item_id', itemId)
        .limit(1);

      const { data: roomSelections } = await supabase
        .from('room_selections')
        .select('id')
        .eq('item_id', itemId)
        .limit(1);

      const isInUse = (selections && selections.length > 0) || (roomSelections && roomSelections.length > 0);

      if (isInUse) {
        setDeleteConfirm({
          isOpen: true,
          itemId,
          isInUse: true,
          message: 'このアイテムは現在使用中のプロジェクトがあります。\n無効化（論理削除）しますか？\n\n※過去のデータは保持されます'
        });
      } else {
        setDeleteConfirm({
          isOpen: true,
          itemId,
          isInUse: false,
          message: 'このアイテムを完全に削除してもよろしいですか？'
        });
      }
    } catch (err) {
      logger.error('Failed to check item usage:', err);
      const message = 'アイテムの使用状況確認に失敗しました';
      setError(message);
      toast.error('エラー', message);
    }
  };

  const executeDeleteItem = async () => {
    if (!deleteConfirm.itemId) return;

    try {
      if (deleteConfirm.isInUse) {
        // Soft delete - deactivate the item
        await supabase
          .from('items')
          .update({ is_active: false, updated_at: new Date().toISOString() })
          .eq('id', deleteConfirm.itemId);
      } else {
        // Hard delete
        await itemsApi.delete(deleteConfirm.itemId);
      }

      await loadItems(categoryFilter === 'all' ? undefined : categoryFilter);
    } catch (err) {
      logger.error('Failed to delete item:', err);
      const message = 'アイテムの削除に失敗しました';
      setError(message);
      toast.error('エラー', message);
    } finally {
      setDeleteConfirm({ isOpen: false, itemId: null, isInUse: false, message: '' });
    }
  };

  // アイテム並び替え（同じカテゴリ内のみ）
  const handleMoveItem = async (itemId: string, direction: 'up' | 'down') => {
    // 同じカテゴリ内のアイテムのみを対象にする
    const item = filteredItems.find(i => i.id === itemId);
    if (!item) return;

    const sameCategoryItems = filteredItems.filter(i => i.category_id === item.category_id);
    const currentIndex = sameCategoryItems.findIndex(i => i.id === itemId);
    if (currentIndex === -1) return;

    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= sameCategoryItems.length) return;

    const targetItem = sameCategoryItems[newIndex];

    // DBに保存
    try {
      const currentOrder = item.display_order ?? currentIndex;
      const targetOrder = targetItem.display_order ?? newIndex;

      await Promise.all([
        supabase
          .from('items')
          .update({ display_order: targetOrder, updated_at: new Date().toISOString() })
          .eq('id', item.id),
        supabase
          .from('items')
          .update({ display_order: currentOrder, updated_at: new Date().toISOString() })
          .eq('id', targetItem.id),
      ]);

      // リロード
      await loadItems(categoryFilter === 'all' ? undefined : categoryFilter);
      toast.success('並び替え完了', 'アイテムの順序を変更しました');
    } catch (err) {
      logger.error('Failed to reorder items:', err);
      toast.error('エラー', '並び替えの保存に失敗しました');
    }
  };

  const handleExportItems = () => {
    // Export items as CSV
    const headers = ['アイテムコード', '名前', 'メーカー', '型番', 'カテゴリ', 'HIT', '有効'];
    const rows = filteredItems.map((item) => [
      item.item_code,
      item.name,
      item.manufacturer || '',
      item.model_number || '',
      getCategoryName(item.category_id),
      item.is_hit ? 'Yes' : 'No',
      item.is_active ? 'Yes' : 'No',
    ]);

    const csv = [headers.join(','), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(','))].join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `items_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">アイテム管理</h2>
          <p className="text-gray-600 mt-1">カタログに表示するアイテムを管理します</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowImportModal(true)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            <Upload className="w-4 h-4" />
            一括登録
          </button>
          <button
            onClick={handleExportItems}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            <Download className="w-4 h-4" />
            エクスポート
          </button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            新規アイテム
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="アイテム名、コード、メーカーで検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                aria-label="アイテム検索"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              aria-label="カテゴリでフィルター"
            >
              <option value="all">全カテゴリ</option>
              {parentCategories.map((parent) => (
                <optgroup key={parent.id} label={parent.name}>
                  <option value={parent.id}>{parent.name}（全体）</option>
                  {categories
                    .filter((c) => c.parent_id === parent.id)
                    .map((child) => (
                      <option key={child.id} value={child.id}>
                        {child.name}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
            <select
              value={manufacturerFilter}
              onChange={(e) => setManufacturerFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              aria-label="メーカーでフィルター"
            >
              <option value="all">全メーカー</option>
              {manufacturers.map((manufacturer) => (
                <option key={manufacturer} value={manufacturer || ''}>
                  {manufacturer}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Item List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                  順序
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  アイテム
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  メーカー
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  カテゴリ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  バリエーション
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  価格
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ステータス
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center text-gray-500">
                    アイテムが見つかりません
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => {
                  // 同じカテゴリ内での位置を計算
                  const sameCategoryItems = filteredItems.filter(i => i.category_id === item.category_id);
                  const categoryIndex = sameCategoryItems.findIndex(i => i.id === item.id);
                  const isFirstInCategory = categoryIndex === 0;
                  const isLastInCategory = categoryIndex === sameCategoryItems.length - 1;

                  return (
                  <tr key={item.id} className="hover:bg-gray-50">
                    {/* 並び替えボタン */}
                    <td className="px-3 py-4">
                      <div className="flex flex-col items-center gap-0.5">
                        <button
                          onClick={() => handleMoveItem(item.id, 'up')}
                          disabled={isFirstInCategory}
                          className={`p-1 rounded transition-all ${
                            isFirstInCategory
                              ? 'text-gray-300 cursor-not-allowed'
                              : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                          }`}
                          title="上に移動"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleMoveItem(item.id, 'down')}
                          disabled={isLastInCategory}
                          className={`p-1 rounded transition-all ${
                            isLastInCategory
                              ? 'text-gray-300 cursor-not-allowed'
                              : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                          }`}
                          title="下に移動"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          {item.variants?.[0]?.images?.[0] ? (
                            <img
                              src={item.variants[0].images[0].thumbnail_url || item.variants[0].images[0].image_url}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <ImageIcon className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{item.name}</span>
                            {item.is_hit && (
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{item.item_code}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{item.manufacturer || '-'}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 text-sm text-gray-600">
                        <Tag className="w-4 h-4" />
                        {getCategoryName(item.category_id)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-gray-900">{item.variants?.length || 0}色</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-gray-900">
                        {item.pricing && item.pricing.length > 0 ? (
                          <div className="flex flex-col gap-1">
                            {item.pricing.slice(0, 2).map((p, idx) => (
                              <div key={idx} className="text-sm">
                                <span className="text-gray-500">{p.product?.name || ''}:</span>{' '}
                                <span className="font-medium">{formatPriceWithUnit(p.price, item.unit_id)}</span>
                                {p.is_standard && (
                                  <span className="ml-1 text-xs text-green-600">(標準)</span>
                                )}
                              </div>
                            ))}
                            {item.pricing.length > 2 && (
                              <span className="text-xs text-gray-500">他{item.pricing.length - 2}件</span>
                            )}
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        {item.is_discontinued && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs">
                            <AlertTriangle className="w-3 h-3" />
                            廃番
                          </span>
                        )}
                        {!item.is_active && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                            非表示
                          </span>
                        )}
                        {item.is_active && !item.is_discontinued && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs">
                            有効
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="編集"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteItem(item.id)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                          title="削除"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination placeholder */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            {filteredItems.length} 件のアイテム
          </p>
        </div>
      </div>

      {/* Create/Edit Modal */}
      {(showCreateModal || selectedItem) && (
        <ItemFormModal
          item={selectedItem}
          categories={categories}
          products={products}
          units={units}
          onClose={() => {
            setShowCreateModal(false);
            setSelectedItem(null);
          }}
          onSaved={() => {
            setShowCreateModal(false);
            setSelectedItem(null);
            loadItems(categoryFilter === 'all' ? undefined : categoryFilter);
          }}
        />
      )}

      {/* Import Modal */}
      {showImportModal && (
        <ImportItemsModal
          onClose={() => setShowImportModal(false)}
          onImported={() => {
            setShowImportModal(false);
            loadItems(categoryFilter === 'all' ? undefined : categoryFilter);
          }}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={deleteConfirm.isOpen}
        onClose={() => setDeleteConfirm({ isOpen: false, itemId: null, isInUse: false, message: '' })}
        onConfirm={executeDeleteItem}
        title={deleteConfirm.isInUse ? 'アイテムの無効化' : 'アイテムの削除'}
        message={deleteConfirm.message}
        variant={deleteConfirm.isInUse ? 'warning' : 'danger'}
        confirmText={deleteConfirm.isInUse ? '無効化する' : '削除する'}
      />
    </div>
  );
}

// Item Form Modal
function ItemFormModal({
  item,
  categories,
  units,
  onClose,
  onSaved,
}: {
  item: ItemWithDetails | null;
  categories: Category[];
  products: Product[];
  units: { id: string; code: string; name: string; symbol: string }[];
  onClose: () => void;
  onSaved: () => void;
}) {
  const toast = useToast();
  const [activeTab, setActiveTab] = useState<'basic' | 'pricing' | 'variants'>('basic');
  const [formData, setFormData] = useState({
    item_code: item?.item_code || '',
    name: item?.name || '',
    category_id: item?.category_id || '',
    manufacturer: item?.manufacturer || '',
    model_number: item?.model_number || '',
    note: item?.note || '',
    catalog_url: item?.catalog_url || '',
    unit_id: item?.unit_id || '',
    is_hit: item?.is_hit || false,
    is_discontinued: item?.is_discontinued || false,
    discontinue_date: item?.discontinue_date || '',
    discontinue_note: item?.discontinue_note || '',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [variants, setVariants] = useState(item?.variants || []);
  const [pricing, setPricing] = useState(item?.pricing || []);

  const parentCategories = categories.filter((c) => !c.parent_id);

  const handleVariantsChange = async () => {
    // Reload item to get updated variants
    if (item) {
      try {
        const updatedItem = await itemsApi.getWithDetails(item.id);
        if (updatedItem) {
          setVariants(updatedItem.variants || []);
        }
      } catch (err) {
        logger.error('Failed to reload variants:', err);
      }
    }
  };

  const handlePricingChange = async () => {
    // Reload item to get updated pricing
    if (item) {
      try {
        const updatedItem = await itemsApi.getWithDetails(item.id);
        if (updatedItem) {
          setPricing(updatedItem.pricing || []);
        }
      } catch (err) {
        logger.error('Failed to reload pricing:', err);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.item_code || !formData.name || !formData.category_id) {
      setError('アイテムコード、名前、カテゴリは必須です');
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      if (item) {
        await itemsApi.update(item.id, {
          ...formData,
          discontinue_date: formData.discontinue_date || null,
        });
      } else {
        await itemsApi.create({
          item_code: formData.item_code,
          name: formData.name,
          category_id: formData.category_id,
          manufacturer: formData.manufacturer || undefined,
          model_number: formData.model_number || undefined,
          note: formData.note || undefined,
          catalog_url: formData.catalog_url || undefined,
          unit_id: formData.unit_id || undefined,
          is_hit: formData.is_hit,
        });
      }
      toast.success('保存完了', item ? 'アイテムを更新しました' : 'アイテムを作成しました');
      onSaved();
    } catch (err) {
      const message = 'アイテムの保存に失敗しました';
      setError(message);
      toast.error('エラー', message);
      logger.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">
            {item ? 'アイテム編集' : '新規アイテム作成'}
          </h3>
          {item && (
            <p className="text-sm text-gray-500 mt-1">{item.name}</p>
          )}
        </div>

        {/* Tabs - only show for existing items */}
        {item && (
          <div className="flex border-b border-gray-200 px-6">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px ${
                activeTab === 'basic'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Tag className="w-4 h-4 inline-block mr-2" />
              基本情報
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px ${
                activeTab === 'pricing'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <DollarSign className="w-4 h-4 inline-block mr-2" />
              価格設定
            </button>
            <button
              onClick={() => setActiveTab('variants')}
              className={`px-4 py-3 text-sm font-medium border-b-2 -mb-px ${
                activeTab === 'variants'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Palette className="w-4 h-4 inline-block mr-2" />
              バリエーション
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-gray-100 rounded-full">
                {variants.length}
              </span>
            </button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'basic' ? (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    アイテムコード <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.item_code}
                    onChange={(e) => setFormData({ ...formData, item_code: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="例: NICHIHA-001"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    カテゴリ <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category_id}
                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">選択してください</option>
                    {parentCategories.map((parent) => (
                      <optgroup key={parent.id} label={parent.name}>
                        {categories
                          .filter((c) => c.parent_id === parent.id)
                          .map((child) => (
                            <option key={child.id} value={child.id}>
                              {child.name}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  アイテム名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="例: モナビストーンV"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">メーカー</label>
                  <input
                    type="text"
                    value={formData.manufacturer}
                    onChange={(e) => setFormData({ ...formData, manufacturer: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="例: ニチハ"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">型番</label>
                  <input
                    type="text"
                    value={formData.model_number}
                    onChange={(e) => setFormData({ ...formData, model_number: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">単位</label>
                <select
                  value={formData.unit_id}
                  onChange={(e) => setFormData({ ...formData, unit_id: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">選択してください</option>
                  {units.map((unit) => (
                    <option key={unit.id} value={unit.id}>
                      {unit.name}（{unit.symbol}）
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">商品メモ・特徴</label>
                <textarea
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="商品の特徴やメモを入力"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  商品URL（メーカーサイト等）
                </label>
                <input
                  type="url"
                  value={formData.catalog_url}
                  onChange={(e) => setFormData({ ...formData, catalog_url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com/product/..."
                />
                <p className="text-xs text-gray-500 mt-1">
                  設定するとユーザー画面でリンクが表示されます（任意）
                </p>
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_hit}
                    onChange={(e) => setFormData({ ...formData, is_hit: e.target.checked })}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">HITアイテムとして表示</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.is_discontinued}
                    onChange={(e) => setFormData({ ...formData, is_discontinued: e.target.checked })}
                    className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                  />
                  <span className="text-gray-700">廃番</span>
                </label>
              </div>

              {formData.is_discontinued && (
                <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-200">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">廃番予定日</label>
                    <input
                      type="date"
                      value={formData.discontinue_date}
                      onChange={(e) => setFormData({ ...formData, discontinue_date: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">廃番備考</label>
                    <input
                      type="text"
                      value={formData.discontinue_note}
                      onChange={(e) => setFormData({ ...formData, discontinue_note: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="例: 後継品はXXX"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  キャンセル
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSaving ? '保存中...' : '保存'}
                </button>
              </div>
            </form>
          ) : activeTab === 'pricing' ? (
            <div className="p-6">
              {item ? (
                <ItemPricingManager
                  itemId={item.id}
                  pricing={pricing}
                  onPricingChange={handlePricingChange}
                />
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>アイテムを保存してから価格設定ができます</p>
                </div>
              )}
              <div className="flex justify-end pt-4 mt-4 border-t">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  閉じる
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6">
              {item ? (
                <ItemVariantManager
                  itemId={item.id}
                  itemName={item.name}
                  variants={variants}
                  onVariantsChange={handleVariantsChange}
                />
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>アイテムを保存してからバリエーションを追加できます</p>
                </div>
              )}
              <div className="flex justify-end pt-4 mt-4 border-t">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  閉じる
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Import Items Modal
function ImportItemsModal({
  onClose,
  onImported,
}: {
  onClose: () => void;
  onImported: () => void;
}) {
  const toast = useToast();
  const [file, setFile] = useState<File | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string[][]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (!selectedFile.name.endsWith('.csv') && !selectedFile.name.endsWith('.xlsx')) {
      setError('CSVまたはExcelファイルを選択してください');
      return;
    }

    setFile(selectedFile);
    setError(null);

    // Preview CSV
    if (selectedFile.name.endsWith('.csv')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const lines = text.split('\n').slice(0, 6);
        const rows = lines.map((line) => line.split(',').map((cell) => cell.replace(/"/g, '').trim()));
        setPreview(rows);
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleImport = async () => {
    if (!file) return;

    setIsImporting(true);
    setError(null);

    try {
      // FUTURE: CSVインポート機能はCsvImportコンポーネントで実装済み
      // このモーダルは将来的にCsvImportと統合予定
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('インポート完了', 'データをインポートしました');
      onImported();
    } catch (err) {
      const message = 'インポートに失敗しました';
      setError(message);
      toast.error('エラー', message);
      logger.error(err);
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">アイテム一括登録</h3>
          <p className="text-sm text-gray-600 mt-1">CSVまたはExcelファイルからアイテムを一括登録します</p>
        </div>

        <div className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>
          )}

          {/* Template Download */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-700 mb-2">
              テンプレートファイルをダウンロードして、アイテム情報を入力してください。
            </p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              <Download className="w-4 h-4 inline mr-1" />
              テンプレートをダウンロード
            </button>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ファイルを選択
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <input
                type="file"
                accept=".csv,.xlsx"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="w-12 h-12 text-gray-400 mb-2" />
                <span className="text-gray-600">
                  {file ? file.name : 'クリックしてファイルを選択'}
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  CSV、Excel（.xlsx）形式
                </span>
              </label>
            </div>
          </div>

          {/* Preview */}
          {preview.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">プレビュー</h4>
              <div className="overflow-x-auto border border-gray-200 rounded-lg">
                <table className="min-w-full text-sm">
                  <tbody>
                    {preview.map((row, i) => (
                      <tr key={i} className={i === 0 ? 'bg-gray-50 font-medium' : ''}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-3 py-2 border-b border-gray-200 whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              onClick={handleImport}
              disabled={!file || isImporting}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {isImporting ? 'インポート中...' : 'インポート'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
