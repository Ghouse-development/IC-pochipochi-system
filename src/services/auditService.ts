import { supabase } from '../lib/supabase';

// JSON型定義（監査ログ用）
export type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
export interface JsonObject { [key: string]: JsonValue }
export type JsonArray = JsonValue[];

export interface AuditLog {
  id: string;
  user_id?: string;
  user_email: string;
  user_name: string;
  table_name: string;
  record_id: string;
  action: 'INSERT' | 'UPDATE' | 'DELETE';
  old_data?: JsonObject;
  new_data?: JsonObject;
  changes?: JsonObject;
  ip_address?: string;
  user_agent?: string;
  session_id?: string;
  created_at: string;
}

export interface AuditLogSummary {
  id: string;
  created_at: string;
  user_name: string;
  user_email: string;
  table_name: string;
  action: string;
  record_id: string;
  record_name: string;
  changes: JsonObject | null;
  changed_fields_count: number;
}

export interface DailyChangeSummary {
  change_date: string;
  user_name: string;
  user_email: string;
  total_changes: number;
  inserts: number;
  updates: number;
  deletes: number;
  changes_by_table: Record<string, number>;
}

export class AuditService {
  /**
   * 監査ログを手動で記録
   */
  static async logChange(
    tableName: string,
    recordId: string,
    action: 'INSERT' | 'UPDATE' | 'DELETE',
    oldData?: JsonObject,
    newData?: JsonObject,
    changes?: JsonObject
  ): Promise<void> {
    try {
      const user = JSON.parse(localStorage.getItem('stylebook_user') || '{}');

      const logData = {
        user_email: user.email || 'unknown',
        user_name: user.name || 'Unknown User',
        table_name: tableName,
        record_id: recordId,
        action: action,
        old_data: oldData,
        new_data: newData,
        changes: changes,
        session_id: sessionStorage.getItem('session_id') || undefined
      };

      const { error } = await supabase
        .from('audit_logs')
        .insert([logData]);

      if (error) throw error;
    } catch (error) {
      console.error('Error logging audit:', error);
    }
  }

  /**
   * 最近の変更履歴を取得
   */
  static async getRecentLogs(limit: number = 50): Promise<AuditLogSummary[]> {
    try {
      const { data, error } = await supabase
        .from('audit_log_summary')
        .select('*')
        .limit(limit);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching audit logs:', error);
      return [];
    }
  }

  /**
   * 特定のテーブルの変更履歴を取得
   */
  static async getLogsByTable(tableName: string, limit: number = 50): Promise<AuditLogSummary[]> {
    try {
      const { data, error } = await supabase
        .from('audit_log_summary')
        .select('*')
        .eq('table_name', tableName)
        .limit(limit);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching table audit logs:', error);
      return [];
    }
  }

  /**
   * 特定のレコードの変更履歴を取得
   */
  static async getLogsByRecord(recordId: string): Promise<AuditLogSummary[]> {
    try {
      const { data, error } = await supabase
        .from('audit_log_summary')
        .select('*')
        .eq('record_id', recordId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching record audit logs:', error);
      return [];
    }
  }

  /**
   * 特定のユーザーの変更履歴を取得
   */
  static async getLogsByUser(userEmail: string, limit: number = 50): Promise<AuditLogSummary[]> {
    try {
      const { data, error } = await supabase
        .from('audit_log_summary')
        .select('*')
        .eq('user_email', userEmail)
        .limit(limit);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching user audit logs:', error);
      return [];
    }
  }

  /**
   * 日次変更サマリーを取得
   */
  static async getDailyChangeSummary(days: number = 7): Promise<DailyChangeSummary[]> {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);

      const { data, error } = await supabase
        .from('daily_change_summary')
        .select('*')
        .gte('change_date', startDate.toISOString().split('T')[0]);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching daily summary:', error);
      return [];
    }
  }

  /**
   * 変更内容をわかりやすい形式に変換
   */
  static formatChanges(changes: JsonObject | null | undefined): string[] {
    if (!changes || typeof changes !== 'object') return [];

    const formatted: string[] = [];

    for (const [key, value] of Object.entries(changes)) {
      const fieldName = this.translateFieldName(key);
      const formattedValue = this.formatValue(value);
      formatted.push(`${fieldName}: ${formattedValue}`);
    }

    return formatted;
  }

  /**
   * フィールド名を日本語に変換
   */
  private static translateFieldName(field: string): string {
    const translations: Record<string, string> = {
      name: '名前',
      product_code: '商品コード',
      model_number: '型番',
      price: '価格',
      color_name: '色名',
      color_code: '色コード',
      description: '説明',
      category_id: 'カテゴリ',
      is_active: '有効',
      is_standard: '標準',
      display_order: '表示順',
      stock_status: '在庫状態',
      manufacturer: 'メーカー',
      unit: '単位'
    };

    return translations[field] || field;
  }

  /**
   * 値をフォーマット
   */
  private static formatValue(value: JsonValue): string {
    if (value === null || value === undefined) return '(空)';
    if (typeof value === 'boolean') return value ? 'はい' : 'いいえ';
    if (typeof value === 'number') return value.toLocaleString();
    if (typeof value === 'object') return JSON.stringify(value, null, 2);
    return String(value);
  }

  /**
   * アクション名を日本語に変換
   */
  static translateAction(action: string): string {
    const translations: Record<string, string> = {
      INSERT: '追加',
      UPDATE: '更新',
      DELETE: '削除'
    };

    return translations[action] || action;
  }

  /**
   * テーブル名を日本語に変換
   */
  static translateTableName(tableName: string): string {
    const translations: Record<string, string> = {
      products: '商品',
      categories: 'カテゴリ',
      product_variants: '商品バリエーション',
      variant_pricing: '価格',
      variant_images: '画像',
      product_plan_availability: 'プラン利用可能性'
    };

    return translations[tableName] || tableName;
  }
}