// ページロード時の認証フロー確認
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testPageLoadAuth() {
  console.log('=== ページロード時の認証フロー確認 ===\n');

  const browser = await chromium.launchPersistentContext('./temp-pageload-' + Date.now(), {
    headless: true,
    viewport: { width: 1920, height: 1080 },
  });

  const page = browser.pages()[0] || await browser.newPage();

  // 全てのネットワークリクエストを監視
  const authCalls = [];
  page.on('response', response => {
    const url = response.url();
    if (url.includes('/api/auth') || url.includes('auth/v1') || url.includes('/users')) {
      authCalls.push({
        url: url.substring(0, 80),
        status: response.status()
      });
    }
  });

  // 全てのコンソールログを監視
  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('Auth') || text.includes('auth') || text.includes('user') ||
        text.includes('session') || msg.type() === 'error') {
      console.log(`[LOG] ${text.substring(0, 100)}`);
    }
  });

  try {
    // Step 1: ログイン
    console.log('=== Step 1: ログイン ===');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);

    authCalls.length = 0;
    await page.locator('button[type="submit"]').click();

    // 認証完了待ち
    for (let i = 0; i < 10; i++) {
      await page.waitForTimeout(1000);
      if (!page.url().includes('/login')) break;
    }

    console.log('\nStep 1 APIコール:');
    authCalls.forEach(call => console.log(`  [${call.status}] ${call.url}`));

    // LocalStorage確認
    const tokenBefore = await page.evaluate(() => {
      return window.localStorage.getItem('sb-qqzqffkiyzeaampotgnn-auth-token');
    });
    console.log('\nトークン:', tokenBefore ? '存在' : 'なし');

    await page.screenshot({ path: 'test-pageload-1.png' });
    console.log('\n現在URL:', page.url());

    // Step 2: 別のページに移動
    console.log('\n=== Step 2: 新しいタブで/adminに直接アクセス ===');
    const page2 = await browser.newPage();

    // ネットワーク監視
    const authCalls2 = [];
    page2.on('response', response => {
      const url = response.url();
      if (url.includes('/api/auth') || url.includes('auth/v1') || url.includes('/users')) {
        authCalls2.push({
          url: url.substring(0, 80),
          status: response.status()
        });
      }
    });

    page2.on('console', msg => {
      const text = msg.text();
      if (text.includes('Auth') || text.includes('auth') || text.includes('session') ||
          msg.type() === 'error') {
        console.log(`[TAB2] ${text.substring(0, 100)}`);
      }
    });

    await page2.goto(`${PROD_URL}/admin`, { waitUntil: 'networkidle', timeout: 30000 });
    await page2.waitForTimeout(5000);

    console.log('\nStep 2 APIコール:');
    authCalls2.forEach(call => console.log(`  [${call.status}] ${call.url}`));

    await page2.screenshot({ path: 'test-pageload-2.png' });
    console.log('\n新タブURL:', page2.url());

    // ページ内容
    const text = await page2.evaluate(() => document.body.innerText.substring(0, 200));
    console.log('\nページ内容:', text);

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== テスト完了 ===');
}

testPageLoadAuth();
