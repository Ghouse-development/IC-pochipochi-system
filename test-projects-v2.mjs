// 物件一覧確認テスト v2
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testProjectsV2() {
  console.log('=== 物件一覧確認テスト v2 ===\n');

  const browser = await chromium.launchPersistentContext('./temp-browser-v2-' + Date.now(), {
    headless: true,
    viewport: { width: 1920, height: 1080 },
  });

  const page = browser.pages()[0] || await browser.newPage();

  // コンソールログ監視
  page.on('console', msg => {
    if (msg.text().includes('Auth') || msg.type() === 'error') {
      console.log(`[LOG] ${msg.text().substring(0, 100)}`);
    }
  });

  // ネットワーク監視
  page.on('response', response => {
    const url = response.url();
    if (url.includes('/api/') || url.includes('projects') || url.includes('auth')) {
      console.log(`[NET ${response.status()}] ${url.substring(0, 80)}`);
    }
  });

  try {
    // 1. ログイン
    console.log('1. ログイン...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(3000);

    const hasForm = await page.locator('input[type="email"]').count() > 0;
    if (hasForm) {
      console.log('   フォームに入力中...');
      await page.locator('input[type="email"]').fill(EMAIL);
      await page.locator('input[type="password"]').fill(PASSWORD);
      await page.locator('button[type="submit"]').click();

      // リダイレクト待ち
      console.log('   リダイレクト待機...');
      for (let i = 0; i < 15; i++) {
        await page.waitForTimeout(1000);
        const url = page.url();
        if (!url.includes('/login')) {
          console.log(`   ${i+1}秒後: ${url}`);
          break;
        }
      }
    }

    // 2. 管理画面で読み込み完了を待つ
    console.log('\n2. 管理画面の読み込み待機...');
    await page.goto(`${PROD_URL}/admin`, { waitUntil: 'networkidle', timeout: 60000 });

    // 「読み込み中」が消えるまで待つ
    for (let i = 0; i < 20; i++) {
      await page.waitForTimeout(1000);
      const text = await page.evaluate(() => document.body.innerText);
      if (!text.includes('読み込み中') && !text.includes('認証確認中')) {
        console.log(`   ${i+1}秒後: 読み込み完了`);
        break;
      }
      if (i % 5 === 4) {
        console.log(`   ${i+1}秒経過...`);
      }
    }

    await page.screenshot({ path: 'test-projects-v2-admin.png' });

    // 3. タブを探す
    console.log('\n3. タブ確認...');
    const tabs = await page.locator('button').allInnerTexts();
    const adminTabs = tabs.filter(t => t && t.length > 1 && t.length < 20);
    console.log('   タブ一覧:', adminTabs.join(', '));

    // プロジェクトタブをクリック
    const projectButton = page.locator('button', { hasText: 'プロジェクト' });
    if (await projectButton.count() > 0) {
      console.log('   プロジェクトタブをクリック');
      await projectButton.first().click();
      await page.waitForTimeout(3000);
    }

    // 4. 最終確認
    console.log('\n4. 物件確認...');
    const content = await page.content();
    const text = await page.evaluate(() => document.body.innerText);

    console.log('   てすとA様:', content.includes('てすとA') || content.includes('SAMPLE-A') ? '✅' : '❌');
    console.log('   てすとB様:', content.includes('てすとB') || content.includes('SAMPLE-B') ? '✅' : '❌');
    console.log('   てすとC様:', content.includes('てすとC') || content.includes('SAMPLE-C') ? '✅' : '❌');

    await page.screenshot({ path: 'test-projects-v2.png', fullPage: true });

    console.log('\n5. ページ内容:');
    console.log(text.substring(0, 800));

  } catch (error) {
    console.error('エラー:', error.message);
    await page.screenshot({ path: 'test-projects-v2-error.png' });
  }

  await browser.close();
  console.log('\n=== テスト完了 ===');
}

testProjectsV2();
