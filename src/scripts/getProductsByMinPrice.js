import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getProductsByMinPrice = async (minPrice) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(data);

  return products.filter((product) => product.price >= minPrice);
};

console.log(await getProductsByMinPrice(700));
