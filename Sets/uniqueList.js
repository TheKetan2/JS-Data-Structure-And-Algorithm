const uniqueList = (arr1, arr2) => {
  let mySet = new Set(arr1.concat(arr2));
  return Array.from(mySet);
};
