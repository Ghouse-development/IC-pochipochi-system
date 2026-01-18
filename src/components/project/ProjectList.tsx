/**
 * プロジェクト一覧コンポーネント
 * - プロジェクトの一覧表示
 * - プロジェクト切り替え
 * - プロジェクト削除
 */
import React, { useState } from 'react';
import {
  FolderOpen,
  Trash2,
  CheckCircle,
  Clock,
  User,
  Building,
  MapPin,
  ChevronRight,
  AlertCircle,
  Search,
} from 'lucide-react';
import { useProjectStore, type Project } from '../../stores/useProjectStore';
import { useSelectionStore } from '../../stores/useSelectionStore';
import { useProjectSelection } from '../../hooks/useProjectSelection';

interface ProjectListProps {
  onProjectSelect?: (project: Project) => void;
  onCreateNew?: () => void;
}

// ステータスラベル
const STATUS_LABELS: Record<string, { label: string; color: string; bgColor: string }> = {
  draft: { label: '下書き', color: 'text-gray-600', bgColor: 'bg-gray-100' },
  customer_selecting: { label: 'お客様選択中', color: 'text-blue-600', bgColor: 'bg-blue-100' },
  ic_review: { label: 'IC確認中', color: 'text-orange-600', bgColor: 'bg-orange-100' },
  confirmed: { label: '確定済み', color: 'text-blue-600', bgColor: 'bg-blue-100' },
  finalized: { label: '最終確定', color: 'text-purple-600', bgColor: 'bg-purple-100' },
};

export const ProjectList: React.FC<ProjectListProps> = ({
  onProjectSelect,
  onCreateNew,
}) => {
  const { deleteProject } = useProjectStore();
  const { projectStatus } = useSelectionStore();
  const { currentProject, projects, selectProject } = useProjectSelection();
  const [searchQuery, setSearchQuery] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);

  // プロジェクト検索
  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.name.toLowerCase().includes(query) ||
      project.customer.name.toLowerCase().includes(query) ||
      project.code.toLowerCase().includes(query)
    );
  });

  // プロジェクト選択
  const handleSelectProject = (project: Project) => {
    selectProject(project);
    onProjectSelect?.(project);
  };

  // プロジェクト削除
  const handleDeleteProject = (projectId: string) => {
    deleteProject(projectId);
    setShowDeleteConfirm(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  };

  return (
    <div className="space-y-4">
      {/* 検索バー */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="プロジェクト名、お客様名で検索..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* プロジェクト一覧 */}
      {filteredProjects.length > 0 ? (
        <div className="space-y-3">
          {filteredProjects.map((project) => {
            const isActive = currentProject?.id === project.id;
            const status = STATUS_LABELS[projectStatus] || STATUS_LABELS.draft;

            return (
              <div
                key={project.id}
                className={`bg-white rounded-xl border-2 p-4 transition-all ${
                  isActive
                    ? 'border-blue-500 shadow-md'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    {/* ヘッダー */}
                    <div className="flex items-center gap-2 mb-2">
                      <FolderOpen className={`w-5 h-5 ${isActive ? 'text-blue-500' : 'text-gray-400'}`} />
                      <h3 className="font-bold text-gray-900 truncate">{project.name}</h3>
                      {isActive && (
                        <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full">
                          選択中
                        </span>
                      )}
                    </div>

                    {/* 詳細情報 */}
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="w-4 h-4" />
                        <span className="truncate">{project.customer.name}様</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Building className="w-4 h-4" />
                        <span>{project.building.planType}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="truncate">{project.land.address || '未設定'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{formatDate(project.updatedAt)}</span>
                      </div>
                    </div>

                    {/* ステータス */}
                    {isActive && (
                      <div className="mt-3 flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${status.bgColor} ${status.color}`}>
                          {status.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* アクションボタン */}
                  <div className="flex items-center gap-2 ml-4">
                    {!isActive && (
                      <button
                        onClick={() => handleSelectProject(project)}
                        className="flex items-center gap-1 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        選択
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      onClick={() => setShowDeleteConfirm(project.id)}
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      aria-label="削除"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 削除確認 */}
                {showDeleteConfirm === project.id && (
                  <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-100">
                    <div className="flex items-center gap-2 text-red-600 mb-2">
                      <AlertCircle className="w-4 h-4" />
                      <span className="font-medium">このプロジェクトを削除しますか？</span>
                    </div>
                    <p className="text-sm text-red-500 mb-3">
                      この操作は取り消せません。関連する選択データも削除されます。
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="px-3 py-1.5 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700"
                      >
                        削除する
                      </button>
                      <button
                        onClick={() => setShowDeleteConfirm(null)}
                        className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                      >
                        キャンセル
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl border">
          <FolderOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 mb-4">
            {searchQuery ? '検索結果がありません' : 'プロジェクトがありません'}
          </p>
          {onCreateNew && !searchQuery && (
            <button
              onClick={onCreateNew}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              新規プロジェクトを作成
            </button>
          )}
        </div>
      )}

      {/* サマリー */}
      {projects.length > 0 && (
        <div className="flex items-center justify-between text-sm text-gray-500 px-2">
          <span>{projects.length}件のプロジェクト</span>
          {currentProject && (
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-blue-500" />
              選択中: {currentProject.name}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
