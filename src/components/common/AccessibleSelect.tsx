/**
 * アクセシブルなセレクトコンポーネント
 * ARIA対応、キーボード操作対応
 */
import React, { useState, useRef, useEffect, useCallback, forwardRef } from 'react';
import { ChevronDown, Check, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  description?: string;
  icon?: React.ReactNode;
}

interface AccessibleSelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  className?: string;
  id?: string;
  name?: string;
  'aria-describedby'?: string;
}

export const AccessibleSelect = forwardRef<HTMLButtonElement, AccessibleSelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = '選択してください',
      label,
      error,
      disabled = false,
      required = false,
      searchable = false,
      clearable = false,
      className,
      id,
      name,
      'aria-describedby': ariaDescribedBy,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const selectedOption = options.find((opt) => opt.value === value);

    // フィルタリングされたオプション
    const filteredOptions = searchable
      ? options.filter((opt) =>
          opt.label.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : options;

    // 開閉のトグル
    const toggleOpen = useCallback(() => {
      if (disabled) return;
      setIsOpen((prev) => !prev);
      setFocusedIndex(-1);
      setSearchTerm('');
    }, [disabled]);

    // 選択処理
    const handleSelect = useCallback(
      (optionValue: string) => {
        const option = options.find((opt) => opt.value === optionValue);
        if (option?.disabled) return;
        onChange(optionValue);
        setIsOpen(false);
        setSearchTerm('');
      },
      [onChange, options]
    );

    // クリア処理
    const handleClear = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange('');
      },
      [onChange]
    );

    // キーボード操作
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        switch (e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault();
            if (isOpen && focusedIndex >= 0) {
              handleSelect(filteredOptions[focusedIndex].value);
            } else {
              toggleOpen();
            }
            break;
          case 'ArrowDown':
            e.preventDefault();
            if (!isOpen) {
              setIsOpen(true);
            } else {
              setFocusedIndex((prev) =>
                prev < filteredOptions.length - 1 ? prev + 1 : 0
              );
            }
            break;
          case 'ArrowUp':
            e.preventDefault();
            if (!isOpen) {
              setIsOpen(true);
            } else {
              setFocusedIndex((prev) =>
                prev > 0 ? prev - 1 : filteredOptions.length - 1
              );
            }
            break;
          case 'Escape':
            e.preventDefault();
            setIsOpen(false);
            setFocusedIndex(-1);
            break;
          case 'Home':
            e.preventDefault();
            setFocusedIndex(0);
            break;
          case 'End':
            e.preventDefault();
            setFocusedIndex(filteredOptions.length - 1);
            break;
          case 'Tab':
            setIsOpen(false);
            break;
        }
      },
      [isOpen, focusedIndex, filteredOptions, handleSelect, toggleOpen]
    );

    // 外部クリックで閉じる
    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // 開いた時に検索フィールドにフォーカス
    useEffect(() => {
      if (isOpen && searchable && searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, [isOpen, searchable]);

    // フォーカスされたアイテムをスクロールして表示
    useEffect(() => {
      if (isOpen && focusedIndex >= 0 && listRef.current) {
        const item = listRef.current.children[focusedIndex] as HTMLElement;
        if (item) {
          item.scrollIntoView({ block: 'nearest' });
        }
      }
    }, [isOpen, focusedIndex]);

    const selectId = id || `select-${Math.random().toString(36).slice(2)}`;
    const listboxId = `${selectId}-listbox`;
    const errorId = `${selectId}-error`;

    return (
      <div ref={containerRef} className={cn('relative', className)}>
        {/* ラベル */}
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        {/* トリガーボタン */}
        <button
          ref={ref}
          type="button"
          id={selectId}
          name={name}
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-invalid={!!error}
          aria-describedby={cn(error && errorId, ariaDescribedBy)}
          aria-required={required}
          disabled={disabled}
          onClick={toggleOpen}
          onKeyDown={handleKeyDown}
          className={cn(
            'w-full px-3 py-2 text-left bg-white dark:bg-gray-800 border rounded-lg transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-blue-500',
            'flex items-center justify-between gap-2',
            disabled && 'opacity-50 cursor-not-allowed',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600'
          )}
        >
          <span
            className={cn(
              'truncate',
              selectedOption ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500'
            )}
          >
            {selectedOption ? (
              <span className="flex items-center gap-2">
                {selectedOption.icon}
                {selectedOption.label}
              </span>
            ) : (
              placeholder
            )}
          </span>
          <div className="flex items-center gap-1">
            {clearable && value && (
              <button
                type="button"
                onClick={handleClear}
                className="p-0.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                aria-label="選択をクリア"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
            <ChevronDown
              className={cn(
                'w-4 h-4 text-gray-400 transition-transform',
                isOpen && 'rotate-180'
              )}
            />
          </div>
        </button>

        {/* ドロップダウン */}
        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg overflow-hidden">
            {/* 検索フィールド */}
            {searchable && (
              <div className="p-2 border-b dark:border-gray-700">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="検索..."
                  className="w-full px-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  aria-label="オプションを検索"
                />
              </div>
            )}

            {/* オプションリスト */}
            <ul
              ref={listRef}
              role="listbox"
              id={listboxId}
              aria-labelledby={selectId}
              className="max-h-60 overflow-y-auto py-1"
            >
              {filteredOptions.length === 0 ? (
                <li className="px-3 py-2 text-sm text-gray-500 text-center">
                  該当なし
                </li>
              ) : (
                filteredOptions.map((option, index) => (
                  <li
                    key={option.value}
                    role="option"
                    id={`${listboxId}-option-${index}`}
                    aria-selected={option.value === value}
                    aria-disabled={option.disabled}
                    onClick={() => !option.disabled && handleSelect(option.value)}
                    onMouseEnter={() => setFocusedIndex(index)}
                    className={cn(
                      'px-3 py-2 cursor-pointer flex items-center justify-between gap-2',
                      option.disabled
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-700',
                      focusedIndex === index && 'bg-gray-100 dark:bg-gray-700',
                      option.value === value && 'bg-blue-50 dark:bg-blue-900/30'
                    )}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {option.icon}
                      <div className="min-w-0">
                        <div className="text-sm text-gray-900 dark:text-gray-100 truncate">
                          {option.label}
                        </div>
                        {option.description && (
                          <div className="text-xs text-gray-500 truncate">
                            {option.description}
                          </div>
                        )}
                      </div>
                    </div>
                    {option.value === value && (
                      <Check className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    )}
                  </li>
                ))
              )}
            </ul>
          </div>
        )}

        {/* エラーメッセージ */}
        {error && (
          <p id={errorId} role="alert" className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

AccessibleSelect.displayName = 'AccessibleSelect';
