// インテリア（内装）製品データ - DETAIL スタイルブックより
import type { Product } from '../types/product';

export const interiorProducts: Product[] = [
  // ========== ダイニングテーブル（スクエア） ==========
  {
    id: 'int-dt-001',
    categoryId: 'dining-table',
    categoryName: '家具',
    subcategory: 'ダイニングテーブル',
    name: 'Gハウスオリジナル ダイニングテーブル スクエア',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-DT-SQUARE',
    unit: 'piece',
    isOption: true,
    description: 'メラミン化粧板天板、スチール脚（スクエア/ラウンド）、コンセント付き W1500〜1800×D900×H720',
    variants: [
      { id: 'v1', color: 'OKオーク×スクエア・ブラック', images: [] },
      { id: 'v2', color: 'CRチェリー×スクエア・ブラック', images: [] },
      { id: 'v3', color: 'WNウォールナット×スクエア・ブラック', images: [] },
      { id: 'v4', color: 'DWダークWN×スクエア・ホワイト', images: [] },
      { id: 'v5', color: 'DUダストグレー×スクエア・ホワイト', images: [] },
      { id: 'v6', color: 'KRカブリード×ラウンド・ブラック', images: [] },
      { id: 'v7', color: 'FMファインモルタル×ラウンド・ホワイト', images: [] },
      { id: 'v8', color: 'APアンジェロプレーン×スクエア・ブラック', images: [] },
      { id: 'v9', color: 'OWオフホワイト×スクエア・ホワイト', images: [] },
      { id: 'v10', color: 'LBライトベージュ×スクエア・ホワイト', images: [] },
      { id: 'v11', color: 'MBミディアムベージュ×スクエア・ブラック', images: [] },
      { id: 'v12', color: 'DBダークベージュ×スクエア・ブラック', images: [] },
      { id: 'v13', color: 'MGミディアムグレー×スクエア・ブラック', images: [] },
      { id: 'v14', color: 'DGダークグレー×スクエア・ブラック', images: [] },
      { id: 'v15', color: 'BKブラック×スクエア・ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 130000 },
      { plan: 'HOURS', price: 130000 },
      { plan: 'LIFE+', price: 140000 },
      { plan: 'LIFE', price: 140000 }
    ]
  },

  // ========== ダイニングテーブル（ラウンド） ==========
  {
    id: 'int-dt-002',
    categoryId: 'dining-table',
    categoryName: '家具',
    subcategory: 'ダイニングテーブル',
    name: 'Gハウスオリジナル ダイニングテーブル ラウンド',
    manufacturer: 'Gハウス',
    modelNumber: 'GH-DT-ROUND',
    unit: 'piece',
    isOption: true,
    description: 'メラミン化粧板天板（丸形）、スチール脚（クワトロ/オクタ）Φ1100〜1200×H720',
    variants: [
      { id: 'v1', color: 'OKオーク×クワトロ・ブラック', images: [] },
      { id: 'v2', color: 'CRチェリー×クワトロ・ブラック', images: [] },
      { id: 'v3', color: 'WNウォールナット×クワトロ・ホワイト', images: [] },
      { id: 'v4', color: 'DWダークWN×オクタ・ブラック', images: [] },
      { id: 'v5', color: 'DUダストグレー×オクタ・ホワイト', images: [] },
      { id: 'v6', color: 'KRカブリード×クワトロ・ブラック', images: [] },
      { id: 'v7', color: 'FMファインモルタル×オクタ・ホワイト', images: [] },
      { id: 'v8', color: 'APアンジェロプレーン×クワトロ・ブラック', images: [] },
      { id: 'v9', color: 'OWオフホワイト×クワトロ・ホワイト', images: [] },
      { id: 'v10', color: 'BKブラック×オクタ・ブラック', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 120000, planId: 'LACIE' },
      { plan: 'HOURS', price: 120000, planId: 'HOURS' },
      { plan: 'LIFE+', price: 166000, planId: 'LIFE+' },
      { plan: 'LIFE', price: 166000, planId: 'LIFE' }
    ]
  },

  // ========== フローリング - ベリティスフロアーベースコート（Panasonic）標準 ==========
  {
    id: 'int-floor-veritis-basecoat',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ベリティスフロアーベースコート',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-BC',
    unit: 'sqm',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ライブナチュラルMRX 2P',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'MRX-2P',
    unit: 'sqm',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ライブナチュラルMSX/MSX-L',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'MSX/MSX-L',
    unit: 'sqm',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'マイスターズウッドフロアー ハードコートクリア',
    manufacturer: 'Panasonic',
    modelNumber: 'MEISTERS-HC',
    unit: 'sqm',
    isOption: true,
    description: '天然木突き板 ワックス不要 抗菌効果 汚れ・すり傷・凹み・キャスターに強い',
    variants: [
      { id: 'v1', color: 'ウォールナットクリア', images: [] },
      { id: 'v2', color: 'アカシアクリア', images: [] },
      { id: 'v3', color: 'バーチラスティッククリア', images: [] },
      { id: 'v4', color: 'バーチクリア', images: [] },
      { id: 'v5', color: 'メープルクリア', images: [] },
      { id: 'v6', color: 'アッシュクリア', images: [] }
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: '銘木フロアーラスティック 2P',
    manufacturer: 'イクタ',
    modelNumber: 'MEIBOKU-RUSTIC',
    unit: 'sqm',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'クルードフローリング303',
    manufacturer: 'イクタ',
    modelNumber: 'CRUDE-303',
    unit: 'sqm',
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
      { plan: 'LACIE', price: 5000 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 2000 },
      { plan: 'LIFE', price: 2000 }
    ]
  },

  // ========== フローリング - 銘木フロアーラスティック エイジング（イクタ）==========
  {
    id: 'int-floor-meiboku-aging',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: '銘木フロアーラスティック エイジング 2P',
    manufacturer: 'イクタ',
    modelNumber: 'MEIBOKU-AGING',
    unit: 'sqm',
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
      { plan: 'LACIE', price: 6000 },
      { plan: 'HOURS', price: 3000 },
      { plan: 'LIFE+', price: 3000 },
      { plan: 'LIFE', price: 3000 }
    ]
  },

  // ========== フローリング - ビンテージフロアーラスティック（イクタ）挽き板 ==========
  {
    id: 'int-floor-vintage-rustic',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ビンテージフロアーラスティック 2P',
    manufacturer: 'イクタ',
    modelNumber: 'VINTAGE-RUSTIC',
    unit: 'sqm',
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
      { plan: 'LACIE', price: 13000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },

  // ========== フローリング - ライブナチュラルプレミアム ラスティック（朝日ウッドテック）挽き板 ==========
  {
    id: 'int-floor-livnatural-premium',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ライブナチュラルプレミアム ラスティック 2P',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'LIVNATURAL-PREMIUM',
    unit: 'sqm',
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
      { plan: 'LACIE', price: 16000 },
      { plan: 'HOURS', price: 13000 },
      { plan: 'LIFE+', price: 13000 },
      { plan: 'LIFE', price: 13000 }
    ]
  },

  // ========== 玄関框（標準）==========
  {
    id: 'int-floor-entrance-frame-std',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: '玄関框',
    name: '玄関框（フローリング色合わせ）',
    manufacturer: 'Panasonic/朝日ウッドテック',
    modelNumber: 'ENTRANCE-FRAME-STD',
    unit: 'piece',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: '床見切り',
    name: '床見切り（フラットバー）',
    manufacturer: 'Gハウス',
    modelNumber: 'FLATBAR',
    unit: 'piece',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: '玄関框',
    name: '玄関框（プレイリーホームズ）〜1.8m迄',
    manufacturer: 'プレイリーホームズ',
    modelNumber: 'PRAIRIE-FRAME-18',
    unit: 'piece',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: '玄関框',
    name: '玄関框（プレイリーホームズ）〜2.8m迄',
    manufacturer: 'プレイリーホームズ',
    modelNumber: 'PRAIRIE-FRAME-28',
    unit: 'piece',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: '無垢床',
    name: 'チャネルオリジナル ユニシリーズ（オーク・バーチ・ウォールナット）',
    manufacturer: 'チャネルオリジナル',
    modelNumber: 'CHANNEL-UNI-A',
    unit: 'sqm',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: '無垢床',
    name: 'チャネルオリジナル ユニシリーズ（ブラックチェリー・チーク）',
    manufacturer: 'チャネルオリジナル',
    modelNumber: 'CHANNEL-UNI-B',
    unit: 'sqm',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: '無垢床',
    name: 'チャネルオリジナル ヘリンボーン',
    manufacturer: 'チャネルオリジナル',
    modelNumber: 'CHANNEL-HERRINGBONE',
    unit: 'sqm',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フロアタイル',
    name: 'マティル',
    manufacturer: '田島ルーフィング',
    modelNumber: 'MATIL',
    unit: 'sqm',
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'CFシート',
    name: 'CFシート',
    manufacturer: '東リ',
    modelNumber: 'CF-SHEET',
    unit: 'sqm',
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
      { plan: 'LACIE', price: 3000 },
      { plan: 'HOURS', price: 3000 },
      { plan: 'LIFE+', price: 0 },
      { plan: 'LIFE', price: 0 }
    ]
  },

  // ========== カーペットタイル（sangetsu）==========
  {
    id: 'int-floor-carpet',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'カーペットタイル',
    name: 'カーペットタイル',
    manufacturer: 'sangetsu',
    modelNumber: 'NT/DT',
    unit: 'sqm',
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
      { id: 'v12', color: 'NT-382', images: [] },
      { id: 'v13', color: 'DT-2201', images: [] },
      { id: 'v14', color: 'DT-2202', images: [] },
      { id: 'v15', color: 'DT-2204', images: [] },
      { id: 'v16', color: 'DT-2207', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 13000 },
      { plan: 'HOURS', price: 13000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'piece',
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
  {
    id: 'int-lattice-w045',
    categoryId: 'lattice',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: 'インテリア格子 W045（W276〜465mm）',
    manufacturer: 'LIXIL',
    modelNumber: 'LATTICE-W045',
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
  {
    id: 'int-counter-toilet',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: 'インテリアカウンター（トイレ用）',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-TOILET',
    unit: 'piece',
    isOption: true,
    description: '耐水集成タイプ 厚み24mm トイレなどちょい置きスペースに',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色', images: [] },
      { id: 'v2', color: 'ウォールナット色', images: [] },
      { id: 'v3', color: 'チェリー色', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色', images: [] },
      { id: 'v5', color: 'イタリアオーク色', images: [] },
      { id: 'v6', color: 'メープル色', images: [] },
      { id: 'v7', color: 'ホワイトオーク色', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色', images: [] },
      { id: 'v9', color: 'しっくいホワイト色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  {
    id: 'int-counter-shelf-small',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: 'インテリアカウンター 奥行100〜200mm（飾り棚用）W〜1000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-SHELF-S',
    unit: 'piece',
    isOption: true,
    description: '耐水集成タイプ 厚み24mm アングル3個付き',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色', images: [] },
      { id: 'v2', color: 'ウォールナット色', images: [] },
      { id: 'v3', color: 'チェリー色', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色', images: [] },
      { id: 'v5', color: 'イタリアオーク色', images: [] },
      { id: 'v6', color: 'メープル色', images: [] },
      { id: 'v7', color: 'ホワイトオーク色', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色', images: [] },
      { id: 'v9', color: 'しっくいホワイト色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 41000 },
      { plan: 'HOURS', price: 41000 },
      { plan: 'LIFE+', price: 41000 },
      { plan: 'LIFE', price: 41000 }
    ]
  },
  {
    id: 'int-counter-study-medium',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: 'インテリアカウンター 奥行201〜450mm（スタディスペース用）W1001〜1800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-STUDY-M',
    unit: 'piece',
    isOption: true,
    description: '耐水集成タイプ 厚み24mm ブラケット4個付き',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色', images: [] },
      { id: 'v2', color: 'ウォールナット色', images: [] },
      { id: 'v3', color: 'チェリー色', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色', images: [] },
      { id: 'v5', color: 'イタリアオーク色', images: [] },
      { id: 'v6', color: 'メープル色', images: [] },
      { id: 'v7', color: 'ホワイトオーク色', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色', images: [] },
      { id: 'v9', color: 'しっくいホワイト色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 64000 },
      { plan: 'HOURS', price: 64000 },
      { plan: 'LIFE+', price: 64000 },
      { plan: 'LIFE', price: 64000 }
    ]
  },
  {
    id: 'int-counter-work-large',
    categoryId: 'counter',
    categoryName: 'カウンター',
    subcategory: 'インテリアカウンター',
    name: 'インテリアカウンター 奥行451〜600mm（ワークスペース用）W1801〜2800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-WORK-L',
    unit: 'piece',
    isOption: true,
    description: '耐水集成タイプ 厚み24mm ブラケット6個付き',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色', images: [] },
      { id: 'v2', color: 'ウォールナット色', images: [] },
      { id: 'v3', color: 'チェリー色', images: [] },
      { id: 'v4', color: 'グレージュアッシュ色', images: [] },
      { id: 'v5', color: 'イタリアオーク色', images: [] },
      { id: 'v6', color: 'メープル色', images: [] },
      { id: 'v7', color: 'ホワイトオーク色', images: [] },
      { id: 'v8', color: 'ホワイトアッシュ色', images: [] },
      { id: 'v9', color: 'しっくいホワイト色', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 141000 },
      { plan: 'HOURS', price: 141000 },
      { plan: 'LIFE+', price: 141000 },
      { plan: 'LIFE', price: 141000 }
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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

  // ========== 造作ニッチ ==========
  {
    id: 'int-niche-pattern-a',
    categoryId: 'niche',
    categoryName: '造作',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンA（H320×W320）',
    manufacturer: 'Gハウス',
    modelNumber: 'NICHE-A',
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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

  // ========== 補強・下地 ==========
  {
    id: 'int-reinforce-wall',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: '壁下地補強',
    name: '壁下地補強',
    manufacturer: 'Gハウス',
    modelNumber: 'REINFORCE-WALL',
    unit: 'piece',
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
  {
    id: 'int-reinforce-floor',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: '床補強',
    name: '床補強',
    manufacturer: 'Gハウス',
    modelNumber: 'REINFORCE-FLOOR',
    unit: 'sqm',
    isOption: true,
    description: '床補強工事',
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
    id: 'int-reinforce-ceiling-1m',
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: 'ロールカーテン用天井下地',
    name: 'ロールカーテン用天井下地（1m未満）',
    manufacturer: 'Gハウス',
    modelNumber: 'REINFORCE-CEILING-1M',
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    categoryId: 'reinforcement',
    categoryName: '補強・下地',
    subcategory: 'マグネットクロス',
    name: 'マグネットクロス（マグマジック）',
    manufacturer: 'シンコール',
    modelNumber: 'MAGMAGIC',
    unit: 'piece',
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