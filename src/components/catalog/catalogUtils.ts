import { Home, Sofa, Wrench, Ruler, Armchair, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ItemWithDetails } from '../../types/database';
import type { Product as CatalogProduct } from '../../types/product';

// DBアイテムをカート用のProduct型に変換
export const convertToCartItem = (item: ItemWithDetails): CatalogProduct => {
  const pricing = item.pricing?.find(p => p.product?.code === 'LACIE');

  return {
    id: item.id,
    categoryId: item.category_id || '',
    categoryName: item.category?.name || '',
    subcategory: item.category_name || '',
    name: item.name,
    manufacturer: item.manufacturer || '',
    modelNumber: item.model_number || '',
    unit: (item.unit?.symbol || '式') as CatalogProduct['unit'],
    isOption: pricing ? !pricing.is_standard : false,
    description: item.note || '',
    pricing: item.pricing?.map(p => ({
      plan: (p.product?.code || 'LACIE') as 'LACIE' | 'HOURS' | 'LIFE',
      planId: (p.product?.code || 'LACIE') as 'LACIE' | 'HOURS' | 'LIFE',
      price: p.price,
    })) || [],
    variants: item.variants?.map(v => ({
      id: v.id,
      color: v.color_name,
      colorCode: v.color_code || undefined,
      imageUrl: v.images?.[0]?.image_url,
      thumbnailUrl: v.images?.[0]?.thumbnail_url || undefined,
    })) || [],
  };
};

// 静的データ（Product）をItemWithDetails形式に変換（フォールバック用）
export const convertStaticToItemWithDetails = (product: CatalogProduct, categoryType: string): ItemWithDetails => {
  return {
    id: product.id,
    name: product.name,
    manufacturer: product.manufacturer,
    series: product.series || null, // シリーズ名
    model_number: product.modelNumber,
    category_id: product.categoryId,
    category_name: product.subcategory,
    material_type: product.materialType || null, // 素材タイプ
    note: product.description,
    is_active: true,
    display_order: 0,
    category: {
      id: product.categoryId,
      name: product.categoryName,
      category_type: categoryType,
      is_active: true,
      display_order: 0,
    },
    unit: {
      id: 'unit-1',
      symbol: product.unit,
      name: product.unit,
    },
    variants: product.variants?.map((v, idx) => ({
      id: v.id || `variant-${idx}`,
      color_name: v.color,
      color_code: v.colorCode || v.color,
      images: v.imageUrl
        ? [{ id: 'img-1', image_url: v.imageUrl, thumbnail_url: v.thumbnailUrl }]
        : (v.images?.length ? v.images.map((img, i) => ({ id: `img-${i}`, image_url: img, thumbnail_url: img })) : []),
    })) || [],
    pricing: product.pricing?.map(p => ({
      id: `pricing-${p.plan || p.planId}`,
      price: p.price,
      is_standard: !product.isOption, // isOptionフィールドを使用（標準品 = !isOption）
      product: {
        id: `plan-${p.plan || p.planId}`,
        code: (p.plan || p.planId) as string,
        name: (p.plan || p.planId) as string,
      },
    })) || [],
  } as ItemWithDetails;
};

// DBアイテムをRecommendation用のCatalogProductに変換
export const convertToCatalogProduct = (item: ItemWithDetails): CatalogProduct => {
  const pricing = item.pricing?.find(p => p.product?.code === 'LACIE');
  // catalog_urlをバリアント画像のフォールバックとして使用
  const fallbackImageUrl = item.catalog_url || undefined;

  return {
    id: item.id,
    categoryId: item.category_id || '',
    categoryName: item.category?.name || '',
    subcategory: item.category_name || '',
    name: item.name,
    manufacturer: item.manufacturer || '',
    modelNumber: item.model_number || '',
    unit: (item.unit?.symbol || '式') as CatalogProduct['unit'],
    isOption: pricing ? !pricing.is_standard : false,
    description: item.note || '',
    productUrl: item.catalog_url || undefined,
    pricing: item.pricing?.map(p => ({
      plan: (p.product?.code || 'LACIE') as 'LACIE' | 'HOURS' | 'LIFE',
      planId: (p.product?.code || undefined) as 'LACIE' | 'HOURS' | 'LIFE' | undefined,
      price: p.price,
    })) || [],
    variants: item.variants?.map(v => ({
      id: v.id,
      color: v.color_name,
      colorCode: v.color_code || undefined,
      // バリアント画像がない場合はcatalog_urlをフォールバックとして使用
      imageUrl: v.images?.[0]?.image_url || fallbackImageUrl,
      thumbnailUrl: v.images?.[0]?.thumbnail_url || fallbackImageUrl,
    })) || [],
  };
};

