import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TutorialState {
  // チュートリアル表示状態
  isOpen: boolean;

  // 完了状態
  hasCompletedTutorial: boolean;
  completedAt: string | null;

  // 初回訪問かどうか
  isFirstVisit: boolean;

  // アクション
  openTutorial: () => void;
  closeTutorial: () => void;
  completeTutorial: () => void;
  resetTutorial: () => void;
  markAsVisited: () => void;
}

export const useTutorialStore = create<TutorialState>()(
  persist(
    (set) => ({
      isOpen: false,
      hasCompletedTutorial: false,
      completedAt: null,
      isFirstVisit: true,

      openTutorial: () => set({ isOpen: true }),

      closeTutorial: () => set({ isOpen: false }),

      completeTutorial: () => set({
        isOpen: false,
        hasCompletedTutorial: true,
        completedAt: new Date().toISOString(),
      }),

      resetTutorial: () => set({
        hasCompletedTutorial: false,
        completedAt: null,
      }),

      markAsVisited: () => set({ isFirstVisit: false }),
    }),
    {
      name: 'lifex-tutorial-storage',
      partialize: (state) => ({
        hasCompletedTutorial: state.hasCompletedTutorial,
        completedAt: state.completedAt,
        isFirstVisit: state.isFirstVisit,
      }),
    }
  )
);
