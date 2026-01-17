// ログイン後にAPIを直接呼び出すテスト
import { chromium } from 'playwright';

const PROD_URL = 'https://ic-pochipochi-system.vercel.app';
const EMAIL = 'hn@g-house.osaka.jp';
const PASSWORD = 'Ghouse0648';

async function testApiAfterLogin() {
  console.log('=== ログイン後APIテスト ===\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await context.newPage();

  // ネットワーク監視
  const apiCalls = [];
  page.on('response', response => {
    const url = response.url();
    if (url.includes('/api/auth')) {
      apiCalls.push({ url: url.substring(0, 80), status: response.status() });
    }
  });

  try {
    // 1. ログインページにアクセス
    console.log('1. トップページでSupabaseログイン...');
    await page.goto(PROD_URL, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    // 2. Supabase Authで直接ログイン
    const loginResult = await page.evaluate(async ({ email, password }) => {
      // @ts-ignore
      const supabaseUrl = 'https://qqzqffkiyzeaampotgnn.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MTczMTgsImV4cCI6MjA1MjQ5MzMxOH0.l0pXjuWmJ5RJSoJhvY07ZwEBKZvmRwrALIVG1gXfFsQ';

      try {
        const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        return {
          status: response.status,
          hasToken: !!data.access_token,
          token: data.access_token?.substring(0, 50),
          error: data.error_description || data.error
        };
      } catch (e) {
        return { error: e.message };
      }
    }, { email: EMAIL, password: PASSWORD });

    console.log(`   Supabase Auth: ${loginResult.status} ${loginResult.hasToken ? '✅' : '❌'}`);
    if (loginResult.error) console.log(`   エラー: ${loginResult.error}`);

    if (!loginResult.hasToken) {
      console.log('   ログイン失敗');
      await browser.close();
      return;
    }

    // 3. トークンをLocalStorageに保存して再ロード
    await page.evaluate(async ({ email, password }) => {
      const supabaseUrl = 'https://qqzqffkiyzeaampotgnn.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5MTczMTgsImV4cCI6MjA1MjQ5MzMxOH0.l0pXjuWmJ5RJSoJhvY07ZwEBKZvmRwrALIVG1gXfFsQ';

      const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': supabaseKey },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      // Supabase形式でLocalStorageに保存
      const tokenData = {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: data.expires_at,
        expires_in: data.expires_in,
        token_type: data.token_type,
        user: data.user
      };
      window.localStorage.setItem('sb-qqzqffkiyzeaampotgnn-auth-token', JSON.stringify(tokenData));
      return true;
    }, { email: EMAIL, password: PASSWORD });

    console.log('   トークンをLocalStorageに保存');

    // 4. /api/auth/get-user を呼び出し
    console.log('\n2. /api/auth/get-user テスト...');
    const apiResult = await page.evaluate(async () => {
      const tokenStr = window.localStorage.getItem('sb-qqzqffkiyzeaampotgnn-auth-token');
      if (!tokenStr) return { error: 'トークンなし' };

      const tokenData = JSON.parse(tokenStr);
      try {
        const response = await fetch('/api/auth/get-user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${tokenData.access_token}`,
            'Content-Type': 'application/json',
          },
        });

        const text = await response.text();
        return {
          status: response.status,
          ok: response.ok,
          body: text.substring(0, 300)
        };
      } catch (e) {
        return { error: e.message };
      }
    });

    console.log(`   Status: ${apiResult.status}`);
    console.log(`   OK: ${apiResult.ok}`);
    console.log(`   Response: ${apiResult.body}`);

    // 5. ページをリロードして管理画面にアクセス
    console.log('\n3. 管理画面にアクセス...');
    apiCalls.length = 0;
    await page.goto(`${PROD_URL}/admin`, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(5000);

    console.log(`   URL: ${page.url()}`);

    // API呼び出し確認
    console.log('\n   APIコール:');
    apiCalls.forEach(call => console.log(`   [${call.status}] ${call.url}`));

    const content = await page.content();
    if (content.includes('403')) {
      console.log('   結果: 403');
    } else if (content.includes('物件')) {
      console.log('   結果: 管理画面OK');
    }

    await page.screenshot({ path: 'test-api-after-login.png' });

  } catch (error) {
    console.error('エラー:', error.message);
  }

  await browser.close();
  console.log('\n=== テスト完了 ===');
}

testApiAfterLogin();
