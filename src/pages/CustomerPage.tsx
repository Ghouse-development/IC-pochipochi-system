/**
 * お客様専用ページ
 * - アクセスコード認証
 * - プロジェクト情報表示
 * - 選択進捗表示
 * - カタログへの誘導
 */
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Home,
  Key,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  Loader2,
  LogIn,
  Paintbrush,
  Wrench,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { useProjectStore, type Project } from '../stores/useProjectStore';
import { useSelectionStore } from '../stores/useSelectionStore';
import { useOperationLogStore } from '../stores/useOperationLogStore';
import { useCartStore } from '../stores/useCartStore';
import { REQUIRED_CATEGORIES } from '../components/catalog/catalogUtils';

export const CustomerPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { projects, setCurrentProject } = useProjectStore();
  const { selections, setProjectInfo, setProjectStatus, getSelectionStatus } = useSelectionStore();
  const { startNewSession, setUserType } = useOperationLogStore();
  const { items } = useCartStore();

  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [authenticatedProject, setAuthenticatedProject] = useState<Project | null>(null);

  // URLパラメータからプロジェクトIDを取得
  const projectId = searchParams.get('project');
  const urlCode = searchParams.get('code');

  // プロジェクト検索
  const project = projectId ? projects.find((p) => p.id === projectId) : null;

  // URLにコードがあれば自動入力
  useEffect(() => {
    if (urlCode) {
      setAccessCode(urlCode.toUpperCase());
    }
  }, [urlCode]);

  // アクセスコード認証
  const handleAuthenticate = async () => {
    if (!accessCode.trim()) {
      setError('アクセスコードを入力してください');
      return;
    }

    setIsLoading(true);
    setError('');

    // 簡易的な認証（実際にはバックエンドで検証）
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // デモ用：コードが6文字であれば認証成功とする
    if (accessCode.length === 6 && project) {
      setAuthenticatedProject(project);
      setCurrentProject(project);
      setProjectInfo(project.name, project.customer.name, project.building.planType);

      // お客様としてセッション開始
      startNewSession('customer');
      setUserType('customer');

      // ステータスを「お客様選択中」に更新（まだdraftの場合）
      setProjectStatus('customer_selecting', project.customer.name);
    } else {
      setError('アクセスコードが正しくありません');
    }

    setIsLoading(false);
  };

  // 選択進捗を計算
  const progressStats = useMemo(() => {
    const total = REQUIRED_CATEGORIES.length;
    let completed = 0;
    let notNeeded = 0;

    REQUIRED_CATEGORIES.forEach((cat) => {
      const status = getSelectionStatus(cat);
      if (status === 'selected') completed++;
      else if (status === 'not_needed') notNeeded++;
    });

    return {
      total,
      completed,
      notNeeded,
      remaining: total - completed - notNeeded,
      percentage: Math.round(((completed + notNeeded) / total) * 100),
    };
  }, [selections, getSelectionStatus]);

  // カテゴリグループ
  const categoryGroups = useMemo(() => {
    const groups = [
      {
        key: 'exterior',
        label: '外装',
        icon: Home,
        color: 'blue',
        path: '/catalog/exterior',
        categories: ['外壁', '屋根', '玄関ドア', 'サッシ'],
      },
      {
        key: 'interior',
        label: '内装',
        icon: Paintbrush,
        color: 'green',
        path: '/catalog/interior',
        categories: ['床材', '壁クロス', '天井クロス', '建具'],
      },
      {
        key: 'equipment',
        label: '設備',
        icon: Wrench,
        color: 'orange',
        path: '/catalog/equipment',
        categories: ['キッチン', 'バス', '洗面台', 'トイレ'],
      },
    ];

    return groups.map((group) => {
      let selected = 0;
      group.categories.forEach((cat) => {
        const status = getSelectionStatus(cat);
        if (status === 'selected' || status === 'not_needed') selected++;
      });
      return {
        ...group,
        selected,
        total: group.categories.length,
      };
    });
  }, [selections, getSelectionStatus]);

  // 認証済みの場合
  if (authenticatedProject) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-2xl mx-auto px-4 py-8">
          {/* ヘッダー */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {authenticatedProject.customer.name}様
            </h1>
            <p className="text-gray-600">{authenticatedProject.name}</p>
          </div>

          {/* 進捗カード */}
          <div className="bg-white rounded-2xl shadow-lg border p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900">選択進捗</h2>
              <span className="text-3xl font-bold text-blue-600">{progressStats.percentage}%</span>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div className="h-full flex">
                <div
                  className="bg-green-500 transition-all"
                  style={{ width: `${(progressStats.completed / progressStats.total) * 100}%` }}
                />
                <div
                  className="bg-gray-400 transition-all"
                  style={{ width: `${(progressStats.notNeeded / progressStats.total) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>選択済み: {progressStats.completed}件</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full" />
                <span>不要: {progressStats.notNeeded}件</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-200 rounded-full" />
                <span>未選択: {progressStats.remaining}件</span>
              </div>
            </div>

            {progressStats.remaining === 0 && (
              <div className="mt-4 flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">すべての選択が完了しました！担当者にご連絡ください。</span>
              </div>
            )}
          </div>

          {/* カテゴリナビゲーション */}
          <div className="space-y-3 mb-6">
            {categoryGroups.map((group) => {
              const Icon = group.icon;
              const isComplete = group.selected === group.total;
              return (
                <button
                  key={group.key}
                  onClick={() => navigate(group.path)}
                  className={`w-full p-4 bg-white rounded-xl shadow-sm border flex items-center justify-between hover:shadow-md transition-shadow ${
                    isComplete ? 'border-green-200' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-${group.color}-100`}>
                      <Icon className={`w-6 h-6 text-${group.color}-600`} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">{group.label}</p>
                      <p className="text-sm text-gray-500">
                        {group.selected}/{group.total} 完了
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {isComplete && (
                      <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                        完了
                      </span>
                    )}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* プロジェクト情報（折りたたみ可能） */}
          <details className="bg-white rounded-xl shadow-sm border overflow-hidden mb-6">
            <summary className="px-6 py-4 cursor-pointer font-bold text-gray-900 flex items-center gap-2 hover:bg-gray-50">
              <Building className="w-5 h-5 text-blue-500" />
              プロジェクト情報
            </summary>
            <div className="px-6 py-4 border-t bg-gray-50">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">プラン</p>
                  <p className="font-medium">{authenticatedProject.building.planType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">延床面積</p>
                  <p className="font-medium">{authenticatedProject.building.totalFloorArea}㎡</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">構造</p>
                  <p className="font-medium">{authenticatedProject.building.structure}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">カート商品</p>
                  <p className="font-medium">{items.length}点</p>
                </div>
              </div>
            </div>
          </details>

          {/* ヘルプ */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              ご利用の流れ
            </h3>
            <ol className="list-decimal list-inside text-sm text-blue-800 space-y-1">
              <li>上記のカテゴリから選択したい項目をタップ</li>
              <li>商品を閲覧し「選択する」をタップ</li>
              <li>すべての選択が完了したら担当者に連絡</li>
              <li>打合せにて最終確認を行います</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  // 未認証の場合（ログイン画面）
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-xl border p-8">
          {/* ヘッダー */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Home className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">STYLEBOOK</h1>
            <p className="text-gray-500 mt-2">住宅仕様選択システム</p>
          </div>

          {/* プロジェクト情報 */}
          {project && (
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{project.customer.name}様</p>
                  <p className="text-sm text-gray-500">{project.name}</p>
                </div>
              </div>
            </div>
          )}

          {/* アクセスコード入力 */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                アクセスコード
              </label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                  placeholder="6桁のコードを入力"
                  maxLength={6}
                  className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-center text-xl font-mono tracking-widest uppercase"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                担当者からお知らせしたアクセスコードを入力してください
              </p>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              onClick={handleAuthenticate}
              disabled={isLoading || !accessCode.trim()}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  認証中...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  ログイン
                </>
              )}
            </button>
          </div>

          {/* ヘルプリンク */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              アクセスコードが分からない場合は、
              <br />
              担当者にお問い合わせください
            </p>
          </div>
        </div>

        {/* フッター */}
        <div className="text-center mt-8 text-sm text-gray-400">
          © 2024 STYLEBOOK. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
