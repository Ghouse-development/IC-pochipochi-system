// インテリア（内装）製品データ - 製品と色バリアントの構造化版
import type { Product } from '../types/product';

export const interiorProductsRestructured: Product[] = [
  // ===== 床材 - 朝日ウッドテック ライブナチュラルプレミアム =====
  {
    id: 'int-floor-live-natural-premium',
    categoryId: 'interior-floor',
    categoryName: '床材',
    subcategory: 'フローリング',
    name: 'ライブナチュラルプレミアム',
    manufacturer: '朝日ウッドテック',
    modelNumber: 'LIVE-NATURAL-PREMIUM',
    unit: '㎡',
    isOption: false,
    description: '天然木の質感を活かした高級フローリング',
    variants: [
      {
        id: 'v1',
        color: 'オーク',
        colorCode: '#C8A882',
        modelNumber: 'LNP-OAK01',
        thumbnailUrl: '/images/interior/floors/live-oak.jpg',
        imageUrl: '/images/interior/floors/live-oak-large.jpg'
      },
      {
        id: 'v2',
        color: 'ウォールナット',
        colorCode: '#5D4037',
        modelNumber: 'LNP-WAL01',
        thumbnailUrl: '/images/interior/floors/live-walnut.jpg',
        imageUrl: '/images/interior/floors/live-walnut-large.jpg'
      },
      {
        id: 'v3',
        color: 'メープル',
        colorCode: '#E5C29F',
        modelNumber: 'LNP-MAP01',
        thumbnailUrl: '/images/interior/floors/live-maple.jpg',
        imageUrl: '/images/interior/floors/live-maple-large.jpg'
      },
      {
        id: 'v4',
        color: 'チェリー',
        colorCode: '#A0522D',
        modelNumber: 'LNP-CHE01',
        thumbnailUrl: '/images/interior/floors/live-cherry.jpg',
        imageUrl: '/images/interior/floors/live-cherry-large.jpg'
      },
      {
        id: 'v5',
        color: 'アッシュ',
        colorCode: '#D4C5B9',
        modelNumber: 'LNP-ASH01',
        thumbnailUrl: '/images/interior/floors/live-ash.jpg',
        imageUrl: '/images/interior/floors/live-ash-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 壁材 - サンゲツ リザーブ =====
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
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: '#FFFFFF',
        modelNumber: 'RE-51001',
        thumbnailUrl: '/images/interior/walls/reserve-white.jpg',
        imageUrl: '/images/interior/walls/reserve-white-large.jpg'
      },
      {
        id: 'v2',
        color: 'ナチュラル',
        colorCode: '#F5F5DC',
        modelNumber: 'RE-51002',
        thumbnailUrl: '/images/interior/walls/reserve-natural.jpg',
        imageUrl: '/images/interior/walls/reserve-natural-large.jpg'
      },
      {
        id: 'v3',
        color: 'グレー',
        colorCode: '#D3D3D3',
        modelNumber: 'RE-51003',
        thumbnailUrl: '/images/interior/walls/reserve-grey.jpg',
        imageUrl: '/images/interior/walls/reserve-grey-large.jpg'
      },
      {
        id: 'v4',
        color: 'ベージュ',
        colorCode: '#F5DEB3',
        modelNumber: 'RE-51004',
        thumbnailUrl: '/images/interior/walls/reserve-beige.jpg',
        imageUrl: '/images/interior/walls/reserve-beige-large.jpg'
      },
      {
        id: 'v5',
        color: 'ライトブルー',
        colorCode: '#E6F3FF',
        modelNumber: 'RE-51005',
        thumbnailUrl: '/images/interior/walls/reserve-lightblue.jpg',
        imageUrl: '/images/interior/walls/reserve-lightblue-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 建具 - 大建工業 ハピアベイシス =====
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
      {
        id: 'v1',
        color: 'ネオホワイト',
        colorCode: '#FAFAFA',
        modelNumber: 'HB-NW',
        thumbnailUrl: '/images/interior/doors/hapia-neowhite.jpg',
        imageUrl: '/images/interior/doors/hapia-neowhite-large.jpg'
      },
      {
        id: 'v2',
        color: 'ライトオーカー',
        colorCode: '#DEB887',
        modelNumber: 'HB-LO',
        thumbnailUrl: '/images/interior/doors/hapia-lightoker.jpg',
        imageUrl: '/images/interior/doors/hapia-lightoker-large.jpg'
      },
      {
        id: 'v3',
        color: 'ティーブラウン',
        colorCode: '#8B4513',
        modelNumber: 'HB-TB',
        thumbnailUrl: '/images/interior/doors/hapia-teabrown.jpg',
        imageUrl: '/images/interior/doors/hapia-teabrown-large.jpg'
      },
      {
        id: 'v4',
        color: 'ダルブラウン',
        colorCode: '#654321',
        modelNumber: 'HB-DB',
        thumbnailUrl: '/images/interior/doors/hapia-dullbrown.jpg',
        imageUrl: '/images/interior/doors/hapia-dullbrown-large.jpg'
      },
      {
        id: 'v5',
        color: 'アッシュグレー',
        colorCode: '#B2BEB5',
        modelNumber: 'HB-AG',
        thumbnailUrl: '/images/interior/doors/hapia-ashgrey.jpg',
        imageUrl: '/images/interior/doors/hapia-ashgrey-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 収納 - パナソニック ベリティス =====
  {
    id: 'int-storage-veritis',
    categoryId: 'interior-storage',
    categoryName: '収納',
    subcategory: 'クローゼット',
    name: 'ベリティス クローゼット',
    manufacturer: 'パナソニック',
    modelNumber: 'VERITIS-CLOSET',
    unit: '箇所',
    isOption: true,
    description: '機能的で美しい収納システム',
    variants: [
      {
        id: 'v1',
        color: 'ソフトホワイト',
        colorCode: '#F8F8F8',
        modelNumber: 'VC-SW',
        thumbnailUrl: '/images/interior/storage/veritis-softwhite.jpg',
        imageUrl: '/images/interior/storage/veritis-softwhite-large.jpg'
      },
      {
        id: 'v2',
        color: 'ソフトオーク',
        colorCode: '#D2B48C',
        modelNumber: 'VC-SO',
        thumbnailUrl: '/images/interior/storage/veritis-softoak.jpg',
        imageUrl: '/images/interior/storage/veritis-softoak-large.jpg'
      },
      {
        id: 'v3',
        color: 'ソフトウォールナット',
        colorCode: '#704214',
        modelNumber: 'VC-SW',
        thumbnailUrl: '/images/interior/storage/veritis-softwalnut.jpg',
        imageUrl: '/images/interior/storage/veritis-softwalnut-large.jpg'
      },
      {
        id: 'v4',
        color: 'ソフトグレー',
        colorCode: '#A9A9A9',
        modelNumber: 'VC-SG',
        thumbnailUrl: '/images/interior/storage/veritis-softgrey.jpg',
        imageUrl: '/images/interior/storage/veritis-softgrey-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 25000 },
      { plan: 'HOURS', planId: 'HOURS', price: 25000 },
      { plan: 'LIFE', planId: 'LIFE', price: 20000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 15000 }
    ]
  },

  // ===== 天井材 - 吉野石膏 ハイクリンボード =====
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
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: '#FFFFFF',
        modelNumber: 'HCB-W',
        thumbnailUrl: '/images/interior/ceiling/hyclean-white.jpg',
        imageUrl: '/images/interior/ceiling/hyclean-white-large.jpg'
      },
      {
        id: 'v2',
        color: 'アイボリー',
        colorCode: '#FFFFF0',
        modelNumber: 'HCB-IV',
        thumbnailUrl: '/images/interior/ceiling/hyclean-ivory.jpg',
        imageUrl: '/images/interior/ceiling/hyclean-ivory-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 階段材 - 永大産業 スキスムSフロア =====
  {
    id: 'int-stairs-skism-s',
    categoryId: 'interior-stairs',
    categoryName: '階段',
    subcategory: '階段材',
    name: 'スキスムSフロア階段',
    manufacturer: '永大産業',
    modelNumber: 'SKISM-S-STAIRS',
    unit: '式',
    isOption: false,
    description: '滑りにくく安全な階段材',
    variants: [
      {
        id: 'v1',
        color: 'ナチュラルオーク',
        colorCode: '#D2B48C',
        modelNumber: 'SSS-NO',
        thumbnailUrl: '/images/interior/stairs/skism-natural-oak.jpg',
        imageUrl: '/images/interior/stairs/skism-natural-oak-large.jpg'
      },
      {
        id: 'v2',
        color: 'ミディアムブラウン',
        colorCode: '#8B7355',
        modelNumber: 'SSS-MB',
        thumbnailUrl: '/images/interior/stairs/skism-medium-brown.jpg',
        imageUrl: '/images/interior/stairs/skism-medium-brown-large.jpg'
      },
      {
        id: 'v3',
        color: 'ダークブラウン',
        colorCode: '#654321',
        modelNumber: 'SSS-DB',
        thumbnailUrl: '/images/interior/stairs/skism-dark-brown.jpg',
        imageUrl: '/images/interior/stairs/skism-dark-brown-large.jpg'
      },
      {
        id: 'v4',
        color: 'ホワイトオーク',
        colorCode: '#F5DEB3',
        modelNumber: 'SSS-WO',
        thumbnailUrl: '/images/interior/stairs/skism-white-oak.jpg',
        imageUrl: '/images/interior/stairs/skism-white-oak-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  }
];