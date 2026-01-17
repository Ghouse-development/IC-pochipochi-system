/**
 * 仕様確定コンポーネント
 * お客様が全ての選択を完了したら「仕様確定」ボタンを押して確定
 * 確定後は編集不可（スタッフのみ解除可能）
 */
import React, { useState } from 'react';
import { Lock, Unlock, AlertTriangle, Check, Clock } from 'lucide-react';
import { useSelectionStore } from '../../stores/useSelectionStore';
import { useAuth } from '../../contexts/AuthContext';

interface SpecificationConfirmationProps {
  unconfirmedCategories?: string[];
  requiredCategories?: string[];
}

export const SpecificationConfirmation: React.FC<SpecificationConfirmationProps> = ({
  unconfirmedCategories = [],
  requiredCategories = [],
}) => {
  const {
    projectStatus,
    setProjectStatus,
    getProjectStatusInfo,
    getUnconfirmedCategories,
  } = useSelectionStore();

  const { user } = useAuth();
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showUnlockDialog, setShowUnlockDialog] = useState(false);

  const statusInfo = getProjectStatusInfo();
  const isFinalized = projectStatus === 'finalized';
  const isStaff = user?.role === 'admin' || user?.role === 'super_admin' || user?.role === 'coordinator';

  // 未確認カテゴリを取得
  const actualUnconfirmed = unconfirmedCategories.length > 0
    ? unconfirmedCategories
    : getUnconfirmedCategories(requiredCategories);

  const canConfirm = actualUnconfirmed.length === 0;

  const handleConfirm = () => {
    if (!canConfirm) return;

    setProjectStatus('finalized', user?.email || 'customer', '仕様確定');
    setShowConfirmDialog(false);
  };

  const handleUnlock = () => {
    if (!isStaff) return;

    setProjectStatus('confirmed', user?.email || 'staff', '確定解除（スタッフ操作）');
    setShowUnlockDialog(false);
  };

  // 確定済み表示
  if (isFinalized) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-full">
            <Lock className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-blue-900">仕様確定済み</h3>
            <p className="text-sm text-blue-600">
              {statusInfo.confirmedAt && new Date(statusInfo.confirmedAt).toLocaleDateString('ja-JP')} に確定されました
            </p>
          </div>
        </div>

        <p className="text-sm text-blue-700 mb-4">
          仕様が確定されているため、変更はできません。<br />
          変更が必要な場合は担当スタッフにご連絡ください。
        </p>

        {/* スタッフのみ解除ボタン表示 */}
        {isStaff && (
          <button
            onClick={() => setShowUnlockDialog(true)}
            className="flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors"
          >
            <Unlock className="w-4 h-4" />
            確定を解除する（スタッフ操作）
          </button>
        )}

        {/* 解除確認ダイアログ */}
        {showUnlockDialog && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-full">
                  <Unlock className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900">確定を解除しますか？</h3>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                確定を解除すると、お客様が再度選択を変更できるようになります。
                本当に解除してよろしいですか？
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowUnlockDialog(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  キャンセル
                </button>
                <button
                  onClick={handleUnlock}
                  className="flex-1 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                >
                  解除する
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 未確定項目がある場合
  if (!canConfirm) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-amber-100 rounded-full">
            <Clock className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h3 className="font-bold text-amber-900">選択中</h3>
            <p className="text-sm text-amber-600">
              {actualUnconfirmed.length}件の未選択カテゴリがあります
            </p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-amber-700 mb-2">
            以下のカテゴリの選択を完了してください：
          </p>
          <ul className="text-sm text-amber-600 space-y-1">
            {actualUnconfirmed.slice(0, 5).map(cat => (
              <li key={cat} className="flex items-center gap-2">
                <AlertTriangle className="w-3 h-3" />
                {cat}
              </li>
            ))}
            {actualUnconfirmed.length > 5 && (
              <li className="text-amber-500">...他{actualUnconfirmed.length - 5}件</li>
            )}
          </ul>
        </div>

        <button
          disabled
          className="w-full py-3 px-4 bg-gray-200 text-gray-500 rounded-xl font-medium cursor-not-allowed"
        >
          全ての選択を完了すると確定できます
        </button>
      </div>
    );
  }

  // 確定可能状態
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-full">
          <Check className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-bold text-blue-900">選択完了</h3>
          <p className="text-sm text-blue-600">
            全てのカテゴリの選択が完了しました
          </p>
        </div>
      </div>

      <p className="text-sm text-blue-700 mb-4">
        仕様を確定すると、後から変更ができなくなります。<br />
        選択内容をよくご確認の上、確定してください。
      </p>

      <button
        onClick={() => setShowConfirmDialog(true)}
        className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
      >
        仕様を確定する
      </button>

      {/* 確定確認ダイアログ */}
      {showConfirmDialog && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900">仕様を確定しますか？</h3>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-700 font-medium mb-2">
                ⚠️ この操作は取り消せません
              </p>
              <p className="text-sm text-red-600">
                仕様を確定すると、お客様による変更ができなくなります。
                変更が必要な場合は担当スタッフにご連絡ください。
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                確定する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecificationConfirmation;
