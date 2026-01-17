// セッション維持テスト
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testSessionPersist() {
  console.log('=== セッション維持テスト ===\n');

  const browser = await chromium.launchPersistentContext('./temp-session-' + Date.now(), {
    headless: true,
    viewport: { width: 1920, height: 1080 },
  });

  const page = browser.pages()[0] || await browser.newPage();

  try {
    // 1. ログイン
    console.log('1. ログイン...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);
    await page.locator('button[type="submit"]').click();

    // リダイレクト待機
    console.log('   リダイレクト待機...');
    for (let i = 0; i < 10; i++) {
      await page.waitForTimeout(1000);
      const url = page.url();
      if (!url.includes('/login')) {
        console.log(`   ${url}`);
        break;
      }
    }

    // 2. LocalStorage確認
    console.log('\n2. LocalStorage確認...');
    const storage = await page.evaluate(() => {
      const items = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (key.includes('supabase') || key.includes('auth')) {
          items[key] = window.localStorage.getItem(key)?.substring(0, 80);
        }
      }
      return items;
    });
    console.log('   認証トークン:', Object.keys(storage).length > 0 ? '存在' : 'なし');
    Object.entries(storage).forEach(([key, value]) => {
      console.log(`   ${key}: ${value}...`);
    });

    // 3. 管理画面のスクリーンショット
    console.log('\n3. 現在の画面をキャプチャ...');
    await page.screenshot({ path: 'test-session-step1.png' });

    const currentUrl = page.url();
    console.log(`   URL: ${currentUrl}`);

    // 4. ページをリロード
    console.log('\n4. ページをリロード...');
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(5000);

    const afterReloadUrl = page.url();
    console.log(`   リロード後URL: ${afterReloadUrl}`);

    // LocalStorage再確認
    const storageAfter = await page.evaluate(() => {
      const items = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (key.includes('supabase') || key.includes('auth')) {
          items[key] = window.localStorage.getItem(key)?.substring(0, 80);
        }
      }
      return items;
    });
    console.log('   認証トークン:', Object.keys(storageAfter).length > 0 ? '存在' : 'なし');

    await page.screenshot({ path: 'test-session-step2.png' });

    // 5. ページ内容確認
    const text = await page.evaluate(() => document.body.innerText);
    console.log('\n5. ページ内容:');
    if (text.includes('管理ダッシュボード') || text.includes('STYLEBOOK')) {
      console.log('   ✅ 管理画面が表示されている');
    } else if (text.includes('ログイン')) {
      console.log('   ❌ ログインページが表示されている');
    }
    console.log(text.substring(0, 300));

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== テスト完了 ===');
}

testSessionPersist();
