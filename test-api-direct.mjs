// APIエンドポイント直接テスト
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testApi() {
  console.log('=== APIエンドポイント直接テスト ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // 1. まずログインしてトークンを取得
    console.log('1. ログインしてトークン取得...');
    await page.goto(`${PROD_URL}/login`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.locator('input[type="email"]').fill(EMAIL);
    await page.locator('input[type="password"]').fill(PASSWORD);
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(5000);

    // LocalStorageからトークンを取得
    const authData = await page.evaluate(() => {
      const token = window.localStorage.getItem('sb-qqzqffkiyzeaampotgnn-auth-token');
      return token ? JSON.parse(token) : null;
    });

    if (!authData?.access_token) {
      console.log('   ❌ トークン取得失敗');
      await browser.close();
      return;
    }

    console.log(`   ✅ トークン取得成功`);
    const accessToken = authData.access_token;

    // 2. /api/auth/get-user を直接呼び出し
    console.log('\n2. /api/auth/get-user テスト...');
    const apiResponse = await page.evaluate(async (token) => {
      try {
        const response = await fetch('/api/auth/get-user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const text = await response.text();
        return {
          status: response.status,
          ok: response.ok,
          body: text.substring(0, 500)
        };
      } catch (e) {
        return { error: e.message };
      }
    }, accessToken);

    console.log(`   Status: ${apiResponse.status}`);
    console.log(`   OK: ${apiResponse.ok}`);
    console.log(`   Response: ${apiResponse.body}`);

    // 3. エラーがあれば詳細を確認
    if (!apiResponse.ok) {
      console.log('\n3. エラー詳細確認...');
      // Vercel FunctionsのURLを確認
      const functionResponse = await page.evaluate(async () => {
        try {
          const response = await fetch('/api/auth/get-user', {
            method: 'OPTIONS',
          });
          return {
            status: response.status,
            headers: Object.fromEntries(response.headers.entries())
          };
        } catch (e) {
          return { error: e.message };
        }
      });
      console.log(`   OPTIONS: ${JSON.stringify(functionResponse, null, 2)}`);
    }

    // 4. 管理者ページを確認
    if (apiResponse.ok && apiResponse.body.includes('"user"')) {
      console.log('\n4. 管理者ページ確認...');
      await page.goto(`${PROD_URL}/admin`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(3000);
      console.log(`   URL: ${page.url()}`);

      const content = await page.content();
      console.log(`   物件表示: ${content.includes('てすとA') || content.includes('SAMPLE') ? 'あり' : 'なし'}`);
    }

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== テスト完了 ===');
}

testApi();
