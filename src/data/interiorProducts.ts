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
  },

  // ========== フロアタイル（PDF16-18追加）==========
  {
    id: 'int-floortile-001',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フロアタイル',
    name: 'ロイヤルストーン コンクリート調',
    manufacturer: '東リ',
    modelNumber: 'PST2170-2175',
    unit: 'sqm',
    isOption: true,
    description: 'コンクリート調フロアタイル 457×457mm',
    variants: [
      { id: 'v1', color: 'PST2170', colorCode: '#B0B0B0', images: [] },
      { id: 'v2', color: 'PST2171', colorCode: '#8C8C8C', images: [] },
      { id: 'v3', color: 'PST2172', colorCode: '#707070', images: [] },
      { id: 'v4', color: 'PST2173', colorCode: '#5A5A5A', images: [] },
      { id: 'v5', color: 'PST2174', colorCode: '#404040', images: [] },
      { id: 'v6', color: 'PST2175', colorCode: '#2D2D2D', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },
  {
    id: 'int-floortile-002',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フロアタイル',
    name: 'ロイヤルストーン 石目調',
    manufacturer: '東リ',
    modelNumber: 'PST2067-2084',
    unit: 'sqm',
    isOption: true,
    description: '石目調フロアタイル 457×457mm',
    variants: [
      { id: 'v1', color: 'PST2067 モカ', colorCode: '#8B7355', images: [] },
      { id: 'v2', color: 'PST2068 グレー', colorCode: '#808080', images: [] },
      { id: 'v3', color: 'PST2073 ベージュ', colorCode: '#D4C4A8', images: [] },
      { id: 'v4', color: 'PST2084 ホワイト', colorCode: '#F0F0F0', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },
  {
    id: 'int-floortile-003',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'フロアタイル',
    name: 'ロイヤルウッド 木目調',
    manufacturer: '東リ',
    modelNumber: 'PWT2403-2437',
    unit: 'sqm',
    isOption: true,
    description: '木目調フロアタイル 152×914mm',
    variants: [
      { id: 'v1', color: 'PWT2403 ライトオーク', colorCode: '#D4B896', images: [] },
      { id: 'v2', color: 'PWT2414 ミディアムオーク', colorCode: '#B8956E', images: [] },
      { id: 'v3', color: 'PWT2421 ウォールナット', colorCode: '#5C4033', images: [] },
      { id: 'v4', color: 'PWT2437 ダークウォールナット', colorCode: '#3D2B1F', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },

  // ========== カーペットタイル（PDF20追加）==========
  {
    id: 'int-carpet-001',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'カーペットタイル',
    name: 'カーペットタイル NTシリーズ',
    manufacturer: 'サンゲツ',
    modelNumber: 'NT-311-382',
    unit: 'sqm',
    isOption: true,
    description: 'カーペットタイル 500×500mm',
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
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },
  {
    id: 'int-carpet-002',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'カーペットタイル',
    name: 'カーペットタイル DTシリーズ',
    manufacturer: 'サンゲツ',
    modelNumber: 'DT-2201-2207',
    unit: 'sqm',
    isOption: true,
    description: 'カーペットタイル 500×500mm（プレミアム）',
    variants: [
      { id: 'v1', color: 'DT-2201', images: [] },
      { id: 'v2', color: 'DT-2202', images: [] },
      { id: 'v3', color: 'DT-2204', images: [] },
      { id: 'v4', color: 'DT-2207', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 13000 },
      { plan: 'HOURS', price: 13000 },
      { plan: 'LIFE+', price: 13000 },
      { plan: 'LIFE', price: 13000 }
    ]
  },

  // ========== 床材タイル（PDF21追加）==========
  {
    id: 'int-tile-floor-001',
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'タイル',
    name: 'ランドストン',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'LANDSTONE',
    unit: 'sqm',
    isOption: true,
    description: '大判床タイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'ベージュ', colorCode: '#D4C4A8', images: [] },
      { id: 'v3', color: 'グレー', colorCode: '#808080', images: [] }
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'タイル',
    name: 'ピエトラソーニ',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'PIETRA-SONI',
    unit: 'sqm',
    isOption: true,
    description: '大判床タイル',
    variants: [
      { id: 'v1', color: 'ライトグレー', colorCode: '#C0C0C0', images: [] },
      { id: 'v2', color: 'ダークグレー', colorCode: '#505050', images: [] }
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: 'タイル',
    name: 'メンフィス',
    manufacturer: 'LIXIL',
    modelNumber: 'MEMPHIS',
    unit: 'sqm',
    isOption: true,
    description: '床タイル',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] },
      { id: 'v3', color: 'ブラック', colorCode: '#2D2D2D', images: [] }
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: '畳',
    name: '健やかたたみおもて 清流',
    manufacturer: '大建工業',
    modelNumber: 'SUKOYAKA-SEIRYU',
    unit: 'piece',
    isOption: true,
    description: '機能畳 半畳タイプ',
    variants: [
      { id: 'v1', color: '銀白色', colorCode: '#E8E8D0', images: [] },
      { id: 'v2', color: '黄金色', colorCode: '#DAA520', images: [] },
      { id: 'v3', color: '亜麻色', colorCode: '#C4B7A6', images: [] },
      { id: 'v4', color: '墨染色', colorCode: '#595857', images: [] },
      { id: 'v5', color: '乳白色', colorCode: '#F5F5DC', images: [] },
      { id: 'v6', color: '白茶色', colorCode: '#C5A882', images: [] },
      { id: 'v7', color: '灰桜色', colorCode: '#E8D3D1', images: [] },
      { id: 'v8', color: '胡桃色', colorCode: '#8B6914', images: [] }
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
    categoryId: 'flooring',
    categoryName: '床材',
    subcategory: '小上がり',
    name: '小上がりスペース',
    manufacturer: 'Gハウス',
    modelNumber: 'KOAGARI-001',
    unit: 'sqm',
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
    name: '小上がり下引出収納 W910',
    manufacturer: 'Gハウス',
    modelNumber: 'KOAGARI-STR-910',
    unit: 'piece',
    isOption: true,
    description: '小上がり下収納 引出タイプ W910',
    variants: [
      { id: 'v1', color: '標準', images: [] }
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
    name: '小上がり下引出収納 W1365',
    manufacturer: 'Gハウス',
    modelNumber: 'KOAGARI-STR-1365',
    unit: 'piece',
    isOption: true,
    description: '小上がり下収納 引出タイプ W1365',
    variants: [
      { id: 'v1', color: '標準', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 92000 },
      { plan: 'HOURS', price: 92000 },
      { plan: 'LIFE+', price: 92000 },
      { plan: 'LIFE', price: 92000 }
    ]
  },

  // ========== 点検口・床下収納（PDF23追加）==========
  {
    id: 'int-storage-floor-001',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: '床下収納',
    name: '床下収納庫',
    manufacturer: '城東テクノ',
    modelNumber: 'SPF-R60F',
    unit: 'piece',
    isOption: true,
    description: '床下収納庫 600型',
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
    unit: 'set',
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
    unit: 'set',
    isOption: false,
    description: '階段踏板・蹴込板（標準）',
    variants: [
      { id: 'v1', color: 'ホワイトオーク', colorCode: '#E8DCC8', images: [] },
      { id: 'v2', color: 'チェリー', colorCode: '#B5651D', images: [] },
      { id: 'v3', color: 'ウォールナット', colorCode: '#5C4033', images: [] }
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
    name: '階段踏板/蹴込板 WOODTEC仕様',
    manufacturer: 'WOODTEC',
    modelNumber: 'STAIR-WT',
    unit: 'set',
    isOption: true,
    description: '階段踏板・蹴込板（WOODTEC）',
    variants: [
      { id: 'v1', color: 'オーク', colorCode: '#D4B896', images: [] },
      { id: 'v2', color: 'アッシュ', colorCode: '#C4B7A6', images: [] },
      { id: 'v3', color: 'ウォールナット', colorCode: '#5C4033', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 200000 },
      { plan: 'HOURS', price: 200000 },
      { plan: 'LIFE+', price: 200000 },
      { plan: 'LIFE', price: 200000 }
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
    unit: 'set',
    isOption: true,
    description: '階段踏板・蹴込板（ikuta）',
    variants: [
      { id: 'v1', color: 'オーク', colorCode: '#D4B896', images: [] },
      { id: 'v2', color: 'ウォールナット', colorCode: '#5C4033', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 350000 },
      { plan: 'HOURS', price: 350000 },
      { plan: 'LIFE+', price: 350000 },
      { plan: 'LIFE', price: 350000 }
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
    unit: 'set',
    isOption: true,
    description: 'アイアン階段（スレートタイプ）',
    variants: [
      { id: 'v1', color: 'ブラック', colorCode: '#1A1A1A', images: [] },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 950000 },
      { plan: 'HOURS', price: 950000 },
      { plan: 'LIFE+', price: 950000 },
      { plan: 'LIFE', price: 950000 }
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
    unit: 'set',
    isOption: true,
    description: 'ホール用アイアン手すり',
    variants: [
      { id: 'v1', color: 'ブラック', colorCode: '#1A1A1A', images: [] },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 240000 },
      { plan: 'HOURS', price: 240000 },
      { plan: 'LIFE+', price: 240000 },
      { plan: 'LIFE', price: 240000 }
    ]
  },
  {
    id: 'int-stair-006',
    categoryId: 'stairs',
    categoryName: '階段',
    subcategory: 'カーペット階段',
    name: 'カーペット階段',
    manufacturer: 'Gハウス',
    modelNumber: 'CARPET-STAIR',
    unit: 'set',
    isOption: true,
    description: 'カーペット仕上げ階段',
    variants: [
      { id: 'v1', color: 'グレー', colorCode: '#808080', images: [] },
      { id: 'v2', color: 'ベージュ', colorCode: '#D4C4A8', images: [] },
      { id: 'v3', color: 'ブラウン', colorCode: '#8B4513', images: [] },
      { id: 'v4', color: 'ネイビー', colorCode: '#000080', images: [] },
      { id: 'v5', color: 'グリーン', colorCode: '#2E8B57', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 210000 },
      { plan: 'HOURS', price: 210000 },
      { plan: 'LIFE+', price: 210000 },
      { plan: 'LIFE', price: 210000 }
    ]
  },

  // ========== 壁・腰壁（PDF26追加）==========
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
    description: '腰壁造作',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] },
      { id: 'v2', color: 'オーク', colorCode: '#D4B896', images: [] }
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
      { id: 'v1', color: '標準', images: [] }
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
    unit: 'piece',
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

  // ========== 室内ドア（PDF27追加）==========
  {
    id: 'int-door-001',
    categoryId: 'door',
    categoryName: '建具',
    subcategory: '室内ドア',
    name: 'VERITIS ハイドアH2400 ペイントカラー',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-H2400-PAINT',
    unit: 'piece',
    isOption: true,
    description: 'ハイドアH2400 ペイントカラー変更',
    variants: [
      { id: 'v1', color: 'ネイビーブルー', colorCode: '#000080', images: [] },
      { id: 'v2', color: 'カーキ', colorCode: '#808000', images: [] },
      { id: 'v3', color: 'グレージュ', colorCode: '#A9A9A9', images: [] },
      { id: 'v4', color: 'ピンクベージュ', colorCode: '#E8C4B8', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 10000 },
      { plan: 'HOURS', price: 10000 },
      { plan: 'LIFE+', price: 10000 },
      { plan: 'LIFE', price: 10000 }
    ]
  },
  {
    id: 'int-door-002',
    categoryId: 'door',
    categoryName: '建具',
    subcategory: '室内ドア',
    name: 'VERITIS ハイドアH2400 ソリッドカラー',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-H2400-SOLID',
    unit: 'piece',
    isOption: true,
    description: 'ハイドアH2400 ソリッドカラー変更',
    variants: [
      { id: 'v1', color: 'マットブラック', colorCode: '#1A1A1A', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  {
    id: 'int-door-003',
    categoryId: 'door',
    categoryName: '建具',
    subcategory: '収納建具',
    name: '収納用建具 折戸タイプ',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-CL-FOLD',
    unit: 'piece',
    isOption: true,
    description: '収納用建具 折戸タイプ',
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
    id: 'int-door-004',
    categoryId: 'door',
    categoryName: '建具',
    subcategory: '室内ドア',
    name: '建具デザイン変更 ガラス入り',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-GLASS',
    unit: 'piece',
    isOption: true,
    description: '建具デザイン ガラス入りへ変更',
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
    id: 'int-door-005',
    categoryId: 'door',
    categoryName: '建具',
    subcategory: '室内ドア',
    name: 'ペットドア',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-PET',
    unit: 'piece',
    isOption: true,
    description: 'ペット用くぐり戸付きドア',
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

  // ========== 室内窓（PDF28追加）==========
  {
    id: 'int-window-001',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓 Aパターン',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-A',
    unit: 'set',
    isOption: true,
    description: '室内窓 Aパターン（小サイズ）',
    variants: [
      { id: 'v1', color: 'ホワイトアッシュ', colorCode: '#E8E8E8', images: [] },
      { id: 'v2', color: 'スモークオーク', colorCode: '#8B7355', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 71000 },
      { plan: 'HOURS', price: 71000 },
      { plan: 'LIFE+', price: 71000 },
      { plan: 'LIFE', price: 71000 }
    ]
  },
  {
    id: 'int-window-002',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓 Bパターン',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-B',
    unit: 'set',
    isOption: true,
    description: '室内窓 Bパターン（中サイズ）',
    variants: [
      { id: 'v1', color: 'ホワイトアッシュ', colorCode: '#E8E8E8', images: [] },
      { id: 'v2', color: 'スモークオーク', colorCode: '#8B7355', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 135000 },
      { plan: 'HOURS', price: 135000 },
      { plan: 'LIFE+', price: 135000 },
      { plan: 'LIFE', price: 135000 }
    ]
  },
  {
    id: 'int-window-003',
    categoryId: 'window-interior',
    categoryName: '室内窓',
    subcategory: '室内窓',
    name: '室内窓 Cパターン',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-C',
    unit: 'set',
    isOption: true,
    description: '室内窓 Cパターン（大サイズ）',
    variants: [
      { id: 'v1', color: 'ホワイトアッシュ', colorCode: '#E8E8E8', images: [] },
      { id: 'v2', color: 'スモークオーク', colorCode: '#8B7355', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 197000 },
      { plan: 'HOURS', price: 197000 },
      { plan: 'LIFE+', price: 197000 },
      { plan: 'LIFE', price: 197000 }
    ]
  },

  // ========== アクセントパネル（PDF29追加）==========
  {
    id: 'int-panel-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'THE WALL オーク',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-OAK',
    unit: 'sqm',
    isOption: true,
    description: '無垢ウッドパネル オーク',
    variants: [
      { id: 'v1', color: 'ナチュラル', colorCode: '#D4B896', images: [] },
      { id: 'v2', color: 'ホワイト', colorCode: '#F5F5DC', images: [] }
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
    name: 'THE WALL レッドシダー',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-REDCEDAR',
    unit: 'sqm',
    isOption: true,
    description: '無垢ウッドパネル レッドシダー',
    variants: [
      { id: 'v1', color: 'ナチュラル', colorCode: '#B5651D', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 45000 },
      { plan: 'HOURS', price: 45000 },
      { plan: 'LIFE+', price: 45000 },
      { plan: 'LIFE', price: 45000 }
    ]
  },
  {
    id: 'int-panel-003',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'THE WALL ヘムロック',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-HEMLOCK',
    unit: 'sqm',
    isOption: true,
    description: '無垢ウッドパネル ヘムロック',
    variants: [
      { id: 'v1', color: 'ナチュラル', colorCode: '#E8DCC8', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 30000 },
      { plan: 'HOURS', price: 30000 },
      { plan: 'LIFE+', price: 30000 },
      { plan: 'LIFE', price: 30000 }
    ]
  },
  {
    id: 'int-panel-004',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントパネル',
    name: 'セラールパネル ヘアライン',
    manufacturer: 'AICA',
    modelNumber: 'CERARL-HAIRLINE',
    unit: 'piece',
    isOption: true,
    description: 'セラールパネル ヘアライン仕上げ 3×8',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', images: [] },
      { id: 'v2', color: 'ブラック', colorCode: '#1A1A1A', images: [] }
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
    name: 'セラールパネル コンクリート調',
    manufacturer: 'AICA',
    modelNumber: 'CERARL-CONCRETE',
    unit: 'piece',
    isOption: true,
    description: 'セラールパネル コンクリート調 3×8',
    variants: [
      { id: 'v1', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 44000 },
      { plan: 'HOURS', price: 44000 },
      { plan: 'LIFE+', price: 44000 },
      { plan: 'LIFE', price: 44000 }
    ]
  },

  // ========== 格子（PDF30追加）==========
  {
    id: 'int-lattice-001',
    categoryId: 'partition',
    categoryName: '間仕切り',
    subcategory: '格子',
    name: 'インテリア格子',
    manufacturer: 'LIXIL',
    modelNumber: 'INT-LATTICE',
    unit: 'piece',
    isOption: true,
    description: 'インテリア格子（室内用）',
    variants: [
      { id: 'v1', color: 'クリエペール', colorCode: '#E8DCC8', images: [] },
      { id: 'v2', color: 'クリエラスク', colorCode: '#B8956E', images: [] },
      { id: 'v3', color: 'クリエダーク', colorCode: '#5C4033', images: [] },
      { id: 'v4', color: 'コウノキ', colorCode: '#8B7355', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 110000 },
      { plan: 'HOURS', price: 110000 },
      { plan: 'LIFE+', price: 110000 },
      { plan: 'LIFE', price: 110000 }
    ]
  },

  // ========== アクセントタイル（PDF31-34追加）==========
  {
    id: 'int-tile-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'アクセントタイル',
    name: 'スカンジナビアストン',
    manufacturer: '名古屋モザイク',
    modelNumber: 'SCANDINAVIA-STONE',
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
    unit: 'sqm',
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
  {
    id: 'int-ecocarat-001',
    categoryId: 'wall',
    categoryName: '壁材',
    subcategory: 'エコカラット',
    name: 'エコカラット グランクォーツ',
    manufacturer: 'LIXIL',
    modelNumber: 'ECOCARAT-GRANQUARTZ',
    unit: 'sqm',
    isOption: true,
    description: 'エコカラット 606×303mm',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
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
    unit: 'sqm',
    isOption: true,
    description: 'エコカラット 606×151mm',
    variants: [
      { id: 'v1', color: 'グレー', colorCode: '#808080', images: [] }
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
    unit: 'sqm',
    isOption: true,
    description: 'エコカラット 303×151mm',
    variants: [
      { id: 'v1', color: 'グレー', colorCode: '#808080', images: [] },
      { id: 'v2', color: 'ベージュ', colorCode: '#D4C4A8', images: [] }
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
    unit: 'sqm',
    isOption: true,
    description: 'エコカラット 606×303mm',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
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
    unit: 'sqm',
    isOption: true,
    description: 'エコカラット 303×75mm',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'グレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 32000 },
      { plan: 'HOURS', price: 32000 },
      { plan: 'LIFE+', price: 32000 },
      { plan: 'LIFE', price: 32000 }
    ]
  },

  // ========== インテリアカウンター（PDF35追加）==========
  {
    id: 'int-counter-001',
    categoryId: 'furniture',
    categoryName: '造作家具',
    subcategory: 'カウンター',
    name: 'インテリアカウンター1（トイレ用）',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-1',
    unit: 'piece',
    isOption: true,
    description: 'トイレ用ちょい置きカウンター',
    variants: [
      { id: 'v1', color: 'ホワイトオーク', colorCode: '#E8DCC8', images: [] },
      { id: 'v2', color: 'チェリー', colorCode: '#B5651D', images: [] },
      { id: 'v3', color: 'ウォールナット', colorCode: '#5C4033', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 20000 },
      { plan: 'HOURS', price: 20000 },
      { plan: 'LIFE+', price: 20000 },
      { plan: 'LIFE', price: 20000 }
    ]
  },
  {
    id: 'int-counter-002',
    categoryId: 'furniture',
    categoryName: '造作家具',
    subcategory: 'カウンター',
    name: 'インテリアカウンター2 D150',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2-D150',
    unit: 'piece',
    isOption: true,
    description: 'インテリアカウンター 奥行150mm',
    variants: [
      { id: 'v1', color: 'ホワイトオーク', colorCode: '#E8DCC8', images: [] },
      { id: 'v2', color: 'チェリー', colorCode: '#B5651D', images: [] },
      { id: 'v3', color: 'ウォールナット', colorCode: '#5C4033', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 41000 },
      { plan: 'HOURS', price: 41000 },
      { plan: 'LIFE+', price: 41000 },
      { plan: 'LIFE', price: 41000 }
    ]
  },
  {
    id: 'int-counter-003',
    categoryId: 'furniture',
    categoryName: '造作家具',
    subcategory: 'カウンター',
    name: 'インテリアカウンター2 D300',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2-D300',
    unit: 'piece',
    isOption: true,
    description: 'インテリアカウンター 奥行300mm',
    variants: [
      { id: 'v1', color: 'ホワイトオーク', colorCode: '#E8DCC8', images: [] },
      { id: 'v2', color: 'チェリー', colorCode: '#B5651D', images: [] },
      { id: 'v3', color: 'ウォールナット', colorCode: '#5C4033', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 82000 },
      { plan: 'HOURS', price: 82000 },
      { plan: 'LIFE+', price: 82000 },
      { plan: 'LIFE', price: 82000 }
    ]
  },
  {
    id: 'int-counter-004',
    categoryId: 'furniture',
    categoryName: '造作家具',
    subcategory: 'カウンター',
    name: 'インテリアカウンター2 D450',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2-D450',
    unit: 'piece',
    isOption: true,
    description: 'インテリアカウンター 奥行450mm（デスク用）',
    variants: [
      { id: 'v1', color: 'ホワイトオーク', colorCode: '#E8DCC8', images: [] },
      { id: 'v2', color: 'チェリー', colorCode: '#B5651D', images: [] },
      { id: 'v3', color: 'ウォールナット', colorCode: '#5C4033', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 192000 },
      { plan: 'HOURS', price: 192000 },
      { plan: 'LIFE+', price: 192000 },
      { plan: 'LIFE', price: 192000 }
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
    isOption: true,
    description: '玄関靴箱 フロートタイプ W800 H2070',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', colorCode: '#5C4033', images: [] },
      { id: 'v2', color: 'ウォールナット柄', colorCode: '#4A3728', images: [] },
      { id: 'v3', color: 'チェリー柄', colorCode: '#B5651D', images: [] },
      { id: 'v4', color: 'ホワイトオーク柄', colorCode: '#E8DCC8', images: [] },
      { id: 'v5', color: 'ホワイトアッシュ柄', colorCode: '#F5F5DC', images: [] },
      { id: 'v6', color: 'しっくいホワイト柄', colorCode: '#FFFFFF', images: [] }
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
    unit: 'piece',
    isOption: true,
    description: '玄関靴箱 フロートタイプ W1200 H2070',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', colorCode: '#5C4033', images: [] },
      { id: 'v2', color: 'ウォールナット柄', colorCode: '#4A3728', images: [] },
      { id: 'v3', color: 'チェリー柄', colorCode: '#B5651D', images: [] },
      { id: 'v4', color: 'ホワイトオーク柄', colorCode: '#E8DCC8', images: [] },
      { id: 'v5', color: 'ホワイトアッシュ柄', colorCode: '#F5F5DC', images: [] },
      { id: 'v6', color: 'しっくいホワイト柄', colorCode: '#FFFFFF', images: [] }
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
    unit: 'piece',
    isOption: true,
    description: '玄関靴箱 フロートタイプ W1600 H2070',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', colorCode: '#5C4033', images: [] },
      { id: 'v2', color: 'ウォールナット柄', colorCode: '#4A3728', images: [] },
      { id: 'v3', color: 'チェリー柄', colorCode: '#B5651D', images: [] },
      { id: 'v4', color: 'ホワイトオーク柄', colorCode: '#E8DCC8', images: [] },
      { id: 'v5', color: 'ホワイトアッシュ柄', colorCode: '#F5F5DC', images: [] },
      { id: 'v6', color: 'しっくいホワイト柄', colorCode: '#FFFFFF', images: [] }
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
    unit: 'piece',
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

  // ========== トイレ収納（PDF40追加）==========
  {
    id: 'int-toilet-storage-001',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'トイレ収納',
    name: '造作トイレ 背面収納スペース',
    manufacturer: 'Gハウス',
    modelNumber: 'TOILET-ZS',
    unit: 'piece',
    isOption: true,
    description: 'トイレ背面収納スペース（棚板なし）',
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
    id: 'int-toilet-storage-002',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'トイレ収納',
    name: '造作トイレ 収納',
    manufacturer: 'Gハウス',
    modelNumber: 'TOILET-TZ',
    unit: 'piece',
    isOption: true,
    description: 'トイレ造作収納 W150×D130 棚板3枚',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#D4B896', images: [] },
      { id: 'v3', color: 'アッシュウォールナット', colorCode: '#8B7355', images: [] },
      { id: 'v4', color: 'ブライトウォールナット', colorCode: '#5C4033', images: [] },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 47000 },
      { plan: 'HOURS', price: 47000 },
      { plan: 'LIFE+', price: 47000 },
      { plan: 'LIFE', price: 47000 }
    ]
  },
  {
    id: 'int-toilet-storage-003',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'トイレ収納',
    name: 'トイレ上部収納',
    manufacturer: 'Gハウス',
    modelNumber: 'TOILET-TR-TK',
    unit: 'piece',
    isOption: true,
    description: 'トイレ上部収納 W905×H470×D300',
    variants: [
      { id: 'v1', color: 'クリアホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  },
  {
    id: 'int-toilet-storage-004',
    categoryId: 'storage',
    categoryName: '収納',
    subcategory: 'トイレ収納',
    name: 'サニタトイレ収納ボックス Sタイプ',
    manufacturer: 'Panasonic',
    modelNumber: 'SANITA-S',
    unit: 'piece',
    isOption: true,
    description: 'トイレ収納ボックス W300×H740×D117',
    variants: [
      { id: 'v1', color: 'クリアホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 53000 },
      { plan: 'HOURS', price: 53000 },
      { plan: 'LIFE+', price: 53000 },
      { plan: 'LIFE', price: 53000 }
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
    unit: 'set',
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
    unit: 'piece',
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

  // ========== 玄関手洗い（PDF42追加）==========
  {
    id: 'int-entrance-wash-001',
    categoryId: 'sanitary',
    categoryName: '設備',
    subcategory: '玄関手洗い',
    name: '玄関手洗い ボウルA',
    manufacturer: 'KAKUDAI',
    modelNumber: 'LY-493231',
    unit: 'piece',
    isOption: true,
    description: '玄関手洗いボウル 角型',
    variants: [
      { id: 'v1', color: 'マットホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'マットブラック', colorCode: '#1A1A1A', images: [] },
      { id: 'v3', color: 'マットグレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 99000 },
      { plan: 'HOURS', price: 99000 },
      { plan: 'LIFE+', price: 99000 },
      { plan: 'LIFE', price: 99000 }
    ]
  },
  {
    id: 'int-entrance-wash-002',
    categoryId: 'sanitary',
    categoryName: '設備',
    subcategory: '玄関手洗い',
    name: '玄関手洗い ボウルB',
    manufacturer: 'KAKUDAI',
    modelNumber: 'LY-493232',
    unit: 'piece',
    isOption: true,
    description: '玄関手洗いボウル 丸型深',
    variants: [
      { id: 'v1', color: 'マットホワイト', colorCode: '#F5F5F5', images: [] },
      { id: 'v2', color: 'マットブラック', colorCode: '#1A1A1A', images: [] },
      { id: 'v3', color: 'マットグレー', colorCode: '#808080', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 85000 },
      { plan: 'HOURS', price: 85000 },
      { plan: 'LIFE+', price: 85000 },
      { plan: 'LIFE', price: 85000 }
    ]
  },
  {
    id: 'int-entrance-wash-003',
    categoryId: 'sanitary',
    categoryName: '設備',
    subcategory: '玄関手洗い',
    name: '玄関手洗い ステンレスコーナーカウンター',
    manufacturer: 'KAKUDAI',
    modelNumber: 'STAINLESS-CORNER',
    unit: 'set',
    isOption: true,
    description: 'ステンレスボウル一体型コーナーカウンター（ボウル+排水+水栓）',
    variants: [
      { id: 'v1', color: 'ステンレス', colorCode: '#C0C0C0', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 96000 },
      { plan: 'HOURS', price: 96000 },
      { plan: 'LIFE+', price: 96000 },
      { plan: 'LIFE', price: 96000 }
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'piece',
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

  // ========== 乾太くん（PDF43追加）==========
  {
    id: 'int-dryer-001',
    categoryId: 'appliance',
    categoryName: '設備',
    subcategory: 'ガス乾燥機',
    name: '乾太くん スタンダード 5kg',
    manufacturer: 'リンナイ',
    modelNumber: 'RDT-54S',
    unit: 'piece',
    isOption: true,
    description: 'ガス衣類乾燥機 スタンダードタイプ 5kg',
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
    categoryId: 'appliance',
    categoryName: '設備',
    subcategory: 'ガス乾燥機',
    name: '乾太くん デラックス 6kg',
    manufacturer: 'リンナイ',
    modelNumber: 'RDT-63',
    unit: 'piece',
    isOption: true,
    description: 'ガス衣類乾燥機 デラックスタイプ 6kg',
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
    categoryId: 'appliance',
    categoryName: '設備',
    subcategory: 'ガス乾燥機',
    name: '乾太くん デラックス 9kg',
    manufacturer: 'リンナイ',
    modelNumber: 'RDT-93',
    unit: 'piece',
    isOption: true,
    description: 'ガス衣類乾燥機 デラックスタイプ 9kg',
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
    categoryId: 'appliance',
    categoryName: '設備',
    subcategory: 'ガス乾燥機',
    name: '乾太くん専用架台',
    manufacturer: 'リンナイ',
    modelNumber: 'DS-KADAI',
    unit: 'piece',
    isOption: true,
    description: '乾太くん専用架台',
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
    categoryId: 'appliance',
    categoryName: '設備',
    subcategory: 'ガス乾燥機',
    name: '乾太くん専用収納ユニット',
    manufacturer: 'リンナイ',
    modelNumber: 'DS-UNIT',
    unit: 'piece',
    isOption: true,
    description: '乾太くん専用収納ユニット',
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
    id: 'int-gas-001',
    categoryId: 'appliance',
    categoryName: '設備',
    subcategory: 'ガス工事',
    name: 'ガス引込工事',
    manufacturer: 'Gハウス',
    modelNumber: 'GAS-INSTALL',
    unit: 'set',
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
    categoryName: '電気設備',
    subcategory: 'スイッチ',
    name: 'スイッチ追加',
    manufacturer: 'Panasonic',
    modelNumber: 'SWITCH-ADD',
    unit: 'piece',
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
    categoryName: '電気設備',
    subcategory: 'コンセント',
    name: 'コンセント追加',
    manufacturer: 'Panasonic',
    modelNumber: 'OUTLET-ADD',
    unit: 'piece',
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
    categoryName: '電気設備',
    subcategory: 'コンセント',
    name: '4口コンセント',
    manufacturer: 'Panasonic',
    modelNumber: 'OUTLET-4',
    unit: 'piece',
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
    categoryName: '電気設備',
    subcategory: 'コンセント',
    name: '床用コンセント F型アップコン',
    manufacturer: 'Panasonic',
    modelNumber: 'FLOOR-OUTLET',
    unit: 'piece',
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
    categoryName: '電気設備',
    subcategory: 'コンセント',
    name: 'アドバンスシリーズ一式',
    manufacturer: 'Panasonic',
    modelNumber: 'ADVANCE-SERIES',
    unit: 'set',
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
    unit: 'piece',
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
    unit: 'piece',
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
    categoryName: '電気設備',
    subcategory: 'インターホン',
    name: '外でもドアホン VL-SVD505KF変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SVD505KF',
    unit: 'set',
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
    categoryName: '電気設備',
    subcategory: 'インターホン',
    name: '外でもドアホン VL-SVD710KF変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SVD710KF',
    unit: 'set',
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
    categoryName: '電気設備',
    subcategory: 'インターホン',
    name: 'テレビドアホン VL-SE50KPA変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SE50KPA',
    unit: 'set',
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

  // ========== エアコン（PDF45追加）==========
  {
    id: 'int-aircon-daikin-e6',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン Eシリーズ 6畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S225ATES-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン Eシリーズ 6畳用 100V 施工費込',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 110000 },
      { plan: 'HOURS', price: 110000 },
      { plan: 'LIFE+', price: 110000 },
      { plan: 'LIFE', price: 110000 }
    ]
  },
  {
    id: 'int-aircon-daikin-e10',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン Eシリーズ 10畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S285ATES-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン Eシリーズ 10畳用 100V 施工費込',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 150000 },
      { plan: 'HOURS', price: 150000 },
      { plan: 'LIFE+', price: 150000 },
      { plan: 'LIFE', price: 150000 }
    ]
  },
  {
    id: 'int-aircon-daikin-e14',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン Eシリーズ 14畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S405ATEP-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン Eシリーズ 14畳用 200V 施工費込',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 192000 },
      { plan: 'HOURS', price: 192000 },
      { plan: 'LIFE+', price: 192000 },
      { plan: 'LIFE', price: 192000 }
    ]
  },
  {
    id: 'int-aircon-daikin-gx6',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン GXシリーズ 6畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S224ATGS-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン GXシリーズ 6畳用 100V 施工費込（さらら除湿）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 165000 },
      { plan: 'HOURS', price: 165000 },
      { plan: 'LIFE+', price: 165000 },
      { plan: 'LIFE', price: 165000 }
    ]
  },
  {
    id: 'int-aircon-daikin-gx10',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン GXシリーズ 10畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S284ATGS-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン GXシリーズ 10畳用 100V 施工費込（さらら除湿）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 188000 },
      { plan: 'HOURS', price: 188000 },
      { plan: 'LIFE+', price: 188000 },
      { plan: 'LIFE', price: 188000 }
    ]
  },
  {
    id: 'int-aircon-daikin-gx14',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン',
    name: 'ダイキン GXシリーズ 14畳用',
    manufacturer: 'ダイキン',
    modelNumber: 'S404ATGP-W',
    unit: 'piece',
    isOption: true,
    description: 'ダイキン GXシリーズ 14畳用 200V 施工費込（さらら除湿）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 218000 },
      { plan: 'HOURS', price: 218000 },
      { plan: 'LIFE+', price: 218000 },
      { plan: 'LIFE', price: 218000 }
    ]
  },
  {
    id: 'int-aircon-mitsubishi-z6',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: '三菱電機',
    name: '三菱電機 霧ヶ峰 Zシリーズ 6畳用',
    manufacturer: '三菱電機',
    modelNumber: 'MSZ-ZXV2225',
    unit: 'piece',
    isOption: true,
    description: '霧ヶ峰 Zシリーズ 6畳用 100V 施工費込（さらっと除湿冷房）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 235000 },
      { plan: 'HOURS', price: 235000 },
      { plan: 'LIFE+', price: 235000 },
      { plan: 'LIFE', price: 235000 }
    ]
  },
  {
    id: 'int-aircon-mitsubishi-z10',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: '三菱電機',
    name: '三菱電機 霧ヶ峰 Zシリーズ 10畳用',
    manufacturer: '三菱電機',
    modelNumber: 'MSZ-ZXV2825S',
    unit: 'piece',
    isOption: true,
    description: '霧ヶ峰 Zシリーズ 10畳用 200V 施工費込（さらっと除湿冷房）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 274000 },
      { plan: 'HOURS', price: 274000 },
      { plan: 'LIFE+', price: 274000 },
      { plan: 'LIFE', price: 274000 }
    ]
  },
  {
    id: 'int-aircon-mitsubishi-z14',
    categoryId: 'aircon',
    categoryName: 'エアコン',
    subcategory: '三菱電機',
    name: '三菱電機 霧ヶ峰 Zシリーズ 14畳用',
    manufacturer: '三菱電機',
    modelNumber: 'MSZ-ZXV4025S',
    unit: 'piece',
    isOption: true,
    description: '霧ヶ峰 Zシリーズ 14畳用 200V 施工費込（さらっと除湿冷房）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 300000 },
      { plan: 'HOURS', price: 300000 },
      { plan: 'LIFE+', price: 300000 },
      { plan: 'LIFE', price: 300000 }
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
    unit: 'set',
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
    unit: 'piece',
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
    unit: 'piece',
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
    unit: 'set',
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
  }
];