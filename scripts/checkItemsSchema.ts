import * as dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function check() {
  // itemsテーブルのサンプルデータを取得
  const { data: items, error } = await supabase
    .from('items')
    .select('*')
    .limit(3);

  if (error) {
    console.log('Error:', error);
    return;
  }

  console.log('=== itemsテーブルのカラム ===');
  if (items && items.length > 0) {
    console.log(Object.keys(items[0]));
    console.log('\n=== サンプルデータ ===');
    items.forEach((item, i) => {
      console.log(`\n--- Item ${i + 1} ---`);
      Object.entries(item).forEach(([key, value]) => {
        console.log(`  ${key}: ${value}`);
      });
    });
  }
}

check();
