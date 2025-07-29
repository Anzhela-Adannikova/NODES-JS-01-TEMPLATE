import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProduct.js';

const generateProducts = async (number) => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(data);

  const newProducts = Array.from({ length: number }, createFakeProduct);
  const updatedList = [...products, ...newProducts];

  await fs.writeFile(PATH_DB, JSON.stringify(updatedList, null, 2), 'utf-8');
  console.log(`Додано ${number} продуктів. Загалом: ${updatedList.length}`);
};
generateProducts(7);

// 1. Створіть файл src/scripts/generateProducts.js.
// 2. В ньому опишіть функцію generateProducts.
// Вона має за допомогою функції createFakeProduct, створювати
// передану кількість згенерованих продуктів, а потім додавати
// їх до масиву у файлі src/db/db.json і записувати їх назад до
// файлу src/db/db.json.
// 3. Додайте до файлу package.json скрипт generate для виконання
// коду з файлу src/scripts/generateProducts.js.
// 4. Виконавши скрипт generate, переконайтесь, що ваша функція
// generateProducts коректно додає нові продукти до вже існуючих.
// Тобто, якщо масив був порожній, після виклику функції в ньому має
// бути передана кількість продуктів, наприклад 7. Якщо продуктів було
// 4 і у виклик передали 7, то після виклику функції їх має стати 11.
// У файлі src/db/db.json мають відбутися відповідні зміни.
