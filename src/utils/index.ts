/**
 * ユーティリティのエクスポート
 */

// バリデーション・サニタイズ
export {
  sanitizeHtml,
  sanitizeText,
  escapeSQL,
  sanitizeFileName,
  validateEmail,
  validatePhone,
  validatePostalCode,
  validatePassword,
  validateUrl,
  validateNumber,
  validateOrganizationCode,
  validateProductCode,
  validateForm,
  normalizeFullWidthNumbers,
  normalizeFullWidthAlpha,
  normalizePhone,
  normalizePostalCode,
  trimOrNull,
} from './validation';
export type { ValidationResult, FieldValidation, FormValidationResult } from './validation';

// レート制限
export {
  checkRateLimit,
  resetRateLimit,
  clearAllRateLimits,
  RATE_LIMIT_PRESETS,
  withRateLimit,
  useRateLimit,
  debounceWithRateLimit,
  throttleWithRateLimit,
  retryWithBackoff,
} from './rateLimiter';

// カラーマッピング
export { COLOR_MAP, getHexColor, isLightColor } from './colorMapping';

// エクスポート
export {
  exportProductsToExcel,
  exportProductsToCSV,
  exportProductsToJSON,
  exportCartToExcel,
  exportCartToCSV,
  generatePrintableHTML,
  openPrintWindow,
  exportData,
} from './exportProducts';
export type { ExportFormat, ExportOptions } from './exportProducts';

// 画像最適化
export {
  convertToWebP,
  resizeImage,
  generateLQIP,
  getDominantColor,
  isWebPSupported,
  getOptimalImageUrl,
  formatFileSize,
} from './imageOptimizer';
