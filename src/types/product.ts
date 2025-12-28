export type PlanType = 'LIFE' | 'LIFE+' | 'HOURS' | 'LACIE' | 'LIFE_X';

// UnitType: DBコード + 日本語表示両方サポート（後方互換性維持）
export type UnitTypeCode = 'sqm' | 'piece' | 'location' | 'set' | 'package' | 'sheet' | 'meter' | 'unit' | 'pair';
export type UnitTypeJapanese = '㎡' | '個' | '箇所' | '一式' | '梱' | '枚' | 'm' | '台' | '組' | '式';
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
  variants: ProductVariant[];
  pricing: PricingInfo[];
  description?: string;
  materialType?: MaterialType; // 素材タイプ（外壁: 窯業系/金属/塗り壁、床材: 突板/シート等）
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
}