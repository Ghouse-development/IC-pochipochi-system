/**
 * 部屋名登録コンポーネント
 * プロジェクトの部屋情報を登録
 */

import React, { useState } from 'react';
import { Plus, X, Home, Bath, Utensils, Bed, Sofa, DoorOpen } from 'lucide-react';

export interface Room {
  id: string;
  name: string;
  floor: number;
  type: string;
}

interface RoomRegistrationProps {
  rooms: Room[];
  onChange: (rooms: Room[]) => void;
  floors: number; // 階数
}

// 部屋タイプと絵文字
const ROOM_TYPES = [
  { id: 'living', name: 'リビング', icon: Sofa },
  { id: 'dining', name: 'ダイニング', icon: Utensils },
  { id: 'kitchen', name: 'キッチン', icon: Utensils },
  { id: 'bedroom', name: '寝室', icon: Bed },
  { id: 'children', name: '子供部屋', icon: Home },
  { id: 'japanese', name: '和室', icon: Home },
  { id: 'bathroom', name: '浴室', icon: Bath },
  { id: 'toilet', name: 'トイレ', icon: DoorOpen },
  { id: 'washroom', name: '洗面所', icon: Bath },
  { id: 'entrance', name: '玄関', icon: DoorOpen },
  { id: 'hallway', name: '廊下', icon: DoorOpen },
  { id: 'closet', name: '収納', icon: DoorOpen },
  { id: 'other', name: 'その他', icon: Home },
];

// 新規部屋追加フォーム
interface AddRoomFormProps {
  floor: number;
  onAdd: (room: Omit<Room, 'id'>) => void;
  onCancel: () => void;
}

const AddRoomForm: React.FC<AddRoomFormProps> = ({ floor, onAdd, onCancel }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('living');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd({ name: name.trim(), floor, type });
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-50 rounded-lg p-4 space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">部屋タイプ</label>
        <div className="flex flex-wrap gap-2">
          {ROOM_TYPES.map(roomType => {
            const Icon = roomType.icon;
            return (
              <button
                key={roomType.id}
                type="button"
                onClick={() => setType(roomType.id)}
                className={`
                  px-3 py-1.5 rounded-full text-xs flex items-center gap-1 transition-all
                  ${type === roomType.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <Icon className="w-3 h-3" />
                {roomType.name}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">部屋名</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="例: リビング、主寝室、子供部屋A"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          キャンセル
        </button>
        <button
          type="submit"
          disabled={!name.trim()}
          className="flex-1 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          追加
        </button>
      </div>
    </form>
  );
};

// 部屋カード
interface RoomCardProps {
  room: Room;
  onRemove: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onRemove }) => {
  const roomType = ROOM_TYPES.find(t => t.id === room.type);
  const Icon = roomType?.icon || Home;

  return (
    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-gray-800 truncate">{room.name}</div>
        <div className="text-xs text-gray-500">{roomType?.name || 'その他'}</div>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export const RoomRegistration: React.FC<RoomRegistrationProps> = ({
  rooms,
  onChange,
  floors,
}) => {
  const [addingFloor, setAddingFloor] = useState<number | null>(null);

  const handleAddRoom = (_floor: number, roomData: Omit<Room, 'id'>) => {
    // Note: _floor param exists for API consistency, roomData already contains floor
    const newRoom: Room = {
      ...roomData,
      id: `room-${Date.now()}`,
    };
    onChange([...rooms, newRoom]);
    setAddingFloor(null);
  };

  const handleRemoveRoom = (roomId: string) => {
    onChange(rooms.filter(r => r.id !== roomId));
  };

  // 階ごとの部屋リストを生成
  const floorNumbers = Array.from({ length: floors }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      {floorNumbers.map(floorNum => {
        const floorRooms = rooms.filter(r => r.floor === floorNum);
        const isAdding = addingFloor === floorNum;

        return (
          <div key={floorNum} className="bg-gray-50 rounded-xl p-4">
            <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm">
                {floorNum}F
              </span>
              {floorNum}階の部屋
              <span className="text-sm font-normal text-gray-500">
                ({floorRooms.length}部屋)
              </span>
            </h4>

            {/* 部屋リスト */}
            <div className="space-y-2 mb-3">
              {floorRooms.map(room => (
                <RoomCard
                  key={room.id}
                  room={room}
                  onRemove={() => handleRemoveRoom(room.id)}
                />
              ))}
            </div>

            {/* 追加フォームまたは追加ボタン */}
            {isAdding ? (
              <AddRoomForm
                floor={floorNum}
                onAdd={(roomData) => handleAddRoom(floorNum, roomData)}
                onCancel={() => setAddingFloor(null)}
              />
            ) : (
              <button
                type="button"
                onClick={() => setAddingFloor(floorNum)}
                className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                部屋を追加
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RoomRegistration;
