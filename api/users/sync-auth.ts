import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ANON_KEY = process.env.SUPABASE_ANON_KEY;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!SERVICE_ROLE_KEY) {
    console.error('SUPABASE_SERVICE_ROLE_KEY is not set');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Get authorization token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authHeader.substring(7);

  try {
    // Create client with anon key to verify the token
    const supabaseAuth = createClient(SUPABASE_URL, ANON_KEY || '', {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Verify the token and get user
    const { data: { user: authUser }, error: authError } = await supabaseAuth.auth.getUser(token);
    if (authError || !authUser) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Use service role to access admin functions
    const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Check if requesting user is admin
    const { data: requestingUser, error: reqUserError } = await supabaseAdmin
      .from('users')
      .select('role')
      .eq('auth_id', authUser.id)
      .single();

    if (reqUserError || !requestingUser) {
      return res.status(403).json({ error: 'User not found' });
    }

    if (requestingUser.role !== 'admin') {
      return res.status(403).json({ error: 'Admin permission required' });
    }

    // Get all auth users using admin API
    const { data: { users: authUsers }, error: listError } = await supabaseAdmin.auth.admin.listUsers();

    if (listError) {
      console.error('Error listing auth users:', listError);
      return res.status(500).json({ error: 'Failed to list auth users' });
    }

    // Get all existing users from users table
    const { data: existingUsers, error: existingError } = await supabaseAdmin
      .from('users')
      .select('auth_id, email');

    if (existingError) {
      console.error('Error fetching existing users:', existingError);
      return res.status(500).json({ error: 'Failed to fetch existing users' });
    }

    const existingAuthIds = new Set(existingUsers?.map(u => u.auth_id) || []);
    const existingEmails = new Set(existingUsers?.map(u => u.email.toLowerCase()) || []);

    // Find users that need to be synced
    const usersToSync = authUsers.filter(au =>
      !existingAuthIds.has(au.id) &&
      au.email &&
      !existingEmails.has(au.email.toLowerCase())
    );

    if (req.method === 'GET') {
      // Return preview of users that would be synced
      return res.status(200).json({
        totalAuthUsers: authUsers.length,
        existingUsers: existingUsers?.length || 0,
        usersToSync: usersToSync.map(u => ({
          id: u.id,
          email: u.email,
          created_at: u.created_at,
        })),
      });
    }

    // POST: Actually sync the users
    const syncedUsers = [];
    const errors = [];

    for (const au of usersToSync) {
      if (!au.email) continue;

      // Determine role based on email domain or specific emails
      let role: 'admin' | 'coordinator' | 'user' = 'coordinator';
      const email = au.email.toLowerCase();

      // Check if this is a known admin
      if (email === 'hn@g-house.osaka.jp') {
        role = 'admin';
      }

      // Extract name from email (before @)
      const emailPrefix = email.split('@')[0];
      const fullName = au.user_metadata?.full_name ||
                       au.user_metadata?.name ||
                       emailPrefix.replace(/[-_.]/g, ' ');

      try {
        const { data: newUser, error: insertError } = await supabaseAdmin
          .from('users')
          .insert({
            auth_id: au.id,
            email: au.email,
            full_name: fullName,
            role: role,
            is_active: true,
          })
          .select()
          .single();

        if (insertError) {
          errors.push({ email: au.email, error: insertError.message });
        } else {
          syncedUsers.push(newUser);
        }
      } catch (err) {
        errors.push({ email: au.email, error: String(err) });
      }
    }

    return res.status(200).json({
      success: true,
      syncedCount: syncedUsers.length,
      syncedUsers: syncedUsers.map(u => ({ id: u.id, email: u.email, role: u.role })),
      errors: errors.length > 0 ? errors : undefined,
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
