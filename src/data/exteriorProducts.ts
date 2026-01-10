// エクステリア（外装）製品データ - FACADE Style Book
// 色バリアント統合版 - 1製品 = 複数の色バリアント
import type { Product } from '../types/product';

export const exteriorProducts: Product[] = [
  // ===== 外壁 - ニチハ モナビストーンV =====
  {
    id: 'ext-wall-monabistone-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'モナビストーンV',
    name: 'モナビストーンV',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFA52xxFK/GK/TK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'フローMGグレー', colorCode: 'フローMGグレー', images: [] },
      { id: 'v2', color: 'フローMGブラック', colorCode: 'フローMGブラック', images: [] },
      { id: 'v3', color: 'フローMGクリアホワイト', colorCode: 'フローMGクリアホワイト', images: [] },
      { id: 'v4', color: 'フローMGホワイト', colorCode: 'フローMGホワイト', images: [] },
      { id: 'v5', color: 'フローMGクリーム', colorCode: 'フローMGクリーム', images: [] },
      { id: 'v6', color: 'フローMGネイビー', colorCode: 'フローMGネイビー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ シャルムロックV =====
  {
    id: 'ext-wall-sharm-rock-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'シャルムロックV',
    name: 'シャルムロックV',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFA28xxFK/CK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'コンティMGホワイト', colorCode: 'EFA2851FK', images: [] },
      { id: 'v2', color: 'コンティMGアッシュ', colorCode: 'EFA2852FK', images: [] },
      { id: 'v3', color: 'コンティMGアイボリー', colorCode: 'EFA2853FK', images: [] },
      { id: 'v4', color: 'コンティMGブラウン', colorCode: 'EFA2854FK', images: [] },
      { id: 'v5', color: 'コンティMGグレー', colorCode: 'EFA2855FK', images: [] },
      { id: 'v6', color: 'コンティMGチャコール', colorCode: 'EFA2856CK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ リーガストーン調V =====
  {
    id: 'ext-wall-reega-stone',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'リーガストーン調V',
    name: 'リーガストーン調V',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFX34xxCK/NK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'ランダMGプラチナ', colorCode: 'EFX3455CK', images: [] },
      { id: 'v2', color: 'ランダMGブラック', colorCode: 'EFX3457CK', images: [] },
      { id: 'v3', color: 'ランダMGラテ', colorCode: 'EFX3451NK', images: [] },
      { id: 'v4', color: 'ランダMGトリュフ', colorCode: 'EFX3452RK', images: [] },
      { id: 'v5', color: 'ランダMGパウダー', colorCode: 'EFX3453CK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ ディスタシェイドV =====
  {
    id: 'ext-wall-dista-shade-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ディスタシェイドV',
    name: 'ディスタシェイドV',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFA54xxYK/LK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'ストレムMGネイビー', colorCode: 'EFA5456YK', images: [] },
      { id: 'v2', color: 'ストレムMGホワイト', colorCode: 'EFA5451YK', images: [] },
      { id: 'v3', color: 'ストレムMGクリーム', colorCode: 'EFA5452YK', images: [] },
      { id: 'v4', color: 'ストレムMGブラウン', colorCode: 'EFA5453YK', images: [] },
      { id: 'v5', color: 'ストレムMGセピア', colorCode: 'EFA5454LK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ ボルブストーン調V =====
  {
    id: 'ext-wall-bolb-stone',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ボルブストーン調V',
    name: 'ボルブストーン調V',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFX31xxFK/NK/LK/RK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'エアルMGスノー', colorCode: 'EFX3151FK', images: [] },
      { id: 'v2', color: 'エアルMGラテ', colorCode: 'EFX3152FK', images: [] },
      { id: 'v3', color: 'エアルMGトリュフ', colorCode: 'EFX3153LK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ スプリットストーン調V =====
  {
    id: 'ext-wall-split-stone-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'スプリットストーン調V',
    name: 'スプリットストーン調V',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFX16xxNK/GK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'アブラMGクリーム', colorCode: 'EFX1651NK', images: [] },
      { id: 'v2', color: 'アブラMGワイン', colorCode: 'EFX1652NK', images: [] },
      { id: 'v3', color: 'アブラMGキャロット', colorCode: 'EFX1653NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ コルモストーン調V =====
  {
    id: 'ext-wall-colmo-stone-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コルモストーン調V',
    name: 'コルモストーン調V',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFX33xxNK/CK/FK/RK/AK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'フォンドMGダーク', colorCode: 'EFX3355NK', images: [] },
      { id: 'v2', color: 'フォンドMGシュガー', colorCode: 'EFX3351NK', images: [] },
      { id: 'v3', color: 'フォンドMGリーフ', colorCode: 'EFX3352NK', images: [] },
      { id: 'v4', color: 'フォンドMGショコラ', colorCode: 'EFX3353RK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ コンクリート打ちっ放し16V =====
  {
    id: 'ext-wall-concrete-16v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コンクリート打ちっ放し16V',
    name: 'コンクリート打ちっ放し16V',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFA4351NK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'コンクリートMGライトグレー', colorCode: 'EFA4351NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
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
    materialType: '窯業系サイディング',
    modelNumber: 'EFA22xxYK/FK/LK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'スペリオMGネイビー', colorCode: 'EFA2258YK', images: [] },
      { id: 'v2', color: 'スペリオMGナチュラル', colorCode: 'EFA2251FK', images: [] },
      { id: 'v3', color: 'スペリオMGウォルナット', colorCode: 'EFA2256FK', images: [] },
      { id: 'v4', color: 'スペリオMGブラック', colorCode: 'EFA2255LK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ マイスターウッド調V =====
  {
    id: 'ext-wall-meister-wood-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'マイスターウッド調V',
    name: 'マイスターウッド調V',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EF93xxFK/GK/YK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'イデアルMGボルドー', colorCode: 'EF9355FK', images: [] },
      { id: 'v2', color: 'イデアルMGチャコール', colorCode: 'EF9356FK', images: [] },
      { id: 'v3', color: 'イデアルMGブラウン', colorCode: 'EF9357GK', images: [] },
      { id: 'v4', color: 'イデアルMGグレー', colorCode: 'EF9358YK', images: [] },
      { id: 'v5', color: 'イデアルMGグリーン', colorCode: 'EF9359YK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
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
    materialType: '窯業系サイディング',
    modelNumber: 'EF53xxC2K/JK/GK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'プラムMGバニラホワイトII', colorCode: 'EF5356C2K', images: [] },
      { id: 'v2', color: 'プラムMGアッシュII', colorCode: 'EF5357JK', images: [] },
      { id: 'v3', color: 'プラムMGクリームII', colorCode: 'EF5358JK', images: [] },
      { id: 'v4', color: 'プラムMGブラウンII', colorCode: 'EF5359JK', images: [] },
      { id: 'v5', color: 'プラムMGセピアII', colorCode: 'EF5362JK', images: [] },
      { id: 'v6', color: 'プラムMGウィニーホワイトII', colorCode: 'EF5363GK', images: [] },
      { id: 'v7', color: 'プラムMGシェルトグレーII', colorCode: 'EF5364GK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ アフェットV =====
  {
    id: 'ext-wall-affet-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'アフェットV',
    name: 'アフェットV',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFA53xxFK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'ブリジェMGセピア', colorCode: 'EFA5351FK', images: [] },
      { id: 'v2', color: 'ブリジェMGピアシルク', colorCode: 'EFA5353FK', images: [] },
      { id: 'v3', color: 'ブリジェMGウォームグレー', colorCode: 'EFA5354FK', images: [] },
      { id: 'v4', color: 'ブリジェMGシェルトグレー', colorCode: 'EFA5355FK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ ロックラインV =====
  {
    id: 'ext-wall-rockline-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ロックラインV',
    name: 'ロックラインV',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EF90xxGK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'プラムMGホワイトII', colorCode: 'EF9051GK', images: [] },
      { id: 'v2', color: 'プラムMGアイボリーII', colorCode: 'EF9052GK', images: [] },
      { id: 'v3', color: 'プラムMGアッシュII', colorCode: 'EF9053GK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ ナチュラルラインV =====
  {
    id: 'ext-wall-naturalline-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ナチュラルラインV',
    name: 'ナチュラルラインV',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFX37xxGK/TK',
    unit: 'sqm',
    isOption: false,
    description: '窯業系サイディング 16mm厚 モエンエクセラード16 Vシリーズ',
    variants: [
      { id: 'v1', color: 'プラムMGホワイトII', colorCode: 'EFX3751GK', images: [] },
      { id: 'v2', color: 'プラムMGアイボリーII', colorCode: 'EFX3752GK', images: [] },
      { id: 'v3', color: 'プラムMGチャコールII', colorCode: 'EFX3754TK', images: [] },
      { id: 'v4', color: 'プラムMGブルー', colorCode: 'EFX3757GK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外壁 - KMEW ルボン プレミアム Fuge =====
  {
    id: 'ext-wall-lubon-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ルボン プレミアム',
    name: 'ルボン プレミアム',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'ELS4xxP',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 シーリング目地に比べて継ぎ目が目立たない',
    variants: [
      { id: 'v1', color: 'レセピMGチタンホワイト30', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'レセピMGチタンチャコール30', colorCode: 'チャコール', images: [] },
      { id: 'v3', color: 'レセピMGネロ30', colorCode: 'ブラック', images: [] },
      { id: 'v4', color: 'レセピMGネイビー30', colorCode: 'ネイビー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ スティルランバー プレミアム Fu-ge =====
  {
    id: 'ext-wall-stillumber-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'スティルランバー プレミアム',
    name: 'スティルランバー プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELS61xY',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
    variants: [
      { id: 'v1', color: 'スティルMGアッシュホワイト30', colorCode: 'ELS611Y', images: [] },
      { id: 'v2', color: 'スティルMGブラウン30', colorCode: 'ELS612Y', images: [] },
      { id: 'v3', color: 'スティルMGアッシュブラウン30', colorCode: 'ELS613Y', images: [] },
      { id: 'v4', color: 'スティルMGブラック30', colorCode: 'ELS614Y', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ ミルシュタイン プレミアム Fu-ge =====
  {
    id: 'ext-wall-milstein-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ミルシュタイン プレミアム',
    name: 'ミルシュタイン プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELS49xP',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
    variants: [
      { id: 'v1', color: 'ミルトMGホワイト30', colorCode: 'ELS491P', images: [] },
      { id: 'v2', color: 'ミルトMGブラック30', colorCode: 'ELS494P', images: [] },
      { id: 'v3', color: 'ミルトMGグレー30', colorCode: 'ELS495P', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ プリレート プレミアム Fu-ge =====
  {
    id: 'ext-wall-prirate-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'プリレート プレミアム',
    name: 'プリレート プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELS42xP',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
    variants: [
      { id: 'v1', color: 'クアラMGホワイト30', colorCode: 'ELS421P', images: [] },
      { id: 'v2', color: 'クアラMGアイボリー30', colorCode: 'ELS422P', images: [] },
      { id: 'v3', color: 'クアラMGオーカー30', colorCode: 'ELS423P', images: [] },
      { id: 'v4', color: 'クアラMGネロ30', colorCode: 'ELS426P', images: [] },
      { id: 'v5', color: 'クアラMGネイビー30', colorCode: 'ELS427P', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ シントア プレミアム Fu-ge =====
  {
    id: 'ext-wall-sintoa-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'シントア プレミアム',
    name: 'シントア プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELS46xF',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
    variants: [
      { id: 'v1', color: 'シントアMGホワイト30', colorCode: 'ELS461F', images: [] },
      { id: 'v2', color: 'シントアMGオフホワイト30', colorCode: 'ELS462F', images: [] },
      { id: 'v3', color: 'シントアMGネイビー30', colorCode: 'ELS463F', images: [] },
      { id: 'v4', color: 'シントアMGライトグレー30', colorCode: 'ELS465F', images: [] },
      { id: 'v5', color: 'シントアMGミロリブルー30', colorCode: 'ELS466F', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ スプーモ プレミアム Fu-ge =====
  {
    id: 'ext-wall-spumo-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'スプーモ プレミアム',
    name: 'スプーモ プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELS44xE/P',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない 四方合いじゃくり',
    variants: [
      { id: 'v1', color: 'プリミエMGホワイト30', colorCode: 'ELS446E', images: [] },
      { id: 'v2', color: 'ラフラMGブラック30', colorCode: 'ELS448E', images: [] },
      { id: 'v3', color: 'ラフラMGグレー30', colorCode: 'ELS449E', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ キャスティングウッド プレミアム Fu-ge =====
  {
    id: 'ext-wall-castingwood-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'キャスティングウッド プレミアム',
    name: 'キャスティングウッド プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG24xxNK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'ダークグリーンMG30', colorCode: 'ELG2412NK', images: [] },
      { id: 'v2', color: 'ミディアムブラウンMG30', colorCode: 'ELG241NK', images: [] },
      { id: 'v3', color: 'ホワイトアッシュMG30', colorCode: 'ELG245NK', images: [] },
      { id: 'v4', color: 'ホワイトキャメルMG30', colorCode: 'ELG246NK', images: [] },
      { id: 'v5', color: 'スモークシルバーMG30', colorCode: 'ELG247NK', images: [] },
      { id: 'v6', color: 'ナチュラルオーカーMG30', colorCode: 'ELG248NK', images: [] },
      { id: 'v7', color: 'ノースグリーンMG30', colorCode: 'ELG249NK', images: [] },
      { id: 'v8', color: 'ダークブラウンMG30', colorCode: 'ELG2410NK', images: [] },
      { id: 'v9', color: 'カーボンブラックMG30', colorCode: 'ELG2411NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ ヴィンテージウッド プレミアム Fu-ge =====
  {
    id: 'ext-wall-vintagewood-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ヴィンテージウッド プレミアム',
    name: 'ヴィンテージウッド プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG76xFK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'スキムドMGダルブラウン30', colorCode: 'ELG762FK', images: [] },
      { id: 'v2', color: 'スキムドMGレッド30', colorCode: 'ELG765FK', images: [] },
      { id: 'v3', color: 'スキムドMGアッシュ30', colorCode: 'ELG766FK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ コンクリート打ちっ放し16 プレミアム Fu-ge =====
  {
    id: 'ext-wall-concrete-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コンクリート打ちっ放し16 プレミアム',
    name: 'コンクリート打ちっ放し16 プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG432NK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'MGグレー30', colorCode: 'ELG432NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ シャルムロック プレミアム Fu-ge =====
  {
    id: 'ext-wall-sharmrock-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'シャルムロック プレミアム',
    name: 'シャルムロック プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG28xFK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない',
    variants: [
      { id: 'v1', color: 'マハビMGルビー30', colorCode: 'ELG283FK', images: [] },
      { id: 'v2', color: 'マハビMGブラウン30', colorCode: 'ELG284FK', images: [] },
      { id: 'v3', color: 'マハビMGスモーク30', colorCode: 'ELG285FK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ コルモストーン調 プレミアム Fu-ge =====
  {
    id: 'ext-wall-colmostone-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'コルモストーン調 プレミアム',
    name: 'コルモストーン調 プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG33xNK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない',
    variants: [
      { id: 'v1', color: 'フォンドMGアッシュグレー30', colorCode: 'ELG3310NK', images: [] },
      { id: 'v2', color: 'フォンドMGネイビー30', colorCode: 'ELG3311NK', images: [] },
      { id: 'v3', color: 'フォンドMGホワイト30', colorCode: 'ELG331NK', images: [] },
      { id: 'v4', color: 'フォンドMGブラウン30', colorCode: 'ELG333NK', images: [] },
      { id: 'v5', color: 'フォンドMGアイボリー30', colorCode: 'ELG336NK', images: [] },
      { id: 'v6', color: 'フォンドMGダークブラウン30', colorCode: 'ELG338NK', images: [] },
      { id: 'v7', color: 'フォンドMGブラック30', colorCode: 'ELG339NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ リーガストーン調 プレミアム Fu-ge =====
  {
    id: 'ext-wall-reegastone-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'リーガストーン調 プレミアム',
    name: 'リーガストーン調 プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG34xNK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない',
    variants: [
      { id: 'v1', color: 'ランダMGチャコール30', colorCode: 'ELG342NK', images: [] },
      { id: 'v2', color: 'ランダMGホワイト30', colorCode: 'ELG344NK', images: [] },
      { id: 'v3', color: 'ランダMGグレージュ30', colorCode: 'ELG346NK', images: [] },
      { id: 'v4', color: 'ランダMGネロ30', colorCode: 'ELG347NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ リントロック調 プレミアム Fu-ge =====
  {
    id: 'ext-wall-lintrock-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'リントロック調 プレミアム',
    name: 'リントロック調 プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG18xNK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM シーリング目地に比べて継ぎ目が目立たない',
    variants: [
      { id: 'v1', color: 'ラクルMGホワイト30', colorCode: 'ELG181NK', images: [] },
      { id: 'v2', color: 'ラクルMGベージュ30', colorCode: 'ELG182NK', images: [] },
      { id: 'v3', color: 'ラクルMGブラウン30', colorCode: 'ELG183NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ マグート プレミアム Fu-ge =====
  {
    id: 'ext-wall-magut-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'マグート プレミアム',
    name: 'マグート プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG72xNK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'ルフィネMGクリアホワイト30', colorCode: 'ELG721NK', images: [] },
      { id: 'v2', color: 'ルフィネMGグレー30', colorCode: 'ELG723NK', images: [] },
      { id: 'v3', color: 'ルフィネMGブラック30', colorCode: 'ELG724NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ フラーグ プレミアム Fu-ge =====
  {
    id: 'ext-wall-frag-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'フラーグ プレミアム',
    name: 'フラーグ プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG94xYK/FK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'プレスMGグレー30', colorCode: 'ELG946YK', images: [] },
      { id: 'v2', color: 'プレスMGネイビー30', colorCode: 'ELG947YK', images: [] },
      { id: 'v3', color: 'プレスMGホワイト30', colorCode: 'ELG941FK', images: [] },
      { id: 'v4', color: 'プレスMGアイボリー30', colorCode: 'ELG942FK', images: [] },
      { id: 'v5', color: 'プレスMGビター30', colorCode: 'ELG945FK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ フィーノ調 プレミアム Fu-ge =====
  {
    id: 'ext-wall-fino-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'フィーノ調 プレミアム',
    name: 'フィーノ調 プレミアム',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'ELG38xFK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'フロストMGホワイト30', colorCode: 'ELG386FK', images: [] },
      { id: 'v2', color: 'リベルMGクリアホワイト30', colorCode: 'ELG3811FK', images: [] },
      { id: 'v3', color: 'パティMGホワイト30', colorCode: 'ELG3812FK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ フラットウォール Fu-ge =====
  {
    id: 'ext-wall-flatwall-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'フラットウォール',
    name: 'フラットウォール',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EPS24xNK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'アグレアMGピュアホワイト', colorCode: 'EPS241NK', images: [] },
      { id: 'v2', color: 'プリミエMGホワイト', colorCode: 'EPS242NK', images: [] },
      { id: 'v3', color: 'アグレアMGベージュ', colorCode: 'EPS243NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ ルビドフラット Fu-ge (NEW) =====
  {
    id: 'ext-wall-rubidflat-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ルビドフラット',
    name: 'ルビドフラット',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EQG4xxEK/NK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'ルビドMGピュアホワイト', colorCode: 'EQG415EK', images: [] },
      { id: 'v2', color: 'ルビドMGオリアンホワイト', colorCode: 'EQG416EK', images: [] },
      { id: 'v3', color: 'ルビドMGパステルグレー', colorCode: 'EQG417EK', images: [] },
      { id: 'v4', color: 'ルビドMGパールグレー', colorCode: 'EQG418EK', images: [] },
      { id: 'v5', color: 'ルビドMGエアホワイト', colorCode: 'EQG419NK', images: [] },
      { id: 'v6', color: 'ルビドMGエアグレー', colorCode: 'EQG4110NK', images: [] },
      { id: 'v7', color: 'ルビドMGエアブラウン', colorCode: 'EQG4111NK', images: [] },
      { id: 'v8', color: 'ルビドMGエアブラック', colorCode: 'EQG4112NK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ トリル Fu-ge =====
  {
    id: 'ext-wall-trill-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'トリル',
    name: 'トリル',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EPA32xGK/TK',
    unit: 'sqm',
    isOption: true,
    description: 'Fu-ge PREMIUM 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'リベルMGクリアホワイトII', colorCode: 'EPA321GK', images: [] },
      { id: 'v2', color: 'プリミエMGホワイト', colorCode: 'EPA322GK', images: [] },
      { id: 'v3', color: 'カルモMGシルバー', colorCode: 'EPA324GK', images: [] },
      { id: 'v4', color: 'フレスコMGネイビー', colorCode: 'EPA3213GK', images: [] },
      { id: 'v5', color: 'ノーマMGチャコール', colorCode: 'EPA326TK', images: [] },
      { id: 'v6', color: 'フィグMGレッド', colorCode: 'EPA329GK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ COOL イルミオ =====
  {
    id: 'ext-wall-cool-illuminio',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'COOL イルミオ',
    name: 'COOL イルミオ',
    manufacturer: 'ニチハ',
    materialType: '窯業系サイディング',
    modelNumber: 'EFM5xxP/E・EJM5xxE',
    unit: 'sqm',
    isOption: true,
    description: 'COOL 遮熱性能付き外壁 芋目地・馬目地を選択可',
    variants: [
      { id: 'v1', color: 'メレホワイト', colorCode: 'EFM508P', images: [] },
      { id: 'v2', color: 'メレグレー', colorCode: 'EFM509P', images: [] },
      { id: 'v3', color: 'メレブラウン', colorCode: 'EFM510P', images: [] },
      { id: 'v4', color: 'メレブラック', colorCode: 'EFM511P', images: [] },
      { id: 'v5', color: 'イルミオホワイト', colorCode: 'EFM501E', images: [] },
      { id: 'v6', color: 'イルミオアイボリー', colorCode: 'EFM502E', images: [] },
      { id: 'v7', color: 'イルミオライトグレー', colorCode: 'EFM503E', images: [] },
      { id: 'v8', color: 'グラニットホワイト', colorCode: 'EJM501E', images: [] },
      { id: 'v9', color: 'ウェーブブラウン', colorCode: 'EJM502E', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW ハーモレイド =====
  {
    id: 'ext-wall-harmolade',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ハーモレイド',
    name: 'ハーモレイド',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'NH520x',
    unit: 'sqm',
    isOption: true,
    description: 'ネオロック・光セラ18 18mm厚 横張のみ',
    variants: [
      { id: 'v1', color: 'QFマーチ チタン ホワイト', colorCode: 'NH5201', images: [] },
      { id: 'v2', color: 'QFコンフォート チタン ベージュ', colorCode: 'NH5202', images: [] },
      { id: 'v3', color: 'QFコンフォート チタン ブラウン', colorCode: 'NH5203', images: [] },
      { id: 'v4', color: 'QFブリュエ チタン ブラック', colorCode: 'NH5204', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW モダンスリット18 =====
  {
    id: 'ext-wall-modernslit18',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'モダンスリット18',
    name: 'モダンスリット18',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'NH544x',
    unit: 'sqm',
    isOption: true,
    description: 'ネオロック・光セラ18 18mm厚 横張のみ',
    variants: [
      { id: 'v1', color: 'QFシルク チタン ホワイト', colorCode: 'NH5441', images: [] },
      { id: 'v2', color: 'QFアトランティック チタン ブルー', colorCode: 'NH5445', images: [] },
      { id: 'v3', color: 'QFシルク チタン グレー', colorCode: 'NH5447', images: [] },
      { id: 'v4', color: 'QFダーククロースト チタン ブラウン', colorCode: 'NH5449', images: [] },
      { id: 'v5', color: 'QFチャコール チタン ブラック', colorCode: 'NH54410', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW レスティ =====
  {
    id: 'ext-wall-resty',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'レスティ',
    name: 'レスティ',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'NH523xU',
    unit: 'sqm',
    isOption: true,
    description: 'ネオロック・光セラ18 18mm厚 横張のみ',
    variants: [
      { id: 'v1', color: 'QFミルキー チタン ホワイト', colorCode: 'NH5231U', images: [] },
      { id: 'v2', color: 'QFアッシュ チタン ベージュ', colorCode: 'NH5232U', images: [] },
      { id: 'v3', color: 'QFマックス チタン ホワイト', colorCode: 'NH5234U', images: [] },
      { id: 'v4', color: 'QFダスキー チタン ブルー', colorCode: 'NH5235U', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW ニューインプレース18 =====
  {
    id: 'ext-wall-newimplace18',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ニューインプレース18',
    name: 'ニューインプレース18',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'NH564xA',
    unit: 'sqm',
    isOption: true,
    description: 'ネオロック・光セラ18 セラトピア 18mm厚',
    variants: [
      { id: 'v1', color: 'QFインプレース チタン ホワイト', colorCode: 'NH5641A', images: [] },
      { id: 'v2', color: 'QFインプレース チタン ブラウン', colorCode: 'NH5642A', images: [] },
      { id: 'v3', color: 'QFインプレース チタン グレー', colorCode: 'NH5643A', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW 木枠コンクリート調18 =====
  {
    id: 'ext-wall-kiwaku-concrete18',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '木枠コンクリート調18',
    name: '木枠コンクリート調18',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'NH576xA',
    unit: 'sqm',
    isOption: true,
    description: 'ネオロック・光セラ18 セラトピア 18mm厚 横張のみ',
    variants: [
      { id: 'v1', color: 'QF木枠 チタン ライトグレー', colorCode: 'NH5761A', images: [] },
      { id: 'v2', color: 'QF木枠 チタン ウォームグレー', colorCode: 'NH5762A', images: [] },
      { id: 'v3', color: 'QF木枠 チタン ミドルグレー', colorCode: 'NH5763A', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW フィエルテ =====
  {
    id: 'ext-wall-fierute',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'フィエルテ',
    name: 'フィエルテ',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'NH497xA',
    unit: 'sqm',
    isOption: true,
    description: 'FLAT DESIGN PANEL 横張のみ',
    variants: [
      { id: 'v1', color: 'QFフィエルテ チタン コンクリート', colorCode: 'NH4971A', images: [] },
      { id: 'v2', color: 'QFフィエルテ チタン アイロン', colorCode: 'NH4976A', images: [] },
      { id: 'v3', color: 'QFフィエルテ チタン リトスオヤ', colorCode: 'NH4978A', images: [] },
      { id: 'v4', color: 'QFフィエルテ チタン マーブル', colorCode: 'NH4975A', images: [] },
      { id: 'v5', color: 'QFフィエルテ チタン ダークコンクリート', colorCode: 'NH49711A', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW シンプルストライプ =====
  {
    id: 'ext-wall-simplestripe',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'シンプルストライプ',
    name: 'シンプルストライプ',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'NH588xU',
    unit: 'sqm',
    isOption: true,
    description: 'ネオロック・光セラ18 18mm厚 横張のみ',
    variants: [
      { id: 'v1', color: 'QFシルク チタン ホワイト', colorCode: 'NH5882U', images: [] },
      { id: 'v2', color: 'QFダスキー チタン グレー', colorCode: 'NH5883U', images: [] },
      { id: 'v3', color: 'QFアッシュ チタン グリーン', colorCode: 'NH5884U', images: [] },
      { id: 'v4', color: 'QFアトランティック チタン ブルー', colorCode: 'NH5885U', images: [] },
      { id: 'v5', color: 'QFチャコール チタン ブラック', colorCode: 'NH5886U', images: [] },
      { id: 'v6', color: 'QFマックス チタン ブラック', colorCode: 'NH5887U', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW シックイフラット =====
  {
    id: 'ext-wall-shikkuiflat',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'シックイフラット',
    name: 'シックイフラット',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'EH753xH',
    unit: 'sqm',
    isOption: true,
    description: 'エクセレージ・光セラ15 横張のみ',
    variants: [
      { id: 'v1', color: 'QFラント チタン ホワイト', colorCode: 'EH7531H', images: [] },
      { id: 'v2', color: 'QFゼレノ チタン グレージュ', colorCode: 'EH7532H', images: [] },
      { id: 'v3', color: 'QFラント チタン ダークグレー', colorCode: 'EH7533H', images: [] },
      { id: 'v4', color: 'QFゼレノ チタン ディープグレー', colorCode: 'EH7534H', images: [] },
      { id: 'v5', color: 'QFゼレノ チタン ブラウニーブラック', colorCode: 'EH7535H', images: [] },
      { id: 'v6', color: 'QFアルバ チタン ブラック', colorCode: 'EH7536H', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW カンタービレ =====
  {
    id: 'ext-wall-cantabile',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'カンタービレ',
    name: 'カンタービレ',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'NH592xA',
    unit: 'sqm',
    isOption: true,
    description: 'ネオロック・光セラ18 18mm厚',
    variants: [
      { id: 'v1', color: 'QFシルク チタン ホワイト', colorCode: 'NH5921A', images: [] },
      { id: 'v2', color: 'QFテンダー チタン ベージュ', colorCode: 'NH5922A', images: [] },
      { id: 'v3', color: 'QFシルク チタン グレー', colorCode: 'NH5923A', images: [] },
      { id: 'v4', color: 'QFミッド チタン グレー', colorCode: 'NH5924A', images: [] },
      { id: 'v5', color: 'QFダスキー チタン グレー', colorCode: 'NH5925A', images: [] },
      { id: 'v6', color: 'QFプリント チタン ブラック', colorCode: 'NH5926A', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KONOSHIMA アルテミュール =====
  {
    id: 'ext-wall-artemur',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'アルテミュール',
    name: 'アルテミュール',
    manufacturer: 'KONOSHIMA',
    materialType: '窯業系サイディング',
    modelNumber: 'ARTE-RCx-GC',
    unit: 'sqm',
    isOption: true,
    description: 'アルテミュール 木目調外壁',
    variants: [
      { id: 'v1', color: 'レッドシダーナチュラルGC', colorCode: '8.8YR 6.3/3.4', images: [] },
      { id: 'v2', color: 'レッドシダーエイジングGC', colorCode: '7.9YR 4.7/5.3', images: [] },
      { id: 'v3', color: 'オークナチュラルGC', colorCode: '8.9YR 7.2/3.9', images: [] },
      { id: 'v4', color: 'オークヴィンテージGC', colorCode: '8.5YR 6/0.5', images: [] },
      { id: 'v5', color: 'ウォルナットナチュラルGC', colorCode: '6.4YR 4.3/1.8', images: [] },
      { id: 'v6', color: 'ウォルナットダークGC', colorCode: '6.3YR 3.8/1.7', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - IG工業 SPビレクト =====
  {
    id: 'ext-wall-sp-birect',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'SPビレクト',
    name: 'SPビレクト',
    manufacturer: 'IG工業',
    materialType: 'ガルバリウム鋼板',
    modelNumber: 'SPI1-xxx',
    unit: 'sqm',
    isOption: true,
    description: '金属サイディング 変褪色・穴あき・赤さび10年保証 横張のみ採用可能 HOURS:アクセント面のみ標準（1色のみ）/LACIE:全面標準',
    variants: [
      { id: 'v1', color: 'Fマットブラック', colorCode: 'Fマットブラック', images: [] },
      { id: 'v2', color: 'Fネオホワイト', colorCode: 'Fネオホワイト', images: [] },
      { id: 'v3', color: 'Fモスグリーン', colorCode: 'Fモスグリーン', images: [] },
      { id: 'v4', color: 'マットブラック', colorCode: 'SPI1-301', images: [] },
      { id: 'v5', color: 'クールブラウン', colorCode: 'SPI1-383', images: [] },
      { id: 'v6', color: 'クールネイビー', colorCode: 'SPI1-384', images: [] },
      { id: 'v7', color: 'モスグリーン', colorCode: 'SPI1-394', images: [] },
      { id: 'v8', color: 'スマートガンメタ', colorCode: 'SPI1-305', images: [] },
      { id: 'v9', color: 'ダークグレー', colorCode: 'SPI1-315', images: [] },
      { id: 'v10', color: 'ライトアッシュ', colorCode: 'SPI1-318', images: [] },
      { id: 'v11', color: 'ネオホワイト', colorCode: 'SPI1-370', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 9500 },
      { plan: 'LIFE', price: 9500 }
    ]
  },

  // ===== 外壁 - IG工業 ガルスパン =====
  {
    id: 'ext-wall-galuspan',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ガルスパン',
    name: 'ガルスパン',
    manufacturer: 'IG工業',
    materialType: 'ガルバリウム鋼板',
    modelNumber: 'SPJ1-xxx',
    unit: 'sqm',
    isOption: true,
    description: '金属サイディング 変褪色・穴あき・赤さび10年保証 横張のみ採用可能 HOURS:アクセント面のみ標準（1色のみ）/LACIE:全面標準',
    variants: [
      { id: 'v1', color: 'ネオブラック', colorCode: 'SPJ1-310', images: [] },
      { id: 'v2', color: 'ビターブラウン', colorCode: 'SPJ1-358', images: [] },
      { id: 'v3', color: 'グランブルー', colorCode: 'SPJ1-387', images: [] },
      { id: 'v4', color: 'モスグリーン', colorCode: 'SPJ1-394', images: [] },
      { id: 'v5', color: 'シャンパンメタリック', colorCode: 'SPJ1-393', images: [] },
      { id: 'v6', color: 'シルバーメタリック', colorCode: 'SPJ1-306', images: [] },
      { id: 'v7', color: 'ダークメタリック', colorCode: 'SPJ1-380', images: [] },
      { id: 'v8', color: 'チタングレーメタリック', colorCode: 'SPJ1-391', images: [] },
      { id: 'v9', color: 'オータムレッド', colorCode: 'SPJ1-361', images: [] },
      { id: 'v10', color: 'カスタードイエロー', colorCode: 'SPJ1-355', images: [] },
      { id: 'v11', color: 'ミストアイボリー', colorCode: 'SPJ1-337', images: [] },
      { id: 'v12', color: 'ネオホワイト', colorCode: 'SPJ1-370', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 9500 },
      { plan: 'LIFE', price: 9500 }
    ]
  },

  // ===== 外壁 - KMEW 新フラット16 =====
  {
    id: 'ext-wall-shin-flat16',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '新フラット16',
    name: '新フラット16',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'EH74xxK',
    unit: 'sqm',
    isOption: true,
    description: 'エクセレージ・光セラ16 16mm厚',
    variants: [
      { id: 'v1', color: 'サテン チタン ホワイト', colorCode: 'EH7483K', images: [] },
      { id: 'v2', color: 'シルク チタン ホワイト', colorCode: 'EH7484K', images: [] },
      { id: 'v3', color: 'アッシュ チタン ベージュ', colorCode: 'EH7485K', images: [] },
      { id: 'v4', color: 'シルバー チタン グレー', colorCode: 'EH7487K', images: [] },
      { id: 'v5', color: 'スロー チタン グレー', colorCode: 'EH7486K', images: [] },
      { id: 'v6', color: 'ナチュラル チタン グレー', colorCode: 'EH7488K', images: [] },
      { id: 'v7', color: 'グレー チタン ベージュ', colorCode: 'EH7489K', images: [] },
      { id: 'v8', color: 'シルク チタン グレー', colorCode: 'EH74810K', images: [] },
      { id: 'v9', color: 'フリント チタン ブラック', colorCode: 'EH74818K', images: [] },
      { id: 'v10', color: 'ストレート チタン グレー', colorCode: 'EH74819K', images: [] },
      { id: 'v11', color: 'モス チタン グリーン', colorCode: 'EH74812K', images: [] },
      { id: 'v12', color: 'アッシュ チタン グリーン', colorCode: 'EH74815K', images: [] },
      { id: 'v13', color: 'ベルベット チタン ブラウン', colorCode: 'EH74817K', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - AICA ジョリパットネオ∞ エンシェントブリック =====
  {
    id: 'ext-wall-jolypate-ancient-brick',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ジョリパットネオ∞ エンシェントブリック',
    name: 'ジョリパットネオ∞ エンシェントブリック',
    manufacturer: 'AICA',
    materialType: '塗り壁',
    modelNumber: 'JQ-620',
    unit: 'sqm',
    isOption: true,
    description: 'ジョリパットネオ∞ 塗装仕上げ 筋が出やすく目立つことがあります HOURS:アクセント面のみ標準（1色のみ）/LACIE:全面標準',
    variants: [
      { id: 'v1', color: 'T1010', colorCode: '3.81Y 8.48/0.71', images: [] },
      { id: 'v2', color: 'T3001', colorCode: '3.72GY 7.03/0.35', images: [] },
      { id: 'v3', color: 'T3005', colorCode: '4.22Y 6.99/0.88', images: [] },
      { id: 'v4', color: 'T3009', colorCode: '9.18YR 6.96/1.29', images: [] },
      { id: 'v5', color: 'T3010', colorCode: '4.41Y 6.94/1.17', images: [] },
      { id: 'v6', color: 'T3400', colorCode: '8.82Y 7.64/0.22', images: [] },
      { id: 'v7', color: 'T4001', colorCode: '5.96GY 5.66/0.31', images: [] },
      { id: 'v8', color: 'T4024', colorCode: '2.36Y 5.55/2.86', images: [] },
      { id: 'v9', color: 'T4403', colorCode: '0.23G 5.50/0.17', images: [] },
      { id: 'v10', color: 'T5009', colorCode: '9.12YR 4.62/0.83', images: [] },
      { id: 'v11', color: 'T5403', colorCode: '4.60BG 4.44/0.2', images: [] },
      { id: 'v12', color: 'T6013', colorCode: '1.68PB 3.49/0.23', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 8000 },
      { plan: 'HOURS', price: 8000 },
      { plan: 'LIFE+', price: 12500 },
      { plan: 'LIFE', price: 12500 }
    ]
  },

  // ===== 外壁 - AICA ジョリパットネオ∞ ミーティア =====
  {
    id: 'ext-wall-jolypate-meteor',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ジョリパットネオ∞ ミーティア',
    name: 'ジョリパットネオ∞ ミーティア',
    manufacturer: 'AICA',
    materialType: '塗り壁',
    modelNumber: 'JQ-620',
    unit: 'sqm',
    isOption: true,
    description: 'ジョリパットネオ∞ 塗装仕上げ 筋が出やすく目立つことがあります HOURS:アクセント面のみ標準（1色のみ）/LACIE:全面標準',
    variants: [
      { id: 'v1', color: 'T1010', colorCode: '3.81Y 8.48/0.71', images: [] },
      { id: 'v2', color: 'T3001', colorCode: '3.72GY 7.03/0.35', images: [] },
      { id: 'v3', color: 'T3005', colorCode: '4.22Y 6.99/0.88', images: [] },
      { id: 'v4', color: 'T3009', colorCode: '9.18YR 6.96/1.29', images: [] },
      { id: 'v5', color: 'T3010', colorCode: '4.41Y 6.94/1.17', images: [] },
      { id: 'v6', color: 'T3400', colorCode: '8.82Y 7.64/0.22', images: [] },
      { id: 'v7', color: 'T4001', colorCode: '5.96GY 5.66/0.31', images: [] },
      { id: 'v8', color: 'T4024', colorCode: '2.36Y 5.55/2.86', images: [] },
      { id: 'v9', color: 'T4403', colorCode: '0.23G 5.50/0.17', images: [] },
      { id: 'v10', color: 'T5009', colorCode: '9.12YR 4.62/0.83', images: [] },
      { id: 'v11', color: 'T5403', colorCode: '4.60BG 4.44/0.2', images: [] },
      { id: 'v12', color: 'T6013', colorCode: '1.68PB 3.49/0.23', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 8000 },
      { plan: 'HOURS', price: 8000 },
      { plan: 'LIFE+', price: 12500 },
      { plan: 'LIFE', price: 12500 }
    ]
  },

  // ===== 外壁 - KMEW SOLIDO =====
  {
    id: 'ext-wall-solido',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'SOLIDO',
    name: 'SOLIDO typeM_LAP',
    manufacturer: 'KMEW',
    materialType: '窯業系サイディング',
    modelNumber: 'SMGxxG',
    unit: 'sqm',
    isOption: true,
    description: 'SOLIDO 高級外壁材 HOURS/LACIE:5㎡以下は80,000円/式 LIFE+/LIFE:5㎡以下は110,000円/式',
    variants: [
      { id: 'v1', color: '鉄黒（てつぐろ）', colorCode: 'SMG72G', images: [] },
      { id: 'v2', color: 'セメント', colorCode: 'SMG85G', images: [] },
      { id: 'v3', color: '錆茶（さびちゃ）', colorCode: 'SMG21G', images: [] },
      { id: 'v4', color: '灰（はい）', colorCode: 'SMG65G', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 17000 },
      { plan: 'HOURS', price: 17000 },
      { plan: 'LIFE+', price: 21500 },
      { plan: 'LIFE', price: 21500 }
    ]
  },

  // ===== ポーチ - モルタル金鏝抑え =====
  {
    id: 'ext-porch-mortar',
    categoryId: 'porch',
    categoryName: 'ポーチ',
    subcategory: 'モルタル金鏝抑え',
    name: 'モルタル金鏝抑え',
    manufacturer: '標準',
    modelNumber: 'MORTAR',
    unit: 'sqm',
    isOption: false,
    description: '標準内外部ポーチサイズ：1.8m×1.8m 将来的に乾燥収縮により構造上支障のないヘアークラック（ひび割れ）がおこる可能性があります',
    variants: [
      { id: 'v1', color: 'モルタル仕上げ', colorCode: 'モルタル', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== ポーチタイル - Nagoya mozaic ネイチャーII =====
  {
    id: 'ext-porch-nature2',
    categoryId: 'porch',
    categoryName: 'ポーチ',
    subcategory: 'ネイチャーII',
    name: 'ネイチャーII',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'MSY-R30xx',
    unit: 'sqm',
    isOption: true,
    description: '300×300 標準内外部ポーチサイズ：1.8m×1.8m',
    variants: [
      { id: 'v1', color: 'MSY-R3010', colorCode: 'MSY-R3010', images: [] },
      { id: 'v2', color: 'MSY-R3020', colorCode: 'MSY-R3020', images: [] },
      { id: 'v3', color: 'MSY-R3030', colorCode: 'MSY-R3030', images: [] },
      { id: 'v4', color: 'MSY-R3040', colorCode: 'MSY-R3040', images: [] },
      { id: 'v5', color: 'MSY-R3050', colorCode: 'MSY-R3050', images: [] },
      { id: 'v6', color: 'MSY-R3070', colorCode: 'MSY-R3070', images: [] },
      { id: 'v7', color: 'MSY-R3080', colorCode: 'MSY-R3080', images: [] },
      { id: 'v8', color: 'MSY-R3090', colorCode: 'MSY-R3090', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 22000 }
    ]
  },

  // ===== ポーチタイル - LIXIL ベスパ =====
  {
    id: 'ext-porch-vespa',
    categoryId: 'porch',
    categoryName: 'ポーチ',
    subcategory: 'ベスパ',
    name: 'ベスパ',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-300/VSP-xxx',
    unit: 'sqm',
    isOption: true,
    description: '300×300 標準内外部ポーチサイズ：1.8m×1.8m',
    variants: [
      { id: 'v1', color: 'VSP-SA1', colorCode: 'IPF-300/VSP-SA1', images: [] },
      { id: 'v2', color: 'VSP-SA2', colorCode: 'IPF-300/VSP-SA2', images: [] },
      { id: 'v3', color: 'VSP-SA3', colorCode: 'IPF-300/VSP-SA3', images: [] },
      { id: 'v4', color: 'VSP-SL1', colorCode: 'IPF-300/VSP-SL1', images: [] },
      { id: 'v5', color: 'VSP-SL2', colorCode: 'IPF-300/VSP-SL2', images: [] },
      { id: 'v6', color: 'VSP-SL3', colorCode: 'IPF-300/VSP-SL3', images: [] },
      { id: 'v7', color: 'VSP-SL4', colorCode: 'IPF-300/VSP-SL4', images: [] },
      { id: 'v8', color: 'VSP-SL5', colorCode: 'IPF-300/VSP-SL5', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 22000 }
    ]
  },

  // ===== ポーチタイル - LIXIL メンフィス =====
  {
    id: 'ext-porch-memphis',
    categoryId: 'porch',
    categoryName: 'ポーチ',
    subcategory: 'メンフィス',
    name: 'メンフィス',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-600/MMP-xx',
    unit: 'sqm',
    isOption: true,
    description: '600×600 / 600×300 標準内外部ポーチサイズ：1.8m×1.8m',
    variants: [
      { id: 'v1', color: 'MMP-11', colorCode: 'IPF-600/MMP-11', images: [] },
      { id: 'v2', color: 'MMP-12', colorCode: 'IPF-600/MMP-12', images: [] },
      { id: 'v3', color: 'MMP-13', colorCode: 'IPF-600/MMP-13', images: [] },
      { id: 'v4', color: 'MMP-14', colorCode: 'IPF-600/MMP-14', images: [] },
      { id: 'v5', color: 'MMP-15', colorCode: 'IPF-600/MMP-15', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 27000 },
      { plan: 'HOURS', price: 27000 }
    ]
  },

  // ===== ポーチサイズ拡張 =====
  {
    id: 'ext-porch-expansion',
    categoryId: 'porch',
    categoryName: 'ポーチ',
    subcategory: 'ポーチサイズ拡張',
    name: 'ポーチサイズ拡張',
    manufacturer: '標準',
    modelNumber: 'PORCH-EXP',
    unit: 'sqm',
    isOption: true,
    description: '1.8m×1.8m以上の場合（1㎡未満拡張の場合も同額）',
    variants: [
      { id: 'v1', color: '拡張', colorCode: '拡張', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 }
    ]
  },

  // ===== ポーチタイル - Nagoya mozaic ランドストン =====
  {
    id: 'ext-porch-landstone',
    categoryId: 'porch',
    categoryName: 'ポーチ',
    subcategory: 'ランドストン',
    name: 'ランドストン',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'CRD-X39xxG',
    unit: 'sqm',
    isOption: true,
    description: '600×600 / 300×600 岩面 外装標準品からの変更差額',
    variants: [
      { id: 'v1', color: 'CRD-X3910G', colorCode: 'CRD-X3910G', images: [] },
      { id: 'v2', color: 'CRD-X3920G', colorCode: 'CRD-X3920G', images: [] },
      { id: 'v3', color: 'CRD-X3930G', colorCode: 'CRD-X3930G', images: [] },
      { id: 'v4', color: 'CRD-X3940G', colorCode: 'CRD-X3940G', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },

  // ===== ポーチタイル - Nagoya mozaic ピエトラソーニ =====
  {
    id: 'ext-porch-pietra-soni',
    categoryId: 'porch',
    categoryName: 'ポーチ',
    subcategory: 'ピエトラソーニ',
    name: 'ピエトラソーニ',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'PAN-X81xxG',
    unit: 'sqm',
    isOption: true,
    description: '600×600 / 300×600 粗目 外装標準品からの変更差額',
    variants: [
      { id: 'v1', color: 'PAN-X8110G', colorCode: 'PAN-X8110G', images: [] },
      { id: 'v2', color: 'PAN-X8120G', colorCode: 'PAN-X8120G', images: [] },
      { id: 'v3', color: 'PAN-X8130G', colorCode: 'PAN-X8130G', images: [] },
      { id: 'v4', color: 'PAN-X8140G', colorCode: 'PAN-X8140G', images: [] },
      { id: 'v5', color: 'PAN-X8150G', colorCode: 'PAN-X8150G', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },

  // ===== 屋根材 =====
  {
    id: 'ext-roof-nisc',
    categoryId: 'roof',
    categoryName: '屋根',
    subcategory: '屋根材',
    name: 'ニスクカラーSGL',
    manufacturer: '日鉄鋼板',
    modelNumber: 'NM-8697',
    unit: 'set',
    isOption: false,
    description: '材料標準保証規格10年 国土交通大臣認定不燃材料 海岸500m以遠原板の穴あき25年保証',
    variants: [
      { id: 'v1', color: 'Sブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外部設備 - 外部配管 =====
  {
    id: 'ext-pipe',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部配管',
    name: '外部配管',
    manufacturer: '標準',
    modelNumber: 'EXT-PIPE',
    unit: 'set',
    isOption: false,
    description: '外部配管カラーは単色グレーのみ',
    variants: [
      { id: 'v1', color: 'グレー', colorCode: 'グレー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 破風 EP塗装 =====
  {
    id: 'ext-fascia',
    categoryId: 'fascia',
    categoryName: '外部建材',
    subcategory: '破風',
    name: '破風 EP塗装',
    manufacturer: '標準',
    modelNumber: 'FASCIA-EP',
    unit: 'set',
    isOption: false,
    description: '軒を延長する場合、取り付けが必要になります',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 樋・水切 - 軒樋 =====
  {
    id: 'ext-gutter-horizontal',
    categoryId: 'gutter',
    categoryName: '外部建材',
    subcategory: '軒樋',
    name: 'ファインスケアNF-I型',
    manufacturer: 'Panasonic',
    modelNumber: 'MQFxxxx',
    unit: 'set',
    isOption: false,
    description: '軒樋（横樋）',
    variants: [
      { id: 'v1', color: 'ミルクホワイト', colorCode: 'MQF0180J', images: [] },
      { id: 'v2', color: 'パールグレー（しろ）', colorCode: 'MQF1180J', images: [] },
      { id: 'v3', color: 'しんちゃ', colorCode: 'MQF5180', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'MQF6180J', images: [] },
      { id: 'v5', color: 'モダンベージュ', colorCode: 'MQFX180J', images: [] },
      { id: 'v6', color: 'オークブラウン', colorCode: 'MQFZ180J', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 樋・水切 - 竪樋 =====
  {
    id: 'ext-gutter-vertical',
    categoryId: 'gutter',
    categoryName: '外部建材',
    subcategory: '竪樋',
    name: 'S30',
    manufacturer: 'Panasonic',
    modelNumber: 'KBPxxxx',
    unit: 'set',
    isOption: false,
    description: '竪樋（縦樋）',
    variants: [
      { id: 'v1', color: 'ミルクホワイト', colorCode: 'KBP0261K', images: [] },
      { id: 'v2', color: 'パールグレー（しろ）', colorCode: 'KBP1261K', images: [] },
      { id: 'v3', color: 'しんちゃ', colorCode: 'KBP5261K', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'KBP6261K', images: [] },
      { id: 'v5', color: 'モダンベージュ', colorCode: 'KBPX261K', images: [] },
      { id: 'v6', color: 'オークブラウン', colorCode: 'KBPZ261K', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 軒天 - エンボス =====
  {
    id: 'ext-soffit-emboss',
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
      { id: 'v1', color: 'Wファリーホワイト', colorCode: 'Wファリーホワイト', images: [] },
      { id: 'v2', color: 'Wエストアイボリー', colorCode: 'Wエストアイボリー', images: [] },
      { id: 'v3', color: 'Wファインステン', colorCode: 'Wファインステン', images: [] },
      { id: 'v4', color: 'Wエボニーブラウン', colorCode: 'Wエボニーブラウン', images: [] },
      { id: 'v5', color: 'Wチャコールブラック', colorCode: 'Wチャコールブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 軒天 - アルテザート =====
  {
    id: 'ext-soffit-artezart',
    categoryId: 'soffit',
    categoryName: '軒天',
    subcategory: 'アルテザート',
    name: 'アルテザート',
    manufacturer: 'KONOSHIMA',
    materialType: '窯業系サイディング',
    modelNumber: 'ARTE-RCN',
    unit: 'sqm',
    isOption: true,
    description: '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可。5㎡までは80,000円/式',
    variants: [
      { id: 'v1', color: 'レッドシダーナチュラル', colorCode: 'レッドシダーナチュラル', images: [] },
      { id: 'v2', color: 'レッドシダーエイジング', colorCode: 'レッドシダーエイジング', images: [] },
      { id: 'v3', color: 'オークナチュラル', colorCode: 'オークナチュラル', images: [] },
      { id: 'v4', color: 'オークヴィンテージ', colorCode: 'オークヴィンテージ', images: [] },
      { id: 'v5', color: 'ウォルナットナチュラル', colorCode: 'ウォルナットナチュラル', images: [] },
      { id: 'v6', color: 'ウォルナットダーク', colorCode: 'ウォルナットダーク', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 18000 },
      { plan: 'HOURS', price: 18000 }
    ]
  },

  // ===== 軒天 - ラフォーレソレイユ =====
  {
    id: 'ext-soffit-laforet-soleil',
    categoryId: 'soffit',
    categoryName: '軒天',
    subcategory: 'ラフォーレソレイユ',
    name: 'ラフォーレソレイユ',
    manufacturer: '神島化学',
    modelNumber: 'LAFORET-SOLEIL',
    unit: 'sqm',
    isOption: true,
    description: '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可',
    variants: [
      { id: 'v1', color: 'グレイッシュシダー', colorCode: 'グレイッシュシダー', images: [] },
      { id: 'v2', color: 'ナチュラルダーク', colorCode: 'ナチュラルダーク', images: [] },
      { id: 'v3', color: 'ウォルナット', colorCode: 'ウォルナット', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 }
    ]
  },

  // ===== 軒天 - ラフォーレティンバー =====
  {
    id: 'ext-soffit-laforet-timber',
    categoryId: 'soffit',
    categoryName: '軒天',
    subcategory: 'ラフォーレティンバー',
    name: 'ラフォーレティンバー',
    manufacturer: '神島化学',
    modelNumber: 'LAFORET-TIMBER',
    unit: 'sqm',
    isOption: true,
    description: '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可',
    variants: [
      { id: 'v1', color: 'スモーキイエロー', colorCode: 'スモーキイエロー', images: [] },
      { id: 'v2', color: 'キャラメルブラウン', colorCode: 'キャラメルブラウン', images: [] },
      { id: 'v3', color: 'レッドブラウン', colorCode: 'レッドブラウン', images: [] },
      { id: 'v4', color: 'チャコール', colorCode: 'チャコール', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 }
    ]
  },

  // ===== 庇 - アルフィン庇 AD2S =====
  {
    id: 'ext-awning-alfin-ad2s',
    categoryId: 'awning',
    categoryName: '庇',
    subcategory: 'アルフィン庇 AD2S',
    name: 'アルフィン庇 AD2S',
    manufacturer: 'アルフィン',
    modelNumber: 'AD2S',
    unit: 'piece',
    isOption: true,
    description: 'W1800×D900',
    variants: [
      { id: 'v1', color: 'ステンカラー', colorCode: 'ステンカラー', images: [] },
      { id: 'v2', color: 'シルバー', colorCode: 'シルバー', images: [] },
      { id: 'v3', color: 'ブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 258000 },
      { plan: 'HOURS', price: 258000 },
      { plan: 'LIFE+', price: 258000 },
      { plan: 'LIFE', price: 258000 }
    ]
  },

  // ===== 庇 - アルフィン庇 AF95シリーズ 木目調仕上げ =====
  {
    id: 'ext-awning-alfin-af95',
    categoryId: 'awning',
    categoryName: '庇',
    subcategory: 'アルフィン庇 AF95シリーズ',
    name: 'アルフィン庇 AF95シリーズ 木目調仕上げ',
    manufacturer: 'アルフィン',
    modelNumber: 'AF95',
    unit: 'piece',
    isOption: true,
    description: 'W1800×D950 屋根部カラー(ステンカラー/シルバー/ブロンズ/ブラック)と軒天面カラー(ヒッコリー/ウォルナット/チーク/ナラ)の組み合わせ',
    variants: [
      { id: 'v1', color: 'ヒッコリー', colorCode: 'ヒッコリー', images: [] },
      { id: 'v2', color: 'ウォルナット', colorCode: 'ウォルナット', images: [] },
      { id: 'v3', color: 'チーク', colorCode: 'チーク', images: [] },
      { id: 'v4', color: 'ナラ', colorCode: 'ナラ', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 352000 },
      { plan: 'HOURS', price: 352000 },
      { plan: 'LIFE+', price: 352000 },
      { plan: 'LIFE', price: 352000 }
    ]
  },

  // ===== 電動ガレージシャッター - サンオートハイスピード =====
  {
    id: 'ext-garage-shutter-sunauto',
    categoryId: 'garage-shutter',
    categoryName: '電動ガレージシャッター',
    subcategory: 'サンオートハイスピード',
    name: 'サンオートハイスピード',
    manufacturer: '三和シャッター',
    modelNumber: 'SUNAUTO-HS',
    unit: 'piece',
    isOption: true,
    description: '非防火/施工費込み W2550×H2200 巻き取り式 開放約13秒 障害物検知装置付き 防火仕様+60,000円 ブラック塗装+60,000円',
    variants: [
      { id: 'v1', color: 'サンド', colorCode: 'カラー鋼板', images: [] },
      { id: 'v2', color: 'ライトグレー', colorCode: 'カラー鋼板', images: [] },
      { id: 'v3', color: 'ホワイト', colorCode: 'カラー鋼板', images: [] },
      { id: 'v4', color: 'クールシルバー', colorCode: '高耐食カラー鋼板', images: [] },
      { id: 'v5', color: 'ビンテージウォールナット', colorCode: '樹脂フィルム化粧鋼板', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 540000 },
      { plan: 'HOURS', price: 540000 },
      { plan: 'LIFE+', price: 540000 },
      { plan: 'LIFE', price: 540000 }
    ]
  },

  // ===== 電動ガレージシャッター - 威風堂々 =====
  {
    id: 'ext-garage-shutter-ifudo',
    categoryId: 'garage-shutter',
    categoryName: '電動ガレージシャッター',
    subcategory: '威風堂々',
    name: '威風堂々',
    manufacturer: '三和シャッター',
    modelNumber: 'IFUDO',
    unit: 'piece',
    isOption: true,
    description: '非防火/施工費込み W2550×H2200 オーバースライダー 開放約10秒 障害物検知装置付き ピンチレスパネル採用 防火仕様+60,000円 木目調カラー+660,000円',
    variants: [
      { id: 'v1', color: 'ステンカラー', colorCode: 'ステンカラー', images: [] },
      { id: 'v2', color: 'シルバー', colorCode: 'シルバー', images: [] },
      { id: 'v3', color: 'ウォールナット', colorCode: '木目調', images: [] },
      { id: 'v4', color: 'オーシャンチーク', colorCode: '木目調', images: [] },
      { id: 'v5', color: 'スイングナット', colorCode: '木目調', images: [] },
      { id: 'v6', color: 'シャーメープル', colorCode: '木目調', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 1290000 },
      { plan: 'HOURS', price: 1290000 },
      { plan: 'LIFE+', price: 1290000 },
      { plan: 'LIFE', price: 1290000 }
    ]
  },

  // ===== 窓タイプ - APW330（設計カテゴリ） =====
  {
    id: 'ext-window-type-apw330',
    categoryId: 'window-type',
    categoryName: '窓タイプ',
    subcategory: '窓タイプ',
    name: 'APW330（樹脂サッシ・ペアガラス）',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330',
    unit: 'set',
    isOption: false,
    description: '樹脂サッシ アルゴンガス ペアガラス 熱貫流率1.31W/(㎡・K)',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 窓タイプ - APW430（設計カテゴリ） =====
  {
    id: 'ext-window-type-apw430',
    categoryId: 'window-type',
    categoryName: '窓タイプ',
    subcategory: '窓タイプ',
    name: 'APW430（樹脂サッシ・トリプルガラス）',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430',
    unit: 'set',
    isOption: true,
    description: '樹脂サッシ トリプルガラス 熱貫流率0.90W/(㎡・K) より高い断熱性能',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 300000 },
      { plan: 'HOURS', price: 300000 }
    ]
  },

  // ===== 窓 - APW330 =====
  {
    id: 'ext-window-apw330',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW330',
    name: 'APW330',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330',
    unit: 'piece',
    isOption: false,
    description: '樹脂サッシ アルゴンガス ペアガラス 熱貫流率1.31W/(㎡・K) 防火仕様1.55W/(㎡・K) 外観色4色×内観色5色の組み合わせ',
    variants: [
      { id: 'v1', color: 'ホワイト（外観）', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'プラチナステン（外観）', colorCode: 'プラチナステン', images: [] },
      { id: 'v3', color: 'ブラウン（外観）', colorCode: 'ブラウン', images: [] },
      { id: 'v4', color: 'ブラック（外観）', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 窓オプション - 電動シャッター W1650まで =====
  {
    id: 'ext-window-shutter-w1650',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '電動シャッター W1650まで',
    manufacturer: 'YKKAP',
    modelNumber: 'SHUTTER-E-W1650',
    unit: 'piece',
    isOption: true,
    description: '電動シャッターへ変更 W1650まで',
    variants: [
      { id: 'v1', color: '標準色', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 }
    ]
  },

  // ===== 窓オプション - 電動シャッター W2560まで =====
  {
    id: 'ext-window-shutter-w2560',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '電動シャッター W2560まで',
    manufacturer: 'YKKAP',
    modelNumber: 'SHUTTER-E-W2560',
    unit: 'piece',
    isOption: true,
    description: '電動シャッターへ変更 W2560まで',
    variants: [
      { id: 'v1', color: '標準色', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 }
    ]
  },

  // ===== 窓オプション - 耐熱強化複層ガラス W1650まで =====
  {
    id: 'ext-window-heatproof-w1650',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '耐熱強化複層ガラス（網なし） W1650まで',
    manufacturer: 'YKKAP',
    modelNumber: 'HEAT-PROOF-W1650',
    unit: 'piece',
    isOption: true,
    description: '防火地域用：耐熱強化複層ガラス（網なし） W1650まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 18000 },
      { plan: 'HOURS', price: 18000 }
    ]
  },

  // ===== 窓オプション - 耐熱強化複層ガラス W2560まで =====
  {
    id: 'ext-window-heatproof-w2560',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '耐熱強化複層ガラス（網なし） W2560まで',
    manufacturer: 'YKKAP',
    modelNumber: 'HEAT-PROOF-W2560',
    unit: 'piece',
    isOption: true,
    description: '防火地域用：耐熱強化複層ガラス（網なし） W2560まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 }
    ]
  },

  // ===== 窓オプション - 安全合わせガラス =====
  {
    id: 'ext-window-safety-glass',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '安全合わせガラス（30mil）',
    manufacturer: 'YKKAP',
    modelNumber: 'SAFETY-GLASS-30',
    unit: 'piece',
    isOption: true,
    description: '安全合わせガラス（30mil）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 }
    ]
  },

  // ===== 窓オプション - 窓追加（22条地域） =====
  {
    id: 'ext-window-add-22',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '窓追加（22条地域）',
    manufacturer: 'YKKAP',
    modelNumber: 'WINDOW-ADD-22',
    unit: 'piece',
    isOption: true,
    description: '窓追加（22条地域）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 }
    ]
  },

  // ===== 窓オプション - 窓追加（準防火・防火地域） =====
  {
    id: 'ext-window-add-fire',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '窓追加（準防火・防火地域）',
    manufacturer: 'YKKAP',
    modelNumber: 'WINDOW-ADD-FIRE',
    unit: 'piece',
    isOption: true,
    description: '窓追加（準防火・防火地域）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 }
    ]
  },

  // ===== 窓オプション - 掃出し窓追加（22条地域）W1650まで =====
  {
    id: 'ext-window-add-sliding-22-w1650',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '掃出し窓追加（22条地域）W1650まで',
    manufacturer: 'YKKAP',
    modelNumber: 'SLIDING-ADD-22-W1650',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（22条地域）W1650まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 150000 },
      { plan: 'HOURS', price: 150000 }
    ]
  },

  // ===== 窓オプション - 掃出し窓追加（22条地域）W2560まで =====
  {
    id: 'ext-window-add-sliding-22-w2560',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '掃出し窓追加（22条地域）W2560まで',
    manufacturer: 'YKKAP',
    modelNumber: 'SLIDING-ADD-22-W2560',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（22条地域）W2560まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 }
    ]
  },

  // ===== 窓オプション - 掃出し窓追加（準防火・防火地域）W1650まで =====
  {
    id: 'ext-window-add-sliding-fire-w1650',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '掃出し窓追加（準防火・防火地域）W1650まで',
    manufacturer: 'YKKAP',
    modelNumber: 'SLIDING-ADD-FIRE-W1650',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（準防火・防火地域）W1650まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 }
    ]
  },

  // ===== 窓オプション - 掃出し窓追加（準防火・防火地域）W2560まで =====
  {
    id: 'ext-window-add-sliding-fire-w2560',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '掃出し窓追加（準防火・防火地域）W2560まで',
    manufacturer: 'YKKAP',
    modelNumber: 'SLIDING-ADD-FIRE-W2560',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（準防火・防火地域）W2560まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 300000 },
      { plan: 'HOURS', price: 300000 }
    ]
  },

  // ===== 窓 - APW430 =====
  {
    id: 'ext-window-apw430',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430',
    name: 'APW430',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430',
    unit: 'piece',
    isOption: true,
    description: '樹脂サッシ アルゴンガス トリプルガラス 熱貫流率0.90W/(㎡・K) 防火仕様1.03W/(㎡・K) LACIE/HOURS標準 LIFE+/LIFEはオプション（¥20,000×施工坪数/式）',
    variants: [
      { id: 'v1', color: 'ホワイト（外観）', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'プラチナステン（外観）', colorCode: 'プラチナステン', images: [] },
      { id: 'v3', color: 'ブラウン（外観）', colorCode: 'ブラウン', images: [] },
      { id: 'v4', color: 'ブラック（外観）', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },

  // ===== APW430 窓オプション - 安全合わせガラス =====
  {
    id: 'ext-window-apw430-safety-glass',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430窓オプション',
    name: 'APW430 安全合わせガラス（30mil）',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430-SAFETY-GLASS',
    unit: 'piece',
    isOption: true,
    description: 'APW430用 安全合わせガラス（30mil） W2560引き違い窓は非対応',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 }
    ]
  },

  // ===== APW430 窓オプション - 窓追加（22条地域） =====
  {
    id: 'ext-window-apw430-add-22',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430窓オプション',
    name: 'APW430 窓追加（22条地域）',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430-ADD-22',
    unit: 'piece',
    isOption: true,
    description: 'APW430 窓追加（22条地域）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 }
    ]
  },

  // ===== APW430 窓オプション - 窓追加（準防火・防火地域） =====
  {
    id: 'ext-window-apw430-add-fire',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430窓オプション',
    name: 'APW430 窓追加（準防火・防火地域）',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430-ADD-FIRE',
    unit: 'piece',
    isOption: true,
    description: 'APW430 窓追加（準防火・防火地域）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 180000 },
      { plan: 'HOURS', price: 180000 }
    ]
  },

  // ===== APW430 窓オプション - 掃出し窓追加（22条地域）W1650まで =====
  {
    id: 'ext-window-apw430-sliding-22-w1650',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430窓オプション',
    name: 'APW430 掃出し窓追加（22条地域）W1650まで',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430-SLIDING-22-W1650',
    unit: 'piece',
    isOption: true,
    description: 'APW430 掃出し窓追加（22条地域）W1650まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 300000 },
      { plan: 'HOURS', price: 300000 }
    ]
  },

  // ===== APW430 窓オプション - 掃出し窓追加（22条地域）W2560まで =====
  {
    id: 'ext-window-apw430-sliding-22-w2560',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430窓オプション',
    name: 'APW430 掃出し窓追加（22条地域）W2560まで',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430-SLIDING-22-W2560',
    unit: 'piece',
    isOption: true,
    description: 'APW430 掃出し窓追加（22条地域）W2560まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 400000 },
      { plan: 'HOURS', price: 400000 }
    ]
  },

  // ===== APW430 窓オプション - 掃出し窓追加（準防火・防火地域）W1650まで =====
  {
    id: 'ext-window-apw430-sliding-fire-w1650',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430窓オプション',
    name: 'APW430 掃出し窓追加（準防火・防火地域）W1650まで',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430-SLIDING-FIRE-W1650',
    unit: 'piece',
    isOption: true,
    description: 'APW430 掃出し窓追加（準防火・防火地域）W1650まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 400000 },
      { plan: 'HOURS', price: 400000 }
    ]
  },

  // ===== APW430 窓オプション - 掃出し窓追加（準防火・防火地域）W2560まで =====
  {
    id: 'ext-window-apw430-sliding-fire-w2560',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430窓オプション',
    name: 'APW430 掃出し窓追加（準防火・防火地域）W2560まで',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430-SLIDING-FIRE-W2560',
    unit: 'piece',
    isOption: true,
    description: 'APW430 掃出し窓追加（準防火・防火地域）W2560まで',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 600000 },
      { plan: 'HOURS', price: 600000 }
    ]
  },

  // ===== 玄関ドア - ヴェナートD30 N08 =====
  {
    id: 'ext-door-venato-d30-n08',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30',
    name: 'ヴェナートD30 N08',
    manufacturer: 'YKKAP',
    materialType: 'N08',
    modelNumber: 'D30-N08',
    unit: 'piece',
    isOption: false,
    description: '木目の水平線が印象的なドアデザイン 100V電気錠 ポケットキー付き 防火・非防火対応',
    variants: [
      { id: 'v1', color: 'キャラメルチーク', colorCode: 'N08-CT', images: [] },
      { id: 'v2', color: 'ショコラウォールナット', colorCode: 'N08-SW', images: [] },
      { id: 'v3', color: 'ハニーチェリー', colorCode: 'N08-HC', images: [] },
      { id: 'v4', color: '桑炭', colorCode: 'N08-KS', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 75000 }
    ]
  },

  // ===== 玄関ドア - ヴェナートD30 N18 =====
  {
    id: 'ext-door-venato-d30-n18',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30',
    name: 'ヴェナートD30 N18',
    manufacturer: 'YKKAP',
    materialType: 'N18',
    modelNumber: 'D30-N18',
    unit: 'piece',
    isOption: false,
    description: '框とくふなバランスが印象的なコンテンポラリーデザイン 100V電気錠 ポケットキー付き 防火・非防火対応',
    variants: [
      { id: 'v1', color: 'キャラメルチーク', colorCode: 'N18-CT', images: [] },
      { id: 'v2', color: 'ショコラウォールナット', colorCode: 'N18-SW', images: [] },
      { id: 'v3', color: 'ハニーチェリー', colorCode: 'N18-HC', images: [] },
      { id: 'v4', color: 'マキアートパイン', colorCode: 'N18-MP', images: [] },
      { id: 'v5', color: 'ティーブラウン', colorCode: 'N18-TB', images: [] },
      { id: 'v6', color: '桑炭', colorCode: 'N18-KS', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 75000 }
    ]
  },

  // ===== 玄関ドア - ヴェナートD30 N15 =====
  {
    id: 'ext-door-venato-d30-n15',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30',
    name: 'ヴェナートD30 N15',
    manufacturer: 'YKKAP',
    materialType: 'N15',
    modelNumber: 'D30-N15',
    unit: 'piece',
    isOption: false,
    description: '木目の水平線が印象的なドアデザイン 100V電気錠 ポケットキー付き 防火・非防火対応',
    variants: [
      { id: 'v1', color: 'キャラメルチーク', colorCode: 'N15-CT', images: [] },
      { id: 'v2', color: 'ショコラウォールナット', colorCode: 'N15-SW', images: [] },
      { id: 'v3', color: 'ハニーチェリー', colorCode: 'N15-HC', images: [] },
      { id: 'v4', color: 'マキアートパイン', colorCode: 'N15-MP', images: [] },
      { id: 'v5', color: '桑炭', colorCode: 'N15-KS', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 75000 }
    ]
  },

  // ===== 玄関ドア - ヴェナートD30 C10 =====
  {
    id: 'ext-door-venato-d30-c10',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30',
    name: 'ヴェナートD30 C10',
    manufacturer: 'YKKAP',
    materialType: 'C10',
    modelNumber: 'D30-C10',
    unit: 'piece',
    isOption: false,
    description: 'カラーの組合わせや形状でエントランス意匠を演出するプレーンデザイン 100V電気錠 ポケットキー付き 防火・非防火対応',
    variants: [
      { id: 'v1', color: 'プラチナステン', colorCode: 'C10-PS', images: [] },
      { id: 'v2', color: 'カームブラック', colorCode: 'C10-CB', images: [] },
      { id: 'v3', color: 'ピュアシルバー', colorCode: 'C10-PV', images: [] },
      { id: 'v4', color: 'ホワイト', colorCode: 'C10-WH', images: [] },
      { id: 'v5', color: 'マットブラウン', colorCode: 'C10-MB', images: [] },
      { id: 'v6', color: 'マットダークグレー', colorCode: 'C10-MDG', images: [] },
      { id: 'v7', color: 'マットネイビー', colorCode: 'C10-MN', images: [] },
      { id: 'v8', color: 'マットワインレッド', colorCode: 'C10-MWR', images: [] },
      { id: 'v9', color: 'マットモスグリーン', colorCode: 'C10-MMG', images: [] },
      { id: 'v10', color: 'マットオリーブ', colorCode: 'C10-MO', images: [] },
      { id: 'v11', color: 'マットベージュ', colorCode: 'C10-MBE', images: [] },
      { id: 'v12', color: 'マットアイボリー', colorCode: 'C10-MI', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 75000 }
    ]
  },

  // ===== 玄関ドアオプション - ハンドル形状（電子錠）ストレートハンドル =====
  {
    id: 'ext-door-handle-straight',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: '玄関ドアオプション',
    name: 'ストレートハンドル（電子錠）',
    manufacturer: 'YKKAP',
    materialType: 'ハンドル',
    modelNumber: 'HANDLE-STRAIGHT',
    unit: 'piece',
    isOption: false,
    description: '電子錠用ストレートハンドル 人気商品（HIT!）',
    variants: [
      { id: 'v1', color: 'ブラック', colorCode: 'BK', images: [] },
      { id: 'v2', color: 'シルバー', colorCode: 'SV', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 玄関ドアオプション - ハンドル形状（電子錠）洋風カーブハンドル =====
  {
    id: 'ext-door-handle-curve',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: '玄関ドアオプション',
    name: '洋風カーブハンドル（電子錠）',
    manufacturer: 'YKKAP',
    materialType: 'ハンドル',
    modelNumber: 'HANDLE-CURVE',
    unit: 'piece',
    isOption: true,
    description: '電子錠用洋風カーブハンドル',
    variants: [
      { id: 'v1', color: '標準', colorCode: 'STD', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 玄関ドアオプション - ハンドル形状（手動錠）丸型ストレートハンドル =====
  {
    id: 'ext-door-handle-round-straight',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: '玄関ドアオプション',
    name: '丸型ストレートハンドル（手動錠）',
    manufacturer: 'YKKAP',
    materialType: 'ハンドル',
    modelNumber: 'HANDLE-ROUND-STRAIGHT',
    unit: 'piece',
    isOption: true,
    description: '手動錠用丸型ストレートハンドル',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: 'SV', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: 'BK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 玄関ドアオプション - ハンドル形状（手動錠）角型ストレートハンドル =====
  {
    id: 'ext-door-handle-square-straight',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: '玄関ドアオプション',
    name: '角型ストレートハンドル（手動錠）',
    manufacturer: 'YKKAP',
    materialType: 'ハンドル',
    modelNumber: 'HANDLE-SQUARE-STRAIGHT',
    unit: 'piece',
    isOption: true,
    description: '手動錠用角型ストレートハンドル',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: 'SV', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: 'BK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 玄関ドアオプション - ハンドル形状（手動錠）ロートアイアン調ハンドル =====
  {
    id: 'ext-door-handle-iron',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: '玄関ドアオプション',
    name: 'ロートアイアン調ハンドル（手動錠）',
    manufacturer: 'YKKAP',
    materialType: 'ハンドル',
    modelNumber: 'HANDLE-IRON',
    unit: 'piece',
    isOption: true,
    description: '手動錠用ロートアイアン調ハンドル',
    variants: [
      { id: 'v1', color: 'ブラック', colorCode: 'BK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 玄関ドアオプション - 顔認証キー =====
  {
    id: 'ext-door-face-auth',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: '玄関ドアオプション',
    name: '顔認証キー',
    manufacturer: 'YKKAP',
    materialType: 'オプション',
    modelNumber: 'FACE-AUTH',
    unit: 'piece',
    isOption: true,
    description: '顔認証キー 非防火地域のみ使用可能 音声ガイド付き 顔データの登録も簡単',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LIFE+', price: 200000 },
      { plan: 'LIFE', price: 200000 }
    ]
  },

  // ===== 玄関ドアオプション - 操作盤付インターフェースユニット =====
  {
    id: 'ext-door-interface-unit',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: '玄関ドアオプション',
    name: '操作盤付インターフェースユニット',
    manufacturer: 'YKKAP',
    materialType: 'オプション',
    modelNumber: 'INTERFACE-UNIT',
    unit: 'piece',
    isOption: true,
    description: '玄関ドア付近に設置する操作盤付インターフェースユニット',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外部設備 - 外部コンセント（標準） =====
  {
    id: 'ext-facility-outlet-std',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部コンセント',
    name: '外部コンセント（1カ所標準）',
    manufacturer: 'Panasonic',
    modelNumber: 'EXT-OUTLET',
    unit: 'piece',
    isOption: false,
    description: '外部コンセント（1カ所標準）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外部設備 - 外部コンセント追加 =====
  {
    id: 'ext-facility-outlet-add',
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
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 }
    ]
  },

  // ===== 外部設備 - EV用コンセント =====
  {
    id: 'ext-facility-ev-outlet',
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
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 }
    ]
  },

  // ===== 外部設備 - 散水栓 =====
  {
    id: 'ext-facility-sansui',
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
      { id: 'v1', color: 'メタリックシルバー', colorCode: 'メタリックシルバー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外部設備 - 立水栓 =====
  {
    id: 'ext-facility-tachimizu',
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
      { id: 'v1', color: 'ブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外部設備 - アルミ立水栓追加 =====
  {
    id: 'ext-facility-tachimizu-add',
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
      { id: 'v1', color: 'シルバー', colorCode: 'シルバー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 28000 },
      { plan: 'HOURS', price: 28000 }
    ]
  },

  // ===== 外部設備 - 玄関用マルチフック =====
  {
    id: 'ext-facility-multihook',
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
      { id: 'v1', color: 'シルバー', colorCode: 'シルバー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 }
    ]
  },

  // ===== 外部設備 - タープフック =====
  {
    id: 'ext-facility-tarphook',
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
      { id: 'v1', color: 'シルバー', colorCode: 'シルバー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 }
    ]
  },

  // ===== 外部設備 - エアコンスリーブキャップ（標準） =====
  {
    id: 'ext-facility-ac-sleeve-std',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: 'エアコンスリーブキャップ（5カ所標準）',
    manufacturer: '標準',
    modelNumber: 'AC-SLEEVE',
    unit: 'piece',
    isOption: false,
    description: 'エアコンスリーブキャップ（5カ所標準）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 外部設備 - エアコンスリーブキャップ追加 =====
  {
    id: 'ext-facility-ac-sleeve-add',
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
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 }
    ]
  },

  // ===== 外部設備 - 外部LAN用空配管 =====
  {
    id: 'ext-facility-lan-pipe',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: '外部LAN用空配管',
    manufacturer: '標準',
    modelNumber: 'LAN-PIPE',
    unit: 'piece',
    isOption: true,
    description: '外部LAN用空配管',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 }
    ]
  },

  // ===== 外部設備 - センサーライト付屋外ワイヤレスカメラ =====
  {
    id: 'ext-facility-wireless-camera',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '防犯設備',
    name: 'センサーライト付屋外ワイヤレスカメラ',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-WD813K',
    unit: 'piece',
    isOption: true,
    description: 'センサーライト付屋外ワイヤレスカメラ インターホンに最大4台まで接続可',
    variants: [
      { id: 'v1', color: '標準', colorCode: 'VL-WD813K', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 }
    ]
  },

  // ===== 外部設備 - 屋外ワイヤレスカメラ VL-CX500 =====
  {
    id: 'ext-facility-wireless-camera-cx500',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '防犯設備',
    name: '屋外ワイヤレスカメラ VL-CX500',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-CX500X',
    unit: 'piece',
    isOption: true,
    description: 'SVD505（外でもドアホン）採用時のみ選択可能 最大2台まで接続可',
    variants: [
      { id: 'v1', color: 'グレー', colorCode: 'VL-CX500X-H', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: 'VL-CX500XA-K', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 140000 },
      { plan: 'HOURS', price: 140000 }
    ]
  },

  // ===== 外部設備 - 露出用四角ボックス（将来防犯カメラ用） =====
  {
    id: 'ext-facility-security-box',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '防犯設備',
    name: '露出用四角ボックス（将来防犯カメラ用）',
    manufacturer: '未来工業',
    modelNumber: 'PV4B-ANF',
    unit: 'piece',
    isOption: true,
    description: 'LAN空配管+電源仕込み含む',
    variants: [
      { id: 'v1', color: 'ベージュ', colorCode: 'PV4B-ANFJ', images: [] },
      { id: 'v2', color: 'ミルキーホワイト', colorCode: 'PV4B-ANFM', images: [] },
      { id: 'v3', color: 'グレー', colorCode: 'PV4B-ANF', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'PV4B-ANFK', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 28000 },
      { plan: 'HOURS', price: 28000 }
    ]
  },

  // ===== 外部設備 - 散水栓/立水栓追加 =====
  {
    id: 'ext-facility-faucet-add',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部水栓',
    name: '散水栓/立水栓追加',
    manufacturer: 'オンリーワン',
    modelNumber: 'GM3-ALxxx',
    unit: 'piece',
    isOption: true,
    description: '散水栓または立水栓（排水なし）追加',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 }
    ]
  },

  // ===== 外部設備 - 散水栓/立水栓（排水仕込み追加） =====
  {
    id: 'ext-facility-faucet-drain',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部水栓',
    name: '散水栓/立水栓（排水仕込み追加）',
    manufacturer: 'オンリーワン',
    modelNumber: 'FAUCET-DRAIN',
    unit: 'piece',
    isOption: true,
    description: '散水栓/立水栓に排水仕込みを追加',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 }
    ]
  },

  // ===== 外部設備 - ステンレス混合立水栓 =====
  {
    id: 'ext-facility-stainless-faucet',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部水栓',
    name: 'ステンレス混合立水栓',
    manufacturer: 'カクダイ',
    modelNumber: '624-202',
    unit: 'piece',
    isOption: true,
    description: 'ステンレス混合立水栓 標準形状変更差額 別途給湯工事費用必要',
    variants: [
      { id: 'v1', color: 'ステンレス', colorCode: '624-202', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 53000 },
      { plan: 'HOURS', price: 53000 }
    ]
  },

  // ===== 外部設備 - 地上波TVアンテナ =====
  {
    id: 'ext-facility-tv-antenna',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: 'アンテナ',
    name: '地上波TVアンテナ',
    manufacturer: '標準',
    modelNumber: 'TV-ANTENNA',
    unit: 'set',
    isOption: true,
    description: '地上波TVアンテナ ※ブースター含む',
    variants: [
      { id: 'v1', color: 'オフホワイト', colorCode: 'オフホワイト', images: [] },
      { id: 'v2', color: 'ライトブラウン', colorCode: 'ライトブラウン', images: [] },
      { id: 'v3', color: 'ブラックブラウン', colorCode: 'ブラックブラウン', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 95000 },
      { plan: 'HOURS', price: 95000 }
    ]
  },

  // ===== 外部設備 - BSアンテナ =====
  {
    id: 'ext-facility-bs-antenna',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: 'アンテナ',
    name: 'BSアンテナ',
    manufacturer: '標準',
    modelNumber: 'BS-ANTENNA',
    unit: 'set',
    isOption: true,
    description: 'BSアンテナ TVアンテナと併用',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 80000 },
      { plan: 'HOURS', price: 80000 }
    ]
  },

  // ===== 外部設備 - 電気メーターボックス =====
  {
    id: 'ext-facility-meter-box',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: '電気メーターボックス',
    manufacturer: '標準',
    modelNumber: 'METER-BOX',
    unit: 'piece',
    isOption: false,
    description: '電気メーターボックス',
    variants: [
      { id: 'v1', color: 'ホワイト/シルバー', colorCode: 'ホワイト/シルバー', images: [] },
      { id: 'v2', color: 'シャンパンブロンズ', colorCode: 'シャンパンブロンズ', images: [] },
      { id: 'v3', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== エコキュート =====
  {
    id: 'ext-ecocute-standard',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート370L（標準）',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-S37LQS',
    unit: 'piece',
    isOption: false,
    description: 'Sシリーズ 370L 標準（外部設置）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== エコキュート 460L =====
  {
    id: 'ext-ecocute-460l',
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
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 }
    ]
  },

  // ===== エコキュート ウルトラ高圧 370L =====
  {
    id: 'ext-ecocute-ultra-370l',
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
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 }
    ]
  },

  // ===== エコキュート ウルトラ高圧 460L =====
  {
    id: 'ext-ecocute-ultra-460l',
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
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 145000 },
      { plan: 'HOURS', price: 145000 }
    ]
  },

  // ===== エコキュート 370L 追加 =====
  {
    id: 'ext-ecocute-370l-add',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート370L（標準）追加',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-S37LQS-ADD',
    unit: 'piece',
    isOption: true,
    description: 'エコキュート370L（標準）を追加',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 350000 },
      { plan: 'HOURS', price: 350000 }
    ]
  },

  // ===== エコキュート 室内設置 =====
  {
    id: 'ext-ecocute-indoor',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート設置オプション',
    name: 'エコキュート室内設置に変更',
    manufacturer: 'Panasonic',
    modelNumber: 'ECOCUTE-INDOOR',
    unit: 'piece',
    isOption: true,
    description: '室内設置に変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 }
    ]
  },

  // ===== エコキュート インナーガレージ設置 =====
  {
    id: 'ext-ecocute-garage',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート設置オプション',
    name: 'エコキュート インナーガレージ設置に変更',
    manufacturer: 'Panasonic',
    modelNumber: 'ECOCUTE-GARAGE',
    unit: 'piece',
    isOption: true,
    description: 'インナーガレージ設置に変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 }
    ]
  },

  // ===== エコキュート 塩害用 =====
  {
    id: 'ext-ecocute-salt',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュートオプション',
    name: '塩害用エコキュートに変更',
    manufacturer: 'Panasonic',
    modelNumber: 'ECOCUTE-SALT',
    unit: 'piece',
    isOption: true,
    description: '塩害用エコキュートに変更 パワフル高圧薄型は非対応',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 }
    ]
  },

  // ===== エコキュート 370L薄型タイプ =====
  {
    id: 'ext-ecocute-370l-slim',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート370L薄型タイプ',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-H37LQS',
    unit: 'piece',
    isOption: true,
    description: 'Hシリーズ 370L薄型タイプに変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 }
    ]
  },

  // ===== エコキュート 460L薄型タイプ =====
  {
    id: 'ext-ecocute-460l-slim',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート460L薄型タイプ',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-H46LQS',
    unit: 'piece',
    isOption: true,
    description: 'Hシリーズ 460L薄型タイプに変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 145000 },
      { plan: 'HOURS', price: 145000 }
    ]
  },

  // ===== エコキュート 370Lパワフル高圧薄型 =====
  {
    id: 'ext-ecocute-370l-powerful-slim',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート370Lパワフル高圧薄型タイプ',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-WU37LQS',
    unit: 'piece',
    isOption: true,
    description: 'Wシリーズ 370Lパワフル高圧薄型タイプに変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 220000 },
      { plan: 'HOURS', price: 220000 }
    ]
  },

  // ===== エコキュート 460Lパワフル高圧薄型 =====
  {
    id: 'ext-ecocute-460l-powerful-slim',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート460Lパワフル高圧薄型タイプ',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-WU46LQS',
    unit: 'piece',
    isOption: true,
    description: 'Wシリーズ 460Lパワフル高圧薄型タイプに変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 270000 },
      { plan: 'HOURS', price: 270000 }
    ]
  },

  // ===== おひさまエコキュート DAIKIN 370L =====
  {
    id: 'ext-ecocute-daikin-370l',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'おひさまエコキュート',
    name: 'おひさまエコキュート パワフル高圧370L',
    manufacturer: 'DAIKIN',
    modelNumber: 'EQA37YFPV',
    unit: 'piece',
    isOption: true,
    description: 'おひさまエコキュート パワフル高圧370L お掃除浴槽を採用する場合必須',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 152000 },
      { plan: 'HOURS', price: 152000 }
    ]
  },

  // ===== おひさまエコキュート DAIKIN 460L =====
  {
    id: 'ext-ecocute-daikin-460l',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'おひさまエコキュート',
    name: 'おひさまエコキュート パワフル高圧460L',
    manufacturer: 'DAIKIN',
    modelNumber: 'EQA46YFPV',
    unit: 'piece',
    isOption: true,
    description: 'おひさまエコキュート パワフル高圧460L お掃除浴槽を採用する場合必須',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 196000 },
      { plan: 'HOURS', price: 196000 }
    ]
  },

  // ===== ナイアガラ出湯 日立 370L =====
  {
    id: 'ext-ecocute-hitachi-370l',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'ナイアガラ出湯',
    name: 'ナイアガラ出湯 エコキュート370L（1・2階設置）',
    manufacturer: '日立',
    modelNumber: 'BHP-FV37WD',
    unit: 'piece',
    isOption: true,
    description: 'ナイアガラ出湯 エコキュート370L 浴槽1・2階設置',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 212000 },
      { plan: 'HOURS', price: 212000 }
    ]
  },

  // ===== ナイアガラ出湯 日立 370L 3階設置 =====
  {
    id: 'ext-ecocute-hitachi-370l-3f',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'ナイアガラ出湯',
    name: 'ナイアガラ出湯 エコキュート370L（3階設置）',
    manufacturer: '日立',
    modelNumber: 'BHP-FV37WD-3F',
    unit: 'piece',
    isOption: true,
    description: 'ナイアガラ出湯 エコキュート370L 浴槽3階設置',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 236000 },
      { plan: 'HOURS', price: 236000 }
    ]
  },

  // ===== 換気ガラリ =====
  {
    id: 'ext-ventilation-louver',
    categoryId: 'ventilation',
    categoryName: '換気システム',
    subcategory: '換気ガラリ',
    name: '換気ガラリ',
    manufacturer: '標準',
    modelNumber: 'TRD-100xx-T',
    unit: 'piece',
    isOption: false,
    description: '換気ガラリ',
    variants: [
      { id: 'v1', color: 'シルバーメタリック', colorCode: 'TRD-100SM-T', images: [] },
      { id: 'v2', color: 'クリア', colorCode: 'TRD-100HL-T', images: [] },
      { id: 'v3', color: 'アイボリー', colorCode: 'TRD-100IV-T', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'TRD-100BK-T', images: [] },
      { id: 'v5', color: 'ブラウン', colorCode: 'TRD-100BR-T', images: [] },
      { id: 'v6', color: 'ホワイト', colorCode: 'TRD-100WH-T', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== サイクロン給気フード =====
  {
    id: 'ext-cyclone-hood',
    categoryId: 'ventilation',
    categoryName: '換気システム',
    subcategory: 'サイクロン給気フード',
    name: 'Panasonic換気システム用 サイクロン給気フード',
    manufacturer: 'Panasonic',
    modelNumber: 'CYCLONE-HOOD',
    unit: 'piece',
    isOption: false,
    description: '計算値・地域により適正のものを採用',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: 'シルバー', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: 'ブラック', images: [] },
      { id: 'v3', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== DSDD給気口 カラー変更 =====
  {
    id: 'ext-dsdd-color-change',
    categoryId: 'ventilation',
    categoryName: '換気システム',
    subcategory: 'DSDD給気口',
    name: 'DSDD給気口 カラー変更',
    manufacturer: '標準',
    modelNumber: 'DSDD-COLOR',
    unit: 'piece',
    isOption: true,
    description: 'DSDD換気システム採用時 焼付塗装にて黒に変更可',
    variants: [
      { id: 'v1', color: 'ブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 25000 },
      { plan: 'HOURS', price: 25000 }
    ]
  },

  // ===== 太陽光 中継ポール =====
  {
    id: 'ext-solar-relay-pole',
    categoryId: 'solar',
    categoryName: '太陽光・蓄電池',
    subcategory: '太陽光設備',
    name: '中継ポール',
    manufacturer: '標準',
    modelNumber: 'RELAY-POLE',
    unit: 'piece',
    isOption: true,
    description: '太陽光用中継ポール',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 250000 },
      { plan: 'HOURS', price: 250000 }
    ]
  },

  // ===== スリムダクト =====
  {
    id: 'ext-slim-duct',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: 'スリムダクト',
    name: 'スリムダクト',
    manufacturer: '標準',
    modelNumber: 'SLIM-DUCT',
    unit: 'set',
    isOption: false,
    description: '太陽光設置の場合に使用',
    variants: [
      { id: 'v1', color: 'ホワイト（W）', colorCode: 'W', images: [] },
      { id: 'v2', color: 'アイボリー（I）', colorCode: 'I', images: [] },
      { id: 'v3', color: 'ブラック（K）', colorCode: 'K', images: [] },
      { id: 'v4', color: 'グレー（G）', colorCode: 'G', images: [] },
      { id: 'v5', color: 'ブラウン（B）', colorCode: 'B', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== パラペット笠木 =====
  {
    id: 'ext-parapet-coping',
    categoryId: 'gutter',
    categoryName: '外部建材',
    subcategory: 'パラペット笠木',
    name: 'パラペット笠木',
    manufacturer: '標準',
    modelNumber: 'PARAPET-COPING',
    unit: 'set',
    isOption: false,
    description: 'パラペット笠木',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: 'ブラック', images: [] },
      { id: 'v3', color: 'プラチナステン', colorCode: 'プラチナステン', images: [] },
      { id: 'v4', color: 'ブラウン', colorCode: 'ブラウン', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== バルコニー笠木 =====
  {
    id: 'ext-balcony-coping',
    categoryId: 'gutter',
    categoryName: '外部建材',
    subcategory: 'バルコニー笠木',
    name: 'バルコニー笠木',
    manufacturer: '標準',
    modelNumber: 'BALCONY-COPING',
    unit: 'set',
    isOption: false,
    description: 'バルコニー笠木',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: 'ブラック', images: [] },
      { id: 'v3', color: 'プラチナステン', colorCode: 'プラチナステン', images: [] },
      { id: 'v4', color: 'ブラウン', colorCode: 'ブラウン', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 土台水切 =====
  {
    id: 'ext-foundation-flashing',
    categoryId: 'gutter',
    categoryName: '外部建材',
    subcategory: '土台水切',
    name: '土台水切',
    manufacturer: '城東テクノ',
    modelNumber: 'WKF-N18',
    unit: 'set',
    isOption: false,
    description: '土台水切',
    variants: [
      { id: 'v1', color: 'シルキーホワイト', colorCode: 'SW', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: 'BK', images: [] },
      { id: 'v3', color: 'ステンカラー', colorCode: 'SC', images: [] },
      { id: 'v4', color: 'ファッションブラウン', colorCode: 'FB', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== ジョイントボックス =====
  {
    id: 'ext-joint-box',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: 'スマート防雨型ジョイントボックス',
    manufacturer: 'Panasonic',
    modelNumber: 'WK4201S',
    unit: 'piece',
    isOption: false,
    description: 'スマート防雨型ジョイントボックス（ノックアウトG22〈φ27〉×3）',
    variants: [
      { id: 'v1', color: 'ミルキーホワイト', colorCode: 'ミルキーホワイト', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 換気フード（キッチン・浴室） =====
  {
    id: 'ext-ventilation-hood-kb',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '換気フード',
    name: '換気フード（キッチン・浴室）TRDシリーズ',
    manufacturer: 'Panasonic',
    modelNumber: 'TRD',
    unit: 'piece',
    isOption: false,
    description: '換気フード（キッチン・浴室）TRDシリーズ',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: 'シルバー', images: [] },
      { id: 'v2', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v3', color: 'ブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== ナノバブル発生装置 =====
  {
    id: 'ext-nanobubble',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: 'ナノバブル発生装置 Beauty Aqua（20A）',
    manufacturer: '創建エース',
    modelNumber: 'BA-20A',
    unit: 'piece',
    isOption: true,
    description: 'ナノバブル発生装置 Beauty Aqua（20A）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 }
    ]
  },

  // ===== スッキリポール スタンダードタイプ（設計カテゴリ） =====
  {
    id: 'ext-sukkiri-pole-standard',
    categoryId: 'sukkiri-pole',
    categoryName: '外部設備',
    subcategory: 'スッキリポール',
    name: '中継ポール（スッキリポール スタンダードタイプ）電気メーター一体型',
    manufacturer: 'Panasonic',
    modelNumber: 'DDP8-STD',
    unit: 'piece',
    isOption: true,
    description: '中継ポール（スッキリポール スタンダードタイプ）電気メーター一体型',
    variants: [
      { id: 'v1', color: 'アイボリー', colorCode: 'アイボリー', images: [] },
      { id: 'v2', color: 'コーヒーブラウン', colorCode: 'コーヒーブラウン', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 520000 },
      { plan: 'HOURS', price: 520000 }
    ]
  },

  // ===== スッキリポール スマートタイプ（設計カテゴリ） =====
  {
    id: 'ext-sukkiri-pole-smart',
    categoryId: 'sukkiri-pole',
    categoryName: '外部設備',
    subcategory: 'スッキリポール',
    name: '中継ポール（スッキリポール スマートタイプ）電気メーター一体型',
    manufacturer: 'Panasonic',
    modelNumber: 'DDP8-SMART',
    unit: 'piece',
    isOption: true,
    description: '中継ポール（スッキリポール スマートタイプ）電気メーター一体型',
    variants: [
      { id: 'v1', color: 'ホワイトシルバー', colorCode: 'ホワイトシルバー', images: [] },
      { id: 'v2', color: 'シャンパンブロンズ', colorCode: 'シャンパンブロンズ', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 580000 },
      { plan: 'HOURS', price: 580000 }
    ]
  },

  // ===== TV視聴 - 地上波TVアンテナのみ =====
  {
    id: 'ext-tv-antenna-only',
    categoryId: 'tv-viewing',
    categoryName: 'TV視聴',
    subcategory: 'TV視聴',
    name: '地上波TVアンテナのみ',
    manufacturer: '標準',
    modelNumber: 'TV-ANTENNA-ONLY',
    unit: 'set',
    isOption: true,
    description: '地上波TVアンテナ設置工事一式',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 80000 },
      { plan: 'HOURS', price: 80000 }
    ]
  },

  // ===== TV視聴 - 地上波TVアンテナ＋BSアンテナ =====
  {
    id: 'ext-tv-antenna-bs',
    categoryId: 'tv-viewing',
    categoryName: 'TV視聴',
    subcategory: 'TV視聴',
    name: '地上波TVアンテナ＋BSアンテナ',
    manufacturer: '標準',
    modelNumber: 'TV-ANTENNA-BS',
    unit: 'set',
    isOption: true,
    description: '地上波TVアンテナ＋BSアンテナ設置工事一式',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 95000 },
      { plan: 'HOURS', price: 95000 }
    ]
  },

  // ===== TV視聴 - 光ケーブル（Gハウス提携会社紹介） =====
  {
    id: 'ext-tv-fiber-ghouse',
    categoryId: 'tv-viewing',
    categoryName: 'TV視聴',
    subcategory: 'TV視聴',
    name: '光ケーブル（Gハウス提携会社紹介）',
    manufacturer: 'Gハウス提携',
    modelNumber: 'TV-FIBER-GHOUSE',
    unit: 'set',
    isOption: false,
    description: 'Gハウス提携会社をご紹介いたします',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== TV視聴 - 光ケーブル（自分で業者を探す） =====
  {
    id: 'ext-tv-fiber-self',
    categoryId: 'tv-viewing',
    categoryName: 'TV視聴',
    subcategory: 'TV視聴',
    name: '光ケーブル（自分で業者を探す）',
    manufacturer: 'お客様手配',
    modelNumber: 'TV-FIBER-SELF',
    unit: 'set',
    isOption: false,
    description: 'お客様ご自身で業者を手配されます',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== TV視聴 - TV視聴不要 =====
  {
    id: 'ext-tv-not-needed',
    categoryId: 'tv-viewing',
    categoryName: 'TV視聴',
    subcategory: 'TV視聴',
    name: 'TV視聴不要',
    manufacturer: '不要',
    modelNumber: 'TV-NOT-NEEDED',
    unit: 'set',
    isOption: false,
    description: 'TV視聴の設備は不要です',
    variants: [
      { id: 'v1', color: '不要', colorCode: '不要', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
];
