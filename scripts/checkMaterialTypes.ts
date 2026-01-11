import * as dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.VITE_SUPABASE_ANON_KEY!
);

async function check() {
  // 外壁カテゴリを取得
  const { data: wallCategory } = await supabase
    .from('categories')
    .select('id')
    .eq('name', '外壁')
    .single();

  if (!wallCategory) {
    console.log('外壁カテゴリが見つかりません');
    return;
  }

  // 外壁アイテムを取得
  const { data: items } = await supabase
    .from('items')
    .select('id, name, note')
    .eq('category_id', wallCategory.id);

  console.log('=== 外壁アイテムの素材タイプ分析 ===\n');
  console.log(`外壁アイテム総数: ${items?.length}件\n`);

  // noteから素材タイプを抽出
  const materialCounts: Record<string, number> = {
    '窯業系サイディング': 0,
    'ガルバリウム鋼板': 0,
    '塗り壁': 0,
    '不明': 0,
  };

  items?.forEach(item => {
    if (item.note?.includes('窯業系サイディング')) {
      materialCounts['窯業系サイディング']++;
    } else if (item.note?.includes('ガルバリウム') || item.note?.includes('金属')) {
      materialCounts['ガルバリウム鋼板']++;
    } else if (item.note?.includes('塗り壁') || item.note?.includes('漆喰')) {
      materialCounts['塗り壁']++;
    } else {
      materialCounts['不明']++;
      console.log(`  不明: ${item.name} - ${item.note?.substring(0, 50)}`);
    }
  });

  console.log('\n=== 素材タイプ別カウント ===');
  Object.entries(materialCounts).forEach(([type, count]) => {
    console.log(`  ${type}: ${count}件`);
  });
}

check();
