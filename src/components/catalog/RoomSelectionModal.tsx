import React, { useState, useCallback } from 'react';
import { X, Check, Home, Bed, Bath, ChefHat, Sofa, DoorOpen, ArrowUp } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

// 部屋の定義
export interface Room {
  id: string;
  name: string;
  floor: number;
  icon: React.ElementType;
}

// 標準的な部屋リスト
export const DEFAULT_ROOMS: Room[] = [
  // 1階
  { id: 'living', name: 'リビング', floor: 1, icon: Sofa },
  { id: 'dining', name: 'ダイニング', floor: 1, icon: ChefHat },
  { id: 'kitchen', name: 'キッチン', floor: 1, icon: ChefHat },
  { id: 'entrance', name: '玄関', floor: 1, icon: DoorOpen },
  { id: 'toilet1', name: '1Fトイレ', floor: 1, icon: Bath },
  { id: 'washroom', name: '洗面室', floor: 1, icon: Bath },
  { id: 'bathroom', name: '浴室', floor: 1, icon: Bath },
  { id: 'hall1', name: '1F廊下', floor: 1, icon: Home },
  // 2階
  { id: 'master', name: '主寝室', floor: 2, icon: Bed },
  { id: 'child1', name: '子供部屋1', floor: 2, icon: Bed },
  { id: 'child2', name: '子供部屋2', floor: 2, icon: Bed },
  { id: 'toilet2', name: '2Fトイレ', floor: 2, icon: Bath },
  { id: 'hall2', name: '2F廊下', floor: 2, icon: Home },
  { id: 'stairs', name: '階段', floor: 0, icon: ArrowUp },
];

interface RoomSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedRooms: string[]) => void;
  categoryName: string;
  productName: string;
  initialSelectedRooms?: string[];
  availableRooms?: Room[];
}

export const RoomSelectionModal: React.FC<RoomSelectionModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  categoryName,
  productName,
  initialSelectedRooms = [],
  availableRooms = DEFAULT_ROOMS,
}) => {
  const [selectedRooms, setSelectedRooms] = useState<Set<string>>(
    new Set(initialSelectedRooms)
  );

  const toggleRoom = useCallback((roomId: string) => {
    setSelectedRooms(prev => {
      const newSet = new Set(prev);
      if (newSet.has(roomId)) {
        newSet.delete(roomId);
      } else {
        newSet.add(roomId);
      }
      return newSet;
    });
  }, []);

  const selectAll = useCallback(() => {
    setSelectedRooms(new Set(availableRooms.map(r => r.id)));
  }, [availableRooms]);

  const clearAll = useCallback(() => {
    setSelectedRooms(new Set());
  }, []);

  const handleConfirm = useCallback(() => {
    onConfirm(Array.from(selectedRooms));
    onClose();
  }, [selectedRooms, onConfirm, onClose]);

  // 階ごとにグループ化
  const roomsByFloor = availableRooms.reduce((acc, room) => {
    const floorKey = room.floor === 0 ? 'other' : `${room.floor}F`;
    if (!acc[floorKey]) {
      acc[floorKey] = [];
    }
    acc[floorKey].push(room);
    return acc;
  }, {} as Record<string, Room[]>);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[85vh] overflow-hidden z-50">
          {/* ヘッダー */}
          <div className="border-b p-4">
            <div className="flex items-center justify-between">
              <div>
                <Dialog.Title className="text-lg font-bold">
                  適用する部屋を選択
                </Dialog.Title>
                <p className="text-sm text-gray-500 mt-1">
                  {categoryName} / {productName}
                </p>
              </div>
              <Dialog.Close asChild>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <X className="w-5 h-5" />
                </button>
              </Dialog.Close>
            </div>

            {/* 一括選択ボタン */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={selectAll}
                className="px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100"
              >
                すべて選択
              </button>
              <button
                onClick={clearAll}
                className="px-3 py-1.5 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100"
              >
                クリア
              </button>
              <span className="ml-auto text-sm text-gray-500 self-center">
                {selectedRooms.size}部屋選択中
              </span>
            </div>
          </div>

          {/* 部屋リスト */}
          <div className="p-4 overflow-y-auto max-h-[50vh]">
            {Object.entries(roomsByFloor).map(([floor, rooms]) => (
              <div key={floor} className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  {floor === 'other' ? 'その他' : floor}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {rooms.map(room => {
                    const isSelected = selectedRooms.has(room.id);
                    const Icon = room.icon;
                    return (
                      <button
                        key={room.id}
                        onClick={() => toggleRoom(room.id)}
                        className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isSelected ? 'text-blue-500' : 'text-gray-400'}`} />
                        <span className="text-sm font-medium">{room.name}</span>
                        {isSelected && (
                          <Check className="w-4 h-4 ml-auto text-blue-500" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* フッター */}
          <div className="border-t p-4 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              キャンセル
            </button>
            <button
              onClick={handleConfirm}
              disabled={selectedRooms.size === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Check className="w-4 h-4" />
              確定（{selectedRooms.size}部屋）
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
