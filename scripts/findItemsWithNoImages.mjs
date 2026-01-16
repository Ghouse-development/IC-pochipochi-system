import https from 'https';

const SUPABASE_URL = 'qqzqffkiyzeaampotgnn.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxenFmZmtpeXplYWFtcG90Z25uIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTI1NjEwNiwiZXhwIjoyMDgwODMyMTA2fQ.-GlIqHdcn0Tbzts_JjcVqSOGezSDH1rgYwrIxDqzuFo';

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: SUPABASE_URL,
      port: 443,
      path: path,
      method: 'GET',
      headers: {
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': 'Bearer ' + SERVICE_ROLE_KEY
      }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.end();
  });
}

async function main() {
  // Get items with variants
  const items = await makeRequest('/rest/v1/items?select=id,item_code,name,manufacturer,variants:item_variants(id,variant_code,color_name,images:item_variant_images(id))&is_active=eq.true&order=item_code&limit=1000');

  const itemsWithNoImages = [];
  for (const item of items) {
    if (!item.variants || item.variants.length === 0) continue;
    const hasAnyImage = item.variants.some(v => v.images && v.images.length > 0);
    if (!hasAnyImage) {
      itemsWithNoImages.push({
        item_code: item.item_code,
        name: item.name,
        manufacturer: item.manufacturer,
        variant_count: item.variants.length,
        first_variant_id: item.variants[0].id
      });
    }
  }

  console.log('Items with NO images at all:', itemsWithNoImages.length);
  console.log('\nTop 50 by variant count:');
  itemsWithNoImages.sort((a, b) => b.variant_count - a.variant_count).slice(0, 50).forEach(item => {
    console.log(item.variant_count + '\t' + item.item_code + '\t' + item.name + '\t' + (item.manufacturer || '-'));
  });

  // Output JSON for further processing
  const fs = await import('fs');
  fs.writeFileSync('scripts/temp_items_no_images.json', JSON.stringify(itemsWithNoImages, null, 2));
  console.log('\nSaved to scripts/temp_items_no_images.json');
}

main().catch(console.error);
