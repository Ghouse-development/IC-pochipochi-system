// 本番環境詳細デバッグ
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function debugProd() {
  console.log('=== 本番環境詳細デバッグ ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  // すべてのコンソールログを記録
  const logs = [];
  page.on('console', msg => {
    logs.push(`[${msg.type()}] ${msg.text()}`);
  });

  // ネットワークリクエストを監視
  const apiCalls = [];
  page.on('response', response => {
    const url = response.url();
    if (url.includes('/api/') || url.includes('supabase')) {
      apiCalls.push({
        url: url.substring(0, 100),
        status: response.status(),
        ok: response.ok()
      });
    }
  });

  try {
    // 1. ログインページにアクセス
    console.log('1. ログインページにアクセス...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    // 2. ログイン実行
    console.log('\n2. ログイン実行...');
    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);

    // クリック前のURLを記録
    const beforeUrl = page.url();
    console.log(`   クリック前URL: ${beforeUrl}`);

    // ログインボタンをクリック
    await page.locator('button[type="submit"]').click();

    // ナビゲーションを待つ
    console.log('   ログインボタンクリック...');
    await page.waitForTimeout(8000);

    const afterUrl = page.url();
    console.log(`   クリック後URL: ${afterUrl}`);

    // エラーメッセージの確認
    const errorEl = page.locator('.bg-red-50, .text-red-600, [class*="error"]');
    if (await errorEl.count() > 0) {
      const errorText = await errorEl.first().textContent();
      console.log(`   エラーメッセージ: ${errorText}`);
    }

    await page.screenshot({ path: 'debug-after-login.png' });

    // 3. API呼び出し確認
    console.log('\n3. API呼び出し:');
    apiCalls.forEach(call => {
      console.log(`   ${call.status} ${call.ok ? '✅' : '❌'} ${call.url}`);
    });

    // 4. コンソールログ確認
    console.log('\n4. コンソールログ:');
    logs.forEach(log => {
      if (log.includes('error') || log.includes('Error') || log.includes('fail') ||
          log.includes('auth') || log.includes('user') || log.includes('recursion')) {
        console.log(`   ${log.substring(0, 200)}`);
      }
    });

    // 5. LocalStorageの確認
    const localStorage = await page.evaluate(() => {
      const result = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (key.includes('supabase') || key.includes('auth') || key.includes('user')) {
          result[key] = window.localStorage.getItem(key)?.substring(0, 100);
        }
      }
      return result;
    });

    console.log('\n5. LocalStorage (auth関連):');
    Object.entries(localStorage).forEach(([key, value]) => {
      console.log(`   ${key}: ${value}...`);
    });

    // 6. 管理者ページに直接アクセスしてみる
    console.log('\n6. 管理者ページ直接アクセス...');
    await page.goto(`${PROD_URL}/admin`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);
    console.log(`   URL: ${page.url()}`);

    const pageContent = await page.content();
    const hasProjects = pageContent.includes('物件') || pageContent.includes('project');
    console.log(`   物件表示: ${hasProjects ? 'あり' : 'なし'}`);

    await page.screenshot({ path: 'debug-admin.png', fullPage: true });

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== デバッグ完了 ===');
}

debugProd();
