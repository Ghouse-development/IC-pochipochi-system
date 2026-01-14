/**
 * 顧客セルフサービスモード
 * - シンプルで分かりやすいUI
 * - レコメンド機能を前面に
 * - 注意事項の明確な表示
 * - 金額比較の強調
 */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface CustomerModeContextValue {
  isCustomerMode: boolean;
  customerName: string | null;
  projectName: string | null;
  setCustomerMode: (enabled: boolean) => void;
  setCustomerInfo: (name: string, project: string) => void;
}

const CustomerModeContext = createContext<CustomerModeContextValue | null>(null);

export const useCustomerMode = () => {
  const context = useContext(CustomerModeContext);
  if (!context) {
    throw new Error('useCustomerMode must be used within CustomerModeProvider');
  }
  return context;
};

interface CustomerModeProviderProps {
  children: React.ReactNode;
}

export const CustomerModeProvider: React.FC<CustomerModeProviderProps> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const [isCustomerMode, setIsCustomerMode] = useState(false);
  const [customerName, setCustomerName] = useState<string | null>(null);
  const [projectName, setProjectName] = useState<string | null>(null);

  // URLパラメータから顧客モードを検出
  useEffect(() => {
    const mode = searchParams.get('mode');
    const name = searchParams.get('customer');
    const project = searchParams.get('project');

    if (mode === 'customer') {
      setIsCustomerMode(true);
      if (name) setCustomerName(decodeURIComponent(name));
      if (project) setProjectName(decodeURIComponent(project));
    }
  }, [searchParams]);

  const setCustomerMode = (enabled: boolean) => {
    setIsCustomerMode(enabled);
  };

  const setCustomerInfo = (name: string, project: string) => {
    setCustomerName(name);
    setProjectName(project);
  };

  return (
    <CustomerModeContext.Provider
      value={{
        isCustomerMode,
        customerName,
        projectName,
        setCustomerMode,
        setCustomerInfo,
      }}
    >
      {children}
    </CustomerModeContext.Provider>
  );
};

/**
 * 顧客モード用のヘッダー
 */
export const CustomerHeader: React.FC<{
  onCartClick: () => void;
  cartItemCount: number;
}> = ({ onCartClick, cartItemCount }) => {
  const { customerName, projectName } = useCustomerMode();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* ロゴ・タイトル */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                住宅仕様セレクター
              </h1>
              {customerName && (
                <p className="text-sm text-gray-600">
                  {customerName}様 {projectName && `- ${projectName}`}
                </p>
              )}
            </div>
          </div>

          {/* カートボタン */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-bold text-lg">選択リスト</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

/**
 * 顧客モード用のウェルカムバナー
 */
export const CustomerWelcomeBanner: React.FC = () => {
  const { customerName } = useCustomerMode();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">
          {customerName ? `${customerName}様、` : ''}ようこそ！
        </h2>
        <p className="text-lg opacity-90">
          お好みの商品をタップして選択してください
        </p>
        <div className="mt-4 flex justify-center gap-4 text-sm">
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            標準仕様
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
            <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
            オプション（追加料金）
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * 注意事項表示コンポーネント
 */
export const ProductNotice: React.FC<{
  notices: string[];
  variant?: 'warning' | 'info';
}> = ({ notices, variant = 'info' }) => {
  if (notices.length === 0) return null;

  const bgColor = variant === 'warning'
    ? 'bg-amber-50 border-amber-200'
    : 'bg-blue-50 border-blue-200';
  const iconColor = variant === 'warning' ? 'text-amber-500' : 'text-blue-500';
  const textColor = variant === 'warning' ? 'text-amber-800' : 'text-blue-800';

  return (
    <div className={`${bgColor} border rounded-lg p-4 mt-4`}>
      <div className="flex gap-3">
        <svg className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <div>
          <h4 className={`font-bold ${textColor} mb-1`}>
            {variant === 'warning' ? 'ご注意' : 'お知らせ'}
          </h4>
          <ul className={`text-sm ${textColor} space-y-1`}>
            {notices.map((notice, i) => (
              <li key={i}>・{notice}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/**
 * 金額比較表示コンポーネント
 */
export const PriceComparison: React.FC<{
  standardPrice: number;
  optionPrice: number;
  selectedPrice: number;
}> = ({ standardPrice, optionPrice, selectedPrice }) => {
  const diff = selectedPrice - standardPrice;
  const isUpgrade = diff > 0;
  const isSaving = diff < 0;

  return (
    <div className="bg-gray-50 rounded-lg p-4 mt-4">
      <h4 className="font-bold text-gray-700 mb-3">金額比較</h4>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">標準仕様</span>
          <span className="font-mono">
            {standardPrice === 0 ? '標準' : `¥${standardPrice.toLocaleString()}`}
          </span>
        </div>
        {optionPrice > 0 && optionPrice !== standardPrice && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">オプション価格</span>
            <span className="font-mono">¥{optionPrice.toLocaleString()}</span>
          </div>
        )}
        {diff !== 0 && (
          <div className={`flex justify-between items-center pt-2 border-t ${isUpgrade ? 'text-orange-600' : 'text-green-600'}`}>
            <span className="font-bold">
              {isUpgrade ? '追加料金' : isSaving ? '割引額' : '差額'}
            </span>
            <span className="font-mono font-bold text-lg">
              {isUpgrade ? '+' : ''}{diff === 0 ? '¥0' : `¥${diff.toLocaleString()}`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * 顧客モード用リンク生成
 */
export const generateCustomerLink = (
  baseUrl: string,
  customerName: string,
  projectName: string
): string => {
  const params = new URLSearchParams({
    mode: 'customer',
    customer: customerName,
    project: projectName,
  });
  return `${baseUrl}?${params.toString()}`;
};
