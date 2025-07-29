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

// 1. Створіть файл src/scripts/getUniqueCategories.js.
// 2. В ньому опишіть функцію getUniqueCategories.
// Вона має повертати масив унікальних категорій,
// які мають продукти в масиві у файлі src/db/db.json.
// Додайте в цьому файлі логування результату
// виклику функції getUniqueCategories.
// 3. Додайте до файлу package.json скрипт get-unique-categories
// для виконання коду з файлу src/scripts/getUniqueCategories.js.
// 4. Виконавши скрипт get-unique-categories, переконайтесь,
// що ваша функція getUniqueCategories коректно повертає унікальні категорії,
// які мають продукти в масиві у файлі src/db/db.json.
