/**
 * サンゲツの壁紙画像を取得してSupabaseにアップロードするスクリプト
 */
const https = require('https');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://qqzqffkiyzeaampotgnn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTYxMDYsImV4cCI6MjA4MDgzMjEwNn0.wcCzxOTH14n4kIgXTrp1vZd3DPJzuim-Bz8fH-3U3bw'
);

// 画像をダウンロードしてBufferを取得
function fetchImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        fetchImage(res.headers.location).then(resolve).catch(reject);
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

// 製品ページから画像URLを取得
async function getImageUrl(code) {
  // 日付部分は製品によって異なる可能性があるため、複数パターンを試す
  const dates = ['20250619', '20240619', '20230619', '20250601', '20240601'];

  for (const date of dates) {
    const url = `https://contents.sangetsu.co.jp/img/chip/${code}_${date}C01.jpg`;
    try {
      const res = await new Promise((resolve, reject) => {
        https.get(url, { method: 'HEAD' }, (res) => resolve(res)).on('error', reject);
      });
      if (res.statusCode === 200) {
        return url;
      }
    } catch (e) {
      // continue to next date
    }
  }
  return null;
}

// Supabase Storageにアップロード
async function uploadToSupabase(code, imageBuffer) {
  const fileName = `${code.toLowerCase()}.jpg`;
  const filePath = `wallpapers/${fileName}`;

  const { error } = await supabase.storage
    .from('product-images')
    .upload(filePath, imageBuffer, {
      contentType: 'image/jpeg',
      upsert: true
    });

  if (error) {
    console.log(`Upload error for ${code}:`, error.message);
    return null;
  }

  const { data: urlData } = supabase.storage
    .from('product-images')
    .getPublicUrl(filePath);

  return urlData?.publicUrl || null;
}

// アイテムの画像URLを更新
async function updateItemImageUrl(code, imageUrl) {
  const itemCode = `wallpaper-${code.toLowerCase()}`;

  const { error } = await supabase
    .from('items')
    .update({ catalog_url: imageUrl })
    .eq('item_code', itemCode);

  if (error) {
    console.log(`DB update error for ${code}:`, error.message);
    return false;
  }
  return true;
}

// 1つの壁紙を処理
async function processWallpaper(code) {
  console.log(`Processing ${code}...`);

  // 画像URLを取得
  const imageUrl = await getImageUrl(code);
  if (!imageUrl) {
    console.log(`  No image found for ${code}`);
    return false;
  }

  try {
    // 画像をダウンロード
    const imageBuffer = await fetchImage(imageUrl);
    console.log(`  Downloaded: ${imageBuffer.length} bytes`);

    // Supabaseにアップロード
    const publicUrl = await uploadToSupabase(code, imageBuffer);
    if (!publicUrl) {
      return false;
    }
    console.log(`  Uploaded to: ${publicUrl}`);

    // DBを更新
    const updated = await updateItemImageUrl(code, publicUrl);
    if (updated) {
      console.log(`  DB updated`);
    }

    return true;
  } catch (err) {
    console.log(`  Error: ${err.message}`);
    return false;
  }
}

// メイン処理
async function main() {
  // SPシリーズ
  const spCodes = [
    'SP2501', 'SP2502', 'SP2504', 'SP2507', 'SP2530', 'SP2531', 'SP2532', 'SP2533',
    'SP2539', 'SP2540', 'SP2541', 'SP2550', 'SP2551', 'SP2555', 'SP2556', 'SP2557',
    'SP2562', 'SP2563', 'SP2564', 'SP2565', 'SP2567', 'SP2568', 'SP2569',
    'SP2583', 'SP2584', 'SP2585', 'SP2586', 'SP2587', 'SP2588', 'SP2589', 'SP2590'
  ];

  // REシリーズ
  const reCodes = [
    'RE55003', 'RE55031', 'RE55033', 'RE55050', 'RE55056', 'RE55059', 'RE55084',
    'RE55086', 'RE55088', 'RE55090', 'RE55094', 'RE55121', 'RE55124', 'RE55174',
    'RE55176', 'RE55177', 'RE55226', 'RE55268', 'RE55270', 'RE55330', 'RE55336',
    'RE55339', 'RE55363', 'RE55370', 'RE55530', 'RE55593', 'RE55596', 'RE55643', 'RE55660'
  ];

  const allCodes = [...spCodes, ...reCodes];

  let success = 0;
  let failed = 0;

  for (const code of allCodes) {
    const result = await processWallpaper(code);
    if (result) success++;
    else failed++;

    // レート制限を避けるため少し待機
    await new Promise(r => setTimeout(r, 500));
  }

  console.log(`\n=== Complete ===`);
  console.log(`Success: ${success}, Failed: ${failed}`);
}

main().catch(console.error);
