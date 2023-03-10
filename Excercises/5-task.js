'use strict';

const purchase = {
  Electronics: [
    {name: 'Laptop', price: 1500},
    {name: 'Laptop', price: 2500},
    {name: 'Keyboard', price: 100},
  ],
  Textile: [
    {name: 'Bag', price: 50}
  ],
  Mobile: [
    {name: 'Iphone', price: 900},
  ]
};

const find = (data, itemName) => Object.values(data)
  .reduce((acc, val) => acc.concat(val), [])
  .filter((x) => x.name === itemName);

console.log(find(purchase, 'Laptop'));
console.log(find(purchase, 'HeadSet'));
