// 家具・家電製品データ
import type { Product } from '../types/product';
import { diningTableProducts } from './generators/diningTableGenerator';

// 静的に定義する製品（エアコン、カーテン、IC提案家具など）
const staticProducts: Product[] = [
  // ========== エアコン ==========
  {
    id: 'furn-aircon-daikin-e6',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン Eシリーズ 6畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S225ATES-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン Eシリーズ 6畳用 100V 施工費込',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 110000 },
      { plan: 'HOURS', price: 110000 },
      { plan: 'LIFE+', price: 110000 },
      { plan: 'LIFE', price: 110000 }
    ]
  },
  {
    id: 'furn-aircon-daikin-e10',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン Eシリーズ 10畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S285ATES-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン Eシリーズ 10畳用 100V 施工費込',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 150000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LIFE+', price: 150000 },
      { plan: 'LIFE', price: 150000 }
    ]
  },
  {
    id: 'furn-aircon-daikin-e14',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン Eシリーズ 14畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S405ATEP-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン Eシリーズ 14畳用 200V 施工費込',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 192000 },
      { plan: 'HOURS', price: 192000 },
      { plan: 'LIFE+', price: 192000 },
      { plan: 'LIFE', price: 192000 }
    ]
  },
  {
    id: 'furn-aircon-daikin-gx6',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン GXシリーズ 6畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S224ATGS-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン GXシリーズ 6畳用 100V 施工費込（さらら除湿）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 165000 },
      { plan: 'HOURS', price: 165000 },
      { plan: 'LIFE+', price: 165000 },
      { plan: 'LIFE', price: 165000 }
    ]
  },
  {
    id: 'furn-aircon-daikin-gx10',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン GXシリーズ 10畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S284ATGS-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン GXシリーズ 10畳用 100V 施工費込（さらら除湿）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 188000 },
      { plan: 'HOURS', price: 188000 },
      { plan: 'LIFE+', price: 188000 },
      { plan: 'LIFE', price: 188000 }
    ]
  },
  {
    id: 'furn-aircon-daikin-gx14',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン GXシリーズ 14畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S404ATGP-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン GXシリーズ 14畳用 200V 施工費込（さらら除湿）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 218000 },
      { plan: 'HOURS', price: 218000 },
      { plan: 'LIFE+', price: 218000 },
      { plan: 'LIFE', price: 218000 }
    ]
  },
  {
    id: 'furn-aircon-mitsubishi-z6',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: '三菱電機',
    name: '三菱電機 霧ヶ峰 Zシリーズ 6畳用',
    manufacturer: '三菱電機',
    modelNumber: 'MSZ-ZXV2225',
    unit: 'piece',
    isOption: true,
    description: '霧ヶ峰 Zシリーズ 6畳用 100V 施工費込（さらっと除湿冷房）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 235000 },
      { plan: 'HOURS', price: 235000 },
      { plan: 'LIFE+', price: 235000 },
      { plan: 'LIFE', price: 235000 }
    ]
  },
  {
    id: 'furn-aircon-mitsubishi-z10',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: '三菱電機',
    name: '三菱電機 霧ヶ峰 Zシリーズ 10畳用',
    manufacturer: '三菱電機',
    modelNumber: 'MSZ-ZXV2825S',
    unit: 'piece',
    isOption: true,
    description: '霧ヶ峰 Zシリーズ 10畳用 200V 施工費込（さらっと除湿冷房）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 274000 },
      { plan: 'HOURS', price: 274000 },
      { plan: 'LIFE+', price: 274000 },
      { plan: 'LIFE', price: 274000 }
    ]
  },
  {
    id: 'furn-aircon-mitsubishi-z14',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: '三菱電機',
    name: '三菱電機 霧ヶ峰 Zシリーズ 14畳用',
    manufacturer: '三菱電機',
    modelNumber: 'MSZ-ZXV4025S',
    unit: 'piece',
    isOption: true,
    description: '霧ヶ峰 Zシリーズ 14畳用 200V 施工費込（さらっと除湿冷房）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 300000 },
      { plan: 'HOURS', price: 300000 },
      { plan: 'LIFE+', price: 300000 },
      { plan: 'LIFE', price: 300000 }
    ]
  },

  // ========== カーテン ==========
  {
    id: 'furn-curtain-ic',
    categoryId: 'curtain',
    categoryName: 'カーテン',
    subcategory: 'IC提案',
    name: 'カーテン（IC提案）',
    manufacturer: 'IC提案',
    modelNumber: 'CURTAIN-IC',
    unit: 'set',
    isOption: true,
    description: 'インテリアコーディネーターがお部屋に合わせたカーテンをご提案いたします',
    variants: [
      { id: 'v1', color: 'IC提案', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== 家具（IC提案） ==========
  {
    id: 'furn-sofa-ic',
    categoryId: 'furniture',
    categoryName: '家具',
    subcategory: 'ソファ',
    name: 'ソファ（IC提案）',
    manufacturer: 'IC提案',
    modelNumber: 'SOFA-IC',
    unit: 'set',
    isOption: true,
    description: 'インテリアコーディネーターがお部屋に合わせたソファをご提案いたします',
    variants: [
      { id: 'v1', color: 'IC提案', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'furn-tvboard-ic',
    categoryId: 'furniture',
    categoryName: '家具',
    subcategory: 'TVボード',
    name: 'TVボード（IC提案）',
    manufacturer: 'IC提案',
    modelNumber: 'TVBOARD-IC',
    unit: 'set',
    isOption: true,
    description: 'インテリアコーディネーターがお部屋に合わせたTVボードをご提案いたします',
    variants: [
      { id: 'v1', color: 'IC提案', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'furn-centertable-ic',
    categoryId: 'furniture',
    categoryName: '家具',
    subcategory: 'センターテーブル',
    name: 'センターテーブル（IC提案）',
    manufacturer: 'IC提案',
    modelNumber: 'CENTERTABLE-IC',
    unit: 'set',
    isOption: true,
    description: 'インテリアコーディネーターがお部屋に合わせたセンターテーブルをご提案いたします',
    variants: [
      { id: 'v1', color: 'IC提案', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'furn-rug-ic',
    categoryId: 'furniture',
    categoryName: '家具',
    subcategory: 'ラグ',
    name: 'ラグ（IC提案）',
    manufacturer: 'IC提案',
    modelNumber: 'RUG-IC',
    unit: 'set',
    isOption: true,
    description: 'インテリアコーディネーターがお部屋に合わせたラグをご提案いたします',
    variants: [
      { id: 'v1', color: 'IC提案', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'furn-diningtable-ic',
    categoryId: 'furniture',
    categoryName: '家具',
    subcategory: 'ダイニングテーブル',
    name: 'ダイニングテーブル（IC提案）',
    manufacturer: 'IC提案',
    modelNumber: 'DININGTABLE-IC',
    unit: 'set',
    isOption: true,
    description: 'インテリアコーディネーターがお部屋に合わせたダイニングテーブルをご提案いたします',
    variants: [
      { id: 'v1', color: 'IC提案', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'furn-diningchair-ic',
    categoryId: 'furniture',
    categoryName: '家具',
    subcategory: 'ダイニングチェア',
    name: 'ダイニングチェア（IC提案）',
    manufacturer: 'IC提案',
    modelNumber: 'DININGCHAIR-IC',
    unit: 'set',
    isOption: true,
    description: 'インテリアコーディネーターがお部屋に合わせたダイニングチェアをご提案いたします',
    variants: [
      { id: 'v1', color: 'IC提案', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'furn-bed-ic',
    categoryId: 'furniture',
    categoryName: '家具',
    subcategory: 'ベッド',
    name: 'ベッド（IC提案）',
    manufacturer: 'IC提案',
    modelNumber: 'BED-IC',
    unit: 'set',
    isOption: true,
    description: 'インテリアコーディネーターがお部屋に合わせたベッドをご提案いたします',
    variants: [
      { id: 'v1', color: 'IC提案', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'furn-other-ic',
    categoryId: 'furniture',
    categoryName: '家具',
    subcategory: 'その他',
    name: 'その他家具（IC提案）',
    manufacturer: 'IC提案',
    modelNumber: 'OTHER-IC',
    unit: 'set',
    isOption: true,
    description: 'その他ご希望の家具があればインテリアコーディネーターにご相談ください（自由入力可）',
    variants: [
      { id: 'v1', color: 'IC提案', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== 乾太くん（ガス衣類乾燥機）==========
  // ※ガス引込みが必要（設計で「ガス引込みあり」選択時のみ表示）
  {
    id: 'furn-dryer-001',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん スタンダード 5kg',
    manufacturer: 'リンナイ',
    modelNumber: 'RDT-54S',
    unit: 'piece',
    isOption: true,
    requiresGas: true,
    description: 'ガス衣類乾燥機 スタンダードタイプ 5kg ※ガス引込み必須',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 272000 },
      { plan: 'HOURS', price: 272000 },
      { plan: 'LIFE+', price: 272000 },
      { plan: 'LIFE', price: 272000 }
    ]
  },
  {
    id: 'furn-dryer-002',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん デラックス 6kg',
    manufacturer: 'リンナイ',
    modelNumber: 'RDT-63',
    unit: 'piece',
    isOption: true,
    requiresGas: true,
    description: 'ガス衣類乾燥機 デラックスタイプ 6kg ※ガス引込み必須',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 297000 },
      { plan: 'HOURS', price: 297000 },
      { plan: 'LIFE+', price: 297000 },
      { plan: 'LIFE', price: 297000 }
    ]
  },
  {
    id: 'furn-dryer-003',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん デラックス 9kg',
    manufacturer: 'リンナイ',
    modelNumber: 'RDT-93',
    unit: 'piece',
    isOption: true,
    requiresGas: true,
    description: 'ガス衣類乾燥機 デラックスタイプ 9kg ※ガス引込み必須',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 330000 },
      { plan: 'HOURS', price: 330000 },
      { plan: 'LIFE+', price: 330000 },
      { plan: 'LIFE', price: 330000 }
    ]
  },
  {
    id: 'furn-dryer-004',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん専用架台',
    manufacturer: 'リンナイ',
    modelNumber: 'DS-KADAI',
    unit: 'piece',
    isOption: true,
    requiresGas: true,
    description: '乾太くん専用架台 ※乾太くん選択時のみ',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'furn-dryer-005',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん専用収納ユニット',
    manufacturer: 'リンナイ',
    modelNumber: 'DS-UNIT',
    unit: 'piece',
    isOption: true,
    requiresGas: true,
    description: '乾太くん専用収納ユニット ※乾太くん選択時のみ',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 140000 },
      { plan: 'HOURS', price: 140000 },
      { plan: 'LIFE+', price: 140000 },
      { plan: 'LIFE', price: 140000 }
    ]
  },
  {
    id: 'furn-dryer-none',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '選択しない',
    manufacturer: 'なし',
    modelNumber: 'DRYER-NONE',
    unit: 'set',
    isOption: false,
    description: 'ガス乾燥機を設置しない',
    variants: [
      { id: 'v1', color: '選択なし', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
];

// ダイニングテーブル（JSON設定から自動生成） + 静的製品を結合
export const furnitureProducts: Product[] = [
  ...diningTableProducts,  // JSONから自動生成
  ...staticProducts,       // 静的定義
];
