function isLeapYear(year) {
  return year % 4 !== 0 && year % 100 == 0 ? false : true;
}
console.log(isLeapYear(2020));
