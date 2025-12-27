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

  // ===== 外壁 - ニチハ リーガストーン調V =====
  {
    id: 'ext-wall-reega-stone',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'リーガストーン調V',
    name: 'リーガストーン調V',
    manufacturer: 'ニチハ',
    modelNumber: 'EFX34xxCK/NK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'ランダMGプラチナ', colorCode: 'ランダMGプラチナ', images: [] },
      { id: 'v2', color: 'ランダMGブラック', colorCode: 'ランダMGブラック', images: [] },
      { id: 'v3', color: 'ランダMGトリュフ', colorCode: 'ランダMGトリュフ', images: [] },
      { id: 'v4', color: 'ランダMGラテ', colorCode: 'ランダMGラテ', images: [] },
      { id: 'v5', color: 'ランダMGパウダー', colorCode: 'ランダMGパウダー', images: [] },
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
    modelNumber: 'EFX3151FK',
    unit: 'sqm',
    isOption: false,
    description: '横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'エアルMGスノー', colorCode: 'エアルMGスノー', images: [] },
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

  // ===== 外壁 - ニチハ モエンエクセラード16 Fuge =====
  {
    id: 'ext-wall-moene-fuge',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'モエンエクセラード16 Fuge',
    name: 'モエンエクセラード16 Fuge',
    manufacturer: 'ニチハ',
    modelNumber: 'EQS6xxD',
    unit: 'sqm',
    isOption: true,
    description: 'モエンエクセラード16 Fuge',
    variants: [
      { id: 'v1', color: 'モベルクレージュⅡ', colorCode: 'ベージュ', images: [] },
      { id: 'v2', color: 'シュマールベージュⅡ', colorCode: 'サンドベージュ', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - AICA COOL イルミオ =====
  {
    id: 'ext-wall-cool-illuminio',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'COOL イルミオ',
    name: 'COOL イルミオ',
    manufacturer: 'アイカ',
    modelNumber: 'EFM5xxP',
    unit: 'sqm',
    isOption: true,
    description: 'COOL 遮熱性能付き外壁',
    variants: [
      { id: 'v1', color: 'メレホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'メレグレー', colorCode: 'グレー', images: [] },
      { id: 'v3', color: 'メレブラウン', colorCode: 'ブラウン', images: [] },
      { id: 'v4', color: 'メレブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW 新フラット16 =====
  {
    id: 'ext-wall-flat16',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '新フラット16',
    name: '新フラット16 フィエルテ',
    manufacturer: 'KMEW',
    modelNumber: 'NH49xxA',
    unit: 'sqm',
    isOption: true,
    description: 'フラットデザイン外壁（16mm厚）',
    variants: [
      { id: 'v1', color: 'チタンコンクリー', colorCode: 'グレー', images: [] },
      { id: 'v2', color: 'チタンアイロン', colorCode: 'ダークグレー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - KMEW カンターピレ =====
  {
    id: 'ext-wall-canterpile',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'カンターピレ',
    name: 'カンターピレ',
    manufacturer: 'KMEW',
    modelNumber: 'NH5921A',
    unit: 'sqm',
    isOption: true,
    description: 'タイルデザイン外壁（16mm厚）',
    variants: [
      { id: 'v1', color: 'シルクチタンホワイト', colorCode: 'ホワイト', images: [] },
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
    modelNumber: 'ARTE-RCx-GC',
    unit: 'sqm',
    isOption: true,
    description: 'アルテミュール 木目調外壁',
    variants: [
      { id: 'v1', color: 'レッドシダーナチュラル', colorCode: 'レッドシダーナチュラル', images: [] },
      { id: 'v2', color: 'レッドシダーエイジング', colorCode: 'レッドシダーエイジング', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 }
    ]
  },

  // ===== 外壁 - AICA ジョリパットネオ∞ =====
  {
    id: 'ext-wall-jolypate',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: 'ジョリパットネオ∞',
    name: 'ジョリパットネオ∞ エンシェントブリック',
    manufacturer: 'AICA',
    modelNumber: 'JQ-620-Txxxx',
    unit: 'sqm',
    isOption: true,
    description: 'ジョリパットネオ∞ 塗装仕上げ',
    variants: [
      { id: 'v1', color: 'T1010', colorCode: 'クリーム', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 12500 },
      { plan: 'HOURS', price: 12500 }
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
    modelNumber: 'SMGxxG',
    unit: 'sqm',
    isOption: true,
    description: 'SOLIDO 高級外壁材 HOURS/LACIE:5㎡以下は80,000円/式 LIFE+/LIFE:5㎡以下は110,000円/式',
    variants: [
      { id: 'v1', color: '鉄黒（てつぐろ）', colorCode: 'ブラック', images: [] },
      { id: 'v2', color: 'セメント', colorCode: 'グレー', images: [] },
      { id: 'v3', color: '錆茶（さびちゃ）', colorCode: 'ブラウン', images: [] },
      { id: 'v4', color: '灰（はい）', colorCode: 'ダークグレー', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 17000 },
      { plan: 'HOURS', price: 17000 },
      { plan: 'LIFE+', price: 21500 },
      { plan: 'LIFE', price: 21500 }
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
    isOption: false,
    description: '600×600 標準内外部ポーチサイズ：1.8m×1.8m',
    variants: [
      { id: 'v1', color: 'MMP-11', colorCode: 'MMP-11', images: [] },
      { id: 'v2', color: 'MMP-12', colorCode: 'MMP-12', images: [] },
      { id: 'v3', color: 'MMP-13', colorCode: 'MMP-13', images: [] },
      { id: 'v4', color: 'MMP-14', colorCode: 'MMP-14', images: [] },
      { id: 'v5', color: 'MMP-15', colorCode: 'MMP-15', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
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
    unit: 'sqm',
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

  // ===== 樋 - 横樋 =====
  {
    id: 'ext-gutter-horizontal',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '横樋',
    name: 'ファインスケアNF-I型',
    manufacturer: 'Panasonic',
    modelNumber: 'MQFxxxx',
    unit: 'set',
    isOption: false,
    description: '横樋',
    variants: [
      { id: 'v1', color: 'ミルクホワイト', colorCode: 'ミルクホワイト', images: [] },
      { id: 'v2', color: 'パールグレー（しろ）', colorCode: 'パールグレー', images: [] },
      { id: 'v3', color: 'ブラック', colorCode: 'ブラック', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },

  // ===== 樋 - 縦樋 =====
  {
    id: 'ext-gutter-vertical',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '縦樋',
    name: 'S30',
    manufacturer: 'Panasonic',
    modelNumber: 'KBPxxxx',
    unit: 'set',
    isOption: false,
    description: '縦樋',
    variants: [
      { id: 'v1', color: 'ミルクホワイト', colorCode: 'ミルクホワイト', images: [] },
      { id: 'v2', color: 'パールグレー（しろ）', colorCode: 'パールグレー', images: [] },
      { id: 'v3', color: 'ブラック', colorCode: 'ブラック', images: [] },
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
      { id: 'v1', color: 'エンボスホワイト', colorCode: 'エンボスホワイト', images: [] },
      { id: 'v2', color: 'エンボスブラック', colorCode: 'エンボスブラック', images: [] },
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
    modelNumber: 'ARTE-RCN',
    unit: 'sqm',
    isOption: true,
    description: '準耐火仕様の場合、上階に居室が乗っている箇所は採用不可。5㎡までは80,000円/式',
    variants: [
      { id: 'v1', color: 'レッドシダーナチュラル', colorCode: 'レッドシダーナチュラル', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 18000 },
      { plan: 'HOURS', price: 18000 }
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
    description: '樹脂サッシ アルゴンガス ペアガラス 熱貫流率1.31W/(㎡・K)',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'プラチナステン', colorCode: 'プラチナステン', images: [] },
      { id: 'v3', color: 'ブラウン', colorCode: 'ブラウン', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'ブラック', images: [] },
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

  // ===== 玄関ドア - ヴェナートD30 =====
  {
    id: 'ext-door-venato-d30',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30',
    name: 'ヴェナートD30',
    manufacturer: 'YKKAP',
    modelNumber: 'D30-C10N',
    unit: 'piece',
    isOption: false,
    description: '100V電気錠 ポケットキー付き 防火・非防火対応',
    variants: [
      { id: 'v1', color: 'アイスブルーノーチェ', colorCode: 'アイスブルーノーチェ', images: [] },
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
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
];
