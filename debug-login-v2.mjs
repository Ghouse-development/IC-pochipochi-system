// ログインフロー詳細デバッグV2
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function debugLoginFlow() {
  console.log('=== ログインフロー詳細デバッグV2 ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  // すべてのコンソールログを収集
  const allLogs = [];
  page.on('console', msg => {
    allLogs.push(`[${msg.type()}] ${msg.text()}`);
  });

  // すべてのネットワークリクエストを監視
  const allRequests = [];
  page.on('request', request => {
    const url = request.url();
    if (!url.includes('.js') && !url.includes('.css') && !url.includes('.png') && !url.includes('.ico')) {
      allRequests.push({ type: 'req', method: request.method(), url: url.substring(0, 100) });
    }
  });

  page.on('response', response => {
    const url = response.url();
    if (!url.includes('.js') && !url.includes('.css') && !url.includes('.png') && !url.includes('.ico')) {
      allRequests.push({ type: 'res', status: response.status(), url: url.substring(0, 100) });
    }
  });

  try {
    // 1. ログインページにアクセス
    console.log('1. ログインページにアクセス...');
    allRequests.length = 0;
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    // 2. フォームに入力
    console.log('\n2. フォームに入力...');
    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);

    // ネットワークリクエストをリセット
    allRequests.length = 0;
    allLogs.length = 0;

    // 3. ログインボタンをクリック
    console.log('\n3. ログインボタンをクリック...');
    await page.locator('button[type="submit"]').click();

    // 4. 10秒間待機
    await page.waitForTimeout(10000);

    // 5. すべてのリクエストを出力
    console.log('\n4. ネットワークリクエスト（全て）:');
    allRequests.forEach(req => {
      if (req.type === 'res') {
        console.log(`   [${req.status}] ${req.url}`);
      }
    });

    // 6. コンソールログを出力
    console.log('\n5. コンソールログ（全て）:');
    allLogs.slice(0, 30).forEach(log => {
      console.log(`   ${log.substring(0, 150)}`);
    });

    // 7. 最終URL
    console.log(`\n6. 最終URL: ${page.url()}`);

    // 8. React状態を確認（window.__REACT_DEVTOOLS_GLOBAL_HOOK__は使えないが、LocalStorageは見れる）
    const authData = await page.evaluate(() => {
      const token = window.localStorage.getItem('sb-qqzqffkiyzeaampotgnn-auth-token');
      return token ? JSON.parse(token) : null;
    });
    console.log(`\n7. 認証トークン: ${authData ? '存在' : 'なし'}`);
    if (authData) {
      console.log(`   expires_at: ${authData.expires_at}`);
    }

    await page.screenshot({ path: 'debug-login-v2.png' });

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== デバッグ完了 ===');
}

debugLoginFlow();
