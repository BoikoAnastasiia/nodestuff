function solution(str, ending) {
  return (
    str.split('').reverse().join('').slice(0, ending.length) ==
    ending.split('').reverse().join('')
  );
}

console.log(solution('samurai', 'ai'));
