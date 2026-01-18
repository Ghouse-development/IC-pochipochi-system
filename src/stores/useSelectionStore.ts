/**
 * 選択状態管理ストア
 * - カテゴリごとの選択状態（未確認/不要/選択済み）
 * - 部屋適用情報
 * - LocalStorage永続化
 */
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 選択状態の種類
export type SelectionStatus = 'unconfirmed' | 'not_needed' | 'selected';

// カテゴリ選択情報
export interface CategorySelection {
  status: SelectionStatus;
  selectedProductId?: string;
  selectedProductName?: string;
  selectedVariantId?: string;
  selectedVariantName?: string;
  appliedRooms?: string[];
  note?: string;
  confirmedAt?: string;
}

// 部屋情報
export interface RoomInfo {
  id: string;
  name: string;
  floor: number;
}

// プロジェクト確定状態
export type ProjectStatus = 'draft' | 'customer_selecting' | 'ic_review' | 'confirmed' | 'finalized';

export interface ProjectStatusInfo {
  status: ProjectStatus;
  statusLabel: string;
  confirmedAt?: string;
  confirmedBy?: string;
  notes?: string;
}

// ストアの状態
interface SelectionState {
  // 現在のプロジェクトID
  currentProjectId: string | null;

  // カテゴリごとの選択状態
  selections: Record<string, CategorySelection>;

  // プロジェクト情報
  projectName: string;
  customerName: string;
  planName: string;

  // 確定状態
  projectStatus: ProjectStatus;
  statusHistory: Array<{
    status: ProjectStatus;
    timestamp: string;
    by?: string;
    notes?: string;
  }>;

  // プロジェクト切り替え
  setCurrentProject: (projectId: string, projectName: string, customerName: string, planName?: string) => void;
  getCurrentProjectId: () => string | null;

  // アクション
  setSelection: (categoryName: string, selection: CategorySelection) => void;
  setNotNeeded: (categoryName: string, note?: string) => void;
  setProductSelection: (
    categoryName: string,
    productId: string,
    productName: string,
    variantId?: string,
    variantName?: string,
    rooms?: string[]
  ) => void;
  clearSelection: (categoryName: string) => void;
  setAppliedRooms: (categoryName: string, rooms: string[]) => void;
  setProjectInfo: (projectName: string, customerName: string, planName: string) => void;
  getSelectionStatus: (categoryName: string) => SelectionStatus;
  getConfirmedCategories: () => string[];
  getUnconfirmedCategories: (requiredCategories: string[]) => string[];
  exportSelections: () => Record<string, CategorySelection>;
  clearAll: () => void;

  // 確定アクション
  setProjectStatus: (status: ProjectStatus, by?: string, notes?: string) => void;
  getProjectStatusInfo: () => ProjectStatusInfo;
  canEdit: () => boolean;
}

// ステータスラベル
const PROJECT_STATUS_LABELS: Record<ProjectStatus, string> = {
  draft: '下書き',
  customer_selecting: 'お客様選択中',
  ic_review: 'IC確認中',
  confirmed: '確定済み',
  finalized: '最終確定',
};

// プロジェクトごとのデータをLocalStorageに保存/読み込み
const getProjectStorageKey = (projectId: string) => `ic-pochipochi-project-${projectId}`;

