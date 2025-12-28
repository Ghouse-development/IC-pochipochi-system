import React, { useState, useMemo } from 'react';
import { Check, Home, ChevronDown, ChevronUp, Palette, Layers, ArrowRight } from 'lucide-react';
import { useFloorPlanStore, ROOM_TYPE_NAMES, type Room } from '../../stores/useFloorPlanStore';
import type { ItemWithDetails } from '../../types/database';

interface RoomFinishSelectorProps {
  // 選択タイプ: floor=床材, wallpaper=壁クロス, ceiling=天井クロス
  type: 'floor' | 'wallpaper' | 'ceiling';
  // 選択可能なアイテム一覧
  items: ItemWithDetails[];
  // アイテムの画像取得関数
  getImageUrl: (item: ItemWithDetails) => string | null;
  // メイン選択変更時
  onMainSelectionChange?: (itemId: string) => void;
}

const TYPE_LABELS = {
  floor: { label: '床材', icon: Layers, color: 'amber' },
  wallpaper: { label: '壁クロス', icon: Palette, color: 'blue' },
  ceiling: { label: '天井クロス', icon: Home, color: 'purple' },
};

export const RoomFinishSelector: React.FC<RoomFinishSelectorProps> = ({
  type,
  items,
  getImageUrl,
  onMainSelectionChange: _onMainSelectionChange,
}) => {
  const { rooms, mainSelections, setMainSelection: _setMainSelection, setRoomSelection } = useFloorPlanStore();
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedFloors, setExpandedFloors] = useState<number[]>([1, 2]);

  const typeConfig = TYPE_LABELS[type];
  const Icon = typeConfig.icon;

  // メインで選択されているアイテム
  const mainSelectedId = mainSelections[type];
  const mainSelectedItem = items.find(item => item.id === mainSelectedId);

  // 階ごとに部屋をグループ化
  const roomsByFloor = useMemo(() => {
    return rooms.reduce((acc, room) => {
      if (!acc[room.floor]) acc[room.floor] = [];
      acc[room.floor].push(room);
      return acc;
    }, {} as Record<number, Room[]>);
  }, [rooms]);

  // 床材タイプでフィルタリング（床材の場合のみ）
  const getAvailableItemsForRoom = (room: Room) => {
    if (type !== 'floor') return items;

    // 床材タイプに応じてフィルタリング
    switch (room.floorMaterialType) {
      case 'tile':
        // タイル系（ポーチ・玄関等）
        return items.filter(item =>
          item.category_name?.includes('タイル') ||
          item.category_name?.includes('ポーチ') ||
          item.name?.includes('タイル')
        );
      case 'cf_sheet':
      case 'floor_tile':
        // CFシート・フロアタイル（トイレ・脱衣所）
        return items.filter(item =>
          item.category_name?.includes('CF') ||
          item.category_name?.includes('フロアタイル') ||
          item.name?.includes('CF') ||
          item.name?.includes('フロアタイル')
        );
      case 'tatami':
        // 畳
        return items.filter(item =>
          item.category_name?.includes('畳') ||
          item.name?.includes('畳')
        );
      default:
        // 通常のフローリング
        return items.filter(item =>
          !item.category_name?.includes('タイル') &&
          !item.category_name?.includes('CF') &&
          !item.category_name?.includes('畳')
        );
    }
  };

  // 部屋個別の選択を変更
  const handleRoomSelect = (roomId: string, itemId: string) => {
    setRoomSelection(roomId, type, itemId);
  };

  // 部屋の現在の選択を取得（個別選択がなければメイン選択を使用）
  const getRoomSelection = (room: Room): string | undefined => {
    return room.selections[type] || mainSelectedId;
  };

  // 部屋がメインと異なる選択をしているか
  const isRoomCustomized = (room: Room): boolean => {
    const roomSelection = room.selections[type];
    return roomSelection !== undefined && roomSelection !== mainSelectedId;
  };

  if (rooms.length === 0) {
    return (
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
        <p className="text-sm text-yellow-700 dark:text-yellow-400">
          先に「設計」タブで間取りを設定してください。部屋ごとの{typeConfig.label}選択が可能になります。
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* ヘッダー */}
      <div className={`bg-gradient-to-r from-${typeConfig.color}-500 to-${typeConfig.color}-600 p-4 text-white`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon className="w-5 h-5" />
            <div>
              <h3 className="font-bold">{typeConfig.label}を選ぶ</h3>
              <p className="text-sm opacity-80">メインを選ぶと全部屋に適用されます</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* メイン選択表示 */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">メイン{typeConfig.label}</div>
            {mainSelectedItem ? (
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                  {(() => {
                    const imgUrl = getImageUrl(mainSelectedItem);
                    return imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={mainSelectedItem.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Icon className="w-6 h-6" />
                      </div>
                    );
                  })()}
                </div>
                <div>
                  <div className="font-medium text-sm text-gray-800 dark:text-gray-200">
                    {mainSelectedItem.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {mainSelectedItem.manufacturer}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                まだ選択されていません
              </div>
            )}
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400" />
          <div className="text-right">
            <div className="text-xs text-gray-500 dark:text-gray-400">適用先</div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
              全{rooms.length}部屋
            </div>
          </div>
        </div>
      </div>

      {/* 部屋ごとの選択（展開時） */}
      {isExpanded && (
        <div className="p-4">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            変更したい部屋だけを個別に選択できます
          </div>

          {Object.entries(roomsByFloor).map(([floorStr, floorRooms]) => {
            const floor = parseInt(floorStr);
            const isFloorExpanded = expandedFloors.includes(floor);

            return (
              <div key={floor} className="mb-4 last:mb-0">
                <button
                  onClick={() => {
                    setExpandedFloors(prev =>
                      prev.includes(floor)
                        ? prev.filter(f => f !== floor)
                        : [...prev, floor]
                    );
                  }}
                  className="w-full flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mb-2"
                >
                  <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
                    {floor}F ({floorRooms.length}部屋)
                  </span>
                  {isFloorExpanded ? (
                    <ChevronUp className="w-4 h-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  )}
                </button>

                {isFloorExpanded && (
                  <div className="space-y-2 pl-2">
                    {floorRooms.map(room => {
                      const currentSelection = getRoomSelection(room);
                      const selectedItem = items.find(item => item.id === currentSelection);
                      const isCustom = isRoomCustomized(room);
                      const availableItems = getAvailableItemsForRoom(room);

                      return (
                        <div
                          key={room.id}
                          className={`flex items-center gap-3 p-3 rounded-lg border ${
                            isCustom
                              ? 'border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-900/20'
                              : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-sm text-gray-800 dark:text-gray-200">
                                {room.name}
                              </span>
                              {isCustom && (
                                <span className="px-1.5 py-0.5 bg-amber-500 text-white text-[10px] rounded">
                                  変更済
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {ROOM_TYPE_NAMES[room.type]}
                              {type === 'floor' && ` • ${
                                room.floorMaterialType === 'flooring' ? 'フローリング' :
                                room.floorMaterialType === 'tile' ? 'タイル' :
                                room.floorMaterialType === 'cf_sheet' ? 'CFシート' :
                                room.floorMaterialType === 'tatami' ? '畳' : 'その他'
                              }`}
                            </div>
                          </div>

                          {/* 選択ドロップダウン */}
                          <select
                            value={currentSelection || ''}
                            onChange={(e) => handleRoomSelect(room.id, e.target.value)}
                            className="text-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1.5 max-w-[150px]"
                          >
                            <option value="">メインと同じ</option>
                            {availableItems.map(item => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>

                          {selectedItem && (
                            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-600 flex-shrink-0">
                              {(() => {
                                const imgUrl = getImageUrl(selectedItem);
                                return imgUrl ? (
                                  <img
                                    src={imgUrl}
                                    alt={selectedItem.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-green-500" />
                                  </div>
                                );
                              })()}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
