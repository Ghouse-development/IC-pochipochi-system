/**
 * xlsx ライブラリの遅延ロードユーティリティ
 *
 * xlsxはバンドルサイズが大きい（約500KB）ため、
 * 必要になるまでロードを遅延させることで初期ロード時間を改善します。
 *
 * ⚠️ セキュリティ注意:
 * xlsx パッケージには既知の脆弱性があります（CVE-2024-22363, CVE-2024-22362）
 * - CVE-2024-22363: zip bomb による DoS
 * - CVE-2024-22362: プロトタイプ汚染
 *
 * 緩和策:
 * 1. このアプリケーションではxlsxは「エクスポート（出力）」専用で使用
 * 2. ユーザーアップロードのExcelファイル解析には使用しない
 * 3. サーバーサイドでの処理が必要な場合は exceljs 等の代替を検討
 *
 * 代替ライブラリ（将来の検討用）:
 * - exceljs: より安全だがバンドルサイズが大きい
 * - sheetjs-style: xlsxのフォーク（スタイリング機能付き）
 */

// キャッシュ用の変数
let xlsxModule: typeof import('xlsx') | null = null;
let loadingPromise: Promise<typeof import('xlsx')> | null = null;

/**
 * xlsxモジュールを遅延ロードして返す
 * 一度ロードされた後はキャッシュから返す
 */
export const loadXLSX = async (): Promise<typeof import('xlsx')> => {
  // 既にロード済みならキャッシュから返す
  if (xlsxModule) {
    return xlsxModule;
  }

  // ロード中なら同じPromiseを返す（重複ロード防止）
  if (loadingPromise) {
    return loadingPromise;
  }

  // 新規ロード
  loadingPromise = import('xlsx').then((module) => {
    xlsxModule = module;
    loadingPromise = null;
    return module;
  });

  return loadingPromise;
};

/**
 * xlsxがロード済みかどうかを確認
 */
export const isXLSXLoaded = (): boolean => {
  return xlsxModule !== null;
};

/**
 * プリロード用（ユーザーがエクスポート機能を使う可能性が高い画面で呼び出す）
 */
export const preloadXLSX = (): void => {
  if (!xlsxModule && !loadingPromise) {
    loadXLSX().catch(() => {
      // プリロード失敗は無視（実際の使用時に再試行される）
    });
  }
};
