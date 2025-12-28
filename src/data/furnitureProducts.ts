// 家具・家電製品データ
import type { Product } from '../types/product';

export const furnitureProducts: Product[] = [
  // ========== ダイニングテーブル（スクエア） ==========
  {
    id: 'furn-dt-001',
    categoryId: 'dining-table',
    categoryName: 'ダイニングテーブル',
    subcategory: 'ダイニングテーブル',
    name: 'Gハウスオリジナル ダイニングテーブル スクエア',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-DT-SQUARE',
    unit: 'piece',
    isOption: true,
    description: 'メラミン化粧板天板、スチール脚（スクエア/ラウンド）、コンセント付き W1500〜1800×D900×H720',
    variants: [
      { id: 'v1', color: 'OKオーク×スクエア・ブラック', images: [] },
      { id: 'v2', color: 'CRチェリー×スクエア・ブラック', images: [] },
      { id: 'v3', color: 'WNウォールナット×スクエア・ブラック', images: [] },
      { id: 'v4', color: 'DWダークWN×スクエア・ホワイト', images: [] },
      { id: 'v5', color: 'DUダストグレー×スクエア・ホワイト', images: [] },
      { id: 'v6', color: 'KRカブリード×ラウンド・ブラック', images: [] },
      { id: 'v7', color: 'FMファインモルタル×ラウンド・ホワイト', images: [] },
      { id: 'v8', color: 'APアンジェロプレーン×スクエア・ブラック', images: [] },
      { id: 'v9', color: 'OWオフホワイト×スクエア・ホワイト', images: [] },
      { id: 'v10', color: 'LBライトベージュ×スクエア・ホワイト', images: [] },
      { id: 'v11', color: 'MBミディアムベージュ×スクエア・ブラック', images: [] },
      { id: 'v12', color: 'DBダークベージュ×スクエア・ブラック', images: [] },
      { id: 'v13', color: 'MGミディアムグレー×スクエア・ブラック', images: [] },
      { id: 'v14', color: 'DGダークグレー×スクエア・ブラック', images: [] },
      { id: 'v15', color: 'BKブラック×スクエア・ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 130000 },
      { plan: 'HOURS', price: 130000 },
      { plan: 'LIFE+', price: 140000 },
      { plan: 'LIFE', price: 140000 }
    ]
  },

  // ========== ダイニングテーブル（ラウンド） ==========
  {
    id: 'furn-dt-002',
    categoryId: 'dining-table',
    categoryName: 'ダイニングテーブル',
    subcategory: 'ダイニングテーブル',
    name: 'Gハウスオリジナル ダイニングテーブル ラウンド',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-DT-ROUND',
    unit: 'piece',
    isOption: true,
    description: 'メラミン化粧板天板（丸形）、スチール脚（クワトロ/オクタ）Φ1100〜1200×H720',
    variants: [
      { id: 'v1', color: 'OKオーク×クワトロ・ブラック', images: [] },
      { id: 'v2', color: 'CRチェリー×クワトロ・ブラック', images: [] },
      { id: 'v3', color: 'WNウォールナット×クワトロ・ホワイト', images: [] },
      { id: 'v4', color: 'DWダークWN×オクタ・ブラック', images: [] },
      { id: 'v5', color: 'DUダストグレー×オクタ・ホワイト', images: [] },
      { id: 'v6', color: 'KRカブリード×クワトロ・ブラック', images: [] },
      { id: 'v7', color: 'FMファインモルタル×オクタ・ホワイト', images: [] },
      { id: 'v8', color: 'APアンジェロプレーン×クワトロ・ブラック', images: [] },
      { id: 'v9', color: 'OWオフホワイト×クワトロ・ホワイト', images: [] },
      { id: 'v10', color: 'LBライトベージュ×クワトロ・ホワイト', images: [] },
      { id: 'v11', color: 'MBミディアムベージュ×クワトロ・ブラック', images: [] },
      { id: 'v12', color: 'DBダークベージュ×オクタ・ブラック', images: [] },
      { id: 'v13', color: 'MGミディアムグレー×オクタ・ブラック', images: [] },
      { id: 'v14', color: 'DGダークグレー×オクタ・ブラック', images: [] },
      { id: 'v15', color: 'BKブラック×オクタ・ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 },
      { plan: 'LIFE+', price: 166000 },
      { plan: 'LIFE', price: 166000 }
    ]
  },

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
];
