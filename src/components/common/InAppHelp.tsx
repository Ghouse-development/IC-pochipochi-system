/**
 * インアプリヘルプシステム
 * コンテキストに応じたヘルプとガイダンス
 */
import React, { useState, useCallback, createContext, useContext } from 'react';
import {
  HelpCircle,
  X,
  ChevronRight,
  Search,
  BookOpen,
  MessageCircle,
  ExternalLink,
  Home,
  ShoppingCart,
  FileText,
  Settings,
  Users,
  Package,
} from 'lucide-react';

// ヘルプトピック
interface HelpTopic {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: string;
  content: string;
  steps?: string[];
  relatedTopics?: string[];
}

const HELP_TOPICS: HelpTopic[] = [
  {
    id: 'getting-started',
    title: 'はじめに',
    icon: <Home className="w-5 h-5" />,
    category: '基本操作',
    content: 'STYLEBOOKは、住宅建材の仕様選択を効率化するシステムです。カタログから商品を選択し、見積もりを作成できます。',
    steps: [
      '1. ログインまたはデモモードで開始',
      '2. カタログから商品を閲覧',
      '3. 気に入った商品をカートに追加',
      '4. 見積もりを確認・出力',
    ],
    relatedTopics: ['catalog-navigation', 'cart-management'],
  },
  {
    id: 'catalog-navigation',
    title: 'カタログの使い方',
    icon: <Package className="w-5 h-5" />,
    category: '基本操作',
    content: 'カタログは外装・内装・設備の3つのカテゴリに分かれています。タブを切り替えて各カテゴリの商品を閲覧できます。',
    steps: [
      '1. 上部のタブで外装/内装/設備を切り替え',
      '2. 左サイドバーでカテゴリを絞り込み',
      '3. 検索バーでキーワード検索',
      '4. 商品カードをクリックで詳細表示',
    ],
    relatedTopics: ['search-tips', 'product-comparison'],
  },
  {
    id: 'cart-management',
    title: 'カートの管理',
    icon: <ShoppingCart className="w-5 h-5" />,
    category: '基本操作',
    content: 'カートに追加した商品は右サイドバーで確認できます。数量の変更や削除が可能です。',
    steps: [
      '1. 商品カードの「追加」ボタンでカートに追加',
      '2. 右上のカートアイコンでカートを開く',
      '3. 数量を調整または削除',
      '4. 「見積確定」で見積もりを作成',
    ],
    relatedTopics: ['export-options', 'getting-started'],
  },
  {
    id: 'search-tips',
    title: '検索のコツ',
    icon: <Search className="w-5 h-5" />,
    category: '便利な機能',
    content: '検索機能を活用して、目的の商品を素早く見つけましょう。',
    steps: [
      '商品名やメーカー名で検索',
      'カテゴリと組み合わせて絞り込み',
      '型番で直接検索も可能',
      'ショートカット「/」で検索にフォーカス',
    ],
  },
  {
    id: 'export-options',
    title: '出力オプション',
    icon: <FileText className="w-5 h-5" />,
    category: '便利な機能',
    content: '選択した商品リストをPDF、Excel、仕様書など様々な形式で出力できます。',
    steps: [
      'PDF: 印刷用の見積書',
      'Excel: データ編集用',
      '仕様書: 詳細な商品仕様',
      '提案資料: お客様向けプレゼン',
    ],
  },
  {
    id: 'product-comparison',
    title: '商品比較',
    icon: <Package className="w-5 h-5" />,
    category: '便利な機能',
    content: '複数の商品を比較して、最適な選択ができます。',
    steps: [
      '1. 比較したい商品の「比較」ボタンをクリック',
      '2. 最大4商品まで追加可能',
      '3. 比較画面で仕様を並べて確認',
      '4. そのままカートに追加も可能',
    ],
  },
  {
    id: 'keyboard-shortcuts',
    title: 'キーボードショートカット',
    icon: <Settings className="w-5 h-5" />,
    category: 'ショートカット',
    content: 'キーボードショートカットを使って、より素早く操作できます。',
    steps: [
      '/ : 検索にフォーカス',
      'Ctrl+C : カートを開く',
      'Alt+1/2/3 : タブを切り替え',
      'Esc : モーダルを閉じる',
      'Shift+? : ショートカット一覧',
    ],
  },
  {
    id: 'admin-overview',
    title: '管理画面の概要',
    icon: <Settings className="w-5 h-5" />,
    category: '管理者向け',
    content: '管理者は商品マスタ、ユーザー管理、統計分析などの機能にアクセスできます。',
    steps: [
      '商品マスタ: 商品の追加・編集',
      '統計・分析: 売上・採用率の確認',
      'プロジェクト: 案件の管理',
      'システム設定: 各種設定の変更',
    ],
    relatedTopics: ['user-management', 'data-export'],
  },
  {
    id: 'user-management',
    title: 'ユーザー管理',
    icon: <Users className="w-5 h-5" />,
    category: '管理者向け',
    content: 'ユーザーの追加、権限設定、組織の管理ができます。',
    steps: [
      '1. 管理画面 → システム → ユーザー',
      '2. 「ユーザー追加」で新規作成',
      '3. 役割（管理者/コーディネーター/ユーザー）を設定',
      '4. 組織に紐づけて権限を管理',
    ],
  },
];

