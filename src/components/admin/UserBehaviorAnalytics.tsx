import React, { useMemo } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Eye, ShoppingCart, Target, Percent, Clock } from 'lucide-react';
import { useStatisticsStore } from '../../stores/useStatisticsStore';
import { formatPrice } from '../../lib/utils';

export const UserBehaviorAnalytics: React.FC = () => {
  const {
    getProductStats,
    getTopProducts,
    getMonthlyStats,
    getUnselectedProducts,
    getLowAdoptionProducts,
    getCategoryAdoptionRates,
    getLongestViewedProducts,
  } = useStatisticsStore();

  const topProducts = useMemo(() => getTopProducts(10), [getTopProducts]);
  const monthlyStats = useMemo(() => getMonthlyStats(), [getMonthlyStats]);
  const unselectedProducts = useMemo(() => getUnselectedProducts().slice(0, 5), [getUnselectedProducts]);
  const longestViewedProducts = useMemo(() => getLongestViewedProducts(5), [getLongestViewedProducts]);
  const lowAdoptionProducts = useMemo(() => getLowAdoptionProducts(30).slice(0, 5), [getLowAdoptionProducts]);
  const categoryAdoptionRates = useMemo(() => getCategoryAdoptionRates(), [getCategoryAdoptionRates]);

  // 集計データ
  const stats = useMemo(() => {
    const allStats = getProductStats();
    const totalViews = allStats.reduce((sum, s) => sum + s.viewCount, 0);
    const totalAdoptions = allStats.reduce((sum, s) => sum + s.adoptionCount, 0);
    const totalRevenue = allStats.reduce((sum, s) => sum + s.totalRevenue, 0);
    const avgAdoptionRate = totalViews > 0 ? Math.round((totalAdoptions / totalViews) * 100) : 0;

    return { totalViews, totalAdoptions, totalRevenue, avgAdoptionRate };
  }, [getProductStats]);

  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center gap-3">
        <BarChart3 className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-bold text-gray-900">ユーザー行動分析</h2>
      </div>

      {/* 概要カード */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <Eye className="w-4 h-4" />
            <span className="text-sm">総閲覧数</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.totalViews.toLocaleString()}</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">総採用数</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{stats.totalAdoptions.toLocaleString()}</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <Target className="w-4 h-4" />
            <span className="text-sm">平均採用率</span>
          </div>
          <div className="text-2xl font-bold text-indigo-600">{stats.avgAdoptionRate}%</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">総売上</span>
          </div>
          <div className="text-2xl font-bold text-green-600">{formatPrice(stats.totalRevenue)}</div>
        </div>
      </div>

      {/* 月別推移 */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">月別推移</h3>
        <div className="flex items-end gap-2 h-40">
          {monthlyStats.map((m, idx) => {
            const maxCount = Math.max(...monthlyStats.map(s => s.count), 1);
            const height = (m.count / maxCount) * 100;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t transition-all hover:from-indigo-600 hover:to-indigo-500"
                  style={{ height: `${height}%`, minHeight: m.count > 0 ? '4px' : '0' }}
                  title={`${m.count}件 / ${formatPrice(m.revenue)}`}
                />
                <span className="text-xs text-gray-500 mt-2">{monthNames[idx]}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 人気商品TOP10 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            人気商品TOP10
          </h3>
          {topProducts.length === 0 ? (
            <p className="text-gray-500 text-center py-8">データがありません</p>
          ) : (
            <div className="space-y-3">
              {topProducts.map((p, idx) => (
                <div key={p.productId} className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                    idx < 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{p.productName}</p>
                    <p className="text-xs text-gray-500">{p.categoryName}</p>
                  </div>
                  <span className="text-sm font-semibold text-indigo-600">{p.adoptionCount}回</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* カテゴリ別採用率 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Percent className="w-5 h-5 text-indigo-600" />
            カテゴリ別採用率
          </h3>
          {categoryAdoptionRates.length === 0 ? (
            <p className="text-gray-500 text-center py-8">データがありません</p>
          ) : (
            <div className="space-y-3">
              {categoryAdoptionRates.map((c) => (
                <div key={c.category} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">{c.category}</span>
                    <span className="font-semibold text-indigo-600">{c.adoptionRate}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all"
                      style={{ width: `${c.adoptionRate}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 閲覧されたが未採用 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-orange-600" />
            よく見られるが未採用
          </h3>
          {unselectedProducts.length === 0 ? (
            <p className="text-gray-500 text-center py-8">データがありません</p>
          ) : (
            <div className="space-y-3">
              {unselectedProducts.map((p) => (
                <div key={p.productId} className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{p.productName}</p>
                    <p className="text-xs text-gray-500">{p.categoryName}</p>
                  </div>
                  <span className="text-sm text-orange-600 font-medium">{p.viewCount}回閲覧</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 採用率が低い商品 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-red-600" />
            採用率が低い商品
          </h3>
          {lowAdoptionProducts.length === 0 ? (
            <p className="text-gray-500 text-center py-8">データがありません</p>
          ) : (
            <div className="space-y-3">
              {lowAdoptionProducts.map((p) => (
                <div key={p.productId} className="flex items-center gap-3 p-2 bg-red-50 rounded-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{p.productName}</p>
                    <p className="text-xs text-gray-500">
                      {p.viewCount}回閲覧 → {p.adoptionCount}回採用
                    </p>
                  </div>
                  <span className="text-sm text-red-600 font-medium">{p.adoptionRate}%</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 閲覧時間分析セクション */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-600" />
          長時間閲覧されている商品TOP5
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          顧客が長く見ている商品 = 興味を引いている可能性が高い
        </p>
        {longestViewedProducts.length === 0 ? (
          <p className="text-gray-500 text-center py-8">データがありません</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {longestViewedProducts.map((p, idx) => {
              const formatDuration = (seconds: number) => {
                if (seconds < 60) return `${seconds}秒`;
                const mins = Math.floor(seconds / 60);
                const secs = seconds % 60;
                return secs > 0 ? `${mins}分${secs}秒` : `${mins}分`;
              };
              return (
                <div key={p.productId} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                      idx < 3 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-xs text-purple-600">{p.categoryName}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 truncate mb-2">{p.productName}</p>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-purple-500" />
                    <span className="text-lg font-bold text-purple-600">{formatDuration(p.avgViewDuration)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">平均閲覧時間</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
