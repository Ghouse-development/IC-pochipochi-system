// 水回り設備のメーカー・シリーズ設定

export interface ManufacturerSeries {
  id: string;
  name: string;
}

export interface ManufacturerConfig {
  id: string;
  name: string;
  series: ManufacturerSeries[];
}

export interface WaterEquipmentCategoryConfig {
  categoryName: string;
  manufacturers: ManufacturerConfig[];
}

// キッチン メーカー・シリーズ設定
export const KITCHEN_MANUFACTURERS: ManufacturerConfig[] = [
  {
    id: 'ghouse',
    name: 'Gハウスオリジナル',
    series: [
      { id: 'utillia', name: 'ユティリア' },
      { id: 'revas', name: 'リーヴァス' },
    ]
  },
  {
    id: 'graftekt',
    name: 'グラフテクト',
    series: [] // シリーズなし（1種類のみ）
  },
  {
    id: 'lixil',
    name: 'LIXIL',
    series: [
      { id: 'richelle', name: 'リシェル' },
      { id: 'nocto', name: 'ノクト' },
    ]
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    series: [] // シリーズなし
  },
  {
    id: 'takara',
    name: 'タカラスタンダード',
    series: [] // シリーズなし
  },
  {
    id: 'cleanup',
    name: 'クリナップ',
    series: [] // シリーズなし
  },
];

// バスルーム メーカー設定
export const BATHROOM_MANUFACTURERS: ManufacturerConfig[] = [
  {
    id: 'lixil',
    name: 'LIXIL',
    series: []
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    series: []
  },
];

// 洗面化粧台 メーカー設定
export const WASHSTAND_MANUFACTURERS: ManufacturerConfig[] = [
  {
    id: 'toto',
    name: 'TOTO',
    series: []
  },
  {
    id: 'lixil',
    name: 'LIXIL',
    series: []
  },
  {
    id: 'aica',
    name: 'AICA',
    series: []
  },
];

// トイレ メーカー設定
export const TOILET_MANUFACTURERS: ManufacturerConfig[] = [
  {
    id: 'toto',
    name: 'TOTO',
    series: []
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    series: []
  },
];

// 全カテゴリ設定
export const WATER_EQUIPMENT_CONFIG: WaterEquipmentCategoryConfig[] = [
  {
    categoryName: 'キッチン',
    manufacturers: KITCHEN_MANUFACTURERS,
  },
  {
    categoryName: 'バスルーム',
    manufacturers: BATHROOM_MANUFACTURERS,
  },
  {
    categoryName: '洗面化粧台',
    manufacturers: WASHSTAND_MANUFACTURERS,
  },
  {
    categoryName: 'トイレ',
    manufacturers: TOILET_MANUFACTURERS,
  },
];

/**
 * カテゴリ名からメーカー設定を取得
 */
export function getManufacturersForCategory(categoryName: string): ManufacturerConfig[] {
  const config = WATER_EQUIPMENT_CONFIG.find(c => c.categoryName === categoryName);
  return config?.manufacturers || [];
}

/**
 * メーカーにシリーズ選択が必要かどうか
 */
export function hasSeriesSelection(manufacturer: ManufacturerConfig): boolean {
  return manufacturer.series.length >= 2;
}
