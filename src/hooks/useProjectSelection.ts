/**
 * プロジェクト選択フック
 * useProjectStore、useSelectionStore、useShowroomEstimateStoreを同期する
 */
import { useCallback } from 'react';
import { useProjectStore, type Project } from '../stores/useProjectStore';
import { useSelectionStore } from '../stores/useSelectionStore';
import { useShowroomEstimateStore } from '../stores/useShowroomEstimateStore';

export const useProjectSelection = () => {
  const { currentProject, setCurrentProject: setProject, projects } = useProjectStore();
  const { setCurrentProject: setSelectionProject, currentProjectId } = useSelectionStore();
  const { setCurrentProject: setShowroomProject } = useShowroomEstimateStore();

  // プロジェクトを選択し、すべてのストアを更新
  const selectProject = useCallback((project: Project | null) => {
    // useProjectStoreを更新
    setProject(project);

    // useSelectionStoreを更新
    if (project) {
      setSelectionProject(
        project.id,
        project.name,
        project.customer?.name || '',
        project.building?.planType || 'LACIE'
      );
      // useShowroomEstimateStoreを更新
      setShowroomProject(project.id);
    }
  }, [setProject, setSelectionProject, setShowroomProject]);

  // IDでプロジェクトを選択
  const selectProjectById = useCallback((projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      selectProject(project);
    }
  }, [projects, selectProject]);

  // 現在のプロジェクトをクリア
  const clearProject = useCallback(() => {
    setProject(null);
    // Note: useSelectionStore doesn't have a clear currentProjectId function
    // The data remains but currentProjectId becomes stale
  }, [setProject]);

  // プロジェクトが同期されているかチェック
  const isSynced = currentProject?.id === currentProjectId;

  return {
    currentProject,
    projects,
    selectProject,
    selectProjectById,
    clearProject,
    isSynced,
  };
};
