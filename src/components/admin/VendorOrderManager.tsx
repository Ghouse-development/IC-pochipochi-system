import React, { useState, useMemo } from 'react';
import { Package, Truck, FileText, Download, Send, CheckCircle, Building2, Phone, Mail, Filter, Edit2, Trash2, X } from 'lucide-react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { useToast } from '../common/Toast';
import { useCartStore } from '../../stores/useCartStore';
import { useVendorOrderStore, type Vendor, type VendorOrder } from '../../stores/useVendorOrderStore';
import { useStatisticsStore } from '../../stores/useStatisticsStore';
import { formatPrice, getProductPrice } from '../../lib/utils';
import { loadXLSX } from '../../lib/xlsxLoader';

export const VendorOrderManager: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);
  const [editingVendor, setEditingVendor] = useState<Vendor | null>(null);
  const [projectName, setProjectName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedVendorId, setSelectedVendorId] = useState('');

  // 新規業者フォーム
  const [vendorForm, setVendorForm] = useState({
    name: '',
    category: '',
    contact: '',
    email: '',
    phone: '',
    address: '',
  });

  const { items } = useCartStore();
  const toast = useToast();
  const {
    orders,
    vendors,
    addOrder,
    updateOrderStatus,
    deleteOrder,
    addVendor,
    updateVendor,
    deleteVendor,
    getActiveVendors,
    getOrderStats,
  } = useVendorOrderStore();
  const recordAdoption = useStatisticsStore((state) => state.recordAdoption);

  const activeVendors = getActiveVendors();
  const orderStats = getOrderStats();

  // メーカー別にカートアイテムをグループ化
  const itemsByManufacturer = useMemo(() => {
    return items.reduce((acc, item) => {
      const manufacturer = item.product.manufacturer || 'その他';
      if (!acc[manufacturer]) acc[manufacturer] = [];
      acc[manufacturer].push(item);
      return acc;
    }, {} as Record<string, typeof items>);
  }, [items]);

  // 発注書作成
  const createVendorOrder = () => {
    if (!selectedVendorId || !projectName || !customerName) {
      toast.warning('入力エラー', '業者、プロジェクト名、お客様名を入力してください');
      return;
    }

    const vendor = vendors.find(v => v.id === selectedVendorId);
    if (!vendor) return;

    if (items.length === 0) {
      toast.warning('カートが空です', 'カートに商品がありません');
      return;
    }

    const orderItems = items.map(item => ({
      productId: item.product.id,
      productName: item.product.name,
      manufacturer: item.product.manufacturer || '',
      modelNumber: item.product.modelNumber || '',
      color: item.selectedVariant?.color || item.product.variants[0]?.color || '',
      quantity: item.quantity,
      unit: item.product.unit,
      price: getProductPrice(item.product.pricing),
    }));

    const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    addOrder({
      vendorId: vendor.id,
      vendorName: vendor.name,
      items: orderItems,
      totalAmount,
      status: 'draft',
      projectName,
      customerName,
      notes,
    });

    setShowCreateForm(false);
    setProjectName('');
    setCustomerName('');
    setNotes('');
    setSelectedVendorId('');
    toast.success('作成完了', '発注書を作成しました');
  };

  // 業者追加/更新
  const handleSaveVendor = () => {
    if (!vendorForm.name || !vendorForm.category) {
      toast.warning('入力エラー', '業者名とカテゴリは必須です');
      return;
    }

    if (editingVendor) {
      updateVendor(editingVendor.id, vendorForm);
    } else {
      addVendor({ ...vendorForm, isActive: true });
    }

    setShowVendorForm(false);
    setEditingVendor(null);
    setVendorForm({ name: '', category: '', contact: '', email: '', phone: '', address: '' });
  };

  // 業者編集開始
  const handleEditVendor = (vendor: Vendor) => {
    setEditingVendor(vendor);
    setVendorForm({
      name: vendor.name,
      category: vendor.category,
      contact: vendor.contact,
      email: vendor.email,
      phone: vendor.phone,
      address: vendor.address,
    });
    setShowVendorForm(true);
  };

  // 発注書をExcelでエクスポート
  const exportOrderToExcel = async (order: VendorOrder) => {
    const XLSX = await loadXLSX();
    const wb = XLSX.utils.book_new();

    const headerData = [
      ['発注書'],
      [''],
      [`発注先: ${order.vendorName}`],
      [`発注番号: ${order.id}`],
      [`発注日: ${new Date(order.createdAt).toLocaleDateString('ja-JP')}`],
      [''],
      [`プロジェクト名: ${order.projectName}`],
      [`お客様名: ${order.customerName} 様`],
      [''],
      ['No.', '商品名', 'メーカー', '型番', 'カラー', '数量', '単位', '単価', '金額'],
    ];

    const productData = order.items.map((item, index) => [
      index + 1,
      item.productName,
      item.manufacturer,
      item.modelNumber,
      item.color,
      item.quantity,
      item.unit,
      item.price,
      item.price * item.quantity,
    ]);

    const footerData = [
      [''],
      ['', '', '', '', '', '', '', '合計', order.totalAmount],
      [''],
      ['備考:'],
      [order.notes || 'なし'],
      [''],
      ['--- 発注ステータス ---'],
      [`作成日: ${new Date(order.createdAt).toLocaleString('ja-JP')}`],
      order.sentAt ? [`送信日: ${new Date(order.sentAt).toLocaleString('ja-JP')}`] : [],
      order.confirmedAt ? [`確認日: ${new Date(order.confirmedAt).toLocaleString('ja-JP')}`] : [],
      order.deliveredAt ? [`納品日: ${new Date(order.deliveredAt).toLocaleString('ja-JP')}`] : [],
    ].filter(row => row.length > 0);

    const wsData = [...headerData, ...productData, ...footerData];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    ws['!cols'] = [
      { wch: 6 }, { wch: 30 }, { wch: 20 }, { wch: 20 },
      { wch: 15 }, { wch: 8 }, { wch: 8 }, { wch: 12 }, { wch: 14 },
    ];

    XLSX.utils.book_append_sheet(wb, ws, '発注書');
    XLSX.writeFile(wb, `発注書_${order.vendorName}_${order.projectName}_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  // ステータス更新（納品時に採用統計記録）
  const handleUpdateStatus = (orderId: string, newStatus: VendorOrder['status']) => {
    updateOrderStatus(orderId, newStatus);

    if (newStatus === 'delivered') {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        order.items.forEach(item => {
          recordAdoption(item.productId, item.productName, '', item.price * item.quantity);
        });
      }
    }
  };

  // フィルタリング
  const filteredOrders = orders.filter(order =>
    filterStatus === 'all' || order.status === filterStatus
  );

  const getStatusBadge = (status: VendorOrder['status']) => {
    const styles = {
      draft: 'bg-gray-100 text-gray-700',
      sent: 'bg-blue-100 text-blue-700',
      confirmed: 'bg-green-100 text-green-700',
      delivered: 'bg-purple-100 text-purple-700',
    };
    const labels = {
      draft: '下書き',
      sent: '送信済',
      confirmed: '確認済',
      delivered: '納品完了',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">業者発注管理</h2>
          <p className="text-sm text-gray-600 mt-1">カートの商品から業者への発注書を作成・管理します（データは自動保存されます）</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowVendorForm(true)}>
            <Building2 className="w-4 h-4 mr-2" />
            業者追加
          </Button>
          <Button variant="primary" onClick={() => setShowCreateForm(true)}>
            <FileText className="w-4 h-4 mr-2" />
            新規発注書作成
          </Button>
        </div>
      </div>

      {/* 統計サマリー */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{orderStats.total}</p>
          <p className="text-xs text-gray-500">総発注数</p>
        </Card>
        <Card className="p-4 text-center bg-gray-50">
          <p className="text-2xl font-bold text-gray-600">{orderStats.draft}</p>
          <p className="text-xs text-gray-500">下書き</p>
        </Card>
        <Card className="p-4 text-center bg-blue-50">
          <p className="text-2xl font-bold text-blue-600">{orderStats.sent}</p>
          <p className="text-xs text-gray-500">送信済</p>
        </Card>
        <Card className="p-4 text-center bg-green-50">
          <p className="text-2xl font-bold text-green-600">{orderStats.confirmed}</p>
          <p className="text-xs text-gray-500">確認済</p>
        </Card>
        <Card className="p-4 text-center bg-purple-50">
          <p className="text-2xl font-bold text-purple-600">{orderStats.delivered}</p>
          <p className="text-xs text-gray-500">納品完了</p>
        </Card>
      </div>

      {/* カート商品サマリー */}
      {items.length > 0 && (
        <Card className="p-4 bg-teal-50 border-teal-200">
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-5 h-5 text-teal-600" />
            <h3 className="font-semibold text-teal-800">現在のカート商品（{items.length}点）</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(itemsByManufacturer).map(([manufacturer, manufacturerItems]) => (
              <div key={manufacturer} className="bg-white rounded-lg p-3 border">
                <p className="font-medium text-gray-800">{manufacturer}</p>
                <p className="text-sm text-gray-600">{manufacturerItems.length}点</p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* 新規発注フォーム */}
      {showCreateForm && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">新規発注書作成</h3>
            <button onClick={() => setShowCreateForm(false)} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">発注先業者 *</label>
              <select
                value={selectedVendorId}
                onChange={(e) => setSelectedVendorId(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="">業者を選択...</option>
                {activeVendors.map(vendor => (
                  <option key={vendor.id} value={vendor.id}>
                    {vendor.name} ({vendor.category})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">プロジェクト名 *</label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="例: 山田邸新築工事"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">お客様名 *</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="例: 山田太郎"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">備考</label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="納期希望など"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="primary" onClick={createVendorOrder} disabled={items.length === 0}>
              {items.length === 0 ? 'カートが空です' : `発注書を作成（${items.length}点）`}
            </Button>
            <Button variant="outline" onClick={() => setShowCreateForm(false)}>
              キャンセル
            </Button>
          </div>
        </Card>
      )}

      {/* 業者追加/編集フォーム */}
      {showVendorForm && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {editingVendor ? '業者情報編集' : '新規業者追加'}
            </h3>
            <button onClick={() => { setShowVendorForm(false); setEditingVendor(null); }} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">業者名 *</label>
              <input
                type="text"
                value={vendorForm.name}
                onChange={(e) => setVendorForm({ ...vendorForm, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">カテゴリ *</label>
              <input
                type="text"
                value={vendorForm.category}
                onChange={(e) => setVendorForm({ ...vendorForm, category: e.target.value })}
                placeholder="例: 外壁材、水廻り"
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">担当者/部署</label>
              <input
                type="text"
                value={vendorForm.contact}
                onChange={(e) => setVendorForm({ ...vendorForm, contact: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
              <input
                type="text"
                value={vendorForm.phone}
                onChange={(e) => setVendorForm({ ...vendorForm, phone: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
              <input
                type="email"
                value={vendorForm.email}
                onChange={(e) => setVendorForm({ ...vendorForm, email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">住所</label>
              <input
                type="text"
                value={vendorForm.address}
                onChange={(e) => setVendorForm({ ...vendorForm, address: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <Button variant="primary" onClick={handleSaveVendor}>
              {editingVendor ? '更新' : '追加'}
            </Button>
            <Button variant="outline" onClick={() => { setShowVendorForm(false); setEditingVendor(null); }}>
              キャンセル
            </Button>
          </div>
        </Card>
      )}

      {/* フィルター */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">ステータス:</span>
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-teal-500"
        >
          <option value="all">すべて ({orders.length})</option>
          <option value="draft">下書き ({orderStats.draft})</option>
          <option value="sent">送信済 ({orderStats.sent})</option>
          <option value="confirmed">確認済 ({orderStats.confirmed})</option>
          <option value="delivered">納品完了 ({orderStats.delivered})</option>
        </select>
      </div>

      {/* 発注リスト */}
      <div className="space-y-4">
        {filteredOrders.length === 0 ? (
          <Card className="p-8 text-center">
            <Truck className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">発注書がありません</p>
            <p className="text-sm text-gray-400 mt-1">カートに商品を追加して発注書を作成してください</p>
          </Card>
        ) : (
          filteredOrders.map(order => (
            <Card key={order.id} className="p-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-gray-900">{order.vendorName}</h3>
                    {getStatusBadge(order.status)}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {order.projectName} / {order.customerName}様
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    発注番号: {order.id} | 作成日: {new Date(order.createdAt).toLocaleDateString('ja-JP')}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{formatPrice(order.totalAmount)}</p>
                  <p className="text-xs text-gray-500">{order.items.length}点</p>
                </div>
              </div>

              <details className="mb-4">
                <summary className="cursor-pointer text-sm text-teal-600 hover:text-teal-700">
                  商品詳細を見る
                </summary>
                <div className="mt-2 bg-gray-50 rounded-lg p-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500">
                        <th className="pb-2">商品名</th>
                        <th className="pb-2">カラー</th>
                        <th className="pb-2 text-right">数量</th>
                        <th className="pb-2 text-right">金額</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, idx) => (
                        <tr key={idx} className="border-t border-gray-200">
                          <td className="py-2">{item.productName}</td>
                          <td className="py-2 text-gray-600">{item.color}</td>
                          <td className="py-2 text-right">{item.quantity}{item.unit}</td>
                          <td className="py-2 text-right">{formatPrice(item.price * item.quantity)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </details>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => exportOrderToExcel(order)}>
                  <Download className="w-4 h-4 mr-1" />
                  Excel出力
                </Button>

                {order.status === 'draft' && (
                  <>
                    <Button variant="primary" size="sm" onClick={() => handleUpdateStatus(order.id, 'sent')}>
                      <Send className="w-4 h-4 mr-1" />
                      送信済みにする
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => deleteOrder(order.id)} className="text-red-600 hover:bg-red-50">
                      <Trash2 className="w-4 h-4 mr-1" />
                      削除
                    </Button>
                  </>
                )}

                {order.status === 'sent' && (
                  <Button variant="primary" size="sm" onClick={() => handleUpdateStatus(order.id, 'confirmed')}>
                    <CheckCircle className="w-4 h-4 mr-1" />
                    確認済みにする
                  </Button>
                )}

                {order.status === 'confirmed' && (
                  <Button variant="primary" size="sm" onClick={() => handleUpdateStatus(order.id, 'delivered')}>
                    <Truck className="w-4 h-4 mr-1" />
                    納品完了
                  </Button>
                )}
              </div>
            </Card>
          ))
        )}
      </div>

      {/* 業者一覧 */}
      <Card className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Building2 className="w-5 h-5 text-gray-600" />
          登録業者一覧（{activeVendors.length}社）
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeVendors.map(vendor => (
            <div key={vendor.id} className="border rounded-lg p-3 hover:bg-gray-50 group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-800">{vendor.name}</p>
                  <p className="text-sm text-teal-600">{vendor.category}</p>
                </div>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => handleEditVendor(vendor)} className="p-1 hover:bg-gray-200 rounded">
                    <Edit2 className="w-4 h-4 text-gray-500" />
                  </button>
                  <button onClick={() => deleteVendor(vendor.id)} className="p-1 hover:bg-red-100 rounded">
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>
              <div className="mt-2 space-y-1 text-xs text-gray-500">
                {vendor.phone && (
                  <p className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    {vendor.phone}
                  </p>
                )}
                {vendor.email && (
                  <p className="flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    {vendor.email}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