// ステップ定義
export type StepId = 'design' | 'exterior' | 'interior' | 'equipment' | 'electrical' | 'furniture';
export type FilterTypeValue = 'all' | 'standard' | 'option';

export interface StepDefinition {
  id: StepId;
  label: string;
  description: string; // 説明文を追加
  icon: LucideIcon;
  emoji: string;
  gradient: string;
}

export const STEPS: StepDefinition[] = [
  { id: 'design', label: '設計', description: '間取りで決まる項目', icon: Ruler, emoji: '📐', gradient: 'from-blue-500 to-indigo-500' },
  { id: 'exterior', label: '外装', description: '外壁・屋根・玄関', icon: Home, emoji: '🏠', gradient: 'from-blue-500 to-indigo-500' },
  { id: 'interior', label: '内装', description: '床・壁・建具', icon: Sofa, emoji: '🛋️', gradient: 'from-blue-500 to-indigo-500' },
  { id: 'equipment', label: '水廻り設備', description: 'キッチン・バス・トイレ', icon: Wrench, emoji: '🚿', gradient: 'from-blue-500 to-indigo-500' },
  { id: 'electrical', label: '電気設備', description: '照明・スイッチ・コンセント', icon: Zap, emoji: '⚡', gradient: 'from-blue-500 to-indigo-500' },
  { id: 'furniture', label: '家具・家電', description: 'カーテン・エアコン', icon: Armchair, emoji: '🪑', gradient: 'from-blue-500 to-indigo-500' },
];

// お客様には非表示にするカテゴリ名（自動連動または設計者のみ選択）
export const HIDDEN_CATEGORIES = [
  '天井クロス',  // 壁クロスに連動して自動設定
  '照明',        // 照明器具は設計者が決定（ダウンライト施工費は自動計上）
  '間接照明',    // 間接照明は設計者が決定
  'TV視聴',      // 外部設備内のカードとして表示（サイドバーには表示しない）
];

// カテゴリがお客様に非表示かどうかをチェック
export const isHiddenCategory = (categoryName: string): boolean => {
  return HIDDEN_CATEGORIES.some(hidden =>
    categoryName.includes(hidden) || hidden.includes(categoryName)
  );
};

// アイテムの重複を除去（同じカテゴリ内で同じ名前のアイテムは1つだけ表示）
export const deduplicateItems = <T extends { id: string; name: string; category?: { name?: string } | null }>(
  items: T[]
): T[] => {
  const seen = new Map<string, T>();

  for (const item of items) {
    // カテゴリ名 + アイテム名でユニークキーを生成
    const categoryName = item.category?.name || '';
    const key = `${categoryName}:${item.name}`;

    // まだ見ていないアイテムのみ追加
    if (!seen.has(key)) {
      seen.set(key, item);
    }
  }

  return Array.from(seen.values());
};

// 「設計」に属するカテゴリ名（間取りによって決まる項目）
// ※外装タブのサイドバーから除外される（任意・未選択項目）
export const DESIGN_CATEGORIES = [
  '窓タイプ',    // APW330/APW430の選択
  '室内窓',      // 室内窓の有無（種類・ガラスは内装）
  '天井高',
  '小上がり',
  '建具追加',
  'アイアン階段',
  '庇',          // 庇の有無と種類（色は外装）
  'ガレージシャッター',   // ガレージシャッターの有無
  '電動ガレージシャッター', // ガレージシャッターの有無
  '換気システム',
  '換気システム選択',     // 第一種換気/DSDDの選択
  'インターホン個数',     // インターホン台数設定
  'エコキュート',
  '給湯器',
  '太陽光',      // 太陽光パネルの有無
  '太陽光・蓄電池',       // 太陽光・蓄電池セット
  '蓄電池',      // 蓄電池の有無
  'V2H',         // V2H（電気自動車充放電設備）の有無
  'ポーチサイズ拡張', // 設計者のみが管理者画面で選択
  'ガス引込み', // ガス引込みの有無（乾太くん等に影響）
  '天井変更工事',         // 天井変更工事
];

