import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SwipeCarouselProps {
  children: React.ReactNode[];
  itemWidth?: number;
  gap?: number;
  showArrows?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export const SwipeCarousel: React.FC<SwipeCarouselProps> = ({
  children,
  itemWidth = 280,
  gap = 16,
  showArrows = true,
  showDots = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const itemCount = children.length;
  const visibleItems = containerRef.current
    ? Math.floor(containerRef.current.clientWidth / (itemWidth + gap))
    : 1;
  const maxIndex = Math.max(0, itemCount - visibleItems);

  // スクロール位置を更新
  const scrollToIndex = useCallback((index: number) => {
    if (!containerRef.current) return;
    const newIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(newIndex);
    containerRef.current.scrollTo({
      left: newIndex * (itemWidth + gap),
      behavior: 'smooth',
    });
  }, [itemWidth, gap, maxIndex]);

  // 自動再生
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const next = prev >= maxIndex ? 0 : prev + 1;
        scrollToIndex(next);
        return next;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, maxIndex, scrollToIndex]);

  // タッチ/マウスイベントハンドラ
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startX - clientX;
    containerRef.current.scrollLeft = scrollLeft + diff;
  };

  const handleDragEnd = () => {
    if (!isDragging || !containerRef.current) return;
    setIsDragging(false);

    // スナップ位置を計算
    const scrollPos = containerRef.current.scrollLeft;
    const newIndex = Math.round(scrollPos / (itemWidth + gap));
    scrollToIndex(newIndex);
  };

  // キーボードナビゲーション
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scrollToIndex(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      scrollToIndex(currentIndex + 1);
    }
  };

  // スクロールイベントで現在のインデックスを追跡
  const handleScroll = () => {
    if (!containerRef.current || isDragging) return;
    const scrollPos = containerRef.current.scrollLeft;
    const newIndex = Math.round(scrollPos / (itemWidth + gap));
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className={`relative ${className}`} onKeyDown={handleKeyDown} tabIndex={0}>
      {/* メインコンテナ */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        onScroll={handleScroll}
      >
        <div
          className="flex"
          style={{ gap: `${gap}px` }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start"
              style={{ width: `${itemWidth}px` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* 矢印ナビゲーション */}
      {showArrows && itemCount > visibleItems && (
        <>
          <button
            onClick={() => scrollToIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
            className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center transition-all z-10 ${
              currentIndex === 0
                ? 'opacity-0 pointer-events-none'
                : 'hover:bg-white hover:scale-110'
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={() => scrollToIndex(currentIndex + 1)}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center transition-all z-10 ${
              currentIndex >= maxIndex
                ? 'opacity-0 pointer-events-none'
                : 'hover:bg-white hover:scale-110'
            }`}
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </>
      )}

      {/* ドットインジケーター */}
      {showDots && itemCount > visibleItems && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-teal-500 w-4'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {/* CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
