/**
 * プロジェクトの建物情報を取得するカスタムフック
 * Supabaseからプロジェクトデータをフェッチし、buildingInfoを返す
 */
import { useState, useEffect, useCallback } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import type { BuildingInfo } from '../config/buildingInfoConfig';

interface ProjectBuildingInfoResult {
  buildingInfo: Partial<BuildingInfo> | null;
  projectId: string | null;
  projectName: string | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useProjectBuildingInfo = (): ProjectBuildingInfoResult => {
  const { user, isLoading: authLoading } = useAuth();
  const [buildingInfo, setBuildingInfo] = useState<Partial<BuildingInfo> | null>(null);
  const [projectId, setProjectId] = useState<string | null>(null);
  const [projectName, setProjectName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjectData = useCallback(async () => {
    if (!isSupabaseConfigured || !user?.id) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // ユーザーに紐づくプロジェクトを取得
      const { data: projects, error: fetchError } = await supabase
        .from('projects')
        .select('id, name, building_info')
        .eq('customer_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1);

      if (fetchError) {
        setError(fetchError.message);
        setIsLoading(false);
        return;
      }

      if (projects && projects.length > 0) {
        const project = projects[0];
        setProjectId(project.id);
        setProjectName(project.name);

        // building_infoを適切な型に変換
        if (project.building_info && typeof project.building_info === 'object') {
          setBuildingInfo(project.building_info as Partial<BuildingInfo>);
        } else {
          setBuildingInfo(null);
        }
      } else {
        setBuildingInfo(null);
        setProjectId(null);
        setProjectName(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'プロジェクト情報の取得に失敗しました');
    } finally {
      setIsLoading(false);
    }
  }, [user?.id]);

  useEffect(() => {
    if (!authLoading) {
      fetchProjectData();
    }
  }, [authLoading, fetchProjectData]);

  return {
    buildingInfo,
    projectId,
    projectName,
    isLoading: authLoading || isLoading,
    error,
    refetch: fetchProjectData,
  };
};

// 便利なヘルパー関数
export const getBuildingInfoValue = (
  buildingInfo: Partial<BuildingInfo> | null,
  key: keyof BuildingInfo
): string | number | string[] | undefined => {
  if (!buildingInfo) return undefined;
  return buildingInfo[key] as string | number | string[] | undefined;
};

// 外壁貼り分け箇所数を取得
export const getWallPatternCount = (buildingInfo: Partial<BuildingInfo> | null): number => {
  const count = buildingInfo?.wall_pattern_count;
  if (!count || count === 'no') return 1;
  const parsed = parseInt(count, 10);
  return isNaN(parsed) ? 1 : parsed;
};

// 軒天箇所数を取得
export const getEavesCeilingCount = (buildingInfo: Partial<BuildingInfo> | null): number => {
  const count = buildingInfo?.eaves_ceiling;
  if (!count || count === 'no') return 0;
  const parsed = parseInt(count, 10);
  return isNaN(parsed) ? 0 : parsed;
};

// 室内窓が有効かどうか
export const hasInteriorWindowEnabled = (buildingInfo: Partial<BuildingInfo> | null): boolean => {
  const value = buildingInfo?.interior_window;
  return !!value && value !== 'no';
};

// 室内窓の箇所数を取得
export const getInteriorWindowCount = (buildingInfo: Partial<BuildingInfo> | null): number => {
  const count = buildingInfo?.interior_window;
  if (!count || count === 'no') return 0;
  const parsed = parseInt(count, 10);
  return isNaN(parsed) ? 0 : parsed;
};
