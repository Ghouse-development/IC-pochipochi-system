/**
 * プロジェクト登録フォーム（拡張版）
 * - ステップ形式でお客様情報・建築情報（カード選択）・部屋名登録を実施
 * - 完了後にお客様用URLを発行
 */
import React, { useState, useCallback } from 'react';
import {
  User,
  Home,
  DoorOpen,
  ChevronRight,
  ChevronLeft,
  Check,
  Building2,
  Link2,
  Copy,
  Mail,
} from 'lucide-react';
import { BuildingInfoSelector, BuildingInfoSummary } from './BuildingInfoSelector';
import { RoomRegistration, type Room } from './RoomRegistration';
import {
  DEFAULT_BUILDING_INFO,
  type BuildingInfo as BuildingInfoConfig,
} from '../../config/buildingInfoConfig';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';

interface CustomerInfo {
  name: string;
  furigana: string;
  email: string;
  phone: string;
  postalCode: string;
  address: string;
}

interface ProjectRegistrationFormProps {
  onComplete?: (projectId: string, customerUrl: string) => void;
  onCancel?: () => void;
}

const STEPS = [
  { id: 1, title: 'お客様情報', icon: User },
  { id: 2, title: '建築情報', icon: Building2 },
  { id: 3, title: '部屋登録', icon: DoorOpen },
  { id: 4, title: '確認', icon: Check },
  { id: 5, title: 'URL発行', icon: Link2 },
];

const PLAN_OPTIONS = [
  { value: 'LACIE', label: 'LACIE' },
  { value: 'HOURS', label: 'HOURS' },
  { value: 'LIFE+', label: 'LIFE+' },
  { value: 'LIFE', label: 'LIFE' },
  { value: 'LIFE_X', label: 'LIFE X' },
];

