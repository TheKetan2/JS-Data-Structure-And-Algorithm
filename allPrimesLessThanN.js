const allPrimesLessThanN = n => {
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

const isPrime = num => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

allPrimesLessThanN(12);

// Time Complexity : Object(n * sqrt(n))
