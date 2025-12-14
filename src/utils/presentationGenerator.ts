/**
 * プレゼンテーション自動生成
 * - 外装プレゼン資料
 * - 内装プレゼン資料
 * - PDF出力
 */
import type { CartItem, Product } from '../types/product';

interface PresentationConfig {
  projectName: string;
  customerName: string;
  companyName?: string;
  companyLogo?: string;
  planType: string;
  createdDate: Date;
}

interface SlideData {
  type: 'cover' | 'category' | 'product' | 'summary' | 'comparison';
  title: string;
  subtitle?: string;
  content: Record<string, unknown>;
}

/**
 * 外装プレゼンテーション生成
 */
export const generateExteriorPresentation = (
  items: CartItem[],
  config: PresentationConfig
): SlideData[] => {
  const slides: SlideData[] = [];

  // 表紙
  slides.push({
    type: 'cover',
    title: '外装仕様プレゼンテーション',
    subtitle: `${config.customerName}様邸`,
    content: {
      projectName: config.projectName,
      planType: config.planType,
      date: config.createdDate.toLocaleDateString('ja-JP'),
      company: config.companyName,
    },
  });

  // カテゴリ別にグループ化
  const exteriorCategories = [
    { key: '外壁', label: '外壁材', description: '建物の外観を決める重要な要素です' },
    { key: '屋根', label: '屋根材', description: '耐久性と美観を両立した屋根材' },
    { key: '玄関ドア', label: '玄関ドア', description: 'お家の顔となる玄関' },
    { key: 'ポーチタイル', label: 'ポーチタイル', description: '玄関まわりの床タイル' },
    { key: 'サッシ', label: 'サッシ・窓', description: '採光と断熱を両立' },
    { key: '軒天', label: '軒天', description: '軒下の天井部分' },
    { key: '雨樋', label: '雨樋', description: '雨水を適切に排水' },
    { key: '換気', label: '換気設備', description: '室内の空気環境を整える' },
  ];

  exteriorCategories.forEach((category) => {
    const categoryItems = items.filter(
      (item) => item.product.categoryName.includes(category.key)
    );

    if (categoryItems.length > 0) {
      // カテゴリ紹介スライド
      slides.push({
        type: 'category',
        title: category.label,
        subtitle: category.description,
        content: {
          itemCount: categoryItems.length,
          totalPrice: categoryItems.reduce((sum, item) => {
            const price = item.product.pricing.find(
              (p) => p.plan === 'LACIE' || p.planId === 'LACIE'
            )?.price || 0;
            return sum + price * item.quantity;
          }, 0),
        },
      });

      // 各商品のスライド
      categoryItems.forEach((item) => {
        const price = item.product.pricing.find(
          (p) => p.plan === 'LACIE' || p.planId === 'LACIE'
        )?.price || 0;

        slides.push({
          type: 'product',
          title: item.product.name,
          subtitle: item.product.manufacturer,
          content: {
            category: category.label,
            modelNumber: item.product.modelNumber,
            color: item.selectedVariant?.color || '標準色',
            colorCode: item.selectedVariant?.colorCode,
            price,
            isOption: item.product.isOption,
            quantity: item.quantity,
            unit: item.product.unit,
            description: item.product.description,
            features: extractFeatures(item.product),
            imageUrl: item.selectedVariant?.imageUrl,
          },
        });
      });
    }
  });

  // サマリースライド
  const totalItems = items.length;
  const totalPrice = items.reduce((sum, item) => {
    const price = item.product.pricing.find(
      (p) => p.plan === 'LACIE' || p.planId === 'LACIE'
    )?.price || 0;
    return sum + price * item.quantity;
  }, 0);
  const optionPrice = items
    .filter((item) => item.product.isOption)
    .reduce((sum, item) => {
      const price = item.product.pricing.find(
        (p) => p.plan === 'LACIE' || p.planId === 'LACIE'
      )?.price || 0;
      return sum + price * item.quantity;
    }, 0);

  slides.push({
    type: 'summary',
    title: '外装仕様まとめ',
    content: {
      totalItems,
      totalPrice,
      standardPrice: totalPrice - optionPrice,
      optionPrice,
      categories: exteriorCategories
        .map((cat) => ({
          name: cat.label,
          count: items.filter((i) => i.product.categoryName.includes(cat.key)).length,
        }))
        .filter((c) => c.count > 0),
    },
  });

  return slides;
};

/**
 * 内装プレゼンテーション生成
 */
