'use strict';

// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let acc = 0;
  if (args.length === 0) {
    return acc;
  }
  do {
    acc += args.pop();
  } while (args.length > 0);
  return acc;
};

module.exports = { sum };
