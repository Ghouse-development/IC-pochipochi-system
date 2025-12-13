// エクステリア（外装）製品データ追加分 - FACADE Style Book
// 色バリアント統合版 - 1製品 = 複数の色バリアント
import type { Product } from '../types/product';

export const exteriorProductsAdditional: Product[] = [
  // ===== 外壁 - ニチハ シャルムロックV =====
  {
    id: 'ext-wall-charm-rock',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'シャルムロックV',
    name: 'シャルムロックV コンティ',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA28xxFK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'コンティMGホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'コンティMGブラック', colorCode: 'ブラック', images: [] },
      { id: 'v3', color: 'コンティMGアッシュ', colorCode: 'グレー', images: [] },
      { id: 'v4', color: 'コンティMGアイボリー', colorCode: 'アイボリー', images: [] },
      { id: 'v5', color: 'コンティMGブラウン', colorCode: 'ブラウン', images: [] },
      { id: 'v6', color: 'コンティMGグレー', colorCode: 'グレー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ ディスタンエイドV =====
  {
    id: 'ext-wall-distance-aid',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ディスタンエイドV',
    name: 'ディスタンエイドV',
    manufacturer: 'ニチハ',
    modelNumber: 'EFA44xxYK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'ルフィネMGホワイト30', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'ストレムMGネイビー30', colorCode: 'ネイビー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ スプリットストーン調V =====
  {
    id: 'ext-wall-split-stone',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'スプリットストーン調V',
    name: 'スプリットストーン調V アプラ',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX16xxNK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'アプラMGクリーム', colorCode: 'クリーム', images: [] },
      { id: 'v2', color: 'アプラMGワイン', colorCode: 'ブラウン', images: [] },
      { id: 'v3', color: 'アプラMGキャロット', colorCode: 'オレンジ', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - ニチハ コルモストーン調プレミアム =====
  {
    id: 'ext-wall-colmo-premium',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'コルモストーン調プレミアム',
    name: 'コルモストーン調プレミアム フォンド',
    manufacturer: 'ニチハ',
    modelNumber: 'ELG33xxNK',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'フォンドMGアッシュグレー30', colorCode: 'グレー', images: [] },
      { id: 'v2', color: 'フォンドMGネイビー30', colorCode: 'ネイビー', images: [] },
      { id: 'v3', color: 'フォンドMGホワイト30', colorCode: 'ホワイト', images: [] },
      { id: 'v4', color: 'フォンドMGブラウン30', colorCode: 'ブラウン', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 },
      { plan: 'LIFE+', price: 4500 },
      { plan: 'LIFE', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ リーガストーン調プレミアム =====
  {
    id: 'ext-wall-regas-premium',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'リーガストーン調プレミアム',
    name: 'リーガストーン調プレミアム ランダ',
    manufacturer: 'ニチハ',
    modelNumber: 'ELG34xxNK',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'ランダMGチャコール30', colorCode: 'チャコール', images: [] },
      { id: 'v2', color: 'ランダMGホワイト30', colorCode: 'ホワイト', images: [] },
      { id: 'v3', color: 'ランダMGベージュ30', colorCode: 'ベージュ', images: [] },
      { id: 'v4', color: 'ランダMGグレージュ30', colorCode: 'グレー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 },
      { plan: 'LIFE+', price: 4500 },
      { plan: 'LIFE', price: 4500 }
    ]
  },

  // ===== 外壁 - ニチハ リントロック調プレミアム =====
  {
    id: 'ext-wall-lintrock-premium',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'リントロック調プレミアム',
    name: 'リントロック調プレミアム ラタル',
    manufacturer: 'ニチハ',
    modelNumber: 'ELG1xxxNK',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'ラタルMGホワイト30', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'ラタルMGベージュ30', colorCode: 'ベージュ', images: [] },
      { id: 'v3', color: 'ラタルMGブラウン30', colorCode: 'ブラウン', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 },
      { plan: 'LIFE+', price: 4500 },
      { plan: 'LIFE', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW マグートプレミアム =====
  {
    id: 'ext-wall-magut-premium',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'マグートプレミアム',
    name: 'マグートプレミアム ルフィネ',
    manufacturer: 'KMEW',
    modelNumber: 'ELG72xxK',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'ルフィネMGクリアホワイト30', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'ルフィネMGグレー30', colorCode: 'グレー', images: [] },
      { id: 'v3', color: 'ルフィネMGブラック30', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 },
      { plan: 'LIFE+', price: 4500 },
      { plan: 'LIFE', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW フラークプレミアム =====
  {
    id: 'ext-wall-flark-premium',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'フラークプレミアム',
    name: 'フラークプレミアム プレス',
    manufacturer: 'KMEW',
    modelNumber: 'ELG9xxFK/YK',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'プレスMGグレー30', colorCode: 'グレー', images: [] },
      { id: 'v2', color: 'プレスMGホワイト30', colorCode: 'ホワイト', images: [] },
      { id: 'v3', color: 'プレスMGブラック30', colorCode: 'ブラック', images: [] },
      { id: 'v4', color: 'プレスMGジャーモン30', colorCode: 'ベージュ', images: [] },
      { id: 'v5', color: 'プレスMGピンキー30', colorCode: 'ピンク', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 },
      { plan: 'LIFE+', price: 4500 },
      { plan: 'LIFE', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW フィーノ調プレミアム =====
  {
    id: 'ext-wall-fino-premium',
    categoryId: 'exterior-wall-premium',
    categoryName: '外壁',
    subcategory: 'フィーノ調プレミアム',
    name: 'フィーノ調プレミアム',
    manufacturer: 'KMEW',
    modelNumber: 'ELG3xxFK',
    unit: 'sqm',
    isOption: true,
    description: 'プレミアム外壁 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'フロストMGホワイト30', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'リペルMGクリアホワイト30', colorCode: 'ホワイト', images: [] },
      { id: 'v3', color: 'パティMGホワイト30', colorCode: 'ホワイト', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 },
      { plan: 'LIFE+', price: 4500 },
      { plan: 'LIFE', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW フラットウォール =====
  {
    id: 'ext-wall-flat-wall',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'フラットウォール',
    name: 'フラットウォール',
    manufacturer: 'KMEW',
    modelNumber: 'EP52xxNK',
    unit: 'sqm',
    isOption: false,
    description: 'フラットデザイン外壁',
    variants: [
      { id: 'v1', color: 'アグレアMGピュアホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'プリミエMGホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v3', color: 'アグレアMGベージュ', colorCode: 'ベージュ', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - KMEW ルビドフラット =====
  {
    id: 'ext-wall-rubido-flat',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ルビドフラット',
    name: 'ルビドフラット',
    manufacturer: 'KMEW',
    modelNumber: 'EQG4xxxK',
    unit: 'sqm',
    isOption: false,
    description: 'ルビドフラット 機密性能の観点から窓なしを推奨',
    variants: [
      { id: 'v1', color: 'ルビドMGピュアホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'ルビドMGオリアンホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v3', color: 'ルビドMGパステルグレー', colorCode: 'ライトグレー', images: [] },
      { id: 'v4', color: 'ルビドMGパールグレー', colorCode: 'パールグレー', images: [] },
      { id: 'v5', color: 'ルビドMGエアグレー', colorCode: 'グレー', images: [] },
      { id: 'v6', color: 'ルビドMGエテブラウン', colorCode: 'ブラウン', images: [] },
      { id: 'v7', color: 'ルビドMGエデブラウン', colorCode: 'ダークブラウン', images: [] },
      { id: 'v8', color: 'ルビドMGアブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 外壁 - KMEW トリル =====
  {
    id: 'ext-wall-trill',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'トリル',
    name: 'トリル',
    manufacturer: 'KMEW',
    modelNumber: 'EFA32xGK/TK',
    unit: 'sqm',
    isOption: false,
    description: 'トリル外壁',
    variants: [
      { id: 'v1', color: 'リベルMGクリアホワイトII', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'プリミエMGホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v3', color: 'カルモMGシルバー', colorCode: 'シルバー', images: [] },
      { id: 'v4', color: 'プレコMGネイビー', colorCode: 'ネイビー', images: [] },
      { id: 'v5', color: 'ノーマMGチャコール', colorCode: 'チャコール', images: [] },
      { id: 'v6', color: 'チャボMGチタンレッド', colorCode: 'レッド', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== ガレージシャッター =====
  {
    id: 'ext-garage-sunauto',
    categoryId: 'garage-shutter',
    categoryName: 'ガレージシャッター',
    subcategory: 'ガレージシャッター',
    name: 'サンオートハイスピード',
    manufacturer: '三和シャッター',
    modelNumber: 'SUN-AUTO-HS',
    unit: 'piece',
    isOption: true,
    description: '電動シャッター 開放約13秒（高さ2.5mの場合） 障害物検知装置付き',
    variants: [
      { id: 'v1', color: 'ステンカラー', colorCode: 'シルバー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 540000 },
      { plan: 'HOURS', price: 540000 },
      { plan: 'LIFE+', price: 540000 },
      { plan: 'LIFE', price: 540000 }
    ]
  },
  {
    id: 'ext-garage-ifudodo',
    categoryId: 'garage-shutter',
    categoryName: 'ガレージシャッター',
    subcategory: 'ガレージシャッター',
    name: '威風堂々',
    manufacturer: '三和シャッター',
    modelNumber: 'IFU-DODO',
    unit: 'piece',
    isOption: true,
    description: 'オーバースライダー方式 開放約10秒（高さ2.5mの場合） 障害物検知装置付き W2550 H2200',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: 'シルバー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 1290000 },
      { plan: 'HOURS', price: 1290000 },
      { plan: 'LIFE+', price: 1290000 },
      { plan: 'LIFE', price: 1290000 }
    ]
  },

  // ===== 庇 =====
  {
    id: 'ext-hisashi-alfin',
    categoryId: 'hisashi',
    categoryName: '庇',
    subcategory: 'アルミ庇',
    name: 'アルフィン庇',
    manufacturer: 'アルフィン',
    modelNumber: 'AD2S/AF95',
    unit: 'piece',
    isOption: true,
    description: '庇（W1800サイズ）',
    variants: [
      { id: 'v1', color: 'ステンカラー（AD2S）', colorCode: 'シルバー', images: [] },
      { id: 'v2', color: 'ヒッコリー（AF95）', colorCode: 'ブラウン', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 258000 },
      { plan: 'HOURS', price: 258000 },
      { plan: 'LIFE+', price: 258000 },
      { plan: 'LIFE', price: 258000 }
    ]
  },

  // ===== APW430（トリプルガラス窓） =====
  {
    id: 'ext-window-apw430-upgrade',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430',
    name: 'APW430',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430',
    unit: 'piece',
    isOption: true,
    description: '樹脂サッシ アルゴンガス トリプルガラス 熱貫流率0.90W/(㎡・K) ※LACIE/HOURS標準、LIFE+/LIFEオプション',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'プラチナステン', colorCode: 'プラチナステン', images: [] },
      { id: 'v3', color: 'ブラウン', colorCode: 'ブラウン', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },

  // ===== 外部設備追加 =====
  {
    id: 'ext-facility-antenna-tv',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: 'アンテナ',
    name: '地上波TVアンテナ',
    manufacturer: '標準',
    modelNumber: 'TV-ANTENNA',
    unit: 'piece',
    isOption: true,
    description: '地上波TVアンテナ ブースター含む',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 95000 },
      { plan: 'HOURS', price: 95000 },
      { plan: 'LIFE+', price: 95000 },
      { plan: 'LIFE', price: 95000 }
    ]
  },
  {
    id: 'ext-facility-antenna-bs',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: 'アンテナ',
    name: 'BSアンテナ',
    manufacturer: '標準',
    modelNumber: 'BS-ANTENNA',
    unit: 'piece',
    isOption: true,
    description: 'BSアンテナ TVアンテナ＋80,000円',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 80000 },
      { plan: 'HOURS', price: 80000 },
      { plan: 'LIFE+', price: 80000 },
      { plan: 'LIFE', price: 80000 }
    ]
  },
  {
    id: 'ext-facility-camera-wireless',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '防犯カメラ',
    name: 'センサーライト付屋外ワイヤレスカメラ',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-WD813K',
    unit: 'piece',
    isOption: true,
    description: 'センサーライト付屋外ワイヤレスカメラ',
    variants: [
      { id: 'v1', color: '標準', colorCode: '標準', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 },
      { plan: 'LIFE+', price: 120000 },
      { plan: 'LIFE', price: 120000 }
    ]
  },

  // ===== ポーチタイル追加 =====
  {
    id: 'ext-porch-mortar',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'モルタル',
    name: 'モルタル金鏝抑え',
    manufacturer: '標準',
    modelNumber: 'MORTAR',
    unit: 'sqm',
    isOption: false,
    description: 'モルタル金鏝仕上げ 標準1.8m×1.8m 将来的にヘアクラックが起こる可能性あり',
    variants: [
      { id: 'v1', color: 'グレー', colorCode: 'グレー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'ext-porch-nature2',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'ネイチャーⅡ',
    name: 'ネイチャーⅡ',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'MSY-R30xx',
    unit: 'sqm',
    isOption: true,
    description: '300×300タイル',
    variants: [
      { id: 'v1', color: 'MSY-R3010', colorCode: 'ベージュ', images: [] },
      { id: 'v2', color: 'MSY-R3020', colorCode: 'グレー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 22000 },
      { plan: 'LIFE+', price: 22000 },
      { plan: 'LIFE', price: 22000 }
    ]
  },
  {
    id: 'ext-porch-vespa',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'ベスパ',
    name: 'ベスパ',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-300/VSP-SAx',
    unit: 'sqm',
    isOption: true,
    description: '300×300タイル',
    variants: [
      { id: 'v1', color: 'VSP-SA1', colorCode: 'ベージュ', images: [] },
      { id: 'v2', color: 'VSP-SA2', colorCode: 'グレー', images: [] },
      { id: 'v3', color: 'VSP-SA3', colorCode: 'ダークグレー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 22000 },
      { plan: 'LIFE+', price: 22000 },
      { plan: 'LIFE', price: 22000 }
    ]
  }
];
