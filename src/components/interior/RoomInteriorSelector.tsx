import React, { useState, useMemo, useCallback } from 'react';
import { Trash2, ChevronDown, ChevronUp, Home, X, Copy, Wand2, Check, Search, Layers, Zap, LayoutGrid, Table2 } from 'lucide-react';
import type { Product } from '../../types/product';
import { formatPrice, getProductPrice } from '../../lib/utils';
import { UNIT_SYMBOLS } from '../../types/product';
import { getHexColor } from '../../utils/colorMapping';
import { useCartStore } from '../../stores/useCartStore';
import { useToast } from '../common/Toast';
import { ConfirmDialog } from '../common/ConfirmDialog';
import { useDebounce } from '../../hooks/useDebounce';

// 部屋タイプの定義（適用可能パーツを明確化）
const ROOM_TYPES = [
  { id: 'living', name: 'リビング', icon: '🛋️', floor: 1, group: 'main',
    applicableParts: ['flooring', 'wall', 'accent', 'door', 'electrical', 'lighting'] },
  { id: 'dining', name: 'ダイニング', icon: '🍽️', floor: 1, group: 'main',
    applicableParts: ['flooring', 'wall', 'accent', 'electrical', 'lighting'] },
  { id: 'kitchen', name: 'キッチン', icon: '🍳', floor: 1, group: 'main',
    applicableParts: ['flooring', 'wall', 'accent', 'electrical', 'lighting', 'ventilation'] },
  { id: 'entrance', name: '玄関', icon: '🚪', floor: 1, group: 'common',
    applicableParts: ['flooring', 'wall', 'accent', 'door', 'electrical', 'lighting', 'niche'] },
  { id: 'toilet1', name: 'トイレ（1階）', icon: '🚽', floor: 1, group: 'water',
    applicableParts: ['flooring', 'wall', 'accent', 'door', 'electrical', 'lighting', 'ventilation', 'handrail'] },
  { id: 'washroom', name: '洗面室', icon: '🪥', floor: 1, group: 'water',
    applicableParts: ['flooring', 'wall', 'accent', 'door', 'electrical', 'lighting', 'ventilation', 'hanger'] },
  { id: 'bathroom', name: '浴室', icon: '🛁', floor: 1, group: 'water',
    applicableParts: ['ventilation', 'handrail'] },
  { id: 'master', name: '主寝室', icon: '🛏️', floor: 2, group: 'bedroom',
    applicableParts: ['flooring', 'wall', 'accent', 'door', 'storage', 'electrical', 'lighting'] },
  { id: 'child1', name: '子供部屋1', icon: '👶', floor: 2, group: 'bedroom',
    applicableParts: ['flooring', 'wall', 'accent', 'door', 'storage', 'electrical', 'lighting'] },
  { id: 'child2', name: '子供部屋2', icon: '👶', floor: 2, group: 'bedroom',
    applicableParts: ['flooring', 'wall', 'accent', 'door', 'storage', 'electrical', 'lighting'] },
  { id: 'toilet2', name: 'トイレ（2階）', icon: '🚽', floor: 2, group: 'water',
    applicableParts: ['flooring', 'wall', 'accent', 'door', 'electrical', 'lighting', 'ventilation', 'handrail'] },
  { id: 'corridor', name: '廊下・階段', icon: '🚶', floor: 0, group: 'common',
    applicableParts: ['flooring', 'wall', 'stairs', 'electrical', 'lighting', 'handrail'] },
  { id: 'closet', name: 'クローゼット', icon: '👔', floor: 0, group: 'storage',
    applicableParts: ['flooring', 'wall', 'door', 'storage', 'electrical', 'lighting', 'hanger'] },
];

