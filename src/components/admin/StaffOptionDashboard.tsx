/**
 * 担当者別オプション金額ダッシュボード
 * - 会社全体のオプション金額
 * - 担当者ごとの金額内訳
 * - 月別推移グラフ
 */
import React, { useState, useMemo } from 'react';
import { Users, TrendingUp, DollarSign, Award, BarChart3, Filter } from 'lucide-react';
import { formatPrice } from '../../lib/utils';

interface StaffSales {
  staffId: string;
  staffName: string;
  totalOptionAmount: number;
  totalStandardAmount: number;
  projectCount: number;
  avgOptionPerProject: number;
  monthlyData: { month: string; amount: number }[];
}

interface CompanyStats {
  totalOptionAmount: number;
  totalStandardAmount: number;
  totalProjects: number;
  avgOptionRate: number;
  topStaff: StaffSales[];
}

// モックデータ（実際はAPIから取得）
const generateMockData = (): { companyStats: CompanyStats; staffData: StaffSales[] } => {
  const staffNames = ['山田太郎', '佐藤花子', '田中一郎', '鈴木美咲', '高橋健太'];
  const staffData: StaffSales[] = staffNames.map((name, idx) => {
    const projectCount = Math.floor(Math.random() * 20) + 5;
    const totalOption = Math.floor(Math.random() * 5000000) + 500000;
    const totalStandard = Math.floor(Math.random() * 10000000) + 2000000;

    return {
      staffId: `staff-${idx + 1}`,
      staffName: name,
      totalOptionAmount: totalOption,
      totalStandardAmount: totalStandard,
      projectCount,
      avgOptionPerProject: Math.round(totalOption / projectCount),
      monthlyData: Array.from({ length: 6 }, (_, i) => ({
        month: `${new Date().getMonth() - 5 + i + 1}月`,
        amount: Math.floor(Math.random() * 1000000) + 100000
      }))
    };
  });

  const totalOption = staffData.reduce((sum, s) => sum + s.totalOptionAmount, 0);
  const totalStandard = staffData.reduce((sum, s) => sum + s.totalStandardAmount, 0);
  const totalProjects = staffData.reduce((sum, s) => sum + s.projectCount, 0);

  return {
    companyStats: {
      totalOptionAmount: totalOption,
      totalStandardAmount: totalStandard,
      totalProjects,
      avgOptionRate: Math.round((totalOption / (totalOption + totalStandard)) * 100),
      topStaff: [...staffData].sort((a, b) => b.totalOptionAmount - a.totalOptionAmount).slice(0, 3)
    },
    staffData: staffData.sort((a, b) => b.totalOptionAmount - a.totalOptionAmount)
  };
};

