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

// 各種申請セクション
const APPLICATION_SECTION: BuildingInfoSection = {
  id: 'application',
  title: '各種申請',
  categories: [
    {
      id: 'certifications',
      name: '各種申請',
      required: false,
      options: [
        { id: 'long_term', label: '長期優良住宅', description: '長期優良住宅認定' },
        { id: 'bels', label: 'BELS', description: '建築物省エネルギー性能表示制度' },
        { id: 'jio', label: '住宅性能証明（JIO）', description: 'JIO住宅性能証明' },
        { id: 'flat', label: 'フラット', description: 'フラット35適合' },
        { id: 'none', label: '未選択', description: '特に申請なし' },
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
  certifications?: string;
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
  certifications: 'none',
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
