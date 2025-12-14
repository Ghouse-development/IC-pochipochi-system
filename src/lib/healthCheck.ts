/**
 * ヘルスチェック・システム監視
 */
import { supabase } from './supabase';

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  checks: {
    database: CheckResult;
    storage: CheckResult;
    auth: CheckResult;
    api: CheckResult;
  };
  timestamp: Date;
  responseTime: number;
}

interface CheckResult {
  status: 'pass' | 'fail' | 'warn';
  message: string;
  responseTime?: number;
}

/**
 * データベース接続チェック
 */
async function checkDatabase(): Promise<CheckResult> {
  const start = Date.now();
  try {
    const { error } = await supabase
      .from('system_settings')
      .select('id')
      .limit(1)
      .single();

    const responseTime = Date.now() - start;

    if (error && error.code !== 'PGRST116') {
      return {
        status: 'fail',
        message: `Database error: ${error.message}`,
        responseTime,
      };
    }

    if (responseTime > 3000) {
      return {
        status: 'warn',
        message: 'Database response is slow',
        responseTime,
      };
    }

    return {
      status: 'pass',
      message: 'Database is healthy',
      responseTime,
    };
  } catch (error) {
    return {
      status: 'fail',
      message: `Database connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      responseTime: Date.now() - start,
    };
  }
}

/**
 * ストレージチェック
 */
async function checkStorage(): Promise<CheckResult> {
  const start = Date.now();
  try {
    const { error } = await supabase.storage.listBuckets();

    const responseTime = Date.now() - start;

    if (error) {
      return {
        status: 'fail',
        message: `Storage error: ${error.message}`,
        responseTime,
      };
    }

    return {
      status: 'pass',
      message: 'Storage is healthy',
      responseTime,
    };
  } catch (error) {
    return {
      status: 'fail',
      message: `Storage connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      responseTime: Date.now() - start,
    };
  }
}

/**
 * 認証サービスチェック
 */
async function checkAuth(): Promise<CheckResult> {
  const start = Date.now();
  try {
    const { error } = await supabase.auth.getSession();

    const responseTime = Date.now() - start;

    if (error) {
      return {
        status: 'fail',
        message: `Auth error: ${error.message}`,
        responseTime,
      };
    }

    return {
      status: 'pass',
      message: 'Auth service is healthy',
      responseTime,
    };
  } catch (error) {
    return {
      status: 'fail',
      message: `Auth service failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      responseTime: Date.now() - start,
    };
  }
}

/**
 * API エンドポイントチェック
 */
async function checkApi(): Promise<CheckResult> {
  const start = Date.now();
  try {
    // Supabase REST API の疎通確認
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/rest/v1/`, {
      method: 'HEAD',
      headers: {
        apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
      },
    });

    const responseTime = Date.now() - start;

    if (!response.ok) {
      return {
        status: 'fail',
        message: `API returned ${response.status}`,
        responseTime,
      };
    }

    if (responseTime > 2000) {
      return {
        status: 'warn',
        message: 'API response is slow',
        responseTime,
      };
    }

    return {
      status: 'pass',
      message: 'API is healthy',
      responseTime,
    };
  } catch (error) {
    return {
      status: 'fail',
      message: `API connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      responseTime: Date.now() - start,
    };
  }
}

/**
 * 全体のヘルスチェック実行
 */
export async function performHealthCheck(): Promise<HealthStatus> {
  const start = Date.now();

  const [database, storage, auth, api] = await Promise.all([
    checkDatabase(),
    checkStorage(),
    checkAuth(),
    checkApi(),
  ]);

  const checks = { database, storage, auth, api };

  // 全体ステータスの判定
  const results = Object.values(checks);
  const hasFailure = results.some((r) => r.status === 'fail');
  const hasWarning = results.some((r) => r.status === 'warn');

  let status: HealthStatus['status'];
  if (hasFailure) {
    status = 'unhealthy';
  } else if (hasWarning) {
    status = 'degraded';
  } else {
    status = 'healthy';
  }

  return {
    status,
    checks,
    timestamp: new Date(),
    responseTime: Date.now() - start,
  };
}

/**
 * 定期的なヘルスチェック
 */
export function startHealthMonitoring(
  callback: (status: HealthStatus) => void,
  intervalMs = 60000
): () => void {
  const checkAndReport = async () => {
    const status = await performHealthCheck();
    callback(status);
  };

  // 初回実行
  checkAndReport();

  // 定期実行
  const intervalId = setInterval(checkAndReport, intervalMs);

  // クリーンアップ関数を返す
  return () => clearInterval(intervalId);
}

/**
 * ヘルスチェック結果をコンソールに出力（開発用）
 */
export function logHealthStatus(status: HealthStatus): void {
  const statusEmoji = {
    healthy: '✅',
    degraded: '⚠️',
    unhealthy: '❌',
  };

  const checkEmoji = {
    pass: '✅',
    warn: '⚠️',
    fail: '❌',
  };

  console.group(`${statusEmoji[status.status]} System Health Check`);
  console.log(`Status: ${status.status.toUpperCase()}`);
  console.log(`Total time: ${status.responseTime}ms`);
  console.log(`Timestamp: ${status.timestamp.toISOString()}`);

  console.group('Checks:');
  Object.entries(status.checks).forEach(([name, result]) => {
    console.log(
      `${checkEmoji[result.status]} ${name}: ${result.message} (${result.responseTime}ms)`
    );
  });
  console.groupEnd();
  console.groupEnd();
}
