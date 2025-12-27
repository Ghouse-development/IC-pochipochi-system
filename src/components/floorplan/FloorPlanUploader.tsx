import React, { useState, useCallback } from 'react';
import { Upload, Image as ImageIcon, Loader2, Trash2, Plus, Edit2, Check, X, Building } from 'lucide-react';
import { useFloorPlanStore, getFloorMaterialType, ROOM_TYPE_NAMES, type Room, type RoomType } from '../../stores/useFloorPlanStore';

// AI解析結果のモック（デモ用）
// 本番環境ではClaude APIを呼び出して間取り画像を解析
const mockAnalyzeFloorPlan = async (floor: number): Promise<Room[]> => {
  // 実際のAPIコールをシミュレート
  await new Promise(resolve => setTimeout(resolve, 2000));

  if (floor === 1) {
    return [
      { id: `room-${Date.now()}-1`, name: 'LDK', type: 'ldk', floor: 1, floorMaterialType: 'flooring', area: 20, selections: {} },
      { id: `room-${Date.now()}-2`, name: '玄関', type: 'entrance', floor: 1, floorMaterialType: 'tile', selections: {} },
      { id: `room-${Date.now()}-3`, name: 'シューズクローク', type: 'shoes_closet', floor: 1, floorMaterialType: 'tile', selections: {} },
      { id: `room-${Date.now()}-4`, name: 'トイレ', type: 'toilet', floor: 1, floorMaterialType: 'cf_sheet', selections: {} },
      { id: `room-${Date.now()}-5`, name: '洗面所', type: 'washroom', floor: 1, floorMaterialType: 'cf_sheet', selections: {} },
      { id: `room-${Date.now()}-6`, name: '浴室', type: 'bathroom', floor: 1, floorMaterialType: 'tile', selections: {} },
      { id: `room-${Date.now()}-7`, name: '階段', type: 'stairs', floor: 1, floorMaterialType: 'flooring', selections: {} },
    ];
  } else {
    return [
      { id: `room-${Date.now()}-8`, name: '主寝室', type: 'bedroom', floor: 2, floorMaterialType: 'flooring', area: 8, selections: {} },
      { id: `room-${Date.now()}-9`, name: '子供部屋1', type: 'children', floor: 2, floorMaterialType: 'flooring', area: 6, selections: {} },
      { id: `room-${Date.now()}-10`, name: '子供部屋2', type: 'children', floor: 2, floorMaterialType: 'flooring', area: 6, selections: {} },
      { id: `room-${Date.now()}-11`, name: 'トイレ', type: 'toilet', floor: 2, floorMaterialType: 'cf_sheet', selections: {} },
      { id: `room-${Date.now()}-12`, name: 'ウォークインクローゼット', type: 'walk_in_closet', floor: 2, floorMaterialType: 'flooring', selections: {} },
      { id: `room-${Date.now()}-13`, name: 'バルコニー', type: 'balcony', floor: 2, floorMaterialType: 'tile', selections: {} },
    ];
  }
};