// 内装パーツカテゴリ（実際のデータに完全対応）
const INTERIOR_PARTS = [
  // === 基本内装 ===
  { id: 'flooring', name: '床材', icon: '🟫', required: true, bulkApply: true, group: 'basic', order: 1 },
  { id: 'wall', name: '壁クロス', icon: '⬜', required: true, bulkApply: true, group: 'basic', order: 2 },
  { id: 'accent', name: 'アクセントクロス/タイル', icon: '🎨', required: false, bulkApply: false, group: 'basic', order: 3 },
  // === 建具・収納 ===
  { id: 'door', name: '室内ドア', icon: '🚪', required: true, bulkApply: false, group: 'structure', order: 4 },
  { id: 'stairs', name: '階段', icon: '🪜', required: false, bulkApply: false, group: 'structure', order: 5 },
  { id: 'storage', name: '収納', icon: '🗄️', required: false, bulkApply: false, group: 'structure', order: 6 },
  { id: 'niche', name: 'ニッチ/造作', icon: '📦', required: false, bulkApply: false, group: 'structure', order: 7 },
  // === 電気・照明 ===
  { id: 'electrical', name: 'スイッチ/コンセント', icon: '🔌', required: true, bulkApply: true, group: 'electric', order: 8 },
  { id: 'lighting', name: '照明', icon: '💡', required: true, bulkApply: false, group: 'electric', order: 9 },
  // === 換気 ===
  { id: 'ventilation', name: '換気', icon: '💨', required: false, bulkApply: false, group: 'hvac', order: 10 },
  // === その他 ===
  { id: 'handrail', name: '手摺', icon: '🛡️', required: false, bulkApply: false, group: 'other', order: 11 },
  { id: 'hanger', name: '室内物干し', icon: '👕', required: false, bulkApply: false, group: 'other', order: 16 },
];

// パーツグループ定義
const PART_GROUPS = [
  { id: 'basic', name: '基本内装', icon: '🏠' },
  { id: 'structure', name: '建具・収納', icon: '🚪' },
  { id: 'electric', name: '電気・照明', icon: '💡' },
  { id: 'hvac', name: '換気', icon: '💨' },
  { id: 'other', name: 'その他', icon: '📦' },
];

// 一括適用グループ
const BULK_APPLY_GROUPS = [
  { id: 'all', name: '全室', rooms: ['all'] },
  { id: 'main', name: 'メイン居室（LDK）', rooms: ['living', 'dining', 'kitchen'] },
  { id: 'bedroom', name: '寝室・子供部屋', rooms: ['master', 'child1', 'child2'] },
  { id: 'water', name: '水回り', rooms: ['toilet1', 'toilet2', 'washroom'] },
  { id: 'common', name: '共有スペース', rooms: ['entrance', 'corridor'] },
];

interface RoomSelection {
  roomId: string;
  roomName: string;
  floor: number;
  parts: {
    [partId: string]: {
      product: Product | null;
      variantId: string | null;
    };
  };
}

interface RoomInteriorSelectorProps {
  interiorProducts: Product[];
  onSelectionsChange: (selections: RoomSelection[]) => void;
  initialSelections?: RoomSelection[];
}