export const generateInteriorPresentation = (
  items: CartItem[],
  config: PresentationConfig
): SlideData[] => {
  const slides: SlideData[] = [];

  // 表紙
  slides.push({
    type: 'cover',
    title: '内装仕様プレゼンテーション',
    subtitle: `${config.customerName}様邸`,
    content: {
      projectName: config.projectName,
      planType: config.planType,
      date: config.createdDate.toLocaleDateString('ja-JP'),
      company: config.companyName,
    },
  });

  // 部材カテゴリ
  const materialCategories = [
    { key: '床材', label: 'フローリング・床材', description: '足触りと見た目の美しさ' },
    { key: '壁クロス', label: '壁紙・クロス', description: '空間の雰囲気を決める' },
    { key: '天井', label: '天井', description: '開放感と清潔感' },
    { key: '建具', label: '室内ドア・建具', description: '使いやすさとデザイン' },
    { key: '巾木', label: '巾木・廻縁', description: '床と壁の接点を美しく' },
    { key: '窓台', label: '窓台・窓枠', description: '窓まわりのアクセント' },
    { key: 'カーテン', label: 'カーテン・ブラインド', description: '光と視線をコントロール' },
  ];

  materialCategories.forEach((category) => {
    const categoryItems = items.filter(
      (item) =>
        item.product.categoryName.includes(category.key) ||
        item.product.name.includes(category.key)
    );

    if (categoryItems.length > 0) {
      slides.push({
        type: 'category',
        title: category.label,
        subtitle: category.description,
        content: {
          itemCount: categoryItems.length,
          totalPrice: categoryItems.reduce((sum, item) => {
            const price = item.product.pricing.find(
              (p) => p.plan === 'LACIE' || p.planId === 'LACIE'
            )?.price || 0;
            return sum + price * item.quantity;
          }, 0),
        },
      });

      categoryItems.forEach((item) => {
        const price = item.product.pricing.find(
          (p) => p.plan === 'LACIE' || p.planId === 'LACIE'
        )?.price || 0;

        slides.push({
          type: 'product',
          title: item.product.name,
          subtitle: item.product.manufacturer,
          content: {
            category: category.label,
            modelNumber: item.product.modelNumber,
            color: item.selectedVariant?.color || '標準色',
            colorCode: item.selectedVariant?.colorCode,
            price,
            isOption: item.product.isOption,
            quantity: item.quantity,
            unit: item.product.unit,
            description: item.product.description,
            features: extractFeatures(item.product),
            imageUrl: item.selectedVariant?.imageUrl,
          },
        });
      });
    }
  });

  // カラーコーディネートスライド
  const colorPalette = extractColorPalette(items);
  if (colorPalette.length > 0) {
    slides.push({
      type: 'comparison',
      title: 'カラーコーディネート',
      subtitle: '選択した色の組み合わせ',
      content: {
        colors: colorPalette,
        harmony: analyzeColorHarmony(colorPalette),
      },
    });
  }

  // サマリー
  const totalPrice = items.reduce((sum, item) => {
    const price = item.product.pricing.find(
      (p) => p.plan === 'LACIE' || p.planId === 'LACIE'
    )?.price || 0;
    return sum + price * item.quantity;
  }, 0);

  slides.push({
    type: 'summary',
    title: '内装仕様まとめ',
    content: {
      totalItems: items.length,
      totalPrice,
      categories: materialCategories
        .map((cat) => ({
          name: cat.label,
          count: items.filter(
            (i) =>
              i.product.categoryName.includes(cat.key) ||
              i.product.name.includes(cat.key)
          ).length,
        }))
        .filter((c) => c.count > 0),
    },
  });

  return slides;
};

/**
 * 商品の特徴を抽出
 */
const extractFeatures = (product: Product): string[] => {
  const features: string[] = [];
  const description = product.description || '';

  // 一般的な特徴キーワードを検出
  const featurePatterns = [
    { pattern: /断熱/g, feature: '高断熱性能' },
    { pattern: /防水|撥水/g, feature: '防水・撥水性能' },
    { pattern: /防音|遮音/g, feature: '防音・遮音性能' },
    { pattern: /耐久|長寿命/g, feature: '高耐久性' },
    { pattern: /メンテナンス.*フリー|メンテフリー/g, feature: 'メンテナンスフリー' },
    { pattern: /抗菌|防カビ/g, feature: '抗菌・防カビ' },
    { pattern: /省エネ|エコ/g, feature: '省エネ・エコ' },
    { pattern: /ワックス.*不要|ノンワックス/g, feature: 'ワックスがけ不要' },
    { pattern: /傷.*つき.*にくい|耐傷/g, feature: 'キズがつきにくい' },
  ];

  featurePatterns.forEach(({ pattern, feature }) => {
    if (pattern.test(description) || pattern.test(product.name)) {
      features.push(feature);
    }
  });

  return features.slice(0, 4); // 最大4つ
};

