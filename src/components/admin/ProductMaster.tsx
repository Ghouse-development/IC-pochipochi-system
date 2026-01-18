import { useState, useEffect } from 'react';
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  RefreshCw,
  GripVertical,
  Package,
} from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { useToast } from '../common/Toast';
import { ConfirmDialog } from '../common/ConfirmDialog';
import { createLogger } from '../../lib/logger';

const logger = createLogger('ProductMaster');

// 商品（プラン）の型
interface ProductPlan {
  id: string;
  code: string;
  name: string;
  description: string | null;
  color_code: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// デフォルトのプラン（Supabase未設定時用）
const DEFAULT_PLANS: ProductPlan[] = [
  { id: '1', code: 'LACIE', name: 'LACIE', description: 'ラシエ - ハイグレードプラン', color_code: '#6366f1', display_order: 1, is_active: true, created_at: '', updated_at: '' },
  { id: '2', code: 'HOURS', name: 'HOURS', description: 'アワーズ - スタンダードプラン', color_code: '#10b981', display_order: 2, is_active: true, created_at: '', updated_at: '' },
  { id: '3', code: 'LIFE_PLUS', name: 'LIFE+', description: 'ライフプラス - コストパフォーマンスプラン', color_code: '#f59e0b', display_order: 3, is_active: true, created_at: '', updated_at: '' },
  { id: '4', code: 'LIFE', name: 'LIFE', description: 'ライフ - エントリープラン', color_code: '#ef4444', display_order: 4, is_active: true, created_at: '', updated_at: '' },
  { id: '5', code: 'LIFE_X', name: 'LIFE X', description: 'ライフエックス - 特別仕様（LIFEと同価格）', color_code: '#8b5cf6', display_order: 5, is_active: true, created_at: '', updated_at: '' },
  { id: '6', code: 'LIFE_LIMITED', name: 'LIFE Limited', description: 'ライフリミテッド - 限定仕様（LIFEと同価格）', color_code: '#ec4899', display_order: 6, is_active: true, created_at: '', updated_at: '' },
  { id: '7', code: 'LIFE_PLUS_LIMITED', name: 'LIFE+ Limited', description: 'ライフプラスリミテッド - 限定仕様（LIFE+と同価格）', color_code: '#14b8a6', display_order: 7, is_active: true, created_at: '', updated_at: '' },
];

export function ProductMaster() {
  const toast = useToast();
  const [plans, setPlans] = useState<ProductPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingPlan, setEditingPlan] = useState<ProductPlan | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<{ isOpen: boolean; planId: string | null }>({
    isOpen: false,
    planId: null,
  });

