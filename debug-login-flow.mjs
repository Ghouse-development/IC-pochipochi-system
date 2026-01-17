// ログインフロー詳細デバッグ
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function debugLoginFlow() {
  console.log('=== ログインフロー詳細デバッグ ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  const logs = [];
  page.on('console', msg => {
    logs.push(`[${msg.type()}] ${msg.text()}`);
  });

  const networkCalls = [];
  page.on('response', response => {
    const url = response.url();
    if (url.includes('/api/') || url.includes('supabase') || url.includes('auth')) {
      networkCalls.push({ url: url.substring(0, 80), status: response.status() });
    }
  });

  try {
    // 1. ログインページにアクセス
    console.log('1. ログインページにアクセス...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    console.log(`   URL: ${page.url()}`);

    // 2. フォームに入力
    console.log('\n2. フォームに入力...');
    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);

    // 3. ログインボタンをクリック
    console.log('\n3. ログインボタンをクリック...');
    networkCalls.length = 0; // リセット
    await page.locator('button[type="submit"]').click();

    // 4. ページナビゲーションまたはURL変更を待つ
    console.log('\n4. URL変更を監視中...');
    for (let i = 0; i < 15; i++) {
      await page.waitForTimeout(1000);
      const currentUrl = page.url();
      console.log(`   ${i+1}秒後: ${currentUrl}`);
      if (!currentUrl.includes('/login')) {
        console.log('   ✅ リダイレクト成功!');
        break;
      }
    }

    // 5. 最終URL確認
    const finalUrl = page.url();
    console.log(`\n5. 最終URL: ${finalUrl}`);

    // 6. ネットワークコール
    console.log('\n6. ネットワークコール:');
    networkCalls.forEach(call => {
      console.log(`   ${call.status} ${call.url}`);
    });

    // 7. 関連コンソールログ
    console.log('\n7. 関連コンソールログ:');
    logs.filter(log =>
      log.includes('auth') || log.includes('user') || log.includes('error') ||
      log.includes('fetch') || log.includes('API') || log.includes('redirect') ||
      log.includes('navigate')
    ).forEach(log => {
      console.log(`   ${log.substring(0, 150)}`);
    });

    // 8. ユーザー状態確認
    console.log('\n8. LocalStorage確認:');
    const authToken = await page.evaluate(() => {
      const token = window.localStorage.getItem('sb-qqzqffkiyzeaampotgnn-auth-token');
      return token ? 'トークンあり' : 'トークンなし';
    });
    console.log(`   ${authToken}`);

    await page.screenshot({ path: 'debug-login-final.png' });

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== デバッグ完了 ===');
}

debugLoginFlow();
