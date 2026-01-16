import https from 'https';
import fs from 'fs';

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

// 最終バッチ - 残り全アイテムの画像マッピング
const PRODUCT_IMAGES = {
  // TV視聴関連
  'ext-tv-antenna-only': 'https://www.maspro.co.jp/products/antenna/category01/images/ls206tmh.jpg',
  'ext-tv-fiber-ghouse': 'https://www.ghouse.osaka.jp/images/fiber.jpg',
  'ext-tv-fiber-self': 'https://www.ghouse.osaka.jp/images/fiber.jpg',
  'ext-tv-not-needed': 'https://www.ghouse.osaka.jp/images/none.jpg',

  // V2H
  'ext-v2h-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-v2h-yes': 'https://www.nichicon.co.jp/products/v2h/images/main.jpg',

  // 換気システム
  'ext-ventilation-dsdd': 'https://www.dsdd.co.jp/images/system.jpg',
  'ext-ventilation-panasonic': 'https://sumai.panasonic.jp/air/kanki/24h/img/main.jpg',

  // YKKAP APW330窓オプション
  'ext-window-add-22': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'ext-window-add-fire': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'ext-window-add-sliding-22-w1650': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'ext-window-add-sliding-22-w2560': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'ext-window-add-sliding-fire-w1650': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'ext-window-add-sliding-fire-w2560': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'ext-window-safety-glass': 'https://www.ykkap.co.jp/consumer/products/window/glass/img/laminated.jpg',
  'ext-window-heatproof-w1650': 'https://www.ykkap.co.jp/consumer/products/window/glass/img/heat.jpg',
  'ext-window-heatproof-w2560': 'https://www.ykkap.co.jp/consumer/products/window/glass/img/heat.jpg',
  'ext-window-shutter-w1650': 'https://www.ykkap.co.jp/consumer/products/window/shutter/img/electric.jpg',
  'ext-window-shutter-w2560': 'https://www.ykkap.co.jp/consumer/products/window/shutter/img/electric.jpg',
  'ext-window-type-apw330': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',

  // YKKAP APW430窓オプション
  'ext-window-apw430-add-22': 'https://www.ykkap.co.jp/consumer/products/window/apw430/img/apw430_mv.jpg',
  'ext-window-apw430-add-fire': 'https://www.ykkap.co.jp/consumer/products/window/apw430/img/apw430_mv.jpg',
  'ext-window-apw430-safety-glass': 'https://www.ykkap.co.jp/consumer/products/window/apw430/img/apw430_mv.jpg',
  'ext-window-apw430-sliding-22-w1650': 'https://www.ykkap.co.jp/consumer/products/window/apw430/img/apw430_mv.jpg',
  'ext-window-apw430-sliding-22-w2560': 'https://www.ykkap.co.jp/consumer/products/window/apw430/img/apw430_mv.jpg',
  'ext-window-apw430-sliding-fire-w1650': 'https://www.ykkap.co.jp/consumer/products/window/apw430/img/apw430_mv.jpg',
  'ext-window-apw430-sliding-fire-w2560': 'https://www.ykkap.co.jp/consumer/products/window/apw430/img/apw430_mv.jpg',
  'ext-window-type-apw430': 'https://www.ykkap.co.jp/consumer/products/window/apw430/img/apw430_mv.jpg',

  // 外部設備
  'exterior-tarp-hook': 'https://www.ghouse.osaka.jp/images/tarphook.jpg',
  'exterior-wireless-camera-cx500x': 'https://panasonic.jp/content/experience-fragments/panasonic/jp/ja/content/door/products/VL-WD813K/lp4_ind1_VL-WD813K_cxf/master/_jcr_content/root/c_lay014/c_lay001_copy_copy_c/item/c_lay002/c_gen003.coreimg.jpeg/1715154315923/wd813-mv-pc.jpeg',
  'exterior-ac-sleeve-add': 'https://www.ghouse.osaka.jp/images/ac-sleeve.jpg',
  'exterior-bs-antenna': 'https://www.ghouse.osaka.jp/images/bs-antenna.jpg',
  'exterior-ev-outlet': 'https://sumai.panasonic.jp/exterior/ev/images/main.jpg',
  'exterior-faucet-add': 'https://www.onlyone.co.jp/products/faucet/images/aluminum.jpg',
  'exterior-faucet-drain': 'https://www.onlyone.co.jp/products/faucet/images/aluminum.jpg',
  'exterior-lan-conduit': 'https://www.ghouse.osaka.jp/images/lan-pipe.jpg',
  'exterior-outlet-add': 'https://sumai.panasonic.jp/exterior/outlet/images/main.jpg',
  'external-piping-gray': 'https://www.ghouse.osaka.jp/images/external-pipe.jpg',

  // ダイキン エアコン Eシリーズ
  'furn-aircon-daikin-e6': 'https://www.ac.daikin.co.jp/-/media/Project/Daikin/ac_daikin_co_jp/product/2025/e_series/images/lineup/img_room_e_series_lineup_01.png',
  'furn-aircon-daikin-e10': 'https://www.ac.daikin.co.jp/-/media/Project/Daikin/ac_daikin_co_jp/product/2025/e_series/images/lineup/img_room_e_series_lineup_01.png',
  'furn-aircon-daikin-e14': 'https://www.ac.daikin.co.jp/-/media/Project/Daikin/ac_daikin_co_jp/product/2025/e_series/images/lineup/img_room_e_series_lineup_01.png',

  // ダイキン エアコン GXシリーズ
  'furn-aircon-daikin-gx6': 'https://www.ac.daikin.co.jp/-/media/Project/Daikin/ac_daikin_co_jp/product/2025/gx_series/images/lineup/img_room_gx_series_lineup_01.png',
  'furn-aircon-daikin-gx10': 'https://www.ac.daikin.co.jp/-/media/Project/Daikin/ac_daikin_co_jp/product/2025/gx_series/images/lineup/img_room_gx_series_lineup_01.png',
  'furn-aircon-daikin-gx14': 'https://www.ac.daikin.co.jp/-/media/Project/Daikin/ac_daikin_co_jp/product/2025/gx_series/images/lineup/img_room_gx_series_lineup_01.png',

  // 三菱電機 霧ヶ峰 Zシリーズ
  'furn-aircon-mitsubishi-z6': 'https://www.mitsubishielectric.co.jp/home/kirigamine/product/z_series/images/main_z.jpg',
  'furn-aircon-mitsubishi-z10': 'https://www.mitsubishielectric.co.jp/home/kirigamine/product/z_series/images/main_z.jpg',
  'furn-aircon-mitsubishi-z14': 'https://www.mitsubishielectric.co.jp/home/kirigamine/product/z_series/images/main_z.jpg',
  'furn-aircon-wind-plate': 'https://www.ghouse.osaka.jp/images/wind-plate.jpg',

  // IC提案家具
  'furn-bed-ic': 'https://www.ghouse.osaka.jp/images/ic-furniture.jpg',
  'furn-centertable-ic': 'https://www.ghouse.osaka.jp/images/ic-furniture.jpg',
  'furn-curtain-ic': 'https://www.ghouse.osaka.jp/images/ic-curtain.jpg',
  'furn-diningchair-ic': 'https://www.ghouse.osaka.jp/images/ic-furniture.jpg',
  'furn-diningtable-ic': 'https://www.ghouse.osaka.jp/images/ic-furniture.jpg',
  'furn-other-ic': 'https://www.ghouse.osaka.jp/images/ic-furniture.jpg',
  'furn-rug-ic': 'https://www.ghouse.osaka.jp/images/ic-rug.jpg',
  'furn-sofa-ic': 'https://www.ghouse.osaka.jp/images/ic-furniture.jpg',
  'furn-tvboard-ic': 'https://www.ghouse.osaka.jp/images/ic-furniture.jpg',

  // インテリア
  'int-shoebox-004': 'https://sumai.panasonic.jp/interior/entrance/comporia/img/mirror.jpg',

  // ランドリー・洗面
  'laundry-sink-001': 'https://jp.toto.com/products/washroom/multisink/images/main.jpg',
  'second-washroom-001': 'https://jp.toto.com/products/washroom/compact/images/main.jpg',

  // エコキュート
  'water-heater-eco-cute-370l-001': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'water-heater-eco-cute-460l-001': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s46lqs_main.jpg',
  'eco-cute-garage': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'eco-cute-indoor': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'eco-cute-salt': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',

  // 玄関ドアオプション
  'entrance-door-face-recognition': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/face.jpg',
  'entrance-door-pocket-key': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/pocket.jpg',

  // 窓オプション（重複分）
  'window-option-electric-shutter': 'https://www.ykkap.co.jp/consumer/products/window/shutter/img/electric.jpg',
  'window-option-fireproof-glass': 'https://www.ykkap.co.jp/consumer/products/window/glass/img/heat.jpg',
  'window-option-sliding-door-22': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'window-option-sliding-door-fireproof': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'window-option-add-22': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'window-option-add-fireproof': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'window-option-safety-glass': 'https://www.ykkap.co.jp/consumer/products/window/glass/img/laminated.jpg',
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
        console.log(`OK ${item.item_code}: ${variantsData[0].variants.length} variants`);
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
