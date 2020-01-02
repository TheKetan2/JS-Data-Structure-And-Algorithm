const unionSet = (setA, setB) => {
  var union = new Set(setB);
  for (let elem of setA) {
    union.add(elem);
  }
  return union;
};
