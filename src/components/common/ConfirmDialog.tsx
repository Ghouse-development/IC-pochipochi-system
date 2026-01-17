import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AlertTriangle, X, Trash2, CheckCircle, Info } from 'lucide-react';
import { Button } from './Button';
import { cn } from '../../lib/utils';

export type ConfirmDialogVariant = 'danger' | 'warning' | 'info' | 'success';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: ConfirmDialogVariant;
  isLoading?: boolean;
}

const variantConfig = {
  danger: {
    icon: Trash2,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
    confirmBg: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
  },
  warning: {
    icon: AlertTriangle,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    confirmBg: 'bg-amber-600 hover:bg-amber-700 focus:ring-amber-500',
  },
  info: {
    icon: Info,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    confirmBg: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
  },
  success: {
    icon: CheckCircle,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    confirmBg: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
  },
};

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = '確認',
  cancelText = 'キャンセル',
  variant = 'warning',
  isLoading = false,
}) => {
  const config = variantConfig[variant];
  const Icon = config.icon;

  const handleConfirm = () => {
    onConfirm();
    if (!isLoading) {
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm animate-in fade-in duration-200" />
        <Dialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl w-[90vw] max-w-md z-[100] p-6 animate-in zoom-in-95 duration-200"
          aria-describedby="confirm-dialog-description"
        >
          <div className="flex items-start gap-4">
            <div className={cn('p-3 rounded-full flex-shrink-0', config.iconBg)}>
              <Icon className={cn('w-6 h-6', config.iconColor)} />
            </div>
            <div className="flex-1 min-w-0">
              <Dialog.Title className="text-lg font-bold text-gray-900">
                {title}
              </Dialog.Title>
              <Dialog.Description
                id="confirm-dialog-description"
                className="mt-2 text-sm text-gray-600 whitespace-pre-wrap"
              >
                {message}
              </Dialog.Description>
            </div>
            <Dialog.Close
              className="p-1 hover:bg-gray-100:bg-gray-700 rounded-full flex-shrink-0"
              aria-label="閉じる"
            >
              <X className="w-5 h-5 text-gray-500" />
            </Dialog.Close>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isLoading}
            >
              {cancelText}
            </Button>
            <button
              onClick={handleConfirm}
              disabled={isLoading}
              className={cn(
                'flex-1 px-4 py-2 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2:ring-offset-gray-800 disabled:opacity-50',
                config.confirmBg
              )}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  処理中...
                </span>
              ) : (
                confirmText
              )}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

// Hook for easier usage
interface UseConfirmDialogReturn {
  confirm: (options: Omit<ConfirmDialogProps, 'isOpen' | 'onClose' | 'onConfirm'>) => Promise<boolean>;
  ConfirmDialogComponent: React.FC;
}

export const useConfirmDialog = (): UseConfirmDialogReturn => {
  const [state, setState] = React.useState<{
    isOpen: boolean;
    options: Omit<ConfirmDialogProps, 'isOpen' | 'onClose' | 'onConfirm'> | null;
    resolve: ((value: boolean) => void) | null;
  }>({
    isOpen: false,
    options: null,
    resolve: null,
  });

  const confirm = React.useCallback(
    (options: Omit<ConfirmDialogProps, 'isOpen' | 'onClose' | 'onConfirm'>): Promise<boolean> => {
      return new Promise((resolve) => {
        setState({
          isOpen: true,
          options,
          resolve,
        });
      });
    },
    []
  );

  const handleClose = React.useCallback(() => {
    const { resolve } = state;
    resolve?.(false);
    setState({ isOpen: false, options: null, resolve: null });
  }, [state]);

  const handleConfirm = React.useCallback(() => {
    const { resolve } = state;
    resolve?.(true);
    setState({ isOpen: false, options: null, resolve: null });
  }, [state]);

  const ConfirmDialogComponent: React.FC = React.useCallback(() => {
    if (!state.options) return null;
    return (
      <ConfirmDialog
        isOpen={state.isOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        {...state.options}
      />
    );
  }, [state.isOpen, state.options, handleClose, handleConfirm]);

  return { confirm, ConfirmDialogComponent };
};
