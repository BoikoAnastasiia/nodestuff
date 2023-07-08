function findOdd(A) {
  const obj = {};

  A.forEach((item) => {
    obj[item] ? (obj[item] += 1) : (obj[item] = 1);
  });
  let number;
  for (const iterator in obj) {
    if (obj[iterator] % 2 !== 0) {
      number = iterator;
    }
  }
  return +number;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

const obj = { 1: 2, 2: 2, 3: 2, 4: 2, 5: 3, 20: 2, '-1': 2, '-2': 2 };
