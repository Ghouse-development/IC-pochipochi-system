import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProductStatistic {
  productId: string;
  productName: string;
  categoryName: string;
  adoptionCount: number; // 採用回数
  viewCount: number; // 閲覧回数
  lastAdopted: Date | null;
  lastViewed: Date | null;
  totalRevenue: number;
}

interface AdoptionRateInfo {
  productId: string;
  productName: string;
  categoryName: string;
  viewCount: number;
  adoptionCount: number;
  adoptionRate: number; // percentage
}

interface StatisticsStore {
  productStats: ProductStatistic[];
  yearlyAdoptions: { month: number; count: number; revenue: number }[];

  // 商品が閲覧された時に呼ばれる
  recordView: (productId: string, productName: string, categoryName: string) => void;

  // 商品が採用された時に呼ばれる
  recordAdoption: (productId: string, productName: string, categoryName: string, price: number) => void;

  // 統計データを取得
  getProductStats: () => ProductStatistic[];
  getTopProducts: (limit?: number) => ProductStatistic[];
  getMonthlyStats: () => { month: number; count: number; revenue: number }[];
  getCategoryStats: () => { category: string; count: number; revenue: number }[];

  // 採用率分析
  getAdoptionRates: () => AdoptionRateInfo[];
  getUnselectedProducts: () => AdoptionRateInfo[]; // 閲覧されたが未採用
  getLowAdoptionProducts: (threshold?: number) => AdoptionRateInfo[]; // 採用率が低い商品
  getCategoryAdoptionRates: () => { category: string; viewCount: number; adoptionCount: number; adoptionRate: number }[];
}

export const useStatisticsStore = create<StatisticsStore>()(
  persist(
    (set, get) => ({
      productStats: [],
      yearlyAdoptions: Array.from({ length: 12 }, (_, i) => ({
        month: i + 1,
        count: 0,
        revenue: 0
      })),

      recordView: (productId, productName, categoryName) => {
        set((state) => {
          const existingStatIndex = state.productStats.findIndex(s => s.productId === productId);
          const updatedStats = [...state.productStats];

          if (existingStatIndex >= 0) {
            updatedStats[existingStatIndex] = {
              ...updatedStats[existingStatIndex],
              viewCount: updatedStats[existingStatIndex].viewCount + 1,
              lastViewed: new Date()
            };
          } else {
            updatedStats.push({
              productId,
              productName,
              categoryName,
              adoptionCount: 0,
              viewCount: 1,
              lastAdopted: null,
              lastViewed: new Date(),
              totalRevenue: 0
            });
          }

          return { productStats: updatedStats };
        });
      },

      recordAdoption: (productId, productName, categoryName, price) => {
        const currentMonth = new Date().getMonth();
        
        set((state) => {
          // 商品統計を更新
          const existingStatIndex = state.productStats.findIndex(s => s.productId === productId);
          const updatedStats = [...state.productStats];
          
          if (existingStatIndex >= 0) {
            updatedStats[existingStatIndex] = {
              ...updatedStats[existingStatIndex],
              adoptionCount: updatedStats[existingStatIndex].adoptionCount + 1,
              lastAdopted: new Date(),
              totalRevenue: updatedStats[existingStatIndex].totalRevenue + price
            };
          } else {
            updatedStats.push({
              productId,
              productName,
              categoryName,
              adoptionCount: 1,
              viewCount: 1, // 採用時は最低1回は見たとみなす
              lastAdopted: new Date(),
              lastViewed: new Date(),
              totalRevenue: price
            });
          }
          
          // 月別統計を更新
          const updatedMonthly = [...state.yearlyAdoptions];
          updatedMonthly[currentMonth] = {
            ...updatedMonthly[currentMonth],
            count: updatedMonthly[currentMonth].count + 1,
            revenue: updatedMonthly[currentMonth].revenue + price
          };
          
          return {
            productStats: updatedStats,
            yearlyAdoptions: updatedMonthly
          };
        });
      },
      
      getProductStats: () => {
        return get().productStats.sort((a, b) => b.adoptionCount - a.adoptionCount);
      },
      
      getTopProducts: (limit = 10) => {
        return get().productStats
          .sort((a, b) => b.adoptionCount - a.adoptionCount)
          .slice(0, limit);
      },
      
      getMonthlyStats: () => {
        return get().yearlyAdoptions;
      },
      
      getCategoryStats: () => {
        const stats = get().productStats;
        const categoryMap = new Map<string, { count: number; revenue: number }>();

        stats.forEach(stat => {
          const existing = categoryMap.get(stat.categoryName) || { count: 0, revenue: 0 };
          categoryMap.set(stat.categoryName, {
            count: existing.count + stat.adoptionCount,
            revenue: existing.revenue + stat.totalRevenue
          });
        });

        return Array.from(categoryMap.entries()).map(([category, data]) => ({
          category,
          count: data.count,
          revenue: data.revenue
        }));
      },

      // 採用率分析
      getAdoptionRates: () => {
        const stats = get().productStats;
        return stats
          .filter(s => s.viewCount > 0)
          .map(s => ({
            productId: s.productId,
            productName: s.productName,
            categoryName: s.categoryName,
            viewCount: s.viewCount,
            adoptionCount: s.adoptionCount,
            adoptionRate: s.viewCount > 0 ? Math.round((s.adoptionCount / s.viewCount) * 100) : 0
          }))
          .sort((a, b) => b.adoptionRate - a.adoptionRate);
      },

      // 閲覧されたが未採用の商品
      getUnselectedProducts: () => {
        const stats = get().productStats;
        return stats
          .filter(s => s.viewCount > 0 && s.adoptionCount === 0)
          .map(s => ({
            productId: s.productId,
            productName: s.productName,
            categoryName: s.categoryName,
            viewCount: s.viewCount,
            adoptionCount: 0,
            adoptionRate: 0
          }))
          .sort((a, b) => b.viewCount - a.viewCount); // 多く見られているが採用されていない順
      },

      // 採用率が低い商品（閾値以下）
      getLowAdoptionProducts: (threshold = 20) => {
        const stats = get().productStats;
        return stats
          .filter(s => s.viewCount >= 3) // 最低3回は閲覧された商品のみ
          .map(s => ({
            productId: s.productId,
            productName: s.productName,
            categoryName: s.categoryName,
            viewCount: s.viewCount,
            adoptionCount: s.adoptionCount,
            adoptionRate: s.viewCount > 0 ? Math.round((s.adoptionCount / s.viewCount) * 100) : 0
          }))
          .filter(s => s.adoptionRate < threshold && s.adoptionRate > 0)
          .sort((a, b) => a.adoptionRate - b.adoptionRate);
      },

      // カテゴリ別採用率
      getCategoryAdoptionRates: () => {
        const stats = get().productStats;
        const categoryMap = new Map<string, { viewCount: number; adoptionCount: number }>();

        stats.forEach(stat => {
          const existing = categoryMap.get(stat.categoryName) || { viewCount: 0, adoptionCount: 0 };
          categoryMap.set(stat.categoryName, {
            viewCount: existing.viewCount + stat.viewCount,
            adoptionCount: existing.adoptionCount + stat.adoptionCount
          });
        });

        return Array.from(categoryMap.entries())
          .map(([category, data]) => ({
            category,
            viewCount: data.viewCount,
            adoptionCount: data.adoptionCount,
            adoptionRate: data.viewCount > 0 ? Math.round((data.adoptionCount / data.viewCount) * 100) : 0
          }))
          .sort((a, b) => b.adoptionRate - a.adoptionRate);
      }
    }),
    {
      name: 'lifex-statistics-storage',
      version: 1
    }
  )
);