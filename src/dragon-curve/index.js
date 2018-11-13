export const dragonCurve = n => {
  // logic...
  const arr = [1];
  for (let i = 1; i < n; i++) {
   const arrPart = arr.map(value => +!value).reverse();
   arr.push(1, ...arrPart);
 }
 return Number(arr.join(''));
};
