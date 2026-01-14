import React, { useState } from 'react';
import { PageHeader } from './PageHeader';
import { SelectionCard } from './SelectionCard';

// 窓がある部屋のリスト（カーテン用）
const ROOMS_WITH_WINDOWS = [
  { id: 'living', name: 'リビング', emoji: '🏠' },
  { id: 'dining', name: 'ダイニング', emoji: '🍽️' },
  { id: 'bedroom-main', name: '主寝室', emoji: '🛏️' },
  { id: 'bedroom-2', name: '寝室2', emoji: '🛏️' },
  { id: 'bedroom-3', name: '寝室3', emoji: '🛏️' },
  { id: 'kids-room', name: '子供部屋', emoji: '✨' },
  { id: 'japanese', name: '和室', emoji: '🏯' },
];

// 家具の種類リスト
const FURNITURE_TYPES = [
  { id: 'sofa', name: 'ソファ', emoji: '🛋️' },
  { id: 'tv-board', name: 'TVボード', emoji: '📺' },
  { id: 'center-table', name: 'センターテーブル', emoji: '☕' },
  { id: 'rug', name: 'ラグ', emoji: '🧶' },
  { id: 'dining-table', name: 'ダイニングテーブル', emoji: '🍽️' },
  { id: 'dining-chair', name: 'ダイニングチェア', emoji: '🪑' },
  { id: 'other', name: 'その他', emoji: '💬', hasInput: true },
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
      <div className="max-w-6xl mx-auto px-4">
        <PageHeader
          title={`${categoryName}のIC提案`}
          subtitle={isCurtain
            ? 'インテリアコーディネーターにカーテンの提案を希望しますか？'
            : 'インテリアコーディネーターに家具の提案を希望しますか？'}
        />

        <div className="grid grid-cols-6 gap-2">
          {/* 提案希望する */}
          <SelectionCard
            id="want-proposal"
            name="提案を希望する"
            placeholderEmoji="✓"
            placeholderBgColor="from-blue-100 to-cyan-100"
            isSelected={false}
            onClick={() => handleChoiceSelect(true)}
          />

          {/* 提案希望しない */}
          <SelectionCard
            id="no-proposal"
            name="提案を希望しない"
            placeholderEmoji="✕"
            placeholderBgColor="from-gray-100 to-gray-200"
            isSelected={false}
            onClick={() => handleChoiceSelect(false)}
          />
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
    <div className="max-w-6xl mx-auto px-4">
      <button
        onClick={() => setStep('choice')}
        className="mb-4 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
      >
        ← 戻る
      </button>

      <PageHeader
        title={isCurtain ? 'どの部屋のカーテンを希望しますか？' : '何の家具を希望しますか？'}
        subtitle="複数選択できます"
      />

      <div className="grid grid-cols-6 gap-2 mb-4">
        {items.map((item) => {
          const isSelected = selectedItems.includes(item.id);

          return (
            <SelectionCard
              key={item.id}
              id={item.id}
              name={item.name}
              placeholderEmoji={item.emoji}
              placeholderBgColor={isSelected ? 'from-blue-100 to-cyan-100' : 'from-gray-100 to-gray-200'}
              isSelected={isSelected}
              onClick={() => toggleItem(item.id)}
            />
          );
        })}
      </div>

      {/* その他の自由入力 */}
      {selectedItems.includes('other') && (
        <div className="mb-4">
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
