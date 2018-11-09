/* eslint-disable-next-line */
export const dragonCurve = n => {
  const turnRight = 0;
  const turnLeft = 1;
  let dragon = [];

  if (n === 1) {
    dragon.push(turnLeft);
  }

  if (n === 2) {
    dragon.push(turnLeft);

    dragon.push(turnLeft);
    if ( dragon[0] === turnLeft ) {
      dragon.push(turnRight);
    }
  }

  if (n > 2) {
    dragon.push(turnLeft);

    dragon.push(turnLeft);
    if ( dragon[0] === turnLeft ) {
      dragon.push(turnRight);
    }

    for ( let j = 3; j < n + 1; j++ ) {
      const tempDragon = reverseDrag(dragon);
      dragon.push(turnLeft);
      dragon = [...dragon, ...tempDragon];
    }
  }

  return dragon;
};

const reverseDrag = arr => {
  const tempArr = arr.slice(0);

  tempArr.reverse();
  tempArr.forEach((el,i) => {
    tempArr[i] = 1 - tempArr[i];
  });

  return tempArr;
};

