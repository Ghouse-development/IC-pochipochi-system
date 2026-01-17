/**
 * 西野秀樹の情報を更新するスクリプト
 */
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://qqzqffkiyzeaampotgnn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo'
);

async function main() {
  const email = 'hn@g-house.osaka.jp';
  const full_name = '西野秀樹';
  const phone = '070-3788-3295';
  const role = 'admin';

  console.log('Checking for existing user...');

  // Check if user exists
  const { data: existingUser, error: findError } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (findError && findError.code !== 'PGRST116') {
    console.error('Error finding user:', findError);
    return;
  }

  if (existingUser) {
    console.log('User found, updating...');
    console.log('Current data:', existingUser);

    // Update user
    const { data: updatedUser, error: updateError } = await supabase
      .from('users')
      .update({
        full_name,
        phone,
        role,
        is_active: true,
        updated_at: new Date().toISOString(),
      })
      .eq('email', email)
      .select()
      .single();

    if (updateError) {
      console.error('Error updating user:', updateError);
      return;
    }

    console.log('User updated successfully:');
    console.log(updatedUser);
  } else {
    console.log('User not found, creating...');

    // Create user
    const { data: newUser, error: createError } = await supabase
      .from('users')
      .insert({
        email,
        full_name,
        phone,
        role,
        is_active: true,
      })
      .select()
      .single();

    if (createError) {
      console.error('Error creating user:', createError);
      return;
    }

    console.log('User created successfully:');
    console.log(newUser);
  }

  // List all users for verification
  console.log('\nAll users in database:');
  const { data: allUsers } = await supabase
    .from('users')
    .select('email, full_name, phone, role, is_active')
    .order('created_at', { ascending: false });

  allUsers?.forEach(u => {
    console.log(`  - ${u.email}: ${u.full_name} (${u.role}) ${u.is_active ? 'Active' : 'Inactive'}`);
  });
}

main();
