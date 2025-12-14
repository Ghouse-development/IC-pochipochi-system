import React, { useState, useEffect, useMemo } from 'react';
import {
  Building2,
  Users,
  MapPin,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Search,
  Filter,
  ChevronRight,
  Crown,
  Store,
  Handshake,
  RefreshCw,
  CheckCircle,
  XCircle,
  BarChart3,
  X,
  Save,
  Mail,
  Phone,
  AlertTriangle,
  Settings,
  DollarSign,
  Package
} from 'lucide-react';
import { createLogger } from '../../lib/logger';

const logger = createLogger('OrganizationManager');
import { supabase } from '../../lib/supabase';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { useAuth } from '../../contexts/AuthContext';
import { useDebounce } from '../../hooks/useDebounce';
import { ConfirmDialog } from '../common/ConfirmDialog';

interface OrganizationStats {
  id: string;
  name: string;
  code: string;
  type: 'headquarters' | 'franchise' | 'partner';
  prefecture: string | null;
  member_count: number;
  project_count: number;
  is_active: boolean;
}

interface OrganizationFull {
  id: string;
  name: string;
  name_kana: string | null;
  code: string;
  type: 'headquarters' | 'franchise' | 'partner';
  email: string | null;
  phone: string | null;
  address: string | null;
  postal_code: string | null;
  prefecture: string | null;
  city: string | null;
  is_active: boolean;
  can_customize_pricing: boolean;
  can_add_products: boolean;
  created_at: string;
}

interface OrganizationForm {
  name: string;
  name_kana: string;
  code: string;
  type: 'headquarters' | 'franchise' | 'partner';
  email: string;
  phone: string;
  postal_code: string;
  prefecture: string;
  city: string;
  address: string;
  is_active: boolean;
  can_customize_pricing: boolean;
  can_add_products: boolean;
}

const PREFECTURES = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
  '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
  '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県',
  '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県',
  '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県',
  '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県',
  '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

const initialFormState: OrganizationForm = {
  name: '',
  name_kana: '',
  code: '',
  type: 'franchise',
  email: '',
  phone: '',
  postal_code: '',
  prefecture: '',
  city: '',
  address: '',
  is_active: true,
  can_customize_pricing: false,
  can_add_products: false,
};

