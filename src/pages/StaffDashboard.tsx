/**
 * スタッフダッシュボード
 * - プロジェクト管理
 * - 確定フロー
 * - ショールーム見積
 * - 利用状況確認
 * - お客様招待
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  FolderPlus,
  CheckCircle,
  Store,
  BarChart3,
  ChevronRight,
  Users,
  Calendar,
  FolderOpen,
  Mail,
  Download,
  ClipboardCheck,
  Eye,
} from 'lucide-react';
import { ProjectCreateForm } from '../components/project/ProjectCreateForm';
import { ProjectStatusPanel } from '../components/project/ProjectStatusPanel';
import { ProjectList } from '../components/project/ProjectList';
import { CustomerInvitation } from '../components/project/CustomerInvitation';
import { ShowroomEstimateForm } from '../components/showroom/ShowroomEstimateForm';
import { UsageDashboard } from '../components/dashboard/UsageDashboard';
import { ExportPanel } from '../components/export/ExportPanel';
import { SelectionProgressPanel } from '../components/selection/SelectionProgressPanel';
import { SelectionSummary } from '../components/selection/SelectionSummary';
import { ICReviewChecklist } from '../components/review/ICReviewChecklist';
import { useProjectStore } from '../stores/useProjectStore';
import { useSelectionStore } from '../stores/useSelectionStore';

// メインタブ（常に表示）
type MainTabType = 'overview' | 'projects' | 'review' | 'showroom' | 'export' | 'usage';
// サブタブ（プロジェクト管理内）
type ProjectSubTab = 'list' | 'create' | 'invite';
// サブタブ（IC確認内）
type ReviewSubTab = 'status' | 'progress' | 'summary' | 'checklist';

interface StaffDashboardProps {
  onBack?: () => void;
}

export const StaffDashboard: React.FC<StaffDashboardProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<MainTabType>('overview');
  const [projectSubTab, setProjectSubTab] = useState<ProjectSubTab>('list');
  const [reviewSubTab, setReviewSubTab] = useState<ReviewSubTab>('status');
  const { projects, currentProject } = useProjectStore();
  const { customerName, projectName, projectStatus } = useSelectionStore();

  // 6つのメインタブ
  const mainTabs = [
    { id: 'overview' as MainTabType, label: '概要', icon: BarChart3 },
    { id: 'projects' as MainTabType, label: 'プロジェクト', icon: FolderOpen },
    { id: 'review' as MainTabType, label: 'IC確認', icon: ClipboardCheck },
    { id: 'showroom' as MainTabType, label: 'SR見積', icon: Store },
    { id: 'export' as MainTabType, label: '出力', icon: Download },
    { id: 'usage' as MainTabType, label: '利用状況', icon: Eye },
  ];

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* サマリーカード */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{projects.length}</p>
              <p className="text-sm text-gray-500">プロジェクト数</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {projects.filter(p => p.id === currentProject?.id).length > 0 ? 1 : 0}
              </p>
              <p className="text-sm text-gray-500">アクティブプロジェクト</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {new Date().toLocaleDateString('ja-JP', { month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm text-gray-500">今日の日付</p>
            </div>
          </div>
        </div>
      </div>

      {/* 現在のプロジェクト */}
      {(customerName || projectName) && (
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="font-bold text-gray-900 mb-4">現在のプロジェクト</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-gray-900">{projectName || '未設定'}</p>
              <p className="text-gray-500">{customerName || '未設定'}様</p>
              <span className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${
                projectStatus === 'draft' ? 'bg-gray-100 text-gray-600' :
                projectStatus === 'customer_selecting' ? 'bg-blue-100 text-blue-600' :
                projectStatus === 'ic_review' ? 'bg-orange-100 text-orange-600' :
                projectStatus === 'confirmed' ? 'bg-green-100 text-green-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {projectStatus === 'draft' ? '下書き' :
                 projectStatus === 'customer_selecting' ? 'お客様選択中' :
                 projectStatus === 'ic_review' ? 'IC確認中' :
                 projectStatus === 'confirmed' ? '確定済み' : '最終確定'}
              </span>
            </div>
            <button
              onClick={() => {
                setActiveTab('review');
                setReviewSubTab('status');
              }}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              詳細を見る
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* クイックアクション */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="font-bold text-gray-900 mb-4">クイックアクション</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <button
            onClick={() => {
              setActiveTab('projects');
              setProjectSubTab('list');
            }}
            className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-gray-100 rounded-lg inline-block mb-2 group-hover:bg-gray-200 transition-colors">
              <FolderOpen className="w-6 h-6 text-gray-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">プロジェクト一覧</p>
          </button>

          <button
            onClick={() => {
              setActiveTab('projects');
              setProjectSubTab('create');
            }}
            className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-blue-100 rounded-lg inline-block mb-2 group-hover:bg-blue-200 transition-colors">
              <FolderPlus className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">新規プロジェクト</p>
          </button>

          <button
            onClick={() => {
              setActiveTab('projects');
              setProjectSubTab('invite');
            }}
            className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-indigo-100 rounded-lg inline-block mb-2 group-hover:bg-indigo-200 transition-colors">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">お客様招待</p>
          </button>

          <button
            onClick={() => {
              setActiveTab('review');
              setReviewSubTab('status');
            }}
            className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-green-100 rounded-lg inline-block mb-2 group-hover:bg-green-200 transition-colors">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">確定フロー</p>
          </button>

          <button
            onClick={() => setActiveTab('showroom')}
            className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-orange-100 rounded-lg inline-block mb-2 group-hover:bg-orange-200 transition-colors">
              <Store className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">ショールーム見積</p>
          </button>

          <button
            onClick={() => setActiveTab('usage')}
            className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-purple-100 rounded-lg inline-block mb-2 group-hover:bg-purple-200 transition-colors">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">お客様利用状況</p>
          </button>
        </div>
      </div>

      {/* 最近のプロジェクト */}
      {projects.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h3 className="font-bold text-gray-900 mb-4">最近のプロジェクト</h3>
          <div className="space-y-3">
            {projects.slice(0, 5).map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">{project.name}</p>
                  <p className="text-sm text-gray-500">
                    {project.customer.name}様 / {project.building.planType}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">
                    {new Date(project.updatedAt).toLocaleDateString('ja-JP')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  // プロジェクト管理のサブタブコンテンツ
  const renderProjectContent = () => {
    switch (projectSubTab) {
      case 'list':
        return (
          <ProjectList
            onProjectSelect={() => {
              setActiveTab('review');
              setReviewSubTab('status');
            }}
            onCreateNew={() => setProjectSubTab('create')}
          />
        );
      case 'create':
        return (
          <ProjectCreateForm
            onComplete={() => setProjectSubTab('invite')}
            onCancel={() => setProjectSubTab('list')}
          />
        );
      case 'invite':
        return <CustomerInvitation />;
      default:
        return null;
    }
  };

  // IC確認のサブタブコンテンツ
  const renderReviewContent = () => {
    switch (reviewSubTab) {
      case 'status':
        return <ProjectStatusPanel isStaff={true} userName="スタッフ" />;
      case 'progress':
        return <SelectionProgressPanel onCategoryClick={(cat) => navigate(`/catalog/interior/${cat}`)} />;
      case 'summary':
        return <SelectionSummary onExport={() => setActiveTab('export')} />;
      case 'checklist':
        return <ICReviewChecklist onComplete={() => setActiveTab('export')} />;
      default:
        return null;
    }
  };

  // メインコンテンツ
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'projects':
        return (
          <div className="space-y-4">
            {/* プロジェクトサブタブ */}
            <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm border">
              {[
                { id: 'list' as ProjectSubTab, label: 'プロジェクト一覧', icon: FolderOpen },
                { id: 'create' as ProjectSubTab, label: '新規作成', icon: FolderPlus },
                { id: 'invite' as ProjectSubTab, label: 'お客様招待', icon: Mail },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setProjectSubTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      projectSubTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {renderProjectContent()}
          </div>
        );
      case 'review':
        return (
          <div className="space-y-4">
            {/* IC確認サブタブ */}
            <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm border">
              {[
                { id: 'status' as ReviewSubTab, label: '確定フロー', icon: CheckCircle },
                { id: 'progress' as ReviewSubTab, label: '選択進捗', icon: BarChart3 },
                { id: 'summary' as ReviewSubTab, label: 'サマリー', icon: ClipboardCheck },
                { id: 'checklist' as ReviewSubTab, label: 'チェックリスト', icon: ClipboardCheck },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setReviewSubTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      reviewSubTab === tab.id
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {renderReviewContent()}
          </div>
        );
      case 'showroom':
        return <ShowroomEstimateForm />;
      case 'export':
        return <ExportPanel />;
      case 'usage':
        return <UsageDashboard projectName={projectName} customerName={customerName} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBack}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="戻る"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">スタッフダッシュボード</h1>
                {customerName && projectName && (
                  <p className="text-sm text-gray-500">{customerName}様 / {projectName}</p>
                )}
              </div>
            </div>
            {projectStatus && (
              <span className={`px-3 py-1 text-sm rounded-full ${
                projectStatus === 'draft' ? 'bg-gray-100 text-gray-600' :
                projectStatus === 'customer_selecting' ? 'bg-blue-100 text-blue-600' :
                projectStatus === 'ic_review' ? 'bg-orange-100 text-orange-600' :
                projectStatus === 'confirmed' ? 'bg-green-100 text-green-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {projectStatus === 'draft' ? '下書き' :
                 projectStatus === 'customer_selecting' ? 'お客様選択中' :
                 projectStatus === 'ic_review' ? 'IC確認中' :
                 projectStatus === 'confirmed' ? '確定済み' : '最終確定'}
              </span>
            )}
          </div>
        </div>

        {/* メインタブナビゲーション */}
        <div className="px-4 sm:px-6 overflow-x-auto">
          <nav className="flex gap-1 border-t pt-2 -mb-px" aria-label="タブ">
            {mainTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="p-4 sm:p-6 max-w-7xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default StaffDashboard;
