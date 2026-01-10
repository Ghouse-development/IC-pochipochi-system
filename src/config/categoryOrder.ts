// カテゴリ表示順序設定
// 各カタログタイプごとにカテゴリの表示順序を定義

export interface CategoryOrderConfig {
  name: string;
  icon?: string;
  subcategoryOrder?: string[];
}

// 外装カテゴリ順序
// 順序: 外壁 → 屋根 → ポーチ → 外部建材 → 軒天 → 窓 → 玄関ドア → 外部設備
// ※ 任意・未選択項目（ガレージシャッター・庇・換気システム・給湯器・太陽光・蓄電池等）は設計タブに移動
// ※ TV視聴は外部設備内に統合（21項目フィードバック③）
export const EXTERIOR_CATEGORY_ORDER: CategoryOrderConfig[] = [
  {
    name: '外壁',
    icon: '🏠',
    subcategoryOrder: [
      // 標準品（Vシリーズ）
      'モナビストーンV',
      'シャルムロックV',
      'リーガストーン調V',
      'ディスタシェイドV',
      'ボルブストーン調V',
      'スプリットストーン調V',
      'コルモストーン調V',
      'コンクリート打ちっ放し16V',
      'グレインウッドV',
      'マイスターウッド調V',
      'しぶきV',
      'アフェットV',
      'ロックラインV',
      'ナチュラルラインV',
      // プレミアム
      'ルボン プレミアム',
      'スティルランバー プレミアム',
      'ミルシュタイン プレミアム',
      'シャルムロック プレミアム',
      'リーガストーン調 プレミアム',
      'コルモストーン調 プレミアム',
      'コンクリート打ちっ放し16 プレミアム',
      'リントロック調 プレミアム',
      'フィーノ調 プレミアム',
      'キャスティングウッド プレミアム',
      'ヴィンテージウッド プレミアム',
      'シントア プレミアム',
      'スプーモ プレミアム',
      'フラーグ プレミアム',
      'マグート プレミアム',
      'プリレート プレミアム',
      // その他
      'モエンエクセラード16 Fuge',
      'COOL イルミオ',
      '新フラット16',
      'カンターピレ',
      'カンタービレ',
      'アルテミュール',
      'ジョリパットネオ∞ ミーティア',
      'ジョリパットネオ∞ エンシェントブリック',
      'SOLIDO',
      'SPビレクト',
      'ガルスパン',
      // 18mm厚
      '木枠コンクリート調18',
      'モダンスリット18',
      'ニューインプレース18',
      // その他
      'レスティ',
      'ルビドフラット',
      'フラットウォール',
      'フィエルテ',
      'ハーモレイド',
      'トリル',
      'シンプルストライプ',
      'シックイフラット',
    ]
  },
  {
    name: '屋根',
    icon: '🏛️',
    subcategoryOrder: ['屋根材']
  },
  {
    name: 'ポーチ',
    icon: '🚶',
    subcategoryOrder: [
      'モルタル金鏝抑え',  // 標準（目地不要）
      'メンフィス',
      'ネイチャーII',
      'ベスパ',
      'ランドストン',
      'ピエトラソーニ',
    ]
  },
  {
    name: '外部建材',
    icon: '🔧',
    subcategoryOrder: [
      // 樋関連（価格順）
      '軒樋', '竪樋', '土台水切', 'パラペット笠木', 'バルコニー笠木',
      // 破風
      '破風',
    ]
  },
  {
    name: '軒天',
    icon: '📐',
    subcategoryOrder: [
      'エンボス',           // 0円（標準）
      'ラフォーレソレイユ',  // 12,000円/㎡
      'ラフォーレティンバー', // 12,000円/㎡
      'アルテザート',        // 18,000円/㎡
    ]
  },
  {
    name: '窓',
    icon: '🪟',
    subcategoryOrder: [
      'APW430',
      'APW430窓オプション',
      'APW330',
      '窓オプション',
    ]
  },
  {
    name: '玄関ドア',
    icon: '🚪',
    subcategoryOrder: ['ヴェナートD30', '玄関ドアオプション']
  },
  {
    name: '外部設備',
    icon: '🔌',
    subcategoryOrder: [
      'TV視聴',              // ③ TV視聴を外部設備内に統合
      '電気メーターボックス',
      '外部コンセント',
      'EV用コンセント',
      'ジョイントボックス',
      'エアコンスリーブキャップ',
      '換気フード',
      '換気ガラリ',
      'DSDD給気口',
      '外部LAN用空配管',
      '外部配管',
      'スリムダクト',
      '外部水栓',
      'スッキリポール',
      'アンテナ',
      '防犯設備',
      '外部設備',
    ]
  },
  // TV視聴カテゴリは削除（外部設備に統合）
  {
    name: 'ガレージシャッター',
    icon: '🚗',
    subcategoryOrder: ['ガレージシャッター不要', 'サンオートハイスピード', '威風堂々', 'ガレージシャッターオプション']
  },
  {
    name: '電動ガレージシャッター',
    icon: '🚗',
    subcategoryOrder: ['ガレージシャッター不要', 'サンオートハイスピード', '威風堂々']
  },
  {
    name: '庇',
    icon: '🏗️',
    subcategoryOrder: ['庇不要', 'アルフィン庇 AD2S', 'アルフィン庇 AF95シリーズ']
  },
  {
    name: '換気システム選択',
    icon: '🌀',
    subcategoryOrder: ['Panasonic第一種換気', 'DSDD']
  },
  {
    name: 'インターホン個数',
    icon: '🔔',
    subcategoryOrder: ['インターホン台数']
  },
  {
    name: '給湯器',
    icon: '♨️',
    subcategoryOrder: [
      'エコキュート',
      'おひさまエコキュート',
      'ナイアガラ出湯',
      'エコジョーズ',
      'エコキュートオプション',
      'エコキュート設置オプション',
    ]
  },
  {
    name: '太陽光',
    icon: '☀️',
    subcategoryOrder: ['太陽光なし', '太陽光あり', '太陽光オプション']
  },
  {
    name: '蓄電池',
    icon: '🔋',
    subcategoryOrder: ['蓄電池なし', '蓄電池あり']
  },
  {
    name: 'V2H',
    icon: '🚗',
    subcategoryOrder: ['V2Hなし', 'V2Hあり']
  },
  {
    name: '太陽光・蓄電池',
    icon: '☀️',
    subcategoryOrder: ['太陽光パネル', '蓄電池']
  },
  {
    name: '窓タイプ',
    icon: '🪟',
    subcategoryOrder: ['窓タイプ']
  },
  {
    name: '天井変更工事',
    icon: '📐',
    subcategoryOrder: ['天井変更工事']
  },
];

