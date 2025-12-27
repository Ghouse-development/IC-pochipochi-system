/**
 * プロジェクト作成フォーム
 * - ステップ形式でお客様情報・土地情報・建物情報を入力
 */
import React, { useState, useCallback } from 'react';
import {
  User,
  MapPin,
  Home,
  ChevronRight,
  ChevronLeft,
  Check,
  Building2,
} from 'lucide-react';
import {
  useProjectStore,
  type CustomerInfo,
  type LandInfo,
  type BuildingInfo,
} from '../../stores/useProjectStore';
import { useSelectionStore } from '../../stores/useSelectionStore';

interface ProjectCreateFormProps {
  onComplete?: (projectId: string) => void;
  onCancel?: () => void;
}

const STEPS = [
  { id: 1, title: 'お客様情報', icon: User },
  { id: 2, title: '土地情報', icon: MapPin },
  { id: 3, title: '建物情報', icon: Home },
  { id: 4, title: '確認', icon: Check },
];

const PLAN_OPTIONS = [
  { value: 'LACIE', label: 'LACIE' },
  { value: 'HOURS', label: 'HOURS' },
  { value: 'LIFE+', label: 'LIFE+' },
  { value: 'LIFE', label: 'LIFE' },
  { value: 'LIFE_X', label: 'LIFE X' },
];

const FIRE_ZONE_OPTIONS = [
  { value: '防火地域', label: '防火地域' },
  { value: '準防火地域', label: '準防火地域' },
  { value: '22条地域', label: '22条地域' },
  { value: '指定なし', label: '指定なし' },
];

const STRUCTURE_OPTIONS = [
  { value: '木造', label: '木造' },
  { value: '鉄骨造', label: '鉄骨造' },
  { value: 'RC造', label: 'RC造' },
];

const ROOF_OPTIONS = [
  { value: '切妻', label: '切妻' },
  { value: '寄棟', label: '寄棟' },
  { value: '片流れ', label: '片流れ' },
  { value: 'フラット', label: 'フラット' },
];

const STYLE_OPTIONS = [
  { value: 'モダン', label: 'モダン' },
  { value: 'ナチュラル', label: 'ナチュラル' },
  { value: 'シンプル', label: 'シンプル' },
  { value: 'クラシック', label: 'クラシック' },
];

