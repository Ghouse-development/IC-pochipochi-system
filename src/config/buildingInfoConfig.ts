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

// 天井高のオプション（共通）
const CEILING_HEIGHT_OPTIONS = [
  { id: '2100', label: '2100mm' },
  { id: '2150', label: '2150mm' },
  { id: '2200', label: '2200mm' },
  { id: '2250', label: '2250mm' },
  { id: '2300', label: '2300mm' },
  { id: '2400', label: '2400mm' },
  { id: '2500', label: '2500mm' },
  { id: '2600', label: '2600mm' },
];

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
      options: CEILING_HEIGHT_OPTIONS,
    },
    {
      id: 'ceiling_height_2f',
      name: '天井高 2階',
      required: false,
      options: CEILING_HEIGHT_OPTIONS,
    },
    {
      id: 'ceiling_height_3f',
      name: '天井高 3階',
      required: false,
      options: CEILING_HEIGHT_OPTIONS,
    },
    {
      id: 'ceiling_height_up_1f',
      name: '天井高UP 1階',
      required: false,
      options: [
        { id: 'no', label: '無し（標準 2400mm）' },
        { id: '100', label: '+100mm UP（2500mm）', description: '施工面積に応じて金額加算' },
        { id: '200', label: '+200mm UP（2600mm）', description: '施工面積に応じて金額加算' },
      ],
    },
    {
      id: 'ceiling_height_up_2f',
      name: '天井高UP 2階',
      required: false,
      options: [
        { id: 'no', label: '無し（標準 2400mm）' },
        { id: '100', label: '+100mm UP（2500mm）', description: '施工面積に応じて金額加算' },
        { id: '200', label: '+200mm UP（2600mm）', description: '施工面積に応じて金額加算' },
      ],
    },
    {
      id: 'ceiling_height_up_3f',
      name: '天井高UP 3階',
      required: false,
      options: [
        { id: 'no', label: '無し（標準 2400mm）' },
        { id: '100', label: '+100mm UP（2500mm）', description: '施工面積に応じて金額加算' },
        { id: '200', label: '+200mm UP（2600mm）', description: '施工面積に応じて金額加算' },
      ],
    },
    {
      id: 'slope_ceiling',
      name: '勾配天井',
      required: false,
      options: [
        { id: 'no', label: '無し' },
        { id: 'yes', label: '有り', description: '施工面積を入力してください' },
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
        { id: 'evoltz', label: 'evoltz', description: '制振ダンパー' },
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
      id: 'wall_pattern_count',
      name: '外壁貼り分け',
      required: false,
      options: [
        { id: '1', label: '1色（貼り分けなし）', description: '統一カラー' },
        { id: '2', label: '2色（貼り分けあり）', description: 'メイン・アクセントの2色' },
        { id: '3', label: '3色（貼り分けあり）', description: '3色使い' },
      ],
    },
    {
      id: 'porch_extension',
      name: 'ポーチ拡張',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'yes', label: '有', description: '1.8m×1.8m以上の場合 ¥60,000/㎡UP' },
      ],
    },
    {
      id: 'parapet',
      name: 'パラペット',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: '1', label: '1ヶ所' },
        { id: '2', label: '2ヶ所' },
        { id: '3', label: '3ヶ所' },
      ],
    },
    {
      id: 'balcony',
      name: 'バルコニー',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: '1', label: '1ヶ所' },
        { id: '2', label: '2ヶ所' },
        { id: '3', label: '3ヶ所' },
      ],
    },
    {
      id: 'eaves_ceiling',
      name: '軒天',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: '1', label: '1ヶ所' },
        { id: '2', label: '2ヶ所' },
        { id: '3', label: '3ヶ所' },
      ],
    },
    {
      id: 'fascia',
      name: '破風',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: '1', label: '1ヶ所', description: 'EP塗装（ホワイト/ブラック）' },
        { id: '2', label: '2ヶ所', description: 'EP塗装（ホワイト/ブラック）' },
        { id: '3', label: '3ヶ所', description: 'EP塗装（ホワイト/ブラック）' },
      ],
    },
    {
      id: 'canopy',
      name: '庇',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'ad2s_1', label: 'アルフィン庇 AD2S×1', description: 'W1800×D900 ¥258,000/式' },
        { id: 'ad2s_2', label: 'アルフィン庇 AD2S×2', description: 'W1800×D900 ¥258,000/式×2' },
        { id: 'ad2s_3', label: 'アルフィン庇 AD2S×3', description: 'W1800×D900 ¥258,000/式×3' },
        { id: 'af95_1', label: 'アルフィン庇 AF95×1', description: '木目調仕上げ W1800×D950 ¥352,000/式' },
        { id: 'af95_2', label: 'アルフィン庇 AF95×2', description: '木目調仕上げ W1800×D950 ¥352,000/式×2' },
        { id: 'af95_3', label: 'アルフィン庇 AF95×3', description: '木目調仕上げ W1800×D950 ¥352,000/式×3' },
      ],
    },
    {
      id: 'garage_shutter',
      name: '電動ガレージシャッター',
      required: false,
      options: [
        { id: 'no', label: '無' },
        { id: 'sunauto_1', label: 'サンオートハイスピード×1', description: '三和シャッター ¥540,000〜/式' },
        { id: 'sunauto_2', label: 'サンオートハイスピード×2', description: '三和シャッター ¥540,000〜/式×2' },
        { id: 'sunauto_3', label: 'サンオートハイスピード×3', description: '三和シャッター ¥540,000〜/式×3' },
        { id: 'ifudo_1', label: '威風堂々×1', description: '三和シャッター ¥1,290,000〜/式' },
        { id: 'ifudo_2', label: '威風堂々×2', description: '三和シャッター ¥1,290,000〜/式×2' },
        { id: 'ifudo_3', label: '威風堂々×3', description: '三和シャッター ¥1,290,000〜/式×3' },
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
        { id: '1', label: '1ヶ所' },
        { id: '2', label: '2ヶ所' },
        { id: '3', label: '3ヶ所' },
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
      id: 'floor_inspection_hatch',
      name: '床下点検口',
      required: false,
      options: [
        { id: '1', label: '1ヶ所', description: 'デフォルト' },
        { id: '2', label: '2ヶ所' },
        { id: '3', label: '3ヶ所' },
        { id: '4', label: '4ヶ所' },
        { id: '5', label: '5ヶ所' },
        { id: '6', label: '6ヶ所以上' },
      ],
    },
    {
      id: 'ceiling_inspection_hatch',
      name: '天井点検口',
      required: false,
      options: [
        { id: '1', label: '1ヶ所' },
        { id: '2', label: '2ヶ所', description: 'デフォルト' },
        { id: '3', label: '3ヶ所' },
        { id: '4', label: '4ヶ所' },
        { id: '5', label: '5ヶ所' },
        { id: '6', label: '6ヶ所以上' },
      ],
    },
    {
      id: 'ventilation_unit',
      name: '換気システム本体',
      required: false,
      options: [
        { id: '1', label: '1台', description: '平屋デフォルト' },
        { id: '2', label: '2台', description: '2階建てデフォルト' },
        { id: '3', label: '3台', description: '3階建てデフォルト' },
        { id: '4', label: '4台' },
      ],
    },
    {
      id: 'air_inlet',
      name: '換気システム給気口',
      required: false,
      options: [
        { id: '3', label: '3ヶ所' },
        { id: '4', label: '4ヶ所' },
        { id: '5', label: '5ヶ所', description: 'デフォルト' },
        { id: '6', label: '6ヶ所' },
        { id: '7', label: '7ヶ所' },
        { id: '8', label: '8ヶ所' },
        { id: '9', label: '9ヶ所' },
        { id: '10', label: '10ヶ所以上' },
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

// 給湯器タイプ（カタログスタイル表示用）
export const WATER_HEATER_TYPES = [
  { id: 'ecocute', name: 'エコキュート', emoji: '♨️', description: '電気給湯器（標準）' },
  { id: 'ohisama', name: 'おひさまエコキュート', emoji: '☀️', description: '太陽光連携型給湯器' },
  { id: 'niagara', name: 'ナイアガラ出湯', emoji: '💧', description: '高圧給湯エコキュート' },
  { id: 'ecojoz', name: 'エコジョーズ', emoji: '🔥', description: 'ガス給湯器（ガス引込み必要）' },
] as const;

// 給湯器商品タイプ（タイプ選択後のサブ選択肢）
export const WATER_HEATER_PRODUCTS = {
  ecocute: [
    { id: 'ecocute_370_standard', label: '370L 普通', description: '3〜4人家族向け', isDefault: true },
    { id: 'ecocute_370_slim', label: '370L 薄型', description: '設置スペースが限られる場合' },
    { id: 'ecocute_460_standard', label: '460L 普通', description: '4〜5人家族向け' },
    { id: 'ecocute_460_slim', label: '460L 薄型', description: '大家族・設置スペース限定' },
  ],
  ohisama: [
    { id: 'ohisama_370_standard', label: '370L 普通', description: '3〜4人家族向け', isDefault: true },
    { id: 'ohisama_370_slim', label: '370L 薄型', description: '設置スペースが限られる場合' },
    { id: 'ohisama_460_standard', label: '460L 普通', description: '4〜5人家族向け' },
    { id: 'ohisama_460_slim', label: '460L 薄型', description: '大家族・設置スペース限定' },
  ],
  niagara: [
    { id: 'niagara_370_standard', label: '370L 普通', description: '3〜4人家族向け', isDefault: true },
    { id: 'niagara_370_slim', label: '370L 薄型', description: '設置スペースが限られる場合' },
    { id: 'niagara_460_standard', label: '460L 普通', description: '4〜5人家族向け' },
    { id: 'niagara_460_slim', label: '460L 薄型', description: '大家族・設置スペース限定' },
  ],
  ecojoz: [
    { id: 'ecojoz_24', label: '24号', description: '2〜3人家族向け', isDefault: true },
    { id: 'ecojoz_20', label: '20号', description: '1〜2人家族向け' },
    { id: 'ecojoz_16', label: '16号', description: '単身向け' },
  ],
} as const;

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
        { id: 'ecocute', label: 'エコキュート', description: '電気給湯器（標準）' },
        { id: 'ohisama', label: 'おひさまエコキュート', description: '太陽光連携型給湯器' },
        { id: 'niagara', label: 'ナイアガラ出湯', description: '高圧給湯エコキュート' },
        { id: 'ecojoz', label: 'エコジョーズ', description: 'ガス給湯器（ガス引込み必要）' },
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
        { id: 'sumitomo', label: '住友電工' },
        { id: 'other', label: 'その他' },
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

// 建築情報セクション（地域・仕様・建物詳細・構造と規格・各種申請）
export const BUILDING_INFO_SECTIONS_BASIC: BuildingInfoSection[] = [
  REGION_SECTION,
  SPEC_SECTION,
  BUILDING_DETAIL_SECTION,
  STRUCTURE_SECTION,
  APPLICATION_SECTION,
];

// 間取情報セクション（外構・ポーチ、玄関・窓、設備・電気・エネルギー・その他）
export const BUILDING_INFO_SECTIONS_FLOOR_PLAN: BuildingInfoSection[] = [
  EXTERIOR_SECTION,
  ENTRANCE_WINDOW_SECTION,
  EQUIPMENT_SECTION,
  ENERGY_SECTION,
  OTHER_SECTION,
];

// 全セクション（互換性のため維持）
export const BUILDING_INFO_SECTIONS: BuildingInfoSection[] = [
  ...BUILDING_INFO_SECTIONS_BASIC,
  ...BUILDING_INFO_SECTIONS_FLOOR_PLAN,
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
  ceiling_height_2f?: string;
  ceiling_height_3f?: string;
  ceiling_height_up_1f?: string; // 天井高UP 1階 (no/100/200)
  ceiling_height_up_2f?: string; // 天井高UP 2階 (no/100/200)
  ceiling_height_up_3f?: string; // 天井高UP 3階 (no/100/200)
  ceiling_height_up_1f_area?: number; // 天井高UP 1階 施工面積（㎡）
  ceiling_height_up_2f_area?: number; // 天井高UP 2階 施工面積（㎡）
  ceiling_height_up_3f_area?: number; // 天井高UP 3階 施工面積（㎡）
  slope_ceiling?: string; // 勾配天井 (no/yes)
  slope_ceiling_area?: number; // 勾配天井 施工面積（㎡）
  ground_improvement?: string;
  damper: string;
  module: string;
  certifications?: string | string[]; // 複数選択対応
  // 外構・ポーチ
  wall_pattern_count?: string; // 外壁貼り分け箇所数 (1-3)
  porch_extension?: string;
  porch_extension_area?: number; // ポーチ拡張面積（㎡）
  parapet?: string;
  balcony?: string;
  eaves_ceiling?: string;
  eaves_ceiling_areas?: number[]; // 軒天面積（各箇所）
  fascia?: string; // 破風の有無・箇所数
  fascia_color?: string; // 破風の色（ホワイト/ブラック）
  canopy?: string; // 庇の種類と台数
  canopy_types?: string[]; // 庇タイプ（各箇所）- 色選択用
  garage_shutter?: string; // ガレージシャッターの種類と台数
  garage_types?: string[]; // ガレージタイプ（各箇所）- 色選択用
  // 玄関・窓
  entrance_door_count?: string;
  window_type?: string;
  interior_window?: string;
  // 設備
  floor_inspection_hatch?: string;
  floor_inspection_hatch_rooms?: string[]; // 床下点検口のある部屋
  ceiling_inspection_hatch?: string;
  ceiling_inspection_hatch_rooms?: string[]; // 天井点検口のある部屋
  ventilation_unit?: string;
  ventilation_unit_rooms?: string[]; // 換気システム本体のある部屋
  air_inlet?: string;
  air_inlet_rooms?: string[]; // 給気口のある部屋
  relay_pole?: string;
  entrance_sink?: string;
  // 電気・エネルギー
  water_heater?: string;
  water_heater_product?: string; // 給湯器商品タイプ（370L標準など）
  ventilation?: string;
  intercom_count?: string;
  solar?: string; // 無/有
  solar_brand?: string; // ネクストエナジー/その他
  solar_other_brand?: string; // カナディアンソーラー/マキシオン/長州産業/その他
  solar_other?: string; // 太陽光その他の自由入力
  battery?: string;
  battery_other?: string; // 蓄電池その他の自由入力
  v2h?: string;
  // その他
  gas_work?: string;
  iron_stairs_1f_2f?: string;
  iron_stairs_2f_3f?: string;
  // 面積情報（数値入力）
  exterior_wall_area?: number; // 外壁面積（㎡）
  eaves_area?: number; // 軒裏面積（㎡）
  total_floor_area?: number; // 延床面積（㎡）
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
  ceiling_height_2f: '2400',
  ceiling_height_3f: '2400',
  ceiling_height_up_1f: 'no', // 天井高UP 1階: 無し（標準）
  ceiling_height_up_2f: 'no', // 天井高UP 2階: 無し（標準）
  ceiling_height_up_3f: 'no', // 天井高UP 3階: 無し（標準）
  slope_ceiling: 'no', // 勾配天井: 無し
  ground_improvement: 'no',
  damper: 'evoltz',
  module: '910',
  certifications: [],
  // 外構・ポーチ
  wall_pattern_count: '1', // デフォルト: 1色
  porch_extension: 'no',
  parapet: 'no',
  balcony: 'no',
  eaves_ceiling: 'no',
  fascia: 'no',
  canopy: 'no',
  garage_shutter: 'no',
  // 玄関・窓
  entrance_door_count: '1',
  window_type: 'apw330',
  interior_window: 'no',
  // 設備
  floor_inspection_hatch: '1', // デフォルト: 1ヶ所
  ceiling_inspection_hatch: '2', // デフォルト: 2ヶ所
  ventilation_unit: '2', // デフォルト: 2台（2階建て）
  air_inlet: '5', // デフォルト: 5ヶ所
  relay_pole: 'no',
  entrance_sink: 'no',
  // 電気・エネルギー
  water_heater: 'ecocute', // デフォルト: エコキュート
  water_heater_product: 'ecocute_370_standard', // デフォルト: 370L標準
  ventilation: 'panasonic',
  intercom_count: '1',
  solar: 'yes', // デフォルト: 有
  solar_brand: 'nextenergy', // デフォルト: ネクストエナジー
  battery: 'no', // デフォルト: 無
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
