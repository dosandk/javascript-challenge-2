function dragonCurve (n){
  if (n === 1) return 1;
  const part = String(dragonCurve(n - 1));
  return Number(part + 1 + part.split('').reverse().map(i => +!+i).join(''));
}

module.exports = dragonCurve;
