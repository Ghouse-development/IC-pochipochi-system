// メール通知サービス
// Supabase Edge FunctionsまたはResend/SendGridを使用してメール送信

import { supabase } from '../lib/supabase';

export interface EmailTemplate {
  subject: string;
  body: string;
  html?: string;
}

export interface EmailRecipient {
  email: string;
  name?: string;
}

export interface SendEmailOptions {
  to: EmailRecipient[];
  cc?: EmailRecipient[];
  bcc?: EmailRecipient[];
  template: EmailTemplate;
  attachments?: Array<{
    filename: string;
    content: string; // base64
    contentType: string;
  }>;
}

export type NotificationType =
  | 'project_created'
  | 'project_confirmed'
  | 'selection_updated'
  | 'estimate_generated'
  | 'password_reset'
  | 'user_invitation';

// メールテンプレート
const EMAIL_TEMPLATES: Record<NotificationType, (data: Record<string, string>) => EmailTemplate> = {
  project_created: (data) => ({
    subject: `【IC-pochipochi】新規プロジェクト作成: ${data.projectName}`,
    body: `
${data.customerName} 様

新しいプロジェクトが作成されました。

プロジェクト名: ${data.projectName}
プロジェクトコード: ${data.projectCode}
作成日: ${data.createdAt}
担当コーディネーター: ${data.coordinatorName || '未割当'}

下記URLよりシステムにログインし、詳細をご確認ください。
${data.loginUrl}

---
株式会社 Gハウス
IC-pochipochi システム
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0d9488; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #f9fafb; }
    .info-box { background-color: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
    .button { display: inline-block; background-color: #0d9488; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; }
    .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>IC-pochipochi</h1>
    </div>
    <div class="content">
      <p>${data.customerName} 様</p>
      <p>新しいプロジェクトが作成されました。</p>
      <div class="info-box">
        <p><strong>プロジェクト名:</strong> ${data.projectName}</p>
        <p><strong>プロジェクトコード:</strong> ${data.projectCode}</p>
        <p><strong>作成日:</strong> ${data.createdAt}</p>
        <p><strong>担当コーディネーター:</strong> ${data.coordinatorName || '未割当'}</p>
      </div>
      <p style="text-align: center;">
        <a href="${data.loginUrl}" class="button">システムにログイン</a>
      </p>
    </div>
    <div class="footer">
      <p>株式会社 Gハウス<br>IC-pochipochi システム</p>
    </div>
  </div>
</body>
</html>
    `.trim(),
  }),

  project_confirmed: (data) => ({
    subject: `【IC-pochipochi】プロジェクト確定: ${data.projectName}`,
    body: `
${data.customerName} 様

プロジェクトが確定されました。

プロジェクト名: ${data.projectName}
確定日: ${data.confirmedAt}
合計金額: ${data.totalAmount}

見積書・仕様書は添付ファイルをご確認ください。

---
株式会社 Gハウス
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #0d9488; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; background-color: #f9fafb; }
    .amount { font-size: 24px; font-weight: bold; color: #0d9488; text-align: center; margin: 20px 0; }
    .footer { padding: 20px; text-align: center; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>プロジェクト確定</h1>
    </div>
    <div class="content">
      <p>${data.customerName} 様</p>
      <p>プロジェクトが確定されました。</p>
      <p><strong>プロジェクト名:</strong> ${data.projectName}</p>
      <p><strong>確定日:</strong> ${data.confirmedAt}</p>
      <p class="amount">合計金額: ${data.totalAmount}</p>
      <p>見積書・仕様書は添付ファイルをご確認ください。</p>
    </div>
    <div class="footer">
      <p>株式会社 Gハウス</p>
    </div>
  </div>
</body>
</html>
    `.trim(),
  }),

  selection_updated: (data) => ({
    subject: `【IC-pochipochi】選択内容更新: ${data.projectName}`,
    body: `
選択内容が更新されました。

プロジェクト名: ${data.projectName}
更新日時: ${data.updatedAt}
更新者: ${data.updatedBy}
変更内容: ${data.changeDescription}

---
IC-pochipochi システム
    `.trim(),
  }),

  estimate_generated: (data) => ({
    subject: `【IC-pochipochi】見積書生成: ${data.projectName}`,
    body: `
見積書が生成されました。

プロジェクト名: ${data.projectName}
見積番号: ${data.estimateNumber}
金額: ${data.totalAmount}

添付ファイルをご確認ください。

---
株式会社 Gハウス
    `.trim(),
  }),

  password_reset: (data) => ({
    subject: '【IC-pochipochi】パスワードリセット',
    body: `
パスワードリセットのリクエストを受け付けました。

下記URLよりパスワードをリセットしてください。
${data.resetUrl}

このリンクは24時間有効です。

心当たりがない場合は、このメールを無視してください。

---
IC-pochipochi システム
    `.trim(),
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .button { display: inline-block; background-color: #0d9488; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; }
  </style>
</head>
<body>
  <div class="container">
    <h2>パスワードリセット</h2>
    <p>パスワードリセットのリクエストを受け付けました。</p>
    <p style="text-align: center; margin: 30px 0;">
      <a href="${data.resetUrl}" class="button">パスワードをリセット</a>
    </p>
    <p>このリンクは24時間有効です。</p>
    <p><small>心当たりがない場合は、このメールを無視してください。</small></p>
  </div>
</body>
</html>
    `.trim(),
  }),

  user_invitation: (data) => ({
    subject: '【IC-pochipochi】システムへの招待',
    body: `
${data.userName} 様

IC-pochipochi システムへ招待されました。

下記URLよりアカウントを有効化してください。
${data.inviteUrl}

ログイン後、パスワードを変更してください。

---
株式会社 Gハウス
IC-pochipochi システム
    `.trim(),
  }),
};

export class EmailService {
  private static isEnabled = false;
  private static provider: 'supabase' | 'resend' | 'sendgrid' | null = null;

  /**
   * メール機能の初期化
   */
  static async initialize(): Promise<boolean> {
    try {
      // システム設定からメール設定を取得
      const { data: settings, error } = await supabase
        .from('system_settings')
        .select('setting_value')
        .eq('setting_key', 'email_notification')
        .single();

      if (error || !settings) {
        console.log('Email notification settings not found');
        return false;
      }

      const emailConfig = settings.setting_value as Record<string, unknown>;
      this.isEnabled = emailConfig.enabled === true;
      this.provider = (emailConfig.provider as 'supabase' | 'resend' | 'sendgrid') || null;

      return this.isEnabled;
    } catch (error) {
      console.error('Error initializing email service:', error);
      return false;
    }
  }

  /**
   * メール送信
   */
  static async sendEmail(options: SendEmailOptions): Promise<boolean> {
    if (!this.isEnabled) {
      console.log('Email service is disabled');
      return false;
    }

    try {
      // Supabase Edge Functionを呼び出してメール送信
      const { error } = await supabase.functions.invoke('send-email', {
        body: {
          to: options.to,
          cc: options.cc,
          bcc: options.bcc,
          subject: options.template.subject,
          text: options.template.body,
          html: options.template.html,
          attachments: options.attachments,
        },
      });

      if (error) {
        console.error('Error sending email:', error);
        return false;
      }

      // 送信ログを記録
      await this.logEmailSent(options);

      return true;
    } catch (error) {
      console.error('Error in sendEmail:', error);
      return false;
    }
  }

  /**
   * テンプレートを使用してメール送信
   */
  static async sendTemplateEmail(
    type: NotificationType,
    recipients: EmailRecipient[],
    data: Record<string, string>,
    attachments?: SendEmailOptions['attachments']
  ): Promise<boolean> {
    const templateFn = EMAIL_TEMPLATES[type];
    if (!templateFn) {
      console.error(`Email template not found: ${type}`);
      return false;
    }

    const template = templateFn(data);

    return this.sendEmail({
      to: recipients,
      template,
      attachments,
    });
  }

  /**
   * プロジェクト作成通知
   */
  static async notifyProjectCreated(
    _projectId: string,
    customerEmail: string,
    customerName: string,
    projectName: string,
    projectCode: string,
    coordinatorName?: string
  ): Promise<boolean> {
    return this.sendTemplateEmail(
      'project_created',
      [{ email: customerEmail, name: customerName }],
      {
        customerName,
        projectName,
        projectCode,
        createdAt: new Date().toLocaleDateString('ja-JP'),
        coordinatorName: coordinatorName || '',
        loginUrl: `${window.location.origin}/login`,
      }
    );
  }

  /**
   * プロジェクト確定通知
   */
  static async notifyProjectConfirmed(
    customerEmail: string,
    customerName: string,
    projectName: string,
    totalAmount: string,
    attachments?: SendEmailOptions['attachments']
  ): Promise<boolean> {
    return this.sendTemplateEmail(
      'project_confirmed',
      [{ email: customerEmail, name: customerName }],
      {
        customerName,
        projectName,
        confirmedAt: new Date().toLocaleDateString('ja-JP'),
        totalAmount,
      },
      attachments
    );
  }

  /**
   * 選択更新通知（コーディネーター向け）
   */
  static async notifySelectionUpdated(
    coordinatorEmail: string,
    projectName: string,
    updatedBy: string,
    changeDescription: string
  ): Promise<boolean> {
    return this.sendTemplateEmail(
      'selection_updated',
      [{ email: coordinatorEmail }],
      {
        projectName,
        updatedAt: new Date().toLocaleString('ja-JP'),
        updatedBy,
        changeDescription,
      }
    );
  }

  /**
   * メール送信ログを記録
   */
  private static async logEmailSent(options: SendEmailOptions): Promise<void> {
    try {
      await supabase.from('audit_logs').insert({
        table_name: 'emails',
        record_id: crypto.randomUUID(),
        action: 'SENT',
        new_data: {
          to: options.to.map(r => r.email),
          subject: options.template.subject,
          timestamp: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.error('Error logging email:', error);
    }
  }

  /**
   * メール設定の確認
   */
  static isConfigured(): boolean {
    return this.isEnabled && this.provider !== null;
  }
}

export default EmailService;
