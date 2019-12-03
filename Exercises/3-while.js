'use strict';

// Use while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let acc = 0;
  while (args.length > 0) {
    acc += args.pop();
  }
  return acc;
};

module.exports = { sum };
