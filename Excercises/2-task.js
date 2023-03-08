const items = [
  {price: 40},
  {price: 120},
  // {price: '505'},
  {price: 350},
];
const isNonNegative = (price) => {
  if (typeof price !== 'number') throw 'Price is not a number';
  return price >= 0;
};
const calculateTotalPurchase = (items) => items.map((x) => x.price)
  .filter(isNonNegative)
  .reduce((accumulator, x) => accumulator + x);

console.log(`Total sum is ${calculateTotalPurchase(items)}`);
