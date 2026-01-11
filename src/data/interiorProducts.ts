// インテリア（内装）製品データ - DETAIL スタイルブックより
import type { Product } from '../types/product';
import { floorProducts } from './generators/flooringGenerator';

// ジェネレーターで生成される製品ID（重複除外用）
const generatedFloorProductIds = new Set(floorProducts.map(p => p.id));

// 静的製品データ
const staticInteriorProducts: Product[] = [
  // ========== フローリング - ベリティスフロアーベースコート（Panasonic）標準 ==========
  {
    id: 'int-floor-veritis-basecoat',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フローリング',
    name: 'ベリティスフロアーベースコート',
    materialType: 'シート',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-BC',
    unit: '㎡',
    isOption: false,
    description: '豊富な色柄を揃えたシートフロアー ワックス不要 抗菌効果 汚れ・すり傷・凹み・キャスターに強い',
    variants: [
      { id: 'v1', color: 'ウォールナット柄', images: [] },
      { id: 'v2', color: 'チェリー柄', images: [] },
      { id: 'v3', color: 'オーク柄', images: [] },
      { id: 'v4', color: 'メープル柄', images: [] },
      { id: 'v5', color: 'エイジドチーク柄', images: [] },
      { id: 'v6', color: 'エイジドチェスナット柄', images: [] },
      { id: 'v7', color: 'カームチェリー柄', images: [] },
      { id: 'v8', color: 'グレージュヒッコリー柄', images: [] },
      { id: 'v9', color: 'ウォッシュドオーク柄', images: [] },
      { id: 'v10', color: 'ホワイトオーク柄', images: [] },
      { id: 'v11', color: 'アイボリーアッシュ柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== フローリング - ライブナチュラルMRX 2P（朝日ウッドテック）標準 ==========
  {
    id: 'int-floor-mrx',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フローリング',
    name: 'ライブナチュラルMRX 2P',
    materialType: '突板',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'MRX-2P',
    unit: '㎡',
    isOption: false,
    description: '突き板仕様 床厚12mm マット塗装 フリーワックス ホットカーペット対応 ヒビワレ防止 耐凹み傷 抗ウイルス 耐摩擦',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', images: [] },
      { id: 'v2', color: 'ハードメイプル', images: [] },
      { id: 'v3', color: 'ブラックウォルナット', images: [] },
      { id: 'v4', color: 'オーク', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== フローリング - ライブナチュラルMSX/MSX-L（朝日ウッドテック）==========
  {
    id: 'int-floor-msx',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フローリング',
    name: 'ライブナチュラルMSX/MSX-L',
    materialType: '突板',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'MSX/MSX-L',
    unit: '㎡',
    isOption: true,
    description: '突き板フローリング 12mm厚 マット塗装 フリーワックス ホットカーペット対応 抗ウイルス',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', images: [] },
      { id: 'v2', color: 'ハードメイプル', images: [] },
      { id: 'v3', color: 'シカモア', images: [] },
      { id: 'v4', color: 'ブラックウォルナット', images: [] },
      { id: 'v5', color: 'バーチ', images: [] },
      { id: 'v6', color: 'オーク', images: [] },
      { id: 'v7', color: 'アカシア（3P）', images: [] },
      { id: 'v8', color: 'ドライメイプル', images: [] },
      { id: 'v9', color: 'ドライウォルナット', images: [] },
      { id: 'v10', color: 'ドライオーク', images: [] },
      { id: 'v11', color: 'シュガーホワイト（アッシュ）', images: [] },
      { id: 'v12', color: 'ライトグレー（オーク）', images: [] },
      { id: 'v13', color: 'ミッドグレー（オーク）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 3000 },
      { plan: 'HOURS', price: 3000 },
      { plan: 'LIFE+', price: 3000 },
      { plan: 'LIFE', price: 3000 }
    ]
  },

  // ========== フローリング - マイスターズウッドフロアー（Panasonic）==========
  {
    id: 'int-floor-meisters',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フローリング',
    materialType: '突板',
    name: 'マイスターズウッドフロアー ハードコートクリア',
    manufacturer: 'Panasonic',
    modelNumber: 'MEISTERS-HC',
    unit: '㎡',
    isOption: true,
    description: '天然木突き板 ワックス不要 抗菌効果 汚れ・すり傷・凹み・キャスターに強い',
    variants: [
      { id: 'v1', color: 'ウォールナットクリア', images: [] },
      { id: 'v2', color: 'アカシアクリア', images: [] },
      { id: 'v3', color: 'バーチラスティッククリア', images: [] },
      { id: 'v4', color: 'バーチクリア', images: [] },
      { id: 'v5', color: 'アッシュクリア', images: [] },
      { id: 'v6', color: 'メープルクリア', images: [] },
      { id: 'v7', color: 'ハードメープル', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 3000 },
      { plan: 'HOURS', price: 3000 },
      { plan: 'LIFE+', price: 3000 },
      { plan: 'LIFE', price: 3000 }
    ]
  },

  // ========== フローリング - 銘木フロアーラスティック（イクタ）==========
  {
    id: 'int-floor-ikuta',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フローリング',
    materialType: '突板',
    name: '銘木フロアーラスティック 2P',
    manufacturer: 'イクタ',
    modelNumber: 'MEIBOKU-RUSTIC',
    unit: '㎡',
    isOption: true,
    description: '突き板12mm厚 オイル風合いラスティック塗装 「空気を洗う」健康フローリング 消臭・ウイルス低減・VOC低減効果',
    variants: [
      { id: 'v1', color: 'ウォルナット', images: [] },
      { id: 'v2', color: 'ブラックチェリー', images: [] },
      { id: 'v3', color: 'イタヤカエデ', images: [] },
      { id: 'v4', color: 'ナラ樫', images: [] },
      { id: 'v5', color: 'チーク', images: [] },
      { id: 'v6', color: 'アカシア', images: [] },
      { id: 'v7', color: 'ハードメープル', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 3000 },
      { plan: 'HOURS', price: 3000 },
      { plan: 'LIFE+', price: 3000 },
      { plan: 'LIFE', price: 3000 }
    ]
  },

  // ========== フローリング - クルードフローリング303（イクタ）水廻り専用 ==========
  {
    id: 'int-floor-crude-303',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フローリング',
    materialType: 'シート',
    name: 'クルードフローリング303',
    manufacturer: 'イクタ',
    modelNumber: 'CRUDE-303',
    unit: '㎡',
    isOption: true,
    description: '水廻り専用フローリング 素材の美しさを打ち出したマットな風合い 抗ウイルス・抗菌 消臭効果 ※水廻り以外でご使用される場合は追加費用',
    variants: [
      { id: 'v1', color: 'ピエトラホワイト', images: [] },
      { id: 'v2', color: 'ピエトラグレー', images: [] },
      { id: 'v3', color: 'ピエトラブラック', images: [] },
      { id: 'v4', color: 'テラゾーホワイト', images: [] },
      { id: 'v5', color: 'テラゾーグレー', images: [] },
      { id: 'v6', color: 'グランモルタル', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 2000 },
      { plan: 'HOURS', price: 2000 },
      { plan: 'LIFE+', price: 5000 },
      { plan: 'LIFE', price: 5000 }
    ]
  },

  // ========== フローリング - 銘木フロアーラスティック エイジング（イクタ）==========
  {
    id: 'int-floor-meiboku-aging',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フローリング',
    materialType: '突板',
    name: '銘木フロアーラスティック エイジング 2P',
    manufacturer: 'イクタ',
    modelNumber: 'MEIBOKU-AGING',
    unit: '㎡',
    isOption: true,
    description: '突き板12mm厚 木目を強く打ち出したエイジング仕上げ ※塗装品のため近似色塗装になります',
    variants: [
      { id: 'v1', color: 'エイジングナチュラル', images: [] },
      { id: 'v2', color: 'エイジングホワイト', images: [] },
      { id: 'v3', color: 'エイジングタイガ', images: [] },
      { id: 'v4', color: 'エイジングカフェ', images: [] },
      { id: 'v5', color: 'エイジングビター', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 3000 },
      { plan: 'HOURS', price: 3000 },
      { plan: 'LIFE+', price: 6000 },
      { plan: 'LIFE', price: 6000 }
    ]
  },

  // ========== フローリング - ビンテージフロアーラスティック（イクタ）挽き板 ==========
  {
    id: 'int-floor-vintage-rustic',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フローリング',
    materialType: '挽板',
    name: 'ビンテージフロアーラスティック 2P',
    manufacturer: 'イクタ',
    modelNumber: 'VINTAGE-RUSTIC',
    unit: '㎡',
    isOption: true,
    description: '挽き板12mm厚 天然木ならではの色味や節、自然の趣を感じられるフロア 「空気を洗う」健康フローリング',
    variants: [
      { id: 'v1', color: 'チーク', images: [] },
      { id: 'v2', color: 'ウォルナット', images: [] },
      { id: 'v3', color: 'ブラックチェリー', images: [] },
      { id: 'v4', color: 'ナラ', images: [] },
      { id: 'v5', color: 'カエデ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 13000 },
      { plan: 'LIFE', price: 13000 }
    ]
  },

  // ========== フローリング - ライブナチュラルプレミアム ラスティック（朝日ウッドテック）挽き板 ==========
  {
    id: 'int-floor-livnatural-premium',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フローリング',
    materialType: '挽板',
    name: 'ライブナチュラルプレミアム ラスティック 2P',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'LIVNATURAL-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: '挽き板12mm厚 天然木が持つ、木それぞれの個性を美しく表現したフロア GOOD DESIGN賞受賞',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', images: [] },
      { id: 'v2', color: 'ハードメイプル', images: [] },
      { id: 'v3', color: 'ブラックウォルナット', images: [] },
      { id: 'v4', color: 'オークN45°', images: [] },
      { id: 'v5', color: 'バーチ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 13000 },
      { plan: 'HOURS', price: 13000 },
      { plan: 'LIFE+', price: 16000 },
      { plan: 'LIFE', price: 16000 }
    ]
  },

  // ========== 玄関框（標準）==========
  {
    id: 'int-floor-entrance-frame-std',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '玄関框',
    name: '玄関框（フローリング色合わせ）',
    manufacturer: 'Panasonic/朝日ウッドテック',
    modelNumber: 'ENTRANCE-FRAME-STD',
    unit: '個',
    isOption: false,
    description: 'ご選択いただいたフローリング色合わせとなります ※付け框30×150となります',
    variants: [
      { id: 'v1', color: 'フローリング色合わせ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== 床見切り（フラットバー）標準 ==========
  {
    id: 'int-floor-flatbar',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '床見切り',
    name: '床見切り（フラットバー）',
    manufacturer: 'Gハウス',
    modelNumber: 'FLATBAR',
    unit: '個',
    isOption: false,
    description: 'フローリングと異素材の床材との間に納まる部材です ※シルバーのみ',
    variants: [
      { id: 'v1', color: 'シルバー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== 玄関框（プレイリーホームズ）オプション ==========
  {
    id: 'int-floor-entrance-frame-prairie-18',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '玄関框',
    name: '玄関框（プレイリーホームズ）〜1.8m迄',
    manufacturer: 'プレイリーホームズ',
    modelNumber: 'PRAIRIE-FRAME-18',
    unit: '個',
    isOption: true,
    description: '6mmという美薄、シンプルスマートの新しい提案',
    variants: [
      { id: 'v1', color: 'ゴム ウレタンブラック', images: [] },
      { id: 'v2', color: 'ゴム ウレタンホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 24000 },
      { plan: 'HOURS', price: 24000 },
      { plan: 'LIFE+', price: 24000 },
      { plan: 'LIFE', price: 24000 }
    ]
  },
  {
    id: 'int-floor-entrance-frame-prairie-28',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '玄関框',
    name: '玄関框（プレイリーホームズ）〜2.8m迄',
    manufacturer: 'プレイリーホームズ',
    modelNumber: 'PRAIRIE-FRAME-28',
    unit: '個',
    isOption: true,
    description: '6mmという美薄、シンプルスマートの新しい提案',
    variants: [
      { id: 'v1', color: 'ゴム ウレタンブラック', images: [] },
      { id: 'v2', color: 'ゴム ウレタンホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 },
      { plan: 'LIFE+', price: 36000 },
      { plan: 'LIFE', price: 36000 }
    ]
  },

  // ========== 無垢床 - チャネルオリジナル ユニシリーズ（オーク・バーチ・ウォールナット）==========
  {
    id: 'int-floor-channel-uni-a',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '無垢床',
    materialType: '無垢',
    name: 'チャネルオリジナル ユニシリーズ（オーク・バーチ・ウォールナット）',
    manufacturer: 'チャネルオリジナル',
    modelNumber: 'CHANNEL-UNI-A',
    unit: '㎡',
    isOption: true,
    description: '無垢床 ウレタン塗装 色の濃淡・小さな節・かすりなど自然な風合いや美しさを感じられる ※別途配送料¥30,000',
    variants: [
      { id: 'v1', color: 'オーク', images: [] },
      { id: 'v2', color: 'バーチ', images: [] },
      { id: 'v3', color: 'ウォールナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 13000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },

  // ========== 無垢床 - チャネルオリジナル ユニシリーズ（ブラックチェリー・チーク）==========
  {
    id: 'int-floor-channel-uni-b',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '無垢床',
    materialType: '無垢',
    name: 'チャネルオリジナル ユニシリーズ（ブラックチェリー・チーク）',
    manufacturer: 'チャネルオリジナル',
    modelNumber: 'CHANNEL-UNI-B',
    unit: '㎡',
    isOption: true,
    description: '無垢床 ウレタン塗装 色の濃淡・小さな節・かすりなど自然な風合いや美しさを感じられる ※別途配送料¥30,000',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', images: [] },
      { id: 'v2', color: 'チーク', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 18000 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 2000 }
    ]
  },

  // ========== 無垢床 - チャネルオリジナル ヘリンボーン ==========
  {
    id: 'int-floor-channel-herringbone',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '無垢床',
    materialType: '無垢',
    name: 'チャネルオリジナル ヘリンボーン',
    manufacturer: 'チャネルオリジナル',
    modelNumber: 'CHANNEL-HERRINGBONE',
    unit: '㎡',
    isOption: true,
    description: '無垢床 ウレタン塗装 北海道産ナラ節無（上小節含む）赤味、入り皮など木の特徴が随所にみられバラエティーな表情を楽しめる 国産木材 接着剤不使用 ※別途配送料¥30,000',
    variants: [
      { id: 'v1', color: '北海道産ナラ節無', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 17000 },
      { plan: 'LIFE+', price: 17000 },
      { plan: 'LIFE', price: 4000 }
    ]
  },

  // ========== フロアタイル - マティル（田島ルーフィング）==========
  {
    id: 'int-floor-matil',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フロアタイル',
    materialType: 'フロアタイル',
    name: 'マティル',
    manufacturer: '田島ルーフィング',
    modelNumber: 'MATIL',
    unit: '㎡',
    isOption: true,
    description: '水廻り対応フロアタイル（水廻りでは追加費用なし）',
    variants: [
      { id: 'v1', color: 'MAE-1140', images: [] },
      { id: 'v2', color: 'MAE-1142', images: [] },
      { id: 'v3', color: 'MAE-1143', images: [] },
      { id: 'v4', color: 'MAE-1146', images: [] },
      { id: 'v5', color: 'MAE-1109', images: [] },
      { id: 'v6', color: 'MAE-1206', images: [] },
      { id: 'v7', color: 'MAW-1132', images: [] },
      { id: 'v8', color: 'MAW-1133', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 8500 },
      { plan: 'HOURS', price: 8500 },
      { plan: 'LIFE+', price: 7000 },
      { plan: 'LIFE', price: 7000 }
    ]
  },

  // ========== CFシート（東リ）水廻り用 ==========
  {
    id: 'int-floor-cf-sheet',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'CFシート',
    materialType: 'CFシート',
    name: 'CFシート',
    manufacturer: '東リ',
    modelNumber: 'CF-SHEET',
    unit: '㎡',
    isOption: true,
    description: '防水性、クッション性に優れたビニール系のシート床材 手入れも手軽で汚れも落としやすい ※水廻り専用のため、水廻り以外でご使用される場合は追加費用',
    variants: [
      { id: 'v1', color: 'CF3738', images: [] },
      { id: 'v2', color: 'CF3739', images: [] },
      { id: 'v3', color: 'CF3746', images: [] },
      { id: 'v4', color: 'CF3747', images: [] },
      { id: 'v5', color: 'CF3751', images: [] },
      { id: 'v6', color: 'CF3752', images: [] },
      { id: 'v7', color: 'CF3761', images: [] },
      { id: 'v8', color: 'CF3764', images: [] },
      { id: 'v9', color: 'CF3770', images: [] },
      { id: 'v10', color: 'CF9616', images: [] },
      { id: 'v11', color: 'CF9617', images: [] },
      { id: 'v12', color: 'CF9618', images: [] },
      { id: 'v13', color: 'CF9645', images: [] },
      { id: 'v14', color: 'CF9647', images: [] },
      { id: 'v15', color: 'CF9649', images: [] },
      { id: 'v16', color: 'CF9650', images: [] },
      { id: 'v17', color: 'CF9655', images: [] },
      { id: 'v18', color: 'CF9664', images: [] },
      { id: 'v19', color: 'CF9679', images: [] },
      { id: 'v20', color: 'CF9689', images: [] },
      { id: 'v21', color: 'CF9690', images: [] },
      { id: 'v22', color: 'CF9691', images: [] },
      { id: 'v23', color: 'CF9693', images: [] },
      { id: 'v24', color: 'CF9694', images: [] },
      { id: 'v25', color: 'CF9696', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== カーペットタイル（sangetsu）PDF19追加 ==========
  {
    id: 'int-floor-carpet',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'カーペットタイル',
    materialType: 'カーペットタイル',
    name: 'カーペットタイル',
    manufacturer: 'sangetsu',
    modelNumber: 'NTP/NTH/NT',
    unit: '㎡',
    isOption: true,
    description: '耐久性・クッション性を兼ねそろえた素材 床に座って過ごすことが多いお部屋におすすめ',
    variants: [
      { id: 'v1', color: 'NTP-70801', images: [] },
      { id: 'v2', color: 'NTP-71101', images: [] },
      { id: 'v3', color: 'NTP-71102', images: [] },
      { id: 'v4', color: 'NTP-71105', images: [] },
      { id: 'v5', color: 'NTP-71114', images: [] },
      { id: 'v6', color: 'NTH-84009', images: [] },
      { id: 'v7', color: 'NTH-84010', images: [] },
      { id: 'v8', color: 'NTH-824', images: [] },
      { id: 'v9', color: 'NTH-841', images: [] },
      { id: 'v10', color: 'NT-31104', images: [] },
      { id: 'v11', color: 'NT-31402', images: [] },
      { id: 'v12', color: 'NT-31403', images: [] },
      { id: 'v13', color: 'NT-31505', images: [] },
      { id: 'v14', color: 'NT-31507', images: [] },
      { id: 'v15', color: 'NT-31801', images: [] },
      { id: 'v16', color: 'NT-31803', images: [] },
      { id: 'v17', color: 'NT-31901', images: [] },
      { id: 'v18', color: 'NT-35003', images: [] },
      { id: 'v19', color: 'NT-35006', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 13000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },

  // ========== カーペットタイル NTシリーズ（PDF20追加）==========
  {
    id: 'int-floor-carpet-nt',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'カーペットタイル',
    materialType: 'カーペットタイル',
    name: 'カーペットタイル NTシリーズ',
    manufacturer: 'sangetsu',
    modelNumber: 'NT-311-382',
    unit: '㎡',
    isOption: true,
    description: '耐久性・クッション性を兼ねそろえた素材 床に座って過ごすことが多いお部屋におすすめ',
    variants: [
      { id: 'v1', color: 'NT-311', images: [] },
      { id: 'v2', color: 'NT-316', images: [] },
      { id: 'v3', color: 'NT-336', images: [] },
      { id: 'v4', color: 'NT-339', images: [] },
      { id: 'v5', color: 'NT-340', images: [] },
      { id: 'v6', color: 'NT-341', images: [] },
      { id: 'v7', color: 'NT-342', images: [] },
      { id: 'v8', color: 'NT-344', images: [] },
      { id: 'v9', color: 'NT-371', images: [] },
      { id: 'v10', color: 'NT-376', images: [] },
      { id: 'v11', color: 'NT-379', images: [] },
      { id: 'v12', color: 'NT-382', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 13000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },

  // ========== カーペットタイル DTシリーズ（PDF20追加）==========
  {
    id: 'int-floor-carpet-dt',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'カーペットタイル',
    materialType: 'カーペットタイル',
    name: 'カーペットタイル DTシリーズ（プレミアム）',
    manufacturer: 'sangetsu',
    modelNumber: 'DT-2201-2207',
    unit: '㎡',
    isOption: true,
    description: '耐久性・クッション性を兼ねそろえた素材 床に座って過ごすことが多いお部屋におすすめ（プレミアム）',
    variants: [
      { id: 'v1', color: 'DT-2201', images: [] },
      { id: 'v2', color: 'DT-2202', images: [] },
      { id: 'v3', color: 'DT-2204', images: [] },
      { id: 'v4', color: 'DT-2207', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 13000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },

  // ========== 磁器タイル ==========
  {
    id: 'int-floor-ceramic-tile-001',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '磁器タイル',
    materialType: '磁器タイル',
    name: '磁器タイル（玄関・土間）',
    manufacturer: 'LIXIL',
    modelNumber: 'CERAMIC-TILE-001',
    unit: '㎡',
    isOption: false,
    description: '玄関・土間に最適な磁器タイル 滑りにくく耐久性に優れる',
    variants: [
      { id: 'v1', color: 'グレー', images: [] },
      { id: 'v2', color: 'ベージュ', images: [] },
      { id: 'v3', color: 'ホワイト', images: [] },
      { id: 'v4', color: 'ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== 天井変更工事 ==========
  {
    id: 'int-ceiling-slope',
    categoryId: 'ceiling',
    categoryName: '天井',
    subcategory: '天井変更工事',
    name: '勾配天井工事',
    manufacturer: 'Gハウス',
    modelNumber: 'CEILING-SLOPE',
    unit: '㎡',
    isOption: true,
    description: '天井変更する範囲の床坪数にて算出 ※梁や火打ち梁が露出する場合がございます',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },
  {
    id: 'int-ceiling-up-100',
    categoryId: 'ceiling',
    categoryName: '天井',
    subcategory: '天井変更工事',
    name: '天井高UP（H2600迄）100mm毎',
    manufacturer: 'Gハウス',
    modelNumber: 'CEILING-UP-100',
    unit: '㎡',
    isOption: true,
    description: '部屋別での変更不可 フロアごとの変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 8500 },
      { plan: 'HOURS', price: 8500 },
      { plan: 'LIFE+', price: 8500 },
      { plan: 'LIFE', price: 8500 }
    ]
  },
  {
    id: 'int-ceiling-up-200',
    categoryId: 'ceiling',
    categoryName: '天井',
    subcategory: '天井変更工事',
    name: '天井高UP（H2600迄）200mm毎',
    manufacturer: 'Gハウス',
    modelNumber: 'CEILING-UP-200',
    unit: '㎡',
    isOption: true,
    description: '部屋別での変更不可 フロアごとの変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 },
      { plan: 'LIFE+', price: 12000 },
      { plan: 'LIFE', price: 12000 }
    ]
  },
  {
    id: 'int-ceiling-down',
    categoryId: 'ceiling',
    categoryName: '天井',
    subcategory: '天井変更工事',
    name: '下がり天井',
    manufacturer: 'Gハウス',
    modelNumber: 'CEILING-DOWN',
    unit: '㎡',
    isOption: true,
    description: '100mm毎',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 8000 },
      { plan: 'HOURS', price: 8000 },
      { plan: 'LIFE+', price: 8000 },
      { plan: 'LIFE', price: 8000 }
    ]
  },

  // ========== 間接照明BOX ==========
  {
    id: 'int-indirect-cove',
    categoryId: 'indirect-lighting',
    categoryName: '間接照明',
    subcategory: '間接照明BOX',
    name: 'コーブ照明',
    manufacturer: 'Gハウス',
    modelNumber: 'INDIRECT-COVE',
    unit: 'm',
    isOption: true,
    description: '※間接照明の光によりクロスの継ぎ目や下地浮きが目立つ場合があります ※照明器具は別途費用 ※1m以下は¥15,000',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 15000 }
    ]
  },
  {
    id: 'int-indirect-cornice',
    categoryId: 'indirect-lighting',
    categoryName: '間接照明',
    subcategory: '間接照明BOX',
    name: 'コーニス照明',
    manufacturer: 'Gハウス',
    modelNumber: 'INDIRECT-CORNICE',
    unit: 'm',
    isOption: true,
    description: '※勾配天井での採用不可 ※1m以下は¥15,000',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 15000 }
    ]
  },
  {
    id: 'int-indirect-upper',
    categoryId: 'indirect-lighting',
    categoryName: '間接照明',
    subcategory: '間接照明BOX',
    name: 'アッパー照明',
    manufacturer: 'Gハウス',
    modelNumber: 'INDIRECT-UPPER',
    unit: 'm',
    isOption: true,
    description: '上部アクリル板含む t5 ※1m以下は¥20,000',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },

  // ========== カーペット階段 ==========
  {
    id: 'int-stairs-carpet',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: 'カーペット階段',
    name: 'カーペット階段',
    manufacturer: 'Gハウス',
    modelNumber: 'CARPET-STAIRS',
    unit: '個',
    isOption: true,
    description: '※ひな壇階段では使用不可 ※アイアン階段では使用不可 ※1〜2階分ごとにオプション',
    variants: [
      { id: 'v1', color: 'CIR5002', images: [] },
      { id: 'v2', color: 'CIR-5006', images: [] },
      { id: 'v3', color: 'CIR-5007', images: [] },
      { id: 'v4', color: 'CIR-5008', images: [] },
      { id: 'v5', color: 'LIR-5032', images: [] },
      { id: 'v6', color: 'LIR-5033', images: [] },
      { id: 'v7', color: 'LIR-5036', images: [] },
      { id: 'v8', color: 'LIR-5044', images: [] },
      { id: 'v9', color: 'MDR-5014', images: [] },
      { id: 'v10', color: 'MDR-5017', images: [] },
      { id: 'v11', color: 'HDR-1052', images: [] },
      { id: 'v12', color: 'HDR-1053', images: [] },
      { id: 'v13', color: 'HDR-1054', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 350000 },
      { plan: 'HOURS', price: 210000 },
      { plan: 'LIFE+', price: 210000 },
      { plan: 'LIFE', price: 210000 }
    ]
  },

  // ========== インテリア格子 ==========
  // 選択しない（標準）
  {
    id: 'int-lattice-none',
    categoryId: 'lattice',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: '格子なし（標準）',
    manufacturer: '-',
    modelNumber: 'NONE',
    unit: 'セット',
    isOption: false,
    description: '格子を設置しない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '-', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-lattice-w045',
    categoryId: 'lattice',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: 'インテリア格子 W045（W276〜465mm）',
    manufacturer: 'LIXIL',
    modelNumber: 'LATTICE-W045',
    unit: '個',
    isOption: true,
    description: '高さH895〜2,495mm選択可 ※腰壁設置は別途費用',
    variants: [
      { id: 'v1', color: 'クリエペール', images: [] },
      { id: 'v2', color: 'クリエラスク', images: [] },
      { id: 'v3', color: 'クリエダーク', images: [] },
      { id: 'v4', color: 'コウノキ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 110000 },
      { plan: 'HOURS', price: 110000 },
      { plan: 'LIFE+', price: 110000 },
      { plan: 'LIFE', price: 110000 }
    ]
  },
  {
    id: 'int-lattice-w085',
    categoryId: 'lattice',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: 'インテリア格子 W085（W466〜843mm）',
    manufacturer: 'LIXIL',
    modelNumber: 'LATTICE-W085',
    unit: '個',
    isOption: true,
    description: '高さH895〜2,495mm選択可 ※腰壁設置は別途費用',
    variants: [
      { id: 'v1', color: 'クリエペール', images: [] },
      { id: 'v2', color: 'クリエラスク', images: [] },
      { id: 'v3', color: 'クリエダーク', images: [] },
      { id: 'v4', color: 'コウノキ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 130000 },
      { plan: 'HOURS', price: 130000 },
      { plan: 'LIFE+', price: 130000 },
      { plan: 'LIFE', price: 130000 }
    ]
  },
  {
    id: 'int-lattice-w12',
    categoryId: 'lattice',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: 'インテリア格子 W12（W843〜1,221mm）',
    manufacturer: 'LIXIL',
    modelNumber: 'LATTICE-W12',
    unit: '個',
    isOption: true,
    description: '高さH895〜2,495mm選択可 ※腰壁設置は別途費用',
    variants: [
      { id: 'v1', color: 'クリエペール', images: [] },
      { id: 'v2', color: 'クリエラスク', images: [] },
      { id: 'v3', color: 'クリエダーク', images: [] },
      { id: 'v4', color: 'コウノキ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 160000 },
      { plan: 'HOURS', price: 160000 },
      { plan: 'LIFE+', price: 160000 },
      { plan: 'LIFE', price: 160000 }
    ]
  },
  {
    id: 'int-lattice-w16',
    categoryId: 'lattice',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: 'インテリア格子 W16（W1,221〜2,495mm）',
    manufacturer: 'LIXIL',
    modelNumber: 'LATTICE-W16',
    unit: '個',
    isOption: true,
    description: '高さH895〜2,495mm選択可 ※腰壁設置は別途費用',
    variants: [
      { id: 'v1', color: 'クリエペール', images: [] },
      { id: 'v2', color: 'クリエラスク', images: [] },
      { id: 'v3', color: 'クリエダーク', images: [] },
      { id: 'v4', color: 'コウノキ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 190000 },
      { plan: 'HOURS', price: 190000 },
      { plan: 'LIFE+', price: 190000 },
      { plan: 'LIFE', price: 190000 }
    ]
  },

  // ========== インテリアカウンター ==========
  // 選択しない（標準）
  {
    id: 'int-counter-none',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: 'カウンターなし（標準）',
    manufacturer: '-',
    modelNumber: 'NONE',
    unit: 'セット',
    isOption: false,
    description: 'インテリアカウンターを設置しない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '-', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // トイレ用ちょい置きスペース ¥20,000
  {
    id: 'int-counter-toilet',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: 'インテリアカウンター（トイレ用）',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-TOILET',
    unit: '個',
    isOption: true,
    description: '耐水集成タイプ 厚み24mm トイレなどちょい置きスペースに 長さ1400mm以下 奥行300mm以下',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  // 奥行100〜200mm（飾り棚用）アングル使用
  {
    id: 'int-counter-shelf-w1000',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行100〜200mm W〜1000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D200-W1000',
    unit: '個',
    isOption: true,
    description: '飾り棚用 耐水集成タイプ 厚み24mm アングル3個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 41000 },
      { plan: 'HOURS', price: 41000 },
      { plan: 'LIFE+', price: 41000 },
      { plan: 'LIFE', price: 41000 }
    ]
  },
  {
    id: 'int-counter-shelf-w1800',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行100〜200mm W1001〜1800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D200-W1800',
    unit: '個',
    isOption: true,
    description: '飾り棚用 耐水集成タイプ 厚み24mm アングル4個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 58000 },
      { plan: 'HOURS', price: 58000 },
      { plan: 'LIFE+', price: 58000 },
      { plan: 'LIFE', price: 58000 }
    ]
  },
  {
    id: 'int-counter-shelf-w2800',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行100〜200mm W1801〜2800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D200-W2800',
    unit: '個',
    isOption: true,
    description: '飾り棚用 耐水集成タイプ 厚み24mm アングル6個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 74000 },
      { plan: 'HOURS', price: 74000 },
      { plan: 'LIFE+', price: 74000 },
      { plan: 'LIFE', price: 74000 }
    ]
  },
  {
    id: 'int-counter-shelf-w4000',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行100〜200mm W2801〜4000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D200-W4000',
    unit: '個',
    isOption: true,
    description: '飾り棚用 耐水集成タイプ 厚み24mm アングル9個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 94000 },
      { plan: 'HOURS', price: 94000 },
      { plan: 'LIFE+', price: 94000 },
      { plan: 'LIFE', price: 94000 }
    ]
  },
  // 奥行201〜450mm（スタディスペース用）ブラケット使用
  {
    id: 'int-counter-study-w1000',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行201〜450mm W〜1000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D450-W1000',
    unit: '個',
    isOption: true,
    description: 'スタディスペース用 耐水集成タイプ 厚み24mm ブラケット3個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 41000 },
      { plan: 'HOURS', price: 41000 },
      { plan: 'LIFE+', price: 41000 },
      { plan: 'LIFE', price: 41000 }
    ]
  },
  {
    id: 'int-counter-study-w1800',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行201〜450mm W1001〜1800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D450-W1800',
    unit: '個',
    isOption: true,
    description: 'スタディスペース用 耐水集成タイプ 厚み24mm ブラケット4個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 64000 },
      { plan: 'HOURS', price: 64000 },
      { plan: 'LIFE+', price: 64000 },
      { plan: 'LIFE', price: 64000 }
    ]
  },
  {
    id: 'int-counter-study-w2800',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行201〜450mm W1801〜2800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D450-W2800',
    unit: '個',
    isOption: true,
    description: 'スタディスペース用 耐水集成タイプ 厚み24mm ブラケット6個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 81000 },
      { plan: 'HOURS', price: 81000 },
      { plan: 'LIFE+', price: 81000 },
      { plan: 'LIFE', price: 81000 }
    ]
  },
  {
    id: 'int-counter-study-w4000',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行201〜450mm W2801〜4000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D450-W4000',
    unit: '個',
    isOption: true,
    description: 'スタディスペース用 耐水集成タイプ 厚み24mm ブラケット9個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 115000 },
      { plan: 'HOURS', price: 115000 },
      { plan: 'LIFE+', price: 115000 },
      { plan: 'LIFE', price: 115000 }
    ]
  },
  // 奥行451〜600mm（ワークスペース用）ブラケット使用
  {
    id: 'int-counter-work-w1000',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行451〜600mm W〜1000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D600-W1000',
    unit: '個',
    isOption: true,
    description: 'ワークスペース用 耐水集成タイプ 厚み24mm ブラケット3個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 61000 },
      { plan: 'HOURS', price: 61000 },
      { plan: 'LIFE+', price: 61000 },
      { plan: 'LIFE', price: 61000 }
    ]
  },
  {
    id: 'int-counter-work-w1800',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行451〜600mm W1001〜1800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D600-W1800',
    unit: '個',
    isOption: true,
    description: 'ワークスペース用 耐水集成タイプ 厚み24mm ブラケット4個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 103000 },
      { plan: 'HOURS', price: 103000 },
      { plan: 'LIFE+', price: 103000 },
      { plan: 'LIFE', price: 103000 }
    ]
  },
  {
    id: 'int-counter-work-w2800',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行451〜600mm W1801〜2800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D600-W2800',
    unit: '個',
    isOption: true,
    description: 'ワークスペース用 耐水集成タイプ 厚み24mm ブラケット6個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 141000 },
      { plan: 'HOURS', price: 141000 },
      { plan: 'LIFE+', price: 141000 },
      { plan: 'LIFE', price: 141000 }
    ]
  },
  {
    id: 'int-counter-work-w4000',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: '奥行451〜600mm W2801〜4000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-D600-W4000',
    unit: '個',
    isOption: true,
    description: 'ワークスペース用 耐水集成タイプ 厚み24mm ブラケット9個',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色 LV', images: [] },
      { id: 'v2', color: 'ウォールナット色 TY', images: [] },
      { id: 'v3', color: 'チェリー色 CY', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色 RV', images: [] },
      { id: 'v5', color: 'イデアオーク色 EV', images: [] },
      { id: 'v6', color: 'メープル色 OY', images: [] },
      { id: 'v7', color: 'ホワイトオーク色 WY', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色 GY', images: [] },
      { id: 'v9', color: 'しっくいホワイト色 PY', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 192000 },
      { plan: 'HOURS', price: 192000 },
      { plan: 'LIFE+', price: 192000 },
      { plan: 'LIFE', price: 192000 }
    ]
  },
  // 配線用キャップ穴加工オプション
  {
    id: 'int-counter-cable-cap',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンターオプション',
    name: '配線用キャップ穴加工',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-CABLE-CAP',
    unit: '個',
    isOption: true,
    description: 'カウンターに配線用キャップ穴を加工',
    variants: [
      { id: 'v1', color: 'ブラウン', images: [] },
      { id: 'v2', color: 'ブラック', images: [] },
      { id: 'v3', color: 'グレー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 5000 },
      { plan: 'LIFE', price: 5000 }
    ]
  },

  // ========== トイレ収納 ==========
  {
    id: 'int-toilet-storage-back',
    categoryId: 'toilet-storage',
    categoryName: 'トイレ収納',
    subcategory: 'トイレ収納',
    name: '造作トイレ 背面収納スペース',
    manufacturer: 'Gハウス',
    modelNumber: 'TOILET-BACK-SPACE',
    unit: '個',
    isOption: true,
    description: '※スペースのみ 棚板含まず ※下地施工は別途費用 ※開口部有効寸法260mm以上必要',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 35000 },
      { plan: 'HOURS', price: 35000 },
      { plan: 'LIFE+', price: 35000 },
      { plan: 'LIFE', price: 35000 }
    ]
  },
  {
    id: 'int-toilet-storage-side',
    categoryId: 'toilet-storage',
    categoryName: 'トイレ収納',
    subcategory: 'トイレ収納',
    name: '造作トイレ 収納',
    manufacturer: 'Gハウス',
    modelNumber: 'TOILET-SIDE-STORAGE',
    unit: '個',
    isOption: true,
    description: 'W150×H床〜天井×D130(有効) 棚板3枚（固定棚）ふかし壁費用含む',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'アッシュウォールナット', images: [] },
      { id: 'v4', color: 'ダークグレー', images: [] },
      { id: 'v5', color: 'ブライトウォールナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 47000 },
      { plan: 'HOURS', price: 47000 },
      { plan: 'LIFE+', price: 47000 },
      { plan: 'LIFE', price: 47000 }
    ]
  },
  {
    id: 'int-toilet-storage-sanita',
    categoryId: 'toilet-storage',
    categoryName: 'トイレ収納',
    subcategory: 'トイレ収納',
    name: 'サニタトイレ収納ボックス Sタイプ',
    manufacturer: 'Gハウス',
    modelNumber: 'SANITA-TOILET-S',
    unit: '個',
    isOption: true,
    description: 'W300×H740×D117.4(有効) ※クリアホワイトのみ 扉開き方向選択可',
    variants: [
      { id: 'v1', color: 'クリアホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 53000 },
      { plan: 'HOURS', price: 53000 },
      { plan: 'LIFE+', price: 53000 },
      { plan: 'LIFE', price: 53000 }
    ]
  },
  {
    id: 'int-toilet-storage-upper',
    categoryId: 'toilet-storage',
    categoryName: 'トイレ収納',
    subcategory: 'トイレ収納',
    name: 'トイレ上部収納',
    manufacturer: 'Gハウス',
    modelNumber: 'TOILET-UPPER-STORAGE',
    unit: '個',
    isOption: true,
    description: '〜W905×H470×D300(有効) ※クリアホワイトのみ 両壁納まり/片壁納まり選択可',
    variants: [
      { id: 'v1', color: 'クリアホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  },

  // ========== カーテンBOX ==========
  {
    id: 'int-curtain-box-ceiling',
    categoryId: 'curtain-box',
    categoryName: 'カーテンBOX',
    subcategory: 'カーテンBOX',
    name: 'カーテンBOX（天井埋込タイプ）',
    manufacturer: 'Gハウス',
    modelNumber: 'CURTAIN-BOX-CEILING',
    unit: 'm',
    isOption: true,
    description: '※勾配天井時 採用不可 ※カーテンレールは付属いたしません ※1m以下は¥15,000',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 15000 }
    ]
  },
  {
    id: 'int-curtain-box-wall',
    categoryId: 'curtain-box',
    categoryName: 'カーテンBOX',
    subcategory: 'カーテンBOX',
    name: 'カーテンBOX（下がり壁タイプ）',
    manufacturer: 'Gハウス',
    modelNumber: 'CURTAIN-BOX-WALL',
    unit: 'm',
    isOption: true,
    description: '※カーテンレールは付属いたしません ※1m以下は¥11,000',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 11000 },
      { plan: 'HOURS', price: 11000 },
      { plan: 'LIFE+', price: 11000 },
      { plan: 'LIFE', price: 11000 }
    ]
  },

  // ========== 室内ドア（Panasonic VERITIS）スタイルブックP27 ==========
  // 標準デザイン - PAデザイン（全プラン標準）
  {
    id: 'door-std-pa',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '室内ドア標準',
    name: 'VERITIS PAデザイン ハイドアH2400',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-PA-H2400',
    unit: '個',
    isOption: false,
    description: 'ハイドア標準（H2400）開き戸・各居室・トイレ・脱衣室・ランドリーのみ標準装備',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', images: [] },
      { id: 'v2', color: 'ウォールナット柄', images: [] },
      { id: 'v3', color: 'チェリー柄', images: [] },
      { id: 'v4', color: 'グレージュアッシュ柄', images: [] },
      { id: 'v5', color: 'イデアオーク柄', images: [] },
      { id: 'v6', color: 'メープル柄', images: [] },
      { id: 'v7', color: 'ホワイトオーク柄', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ柄', images: [] },
      { id: 'v9', color: 'しっくいホワイト柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // 標準デザイン - TAデザイン トイレ用扉（全プラン標準）
  {
    id: 'door-std-ta',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '室内ドア標準',
    name: 'VERITIS TAデザイン トイレ用ハイドアH2400',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-TA-H2400',
    unit: '個',
    isOption: false,
    description: 'トイレ用扉（上部にスコープ有）ハイドア標準（H2400）',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', images: [] },
      { id: 'v2', color: 'ウォールナット柄', images: [] },
      { id: 'v3', color: 'チェリー柄', images: [] },
      { id: 'v4', color: 'グレージュアッシュ柄', images: [] },
      { id: 'v5', color: 'イデアオーク柄', images: [] },
      { id: 'v6', color: 'メープル柄', images: [] },
      { id: 'v7', color: 'ホワイトオーク柄', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ柄', images: [] },
      { id: 'v9', color: 'しっくいホワイト柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // ペイントカラー変更（全プラン OP ¥10,000/カ所）
  {
    id: 'door-paint-blackoak',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '室内ドア ペイントカラー',
    name: 'VERITIS ペイントカラー ブラックオーク柄',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-PAINT-BLACKOAK',
    unit: '個',
    isOption: true,
    description: 'ペイントカラー変更（扉1枚W900まで）',
    variants: [
      { id: 'v1', color: 'ブラックオーク柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },
  {
    id: 'door-paint-navyoak',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '室内ドア ペイントカラー',
    name: 'VERITIS ペイントカラー ネイビーオーク柄',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-PAINT-NAVYOAK',
    unit: '個',
    isOption: true,
    description: 'ペイントカラー変更（扉1枚W900まで）',
    variants: [
      { id: 'v1', color: 'ネイビーオーク柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },
  {
    id: 'door-paint-bluegrayoak',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '室内ドア ペイントカラー',
    name: 'VERITIS ペイントカラー ブルーグレーオーク柄',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-PAINT-BLUEGRAYOAK',
    unit: '個',
    isOption: true,
    description: 'ペイントカラー変更（扉1枚W900まで）',
    variants: [
      { id: 'v1', color: 'ブルーグレーオーク柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },
  {
    id: 'door-paint-bitterwald',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '室内ドア ペイントカラー',
    name: 'VERITIS ペイントカラー ビターウォルドオーク柄',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-PAINT-BITTERWALD',
    unit: '個',
    isOption: true,
    description: 'ペイントカラー変更（扉1枚W900まで）',
    variants: [
      { id: 'v1', color: 'ビターウォルドオーク柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },
  // ソリッドカラー変更（全プラン OP ¥20,000/カ所）
  {
    id: 'door-solid-soilblack',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '室内ドア ソリッドカラー',
    name: 'VERITIS ソリッドカラー ソイルブラック柄',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-SOLID-SOILBLACK',
    unit: '個',
    isOption: true,
    description: 'ソリッドカラー変更（扉1枚W900まで）',
    variants: [
      { id: 'v1', color: 'ソイルブラック柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  {
    id: 'door-solid-pearlgray',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '室内ドア ソリッドカラー',
    name: 'VERITIS ソリッドカラー パールグレー柄',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-SOLID-PEARLGRAY',
    unit: '個',
    isOption: true,
    description: 'ソリッドカラー変更（扉1枚W900まで）',
    variants: [
      { id: 'v1', color: 'パールグレー柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  // 取手・ストッパーカラー（標準付属品）
  {
    id: 'door-handle-silver',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '取手・ストッパー',
    name: 'ハンドル(A1型) サテンシルバー色',
    manufacturer: 'Panasonic',
    modelNumber: 'MJE1851ST',
    unit: '個',
    isOption: false,
    description: '開き戸用ハンドル サテンシルバー色（塗装）',
    variants: [
      { id: 'v1', color: 'サテンシルバー色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'door-handle-black',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '取手・ストッパー',
    name: 'ハンドル(A1型) オフブラック色',
    manufacturer: 'Panasonic',
    modelNumber: 'MJE1852ST',
    unit: '個',
    isOption: false,
    description: '開き戸用ハンドル オフブラック色（塗装）',
    variants: [
      { id: 'v1', color: 'オフブラック色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'door-pull-silver',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '取手・ストッパー',
    name: '角型引手(C1型) サテンシルバー色',
    manufacturer: 'Panasonic',
    modelNumber: 'MJE1851BN',
    unit: '個',
    isOption: false,
    description: '引戸用引手 サテンシルバー色（塗装）',
    variants: [
      { id: 'v1', color: 'サテンシルバー色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'door-pull-black',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '取手・ストッパー',
    name: '角型引手(C1型) オフブラック色',
    manufacturer: 'Panasonic',
    modelNumber: 'MJE1852BN',
    unit: '個',
    isOption: false,
    description: '引戸用引手 オフブラック色（塗装）',
    variants: [
      { id: 'v1', color: 'オフブラック色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // 収納用建具 - 折戸（全プラン OP ¥50,000/カ所）
  {
    id: 'door-storage-fold-ph',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '収納用建具',
    name: 'VERITIS 収納用折戸 PHデザイン',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-CL-FOLD-PH',
    unit: '個',
    isOption: true,
    description: '折れ戸/壁芯々W910まで（H2400）取手レス',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', images: [] },
      { id: 'v2', color: 'ウォールナット柄', images: [] },
      { id: 'v3', color: 'チェリー柄', images: [] },
      { id: 'v4', color: 'グレージュアッシュ柄', images: [] },
      { id: 'v5', color: 'イデアオーク柄', images: [] },
      { id: 'v6', color: 'メープル柄', images: [] },
      { id: 'v7', color: 'ホワイトオーク柄', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ柄', images: [] },
      { id: 'v9', color: 'しっくいホワイト柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  {
    id: 'door-storage-fold-pa',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '収納用建具',
    name: 'VERITIS 収納用折戸 PAデザイン',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-CL-FOLD-PA',
    unit: '個',
    isOption: true,
    description: '折れ戸/壁芯々W910まで（H2400）',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', images: [] },
      { id: 'v2', color: 'ウォールナット柄', images: [] },
      { id: 'v3', color: 'チェリー柄', images: [] },
      { id: 'v4', color: 'グレージュアッシュ柄', images: [] },
      { id: 'v5', color: 'イデアオーク柄', images: [] },
      { id: 'v6', color: 'メープル柄', images: [] },
      { id: 'v7', color: 'ホワイトオーク柄', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ柄', images: [] },
      { id: 'v9', color: 'しっくいホワイト柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  // 収納用建具 - 折戸鏡付き（全プラン OP +¥30,000）
  {
    id: 'door-storage-fold-mirror',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '収納用建具',
    name: 'VERITIS 収納用折戸 鏡追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-CL-FOLD-MIRROR',
    unit: '個',
    isOption: true,
    description: '折れ戸に鏡追加（折れ戸のみ対応可）',
    variants: [
      { id: 'v1', color: '鏡付き', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  // 収納用建具 - 2枚引き違い戸（全プラン OP ¥90,000/カ所）
  {
    id: 'door-storage-slide2',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '収納用建具',
    name: 'VERITIS 収納用2枚引き違い戸',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-CL-SLIDE2',
    unit: '個',
    isOption: true,
    description: '2枚引き違い戸/壁芯々W1820まで（H2400）',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', images: [] },
      { id: 'v2', color: 'ウォールナット柄', images: [] },
      { id: 'v3', color: 'チェリー柄', images: [] },
      { id: 'v4', color: 'グレージュアッシュ柄', images: [] },
      { id: 'v5', color: 'イデアオーク柄', images: [] },
      { id: 'v6', color: 'メープル柄', images: [] },
      { id: 'v7', color: 'ホワイトオーク柄', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ柄', images: [] },
      { id: 'v9', color: 'しっくいホワイト柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 90000 },
      { plan: 'HOURS', price: 90000 },
      { plan: 'LIFE+', price: 90000 },
      { plan: 'LIFE', price: 90000 }
    ]
  },
  // 建具デザイン変更 - アクリル・ガラス入り（全プラン OP ¥50,000/カ所）
  {
    id: 'door-design-wb',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS WBデザイン 半透明アクリル板',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-WB',
    unit: '個',
    isOption: true,
    description: '建具デザイン変更 WBデザイン 開戸/引戸（半透明アクリル板）',
    variants: [
      { id: 'v1', color: '標準9色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  {
    id: 'door-design-wc',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS WCデザイン 半透明あわせガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-WC',
    unit: '個',
    isOption: true,
    description: '建具デザイン変更 WCデザイン 開戸/引戸（半透明あわせガラス）',
    variants: [
      { id: 'v1', color: '標準9色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  {
    id: 'door-design-ld',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS LDデザイン 半透明アクリル板',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-LD',
    unit: '個',
    isOption: true,
    description: '建具デザイン変更 LDデザイン 開戸/引戸（半透明アクリル板）',
    variants: [
      { id: 'v1', color: '標準9色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  {
    id: 'door-design-mc',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS MCデザイン 半透明あわせガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-MC',
    unit: '個',
    isOption: true,
    description: '建具デザイン変更 MCデザイン 開戸/引戸（半透明あわせガラス）',
    variants: [
      { id: 'v1', color: '標準9色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  {
    id: 'door-design-lb',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS LBデザイン 半透明アクリル板',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-LB',
    unit: '個',
    isOption: true,
    description: '建具デザイン変更 LBデザイン 開戸/引戸（半透明アクリル板）',
    variants: [
      { id: 'v1', color: '標準9色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  // ペットドア（全プラン OP ¥50,000/カ所）
  {
    id: 'door-design-petdoor',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS PAデザイン+ペットドア',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-PA-PET',
    unit: '個',
    isOption: true,
    description: 'PAデザイン+ペットドア 開戸（開口 H280×W180）',
    variants: [
      { id: 'v1', color: '標準9色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  // HCデザイン 引戸のみ（全プラン OP 変更¥105,000/追加¥120,000）
  {
    id: 'door-design-hc-change',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS HCデザイン ガラス引戸 変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-HC-CHANGE',
    unit: '個',
    isOption: true,
    description: 'HCデザイン（透明orフロスト長熱処理ガラス）引戸のみ対応・引戸変更費用含む',
    variants: [
      { id: 'v1', color: '透明ガラス', images: [] },
      { id: 'v2', color: 'フロストガラス', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 105000 },
      { plan: 'HOURS', price: 105000 },
      { plan: 'LIFE+', price: 105000 },
      { plan: 'LIFE', price: 105000 }
    ]
  },
  {
    id: 'door-design-hc-add',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS HCデザイン ガラス引戸 追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-HC-ADD',
    unit: '個',
    isOption: true,
    description: 'HCデザイン（透明orフロスト長熱処理ガラス）引戸追加',
    variants: [
      { id: 'v1', color: '透明ガラス', images: [] },
      { id: 'v2', color: 'フロストガラス', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 },
      { plan: 'LIFE+', price: 120000 },
      { plan: 'LIFE', price: 120000 }
    ]
  },
  // HBデザイン 引戸のみ（全プラン OP 変更¥85,000/追加¥100,000〜¥120,000）
  {
    id: 'door-design-hb-change',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS HBデザイン ガラス引戸 変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-HB-CHANGE',
    unit: '個',
    isOption: true,
    description: 'HBデザイン（透明orフロスト長熱処理ガラス）引戸のみ対応・引戸変更費用含む',
    variants: [
      { id: 'v1', color: '透明ガラス', images: [] },
      { id: 'v2', color: 'フロストガラス', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 85000 },
      { plan: 'HOURS', price: 85000 },
      { plan: 'LIFE+', price: 85000 },
      { plan: 'LIFE', price: 85000 }
    ]
  },
  {
    id: 'door-design-hb-add',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具デザイン変更',
    name: 'VERITIS HBデザイン ガラス引戸 追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-HB-ADD',
    unit: '個',
    isOption: true,
    description: 'HBデザイン（透明orフロスト長熱処理ガラス）引戸追加',
    variants: [
      { id: 'v1', color: '透明ガラス', images: [] },
      { id: 'v2', color: 'フロストガラス', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 100000 }
    ]
  },
  // 追加オプション - 開き戸追加（全プラン OP ¥35,000/カ所）
  {
    id: 'door-add-swing',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具追加オプション',
    name: 'VERITIS 開き戸追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-ADD-SWING',
    unit: '個',
    isOption: true,
    description: '開き戸追加（リビングドア・書斎・洗面室・収納等）',
    variants: [
      { id: 'v1', color: '標準9色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 35000 },
      { plan: 'HOURS', price: 35000 },
      { plan: 'LIFE+', price: 35000 },
      { plan: 'LIFE', price: 35000 }
    ]
  },
  // 追加オプション - 片引戸変更（全プラン OP ¥36,000/カ所）
  {
    id: 'door-change-sliding',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具追加オプション',
    name: 'VERITIS 標準開戸から片引戸へ変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-CHANGE-SLIDE',
    unit: '個',
    isOption: true,
    description: '標準開戸から片引戸へ変更差額（上吊りタイプ、下方レール無）※2枚まで標準で変更可能、3枚目からオプション',
    variants: [
      { id: 'v1', color: '標準9色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 },
      { plan: 'LIFE+', price: 36000 },
      { plan: 'LIFE', price: 36000 }
    ]
  },
  // 追加オプション - 表示錠追加（全プラン OP ¥5,000/カ所）
  {
    id: 'door-add-lock',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具追加オプション',
    name: 'VERITIS 表示錠追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-ADD-LOCK',
    unit: '個',
    isOption: true,
    description: '表示錠付きに変更差額（※トイレ・脱衣室は標準で表示錠付属）',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 5000 },
      { plan: 'LIFE', price: 5000 }
    ]
  },
  // 追加オプション - 引戸追加（全プラン OP ¥71,000/カ所）
  {
    id: 'door-add-sliding',
    categoryId: 'interior-door',
    categoryName: 'ベース建具',
    subcategory: '建具追加オプション',
    name: 'VERITIS 引戸追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-ADD-SLIDE',
    unit: '個',
    isOption: true,
    description: '引戸追加（リビングドア・書斎・洗面室・収納等）',
    variants: [
      { id: 'v1', color: '標準9色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 71000 },
      { plan: 'HOURS', price: 71000 },
      { plan: 'LIFE+', price: 71000 },
      { plan: 'LIFE', price: 71000 }
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
    unit: 'セット',
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
    unit: 'セット',
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
    unit: '個',
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
    unit: '個',
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
    unit: 'セット',
    isOption: true,
    description: '可動棚システム（W900×H2400）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'ライトナチュラル', images: [] },
      { id: 'v3', color: 'ダークブラウン', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 90000 },
      { plan: 'HOURS', price: 85000 }
    ]
  },

  // ========== 造作ニッチ ==========
  {
    id: 'int-niche-pattern-a',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンA（H320×W320）',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-A',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています（断熱材の欠損の原因となる為）',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-b',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンB（H650×W500）※リモコンニッチ可能',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-B',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-c',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンC（H250×W750）',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-C',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-d',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンD（H1050×W500）',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-D',
    unit: '個',
    isOption: true,
    description: 'H650・H200・H200 台有に限る 棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-e',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンE（H250×W1600）※リモコンニッチ可能',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-E',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-f',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンF（H150×W780）',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-F',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-g',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンG（H150×W1050）',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-G',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-h',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンH（H320×W320）',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-H',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-i',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンI（H250×W750）',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-I',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-j',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンJ（H550×W400）洗面室におすすめ',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-J',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-k',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンK（H700×W400）洗面室におすすめ',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-K',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-pattern-l',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンL（H750×W400）洗面室におすすめ',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-L',
    unit: '個',
    isOption: true,
    description: '棚奥行は約100mm ※外壁側の壁へのニッチの施工はお断りしています',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },

  // ========== リモコンニッチ ==========
  {
    id: 'int-niche-remote-b',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: 'リモコンニッチ',
    name: 'リモコンニッチ パターンB（H650×W500）',
    manufacturer: 'Gハウス',
    modelNumber: 'REMOTE-NICHE-B',
    unit: '個',
    isOption: true,
    description: '配線スペース確保のため背面にふかし壁が必要な場合あり。ふかし壁を設けない場合は棚板奥行約30〜40mm',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-niche-remote-e',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: 'リモコンニッチ',
    name: 'リモコンニッチ パターンE（H250×W1600）',
    manufacturer: 'Gハウス',
    modelNumber: 'REMOTE-NICHE-E',
    unit: '個',
    isOption: true,
    description: '配線スペース確保のため背面にふかし壁が必要な場合あり。ふかし壁を設けない場合は棚板奥行約30〜40mm',
    variants: [
      { id: 'v1', color: 'シェルホワイト', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', images: [] },
      { id: 'v3', color: 'ブライトウォールナット', images: [] },
      { id: 'v4', color: 'アッシュウォールナット', images: [] },
      { id: 'v5', color: 'ダークグレー', images: [] },
      { id: 'v6', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },

  // ========== 補強・下地 ==========
  // 床補強 - 選択しない（標準）
  {
    id: 'int-floor-reinforce-none',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: '床補強',
    name: '床補強なし（標準）',
    manufacturer: '-',
    modelNumber: 'NONE',
    unit: 'セット',
    isOption: false,
    description: '床補強を行わない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-reinforce-floor',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: '床補強',
    name: '床補強',
    manufacturer: 'Gハウス',
    modelNumber: 'REINFORCE-FLOOR',
    unit: '㎡',
    isOption: true,
    description: '床補強工事（ピアノ、水槽など重量物設置用）',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 },
      { plan: 'LIFE+', price: 12000 },
      { plan: 'LIFE', price: 12000 }
    ]
  },

  // 壁下地 - 選択しない（標準）
  {
    id: 'int-wall-reinforce-none',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: '壁下地補強',
    name: '壁下地なし（標準）',
    manufacturer: '-',
    modelNumber: 'NONE',
    unit: 'セット',
    isOption: false,
    description: '壁下地補強を行わない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-reinforce-wall',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: '壁下地補強',
    name: '壁下地補強',
    manufacturer: 'Gハウス',
    modelNumber: 'REINFORCE-WALL',
    unit: '個',
    isOption: true,
    description: '1カ所（1,800mm×900mm）',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 6000 },
      { plan: 'HOURS', price: 6000 },
      { plan: 'LIFE+', price: 6000 },
      { plan: 'LIFE', price: 6000 }
    ]
  },
  // 天井下地 - 選択しない（標準）
  {
    id: 'int-ceiling-reinforce-none',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: 'ロールカーテン用天井下地',
    name: '天井下地なし（標準）',
    manufacturer: '-',
    modelNumber: 'NONE',
    unit: 'セット',
    isOption: false,
    description: '天井下地補強を行わない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-reinforce-ceiling-1m',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: 'ロールカーテン用天井下地',
    name: 'ロールカーテン用天井下地（1m未満）',
    manufacturer: 'Gハウス',
    modelNumber: 'REINFORCE-CEILING-1M',
    unit: '個',
    isOption: true,
    description: '下地材の厚み12mm・幅は300mm 長さ1m未満',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 3000 },
      { plan: 'HOURS', price: 3000 },
      { plan: 'LIFE+', price: 3000 },
      { plan: 'LIFE', price: 3000 }
    ]
  },
  {
    id: 'int-reinforce-ceiling-2m',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: 'ロールカーテン用天井下地',
    name: 'ロールカーテン用天井下地（2m未満）',
    manufacturer: 'Gハウス',
    modelNumber: 'REINFORCE-CEILING-2M',
    unit: '個',
    isOption: true,
    description: '下地材の厚み12mm・幅は300mm 長さ2m未満',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 6000 },
      { plan: 'HOURS', price: 6000 },
      { plan: 'LIFE+', price: 6000 },
      { plan: 'LIFE', price: 6000 }
    ]
  },
  {
    id: 'int-reinforce-ceiling-3m',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: 'ロールカーテン用天井下地',
    name: 'ロールカーテン用天井下地（3m未満）',
    manufacturer: 'Gハウス',
    modelNumber: 'REINFORCE-CEILING-3M',
    unit: '個',
    isOption: true,
    description: '下地材の厚み12mm・幅は300mm 長さ3m未満',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 9000 },
      { plan: 'HOURS', price: 9000 },
      { plan: 'LIFE+', price: 9000 },
      { plan: 'LIFE', price: 9000 }
    ]
  },
  {
    id: 'int-reinforce-ceiling-4m',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: 'ロールカーテン用天井下地',
    name: 'ロールカーテン用天井下地（4m未満）',
    manufacturer: 'Gハウス',
    modelNumber: 'REINFORCE-CEILING-4M',
    unit: '個',
    isOption: true,
    description: '下地材の厚み12mm・幅は300mm 長さ4m未満',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 },
      { plan: 'LIFE+', price: 12000 },
      { plan: 'LIFE', price: 12000 }
    ]
  },
  {
    id: 'int-magnet-cloth',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'マグネットクロス',
    name: 'マグネットクロス（マグマジック）',
    manufacturer: 'シンコール',
    modelNumber: 'MAGMAGIC',
    unit: '個',
    isOption: true,
    description: '600×750のクロス下地材 表面仕上がりはクロス ※カット、くりぬき施工は不可 コンセント、スイッチ等の干渉にご注意',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 },
      { plan: 'LIFE+', price: 36000 },
      { plan: 'LIFE', price: 36000 }
    ]
  },

  // ========== ベースクロス（壁） ==========
  {
    id: 'int-wall-base-001',
    categoryId: 'base-wall-cloth',
    categoryName: 'ベースクロス（壁）',
    subcategory: 'ベースクロス',
    name: 'サンゲツ ベースクロス',
    manufacturer: 'サンゲツ',
    modelNumber: 'SP-2801',
    unit: '㎡',
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

  // ========== ベースクロス（天井） ==========
  {
    id: 'int-ceiling-base-001',
    categoryId: 'base-ceiling-cloth',
    categoryName: 'ベースクロス（天井）',
    subcategory: 'ベースクロス',
    name: 'サンゲツ ベースクロス（天井）',
    manufacturer: 'サンゲツ',
    modelNumber: 'SP-2801-C',
    unit: '㎡',
    isOption: false,
    description: '標準天井クロス（全室標準）壁と同色',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 }
    ]
  },
  {
    id: 'int-wall-accent-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントクロス',
    name: 'サンゲツ厳選カタログ 標準面積内',
    manufacturer: 'サンゲツ',
    modelNumber: 'SANGETSU-SELECT',
    unit: '㎡',
    isOption: false,
    description: '標準アクセントクロス 坪×2㎡＝標準面積まで無料',
    variants: [
      { id: 'v1', color: '厳選カタログから選択', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-wall-accent-002',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントクロス',
    name: 'アクセントクロス追加（標準面積超過分）',
    manufacturer: 'サンゲツ',
    modelNumber: 'SANGETSU-SELECT-EXTRA',
    unit: '㎡',
    isOption: true,
    description: '標準面積（坪×2㎡）を超える場合のオプション',
    variants: [
      { id: 'v1', color: '厳選カタログから選択', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 1400 },
      { plan: 'HOURS', price: 1400 },
      { plan: 'LIFE+', price: 1400 },
      { plan: 'LIFE', price: 1400 }
    ]
  },

  // ========== アクセントタイル（ADVAN）==========
  {
    id: 'int-tile-advan-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'ストーンベニア',
    manufacturer: 'ADVAN',
    modelNumber: 'SV-001',
    unit: '㎡',
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
    unit: '個',
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

  // ========== 照明器具 ==========
  {
    id: 'int-light-001',
    categoryId: 'lighting',
    categoryName: '照明',
    subcategory: 'ダウンライト',
    name: 'LEDダウンライト 60W相当',
    manufacturer: 'Panasonic',
    modelNumber: 'NNN61510W',
    unit: '個',
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
    unit: '個',
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
    unit: '個',
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
    name: '第一種換気システム 熱交換ユニット本体',
    manufacturer: 'Panasonic',
    modelNumber: 'FY-VENT-UNIT',
    unit: 'セット',
    isOption: false,
    description: '熱交換ユニット本体（リモコンは本体と同色）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'グレー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-vent-grill-supply',
    categoryId: 'ventilation',
    categoryName: '換気',
    subcategory: '換気システム',
    name: '給気グリル（天井付）',
    manufacturer: 'Panasonic',
    modelNumber: 'FY-GPP024',
    unit: '個',
    isOption: false,
    description: '第一種換気 給気グリル',
    variants: [
      { id: 'v1', color: 'ホワイト（FY-GPP024-W）', images: [] },
      { id: 'v2', color: 'ライトブラウン（FY-GPP024-T）', images: [] },
      { id: 'v3', color: 'グレー（FY-GPP024-H）', images: [] },
      { id: 'v4', color: 'ブラック（FY-GPP024-K）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-vent-grill-exhaust',
    categoryId: 'ventilation',
    categoryName: '換気',
    subcategory: '換気システム',
    name: '排気グリル（トイレ用天井付）',
    manufacturer: 'Panasonic',
    modelNumber: 'VB-GMR50PFC',
    unit: '個',
    isOption: false,
    description: '第一種換気 排気グリル',
    variants: [
      { id: 'v1', color: 'ホワイト（VB-GMR50PFC-W）', images: [] },
      { id: 'v2', color: 'ライトブラウン（VB-GMR50PFC-T）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
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
    unit: '個',
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
    name: 'ホスクリーン（1カ所標準）',
    manufacturer: '川口技研',
    modelNumber: 'SPC-W',
    unit: 'セット',
    isOption: false,
    description: '天井付け室内物干し（2本1組）※1カ所標準',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-hanger-001-add',
    categoryId: 'hanger',
    categoryName: '物干し',
    subcategory: '室内物干し',
    name: 'ホスクリーン追加',
    manufacturer: '川口技研',
    modelNumber: 'SPC-W',
    unit: 'セット',
    isOption: true,
    description: '天井付け室内物干し 追加（2カ所目以降）',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 16000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 15000 }
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
    unit: '個',
    isOption: true,
    description: '電動式室内物干しユニット',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 85000 },
      { plan: 'HOURS', price: 90000 }
    ]
  },

  // ========== フロアタイル コンクリート調（PDF16追加）==========
  {
    id: 'int-floortile-001',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フロアタイル',
    materialType: 'フロアタイル',
    name: 'フロアタイル コンクリート調',
    manufacturer: '東リ',
    modelNumber: 'PST4019-4035',
    unit: '㎡',
    isOption: true,
    description: 'コンクリート調フロアタイル ※水廻りにご使用可能 ※水廻り以外でご使用の場合は追加費用',
    variants: [
      { id: 'v1', color: 'PST4019 スムースコンクリート', images: [] },
      { id: 'v2', color: 'PST4020 スムースコンクリート', images: [] },
      { id: 'v3', color: 'PST4021 スムースコンクリート', images: [] },
      { id: 'v4', color: 'PST4022 スムースコンクリート', images: [] },
      { id: 'v5', color: 'PST4023 スムースコンクリート', images: [] },
      { id: 'v6', color: 'PST4032 コンクリート', images: [] },
      { id: 'v7', color: 'PST4001 コンコット', images: [] },
      { id: 'v8', color: 'PST4005 コンコット', images: [] },
      { id: 'v9', color: 'PST4006 コンコット', images: [] },
      { id: 'v10', color: 'PST4034 フランモルタル', images: [] },
      { id: 'v11', color: 'PST4035 フランモルタル', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 6500 },
      { plan: 'HOURS', price: 6500 },
      { plan: 'LIFE+', price: 5000 },
      { plan: 'LIFE', price: 5000 }
    ]
  },

  // ========== フロアタイル 石目調（PDF17追加）==========
  {
    id: 'int-floortile-002',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フロアタイル',
    materialType: 'フロアタイル',
    name: 'フロアタイル 石目調',
    manufacturer: '東リ',
    modelNumber: 'PST4077-4123',
    unit: '㎡',
    isOption: true,
    description: '石目調フロアタイル ※水廻りにご使用可能',
    variants: [
      { id: 'v1', color: 'PST4093 ジオールストーン', images: [] },
      { id: 'v2', color: 'PST4095 ジオールストーン', images: [] },
      { id: 'v3', color: 'PST4077 フォグライム', images: [] },
      { id: 'v4', color: 'PST4080 フォグライム', images: [] },
      { id: 'v5', color: 'PST4083 フォグライム', images: [] },
      { id: 'v6', color: 'PST4086 フォグライム', images: [] },
      { id: 'v7', color: 'PST4089 フォグライム', images: [] },
      { id: 'v8', color: 'PST4122 クロムスレート', images: [] },
      { id: 'v9', color: 'PST4123 クロムスレート', images: [] },
      { id: 'v10', color: 'PST4108 カララホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 6500 },
      { plan: 'HOURS', price: 6500 },
      { plan: 'LIFE+', price: 5000 },
      { plan: 'LIFE', price: 5000 }
    ]
  },

  // ========== フロアタイル 木目調（PDF18追加）==========
  {
    id: 'int-floortile-003',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'フロアタイル',
    materialType: 'フロアタイル',
    name: 'フロアタイル 木目調',
    manufacturer: '東リ',
    modelNumber: 'PWT4228-4309',
    unit: '㎡',
    isOption: true,
    description: '木目調フロアタイル ※水廻りにご使用可能',
    variants: [
      { id: 'v1', color: 'PWT4309 籐', images: [] },
      { id: 'v2', color: 'PWT4228 フレンチヘリンボーン', images: [] },
      { id: 'v3', color: 'PWT4229 フレンチヘリンボーン', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 6500 },
      { plan: 'HOURS', price: 6500 },
      { plan: 'LIFE+', price: 5000 },
      { plan: 'LIFE', price: 5000 }
    ]
  },

  // ========== 床材タイル（PDF21追加）==========
  // タイル目地色（タイル床材選択時に必須）
  {
    id: 'int-tile-grout-001',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'タイル目地',
    materialType: 'タイル',
    name: 'タイル目地色',
    manufacturer: '共通',
    modelNumber: 'SS-GROUT',
    unit: 'セット',
    isOption: true,
    description: 'タイル床材選択時に目地色を選択（タイル施工費に含む）',
    variants: [
      { id: 'v1', color: '①ホワイト（SS-11K）', images: [] },
      { id: 'v2', color: '②ライトグレー（SS-32K）', images: [] },
      { id: 'v3', color: '③ダークグレー（SS-23K）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-tile-floor-001',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'タイル',
    materialType: 'タイル',
    name: 'ランドストン',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'CRD-X/PAN-X',
    unit: '㎡',
    isOption: true,
    description: '内装壁、内装床で使用可能 600×600/300×600 工事費用一式¥30,000 6㎡以下の場合追加¥50,000',
    variants: [
      { id: 'v1', color: 'CRD-X3810', images: [] },
      { id: 'v2', color: 'CRD-X3820', images: [] },
      { id: 'v3', color: 'CRD-X3830', images: [] },
      { id: 'v4', color: 'CRD-X3840', images: [] },
      { id: 'v5', color: 'PAN-X8010', images: [] },
      { id: 'v6', color: 'PAN-X8020', images: [] },
      { id: 'v7', color: 'PAN-X8030', images: [] },
      { id: 'v8', color: 'PAN-X8040', images: [] },
      { id: 'v9', color: 'PAN-X8050', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-tile-floor-002',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'タイル',
    materialType: 'タイル',
    name: 'ピエトラソーニ',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'IPF-600/MMP',
    unit: '㎡',
    isOption: true,
    description: '内装壁、内装床で使用可能 600×600/300×600 工事費用一式¥30,000 6㎡以下の場合追加¥50,000',
    variants: [
      { id: 'v1', color: 'IPF-600/MMP-21', images: [] },
      { id: 'v2', color: 'IPF-600/MMP-22', images: [] },
      { id: 'v3', color: 'IPF-600/MMP-23', images: [] },
      { id: 'v4', color: 'IPF-600/MMP-24', images: [] },
      { id: 'v5', color: 'IPF-600/MMP-25', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-tile-floor-003',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: 'タイル',
    materialType: 'タイル',
    name: 'メンフィス',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-600/MNP',
    unit: '㎡',
    isOption: true,
    description: '内装壁、内装床で使用可能 600×600/300×600 工事費用一式¥30,000 6㎡以下の場合追加¥50,000',
    variants: [
      { id: 'v1', color: 'IPF-600/MNP-21', images: [] },
      { id: 'v2', color: 'IPF-600/MNP-22', images: [] },
      { id: 'v3', color: 'IPF-600/MNP-23', images: [] },
      { id: 'v4', color: 'IPF-600/MNP-24', images: [] },
      { id: 'v5', color: 'IPF-600/MNP-25', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 25000 },
      { plan: 'HOURS', price: 25000 },
      { plan: 'LIFE+', price: 25000 },
      { plan: 'LIFE', price: 25000 }
    ]
  },

  // ========== 畳・小上がり（PDF22追加）==========
  {
    id: 'int-tatami-001',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '畳',
    name: '健やかたたみおもて 清流',
    manufacturer: '大建工業',
    modelNumber: 'SUKOYAKA-SEIRYU',
    unit: '個',
    isOption: true,
    description: '機能畳 半畳タイプ',
    variants: [
      { id: 'v1', color: '01 銀白色（ぎんぱくしょく）', colorCode: '#E8E8D0', images: [] },
      { id: 'v2', color: '02 黄金色（こがねいろ）', colorCode: '#DAA520', images: [] },
      { id: 'v3', color: '06 亜麻色（あまいろ）', colorCode: '#C4B7A6', images: [] },
      { id: 'v4', color: '09 墨染色（すみぞめいろ）', colorCode: '#595857', images: [] },
      { id: 'v5', color: '10 乳白色（にゅうはくしょく）', colorCode: '#F5F5DC', images: [] },
      { id: 'v6', color: '11 銀鼠色（ぎんねずいろ）', colorCode: '#91989F', images: [] },
      { id: 'v7', color: '12 墨染色（くりいろ）', colorCode: '#6C3524', images: [] },
      { id: 'v8', color: '14 灰桜色（はいざくらいろ）', colorCode: '#E8D3D1', images: [] },
      { id: 'v9', color: '15 白茶色（しらちゃいろ）', colorCode: '#C5A882', images: [] },
      { id: 'v10', color: '16 若草色（わかくさいろ）', colorCode: '#A4C520', images: [] },
      { id: 'v11', color: '19 胡桃色（くるみいろ）', colorCode: '#8B6914', images: [] },
      { id: 'v12', color: '21 小麦色（こむぎいろ）', colorCode: '#D4A76A', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  {
    id: 'int-koagari-001',
    categoryId: 'base-floor',
    categoryName: 'ベース床',
    subcategory: '小上がり',
    name: '小上がりスペース',
    manufacturer: 'Gハウス',
    modelNumber: 'KOAGARI-001',
    unit: '㎡',
    isOption: true,
    description: '小上がり造作工事',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 29000 },
      { plan: 'HOURS', price: 29000 },
      { plan: 'LIFE+', price: 29000 },
      { plan: 'LIFE', price: 29000 }
    ]
  },
  {
    id: 'int-koagari-002',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '小上がり下収納',
    name: '小上がり下引出収納 H350',
    manufacturer: 'Gハウス',
    modelNumber: 'KOAGARI-STR-H350',
    unit: '個',
    isOption: true,
    description: '小上がり下収納 引出タイプ H350（収納高さH200程度）',
    variants: [
      { id: 'v1', color: 'JC-516K（オーク）', images: [] },
      { id: 'v2', color: 'TJ-2062K（ウォルナット）', images: [] },
      { id: 'v3', color: 'K-6000KN（艶消しホワイト）', images: [] },
      { id: 'v4', color: 'K-6302KN（艶消しグレー）', images: [] },
      { id: 'v5', color: 'K-6306KN（艶消しブラック）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 87000 },
      { plan: 'HOURS', price: 87000 },
      { plan: 'LIFE+', price: 87000 },
      { plan: 'LIFE', price: 87000 }
    ]
  },
  {
    id: 'int-koagari-003',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '小上がり下収納',
    name: '小上がり下引出収納 H400',
    manufacturer: 'Gハウス',
    modelNumber: 'KOAGARI-STR-H400',
    unit: '個',
    isOption: true,
    description: '小上がり下収納 引出タイプ H400（収納高さH250程度）',
    variants: [
      { id: 'v1', color: 'JC-516K（オーク）', images: [] },
      { id: 'v2', color: 'TJ-2062K（ウォルナット）', images: [] },
      { id: 'v3', color: 'K-6000KN（艶消しホワイト）', images: [] },
      { id: 'v4', color: 'K-6302KN（艶消しグレー）', images: [] },
      { id: 'v5', color: 'K-6306KN（艶消しブラック）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 92000 },
      { plan: 'HOURS', price: 92000 },
      { plan: 'LIFE+', price: 92000 },
      { plan: 'LIFE', price: 92000 }
    ]
  },
  {
    id: 'int-bath-doorframe-001',
    categoryId: 'bathroom',
    categoryName: '水回り設備',
    subcategory: 'お風呂ドア枠',
    name: 'お風呂ドア枠',
    manufacturer: 'Gハウス',
    modelNumber: 'BATH-DOORFRAME',
    unit: '個',
    isOption: true,
    description: 'お風呂ドア枠',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', images: [] },
      { id: 'v2', color: 'オフブラック', images: [] },
      { id: 'v3', color: 'パールグレー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== 点検口・床下収納（PDF23追加）==========
  {
    id: 'int-hatch-floor-001',
    categoryId: 'hatch',
    categoryName: '点検口',
    subcategory: '床下点検口',
    name: '床下点検口 600×600',
    manufacturer: '城東テクノ',
    modelNumber: 'SPF-R60',
    unit: '個',
    isOption: false,
    description: '床下点検口 600×600',
    variants: [
      { id: 'v1', color: 'IV アイボリー', images: [] },
      { id: 'v2', color: 'NL ナチュラル', images: [] },
      { id: 'v3', color: 'MB ミディアムブラウン', images: [] },
      { id: 'v4', color: 'DB ダークブラウン', images: [] },
      { id: 'v5', color: 'BB ブラックブラウン', images: [] },
      { id: 'v6', color: 'LG ライトグレー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-hatch-ceiling-001',
    categoryId: 'hatch',
    categoryName: '点検口',
    subcategory: '天井点検口',
    name: '天井点検口 454×454',
    manufacturer: '城東テクノ',
    modelNumber: 'CDE-45',
    unit: '個',
    isOption: false,
    description: '天井点検口 454×454',
    variants: [
      { id: 'v1', color: 'W ホワイト', images: [] },
      { id: 'v2', color: 'SL マットシルバー（マット調アルミ色）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-storage-floor-001',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '床下収納',
    name: '床下収納庫',
    manufacturer: '城東テクノ',
    modelNumber: 'SPF-60S2',
    unit: '個',
    isOption: true,
    description: '床下収納庫 600×600（深さ約270mm）',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 47000 },
      { plan: 'HOURS', price: 47000 },
      { plan: 'LIFE+', price: 47000 },
      { plan: 'LIFE', price: 47000 }
    ]
  },

  // ========== 換気システム（PDF23追加）==========
  {
    id: 'int-ventilation-001',
    categoryId: 'ventilation',
    categoryName: '換気システム',
    subcategory: '第一種換気',
    name: 'DSDD換気システム',
    manufacturer: 'DSDD',
    modelNumber: 'DSDD-SYSTEM',
    unit: 'セット',
    isOption: true,
    description: 'DSDD第一種全熱交換換気システムへ変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 1500000 },
      { plan: 'HOURS', price: 1500000 },
      { plan: 'LIFE+', price: 1500000 },
      { plan: 'LIFE', price: 1500000 }
    ]
  },

  // ========== 階段（PDF24-25追加）==========
  {
    id: 'int-stair-001',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: '階段踏板',
    name: '階段踏板/蹴込板 パナソニック仕様',
    manufacturer: 'Panasonic',
    modelNumber: 'STAIR-PNS',
    unit: 'セット',
    isOption: false,
    description: '階段踏板・蹴込板（標準）床材とのコーディネイトができる11柄をラインアップ ※蹴込のみホワイト・ブラックを標準選択可',
    variants: [
      { id: 'v1', color: 'ウォールナット柄', images: [] },
      { id: 'v2', color: 'チェリー柄', images: [] },
      { id: 'v3', color: 'オーク柄', images: [] },
      { id: 'v4', color: 'メープル柄', images: [] },
      { id: 'v5', color: 'ホワイトオーク柄', images: [] },
      { id: 'v6', color: 'エイジドチーク柄', images: [] },
      { id: 'v7', color: 'エイジドチェスナット柄', images: [] },
      { id: 'v8', color: 'カームチェリー柄', images: [] },
      { id: 'v9', color: 'グレージュヒッコリー柄', images: [] },
      { id: 'v10', color: 'ウォッシュドオーク柄', images: [] },
      { id: 'v11', color: 'アイボリーアッシュ柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-stair-002',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: '階段踏板',
    name: '階段踏板/蹴込板 WOODTEC Live Natural仕様',
    manufacturer: 'WOODTEC',
    modelNumber: 'STAIR-WT-LN',
    unit: 'セット',
    isOption: false,
    description: '階段踏板・蹴込板（WOODTEC Live Natural 乱尺柄）※シュガーホワイト(アッシュ)は蹴込板がありません。ホワイト・ブラックよりご選択いただけます。',
    variants: [
      { id: 'v1', color: 'ブラックチェリー 乱尺柄', images: [] },
      { id: 'v2', color: 'シカモア 乱尺柄', images: [] },
      { id: 'v3', color: 'ハードメープル 乱尺柄', images: [] },
      { id: 'v4', color: 'ナラ樫 乱尺柄', images: [] },
      { id: 'v5', color: 'ブラックウォルナット 乱尺柄', images: [] },
      { id: 'v6', color: 'バーチ 乱尺柄', images: [] },
      { id: 'v7', color: 'オーク 乱尺柄', images: [] },
      { id: 'v8', color: 'アカシア 乱尺柄', images: [] },
      { id: 'v9', color: 'ドライメイプル 乱尺柄', images: [] },
      { id: 'v10', color: 'ドライウォルナット 乱尺柄', images: [] },
      { id: 'v11', color: 'ドライオーク 乱尺柄', images: [] },
      { id: 'v12', color: 'シュガーホワイト（アッシュ）乱尺柄', images: [] },
      { id: 'v13', color: 'ライトグレー（オーク）乱尺柄', images: [] },
      { id: 'v14', color: 'ミドルグレー（オーク）乱尺柄', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-stair-003',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: '階段踏板',
    name: '階段踏板/蹴込板 ikuta仕様',
    manufacturer: 'ikuta',
    modelNumber: 'STAIR-IKT',
    unit: 'セット',
    isOption: true,
    description: '階段踏板・蹴込板（ikuta）※塗装品のため近似色塗装になります。',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', images: [] },
      { id: 'v2', color: 'ハードメープル', images: [] },
      { id: 'v3', color: 'ナラ樫', images: [] },
      { id: 'v4', color: 'チーク', images: [] },
      { id: 'v5', color: 'イタヤカエデ', images: [] },
      { id: 'v6', color: 'アカシア', images: [] },
      { id: 'v7', color: 'ウォルナット', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 240000 },
      { plan: 'HOURS', price: 240000 },
      { plan: 'LIFE+', price: 240000 },
      { plan: 'LIFE', price: 240000 }
    ]
  },
  {
    id: 'int-stair-003b',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: '階段踏板',
    name: '階段踏板/蹴込板 ikutaエイジング仕様',
    manufacturer: 'ikuta',
    modelNumber: 'STAIR-IKT-AGING',
    unit: 'セット',
    isOption: true,
    description: '階段踏板・蹴込板（ikutaエイジング）※塗装品のため近似色塗装になります。',
    variants: [
      { id: 'v1', color: 'エイジングナチュラル', images: [] },
      { id: 'v2', color: 'エイジングホワイト', images: [] },
      { id: 'v3', color: 'エイジングタイガ', images: [] },
      { id: 'v4', color: 'エイジングカフェ', images: [] },
      { id: 'v5', color: 'エイジングビター', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 350000 },
      { plan: 'HOURS', price: 350000 },
      { plan: 'LIFE+', price: 350000 },
      { plan: 'LIFE', price: 350000 }
    ]
  },
  {
    id: 'int-stair-landing',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: '階段オプション',
    name: '階段 踊り場形状',
    manufacturer: 'Gハウス',
    modelNumber: 'STAIR-LANDING',
    unit: '個',
    isOption: true,
    description: '階段踊り場形状変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 80000 },
      { plan: 'HOURS', price: 80000 },
      { plan: 'LIFE+', price: 80000 },
      { plan: 'LIFE', price: 80000 }
    ]
  },
  {
    id: 'int-stair-004',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: 'アイアン階段',
    name: 'アイアン階段 スレート',
    manufacturer: 'Gハウス',
    modelNumber: 'IRON-STAIR-SLATE',
    unit: 'セット',
    isOption: true,
    description: 'アイアン階段（スレートタイプ）手摺形状：フラットバー（中桟1本・2本）・片側手摺のみ ※踏板は集成材塗装品',
    variants: [
      { id: 'v1', color: '日塗工/N-95 つや消ホワイト', images: [] },
      { id: 'v2', color: '日塗工/N-60 つや消グレー', images: [] },
      { id: 'v3', color: '日塗工/N-10 つや消ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 950000 },
      { plan: 'HOURS', price: 950000 },
      { plan: 'LIFE+', price: 950000 },
      { plan: 'LIFE', price: 950000 }
    ]
  },
  {
    id: 'int-stair-004b',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: 'アイアン階段',
    name: 'アイアンまわり階段（一曲がり追加）',
    manufacturer: 'Gハウス',
    modelNumber: 'IRON-STAIR-TURN',
    unit: '個',
    isOption: true,
    description: 'アイアン階段 一曲がり追加オプション',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 100000 }
    ]
  },
  {
    id: 'int-stair-004c',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: 'アイアン階段',
    name: 'アイアン階段 転落防止型へ変更',
    manufacturer: 'Gハウス',
    modelNumber: 'IRON-STAIR-SAFE',
    unit: 'セット',
    isOption: true,
    description: 'アイアン階段 手すり形状 転落防止型へ変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 150000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LIFE+', price: 150000 },
      { plan: 'LIFE', price: 150000 }
    ]
  },
  {
    id: 'int-stair-004d',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: 'アイアン階段',
    name: 'アイアン階段 両側手摺',
    manufacturer: 'Gハウス',
    modelNumber: 'IRON-STAIR-BOTH',
    unit: 'セット',
    isOption: true,
    description: 'アイアン階段 両側手摺へ変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 250000 },
      { plan: 'HOURS', price: 250000 },
      { plan: 'LIFE+', price: 250000 },
      { plan: 'LIFE', price: 250000 }
    ]
  },
  {
    id: 'int-stair-005',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: 'アイアン手すり',
    name: 'ホール アイアン手すり',
    manufacturer: 'Gハウス',
    modelNumber: 'IRON-HANDRAIL',
    unit: 'セット',
    isOption: true,
    description: 'ホール用アイアン手すり 手摺形状：フラットバー 上桟+中桟2本',
    variants: [
      { id: 'v1', color: '日塗工/N-95 つや消ホワイト', images: [] },
      { id: 'v2', color: '日塗工/N-60 つや消グレー', images: [] },
      { id: 'v3', color: '日塗工/N-10 つや消ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 240000 },
      { plan: 'HOURS', price: 240000 },
      { plan: 'LIFE+', price: 240000 },
      { plan: 'LIFE', price: 240000 }
    ]
  },
  {
    id: 'int-stair-handrail-lixil',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: '階段手すり',
    name: '手すり LIXIL スクエアタイプ',
    manufacturer: 'LIXIL',
    modelNumber: 'HANDRAIL-LIXIL',
    unit: 'セット',
    isOption: false,
    description: '階段手すり LIXIL スクエアタイプ',
    variants: [
      { id: 'v1', color: 'ホワイト（手すり棒W/プレシャスホワイト、ブラケットYY/プレシャスホワイト）', images: [] },
      { id: 'v2', color: 'ブラック（手すり棒AB/ブラック、ブラケットBE/アイアンブラック）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-stair-handrail-add',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: '階段手すり',
    name: '壁付I型手摺追加 H600',
    manufacturer: 'LIXIL',
    modelNumber: 'HANDRAIL-I-H600',
    unit: '個',
    isOption: true,
    description: '壁付I型手摺追加 H600',
    variants: [
      { id: 'v1', color: 'ホワイト', images: [] },
      { id: 'v2', color: 'ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 15000 }
    ]
  },

  // ========== 周辺部材（腰壁笠木）==========
  {
    id: 'int-wall-kasagi',
    categoryId: 'peripheral-parts',
    categoryName: '周辺部材',
    subcategory: '腰壁笠木',
    materialType: '腰壁笠木',
    name: '階段回り 腰壁笠木',
    manufacturer: 'Panasonic',
    modelNumber: 'KASAGI-STAIR',
    unit: 'セット',
    isOption: false,
    description: '階段回り腰壁笠木 標準高さFL+1100 階段部分斜め仕上がりとする ※腰壁がある場合のみ',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', images: [] },
      { id: 'v2', color: 'ソイルブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-wall-kasagi-none',
    categoryId: 'peripheral-parts',
    categoryName: '周辺部材',
    subcategory: '腰壁笠木',
    materialType: '腰壁笠木',
    name: '腰壁笠木不要',
    manufacturer: '不要',
    modelNumber: 'KASAGI-NONE',
    unit: 'セット',
    isOption: false,
    description: '腰壁がない場合は不要',
    variants: [
      { id: 'v1', color: '不要', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-wall-madowaku',
    categoryId: 'peripheral-parts',
    categoryName: '周辺部材',
    subcategory: '窓台',
    materialType: '窓台',
    name: '薄見付窓枠TS型',
    manufacturer: 'Panasonic',
    modelNumber: 'TS-MADOWAKU',
    unit: 'セット',
    isOption: false,
    description: '見付6mmのスマートな窓台 ※1色のみ採用可（2色以上採用不可）',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', images: [] },
      { id: 'v2', color: 'ソイルブラック', images: [] },
      { id: 'v3', color: 'パールグレー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-wall-habaki',
    categoryId: 'peripheral-parts',
    categoryName: '周辺部材',
    subcategory: '巾木',
    materialType: '巾木',
    name: 'クッション巾木スマート/H30',
    manufacturer: 'Panasonic',
    modelNumber: 'HABAKI-H30',
    unit: 'セット',
    isOption: false,
    description: '高さ3cm控え目な巾木 ※1色のみ採用可（2色以上採用不可）',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', images: [] },
      { id: 'v2', color: 'ソイルブラック', images: [] },
      { id: 'v3', color: 'パールグレー', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-wall-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: '腰壁',
    name: '腰壁',
    manufacturer: 'Gハウス',
    modelNumber: 'KOSHIKABE-001',
    unit: 'meter',
    isOption: true,
    description: '腰壁造作 FL+1000 ※1m以下は¥15,000',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', images: [] },
      { id: 'v2', color: 'ソイルブラック', images: [] },
      { id: 'v3', color: 'パールグレー', images: [] },
      { id: 'v4', color: 'ゴム集成クリア塗装', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 15000 }
    ]
  },
  {
    id: 'int-wall-002',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: '垂壁',
    name: '垂壁',
    manufacturer: 'Gハウス',
    modelNumber: 'TAREKABE-001',
    unit: 'meter',
    isOption: true,
    description: '垂壁造作',
    variants: [
      { id: 'v1', color: 'H200', images: [] },
      { id: 'v2', color: 'H400', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 24000 },
      { plan: 'HOURS', price: 24000 },
      { plan: 'LIFE+', price: 24000 },
      { plan: 'LIFE', price: 24000 }
    ]
  },
  {
    id: 'int-wall-003',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: '垂壁',
    name: 'アーチ垂壁',
    manufacturer: 'Gハウス',
    modelNumber: 'ARCH-TAREKABE',
    unit: '個',
    isOption: true,
    description: 'アーチ型垂壁造作',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 },
      { plan: 'LIFE+', price: 36000 },
      { plan: 'LIFE', price: 36000 }
    ]
  },

  // ========== 室内窓（PDF28準拠）==========
  // 選択しない（標準）
  {
    id: 'int-window-none',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓なし（標準）',
    manufacturer: '-',
    modelNumber: 'NONE',
    unit: 'セット',
    isOption: false,
    description: '室内窓を設置しない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '-', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // Aパターン（A-1〜A-4形状）
  {
    id: 'int-window-a-standard',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓 Aパターン 標準ガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-A-STD',
    unit: 'セット',
    isOption: true,
    description: '室内窓 Aパターン（A-1〜A-4形状）FIX窓・透明熱処理ガラス',
    variants: [
      { id: 'v1', color: 'オフブラック', images: [] },
      { id: 'v2', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 71000 },
      { plan: 'HOURS', price: 71000 },
      { plan: 'LIFE+', price: 71000 },
      { plan: 'LIFE', price: 71000 }
    ]
  },
  {
    id: 'int-window-a-option',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓 Aパターン オプションガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-A-OPT',
    unit: 'セット',
    isOption: true,
    description: '室内窓 Aパターン オプションガラス（カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス）',
    variants: [
      { id: 'v1', color: 'オフブラック', images: [] },
      { id: 'v2', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 105000 },
      { plan: 'HOURS', price: 105000 },
      { plan: 'LIFE+', price: 105000 },
      { plan: 'LIFE', price: 105000 }
    ]
  },
  // Bパターン（B-1〜B-5形状）
  {
    id: 'int-window-b-standard',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓 Bパターン 標準ガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-B-STD',
    unit: 'セット',
    isOption: true,
    description: '室内窓 Bパターン（B-1〜B-5形状）FIX窓・透明熱処理ガラス',
    variants: [
      { id: 'v1', color: 'オフブラック', images: [] },
      { id: 'v2', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 135000 },
      { plan: 'HOURS', price: 135000 },
      { plan: 'LIFE+', price: 135000 },
      { plan: 'LIFE', price: 135000 }
    ]
  },
  {
    id: 'int-window-b-option',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓 Bパターン オプションガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-B-OPT',
    unit: 'セット',
    isOption: true,
    description: '室内窓 Bパターン オプションガラス（カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス）',
    variants: [
      { id: 'v1', color: 'オフブラック', images: [] },
      { id: 'v2', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LIFE+', price: 200000 },
      { plan: 'LIFE', price: 200000 }
    ]
  },
  // Cパターン（C-1〜C-3形状）
  {
    id: 'int-window-c-standard',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓 Cパターン 標準ガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-C-STD',
    unit: 'セット',
    isOption: true,
    description: '室内窓 Cパターン（C-1〜C-3形状）FIX窓・透明熱処理ガラス',
    variants: [
      { id: 'v1', color: 'オフブラック', images: [] },
      { id: 'v2', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 197000 },
      { plan: 'HOURS', price: 197000 },
      { plan: 'LIFE+', price: 197000 },
      { plan: 'LIFE', price: 197000 }
    ]
  },
  {
    id: 'int-window-c-option',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓 Cパターン オプションガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-C-OPT',
    unit: 'セット',
    isOption: true,
    description: '室内窓 Cパターン オプションガラス（カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス）',
    variants: [
      { id: 'v1', color: 'オフブラック', images: [] },
      { id: 'v2', color: 'ホワイト', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 295000 },
      { plan: 'HOURS', price: 295000 },
      { plan: 'LIFE+', price: 295000 },
      { plan: 'LIFE', price: 295000 }
    ]
  },
  // 突き出し窓変更オプション
  {
    id: 'int-window-awning-change',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓オプション',
    name: '室内窓 突き出し窓変更',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-AWNING',
    unit: '個',
    isOption: true,
    description: 'FIX窓から突き出し窓への変更（上部のみ開閉可能な形状に適用可）',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 15000 }
    ]
  },

  // ========== アクセントパネル（PDF29追加）==========
  // 選択しない（標準）
  {
    id: 'int-panel-none',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'パネルなし（標準）',
    manufacturer: '-',
    modelNumber: 'NONE',
    unit: 'セット',
    isOption: false,
    description: 'アクセントパネルを設置しない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '-', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // THE WALL 朝日ウッドテック パネルサイズ 2,730mm×600mm
  {
    id: 'int-panel-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'THE WALL ¥15,000/㎡',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-15000',
    unit: '㎡',
    isOption: true,
    description: 'ウッドパネル パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'オーク（ツキ板）75mmピッチ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 15000 }
    ]
  },
  {
    id: 'int-panel-002',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'THE WALL ¥20,000/㎡',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-20000',
    unit: '㎡',
    isOption: true,
    description: 'ウッドパネル パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'レッドシダー（ツキ板）ランダムピッチ', images: [] },
      { id: 'v2', color: 'ヘムロック（ツキ板）ランダムピッチ', images: [] },
      { id: 'v3', color: 'ブラックチェリー（ツキ板）75mmピッチ', images: [] },
      { id: 'v4', color: 'オーク（ツキ板）ランダムピッチ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  {
    id: 'int-panel-002b',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'THE WALL ¥21,000/㎡',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-21000',
    unit: '㎡',
    isOption: true,
    description: 'ウッドパネル パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'アカシア（ツキ板）ランダムピッチ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 21000 },
      { plan: 'HOURS', price: 21000 },
      { plan: 'LIFE+', price: 21000 },
      { plan: 'LIFE', price: 21000 }
    ]
  },
  {
    id: 'int-panel-003',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'THE WALL ¥48,000/㎡',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-48000',
    unit: '㎡',
    isOption: true,
    description: 'ウッドパネル パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'オーク（挽き板）レリーフ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 48000 },
      { plan: 'HOURS', price: 48000 },
      { plan: 'LIFE+', price: 48000 },
      { plan: 'LIFE', price: 48000 }
    ]
  },
  {
    id: 'int-panel-003b',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'THE WALL ¥55,000/㎡',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-55000',
    unit: '㎡',
    isOption: true,
    description: 'ウッドパネル パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'ブラックチェリー（挽き板）レリーフ', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 55000 },
      { plan: 'HOURS', price: 55000 },
      { plan: 'LIFE+', price: 55000 },
      { plan: 'LIFE', price: 55000 }
    ]
  },
  {
    id: 'int-panel-003c',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'THE WALL ¥60,000/㎡',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-60000',
    unit: '㎡',
    isOption: true,
    description: 'ウッドパネル パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'ヘムロック（挽き板）Fフラット', images: [] },
      { id: 'v2', color: 'ヘムロック（挽き板）Tラウンド', images: [] },
      { id: 'v3', color: 'ヘムロック（挽き板）Mマウント', images: [] },
      { id: 'v4', color: 'ヘムロック（挽き板）Mマウント（ウェーブ加工）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  },
  // セラールパネル AICA パネルサイズ 900mm×2,400mm
  {
    id: 'int-panel-004',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'セラール',
    manufacturer: 'AICA',
    modelNumber: 'CERARL',
    unit: '個',
    isOption: true,
    description: 'セラールパネル 900mm×2,400mm ※キッチン・メーカーカップボード吊戸〜カウンター間は施工不可 見切り材（2本）+¥8,000 UP',
    variants: [
      { id: 'v1', color: 'ヘアライン仕上げ FKJ 6000ZYN24（見切り スノーホワイト）', images: [] },
      { id: 'v2', color: 'ヘアライン仕上げ FKJ 6300ZYN24（見切り アイボリー）', images: [] },
      { id: 'v3', color: 'ヘアライン仕上げ FKJ 6115ZYN24（見切り シルバー）', images: [] },
      { id: 'v4', color: 'ヘアライン仕上げ FKJ 6117ZYD24（見切り シルバー）', images: [] },
      { id: 'v5', color: '艶有り FKM 6000ZMN（見切り スノーホワイト）', images: [] },
      { id: 'v6', color: '艶有り FKM 6005ZMN（見切り アイボリー）', images: [] },
      { id: 'v7', color: '艶有り FKM 6110ZMN（見切り シルバー）', images: [] },
      { id: 'v8', color: '艶なし FJ-936ZD（見切り シルバー）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 33000 },
      { plan: 'HOURS', price: 33000 },
      { plan: 'LIFE+', price: 33000 },
      { plan: 'LIFE', price: 33000 }
    ]
  },
  {
    id: 'int-panel-005',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'セラール セレント',
    manufacturer: 'AICA',
    modelNumber: 'CERARL-SELENT',
    unit: '個',
    isOption: true,
    description: 'セラール セレント 900mm×2,400mm 見切り材（2本）+¥14,000 UP',
    variants: [
      { id: 'v1', color: 'Crunch Concrete Snow White 10301（見切り 胡粉 GOFUN）', images: [] },
      { id: 'v2', color: 'Crunch Concrete Beige 10302（見切り 白土 HAKUDO）', images: [] },
      { id: 'v3', color: 'Crunch Concrete Gray 10303（見切り シルバー）', images: [] },
      { id: 'v4', color: 'Crunch Concrete Dark Gray 10304（見切り 薄墨 USUZUMI）', images: [] },
      { id: 'v5', color: 'Spread Metal 10300（見切り 灰ねず HAINEZU）', images: [] },
      { id: 'v6', color: 'Grace Marble 10242（見切り 胡粉 GOFUN）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 44000 },
      { plan: 'HOURS', price: 44000 },
      { plan: 'LIFE+', price: 44000 },
      { plan: 'LIFE', price: 44000 }
    ]
  },

  // ========== アクセントタイル（PDF31-34追加）==========
  // 選択しない（標準）
  {
    id: 'int-wall-tile-none',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'タイルなし（標準）',
    manufacturer: '-',
    modelNumber: 'NONE',
    unit: 'セット',
    isOption: false,
    description: 'アクセントタイルを設置しない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '-', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  // 壁アクセントタイル目地色（壁タイル選択時に必須）※エコカラットは目地無しのみ
  {
    id: 'int-wall-tile-grout-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル目地',
    name: '壁タイル目地色',
    manufacturer: '共通',
    modelNumber: 'SS-WALL-GROUT',
    unit: 'セット',
    isOption: true,
    description: '壁アクセントタイル選択時に目地色を選択（タイル施工費に含む）※エコカラットは目地無しのみ',
    variants: [
      { id: 'v1', color: '①ホワイト（SS-11K）', images: [] },
      { id: 'v2', color: '②ライトグレー（SS-32K）', images: [] },
      { id: 'v3', color: '③グレー（SS-22K）', images: [] },
      { id: 'v4', color: '④ダークグレー（SS-23K）', images: [] },
      { id: 'v5', color: '⑤ベージュ（SS-33K）', images: [] },
      { id: 'v6', color: '⑥目地無し', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-tile-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'スカンジナビアストン',
    manufacturer: '名古屋モザイク',
    modelNumber: 'SCANDINAVIA-STONE',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 26000 },
      { plan: 'HOURS', price: 26000 },
      { plan: 'LIFE+', price: 26000 },
      { plan: 'LIFE', price: 26000 }
    ]
  },
  {
    id: 'int-tile-002',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'バイオフィリック',
    manufacturer: '名古屋モザイク',
    modelNumber: 'BIOPHILIC',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'グリーン', colorCode: '#2E8B57', images: [] },
      { id: 'v2', color: 'ベージュ', colorCode: '#D4C4A8', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 28000 },
      { plan: 'HOURS', price: 28000 },
      { plan: 'LIFE+', price: 28000 },
      { plan: 'LIFE', price: 28000 }
    ]
  },
  {
    id: 'int-tile-003',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'セメンティング',
    manufacturer: '名古屋モザイク',
    modelNumber: 'CEMENTING',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル コンクリート調',
    variants: [
      { id: 'v1', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-tile-004',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'モデネーゼ',
    manufacturer: '名古屋モザイク',
    modelNumber: 'MODENESE',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 28000 },
      { plan: 'HOURS', price: 28000 },
      { plan: 'LIFE+', price: 28000 },
      { plan: 'LIFE', price: 28000 }
    ]
  },
  {
    id: 'int-tile-005',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'ラヴィータ',
    manufacturer: '名古屋モザイク',
    modelNumber: 'LAVITA',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'ベージュ', colorCode: '#D4C4A8', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 22000 },
      { plan: 'LIFE+', price: 22000 },
      { plan: 'LIFE', price: 22000 }
    ]
  },
  {
    id: 'int-tile-006',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'ファータ',
    manufacturer: '名古屋モザイク',
    modelNumber: 'FATA',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 22000 },
      { plan: 'LIFE+', price: 22000 },
      { plan: 'LIFE', price: 22000 }
    ]
  },
  {
    id: 'int-tile-007',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'エキピズム',
    manufacturer: '名古屋モザイク',
    modelNumber: 'EKIPISM',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-tile-008',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'マットアンドモア',
    manufacturer: '名古屋モザイク',
    modelNumber: 'MAT-AND-MORE',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-tile-009',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'WIG-WAG',
    manufacturer: '平田タイル',
    modelNumber: 'WIG-WAG',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グリーン', colorCode: '#2E8B57', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 31000 },
      { plan: 'HOURS', price: 31000 },
      { plan: 'LIFE+', price: 31000 },
      { plan: 'LIFE', price: 31000 }
    ]
  },
  {
    id: 'int-tile-010',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'パレッタ',
    manufacturer: '平田タイル',
    modelNumber: 'PALETTA',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 27000 },
      { plan: 'HOURS', price: 27000 },
      { plan: 'LIFE+', price: 27000 },
      { plan: 'LIFE', price: 27000 }
    ]
  },
  {
    id: 'int-tile-011',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'マーブルモザイク',
    manufacturer: '平田タイル',
    modelNumber: 'MARBLE-MOSAIC',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル 大理石調',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 53000 },
      { plan: 'HOURS', price: 53000 },
      { plan: 'LIFE+', price: 53000 },
      { plan: 'LIFE', price: 53000 }
    ]
  },
  {
    id: 'int-tile-012',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'Britz',
    manufacturer: '平田タイル',
    modelNumber: 'BRITZ',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 25000 },
      { plan: 'HOURS', price: 25000 },
      { plan: 'LIFE+', price: 25000 },
      { plan: 'LIFE', price: 25000 }
    ]
  },
  {
    id: 'int-tile-013',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: '10Thirty',
    manufacturer: '平田タイル',
    modelNumber: '10THIRTY',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 31000 },
      { plan: 'HOURS', price: 31000 },
      { plan: 'LIFE+', price: 31000 },
      { plan: 'LIFE', price: 31000 }
    ]
  },
  {
    id: 'int-tile-014',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'レシピ',
    manufacturer: '平田タイル',
    modelNumber: 'RECIPE',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 34000 },
      { plan: 'HOURS', price: 34000 },
      { plan: 'LIFE+', price: 34000 },
      { plan: 'LIFE', price: 34000 }
    ]
  },
  {
    id: 'int-tile-015',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: '釉かげ',
    manufacturer: 'LIXIL',
    modelNumber: 'YUKAGE',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 22000 },
      { plan: 'LIFE+', price: 22000 },
      { plan: 'LIFE', price: 22000 }
    ]
  },
  {
    id: 'int-tile-016',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'シャインリーフ',
    manufacturer: 'LIXIL',
    modelNumber: 'SHINE-LEAF',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 59000 },
      { plan: 'HOURS', price: 59000 },
      { plan: 'LIFE+', price: 59000 },
      { plan: 'LIFE', price: 59000 }
    ]
  },
  {
    id: 'int-tile-017',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'イノセントマーブル',
    manufacturer: 'LIXIL',
    modelNumber: 'INNOCENT-MARBLE',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル 大理石調',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 63000 },
      { plan: 'HOURS', price: 63000 },
      { plan: 'LIFE+', price: 63000 },
      { plan: 'LIFE', price: 63000 }
    ]
  },
  {
    id: 'int-tile-018',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'グラベルガラス',
    manufacturer: 'LIXIL',
    modelNumber: 'GRAVEL-GLASS',
    unit: '㎡',
    isOption: true,
    description: 'アクセントタイル ガラス',
    variants: [
      { id: 'v1', color: 'クリア', colorCode: '#E8E8E8', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 61000 },
      { plan: 'HOURS', price: 61000 },
      { plan: 'LIFE+', price: 61000 },
      { plan: 'LIFE', price: 61000 }
    ]
  },

  // ========== エコカラット（PDF34追加）==========
  // 選択しない（標準）
  {
    id: 'int-ecocarat-none',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'エコカラット',
    name: 'エコカラットなし（標準）',
    manufacturer: '-',
    modelNumber: 'NONE',
    unit: 'セット',
    isOption: false,
    description: 'エコカラットを設置しない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '-', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },
  {
    id: 'int-ecocarat-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'エコカラット',
    name: 'エコカラット グランクォーツ',
    manufacturer: 'LIXIL',
    modelNumber: 'ECOCARAT-GRANQUARTZ',
    unit: '㎡',
    isOption: true,
    description: 'エコカラット 606×303mm',
    variants: [
      { id: 'v1', color: 'ECP-630/GRQ1（ライトグレー）', images: [] },
      { id: 'v2', color: 'EPC-630/GRQ3（ダークグレー）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 32000 },
      { plan: 'HOURS', price: 32000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },
  {
    id: 'int-ecocarat-002',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'エコカラット',
    name: 'エコカラット ラフセメント',
    manufacturer: 'LIXIL',
    modelNumber: 'ECOCARAT-ROUGHCEMENT',
    unit: '㎡',
    isOption: true,
    description: 'エコカラット 606×151×7mm',
    variants: [
      { id: 'v1', color: 'ECP-615/RGC1（グレー）', images: [] },
      { id: 'v2', color: 'ECP-615/RGC2（グレージュ）', images: [] },
      { id: 'v3', color: 'ECP-615/RGC3（ダークグレー）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 32000 },
      { plan: 'HOURS', price: 32000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },
  {
    id: 'int-ecocarat-003',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'エコカラット',
    name: 'エコカラット ヴァルスロック',
    manufacturer: 'LIXIL',
    modelNumber: 'ECOCARAT-VALSROCK',
    unit: '㎡',
    isOption: true,
    description: 'エコカラット 303×151mm',
    variants: [
      { id: 'v1', color: 'ECP-315/VSR1N（ホワイト）', images: [] },
      { id: 'v2', color: 'ECP-315/VSR2N（グレー）', images: [] },
      { id: 'v3', color: 'ECP-315/VSR3N（アッシュブラウン）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 32000 },
      { plan: 'HOURS', price: 32000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },
  {
    id: 'int-ecocarat-004',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'エコカラット',
    name: 'エコカラット ストーングレース',
    manufacturer: 'LIXIL',
    modelNumber: 'ECOCARAT-STONEGRACE',
    unit: '㎡',
    isOption: true,
    description: 'エコカラット 606×303mm',
    variants: [
      { id: 'v1', color: 'ECP-630/STG1N（グレー）', images: [] },
      { id: 'v2', color: 'ECP-630/STG2N（ベージュ）', images: [] },
      { id: 'v3', color: 'ECP-630/STG3N（ダークグレー）', images: [] },
      { id: 'v4', color: 'ECP-630/STG4N（チャコール）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 32000 },
      { plan: 'HOURS', price: 32000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },
  {
    id: 'int-ecocarat-005',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'エコカラット',
    name: 'エコカラット ラフクォーツ',
    manufacturer: 'LIXIL',
    modelNumber: 'ECOCARAT-ROUGHQUARTZ',
    unit: '㎡',
    isOption: true,
    description: 'エコカラット 303×75mm',
    variants: [
      { id: 'v1', color: 'ECP-375/RTZ1N（ライトグレー）', images: [] },
      { id: 'v2', color: 'ECP-375/RTZ2N（ベージュ）', images: [] },
      { id: 'v3', color: 'ECP-375/RTZ3N（ダークグレー）', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 32000 },
      { plan: 'HOURS', price: 32000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },

  // ========== 収納棚（PDF36追加）==========
  {
    id: 'int-shelf-001',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '枕棚',
    name: '枕棚+PH（2カ所目以降）W910',
    manufacturer: 'Panasonic',
    modelNumber: 'SHELF-PH-910',
    unit: '個',
    isOption: true,
    description: '枕棚+パイプハンガー W910',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  {
    id: 'int-shelf-002',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '枕棚',
    name: '枕棚+PH（2カ所目以降）W1820',
    manufacturer: 'Panasonic',
    modelNumber: 'SHELF-PH-1820',
    unit: '個',
    isOption: true,
    description: '枕棚+パイプハンガー W1820',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 35000 },
      { plan: 'HOURS', price: 35000 },
      { plan: 'LIFE+', price: 35000 },
      { plan: 'LIFE', price: 35000 }
    ]
  },
  {
    id: 'int-shelf-003',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '枕棚',
    name: '枕棚+PH（2カ所目以降）W2730',
    manufacturer: 'Panasonic',
    modelNumber: 'SHELF-PH-2730',
    unit: '個',
    isOption: true,
    description: '枕棚+パイプハンガー W2730',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 47000 },
      { plan: 'HOURS', price: 47000 },
      { plan: 'LIFE+', price: 47000 },
      { plan: 'LIFE', price: 47000 }
    ]
  },
  {
    id: 'int-shelf-004',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '枕棚',
    name: '枕棚のみ W910',
    manufacturer: 'Panasonic',
    modelNumber: 'SHELF-ONLY-910',
    unit: '個',
    isOption: true,
    description: '枕棚のみ W910',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 18000 },
      { plan: 'HOURS', price: 18000 },
      { plan: 'LIFE+', price: 18000 },
      { plan: 'LIFE', price: 18000 }
    ]
  },
  {
    id: 'int-shelf-005',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '枕棚',
    name: '枕棚+中段 W910',
    manufacturer: 'Panasonic',
    modelNumber: 'SHELF-MID-910',
    unit: '個',
    isOption: true,
    description: '枕棚+中段 W910',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 27000 },
      { plan: 'HOURS', price: 27000 },
      { plan: 'LIFE+', price: 27000 },
      { plan: 'LIFE', price: 27000 }
    ]
  },

  // ========== 可動棚（PDF37追加）==========
  {
    id: 'int-movable-shelf-001',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '可動棚',
    name: '可動棚 両壁収まり C300-2',
    manufacturer: 'Gハウス',
    modelNumber: 'C300-2',
    unit: '個',
    isOption: true,
    description: '可動棚 D300×2枚 W〜900mm',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 25000 },
      { plan: 'HOURS', price: 25000 },
      { plan: 'LIFE+', price: 25000 },
      { plan: 'LIFE', price: 25000 }
    ]
  },
  {
    id: 'int-movable-shelf-002',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '可動棚',
    name: '可動棚 両壁収まり C300-4',
    manufacturer: 'Gハウス',
    modelNumber: 'C300-4',
    unit: '個',
    isOption: true,
    description: '可動棚 D300×4枚 W〜900mm',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 32000 },
      { plan: 'HOURS', price: 32000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },
  {
    id: 'int-movable-shelf-003',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '可動棚',
    name: '可動棚 両壁収まり C300-6',
    manufacturer: 'Gハウス',
    modelNumber: 'C300-6',
    unit: '個',
    isOption: true,
    description: '可動棚 D300×6枚 W〜900mm',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 37000 },
      { plan: 'HOURS', price: 37000 },
      { plan: 'LIFE+', price: 37000 },
      { plan: 'LIFE', price: 37000 }
    ]
  },
  {
    id: 'int-movable-shelf-004',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '可動棚',
    name: '可動棚 両壁収まり C450-4',
    manufacturer: 'Gハウス',
    modelNumber: 'C450-4',
    unit: '個',
    isOption: true,
    description: '可動棚 D450×4枚 W〜900mm',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 37000 },
      { plan: 'HOURS', price: 37000 },
      { plan: 'LIFE+', price: 37000 },
      { plan: 'LIFE', price: 37000 }
    ]
  },
  {
    id: 'int-movable-shelf-005',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '可動棚',
    name: '可動棚 両壁収まり C450-6',
    manufacturer: 'Gハウス',
    modelNumber: 'C450-6',
    unit: '個',
    isOption: true,
    description: '可動棚 D450×6枚 W〜900mm',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 43000 },
      { plan: 'HOURS', price: 43000 },
      { plan: 'LIFE+', price: 43000 },
      { plan: 'LIFE', price: 43000 }
    ]
  },
  {
    id: 'int-movable-shelf-006',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '可動棚',
    name: 'ランドリー可動棚 W600',
    manufacturer: 'Gハウス',
    modelNumber: 'LAUNDRY-SHELF-600',
    unit: '個',
    isOption: true,
    description: 'ランドリー可動棚 D300棚板+パイプ付棚板',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },

  // ========== 樹脂製可動棚・ハンガーパイプ（PDF38追加）==========
  {
    id: 'int-resin-shelf-001',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '樹脂製可動棚',
    name: '樹脂製可動棚 S1',
    manufacturer: 'Gハウス',
    modelNumber: 'RESIN-S1',
    unit: '個',
    isOption: true,
    description: '樹脂製可動棚 D300×8枚 W756',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 71000 },
      { plan: 'HOURS', price: 71000 },
      { plan: 'LIFE+', price: 71000 },
      { plan: 'LIFE', price: 71000 }
    ]
  },
  {
    id: 'int-resin-shelf-002',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '樹脂製可動棚',
    name: '樹脂製可動棚 S2',
    manufacturer: 'Gハウス',
    modelNumber: 'RESIN-S2',
    unit: '個',
    isOption: true,
    description: '樹脂製可動棚 D300×8枚 W1132',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 120000 },
      { plan: 'HOURS', price: 120000 },
      { plan: 'LIFE+', price: 120000 },
      { plan: 'LIFE', price: 120000 }
    ]
  },
  {
    id: 'int-resin-shelf-003',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '樹脂製可動棚',
    name: '樹脂製可動棚 S3',
    manufacturer: 'Gハウス',
    modelNumber: 'RESIN-S3',
    unit: '個',
    isOption: true,
    description: '樹脂製可動棚 D300×8枚 W1682',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 141000 },
      { plan: 'HOURS', price: 141000 },
      { plan: 'LIFE+', price: 141000 },
      { plan: 'LIFE', price: 141000 }
    ]
  },
  {
    id: 'int-hanger-pipe-001',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'ハンガーパイプ',
    name: 'ハンガーパイプセット P1',
    manufacturer: 'Gハウス',
    modelNumber: 'HANGER-P1',
    unit: '個',
    isOption: true,
    description: 'ハンガーパイプセット① W〜2900mm',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 37000 },
      { plan: 'HOURS', price: 37000 },
      { plan: 'LIFE+', price: 37000 },
      { plan: 'LIFE', price: 37000 }
    ]
  },
  {
    id: 'int-hanger-pipe-002',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'ハンガーパイプ',
    name: 'ハンガーパイプセット P2',
    manufacturer: 'Gハウス',
    modelNumber: 'HANGER-P2',
    unit: '個',
    isOption: true,
    description: 'ハンガーパイプセット② 2段タイプ',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  {
    id: 'int-hanger-pipe-003',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'ハンガーパイプ',
    name: 'ハンガーパイプセット P3',
    manufacturer: 'Gハウス',
    modelNumber: 'HANGER-P3',
    unit: '個',
    isOption: true,
    description: 'ハンガーパイプセット③ W〜2900mm 2段',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 80000 },
      { plan: 'HOURS', price: 80000 },
      { plan: 'LIFE+', price: 80000 },
      { plan: 'LIFE', price: 80000 }
    ]
  },
  {
    id: 'int-hanger-pipe-004',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'ハンガーパイプ',
    name: 'ハンガーパイプセット P4',
    manufacturer: 'Gハウス',
    modelNumber: 'HANGER-P4',
    unit: '個',
    isOption: true,
    description: 'ハンガーパイプセット④ 大型2段',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 110000 },
      { plan: 'HOURS', price: 110000 },
      { plan: 'LIFE+', price: 110000 },
      { plan: 'LIFE', price: 110000 }
    ]
  },

  // ========== 玄関靴箱（PDF39追加）==========
  {
    id: 'int-shoebox-001',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '玄関靴箱',
    name: 'コンポリア W800',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPOLIA-W800',
    unit: '個',
    isOption: true,
    description: '玄関靴箱 フロートタイプ W800 H2070',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', colorCode: '#5C4033', images: [] },
      { id: 'v2', color: 'ウォールナット柄', colorCode: '#4A3728', images: [] },
      { id: 'v3', color: 'チェリー柄', colorCode: '#B5651D', images: [] },
      { id: 'v4', color: 'ホワイトオーク柄', colorCode: '#E8DCC8', images: [] },
      { id: 'v5', color: 'ホワイトアッシュ柄', colorCode: '#F5F5DC', images: [] },
      { id: 'v6', color: 'しっくいホワイト柄', colorCode: '#FFFFFF', images: [] },
      { id: 'v7', color: 'オーク柄', colorCode: '#C4A35A', images: [] },
      { id: 'v8', color: 'メープル柄', colorCode: '#E3B778', images: [] },
      { id: 'v9', color: 'ビターエルム柄', colorCode: '#3D2B1F', images: [] },
      { id: 'v10', color: 'エイジングオーク柄', colorCode: '#8B7355', images: [] },
      { id: 'v11', color: 'グレーウォールナット柄', colorCode: '#696969', images: [] },
      { id: 'v12', color: 'クリアベージュ柄', colorCode: '#D4C4A8', images: [] },
      { id: 'v13', color: 'スモークオーク柄', colorCode: '#6B5B4F', images: [] },
      { id: 'v14', color: 'ミディアムオーク柄', colorCode: '#9C7A3C', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 100000 },
      { plan: 'HOURS', price: 100000 },
      { plan: 'LIFE+', price: 100000 },
      { plan: 'LIFE', price: 100000 }
    ]
  },
  {
    id: 'int-shoebox-002',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '玄関靴箱',
    name: 'コンポリア W1200',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPOLIA-W1200',
    unit: '個',
    isOption: true,
    description: '玄関靴箱 フロートタイプ W1200 H2070',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', colorCode: '#5C4033', images: [] },
      { id: 'v2', color: 'ウォールナット柄', colorCode: '#4A3728', images: [] },
      { id: 'v3', color: 'チェリー柄', colorCode: '#B5651D', images: [] },
      { id: 'v4', color: 'ホワイトオーク柄', colorCode: '#E8DCC8', images: [] },
      { id: 'v5', color: 'ホワイトアッシュ柄', colorCode: '#F5F5DC', images: [] },
      { id: 'v6', color: 'しっくいホワイト柄', colorCode: '#FFFFFF', images: [] },
      { id: 'v7', color: 'オーク柄', colorCode: '#C4A35A', images: [] },
      { id: 'v8', color: 'メープル柄', colorCode: '#E3B778', images: [] },
      { id: 'v9', color: 'ビターエルム柄', colorCode: '#3D2B1F', images: [] },
      { id: 'v10', color: 'エイジングオーク柄', colorCode: '#8B7355', images: [] },
      { id: 'v11', color: 'グレーウォールナット柄', colorCode: '#696969', images: [] },
      { id: 'v12', color: 'クリアベージュ柄', colorCode: '#D4C4A8', images: [] },
      { id: 'v13', color: 'スモークオーク柄', colorCode: '#6B5B4F', images: [] },
      { id: 'v14', color: 'ミディアムオーク柄', colorCode: '#9C7A3C', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 150000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LIFE+', price: 150000 },
      { plan: 'LIFE', price: 150000 }
    ]
  },
  {
    id: 'int-shoebox-003',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '玄関靴箱',
    name: 'コンポリア W1600',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPOLIA-W1600',
    unit: '個',
    isOption: true,
    description: '玄関靴箱 フロートタイプ W1600 H2070',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', colorCode: '#5C4033', images: [] },
      { id: 'v2', color: 'ウォールナット柄', colorCode: '#4A3728', images: [] },
      { id: 'v3', color: 'チェリー柄', colorCode: '#B5651D', images: [] },
      { id: 'v4', color: 'ホワイトオーク柄', colorCode: '#E8DCC8', images: [] },
      { id: 'v5', color: 'ホワイトアッシュ柄', colorCode: '#F5F5DC', images: [] },
      { id: 'v6', color: 'しっくいホワイト柄', colorCode: '#FFFFFF', images: [] },
      { id: 'v7', color: 'オーク柄', colorCode: '#C4A35A', images: [] },
      { id: 'v8', color: 'メープル柄', colorCode: '#E3B778', images: [] },
      { id: 'v9', color: 'ビターエルム柄', colorCode: '#3D2B1F', images: [] },
      { id: 'v10', color: 'エイジングオーク柄', colorCode: '#8B7355', images: [] },
      { id: 'v11', color: 'グレーウォールナット柄', colorCode: '#696969', images: [] },
      { id: 'v12', color: 'クリアベージュ柄', colorCode: '#D4C4A8', images: [] },
      { id: 'v13', color: 'スモークオーク柄', colorCode: '#6B5B4F', images: [] },
      { id: 'v14', color: 'ミディアムオーク柄', colorCode: '#9C7A3C', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LIFE+', price: 200000 },
      { plan: 'LIFE', price: 200000 }
    ]
  },
  {
    id: 'int-shoebox-004',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '玄関靴箱',
    name: 'コンポリア ミラー追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPOLIA-MIRROR',
    unit: '個',
    isOption: true,
    description: '玄関靴箱用ミラー追加',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 },
      { plan: 'LIFE+', price: 36000 },
      { plan: 'LIFE', price: 36000 }
    ]
  },

  // ========== スロップシンク・洗濯パン（PDF41追加）==========
  {
    id: 'int-slop-sink-001',
    categoryId: 'sanitary',
    categoryName: '設備',
    subcategory: 'スロップシンク',
    name: 'スロップシンク',
    manufacturer: 'TOTO',
    modelNumber: 'SK507-SLOP',
    unit: 'セット',
    isOption: true,
    description: 'スロップシンク ボウル/水栓/排水Pトラップセット',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 115000 },
      { plan: 'HOURS', price: 115000 },
      { plan: 'LIFE+', price: 115000 },
      { plan: 'LIFE', price: 115000 }
    ]
  },
  {
    id: 'int-washing-pan-001',
    categoryId: 'sanitary',
    categoryName: '設備',
    subcategory: '洗濯パン',
    name: '洗濯パン',
    manufacturer: 'Panasonic',
    modelNumber: 'GB745-881',
    unit: '個',
    isOption: true,
    description: '洗濯パン GB745+排水トラップGB881セット',
    variants: [
      { id: 'v1', color: 'クールホワイト', colorCode: '#F5F5F5', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 24000 },
      { plan: 'HOURS', price: 24000 },
      { plan: 'LIFE+', price: 24000 },
      { plan: 'LIFE', price: 24000 }
    ]
  },

  // ========== 物干し金物（PDF43追加）==========
  {
    id: 'int-laundry-pole-001',
    categoryId: 'hanger',
    categoryName: '物干し',
    subcategory: '室内物干し',
    name: 'Kacu',
    manufacturer: '森田アルミ工業',
    modelNumber: 'KACU',
    unit: '個',
    isOption: true,
    description: '室内物干し金物 2カ所目から',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: '#1A1A1A', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 24000 },
      { plan: 'HOURS', price: 24000 },
      { plan: 'LIFE+', price: 24000 },
      { plan: 'LIFE', price: 24000 }
    ]
  },
  {
    id: 'int-laundry-pole-002',
    categoryId: 'hanger',
    categoryName: '物干し',
    subcategory: '室内物干し',
    name: 'Pid4M',
    manufacturer: '森田アルミ工業',
    modelNumber: 'PID4M',
    unit: '個',
    isOption: true,
    description: 'ワイヤー式室内物干し 2カ所目から',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 24000 },
      { plan: 'HOURS', price: 24000 },
      { plan: 'LIFE+', price: 24000 },
      { plan: 'LIFE', price: 24000 }
    ]
  },
  {
    id: 'int-laundry-pole-003',
    categoryId: 'hanger',
    categoryName: '物干し',
    subcategory: '室内物干し',
    name: 'ホスクリーン昇降タイプ UTM',
    manufacturer: '川口技研',
    modelNumber: 'UTM-S-W',
    unit: '個',
    isOption: true,
    description: 'ホスクリーン昇降タイプ（ヒモ操作）2カ所目から',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 24000 },
      { plan: 'HOURS', price: 24000 },
      { plan: 'LIFE+', price: 24000 },
      { plan: 'LIFE', price: 24000 }
    ]
  },
  {
    id: 'int-laundry-pole-004',
    categoryId: 'hanger',
    categoryName: '物干し',
    subcategory: '室内物干し',
    name: 'ホスクリーン昇降タイプ URM',
    manufacturer: '川口技研',
    modelNumber: 'URM-S-W',
    unit: '個',
    isOption: true,
    description: 'ホスクリーン昇降タイプ（操作棒）2カ所目から',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 24000 },
      { plan: 'HOURS', price: 24000 },
      { plan: 'LIFE+', price: 24000 },
      { plan: 'LIFE', price: 24000 }
    ]
  },

  // 乾太くんは家具・家電タブ（furnitureProducts.ts）に移動済み

  {
    id: 'int-gas-001',
    categoryId: 'appliance',
    categoryName: '設備',
    subcategory: 'ガス工事',
    name: 'ガス引込工事',
    manufacturer: 'Gハウス',
    modelNumber: 'GAS-INSTALL',
    unit: 'セット',
    isOption: true,
    description: 'ガス引込工事（最低ガス栓3カ所取付必要）',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 350000 },
      { plan: 'HOURS', price: 350000 },
      { plan: 'LIFE+', price: 350000 },
      { plan: 'LIFE', price: 350000 }
    ]
  },

  // ========== スイッチ・コンセント（PDF44追加）==========
  {
    id: 'int-switch-001',
    categoryId: 'electrical',
    categoryName: 'スイッチ',
    subcategory: 'スイッチ',
    name: 'スイッチ追加',
    manufacturer: 'Panasonic',
    modelNumber: 'SWITCH-ADD',
    unit: '個',
    isOption: true,
    description: 'スイッチ追加（コスモワイド21）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 5000 },
      { plan: 'LIFE', price: 5000 }
    ]
  },
  {
    id: 'int-outlet-001',
    categoryId: 'electrical',
    categoryName: 'コンセント',
    subcategory: 'コンセント',
    name: 'コンセント追加',
    manufacturer: 'Panasonic',
    modelNumber: 'OUTLET-ADD',
    unit: '個',
    isOption: true,
    description: 'コンセント追加（2口）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 6000 },
      { plan: 'HOURS', price: 6000 },
      { plan: 'LIFE+', price: 6000 },
      { plan: 'LIFE', price: 6000 }
    ]
  },
  {
    id: 'int-outlet-002',
    categoryId: 'electrical',
    categoryName: 'コンセント',
    subcategory: 'コンセント',
    name: '4口コンセント',
    manufacturer: 'Panasonic',
    modelNumber: 'OUTLET-4',
    unit: '個',
    isOption: true,
    description: '4口コンセント追加',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 8000 },
      { plan: 'HOURS', price: 8000 },
      { plan: 'LIFE+', price: 8000 },
      { plan: 'LIFE', price: 8000 }
    ]
  },
  {
    id: 'int-outlet-003',
    categoryId: 'electrical',
    categoryName: 'コンセント',
    subcategory: 'コンセント',
    name: '床用コンセント F型アップコン',
    manufacturer: 'Panasonic',
    modelNumber: 'FLOOR-OUTLET',
    unit: '個',
    isOption: true,
    description: '床用コンセント F型アップコン',
    variants: [
      { id: 'v1', color: 'アイボリー', colorCode: '#FFFFF0', images: [] },
      { id: 'v2', color: 'ブラウン', colorCode: '#8B4513', images: [] },
      { id: 'v3', color: 'ダークブラウン', colorCode: '#5C4033', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 },
      { plan: 'LIFE+', price: 12000 },
      { plan: 'LIFE', price: 12000 }
    ]
  },
  {
    id: 'int-outlet-004',
    categoryId: 'electrical',
    categoryName: 'コンセント',
    subcategory: 'コンセント',
    name: 'アドバンスシリーズ一式',
    manufacturer: 'Panasonic',
    modelNumber: 'ADVANCE-SERIES',
    unit: 'セット',
    isOption: true,
    description: 'アドバンスシリーズ全箇所変更',
    variants: [
      { id: 'v1', color: 'マットホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'マットグレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 72000 },
      { plan: 'HOURS', price: 72000 },
      { plan: 'LIFE+', price: 72000 },
      { plan: 'LIFE', price: 72000 }
    ]
  },
  {
    id: 'int-lan-001',
    categoryId: 'electrical',
    categoryName: '電気設備',
    subcategory: '配管',
    name: 'LAN用空配管追加',
    manufacturer: 'Panasonic',
    modelNumber: 'LAN-CONDUIT',
    unit: '個',
    isOption: true,
    description: 'LAN用空配管追加',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 12000 },
      { plan: 'HOURS', price: 12000 },
      { plan: 'LIFE+', price: 12000 },
      { plan: 'LIFE', price: 12000 }
    ]
  },
  {
    id: 'int-tv-001',
    categoryId: 'electrical',
    categoryName: '電気設備',
    subcategory: '配管',
    name: '壁掛けテレビ用空配管',
    manufacturer: 'Panasonic',
    modelNumber: 'TV-CONDUIT',
    unit: '個',
    isOption: true,
    description: '壁掛けテレビ用空配管',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 15000 },
      { plan: 'HOURS', price: 15000 },
      { plan: 'LIFE+', price: 15000 },
      { plan: 'LIFE', price: 15000 }
    ]
  },

  // ========== インターホン（PDF44追加）==========
  {
    id: 'int-intercom-001',
    categoryId: 'electrical',
    categoryName: 'インターホン',
    subcategory: 'インターホン',
    name: '外でもドアホン VL-SVD505KF変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SVD505KF',
    unit: 'セット',
    isOption: true,
    description: '外でもドアホン（スマホ対応）への変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 37000 },
      { plan: 'HOURS', price: 37000 },
      { plan: 'LIFE+', price: 37000 },
      { plan: 'LIFE', price: 37000 }
    ]
  },
  {
    id: 'int-intercom-002',
    categoryId: 'electrical',
    categoryName: 'インターホン',
    subcategory: 'インターホン',
    name: '外でもドアホン VL-SVD710KF変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SVD710KF',
    unit: 'セット',
    isOption: true,
    description: '外でもドアホン上位機種（スマホ対応）への変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 50000 },
      { plan: 'HOURS', price: 50000 },
      { plan: 'LIFE+', price: 50000 },
      { plan: 'LIFE', price: 50000 }
    ]
  },
  {
    id: 'int-intercom-003',
    categoryId: 'electrical',
    categoryName: 'インターホン',
    subcategory: 'インターホン',
    name: 'テレビドアホン VL-SE50KPA変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SE50KPA',
    unit: 'セット',
    isOption: true,
    description: 'テレビドアホンへの変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 27000 },
      { plan: 'HOURS', price: 27000 },
      { plan: 'LIFE+', price: 27000 },
      { plan: 'LIFE', price: 27000 }
    ]
  },

  // ========== その他設備（PDF45追加）==========
  {
    id: 'int-downlight-001',
    categoryId: 'lighting',
    categoryName: '照明',
    subcategory: 'ダウンライト',
    name: 'ダウンライト施工費（10個まで）',
    manufacturer: 'Gハウス',
    modelNumber: 'DOWNLIGHT-10',
    unit: 'セット',
    isOption: true,
    description: 'ダウンライト施工費（10個まで）※照明器具別途',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  },
  {
    id: 'int-downlight-002',
    categoryId: 'lighting',
    categoryName: '照明',
    subcategory: 'ダウンライト',
    name: 'ダウンライト施工費（11個目以降）',
    manufacturer: 'Gハウス',
    modelNumber: 'DOWNLIGHT-ADD',
    unit: '個',
    isOption: true,
    description: 'ダウンライト施工費（11個目から1個あたり）',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 3000 },
      { plan: 'HOURS', price: 3000 },
      { plan: 'LIFE+', price: 3000 },
      { plan: 'LIFE', price: 3000 }
    ]
  },
  {
    id: 'int-washing-faucet-001',
    categoryId: 'sanitary',
    categoryName: '設備',
    subcategory: '水栓',
    name: '洗濯機混合水栓へ変更',
    manufacturer: 'Gハウス',
    modelNumber: 'WASH-FAUCET-MIX',
    unit: '個',
    isOption: true,
    description: '洗濯機用水栓を混合水栓へ変更',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 36000 },
      { plan: 'HOURS', price: 36000 },
      { plan: 'LIFE+', price: 36000 },
      { plan: 'LIFE', price: 36000 }
    ]
  },
  {
    id: 'int-nanobubble-001',
    categoryId: 'sanitary',
    categoryName: '設備',
    subcategory: 'ナノバブル',
    name: 'ナノバブル発生装置 BeautyAqua',
    manufacturer: 'BeautyAqua',
    modelNumber: 'BEAUTYAQUA-20A',
    unit: 'セット',
    isOption: true,
    description: 'ナノバブル発生装置 20A',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LIFE+', price: 200000 },
      { plan: 'LIFE', price: 200000 }
    ]
  },

  // ========== 乾太くん（ガス衣類乾燥機）==========
  // ※ガス引込みが必要（設計で「ガス引込みあり」選択時のみ表示）
  {
    id: 'int-dryer-001',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん スタンダード 5kg',
    manufacturer: 'リンナイ',
    modelNumber: 'RDT-54S',
    unit: '個',
    isOption: true,
    description: 'ガス衣類乾燥機 スタンダードタイプ 5kg ※ガス引込み必須',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 272000 },
      { plan: 'HOURS', price: 272000 },
      { plan: 'LIFE+', price: 272000 },
      { plan: 'LIFE', price: 272000 }
    ]
  },
  {
    id: 'int-dryer-002',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん デラックス 6kg',
    manufacturer: 'リンナイ',
    modelNumber: 'RDT-63',
    unit: '個',
    isOption: true,
    description: 'ガス衣類乾燥機 デラックスタイプ 6kg ※ガス引込み必須',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 297000 },
      { plan: 'HOURS', price: 297000 },
      { plan: 'LIFE+', price: 297000 },
      { plan: 'LIFE', price: 297000 }
    ]
  },
  {
    id: 'int-dryer-003',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん デラックス 9kg',
    manufacturer: 'リンナイ',
    modelNumber: 'RDT-93',
    unit: '個',
    isOption: true,
    description: 'ガス衣類乾燥機 デラックスタイプ 9kg ※ガス引込み必須',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 330000 },
      { plan: 'HOURS', price: 330000 },
      { plan: 'LIFE+', price: 330000 },
      { plan: 'LIFE', price: 330000 }
    ]
  },
  {
    id: 'int-dryer-004',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん専用架台',
    manufacturer: 'リンナイ',
    modelNumber: 'DS-KADAI',
    unit: '個',
    isOption: true,
    description: '乾太くん専用架台 ※乾太くん選択時のみ',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-dryer-005',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: '乾太くん専用収納ユニット',
    manufacturer: 'リンナイ',
    modelNumber: 'DS-UNIT',
    unit: '個',
    isOption: true,
    description: '乾太くん専用収納ユニット ※乾太くん選択時のみ',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 140000 },
      { plan: 'HOURS', price: 140000 },
      { plan: 'LIFE+', price: 140000 },
      { plan: 'LIFE', price: 140000 }
    ]
  },
  {
    id: 'int-dryer-none',
    categoryId: 'gas-dryer',
    categoryName: 'ガス乾燥機',
    subcategory: '乾太くん',
    name: 'ガス乾燥機なし（標準）',
    manufacturer: '-',
    modelNumber: 'DRYER-NONE',
    unit: 'セット',
    isOption: false,
    description: 'ガス乾燥機を設置しない場合はこちらを選択',
    variants: [
      { id: 'v1', color: '選択なし', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 0 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  }
];

// フローリング製品（ジェネレーター生成）と静的製品を結合してエクスポート
// ジェネレーターで生成される製品と重複するIDは静的配列から除外
export const interiorProducts: Product[] = [
  ...floorProducts,
  ...staticInteriorProducts.filter(p => !generatedFloorProductIds.has(p.id))
];