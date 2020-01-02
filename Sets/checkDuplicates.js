const checkDuplicates = arr => {
  let mySet = new Set(arr);
  return mySet.size < arr.length;
};

checkDuplicates([1, 2, 3, 4, 5]);
checkDuplicates([1, 1, 3, 4, 5]);
