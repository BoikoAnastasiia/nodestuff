function alternateCase(s) {
  return s
    .split('')
    .map((word) =>
      word.toUpperCase() == word ? word.toLowerCase() : word.toUpperCase()
    )
    .join('');
}
console.log(alternateCase('Hello World'));
