const binarySearch = (array, n) => {
  let lowIndex = 0,
    highIndex = array.length - 1;
  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (array[midIndex] === n) return midIndex;
    else if (n < array[midIndex]) {
      highIndex = midIndex;
    } else {
      lowIndex = midIndex;
    }
  }
  return -1;
};
