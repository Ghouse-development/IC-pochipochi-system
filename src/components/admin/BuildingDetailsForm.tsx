import { useState, useEffect } from 'react';
import {
  Building,
  MapPin,
  Layers,
  Shield,
  Home,
  Save,
  RefreshCw,
  Info,
  ChevronDown,
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import type { Project } from '../../types/database';
import { createLogger } from '../../lib/logger';

const logger = createLogger('BuildingDetailsForm');

interface BuildingDetailsFormProps {
  projectId: string;
  onUpdate?: (data: Partial<Project>) => void;
}

interface BuildingFormData {
  construction_name: string;
  construction_address: string;
  region_category: string;
  fire_resistance: string;
  construction_method: string;
  floors: number;
  floor_area: number | null;
  ceiling_height: number | null;
  structure: string;
  building_standard: string;
}

const REGION_CATEGORIES = [
  { value: '1', label: '1地域（北海道北部）' },
  { value: '2', label: '2地域（北海道南部）' },
  { value: '3', label: '3地域（東北）' },
  { value: '4', label: '4地域（関東・北陸・中部山地）' },
  { value: '5', label: '5地域（関東・東海・近畿）' },
  { value: '6', label: '6地域（本州大部分）' },
  { value: '7', label: '7地域（西日本沿岸）' },
  { value: '8', label: '8地域（沖縄）' },
];

const FIRE_RESISTANCE_OPTIONS = [
  { value: 'none', label: '指定なし' },
  { value: '22条区域', label: '22条区域' },
  { value: '準防火地域', label: '準防火地域' },
  { value: '防火地域', label: '防火地域' },
];

const CONSTRUCTION_METHODS = [
  { value: 'wood_frame', label: '木造軸組（在来工法）' },
  { value: 'wood_panel', label: '木造枠組壁（2×4）' },
  { value: 'steel_frame', label: '軽量鉄骨造' },
  { value: 'rc', label: 'RC造' },
];

const STRUCTURE_OPTIONS = [
  { value: '木造', label: '木造' },
  { value: '鉄骨造', label: '鉄骨造' },
  { value: 'RC造', label: 'RC造' },
  { value: 'SRC造', label: 'SRC造' },
];

const BUILDING_STANDARDS = [
  { value: 'standard', label: '標準仕様' },
  { value: 'zeh', label: 'ZEH仕様' },
  { value: 'long_life', label: '長期優良住宅' },
  { value: 'premium', label: 'プレミアム仕様' },
];

export function BuildingDetailsForm({ projectId, onUpdate }: BuildingDetailsFormProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['basic', 'location', 'structure'])
  );

  const [formData, setFormData] = useState<BuildingFormData>({
    construction_name: '',
    construction_address: '',
    region_category: '6',
    fire_resistance: 'none',
    construction_method: 'wood_frame',
    floors: 2,
    floor_area: null,
    ceiling_height: 2400,
    structure: '木造',
    building_standard: 'standard',
  });

  useEffect(() => {
    loadProjectData();
  }, [projectId]);

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
        setFormData({
          construction_name: data.construction_name || '',
          construction_address: data.construction_address || '',
          region_category: data.region_category || '6',
          fire_resistance: data.fire_resistance || 'none',
          construction_method: data.construction_method || 'wood_frame',
          floors: data.floors || 2,
          floor_area: data.floor_area,
          ceiling_height: data.ceiling_height || 2400,
          structure: data.structure || '木造',
          building_standard: data.building_standard || 'standard',
        });
      }
    } catch (err) {
      logger.error('Error loading project:', err);
      setError('プロジェクト情報の読み込みに失敗しました');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    setSuccess(null);

    // バリデーション
    if (formData.floors < 1 || formData.floors > 10) {
      setError('階数は1〜10の範囲で入力してください');
      setIsSaving(false);
      return;
    }
    if (formData.floor_area !== null && (formData.floor_area < 10 || formData.floor_area > 1000)) {
      setError('延床面積は10〜1000㎡の範囲で入力してください');
      setIsSaving(false);
      return;
    }
    if (formData.ceiling_height !== null && (formData.ceiling_height < 2000 || formData.ceiling_height > 5000)) {
      setError('天井高は2000〜5000mmの範囲で入力してください');
      setIsSaving(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('projects')
        .update({
          construction_name: formData.construction_name,
          construction_address: formData.construction_address,
          region_category: formData.region_category,
          fire_resistance: formData.fire_resistance,
          construction_method: formData.construction_method,
          floors: formData.floors,
          floor_area: formData.floor_area,
          ceiling_height: formData.ceiling_height,
          structure: formData.structure,
          building_standard: formData.building_standard,
          updated_at: new Date().toISOString(),
        })
        .eq('id', projectId);

      if (error) throw error;

      setSuccess('建物情報を保存しました');
      onUpdate?.(formData);
    } catch (err) {
      logger.error('Error saving project:', err);
      setError('保存に失敗しました');
    } finally {
      setIsSaving(false);
    }
  };

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const updateField = (field: keyof BuildingFormData, value: string | number | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <RefreshCw className="w-8 h-8 animate-spin text-teal-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Building className="w-5 h-5" />
            建物詳細情報
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            建物の基本情報を入力してください
          </p>
        </div>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50"
        >
          {isSaving ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          保存
        </button>
      </div>

      {/* Messages */}
      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>
      )}
      {success && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg">{success}</div>
      )}

      {/* Basic Info Section */}
      <div className="bg-white rounded-xl shadow-sm border">
        <button
          onClick={() => toggleSection('basic')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <Home className="w-5 h-5 text-teal-600" />
            <span className="font-semibold text-gray-900">基本情報</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              expandedSections.has('basic') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.has('basic') && (
          <div className="px-6 pb-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                工事名称
              </label>
              <input
                type="text"
                value={formData.construction_name}
                onChange={(e) => updateField('construction_name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="例: 山田様邸新築工事"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                建築仕様
              </label>
              <select
                value={formData.building_standard}
                onChange={(e) => updateField('building_standard', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              >
                {BUILDING_STANDARDS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Location Section */}
      <div className="bg-white rounded-xl shadow-sm border">
        <button
          onClick={() => toggleSection('location')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-teal-600" />
            <span className="font-semibold text-gray-900">建設地情報</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              expandedSections.has('location') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.has('location') && (
          <div className="px-6 pb-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                建設地住所
              </label>
              <input
                type="text"
                value={formData.construction_address}
                onChange={(e) => updateField('construction_address', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                placeholder="例: 大阪府大阪市北区..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  省エネ地域区分
                </label>
                <select
                  value={formData.region_category}
                  onChange={(e) => updateField('region_category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                >
                  {REGION_CATEGORIES.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  防火区分
                </label>
                <select
                  value={formData.fire_resistance}
                  onChange={(e) => updateField('fire_resistance', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                >
                  {FIRE_RESISTANCE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Structure Section */}
      <div className="bg-white rounded-xl shadow-sm border">
        <button
          onClick={() => toggleSection('structure')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
        >
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-teal-600" />
            <span className="font-semibold text-gray-900">建物構造</span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform ${
              expandedSections.has('structure') ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedSections.has('structure') && (
          <div className="px-6 pb-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  構造
                </label>
                <select
                  value={formData.structure}
                  onChange={(e) => updateField('structure', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
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
                  工法
                </label>
                <select
                  value={formData.construction_method}
                  onChange={(e) => updateField('construction_method', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                >
                  {CONSTRUCTION_METHODS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  階数
                </label>
                <select
                  value={formData.floors}
                  onChange={(e) => updateField('floors', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                >
                  <option value={1}>1階建て</option>
                  <option value={2}>2階建て</option>
                  <option value={3}>3階建て</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  延床面積（㎡）
                </label>
                <input
                  type="number"
                  value={formData.floor_area || ''}
                  onChange={(e) =>
                    updateField('floor_area', e.target.value ? Number(e.target.value) : null)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="例: 120"
                  step="0.01"
                  min="10"
                  max="1000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  天井高（mm）
                </label>
                <input
                  type="number"
                  value={formData.ceiling_height || ''}
                  onChange={(e) =>
                    updateField('ceiling_height', e.target.value ? Number(e.target.value) : null)
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                  placeholder="例: 2400"
                  step="10"
                  min="2000"
                  max="5000"
                />
              </div>
            </div>
            {formData.floor_area && (
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p>
                    延床面積: <strong>{formData.floor_area}㎡</strong>（約
                    {(formData.floor_area * 0.3025).toFixed(1)}坪）
                  </p>
                  <p className="mt-1">
                    この坪数に基づき、標準窓数などが自動計算されます。
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Fire Resistance Info */}
      {formData.fire_resistance !== 'none' && (
        <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-medium">防火区分が設定されています</p>
            <p className="mt-1">
              {formData.fire_resistance}の指定があります。
              外壁材・サッシなど、防火性能を満たす仕様が必要です。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuildingDetailsForm;
