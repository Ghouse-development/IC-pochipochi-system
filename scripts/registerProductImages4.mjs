import https from 'https';
import fs from 'fs';

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

// 追加の製品画像マッピング - 残りアイテム用
const PRODUCT_IMAGES = {
  // 換気システム
  'ext-cyclone-hood': 'https://sumai.panasonic.jp/ventilation/cyclone/images/main.jpg',
  'ext-ventilation-grille': 'https://www.ghouse.osaka.jp/images/ventilation.jpg',
  'ext-ventilation-hood-kb': 'https://sumai.panasonic.jp/ventilation/hood/images/trd.jpg',
  'ventilation-grill': 'https://www.ghouse.osaka.jp/images/ventilation.jpg',

  // 軒天
  'ext-soffit-laforet-soleil': 'https://metoree.s3.ap-northeast-1.amazonaws.com/img/products-new/a30046782024090119.png',

  // 外壁
  'ext-wall-bolb-stone': 'https://www.nichiha.co.jp/wall/images/bolbstone.jpg',

  // ガレージシャッター
  'garage-shutter-ifudoudou': 'https://www.sanwa-ss.co.jp/product/garage/ifudo/images/main.jpg',
  'garage-shutter-sunautohighspeed': 'https://www.sanwa-ss.co.jp/product/garage/sunauto/images/main.jpg',

  // 雨どい
  'gutter-horizontal-finescare': 'https://sumai.panasonic.jp/exterior/amatoi/images/finescale.jpg',
  'gutter-vertical-s30': 'https://sumai.panasonic.jp/exterior/amatoi/images/s30.jpg',

  // 内装
  'int-bath-doorframe-001': 'https://www.ghouse.osaka.jp/images/bath-doorframe.jpg',
  'int-counter-cable-cap': 'https://sumai.panasonic.jp/interior/shuno/counter/images/cable.jpg',
  'int-floor-channel-uni-a': 'https://channel-original.jp/images/uni-series.jpg',
  'int-floor-channel-uni-b': 'https://channel-original.jp/images/uni-series.jpg',
  'int-handrail-001': 'https://jp.toto.com/products/ud/handrail/images/main.jpg',
  'int-light-003': 'https://sumai.panasonic.jp/lighting/pendant/images/main.jpg',
  'int-outlet-003': 'https://sumai.panasonic.jp/outlet/upcon/images/main.jpg',
  'int-stair-005': 'https://www.ghouse.osaka.jp/images/iron-handrail.jpg',
  'int-storage-003': 'https://sumai.panasonic.jp/interior/shuno/integrate/images/main.jpg',
  'int-tile-advan-001': 'https://www.advan.co.jp/products/stone/images/stoneveneer.jpg',
  'int-tile-grout-001': 'https://www.ghouse.osaka.jp/images/grout.jpg',
  'int-wall-habaki': 'https://sumai.panasonic.jp/interior/habaki/images/cushion.jpg',
  'int-wall-madowaku': 'https://sumai.panasonic.jp/interior/madowaku/images/ts.jpg',

  // 外部水栓
  'exterior-faucet-aluminum': 'https://www.onlyone.co.jp/products/faucet/images/aluminum.jpg',

  // ポーチタイル
  'porch-tile-memphis': 'https://www.lixil.co.jp/lineup/tile/memphis/images/main.jpg',

  // 浴室
  'bathroom-lixil-ax-1616-001': 'https://www.lixil.co.jp/lineup/bathroom/ax/images/main.jpg',
  'bathroom-lixil-ax-1618-001': 'https://www.lixil.co.jp/lineup/bathroom/ax/images/main.jpg',
  'bathroom-panasonic-oflora-1616-001': 'https://sumai.panasonic.jp/bathroom/oflora/img/main.jpg',
  'bathroom-panasonic-oflora-1618-001': 'https://sumai.panasonic.jp/bathroom/oflora/img/main.jpg',
  'bathroom-panasonic-oflora-1620-001': 'https://sumai.panasonic.jp/bathroom/oflora/img/main.jpg',

  // ドア
  'door-design-hb-add': 'https://sumai.panasonic.jp/interior/door/veritis/img/hb_door.jpg',
  'door-design-hb-change': 'https://sumai.panasonic.jp/interior/door/veritis/img/hb_door.jpg',
  'door-design-hc-add': 'https://sumai.panasonic.jp/interior/door/veritis/img/hc_door.jpg',
  'door-design-hc-change': 'https://sumai.panasonic.jp/interior/door/veritis/img/hc_door.jpg',

  // 玄関ハンドル
  'ext-door-handle-round-straight': 'https://www.ykkap.co.jp/consumer/products/entrance/handle/img/round.jpg',
  'ext-door-handle-square-straight': 'https://www.ykkap.co.jp/consumer/products/entrance/handle/img/square.jpg',
  'ext-door-handle-straight': 'https://www.ykkap.co.jp/consumer/products/entrance/handle/img/straight.jpg',

  // カメラ・ポール
  'ext-facility-wireless-camera-cx500': 'https://sumai.panasonic.jp/security/camera/images/cx500.jpg',
  'ext-fascia': 'https://www.ghouse.osaka.jp/images/fascia.jpg',
  'ext-sukkiri-pole-smart': 'https://sumai.panasonic.jp/exterior/sukkiri/images/smart.jpg',
  'ext-sukkiri-pole-standard': 'https://sumai.panasonic.jp/exterior/sukkiri/images/standard.jpg',
  'exterior-camera-box': 'https://www.mirai.co.jp/products/images/box.jpg',
  'exterior-tv-antenna': 'https://www.ghouse.osaka.jp/images/tv-antenna.jpg',

  // 床材
  'int-floor-entrance-frame-prairie-18': 'https://www.prairiehomes.jp/products/kamachi/images/main.jpg',
  'int-floor-entrance-frame-prairie-28': 'https://www.prairiehomes.jp/products/kamachi/images/main.jpg',

  // 点検口
  'int-hatch-ceiling-001': 'https://www.joto.com/products/images/ceiling-hatch.jpg',

  // ランドリー
  'int-laundry-pole-001': 'https://www.moritaalumi.co.jp/upImage/product/kacu.jpg',

  // 可動棚
  'int-movable-shelf-001': 'https://www.ghouse.osaka.jp/images/movable-shelf.jpg',
  'int-movable-shelf-002': 'https://www.ghouse.osaka.jp/images/movable-shelf.jpg',
  'int-movable-shelf-003': 'https://www.ghouse.osaka.jp/images/movable-shelf.jpg',
  'int-movable-shelf-004': 'https://www.ghouse.osaka.jp/images/movable-shelf.jpg',
  'int-movable-shelf-005': 'https://www.ghouse.osaka.jp/images/movable-shelf.jpg',
  'int-movable-shelf-006': 'https://www.ghouse.osaka.jp/images/movable-shelf.jpg',

  // その他インテリア
  'int-tile-002': 'https://www.nagoya-mosaic.co.jp/products/images/biophilic.jpg',
  'int-tile-003': 'https://www.nagoya-mosaic.co.jp/products/images/cementing.jpg',
  'int-tile-004': 'https://www.nagoya-mosaic.co.jp/products/images/modenese.jpg',
  'int-tile-005': 'https://www.nagoya-mosaic.co.jp/products/images/lavita.jpg',
  'int-tile-006': 'https://www.nagoya-mosaic.co.jp/products/images/fata.jpg',
  'int-tile-007': 'https://www.nagoya-mosaic.co.jp/products/images/ekipism.jpg',
  'int-tile-008': 'https://www.nagoya-mosaic.co.jp/products/images/matandmore.jpg',
  'int-tile-009': 'https://www.hiratatile.co.jp/products/images/wigwag.jpg',
  'int-tile-010': 'https://www.hiratatile.co.jp/products/images/paletta.jpg',
  'int-tile-011': 'https://www.hiratatile.co.jp/products/images/marblemosaic.jpg',
  'int-tile-012': 'https://www.hiratatile.co.jp/products/images/britz.jpg',
  'int-tile-013': 'https://www.hiratatile.co.jp/products/images/10thirty.jpg',
  'int-tile-014': 'https://www.hiratatile.co.jp/products/images/recipe.jpg',
  'int-tile-015': 'https://www.lixil.co.jp/lineup/tile/yukage/images/main.jpg',
  'int-tile-016': 'https://www.lixil.co.jp/lineup/tile/shineleaf/images/main.jpg',
  'int-tile-017': 'https://www.lixil.co.jp/lineup/tile/innocentmarble/images/main.jpg',
  'int-tile-018': 'https://www.lixil.co.jp/lineup/tile/gravelglass/images/main.jpg',

  // 洗面・トイレ
  'washroom-toto-octave-750': 'https://jp.toto.com/products/faucet/octave/img/main.jpg',
  'washroom-toto-octave-900': 'https://jp.toto.com/products/faucet/octave/img/main.jpg',
  'washroom-lixil-piara-750': 'https://www.lixil.co.jp/lineup/powderroom/piara/images/main.jpg',
  'washroom-lixil-piara-900': 'https://www.lixil.co.jp/lineup/powderroom/piara/images/main.jpg',
  'toilet-panasonic-arauno-z160': 'https://sumai.panasonic.jp/toilet/alauno/img/z160/main.jpg',
  'toilet-toto-gg-j1': 'https://jp.toto.com/products/toilet/gg/img/main.jpg',
  'toilet-toto-zj1': 'https://jp.toto.com/products/toilet/zj/img/main.jpg',

  // キッチン
  'kitchen-panasonic-sclass-island': 'https://sumai.panasonic.jp/kitchen/s-class/img/island/main.jpg',
  'kitchen-panasonic-sclass-peninsula': 'https://sumai.panasonic.jp/kitchen/s-class/img/peninsula/main.jpg',
  'kitchen-takara-ofelia-2550': 'https://www.takara-standard.co.jp/product/system_kitchen/ofelia/images/main.jpg',
  'kitchen-takara-grandia-2700': 'https://www.takara-standard.co.jp/product/system_kitchen/grandia/images/main.jpg',
  'kitchen-lixil-richelle-2550': 'https://www.lixil.co.jp/lineup/kitchen/richelle/images/main.jpg',
  'kitchen-lixil-noct-2400': 'https://www.lixil.co.jp/lineup/kitchen/noct/images/main.jpg',

  // その他
  'laundry-multi-sink-600': 'https://jp.toto.com/products/washroom/multisink/images/main.jpg',
  'second-compact-washroom-600': 'https://jp.toto.com/products/washroom/compact/images/main.jpg',
  'water-ecocute-370': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'water-ecocute-460': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s46lqs_main.jpg',
  'eco-indoor-change': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'eco-garage-change': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',
  'eco-salt-damage': 'https://sumai.panasonic.jp/hp/lineup/img_db/lineup_s37lqs_main.jpg',

  // その他の追加アイテム
  'bathroom-dryer-1room': 'https://sumai.panasonic.jp/bathroom/dryer/images/1room.jpg',
  'bathroom-dryer-3room': 'https://sumai.panasonic.jp/bathroom/dryer/images/3room.jpg',
  'int-floor-channel-herringbone': 'https://channel-original.jp/images/herringbone.jpg',
  'int-resin-shelf-001': 'https://www.ghouse.osaka.jp/images/resin-shelf.jpg',
  'int-resin-shelf-002': 'https://www.ghouse.osaka.jp/images/resin-shelf.jpg',
  'int-resin-shelf-003': 'https://www.ghouse.osaka.jp/images/resin-shelf.jpg',
  'int-indirect-cornice': 'https://www.ghouse.osaka.jp/images/indirect-light.jpg',
  'int-indirect-cove': 'https://www.ghouse.osaka.jp/images/indirect-light.jpg',
  'int-indirect-upper': 'https://www.ghouse.osaka.jp/images/indirect-light.jpg',
  'int-outlet-001': 'https://sumai.panasonic.jp/outlet/images/main.jpg',
  'int-outlet-002': 'https://sumai.panasonic.jp/outlet/images/4port.jpg',
  'int-outlet-004': 'https://sumai.panasonic.jp/outlet/advance/images/main.jpg',
  'int-switch-001': 'https://sumai.panasonic.jp/switch/images/main.jpg',
  'int-lan-001': 'https://sumai.panasonic.jp/lan/images/main.jpg',
  'int-tv-001': 'https://sumai.panasonic.jp/tv/images/wall-mount.jpg',
  'int-intercom-001': 'https://sumai.panasonic.jp/door/intercom/images/svd505.jpg',
  'int-intercom-002': 'https://sumai.panasonic.jp/door/intercom/images/svd710.jpg',
  'int-intercom-003': 'https://sumai.panasonic.jp/door/intercom/images/se50.jpg',
  'int-vent-001': 'https://sumai.panasonic.jp/ventilation/heatexchange/images/main.jpg',
  'int-vent-grill-exhaust': 'https://sumai.panasonic.jp/ventilation/grill/images/exhaust.jpg',
  'int-hanger-001': 'https://www.kawaguchigiken.co.jp/products/hoscleen/images/main.jpg',
  'int-hanger-001-add': 'https://www.kawaguchigiken.co.jp/products/hoscleen/images/main.jpg',
  'int-hanger-002': 'https://sumai.panasonic.jp/interior/hoshihime/images/main.jpg',
  'int-hanger-pipe-001': 'https://www.ghouse.osaka.jp/images/hanger-pipe.jpg',
  'int-hanger-pipe-002': 'https://www.ghouse.osaka.jp/images/hanger-pipe.jpg',
  'int-hanger-pipe-003': 'https://www.ghouse.osaka.jp/images/hanger-pipe.jpg',
  'int-hanger-pipe-004': 'https://www.ghouse.osaka.jp/images/hanger-pipe.jpg',
  'int-laundry-pole-002': 'https://www.moritaalumi.co.jp/upImage/product/pid4m.jpg',
  'int-laundry-pole-003': 'https://www.kawaguchigiken.co.jp/products/hoscleen/images/utm.jpg',
  'int-laundry-pole-004': 'https://www.kawaguchigiken.co.jp/products/hoscleen/images/urm.jpg',
  'int-slop-sink-001': 'https://jp.toto.com/products/washroom/slop/images/main.jpg',
  'int-washing-faucet-001': 'https://www.ghouse.osaka.jp/images/washing-faucet.jpg',
  'int-washing-pan-001': 'https://sumai.panasonic.jp/interior/washing/images/pan.jpg',
  'int-nanobubble-001': 'https://beautyaqua.jp/images/main.jpg',
  'int-koagari-001': 'https://www.ghouse.osaka.jp/images/koagari.jpg',
  'int-stair-handrail-add': 'https://www.lixil.co.jp/lineup/livingroom_bedroom/handrail/images/main.jpg',
  'int-stair-handrail-lixil': 'https://www.lixil.co.jp/lineup/livingroom_bedroom/handrail/images/square.jpg',
  'int-stair-landing': 'https://www.ghouse.osaka.jp/images/stair-landing.jpg',
  'int-stair-004b': 'https://www.ghouse.osaka.jp/images/iron-stair.jpg',
  'int-stair-004c': 'https://www.ghouse.osaka.jp/images/iron-stair.jpg',
  'int-stair-004d': 'https://www.ghouse.osaka.jp/images/iron-stair.jpg',
  'int-wall-002': 'https://www.ghouse.osaka.jp/images/tarekabe.jpg',
  'int-wall-003': 'https://www.ghouse.osaka.jp/images/arch-tarekabe.jpg',
  'int-wall-kasagi': 'https://sumai.panasonic.jp/interior/kasagi/images/main.jpg',
  'int-panel-001': 'https://www.woodtec.co.jp/products/lineup/wall/thewall/images/main.jpg',
  'int-panel-002b': 'https://www.woodtec.co.jp/products/lineup/wall/thewall/images/main.jpg',
  'int-panel-003': 'https://www.woodtec.co.jp/products/lineup/wall/thewall/images/main.jpg',
  'int-panel-003b': 'https://www.woodtec.co.jp/products/lineup/wall/thewall/images/main.jpg',
  'int-magnet-cloth': 'https://www.sincol.co.jp/magmagic/images/main.jpg',
  'int-curtain-box-ceiling': 'https://www.ghouse.osaka.jp/images/curtain-box.jpg',
  'int-curtain-box-wall': 'https://www.ghouse.osaka.jp/images/curtain-box.jpg',
  'int-window-a-standard': 'https://sumai.panasonic.jp/interior/window/images/pattern-a.jpg',
  'int-window-a-option': 'https://sumai.panasonic.jp/interior/window/images/pattern-a.jpg',
  'int-window-b-standard': 'https://sumai.panasonic.jp/interior/window/images/pattern-b.jpg',
  'int-window-b-option': 'https://sumai.panasonic.jp/interior/window/images/pattern-b.jpg',
  'int-window-c-standard': 'https://sumai.panasonic.jp/interior/window/images/pattern-c.jpg',
  'int-window-c-option': 'https://sumai.panasonic.jp/interior/window/images/pattern-c.jpg',
  'int-window-awning-change': 'https://sumai.panasonic.jp/interior/window/images/awning.jpg',
  'int-downlight-001': 'https://www.ghouse.osaka.jp/images/downlight.jpg',
  'int-downlight-002': 'https://www.ghouse.osaka.jp/images/downlight.jpg',
  'int-light-001': 'https://sumai.panasonic.jp/lighting/downlight/images/60w.jpg',
  'int-light-002': 'https://sumai.panasonic.jp/lighting/downlight/images/dimmer.jpg',
  'int-elec-001': 'https://sumai.panasonic.jp/cosmowide/images/main.jpg',
  'int-gas-001': 'https://www.ghouse.osaka.jp/images/gas.jpg',
  'int-reinforce-ceiling-1m': 'https://www.ghouse.osaka.jp/images/reinforce.jpg',
  'int-reinforce-ceiling-2m': 'https://www.ghouse.osaka.jp/images/reinforce.jpg',
  'int-reinforce-ceiling-3m': 'https://www.ghouse.osaka.jp/images/reinforce.jpg',
  'int-reinforce-ceiling-4m': 'https://www.ghouse.osaka.jp/images/reinforce.jpg',
  'int-reinforce-floor': 'https://www.ghouse.osaka.jp/images/floor-reinforce.jpg',
  'int-reinforce-wall': 'https://www.ghouse.osaka.jp/images/wall-reinforce.jpg',
  'int-shelf-001': 'https://sumai.panasonic.jp/interior/shelf/images/makuradana.jpg',
  'int-shelf-002': 'https://sumai.panasonic.jp/interior/shelf/images/makuradana.jpg',
  'int-shelf-003': 'https://sumai.panasonic.jp/interior/shelf/images/makuradana.jpg',
  'int-shelf-004': 'https://sumai.panasonic.jp/interior/shelf/images/makuradana.jpg',
  'int-shelf-005': 'https://sumai.panasonic.jp/interior/shelf/images/makuradana.jpg',
  'int-storage-001': 'https://sumai.panasonic.jp/interior/shelf/images/makuradana.jpg',
  'int-storage-002': 'https://sumai.panasonic.jp/interior/shelf/images/makuradana.jpg',
  'int-storage-floor-001': 'https://www.joto.com/products/images/floor-storage.jpg',
  'int-toilet-storage-back': 'https://www.ghouse.osaka.jp/images/toilet-storage.jpg',
  'int-toilet-storage-sanita': 'https://www.ghouse.osaka.jp/images/sanita.jpg',
  'int-toilet-storage-upper': 'https://www.ghouse.osaka.jp/images/toilet-upper.jpg',
  'int-floor-flatbar': 'https://www.ghouse.osaka.jp/images/flatbar.jpg',
  'int-floor-entrance-frame-std': 'https://sumai.panasonic.jp/interior/kamachi/images/main.jpg',
  'int-wall-accent-001': 'https://www.sangetsu.co.jp/product/wallpaper/images/accent.jpg',
  'int-wall-accent-002': 'https://www.sangetsu.co.jp/product/wallpaper/images/accent.jpg',
  'int-wall-base-001': 'https://www.sangetsu.co.jp/product/wallpaper/images/base.jpg',
  'int-ceiling-base-001': 'https://www.sangetsu.co.jp/product/wallpaper/images/ceiling.jpg',
  'int-ceiling-down': 'https://www.ghouse.osaka.jp/images/ceiling-down.jpg',
  'int-ceiling-slope': 'https://www.ghouse.osaka.jp/images/ceiling-slope.jpg',
  'int-ceiling-up-100': 'https://www.ghouse.osaka.jp/images/ceiling-up.jpg',
  'int-ceiling-up-200': 'https://www.ghouse.osaka.jp/images/ceiling-up.jpg',

  // 窓関連
  'window-shutter-electric-change': 'https://www.ykkap.co.jp/consumer/products/window/shutter/img/electric.jpg',
  'window-glass-heat-resistance': 'https://www.ykkap.co.jp/consumer/products/window/glass/img/heat.jpg',
  'window-glass-laminated-30mil': 'https://www.ykkap.co.jp/consumer/products/window/glass/img/laminated.jpg',
  'window-add-22area': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'window-add-fire-area': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'window-sliding-add-22area': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',
  'window-sliding-add-fire-area': 'https://www.ykkap.co.jp/consumer/products/window/apw330/img/apw330_mv.jpg',

  // 玄関関連
  'entrance-key-pocket-001': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/pocket.jpg',
  'entrance-key-face-001': 'https://www.ykkap.co.jp/consumer/products/entrance/key/img/face.jpg',
  'entrance-wash-stainless-corner': 'https://www.kakudai.jp/products/faucet/images/stainless.jpg',
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
