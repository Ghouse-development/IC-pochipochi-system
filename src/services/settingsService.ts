// システム設定サービス
import { supabase } from '../lib/supabase';

// 設定キャッシュ（パフォーマンス最適化）
const settingsCache: Map<string, { value: unknown; expires: number }> = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5分

export interface SystemSettings {
  tax_rate: number;
  estimate_validity_days: number;
  company_name: string;
  company_address: string;
  company_phone: string;
  company_email: string;
  company_licenses: string[];
  email_notification_enabled: boolean;
}

// デフォルト値
const DEFAULT_SETTINGS: SystemSettings = {
  tax_rate: 0.1,
  estimate_validity_days: 30,
  company_name: '株式会社 Gハウス',
  company_address: '',
  company_phone: '',
  company_email: '',
  company_licenses: [
    '一級建築士事務所 大阪府知事（チ）第12462号',
    '宅地建物取引業 大阪府知事（4）第53697号',
    '建築業許可 大阪府知事免許（般-4）第129490号',
  ],
  email_notification_enabled: false,
};

export class SettingsService {
  /**
   * 設定値を取得（キャッシュ対応）
   */
  static async getSetting<T>(key: string, defaultValue: T): Promise<T> {
    // キャッシュチェック
    const cached = settingsCache.get(key);
    if (cached && cached.expires > Date.now()) {
      return cached.value as T;
    }

    try {
      const { data, error } = await supabase
        .from('system_settings')
        .select('setting_value')
        .eq('setting_key', key)
        .single();

      if (error || !data) {
        return defaultValue;
      }

      const value = data.setting_value as T;

      // キャッシュに保存
      settingsCache.set(key, { value, expires: Date.now() + CACHE_TTL });

      return value;
    } catch {
      return defaultValue;
    }
  }

  /**
   * 税率を取得
   */
  static async getTaxRate(): Promise<number> {
    const settings = await this.getSetting<{ rate?: number }>('tax_settings', {});
    return settings.rate ?? DEFAULT_SETTINGS.tax_rate;
  }

  /**
   * 見積有効期限（日数）を取得
   */
  static async getEstimateValidityDays(): Promise<number> {
    const settings = await this.getSetting<{ validity_days?: number }>('estimate_settings', {});
    return settings.validity_days ?? DEFAULT_SETTINGS.estimate_validity_days;
  }

  /**
   * 会社情報を取得
   */
  static async getCompanyInfo(): Promise<{
    name: string;
    address: string;
    phone: string;
    email: string;
    licenses: string[];
  }> {
    const settings = await this.getSetting<{
      name?: string;
      address?: string;
      phone?: string;
      email?: string;
      licenses?: string[];
    }>('company_info', {});

    return {
      name: settings.name ?? DEFAULT_SETTINGS.company_name,
      address: settings.address ?? DEFAULT_SETTINGS.company_address,
      phone: settings.phone ?? DEFAULT_SETTINGS.company_phone,
      email: settings.email ?? DEFAULT_SETTINGS.company_email,
      licenses: settings.licenses ?? DEFAULT_SETTINGS.company_licenses,
    };
  }

  /**
   * 全設定を取得
   */
  static async getAllSettings(): Promise<SystemSettings> {
    const [taxRate, validityDays, companyInfo, emailEnabled] = await Promise.all([
      this.getTaxRate(),
      this.getEstimateValidityDays(),
      this.getCompanyInfo(),
      this.getSetting<{ enabled?: boolean }>('email_notification', {}).then(s => s.enabled ?? false),
    ]);

    return {
      tax_rate: taxRate,
      estimate_validity_days: validityDays,
      company_name: companyInfo.name,
      company_address: companyInfo.address,
      company_phone: companyInfo.phone,
      company_email: companyInfo.email,
      company_licenses: companyInfo.licenses,
      email_notification_enabled: emailEnabled,
    };
  }

  /**
   * キャッシュをクリア
   */
  static clearCache(): void {
    settingsCache.clear();
  }
}

export default SettingsService;
