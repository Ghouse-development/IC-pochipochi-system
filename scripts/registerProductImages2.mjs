import https from 'https';
import fs from 'fs';

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

// 製品コードと代表画像のマッピング
const PRODUCT_IMAGES = {
  'kitchen-graftekt-001': 'https://graftekt.jp/inc/img/top/layout1.jpg',
  'int-shoebox-001': 'https://sumai.panasonic.jp/interior/shuno/conporia/img/mv01.jpg',
  'int-shoebox-002': 'https://sumai.panasonic.jp/interior/shuno/conporia/img/mv01.jpg',
  'int-shoebox-003': 'https://sumai.panasonic.jp/interior/shuno/conporia/img/mv01.jpg',
  'int-floor-veritis-basecoat': 'https://sumai.panasonic.jp/interior/floor/lineup/files/vb/kehsv2ty.jpg',
  'int-floor-meisters': 'https://sumai.panasonic.jp/interior/floor/lineup/files/mwd/kehwv2sdc.jpg',
  'int-floor-meisters-wood': 'https://sumai.panasonic.jp/interior/floor/lineup/files/mwd/kehwv2sdc.jpg',
  'int-counter-shelf-w1000': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-shelf-w1800': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-shelf-w2800': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-shelf-w4000': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-study-w1000': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-study-w1800': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-study-w2800': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-study-w4000': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-toilet': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-work-w1000': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-work-w1800': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-work-w2800': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-counter-work-w4000': 'https://sumai.panasonic.jp/interior/shuno/counter/images/main.jpg',
  'int-floor-cf-sheet': 'https://www.toli.co.jp/product/assets/images/floor_item_m/1CF9601_20241018_145353.jpg',
  'int-floortile-001': 'https://www.toli.co.jp/product/assets/images/floor_item_m/1CF9601_20241018_145353.jpg',
  'int-floortile-002': 'https://www.toli.co.jp/product/assets/images/floor_item_m/1CF9601_20241018_145353.jpg',
  'int-floortile-003': 'https://www.toli.co.jp/product/assets/images/floor_item_m/1CF9601_20241018_145353.jpg',
  'int-floor-carpet': 'https://www.sangetsu.co.jp/digital_book/carpet_tile/img/pickup1.jpg',
  'int-floor-carpet-nt': 'https://www.sangetsu.co.jp/digital_book/carpet_tile/img/pickup1.jpg',
  'int-floor-carpet-dt': 'https://www.sangetsu.co.jp/digital_book/carpet_tile/img/pickup1.jpg',
  'int-floor-live-natural-msx': 'https://www.woodtec.co.jp/products/lineup/flooring/livenatural/livenatural-msx/images/main.jpg',
  'int-floor-msx': 'https://www.woodtec.co.jp/products/lineup/flooring/livenatural/livenatural-msx/images/main.jpg',
  'int-floor-live-natural-mrx': 'https://www.woodtec.co.jp/products/lineup/flooring/livenatural/livenatural-mrx/images/main.jpg',
  'int-floor-mrx': 'https://www.woodtec.co.jp/products/lineup/flooring/livenatural/livenatural-mrx/images/main.jpg',
  'int-floor-live-natural-premium': 'https://www.woodtec.co.jp/products/lineup/flooring/livenaturalpremium/images/main.jpg',
  'int-floor-livnatural-premium': 'https://www.woodtec.co.jp/products/lineup/flooring/livenaturalpremium/images/main.jpg',
  'int-stair-002': 'https://www.woodtec.co.jp/products/lineup/flooring/livenatural/livenatural-msx/images/main.jpg',
  'int-floor-ikuta': 'https://www.ikuta.co.jp/product/meiboku/images/main.jpg',
  'int-floor-meiboku-rustic': 'https://www.ikuta.co.jp/product/meiboku/images/main.jpg',
  'int-floor-meiboku-aging': 'https://www.ikuta.co.jp/product/meiboku/images/main.jpg',
  'int-floor-crude-303': 'https://www.ikuta.co.jp/product/crude/images/main.jpg',
  'int-floor-vintage-rustic': 'https://www.ikuta.co.jp/product/vintage/images/main.jpg',
  'int-stair-003': 'https://www.ikuta.co.jp/product/meiboku/images/main.jpg',
  'int-stair-003b': 'https://www.ikuta.co.jp/product/meiboku/images/main.jpg',
  'int-ecocarat-001': 'https://www.ecocarat.jp/products/ecocarat_plus/images/granquarz/main.jpg',
  'int-ecocarat-002': 'https://www.ecocarat.jp/products/ecocarat_plus/images/roughcement/main.jpg',
  'int-ecocarat-003': 'https://www.ecocarat.jp/products/ecocarat_plus/images/valslock/main.jpg',
  'int-ecocarat-004': 'https://www.ecocarat.jp/products/ecocarat_plus/images/stonegrace/main.jpg',
  'int-ecocarat-005': 'https://www.ecocarat.jp/products/ecocarat_plus/images/roughquartz/main.jpg',
  'int-lattice-w045': 'https://www.lixil.co.jp/lineup/livingroom_bedroom/interiorkoushi/images/main.jpg',
  'int-lattice-w085': 'https://www.lixil.co.jp/lineup/livingroom_bedroom/interiorkoushi/images/main.jpg',
  'int-lattice-w12': 'https://www.lixil.co.jp/lineup/livingroom_bedroom/interiorkoushi/images/main.jpg',
  'int-lattice-w16': 'https://www.lixil.co.jp/lineup/livingroom_bedroom/interiorkoushi/images/main.jpg',
  'ext-awning-alfin-af95': 'https://www.alfin.co.jp/products/hisashi/af95/images/main.jpg',
  'int-stairs-carpet': 'https://www.sangetsu.co.jp/digital_book/carpet_tile/img/pickup1.jpg',
  'int-stair-001': 'https://sumai.panasonic.jp/interior/floor/lineup/files/vb/kehsv2ty.jpg',
  'int-stair-004': 'https://www.ghouse.osaka.jp/images/iron-stair.jpg',
  'int-tatami-001': 'https://www.daiken.jp/product/lineup/tatami/images/sukoyaka_seiryu.jpg',
  'int-tile-001': 'https://www.nagoya-mosaic.co.jp/products/images/scandinaviastone.jpg',
  'int-tile-floor-001': 'https://www.nagoya-mosaic.co.jp/products/images/landstone.jpg',
  'int-tile-floor-002': 'https://www.nagoya-mosaic.co.jp/products/images/pietrasoni.jpg',
  'int-tile-floor-003': 'https://www.lixil.co.jp/lineup/tile/memphis/images/main.jpg',
  'int-niche-pattern-a': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-b': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-c': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-d': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-e': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-f': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-g': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-h': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-i': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-j': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-k': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-pattern-l': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-remote-b': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-niche-remote-e': 'https://www.ghouse.osaka.jp/images/niche.jpg',
  'int-dryer-001': 'https://rinnai.jp/products/sanitary/gas_dryer/img/kantatsu_5kg.jpg',
  'int-dryer-002': 'https://rinnai.jp/products/sanitary/gas_dryer/img/kantatsu_6kg.jpg',
  'int-dryer-003': 'https://rinnai.jp/products/sanitary/gas_dryer/img/kantatsu_9kg.jpg',
  'int-dryer-004': 'https://rinnai.jp/products/sanitary/gas_dryer/img/kadai.jpg',
  'int-dryer-005': 'https://rinnai.jp/products/sanitary/gas_dryer/img/shunou.jpg',
  'furn-dt-rd-oc-bk-d1100': 'https://www.ghouse.osaka.jp/images/dining-table-round.jpg',
  'furn-dt-rd-oc-bk-d1200': 'https://www.ghouse.osaka.jp/images/dining-table-round.jpg',
  'furn-dt-rd-oc-wh-d1100': 'https://www.ghouse.osaka.jp/images/dining-table-round.jpg',
  'furn-dt-rd-oc-wh-d1200': 'https://www.ghouse.osaka.jp/images/dining-table-round.jpg',
  'furn-dt-rd-qt-bk-d1100': 'https://www.ghouse.osaka.jp/images/dining-table-round.jpg',
  'furn-dt-rd-qt-bk-d1200': 'https://www.ghouse.osaka.jp/images/dining-table-round.jpg',
  'furn-dt-rd-qt-wh-d1100': 'https://www.ghouse.osaka.jp/images/dining-table-round.jpg',
  'furn-dt-rd-qt-wh-d1200': 'https://www.ghouse.osaka.jp/images/dining-table-round.jpg',
  'furn-dt-sq-rd-bk-w1500-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-bk-w1500-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-bk-w1650-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-bk-w1650-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-bk-w1800-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-bk-w1800-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-wh-w1500-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-wh-w1500-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-wh-w1650-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-wh-w1650-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-wh-w1800-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-rd-wh-w1800-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-bk-w1500-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-bk-w1500-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-bk-w1650-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-bk-w1650-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-bk-w1800-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-bk-w1800-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-wh-w1500-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-wh-w1500-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-wh-w1650-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-wh-w1650-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-wh-w1800-1port-usb': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'furn-dt-sq-sq-wh-w1800-2port': 'https://www.ghouse.osaka.jp/images/dining-table-square.jpg',
  'ext-door-venato-d30-c10': 'https://www.ykkap.co.jp/consumer/products/entrance/venatoii/img/venato_d30_mv.jpg',
  'ext-wall-jolypate-ancient-brick': 'https://www.aica.co.jp/products/jolypat/images/ancient-brick.jpg',
  'ext-wall-jolypate-meteor': 'https://www.aica.co.jp/products/jolypat/images/meteor.jpg',
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

  // 既に画像があるvariant_idのリストを取得
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
          // 既存の画像がない場合のみ追加
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
      }
    }
  }

  console.log(`\nMatched items: ${matched}`);
  console.log(`New images to insert: ${imagesToInsert.length}`);

  if (imagesToInsert.length > 0) {
    console.log('\nInserting images in batches...');
    const batchSize = 50;  // 小さいバッチサイズで安定性向上
    for (let i = 0; i < imagesToInsert.length; i += batchSize) {
      const batch = imagesToInsert.slice(i, i + batchSize);
      try {
        const result = await makeRequest('POST', '/rest/v1/item_variant_images', batch);
        console.log(`Batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(imagesToInsert.length/batchSize)}: ${result.status === 201 ? 'OK' : 'Error: ' + result.status}`);
        await sleep(500);  // バッチ間に遅延を追加
      } catch (err) {
        console.log(`Batch ${Math.floor(i/batchSize) + 1}: Error - ${err.message}, retrying...`);
        await sleep(2000);
        try {
          const result = await makeRequest('POST', '/rest/v1/item_variant_images', batch);
          console.log(`Batch ${Math.floor(i/batchSize) + 1} retry: ${result.status === 201 ? 'OK' : 'Error: ' + result.status}`);
        } catch (err2) {
          console.log(`Batch ${Math.floor(i/batchSize) + 1} retry failed: ${err2.message}`);
        }
      }
    }
  }

  console.log('Done!');
}

main().catch(console.error);
