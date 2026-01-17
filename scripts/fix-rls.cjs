/**
 * RLS無限再帰エラーを修正するスクリプト
 * service_roleキーを使用してRLSをバイパス
 */
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://qqzqffkiyzeaampotgnn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo'
);

async function testServiceRole() {
  console.log('Testing service role access...');

  // Service roleでusersテーブルにアクセス
  const { data: users, error } = await supabase
    .from('users')
    .select('id, email, role, full_name')
    .limit(10);

  if (error) {
    console.log('Error:', error.message);
    return false;
  }

  console.log('Users found:', users.length);
  users.forEach(u => console.log(`  - ${u.email} (${u.role}) - ${u.full_name || 'No name'}`));
  return true;
}

async function checkNishino() {
  console.log('\nSearching for Nishino...');

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .or('email.ilike.%nishino%,full_name.ilike.%西野%');

  if (error) {
    console.log('Error:', error.message);
    return;
  }

  if (data.length === 0) {
    console.log('No user named Nishino found');

    // List all users to see who exists
    const { data: allUsers } = await supabase
      .from('users')
      .select('email, full_name')
      .limit(20);

    console.log('\nAll users in database:');
    allUsers?.forEach(u => console.log(`  - ${u.email}: ${u.full_name || '(no name)'}`));
  } else {
    console.log('Found:', data);
  }
}

async function main() {
  const ok = await testServiceRole();
  if (ok) {
    await checkNishino();
  }
}

main();
