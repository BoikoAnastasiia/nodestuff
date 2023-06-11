function sortByLength(array) {
  console.log(array.split(', ').sort((a, b) => a.length - b.length));
  return array.split(', ').sort((a, b) => a.length - b.length);
}
