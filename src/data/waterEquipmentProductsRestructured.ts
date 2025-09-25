// 水廻り製品データ - 製品と色バリアントの構造化版
import type { Product } from '../types/product';

export const waterEquipmentProductsRestructured: Product[] = [
  // ===== キッチン - クリナップ ステディア =====
  {
    id: 'water-kitchen-stedia',
    categoryId: 'water-kitchen',
    categoryName: 'キッチン',
    subcategory: 'システムキッチン',
    name: 'ステディア',
    manufacturer: 'クリナップ',
    modelNumber: 'STEDIA',
    unit: '式',
    isOption: false,
    description: 'ステンレスキャビネットの高品質システムキッチン',
    variants: [
      {
        id: 'v1',
        color: 'クリスタルホワイト',
        colorCode: '#FAFAFA',
        modelNumber: 'ST-CW',
        thumbnailUrl: '/images/water/kitchen/stedia-crystal-white.jpg',
        imageUrl: '/images/water/kitchen/stedia-crystal-white-large.jpg'
      },
      {
        id: 'v2',
        color: 'ペアウッドホワイト',
        colorCode: '#F5F5DC',
        modelNumber: 'ST-PWW',
        thumbnailUrl: '/images/water/kitchen/stedia-pairwood-white.jpg',
        imageUrl: '/images/water/kitchen/stedia-pairwood-white-large.jpg'
      },
      {
        id: 'v3',
        color: 'ペアウッドアッシュ',
        colorCode: '#D4C5B9',
        modelNumber: 'ST-PWA',
        thumbnailUrl: '/images/water/kitchen/stedia-pairwood-ash.jpg',
        imageUrl: '/images/water/kitchen/stedia-pairwood-ash-large.jpg'
      },
      {
        id: 'v4',
        color: 'オークナチュラル',
        colorCode: '#DEB887',
        modelNumber: 'ST-ON',
        thumbnailUrl: '/images/water/kitchen/stedia-oak-natural.jpg',
        imageUrl: '/images/water/kitchen/stedia-oak-natural-large.jpg'
      },
      {
        id: 'v5',
        color: 'チークブラウン',
        colorCode: '#8B4513',
        modelNumber: 'ST-TB',
        thumbnailUrl: '/images/water/kitchen/stedia-teak-brown.jpg',
        imageUrl: '/images/water/kitchen/stedia-teak-brown-large.jpg'
      },
      {
        id: 'v6',
        color: 'ダークウォールナット',
        colorCode: '#654321',
        modelNumber: 'ST-DW',
        thumbnailUrl: '/images/water/kitchen/stedia-dark-walnut.jpg',
        imageUrl: '/images/water/kitchen/stedia-dark-walnut-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== バスルーム - TOTO サザナ =====
  {
    id: 'water-bath-sazana',
    categoryId: 'water-bathroom',
    categoryName: 'バスルーム',
    subcategory: 'システムバス',
    name: 'サザナ',
    manufacturer: 'TOTO',
    modelNumber: 'SAZANA',
    unit: '式',
    isOption: false,
    description: '快適性と清掃性を両立したシステムバス',
    variants: [
      {
        id: 'v1',
        color: 'ホワイト',
        colorCode: '#FFFFFF',
        modelNumber: 'SZ-W',
        thumbnailUrl: '/images/water/bath/sazana-white.jpg',
        imageUrl: '/images/water/bath/sazana-white-large.jpg'
      },
      {
        id: 'v2',
        color: 'ベージュ',
        colorCode: '#F5DEB3',
        modelNumber: 'SZ-BE',
        thumbnailUrl: '/images/water/bath/sazana-beige.jpg',
        imageUrl: '/images/water/bath/sazana-beige-large.jpg'
      },
      {
        id: 'v3',
        color: 'ピンク',
        colorCode: '#FFE4E1',
        modelNumber: 'SZ-PK',
        thumbnailUrl: '/images/water/bath/sazana-pink.jpg',
        imageUrl: '/images/water/bath/sazana-pink-large.jpg'
      },
      {
        id: 'v4',
        color: 'グレー',
        colorCode: '#D3D3D3',
        modelNumber: 'SZ-GR',
        thumbnailUrl: '/images/water/bath/sazana-grey.jpg',
        imageUrl: '/images/water/bath/sazana-grey-large.jpg'
      },
      {
        id: 'v5',
        color: 'ブラック',
        colorCode: '#333333',
        modelNumber: 'SZ-BK',
        thumbnailUrl: '/images/water/bath/sazana-black.jpg',
        imageUrl: '/images/water/bath/sazana-black-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== トイレ - LIXIL ベーシア =====
  {
    id: 'water-toilet-basia',
    categoryId: 'water-toilet',
    categoryName: 'トイレ',
    subcategory: 'タンクレストイレ',
    name: 'ベーシア',
    manufacturer: 'LIXIL',
    modelNumber: 'BASIA',
    unit: '台',
    isOption: false,
    description: 'シンプルで高機能なタンクレストイレ',
    variants: [
      {
        id: 'v1',
        color: 'ピュアホワイト',
        colorCode: '#FFFFFF',
        modelNumber: 'BA-PW',
        thumbnailUrl: '/images/water/toilet/basia-pure-white.jpg',
        imageUrl: '/images/water/toilet/basia-pure-white-large.jpg'
      },
      {
        id: 'v2',
        color: 'オフホワイト',
        colorCode: '#FAF0E6',
        modelNumber: 'BA-OW',
        thumbnailUrl: '/images/water/toilet/basia-off-white.jpg',
        imageUrl: '/images/water/toilet/basia-off-white-large.jpg'
      },
      {
        id: 'v3',
        color: 'ピンク',
        colorCode: '#FFE4E1',
        modelNumber: 'BA-PK',
        thumbnailUrl: '/images/water/toilet/basia-pink.jpg',
        imageUrl: '/images/water/toilet/basia-pink-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 洗面台 - パナソニック シーライン =====
  {
    id: 'water-vanity-cline',
    categoryId: 'water-vanity',
    categoryName: '洗面台',
    subcategory: '洗面化粧台',
    name: 'シーライン',
    manufacturer: 'パナソニック',
    modelNumber: 'C-LINE',
    unit: '台',
    isOption: false,
    description: 'スタイリッシュで収納力抜群の洗面化粧台',
    variants: [
      {
        id: 'v1',
        color: 'スタンダードホワイト',
        colorCode: '#FAFAFA',
        modelNumber: 'CL-SW',
        thumbnailUrl: '/images/water/vanity/cline-standard-white.jpg',
        imageUrl: '/images/water/vanity/cline-standard-white-large.jpg'
      },
      {
        id: 'v2',
        color: 'ソフトウォールナット',
        colorCode: '#8B7355',
        modelNumber: 'CL-SWN',
        thumbnailUrl: '/images/water/vanity/cline-soft-walnut.jpg',
        imageUrl: '/images/water/vanity/cline-soft-walnut-large.jpg'
      },
      {
        id: 'v3',
        color: 'ソフトオーク',
        colorCode: '#DEB887',
        modelNumber: 'CL-SO',
        thumbnailUrl: '/images/water/vanity/cline-soft-oak.jpg',
        imageUrl: '/images/water/vanity/cline-soft-oak-large.jpg'
      },
      {
        id: 'v4',
        color: 'アルベロブラック',
        colorCode: '#2C2C2C',
        modelNumber: 'CL-AB',
        thumbnailUrl: '/images/water/vanity/cline-albero-black.jpg',
        imageUrl: '/images/water/vanity/cline-albero-black-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 給湯器 - リンナイ エコジョーズ =====
  {
    id: 'water-heater-ecojozu',
    categoryId: 'water-heater',
    categoryName: '給湯器',
    subcategory: 'ガス給湯器',
    name: 'エコジョーズ',
    manufacturer: 'リンナイ',
    modelNumber: 'ECO-JOZU',
    unit: '台',
    isOption: false,
    description: '高効率ガス給湯器',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: '#C0C0C0',
        modelNumber: 'RUF-E2406AW',
        thumbnailUrl: '/images/water/heater/ecojozu-silver.jpg',
        imageUrl: '/images/water/heater/ecojozu-silver-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 0 },
      { plan: 'HOURS', planId: 'HOURS', price: 0 },
      { plan: 'LIFE', planId: 'LIFE', price: 0 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 0 }
    ]
  },

  // ===== 浄水器 - タカラスタンダード 浄水器一体型水栓 =====
  {
    id: 'water-purifier-takara',
    categoryId: 'water-purifier',
    categoryName: '浄水器',
    subcategory: '水栓一体型',
    name: '浄水器一体型水栓',
    manufacturer: 'タカラスタンダード',
    modelNumber: 'TJS-SP',
    unit: '台',
    isOption: true,
    description: 'カートリッジ交換が簡単な浄水器一体型水栓',
    variants: [
      {
        id: 'v1',
        color: 'クロームメッキ',
        colorCode: '#C0C0C0',
        modelNumber: 'TJS-SP-CM',
        thumbnailUrl: '/images/water/purifier/takara-chrome.jpg',
        imageUrl: '/images/water/purifier/takara-chrome-large.jpg'
      },
      {
        id: 'v2',
        color: 'マットブラック',
        colorCode: '#2C2C2C',
        modelNumber: 'TJS-SP-MB',
        thumbnailUrl: '/images/water/purifier/takara-matte-black.jpg',
        imageUrl: '/images/water/purifier/takara-matte-black-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 35000 },
      { plan: 'HOURS', planId: 'HOURS', price: 35000 },
      { plan: 'LIFE', planId: 'LIFE', price: 30000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 25000 }
    ]
  },

  // ===== 食洗機 - パナソニック ビルトイン食洗機 =====
  {
    id: 'water-dishwasher-panasonic',
    categoryId: 'water-dishwasher',
    categoryName: '食洗機',
    subcategory: 'ビルトイン',
    name: 'ビルトイン食器洗い乾燥機',
    manufacturer: 'パナソニック',
    modelNumber: 'NP-45MD9S',
    unit: '台',
    isOption: true,
    description: '省エネ・節水のビルトイン食洗機',
    variants: [
      {
        id: 'v1',
        color: 'シルバー',
        colorCode: '#C0C0C0',
        modelNumber: 'NP-45MD9S',
        thumbnailUrl: '/images/water/dishwasher/panasonic-silver.jpg',
        imageUrl: '/images/water/dishwasher/panasonic-silver-large.jpg'
      },
      {
        id: 'v2',
        color: 'ブラック',
        colorCode: '#000000',
        modelNumber: 'NP-45MD9K',
        thumbnailUrl: '/images/water/dishwasher/panasonic-black.jpg',
        imageUrl: '/images/water/dishwasher/panasonic-black-large.jpg'
      }
    ],
    pricing: [
      { plan: 'LACIE', planId: 'LACIE', price: 80000 },
      { plan: 'HOURS', planId: 'HOURS', price: 80000 },
      { plan: 'LIFE', planId: 'LIFE', price: 70000 },
      { plan: 'LIFE+', planId: 'LIFE+', price: 60000 }
    ]
  }
];