// 内装カテゴリ順序
// ※ベース床・ベースクロス（壁）・ベースクロス（天井）・ベース建具・周辺部材は必須項目のため先頭に配置
export const INTERIOR_CATEGORY_ORDER: CategoryOrderConfig[] = [
  // ===== 必須項目（先頭に表示） =====
  {
    name: 'ベース床',
    icon: '🪵',
    subcategoryOrder: [
      'フローリング',
      '無垢床',
      'フロアタイル',
    ]
  },
  {
    name: 'ベースクロス（壁）',
    icon: '🧱',
    subcategoryOrder: [
      'ベースクロス',
      '壁クロス',
    ]
  },
  {
    name: 'ベースクロス（天井）',
    icon: '⬆️',
    subcategoryOrder: [
      '天井クロス',
    ]
  },
  {
    name: 'ベース建具',
    icon: '🚪',
    subcategoryOrder: [
      '室内ドア標準',
      '室内ドア ソリッドカラー',
      '室内ドア ペイントカラー',
    ]
  },
  {
    name: '周辺部材',
    icon: '📐',
    subcategoryOrder: [
      '巾木',
      '窓台',
      '玄関框',
      '床見切り',
    ]
  },
  // ===== オプション項目 =====
  {
    name: '床材',
    icon: '🪵',
    subcategoryOrder: [
      'フローリング',
      '無垢床',
      'フロアタイル',
      'CFシート',
      'カーペットタイル',
      'タイル',
      '畳',
      '小上がり',
      '玄関框',
      '床見切り',
    ]
  },
  {
    name: '壁材',
    icon: '🧱',
    subcategoryOrder: [
      'ベースクロス',
      'アクセントクロス',
      'アクセントタイル',
      'アクセントパネル',
      'エコカラット',
      '腰壁',
      '垂壁',
    ]
  },
  {
    name: '天井',
    icon: '⬆️',
    subcategoryOrder: ['天井クロス', '天井高変更']
  },
  {
    name: '建具',
    icon: '🚪',
    subcategoryOrder: [
      '室内ドア標準',
      '室内ドア ソリッドカラー',
      '室内ドア ペイントカラー',
      '収納用建具',
      '取手・ストッパー',
      '建具デザイン変更',
      '建具追加オプション',
    ]
  },
  {
    name: '収納',
    icon: '🗄️',
    subcategoryOrder: [
      'クローゼット',
      'システム収納',
      '玄関靴箱',
      '可動棚',
      '樹脂製可動棚',
      '枕棚',
      'ハンガーパイプ',
      '床下収納',
      '小上がり下収納',
    ]
  },
  {
    name: 'トイレ収納',
    icon: '🚽',
    subcategoryOrder: ['トイレ収納', 'トイレカウンター']
  },
  {
    name: '階段',
    icon: '🪜',
    subcategoryOrder: [
      '階段踏板',
      '階段踏板/蹴込板',
      '階段手摺',
      'アイアン階段',
      'アイアン手すり',
      'カーペット階段',
    ]
  },
  {
    name: '手摺',
    icon: '🛡️',
    subcategoryOrder: ['手摺']
  },
  {
    name: '室内窓',
    icon: '🪟',
    subcategoryOrder: ['室内窓', '室内窓オプション']
  },
  {
    name: '格子',
    icon: '📐',
    subcategoryOrder: ['インテリア格子', 'ルーバー']
  },
  {
    name: '間仕切り',
    icon: '🚧',
    subcategoryOrder: ['間仕切り', 'パーティション']
  },
  {
    name: '造作',
    icon: '🔨',
    subcategoryOrder: ['造作ニッチ', 'カウンター', '飾り棚']
  },
  {
    name: 'カウンター',
    icon: '🍽️',
    subcategoryOrder: ['カウンター', 'ダイニングカウンター']
  },
  {
    name: 'カーテンBOX',
    icon: '📦',
    subcategoryOrder: ['カーテンBOX']
  },
  {
    name: '換気',
    icon: '💨',
    subcategoryOrder: ['換気扇', '24時間換気']
  },
  {
    name: '換気システム',
    icon: '🌬️',
    subcategoryOrder: ['換気システム']
  },
  {
    name: '設備',
    icon: '⚙️',
    subcategoryOrder: [
      'スロップシンク',
      '玄関手洗い',
      '水栓',
      '洗濯パン',
      'ガス工事',
      'ナノバブル',
    ]
  },
  {
    name: '物干し',
    icon: '👕',
    subcategoryOrder: ['室内物干し', 'ホスクリーン', 'Pid']
  },
  {
    name: '補強・下地',
    icon: '🏗️',
    subcategoryOrder: [
      '壁下地補強',
      '床補強',
      'マグネットクロス',
      'ロールカーテン用天井下地',
    ]
  },
];

