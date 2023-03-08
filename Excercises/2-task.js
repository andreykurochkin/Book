const items = [
  {price: 40},
  {price: 120},
  // {price: '505'},
  {price: 350},
];

const calculateTotalPurchase = (items) => {
  let result = 0;
  for(const item of items) {
    const price = item.price;
    if (typeof price !== 'number') throw 'Price is not a number';
    if (price < 0) continue;
    result += price;
  }
  return result;
};
console.log(`Total sum is ${calculateTotalPurchase(items)}`);
