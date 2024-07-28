export interface Product {
  id: number;
  description: string;
  price: number;
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculate(options: TaxCalculationOptions): [number,number] {
export function taxCalculate({tax, products}: TaxCalculationOptions): [number,number] {
  let total = 0;

  products.forEach(( {price} ) => {
    total += price;
  });

  return [total, total * tax];
}

const phone: Product = {
  id: 1,
  description: "Smartphone Xiaomi",
  price: 999.99,
};

const tablet: Product = {
  id: 2,
  description: "Tablet Samsung",
  price: 599.99,
};

const shopingCart = [phone, tablet];
const tax = 0.15;

const [total, taxResult] = taxCalculate({
  tax,
  products: shopingCart,
});

// console.log("Total price:", total);
// console.log("Tax:", taxResult);
