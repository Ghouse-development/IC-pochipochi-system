import React, { useState, useEffect } from 'react';
import { X, Trash2, Plus, Minus, Save, CheckCircle, Download, FileText, Star, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { formatPrice } from '../../lib/utils';
import { UNIT_SYMBOLS } from '../../types/product';
import { Badge } from '../common/Badge';
import { exportToExcel, exportToPDF } from '../../utils/exportEstimate';
import { supabase } from '../../lib/supabase';

interface CartSidebarEnhancedProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebarEnhanced: React.FC<CartSidebarEnhancedProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart, selectedPlanId } = useCartStore();
  const [isFinalized, setIsFinalized] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [planName, setPlanName] = useState('');

  const totalPrice = getTotalPrice();

  // プラン名を取得
  useEffect(() => {
    const fetchPlanName = async () => {
      if (!selectedPlanId) return;
      const { data } = await supabase
        .from('products')
        .select('name')
        .eq('code', selectedPlanId)
        .single();
      if (data) setPlanName(data.name);
    };
    fetchPlanName();
  }, [selectedPlanId]);

  const handleTemporarySave = () => {
    const saveData = {
      items,
      customerName,
      projectName,
      date: new Date().toISOString(),
      status: 'draft'
    };
    localStorage.setItem('lifex_draft_estimate', JSON.stringify(saveData));
    alert('見積が一時保存されました');
  };

  const handleFinalize = () => {
    if (!customerName || !projectName) {
      alert('お客様名と工事名を入力してください');
      return;
    }

    const confirmMessage = `
確定後は変更できません。
以下の内容で確定してよろしいですか？

お客様名: ${customerName}
工事名: ${projectName}
合計金額: ${formatPrice(totalPrice)}
    `;

    if (confirm(confirmMessage)) {
      const finalData = {
        items,
        customerName,
        projectName,
        date: new Date().toISOString(),
        status: 'finalized',
        totalPrice
      };
      
      // 確定データを保存
      const existingData = JSON.parse(localStorage.getItem('lifex_finalized_estimates') || '[]');
      existingData.push(finalData);
      localStorage.setItem('lifex_finalized_estimates', JSON.stringify(existingData));
      
      setIsFinalized(true);
      alert('見積が確定されました');
    }
  };

  const handleExportExcel = () => {
    if (!customerName || !projectName) {
      alert('お客様名と工事名を入力してください');
      return;
    }
    exportToExcel(items, customerName, projectName);
  };

  const handleExportPDF = () => {
    if (!customerName || !projectName) {
      alert('お客様名と工事名を入力してください');
      return;
    }
    exportToPDF(items, customerName, projectName);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* オーバーレイ */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />
      
      {/* サイドバー */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-white shadow-xl z-50 flex flex-col">
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-lg font-semibold">見積内容</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {planName && (
            <div className="mt-2 flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 text-yellow-300" />
              <span>選択プラン: <strong>{planName}</strong></span>
            </div>
          )}

          {isFinalized && (
            <div className="mt-3 p-2 bg-white/20 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">この見積は確定済みです</span>
            </div>
          )}
        </div>

        {/* 顧客情報入力 */}
        <div className="p-4 border-b border-gray-200">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                お客様名 *
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                disabled={isFinalized}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                placeholder="例: 山田太郎様"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                工事名 *
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                disabled={isFinalized}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                placeholder="例: リフォーム工事"
              />
            </div>
          </div>
        </div>
        
        {/* カート内容 */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">商品が選択されていません</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const price = item.product.pricing?.find(
                  (p) => p.planId === selectedPlanId || p.plan === selectedPlanId
                )?.price || 0;
                
                return (
                  <div
                    key={`${item.product.id}-${item.selectedVariant.id}`}
                    className="bg-gray-50 rounded-lg p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="text-sm font-medium text-gray-900 flex-1">
                        {item.product.name}
                      </h3>
                      {!isFinalized && (
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      )}
                    </div>
                    
                    <div className="text-xs text-gray-500 mb-2">
                      {item.selectedVariant.color} | {item.product.manufacturer}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {!isFinalized ? (
                          <>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="p-1 hover:bg-gray-200 rounded"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="p-1 hover:bg-gray-200 rounded"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </>
                        ) : (
                          <span className="text-sm">
                            {item.quantity}
                          </span>
                        )}
                        <span className="text-xs text-gray-500">
                          {UNIT_SYMBOLS[item.product.unit] || item.product.unit}
                        </span>
                      </div>

                      <div className="text-right">
                        <p className="text-sm font-semibold">
                          {formatPrice(price * item.quantity)}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatPrice(price)}/{UNIT_SYMBOLS[item.product.unit] || item.product.unit}
                        </p>
                      </div>
                    </div>
                    
                    {item.product.isOption && (
                      <Badge variant="option" className="mt-2">
                        オプション
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
        {/* フッター */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-teal-50 to-teal-100 -mx-4 px-4 py-3 border-y border-teal-200">
              <div>
                <span className="text-lg font-semibold text-gray-700">オプション合計</span>
                <span className="text-xs text-gray-500 ml-2">税別</span>
              </div>
              <span className="text-2xl font-bold text-teal-600">
                {formatPrice(totalPrice)}
              </span>
            </div>
            
            <div className="space-y-2">
              {!isFinalized ? (
                <>
                  <div className="flex gap-2">
                    <button
                      onClick={handleTemporarySave}
                      className="flex-1 px-4 py-2.5 border border-teal-500 text-teal-600 rounded-xl font-medium hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      一時保存
                    </button>
                    <button
                      onClick={handleFinalize}
                      className="flex-1 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      確定
                    </button>
                  </div>
                  <button
                    onClick={clearCart}
                    className="w-full px-4 py-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors text-sm"
                  >
                    選択をクリア
                  </button>
                </>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={handleExportExcel}
                    className="w-full px-4 py-2.5 border border-teal-500 text-teal-600 rounded-xl font-medium hover:bg-teal-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    Excel出力
                  </button>
                  <button
                    onClick={handleExportPDF}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    PDF出力
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};