const saveProjectData = (projectId: string, data: {
  selections: Record<string, CategorySelection>;
  projectStatus: ProjectStatus;
  statusHistory: Array<{ status: ProjectStatus; timestamp: string; by?: string; notes?: string }>;
}) => {
  try {
    localStorage.setItem(getProjectStorageKey(projectId), JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save project data:', e);
  }
};

const loadProjectData = (projectId: string): {
  selections: Record<string, CategorySelection>;
  projectStatus: ProjectStatus;
  statusHistory: Array<{ status: ProjectStatus; timestamp: string; by?: string; notes?: string }>;
} | null => {
  try {
    const data = localStorage.getItem(getProjectStorageKey(projectId));
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to load project data:', e);
  }
  return null;
};

export const useSelectionStore = create<SelectionState>()(
  persist(
    (set, get) => ({
      currentProjectId: null,
      selections: {},
      projectName: '',
      customerName: '',
      planName: 'LACIE',
      projectStatus: 'draft' as ProjectStatus,
      statusHistory: [],

      setCurrentProject: (projectId, projectName, customerName, planName = 'LACIE') => {
        const currentState = get();

        // 現在のプロジェクトデータを保存
        if (currentState.currentProjectId) {
          saveProjectData(currentState.currentProjectId, {
            selections: currentState.selections,
            projectStatus: currentState.projectStatus,
            statusHistory: currentState.statusHistory,
          });
        }

        // 新しいプロジェクトのデータを読み込み
        const savedData = loadProjectData(projectId);

        set({
          currentProjectId: projectId,
          projectName,
          customerName,
          planName,
          selections: savedData?.selections || {},
          projectStatus: savedData?.projectStatus || 'draft',
          statusHistory: savedData?.statusHistory || [],
        });
      },

      getCurrentProjectId: () => get().currentProjectId,

      setSelection: (categoryName, selection) => {
        set(state => ({
          selections: {
            ...state.selections,
            [categoryName]: {
              ...selection,
              confirmedAt: new Date().toISOString(),
            },
          },
        }));
      },

      setNotNeeded: (categoryName, note) => {
        set(state => ({
          selections: {
            ...state.selections,
            [categoryName]: {
              status: 'not_needed',
              note,
              confirmedAt: new Date().toISOString(),
            },
          },
        }));
      },

      setProductSelection: (categoryName, productId, productName, variantId, variantName, rooms) => {
        set(state => ({
          selections: {
            ...state.selections,
            [categoryName]: {
              status: 'selected',
              selectedProductId: productId,
              selectedProductName: productName,
              selectedVariantId: variantId,
              selectedVariantName: variantName,
              appliedRooms: rooms,
              confirmedAt: new Date().toISOString(),
            },
          },
        }));
      },

      clearSelection: (categoryName) => {
        set(state => {
          const { [categoryName]: _, ...rest } = state.selections;
          return { selections: rest };
        });
      },

      setAppliedRooms: (categoryName, rooms) => {
        set(state => ({
          selections: {
            ...state.selections,
            [categoryName]: {
              ...state.selections[categoryName],
              appliedRooms: rooms,
            },
          },
        }));
      },

      setProjectInfo: (projectName, customerName, planName) => {
        set({ projectName, customerName, planName });
      },

      getSelectionStatus: (categoryName) => {
        return get().selections[categoryName]?.status || 'unconfirmed';
      },

      getConfirmedCategories: () => {
        return Object.keys(get().selections).filter(
          cat => get().selections[cat].status !== 'unconfirmed'
        );
      },

      getUnconfirmedCategories: (requiredCategories) => {
        const selections = get().selections;
        return requiredCategories.filter(
          cat => !selections[cat] || selections[cat].status === 'unconfirmed'
        );
      },

      exportSelections: () => {
        return get().selections;
      },

      clearAll: () => {
        set({ selections: {}, projectName: '', customerName: '', projectStatus: 'draft', statusHistory: [] });
      },

      setProjectStatus: (status, by, notes) => {
        set(state => ({
          projectStatus: status,
          statusHistory: [
            ...state.statusHistory,
            {
              status,
              timestamp: new Date().toISOString(),
              by,
              notes,
            },
          ],
        }));
      },

      getProjectStatusInfo: () => {
        const state = get();
        const lastHistory = state.statusHistory[state.statusHistory.length - 1];
        return {
          status: state.projectStatus,
          statusLabel: PROJECT_STATUS_LABELS[state.projectStatus],
          confirmedAt: lastHistory?.timestamp,
          confirmedBy: lastHistory?.by,
          notes: lastHistory?.notes,
        };
      },

      canEdit: () => {
        const status = get().projectStatus;
        // finalized状態では編集不可
        return status !== 'finalized';
      },
    }),
    {
      name: 'ic-pochipochi-selections',
      version: 2,
    }
  )
);

// 標準の部屋リスト
export const DEFAULT_ROOMS: RoomInfo[] = [
  { id: 'living', name: 'リビング', floor: 1 },
  { id: 'dining', name: 'ダイニング', floor: 1 },
  { id: 'kitchen', name: 'キッチン', floor: 1 },
  { id: 'entrance', name: '玄関', floor: 1 },
  { id: 'toilet1', name: '1Fトイレ', floor: 1 },
  { id: 'washroom', name: '洗面室', floor: 1 },
  { id: 'bathroom', name: '浴室', floor: 1 },
  { id: 'hall1', name: '1F廊下', floor: 1 },
  { id: 'master', name: '主寝室', floor: 2 },
  { id: 'child1', name: '子供部屋1', floor: 2 },
  { id: 'child2', name: '子供部屋2', floor: 2 },
  { id: 'toilet2', name: '2Fトイレ', floor: 2 },
  { id: 'hall2', name: '2F廊下', floor: 2 },
  { id: 'stairs', name: '階段', floor: 0 },
];

// 部屋IDから部屋名を取得
export const getRoomName = (roomId: string): string => {
  return DEFAULT_ROOMS.find(r => r.id === roomId)?.name || roomId;
};

// 部屋IDリストから部屋名リストを取得
export const getRoomNames = (roomIds: string[]): string[] => {
  return roomIds.map(getRoomName);
};
