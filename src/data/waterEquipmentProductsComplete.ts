// 水廻り製品データ - キッチン・バス・洗面・トイレを統合した完全版
import type { Product } from '../types/product';

export const waterEquipmentProductsComplete: Product[] = [
  // ===== キッチン =====

  // ステディア
  {
    id: 'water-kitchen-stedia',
    categoryId: 'water-kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'ステディア',
    manufacturer: 'クリナップ',
    modelNumber: 'STEDIA',
    unit: '式',
    isOption: false,
    description: 'ステンレスキャビネットの高品質システムキッチン',
    variants: [
      { id: 'v1', color: 'クリスタルホワイト', colorCode: '#FAFAFA', modelNumber: 'ST-CW' },
      { id: 'v2', color: 'ペアウッドホワイト', colorCode: '#F5F5DC', modelNumber: 'ST-PWW' },
      { id: 'v3', color: 'ペアウッドアッシュ', colorCode: '#D4C5B9', modelNumber: 'ST-PWA' },
      { id: 'v4', color: 'オークナチュラル', colorCode: '#DEB887', modelNumber: 'ST-ON' },
      { id: 'v5', color: 'チークブラウン', colorCode: '#8B4513', modelNumber: 'ST-TB' },
      { id: 'v6', color: 'ダークウォールナット', colorCode: '#654321', modelNumber: 'ST-DW' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // クリンレディ
  {
    id: 'water-kitchen-cleanady',
    categoryId: 'water-kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'クリンレディ',
    manufacturer: 'クリナップ',
    modelNumber: 'CLEANADY',
    unit: '式',
    isOption: true,
    description: 'コストパフォーマンスに優れたシステムキッチン',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'CL-WH' },
      { id: 'v2', color: 'ナチュラル', colorCode: '#F5F5DC', modelNumber: 'CL-NAT' },
      { id: 'v3', color: 'ダークブラウン', colorCode: '#654321', modelNumber: 'CL-DB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: -200000 },
      { plan: 'HOURS', planId: 'HOURS', price: -200000 },
      { plan: 'LIFE', planId: 'LIFE', price: -150000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: -100000 }
    ]
  },

  // ラクエラ
  {
    id: 'water-kitchen-lacucina',
    categoryId: 'water-kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'ラクエラ',
    manufacturer: 'クリナップ',
    modelNumber: 'LACUCINA',
    unit: '式',
    isOption: true,
    description: 'スタイリッシュで機能的なキッチン',
    variants: [
      { id: 'v1', color: 'シンプルホワイト', colorCode: '#FFFFFF', modelNumber: 'LC-SW' },
      { id: 'v2', color: 'ライトオーク', colorCode: '#DEB887', modelNumber: 'LC-LO' },
      { id: 'v3', color: 'ダークオーク', colorCode: '#8B4513', modelNumber: 'LC-DO' },
      { id: 'v4', color: 'グレー', colorCode: '#808080', modelNumber: 'LC-GR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 150000 },
      { plan: 'HOURS', planId: 'HOURS', price: 150000 },
      { plan: 'LIFE', planId: 'LIFE', price: 120000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 100000 }
    ]
  },

  // ===== バスルーム =====

  // サザナ Sタイプ
  {
    id: 'water-bath-sazana-s',
    categoryId: 'water-bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'サザナ Sタイプ',
    manufacturer: 'TOTO',
    modelNumber: 'SAZANA-S',
    unit: '式',
    isOption: false,
    description: 'スタンダードなシステムバス',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'SZ-S-W' },
      { id: 'v2', color: 'ベージュ', colorCode: '#F5DEB3', modelNumber: 'SZ-S-BE' },
      { id: 'v3', color: 'ピンク', colorCode: '#FFE4E1', modelNumber: 'SZ-S-PK' },
      { id: 'v4', color: 'グレー', colorCode: '#D3D3D3', modelNumber: 'SZ-S-GR' },
      { id: 'v5', color: 'ブラック', colorCode: '#333333', modelNumber: 'SZ-S-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // サザナ HTタイプ
  {
    id: 'water-bath-sazana-ht',
    categoryId: 'water-bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'サザナ HTタイプ',
    manufacturer: 'TOTO',
    modelNumber: 'SAZANA-HT',
    unit: '式',
    isOption: true,
    description: '高機能システムバス',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'SZ-HT-W' },
      { id: 'v2', color: 'ベージュ', colorCode: '#F5DEB3', modelNumber: 'SZ-HT-BE' },
      { id: 'v3', color: 'グレー', colorCode: '#D3D3D3', modelNumber: 'SZ-HT-GR' },
      { id: 'v4', color: 'ブラック', colorCode: '#333333', modelNumber: 'SZ-HT-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 150000 },
      { plan: 'HOURS', planId: 'HOURS', price: 150000 },
      { plan: 'LIFE', planId: 'LIFE', price: 120000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 100000 }
    ]
  },

  // シンラ
  {
    id: 'water-bath-synla',
    categoryId: 'water-bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'シンラ',
    manufacturer: 'TOTO',
    modelNumber: 'SYNLA',
    unit: '式',
    isOption: true,
    description: '最高級システムバス',
    variants: [
      { id: 'v1', color: 'プレミアムホワイト', colorCode: '#FFFFFF', modelNumber: 'SY-PW' },
      { id: 'v2', color: 'マーブルベージュ', colorCode: '#F5E6D3', modelNumber: 'SY-MB' },
      { id: 'v3', color: 'グランドグレー', colorCode: '#A9A9A9', modelNumber: 'SY-GG' },
      { id: 'v4', color: 'ディープブラック', colorCode: '#000000', modelNumber: 'SY-DB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 500000 },
      { plan: 'HOURS', planId: 'HOURS', price: 500000 },
      { plan: 'LIFE', planId: 'LIFE', price: 450000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 400000 }
    ]
  },

  // スパージュ
  {
    id: 'water-bath-sparge',
    categoryId: 'water-bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'スパージュ',
    manufacturer: 'LIXIL',
    modelNumber: 'SPARGE',
    unit: '式',
    isOption: true,
    description: 'プレミアムスパバス',
    variants: [
      { id: 'v1', color: 'ピュアホワイト', colorCode: '#FFFFFF', modelNumber: 'SP-PW' },
      { id: 'v2', color: 'ナチュラルベージュ', colorCode: '#F5DEB3', modelNumber: 'SP-NB' },
      { id: 'v3', color: 'スレートグレー', colorCode: '#708090', modelNumber: 'SP-SG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 600000 },
      { plan: 'HOURS', planId: 'HOURS', price: 600000 },
      { plan: 'LIFE', planId: 'LIFE', price: 550000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 500000 }
    ]
  },

  // ===== トイレ =====

  // ベーシア
  {
    id: 'water-toilet-basia',
    categoryId: 'water-toilet',
    categoryName: 'トイレ',
    subcategory: 'タンクレストイレ',
    name: 'ベーシア',
    manufacturer: 'LIXIL',
    modelNumber: 'BASIA',
    unit: '台',
    isOption: false,
    description: 'シンプルで高機能なタンクレストイレ',
    variants: [
      { id: 'v1', color: 'ピュアホワイト', colorCode: '#FFFFFF', modelNumber: 'BA-PW' },
      { id: 'v2', color: 'オフホワイト', colorCode: '#FAF0E6', modelNumber: 'BA-OW' },
      { id: 'v3', color: 'ピンク', colorCode: '#FFE4E1', modelNumber: 'BA-PK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // サティス
  {
    id: 'water-toilet-satis',
    categoryId: 'water-toilet',
    categoryName: 'トイレ',
    subcategory: 'タンクレストイレ',
    name: 'サティス',
    manufacturer: 'LIXIL',
    modelNumber: 'SATIS',
    unit: '台',
    isOption: true,
    description: '高級タンクレストイレ',
    variants: [
      { id: 'v1', color: 'ピュアホワイト', colorCode: '#FFFFFF', modelNumber: 'ST-PW' },
      { id: 'v2', color: 'ベージュ', colorCode: '#F5DEB3', modelNumber: 'ST-BE' },
      { id: 'v3', color: 'グレー', colorCode: '#D3D3D3', modelNumber: 'ST-GR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 200000 },
      { plan: 'HOURS', planId: 'HOURS', price: 200000 },
      { plan: 'LIFE', planId: 'LIFE', price: 180000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 150000 }
    ]
  },

  // ネオレスト
  {
    id: 'water-toilet-neorest',
    categoryId: 'water-toilet',
    categoryName: 'トイレ',
    subcategory: 'タンクレストイレ',
    name: 'ネオレスト',
    manufacturer: 'TOTO',
    modelNumber: 'NEOREST',
    unit: '台',
    isOption: true,
    description: 'TOTOの最高級タンクレストイレ',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'NR-W' },
      { id: 'v2', color: 'パステルピンク', colorCode: '#FFE4E1', modelNumber: 'NR-PP' },
      { id: 'v3', color: 'パステルアイボリー', colorCode: '#FFFFF0', modelNumber: 'NR-PI' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 350000 },
      { plan: 'HOURS', planId: 'HOURS', price: 350000 },
      { plan: 'LIFE', planId: 'LIFE', price: 320000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 300000 }
    ]
  },

  // GG（ジージー）
  {
    id: 'water-toilet-gg',
    categoryId: 'water-toilet',
    categoryName: 'トイレ',
    subcategory: 'タンク付きトイレ',
    name: 'GG（ジージー）',
    manufacturer: 'TOTO',
    modelNumber: 'GG',
    unit: '台',
    isOption: true,
    description: 'シンプルなタンク付きトイレ',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'GG-W' },
      { id: 'v2', color: 'パステルピンク', colorCode: '#FFE4E1', modelNumber: 'GG-PP' },
      { id: 'v3', color: 'パステルアイボリー', colorCode: '#FFFFF0', modelNumber: 'GG-PI' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: -50000 },
      { plan: 'HOURS', planId: 'HOURS', price: -50000 },
      { plan: 'LIFE', planId: 'LIFE', price: -40000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: -30000 }
    ]
  },

  // ===== 洗面台 =====

  // シーライン
  {
    id: 'water-vanity-cline',
    categoryId: 'water-vanity',
    categoryName: '洗面台',
    subcategory: '洗面化粧台',
    name: 'シーライン',
    manufacturer: 'Panasonic',
    modelNumber: 'C-LINE',
    unit: '台',
    isOption: false,
    description: 'スタイリッシュで収納力抜群の洗面化粧台',
    variants: [
      { id: 'v1', color: 'スタンダードホワイト', colorCode: '#FAFAFA', modelNumber: 'CL-SW' },
      { id: 'v2', color: 'ソフトウォールナット', colorCode: '#8B7355', modelNumber: 'CL-SWN' },
      { id: 'v3', color: 'ソフトオーク', colorCode: '#DEB887', modelNumber: 'CL-SO' },
      { id: 'v4', color: 'アルベロブラック', colorCode: '#2C2C2C', modelNumber: 'CL-AB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ウツクシーズ
  {
    id: 'water-vanity-utsukushiizu',
    categoryId: 'water-vanity',
    categoryName: '洗面台',
    subcategory: '洗面化粧台',
    name: 'ウツクシーズ',
    manufacturer: 'Panasonic',
    modelNumber: 'UTSUKUSHIIZU',
    unit: '台',
    isOption: true,
    description: '美しさと機能性を兼ね備えた洗面化粧台',
    variants: [
      { id: 'v1', color: 'グロスホワイト', colorCode: '#FFFFFF', modelNumber: 'UT-GW' },
      { id: 'v2', color: 'ウォールナット', colorCode: '#5D4037', modelNumber: 'UT-WN' },
      { id: 'v3', color: 'オーク', colorCode: '#DEB887', modelNumber: 'UT-OK' },
      { id: 'v4', color: 'ブラック', colorCode: '#000000', modelNumber: 'UT-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 100000 },
      { plan: 'HOURS', planId: 'HOURS', price: 100000 },
      { plan: 'LIFE', planId: 'LIFE', price: 80000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // エルシィ
  {
    id: 'water-vanity-lsie',
    categoryId: 'water-vanity',
    categoryName: '洗面台',
    subcategory: '洗面化粧台',
    name: 'エルシィ',
    manufacturer: 'LIXIL',
    modelNumber: 'LSIE',
    unit: '台',
    isOption: true,
    description: 'シンプルで機能的な洗面化粧台',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'LS-W' },
      { id: 'v2', color: 'ライトオーク', colorCode: '#DEB887', modelNumber: 'LS-LO' },
      { id: 'v3', color: 'ダークオーク', colorCode: '#8B4513', modelNumber: 'LS-DO' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 80000 },
      { plan: 'HOURS', planId: 'HOURS', price: 80000 },
      { plan: 'LIFE', planId: 'LIFE', price: 60000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 40000 }
    ]
  },

  // ピアラ
  {
    id: 'water-vanity-piara',
    categoryId: 'water-vanity',
    categoryName: '洗面台',
    subcategory: '洗面化粧台',
    name: 'ピアラ',
    manufacturer: 'TOTO',
    modelNumber: 'PIARA',
    unit: '台',
    isOption: true,
    description: 'スタイリッシュなデザインの洗面化粧台',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'PI-W' },
      { id: 'v2', color: 'ナチュラルオーク', colorCode: '#DEB887', modelNumber: 'PI-NO' },
      { id: 'v3', color: 'ダークウッド', colorCode: '#654321', modelNumber: 'PI-DW' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 120000 },
      { plan: 'HOURS', planId: 'HOURS', price: 120000 },
      { plan: 'LIFE', planId: 'LIFE', price: 100000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 80000 }
    ]
  },

  // ===== 給湯器 =====

  // エコキュート 370L
  {
    id: 'water-heater-ecocute-370',
    categoryId: 'water-heater',
    categoryName: '給湯器',
    subcategory: 'エコキュート',
    name: 'エコキュート 370L',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-J37K',
    unit: '台',
    isOption: false,
    description: '370L標準タンク容量のエコキュート',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'HE-J37K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // エコキュート 460L
  {
    id: 'water-heater-ecocute-460',
    categoryId: 'water-heater',
    categoryName: '給湯器',
    subcategory: 'エコキュート',
    name: 'エコキュート 460L',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-J46K',
    unit: '台',
    isOption: true,
    description: '460L大容量タンクのエコキュート',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'HE-J46K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 50000 },
      { plan: 'HOURS', planId: 'HOURS', price: 50000 },
      { plan: 'LIFE', planId: 'LIFE', price: 40000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // エコキュート 370L（フルオート）
  {
    id: 'water-heater-ecocute-370-full',
    categoryId: 'water-heater',
    categoryName: '給湯器',
    subcategory: 'エコキュート',
    name: 'エコキュート 370L（フルオート）',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-J37JQ',
    unit: '台',
    isOption: true,
    description: 'フルオート機能付きエコキュート',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'HE-J37JQ' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 80000 },
      { plan: 'HOURS', planId: 'HOURS', price: 80000 },
      { plan: 'LIFE', planId: 'LIFE', price: 70000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // エコキュート 550L
  {
    id: 'water-heater-ecocute-550',
    categoryId: 'water-heater',
    categoryName: '給湯器',
    subcategory: 'エコキュート',
    name: 'エコキュート 550L',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-J55K',
    unit: '台',
    isOption: true,
    description: '550L超大容量タンクのエコキュート',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'HE-J55K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 120000 },
      { plan: 'HOURS', planId: 'HOURS', price: 120000 },
      { plan: 'LIFE', planId: 'LIFE', price: 100000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 80000 }
    ]
  },

  // ===== 水栓・蛇口 =====

  // 外部水栓（散水栓）
  {
    id: 'water-faucet-outdoor-spray',
    categoryId: 'water-faucet',
    categoryName: '水栓',
    subcategory: '外部水栓',
    name: '散水栓',
    manufacturer: 'KAKUDAI',
    modelNumber: 'SPRAY-FAUCET',
    unit: '箇所',
    isOption: false,
    description: '庭やベランダの散水用水栓',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', modelNumber: 'KAK-701-13' },
      { id: 'v2', color: 'ブロンズ', colorCode: '#CD7F32', modelNumber: 'KAK-701-13B' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 立水栓
  {
    id: 'water-faucet-standing',
    categoryId: 'water-faucet',
    categoryName: '水栓',
    subcategory: '外部水栓',
    name: '立水栓',
    manufacturer: 'KAKUDAI',
    modelNumber: 'STANDING-FAUCET',
    unit: '箇所',
    isOption: true,
    description: 'おしゃれな立水栓',
    variants: [
      { id: 'v1', color: 'ステンレス', colorCode: '#C0C0C0', modelNumber: 'KAK-624-131' },
      { id: 'v2', color: 'ブラック', colorCode: '#000000', modelNumber: 'KAK-624-131B' },
      { id: 'v3', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'KAK-624-131W' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 35000 },
      { plan: 'HOURS', planId: 'HOURS', price: 35000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 25000 }
    ]
  },

  // ===== 手洗器 =====

  // 玄関手洗器セット
  {
    id: 'water-entrance-washbasin',
    categoryId: 'water-washbasin',
    categoryName: '手洗器',
    subcategory: '玄関手洗器',
    name: '玄関手洗器セット',
    manufacturer: 'TOTO',
    modelNumber: 'ENTRANCE-WASHBASIN',
    unit: '式',
    isOption: true,
    description: '玄関用コンパクト手洗器',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'L30DM' },
      { id: 'v2', color: 'ベージュ', colorCode: '#F5DEB3', modelNumber: 'L30DM-BE' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 180000 },
      { plan: 'HOURS', planId: 'HOURS', price: 180000 },
      { plan: 'LIFE', planId: 'LIFE', price: 160000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 140000 }
    ]
  },

  // ===== その他設備 =====

  // 浄水器一体型水栓
  {
    id: 'water-purifier-faucet',
    categoryId: 'water-purifier',
    categoryName: '浄水器',
    subcategory: '水栓一体型',
    name: '浄水器一体型水栓',
    manufacturer: 'タカラスタンダード',
    modelNumber: 'TJS-SP',
    unit: '台',
    isOption: true,
    description: 'カートリッジ交換が簡単な浄水器一体型水栓',
    variants: [
      { id: 'v1', color: 'クロームメッキ', colorCode: '#C0C0C0', modelNumber: 'TJS-SP-CM' },
      { id: 'v2', color: 'マットブラック', colorCode: '#2C2C2C', modelNumber: 'TJS-SP-MB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 35000 },
      { plan: 'HOURS', planId: 'HOURS', price: 35000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 25000 }
    ]
  },

  // 食洗機
  {
    id: 'water-dishwasher',
    categoryId: 'water-dishwasher',
    categoryName: '食洗機',
    subcategory: 'ビルトイン',
    name: 'ビルトイン食器洗い乾燥機',
    manufacturer: 'Panasonic',
    modelNumber: 'NP-45MD9S',
    unit: '台',
    isOption: true,
    description: '省エネ・節水のビルトイン食洗機',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', modelNumber: 'NP-45MD9S' },
      { id: 'v2', color: 'ブラック', colorCode: '#000000', modelNumber: 'NP-45MD9K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 80000 },
      { plan: 'HOURS', planId: 'HOURS', price: 80000 },
      { plan: 'LIFE', planId: 'LIFE', price: 70000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // ナノバブル発生装置
  {
    id: 'water-nanobubble',
    categoryId: 'water-equipment',
    categoryName: 'その他設備',
    subcategory: 'バス設備',
    name: 'ナノバブル発生装置',
    manufacturer: 'Panasonic',
    modelNumber: 'NANOBUBBLE',
    unit: '台',
    isOption: true,
    description: '美容と健康に良いナノバブル発生装置',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'NB-001' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 150000 },
      { plan: 'HOURS', planId: 'HOURS', price: 150000 },
      { plan: 'LIFE', planId: 'LIFE', price: 120000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 100000 }
    ]
  },

  // スロップシンク
  {
    id: 'water-slop-sink',
    categoryId: 'water-sink',
    categoryName: 'スロップシンク',
    subcategory: '掃除用流し',
    name: 'スロップシンク',
    manufacturer: 'TOTO',
    modelNumber: 'SLOP-SINK',
    unit: '台',
    isOption: true,
    description: '掃除用流し台',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'SK106' },
      { id: 'v2', color: 'ステンレス', colorCode: '#C0C0C0', modelNumber: 'SK106-SUS' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 120000 },
      { plan: 'HOURS', planId: 'HOURS', price: 120000 },
      { plan: 'LIFE', planId: 'LIFE', price: 100000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 80000 }
    ]
  }
];