// 「家具・家電」に属するカテゴリ名
// ※「オリジナルダイニングテーブル」「エアコン」「カーテン」「家具」の4カテゴリのみ
export const FURNITURE_CATEGORIES = [
  'オリジナルダイニングテーブル',
  'エアコン',
  'カーテン',
  '家具',
];

// 「電気設備」に属するカテゴリ名
export const ELECTRICAL_CATEGORIES = [
  '照明',
  'ダウンライト',
  'シーリングライト',
  'ペンダントライト',
  '間接照明',
  'スイッチ',
  'コンセント',
  'スイッチ・コンセント',
  '電気設備',
  'インターホン',
  '配線',
  'ガス乾燥機', // 乾太くん
];

// IC提案依頼が有効なカテゴリ
// これらのカテゴリは間取り・部屋によって最適な選択が異なるため
// インテリアコーディネーターに相談できるオプションを表示
export interface ICConsultationOption {
  title: string;
  description: string;
  benefit: string;
}

export const IC_CONSULTATION_CATEGORIES: Record<string, ICConsultationOption> = {
  'カーテン': {
    title: 'ICにおまかせ',
    description: '間取りや窓サイズに合わせて、最適なカーテンをご提案します',
    benefit: '窓ごとに最適な素材・スタイルをプロが選定',
  },
  'ブラインド': {
    title: 'ICにおまかせ',
    description: '採光・プライバシーを考慮した最適なブラインドをご提案します',
    benefit: '部屋の用途に合わせた機能性をプロが提案',
  },
  'ダイニングテーブル': {
    title: 'ICにおまかせ',
    description: 'LDKの広さやインテリアに合わせて最適な家具をご提案します',
    benefit: 'サイズ・デザイン・素材をトータルコーディネート',
  },
  '造作家具': {
    title: 'ICに相談',
    description: 'オーダー家具で理想の空間を実現します',
    benefit: 'ミリ単位でのサイズ調整で無駄のない収納',
  },
  '家具': {
    title: 'ICにおまかせ',
    description: 'お部屋に合った家具選びをお手伝いします',
    benefit: 'インテリア全体の統一感をプロが提案',
  },
};

// カテゴリにIC提案オプションがあるかチェック
export const hasICConsultationOption = (categoryName: string): boolean => {
  return categoryName in IC_CONSULTATION_CATEGORIES;
};

// カテゴリのIC提案オプションを取得
export const getICConsultationOption = (categoryName: string): ICConsultationOption | null => {
  return IC_CONSULTATION_CATEGORIES[categoryName] || null;
};

// 必須カテゴリ（選ばないと家が建たない項目）
// ※【必須項目】.txtの指示に基づく
export const REQUIRED_CATEGORIES = [
  // 外装
  '外壁',        // ①
  'ポーチ',      // ②（タイル選択時は目地色を自動提案）
  '屋根',        // ③
  '外部建材',    // A: 軒樋・竪樋・土台水切・笠木・破風
  '軒天',        // ④
  'ガレージシャッター', // ⑤
  '窓',          // ⑥
  '玄関ドア',    // ⑦
  '外部設備',    // B: 電気メーター・コンセント・外部配管等・TV視聴
  // 内装必須項目（サイドバー先頭に表示）
  'ベース床',           // ① 居室のベースフローリング
  'ベースクロス（壁）', // ② 壁のベースクロス
  'ベースクロス（天井）', // ③ 天井のベースクロス
  'ベース建具',         // ④ 室内ドアのベース
  '周辺部材',           // ⑤ 巾木・窓台・玄関框・床見切り
  // 内装その他必須
  '玄関床',      // 玄関の床材
  '床材',        // フローリング等
  '壁クロス',    // 壁クロス
  '天井クロス',  // 天井クロス
  '建具',        // 室内ドア
  '巾木',        // 巾木
  '窓台',        // 窓台
  '笠木',        // 腰壁がある場合のみ
  '階段',        // 木製階段・アイアン階段の選択
  '畳',          // 畳がある場合のみ
  '物干し',      // 物干し
  '収納',        // 収納
  // 水廻り設備
  'キッチン',
  '洗面化粧台',
  '洗面台',
  'トイレ',
  'バス',
  '風呂',
];