export const RoomInteriorSelector: React.FC<RoomInteriorSelectorProps> = ({
  interiorProducts,
  onSelectionsChange,
  initialSelections = [],
}) => {
  const toast = useToast();
  const { addItem } = useCartStore();

  // 部屋リストの管理（全室デフォルト表示）
  const [rooms, setRooms] = useState<RoomSelection[]>(
    initialSelections.length > 0
      ? initialSelections
      : ROOM_TYPES.map(rt => ({
          roomId: rt.id,
          roomName: rt.name,
          floor: rt.floor,
          parts: {},
        }))
  );

  const [expandedRooms, setExpandedRooms] = useState<Set<string>>(new Set());
  const [selectedPartForPicker, setSelectedPartForPicker] = useState<{
    roomId: string;
    partId: string;
    bulkMode?: boolean;
    bulkGroup?: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [showBulkPanel, setShowBulkPanel] = useState(false);
  const [showConfirmAddToCart, setShowConfirmAddToCart] = useState(false);
  const [viewMode, setViewMode] = useState<'card' | 'table'>('table'); // デフォルトは表形式

  // 階ごとに部屋をグループ化
  const roomsByFloor = useMemo(() => {
    const grouped: { [floor: number]: RoomSelection[] } = { 0: [], 1: [], 2: [], 3: [] };
    rooms.forEach(room => {
      const floor = room.floor;
      if (!grouped[floor]) grouped[floor] = [];
      grouped[floor].push(room);
    });
    return grouped;
  }, [rooms]);

  // パーツタイプで製品をフィルタリング（実際のデータに完全対応）
  const getProductsForPart = useCallback((partId: string) => {
    // categoryName と subcategory の両方でマッチング
    const categoryMap: { [key: string]: { categoryNames: string[], subcategories: string[], categoryIds: string[] } } = {
      flooring: {
        categoryNames: ['床材'],
        subcategories: ['フローリング', 'ライブナチュラル'],
        categoryIds: ['flooring']
      },
      wall: {
        categoryNames: ['壁材'],
        subcategories: ['ベースクロス', '壁クロス'],
        categoryIds: ['wallpaper']
      },
      accent: {
        categoryNames: ['壁材'],
        subcategories: ['アクセントクロス', 'アクセントタイル'],
        categoryIds: ['tile']
      },
      door: {
        categoryNames: ['建具'],
        subcategories: ['室内ドア', 'ドア', 'スタンダードレーベル'],
        categoryIds: ['interior-door']
      },
      stairs: {
        categoryNames: ['階段'],
        subcategories: ['階段踏板', '階段手摺', '蹴込板'],
        categoryIds: ['stairs']
      },
      storage: {
        categoryNames: ['収納'],
        subcategories: ['クローゼット', 'システム収納', '可動棚'],
        categoryIds: ['storage']
      },
      niche: {
        categoryNames: ['造作'],
        subcategories: ['リモコンニッチ', '飾り棚ニッチ', 'ニッチ'],
        categoryIds: ['niche']
      },
      electrical: {
        categoryNames: ['電気設備'],
        subcategories: ['スイッチ', 'コンセント'],
        categoryIds: ['electrical']
      },
      lighting: {
        categoryNames: ['照明'],
        subcategories: ['ダウンライト', 'ペンダントライト', 'シーリング'],
        categoryIds: ['lighting']
      },
      ventilation: {
        categoryNames: ['換気'],
        subcategories: ['換気システム', '換気扇', '暖房乾燥機'],
        categoryIds: ['ventilation']
      },
      handrail: {
        categoryNames: ['手摺'],
        subcategories: ['室内手摺'],
        categoryIds: ['handrail']
      },
      hanger: {
        categoryNames: ['物干し'],
        subcategories: ['室内物干し', 'ホスクリーン'],
        categoryIds: ['hanger']
      },
    };

    const mapping = categoryMap[partId];
    if (!mapping) return [];

    let products = interiorProducts.filter(p => {
      // カテゴリ名でマッチ
      const categoryMatch = mapping.categoryNames.some(cat =>
        p.categoryName === cat || p.categoryName.includes(cat)
      );
      // サブカテゴリでマッチ
      const subcategoryMatch = p.subcategory && mapping.subcategories.some(sub =>
        p.subcategory?.includes(sub)
      );
      // カテゴリIDでマッチ
      const categoryIdMatch = mapping.categoryIds.some(id =>
        p.categoryId === id || p.categoryId.includes(id)
      );

      return categoryMatch || subcategoryMatch || categoryIdMatch;
    });

    // 検索フィルター（デバウンス適用）
    if (debouncedSearchQuery) {
      const q = debouncedSearchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.manufacturer.toLowerCase().includes(q) ||
        p.subcategory?.toLowerCase().includes(q) ||
        p.variants.some(v => v.color.toLowerCase().includes(q))
      );
    }

    // 標準品を先に、オプション品を後に
    products.sort((a, b) => {
      const priceA = getProductPrice(a.pricing, 'LACIE', 999999);
      const priceB = getProductPrice(b.pricing, 'LACIE', 999999);
      return priceA - priceB;
    });

    return products;
  }, [interiorProducts, debouncedSearchQuery]);

  // 部屋の展開/折りたたみ
  const toggleRoom = (roomId: string) => {
    setExpandedRooms(prev => {
      const next = new Set(prev);
      if (next.has(roomId)) {
        next.delete(roomId);
      } else {
        next.add(roomId);
      }
      return next;
    });
  };

  // 全部屋を展開/折りたたみ
  const toggleAllRooms = (expand: boolean) => {
    if (expand) {
      setExpandedRooms(new Set(rooms.map(r => r.roomId)));
    } else {
      setExpandedRooms(new Set());
    }
  };

  // 部屋の追加
  const addRoom = (roomType: typeof ROOM_TYPES[0]) => {
    const existingCount = rooms.filter(r => r.roomId.startsWith(roomType.id)).length;
    const newRoom: RoomSelection = {
      roomId: `${roomType.id}-${existingCount + 1}`,
      roomName: existingCount > 0 ? `${roomType.name}${existingCount + 1}` : roomType.name,
      floor: roomType.floor,
      parts: {},
    };
    const newRooms = [...rooms, newRoom];
    setRooms(newRooms);
    setExpandedRooms(prev => new Set([...prev, newRoom.roomId]));
    onSelectionsChange(newRooms);
  };

  // 部屋の削除
  const removeRoom = (roomId: string) => {
    const newRooms = rooms.filter(r => r.roomId !== roomId);
    setRooms(newRooms);
    onSelectionsChange(newRooms);
  };

  // パーツの選択
  const selectPart = (roomId: string, partId: string, product: Product, variantId: string) => {
    const newRooms = rooms.map(room => {
      if (room.roomId === roomId) {
        return {
          ...room,
          parts: {
            ...room.parts,
            [partId]: { product, variantId },
          },
        };
      }
      return room;
    });
    setRooms(newRooms);
    setSelectedPartForPicker(null);
    setSearchQuery('');
    onSelectionsChange(newRooms);
    toast.success('選択完了', `${product.name}を設定しました`);
  };

  // 一括適用
  const bulkApplyPart = (partId: string, product: Product, variantId: string, groupId: string) => {
    const group = BULK_APPLY_GROUPS.find(g => g.id === groupId);
    if (!group) return;

    const newRooms = rooms.map(room => {
      const roomType = ROOM_TYPES.find(rt => room.roomId.startsWith(rt.id));
      const shouldApply = groupId === 'all' ||
        (roomType && group.rooms.includes(roomType.group || '')) ||
        group.rooms.includes(room.roomId.split('-')[0]);

      if (shouldApply) {
        return {
          ...room,
          parts: {
            ...room.parts,
            [partId]: { product, variantId },
          },
        };
      }
      return room;
    });

    setRooms(newRooms);
    setSelectedPartForPicker(null);
    setSearchQuery('');
    onSelectionsChange(newRooms);

    const appliedCount = newRooms.filter(r => r.parts[partId]?.product?.id === product.id).length;
    toast.success('一括適用完了', `${appliedCount}室に${product.name}を適用しました`);
  };

  // パーツの削除
  const removePart = (roomId: string, partId: string) => {
    const newRooms = rooms.map(room => {
      if (room.roomId === roomId) {
        const newParts = { ...room.parts };
        delete newParts[partId];
        return { ...room, parts: newParts };
      }
      return room;
    });
    setRooms(newRooms);
    onSelectionsChange(newRooms);
  };

  // カートに追加
  const addSelectionsToCart = () => {
    let addedCount = 0;
    rooms.forEach(room => {
      Object.entries(room.parts).forEach(([_partId, selection]) => {
        if (selection.product) {
          const variant = selection.product.variants.find(v => v.id === selection.variantId);
          addItem(selection.product, 1, variant);
          addedCount++;
        }
      });
    });
    setShowConfirmAddToCart(false);
    toast.success('カートに追加', `${addedCount}件の内装アイテムをカートに追加しました`);
  };

  // 標準仕様で一括設定
  const applyStandardItems = () => {
    const newRooms = rooms.map(room => {
      const newParts = { ...room.parts };

      INTERIOR_PARTS.filter(p => p.required).forEach(part => {
        if (!newParts[part.id]?.product) {
          const products = getProductsForPart(part.id);
          const standardProduct = products.find(p => {
            // plan または planId の両方に対応
            const price = getProductPrice(p.pricing);
            return price === 0;
          });
          if (standardProduct && standardProduct.variants.length > 0) {
            newParts[part.id] = {
              product: standardProduct,
              variantId: standardProduct.variants[0].id,
            };
          }
        }
      });

      return { ...room, parts: newParts };
    });

    setRooms(newRooms);
    onSelectionsChange(newRooms);
    toast.success('標準仕様を適用', '未設定の必須項目に標準仕様を設定しました');
  };

  // 合計金額の計算（plan / planId 両方対応）
  const totalPrice = useMemo(() => {
    let total = 0;
    rooms.forEach(room => {
      Object.values(room.parts).forEach(part => {
        if (part.product) {
          const price = getProductPrice(part.product.pricing);
          total += price;
        }
      });
    });
    return total;
  }, [rooms]);

  // 進捗計算
  const progress = useMemo(() => {
    let total = 0;
    let completed = 0;
    rooms.forEach(room => {
      INTERIOR_PARTS.filter(p => p.required).forEach(part => {
        total++;
        if (room.parts[part.id]?.product) completed++;
      });
    });
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  }, [rooms]);

  const floorNames: { [key: number]: string } = {
    0: '共有',
    1: '1階',
    2: '2階',
    3: '3階',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Home className="w-6 h-6" />
            <h2 className="text-lg font-bold">部屋別内装プランナー</h2>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-80">オプション合計</p>
            <p className="text-xl font-bold">{formatPrice(totalPrice)}</p>
          </div>
        </div>

        {/* 進捗バー */}
        <div className="mt-3">
          <div className="flex justify-between text-xs mb-1">
            <span>必須項目の選択進捗</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-green-400 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* クイックアクション */}
      <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-b border-indigo-100 dark:border-indigo-800">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
            <Zap className="w-3 h-3" />
            時短ツール:
          </span>

          <button
            onClick={() => setShowBulkPanel(!showBulkPanel)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              showBulkPanel
                ? 'bg-indigo-600 text-white'
                : 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-gray-600'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            全室一括設定
          </button>

          <button
            onClick={applyStandardItems}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-700 text-green-600 dark:text-green-400 rounded-full text-xs font-medium hover:bg-green-100 dark:hover:bg-gray-600 transition-colors"
          >
            <Wand2 className="w-3.5 h-3.5" />
            標準仕様で自動設定
          </button>

          {viewMode === 'card' && (
            <button
              onClick={() => toggleAllRooms(expandedRooms.size < rooms.length)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              {expandedRooms.size < rooms.length ? (
                <>
                  <ChevronDown className="w-3.5 h-3.5" />
                  全て展開
                </>
              ) : (
                <>
                  <ChevronUp className="w-3.5 h-3.5" />
                  全て閉じる
                </>
              )}
            </button>
          )}

          {/* 表示モード切替 */}
          <div className="ml-auto flex items-center gap-1 bg-white dark:bg-gray-700 rounded-full p-1">
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                viewMode === 'table'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <Table2 className="w-3.5 h-3.5" />
              表形式
            </button>
            <button
              onClick={() => setViewMode('card')}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                viewMode === 'card'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              カード
            </button>
          </div>
        </div>
      </div>

      {/* 一括設定パネル */}
      {showBulkPanel && (
        <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 border-b border-indigo-200 dark:border-indigo-800">
          <h3 className="text-sm font-bold text-indigo-800 dark:text-indigo-200 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            一括設定（同じ素材を複数の部屋に適用）
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {INTERIOR_PARTS.filter(p => p.bulkApply).map(part => (
              <button
                key={part.id}
                onClick={() => setSelectedPartForPicker({ roomId: '', partId: part.id, bulkMode: true, bulkGroup: 'all' })}
                className="flex items-center gap-2 p-3 bg-white dark:bg-gray-700 rounded-xl border-2 border-indigo-200 dark:border-indigo-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors text-left"
              >
                <span className="text-xl">{part.icon}</span>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{part.name}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400">全室に適用</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 表形式ビュー */}
      {viewMode === 'table' && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 dark:bg-gray-700 sticky top-0">
              <tr>
                <th className="px-3 py-3 text-left font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap border-b border-gray-200 dark:border-gray-600">
                  部屋
                </th>
                {INTERIOR_PARTS.filter(p => ['flooring', 'wall', 'accent', 'door', 'lighting'].includes(p.id)).map(part => (
                  <th
                    key={part.id}
                    className="px-2 py-3 text-center font-semibold text-gray-700 dark:text-gray-200 whitespace-nowrap border-b border-gray-200 dark:border-gray-600 min-w-[100px]"
                  >
                    <span className="flex flex-col items-center gap-1">
                      <span className="text-lg">{part.icon}</span>
                      <span className="text-xs">{part.name}</span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {rooms.map((room, index) => {
                const roomType = ROOM_TYPES.find(rt => room.roomId.startsWith(rt.id));
                return (
                  <tr
                    key={room.roomId}
                    className={`${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-750'} hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors`}
                  >
                    <td className="px-3 py-3 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{roomType?.icon || '🏠'}</span>
                        <span>{room.roomName}</span>
                        <span className="text-xs text-gray-400">
                          {room.floor === 0 ? '共有' : `${room.floor}F`}
                        </span>
                      </div>
                    </td>
                    {INTERIOR_PARTS.filter(p => ['flooring', 'wall', 'accent', 'door', 'lighting'].includes(p.id)).map(part => {
                      const selection = room.parts[part.id];
                      const selectedVariant = selection?.product?.variants.find(
                        v => v.id === selection?.variantId
                      );
                      const isApplicable = roomType?.applicableParts?.includes(part.id) ?? true;

                      if (!isApplicable) {
                        return (
                          <td key={part.id} className="px-2 py-3 text-center">
                            <span className="text-gray-300 dark:text-gray-600">-</span>
                          </td>
                        );
                      }

                      return (
                        <td key={part.id} className="px-2 py-3">
                          <button
                            onClick={() => setSelectedPartForPicker({ roomId: room.roomId, partId: part.id })}
                            className={`w-full flex items-center justify-center gap-2 p-2 rounded-lg transition-all ${
                              selection?.product
                                ? 'bg-teal-50 dark:bg-teal-900/30 border border-teal-300 dark:border-teal-600 hover:bg-teal-100 dark:hover:bg-teal-900/50'
                                : part.required
                                ? 'bg-orange-50 dark:bg-orange-900/20 border border-dashed border-orange-300 dark:border-orange-600 hover:bg-orange-100 dark:hover:bg-orange-900/30'
                                : 'bg-gray-50 dark:bg-gray-700 border border-dashed border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                            }`}
                          >
                            {selection?.product ? (
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-8 h-8 rounded-lg border-2 border-white shadow-md flex-shrink-0"
                                  style={{
                                    backgroundColor: getHexColor(
                                      selectedVariant?.colorCode || selectedVariant?.color || ''
                                    ),
                                  }}
                                />
                                <div className="text-left min-w-0">
                                  <p className="text-xs font-medium text-gray-700 dark:text-gray-200 truncate max-w-[80px]">
                                    {selectedVariant?.color || '選択済'}
                                  </p>
                                </div>
                              </div>
                            ) : (
                              <span className={`text-xs ${part.required ? 'text-orange-500' : 'text-gray-400'}`}>
                                {part.required ? '要選択' : '未設定'}
                              </span>
                            )}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* カード形式ビュー（部屋リスト） */}
      {viewMode === 'card' && (
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {[1, 2, 0].map(floor => {
          const floorRooms = roomsByFloor[floor] || [];
          if (floorRooms.length === 0) return null;

          return (
            <div key={floor} className="p-4">
              <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center text-xs">
                  {floor === 0 ? '共' : `${floor}F`}
                </span>
                {floorNames[floor]}
              </h3>

              <div className="space-y-2">
                {floorRooms.map(room => {
                  const isExpanded = expandedRooms.has(room.roomId);
                  const roomType = ROOM_TYPES.find(rt => room.roomId.startsWith(rt.id));
                  const completedParts = INTERIOR_PARTS.filter(
                    p => p.required && room.parts[p.id]?.product
                  ).length;
                  const requiredParts = INTERIOR_PARTS.filter(p => p.required).length;
                  const isComplete = completedParts === requiredParts;

                  return (
                    <div
                      key={room.roomId}
                      className={`border rounded-xl overflow-hidden transition-colors ${
                        isComplete
                          ? 'border-green-300 dark:border-green-700 bg-green-50/50 dark:bg-green-900/20'
                          : 'border-gray-200 dark:border-gray-600'
                      }`}
                    >
                      {/* 部屋ヘッダー */}
                      <button
                        onClick={() => toggleRoom(room.roomId)}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{roomType?.icon || '🏠'}</span>
                          <span className="font-medium text-gray-900 dark:text-gray-100">{room.roomName}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            isComplete
                              ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300'
                              : 'bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-300'
                          }`}>
                            {isComplete ? (
                              <span className="flex items-center gap-1">
                                <Check className="w-3 h-3" />完了
                              </span>
                            ) : (
                              `${completedParts}/${requiredParts}`
                            )}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeRoom(room.roomId);
                            }}
                            className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded text-red-500"
                            aria-label="部屋を削除"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </button>

                      {/* パーツ選択エリア（部屋タイプに応じたパーツのみ表示） */}
                      {isExpanded && (
                        <div className="p-3 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-200 dark:border-gray-600">
                          {/* グループ別パーツ表示 */}
                          {PART_GROUPS.map(group => {
                            const groupParts = INTERIOR_PARTS.filter(p =>
                              p.group === group.id &&
                              (roomType?.applicableParts?.includes(p.id) ?? true)
                            );
                            if (groupParts.length === 0) return null;

                            return (
                              <div key={group.id} className="mb-4 last:mb-0">
                                <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                                  <span>{group.icon}</span>
                                  {group.name}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                  {groupParts.map(part => {
                                    const selection = room.parts[part.id];
                                    const selectedVariant = selection?.product?.variants.find(
                                      v => v.id === selection?.variantId
                                    );

                              return (
                                <div
                                  key={part.id}
                                  className={`p-3 rounded-xl border-2 transition-all ${
                                    selection?.product
                                      ? 'border-teal-500 dark:border-teal-400 bg-teal-50 dark:bg-teal-900/30'
                                      : part.required
                                      ? 'border-orange-300 dark:border-orange-600 bg-orange-50 dark:bg-orange-900/20'
                                      : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800'
                                  }`}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1">
                                      <span>{part.icon}</span>
                                      {part.name}
                                      {part.required && (
                                        <span className="text-red-500 text-xs">*</span>
                                      )}
                                    </span>
                                    {selection?.product && (
                                      <button
                                        onClick={() => removePart(room.roomId, part.id)}
                                        className="p-1 hover:bg-red-100 dark:hover:bg-red-900/30 rounded"
                                        aria-label="選択を解除"
                                      >
                                        <X className="w-3 h-3 text-red-500" />
                                      </button>
                                    )}
                                  </div>

                                  {selection?.product ? (
                                    <div className="flex items-center gap-2">
                                      {selectedVariant && (
                                        <div
                                          className="w-8 h-8 rounded-lg border-2 border-gray-300 dark:border-gray-500 flex-shrink-0"
                                          style={{
                                            backgroundColor: getHexColor(
                                              selectedVariant.colorCode || selectedVariant.color
                                            ),
                                          }}
                                        />
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium text-gray-900 dark:text-gray-100 truncate">
                                          {selection.product.name}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                          {selectedVariant?.color}
                                        </p>
                                      </div>
                                    </div>
                                  ) : (
                                    <button
                                      onClick={() =>
                                        setSelectedPartForPicker({
                                          roomId: room.roomId,
                                          partId: part.id,
                                        })
                                      }
                                      className="w-full py-2 border-2 border-dashed border-gray-300 dark:border-gray-500 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                                    >
                                      + 選択する
                                    </button>
                                  )}
                                    </div>
                                  );
                                })}
                                </div>
                              </div>
                            );
                          })}

                          {/* 他の部屋にコピー */}
                          {Object.keys(room.parts).length > 0 && (
                            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                              <button
                                onClick={() => {
                                  // この部屋の設定を他の同グループの部屋にコピー
                                  const roomType = ROOM_TYPES.find(rt => room.roomId.startsWith(rt.id));
                                  if (!roomType) return;

                                  const newRooms = rooms.map(r => {
                                    const rType = ROOM_TYPES.find(rt => r.roomId.startsWith(rt.id));
                                    if (r.roomId !== room.roomId && rType?.group === roomType.group) {
                                      return { ...r, parts: { ...room.parts } };
                                    }
                                    return r;
                                  });
                                  setRooms(newRooms);
                                  onSelectionsChange(newRooms);
                                  toast.success('コピー完了', '同じタイプの部屋に設定をコピーしました');
                                }}
                                className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                              >
                                <Copy className="w-3.5 h-3.5" />
                                この設定を同タイプの部屋にコピー
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      )}

      {/* 部屋追加ボタン */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">部屋を追加</p>
        <div className="flex flex-wrap gap-2">
          {ROOM_TYPES.map(rt => (
            <button
              key={rt.id}
              onClick={() => addRoom(rt)}
              className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full text-sm transition-colors text-gray-700 dark:text-gray-300"
            >
              <span>{rt.icon}</span>
              <span>{rt.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* カートに追加ボタン */}
      {progress > 0 && (
        <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setShowConfirmAddToCart(true)}
            className="w-full py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-bold hover:from-teal-600 hover:to-emerald-600 transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            内装設定をカートに追加
          </button>
        </div>
      )}

      {/* 製品ピッカーモーダル */}
      {selectedPartForPicker && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center">
          <div className="bg-white dark:bg-gray-800 w-full max-w-2xl max-h-[85vh] rounded-t-2xl sm:rounded-2xl overflow-hidden">
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900 dark:text-gray-100">
                  {INTERIOR_PARTS.find(p => p.id === selectedPartForPicker.partId)?.name}を選択
                  {selectedPartForPicker.bulkMode && (
                    <span className="ml-2 text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                      一括適用モード
                    </span>
                  )}
                </h3>
                <button
                  onClick={() => {
                    setSelectedPartForPicker(null);
                    setSearchQuery('');
                  }}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                  aria-label="閉じる"
                >
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              {/* 検索 */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="商品名・メーカー・色で検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* 一括適用先の選択 */}
              {selectedPartForPicker.bulkMode && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {BULK_APPLY_GROUPS.map(group => (
                    <button
                      key={group.id}
                      onClick={() => setSelectedPartForPicker({ ...selectedPartForPicker, bulkGroup: group.id })}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        selectedPartForPicker.bulkGroup === group.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {group.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="overflow-y-auto max-h-[calc(85vh-140px)] p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {getProductsForPart(selectedPartForPicker.partId).map(product => (
                  <div
                    key={product.id}
                    className="border border-gray-200 dark:border-gray-600 rounded-xl p-3 hover:border-teal-500 dark:hover:border-teal-400 transition-colors bg-white dark:bg-gray-700"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">{product.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{product.manufacturer}</p>

                    {/* カラーバリアント */}
                    <div className="flex flex-wrap gap-1.5">
                      {product.variants.map(variant => {
                        const hexColor = getHexColor(variant.colorCode || variant.color);
                        return (
                          <button
                            key={variant.id}
                            onClick={() => {
                              if (selectedPartForPicker.bulkMode && selectedPartForPicker.bulkGroup) {
                                bulkApplyPart(
                                  selectedPartForPicker.partId,
                                  product,
                                  variant.id,
                                  selectedPartForPicker.bulkGroup
                                );
                              } else {
                                selectPart(
                                  selectedPartForPicker.roomId,
                                  selectedPartForPicker.partId,
                                  product,
                                  variant.id
                                );
                              }
                            }}
                            className="group relative"
                            title={variant.color}
                          >
                            <div
                              className="w-10 h-10 rounded-lg border-2 border-gray-300 dark:border-gray-500 hover:border-teal-500 dark:hover:border-teal-400 transition-colors hover:scale-110"
                              style={{ backgroundColor: hexColor }}
                            />
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                              <div className="bg-gray-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
                                {variant.color}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* 価格（plan / planId 両方対応） */}
                    <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-600">
                      <span className={`text-sm font-bold ${
                        (() => {
                          const price = product.pricing.find(
                            p => p.plan === 'LACIE' || p.planId === 'LACIE'
                          )?.price ?? 0;
                          return price === 0 ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-gray-100';
                        })()
                      }`}>
                        {(() => {
                          const price = product.pricing.find(
                            p => p.plan === 'LACIE' || p.planId === 'LACIE'
                          )?.price ?? 0;
                          return price === 0
                            ? '✓ 標準仕様（追加費用なし）'
                            : `+${formatPrice(price)}/${UNIT_SYMBOLS[product.unit] || product.unit}`;
                        })()}
                      </span>
                    </div>
                  </div>
                ))}

                {getProductsForPart(selectedPartForPicker.partId).length === 0 && (
                  <div className="col-span-2 py-12 text-center text-gray-500 dark:text-gray-400">
                    {debouncedSearchQuery ? '検索結果がありません' : 'このカテゴリの製品がありません'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* カート追加確認ダイアログ */}
      <ConfirmDialog
        isOpen={showConfirmAddToCart}
        onClose={() => setShowConfirmAddToCart(false)}
        onConfirm={addSelectionsToCart}
        title="内装設定をカートに追加"
        message={`選択した内装設定（${rooms.reduce((acc, r) => acc + Object.keys(r.parts).length, 0)}件）をカートに追加しますか？`}
        variant="info"
        confirmText="追加する"
      />
    </div>
  );
};
