import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProductStatistic {
  productId: string;
  productName: string;
  categoryName: string;
  adoptionCount: number; // 採用回数
  lastAdopted: Date | null;
  totalRevenue: number;
}

interface StatisticsStore {
  productStats: ProductStatistic[];
  yearlyAdoptions: { month: number; count: number; revenue: number }[];
  
  // 商品が採用された時に呼ばれる
  recordAdoption: (productId: string, productName: string, categoryName: string, price: number) => void;
  
  // 統計データを取得
  getProductStats: () => ProductStatistic[];
  getTopProducts: (limit?: number) => ProductStatistic[];
  getMonthlyStats: () => { month: number; count: number; revenue: number }[];
  getCategoryStats: () => { category: string; count: number; revenue: number }[];
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
              lastAdopted: new Date(),
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
      }
    }),
    {
      name: 'lifex-statistics-storage',
      version: 1
    }
  )
);