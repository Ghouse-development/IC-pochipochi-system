import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import type { User as SupabaseUser, Session } from '@supabase/supabase-js';
import type { User, UserRole } from '../types/database';
import { createLogger } from '../lib/logger';

const logger = createLogger('AuthContext');

// タイムアウト付きPromise
const withTimeout = <T,>(promise: Promise<T>, ms: number, errorMessage: string): Promise<T> => {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(errorMessage)), ms)
    ),
  ]);
};

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
  isCoordinator: boolean;  // alias: isStaff
  isStaff: boolean;        // スタッフ（ICコーディネーター）
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

      // API経由でユーザーデータを取得（サービスロールでRLSをバイパス）- 8秒タイムアウト
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const response = await fetch('/api/auth/get-user', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const { user } = await response.json();
          if (user) {
            logger.info('User fetched via API:', user.email, 'role:', user.role);
            return user;
          }
        } else {
          const errorText = await response.text();
          logger.warn('API fetch failed:', errorText);
        }
      } catch (apiError) {
        if (apiError instanceof Error && apiError.name === 'AbortError') {
          logger.warn('API fetch timed out after 8 seconds');
        } else {
          logger.warn('API not available:', apiError);
        }
      }

      // フォールバック: ユーザー作成を試みる（5秒タイムアウト）
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

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
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (createResponse.ok) {
          const { user: newUser } = await createResponse.json();
          if (newUser) {
            logger.info('User record created via API:', newUser.email, 'role:', newUser.role);
            return newUser;
          }
        }
      } catch (createError) {
        if (createError instanceof Error && createError.name === 'AbortError') {
          logger.warn('User creation timed out');
        } else {
          logger.error('Error creating user via API:', createError);
        }
      }

      // API完全失敗 - nullを返してセッションをクリアさせる
      // （古いセッションで無限ループになるのを防ぐ）
      logger.error('User fetch completely failed - returning null to force re-login');
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
          // セッションエラーの場合、古いセッションをクリア
          logger.warn('Clearing stale session due to error');
          await supabase.auth.signOut();
          setIsLoading(false);
          return;
        }

        // セッションがあるが期限切れの場合をチェック
        if (session) {
          const expiresAt = session.expires_at;
          const now = Math.floor(Date.now() / 1000);
          if (expiresAt && expiresAt < now) {
            logger.warn('Session expired, clearing stale session');
            await supabase.auth.signOut();
            setSession(null);
            setSupabaseUser(null);
            setIsLoading(false);
            return;
          }
        }

        setSession(session);
        setSupabaseUser(session?.user ?? null);

        if (session?.user) {
          try {
            const userData = await fetchUserData(session.user.id);
            if (userData) {
              setUser(userData);
              await updateLastLogin(userData.id);
            } else {
              // ユーザーデータ取得失敗 - セッションをクリアして再ログインを促す
              logger.warn('Failed to fetch user data, clearing session');
              await supabase.auth.signOut();
              setSession(null);
              setSupabaseUser(null);
            }
          } catch (fetchError) {
            logger.error('Error fetching user data:', fetchError);
            // フェッチエラー時もセッションをクリア
            await supabase.auth.signOut();
            setSession(null);
            setSupabaseUser(null);
          }
        }
      } catch (error) {
        clearTimeout(timeoutId);
        logger.error('Error initializing auth:', error);
        // 初期化エラー時はセッションをクリア
        try {
          await supabase.auth.signOut();
        } catch {
          // サインアウトエラーは無視
        }
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
    // Supabaseが設定されていない場合は即座にエラー
    if (!isSupabaseConfigured) {
      logger.error('Supabase is not configured - cannot sign in');
      return { error: new Error('認証サーバーに接続できません。システム管理者に連絡してください。') };
    }

    try {
      logger.info('Attempting sign in for:', email);

      // 10秒のタイムアウト付きでログイン試行
      const { error, data } = await withTimeout(
        supabase.auth.signInWithPassword({ email, password }),
        10000,
        'ログインがタイムアウトしました。ネットワーク接続を確認してください。'
      );

      if (error) {
        logger.error('Sign in error:', error.message);
        return { error: new Error(error.message) };
      }

      logger.info('Sign in successful, session:', data.session ? 'obtained' : 'null');
      return { error: null };
    } catch (err) {
      logger.error('Sign in exception:', err);
      return { error: err instanceof Error ? err : new Error('ログインに失敗しました') };
    }
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
  const isStaff = user?.role === 'coordinator'; // スタッフ = coordinator
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
        isStaff,
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
