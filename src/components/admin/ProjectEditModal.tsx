import { useState, useEffect } from 'react';
import {
  X,
  Check,
  Building,
  Layers,
  Home,
  Zap,
  Droplets,
  Save,
  AlertCircle,
} from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { useToast } from '../common/Toast';

interface ProjectEditModalProps {
  projectId: string;
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: ProjectFormData) => void;
}

// フォームデータの型定義
export interface ProjectFormData {
  // 一般情報
  customer_name: string;
  construction_name: string;
  construction_address: string;

  // 地域
  fire_zone: string; // 防火区分
  salt_damage_zone: string; // 塩害区分
  snow_zone: string; // 積雪区分

  // 仕様
  fire_resistance: string; // 耐火仕様
  product_plan: string; // 商品（LIFE/LIFE+/HOURS/LACIE）
  construction_method: string; // 工法

  // 建物詳細
  floors: number; // 階数
  ceiling_height_1f: number; // 天井高1階
  ceiling_height_2f: number; // 天井高2階
  ceiling_height_3f: number; // 天井高3階

  // 構造と規格
  ground_improvement: string; // 地盤改良
  damper: string; // 制振ダンパー
  module: string; // モジュール

  // 各種申請
  certifications: string[];

  // アクセントクロス
  total_area: number;
  accent_cross_area: number;

  // 外装・屋根・外壁
  roof: boolean;
  external_piping: boolean;
  fascia: string; // 破風・鼻隠し
  awning: string; // 庇

  // 軒天
  soffit_enabled: boolean;
  soffit_a: number;
  soffit_b: number;
  soffit_c: number;
  soffit_d: number;

  // 軒樋・竪樋
  gutter_a: boolean;
  gutter_b: boolean;
  downspout_a: boolean;
  downspout_b: boolean;

  // 外壁オプション
  exterior_wall_base: number;
  exterior_wall_a: number;
  exterior_wall_b: number;
  exterior_wall_c: number;
  exterior_wall_d: number;

  // バルコニー・ポーチ
  balcony: string;
  balcony_cap: string;
  balcony_cap_count: number;
  porch: string;
  porch_count: number;
  porch_area: number;
  porch_size_expansion: boolean;
  entrance_door: number;
  parapet_cap: string;
  parapet_cap_count: number;

  // 換気・水切
  ventilation_hood: boolean;
  base_flashing: boolean;
  sleeve_cover: boolean;

  // 窓
  window_type: string;
  shutter_1f: string;
  shutter_2f: string;
  shutter_3f: string;

  // ガレージシャッター
  garage_shutter: string;
  garage_shutter_fire_rated: string;
  garage_shutter_count: number;
  garage_shutter_price: number;

  // 屋外天井点検口
  outdoor_ceiling_access: string;

  // 給排水（階別）
  rooms_1f: { name: string; plumbing: string }[];
  rooms_2f: { name: string; plumbing: string }[];
  rooms_3f: { name: string; plumbing: string }[];

  // 水栓
  balcony_faucet: string;
  external_faucet_a: boolean;
  external_faucet_b: boolean;
  nano_bubble: boolean;

  // 電気設備
  intercom: boolean;
  tv_antenna: boolean;
  electric_meter_box: boolean;
  security_camera: boolean;
  wiring_fixtures: boolean;
  junction_box: boolean;
  surface_box: boolean;
  relay_pole: string;
  meter_box_integrated: string;
  electric_meter_box_type: string;

  // 太陽光発電
  solar_panel: string;
  solar_manufacturer: string;

  // 蓄電池
  battery: string;
  battery_manufacturer: string;

  // 換気システム
  ventilation_manufacturer: string;
  supply_air_a: boolean;
  supply_air_b: boolean;
  exhaust_air_a: boolean;
  exhaust_air_b: boolean;

  // 内装追加情報
  ceiling_modification: string;
  ceiling_modification_type: string;
  ceiling_modification_area: number;

  // 階段
  staircase: string;
  staircase_wall: string;
  step_board: boolean;
  riser_board: boolean;
  handrail_a: boolean;
  handrail_b: boolean;

  // その他
  heat_exchanger: string;
  entrance_frame: boolean;
  baseboard_a: boolean;
  baseboard_b: boolean;
  window_sill_a: boolean;
  window_sill_b: boolean;
  floor_access: number;
  ceiling_access: number;
  supply_grille: number;
  niche_count: number;
  storage_door_w900: number;
  storage_door_w1800: number;

