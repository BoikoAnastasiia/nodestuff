function getMiddle(s) {
  console.log(Math.ceil(s.length) / 2 - 1);
  return s.length % 2 === 0
    ? s[Math.ceil(s.length / 2) - 1] + s[Math.ceil(s.length) / 2]
    : s[Math.ceil(s.length / 2) - 1];
}

console.log(getMiddle('testing'));
