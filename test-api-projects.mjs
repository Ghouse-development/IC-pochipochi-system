/**
 * プロジェクトAPI直接テスト
 */
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qqzqffkiyzeaampotgnn.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTYxMDYsImV4cCI6MjA4MDgzMjEwNn0.wcCzxOTH14n4kIgXTrp1vZd3DPJzuim-Bz8fH-3U3bw';

const BASE_URL = 'https://ic-pochipochi-system.vercel.app';
const CREDENTIALS = {
  email: 'hn@g-house.osaka.jp',
  password: 'Ghouse0648'
};

async function test() {
  console.log('=== プロジェクトAPI直接テスト ===\n');

  // 1. Supabaseでログインしてトークン取得
  console.log('1. ログインしてトークン取得...');
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email: CREDENTIALS.email,
    password: CREDENTIALS.password
  });

  if (authError) {
    console.error('   ログインエラー:', authError.message);
    return;
  }

  const token = authData.session.access_token;
  console.log('   トークン取得成功:', token.substring(0, 30) + '...');

  // 2. /api/projects/create (GET) エンドポイントをテスト
  console.log('\n2. /api/projects/create (GET) をテスト...');
  try {
    const response = await fetch(`${BASE_URL}/api/projects/create`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('   ステータス:', response.status);
    const text = await response.text();
    console.log('   レスポンス:', text.substring(0, 500));

    if (response.ok) {
      const data = JSON.parse(text);
      console.log('   プロジェクト数:', data.projects?.length || 0);
    }
  } catch (error) {
    console.error('   APIエラー:', error.message);
  }

  // 3. 直接Supabaseクエリ（比較用）
  console.log('\n3. 直接Supabaseクエリ（RLS影響確認）...');
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('id, name, project_code')
      .limit(5);

    if (error) {
      console.error('   Supabaseエラー:', error.message);
    } else {
      console.log('   取得件数:', data?.length || 0);
      if (data && data.length > 0) {
        data.forEach(p => console.log('   -', p.name, '(' + p.project_code + ')'));
      }
    }
  } catch (error) {
    console.error('   クエリエラー:', error.message);
  }

  console.log('\n=== テスト完了 ===');
}

test();