  // 内装全体
  gas_supply: string;
  gas_dryer: string;
  gas_dryer_count: number;
  laundry_pole: number;
  downlight_work: number;
  indirect_lighting_box: string;
  indirect_lighting_room: string;
  cove_lighting: number;
  cornice_lighting: number;
  upper_lighting: number;
  curtain_box: string;
  curtain_box_room: string;
  curtain_box_ceiling_type: number;
  curtain_box_wall_type: number;
  floor_reinforcement: string;
  floor_reinforcement_room: string;
  raised_floor_space: string;

  // ドア形状
  swing_door_add: number;
  sliding_door_change: number;
  sliding_door_add: number;

  // 室内窓
  interior_window: string;
  interior_window_room: string;

  // スイッチ・コンセント
  pilot_switch: number;
  three_four_way_switch: number;
  outlet_2port: number;
  outlet_4port: number;
  outlet_2port_grounded: number;
  outlet_6port: number;
  outlet_2port_grounded_special: number;
  lan_conduit: number;
  tv_outlet: number;
  wall_mount_tv_conduit: number;
  aircon_outlet_100v: number;
  aircon_outlet_200v: number;
  lan_outlet: number;
  ih_200v_outlet: number;
  phone_outlet: number;
  solar_emergency_outlet: number;
  floor_outlet_f_type: number;
  s_plate_outlet: number;
}

// 選択肢の定義
const FIRE_ZONE_OPTIONS = [
  { value: 'law22', label: '法22条地域' },
  { value: 'semi_fire', label: '準防火地域' },
  { value: 'fire', label: '防火地域' },
  { value: 'none', label: '指定なし' },
];

const SALT_DAMAGE_OPTIONS = [
  { value: 'general', label: '一般地' },
  { value: 'salt', label: '塩害地' },
];

const SNOW_ZONE_OPTIONS = [
  { value: 'general', label: '一般区域' },
  { value: 'heavy_snow', label: '多雪区域' },
];

const FIRE_RESISTANCE_OPTIONS = [
  { value: 'ministerial', label: '省令準耐火仕様' },
  { value: '45min', label: '45分準耐火仕様' },
  { value: '75min', label: '75分準耐火仕様' },
];

const PRODUCT_PLAN_OPTIONS = [
  { value: 'LIFE', label: 'LIFE' },
  { value: 'LIFE+', label: 'LIFE+ リミテッド' },
  { value: 'HOURS', label: 'HOURS' },
  { value: 'LACIE', label: 'LACIE' },
];

const CONSTRUCTION_METHOD_OPTIONS = [
  { value: 'conventional', label: '木造在来軸組工法' },
  { value: 'techno', label: 'テクノストラクチャー' },
];

const FLOOR_OPTIONS = [
  { value: 1, label: '平屋' },
  { value: 2, label: '2階建' },
  { value: 3, label: '3階建' },
];

const CEILING_HEIGHT_OPTIONS = [
  { value: 2100, label: '2100mm' },
  { value: 2150, label: '2150mm' },
  { value: 2200, label: '2200mm' },
  { value: 2250, label: '2250mm' },
  { value: 2300, label: '2300mm' },
  { value: 2400, label: '2400mm' },
  { value: 2500, label: '2500mm' },
  { value: 2600, label: '2600mm' },
];

const GROUND_IMPROVEMENT_OPTIONS = [
  { value: 'yes', label: '地盤改良 有' },
  { value: 'no', label: '地盤改良 無' },
];

const DAMPER_OPTIONS = [
  { value: 'evoltz', label: 'エボルツ' },
  { value: 'techno', label: 'テクノダンパー' },
  { value: 'none', label: 'なし' },
];

const MODULE_OPTIONS = [
  { value: '910', label: '910mm' },
  { value: '1000', label: '1000mm' },
];

const CERTIFICATION_OPTIONS = [
  { value: 'long_term', label: '長期優良住宅' },
  { value: 'bels', label: 'BELS' },
  { value: 'jio', label: '住宅性能証明（JIO）' },
  { value: 'flat', label: 'フラット' },
];

// セクションの定義
const SECTIONS = [
  { id: 'general', name: '一般情報', icon: Building },
  { id: 'exterior', name: '外装・屋根・外壁・外部周り', icon: Home },
  { id: 'plumbing', name: '外装・給排水', icon: Droplets },
  { id: 'electrical', name: '外装・電気', icon: Zap },
  { id: 'interior_1f', name: '内装・部屋（1階）', icon: Layers },
  { id: 'interior_add_1f', name: '内装・追加情報（1階）', icon: Layers },
  { id: 'interior_2f', name: '内装・部屋（2階）', icon: Layers },
  { id: 'interior_add_2f', name: '内装・追加情報（2階）', icon: Layers },
  { id: 'interior_3f', name: '内装・部屋（3階）', icon: Layers },
  { id: 'interior_add_3f', name: '内装・追加情報（3階）', icon: Layers },
  { id: 'interior_overall', name: '内装全体の追加情報', icon: Layers },
];