// カテゴリ名が必須かどうかをチェック（部分一致）
export const isRequiredCategory = (categoryName: string): boolean => {
  return REQUIRED_CATEGORIES.some(req =>
    categoryName.includes(req) || req.includes(categoryName)
  );
};

// カテゴリの用語説明（初心者向け）
export const CATEGORY_EXPLANATIONS: Record<string, { description: string; tip: string }> = {
  // 外装
  '外壁': {
    description: '家の外側の壁です。見た目と耐久性に影響します。',
    tip: '汚れにくさやメンテナンス頻度で選ぶのがおすすめ',
  },
  '屋根': {
    description: '家の一番上を覆う部分です。雨や日差しから家を守ります。',
    tip: '色は外壁との組み合わせで考えましょう',
  },
  '玄関ドア': {
    description: '家の顔となる入口のドアです。',
    tip: '鍵のタイプ（電子錠など）も要チェック',
  },
  'サッシ': {
    description: '窓のフレーム部分です。断熱性能に大きく影響します。',
    tip: '寒い地域は断熱性能の高いものがおすすめ',
  },
  '軒天': {
    description: '屋根の裏側で、外から見上げると見える部分です。',
    tip: '外壁と同系色にすると統一感が出ます',
  },
  '破風': {
    description: '屋根の側面を覆う板です。雨から屋根を守ります。',
    tip: '屋根と同じ色にするのが一般的',
  },
  '樋・水切': {
    description: '屋根に降った雨水を地面に流す設備です。軒樋・竪樋・土台水切・笠木などを含みます。',
    tip: '外壁と同系色を選ぶと目立ちません',
  },
  'ポーチ': {
    description: '玄関前のタイル張りの部分です。',
    tip: '滑りにくい素材がおすすめ。タイル選択時は目地色も自動提案されます',
  },
  '外部配管': {
    description: '屋外の配管設備です。',
    tip: '色は外壁に合わせると統一感が出ます',
  },
  '外部設備': {
    description: '電気メーターボックス、外部コンセント、換気フードなど屋外に設置する設備です。',
    tip: '使いやすい位置に配置しましょう',
  },
  '庇': {
    description: '窓や玄関の上に付ける小さな屋根です。雨よけになります。',
    tip: '日差しの調整にも効果的',
  },
  // 内装
  'ベース床': {
    description: '居室全体に貼るベースとなるフローリングです。',
    tip: '家全体の雰囲気を決める重要な選択です',
  },
  'ベースクロス（壁）': {
    description: '壁全体に貼るベースとなる壁紙です。',
    tip: '白系は部屋が広く明るく見えます',
  },
  'ベースクロス（天井）': {
    description: '天井全体に貼るベースとなる壁紙です。',
    tip: '壁より明るい色にすると開放感が出ます',
  },
  'ベース建具': {
    description: '室内ドアの基本デザイン・色です。',
    tip: '床の色と合わせると統一感が出ます',
  },
  '周辺部材': {
    description: '巾木・窓台・玄関框・床見切りなどの仕上げ材です。',
    tip: '床や建具の色に合わせるのが一般的',
  },
  '床材': {
    description: '部屋の床に貼る素材です。フローリングが一般的。',
    tip: '傷つきにくさ、掃除しやすさで選ぶと良い',
  },
  '壁クロス': {
    description: '壁に貼る壁紙です。部屋の雰囲気を決めます。',
    tip: '白系は部屋が広く見えます',
  },
  '天井クロス': {
    description: '天井に貼る壁紙です。',
    tip: '壁より明るい色にすると開放感が出ます',
  },
  '巾木': {
    description: '床と壁の境目に付ける細い板です。',
    tip: '床の色に合わせるか、白にするのが定番',
  },
  '建具': {
    description: '室内のドアや引き戸のことです。',
    tip: '床の色と合わせると統一感が出ます',
  },
  '階段': {
    description: '上の階へ上がるための階段です。',
    tip: '手すりの素材も要チェック',
  },
  'カーテン': {
    description: '窓に付ける布です。光の調整やプライバシー保護に。',
    tip: '遮光カーテンは寝室におすすめ',
  },
  'ブラインド': {
    description: '窓に付ける羽根状の目隠しです。光の調整が細かくできます。',
    tip: 'モダンな雰囲気に合います',
  },
  // 設備
  '給気口': {
    description: '外の新鮮な空気を室内に取り込む換気口です。',
    tip: '色は壁に合わせると目立ちません',
  },
  '床下点検口': {
    description: '床下を点検するための蓋です。メンテナンス時に使用。',
    tip: '目立たない場所に設置します',
  },
  '天井点検口': {
    description: '天井裏を点検するための蓋です。',
    tip: '廊下や収納内に設置することが多い',
  },
  'タオルリング': {
    description: 'タオルを掛ける輪っか状の金具です。',
    tip: '洗面台の横に設置するのが一般的',
  },
  'タオルバー': {
    description: 'タオルを掛ける棒状の金具です。',
    tip: 'バスタオル用は長めのものを',
  },
  'ペーパーホルダー': {
    description: 'トイレットペーパーを設置する金具です。',
    tip: '2連タイプが便利',
  },
  'キッチン': {
    description: '料理をするための台所設備一式です。',
    tip: '作業スペースの広さと収納量をチェック',
  },
  'バス': {
    description: '浴室設備一式です。お風呂場のこと。',
    tip: '掃除のしやすさが重要なポイント',
  },
  '洗面台': {
    description: '顔を洗ったり歯を磨いたりする場所です。',
    tip: '収納力と鏡の大きさをチェック',
  },
  'トイレ': {
    description: 'トイレの便器です。',
    tip: '節水タイプがおすすめ',
  },
  'エコキュート': {
    description: '電気でお湯を沸かす給湯器です。光熱費が安い。',
    tip: '家族人数に合ったタンク容量を選ぶ',
  },
  '換気システム': {
    description: '家全体の空気を入れ替えるシステムです。',
    tip: '24時間換気が標準装備',
  },
  '太陽光': {
    description: '屋根に付けるソーラーパネルです。電気を作れます。',
    tip: '売電収入で元が取れる場合も',
  },
  '蓄電池': {
    description: '太陽光で作った電気を貯めるバッテリーです。',
    tip: '停電時にも電気が使えて安心',
  },
};

