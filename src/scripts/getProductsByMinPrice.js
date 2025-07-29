import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getProductsByMinPrice = async (minPrice) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(data);

  return products.filter((product) => product.price >= minPrice);
};

console.log(await getProductsByMinPrice(700));

// 1. Створіть файл src/scripts/getProductsByMinPrice.js.
// 2. В ньому опишіть функцію getProductsByMinPrice.
// Вона має приймати параметром значення вартості і повертати
// масив продуктів із файлу src/db/db.json, вартість яких дорівнює
// або перевищує значення параметра функції. Додайте в цьому
// файлі логування результату виклику функції getProductsByMinPrice.
// 3. Додайте до файлу package.json скрипт get-products-by-min-price
// для виконання коду з файлу src/scripts/getProductsByMinPrice.js.
// 4. Виконавши скрипт get-products-by-min-price, переконайтесь,
// що ваша функція getProductsByMinPrice працює коректно.