// ヘルプコンテキスト
interface HelpContextValue {
  openHelp: () => void;
  closeHelp: () => void;
  openTopic: (topicId: string) => void;
  isOpen: boolean;
}

const HelpContext = createContext<HelpContextValue | null>(null);

export function useHelp(): HelpContextValue {
  const context = useContext(HelpContext);
  if (!context) {
    throw new Error('useHelp must be used within a HelpProvider');
  }
  return context;
}

interface HelpProviderProps {
  children: React.ReactNode;
}

export const HelpProvider: React.FC<HelpProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const openHelp = useCallback(() => setIsOpen(true), []);
  const closeHelp = useCallback(() => {
    setIsOpen(false);
    setSelectedTopicId(null);
  }, []);
  const openTopic = useCallback((topicId: string) => {
    setIsOpen(true);
    setSelectedTopicId(topicId);
  }, []);

  return (
    <HelpContext.Provider value={{ openHelp, closeHelp, openTopic, isOpen }}>
      {children}
      <HelpPanel
        isOpen={isOpen}
        onClose={closeHelp}
        selectedTopicId={selectedTopicId}
        onSelectTopic={setSelectedTopicId}
      />
    </HelpContext.Provider>
  );
};

// ヘルプパネル
interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTopicId: string | null;
  onSelectTopic: (id: string | null) => void;
}

const HelpPanel: React.FC<HelpPanelProps> = ({
  isOpen,
  onClose,
  selectedTopicId,
  onSelectTopic,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const selectedTopic = HELP_TOPICS.find((t) => t.id === selectedTopicId);

  const filteredTopics = searchQuery
    ? HELP_TOPICS.filter(
        (t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : HELP_TOPICS;

  const categories = [...new Set(filteredTopics.map((t) => t.category))];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-500" />
            ヘルプ
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b dark:border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ヘルプを検索..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {selectedTopic ? (
            // Topic Detail
            <div className="p-4">
              <button
                onClick={() => onSelectTopic(null)}
                className="text-sm text-blue-600 hover:text-blue-800 mb-4 flex items-center gap-1"
              >
                ← トピック一覧に戻る
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  {selectedTopic.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">
                    {selectedTopic.title}
                  </h3>
                  <span className="text-xs text-gray-500">{selectedTopic.category}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {selectedTopic.content}
              </p>

              {selectedTopic.steps && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    手順
                  </h4>
                  <ul className="space-y-2">
                    {selectedTopic.steps.map((step, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-blue-500">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedTopic.relatedTopics && selectedTopic.relatedTopics.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    関連トピック
                  </h4>
                  <div className="space-y-2">
                    {selectedTopic.relatedTopics.map((topicId) => {
                      const topic = HELP_TOPICS.find((t) => t.id === topicId);
                      if (!topic) return null;
                      return (
                        <button
                          key={topicId}
                          onClick={() => onSelectTopic(topicId)}
                          className="w-full text-left p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
                        >
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {topic.title}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Topic List
            <div className="p-4 space-y-6">
              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    {category}
                  </h3>
                  <div className="space-y-2">
                    {filteredTopics
                      .filter((t) => t.category === category)
                      .map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => onSelectTopic(topic.id)}
                          className="w-full text-left p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center gap-3"
                        >
                          <div className="text-gray-400">{topic.icon}</div>
                          <span className="flex-1 text-sm text-gray-700 dark:text-gray-300">
                            {topic.title}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between text-sm">
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
              サポートに連絡
            </a>
            <a
              href="/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              ドキュメント
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ヘルプボタンコンポーネント
export const HelpButton: React.FC<{ className?: string }> = ({ className }) => {
  const { openHelp } = useHelp();

  return (
    <button
      onClick={openHelp}
      className={`p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors ${className}`}
      aria-label="ヘルプを開く"
      title="ヘルプ (Shift + ?)"
    >
      <HelpCircle className="w-5 h-5" />
    </button>
  );
};

// ツールチップヘルプ
interface TooltipHelpProps {
  content: string;
  children: React.ReactNode;
}

export const TooltipHelp: React.FC<TooltipHelpProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg whitespace-nowrap">
          {content}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
        </div>
      )}
    </div>
  );
};
