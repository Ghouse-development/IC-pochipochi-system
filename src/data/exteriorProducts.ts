// エクステリア（外装）製品データ - FACADE Style Book
import type { Product } from '../types/product';
import { exteriorProductsAdditional } from './exteriorProductsAdditional';
import { exteriorProductsPage3to5 } from './exteriorProductsPage3to5';
import { exteriorProductsPage16to20 } from './exteriorProductsPage16to20';
import { exteriorProductsPage21to25 } from './exteriorProductsPage21to25';

const baseExteriorProducts: Product[] = [
  // ===== 外壁 - ニチハ モナビストーンV =====
  {
    id: 'ext-wall-001',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'モナビストーンV',
    name: 'フローMGグレー',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5256FK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: 'N7',
        colorCode: 'N7',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-wall-002',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'モナビストーンV',
    name: 'フローMGブラック',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5257FK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: 'N2',
        colorCode: 'N2',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-wall-003',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'モナビストーンV',
    name: 'フローMGクリアホワイト',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5251GK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: 'N9',
        colorCode: 'N9',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-wall-004',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'モナビストーンV',
    name: 'フローMGホワイト',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5252GK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: '2.5Y 9/1',
        colorCode: '2.5Y 9/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-wall-005',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'モナビストーンV',
    name: 'フローMGクリーム',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5253GK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: '10YR 8/2',
        colorCode: '10YR 8/2',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-wall-006',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'モナビストーンV',
    name: 'フローMGネイビー',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA5254TK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: 'N3',
        colorCode: 'N3',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ リーガストーン調V =====
  {
    id: 'ext-wall-007',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'リーガストーン調V',
    name: 'ランダMGプラチナ',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3455CK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: '5Y 7/1',
        colorCode: '5Y 7/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-wall-008',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'リーガストーン調V',
    name: 'ランダMGブラック',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3457CK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: '2.5Y 3/1',
        colorCode: '2.5Y 3/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-wall-009',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'リーガストーン調V',
    name: 'ランダMGトリュフ',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3451NK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: '2.5Y 6/4',
        colorCode: '2.5Y 6/4',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-wall-010',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'リーガストーン調V',
    name: 'ランダMGラテ',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3451CK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: '10YR 8/2',
        colorCode: '10YR 8/2',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-wall-011',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'リーガストーン調V',
    name: 'ランダMGパウダー',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3453CK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: '10Y 8/1',
        colorCode: '10Y 8/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ ボルブストーン調V =====
  {
    id: 'ext-wall-012',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ボルブストーン調V',
    name: 'エアルMGスノー',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX3151FK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      {
        id: 'v1',
        color: '5Y 7/1',
        colorCode: '5Y 7/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - KMEW プレミアム Fuge =====
  {
    id: 'ext-wall-premium-001',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'ルボン プレミアム',
    name: 'レセピMGチタンホワイト30',
    manufacturer: 'KMEW',
    modelNumber: 'ELS411P',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 シーリング目地に比べて継ぎ目が目立たない',
    variants: [
      {
        id: 'v1',
        color: '5Y 9/1',
        colorCode: '5Y 9/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },
  {
    id: 'ext-wall-premium-002',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'ルボン プレミアム',
    name: 'レセピMGチタンチャコール30',
    manufacturer: 'KMEW',
    modelNumber: 'ELS434P',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 シーリング目地に比べて継ぎ目が目立たない',
    variants: [
      {
        id: 'v1',
        color: '2.5Y 4/2',
        colorCode: '2.5Y 4/2',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },
  {
    id: 'ext-wall-premium-003',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'ルボン プレミアム',
    name: 'レセピMGネロ30',
    manufacturer: 'KMEW',
    modelNumber: 'ELS437P',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 シーリング目地に比べて継ぎ目が目立たない',
    variants: [
      {
        id: 'v1',
        color: '5Y 3/1',
        colorCode: '5Y 3/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },
  {
    id: 'ext-wall-premium-004',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'ルボン プレミアム',
    name: 'レセピMGネイビー30',
    manufacturer: 'KMEW',
    modelNumber: 'ELS438P',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 シーリング目地に比べて継ぎ目が目立たない',
    variants: [
      {
        id: 'v1',
        color: '5PB 2/1',
        colorCode: '5PB 2/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - モエンエクセラード16 Fuge =====
  {
    id: 'ext-wall-moene-001',
    categoryId: 'exterior-wall-moene',
    categoryName: '外壁',
    subcategory: 'モエンエクセラード16 Fuge',
    name: 'モベルウッド',
    manufacturer: 'ニチハ',
    modelNumber: 'EQS691D',
    unit: 'sqm',
    isOption: true,
    description: 'モエンエクセラード16 Fuge リニューアル品',
    variants: [
      {
        id: 'v1',
        color: 'モベルクレージュⅡ',
        colorCode: '5Y 7/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },
  {
    id: 'ext-wall-moene-002',
    categoryId: 'exterior-wall-moene',
    categoryName: '外壁',
    subcategory: 'モエンエクセラード16 Fuge',
    name: 'シュマール',
    manufacturer: 'ニチハ',
    modelNumber: 'EQS661D',
    unit: 'sqm',
    isOption: true,
    description: 'モエンエクセラード16 Fuge NEW',
    variants: [
      {
        id: 'v1',
        color: 'シュマールベージュⅡ',
        colorCode: '2.5YR 8/2',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - COOL イルミオ =====
  {
    id: 'ext-wall-cool-001',
    categoryId: 'exterior-wall-cool',
    categoryName: '外壁',
    subcategory: 'COOL イルミオ',
    name: 'メレホワイト',
    manufacturer: 'アイカ',
    modelNumber: 'EFM508P',
    unit: 'sqm',
    isOption: true,
    description: 'COOL 遮熱性能付き外壁',
    variants: [
      {
        id: 'v1',
        color: 'N9',
        colorCode: 'N9',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },
  {
    id: 'ext-wall-cool-002',
    categoryId: 'exterior-wall-cool',
    categoryName: '外壁',
    subcategory: 'COOL イルミオ',
    name: 'メレグレー',
    manufacturer: 'アイカ',
    modelNumber: 'EFM509P',
    unit: 'sqm',
    isOption: true,
    description: 'COOL 遮熱性能付き外壁',
    variants: [
      {
        id: 'v1',
        color: '2.5YR 4/1',
        colorCode: '2.5YR 4/1',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },
  {
    id: 'ext-wall-cool-003',
    categoryId: 'exterior-wall-cool',
    categoryName: '外壁',
    subcategory: 'COOL イルミオ',
    name: 'メレブラウン',
    manufacturer: 'アイカ',
    modelNumber: 'EFM510P',
    unit: 'sqm',
    isOption: true,
    description: 'COOL 遮熱性能付き外壁',
    variants: [
      {
        id: 'v1',
        color: '5YR 3/2',
        colorCode: '5YR 3/2',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },
  {
    id: 'ext-wall-cool-004',
    categoryId: 'exterior-wall-cool',
    categoryName: '外壁',
    subcategory: 'COOL イルミオ',
    name: 'メレブラック',
    manufacturer: 'アイカ',
    modelNumber: 'EFM511P',
    unit: 'sqm',
    isOption: true,
    description: 'COOL 遮熱性能付き外壁',
    variants: [
      {
        id: 'v1',
        color: 'N4',
        colorCode: 'N4',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW 新フラット16 =====
  {
    id: 'ext-wall-flat-001',
    categoryId: 'exterior-wall-flat',
    categoryName: '外壁',
    subcategory: '新フラット16',
    name: 'フィエルテ',
    manufacturer: 'KMEW',
    modelNumber: 'NH4971A',
    unit: 'sqm',
    isOption: true,
    description: 'フラットデザイン外壁（16mm厚）',
    variants: [
      {
        id: 'v1',
        color: 'チタンコンクリー',
        colorCode: '3.6RP 7.2/0.3',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },
  {
    id: 'ext-wall-flat-002',
    categoryId: 'exterior-wall-flat',
    categoryName: '外壁',
    subcategory: '新フラット16',
    name: 'フィエルテ',
    manufacturer: 'KMEW',
    modelNumber: 'NH4975A',
    unit: 'sqm',
    isOption: true,
    description: 'フラットデザイン外壁（16mm厚）',
    variants: [
      {
        id: 'v1',
        color: 'チタンアイロン',
        colorCode: '3.6YR 4.1/0.3',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW カンターピレ =====
  {
    id: 'ext-wall-canter-001',
    categoryId: 'exterior-wall-canter',
    categoryName: '外壁',
    subcategory: 'カンターピレ',
    name: 'カンターピレ',
    manufacturer: 'KMEW',
    modelNumber: 'NH5921A',
    unit: 'sqm',
    isOption: true,
    description: 'タイルデザイン外壁（16mm厚）',
    variants: [
      {
        id: 'v1',
        color: 'シルクチタンホワイト',
        colorCode: '2Y 8.2/0.9',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KONOSHIMA アルテミュール =====
  {
    id: 'ext-wall-arte-001',
    categoryId: 'exterior-wall-arte',
    categoryName: '外壁',
    subcategory: 'アルテミュール',
    name: 'レッドシダーナチュラルGC',
    manufacturer: 'KONOSHIMA',
    modelNumber: 'ARTE-RCN-GC',
    unit: 'sqm',
    isOption: true,
    description: 'アルテミュール 木目調外壁',
    variants: [
      {
        id: 'v1',
        color: 'レッドシダーナチュラル',
        colorCode: '8.8YR 6.3/3.4',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },
  {
    id: 'ext-wall-arte-002',
    categoryId: 'exterior-wall-arte',
    categoryName: '外壁',
    subcategory: 'アルテミュール',
    name: 'レッドシダーエイジングGC',
    manufacturer: 'KONOSHIMA',
    modelNumber: 'ARTE-RCE-GC',
    unit: 'sqm',
    isOption: true,
    description: 'アルテミュール 木目調外壁',
    variants: [
      {
        id: 'v1',
        color: 'レッドシダーエイジング',
        colorCode: '7.9YR 4.7/5.3',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - AICA ジョリパット =====
  {
    id: 'ext-wall-jolypate-001',
    categoryId: 'exterior-wall-jolypate',
    categoryName: '外壁',
    subcategory: 'ジョリパットネオ∞',
    name: 'エンシェントブリック',
    manufacturer: 'AICA',
    modelNumber: 'JQ-620-T1010',
    unit: 'sqm',
    isOption: true,
    description: 'ジョリパットネオ∞ 塗装仕上げ',
    variants: [
      {
        id: 'v1',
        color: 'T1010',
        colorCode: '3.81Y 8.48/0.71',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 12500 },
      { plan: 'HOURS', price: 12500 }
    ]
  },

  // ===== 外壁 - KMEW SOLIDO =====
  {
    id: 'ext-wall-solido-001',
    categoryId: 'exterior-wall-solido',
    categoryName: '外壁',
    subcategory: 'SOLIDO',
    name: 'SOLIDO typeM_LAP',
    manufacturer: 'KMEW',
    modelNumber: 'SMG72G',
    unit: 'sqm',
    isOption: true,
    description: 'SOLIDO 高級外壁材 HOURS/LACIE:5㎡以下は80,000円/式 LIFE+/LIFE:5㎡以下は110,000円/式',
    variants: [
      {
        id: 'v1',
        color: '鉄黒（てつぐろ）',
        colorCode: 'N3.5',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 17000 },
      { plan: 'HOURS', price: 17000 },
      { plan: 'LIFE+', price: 21500 },
      { plan: 'LIFE', price: 21500 }
    ]
  },
  {
    id: 'ext-wall-solido-002',
    categoryId: 'exterior-wall-solido',
    categoryName: '外壁',
    subcategory: 'SOLIDO',
    name: 'SOLIDO typeM_LAP',
    manufacturer: 'KMEW',
    modelNumber: 'SMG85G',
    unit: 'sqm',
    isOption: true,
    description: 'SOLIDO 高級外壁材 HOURS/LACIE:5㎡以下は80,000円/式 LIFE+/LIFE:5㎡以下は110,000円/式',
    variants: [
      {
        id: 'v1',
        color: 'セメント',
        colorCode: 'N5.0',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 17000 },
      { plan: 'HOURS', price: 17000 },
      { plan: 'LIFE+', price: 21500 },
      { plan: 'LIFE', price: 21500 }
    ]
  },
  {
    id: 'ext-wall-solido-003',
    categoryId: 'exterior-wall-solido',
    categoryName: '外壁',
    subcategory: 'SOLIDO',
    name: 'SOLIDO typeM_LAP',
    manufacturer: 'KMEW',
    modelNumber: 'SMG21G',
    unit: 'sqm',
    isOption: true,
    description: 'SOLIDO 高級外壁材 HOURS/LACIE:5㎡以下は80,000円/式 LIFE+/LIFE:5㎡以下は110,000円/式',
    variants: [
      {
        id: 'v1',
        color: '錆茶（さびちゃ）',
        colorCode: '10R 3.5/1.0',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 17000 },
      { plan: 'HOURS', price: 17000 },
      { plan: 'LIFE+', price: 21500 },
      { plan: 'LIFE', price: 21500 }
    ]
  },
  {
    id: 'ext-wall-solido-004',
    categoryId: 'exterior-wall-solido',
    categoryName: '外壁',
    subcategory: 'SOLIDO',
    name: 'SOLIDO typeM_LAP',
    manufacturer: 'KMEW',
    modelNumber: 'SMG65G',
    unit: 'sqm',
    isOption: true,
    description: 'SOLIDO 高級外壁材 HOURS/LACIE:5㎡以下は80,000円/式 LIFE+/LIFE:5㎡以下は110,000円/式',
    variants: [
      {
        id: 'v1',
        color: '灰（はい）',
        colorCode: 'N4.0',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 17000 },
      { plan: 'HOURS', price: 17000 },
      { plan: 'LIFE+', price: 21500 },
      { plan: 'LIFE', price: 21500 }
    ]
  },

  // ===== ポーチタイル - LIXIL メンフィス =====
  {
    id: 'ext-porch-001',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'メンフィス',
    name: 'メンフィス',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-600/MMP-11',
    unit: 'sqm',
    isOption: false,
    description: '600×600 標準内外部ポーチサイズ：1.8m×1.8m',
    variants: [
      {
        id: 'v1',
        color: 'MMP-11',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-porch-002',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'メンフィス',
    name: 'メンフィス',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-600/MMP-12',
    unit: 'sqm',
    isOption: false,
    description: '600×600 標準内外部ポーチサイズ：1.8m×1.8m',
    variants: [
      {
        id: 'v1',
        color: 'MMP-12',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-porch-003',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'メンフィス',
    name: 'メンフィス',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-600/MMP-13',
    unit: 'sqm',
    isOption: false,
    description: '600×600 標準内外部ポーチサイズ：1.8m×1.8m',
    variants: [
      {
        id: 'v1',
        color: 'MMP-13',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-porch-004',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'メンフィス',
    name: 'メンフィス',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-600/MMP-14',
    unit: 'sqm',
    isOption: false,
    description: '600×600 標準内外部ポーチサイズ：1.8m×1.8m',
    variants: [
      {
        id: 'v1',
        color: 'MMP-14',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-porch-005',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'メンフィス',
    name: 'メンフィス',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-600/MMP-15',
    unit: 'sqm',
    isOption: false,
    description: '600×600 標準内外部ポーチサイズ：1.8m×1.8m',
    variants: [
      {
        id: 'v1',
        color: 'MMP-15',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 屋根材 =====
  {
    id: 'ext-roof-001',
    categoryId: 'roof',
    categoryName: '屋根',
    subcategory: '屋根材',
    name: 'ニスクカラーSGL',
    manufacturer: '日鉄鋼板',
    modelNumber: 'NM-8697',
    unit: 'sqm',
    isOption: false,
    description: '材料標準保証規格10年 国土交通大臣認定不燃材料 海岸500m以遠原板の穴あき25年保証',
    variants: [
      {
        id: 'v1',
        color: 'Sブラック',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 樋 =====
  {
    id: 'ext-gutter-001',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '横樋',
    name: 'ファインスケアNF-I型',
    manufacturer: 'Panasonic',
    modelNumber: 'MQF0180J',
    unit: 'set',
    isOption: false,
    description: '横樋',
    variants: [
      {
        id: 'v1',
        color: 'ミルクホワイト',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-gutter-002',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '横樋',
    name: 'ファインスケアNF-I型',
    manufacturer: 'Panasonic',
    modelNumber: 'MQF1180J',
    unit: 'set',
    isOption: false,
    description: '横樋',
    variants: [
      {
        id: 'v1',
        color: 'パールグレー（しろ）',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-gutter-003',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '横樋',
    name: 'ファインスケアNF-I型',
    manufacturer: 'Panasonic',
    modelNumber: 'MQF6180J',
    unit: 'set',
    isOption: false,
    description: '横樋',
    variants: [
      {
        id: 'v1',
        color: 'ブラック',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-gutter-004',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '縦樋',
    name: 'S30',
    manufacturer: 'Panasonic',
    modelNumber: 'KBP0261K',
    unit: 'set',
    isOption: false,
    description: '縦樋',
    variants: [
      {
        id: 'v1',
        color: 'ミルクホワイト',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-gutter-005',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '縦樋',
    name: 'S30',
    manufacturer: 'Panasonic',
    modelNumber: 'KBP1261K',
    unit: 'set',
    isOption: false,
    description: '縦樋',
    variants: [
      {
        id: 'v1',
        color: 'パールグレー（しろ）',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-gutter-006',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '縦樋',
    name: 'S30',
    manufacturer: 'Panasonic',
    modelNumber: 'KBP6261K',
    unit: 'set',
    isOption: false,
    description: '縦樋',
    variants: [
      {
        id: 'v1',
        color: 'ブラック',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 軒天 =====
  {
    id: 'ext-soffit-001',
    categoryId: 'soffit',
    categoryName: '軒天',
    subcategory: 'エンボス',
    name: 'エンボス',
    manufacturer: '神島化学',
    modelNumber: 'EMBOSS',
    unit: 'sqm',
    isOption: false,
    description: '軒天材',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-soffit-002',
    categoryId: 'soffit',
    categoryName: '軒天',
    subcategory: 'エンボス',
    name: 'エンボス',
    manufacturer: '神島化学',
    modelNumber: 'EMBOSS-BK',
    unit: 'sqm',
    isOption: false,
    description: '軒天材',
    variants: [
      {
        id: 'v1',
        color: 'ブラック',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-soffit-003',
    categoryId: 'soffit',
    categoryName: '軒天',
    subcategory: 'アルテザート',
    name: 'アルテザート',
    manufacturer: 'KONOSHIMA',
    modelNumber: 'ARTE-RCN',
    unit: 'sqm',
    isOption: true,
    description: '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可。5㎡までは80,000円/式',
    variants: [
      {
        id: 'v1',
        color: 'レッドシダーナチュラル',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 18000 },
      { plan: 'HOURS', price: 18000 }
    ]
  },

  // ===== 窓 - APW330 =====
  {
    id: 'ext-window-001',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW330',
    name: 'APW330',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330',
    unit: 'piece',
    isOption: false,
    description: '樹脂サッシ アルゴンガス ペアガラス 熱貫流率1.31W/(㎡・K)',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-window-002',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW330',
    name: 'APW330',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-PS',
    unit: 'piece',
    isOption: false,
    description: '樹脂サッシ アルゴンガス ペアガラス',
    variants: [
      {
        id: 'v1',
        color: 'プラチナステン',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-window-003',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW330',
    name: 'APW330',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-BR',
    unit: 'piece',
    isOption: false,
    description: '樹脂サッシ アルゴンガス ペアガラス',
    variants: [
      {
        id: 'v1',
        color: 'ブラウン',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-window-004',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW330',
    name: 'APW330',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-BK',
    unit: 'piece',
    isOption: false,
    description: '樹脂サッシ アルゴンガス ペアガラス',
    variants: [
      {
        id: 'v1',
        color: 'ブラック',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-window-option-001',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '電動シャッター',
    manufacturer: 'YKKAP',
    modelNumber: 'SHUTTER-E-W1650',
    unit: 'piece',
    isOption: true,
    description: '電動シャッターへ変更 W1650まで',
    variants: [
      {
        id: 'v1',
        color: '標準色',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 }
    ]
  },
  {
    id: 'ext-window-option-002',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '電動シャッター',
    manufacturer: 'YKKAP',
    modelNumber: 'SHUTTER-E-W2560',
    unit: 'piece',
    isOption: true,
    description: '電動シャッターへ変更 W2560まで',
    variants: [
      {
        id: 'v1',
        color: '標準色',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 }
    ]
  },

  // ===== 玄関ドア - ヴェナートD30 =====
  {
    id: 'ext-door-001',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30',
    name: 'ヴェナートD30',
    manufacturer: 'YKKAP',
    modelNumber: 'D30-C10N',
    unit: 'piece',
    isOption: false,
    description: '100V電気錠 ポケットキー付き 防火・非防火対応',
    variants: [
      {
        id: 'v1',
        color: 'アイスブルーノーチェ',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外部設備 =====
  {
    id: 'ext-facility-001',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部コンセント',
    name: '外部コンセント',
    manufacturer: 'Panasonic',
    modelNumber: 'EXT-OUTLET',
    unit: 'piece',
    isOption: false,
    description: '外部コンセント（1カ所標準）',
    variants: [
      {
        id: 'v1',
        color: '標準',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-facility-002',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部コンセント',
    name: '外部コンセント追加',
    manufacturer: 'Panasonic',
    modelNumber: 'EXT-OUTLET-ADD',
    unit: 'piece',
    isOption: true,
    description: '外部コンセント追加',
    variants: [
      {
        id: 'v1',
        color: '標準',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 }
    ]
  },
  {
    id: 'ext-facility-003',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部コンセント',
    name: 'EV用コンセント',
    manufacturer: 'Panasonic',
    modelNumber: 'EV-OUTLET',
    unit: 'piece',
    isOption: true,
    description: 'EV用コンセント（1ヶ所）',
    variants: [
      {
        id: 'v1',
        color: '標準',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 }
    ]
  },
  {
    id: 'ext-facility-004',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部水栓',
    name: '散水栓',
    manufacturer: 'オンリーワン',
    modelNumber: 'GM3-ALKCF',
    unit: 'piece',
    isOption: false,
    description: '散水栓（排水なし） 標準で1カ所取付可能',
    variants: [
      {
        id: 'v1',
        color: 'メタリックシルバー',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-facility-005',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部水栓',
    name: '立水栓',
    manufacturer: 'オンリーワン',
    modelNumber: 'GM3-ALSCF',
    unit: 'piece',
    isOption: false,
    description: '立水栓（排水なし） 標準で1カ所取付可能',
    variants: [
      {
        id: 'v1',
        color: 'ブラック',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-facility-006',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部水栓',
    name: 'アルミ立水栓追加',
    manufacturer: 'オンリーワン',
    modelNumber: 'ALU-FAUCET-ADD',
    unit: 'piece',
    isOption: true,
    description: 'アルミ立水栓追加',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 28000 },
      { plan: 'HOURS', price: 28000 }
    ]
  },
  {
    id: 'ext-facility-007',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: '玄関用マルチフック',
    manufacturer: '森田アルミ',
    modelNumber: 'VIK',
    unit: 'piece',
    isOption: true,
    description: '玄関用マルチフック（下地込み）',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 }
    ]
  },
  {
    id: 'ext-facility-008',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: 'タープフック',
    manufacturer: 'フジワラ',
    modelNumber: 'IP-12',
    unit: 'set',
    isOption: true,
    description: 'アイプレートIP-12（2個セット・下地込み）',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 }
    ]
  },
  {
    id: 'ext-facility-009',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: 'エアコンスリーブキャップ',
    manufacturer: '標準',
    modelNumber: 'AC-SLEEVE',
    unit: 'piece',
    isOption: false,
    description: 'エアコンスリーブキャップ（5カ所標準）',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-facility-010',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: 'エアコンスリーブキャップ追加',
    manufacturer: '標準',
    modelNumber: 'AC-SLEEVE-ADD',
    unit: 'piece',
    isOption: true,
    description: 'エアコンスリーブキャップ追加',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 }
    ]
  },

  // ===== エコキュート =====
  {
    id: 'ext-ecocute-001',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート370L',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-S37LQS',
    unit: 'piece',
    isOption: false,
    description: 'Sシリーズ 370L 標準（外部設置）',
    variants: [
      {
        id: 'v1',
        color: '標準',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'ext-ecocute-002',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート460L',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-S46LQS',
    unit: 'piece',
    isOption: true,
    description: 'Sシリーズ 460Lに変更',
    variants: [
      {
        id: 'v1',
        color: '標準',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 }
    ]
  },
  {
    id: 'ext-ecocute-003',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'ウルトラ高圧エコキュート370L',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-SU37LQS',
    unit: 'piece',
    isOption: true,
    description: 'Sシリーズ ウルトラ高圧370Lに変更',
    variants: [
      {
        id: 'v1',
        color: '標準',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 }
    ]
  },
  {
    id: 'ext-ecocute-004',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'ウルトラ高圧エコキュート460L',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-SU46LQS',
    unit: 'piece',
    isOption: true,
    description: 'Sシリーズ ウルトラ高圧460Lに変更',
    variants: [
      {
        id: 'v1',
        color: '標準',
        colorCode: '',
        images: []
      }
    ],
    pricing: [
      { plan: 'LACIE', price: 145000 },
      { plan: 'HOURS', price: 145000 }
    ]
  }
];

// 基本製品と追加製品をマージ
export const exteriorProducts: Product[] = [
  ...baseExteriorProducts,
  ...exteriorProductsAdditional,
  ...exteriorProductsPage3to5,
  ...exteriorProductsPage16to20,
  ...exteriorProductsPage21to25
];