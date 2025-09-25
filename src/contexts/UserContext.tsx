import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  is_active: boolean;
  last_login_at?: string;
}

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  login: (email: string, name: string) => Promise<void>;
  logout: () => void;
  isAdmin: boolean;
  isEditor: boolean;
  canEdit: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    // ローカルストレージから復元
    const stored = localStorage.getItem('stylebook_user');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return null;
      }
    }
    return null;
  });

  useEffect(() => {
    // デフォルトユーザーを設定（デモ用）
    if (!currentUser) {
      const defaultUser: User = {
        id: 'demo-admin',
        email: 'admin@stylebook.com',
        name: '管理者',
        role: 'admin',
        is_active: true,
        last_login_at: new Date().toISOString()
      };
      setCurrentUser(defaultUser);
      localStorage.setItem('stylebook_user', JSON.stringify(defaultUser));
    }
  }, []);

  useEffect(() => {
    // ユーザー情報が変更されたらローカルストレージに保存
    if (currentUser) {
      localStorage.setItem('stylebook_user', JSON.stringify(currentUser));

      // Supabaseのユーザーセッションを設定（簡易版）
      // 本番環境では適切な認証を実装してください
      updateLastLogin(currentUser.email);
    }
  }, [currentUser]);

  const updateLastLogin = async (email: string) => {
    try {
      await supabase
        .from('app_users')
        .update({ last_login_at: new Date().toISOString() })
        .eq('email', email);
    } catch (error) {
      console.error('Error updating last login:', error);
    }
  };

  const login = async (email: string, name: string) => {
    // 簡易ログイン（デモ用）
    // 本番環境では適切な認証を実装してください

    try {
      // データベースからユーザーを取得または作成
      let { data: user, error } = await supabase
        .from('app_users')
        .select('*')
        .eq('email', email)
        .single();

      if (error || !user) {
        // ユーザーが存在しない場合は作成
        const { data: newUser, error: createError } = await supabase
          .from('app_users')
          .insert([{
            email,
            name,
            role: 'editor' // デフォルトは編集者
          }])
          .select()
          .single();

        if (createError) throw createError;
        user = newUser;
      }

      setCurrentUser(user as User);
    } catch (error) {
      console.error('Login error:', error);
      // エラーが発生してもデモ用ユーザーを設定
      const demoUser: User = {
        id: `demo-${Date.now()}`,
        email,
        name,
        role: 'editor',
        is_active: true,
        last_login_at: new Date().toISOString()
      };
      setCurrentUser(demoUser);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('stylebook_user');
  };

  const isAdmin = currentUser?.role === 'admin';
  const isEditor = currentUser?.role === 'editor' || isAdmin;
  const canEdit = isEditor;

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        login,
        logout,
        isAdmin,
        isEditor,
        canEdit
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}