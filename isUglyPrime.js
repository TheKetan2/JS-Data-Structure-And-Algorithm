// Let’s define ugly numbers as those whose only prime factors are
// 2, 3, or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the
// first 11 ugly numbers. By convention, 1 is included.

const maxDivide = (number, divisor) => {
  while (number % divisor === 0) {
    number /= divisor;
  }
  return number;
};

const isUgly = number => {
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);

  return number === 1;
};

const arrayNUglyNumbers = n => {
  let counter = 0;
  let currentNum = 1;
  let uglyNums = [];

  while (counter != n) {
    if (isUgly(currentNum)) {
      counter++;
      uglyNums.push(currentNum);
    }
    currentNum++;
  }
  return uglyNums;
};

// Time Complexity : O(n(log2(number)))