export const OrganizationManager: React.FC = () => {
  const { isSuperAdmin, canViewAllOrganizations } = useAuth();
  const [organizations, setOrganizations] = useState<OrganizationStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [filterType, setFilterType] = useState<string>('all');

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Form and selection states
  const [formData, setFormData] = useState<OrganizationForm>(initialFormState);
  const [selectedOrg, setSelectedOrg] = useState<OrganizationFull | null>(null);
  const [selectedOrgId, setSelectedOrgId] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // 組織一覧を取得
  useEffect(() => {
    fetchOrganizations();
  }, []);

  const fetchOrganizations = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('organizations')
        .select(`
          id,
          name,
          code,
          type,
          prefecture,
          is_active,
          organization_members(count),
          projects(count)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      const stats: OrganizationStats[] = (data || []).map((org: unknown) => {
        const o = org as {
          id: string;
          name: string;
          code: string;
          type: 'headquarters' | 'franchise' | 'partner';
          prefecture: string | null;
          is_active: boolean;
          organization_members: { count: number }[];
          projects: { count: number }[];
        };
        return {
          id: o.id,
          name: o.name,
          code: o.code,
          type: o.type,
          prefecture: o.prefecture,
          is_active: o.is_active,
          member_count: o.organization_members?.[0]?.count || 0,
          project_count: o.projects?.[0]?.count || 0,
        };
      });

      setOrganizations(stats);
    } catch (error) {
      logger.error('Failed to fetch organizations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // フィルタリング（デバウンス適用）
  const filteredOrganizations = useMemo(() => {
    return organizations.filter(org => {
      const matchesSearch =
        org.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        org.code.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        (org.prefecture?.toLowerCase() || '').includes(debouncedSearchQuery.toLowerCase());

      const matchesType = filterType === 'all' || org.type === filterType;

      return matchesSearch && matchesType;
    });
  }, [organizations, debouncedSearchQuery, filterType]);

  // 統計
  const stats = {
    total: organizations.length,
    headquarters: organizations.filter(o => o.type === 'headquarters').length,
    franchise: organizations.filter(o => o.type === 'franchise').length,
    partner: organizations.filter(o => o.type === 'partner').length,
    active: organizations.filter(o => o.is_active).length,
    totalMembers: organizations.reduce((sum, o) => sum + o.member_count, 0),
    totalProjects: organizations.reduce((sum, o) => sum + o.project_count, 0),
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'headquarters': return <Crown className="w-4 h-4 text-amber-500" />;
      case 'franchise': return <Store className="w-4 h-4 text-blue-500" />;
      case 'partner': return <Handshake className="w-4 h-4 text-green-500" />;
      default: return <Building2 className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'headquarters': return '本部';
      case 'franchise': return 'フランチャイズ';
      case 'partner': return 'パートナー';
      default: return type;
    }
  };

  // 組織詳細を取得
  const fetchOrganizationDetail = async (id: string) => {
    try {
      const { data, error } = await supabase
        .from('organizations')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as OrganizationFull;
    } catch (err) {
      logger.error('Failed to fetch organization detail:', err);
      return null;
    }
  };

  // 詳細表示
  const handleView = async (id: string) => {
    const org = await fetchOrganizationDetail(id);
    if (org) {
      setSelectedOrg(org);
      setShowDetailModal(true);
    }
  };

  // 編集モーダルを開く
  const handleEdit = async (id: string) => {
    const org = await fetchOrganizationDetail(id);
    if (org) {
      setSelectedOrg(org);
      setFormData({
        name: org.name,
        name_kana: org.name_kana || '',
        code: org.code,
        type: org.type,
        email: org.email || '',
        phone: org.phone || '',
        postal_code: org.postal_code || '',
        prefecture: org.prefecture || '',
        city: org.city || '',
        address: org.address || '',
        is_active: org.is_active,
        can_customize_pricing: org.can_customize_pricing,
        can_add_products: org.can_add_products,
      });
      setShowEditModal(true);
    }
  };

  // 削除確認を開く
  const handleDeleteClick = (id: string) => {
    setSelectedOrgId(id);
    setShowDeleteConfirm(true);
  };

  // 組織を作成
  const handleCreate = async () => {
    if (!formData.name || !formData.code) {
      setError('組織名とコードは必須です');
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      const { error } = await supabase.from('organizations').insert({
        name: formData.name,
        name_kana: formData.name_kana || null,
        code: formData.code.toUpperCase(),
        type: formData.type,
        email: formData.email || null,
        phone: formData.phone || null,
        postal_code: formData.postal_code || null,
        prefecture: formData.prefecture || null,
        city: formData.city || null,
        address: formData.address || null,
        is_active: formData.is_active,
        can_customize_pricing: formData.can_customize_pricing,
        can_add_products: formData.can_add_products,
      });

      if (error) throw error;

      setSuccess('組織を作成しました');
      setShowAddModal(false);
      setFormData(initialFormState);
      fetchOrganizations();
      setTimeout(() => setSuccess(null), 3000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : '組織の作成に失敗しました';
      if (errorMessage.includes('duplicate')) {
        setError('このコードは既に使用されています');
      } else {
        setError(errorMessage);
      }
      logger.error('Failed to create organization:', err);
    } finally {
      setIsSaving(false);
    }
  };

  // 組織を更新
  const handleUpdate = async () => {
    if (!selectedOrg || !formData.name || !formData.code) {
      setError('組織名とコードは必須です');
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('organizations')
        .update({
          name: formData.name,
          name_kana: formData.name_kana || null,
          code: formData.code.toUpperCase(),
          type: formData.type,
          email: formData.email || null,
          phone: formData.phone || null,
          postal_code: formData.postal_code || null,
          prefecture: formData.prefecture || null,
          city: formData.city || null,
          address: formData.address || null,
          is_active: formData.is_active,
          can_customize_pricing: formData.can_customize_pricing,
          can_add_products: formData.can_add_products,
        })
        .eq('id', selectedOrg.id);

      if (error) throw error;

      setSuccess('組織を更新しました');
      setShowEditModal(false);
      setSelectedOrg(null);
      setFormData(initialFormState);
      fetchOrganizations();
      setTimeout(() => setSuccess(null), 3000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : '組織の更新に失敗しました';
      setError(errorMessage);
      logger.error('Failed to update organization:', err);
    } finally {
      setIsSaving(false);
    }
  };

  // 組織を削除
  const handleDelete = async () => {
    if (!selectedOrgId) return;

    setIsSaving(true);
    setError(null);

    try {
      const { error } = await supabase
        .from('organizations')
        .delete()
        .eq('id', selectedOrgId);

      if (error) throw error;

      setSuccess('組織を削除しました');
      setShowDeleteConfirm(false);
      setSelectedOrgId(null);
      fetchOrganizations();
      setTimeout(() => setSuccess(null), 3000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : '組織の削除に失敗しました';
      if (errorMessage.includes('foreign key')) {
        setError('この組織に紐づくユーザーまたはプロジェクトがあるため削除できません');
      } else {
        setError(errorMessage);
      }
      logger.error('Failed to delete organization:', err);
    } finally {
      setIsSaving(false);
    }
  };

  // フォーム入力ハンドラー
  const handleInputChange = (field: keyof OrganizationForm, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  // モーダルを閉じる
  const closeAddModal = () => {
    setShowAddModal(false);
    setFormData(initialFormState);
    setError(null);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedOrg(null);
    setFormData(initialFormState);
    setError(null);
  };

  // 組織フォームコンポーネント
  const OrganizationForm = ({ isEdit: _isEdit = false }: { isEdit?: boolean }) => (
    <div className="space-y-4">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 組織名 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            組織名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="例: 東京支店"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        {/* 組織名（カナ） */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            組織名（カナ）
          </label>
          <input
            type="text"
            value={formData.name_kana}
            onChange={(e) => handleInputChange('name_kana', e.target.value)}
            placeholder="例: トウキョウシテン"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>

        {/* コード */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            組織コード <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.code}
            onChange={(e) => handleInputChange('code', e.target.value.toUpperCase())}
            placeholder="例: TKY001"
            maxLength={10}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100 uppercase"
          />
          <p className="text-xs text-gray-500 mt-1">半角英数字、最大10文字</p>
        </div>

        {/* タイプ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            組織タイプ <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.type}
            onChange={(e) => handleInputChange('type', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          >
            <option value="franchise">フランチャイズ（FC加盟店）</option>
            <option value="partner">パートナー企業</option>
            <option value="headquarters">本部</option>
          </select>
        </div>
      </div>

      {/* 連絡先 */}
      <div className="border-t pt-4 mt-4">
        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
          <Mail className="w-4 h-4" />
          連絡先情報
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="example@company.com"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              電話番号
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="03-1234-5678"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      {/* 住所 */}
      <div className="border-t pt-4 mt-4">
        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          所在地
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              郵便番号
            </label>
            <input
              type="text"
              value={formData.postal_code}
              onChange={(e) => handleInputChange('postal_code', e.target.value)}
              placeholder="123-4567"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              都道府県
            </label>
            <select
              value={formData.prefecture}
              onChange={(e) => handleInputChange('prefecture', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">選択してください</option>
              {PREFECTURES.map(pref => (
                <option key={pref} value={pref}>{pref}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              市区町村
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="例: 渋谷区"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            住所（番地以降）
          </label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            placeholder="例: 1-2-3 ○○ビル 5F"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
        </div>
      </div>

      {/* 権限設定 */}
      <div className="border-t pt-4 mt-4">
        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
          <Settings className="w-4 h-4" />
          権限設定
        </h4>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.is_active}
              onChange={(e) => handleInputChange('is_active', e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              <span className="font-medium">アクティブ</span>
              <span className="text-gray-500 ml-2">- システムへのアクセスを許可</span>
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.can_customize_pricing}
              onChange={(e) => handleInputChange('can_customize_pricing', e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5" />
              <span className="font-medium">価格カスタマイズ</span>
              <span className="text-gray-500 ml-1">- 独自の価格設定が可能</span>
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.can_add_products}
              onChange={(e) => handleInputChange('can_add_products', e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-1">
              <Package className="w-3.5 h-3.5" />
              <span className="font-medium">商品追加</span>
              <span className="text-gray-500 ml-1">- 独自商品の登録が可能</span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );

  if (!isSuperAdmin && !canViewAllOrganizations) {
    return (
      <div className="p-8 text-center">
        <XCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-gray-900 mb-2">アクセス権限がありません</h2>
        <p className="text-gray-600">この機能はスーパー管理者のみ利用可能です。</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            組織管理
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            フランチャイズ加盟店・パートナー企業の管理
          </p>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          組織を追加
        </Button>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.total}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">総組織数</p>
        </Card>
        <Card className="p-4 text-center bg-amber-50 dark:bg-amber-900/20">
          <p className="text-3xl font-bold text-amber-600 dark:text-amber-400">{stats.headquarters}</p>
          <p className="text-xs text-amber-600 dark:text-amber-400">本部</p>
        </Card>
        <Card className="p-4 text-center bg-blue-50 dark:bg-blue-900/20">
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.franchise}</p>
          <p className="text-xs text-blue-600 dark:text-blue-400">FC加盟店</p>
        </Card>
        <Card className="p-4 text-center bg-green-50 dark:bg-green-900/20">
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">{stats.partner}</p>
          <p className="text-xs text-green-600 dark:text-green-400">パートナー</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.active}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">アクティブ</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.totalMembers}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">総ユーザー</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{stats.totalProjects}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">総プロジェクト</p>
        </Card>
      </div>

      {/* 検索・フィルター */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="組織名・コード・都道府県で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
              aria-label="組織検索"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
              aria-label="組織タイプでフィルター"
            >
              <option value="all">すべて</option>
              <option value="headquarters">本部</option>
              <option value="franchise">フランチャイズ</option>
              <option value="partner">パートナー</option>
            </select>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchOrganizations}
              disabled={isLoading}
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
      </Card>

      {/* 組織一覧 */}
      <Card className="overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center">
            <RefreshCw className="w-8 h-8 animate-spin text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">読み込み中...</p>
          </div>
        ) : filteredOrganizations.length === 0 ? (
          <div className="p-8 text-center">
            <Building2 className="w-12 h-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-500">組織が見つかりません</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredOrganizations.map(org => (
              <div
                key={org.id}
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      {getTypeIcon(org.type)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {org.name}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                          {org.code}
                        </span>
                        {org.is_active ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          {getTypeIcon(org.type)}
                          {getTypeLabel(org.type)}
                        </span>
                        {org.prefecture && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {org.prefecture}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {org.member_count}名
                        </span>
                        <span className="flex items-center gap-1">
                          <BarChart3 className="w-3 h-3" />
                          {org.project_count}件
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => handleView(org.id)} title="詳細を見る">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(org.id)} title="編集">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteClick(org.id)}
                      title="削除"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* 全国マップビュー（プレースホルダー） */}
      <Card className="p-6">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          全国展開マップ
        </h3>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">
            地域別組織分布マップ（近日実装予定）
          </p>
        </div>
      </Card>

      {/* 成功メッセージ */}
      {success && (
        <div className="fixed bottom-4 right-4 z-50 p-4 bg-green-500 text-white rounded-lg shadow-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          {success}
        </div>
      )}

      {/* 追加モーダル */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-500" />
                新規組織を追加
              </h2>
              <button
                onClick={closeAddModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(90vh-140px)]">
              <OrganizationForm />
            </div>
            <div className="flex justify-end gap-3 p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <Button variant="outline" onClick={closeAddModal}>
                キャンセル
              </Button>
              <Button
                variant="primary"
                onClick={handleCreate}
                disabled={isSaving || !formData.name || !formData.code}
                className="flex items-center gap-2"
              >
                {isSaving ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                作成
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 編集モーダル */}
      {showEditModal && selectedOrg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Edit2 className="w-5 h-5 text-blue-500" />
                組織を編集: {selectedOrg.name}
              </h2>
              <button
                onClick={closeEditModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(90vh-140px)]">
              <OrganizationForm isEdit />
            </div>
            <div className="flex justify-end gap-3 p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <Button variant="outline" onClick={closeEditModal}>
                キャンセル
              </Button>
              <Button
                variant="primary"
                onClick={handleUpdate}
                disabled={isSaving || !formData.name || !formData.code}
                className="flex items-center gap-2"
              >
                {isSaving ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                更新
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 詳細モーダル */}
      {showDetailModal && selectedOrg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                {getTypeIcon(selectedOrg.type)}
                {selectedOrg.name}
              </h2>
              <button
                onClick={() => { setShowDetailModal(false); setSelectedOrg(null); }}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4 overflow-y-auto max-h-[calc(90vh-80px)]">
              {/* 基本情報 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">組織コード</p>
                  <p className="font-medium text-gray-900 dark:text-gray-100">{selectedOrg.code}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">組織タイプ</p>
                  <p className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-1">
                    {getTypeIcon(selectedOrg.type)}
                    {getTypeLabel(selectedOrg.type)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">ステータス</p>
                  <p className="font-medium flex items-center gap-1">
                    {selectedOrg.is_active ? (
                      <><CheckCircle className="w-4 h-4 text-green-500" /> アクティブ</>
                    ) : (
                      <><XCircle className="w-4 h-4 text-red-500" /> 非アクティブ</>
                    )}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">作成日</p>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    {new Date(selectedOrg.created_at).toLocaleDateString('ja-JP')}
                  </p>
                </div>
              </div>

              {/* 連絡先 */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  連絡先
                </h4>
                <div className="space-y-2 text-sm">
                  {selectedOrg.email && (
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-gray-400" />
                      {selectedOrg.email}
                    </p>
                  )}
                  {selectedOrg.phone && (
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gray-400" />
                      {selectedOrg.phone}
                    </p>
                  )}
                  {!selectedOrg.email && !selectedOrg.phone && (
                    <p className="text-gray-400">登録なし</p>
                  )}
                </div>
              </div>

              {/* 所在地 */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  所在地
                </h4>
                <div className="text-sm">
                  {selectedOrg.prefecture || selectedOrg.city || selectedOrg.address ? (
                    <p>
                      {selectedOrg.postal_code && `〒${selectedOrg.postal_code} `}
                      {selectedOrg.prefecture}
                      {selectedOrg.city}
                      {selectedOrg.address}
                    </p>
                  ) : (
                    <p className="text-gray-400">登録なし</p>
                  )}
                </div>
              </div>

              {/* 権限 */}
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  権限設定
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedOrg.can_customize_pricing && (
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      価格カスタマイズ可
                    </span>
                  )}
                  {selectedOrg.can_add_products && (
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      商品追加可
                    </span>
                  )}
                  {!selectedOrg.can_customize_pricing && !selectedOrg.can_add_products && (
                    <span className="text-sm text-gray-400">標準権限のみ</span>
                  )}
                </div>
              </div>

              {/* アクションボタン */}
              <div className="border-t pt-4 flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setShowDetailModal(false);
                    handleEdit(selectedOrg.id);
                  }}
                  className="flex items-center gap-1"
                >
                  <Edit2 className="w-4 h-4" />
                  編集
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 削除確認ダイアログ */}
      <ConfirmDialog
        isOpen={showDeleteConfirm}
        title="組織を削除"
        message="この組織を削除してもよろしいですか？この操作は取り消せません。紐づくユーザーやプロジェクトがある場合は削除できません。"
        confirmText="削除"
        cancelText="キャンセル"
        variant="danger"
        onConfirm={handleDelete}
        onClose={() => { setShowDeleteConfirm(false); setSelectedOrgId(null); }}
      />
    </div>
  );
};
