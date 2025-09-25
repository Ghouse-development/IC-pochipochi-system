// インテリア（内装）製品データ - 水廻り項目を除外した版
import type { Product } from '../types/product';

export const interiorProductsComplete: Product[] = [
  // ===== 床材（フローリング） =====

  // リアージュ
  {
    id: 'int-floor-liarge',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'リアージュ',
    manufacturer: 'Panasonic',
    modelNumber: 'LIARGE',
    unit: '㎡',
    isOption: false,
    description: '高品質な複合フローリング',
    variants: [
      { id: 'v1', color: 'オーク調ペールアンバー', colorCode: '#E6C2A6', modelNumber: 'XY-4101PA' },
      { id: 'v2', color: 'オーク調アンバー', colorCode: '#D4A574', modelNumber: 'XY-4101AM' },
      { id: 'v3', color: 'オーク調ダーク', colorCode: '#8B5A2B', modelNumber: 'XY-4101DK' },
      { id: 'v4', color: 'ウォールナット調', colorCode: '#704214', modelNumber: 'XY-4102WN' },
      { id: 'v5', color: 'チェリー調', colorCode: '#A0522D', modelNumber: 'XY-4103CH' },
      { id: 'v6', color: 'メープル調', colorCode: '#F5DEB3', modelNumber: 'XY-4104MP' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ベリティス
  {
    id: 'int-floor-veritis',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ベリティス',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS',
    unit: '㎡',
    isOption: true,
    description: 'プレミアムフローリング',
    variants: [
      { id: 'v1', color: 'チェリー調ナチュラル', colorCode: '#DEB887', modelNumber: 'KECL4101N' },
      { id: 'v2', color: 'チェリー調ダーク', colorCode: '#A0522D', modelNumber: 'KECL4101D' },
      { id: 'v3', color: 'ウォールナット調ナチュラル', colorCode: '#8B7355', modelNumber: 'KEWL4201N' },
      { id: 'v4', color: 'ウォールナット調ダーク', colorCode: '#5D4037', modelNumber: 'KEWL4201D' },
      { id: 'v5', color: 'オーク調ナチュラル', colorCode: '#DEB887', modelNumber: 'KEOL4301N' },
      { id: 'v6', color: 'オーク調ミディアム', colorCode: '#CD853F', modelNumber: 'KEOL4301M' },
      { id: 'v7', color: 'オーク調ダーク', colorCode: '#8B4513', modelNumber: 'KEOL4301D' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 8000 },
      { plan: 'HOURS', planId: 'HOURS', price: 8000 },
      { plan: 'LIFE', planId: 'LIFE', price: 8000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ライブナチュラルプレミアム
  {
    id: 'int-floor-live-natural-premium',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ライブナチュラルプレミアム',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'LIVE-NATURAL-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: '天然木の質感を活かした高級フローリング',
    variants: [
      { id: 'v1', color: 'オーク', colorCode: '#C8A882', modelNumber: 'LNP-OAK01' },
      { id: 'v2', color: 'ウォールナット', colorCode: '#5D4037', modelNumber: 'LNP-WAL01' },
      { id: 'v3', color: 'メープル', colorCode: '#E5C29F', modelNumber: 'LNP-MAP01' },
      { id: 'v4', color: 'チェリー', colorCode: '#A0522D', modelNumber: 'LNP-CHE01' },
      { id: 'v5', color: 'アッシュ', colorCode: '#D4C5B9', modelNumber: 'LNP-ASH01' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 8000 }
    ]
  },

  // ===== 壁材（クロス） =====

  // リザーブ
  {
    id: 'int-wall-reserve',
    categoryId: 'interior-wall',
    categoryName: '壁材',
    subcategory: 'クロス',
    name: 'リザーブ',
    manufacturer: 'サンゲツ',
    modelNumber: 'RESERVE',
    unit: '㎡',
    isOption: false,
    description: '高耐久・高品質なビニルクロス',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'RE-51001' },
      { id: 'v2', color: 'ナチュラル', colorCode: '#F5F5DC', modelNumber: 'RE-51002' },
      { id: 'v3', color: 'グレー', colorCode: '#D3D3D3', modelNumber: 'RE-51003' },
      { id: 'v4', color: 'ベージュ', colorCode: '#F5DEB3', modelNumber: 'RE-51004' },
      { id: 'v5', color: 'ライトブルー', colorCode: '#E6F3FF', modelNumber: 'RE-51005' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // フェイス
  {
    id: 'int-wall-faith',
    categoryId: 'interior-wall',
    categoryName: '壁材',
    subcategory: 'クロス',
    name: 'フェイス',
    manufacturer: 'サンゲツ',
    modelNumber: 'FAITH',
    unit: '㎡',
    isOption: true,
    description: 'デザイン性の高いプレミアムクロス',
    variants: [
      { id: 'v1', color: 'パターン001', colorCode: '#F5F5F5', modelNumber: 'TH-30001' },
      { id: 'v2', color: 'パターン002', colorCode: '#E8E8E8', modelNumber: 'TH-30002' },
      { id: 'v3', color: 'パターン003', colorCode: '#DCDCDC', modelNumber: 'TH-30003' },
      { id: 'v4', color: 'パターン004', colorCode: '#F0F8FF', modelNumber: 'TH-30004' },
      { id: 'v5', color: 'パターン005', colorCode: '#FFF8DC', modelNumber: 'TH-30005' },
      { id: 'v6', color: 'パターン006', colorCode: '#F5F5DC', modelNumber: 'TH-30006' },
      { id: 'v7', color: 'パターン007', colorCode: '#FFFACD', modelNumber: 'TH-30007' },
      { id: 'v8', color: 'パターン008', colorCode: '#F0FFF0', modelNumber: 'TH-30008' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 3000 },
      { plan: 'HOURS', planId: 'HOURS', price: 3000 },
      { plan: 'LIFE', planId: 'LIFE', price: 3000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 建具（室内ドア） =====

  // ハピアベイシス
  {
    id: 'int-door-hapia-basic',
    categoryId: 'interior-door',
    categoryName: '建具',
    subcategory: '室内ドア',
    name: 'ハピアベイシス',
    manufacturer: '大建工業',
    modelNumber: 'HAPIA-BASIC',
    unit: '箇所',
    isOption: false,
    description: 'シンプルで機能的な室内ドア',
    variants: [
      { id: 'v1', color: 'ネオホワイト', colorCode: '#FAFAFA', modelNumber: 'HB-NW' },
      { id: 'v2', color: 'ライトオーカー', colorCode: '#DEB887', modelNumber: 'HB-LO' },
      { id: 'v3', color: 'ティーブラウン', colorCode: '#8B4513', modelNumber: 'HB-TB' },
      { id: 'v4', color: 'ダルブラウン', colorCode: '#654321', modelNumber: 'HB-DB' },
      { id: 'v5', color: 'アッシュグレー', colorCode: '#B2BEB5', modelNumber: 'HB-AG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ベリティスドア
  {
    id: 'int-door-veritis',
    categoryId: 'interior-door',
    categoryName: '建具',
    subcategory: '室内ドア',
    name: 'ベリティス',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-DOOR',
    unit: '箇所',
    isOption: true,
    description: '高品質な室内ドア',
    variants: [
      { id: 'v1', color: 'ソフトホワイト', colorCode: '#F8F8F8', modelNumber: 'VD-SW' },
      { id: 'v2', color: 'ソフトオーク', colorCode: '#D2B48C', modelNumber: 'VD-SO' },
      { id: 'v3', color: 'ソフトウォールナット', colorCode: '#704214', modelNumber: 'VD-SWN' },
      { id: 'v4', color: 'ソフトグレー', colorCode: '#A9A9A9', modelNumber: 'VD-SG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // ===== 階段 =====

  // 木製階段
  {
    id: 'int-stairs-wood',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '木製階段',
    name: '木製階段',
    manufacturer: 'Gハウス',
    modelNumber: 'WOOD-STAIRS',
    unit: '式',
    isOption: false,
    description: '標準的な木製階段',
    variants: [
      { id: 'v1', color: 'ナチュラル', colorCode: '#DEB887', modelNumber: 'WS-NAT' },
      { id: 'v2', color: 'ブラウン', colorCode: '#8B4513', modelNumber: 'WS-BR' },
      { id: 'v3', color: 'ダークブラウン', colorCode: '#654321', modelNumber: 'WS-DB' },
      { id: 'v4', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'WS-WH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 鉄骨階段
  {
    id: 'int-stairs-steel',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '鉄骨階段',
    name: '鉄骨階段',
    manufacturer: 'Gハウス',
    modelNumber: 'STEEL-STAIRS',
    unit: '式',
    isOption: true,
    description: 'モダンな鉄骨階段',
    variants: [
      { id: 'v1', color: 'ブラック', colorCode: '#000000', modelNumber: 'SS-BK' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'SS-WH' },
      { id: 'v3', color: 'グレー', colorCode: '#808080', modelNumber: 'SS-GR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 300000 },
      { plan: 'HOURS', planId: 'HOURS', price: 300000 },
      { plan: 'LIFE', planId: 'LIFE', price: 280000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 250000 }
    ]
  },

  // ===== 収納 =====

  // ベリティス クローゼット
  {
    id: 'int-storage-veritis-closet',
    categoryId: 'interior-storage',
    categoryName: '収納',
    subcategory: 'クローゼット',
    name: 'ベリティス クローゼット',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-CLOSET',
    unit: '箇所',
    isOption: true,
    description: '機能的で美しい収納システム',
    variants: [
      { id: 'v1', color: 'ソフトホワイト', colorCode: '#F8F8F8', modelNumber: 'VC-SW' },
      { id: 'v2', color: 'ソフトオーク', colorCode: '#D2B48C', modelNumber: 'VC-SO' },
      { id: 'v3', color: 'ソフトウォールナット', colorCode: '#704214', modelNumber: 'VC-SWN' },
      { id: 'v4', color: 'ソフトグレー', colorCode: '#A9A9A9', modelNumber: 'VC-SG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // ウォークインクローゼット
  {
    id: 'int-storage-walkin-closet',
    categoryId: 'interior-storage',
    categoryName: '収納',
    subcategory: 'ウォークインクローゼット',
    name: 'ウォークインクローゼット',
    manufacturer: 'Gハウス',
    modelNumber: 'WALKIN-CLOSET',
    unit: '箇所',
    isOption: true,
    description: 'ゆとりのあるウォークイン収納',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'WIC-WH' },
      { id: 'v2', color: 'ナチュラル', colorCode: '#F5F5DC', modelNumber: 'WIC-NAT' },
      { id: 'v3', color: 'ブラウン', colorCode: '#8B4513', modelNumber: 'WIC-BR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 80000 },
      { plan: 'HOURS', planId: 'HOURS', price: 80000 },
      { plan: 'LIFE', planId: 'LIFE', price: 70000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // ===== 天井材 =====

  // ハイクリンボード
  {
    id: 'int-ceiling-hyclean-board',
    categoryId: 'interior-ceiling',
    categoryName: '天井材',
    subcategory: '石膏ボード',
    name: 'ハイクリンボード',
    manufacturer: '吉野石膏',
    modelNumber: 'HYCLEAN-BOARD',
    unit: '㎡',
    isOption: false,
    description: '吸ホルムアルデヒド石膏ボード',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'HCB-W' },
      { id: 'v2', color: 'アイボリー', colorCode: '#FFFFF0', modelNumber: 'HCB-IV' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 勾配天井
  {
    id: 'int-ceiling-slope',
    categoryId: 'interior-ceiling',
    categoryName: '天井材',
    subcategory: '天井工事',
    name: '勾配天井工事',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SLOPE-CEILING',
    unit: '㎡',
    isOption: true,
    description: '開放感のある勾配天井',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'SC-WH' },
      { id: 'v2', color: 'ナチュラル', colorCode: '#F5F5DC', modelNumber: 'SC-NAT' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 10000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // ===== ニッチ =====

  // ニッチ L1
  {
    id: 'int-niche-l1',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: 'Lサイズ',
    name: 'ニッチ L1（W400×H400×D100）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-L1',
    unit: '箇所',
    isOption: true,
    description: 'Lサイズニッチ（W400×H400×D100）',
    variants: [
      { id: 'v1', color: 'タイル：ホワイト', colorCode: '#FFFFFF', modelNumber: 'NL1-TW' },
      { id: 'v2', color: 'タイル：グレー', colorCode: '#808080', modelNumber: 'NL1-TG' },
      { id: 'v3', color: 'タイル：ブラック', colorCode: '#000000', modelNumber: 'NL1-TB' },
      { id: 'v4', color: 'クロス：ホワイト', colorCode: '#FFFFFF', modelNumber: 'NL1-CW' },
      { id: 'v5', color: 'クロス：グレー', colorCode: '#D3D3D3', modelNumber: 'NL1-CG' },
      { id: 'v6', color: 'クロス：ベージュ', colorCode: '#F5DEB3', modelNumber: 'NL1-CB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 35000 },
      { plan: 'HOURS', planId: 'HOURS', price: 35000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 25000 }
    ]
  },

  // ニッチ M1
  {
    id: 'int-niche-m1',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: 'Mサイズ',
    name: 'ニッチ M1（W300×H300×D100）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-M1',
    unit: '箇所',
    isOption: true,
    description: 'Mサイズニッチ（W300×H300×D100）',
    variants: [
      { id: 'v1', color: 'タイル：ホワイト', colorCode: '#FFFFFF', modelNumber: 'NM1-TW' },
      { id: 'v2', color: 'タイル：グレー', colorCode: '#808080', modelNumber: 'NM1-TG' },
      { id: 'v3', color: 'タイル：ブラック', colorCode: '#000000', modelNumber: 'NM1-TB' },
      { id: 'v4', color: 'クロス：ホワイト', colorCode: '#FFFFFF', modelNumber: 'NM1-CW' },
      { id: 'v5', color: 'クロス：グレー', colorCode: '#D3D3D3', modelNumber: 'NM1-CG' },
      { id: 'v6', color: 'クロス：ベージュ', colorCode: '#F5DEB3', modelNumber: 'NM1-CB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  }
];