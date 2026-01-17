export type PlanType = 'LIFE' | 'LIFE+' | 'HOURS' | 'LACIE' | 'LIFE_X' | 'LIFE_LIMITED' | 'LIFE_PLUS_LIMITED';

// プラン価格マッピング（Limited版は対応するプランと同価格）
export const PLAN_PRICE_MAP: Record<PlanType, PlanType> = {
  'LIFE': 'LIFE',
  'LIFE+': 'LIFE+',
  'HOURS': 'HOURS',
  'LACIE': 'LACIE',
  'LIFE_X': 'LIFE',           // LIFE Xは LIFEと同価格
  'LIFE_LIMITED': 'LIFE',     // LIFE Limitedは LIFEと同価格
  'LIFE_PLUS_LIMITED': 'LIFE+', // LIFE+ Limitedは LIFE+と同価格
};

// UnitType: DBコード + 日本語表示両方サポート（後方互換性維持）
export type UnitTypeCode = 'sqm' | 'piece' | 'location' | 'set' | 'package' | 'sheet' | 'meter' | 'unit' | 'pair';
export type UnitTypeJapanese = '㎡' | '個' | '箇所' | '一式' | 'セット' | '梱' | '枚' | 'm' | '台' | '組' | '式';
export type UnitType = UnitTypeCode | UnitTypeJapanese;

// 単位コードから日本語表示への変換マップ
export const UNIT_SYMBOLS: Record<string, string> = {
  // Code to Japanese
  sqm: '㎡',
  piece: '個',
  location: '箇所',
  set: '一式',
  package: '梱',
  sheet: '枚',
  meter: 'm',
  unit: '台',
  pair: '組',
  // Japanese passthrough
  '㎡': '㎡',
  '個': '個',
  '箇所': '箇所',
  '一式': '一式',
  '梱': '梱',
  '枚': '枚',
  'm': 'm',
  '台': '台',
  '組': '組',
  '式': '一式',
};

export interface ProductVariant {
  id: string;
  color: string;
  colorCode?: string;
  modelNumber?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  images?: string[];
}

export interface PricingInfo {
  planId?: PlanType;
  plan?: PlanType;
  price: number;
}

// 素材タイプ（カテゴリ内のサブグループ）
// 外壁: 窯業系サイディング / 金属サイディング / 塗り壁
// 床材: 突板 / シート / 挽板 / 無垢 / CFシート / タイルフロア / カーペット
export type MaterialType = string;

export interface Product {
  id: string;
  categoryId: string;
  categoryName: string;
  subcategory: string;
  name: string;
  manufacturer: string;
  series?: string; // シリーズ名（水回り設備用: LIXIL リシェル/ノクト等）
  modelNumber: string;
  unit: UnitType;
  isOption: boolean;
  isHit?: boolean; // オススメ商品フラグ
  variants: ProductVariant[];
  pricing: PricingInfo[];
  description?: string;
  materialType?: MaterialType; // 素材タイプ（外壁: 窯業系/金属/塗り壁、床材: 突板/シート等）
  requiresGas?: boolean; // ガス引込み必須の商品（乾太くん等）
  installationImages?: string[]; // メーカー施工写真URL
  productUrl?: string; // メーカー詳細ページURL
}

export interface Category {
  id: string;
  name: string;
  displayOrder: number;
  icon?: string;
}

export interface CartItem {
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
  plan?: PlanType;
  // ㎡指定アイテム用
  area?: number;           // 面積（㎡）
  colorIndex?: number;     // 色番号（1, 2, 3...）複数色選択時の識別用
  // 部屋適用情報（ベース床・壁・天井用）
  appliedRooms?: string[]; // 適用する部屋ID配列
}

// 部屋タイプ定義（ベース床・壁・天井選択用）
export interface RoomType {
  id: string;
  name: string;
  icon: string;
  floor: number;
  group: 'main' | 'bedroom' | 'water' | 'common' | 'storage';
}

// 標準部屋リスト
export const STANDARD_ROOMS: RoomType[] = [
  { id: 'living', name: 'リビング', icon: '🛋️', floor: 1, group: 'main' },
  { id: 'dining', name: 'ダイニング', icon: '🍽️', floor: 1, group: 'main' },
  { id: 'kitchen', name: 'キッチン', icon: '🍳', floor: 1, group: 'main' },
  { id: 'entrance', name: '玄関', icon: '🚪', floor: 1, group: 'common' },
  { id: 'toilet1', name: 'トイレ（1階）', icon: '🚽', floor: 1, group: 'water' },
  { id: 'washroom', name: '洗面室', icon: '🪥', floor: 1, group: 'water' },
  { id: 'master', name: '主寝室', icon: '🛏️', floor: 2, group: 'bedroom' },
  { id: 'child1', name: '子供部屋1', icon: '👶', floor: 2, group: 'bedroom' },
  { id: 'child2', name: '子供部屋2', icon: '👶', floor: 2, group: 'bedroom' },
  { id: 'toilet2', name: 'トイレ（2階）', icon: '🚽', floor: 2, group: 'water' },
  { id: 'corridor', name: '廊下・階段', icon: '🚶', floor: 0, group: 'common' },
  { id: 'closet', name: 'クローゼット', icon: '👔', floor: 0, group: 'storage' },
];

// ㎡指定が必要なカテゴリID
export const AREA_BASED_CATEGORIES = [
  'exterior-wall',      // 外壁
  'soffit',             // 軒天
  'flooring',           // 床材
  'wall-cloth',         // 壁クロス
  'ceiling-cloth',      // 天井クロス
  'wall-material',      // 壁材
  'base-floor',         // ベース床
  'base-wall-cloth',    // ベースクロス（壁）
  'base-ceiling-cloth', // ベースクロス（天井）
] as const;