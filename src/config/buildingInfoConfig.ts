/**
 * 建築情報設定
 * プロジェクト登録時に選択する建築情報の定義
 */

export interface BuildingInfoOption {
  id: string;
  label: string;
  description?: string;
}

export interface BuildingInfoCategory {
  id: string;
  name: string;
  required: boolean;
  multiple?: boolean; // 複数選択可能かどうか
  options: BuildingInfoOption[];
}

export interface BuildingInfoSection {
  id: string;
  title: string;
  categories: BuildingInfoCategory[];
}

// 地域セクション
const REGION_SECTION: BuildingInfoSection = {
  id: 'region',
  title: '地域',
  categories: [
    {
      id: 'fire_zone',
      name: '防火区分',
      required: true,
      options: [
        { id: 'law22', label: '法22条地域', description: '延焼のおそれのある部分の外壁等に防火措置が必要' },
        { id: 'semi_fire', label: '準防火地域', description: '建物の構造に一定の防火性能が必要' },
        { id: 'fire', label: '防火地域', description: '耐火建築物または準耐火建築物が必要' },
        { id: 'none', label: '指定なし', description: '特別な防火規制なし' },
      ],
    },
    {
      id: 'salt_zone',
      name: '塩害区分',
      required: false,
      options: [
        { id: 'general', label: '一般地', description: '通常の仕様' },
        { id: 'salt', label: '塩害地', description: '耐塩害仕様が必要' },
      ],
    },
    {
      id: 'snow_zone',
      name: '積雪区分',
      required: false,
      options: [
        { id: 'general', label: '一般区域', description: '通常の仕様' },
        { id: 'heavy_snow', label: '多雪区域', description: '耐雪仕様が必要' },
      ],
    },
  ],
};

// 仕様セクション
const SPEC_SECTION: BuildingInfoSection = {
  id: 'spec',
  title: '仕様',
  categories: [
    {
      id: 'fire_resistance',
      name: '耐火仕様',
      required: true,
      options: [
        { id: 'decree_semi', label: '省令準耐火仕様', description: '住宅金融支援機構の基準に適合' },
        { id: '45min_semi', label: '45分準耐火仕様', description: '45分間の耐火性能' },
        { id: '75min_semi', label: '75分準耐火仕様', description: '75分間の耐火性能' },
      ],
    },
    {
      id: 'construction_method',
      name: '工法',
      required: true,
      options: [
        { id: 'wood_frame', label: '木造在来軸組工法', description: '伝統的な木造工法' },
        { id: 'techno', label: 'テクノストラクチャー', description: 'パナソニック耐震住宅工法' },
      ],
    },
  ],
};

// 建物詳細セクション
const BUILDING_DETAIL_SECTION: BuildingInfoSection = {
  id: 'building_detail',
  title: '建物詳細',
  categories: [
    {
      id: 'floors',
      name: '階数',
      required: true,
      options: [
        { id: '1f', label: '平屋', description: '1階建て' },
        { id: '2f', label: '2階建', description: '2階建て' },
        { id: '3f', label: '3階建', description: '3階建て' },
      ],
    },
    {
      id: 'ceiling_height_1f',
      name: '天井高 1階',
      required: true,
      options: [
        { id: '2100', label: '2100mm' },
        { id: '2150', label: '2150mm' },
        { id: '2200', label: '2200mm' },
        { id: '2250', label: '2250mm' },
        { id: '2300', label: '2300mm' },
        { id: '2400', label: '2400mm' },
        { id: '2500', label: '2500mm' },
        { id: '2600', label: '2600mm' },
      ],
    },
  ],
};

// 構造と規格セクション
const STRUCTURE_SECTION: BuildingInfoSection = {
  id: 'structure',
  title: '構造と規格',
  categories: [
    {
      id: 'ground_improvement',
      name: '地盤改良',
      required: false,
      options: [
        { id: 'yes', label: '地盤改良 有', description: '地盤改良工事を実施' },
        { id: 'no', label: '地盤改良 無', description: '地盤改良工事なし' },
      ],
    },
    {
      id: 'damper',
      name: '制振ダンパー',
      required: true,
      options: [
        { id: 'evoltz', label: 'エボルツ', description: '千博産業の制振ダンパー' },
        { id: 'techno_damper', label: 'テクノダンパー', description: 'パナソニックの制振ダンパー' },
        { id: 'none', label: 'なし', description: '制振ダンパーなし' },
      ],
    },
    {
      id: 'module',
      name: 'モジュール',
      required: true,
      options: [
        { id: '910', label: '910mm', description: '尺モジュール' },
        { id: '1000', label: '1000mm', description: 'メーターモジュール' },
      ],
    },
  ],
};

