/**
 * IC提案依頼カード
 * カーテン・ブラインド・家具などICに相談すると良いカテゴリで表示
 * 「自分で決める」vs「ICにおまかせ」の選択を促す
 */
import { Sparkles, UserCheck, ArrowRight, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useSelectionStore } from '../../stores/useSelectionStore';
import type { ICConsultationOption } from './catalogUtils';

interface ICConsultationCardProps {
  categoryName: string;
  option: ICConsultationOption;
  onRequestConsultation: () => void;
  className?: string;
}

export function ICConsultationCard({
  categoryName,
  option,
  onRequestConsultation,
  className,
}: ICConsultationCardProps) {
  const { selections, setSelection } = useSelectionStore();
  const currentSelection = selections[categoryName];
  const isConsultationRequested = currentSelection?.status === 'selected' &&
    currentSelection?.note?.includes('IC提案依頼');

  const handleRequestConsultation = () => {
    setSelection(categoryName, {
      status: 'selected',
      selectedProductName: 'ICにおまかせ',
      note: 'IC提案依頼：インテリアコーディネーターからの提案を希望',
      confirmedAt: new Date().toISOString(),
    });
    onRequestConsultation();
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl border-2 transition-all duration-300',
        isConsultationRequested
          ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg'
          : 'border-amber-200 bg-gradient-to-br from-white to-amber-50/30 hover:border-amber-300 hover:shadow-md',
        className
      )}
    >
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <span className="font-bold">{option.title}</span>
          {isConsultationRequested && (
            <span className="ml-auto flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">
              <Check className="h-3 w-3" />
              依頼済み
            </span>
          )}
        </div>
      </div>

      {/* コンテンツ */}
      <div className="p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          {option.description}
        </p>

        {/* メリット */}
        <div className="mt-3 flex items-start gap-2 rounded-lg bg-amber-100/50 p-3">
          <UserCheck className="h-5 w-5 flex-shrink-0 text-amber-600 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-amber-800">プロに任せるメリット</p>
            <p className="text-xs text-amber-700 mt-0.5">{option.benefit}</p>
          </div>
        </div>

        {/* ボタン */}
        {!isConsultationRequested ? (
          <button
            onClick={handleRequestConsultation}
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-white font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
          >
            <Sparkles className="h-4 w-4" />
            ICにおまかせする
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-amber-100 px-4 py-3 text-amber-700 font-medium">
            <Check className="h-4 w-4" />
            インテリアコーディネーターに依頼しました
          </div>
        )}

        {/* 補足 */}
        <p className="mt-3 text-center text-xs text-gray-500">
          お引渡し前にICから提案書をお届けします
        </p>
      </div>
    </div>
  );
}

/**
 * 「自分で選ぶ」カード（IC提案と対になるカード）
 */
interface SelfSelectCardProps {
  categoryName: string;
  onSelect: () => void;
  className?: string;
}

export function SelfSelectCard({
  categoryName,
  onSelect,
  className,
}: SelfSelectCardProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        'w-full rounded-xl border-2 border-gray-200 bg-white p-4 text-left transition-all duration-200 hover:border-blue-300 hover:shadow-md',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
          <UserCheck className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <p className="font-medium text-gray-900">自分で選ぶ</p>
          <p className="text-xs text-gray-500">商品一覧から{categoryName}を選択</p>
        </div>
        <ArrowRight className="ml-auto h-5 w-5 text-gray-400" />
      </div>
    </button>
  );
}