export const ProjectCreateForm: React.FC<ProjectCreateFormProps> = ({
  onComplete,
  onCancel,
}) => {
  const { createProject } = useProjectStore();
  const { setProjectInfo, setProjectStatus } = useSelectionStore();
  const [currentStep, setCurrentStep] = useState(1);

  // フォームデータ
  const [customer, setCustomer] = useState<CustomerInfo>({
    name: '',
    furigana: '',
    email: '',
    phone: '',
    postalCode: '',
    address: '',
  });

  const [land, setLand] = useState<LandInfo>({
    address: '',
    area: undefined,
    buildingCoverage: undefined,
    floorAreaRatio: undefined,
    fireZone: '指定なし',
    notes: '',
  });

  const [building, setBuilding] = useState<BuildingInfo>({
    planType: 'LACIE',
    floors: 2,
    totalFloorArea: 0,
    buildingArea: undefined,
    structure: '木造',
    roofType: '切妻',
    exteriorStyle: 'モダン',
    notes: '',
  });

  const [projectCode, setProjectCode] = useState('');
  const [projectName, setProjectName] = useState('');

  const handleCustomerChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCustomer((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleLandChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      setLand((prev) => ({
        ...prev,
        [name]: type === 'number' ? (value ? Number(value) : undefined) : value,
      }));
    },
    []
  );

  const handleBuildingChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target;
      setBuilding((prev) => ({
        ...prev,
        [name]: type === 'number' ? (value ? Number(value) : undefined) : value,
      }));
    },
    []
  );

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = useCallback(() => {
    const code = projectCode || `PRJ-${Date.now().toString(36).toUpperCase()}`;
    const name = projectName || `${customer.name}様邸`;

    const project = createProject({
      code,
      name,
      customer,
      land,
      building,
    });

    // 選択ストアにも反映
    setProjectInfo(name, customer.name, building.planType);
    setProjectStatus('draft', 'システム', 'プロジェクト作成');

    onComplete?.(project.id);
  }, [
    projectCode,
    projectName,
    customer,
    land,
    building,
    createProject,
    setProjectInfo,
    setProjectStatus,
    onComplete,
  ]);

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!customer.name && !!customer.email;
      case 2:
        return !!land.address;
      case 3:
        return building.totalFloorArea > 0;
      default:
        return true;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      {/* ヘッダー */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
        <div className="flex items-center gap-3">
          <Building2 className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-bold">新規プロジェクト作成</h1>
            <p className="text-blue-100">お客様・土地・建物情報を入力してください</p>
          </div>
        </div>
      </div>

      {/* ステップインジケーター */}
      <div className="flex border-b">
        {STEPS.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          return (
            <div
              key={step.id}
              className={`flex-1 flex items-center justify-center gap-2 py-4 border-b-2 transition-colors ${
                isActive
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : isCompleted
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-400'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : isCompleted
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
                }`}
              >
                {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
              </div>
              <span className="font-medium hidden sm:inline">{step.title}</span>
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
            </div>
          </div>
        )}

        {/* ステップ2: 土地情報 */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">土地情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  建築地住所 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={land.address}
                  onChange={handleLandChange}
                  placeholder="東京都世田谷区..."
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  敷地面積（㎡）
                </label>
                <input
                  type="number"
                  name="area"
                  value={land.area || ''}
                  onChange={handleLandChange}
                  placeholder="150"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  防火指定
                </label>
                <select
                  name="fireZone"
                  value={land.fireZone || '指定なし'}
                  onChange={handleLandChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {FIRE_ZONE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  建ぺい率（%）
                </label>
                <input
                  type="number"
                  name="buildingCoverage"
                  value={land.buildingCoverage || ''}
                  onChange={handleLandChange}
                  placeholder="60"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  容積率（%）
                </label>
                <input
                  type="number"
                  name="floorAreaRatio"
                  value={land.floorAreaRatio || ''}
                  onChange={handleLandChange}
                  placeholder="200"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  土地に関する備考
                </label>
                <textarea
                  name="notes"
                  value={land.notes || ''}
                  onChange={handleLandChange}
                  rows={2}
                  placeholder="特記事項があれば..."
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* ステップ3: 建物情報 */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">建物情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  商品（プラン）
                </label>
                <select
                  name="planType"
                  value={building.planType}
                  onChange={handleBuildingChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {PLAN_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  階数
                </label>
                <select
                  name="floors"
                  value={building.floors}
                  onChange={handleBuildingChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3].map((n) => (
                    <option key={n} value={n}>
                      {n}階建て
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  構造
                </label>
                <select
                  name="structure"
                  value={building.structure}
                  onChange={handleBuildingChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {STRUCTURE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  延床面積（㎡） <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="totalFloorArea"
                  value={building.totalFloorArea || ''}
                  onChange={handleBuildingChange}
                  placeholder="120"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  建築面積（㎡）
                </label>
                <input
                  type="number"
                  name="buildingArea"
                  value={building.buildingArea || ''}
                  onChange={handleBuildingChange}
                  placeholder="60"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  屋根形状
                </label>
                <select
                  name="roofType"
                  value={building.roofType || '切妻'}
                  onChange={handleBuildingChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {ROOF_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  外観スタイル
                </label>
                <select
                  name="exteriorStyle"
                  value={building.exteriorStyle || 'モダン'}
                  onChange={handleBuildingChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  {STYLE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="md:col-span-2 lg:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  建物に関する備考
                </label>
                <textarea
                  name="notes"
                  value={building.notes || ''}
                  onChange={handleBuildingChange}
                  rows={2}
                  placeholder="特記事項があれば..."
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* ステップ4: 確認 */}
        {currentStep === 4 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">入力内容の確認</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* サマリー */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" /> お客様情報
                </h3>
                <dl className="text-sm space-y-1">
                  <div><dt className="text-gray-500 inline">名前:</dt> <dd className="inline">{customer.name}</dd></div>
                  <div><dt className="text-gray-500 inline">メール:</dt> <dd className="inline">{customer.email}</dd></div>
                  {customer.phone && <div><dt className="text-gray-500 inline">電話:</dt> <dd className="inline">{customer.phone}</dd></div>}
                </dl>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> 土地情報
                </h3>
                <dl className="text-sm space-y-1">
                  <div><dt className="text-gray-500 inline">住所:</dt> <dd className="inline">{land.address}</dd></div>
                  {land.area && <div><dt className="text-gray-500 inline">敷地:</dt> <dd className="inline">{land.area}㎡</dd></div>}
                  <div><dt className="text-gray-500 inline">防火:</dt> <dd className="inline">{land.fireZone}</dd></div>
                </dl>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-medium text-purple-800 mb-2 flex items-center gap-2">
                  <Home className="w-4 h-4" /> 建物情報
                </h3>
                <dl className="text-sm space-y-1">
                  <div><dt className="text-gray-500 inline">プラン:</dt> <dd className="inline">{building.planType}</dd></div>
                  <div><dt className="text-gray-500 inline">延床:</dt> <dd className="inline">{building.totalFloorArea}㎡</dd></div>
                  <div><dt className="text-gray-500 inline">構造:</dt> <dd className="inline">{building.structure} {building.floors}階</dd></div>
                </dl>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* フッター */}
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
              className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              <Check className="w-4 h-4" />
              プロジェクト作成
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
