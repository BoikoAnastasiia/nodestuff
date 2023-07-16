const getMilitaryTime = function (input) {
  const numbers = input.split(':');
  const firstAm = numbers[0] > 11 ? '00' : numbers[0];
  const firstPm = numbers[0] > 11 ? '12' : +numbers[0] + 12;
  return input.includes('AM')
    ? `${firstAm}:${numbers[1]}:${numbers[2].slice(0, 2)}`
    : `${+firstPm}:${numbers[1]}:${numbers[2].slice(0, 2)}`;
};

console.log(getMilitaryTime('11:26:01PM'));