// カテゴリの説明を取得（部分一致）
export const getCategoryExplanation = (categoryName: string): { description: string; tip: string } | null => {
  // 完全一致を優先
  if (CATEGORY_EXPLANATIONS[categoryName]) {
    return CATEGORY_EXPLANATIONS[categoryName];
  }
  // 部分一致を検索
  for (const [key, value] of Object.entries(CATEGORY_EXPLANATIONS)) {
    if (categoryName.includes(key) || key.includes(categoryName)) {
      return value;
    }
  }
  return null;
};

// おすすめバッジの種類
export type RecommendBadgeType = 'popular' | 'recommended' | 'beginner' | 'cost-effective' | null;

export interface RecommendBadgeInfo {
  type: RecommendBadgeType;
  label: string;
  color: string;
  bgColor: string;
}

// おすすめバッジの定義
export const RECOMMEND_BADGES: Record<Exclude<RecommendBadgeType, null>, RecommendBadgeInfo> = {
  popular: {
    type: 'popular',
    label: '人気No.1',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-100 border-yellow-300',
  },
  recommended: {
    type: 'recommended',
    label: '迷ったらコレ',
    color: 'text-blue-700',
    bgColor: 'bg-blue-100 border-blue-300',
  },
  beginner: {
    type: 'beginner',
    label: '初心者向け',
    color: 'text-blue-700',
    bgColor: 'bg-blue-100 border-blue-300',
  },
  'cost-effective': {
    type: 'cost-effective',
    label: 'コスパ◎',
    color: 'text-purple-700',
    bgColor: 'bg-purple-100 border-purple-300',
  },
};

