/**
 * 強化された検索フック
 * 全文検索、ファジー検索、検索履歴
 */
import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { useDebounce } from './useDebounce';

interface SearchableItem {
  id: string;
  [key: string]: unknown;
}

interface UseEnhancedSearchOptions<T extends SearchableItem> {
  items: T[];
  searchFields: (keyof T)[];
  debounceMs?: number;
  minQueryLength?: number;
  maxResults?: number;
  enableFuzzy?: boolean;
  enableHistory?: boolean;
  historyKey?: string;
  maxHistoryItems?: number;
}

interface SearchResult<T> {
  item: T;
  score: number;
  matches: {
    field: keyof T;
    indices: [number, number][];
  }[];
}

// 編集距離（レーベンシュタイン距離）を計算
function levenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // 置換
          matrix[i][j - 1] + 1, // 挿入
          matrix[i - 1][j] + 1 // 削除
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// ファジーマッチのスコアを計算
function calculateFuzzyScore(query: string, target: string): number {
  const q = query.toLowerCase();
  const t = target.toLowerCase();

  // 完全一致
  if (t === q) return 1;

  // 含まれている
  if (t.includes(q)) {
    return 0.9 - (t.indexOf(q) / t.length) * 0.1;
  }

  // 先頭一致
  if (t.startsWith(q)) {
    return 0.85;
  }

  // 編集距離によるスコア
  const distance = levenshteinDistance(q, t);
  const maxLength = Math.max(q.length, t.length);
  const similarity = 1 - distance / maxLength;

  return similarity > 0.3 ? similarity * 0.7 : 0;
}

// マッチした位置を検索
function findMatchIndices(query: string, target: string): [number, number][] {
  const indices: [number, number][] = [];
  const q = query.toLowerCase();
  const t = target.toLowerCase();

  let pos = 0;
  while (pos < t.length) {
    const index = t.indexOf(q, pos);
    if (index === -1) break;
    indices.push([index, index + q.length]);
    pos = index + 1;
  }

  return indices;
}

