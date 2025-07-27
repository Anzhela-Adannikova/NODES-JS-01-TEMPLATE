import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getUniqueCategories = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(data);

  const uniqeCategoryList = [];
  for (const product of products) {
    if (!uniqeCategoryList.includes(product.category)) {
      uniqeCategoryList.push(product.category);
    }
  }
  return uniqeCategoryList;
};
console.log(await getUniqueCategories());