// 初期値
const getInitialFormData = (): ProjectFormData => ({
  customer_name: '',
  construction_name: '',
  construction_address: '',
  fire_zone: 'semi_fire',
  salt_damage_zone: 'general',
  snow_zone: 'general',
  fire_resistance: '45min',
  product_plan: 'LIFE+',
  construction_method: 'conventional',
  floors: 2,
  ceiling_height_1f: 2400,
  ceiling_height_2f: 2400,
  ceiling_height_3f: 2300,
  ground_improvement: 'no',
  damper: 'evoltz',
  module: '910',
  certifications: ['long_term', 'bels'],
  total_area: 100,
  accent_cross_area: 80,
  roof: true,
  external_piping: true,
  fascia: '無',
  awning: '無',
  soffit_enabled: true,
  soffit_a: 15,
  soffit_b: 18,
  soffit_c: 0,
  soffit_d: 0,
  gutter_a: true,
  gutter_b: true,
  downspout_a: true,
  downspout_b: true,
  exterior_wall_base: 0,
  exterior_wall_a: 0,
  exterior_wall_b: 0,
  exterior_wall_c: 0,
  exterior_wall_d: 0,
  balcony: '有 FRP防水仕上げFRP防水・下地：構造用合板',
  balcony_cap: '有',
  balcony_cap_count: 1,
  porch: '有',
  porch_count: 1,
  porch_area: 0,
  porch_size_expansion: false,
  entrance_door: 1,
  parapet_cap: '有',
  parapet_cap_count: 1,
  ventilation_hood: true,
  base_flashing: true,
  sleeve_cover: true,
  window_type: 'APW330 アルミスペーサー',
  shutter_1f: 'なし',
  shutter_2f: 'なし',
  shutter_3f: '文化シャッター カルーチェIV 手動防火先付外',
  garage_shutter: '有',
  garage_shutter_fire_rated: '有',
  garage_shutter_count: 1,
  garage_shutter_price: 0,
  outdoor_ceiling_access: '有',
  rooms_1f: [{ name: 'キッチン', plumbing: '給水・給湯・排水' }],
  rooms_2f: [{ name: '浴室', plumbing: '給水・給湯・排水' }],
  rooms_3f: [{ name: 'なし', plumbing: '-' }],
  balcony_faucet: '有（給水のみ）',
  external_faucet_a: true,
  external_faucet_b: true,
  nano_bubble: true,
  intercom: true,
  tv_antenna: true,
  electric_meter_box: true,
  security_camera: true,
  wiring_fixtures: true,
  junction_box: true,
  surface_box: true,
  relay_pole: '無',
  meter_box_integrated: '-',
  electric_meter_box_type: '小メーターなし',
  solar_panel: '有',
  solar_manufacturer: 'ネクストエナジー',
  battery: '無',
  battery_manufacturer: '-',
  ventilation_manufacturer: 'Panasonic',
  supply_air_a: true,
  supply_air_b: true,
  exhaust_air_a: true,
  exhaust_air_b: true,
  ceiling_modification: '有',
  ceiling_modification_type: '天井高UP (H2600迄) - 100mm',
  ceiling_modification_area: 0,
  staircase: '木製階段',
  staircase_wall: '無',
  step_board: true,
  riser_board: true,
  handrail_a: true,
  handrail_b: false,
  heat_exchanger: '有',
  entrance_frame: false,
  baseboard_a: true,
  baseboard_b: false,
  window_sill_a: true,
  window_sill_b: false,
  floor_access: 0,
  ceiling_access: 0,
  supply_grille: 0,
  niche_count: 0,
  storage_door_w900: 0,
  storage_door_w1800: 0,
  gas_supply: '無',
  gas_dryer: '無',
  gas_dryer_count: 0,
  laundry_pole: 0,
  downlight_work: 0,
  indirect_lighting_box: '有',
  indirect_lighting_room: '洋室5（3階）',
  cove_lighting: 0,
  cornice_lighting: 0,
  upper_lighting: 0,
  curtain_box: '有',
  curtain_box_room: 'LDK (2階)',
  curtain_box_ceiling_type: 0,
  curtain_box_wall_type: 0,
  floor_reinforcement: '無',
  floor_reinforcement_room: '',
  raised_floor_space: '',
  swing_door_add: 0,
  sliding_door_change: 0,
  sliding_door_add: 0,
  interior_window: '無',
  interior_window_room: '',
  pilot_switch: 0,
  three_four_way_switch: 0,
  outlet_2port: 0,
  outlet_4port: 0,
  outlet_2port_grounded: 0,
  outlet_6port: 0,
  outlet_2port_grounded_special: 0,
  lan_conduit: 0,
  tv_outlet: 0,
  wall_mount_tv_conduit: 0,
  aircon_outlet_100v: 0,
  aircon_outlet_200v: 0,
  lan_outlet: 0,
  ih_200v_outlet: 0,
  phone_outlet: 0,
  solar_emergency_outlet: 0,
  floor_outlet_f_type: 0,
  s_plate_outlet: 0,
});