export function useEnhancedSearch<T extends SearchableItem>(
  options: UseEnhancedSearchOptions<T>
) {
  const {
    items,
    searchFields,
    debounceMs = 300,
    minQueryLength = 1,
    maxResults = 50,
    enableFuzzy = true,
    enableHistory = true,
    historyKey = 'search_history',
    maxHistoryItems = 10,
  } = options;

  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const debouncedQuery = useDebounce(query, debounceMs);
  const searchIndexRef = useRef<Map<string, string[]>>(new Map());

  // 検索インデックスを構築
  useEffect(() => {
    const index = new Map<string, string[]>();

    items.forEach((item) => {
      const tokens: string[] = [];
      searchFields.forEach((field) => {
        const value = item[field];
        if (typeof value === 'string') {
          // 単語に分割してインデックス化
          const words = value.toLowerCase().split(/\s+/);
          tokens.push(...words, value.toLowerCase());
        }
      });
      index.set(item.id, tokens);
    });

    searchIndexRef.current = index;
  }, [items, searchFields]);

  // 検索履歴を読み込み
  useEffect(() => {
    if (enableHistory) {
      try {
        const saved = localStorage.getItem(historyKey);
        if (saved) {
          setHistory(JSON.parse(saved));
        }
      } catch {
        // 無視
      }
    }
  }, [enableHistory, historyKey]);

  // 検索履歴を保存
  const saveToHistory = useCallback(
    (searchQuery: string) => {
      if (!enableHistory || !searchQuery.trim()) return;

      setHistory((prev) => {
        const newHistory = [
          searchQuery,
          ...prev.filter((h) => h !== searchQuery),
        ].slice(0, maxHistoryItems);

        try {
          localStorage.setItem(historyKey, JSON.stringify(newHistory));
        } catch {
          // 無視
        }

        return newHistory;
      });
    },
    [enableHistory, historyKey, maxHistoryItems]
  );

  // 検索履歴をクリア
  const clearHistory = useCallback(() => {
    setHistory([]);
    try {
      localStorage.removeItem(historyKey);
    } catch {
      // 無視
    }
  }, [historyKey]);

  // 検索実行
  const results = useMemo((): SearchResult<T>[] => {
    if (debouncedQuery.length < minQueryLength) {
      return [];
    }

    setIsSearching(true);

    const searchResults: SearchResult<T>[] = [];
    const q = debouncedQuery.toLowerCase();

    items.forEach((item) => {
      let totalScore = 0;
      const matches: SearchResult<T>['matches'] = [];

      searchFields.forEach((field) => {
        const value = item[field];
        if (typeof value !== 'string') return;

        let fieldScore = 0;

        // 完全一致チェック
        if (value.toLowerCase() === q) {
          fieldScore = 1;
        }
        // 部分一致チェック
        else if (value.toLowerCase().includes(q)) {
          fieldScore = 0.8;
        }
        // ファジーマッチ
        else if (enableFuzzy) {
          fieldScore = calculateFuzzyScore(q, value);
        }

        if (fieldScore > 0) {
          totalScore += fieldScore;
          const indices = findMatchIndices(q, value);
          if (indices.length > 0) {
            matches.push({ field, indices });
          }
        }
      });

      if (totalScore > 0) {
        searchResults.push({
          item,
          score: totalScore / searchFields.length,
          matches,
        });
      }
    });

    // スコアで降順ソート
    searchResults.sort((a, b) => b.score - a.score);

    setIsSearching(false);

    return searchResults.slice(0, maxResults);
  }, [debouncedQuery, items, searchFields, minQueryLength, maxResults, enableFuzzy]);

  // 検索クエリをクリア
  const clearQuery = useCallback(() => {
    setQuery('');
  }, []);

  // 検索クエリを設定（履歴に追加）
  const search = useCallback(
    (newQuery: string) => {
      setQuery(newQuery);
      if (newQuery.length >= minQueryLength) {
        saveToHistory(newQuery);
      }
    },
    [minQueryLength, saveToHistory]
  );

  // ハイライト付きテキストを生成
  const highlightMatches = useCallback(
    (text: string, fieldMatches: [number, number][]): React.ReactNode => {
      if (fieldMatches.length === 0) return text;

      const parts: React.ReactNode[] = [];
      let lastIndex = 0;

      fieldMatches.forEach(([start, end], index) => {
        if (start > lastIndex) {
          parts.push(text.slice(lastIndex, start));
        }
        parts.push(
          <mark key={index} className="bg-yellow-200 dark:bg-yellow-800 px-0.5 rounded">
            {text.slice(start, end)}
          </mark>
        );
        lastIndex = end;
      });

      if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
      }

      return parts;
    },
    []
  );

  return {
    query,
    setQuery,
    search,
    clearQuery,
    results,
    isSearching,
    history,
    clearHistory,
    highlightMatches,
    resultCount: results.length,
    hasResults: results.length > 0,
  };
}

// サジェスト機能
export function useSearchSuggestions<T extends SearchableItem>(
  items: T[],
  searchFields: (keyof T)[],
  maxSuggestions = 5
) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const generateSuggestions = useCallback(
    (query: string) => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      const q = query.toLowerCase();
      const suggestionSet = new Set<string>();

      items.forEach((item) => {
        searchFields.forEach((field) => {
          const value = item[field];
          if (typeof value === 'string' && value.toLowerCase().includes(q)) {
            suggestionSet.add(value);
          }
        });
      });

      const sortedSuggestions = Array.from(suggestionSet)
        .sort((a, b) => {
          const aStartsWith = a.toLowerCase().startsWith(q);
          const bStartsWith = b.toLowerCase().startsWith(q);
          if (aStartsWith && !bStartsWith) return -1;
          if (!aStartsWith && bStartsWith) return 1;
          return a.localeCompare(b);
        })
        .slice(0, maxSuggestions);

      setSuggestions(sortedSuggestions);
    },
    [items, searchFields, maxSuggestions]
  );

  return {
    suggestions,
    generateSuggestions,
    clearSuggestions: () => setSuggestions([]),
  };
}
