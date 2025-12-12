// インテリア（内装）製品データ - スタイルブック2025.11.20版に基づく
import type { Product } from '../types/product';

export const interiorProductsComplete: Product[] = [
  // ===== Gハウス オリジナル商品 =====

  // ダイニングテーブル スクエア
  {
    id: 'int-ghouse-dining-table-square',
    categoryId: 'interior-furniture',
    categoryName: 'Gハウスオリジナル',
    subcategory: 'ダイニングテーブル',
    name: 'ダイニングテーブル スクエア',
    manufacturer: 'Gハウス',
    modelNumber: 'DT-SQUARE',
    unit: '台',
    isOption: true,
    description: 'サイズ：高さ720mm、奥行900mm、幅1500/1650/1800mm。天板耐荷重100kg。コンセント2口またはコンセント1口+USB Type A 1口',
    variants: [
      { id: 'v1', color: 'オーク(OK)', colorCode: '#8B7355', modelNumber: 'TJY18332K' },
      { id: 'v2', color: 'チェリー(CR)', colorCode: '#A0522D', modelNumber: 'TJY10274K' },
      { id: 'v3', color: 'ウォールナット(WN)', colorCode: '#5D4037', modelNumber: 'JI-703K' },
      { id: 'v4', color: 'ダークWN(DW)', colorCode: '#3E2723', modelNumber: 'TJ-10005K' },
      { id: 'v5', color: 'ダストグレー(DU)', colorCode: '#808080', modelNumber: 'LJ-10068K' },
      { id: 'v6', color: 'カブリード(KR)', colorCode: '#696969', modelNumber: 'JI-800K' },
      { id: 'v7', color: 'ファインモルタル(FM)', colorCode: '#A9A9A9', modelNumber: 'LJ-10186K' },
      { id: 'v8', color: 'アンジェロプレーン(AP)', colorCode: '#D2B48C', modelNumber: 'TJ-10240K' },
      { id: 'v9', color: 'オフホワイト(OW)', colorCode: '#FAF0E6', modelNumber: 'K-6000KN' },
      { id: 'v10', color: 'ライトベージュ(LB)', colorCode: '#F5DEB3', modelNumber: 'K-6115KN' },
      { id: 'v11', color: 'ミディアムベージュ(MB)', colorCode: '#D2B48C', modelNumber: 'K-6116KN' },
      { id: 'v12', color: 'ダークベージュ(DB)', colorCode: '#A08060', modelNumber: 'K-6117KN' },
      { id: 'v13', color: 'ミディアムグレー(MG)', colorCode: '#808080', modelNumber: 'K-6303KN' },
      { id: 'v14', color: 'ダークグレー(DG)', colorCode: '#505050', modelNumber: 'TK-6306K' },
      { id: 'v15', color: 'ブラック(BK)', colorCode: '#1A1A1A', modelNumber: 'TK-6400K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 130000 },
      { plan: 'HOURS', planId: 'HOURS', price: 130000 },
      { plan: 'LIFE', planId: 'LIFE', price: 130000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 130000 }
    ]
  },

  // ダイニングテーブル スクエア（ラウンド脚）
  {
    id: 'int-ghouse-dining-table-square-round-leg',
    categoryId: 'interior-furniture',
    categoryName: 'Gハウスオリジナル',
    subcategory: 'ダイニングテーブル',
    name: 'ダイニングテーブル スクエア（ラウンド脚）',
    manufacturer: 'Gハウス',
    modelNumber: 'DT-SQUARE-ROUND',
    unit: '台',
    isOption: true,
    description: 'サイズ：高さ720mm、奥行900mm、幅1500/1650/1800mm。天板耐荷重100kg。ラウンド脚タイプ',
    variants: [
      { id: 'v1', color: 'オーク(OK)', colorCode: '#8B7355', modelNumber: 'TJY18332K' },
      { id: 'v2', color: 'チェリー(CR)', colorCode: '#A0522D', modelNumber: 'TJY10274K' },
      { id: 'v3', color: 'ウォールナット(WN)', colorCode: '#5D4037', modelNumber: 'JI-703K' },
      { id: 'v4', color: 'ダークWN(DW)', colorCode: '#3E2723', modelNumber: 'TJ-10005K' },
      { id: 'v5', color: 'ダストグレー(DU)', colorCode: '#808080', modelNumber: 'LJ-10068K' },
      { id: 'v6', color: 'カブリード(KR)', colorCode: '#696969', modelNumber: 'JI-800K' },
      { id: 'v7', color: 'ファインモルタル(FM)', colorCode: '#A9A9A9', modelNumber: 'LJ-10186K' },
      { id: 'v8', color: 'アンジェロプレーン(AP)', colorCode: '#D2B48C', modelNumber: 'TJ-10240K' },
      { id: 'v9', color: 'オフホワイト(OW)', colorCode: '#FAF0E6', modelNumber: 'K-6000KN' },
      { id: 'v10', color: 'ライトベージュ(LB)', colorCode: '#F5DEB3', modelNumber: 'K-6115KN' },
      { id: 'v11', color: 'ミディアムベージュ(MB)', colorCode: '#D2B48C', modelNumber: 'K-6116KN' },
      { id: 'v12', color: 'ダークベージュ(DB)', colorCode: '#A08060', modelNumber: 'K-6117KN' },
      { id: 'v13', color: 'ミディアムグレー(MG)', colorCode: '#808080', modelNumber: 'K-6303KN' },
      { id: 'v14', color: 'ダークグレー(DG)', colorCode: '#505050', modelNumber: 'TK-6306K' },
      { id: 'v15', color: 'ブラック(BK)', colorCode: '#1A1A1A', modelNumber: 'TK-6400K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 140000 },
      { plan: 'HOURS', planId: 'HOURS', price: 140000 },
      { plan: 'LIFE', planId: 'LIFE', price: 140000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 140000 }
    ]
  },

  // ダイニングテーブル ラウンド（クワトロ脚）
  {
    id: 'int-ghouse-dining-table-round-quattro',
    categoryId: 'interior-furniture',
    categoryName: 'Gハウスオリジナル',
    subcategory: 'ダイニングテーブル',
    name: 'ダイニングテーブル ラウンド（クワトロ脚）',
    manufacturer: 'Gハウス',
    modelNumber: 'DT-ROUND-QUATTRO',
    unit: '台',
    isOption: true,
    description: 'サイズ：高さ720mm、天板幅1100/1200mm。天板耐荷重100kg。クワトロ脚（4本脚）タイプ',
    variants: [
      { id: 'v1', color: 'オーク(OK)', colorCode: '#8B7355', modelNumber: 'TJY18332K' },
      { id: 'v2', color: 'チェリー(CR)', colorCode: '#A0522D', modelNumber: 'TJY10274K' },
      { id: 'v3', color: 'ウォールナット(WN)', colorCode: '#5D4037', modelNumber: 'JI-703K' },
      { id: 'v4', color: 'ダークWN(DW)', colorCode: '#3E2723', modelNumber: 'TJ-10005K' },
      { id: 'v5', color: 'ダストグレー(DU)', colorCode: '#808080', modelNumber: 'LJ-10068K' },
      { id: 'v6', color: 'カブリード(KR)', colorCode: '#696969', modelNumber: 'JI-800K' },
      { id: 'v7', color: 'ファインモルタル(FM)', colorCode: '#A9A9A9', modelNumber: 'LJ-10186K' },
      { id: 'v8', color: 'アンジェロプレーン(AP)', colorCode: '#D2B48C', modelNumber: 'TJ-10240K' },
      { id: 'v9', color: 'オフホワイト(OW)', colorCode: '#FAF0E6', modelNumber: 'K-6000KN' },
      { id: 'v10', color: 'ライトベージュ(LB)', colorCode: '#F5DEB3', modelNumber: 'K-6115KN' },
      { id: 'v11', color: 'ミディアムベージュ(MB)', colorCode: '#D2B48C', modelNumber: 'K-6116KN' },
      { id: 'v12', color: 'ダークベージュ(DB)', colorCode: '#A08060', modelNumber: 'K-6117KN' },
      { id: 'v13', color: 'ミディアムグレー(MG)', colorCode: '#808080', modelNumber: 'K-6303KN' },
      { id: 'v14', color: 'ダークグレー(DG)', colorCode: '#505050', modelNumber: 'TK-6306K' },
      { id: 'v15', color: 'ブラック(BK)', colorCode: '#1A1A1A', modelNumber: 'TK-6400K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 120000 },
      { plan: 'HOURS', planId: 'HOURS', price: 120000 },
      { plan: 'LIFE', planId: 'LIFE', price: 120000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 120000 }
    ]
  },

  // ダイニングテーブル ラウンド（オクタ脚）
  {
    id: 'int-ghouse-dining-table-round-octa',
    categoryId: 'interior-furniture',
    categoryName: 'Gハウスオリジナル',
    subcategory: 'ダイニングテーブル',
    name: 'ダイニングテーブル ラウンド（オクタ脚）',
    manufacturer: 'Gハウス',
    modelNumber: 'DT-ROUND-OCTA',
    unit: '台',
    isOption: true,
    description: 'サイズ：高さ720mm、天板幅1100/1200mm。天板耐荷重100kg。オクタ脚（八角形1本脚）タイプ',
    variants: [
      { id: 'v1', color: 'オーク(OK)', colorCode: '#8B7355', modelNumber: 'TJY18332K' },
      { id: 'v2', color: 'チェリー(CR)', colorCode: '#A0522D', modelNumber: 'TJY10274K' },
      { id: 'v3', color: 'ウォールナット(WN)', colorCode: '#5D4037', modelNumber: 'JI-703K' },
      { id: 'v4', color: 'ダークWN(DW)', colorCode: '#3E2723', modelNumber: 'TJ-10005K' },
      { id: 'v5', color: 'ダストグレー(DU)', colorCode: '#808080', modelNumber: 'LJ-10068K' },
      { id: 'v6', color: 'カブリード(KR)', colorCode: '#696969', modelNumber: 'JI-800K' },
      { id: 'v7', color: 'ファインモルタル(FM)', colorCode: '#A9A9A9', modelNumber: 'LJ-10186K' },
      { id: 'v8', color: 'アンジェロプレーン(AP)', colorCode: '#D2B48C', modelNumber: 'TJ-10240K' },
      { id: 'v9', color: 'オフホワイト(OW)', colorCode: '#FAF0E6', modelNumber: 'K-6000KN' },
      { id: 'v10', color: 'ライトベージュ(LB)', colorCode: '#F5DEB3', modelNumber: 'K-6115KN' },
      { id: 'v11', color: 'ミディアムベージュ(MB)', colorCode: '#D2B48C', modelNumber: 'K-6116KN' },
      { id: 'v12', color: 'ダークベージュ(DB)', colorCode: '#A08060', modelNumber: 'K-6117KN' },
      { id: 'v13', color: 'ミディアムグレー(MG)', colorCode: '#808080', modelNumber: 'K-6303KN' },
      { id: 'v14', color: 'ダークグレー(DG)', colorCode: '#505050', modelNumber: 'TK-6306K' },
      { id: 'v15', color: 'ブラック(BK)', colorCode: '#1A1A1A', modelNumber: 'TK-6400K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 166000 },
      { plan: 'HOURS', planId: 'HOURS', price: 166000 },
      { plan: 'LIFE', planId: 'LIFE', price: 166000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 166000 }
    ]
  },

  // ===== 床材（フローリング） =====

  // 1. ベリティスフロアーベースコート（Panasonic）- 標準
  {
    id: 'int-floor-veritis-basecoat',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ベリティスフロアーベースコート',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-BASECOAT',
    unit: '㎡',
    isOption: false,
    description: '豊富な色柄を揃えたシートフロアー。ワックス不要、抗菌効果、汚れ・すり傷・凹み・キャスターに強い',
    variants: [
      { id: 'v1', color: 'ウォールナット柄', colorCode: '#5D4037', modelNumber: 'VBC-WN' },
      { id: 'v2', color: 'チェリー柄', colorCode: '#A0522D', modelNumber: 'VBC-CH' },
      { id: 'v3', color: 'オーク柄', colorCode: '#C8A882', modelNumber: 'VBC-OAK' },
      { id: 'v4', color: 'メープル柄', colorCode: '#E5C29F', modelNumber: 'VBC-MP' },
      { id: 'v5', color: 'エイジドチーク柄', colorCode: '#8B6914', modelNumber: 'VBC-AT' },
      { id: 'v6', color: 'エイジドチェスナット柄', colorCode: '#8B7355', modelNumber: 'VBC-AC' },
      { id: 'v7', color: 'カームチェリー柄', colorCode: '#CD853F', modelNumber: 'VBC-CC' },
      { id: 'v8', color: 'グレージュヒッコリー柄', colorCode: '#B8A090', modelNumber: 'VBC-GH' },
      { id: 'v9', color: 'ウォッシュドオーク柄', colorCode: '#D4C5B9', modelNumber: 'VBC-WO' },
      { id: 'v10', color: 'ホワイトオーク柄', colorCode: '#F5F5DC', modelNumber: 'VBC-WHO' },
      { id: 'v11', color: 'アイボリーアッシュ柄', colorCode: '#FFFFF0', modelNumber: 'VBC-IA' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 2. ライブナチュラルMRX 2P（朝日ウッドテック）- 標準
  {
    id: 'int-floor-live-natural-mrx',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ライブナチュラルMRX 2P',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'LIVE-NATURAL-MRX',
    unit: '㎡',
    isOption: false,
    description: '天然木が持つ個性を美しく表現。突き板12mm、抗ウイルス、ホットカーペット対応、耐凹み傷',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', colorCode: '#8B4513', modelNumber: 'LNM-BCH' },
      { id: 'v2', color: 'ハードメイプル', colorCode: '#E5C29F', modelNumber: 'LNM-HM' },
      { id: 'v3', color: 'ブラックウォルナット', colorCode: '#3D2B1F', modelNumber: 'LNM-BWN' },
      { id: 'v4', color: 'オーク', colorCode: '#C8A882', modelNumber: 'LNM-OAK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 3. マイスターズウッドフロアー ハードコートクリア（Panasonic）- OP ¥3,000/㎡
  {
    id: 'int-floor-meisters-wood',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'マイスターズウッドフロアー ハードコートクリア',
    manufacturer: 'Panasonic',
    modelNumber: 'MEISTERS-WOOD',
    unit: '㎡',
    isOption: true,
    description: '天然木突き板仕上げ。ワックス不要、抗菌、汚れ・すり傷・凹み・キャスターに強い',
    variants: [
      { id: 'v1', color: 'ウォールナットクリア', colorCode: '#5D4037', modelNumber: 'MW-WNC' },
      { id: 'v2', color: 'アカシアクリア', colorCode: '#8B6914', modelNumber: 'MW-ACC' },
      { id: 'v3', color: 'バーチラスティッククリア', colorCode: '#D2B48C', modelNumber: 'MW-BRC' },
      { id: 'v4', color: 'バーチクリア', colorCode: '#DEB887', modelNumber: 'MW-BC' },
      { id: 'v5', color: 'メープルクリア', colorCode: '#E5C29F', modelNumber: 'MW-MC' },
      { id: 'v6', color: 'アッシュクリア', colorCode: '#D4C5B9', modelNumber: 'MW-ASC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 3000 },
      { plan: 'HOURS', planId: 'HOURS', price: 3000 },
      { plan: 'LIFE', planId: 'LIFE', price: 3000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 3000 }
    ]
  },

  // 4. ライブナチュラルMSX/MSX-L 2P（朝日ウッドテック）- OP ¥3,000/㎡
  {
    id: 'int-floor-live-natural-msx',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ライブナチュラルMSX/MSX-L 2P',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'LIVE-NATURAL-MSX',
    unit: '㎡',
    isOption: true,
    description: '天然木の味わいをマットな質感で表現。突き板12mm、抗ウイルス、ホットカーペット対応',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', colorCode: '#8B4513', modelNumber: 'LMS-BCH' },
      { id: 'v2', color: 'ハードメイプル', colorCode: '#E5C29F', modelNumber: 'LMS-HM' },
      { id: 'v3', color: 'シカモア', colorCode: '#F5F5DC', modelNumber: 'LMS-SC' },
      { id: 'v4', color: 'ブラックウォルナット', colorCode: '#3D2B1F', modelNumber: 'LMS-BWN' },
      { id: 'v5', color: 'バーチ', colorCode: '#DEB887', modelNumber: 'LMS-BR' },
      { id: 'v6', color: 'オーク', colorCode: '#C8A882', modelNumber: 'LMS-OAK' },
      { id: 'v7', color: 'アカシア', colorCode: '#8B6914', modelNumber: 'LMS-AC' },
      { id: 'v8', color: 'ドライメイプル', colorCode: '#D4C5B9', modelNumber: 'LMS-DM' },
      { id: 'v9', color: 'ドライウォルナット', colorCode: '#8B7355', modelNumber: 'LMS-DW' },
      { id: 'v10', color: 'ドライオーク', colorCode: '#B8A090', modelNumber: 'LMS-DO' },
      { id: 'v11', color: 'シュガーホワイト（アッシュ）', colorCode: '#FFFAF0', modelNumber: 'LMS-SW' },
      { id: 'v12', color: 'ライトグレー（オーク）', colorCode: '#D3D3D3', modelNumber: 'LMS-LG' },
      { id: 'v13', color: 'ミッドグレー（オーク）', colorCode: '#A9A9A9', modelNumber: 'LMS-MG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 3000 },
      { plan: 'HOURS', planId: 'HOURS', price: 3000 },
      { plan: 'LIFE', planId: 'LIFE', price: 3000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 3000 }
    ]
  },

  // 5. 銘木フロアーラスティック 2P（イクタ）- OP ¥3,000/㎡
  {
    id: 'int-floor-meiboku-rustic',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: '銘木フロアーラスティック 2P',
    manufacturer: 'イクタ',
    modelNumber: 'MEIBOKU-RUSTIC',
    unit: '㎡',
    isOption: true,
    description: 'オイルの風合いを生かしたラスティック塗装。突き板12mm、「空気を洗う」健康フローリング',
    variants: [
      { id: 'v1', color: 'ウォルナット', colorCode: '#5D4037', modelNumber: 'MBR-WN' },
      { id: 'v2', color: 'ブラックチェリー', colorCode: '#8B4513', modelNumber: 'MBR-BCH' },
      { id: 'v3', color: 'イタヤカエデ', colorCode: '#E5C29F', modelNumber: 'MBR-IK' },
      { id: 'v4', color: 'ナラ樫', colorCode: '#C8A882', modelNumber: 'MBR-NK' },
      { id: 'v5', color: 'チーク', colorCode: '#8B6914', modelNumber: 'MBR-TK' },
      { id: 'v6', color: 'アカシア', colorCode: '#A0522D', modelNumber: 'MBR-AC' },
      { id: 'v7', color: 'ハードメープル', colorCode: '#F5DEB3', modelNumber: 'MBR-HM' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 3000 },
      { plan: 'HOURS', planId: 'HOURS', price: 3000 },
      { plan: 'LIFE', planId: 'LIFE', price: 3000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 3000 }
    ]
  },

  // 6. クルードフローリング303（イクタ）- 水廻り専用
  {
    id: 'int-floor-crude-303',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング（水廻り専用）',
    name: 'クルードフローリング303',
    manufacturer: 'イクタ',
    modelNumber: 'CRUDE-303',
    unit: '㎡',
    isOption: true,
    description: '水廻り専用シートフローリング。抗ウイルス・抗菌、対汚染性、傷に強い',
    variants: [
      { id: 'v1', color: 'ピエトラホワイト', colorCode: '#FAFAFA', modelNumber: 'CR3-PW' },
      { id: 'v2', color: 'ピエトラグレー', colorCode: '#A9A9A9', modelNumber: 'CR3-PG' },
      { id: 'v3', color: 'ピエトラブラック', colorCode: '#2F2F2F', modelNumber: 'CR3-PB' },
      { id: 'v4', color: 'テラゾーホワイト', colorCode: '#F5F5F5', modelNumber: 'CR3-TW' },
      { id: 'v5', color: 'テラゾーグレー', colorCode: '#C0C0C0', modelNumber: 'CR3-TG' },
      { id: 'v6', color: 'グランモルタル', colorCode: '#808080', modelNumber: 'CR3-GM' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 2000 },
      { plan: 'HOURS', planId: 'HOURS', price: 2000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 7. 銘木フロアーラスティック エイジング 2P（イクタ）
  {
    id: 'int-floor-meiboku-aging',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: '銘木フロアーラスティック エイジング 2P',
    manufacturer: 'イクタ',
    modelNumber: 'MEIBOKU-AGING',
    unit: '㎡',
    isOption: true,
    description: '木目を強く打ち出したエイジング仕上げ。突き板12mm、「空気を洗う」健康フローリング',
    variants: [
      { id: 'v1', color: 'エイジングナチュラル', colorCode: '#D2B48C', modelNumber: 'MBA-EN' },
      { id: 'v2', color: 'エイジングホワイト', colorCode: '#F5F5DC', modelNumber: 'MBA-EW' },
      { id: 'v3', color: 'エイジングタイガ', colorCode: '#8B7355', modelNumber: 'MBA-ET' },
      { id: 'v4', color: 'エイジングカフェ', colorCode: '#8B4513', modelNumber: 'MBA-EC' },
      { id: 'v5', color: 'エイジングビター', colorCode: '#5D4037', modelNumber: 'MBA-EB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 3000 },
      { plan: 'LIFE', planId: 'LIFE', price: 3000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 3000 }
    ]
  },

  // 8. ビンテージフロアーラスティック 2P（イクタ）- 挽板
  {
    id: 'int-floor-vintage-rustic',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング（挽板）',
    name: 'ビンテージフロアーラスティック 2P',
    manufacturer: 'イクタ',
    modelNumber: 'VINTAGE-RUSTIC',
    unit: '㎡',
    isOption: true,
    description: '天然木ならではの色味や節、自然の趣を感じられる。挽板12mm、「空気を洗う」健康フローリング',
    variants: [
      { id: 'v1', color: 'チーク', colorCode: '#8B6914', modelNumber: 'VTR-TK' },
      { id: 'v2', color: 'ウォルナット', colorCode: '#5D4037', modelNumber: 'VTR-WN' },
      { id: 'v3', color: 'ブラックチェリー', colorCode: '#8B4513', modelNumber: 'VTR-BCH' },
      { id: 'v4', color: 'カエデ', colorCode: '#E5C29F', modelNumber: 'VTR-KD' },
      { id: 'v5', color: 'ナラ', colorCode: '#C8A882', modelNumber: 'VTR-NR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 13000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 9. ライブナチュラルプレミアム ラスティック 2P（朝日ウッドテック）- 挽板
  {
    id: 'int-floor-live-natural-premium',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング（挽板）',
    name: 'ライブナチュラルプレミアム ラスティック 2P',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'LIVE-NATURAL-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: '天然木が持つ個性を美しく表現。挽板12mm、ウイルス低減効果、防虫処理、抗菌効果',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', colorCode: '#8B4513', modelNumber: 'LNP-BCH' },
      { id: 'v2', color: 'ハードメイプル', colorCode: '#E5C29F', modelNumber: 'LNP-HM' },
      { id: 'v3', color: 'ブラックウォルナット', colorCode: '#3D2B1F', modelNumber: 'LNP-BWN' },
      { id: 'v4', color: 'オークN45°', colorCode: '#C8A882', modelNumber: 'LNP-ON45' },
      { id: 'v5', color: 'バーチ', colorCode: '#DEB887', modelNumber: 'LNP-BR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 16000 },
      { plan: 'HOURS', planId: 'HOURS', price: 13000 },
      { plan: 'LIFE', planId: 'LIFE', price: 13000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 13000 }
    ]
  },

  // 10. チャネルオリジナル ユニシリーズ（無垢床）
  {
    id: 'int-floor-channel-uni',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング（無垢床）',
    name: 'チャネルオリジナル ユニシリーズ',
    manufacturer: 'チャネルオリジナル',
    modelNumber: 'CHANNEL-UNI',
    unit: '㎡',
    isOption: true,
    description: '色の濃淡・小さな節・かすりなど自然な風合いや美しさを感じられる無垢床。ウレタン塗装。※別途配送料¥30,000',
    variants: [
      { id: 'v1', color: 'オーク', colorCode: '#C8A882', modelNumber: 'CU-OAK' },
      { id: 'v2', color: 'バーチ', colorCode: '#DEB887', modelNumber: 'CU-BR' },
      { id: 'v3', color: 'ウォールナット', colorCode: '#5D4037', modelNumber: 'CU-WN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 13000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 11. チャネルオリジナル ユニシリーズ（無垢床）高級樹種
  {
    id: 'int-floor-channel-uni-premium',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング（無垢床）',
    name: 'チャネルオリジナル ユニシリーズ（高級樹種）',
    manufacturer: 'チャネルオリジナル',
    modelNumber: 'CHANNEL-UNI-P',
    unit: '㎡',
    isOption: true,
    description: '色の濃淡・小さな節・かすりなど自然な風合いや美しさを感じられる無垢床。ウレタン塗装。※別途配送料¥30,000',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', colorCode: '#8B4513', modelNumber: 'CUP-BCH' },
      { id: 'v2', color: 'チーク', colorCode: '#8B6914', modelNumber: 'CUP-TK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 18000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 2000 }
    ]
  },

  // 12. チャネルオリジナル ヘリンボーン（無垢床）
  {
    id: 'int-floor-channel-herringbone',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング（無垢床）',
    name: 'チャネルオリジナル ヘリンボーン',
    manufacturer: 'チャネルオリジナル',
    modelNumber: 'CHANNEL-HERRINGBONE',
    unit: '㎡',
    isOption: true,
    description: '赤味、入り皮など木の特徴が随所にみられバラエティーな表情を楽しめる。北海道産ナラ節無、国産木材、接着剤不使用。※別途配送料¥30,000',
    variants: [
      { id: 'v1', color: '北海道産ナラ節無（上小節含む）', colorCode: '#C8A882', modelNumber: 'CH-HKN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 20000 },
      { plan: 'HOURS', planId: 'HOURS', price: 17000 },
      { plan: 'LIFE', planId: 'LIFE', price: 17000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 4000 }
    ]
  },

  // ===== 床材（玄関框・床見切り） =====

  // 玄関框（標準）- フローリング色合わせ
  {
    id: 'int-floor-genkan-kamachi-standard',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: '玄関框',
    name: '玄関框（フローリング色合わせ）',
    manufacturer: 'Panasonic/朝日ウッドテック',
    modelNumber: 'GENKAN-KAMACHI-STD',
    unit: '式',
    isOption: false,
    description: 'ご選択いただいたフローリング色合わせとなります。付け框30×150。Panasonic ベリティス対応（シート仕上げ）、朝日ウッドテック Live Natural塗装品（マット塗装フロア対応）',
    variants: [
      { id: 'v1', color: 'フローリング色合わせ', colorCode: '#C8A882', modelNumber: 'KAMACHI-MATCH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 床見切り（フラットバー）- 標準
  {
    id: 'int-floor-floor-trim-flatbar',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: '床見切り',
    name: '床見切り（フラットバー）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'FLOOR-TRIM-FLATBAR',
    unit: '式',
    isOption: false,
    description: 'フローリングと異素材の床材との間に納まる部材。シルバーのみ',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', modelNumber: 'FT-SILVER' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 玄関框（プレイリーホームズ）- OP
  {
    id: 'int-floor-genkan-kamachi-prairie-18',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: '玄関框',
    name: '玄関框（プレイリーホームズ）〜1.8m',
    manufacturer: 'プレイリーホームズ',
    modelNumber: 'PRAIRIE-KAMACHI-18',
    unit: '式',
    isOption: true,
    description: '6mmという薄さ、シンプルスマートの新しい提案。ゴム ウレタンブラック/ウレタンホワイト。長さ1.8m迄',
    variants: [
      { id: 'v1', color: 'ゴム ウレタンブラック', colorCode: '#1A1A1A', modelNumber: 'PH-BLACK' },
      { id: 'v2', color: 'ゴム ウレタンホワイト', colorCode: '#F5F5F5', modelNumber: 'PH-WHITE' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 24000 },
      { plan: 'HOURS', planId: 'HOURS', price: 24000 },
      { plan: 'LIFE', planId: 'LIFE', price: 24000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 24000 }
    ]
  },

  // 玄関框（プレイリーホームズ）〜2.8m - OP
  {
    id: 'int-floor-genkan-kamachi-prairie-28',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: '玄関框',
    name: '玄関框（プレイリーホームズ）〜2.8m',
    manufacturer: 'プレイリーホームズ',
    modelNumber: 'PRAIRIE-KAMACHI-28',
    unit: '式',
    isOption: true,
    description: '6mmという薄さ、シンプルスマートの新しい提案。ゴム ウレタンブラック/ウレタンホワイト。長さ2.8m迄',
    variants: [
      { id: 'v1', color: 'ゴム ウレタンブラック', colorCode: '#1A1A1A', modelNumber: 'PH-BLACK-28' },
      { id: 'v2', color: 'ゴム ウレタンホワイト', colorCode: '#F5F5F5', modelNumber: 'PH-WHITE-28' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 36000 },
      { plan: 'HOURS', planId: 'HOURS', price: 36000 },
      { plan: 'LIFE', planId: 'LIFE', price: 36000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 36000 }
    ]
  },

  // ===== 床材（CFシート） =====

  // CFシート（東リ）- 標準（水廻り）/ OP ¥3,000/㎡（水廻り以外）
  {
    id: 'int-floor-cf-sheet-toli',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'CFシート',
    name: 'CFシート',
    manufacturer: '東リ',
    modelNumber: 'CF-SHEET',
    unit: '㎡',
    isOption: false,
    description: '防水性、クッション性に優れたビニール系のシート床材。手入れも手軽で汚れも落としやすい。水廻りにご使用可能',
    variants: [
      { id: 'v1', color: 'CF3738', colorCode: '#9E9E9E', modelNumber: 'CF3738' },
      { id: 'v2', color: 'CF3739', colorCode: '#BDBDBD', modelNumber: 'CF3739' },
      { id: 'v3', color: 'CF3746', colorCode: '#E0E0E0', modelNumber: 'CF3746' },
      { id: 'v4', color: 'CF3747', colorCode: '#F5F5F5', modelNumber: 'CF3747' },
      { id: 'v5', color: 'CF3751', colorCode: '#D0D0D0', modelNumber: 'CF3751' },
      { id: 'v6', color: 'CF3752', colorCode: '#C8C8C8', modelNumber: 'CF3752' },
      { id: 'v7', color: 'CF3761', colorCode: '#A0A0A0', modelNumber: 'CF3761' },
      { id: 'v8', color: 'CF3764', colorCode: '#B8A090', modelNumber: 'CF3764' },
      { id: 'v9', color: 'CF3770', colorCode: '#8B6914', modelNumber: 'CF3770' },
      { id: 'v10', color: 'CF9616', colorCode: '#4A4A4A', modelNumber: 'CF9616' },
      { id: 'v11', color: 'CF9617', colorCode: '#C8A882', modelNumber: 'CF9617' },
      { id: 'v12', color: 'CF9618', colorCode: '#D2B48C', modelNumber: 'CF9618' },
      { id: 'v13', color: 'CF9645', colorCode: '#B89872', modelNumber: 'CF9645' },
      { id: 'v14', color: 'CF9647', colorCode: '#5A5A5A', modelNumber: 'CF9647' },
      { id: 'v15', color: 'CF9649', colorCode: '#A08060', modelNumber: 'CF9649' },
      { id: 'v16', color: 'CF9650', colorCode: '#3A3A3A', modelNumber: 'CF9650' },
      { id: 'v17', color: 'CF9655', colorCode: '#F0F0F0', modelNumber: 'CF9655' },
      { id: 'v18', color: 'CF9664', colorCode: '#2A2A2A', modelNumber: 'CF9664' },
      { id: 'v19', color: 'CF9679', colorCode: '#E8E0D8', modelNumber: 'CF9679' },
      { id: 'v20', color: 'CF9689', colorCode: '#D08040', modelNumber: 'CF9689' },
      { id: 'v21', color: 'CF9690', colorCode: '#E0A060', modelNumber: 'CF9690' },
      { id: 'v22', color: 'CF9691', colorCode: '#808080', modelNumber: 'CF9691' },
      { id: 'v23', color: 'CF9693', colorCode: '#A09080', modelNumber: 'CF9693' },
      { id: 'v24', color: 'CF9694', colorCode: '#E8E0D0', modelNumber: 'CF9694' },
      { id: 'v25', color: 'CF9696', colorCode: '#F0E8E0', modelNumber: 'CF9696' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // CFシート（東リ）- 水廻り以外 OP ¥3,000/㎡
  {
    id: 'int-floor-cf-sheet-toli-other',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'CFシート',
    name: 'CFシート（水廻り以外）',
    manufacturer: '東リ',
    modelNumber: 'CF-SHEET-OTHER',
    unit: '㎡',
    isOption: true,
    description: '防水性、クッション性に優れたビニール系のシート床材。水廻り以外でご使用される場合は追加費用',
    variants: [
      { id: 'v1', color: 'CF3738', colorCode: '#9E9E9E', modelNumber: 'CF3738' },
      { id: 'v2', color: 'CF3739', colorCode: '#BDBDBD', modelNumber: 'CF3739' },
      { id: 'v3', color: 'CF3746', colorCode: '#E0E0E0', modelNumber: 'CF3746' },
      { id: 'v4', color: 'CF3747', colorCode: '#F5F5F5', modelNumber: 'CF3747' },
      { id: 'v5', color: 'CF3751', colorCode: '#D0D0D0', modelNumber: 'CF3751' },
      { id: 'v6', color: 'CF3752', colorCode: '#C8C8C8', modelNumber: 'CF3752' },
      { id: 'v7', color: 'CF3761', colorCode: '#A0A0A0', modelNumber: 'CF3761' },
      { id: 'v8', color: 'CF3764', colorCode: '#B8A090', modelNumber: 'CF3764' },
      { id: 'v9', color: 'CF3770', colorCode: '#8B6914', modelNumber: 'CF3770' },
      { id: 'v10', color: 'CF9616', colorCode: '#4A4A4A', modelNumber: 'CF9616' },
      { id: 'v11', color: 'CF9617', colorCode: '#C8A882', modelNumber: 'CF9617' },
      { id: 'v12', color: 'CF9618', colorCode: '#D2B48C', modelNumber: 'CF9618' },
      { id: 'v13', color: 'CF9645', colorCode: '#B89872', modelNumber: 'CF9645' },
      { id: 'v14', color: 'CF9647', colorCode: '#5A5A5A', modelNumber: 'CF9647' },
      { id: 'v15', color: 'CF9649', colorCode: '#A08060', modelNumber: 'CF9649' },
      { id: 'v16', color: 'CF9650', colorCode: '#3A3A3A', modelNumber: 'CF9650' },
      { id: 'v17', color: 'CF9655', colorCode: '#F0F0F0', modelNumber: 'CF9655' },
      { id: 'v18', color: 'CF9664', colorCode: '#2A2A2A', modelNumber: 'CF9664' },
      { id: 'v19', color: 'CF9679', colorCode: '#E8E0D8', modelNumber: 'CF9679' },
      { id: 'v20', color: 'CF9689', colorCode: '#D08040', modelNumber: 'CF9689' },
      { id: 'v21', color: 'CF9690', colorCode: '#E0A060', modelNumber: 'CF9690' },
      { id: 'v22', color: 'CF9691', colorCode: '#808080', modelNumber: 'CF9691' },
      { id: 'v23', color: 'CF9693', colorCode: '#A09080', modelNumber: 'CF9693' },
      { id: 'v24', color: 'CF9694', colorCode: '#E8E0D0', modelNumber: 'CF9694' },
      { id: 'v25', color: 'CF9696', colorCode: '#F0E8E0', modelNumber: 'CF9696' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 3000 },
      { plan: 'HOURS', planId: 'HOURS', price: 3000 },
      { plan: 'LIFE', planId: 'LIFE', price: 3000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 3000 }
    ]
  },

  // ===== 床材（フロアタイル） =====

  // 13. マティルEサイズ（田島ルーフィング）- OP ¥8,500/㎡（水廻りは¥7,000/㎡で追加費用無し）
  {
    id: 'int-floor-matil-e',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル',
    name: 'マティルEサイズ',
    manufacturer: '田島ルーフィング',
    modelNumber: 'MATIL-E',
    unit: '㎡',
    isOption: true,
    description: '水廻りにご使用いただけるフロアタイル。水廻りでは追加費用無しでご採用可能',
    variants: [
      { id: 'v1', color: 'MAE-1140', colorCode: '#9E9E9E', modelNumber: 'MAE-1140' },
      { id: 'v2', color: 'MAE-1142', colorCode: '#BDBDBD', modelNumber: 'MAE-1142' },
      { id: 'v3', color: 'MAE-1143', colorCode: '#E0E0E0', modelNumber: 'MAE-1143' },
      { id: 'v4', color: 'MAE-1109', colorCode: '#F5F5F5', modelNumber: 'MAE-1109' },
      { id: 'v5', color: 'MAE-1206', colorCode: '#FAFAFA', modelNumber: 'MAE-1206' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 8500 },
      { plan: 'HOURS', planId: 'HOURS', price: 8500 },
      { plan: 'LIFE', planId: 'LIFE', price: 8500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 8500 }
    ]
  },

  // 14. マティルEサイズ 水廻り専用（田島ルーフィング）- OP ¥8,500/㎡（水廻り以外は追加費用）
  {
    id: 'int-floor-matil-e-wet',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（水廻り専用）',
    name: 'マティルEサイズ 水廻り専用',
    manufacturer: '田島ルーフィング',
    modelNumber: 'MATIL-E-WET',
    unit: '㎡',
    isOption: true,
    description: '水廻り専用のフロアタイル。水廻り以外でご使用される場合は追加費用',
    variants: [
      { id: 'v1', color: 'MAE-1146', colorCode: '#B0BEC5', modelNumber: 'MAE-1146' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 8500 },
      { plan: 'HOURS', planId: 'HOURS', price: 8500 },
      { plan: 'LIFE', planId: 'LIFE', price: 8500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 8500 }
    ]
  },

  // 15. マティルWサイズ（田島ルーフィング）- OP ¥8,500/㎡（水廻りは¥7,000/㎡で追加費用無し）
  {
    id: 'int-floor-matil-w',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル',
    name: 'マティルWサイズ',
    manufacturer: '田島ルーフィング',
    modelNumber: 'MATIL-W',
    unit: '㎡',
    isOption: true,
    description: '水廻りにご使用いただけるフロアタイル（ワイドサイズ）。水廻りでは追加費用無しでご採用可能',
    variants: [
      { id: 'v1', color: 'MAW-1132', colorCode: '#CFD8DC', modelNumber: 'MAW-1132' },
      { id: 'v2', color: 'MAW-1133', colorCode: '#ECEFF1', modelNumber: 'MAW-1133' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 8500 },
      { plan: 'HOURS', planId: 'HOURS', price: 8500 },
      { plan: 'LIFE', planId: 'LIFE', price: 8500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 8500 }
    ]
  },

  // ===== 床材（フロアタイル 東リ）=====

  // 16. ロイヤルストーン スムースコンクリート（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-smooth-concrete',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（コンクリート調）',
    name: 'ロイヤルストーン スムースコンクリート',
    manufacturer: '東リ',
    modelNumber: 'PST40-SC',
    unit: '㎡',
    isOption: true,
    description: '定番のコンクリート柄。コンクリートの素地の質感をシームレスでリアルに再現。450mm×450mm（面取無）',
    variants: [
      { id: 'v1', color: 'PST4019', colorCode: '#A0A0A0', modelNumber: 'PST4019' },
      { id: 'v2', color: 'PST4020', colorCode: '#B0B0B0', modelNumber: 'PST4020' },
      { id: 'v3', color: 'PST4021', colorCode: '#C0C0C0', modelNumber: 'PST4021' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 17. ロイヤルストーン スムースコンクリート 水廻り専用（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-smooth-concrete-wet',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（コンクリート調・水廻り専用）',
    name: 'ロイヤルストーン スムースコンクリート 水廻り専用',
    manufacturer: '東リ',
    modelNumber: 'PST40-SC-WET',
    unit: '㎡',
    isOption: true,
    description: '水廻り専用。水廻り以外でご使用される場合は追加費用。450mm×450mm（面取無）',
    variants: [
      { id: 'v1', color: 'PST4022', colorCode: '#909090', modelNumber: 'PST4022' },
      { id: 'v2', color: 'PST4023', colorCode: '#808080', modelNumber: 'PST4023' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 18. ロイヤルストーン・モア コンコット（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-concotto',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（コンクリート調）',
    name: 'ロイヤルストーン・モア コンコット',
    manufacturer: '東リ',
    modelNumber: 'PST40-CC',
    unit: '㎡',
    isOption: true,
    description: 'タイルの見た目や凹凸を再現したビニール系床材。耐久性と耐水性を兼ね備え水廻りにおすすめ。600mm×600mm（R面取）',
    variants: [
      { id: 'v1', color: 'PST4001', colorCode: '#D0C8C0', modelNumber: 'PST4001' },
      { id: 'v2', color: 'PST4005', colorCode: '#C8C0B8', modelNumber: 'PST4005' },
      { id: 'v3', color: 'PST4006', colorCode: '#B8B0A8', modelNumber: 'PST4006' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 19. ロイヤルストーン コンクリート 水廻り専用（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-concrete-wet',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（コンクリート調・水廻り専用）',
    name: 'ロイヤルストーン コンクリート 水廻り専用',
    manufacturer: '東リ',
    modelNumber: 'PST4032',
    unit: '㎡',
    isOption: true,
    description: '水廻り専用。水廻り以外でご使用される場合は追加費用。450mm×450mm（面取無）',
    variants: [
      { id: 'v1', color: 'PST4032', colorCode: '#707070', modelNumber: 'PST4032' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 20. ロイヤルストーン・モア フランモルタル（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-franc-mortar',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（コンクリート調）',
    name: 'ロイヤルストーン・モア フランモルタル',
    manufacturer: '東リ',
    modelNumber: 'PST40-FM',
    unit: '㎡',
    isOption: true,
    description: 'モルタル調のフロアタイル。600mm×600mm（R面取）',
    variants: [
      { id: 'v1', color: 'PST4034', colorCode: '#505050', modelNumber: 'PST4034' },
      { id: 'v2', color: 'PST4035', colorCode: '#606060', modelNumber: 'PST4035' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 21. ロイヤルストーン・モア ジオールストーン（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-geol-stone',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（石目調）',
    name: 'ロイヤルストーン・モア ジオールストーン',
    manufacturer: '東リ',
    modelNumber: 'PST40-GS',
    unit: '㎡',
    isOption: true,
    description: '天然石の風合いを再現。600mm×600mm（R面取）',
    variants: [
      { id: 'v1', color: 'PST4093', colorCode: '#8A8A8A', modelNumber: 'PST4093' },
      { id: 'v2', color: 'PST4095', colorCode: '#9A9A9A', modelNumber: 'PST4095' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 22. ロイヤルストーン クロムスレート 水廻り専用（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-chrome-slate-wet',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（石目調・水廻り専用）',
    name: 'ロイヤルストーン クロムスレート 水廻り専用',
    manufacturer: '東リ',
    modelNumber: 'PST41-CS',
    unit: '㎡',
    isOption: true,
    description: '水廻り専用。水廻り以外でご使用される場合は追加費用。450mm×450mm（面取無）',
    variants: [
      { id: 'v1', color: 'PST4122', colorCode: '#4A4A4A', modelNumber: 'PST4122' },
      { id: 'v2', color: 'PST4123', colorCode: '#5A5A5A', modelNumber: 'PST4123' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 23. ロイヤルストーン・モア フォグライム（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-fog-lime',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（石目調）',
    name: 'ロイヤルストーン・モア フォグライム',
    manufacturer: '東リ',
    modelNumber: 'PST40-FL',
    unit: '㎡',
    isOption: true,
    description: '洗練された天然石の風合いを程よいサイズでミックスさせたクールナチュラルスタイル。300mm×450mm（4面R面取）',
    variants: [
      { id: 'v1', color: 'PST4077', colorCode: '#E0E0E0', modelNumber: 'PST4077' },
      { id: 'v2', color: 'PST4080', colorCode: '#D0D0D0', modelNumber: 'PST4080' },
      { id: 'v3', color: 'PST4083', colorCode: '#C0C0C0', modelNumber: 'PST4083' },
      { id: 'v4', color: 'PST4086', colorCode: '#B0B0B0', modelNumber: 'PST4086' },
      { id: 'v5', color: 'PST4089', colorCode: '#A0A0A0', modelNumber: 'PST4089' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 24. ロイヤルストーン カララホワイト（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-carrara-white',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（石目調）',
    name: 'ロイヤルストーン カララホワイト',
    manufacturer: '東リ',
    modelNumber: 'PST4108',
    unit: '㎡',
    isOption: true,
    description: '天然石の自然な抑揚を表現。450mm×450mm（面取無）',
    variants: [
      { id: 'v1', color: 'PST4108', colorCode: '#F5F5F5', modelNumber: 'PST4108' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 25. ロイヤルウッド 籐（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-rattan',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（木目調）',
    name: 'ロイヤルウッド 籐',
    manufacturer: '東リ',
    modelNumber: 'PWT4309',
    unit: '㎡',
    isOption: true,
    description: '籐（ラタン）柄のフロアタイル。450mm×450mm（面取無）',
    variants: [
      { id: 'v1', color: 'PWT4309', colorCode: '#D4B896', modelNumber: 'PWT4309' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 26. ロイヤルウッド・ヘリンボーン フレンチヘリンボーン（東リ）- OP ¥6,500/㎡(LACIE) ¥5,000/㎡(他)
  {
    id: 'int-floor-toli-french-herringbone',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フロアタイル（木目調）',
    name: 'ロイヤルウッド・ヘリンボーン フレンチヘリンボーン',
    manufacturer: '東リ',
    modelNumber: 'PWT42-FH',
    unit: '㎡',
    isOption: true,
    description: 'フレンチヘリンボーン柄のフロアタイル。450mm×450mm（面取無）',
    variants: [
      { id: 'v1', color: 'PWT4228', colorCode: '#C8A882', modelNumber: 'PWT4228' },
      { id: 'v2', color: 'PWT4229', colorCode: '#B89872', modelNumber: 'PWT4229' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6500 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // ===== 床材（カーペットタイル）=====

  // 27. カーペットタイル NTPシリーズ（sangetsu）- OP ¥13,000/㎡(LACIE) ¥10,000/㎡(他)
  {
    id: 'int-floor-carpet-ntp',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'カーペットタイル',
    name: 'カーペットタイル NTPシリーズ',
    manufacturer: 'sangetsu',
    modelNumber: 'NTP-SERIES',
    unit: '㎡',
    isOption: true,
    description: '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
    variants: [
      { id: 'v1', color: 'NTP-70801', colorCode: '#6B8E9F', modelNumber: 'NTP-70801' },
      { id: 'v2', color: 'NTP-71101', colorCode: '#E8E8E8', modelNumber: 'NTP-71101' },
      { id: 'v3', color: 'NTP-71102', colorCode: '#D0D0D0', modelNumber: 'NTP-71102' },
      { id: 'v4', color: 'NTP-71105', colorCode: '#B8B8B8', modelNumber: 'NTP-71105' },
      { id: 'v5', color: 'NTP-71114', colorCode: '#404050', modelNumber: 'NTP-71114' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 13000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 28. カーペットタイル NTHシリーズ（sangetsu）- OP ¥13,000/㎡(LACIE) ¥10,000/㎡(他)
  {
    id: 'int-floor-carpet-nth',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'カーペットタイル',
    name: 'カーペットタイル NTHシリーズ',
    manufacturer: 'sangetsu',
    modelNumber: 'NTH-SERIES',
    unit: '㎡',
    isOption: true,
    description: '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
    variants: [
      { id: 'v1', color: 'NTH-84009', colorCode: '#3A5A7A', modelNumber: 'NTH-84009' },
      { id: 'v2', color: 'NTH-84010', colorCode: '#4A6A8A', modelNumber: 'NTH-84010' },
      { id: 'v3', color: 'NTH-824', colorCode: '#8A7A6A', modelNumber: 'NTH-824' },
      { id: 'v4', color: 'NTH-841', colorCode: '#5A5A6A', modelNumber: 'NTH-841' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 13000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 29. カーペットタイル NT-31xxxシリーズ（sangetsu）- OP ¥13,000/㎡(LACIE) ¥10,000/㎡(他)
  {
    id: 'int-floor-carpet-nt31',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'カーペットタイル',
    name: 'カーペットタイル NT-31xxxシリーズ',
    manufacturer: 'sangetsu',
    modelNumber: 'NT-31-SERIES',
    unit: '㎡',
    isOption: true,
    description: '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
    variants: [
      { id: 'v1', color: 'NT-31104', colorCode: '#2A3A4A', modelNumber: 'NT-31104' },
      { id: 'v2', color: 'NT-31402', colorCode: '#3A3A3A', modelNumber: 'NT-31402' },
      { id: 'v3', color: 'NT-31403', colorCode: '#4A4A4A', modelNumber: 'NT-31403' },
      { id: 'v4', color: 'NT-31505', colorCode: '#5A5A5A', modelNumber: 'NT-31505' },
      { id: 'v5', color: 'NT-31507', colorCode: '#6A6A6A', modelNumber: 'NT-31507' },
      { id: 'v6', color: 'NT-31801', colorCode: '#7A7A7A', modelNumber: 'NT-31801' },
      { id: 'v7', color: 'NT-31803', colorCode: '#8A8A8A', modelNumber: 'NT-31803' },
      { id: 'v8', color: 'NT-31901', colorCode: '#9A9A6A', modelNumber: 'NT-31901' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 13000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 30. カーペットタイル NT-35xxxシリーズ（sangetsu）- OP ¥13,000/㎡(LACIE) ¥10,000/㎡(他)
  {
    id: 'int-floor-carpet-nt35',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'カーペットタイル',
    name: 'カーペットタイル NT-35xxxシリーズ',
    manufacturer: 'sangetsu',
    modelNumber: 'NT-35-SERIES',
    unit: '㎡',
    isOption: true,
    description: '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
    variants: [
      { id: 'v1', color: 'NT-35003', colorCode: '#1A1A1A', modelNumber: 'NT-35003' },
      { id: 'v2', color: 'NT-35006', colorCode: '#4A6A4A', modelNumber: 'NT-35006' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 13000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 31. カーペットタイル NT-3xxシリーズ 無地（sangetsu）- OP ¥13,000/㎡(LACIE) ¥10,000/㎡(他)
  {
    id: 'int-floor-carpet-nt3-plain',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'カーペットタイル',
    name: 'カーペットタイル NT-3xxシリーズ 無地',
    manufacturer: 'sangetsu',
    modelNumber: 'NT-3-PLAIN',
    unit: '㎡',
    isOption: true,
    description: '耐久性やクッション性を兼ねそろえた素材。シンプルな無地タイプ',
    variants: [
      { id: 'v1', color: 'NT-311', colorCode: '#A0A0A0', modelNumber: 'NT-311' },
      { id: 'v2', color: 'NT-316', colorCode: '#B0B0B0', modelNumber: 'NT-316' },
      { id: 'v3', color: 'NT-336', colorCode: '#8A7A6A', modelNumber: 'NT-336' },
      { id: 'v4', color: 'NT-339', colorCode: '#7A6A5A', modelNumber: 'NT-339' },
      { id: 'v5', color: 'NT-340', colorCode: '#6A5A4A', modelNumber: 'NT-340' },
      { id: 'v6', color: 'NT-341', colorCode: '#3A3A3A', modelNumber: 'NT-341' },
      { id: 'v7', color: 'NT-342', colorCode: '#5A4A3A', modelNumber: 'NT-342' },
      { id: 'v8', color: 'NT-344', colorCode: '#9A8A7A', modelNumber: 'NT-344' },
      { id: 'v9', color: 'NT-371', colorCode: '#8A8A8A', modelNumber: 'NT-371' },
      { id: 'v10', color: 'NT-376', colorCode: '#6A6A7A', modelNumber: 'NT-376' },
      { id: 'v11', color: 'NT-379', colorCode: '#2A2A2A', modelNumber: 'NT-379' },
      { id: 'v12', color: 'NT-382', colorCode: '#4A3A2A', modelNumber: 'NT-382' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 13000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 32. カーペットタイル DTシリーズ（sangetsu）- OP ¥13,000/㎡(LACIE) ¥10,000/㎡(他)
  {
    id: 'int-floor-carpet-dt',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'カーペットタイル',
    name: 'カーペットタイル DTシリーズ',
    manufacturer: 'sangetsu',
    modelNumber: 'DT-SERIES',
    unit: '㎡',
    isOption: true,
    description: '耐久性やクッション性を兼ねそろえた素材。床に座って過ごすことが多いお部屋におすすめ',
    variants: [
      { id: 'v1', color: 'DT-2201', colorCode: '#D0C8B8', modelNumber: 'DT-2201' },
      { id: 'v2', color: 'DT-2202', colorCode: '#C8B8A0', modelNumber: 'DT-2202' },
      { id: 'v3', color: 'DT-2204', colorCode: '#A89080', modelNumber: 'DT-2204' },
      { id: 'v4', color: 'DT-2207', colorCode: '#6A5A4A', modelNumber: 'DT-2207' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 13000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // ===== 床材（タイル）=====

  // 33. ランドストン（Nagoya mozaic）- OP ¥30,000/㎡ + 工事費用一式¥30,000
  {
    id: 'int-floor-tile-landstone',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'タイル',
    name: 'ランドストン',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'CRD-X38',
    unit: '㎡',
    isOption: true,
    description: '内装壁・内装床で使用可能。600×600または300×600。工事費用一式¥30,000、6㎡以下は追加¥50,000',
    variants: [
      { id: 'v1', color: 'CRD-X3810', colorCode: '#E8E0D8', modelNumber: 'CRD-X3810' },
      { id: 'v2', color: 'CRD-X3820', colorCode: '#D8D0C8', modelNumber: 'CRD-X3820' },
      { id: 'v3', color: 'CRD-X3830', colorCode: '#C8C0B8', modelNumber: 'CRD-X3830' },
      { id: 'v4', color: 'CRD-X3840', colorCode: '#B8B0A8', modelNumber: 'CRD-X3840' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 34. ピエトラソーニ（Nagoya mozaic）- OP ¥30,000/㎡ + 工事費用一式¥30,000
  {
    id: 'int-floor-tile-pietra-soni',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'タイル',
    name: 'ピエトラソーニ',
    manufacturer: 'Nagoya mozaic',
    modelNumber: 'PAN-X80',
    unit: '㎡',
    isOption: true,
    description: '内装壁・内装床で使用可能。600×600または300×600。工事費用一式¥30,000、6㎡以下は追加¥50,000',
    variants: [
      { id: 'v1', color: 'PAN-X8010', colorCode: '#F0E8E0', modelNumber: 'PAN-X8010' },
      { id: 'v2', color: 'PAN-X8020', colorCode: '#E8E0D8', modelNumber: 'PAN-X8020' },
      { id: 'v3', color: 'PAN-X8030', colorCode: '#D8D0C8', modelNumber: 'PAN-X8030' },
      { id: 'v4', color: 'PAN-X8040', colorCode: '#A89888', modelNumber: 'PAN-X8040' },
      { id: 'v5', color: 'PAN-X8050', colorCode: '#988878', modelNumber: 'PAN-X8050' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 35. メンフィス（Lixil）- OP ¥25,000/㎡ + 工事費用一式¥30,000
  {
    id: 'int-floor-tile-memphis',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'タイル',
    name: 'メンフィス',
    manufacturer: 'Lixil',
    modelNumber: 'IPF-600/MMP',
    unit: '㎡',
    isOption: true,
    description: '内装壁・内装床で使用可能。600×600または300×600。工事費用一式¥30,000、6㎡以下は追加¥50,000。人気商品',
    variants: [
      { id: 'v1', color: 'IPF-600/MMP-21', colorCode: '#E0D8D0', modelNumber: 'IPF-600/MMP-21' },
      { id: 'v2', color: 'IPF-600/MMP-22', colorCode: '#D0C8C0', modelNumber: 'IPF-600/MMP-22' },
      { id: 'v3', color: 'IPF-600/MMP-23', colorCode: '#C0B8B0', modelNumber: 'IPF-600/MMP-23' },
      { id: 'v4', color: 'IPF-600/MMP-24', colorCode: '#A09890', modelNumber: 'IPF-600/MMP-24' },
      { id: 'v5', color: 'IPF-600/MMP-25', colorCode: '#908880', modelNumber: 'IPF-600/MMP-25' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 25000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 25000 }
    ]
  },

  // 36. タイル工事費用一式
  {
    id: 'int-floor-tile-construction-fee',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'タイル工事',
    name: 'タイル工事費用一式',
    manufacturer: 'Gハウス施工',
    modelNumber: 'TILE-CONST',
    unit: '式',
    isOption: true,
    description: 'タイル施工時の工事費用一式。6㎡以下の施工の場合は追加¥50,000',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'TC-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 37. タイル工事費用追加（6㎡以下）
  {
    id: 'int-floor-tile-construction-fee-small',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'タイル工事',
    name: 'タイル工事費用追加（6㎡以下）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'TILE-CONST-SMALL',
    unit: '式',
    isOption: true,
    description: '6㎡以下のタイル施工時の追加工事費用',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'TCS-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 50000 },
      { plan: 'HOURS', planId: 'HOURS', price: 50000 },
      { plan: 'LIFE', planId: 'LIFE', price: 50000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 50000 }
    ]
  },

  // 38. タイル目地色
  {
    id: 'int-floor-tile-grout-color',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'タイル目地',
    name: 'タイル目地色',
    manufacturer: 'Gハウス施工',
    modelNumber: 'TILE-GROUT',
    unit: '式',
    isOption: false,
    description: 'タイル施工時の目地色選択',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'SS-11K' },
      { id: 'v2', color: 'ライトグレー', colorCode: '#C0C0C0', modelNumber: 'SS-32K' },
      { id: 'v3', color: 'ダークグレー', colorCode: '#606060', modelNumber: 'SS-23K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 天井変更工事 =====

  // 勾配天井工事
  {
    id: 'int-ceiling-slope',
    categoryId: 'interior-ceiling',
    categoryName: '天井',
    subcategory: '天井変更工事',
    name: '勾配天井工事',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SLOPE-CEILING',
    unit: '㎡',
    isOption: true,
    description: '開放感のある勾配天井。※梁や火打ち梁が露出する場合あり',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'SC-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 10000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 天井高UP（H2600迄）100mm毎
  {
    id: 'int-ceiling-height-up-100',
    categoryId: 'interior-ceiling',
    categoryName: '天井',
    subcategory: '天井変更工事',
    name: '天井高UP（H2600迄）100mm毎',
    manufacturer: 'Gハウス施工',
    modelNumber: 'CEILING-UP-100',
    unit: '㎡',
    isOption: true,
    description: '天井高を100mm単位でアップ。※部屋別での変更不可、フロアごとの変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'CU100-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 8500 },
      { plan: 'HOURS', planId: 'HOURS', price: 8500 },
      { plan: 'LIFE', planId: 'LIFE', price: 8500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 8500 }
    ]
  },

  // 天井高UP（H2600迄）200mm毎
  {
    id: 'int-ceiling-height-up-200',
    categoryId: 'interior-ceiling',
    categoryName: '天井',
    subcategory: '天井変更工事',
    name: '天井高UP（H2600迄）200mm毎',
    manufacturer: 'Gハウス施工',
    modelNumber: 'CEILING-UP-200',
    unit: '㎡',
    isOption: true,
    description: '天井高を200mm単位でアップ。※部屋別での変更不可、フロアごとの変更',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'CU200-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 12000 },
      { plan: 'HOURS', planId: 'HOURS', price: 12000 },
      { plan: 'LIFE', planId: 'LIFE', price: 12000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 12000 }
    ]
  },

  // 下がり天井
  {
    id: 'int-ceiling-drop',
    categoryId: 'interior-ceiling',
    categoryName: '天井',
    subcategory: '天井変更工事',
    name: '下がり天井',
    manufacturer: 'Gハウス施工',
    modelNumber: 'DROP-CEILING',
    unit: '㎡',
    isOption: true,
    description: 'デザイン性の高い下がり天井',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'DC-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 8000 },
      { plan: 'HOURS', planId: 'HOURS', price: 8000 },
      { plan: 'LIFE', planId: 'LIFE', price: 8000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 8000 }
    ]
  },

  // ===== 間接照明BOX =====

  // コーブ照明
  {
    id: 'int-lighting-cove',
    categoryId: 'interior-lighting',
    categoryName: '間接照明',
    subcategory: '間接照明BOX',
    name: 'コーブ照明',
    manufacturer: 'Gハウス施工',
    modelNumber: 'COVE-LIGHTING',
    unit: 'm',
    isOption: true,
    description: '天井を照らす間接照明。※照明器具は別途費用。1m以下は¥15,000',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'CL-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // コーニス照明
  {
    id: 'int-lighting-cornice',
    categoryId: 'interior-lighting',
    categoryName: '間接照明',
    subcategory: '間接照明BOX',
    name: 'コーニス照明',
    manufacturer: 'Gハウス施工',
    modelNumber: 'CORNICE-LIGHTING',
    unit: 'm',
    isOption: true,
    description: '壁を照らす間接照明。※勾配天井での採用不可。1m以下は¥15,000',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'CNL-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // アッパー照明
  {
    id: 'int-lighting-upper',
    categoryId: 'interior-lighting',
    categoryName: '間接照明',
    subcategory: '間接照明BOX',
    name: 'アッパー照明',
    manufacturer: 'Gハウス施工',
    modelNumber: 'UPPER-LIGHTING',
    unit: 'm',
    isOption: true,
    description: '上部アクリル板（t5）含む。1m以下は¥20,000',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'UL-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 20000 },
      { plan: 'HOURS', planId: 'HOURS', price: 20000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 20000 }
    ]
  },

  // ===== カーテンBOX =====

  // カーテンBOX（天井埋込タイプ）
  {
    id: 'int-curtain-box-ceiling',
    categoryId: 'interior-curtain',
    categoryName: 'カーテンBOX',
    subcategory: 'カーテンBOX',
    name: 'カーテンBOX（天井埋込タイプ）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'CURTAIN-BOX-CEILING',
    unit: 'm',
    isOption: true,
    description: '天井に埋め込むタイプ。※勾配天井時採用不可。カーテンレールは別途。1m以下は¥15,000',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'CBC-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // カーテンBOX（下がり壁タイプ）
  {
    id: 'int-curtain-box-wall',
    categoryId: 'interior-curtain',
    categoryName: 'カーテンBOX',
    subcategory: 'カーテンBOX',
    name: 'カーテンBOX（下がり壁タイプ）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'CURTAIN-BOX-WALL',
    unit: 'm',
    isOption: true,
    description: '下がり壁に設置するタイプ。カーテンレールは別途。1m以下は¥11,000',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'CBW-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 11000 },
      { plan: 'HOURS', planId: 'HOURS', price: 11000 },
      { plan: 'LIFE', planId: 'LIFE', price: 11000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 11000 }
    ]
  },

  // ===== 補強・下地 =====

  // 壁下地補強
  {
    id: 'int-reinforcement-wall',
    categoryId: 'interior-reinforcement',
    categoryName: '補強・下地',
    subcategory: '補強',
    name: '壁下地補強',
    manufacturer: 'Gハウス施工',
    modelNumber: 'WALL-REINFORCEMENT',
    unit: '箇所',
    isOption: true,
    description: '1カ所（1,800mm×900mm）の壁下地補強',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'WR-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 6000 },
      { plan: 'LIFE', planId: 'LIFE', price: 6000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 6000 }
    ]
  },

  // 床補強
  {
    id: 'int-reinforcement-floor',
    categoryId: 'interior-reinforcement',
    categoryName: '補強・下地',
    subcategory: '補強',
    name: '床補強',
    manufacturer: 'Gハウス施工',
    modelNumber: 'FLOOR-REINFORCEMENT',
    unit: '㎡',
    isOption: true,
    description: '床の補強工事',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'FR-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 12000 },
      { plan: 'HOURS', planId: 'HOURS', price: 12000 },
      { plan: 'LIFE', planId: 'LIFE', price: 12000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 12000 }
    ]
  },

  // ロールカーテン用天井下地
  {
    id: 'int-reinforcement-roll-curtain',
    categoryId: 'interior-reinforcement',
    categoryName: '補強・下地',
    subcategory: '下地',
    name: 'ロールカーテン用天井下地',
    manufacturer: 'Gハウス施工',
    modelNumber: 'ROLL-CURTAIN-BASE',
    unit: '箇所',
    isOption: true,
    description: '下地材の厚み12mm・幅300mm。価格は長さにより変動（1m未満¥3,000、2m未満¥6,000、3m未満¥9,000、4m未満¥12,000）',
    variants: [
      { id: 'v1', color: '1m未満', colorCode: '#FFFFFF', modelNumber: 'RCB-1M' },
      { id: 'v2', color: '2m未満', colorCode: '#FFFFFF', modelNumber: 'RCB-2M' },
      { id: 'v3', color: '3m未満', colorCode: '#FFFFFF', modelNumber: 'RCB-3M' },
      { id: 'v4', color: '4m未満', colorCode: '#FFFFFF', modelNumber: 'RCB-4M' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 3000 },
      { plan: 'HOURS', planId: 'HOURS', price: 3000 },
      { plan: 'LIFE', planId: 'LIFE', price: 3000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 3000 }
    ]
  },

  // マグネットクロス
  {
    id: 'int-magnet-cloth',
    categoryId: 'interior-reinforcement',
    categoryName: '補強・下地',
    subcategory: 'クロス',
    name: 'マグネットクロス',
    manufacturer: 'シンコール',
    modelNumber: 'MAGMAGIC',
    unit: '箇所',
    isOption: true,
    description: '600×750mmのクロス下地材。表面仕上がりはクロスのため悪目立ちせず自然な仕上がり。※カット・くりぬき施工不可',
    variants: [
      { id: 'v1', color: '標準', colorCode: '#FFFFFF', modelNumber: 'MM-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 36000 },
      { plan: 'HOURS', planId: 'HOURS', price: 36000 },
      { plan: 'LIFE', planId: 'LIFE', price: 36000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 36000 }
    ]
  },

  // ===== ニッチ =====

  // 造作ニッチ パターンA
  {
    id: 'int-niche-pattern-a',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンA（H320×W320）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-A',
    unit: '箇所',
    isOption: true,
    description: 'H320×W320mmのニッチ。※外壁側の壁への施工不可（断熱材欠損防止）',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NA-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NA-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NA-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NA-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NA-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NA-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンB（リモコンニッチ可能）
  {
    id: 'int-niche-pattern-b',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンB（H650×W500）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-B',
    unit: '箇所',
    isOption: true,
    description: 'H650×W500mm。リモコンニッチとしても使用可能。※外壁側の壁への施工不可',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NB-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NB-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NB-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NB-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NB-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NB-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンC
  {
    id: 'int-niche-pattern-c',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンC（H250×W750）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-C',
    unit: '箇所',
    isOption: true,
    description: 'H250×W750mm。※外壁側の壁への施工不可',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NC-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NC-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NC-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NC-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NC-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NC-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンD（台有）
  {
    id: 'int-niche-pattern-d',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンD（H1050×W500）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-D',
    unit: '箇所',
    isOption: true,
    description: 'H1050×W500mm（H650・H200・H200台有に限る）。※外壁側の壁への施工不可',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'ND-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'ND-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'ND-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'ND-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'ND-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'ND-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンE（リモコンニッチ可能）
  {
    id: 'int-niche-pattern-e',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンE（H250×W1600）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-E',
    unit: '箇所',
    isOption: true,
    description: 'H250×W1600mm。リモコンニッチとしても使用可能。※外壁側の壁への施工不可',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NE-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NE-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NE-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NE-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NE-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NE-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンF
  {
    id: 'int-niche-pattern-f',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンF（H150×W780）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-F',
    unit: '箇所',
    isOption: true,
    description: 'H150×W780mm。棚奥行約100mm。※外壁側の壁への施工不可（断熱材欠損防止）',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NF-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NF-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NF-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NF-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NF-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NF-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンG
  {
    id: 'int-niche-pattern-g',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンG（H150×W1050）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-G',
    unit: '箇所',
    isOption: true,
    description: 'H150×W1050mm。棚奥行約100mm。※外壁側の壁への施工不可（断熱材欠損防止）',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NG-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NG-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NG-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NG-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NG-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NG-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンH
  {
    id: 'int-niche-pattern-h',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンH（H320×W320）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-H',
    unit: '箇所',
    isOption: true,
    description: 'H320×W320mm。棚奥行約100mm。※外壁側の壁への施工不可（断熱材欠損防止）',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NH-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NH-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NH-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NH-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NH-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NH-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンI（洗面室向け）
  {
    id: 'int-niche-pattern-i',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンI（H250×W750・洗面室向け）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-I',
    unit: '箇所',
    isOption: true,
    description: 'H250×W750mm、棚奥行約100mm。洗面室におすすめ。※外壁側の壁への施工不可',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NI-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NI-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NI-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NI-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NI-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NI-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンJ（洗面室向け）
  {
    id: 'int-niche-pattern-j',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンJ（H550×W400・洗面室向け）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-J',
    unit: '箇所',
    isOption: true,
    description: 'H550×W400mm。洗面室におすすめ。※外壁側の壁への施工不可（断熱材欠損防止）',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NJ-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NJ-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NJ-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NJ-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NJ-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NJ-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンK（洗面室向け）
  {
    id: 'int-niche-pattern-k',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンK（H700×W400・洗面室向け）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-K',
    unit: '箇所',
    isOption: true,
    description: 'H700×W400mm。洗面室におすすめ。※外壁側の壁への施工不可（断熱材欠損防止）',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NK-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NK-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NK-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NK-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NK-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NK-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 造作ニッチ パターンL（洗面室向け）
  {
    id: 'int-niche-pattern-l',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: '造作ニッチ',
    name: '造作ニッチ パターンL（H750×W400・洗面室向け）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-L',
    unit: '箇所',
    isOption: true,
    description: 'H750×W400mm。洗面室におすすめ。※外壁側の壁への施工不可（断熱材欠損防止）',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'NL-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'NL-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'NL-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'NL-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'NL-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'NL-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // リモコンニッチ
  {
    id: 'int-niche-remote',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: 'リモコンニッチ',
    name: 'リモコンニッチ',
    manufacturer: 'Gハウス施工',
    modelNumber: 'REMOTE-NICHE',
    unit: '箇所',
    isOption: true,
    description: 'インターホン・給湯器リモコン・エアコンリモコン等を収納。※配線スペース確保のため背面にふかし壁が必要な場合あり。配列変更不可',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#FFFAF0', modelNumber: 'RN-SW' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#DEB887', modelNumber: 'RN-NB' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#8B6914', modelNumber: 'RN-BW' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#5D4037', modelNumber: 'RN-AW' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'RN-DG' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#E5C29F', modelNumber: 'RN-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // ===== 壁材（クロス） =====

  // リザーブ
  {
    id: 'int-wall-reserve',
    categoryId: 'interior-wall',
    categoryName: '壁材',
    subcategory: 'クロス',
    name: 'リザーブ',
    manufacturer: 'サンゲツ',
    modelNumber: 'RESERVE',
    unit: '㎡',
    isOption: false,
    description: '高耐久・高品質なビニルクロス',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'RE-51001' },
      { id: 'v2', color: 'ナチュラル', colorCode: '#F5F5DC', modelNumber: 'RE-51002' },
      { id: 'v3', color: 'グレー', colorCode: '#D3D3D3', modelNumber: 'RE-51003' },
      { id: 'v4', color: 'ベージュ', colorCode: '#F5DEB3', modelNumber: 'RE-51004' },
      { id: 'v5', color: 'ライトブルー', colorCode: '#E6F3FF', modelNumber: 'RE-51005' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // フェイス
  {
    id: 'int-wall-faith',
    categoryId: 'interior-wall',
    categoryName: '壁材',
    subcategory: 'クロス',
    name: 'フェイス',
    manufacturer: 'サンゲツ',
    modelNumber: 'FAITH',
    unit: '㎡',
    isOption: true,
    description: 'デザイン性の高いプレミアムクロス',
    variants: [
      { id: 'v1', color: 'パターン001', colorCode: '#F5F5F5', modelNumber: 'TH-30001' },
      { id: 'v2', color: 'パターン002', colorCode: '#E8E8E8', modelNumber: 'TH-30002' },
      { id: 'v3', color: 'パターン003', colorCode: '#DCDCDC', modelNumber: 'TH-30003' },
      { id: 'v4', color: 'パターン004', colorCode: '#F0F8FF', modelNumber: 'TH-30004' },
      { id: 'v5', color: 'パターン005', colorCode: '#FFF8DC', modelNumber: 'TH-30005' },
      { id: 'v6', color: 'パターン006', colorCode: '#F5F5DC', modelNumber: 'TH-30006' },
      { id: 'v7', color: 'パターン007', colorCode: '#FFFACD', modelNumber: 'TH-30007' },
      { id: 'v8', color: 'パターン008', colorCode: '#F0FFF0', modelNumber: 'TH-30008' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 3000 },
      { plan: 'HOURS', planId: 'HOURS', price: 3000 },
      { plan: 'LIFE', planId: 'LIFE', price: 3000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 建具（室内ドア） =====

  // ハピアベイシス
  {
    id: 'int-door-hapia-basic',
    categoryId: 'interior-door',
    categoryName: '建具',
    subcategory: '室内ドア',
    name: 'ハピアベイシス',
    manufacturer: '大建工業',
    modelNumber: 'HAPIA-BASIC',
    unit: '箇所',
    isOption: false,
    description: 'シンプルで機能的な室内ドア',
    variants: [
      { id: 'v1', color: 'ネオホワイト', colorCode: '#FAFAFA', modelNumber: 'HB-NW' },
      { id: 'v2', color: 'ライトオーカー', colorCode: '#DEB887', modelNumber: 'HB-LO' },
      { id: 'v3', color: 'ティーブラウン', colorCode: '#8B4513', modelNumber: 'HB-TB' },
      { id: 'v4', color: 'ダルブラウン', colorCode: '#654321', modelNumber: 'HB-DB' },
      { id: 'v5', color: 'アッシュグレー', colorCode: '#B2BEB5', modelNumber: 'HB-AG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ベリティスドア
  {
    id: 'int-door-veritis',
    categoryId: 'interior-door',
    categoryName: '建具',
    subcategory: '室内ドア',
    name: 'ベリティス',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-DOOR',
    unit: '箇所',
    isOption: true,
    description: '高品質な室内ドア',
    variants: [
      { id: 'v1', color: 'ソフトホワイト', colorCode: '#F8F8F8', modelNumber: 'VD-SW' },
      { id: 'v2', color: 'ソフトオーク', colorCode: '#D2B48C', modelNumber: 'VD-SO' },
      { id: 'v3', color: 'ソフトウォールナット', colorCode: '#704214', modelNumber: 'VD-SWN' },
      { id: 'v4', color: 'ソフトグレー', colorCode: '#A9A9A9', modelNumber: 'VD-SG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // ===== 階段 =====

  // 木製階段
  {
    id: 'int-stairs-wood',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '木製階段',
    name: '木製階段',
    manufacturer: 'Gハウス',
    modelNumber: 'WOOD-STAIRS',
    unit: '式',
    isOption: false,
    description: '標準的な木製階段',
    variants: [
      { id: 'v1', color: 'ナチュラル', colorCode: '#DEB887', modelNumber: 'WS-NAT' },
      { id: 'v2', color: 'ブラウン', colorCode: '#8B4513', modelNumber: 'WS-BR' },
      { id: 'v3', color: 'ダークブラウン', colorCode: '#654321', modelNumber: 'WS-DB' },
      { id: 'v4', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'WS-WH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 鉄骨階段
  {
    id: 'int-stairs-steel',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '鉄骨階段',
    name: '鉄骨階段',
    manufacturer: 'Gハウス',
    modelNumber: 'STEEL-STAIRS',
    unit: '式',
    isOption: true,
    description: 'モダンな鉄骨階段',
    variants: [
      { id: 'v1', color: 'ブラック', colorCode: '#000000', modelNumber: 'SS-BK' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'SS-WH' },
      { id: 'v3', color: 'グレー', colorCode: '#808080', modelNumber: 'SS-GR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 300000 },
      { plan: 'HOURS', planId: 'HOURS', price: 300000 },
      { plan: 'LIFE', planId: 'LIFE', price: 280000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 250000 }
    ]
  },

  // ===== 収納 =====

  // ベリティス クローゼット
  {
    id: 'int-storage-veritis-closet',
    categoryId: 'interior-storage',
    categoryName: '収納',
    subcategory: 'クローゼット',
    name: 'ベリティス クローゼット',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-CLOSET',
    unit: '箇所',
    isOption: true,
    description: '機能的で美しい収納システム',
    variants: [
      { id: 'v1', color: 'ソフトホワイト', colorCode: '#F8F8F8', modelNumber: 'VC-SW' },
      { id: 'v2', color: 'ソフトオーク', colorCode: '#D2B48C', modelNumber: 'VC-SO' },
      { id: 'v3', color: 'ソフトウォールナット', colorCode: '#704214', modelNumber: 'VC-SWN' },
      { id: 'v4', color: 'ソフトグレー', colorCode: '#A9A9A9', modelNumber: 'VC-SG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // ウォークインクローゼット
  {
    id: 'int-storage-walkin-closet',
    categoryId: 'interior-storage',
    categoryName: '収納',
    subcategory: 'ウォークインクローゼット',
    name: 'ウォークインクローゼット',
    manufacturer: 'Gハウス',
    modelNumber: 'WALKIN-CLOSET',
    unit: '箇所',
    isOption: true,
    description: 'ゆとりのあるウォークイン収納',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'WIC-WH' },
      { id: 'v2', color: 'ナチュラル', colorCode: '#F5F5DC', modelNumber: 'WIC-NAT' },
      { id: 'v3', color: 'ブラウン', colorCode: '#8B4513', modelNumber: 'WIC-BR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 80000 },
      { plan: 'HOURS', planId: 'HOURS', price: 80000 },
      { plan: 'LIFE', planId: 'LIFE', price: 70000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // ===== 天井材 =====

  // ハイクリンボード
  {
    id: 'int-ceiling-hyclean-board',
    categoryId: 'interior-ceiling',
    categoryName: '天井材',
    subcategory: '石膏ボード',
    name: 'ハイクリンボード',
    manufacturer: '吉野石膏',
    modelNumber: 'HYCLEAN-BOARD',
    unit: '㎡',
    isOption: false,
    description: '吸ホルムアルデヒド石膏ボード',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'HCB-W' },
      { id: 'v2', color: 'アイボリー', colorCode: '#FFFFF0', modelNumber: 'HCB-IV' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 勾配天井
  {
    id: 'int-ceiling-slope',
    categoryId: 'interior-ceiling',
    categoryName: '天井材',
    subcategory: '天井工事',
    name: '勾配天井工事',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SLOPE-CEILING',
    unit: '㎡',
    isOption: true,
    description: '開放感のある勾配天井',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'SC-WH' },
      { id: 'v2', color: 'ナチュラル', colorCode: '#F5F5DC', modelNumber: 'SC-NAT' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 10000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // ===== ニッチ =====

  // ニッチ L1
  {
    id: 'int-niche-l1',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: 'Lサイズ',
    name: 'ニッチ L1（W400×H400×D100）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-L1',
    unit: '箇所',
    isOption: true,
    description: 'Lサイズニッチ（W400×H400×D100）',
    variants: [
      { id: 'v1', color: 'タイル：ホワイト', colorCode: '#FFFFFF', modelNumber: 'NL1-TW' },
      { id: 'v2', color: 'タイル：グレー', colorCode: '#808080', modelNumber: 'NL1-TG' },
      { id: 'v3', color: 'タイル：ブラック', colorCode: '#000000', modelNumber: 'NL1-TB' },
      { id: 'v4', color: 'クロス：ホワイト', colorCode: '#FFFFFF', modelNumber: 'NL1-CW' },
      { id: 'v5', color: 'クロス：グレー', colorCode: '#D3D3D3', modelNumber: 'NL1-CG' },
      { id: 'v6', color: 'クロス：ベージュ', colorCode: '#F5DEB3', modelNumber: 'NL1-CB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 35000 },
      { plan: 'HOURS', planId: 'HOURS', price: 35000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 25000 }
    ]
  },

  // ニッチ M1
  {
    id: 'int-niche-m1',
    categoryId: 'interior-niche',
    categoryName: 'ニッチ',
    subcategory: 'Mサイズ',
    name: 'ニッチ M1（W300×H300×D100）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'NICHE-M1',
    unit: '箇所',
    isOption: true,
    description: 'Mサイズニッチ（W300×H300×D100）',
    variants: [
      { id: 'v1', color: 'タイル：ホワイト', colorCode: '#FFFFFF', modelNumber: 'NM1-TW' },
      { id: 'v2', color: 'タイル：グレー', colorCode: '#808080', modelNumber: 'NM1-TG' },
      { id: 'v3', color: 'タイル：ブラック', colorCode: '#000000', modelNumber: 'NM1-TB' },
      { id: 'v4', color: 'クロス：ホワイト', colorCode: '#FFFFFF', modelNumber: 'NM1-CW' },
      { id: 'v5', color: 'クロス：グレー', colorCode: '#D3D3D3', modelNumber: 'NM1-CG' },
      { id: 'v6', color: 'クロス：ベージュ', colorCode: '#F5DEB3', modelNumber: 'NM1-CB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // ===== 畳・小上がり =====

  // 健やかたたみおもて/清流（大建工業）
  {
    id: 'int-tatami-sukoyaka-seiryu',
    categoryId: 'interior-tatami',
    categoryName: '畳',
    subcategory: '畳おもて',
    name: '健やかたたみおもて/清流',
    manufacturer: '大建工業',
    modelNumber: 'SUKOYAKA-SEIRYU',
    unit: '半畳',
    isOption: true,
    description: '和室はもちろん、小上がりスペースにもおすすめ。強化和紙製、耐水性・耐久性に優れる',
    variants: [
      { id: 'v1', color: '01 銀白色（ぎんぱくしょく）', colorCode: '#E8E8D0', modelNumber: 'SS-01' },
      { id: 'v2', color: '02 黄金色（こがねいろ）', colorCode: '#E6B422', modelNumber: 'SS-02' },
      { id: 'v3', color: '06 亜麻色（あまいろ）', colorCode: '#D6C6AF', modelNumber: 'SS-06' },
      { id: 'v4', color: '09 墨染色（すみぞめいろ）', colorCode: '#595857', modelNumber: 'SS-09' },
      { id: 'v5', color: '10 乳白色（にゅうはくしょく）', colorCode: '#FFFACD', modelNumber: 'SS-10' },
      { id: 'v6', color: '11 銀鼠色（ぎんねずいろ）', colorCode: '#91989F', modelNumber: 'SS-11' },
      { id: 'v7', color: '12 栗色（くりいろ）', colorCode: '#762F07', modelNumber: 'SS-12' },
      { id: 'v8', color: '14 灰桜色（はいざくらいろ）', colorCode: '#E8D3D1', modelNumber: 'SS-14' },
      { id: 'v9', color: '15 白茶色（しらちゃいろ）', colorCode: '#C1A78E', modelNumber: 'SS-15' },
      { id: 'v10', color: '16 若草色（わかくさいろ）', colorCode: '#C5E17A', modelNumber: 'SS-16' },
      { id: 'v11', color: '19 胡桃色（くるみいろ）', colorCode: '#9F8168', modelNumber: 'SS-19' },
      { id: 'v12', color: '21 小麦色（こむぎいろ）', colorCode: '#E5C99E', modelNumber: 'SS-21' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 20000 },
      { plan: 'HOURS', planId: 'HOURS', price: 20000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 20000 }
    ]
  },

  // 小上がりスペース
  {
    id: 'int-koagari-space',
    categoryId: 'interior-koagari',
    categoryName: '小上がり',
    subcategory: '小上がりスペース',
    name: '小上がりスペース',
    manufacturer: 'Gハウス施工',
    modelNumber: 'KOAGARI-SPACE',
    unit: '㎡',
    isOption: true,
    description: '和室やリビングに畳スペースを設置。高さH300・H350・H400から選択可能。大きさは3帖・4.5帖・6帖',
    variants: [
      { id: 'v1', color: 'H300（高さ300mm）', colorCode: '#D2B48C', modelNumber: 'KS-H300' },
      { id: 'v2', color: 'H350（高さ350mm）', colorCode: '#C8A882', modelNumber: 'KS-H350' },
      { id: 'v3', color: 'H400（高さ400mm）', colorCode: '#B8976A', modelNumber: 'KS-H400' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 29000 },
      { plan: 'HOURS', planId: 'HOURS', price: 29000 },
      { plan: 'LIFE', planId: 'LIFE', price: 29000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 29000 }
    ]
  },

  // 小上がり下引出収納（H350）
  {
    id: 'int-koagari-storage-h350',
    categoryId: 'interior-koagari',
    categoryName: '小上がり',
    subcategory: '小上がり下収納',
    name: '小上がり下引出収納（H350）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'KOAGARI-STORAGE-H350',
    unit: 'カ所',
    isOption: true,
    description: '小上がり下を有効活用する引出収納。収納高さH200程度。※小上がり高さH350用',
    variants: [
      { id: 'v1', color: 'JC-516K（オーク）', colorCode: '#C8A882', modelNumber: 'KST-H350-OAK' },
      { id: 'v2', color: 'TJ-2062K（ウォルナット）', colorCode: '#5D4037', modelNumber: 'KST-H350-WN' },
      { id: 'v3', color: 'K-6000KN（艶消しホワイト）', colorCode: '#F5F5F5', modelNumber: 'KST-H350-WH' },
      { id: 'v4', color: 'K-6302KN（艶消しグレー）', colorCode: '#A9A9A9', modelNumber: 'KST-H350-GR' },
      { id: 'v5', color: 'K-6306KN（艶消しブラック）', colorCode: '#2F2F2F', modelNumber: 'KST-H350-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 87000 },
      { plan: 'HOURS', planId: 'HOURS', price: 87000 },
      { plan: 'LIFE', planId: 'LIFE', price: 87000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 87000 }
    ]
  },

  // 小上がり下引出収納（H400）
  {
    id: 'int-koagari-storage-h400',
    categoryId: 'interior-koagari',
    categoryName: '小上がり',
    subcategory: '小上がり下収納',
    name: '小上がり下引出収納（H400）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'KOAGARI-STORAGE-H400',
    unit: 'カ所',
    isOption: true,
    description: '小上がり下を有効活用する引出収納。収納高さH250程度。※小上がり高さH400用',
    variants: [
      { id: 'v1', color: 'JC-516K（オーク）', colorCode: '#C8A882', modelNumber: 'KST-H400-OAK' },
      { id: 'v2', color: 'TJ-2062K（ウォルナット）', colorCode: '#5D4037', modelNumber: 'KST-H400-WN' },
      { id: 'v3', color: 'K-6000KN（艶消しホワイト）', colorCode: '#F5F5F5', modelNumber: 'KST-H400-WH' },
      { id: 'v4', color: 'K-6302KN（艶消しグレー）', colorCode: '#A9A9A9', modelNumber: 'KST-H400-GR' },
      { id: 'v5', color: 'K-6306KN（艶消しブラック）', colorCode: '#2F2F2F', modelNumber: 'KST-H400-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 92000 },
      { plan: 'HOURS', planId: 'HOURS', price: 92000 },
      { plan: 'LIFE', planId: 'LIFE', price: 92000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 92000 }
    ]
  },

  // お風呂ドア枠
  {
    id: 'int-bath-door-frame',
    categoryId: 'interior-bath',
    categoryName: 'お風呂',
    subcategory: 'ドア枠',
    name: 'お風呂ドア枠',
    manufacturer: 'Gハウス施工',
    modelNumber: 'BATH-DOOR-FRAME',
    unit: '箇所',
    isOption: true,
    description: 'お風呂入口のドア枠カラーを選択',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', colorCode: '#F5F5F5', modelNumber: 'BDF-WH' },
      { id: 'v2', color: 'オフブラック', colorCode: '#2F2F2F', modelNumber: 'BDF-BK' },
      { id: 'v3', color: 'パールグレー', colorCode: '#C0C0C0', modelNumber: 'BDF-PG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 点検口・床下収納 =====

  // 床下点検口（城東テクノ）
  {
    id: 'int-inspection-floor',
    categoryId: 'interior-inspection',
    categoryName: '点検口',
    subcategory: '床下点検口',
    name: '床下点検口 600×600',
    manufacturer: '城東テクノ',
    modelNumber: 'FLOOR-INSPECTION',
    unit: '箇所',
    isOption: false,
    description: '床下点検口600×600。間取りによって必要な点検口の数は変わります',
    variants: [
      { id: 'v1', color: 'IV（アイボリー）', colorCode: '#FFFFF0', modelNumber: 'FI-IV' },
      { id: 'v2', color: 'NL（ナチュラル）', colorCode: '#D2B48C', modelNumber: 'FI-NL' },
      { id: 'v3', color: 'MB（ミディアムブラウン）', colorCode: '#8B7355', modelNumber: 'FI-MB' },
      { id: 'v4', color: 'DB（ダークブラウン）', colorCode: '#5D4037', modelNumber: 'FI-DB' },
      { id: 'v5', color: 'BB（ブラックブラウン）', colorCode: '#3D2B1F', modelNumber: 'FI-BB' },
      { id: 'v6', color: 'LG（ライトグレー）', colorCode: '#D3D3D3', modelNumber: 'FI-LG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 天井点検口
  {
    id: 'int-inspection-ceiling',
    categoryId: 'interior-inspection',
    categoryName: '点検口',
    subcategory: '天井点検口',
    name: '天井点検口 454×454',
    manufacturer: '城東テクノ',
    modelNumber: 'CEILING-INSPECTION',
    unit: '箇所',
    isOption: false,
    description: '天井点検口454×454。間取りによって必要な点検口の数は変わります',
    variants: [
      { id: 'v1', color: 'W（ホワイト）', colorCode: '#FFFFFF', modelNumber: 'CI-W' },
      { id: 'v2', color: 'SL（マットシルバー）', colorCode: '#C0C0C0', modelNumber: 'CI-SL' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 床下収納庫（城東テクノ）
  {
    id: 'int-floor-storage',
    categoryId: 'interior-storage',
    categoryName: '収納',
    subcategory: '床下収納',
    name: '床下収納庫 SPF-60S2',
    manufacturer: '城東テクノ',
    modelNumber: 'SPF-60S2',
    unit: 'カ所',
    isOption: true,
    description: '600×600床下収納庫。深さ約270㎜',
    variants: [
      { id: 'v1', color: 'IV（アイボリー）', colorCode: '#FFFFF0', modelNumber: 'SPF-IV' },
      { id: 'v2', color: 'NL（ナチュラル）', colorCode: '#D2B48C', modelNumber: 'SPF-NL' },
      { id: 'v3', color: 'MB（ミディアムブラウン）', colorCode: '#8B7355', modelNumber: 'SPF-MB' },
      { id: 'v4', color: 'DB（ダークブラウン）', colorCode: '#5D4037', modelNumber: 'SPF-DB' },
      { id: 'v5', color: 'BB（ブラックブラウン）', colorCode: '#3D2B1F', modelNumber: 'SPF-BB' },
      { id: 'v6', color: 'LG（ライトグレー）', colorCode: '#D3D3D3', modelNumber: 'SPF-LG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 47000 },
      { plan: 'HOURS', planId: 'HOURS', price: 47000 },
      { plan: 'LIFE', planId: 'LIFE', price: 47000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 47000 }
    ]
  },

  // ===== 換気システム =====

  // Panasonic 第一種換気（標準）
  {
    id: 'int-ventilation-panasonic',
    categoryId: 'interior-ventilation',
    categoryName: '換気システム',
    subcategory: '第一種換気',
    name: 'Panasonic 第一種換気',
    manufacturer: 'Panasonic',
    modelNumber: 'PANASONIC-VENT',
    unit: '式',
    isOption: false,
    description: '熱交換ユニット本体。給気グリル（天井付）、排気グリル（トイレ用天井付）付属。リモコンは本体と同色',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'PV-WH' },
      { id: 'v2', color: 'グレー', colorCode: '#808080', modelNumber: 'PV-GR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 給気グリル（天井付）
  {
    id: 'int-ventilation-supply-grill',
    categoryId: 'interior-ventilation',
    categoryName: '換気システム',
    subcategory: '給気グリル',
    name: '給気グリル（天井付）',
    manufacturer: 'Panasonic',
    modelNumber: 'FY-GPP024',
    unit: '箇所',
    isOption: false,
    description: '天井付給気グリル。第一種換気システム用',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'FY-GPP024-W' },
      { id: 'v2', color: 'ライトブラウン', colorCode: '#D2B48C', modelNumber: 'FY-GPP024-T' },
      { id: 'v3', color: 'グレー', colorCode: '#808080', modelNumber: 'FY-GPP024-H' },
      { id: 'v4', color: 'ブラック', colorCode: '#2F2F2F', modelNumber: 'FY-GPP024-K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 排気グリル（トイレ用天井付）
  {
    id: 'int-ventilation-exhaust-grill',
    categoryId: 'interior-ventilation',
    categoryName: '換気システム',
    subcategory: '排気グリル',
    name: '排気グリル（トイレ用天井付）',
    manufacturer: 'Panasonic',
    modelNumber: 'VB-GMR50PFC',
    unit: '箇所',
    isOption: false,
    description: 'トイレ用天井付排気グリル。第一種換気システム用',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'VB-GMR50PFC-W' },
      { id: 'v2', color: 'ライトブラウン', colorCode: '#D2B48C', modelNumber: 'VB-GMR50PFC-T' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // DSDD換気システムへ変更
  {
    id: 'int-ventilation-dsdd',
    categoryId: 'interior-ventilation',
    categoryName: '換気システム',
    subcategory: 'DSDD換気',
    name: 'DSDD換気システムへ変更',
    manufacturer: 'DSDD',
    modelNumber: 'DSDD-VENT',
    unit: '式',
    isOption: true,
    description: 'DSDD換気システムへ変更。DSDD排気口（床付）※アイボリーのみ',
    variants: [
      { id: 'v1', color: 'アイボリー', colorCode: '#FFFFF0', modelNumber: 'DSDD-IV' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 1500000 },
      { plan: 'HOURS', planId: 'HOURS', price: 1500000 },
      { plan: 'LIFE', planId: 'LIFE', price: 1500000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 1500000 }
    ]
  },

  // ===== 階段（詳細） =====

  // 階段踏板/蹴込板 Panasonic（標準）
  {
    id: 'int-stairs-panasonic',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '踏板/蹴込板',
    name: '階段踏板/蹴込板 Panasonic',
    manufacturer: 'Panasonic',
    modelNumber: 'STAIRS-PANA',
    unit: '式',
    isOption: false,
    description: '床材とのコーディネイトができる11柄をラインアップ。※蹴込のみホワイト・ブラックを標準選択可',
    variants: [
      { id: 'v1', color: 'ウォールナット柄', colorCode: '#5D4037', modelNumber: 'SP-WN' },
      { id: 'v2', color: 'チェリー柄', colorCode: '#A0522D', modelNumber: 'SP-CH' },
      { id: 'v3', color: 'オーク柄', colorCode: '#C8A882', modelNumber: 'SP-OAK' },
      { id: 'v4', color: 'メープル柄', colorCode: '#E5C29F', modelNumber: 'SP-MP' },
      { id: 'v5', color: 'ホワイトオーク柄', colorCode: '#F5F5DC', modelNumber: 'SP-WHO' },
      { id: 'v6', color: 'エイジドチーク柄', colorCode: '#8B6914', modelNumber: 'SP-AT' },
      { id: 'v7', color: 'エイジドチェスナット柄', colorCode: '#8B7355', modelNumber: 'SP-AC' },
      { id: 'v8', color: 'カームチェリー柄', colorCode: '#CD853F', modelNumber: 'SP-CC' },
      { id: 'v9', color: 'グレージュヒッコリー柄', colorCode: '#B8A090', modelNumber: 'SP-GH' },
      { id: 'v10', color: 'ウォッシュドオーク柄', colorCode: '#D4C5B9', modelNumber: 'SP-WO' },
      { id: 'v11', color: 'アイボリーアッシュ柄', colorCode: '#FFFFF0', modelNumber: 'SP-IA' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 階段踏板/蹴込板 WOODTEC Live Natural（標準）
  {
    id: 'int-stairs-woodtec',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '踏板/蹴込板',
    name: '階段踏板/蹴込板 WOODTEC Live Natural',
    manufacturer: 'WOODTEC',
    modelNumber: 'STAIRS-WOODTEC',
    unit: '式',
    isOption: false,
    description: 'アイアン階段採用の場合は集成材塗装品。※シュガーホワイト(アッシュ)は蹴込板なし、ホワイト・ブラックより選択',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', colorCode: '#8B4513', modelNumber: 'SW-BCH' },
      { id: 'v2', color: 'シカモア', colorCode: '#F5F5DC', modelNumber: 'SW-SC' },
      { id: 'v3', color: 'ハードメイプル', colorCode: '#E5C29F', modelNumber: 'SW-HM' },
      { id: 'v4', color: 'ブラックウォルナット', colorCode: '#3D2B1F', modelNumber: 'SW-BWN' },
      { id: 'v5', color: 'バーチ', colorCode: '#DEB887', modelNumber: 'SW-BR' },
      { id: 'v6', color: 'オーク', colorCode: '#C8A882', modelNumber: 'SW-OAK' },
      { id: 'v7', color: 'アカシア', colorCode: '#8B6914', modelNumber: 'SW-AC' },
      { id: 'v8', color: 'ドライメイプル', colorCode: '#D4C5B9', modelNumber: 'SW-DM' },
      { id: 'v9', color: 'ドライウォルナット', colorCode: '#8B7355', modelNumber: 'SW-DW' },
      { id: 'v10', color: 'ドライオーク', colorCode: '#B8A090', modelNumber: 'SW-DO' },
      { id: 'v11', color: 'シュガーホワイト（アッシュ）', colorCode: '#FFFAF0', modelNumber: 'SW-SW' },
      { id: 'v12', color: 'ライトグレー（オーク）', colorCode: '#D3D3D3', modelNumber: 'SW-LG' },
      { id: 'v13', color: 'ミッドグレー（オーク）', colorCode: '#A9A9A9', modelNumber: 'SW-MG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 階段踏板 イクタ銘木
  {
    id: 'int-stairs-ikuta',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '踏板/蹴込板',
    name: '階段踏板 イクタ銘木',
    manufacturer: 'イクタ',
    modelNumber: 'STAIRS-IKUTA',
    unit: '式',
    isOption: true,
    description: 'イクタ銘木フロアーに合わせた階段踏板',
    variants: [
      { id: 'v1', color: 'ブラックチェリー', colorCode: '#8B4513', modelNumber: 'SI-BCH' },
      { id: 'v2', color: 'ハードメープル', colorCode: '#E5C29F', modelNumber: 'SI-HM' },
      { id: 'v3', color: 'ナラ樫', colorCode: '#C8A882', modelNumber: 'SI-NK' },
      { id: 'v4', color: 'チーク', colorCode: '#8B6914', modelNumber: 'SI-TK' },
      { id: 'v5', color: 'イタヤカエデ', colorCode: '#F5DEB3', modelNumber: 'SI-IK' },
      { id: 'v6', color: 'アカシア', colorCode: '#A0522D', modelNumber: 'SI-AC' },
      { id: 'v7', color: 'ウォルナット', colorCode: '#5D4037', modelNumber: 'SI-WN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 240000 },
      { plan: 'HOURS', planId: 'HOURS', price: 240000 },
      { plan: 'LIFE', planId: 'LIFE', price: 240000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 240000 }
    ]
  },

  // 階段踏板 イクタ エイジング
  {
    id: 'int-stairs-ikuta-aging',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '踏板/蹴込板',
    name: '階段踏板 イクタ エイジング',
    manufacturer: 'イクタ',
    modelNumber: 'STAIRS-IKUTA-AGING',
    unit: '式',
    isOption: true,
    description: 'イクタ銘木エイジングフロアーに合わせた階段踏板。※塗装品のため近似色塗装、色が合わない場合あり',
    variants: [
      { id: 'v1', color: 'エイジングナチュラル', colorCode: '#D2B48C', modelNumber: 'SIA-EN' },
      { id: 'v2', color: 'エイジングホワイト', colorCode: '#F5F5DC', modelNumber: 'SIA-EW' },
      { id: 'v3', color: 'エイジングタイガ', colorCode: '#8B7355', modelNumber: 'SIA-ET' },
      { id: 'v4', color: 'エイジングカフェ', colorCode: '#6F4E37', modelNumber: 'SIA-EC' },
      { id: 'v5', color: 'エイジングビター', colorCode: '#3D2B1F', modelNumber: 'SIA-EB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 350000 },
      { plan: 'HOURS', planId: 'HOURS', price: 350000 },
      { plan: 'LIFE', planId: 'LIFE', price: 350000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 350000 }
    ]
  },

  // 階段 踊り場形状
  {
    id: 'int-stairs-landing',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '踊り場',
    name: '階段 踊り場形状',
    manufacturer: 'Gハウス施工',
    modelNumber: 'STAIRS-LANDING',
    unit: 'カ所',
    isOption: true,
    description: '階段の踊り場形状変更',
    variants: [
      { id: 'v1', color: '踊り場形状', colorCode: '#D2B48C', modelNumber: 'SL-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 80000 },
      { plan: 'HOURS', planId: 'HOURS', price: 80000 },
      { plan: 'LIFE', planId: 'LIFE', price: 80000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 80000 }
    ]
  },

  // 手すり LIXIL（標準）
  {
    id: 'int-stairs-handrail-lixil',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '手すり',
    name: '手すり LIXIL スクエアタイプ',
    manufacturer: 'LIXIL',
    modelNumber: 'HANDRAIL-LIXIL',
    unit: '式',
    isOption: false,
    description: '形状：スクエアタイプ。手すり棒とブラケットのセット',
    variants: [
      { id: 'v1', color: 'ホワイト（W/プレシャスホワイト+YY/プレシャスホワイト）', colorCode: '#FFFFFF', modelNumber: 'HL-WH' },
      { id: 'v2', color: 'ブラック（AB/ブラック+BE/アイアンブラック）', colorCode: '#2F2F2F', modelNumber: 'HL-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 壁付I型手摺追加
  {
    id: 'int-stairs-handrail-wall',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '手すり',
    name: '壁付I型手摺追加 H600',
    manufacturer: 'LIXIL',
    modelNumber: 'HANDRAIL-WALL',
    unit: 'カ所',
    isOption: true,
    description: '壁付けI型手摺の追加（H600）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'HW-WH' },
      { id: 'v2', color: 'ブラック', colorCode: '#2F2F2F', modelNumber: 'HW-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // アイアン階段 スレート（手摺色）
  {
    id: 'int-stairs-iron',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: 'アイアン階段',
    name: 'アイアン階段 スレート',
    manufacturer: 'スレート',
    modelNumber: 'IRON-STAIRS',
    unit: '式',
    isOption: true,
    description: '手摺形状：フラットバー（中桟1本・2本）・片側手摺のみ',
    variants: [
      { id: 'v1', color: '手摺色：日塗工/N-95 つや消ホワイト', colorCode: '#F5F5F5', modelNumber: 'IS-WH' },
      { id: 'v2', color: '手摺色：日塗工/N-60 つや消グレー', colorCode: '#808080', modelNumber: 'IS-GR' },
      { id: 'v3', color: '手摺色：日塗工/N-10 つや消ブラック', colorCode: '#2F2F2F', modelNumber: 'IS-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 950000 },
      { plan: 'HOURS', planId: 'HOURS', price: 950000 },
      { plan: 'LIFE', planId: 'LIFE', price: 950000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 950000 }
    ]
  },

  // アイアン階段 側板色
  {
    id: 'int-stairs-iron-side',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: 'アイアン階段',
    name: 'アイアン階段 側板色',
    manufacturer: 'スレート',
    modelNumber: 'IRON-STAIRS-SIDE',
    unit: '式',
    isOption: false,
    description: 'アイアン階段の側板色選択',
    variants: [
      { id: 'v1', color: '側板色：日塗工/N-95 つや消ホワイト', colorCode: '#F5F5F5', modelNumber: 'ISS-WH' },
      { id: 'v2', color: '側板色：日塗工/N-60 つや消グレー', colorCode: '#808080', modelNumber: 'ISS-GR' },
      { id: 'v3', color: '側板色：日塗工/N-10 つや消ブラック', colorCode: '#2F2F2F', modelNumber: 'ISS-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // アイアンまわり階段
  {
    id: 'int-stairs-iron-turn',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: 'アイアン階段',
    name: 'アイアンまわり階段',
    manufacturer: 'スレート',
    modelNumber: 'IRON-STAIRS-TURN',
    unit: '曲がり',
    isOption: true,
    description: 'アイアン階段を曲がり階段にする追加オプション。一曲がりごとに追加',
    variants: [
      { id: 'v1', color: '一曲がり', colorCode: '#808080', modelNumber: 'IST-1' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 100000 },
      { plan: 'HOURS', planId: 'HOURS', price: 100000 },
      { plan: 'LIFE', planId: 'LIFE', price: 100000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 100000 }
    ]
  },

  // アイアン階段 転落防止型へ変更
  {
    id: 'int-stairs-iron-safety',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: 'アイアン階段',
    name: 'アイアン階段 転落防止型へ変更',
    manufacturer: 'スレート',
    modelNumber: 'IRON-STAIRS-SAFETY',
    unit: '式',
    isOption: true,
    description: '手すり形状を転落防止型へ変更',
    variants: [
      { id: 'v1', color: '転落防止型', colorCode: '#808080', modelNumber: 'ISS-SAFE' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 150000 },
      { plan: 'HOURS', planId: 'HOURS', price: 150000 },
      { plan: 'LIFE', planId: 'LIFE', price: 150000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 150000 }
    ]
  },

  // アイアン階段 両側手摺
  {
    id: 'int-stairs-iron-double',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: 'アイアン階段',
    name: 'アイアン階段 両側手摺',
    manufacturer: 'スレート',
    modelNumber: 'IRON-STAIRS-DOUBLE',
    unit: '式',
    isOption: true,
    description: '片側手摺から両側手摺への変更',
    variants: [
      { id: 'v1', color: '両側手摺', colorCode: '#808080', modelNumber: 'ISD-DBL' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 250000 },
      { plan: 'HOURS', planId: 'HOURS', price: 250000 },
      { plan: 'LIFE', planId: 'LIFE', price: 250000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 250000 }
    ]
  },

  // ホール アイアン手すり
  {
    id: 'int-hall-iron-handrail',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: 'アイアン手すり',
    name: 'ホール アイアン手すり',
    manufacturer: 'Gハウス施工',
    modelNumber: 'HALL-IRON-HANDRAIL',
    unit: '式',
    isOption: true,
    description: '手摺形状：フラットバー 上桟+中桟2本',
    variants: [
      { id: 'v1', color: '日塗工/N-95 つや消ホワイト', colorCode: '#F5F5F5', modelNumber: 'HIH-WH' },
      { id: 'v2', color: '日塗工/N-60 つや消グレー', colorCode: '#808080', modelNumber: 'HIH-GR' },
      { id: 'v3', color: '日塗工/N-10 つや消ブラック', colorCode: '#2F2F2F', modelNumber: 'HIH-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 240000 },
      { plan: 'HOURS', planId: 'HOURS', price: 240000 },
      { plan: 'LIFE', planId: 'LIFE', price: 240000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 240000 }
    ]
  },

  // カーペット階段
  {
    id: 'int-stairs-carpet',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: 'カーペット階段',
    name: 'カーペット階段',
    manufacturer: 'Gハウス施工',
    modelNumber: 'CARPET-STAIRS',
    unit: 'カ所',
    isOption: true,
    description: '1~2階分ごとにオプション。※ひな壇階段・アイアン階段では使用不可。1～2階と2～3階で採用の場合はオプション×2',
    variants: [
      { id: 'v1', color: 'MDR-5014', colorCode: '#D2B48C', modelNumber: 'CS-MDR5014' },
      { id: 'v2', color: 'MDR-5017', colorCode: '#F5F5DC', modelNumber: 'CS-MDR5017' },
      { id: 'v3', color: 'HDR-1052', colorCode: '#808069', modelNumber: 'CS-HDR1052' },
      { id: 'v4', color: 'HDR-1053', colorCode: '#E8DCC8', modelNumber: 'CS-HDR1053' },
      { id: 'v5', color: 'HDR-1054', colorCode: '#B8A090', modelNumber: 'CS-HDR1054' },
      { id: 'v6', color: 'CIR-5002', colorCode: '#696969', modelNumber: 'CS-CIR5002' },
      { id: 'v7', color: 'CIR-5006', colorCode: '#C8B896', modelNumber: 'CS-CIR5006' },
      { id: 'v8', color: 'CIR-5007', colorCode: '#8B8B7A', modelNumber: 'CS-CIR5007' },
      { id: 'v9', color: 'CIR-5008', colorCode: '#5D4E37', modelNumber: 'CS-CIR5008' },
      { id: 'v10', color: 'LIR-5032', colorCode: '#A0A090', modelNumber: 'CS-LIR5032' },
      { id: 'v11', color: 'LIR-5033', colorCode: '#B8A878', modelNumber: 'CS-LIR5033' },
      { id: 'v12', color: 'LIR-5036', colorCode: '#D3D3D3', modelNumber: 'CS-LIR5036' },
      { id: 'v13', color: 'LIR-5044', colorCode: '#4A5568', modelNumber: 'CS-LIR5044' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 350000 },
      { plan: 'HOURS', planId: 'HOURS', price: 210000 },
      { plan: 'LIFE', planId: 'LIFE', price: 210000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 210000 }
    ]
  },

  // ===== 窓台・壁 =====

  // 階段回り 腰壁笠木 Panasonic（標準）
  {
    id: 'int-wall-stair-kasagi',
    categoryId: 'interior-wall',
    categoryName: '壁',
    subcategory: '腰壁笠木',
    name: '階段回り 腰壁笠木',
    manufacturer: 'Panasonic',
    modelNumber: 'STAIR-KASAGI',
    unit: '式',
    isOption: false,
    description: '標準高さFL+1100。階段部分斜め仕上がりとする',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', colorCode: '#F5F5F5', modelNumber: 'SK-WH' },
      { id: 'v2', color: 'ソイルブラック', colorCode: '#2F2F2F', modelNumber: 'SK-BK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 薄見付窓枠TS型 Panasonic（標準）
  {
    id: 'int-wall-window-frame',
    categoryId: 'interior-wall',
    categoryName: '壁',
    subcategory: '窓枠',
    name: '薄見付窓枠TS型',
    manufacturer: 'Panasonic',
    modelNumber: 'WINDOW-FRAME-TS',
    unit: '式',
    isOption: false,
    description: '見付6mmのスマートな窓台。※1色のみ採用可（2色以上採用不可）',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', colorCode: '#F5F5F5', modelNumber: 'WF-WH' },
      { id: 'v2', color: 'ソイルブラック', colorCode: '#2F2F2F', modelNumber: 'WF-BK' },
      { id: 'v3', color: 'パールグレー', colorCode: '#C0C0C0', modelNumber: 'WF-PG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // クッション巾木スマート/H30 Panasonic（標準）
  {
    id: 'int-wall-baseboard',
    categoryId: 'interior-wall',
    categoryName: '壁',
    subcategory: '巾木',
    name: 'クッション巾木スマート/H30',
    manufacturer: 'Panasonic',
    modelNumber: 'BASEBOARD-H30',
    unit: '式',
    isOption: false,
    description: '高さ3cm控え目な巾木。※1色のみ採用可（2色以上採用不可）',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', colorCode: '#F5F5F5', modelNumber: 'BB-WH' },
      { id: 'v2', color: 'ソイルブラック', colorCode: '#2F2F2F', modelNumber: 'BB-BK' },
      { id: 'v3', color: 'パールグレー', colorCode: '#C0C0C0', modelNumber: 'BB-PG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 腰壁
  {
    id: 'int-wall-koshikabe',
    categoryId: 'interior-wall',
    categoryName: '壁',
    subcategory: '腰壁',
    name: '腰壁',
    manufacturer: 'Gハウス施工',
    modelNumber: 'KOSHIKABE',
    unit: 'm',
    isOption: true,
    description: 'FL+1000の腰壁。※1m以下は¥15,000',
    variants: [
      { id: 'v1', color: 'しっくいホワイト', colorCode: '#F5F5F5', modelNumber: 'KK-WH' },
      { id: 'v2', color: 'ソイルブラック', colorCode: '#2F2F2F', modelNumber: 'KK-BK' },
      { id: 'v3', color: 'パールグレー', colorCode: '#C0C0C0', modelNumber: 'KK-PG' },
      { id: 'v4', color: 'ゴム集成クリア塗装', colorCode: '#D2B48C', modelNumber: 'KK-GC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // 垂壁
  {
    id: 'int-wall-tarekabe',
    categoryId: 'interior-wall',
    categoryName: '壁',
    subcategory: '垂壁',
    name: '垂壁',
    manufacturer: 'Gハウス施工',
    modelNumber: 'TAREKABE',
    unit: 'm',
    isOption: true,
    description: '垂壁長さH200またはH400を選択',
    variants: [
      { id: 'v1', color: 'H200', colorCode: '#F5F5F5', modelNumber: 'TK-H200' },
      { id: 'v2', color: 'H400', colorCode: '#F5F5F5', modelNumber: 'TK-H400' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 24000 },
      { plan: 'HOURS', planId: 'HOURS', price: 24000 },
      { plan: 'LIFE', planId: 'LIFE', price: 24000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 24000 }
    ]
  },

  // アーチ垂壁
  {
    id: 'int-wall-arch-tarekabe',
    categoryId: 'interior-wall',
    categoryName: '壁',
    subcategory: '垂壁',
    name: 'アーチ垂壁',
    manufacturer: 'Gハウス施工',
    modelNumber: 'ARCH-TAREKABE',
    unit: 'カ所',
    isOption: true,
    description: 'アーチ型の垂壁。幅910mm',
    variants: [
      { id: 'v1', color: 'アーチ垂壁', colorCode: '#F5F5F5', modelNumber: 'ATK-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 36000 },
      { plan: 'HOURS', planId: 'HOURS', price: 36000 },
      { plan: 'LIFE', planId: 'LIFE', price: 36000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 36000 }
    ]
  },

  // ===== 室内ドア =====

  // Panasonic VERITIS 開き戸 PA/TAデザイン（標準）
  {
    id: 'int-door-veritis-standard',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '開き戸',
    name: 'Panasonic VERITIS 開き戸 ハイドアH2400',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-DOOR',
    unit: '式',
    isOption: false,
    description: 'スタンダードレーベル/開き戸。PA/TAデザイン。各居室・トイレ・脱衣室・ランドリーのみ標準。2枚まで標準で片引き戸に変更可能',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', colorCode: '#8B7355', modelNumber: 'VD-SWN' },
      { id: 'v2', color: 'ウォールナット柄', colorCode: '#5D4037', modelNumber: 'VD-WN' },
      { id: 'v3', color: 'チェリー柄', colorCode: '#A0522D', modelNumber: 'VD-CH' },
      { id: 'v4', color: 'グレージュアッシュ柄', colorCode: '#B8A090', modelNumber: 'VD-GA' },
      { id: 'v5', color: 'イデアオーク柄', colorCode: '#C8A882', modelNumber: 'VD-IO' },
      { id: 'v6', color: 'メープル柄', colorCode: '#E5C29F', modelNumber: 'VD-MP' },
      { id: 'v7', color: 'ホワイトオーク柄', colorCode: '#F5F5DC', modelNumber: 'VD-WHO' },
      { id: 'v8', color: 'ホワイトアッシュ柄', colorCode: '#FAFAFA', modelNumber: 'VD-WHA' },
      { id: 'v9', color: 'しっくいホワイト柄', colorCode: '#FFFFFF', modelNumber: 'VD-SWH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 室内ドア ペイントカラー
  {
    id: 'int-door-veritis-paint',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '開き戸',
    name: 'Panasonic VERITIS ペイントカラー',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-PAINT',
    unit: 'カ所',
    isOption: true,
    description: 'ペイントカラーへの変更差額（扉1枚W900まで）',
    variants: [
      { id: 'v1', color: 'ブラックオーク柄', colorCode: '#2F2F2F', modelNumber: 'VP-BO' },
      { id: 'v2', color: 'ネイビーオーク柄', colorCode: '#1E3A5F', modelNumber: 'VP-NO' },
      { id: 'v3', color: 'ブルーグレーオーク柄', colorCode: '#6B8E9F', modelNumber: 'VP-BGO' },
      { id: 'v4', color: 'ビアンコルドオーク柄', colorCode: '#F0E6D8', modelNumber: 'VP-BRO' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 10000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 室内ドア ソリッドカラー
  {
    id: 'int-door-veritis-solid',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '開き戸',
    name: 'Panasonic VERITIS ソリッドカラー',
    manufacturer: 'Panasonic',
    modelNumber: 'VERITIS-SOLID',
    unit: 'カ所',
    isOption: true,
    description: 'ソリッドカラーへの変更差額（扉1枚W900まで）',
    variants: [
      { id: 'v1', color: 'ソイルブラック柄', colorCode: '#2F2F2F', modelNumber: 'VS-SB' },
      { id: 'v2', color: 'パールグレー柄', colorCode: '#C0C0C0', modelNumber: 'VS-PG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 20000 },
      { plan: 'HOURS', planId: 'HOURS', price: 20000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 20000 }
    ]
  },

  // 取手・ストッパーカラー
  {
    id: 'int-door-handle',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '取手',
    name: '取手・ストッパーカラー',
    manufacturer: 'Panasonic',
    modelNumber: 'DOOR-HANDLE',
    unit: '式',
    isOption: false,
    description: 'ハンドル(A1型)/角型引手(C1型)。床付ストッパーはハンドルカラーと同じ',
    variants: [
      { id: 'v1', color: 'サテンシルバー色（塗装）', colorCode: '#C0C0C0', modelNumber: 'DH-SS' },
      { id: 'v2', color: 'オフブラック色（塗装）', colorCode: '#2F2F2F', modelNumber: 'DH-OB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 開き戸追加
  {
    id: 'int-door-add-swing',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '追加',
    name: '開き戸追加',
    manufacturer: 'Panasonic',
    modelNumber: 'DOOR-ADD-SWING',
    unit: 'カ所',
    isOption: true,
    description: 'リビングドア・書斎・洗面室・収納等の建具追加',
    variants: [
      { id: 'v1', color: '開き戸追加', colorCode: '#D2B48C', modelNumber: 'DAS-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 35000 },
      { plan: 'HOURS', planId: 'HOURS', price: 35000 },
      { plan: 'LIFE', planId: 'LIFE', price: 35000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 35000 }
    ]
  },

  // 標準開戸から片引戸へ変更
  {
    id: 'int-door-change-sliding',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '変更',
    name: '標準開戸から片引戸へ変更',
    manufacturer: 'Panasonic',
    modelNumber: 'DOOR-CHANGE-SLIDE',
    unit: 'カ所',
    isOption: true,
    description: '標準開戸から片引戸への変更差額。上吊りタイプ、下方レール無',
    variants: [
      { id: 'v1', color: '片引戸へ変更', colorCode: '#D2B48C', modelNumber: 'DCS-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 36000 },
      { plan: 'HOURS', planId: 'HOURS', price: 36000 },
      { plan: 'LIFE', planId: 'LIFE', price: 36000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 36000 }
    ]
  },

  // 表示錠付きに変更
  {
    id: 'int-door-add-lock',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '変更',
    name: '表示錠付きに変更',
    manufacturer: 'Panasonic',
    modelNumber: 'DOOR-ADD-LOCK',
    unit: 'カ所',
    isOption: true,
    description: '表示錠付きに変更差額。※トイレ、脱衣室の扉には標準で表示錠が付属',
    variants: [
      { id: 'v1', color: '表示錠追加', colorCode: '#C0C0C0', modelNumber: 'DAL-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 5000 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 引戸追加
  {
    id: 'int-door-add-sliding',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '追加',
    name: '引戸追加',
    manufacturer: 'Panasonic',
    modelNumber: 'DOOR-ADD-SLIDING',
    unit: 'カ所',
    isOption: true,
    description: '引戸の追加。片引戸は3枚目からオプション',
    variants: [
      { id: 'v1', color: '引戸追加', colorCode: '#D2B48C', modelNumber: 'DASL-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 71000 },
      { plan: 'HOURS', planId: 'HOURS', price: 71000 },
      { plan: 'LIFE', planId: 'LIFE', price: 71000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 71000 }
    ]
  },

  // 収納用建具 折れ戸
  {
    id: 'int-door-storage-fold',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '収納建具',
    name: '収納用建具 折れ戸 PHデザイン',
    manufacturer: 'Panasonic',
    modelNumber: 'STORAGE-FOLD',
    unit: 'カ所',
    isOption: true,
    description: '折れ戸/壁芯々W910まで（H2400）。PHデザイン取手レス',
    variants: [
      { id: 'v1', color: '折れ戸', colorCode: '#D2B48C', modelNumber: 'SF-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 50000 },
      { plan: 'HOURS', planId: 'HOURS', price: 50000 },
      { plan: 'LIFE', planId: 'LIFE', price: 50000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 50000 }
    ]
  },

  // 収納用建具 2枚引き違い戸
  {
    id: 'int-door-storage-sliding2',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '収納建具',
    name: '収納用建具 2枚引き違い戸 PAデザイン',
    manufacturer: 'Panasonic',
    modelNumber: 'STORAGE-SLIDE2',
    unit: 'カ所',
    isOption: true,
    description: '2枚引き違い戸/壁芯々W1820まで（H2400）',
    variants: [
      { id: 'v1', color: '2枚引き違い戸', colorCode: '#D2B48C', modelNumber: 'SS2-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 90000 },
      { plan: 'HOURS', planId: 'HOURS', price: 90000 },
      { plan: 'LIFE', planId: 'LIFE', price: 90000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 90000 }
    ]
  },

  // 収納建具 鏡追加
  {
    id: 'int-door-storage-mirror',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: '収納建具',
    name: '収納建具 鏡追加',
    manufacturer: 'Panasonic',
    modelNumber: 'STORAGE-MIRROR',
    unit: 'カ所',
    isOption: true,
    description: '折れ戸のみ対応可',
    variants: [
      { id: 'v1', color: '鏡追加', colorCode: '#C0C0C0', modelNumber: 'SM-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 建具デザイン変更（ガラス入り）
  {
    id: 'int-door-design-glass',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: 'デザイン変更',
    name: '建具デザイン変更（ガラス/アクリル入り）',
    manufacturer: 'Panasonic',
    modelNumber: 'DOOR-DESIGN-GLASS',
    unit: 'カ所',
    isOption: true,
    description: 'WB/WC/LD/MC/LBデザイン、ペットドア。※ガラスの変更は対応不可',
    variants: [
      { id: 'v1', color: 'WBデザイン（半透明アクリル板）', colorCode: '#E0E0E0', modelNumber: 'DDG-WB' },
      { id: 'v2', color: 'WCデザイン（半透明あわせガラス）', colorCode: '#E8E8E8', modelNumber: 'DDG-WC' },
      { id: 'v3', color: 'LDデザイン（半透明アクリル板）', colorCode: '#E0E0E0', modelNumber: 'DDG-LD' },
      { id: 'v4', color: 'MCデザイン（半透明あわせガラス）', colorCode: '#E8E8E8', modelNumber: 'DDG-MC' },
      { id: 'v5', color: 'LBデザイン（半透明アクリル板）', colorCode: '#E0E0E0', modelNumber: 'DDG-LB' },
      { id: 'v6', color: 'PAデザイン+ペットドア（開口H280W180）', colorCode: '#D2B48C', modelNumber: 'DDG-PET' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 50000 },
      { plan: 'HOURS', planId: 'HOURS', price: 50000 },
      { plan: 'LIFE', planId: 'LIFE', price: 50000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 50000 }
    ]
  },

  // 建具デザイン変更 HCデザイン（引戸のみ）
  {
    id: 'int-door-design-hc',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: 'デザイン変更',
    name: '建具デザイン変更 HCデザイン',
    manufacturer: 'Panasonic',
    modelNumber: 'DOOR-DESIGN-HC',
    unit: 'カ所',
    isOption: true,
    description: '引戸のみ対応。透明orフロスト長熱処理ガラス。引戸変更費用含む',
    variants: [
      { id: 'v1', color: 'HCデザイン（透明ガラス）', colorCode: '#E8F4F8', modelNumber: 'DDH-HC-CL' },
      { id: 'v2', color: 'HCデザイン（フロストガラス）', colorCode: '#F0F0F0', modelNumber: 'DDH-HC-FR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 105000 },
      { plan: 'HOURS', planId: 'HOURS', price: 105000 },
      { plan: 'LIFE', planId: 'LIFE', price: 105000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 105000 }
    ]
  },

  // 建具デザイン変更 HBデザイン（引戸のみ）
  {
    id: 'int-door-design-hb',
    categoryId: 'interior-door',
    categoryName: '室内ドア',
    subcategory: 'デザイン変更',
    name: '建具デザイン変更 HBデザイン',
    manufacturer: 'Panasonic',
    modelNumber: 'DOOR-DESIGN-HB',
    unit: 'カ所',
    isOption: true,
    description: '引戸のみ対応。透明orフロスト長熱処理ガラス。引戸変更費用含む',
    variants: [
      { id: 'v1', color: 'HBデザイン（透明ガラス）', colorCode: '#E8F4F8', modelNumber: 'DDH-HB-CL' },
      { id: 'v2', color: 'HBデザイン（フロストガラス）', colorCode: '#F0F0F0', modelNumber: 'DDH-HB-FR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 85000 },
      { plan: 'HOURS', planId: 'HOURS', price: 85000 },
      { plan: 'LIFE', planId: 'LIFE', price: 85000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 85000 }
    ]
  },

  // ===== 室内窓 =====

  // 室内窓 Aパターン 標準ガラス
  {
    id: 'int-window-a-standard',
    categoryId: 'interior-window',
    categoryName: '室内窓',
    subcategory: 'Aパターン',
    name: '室内窓 Aパターン 標準ガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-A-STD',
    unit: '式',
    isOption: true,
    description: '優しい光を取り込み開放的に空間を仕切れる。A-1～A-4形状。透明熱処理ガラス',
    variants: [
      { id: 'v1', color: 'オフブラック', colorCode: '#2F2F2F', modelNumber: 'IWA-OB' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'IWA-WH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 71000 },
      { plan: 'HOURS', planId: 'HOURS', price: 71000 },
      { plan: 'LIFE', planId: 'LIFE', price: 71000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 71000 }
    ]
  },

  // 室内窓 Aパターン オプションガラス
  {
    id: 'int-window-a-option',
    categoryId: 'interior-window',
    categoryName: '室内窓',
    subcategory: 'Aパターン',
    name: '室内窓 Aパターン オプションガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-A-OPT',
    unit: '式',
    isOption: true,
    description: 'カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス',
    variants: [
      { id: 'v1', color: 'オフブラック', colorCode: '#2F2F2F', modelNumber: 'IWAO-OB' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'IWAO-WH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 105000 },
      { plan: 'HOURS', planId: 'HOURS', price: 105000 },
      { plan: 'LIFE', planId: 'LIFE', price: 105000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 105000 }
    ]
  },

  // 室内窓 Bパターン 標準ガラス
  {
    id: 'int-window-b-standard',
    categoryId: 'interior-window',
    categoryName: '室内窓',
    subcategory: 'Bパターン',
    name: '室内窓 Bパターン 標準ガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-B-STD',
    unit: '式',
    isOption: true,
    description: 'B-1～B-5形状。透明熱処理ガラス',
    variants: [
      { id: 'v1', color: 'オフブラック', colorCode: '#2F2F2F', modelNumber: 'IWB-OB' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'IWB-WH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 135000 },
      { plan: 'HOURS', planId: 'HOURS', price: 135000 },
      { plan: 'LIFE', planId: 'LIFE', price: 135000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 135000 }
    ]
  },

  // 室内窓 Bパターン オプションガラス
  {
    id: 'int-window-b-option',
    categoryId: 'interior-window',
    categoryName: '室内窓',
    subcategory: 'Bパターン',
    name: '室内窓 Bパターン オプションガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-B-OPT',
    unit: '式',
    isOption: true,
    description: 'カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス',
    variants: [
      { id: 'v1', color: 'オフブラック', colorCode: '#2F2F2F', modelNumber: 'IWBO-OB' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'IWBO-WH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 200000 },
      { plan: 'HOURS', planId: 'HOURS', price: 200000 },
      { plan: 'LIFE', planId: 'LIFE', price: 200000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 200000 }
    ]
  },

  // 室内窓 Cパターン 標準ガラス
  {
    id: 'int-window-c-standard',
    categoryId: 'interior-window',
    categoryName: '室内窓',
    subcategory: 'Cパターン',
    name: '室内窓 Cパターン 標準ガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-C-STD',
    unit: '式',
    isOption: true,
    description: 'C-1～C-3形状。透明熱処理ガラス',
    variants: [
      { id: 'v1', color: 'オフブラック', colorCode: '#2F2F2F', modelNumber: 'IWC-OB' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'IWC-WH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 197000 },
      { plan: 'HOURS', planId: 'HOURS', price: 197000 },
      { plan: 'LIFE', planId: 'LIFE', price: 197000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 197000 }
    ]
  },

  // 室内窓 Cパターン オプションガラス
  {
    id: 'int-window-c-option',
    categoryId: 'interior-window',
    categoryName: '室内窓',
    subcategory: 'Cパターン',
    name: '室内窓 Cパターン オプションガラス',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-C-OPT',
    unit: '式',
    isOption: true,
    description: 'カスミ/チェッカーアクリル/チェッカー/レイン/モール熱処理ガラス',
    variants: [
      { id: 'v1', color: 'オフブラック', colorCode: '#2F2F2F', modelNumber: 'IWCO-OB' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'IWCO-WH' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 295000 },
      { plan: 'HOURS', planId: 'HOURS', price: 295000 },
      { plan: 'LIFE', planId: 'LIFE', price: 295000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 295000 }
    ]
  },

  // 室内窓 突き出し窓に変更
  {
    id: 'int-window-awning',
    categoryId: 'interior-window',
    categoryName: '室内窓',
    subcategory: 'オプション',
    name: '室内窓 突き出し窓に変更',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-WINDOW-AWNING',
    unit: '枚',
    isOption: true,
    description: 'FIX窓から突き出し窓への変更。例：B-5の場合 ¥15,000×2枚',
    variants: [
      { id: 'v1', color: '突き出し窓に変更', colorCode: '#E8F4F8', modelNumber: 'IW-AWN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // ===== アクセントパネル =====

  // THE WALL オーク（ツキ板）75mmピッチ
  {
    id: 'int-panel-thewall-oak75',
    categoryId: 'interior-panel',
    categoryName: 'アクセントパネル',
    subcategory: 'THE WALL',
    name: 'THE WALL オーク（ツキ板）75mmピッチ',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-OAK75',
    unit: '㎡',
    isOption: true,
    description: 'パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'オーク（ツキ板）75mmピッチ', colorCode: '#C8A882', modelNumber: 'TW-OAK75' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // THE WALL ツキ板ランダムピッチ ¥20,000/㎡
  {
    id: 'int-panel-thewall-tsukiita',
    categoryId: 'interior-panel',
    categoryName: 'アクセントパネル',
    subcategory: 'THE WALL',
    name: 'THE WALL ツキ板ランダムピッチ',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-TSUKIITA',
    unit: '㎡',
    isOption: true,
    description: 'パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'レッドシダー（ツキ板）ランダムピッチ', colorCode: '#A0522D', modelNumber: 'TW-RC' },
      { id: 'v2', color: 'ヘムロック（ツキ板）ランダムピッチ', colorCode: '#D2B48C', modelNumber: 'TW-HM' },
      { id: 'v3', color: 'ブラックチェリー（ツキ板）75mmピッチ', colorCode: '#8B4513', modelNumber: 'TW-BC75' },
      { id: 'v4', color: 'オーク（ツキ板）ランダムピッチ', colorCode: '#C8A882', modelNumber: 'TW-OAKR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 20000 },
      { plan: 'HOURS', planId: 'HOURS', price: 20000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 20000 }
    ]
  },

  // THE WALL アカシア（ツキ板）ランダムピッチ
  {
    id: 'int-panel-thewall-acacia',
    categoryId: 'interior-panel',
    categoryName: 'アクセントパネル',
    subcategory: 'THE WALL',
    name: 'THE WALL アカシア（ツキ板）ランダムピッチ',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-ACACIA',
    unit: '㎡',
    isOption: true,
    description: 'パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'アカシア（ツキ板）ランダムピッチ', colorCode: '#8B6914', modelNumber: 'TW-AC' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 21000 },
      { plan: 'HOURS', planId: 'HOURS', price: 21000 },
      { plan: 'LIFE', planId: 'LIFE', price: 21000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 21000 }
    ]
  },

  // THE WALL オーク（挽き板）レリーフ
  {
    id: 'int-panel-thewall-oak-relief',
    categoryId: 'interior-panel',
    categoryName: 'アクセントパネル',
    subcategory: 'THE WALL',
    name: 'THE WALL オーク（挽き板）レリーフ',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-OAK-RELIEF',
    unit: '㎡',
    isOption: true,
    description: 'パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'オーク（挽き板）レリーフ', colorCode: '#C8A882', modelNumber: 'TW-OAKREL' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 48000 },
      { plan: 'HOURS', planId: 'HOURS', price: 48000 },
      { plan: 'LIFE', planId: 'LIFE', price: 48000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 48000 }
    ]
  },

  // THE WALL ブラックチェリー（挽き板）レリーフ
  {
    id: 'int-panel-thewall-bc-relief',
    categoryId: 'interior-panel',
    categoryName: 'アクセントパネル',
    subcategory: 'THE WALL',
    name: 'THE WALL ブラックチェリー（挽き板）レリーフ',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-BC-RELIEF',
    unit: '㎡',
    isOption: true,
    description: 'パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'ブラックチェリー（挽き板）レリーフ', colorCode: '#8B4513', modelNumber: 'TW-BCREL' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 55000 },
      { plan: 'HOURS', planId: 'HOURS', price: 55000 },
      { plan: 'LIFE', planId: 'LIFE', price: 55000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 55000 }
    ]
  },

  // THE WALL ヘムロック（挽き板）
  {
    id: 'int-panel-thewall-hemlock',
    categoryId: 'interior-panel',
    categoryName: 'アクセントパネル',
    subcategory: 'THE WALL',
    name: 'THE WALL ヘムロック（挽き板）',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'THEWALL-HEMLOCK',
    unit: '㎡',
    isOption: true,
    description: 'パネルサイズ2,730mm×600mm',
    variants: [
      { id: 'v1', color: 'ヘムロック（挽き板）Fフラット', colorCode: '#D2B48C', modelNumber: 'TW-HMF' },
      { id: 'v2', color: 'ヘムロック（挽き板）Tラウンド', colorCode: '#D2B48C', modelNumber: 'TW-HMT' },
      { id: 'v3', color: 'ヘムロック（挽き板）Mマウント', colorCode: '#D2B48C', modelNumber: 'TW-HMM' },
      { id: 'v4', color: 'ヘムロック（挽き板）Mマウント（ウェーブ加工）', colorCode: '#D2B48C', modelNumber: 'TW-HMMW' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 60000 },
      { plan: 'HOURS', planId: 'HOURS', price: 60000 },
      { plan: 'LIFE', planId: 'LIFE', price: 60000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // セラールパネル AICA
  {
    id: 'int-panel-ceral',
    categoryId: 'interior-panel',
    categoryName: 'アクセントパネル',
    subcategory: 'セラール',
    name: 'セラールパネル',
    manufacturer: 'AICA',
    modelNumber: 'CERAL-PANEL',
    unit: '枚',
    isOption: true,
    description: '900mm×2,400mm。見切り材（2本）+¥8,000UP。※キッチン、メーカーカップボード吊戸～カウンター間は施工不可',
    variants: [
      { id: 'v1', color: 'FKJ 6000ZYN24 ヘアライン仕上げ（見切り：スノーホワイト）', colorCode: '#F5F5F5', modelNumber: 'CP-6000' },
      { id: 'v2', color: 'FKJ 6300ZYN24 ヘアライン仕上げ（見切り：アイボリー）', colorCode: '#FFFFF0', modelNumber: 'CP-6300' },
      { id: 'v3', color: 'FKJ 6115ZYN24 ヘアライン仕上げ（見切り：シルバー）', colorCode: '#C0C0C0', modelNumber: 'CP-6115' },
      { id: 'v4', color: 'FKJ 6117ZYD24 ヘアライン仕上げ（見切り：シルバー）', colorCode: '#A9A9A9', modelNumber: 'CP-6117' },
      { id: 'v5', color: 'FKM 6000ZMN 艶有り（見切り：スノーホワイト）', colorCode: '#FFFFFF', modelNumber: 'CP-6000G' },
      { id: 'v6', color: 'FKM 6005ZMN 艶有り（見切り：アイボリー）', colorCode: '#FFFFF0', modelNumber: 'CP-6005G' },
      { id: 'v7', color: 'FKM 6110ZMN 艶有り（見切り：シルバー）', colorCode: '#C0C0C0', modelNumber: 'CP-6110G' },
      { id: 'v8', color: 'FJ-936ZD 艶なし（見切り：シルバー）', colorCode: '#808080', modelNumber: 'CP-936' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 33000 },
      { plan: 'HOURS', planId: 'HOURS', price: 33000 },
      { plan: 'LIFE', planId: 'LIFE', price: 33000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 33000 }
    ]
  },

  // セラール セレント AICA
  {
    id: 'int-panel-ceral-serent',
    categoryId: 'interior-panel',
    categoryName: 'アクセントパネル',
    subcategory: 'セラール',
    name: 'セラール セレント',
    manufacturer: 'AICA',
    modelNumber: 'CERAL-SERENT',
    unit: '枚',
    isOption: true,
    description: '900mm×2,400mm。見切り材（2本）+¥14,000UP。※キッチン、メーカーカップボード吊戸～カウンター間は施工不可',
    variants: [
      { id: 'v1', color: '10301 Crunch Concrete Snow White（見切り：胡粉）', colorCode: '#F5F5F5', modelNumber: 'CS-10301' },
      { id: 'v2', color: '10302 Crunch Concrete Beige（見切り：白土）', colorCode: '#F5F5DC', modelNumber: 'CS-10302' },
      { id: 'v3', color: '10303 Crunch Concrete Gray（見切り：シルバー）', colorCode: '#A9A9A9', modelNumber: 'CS-10303' },
      { id: 'v4', color: '10304 Crunch Concrete Dark Gray（見切り：薄墨）', colorCode: '#696969', modelNumber: 'CS-10304' },
      { id: 'v5', color: '10300 Spread Metal（見切り：灰ねず）', colorCode: '#808080', modelNumber: 'CS-10300' },
      { id: 'v6', color: '10242 Grace Marble（見切り：胡粉）', colorCode: '#E8E8E8', modelNumber: 'CS-10242' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 44000 },
      { plan: 'HOURS', planId: 'HOURS', price: 44000 },
      { plan: 'LIFE', planId: 'LIFE', price: 44000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 44000 }
    ]
  },

  // ===== 格子 =====

  // インテリア格子 LIXIL W045
  {
    id: 'int-koushi-w045',
    categoryId: 'interior-koushi',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: 'インテリア格子 W045（W276～465mm）',
    manufacturer: 'LIXIL',
    modelNumber: 'KOUSHI-W045',
    unit: 'カ所',
    isOption: true,
    description: '高さH895～2,495mmから選択可能。※腰壁を設置する場合は別途費用',
    variants: [
      { id: 'v1', color: 'クリエペール', colorCode: '#F5F5DC', modelNumber: 'KW045-CP' },
      { id: 'v2', color: 'クリエラスク', colorCode: '#D2B48C', modelNumber: 'KW045-CR' },
      { id: 'v3', color: 'クリエダーク', colorCode: '#5D4037', modelNumber: 'KW045-CD' },
      { id: 'v4', color: 'コウノキ', colorCode: '#8B7355', modelNumber: 'KW045-KN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 110000 },
      { plan: 'HOURS', planId: 'HOURS', price: 110000 },
      { plan: 'LIFE', planId: 'LIFE', price: 110000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 110000 }
    ]
  },

  // インテリア格子 LIXIL W085
  {
    id: 'int-koushi-w085',
    categoryId: 'interior-koushi',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: 'インテリア格子 W085（W466～843mm）',
    manufacturer: 'LIXIL',
    modelNumber: 'KOUSHI-W085',
    unit: 'カ所',
    isOption: true,
    description: '高さH895～2,495mmから選択可能。※腰壁を設置する場合は別途費用',
    variants: [
      { id: 'v1', color: 'クリエペール', colorCode: '#F5F5DC', modelNumber: 'KW085-CP' },
      { id: 'v2', color: 'クリエラスク', colorCode: '#D2B48C', modelNumber: 'KW085-CR' },
      { id: 'v3', color: 'クリエダーク', colorCode: '#5D4037', modelNumber: 'KW085-CD' },
      { id: 'v4', color: 'コウノキ', colorCode: '#8B7355', modelNumber: 'KW085-KN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 130000 },
      { plan: 'HOURS', planId: 'HOURS', price: 130000 },
      { plan: 'LIFE', planId: 'LIFE', price: 130000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 130000 }
    ]
  },

  // インテリア格子 LIXIL W12
  {
    id: 'int-koushi-w12',
    categoryId: 'interior-koushi',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: 'インテリア格子 W12（W843～1,221mm）',
    manufacturer: 'LIXIL',
    modelNumber: 'KOUSHI-W12',
    unit: 'カ所',
    isOption: true,
    description: '高さH895～2,495mmから選択可能。※腰壁を設置する場合は別途費用',
    variants: [
      { id: 'v1', color: 'クリエペール', colorCode: '#F5F5DC', modelNumber: 'KW12-CP' },
      { id: 'v2', color: 'クリエラスク', colorCode: '#D2B48C', modelNumber: 'KW12-CR' },
      { id: 'v3', color: 'クリエダーク', colorCode: '#5D4037', modelNumber: 'KW12-CD' },
      { id: 'v4', color: 'コウノキ', colorCode: '#8B7355', modelNumber: 'KW12-KN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 160000 },
      { plan: 'HOURS', planId: 'HOURS', price: 160000 },
      { plan: 'LIFE', planId: 'LIFE', price: 160000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 160000 }
    ]
  },

  // インテリア格子 LIXIL W16
  {
    id: 'int-koushi-w16',
    categoryId: 'interior-koushi',
    categoryName: '格子',
    subcategory: 'インテリア格子',
    name: 'インテリア格子 W16（W1,221～2,495mm）',
    manufacturer: 'LIXIL',
    modelNumber: 'KOUSHI-W16',
    unit: 'カ所',
    isOption: true,
    description: '高さH895～2,495mmから選択可能。※腰壁を設置する場合は別途費用',
    variants: [
      { id: 'v1', color: 'クリエペール', colorCode: '#F5F5DC', modelNumber: 'KW16-CP' },
      { id: 'v2', color: 'クリエラスク', colorCode: '#D2B48C', modelNumber: 'KW16-CR' },
      { id: 'v3', color: 'クリエダーク', colorCode: '#5D4037', modelNumber: 'KW16-CD' },
      { id: 'v4', color: 'コウノキ', colorCode: '#8B7355', modelNumber: 'KW16-KN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 190000 },
      { plan: 'HOURS', planId: 'HOURS', price: 190000 },
      { plan: 'LIFE', planId: 'LIFE', price: 190000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 190000 }
    ]
  },

  // ===== アクセントタイル =====

  // スカンジナビアストン 名古屋モザイク
  {
    id: 'int-tile-scandinavia',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '名古屋モザイク',
    name: 'スカンジナビアストン',
    manufacturer: '名古屋モザイク',
    modelNumber: 'CHY-U20',
    unit: '㎡',
    isOption: true,
    description: '598×298×10mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'CHY-U2010', colorCode: '#D3D3D3', modelNumber: 'CHY-U2010' },
      { id: 'v2', color: 'CHY-U2020', colorCode: '#C8C8C8', modelNumber: 'CHY-U2020' },
      { id: 'v3', color: 'CHY-U2030', colorCode: '#B8B8B8', modelNumber: 'CHY-U2030' },
      { id: 'v4', color: 'CHY-U2040', colorCode: '#A8A8A8', modelNumber: 'CHY-U2040' },
      { id: 'v5', color: 'CHY-U2050', colorCode: '#989898', modelNumber: 'CHY-U2050' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 26000 },
      { plan: 'HOURS', planId: 'HOURS', price: 26000 },
      { plan: 'LIFE', planId: 'LIFE', price: 26000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 26000 }
    ]
  },

  // バイオフィリック 名古屋モザイク
  {
    id: 'int-tile-biophilic',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '名古屋モザイク',
    name: 'バイオフィリック',
    manufacturer: '名古屋モザイク',
    modelNumber: 'PST-U97',
    unit: '㎡',
    isOption: true,
    description: '596.5×297×8.5mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'PST-U9710', colorCode: '#E8DCC8', modelNumber: 'PST-U9710' },
      { id: 'v2', color: 'PST-U9720', colorCode: '#D8CCB8', modelNumber: 'PST-U9720' },
      { id: 'v3', color: 'PST-U9730', colorCode: '#C8BCA8', modelNumber: 'PST-U9730' },
      { id: 'v4', color: 'PST-U9740', colorCode: '#B8AC98', modelNumber: 'PST-U9740' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 28000 },
      { plan: 'HOURS', planId: 'HOURS', price: 28000 },
      { plan: 'LIFE', planId: 'LIFE', price: 28000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 28000 }
    ]
  },

  // セメンティング 名古屋モザイク
  {
    id: 'int-tile-cementing',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '名古屋モザイク',
    name: 'セメンティング',
    manufacturer: '名古屋モザイク',
    modelNumber: 'ORG-U78',
    unit: '㎡',
    isOption: true,
    description: '598×298×9mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'ORG-U7810', colorCode: '#F5F5DC', modelNumber: 'ORG-U7810' },
      { id: 'v2', color: 'ORG-U7820', colorCode: '#E8E0D0', modelNumber: 'ORG-U7820' },
      { id: 'v3', color: 'ORG-U7830', colorCode: '#D8D0C0', modelNumber: 'ORG-U7830' },
      { id: 'v4', color: 'ORG-U7840', colorCode: '#C8C0B0', modelNumber: 'ORG-U7840' },
      { id: 'v5', color: 'ORG-U7880', colorCode: '#A09080', modelNumber: 'ORG-U7880' },
      { id: 'v6', color: 'ORG-U7890', colorCode: '#908070', modelNumber: 'ORG-U7890' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // モデネーゼ 名古屋モザイク
  {
    id: 'int-tile-modenese',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '名古屋モザイク',
    name: 'モデネーゼ',
    manufacturer: '名古屋モザイク',
    modelNumber: 'XCV-U32',
    unit: '㎡',
    isOption: true,
    description: '598×298×10mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'XCV-U3200', colorCode: '#FFFFFF', modelNumber: 'XCV-U3200' },
      { id: 'v2', color: 'XCV-U3210', colorCode: '#F5F5F5', modelNumber: 'XCV-U3210' },
      { id: 'v3', color: 'XCV-U3220', colorCode: '#E8E8E8', modelNumber: 'XCV-U3220' },
      { id: 'v4', color: 'XCV-U3230', colorCode: '#D8D8D8', modelNumber: 'XCV-U3230' },
      { id: 'v5', color: 'XCV-U3240', colorCode: '#C8C8C8', modelNumber: 'XCV-U3240' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 28000 },
      { plan: 'HOURS', planId: 'HOURS', price: 28000 },
      { plan: 'LIFE', planId: 'LIFE', price: 28000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 28000 }
    ]
  },

  // ラヴィータ 名古屋モザイク
  {
    id: 'int-tile-lavita',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '名古屋モザイク',
    name: 'ラヴィータ',
    manufacturer: '名古屋モザイク',
    modelNumber: 'MSY-U91',
    unit: '㎡',
    isOption: true,
    description: '598×298×8mm角平。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'MSY-U9100', colorCode: '#E8E0D8', modelNumber: 'MSY-U9100' },
      { id: 'v2', color: 'MSY-U9110', colorCode: '#D8D0C8', modelNumber: 'MSY-U9110' },
      { id: 'v3', color: 'MSY-U9120', colorCode: '#C8C0B8', modelNumber: 'MSY-U9120' },
      { id: 'v4', color: 'MSY-U9130', colorCode: '#B8B0A8', modelNumber: 'MSY-U9130' },
      { id: 'v5', color: 'MSY-U9140', colorCode: '#A8A098', modelNumber: 'MSY-U9140' },
      { id: 'v6', color: 'MSY-U9150', colorCode: '#989088', modelNumber: 'MSY-U9150' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 22000 },
      { plan: 'HOURS', planId: 'HOURS', price: 22000 },
      { plan: 'LIFE', planId: 'LIFE', price: 22000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 22000 }
    ]
  },

  // ファータ 名古屋モザイク
  {
    id: 'int-tile-fata',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '名古屋モザイク',
    name: 'ファータ',
    manufacturer: '名古屋モザイク',
    modelNumber: 'FAT-01B',
    unit: '㎡',
    isOption: true,
    description: '300×300×6mm/1シート。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'FAT-01B（ブライト）', colorCode: '#FFFFFF', modelNumber: 'FAT-01B' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 22000 },
      { plan: 'HOURS', planId: 'HOURS', price: 22000 },
      { plan: 'LIFE', planId: 'LIFE', price: 22000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 22000 }
    ]
  },

  // タイル工事費用一式
  {
    id: 'int-tile-construction',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '工事費用',
    name: 'タイル工事費用一式',
    manufacturer: 'Gハウス施工',
    modelNumber: 'TILE-CONST',
    unit: '式',
    isOption: true,
    description: 'タイル施工に必要な工事費用。6㎡以下の場合は+¥50,000',
    variants: [
      { id: 'v1', color: '工事費用一式', colorCode: '#808080', modelNumber: 'TC-STD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // エキピズム 名古屋モザイク工業
  {
    id: 'int-tile-ekipizm',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '名古屋モザイク',
    name: 'エキピズム',
    manufacturer: '名古屋モザイク工業',
    modelNumber: 'EKP-F9910',
    unit: '㎡',
    isOption: true,
    description: '200×65角凸面。立体感のある凸面タイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'EKP-F9910（ホワイト）', colorCode: '#F5F0E8', modelNumber: 'EKP-F9910' },
      { id: 'v2', color: 'EKP-F9920（ピンクベージュ）', colorCode: '#E8D8D0', modelNumber: 'EKP-F9920' },
      { id: 'v3', color: 'EKP-F9930（グレージュ）', colorCode: '#D0C8C0', modelNumber: 'EKP-F9930' },
      { id: 'v4', color: 'EKP-F9940（ブラウン）', colorCode: '#6B4C3A', modelNumber: 'EKP-F9940' },
      { id: 'v5', color: 'EKP-F9950（ダークグリーン）', colorCode: '#2B4038', modelNumber: 'EKP-F9950' },
      { id: 'v6', color: 'EKP-F9960（ディープグリーン）', colorCode: '#1A3830', modelNumber: 'EKP-F9960' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // マットアンドモア 名古屋モザイク工業
  {
    id: 'int-tile-mattandmore',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '名古屋モザイク',
    name: 'マットアンドモア',
    manufacturer: '名古屋モザイク工業',
    modelNumber: 'FRE-Q3202',
    unit: '㎡',
    isOption: true,
    description: '750×250角平。大判でスタイリッシュな質感。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'FRE-Q3202', colorCode: '#D8D0C8', modelNumber: 'FRE-Q3202' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // WIG-WAG 平田タイル
  {
    id: 'int-tile-wigwag',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '平田タイル',
    name: 'WIG-WAG',
    manufacturer: '平田タイル',
    modelNumber: 'WIG-W',
    unit: '㎡',
    isOption: true,
    description: '75×150×10mm。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'WIG-W（ホワイト）', colorCode: '#F0F0F0', modelNumber: 'WIG-W' },
      { id: 'v2', color: 'WIG-G（グレー）', colorCode: '#A0A0A0', modelNumber: 'WIG-G' },
      { id: 'v3', color: 'WIG-B（ブラック）', colorCode: '#303030', modelNumber: 'WIG-B' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 31000 },
      { plan: 'HOURS', planId: 'HOURS', price: 31000 },
      { plan: 'LIFE', planId: 'LIFE', price: 31000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 31000 }
    ]
  },

  // パレッタ 平田タイル
  {
    id: 'int-tile-paletta',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '平田タイル',
    name: 'パレッタ',
    manufacturer: '平田タイル',
    modelNumber: 'PL-800-F',
    unit: '㎡',
    isOption: true,
    description: '77×153×7mm。シンプルな白タイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'PL-800-F（ホワイト）', colorCode: '#FFFFFF', modelNumber: 'PL-800-F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 27000 },
      { plan: 'HOURS', planId: 'HOURS', price: 27000 },
      { plan: 'LIFE', planId: 'LIFE', price: 27000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 27000 }
    ]
  },

  // マーブルモザイク 平田タイル
  {
    id: 'int-tile-marblemosaic',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '平田タイル',
    name: 'マーブルモザイク',
    manufacturer: '平田タイル',
    modelNumber: 'MBM-BCMIX',
    unit: '㎡',
    isOption: true,
    description: '297.5×304×10mm/1シート。天然大理石モザイク。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'MBM-BCMIX', colorCode: '#E8E8E0', modelNumber: 'MBM-BCMIX' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 53000 },
      { plan: 'HOURS', planId: 'HOURS', price: 53000 },
      { plan: 'LIFE', planId: 'LIFE', price: 53000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 53000 }
    ]
  },

  // Britz 平田タイル
  {
    id: 'int-tile-britz',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '平田タイル',
    name: 'Britz',
    manufacturer: '平田タイル',
    modelNumber: 'HB-101',
    unit: '㎡',
    isOption: true,
    description: '300×300×6mm/1シート。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'HB-101（ホワイト）', colorCode: '#F5F5F0', modelNumber: 'HB-101' },
      { id: 'v2', color: 'HB-109（ブラック）', colorCode: '#303030', modelNumber: 'HB-109' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 25000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 25000 }
    ]
  },

  // 10Thirty 平田タイル
  {
    id: 'int-tile-10thirty',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '平田タイル',
    name: '10Thirty',
    manufacturer: '平田タイル',
    modelNumber: '13110',
    unit: '㎡',
    isOption: true,
    description: '98×298×8mm。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: '13110（ライトベージュ）', colorCode: '#E8E0D8', modelNumber: '13110' },
      { id: 'v2', color: '13120（ベージュ）', colorCode: '#C8C0B0', modelNumber: '13120' },
      { id: 'v3', color: '13140（グレー）', colorCode: '#787068', modelNumber: '13140' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 31000 },
      { plan: 'HOURS', planId: 'HOURS', price: 31000 },
      { plan: 'LIFE', planId: 'LIFE', price: 31000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 31000 }
    ]
  },

  // タイル目地色
  {
    id: 'int-tile-grout',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '目地',
    name: 'タイル目地色',
    manufacturer: '各メーカー',
    modelNumber: 'SS-11K',
    unit: '式',
    isOption: false,
    description: 'タイル施工時の目地色選択',
    variants: [
      { id: 'v1', color: '①ホワイト', colorCode: '#FFFFFF', modelNumber: 'SS-11K' },
      { id: 'v2', color: '②ライトグレー', colorCode: '#C8C8C8', modelNumber: 'SS-32K' },
      { id: 'v3', color: '③グレー', colorCode: '#909090', modelNumber: 'SS-22K' },
      { id: 'v4', color: '④ダークグレー', colorCode: '#505050', modelNumber: 'SS-23K' },
      { id: 'v5', color: '⑤ベージュ', colorCode: '#D8D0C0', modelNumber: 'SS-33K' },
      { id: 'v6', color: '⑥目地無し', colorCode: '#F0F0F0', modelNumber: 'NO-GROUT' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // レシピ 平田タイル
  {
    id: 'int-tile-recipe',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: '平田タイル',
    name: 'レシピ',
    manufacturer: '平田タイル',
    modelNumber: 'RCP-B',
    unit: '㎡',
    isOption: true,
    description: '50×200×8mm。※役物なし。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'RCP-B（ベージュ）', colorCode: '#E8E0D0', modelNumber: 'RCP-B' },
      { id: 'v2', color: 'RCP-N（ナチュラル）', colorCode: '#F5F0E8', modelNumber: 'RCP-N' },
      { id: 'v3', color: 'RCP-BD（ベージュダーク）', colorCode: '#C0B8A8', modelNumber: 'RCP-BD' },
      { id: 'v4', color: 'RCP-ND（ナチュラルダーク）', colorCode: '#D8D0C0', modelNumber: 'RCP-ND' },
      { id: 'v5', color: 'RCP-BP（ベージュピンク）', colorCode: '#E8D8D0', modelNumber: 'RCP-BP' },
      { id: 'v6', color: 'RCP-NP（ナチュラルピンク）', colorCode: '#F0E0D8', modelNumber: 'RCP-NP' },
      { id: 'v7', color: 'RCP-BW（ベージュホワイト）', colorCode: '#F0E8E0', modelNumber: 'RCP-BW' },
      { id: 'v8', color: 'RCP-NW（ナチュラルホワイト）', colorCode: '#F8F5F0', modelNumber: 'RCP-NW' },
      { id: 'v9', color: 'RCP-BL（ベージュライト）', colorCode: '#E0D8C8', modelNumber: 'RCP-BL' },
      { id: 'v10', color: 'RCP-NL（ナチュラルライト）', colorCode: '#F0E8E0', modelNumber: 'RCP-NL' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 34000 },
      { plan: 'HOURS', planId: 'HOURS', price: 34000 },
      { plan: 'LIFE', planId: 'LIFE', price: 34000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 34000 }
    ]
  },

  // 釉かげ LIXIL
  {
    id: 'int-tile-yukage',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: 'LIXIL',
    name: '釉かげ',
    manufacturer: 'LIXIL',
    modelNumber: 'DTL-40B/YGE-1',
    unit: '㎡',
    isOption: true,
    description: '40×227×6mm。ボーダー・レリーフBタイプ選択可。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'ボーダー YGE-1（ホワイト）', colorCode: '#F5F5F0', modelNumber: 'DTL-40B/YGE-1' },
      { id: 'v2', color: 'レリーフB YGE-1B（ホワイト）', colorCode: '#F5F5F0', modelNumber: 'DTL-40B/YGE-1B' },
      { id: 'v3', color: 'ボーダー YGE-3（ブルー）', colorCode: '#1A3050', modelNumber: 'DTL-40B/YGE-3' },
      { id: 'v4', color: 'レリーフB YGE-3B（ブルー）', colorCode: '#1A3050', modelNumber: 'DTL-40B/YGE-3B' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 22000 },
      { plan: 'HOURS', planId: 'HOURS', price: 22000 },
      { plan: 'LIFE', planId: 'LIFE', price: 22000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 22000 }
    ]
  },

  // シャインリーフ LIXIL
  {
    id: 'int-tile-shineleaf',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: 'LIXIL',
    name: 'シャインリーフ',
    manufacturer: 'LIXIL',
    modelNumber: 'DTL-R/SHL-1',
    unit: '㎡',
    isOption: true,
    description: '309×295×6.3mm/1シート。リーフ柄のモザイクタイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'DTL-R/SHL-1（ホワイト）', colorCode: '#F5F5F0', modelNumber: 'DTL-R/SHL-1' },
      { id: 'v2', color: 'DTL-R/SHL2（グレー）', colorCode: '#C0C0B8', modelNumber: 'DTL-R/SHL2' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 59000 },
      { plan: 'HOURS', planId: 'HOURS', price: 59000 },
      { plan: 'LIFE', planId: 'LIFE', price: 59000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 59000 }
    ]
  },

  // INNOCENT MARBLE-イノセントマーブル LIXIL
  {
    id: 'int-tile-innocentmarble',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: 'LIXIL',
    name: 'INNOCENT MARBLE-イノセントマーブル',
    manufacturer: 'LIXIL',
    modelNumber: 'DTL-1230P1/NIC-1',
    unit: '㎡',
    isOption: true,
    description: '288×294mm/1シート。天然大理石調モザイクタイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'DTL-1230P1/NIC-1（ホワイト）', colorCode: '#F0EDE8', modelNumber: 'DTL-1230P1/NIC-1' },
      { id: 'v2', color: 'DTL-1230P1/NIC-2（ベージュ）', colorCode: '#E0D8D0', modelNumber: 'DTL-1230P1/NIC-2' },
      { id: 'v3', color: 'DTL-1230P1/NIC-3（グレー）', colorCode: '#C8C0B8', modelNumber: 'DTL-1230P1/NIC-3' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 63000 },
      { plan: 'HOURS', planId: 'HOURS', price: 63000 },
      { plan: 'LIFE', planId: 'LIFE', price: 63000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 63000 }
    ]
  },

  // GRAVEL GLASS-グラベルガラス LIXIL
  {
    id: 'int-tile-gravelglass',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: 'LIXIL',
    name: 'GRAVEL GLASS-グラベルガラス',
    manufacturer: 'LIXIL',
    modelNumber: 'DTL-R/GVL-1',
    unit: '㎡',
    isOption: true,
    description: '292×301mm/1シート。ガラス質モザイクタイル。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'DTL-R/GVL-1（ホワイト）', colorCode: '#F0F0E8', modelNumber: 'DTL-R/GVL-1' },
      { id: 'v2', color: 'DTL-R/GVL-2（グレー）', colorCode: '#B0B0A8', modelNumber: 'DTL-R/GVL-2' },
      { id: 'v3', color: 'DTL-R/GVL-3（ブラック）', colorCode: '#303030', modelNumber: 'DTL-R/GVL-3' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 61000 },
      { plan: 'HOURS', planId: 'HOURS', price: 61000 },
      { plan: 'LIFE', planId: 'LIFE', price: 61000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 61000 }
    ]
  },

  // エコカラット グランクォーツ LIXIL
  {
    id: 'int-ecocarat-granquartz',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: 'エコカラット/LIXIL',
    name: 'エコカラット グランクォーツ',
    manufacturer: 'LIXIL',
    modelNumber: 'ECP-630/GRQ1',
    unit: '㎡',
    isOption: true,
    description: '606×303mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'ECP-630/GRQ1（ライトグレー）', colorCode: '#C8C0B8', modelNumber: 'ECP-630/GRQ1' },
      { id: 'v2', color: 'EPC-630/GRQ3（ダークグレー）', colorCode: '#686058', modelNumber: 'EPC-630/GRQ3' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 32000 },
      { plan: 'HOURS', planId: 'HOURS', price: 32000 },
      { plan: 'LIFE', planId: 'LIFE', price: 32000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 32000 }
    ]
  },

  // エコカラット ラフセメント LIXIL
  {
    id: 'int-ecocarat-roughcement',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: 'エコカラット/LIXIL',
    name: 'エコカラット ラフセメント',
    manufacturer: 'LIXIL',
    modelNumber: 'ECP-615/RGC1',
    unit: '㎡',
    isOption: true,
    description: '606×151×7mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'ECP-615/RGC1（グレー）', colorCode: '#A8A098', modelNumber: 'ECP-615/RGC1' },
      { id: 'v2', color: 'ECP-615/RGC2（グレージュ）', colorCode: '#B8B0A0', modelNumber: 'ECP-615/RGC2' },
      { id: 'v3', color: 'ECP-615/RGC3（ダークグレー）', colorCode: '#585048', modelNumber: 'ECP-615/RGC3' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 32000 },
      { plan: 'HOURS', planId: 'HOURS', price: 32000 },
      { plan: 'LIFE', planId: 'LIFE', price: 32000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 32000 }
    ]
  },

  // エコカラット ヴァルスロック LIXIL
  {
    id: 'int-ecocarat-valsrock',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: 'エコカラット/LIXIL',
    name: 'エコカラット ヴァルスロック',
    manufacturer: 'LIXIL',
    modelNumber: 'ECP-315/VSR1N',
    unit: '㎡',
    isOption: true,
    description: '303×151mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'ECP-315/VSR1N（ホワイト）', colorCode: '#F0EDE8', modelNumber: 'ECP-315/VSR1N' },
      { id: 'v2', color: 'ECP-315/VSR2N（グレー）', colorCode: '#A8A098', modelNumber: 'ECP-315/VSR2N' },
      { id: 'v3', color: 'ECP-315/VSR3N（アッシュブラウン）', colorCode: '#787068', modelNumber: 'ECP-315/VSR3N' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 32000 },
      { plan: 'HOURS', planId: 'HOURS', price: 32000 },
      { plan: 'LIFE', planId: 'LIFE', price: 32000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 32000 }
    ]
  },

  // エコカラット ストーングレース LIXIL
  {
    id: 'int-ecocarat-stonegrace',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: 'エコカラット/LIXIL',
    name: 'エコカラット ストーングレース',
    manufacturer: 'LIXIL',
    modelNumber: 'ECP-630/STG1N',
    unit: '㎡',
    isOption: true,
    description: '606×303mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'ECP-630/STG1N（グレー）', colorCode: '#B0A8A0', modelNumber: 'ECP-630/STG1N' },
      { id: 'v2', color: 'ECP-630/STG2N（ベージュ）', colorCode: '#D0C8B8', modelNumber: 'ECP-630/STG2N' },
      { id: 'v3', color: 'ECP-630/STG3N（ダークグレー）', colorCode: '#686060', modelNumber: 'ECP-630/STG3N' },
      { id: 'v4', color: 'ECP-630/STG4N（チャコール）', colorCode: '#484040', modelNumber: 'ECP-630/STG4N' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 32000 },
      { plan: 'HOURS', planId: 'HOURS', price: 32000 },
      { plan: 'LIFE', planId: 'LIFE', price: 32000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 32000 }
    ]
  },

  // エコカラット ラフクォーツ LIXIL
  {
    id: 'int-ecocarat-roughquartz',
    categoryId: 'interior-tile',
    categoryName: 'アクセントタイル',
    subcategory: 'エコカラット/LIXIL',
    name: 'エコカラット ラフクォーツ',
    manufacturer: 'LIXIL',
    modelNumber: 'ECP-375/RTZ1N',
    unit: '㎡',
    isOption: true,
    description: '303×75mm。調湿・脱臭機能付きタイル。目地無し仕様。工事費用一式¥30,000別途、6㎡以下は¥50,000追加',
    variants: [
      { id: 'v1', color: 'ECP-375/RTZ1N（ライトグレー）', colorCode: '#D0C8C0', modelNumber: 'ECP-375/RTZ1N' },
      { id: 'v2', color: 'ECP-375/RTZ2N（ベージュ）', colorCode: '#D8D0C0', modelNumber: 'ECP-375/RTZ2N' },
      { id: 'v3', color: 'ECP-375/RTZ3N（ダークグレー）', colorCode: '#787068', modelNumber: 'ECP-375/RTZ3N' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 32000 },
      { plan: 'HOURS', planId: 'HOURS', price: 32000 },
      { plan: 'LIFE', planId: 'LIFE', price: 32000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 32000 }
    ]
  },

  // インテリアカウンター1 Panasonic（ちょい置きスペース）
  {
    id: 'int-counter-small',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'ちょい置き',
    name: 'インテリアカウンター1（ちょい置きスペース）',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-1',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。トイレなど、ちょい置きスペースに。受け桟のみ（両側壁の場合のみ）',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色', colorCode: '#8B6914', modelNumber: 'UV' },
      { id: 'v2', color: 'ウォールナット色', colorCode: '#5C4033', modelNumber: 'TY' },
      { id: 'v3', color: 'チェリー色', colorCode: '#8B4513', modelNumber: 'CY' },
      { id: 'v4', color: 'グレージュアッシュ色', colorCode: '#A89080', modelNumber: 'RV' },
      { id: 'v5', color: 'イデアオーク色', colorCode: '#C8A870', modelNumber: 'EV' },
      { id: 'v6', color: 'メープル色', colorCode: '#D4A86A', modelNumber: 'JY' },
      { id: 'v7', color: 'ホワイトオーク色', colorCode: '#E8D8C0', modelNumber: 'WY' },
      { id: 'v8', color: 'ホワイトアッシュ色', colorCode: '#F0E8E0', modelNumber: 'GY' },
      { id: 'v9', color: 'しっくいホワイト色', colorCode: '#F5F0E8', modelNumber: 'PY' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 20000 },
      { plan: 'HOURS', planId: 'HOURS', price: 20000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 20000 }
    ]
  },

  // インテリアカウンター2 奥行100～200mm W～1000mm
  {
    id: 'int-counter-shelf-small-w1000',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: '飾り棚（奥行100～200mm）',
    name: 'インテリアカウンター2 奥行100～200mm W～1000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2A-W1000',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。アーチアングル3個使用。奥行150～300mmに対応。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W～1000mm アングル3個', colorCode: '#C0C0C0', modelNumber: 'W1000-3' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 41000 },
      { plan: 'HOURS', planId: 'HOURS', price: 41000 },
      { plan: 'LIFE', planId: 'LIFE', price: 41000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 41000 }
    ]
  },

  // インテリアカウンター2 奥行100～200mm W1001～1800mm
  {
    id: 'int-counter-shelf-small-w1800',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: '飾り棚（奥行100～200mm）',
    name: 'インテリアカウンター2 奥行100～200mm W1001～1800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2A-W1800',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。アーチアングル4個使用。奥行150～300mmに対応。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W1001～1800mm アングル4個', colorCode: '#C0C0C0', modelNumber: 'W1800-4' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 58000 },
      { plan: 'HOURS', planId: 'HOURS', price: 58000 },
      { plan: 'LIFE', planId: 'LIFE', price: 58000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 58000 }
    ]
  },

  // インテリアカウンター2 奥行100～200mm W1801～2800mm
  {
    id: 'int-counter-shelf-small-w2800',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: '飾り棚（奥行100～200mm）',
    name: 'インテリアカウンター2 奥行100～200mm W1801～2800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2A-W2800',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。アーチアングル6個使用。奥行150～300mmに対応。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W1801～2800mm アングル6個', colorCode: '#C0C0C0', modelNumber: 'W2800-6' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 74000 },
      { plan: 'HOURS', planId: 'HOURS', price: 74000 },
      { plan: 'LIFE', planId: 'LIFE', price: 74000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 74000 }
    ]
  },

  // インテリアカウンター2 奥行100～200mm W2801～4000mm
  {
    id: 'int-counter-shelf-small-w4000',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: '飾り棚（奥行100～200mm）',
    name: 'インテリアカウンター2 奥行100～200mm W2801～4000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2A-W4000',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。アーチアングル9個使用。奥行150～300mmに対応。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W2801～4000mm アングル9個', colorCode: '#C0C0C0', modelNumber: 'W4000-9' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 94000 },
      { plan: 'HOURS', planId: 'HOURS', price: 94000 },
      { plan: 'LIFE', planId: 'LIFE', price: 94000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 94000 }
    ]
  },

  // インテリアカウンター2 奥行201～450mm W～1000mm
  {
    id: 'int-counter-study-w1000',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'スタディスペース（奥行201～450mm）',
    name: 'インテリアカウンター2 奥行201～450mm W～1000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2B-W1000',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。ブラケット3個使用。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W～1000mm ブラケット3個', colorCode: '#C0C0C0', modelNumber: 'W1000-3' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 41000 },
      { plan: 'HOURS', planId: 'HOURS', price: 41000 },
      { plan: 'LIFE', planId: 'LIFE', price: 41000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 41000 }
    ]
  },

  // インテリアカウンター2 奥行201～450mm W1001～1800mm
  {
    id: 'int-counter-study-w1800',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'スタディスペース（奥行201～450mm）',
    name: 'インテリアカウンター2 奥行201～450mm W1001～1800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2B-W1800',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。ブラケット4個使用。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W1001～1800mm ブラケット4個', colorCode: '#C0C0C0', modelNumber: 'W1800-4' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 64000 },
      { plan: 'HOURS', planId: 'HOURS', price: 64000 },
      { plan: 'LIFE', planId: 'LIFE', price: 64000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 64000 }
    ]
  },

  // インテリアカウンター2 奥行201～450mm W1801～2800mm
  {
    id: 'int-counter-study-w2800',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'スタディスペース（奥行201～450mm）',
    name: 'インテリアカウンター2 奥行201～450mm W1801～2800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2B-W2800',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。ブラケット6個使用。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W1801～2800mm ブラケット6個', colorCode: '#C0C0C0', modelNumber: 'W2800-6' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 81000 },
      { plan: 'HOURS', planId: 'HOURS', price: 81000 },
      { plan: 'LIFE', planId: 'LIFE', price: 81000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 81000 }
    ]
  },

  // インテリアカウンター2 奥行201～450mm W2801～4000mm
  {
    id: 'int-counter-study-w4000',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'スタディスペース（奥行201～450mm）',
    name: 'インテリアカウンター2 奥行201～450mm W2801～4000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2B-W4000',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。ブラケット9個使用。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W2801～4000mm ブラケット9個', colorCode: '#C0C0C0', modelNumber: 'W4000-9' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 115000 },
      { plan: 'HOURS', planId: 'HOURS', price: 115000 },
      { plan: 'LIFE', planId: 'LIFE', price: 115000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 115000 }
    ]
  },

  // インテリアカウンター2 奥行451～600mm W～1000mm
  {
    id: 'int-counter-work-w1000',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'ワークスペース（奥行451～600mm）',
    name: 'インテリアカウンター2 奥行451～600mm W～1000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2C-W1000',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。ブラケット3個使用。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W～1000mm ブラケット3個', colorCode: '#C0C0C0', modelNumber: 'W1000-3' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 61000 },
      { plan: 'HOURS', planId: 'HOURS', price: 61000 },
      { plan: 'LIFE', planId: 'LIFE', price: 61000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 61000 }
    ]
  },

  // インテリアカウンター2 奥行451～600mm W1001～1800mm
  {
    id: 'int-counter-work-w1800',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'ワークスペース（奥行451～600mm）',
    name: 'インテリアカウンター2 奥行451～600mm W1001～1800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2C-W1800',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。ブラケット4個使用。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W1001～1800mm ブラケット4個', colorCode: '#C0C0C0', modelNumber: 'W1800-4' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 103000 },
      { plan: 'HOURS', planId: 'HOURS', price: 103000 },
      { plan: 'LIFE', planId: 'LIFE', price: 103000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 103000 }
    ]
  },

  // インテリアカウンター2 奥行451～600mm W1801～2800mm
  {
    id: 'int-counter-work-w2800',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'ワークスペース（奥行451～600mm）',
    name: 'インテリアカウンター2 奥行451～600mm W1801～2800mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2C-W2800',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。ブラケット6個使用。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W1801～2800mm ブラケット6個', colorCode: '#C0C0C0', modelNumber: 'W2800-6' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 141000 },
      { plan: 'HOURS', planId: 'HOURS', price: 141000 },
      { plan: 'LIFE', planId: 'LIFE', price: 141000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 141000 }
    ]
  },

  // インテリアカウンター2 奥行451～600mm W2801～4000mm
  {
    id: 'int-counter-work-w4000',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'ワークスペース（奥行451～600mm）',
    name: 'インテリアカウンター2 奥行451～600mm W2801～4000mm',
    manufacturer: 'Panasonic',
    modelNumber: 'INT-COUNTER-2C-W4000',
    unit: 'カ所',
    isOption: true,
    description: '耐水集成タイプ・厚み24mm。ブラケット9個使用。角はR加工なし',
    variants: [
      { id: 'v1', color: 'W2801～4000mm ブラケット9個', colorCode: '#C0C0C0', modelNumber: 'W4000-9' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 192000 },
      { plan: 'HOURS', planId: 'HOURS', price: 192000 },
      { plan: 'LIFE', planId: 'LIFE', price: 192000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 192000 }
    ]
  },

  // カウンター面材カラー
  {
    id: 'int-counter-facecolor',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: '面材カラー',
    name: 'カウンター面材カラー',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-FACE',
    unit: '式',
    isOption: false,
    description: 'インテリアカウンター用面材カラー選択',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット色', colorCode: '#8B6914', modelNumber: 'UV' },
      { id: 'v2', color: 'ウォールナット色', colorCode: '#5C4033', modelNumber: 'TY' },
      { id: 'v3', color: 'チェリー色', colorCode: '#8B4513', modelNumber: 'CY' },
      { id: 'v4', color: 'グレージュアッシュ色', colorCode: '#A89080', modelNumber: 'RV' },
      { id: 'v5', color: 'イデアオーク色', colorCode: '#C8A870', modelNumber: 'EV' },
      { id: 'v6', color: 'メープル色', colorCode: '#D4A86A', modelNumber: 'JY' },
      { id: 'v7', color: 'ホワイトオーク色', colorCode: '#E8D8C0', modelNumber: 'WY' },
      { id: 'v8', color: 'ホワイトアッシュ色', colorCode: '#F0E8E0', modelNumber: 'GY' },
      { id: 'v9', color: 'しっくいホワイト色', colorCode: '#F5F0E8', modelNumber: 'PY' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // カウンターブラケットカラー
  {
    id: 'int-counter-bracket',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'ブラケット',
    name: 'カウンターブラケットカラー',
    manufacturer: 'Panasonic',
    modelNumber: 'COUNTER-BRACKET',
    unit: '式',
    isOption: false,
    description: 'インテリアカウンター用ブラケットカラー選択',
    variants: [
      { id: 'v1', color: 'サテンシルバー', colorCode: '#C0C0C0', modelNumber: 'SATIN-SILVER' },
      { id: 'v2', color: 'オフブラック', colorCode: '#303030', modelNumber: 'OFF-BLACK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 配線用キャップ穴加工
  {
    id: 'int-counter-cablehole',
    categoryId: 'interior-counter',
    categoryName: 'インテリアカウンター',
    subcategory: 'オプション',
    name: '配線用キャップ穴加工',
    manufacturer: 'Panasonic',
    modelNumber: 'CABLE-HOLE',
    unit: 'カ所',
    isOption: true,
    description: 'カウンターへの配線用穴加工。φ60mmキャップ付き',
    variants: [
      { id: 'v1', color: 'ブラウン', colorCode: '#8B4513', modelNumber: 'BROWN' },
      { id: 'v2', color: 'ブラック', colorCode: '#303030', modelNumber: 'BLACK' },
      { id: 'v3', color: 'グレー', colorCode: '#808080', modelNumber: 'GRAY' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 5000 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 収納棚A 枕棚+PH（各居室2カ所目から）W～910mm
  {
    id: 'int-shelf-makuradana-ph-w910',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '枕棚+PH',
    name: '枕棚+PH W～910mm（各居室2カ所目から）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-A-W910',
    unit: 'カ所',
    isOption: true,
    description: '枕棚+パイプハンガー。FL+1800。枕棚ホワイト、パイプシルバー。W～910mm（壁芯々）。※WIC、納戸は含みません。各寝室1カ所は標準',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W910' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 20000 },
      { plan: 'HOURS', planId: 'HOURS', price: 20000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 20000 }
    ]
  },

  // 収納棚A 枕棚+PH（各居室2カ所目から）W910～1820mm
  {
    id: 'int-shelf-makuradana-ph-w1820',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '枕棚+PH',
    name: '枕棚+PH W910～1820mm（各居室2カ所目から）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-A-W1820',
    unit: 'カ所',
    isOption: true,
    description: '枕棚+パイプハンガー。FL+1800。枕棚ホワイト、パイプシルバー。W910～1820mm（壁芯々）。※WIC、納戸は含みません。各寝室1カ所は標準',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W1820' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 31000 },
      { plan: 'HOURS', planId: 'HOURS', price: 31000 },
      { plan: 'LIFE', planId: 'LIFE', price: 31000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 31000 }
    ]
  },

  // 収納棚A 枕棚+PH（各居室2カ所目から）W1820～2730mm
  {
    id: 'int-shelf-makuradana-ph-w2730',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '枕棚+PH',
    name: '枕棚+PH W1820～2730mm（各居室2カ所目から）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-A-W2730',
    unit: 'カ所',
    isOption: true,
    description: '枕棚+パイプハンガー。FL+1800。枕棚ホワイト、パイプシルバー。W1820～2730mm（壁芯々）。※WIC、納戸は含みません。各寝室1カ所は標準',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W2730' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 47000 },
      { plan: 'HOURS', planId: 'HOURS', price: 47000 },
      { plan: 'LIFE', planId: 'LIFE', price: 47000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 47000 }
    ]
  },

  // 収納棚B1 枕棚のみ（D450）W～910mm
  {
    id: 'int-shelf-makuradana-only-w910',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '枕棚のみ',
    name: '枕棚のみ W～910mm（D450）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-B1-W910',
    unit: 'カ所',
    isOption: true,
    description: '枕棚のみ D450mm。FL+1800。ホワイトのみ。W～910mm（壁芯々）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W910' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 18000 },
      { plan: 'HOURS', planId: 'HOURS', price: 18000 },
      { plan: 'LIFE', planId: 'LIFE', price: 18000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 18000 }
    ]
  },

  // 収納棚B1 枕棚のみ（D450）W910～1820mm
  {
    id: 'int-shelf-makuradana-only-w1820',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '枕棚のみ',
    name: '枕棚のみ W910～1820mm（D450）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-B1-W1820',
    unit: 'カ所',
    isOption: true,
    description: '枕棚のみ D450mm。FL+1800。ホワイトのみ。W910～1820mm（壁芯々）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W1820' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 29000 },
      { plan: 'HOURS', planId: 'HOURS', price: 29000 },
      { plan: 'LIFE', planId: 'LIFE', price: 29000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 29000 }
    ]
  },

  // 収納棚B1 枕棚のみ（D450）W1820～2730mm
  {
    id: 'int-shelf-makuradana-only-w2730',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '枕棚のみ',
    name: '枕棚のみ W1820～2730mm（D450）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-B1-W2730',
    unit: 'カ所',
    isOption: true,
    description: '枕棚のみ D450mm。FL+1800。ホワイトのみ。W1820～2730mm（壁芯々）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W2730' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 42000 },
      { plan: 'HOURS', planId: 'HOURS', price: 42000 },
      { plan: 'LIFE', planId: 'LIFE', price: 42000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 42000 }
    ]
  },

  // 収納棚B2 枕棚+中段（D840）W～910mm
  {
    id: 'int-shelf-makuradana-chudan-w910',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '枕棚+中段',
    name: '枕棚+中段 W～910mm（D840）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-B2-W910',
    unit: 'カ所',
    isOption: true,
    description: '枕棚+中段 D840mm。FL+800。ホワイトのみ。W～910mm（壁芯々）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W910' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 27000 },
      { plan: 'HOURS', planId: 'HOURS', price: 27000 },
      { plan: 'LIFE', planId: 'LIFE', price: 27000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 27000 }
    ]
  },

  // 収納棚B2 枕棚+中段（D840）W910～1820mm
  {
    id: 'int-shelf-makuradana-chudan-w1820',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '枕棚+中段',
    name: '枕棚+中段 W910～1820mm（D840）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-B2-W1820',
    unit: 'カ所',
    isOption: true,
    description: '枕棚+中段 D840mm。FL+800。ホワイトのみ。W910～1820mm（壁芯々）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W1820' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 41000 },
      { plan: 'HOURS', planId: 'HOURS', price: 41000 },
      { plan: 'LIFE', planId: 'LIFE', price: 41000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 41000 }
    ]
  },

  // 収納棚B2 枕棚+中段（D840）W1820～2730mm
  {
    id: 'int-shelf-makuradana-chudan-w2730',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '枕棚+中段',
    name: '枕棚+中段 W1820～2730mm（D840）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-B2-W2730',
    unit: 'カ所',
    isOption: true,
    description: '枕棚+中段 D840mm。FL+800。ホワイトのみ。W1820～2730mm（壁芯々）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W2730' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 61000 },
      { plan: 'HOURS', planId: 'HOURS', price: 61000 },
      { plan: 'LIFE', planId: 'LIFE', price: 61000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 61000 }
    ]
  },

  // 収納棚B3 中段のみ（D840）W～910mm
  {
    id: 'int-shelf-chudan-only-w910',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '中段のみ',
    name: '中段のみ W～910mm（D840）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-B3-W910',
    unit: 'カ所',
    isOption: true,
    description: '中段のみ D840mm。ホワイトのみ。W～910mm（壁芯々）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W910' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 21000 },
      { plan: 'HOURS', planId: 'HOURS', price: 21000 },
      { plan: 'LIFE', planId: 'LIFE', price: 21000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 21000 }
    ]
  },

  // 収納棚B3 中段のみ（D840）W910～1820mm
  {
    id: 'int-shelf-chudan-only-w1820',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '中段のみ',
    name: '中段のみ W910～1820mm（D840）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-B3-W1820',
    unit: 'カ所',
    isOption: true,
    description: '中段のみ D840mm。ホワイトのみ。W910～1820mm（壁芯々）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W1820' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 33000 },
      { plan: 'HOURS', planId: 'HOURS', price: 33000 },
      { plan: 'LIFE', planId: 'LIFE', price: 33000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 33000 }
    ]
  },

  // 収納棚B3 中段のみ（D840）W1820～2730mm
  {
    id: 'int-shelf-chudan-only-w2730',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '中段のみ',
    name: '中段のみ W1820～2730mm（D840）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-B3-W2730',
    unit: 'カ所',
    isOption: true,
    description: '中段のみ D840mm。ホワイトのみ。W1820～2730mm（壁芯々）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W2730' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 52000 },
      { plan: 'HOURS', planId: 'HOURS', price: 52000 },
      { plan: 'LIFE', planId: 'LIFE', price: 52000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 52000 }
    ]
  },

  // 可動棚C（両壁収まり）D300×2枚
  {
    id: 'int-shelf-movable-c300-2',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（両壁）',
    name: '可動棚C D300×2枚（両壁収まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'C300-2',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'C300-2-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'C300-2-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 25000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 25000 }
    ]
  },

  // 可動棚C（両壁収まり）D300×4枚
  {
    id: 'int-shelf-movable-c300-4',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（両壁）',
    name: '可動棚C D300×4枚（両壁収まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'C300-4',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'C300-4-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'C300-4-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 32000 },
      { plan: 'HOURS', planId: 'HOURS', price: 32000 },
      { plan: 'LIFE', planId: 'LIFE', price: 32000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 32000 }
    ]
  },

  // 可動棚C（両壁収まり）D300×6枚
  {
    id: 'int-shelf-movable-c300-6',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（両壁）',
    name: '可動棚C D300×6枚（両壁収まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'C300-6',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'C300-6-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'C300-6-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 37000 },
      { plan: 'HOURS', planId: 'HOURS', price: 37000 },
      { plan: 'LIFE', planId: 'LIFE', price: 37000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 37000 }
    ]
  },

  // 可動棚C（両壁収まり）D450×2枚
  {
    id: 'int-shelf-movable-c450-2',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（両壁）',
    name: '可動棚C D450×2枚（両壁収まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'C450-2',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'C450-2-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'C450-2-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 27000 },
      { plan: 'HOURS', planId: 'HOURS', price: 27000 },
      { plan: 'LIFE', planId: 'LIFE', price: 27000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 27000 }
    ]
  },

  // 可動棚C（両壁収まり）D450×4枚
  {
    id: 'int-shelf-movable-c450-4',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（両壁）',
    name: '可動棚C D450×4枚（両壁収まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'C450-4',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'C450-4-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'C450-4-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 37000 },
      { plan: 'HOURS', planId: 'HOURS', price: 37000 },
      { plan: 'LIFE', planId: 'LIFE', price: 37000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 37000 }
    ]
  },

  // 可動棚C（両壁収まり）D450×6枚
  {
    id: 'int-shelf-movable-c450-6',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（両壁）',
    name: '可動棚C D450×6枚（両壁収まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'C450-6',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'C450-6-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'C450-6-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 43000 },
      { plan: 'HOURS', planId: 'HOURS', price: 43000 },
      { plan: 'LIFE', planId: 'LIFE', price: 43000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 43000 }
    ]
  },

  // 可動棚D（壁無し納まり）D300×2枚 W～900mm
  {
    id: 'int-shelf-movable-d300-2-w900',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D300×2枚 W～900mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D300-2-W900',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D300-2-W900-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D300-2-W900-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 33000 },
      { plan: 'HOURS', planId: 'HOURS', price: 33000 },
      { plan: 'LIFE', planId: 'LIFE', price: 33000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 33000 }
    ]
  },

  // 可動棚D（壁無し納まり）D300×2枚 W900～1800mm
  {
    id: 'int-shelf-movable-d300-2-w1800',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D300×2枚 W900～1800mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D300-2-W1800',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D300-2-W1800-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D300-2-W1800-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 40000 },
      { plan: 'HOURS', planId: 'HOURS', price: 40000 },
      { plan: 'LIFE', planId: 'LIFE', price: 40000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 40000 }
    ]
  },

  // 可動棚D（壁無し納まり）D300×4枚 W～900mm
  {
    id: 'int-shelf-movable-d300-4-w900',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D300×4枚 W～900mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D300-4-W900',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D300-4-W900-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D300-4-W900-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 52000 },
      { plan: 'HOURS', planId: 'HOURS', price: 52000 },
      { plan: 'LIFE', planId: 'LIFE', price: 52000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 52000 }
    ]
  },

  // 可動棚D（壁無し納まり）D300×4枚 W900～1800mm
  {
    id: 'int-shelf-movable-d300-4-w1800',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D300×4枚 W900～1800mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D300-4-W1800',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D300-4-W1800-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D300-4-W1800-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 58000 },
      { plan: 'HOURS', planId: 'HOURS', price: 58000 },
      { plan: 'LIFE', planId: 'LIFE', price: 58000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 58000 }
    ]
  },

  // 可動棚D（壁無し納まり）D300×6枚 W～900mm
  {
    id: 'int-shelf-movable-d300-6-w900',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D300×6枚 W～900mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D300-6-W900',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D300-6-W900-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D300-6-W900-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 84000 },
      { plan: 'HOURS', planId: 'HOURS', price: 84000 },
      { plan: 'LIFE', planId: 'LIFE', price: 84000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 84000 }
    ]
  },

  // 可動棚D（壁無し納まり）D300×6枚 W900～1800mm
  {
    id: 'int-shelf-movable-d300-6-w1800',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D300×6枚 W900～1800mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D300-6-W1800',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D300-6-W1800-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D300-6-W1800-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 94000 },
      { plan: 'HOURS', planId: 'HOURS', price: 94000 },
      { plan: 'LIFE', planId: 'LIFE', price: 94000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 94000 }
    ]
  },

  // 可動棚D（壁無し納まり）D450×2枚 W～900mm
  {
    id: 'int-shelf-movable-d450-2-w900',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D450×2枚 W～900mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D450-2-W900',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D450-2-W900-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D450-2-W900-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 36000 },
      { plan: 'HOURS', planId: 'HOURS', price: 36000 },
      { plan: 'LIFE', planId: 'LIFE', price: 36000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 36000 }
    ]
  },

  // 可動棚D（壁無し納まり）D450×2枚 W900～1800mm
  {
    id: 'int-shelf-movable-d450-2-w1800',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D450×2枚 W900～1800mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D450-2-W1800',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D450-2-W1800-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D450-2-W1800-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 47000 },
      { plan: 'HOURS', planId: 'HOURS', price: 47000 },
      { plan: 'LIFE', planId: 'LIFE', price: 47000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 47000 }
    ]
  },

  // 可動棚D（壁無し納まり）D450×4枚 W～900mm
  {
    id: 'int-shelf-movable-d450-4-w900',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D450×4枚 W～900mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D450-4-W900',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D450-4-W900-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D450-4-W900-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 63000 },
      { plan: 'HOURS', planId: 'HOURS', price: 63000 },
      { plan: 'LIFE', planId: 'LIFE', price: 63000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 63000 }
    ]
  },

  // 可動棚D（壁無し納まり）D450×4枚 W900～1800mm
  {
    id: 'int-shelf-movable-d450-4-w1800',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D450×4枚 W900～1800mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D450-4-W1800',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D450-4-W1800-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D450-4-W1800-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 70000 },
      { plan: 'HOURS', planId: 'HOURS', price: 70000 },
      { plan: 'LIFE', planId: 'LIFE', price: 70000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 70000 }
    ]
  },

  // 可動棚D（壁無し納まり）D450×6枚 W～900mm
  {
    id: 'int-shelf-movable-d450-6-w900',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D450×6枚 W～900mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D450-6-W900',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W～900mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D450-6-W900-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D450-6-W900-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 103000 },
      { plan: 'HOURS', planId: 'HOURS', price: 103000 },
      { plan: 'LIFE', planId: 'LIFE', price: 103000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 103000 }
    ]
  },

  // 可動棚D（壁無し納まり）D450×6枚 W900～1800mm
  {
    id: 'int-shelf-movable-d450-6-w1800',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '可動棚（壁無し）',
    name: '可動棚D D450×6枚 W900～1800mm（壁無し納まり）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'D450-6-W1800',
    unit: 'カ所',
    isOption: true,
    description: '棚柱最長1800mm。W900～1800mm（有効）。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'D450-6-W1800-W' },
      { id: 'v2', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'D450-6-W1800-DG' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 117000 },
      { plan: 'HOURS', planId: 'HOURS', price: 117000 },
      { plan: 'LIFE', planId: 'LIFE', price: 117000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 117000 }
    ]
  },

  // ハンガーパイプ2本 棚柱付（可動）
  {
    id: 'int-shelf-hanger-pipe-2',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: 'ハンガーパイプ',
    name: 'ハンガーパイプ2本 棚柱付（可動）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'HANGER-2P',
    unit: 'カ所',
    isOption: true,
    description: 'W～1000mmまで。棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'W～1000mm', colorCode: '#C0C0C0', modelNumber: 'HP-2-W1000' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 37000 },
      { plan: 'HOURS', planId: 'HOURS', price: 37000 },
      { plan: 'LIFE', planId: 'LIFE', price: 37000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 37000 }
    ]
  },

  // ハンガーパイプ1セット追加（可動）
  {
    id: 'int-shelf-hanger-pipe-add',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: 'ハンガーパイプ',
    name: 'ハンガーパイプ1セット追加（可動）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'HANGER-ADD',
    unit: 'カ所',
    isOption: true,
    description: 'W～1000mmまで。棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'W～1000mm', colorCode: '#C0C0C0', modelNumber: 'HP-ADD-W1000' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 10000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // ランドリー可動棚（W600）
  {
    id: 'int-shelf-laundry',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: 'ランドリー',
    name: 'ランドリー可動棚（W600）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'LAUNDRY-SHELF',
    unit: 'カ所',
    isOption: true,
    description: 'D300棚板×1枚、D300パイプ付棚板×1枚。棚柱FL+2100。棚柱ブラケット：ホワイト、パイプ：シルバー。棚板ホワイトのみ',
    variants: [
      { id: 'v1', color: 'W600', colorCode: '#FFFFFF', modelNumber: 'LAUNDRY-W600' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // S1 樹脂製 可動棚
  {
    id: 'int-shelf-resin-s1',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '樹脂製可動棚',
    name: 'S1 樹脂製 可動棚',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-S1',
    unit: 'カ所',
    isOption: true,
    description: '棚板D300×8枚。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー。W756mm',
    variants: [
      { id: 'v1', color: 'S1-①（シングル）', colorCode: '#FFFFFF', modelNumber: 'S1-1' },
      { id: 'v2', color: 'S1-②（ダブル）', colorCode: '#FFFFFF', modelNumber: 'S1-2' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 71000 },
      { plan: 'HOURS', planId: 'HOURS', price: 71000 },
      { plan: 'LIFE', planId: 'LIFE', price: 71000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 71000 }
    ]
  },

  // S2 樹脂製 可動棚
  {
    id: 'int-shelf-resin-s2',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '樹脂製可動棚',
    name: 'S2 樹脂製 可動棚',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-S2',
    unit: 'カ所',
    isOption: true,
    description: '棚板D300×8枚。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー。W1132mm',
    variants: [
      { id: 'v1', color: 'S2-①（シングル）', colorCode: '#FFFFFF', modelNumber: 'S2-1' },
      { id: 'v2', color: 'S2-②（ダブル）', colorCode: '#FFFFFF', modelNumber: 'S2-2' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 120000 },
      { plan: 'HOURS', planId: 'HOURS', price: 120000 },
      { plan: 'LIFE', planId: 'LIFE', price: 120000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 120000 }
    ]
  },

  // S3 樹脂製 可動棚
  {
    id: 'int-shelf-resin-s3',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: '樹脂製可動棚',
    name: 'S3 樹脂製 可動棚',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SHELF-S3',
    unit: 'カ所',
    isOption: true,
    description: '棚板D300×8枚。棚板ホワイトorダークグレー、棚柱ブラケット・パイプ：シルバー。W1682mm',
    variants: [
      { id: 'v1', color: 'S3', colorCode: '#FFFFFF', modelNumber: 'S3' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 141000 },
      { plan: 'HOURS', planId: 'HOURS', price: 141000 },
      { plan: 'LIFE', planId: 'LIFE', price: 141000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 141000 }
    ]
  },

  // P1 ハンガーパイプ セット①
  {
    id: 'int-hanger-pipe-set-p1',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: 'ハンガーパイプセット',
    name: 'P1 ハンガーパイプ セット①',
    manufacturer: 'Gハウス施工',
    modelNumber: 'HANGER-P1',
    unit: 'カ所',
    isOption: true,
    description: 'ハンガーパイプセット。W～2900mm、H～1200mm。棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'P1', colorCode: '#C0C0C0', modelNumber: 'P1' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 37000 },
      { plan: 'HOURS', planId: 'HOURS', price: 37000 },
      { plan: 'LIFE', planId: 'LIFE', price: 37000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 37000 }
    ]
  },

  // P2 ハンガーパイプ セット②
  {
    id: 'int-hanger-pipe-set-p2',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: 'ハンガーパイプセット',
    name: 'P2 ハンガーパイプ セット②',
    manufacturer: 'Gハウス施工',
    modelNumber: 'HANGER-P2',
    unit: 'カ所',
    isOption: true,
    description: 'ハンガーパイプセット。W～1450mm×2段、H～2000mm。棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'P2', colorCode: '#C0C0C0', modelNumber: 'P2' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 50000 },
      { plan: 'HOURS', planId: 'HOURS', price: 50000 },
      { plan: 'LIFE', planId: 'LIFE', price: 50000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 50000 }
    ]
  },

  // P3 ハンガーパイプ セット③
  {
    id: 'int-hanger-pipe-set-p3',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: 'ハンガーパイプセット',
    name: 'P3 ハンガーパイプ セット③',
    manufacturer: 'Gハウス施工',
    modelNumber: 'HANGER-P3',
    unit: 'カ所',
    isOption: true,
    description: 'ハンガーパイプセット。W～2900mm+1450mm×2段、H～2000mm。棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'P3', colorCode: '#C0C0C0', modelNumber: 'P3' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 80000 },
      { plan: 'HOURS', planId: 'HOURS', price: 80000 },
      { plan: 'LIFE', planId: 'LIFE', price: 80000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 80000 }
    ]
  },

  // P4 ハンガーパイプ セット④
  {
    id: 'int-hanger-pipe-set-p4',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: 'ハンガーパイプセット',
    name: 'P4 ハンガーパイプ セット④',
    manufacturer: 'Gハウス施工',
    modelNumber: 'HANGER-P4',
    unit: 'カ所',
    isOption: true,
    description: 'ハンガーパイプセット。W～2900mm+900mm×2段×2、H～2000mm。棚柱ブラケット・パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'P4', colorCode: '#C0C0C0', modelNumber: 'P4' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 110000 },
      { plan: 'HOURS', planId: 'HOURS', price: 110000 },
      { plan: 'LIFE', planId: 'LIFE', price: 110000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 110000 }
    ]
  },

  // PKO ハンガーパイプ（固定）
  {
    id: 'int-hanger-pipe-fixed',
    categoryId: 'interior-shelf',
    categoryName: '収納棚',
    subcategory: 'ハンガーパイプ',
    name: 'PKO ハンガーパイプ（固定）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'HANGER-PKO',
    unit: 'カ所',
    isOption: true,
    description: 'W～1000mmまで。固定タイプ。パイプ：シルバー',
    variants: [
      { id: 'v1', color: 'W～1000mm', colorCode: '#C0C0C0', modelNumber: 'PKO-W1000' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 10000 },
      { plan: 'HOURS', planId: 'HOURS', price: 10000 },
      { plan: 'LIFE', planId: 'LIFE', price: 10000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 10000 }
    ]
  },

  // 玄関靴箱 コンポリア W800 Panasonic
  {
    id: 'int-shoebox-comporia-w800',
    categoryId: 'interior-entrance',
    categoryName: '玄関靴箱',
    subcategory: 'コンポリア',
    name: 'コンポリア W800',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPORIA-W800',
    unit: 'カ所',
    isOption: true,
    description: 'フロートタイプH2070。W800mm。ユニット内部ライトグレー色。斜め棚板で取り出しやすい。カウンターのみ/セパレート/トールプラン選択可。※コの字プラン選択不可',
    variants: [
      { id: 'v1', color: 'W800', colorCode: '#C8A870', modelNumber: 'W800' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 100000 },
      { plan: 'HOURS', planId: 'HOURS', price: 100000 },
      { plan: 'LIFE', planId: 'LIFE', price: 100000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 100000 }
    ]
  },

  // 玄関靴箱 コンポリア W1200 Panasonic
  {
    id: 'int-shoebox-comporia-w1200',
    categoryId: 'interior-entrance',
    categoryName: '玄関靴箱',
    subcategory: 'コンポリア',
    name: 'コンポリア W1200',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPORIA-W1200',
    unit: 'カ所',
    isOption: true,
    description: 'フロートタイプH2070。W1200mm。ユニット内部ライトグレー色。斜め棚板で取り出しやすい。カウンターのみ/セパレート/コの字/トールプラン選択可',
    variants: [
      { id: 'v1', color: 'W1200', colorCode: '#C8A870', modelNumber: 'W1200' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 150000 },
      { plan: 'HOURS', planId: 'HOURS', price: 150000 },
      { plan: 'LIFE', planId: 'LIFE', price: 150000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 150000 }
    ]
  },

  // 玄関靴箱 コンポリア W1600 Panasonic
  {
    id: 'int-shoebox-comporia-w1600',
    categoryId: 'interior-entrance',
    categoryName: '玄関靴箱',
    subcategory: 'コンポリア',
    name: 'コンポリア W1600',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPORIA-W1600',
    unit: 'カ所',
    isOption: true,
    description: 'フロートタイプH2070。W1600mm。ユニット内部ライトグレー色。斜め棚板で取り出しやすい。カウンターのみ/セパレート/コの字/トールプラン選択可',
    variants: [
      { id: 'v1', color: 'W1600', colorCode: '#C8A870', modelNumber: 'W1600' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 200000 },
      { plan: 'HOURS', planId: 'HOURS', price: 200000 },
      { plan: 'LIFE', planId: 'LIFE', price: 200000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 200000 }
    ]
  },

  // 玄関靴箱 コンポリア 扉カラー
  {
    id: 'int-shoebox-comporia-doorcolor',
    categoryId: 'interior-entrance',
    categoryName: '玄関靴箱',
    subcategory: 'コンポリア扉カラー',
    name: 'コンポリア 扉・カウンターカラー',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPORIA-COLOR',
    unit: '式',
    isOption: false,
    description: '扉・カウンターカラー選択。ナチュラル/ペイント/ソリッドカラーから選択',
    variants: [
      { id: 'v1', color: 'ソフトウォールナット柄', colorCode: '#8B6914', modelNumber: 'SOFT-WALNUT' },
      { id: 'v2', color: 'ウォールナット柄', colorCode: '#5C4033', modelNumber: 'WALNUT' },
      { id: 'v3', color: 'チェリー柄', colorCode: '#8B4513', modelNumber: 'CHERRY' },
      { id: 'v4', color: 'グレージュアッシュ柄', colorCode: '#A89080', modelNumber: 'GREIGE-ASH' },
      { id: 'v5', color: 'イデアオーク柄', colorCode: '#C8A870', modelNumber: 'IDEA-OAK' },
      { id: 'v6', color: 'メープル柄', colorCode: '#D4A86A', modelNumber: 'MAPLE' },
      { id: 'v7', color: 'ホワイトオーク柄', colorCode: '#E8D8C0', modelNumber: 'WHITE-OAK' },
      { id: 'v8', color: 'ホワイトアッシュ柄', colorCode: '#F0E8E0', modelNumber: 'WHITE-ASH' },
      { id: 'v9', color: 'しっくいホワイト柄', colorCode: '#F5F0E8', modelNumber: 'SHIKKUI-WHITE' },
      { id: 'v10', color: 'ブラックオーク柄', colorCode: '#303030', modelNumber: 'BLACK-OAK' },
      { id: 'v11', color: 'ネイビーオーク柄', colorCode: '#1A2840', modelNumber: 'NAVY-OAK' },
      { id: 'v12', color: 'ブルーグレーオーク柄', colorCode: '#607080', modelNumber: 'BLUEGRAY-OAK' },
      { id: 'v13', color: 'ソイルブラック柄', colorCode: '#202020', modelNumber: 'SOIL-BLACK' },
      { id: 'v14', color: 'パールグレー柄', colorCode: '#C8C8C8', modelNumber: 'PEARL-GRAY' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 玄関靴箱 コンポリア 扉デザイン
  {
    id: 'int-shoebox-comporia-doordesign',
    categoryId: 'interior-entrance',
    categoryName: '玄関靴箱',
    subcategory: 'コンポリア扉デザイン',
    name: 'コンポリア 扉デザイン',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPORIA-DESIGN',
    unit: '式',
    isOption: false,
    description: '扉デザイン選択',
    variants: [
      { id: 'v1', color: 'フラットタイプ（取っ手付き）', colorCode: '#E0E0E0', modelNumber: 'FLAT' },
      { id: 'v2', color: 'フラットタッチタイプ（プッシュオープン）', colorCode: '#E0E0E0', modelNumber: 'FLAT-TOUCH' },
      { id: 'v3', color: '框タイプ（框組デザイン）', colorCode: '#E0E0E0', modelNumber: 'KAMACHI' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 玄関靴箱 コンポリア 取っ手
  {
    id: 'int-shoebox-comporia-handle',
    categoryId: 'interior-entrance',
    categoryName: '玄関靴箱',
    subcategory: 'コンポリア取っ手',
    name: 'コンポリア 取っ手',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPORIA-HANDLE',
    unit: '式',
    isOption: false,
    description: '取っ手選択（フラットタイプ・框タイプ用）',
    variants: [
      { id: 'v1', color: 'T5型（丸型）サテンシルバー色', colorCode: '#C0C0C0', modelNumber: 'T5-SILVER' },
      { id: 'v2', color: 'T5型（丸型）オフブラック色', colorCode: '#303030', modelNumber: 'T5-BLACK' },
      { id: 'v3', color: 'T5型（丸型）真鍮色', colorCode: '#B8860B', modelNumber: 'T5-BRASS' },
      { id: 'v4', color: 'T3型（つまみ）サテンシルバー色', colorCode: '#C0C0C0', modelNumber: 'T3-SILVER' },
      { id: 'v5', color: 'T3型（つまみ）オフブラック色', colorCode: '#303030', modelNumber: 'T3-BLACK' },
      { id: 'v6', color: 'T3型（つまみ）真鍮色', colorCode: '#B8860B', modelNumber: 'T3-BRASS' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 玄関靴箱 コンポリア ミラー追加
  {
    id: 'int-shoebox-comporia-mirror',
    categoryId: 'interior-entrance',
    categoryName: '玄関靴箱',
    subcategory: 'コンポリアオプション',
    name: 'コンポリア ミラー追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPORIA-MIRROR',
    unit: 'カ所',
    isOption: true,
    description: '玄関靴箱にミラーを追加',
    variants: [
      { id: 'v1', color: 'ミラー追加', colorCode: '#E0E0E0', modelNumber: 'MIRROR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 36000 },
      { plan: 'HOURS', planId: 'HOURS', price: 36000 },
      { plan: 'LIFE', planId: 'LIFE', price: 36000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 36000 }
    ]
  },

  // 玄関靴箱 コンポリア 集成材カウンターカラー
  {
    id: 'int-shoebox-comporia-countercolor',
    categoryId: 'interior-entrance',
    categoryName: '玄関靴箱',
    subcategory: 'コンポリアカウンター',
    name: 'コンポリア 集成材カウンターカラー',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPORIA-COUNTER-COLOR',
    unit: '式',
    isOption: false,
    description: '集成材カウンターカラー選択。扉にはお選びいただけません',
    variants: [
      { id: 'v1', color: 'ウォールナット色', colorCode: '#5C4033', modelNumber: 'WALNUT' },
      { id: 'v2', color: 'チェリー色', colorCode: '#8B4513', modelNumber: 'CHERRY' },
      { id: 'v3', color: 'イデアオーク色', colorCode: '#C8A870', modelNumber: 'IDEA-OAK' },
      { id: 'v4', color: 'アッシュクリア色', colorCode: '#E8D8C0', modelNumber: 'ASH-CLEAR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 玄関靴箱 コンポリア カウンター仕上げ
  {
    id: 'int-shoebox-comporia-counterstyle',
    categoryId: 'interior-entrance',
    categoryName: '玄関靴箱',
    subcategory: 'コンポリアカウンター',
    name: 'コンポリア カウンター仕上げ',
    manufacturer: 'Panasonic',
    modelNumber: 'COMPORIA-COUNTER-STYLE',
    unit: '式',
    isOption: false,
    description: 'カウンター仕上げ選択。※B型カウンターはロープラン・セパレートプランかつ、両側オープン時のみ選択可能',
    variants: [
      { id: 'v1', color: 'A型カウンター（扉と面合わせ）', colorCode: '#E0E0E0', modelNumber: 'TYPE-A' },
      { id: 'v2', color: 'B型カウンター（カウンター伸び出し）', colorCode: '#E0E0E0', modelNumber: 'TYPE-B' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ZS 造作トイレ 背面収納スペース
  {
    id: 'int-toilet-back-space',
    categoryId: 'interior-toilet',
    categoryName: 'トイレ収納',
    subcategory: '背面収納',
    name: '造作トイレ 背面収納スペース（ZS）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'ZS',
    unit: 'カ所',
    isOption: true,
    description: 'スペースのみ（棚板は含まれない）。開口部有効寸法260mm以上確保必要。下地施工は別途費用',
    variants: [
      { id: 'v1', color: '背面収納スペース', colorCode: '#FFFFFF', modelNumber: 'ZS' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 35000 },
      { plan: 'HOURS', planId: 'HOURS', price: 35000 },
      { plan: 'LIFE', planId: 'LIFE', price: 35000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 35000 }
    ]
  },

  // TZ 造作トイレ 収納
  {
    id: 'int-toilet-storage',
    categoryId: 'interior-toilet',
    categoryName: 'トイレ収納',
    subcategory: '壁面収納',
    name: '造作トイレ 収納（TZ）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'TZ',
    unit: 'カ所',
    isOption: true,
    description: 'W150×H床～天井迄×D130（有効）。棚板×3枚（固定棚）。ふかし壁費用含む',
    variants: [
      { id: 'v1', color: '右側収納', colorCode: '#FFFFFF', modelNumber: 'TZ-R' },
      { id: 'v2', color: '左側収納', colorCode: '#FFFFFF', modelNumber: 'TZ-L' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 47000 },
      { plan: 'HOURS', planId: 'HOURS', price: 47000 },
      { plan: 'LIFE', planId: 'LIFE', price: 47000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 47000 }
    ]
  },

  // TZ 造作トイレ 収納 台カラー
  {
    id: 'int-toilet-storage-color',
    categoryId: 'interior-toilet',
    categoryName: 'トイレ収納',
    subcategory: '台カラー',
    name: '造作トイレ収納 台カラー',
    manufacturer: 'Gハウス施工',
    modelNumber: 'TZ-COLOR',
    unit: '式',
    isOption: false,
    description: '造作トイレ収納の台カラー選択',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#F5F5F0', modelNumber: 'SHELL-WHITE' },
      { id: 'v2', color: 'ナチュラルバーチアッシュ', colorCode: '#D4C4A8', modelNumber: 'NATURAL-BIRCH' },
      { id: 'v3', color: 'ダークグレーウォールナット', colorCode: '#505050', modelNumber: 'DARKGRAY-WALNUT' },
      { id: 'v4', color: 'ブライトウォールナット', colorCode: '#5C4033', modelNumber: 'BRIGHT-WALNUT' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // TS サニタトイレ収納ボックス Sタイプ
  {
    id: 'int-toilet-sanita-box',
    categoryId: 'interior-toilet',
    categoryName: 'トイレ収納',
    subcategory: 'サニタ収納',
    name: 'サニタトイレ収納ボックス Sタイプ（TS）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'TS',
    unit: 'カ所',
    isOption: true,
    description: 'W300×H740×D117.4（有効）。クリアホワイトのみ。棚は可動式',
    variants: [
      { id: 'v1', color: '右吊元', colorCode: '#FFFFFF', modelNumber: 'TS-R' },
      { id: 'v2', color: '左吊元', colorCode: '#FFFFFF', modelNumber: 'TS-L' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 53000 },
      { plan: 'HOURS', planId: 'HOURS', price: 53000 },
      { plan: 'LIFE', planId: 'LIFE', price: 53000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 53000 }
    ]
  },

  // TR/TK トイレ上部収納
  {
    id: 'int-toilet-upper-storage',
    categoryId: 'interior-toilet',
    categoryName: 'トイレ収納',
    subcategory: '上部収納',
    name: 'トイレ上部収納（TR/TK）',
    manufacturer: 'Gハウス施工',
    modelNumber: 'TR-TK',
    unit: 'カ所',
    isOption: true,
    description: '～W905迄×H470×D300（有効）。クリアホワイトのみ',
    variants: [
      { id: 'v1', color: 'TR 両壁納まり（両サイドが壁）', colorCode: '#FFFFFF', modelNumber: 'TR' },
      { id: 'v2', color: 'TK 片壁納まり（片側オープン）', colorCode: '#FFFFFF', modelNumber: 'TK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 60000 },
      { plan: 'HOURS', planId: 'HOURS', price: 60000 },
      { plan: 'LIFE', planId: 'LIFE', price: 60000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // スロップシンク ボウル／水栓／排水Pトラップ
  {
    id: 'int-slopsink-set',
    categoryId: 'interior-utility',
    categoryName: 'スロップシンク',
    subcategory: 'シンクセット',
    name: 'スロップシンク ボウル／水栓／排水Pトラップ',
    manufacturer: 'TOTO',
    modelNumber: 'SK507-SET',
    unit: 'カ所',
    isOption: true,
    description: 'TOTO洗濯用流し（大型）SK507#NW1 + 壁付シングル混合水栓TKS05314J + 壁排水金具TK40P。給排水工事費用別途',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'SK507-NW1' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 115000 },
      { plan: 'HOURS', planId: 'HOURS', price: 115000 },
      { plan: 'LIFE', planId: 'LIFE', price: 115000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 115000 }
    ]
  },

  // スロップシンク 給排水工事費用
  {
    id: 'int-slopsink-plumbing',
    categoryId: 'interior-utility',
    categoryName: 'スロップシンク',
    subcategory: '給排水工事',
    name: 'スロップシンク 給排水工事費用',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SLOP-PLUMB',
    unit: 'カ所',
    isOption: true,
    description: 'スロップシンク設置に必要な給排水工事',
    variants: [
      { id: 'v1', color: '1階 給水管（排水）追加', colorCode: '#E0E0E0', modelNumber: '1F-WATER' },
      { id: 'v2', color: '1階 給湯追加', colorCode: '#E0E0E0', modelNumber: '1F-HOT' },
      { id: 'v3', color: '2階 給水管（排水）追加', colorCode: '#E0E0E0', modelNumber: '2F-WATER' },
      { id: 'v4', color: '2階 給湯追加', colorCode: '#E0E0E0', modelNumber: '2F-HOT' },
      { id: 'v5', color: '3階 給水管（排水）追加', colorCode: '#E0E0E0', modelNumber: '3F-WATER' },
      { id: 'v6', color: '3階 給湯追加', colorCode: '#E0E0E0', modelNumber: '3F-HOT' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 60000 },
      { plan: 'HOURS', planId: 'HOURS', price: 60000 },
      { plan: 'LIFE', planId: 'LIFE', price: 60000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // スロップシンク 笠木カラー
  {
    id: 'int-slopsink-kasagi-color',
    categoryId: 'interior-utility',
    categoryName: 'スロップシンク',
    subcategory: '笠木・腰壁',
    name: 'スロップシンク 笠木カラー',
    manufacturer: 'Gハウス施工',
    modelNumber: 'SLOP-KASAGI',
    unit: '式',
    isOption: false,
    description: 'スロップシンク腰壁（H1200mm、標準FL+1200）の笠木カラー選択',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#F5F5F0', modelNumber: 'SHELL-WHITE' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#D4C4A8', modelNumber: 'NATURAL-BIRCH' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#5C4033', modelNumber: 'BRIGHT-WALNUT' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#6B5B4F', modelNumber: 'ASH-WALNUT' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#505050', modelNumber: 'DARK-GRAY' },
      { id: 'v6', color: 'ゴム集成クリア塗装', colorCode: '#C8A870', modelNumber: 'RUBBER-CLEAR' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 洗濯パン Panasonic
  {
    id: 'int-laundry-pan',
    categoryId: 'interior-utility',
    categoryName: '洗濯パン',
    subcategory: '洗濯パン',
    name: '洗濯パン（GB745+排水トラップGB881セット）',
    manufacturer: 'Panasonic',
    modelNumber: 'GB745-SET',
    unit: 'カ所',
    isOption: true,
    description: '洗濯パンGB745+排水トラップGB881セット。カラー：クールホワイト。外寸740×640×55mm、内寸690×590mm。PP製、耐荷重200kg',
    variants: [
      { id: 'v1', color: 'クールホワイト', colorCode: '#F5F5F5', modelNumber: 'GB745' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 24000 },
      { plan: 'HOURS', planId: 'HOURS', price: 24000 },
      { plan: 'LIFE', planId: 'LIFE', price: 24000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 24000 }
    ]
  },

  // 玄関手洗い ボウルA KAKUDAI LY-493231
  {
    id: 'int-entrance-bowl-a',
    categoryId: 'interior-entrance',
    categoryName: '玄関手洗い',
    subcategory: 'ボウル',
    name: 'ボウルA（LY-493231）',
    manufacturer: 'KAKUDAI',
    modelNumber: 'LY-493231',
    unit: '個',
    isOption: true,
    description: 'H130mm。間取りにより採用可否は異なります',
    variants: [
      { id: 'v1', color: 'マットホワイト（W）', colorCode: '#F5F5F0', modelNumber: 'LY-493231-W' },
      { id: 'v2', color: 'マットブラック（D）', colorCode: '#303030', modelNumber: 'LY-493231-D' },
      { id: 'v3', color: 'マットグレー（GY）', colorCode: '#808080', modelNumber: 'LY-493231-GY' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 99000 },
      { plan: 'HOURS', planId: 'HOURS', price: 99000 },
      { plan: 'LIFE', planId: 'LIFE', price: 99000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 99000 }
    ]
  },

  // 玄関手洗い ボウルB KAKUDAI LY-493232
  {
    id: 'int-entrance-bowl-b',
    categoryId: 'interior-entrance',
    categoryName: '玄関手洗い',
    subcategory: 'ボウル',
    name: 'ボウルB（LY-493232）',
    manufacturer: 'KAKUDAI',
    modelNumber: 'LY-493232',
    unit: '個',
    isOption: true,
    description: 'H144mm。間取りにより採用可否は異なります',
    variants: [
      { id: 'v1', color: 'マットホワイト（W）', colorCode: '#F5F5F0', modelNumber: 'LY-493232-W' },
      { id: 'v2', color: 'マットブラック（D）', colorCode: '#303030', modelNumber: 'LY-493232-D' },
      { id: 'v3', color: 'マットグレー（GY）', colorCode: '#808080', modelNumber: 'LY-493232-GY' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 85000 },
      { plan: 'HOURS', planId: 'HOURS', price: 85000 },
      { plan: 'LIFE', planId: 'LIFE', price: 85000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 85000 }
    ]
  },

  // 玄関手洗い ボウルC KAKUDAI LY-493233
  {
    id: 'int-entrance-bowl-c',
    categoryId: 'interior-entrance',
    categoryName: '玄関手洗い',
    subcategory: 'ボウル',
    name: 'ボウルC（LY-493233）',
    manufacturer: 'KAKUDAI',
    modelNumber: 'LY-493233',
    unit: '個',
    isOption: true,
    description: 'H144mm。間取りにより採用可否は異なります',
    variants: [
      { id: 'v1', color: 'マットホワイト（W）', colorCode: '#F5F5F0', modelNumber: 'LY-493233-W' },
      { id: 'v2', color: 'マットブラック（D）', colorCode: '#303030', modelNumber: 'LY-493233-D' },
      { id: 'v3', color: 'マットグレー（GY）', colorCode: '#808080', modelNumber: 'LY-493233-GY' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 85000 },
      { plan: 'HOURS', planId: 'HOURS', price: 85000 },
      { plan: 'LIFE', planId: 'LIFE', price: 85000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 85000 }
    ]
  },

  // 玄関手洗い 水栓 KAKUDAI
  {
    id: 'int-entrance-faucet',
    categoryId: 'interior-entrance',
    categoryName: '玄関手洗い',
    subcategory: '水栓',
    name: '玄関手洗い 水栓',
    manufacturer: 'KAKUDAI',
    modelNumber: '193-001',
    unit: '個',
    isOption: true,
    description: '混合水栓。壁付けの場合ふかし壁施工費含む（W750迄 H1100）',
    variants: [
      { id: 'v1', color: '193-001 壁付け（シルバー）', colorCode: '#C0C0C0', modelNumber: '193-001' },
      { id: 'v2', color: '193-001-D 壁付け（マットブラック）', colorCode: '#303030', modelNumber: '193-001-D' },
      { id: 'v3', color: '183-309 カウンター置き（シルバー）', colorCode: '#C0C0C0', modelNumber: '183-309' },
      { id: 'v4', color: '183-309-D カウンター置き（マットブラック）', colorCode: '#303030', modelNumber: '183-309-D' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 60000 },
      { plan: 'HOURS', planId: 'HOURS', price: 60000 },
      { plan: 'LIFE', planId: 'LIFE', price: 60000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // 玄関手洗い 排水トラップ
  {
    id: 'int-entrance-trap',
    categoryId: 'interior-entrance',
    categoryName: '玄関手洗い',
    subcategory: '排水トラップ',
    name: '玄関手洗い 排水トラップ',
    manufacturer: 'KAKUDAI',
    modelNumber: '433-310-32',
    unit: '個',
    isOption: true,
    description: '排水トラップ',
    variants: [
      { id: 'v1', color: '床排水（Sトラップ）433-310-32', colorCode: '#C0C0C0', modelNumber: '433-310-32' },
      { id: 'v2', color: '壁排水（Pトラップ）433-401-32', colorCode: '#C0C0C0', modelNumber: '433-401-32' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 19000 },
      { plan: 'HOURS', planId: 'HOURS', price: 19000 },
      { plan: 'LIFE', planId: 'LIFE', price: 19000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 19000 }
    ]
  },

  // 玄関手洗い 耐水集成インテリアカウンター
  {
    id: 'int-entrance-counter',
    categoryId: 'interior-entrance',
    categoryName: '玄関手洗い',
    subcategory: 'カウンター',
    name: '耐水集成 インテリアカウンター',
    manufacturer: 'Panasonic',
    modelNumber: 'ENT-COUNTER',
    unit: 'カ所',
    isOption: true,
    description: 'D500/W1,000迄。壁付けの場合笠木材（南海プライウッド）¥6,000/枚別途',
    variants: [
      { id: 'v1', color: 'シェルホワイト', colorCode: '#F5F5F0', modelNumber: 'SHELL-WHITE' },
      { id: 'v2', color: 'ナチュラルバーチ', colorCode: '#D4C4A8', modelNumber: 'NATURAL-BIRCH' },
      { id: 'v3', color: 'ブライトウォールナット', colorCode: '#5C4033', modelNumber: 'BRIGHT-WALNUT' },
      { id: 'v4', color: 'アッシュウォールナット', colorCode: '#6B5B4F', modelNumber: 'ASH-WALNUT' },
      { id: 'v5', color: 'ダークグレー', colorCode: '#505050', modelNumber: 'DARK-GRAY' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 48000 },
      { plan: 'HOURS', planId: 'HOURS', price: 48000 },
      { plan: 'LIFE', planId: 'LIFE', price: 48000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 48000 }
    ]
  },

  // 玄関手洗い カウンターブラケット
  {
    id: 'int-entrance-bracket',
    categoryId: 'interior-entrance',
    categoryName: '玄関手洗い',
    subcategory: 'ブラケット',
    name: '玄関手洗い カウンターブラケット',
    manufacturer: 'Panasonic',
    modelNumber: 'ENT-BRACKET',
    unit: '式',
    isOption: false,
    description: 'カウンター用ブラケットカラー選択',
    variants: [
      { id: 'v1', color: 'サテンシルバー', colorCode: '#C0C0C0', modelNumber: 'SATIN-SILVER' },
      { id: 'v2', color: 'オフブラック', colorCode: '#303030', modelNumber: 'OFF-BLACK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // 玄関手洗い 笠木材
  {
    id: 'int-entrance-kasagi',
    categoryId: 'interior-entrance',
    categoryName: '玄関手洗い',
    subcategory: '笠木材',
    name: '玄関手洗い 笠木材（南海プライウッド）',
    manufacturer: '南海プライウッド',
    modelNumber: 'KASAGI',
    unit: '枚',
    isOption: true,
    description: '壁付け水栓の場合に必要',
    variants: [
      { id: 'v1', color: '笠木材', colorCode: '#C8A870', modelNumber: 'KASAGI' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 6000 },
      { plan: 'LIFE', planId: 'LIFE', price: 6000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 6000 }
    ]
  },

  // 玄関手洗い ステンレスボウル一体型コーナーカウンターセット
  {
    id: 'int-entrance-corner-set',
    categoryId: 'interior-entrance',
    categoryName: '玄関手洗い',
    subcategory: 'コーナーセット',
    name: 'ステンレスボウル一体型コーナーカウンターセット',
    manufacturer: 'KAKUDAI',
    modelNumber: '497-028-SET',
    unit: 'セット',
    isOption: true,
    description: 'ボウル+排水トラップ+水栓（単水栓）セット。ステンレスボウル497-028、立水栓721-209、Sトラップ433-315-25他',
    variants: [
      { id: 'v1', color: 'ステンレス', colorCode: '#C0C0C0', modelNumber: '497-028-SET' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 96000 },
      { plan: 'HOURS', planId: 'HOURS', price: 96000 },
      { plan: 'LIFE', planId: 'LIFE', price: 96000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 96000 }
    ]
  },

  // 物干し金物 ホスクリーン 川口技研
  {
    id: 'int-laundry-hosucreen',
    categoryId: 'interior-laundry',
    categoryName: '物干し金物',
    subcategory: 'ホスクリーン',
    name: 'ホスクリーン（川口技研）',
    manufacturer: '川口技研',
    modelNumber: 'SPC',
    unit: 'セット',
    isOption: true,
    description: 'シンプルな着脱可能商品。天井金具部分カラー全3色。※2カ所目からオプション',
    variants: [
      { id: 'v1', color: 'SPC-W（ホワイト）', colorCode: '#FFFFFF', modelNumber: 'SPC-W' },
      { id: 'v2', color: 'SPC-M（木目）', colorCode: '#C8A870', modelNumber: 'SPC-M' },
      { id: 'v3', color: 'SPC-BL（ブラック）', colorCode: '#303030', modelNumber: 'SPC-BL' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 24000 },
      { plan: 'HOURS', planId: 'HOURS', price: 24000 },
      { plan: 'LIFE', planId: 'LIFE', price: 24000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 24000 }
    ]
  },

  // 物干し金物 Kacu 森田アルミ工業
  {
    id: 'int-laundry-kacu',
    categoryId: 'interior-laundry',
    categoryName: '物干し金物',
    subcategory: 'Kacu',
    name: 'Kacu（森田アルミ工業）',
    manufacturer: '森田アルミ工業',
    modelNumber: 'KACU',
    unit: 'カ所',
    isOption: true,
    description: '高さ：H400・H500・H600。L型W1432、U型W1455、F型W2862、E型W2885。※2カ所目からオプション',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'KACU-W' },
      { id: 'v2', color: 'ブラック', colorCode: '#303030', modelNumber: 'KACU-BL' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 24000 },
      { plan: 'HOURS', planId: 'HOURS', price: 24000 },
      { plan: 'LIFE', planId: 'LIFE', price: 24000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 24000 }
    ]
  },

  // 物干し金物 Pid4M 森田アルミ工業
  {
    id: 'int-laundry-pid4m',
    categoryId: 'interior-laundry',
    categoryName: '物干し金物',
    subcategory: 'Pid4M',
    name: 'Pid4M（森田アルミ工業）',
    manufacturer: '森田アルミ工業',
    modelNumber: 'PID4M',
    unit: 'カ所',
    isOption: true,
    description: 'ワイヤータイプ物干し。※2カ所目からオプション',
    variants: [
      { id: 'v1', color: 'Pid4M', colorCode: '#FFFFFF', modelNumber: 'PID4M' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 24000 },
      { plan: 'HOURS', planId: 'HOURS', price: 24000 },
      { plan: 'LIFE', planId: 'LIFE', price: 24000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 24000 }
    ]
  },

  // 物干し金物 ホスクリーン昇降タイプD 川口技研
  {
    id: 'int-laundry-hosucreen-lift-d',
    categoryId: 'interior-laundry',
    categoryName: '物干し金物',
    subcategory: 'ホスクリーン昇降',
    name: 'ホスクリーン昇降タイプD（川口技研）',
    manufacturer: '川口技研',
    modelNumber: 'UTM',
    unit: 'カ所',
    isOption: true,
    description: '竿に付帯のヒモで楽々操作可能。※洗濯物を干しながらの昇降はできません。※2カ所目からオプション',
    variants: [
      { id: 'v1', color: 'UTM-S-W 1255mm', colorCode: '#FFFFFF', modelNumber: 'UTM-S-W' },
      { id: 'v2', color: 'UTM-L-W 1710mm', colorCode: '#FFFFFF', modelNumber: 'UTM-L-W' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 24000 },
      { plan: 'HOURS', planId: 'HOURS', price: 24000 },
      { plan: 'LIFE', planId: 'LIFE', price: 24000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 24000 }
    ]
  },

  // 物干し金物 ホスクリーン昇降タイプE 川口技研
  {
    id: 'int-laundry-hosucreen-lift-e',
    categoryId: 'interior-laundry',
    categoryName: '物干し金物',
    subcategory: 'ホスクリーン昇降',
    name: 'ホスクリーン昇降タイプE（川口技研）',
    manufacturer: '川口技研',
    modelNumber: 'URM',
    unit: 'カ所',
    isOption: true,
    description: '付属の操作棒ですっきり操作可能。※洗濯物を干しながらの昇降が可能。※2カ所目からオプション',
    variants: [
      { id: 'v1', color: 'URM-S-W 1340mm', colorCode: '#FFFFFF', modelNumber: 'URM-S-W' },
      { id: 'v2', color: 'URM-L-W 1740mm', colorCode: '#FFFFFF', modelNumber: 'URM-L-W' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 24000 },
      { plan: 'HOURS', planId: 'HOURS', price: 24000 },
      { plan: 'LIFE', planId: 'LIFE', price: 24000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 24000 }
    ]
  },

  // 乾太くん スタンダードタイプ
  {
    id: 'int-kantakun-standard',
    categoryId: 'interior-laundry',
    categoryName: '乾太くん',
    subcategory: 'スタンダード',
    name: '乾太くん スタンダードタイプ 6kg',
    manufacturer: 'Rinnai',
    modelNumber: 'RDT-STD',
    unit: 'カ所',
    isOption: true,
    description: 'H684×W650×D641mm。6kg。上部に配管ダクトが露出。カラー指定不可',
    variants: [
      { id: 'v1', color: 'スタンダード 6kg', colorCode: '#FFFFFF', modelNumber: 'RDT-STD-6' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 272000 },
      { plan: 'HOURS', planId: 'HOURS', price: 272000 },
      { plan: 'LIFE', planId: 'LIFE', price: 272000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 272000 }
    ]
  },

  // 乾太くん デラックスタイプ 6kg
  {
    id: 'int-kantakun-deluxe-6',
    categoryId: 'interior-laundry',
    categoryName: '乾太くん',
    subcategory: 'デラックス',
    name: '乾太くん デラックスタイプ 6kg',
    manufacturer: 'Rinnai',
    modelNumber: 'RDT-63',
    unit: 'カ所',
    isOption: true,
    description: '671×W653×D554mm。6kg。上部に配管ダクトが露出。カラー指定不可',
    variants: [
      { id: 'v1', color: 'RDT-63（下部操作パネル）', colorCode: '#FFFFFF', modelNumber: 'RDT-63' },
      { id: 'v2', color: 'RDT-63T（上部操作パネル）', colorCode: '#FFFFFF', modelNumber: 'RDT-63T' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 297000 },
      { plan: 'HOURS', planId: 'HOURS', price: 297000 },
      { plan: 'LIFE', planId: 'LIFE', price: 297000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 297000 }
    ]
  },

  // 乾太くん デラックスタイプ 9kg
  {
    id: 'int-kantakun-deluxe-9',
    categoryId: 'interior-laundry',
    categoryName: '乾太くん',
    subcategory: 'デラックス',
    name: '乾太くん デラックスタイプ 9kg',
    manufacturer: 'Rinnai',
    modelNumber: 'RDT-93',
    unit: 'カ所',
    isOption: true,
    description: '671×W653×D674mm。9kg。上部に配管ダクトが露出。カラー指定不可',
    variants: [
      { id: 'v1', color: 'RDT-93（下部操作パネル）', colorCode: '#FFFFFF', modelNumber: 'RDT-93' },
      { id: 'v2', color: 'RDT-93T（上部操作パネル）', colorCode: '#FFFFFF', modelNumber: 'RDT-93T' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 330000 },
      { plan: 'HOURS', planId: 'HOURS', price: 330000 },
      { plan: 'LIFE', planId: 'LIFE', price: 330000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 330000 }
    ]
  },

  // 乾太くん ガス引込工事
  {
    id: 'int-kantakun-gas',
    categoryId: 'interior-laundry',
    categoryName: '乾太くん',
    subcategory: 'ガス工事',
    name: '乾太くん ガス引込工事',
    manufacturer: 'Gハウス施工',
    modelNumber: 'GAS-INSTALL',
    unit: '式',
    isOption: true,
    description: '最低ガス栓3カ所取付必要（引込+キッチンコンロ+ガスコック1カ所など）',
    variants: [
      { id: 'v1', color: 'ガス引込工事', colorCode: '#E0E0E0', modelNumber: 'GAS-INSTALL' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 350000 },
      { plan: 'HOURS', planId: 'HOURS', price: 350000 },
      { plan: 'LIFE', planId: 'LIFE', price: 350000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 350000 }
    ]
  },

  // 乾太くん専用架台
  {
    id: 'int-kantakun-stand',
    categoryId: 'interior-laundry',
    categoryName: '乾太くん',
    subcategory: '専用架台',
    name: '乾太くん専用架台',
    manufacturer: 'Rinnai',
    modelNumber: 'KANTA-STAND',
    unit: 'カ所',
    isOption: true,
    description: '乾太くん設置用専用架台',
    variants: [
      { id: 'v1', color: '専用架台', colorCode: '#FFFFFF', modelNumber: 'KANTA-STAND' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 30000 },
      { plan: 'HOURS', planId: 'HOURS', price: 30000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 30000 }
    ]
  },

  // 乾太くん専用収納ユニット
  {
    id: 'int-kantakun-storage',
    categoryId: 'interior-laundry',
    categoryName: '乾太くん',
    subcategory: '収納ユニット',
    name: '乾太くん専用収納ユニット',
    manufacturer: 'Rinnai',
    modelNumber: 'KANTA-STORAGE',
    unit: 'カ所',
    isOption: true,
    description: '乾太くん設置用収納ユニット',
    variants: [
      { id: 'v1', color: '専用収納ユニット', colorCode: '#FFFFFF', modelNumber: 'KANTA-STORAGE' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 140000 },
      { plan: 'HOURS', planId: 'HOURS', price: 140000 },
      { plan: 'LIFE', planId: 'LIFE', price: 140000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 140000 }
    ]
  },

  // ============================================
  // 内部部品 - スイッチ/コンセント
  // ============================================

  // ほたるスイッチ追加
  {
    id: 'int-switch-hotaru',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'スイッチ',
    name: 'ほたるスイッチ追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-SW',
    unit: 'カ所',
    isOption: true,
    description: 'コスモワイド21 スクエアタイプ/ホワイト ほたるスイッチ追加',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-SW' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 5000 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 5000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // 3路・4路スイッチ追加
  {
    id: 'int-switch-3way-4way',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'スイッチ',
    name: '3路・4路スイッチ追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-3W4W',
    unit: 'カ所',
    isOption: true,
    description: '2カ所で同じ照明を入切できるスイッチ',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-3W4W' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 6000 },
      { plan: 'LIFE', planId: 'LIFE', price: 6000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 6000 }
    ]
  },

  // 2口コンセント追加
  {
    id: 'int-outlet-2port',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: '2口コンセント追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-2P',
    unit: 'カ所',
    isOption: true,
    description: 'コスモワイド21 2口コンセント追加',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-2P' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 6000 },
      { plan: 'LIFE', planId: 'LIFE', price: 6000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 6000 }
    ]
  },

  // 4口コンセント
  {
    id: 'int-outlet-4port',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: '4口コンセント',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-4P',
    unit: 'カ所',
    isOption: true,
    description: 'コスモワイド21 4口コンセント',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-4P' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 8000 },
      { plan: 'HOURS', planId: 'HOURS', price: 8000 },
      { plan: 'LIFE', planId: 'LIFE', price: 8000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 8000 }
    ]
  },

  // TVコンセント追加
  {
    id: 'int-outlet-tv',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: 'TVコンセント追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-TV',
    unit: 'カ所',
    isOption: true,
    description: 'TVコンセント追加',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-TV' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 6000 },
      { plan: 'LIFE', planId: 'LIFE', price: 6000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 6000 }
    ]
  },

  // 電話コンセント追加
  {
    id: 'int-outlet-tel',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: '電話コンセント追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-TEL',
    unit: 'カ所',
    isOption: true,
    description: '電話コンセント追加',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-TEL' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 6000 },
      { plan: 'LIFE', planId: 'LIFE', price: 6000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 6000 }
    ]
  },

  // LANコンセント追加（空配管）
  {
    id: 'int-outlet-lan',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: 'LANコンセント追加（空配管）',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-LAN',
    unit: 'カ所',
    isOption: true,
    description: 'LANコンセント追加（空配管）',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-LAN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 12000 },
      { plan: 'HOURS', planId: 'HOURS', price: 12000 },
      { plan: 'LIFE', planId: 'LIFE', price: 12000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 12000 }
    ]
  },

  // 2口アース付専用コンセント追加
  {
    id: 'int-outlet-2p-earth-dedicated',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: '2口アース付専用コンセント追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-2PE-D',
    unit: 'カ所',
    isOption: true,
    description: '電子レンジ・食洗機用 2口アース付専用コンセント追加',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-2PE-D' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 6000 },
      { plan: 'LIFE', planId: 'LIFE', price: 6000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 6000 }
    ]
  },

  // 2口アース付コンセント追加
  {
    id: 'int-outlet-2p-earth',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: '2口アース付コンセント追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-2PE',
    unit: 'カ所',
    isOption: true,
    description: 'トイレ・洗濯機・冷蔵庫用 2口アース付コンセント追加',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-2PE' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 6000 },
      { plan: 'LIFE', planId: 'LIFE', price: 6000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 6000 }
    ]
  },

  // エアコン用コンセント（100V）追加
  {
    id: 'int-outlet-aircon-100v',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: 'エアコン用コンセント（100V）追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-AC100',
    unit: 'カ所',
    isOption: true,
    description: 'エアコン用コンセント（100V）追加',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-AC100' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 6000 },
      { plan: 'HOURS', planId: 'HOURS', price: 6000 },
      { plan: 'LIFE', planId: 'LIFE', price: 6000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 6000 }
    ]
  },

  // エアコン用コンセント（200V）追加
  {
    id: 'int-outlet-aircon-200v',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: 'エアコン用コンセント（200V）追加',
    manufacturer: 'Panasonic',
    modelNumber: 'COSMO-WIDE21-AC200',
    unit: 'カ所',
    isOption: true,
    description: 'エアコン用コンセント（200V）追加 ※外壁面に設置不可、内壁がない場合天井付け',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'COSMO-WIDE21-AC200' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // 床用コンセント F型アップコン
  {
    id: 'int-outlet-floor-upcon',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: '床用コンセント F型アップコン',
    manufacturer: 'Panasonic',
    modelNumber: 'F-UPCON',
    unit: 'カ所',
    isOption: true,
    description: '床用コンセント F型アップコン',
    variants: [
      { id: 'v1', color: 'アイボリー', colorCode: '#FFFFF0', modelNumber: 'F-UPCON-IV' },
      { id: 'v2', color: 'ブラウン（ナチュラルバーチ）', colorCode: '#8B4513', modelNumber: 'F-UPCON-NB' },
      { id: 'v3', color: 'ブラウン（バーチ）', colorCode: '#A0522D', modelNumber: 'F-UPCON-BC' },
      { id: 'v4', color: 'ダークブラウン（オーク）', colorCode: '#5C4033', modelNumber: 'F-UPCON-OK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 12000 },
      { plan: 'HOURS', planId: 'HOURS', price: 12000 },
      { plan: 'LIFE', planId: 'LIFE', price: 12000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 12000 }
    ]
  },

  // Sプレートコンセント
  {
    id: 'int-outlet-s-plate',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'コンセント',
    name: 'Sプレートコンセント',
    manufacturer: 'Panasonic',
    modelNumber: 'S-PLATE',
    unit: 'カ所',
    isOption: true,
    description: 'Sプレートコンセント（カ所別色変更不可）※外壁側は気密処理困難の為使用不可',
    variants: [
      { id: 'v1', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'S-PLATE-WH' },
      { id: 'v2', color: 'グレー', colorCode: '#808080', modelNumber: 'S-PLATE-GY' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 9000 },
      { plan: 'HOURS', planId: 'HOURS', price: 9000 },
      { plan: 'LIFE', planId: 'LIFE', price: 9000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 9000 }
    ]
  },

  // アドバンスシリーズ（箇所別色変更可）
  {
    id: 'int-outlet-advance-basic',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'アドバンスシリーズ',
    name: 'アドバンスシリーズ（箇所別色変更可）',
    manufacturer: 'Panasonic',
    modelNumber: 'ADVANCE-BASIC',
    unit: '一式',
    isOption: true,
    description: 'アドバンスシリーズ（箇所別色変更可）※リンクプラス機能はついていません',
    variants: [
      { id: 'v1', color: 'マットホワイト', colorCode: '#F5F5F5', modelNumber: 'ADVANCE-MW' },
      { id: 'v2', color: 'マットグレー', colorCode: '#808080', modelNumber: 'ADVANCE-MG' },
      { id: 'v3', color: 'マットブラック', colorCode: '#2C2C2C', modelNumber: 'ADVANCE-MB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 72000 },
      { plan: 'HOURS', planId: 'HOURS', price: 72000 },
      { plan: 'LIFE', planId: 'LIFE', price: 72000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 72000 }
    ]
  },

  // アドバンスシリーズ（箇所別色変更可能プラン）
  {
    id: 'int-outlet-advance-premium',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: 'アドバンスシリーズ',
    name: 'アドバンスシリーズ（箇所別色変更可能プラン）',
    manufacturer: 'Panasonic',
    modelNumber: 'ADVANCE-PREMIUM',
    unit: '一式',
    isOption: true,
    description: 'アドバンスシリーズ（箇所別色変更可能プラン）',
    variants: [
      { id: 'v1', color: 'マットホワイト', colorCode: '#F5F5F5', modelNumber: 'ADVANCE-P-MW' },
      { id: 'v2', color: 'マットグレー', colorCode: '#808080', modelNumber: 'ADVANCE-P-MG' },
      { id: 'v3', color: 'マットブラック', colorCode: '#2C2C2C', modelNumber: 'ADVANCE-P-MB' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 120000 },
      { plan: 'HOURS', planId: 'HOURS', price: 120000 },
      { plan: 'LIFE', planId: 'LIFE', price: 120000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 120000 }
    ]
  },

  // LAN用空配管
  {
    id: 'int-conduit-lan',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: '空配管',
    name: 'LAN用空配管',
    manufacturer: 'Panasonic',
    modelNumber: 'CONDUIT-LAN',
    unit: 'カ所',
    isOption: true,
    description: 'LAN用空配管',
    variants: [
      { id: 'v1', color: '空配管', colorCode: '#FFFFFF', modelNumber: 'CONDUIT-LAN' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 12000 },
      { plan: 'HOURS', planId: 'HOURS', price: 12000 },
      { plan: 'LIFE', planId: 'LIFE', price: 12000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 12000 }
    ]
  },

  // 壁掛けテレビ用空配管
  {
    id: 'int-conduit-walltv',
    categoryId: 'interior-electrical',
    categoryName: 'スイッチ/コンセント',
    subcategory: '空配管',
    name: '壁掛けテレビ用空配管',
    manufacturer: 'Panasonic',
    modelNumber: 'CONDUIT-WALLTV',
    unit: 'カ所',
    isOption: true,
    description: '壁掛けテレビ用空配管',
    variants: [
      { id: 'v1', color: '空配管', colorCode: '#FFFFFF', modelNumber: 'CONDUIT-WALLTV' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 15000 },
      { plan: 'HOURS', planId: 'HOURS', price: 15000 },
      { plan: 'LIFE', planId: 'LIFE', price: 15000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // ============================================
  // 内部部品 - インターホン
  // ============================================

  // 外でもドアホン VL-SVD505KFに変更
  {
    id: 'int-intercom-svd505kf-change',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'インターホン変更',
    name: '外でもドアホン VL-SVD505KFに変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SVD505KF',
    unit: 'カ所',
    isOption: true,
    description: 'スマホで外から来客応対、録画機能、ドアホンから玄関ドアの施解錠可、スマホで玄関ドアの施解錠可',
    variants: [
      { id: 'v1', color: '外でもドアホン', colorCode: '#FFFFFF', modelNumber: 'VL-SVD505KF' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 37000 },
      { plan: 'HOURS', planId: 'HOURS', price: 37000 },
      { plan: 'LIFE', planId: 'LIFE', price: 37000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 37000 }
    ]
  },

  // 外でもドアホン VL-SVD710KFに変更
  {
    id: 'int-intercom-svd710kf-change',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'インターホン変更',
    name: '外でもドアホン VL-SVD710KFに変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SVD710KF',
    unit: 'カ所',
    isOption: true,
    description: 'スマホで外から来客応対、録画機能、あんしん応対、ドアホンから玄関ドアの施解錠可、スマホで玄関ドアの施解錠可',
    variants: [
      { id: 'v1', color: '外でもドアホン', colorCode: '#FFFFFF', modelNumber: 'VL-SVD710KF' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 50000 },
      { plan: 'HOURS', planId: 'HOURS', price: 50000 },
      { plan: 'LIFE', planId: 'LIFE', price: 50000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 50000 }
    ]
  },

  // テレビドアホン VL-SE50KPAに変更
  {
    id: 'int-intercom-se50kpa-change',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'インターホン変更',
    name: 'テレビドアホン VL-SE50KPAに変更',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SE50KPA',
    unit: 'カ所',
    isOption: true,
    description: '録画機能（SDカード別途必要）、増設モニター追加可能',
    variants: [
      { id: 'v1', color: 'テレビドアホン', colorCode: '#FFFFFF', modelNumber: 'VL-SE50KPA' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 27000 },
      { plan: 'HOURS', planId: 'HOURS', price: 27000 },
      { plan: 'LIFE', planId: 'LIFE', price: 27000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 27000 }
    ]
  },

  // どこでもドアホン VL-SVE310KLA 1セット追加
  {
    id: 'int-intercom-sve310kla-add',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'インターホン追加',
    name: 'どこでもドアホン VL-SVE310KLA 1セット追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SVE310KLA',
    unit: 'カ所',
    isOption: true,
    description: 'どこでもドアホン（玄関子機＋モニター親機）1セット追加',
    variants: [
      { id: 'v1', color: 'どこでもドアホン', colorCode: '#FFFFFF', modelNumber: 'VL-SVE310KLA' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 40000 },
      { plan: 'HOURS', planId: 'HOURS', price: 40000 },
      { plan: 'LIFE', planId: 'LIFE', price: 40000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 40000 }
    ]
  },

  // 外でもドアホン VL-SVD505KF 1セット追加
  {
    id: 'int-intercom-svd505kf-add',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'インターホン追加',
    name: '外でもドアホン VL-SVD505KF 1セット追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SVD505KF-ADD',
    unit: 'カ所',
    isOption: true,
    description: '外でもドアホン（玄関子機＋モニター親機）1セット追加',
    variants: [
      { id: 'v1', color: '外でもドアホン', colorCode: '#FFFFFF', modelNumber: 'VL-SVD505KF-ADD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 75000 },
      { plan: 'HOURS', planId: 'HOURS', price: 75000 },
      { plan: 'LIFE', planId: 'LIFE', price: 75000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 75000 }
    ]
  },

  // 外でもドアホン VL-SVD710KF 1セット追加
  {
    id: 'int-intercom-svd710kf-add',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'インターホン追加',
    name: '外でもドアホン VL-SVD710KF 1セット追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SVD710KF-ADD',
    unit: 'カ所',
    isOption: true,
    description: '外でもドアホン（玄関子機＋モニター親機）1セット追加',
    variants: [
      { id: 'v1', color: '外でもドアホン', colorCode: '#FFFFFF', modelNumber: 'VL-SVD710KF-ADD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 87000 },
      { plan: 'HOURS', planId: 'HOURS', price: 87000 },
      { plan: 'LIFE', planId: 'LIFE', price: 87000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 87000 }
    ]
  },

  // テレビドアホン VL-SE50KPA 1セット追加
  {
    id: 'int-intercom-se50kpa-add',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'インターホン追加',
    name: 'テレビドアホン VL-SE50KPA 1セット追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-SE50KPA-ADD',
    unit: 'カ所',
    isOption: true,
    description: 'テレビドアホン（玄関子機＋モニター親機）1セット追加',
    variants: [
      { id: 'v1', color: 'テレビドアホン', colorCode: '#FFFFFF', modelNumber: 'VL-SE50KPA-ADD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 64000 },
      { plan: 'HOURS', planId: 'HOURS', price: 64000 },
      { plan: 'LIFE', planId: 'LIFE', price: 64000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 64000 }
    ]
  },

  // ワイヤレスモニター子機VL-WD623追加
  {
    id: 'int-intercom-wd623-add',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'ワイヤレス子機',
    name: 'ワイヤレスモニター子機VL-WD623追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-WD623',
    unit: 'カ所',
    isOption: true,
    description: 'ワイヤレスモニター子機（VL-SWE310KLA用）追加',
    variants: [
      { id: 'v1', color: 'ワイヤレス子機', colorCode: '#FFFFFF', modelNumber: 'VL-WD623' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 18000 },
      { plan: 'HOURS', planId: 'HOURS', price: 18000 },
      { plan: 'LIFE', planId: 'LIFE', price: 18000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 18000 }
    ]
  },

  // ワイヤレスモニター子機VL-WD618追加
  {
    id: 'int-intercom-wd618-add',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'ワイヤレス子機',
    name: 'ワイヤレスモニター子機VL-WD618追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-WD618',
    unit: 'カ所',
    isOption: true,
    description: 'ワイヤレスモニター子機（VL-SWD505KF用）追加',
    variants: [
      { id: 'v1', color: 'ワイヤレス子機', colorCode: '#FFFFFF', modelNumber: 'VL-WD618' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 18000 },
      { plan: 'HOURS', planId: 'HOURS', price: 18000 },
      { plan: 'LIFE', planId: 'LIFE', price: 18000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 18000 }
    ]
  },

  // ワイヤレスモニター子機VL-WD616追加
  {
    id: 'int-intercom-wd616-add',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: 'ワイヤレス子機',
    name: 'ワイヤレスモニター子機VL-WD616追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-WD616',
    unit: 'カ所',
    isOption: true,
    description: 'ワイヤレスモニター子機（VL-SWD710KF用）追加',
    variants: [
      { id: 'v1', color: 'ワイヤレス子機', colorCode: '#FFFFFF', modelNumber: 'VL-WD616' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 20000 },
      { plan: 'HOURS', planId: 'HOURS', price: 20000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 20000 }
    ]
  },

  // 増設モニターVL-V632K追加
  {
    id: 'int-intercom-v632k-add',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: '増設モニター',
    name: '増設モニターVL-V632K追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-V632K',
    unit: 'カ所',
    isOption: true,
    description: '増設モニター（VL-SE50KPA用）追加',
    variants: [
      { id: 'v1', color: '増設モニター', colorCode: '#FFFFFF', modelNumber: 'VL-V632K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 24000 },
      { plan: 'HOURS', planId: 'HOURS', price: 24000 },
      { plan: 'LIFE', planId: 'LIFE', price: 24000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 24000 }
    ]
  },

  // 増設モニターVL-VH673K追加
  {
    id: 'int-intercom-vh673k-add',
    categoryId: 'interior-intercom',
    categoryName: 'インターホン',
    subcategory: '増設モニター',
    name: '増設モニターVL-VH673K追加',
    manufacturer: 'Panasonic',
    modelNumber: 'VL-VH673K',
    unit: 'カ所',
    isOption: true,
    description: '増設モニター（VL-SVD710KF用）追加',
    variants: [
      { id: 'v1', color: '増設モニター', colorCode: '#FFFFFF', modelNumber: 'VL-VH673K' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 62000 },
      { plan: 'HOURS', planId: 'HOURS', price: 62000 },
      { plan: 'LIFE', planId: 'LIFE', price: 62000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 62000 }
    ]
  },

  // ============================================
  // 内部部品 - エアコン
  // ============================================

  // 三菱電機 霧ヶ峰 Zシリーズ 6畳用100V
  {
    id: 'int-aircon-mitsubishi-z-6',
    categoryId: 'interior-aircon',
    categoryName: 'エアコン',
    subcategory: '三菱電機 霧ヶ峰 Zシリーズ',
    name: '三菱電機 霧ヶ峰 Zシリーズ 6畳用100V',
    manufacturer: '三菱電機',
    modelNumber: 'MSZ-ZXV2225',
    unit: 'カ所',
    isOption: true,
    description: 'さらっと除湿冷房（室温の下がらない再熱除湿方式）',
    variants: [
      { id: 'v1', color: '1階設置', colorCode: '#FFFFFF', modelNumber: 'MSZ-ZXV2225-1F' },
      { id: 'v2', color: '2階設置', colorCode: '#FFFFFF', modelNumber: 'MSZ-ZXV2225-2F' },
      { id: 'v3', color: '3階設置', colorCode: '#FFFFFF', modelNumber: 'MSZ-ZXV2225-3F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 235000 },
      { plan: 'HOURS', planId: 'HOURS', price: 235000 },
      { plan: 'LIFE', planId: 'LIFE', price: 235000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 235000 }
    ]
  },

  // 三菱電機 霧ヶ峰 Zシリーズ 10畳用200V
  {
    id: 'int-aircon-mitsubishi-z-10',
    categoryId: 'interior-aircon',
    categoryName: 'エアコン',
    subcategory: '三菱電機 霧ヶ峰 Zシリーズ',
    name: '三菱電機 霧ヶ峰 Zシリーズ 10畳用200V',
    manufacturer: '三菱電機',
    modelNumber: 'MSZ-ZXV2825S',
    unit: 'カ所',
    isOption: true,
    description: 'さらっと除湿冷房（室温の下がらない再熱除湿方式）',
    variants: [
      { id: 'v1', color: '1階設置', colorCode: '#FFFFFF', modelNumber: 'MSZ-ZXV2825S-1F' },
      { id: 'v2', color: '2階設置', colorCode: '#FFFFFF', modelNumber: 'MSZ-ZXV2825S-2F' },
      { id: 'v3', color: '3階設置', colorCode: '#FFFFFF', modelNumber: 'MSZ-ZXV2825S-3F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 274000 },
      { plan: 'HOURS', planId: 'HOURS', price: 274000 },
      { plan: 'LIFE', planId: 'LIFE', price: 274000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 274000 }
    ]
  },

  // 三菱電機 霧ヶ峰 Zシリーズ 14畳用200V
  {
    id: 'int-aircon-mitsubishi-z-14',
    categoryId: 'interior-aircon',
    categoryName: 'エアコン',
    subcategory: '三菱電機 霧ヶ峰 Zシリーズ',
    name: '三菱電機 霧ヶ峰 Zシリーズ 14畳用200V',
    manufacturer: '三菱電機',
    modelNumber: 'MSZ-ZXV4025S',
    unit: 'カ所',
    isOption: true,
    description: 'さらっと除湿冷房（室温の下がらない再熱除湿方式）',
    variants: [
      { id: 'v1', color: '1階設置', colorCode: '#FFFFFF', modelNumber: 'MSZ-ZXV4025S-1F' },
      { id: 'v2', color: '2階設置', colorCode: '#FFFFFF', modelNumber: 'MSZ-ZXV4025S-2F' },
      { id: 'v3', color: '3階設置', colorCode: '#FFFFFF', modelNumber: 'MSZ-ZXV4025S-3F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 300000 },
      { plan: 'HOURS', planId: 'HOURS', price: 300000 },
      { plan: 'LIFE', planId: 'LIFE', price: 300000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 300000 }
    ]
  },

  // ダイキン GXシリーズ 6畳用100V
  {
    id: 'int-aircon-daikin-gx-6',
    categoryId: 'interior-aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン GXシリーズ',
    name: 'ダイキン GXシリーズ 6畳用100V',
    manufacturer: 'ダイキン',
    modelNumber: 'S224ATGS-W',
    unit: 'カ所',
    isOption: true,
    description: 'さらら除湿（ハイブリッド方式）再熱除湿と弱冷房除湿の中間',
    variants: [
      { id: 'v1', color: '1階設置', colorCode: '#FFFFFF', modelNumber: 'S224ATGS-W-1F' },
      { id: 'v2', color: '2階設置', colorCode: '#FFFFFF', modelNumber: 'S224ATGS-W-2F' },
      { id: 'v3', color: '3階設置', colorCode: '#FFFFFF', modelNumber: 'S224ATGS-W-3F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 165000 },
      { plan: 'HOURS', planId: 'HOURS', price: 165000 },
      { plan: 'LIFE', planId: 'LIFE', price: 165000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 165000 }
    ]
  },

  // ダイキン GXシリーズ 10畳用100V
  {
    id: 'int-aircon-daikin-gx-10',
    categoryId: 'interior-aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン GXシリーズ',
    name: 'ダイキン GXシリーズ 10畳用100V',
    manufacturer: 'ダイキン',
    modelNumber: 'S284ATGS-W',
    unit: 'カ所',
    isOption: true,
    description: 'さらら除湿（ハイブリッド方式）再熱除湿と弱冷房除湿の中間',
    variants: [
      { id: 'v1', color: '1階設置', colorCode: '#FFFFFF', modelNumber: 'S284ATGS-W-1F' },
      { id: 'v2', color: '2階設置', colorCode: '#FFFFFF', modelNumber: 'S284ATGS-W-2F' },
      { id: 'v3', color: '3階設置', colorCode: '#FFFFFF', modelNumber: 'S284ATGS-W-3F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 188000 },
      { plan: 'HOURS', planId: 'HOURS', price: 188000 },
      { plan: 'LIFE', planId: 'LIFE', price: 188000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 188000 }
    ]
  },

  // ダイキン GXシリーズ 14畳用200V
  {
    id: 'int-aircon-daikin-gx-14',
    categoryId: 'interior-aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン GXシリーズ',
    name: 'ダイキン GXシリーズ 14畳用200V',
    manufacturer: 'ダイキン',
    modelNumber: 'S404ATGP-W',
    unit: 'カ所',
    isOption: true,
    description: 'さらら除湿（ハイブリッド方式）再熱除湿と弱冷房除湿の中間',
    variants: [
      { id: 'v1', color: '1階設置', colorCode: '#FFFFFF', modelNumber: 'S404ATGP-W-1F' },
      { id: 'v2', color: '2階設置', colorCode: '#FFFFFF', modelNumber: 'S404ATGP-W-2F' },
      { id: 'v3', color: '3階設置', colorCode: '#FFFFFF', modelNumber: 'S404ATGP-W-3F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 218000 },
      { plan: 'HOURS', planId: 'HOURS', price: 218000 },
      { plan: 'LIFE', planId: 'LIFE', price: 218000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 218000 }
    ]
  },

  // ダイキン Eシリーズ 6畳用100V
  {
    id: 'int-aircon-daikin-e-6',
    categoryId: 'interior-aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン Eシリーズ',
    name: 'ダイキン Eシリーズ 6畳用100V',
    manufacturer: 'ダイキン',
    modelNumber: 'S225ATES-W',
    unit: 'カ所',
    isOption: true,
    description: '9段階セレクトドライ（弱冷房除湿）',
    variants: [
      { id: 'v1', color: '1階設置', colorCode: '#FFFFFF', modelNumber: 'S225ATES-W-1F' },
      { id: 'v2', color: '2階設置', colorCode: '#FFFFFF', modelNumber: 'S225ATES-W-2F' },
      { id: 'v3', color: '3階設置', colorCode: '#FFFFFF', modelNumber: 'S225ATES-W-3F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 110000 },
      { plan: 'HOURS', planId: 'HOURS', price: 110000 },
      { plan: 'LIFE', planId: 'LIFE', price: 110000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 110000 }
    ]
  },

  // ダイキン Eシリーズ 10畳用100V
  {
    id: 'int-aircon-daikin-e-10',
    categoryId: 'interior-aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン Eシリーズ',
    name: 'ダイキン Eシリーズ 10畳用100V',
    manufacturer: 'ダイキン',
    modelNumber: 'S285ATES-W',
    unit: 'カ所',
    isOption: true,
    description: '9段階セレクトドライ（弱冷房除湿）',
    variants: [
      { id: 'v1', color: '1階設置', colorCode: '#FFFFFF', modelNumber: 'S285ATES-W-1F' },
      { id: 'v2', color: '2階設置', colorCode: '#FFFFFF', modelNumber: 'S285ATES-W-2F' },
      { id: 'v3', color: '3階設置', colorCode: '#FFFFFF', modelNumber: 'S285ATES-W-3F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 150000 },
      { plan: 'HOURS', planId: 'HOURS', price: 150000 },
      { plan: 'LIFE', planId: 'LIFE', price: 150000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 150000 }
    ]
  },

  // ダイキン Eシリーズ 14畳用200V
  {
    id: 'int-aircon-daikin-e-14',
    categoryId: 'interior-aircon',
    categoryName: 'エアコン',
    subcategory: 'ダイキン Eシリーズ',
    name: 'ダイキン Eシリーズ 14畳用200V',
    manufacturer: 'ダイキン',
    modelNumber: 'S405ATEP-W',
    unit: 'カ所',
    isOption: true,
    description: '9段階セレクトドライ（弱冷房除湿）',
    variants: [
      { id: 'v1', color: '1階設置', colorCode: '#FFFFFF', modelNumber: 'S405ATEP-W-1F' },
      { id: 'v2', color: '2階設置', colorCode: '#FFFFFF', modelNumber: 'S405ATEP-W-2F' },
      { id: 'v3', color: '3階設置', colorCode: '#FFFFFF', modelNumber: 'S405ATEP-W-3F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 192000 },
      { plan: 'HOURS', planId: 'HOURS', price: 192000 },
      { plan: 'LIFE', planId: 'LIFE', price: 192000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 192000 }
    ]
  },

  // ============================================
  // 内部部品 - ダウンライト施工費
  // ============================================

  // ダウンライト施工費（10個まで）
  {
    id: 'int-downlight-base',
    categoryId: 'interior-lighting',
    categoryName: 'ダウンライト施工費',
    subcategory: '施工費',
    name: 'ダウンライト施工費（10個まで）',
    manufacturer: '-',
    modelNumber: 'DOWNLIGHT-BASE',
    unit: '一式',
    isOption: true,
    description: '省令準耐火仕様のため必要な施工。照明器具は別費用。',
    variants: [
      { id: 'v1', color: '10個まで', colorCode: '#FFFFFF', modelNumber: 'DOWNLIGHT-BASE' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 60000 },
      { plan: 'HOURS', planId: 'HOURS', price: 60000 },
      { plan: 'LIFE', planId: 'LIFE', price: 60000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  },

  // ダウンライト施工費（11個目から）
  {
    id: 'int-downlight-additional',
    categoryId: 'interior-lighting',
    categoryName: 'ダウンライト施工費',
    subcategory: '施工費',
    name: 'ダウンライト施工費（11個目から）',
    manufacturer: '-',
    modelNumber: 'DOWNLIGHT-ADD',
    unit: '個',
    isOption: true,
    description: '省令準耐火仕様のため必要な施工。照明器具は別費用。',
    variants: [
      { id: 'v1', color: '11個目以降', colorCode: '#FFFFFF', modelNumber: 'DOWNLIGHT-ADD' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 3000 },
      { plan: 'HOURS', planId: 'HOURS', price: 3000 },
      { plan: 'LIFE', planId: 'LIFE', price: 3000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 3000 }
    ]
  },

  // ============================================
  // 内部部品 - 洗濯機混合水栓
  // ============================================

  // 洗濯機混合水栓へ変更
  {
    id: 'int-laundry-mixer-faucet',
    categoryId: 'interior-laundry',
    categoryName: '洗濯機混合水栓',
    subcategory: '水栓',
    name: '洗濯機混合水栓へ変更',
    manufacturer: '-',
    modelNumber: 'LAUNDRY-MIXER',
    unit: 'カ所',
    isOption: true,
    description: '洗濯機用混合水栓へ変更',
    variants: [
      { id: 'v1', color: '混合水栓', colorCode: '#FFFFFF', modelNumber: 'LAUNDRY-MIXER' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 36000 },
      { plan: 'HOURS', planId: 'HOURS', price: 36000 },
      { plan: 'LIFE', planId: 'LIFE', price: 36000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 36000 }
    ]
  },

  // ============================================
  // 内部部品 - ナノバブル発生装置
  // ============================================

  // ナノバブル発生装置 BeautyAqua
  {
    id: 'int-nanobubble-beautyaqua',
    categoryId: 'interior-water',
    categoryName: 'ナノバブル発生装置',
    subcategory: 'BeautyAqua',
    name: 'ナノバブル発生装置 BeautyAqua',
    manufacturer: 'BeautyAqua',
    modelNumber: 'BEAUTYAQUA-20A',
    unit: '一式',
    isOption: true,
    description: 'ナノバブル発生装置 BeautyAqua 20A',
    variants: [
      { id: 'v1', color: 'BeautyAqua', colorCode: '#FFFFFF', modelNumber: 'BEAUTYAQUA-20A' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 200000 },
      { plan: 'HOURS', planId: 'HOURS', price: 200000 },
      { plan: 'LIFE', planId: 'LIFE', price: 200000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 200000 }
    ]
  },

  // ============================================
  // 内部部品 - アクセサリー
  // ============================================

  // ペーパーホルダー（亜鉛ダイカスト素材）
  {
    id: 'int-accessory-paper-holder',
    categoryId: 'interior-accessory',
    categoryName: 'アクセサリー',
    subcategory: 'ペーパーホルダー',
    name: 'ペーパーホルダー',
    manufacturer: '三栄',
    modelNumber: 'W3701',
    unit: '個',
    isOption: false,
    description: 'ペーパーホルダー（亜鉛ダイカスト素材）※スロップシンクには付属いたしません',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', modelNumber: 'W3701-C' },
      { id: 'v2', color: 'ブラック', colorCode: '#2C2C2C', modelNumber: 'W3701-D' },
      { id: 'v3', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W3701-W' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ペーパーホルダー 2連（亜鉛ダイカスト素材）
  {
    id: 'int-accessory-paper-holder-double',
    categoryId: 'interior-accessory',
    categoryName: 'アクセサリー',
    subcategory: 'ペーパーホルダー',
    name: 'ペーパーホルダー 2連',
    manufacturer: '三栄',
    modelNumber: 'W3801',
    unit: '個',
    isOption: false,
    description: 'ペーパーホルダー 2連（亜鉛ダイカスト素材）※スロップシンクには付属いたしません',
    variants: [
      { id: 'v1', color: 'シルバー', colorCode: '#C0C0C0', modelNumber: 'W3801-C' },
      { id: 'v2', color: 'ブラック', colorCode: '#2C2C2C', modelNumber: 'W3801-D' },
      { id: 'v3', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W3801-W' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // タオルバー（アイアン）
  {
    id: 'int-accessory-towel-bar',
    categoryId: 'interior-accessory',
    categoryName: 'アクセサリー',
    subcategory: 'タオルバー',
    name: 'タオルバー',
    manufacturer: '三栄',
    modelNumber: 'W5717-365',
    unit: '個',
    isOption: false,
    description: 'タオルバー（アイアン）※スロップシンクには付属いたしません',
    variants: [
      { id: 'v1', color: 'ブラック', colorCode: '#2C2C2C', modelNumber: 'W5717-365-D' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W5717-365-W' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // タオルリング（アイアン）
  {
    id: 'int-accessory-towel-ring',
    categoryId: 'interior-accessory',
    categoryName: 'アクセサリー',
    subcategory: 'タオルリング',
    name: 'タオルリング',
    manufacturer: '三栄',
    modelNumber: 'W5707',
    unit: '個',
    isOption: false,
    description: 'タオルリング（アイアン）※スロップシンクには付属いたしません',
    variants: [
      { id: 'v1', color: 'ブラック', colorCode: '#2C2C2C', modelNumber: 'W5707-D' },
      { id: 'v2', color: 'ホワイト', colorCode: '#FFFFFF', modelNumber: 'W5707-W' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  }
];