import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 部屋の種類
export type RoomType =
  | 'ldk'           // リビング・ダイニング・キッチン
  | 'living'        // リビング
  | 'dining'        // ダイニング
  | 'kitchen'       // キッチン
  | 'bedroom'       // 寝室
  | 'children'      // 子供部屋
  | 'japanese'      // 和室
  | 'entrance'      // 玄関
  | 'shoes_closet'  // シューズクローク
  | 'hallway'       // 廊下
  | 'stairs'        // 階段
  | 'toilet'        // トイレ
  | 'bathroom'      // 浴室
  | 'washroom'      // 洗面所・脱衣所
  | 'closet'        // クローゼット
  | 'walk_in_closet' // ウォークインクローゼット
  | 'balcony'       // バルコニー
  | 'porch'         // ポーチ
  | 'garage'        // ガレージ
  | 'storage'       // 収納
  | 'other';        // その他

// 部屋の床材タイプ
export type FloorMaterialType =
  | 'flooring'      // フローリング（通常の床材）
  | 'tile'          // タイル（ポーチ等）
  | 'cf_sheet'      // CFシート（トイレ・脱衣所）
  | 'floor_tile'    // フロアタイル（トイレ・脱衣所）
  | 'tatami';       // 畳（和室）

// 部屋データ
export interface Room {
  id: string;
  name: string;              // 部屋名（例：「主寝室」「子供部屋1」）
  type: RoomType;            // 部屋の種類
  floor: number;             // 階数（1F, 2F, 3F...）
  floorMaterialType: FloorMaterialType; // 床材タイプ
  area?: number;             // 面積（㎡）
  // 選択された仕上げ
  selections: {
    floor?: string;          // 床材のアイテムID
    wallpaper?: string;      // 壁クロスのアイテムID
    ceiling?: string;        // 天井クロスのアイテムID
  };
}

// 間取り画像
export interface FloorPlanImage {
  id: string;
  floor: number;             // 階数
  imageUrl: string;          // 画像URL
  fileName: string;          // ファイル名
  uploadedAt: Date;
}

// メイン選択（全部屋に適用されるデフォルト）
export interface MainSelections {
  floor?: string;            // メイン床材
  wallpaper?: string;        // メイン壁クロス
  ceiling?: string;          // メイン天井クロス
}

interface FloorPlanState {
  // 間取り画像
  floorPlanImages: FloorPlanImage[];
  // 部屋リスト
  rooms: Room[];
  // メイン選択
  mainSelections: MainSelections;
  // AI解析中フラグ
  isAnalyzing: boolean;
  // エラー
  error: string | null;

  // アクション
  addFloorPlanImage: (image: FloorPlanImage) => void;
  removeFloorPlanImage: (id: string) => void;
  setRooms: (rooms: Room[]) => void;
  addRoom: (room: Room) => void;
  updateRoom: (id: string, updates: Partial<Room>) => void;
  removeRoom: (id: string) => void;
  setMainSelection: (type: 'floor' | 'wallpaper' | 'ceiling', itemId: string) => void;
  setRoomSelection: (roomId: string, type: 'floor' | 'wallpaper' | 'ceiling', itemId: string) => void;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  setError: (error: string | null) => void;
  clearAll: () => void;
}

// 部屋タイプから床材タイプを判定
export const getFloorMaterialType = (roomType: RoomType): FloorMaterialType => {
  switch (roomType) {
    case 'toilet':
    case 'washroom':
      return 'cf_sheet'; // CFシートまたはフロアタイル
    case 'entrance':
    case 'shoes_closet':
    case 'porch':
      return 'tile'; // ポーチと同じタイル
    case 'japanese':
      return 'tatami'; // 畳
    case 'bathroom':
    case 'balcony':
    case 'garage':
      return 'tile'; // タイル系
    default:
      return 'flooring'; // 通常のフローリング
  }
};

// 部屋タイプの日本語名
export const ROOM_TYPE_NAMES: Record<RoomType, string> = {
  ldk: 'LDK',
  living: 'リビング',
  dining: 'ダイニング',
  kitchen: 'キッチン',
  bedroom: '寝室',
  children: '子供部屋',
  japanese: '和室',
  entrance: '玄関',
  shoes_closet: 'シューズクローク',
  hallway: '廊下',
  stairs: '階段',
  toilet: 'トイレ',
  bathroom: '浴室',
  washroom: '洗面所・脱衣所',
  closet: 'クローゼット',
  walk_in_closet: 'ウォークインクローゼット',
  balcony: 'バルコニー',
  porch: 'ポーチ',
  garage: 'ガレージ',
  storage: '収納',
  other: 'その他',
};

export const useFloorPlanStore = create<FloorPlanState>()(
  persist(
    (set) => ({
      floorPlanImages: [],
      rooms: [],
      mainSelections: {},
      isAnalyzing: false,
      error: null,

      addFloorPlanImage: (image) => set((state) => ({
        floorPlanImages: [...state.floorPlanImages, image],
      })),

      removeFloorPlanImage: (id) => set((state) => ({
        floorPlanImages: state.floorPlanImages.filter((img) => img.id !== id),
      })),

      setRooms: (rooms) => set({ rooms }),

      addRoom: (room) => set((state) => ({
        rooms: [...state.rooms, room],
      })),

      updateRoom: (id, updates) => set((state) => ({
        rooms: state.rooms.map((room) =>
          room.id === id ? { ...room, ...updates } : room
        ),
      })),

      removeRoom: (id) => set((state) => ({
        rooms: state.rooms.filter((room) => room.id !== id),
      })),

      setMainSelection: (type, itemId) => set((state) => ({
        mainSelections: { ...state.mainSelections, [type]: itemId },
      })),

      setRoomSelection: (roomId, type, itemId) => set((state) => ({
        rooms: state.rooms.map((room) =>
          room.id === roomId
            ? { ...room, selections: { ...room.selections, [type]: itemId } }
            : room
        ),
      })),

      setIsAnalyzing: (isAnalyzing) => set({ isAnalyzing }),

      setError: (error) => set({ error }),

      clearAll: () => set({
        floorPlanImages: [],
        rooms: [],
        mainSelections: {},
        isAnalyzing: false,
        error: null,
      }),
    }),
    {
      name: 'floor-plan-storage',
    }
  )
);
