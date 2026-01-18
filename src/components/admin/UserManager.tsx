import { useState, useEffect, useMemo } from 'react';
import {
  Users,
  Plus,
  Edit2,
  Search,
  Mail,
  Phone,
  Shield,
  UserCheck,
  UserX,
  Save,
  X,
  RefreshCw,
  FolderPlus,
  Download
} from 'lucide-react';
import { usersApi } from '../../services/api';
import type { User, UserRole } from '../../types/database';
import { supabase } from '../../lib/supabase';
import { ConfirmDialog } from '../common/ConfirmDialog';
import { useDebounce } from '../../hooks/useDebounce';
import { createLogger } from '../../lib/logger';

const logger = createLogger('UserManager');

interface UserManagerProps {
  onBack?: () => void;
  onCreateProject?: (user: User) => void;
}

const ROLE_OPTIONS: { value: UserRole; label: string; description: string }[] = [
  { value: 'admin', label: '管理者', description: 'すべての機能にアクセス可能（商品管理・ユーザー管理）' },
  { value: 'coordinator', label: 'スタッフ', description: 'プロジェクト管理・編集が可能（ICコーディネーター）' },
  { value: 'user', label: 'ユーザー', description: 'お客様：選択・閲覧のみ可能' },
];

const getRoleColor = (role: UserRole) => {
  switch (role) {
    case 'admin':
      return 'bg-purple-100 text-purple-800';
    case 'coordinator':
      return 'bg-blue-100 text-blue-800';
    case 'user':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getRoleLabel = (role: UserRole) => {
  return ROLE_OPTIONS.find(r => r.value === role)?.label || role;
};

type UserTab = 'customers' | 'staff';

export function UserManager({ onBack, onCreateProject }: UserManagerProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [activeTab, setActiveTab] = useState<UserTab>('customers');
  const [filterRole, setFilterRole] = useState<UserRole | 'all'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Password reset confirmation
  const [resetPasswordUser, setResetPasswordUser] = useState<User | null>(null);

  // Sync auth users
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncPreview, setSyncPreview] = useState<{ email: string; id: string }[] | null>(null);

  // New user form state
  const [newUserForm, setNewUserForm] = useState({
    email: '',
    password: '',
    full_name: '',
    role: 'user' as UserRole,
    phone: '',
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await usersApi.getAll();
      setUsers(data);
    } catch (err) {
      logger.error('Error loading users:', err);
      setError('ユーザーの読み込みに失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const handleSyncAuthUsers = async (execute = false) => {
    try {
      setIsSyncing(true);
      setError(null);

      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        setError('ログインセッションが無効です');
        return;
      }

      const response = await fetch('/api/users/sync-auth', {
        method: execute ? 'POST' : 'GET',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || '同期に失敗しました');
      }

      if (execute) {
        setSuccess(`${result.syncedCount}件のユーザーを同期しました`);
        setSyncPreview(null);
        await loadUsers();
      } else {
        if (result.usersToSync.length === 0) {
          setSuccess('同期が必要なユーザーはいません');
        } else {
          setSyncPreview(result.usersToSync);
        }
      }
    } catch (err) {
      logger.error('Error syncing users:', err);
      setError(err instanceof Error ? err.message : '同期に失敗しました');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleCreateUser = async () => {
    try {
      setError(null);

      // バリデーション
      if (!newUserForm.email || !newUserForm.password || !newUserForm.full_name) {
        setError('メールアドレス、パスワード、名前は必須です');
        return;
      }

      if (newUserForm.password.length < 6) {
        setError('パスワードは6文字以上にしてください');
        return;
      }

      // 現在のセッションを取得
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        setError('ログインセッションが無効です。再ログインしてください。');
        return;
      }

      // API経由でユーザーを作成（メール確認不要で即ログイン可能）
      const response = await fetch('/api/admin/create-user', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newUserForm.email,
          password: newUserForm.password,
          full_name: newUserForm.full_name,
          role: newUserForm.role,
          phone: newUserForm.phone || null,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'ユーザーの作成に失敗しました');
      }

      setSuccess('ユーザーを作成しました（すぐにログイン可能です）');
      setIsCreating(false);
      setNewUserForm({
        email: '',
        password: '',
        full_name: '',
        role: 'user',
        phone: '',
      });
      await loadUsers();
    } catch (err: unknown) {
      logger.error('Error creating user:', err);
      setError(err instanceof Error ? err.message : 'ユーザーの作成に失敗しました');
    }
  };

  const handleUpdateUser = async () => {
    if (!editingUser) return;

    try {
      setError(null);
      await usersApi.update(editingUser.id, {
        full_name: editingUser.full_name,
        role: editingUser.role,
        phone: editingUser.phone,
        is_active: editingUser.is_active,
      });

      setSuccess('ユーザーを更新しました');
      setEditingUser(null);
      await loadUsers();
    } catch (err) {
      logger.error('Error updating user:', err);
      setError('ユーザーの更新に失敗しました');
    }
  };

  const handleToggleActive = async (user: User) => {
    try {
      setError(null);
      await usersApi.update(user.id, {
        is_active: !user.is_active,
      });

      setSuccess(user.is_active ? 'ユーザーを無効化しました' : 'ユーザーを有効化しました');
      await loadUsers();
    } catch (err) {
      logger.error('Error toggling user status:', err);
      setError('ステータスの変更に失敗しました');
    }
  };

  const handleResetPassword = (user: User) => {
    setResetPasswordUser(user);
  };

  const executeResetPassword = async () => {
    if (!resetPasswordUser) return;

    try {
      setError(null);
      const { error } = await supabase.auth.resetPasswordForEmail(resetPasswordUser.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;
      setSuccess('パスワードリセットメールを送信しました');
    } catch (err) {
      logger.error('Error resetting password:', err);
      setError('パスワードリセットメールの送信に失敗しました');
    } finally {
      setResetPasswordUser(null);
    }
  };

  // Filter users (memoized with debounced search)
  const filteredUsers = useMemo(() => {
    const searchLower = debouncedSearchTerm.toLowerCase();
    return users.filter(user => {
      // タブによるフィルタリング
      const matchesTab = activeTab === 'customers'
        ? user.role === 'user'
        : user.role === 'admin' || user.role === 'coordinator';

      const matchesSearch =
        user.full_name?.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.phone?.includes(debouncedSearchTerm);

      // タブが「スタッフ・管理者」の場合のみ、役割フィルターを適用
      const matchesRole = activeTab === 'customers' || filterRole === 'all' || user.role === filterRole;
      const matchesStatus =
        filterStatus === 'all' ||
        (filterStatus === 'active' && user.is_active) ||
        (filterStatus === 'inactive' && !user.is_active);

      return matchesTab && matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, debouncedSearchTerm, activeTab, filterRole, filterStatus]);

  // Stats
  const stats = {
    total: users.length,
    admins: users.filter(u => u.role === 'admin').length,
    coordinators: users.filter(u => u.role === 'coordinator').length,
    users: users.filter(u => u.role === 'user').length,
    active: users.filter(u => u.is_active).length,
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onBack && (
              <button
                onClick={onBack}
                className="text-gray-600 hover:text-gray-900"
              >
                ← 戻る
              </button>
            )}
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Users className="w-5 h-5" />
              ユーザー管理
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSyncAuthUsers(false)}
              disabled={isSyncing}
              className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 disabled:opacity-50"
              title="Supabase Authに登録されているユーザーを同期"
            >
              <Download className="w-4 h-4" />
              {isSyncing ? '確認中...' : 'Auth同期'}
            </button>
            <button
              onClick={() => {
                setNewUserForm({
                  email: '',
                  password: '',
                  full_name: '',
                  role: activeTab === 'customers' ? 'user' : 'coordinator',
                  phone: '',
                });
                setIsCreating(true);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Plus className="w-4 h-4" />
              {activeTab === 'customers' ? '新規ユーザー' : '新規スタッフ'}
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      {error && (
        <div className="m-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center justify-between">
          <span>{error}</span>
          <button onClick={() => setError(null)} className="text-red-900 font-bold">×</button>
        </div>
      )}
      {success && (
        <div className="m-4 p-4 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-between">
          <span>{success}</span>
          <button onClick={() => setSuccess(null)} className="text-blue-900 font-bold">×</button>
        </div>
      )}

      {/* Tabs */}
      <div className="border-b">
        <div className="flex">
          <button
            onClick={() => {
              setActiveTab('customers');
              setFilterRole('all');
            }}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'customers'
                ? 'border-blue-600 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            ユーザー（お客様）
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
              activeTab === 'customers' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
            }`}>
              {stats.users}
            </span>
          </button>
          <button
            onClick={() => {
              setActiveTab('staff');
              setFilterRole('all');
            }}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'staff'
                ? 'border-blue-600 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            スタッフ・管理者
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
              activeTab === 'staff' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
            }`}>
              {stats.admins + stats.coordinators}
            </span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="p-4 grid grid-cols-3 gap-4">
        {activeTab === 'customers' ? (
          <>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-900">{stats.users}</div>
              <div className="text-sm text-gray-600">お客様</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-700">{users.filter(u => u.role === 'user' && u.is_active).length}</div>
              <div className="text-sm text-blue-600">アクティブ</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-700">{users.filter(u => u.role === 'user' && !u.is_active).length}</div>
              <div className="text-sm text-red-600">無効</div>
            </div>
          </>
        ) : (
          <>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-700">{stats.admins}</div>
              <div className="text-sm text-purple-600">管理者</div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-700">{stats.coordinators}</div>
              <div className="text-sm text-blue-600">スタッフ</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-gray-700">{users.filter(u => (u.role === 'admin' || u.role === 'coordinator') && u.is_active).length}</div>
              <div className="text-sm text-gray-600">アクティブ</div>
            </div>
          </>
        )}
      </div>

      {/* Filters */}
      <div className="p-4 border-b flex gap-4 flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="名前・メール・電話で検索..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        {activeTab === 'staff' && (
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value as UserRole | 'all')}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">すべての権限</option>
            <option value="admin">管理者</option>
            <option value="coordinator">スタッフ</option>
          </select>
        )}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'inactive')}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">すべてのステータス</option>
          <option value="active">アクティブ</option>
          <option value="inactive">無効</option>
        </select>
        <button
          onClick={loadUsers}
          className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          更新
        </button>
      </div>

      {/* User List */}
      <div className="p-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-600">読み込み中...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            {activeTab === 'customers' ? 'お客様が見つかりません' : 'スタッフ・管理者が見つかりません'}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredUsers.map(user => (
              <div
                key={user.id}
                className={`p-4 border rounded-lg ${!user.is_active ? 'bg-gray-50 opacity-60' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getRoleColor(user.role)}`}>
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium flex items-center gap-2">
                        {user.full_name || '(名前未設定)'}
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getRoleColor(user.role)}`}>
                          {getRoleLabel(user.role)}
                        </span>
                        {!user.is_active && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                            無効
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {user.email}
                        </span>
                        {user.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            {user.phone}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* プロジェクト作成ボタン（顧客ユーザーのみ） */}
                    {onCreateProject && user.role === 'user' && user.is_active && (
                      <button
                        onClick={() => onCreateProject(user)}
                        className="p-2 hover:bg-blue-100 rounded-lg text-blue-600"
                        title="このユーザーでプロジェクト作成"
                      >
                        <FolderPlus className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => handleResetPassword(user)}
                      className="p-2 hover:bg-gray-200 rounded-lg text-gray-600"
                      title="パスワードリセット"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setEditingUser(user)}
                      className="p-2 hover:bg-gray-200 rounded-lg text-gray-600"
                      title="編集"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleToggleActive(user)}
                      className={`p-2 rounded-lg ${user.is_active ? 'hover:bg-red-100 text-red-600' : 'hover:bg-blue-100 text-blue-600'}`}
                      title={user.is_active ? '無効化' : '有効化'}
                    >
                      {user.is_active ? <UserX className="w-4 h-4" /> : <UserCheck className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create User Modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="border-b p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {activeTab === 'customers' ? '新規ユーザー作成' : '新規スタッフ作成'}
              </h3>
              <button
                onClick={() => setIsCreating(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">メールアドレス *</label>
                <input
                  type="email"
                  value={newUserForm.email}
                  onChange={(e) => setNewUserForm({ ...newUserForm, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="user@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">パスワード *</label>
                <input
                  type="password"
                  value={newUserForm.password}
                  onChange={(e) => setNewUserForm({ ...newUserForm, password: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="6文字以上"
                  minLength={6}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">氏名 *</label>
                <input
                  type="text"
                  value={newUserForm.full_name}
                  onChange={(e) => setNewUserForm({ ...newUserForm, full_name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="山田 太郎"
                />
              </div>

              {activeTab === 'staff' && (
                <div>
                  <label className="block text-sm font-medium mb-1">権限 *</label>
                  <select
                    value={newUserForm.role}
                    onChange={(e) => setNewUserForm({ ...newUserForm, role: e.target.value as UserRole })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="coordinator">
                      スタッフ - プロジェクト管理・編集が可能（ICコーディネーター）
                    </option>
                    <option value="admin">
                      管理者 - すべての機能にアクセス可能（商品管理・ユーザー管理）
                    </option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">電話番号</label>
                <input
                  type="tel"
                  value={newUserForm.phone}
                  onChange={(e) => setNewUserForm({ ...newUserForm, phone: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="090-1234-5678"
                />
              </div>
            </div>

            <div className="border-t p-4 flex justify-end gap-3">
              <button
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={handleCreateUser}
                disabled={!newUserForm.email || !newUserForm.password || newUserForm.password.length < 6 || !newUserForm.full_name}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                作成
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="border-b p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">ユーザー編集</h3>
              <button
                onClick={() => setEditingUser(null)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">メールアドレス</label>
                <input
                  type="email"
                  value={editingUser.email}
                  disabled
                  className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-600"
                />
                <p className="text-xs text-gray-500 mt-1">メールアドレスは変更できません</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">氏名</label>
                <input
                  type="text"
                  value={editingUser.full_name || ''}
                  onChange={(e) => setEditingUser({ ...editingUser, full_name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">権限</label>
                <select
                  value={editingUser.role}
                  onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as UserRole })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {ROLE_OPTIONS.map(role => (
                    <option key={role.value} value={role.value}>
                      {role.label} - {role.description}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">電話番号</label>
                <input
                  type="tel"
                  value={editingUser.phone || ''}
                  onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={editingUser.is_active}
                    onChange={(e) => setEditingUser({ ...editingUser, is_active: e.target.checked })}
                    className="rounded"
                  />
                  <span className="text-sm">アクティブ</span>
                </label>
              </div>
            </div>

            <div className="border-t p-4 flex justify-end gap-3">
              <button
                onClick={() => setEditingUser(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={handleUpdateUser}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Password Reset Confirm Dialog */}
      <ConfirmDialog
        isOpen={!!resetPasswordUser}
        onClose={() => setResetPasswordUser(null)}
        onConfirm={executeResetPassword}
        title="パスワードリセット"
        message={`${resetPasswordUser?.full_name || resetPasswordUser?.email} にパスワードリセットメールを送信しますか？`}
        confirmText="送信"
        cancelText="キャンセル"
        variant="info"
      />

      {/* Sync Preview Modal */}
      {syncPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="border-b p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Auth同期プレビュー</h3>
              <button
                onClick={() => setSyncPreview(null)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 overflow-y-auto max-h-[50vh]">
              <p className="text-sm text-gray-600 mb-4">
                以下の{syncPreview.length}件のユーザーがSupabase Authに登録されていますが、
                ユーザーテーブルに存在しません。同期しますか？
              </p>
              <div className="space-y-2">
                {syncPreview.map((user) => (
                  <div key={user.id} className="p-2 bg-gray-50 rounded text-sm">
                    {user.email}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t p-4 flex justify-end gap-3">
              <button
                onClick={() => setSyncPreview(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={() => handleSyncAuthUsers(true)}
                disabled={isSyncing}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {isSyncing ? '同期中...' : '同期実行'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
