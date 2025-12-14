import { useState, useCallback, useRef } from 'react';
import type { DragEvent } from 'react';

interface DragAndDropOptions<T> {
  items: T[];
  onReorder: (items: T[]) => void;
  idKey?: keyof T;
}

interface DragState {
  isDragging: boolean;
  dragIndex: number | null;
  dragOverIndex: number | null;
}

export function useDragAndDrop<T extends { id?: string }>({
  items,
  onReorder,
  idKey: _idKey = 'id' as keyof T,
}: DragAndDropOptions<T>) {
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    dragIndex: null,
    dragOverIndex: null,
  });

  const dragItemRef = useRef<T | null>(null);
  const dragIndexRef = useRef<number | null>(null);

  const handleDragStart = useCallback(
    (e: DragEvent<HTMLElement>, index: number) => {
      dragItemRef.current = items[index];
      dragIndexRef.current = index;

      // ドラッグ中のスタイル設定
      if (e.currentTarget instanceof HTMLElement) {
        e.currentTarget.style.opacity = '0.5';
      }

      // データ転送設定
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(index));

      setDragState({
        isDragging: true,
        dragIndex: index,
        dragOverIndex: null,
      });
    },
    [items]
  );

  const handleDragEnd = useCallback((e: DragEvent<HTMLElement>) => {
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = '1';
    }

    setDragState({
      isDragging: false,
      dragIndex: null,
      dragOverIndex: null,
    });

    dragItemRef.current = null;
    dragIndexRef.current = null;
  }, []);

  const handleDragOver = useCallback(
    (e: DragEvent<HTMLElement>, index: number) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';

      if (dragIndexRef.current === null || dragIndexRef.current === index) {
        return;
      }

      setDragState((prev) => ({
        ...prev,
        dragOverIndex: index,
      }));
    },
    []
  );

  const handleDragEnter = useCallback(
    (e: DragEvent<HTMLElement>, index: number) => {
      e.preventDefault();

      if (dragIndexRef.current === null || dragIndexRef.current === index) {
        return;
      }

      setDragState((prev) => ({
        ...prev,
        dragOverIndex: index,
      }));
    },
    []
  );

  const handleDragLeave = useCallback((e: DragEvent<HTMLElement>) => {
    // 子要素へのドラッグリーブは無視
    const relatedTarget = e.relatedTarget as HTMLElement | null;
    if (relatedTarget && e.currentTarget.contains(relatedTarget)) {
      return;
    }
  }, []);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLElement>, dropIndex: number) => {
      e.preventDefault();

      const dragIndex = dragIndexRef.current;
      if (dragIndex === null || dragIndex === dropIndex) {
        return;
      }

      // アイテムの並び替え
      const newItems = [...items];
      const [draggedItem] = newItems.splice(dragIndex, 1);
      newItems.splice(dropIndex, 0, draggedItem);

      onReorder(newItems);

      setDragState({
        isDragging: false,
        dragIndex: null,
        dragOverIndex: null,
      });
    },
    [items, onReorder]
  );

  const getDragHandleProps = useCallback(
    (index: number) => ({
      draggable: true,
      onDragStart: (e: DragEvent<HTMLElement>) => handleDragStart(e, index),
      onDragEnd: handleDragEnd,
      onDragOver: (e: DragEvent<HTMLElement>) => handleDragOver(e, index),
      onDragEnter: (e: DragEvent<HTMLElement>) => handleDragEnter(e, index),
      onDragLeave: handleDragLeave,
      onDrop: (e: DragEvent<HTMLElement>) => handleDrop(e, index),
    }),
    [handleDragStart, handleDragEnd, handleDragOver, handleDragEnter, handleDragLeave, handleDrop]
  );

  const getItemStyle = useCallback(
    (index: number): React.CSSProperties => {
      if (!dragState.isDragging) {
        return {};
      }

      if (dragState.dragIndex === index) {
        return {
          opacity: 0.5,
        };
      }

      if (dragState.dragOverIndex === index) {
        const isMovingDown = dragState.dragIndex !== null && dragState.dragIndex < index;
        return {
          transform: isMovingDown ? 'translateY(-4px)' : 'translateY(4px)',
          transition: 'transform 0.2s ease',
        };
      }

      return {};
    },
    [dragState]
  );

  const getDropIndicatorClass = useCallback(
    (index: number): string => {
      if (!dragState.isDragging || dragState.dragOverIndex !== index) {
        return '';
      }

      const isMovingDown = dragState.dragIndex !== null && dragState.dragIndex < index;
      return isMovingDown ? 'border-b-2 border-blue-500' : 'border-t-2 border-blue-500';
    },
    [dragState]
  );

  return {
    dragState,
    getDragHandleProps,
    getItemStyle,
    getDropIndicatorClass,
  };
}

// タッチデバイス向けの並び替え（長押しで移動モード）
export function useTouchDragAndDrop<T>({
  items,
  onReorder,
}: {
  items: T[];
  onReorder: (items: T[]) => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isReorderMode, setIsReorderMode] = useState(false);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchStart = useCallback((index: number) => {
    longPressTimerRef.current = setTimeout(() => {
      setSelectedIndex(index);
      setIsReorderMode(true);
      // 振動フィードバック
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
    }, 500);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  const handleTouchMove = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  const moveItem = useCallback(
    (direction: 'up' | 'down') => {
      if (selectedIndex === null) return;

      const newIndex = direction === 'up' ? selectedIndex - 1 : selectedIndex + 1;
      if (newIndex < 0 || newIndex >= items.length) return;

      const newItems = [...items];
      [newItems[selectedIndex], newItems[newIndex]] = [newItems[newIndex], newItems[selectedIndex]];
      onReorder(newItems);
      setSelectedIndex(newIndex);
    },
    [selectedIndex, items, onReorder]
  );

  const exitReorderMode = useCallback(() => {
    setSelectedIndex(null);
    setIsReorderMode(false);
  }, []);

  return {
    selectedIndex,
    isReorderMode,
    handleTouchStart,
    handleTouchEnd,
    handleTouchMove,
    moveItem,
    exitReorderMode,
  };
}