export const FloorPlanUploader: React.FC = () => {
  const {
    floorPlanImages,
    rooms,
    isAnalyzing,
    error,
    addFloorPlanImage,
    removeFloorPlanImage,
    setRooms,
    addRoom,
    updateRoom,
    removeRoom,
    setIsAnalyzing,
    setError,
  } = useFloorPlanStore();

  const [selectedFloor, setSelectedFloor] = useState<number>(1);
  const [editingRoomId, setEditingRoomId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  // 画像アップロード処理
  const handleFileUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 画像プレビューURL作成
    const imageUrl = URL.createObjectURL(file);
    const newImage = {
      id: `floorplan-${Date.now()}`,
      floor: selectedFloor,
      imageUrl,
      fileName: file.name,
      uploadedAt: new Date(),
    };

    addFloorPlanImage(newImage);

    // AI解析開始
    setIsAnalyzing(true);
    setError(null);

    try {
      const detectedRooms = await mockAnalyzeFloorPlan(selectedFloor);

      // 既存の同じ階の部屋を削除して新しい部屋を追加
      const otherFloorRooms = rooms.filter(r => r.floor !== selectedFloor);
      setRooms([...otherFloorRooms, ...detectedRooms]);
    } catch (err) {
      setError('間取り画像の解析に失敗しました。手動で部屋を追加してください。');
    } finally {
      setIsAnalyzing(false);
    }

    // inputをリセット
    event.target.value = '';
  }, [selectedFloor, rooms, addFloorPlanImage, setRooms, setIsAnalyzing, setError]);

  // 部屋を手動追加
  const handleAddRoom = useCallback(() => {
    const newRoom: Room = {
      id: `room-${Date.now()}`,
      name: '新しい部屋',
      type: 'other',
      floor: selectedFloor,
      floorMaterialType: 'flooring',
      selections: {},
    };
    addRoom(newRoom);
    setEditingRoomId(newRoom.id);
    setEditingName(newRoom.name);
  }, [selectedFloor, addRoom]);

  // 部屋名編集開始
  const handleStartEdit = (room: Room) => {
    setEditingRoomId(room.id);
    setEditingName(room.name);
  };

  // 部屋名編集確定
  const handleSaveEdit = () => {
    if (editingRoomId && editingName.trim()) {
      updateRoom(editingRoomId, { name: editingName.trim() });
    }
    setEditingRoomId(null);
    setEditingName('');
  };

  // 部屋タイプ変更
  const handleTypeChange = (roomId: string, newType: RoomType) => {
    const floorMaterialType = getFloorMaterialType(newType);
    updateRoom(roomId, { type: newType, floorMaterialType });
  };

  // 階ごとの部屋をグループ化
  const roomsByFloor = rooms.reduce((acc, room) => {
    if (!acc[room.floor]) acc[room.floor] = [];
    acc[room.floor].push(room);
    return acc;
  }, {} as Record<number, Room[]>);

  const floors = Object.keys(roomsByFloor).map(Number).sort();
  const currentFloorRooms = roomsByFloor[selectedFloor] || [];
  const currentFloorImage = floorPlanImages.find(img => img.floor === selectedFloor);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 text-white">
        <div className="flex items-center gap-3">
          <Building className="w-6 h-6" />
          <div>
            <h2 className="text-lg font-bold">間取り設定</h2>
            <p className="text-sm text-indigo-100">間取り画像をアップロードすると、AIが部屋を自動検出します</p>
          </div>
        </div>
      </div>

      {/* 階数タブ */}
      <div className="border-b border-gray-200 dark:border-gray-700 px-4">
        <div className="flex items-center gap-2 py-3">
          {[1, 2, 3].map(floor => (
            <button
              key={floor}
              onClick={() => setSelectedFloor(floor)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedFloor === floor
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {floor}F
              {roomsByFloor[floor]?.length > 0 && (
                <span className="ml-1.5 px-1.5 py-0.5 bg-indigo-500 text-white text-xs rounded-full">
                  {roomsByFloor[floor].length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左側：画像アップロード */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
            {selectedFloor}F 間取り画像
          </h3>

          {currentFloorImage ? (
            <div className="relative rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
              <img
                src={currentFloorImage.imageUrl}
                alt={`${selectedFloor}F 間取り図`}
                className="w-full h-64 object-contain bg-gray-50 dark:bg-gray-900"
              />
              <button
                onClick={() => removeFloorPlanImage(currentFloorImage.id)}
                className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-2">
                {currentFloorImage.fileName}
              </div>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                disabled={isAnalyzing}
              />
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-3" />
                  <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    AIが間取りを解析中...
                  </span>
                </>
              ) : (
                <>
                  <Upload className="w-12 h-12 text-gray-400 mb-3" />
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    クリックして{selectedFloor}Fの間取り画像をアップロード
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    PNG, JPG, PDF対応
                  </span>
                </>
              )}
            </label>
          )}

          {error && (
            <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-600 dark:text-red-400">
              {error}
            </div>
          )}
        </div>

        {/* 右側：部屋リスト */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {selectedFloor}F 部屋リスト
            </h3>
            <button
              onClick={handleAddRoom}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              部屋を追加
            </button>
          </div>

          {currentFloorRooms.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl">
              <ImageIcon className="w-12 h-12 text-gray-300 mb-3" />
              <span className="text-sm text-gray-500">
                間取り画像をアップロードすると<br />部屋が自動検出されます
              </span>
            </div>
          ) : (
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {currentFloorRooms.map(room => (
                <div
                  key={room.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                >
                  {editingRoomId === room.id ? (
                    <>
                      <input
                        type="text"
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        className="flex-1 px-2 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
                        autoFocus
                        onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit()}
                      />
                      <button
                        onClick={handleSaveEdit}
                        className="p-1 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30 rounded"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setEditingRoomId(null)}
                        className="p-1 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-gray-800 dark:text-gray-200">
                            {room.name}
                          </span>
                          <button
                            onClick={() => handleStartEdit(room)}
                            className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            <Edit2 className="w-3 h-3" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <select
                            value={room.type}
                            onChange={(e) => handleTypeChange(room.id, e.target.value as RoomType)}
                            className="text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded px-1.5 py-0.5"
                          >
                            {Object.entries(ROOM_TYPE_NAMES).map(([type, name]) => (
                              <option key={type} value={type}>{name}</option>
                            ))}
                          </select>
                          <span className="text-xs text-gray-400">
                            床: {room.floorMaterialType === 'flooring' ? 'フローリング' :
                                 room.floorMaterialType === 'tile' ? 'タイル' :
                                 room.floorMaterialType === 'cf_sheet' ? 'CFシート' :
                                 room.floorMaterialType === 'tatami' ? '畳' : 'その他'}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeRoom(room.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 部屋数サマリー */}
      {rooms.length > 0 && (
        <div className="px-4 pb-4">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <span className="text-indigo-700 dark:text-indigo-300 font-medium">
                合計 {rooms.length} 部屋
              </span>
              <div className="flex items-center gap-4 text-xs text-indigo-600 dark:text-indigo-400">
                {floors.map(floor => (
                  <span key={floor}>
                    {floor}F: {roomsByFloor[floor]?.length || 0}部屋
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
