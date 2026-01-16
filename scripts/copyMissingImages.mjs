import https from 'https';

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

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
      res.on('end', () => {
        resolve({ status: res.statusCode, data: data });
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function getItemsWithVariants() {
  const result = await makeRequest('GET', '/rest/v1/items?select=id,item_code,name,variants:item_variants(id,variant_code,color_name,color_code,images:item_variant_images(id,image_url))&is_active=eq.true', null);
  return JSON.parse(result.data);
}

async function insertImages(images) {
  if (images.length === 0) return { status: 200 };
  const result = await makeRequest('POST', '/rest/v1/item_variant_images', images);
  return result;
}

async function main() {
  console.log('Fetching items with variants...');
  const items = await getItemsWithVariants();
  console.log(`Found ${items.length} items`);

  const imagesToInsert = [];
  let processedItems = 0;
  let copiedImages = 0;

  for (const item of items) {
    if (!item.variants || item.variants.length === 0) continue;

    // Group variants by color_name
    const variantsByColor = {};
    for (const variant of item.variants) {
      const key = variant.color_name || variant.color_code || 'default';
      if (!variantsByColor[key]) {
        variantsByColor[key] = [];
      }
      variantsByColor[key].push(variant);
    }

    // For each color group, find if there's a variant with image and copy to ones without
    for (const [colorName, variants] of Object.entries(variantsByColor)) {
      const withImage = variants.find(v => v.images && v.images.length > 0);
      const withoutImage = variants.filter(v => !v.images || v.images.length === 0);

      if (withImage && withoutImage.length > 0) {
        const sourceImage = withImage.images[0];
        for (const targetVariant of withoutImage) {
          imagesToInsert.push({
            variant_id: targetVariant.id,
            image_url: sourceImage.image_url,
            alt_text: `${item.name} ${colorName}`,
            is_primary: true,
            display_order: 1
          });
          copiedImages++;
        }
      }
    }
    processedItems++;
  }

  console.log(`Processed ${processedItems} items`);
  console.log(`Found ${copiedImages} images to copy`);

  if (imagesToInsert.length > 0) {
    console.log('Inserting images in batches...');
    const batchSize = 100;
    for (let i = 0; i < imagesToInsert.length; i += batchSize) {
      const batch = imagesToInsert.slice(i, i + batchSize);
      const result = await insertImages(batch);
      console.log(`Batch ${Math.floor(i/batchSize) + 1}: ${result.status === 201 || result.status === 200 ? 'OK' : 'Error: ' + result.data}`);
    }
  }

  console.log('Done!');
}

main().catch(console.error);
