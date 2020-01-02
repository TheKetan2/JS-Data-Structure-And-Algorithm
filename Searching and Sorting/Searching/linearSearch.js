const linearSearch = (arr, num) => {
  for (let a of arr) {
    if (a === num) return true;
  }
  return false;
};

// Time Complexity: O(n)
