/**
 * ポーチタイル設定管理コンポーネント
 * 管理画面からタイル種類・目地色を登録・編集・削除できる
 */
import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Save, X, Upload, Star, Loader2, GripVertical, Image as ImageIcon } from 'lucide-react';
import { usePorchTileSettings, type TileOption, type GroutOption } from '../../hooks/usePorchTileSettings';
import { ImageService } from '../../services/imageService';
import { useToast } from '../common/Toast';

type ActiveTab = 'tiles' | 'grout';

export const PorchTileSettings: React.FC = () => {
  const toast = useToast();
  const {
    tiles,
    groutColors,
    isLoading,
    error,
    addTile,
    updateTile,
    deleteTile,
    addGroutColor,
    updateGroutColor,
    deleteGroutColor,
    refresh,
  } = usePorchTileSettings();

  const [activeTab, setActiveTab] = useState<ActiveTab>('tiles');
  const [editingTile, setEditingTile] = useState<TileOption | null>(null);
  const [editingGrout, setEditingGrout] = useState<GroutOption | null>(null);
  const [isAddingTile, setIsAddingTile] = useState(false);
  const [isAddingGrout, setIsAddingGrout] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // 新規タイルのフォーム状態
  const [newTile, setNewTile] = useState<Omit<TileOption, 'displayOrder'>>({
    id: '',
    name: '',
    manufacturer: '',
    description: '',
    price: 0,
    isStandard: false,
    isRecommended: false,
    imageUrl: '',
  });

  // 新規目地色のフォーム状態
  const [newGrout, setNewGrout] = useState<Omit<GroutOption, 'displayOrder'>>({
    id: '',
    name: '',
    colorCode: '#FFFFFF',
    isRecommended: false,
    recommendedFor: '',
  });

  // 画像アップロード処理
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    forTile: TileOption | null,
    isNew: boolean
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ファイルタイプ検証
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      toast.error('JPEG、PNG、WebP、GIF形式の画像のみ対応しています');
      return;
    }

    setUploadingImage(true);
    try {
      const productCode = forTile?.id || newTile.id || `tile-${Date.now()}`;
      const result = await ImageService.uploadProductImage(
        file,
        productCode,
        forTile?.name || newTile.name || 'ポーチタイル',
        'ポーチ',
        'タイル',
        true
      );

      if (result?.image_url) {
        if (isNew) {
          setNewTile(prev => ({ ...prev, imageUrl: result.image_url }));
        } else if (forTile) {
          setEditingTile(prev => prev ? { ...prev, imageUrl: result.image_url } : null);
        }
        toast.success('画像をアップロードしました');
      }
    } catch (err) {
      console.error('画像アップロードエラー:', err);
      toast.error('画像のアップロードに失敗しました');
    } finally {
      setUploadingImage(false);
    }
  };

  // タイル保存
  const handleSaveTile = async (tile: TileOption, isNew: boolean) => {
    setSaving(true);
    try {
      let success: boolean;
      if (isNew) {
        success = await addTile(tile);
      } else {
        success = await updateTile(tile.id, tile);
      }

      if (success) {
        toast.success(isNew ? 'タイルを追加しました' : 'タイルを更新しました');
        setEditingTile(null);
        setIsAddingTile(false);
        setNewTile({
          id: '',
          name: '',
          manufacturer: '',
          description: '',
          price: 0,
          isStandard: false,
          isRecommended: false,
          imageUrl: '',
        });
      } else {
        toast.error('保存に失敗しました');
      }
    } finally {
      setSaving(false);
    }
  };

  // タイル削除
  const handleDeleteTile = async (id: string) => {
    if (!confirm('このタイルを削除しますか？')) return;

    setSaving(true);
    try {
      const success = await deleteTile(id);
      if (success) {
        toast.success('タイルを削除しました');
      } else {
        toast.error('削除に失敗しました');
      }
    } finally {
      setSaving(false);
    }
  };

  // 目地色保存
  const handleSaveGrout = async (grout: GroutOption, isNew: boolean) => {
    setSaving(true);
    try {
      let success: boolean;
      if (isNew) {
        success = await addGroutColor(grout);
      } else {
        success = await updateGroutColor(grout.id, grout);
      }

      if (success) {
        toast.success(isNew ? '目地色を追加しました' : '目地色を更新しました');
        setEditingGrout(null);
        setIsAddingGrout(false);
        setNewGrout({
          id: '',
          name: '',
          colorCode: '#FFFFFF',
          isRecommended: false,
          recommendedFor: '',
        });
      } else {
        toast.error('保存に失敗しました');
      }
    } finally {
      setSaving(false);
    }
  };

  // 目地色削除
  const handleDeleteGrout = async (id: string) => {
    if (!confirm('この目地色を削除しますか？')) return;

    setSaving(true);
    try {
      const success = await deleteGroutColor(id);
      if (success) {
        toast.success('目地色を削除しました');
      } else {
        toast.error('削除に失敗しました');
      }
    } finally {
      setSaving(false);
    }
  };

  // IDを自動生成
  const generateId = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || `item-${Date.now()}`;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        <span className="ml-2 text-gray-600">読み込み中...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">ポーチタイル設定</h3>
          <p className="text-sm text-gray-500">タイルの種類と目地色を管理できます</p>
        </div>
        <button
          onClick={refresh}
          className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          再読み込み
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* タブ */}
      <div className="border-b border-gray-200">
        <nav className="flex gap-4">
          <button
            onClick={() => setActiveTab('tiles')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'tiles'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            タイル ({tiles.length})
          </button>
          <button
            onClick={() => setActiveTab('grout')}
            className={`pb-3 px-1 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'grout'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            目地色 ({groutColors.length})
          </button>
        </nav>
      </div>

      {/* タイル一覧 */}
      {activeTab === 'tiles' && (
        <div className="space-y-4">
          {/* 追加ボタン */}
          {!isAddingTile && (
            <button
              onClick={() => setIsAddingTile(true)}
              className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              新規タイル追加
            </button>
          )}

          {/* 新規追加フォーム */}
          {isAddingTile && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-4">
              <h4 className="font-medium text-blue-900">新規タイル追加</h4>
              <TileForm
                tile={newTile}
                onChange={setNewTile}
                onSave={() => {
                  const tileToSave = {
                    ...newTile,
                    id: newTile.id || generateId(newTile.name),
                  };
                  handleSaveTile(tileToSave as TileOption, true);
                }}
                onCancel={() => {
                  setIsAddingTile(false);
                  setNewTile({
                    id: '',
                    name: '',
                    manufacturer: '',
                    description: '',
                    price: 0,
                    isStandard: false,
                    isRecommended: false,
                    imageUrl: '',
                  });
                }}
                saving={saving}
                uploadingImage={uploadingImage}
                onImageUpload={(e) => handleImageUpload(e, null, true)}
              />
            </div>
          )}

          {/* タイル一覧 */}
          <div className="space-y-3">
            {tiles.map((tile) => (
              <div
                key={tile.id}
                className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
              >
                {/* ドラッグハンドル（将来用） */}
                <div className="pt-2 text-gray-400 cursor-move">
                  <GripVertical className="w-5 h-5" />
                </div>

                {/* 画像 */}
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  {tile.imageUrl ? (
                    <img
                      src={tile.imageUrl}
                      alt={tile.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                  )}
                </div>

                {/* 情報 */}
                {editingTile?.id === tile.id ? (
                  <div className="flex-1">
                    <TileForm
                      tile={editingTile}
                      onChange={setEditingTile}
                      onSave={() => handleSaveTile(editingTile, false)}
                      onCancel={() => setEditingTile(null)}
                      saving={saving}
                      uploadingImage={uploadingImage}
                      onImageUpload={(e) => handleImageUpload(e, editingTile, false)}
                    />
                  </div>
                ) : (
                  <>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-gray-900">{tile.name}</h4>
                        {tile.isStandard && (
                          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                            標準
                          </span>
                        )}
                        {tile.isRecommended && (
                          <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full flex items-center gap-1">
                            <Star className="w-3 h-3 fill-amber-500" />
                            おすすめ
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{tile.manufacturer}</p>
                      <p className="text-sm text-gray-500">{tile.description}</p>
                      <p className="text-sm font-medium text-orange-600 mt-1">
                        {tile.price === 0 ? '標準' : `+¥${tile.price.toLocaleString()}/㎡`}
                      </p>
                    </div>

                    {/* アクション */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setEditingTile(tile)}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="編集"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteTile(tile.id)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="削除"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 目地色一覧 */}
      {activeTab === 'grout' && (
        <div className="space-y-4">
          {/* 追加ボタン */}
          {!isAddingGrout && (
            <button
              onClick={() => setIsAddingGrout(true)}
              className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-blue-400 hover:text-blue-500 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              新規目地色追加
            </button>
          )}

          {/* 新規追加フォーム */}
          {isAddingGrout && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-4">
              <h4 className="font-medium text-blue-900">新規目地色追加</h4>
              <GroutForm
                grout={newGrout}
                onChange={setNewGrout}
                onSave={() => {
                  const groutToSave = {
                    ...newGrout,
                    id: newGrout.id || generateId(newGrout.name),
                  };
                  handleSaveGrout(groutToSave as GroutOption, true);
                }}
                onCancel={() => {
                  setIsAddingGrout(false);
                  setNewGrout({
                    id: '',
                    name: '',
                    colorCode: '#FFFFFF',
                    isRecommended: false,
                    recommendedFor: '',
                  });
                }}
                saving={saving}
              />
            </div>
          )}

          {/* 目地色一覧 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {groutColors.map((grout) => (
              <div
                key={grout.id}
                className="p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
              >
                {editingGrout?.id === grout.id ? (
                  <GroutForm
                    grout={editingGrout}
                    onChange={setEditingGrout}
                    onSave={() => handleSaveGrout(editingGrout, false)}
                    onCancel={() => setEditingGrout(null)}
                    saving={saving}
                    compact
                  />
                ) : (
                  <>
                    {/* 色見本 */}
                    <div
                      className="w-full h-12 rounded-lg border border-gray-200 mb-3"
                      style={{ backgroundColor: grout.colorCode }}
                    />

                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-900">{grout.name}</span>
                      {grout.isRecommended && (
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{grout.colorCode}</p>
                    {grout.recommendedFor && (
                      <p className="text-xs text-amber-600 mt-1">{grout.recommendedFor}に◎</p>
                    )}

                    {/* アクション */}
                    <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                      <button
                        onClick={() => setEditingGrout(grout)}
                        className="flex-1 p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors text-sm flex items-center justify-center gap-1"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        編集
                      </button>
                      <button
                        onClick={() => handleDeleteGrout(grout.id)}
                        className="flex-1 p-1.5 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded transition-colors text-sm flex items-center justify-center gap-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        削除
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

// タイルフォームコンポーネント
interface TileFormProps {
  tile: TileOption | Omit<TileOption, 'displayOrder'>;
  onChange: (tile: TileOption | Omit<TileOption, 'displayOrder'>) => void;
  onSave: () => void;
  onCancel: () => void;
  saving: boolean;
  uploadingImage: boolean;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TileForm: React.FC<TileFormProps> = ({
  tile,
  onChange,
  onSave,
  onCancel,
  saving,
  uploadingImage,
  onImageUpload,
}) => (
  <div className="space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">名前 *</label>
        <input
          type="text"
          value={tile.name}
          onChange={(e) => onChange({ ...tile, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="ネイチャーII"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">メーカー</label>
        <input
          type="text"
          value={tile.manufacturer}
          onChange={(e) => onChange({ ...tile, manufacturer: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Nagoya mozaic"
        />
      </div>
    </div>

    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">説明</label>
      <input
        type="text"
        value={tile.description}
        onChange={(e) => onChange({ ...tile, description: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="300×300 自然な風合い"
      />
    </div>

    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">価格（円/㎡）</label>
        <input
          type="number"
          value={tile.price}
          onChange={(e) => onChange({ ...tile, price: parseInt(e.target.value) || 0 })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          min="0"
          step="1000"
        />
      </div>
      <div className="flex items-end gap-4 pb-2">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={tile.isStandard}
            onChange={(e) => onChange({ ...tile, isStandard: e.target.checked })}
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          標準
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={tile.isRecommended}
            onChange={(e) => onChange({ ...tile, isRecommended: e.target.checked })}
            className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
          />
          おすすめ
        </label>
      </div>
    </div>

    {/* 画像アップロード */}
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">画像</label>
      <div className="flex items-center gap-3">
        {tile.imageUrl && (
          <img
            src={tile.imageUrl}
            alt={tile.name}
            className="w-16 h-16 object-cover rounded-lg border border-gray-200"
          />
        )}
        <div className="flex-1">
          <input
            type="text"
            value={tile.imageUrl || ''}
            onChange={(e) => onChange({ ...tile, imageUrl: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="画像URL（直接入力またはアップロード）"
          />
        </div>
        <label className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 text-sm text-gray-600">
          {uploadingImage ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Upload className="w-4 h-4" />
          )}
          <span className="whitespace-nowrap">アップロード</span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={onImageUpload}
            disabled={uploadingImage}
          />
        </label>
      </div>
    </div>

    {/* アクションボタン */}
    <div className="flex justify-end gap-2 pt-2">
      <button
        onClick={onCancel}
        className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg text-sm transition-colors"
        disabled={saving}
      >
        キャンセル
      </button>
      <button
        onClick={onSave}
        disabled={saving || !tile.name}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
        保存
      </button>
    </div>
  </div>
);

// 目地色フォームコンポーネント
interface GroutFormProps {
  grout: GroutOption | Omit<GroutOption, 'displayOrder'>;
  onChange: (grout: GroutOption | Omit<GroutOption, 'displayOrder'>) => void;
  onSave: () => void;
  onCancel: () => void;
  saving: boolean;
  compact?: boolean;
}

const GroutForm: React.FC<GroutFormProps> = ({
  grout,
  onChange,
  onSave,
  onCancel,
  saving,
  compact = false,
}) => (
  <div className={`space-y-3 ${compact ? 'text-sm' : ''}`}>
    <div className={compact ? '' : 'grid grid-cols-2 gap-3'}>
      <div className={compact ? 'mb-3' : ''}>
        <label className="block text-xs font-medium text-gray-700 mb-1">名前 *</label>
        <input
          type="text"
          value={grout.name}
          onChange={(e) => onChange({ ...grout, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="白"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">カラーコード</label>
        <div className="flex gap-2">
          <input
            type="color"
            value={grout.colorCode}
            onChange={(e) => onChange({ ...grout, colorCode: e.target.value })}
            className="w-10 h-10 border border-gray-300 rounded cursor-pointer"
          />
          <input
            type="text"
            value={grout.colorCode}
            onChange={(e) => onChange({ ...grout, colorCode: e.target.value })}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="#FFFFFF"
          />
        </div>
      </div>
    </div>

    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1">おすすめ用途</label>
      <input
        type="text"
        value={grout.recommendedFor || ''}
        onChange={(e) => onChange({ ...grout, recommendedFor: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="明るめのタイル"
      />
    </div>

    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={grout.isRecommended}
        onChange={(e) => onChange({ ...grout, isRecommended: e.target.checked })}
        className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
      />
      <label className="text-sm text-gray-700">おすすめ</label>
    </div>

    {/* アクションボタン */}
    <div className="flex justify-end gap-2 pt-2">
      <button
        onClick={onCancel}
        className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-lg text-sm transition-colors"
        disabled={saving}
      >
        <X className="w-4 h-4" />
      </button>
      <button
        onClick={onSave}
        disabled={saving || !grout.name}
        className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
      >
        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
      </button>
    </div>
  </div>
);

export default PorchTileSettings;
