import type { Product } from '../types/product';

// HOURS 専用の水廻り設備
export const waterEquipmentProductsHours: Product[] = [
  // ========== KITCHEN SYSTEMS ==========
  // GRAFTEKT Kitchen
  {
    id: 'hours-kitchen-graftekt-island-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'GRAFTEKT キッチン アイランド型 W2600',
    manufacturer: 'GRAFTEKT',
    modelNumber: 'GRAFTEKT-RH-ISLAND-2600',
    unit: 'set',
    isOption: false,
    description: 'オーダーメイドキッチン、アイランド型、W2600mm',
    variants: [
      {
        id: 'v1',
        color: 'フォルテベトン',
        colorCode: 'FORTE_BETON',
        images: []
      },
      {
        id: 'v2',
        color: 'ワイルドベトン',
        colorCode: 'WILD_BETON',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 300000 },
      { plan: 'LIFE', price: 500000 },
      { plan: 'LACIE', price: -200000 }
    ]
  },

  // Takara Standard Grandia Kitchen - Stainless Top
  {
    id: 'hours-kitchen-takara-grandia-stainless-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'タカラスタンダード グランディア ステンレストップ フラット対面 2590mm',
    manufacturer: 'タカラスタンダード',
    modelNumber: 'GRANDIA-STAINLESS-2590',
    unit: 'set',
    isOption: false,
    description: 'ホーローシステムキッチン、ステンレストップ、らくエルシンク、食器洗い乾燥機付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'TSW',
        images: []
      },
      {
        id: 'v2',
        color: 'コンクリートグレー',
        colorCode: 'TTG',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 150000 },
      { plan: 'LIFE', price: 200000 },
      { plan: 'LACIE', price: -50000 }
    ]
  },

  // Takara Standard Grandia Kitchen - Quartz Stone Top
  {
    id: 'hours-kitchen-takara-grandia-quartz-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'タカラスタンダード オフェリア クォーツストーン天然水晶人造石 フラット対面 2590mm',
    manufacturer: 'タカラスタンダード',
    modelNumber: 'OFELIA-QUARTZ-2590',
    unit: 'set',
    isOption: true,
    description: 'クォーツストーン天然水晶人造石トップ、らくエルシンク、食器洗い乾燥機付き',
    variants: [
      {
        id: 'v1',
        color: 'ブランソルベ',
        colorCode: 'BLANC_SORBET',
        images: []
      },
      {
        id: 'v2',
        color: 'ジュエルブラック',
        colorCode: 'JEWEL_BLACK',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 100000 },
      { plan: 'LIFE+', price: 250000 },
      { plan: 'LIFE', price: 300000 },
      { plan: 'LACIE', price: 50000 }
    ]
  },

  // LIXIL Richelle Kitchen Peninsula
  {
    id: 'hours-kitchen-lixil-richelle-peninsula-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'LIXIL リシェル ペニンシュラ型 セラミックトップ 2574mm',
    manufacturer: 'LIXIL',
    modelNumber: 'RICHELLE-PENINSULA-2574',
    unit: 'set',
    isOption: true,
    description: 'セラミックトップ、スキットシンク、食器洗い乾燥機ミーレ製、サイドマントルレンジフード',
    variants: [
      {
        id: 'v1',
        color: 'カラカッタホワイト',
        colorCode: 'CALACATTA_WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'バサルトブラック',
        colorCode: 'BASALT_BLACK',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 80000 },
      { plan: 'LIFE+', price: 230000 },
      { plan: 'LIFE', price: 280000 },
      { plan: 'LACIE', price: 30000 }
    ]
  },

  // LIXIL Noct Kitchen Peninsula
  {
    id: 'hours-kitchen-lixil-noct-peninsula-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'LIXIL ノクト ペニンシュラ型 人造大理石トップ 2570mm',
    manufacturer: 'LIXIL',
    modelNumber: 'NOCT-PENINSULA-2570',
    unit: 'set',
    isOption: true,
    description: '人造大理石トップ、ひろびろラクリーンシンク、食器洗い乾燥機、サイドマントルレンジフード',
    variants: [
      {
        id: 'v1',
        color: 'ブラックストーン',
        colorCode: 'BLACK_STONE',
        images: []
      },
      {
        id: 'v2',
        color: 'ソルティホワイト',
        colorCode: 'SALTY_WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 200000 },
      { plan: 'LIFE', price: 250000 },
      { plan: 'LACIE', price: 0 }
    ]
  },

  // Panasonic S-Class Kitchen Island
  {
    id: 'hours-kitchen-panasonic-sclass-island-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'Panasonic Sクラス アイランド型 2700mm',
    manufacturer: 'パナソニック',
    modelNumber: 'S-CLASS-ISLAND-2700',
    unit: 'set',
    isOption: true,
    description: 'アイランド型、人造大理石カウンター、ラクするーシンク、トリプルワイドIH、食器洗い乾燥機付き',
    variants: [
      {
        id: 'v1',
        color: 'ビューティホワイト',
        colorCode: 'BEAUTY_WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ネイビー',
        colorCode: 'NAVY',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 120000 },
      { plan: 'LIFE+', price: 270000 },
      { plan: 'LIFE', price: 320000 },
      { plan: 'LACIE', price: 70000 }
    ]
  },

  // Panasonic S-Class Kitchen Peninsula
  {
    id: 'hours-kitchen-panasonic-sclass-peninsula-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'Panasonic Sクラス ペニンシュラ型 2700mm',
    manufacturer: 'パナソニック',
    modelNumber: 'S-CLASS-PENINSULA-2700',
    unit: 'set',
    isOption: true,
    description: 'ペニンシュラ型、人造大理石カウンター、ラクするーシンク、トリプルワイドIH、食器洗い乾燥機付き',
    variants: [
      {
        id: 'v1',
        color: 'ビューティホワイト',
        colorCode: 'BEAUTY_WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'アルベロブラック',
        colorCode: 'ALBERO_BLACK',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 100000 },
      { plan: 'LIFE+', price: 250000 },
      { plan: 'LIFE', price: 300000 },
      { plan: 'LACIE', price: 50000 }
    ]
  },

  // Panasonic S-Class II Type Kitchen
  {
    id: 'hours-kitchen-panasonic-sclass-ii-type-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'Panasonic Sクラス II型キッチン W2100+W1800',
    manufacturer: 'パナソニック',
    modelNumber: 'S-CLASS-II-TYPE',
    unit: 'set',
    isOption: true,
    description: 'II型キッチン、シンク側ペニンシュラまたはアイランド、人造大理石カウンター',
    variants: [
      {
        id: 'v1',
        color: 'ビューティホワイト',
        colorCode: 'BEAUTY_WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 150000 },
      { plan: 'LIFE+', price: 300000 },
      { plan: 'LIFE', price: 350000 },
      { plan: 'LACIE', price: 100000 }
    ]
  },

  // ========== BATHROOM SYSTEMS ==========
  // Panasonic Oflora Bathroom 1616
  {
    id: 'hours-bathroom-panasonic-oflora-1616-001',
    categoryId: 'bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'Panasonic オフローラ 1616 AR',
    manufacturer: 'パナソニック',
    modelNumber: 'OFLORA-1616-AR',
    unit: 'set',
    isOption: false,
    description: 'スミピカフロア、エスライン浴槽（FRP浴槽）、ピュアホワイト、換気扇、LED照明',
    variants: [
      {
        id: 'v1',
        color: 'ピュアホワイト',
        colorCode: 'PURE_WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 150000 },
      { plan: 'LACIE', price: -50000 }
    ]
  },

  // LIXIL AX Bathroom 1616
  {
    id: 'hours-bathroom-lixil-ax-1616-001',
    categoryId: 'bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'LIXIL AX 1616サイズ',
    manufacturer: 'LIXIL',
    modelNumber: 'BMUS-1616LBZ-B+H',
    unit: 'set',
    isOption: true,
    description: 'パッとくるりんポイ排水口、エコベンチ浴槽、くるりんポイ排水口、キレイサーモフロア',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 150000 },
      { plan: 'LIFE', price: 200000 },
      { plan: 'LACIE', price: 0 }
    ]
  },

  // ========== WASHROOM SYSTEMS ==========
  // TOTO Octave 1200mm
  {
    id: 'hours-washroom-toto-octave-1200-001',
    categoryId: 'washroom',
    categoryName: '洗面化粧台',
    subcategory: '洗面化粧台',
    name: 'TOTO オクターブ 間口1200mm',
    manufacturer: 'TOTO',
    modelNumber: 'LDSFB120BJGDN1A/LMFB120A3GLC1G',
    unit: 'set',
    isOption: false,
    description: '3面鏡、ひろびろ陶器ボウル、エコミラー、お掃除ラクラク水栓、タッチレスワイドLED照明',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 90000 },
      { plan: 'LACIE', price: -30000 }
    ]
  },

  // ========== TOILET SYSTEMS ==========
  // Panasonic Arauno Z160
  {
    id: 'hours-toilet-panasonic-arauno-z160-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'タンクレストイレ',
    name: 'Panasonic アラウーノ Z160シリーズ',
    manufacturer: 'パナソニック',
    modelNumber: 'ARAUNO-Z160',
    unit: 'set',
    isOption: false,
    description: 'タンクレストイレ、激落ちバブル、スパイラル水流、トリプル汚れガード',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 90000 },
      { plan: 'LACIE', price: -30000 }
    ]
  },

  // TOTO GG-J1
  {
    id: 'hours-toilet-toto-ggj1-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'ウォシュレット一体形便器',
    name: 'TOTO GG-J1',
    manufacturer: 'TOTO',
    modelNumber: 'CES941',
    unit: 'set',
    isOption: true,
    description: 'セフィオンテクト、プレミスト、フチなし形状、トルネード洗浄',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'NW1',
        images: []
      },
      {
        id: 'v2',
        color: 'パステルアイボリー',
        colorCode: 'SC1',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 40000 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 40000 },
      { plan: 'LACIE', price: -20000 }
    ]
  },

  // Panasonic NewアラウーノV Limited (2F Toilet)
  {
    id: 'hours-toilet-2f-panasonic-arauno-v-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: '節水キレイ洗浄トイレ（2階用）',
    name: 'Panasonic NewアラウーノV Limited 手洗い付き（2階トイレ）',
    manufacturer: 'パナソニック',
    modelNumber: 'ARAUNO-V-LIMITED-SN5',
    unit: 'set',
    isOption: true,
    description: '2階トイレ用、3Dツイスター水流、節水型、手洗い付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 },
      { plan: 'LACIE', price: 60000 }
    ]
  },

  // TOTO ZJ1 (2F Toilet)
  {
    id: 'hours-toilet-2f-toto-zj1-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'ウォシュレット一体形便器（2階用）',
    name: 'TOTO ZJ1 手洗いあり（2階トイレ）',
    manufacturer: 'TOTO',
    modelNumber: 'ZJ1-2F',
    unit: 'set',
    isOption: true,
    description: '2階トイレ用、セフィオンテクト、トルネード洗浄、手洗い付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'パステルピンク',
        colorCode: 'PASTEL_PINK',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 25000 },
      { plan: 'LACIE', price: 50000 }
    ]
  },

  // INAX Basia Shower Toilet
  {
    id: 'hours-toilet-inax-basia-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'ベーシアシャワートイレ',
    name: 'INAX ベーシアシャワートイレ',
    manufacturer: 'INAX',
    modelNumber: 'BC-B30S/DT-B383G',
    unit: 'set',
    isOption: true,
    description: 'ハイパーキラミック、ECO5、コンパクトなフォルム、お掃除リフトアップ',
    variants: [
      {
        id: 'v1',
        color: 'ピュアホワイト',
        colorCode: 'BW1',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 45000 },
      { plan: 'LIFE+', price: 45000 },
      { plan: 'LIFE', price: 35000 },
      { plan: 'LACIE', price: 45000 }
    ]
  },

  // ========== ADDITIONAL EQUIPMENT ==========
  // Cupboard Options
  {
    id: 'hours-cupboard-panasonic-001',
    categoryId: 'kitchen-storage',
    categoryName: 'キッチン収納',
    subcategory: 'カップボード',
    name: 'パナソニック カップボード Sクラス扉',
    manufacturer: 'パナソニック',
    modelNumber: 'CUPBOARD-S-CLASS',
    unit: 'set',
    isOption: true,
    description: 'カップボード、キッチンと同じ扉柄で統一可能',
    variants: [
      {
        id: 'v1',
        color: 'ビューティホワイト',
        colorCode: 'BEAUTY_WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 150000 },
      { plan: 'LIFE+', price: 150000 },
      { plan: 'LIFE', price: 150000 },
      { plan: 'LACIE', price: 150000 }
    ]
  },

  // Hot Water Supply System
  {
    id: 'hours-water-heater-eco-cute-370l-001',
    categoryId: 'water-heater',
    categoryName: '給湯器',
    subcategory: 'エコキュート',
    name: 'エコキュート 370L フルオート',
    manufacturer: 'パナソニック',
    modelNumber: 'HE-NS37KQS',
    unit: 'set',
    isOption: false,
    description: '省エネ給湯器、フルオート、高圧力型',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: 'SILVER',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 },
      { plan: 'LACIE', price: 0 }
    ]
  },

  // Bathroom Heating & Drying
  {
    id: 'hours-bathroom-heater-dryer-001',
    categoryId: 'bathroom-equipment',
    categoryName: 'バスルーム設備',
    subcategory: '浴室暖房乾燥機',
    name: '浴室暖房乾燥機',
    manufacturer: 'パナソニック',
    modelNumber: 'FY-13UG7E',
    unit: 'set',
    isOption: false,
    description: '浴室暖房・乾燥・涼風・換気機能',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 30000 },
      { plan: 'LACIE', price: 0 }
    ]
  }
];