// 各種申請セクション（複数選択可能）
const APPLICATION_SECTION: BuildingInfoSection = {
  id: 'application',
  title: '各種申請',
  categories: [
    {
      id: 'certifications',
      name: '各種申請（複数選択可）',
      required: false,
      multiple: true, // 複数選択可能
      options: [
        { id: 'long_term', label: '長期優良住宅', description: '長期優良住宅認定' },
        { id: 'bels', label: 'BELS', description: '建築物省エネルギー性能表示制度' },
        { id: 'jio', label: '住宅性能証明（JIO）', description: 'JIO住宅性能証明' },
        { id: 'flat', label: 'フラット', description: 'フラット35適合' },
      ],
    },
  ],
};

// 外構・ポーチセクション
const EXTERIOR_SECTION: BuildingInfoSection = {
  id: 'exterior',
  title: '外構・ポーチ',
  categories: [
    {
      id: 'porch_extension',
      name: 'ポーチ拡張',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
    {
      id: 'parapet',
      name: 'パラペット',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
    {
      id: 'balcony',
      name: 'バルコニー',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
        { id: 'koshikabe', label: '腰壁' },
      ],
    },
    {
      id: 'eaves_ceiling',
      name: '軒天',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
    {
      id: 'canopy',
      name: '庇',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
    {
      id: 'garage_shutter',
      name: 'ガレージシャッター',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
  ],
};

// 玄関・窓セクション
const ENTRANCE_WINDOW_SECTION: BuildingInfoSection = {
  id: 'entrance_window',
  title: '玄関・窓',
  categories: [
    {
      id: 'entrance_door_count',
      name: '玄関ドア個数',
      required: false,
      options: [
        { id: '1', label: '1個' },
        { id: '2', label: '2個' },
      ],
    },
    {
      id: 'window_type',
      name: '窓種類',
      required: false,
      options: [
        { id: 'apw330', label: 'APW330', description: '樹脂窓（標準）' },
        { id: 'apw430', label: 'APW430', description: 'トリプルガラス樹脂窓' },
      ],
    },
    {
      id: 'interior_window',
      name: '室内窓',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
  ],
};

// 設備セクション
const EQUIPMENT_SECTION: BuildingInfoSection = {
  id: 'equipment',
  title: '設備',
  categories: [
    {
      id: 'inspection_hatch',
      name: '点検口',
      required: false,
      options: [
        { id: 'japanese', label: '和室' },
        { id: 'western', label: '洋室' },
      ],
    },
    {
      id: 'air_inlet',
      name: '給気口',
      required: false,
      options: [
        { id: 'japanese', label: '和室' },
        { id: 'western', label: '洋室' },
      ],
    },
    {
      id: 'relay_pole',
      name: '中継ポール',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
    {
      id: 'entrance_sink',
      name: '玄関手洗い',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
  ],
};

// 電気・エネルギーセクション
const ENERGY_SECTION: BuildingInfoSection = {
  id: 'energy',
  title: '電気・エネルギー',
  categories: [
    {
      id: 'water_heater',
      name: '給湯器',
      required: false,
      options: [
        { id: 'ecojoz', label: 'エコジョーズ', description: 'ガス給湯器（従来型）' },
        { id: 'ecojoz_hybrid', label: 'エコジョーズハイブリッド', description: 'ガス+ヒートポンプ' },
        { id: 'ecocute', label: 'エコキュート', description: '電気給湯器（ヒートポンプ）' },
        { id: 'ecocute_thin', label: 'エコキュート薄型', description: '電気給湯器（省スペース）' },
      ],
    },
    {
      id: 'ventilation',
      name: '換気システム',
      required: false,
      options: [
        { id: 'panasonic', label: 'Panasonic', description: 'パナソニック製換気システム' },
        { id: 'dsdd', label: 'DSDD', description: 'DSDD製換気システム' },
      ],
    },
    {
      id: 'intercom_count',
      name: 'インターホン個数',
      required: false,
      options: [
        { id: '1', label: '1個' },
        { id: '2', label: '2個' },
        { id: '3', label: '3個' },
      ],
    },
    {
      id: 'solar',
      name: '太陽光',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
    {
      id: 'battery',
      name: '蓄電池',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
    {
      id: 'v2h',
      name: 'V2H',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
  ],
};

// その他セクション
const OTHER_SECTION: BuildingInfoSection = {
  id: 'other',
  title: 'その他',
  categories: [
    {
      id: 'gas_work',
      name: 'ガス工事',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
    {
      id: 'iron_stairs_1f_2f',
      name: 'アイアン階段（1F-2F間）',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
    {
      id: 'iron_stairs_2f_3f',
      name: 'アイアン階段（2F-3F間）',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有' },
      ],
    },
  ],
};

// 全セクション
export const BUILDING_INFO_SECTIONS: BuildingInfoSection[] = [
  REGION_SECTION,
  SPEC_SECTION,
  BUILDING_DETAIL_SECTION,
  STRUCTURE_SECTION,
  APPLICATION_SECTION,
  EXTERIOR_SECTION,
  ENTRANCE_WINDOW_SECTION,
  EQUIPMENT_SECTION,
  ENERGY_SECTION,
  OTHER_SECTION,
];

// 建築情報の型定義
export interface BuildingInfo {
  fire_zone: string;
  salt_zone?: string;
  snow_zone?: string;
  fire_resistance: string;
  construction_method: string;
  floors: string;
  ceiling_height_1f: string;
  ground_improvement?: string;
  damper: string;
  module: string;
  certifications?: string | string[]; // 複数選択対応
  // 外構・ポーチ
  porch_extension?: string;
  parapet?: string;
  balcony?: string;
  eaves_ceiling?: string;
  canopy?: string;
  garage_shutter?: string;
  // 玄関・窓
  entrance_door_count?: string;
  window_type?: string;
  interior_window?: string;
  // 設備
  inspection_hatch?: string;
  air_inlet?: string;
  relay_pole?: string;
  entrance_sink?: string;
  // 電気・エネルギー
  water_heater?: string;
  ventilation?: string;
  intercom_count?: string;
  solar?: string;
  battery?: string;
  v2h?: string;
  // その他
  gas_work?: string;
  iron_stairs_1f_2f?: string;
  iron_stairs_2f_3f?: string;
}

// デフォルト値
export const DEFAULT_BUILDING_INFO: BuildingInfo = {
  fire_zone: 'semi_fire',
  salt_zone: 'general',
  snow_zone: 'general',
  fire_resistance: 'decree_semi',
  construction_method: 'wood_frame',
  floors: '2f',
  ceiling_height_1f: '2400',
  ground_improvement: 'no',
  damper: 'evoltz',
  module: '910',
  certifications: [],
  // 外構・ポーチ
  porch_extension: 'no',
  parapet: 'no',
  balcony: 'no',
  eaves_ceiling: 'no',
  canopy: 'no',
  garage_shutter: 'no',
  // 玄関・窓
  entrance_door_count: '1',
  window_type: 'apw330',
  interior_window: 'no',
  // 設備
  inspection_hatch: 'western',
  air_inlet: 'western',
  relay_pole: 'no',
  entrance_sink: 'no',
  // 電気・エネルギー
  water_heater: 'ecojoz',
  ventilation: 'panasonic',
  intercom_count: '1',
  solar: 'no',
  battery: 'no',
  v2h: 'no',
  // その他
  gas_work: 'no',
  iron_stairs_1f_2f: 'no',
  iron_stairs_2f_3f: 'no',
};

// カテゴリIDからセクションを取得
export const getCategoryById = (categoryId: string): BuildingInfoCategory | undefined => {
  for (const section of BUILDING_INFO_SECTIONS) {
    const category = section.categories.find(c => c.id === categoryId);
    if (category) return category;
  }
  return undefined;
};

// オプションのラベルを取得
export const getOptionLabel = (categoryId: string, optionId: string): string => {
  const category = getCategoryById(categoryId);
  if (!category) return optionId;
  const option = category.options.find(o => o.id === optionId);
  return option?.label || optionId;
};
