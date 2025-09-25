// エクステリア（外装）製品データ - 製品と色バリアントの構造化版
import type { Product } from '../types/product';

export const exteriorProductsRestructured: Product[] = [
  // ===== 外壁 - ニチハ モナビストーンV =====
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
    description: '高品質な窯業系サイディング。横張のみの採用となります。',
    variants: [
      {
        id: 'v1',
        color: 'フローMGグレー',
        colorCode: '#8B8C8E',
        modelNumber: 'EFA5256FK',
        thumbnailUrl: '/images/exterior/walls/monabistone-flow-mg-grey.jpg',
        imageUrl: '/images/exterior/walls/monabistone-flow-mg-grey-large.jpg'
      },
      {
        id: 'v2',
        color: 'フローMGブラック',
        colorCode: '#2C2C2E',
        modelNumber: 'EFA5257FK',
        thumbnailUrl: '/images/exterior/walls/monabistone-flow-mg-black.jpg',
        imageUrl: '/images/exterior/walls/monabistone-flow-mg-black-large.jpg'
      },
      {
        id: 'v3',
        color: 'フローMGクリアホワイト',
        colorCode: '#FAFBFC',
        modelNumber: 'EFA5251GK',
        thumbnailUrl: '/images/exterior/walls/monabistone-flow-mg-clearwhite.jpg',
        imageUrl: '/images/exterior/walls/monabistone-flow-mg-clearwhite-large.jpg'
      },
      {
        id: 'v4',
        color: 'フローMGホワイト',
        colorCode: '#F5F5F3',
        modelNumber: 'EFA5252GK',
        thumbnailUrl: '/images/exterior/walls/monabistone-flow-mg-white.jpg',
        imageUrl: '/images/exterior/walls/monabistone-flow-mg-white-large.jpg'
      },
      {
        id: 'v5',
        color: 'ブリットMGチャコール',
        colorCode: '#4A4547',
        modelNumber: 'EFA5258FK',
        thumbnailUrl: '/images/exterior/walls/monabistone-brit-mg-charcoal.jpg',
        imageUrl: '/images/exterior/walls/monabistone-brit-mg-charcoal-large.jpg'
      },
      {
        id: 'v6',
        color: 'ラグゼMGブラック',
        colorCode: '#1C1C1E',
        modelNumber: 'EFA5259FK',
        thumbnailUrl: '/images/exterior/walls/monabistone-luxe-mg-black.jpg',
        imageUrl: '/images/exterior/walls/monabistone-luxe-mg-black-large.jpg'
      },
      {
        id: 'v7',
        color: 'ルクスMGベージュ',
        colorCode: '#C4B5A0',
        modelNumber: 'EFA5260FK',
        thumbnailUrl: '/images/exterior/walls/monabistone-lux-mg-beige.jpg',
        imageUrl: '/images/exterior/walls/monabistone-lux-mg-beige-large.jpg'
      },
      {
        id: 'v8',
        color: 'ティレMGネイビー',
        colorCode: '#2F3E4C',
        modelNumber: 'EFA5261FK',
        thumbnailUrl: '/images/exterior/walls/monabistone-tile-mg-navy.jpg',
        imageUrl: '/images/exterior/walls/monabistone-tile-mg-navy-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 外壁 - ケイミュー フィルテクト光セラ16 =====
  {
    id: 'ext-wall-filtect-hikaricera16',
    categoryId: 'exterior-wall',
    categoryName: '外壁',
    subcategory: '窯業系サイディング',
    name: 'フィルテクト光セラ16',
    manufacturer: 'ケイミュー',
    modelNumber: 'FILTECT-HIKARICERA16',
    unit: '㎡',
    isOption: false,
    description: '光触媒コート・親水コートの高機能サイディング',
    variants: [
      {
        id: 'v1',
        color: 'シンプルモダン マックスホワイト',
        colorCode: '#FDFEFE',
        modelNumber: 'CL2231C',
        thumbnailUrl: '/images/exterior/walls/filtect-simple-white.jpg',
        imageUrl: '/images/exterior/walls/filtect-simple-white-large.jpg'
      },
      {
        id: 'v2',
        color: 'シンプルモダン ミルキーホワイト',
        colorCode: '#FAF8F5',
        modelNumber: 'CL2232C',
        thumbnailUrl: '/images/exterior/walls/filtect-simple-milky.jpg',
        imageUrl: '/images/exterior/walls/filtect-simple-milky-large.jpg'
      },
      {
        id: 'v3',
        color: 'シンプルモダン アッシュベージュ',
        colorCode: '#C8BDB0',
        modelNumber: 'CL2233C',
        thumbnailUrl: '/images/exterior/walls/filtect-simple-ashbeige.jpg',
        imageUrl: '/images/exterior/walls/filtect-simple-ashbeige-large.jpg'
      },
      {
        id: 'v4',
        color: 'シンプルモダン チャコールブラック',
        colorCode: '#3B3638',
        modelNumber: 'CL2234C',
        thumbnailUrl: '/images/exterior/walls/filtect-simple-charcoal.jpg',
        imageUrl: '/images/exterior/walls/filtect-simple-charcoal-large.jpg'
      },
      {
        id: 'v5',
        color: 'ナチュラルレンガ ホワイト',
        colorCode: '#F7F4F0',
        modelNumber: 'CL3931C',
        thumbnailUrl: '/images/exterior/walls/filtect-brick-white.jpg',
        imageUrl: '/images/exterior/walls/filtect-brick-white-large.jpg'
      },
      {
        id: 'v6',
        color: 'ナチュラルレンガ ベージュ',
        colorCode: '#D4C5B3',
        modelNumber: 'CL3932C',
        thumbnailUrl: '/images/exterior/walls/filtect-brick-beige.jpg',
        imageUrl: '/images/exterior/walls/filtect-brick-beige-large.jpg'
      },
      {
        id: 'v7',
        color: 'ナチュラルレンガ オレンジ',
        colorCode: '#C08562',
        modelNumber: 'CL3933C',
        thumbnailUrl: '/images/exterior/walls/filtect-brick-orange.jpg',
        imageUrl: '/images/exterior/walls/filtect-brick-orange-large.jpg'
      },
      {
        id: 'v8',
        color: 'ナチュラルレンガ ブラウン',
        colorCode: '#8B6B47',
        modelNumber: 'CL3934C',
        thumbnailUrl: '/images/exterior/walls/filtect-brick-brown.jpg',
        imageUrl: '/images/exterior/walls/filtect-brick-brown-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 屋根 - ケイミュー コロニアルグラッサ =====
  {
    id: 'ext-roof-colonial-grassa',
    categoryId: 'exterior-roof',
    categoryName: '屋根',
    subcategory: 'スレート屋根',
    name: 'コロニアルグラッサ',
    manufacturer: 'ケイミュー',
    modelNumber: 'COLONIAL-GRASSA',
    unit: '㎡',
    isOption: false,
    description: 'グラッサコートの高耐候屋根材',
    variants: [
      {
        id: 'v1',
        color: 'パールグレイ',
        colorCode: '#B8B8B6',
        modelNumber: 'CC221P',
        thumbnailUrl: '/images/exterior/roofs/colonial-pearl-grey.jpg',
        imageUrl: '/images/exterior/roofs/colonial-pearl-grey-large.jpg'
      },
      {
        id: 'v2',
        color: 'ミッドナイトブルー',
        colorCode: '#2C3E50',
        modelNumber: 'CC223P',
        thumbnailUrl: '/images/exterior/roofs/colonial-midnight-blue.jpg',
        imageUrl: '/images/exterior/roofs/colonial-midnight-blue-large.jpg'
      },
      {
        id: 'v3',
        color: 'ウォルナットブラウン',
        colorCode: '#5D4037',
        modelNumber: 'CC225P',
        thumbnailUrl: '/images/exterior/roofs/colonial-walnut-brown.jpg',
        imageUrl: '/images/exterior/roofs/colonial-walnut-brown-large.jpg'
      },
      {
        id: 'v4',
        color: 'アイスシルバー',
        colorCode: '#D6D6D6',
        modelNumber: 'CC226P',
        thumbnailUrl: '/images/exterior/roofs/colonial-ice-silver.jpg',
        imageUrl: '/images/exterior/roofs/colonial-ice-silver-large.jpg'
      },
      {
        id: 'v5',
        color: 'ココナッツブラウン',
        colorCode: '#795548',
        modelNumber: 'CC227P',
        thumbnailUrl: '/images/exterior/roofs/colonial-coconut-brown.jpg',
        imageUrl: '/images/exterior/roofs/colonial-coconut-brown-large.jpg'
      },
      {
        id: 'v6',
        color: 'ミッドナイトブラック',
        colorCode: '#212121',
        modelNumber: 'CC228P',
        thumbnailUrl: '/images/exterior/roofs/colonial-midnight-black.jpg',
        imageUrl: '/images/exterior/roofs/colonial-midnight-black-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 玄関ドア - YKK AP ヴェナートD30 =====
  {
    id: 'ext-door-venato-d30',
    categoryId: 'exterior-door',
    categoryName: '玄関ドア',
    subcategory: '断熱玄関ドア',
    name: 'ヴェナートD30',
    manufacturer: 'YKK AP',
    modelNumber: 'VENATO-D30',
    unit: '箇所',
    isOption: false,
    description: '高断熱・高デザイン性の玄関ドア',
    variants: [
      {
        id: 'v1',
        color: 'ハニーチェリー',
        colorCode: '#A0522D',
        modelNumber: 'D30-N01',
        thumbnailUrl: '/images/exterior/doors/venato-honey-cherry.jpg',
        imageUrl: '/images/exterior/doors/venato-honey-cherry-large.jpg'
      },
      {
        id: 'v2',
        color: 'キャラメルチーク',
        colorCode: '#8B4513',
        modelNumber: 'D30-N02',
        thumbnailUrl: '/images/exterior/doors/venato-caramel-teak.jpg',
        imageUrl: '/images/exterior/doors/venato-caramel-teak-large.jpg'
      },
      {
        id: 'v3',
        color: 'ココナッツチェリー',
        colorCode: '#654321',
        modelNumber: 'D30-N03',
        thumbnailUrl: '/images/exterior/doors/venato-coconut-cherry.jpg',
        imageUrl: '/images/exterior/doors/venato-coconut-cherry-large.jpg'
      },
      {
        id: 'v4',
        color: 'ショコラウォールナット',
        colorCode: '#3E2723',
        modelNumber: 'D30-N04',
        thumbnailUrl: '/images/exterior/doors/venato-chocolat-walnut.jpg',
        imageUrl: '/images/exterior/doors/venato-chocolat-walnut-large.jpg'
      },
      {
        id: 'v5',
        color: 'ピュアシルバー',
        colorCode: '#C0C0C0',
        modelNumber: 'D30-S01',
        thumbnailUrl: '/images/exterior/doors/venato-pure-silver.jpg',
        imageUrl: '/images/exterior/doors/venato-pure-silver-large.jpg'
      },
      {
        id: 'v6',
        color: 'プラチナステン',
        colorCode: '#E5E4E2',
        modelNumber: 'D30-S02',
        thumbnailUrl: '/images/exterior/doors/venato-platinum-stain.jpg',
        imageUrl: '/images/exterior/doors/venato-platinum-stain-large.jpg'
      },
      {
        id: 'v7',
        color: 'ブラック',
        colorCode: '#000000',
        modelNumber: 'D30-K01',
        thumbnailUrl: '/images/exterior/doors/venato-black.jpg',
        imageUrl: '/images/exterior/doors/venato-black-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== サッシ - YKK AP APW330 =====
  {
    id: 'ext-window-apw330',
    categoryId: 'exterior-window',
    categoryName: 'サッシ',
    subcategory: '樹脂サッシ',
    name: 'APW330',
    manufacturer: 'YKK AP',
    modelNumber: 'APW330',
    unit: '箇所',
    isOption: false,
    description: '高断熱樹脂窓',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: '#FFFFFF',
        modelNumber: 'APW330-W',
        thumbnailUrl: '/images/exterior/windows/apw330-white.jpg',
        imageUrl: '/images/exterior/windows/apw330-white-large.jpg'
      },
      {
        id: 'v2',
        color: 'プラチナステン',
        colorCode: '#E5E4E2',
        modelNumber: 'APW330-PS',
        thumbnailUrl: '/images/exterior/windows/apw330-platinum.jpg',
        imageUrl: '/images/exterior/windows/apw330-platinum-large.jpg'
      },
      {
        id: 'v3',
        color: 'ブラウン',
        colorCode: '#5D4037',
        modelNumber: 'APW330-BR',
        thumbnailUrl: '/images/exterior/windows/apw330-brown.jpg',
        imageUrl: '/images/exterior/windows/apw330-brown-large.jpg'
      },
      {
        id: 'v4',
        color: 'ブラック',
        colorCode: '#000000',
        modelNumber: 'APW330-BK',
        thumbnailUrl: '/images/exterior/windows/apw330-black.jpg',
        imageUrl: '/images/exterior/windows/apw330-black-large.jpg'
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