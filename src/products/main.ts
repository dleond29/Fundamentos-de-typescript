import { addProduct, calcStock, products } from "./product.service";

  addProduct({
    title: 'Prod1',
    createAd: new Date(1994,6,13),
    stock: 100
  });

  console.log(products[0]);

  addProduct({
    title: 'Prod2',
    createAd: new Date(1965,10,24),
    stock: 2,
    size: 'XL'
  });
  console.log(products[1]);

  const total = calcStock();
  console.log(total);
