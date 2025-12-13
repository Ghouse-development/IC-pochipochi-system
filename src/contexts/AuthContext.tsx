import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import type { User as SupabaseUser, Session } from '@supabase/supabase-js';
import type { User, UserRole } from '../types/database';

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
      console.error('Error fetching user data:', error);
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
      console.error('Error creating user record:', error);
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
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setSupabaseUser(session?.user ?? null);

      if (session?.user) {
        fetchUserData(session.user.id).then((userData) => {
          setUser(userData);
          if (userData) {
            updateLastLogin(userData.id);
          }
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      setSupabaseUser(session?.user ?? null);

      if (session?.user) {
        const userData = await fetchUserData(session.user.id);
        setUser(userData);
        if (userData) {
          updateLastLogin(userData.id);
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

// Demo mode provider for development without auth
export function DemoAuthProvider({ children }: { children: ReactNode }) {
  const demoUser: User = {
    id: 'demo-admin-001',
    auth_id: null,
    email: 'admin@ghouse.com',
    full_name: '管理者（デモ）',
    full_name_kana: 'カンリシャ',
    role: 'super_admin',
    phone: null,
    company_name: 'Gハウス本部',
    organization_id: null,
    is_super_admin: true,
    is_active: true,
    last_login_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  const value: AuthContextType = {
    session: null,
    supabaseUser: null,
    user: demoUser,
    isLoading: false,
    signIn: async () => ({ error: null }),
    signUp: async () => ({ error: null }),
    signOut: async () => {},
    resetPassword: async () => ({ error: null }),
    isSuperAdmin: true,
    isAdmin: true,
    isCoordinator: false,
    isCustomer: false,
    canManageItems: true,
    canManageProjects: true,
    canViewAllOrganizations: true,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
