import https from 'https';
import fs from 'fs';

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

// 最終バッチの製品画像マッピング
const PRODUCT_IMAGES = {
  // キッチン
  'kitchen-lixil-noct-001': 'https://www.lixil.co.jp/lineup/kitchen/noct/images/main.jpg',
  'kitchen-lixil-richelle-001': 'https://www.lixil.co.jp/lineup/kitchen/richelle/images/main.jpg',
  'kitchen-panasonic-sclass-island-001': 'https://sumai.panasonic.jp/kitchen/s-class/img/island/main.jpg',
  'kitchen-panasonic-sclass-peninsula-001': 'https://sumai.panasonic.jp/kitchen/s-class/img/peninsula/main.jpg',
  'kitchen-takara-grandia-001': 'https://www.takara-standard.co.jp/product/system_kitchen/grandia/images/main.jpg',
  'kitchen-takara-ofelia-001': 'https://www.takara-standard.co.jp/product/system_kitchen/ofelia/images/main.jpg',

  // トイレ
  'toilet-toto-ggj1-001': 'https://jp.toto.com/products/toilet/gg/img/main.jpg',
  'toilet-toto-zj1-001': 'https://jp.toto.com/products/toilet/zj/img/main.jpg',
  'toilet-panasonic-arauno-z160-001': 'https://sumai.panasonic.jp/toilet/alauno/img/z160/main.jpg',

  // 洗面
  'washroom-lixil-piara-750-001': 'https://www.lixil.co.jp/lineup/powderroom/piara/images/main.jpg',
  'washroom-lixil-piara-900-001': 'https://www.lixil.co.jp/lineup/powderroom/piara/images/main.jpg',
  'washroom-toto-octave-750-001': 'https://jp.toto.com/products/faucet/octave/img/main.jpg',
  'washroom-toto-octave-900-001': 'https://jp.toto.com/products/faucet/octave/img/main.jpg',

  // 庇
  'awning-alfin-ad2s': 'https://www.alfin.co.jp/products/hisashi/ad2s/images/main.jpg',

  // 換気
  'ventilation-cyclone-hood': 'https://sumai.panasonic.jp/ventilation/cyclone/images/main.jpg',
  'ventilation-dsdd-color': 'https://www.ghouse.osaka.jp/images/dsdd.jpg',

  // 浴室
  'bathroom-heater-dryer-001': 'https://sumai.panasonic.jp/bathroom/dryer/images/1room.jpg',
  'bathroom-heater-dryer-3room-001': 'https://sumai.panasonic.jp/bathroom/dryer/images/3room.jpg',

  // ドア関連
  'door-add-lock': 'https://sumai.panasonic.jp/interior/door/veritis/img/lock.jpg',
  'door-add-sliding': 'https://sumai.panasonic.jp/interior/door/veritis/img/sliding.jpg',
  'door-add-swing': 'https://sumai.panasonic.jp/interior/door/veritis/img/swing.jpg',
  'door-change-sliding': 'https://sumai.panasonic.jp/interior/door/veritis/img/sliding.jpg',
  'door-design-lb': 'https://sumai.panasonic.jp/interior/door/veritis/img/lb_door.jpg',
  'door-design-ld': 'https://sumai.panasonic.jp/interior/door/veritis/img/ld_door.jpg',
  'door-design-mc': 'https://sumai.panasonic.jp/interior/door/veritis/img/mc_door.jpg',
  'door-design-petdoor': 'https://sumai.panasonic.jp/interior/door/veritis/img/petdoor.jpg',
  'door-design-wb': 'https://sumai.panasonic.jp/interior/door/veritis/img/wb_door.jpg',
  'door-design-wc': 'https://sumai.panasonic.jp/interior/door/veritis/img/wc_door.jpg',
  'door-handle-black': 'https://sumai.panasonic.jp/interior/door/veritis/img/handle-black.jpg',
  'door-handle-silver': 'https://sumai.panasonic.jp/interior/door/veritis/img/handle-silver.jpg',
  'door-paint-bitterwald': 'https://sumai.panasonic.jp/interior/door/veritis/img/paint.jpg',
  'door-paint-blackoak': 'https://sumai.panasonic.jp/interior/door/veritis/img/paint.jpg',
  'door-paint-bluegrayoak': 'https://sumai.panasonic.jp/interior/door/veritis/img/paint.jpg',
  'door-paint-navyoak': 'https://sumai.panasonic.jp/interior/door/veritis/img/paint.jpg',
  'door-pull-black': 'https://sumai.panasonic.jp/interior/door/veritis/img/pull-black.jpg',
  'door-pull-silver': 'https://sumai.panasonic.jp/interior/door/veritis/img/pull-silver.jpg',
  'door-solid-pearlgray': 'https://sumai.panasonic.jp/interior/door/veritis/img/solid.jpg',
  'door-solid-soilblack': 'https://sumai.panasonic.jp/interior/door/veritis/img/solid.jpg',
  'door-storage-fold-mirror': 'https://sumai.panasonic.jp/interior/door/veritis/img/fold-mirror.jpg',

  // 玄関
  'entrance-wash-003': 'https://www.kakudai.jp/products/faucet/images/stainless.jpg',
  'ext-door-face-auth': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/face.jpg',
  'ext-door-pocket-key': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/pocket.jpg',

  // 外装その他
  'ext-awning-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-battery-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-battery-yes': 'https://www.ghouse.osaka.jp/images/battery.jpg',
  'ext-ceiling-down': 'https://www.ghouse.osaka.jp/images/ceiling-down.jpg',
  'ext-ceiling-slope': 'https://www.ghouse.osaka.jp/images/ceiling-slope.jpg',
  'ext-ceiling-up-100': 'https://www.ghouse.osaka.jp/images/ceiling-up.jpg',
  'ext-ceiling-up-200': 'https://www.ghouse.osaka.jp/images/ceiling-up.jpg',

  // ランドリー
  'laundry-multi-sink-001': 'https://jp.toto.com/products/washroom/multisink/images/main.jpg',

  // セカンド洗面
  'second-compact-washroom-001': 'https://jp.toto.com/products/washroom/compact/images/main.jpg',

  // エコキュート
  'water-panasonic-ecocute-370': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'water-panasonic-ecocute-460': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s46lqs_main.jpg',

  // その他標準/なし
  'ext-floor-reinforce-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-wall-reinforce-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-ceiling-reinforce-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-lattice-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-wall-tile-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-window-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-panel-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-ecocarat-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-counter-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-dryer-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-entrance-wash-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-floor-reinforce-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-wall-reinforce-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-ceiling-reinforce-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-lattice-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-wall-tile-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-window-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-panel-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-ecocarat-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-counter-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-dryer-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'int-wall-kasagi-none': 'https://www.ghouse.osaka.jp/images/none.jpg',

  // 外壁関連
  'ext-soffit-soleil': 'https://metoree.s3.ap-northeast-1.amazonaws.com/img/products-new/a30046782024090119.png',

  // 外構
  'exterior-pipe': 'https://www.ghouse.osaka.jp/images/external-pipe.jpg',
  'external-pipe': 'https://www.ghouse.osaka.jp/images/external-pipe.jpg',
};

function makeRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: SUPABASE_URL,
      port: 443,
      path: path,
      method: method,
      headers: {
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': 'Bearer ' + SERVICE_ROLE_KEY,
        'Content-Type': 'application/json',
        'Prefer': method === 'POST' ? 'return=minimal' : 'return=representation'
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data: data }));
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const itemsNoImages = JSON.parse(fs.readFileSync('scripts/temp_items_no_images.json', 'utf8'));

  const existingImagesResp = await makeRequest('GET', '/rest/v1/item_variant_images?select=variant_id&limit=10000');
  const existingVariantIds = new Set(JSON.parse(existingImagesResp.data).map(img => img.variant_id));
  console.log('Existing images:', existingVariantIds.size);

  const imagesToInsert = [];
  let matched = 0;

  for (const item of itemsNoImages) {
    const imageUrl = PRODUCT_IMAGES[item.item_code];
    if (imageUrl) {
      const variantsResp = await makeRequest('GET', `/rest/v1/items?select=variants:item_variants(id,variant_code,color_name)&item_code=eq.${item.item_code}`);
      const variantsData = JSON.parse(variantsResp.data);

      if (variantsData && variantsData[0] && variantsData[0].variants) {
        for (const variant of variantsData[0].variants) {
          if (!existingVariantIds.has(variant.id)) {
            imagesToInsert.push({
              variant_id: variant.id,
              image_url: imageUrl,
              alt_text: `${item.name} ${variant.color_name || ''}`.trim(),
              is_primary: true,
              display_order: 1
            });
          }
        }
        matched++;
        console.log(`✓ ${item.item_code}: ${variantsData[0].variants.length} variants`);
      }
    }
  }

  console.log(`\nMatched: ${matched}`);
  console.log(`New images to insert: ${imagesToInsert.length}`);

  if (imagesToInsert.length > 0) {
    console.log('\nInserting images in batches...');
    const batchSize = 50;
    for (let i = 0; i < imagesToInsert.length; i += batchSize) {
      const batch = imagesToInsert.slice(i, i + batchSize);
      try {
        const result = await makeRequest('POST', '/rest/v1/item_variant_images', batch);
        console.log(`Batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(imagesToInsert.length/batchSize)}: ${result.status === 201 ? 'OK' : 'Error: ' + result.status}`);
        await sleep(500);
      } catch (err) {
        console.log(`Batch ${Math.floor(i/batchSize) + 1}: Error - ${err.message}`);
      }
    }
  }

  console.log('Done!');
}

main().catch(console.error);
