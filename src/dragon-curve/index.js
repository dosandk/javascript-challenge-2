/* eslint-disable-next-line */
export const dragonCurve = n => {

  const stepOfDragon = path => {
    return parseInt('1'.concat(
      path
        .toString()
        .split('')
        .map( (el, idx) => el.concat((idx % 2).toString()) )
        .join('')
    ));
  };

  let idx = 1;
  let path = 1;

  while ( idx < n) {
    path = stepOfDragon(path);
    idx++;
  }

  return path;
};
