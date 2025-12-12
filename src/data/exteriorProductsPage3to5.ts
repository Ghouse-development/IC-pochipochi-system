// エクステリア（外装）製品データ - ページ3-5追加分
import type { Product } from '../types/product';

export const exteriorProductsPage3to5: Product[] = [
  // ===== 外壁 - ニチハ ディスタシェイドV =====
  {
    id: 'ext-wall-distashade-001',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ディスタシェイドV',
    name: 'ストレムMGネイビー',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5456YK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '5B 2/1', colorCode: '5B 2/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-distashade-002',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ディスタシェイドV',
    name: 'ストレムMGホワイト',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5451YK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10YR 9/1', colorCode: '10YR 9/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-distashade-003',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ディスタシェイドV',
    name: 'ストレムMGクリーム',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5452YK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10R 8/1', colorCode: '10R 8/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-distashade-004',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ディスタシェイドV',
    name: 'ストレムMGブラウン',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5453YK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '2.5Y 5/4', colorCode: '2.5Y 5/4', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-distashade-005',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ディスタシェイドV',
    name: 'ストレムMGセピア',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5454LK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10YR 4/2', colorCode: '10YR 4/2', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ ボルブストーン調V 追加 =====
  {
    id: 'ext-wall-borbu-002',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ボルブストーン調V',
    name: 'エアルMGラテ',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3152FK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '7.5YR 5/3', colorCode: '7.5YR 5/3', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-borbu-003',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ボルブストーン調V',
    name: 'エアルMGトリュフ',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3153LK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '2.5Y 3/2', colorCode: '2.5Y 3/2', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ コルモストーン調V =====
  {
    id: 'ext-wall-colmo-std-001',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コルモストーン調V',
    name: 'フォンドMGダーク',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3355NK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '5Y 4/1', colorCode: '5Y 4/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-colmo-std-002',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コルモストーン調V',
    name: 'フォンドMGシュガー',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3351NK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10YR 8/1', colorCode: '10YR 8/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-colmo-std-003',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コルモストーン調V',
    name: 'フォンドMGリーフ',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3352NK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '2.5Y 6/3', colorCode: '2.5Y 6/3', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-colmo-std-004',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コルモストーン調V',
    name: 'フォンドMGショコラ',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3353RK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '7.5YR 3/4', colorCode: '7.5YR 3/4', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ コンクリート打ちっ放し16V =====
  {
    id: 'ext-wall-concrete-001',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コンクリート打ちっ放し16V',
    name: 'コンクリートMGライトグレー',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA4351NK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: 'N 7', colorCode: 'N 7', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ グレインウッドV =====
  {
    id: 'ext-wall-grainwood-001',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'グレインウッドV',
    name: 'スペリオMGネイビー',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA2258YK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '5PB 2/1', colorCode: '5PB 2/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-grainwood-002',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'グレインウッドV',
    name: 'スペリオMGナチュラル',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA2251FK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10YR 7/2', colorCode: '10YR 7/2', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-grainwood-003',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'グレインウッドV',
    name: 'スペリオMGウォルナット',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA2256FK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10R 3/3', colorCode: '10R 3/3', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-grainwood-004',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'グレインウッドV',
    name: 'スペリオMGブラック',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA2255LK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10YR 3/2', colorCode: '10YR 3/2', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ マイスターウッド調V =====
  {
    id: 'ext-wall-meister-001',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'マイスターウッド調V',
    name: 'イデアルMGボルドー',
    manufacturer: 'ニチハ',
    modelNumber: 'EF9355FK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10R 3/3', colorCode: '10R 3/3', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-meister-002',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'マイスターウッド調V',
    name: 'イデアルMGチャコール',
    manufacturer: 'ニチハ',
    modelNumber: 'EF9356FK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10R 3/1', colorCode: '10R 3/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-meister-003',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'マイスターウッド調V',
    name: 'イデアルMGブラウン',
    manufacturer: 'ニチハ',
    modelNumber: 'EF9357GK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '5YR 3/2', colorCode: '5YR 3/2', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-meister-004',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'マイスターウッド調V',
    name: 'イデアルMGグレー',
    manufacturer: 'ニチハ',
    modelNumber: 'EF9358YK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '2.5Y 6/1', colorCode: '2.5Y 6/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-meister-005',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'マイスターウッド調V',
    name: 'イデアルMGグリーン',
    manufacturer: 'ニチハ',
    modelNumber: 'EF9359YK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '5GY 5/1', colorCode: '5GY 5/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ しぶきV =====
  {
    id: 'ext-wall-shibuki-001',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'しぶきV',
    name: 'プラムMGバニラホワイトII',
    manufacturer: 'ニチハ',
    modelNumber: 'EF5356C2K',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10Y 9/1', colorCode: '10Y 9/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-shibuki-002',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'しぶきV',
    name: 'プラムMGアッシュII',
    manufacturer: 'ニチハ',
    modelNumber: 'EF5357JK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '10YR 8/1', colorCode: '10YR 8/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-shibuki-003',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'しぶきV',
    name: 'プラムMGクリームII',
    manufacturer: 'ニチハ',
    modelNumber: 'EF5358JK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '2.5Y 8/2', colorCode: '2.5Y 8/2', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-shibuki-004',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'しぶきV',
    name: 'プラムMGブラウンII',
    manufacturer: 'ニチハ',
    modelNumber: 'EF5359JK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '2.5Y 6/3', colorCode: '2.5Y 6/3', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-shibuki-005',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'しぶきV',
    name: 'プラムMGセピアII',
    manufacturer: 'ニチハ',
    modelNumber: 'EF5362JK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '2.5Y 4/3', colorCode: '2.5Y 4/3', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-shibuki-006',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'しぶきV',
    name: 'プラムMGウィニーホワイトII',
    manufacturer: 'ニチハ',
    modelNumber: 'EF5363GK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '5Y 9/1', colorCode: '5Y 9/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-wall-shibuki-007',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'しぶきV',
    name: 'プラムMGシェルトグレーII',
    manufacturer: 'ニチハ',
    modelNumber: 'EF5364GK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [{ id: 'v1', color: '5Y 6/1', colorCode: '5Y 6/1', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  }
];