// 水廻り設備カテゴリ順序
export const WATER_CATEGORY_ORDER: CategoryOrderConfig[] = [
  {
    name: 'キッチン',
    icon: '🍳',
    subcategoryOrder: ['システムキッチン', 'キッチンオプション']
  },
  {
    name: '1階洗面化粧台',
    icon: '🪥',
    subcategoryOrder: ['洗面化粧台', '洗面台']
  },
  {
    name: '2階洗面化粧台',
    icon: '🪥',
    subcategoryOrder: ['2階洗面', '洗面化粧台']
  },
  {
    name: '洗面化粧台',
    icon: '🪥',
    subcategoryOrder: ['洗面化粧台', '2階洗面', '洗面台']
  },
  {
    name: '玄関手洗い',
    icon: '🚰',
    subcategoryOrder: ['玄関手洗い', '手洗器']
  },
  {
    name: '1階トイレ',
    icon: '🚽',
    subcategoryOrder: ['タンクレストイレ', 'タンク式トイレ', 'トイレ']
  },
  {
    name: '2階トイレ',
    icon: '🚽',
    subcategoryOrder: ['タンクレストイレ', 'タンク式トイレ', 'トイレ']
  },
  {
    name: 'トイレ',
    icon: '🚽',
    subcategoryOrder: ['タンクレストイレ', 'タンク式トイレ']
  },
  {
    name: '風呂',
    icon: '🛁',
    subcategoryOrder: ['システムバス', 'バスオプション']
  },
  {
    name: 'バスルーム',
    icon: '🛁',
    subcategoryOrder: ['システムバス']
  },
  {
    name: 'バスルーム設備',
    icon: '🚿',
    subcategoryOrder: ['浴室暖房乾燥機']
  },
  {
    name: '給湯器',
    icon: '♨️',
    subcategoryOrder: ['エコキュート']
  },
  {
    name: 'ランドリー',
    icon: '🧺',
    subcategoryOrder: ['洗濯流し']
  },
];

