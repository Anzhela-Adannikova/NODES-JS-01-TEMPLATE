import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const groupProductsByCategories = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(data);

  const groupProduct = {};
  for (const product of products) {
    if (!groupProduct[product.category]) {
      groupProduct[product.category] = [];
    }
    groupProduct[product.category].push(product.name);
  }
  return groupProduct;
};

console.log(await groupProductsByCategories());
