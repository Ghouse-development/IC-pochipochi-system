// エクステリア（外装）製品データ - CSVから抽出した完全版
import type { Product } from '../types/product';

export const exteriorProductsComplete: Product[] = [
  // ===== ニチハ 標準仕様 =====

  // モナビストーンV
  {
    id: 'ext-wall-monabistone-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'モナビストーンV',
    manufacturer: 'ニチハ',
    modelNumber: 'MONABISTONE-V',
    unit: '㎡',
    isOption: false,
    description: '高品質な窯業系サイディング',
    variants: [
      { id: 'v1', color: 'フローMGグレー', colorCode: '#8B8C8E', modelNumber: 'EFA5256FK' },
      { id: 'v2', color: 'フローMGブラック', colorCode: '#2C2C2E', modelNumber: 'EFA5257FK' },
      { id: 'v3', color: 'フローMGクリアホワイト', colorCode: '#FAFBFC', modelNumber: 'EFA5251GK' },
      { id: 'v4', color: 'フローMGホワイト', colorCode: '#F5F5F3', modelNumber: 'EFA5252GK' },
      { id: 'v5', color: 'フローMGクリーム', colorCode: '#FFF8DC', modelNumber: 'EFA5253GK' },
      { id: 'v6', color: 'フローMGネイビー', colorCode: '#2F3E4C', modelNumber: 'EFA5254TK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // シャルムロックV
  {
    id: 'ext-wall-sharmrock-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'シャルムロックV',
    manufacturer: 'ニチハ',
    modelNumber: 'SHARMROCK-V',
    unit: '㎡',
    isOption: false,
    description: 'レンガ調の高品質サイディング',
    variants: [
      { id: 'v1', color: 'コンティMGホワイト', colorCode: '#FAFAFA', modelNumber: 'EFA2851FK' },
      { id: 'v2', color: 'コンティMGアッシュ', colorCode: '#C4C4C4', modelNumber: 'EFA2852FK' },
      { id: 'v3', color: 'コンティMGアイボリー', colorCode: '#FFFFF0', modelNumber: 'EFA2853FK' },
      { id: 'v4', color: 'コンティMGブラウン', colorCode: '#8B4513', modelNumber: 'EFA2854FK' },
      { id: 'v5', color: 'コンティMGグレー', colorCode: '#808080', modelNumber: 'EFA2855FK' },
      { id: 'v6', color: 'コンティMGチャコール', colorCode: '#36454F', modelNumber: 'EFA2856CK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // リーガストーン調V
  {
    id: 'ext-wall-legalstone-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'リーガストーン調V',
    manufacturer: 'ニチハ',
    modelNumber: 'LEGALSTONE-V',
    unit: '㎡',
    isOption: false,
    description: '石材調の高級サイディング',
    variants: [
      { id: 'v1', color: 'ランダMGプラチナ', colorCode: '#E5E4E2', modelNumber: 'EFX3455CK' },
      { id: 'v2', color: 'ランダMGブラック', colorCode: '#000000', modelNumber: 'EFX3457CK' },
      { id: 'v3', color: 'ランダMGラテ', colorCode: '#C8B88B', modelNumber: 'EFX3451NK' },
      { id: 'v4', color: 'ランダMGトリュフ', colorCode: '#5D4E37', modelNumber: 'EFX3452RK' },
      { id: 'v5', color: 'ランダMGパウダー', colorCode: '#F5F5DC', modelNumber: 'EFX3453CK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ディスタシェイドV
  {
    id: 'ext-wall-distashade-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'ディスタシェイドV',
    manufacturer: 'ニチハ',
    modelNumber: 'DISTASHADE-V',
    unit: '㎡',
    isOption: false,
    description: '陰影が美しいモダンサイディング',
    variants: [
      { id: 'v1', color: 'ストレムMGホワイト', colorCode: '#FFFFFF', modelNumber: 'EFA5451YK' },
      { id: 'v2', color: 'ストレムMGクリーム', colorCode: '#FFFDD0', modelNumber: 'EFA5452YK' },
      { id: 'v3', color: 'ストレムMGブラウン', colorCode: '#8B4513', modelNumber: 'EFA5453YK' },
      { id: 'v4', color: 'ストレムMGセピア', colorCode: '#704214', modelNumber: 'EFA5454LK' },
      { id: 'v5', color: 'ストレムMGネイビー', colorCode: '#2F3E4C', modelNumber: 'EFA5456YK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ボルブストーン調V
  {
    id: 'ext-wall-volvstone-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'ボルブストーン調V',
    manufacturer: 'ニチハ',
    modelNumber: 'VOLVSTONE-V',
    unit: '㎡',
    isOption: false,
    description: '重厚感のある石材調サイディング',
    variants: [
      { id: 'v1', color: 'エアルMGスノー', colorCode: '#FFFAFA', modelNumber: 'EFX3151FK' },
      { id: 'v2', color: 'エアルMGラテ', colorCode: '#C8B88B', modelNumber: 'EFX3152FK' },
      { id: 'v3', color: 'エアルMGトリュフ', colorCode: '#5D4E37', modelNumber: 'EFX3153LK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // スプリットストーン調V
  {
    id: 'ext-wall-splitstone-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'スプリットストーン調V',
    manufacturer: 'ニチハ',
    modelNumber: 'SPLITSTONE-V',
    unit: '㎡',
    isOption: false,
    description: '割石調の自然な風合い',
    variants: [
      { id: 'v1', color: 'アプラMGクリーム', colorCode: '#FFFDD0', modelNumber: 'EFX1651NK' },
      { id: 'v2', color: 'アプラMGワイン', colorCode: '#722F37', modelNumber: 'EFX1652NK' },
      { id: 'v3', color: 'アプラMGキャロット', colorCode: '#ED9121', modelNumber: 'EFX1653NK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // コルモストーン調V
  {
    id: 'ext-wall-cormostone-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'コルモストーン調V',
    manufacturer: 'ニチハ',
    modelNumber: 'CORMOSTONE-V',
    unit: '㎡',
    isOption: false,
    description: 'ナチュラルな石材調サイディング',
    variants: [
      { id: 'v1', color: 'フォンドMGシュガー', colorCode: '#FFF8E7', modelNumber: 'EFX3351NK' },
      { id: 'v2', color: 'フォンドMGリーフ', colorCode: '#90A959', modelNumber: 'EFX3352NK' },
      { id: 'v3', color: 'フォンドMGショコラ', colorCode: '#3B2F2F', modelNumber: 'EFX3353RK' },
      { id: 'v4', color: 'フォンドMGダーク', colorCode: '#2F2F2F', modelNumber: 'EFX3355NK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // グレインウッドV
  {
    id: 'ext-wall-grainwood-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'グレインウッドV',
    manufacturer: 'ニチハ',
    modelNumber: 'GRAINWOOD-V',
    unit: '㎡',
    isOption: false,
    description: '木目調の温かみのあるサイディング',
    variants: [
      { id: 'v1', color: 'スペリオMGナチュラル', colorCode: '#D2B48C', modelNumber: 'EFA2251FK' },
      { id: 'v2', color: 'スペリオMGウォルナット', colorCode: '#5D4037', modelNumber: 'EFA2256FK' },
      { id: 'v3', color: 'スペリオMGブラック', colorCode: '#000000', modelNumber: 'EFA2255LK' },
      { id: 'v4', color: 'スペリオMGネイビー', colorCode: '#2F3E4C', modelNumber: 'EFA2258YK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // マイスターウッド調V
  {
    id: 'ext-wall-meisterwood-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'マイスターウッド調V',
    manufacturer: 'ニチハ',
    modelNumber: 'MEISTERWOOD-V',
    unit: '㎡',
    isOption: false,
    description: '高級木目調サイディング',
    variants: [
      { id: 'v1', color: 'イデアルMGボルドー', colorCode: '#722F37', modelNumber: 'EF9355FK' },
      { id: 'v2', color: 'イデアルMGチャコール', colorCode: '#36454F', modelNumber: 'EF9356FK' },
      { id: 'v3', color: 'イデアルMGブラウン', colorCode: '#8B4513', modelNumber: 'EF9357GK' },
      { id: 'v4', color: 'イデアルMGグレー', colorCode: '#808080', modelNumber: 'EF9358YK' },
      { id: 'v5', color: 'イデアルMGグリーン', colorCode: '#2E7D32', modelNumber: 'EF9359YK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // しぶきV
  {
    id: 'ext-wall-shibuki-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'しぶきV',
    manufacturer: 'ニチハ',
    modelNumber: 'SHIBUKI-V',
    unit: '㎡',
    isOption: false,
    description: '塗り壁調の風合い',
    variants: [
      { id: 'v1', color: 'プラムMGバニラホワイトⅡ', colorCode: '#FFF8DC', modelNumber: 'EF5356C2K' },
      { id: 'v2', color: 'プラムMGアッシュⅡ', colorCode: '#C4C4C4', modelNumber: 'EF5357JK' },
      { id: 'v3', color: 'プラムMGクリームⅡ', colorCode: '#FFFDD0', modelNumber: 'EF5358JK' },
      { id: 'v4', color: 'プラムMGブラウンⅡ', colorCode: '#8B4513', modelNumber: 'EF5359JK' },
      { id: 'v5', color: 'プラムMGセピアⅡ', colorCode: '#704214', modelNumber: 'EF5362JK' },
      { id: 'v6', color: 'プラムMGウィニーホワイトⅡ', colorCode: '#FAFAFA', modelNumber: 'EF5363GK' },
      { id: 'v7', color: 'プラムMGシェルトグレーⅡ', colorCode: '#D3D3D3', modelNumber: 'EF5364GK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // アフェットV
  {
    id: 'ext-wall-affetto-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'アフェットV',
    manufacturer: 'ニチハ',
    modelNumber: 'AFFETTO-V',
    unit: '㎡',
    isOption: false,
    description: 'エレガントな表情のサイディング',
    variants: [
      { id: 'v1', color: 'ブリジェMGセピア', colorCode: '#704214', modelNumber: 'EFA5351FK' },
      { id: 'v2', color: 'ブリジェMGピアラシルク', colorCode: '#F5F5DC', modelNumber: 'EFA5353FK' },
      { id: 'v3', color: 'ブリジェMGウォームグレー', colorCode: '#808080', modelNumber: 'EFA5354FK' },
      { id: 'v4', color: 'ブリジェMGシェルトグレー', colorCode: '#D3D3D3', modelNumber: 'EFA5355FK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ロックラインV
  {
    id: 'ext-wall-rockline-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'ロックラインV',
    manufacturer: 'ニチハ',
    modelNumber: 'ROCKLINE-V',
    unit: '㎡',
    isOption: false,
    description: 'モダンなライン柄サイディング',
    variants: [
      { id: 'v1', color: 'プラムMGホワイトⅡ', colorCode: '#FFFFFF', modelNumber: 'EF9051GK' },
      { id: 'v2', color: 'プラムMGアイボリーⅡ', colorCode: '#FFFFF0', modelNumber: 'EF9052GK' },
      { id: 'v3', color: 'プラムMGアッシュⅡ', colorCode: '#C4C4C4', modelNumber: 'EF9053GK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ナチュラルラインV
  {
    id: 'ext-wall-naturalline-v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'ナチュラルラインV',
    manufacturer: 'ニチハ',
    modelNumber: 'NATURALLINE-V',
    unit: '㎡',
    isOption: false,
    description: 'ナチュラルなストライプ柄',
    variants: [
      { id: 'v1', color: 'プラムMGホワイトⅡ', colorCode: '#FFFFFF', modelNumber: 'EFX3751GK' },
      { id: 'v2', color: 'プラムMGアイボリーⅡ', colorCode: '#FFFFF0', modelNumber: 'EFX3752GK' },
      { id: 'v3', color: 'プラムMGチャコールⅡ', colorCode: '#36454F', modelNumber: 'EFX3754TK' },
      { id: 'v4', color: 'プラムMGブルー', colorCode: '#4169E1', modelNumber: 'EFX3757GK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // コンクリート打ちっ放し16V
  {
    id: 'ext-wall-concrete-16v',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'コンクリート打ちっ放し16V',
    manufacturer: 'ニチハ',
    modelNumber: 'CONCRETE-16V',
    unit: '㎡',
    isOption: false,
    description: 'コンクリート打ちっ放し風サイディング',
    variants: [
      { id: 'v1', color: 'コンクリートMGライトグレー', colorCode: '#D3D3D3', modelNumber: 'EFA4351NK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== ニチハ プレミアムシリーズ（オプション） =====

  // スティルランバー プレミアム
  {
    id: 'ext-wall-still-lumber-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'スティルランバー プレミアム',
    manufacturer: 'ニチハ',
    modelNumber: 'STILL-LUMBER-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: 'プレミアム木目調サイディング',
    variants: [
      { id: 'v1', color: 'スティルMGアッシュホワイト30', colorCode: '#F5F5F5', modelNumber: 'ELS611Y' },
      { id: 'v2', color: 'スティルMGブラウン30', colorCode: '#8B4513', modelNumber: 'ELS612Y' },
      { id: 'v3', color: 'スティルMGアッシュブラウン30', colorCode: '#A67B5B', modelNumber: 'ELS613Y' },
      { id: 'v4', color: 'スティルMGブラック30', colorCode: '#000000', modelNumber: 'ELS614Y' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ミルシュタイン プレミアム
  {
    id: 'ext-wall-milstein-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'ミルシュタイン プレミアム',
    manufacturer: 'ニチハ',
    modelNumber: 'MILSTEIN-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: 'プレミアム石材調サイディング',
    variants: [
      { id: 'v1', color: 'ミルトMGホワイト30', colorCode: '#FFFFFF', modelNumber: 'ELS491P' },
      { id: 'v2', color: 'ミルトMGブラック30', colorCode: '#000000', modelNumber: 'ELS494P' },
      { id: 'v3', color: 'ミルトMGグレー30', colorCode: '#808080', modelNumber: 'ELS495P' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // プリレートプレミアム
  {
    id: 'ext-wall-prilete-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'プリレートプレミアム',
    manufacturer: 'ニチハ',
    modelNumber: 'PRILETE-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: 'プレミアム塗り壁調サイディング',
    variants: [
      { id: 'v1', color: 'クアラMGホワイト30', colorCode: '#FFFFFF', modelNumber: 'ELS421P' },
      { id: 'v2', color: 'クアラMGアイボリー30', colorCode: '#FFFFF0', modelNumber: 'ELS422P' },
      { id: 'v3', color: 'クアラMGオーカー30', colorCode: '#CC7722', modelNumber: 'ELS423P' },
      { id: 'v4', color: 'クアラMGネロ30', colorCode: '#252525', modelNumber: 'ELS426P' },
      { id: 'v5', color: 'クアラMGネイビー30', colorCode: '#000080', modelNumber: 'ELS427P' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // キャスティングウッド プレミアム
  {
    id: 'ext-wall-castingwood-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'キャスティングウッド プレミアム',
    manufacturer: 'ニチハ',
    modelNumber: 'CASTINGWOOD-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: 'リアルな木目調プレミアムサイディング',
    variants: [
      { id: 'v1', color: 'ホワイトアッシュMG30', colorCode: '#F5F5F5', modelNumber: 'ELG245NK' },
      { id: 'v2', color: 'ホワイトキャメルMG30', colorCode: '#C19A6B', modelNumber: 'ELG246NK' },
      { id: 'v3', color: 'ナチュラルオーカーMG30', colorCode: '#CC7722', modelNumber: 'ELG248NK' },
      { id: 'v4', color: 'ミディアムブラウンMG30', colorCode: '#8B4513', modelNumber: 'ELG241NK' },
      { id: 'v5', color: 'ダークブラウンMG30', colorCode: '#654321', modelNumber: 'ELG2410NK' },
      { id: 'v6', color: 'カーボンブラックMG30', colorCode: '#000000', modelNumber: 'ELG2411NK' },
      { id: 'v7', color: 'スモークシルバーMG30', colorCode: '#C0C0C0', modelNumber: 'ELG247NK' },
      { id: 'v8', color: 'ノースグリーンMG30', colorCode: '#2E8B57', modelNumber: 'ELG249NK' },
      { id: 'v9', color: 'ダークグリーンMG30', colorCode: '#013220', modelNumber: 'ELG2412NK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== ケイミュー（KMEW） =====

  // ハーモレイド
  {
    id: 'ext-wall-harmoraid',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'ハーモレイド',
    manufacturer: 'ケイミュー',
    modelNumber: 'HARMORAID',
    unit: '㎡',
    isOption: true,
    description: '調和の取れたモダンサイディング',
    variants: [
      { id: 'v1', color: 'QFマーチ チタン ホワイト', colorCode: '#FFFFFF', modelNumber: 'NH5201' },
      { id: 'v2', color: 'QFコンフォート チタン ベージュ', colorCode: '#F5DEB3', modelNumber: 'NH5202' },
      { id: 'v3', color: 'QFコンフォート チタン ブラウン', colorCode: '#8B4513', modelNumber: 'NH5203' },
      { id: 'v4', color: 'QFブリュレ チタン ブラック', colorCode: '#000000', modelNumber: 'NH5204' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // モダンスリット18
  {
    id: 'ext-wall-modern-slit-18',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'モダンスリット18',
    manufacturer: 'ケイミュー',
    modelNumber: 'MODERN-SLIT-18',
    unit: '㎡',
    isOption: true,
    description: 'モダンなスリットデザイン',
    variants: [
      { id: 'v1', color: 'QFシルク チタン ホワイト', colorCode: '#FFFFFF', modelNumber: 'NH5441' },
      { id: 'v2', color: 'QFアトランティック チタン ブルー', colorCode: '#4682B4', modelNumber: 'NH5445' },
      { id: 'v3', color: 'QFシルク チタン グレー', colorCode: '#808080', modelNumber: 'NH5447' },
      { id: 'v4', color: 'QFダークロースト チタン ブラウン', colorCode: '#3B2F2F', modelNumber: 'NH5449' },
      { id: 'v5', color: 'QFチャコール チタン ブラック', colorCode: '#36454F', modelNumber: 'NH54410' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // フィエルテ
  {
    id: 'ext-wall-fierte',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'フィエルテ',
    manufacturer: 'ケイミュー',
    modelNumber: 'FIERTE',
    unit: '㎡',
    isOption: true,
    description: 'コンクリート調高級サイディング',
    variants: [
      { id: 'v1', color: 'QFフィエルテ チタン コンクリート', colorCode: '#C0C0C0', modelNumber: 'NH4971A' },
      { id: 'v2', color: 'QFフィエルテ チタン アイロン', colorCode: '#8B7D6B', modelNumber: 'NH4976A' },
      { id: 'v3', color: 'QFフィエルテ チタン リトスオオヤ', colorCode: '#A0A0A0', modelNumber: 'NH4978A' },
      { id: 'v4', color: 'QFフィエルテ チタン マーブル', colorCode: '#F0F0F0', modelNumber: 'NH4975A' },
      { id: 'v5', color: 'QFフィエルテ チタン ダークコンクリート', colorCode: '#696969', modelNumber: 'NH4971IA' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // SOLIDO（ソリド）
  {
    id: 'ext-wall-solido',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'SOLIDO',
    manufacturer: 'ケイミュー',
    modelNumber: 'SOLIDO',
    unit: '㎡',
    isOption: true,
    description: '超高耐候・高品質サイディング',
    variants: [
      { id: 'v1', color: '鉄黒（てつぐろ）', colorCode: '#0C0C0C', modelNumber: 'SMG72G' },
      { id: 'v2', color: 'セメント', colorCode: '#C0C0C0', modelNumber: 'SMG85G' },
      { id: 'v3', color: '錆茶（さびちゃ）', colorCode: '#8B4513', modelNumber: 'SMG21G' },
      { id: 'v4', color: '灰（はい）', colorCode: '#808080', modelNumber: 'SMG65G' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 17000 },
      { plan: 'HOURS', planId: 'HOURS', price: 17000 },
      { plan: 'LIFE', planId: 'LIFE', price: 21500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 17000 }
    ]
  },

  // ===== IG工業（金属系サイディング） =====

  // SPビレクト
  {
    id: 'ext-wall-sp-bilect',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '金属系サイディング',
    name: 'SPビレクト',
    manufacturer: 'IG工業',
    modelNumber: 'SP-BILECT',
    unit: '㎡',
    isOption: true,
    description: 'モダンな金属系サイディング',
    variants: [
      { id: 'v1', color: 'マットブラック', colorCode: '#1C1C1C', modelNumber: 'SPI1-301' },
      { id: 'v2', color: 'クールブラウン', colorCode: '#8B7355', modelNumber: 'SPI1-383' },
      { id: 'v3', color: 'クールネイビー', colorCode: '#003F87', modelNumber: 'SPI1-384' },
      { id: 'v4', color: 'モスグリーン', colorCode: '#4A5D23', modelNumber: 'SPI1-394' },
      { id: 'v5', color: 'スマートガンメタ', colorCode: '#2C3539', modelNumber: 'SPI1-305' },
      { id: 'v6', color: 'ダークグレー', colorCode: '#404040', modelNumber: 'SPI1-315' },
      { id: 'v7', color: 'ライトアッシュ', colorCode: '#C4C4C4', modelNumber: 'SPI1-318' },
      { id: 'v8', color: 'ネオホワイト', colorCode: '#FAFAFA', modelNumber: 'SPI1-370' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 9500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // ガルスパン
  {
    id: 'ext-wall-galspan',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '金属系サイディング',
    name: 'ガルスパン',
    manufacturer: 'IG工業',
    modelNumber: 'GALSPAN',
    unit: '㎡',
    isOption: true,
    description: 'ガルバリウム鋼板サイディング',
    variants: [
      { id: 'v1', color: 'ネオブラック', colorCode: '#000000', modelNumber: 'SPJ1-310' },
      { id: 'v2', color: 'ビターブラウン', colorCode: '#593A27', modelNumber: 'SPJ1-358' },
      { id: 'v3', color: 'グランブルー', colorCode: '#003366', modelNumber: 'SPJ1-387' },
      { id: 'v4', color: 'モスグリーン', colorCode: '#4A5D23', modelNumber: 'SPJ1-394' },
      { id: 'v5', color: 'シャンパンメタリック', colorCode: '#F7E7CE', modelNumber: 'SPJ1-393' },
      { id: 'v6', color: 'シルバーメタリック', colorCode: '#C0C0C0', modelNumber: 'SPJ1-306' },
      { id: 'v7', color: 'ダークメタリック', colorCode: '#2F4F4F', modelNumber: 'SPJ1-380' },
      { id: 'v8', color: 'チタングレーメタリック', colorCode: '#566573', modelNumber: 'SPJ1-391' },
      { id: 'v9', color: 'オータムレッド', colorCode: '#CD5C5C', modelNumber: 'SPJ1-361' },
      { id: 'v10', color: 'カスタードイエロー', colorCode: '#F0E68C', modelNumber: 'SPJ1-355' },
      { id: 'v11', color: 'ミストアイボリー', colorCode: '#F5F5DC', modelNumber: 'SPJ1-337' },
      { id: 'v12', color: 'ネオホワイト', colorCode: '#FAFAFA', modelNumber: 'SPJ1-370' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 5000 },
      { plan: 'LIFE', planId: 'LIFE', price: 9500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 5000 }
    ]
  },

  // ===== 塗り壁 =====

  // 吹付塗装/エンシェントブリック
  {
    id: 'ext-wall-ancient-brick',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '塗り壁',
    name: '吹付塗装/エンシェントブリック',
    manufacturer: 'AICA',
    modelNumber: 'ANCIENT-BRICK',
    unit: '㎡',
    isOption: true,
    description: 'レンガ調の吹付塗装',
    variants: [
      { id: 'v1', color: 'T1010', colorCode: '#FFFFFF', modelNumber: 'T1010' },
      { id: 'v2', color: 'T3001', colorCode: '#F5DEB3', modelNumber: 'T3001' },
      { id: 'v3', color: 'T3005', colorCode: '#FFE4B5', modelNumber: 'T3005' },
      { id: 'v4', color: 'T3009', colorCode: '#D2B48C', modelNumber: 'T3009' },
      { id: 'v5', color: 'T3010', colorCode: '#DEB887', modelNumber: 'T3010' },
      { id: 'v6', color: 'T3400', colorCode: '#F4A460', modelNumber: 'T3400' },
      { id: 'v7', color: 'T4001', colorCode: '#8B7355', modelNumber: 'T4001' },
      { id: 'v8', color: 'T4024', colorCode: '#A0522D', modelNumber: 'T4024' },
      { id: 'v9', color: 'T4403', colorCode: '#8B4513', modelNumber: 'T4403' },
      { id: 'v10', color: 'T5009', colorCode: '#696969', modelNumber: 'T5009' },
      { id: 'v11', color: 'T5403', colorCode: '#708090', modelNumber: 'T5403' },
      { id: 'v12', color: 'T6013', colorCode: '#2F4F4F', modelNumber: 'T6013' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 8000 },
      { plan: 'LIFE', planId: 'LIFE', price: 12500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 8000 }
    ]
  },

  // 吹付塗装/ミーティア
  {
    id: 'ext-wall-meteor',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '塗り壁',
    name: '吹付塗装/ミーティア',
    manufacturer: 'AICA',
    modelNumber: 'METEOR',
    unit: '㎡',
    isOption: true,
    description: 'モダンな吹付塗装',
    variants: [
      { id: 'v1', color: 'T1010', colorCode: '#FFFFFF', modelNumber: 'T1010' },
      { id: 'v2', color: 'T3001', colorCode: '#F5DEB3', modelNumber: 'T3001' },
      { id: 'v3', color: 'T3005', colorCode: '#FFE4B5', modelNumber: 'T3005' },
      { id: 'v4', color: 'T3009', colorCode: '#D2B48C', modelNumber: 'T3009' },
      { id: 'v5', color: 'T3010', colorCode: '#DEB887', modelNumber: 'T3010' },
      { id: 'v6', color: 'T3400', colorCode: '#F4A460', modelNumber: 'T3400' },
      { id: 'v7', color: 'T4001', colorCode: '#8B7355', modelNumber: 'T4001' },
      { id: 'v8', color: 'T4024', colorCode: '#A0522D', modelNumber: 'T4024' },
      { id: 'v9', color: 'T4403', colorCode: '#8B4513', modelNumber: 'T4403' },
      { id: 'v10', color: 'T5009', colorCode: '#696969', modelNumber: 'T5009' },
      { id: 'v11', color: 'T5403', colorCode: '#708090', modelNumber: 'T5403' },
      { id: 'v12', color: 'T6013', colorCode: '#2F4F4F', modelNumber: 'T6013' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 8000 },
      { plan: 'LIFE', planId: 'LIFE', price: 12500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 8000 }
    ]
  },
  // シントア プレミアム
  {
    id: 'ext-wall-shintoa-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'シントア プレミアム',
    manufacturer: 'ニチハ',
    modelNumber: 'SHINTOA-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: 'Fu-geプレミアム シーリングレス外壁',
    variants: [
      { id: 'v1', color: 'シントアMGホワイト30', colorCode: '#FAFAFA', modelNumber: 'ELS461F' },
      { id: 'v2', color: 'シントアMGオフホワイト30', colorCode: '#F5F5DC', modelNumber: 'ELS462F' },
      { id: 'v3', color: 'シントアMGネイビー30', colorCode: '#2F2F4F', modelNumber: 'ELS463F' },
      { id: 'v4', color: 'シントアMGライトグレー30', colorCode: '#D3D3D3', modelNumber: 'ELS465F' },
      { id: 'v5', color: 'シントアMGミロリブルー30', colorCode: '#4169E1', modelNumber: 'ELS466F' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 4500 }
    ]
  },

  // スプーモ プレミアム
  {
    id: 'ext-wall-spumo-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'スプーモ プレミアム',
    manufacturer: 'ニチハ',
    modelNumber: 'SPUMO-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: 'Fu-geプレミアム シーリングレス外壁',
    variants: [
      { id: 'v1', color: 'プリミエMGホワイト30', colorCode: '#FAFAFA', modelNumber: 'ELS446E' },
      { id: 'v2', color: 'ラフラMGブラック30', colorCode: '#1C1C1C', modelNumber: 'ELS448E' },
      { id: 'v3', color: 'ラフラMGグレー30', colorCode: '#A9A9A9', modelNumber: 'ELS449E' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 4500 }
    ]
  },

  // ヴィンテージウッド プレミアム
  {
    id: 'ext-wall-vintagewood-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'ヴィンテージウッド プレミアム',
    manufacturer: 'ニチハ',
    modelNumber: 'VINTAGEWOOD-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: 'NOHASプレミアム 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'スキムドMGダルブラウン30', colorCode: '#8B7355', modelNumber: 'ELG762FK' },
      { id: 'v2', color: 'スキムドMGレッド30', colorCode: '#8B4513', modelNumber: 'ELG765FK' },
      { id: 'v3', color: 'スキムドMGアッシュ30', colorCode: '#A67B5B', modelNumber: 'ELG766FK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 4500 }
    ]
  },

  // コンクリート打ちっ放し16 プレミアム
  {
    id: 'ext-wall-concrete16-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'コンクリート打ちっ放し16 プレミアム',
    manufacturer: 'ニチハ',
    modelNumber: 'CONCRETE16-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: 'NOHASプレミアム 横張のみの採用となります',
    variants: [
      { id: 'v1', color: 'MGグレー30', colorCode: '#A9A9A9', modelNumber: 'ELG432NK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 4500 }
    ]
  },

  // シャルムロック プレミアム
  {
    id: 'ext-wall-sharmrock-premium',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'シャルムロック プレミアム',
    manufacturer: 'ニチハ',
    modelNumber: 'SHARMROCK-PREMIUM',
    unit: '㎡',
    isOption: true,
    description: 'NOHASプレミアム レンガ調サイディング',
    variants: [
      { id: 'v1', color: 'マハビMGルビー30', colorCode: '#722F37', modelNumber: 'ELG283FK' },
      { id: 'v2', color: 'マハビMGブラウン30', colorCode: '#5C4033', modelNumber: 'ELG284FK' },
      { id: 'v3', color: 'マハビMGスモーク30', colorCode: '#4A4A4A', modelNumber: 'ELG285FK' }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 4500 },
      { plan: 'HOURS', planId: 'HOURS', price: 4500 },
      { plan: 'LIFE', planId: 'LIFE', price: 4500 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 4500 }
    ]
  },
];