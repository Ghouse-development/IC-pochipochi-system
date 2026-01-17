/**
 * 管理ダッシュボード - プロジェクト一覧テスト
 */
import { chromium } from 'playwright';

const BASE_URL = 'https://ic-pochipochi-system.vercel.app';
const CREDENTIALS = {
  email: 'hn@g-house.osaka.jp',
  password: 'Ghouse0648'
};

async function test() {
  console.log('=== 管理ダッシュボード プロジェクトテスト ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // 1. ログインページに移動
    console.log('1. ログインページにアクセス...');
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    // 2. ログイン
    console.log('2. ログイン中...');
    await page.fill('input[type="email"]', CREDENTIALS.email);
    await page.fill('input[type="password"]', CREDENTIALS.password);

    // ログインボタンをクリック
    const loginButton = await page.locator('button[type="submit"]');
    await loginButton.click();

    // リダイレクトを待つ
    await page.waitForTimeout(5000);
    console.log('   現在のURL:', page.url());

    // 3. 管理ダッシュボードに移動
    if (!page.url().includes('/admin')) {
      console.log('3. 管理ダッシュボードに移動...');
      await page.goto(`${BASE_URL}/admin`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(3000);
    }
    console.log('   URL:', page.url());

    // 4. 「プロジェクト管理」タブを探してクリック
    console.log('4. プロジェクト管理タブを探索...');

    // タブのテキストを確認
    const tabButtons = await page.locator('button:has-text("プロジェクト")').all();
    console.log('   「プロジェクト」を含むボタン数:', tabButtons.length);

    if (tabButtons.length > 0) {
      await tabButtons[0].click();
      await page.waitForTimeout(3000);
    }

    // 5. エラーメッセージを確認
    console.log('5. エラーメッセージ確認...');
    const errorMessage = await page.locator('text=データの読み込みに失敗しました').count();
    if (errorMessage > 0) {
      console.log('   ❌ エラー: 「データの読み込みに失敗しました」が表示されている');
    } else {
      console.log('   ✅ エラーメッセージなし');
    }

    // 6. プロジェクト一覧の内容を確認
    console.log('6. プロジェクト一覧確認...');
    const projectRows = await page.locator('table tbody tr').count();
    console.log('   テーブル行数:', projectRows);

    // 「プロジェクトが見つかりません」があるか
    const noProjects = await page.locator('text=プロジェクトが見つかりません').count();
    if (noProjects > 0) {
      console.log('   📝 プロジェクトが0件（空の状態）');
    } else if (projectRows > 0) {
      console.log('   ✅ プロジェクトが表示されている');
    }

    // 7. スクリーンショット保存
    await page.screenshot({ path: 'admin-projects-test.png', fullPage: true });
    console.log('7. スクリーンショット保存: admin-projects-test.png');

    // 8. APIレスポンスを確認（ネットワークログ）
    console.log('\n=== テスト完了 ===');

  } catch (error) {
    console.error('テストエラー:', error.message);
    await page.screenshot({ path: 'admin-projects-error.png', fullPage: true });
  } finally {
    await browser.close();
  }
}

test();