/**
 * カラーパレットを抽出
 */
const extractColorPalette = (
  items: CartItem[]
): { category: string; color: string; colorCode?: string }[] => {
  return items
    .filter((item) => item.selectedVariant?.color)
    .map((item) => ({
      category: item.product.categoryName,
      color: item.selectedVariant!.color,
      colorCode: item.selectedVariant?.colorCode,
    }));
};

/**
 * カラーハーモニーを分析
 */
const analyzeColorHarmony = (
  palette: { category: string; color: string }[]
): string => {
  const colors = palette.map((p) => p.color.toLowerCase());

  // トーン分析
  const warmTones = colors.filter(
    (c) =>
      c.includes('ブラウン') ||
      c.includes('ベージュ') ||
      c.includes('オーク') ||
      c.includes('ナチュラル') ||
      c.includes('チェリー')
  );
  const coolTones = colors.filter(
    (c) =>
      c.includes('ホワイト') ||
      c.includes('グレー') ||
      c.includes('ブラック') ||
      c.includes('シルバー')
  );

  if (warmTones.length > coolTones.length * 2) {
    return 'ナチュラル・ウォームな空間になります。木の温もりを感じる落ち着いた雰囲気です。';
  } else if (coolTones.length > warmTones.length * 2) {
    return 'モダン・クールな空間になります。スタイリッシュで清潔感のある印象です。';
  } else {
    return 'バランスの取れた配色です。温かみとモダンさを両立した空間になります。';
  }
};

/**
 * HTML形式のプレゼンテーションを生成
 */
