import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
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

  // リトライ付きfetch
  const fetchWithRetry = async (url: string, options: RequestInit, retries = 2): Promise<Response | null> => {
    for (let i = 0; i <= retries; i++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(url, {
          ...options,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          return response;
        }

        // 503や502はリトライ
        if (response.status >= 500 && i < retries) {
          logger.warn(`Server error ${response.status}, retrying... (${i + 1}/${retries})`);
          await new Promise(r => setTimeout(r, 1000 * (i + 1))); // 指数バックオフ
          continue;
        }

        return response;
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          logger.warn(`Request timed out, retrying... (${i + 1}/${retries})`);
        } else if (i < retries) {
          logger.warn(`Network error, retrying... (${i + 1}/${retries})`);
          await new Promise(r => setTimeout(r, 1000 * (i + 1)));
        }
      }
    }
    return null;
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

      // API経由でユーザーデータを取得（サービスロールでRLSをバイパス）- リトライ付き
      const response = await fetchWithRetry('/api/auth/get-user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response?.ok) {
        const { user } = await response.json();
        if (user) {
          logger.info('User fetched via API:', user.email, 'role:', user.role);
          return user;
        }
      } else if (response) {
        const errorText = await response.text();
        logger.warn('API fetch failed:', errorText);
      }

      // フォールバック: ユーザー作成を試みる
      const createResponse = await fetchWithRetry('/api/auth/init-admin', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: session.user.email,
          auth_id: session.user.id,
        }),
      }, 1); // リトライ1回

      if (createResponse?.ok) {
        const { user: newUser } = await createResponse.json();
        if (newUser) {
          logger.info('User record created via API:', newUser.email, 'role:', newUser.role);
          return newUser;
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

  // localStorageからセッションを読み取る（SDKバイパス用）
  // 注意: SDKが使用するキーとは別のキーを使用（SDKによる上書き/削除を防ぐ）
  const STORAGE_KEY = 'ic-pochi-session';

  const getStoredSession = (): { session: Session | null; user: SupabaseUser | null } => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return { session: null, user: null };

      const data = JSON.parse(stored);
      if (!data.access_token) return { session: null, user: null };

      // 期限切れチェック
      const expiresAt = data.expires_at;
      const now = Math.floor(Date.now() / 1000);
      if (expiresAt && expiresAt < now) {
        logger.warn('Stored session expired, clearing');
        localStorage.removeItem(STORAGE_KEY);
        return { session: null, user: null };
      }

      const session: Session = {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: data.expires_at,
        expires_in: data.expires_in,
        token_type: data.token_type || 'bearer',
        user: data.user,
      };

      return { session, user: data.user };
    } catch (err) {
      logger.error('Error reading stored session:', err);
      return { session: null, user: null };
    }
  };

  useEffect(() => {
    // Get initial session with timeout
    const initializeAuth = async () => {
      // 全体のタイムアウト設定（8秒）- fetchUserDataを含む全処理
      let hasTimedOut = false;
      const timeoutId = setTimeout(() => {
        hasTimedOut = true;
        logger.warn('Auth initialization timeout, proceeding without session');
        setIsLoading(false);
      }, 8000);

      try {
        // まずlocalStorageから直接セッションを読み取る（SDKバイパス）
        const storedData = getStoredSession();
        if (storedData.session && storedData.user) {
          logger.info('Found stored session, using directly');
          setSession(storedData.session);
          setSupabaseUser(storedData.user);

          // ユーザーデータを作成
          const fallbackUser: User = {
            id: storedData.user.id,
            auth_id: storedData.user.id,
            email: storedData.user.email || '',
            full_name: storedData.user.user_metadata?.full_name || storedData.user.email?.split('@')[0] || 'User',
            full_name_kana: null,
            role: BOOTSTRAP_ADMIN_EMAILS.includes(storedData.user.email?.toLowerCase() || '') ? 'admin' : 'coordinator',
            phone: null,
            company_name: null,
            organization_id: null,
            is_active: true,
            last_login_at: new Date().toISOString(),
            created_at: storedData.user.created_at || new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
          setUser(fallbackUser);
          clearTimeout(timeoutId);
          setIsLoading(false);
          return;
        }

        const { data: { session }, error } = await supabase.auth.getSession();

        // タイムアウト済みなら以降の処理をスキップ
        if (hasTimedOut) {
          return;
        }

        if (error) {
          logger.error('Error getting session:', error);
          // セッションエラーの場合、古いセッションをクリア
          logger.warn('Clearing stale session due to error');
          await supabase.auth.signOut();
          // finally で isLoading = false にするので return
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
            // finally で isLoading = false にする
            return;
          }
        }

        setSession(session);
        setSupabaseUser(session?.user ?? null);

        if (session?.user) {
          // タイムアウト済みならユーザーデータ取得をスキップ
          if (hasTimedOut) {
            return;
          }
          try {
            const userData = await fetchUserData(session.user.id);
            if (userData) {
              setUser(userData);
              await updateLastLogin(userData.id);
            } else {
              // API失敗時はセッション情報から仮ユーザーを作成（セッションは維持）
              logger.warn('Failed to fetch user data, creating fallback user from session');
              const fallbackUser: User = {
                id: session.user.id,
                auth_id: session.user.id,
                email: session.user.email || '',
                full_name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
                full_name_kana: null,
                role: BOOTSTRAP_ADMIN_EMAILS.includes(session.user.email?.toLowerCase() || '') ? 'admin' : 'coordinator',
                phone: null,
                company_name: null,
                organization_id: null,
                is_active: true,
                last_login_at: new Date().toISOString(),
                created_at: session.user.created_at || new Date().toISOString(),
                updated_at: new Date().toISOString(),
              };
              setUser(fallbackUser);
            }
          } catch (fetchError) {
            logger.error('Error fetching user data:', fetchError);
            // フェッチエラー時もセッション情報から仮ユーザーを作成
            const fallbackUser: User = {
              id: session.user.id,
              auth_id: session.user.id,
              email: session.user.email || '',
              full_name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
              full_name_kana: null,
              role: BOOTSTRAP_ADMIN_EMAILS.includes(session.user.email?.toLowerCase() || '') ? 'admin' : 'coordinator',
              phone: null,
              company_name: null,
              organization_id: null,
              is_active: true,
              last_login_at: new Date().toISOString(),
              created_at: session.user.created_at || new Date().toISOString(),
              updated_at: new Date().toISOString(),
            };
            setUser(fallbackUser);
          }
        }
      } catch (error) {
        logger.error('Error initializing auth:', error);
        // 初期化エラー時はセッションをクリア
        try {
          await supabase.auth.signOut();
        } catch {
          // サインアウトエラーは無視
        }
      } finally {
        clearTimeout(timeoutId);
        if (!hasTimedOut) {
          setIsLoading(false);
        }
      }
    };

    initializeAuth();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      logger.info('Auth state changed:', event);

      // 我々独自のセッションがある場合、SDKのイベントは無視する（SIGNED_OUT以外）
      const storedData = getStoredSession();
      if (storedData.session && storedData.user) {
        // ログアウトイベントの場合のみ処理（ユーザーが明示的にログアウトした場合）
        if (event === 'SIGNED_OUT') {
          logger.info('User signed out, clearing stored session');
          localStorage.removeItem(STORAGE_KEY);
          setSession(null);
          setSupabaseUser(null);
          setUser(null);
          return;
        }
        // その他のイベントは無視（我々のセッションを維持）
        logger.info('Ignoring SDK auth event, using stored session');
        return;
      }

      // 独自セッションがない場合のみSDKのセッションを使用
      setSession(session);
      setSupabaseUser(session?.user ?? null);

      if (session?.user) {
        try {
          const userData = await fetchUserData(session.user.id);
          if (userData) {
            setUser(userData);
            await updateLastLogin(userData.id);
          } else {
            // API失敗時はセッション情報から仮ユーザーを作成
            const fallbackUser: User = {
              id: session.user.id,
              auth_id: session.user.id,
              email: session.user.email || '',
              full_name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
              full_name_kana: null,
              role: BOOTSTRAP_ADMIN_EMAILS.includes(session.user.email?.toLowerCase() || '') ? 'admin' : 'coordinator',
              phone: null,
              company_name: null,
              organization_id: null,
              is_active: true,
              last_login_at: new Date().toISOString(),
              created_at: session.user.created_at || new Date().toISOString(),
              updated_at: new Date().toISOString(),
            };
            setUser(fallbackUser);
          }
        } catch (error) {
          logger.error('Error in auth state change:', error);
          // エラー時も仮ユーザーを作成
          const fallbackUser: User = {
            id: session.user.id,
            auth_id: session.user.id,
            email: session.user.email || '',
            full_name: session.user.user_metadata?.full_name || session.user.email?.split('@')[0] || 'User',
            full_name_kana: null,
            role: BOOTSTRAP_ADMIN_EMAILS.includes(session.user.email?.toLowerCase() || '') ? 'admin' : 'coordinator',
            phone: null,
            company_name: null,
            organization_id: null,
            is_active: true,
            last_login_at: new Date().toISOString(),
            created_at: session.user.created_at || new Date().toISOString(),
            updated_at: new Date().toISOString(),
          };
          setUser(fallbackUser);
        }
      } else {
        setUser(null);
      }
    });

    // 定期的なセッションリフレッシュ（10分ごと）
    const refreshInterval = setInterval(async () => {
      try {
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        if (currentSession) {
          // セッションの残り時間をチェック（5分以内なら更新）
          const expiresAt = currentSession.expires_at;
          const now = Math.floor(Date.now() / 1000);
          const timeUntilExpiry = expiresAt ? expiresAt - now : 0;

          if (timeUntilExpiry > 0 && timeUntilExpiry < 300) {
            logger.info('Session expiring soon, refreshing...');
            const { data, error } = await supabase.auth.refreshSession();
            if (error) {
              logger.warn('Session refresh failed:', error.message);
            } else if (data.session) {
              logger.info('Session refreshed successfully');
            }
          }
        }
      } catch (err) {
        logger.warn('Session refresh check failed:', err);
      }
    }, 10 * 60 * 1000); // 10分ごと

    return () => {
      subscription.unsubscribe();
      clearInterval(refreshInterval);
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    // Supabaseが設定されていない場合は即座にエラー
    if (!isSupabaseConfigured) {
      logger.error('Supabase is not configured - cannot sign in');
      return { error: new Error('認証サーバーに接続できません。システム管理者に連絡してください。') };
    }

    try {
      logger.info('Attempting sign in for:', email);

      // SDKをバイパスして直接fetch APIで認証
      const SUPABASE_URL = 'https://qqzqffkiyzeaampotgnn.supabase.co';
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTYxMDYsImV4cCI6MjA4MDgzMjEwNn0.wcCzxOTH14n4kIgXTrp1vZd3DPJzuim-Bz8fH-3U3bw';

      const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        logger.error('Auth error:', errorData);
        return { error: new Error(errorData.error_description || errorData.msg || '認証に失敗しました') };
      }

      const data = await response.json();
      logger.info('Auth successful, saving session...');

      // SDKのsetSessionもハングするため、localStorageに直接保存
      const sessionData = {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: data.expires_at,
        expires_in: data.expires_in,
        token_type: data.token_type,
        user: data.user,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sessionData));

      logger.info('Sign in successful via direct fetch, redirecting...');

      // ページをリロードしてセッションを反映
      window.location.href = '/admin';
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
    // localStorageのセッションもクリア
    localStorage.removeItem(STORAGE_KEY);
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setSupabaseUser(null);
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
