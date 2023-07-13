function powerOf4(n) {
  while (true) {
    if (n % 1 !== 0) {
      return false;
    }
    if (n === 4 || n === 1) {
      return true;
    }
    if (n === 0) {
      return false;
    }
    n = n / 4;
  }
}

console.log(powerOf4(12));
