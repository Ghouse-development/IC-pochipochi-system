import https from 'https';
import fs from 'fs';

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

// 残りアイテムの画像マッピング
const PRODUCT_IMAGES = {
  // YKKAP ハンドル
  'ext-door-handle-curve': 'https://www.ykkap.co.jp/consumer/products/entrance/handle/img/curve.jpg',
  'ext-door-handle-iron': 'https://www.ykkap.co.jp/consumer/products/entrance/handle/img/iron.jpg',
  'ext-door-interface-unit': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/interface.jpg',
  'ext-door-pocket-key': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/pocket.jpg',

  // エコキュート
  'ext-ecocute-370l-add': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'ext-ecocute-370l-powerful-slim': 'https://sumai.panasonic.jp/hp/lineup/img/item/img_HE-WU46LQS.png',
  'ext-ecocute-370l-slim': 'https://sumai.panasonic.jp/hp/lineup/img/item/img_HE-H46LQS.png',
  'ext-ecocute-460l': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s46lqs_main.jpg',
  'ext-ecocute-460l-powerful-slim': 'https://sumai.panasonic.jp/hp/lineup/img/item/img_HE-WU46LQS.png',
  'ext-ecocute-460l-slim': 'https://sumai.panasonic.jp/hp/lineup/img/item/img_HE-H46LQS.png',
  'ext-ecocute-daikin-370l': 'https://www.ac.daikin.co.jp/-/media/Project/Daikin/ac_daikin_co_jp/sumai/alldenka/solar_ecocute_zenkoku/lineup/images/202508/hero-png.png',
  'ext-ecocute-daikin-460l': 'https://www.ac.daikin.co.jp/-/media/Project/Daikin/ac_daikin_co_jp/sumai/alldenka/solar_ecocute_zenkoku/lineup/images/202508/hero-png.png',
  'ext-ecocute-garage': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'ext-ecocute-hitachi-370l': 'https://ecocute.touryo.com/product/image/bhp-fv37wd/large/bhp-fv37wd.jpg',
  'ext-ecocute-hitachi-370l-3f': 'https://ecocute.touryo.com/product/image/bhp-fv37wd/large/bhp-fv37wd.jpg',
  'ext-ecocute-indoor': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'ext-ecocute-salt': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'ext-ecocute-standard': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'ext-ecocute-ultra-370l': 'https://sumai.panasonic.jp/hp/lineup/img/item/img_HE-JPU37LQS.png',
  'ext-ecocute-ultra-460l': 'https://sumai.panasonic.jp/hp/lineup/img/item/img_HE-JPU37LQS.png',

  // 外部設備
  'ext-dsdd-color-change': 'https://www.ghouse.osaka.jp/images/dsdd.jpg',
  'ext-facility-ev-outlet': 'https://sumai.panasonic.jp/exterior/ev/images/main.jpg',
  'ext-facility-faucet-add': 'https://www.onlyone.co.jp/products/faucet/images/aluminum.jpg',
  'ext-facility-faucet-drain': 'https://www.onlyone.co.jp/products/faucet/images/aluminum.jpg',
  'ext-facility-lan-pipe': 'https://www.ghouse.osaka.jp/images/lan-pipe.jpg',
  'ext-facility-multihook': 'https://www.moritaalumi.co.jp/upImage/product/1638430894_088335900.jpg',
  'ext-facility-sansui': 'https://www.onlyone.co.jp/products/faucet/images/sansui.jpg',
  'ext-facility-stainless-faucet': 'https://product.kakudai.jp/search/fileDownload?fileID=t010000819575&volumeName=00001&type=',
  'ext-facility-tachimizu': 'https://www.onlyone.co.jp/products/faucet/images/aluminum.jpg',
  'ext-facility-tachimizu-add': 'https://www.onlyone.co.jp/products/faucet/images/aluminum.jpg',
  'ext-facility-tarphook': 'https://www.ghouse.osaka.jp/images/tarphook.jpg',
  'ext-facility-wireless-camera': 'https://panasonic.jp/content/experience-fragments/panasonic/jp/ja/content/door/products/VL-WD813K/lp4_ind1_VL-WD813K_cxf/master/_jcr_content/root/c_lay014/c_lay001_copy_copy_c/item/c_lay002/c_gen003.coreimg.jpeg/1715154315923/wd813-mv-pc.jpeg',

  // ガレージ・外構
  'ext-garage-shutter-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-gas-supply-no': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-gas-supply-yes': 'https://www.ghouse.osaka.jp/images/gas.jpg',
  'ext-hiuchi-beam': 'https://www.ghouse.osaka.jp/images/hiuchi.jpg',
  'ext-intercom-qty-1': 'https://sumai.panasonic.jp/door/intercom/images/main.jpg',
  'ext-intercom-qty-2': 'https://sumai.panasonic.jp/door/intercom/images/main.jpg',
  'ext-intercom-qty-3': 'https://sumai.panasonic.jp/door/intercom/images/main.jpg',
  'ext-interior-window-no': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-interior-window-yes': 'https://sumai.panasonic.jp/interior/window/images/main.jpg',
  'ext-joint-box': 'https://sumai.panasonic.jp/exterior/jointbox/images/main.jpg',
  'ext-nanobubble': 'https://beautyaqua.jp/images/main.jpg',
  'ext-pipe': 'https://www.ghouse.osaka.jp/images/external-pipe.jpg',
  'ext-porch-expansion': 'https://www.ghouse.osaka.jp/images/porch.jpg',
  'ext-porch-mortar': 'https://www.ghouse.osaka.jp/images/mortar.jpg',
  'ext-roof-nisc': 'https://www.niscs.nipponsteel.com/products/img/nisccolor-sgl_im02_L.jpg',
  'ext-solar-none': 'https://www.ghouse.osaka.jp/images/none.jpg',
  'ext-solar-relay-pole': 'https://www.ghouse.osaka.jp/images/relay-pole.jpg',
  'ext-solar-yes': 'https://www.ghouse.osaka.jp/images/solar.jpg',
  'ext-tv-antenna-bs': 'https://www.ghouse.osaka.jp/images/bs-antenna.jpg',

  // 換気・ダクト
  'ventilation-hood-kb': 'https://sumai.panasonic.jp/ventilation/hood/images/trd.jpg',
  'ventilation-grille-std': 'https://www.ghouse.osaka.jp/images/ventilation.jpg',

  // その他
  'entrance-wash-stainless': 'https://www.kakudai.jp/products/faucet/images/stainless.jpg',
  'entrance-key-pocket': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/pocket.jpg',
  'entrance-key-face': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/face.jpg',
  'porch-grout': 'https://www.ghouse.osaka.jp/images/grout.jpg',
  'external-pipe-001': 'https://www.ghouse.osaka.jp/images/external-pipe.jpg',
  'solar-relay-pole-001': 'https://www.ghouse.osaka.jp/images/relay-pole.jpg',
  'fascia-ep-paint-001': 'https://www.ghouse.osaka.jp/images/fascia.jpg',
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
