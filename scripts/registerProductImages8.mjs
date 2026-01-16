import https from 'https';

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

// 残り33バリアントの画像マッピング
const PRODUCT_IMAGES = {
  // LIXIL Vespa ポーチタイル
  'ext-porch-vespa': 'https://www.lixil.co.jp/lineup/tile/vespa/images/main.jpg',

  // Memphis ポーチタイル
  'ext-porch-memphis': 'https://www.nagoya-mosaic.co.jp/products/images/memphis.jpg',

  // ケイミュー Ancient Brick 外壁
  'ext-wall-ancient-brick': 'https://www.kmew.co.jp/shouhin/siding/img/ancient_brick_main.jpg',

  // ケイミュー Meteor 外壁
  'ext-wall-meteor': 'https://www.kmew.co.jp/shouhin/siding/img/meteor_main.jpg',
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

async function main() {
  // Get all variant IDs with images
  const allImages = [];
  for (let offset = 0; offset < 5000; offset += 1000) {
    const resp = await makeRequest('GET', `/rest/v1/item_variant_images?select=variant_id&offset=${offset}&limit=1000`);
    const batch = JSON.parse(resp.data);
    if (batch.length === 0) break;
    allImages.push(...batch);
  }
  const existingVariantIds = new Set(allImages.map(i => i.variant_id));
  console.log('Existing images:', existingVariantIds.size);

  const imagesToInsert = [];

  for (const [itemCode, imageUrl] of Object.entries(PRODUCT_IMAGES)) {
    const variantsResp = await makeRequest('GET', `/rest/v1/items?select=name,variants:item_variants(id,variant_code,color_name)&item_code=eq.${itemCode}`);
    const variantsData = JSON.parse(variantsResp.data);

    if (variantsData && variantsData[0] && variantsData[0].variants) {
      const itemName = variantsData[0].name;
      for (const variant of variantsData[0].variants) {
        if (!existingVariantIds.has(variant.id)) {
          imagesToInsert.push({
            variant_id: variant.id,
            image_url: imageUrl,
            alt_text: `${itemName} ${variant.color_name || ''}`.trim(),
            is_primary: true,
            display_order: 1
          });
        }
      }
      console.log(`OK ${itemCode}: ${variantsData[0].variants.length} variants`);
    }
  }

  console.log(`\nNew images to insert: ${imagesToInsert.length}`);

  if (imagesToInsert.length > 0) {
    const result = await makeRequest('POST', '/rest/v1/item_variant_images', imagesToInsert);
    console.log(`Insert result: ${result.status === 201 ? 'OK' : 'Error: ' + result.status}`);
  }

  console.log('Done!');
}

main().catch(console.error);
