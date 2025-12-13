import React, { useState, useMemo } from 'react';
import { Trash2, ChevronDown, ChevronUp, Home, X } from 'lucide-react';
import type { Product } from '../../types/product';
import { formatPrice } from '../../lib/utils';
import { UNIT_SYMBOLS } from '../../types/product';
import { getHexColor } from '../../utils/colorMapping';

// 部屋タイプの定義
const ROOM_TYPES = [
  { id: 'living', name: 'リビング', icon: '🛋️', floor: 1 },
  { id: 'dining', name: 'ダイニング', icon: '🍽️', floor: 1 },
  { id: 'kitchen', name: 'キッチン', icon: '🍳', floor: 1 },
  { id: 'entrance', name: '玄関', icon: '🚪', floor: 1 },
  { id: 'toilet1', name: 'トイレ（1階）', icon: '🚽', floor: 1 },
  { id: 'washroom', name: '洗面室', icon: '🪥', floor: 1 },
  { id: 'bathroom', name: '浴室', icon: '🛁', floor: 1 },
  { id: 'master', name: '主寝室', icon: '🛏️', floor: 2 },
  { id: 'child1', name: '子供部屋1', icon: '👶', floor: 2 },
  { id: 'child2', name: '子供部屋2', icon: '👶', floor: 2 },
  { id: 'toilet2', name: 'トイレ（2階）', icon: '🚽', floor: 2 },
  { id: 'corridor', name: '廊下・階段', icon: '🚶', floor: 0 },
  { id: 'closet', name: 'クローゼット', icon: '👔', floor: 0 },
];

