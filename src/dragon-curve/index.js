export const dragonCurve = n => {
  let size = Math.pow(2, n);
  let arr = [];
  arr.length = --size;
  arr = getDirections(n);
  const result = Number(arr.join(''));

  return result;
};

const getDirections = number => {
  let size = Math.pow(2, number);
  const arr = [];
  arr.length = --size;

  if (number === 1) {
    arr[0] = 1;
    return arr;
  } else {
    let sizeOther = Math.pow(2, number - 1);
    let arrOther = [];
    arrOther.length = --sizeOther;
    arrOther = getDirections(number - 1);

    for (let i = 0; i < sizeOther; i++) {
      arr[i] = arrOther[i];
    }

    arr[sizeOther] = 1;

    for (let i = 0; i < sizeOther; i++) {
      if (arrOther[i] === 1) {
        arrOther[i] = 0;
      } else {
        arrOther[i] = 1;
      }
    }

    let index = 0;

    for (let i = size - 1; i > size / 2; i--) {
      arr[i] = arrOther[index];
      index++;
    }

    return arr;
  }

};

