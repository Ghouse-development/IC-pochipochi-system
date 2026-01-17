import React, { useState, useMemo } from 'react';
import { Check, X, Home, Layers } from 'lucide-react';
import { STANDARD_ROOMS, type RoomType } from '../../types/product';

interface RoomApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedRooms: string[]) => void;
  categoryName: string;
  productName: string;
  initialRooms?: string[];
}

// 一括選択グループ
const BULK_GROUPS = [
  { id: 'all', name: '全室', rooms: STANDARD_ROOMS.map(r => r.id) },
  { id: 'main', name: 'LDK', rooms: ['living', 'dining', 'kitchen'] },
  { id: 'bedroom', name: '寝室系', rooms: ['master', 'child1', 'child2'] },
  { id: 'water', name: '水回り', rooms: ['toilet1', 'toilet2', 'washroom'] },
  { id: 'common', name: '共用部', rooms: ['entrance', 'corridor', 'closet'] },
];

export const RoomApplyModal: React.FC<RoomApplyModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  categoryName,
  productName,
  initialRooms = [],
}) => {
  const [selectedRooms, setSelectedRooms] = useState<Set<string>>(new Set(initialRooms));

  // 階でグループ化
  const roomsByFloor = useMemo(() => {
    const grouped: Record<number, RoomType[]> = { 0: [], 1: [], 2: [] };
    STANDARD_ROOMS.forEach(room => {
      if (!grouped[room.floor]) grouped[room.floor] = [];
      grouped[room.floor].push(room);
    });
    return grouped;
  }, []);

  const toggleRoom = (roomId: string) => {
    setSelectedRooms(prev => {
      const next = new Set(prev);
      if (next.has(roomId)) {
        next.delete(roomId);
      } else {
        next.add(roomId);
      }
      return next;
    });
  };

  const toggleGroup = (groupId: string) => {
    const group = BULK_GROUPS.find(g => g.id === groupId);
    if (!group) return;

    const allSelected = group.rooms.every(r => selectedRooms.has(r));
    setSelectedRooms(prev => {
      const next = new Set(prev);
      if (allSelected) {
        group.rooms.forEach(r => next.delete(r));
      } else {
        group.rooms.forEach(r => next.add(r));
      }
      return next;
    });
  };

  const handleConfirm = () => {
    onConfirm(Array.from(selectedRooms));
  };

  if (!isOpen) return null;

  const floorNames: Record<number, string> = {
    0: '共有',
    1: '1階',
    2: '2階',
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              <h3 className="font-bold">適用する部屋を選択</h3>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-white/80 mt-1">
            {categoryName}: {productName}
          </p>
        </div>

        {/* 一括選択ボタン */}
        <div className="p-3 bg-indigo-50 border-b border-indigo-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-medium text-indigo-700 flex items-center gap-1">
              <Layers className="w-3 h-3" />
              一括選択:
            </span>
            {BULK_GROUPS.map(group => {
              const allSelected = group.rooms.every(r => selectedRooms.has(r));
              return (
                <button
                  key={group.id}
                  onClick={() => toggleGroup(group.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    allSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-indigo-600 hover:bg-indigo-100 border border-indigo-200'
                  }`}
                >
                  {group.name}
                  {allSelected && <Check className="w-3 h-3 ml-1 inline" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* 部屋リスト */}
        <div className="p-4 overflow-y-auto max-h-[50vh]">
          {[1, 2, 0].map(floor => {
            const rooms = roomsByFloor[floor] || [];
            if (rooms.length === 0) return null;

            return (
              <div key={floor} className="mb-4 last:mb-0">
                <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-gray-200 rounded-lg flex items-center justify-center text-xs">
                    {floor === 0 ? '共' : `${floor}F`}
                  </span>
                  {floorNames[floor]}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {rooms.map(room => {
                    const isSelected = selectedRooms.has(room.id);
                    return (
                      <button
                        key={room.id}
                        onClick={() => toggleRoom(room.id)}
                        className={`flex items-center gap-2 p-3 rounded-xl border-2 transition-all ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 bg-white hover:border-blue-300'
                        }`}
                      >
                        <span className="text-xl">{room.icon}</span>
                        <span className="text-sm font-medium text-gray-800">{room.name}</span>
                        {isSelected && (
                          <Check className="w-4 h-4 text-blue-500 ml-auto" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* 選択状況 & 確定ボタン */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-600">
              {selectedRooms.size}室を選択中
            </span>
            {selectedRooms.size > 0 && (
              <button
                onClick={() => setSelectedRooms(new Set())}
                className="text-xs text-red-500 hover:text-red-700"
              >
                選択をクリア
              </button>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-100"
            >
              キャンセル
            </button>
            <button
              onClick={handleConfirm}
              disabled={selectedRooms.size === 0}
              className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              {selectedRooms.size > 0 ? `${selectedRooms.size}室に適用` : '部屋を選択'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomApplyModal;
