/**
 * 壁紙アイテムのカテゴリIDを修正するスクリプト
 */
import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';

function loadEnvFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    content.split('\n').forEach(line => {
      const match = line.match(/^([^=]+)=(.*)$/);
      if (match) {
        process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '');
      }
    });
  }
}

loadEnvFile(path.join(process.cwd(), '.env'));

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || ''
);

// 壁紙コードパターン
const WALLPAPER_PATTERNS = ['RE', 'SP', 'FE', 'BA', 'BB', 'TH', 'LB'];
// 壁クロスカテゴリID
const WALL_CLOTH_CATEGORY_ID = '0128b95b-fe58-44cc-8b55-f80e50beb51f';

async function main() {
  console.log('=== 壁紙カテゴリ修正 ===\n');
  
  // カテゴリIDがnullのアイテムを取得
  const { data: items, error } = await supabase
    .from('items')
    .select('id, name')
    .is('category_id', null);
  
  if (error) {
    console.error('取得エラー:', error);
    return;
  }
  
  console.log(`カテゴリなしアイテム: ${items?.length}件\n`);
  
  let updated = 0;
  for (const item of items || []) {
    // 壁紙コードかチェック
    const isWallpaper = WALLPAPER_PATTERNS.some(p => item.name.startsWith(p));
    
    if (isWallpaper) {
      const { error: updateError } = await supabase
        .from('items')
        .update({ category_id: WALL_CLOTH_CATEGORY_ID })
        .eq('id', item.id);
      
      if (!updateError) {
        updated++;
        if (updated <= 10) console.log(`更新: ${item.name}`);
      }
    }
  }
  
  console.log(`\n${updated}件の壁紙アイテムを更新しました`);
}

main().catch(console.error);
