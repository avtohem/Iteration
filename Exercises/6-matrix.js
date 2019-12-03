'use strict';

// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9

const max = matrix => {
  let max;
  for (const firstLvl of matrix) {
    for (const secondLvl of firstLvl) {
      if (typeof max === 'undefined') max = secondLvl;
      if (max < secondLvl) max = secondLvl;
    }
  }
  return max;
};

module.exports = { max };