/**
 * カテゴリをソートする
 */
export function sortCategories(
  categories: { name: string; subcategories: string[] }[],
  orderConfig: CategoryOrderConfig[]
): { name: string; subcategories: string[]; icon?: string }[] {
  const orderMap = new Map(orderConfig.map((c, i) => [c.name, { order: i, config: c }]));

  return categories
    .map(cat => {
      const config = orderMap.get(cat.name);
      return {
        ...cat,
        icon: config?.config.icon,
        _order: config?.order ?? 999,
        subcategories: sortSubcategories(cat.subcategories, config?.config.subcategoryOrder)
      };
    })
    .sort((a, b) => a._order - b._order)
    .map(({ _order, ...rest }) => rest);
}

/**
 * サブカテゴリをソートする
 */
function sortSubcategories(subcategories: string[], order?: string[]): string[] {
  if (!order) return subcategories.sort();

  const orderMap = new Map(order.map((s, i) => [s, i]));

  return [...subcategories].sort((a, b) => {
    const orderA = orderMap.get(a) ?? 999;
    const orderB = orderMap.get(b) ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    return a.localeCompare(b, 'ja');
  });
}

// 電気設備カテゴリ順序
export const ELECTRICAL_CATEGORY_ORDER: CategoryOrderConfig[] = [
  {
    name: '照明',
    icon: '💡',
    subcategoryOrder: ['ダウンライト', 'シーリングライト', 'ペンダントライト', 'ブラケットライト', 'スポットライト', '屋外照明']
  },
  {
    name: '間接照明',
    icon: '✨',
    subcategoryOrder: ['間接照明', 'ライン照明', 'LED照明']
  },
  {
    name: 'スイッチ・コンセント',
    icon: '🔌',
    subcategoryOrder: ['スイッチ', 'コンセント', 'スイッチ・コンセント', '床下コンセント', 'USBコンセント']
  },
  {
    name: 'インターホン',
    icon: '🔔',
    subcategoryOrder: ['インターホン', 'ドアホン', 'ワイヤレスカメラ']
  },
  {
    name: 'IoT・スマートホーム',
    icon: '📱',
    subcategoryOrder: ['スマートロック', 'スマートリモコン', 'センサー', 'ホームオートメーション', 'AI対応機器']
  },
  {
    name: 'セキュリティ',
    icon: '🔒',
    subcategoryOrder: ['防犯カメラ', 'センサーライト', '防犯システム']
  },
  {
    name: '電気配線',
    icon: '⚡',
    subcategoryOrder: ['配線', '分電盤', 'アース', 'LAN配線', '空配管']
  },
  {
    name: 'ガス乾燥機',
    icon: '🔥',
    subcategoryOrder: ['乾太くん', 'ガス乾燥機なし']
  },
];

