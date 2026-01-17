import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY!, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function checkUser() {
  const adminEmail = 'hn@g-house.osaka.jp';
  
  // List all users to find the admin
  const { data: users, error } = await supabase.auth.admin.listUsers();
  
  if (error) {
    console.error('Error listing users:', error);
    return;
  }
  
  const adminUser = users.users.find(u => u.email === adminEmail);
  
  if (adminUser) {
    console.log('=== ユーザー情報 ===');
    console.log('ID:', adminUser.id);
    console.log('Email:', adminUser.email);
    console.log('Email確認済み:', adminUser.email_confirmed_at ? 'はい (' + adminUser.email_confirmed_at + ')' : 'いいえ');
    console.log('作成日時:', adminUser.created_at);
    console.log('最終ログイン:', adminUser.last_sign_in_at || 'なし');
    console.log('メタデータ:', JSON.stringify(adminUser.user_metadata, null, 2));
    
    // Check users table
    const { data: dbUser, error: dbError } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', adminUser.id)
      .single();
    
    console.log('\n=== usersテーブル ===');
    if (dbError) {
      console.log('usersテーブルにレコードなし:', dbError.message);
    } else {
      console.log('レコード:', JSON.stringify(dbUser, null, 2));
    }
  } else {
    console.log('ユーザーが見つかりません:', adminEmail);
    console.log('全ユーザー数:', users.users.length);
    users.users.forEach(u => console.log('  -', u.email));
  }
}

checkUser();