export const ProjectRegistrationForm: React.FC<ProjectRegistrationFormProps> = ({
  onComplete,
  onCancel,
}) => {
  const { sendMagicLink } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customerUrl, setCustomerUrl] = useState<string | null>(null);
  const [urlCopied, setUrlCopied] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // フォームデータ
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: '',
    furigana: '',
    email: '',
    phone: '',
    postalCode: '',
    address: '',
  });

  const [planType, setPlanType] = useState<string>('LACIE');
  const [buildingInfo, setBuildingInfo] = useState<BuildingInfoConfig>(DEFAULT_BUILDING_INFO);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [projectCode, setProjectCode] = useState('');
  const [projectName, setProjectName] = useState('');

  // 階数を取得（buildingInfoから）
  const getFloorCount = (): number => {
    const floorsMap: Record<string, number> = {
      '1f': 1,
      '2f': 2,
      '3f': 3,
    };
    return floorsMap[buildingInfo.floors] || 2;
  };

  const handleCustomerChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCustomer((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Get session token
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        setError('ログインセッションが無効です。再度ログインしてください。');
        return;
      }

      // Call API to create project
      const response = await fetch('/api/projects/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          customer: {
            name: customer.name,
            furigana: customer.furigana,
            email: customer.email,
            phone: customer.phone,
            postalCode: customer.postalCode,
            address: customer.address,
          },
          planType,
          projectCode: projectCode || undefined,
          projectName: projectName || undefined,
          buildingInfo,
          rooms,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'プロジェクトの作成に失敗しました');
      }

      const result = await response.json();

      // Set customer URL from API response
      setCustomerUrl(result.customerUrl);

      // 次のステップ（URL発行画面）へ
      setCurrentStep(5);
      onComplete?.(result.project.id, result.customerUrl);
    } catch (err) {
      console.error('Project creation error:', err);
      setError(err instanceof Error ? err.message : 'プロジェクトの作成に失敗しました');
    } finally {
      setIsSubmitting(false);
    }
  }, [customer, planType, projectCode, projectName, buildingInfo, rooms, onComplete]);

  const handleCopyUrl = useCallback(() => {
    if (customerUrl) {
      navigator.clipboard.writeText(customerUrl);
      setUrlCopied(true);
      setTimeout(() => setUrlCopied(false), 2000);
    }
  }, [customerUrl]);

  const handleSendMagicLink = useCallback(async () => {
    if (!customer.email) return;

    const { error } = await sendMagicLink(customer.email, customerUrl || undefined);
    if (!error) {
      setMagicLinkSent(true);
    }
  }, [customer.email, customerUrl, sendMagicLink]);

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!customer.name && !!customer.email;
      case 2:
        // 必須の建築情報が入力されているか
        return !!buildingInfo.fire_zone && !!buildingInfo.floors && !!buildingInfo.construction_method;
      case 3:
        // 部屋が1つ以上登録されているか
        return rooms.length > 0;
      default:
        return true;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
        <div className="flex items-center gap-3">
          <Building2 className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">プロジェクト登録</h1>
            <p className="text-blue-100">お客様情報・建築情報・部屋を登録してください</p>
          </div>
        </div>
      </div>

      {/* ステップインジケーター */}
      <div className="flex border-b overflow-x-auto">
        {STEPS.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          return (
            <div
              key={step.id}
              className={`flex-1 flex items-center justify-center gap-2 py-4 border-b-2 transition-colors min-w-[100px] ${
                isActive
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : isCompleted
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-400'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
              </div>
              <span className="font-medium text-sm whitespace-nowrap hidden sm:inline">{step.title}</span>
            </div>
          );
        })}
      </div>

      {/* フォームコンテンツ */}
      <div className="p-6">
        {/* ステップ1: お客様情報 */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">お客様情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  お客様名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  onChange={handleCustomerChange}
                  placeholder="山田 太郎"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  フリガナ
                </label>
                <input
                  type="text"
                  name="furigana"
                  value={customer.furigana || ''}
                  onChange={handleCustomerChange}
                  placeholder="ヤマダ タロウ"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={customer.email}
                  onChange={handleCustomerChange}
                  placeholder="yamada@example.com"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  このメールアドレスにログイン用リンクを送信します
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  電話番号
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={customer.phone || ''}
                  onChange={handleCustomerChange}
                  placeholder="090-1234-5678"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  郵便番号
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={customer.postalCode || ''}
                  onChange={handleCustomerChange}
                  placeholder="123-4567"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  現住所
                </label>
                <input
                  type="text"
                  name="address"
                  value={customer.address || ''}
                  onChange={handleCustomerChange}
                  placeholder="東京都渋谷区..."
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  商品（プラン）
                </label>
                <div className="flex flex-wrap gap-2">
                  {PLAN_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setPlanType(opt.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        planType === opt.value
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ステップ2: 建築情報（カード選択） */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">建築情報</h2>
            <BuildingInfoSelector
              value={buildingInfo}
              onChange={setBuildingInfo}
              onComplete={() => nextStep()}
            />
          </div>
        )}

        {/* ステップ3: 部屋登録 */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">部屋登録</h2>
            <p className="text-gray-600 mb-4">
              各階の部屋を登録してください。登録した部屋ごとに内装の選択ができるようになります。
            </p>
            <RoomRegistration
              rooms={rooms}
              onChange={setRooms}
              floors={getFloorCount()}
            />
          </div>
        )}

        {/* ステップ4: 確認 */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">入力内容の確認</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  プロジェクトコード（自動生成可）
                </label>
                <input
                  type="text"
                  value={projectCode}
                  onChange={(e) => setProjectCode(e.target.value)}
                  placeholder="PRJ-XXXXX（空欄で自動生成）"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  プロジェクト名（自動生成可）
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder={`${customer.name || 'お客様'}様邸`}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* お客様情報サマリー */}
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <User className="w-5 h-5" /> お客様情報
              </h3>
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <dt className="text-gray-500">お名前</dt>
                  <dd className="font-medium">{customer.name}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">メール</dt>
                  <dd className="font-medium">{customer.email}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">電話番号</dt>
                  <dd className="font-medium">{customer.phone || '-'}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">プラン</dt>
                  <dd className="font-medium">{planType}</dd>
                </div>
              </dl>
            </div>

            {/* 建築情報サマリー */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5" /> 建築情報
              </h3>
              <BuildingInfoSummary value={buildingInfo} />
            </div>

            {/* 部屋サマリー */}
            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="font-bold text-purple-800 mb-3 flex items-center gap-2">
                <Home className="w-5 h-5" /> 登録部屋 ({rooms.length}部屋)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {rooms.map((room) => (
                  <div key={room.id} className="bg-white rounded-lg px-3 py-2 text-sm">
                    <span className="text-purple-600 font-medium">{room.floor}F</span>
                    <span className="mx-1">-</span>
                    <span>{room.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ステップ5: URL発行 */}
        {currentStep === 5 && (
          <div className="space-y-6 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-green-600" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">プロジェクト登録完了</h2>
              <p className="text-gray-600">
                {customer.name}様のプロジェクトが作成されました
              </p>
            </div>

            {customerUrl && (
              <div className="bg-gray-50 rounded-xl p-6 text-left">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Link2 className="w-5 h-5" /> お客様用URL
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="text"
                    value={customerUrl}
                    readOnly
                    className="flex-1 px-3 py-2 border rounded-lg bg-white text-sm"
                  />
                  <button
                    onClick={handleCopyUrl}
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                      urlCopied
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    <Copy className="w-4 h-4" />
                    {urlCopied ? 'コピー済み' : 'コピー'}
                  </button>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-700 mb-2">メールでログインリンクを送信</h4>
                  <p className="text-sm text-gray-500 mb-3">
                    {customer.email} にマジックリンク（パスワード不要のログインリンク）を送信します
                  </p>
                  <button
                    onClick={handleSendMagicLink}
                    disabled={magicLinkSent}
                    className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors w-full justify-center ${
                      magicLinkSent
                        ? 'bg-green-100 text-green-700'
                        : 'bg-indigo-500 text-white hover:bg-indigo-600'
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                    {magicLinkSent ? '送信完了' : 'ログインリンクを送信'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* エラー表示 */}
      {error && (
        <div className="mx-6 mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {/* フッター */}
      {currentStep < 5 && (
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <div>
            {onCancel && (
              <button
                onClick={onCancel}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                キャンセル
              </button>
            )}
          </div>
          <div className="flex gap-3">
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                <ChevronLeft className="w-4 h-4" />
                戻る
              </button>
            )}
            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid(currentStep)}
                className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                次へ
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Check className="w-4 h-4" />
                )}
                プロジェクト登録
              </button>
            )}
          </div>
        </div>
      )}

      {/* URL発行後のフッター */}
      {currentStep === 5 && (
        <div className="flex items-center justify-center p-6 border-t bg-gray-50">
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            ダッシュボードに戻る
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectRegistrationForm;
