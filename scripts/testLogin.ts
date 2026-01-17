import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qqzqffkiyzeaampotgnn.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTYxMDYsImV4cCI6MjA4MDgzMjEwNn0.wcCzxOTH14n4kIgXTrp1vZd3DPJzuim-Bz8fH-3U3bw';

const supabase = createClient(SUPABASE_URL, ANON_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function testLogin() {
  const email = 'hn@g-house.osaka.jp';
  const password = 'Ghouse0648';
  
  console.log('ログインテスト中...');
  console.log('Email:', email);
  console.log('Password:', password);
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) {
    console.log('\n❌ ログイン失敗');
    console.log('エラーメッセージ:', error.message);
    console.log('エラー詳細:', JSON.stringify(error, null, 2));
  } else {
    console.log('\n✅ ログイン成功！');
    console.log('ユーザーID:', data.user?.id);
    console.log('Email:', data.user?.email);
  }
}

testLogin();
