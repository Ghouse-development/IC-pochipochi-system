import type { Product } from '../types/product';

// LIFE 専用の水廻り設備
export const waterEquipmentProductsLife: Product[] = [
  // ========== KITCHEN SYSTEMS ==========
  // Takara Standard Ofelia Kitchen
  {
    id: 'life-kitchen-takara-ofelia-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'タカラスタンダード オフェリア I型 2550mm',
    manufacturer: 'タカラスタンダード',
    modelNumber: 'OFELIA-I-2550-LIFE',
    unit: 'set',
    isOption: false,
    description: 'ホーロー製システムキッチン、高品位ホーロー仕様、Zシンク、食器洗い乾燥機付き',
    variants: [
      {
        id: 'v1',
        color: 'シャインホワイト',
        colorCode: 'SHINE_WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'シャイングレー',
        colorCode: 'SHINE_GRAY',
        images: []
      },
      {
        id: 'v3',
        color: 'シャインベージュ',
        colorCode: 'SHINE_BEIGE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LACIE', price: 200000 }
    ]
  },

  // Kitchen Panel and Accessories
  {
    id: 'life-kitchen-panel-takara-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'キッチンパネル',
    name: 'ホーローキッチンパネルHタイプ',
    manufacturer: 'タカラスタンダード',
    modelNumber: 'PANEL-H-TYPE',
    unit: 'set',
    isOption: false,
    description: 'ホーロー製キッチンパネル、油汚れや水ハネもサッとキレイ',
    variants: [
      {
        id: 'v1',
        color: 'ロッシュホワイト',
        colorCode: 'HRW',
        images: []
      },
      {
        id: 'v2',
        color: 'ロッシュベージュ',
        colorCode: 'HRB',
        images: []
      },
      {
        id: 'v3',
        color: 'マイルドホワイト',
        colorCode: 'HNW',
        images: []
      },
      {
        id: 'v4',
        color: 'ライトベージュ',
        colorCode: 'HNB',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LACIE', price: 40000 }
    ]
  },

  // Kitchen Faucet
  {
    id: 'life-kitchen-faucet-km5031-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: '水栓金具',
    name: 'ハンドシャワー水栓 KM5031TTKE',
    manufacturer: 'KVK',
    modelNumber: 'KM5031TTKE',
    unit: 'set',
    isOption: false,
    description: 'ハンドシャワー水栓、シャワーヘッド引き出し式',
    variants: [
      {
        id: 'v1',
        color: 'クロム',
        colorCode: 'CHROME',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'HOURS', price: 25000 },
      { plan: 'LACIE', price: 35000 }
    ]
  },

  // IH Heater
  {
    id: 'life-kitchen-ih-cs-g321ms-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'IHヒーター',
    name: '2口IHヒーター+1口ラジエントヒーター CS-G321MS',
    manufacturer: 'パナソニック',
    modelNumber: 'CS-G321MS',
    unit: 'set',
    isOption: false,
    description: '間口60cm、両面焼きグリル付き、2口IH+1口ラジエント',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: 'SILVER',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LACIE', price: 70000 }
    ]
  },

  // Range Hood
  {
    id: 'life-kitchen-hood-vua-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'レンジフード',
    name: 'レンジフードファン VUA型',
    manufacturer: 'タカラスタンダード',
    modelNumber: 'VUA',
    unit: 'set',
    isOption: false,
    description: 'ホーロー製整流板、スタンダードモデル',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: 'SILVER',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'HOURS', price: 35000 },
      { plan: 'LACIE', price: 50000 }
    ]
  },

  // Dishwasher
  {
    id: 'life-kitchen-dishwasher-ew45r3s-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: '食器洗い乾燥機',
    name: '食器洗い乾燥機 EW-45R3S',
    manufacturer: 'パナソニック',
    modelNumber: 'EW-45R3S',
    unit: 'set',
    isOption: false,
    description: '浅型/フレーム有りタイプ、食器収納容量40点、6コース、低騒音設計',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: 'SILVER',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 40000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LACIE', price: 80000 }
    ]
  },

  // ========== BATHROOM SYSTEMS ==========
  // LIXIL AX Bathroom
  {
    id: 'life-bathroom-lixil-ax-1616-001',
    categoryId: 'bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'LIXIL AX 1616サイズ',
    manufacturer: 'LIXIL',
    modelNumber: 'BMUS-1616LBZ-B+H',
    unit: 'set',
    isOption: false,
    description: 'パッとくるりんポイ排水口、くるりんポイ排水口、エコベンチ浴槽、ストレート浴槽',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LACIE', price: 200000 }
    ]
  },

  // Bathroom Accessories
  {
    id: 'life-bathroom-shower-head-001',
    categoryId: 'bathroom',
    categoryName: 'バスルーム',
    subcategory: 'シャワーヘッド',
    name: 'エコフルシャワー',
    manufacturer: 'LIXIL',
    modelNumber: 'ECOFUL-SHOWER',
    unit: 'set',
    isOption: false,
    description: '節水シャワーヘッド、約48%節水',
    variants: [
      {
        id: 'v1',
        color: 'クロム',
        colorCode: 'CHROME',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LACIE', price: 20000 }
    ]
  },

  // ========== WASHROOM SYSTEMS ==========
  // TOTO Octave
  {
    id: 'life-washroom-toto-octave-1200-001',
    categoryId: 'washroom',
    categoryName: '洗面化粧台',
    subcategory: '洗面化粧台',
    name: 'TOTO オクターブ 間口1200mm',
    manufacturer: 'TOTO',
    modelNumber: 'LDSFB120BJGDN1A/LMFB120A3GLC1G',
    unit: 'set',
    isOption: false,
    description: '3面鏡、ひろびろ設計のボウル、エコミラー、タッチレスワイドLED照明',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'HOURS', price: 80000 },
      { plan: 'LACIE', price: 110000 }
    ]
  },

  // Washroom Faucet
  {
    id: 'life-washroom-faucet-001',
    categoryId: 'washroom',
    categoryName: '洗面化粧台',
    subcategory: '水栓',
    name: 'お掃除ラクラク水栓',
    manufacturer: 'TOTO',
    modelNumber: 'CLEAN-FAUCET',
    unit: 'set',
    isOption: false,
    description: 'きれいにしやすく、掃除しやすい設計',
    variants: [
      {
        id: 'v1',
        color: 'クロム',
        colorCode: 'CHROME',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'HOURS', price: 25000 },
      { plan: 'LACIE', price: 35000 }
    ]
  },

  // ========== TOILET SYSTEMS ==========
  // TOTO GG-J1
  {
    id: 'life-toilet-toto-ggj1-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'ウォシュレット一体形便器',
    name: 'TOTO GG-J1',
    manufacturer: 'TOTO',
    modelNumber: 'CES9411',
    unit: 'set',
    isOption: false,
    description: '汚れツルリン、セフィオンテクト、トルネード洗浄、節水型',
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
      },
      {
        id: 'v3',
        color: 'パステルピンク',
        colorCode: 'SR2',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 40000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LACIE', price: 80000 }
    ]
  },

  // 2F Toilet - TOTO ZJ1
  {
    id: 'life-toilet-2f-toto-zj1-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'ウォシュレット一体形便器（2階用）',
    name: 'TOTO ZJ1 手洗いあり（2階トイレ）',
    manufacturer: 'TOTO',
    modelNumber: 'ZJ1-2F',
    unit: 'set',
    isOption: true,
    description: 'シンプルなデザイン、2階トイレ用、手洗い付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'パステルアイボリー',
        colorCode: 'PASTEL_IVORY',
        images: []
      },
      {
        id: 'v3',
        color: 'パステルピンク',
        colorCode: 'PASTEL_PINK',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LACIE', price: 70000 }
    ]
  },

  // INAX Basia Shower Toilet
  {
    id: 'life-toilet-inax-basia-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'ベーシアシャワートイレ',
    name: 'INAX ベーシアシャワートイレ',
    manufacturer: 'INAX',
    modelNumber: 'BC-B30S/DT-B383G',
    unit: 'set',
    isOption: true,
    description: 'キレイ機能、パワーストリーム洗浄、フチレス形状、ハイパーキラミック',
    variants: [
      {
        id: 'v1',
        color: 'ピュアホワイト',
        colorCode: 'BW1',
        images: []
      },
      {
        id: 'v2',
        color: 'オフホワイト',
        colorCode: 'BN8',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 35000 },
      { plan: 'LIFE+', price: 35000 },
      { plan: 'HOURS', price: 55000 },
      { plan: 'LACIE', price: 75000 }
    ]
  },

  // Panasonic NewアラウーノV (2F Toilet Option)
  {
    id: 'life-toilet-2f-panasonic-arauno-v-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'タンクレストイレ（2階用）',
    name: 'Panasonic NewアラウーノV リミテッド（2階トイレオプション）',
    manufacturer: 'パナソニック',
    modelNumber: 'YKL1CC',
    unit: 'set',
    isOption: true,
    description: '2階トイレ用、ターントラップ方式、水流コントロール設計、3Dツイスター水流',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'HOURS', price: 80000 },
      { plan: 'LACIE', price: 110000 }
    ]
  },

  // ========== ADDITIONAL EQUIPMENT ==========
  // Bathroom Heating & Drying
  {
    id: 'life-bathroom-heater-dryer-001',
    categoryId: 'bathroom-equipment',
    categoryName: 'バスルーム設備',
    subcategory: '浴室暖房乾燥機',
    name: '浴室暖房乾燥機',
    manufacturer: 'LIXIL',
    modelNumber: 'BDV-M3306',
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
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 35000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LACIE', price: 65000 }
    ]
  },

  // Hot Water Supply System
  {
    id: 'life-water-heater-eco-cute-370l-001',
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
      { plan: 'LIFE', price: 0 },
      { plan: 'LIFE+', price: 120000 },
      { plan: 'HOURS', price: 180000 },
      { plan: 'LACIE', price: 240000 }
    ]
  },

  // Floor Heating (Option)
  {
    id: 'life-floor-heating-001',
    categoryId: 'heating',
    categoryName: '暖房設備',
    subcategory: '床暖房',
    name: '温水式床暖房システム',
    manufacturer: 'パナソニック',
    modelNumber: 'FLOOR-HEATING-SYSTEM',
    unit: 'sqm',
    isOption: true,
    description: 'リビング・ダイニング用温水式床暖房',
    variants: [
      {
        id: 'v1',
        color: 'なし',
        colorCode: 'NONE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LACIE', price: 25000 }
    ]
  }
];