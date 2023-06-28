function order(words) {
  return words
    .split(' ')
    .sort((a, b) => +a.match(/\d/g).join('') - +b.match(/\d/g).join(''))
    .join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
