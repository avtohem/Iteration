'use strict';

// Use for loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return

const sum = (...args) => {
  let acc = 0;
  for (let item = 0; item < args.length; item++) {
    acc += args[item];
  }
  return acc;
};

module.exports = { sum };
