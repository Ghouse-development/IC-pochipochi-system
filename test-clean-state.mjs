// クリーン状態テスト
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testCleanState() {
  console.log('=== クリーン状態テスト ===\n');

  // 新しいユーザーデータディレクトリを使用（完全にクリーン）
  const browser = await chromium.launchPersistentContext('./temp-browser-data-' + Date.now(), {
    headless: true,
    viewport: { width: 1920, height: 1080 },
  });

  const page = browser.pages()[0] || await browser.newPage();

  // コンソールログ監視
  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('AuthContext') || text.includes('auth') || text.includes('user') ||
        text.includes('API') || msg.type() === 'error') {
      console.log(`[LOG] ${text.substring(0, 150)}`);
    }
  });

  // ネットワーク監視
  page.on('response', response => {
    const url = response.url();
    if (url.includes('/api/auth') || url.includes('auth/v1')) {
      console.log(`[NET ${response.status()}] ${url.substring(0, 80)}`);
    }
  });

  try {
    console.log('1. ログインページにアクセス...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    const initialUrl = page.url();
    console.log(`   URL: ${initialUrl}`);

    // LocalStorage確認
    const storage = await page.evaluate(() => {
      const items = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        items[key] = window.localStorage.getItem(key)?.substring(0, 50);
      }
      return items;
    });
    console.log('   LocalStorage:', JSON.stringify(storage, null, 2));

    // ログインフォーム確認
    const hasEmail = await page.locator('input[type="email"]').count() > 0;
    console.log(`   ログインフォーム: ${hasEmail ? 'あり' : 'なし'}`);

    if (hasEmail) {
      console.log('\n2. ログイン実行...');
      await page.locator('input[type="email"]').fill(EMAIL);
      await page.locator('input[type="password"]').fill(PASSWORD);
      await page.locator('button[type="submit"]').click();

      console.log('\n3. 認証待機...');
      for (let i = 0; i < 15; i++) {
        await page.waitForTimeout(1000);
        const url = page.url();
        if (!url.includes('/login')) {
          console.log(`   ${i+1}秒: リダイレクト → ${url}`);
          break;
        }
        if (i % 5 === 4) console.log(`   ${i+1}秒経過...`);
      }
    }

    console.log('\n4. 結果:');
    console.log(`   URL: ${page.url()}`);

    const content = await page.content();
    if (content.includes('403')) console.log('   状態: 403');
    else if (content.includes('物件')) console.log('   状態: 管理画面OK');
    else if (content.includes('カタログ')) console.log('   状態: カタログ');

    await page.screenshot({ path: 'test-clean-state.png' });

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();

  // 一時ディレクトリの削除は手動で
  console.log('\n=== テスト完了 ===');
}

testCleanState();