// 商品のおすすめバッジを判定（標準品の最初の商品 = 迷ったらコレ）
// ※1種類しかない場合は「迷ったらコレ」は表示しない（迷いようがないため）
export const getRecommendBadge = (
  item: { id: string; name: string; is_hit?: boolean },
  isStandard: boolean,
  isFirstStandardInCategory: boolean,
  standardCountInCategory: number = 1
): RecommendBadgeInfo | null => {
  // HITフラグが立っている = 人気No.1
  if (item.is_hit) {
    return RECOMMEND_BADGES.popular;
  }
  // カテゴリ内の最初の標準品 = 迷ったらコレ
  // ただし、標準品が1つしかない場合は表示しない（迷いようがないため）
  if (isStandard && isFirstStandardInCategory && standardCountInCategory > 1) {
    return RECOMMEND_BADGES.recommended;
  }
  return null;
};

// ========================================
// 「不要」オプション設定
// ========================================

export interface NotNeededOption {
  title: string;
  description: string;
  // 部屋適用が必要かどうか
  requiresRoomSelection?: boolean;
}

// カテゴリごとの「不要」オプション設定
// 設定があるカテゴリは「不要」カードを表示する
export const NOT_NEEDED_OPTIONS: Record<string, NotNeededOption> = {
  // 外装オプション
  'TVアンテナ': {
    title: 'つけない',
    description: '引き渡し後に光ケーブル契約をして視聴する場合など',
  },
  '屋外カメラ': {
    title: '設置しない',
    description: '防犯カメラを設置しない場合',
  },
  '宅配ボックス': {
    title: '設置しない',
    description: '宅配ボックスを設置しない場合',
  },
  '庇': {
    title: '設置しない',
    description: '玄関・窓上に庇を設置しない場合',
  },

  // 内装オプション
  '造作ニッチ': {
    title: '不要',
    description: 'ニッチ（壁の凹み収納）を設置しない場合',
    requiresRoomSelection: true,
  },
  'アクセントクロス': {
    title: '不要',
    description: 'アクセントクロスを使用しない場合',
    requiresRoomSelection: true,
  },
  'アクセントタイル': {
    title: '不要',
    description: 'タイル仕上げを使用しない場合',
    requiresRoomSelection: true,
  },
  'ウッドパネル': {
    title: '不要',
    description: 'ウッドパネルを使用しない場合',
    requiresRoomSelection: true,
  },
  'カーテン': {
    title: '施主支給',
    description: 'カーテンを自分で用意する場合',
    requiresRoomSelection: true,
  },
  'ブラインド': {
    title: '不要',
    description: 'ブラインドを設置しない場合',
    requiresRoomSelection: true,
  },

  // 設備オプション
  '太陽光': {
    title: '設置しない',
    description: '太陽光パネルを設置しない場合',
  },
  '蓄電池': {
    title: '設置しない',
    description: '蓄電池を設置しない場合',
  },
  '床暖房': {
    title: '設置しない',
    description: '床暖房を設置しない場合',
    requiresRoomSelection: true,
  },

  // 収納オプション
  '玄関収納': {
    title: '無し',
    description: '玄関収納を設置しない場合',
  },
  'トイレ収納': {
    title: '無し',
    description: 'トイレ収納を設置しない場合',
  },
  'その他収納': {
    title: '無し',
    description: '床下収納・ランドリー可動棚等を設置しない場合',
  },
};

// カテゴリに「不要」オプションがあるかチェック
export const hasNotNeededOption = (categoryName: string): boolean => {
  return categoryName in NOT_NEEDED_OPTIONS;
};

// カテゴリの「不要」オプションを取得
export const getNotNeededOption = (categoryName: string): NotNeededOption | null => {
  return NOT_NEEDED_OPTIONS[categoryName] || null;
};

// ========================================
// 選択状態の種類
// ========================================

export type SelectionStatus = 'unconfirmed' | 'not_needed' | 'selected';

export interface CategorySelectionState {
  status: SelectionStatus;
  selectedProductId?: string;
  selectedVariantId?: string;
  appliedRooms?: string[]; // 適用する部屋のIDリスト
  note?: string;
}
