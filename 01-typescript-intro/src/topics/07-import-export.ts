import { Product, taxCalculate } from './06-function-destructuring'

/* Products Array */
const shopingCart: Product[] = [
    {
        id: 3,
        description: 'Smartphone Samsung Galaxy',
        price: 900.0
    },
    {
        id: 4,
        description: 'iPad',
        price: 1499.5
    }
];

const [total, taxResult,] = taxCalculate({
    tax: 0.15,
    products: shopingCart,
  });

  console.log("Total price:", total);
  console.log("Tax:", taxResult);
