const modularEponentiation = (base, exponent, modulus) => {
  if (modulus === 1) return 0;

  let value = 1;

  for (let i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
};

modularEponentiation(2, 2, 3);

// Time Complexity: O(n)
