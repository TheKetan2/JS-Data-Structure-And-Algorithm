const intersectSets = (setA, setB) => {
  var intersection = new Set();
  for (let elem of setA) {
    if (setB.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
};

let setA = new Set([1, 2, 3, 4]);
let setB = new Set([3, 2]);

intersectSets(setA, setB);
