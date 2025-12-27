import { Home, Sofa, Wrench, Ruler } from 'lucide-react';
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
      is_standard: p.price === 0,
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
      planId: (p.product?.code || undefined) as 'LACIE' | 'HOURS' | 'LIFE' | undefined,
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

// ステップ定義
export type StepId = 'design' | 'exterior' | 'interior' | 'equipment';
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
  { id: 'design', label: '設計', description: '間取りで決まる項目', icon: Ruler, emoji: '📐', gradient: 'from-purple-500 to-violet-500' },
  { id: 'exterior', label: '外装', description: '外壁・屋根・玄関', icon: Home, emoji: '🏠', gradient: 'from-emerald-500 to-teal-500' },
  { id: 'interior', label: '内装', description: '床・壁・ドア', icon: Sofa, emoji: '🛋️', gradient: 'from-blue-500 to-indigo-500' },
  { id: 'equipment', label: '設備', description: 'キッチン・バス・トイレ', icon: Wrench, emoji: '🚿', gradient: 'from-cyan-500 to-blue-500' },
];

// 「設計」に属するカテゴリ名（間取りによって決まる項目）
export const DESIGN_CATEGORIES = [
  '天井高',
  '小上がり',
  '建具追加',
  'アイアン階段',
  'ポーチ大きさ',
  '庇',
  'ガレージシャッター',
  '電動ガレージシャッター',
  '換気システム',
  'エコキュート',
  '太陽光・蓄電池',
  '蓄電池',
  '太陽光',
];

// 必須カテゴリ（選ばないと家が建たない項目）
export const REQUIRED_CATEGORIES = [
  // 外装
  '外壁',
  '屋根',
  '玄関ドア',
  'サッシ',
  '軒天',
  '破風',
  '雨樋',
  'ポスト',
  '表札',
  // 内装
  '床材',
  '壁クロス',
  '天井クロス',
  '巾木',
  '建具',
  '階段',
  // 設備
  '給気口',
  '床下点検口',
  '天井点検口',
  'タオルリング',
  'タオルバー',
  'ペーパーホルダー',
  'キッチン',
  'バス',
  '洗面台',
  'トイレ',
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
  '雨樋': {
    description: '屋根に降った雨水を地面に流すパイプです。',
    tip: '目立たない色を選ぶ方が多いです',
  },
  'ポスト': {
    description: '郵便物を受け取る箱です。',
    tip: '宅配ボックス付きが便利',
  },
  '表札': {
    description: '家の名前を示すプレートです。',
    tip: 'デザインは家の雰囲気に合わせて',
  },
  '庇': {
    description: '窓や玄関の上に付ける小さな屋根です。雨よけになります。',
    tip: '日差しの調整にも効果的',
  },
  // 内装
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
    color: 'text-green-700',
    bgColor: 'bg-green-100 border-green-300',
  },
  'cost-effective': {
    type: 'cost-effective',
    label: 'コスパ◎',
    color: 'text-purple-700',
    bgColor: 'bg-purple-100 border-purple-300',
  },
};

// 商品のおすすめバッジを判定（標準品の最初の商品 = 迷ったらコレ）
export const getRecommendBadge = (
  item: { id: string; name: string; is_hit?: boolean },
  isStandard: boolean,
  isFirstStandardInCategory: boolean
): RecommendBadgeInfo | null => {
  // HITフラグが立っている = 人気No.1
  if (item.is_hit) {
    return RECOMMEND_BADGES.popular;
  }
  // カテゴリ内の最初の標準品 = 迷ったらコレ
  if (isStandard && isFirstStandardInCategory) {
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