export const StaffOptionDashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'month' | 'quarter' | 'year'>('month');
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const { companyStats, staffData } = useMemo(() => generateMockData(), []);

  const periodLabel = {
    month: '今月',
    quarter: '今四半期',
    year: '今年度'
  }[selectedPeriod];

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">オプション金額分析</h2>
            <p className="text-sm text-gray-500">担当者別・会社全体の実績</p>
          </div>
        </div>

        {/* 期間フィルター */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1">
          {(['month', 'quarter', 'year'] as const).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedPeriod === period
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900:text-gray-200'
              }`}
            >
              {{
                month: '月次',
                quarter: '四半期',
                year: '年度'
              }[period]}
            </button>
          ))}
        </div>
      </div>

      {/* 会社全体サマリー */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-2 mb-2 opacity-90">
            <DollarSign className="w-5 h-5" />
            <span className="text-sm font-medium">オプション総額</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold">{formatPrice(companyStats.totalOptionAmount)}</div>
          <p className="text-sm mt-1 opacity-75">{periodLabel}の実績</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="flex items-center gap-2 mb-2 text-gray-500">
            <BarChart3 className="w-5 h-5" />
            <span className="text-sm font-medium">標準仕様総額</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900">
            {formatPrice(companyStats.totalStandardAmount)}
          </div>
          <p className="text-sm mt-1 text-gray-500">{periodLabel}の実績</p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="flex items-center gap-2 mb-2 text-gray-500">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">案件数</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900">
            {companyStats.totalProjects}件
          </div>
          <p className="text-sm mt-1 text-gray-500">{periodLabel}の実績</p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-5 text-white">
          <div className="flex items-center gap-2 mb-2 opacity-90">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-medium">オプション率</span>
          </div>
          <div className="text-2xl sm:text-3xl font-bold">{companyStats.avgOptionRate}%</div>
          <p className="text-sm mt-1 opacity-75">総額に占める割合</p>
        </div>
      </div>

      {/* トップパフォーマー */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-amber-600" />
          <h3 className="text-lg font-bold text-gray-900">トップパフォーマー</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {companyStats.topStaff.map((staff, idx) => (
            <div
              key={staff.staffId}
              className={`bg-white rounded-xl p-4 ${
                idx === 0 ? 'ring-2 ring-amber-400' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                  idx === 0 ? 'bg-gradient-to-br from-amber-400 to-amber-600' :
                  idx === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                  'bg-gradient-to-br from-orange-400 to-orange-600'
                }`}>
                  {idx + 1}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{staff.staffName}</p>
                  <p className="text-xs text-gray-500">{staff.projectCount}件担当</p>
                </div>
              </div>
              <div className="text-xl font-bold text-blue-600">{formatPrice(staff.totalOptionAmount)}</div>
              <p className="text-xs text-gray-500 mt-1">
                平均 {formatPrice(staff.avgOptionPerProject)}/件
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 担当者別詳細 */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-bold text-gray-900">担当者別実績</h3>
            </div>
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                onClick={() => setShowFilterMenu(!showFilterMenu)}
              >
                <Filter className="w-4 h-4" />
                フィルター
              </button>
              {showFilterMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                  <button
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50"
                    onClick={() => { setSelectedStaff(null); setShowFilterMenu(false); }}
                  >
                    すべて表示
                  </button>
                  {staffData.map((staff) => (
                    <button
                      key={staff.staffId}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${
                        selectedStaff === staff.staffId ? 'bg-blue-50 text-blue-600' : ''
                      }`}
                      onClick={() => { setSelectedStaff(staff.staffId); setShowFilterMenu(false); }}
                    >
                      {staff.staffName}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">担当者</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">オプション金額</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">標準仕様金額</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">案件数</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">平均オプション</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">推移</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {staffData
                .filter(staff => !selectedStaff || staff.staffId === selectedStaff)
                .map((staff) => (
                  <tr
                    key={staff.staffId}
                    onClick={() => setSelectedStaff(selectedStaff === staff.staffId ? null : staff.staffId)}
                    className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedStaff === staff.staffId ? 'bg-blue-50' : ''
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                          {staff.staffName.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900">{staff.staffName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span className="font-bold text-blue-600">{formatPrice(staff.totalOptionAmount)}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-600">
                      {formatPrice(staff.totalStandardAmount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-gray-900">
                      {staff.projectCount}件
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span className="text-sm text-gray-600">
                        {formatPrice(staff.avgOptionPerProject)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* ミニスパークライン */}
                      <div className="flex items-end gap-0.5 h-6 justify-center">
                        {staff.monthlyData.map((m, idx) => {
                          const maxAmount = Math.max(...staff.monthlyData.map(d => d.amount));
                          const height = (m.amount / maxAmount) * 100;
                          return (
                            <div
                              key={idx}
                              className="w-2 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                              style={{ height: `${height}%`, minHeight: '2px' }}
                              title={`${m.month}: ${formatPrice(m.amount)}`}
                            />
                          );
                        })}
                      </div>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 合計行 */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="font-bold text-gray-900">合計</span>
            <div className="flex gap-8">
              <div>
                <span className="text-sm text-gray-500 mr-2">オプション:</span>
                <span className="font-bold text-blue-600">{formatPrice(companyStats.totalOptionAmount)}</span>
              </div>
              <div>
                <span className="text-sm text-gray-500 mr-2">標準:</span>
                <span className="font-bold text-gray-900">{formatPrice(companyStats.totalStandardAmount)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
