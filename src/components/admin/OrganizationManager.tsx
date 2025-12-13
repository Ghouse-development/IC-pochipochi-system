import React, { useState, useEffect } from 'react';
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
  BarChart3
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { useAuth } from '../../contexts/AuthContext';

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

export const OrganizationManager: React.FC = () => {
  const { isSuperAdmin, canViewAllOrganizations } = useAuth();
  const [organizations, setOrganizations] = useState<OrganizationStats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [_showAddModal, setShowAddModal] = useState(false);

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
      console.error('Failed to fetch organizations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // フィルタリング
  const filteredOrganizations = organizations.filter(org => {
    const matchesSearch =
      org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (org.prefecture?.toLowerCase() || '').includes(searchQuery.toLowerCase());

    const matchesType = filterType === 'all' || org.type === filterType;

    return matchesSearch && matchesType;
  });

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
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
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
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
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
    </div>
  );
};
