/**
 * 管理者ユーザー作成スクリプト
 *
 * 使用方法:
 * SUPABASE_SERVICE_ROLE_KEY=your_key npx tsx scripts/createAdminUser.ts
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SERVICE_ROLE_KEY) {
  console.error('エラー: SUPABASE_SERVICE_ROLE_KEY 環境変数が必要です。');
  console.log('\n使用方法:');
  console.log('  Windows PowerShell:');
  console.log('    $env:SUPABASE_SERVICE_ROLE_KEY="your_service_role_key"; npx tsx scripts/createAdminUser.ts');
  console.log('\n  Windows Command Prompt:');
  console.log('    set SUPABASE_SERVICE_ROLE_KEY=your_service_role_key && npx tsx scripts/createAdminUser.ts');
  console.log('\n  Linux/Mac:');
  console.log('    SUPABASE_SERVICE_ROLE_KEY=your_key npx tsx scripts/createAdminUser.ts');
  console.log('\nservice_role キーは Supabase Dashboard > Settings > API で確認できます。');
  process.exit(1);
}

// Service role keyを使用してSupabaseクライアントを作成（Admin API使用）
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

async function createAdminUser() {
  const adminEmail = 'hn@g-house.osaka.jp';
  const adminPassword = 'Ghouse0648';
  const adminName = '管理者';

  console.log('管理者ユーザーを作成中...');
  console.log(`Email: ${adminEmail}`);

  try {
    // 1. Auth Admin APIでユーザーを作成（メール確認済みとして）
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: adminEmail,
      password: adminPassword,
      email_confirm: true, // メール確認済みとして作成
      user_metadata: {
        full_name: adminName,
        role: 'admin',
      },
    });

    if (authError) {
      // ユーザーが既に存在する場合
      if (authError.message.includes('already') || authError.message.includes('exists')) {
        console.log('ユーザーは既に存在します。usersテーブルを更新します...');

        // 既存ユーザーのIDを取得
        const { data: existingUsers } = await supabase.auth.admin.listUsers();
        const existingUser = existingUsers?.users.find(u => u.email === adminEmail);

        if (existingUser) {
          // usersテーブルを更新
          const { error: updateError } = await supabase
            .from('users')
            .upsert({
              auth_id: existingUser.id,
              email: adminEmail,
              full_name: adminName,
              role: 'admin',
              is_super_admin: true,
              is_active: true,
            }, {
              onConflict: 'auth_id',
            });

          if (updateError) {
            console.error('usersテーブル更新エラー:', updateError);
          } else {
            console.log('✅ 管理者ユーザーを更新しました！');
          }
        }
        return;
      }
      throw authError;
    }

    console.log('Auth ユーザー作成成功:', authData.user?.id);

    // 2. usersテーブルにも登録
    const { error: dbError } = await supabase.from('users').upsert({
      auth_id: authData.user?.id,
      email: adminEmail,
      full_name: adminName,
      role: 'admin',
      is_super_admin: true,
      is_active: true,
    }, {
      onConflict: 'auth_id',
    });

    if (dbError) {
      console.error('usersテーブル登録エラー:', dbError);
      return;
    }

    console.log('✅ 管理者ユーザーを作成しました！');
    console.log(`\nログイン情報:`);
    console.log(`  Email: ${adminEmail}`);
    console.log(`  Password: ${adminPassword}`);

  } catch (error) {
    console.error('エラー:', error);
  }
}

createAdminUser();
