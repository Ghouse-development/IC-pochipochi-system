// エクステリア（外装）製品データ - FACADE Style Book 26-29ページ
// 色バリアント統合版
import type { Product } from '../types/product';

export const exteriorProductsPage26to29: Product[] = [
  // ===== 26ページ - APW430 トリプルガラス窓 =====
  {
    id: 'ext-window-apw430',
    categoryId: 'window',
    categoryName: '窓',
    subcategory: 'APW430',
    name: 'APW430',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430',
    unit: 'piece',
    isOption: false,
    description: '樹脂サッシ アルゴンガス トリプルガラス 熱貫流率0.90W/(㎡・K) LACIE/HOURS標準',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'YW', images: [] },
      { id: 'v2', color: 'プラチナステン', colorCode: 'JO', images: [] },
      { id: 'v3', color: 'ブラウン', colorCode: 'J5', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: '3A', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  // APW430 LIFE+/LIFEオプション
  {
    id: 'ext-window-apw430-upgrade',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: 'APW430オプション',
    name: 'APW430へ変更',
    manufacturer: 'YKKAP',
    modelNumber: 'APW430-UPGRADE',
    unit: 'set',
    isOption: true,
    description: 'APW430トリプルガラスへ変更 施工坪数×単価',
    variants: [
      { id: 'v1', color: '標準色', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  // APW430 窓追加オプション
  {
    id: 'ext-window-apw430-add-22',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓追加',
    name: '窓追加（22条地域）',
    manufacturer: 'YKKAP',
    modelNumber: 'WINDOW-ADD-22',
    unit: 'piece',
    isOption: true,
    description: 'APW430 窓追加（22条地域）',
    variants: [
      { id: 'v1', color: '標準色', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 100000 }
    ]
  },
  {
    id: 'ext-window-apw430-add-fire',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓追加',
    name: '窓追加（準防火・防火地域）',
    manufacturer: 'YKKAP',
    modelNumber: 'WINDOW-ADD-FIRE',
    unit: 'piece',
    isOption: true,
    description: 'APW430 窓追加（準防火・防火地域）',
    variants: [
      { id: 'v1', color: '標準色', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 180000 },
      { plan: 'HOURS', price: 180000 },
      { plan: 'LIFE+', price: 180000 },
      { plan: 'LIFE', price: 180000 }
    ]
  },
  {
    id: 'ext-window-apw430-sliding-22-w1650',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓追加',
    name: '掃出し窓追加（22条地域）W1650',
    manufacturer: 'YKKAP',
    modelNumber: 'WINDOW-ADD-SLIDING-22-W1650',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（22条地域）W1650まで',
    variants: [
      { id: 'v1', color: '標準色', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 300000 },
      { plan: 'HOURS', price: 300000 },
      { plan: 'LIFE+', price: 300000 },
      { plan: 'LIFE', price: 300000 }
    ]
  },
  {
    id: 'ext-window-apw430-sliding-22-w2560',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓追加',
    name: '掃出し窓追加（22条地域）W2560',
    manufacturer: 'YKKAP',
    modelNumber: 'WINDOW-ADD-SLIDING-22-W2560',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（22条地域）W2560まで',
    variants: [
      { id: 'v1', color: '標準色', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 400000 },
      { plan: 'HOURS', price: 400000 },
      { plan: 'LIFE+', price: 400000 },
      { plan: 'LIFE', price: 400000 }
    ]
  },
  {
    id: 'ext-window-apw430-sliding-fire-w1650',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓追加',
    name: '掃出し窓追加（準防火・防火地域）W1650',
    manufacturer: 'YKKAP',
    modelNumber: 'WINDOW-ADD-SLIDING-FIRE-W1650',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（準防火・防火地域）W1650まで',
    variants: [
      { id: 'v1', color: '標準色', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 400000 },
      { plan: 'HOURS', price: 400000 },
      { plan: 'LIFE+', price: 400000 },
      { plan: 'LIFE', price: 400000 }
    ]
  },
  {
    id: 'ext-window-apw430-sliding-fire-w2560',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓追加',
    name: '掃出し窓追加（準防火・防火地域）W2560',
    manufacturer: 'YKKAP',
    modelNumber: 'WINDOW-ADD-SLIDING-FIRE-W2560',
    unit: 'piece',
    isOption: true,
    description: '掃出し窓追加（準防火・防火地域）W2560まで',
    variants: [
      { id: 'v1', color: '標準色', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 600000 },
      { plan: 'HOURS', price: 600000 },
      { plan: 'LIFE+', price: 600000 },
      { plan: 'LIFE', price: 600000 }
    ]
  },
  {
    id: 'ext-window-apw430-glass-safety',
    categoryId: 'window-option',
    categoryName: '窓',
    subcategory: '窓オプション',
    name: '安全合わせガラス（30mil）',
    manufacturer: 'YKKAP',
    modelNumber: 'GLASS-SAFETY-30MIL',
    unit: 'piece',
    isOption: true,
    description: '安全合わせガラス（30mil）W2560引き違い窓は非対応',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 },
      { plan: 'LIFE+', price: 120000 },
      { plan: 'LIFE', price: 120000 }
    ]
  },

  // ===== 27ページ - 玄関ドア ヴェナートD30 =====
  // ドアデザイン N08
  {
    id: 'ext-door-n08',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30 N08',
    name: 'ヴェナートD30 N08',
    manufacturer: 'YKKAP',
    modelNumber: 'D30-N08',
    unit: 'piece',
    isOption: false,
    description: '木目の美感を引き立てる ナチュラルモダンデザイン 100V電気錠 ポケットキー付き',
    variants: [
      { id: 'v1', color: 'アイスブルーノーチェ', colorCode: 'アイスブルーノーチェ', images: [] },
      { id: 'v2', color: 'ハニーチェリー', colorCode: 'ハニーチェリー', images: [] },
      { id: 'v3', color: 'ショコラウォールナット', colorCode: 'ショコラウォールナット', images: [] },
      { id: 'v4', color: 'キャラメルチーク', colorCode: 'キャラメルチーク', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // ドアデザイン N18
  {
    id: 'ext-door-n18',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30 N18',
    name: 'ヴェナートD30 N18',
    manufacturer: 'YKKAP',
    modelNumber: 'D30-N18',
    unit: 'piece',
    isOption: false,
    description: '程よくラフなバランスが絶妙の アースナチュラルデザイン 100V電気錠 ポケットキー付き',
    variants: [
      { id: 'v1', color: 'アイスブルーノーチェ', colorCode: 'アイスブルーノーチェ', images: [] },
      { id: 'v2', color: 'ハニーチェリー', colorCode: 'ハニーチェリー', images: [] },
      { id: 'v3', color: 'ショコラウォールナット', colorCode: 'ショコラウォールナット', images: [] },
      { id: 'v4', color: 'キャラメルチーク', colorCode: 'キャラメルチーク', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // ドアデザイン N15
  {
    id: 'ext-door-n15',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30 N15',
    name: 'ヴェナートD30 N15',
    manufacturer: 'YKKAP',
    modelNumber: 'D30-N15',
    unit: 'piece',
    isOption: false,
    description: '木目の表情を引き立てる シンプルモダンデザイン 100V電気錠 ポケットキー付き',
    variants: [
      { id: 'v1', color: 'アイスブルーノーチェ', colorCode: 'アイスブルーノーチェ', images: [] },
      { id: 'v2', color: 'ハニーチェリー', colorCode: 'ハニーチェリー', images: [] },
      { id: 'v3', color: 'ショコラウォールナット', colorCode: 'ショコラウォールナット', images: [] },
      { id: 'v4', color: 'キャラメルチーク', colorCode: 'キャラメルチーク', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // ドアデザイン C10
  {
    id: 'ext-door-c10',
    categoryId: 'entrance-door',
    categoryName: '玄関ドア',
    subcategory: 'ヴェナートD30 C10',
    name: 'ヴェナートD30 C10',
    manufacturer: 'YKKAP',
    modelNumber: 'D30-C10',
    unit: 'piece',
    isOption: false,
    description: 'カラーの遊び心と多彩なコントラスト調和を追求する 彩りとなしのプレーンデザイン 100V電気錠 ポケットキー付き',
    variants: [
      { id: 'v1', color: 'ピュアホワイト', colorCode: 'ピュアホワイト', images: [] },
      { id: 'v2', color: 'プラチナステン', colorCode: 'プラチナステン', images: [] },
      { id: 'v3', color: 'カームブラック', colorCode: 'カームブラック', images: [] },
      { id: 'v4', color: 'オレンジ', colorCode: 'オレンジ', images: [] },
      { id: 'v5', color: 'マスタード', colorCode: 'マスタード', images: [] },
      { id: 'v6', color: 'サンドベージュ', colorCode: 'サンドベージュ', images: [] },
      { id: 'v7', color: 'ブルーグリーン', colorCode: 'ブルーグリーン', images: [] },
      { id: 'v8', color: 'ボルドー', colorCode: 'ボルドー', images: [] },
      { id: 'v9', color: 'ネイビーブルー', colorCode: 'ネイビーブルー', images: [] },
      { id: 'v10', color: 'ライトブルー', colorCode: 'ライトブルー', images: [] },
      { id: 'v11', color: 'グレイッシュグリーン', colorCode: 'グレイッシュグリーン', images: [] },
      { id: 'v12', color: 'オフホワイト', colorCode: 'オフホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // 玄関ドアオプション
  {
    id: 'ext-door-face-auth',
    categoryId: 'entrance-door-option',
    categoryName: '玄関ドア',
    subcategory: '玄関ドアオプション',
    name: '顔認証キー',
    manufacturer: 'YKKAP',
    modelNumber: 'FACE-AUTH-KEY',
    unit: 'set',
    isOption: true,
    description: '顔認証キー 非防火地域のみ使用可能 家族みんなに使いやすい認証範囲',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LIFE+', price: 200000 },
      { plan: 'LIFE', price: 200000 }
    ]
  },
  {
    id: 'ext-door-pocket-key',
    categoryId: 'entrance-door-option',
    categoryName: '玄関ドア',
    subcategory: '玄関ドアオプション',
    name: 'ポケットキー',
    manufacturer: 'YKKAP',
    modelNumber: 'POCKET-KEY',
    unit: 'piece',
    isOption: true,
    description: 'ポケットキー追加 LIFE+/LACIE/HOURS標準、LIFEはオプション',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LIFE', price: 75000 }
    ]
  },

  // ===== 28ページ - 外部設備 =====
  // 外部LAN用空配管
  {
    id: 'ext-facility-lan',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部配管',
    name: '外部LAN用空配管',
    manufacturer: '標準',
    modelNumber: 'EXT-LAN-PIPE',
    unit: 'piece',
    isOption: true,
    description: '外部LAN用空配管',
    variants: [
      { id: 'v1', color: 'ホワイト/シルバー', colorCode: 'シルバー', images: [] },
      { id: 'v2', color: 'シャンパンブロンズ', colorCode: 'シャンパンブロンズ', images: [] },
      { id: 'v3', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  // センサーライト付屋外ワイヤレスカメラ
  {
    id: 'ext-facility-camera-813k',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '防犯カメラ',
    name: 'センサーライト付屋外ワイヤレスカメラ',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-WD813K',
    unit: 'piece',
    isOption: true,
    description: 'センサーライト付屋外ワイヤレスカメラ インターホンに最大4台まで接続可',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 },
      { plan: 'LIFE+', price: 120000 },
      { plan: 'LIFE', price: 120000 }
    ]
  },
  {
    id: 'ext-facility-camera-500x',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '防犯カメラ',
    name: 'センサーライト付屋外ワイヤレスカメラ（外でもドアホン用）',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-CX500X',
    unit: 'piece',
    isOption: true,
    description: 'SVD505（外でもドアホン）採用時のみ選択可能 最大2台まで接続可',
    variants: [
      { id: 'v1', color: 'グレー', colorCode: 'グレー', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: 'ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 140000 },
      { plan: 'HOURS', price: 140000 },
      { plan: 'LIFE+', price: 140000 },
      { plan: 'LIFE', price: 140000 }
    ]
  },
  // 露出用四角ボックス（将来防犯カメラ用）
  {
    id: 'ext-facility-box',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部設備',
    name: '露出用四角ボックス（将来防犯カメラ用）',
    manufacturer: '未来工業',
    modelNumber: 'PV4B-ANF',
    unit: 'piece',
    isOption: true,
    description: 'LAN空配管+電源仕込み含む 将来防犯カメラ用',
    variants: [
      { id: 'v1', color: 'ベージュ', colorCode: 'ベージュ', images: [] },
      { id: 'v2', color: 'ミルキーホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v3', color: 'グレー', colorCode: 'グレー', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 28000 },
      { plan: 'HOURS', price: 28000 },
      { plan: 'LIFE+', price: 28000 },
      { plan: 'LIFE', price: 28000 }
    ]
  },
  // 外部水栓 アルミ立水栓
  {
    id: 'ext-facility-faucet-alumi',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部水栓',
    name: 'アルミ立水栓',
    manufacturer: 'オンリーワン',
    modelNumber: 'GM3-ALxxF',
    unit: 'piece',
    isOption: true,
    description: 'アルミ立水栓 標準形状変更差額',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] },
      { id: 'v2', color: 'ブロンズ', colorCode: 'ブロンズ', images: [] },
      { id: 'v3', color: 'メタリックグレー', colorCode: 'メタリックグレー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 28000 },
      { plan: 'HOURS', price: 28000 },
      { plan: 'LIFE+', price: 28000 },
      { plan: 'LIFE', price: 28000 }
    ]
  },
  // ステンレス混合立水栓
  {
    id: 'ext-facility-faucet-stainless',
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
      { id: 'v1', color: 'ステンレス', colorCode: 'シルバー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 53000 },
      { plan: 'HOURS', price: 53000 },
      { plan: 'LIFE+', price: 53000 },
      { plan: 'LIFE', price: 53000 }
    ]
  },
  // 散水栓/立水栓（排水仕込み追加）
  {
    id: 'ext-facility-faucet-drain',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部水栓',
    name: '散水栓/立水栓（排水仕込み追加）',
    manufacturer: '標準',
    modelNumber: 'FAUCET-DRAIN',
    unit: 'piece',
    isOption: true,
    description: '散水栓/立水栓（排水仕込み追加）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  // 散水栓/立水栓追加
  {
    id: 'ext-facility-faucet-add',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: '外部水栓',
    name: '散水栓/立水栓追加',
    manufacturer: '標準',
    modelNumber: 'FAUCET-ADD',
    unit: 'piece',
    isOption: true,
    description: '散水栓/立水栓追加（排水なし）',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 },
      { plan: 'LIFE+', price: 36000 },
      { plan: 'LIFE', price: 36000 }
    ]
  },
  // アンテナ
  {
    id: 'ext-facility-antenna-tv',
    categoryId: 'exterior-facility',
    categoryName: '外部設備',
    subcategory: 'アンテナ',
    name: '地上波TVアンテナ',
    manufacturer: '標準',
    modelNumber: 'TV-ANTENNA',
    unit: 'set',
    isOption: true,
    description: '地上波TVアンテナ ブースター含む',
    variants: [
      { id: 'v1', color: 'オフホワイト', colorCode: 'オフホワイト', images: [] },
      { id: 'v2', color: 'ライトブラウン', colorCode: 'ライトブラウン', images: [] },
      { id: 'v3', color: 'ブラックブラウン', colorCode: 'ダークブラウン', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'ブラック', images: [] }
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
    name: 'BSアンテナ追加',
    manufacturer: '標準',
    modelNumber: 'BS-ANTENNA',
    unit: 'set',
    isOption: true,
    description: 'BSアンテナ追加 TVアンテナ設置時の追加料金',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 80000 },
      { plan: 'HOURS', price: 80000 },
      { plan: 'LIFE+', price: 80000 },
      { plan: 'LIFE', price: 80000 }
    ]
  },

  // ===== 29ページ - 換気システム・エコキュート =====
  // 換気ガラリ
  {
    id: 'ext-ventilation-galari',
    categoryId: 'ventilation',
    categoryName: '換気システム',
    subcategory: '換気ガラリ',
    name: '換気ガラリ',
    manufacturer: '標準',
    modelNumber: 'TRD-100xx-T',
    unit: 'piece',
    isOption: false,
    description: '換気システム用 換気ガラリ',
    variants: [
      { id: 'v1', color: 'シルバーメタリック', colorCode: 'シルバーメタリック', images: [] },
      { id: 'v2', color: 'クリア', colorCode: 'クリア', images: [] },
      { id: 'v3', color: 'アイボリー', colorCode: 'アイボリー', images: [] },
      { id: 'v4', color: 'ブラック', colorCode: 'ブラック', images: [] },
      { id: 'v5', color: 'ブラウン', colorCode: 'ブラウン', images: [] },
      { id: 'v6', color: 'ホワイト', colorCode: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // DSDD給気口カラー変更
  {
    id: 'ext-ventilation-dsdd-color',
    categoryId: 'ventilation',
    categoryName: '換気システム',
    subcategory: 'DSDD給気口',
    name: 'DSDD給気口 カラー変更',
    manufacturer: '標準',
    modelNumber: 'DSDD-COLOR',
    unit: 'piece',
    isOption: true,
    description: 'DSDD換気システム採用時のみ カラー変更',
    variants: [
      { id: 'v1', color: '焼付塗装黒', colorCode: 'ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 25000 },
      { plan: 'HOURS', price: 25000 },
      { plan: 'LIFE+', price: 25000 },
      { plan: 'LIFE', price: 25000 }
    ]
  },
  // 太陽光・蓄電池
  {
    id: 'ext-solar-relay-pole',
    categoryId: 'solar',
    categoryName: '太陽光・蓄電池',
    subcategory: '中継ポール',
    name: '中継ポール',
    manufacturer: '標準',
    modelNumber: 'RELAY-POLE',
    unit: 'set',
    isOption: true,
    description: '太陽光設置用中継ポール',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 250000 },
      { plan: 'HOURS', price: 250000 },
      { plan: 'LIFE+', price: 250000 },
      { plan: 'LIFE', price: 250000 }
    ]
  },
  // エコキュート Panasonic Hシリーズ
  {
    id: 'ext-ecocute-h-370-slim',
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
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 100000 }
    ]
  },
  {
    id: 'ext-ecocute-h-460-slim',
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
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 145000 },
      { plan: 'HOURS', price: 145000 },
      { plan: 'LIFE+', price: 145000 },
      { plan: 'LIFE', price: 145000 }
    ]
  },
  // エコキュート Panasonic Wシリーズ パワフル高圧
  {
    id: 'ext-ecocute-w-370-slim',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'パワフル高圧エコキュート370L薄型',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-WU37LQS',
    unit: 'piece',
    isOption: true,
    description: 'Wシリーズ パワフル高圧370L薄型タイプに変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 220000 },
      { plan: 'HOURS', price: 220000 },
      { plan: 'LIFE+', price: 220000 },
      { plan: 'LIFE', price: 220000 }
    ]
  },
  {
    id: 'ext-ecocute-w-460-slim',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'パワフル高圧エコキュート460L薄型',
    manufacturer: 'Panasonic',
    modelNumber: 'HE-WU46LQS',
    unit: 'piece',
    isOption: true,
    description: 'Wシリーズ パワフル高圧460L薄型タイプに変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 270000 },
      { plan: 'HOURS', price: 270000 },
      { plan: 'LIFE+', price: 270000 },
      { plan: 'LIFE', price: 270000 }
    ]
  },
  // エコキュート設置オプション
  {
    id: 'ext-ecocute-indoor',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート室内設置に変更',
    manufacturer: 'Panasonic',
    modelNumber: 'ECOCUTE-INDOOR',
    unit: 'set',
    isOption: true,
    description: 'エコキュート室内設置に変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 100000 }
    ]
  },
  {
    id: 'ext-ecocute-garage',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート インナーガレージ設置',
    manufacturer: 'Panasonic',
    modelNumber: 'ECOCUTE-GARAGE',
    unit: 'set',
    isOption: true,
    description: 'エコキュート インナーガレージ設置に変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  },
  {
    id: 'ext-ecocute-salt',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: '塩害用エコキュートに変更',
    manufacturer: 'Panasonic',
    modelNumber: 'ECOCUTE-SALT',
    unit: 'set',
    isOption: true,
    description: '塩害用エコキュートに変更 パワフル高圧薄型は対応なし',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'ext-ecocute-370-add',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'エコキュート',
    name: 'エコキュート370L追加',
    manufacturer: 'Panasonic',
    modelNumber: 'ECOCUTE-370-ADD',
    unit: 'piece',
    isOption: true,
    description: 'エコキュート370L（標準）追加',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 350000 },
      { plan: 'HOURS', price: 350000 },
      { plan: 'LIFE+', price: 350000 },
      { plan: 'LIFE', price: 350000 }
    ]
  },
  // おひさまエコキュート DAIKIN
  {
    id: 'ext-ecocute-daikin-370',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'おひさまエコキュート',
    name: 'おひさまエコキュート パワフル高圧370L',
    manufacturer: 'DAIKIN',
    modelNumber: 'EQA37YFPV',
    unit: 'piece',
    isOption: true,
    description: 'DAIKIN おひさまエコキュート パワフル高圧370L お掃除浴槽採用時は必須',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 152000 },
      { plan: 'HOURS', price: 152000 },
      { plan: 'LIFE+', price: 152000 },
      { plan: 'LIFE', price: 152000 }
    ]
  },
  {
    id: 'ext-ecocute-daikin-460',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'おひさまエコキュート',
    name: 'おひさまエコキュート パワフル高圧460L',
    manufacturer: 'DAIKIN',
    modelNumber: 'EQA46YFPV',
    unit: 'piece',
    isOption: true,
    description: 'DAIKIN おひさまエコキュート パワフル高圧460L お掃除浴槽採用時は必須',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 196000 },
      { plan: 'HOURS', price: 196000 },
      { plan: 'LIFE+', price: 196000 },
      { plan: 'LIFE', price: 196000 }
    ]
  },
  // ナイアガラ出湯 日立
  {
    id: 'ext-ecocute-hitachi-370-12f',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'ナイアガラ出湯',
    name: 'ナイアガラ出湯 エコキュート370L（1・2階設置）',
    manufacturer: '日立',
    modelNumber: 'BHP-FV37WD',
    unit: 'piece',
    isOption: true,
    description: '日立 ナイアガラ出湯 エコキュート370L 浴槽1・2階設置',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 212000 },
      { plan: 'HOURS', price: 212000 },
      { plan: 'LIFE+', price: 212000 },
      { plan: 'LIFE', price: 212000 }
    ]
  },
  {
    id: 'ext-ecocute-hitachi-370-3f',
    categoryId: 'ecocute',
    categoryName: 'エコキュート',
    subcategory: 'ナイアガラ出湯',
    name: 'ナイアガラ出湯 エコキュート370L（3階設置）',
    manufacturer: '日立',
    modelNumber: 'BHP-FV37WD-3F',
    unit: 'piece',
    isOption: true,
    description: '日立 ナイアガラ出湯 エコキュート370L 浴槽3階設置',
    variants: [
      { id: 'v1', color: '標準', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 236000 },
      { plan: 'HOURS', price: 236000 },
      { plan: 'LIFE+', price: 236000 },
      { plan: 'LIFE', price: 236000 }
    ]
  }
];
