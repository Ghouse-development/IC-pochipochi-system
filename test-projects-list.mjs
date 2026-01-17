// 物件一覧確認テスト
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testProjectsList() {
  console.log('=== 物件一覧確認テスト ===\n');

  const browser = await chromium.launchPersistentContext('./temp-browser-projects-' + Date.now(), {
    headless: true,
    viewport: { width: 1920, height: 1080 },
  });

  const page = browser.pages()[0] || await browser.newPage();

  try {
    // 1. ログイン
    console.log('1. ログイン...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    const hasForm = await page.locator('input[type="email"]').count() > 0;
    if (hasForm) {
      await page.locator('input[type="email"]').fill(EMAIL);
      await page.locator('input[type="password"]').fill(PASSWORD);
      await page.locator('button[type="submit"]').click();
      await page.waitForTimeout(5000);
    }

    // 2. 管理画面にアクセス
    console.log('\n2. 管理画面にアクセス...');
    await page.goto(`${PROD_URL}/admin`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);
    console.log(`   URL: ${page.url()}`);

    // 3. プロジェクトタブをクリック
    console.log('\n3. プロジェクトタブを探す...');
    const projectTab = page.locator('button:has-text("プロジェクト")');
    if (await projectTab.count() > 0) {
      console.log('   プロジェクトタブ: あり');
      await projectTab.click();
      await page.waitForTimeout(3000);
    } else {
      console.log('   プロジェクトタブ: なし');
    }

    // 4. 物件一覧を確認
    console.log('\n4. 物件一覧確認...');
    const content = await page.content();

    const checks = [
      { name: 'てすとA様', found: content.includes('てすとA') || content.includes('SAMPLE-A') },
      { name: 'てすとB様', found: content.includes('てすとB') || content.includes('SAMPLE-B') },
      { name: 'てすとC様', found: content.includes('てすとC') || content.includes('SAMPLE-C') },
      { name: '物件テーブル', found: content.includes('物件') || content.includes('project') },
    ];

    checks.forEach(check => {
      console.log(`   ${check.name}: ${check.found ? '✅' : '❌'}`);
    });

    await page.screenshot({ path: 'test-projects-list.png', fullPage: true });

    // 5. ページテキストの一部を表示
    const bodyText = await page.evaluate(() => document.body.innerText);
    console.log('\n5. ページテキスト（抜粋）:');
    console.log(bodyText.substring(0, 500));

  } catch (error) {
    console.error('エラー:', error.message);
    await page.screenshot({ path: 'test-projects-list-error.png' });
  }

  await browser.close();
  console.log('\n=== テスト完了 ===');
}

testProjectsList();
