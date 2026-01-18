import React, { useMemo, useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { BarChart3, Package, Bell, TrendingUp, Upload, Settings, Users, FolderTree, Wrench, Truck, Database, Building2, ShieldAlert, DollarSign, Activity, RefreshCw, CloudOff, Cloud, FolderOpen, FolderPlus, Mail, Calendar, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { SectionErrorBoundary } from '../common/ErrorBoundary';
import { SystemSettings } from './SystemSettings';
import { ItemManager } from './ItemManager';
import { CategoryManager } from './CategoryManager';
import { ProductMaster } from './ProductMaster';
import { UserManager } from './UserManager';
import { VendorOrderManager } from './VendorOrderManager';
import { DataBackup } from './DataBackup';
import { OrganizationManager } from './OrganizationManager';
import { useVersionStore } from '../../stores/useVersionStore';
import { useOrderStore } from '../../stores/useOrderStore';
import { useStatisticsStore } from '../../stores/useStatisticsStore';
import { useProductStore } from '../../stores/useProductStore';
import { formatPrice } from '../../lib/utils';
import { PdfImport } from './PdfImport';
import { StaffOptionDashboard } from './StaffOptionDashboard';
import { UserBehaviorAnalytics } from './UserBehaviorAnalytics';
import { useAuth } from '../../contexts/AuthContext';
import { LivePreview } from './LivePreview';
import { ProjectRegistrationForm } from '../project/ProjectRegistrationForm';
import { ProjectList } from '../project/ProjectList';
import { CustomerInvitation } from '../project/CustomerInvitation';
import { useProjectStore } from '../../stores/useProjectStore';
import { useSelectionStore } from '../../stores/useSelectionStore';

interface AdminDashboardProps {
  onBack?: () => void;
}

// メインタブ（6グループ）- プロジェクト管理を統合
type MainTab = 'projects' | 'products' | 'statistics' | 'vendors' | 'data' | 'system';

// プロジェクト管理のサブタブ
type ProjectSubTab = 'overview' | 'list' | 'create' | 'invite';

// 商品マスタのサブタブ
type ProductMasterSubTab = 'plans' | 'items' | 'categories';

// 統計のサブタブ
type StatsSubTab = 'dashboard' | 'adoption' | 'staffOption' | 'behavior';

// データ管理のサブタブ
type DataSubTab = 'backup' | 'pdf' | 'versions' | 'sync';

// システムのサブタブ
type SystemSubTab = 'settings' | 'users' | 'organizations';

// DB同期パネルコンポーネント
const DBSyncPanel: React.FC = () => {
  const { isDBConnected, isLoading, lastFetchedAt, refreshProducts } = useProductStore();
  const [isSyncing, setIsSyncing] = React.useState(false);

  const handleRefresh = async () => {
    setIsSyncing(true);
    try {
      await refreshProducts();
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">データベース同期</h2>

      {/* 接続状態 */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            {isDBConnected ? (
              <div className="p-2 bg-blue-100 rounded-full">
                <Cloud className="w-6 h-6 text-blue-600" />
              </div>
            ) : (
              <div className="p-2 bg-amber-100 rounded-full">
                <CloudOff className="w-6 h-6 text-amber-600" />
              </div>
            )}
            <div>
              <h3 className="font-medium text-gray-900">
                {isDBConnected ? 'データベース接続中' : 'オフラインモード（静的データ使用中）'}
              </h3>
              <p className="text-sm text-gray-500">
                {lastFetchedAt
                  ? `最終同期: ${new Date(lastFetchedAt).toLocaleString('ja-JP')}`
                  : '未同期'}
              </p>
            </div>
          </div>
          <Button
            onClick={handleRefresh}
            disabled={isSyncing || isLoading}
            variant="outline"
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
            {isSyncing ? '同期中...' : 'データを更新'}
          </Button>
        </div>

        <div className="border-t pt-4 mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">データソース</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-600">外装商品</p>
              <p className="font-medium text-gray-900">
                {isDBConnected ? 'Supabaseから取得' : 'exteriorProducts.ts'}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-600">内装商品</p>
              <p className="font-medium text-gray-900">
                {isDBConnected ? 'Supabaseから取得' : 'interiorProducts.ts'}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-600">水廻り設備</p>
              <p className="font-medium text-gray-900">
                {isDBConnected ? 'Supabaseから取得' : 'waterEquipmentProducts.ts'}
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-600">家具・家電</p>
              <p className="font-medium text-gray-900">
                {isDBConnected ? 'Supabaseから取得' : 'furnitureProducts.ts'}
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* 説明 */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="font-medium text-blue-900 mb-2">データベース同期について</h3>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>システムはSupabaseデータベースに接続されています</li>
          <li>DBにデータがある場合はDBから、ない場合は静的ファイルから商品データを取得します</li>
          <li>「データを更新」ボタンで最新のデータを取得できます</li>
          <li>商品の追加・変更はSupabase管理画面または本システムのアイテム管理から行えます</li>
        </ul>
      </Card>
    </div>
  );
};

// 初期ユーザーデータの型
interface InitialUserData {
  id: string;
  email: string;
  name: string;
  phone?: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBack }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { isAdmin, isCoordinator, isLoading: authLoading } = useAuth();
  const [initialUserData, setInitialUserData] = useState<InitialUserData | undefined>(undefined);
  const { projects, currentProject } = useProjectStore();
  const { customerName, projectName, projectStatus } = useSelectionStore();

  // URLパスからタブ状態を取得
  const getTabsFromPath = (): {
    activeTab: MainTab;
    projectSubTab: ProjectSubTab;
    productMasterSubTab: ProductMasterSubTab;
    statsSubTab: StatsSubTab;
    dataSubTab: DataSubTab;
    systemSubTab: SystemSubTab;
  } => {
    const pathParts = location.pathname.replace('/admin', '').split('/').filter(Boolean);
    const mainTab = (pathParts[0] as MainTab) || 'projects';
    const subTab = pathParts[1];

    let projectSub: ProjectSubTab = 'overview';
    let productMasterSub: ProductMasterSubTab = 'plans';
    let statsSub: StatsSubTab = 'dashboard';
    let dataSub: DataSubTab = 'backup';
    let systemSub: SystemSubTab = 'settings';

    if (mainTab === 'projects' && subTab) {
      projectSub = (subTab as ProjectSubTab) || 'overview';
    }
    if (mainTab === 'products' && subTab) {
      productMasterSub = (subTab as ProductMasterSubTab) || 'plans';
    }
    if (mainTab === 'statistics' && subTab) {
      statsSub = (subTab as StatsSubTab) || 'dashboard';
    }
    if (mainTab === 'data' && subTab) {
      dataSub = (subTab as DataSubTab) || 'backup';
    }
    if (mainTab === 'system' && subTab) {
      systemSub = (subTab as SystemSubTab) || 'settings';
    }

    return {
      activeTab: mainTab,
      projectSubTab: projectSub,
      productMasterSubTab: productMasterSub,
      statsSubTab: statsSub,
      dataSubTab: dataSub,
      systemSubTab: systemSub,
    };
  };

  const { activeTab, projectSubTab, productMasterSubTab, statsSubTab, dataSubTab, systemSubTab } = getTabsFromPath();

  // 管理者専用タブかどうかを判定
  const isAdminOnlyTab = (tab: MainTab) => {
    return tab === 'products' || tab === 'data' || tab === 'system';
  };

  // タブ変更時にURLを更新
  const setActiveTab = useCallback((tab: MainTab) => {
    const subPaths: Record<MainTab, string> = {
      projects: 'overview',
      products: 'plans',
      statistics: 'dashboard',
      vendors: '',
      data: 'backup',
      system: 'settings',
    };
    const subPath = subPaths[tab];
    navigate(subPath ? `/admin/${tab}/${subPath}` : `/admin/${tab}`);
  }, [navigate]);

  const setProjectSubTab = useCallback((subTab: ProjectSubTab) => {
    navigate(`/admin/projects/${subTab}`);
  }, [navigate]);

  const setProductMasterSubTab = useCallback((subTab: ProductMasterSubTab) => {
    navigate(`/admin/products/${subTab}`);
  }, [navigate]);

  const setStatsSubTab = useCallback((subTab: StatsSubTab) => {
    navigate(`/admin/statistics/${subTab}`);
  }, [navigate]);

  const setDataSubTab = useCallback((subTab: DataSubTab) => {
    navigate(`/admin/data/${subTab}`);
  }, [navigate]);

  const setSystemSubTab = useCallback((subTab: SystemSubTab) => {
    navigate(`/admin/system/${subTab}`);
  }, [navigate]);

  // ユーザーからプロジェクト作成への遷移
  const handleCreateProjectForUser = useCallback((user: { id: string; email: string; full_name: string; phone?: string | null }) => {
    // プロジェクト作成タブにユーザー情報を渡して遷移
    const params = new URLSearchParams({
      createProject: 'true',
      userId: user.id,
      email: user.email,
      name: user.full_name || '',
      ...(user.phone ? { phone: user.phone } : {}),
    });
    navigate(`/admin?${params.toString()}`);
  }, [navigate]);

  // すべてのフックを早期リターンの前に配置（React Hooks のルール遵守）
  const currentVersion = useVersionStore((state) => state.currentVersion);
  const versions = useVersionStore((state) => state.versions || []);
  const orders = useOrderStore((state) => state.orders || []);

  const statistics = useMemo(() => {
    const confirmedOrders = orders.filter(o =>
      o.status === 'confirmed' || o.status === 'modified' || o.status === 'completed'
    );

    return {
      totalConfirmedOrders: confirmedOrders.length,
      yearlyTotal: confirmedOrders.reduce((sum, order) => sum + order.totalAmount, 0),
      averageOrderValue: confirmedOrders.length > 0
        ? confirmedOrders.reduce((sum, order) => sum + order.totalAmount, 0) / confirmedOrders.length
        : 0,
      monthlyData: Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        const monthOrders = confirmedOrders.filter(order =>
          order.confirmedAt && new Date(order.confirmedAt).getMonth() === i
        );
        return {
          month,
          count: monthOrders.length,
          total: monthOrders.reduce((sum, order) => sum + order.totalAmount, 0)
        };
      })
    };
  }, [orders]);

  // 採用統計データを直接取得（セレクターを使用）
  const productStats = useStatisticsStore((state) => state.productStats || []);
  const yearlyAdoptions = useStatisticsStore((state) => state.yearlyAdoptions || []);
  const getAdoptionRates = useStatisticsStore((state) => state.getAdoptionRates);
  const getUnselectedProducts = useStatisticsStore((state) => state.getUnselectedProducts);
  const getLowAdoptionProducts = useStatisticsStore((state) => state.getLowAdoptionProducts);
  const getCategoryAdoptionRates = useStatisticsStore((state) => state.getCategoryAdoptionRates);

  // 採用率分析データ
  const adoptionRates = useMemo(() => getAdoptionRates(), [getAdoptionRates]);
  const unselectedProducts = useMemo(() => getUnselectedProducts(), [getUnselectedProducts]);
  const lowAdoptionProducts = useMemo(() => getLowAdoptionProducts(30), [getLowAdoptionProducts]);
  const categoryAdoptionRates = useMemo(() => getCategoryAdoptionRates(), [getCategoryAdoptionRates]);

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
      navigate('/admin/projects/create');
    }
  }, [searchParams, navigate]);

  // スタッフが管理者専用タブにアクセスした場合、プロジェクトタブにリダイレクト
  useEffect(() => {
    if (!authLoading && isCoordinator && !isAdmin && isAdminOnlyTab(activeTab)) {
      navigate('/admin/projects/overview');
    }
  }, [authLoading, isCoordinator, isAdmin, activeTab, navigate]);

  const topProducts = useMemo(() =>
    [...productStats]
      .sort((a, b) => b.adoptionCount - a.adoptionCount)
      .slice(0, 10)
  , [productStats]);

  const monthlyStats = yearlyAdoptions;

  // 認可チェック: 管理者またはスタッフのみアクセス可能
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">認証情報を確認中...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin && !isCoordinator) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md p-8 text-center">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-900 mb-2">アクセス権限がありません</h2>
          <p className="text-gray-600 mb-6">
            この画面は管理者またはスタッフのみアクセスできます。
          </p>
          <Button
            variant="primary"
            onClick={onBack || (() => window.location.href = '/')}
          >
            ホームに戻る
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold text-gray-900">STYLEBOOK 管理ダッシュボード</h1>
            <button
              onClick={onBack || (() => window.location.reload())}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              ← カタログに戻る
            </button>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-sm text-gray-600">
              現在のバージョン: <span className="font-semibold">{currentVersion}</span>
            </span>
            <span className="text-sm text-gray-600">
              最終更新: {new Date().toLocaleDateString('ja-JP')}
            </span>
          </div>
        </div>
        
        {/* メインタブナビゲーション */}
        <div className="flex gap-1 sm:gap-2 mb-4 border-b border-gray-200 overflow-x-auto pb-1">
          {/* プロジェクト - 全員 */}
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-3 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === 'projects'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              <span className="hidden sm:inline">プロジェクト</span>
              <span className="sm:hidden">PJ</span>
            </div>
          </button>
          {/* 商品マスタ - 管理者のみ */}
          {isAdmin && (
            <button
              onClick={() => setActiveTab('products')}
              className={`px-3 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === 'products'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4" />
                <span className="hidden sm:inline">商品マスタ</span>
                <span className="sm:hidden">商品</span>
              </div>
            </button>
          )}
          {/* 統計・分析 - 全員 */}
          <button
            onClick={() => setActiveTab('statistics')}
            className={`px-3 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === 'statistics'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">統計・分析</span>
              <span className="sm:hidden">統計</span>
            </div>
          </button>
          {/* 発注管理 - 全員 */}
          <button
            onClick={() => setActiveTab('vendors')}
            className={`px-3 py-2 rounded-t-lg font-medium transition-colors ${
              activeTab === 'vendors'
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span className="hidden sm:inline">発注管理</span>
              <span className="sm:hidden">発注</span>
            </div>
          </button>
          {/* データ管理 - 管理者のみ */}
          {isAdmin && (
            <button
              onClick={() => setActiveTab('data')}
              className={`px-3 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === 'data'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span className="hidden sm:inline">データ管理</span>
                <span className="sm:hidden">データ</span>
              </div>
            </button>
          )}
          {/* システム - 管理者のみ */}
          {isAdmin && (
            <button
              onClick={() => setActiveTab('system')}
              className={`px-3 py-2 rounded-t-lg font-medium transition-colors ${
                activeTab === 'system'
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span className="hidden sm:inline">システム</span>
                <span className="sm:hidden">設定</span>
              </div>
            </button>
          )}
        </div>

        {/* サブタブナビゲーション */}
        {activeTab === 'projects' && (
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            <button
              onClick={() => setProjectSubTab('overview')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                projectSubTab === 'overview'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                概要
              </div>
            </button>
            <button
              onClick={() => setProjectSubTab('list')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                projectSubTab === 'list'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <FolderOpen className="w-3.5 h-3.5" />
                一覧
              </div>
            </button>
            <button
              onClick={() => setProjectSubTab('create')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                projectSubTab === 'create'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <FolderPlus className="w-3.5 h-3.5" />
                新規作成
              </div>
            </button>
            <button
              onClick={() => setProjectSubTab('invite')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                projectSubTab === 'invite'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                お客様招待
              </div>
            </button>
          </div>
        )}

        {activeTab === 'products' && isAdmin && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setProductMasterSubTab('plans')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                productMasterSubTab === 'plans'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5" />
                商品（プラン）
              </div>
            </button>
            <button
              onClick={() => setProductMasterSubTab('items')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                productMasterSubTab === 'items'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5" />
                アイテム
              </div>
            </button>
            <button
              onClick={() => setProductMasterSubTab('categories')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                productMasterSubTab === 'categories'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <FolderTree className="w-3.5 h-3.5" />
                カテゴリ
              </div>
            </button>
          </div>
        )}

        {activeTab === 'statistics' && (
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            <button
              onClick={() => setStatsSubTab('dashboard')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                statsSubTab === 'dashboard'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                売上統計
              </div>
            </button>
            <button
              onClick={() => setStatsSubTab('adoption')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                statsSubTab === 'adoption'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                採用統計
              </div>
            </button>
            <button
              onClick={() => setStatsSubTab('staffOption')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                statsSubTab === 'staffOption'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5" />
                担当者別オプション
              </div>
            </button>
            <button
              onClick={() => setStatsSubTab('behavior')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors whitespace-nowrap ${
                statsSubTab === 'behavior'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5" />
                行動分析
              </div>
            </button>
          </div>
        )}

        {activeTab === 'data' && isAdmin && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setDataSubTab('backup')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                dataSubTab === 'backup'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                バックアップ
              </div>
            </button>
            <button
              onClick={() => setDataSubTab('pdf')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                dataSubTab === 'pdf'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5" />
                PDF取込
              </div>
            </button>
            <button
              onClick={() => setDataSubTab('versions')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                dataSubTab === 'versions'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Bell className="w-3.5 h-3.5" />
                バージョン履歴
              </div>
            </button>
            <button
              onClick={() => setDataSubTab('sync')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                dataSubTab === 'sync'
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5" />
                DB同期
              </div>
            </button>
          </div>
        )}

        {activeTab === 'system' && isAdmin && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setSystemSubTab('settings')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                systemSubTab === 'settings'
                  ? 'bg-gray-200 text-gray-800 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" />
                設定
              </div>
            </button>
            <button
              onClick={() => setSystemSubTab('users')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                systemSubTab === 'users'
                  ? 'bg-gray-200 text-gray-800 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                ユーザー
              </div>
            </button>
            <button
              onClick={() => setSystemSubTab('organizations')}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                systemSubTab === 'organizations'
                  ? 'bg-gray-200 text-gray-800 font-medium'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                組織
              </div>
            </button>
          </div>
        )}

        {/* プロジェクト管理 */}
        {activeTab === 'projects' && (
          <div>
            {/* 概要 */}
            {projectSubTab === 'overview' && (
              <div className="space-y-6">
                {/* サマリーカード */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-gray-900">{projects.length}</p>
                        <p className="text-sm text-gray-500">プロジェクト数</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
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
                  </Card>

                  <Card className="p-6">
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
                  </Card>
                </div>

                {/* 現在のプロジェクト */}
                {(customerName || projectName) && (
                  <Card className="p-6">
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
                        onClick={() => setProjectSubTab('list')}
                        className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        詳細を見る
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                )}

                {/* クイックアクション */}
                <Card className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">クイックアクション</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <button
                      onClick={() => setProjectSubTab('list')}
                      className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <div className="p-3 bg-gray-100 rounded-lg inline-block mb-2 group-hover:bg-gray-200 transition-colors">
                        <FolderOpen className="w-6 h-6 text-gray-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">プロジェクト一覧</p>
                    </button>

                    <button
                      onClick={() => setProjectSubTab('create')}
                      className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <div className="p-3 bg-blue-100 rounded-lg inline-block mb-2 group-hover:bg-blue-200 transition-colors">
                        <FolderPlus className="w-6 h-6 text-blue-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">新規プロジェクト</p>
                    </button>

                    <button
                      onClick={() => setProjectSubTab('invite')}
                      className="p-4 text-center hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <div className="p-3 bg-indigo-100 rounded-lg inline-block mb-2 group-hover:bg-indigo-200 transition-colors">
                        <Mail className="w-6 h-6 text-indigo-600" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">お客様招待</p>
                    </button>
                  </div>
                </Card>

                {/* 最近のプロジェクト */}
                {projects.length > 0 && (
                  <Card className="p-6">
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
                  </Card>
                )}
              </div>
            )}

            {/* プロジェクト一覧 */}
            {projectSubTab === 'list' && (
              <SectionErrorBoundary sectionName="プロジェクト一覧">
                <ProjectList
                  onProjectSelect={() => {
                    // プロジェクト選択後はプロジェクト一覧に留まる
                  }}
                  onCreateNew={() => setProjectSubTab('create')}
                />
              </SectionErrorBoundary>
            )}

            {/* 新規作成 */}
            {projectSubTab === 'create' && (
              <SectionErrorBoundary sectionName="プロジェクト作成">
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
              </SectionErrorBoundary>
            )}

            {/* お客様招待 */}
            {projectSubTab === 'invite' && (
              <SectionErrorBoundary sectionName="お客様招待">
                <CustomerInvitation />
              </SectionErrorBoundary>
            )}
          </div>
        )}

        {/* 商品マスタ（管理者専用） */}
        {activeTab === 'products' && isAdmin && (
          <div>
            {productMasterSubTab === 'plans' && (
              <SectionErrorBoundary sectionName="商品マスタ">
                <ProductMaster />
              </SectionErrorBoundary>
            )}
            {productMasterSubTab === 'items' && (
              <SectionErrorBoundary sectionName="アイテム管理">
                <ItemManager />
              </SectionErrorBoundary>
            )}
            {productMasterSubTab === 'categories' && (
              <SectionErrorBoundary sectionName="カテゴリ管理">
                <CategoryManager />
              </SectionErrorBoundary>
            )}
            {/* カタログプレビュー（アイテム・カテゴリ編集時） */}
            {(productMasterSubTab === 'items' || productMasterSubTab === 'categories') && (
              <LivePreview
                previewPath="/catalog/exterior"
                targetName="カタログ"
              />
            )}
          </div>
        )}
        
        {/* 統計・分析 */}
        {activeTab === 'statistics' && (
          <div>
            {/* 売上統計 */}
            {statsSubTab === 'dashboard' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">年間確定数</h3>
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {statistics.totalConfirmedOrders}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">件の仕様が確定済み</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">年間売上</h3>
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatPrice(statistics.yearlyTotal)}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">オプション売上総額</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">平均単価</h3>
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {formatPrice(statistics.averageOrderValue)}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">1件あたりの平均</p>
                </Card>

                <div className="md:col-span-3">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">月別売上推移</h3>
                    <div className="h-64 flex items-end justify-between gap-2">
                      {statistics.monthlyData.map((data) => {
                        const maxTotal = Math.max(...statistics.monthlyData.map(d => d.total), 1);
                        const heightPercent = data.total > 0 ? (data.total / maxTotal) * 100 : 0;
                        return (
                          <div key={`month-${data.month}`} className="flex-1 flex flex-col items-center">
                            <div
                              className="w-full bg-blue-500 rounded-t"
                              style={{
                                height: `${heightPercent}%`
                              }}
                            />
                            <span className="text-xs text-gray-600 mt-2">{data.month}月</span>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* 採用統計 */}
            {statsSubTab === 'adoption' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">商品採用統計・分析</h2>

                {/* サマリーカード */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <h4 className="text-sm font-medium text-blue-800">総閲覧商品数</h4>
                    <p className="text-2xl font-bold text-blue-900 mt-1">{adoptionRates.length}件</p>
                  </Card>
                  <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <h4 className="text-sm font-medium text-blue-800">採用商品数</h4>
                    <p className="text-2xl font-bold text-blue-900 mt-1">{adoptionRates.filter(a => a.adoptionCount > 0).length}件</p>
                  </Card>
                  <Card className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
                    <h4 className="text-sm font-medium text-amber-800">未採用商品数</h4>
                    <p className="text-2xl font-bold text-amber-900 mt-1">{unselectedProducts.length}件</p>
                  </Card>
                  <Card className="p-4 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                    <h4 className="text-sm font-medium text-red-800">低採用率商品</h4>
                    <p className="text-2xl font-bold text-red-900 mt-1">{lowAdoptionProducts.length}件</p>
                    <p className="text-xs text-red-600 mt-0.5">（採用率30%未満）</p>
                  </Card>
                </div>

                {/* カテゴリ別採用率 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">カテゴリ別採用率</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryAdoptionRates.map((cat) => (
                      <Card key={cat.category} className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{cat.category}</h4>
                          <span className={`text-lg font-bold ${
                            cat.adoptionRate >= 50 ? 'text-blue-600' :
                            cat.adoptionRate >= 20 ? 'text-amber-600' : 'text-red-600'
                          }`}>
                            {cat.adoptionRate}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div
                            className={`h-2 rounded-full ${
                              cat.adoptionRate >= 50 ? 'bg-blue-500' :
                              cat.adoptionRate >= 20 ? 'bg-amber-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${Math.min(cat.adoptionRate, 100)}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500">
                          閲覧: {cat.viewCount}回 → 採用: {cat.adoptionCount}回
                        </p>
                      </Card>
                    ))}
                    {categoryAdoptionRates.length === 0 && (
                      <Card className="p-6 col-span-full">
                        <p className="text-center text-gray-500">まだ閲覧データがありません</p>
                      </Card>
                    )}
                  </div>
                </div>

                {/* 未採用商品リスト */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                    閲覧されたが未採用の商品
                    <span className="text-sm font-normal text-gray-500">（検討されたが選ばれなかった商品）</span>
                  </h3>
                  <Card className="overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-amber-50 border-b border-amber-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">
                            商品名
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">
                            カテゴリ
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">
                            閲覧回数
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-amber-700 uppercase tracking-wider">
                            採用率
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {unselectedProducts.length === 0 ? (
                          <tr>
                            <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                              未採用の商品はありません
                            </td>
                          </tr>
                        ) : (
                          unselectedProducts.slice(0, 20).map((product) => (
                            <tr key={product.productId} className="hover:bg-amber-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {product.productName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.categoryName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {product.viewCount}回
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                                  0%
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </Card>
                </div>

                {/* 低採用率商品リスト */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    採用率の低い商品
                    <span className="text-sm font-normal text-gray-500">（3回以上閲覧されたが採用率30%未満）</span>
                  </h3>
                  <Card className="overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-red-50 border-b border-red-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                            商品名
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                            カテゴリ
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                            閲覧回数
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                            採用回数
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider">
                            採用率
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {lowAdoptionProducts.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                              該当する商品はありません
                            </td>
                          </tr>
                        ) : (
                          lowAdoptionProducts.slice(0, 15).map((product) => (
                            <tr key={product.productId} className="hover:bg-red-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {product.productName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.categoryName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {product.viewCount}回
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {product.adoptionCount}回
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                                  {product.adoptionRate}%
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </Card>
                </div>

                {/* TOP採用商品 */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    人気商品TOP10
                  </h3>
                  <Card className="overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-blue-50 border-b border-blue-200">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                            順位
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                            商品名
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                            カテゴリ
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                            採用回数
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">
                            売上合計
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {topProducts.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                              まだ採用データがありません
                            </td>
                          </tr>
                        ) : (
                          topProducts.map((product, index) => (
                            <tr key={product.productId} className="hover:bg-blue-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <span className={`${
                                  index === 0 ? 'text-yellow-500' :
                                  index === 1 ? 'text-gray-400' :
                                  index === 2 ? 'text-amber-600' : ''
                                }`}>
                                  {index + 1}位
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {product.productName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {product.categoryName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {product.adoptionCount}回
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {formatPrice(product.totalRevenue)}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </Card>
                </div>

                {/* 月別採用推移 */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">月別採用推移</h3>
                  <div className="h-64 flex items-end justify-between gap-2">
                    {monthlyStats.map((data) => (
                      <div key={data.month} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-500 rounded-t"
                          style={{
                            height: `${data.count > 0 ? (data.count / Math.max(...monthlyStats.map(d => d.count), 1)) * 100 : 0}%`
                          }}
                        />
                        <span className="text-xs text-gray-600 mt-2">{data.month}月</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* 担当者別オプション */}
            {statsSubTab === 'staffOption' && (
              <SectionErrorBoundary sectionName="担当者別オプション">
                <StaffOptionDashboard />
              </SectionErrorBoundary>
            )}

            {/* ユーザー行動分析 */}
            {statsSubTab === 'behavior' && (
              <SectionErrorBoundary sectionName="ユーザー行動分析">
                <UserBehaviorAnalytics />
              </SectionErrorBoundary>
            )}
          </div>
        )}
        
        {/* 発注管理 */}
        {activeTab === 'vendors' && (
          <div className="space-y-6">
            <SectionErrorBoundary sectionName="業者発注管理">
              <VendorOrderManager />
            </SectionErrorBoundary>
          </div>
        )}

        {/* データ管理（管理者専用） */}
        {activeTab === 'data' && isAdmin && (
          <div>
            {dataSubTab === 'backup' && (
              <SectionErrorBoundary sectionName="バックアップ">
                <DataBackup />
              </SectionErrorBoundary>
            )}
            {dataSubTab === 'pdf' && (
              <SectionErrorBoundary sectionName="PDF取り込み">
                <PdfImport />
              </SectionErrorBoundary>
            )}
            {dataSubTab === 'versions' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">バージョン履歴</h2>
                <div className="space-y-4">
                  {versions.sort((a, b) =>
                    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                  ).map((version) => (
                    <Card key={version.id} className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            バージョン {version.version}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{version.description}</p>
                          <p className="text-xs text-gray-500 mt-2">
                            作成者: {version.createdBy} |
                            日時: {new Date(version.createdAt).toLocaleString('ja-JP')}
                          </p>
                        </div>
                        {version.isActive && (
                          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            現在のバージョン
                          </span>
                        )}
                      </div>
                      {version.changes.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-sm font-medium text-gray-700 mb-2">変更内容:</p>
                          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                            {version.changes.map((change, idx) => (
                              <li key={idx}>{change}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {dataSubTab === 'sync' && (
              <DBSyncPanel />
            )}
          </div>
        )}

        {/* システム（管理者専用） */}
        {activeTab === 'system' && isAdmin && (
          <div>
            {systemSubTab === 'settings' && (
              <SectionErrorBoundary sectionName="システム設定">
                <SystemSettings />
              </SectionErrorBoundary>
            )}
            {systemSubTab === 'users' && (
              <SectionErrorBoundary sectionName="ユーザー管理">
                <UserManager onCreateProject={handleCreateProjectForUser} />
              </SectionErrorBoundary>
            )}
            {systemSubTab === 'organizations' && (
              <SectionErrorBoundary sectionName="組織管理">
                <OrganizationManager />
              </SectionErrorBoundary>
            )}
          </div>
        )}
      </div>
    </div>
  );
};