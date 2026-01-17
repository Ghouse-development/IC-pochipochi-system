// 認証フロー詳細テスト
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testAuthFlow() {
  console.log('=== 認証フロー詳細テスト ===\n');

  const browser = await chromium.launch({ headless: true });

  // 完全に新しいプロファイルを使用
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    // 全てのストレージを無視
    storageState: { cookies: [], origins: [] }
  });

  const page = await context.newPage();

  // 全コンソールログを表示
  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('AuthContext') || text.includes('auth') || text.includes('API') ||
        text.includes('user') || msg.type() === 'error') {
      console.log(`[CONSOLE] ${text.substring(0, 200)}`);
    }
  });

  // ネットワーク監視
  page.on('response', response => {
    const url = response.url();
    if (url.includes('/api/') || url.includes('supabase')) {
      console.log(`[NET ${response.status()}] ${url.substring(0, 100)}`);
    }
  });

  try {
    // まずLocalStorageをクリア
    await page.addInitScript(() => {
      window.localStorage.clear();
      window.sessionStorage.clear();
    });

    console.log('1. ログインページにアクセス...');
    await page.goto(`${PROD_URL}/login?nocache=${Date.now()}`, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // networkidle前にLocalStorageをクリア
    await page.evaluate(() => {
      window.localStorage.clear();
      window.sessionStorage.clear();
    });

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    const url = page.url();
    console.log(`\n   現在のURL: ${url}`);

    // ログインフォームを確認
    const emailInput = await page.locator('input[type="email"]');
    const hasForm = await emailInput.count() > 0;
    console.log(`   ログインフォーム: ${hasForm ? 'あり' : 'なし'}`);

    if (hasForm) {
      console.log('\n2. ログイン実行...');
      await emailInput.fill(EMAIL);
      await page.locator('input[type="password"]').fill(PASSWORD);
      await page.locator('button[type="submit"]').click();

      console.log('\n3. 認証待機（20秒）...');
      for (let i = 0; i < 20; i++) {
        await page.waitForTimeout(1000);
        const currentUrl = page.url();
        if (!currentUrl.includes('/login')) {
          console.log(`   ${i+1}秒後: リダイレクト → ${currentUrl}`);
          break;
        }
        if (i % 5 === 4) {
          console.log(`   ${i+1}秒経過...`);
        }
      }
    }

    console.log('\n4. 結果:');
    const finalUrl = page.url();
    console.log(`   最終URL: ${finalUrl}`);

    const content = await page.content();
    if (content.includes('403')) {
      console.log('   状態: 403エラー（管理者権限なし）');
    } else if (content.includes('物件') || content.includes('プロジェクト')) {
      console.log('   状態: 管理画面表示成功');
    } else if (content.includes('カタログ')) {
      console.log('   状態: カタログ画面');
    } else {
      console.log('   状態: 不明');
    }

    await page.screenshot({ path: 'test-auth-flow.png' });

  } catch (error) {
    console.error('エラー:', error.message);
    await page.screenshot({ path: 'test-auth-flow-error.png' });
  }

  await browser.close();
  console.log('\n=== テスト完了 ===');
}

testAuthFlow();
