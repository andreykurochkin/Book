'use strict';

const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
  ],
  Textile: [
    { name: 'Bag', price: 50 }
  ],
};

console.log(purchase);
console.log(JSON.stringify(purchase));
console.dir(purchase, {depth: 1});
