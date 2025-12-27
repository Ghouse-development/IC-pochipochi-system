import { readFileSync, writeFileSync } from 'fs';

// 外壁製品にmaterialTypeを追加
function processExteriorProducts() {
  let content = readFileSync('src/data/exteriorProducts.ts', 'utf-8');
  const nl = content.includes('\r\n') ? '\r\n' : '\n';

  // ニチハ製品に窯業系サイディングを追加
  content = content.replace(
    new RegExp(`manufacturer: 'ニチハ',${nl}(\\s+)modelNumber:`, 'g'),
    `manufacturer: 'ニチハ',${nl}$1materialType: '窯業系サイディング',${nl}$1modelNumber:`
  );

  // KMEW製品に窯業系サイディングを追加
  content = content.replace(
    new RegExp(`manufacturer: 'KMEW',${nl}(\\s+)modelNumber:`, 'g'),
    `manufacturer: 'KMEW',${nl}$1materialType: '窯業系サイディング',${nl}$1modelNumber:`
  );

  // KONOSHIMA製品に窯業系サイディングを追加
  content = content.replace(
    new RegExp(`manufacturer: 'KONOSHIMA',${nl}(\\s+)modelNumber:`, 'g'),
    `manufacturer: 'KONOSHIMA',${nl}$1materialType: '窯業系サイディング',${nl}$1modelNumber:`
  );

  // IG工業製品に金属サイディングを追加
  content = content.replace(
    new RegExp(`manufacturer: 'IG工業',${nl}(\\s+)modelNumber:`, 'g'),
    `manufacturer: 'IG工業',${nl}$1materialType: '金属サイディング',${nl}$1modelNumber:`
  );

  // AICA製品に塗り壁を追加
  content = content.replace(
    new RegExp(`manufacturer: 'AICA',${nl}(\\s+)modelNumber:`, 'g'),
    `manufacturer: 'AICA',${nl}$1materialType: '塗り壁',${nl}$1modelNumber:`
  );

  writeFileSync('src/data/exteriorProducts.ts', content, 'utf-8');
  console.log('外壁製品データにmaterialTypeを追加しました');
}

// 床材製品にmaterialTypeを追加
function processInteriorProducts() {
  let content = readFileSync('src/data/interiorProducts.ts', 'utf-8');
  const nl = content.includes('\r\n') ? '\r\n' : '\n';

  // ベリティスフロアーベースコート → シート
  content = content.replace(
    new RegExp(`name: 'ベリティスフロアーベースコート',${nl}(\\s+)manufacturer:`, 'g'),
    `name: 'ベリティスフロアーベースコート',${nl}$1materialType: 'シート',${nl}$1manufacturer:`
  );

  // ライブナチュラル → 突板
  content = content.replace(
    new RegExp(`name: 'ライブナチュラルMRX 2P',${nl}(\\s+)manufacturer:`, 'g'),
    `name: 'ライブナチュラルMRX 2P',${nl}$1materialType: '突板',${nl}$1manufacturer:`
  );
  content = content.replace(
    new RegExp(`name: 'ライブナチュラルMSX/MSX-L',${nl}(\\s+)manufacturer:`, 'g'),
    `name: 'ライブナチュラルMSX/MSX-L',${nl}$1materialType: '突板',${nl}$1manufacturer:`
  );
  content = content.replace(
    new RegExp(`name: 'ライブナチュラルプレミアム 3P',${nl}(\\s+)manufacturer:`, 'g'),
    `name: 'ライブナチュラルプレミアム 3P',${nl}$1materialType: '突板',${nl}$1manufacturer:`
  );
  content = content.replace(
    new RegExp(`name: 'ライブナチュラルプラス',${nl}(\\s+)manufacturer:`, 'g'),
    `name: 'ライブナチュラルプラス',${nl}$1materialType: '突板',${nl}$1manufacturer:`
  );

  // 無垢床
  content = content.replace(
    new RegExp(`subcategory: '無垢床',${nl}(\\s+)name:`, 'g'),
    `subcategory: '無垢床',${nl}$1materialType: '無垢',${nl}$1name:`
  );

  // フロアタイル
  content = content.replace(
    new RegExp(`subcategory: 'フロアタイル',${nl}(\\s+)name:`, 'g'),
    `subcategory: 'フロアタイル',${nl}$1materialType: 'フロアタイル',${nl}$1name:`
  );

  // CFシート
  content = content.replace(
    new RegExp(`subcategory: 'CFシート',${nl}(\\s+)name:`, 'g'),
    `subcategory: 'CFシート',${nl}$1materialType: 'CFシート',${nl}$1name:`
  );

  // カーペットタイル
  content = content.replace(
    new RegExp(`subcategory: 'カーペットタイル',${nl}(\\s+)name:`, 'g'),
    `subcategory: 'カーペットタイル',${nl}$1materialType: 'カーペットタイル',${nl}$1name:`
  );

  // タイル（床材）
  content = content.replace(
    new RegExp(`categoryName: '床材',${nl}(\\s+)subcategory: 'タイル',${nl}(\\s+)name:`, 'g'),
    `categoryName: '床材',${nl}$1subcategory: 'タイル',${nl}$1materialType: 'タイル',${nl}$2name:`
  );

  writeFileSync('src/data/interiorProducts.ts', content, 'utf-8');
  console.log('床材製品データにmaterialTypeを追加しました');
}

processExteriorProducts();
processInteriorProducts();
