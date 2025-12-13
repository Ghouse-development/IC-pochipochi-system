// エクステリア（外装）製品データ - ページ16-20追加分
// 色バリアント統合版
import type { Product } from '../types/product';

export const exteriorProductsPage16to20: Product[] = [
  // ===== 16ページ - KMEW 新フラット16 =====
  {
    id: 'ext-wall-flat16',
    categoryId: 'exterior-wall-flat',
    categoryName: '外壁',
    subcategory: '新フラット16',
    name: '新フラット16',
    manufacturer: 'KMEW',
    modelNumber: 'EH748xK',
    unit: 'sqm',
    isOption: true,
    description: 'エクセレージ・光セラ16（16mm厚）防火・非防火対応 横張のみ',
    variants: [
      { id: 'v1', color: 'サテン チタン ホワイト', colorCode: '4.6Y 8.7/0.2', images: [] },
      { id: 'v2', color: 'シルク チタン ホワイト', colorCode: '2Y 8.2/0.9', images: [] },
      { id: 'v3', color: 'アッシュ チタン ベージュ', colorCode: '1.3Y 7.3/1.4', images: [] },
      { id: 'v4', color: 'シルバー チタン グレー', colorCode: '5.6Y 7/0.3', images: [] },
      { id: 'v5', color: 'スロー チタン グレー', colorCode: '3.4Y 6.9/0.3', images: [] },
      { id: 'v6', color: 'ナチュラル チタン グレー', colorCode: '5.1GY 6.4/0.1', images: [] },
      { id: 'v7', color: 'グレー チタン ベージュ', colorCode: '2.1Y 5.7/0.8', images: [] },
      { id: 'v8', color: 'シルク チタン グレー', colorCode: '2.5Y 6/1', images: [] },
      { id: 'v9', color: 'フリント チタン ブラック', colorCode: '2.2R 3.7/0.2', images: [] },
      { id: 'v10', color: 'ストレート チタン グレー', colorCode: '0.3P 3.3/0.4', images: [] },
      { id: 'v11', color: 'モス チタン グリーン', colorCode: '4.3Y 4.5/0.4', images: [] },
      { id: 'v12', color: 'アッシュ チタン グリーン', colorCode: '2.8Y 4/0.3', images: [] },
      { id: 'v13', color: 'ベルベット チタン ブラウン', colorCode: '4.2YR 3.7/0.7', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 },
      { plan: 'LIFE+', price: 4500 },
      { plan: 'LIFE', price: 4500 }
    ]
  },

  // ===== 16ページ - KONOSHIMA アルテミュール =====
  {
    id: 'ext-wall-artemur',
    categoryId: 'exterior-wall-arte',
    categoryName: '外壁',
    subcategory: 'アルテミュール',
    name: 'アルテミュール',
    manufacturer: 'KONOSHIMA',
    modelNumber: 'ARTE-xxx-GC',
    unit: 'sqm',
    isOption: true,
    description: 'アルテミュール 木目調外壁',
    variants: [
      { id: 'v1', color: 'オークナチュラルGC', colorCode: '8.9YR 7.2/3.9', images: [] },
      { id: 'v2', color: 'オークヴィンテージGC', colorCode: '8.5YR 6/0.5', images: [] },
      { id: 'v3', color: 'ウォルナットナチュラルGC', colorCode: '6.4YR 4.3/1.8', images: [] },
      { id: 'v4', color: 'ウォルナットダークGC', colorCode: '6.3YR 3.8/1.7', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 4500 },
      { plan: 'HOURS', price: 4500 },
      { plan: 'LIFE+', price: 4500 },
      { plan: 'LIFE', price: 4500 }
    ]
  },

  // ===== 17ページ - IG工業 SPビレクト =====
  {
    id: 'ext-wall-spbilect',
    categoryId: 'exterior-wall-metal',
    categoryName: '外壁',
    subcategory: 'SPビレクト',
    name: 'SPビレクト',
    manufacturer: 'IG工業',
    modelNumber: 'SPI1-xxx',
    unit: 'sqm',
    isOption: true,
    description: 'SPビレクト 金属サイディング 変褪色・穴あき・赤さび10年保証 横張のみ ※HOURSアクセント面のみ標準(1色)、LACIE全面標準',
    variants: [
      { id: 'v1', color: 'マットブラック', colorCode: '1PB 2.1/0.3', images: [] },
      { id: 'v2', color: 'クールブラウン', colorCode: '9.34YR 2.65/0.52', images: [] },
      { id: 'v3', color: 'クールネイビー', colorCode: '3.3PB 2.4/2.4', images: [] },
      { id: 'v4', color: 'モスグリーン', colorCode: '3.5G 3.2/1', images: [] },
      { id: 'v5', color: 'スマートガンメタ', colorCode: '2.0RP 3.4/0.3', images: [] },
      { id: 'v6', color: 'ダークグレー', colorCode: '4.79PB 3.2/0.66', images: [] },
      { id: 'v7', color: 'ライトアッシュ', colorCode: '4.54PB 5.8/1.08', images: [] },
      { id: 'v8', color: 'ネオホワイト', colorCode: '2.8Y 8.5/0.2', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 9500 },
      { plan: 'LIFE', price: 9500 }
    ]
  },

  // ===== 17ページ - IG工業 ガルスパン =====
  {
    id: 'ext-wall-galspan',
    categoryId: 'exterior-wall-metal',
    categoryName: '外壁',
    subcategory: 'ガルスパン',
    name: 'ガルスパン',
    manufacturer: 'IG工業',
    modelNumber: 'SPJ1-xxx',
    unit: 'sqm',
    isOption: true,
    description: 'ガルスパン 金属サイディング 変褪色・穴あき・赤さび10年保証 横張のみ ※HOURSアクセント面のみ標準(1色)、LACIE全面標準',
    variants: [
      { id: 'v1', color: 'ネオブラック', colorCode: '9.3B 1.8/0.3', images: [] },
      { id: 'v2', color: 'ビターブラウン', colorCode: '7.6Y 1.7/0.8', images: [] },
      { id: 'v3', color: 'グランブルー', colorCode: '1.8PB 2.2/2.6', images: [] },
      { id: 'v4', color: 'モスグリーン', colorCode: '3.5G 3.2/1.0', images: [] },
      { id: 'v5', color: 'シャンパンメタリック', colorCode: '9.6Y 6.4/0.4', images: [] },
      { id: 'v6', color: 'シルバーメタリック', colorCode: '7.9B 6.8/0.1', images: [] },
      { id: 'v7', color: 'ダークメタリック', colorCode: '2.3R 2.3/0.3', images: [] },
      { id: 'v8', color: 'チタングレーメタリック', colorCode: '1.0G 4.7/0.3', images: [] },
      { id: 'v9', color: 'オータムレッド', colorCode: '2.1YR 2.4/4.8', images: [] },
      { id: 'v10', color: 'カスタードイエロー', colorCode: '3.0Y 8.2/4.3', images: [] },
      { id: 'v11', color: 'ミストアイボリー', colorCode: '2.6Y 7.8/1.0', images: [] },
      { id: 'v12', color: 'ネオホワイト', colorCode: '2.8Y 8.5/0.2', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 5000 },
      { plan: 'LIFE+', price: 9500 },
      { plan: 'LIFE', price: 9500 }
    ]
  },

  // ===== 18ページ - AICA ジョリパット エンシェントブリック =====
  {
    id: 'ext-wall-jolypate-ancient',
    categoryId: 'exterior-wall-jolypate',
    categoryName: '外壁',
    subcategory: 'ジョリパットネオ∞',
    name: 'ジョリパット エンシェントブリック',
    manufacturer: 'AICA',
    modelNumber: 'JQ-620-Txxx',
    unit: 'sqm',
    isOption: true,
    description: 'ジョリパットネオ∞ 塗装仕上げ ※筋が出やすく目立つことがあります',
    variants: [
      { id: 'v1', color: 'T3001', colorCode: '3.72GY 7.03/0.35', images: [] },
      { id: 'v2', color: 'T3005', colorCode: '4.22Y 6.99/0.88', images: [] },
      { id: 'v3', color: 'T3009', colorCode: '9.18YR 6.96/1.29', images: [] },
      { id: 'v4', color: 'T3010', colorCode: '4.41Y 6.94/1.17', images: [] },
      { id: 'v5', color: 'T3400', colorCode: '8.82Y 7.64/0.22', images: [] },
      { id: 'v6', color: 'T4001', colorCode: '5.96GY 5.66/0.31', images: [] },
      { id: 'v7', color: 'T4024', colorCode: '2.36Y 5.55/2.86', images: [] },
      { id: 'v8', color: 'T4403', colorCode: '0.23G 5.50/0.17', images: [] },
      { id: 'v9', color: 'T5009', colorCode: '9.12YR 4.62/0.83', images: [] },
      { id: 'v10', color: 'T5403', colorCode: '4.60BG 4.44/0.2', images: [] },
      { id: 'v11', color: 'T6013', colorCode: '1.68PB 3.49/0.23', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 8000 },
      { plan: 'LIFE+', price: 12500 },
      { plan: 'LIFE', price: 12500 }
    ]
  },

  // ===== 18ページ - AICA ジョリパット ミーティア =====
  {
    id: 'ext-wall-meteora',
    categoryId: 'exterior-wall-jolypate',
    categoryName: '外壁',
    subcategory: 'ジョリパットネオ∞',
    name: 'ジョリパット ミーティア',
    manufacturer: 'AICA',
    modelNumber: 'JQ-620-MT-Txxx',
    unit: 'sqm',
    isOption: true,
    description: 'ジョリパットネオ∞ ミーティア 塗装仕上げ ※筋が出やすく目立つことがあります',
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
      { id: 'v12', color: 'T6013', colorCode: '1.68PB 3.49/0.23', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 0 },
      { plan: 'HOURS', price: 8000 },
      { plan: 'LIFE+', price: 12500 },
      { plan: 'LIFE', price: 12500 }
    ]
  },

  // ===== 20ページ - ポーチ ネイチャーⅡ =====
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
      { id: 'v1', color: 'MSY-R3030', colorCode: '', images: [] },
      { id: 'v2', color: 'MSY-R3050', colorCode: '', images: [] },
      { id: 'v3', color: 'MSY-R3070', colorCode: '', images: [] },
      { id: 'v4', color: 'MSY-R3080', colorCode: '', images: [] },
      { id: 'v5', color: 'MSY-R3090', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 22000 },
      { plan: 'LIFE+', price: 22000 },
      { plan: 'LIFE', price: 22000 }
    ]
  },

  // ===== 20ページ - ポーチ ベスパ =====
  {
    id: 'ext-porch-vespa',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'ベスパ',
    name: 'ベスパ',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-300/VSP-SLx',
    unit: 'sqm',
    isOption: true,
    description: '300×300タイル',
    variants: [
      { id: 'v1', color: 'VSP-SL1', colorCode: '', images: [] },
      { id: 'v2', color: 'VSP-SL2', colorCode: '', images: [] },
      { id: 'v3', color: 'VSP-SL3', colorCode: '', images: [] },
      { id: 'v4', color: 'VSP-SL4', colorCode: '', images: [] },
      { id: 'v5', color: 'VSP-SL5', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 22000 },
      { plan: 'HOURS', price: 22000 },
      { plan: 'LIFE+', price: 22000 },
      { plan: 'LIFE', price: 22000 }
    ]
  },

  // ===== 20ページ - ポーチ メンフィス 600×300 =====
  {
    id: 'ext-porch-memphis-630',
    categoryId: 'porch-tile',
    categoryName: 'ポーチ',
    subcategory: 'メンフィス',
    name: 'メンフィス 600×300',
    manufacturer: 'LIXIL',
    modelNumber: 'IPF-630/MMP-xx',
    unit: 'sqm',
    isOption: true,
    description: '600×300タイル',
    variants: [
      { id: 'v1', color: 'MMP-11', colorCode: '', images: [] },
      { id: 'v2', color: 'MMP-12', colorCode: '', images: [] },
      { id: 'v3', color: 'MMP-13', colorCode: '', images: [] },
      { id: 'v4', color: 'MMP-14', colorCode: '', images: [] },
      { id: 'v5', color: 'MMP-15', colorCode: '', images: [] }
    ],
    pricing: [
      { plan: 'LACIE', price: 27000 },
      { plan: 'HOURS', price: 27000 },
      { plan: 'LIFE+', price: 27000 },
      { plan: 'LIFE', price: 27000 }
    ]
  },

  // ===== 20ページ - ポーチサイズ拡張オプション =====
  {
    id: 'ext-porch-expansion',
    categoryId: 'porch-option',
    categoryName: 'ポーチ',
    subcategory: 'ポーチサイズ拡張',
    name: 'ポーチサイズ拡張',
    manufacturer: '標準',
    modelNumber: 'PORCH-EXPANSION',
    unit: 'sqm',
    isOption: true,
    description: 'ポーチサイズ拡張 1.8m×1.8m以上の場合（1㎡未満拡張の場合も60,000円UP）',
    variants: [{ id: 'v1', color: '標準', colorCode: '', images: [] }],
    pricing: [
      { plan: 'LACIE', price: 60000 },
      { plan: 'HOURS', price: 60000 },
      { plan: 'LIFE+', price: 60000 },
      { plan: 'LIFE', price: 60000 }
    ]
  }
];
