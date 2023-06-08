function reduceArr(arr) {
  return arr.reduce((acc, val) => {
    if (acc[val]) {
      acc[val] += 1;
    } else {
      acc[val] = 1;
    }
    return acc;
  }, {});
}

const init = 'abcc'.split('');
const toCheck = 'aaabbbccc'.split('');

init_x = reduceArr(init);
toCheck_x = reduceArr(toCheck);

console.log(init_x, toCheck_x);

check(init_x, toCheck_x);

function check(init_x, toCheck_x) {
  let res = null;
  for (const i in init_x) {
    if (Object.hasOwnProperty.call(init_x, i)) {
      let result = Math.trunc(toCheck_x[i] / init_x[i]);
      if (res === null || res > result) {
        res = result;
      }
    }
  }
  return res;
}
