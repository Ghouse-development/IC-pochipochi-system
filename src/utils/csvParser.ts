export interface HierarchicalProduct {
  category1: string;
  category2: string;
  category3: string;
  product: string;
  color: string;
  manufacturer: string;
  modelNumber: string;
  unit: string;
  priceLIFE: number;
  priceLIFEPlus: number;
  priceHOURS: number;
  priceLACIE: number;
  estimateCategory1: string;
  estimateCategory2: string;
}

export interface CategoryNode {
  name: string;
  type: 'category1' | 'category2' | 'category3' | 'product' | 'color';
  children?: CategoryNode[];
  data?: HierarchicalProduct;
}

export function parseCSV(csvText: string): HierarchicalProduct[] {
  const lines = csvText.split('\n');
  lines[0].split(','); // headers - not used currently
  const products: HierarchicalProduct[] = [];

  let currentCategory1 = '';
  let currentCategory2 = '';
  let currentCategory3 = '';
  let currentProduct = '';

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const columns = line.split(',');

    // Category 1が設定されていれば更新
    if (columns[0] && columns[0].trim()) {
      currentCategory1 = columns[0].trim();
    }

    // Category 2が設定されていれば更新
    if (columns[1] && columns[1].trim()) {
      currentCategory2 = columns[1].trim();
    }

    // Category 3が設定されていれば更新
    if (columns[2] && columns[2].trim()) {
      currentCategory3 = columns[2].trim();
    }

    // Productが設定されていれば更新
    if (columns[3] && columns[3].trim()) {
      currentProduct = columns[3].trim();
    }

    // Colorが設定されていれば製品として登録
    if (columns[6] && columns[6].trim()) {
      products.push({
        category1: currentCategory1,
        category2: currentCategory2,
        category3: currentCategory3,
        product: currentProduct,
        color: columns[6].trim(),
        manufacturer: columns[14]?.trim() || '',
        modelNumber: columns[15]?.trim() || '',
        unit: columns[13]?.trim() || '',
        priceLIFE: parseFloat(columns[18]) || 0,
        priceLIFEPlus: parseFloat(columns[19]) || 0,
        priceHOURS: parseFloat(columns[20]) || 0,
        priceLACIE: parseFloat(columns[21]) || 0,
        estimateCategory1: columns[26]?.trim() || '',
        estimateCategory2: columns[27]?.trim() || ''
      });
    }
  }

  return products;
}

export function buildHierarchy(products: HierarchicalProduct[]): CategoryNode[] {
  const root: CategoryNode[] = [];
  const categoryMap = new Map<string, CategoryNode>();

  for (const product of products) {
    // Category 1
    const cat1Key = product.category1;
    if (!categoryMap.has(cat1Key)) {
      const cat1Node: CategoryNode = {
        name: product.category1,
        type: 'category1',
        children: []
      };
      categoryMap.set(cat1Key, cat1Node);
      root.push(cat1Node);
    }
    const cat1Node = categoryMap.get(cat1Key);
    if (!cat1Node) continue;

    // Category 2
    const cat2Key = `${cat1Key}|${product.category2}`;
    if (!categoryMap.has(cat2Key)) {
      const cat2Node: CategoryNode = {
        name: product.category2,
        type: 'category2',
        children: []
      };
      categoryMap.set(cat2Key, cat2Node);
      if (cat1Node.children) cat1Node.children.push(cat2Node);
    }
    const cat2Node = categoryMap.get(cat2Key);
    if (!cat2Node) continue;

    // Category 3
    const cat3Key = `${cat2Key}|${product.category3}`;
    if (!categoryMap.has(cat3Key)) {
      const cat3Node: CategoryNode = {
        name: product.category3,
        type: 'category3',
        children: []
      };
      categoryMap.set(cat3Key, cat3Node);
      if (cat2Node.children) cat2Node.children.push(cat3Node);
    }
    const cat3Node = categoryMap.get(cat3Key);
    if (!cat3Node) continue;

    // Product
    const productKey = `${cat3Key}|${product.product}`;
    if (!categoryMap.has(productKey)) {
      const productNode: CategoryNode = {
        name: product.product,
        type: 'product',
        children: []
      };
      categoryMap.set(productKey, productNode);
      if (cat3Node.children) cat3Node.children.push(productNode);
    }
    const productNode = categoryMap.get(productKey);
    if (!productNode) continue;

    // Color (variant)
    const colorNode: CategoryNode = {
      name: product.color,
      type: 'color',
      data: product
    };
    if (productNode.children) productNode.children.push(colorNode);
  }

  return root;
}