import * as dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

// Service Role Key が必要（DDL操作のため）
const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseServiceKey) {
  console.log('SUPABASE_SERVICE_ROLE_KEY が必要です。');
  console.log('.envファイルに追加してください。');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// 素材タイプのマッピング
const materialTypeMapping: Record<string, string> = {
  '窯業系サイディング': '窯業系サイディング',
  'ガルバリウム鋼板': 'ガルバリウム鋼板',
  '塗り壁': '塗り壁',
  'タイル': 'タイル',
};

async function updateMaterialTypes() {
  console.log('=== material_type の更新 ===\n');

  // 外壁カテゴリのアイテムを取得
  const { data: wallCategory } = await supabase
    .from('categories')
    .select('id')
    .eq('name', '外壁')
    .single();

  if (!wallCategory) {
    console.log('外壁カテゴリが見つかりません');
    return;
  }

  const { data: items, error } = await supabase
    .from('items')
    .select('id, name, note')
    .eq('category_id', wallCategory.id);

  if (error) {
    console.log('Error:', error);
    return;
  }

  console.log(`外壁アイテム数: ${items?.length}件\n`);

  let updateCount = 0;
  for (const item of items || []) {
    let materialType = null;

    // noteから素材タイプを判定
    if (item.note) {
      for (const [keyword, type] of Object.entries(materialTypeMapping)) {
        if (item.note.includes(keyword)) {
          materialType = type;
          break;
        }
      }
    }

    if (materialType) {
      // material_typeカラムがまだないので、まずカラムを追加する必要がある
      // ここではログ出力のみ
      console.log(`  ${item.name}: ${materialType}`);
      updateCount++;
    } else {
      console.log(`  ${item.name}: 不明 (note: ${item.note?.substring(0, 30)}...)`);
    }
  }

  console.log(`\n判定できたアイテム: ${updateCount}件`);
  console.log('\n注意: material_typeカラムをSupabaseに追加してから、再度このスクリプトを実行してデータを更新してください。');
}

updateMaterialTypes();
