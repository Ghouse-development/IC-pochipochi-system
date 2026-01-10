import type { Product } from '../types/product';

// LIFE+ 専用の水廻り設備
export const waterEquipmentProductsLifePlus: Product[] = [
  // ========== KITCHEN SYSTEMS ==========
  // Panasonic S-Class Kitchen - Island Type
  {
    id: 'kitchen-panasonic-sclass-island-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'Panasonic S-Class アイランド型 2550mm',
    manufacturer: 'Panasonic',
    series: 'S-Class',
    modelNumber: 'S-Class-Island-2550',
    unit: 'セット',
    isOption: false,
    description: 'アイランド型システムキッチン、IHコンロ、食器洗い乾燥機付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ダークグレー',
        colorCode: 'DARK_GRAY',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 150000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LACIE', price: 250000 }
    ]
  },

  // Panasonic S-Class Kitchen - Peninsula Type
  {
    id: 'kitchen-panasonic-sclass-peninsula-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'Panasonic S-Class ペニンシュラ型 2585mm',
    manufacturer: 'Panasonic',
    series: 'S-Class',
    modelNumber: 'S-Class-Peninsula-2585',
    unit: 'セット',
    isOption: false,
    description: 'ペニンシュラ型システムキッチン、IHコンロ、食器洗い乾燥機付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ウォールナット',
        colorCode: 'WALNUT',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 130000 },
      { plan: 'HOURS', price: 180000 },
      { plan: 'LACIE', price: 230000 }
    ]
  },

  // Takara Standard Ofelia Kitchen
  {
    id: 'kitchen-takara-ofelia-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'タカラスタンダード オフェリア 2550mm',
    manufacturer: 'タカラスタンダード',
    series: 'オフェリア',
    modelNumber: 'OFELIA-2550',
    unit: 'セット',
    isOption: true,
    description: 'ホーローシステムキッチン、高品位ホーロー仕様',
    variants: [
      {
        id: 'v1',
        color: 'クリスタルホワイト',
        colorCode: 'CRYSTAL_WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ロイヤルブルー',
        colorCode: 'ROYAL_BLUE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 120000 },
      { plan: 'LIFE', price: 120000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LACIE', price: 200000 }
    ]
  },

  // Takara Standard Grandia Kitchen
  {
    id: 'kitchen-takara-grandia-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'タカラスタンダード グランディア 2700mm',
    manufacturer: 'タカラスタンダード',
    series: 'グランディア',
    modelNumber: 'GRANDIA-2700',
    unit: 'セット',
    isOption: true,
    description: '最高級ホーローシステムキッチン、フルフラット対面式',
    variants: [
      {
        id: 'v1',
        color: 'プレミアムホワイト',
        colorCode: 'PREMIUM_WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ノーブルグレー',
        colorCode: 'NOBLE_GRAY',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 180000 },
      { plan: 'LIFE', price: 180000 },
      { plan: 'HOURS', price: 220000 },
      { plan: 'LACIE', price: 280000 }
    ]
  },

  // LIXIL Richelle Kitchen
  {
    id: 'kitchen-lixil-richelle-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'LIXIL リシェル 2550mm',
    manufacturer: 'LIXIL',
    series: 'リシェル',
    modelNumber: 'RICHELLE-2550',
    unit: 'セット',
    isOption: true,
    description: 'セラミックトップ仕様、高機能システムキッチン',
    variants: [
      {
        id: 'v1',
        color: 'グレイッシュホワイト',
        colorCode: 'GRAYISH_WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'チャコールブラック',
        colorCode: 'CHARCOAL_BLACK',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 150000 },
      { plan: 'LIFE', price: 150000 },
      { plan: 'HOURS', price: 190000 },
      { plan: 'LACIE', price: 240000 }
    ]
  },

  // グラフテクト キッチン
  {
    id: 'kitchen-graftekt-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'グラフテクト キッチン',
    manufacturer: 'グラフテクト',
    series: 'グラフテクト',
    modelNumber: 'GRAFTEKT-KITCHEN',
    unit: 'セット',
    isOption: true,
    description: 'デザイン性と機能性を兼ね備えたキッチン。29色×11レイアウトから選択可能',
    variants: [
      { id: 'v1', color: 'ミッドナイトブラック', colorCode: 'MIDNIGHT_BLACK', images: [] },
      { id: 'v2', color: 'クラウドホワイト', colorCode: 'CLOUD_WHITE', images: [] },
      { id: 'v3', color: 'チャコールグレー', colorCode: 'CHARCOAL_GRAY', images: [] },
      { id: 'v4', color: 'ペールグレー', colorCode: 'PALE_GRAY', images: [] },
      { id: 'v5', color: 'ウォームベージュ', colorCode: 'WARM_BEIGE', images: [] },
      { id: 'v6', color: 'モカブラウン', colorCode: 'MOCHA_BROWN', images: [] },
      { id: 'v7', color: 'ダークウォールナット', colorCode: 'DARK_WALNUT', images: [] },
      { id: 'v8', color: 'ナチュラルオーク', colorCode: 'NATURAL_OAK', images: [] },
      { id: 'v9', color: 'ライトアッシュ', colorCode: 'LIGHT_ASH', images: [] },
      { id: 'v10', color: 'グレイッシュブルー', colorCode: 'GRAYISH_BLUE', images: [] },
      { id: 'v11', color: 'オリーブグリーン', colorCode: 'OLIVE_GREEN', images: [] },
      { id: 'v12', color: 'テラコッタ', colorCode: 'TERRACOTTA', images: [] },
      { id: 'v13', color: 'サンドベージュ', colorCode: 'SAND_BEIGE', images: [] },
      { id: 'v14', color: 'ストーングレー', colorCode: 'STONE_GRAY', images: [] },
      { id: 'v15', color: 'アイボリー', colorCode: 'IVORY', images: [] },
      { id: 'v16', color: 'シャンパンゴールド', colorCode: 'CHAMPAGNE_GOLD', images: [] },
      { id: 'v17', color: 'ローズウッド', colorCode: 'ROSEWOOD', images: [] },
      { id: 'v18', color: 'マホガニー', colorCode: 'MAHOGANY', images: [] },
      { id: 'v19', color: 'エボニー', colorCode: 'EBONY', images: [] },
      { id: 'v20', color: 'スモークオーク', colorCode: 'SMOKE_OAK', images: [] },
      { id: 'v21', color: 'ピュアホワイト', colorCode: 'PURE_WHITE', images: [] },
      { id: 'v22', color: 'マットブラック', colorCode: 'MATTE_BLACK', images: [] },
      { id: 'v23', color: 'スレートグレー', colorCode: 'SLATE_GRAY', images: [] },
      { id: 'v24', color: 'ウォームグレー', colorCode: 'WARM_GRAY', images: [] },
      { id: 'v25', color: 'ハニーオーク', colorCode: 'HONEY_OAK', images: [] },
      { id: 'v26', color: 'チェスナット', colorCode: 'CHESTNUT', images: [] },
      { id: 'v27', color: 'ペブルグレー', colorCode: 'PEBBLE_GRAY', images: [] },
      { id: 'v28', color: 'ミストホワイト', colorCode: 'MIST_WHITE', images: [] },
      { id: 'v29', color: 'アンティークブラウン', colorCode: 'ANTIQUE_BROWN', images: [] }
    ],
    pricing: [
      { plan: 'LIFE+', price: 1750000 },
      { plan: 'LIFE', price: 1750000 },
      { plan: 'HOURS', price: 1800000 },
      { plan: 'LACIE', price: 1850000 }
    ]
  },

  // LIXIL Noct Kitchen
  {
    id: 'kitchen-lixil-noct-001',
    categoryId: 'kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'LIXIL ノクト 2400mm',
    manufacturer: 'LIXIL',
    series: 'ノクト',
    modelNumber: 'NOCT-2400',
    unit: 'セット',
    isOption: true,
    description: 'スタンダードシステムキッチン、機能性重視',
    variants: [
      {
        id: 'v1',
        color: 'ピュアホワイト',
        colorCode: 'PURE_WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ダークウッド',
        colorCode: 'DARK_WOOD',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 100000 },
      { plan: 'HOURS', price: 130000 },
      { plan: 'LACIE', price: 170000 }
    ]
  },

  // ========== BATHROOM SYSTEMS ==========
  // Panasonic Oflora Bathroom
  {
    id: 'bathroom-panasonic-oflora-1616-001',
    categoryId: 'bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'Panasonic オフローラ 1616サイズ',
    manufacturer: 'Panasonic',
    series: 'オフローラ',
    modelNumber: 'OFLORA-1616',
    unit: 'セット',
    isOption: false,
    description: 'スミピカフロア、保温浴槽II、LEDライン照明付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ベージュ',
        colorCode: 'BEIGE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 80000 },
      { plan: 'HOURS', price: 120000 },
      { plan: 'LACIE', price: 180000 }
    ]
  },

  {
    id: 'bathroom-panasonic-oflora-1618-001',
    categoryId: 'bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'Panasonic オフローラ 1618サイズ',
    manufacturer: 'Panasonic',
    series: 'オフローラ',
    modelNumber: 'OFLORA-1618',
    unit: 'セット',
    isOption: false,
    description: 'ワイドサイズ、スミピカフロア、保温浴槽II、LEDライン照明付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'グレー',
        colorCode: 'GRAY',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 100000 },
      { plan: 'HOURS', price: 140000 },
      { plan: 'LACIE', price: 200000 }
    ]
  },

  {
    id: 'bathroom-panasonic-oflora-1620-001',
    categoryId: 'bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'Panasonic オフローラ 1620サイズ',
    manufacturer: 'Panasonic',
    series: 'オフローラ',
    modelNumber: 'OFLORA-1620',
    unit: 'セット',
    isOption: true,
    description: '特大サイズ、スミピカフロア、保温浴槽II、LEDライン照明付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ダークブラウン',
        colorCode: 'DARK_BROWN',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 40000 },
      { plan: 'LIFE', price: 120000 },
      { plan: 'HOURS', price: 160000 },
      { plan: 'LACIE', price: 220000 }
    ]
  },

  // LIXIL AX Bathroom
  {
    id: 'bathroom-lixil-ax-1616-001',
    categoryId: 'bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'LIXIL AX 1616サイズ',
    manufacturer: 'LIXIL',
    series: 'AX',
    modelNumber: 'AX-1616',
    unit: 'セット',
    isOption: true,
    description: 'キレイサーモフロア、サーモバスS、エコフルシャワー付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ピンク',
        colorCode: 'PINK',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 90000 },
      { plan: 'LIFE', price: 90000 },
      { plan: 'HOURS', price: 130000 },
      { plan: 'LACIE', price: 190000 }
    ]
  },

  {
    id: 'bathroom-lixil-ax-1618-001',
    categoryId: 'bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'LIXIL AX 1618サイズ',
    manufacturer: 'LIXIL',
    series: 'AX',
    modelNumber: 'AX-1618',
    unit: 'セット',
    isOption: true,
    description: 'ワイドサイズ、キレイサーモフロア、サーモバスS、エコフルシャワー付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ブルーグレー',
        colorCode: 'BLUE_GRAY',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 110000 },
      { plan: 'LIFE', price: 110000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LACIE', price: 210000 }
    ]
  },

  // ========== TOILET SYSTEMS ==========
  // Panasonic Arauno Z160
  {
    id: 'toilet-panasonic-arauno-z160-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'タンクレストイレ',
    name: 'Panasonic アラウーノ Z160',
    manufacturer: 'Panasonic',
    series: 'アラウーノ',
    modelNumber: 'ARAUNO-Z160',
    unit: 'セット',
    isOption: false,
    description: 'タンクレス、泡コート、自動洗浄機能付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 50000 },
      { plan: 'HOURS', price: 80000 },
      { plan: 'LACIE', price: 120000 }
    ]
  },

  // TOTO GG-J1
  {
    id: 'toilet-toto-ggj1-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'タンク式トイレ',
    name: 'TOTO GG-J1',
    manufacturer: 'TOTO',
    series: 'GG',
    modelNumber: 'GG-J1',
    unit: 'セット',
    isOption: true,
    description: 'タンク式、セフィオンテクト、トルネード洗浄',
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
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LACIE', price: 80000 }
    ]
  },

  // TOTO ZJ1
  {
    id: 'toilet-toto-zj1-001',
    categoryId: 'toilet',
    categoryName: 'トイレ',
    subcategory: 'タンク式トイレ',
    name: 'TOTO ZJ1',
    manufacturer: 'TOTO',
    series: 'ZJ',
    modelNumber: 'ZJ1',
    unit: 'セット',
    isOption: true,
    description: 'コンパクトタンク式、セフィオンテクト、節水型',
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
      { plan: 'LIFE+', price: 25000 },
      { plan: 'LIFE', price: 25000 },
      { plan: 'HOURS', price: 45000 },
      { plan: 'LACIE', price: 70000 }
    ]
  },

  // ========== WASHROOM SYSTEMS ==========
  // TOTO Octave
  {
    id: 'washroom-toto-octave-750-001',
    categoryId: 'washroom',
    categoryName: '洗面化粧台',
    subcategory: '洗面化粧台',
    name: 'TOTO オクターブ 750mm',
    manufacturer: 'TOTO',
    series: 'オクターブ',
    modelNumber: 'OCTAVE-750',
    unit: 'セット',
    isOption: false,
    description: '3面鏡、LED照明、引き出し収納タイプ',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ライトウッド',
        colorCode: 'LIGHT_WOOD',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 30000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LACIE', price: 80000 }
    ]
  },

  {
    id: 'washroom-toto-octave-900-001',
    categoryId: 'washroom',
    categoryName: '洗面化粧台',
    subcategory: '洗面化粧台',
    name: 'TOTO オクターブ 900mm',
    manufacturer: 'TOTO',
    series: 'オクターブ',
    modelNumber: 'OCTAVE-900',
    unit: 'セット',
    isOption: true,
    description: '3面鏡ワイド、LED照明、大容量引き出し収納タイプ',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ダークウッド',
        colorCode: 'DARK_WOOD',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 50000 },
      { plan: 'HOURS', price: 70000 },
      { plan: 'LACIE', price: 100000 }
    ]
  },

  // LIXIL Piara
  {
    id: 'washroom-lixil-piara-750-001',
    categoryId: 'washroom',
    categoryName: '洗面化粧台',
    subcategory: '洗面化粧台',
    name: 'LIXIL ピアラ 750mm',
    manufacturer: 'LIXIL',
    series: 'ピアラ',
    modelNumber: 'PIARA-750',
    unit: 'セット',
    isOption: true,
    description: '3面鏡、LED照明、扉タイプ収納',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'ミントグリーン',
        colorCode: 'MINT_GREEN',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 25000 },
      { plan: 'LIFE', price: 25000 },
      { plan: 'HOURS', price: 45000 },
      { plan: 'LACIE', price: 70000 }
    ]
  },

  {
    id: 'washroom-lixil-piara-900-001',
    categoryId: 'washroom',
    categoryName: '洗面化粧台',
    subcategory: '洗面化粧台',
    name: 'LIXIL ピアラ 900mm',
    manufacturer: 'LIXIL',
    series: 'ピアラ',
    modelNumber: 'PIARA-900',
    unit: 'セット',
    isOption: true,
    description: '3面鏡ワイド、LED照明、大容量扉タイプ収納',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      },
      {
        id: 'v2',
        color: 'チェリーウッド',
        colorCode: 'CHERRY_WOOD',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 45000 },
      { plan: 'LIFE', price: 45000 },
      { plan: 'HOURS', price: 65000 },
      { plan: 'LACIE', price: 90000 }
    ]
  },

  // ========== ADDITIONAL EQUIPMENT ==========
  // Hot Water Supply Systems
  {
    id: 'water-heater-eco-cute-370l-001',
    categoryId: 'water-heater',
    categoryName: '給湯器',
    subcategory: 'エコキュート',
    name: 'パナソニック エコキュート 370L フルオート',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-NS37KQS',
    unit: 'セット',
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
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 100000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LACIE', price: 200000 }
    ]
  },

  {
    id: 'water-heater-eco-cute-460l-001',
    categoryId: 'water-heater',
    categoryName: '給湯器',
    subcategory: 'エコキュート',
    name: 'パナソニック エコキュート 460L フルオート',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-NS46KQS',
    unit: 'セット',
    isOption: true,
    description: '大容量省エネ給湯器、フルオート、高圧力型',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: 'SILVER',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 150000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LACIE', price: 250000 }
    ]
  },


  // Second Washroom Options
  {
    id: 'second-washroom-001',
    categoryId: 'washroom',
    categoryName: '洗面化粧台',
    subcategory: '2階洗面',
    name: 'コンパクト洗面台 600mm',
    manufacturer: 'TOTO',
    series: 'コンパクト',
    modelNumber: 'COMPACT-600',
    unit: 'セット',
    isOption: true,
    description: '2階用コンパクト洗面台、1面鏡付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 },
      { plan: 'HOURS', price: 40000 },
      { plan: 'LACIE', price: 50000 }
    ]
  },

  // Laundry Room Equipment
  {
    id: 'laundry-sink-001',
    categoryId: 'laundry',
    categoryName: 'ランドリー',
    subcategory: '洗濯流し',
    name: 'マルチシンク 600mm',
    manufacturer: 'TOTO',
    modelNumber: 'MULTI-SINK-600',
    unit: 'セット',
    isOption: true,
    description: '深型洗濯流し、水栓付き',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LACIE', price: 40000 }
    ]
  },

  // Bathroom Heating & Drying
  {
    id: 'bathroom-heater-dryer-001',
    categoryId: 'bathroom-equipment',
    categoryName: 'バスルーム設備',
    subcategory: '浴室暖房乾燥機',
    name: '浴室暖房乾燥機 1室換気',
    manufacturer: 'Panasonic',
    modelNumber: 'FY-13UG7E',
    unit: 'セット',
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
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 30000 },
      { plan: 'HOURS', price: 40000 },
      { plan: 'LACIE', price: 50000 }
    ]
  },

  {
    id: 'bathroom-heater-dryer-3room-001',
    categoryId: 'bathroom-equipment',
    categoryName: 'バスルーム設備',
    subcategory: '浴室暖房乾燥機',
    name: '浴室暖房乾燥機 3室換気',
    manufacturer: 'Panasonic',
    modelNumber: 'FY-13UG7E-3',
    unit: 'セット',
    isOption: true,
    description: '浴室・洗面・トイレ3室換気対応',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: 'WHITE',
        images: []
      }
    ],
    pricing: [
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 50000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LACIE', price: 70000 }
    ]
  }
];

// 全水廻り設備を統合（互換性のため）
export const waterEquipmentProducts = waterEquipmentProductsLifePlus;