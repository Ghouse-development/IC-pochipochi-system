import React, { useState, useEffect } from 'react';
import { X, Trash2, Plus, Minus, Save, CheckCircle, Download, FileText, Star, ShoppingBag, FileSpreadsheet, Presentation, Package, Building2 } from 'lucide-react';
import { useCartStore } from '../../stores/useCartStore';
import { useOperationLogStore } from '../../stores/useOperationLogStore';
import { formatPrice } from '../../lib/utils';
import { UNIT_SYMBOLS } from '../../types/product';
import { Badge } from '../common/Badge';
import { useToast } from '../common/Toast';
import { ConfirmDialog } from '../common/ConfirmDialog';
import { exportToExcel } from '../../utils/estimateExport';
import { openSpecificationWindow } from '../../utils/specificationPDF';
import { generatePresentation } from '../../utils/presentationGenerator';
import { supabase } from '../../lib/supabase';
import { createLogger } from '../../lib/logger';
import { STORAGE_KEYS } from '../../lib/constants';
import { ShowroomEstimateManager } from '../showroom/ShowroomEstimateManager';
import { ReportExportModal } from '../export/ReportExportModal';

const logger = createLogger('CartSidebarEnhanced');

interface CartSidebarEnhancedProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartSidebarEnhanced: React.FC<CartSidebarEnhancedProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart, selectedPlanId } = useCartStore();
  const addLog = useOperationLogStore((state) => state.addLog);
  const toast = useToast();
  const [isFinalized, setIsFinalized] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [planName, setPlanName] = useState('');
  const [showExportMenu, setShowExportMenu] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showFinalizeConfirm, setShowFinalizeConfirm] = useState(false);
  const [showShowroomManager, setShowShowroomManager] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

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

  // 下書き見積の自動復元（マウント時に一度だけ実行）
  useEffect(() => {
    const draftData = localStorage.getItem(STORAGE_KEYS.DRAFT_ESTIMATE);
    // items.length === 0 はガード条件として使用（依存配列に含めると無限ループの原因となる）
    if (draftData && items.length === 0) {
      try {
        const parsed = JSON.parse(draftData);
        // データの形式チェック
        if (!parsed || typeof parsed !== 'object' || !parsed.date) {
          throw new Error('Invalid draft format');
        }
        // 24時間以内の下書きのみ復元
        const draftDate = new Date(parsed.date);
        if (isNaN(draftDate.getTime())) {
          throw new Error('Invalid date format');
        }
        const hoursSinceSave = (Date.now() - draftDate.getTime()) / (1000 * 60 * 60);
        if (hoursSinceSave < 24 && parsed.customerName) {
          setCustomerName((parsed.customerName || '').trim());
          setProjectName((parsed.projectName || '').trim());
          toast.info('下書き復元', '前回の入力内容を復元しました');
        } else if (hoursSinceSave >= 24) {
          // 古い下書きは削除
          localStorage.removeItem(STORAGE_KEYS.DRAFT_ESTIMATE);
        }
      } catch (error) {
        // 破損した下書きを削除
        logger.warn('Draft restore failed:', error);
        localStorage.removeItem('lifex_draft_estimate');
        addLog('error', 'other', { itemName: '下書き復元エラー', error: String(error) });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addLog, toast]);

  const handleTemporarySave = () => {
    const saveData = {
      items,
      customerName,
      projectName,
      date: new Date().toISOString(),
      status: 'draft'
    };
    localStorage.setItem(STORAGE_KEYS.DRAFT_ESTIMATE, JSON.stringify(saveData));
    addLog('estimate_save', 'other', { itemName: '見積を一時保存', customerName, projectName, itemCount: items.length });
    toast.success('一時保存完了', '見積が一時保存されました');
  };

  const handleFinalize = () => {
    const trimmedCustomerName = customerName.trim();
    const trimmedProjectName = projectName.trim();

    if (!trimmedCustomerName || !trimmedProjectName) {
      toast.warning('入力エラー', 'お客様名と工事名を入力してください');
      return;
    }
    if (trimmedCustomerName.length > 100 || trimmedProjectName.length > 100) {
      toast.warning('入力エラー', 'お客様名・工事名は100文字以内で入力してください');
      return;
    }
    // トリムした値を反映
    setCustomerName(trimmedCustomerName);
    setProjectName(trimmedProjectName);
    setShowFinalizeConfirm(true);
  };

  const executeFinalize = () => {
    const finalData = {
      items,
      customerName,
      projectName,
      date: new Date().toISOString(),
      status: 'finalized',
      totalPrice
    };

    // 確定データを保存
    let existingData: typeof finalData[] = [];
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.FINALIZED_ESTIMATES);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          existingData = parsed;
        }
      }
    } catch (error) {
      logger.warn('Failed to parse finalized estimates:', error);
      addLog('error', 'other', { itemName: '確定データの読み込みエラー', error: String(error) });
    }
    existingData.push(finalData);
    localStorage.setItem(STORAGE_KEYS.FINALIZED_ESTIMATES, JSON.stringify(existingData));

    addLog('estimate_finalize', 'other', { itemName: '見積を確定', customerName, projectName, totalPrice, itemCount: items.length });
    setIsFinalized(true);
    setShowFinalizeConfirm(false);
    toast.success('確定完了', '見積が確定されました');
  };

  const handleClearCart = () => {
    setShowClearConfirm(true);
  };

  const executeClearCart = () => {
    addLog('cart_clear', 'remove', { itemName: '選択をクリア', itemCount: items.length });
    clearCart();
    setShowClearConfirm(false);
    toast.success('クリア完了', '選択をクリアしました');
  };

  const handleExportExcel = async () => {
    if (!customerName || !projectName) {
      toast.warning('入力エラー', 'お客様名と工事名を入力してください');
      return;
    }
    addLog('excel_export', 'export', { action: 'Excel見積書を出力', customerName, projectName });
    await exportToExcel(items, { customerName, projectName });
    toast.success('Excel出力完了', '見積書をダウンロードしました');
  };

  const handleExportPDF = () => {
    if (!customerName || !projectName) {
      toast.warning('入力エラー', 'お客様名と工事名を入力してください');
      return;
    }
    addLog('pdf_export', 'export', { action: 'PDF見積書を出力', customerName, projectName });
    openSpecificationWindow({
      customerName,
      projectName,
      planName: planName || 'LACIE',
      date: new Date().toLocaleDateString('ja-JP'),
      items,
      staffName: '',
      companyName: 'Gハウス'
    });
    toast.success('PDF出力完了', '仕様書を表示しました（印刷でPDF化できます）');
  };

  const handleExportSpec = () => {
    if (!customerName || !projectName) {
      toast.warning('入力エラー', 'お客様名と工事名を入力してください');
      return;
    }
    addLog('spec_export', 'export', { action: '仕様書を出力', customerName, projectName, itemCount: items.length });
    openSpecificationWindow({
      customerName,
      projectName,
      planName: planName || 'LACIE',
      date: new Date().toLocaleDateString('ja-JP'),
      items,
      staffName: '',
      companyName: 'Gハウス'
    });
    toast.success('仕様書出力完了', '仕様書を表示しました');
  };

  const handleExportPresentation = async () => {
    if (!customerName || !projectName) {
      toast.warning('入力エラー', 'お客様名と工事名を入力してください');
      return;
    }
    addLog('presentation_export', 'export', { action: '提案資料を出力', customerName, projectName, itemCount: items.length });
    await generatePresentation(items, { customerName, projectName });
    toast.success('提案資料出力完了', '提案資料を表示しました');
  };

  const handleExportAll = async () => {
    if (!customerName || !projectName) {
      toast.warning('入力エラー', 'お客様名と工事名を入力してください');
      return;
    }
    setIsExporting(true);
    addLog('bulk_export', 'export', { action: '一括出力を実行', customerName, projectName, itemCount: items.length });
    try {
      // Excel見積書
      await exportToExcel(items, { customerName, projectName });
      // 仕様書（HTML）
      openSpecificationWindow({
        customerName,
        projectName,
        planName: planName || 'LACIE',
        date: new Date().toLocaleDateString('ja-JP'),
        items,
        staffName: '',
        companyName: 'Gハウス'
      });
      // プレゼン資料（HTML）
      await generatePresentation(items, { customerName, projectName });
      toast.success('一括出力完了', '全形式のダウンロード・表示が完了しました');
    } catch (error) {
      logger.error('Export error:', error);
      toast.error('エラー', 'エクスポート中にエラーが発生しました');
    } finally {
      setIsExporting(false);
      setShowExportMenu(false);
    }
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

          {/* ショールーム見積追加ボタン */}
          {!isFinalized && (
            <button
              onClick={() => setShowShowroomManager(true)}
              className="mt-3 w-full py-2 px-3 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Building2 className="w-4 h-4" />
              ショールーム見積を追加
            </button>
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
        
        {/* 選択内容 */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">商品が選択されていません</h3>
              <p className="text-sm text-gray-500 mb-6">
                カタログから商品を選んで、<br />
                「選択する」ボタンを押してください
              </p>
              <div className="bg-blue-50 rounded-lg p-4 text-left">
                <p className="text-xs font-medium text-blue-800 mb-2">選び方のコツ</p>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• 外装 → 内装 → 設備 の順に選ぶとスムーズ</li>
                  <li>• 迷ったら「不要」で後から検討できます</li>
                  <li>• 右下の進捗バーで残りを確認</li>
                </ul>
              </div>
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
                  {/* レポート出力ボタン */}
                  <button
                    onClick={() => setShowReportModal(true)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <FileText className="w-5 h-5" />
                    レポート出力
                  </button>

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
                    onClick={handleClearCart}
                    className="w-full px-4 py-2 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-sm"
                    aria-label="選択した商品をすべてクリア"
                  >
                    選択をクリア
                  </button>
                </>
              ) : (
                <div className="space-y-2">
                  {/* エクスポートメニュートグル */}
                  <button
                    onClick={() => setShowExportMenu(!showExportMenu)}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-medium hover:from-teal-600 hover:to-teal-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    書類をダウンロード
                  </button>

                  {/* エクスポートメニュー */}
                  {showExportMenu && (
                    <div className="bg-gray-50 rounded-xl p-3 space-y-2 border border-gray-200">
                      <p className="text-xs text-gray-500 font-medium mb-2">出力形式を選択</p>

                      <button
                        onClick={handleExportPDF}
                        className="w-full px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4 text-red-500" />
                        見積書（PDF）
                        <span className="text-xs text-gray-400 ml-auto">提出用</span>
                      </button>

                      <button
                        onClick={handleExportExcel}
                        className="w-full px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <FileSpreadsheet className="w-4 h-4 text-green-500" />
                        見積書（Excel）
                        <span className="text-xs text-gray-400 ml-auto">編集可能</span>
                      </button>

                      <button
                        onClick={handleExportSpec}
                        className="w-full px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Package className="w-4 h-4 text-blue-500" />
                        仕様書（Excel）
                        <span className="text-xs text-gray-400 ml-auto">詳細情報</span>
                      </button>

                      <button
                        onClick={() => {
                          if (!customerName || !projectName) {
                            toast.warning('入力エラー', 'お客様名と工事名を入力してください');
                            return;
                          }
                          openSpecificationWindow({
                            customerName,
                            projectName,
                            planName: planName || 'LACIE',
                            date: new Date().toLocaleDateString('ja-JP'),
                            items,
                            staffName: '',
                            companyName: 'Gハウス'
                          });
                        }}
                        className="w-full px-3 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg text-sm hover:from-indigo-600 hover:to-purple-600 transition-colors flex items-center gap-2"
                      >
                        <FileText className="w-4 h-4" />
                        美しい仕様書（印刷用）
                        <span className="text-xs text-white/70 ml-auto">推奨</span>
                      </button>

                      <button
                        onClick={handleExportPresentation}
                        className="w-full px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Presentation className="w-4 h-4 text-purple-500" />
                        提案資料（Excel）
                        <span className="text-xs text-gray-400 ml-auto">カテゴリ別</span>
                      </button>

                      <div className="border-t border-gray-200 pt-2 mt-2">
                        <button
                          onClick={handleExportAll}
                          disabled={isExporting}
                          className="w-full px-3 py-2 bg-teal-500 text-white rounded-lg text-sm hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isExporting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              出力中...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4" />
                              全形式を一括ダウンロード
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 確認ダイアログ */}
      <ConfirmDialog
        isOpen={showClearConfirm}
        onClose={() => setShowClearConfirm(false)}
        onConfirm={executeClearCart}
        title="選択をクリア"
        message={`選択中の${items.length}件の商品をすべてクリアしますか？\n\nこの操作は取り消せません。`}
        variant="danger"
        confirmText="クリアする"
      />

      <ConfirmDialog
        isOpen={showFinalizeConfirm}
        onClose={() => setShowFinalizeConfirm(false)}
        onConfirm={executeFinalize}
        title="見積を確定"
        message={`確定後は変更できません。\n以下の内容で確定してよろしいですか？\n\nお客様名: ${customerName}\n工事名: ${projectName}\n合計金額: ${formatPrice(totalPrice)}`}
        variant="warning"
        confirmText="確定する"
      />

      {/* ショールーム見積マネージャー */}
      <ShowroomEstimateManager
        isOpen={showShowroomManager}
        onClose={() => setShowShowroomManager(false)}
      />

      {/* レポート出力モーダル */}
      <ReportExportModal
        isOpen={showReportModal}
        onClose={() => setShowReportModal(false)}
        customerName={customerName}
        projectName={projectName}
      />
    </>
  );
};