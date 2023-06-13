Array.range = function (start, count) {
  let numberArray = [];
  for (let i = start; i < count; i++) {
    console.log(i, count);
    numberArray.push(i);
  }
  return count <= 1 ? [start] : numberArray;
};

Array.prototype.sum = function () {
  return this.reduce((ac, el) => ac + el);
};

// console.log([-2, -1, -5].sum());
console.log(Array.range(-1, 1));
