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

      // API経由でユーザーデータを取得（サービスロールでRLSをバイパス）
      try {
        const response = await fetch('/api/auth/get-user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const { user } = await response.json();
          if (user) {
            logger.info('User fetched via API:', user.email, 'role:', user.role);
            return user;
          }
        } else {
          const errorText = await response.text();
          logger.warn('API fetch failed, trying direct query:', errorText);
        }
      } catch (apiError) {
        logger.warn('API not available, trying direct query:', apiError);
      }

      // フォールバック削除 - API失敗時はユーザー作成を試みる
      try {
        const createResponse = await fetch('/api/auth/init-admin', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: session.user.email,
            auth_id: session.user.id,
          }),
        });

        if (createResponse.ok) {
          const { user: newUser } = await createResponse.json();
          if (newUser) {
            logger.info('User record created via API:', newUser.email, 'role:', newUser.role);
            return newUser;
          }
        }
      } catch (createError) {
        logger.error('Error creating user via API:', createError);
      }

      // API完全失敗
      logger.error('User fetch completely failed - API not available');
      return null;
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

    const { data, error } = await supabase
      .from('users')
      .insert({
        auth_id: authId,
        email,
        full_name: fullName,
        role: finalRole,
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

  // Update last login (API経由でRLSをバイパス)
  const updateLastLogin = async (userId: string) => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) return;

      // API経由で更新（エラーは無視）
      await fetch('/api/auth/update-last-login', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      }).catch(() => {
        // 更新失敗しても続行（last_loginは必須ではない）
      });
    } catch {
      // エラーは無視
    }
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

  // Role checks (super_admin enum may not exist - use admin as highest level)
  const isSuperAdmin = user?.role === 'admin'; // admin is the highest role
  const isAdmin = user?.role === 'admin';
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

      // API経由でユーザーデータを取得（サービスロールでRLSをバイパス）
      try {
        const response = await fetch('/api/auth/get-user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const { user } = await response.json();
          if (user) {
            logger.info('User fetched via API in demo mode:', user.email);
            return user;
          }
        }
      } catch (apiError) {
        logger.warn('API not available in demo mode, trying direct query');
      }

      // フォールバック削除 - API失敗時はユーザー作成を試みる
      try {
        const createResponse = await fetch('/api/auth/init-admin', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: session.user.email,
            auth_id: session.user.id,
          }),
        });

        if (createResponse.ok) {
          const { user: newUser } = await createResponse.json();
          if (newUser) {
            logger.info('User created via init-admin in demo mode:', newUser.email);
            return newUser;
          }
        }
      } catch (createError) {
        logger.error('Error in demo init-admin:', createError);
      }

      logger.error('User fetch failed in demo mode - API not available');
      return null;
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
    // 実際にログインしている場合のみ権限を付与 (admin is the highest role)
    isSuperAdmin: isLoggedIn && role === 'admin',
    isAdmin: isLoggedIn && role === 'admin',
    isCoordinator: isLoggedIn && role === 'coordinator',
    isCustomer: !isLoggedIn || role === 'user',
    canManageItems: isLoggedIn && role === 'admin',
    canManageProjects: isLoggedIn && (role === 'admin' || role === 'coordinator'),
    canViewAllOrganizations: isLoggedIn && role === 'admin',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
