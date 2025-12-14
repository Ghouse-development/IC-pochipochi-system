import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, Send, Check } from 'lucide-react';
import { Button } from '../common/Button';
import { useCartStore } from '../../stores/useCartStore';
import { useNotificationStore } from '../../stores/useNotificationStore';
import { useStatisticsStore } from '../../stores/useStatisticsStore';
import { useToast } from '../common/Toast';
import { formatPrice, getProductPrice } from '../../lib/utils';
import { useTimeout } from '../../hooks/useTimeout';

interface ConfirmOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfirmOrderModal: React.FC<ConfirmOrderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const { items, getTotalPrice, clearCart } = useCartStore();
  const addNotification = useNotificationStore((state) => state.addNotification);
  const recordAdoption = useStatisticsStore((state) => state.recordAdoption);
  const toast = useToast();
  const { setTimeout } = useTimeout();
  const totalPrice = getTotalPrice();

  // メールアドレスのバリデーション
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleConfirm = () => {
    if (!customerName.trim()) {
      toast.warning('入力エラー', 'お客様名を入力してください');
      return;
    }
    if (!customerEmail.trim()) {
      toast.warning('入力エラー', 'メールアドレスを入力してください');
      return;
    }
    if (!isValidEmail(customerEmail)) {
      toast.warning('入力エラー', '有効なメールアドレスを入力してください');
      return;
    }
    
    // 統計を記録
    items.forEach(item => {
      const price = getProductPrice(item.product.pricing);
      recordAdoption(
        item.product.id,
        item.product.name,
        item.product.categoryName,
        price * item.quantity
      );
    });
    
    // 通知を追加
    addNotification({
      type: 'order_confirmed',
      title: '仕様が確定されました',
      message: `${customerName}様の仕様が確定されました。合計金額: ${formatPrice(totalPrice)}`,
      data: {
        customerName,
        customerEmail,
        items,
        totalPrice,
      },
    });
    
    setIsConfirmed(true);
    
    // 3秒後に閉じる
    setTimeout(() => {
      clearCart();
      onClose();
      setIsConfirmed(false);
      setCustomerName('');
      setCustomerEmail('');
    }, 3000);
  };
  
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl max-w-md w-full p-6 z-50">
          <Dialog.Close className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded">
            <X className="w-5 h-5" />
          </Dialog.Close>
          
          {!isConfirmed ? (
            <>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                仕様確定
              </h2>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    お客様名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="山田 太郎"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="yamada@example.com"
                  />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">選択商品数</span>
                  <span className="font-semibold">{items.length}点</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">合計金額</span>
                  <span className="text-xl font-bold text-blue-600">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>ご確認ください：</strong>
                  仕様確定後、インテリア担当者に通知が送信されます。
                  担当者による確認・修正が可能です。
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  キャンセル
                </Button>
                <Button
                  variant="primary"
                  onClick={handleConfirm}
                  className="flex-1"
                >
                  <Send className="w-4 h-4 mr-2" />
                  仕様を確定
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                仕様が確定されました
              </h3>
              <p className="text-gray-600">
                インテリア担当者に通知を送信しました
              </p>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};