// 新規ログインテスト（クリーンセッション）
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testFreshLogin() {
  console.log('=== 新規ログインテスト（クリーンセッション） ===\n');

  const browser = await chromium.launch({ headless: true });
  // 新しいセッション（クリーンなコンテキスト）
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    storageState: undefined // LocalStorage/Cookieなし
  });
  const page = await context.newPage();

  // コンソールログを収集
  const logs = [];
  page.on('console', msg => {
    const text = msg.text();
    logs.push(`[${msg.type()}] ${text}`);
    // AuthContextのログをリアルタイムで表示
    if (text.includes('[AuthContext]')) {
      console.log(`   ${text}`);
    }
  });

  // ネットワークレスポンスを監視
  page.on('response', response => {
    const url = response.url();
    if (url.includes('/api/') || url.includes('users') || url.includes('token')) {
      console.log(`   [NET ${response.status()}] ${url.substring(0, 80)}`);
    }
  });

  try {
    // 1. ログインページにアクセス
    console.log('1. ログインページにアクセス...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    console.log(`   URL: ${page.url()}`);

    // ログインフォームがあるか確認
    const hasForm = await page.locator('input[type="email"]').count() > 0;
    console.log(`   ログインフォーム: ${hasForm ? 'あり' : 'なし'}`);

    if (!hasForm) {
      console.log('   既にログイン済みです');
      await browser.close();
      return;
    }

    // 2. ログイン実行
    console.log('\n2. ログイン実行...');
    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);
    await page.locator('button[type="submit"]').click();

    // 3. 待機
    console.log('\n3. 認証処理中...');
    for (let i = 0; i < 15; i++) {
      await page.waitForTimeout(1000);
      const url = page.url();
      if (!url.includes('/login')) {
        console.log(`   ${i+1}秒後: リダイレクト成功 → ${url}`);
        break;
      }
      if (i === 14) {
        console.log(`   15秒経過: リダイレクトなし`);
      }
    }

    // 4. 結果確認
    console.log('\n4. 結果確認:');
    const finalUrl = page.url();
    console.log(`   URL: ${finalUrl}`);

    // ページ内容を確認
    const content = await page.content();
    if (content.includes('403')) {
      console.log('   ❌ 403エラー（アクセス権限なし）');
    } else if (content.includes('管理ダッシュボード') || content.includes('物件一覧')) {
      console.log('   ✅ 管理ダッシュボード表示成功');
    } else if (content.includes('ログイン')) {
      console.log('   ❌ ログインページのまま');
    }

    await page.screenshot({ path: 'test-fresh-login.png' });

    // 5. コンソールログ確認
    console.log('\n5. 関連コンソールログ:');
    logs.filter(log =>
      log.includes('AuthContext') || log.includes('auth') ||
      log.includes('user') || log.includes('error') || log.includes('Error')
    ).forEach(log => console.log(`   ${log.substring(0, 150)}`));

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== テスト完了 ===');
}

testFreshLogin();
