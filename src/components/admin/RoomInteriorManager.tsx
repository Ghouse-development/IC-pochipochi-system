import { useState, useEffect } from 'react';
import {
  Home,
  Plus,
  Edit2,
  Trash2,
  X,
  ChevronDown,
  ChevronRight,
  Palette,
  Square,
  Maximize2,
  RefreshCw,
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { Room, RoomSelection, Item, ItemVariant } from '../../types/database';

interface RoomInteriorManagerProps {
  projectId: string;
  onUpdate?: () => void;
}

interface RoomWithSelections extends Room {
  selections: (RoomSelection & {
    item?: Item;
    variant?: ItemVariant;
  })[];
}

const INTERIOR_PARTS = [
  { id: 'floor', name: '床材', icon: Square },
  { id: 'wall_cross', name: '壁クロス', icon: Palette },
  { id: 'ceiling_cross', name: '天井クロス', icon: Maximize2 },
  { id: 'baseboard', name: '巾木', icon: Square },
  { id: 'accent_cross', name: 'アクセントクロス', icon: Palette },
] as const;

const DEFAULT_ROOMS = [
  { name: 'リビング', floor: 1, room_type: 'living' },
  { name: 'ダイニング', floor: 1, room_type: 'dining' },
  { name: 'キッチン', floor: 1, room_type: 'kitchen' },
  { name: '和室', floor: 1, room_type: 'japanese' },
  { name: '玄関', floor: 1, room_type: 'entrance' },
  { name: 'トイレ（1階）', floor: 1, room_type: 'toilet' },
  { name: '洗面所', floor: 1, room_type: 'washroom' },
  { name: '浴室', floor: 1, room_type: 'bathroom' },
  { name: '主寝室', floor: 2, room_type: 'bedroom' },
  { name: '子供部屋1', floor: 2, room_type: 'bedroom' },
  { name: '子供部屋2', floor: 2, room_type: 'bedroom' },
  { name: 'トイレ（2階）', floor: 2, room_type: 'toilet' },
  { name: '廊下（2階）', floor: 2, room_type: 'hallway' },
];

export function RoomInteriorManager({ projectId, onUpdate }: RoomInteriorManagerProps) {
  const [rooms, setRooms] = useState<RoomWithSelections[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedRooms, setExpandedRooms] = useState<Set<string>>(new Set());
  const [isAddingRoom, setIsAddingRoom] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [newRoomFloor, setNewRoomFloor] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    loadRoomsAndSelections();
  }, [projectId]);

  const loadRoomsAndSelections = async () => {
    setIsLoading(true);
    try {
      // 部屋一覧を取得
      const { data: roomsData, error: roomsError } = await supabase
        .from('rooms')
        .select('*')
        .eq('is_active', true)
        .order('floor', { ascending: true })
        .order('display_order', { ascending: true });

      if (roomsError) throw roomsError;

      // プロジェクトの部屋別選択を取得
      const { data: selectionsData, error: selectionsError } = await supabase
        .from('room_selections')
        .select(`
          *,
          item:items(*),
          variant:item_variants(*)
        `)
        .eq('project_id', projectId);

      if (selectionsError) throw selectionsError;

      // 部屋ごとに選択をマッピング
      const roomsWithSelections: RoomWithSelections[] = (roomsData || []).map(room => ({
        ...room,
        selections: (selectionsData || []).filter(s => s.room_id === room.id),
      }));

      setRooms(roomsWithSelections);

      // デフォルトで1階を展開
      const floor1Rooms = roomsWithSelections.filter(r => r.floor === 1).map(r => r.id);
      setExpandedRooms(new Set(floor1Rooms));
    } catch (err) {
      console.error('Error loading rooms:', err);
      setError('部屋情報の読み込みに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddRoom = async () => {
    if (!newRoomName.trim()) return;

    try {
      const { error } = await supabase.from('rooms').insert({
        name: newRoomName,
        floor: newRoomFloor,
        display_order: rooms.length,
        is_active: true,
      });

      if (error) throw error;

      setSuccess('部屋を追加しました');
      setNewRoomName('');
      setIsAddingRoom(false);
      await loadRoomsAndSelections();
      onUpdate?.();
    } catch (err) {
      console.error('Error adding room:', err);
      setError('部屋の追加に失敗しました');
    }
  };

  const handleDeleteRoom = async (roomId: string) => {
    if (!confirm('この部屋を削除しますか？関連する選択も削除されます。')) return;

    try {
      // まず関連する選択を削除
      await supabase
        .from('room_selections')
        .delete()
        .eq('room_id', roomId);

      // 部屋を論理削除
      const { error } = await supabase
        .from('rooms')
        .update({ is_active: false })
        .eq('id', roomId);

      if (error) throw error;

      setSuccess('部屋を削除しました');
      await loadRoomsAndSelections();
      onUpdate?.();
    } catch (err) {
      console.error('Error deleting room:', err);
      setError('部屋の削除に失敗しました');
    }
  };

  // TODO: アイテム選択モーダル実装時に有効化
  // handleSaveSelection は将来のアイテム選択機能で使用予定

  const handleRemoveSelection = async (selectionId: string) => {
    try {
      const { error } = await supabase
        .from('room_selections')
        .delete()
        .eq('id', selectionId);

      if (error) throw error;

      setSuccess('選択を削除しました');
      await loadRoomsAndSelections();
      onUpdate?.();
    } catch (err) {
      console.error('Error removing selection:', err);
      setError('選択の削除に失敗しました');
    }
  };

  const toggleRoom = (roomId: string) => {
    const newExpanded = new Set(expandedRooms);
    if (newExpanded.has(roomId)) {
      newExpanded.delete(roomId);
    } else {
      newExpanded.add(roomId);
    }
    setExpandedRooms(newExpanded);
  };

  const getSelectionForPart = (room: RoomWithSelections, partType: string) => {
    return room.selections.find(s => s.interior_part === partType);
  };

  // 階ごとにグループ化
  const roomsByFloor = rooms.reduce((acc, room) => {
    const floor = room.floor || 1;
    if (!acc[floor]) acc[floor] = [];
    acc[floor].push(room);
    return acc;
  }, {} as Record<number, RoomWithSelections[]>);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-teal-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Home className="w-5 h-5" />
            部屋別内装仕様
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            各部屋の床材・クロス・巾木などを設定します
          </p>
        </div>
        <button
          onClick={() => setIsAddingRoom(true)}
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
        >
          <Plus className="w-4 h-4" />
          部屋を追加
        </button>
      </div>

      {/* Messages */}
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="text-red-900">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
      {success && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center justify-between">
          <span>{success}</span>
          <button onClick={() => setSuccess(null)} className="text-green-900">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Add Room Modal */}
      {isAddingRoom && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h3 className="text-lg font-bold mb-4">部屋を追加</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">部屋名</label>
                <input
                  type="text"
                  value={newRoomName}
                  onChange={(e) => setNewRoomName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="例: 書斎"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">階数</label>
                <select
                  value={newRoomFloor}
                  onChange={(e) => setNewRoomFloor(Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                >
                  <option value={1}>1階</option>
                  <option value={2}>2階</option>
                  <option value={3}>3階</option>
                </select>
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-2">または、標準的な部屋を選択:</p>
                <div className="grid grid-cols-2 gap-2">
                  {DEFAULT_ROOMS.slice(0, 6).map((room) => (
                    <button
                      key={room.name}
                      onClick={() => {
                        setNewRoomName(room.name);
                        setNewRoomFloor(room.floor);
                      }}
                      className="text-left px-3 py-2 border rounded hover:bg-gray-50 text-sm"
                    >
                      {room.name} ({room.floor}F)
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setIsAddingRoom(false);
                  setNewRoomName('');
                }}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={handleAddRoom}
                disabled={!newRoomName.trim()}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50"
              >
                追加
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Room List by Floor */}
      {Object.entries(roomsByFloor)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([floor, floorRooms]) => (
          <div key={floor} className="bg-white rounded-xl shadow-sm border">
            <div className="bg-gray-50 px-4 py-3 border-b rounded-t-xl">
              <h3 className="font-semibold text-gray-900">{floor}階</h3>
            </div>
            <div className="divide-y">
              {floorRooms.map((room) => (
                <div key={room.id} className="p-4">
                  {/* Room Header */}
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => toggleRoom(room.id)}
                  >
                    <div className="flex items-center gap-3">
                      {expandedRooms.has(room.id) ? (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      )}
                      <span className="font-medium text-gray-900">{room.name}</span>
                      <span className="text-sm text-gray-500">
                        ({room.selections.length}項目選択済み)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // TODO: 部屋名編集モーダル実装予定
                          alert('部屋名の編集機能は準備中です');
                        }}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Edit2 className="w-4 h-4 text-gray-400" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteRoom(room.id);
                        }}
                        className="p-1 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </div>

                  {/* Room Details (Expanded) */}
                  {expandedRooms.has(room.id) && (
                    <div className="mt-4 ml-8 space-y-3">
                      {INTERIOR_PARTS.map((part) => {
                        const selection = getSelectionForPart(room, part.id);
                        const PartIcon = part.icon;
                        return (
                          <div
                            key={part.id}
                            className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                          >
                            <div className="flex items-center gap-3">
                              <PartIcon className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-700">{part.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {selection ? (
                                <>
                                  <span className="text-sm text-gray-900">
                                    {selection.item?.name || '未設定'}
                                    {selection.variant && (
                                      <span className="text-gray-500 ml-1">
                                        ({selection.variant.color_name})
                                      </span>
                                    )}
                                  </span>
                                  {selection.is_accent && (
                                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                                      アクセント
                                    </span>
                                  )}
                                  <button
                                    onClick={() => handleRemoveSelection(selection.id)}
                                    className="p-1 hover:bg-red-50 rounded"
                                  >
                                    <X className="w-3 h-3 text-red-400" />
                                  </button>
                                </>
                              ) : (
                                <button
                                  className="text-sm text-teal-600 hover:text-teal-700"
                                  onClick={() => {
                                    // TODO: アイテム選択モーダルを開く
                                    alert('アイテム選択機能は準備中です');
                                  }}
                                >
                                  + 選択する
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

      {/* Empty State */}
      {rooms.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <Home className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">部屋が登録されていません</h3>
          <p className="text-gray-600 mb-4">部屋を追加して内装仕様を設定してください</p>
          <button
            onClick={() => setIsAddingRoom(true)}
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
          >
            最初の部屋を追加
          </button>
        </div>
      )}
    </div>
  );
}

export default RoomInteriorManager;
