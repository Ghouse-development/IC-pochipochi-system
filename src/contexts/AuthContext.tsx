import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import type { User as SupabaseUser, Session } from '@supabase/supabase-js';
import type { User, UserRole } from '../types/database';
import { createLogger } from '../lib/logger';

const logger = createLogger('AuthContext');

interface AuthContextType {
  // Supabase Auth
  session: Session | null;
  supabaseUser: SupabaseUser | null;
  // App User
  user: User | null;
  isLoading: boolean;
  // Auth methods
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: Error | null }>;
  // Magic Link (お客様用)
  sendMagicLink: (email: string, redirectTo?: string) => Promise<{ error: Error | null }>;
  // Role checks
  isSuperAdmin: boolean;
  isAdmin: boolean;
  isCoordinator: boolean;
  isCustomer: boolean;
  canManageItems: boolean;
  canManageProjects: boolean;
  canViewAllOrganizations: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 初期管理者メールアドレスリスト（ブートストラップ用）
  const BOOTSTRAP_ADMIN_EMAILS = ['hn@g-house.osaka.jp'];

  // Fetch app user data from users table (via API to bypass RLS)
  const fetchUserData = async (_authId: string): Promise<User | null> => {
    try {
      // Get current session
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        logger.error('No session token available');
        return null;
      }

      // First try direct Supabase query
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('auth_id', session.user.id)
        .single();

      if (!error && data) {
        // ブートストラップ管理者の場合、権限を自動修正
        const email = session.user.email?.toLowerCase() || '';
        if (BOOTSTRAP_ADMIN_EMAILS.includes(email) && data.role !== 'admin' && !data.is_super_admin) {
          logger.info('Upgrading bootstrap admin:', email);
          const { data: updatedData } = await supabase
            .from('users')
            .update({ role: 'admin', is_super_admin: true })
            .eq('id', data.id)
            .select()
            .single();
          return updatedData || data;
        }
        return data;
      }

      // User not found in users table - create record
      if (error?.code === 'PGRST116') { // No rows found
        logger.info('User not in users table, creating record...');
        const email = session.user.email || '';
        const isBootstrapAdmin = BOOTSTRAP_ADMIN_EMAILS.includes(email.toLowerCase());

        const { data: newUser, error: insertError } = await supabase
          .from('users')
          .insert({
            auth_id: session.user.id,
            email: email,
            full_name: isBootstrapAdmin ? '管理者' : 'ユーザー',
            role: isBootstrapAdmin ? 'admin' : 'user',
            is_super_admin: isBootstrapAdmin,
          })
          .select()
          .single();

        if (insertError) {
          logger.error('Error creating user record:', insertError);
        } else if (newUser) {
          logger.info('User record created:', newUser.email, 'role:', newUser.role);
          return newUser;
        }
      }

      // If RLS blocks, use API endpoint
      logger.info('Direct query failed, trying API endpoint');
      const response = await fetch('/api/auth/get-user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        logger.error('API error:', errorData);
        return null;
      }

      const result = await response.json();
      return result.user;
    } catch (err) {
      logger.error('Error fetching user data:', err);
      return null;
    }
  };

  // Create user record in users table if not exists
  const createUserRecord = async (
    authId: string,
    email: string,
    fullName: string,
    role: UserRole = 'user'
  ): Promise<User | null> => {
    // ブートストラップ: 特定のメールアドレスは自動的に管理者として登録
    const isBootstrapAdmin = BOOTSTRAP_ADMIN_EMAILS.includes(email.toLowerCase());
    const finalRole = isBootstrapAdmin ? 'admin' : role;
    const isSuperAdmin = isBootstrapAdmin;

    const { data, error } = await supabase
      .from('users')
      .insert({
        auth_id: authId,
        email,
        full_name: fullName,
        role: finalRole,
        is_super_admin: isSuperAdmin,
      })
      .select()
      .single();

    if (error) {
      logger.error('Error creating user record:', error);
      return null;
    }

    if (isBootstrapAdmin) {
      logger.info('Bootstrap admin created:', email);
    }

    return data;
  };

  // Update last login
  const updateLastLogin = async (userId: string) => {
    await supabase
      .from('users')
      .update({ last_login_at: new Date().toISOString() })
      .eq('id', userId);
  };

  useEffect(() => {
    // Get initial session with timeout
    const initializeAuth = async () => {
      // タイムアウト設定（5秒）
      const timeoutId = setTimeout(() => {
        logger.warn('Auth initialization timeout, proceeding without session');
        setIsLoading(false);
      }, 5000);

      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        clearTimeout(timeoutId);

        if (error) {
          logger.error('Error getting session:', error);
          setIsLoading(false);
          return;
        }

        setSession(session);
        setSupabaseUser(session?.user ?? null);

        if (session?.user) {
          try {
            const userData = await fetchUserData(session.user.id);
            setUser(userData);
            if (userData) {
              await updateLastLogin(userData.id);
            }
          } catch (fetchError) {
            logger.error('Error fetching user data:', fetchError);
          }
        }
      } catch (error) {
        clearTimeout(timeoutId);
        logger.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setSupabaseUser(session?.user ?? null);

      if (session?.user) {
        try {
          const userData = await fetchUserData(session.user.id);
          setUser(userData);
          if (userData) {
            await updateLastLogin(userData.id);
          }
        } catch (error) {
          logger.error('Error in auth state change:', error);
        }
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { error: error ? new Error(error.message) : null };
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return { error: new Error(error.message) };
    }

    // Create user record in users table
    if (data.user) {
      const userData = await createUserRecord(data.user.id, email, fullName);
      if (!userData) {
        return { error: new Error('Failed to create user record') };
      }
    }

    return { error: null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    return { error: error ? new Error(error.message) : null };
  };

  // Magic Link認証（お客様用パスワードレスログイン）
  const sendMagicLink = async (email: string, redirectTo?: string) => {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo || `${window.location.origin}/customer`,
        shouldCreateUser: true,
      },
    });

    if (error) {
      logger.error('Magic link error:', error);
      return { error: new Error(error.message) };
    }

    // 監査ログ記録
    logger.info('Magic link sent to:', email);
    return { error: null };
  };

  // Role checks
  const isSuperAdmin = user?.is_super_admin === true || user?.role === 'super_admin';
  const isAdmin = user?.role === 'admin' || isSuperAdmin;
  const isCoordinator = user?.role === 'coordinator';
  const isCustomer = user?.role === 'user';
  const canManageItems = isAdmin;
  const canManageProjects = isAdmin || isCoordinator;
  const canViewAllOrganizations = isSuperAdmin;

  return (
    <AuthContext.Provider
      value={{
        session,
        supabaseUser,
        user,
        isLoading,
        signIn,
        signUp,
        signOut,
        resetPassword,
        sendMagicLink,
        isSuperAdmin,
        isAdmin,
        isCoordinator,
        isCustomer,
        canManageItems,
        canManageProjects,
        canViewAllOrganizations,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Demo mode provider - カタログはログイン不要、管理画面はログイン必須
export function DemoAuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 匿名ユーザー（カタログ閲覧用）
  const anonymousUser: User = {
    id: 'anonymous',
    auth_id: null,
    email: '',
    full_name: 'ゲスト',
    full_name_kana: null,
    role: 'user',
    phone: null,
    company_name: null,
    organization_id: null,
    is_super_admin: false,
    is_active: true,
    last_login_at: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // Fetch app user data from users table (via API to bypass RLS)
  const fetchUserData = async (_authId: string): Promise<User | null> => {
    try {
      // Get current session
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        logger.error('No session token available');
        return null;
      }

      // First try direct Supabase query
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('auth_id', session.user.id)
        .single();

      if (!error && data) {
        return data;
      }

      // If RLS blocks, use API endpoint
      logger.info('Direct query failed, trying API endpoint');
      const response = await fetch('/api/auth/get-user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        logger.error('API error:', errorData);
        return null;
      }

      const result = await response.json();
      return result.user;
    } catch (err) {
      logger.error('Error fetching user data:', err);
      return null;
    }
  };

  useEffect(() => {
    // タイムアウト設定（5秒）- ロードが止まらないようにする
    const timeoutId = setTimeout(() => {
      logger.warn('Demo auth initialization timeout, proceeding without session');
      setIsLoading(false);
    }, 5000);

    // Check current session with error handling
    supabase.auth.getSession()
      .then(({ data: { session }, error }) => {
        clearTimeout(timeoutId);

        if (error) {
          logger.error('Error getting session in demo mode:', error);
          setIsLoading(false);
          return;
        }

        setSession(session);
        setSupabaseUser(session?.user ?? null);

        if (session?.user) {
          fetchUserData(session.user.id)
            .then((userData) => {
              setUser(userData);
              setIsLoading(false);
            })
            .catch((err) => {
              logger.error('Error fetching user data in demo mode:', err);
              setIsLoading(false);
            });
        } else {
          setUser(null);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        clearTimeout(timeoutId);
        logger.error('Failed to get session in demo mode:', err);
        setIsLoading(false);
      });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session);
        setSupabaseUser(session?.user ?? null);

        if (session?.user) {
          const userData = await fetchUserData(session.user.id);
          setUser(userData);
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      clearTimeout(timeoutId);
      subscription.unsubscribe();
    };
  }, []);

  // ログイン処理
  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error ? new Error(error.message) : null };
  };

  // ログアウト処理
  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setSupabaseUser(null);
    setUser(null);
  };

  // 実際のユーザーまたは匿名ユーザー
  const currentUser = user || anonymousUser;
  const isLoggedIn = !!session && !!user;
  const role = user?.role;

  const value: AuthContextType = {
    session,
    supabaseUser,
    user: currentUser,
    isLoading,
    signIn,
    signUp: async () => ({ error: new Error('Sign up not available in demo mode') }),
    signOut,
    resetPassword: async () => ({ error: new Error('Password reset not available in demo mode') }),
    sendMagicLink: async () => ({ error: new Error('Magic link not available in demo mode') }),
    // 実際にログインしている場合のみ権限を付与
    isSuperAdmin: isLoggedIn && (role === 'super_admin' || user?.is_super_admin === true),
    isAdmin: isLoggedIn && (role === 'super_admin' || role === 'admin' || user?.is_super_admin === true),
    isCoordinator: isLoggedIn && role === 'coordinator',
    isCustomer: !isLoggedIn || role === 'user',
    canManageItems: isLoggedIn && (role === 'super_admin' || role === 'admin'),
    canManageProjects: isLoggedIn && (role === 'super_admin' || role === 'admin' || role === 'coordinator'),
    canViewAllOrganizations: isLoggedIn && (role === 'super_admin'),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
