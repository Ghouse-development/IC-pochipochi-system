/**
 * Web Vitals Performance Monitoring
 * Core Web Vitals (LCP, FID, CLS) とその他のメトリクスを計測
 */
import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';

// 開発環境でのみログ出力
const isDev = import.meta.env.DEV;

// メトリクスの閾値（Googleの推奨値）
const THRESHOLDS = {
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FCP: { good: 1800, needsImprovement: 3000 },
  INP: { good: 200, needsImprovement: 500 },
  LCP: { good: 2500, needsImprovement: 4000 },
  TTFB: { good: 800, needsImprovement: 1800 },
};

// メトリクスの評価
function getRating(metric: Metric): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[metric.name as keyof typeof THRESHOLDS];
  if (!threshold) return 'good';

  if (metric.value <= threshold.good) return 'good';
  if (metric.value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

// メトリクスログ（開発環境のみ）
function logMetric(metric: Metric) {
  if (!isDev) return;

  const rating = getRating(metric);
  const ratingEmoji = rating === 'good' ? '✅' : rating === 'needs-improvement' ? '⚠️' : '❌';

  console.log(
    `[Web Vitals] ${ratingEmoji} ${metric.name}: ${metric.value.toFixed(2)}${metric.name === 'CLS' ? '' : 'ms'} (${rating})`
  );
}

// メトリクスをGoogle Analytics 4に送信（設定されている場合のみ）
function sendMetric(metric: Metric) {
  // Google Analytics 4に送信（設定されている場合）
  if (typeof gtag !== 'undefined') {
    gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }
}

// メトリクス収集ハンドラー
function handleMetric(metric: Metric) {
  // 開発環境ではログのみ
  logMetric(metric);

  // 本番環境では送信も行う
  if (import.meta.env.PROD) {
    sendMetric(metric);
  }
}

// Web Vitals計測開始
export function initWebVitals() {
  // Core Web Vitals
  onCLS(handleMetric);   // Cumulative Layout Shift
  onLCP(handleMetric);   // Largest Contentful Paint
  onINP(handleMetric);   // Interaction to Next Paint (FIDの後継)

  // その他のメトリクス
  onFCP(handleMetric);   // First Contentful Paint
  onTTFB(handleMetric);  // Time to First Byte

  if (isDev) {
    console.log('[Web Vitals] Monitoring initialized');
  }
}

// パフォーマンスレポート取得
export function getPerformanceReport(): {
  timing: PerformanceTiming | null;
  navigation: PerformanceNavigationTiming | null;
  resources: PerformanceResourceTiming[];
} {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

  return {
    timing: performance.timing || null,
    navigation: navigation || null,
    resources: resources.slice(-20), // 最新20件のリソース
  };
}

// 手動でパフォーマンスマークを追加
export function markPerformance(name: string) {
  performance.mark(name);
}

// パフォーマンス計測
export function measurePerformance(name: string, startMark: string, endMark?: string) {
  try {
    if (endMark) {
      performance.measure(name, startMark, endMark);
    } else {
      performance.measure(name, startMark);
    }
  } catch (error) {
    console.warn(`[Web Vitals] Failed to measure ${name}:`, error);
  }
}

// グローバル型定義
declare global {
  function gtag(command: string, action: string, params?: Record<string, unknown>): void;
}
