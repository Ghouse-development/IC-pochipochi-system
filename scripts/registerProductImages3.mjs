import https from 'https';
import fs from 'fs';

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

// 追加の製品画像マッピング
const PRODUCT_IMAGES = {
  // Panasonic VERITIS ドア
  'door-std-pa': 'https://sumai.panasonic.jp/interior/door/veritis/img/pa_door.jpg',
  'door-std-ta': 'https://sumai.panasonic.jp/interior/door/veritis/img/ta_door.jpg',
  'door-storage-fold-pa': 'https://sumai.panasonic.jp/interior/door/veritis/img/fold_pa.jpg',
  'door-storage-fold-ph': 'https://sumai.panasonic.jp/interior/door/veritis/img/fold_ph.jpg',
  'door-storage-slide2': 'https://sumai.panasonic.jp/interior/door/veritis/img/slide2.jpg',

  // LIXIL 階段
  'int-stairs-001': 'https://www.lixil.co.jp/lineup/livingroom_bedroom/stairs/images/main.jpg',
  'int-stairs-002': 'https://www.lixil.co.jp/lineup/livingroom_bedroom/stairs/images/main.jpg',

  // アルフィン庇
  'awning-alfin-af95': 'https://www.alfin.co.jp/products/hisashi/af95/images/main.jpg',
  'ext-awning-alfin-ad2s': 'https://www.alfin.co.jp/products/hisashi/ad2s/images/main.jpg',

  // 田島ルーフィング マティル
  'int-floor-matil': 'https://www.tajima.jp/product/flooring/matil/images/main.jpg',

  // AICA セラール
  'int-panel-004': 'https://www.aica.co.jp/products/veneer/seral/images/main.jpg',
  'int-panel-005': 'https://www.aica.co.jp/products/veneer/seral/images/main.jpg',

  // YKKAP 玄関ドア
  'ext-door-venato-d30-n18': 'https://www.ykkap.co.jp/consumer/products/entrance/venatoii/img/venato_d30_mv.jpg',
  'ext-door-venato-d30-n15': 'https://www.ykkap.co.jp/consumer/products/entrance/venatoii/img/venato_d30_mv.jpg',
  'ext-door-venato-d30-n08': 'https://www.ykkap.co.jp/consumer/products/entrance/venatoii/img/venato_d30_mv.jpg',
  'ext-window-apw330': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',

  // 三和シャッター
  'ext-garage-shutter-ifudo': 'https://www.sanwa-ss.co.jp/product/garage/ifudo/images/main.jpg',
  'ext-garage-shutter-sunauto': 'https://www.sanwa-ss.co.jp/product/garage/sunauto/images/main.jpg',

  // Panasonic 雨どい
  'ext-gutter-horizontal': 'https://sumai.panasonic.jp/exterior/amatoi/images/finescale.jpg',
  'ext-gutter-vertical': 'https://sumai.panasonic.jp/exterior/amatoi/images/s30.jpg',

  // 神島化学 軒天
  'ext-soffit-artezart': 'https://metoree.s3.ap-northeast-1.amazonaws.com/img/products-new/a30046782024090112.png',
  'ext-soffit-emboss': 'https://metoree.s3.ap-northeast-1.amazonaws.com/img/products-new/a30046782024090117.png',
  'ext-soffit-laforet-timber': 'https://metoree.s3.ap-northeast-1.amazonaws.com/img/products-new/a30046782024090116.png',

  // 換気
  'ext-ventilation-louver': 'https://www.ghouse.osaka.jp/images/ventilation.jpg',

  // 城東テクノ
  'int-hatch-floor-001': 'https://www.joto.com/products/images/hatch.jpg',

  // 目地
  'int-wall-tile-grout-001': 'https://www.ghouse.osaka.jp/images/grout.jpg',
  'ext-porch-grout': 'https://www.ghouse.osaka.jp/images/grout.jpg',

  // ポーチタイル
  'ext-porch-pietra-soni': 'https://www.nagoya-mosaic.co.jp/products/images/pietrasoni.jpg',
  'ext-porch-landstone': 'https://www.nagoya-mosaic.co.jp/products/images/landstone.jpg',
  'porch-tile-vespa': 'https://www.lixil.co.jp/lineup/tile/vespa/images/main.jpg',

  // スリムダクト
  'ext-slim-duct': 'https://www.ghouse.osaka.jp/images/slim-duct.jpg',

  // 小上がり
  'int-koagari-002': 'https://www.ghouse.osaka.jp/images/koagari.jpg',
  'int-koagari-003': 'https://www.ghouse.osaka.jp/images/koagari.jpg',

  // トイレ収納
  'int-toilet-storage-side': 'https://www.ghouse.osaka.jp/images/toilet-storage.jpg',

  // バルコニー
  'ext-balcony-coping': 'https://www.ghouse.osaka.jp/images/balcony-coping.jpg',

  // 外部設備
  'ext-facility-ac-sleeve-add': 'https://www.ghouse.osaka.jp/images/ac-sleeve.jpg',
  'ext-facility-ac-sleeve-std': 'https://www.ghouse.osaka.jp/images/ac-sleeve.jpg',
  'ext-facility-meter-box': 'https://www.ghouse.osaka.jp/images/meter-box.jpg',
  'ext-facility-outlet-add': 'https://sumai.panasonic.jp/exterior/outlet/images/main.jpg',
  'ext-facility-outlet-std': 'https://sumai.panasonic.jp/exterior/outlet/images/main.jpg',
  'ext-facility-security-box': 'https://www.mirai.co.jp/products/images/box.jpg',
  'ext-foundation-flashing': 'https://www.joto.com/products/images/flashing.jpg',
  'ext-parapet-coping': 'https://www.ghouse.osaka.jp/images/parapet-coping.jpg',

  // 磁器タイル
  'int-floor-ceramic-tile-001': 'https://www.lixil.co.jp/lineup/tile/ceramic/images/main.jpg',

  // 朝日ウッドテック THE WALL
  'int-panel-002': 'https://www.woodtec.co.jp/products/lineup/wall/thewall/images/main.jpg',
  'int-panel-003c': 'https://www.woodtec.co.jp/products/lineup/wall/thewall/images/main.jpg',

  // 換気グリル
  'int-vent-grill-supply': 'https://sumai.panasonic.jp/ventilation/grill/images/supply.jpg',

  // 腰壁
  'int-wall-001': 'https://www.ghouse.osaka.jp/images/koshikabe.jpg',

  // 玄関手洗い
  'entrance-wash-001': 'https://www.kakudai.jp/products/faucet/images/bowl.jpg',
  'entrance-wash-002': 'https://www.kakudai.jp/products/faucet/images/bowl.jpg',

  // 浴室関連
  'bathroom-dryer-1room': 'https://sumai.panasonic.jp/bathroom/dryer/images/1room.jpg',
  'bathroom-dryer-3room': 'https://sumai.panasonic.jp/bathroom/dryer/images/3room.jpg',
  'bathroom-panasonic-oflora': 'https://sumai.panasonic.jp/bathroom/oflora/img/main.jpg',
  'bathroom-lixil-ax': 'https://www.lixil.co.jp/lineup/bathroom/ax/images/main.jpg',

  // 洗面台
  'washroom-toto-octave': 'https://jp.toto.com/products/faucet/octave/img/main.jpg',
  'washroom-lixil-piara': 'https://www.lixil.co.jp/lineup/powderroom/piara/images/main.jpg',

  // トイレ
  'toilet-panasonic-arauno': 'https://sumai.panasonic.jp/toilet/alauno/img/main.jpg',
  'toilet-toto-gg': 'https://jp.toto.com/products/toilet/gg/img/main.jpg',
  'toilet-toto-zj': 'https://jp.toto.com/products/toilet/zj/img/main.jpg',

  // キッチン
  'kitchen-panasonic-sclass': 'https://sumai.panasonic.jp/kitchen/s-class/img/main.jpg',
  'kitchen-takara-ofelia': 'https://www.takara-standard.co.jp/product/system_kitchen/ofelia/images/main.jpg',
  'kitchen-takara-grandia': 'https://www.takara-standard.co.jp/product/system_kitchen/grandia/images/main.jpg',
  'kitchen-lixil-richelle': 'https://www.lixil.co.jp/lineup/kitchen/richelle/images/main.jpg',
  'kitchen-lixil-noct': 'https://www.lixil.co.jp/lineup/kitchen/noct/images/main.jpg',

  // マルチシンク
  'laundry-multi-sink': 'https://jp.toto.com/products/washroom/multisink/images/main.jpg',

  // コンパクト洗面
  'second-compact-washroom': 'https://jp.toto.com/products/washroom/compact/images/main.jpg',

  // 外部配管
  'external-pipe': 'https://www.ghouse.osaka.jp/images/external-pipe.jpg',

  // 中継ポール
  'solar-relay-pole': 'https://www.ghouse.osaka.jp/images/relay-pole.jpg',

  // 破風
  'fascia-ep-paint': 'https://www.ghouse.osaka.jp/images/fascia.jpg',

  // エコキュート室内設置
  'eco-indoor': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',

  // 玄関関連
  'entrance-key-pocket': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/pocket.jpg',
  'entrance-key-face': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/face.jpg',
  'entrance-wash-none': 'https://www.ghouse.osaka.jp/images/entrance-none.jpg',
  'entrance-wash-stainless': 'https://www.kakudai.jp/products/faucet/images/stainless.jpg',

  // 窓関連
  'window-shutter-electric': 'https://www.ykkap.co.jp/consumer/products/window/shutter/img/electric.jpg',
  'window-glass-heat': 'https://www.ykkap.co.jp/consumer/products/window/glass/img/heat.jpg',
  'window-glass-laminated': 'https://www.ykkap.co.jp/consumer/products/window/glass/img/laminated.jpg',
  'window-add-22': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'window-add-fire': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
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
  let unmatched = 0;

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
    } else {
      unmatched++;
    }
  }

  console.log(`\nMatched: ${matched}, Unmatched: ${unmatched}`);
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
