export const dragonCurve = n => {
  function flipRetrograde (val) {
    const arrRez = [];
    const arr = val.toString().split('');
    arr.map(x => (parseInt(x, 2) === 0) ? arrRez.push(1) : arrRez.push(0));
    return arrRez.reverse().join('');
  }
  const array = [1];
  for (let i = 1; i <= n - 1; i++) {
    array.push(array[i - 1] + '1' + flipRetrograde(array[i - 1]));
    array[i - 1] = '';
  }
  return parseInt(array.join(''), 10);
};
