import { useState, useEffect, useCallback } from 'react';
import {
  Folder,
  FolderOpen,
  Plus,
  Edit2,
  Trash2,
  ChevronRight,
  ChevronDown,
  Save,
  X,
  GripVertical
} from 'lucide-react';
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd';
import { CategoryService, type Category } from '../../services/databaseService';
import { ConfirmDialog } from '../common/ConfirmDialog';
import { useToast } from '../common/Toast';

export function CategoryManager() {
  const toast = useToast();
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
        toast.success('作成完了', 'カテゴリを作成しました');
        await loadCategories();
      }
    } else {
      const updated = await CategoryService.updateCategory(
        editingCategory.id,
        editingCategory
      );
      if (updated) {
        toast.success('更新完了', 'カテゴリを更新しました');
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
      toast.success('削除完了', 'カテゴリを削除しました');
      await loadCategories();
    }
    setDeleteTarget(null);
  };

  // ドラッグ&ドロップ処理
  const handleDragEnd = useCallback(async (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    // 同じレベル内での並べ替え
    const sourceParentId = source.droppableId === 'root' ? null : source.droppableId;
    const destParentId = destination.droppableId === 'root' ? null : destination.droppableId;

    // 異なる親への移動は今回はサポートしない
    if (sourceParentId !== destParentId) {
      toast.error('エラー', '異なる階層への移動はできません');
      return;
    }

    // カテゴリリストを更新
    const findCategoriesAtLevel = (cats: Category[], parentId: string | null): Category[] => {
      if (parentId === null) {
        return cats;
      }
      for (const cat of cats) {
        if (cat.id === parentId) {
          return cat.children || [];
        }
        if (cat.children) {
          const found = findCategoriesAtLevel(cat.children, parentId);
          if (found.length > 0) return found;
        }
      }
      return [];
    };

    const levelCategories = findCategoriesAtLevel(categories, sourceParentId);
    const reorderedCategories = Array.from(levelCategories);
    const [removed] = reorderedCategories.splice(source.index, 1);
    reorderedCategories.splice(destination.index, 0, removed);

    // 表示順を更新してDBに保存
    const updates = reorderedCategories.map((cat, index) => ({
      id: cat.id,
      display_order: index
    }));

    try {
      await Promise.all(
        updates.map(update =>
          CategoryService.updateCategory(update.id, { display_order: update.display_order })
        )
      );
      toast.success('並べ替え完了', 'カテゴリの順序を更新しました');
      await loadCategories();
    } catch (err) {
      console.error('並べ替えの保存に失敗:', err);
      toast.error('エラー', '並べ替えの保存に失敗しました');
    }
  }, [categories, toast]);

  const renderCategory = (category: Category, level: number = 0, index: number = 0) => {
    const hasChildren = category.children && category.children.length > 0;
    const isExpanded = expandedIds.has(category.id);

    return (
      <Draggable key={category.id} draggableId={category.id} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
          >
            <div
              className={`flex items-center gap-2 p-2 rounded-lg group transition-colors ${
                snapshot.isDragging ? 'bg-blue-50 shadow-lg' : 'hover:bg-gray-50'
              }`}
              style={{ paddingLeft: `${level * 24 + 8}px` }}
            >
              {/* ドラッグハンドル */}
              <div
                {...provided.dragHandleProps}
                className="cursor-grab active:cursor-grabbing p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-600"
              >
                <GripVertical className="w-4 h-4" />
              </div>

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

              <span className="text-xs text-gray-400 mr-2">#{category.display_order}</span>

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
              <Droppable droppableId={category.id} type={`level-${level + 1}`}>
                {(droppableProvided) => (
                  <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                  >
                    {category.children!.map((child, childIndex) =>
                      renderCategory(child, level + 1, childIndex)
                    )}
                    {droppableProvided.placeholder}
                  </div>
                )}
              </Droppable>
            )}
          </div>
        )}
      </Draggable>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">カテゴリ管理</h2>
            <p className="text-sm text-gray-500 mt-1">ドラッグ&ドロップで並べ替えできます</p>
          </div>
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
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="root" type="level-0">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="space-y-1"
                >
                  {categories.map((category, index) => renderCategory(category, 0, index))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
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
