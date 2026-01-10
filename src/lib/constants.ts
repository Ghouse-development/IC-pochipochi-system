/**
 * アプリケーション全体で使用する定数
 */

// アニメーション・タイマー関連
export const ANIMATION_DURATIONS = {
  /** カートアイテム追加アニメーション（ms） */
  CART_ITEM_HIGHLIGHT: 500,
  /** 紙吹雪アニメーション（ms） */
  CONFETTI: 3000,
  /** コピー完了表示（ms） */
  COPY_FEEDBACK: 2000,
  /** ページリロード遅延（ms） */
  RELOAD_DELAY: 2000,
  /** データクリア後リロード遅延（ms） */
  CLEAR_RELOAD_DELAY: 1500,
} as const;

// カート・選択関連
export const CART_MILESTONES = {
  /** 紙吹雪を表示するマイルストーン */
  CONFETTI_THRESHOLDS: [5, 10, 15, 20] as readonly number[],
} as const;

// カテゴリ分類
export const CATEGORY_GROUPS = {
  /** 外装カテゴリ */
  EXTERIOR: ['外壁', 'ポーチ', 'ポーチ目地', '屋根', '樋', '軒天', '破風', '窓', '玄関ドア', '庇', '電動ガレージシャッター', '外部設備'] as readonly string[],
  /** 内装カテゴリ（必須項目を先頭に配置） */
  INTERIOR: ['ベース床', 'ベースクロス（壁）', 'ベースクロス（天井）', 'ベース建具', '周辺部材', '床材', '壁材', '天井', '建具', '収納', '階段'] as readonly string[],
  /** 設備カテゴリ */
  EQUIPMENT: ['キッチン', 'バス', '洗面台', 'トイレ', '給湯器', 'エアコン', '照明'] as readonly string[],
} as const;

// バリデーション
export const VALIDATION = {
  /** 階数の範囲 */
  FLOORS: { MIN: 1, MAX: 10 },
  /** 延床面積の範囲（㎡） */
  FLOOR_AREA: { MIN: 10, MAX: 1000 },
  /** 天井高の範囲（mm） */
  CEILING_HEIGHT: { MIN: 2000, MAX: 5000 },
} as const;

// LocalStorage キー
export const STORAGE_KEYS = {
  /** ユーザー情報 */
  USER: 'stylebook_user',
  /** 下書き見積もり */
  DRAFT_ESTIMATE: 'lifex_draft_estimate',
  /** 確定見積もり */
  FINALIZED_ESTIMATES: 'lifex_finalized_estimates',
  /** 最近の選択 */
  RECENT_SELECTIONS: 'lifex-recent-selections',
  /** 最終バックアップ日時 */
  LAST_BACKUP: 'lifex-last-backup',
  /** カートデータ */
  CART: 'lifex-cart-storage',
  /** 統計データ */
  STATISTICS: 'lifex-statistics-storage',
  /** ベンダー注文 */
  VENDOR_ORDERS: 'lifex-vendor-orders',
  /** バージョン管理 */
  VERSIONS: 'lifex-version-storage',
  /** チュートリアル完了 */
  TUTORIAL_COMPLETED: 'lifex-tutorial-completed',
  /** チュートリアル完了日時 */
  TUTORIAL_COMPLETED_AT: 'lifex-tutorial-completed-at',
  /** エラーログ */
  ERROR_LOGS: 'errorLogs',
} as const;
