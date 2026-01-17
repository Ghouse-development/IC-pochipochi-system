/**
 * プロジェクト管理ストア
 * - お客様情報
 * - 土地情報
 * - 建物情報
 * - LocalStorage永続化
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// お客様情報
export interface CustomerInfo {
  name: string;
  furigana?: string;
  email: string;
  phone?: string;
}

// 土地情報
export interface LandInfo {
  address: string;
  area?: number; // ㎡
  buildingCoverage?: number; // 建ぺい率 %
  floorAreaRatio?: number; // 容積率 %
  fireZone?: '防火地域' | '準防火地域' | '22条地域' | '指定なし';
  notes?: string;
}

// 建物情報
export interface BuildingInfo {
  planType: 'LACIE' | 'HOURS' | 'LIFE+' | 'LIFE' | 'LIFE_X' | 'LIFE_LIMITED' | 'LIFE_PLUS_LIMITED';
  floors: number;
  totalFloorArea: number; // 延床面積 ㎡
  buildingArea?: number; // 建築面積 ㎡
  structure: '木造' | '鉄骨造' | 'RC造';
  roofType?: '切妻' | '寄棟' | '片流れ' | 'フラット';
  exteriorStyle?: 'モダン' | 'ナチュラル' | 'シンプル' | 'クラシック';
  notes?: string;
}

// プロジェクト情報
export interface Project {
  id: string;
  code: string;
  name: string;
  customer: CustomerInfo;
  land: LandInfo;
  building: BuildingInfo;
  assignedIC?: string;
  accessCode?: string; // お客様アクセス用コード
  accessCodeCreatedAt?: string; // コード生成日時
  createdAt: string;
  updatedAt: string;
}

interface ProjectState {
  currentProject: Project | null;
  projects: Project[];

  // アクション
  createProject: (data: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => Project;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  setCurrentProject: (project: Project | null) => void;
  getProjectById: (id: string) => Project | undefined;
  setAccessCode: (projectId: string, code: string) => void;
  validateAccessCode: (projectId: string, code: string) => boolean;
}

export const useProjectStore = create<ProjectState>()(
  persist(
    (set, get) => ({
      currentProject: null,
      projects: [],

      createProject: (data) => {
        const newProject: Project = {
          ...data,
          id: `proj-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        set((state) => ({
          projects: [...state.projects, newProject],
          currentProject: newProject,
        }));
        return newProject;
      },

      updateProject: (id, updates) => {
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === id ? { ...p, ...updates, updatedAt: new Date().toISOString() } : p
          ),
          currentProject:
            state.currentProject?.id === id
              ? { ...state.currentProject, ...updates, updatedAt: new Date().toISOString() }
              : state.currentProject,
        }));
      },

      deleteProject: (id) => {
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
          currentProject: state.currentProject?.id === id ? null : state.currentProject,
        }));
      },

      setCurrentProject: (project) => {
        set({ currentProject: project });
      },

      getProjectById: (id) => {
        return get().projects.find((p) => p.id === id);
      },

      setAccessCode: (projectId, code) => {
        const now = new Date().toISOString();
        set((state) => ({
          projects: state.projects.map((p) =>
            p.id === projectId
              ? { ...p, accessCode: code, accessCodeCreatedAt: now, updatedAt: now }
              : p
          ),
          currentProject:
            state.currentProject?.id === projectId
              ? { ...state.currentProject, accessCode: code, accessCodeCreatedAt: now, updatedAt: now }
              : state.currentProject,
        }));
      },

      validateAccessCode: (projectId, code) => {
        const project = get().projects.find((p) => p.id === projectId);
        if (!project || !project.accessCode) return false;
        return project.accessCode.toUpperCase() === code.toUpperCase();
      },
    }),
    {
      name: 'ic-pochipochi-projects',
      version: 1,
    }
  )
);
