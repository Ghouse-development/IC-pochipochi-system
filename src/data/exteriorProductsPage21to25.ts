// エクステリア（外装）製品データ - ページ21-25追加分
// 色バリアント統合版
import type { Product } from '../types/product';

export const exteriorProductsPage21to25: Product[] = [
  // ===== 21ページ - ポーチ ランドストン 600角 =====
  {
    id: 'ext-porch-landstone-600',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'ランドストン',
    name: 'ランドストン 600角',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'CRD-X39xxG',
    unit: 'sqm',
    isOption: true,
    description: '600×600 岩面タイル ※外装標準品からの変更差額',
    variants: [
      { id: 'v1', color: 'CRD-X3910G', colorCode: '', images: [] },
      { id: 'v2', color: 'CRD-X3920G', colorCode: '', images: [] },
      { id: 'v3', color: 'CRD-X3930G', colorCode: '', images: [] },
      { id: 'v4', color: 'CRD-X3940G', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },

  // ===== 21ページ - ポーチ ランドストン 600×300 =====
  {
    id: 'ext-porch-landstone-630',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'ランドストン',
    name: 'ランドストン 600×300',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'CRD-U39xxG',
    unit: 'sqm',
    isOption: true,
    description: '600×300 岩面タイル ※外装標準品からの変更差額',
    variants: [
      { id: 'v1', color: 'CRD-U3910G', colorCode: '', images: [] },
      { id: 'v2', color: 'CRD-U3920G', colorCode: '', images: [] },
      { id: 'v3', color: 'CRD-U3930G', colorCode: '', images: [] },
      { id: 'v4', color: 'CRD-U3940G', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },

  // ===== 21ページ - ポーチ ピエトラソーニ 600角 =====
  {
    id: 'ext-porch-pietra-600',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'ピエトラソーニ',
    name: 'ピエトラソーニ 600角',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'PAN-X81xxG',
    unit: 'sqm',
    isOption: true,
    description: '600×600 粗目タイル ※外装標準品からの変更差額',
    variants: [
      { id: 'v1', color: 'PAN-X8110G', colorCode: '', images: [] },
      { id: 'v2', color: 'PAN-X8120G', colorCode: '', images: [] },
      { id: 'v3', color: 'PAN-X8130G', colorCode: '', images: [] },
      { id: 'v4', color: 'PAN-X8140G', colorCode: '', images: [] },
      { id: 'v5', color: 'PAN-X8150G', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },

  // ===== 21ページ - ポーチ ピエトラソーニ 600×300 =====
  {
    id: 'ext-porch-pietra-630',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'ピエトラソーニ',
    name: 'ピエトラソーニ 600×300',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'PAN-U81xxG',
    unit: 'sqm',
    isOption: true,
    description: '600×300 粗目タイル ※外装標準品からの変更差額',
    variants: [
      { id: 'v1', color: 'PAN-U8110G', colorCode: '', images: [] },
      { id: 'v2', color: 'PAN-U8120G', colorCode: '', images: [] },
      { id: 'v3', color: 'PAN-U8130G', colorCode: '', images: [] },
      { id: 'v4', color: 'PAN-U8140G', colorCode: '', images: [] },
      { id: 'v5', color: 'PAN-U8150G', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },

  // ===== 22ページ - 横樋 =====
  {
    id: 'ext-gutter-horizontal',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '横樋',
    name: 'ファインスケアNF-I型',
    manufacturer: 'Panasonic',
    modelNumber: 'MQFx180',
    unit: 'set',
    isOption: false,
    description: '横樋',
    variants: [
      { id: 'v1', color: 'しんちゃ', colorCode: 'しんちゃ', images: [] },
      { id: 'v2', color: 'モダンベージュ', colorCode: 'ベージュ', images: [] },
      { id: 'v3', color: 'オークブラウン', colorCode: 'オークブラウン', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 22ページ - 縦樋 =====
  {
    id: 'ext-gutter-vertical',
    categoryId: 'gutter',
    categoryName: '樋',
    subcategory: '縦樋',
    name: 'S30',
    manufacturer: 'Panasonic',
    modelNumber: 'KBPx261K',
    unit: 'set',
    isOption: false,
    description: '縦樋',
    variants: [
      { id: 'v1', color: 'しんちゃ', colorCode: 'しんちゃ', images: [] },
      { id: 'v2', color: 'モダンベージュ', colorCode: 'ベージュ', images: [] },
      { id: 'v3', color: 'オークブラウン', colorCode: 'オークブラウン', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 22ページ - 軒天 エンボス =====
  {
    id: 'ext-soffit-emboss',
    categoryId: 'soffit',
    categoryName: '軒天',
    subcategory: 'エンボス',
    name: 'エンボス',
    manufacturer: '神島化学',
    modelNumber: 'EMBOSS-xx',
    unit: 'sqm',
    isOption: false,
    description: '軒天材',
    variants: [
      { id: 'v1', color: 'ミルトアイボリー', colorCode: 'アイボリー', images: [] },
      { id: 'v2', color: 'ファインステン', colorCode: 'グレー', images: [] },
      { id: 'v3', color: 'ボルドーブラウン', colorCode: 'ブラウン', images: [] },
      { id: 'v4', color: 'チャコールブラック', colorCode: 'ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ===== 22ページ - 軒天 ラフォーレソレイユ =====
  {
    id: 'ext-soffit-soleil',
    categoryId: 'soffit',
    categoryName: '軒天',
    subcategory: 'ラフォーレソレイユ',
    name: 'ラフォーレソレイユ',
    manufacturer: '神島化学',
    modelNumber: 'LAFORET-SOLEIL-xx',
    unit: 'sqm',
    isOption: true,
    description: '軒天材 ※準耐火仕様の場合、上階に居室が乗っている箇所は採用不可',
    variants: [
      { id: 'v1', color: 'グレイッシュシダー', colorCode: 'グレー', images: [] },
      { id: 'v2', color: 'ナチュラルダーク', colorCode: 'ダークブラウン', images: [] },
      { id: 'v3', color: 'ウォルナット', colorCode: 'ウォールナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 },
      { plan: 'LIFE+', price: 12000 },
      { plan: 'LIFE', price: 12000 }
    ]
  },

  // ===== 22ページ - 軒天 ラフォーレティンバー =====
  {
    id: 'ext-soffit-timber',
    categoryId: 'soffit',
    categoryName: '軒天',
    subcategory: 'ラフォーレティンバー',
    name: 'ラフォーレティンバー',
    manufacturer: '神島化学',
    modelNumber: 'LAFORET-TIMBER-xx',
    unit: 'sqm',
    isOption: true,
    description: '軒天材 ※準耐火仕様の場合、上階に居室が乗っている箇所は採用不可',
    variants: [
      { id: 'v1', color: 'スモークィエロー', colorCode: 'ナチュラル', images: [] },
      { id: 'v2', color: 'キャラメルブラウン', colorCode: 'キャラメルチーク', images: [] },
      { id: 'v3', color: 'レッドブラウン', colorCode: 'チェリー', images: [] },
      { id: 'v4', color: 'チャコール', colorCode: 'チャコール', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 },
      { plan: 'LIFE+', price: 12000 },
      { plan: 'LIFE', price: 12000 }
    ]
  },

  // ===== 24ページ - ガレージシャッター オプション =====
  {
    id: 'ext-garage-opt-bouka',
    categoryId: 'garage-shutter-option',
    categoryName: '電動ガレージシャッター',
    subcategory: 'シャッターオプション',
    name: 'サンオートハイスピード 防火仕様変更',
    manufacturer: '三和シャッター',
    modelNumber: 'SUN-AUTO-HS-BOUKA',
    unit: 'piece',
    isOption: true,
    description: '防火仕様に変更（1台分）',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  },
  {
    id: 'ext-garage-opt-black',
    categoryId: 'garage-shutter-option',
    categoryName: '電動ガレージシャッター',
    subcategory: 'シャッターオプション',
    name: 'サンオートハイスピード スラットカラーリング（ブラック）',
    manufacturer: '三和シャッター',
    modelNumber: 'SUN-AUTO-HS-BLACK',
    unit: 'piece',
    isOption: true,
    description: 'スラットカラーリング（1台分）※ブラックは別途塗装のため傷が目立ちやすい',
    variants: [{ id: 'v1', color: 'ブラック', colorCode: 'ブラック', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  },
  {
    id: 'ext-garage-ifudodo-bouka',
    categoryId: 'garage-shutter-option',
    categoryName: '電動ガレージシャッター',
    subcategory: 'シャッターオプション',
    name: '威風堂々 防火仕様変更',
    manufacturer: '三和シャッター',
    modelNumber: 'IFU-DODO-BOUKA',
    unit: 'piece',
    isOption: true,
    description: '防火仕様に変更（1台分のみ）',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  },
  {
    id: 'ext-garage-ifudodo-wood',
    categoryId: 'garage-shutter-option',
    categoryName: '電動ガレージシャッター',
    subcategory: 'シャッターオプション',
    name: '威風堂々 木目調パネル',
    manufacturer: '三和シャッター',
    modelNumber: 'IFU-DODO-WOOD',
    unit: 'piece',
    isOption: true,
    description: '木目調パネル（1台分）※塗装で木目を表現、内部面はシルバー ※防火未対応',
    variants: [{ id: 'v1', color: '木目調', colorCode: 'ナチュラル', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 660000 },
      { plan: 'HOURS', price: 660000 },
      { plan: 'LIFE+', price: 660000 },
      { plan: 'LIFE', price: 660000 }
    ]
  },

  // ===== 25ページ - 窓オプション APW330 =====
  {
    id: 'ext-window-glass-bouka-w1650',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '防火地域用耐熱強化複層ガラス（網なし）~W1650',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-GLASS-BOUKA-W1650',
    unit: 'piece',
    isOption: true,
    description: '防火地域用 耐熱強化複層ガラス（網なし）~W1650',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 18000 },
      { plan: 'HOURS', price: 18000 },
      { plan: 'LIFE+', price: 18000 },
      { plan: 'LIFE', price: 18000 }
    ]
  },
  {
    id: 'ext-window-glass-bouka-w2560',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '防火地域用耐熱強化複層ガラス（網なし）~W2560',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-GLASS-BOUKA-W2560',
    unit: 'piece',
    isOption: true,
    description: '防火地域用 耐熱強化複層ガラス（網なし）~W2560',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 },
      { plan: 'LIFE+', price: 36000 },
      { plan: 'LIFE', price: 36000 }
    ]
  },
  {
    id: 'ext-window-glass-safety',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '安全合わせガラス（30mil）',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-GLASS-SAFETY',
    unit: 'piece',
    isOption: true,
    description: '安全合わせガラス（30mil）',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  },
  {
    id: 'ext-window-add-22',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '窓追加（22条地域）',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-ADD-22',
    unit: 'piece',
    isOption: true,
    description: '窓追加（22条地域）',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  {
    id: 'ext-window-add-bouka',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '窓追加（準防火・防火地域）',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-ADD-BOUKA',
    unit: 'piece',
    isOption: true,
    description: '窓追加（準防火・防火地域）',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 100000 }
    ]
  },
  {
    id: 'ext-window-hakidashi-22-w1650',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '掃出し窓追加（22条地域）~W1650',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-ADD-HAKIDASHI-22-W1650',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（22条地域）~W1650',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 150000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LIFE+', price: 150000 },
      { plan: 'LIFE', price: 150000 }
    ]
  },
  {
    id: 'ext-window-hakidashi-22-w2560',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '掃出し窓追加（22条地域）~W2560',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-ADD-HAKIDASHI-22-W2560',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（22条地域）~W2560',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LIFE+', price: 200000 },
      { plan: 'LIFE', price: 200000 }
    ]
  },
  {
    id: 'ext-window-hakidashi-bouka-w1650',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '掃出し窓追加（準防火・防火地域）~W1650',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-ADD-HAKIDASHI-BOUKA-W1650',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（準防火・防火地域）~W1650',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LIFE+', price: 200000 },
      { plan: 'LIFE', price: 200000 }
    ]
  },
  {
    id: 'ext-window-hakidashi-bouka-w2560',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '掃出し窓追加（準防火・防火地域）~W2560',
    manufacturer: 'YKKAP',
    modelNumber: 'APW330-ADD-HAKIDASHI-BOUKA-W2560',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（準防火・防火地域）~W2560',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 300000 },
      { plan: 'HOURS', price: 300000 },
      { plan: 'LIFE+', price: 300000 },
      { plan: 'LIFE', price: 300000 }
    ]
  }
];
