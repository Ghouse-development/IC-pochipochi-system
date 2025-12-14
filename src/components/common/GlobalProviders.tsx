/**
 * グローバルプロバイダーの統合
 * 全ての Context Provider を一箇所で管理
 */
import React, { type ReactNode } from 'react';
import { ToastProvider } from './Toast';
import { AnnouncerProvider } from './ScreenReaderAnnouncer';
import { HelpProvider } from './InAppHelp';

interface GlobalProvidersProps {
  children: ReactNode;
}

/**
 * アプリケーション全体で使用するプロバイダーを統合
 * 順序に注意: 依存関係のあるプロバイダーは後に配置
 */
export const GlobalProviders: React.FC<GlobalProvidersProps> = ({ children }) => {
  return (
    <AnnouncerProvider>
      <ToastProvider>
        <HelpProvider>
          {children}
        </HelpProvider>
      </ToastProvider>
    </AnnouncerProvider>
  );
};

/**
 * プロバイダー設定のカスタマイズ用
 */
interface GlobalProvidersConfigProps {
  children: ReactNode;
  enableHelp?: boolean;
  enableAnnouncer?: boolean;
  enableToast?: boolean;
}

export const GlobalProvidersConfigurable: React.FC<GlobalProvidersConfigProps> = ({
  children,
  enableHelp = true,
  enableAnnouncer = true,
  enableToast = true,
}) => {
  let content = children;

  if (enableHelp) {
    content = <HelpProvider>{content}</HelpProvider>;
  }

  if (enableToast) {
    content = <ToastProvider>{content}</ToastProvider>;
  }

  if (enableAnnouncer) {
    content = <AnnouncerProvider>{content}</AnnouncerProvider>;
  }

  return <>{content}</>;
};
