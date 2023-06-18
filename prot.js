Array.range = function (start, count) {
  let numberArray = [];
  for (let i = start; i < count + start; i++) {
    numberArray.push(i);
  }
  return numberArray;
};

Array.prototype.sum = function () {
  return this.length > 0 ? this.reduce((ac, el) => ac + el) : 0;
};

console.log([-2, -1, -5].sum());
