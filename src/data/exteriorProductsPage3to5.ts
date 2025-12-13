// エクステリア（外装）製品データ - ページ3-5追加分
// 色バリアント統合版
import type { Product } from '../types/product';

export const exteriorProductsPage3to5: Product[] = [
  // ===== 外壁 - ニチハ ディスタシェイドV =====
  {
    id: 'ext-wall-distashade-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ディスタシェイドV',
    name: 'ディスタシェイドV',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA545xYK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'ストレムMGネイビー', colorCode: '5B 2/1', images: [] },
      { id: 'v2', color: 'ストレムMGホワイト', colorCode: '10YR 9/1', images: [] },
      { id: 'v3', color: 'ストレムMGクリーム', colorCode: '10R 8/1', images: [] },
      { id: 'v4', color: 'ストレムMGブラウン', colorCode: '2.5Y 5/4', images: [] },
      { id: 'v5', color: 'ストレムMGセピア', colorCode: '10YR 4/2', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ ボルブストーン調V 追加 =====
  {
    id: 'ext-wall-borbu-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ボルブストーン調V',
    name: 'ボルブストーン調V',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX315xFK/LK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'エアルMGラテ', colorCode: '7.5YR 5/3', images: [] },
      { id: 'v2', color: 'エアルMGトリュフ', colorCode: '2.5Y 3/2', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ コルモストーン調V =====
  {
    id: 'ext-wall-colmo-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コルモストーン調V',
    name: 'コルモストーン調V',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX335xNK/RK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'フォンドMGダーク', colorCode: '5Y 4/1', images: [] },
      { id: 'v2', color: 'フォンドMGシュガー', colorCode: '10YR 8/1', images: [] },
      { id: 'v3', color: 'フォンドMGリーフ', colorCode: '2.5Y 6/3', images: [] },
      { id: 'v4', color: 'フォンドMGショコラ', colorCode: '7.5YR 3/4', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ コンクリート打ちっ放し16V =====
  {
    id: 'ext-wall-concrete-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コンクリート打ちっ放し16V',
    name: 'コンクリート打ちっ放し16V',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA4351NK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'コンクリートMGライトグレー', colorCode: 'N 7', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ グレインウッドV =====
  {
    id: 'ext-wall-grainwood-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'グレインウッドV',
    name: 'グレインウッドV',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA225xYK/FK/LK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'スペリオMGネイビー', colorCode: '5PB 2/1', images: [] },
      { id: 'v2', color: 'スペリオMGナチュラル', colorCode: '10YR 7/2', images: [] },
      { id: 'v3', color: 'スペリオMGウォルナット', colorCode: '10R 3/3', images: [] },
      { id: 'v4', color: 'スペリオMGブラック', colorCode: '10YR 3/2', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ マイスターウッド調V =====
  {
    id: 'ext-wall-meister-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'マイスターウッド調V',
    name: 'マイスターウッド調V',
    manufacturer: 'ニチハ',
    modelNumber: 'EF935xFK/GK/YK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'イデアルMGボルドー', colorCode: '10R 3/3', images: [] },
      { id: 'v2', color: 'イデアルMGチャコール', colorCode: '10R 3/1', images: [] },
      { id: 'v3', color: 'イデアルMGブラウン', colorCode: '5YR 3/2', images: [] },
      { id: 'v4', color: 'イデアルMGグレー', colorCode: '2.5Y 6/1', images: [] },
      { id: 'v5', color: 'イデアルMGグリーン', colorCode: '5GY 5/1', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ しぶきV =====
  {
    id: 'ext-wall-shibuki-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'しぶきV',
    name: 'しぶきV',
    manufacturer: 'ニチハ',
    modelNumber: 'EF535xC2K/JK/GK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'プラムMGバニラホワイトII', colorCode: '10Y 9/1', images: [] },
      { id: 'v2', color: 'プラムMGアッシュII', colorCode: '10YR 8/1', images: [] },
      { id: 'v3', color: 'プラムMGクリームII', colorCode: '2.5Y 8/2', images: [] },
      { id: 'v4', color: 'プラムMGブラウンII', colorCode: '2.5Y 6/3', images: [] },
      { id: 'v5', color: 'プラムMGセピアII', colorCode: '2.5Y 4/3', images: [] },
      { id: 'v6', color: 'プラムMGウィニーホワイトII', colorCode: '5Y 9/1', images: [] },
      { id: 'v7', color: 'プラムMGシェルトグレーII', colorCode: '5Y 6/1', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  }
];
