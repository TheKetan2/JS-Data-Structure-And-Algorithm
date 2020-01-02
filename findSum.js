const findSum = (arr, weight) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let diff = weight - arr[i];
    if (arr.indexOf(diff) > i) {
      return [i, arr.indexOf(diff)];
    }
  }
  return -1;
};
