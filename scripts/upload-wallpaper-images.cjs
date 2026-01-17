/**
 * サンゲツの壁紙画像をダウンロードしてSupabaseストレージにアップロードするスクリプト
 */
const https = require('https');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://qqzqffkiyzeaampotgnn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTYxMDYsImV4cCI6MjA4MDgzMjEwNn0.wcCzxOTH14n4kIgXTrp1vZd3DPJzuim-Bz8fH-3U3bw'
);

// 画像をダウンロード
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        downloadImage(res.headers.location).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

// 画像URLが有効か確認
function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.end();
  });
}

// サンゲツの画像URLを探す
async function findSangetsuImageUrl(code) {
  // 複数の日付パターンを試す（新しいものから古いものへ）
  const dates = [
    '20250619', '20250601', '20250523', '20250501',
    '20240619', '20240601', '20240523', '20240501',
    '20230619', '20230601', '20230523', '20230501',
    '20220619', '20220601', '20220523', '20220501',
    '20210619', '20210601', '20210523', '20210501',
    '20200619', '20200601', '20200523', '20200501',
    '20190619', '20190601', '20190523', '20190501'
  ];

  for (const date of dates) {
    const url = `https://contents.sangetsu.co.jp/img/chip/${code}_${date}C01.jpg`;
    if (await checkUrl(url)) {
      return url;
    }
  }
  return null;
}

// Supabaseストレージにアップロード
async function uploadToStorage(code, imageBuffer) {
  const filePath = `wallpapers/${code.toLowerCase()}.jpg`;

  // アップロード（upsert）
  const { data, error } = await supabase.storage
    .from('item-images')
    .upload(filePath, imageBuffer, {
      contentType: 'image/jpeg',
      upsert: true
    });

  if (error) {
    return { error: error.message };
  }

  // 公開URL取得
  const { data: urlData } = supabase.storage
    .from('item-images')
    .getPublicUrl(filePath);

  return { url: urlData.publicUrl };
}

// DBのcatalog_urlを更新
async function updateItemUrl(code, imageUrl) {
  const itemCode = `wallpaper-${code.toLowerCase()}`;

  const { error } = await supabase
    .from('items')
    .update({ catalog_url: imageUrl })
    .eq('item_code', itemCode);

  return !error;
}

// 1件処理
async function processOne(code) {
  // サンゲツから画像URLを探す
  const sangetsuUrl = await findSangetsuImageUrl(code);
  if (!sangetsuUrl) {
    return { code, status: 'no_image' };
  }

  try {
    // 画像をダウンロード
    const imageBuffer = await downloadImage(sangetsuUrl);

    // Supabaseにアップロード
    const result = await uploadToStorage(code, imageBuffer);
    if (result.error) {
      return { code, status: 'upload_error', error: result.error };
    }

    // DBを更新
    await updateItemUrl(code, result.url);

    return { code, status: 'success', url: result.url };
  } catch (e) {
    return { code, status: 'error', error: e.message };
  }
}

// メイン
async function main() {
  // item-imagesバケットを使用（既存）
  console.log('Using existing item-images bucket...');

  // 壁紙アイテムを取得
  const { data: items } = await supabase
    .from('items')
    .select('name')
    .contains('tags', ['wallpaper'])
    .order('display_order');

  if (!items) {
    console.log('No items found');
    return;
  }

  // 標準的な品番パターンのみ処理
  const codes = items
    .map(i => i.name)
    .filter(name => /^(SP|RE|FE|TH|BA|BB|LB)\d+$/.test(name));

  console.log(`Processing ${codes.length} wallpapers...`);

  let success = 0, noImage = 0, errors = 0;

  for (const code of codes) {
    const result = await processOne(code);

    if (result.status === 'success') {
      console.log(`✓ ${code}`);
      success++;
    } else if (result.status === 'no_image') {
      console.log(`- ${code}: no image found`);
      noImage++;
    } else {
      console.log(`✗ ${code}: ${result.error}`);
      errors++;
    }

    await new Promise(r => setTimeout(r, 300));
  }

  console.log(`\nDone: ${success} success, ${noImage} no image, ${errors} errors`);
}

main();
