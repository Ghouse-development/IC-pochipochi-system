/**
 * 部屋名登録コンポーネント
 * プロジェクトの部屋情報を登録
 * - 部屋タイプカードをクリックするだけで即追加
 * - 「その他」のみ部屋名を手動入力
 */

import React, { useState } from 'react';
import { X, Home, Bath, Utensils, Bed, Sofa, DoorOpen, Check } from 'lucide-react';

export interface Room {
  id: string;
  name: string;
  floor: number;
  type: string;
  floorArea?: number; // 床面積（㎡）
}

interface RoomRegistrationProps {
  rooms: Room[];
  onChange: (rooms: Room[]) => void;
  floors: number; // 階数
}

// 部屋タイプと絵文字（指定順）
const ROOM_TYPES = [
  { id: 'entrance', name: '玄関', icon: DoorOpen },
  { id: 'shoes_cloak', name: 'シューズクローク', icon: DoorOpen },
  { id: 'hall', name: 'ホール', icon: DoorOpen },
  { id: 'stairs', name: '階段', icon: DoorOpen },
  { id: 'ldk', name: 'LDK', icon: Sofa },
  { id: 'living', name: 'リビング', icon: Sofa },
  { id: 'dining', name: 'ダイニング', icon: Utensils },
  { id: 'kitchen', name: 'キッチン', icon: Utensils },
  { id: 'pantry', name: 'パントリー', icon: Home },
  { id: 'toilet', name: 'トイレ', icon: DoorOpen },
  { id: 'washroom', name: '洗面所', icon: Bath },
  { id: 'laundry', name: '脱衣所', icon: Bath },
  { id: 'sanitary', name: 'サニタリー', icon: Bath },
  { id: 'bathroom', name: '浴室', icon: Bath },
  { id: 'closet', name: '収納', icon: DoorOpen },
  { id: 'storage', name: '納戸', icon: Home },
  { id: 'wardrobe', name: '衣装部屋', icon: Home },
  { id: 'family_closet', name: 'ファミリークローク', icon: DoorOpen },
  { id: 'study', name: '書斎', icon: Home },
  { id: 'tatami_corner', name: '畳コーナー', icon: Home },
  { id: 'japanese', name: '和室', icon: Home },
  { id: 'master_bedroom', name: '主寝室', icon: Bed },
  { id: 'bedroom1', name: '寝室①', icon: Bed },
  { id: 'bedroom2', name: '寝室②', icon: Bed },
  { id: 'bedroom3', name: '寝室③', icon: Bed },
  { id: 'other', name: 'その他', icon: Home },
];

