function toDayOfYear(arr) {
  const dateInJs = new Date(arr[2], arr[1] - 1, arr[0]);
  console.log(dateInJs);
  const firstDayOfTheYear = new Date(arr[2], 0, 1);
  console.log(firstDayOfTheYear);
  const difference = (dateInJs - firstDayOfTheYear) / (24 * 60 * 60 * 1000);
  return difference + 1;
}

console.log(toDayOfYear([25, 12, 2017]));
