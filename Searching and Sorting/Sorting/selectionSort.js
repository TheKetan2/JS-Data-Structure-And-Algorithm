const selectionSort = array => {
  let len = array.length,
    min;
  for (let i = 0; i < len; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i != min) {
      let temp = array[min];
      array[min] = array[i];
      array[i] = temp;
    }
  }
};
