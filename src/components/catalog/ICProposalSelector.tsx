import React, { useState } from 'react';
import { Check, X, Home, Sofa, Tv, Coffee, Sparkles, Bed, UtensilsCrossed, Armchair, MessageSquare } from 'lucide-react';

// 窓がある部屋のリスト（カーテン用）
const ROOMS_WITH_WINDOWS = [
  { id: 'living', name: 'リビング', icon: Home },
  { id: 'dining', name: 'ダイニング', icon: UtensilsCrossed },
  { id: 'bedroom-main', name: '主寝室', icon: Bed },
  { id: 'bedroom-2', name: '寝室2', icon: Bed },
  { id: 'bedroom-3', name: '寝室3', icon: Bed },
  { id: 'kids-room', name: '子供部屋', icon: Sparkles },
  { id: 'japanese', name: '和室', icon: Home },
];

// 家具の種類リスト
const FURNITURE_TYPES = [
  { id: 'sofa', name: 'ソファ', icon: Sofa },
  { id: 'tv-board', name: 'TVボード', icon: Tv },
  { id: 'center-table', name: 'センターテーブル', icon: Coffee },
  { id: 'rug', name: 'ラグ', icon: Sparkles },
  { id: 'dining-table', name: 'ダイニングテーブル', icon: UtensilsCrossed },
  { id: 'dining-chair', name: 'ダイニングチェア', icon: Armchair },
  { id: 'other', name: 'その他', icon: MessageSquare, hasInput: true },
];

interface ICProposalSelectorProps {
  categoryName: 'カーテン' | '家具';
  onSelect: (selection: ICProposalSelection) => void;
  onCancel: () => void;
}

export interface ICProposalSelection {
  wantsProposal: boolean;
  selectedRooms?: string[]; // カーテン用
  selectedFurnitureTypes?: string[]; // 家具用
  otherText?: string; // その他の自由入力
}

export const ICProposalSelector: React.FC<ICProposalSelectorProps> = ({
  categoryName,
  onSelect,
  onCancel,
}) => {
  const [step, setStep] = useState<'choice' | 'details'>('choice');
  const [_wantsProposal, setWantsProposal] = useState<boolean | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [otherText, setOtherText] = useState('');

  const isCurtain = categoryName === 'カーテン';
  const items = isCurtain ? ROOMS_WITH_WINDOWS : FURNITURE_TYPES;

  const handleChoiceSelect = (wants: boolean) => {
    setWantsProposal(wants);
    if (wants) {
      setStep('details');
    } else {
      onSelect({ wantsProposal: false });
    }
  };

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleConfirm = () => {
    const selection: ICProposalSelection = {
      wantsProposal: true,
      ...(isCurtain
        ? { selectedRooms: selectedItems }
        : { selectedFurnitureTypes: selectedItems }),
      ...(selectedItems.includes('other') && otherText ? { otherText } : {}),
    };
    onSelect(selection);
  };

  // Step 1: 提案希望する/しない選択
  if (step === 'choice') {
    return (
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {categoryName}のIC提案
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          {isCurtain
            ? 'インテリアコーディネーターにカーテンの提案を希望しますか？'
            : 'インテリアコーディネーターに家具の提案を希望しますか？'}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {/* 提案希望する */}
          <button
            onClick={() => handleChoiceSelect(true)}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Check className="w-8 h-8 text-white" />
            </div>
            <span className="font-bold text-gray-800">提案を希望する</span>
            <span className="text-xs text-gray-500 text-center">
              ICがお部屋に合わせてご提案
            </span>
          </button>

          {/* 提案希望しない */}
          <button
            onClick={() => handleChoiceSelect(false)}
            className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-all group"
          >
            <div className="w-16 h-16 rounded-full bg-gray-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <X className="w-8 h-8 text-white" />
            </div>
            <span className="font-bold text-gray-800">提案を希望しない</span>
            <span className="text-xs text-gray-500 text-center">
              {isCurtain ? '施主支給・自分で選ぶ' : '自分で選ぶ・不要'}
            </span>
          </button>
        </div>

        <button
          onClick={onCancel}
          className="mt-6 w-full py-2 text-sm text-gray-500 hover:text-gray-700"
        >
          キャンセル
        </button>
      </div>
    );
  }

  // Step 2: 詳細選択（部屋 or 家具種類）
  return (
    <div className="p-6">
      <button
        onClick={() => setStep('choice')}
        className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
      >
        ← 戻る
      </button>

      <h3 className="text-lg font-bold text-gray-800 mb-2">
        {isCurtain ? 'どの部屋のカーテンを希望しますか？' : '何の家具を希望しますか？'}
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        複数選択できます
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {items.map((item) => {
          const isSelected = selectedItems.includes(item.id);
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                isSelected
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-sm font-medium ${
                isSelected ? 'text-blue-700' : 'text-gray-700'
              }`}>
                {item.name}
              </span>
              {isSelected && (
                <Check className="w-4 h-4 text-blue-500" />
              )}
            </button>
          );
        })}
      </div>

      {/* その他の自由入力 */}
      {selectedItems.includes('other') && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            その他（自由入力）
          </label>
          <input
            type="text"
            value={otherText}
            onChange={(e) => setOtherText(e.target.value)}
            placeholder="希望する家具を入力してください"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50:bg-gray-800 transition-colors"
        >
          キャンセル
        </button>
        <button
          onClick={handleConfirm}
          disabled={selectedItems.length === 0}
          className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors"
        >
          決定 ({selectedItems.length}件選択)
        </button>
      </div>
    </div>
  );
};

export default ICProposalSelector;
