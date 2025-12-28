import { useState, useEffect } from 'react';
import {
  Folder,
  FolderOpen,
  Plus,
  Edit2,
  Trash2,
  ChevronRight,
  ChevronDown,
  Save,
  X
} from 'lucide-react';
import { CategoryService, type Category } from '../../services/databaseService';
import { ConfirmDialog } from '../common/ConfirmDialog';

export function CategoryManager() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [parentId, setParentId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<Category | null>(null);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    setLoading(true);
    const data = await CategoryService.getCategoryTree();
    setCategories(data);
    setLoading(false);
  };

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedIds);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedIds(newExpanded);
  };

  const handleCreate = (parent?: Category) => {
    setEditingCategory({
      id: '',
      parent_id: parent?.id || null,
      name: '',
      slug: '',
      description: '',
      display_order: 0,
      is_active: true
    });
    setParentId(parent?.id || null);
    setIsCreating(true);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setIsCreating(false);
  };

  const handleSave = async () => {
    if (!editingCategory) return;

    if (isCreating) {
      const newCategory = await CategoryService.createCategory({
        ...editingCategory,
        parent_id: parentId
      });
      if (newCategory) {
        await loadCategories();
      }
    } else {
      const updated = await CategoryService.updateCategory(
        editingCategory.id,
        editingCategory
      );
      if (updated) {
        await loadCategories();
      }
    }

    setEditingCategory(null);
    setIsCreating(false);
  };

  const handleDelete = (category: Category) => {
    setDeleteTarget(category);
  };

  const executeDelete = async () => {
    if (!deleteTarget) return;

    const success = await CategoryService.deleteCategory(deleteTarget.id);
    if (success) {
      await loadCategories();
    }
    setDeleteTarget(null);
  };

  const renderCategory = (category: Category, level: number = 0) => {
    const hasChildren = category.children && category.children.length > 0;
    const isExpanded = expandedIds.has(category.id);

    return (
      <div key={category.id}>
        <div
          className={`flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg group`}
          style={{ paddingLeft: `${level * 24 + 8}px` }}
        >
          {hasChildren && (
            <button
              onClick={() => toggleExpand(category.id)}
              className="p-1 hover:bg-gray-200 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          )}

          {!hasChildren && <div className="w-6" />}

          {isExpanded || !hasChildren ? (
            <FolderOpen className="w-5 h-5 text-blue-500" />
          ) : (
            <Folder className="w-5 h-5 text-blue-500" />
          )}

          <span className="flex-1 font-medium">{category.name}</span>

          {!category.is_active && (
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">非表示</span>
          )}

          <div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity">
            <button
              onClick={() => handleCreate(category)}
              className="p-1 hover:bg-gray-200 rounded"
              title="サブカテゴリを追加"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleEdit(category)}
              className="p-1 hover:bg-gray-200 rounded"
              title="編集"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDelete(category)}
              className="p-1 hover:bg-red-100 text-red-600 rounded"
              title="削除"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {hasChildren && isExpanded && category.children && (
          <div>
            {category.children.map(child => renderCategory(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">カテゴリ管理</h2>
          <button
            onClick={() => handleCreate()}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            ルートカテゴリを追加
          </button>
        </div>
      </div>

      <div className="p-4">
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-600">読み込み中...</p>
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            カテゴリがありません
          </div>
        ) : (
          <div className="space-y-1">
            {categories.map(category => renderCategory(category))}
          </div>
        )}
      </div>

      {/* 編集モーダル */}
      {editingCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md">
            <div className="border-b p-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">
                {isCreating ? 'カテゴリ追加' : 'カテゴリ編集'}
              </h3>
              <button
                onClick={() => {
                  setEditingCategory(null);
                  setIsCreating(false);
                }}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">カテゴリ名 *</label>
                <input
                  type="text"
                  value={editingCategory.name}
                  onChange={(e) => setEditingCategory({
                    ...editingCategory,
                    name: e.target.value
                  })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="例: エクステリア"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">スラッグ *</label>
                <input
                  type="text"
                  value={editingCategory.slug}
                  onChange={(e) => setEditingCategory({
                    ...editingCategory,
                    slug: e.target.value
                  })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="例: exterior"
                />
                <p className="text-xs text-gray-500 mt-1">URLに使用される識別子</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">説明</label>
                <textarea
                  value={editingCategory.description || ''}
                  onChange={(e) => setEditingCategory({
                    ...editingCategory,
                    description: e.target.value
                  })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="カテゴリの説明"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">表示順</label>
                <input
                  type="number"
                  value={editingCategory.display_order}
                  onChange={(e) => setEditingCategory({
                    ...editingCategory,
                    display_order: parseInt(e.target.value) || 0
                  })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={editingCategory.is_active}
                    onChange={(e) => setEditingCategory({
                      ...editingCategory,
                      is_active: e.target.checked
                    })}
                    className="rounded"
                  />
                  <span className="text-sm">表示する</span>
                </label>
              </div>
            </div>

            <div className="border-t p-4 flex justify-end gap-3">
              <button
                onClick={() => {
                  setEditingCategory(null);
                  setIsCreating(false);
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={handleSave}
                disabled={!editingCategory.name || !editingCategory.slug}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={executeDelete}
        title="カテゴリの削除"
        message={`「${deleteTarget?.name}」を削除してもよろしいですか？\n※ サブカテゴリも一緒に削除されます。`}
        variant="danger"
        confirmText="削除する"
      />
    </div>
  );
}