// 家具・家電カテゴリ順序
export const FURNITURE_CATEGORY_ORDER: CategoryOrderConfig[] = [
  {
    name: 'オリジナルダイニングテーブル',
    icon: '🍽️',
    subcategoryOrder: ['スクエアテーブル', 'ラウンドテーブル']
  },
  {
    name: 'エアコン',
    icon: '❄️',
    subcategoryOrder: ['ダイキン', '三菱電機', 'エアコン']
  },
  {
    name: '空調',
    icon: '🌀',
    subcategoryOrder: ['エアコン', '換気扇']
  },
  {
    name: 'カーテン',
    icon: '🪞',
    subcategoryOrder: ['カーテンレール', 'カーテン', 'IC提案']
  },
  {
    name: 'カーテンBOX',
    icon: '📦',
    subcategoryOrder: ['カーテンBOX']
  },
  {
    name: 'ブラインド',
    icon: '🪟',
    subcategoryOrder: ['ブラインド', 'ロールスクリーン']
  },
  {
    name: 'ダイニングテーブル',
    icon: '🍽️',
    subcategoryOrder: ['ダイニングテーブル']
  },
  {
    name: '造作家具',
    icon: '🪑',
    subcategoryOrder: ['ダイニングテーブル', 'カウンター', 'デスク']
  },
  {
    name: '家具',
    icon: '🪑',
    subcategoryOrder: ['ソファ', 'TVボード', 'センターテーブル', 'ラグ', 'ダイニングテーブル', 'ダイニングチェア', 'ベッド', 'その他']
  },
];

// 設計カテゴリ順序（間取りで決まる項目）
export const DESIGN_CATEGORY_ORDER: CategoryOrderConfig[] = [
  {
    name: '窓タイプ',
    icon: '🪟',
    subcategoryOrder: ['APW430', 'APW330']
  },
  {
    name: '室内窓',
    icon: '🪟',
    subcategoryOrder: ['室内窓あり', '室内窓なし']
  },
  {
    name: '電動ガレージシャッター',
    icon: '🚗',
    subcategoryOrder: ['ガレージシャッター不要', 'サンオートハイスピード', '威風堂々']
  },
  {
    name: '庇',
    icon: '🏗️',
    subcategoryOrder: ['庇不要', 'アルフィン庇 AD2S', 'アルフィン庇 AF95シリーズ']
  },
  {
    name: '換気システム',
    icon: '🌀',
    subcategoryOrder: ['Panasonic第一種換気', 'DSDD']
  },
  {
    name: '給湯器',
    icon: '♨️',
    subcategoryOrder: ['エコキュート', 'おひさまエコキュート', 'ナイアガラ出湯', 'エコジョーズ']
  },
  {
    name: '太陽光',
    icon: '☀️',
    subcategoryOrder: ['太陽光なし', '太陽光あり']
  },
  {
    name: '蓄電池',
    icon: '🔋',
    subcategoryOrder: ['蓄電池なし', '蓄電池あり']
  },
  {
    name: 'V2H',
    icon: '🚗',
    subcategoryOrder: ['V2Hなし', 'V2Hあり']
  },
  {
    name: 'ガス引込み',
    icon: '🔥',
    subcategoryOrder: ['ガス引込みなし', 'ガス引込みあり']
  },
];

/**
 * カタログタイプに応じたカテゴリ順序設定を取得
 */
export function getCategoryOrderConfig(catalogType: 'exterior' | 'interior' | 'water' | 'electrical' | 'furniture' | 'design'): CategoryOrderConfig[] {
  switch (catalogType) {
    case 'exterior':
      return EXTERIOR_CATEGORY_ORDER;
    case 'interior':
      return INTERIOR_CATEGORY_ORDER;
    case 'water':
      return WATER_CATEGORY_ORDER;
    case 'electrical':
      return ELECTRICAL_CATEGORY_ORDER;
    case 'furniture':
      return FURNITURE_CATEGORY_ORDER;
    case 'design':
      return DESIGN_CATEGORY_ORDER;
    default:
      return [];
  }
}
