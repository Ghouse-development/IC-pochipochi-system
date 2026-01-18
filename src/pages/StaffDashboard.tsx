/**
 * スタッフダッシュボード
 * - プロジェクト管理（一覧、新規作成、お客様招待）
 * - IC確認、SR見積、出力、利用状況は個別プロジェクト内で使用
 */
import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import {
  ArrowLeft,
  FolderPlus,
  BarChart3,
  ChevronRight,
  Users,
  Calendar,
  FolderOpen,
  Mail,
  CheckCircle,
} from 'lucide-react';
import { ProjectRegistrationForm } from '../components/project/ProjectRegistrationForm';
import { ProjectList } from '../components/project/ProjectList';
import { CustomerInvitation } from '../components/project/CustomerInvitation';
import { useProjectStore } from '../stores/useProjectStore';
import { useSelectionStore } from '../stores/useSelectionStore';

// メインタブ（シンプル化 - IC確認, SR見積, 出力, 利用状況は個別プロジェクト内で使用）
type MainTabType = 'overview' | 'projects';
// サブタブ（プロジェクト管理内）
type ProjectSubTab = 'list' | 'create' | 'invite';

interface StaffDashboardProps {
  onBack?: () => void;
}

// 初期ユーザーデータの型
interface InitialUserData {
  id: string;
  email: string;
  name: string;
  phone?: string;
}

export const StaffDashboard: React.FC<StaffDashboardProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [initialUserData, setInitialUserData] = useState<InitialUserData | undefined>(undefined);
  const { projects, currentProject } = useProjectStore();
  const { customerName, projectName, projectStatus } = useSelectionStore();

  // URLパスからタブ状態を取得
  const getTabsFromPath = (): { mainTab: MainTabType; projectSubTab: ProjectSubTab } => {
    const pathParts = location.pathname.replace('/staff', '').split('/').filter(Boolean);
    const mainTab = (pathParts[0] as MainTabType) || 'overview';
    const subTab = pathParts[1];

    let projectSub: ProjectSubTab = 'list';

    if (mainTab === 'projects' && subTab) {
      projectSub = (subTab as ProjectSubTab) || 'list';
    }

    return { mainTab, projectSubTab: projectSub };
  };

  const { mainTab: activeTab, projectSubTab } = getTabsFromPath();

  // タブ変更時にURLを更新
  const setActiveTab = (tab: MainTabType) => {
    if (tab === 'projects') {
      navigate('/staff/projects/list');
    } else {
      navigate(`/staff/${tab}`);
    }
  };

  const setProjectSubTab = (subTab: ProjectSubTab) => {
    navigate(`/staff/projects/${subTab}`);
  };

  // URLパラメータからユーザー情報を取得し、状態に保存
  useEffect(() => {
    const createProject = searchParams.get('createProject');
    const userId = searchParams.get('userId');
    const email = searchParams.get('email');
    const name = searchParams.get('name');
    const phone = searchParams.get('phone');

    if (createProject === 'true' && userId && email) {
      setInitialUserData({
        id: userId,
        email,
        name: name || '',
        phone: phone || undefined,
      });
      // URLパラメータをクリアしてプロジェクト作成ページへ
      navigate('/staff/projects/create');
    }
  }, [searchParams, navigate]);

  // メインタブ（シンプル化）
  const mainTabs = [
    { id: 'overview' as MainTabType, label: '概要', icon: BarChart3 },
    { id: 'projects' as MainTabType, label: 'プロジェクト', icon: FolderOpen },
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-blue-600" />
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
                projectStatus === 'confirmed' ? 'bg-blue-100 text-blue-600' :
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
                setActiveTab('projects');
                setProjectSubTab('list');
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              // プロジェクト選択後はプロジェクト一覧に留まる
              // IC確認などはプロジェクト詳細ページで行う
            }}
            onCreateNew={() => setProjectSubTab('create')}
          />
        );
      case 'create':
        return (
          <ProjectRegistrationForm
            onComplete={() => {
              setInitialUserData(undefined);
              setProjectSubTab('list');
            }}
            onCancel={() => {
              setInitialUserData(undefined);
              setProjectSubTab('list');
            }}
            initialUser={initialUserData}
          />
        );
      case 'invite':
        return <CustomerInvitation />;
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
            <div className="flex gap-1 sm:gap-2 bg-white rounded-lg p-1 shadow-sm border overflow-x-auto">
              {[
                { id: 'list' as ProjectSubTab, label: 'プロジェクト一覧', shortLabel: '一覧', icon: FolderOpen },
                { id: 'create' as ProjectSubTab, label: '新規作成', shortLabel: '新規', icon: FolderPlus },
                { id: 'invite' as ProjectSubTab, label: 'お客様招待', shortLabel: '招待', icon: Mail },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setProjectSubTab(tab.id)}
                    className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                      projectSubTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    title={tab.label}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.shortLabel}</span>
                  </button>
                );
              })}
            </div>
            {renderProjectContent()}
          </div>
        );
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
                {currentProject ? (
                  <p className="text-sm text-gray-500">
                    {currentProject.customer?.name || currentProject.name}様 / {currentProject.name}
                  </p>
                ) : customerName && projectName ? (
                  <p className="text-sm text-gray-500">{customerName}様 / {projectName}</p>
                ) : null}
              </div>
            </div>
            {projectStatus && (
              <span className={`px-3 py-1 text-sm rounded-full ${
                projectStatus === 'draft' ? 'bg-gray-100 text-gray-600' :
                projectStatus === 'customer_selecting' ? 'bg-blue-100 text-blue-600' :
                projectStatus === 'ic_review' ? 'bg-orange-100 text-orange-600' :
                projectStatus === 'confirmed' ? 'bg-blue-100 text-blue-600' :
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
        <div className="px-4 sm:px-6">
          <nav className="flex justify-between sm:justify-start sm:gap-1 border-t pt-2 -mb-px" aria-label="タブ">
            {mainTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col sm:flex-row items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium whitespace-nowrap border-b-2 transition-colors min-w-0 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                  title={tab.label}
                >
                  <Icon className="w-5 h-5 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden text-[10px] truncate max-w-[50px]">{tab.label}</span>
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
