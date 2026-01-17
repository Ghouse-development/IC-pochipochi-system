// 本番環境検証
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function verifyProd() {
  console.log('=== 本番環境検証 ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  const logs = [];
  page.on('console', msg => {
    const text = msg.text();
    if (text.includes('auth') || text.includes('user') || text.includes('error') || text.includes('API')) {
      logs.push(`[${msg.type()}] ${text.substring(0, 150)}`);
    }
  });

  try {
    // 1. ログインページに直接アクセス
    console.log('1. ログインページ確認...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    const currentUrl = page.url();
    console.log(`   URL: ${currentUrl}`);

    // ログインフォームがあるか
    const emailInput = page.locator('input[type="email"]');
    const hasLoginForm = await emailInput.count() > 0;
    console.log(`   ログインフォーム: ${hasLoginForm ? 'あり' : 'なし'}`);

    if (!hasLoginForm) {
      // デモモードで開いている可能性 - 管理者ページにアクセスしてみる
      console.log('\n2. 管理者ページ確認...');
      await page.goto(`${PROD_URL}/admin`, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(3000);

      const adminUrl = page.url();
      console.log(`   URL: ${adminUrl}`);

      // ログインフォームにリダイレクトされたか
      const emailInputAdmin = page.locator('input[type="email"]');
      if (await emailInputAdmin.count() > 0) {
        console.log('   → ログインページにリダイレクト');
        // ログイン実行
        await emailInputAdmin.fill(EMAIL);
        await page.locator('input[type="password"]').fill(PASSWORD);
        await page.screenshot({ path: 'verify-login-before.png' });
        await page.locator('button[type="submit"]').click();
        await page.waitForTimeout(5000);
        console.log(`   ログイン後URL: ${page.url()}`);
        await page.screenshot({ path: 'verify-login-after.png' });
      }
    } else {
      // ログインフォームがある場合
      console.log('\n2. ログイン実行...');
      await emailInput.fill(EMAIL);
      await page.locator('input[type="password"]').fill(PASSWORD);
      await page.screenshot({ path: 'verify-login-before.png' });
      await page.locator('button[type="submit"]').click();
      await page.waitForTimeout(5000);

      const afterLoginUrl = page.url();
      console.log(`   ログイン後URL: ${afterLoginUrl}`);

      // エラーメッセージ確認
      const errorEl = page.locator('.bg-red-50, [class*="error"]');
      if (await errorEl.count() > 0) {
        const errorText = await errorEl.textContent();
        console.log(`   ❌ エラー: ${errorText}`);
      }

      await page.screenshot({ path: 'verify-login-after.png' });
    }

    // 3. 管理画面で物件一覧確認
    console.log('\n3. 物件一覧確認...');
    await page.goto(`${PROD_URL}/admin`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    const content = await page.content();
    const hasSampleA = content.includes('てすとA') || content.includes('SAMPLE-A');
    const hasSampleB = content.includes('てすとB') || content.includes('SAMPLE-B');
    const hasSampleC = content.includes('てすとC') || content.includes('SAMPLE-C');

    console.log(`   てすとA様: ${hasSampleA ? '✅' : '❌'}`);
    console.log(`   てすとB様: ${hasSampleB ? '✅' : '❌'}`);
    console.log(`   てすとC様: ${hasSampleC ? '✅' : '❌'}`);

    await page.screenshot({ path: 'verify-admin.png', fullPage: true });

    // 4. コンソールログ確認
    if (logs.length > 0) {
      console.log('\n4. 関連コンソールログ:');
      logs.slice(0, 10).forEach(log => console.log(`   ${log}`));
    }

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== 検証完了 ===');
}

verifyProd();
