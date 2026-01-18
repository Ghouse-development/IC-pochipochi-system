/**
 * プロジェクト選択が必要なコンポーネントのラッパー
 * プロジェクトが選択されていない場合は選択UIを表示
 */
import React from 'react';
import { AlertCircle, FolderOpen, ChevronRight } from 'lucide-react';
import { useProjectStore } from '../../stores/useProjectStore';

interface ProjectRequiredWrapperProps {
  children: React.ReactNode;
  title: string;
  onSelectProject?: () => void;
}

export const ProjectRequiredWrapper: React.FC<ProjectRequiredWrapperProps> = ({
  children,
  title,
  onSelectProject,
}) => {
  const { currentProject, projects } = useProjectStore();

  // プロジェクトが選択されている場合は子コンポーネントを表示
  if (currentProject) {
    return <>{children}</>;
  }

  // プロジェクトが未選択の場合
  return (
    <div className="bg-white rounded-xl shadow-sm border p-8">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-4 p-4 bg-amber-50 rounded-full w-fit mx-auto">
          <AlertCircle className="w-12 h-12 text-amber-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          プロジェクトを選択してください
        </h2>
        <p className="text-gray-600 mb-6">
          「{title}」機能を使用するには、先にプロジェクトを選択する必要があります。
        </p>

        {projects.length > 0 ? (
          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              {projects.length}件のプロジェクトがあります
            </p>
            <button
              onClick={onSelectProject}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FolderOpen className="w-5 h-5" />
              プロジェクト一覧へ
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              プロジェクトがまだ作成されていません
            </p>
            <button
              onClick={onSelectProject}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FolderOpen className="w-5 h-5" />
              プロジェクトを作成
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
