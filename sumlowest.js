function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a - b)[0] + numbers[1];
}
console.log(sumTwoSmallestNumbers([40, 1, 12, 19, 3]));
