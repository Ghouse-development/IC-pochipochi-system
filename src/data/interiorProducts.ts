// インテリア（内装）製品データ - DETAIL スタイルブックより
import type { Product } from '../types/product';

export const interiorProducts: Product[] = [
  // ========== ダイニングテーブル ==========
  {
    id: 'int-dt-001',
    categoryId: 'dining-table',
    categoryName: '家具',
    subcategory: 'ダイニングテーブル',
    name: 'Gハウスオリジナル ダイニングテーブル',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-DT-001',
    unit: 'piece',
    isOption: true,
    description: 'メラミン化粧板天板、スチール脚、コンセント付き',
    variants: [
      { id: 'v1', color: 'NTナチュラル×スクエア・ブラック', images: [] },
      { id: 'v2', color: 'BRブラウン×スクエア・ブラック', images: [] },
      { id: 'v3', color: 'DRダーク×スクエア・ブラック', images: [] },
      { id: 'v4', color: 'DUダストグレー×スクエア・ホワイト', images: [] },
      { id: 'v5', color: 'KRカブリード×ラウンド・ブラック', images: [] },
      { id: 'v6', color: 'FMファインモルタル×ラウンド・ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 130000 },
      { plan: 'HOURS', price: 140000 }
    ]
  },

  // ========== フローリング ==========
  {
    id: 'int-floor-001',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'ライブナチュラルMSX',
    name: 'ブラックチェリー',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'MSX-BCH',
    unit: 'sqm',
    isOption: false,
    description: '突き板フローリング、マット塗装',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-floor-002',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'ライブナチュラルMSX',
    name: 'ハードメイプル',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'MSX-HMP',
    unit: 'sqm',
    isOption: false,
    description: '突き板フローリング、マット塗装',
    variants: [
      { id: 'v1', color: 'ハードメイプル', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-floor-003',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'ライブナチュラルMSX',
    name: 'シカモア',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'MSX-SYC',
    unit: 'sqm',
    isOption: false,
    description: '突き板フローリング、マット塗装',
    variants: [
      { id: 'v1', color: 'シカモア', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-floor-004',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'ライブナチュラルMSX',
    name: 'ブラックウォルナット',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'MSX-BWN',
    unit: 'sqm',
    isOption: false,
    description: '突き板フローリング、マット塗装',
    variants: [
      { id: 'v1', color: 'ブラックウォルナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-floor-005',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'ライブナチュラルMSX',
    name: 'オーク',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'MSX-OAK',
    unit: 'sqm',
    isOption: false,
    description: '突き板フローリング、マット塗装',
    variants: [
      { id: 'v1', color: 'オーク', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ========== 室内ドア ==========
  {
    id: 'int-door-001',
    categoryId: 'interior-door',
    categoryName: '建具',
    subcategory: 'スタンダードレーベル',
    name: 'PAデザイン',
    manufacturer: 'LIXIL',
    modelNumber: 'PA',
    unit: 'piece',
    isOption: false,
    description: 'ハイドア標準（H2400）',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット', images: [] },
      { id: 'v2', color: 'ウォールナット', images: [] },
      { id: 'v3', color: 'チェリー', images: [] },
      { id: 'v4', color: 'グレージュアッシュ', images: [] },
      { id: 'v5', color: 'イタリアオーク', images: [] },
      { id: 'v6', color: 'メープル', images: [] },
      { id: 'v7', color: 'ホワイトオーク', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ', images: [] },
      { id: 'v9', color: 'しっくいホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-door-002',
    categoryId: 'interior-door',
    categoryName: '建具',
    subcategory: 'スタンダードレーベル',
    name: 'LAデザイン',
    manufacturer: 'LIXIL',
    modelNumber: 'LA',
    unit: 'piece',
    isOption: false,
    description: 'ハイドア標準（H2400）',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット', images: [] },
      { id: 'v2', color: 'ウォールナット', images: [] },
      { id: 'v3', color: 'チェリー', images: [] },
      { id: 'v4', color: 'グレージュアッシュ', images: [] },
      { id: 'v5', color: 'イタリアオーク', images: [] },
      { id: 'v6', color: 'メープル', images: [] },
      { id: 'v7', color: 'ホワイトオーク', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ', images: [] },
      { id: 'v9', color: 'しっくいホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-door-003',
    categoryId: 'interior-door',
    categoryName: '建具',
    subcategory: 'スタンダードレーベル',
    name: 'TAデザイン',
    manufacturer: 'LIXIL',
    modelNumber: 'TA',
    unit: 'piece',
    isOption: false,
    description: 'ハイドア標準（H2400）',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット', images: [] },
      { id: 'v2', color: 'ウォールナット', images: [] },
      { id: 'v3', color: 'チェリー', images: [] },
      { id: 'v4', color: 'グレージュアッシュ', images: [] },
      { id: 'v5', color: 'イタリアオーク', images: [] },
      { id: 'v6', color: 'メープル', images: [] },
      { id: 'v7', color: 'ホワイトオーク', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ', images: [] },
      { id: 'v9', color: 'しっくいホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ========== 階段 ==========
  {
    id: 'int-stairs-001',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: '階段踏板/蹴込板',
    name: '階段セット',
    manufacturer: 'LIXIL',
    modelNumber: 'STAIRS-SET',
    unit: 'set',
    isOption: false,
    description: '踏板・蹴込板セット',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', images: [] },
      { id: 'v2', color: 'ソイルブラック', images: [] },
      { id: 'v3', color: 'パールグレー', images: [] },
      { id: 'v4', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-stairs-002',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: '階段手摺',
    name: '階段手摺セット',
    manufacturer: 'LIXIL',
    modelNumber: 'HANDRAIL-SET',
    unit: 'set',
    isOption: false,
    description: '階段手摺（壁付け）',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット', images: [] },
      { id: 'v2', color: 'ウォールナット', images: [] },
      { id: 'v3', color: 'チェリー', images: [] },
      { id: 'v4', color: 'グレージュアッシュ', images: [] },
      { id: 'v5', color: 'イタリアオーク', images: [] },
      { id: 'v6', color: 'メープル', images: [] },
      { id: 'v7', color: 'ホワイトオーク', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ', images: [] },
      { id: 'v9', color: 'しっくいホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ========== 収納 ==========
  {
    id: 'int-storage-001',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'クローゼット',
    name: '枕棚+PH',
    manufacturer: 'Panasonic',
    modelNumber: 'STORAGE-A',
    unit: 'piece',
    isOption: false,
    description: '標準：枕棚+パイプハンガー（各寝室1カ所、横幅2730迄）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-storage-002',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'クローゼット',
    name: '枕棚+PH（追加）',
    manufacturer: 'Panasonic',
    modelNumber: 'STORAGE-B',
    unit: 'piece',
    isOption: true,
    description: 'オプション：枕棚+パイプハンガー（追加分）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 }
    ]
  },
  {
    id: 'int-storage-003',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'システム収納',
    name: 'インテグレート可動棚',
    manufacturer: 'Panasonic',
    modelNumber: 'INTEGRATE-01',
    unit: 'set',
    isOption: true,
    description: '可動棚システム（W900×H2400）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'ライトナチュラル', images: [] },
      { id: 'v3', color: 'ダークブラウン', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 85000 },
      { plan: 'HOURS', price: 90000 }
    ]
  },

  // ========== 造作（ニッチ） ==========
  {
    id: 'int-niche-001',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: 'リモコンニッチ',
    name: 'リモコンニッチ パターンA',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-NICHE-A',
    unit: 'piece',
    isOption: false,
    description: '壁埋め込み型リモコンニッチ（W300×H400）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'アッシュウォールナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-niche-002',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: 'リモコンニッチ',
    name: 'リモコンニッチ パターンB',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-NICHE-B',
    unit: 'piece',
    isOption: false,
    description: '壁埋め込み型リモコンニッチ（W450×H400）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'アッシュウォールナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-niche-003',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '飾り棚ニッチ',
    name: '飾り棚ニッチ',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-NICHE-SHELF',
    unit: 'piece',
    isOption: true,
    description: '壁埋め込み型飾り棚（W600×H400）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'アッシュウォールナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 25000 },
      { plan: 'HOURS', price: 28000 }
    ]
  },

  // ========== 壁材（クロス） ==========
  {
    id: 'int-wall-001',
    categoryId: 'wallpaper',
    categoryName: '壁材',
    subcategory: 'ベースクロス',
    name: 'サンゲツ ベースクロス',
    manufacturer: 'サンゲツ',
    modelNumber: 'SP-2801',
    unit: 'sqm',
    isOption: false,
    description: '標準ベースクロス（全室標準）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-wall-002',
    categoryId: 'wallpaper',
    categoryName: '壁材',
    subcategory: 'アクセントクロス',
    name: 'サンゲツ厳選カタログ',
    manufacturer: 'サンゲツ',
    modelNumber: 'SANGETSU-SELECT',
    unit: 'sqm',
    isOption: false,
    description: '標準アクセントクロス（1室1面まで無料）',
    variants: [
      { id: 'v1', color: '厳選カタログから選択', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ========== アクセントタイル ==========
  {
    id: 'int-tile-001',
    categoryId: 'wallpaper',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'セメンティング',
    manufacturer: '名古屋モザイク',
    modelNumber: 'ORG-U7810',
    unit: 'sqm',
    isOption: true,
    description: '598×298×9mm角平',
    variants: [
      { id: 'v1', color: 'ホワイト系', images: [] },
      { id: 'v2', color: 'グレー系', images: [] },
      { id: 'v3', color: 'ブラウン系', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 32000 }
    ]
  },
  {
    id: 'int-tile-002',
    categoryId: 'wallpaper',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'モデネーゼ',
    manufacturer: '名古屋モザイク',
    modelNumber: 'XCV-U3200',
    unit: 'sqm',
    isOption: true,
    description: '600×298×10mm角平',
    variants: [
      { id: 'v1', color: 'ホワイト系', images: [] },
      { id: 'v2', color: 'グレー系', images: [] },
      { id: 'v3', color: 'ベージュ系', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 28000 },
      { plan: 'HOURS', price: 30000 }
    ]
  },
  {
    id: 'int-tile-003',
    categoryId: 'wallpaper',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'ラヴィータ',
    manufacturer: '名古屋モザイク',
    modelNumber: 'MSY-U9100',
    unit: 'sqm',
    isOption: true,
    description: '600×298×8mm角平',
    variants: [
      { id: 'v1', color: 'ホワイト系', images: [] },
      { id: 'v2', color: 'グレー系', images: [] },
      { id: 'v3', color: 'ブラウン系', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 24000 }
    ]
  },
  {
    id: 'int-tile-004',
    categoryId: 'wallpaper',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'ストーンベニア',
    manufacturer: 'ADVAN',
    modelNumber: 'SV-001',
    unit: 'sqm',
    isOption: true,
    description: '天然石薄板タイル',
    variants: [
      { id: 'v1', color: 'クォーツサイト', images: [] },
      { id: 'v2', color: 'スレート', images: [] },
      { id: 'v3', color: 'サンドストーン', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 45000 },
      { plan: 'HOURS', price: 48000 }
    ]
  },

  // ========== 電気設備 ==========
  {
    id: 'int-elec-001',
    categoryId: 'electrical',
    categoryName: '電気設備',
    subcategory: 'スイッチ/コンセント',
    name: 'コスモワイド21',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21',
    unit: 'piece',
    isOption: false,
    description: 'スクエアタイプ/ホワイト（標準）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-elec-002',
    categoryId: 'electrical',
    categoryName: '電気設備',
    subcategory: 'スイッチ/コンセント',
    name: 'アドバンスシリーズ',
    manufacturer: 'Panasonic',
    modelNumber: 'ADVANCE-21',
    unit: 'piece',
    isOption: true,
    description: 'デザインスイッチ',
    variants: [
      { id: 'v1', color: 'マットホワイト', images: [] },
      { id: 'v2', color: 'マットグレー', images: [] },
      { id: 'v3', color: 'マットブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 3000 },
      { plan: 'HOURS', price: 3000 }
    ]
  },
  {
    id: 'int-elec-003',
    categoryId: 'electrical',
    categoryName: '電気設備',
    subcategory: 'USB付コンセント',
    name: 'USB充電用コンセント',
    manufacturer: 'Panasonic',
    modelNumber: 'WTF14714W',
    unit: 'piece',
    isOption: true,
    description: 'USB Type-A×2口付きコンセント',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 8000 },
      { plan: 'HOURS', price: 8000 }
    ]
  },

  // ========== 照明器具 ==========
  {
    id: 'int-light-001',
    categoryId: 'lighting',
    categoryName: '照明',
    subcategory: 'ダウンライト',
    name: 'LEDダウンライト 60W相当',
    manufacturer: 'Panasonic',
    modelNumber: 'NNN61510W',
    unit: 'piece',
    isOption: false,
    description: '標準ダウンライト（昼白色）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-light-002',
    categoryId: 'lighting',
    categoryName: '照明',
    subcategory: 'ダウンライト',
    name: 'LEDダウンライト 調光タイプ',
    manufacturer: 'Panasonic',
    modelNumber: 'NNN61511W',
    unit: 'piece',
    isOption: true,
    description: '調光機能付きダウンライト',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 }
    ]
  },
  {
    id: 'int-light-003',
    categoryId: 'lighting',
    categoryName: '照明',
    subcategory: 'ペンダントライト',
    name: 'ペンダントライト',
    manufacturer: 'Panasonic',
    modelNumber: 'LGB15141BK',
    unit: 'piece',
    isOption: true,
    description: 'ダイニング用ペンダントライト',
    variants: [
      { id: 'v1', color: 'ブラック', images: [] },
      { id: 'v2', color: 'ホワイト', images: [] },
      { id: 'v3', color: 'ウッド調', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 25000 },
      { plan: 'HOURS', price: 28000 }
    ]
  },

  // ========== 換気システム ==========
  {
    id: 'int-vent-001',
    categoryId: 'ventilation',
    categoryName: '換気',
    subcategory: '換気システム',
    name: '第一種換気システム',
    manufacturer: 'Panasonic',
    modelNumber: 'FY-GPP024-W',
    unit: 'set',
    isOption: false,
    description: '熱交換ユニット、給気グリル、排気グリル',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-vent-002',
    categoryId: 'ventilation',
    categoryName: '換気',
    subcategory: '換気扇',
    name: '浴室換気暖房乾燥機',
    manufacturer: 'Panasonic',
    modelNumber: 'FY-13UGPS4D',
    unit: 'piece',
    isOption: true,
    description: '1室換気・暖房・乾燥・涼風',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 85000 },
      { plan: 'HOURS', price: 90000 }
    ]
  },

  // ========== エアコン ==========
  {
    id: 'int-ac-001',
    categoryId: 'aircon',
    categoryName: '空調',
    subcategory: 'エアコン',
    name: 'Eシリーズ 6畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S225ATES-W',
    unit: 'piece',
    isOption: true,
    description: '100V対応、施工費含む',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 110000 },
      { plan: 'HOURS', price: 110000 }
    ]
  },
  {
    id: 'int-ac-002',
    categoryId: 'aircon',
    categoryName: '空調',
    subcategory: 'エアコン',
    name: 'Eシリーズ 8畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S255ATES-W',
    unit: 'piece',
    isOption: true,
    description: '100V対応、施工費含む',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 130000 },
      { plan: 'HOURS', price: 130000 }
    ]
  },
  {
    id: 'int-ac-003',
    categoryId: 'aircon',
    categoryName: '空調',
    subcategory: 'エアコン',
    name: 'Eシリーズ 10畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S285ATES-W',
    unit: 'piece',
    isOption: true,
    description: '100V対応、施工費含む',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 150000 },
      { plan: 'HOURS', price: 150000 }
    ]
  },
  {
    id: 'int-ac-004',
    categoryId: 'aircon',
    categoryName: '空調',
    subcategory: 'エアコン',
    name: 'Eシリーズ 14畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S405ATEP-W',
    unit: 'piece',
    isOption: true,
    description: '200V対応、施工費含む',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 192000 },
      { plan: 'HOURS', price: 192000 }
    ]
  },
  {
    id: 'int-ac-005',
    categoryId: 'aircon',
    categoryName: '空調',
    subcategory: 'エアコン',
    name: 'Eシリーズ 18畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S565ATEP-W',
    unit: 'piece',
    isOption: true,
    description: '200V対応、施工費含む',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 240000 },
      { plan: 'HOURS', price: 240000 }
    ]
  },

  // ========== カーテン ==========
  {
    id: 'int-curtain-001',
    categoryId: 'curtain',
    categoryName: 'カーテン',
    subcategory: 'ドレープカーテン',
    name: '遮光カーテン',
    manufacturer: 'サンゲツ',
    modelNumber: 'SC-3351',
    unit: 'set',
    isOption: false,
    description: '標準遮光カーテン（寝室用）',
    variants: [
      { id: 'v1', color: 'アイボリー', images: [] },
      { id: 'v2', color: 'ベージュ', images: [] },
      { id: 'v3', color: 'グレー', images: [] },
      { id: 'v4', color: 'ブラウン', images: [] },
      { id: 'v5', color: 'ネイビー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-curtain-002',
    categoryId: 'curtain',
    categoryName: 'カーテン',
    subcategory: 'レースカーテン',
    name: 'ミラーレースカーテン',
    manufacturer: 'サンゲツ',
    modelNumber: 'SC-3851',
    unit: 'set',
    isOption: false,
    description: '標準レースカーテン（全室）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'オフホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ========== ブラインド ==========
  {
    id: 'int-blind-001',
    categoryId: 'blind',
    categoryName: 'ブラインド',
    subcategory: 'アルミブラインド',
    name: 'アルミブラインド 25mm',
    manufacturer: 'タチカワブラインド',
    modelNumber: 'SB-25',
    unit: 'set',
    isOption: true,
    description: 'スラット幅25mm',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'シルバー', images: [] },
      { id: 'v3', color: 'ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 16000 }
    ]
  },
  {
    id: 'int-blind-002',
    categoryId: 'blind',
    categoryName: 'ブラインド',
    subcategory: 'ウッドブラインド',
    name: 'ウッドブラインド 35mm',
    manufacturer: 'タチカワブラインド',
    modelNumber: 'WB-35',
    unit: 'set',
    isOption: true,
    description: 'スラット幅35mm',
    variants: [
      { id: 'v1', color: 'ナチュラル', images: [] },
      { id: 'v2', color: 'ダークブラウン', images: [] },
      { id: 'v3', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 35000 },
      { plan: 'HOURS', price: 38000 }
    ]
  },

  // ========== 造作家具 ==========
  {
    id: 'int-furniture-001',
    categoryId: 'furniture',
    categoryName: '造作家具',
    subcategory: 'TVボード',
    name: '造作TVボード',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-TV-001',
    unit: 'piece',
    isOption: true,
    description: 'W1800×D450×H400 壁掛け式',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'オーク', images: [] },
      { id: 'v3', color: 'ウォールナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 150000 },
      { plan: 'HOURS', price: 160000 }
    ]
  },
  {
    id: 'int-furniture-002',
    categoryId: 'furniture',
    categoryName: '造作家具',
    subcategory: 'カウンター',
    name: '造作カウンター',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-COUNTER-001',
    unit: 'piece',
    isOption: true,
    description: 'スタディカウンター W1800×D600',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'オーク', images: [] },
      { id: 'v3', color: 'ウォールナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 130000 }
    ]
  },

  // ========== 手摺 ==========
  {
    id: 'int-handrail-001',
    categoryId: 'handrail',
    categoryName: '手摺',
    subcategory: '室内手摺',
    name: '室内用手摺',
    manufacturer: 'TOTO',
    modelNumber: 'YHB601',
    unit: 'piece',
    isOption: true,
    description: 'I型手摺 L600mm',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'ライトウッド', images: [] },
      { id: 'v3', color: 'ダークウッド', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 13000 }
    ]
  },

  // ========== 室内物干し ==========
  {
    id: 'int-hanger-001',
    categoryId: 'hanger',
    categoryName: '物干し',
    subcategory: '室内物干し',
    name: 'ホスクリーン',
    manufacturer: '川口技研',
    modelNumber: 'SPC-W',
    unit: 'set',
    isOption: true,
    description: '天井付け室内物干し（2本1組）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 16000 }
    ]
  },
  {
    id: 'int-hanger-002',
    categoryId: 'hanger',
    categoryName: '物干し',
    subcategory: '室内物干し',
    name: 'ホシ姫サマ',
    manufacturer: 'Panasonic',
    modelNumber: 'CWFE12CM',
    unit: 'piece',
    isOption: true,
    description: '電動式室内物干しユニット',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 85000 },
      { plan: 'HOURS', price: 90000 }
    ]
  }
];