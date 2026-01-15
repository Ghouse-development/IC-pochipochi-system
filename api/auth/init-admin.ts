import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// 管理者の初期情報
const ADMIN_EMAIL = 'hn@g-house.osaka.jp';
const ADMIN_PASSWORD = 'Ghouse0648';
const ADMIN_NAME = '管理者';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!SERVICE_ROLE_KEY) {
    console.error('SUPABASE_SERVICE_ROLE_KEY is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // 1. Check if auth user exists
    const { data: existingUsers } = await supabase.auth.admin.listUsers();
    const existingAuthUser = existingUsers?.users?.find(u => u.email === ADMIN_EMAIL);

    let authUserId: string;

    if (existingAuthUser) {
      console.log('Auth user already exists:', existingAuthUser.id);
      authUserId = existingAuthUser.id;

      // Update password to make sure it's correct
      const { error: updateError } = await supabase.auth.admin.updateUserById(authUserId, {
        password: ADMIN_PASSWORD,
        email_confirm: true,
      });

      if (updateError) {
        console.error('Error updating auth user:', updateError);
      }
    } else {
      // Create new auth user
      const { data: newAuthUser, error: createAuthError } = await supabase.auth.admin.createUser({
        email: ADMIN_EMAIL,
        password: ADMIN_PASSWORD,
        email_confirm: true,
      });

      if (createAuthError) {
        console.error('Error creating auth user:', createAuthError);
        return res.status(500).json({ error: 'Failed to create auth user', details: createAuthError.message });
      }

      authUserId = newAuthUser.user.id;
      console.log('Created new auth user:', authUserId);
    }

    // 2. Check if user record exists in users table
    const { data: existingUserRecord } = await supabase
      .from('users')
      .select('*')
      .eq('email', ADMIN_EMAIL)
      .single();

    if (existingUserRecord) {
      // Update existing record with auth_id and admin role
      const { error: updateError } = await supabase
        .from('users')
        .update({
          auth_id: authUserId,
          role: 'admin',
          is_super_admin: true,
          is_active: true,
        })
        .eq('id', existingUserRecord.id);

      if (updateError) {
        console.error('Error updating user record:', updateError);
        return res.status(500).json({ error: 'Failed to update user record', details: updateError.message });
      }

      return res.status(200).json({
        success: true,
        message: 'Admin user updated',
        user: {
          id: existingUserRecord.id,
          auth_id: authUserId,
          email: ADMIN_EMAIL,
          role: 'admin',
        },
      });
    } else {
      // Create new user record
      const { data: newUserRecord, error: createUserError } = await supabase
        .from('users')
        .insert({
          auth_id: authUserId,
          email: ADMIN_EMAIL,
          full_name: ADMIN_NAME,
          role: 'admin',
          is_super_admin: true,
          is_active: true,
        })
        .select()
        .single();

      if (createUserError) {
        console.error('Error creating user record:', createUserError);
        return res.status(500).json({ error: 'Failed to create user record', details: createUserError.message });
      }

      return res.status(200).json({
        success: true,
        message: 'Admin user created',
        user: {
          id: newUserRecord.id,
          auth_id: authUserId,
          email: ADMIN_EMAIL,
          role: 'admin',
        },
      });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
