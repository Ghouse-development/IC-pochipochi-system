/**
 * 残りの内装画像一括アップロードスクリプト
 * 再帰的にフォルダ内の画像をアップロード
 */

import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('環境変数を設定してください');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const BUCKET_NAME = 'product-images';

// 処理するフォルダの設定
const FOLDERS_TO_PROCESS = [
  { basePath: 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.05｜床材', storagePath: 'flooring' },
  { basePath: 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.18｜小上がり／小上がり収納／お風呂ドア枠', storagePath: 'koagari' },
  { basePath: 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.18｜階段', storagePath: 'stairs' },
  { basePath: 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.19｜点検口・床下収納・換気システム', storagePath: 'inspection' },
  { basePath: 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.20｜窓台・壁', storagePath: 'windowsill-wall' },
  { basePath: 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.24｜室内窓', storagePath: 'interior-window' },
  { basePath: 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.25｜アクセントパネル', storagePath: 'accent-panel' },
  { basePath: 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.26｜アクセントタイル', storagePath: 'accent-tile' },
  { basePath: 'G:/共有ドライブ/０７｜設計・ⅠC/13.アプリ用の画像/内装/P.39｜内部部分', storagePath: 'interior-parts' },
];

// 許可する画像拡張子
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

// 日本語ファイル名を英語に変換
function sanitizeFileName(fileName: string): string {
  // 日本語の文字をローマ字に変換するマッピング
  const replacements: Record<string, string> = {
    // 一般的な日本語ファイル名のパターン
    'イメージ': 'image',
    '参考画像': 'reference',
    'ホワイト': 'white',
    'ブラック': 'black',
    'グレー': 'gray',
    'グレイ': 'gray',
    'シルバー': 'silver',
    'ゴールド': 'gold',
    'ブロンズ': 'bronze',
    'ナチュラル': 'natural',
    'オーク': 'oak',
    'ウォールナット': 'walnut',
    'チェリー': 'cherry',
    'メープル': 'maple',
    'アッシュ': 'ash',
    'バーチ': 'birch',
    'チーク': 'teak',
    'パイン': 'pine',
    '床材': 'floor',
    '階段': 'stairs',
    '手摺': 'handrail',
    '踏板': 'tread',
    '蹴込み': 'riser',
    '笠木': 'cap',
    '換気': 'ventilation',
    '点検口': 'inspection-panel',
    '床下': 'under-floor',
    '天井': 'ceiling',
    '収納': 'storage',
    'タイル': 'tile',
    'カーペット': 'carpet',
    'フローリング': 'flooring',
    '畳': 'tatami',
    '框': 'kamachi',
    'お風呂': 'bath',
    'ドア枠': 'door-frame',
    '窓台': 'windowsill',
    '壁': 'wall',
    'アクセント': 'accent',
    'パネル': 'panel',
  };

  let result = fileName;
  for (const [jp, en] of Object.entries(replacements)) {
    result = result.replace(new RegExp(jp, 'g'), en);
  }

  // 残りの日本語文字をハッシュで置換
  result = result.replace(/[^\x00-\x7F]+/g, (match) => {
    let hash = 0;
    for (let i = 0; i < match.length; i++) {
      const char = match.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
  });

  // スペースをハイフンに、特殊文字を削除
  result = result.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9\-_.]/g, '');

  return result || 'unnamed';
}

// フォルダパスをストレージパスに変換
function getStoragePath(basePath: string, filePath: string, storagePath: string): string {
  const relativePath = path.relative(basePath, filePath);
  const dir = path.dirname(relativePath);
  const ext = path.extname(relativePath);
  const baseName = path.basename(relativePath, ext);

  const sanitizedDir = dir.split(path.sep).map(sanitizeFileName).join('/');
  const sanitizedName = sanitizeFileName(baseName);

  if (sanitizedDir && sanitizedDir !== '.') {
    return `${storagePath}/${sanitizedDir}/${sanitizedName}${ext.toLowerCase()}`;
  }
  return `${storagePath}/${sanitizedName}${ext.toLowerCase()}`;
}

// 再帰的にファイルを取得
function getAllFiles(dir: string, fileList: string[] = []): string[] {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        getAllFiles(filePath, fileList);
      } else {
        const ext = path.extname(file).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          fileList.push(filePath);
        }
      }
    }
  } catch (error) {
    console.error(`ディレクトリ読み取りエラー (${dir}):`, error);
  }
  return fileList;
}

async function uploadFile(localPath: string, storagePath: string): Promise<string | null> {
  try {
    const fileBuffer = fs.readFileSync(localPath);
    const ext = path.extname(localPath).toLowerCase();
    let mimeType = 'image/jpeg';
    if (ext === '.png') mimeType = 'image/png';
    if (ext === '.webp') mimeType = 'image/webp';
    if (ext === '.gif') mimeType = 'image/gif';

    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(storagePath, fileBuffer, {
        contentType: mimeType,
        upsert: true
      });

    if (error) {
      console.error(`アップロードエラー (${storagePath}):`, error.message);
      return null;
    }

    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(storagePath);

    return publicUrl;
  } catch (error) {
    console.error(`ファイル処理エラー (${localPath}):`, error);
    return null;
  }
}

async function main(): Promise<void> {
  console.log('=== 残りの内装画像一括アップロード開始 ===\n');

  let totalUploaded = 0;
  let totalSkipped = 0;

  for (const folder of FOLDERS_TO_PROCESS) {
    console.log(`\n=== ${folder.basePath.split('/').pop()} ===`);

    if (!fs.existsSync(folder.basePath)) {
      console.log(`  ✗ フォルダが見つかりません`);
      continue;
    }

    const files = getAllFiles(folder.basePath);
    console.log(`  ${files.length}件のファイルを検出`);

    let folderUploaded = 0;
    for (const file of files) {
      const storagePath = getStoragePath(folder.basePath, file, folder.storagePath);
      const url = await uploadFile(file, storagePath);

      if (url) {
        folderUploaded++;
        totalUploaded++;
        // 10件ごとに進捗を表示
        if (folderUploaded % 10 === 0) {
          console.log(`    ${folderUploaded}/${files.length} 完了`);
        }
      } else {
        totalSkipped++;
      }
    }

    console.log(`  ✓ ${folderUploaded}件アップロード完了`);
  }

  console.log('\n=== 一括アップロード完了 ===');
  console.log(`合計アップロード: ${totalUploaded}件`);
  console.log(`スキップ: ${totalSkipped}件`);
}

main().catch(console.error);
