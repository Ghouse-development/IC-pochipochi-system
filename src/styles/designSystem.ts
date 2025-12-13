// IC-ぽちぽちシステム デザインシステム
// 統一された色・スタイルを定義

export const colors = {
  // プライマリ（メインブランドカラー）
  primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6', // メインカラー
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },

  // セカンダリ（アクセント）
  secondary: {
    50: '#fef3c7',
    100: '#fde68a',
    200: '#fcd34d',
    300: '#fbbf24',
    400: '#f59e0b', // アクセントカラー
    500: '#d97706',
  },

  // 状態色
  status: {
    // 未決・未選択（警告）
    undecided: '#f97316', // orange-500
    undecidedBg: '#fff7ed', // orange-50
    undecidedBorder: '#fed7aa', // orange-200

    // 決定・選択済み（成功）
    decided: '#10b981', // emerald-500
    decidedBg: '#ecfdf5', // emerald-50
    decidedBorder: '#a7f3d0', // emerald-200

    // 標準品
    standard: '#14b8a6', // teal-500
    standardBg: '#f0fdfa', // teal-50

    // オプション品
    option: '#f97316', // orange-500
    optionBg: '#fff7ed', // orange-50

    // お気に入り
    favorite: '#ec4899', // pink-500
    favoriteBg: '#fdf2f8', // pink-50

    // 比較
    compare: '#8b5cf6', // violet-500
    compareBg: '#f5f3ff', // violet-50

    // エラー
    error: '#ef4444', // red-500
    errorBg: '#fef2f2', // red-50

    // 情報
    info: '#3b82f6', // blue-500
    infoBg: '#eff6ff', // blue-50
  },

  // ニュートラル
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  },
};

// グラデーション（使用を最小限に）
export const gradients = {
  primary: 'from-teal-500 to-teal-600',
  header: 'from-teal-600 to-teal-700',
  success: 'from-emerald-500 to-emerald-600',
  warning: 'from-amber-400 to-amber-500',
};

// シャドウ
export const shadows = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  card: 'shadow-md hover:shadow-lg transition-shadow',
};

// ボーダー半径
export const radius = {
  sm: 'rounded-lg',
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  full: 'rounded-full',
};

// スペーシング（基準値）
export const spacing = {
  card: 'p-4',
  section: 'p-6',
  button: 'px-4 py-2',
  buttonLg: 'px-6 py-3',
};

// コンポーネントスタイル
export const componentStyles = {
  // カード
  card: {
    base: 'bg-white rounded-xl shadow-sm border border-gray-100',
    hover: 'hover:shadow-md hover:border-gray-200 transition-all',
    selected: 'border-teal-400 shadow-md ring-2 ring-teal-100',
  },

  // ボタン
  button: {
    primary: 'bg-teal-500 hover:bg-teal-600 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
    outline: 'border-2 border-gray-200 hover:border-gray-300 text-gray-700',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  },

  // バッジ
  badge: {
    standard: 'bg-teal-500 text-white',
    option: 'bg-orange-500 text-white',
    hit: 'bg-red-500 text-white',
    count: 'bg-gray-100 text-gray-600',
  },

  // 入力
  input: {
    base: 'bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all',
  },

  // タブ
  tab: {
    active: 'bg-white text-teal-600 shadow-md',
    inactive: 'bg-white/20 text-white/80 hover:bg-white/30',
  },
};

// カテゴリアイコンと色のマッピング
export const categoryConfig = {
  exterior: {
    label: '外装',
    icon: 'Home',
    color: colors.primary[500],
    bgColor: colors.primary[50],
  },
  interior: {
    label: '内装',
    icon: 'Sofa',
    color: '#6366f1', // indigo-500
    bgColor: '#eef2ff', // indigo-50
  },
  equipment: {
    label: '設備',
    icon: 'Wrench',
    color: '#0ea5e9', // sky-500
    bgColor: '#f0f9ff', // sky-50
  },
};