export function ProjectEditModal({ projectId, isOpen, onClose, onSave }: ProjectEditModalProps) {
  const toast = useToast();
  const [activeSection, setActiveSection] = useState('general');
  const [formData, setFormData] = useState<ProjectFormData>(getInitialFormData());
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // プロジェクトデータの読み込み
  useEffect(() => {
    if (isOpen && projectId && isSupabaseConfigured) {
      loadProjectData();
    }
  }, [isOpen, projectId]);

  const loadProjectData = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', projectId)
        .single();

      if (error) throw error;

      if (data) {
        // データをフォームにマッピング
        setFormData(prev => ({
          ...prev,
          customer_name: data.customer_name || '',
          construction_name: data.name || '',
          construction_address: data.address || '',
          product_plan: data.plan || 'LIFE+',
          floors: data.floors || 2,
          // 他のフィールドもマッピング
        }));
      }
    } catch (error) {
      console.error('Failed to load project:', error);
      toast.error('プロジェクトの読み込みに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      if (onSave) {
        onSave(formData);
      }

      if (isSupabaseConfigured) {
        const { error } = await supabase
          .from('projects')
          .update({
            customer_name: formData.customer_name,
            name: formData.construction_name,
            address: formData.construction_address,
            plan: formData.product_plan,
            floors: formData.floors,
            // 他のフィールドも保存
            updated_at: new Date().toISOString(),
          })
          .eq('id', projectId);

        if (error) throw error;
      }

      toast.success('保存しました');
      onClose();
    } catch (error) {
      console.error('Failed to save:', error);
      toast.error('保存に失敗しました');
    } finally {
      setIsSaving(false);
    }
  };

  const handleFieldChange = (field: keyof ProjectFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // 将来の使用のために保持（セクション完了ボタン追加時に使用）
  const _markSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => new Set([...prev, sectionId]));
    const currentIndex = SECTIONS.findIndex(s => s.id === sectionId);
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
    }
  };
  void _markSectionComplete; // 未使用警告を抑制

  const goToNextSection = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
    }
  };

  const goToPrevSection = () => {
    const currentIndex = SECTIONS.findIndex(s => s.id === activeSection);
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl w-[95vw] max-w-6xl h-[90vh] flex flex-col">
        {/* ヘッダー */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            プロジェクトを編集
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700:text-gray-300 rounded-lg hover:bg-gray-100:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* メインコンテンツ */}
        <div className="flex flex-1 overflow-hidden">
          {/* サイドバー */}
          <div className="w-64 border-r border-gray-200 overflow-y-auto bg-gray-50">
            <nav className="p-4 space-y-1">
              {SECTIONS.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                const isCompleted = completedSections.has(section.id);

                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100:bg-gray-700'
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                    <span className="text-sm font-medium">{section.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* フォームエリア */}
          <div className="flex-1 overflow-y-auto p-6">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                {/* 一般情報セクション */}
                {activeSection === 'general' && (
                  <GeneralInfoSection
                    formData={formData}
                    onChange={handleFieldChange}
                  />
                )}

                {/* 外装・屋根・外壁セクション */}
                {activeSection === 'exterior' && (
                  <ExteriorSection
                    formData={formData}
                    onChange={handleFieldChange}
                  />
                )}

                {/* 給排水セクション */}
                {activeSection === 'plumbing' && (
                  <PlumbingSection
                    formData={formData}
                    onChange={handleFieldChange}
                  />
                )}

                {/* 電気セクション */}
                {activeSection === 'electrical' && (
                  <ElectricalSection
                    formData={formData}
                    onChange={handleFieldChange}
                  />
                )}

                {/* 内装全体セクション */}
                {activeSection === 'interior_overall' && (
                  <InteriorOverallSection
                    formData={formData}
                    onChange={handleFieldChange}
                  />
                )}

                {/* その他のセクションは準備中表示 */}
                {['interior_1f', 'interior_add_1f', 'interior_2f', 'interior_add_2f', 'interior_3f', 'interior_add_3f'].includes(activeSection) && (
                  <div className="text-center py-12 text-gray-500">
                    <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>このセクションは準備中です</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* フッター */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={goToPrevSection}
            disabled={activeSection === SECTIONS[0].id}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100:bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            前へ
          </button>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100:bg-gray-700 rounded-lg"
            >
              キャンセル
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {isSaving ? '保存中...' : '保存'}
            </button>
          </div>

          <button
            onClick={goToNextSection}
            disabled={activeSection === SECTIONS[SECTIONS.length - 1].id}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            次へ
          </button>
        </div>
      </div>
    </div>
  );
}

// 一般情報セクション
function GeneralInfoSection({ formData, onChange }: { formData: ProjectFormData; onChange: (field: keyof ProjectFormData, value: any) => void }) {
  return (
    <div className="space-y-8">
      {/* クライアント */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">クライアント</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            お客様名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.customer_name}
            onChange={(e) => onChange('customer_name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
          />
        </div>
      </div>

      {/* 建設 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">建設</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              工事名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.construction_name}
              onChange={(e) => onChange('construction_name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              建築地（地番） <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.construction_address}
              onChange={(e) => onChange('construction_address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            />
          </div>
        </div>
      </div>

      {/* 地域 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">地域</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              防火区分 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.fire_zone}
              onChange={(e) => onChange('fire_zone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {FIRE_ZONE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              塩害区分
            </label>
            <select
              value={formData.salt_damage_zone}
              onChange={(e) => onChange('salt_damage_zone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {SALT_DAMAGE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              積雪区分
            </label>
            <select
              value={formData.snow_zone}
              onChange={(e) => onChange('snow_zone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {SNOW_ZONE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 仕様 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">仕様</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              耐火仕様 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.fire_resistance}
              onChange={(e) => onChange('fire_resistance', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {FIRE_RESISTANCE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              商品 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.product_plan}
              onChange={(e) => onChange('product_plan', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {PRODUCT_PLAN_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              工法 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.construction_method}
              onChange={(e) => onChange('construction_method', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {CONSTRUCTION_METHOD_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 建物詳細 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">建物詳細</h3>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              階数 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.floors}
              onChange={(e) => onChange('floors', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {FLOOR_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              天井高 1階 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.ceiling_height_1f}
              onChange={(e) => onChange('ceiling_height_1f', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {CEILING_HEIGHT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              天井高 2階 <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.ceiling_height_2f}
              onChange={(e) => onChange('ceiling_height_2f', parseInt(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {CEILING_HEIGHT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          {formData.floors >= 3 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                天井高 3階 <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.ceiling_height_3f}
                onChange={(e) => onChange('ceiling_height_3f', parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
              >
                {CEILING_HEIGHT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* 構造と規格 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">構造と規格</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              地盤改良
            </label>
            <select
              value={formData.ground_improvement}
              onChange={(e) => onChange('ground_improvement', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {GROUND_IMPROVEMENT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              制振ダンパー <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.damper}
              onChange={(e) => onChange('damper', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {DAMPER_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              モジュール <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.module}
              onChange={(e) => onChange('module', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
            >
              {MODULE_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 各種申請 */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">各種申請</h3>
        <div className="grid grid-cols-2 gap-4">
          {CERTIFICATION_OPTIONS.map(opt => (
            <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.certifications.includes(opt.value)}
                onChange={(e) => {
                  const newCerts = e.target.checked
                    ? [...formData.certifications, opt.value]
                    : formData.certifications.filter(c => c !== opt.value);
                  onChange('certifications', newCerts);
                }}
                className="w-4 h-4 text-blue-500 rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* アクセントクロス */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">アクセントクロス</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              総合面積
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={formData.total_area}
                onChange={(e) => onChange('total_area', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
              />
              <span className="text-sm text-gray-500">㎡</span>
            </div>
            <div className="mt-2 px-3 py-2 bg-blue-50 rounded-lg">
              <span className="text-sm text-gray-500">坪:</span>
              <span className="ml-2 text-blue-600 font-medium">
                {(formData.total_area * 0.3025).toFixed(2)}
              </span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              アクセントクロス総平米数
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={formData.accent_cross_area}
                onChange={(e) => onChange('accent_cross_area', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
              />
              <span className="text-sm text-gray-500">㎡</span>
            </div>
            <div className="mt-2 px-3 py-2 bg-gray-50 rounded-lg text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">総合面積:</span>
                <span>{formData.total_area} ㎡</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">残り:</span>
                <span>{formData.total_area - formData.accent_cross_area} ㎡</span>
              </div>
              <div className="flex justify-between text-blue-600">
                <span>無料アクセントクロス平米数:</span>
                <span>{Math.min(formData.accent_cross_area, formData.total_area * 0.6).toFixed(1)} ㎡</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>有料アクセントクロス平米数:</span>
                <span>{Math.max(0, formData.accent_cross_area - formData.total_area * 0.6).toFixed(1)} ㎡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 外装セクション（簡略版）
function ExteriorSection({ formData, onChange }: { formData: ProjectFormData; onChange: (field: keyof ProjectFormData, value: any) => void }) {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold text-gray-900">外装・屋根・外壁・外部周り</h3>

      {/* 屋根 */}
      <div className="grid grid-cols-2 gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.roof}
            onChange={(e) => onChange('roof', e.target.checked)}
            className="w-4 h-4 text-blue-500 rounded"
          />
          <span className="text-sm">屋根</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.external_piping}
            onChange={(e) => onChange('external_piping', e.target.checked)}
            className="w-4 h-4 text-blue-500 rounded"
          />
          <span className="text-sm">外部配管</span>
        </label>
      </div>

      {/* 破風・庇 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">破風・鼻隠し</label>
          <select
            value={formData.fascia}
            onChange={(e) => onChange('fascia', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-white"
          >
            <option value="無">無</option>
            <option value="有">有</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">庇</label>
          <select
            value={formData.awning}
            onChange={(e) => onChange('awning', e.target.value)}
            className="w-full px-3 py-2 border rounded-lg bg-white"
          >
            <option value="無">無</option>
            <option value="有">有</option>
          </select>
        </div>
      </div>

      {/* 軒天 */}
      <div>
        <h4 className="font-medium mb-2">軒天</h4>
        <label className="flex items-center gap-2 mb-3">
          <input
            type="checkbox"
            checked={formData.soffit_enabled}
            onChange={(e) => onChange('soffit_enabled', e.target.checked)}
            className="w-4 h-4 text-blue-500 rounded"
          />
          <span className="text-sm">軒天 有</span>
        </label>
        {formData.soffit_enabled && (
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-sm mb-1">軒天 (A)</label>
              <input
                type="number"
                value={formData.soffit_a}
                onChange={(e) => onChange('soffit_a', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border rounded-lg bg-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">軒天 (B)</label>
              <input
                type="number"
                value={formData.soffit_b}
                onChange={(e) => onChange('soffit_b', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border rounded-lg bg-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">軒天 (C)</label>
              <input
                type="number"
                value={formData.soffit_c}
                onChange={(e) => onChange('soffit_c', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border rounded-lg bg-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">軒天 (D)</label>
              <input
                type="number"
                value={formData.soffit_d}
                onChange={(e) => onChange('soffit_d', parseFloat(e.target.value) || 0)}
                className="w-full px-3 py-2 border rounded-lg bg-white"
              />
            </div>
          </div>
        )}
      </div>

      {/* 軒樋・竪樋 */}
      <div>
        <h4 className="font-medium mb-2">軒樋・竪樋</h4>
        <div className="grid grid-cols-4 gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.gutter_a}
              onChange={(e) => onChange('gutter_a', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">軒樋 (A)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.gutter_b}
              onChange={(e) => onChange('gutter_b', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">軒樋 (B)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.downspout_a}
              onChange={(e) => onChange('downspout_a', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">竪樋 (A)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.downspout_b}
              onChange={(e) => onChange('downspout_b', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">竪樋 (B)</span>
          </label>
        </div>
      </div>

      {/* ガレージシャッター */}
      <div>
        <h4 className="font-medium mb-2">外部周り・ガレージシャッター</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">ガレージシャッター</label>
            <select
              value={formData.garage_shutter}
              onChange={(e) => onChange('garage_shutter', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="無">無</option>
              <option value="有">有</option>
            </select>
          </div>
          {formData.garage_shutter === '有' && (
            <>
              <div>
                <label className="block text-sm mb-1">防火</label>
                <select
                  value={formData.garage_shutter_fire_rated}
                  onChange={(e) => onChange('garage_shutter_fire_rated', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg bg-white"
                >
                  <option value="無">無</option>
                  <option value="有">有</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">ガレージシャッターの数</label>
                <input
                  type="number"
                  value={formData.garage_shutter_count}
                  onChange={(e) => onChange('garage_shutter_count', parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border rounded-lg bg-white"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">ガレージシャッター(A)の価格</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.garage_shutter_price}
                    onChange={(e) => onChange('garage_shutter_price', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border rounded-lg bg-white"
                  />
                  <span className="text-sm">円</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// 給排水セクション
function PlumbingSection({ formData, onChange }: { formData: ProjectFormData; onChange: (field: keyof ProjectFormData, value: any) => void }) {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold text-gray-900">外装・給排水</h3>

      {/* 1F */}
      <div>
        <h4 className="font-medium mb-2">1F</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">部屋名 1 <span className="text-red-500">*</span></label>
            <select
              value={formData.rooms_1f[0]?.name || ''}
              onChange={(e) => {
                const newRooms = [...formData.rooms_1f];
                if (!newRooms[0]) newRooms[0] = { name: '', plumbing: '給水・給湯・排水' };
                newRooms[0].name = e.target.value;
                onChange('rooms_1f', newRooms);
              }}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="キッチン">キッチン</option>
              <option value="洗面所">洗面所</option>
              <option value="トイレ">トイレ</option>
              <option value="浴室">浴室</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">給排水 <span className="text-red-500">*</span></label>
            <select
              value={formData.rooms_1f[0]?.plumbing || ''}
              onChange={(e) => {
                const newRooms = [...formData.rooms_1f];
                if (!newRooms[0]) newRooms[0] = { name: 'キッチン', plumbing: '' };
                newRooms[0].plumbing = e.target.value;
                onChange('rooms_1f', newRooms);
              }}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="給水・給湯・排水">給水・給湯・排水</option>
              <option value="給水・排水">給水・排水</option>
              <option value="給水のみ">給水のみ</option>
            </select>
          </div>
        </div>
      </div>

      {/* 水栓 */}
      <div>
        <h4 className="font-medium mb-2">水栓</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">バルコニー水栓 <span className="text-red-500">*</span></label>
            <select
              value={formData.balcony_faucet}
              onChange={(e) => onChange('balcony_faucet', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="無">無</option>
              <option value="有（給水のみ）">有（給水のみ）</option>
              <option value="有（給水・給湯）">有（給水・給湯）</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.external_faucet_a}
              onChange={(e) => onChange('external_faucet_a', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">外部水栓 (A)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.external_faucet_b}
              onChange={(e) => onChange('external_faucet_b', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">外部水栓 (B)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.nano_bubble}
              onChange={(e) => onChange('nano_bubble', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">ナノバブル発生装置</span>
          </label>
        </div>
      </div>
    </div>
  );
}

// 電気セクション
function ElectricalSection({ formData, onChange }: { formData: ProjectFormData; onChange: (field: keyof ProjectFormData, value: any) => void }) {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold text-gray-900">外装・電気</h3>

      {/* 電気設備 */}
      <div>
        <h4 className="font-medium mb-2">電気設備</h4>
        <div className="grid grid-cols-3 gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.intercom}
              onChange={(e) => onChange('intercom', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">インターホン</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.tv_antenna}
              onChange={(e) => onChange('tv_antenna', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">TVアンテナ</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.electric_meter_box}
              onChange={(e) => onChange('electric_meter_box', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">電気メーターBOX</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.security_camera}
              onChange={(e) => onChange('security_camera', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">防犯カメラ</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.wiring_fixtures}
              onChange={(e) => onChange('wiring_fixtures', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">配線器具</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.junction_box}
              onChange={(e) => onChange('junction_box', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">ジョイントボックス</span>
          </label>
        </div>
      </div>

      {/* 太陽光発電 */}
      <div>
        <h4 className="font-medium mb-2">太陽光発電</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">太陽光発電 <span className="text-red-500">*</span></label>
            <select
              value={formData.solar_panel}
              onChange={(e) => onChange('solar_panel', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="無">無</option>
              <option value="有">有</option>
            </select>
          </div>
          {formData.solar_panel === '有' && (
            <div>
              <label className="block text-sm mb-1">メーカー <span className="text-red-500">*</span></label>
              <select
                value={formData.solar_manufacturer}
                onChange={(e) => onChange('solar_manufacturer', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-white"
              >
                <option value="ネクストエナジー">ネクストエナジー</option>
                <option value="パナソニック">パナソニック</option>
                <option value="シャープ">シャープ</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* 蓄電池 */}
      <div>
        <h4 className="font-medium mb-2">蓄電池</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">蓄電池 <span className="text-red-500">*</span></label>
            <select
              value={formData.battery}
              onChange={(e) => onChange('battery', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="無">無</option>
              <option value="有">有</option>
            </select>
          </div>
          {formData.battery === '有' && (
            <div>
              <label className="block text-sm mb-1">メーカー</label>
              <select
                value={formData.battery_manufacturer}
                onChange={(e) => onChange('battery_manufacturer', e.target.value)}
                className="w-full px-3 py-2 border rounded-lg bg-white"
              >
                <option value="-">-</option>
                <option value="パナソニック">パナソニック</option>
                <option value="シャープ">シャープ</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* 換気システム */}
      <div>
        <h4 className="font-medium mb-2">換気システム</h4>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">メーカー <span className="text-red-500">*</span></label>
            <select
              value={formData.ventilation_manufacturer}
              onChange={(e) => onChange('ventilation_manufacturer', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="Panasonic">Panasonic</option>
              <option value="三菱電機">三菱電機</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.supply_air_a}
              onChange={(e) => onChange('supply_air_a', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">給気 (A)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.supply_air_b}
              onChange={(e) => onChange('supply_air_b', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">給気 (B)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.exhaust_air_a}
              onChange={(e) => onChange('exhaust_air_a', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">排気 (A)</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.exhaust_air_b}
              onChange={(e) => onChange('exhaust_air_b', e.target.checked)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className="text-sm">排気 (B)</span>
          </label>
        </div>
      </div>
    </div>
  );
}

// 内装全体セクション
function InteriorOverallSection({ formData, onChange }: { formData: ProjectFormData; onChange: (field: keyof ProjectFormData, value: any) => void }) {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold text-gray-900">内装全体の追加情報</h3>

      {/* その他 */}
      <div>
        <h4 className="font-medium mb-2">その他</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">ガス個所</label>
            <select
              value={formData.gas_supply}
              onChange={(e) => onChange('gas_supply', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="無">無</option>
              <option value="有">有</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">乾太くん</label>
            <select
              value={formData.gas_dryer}
              onChange={(e) => onChange('gas_dryer', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="無">無</option>
              <option value="有">有</option>
            </select>
          </div>
        </div>
      </div>

      {/* ダウンライト施工 */}
      <div>
        <label className="block text-sm font-medium mb-1">ダウンライト施工</label>
        <input
          type="number"
          value={formData.downlight_work}
          onChange={(e) => onChange('downlight_work', parseInt(e.target.value) || 0)}
          className="w-32 px-3 py-2 border rounded-lg bg-white"
        />
      </div>

      {/* 間接照明BOX */}
      <div>
        <h4 className="font-medium mb-2">間接照明BOX</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">間接照明BOX</label>
            <select
              value={formData.indirect_lighting_box}
              onChange={(e) => onChange('indirect_lighting_box', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="無">無</option>
              <option value="有">有</option>
            </select>
          </div>
          {formData.indirect_lighting_box === '有' && (
            <div>
              <label className="block text-sm mb-1">部屋を選択</label>
              <input
                type="text"
                value={formData.indirect_lighting_room}
                onChange={(e) => onChange('indirect_lighting_room', e.target.value)}
                placeholder="洋室5（3階）"
                className="w-full px-3 py-2 border rounded-lg bg-white"
              />
            </div>
          )}
        </div>
      </div>

      {/* カーテンBOX */}
      <div>
        <h4 className="font-medium mb-2">カーテンBOX</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">カーテンBOX</label>
            <select
              value={formData.curtain_box}
              onChange={(e) => onChange('curtain_box', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg bg-white"
            >
              <option value="無">無</option>
              <option value="有">有</option>
            </select>
          </div>
          {formData.curtain_box === '有' && (
            <div>
              <label className="block text-sm mb-1">部屋を選択</label>
              <input
                type="text"
                value={formData.curtain_box_room}
                onChange={(e) => onChange('curtain_box_room', e.target.value)}
                placeholder="LDK (2階)"
                className="w-full px-3 py-2 border rounded-lg bg-white"
              />
            </div>
          )}
        </div>
      </div>

      {/* スイッチ・コンセント */}
      <div>
        <h4 className="font-medium mb-2">スイッチ・コンセント</h4>
        <div className="space-y-4">
          <div>
            <h5 className="text-sm font-medium mb-2">スイッチ</h5>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">ほたるスイッチ</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.pilot_switch}
                    onChange={(e) => onChange('pilot_switch', parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border rounded bg-white text-sm"
                  />
                  <span className="text-xs text-gray-500">室に25個まで無料</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">3路・4路スイッチ</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.three_four_way_switch}
                    onChange={(e) => onChange('three_four_way_switch', parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border rounded bg-white text-sm"
                  />
                  <span className="text-xs text-gray-500">室に4組まで無料</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-sm font-medium mb-2">コンセント</h5>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">2口コンセント</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.outlet_2port}
                    onChange={(e) => onChange('outlet_2port', parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border rounded bg-white text-sm"
                  />
                  <span className="text-xs text-gray-500">室に25個まで無料</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">4口コンセント</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.outlet_4port}
                    onChange={(e) => onChange('outlet_4port', parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border rounded bg-white text-sm"
                  />
                  <span className="text-xs text-gray-500">室に2組まで無料</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">エアコン用コンセント(100V)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.aircon_outlet_100v}
                    onChange={(e) => onChange('aircon_outlet_100v', parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border rounded bg-white text-sm"
                  />
                  <span className="text-xs text-gray-500">室に5個まで無料</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">エアコン用コンセント(200V)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={formData.aircon_outlet_200v}
                    onChange={(e) => onChange('aircon_outlet_200v', parseInt(e.target.value) || 0)}
                    className="w-20 px-2 py-1 border rounded bg-white text-sm"
                  />
                  <span className="text-xs text-gray-500">室に1個まで無料</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEditModal;
