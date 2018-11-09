import {rotateMatrix} from './index'

expect.extend({
  compareTwoArrays (received, array) {
    let pass = true;
    const len = array.length;
    for(let row = 0; row < len; row++){
      for(let col = 0; col < len; col++){
        if (received[row][col] !== array[row][col]){
          pass = false;
        }
      }         
    }  
    if (pass) {
      return {
        message: () =>
          'Test OK',
        pass: true,
      };
    } else {
      return {
        message: () =>
        'Test Fail',
        pass: false,
      };
    }
  },
});

const arr1 = [
  [1, 2],
  [3, 4]
];

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const res1 = [
  [1, 3],
  [2, 4]
];

const res2 = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];

describe('rotateMatrix::', () => {

  it('That function returns rotated array', () => {
    expect(rotateMatrix(arr1)).compareTwoArrays(res1);    
  });

  it('That function returns rotated array', () => {
    expect(rotateMatrix(arr2)).compareTwoArrays(res2);    
  });
});
