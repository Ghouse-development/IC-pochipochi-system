// IC-ぽちぽちシステム Service Worker
const CACHE_NAME = 'ic-pochipochi-v3';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
];

// エラーログ用の関数
function logError(context, error) {
  console.error(`[SW] ${context}:`, error.message || error);
}

// インストール時にキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        logError('Install failed', error);
      })
  );
  self.skipWaiting();
});

// アクティベート時に古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// フェッチ時のキャッシュ戦略
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // http/https以外のスキームはスキップ（chrome-extension等）
  if (!request.url.startsWith('http://') && !request.url.startsWith('https://')) {
    return;
  }

  const url = new URL(request.url);

  // API リクエストはネットワーク優先
  if (url.pathname.startsWith('/api') || url.hostname.includes('supabase')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 成功時はキャッシュに保存
          if (response.ok) {
            const clonedResponse = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clonedResponse);
            });
          }
          return response;
        })
        .catch(() => {
          // オフライン時はキャッシュから返す
          return caches.match(request);
        })
    );
    return;
  }

  // 静的アセットはキャッシュ優先
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // バックグラウンドで更新
        fetch(request).then((response) => {
          if (response.ok) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, response);
            });
          }
        });
        return cachedResponse;
      }

      // キャッシュになければネットワークから取得
      return fetch(request).then((response) => {
        if (response.ok) {
          const clonedResponse = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clonedResponse);
          });
        }
        return response;
      });
    })
  );
});

// プッシュ通知
self.addEventListener('push', (event) => {
  if (!event.data) return;

  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/',
    },
    actions: data.actions || [],
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// 通知クリック時
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((clientList) => {
      // 既存のウィンドウがあればフォーカス
      for (const client of clientList) {
        if (client.url.includes(url) && 'focus' in client) {
          return client.focus();
        }
      }
      // なければ新しいウィンドウを開く
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

// バックグラウンド同期
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-cart') {
    event.waitUntil(syncCart());
  }
  if (event.tag === 'sync-offline-data') {
    event.waitUntil(syncOfflineData());
  }
});

// IndexedDBからカートデータを取得
async function getCartDataFromIDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('ic-pochipochi-db', 1);

    request.onerror = () => reject(request.error);

    request.onsuccess = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('cart')) {
        resolve(null);
        return;
      }

      const tx = db.transaction('cart', 'readonly');
      const store = tx.objectStore('cart');
      const getRequest = store.getAll();

      getRequest.onsuccess = () => resolve(getRequest.result);
      getRequest.onerror = () => reject(getRequest.error);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('cart')) {
        db.createObjectStore('cart', { keyPath: 'id' });
      }
    };
  });
}

// カートデータの同期処理
async function syncCart() {
  try {
    const cartData = await getCartDataFromIDB();

    if (!cartData || cartData.length === 0) {
      return;
    }

    // サーバーへの同期（Supabase API経由）
    const response = await fetch('/api/cart/sync', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartData }),
    });

    if (!response.ok) {
      throw new Error(`Sync failed: ${response.status}`);
    }
  } catch (error) {
    logError('Cart sync failed', error);
    // 再試行のためにエラーを再スロー
    throw error;
  }
}

// オフラインデータの同期
async function syncOfflineData() {
  try {
    const offlineRequests = await getOfflineRequests();

    for (const request of offlineRequests) {
      try {
        await fetch(request.url, {
          method: request.method,
          headers: request.headers,
          body: request.body,
        });
        await removeOfflineRequest(request.id);
      } catch (error) {
        logError('Offline request sync failed', error);
      }
    }
  } catch (error) {
    logError('Offline data sync failed', error);
  }
}

// IndexedDB設定
const DB_NAME = 'ic-pochipochi-db';
const DB_VERSION = 2;
const OFFLINE_STORE = 'offline-requests';
const CATALOG_STORE = 'catalog-cache';
const FAVORITES_STORE = 'favorites-cache';

// IndexedDBを開く共通関数
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // カートストア
      if (!db.objectStoreNames.contains('cart')) {
        db.createObjectStore('cart', { keyPath: 'id' });
      }

      // オフラインリクエストキュー
      if (!db.objectStoreNames.contains(OFFLINE_STORE)) {
        db.createObjectStore(OFFLINE_STORE, { keyPath: 'id', autoIncrement: true });
      }

      // カタログキャッシュ
      if (!db.objectStoreNames.contains(CATALOG_STORE)) {
        db.createObjectStore(CATALOG_STORE, { keyPath: 'id' });
      }

      // お気に入りキャッシュ
      if (!db.objectStoreNames.contains(FAVORITES_STORE)) {
        db.createObjectStore(FAVORITES_STORE, { keyPath: 'id' });
      }
    };
  });
}

// オフラインリクエストの保存
async function saveOfflineRequest(requestData) {
  try {
    const db = await openDatabase();
    const tx = db.transaction(OFFLINE_STORE, 'readwrite');
    const store = tx.objectStore(OFFLINE_STORE);

    await new Promise((resolve, reject) => {
      const request = store.add({
        url: requestData.url,
        method: requestData.method,
        headers: requestData.headers,
        body: requestData.body,
        timestamp: Date.now(),
      });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    db.close();
  } catch (error) {
    logError('Failed to save offline request', error);
  }
}

// オフラインリクエストの取得
async function getOfflineRequests() {
  try {
    const db = await openDatabase();
    const tx = db.transaction(OFFLINE_STORE, 'readonly');
    const store = tx.objectStore(OFFLINE_STORE);

    const requests = await new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    db.close();
    return requests || [];
  } catch (error) {
    logError('Failed to get offline requests', error);
    return [];
  }
}

// オフラインリクエストの削除
async function removeOfflineRequest(id) {
  try {
    const db = await openDatabase();
    const tx = db.transaction(OFFLINE_STORE, 'readwrite');
    const store = tx.objectStore(OFFLINE_STORE);

    await new Promise((resolve, reject) => {
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });

    db.close();
  } catch (error) {
    logError('Failed to remove offline request', error);
  }
}

// オフラインリクエストキューに追加するフェッチインターセプター
async function handleOfflineRequest(request) {
  const requestData = {
    url: request.url,
    method: request.method,
    headers: Object.fromEntries(request.headers.entries()),
    body: request.method !== 'GET' ? await request.clone().text() : null,
  };

  await saveOfflineRequest(requestData);

  // オフライン通知を送信
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'OFFLINE_REQUEST_QUEUED',
        url: request.url,
      });
    });
  });
}
