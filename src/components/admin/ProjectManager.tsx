import { useState, useEffect } from 'react';
import {
  Plus,
  Search,
  Edit,
  Eye,
  Lock,
  Unlock,
  RefreshCw,
  Calendar,
  User as UserIcon,
  FileText,
} from 'lucide-react';
import { projectsApi, productsApi, usersApi } from '../../services/api';
import type { Project, Product, User as UserType } from '../../types/database';

interface ProjectManagerProps {
  onSelectProject?: (projectId: string) => void;
}

export function ProjectManager({ onSelectProject }: ProjectManagerProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [coordinators, setCoordinators] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [productFilter, setProductFilter] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [projectsData, productsData, coordinatorsData] = await Promise.all([
        projectsApi.getAll(),
        productsApi.getAll(),
        usersApi.getCoordinators(),
      ]);
      setProjects(projectsData);
      setProducts(productsData);
      setCoordinators(coordinatorsData);
    } catch (err) {
      setError('データの読み込みに失敗しました');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.project_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.customer_name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    const matchesProduct = productFilter === 'all' || project.product_id === productFilter;
    return matchesSearch && matchesStatus && matchesProduct;
  });

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      draft: 'bg-gray-100 text-gray-700',
      active: 'bg-blue-100 text-blue-700',
      confirmed: 'bg-green-100 text-green-700',
      completed: 'bg-purple-100 text-purple-700',
      cancelled: 'bg-red-100 text-red-700',
    };
    const labels: Record<string, string> = {
      draft: '下書き',
      active: '進行中',
      confirmed: '確定済',
      completed: '完了',
      cancelled: 'キャンセル',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status] || styles.draft}`}>
        {labels[status] || status}
      </span>
    );
  };

  const handleForceReleaseLock = async (projectId: string) => {
    if (!confirm('編集ロックを強制解除しますか？')) return;
    try {
      await projectsApi.forceReleaseLock(projectId);
      await loadData();
    } catch (err) {
      console.error('Failed to release lock:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-teal-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">プロジェクト管理</h2>
          <p className="text-gray-600 mt-1">お客様のプロジェクトを管理します</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
        >
          <Plus className="w-4 h-4" />
          新規プロジェクト
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="プロジェクト名、コード、お客様名で検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">全ステータス</option>
              <option value="draft">下書き</option>
              <option value="active">進行中</option>
              <option value="confirmed">確定済</option>
              <option value="completed">完了</option>
              <option value="cancelled">キャンセル</option>
            </select>
            <select
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">全プラン</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  プロジェクト
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  お客様
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  プラン
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ステータス
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  作成日
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    プロジェクトが見つかりません
                  </td>
                </tr>
              ) : (
                filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-teal-50 rounded-lg">
                          <FileText className="w-4 h-4 text-teal-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{project.name}</div>
                          <div className="text-sm text-gray-500">{project.project_code}</div>
                        </div>
                        {project.edit_locked_by && (
                          <div className="flex items-center gap-1 text-orange-500" title="編集中">
                            <Lock className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">{project.customer_name || '-'}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="px-2 py-1 rounded text-xs font-medium"
                        style={{
                          backgroundColor: (project.product?.color_code || '#888888') + '20',
                          color: project.product?.color_code || '#888888',
                        }}
                      >
                        {project.product?.name || '-'}
                      </span>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(project.status)}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(project.created_at).toLocaleDateString('ja-JP')}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onSelectProject?.(project.id)}
                          className="p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg"
                          title="詳細を見る"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                          title="編集"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        {project.edit_locked_by && (
                          <button
                            onClick={() => handleForceReleaseLock(project.id)}
                            className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg"
                            title="ロック解除"
                          >
                            <Unlock className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard
          label="全プロジェクト"
          value={projects.length}
          color="gray"
        />
        <StatCard
          label="進行中"
          value={projects.filter((p) => p.status === 'active').length}
          color="blue"
        />
        <StatCard
          label="確定済"
          value={projects.filter((p) => p.status === 'confirmed').length}
          color="green"
        />
        <StatCard
          label="完了"
          value={projects.filter((p) => p.status === 'completed').length}
          color="purple"
        />
        <StatCard
          label="下書き"
          value={projects.filter((p) => p.status === 'draft').length}
          color="gray"
        />
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <CreateProjectModal
          products={products}
          coordinators={coordinators}
          onClose={() => setShowCreateModal(false)}
          onCreated={() => {
            setShowCreateModal(false);
            loadData();
          }}
        />
      )}

      {/* Edit Modal */}
      {selectedProject && (
        <EditProjectModal
          project={selectedProject}
          products={products}
          coordinators={coordinators}
          onClose={() => setSelectedProject(null)}
          onUpdated={() => {
            setSelectedProject(null);
            loadData();
          }}
        />
      )}
    </div>
  );
}

// Stat Card Component
function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const colors: Record<string, string> = {
    gray: 'bg-gray-50 text-gray-600',
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
    red: 'bg-red-50 text-red-600',
  };

  return (
    <div className={`${colors[color]} rounded-xl p-4`}>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}

// Create Project Modal
function CreateProjectModal({
  products,
  onClose,
  onCreated,
}: {
  products: Product[];
  coordinators: UserType[];
  onClose: () => void;
  onCreated: () => void;
}) {
  const [formData, setFormData] = useState({
    name: '',
    product_id: '',
    customer_name: '',
    construction_name: '',
    construction_address: '',
    floors: 2,
    floor_area: '',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.product_id) {
      setError('プロジェクト名とプランは必須です');
      return;
    }

    setIsSaving(true);
    setError(null);

    try {
      await projectsApi.create({
        name: formData.name,
        product_id: formData.product_id,
        customer_name: formData.customer_name || undefined,
        construction_name: formData.construction_name || undefined,
        construction_address: formData.construction_address || undefined,
        floors: formData.floors,
        floor_area: formData.floor_area
          ? (Number.isNaN(parseFloat(formData.floor_area)) ? undefined : parseFloat(formData.floor_area))
          : undefined,
      });
      onCreated();
    } catch (err) {
      setError('プロジェクトの作成に失敗しました');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">新規プロジェクト作成</h3>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              プロジェクト名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="例: 山田邸 新築工事"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              プラン <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.product_id}
              onChange={(e) => setFormData({ ...formData, product_id: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            >
              <option value="">選択してください</option>
              {products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">お客様名</label>
            <input
              type="text"
              value={formData.customer_name}
              onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="例: 山田 太郎"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">工事名称</label>
            <input
              type="text"
              value={formData.construction_name}
              onChange={(e) => setFormData({ ...formData, construction_name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">工事場所</label>
            <input
              type="text"
              value={formData.construction_address}
              onChange={(e) => setFormData({ ...formData, construction_address: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="例: 東京都○○区..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">階数</label>
              <select
                value={formData.floors}
                onChange={(e) => setFormData({ ...formData, floors: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                <option value={1}>1階建て</option>
                <option value={2}>2階建て</option>
                <option value={3}>3階建て</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">延床面積（㎡）</label>
              <input
                type="number"
                value={formData.floor_area}
                onChange={(e) => setFormData({ ...formData, floor_area: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                step="0.01"
                min="0"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50"
            >
              {isSaving ? '作成中...' : '作成'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Edit Project Modal
function EditProjectModal({
  project,
  products,
  coordinators,
  onClose,
  onUpdated,
}: {
  project: Project;
  products: Product[];
  coordinators: UserType[];
  onClose: () => void;
  onUpdated: () => void;
}) {
  const [formData, setFormData] = useState({
    name: project.name,
    product_id: project.product_id || '',
    customer_name: project.customer_name || '',
    construction_name: project.construction_name || '',
    construction_address: project.construction_address || '',
    floors: project.floors,
    floor_area: project.floor_area?.toString() || '',
    status: project.status,
    assigned_coordinator_id: project.assigned_coordinator_id || '',
  });
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    try {
      await projectsApi.update(project.id, {
        name: formData.name,
        product_id: formData.product_id || null,
        customer_name: formData.customer_name || null,
        construction_name: formData.construction_name || null,
        construction_address: formData.construction_address || null,
        floors: formData.floors,
        floor_area: formData.floor_area
          ? (Number.isNaN(parseFloat(formData.floor_area)) ? null : parseFloat(formData.floor_area))
          : null,
        status: formData.status as Project['status'],
        assigned_coordinator_id: formData.assigned_coordinator_id || null,
      });
      onUpdated();
    } catch (err) {
      setError('プロジェクトの更新に失敗しました');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">プロジェクト編集</h3>
          <p className="text-sm text-gray-500 mt-1">{project.project_code}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">{error}</div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">プロジェクト名</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">プラン</label>
              <select
                value={formData.product_id}
                onChange={(e) => setFormData({ ...formData, product_id: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                <option value="">選択してください</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ステータス</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Project['status'] })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                <option value="draft">下書き</option>
                <option value="active">進行中</option>
                <option value="confirmed">確定済</option>
                <option value="completed">完了</option>
                <option value="cancelled">キャンセル</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">担当コーディネーター</label>
            <select
              value={formData.assigned_coordinator_id}
              onChange={(e) => setFormData({ ...formData, assigned_coordinator_id: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            >
              <option value="">未割当</option>
              {coordinators.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.full_name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">お客様名</label>
            <input
              type="text"
              value={formData.customer_name}
              onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">工事名称</label>
            <input
              type="text"
              value={formData.construction_name}
              onChange={(e) => setFormData({ ...formData, construction_name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">工事場所</label>
            <input
              type="text"
              value={formData.construction_address}
              onChange={(e) => setFormData({ ...formData, construction_address: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">階数</label>
              <select
                value={formData.floors}
                onChange={(e) => setFormData({ ...formData, floors: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                <option value={1}>1階建て</option>
                <option value={2}>2階建て</option>
                <option value={3}>3階建て</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">延床面積（㎡）</label>
              <input
                type="number"
                value={formData.floor_area}
                onChange={(e) => setFormData({ ...formData, floor_area: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                step="0.01"
                min="0"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50"
            >
              {isSaving ? '保存中...' : '保存'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
