const isSuperSet = (setA, setB) => {
  for (let elem of setB) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
};

let setA = new Set([1, 2, 3, 4, 5, 6]);
let setB = new Set([1, 2, 3, 4]);
let setC = new Set([5, 7]);

isSuperSet(setA, setB);
isSuperSet(setA, setC);