export const generatePresentationHTML = (
  slides: SlideData[],
  type: 'exterior' | 'interior'
): string => {
  const themeColor = type === 'exterior' ? '#14b8a6' : '#6366f1';
  const themeName = type === 'exterior' ? '外装' : '内装';

  const slideHTML = slides
    .map((slide, index) => {
      switch (slide.type) {
        case 'cover':
          return `
            <div class="slide cover" style="background: linear-gradient(135deg, ${themeColor}, ${themeColor}dd);">
              <div class="slide-number">${index + 1} / ${slides.length}</div>
              <div class="content">
                <h1>${slide.title}</h1>
                <h2>${slide.subtitle || ''}</h2>
                <div class="meta">
                  <p>プロジェクト: ${slide.content.projectName}</p>
                  <p>プランタイプ: ${slide.content.planType}</p>
                  <p>作成日: ${slide.content.date}</p>
                </div>
                ${slide.content.company ? `<p class="company">${slide.content.company}</p>` : ''}
              </div>
            </div>
          `;

        case 'category':
          return `
            <div class="slide category">
              <div class="slide-number">${index + 1} / ${slides.length}</div>
              <div class="header" style="background: ${themeColor};">
                <h2>${slide.title}</h2>
                <p>${slide.subtitle || ''}</p>
              </div>
              <div class="content">
                <div class="stats">
                  <div class="stat">
                    <span class="label">選択数</span>
                    <span class="value">${slide.content.itemCount}点</span>
                  </div>
                  <div class="stat">
                    <span class="label">小計</span>
                    <span class="value">¥${(slide.content.totalPrice as number).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          `;

        case 'product':
          return `
            <div class="slide product">
              <div class="slide-number">${index + 1} / ${slides.length}</div>
              <div class="content">
                <div class="product-header">
                  <span class="category-badge" style="background: ${themeColor};">${slide.content.category}</span>
                  ${slide.content.isOption ? '<span class="option-badge">オプション</span>' : '<span class="standard-badge">標準仕様</span>'}
                </div>
                <h2>${slide.title}</h2>
                <p class="manufacturer">${slide.subtitle}</p>
                <div class="product-details">
                  <div class="detail-row">
                    <span class="label">品番</span>
                    <span class="value">${slide.content.modelNumber || '-'}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">カラー</span>
                    <span class="value">${slide.content.color}</span>
                  </div>
                  <div class="detail-row">
                    <span class="label">数量</span>
                    <span class="value">${slide.content.quantity} ${slide.content.unit}</span>
                  </div>
                  <div class="detail-row price">
                    <span class="label">金額</span>
                    <span class="value">${(slide.content.price as number) === 0 ? '標準仕様' : `¥${(slide.content.price as number).toLocaleString()}`}</span>
                  </div>
                </div>
                ${(slide.content.features as string[]).length > 0 ? `
                  <div class="features">
                    <h4>特徴</h4>
                    <ul>
                      ${(slide.content.features as string[]).map((f) => `<li>${f}</li>`).join('')}
                    </ul>
                  </div>
                ` : ''}
              </div>
            </div>
          `;

        case 'summary':
          return `
            <div class="slide summary" style="background: linear-gradient(135deg, ${themeColor}22, ${themeColor}11);">
              <div class="slide-number">${index + 1} / ${slides.length}</div>
              <div class="content">
                <h2>${slide.title}</h2>
                <div class="summary-grid">
                  <div class="summary-item total">
                    <span class="label">合計金額</span>
                    <span class="value">¥${(slide.content.totalPrice as number).toLocaleString()}</span>
                  </div>
                  <div class="summary-item">
                    <span class="label">選択商品数</span>
                    <span class="value">${slide.content.totalItems}点</span>
                  </div>
                </div>
                <div class="category-breakdown">
                  <h4>カテゴリ別内訳</h4>
                  <ul>
                    ${(slide.content.categories as { name: string; count: number }[])
                      .map((c) => `<li><span>${c.name}</span><span>${c.count}点</span></li>`)
                      .join('')}
                  </ul>
                </div>
              </div>
            </div>
          `;

        default:
          return '';
      }
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${themeName}仕様プレゼンテーション</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Hiragino Sans', 'Yu Gothic', sans-serif; background: #f5f5f5; }
        .slide {
          width: 100%;
          min-height: 100vh;
          padding: 40px;
          background: white;
          position: relative;
          page-break-after: always;
        }
        .slide-number {
          position: absolute;
          bottom: 20px;
          right: 20px;
          color: #999;
          font-size: 14px;
        }
        .cover {
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }
        .cover h1 { font-size: 48px; margin-bottom: 16px; }
        .cover h2 { font-size: 32px; opacity: 0.9; margin-bottom: 40px; }
        .cover .meta { font-size: 18px; opacity: 0.8; }
        .cover .meta p { margin: 8px 0; }
        .cover .company { margin-top: 60px; font-size: 20px; }
        .category .header {
          color: white;
          padding: 30px;
          border-radius: 16px;
          margin-bottom: 30px;
        }
        .category .header h2 { font-size: 36px; }
        .category .header p { font-size: 18px; opacity: 0.9; margin-top: 8px; }
        .stats {
          display: flex;
          gap: 40px;
          justify-content: center;
        }
        .stat {
          text-align: center;
        }
        .stat .label { display: block; color: #666; font-size: 16px; }
        .stat .value { display: block; font-size: 36px; font-weight: bold; color: #333; }
        .product .product-header {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        .category-badge, .option-badge, .standard-badge {
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: bold;
        }
        .category-badge { color: white; }
        .option-badge { background: #fef3c7; color: #d97706; }
        .standard-badge { background: #d1fae5; color: #059669; }
        .product h2 { font-size: 32px; color: #333; margin-bottom: 8px; }
        .product .manufacturer { color: #666; font-size: 18px; margin-bottom: 30px; }
        .product-details {
          background: #f9fafb;
          border-radius: 12px;
          padding: 24px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #e5e7eb;
        }
        .detail-row:last-child { border-bottom: none; }
        .detail-row .label { color: #666; }
        .detail-row .value { font-weight: bold; color: #333; }
        .detail-row.price .value { font-size: 24px; color: ${themeColor}; }
        .features { margin-top: 24px; }
        .features h4 { color: #666; margin-bottom: 12px; }
        .features ul { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; }
        .features li {
          background: #f3f4f6;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
        }
        .summary h2 { font-size: 36px; text-align: center; margin-bottom: 40px; color: #333; }
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 600px;
          margin: 0 auto 40px;
        }
        .summary-item {
          background: white;
          padding: 24px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .summary-item .label { display: block; color: #666; margin-bottom: 8px; }
        .summary-item .value { font-size: 28px; font-weight: bold; color: #333; }
        .summary-item.total .value { color: ${themeColor}; font-size: 36px; }
        .category-breakdown {
          max-width: 500px;
          margin: 0 auto;
          background: white;
          padding: 24px;
          border-radius: 12px;
        }
        .category-breakdown h4 { margin-bottom: 16px; color: #666; }
        .category-breakdown ul { list-style: none; }
        .category-breakdown li {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #f3f4f6;
        }
        @media print {
          .slide { padding: 20mm; }
          .slide-number { position: fixed; }
        }
      </style>
    </head>
    <body>
      ${slideHTML}
    </body>
    </html>
  `;
};

/**
 * プレゼンテーションウィンドウを開く
 */
export const openPresentationWindow = (
  items: CartItem[],
  type: 'exterior' | 'interior',
  config: PresentationConfig
): void => {
  const slides =
    type === 'exterior'
      ? generateExteriorPresentation(items, config)
      : generateInteriorPresentation(items, config);

  const html = generatePresentationHTML(slides, type);
  const printWindow = window.open('', '_blank');

  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
  }
};
