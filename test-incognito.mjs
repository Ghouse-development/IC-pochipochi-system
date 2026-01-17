// 完全なプライベートモードでテスト
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testIncognito() {
  console.log('=== プライベートモードテスト ===\n');

  const browser = await chromium.launch({
    headless: true,
    args: ['--incognito']
  });

  // 明示的にプライベートコンテキストを作成
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });

  // すべてのLocalStorageをクリア
  await context.addInitScript(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  const page = await context.newPage();

  // すべてのコンソールログを詳細に表示
  page.on('console', msg => {
    const text = msg.text();
    // [AuthContext]を含むログを強調表示
    if (text.includes('[AuthContext]') || text.includes('auth') || text.includes('Auth')) {
      console.log(`>>> ${text}`);
    } else if (msg.type() === 'error') {
      console.log(`[ERROR] ${text.substring(0, 100)}`);
    }
  });

  // ネットワーク
  page.on('response', response => {
    const url = response.url();
    if (url.includes('/api/auth') || url.includes('users') || url.includes('token')) {
      console.log(`[NET ${response.status()}] ${url.substring(0, 100)}`);
    }
  });

  try {
    // 1. ログインページへ
    console.log('1. ログインページにアクセス...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    const initialUrl = page.url();
    console.log(`   URL: ${initialUrl}`);

    // ログインフォームを探す
    const emailInput = await page.locator('input[type="email"]');
    const hasForm = await emailInput.count() > 0;
    console.log(`   ログインフォーム: ${hasForm ? 'あり' : 'なし'}`);

    if (!hasForm) {
      console.log('   ログインページではありません');
      await page.screenshot({ path: 'test-incognito-noform.png' });
      await browser.close();
      return;
    }

    // 2. ログイン
    console.log('\n2. ログイン実行...');
    await emailInput.fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);
    await page.locator('button[type="submit"]').click();

    // 3. 処理待ち
    console.log('\n3. 認証処理中...');
    for (let i = 0; i < 20; i++) {
      await page.waitForTimeout(1000);
      const url = page.url();
      if (!url.includes('/login')) {
        console.log(`\n   ${i+1}秒後: リダイレクト → ${url}`);
        break;
      }
      if (i % 5 === 4) {
        console.log(`   ${i+1}秒経過...`);
      }
    }

    // 4. 結果
    console.log('\n4. 結果:');
    const finalUrl = page.url();
    console.log(`   最終URL: ${finalUrl}`);

    const content = await page.content();
    if (content.includes('403')) {
      console.log('   ❌ 403: 管理者権限なし');
    } else if (content.includes('物件') || content.includes('管理')) {
      console.log('   ✅ 管理画面表示');
    } else if (content.includes('カタログ')) {
      console.log('   カタログ画面');
    }

    await page.screenshot({ path: 'test-incognito-result.png' });

  } catch (error) {
    console.error('エラー:', error.message);
    await page.screenshot({ path: 'test-incognito-error.png' });
  }

  await browser.close();
  console.log('\n=== テスト完了 ===');
}

testIncognito();
