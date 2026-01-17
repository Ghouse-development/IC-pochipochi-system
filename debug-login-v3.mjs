// ログインフロー詳細デバッグV3 - キャッシュバスター付き
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function debugLoginFlow() {
  console.log('=== ログインフロー詳細デバッグV3 ===\n');

  const browser = await chromium.launch({ headless: true });
  // キャッシュを無効にするためにbypassCSPを設定
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    bypassCSP: true,
    // キャッシュを無効化
    ignoreHTTPSErrors: true,
  });
  const page = await context.newPage();

  // キャッシュを無効にする
  await page.route('**/*', route => {
    const headers = route.request().headers();
    headers['cache-control'] = 'no-cache';
    headers['pragma'] = 'no-cache';
    route.continue({ headers });
  });

  // すべてのコンソールログを収集
  const allLogs = [];
  page.on('console', msg => {
    allLogs.push(`[${msg.type()}] ${msg.text()}`);
  });

  // すべてのネットワークリクエストを監視
  const allRequests = [];
  page.on('response', response => {
    const url = response.url();
    if (!url.includes('.js') && !url.includes('.css') && !url.includes('.png') && !url.includes('.ico') && !url.includes('.woff')) {
      allRequests.push({ status: response.status(), url: url.substring(0, 120) });
    }
  });

  try {
    // タイムスタンプ付きでアクセス（キャッシュバスター）
    const timestamp = Date.now();
    console.log('1. ログインページにアクセス...');
    await page.goto(`${PROD_URL}/login?_t=${timestamp}`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    // 2. フォームに入力
    console.log('\n2. フォームに入力...');
    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);

    // ネットワークリクエストとログをリセット
    allRequests.length = 0;
    allLogs.length = 0;

    // 3. ログインボタンをクリック
    console.log('\n3. ログインボタンをクリック...');
    await page.locator('button[type="submit"]').click();

    // 4. 15秒間待機して変更を監視
    for (let i = 0; i < 15; i++) {
      await page.waitForTimeout(1000);
      const url = page.url();
      if (!url.includes('/login')) {
        console.log(`   ${i+1}秒後: リダイレクト → ${url}`);
        break;
      }
    }

    // 5. すべてのリクエストを出力
    console.log('\n4. ネットワークリクエスト:');
    allRequests.forEach(req => {
      console.log(`   [${req.status}] ${req.url}`);
    });

    // 6. コンソールログを出力
    console.log('\n5. コンソールログ:');
    allLogs.forEach(log => {
      console.log(`   ${log.substring(0, 200)}`);
    });

    // 7. 最終状態
    console.log(`\n6. 最終URL: ${page.url()}`);

    await page.screenshot({ path: 'debug-login-v3.png' });

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== デバッグ完了 ===');
}

debugLoginFlow();