// 内装パーツカテゴリ
const INTERIOR_PARTS = [
  { id: 'flooring', name: '床材', icon: '🟫', required: true },
  { id: 'wall', name: '壁クロス', icon: '⬜', required: true },
  { id: 'ceiling', name: '天井クロス', icon: '⬜', required: false },
  { id: 'baseboard', name: '巾木', icon: '▬', required: false },
  { id: 'accent', name: 'アクセントクロス', icon: '🎨', required: false },
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

  const [expandedRooms, setExpandedRooms] = useState<Set<string>>(new Set(['living']));
  const [selectedPartForPicker, setSelectedPartForPicker] = useState<{
    roomId: string;
    partId: string;
  } | null>(null);

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
  const getProductsForPart = (partId: string) => {
    const categoryMap: { [key: string]: string[] } = {
      flooring: ['床材', 'フローリング'],
      wall: ['壁クロス', 'クロス', '壁紙'],
      ceiling: ['天井クロス', '天井'],
      baseboard: ['巾木'],
      accent: ['アクセントクロス', 'アクセント'],
    };
    const categories = categoryMap[partId] || [];
    return interiorProducts.filter(p =>
      categories.some(cat =>
        p.categoryName.includes(cat) || p.subcategory?.includes(cat)
      )
    );
  };

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
    onSelectionsChange(newRooms);
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

  // 合計金額の計算
  const totalPrice = useMemo(() => {
    let total = 0;
    rooms.forEach(room => {
      Object.values(room.parts).forEach(part => {
        if (part.product) {
          const price = part.product.pricing.find(p => p.plan === 'LACIE' || p.planId === 'LACIE')?.price || 0;
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
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Home className="w-6 h-6" />
            <h2 className="text-lg font-bold">部屋別内装設定</h2>
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

      {/* 部屋リスト */}
      <div className="divide-y divide-gray-100">
        {[1, 2, 0].map(floor => {
          const floorRooms = roomsByFloor[floor] || [];
          if (floorRooms.length === 0) return null;

          return (
            <div key={floor} className="p-4">
              <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-200 rounded-lg flex items-center justify-center text-xs">
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

                  return (
                    <div
                      key={room.roomId}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      {/* 部屋ヘッダー */}
                      <button
                        onClick={() => toggleRoom(room.roomId)}
                        className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{roomType?.icon || '🏠'}</span>
                          <span className="font-medium text-gray-900">{room.roomName}</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                            {completedParts}/{requiredParts}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeRoom(room.roomId);
                            }}
                            className="p-1 hover:bg-red-100 rounded text-red-500"
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
                        <div className="p-3 bg-gray-50 border-t border-gray-200">
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
                                      ? 'border-teal-500 bg-teal-50'
                                      : part.required
                                      ? 'border-orange-300 bg-orange-50'
                                      : 'border-gray-200 bg-white'
                                  }`}
                                >
                                  <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                      <span>{part.icon}</span>
                                      {part.name}
                                      {part.required && (
                                        <span className="text-red-500 text-xs">*</span>
                                      )}
                                    </span>
                                    {selection?.product && (
                                      <button
                                        onClick={() => removePart(room.roomId, part.id)}
                                        className="p-1 hover:bg-red-100 rounded"
                                      >
                                        <X className="w-3 h-3 text-red-500" />
                                      </button>
                                    )}
                                  </div>

                                  {selection?.product ? (
                                    <div className="flex items-center gap-2">
                                      {selectedVariant && (
                                        <div
                                          className="w-8 h-8 rounded-lg border-2 border-gray-300 flex-shrink-0"
                                          style={{
                                            backgroundColor: getHexColor(
                                              selectedVariant.colorCode || selectedVariant.color
                                            ),
                                          }}
                                        />
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium text-gray-900 truncate">
                                          {selection.product.name}
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">
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
                                      className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-500 hover:border-teal-500 hover:text-teal-600 transition-colors"
                                    >
                                      + 選択する
                                    </button>
                                  )}
                                </div>
                              );
                            })}
                          </div>
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
      <div className="p-4 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-700 mb-2">部屋を追加</p>
        <div className="flex flex-wrap gap-2">
          {ROOM_TYPES.map(rt => (
            <button
              key={rt.id}
              onClick={() => addRoom(rt)}
              className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors"
            >
              <span>{rt.icon}</span>
              <span>{rt.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 製品ピッカーモーダル */}
      {selectedPartForPicker && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-t-2xl sm:rounded-2xl overflow-hidden">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">
                {INTERIOR_PARTS.find(p => p.id === selectedPartForPicker.partId)?.name}を選択
              </h3>
              <button
                onClick={() => setSelectedPartForPicker(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto max-h-[calc(80vh-60px)] p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {getProductsForPart(selectedPartForPicker.partId).map(product => (
                  <div
                    key={product.id}
                    className="border border-gray-200 rounded-xl p-3 hover:border-teal-500 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 text-sm mb-2">{product.name}</h4>
                    <p className="text-xs text-gray-500 mb-3">{product.manufacturer}</p>

                    {/* カラーバリアント */}
                    <div className="flex flex-wrap gap-1">
                      {product.variants.map(variant => {
                        const hexColor = getHexColor(variant.colorCode || variant.color);
                        return (
                          <button
                            key={variant.id}
                            onClick={() =>
                              selectPart(
                                selectedPartForPicker.roomId,
                                selectedPartForPicker.partId,
                                product,
                                variant.id
                              )
                            }
                            className="group relative"
                            title={variant.color}
                          >
                            <div
                              className="w-8 h-8 rounded-lg border-2 border-gray-300 hover:border-teal-500 transition-colors"
                              style={{ backgroundColor: hexColor }}
                            />
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="bg-gray-900 text-white text-[10px] px-1.5 py-0.5 rounded whitespace-nowrap">
                                {variant.color}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* 価格 */}
                    <div className="mt-3 pt-2 border-t border-gray-100">
                      <span className="text-sm font-bold text-gray-900">
                        {(() => {
                          const price = product.pricing.find(
                            p => p.plan === 'LACIE' || p.planId === 'LACIE'
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
                  <div className="col-span-2 py-12 text-center text-gray-500">
                    このカテゴリの製品がありません
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
