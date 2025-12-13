import React, { useState, useMemo, useCallback } from 'react';
import { Trash2, ChevronDown, ChevronUp, Home, X, Copy, Wand2, Check, Search, Layers, Zap } from 'lucide-react';
import type { Product, ProductVariant } from '../../types/product';
import { formatPrice } from '../../lib/utils';
import { UNIT_SYMBOLS } from '../../types/product';
import { getHexColor } from '../../utils/colorMapping';
import { useCartStore } from '../../stores/useCartStore';
import { useToast } from '../common/Toast';
import { ConfirmDialog } from '../common/ConfirmDialog';

// 部屋タイプの定義
const ROOM_TYPES = [
  { id: 'living', name: 'リビング', icon: '🛋️', floor: 1, group: 'main' },
  { id: 'dining', name: 'ダイニング', icon: '🍽️', floor: 1, group: 'main' },
  { id: 'kitchen', name: 'キッチン', icon: '🍳', floor: 1, group: 'main' },
  { id: 'entrance', name: '玄関', icon: '🚪', floor: 1, group: 'common' },
  { id: 'toilet1', name: 'トイレ（1階）', icon: '🚽', floor: 1, group: 'water' },
  { id: 'washroom', name: '洗面室', icon: '🪥', floor: 1, group: 'water' },
  { id: 'bathroom', name: '浴室', icon: '🛁', floor: 1, group: 'water' },
  { id: 'master', name: '主寝室', icon: '🛏️', floor: 2, group: 'bedroom' },
  { id: 'child1', name: '子供部屋1', icon: '👶', floor: 2, group: 'bedroom' },
  { id: 'child2', name: '子供部屋2', icon: '👶', floor: 2, group: 'bedroom' },
  { id: 'toilet2', name: 'トイレ（2階）', icon: '🚽', floor: 2, group: 'water' },
  { id: 'corridor', name: '廊下・階段', icon: '🚶', floor: 0, group: 'common' },
  { id: 'closet', name: 'クローゼット', icon: '👔', floor: 0, group: 'storage' },
];

// 内装パーツカテゴリ
const INTERIOR_PARTS = [
  { id: 'flooring', name: '床材', icon: '🟫', required: true, bulkApply: true },
  { id: 'wall', name: '壁クロス', icon: '⬜', required: true, bulkApply: true },
  { id: 'ceiling', name: '天井クロス', icon: '⬜', required: false, bulkApply: true },
  { id: 'baseboard', name: '巾木', icon: '▬', required: false, bulkApply: true },
  { id: 'accent', name: 'アクセントクロス', icon: '🎨', required: false, bulkApply: false },
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

  // 部屋リストの管理
  const [rooms, setRooms] = useState<RoomSelection[]>(
    initialSelections.length > 0
      ? initialSelections
      : ROOM_TYPES.slice(0, 8).map(rt => ({
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
  const [showBulkPanel, setShowBulkPanel] = useState(false);
  const [showConfirmAddToCart, setShowConfirmAddToCart] = useState(false);

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

  // パーツタイプで製品をフィルタリング
  const getProductsForPart = useCallback((partId: string) => {
    const categoryMap: { [key: string]: string[] } = {
      flooring: ['床材', 'フローリング'],
      wall: ['壁クロス', 'クロス', '壁紙'],
      ceiling: ['天井クロス', '天井'],
      baseboard: ['巾木'],
      accent: ['アクセントクロス', 'アクセント'],
    };
    const categories = categoryMap[partId] || [];
    let products = interiorProducts.filter(p =>
      categories.some(cat =>
        p.categoryName.includes(cat) || p.subcategory?.includes(cat)
      )
    );

    // 検索フィルター
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.manufacturer.toLowerCase().includes(q) ||
        p.variants.some(v => v.color.toLowerCase().includes(q))
      );
    }

    return products;
  }, [interiorProducts, searchQuery]);

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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(room.parts).forEach(([_partId, selection]) => {
        if (selection.product) {
          const variant = selection.product.variants.find(v => v.id === selection.variantId);
          addItem(selection.product as unknown as Product, 1, variant as unknown as ProductVariant);
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
            const price = p.pricing.find(pr => pr.planId === 'LACIE')?.price || 0;
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

  // 合計金額の計算
  const totalPrice = useMemo(() => {
    let total = 0;
    rooms.forEach(room => {
      Object.values(room.parts).forEach(part => {
        if (part.product) {
          const price = part.product.pricing.find(p => p.planId === 'LACIE')?.price || 0;
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

      {/* 部屋リスト */}
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

                      {/* パーツ選択エリア */}
                      {isExpanded && (
                        <div className="p-3 bg-gray-50 dark:bg-gray-700/30 border-t border-gray-200 dark:border-gray-600">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                            {INTERIOR_PARTS.map(part => {
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

                    {/* 価格 */}
                    <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-600">
                      <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                        {(() => {
                          const price = product.pricing.find(
                            p => p.planId === 'LACIE'
                          )?.price || 0;
                          return price === 0
                            ? '標準仕様'
                            : `${formatPrice(price)}/${UNIT_SYMBOLS[product.unit] || product.unit}`;
                        })()}
                      </span>
                    </div>
                  </div>
                ))}

                {getProductsForPart(selectedPartForPicker.partId).length === 0 && (
                  <div className="col-span-2 py-12 text-center text-gray-500 dark:text-gray-400">
                    {searchQuery ? '検索結果がありません' : 'このカテゴリの製品がありません'}
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
