/**
 * サンゲツの壁紙画像URLをデータベースに登録するスクリプト
 * 画像はサンゲツのサーバーから直接読み込む
 */
const https = require('https');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://qqzqffkiyzeaampotgnn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyNTYxMDYsImV4cCI6MjA4MDgzMjEwNn0.wcCzxOTH14n4kIgXTrp1vZd3DPJzuim-Bz8fH-3U3bw'
);

// 画像URLが存在するか確認
function checkImageUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD' }, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on('error', () => resolve(false));
    req.end();
  });
}

// 製品の画像URLを探す
async function findImageUrl(code) {
  // 新SP/REシリーズの日付パターン
  const dates = ['20250619', '20250601', '20240619', '20240601', '20230619'];

  for (const date of dates) {
    const chipUrl = `https://contents.sangetsu.co.jp/img/chip/${code}_${date}C01.jpg`;
    if (await checkImageUrl(chipUrl)) {
      return chipUrl;
    }
  }

  // 旧シリーズは別の日付形式かも
  const oldDates = ['20230601', '20220601', '20210601', '20200601'];
  for (const date of oldDates) {
    const chipUrl = `https://contents.sangetsu.co.jp/img/chip/${code}_${date}C01.jpg`;
    if (await checkImageUrl(chipUrl)) {
      return chipUrl;
    }
  }

  return null;
}

// DBの画像URLを更新
async function updateImageUrl(code, imageUrl) {
  const itemCode = `wallpaper-${code.toLowerCase()}`;

  const { error } = await supabase
    .from('items')
    .update({ catalog_url: imageUrl })
    .eq('item_code', itemCode);

  if (error) {
    console.log(`  DB error: ${error.message}`);
    return false;
  }
  return true;
}

// メイン処理
async function main() {
  // 全壁紙コードを取得
  const { data: items, error } = await supabase
    .from('items')
    .select('item_code, name')
    .contains('tags', ['wallpaper'])
    .order('display_order');

  if (error) {
    console.log('Error fetching items:', error.message);
    return;
  }

  console.log(`Found ${items.length} wallpaper items`);

  let success = 0;
  let notFound = 0;

  for (const item of items) {
    const code = item.name; // 品番がnameに入っている

    // 特殊なもの（マグマジック、タイル等）はスキップ
    if (!code.match(/^(SP|RE|FE|TH|BA|BB|LB)\d+$/)) {
      console.log(`Skipping ${code} (special item)`);
      continue;
    }

    const imageUrl = await findImageUrl(code);

    if (imageUrl) {
      const updated = await updateImageUrl(code, imageUrl);
      if (updated) {
        console.log(`✓ ${code}: ${imageUrl}`);
        success++;
      }
    } else {
      console.log(`✗ ${code}: No image found`);
      notFound++;
    }

    // レート制限回避
    await new Promise(r => setTimeout(r, 300));
  }

  console.log(`\n=== Complete ===`);
  console.log(`Success: ${success}, Not found: ${notFound}`);
}

main().catch(console.error);