  // 新規作成用フォームデータ
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    description: '',
    color_code: '#6366f1',
  });

  // データ読み込み
  const loadPlans = async () => {
    setIsLoading(true);
    setError(null);

    if (!isSupabaseConfigured) {
      // Supabase未設定時はデフォルトデータを表示
      setPlans(DEFAULT_PLANS);
      setIsLoading(false);
      return;
    }

    try {
      const { data, error: fetchError } = await supabase
        .from('products')
        .select('*')
        .order('display_order');

      if (fetchError) throw fetchError;
      setPlans(data || []);
    } catch (err) {
      logger.error('Failed to load plans:', err);
      setError('商品マスタの読み込みに失敗しました');
      // エラー時はデフォルトデータを表示
      setPlans(DEFAULT_PLANS);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPlans();
  }, []);

  // 新規作成
  const handleCreate = async () => {
    if (!formData.code || !formData.name) {
      toast.error('入力エラー', 'コードと名前は必須です');
      return;
    }

    if (!isSupabaseConfigured) {
      toast.error('エラー', 'Supabaseが設定されていません。データベースに接続してください。');
      return;
    }

    try {
      const newPlan = {
        code: formData.code.toUpperCase(),
        name: formData.name,
        description: formData.description || null,
        color_code: formData.color_code,
        display_order: plans.length + 1,
        is_active: true,
      };

      const { error: insertError } = await supabase
        .from('products')
        .insert(newPlan);

      if (insertError) throw insertError;

      toast.success('作成完了', `商品「${formData.name}」を作成しました`);
      setIsCreating(false);
      setFormData({ code: '', name: '', description: '', color_code: '#6366f1' });
      loadPlans();
    } catch (err) {
      logger.error('Failed to create plan:', err);
      toast.error('エラー', '商品の作成に失敗しました');
    }
  };

  // 更新
  const handleUpdate = async () => {
    if (!editingPlan) return;

    if (!isSupabaseConfigured) {
      toast.error('エラー', 'Supabaseが設定されていません。データベースに接続してください。');
      return;
    }

    try {
      const { error: updateError } = await supabase
        .from('products')
        .update({
          code: editingPlan.code,
          name: editingPlan.name,
          description: editingPlan.description,
          color_code: editingPlan.color_code,
          is_active: editingPlan.is_active,
          updated_at: new Date().toISOString(),
        })
        .eq('id', editingPlan.id);

      if (updateError) throw updateError;

      toast.success('更新完了', `商品「${editingPlan.name}」を更新しました`);
      setEditingPlan(null);
      loadPlans();
    } catch (err) {
      logger.error('Failed to update plan:', err);
      toast.error('エラー', '商品の更新に失敗しました');
    }
  };

  // 削除
  const handleDelete = async () => {
    if (!deleteConfirm.planId) return;

    if (!isSupabaseConfigured) {
      toast.error('エラー', 'Supabaseが設定されていません。データベースに接続してください。');
      return;
    }

    try {
      // 論理削除（is_active = false）
      const { error: deleteError } = await supabase
        .from('products')
        .update({ is_active: false, updated_at: new Date().toISOString() })
        .eq('id', deleteConfirm.planId);

      if (deleteError) throw deleteError;

      toast.success('削除完了', '商品を無効化しました');
      setDeleteConfirm({ isOpen: false, planId: null });
      loadPlans();
    } catch (err) {
      logger.error('Failed to delete plan:', err);
      toast.error('エラー', '商品の削除に失敗しました');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">商品（プラン）マスタ</h2>
          <p className="text-gray-600 mt-1">LIFE, LIFE+, HOURS, LACIEなどの商品プランを管理します</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={loadPlans}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            <RefreshCw className="w-4 h-4" />
            更新
          </button>
          <button
            onClick={() => setIsCreating(true)}
            disabled={!isSupabaseConfigured}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="w-4 h-4" />
            新規商品
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">{error}</div>
      )}

      {/* Supabase未設定警告 */}
      {!isSupabaseConfigured && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg">
          <p className="font-medium">オフラインモード</p>
          <p className="text-sm mt-1">
            Supabaseが設定されていないため、デフォルトデータを表示しています。
            編集するにはSupabaseを設定してください。
          </p>
        </div>
      )}

      {/* Plans List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                  順番
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  コード
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  名前
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  説明
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  テーマカラー
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  状態
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {plans.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                    商品が登録されていません
                  </td>
                </tr>
              ) : (
                plans.map((plan) => (
                  <tr key={plan.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center text-gray-400">
                        <GripVertical className="w-4 h-4" />
                        <span className="ml-2 text-sm">{plan.display_order}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {editingPlan?.id === plan.id ? (
                        <input
                          type="text"
                          value={editingPlan.code}
                          onChange={(e) => setEditingPlan({ ...editingPlan, code: e.target.value })}
                          className="w-24 px-2 py-1 border rounded"
                        />
                      ) : (
                        <span className="font-mono font-medium text-gray-900">{plan.code}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingPlan?.id === plan.id ? (
                        <input
                          type="text"
                          value={editingPlan.name}
                          onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
                          className="w-32 px-2 py-1 border rounded"
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{plan.name}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingPlan?.id === plan.id ? (
                        <input
                          type="text"
                          value={editingPlan.description || ''}
                          onChange={(e) => setEditingPlan({ ...editingPlan, description: e.target.value })}
                          className="w-full px-2 py-1 border rounded"
                        />
                      ) : (
                        <span className="text-sm text-gray-600">{plan.description || '-'}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingPlan?.id === plan.id ? (
                        <input
                          type="color"
                          value={editingPlan.color_code || '#6366f1'}
                          onChange={(e) => setEditingPlan({ ...editingPlan, color_code: e.target.value })}
                          className="w-10 h-8 cursor-pointer"
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-full border border-gray-200"
                            style={{ backgroundColor: plan.color_code || '#6366f1' }}
                          />
                          <span className="text-xs text-gray-500 font-mono">{plan.color_code}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingPlan?.id === plan.id ? (
                        <select
                          value={editingPlan.is_active ? 'active' : 'inactive'}
                          onChange={(e) => setEditingPlan({ ...editingPlan, is_active: e.target.value === 'active' })}
                          className="px-2 py-1 border rounded"
                        >
                          <option value="active">有効</option>
                          <option value="inactive">無効</option>
                        </select>
                      ) : (
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            plan.is_active
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {plan.is_active ? '有効' : '無効'}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        {editingPlan?.id === plan.id ? (
                          <>
                            <button
                              onClick={handleUpdate}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                              title="保存"
                            >
                              <Save className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setEditingPlan(null)}
                              className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                              title="キャンセル"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => setEditingPlan(plan)}
                              disabled={!isSupabaseConfigured}
                              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg disabled:opacity-50"
                              title="編集"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setDeleteConfirm({ isOpen: true, planId: plan.id })}
                              disabled={!isSupabaseConfigured}
                              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-50"
                              title="削除"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600">
            {plans.length} 件の商品
          </p>
        </div>
      </div>

      {/* Create Modal */}
      {isCreating && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">新規商品（プラン）作成</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  コード <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="例: PREMIUM"
                />
                <p className="text-xs text-gray-500 mt-1">英数字のみ、自動で大文字に変換されます</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  表示名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="例: プレミアム"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">説明</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="例: 最上位グレードプラン"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">テーマカラー</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={formData.color_code}
                    onChange={(e) => setFormData({ ...formData, color_code: e.target.value })}
                    className="w-12 h-10 cursor-pointer rounded"
                  />
                  <span className="text-sm text-gray-600 font-mono">{formData.color_code}</span>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex gap-3">
              <button
                onClick={() => {
                  setIsCreating(false);
                  setFormData({ code: '', name: '', description: '', color_code: '#6366f1' });
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={handleCreate}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                作成
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={deleteConfirm.isOpen}
        onClose={() => setDeleteConfirm({ isOpen: false, planId: null })}
        onConfirm={handleDelete}
        title="商品の無効化"
        message="この商品を無効化しますか？無効化された商品はカタログに表示されなくなりますが、過去のデータは保持されます。"
        variant="warning"
        confirmText="無効化する"
      />
    </div>
  );
}

export default ProductMaster;