// 部屋カード
interface RoomCardProps {
  room: Room;
  onRemove: () => void;
  onUpdateFloorArea: (area: number | undefined) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onRemove, onUpdateFloorArea }) => {
  const roomType = ROOM_TYPES.find(t => t.id === room.type);
  const Icon = roomType?.icon || Home;

  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 hover:shadow-sm transition-shadow">
      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-blue-600" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-gray-800 text-sm truncate">{room.name}</div>
        <div className="flex items-center gap-1 mt-1">
          <input
            type="number"
            step="0.1"
            min="0"
            value={room.floorArea || ''}
            onChange={(e) => onUpdateFloorArea(e.target.value ? parseFloat(e.target.value) : undefined)}
            placeholder="面積"
            className="w-16 px-1.5 py-0.5 text-xs border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <span className="text-xs text-gray-400">㎡</span>
        </div>
      </div>
      <button
        type="button"
        onClick={onRemove}
        className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors flex-shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

// 部屋タイプ選択カード
interface RoomTypeCardProps {
  roomType: typeof ROOM_TYPES[0];
  count: number;
  onClick: () => void;
}

const RoomTypeCard: React.FC<RoomTypeCardProps> = ({ roomType, count, onClick }) => {
  const Icon = roomType.icon;
  const hasRoom = count > 0;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all min-w-[80px]
        ${hasRoom
          ? 'border-blue-500 bg-blue-50 text-blue-700'
          : 'border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:bg-blue-50'
        }
      `}
    >
      {hasRoom && (
        <div className="absolute top-1 right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">{count}</span>
        </div>
      )}
      <Icon className="w-6 h-6 mb-1" />
      <span className="text-xs font-medium">{roomType.name}</span>
    </button>
  );
};

// その他入力モーダル
interface OtherRoomInputProps {
  floor: number;
  onAdd: (name: string) => void;
  onCancel: () => void;
}

const OtherRoomInput: React.FC<OtherRoomInputProps> = ({ floor, onAdd, onCancel }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name.trim());
    }
  };

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-3">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={`${floor}階のその他の部屋名を入力`}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          autoFocus
        />
        <button
          type="submit"
          disabled={!name.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
        >
          <Check className="w-4 h-4" />
          追加
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          キャンセル
        </button>
      </form>
    </div>
  );
};

export const RoomRegistration: React.FC<RoomRegistrationProps> = ({
  rooms,
  onChange,
  floors,
}) => {
  const [showOtherInput, setShowOtherInput] = useState<number | null>(null);

  // 部屋を追加
  const handleAddRoom = (floor: number, type: string, customName?: string) => {
    const roomType = ROOM_TYPES.find(t => t.id === type);

    // 同じ階の同じタイプの部屋数をカウント
    const sameTypeCount = rooms.filter(r => r.floor === floor && r.type === type).length;

    // 部屋名を決定（同じタイプが既にあれば連番を付ける）
    let name: string;
    if (customName) {
      name = customName;
    } else if (sameTypeCount === 0) {
      name = roomType?.name || 'その他';
    } else {
      name = `${roomType?.name || 'その他'}${sameTypeCount + 1}`;
    }

    const newRoom: Room = {
      id: `room-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name,
      floor,
      type,
    };
    onChange([...rooms, newRoom]);
  };

  // 部屋タイプクリック時の処理
  const handleRoomTypeClick = (floor: number, typeId: string) => {
    if (typeId === 'other') {
      // 「その他」の場合は入力欄を表示
      setShowOtherInput(floor);
    } else {
      // それ以外は即追加
      handleAddRoom(floor, typeId);
    }
  };

  // その他の部屋を追加
  const handleAddOtherRoom = (floor: number, name: string) => {
    handleAddRoom(floor, 'other', name);
    setShowOtherInput(null);
  };

  const handleRemoveRoom = (roomId: string) => {
    onChange(rooms.filter(r => r.id !== roomId));
  };

  // 部屋の床面積を更新
  const handleUpdateFloorArea = (roomId: string, area: number | undefined) => {
    onChange(rooms.map(r => r.id === roomId ? { ...r, floorArea: area } : r));
  };

  // 特定の階の特定タイプの部屋数を取得
  const getRoomCount = (floor: number, typeId: string): number => {
    return rooms.filter(r => r.floor === floor && r.type === typeId).length;
  };

  // 階ごとの部屋リストを生成
  const floorNumbers = Array.from({ length: floors }, (_, i) => i + 1);

  return (
    <div className="space-y-6">
      {floorNumbers.map(floorNum => {
        const floorRooms = rooms.filter(r => r.floor === floorNum);

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

            {/* 部屋タイプ選択カード */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">タップして部屋を追加（複数選択可）</p>
              <div className="flex flex-wrap gap-2">
                {ROOM_TYPES.map(roomType => (
                  <RoomTypeCard
                    key={roomType.id}
                    roomType={roomType}
                    count={getRoomCount(floorNum, roomType.id)}
                    onClick={() => handleRoomTypeClick(floorNum, roomType.id)}
                  />
                ))}
              </div>
            </div>

            {/* その他の部屋名入力 */}
            {showOtherInput === floorNum && (
              <OtherRoomInput
                floor={floorNum}
                onAdd={(name) => handleAddOtherRoom(floorNum, name)}
                onCancel={() => setShowOtherInput(null)}
              />
            )}

            {/* 登録済み部屋リスト */}
            {floorRooms.length > 0 && (
              <div className="mt-4 border-t border-gray-200 pt-3">
                <p className="text-xs text-gray-500 mb-2">登録済みの部屋（タップで削除）</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {floorRooms.map(room => (
                    <RoomCard
                      key={room.id}
                      room={room}
                      onRemove={() => handleRemoveRoom(room.id)}
                      onUpdateFloorArea={(area) => handleUpdateFloorArea(room.id, area)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RoomRegistration;
