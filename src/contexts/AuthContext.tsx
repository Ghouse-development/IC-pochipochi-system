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

  // Fetch app user data from users table
  const fetchUserData = async (authId: string): Promise<User | null> => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', authId)
      .single();

    if (error) {
      logger.error('Error fetching user data:', error);
      return null;
    }

    return data;
  };

  // Create user record in users table if not exists
  const createUserRecord = async (
    authId: string,
    email: string,
    fullName: string,
    role: UserRole = 'user'
  ): Promise<User | null> => {
    const { data, error } = await supabase
      .from('users')
      .insert({
        auth_id: authId,
        email,
        full_name: fullName,
        role,
      })
      .select()
      .single();

    if (error) {
      logger.error('Error creating user record:', error);
      return null;
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
    // Get initial session
    const initializeAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();

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

  // Fetch app user data from users table
  const fetchUserData = async (authId: string): Promise<User | null> => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('auth_id', authId)
      .single();

    if (error) {
      logger.error('Error fetching user data:', error);
      return null;
    }

    return data;
  };

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setSupabaseUser(session?.user ?? null);

      if (session?.user) {
        fetchUserData(session.user.id).then((userData) => {
          setUser(userData);
          setIsLoading(false);
        });
      } else {
        setUser(null);
        setIsLoading(false);
      }
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

    return () => subscription.unsubscribe();
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
