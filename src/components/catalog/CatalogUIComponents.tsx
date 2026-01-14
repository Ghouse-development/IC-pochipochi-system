import React from 'react';
import { Package } from 'lucide-react';

// CSSアニメーション定義
export const catalogAnimations = `
  @keyframes pochipochi {
    0% { transform: scale(1); }
    25% { transform: scale(0.95); }
    50% { transform: scale(1.08); }
    75% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
  @keyframes bounce-in {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes confetti-fall {
    0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
    100% { transform: translateY(100vh) rotate(720deg) scale(0); opacity: 0; }
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  @keyframes pulse-ring {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }
  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animate-pochipochi { animation: pochipochi 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .animate-bounce-in { animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .animate-shimmer {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-slide-up { animation: slide-up 0.3s ease-out; }
  .gradient-animate {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
`;

// スケルトンカード
export const SkeletonCard = React.memo(() => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
    <div className="aspect-square animate-shimmer" />
    <div className="p-3 space-y-2">
      <div className="h-3 bg-gray-200 rounded animate-shimmer w-1/3" />
      <div className="h-4 bg-gray-200 rounded animate-shimmer" />
      <div className="h-8 bg-gray-200 rounded-xl animate-shimmer mt-3" />
    </div>
  </div>
));
SkeletonCard.displayName = 'SkeletonCard';

// 空状態
export const EmptyState = React.memo(({ searchTerm, onClear }: { searchTerm: string; onClear: () => void }) => (
  <div
    className="flex flex-col items-center justify-center py-20 animate-slide-up"
    role="status"
    aria-live="polite"
  >
    <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6 animate-float">
      <Package className="w-12 h-12 text-gray-400" aria-hidden="true" />
    </div>
    <h3 className="text-xl font-bold text-gray-700 mb-2">商品が見つかりません</h3>
    <p className="text-gray-500 mb-6 text-center max-w-sm">
      {searchTerm
        ? `「${searchTerm}」に一致する商品がありません`
        : 'このカテゴリには商品がありません'}
    </p>
    {searchTerm && (
      <button
        onClick={onClear}
        className="px-6 py-2.5 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        aria-label="検索条件をクリアする"
      >
        検索をクリア
      </button>
    )}
  </div>
));
EmptyState.displayName = 'EmptyState';

// 紙吹雪コンポーネント（装飾的）
export const Confetti = ({ show }: { show: boolean }) => {
  if (!show) return null;
  const confettiItems = ['🎉', '✨', '⭐', '🌟', '💫', '🎊', '💎', '🔮'];

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true" role="presentation">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-50px',
            animation: `confetti-fall ${2 + Math.random() * 2}s linear forwards`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        >
          {confettiItems[i % confettiItems.length]}
        </div>
      ))}
    </div>
  );
};
