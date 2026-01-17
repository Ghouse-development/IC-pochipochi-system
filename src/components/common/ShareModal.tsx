import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Copy, Check, Share2, Mail, MessageCircle } from 'lucide-react';
import { useShareableUrl } from '../../hooks/useShareableUrl';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';
import { useTimeout } from '../../hooks/useTimeout';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const { shareableUrl, copyToClipboard, shareToLine, shareByEmail } = useShareableUrl();
  const { items, getTotalPrice } = useCartStore();
  const [copied, setCopied] = useState(false);
  const { setTimeout } = useTimeout();

  const handleCopy = async () => {
    const success = await copyToClipboard();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const totalPrice = getTotalPrice();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl w-[95vw] max-w-md p-6 z-50">
          <Dialog.Title className="sr-only">選択内容をシェア</Dialog.Title>
          <Dialog.Close className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </Dialog.Close>

          {/* ヘッダー */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Share2 className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">選択内容をシェア</h2>
            <p className="text-sm text-gray-500 mt-1">
              家族やパートナーと共有しましょう
            </p>
          </div>

          {/* 選択サマリー */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">選択アイテム数</span>
              <span className="font-bold text-gray-900">{items.length}件</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">オプション合計</span>
              <span className="font-bold text-blue-600">{formatPrice(totalPrice)}</span>
            </div>
          </div>

          {/* シェアボタン */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={shareToLine}
              className="flex items-center justify-center gap-2 py-3 bg-[#00B900] text-white rounded-xl font-medium hover:bg-[#009900] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              LINE
            </button>
            <button
              onClick={() => shareByEmail('住宅仕様のご確認')}
              className="flex items-center justify-center gap-2 py-3 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              メール
            </button>
          </div>

          {/* URL表示とコピー */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-gray-700">共有リンク</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={shareableUrl || ''}
                readOnly
                className="flex-1 px-3 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-600 truncate"
              />
              <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  copied
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-sm text-blue-600 flex items-center gap-1">
                <Check className="w-4 h-4" />
                コピーしました
              </p>
            )}
          </div>

          {/* 注意書き */}
          <p className="mt-6 text-xs text-gray-400 text-center">
            リンクを知っている方は誰でも閲覧できます
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
