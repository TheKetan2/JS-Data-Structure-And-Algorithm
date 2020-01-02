const bubbleSort = array => {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

// Time Complexity: O(n^2)
