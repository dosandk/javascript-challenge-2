export const rotateMatrix = arr => {
  const rusalt = [];
  const arrLength = arr.length;
  //const arrflat = arr.flat(); так коротше але тести чомусь не проходять. На jsfiddle працює.
  const arrflat = arr.reduce((acc, val) => acc.concat(val), []);
  const arrflatObj = arrflat.map((el,i) => {
    return {
      element: el, 
      weight: i % arrLength
    };
  });
  const arrflatObjSorted = arrflatObj.sort((a, b) => {
    return a.weight - b.weight;
  });
  const resultArrFlat = arrflatObjSorted.map(a => a.element);
  while (resultArrFlat.length > 0) {
    rusalt.push(resultArrFlat.splice(0, arrLength));
  }
  return  rusalt;
};

