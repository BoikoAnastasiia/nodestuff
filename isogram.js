function isIsogram(str) {
  const set = new Set(
    str
      .split('')
      .map((el) => el.toLowerCase())
      .sort()
  );

  const stringify = [...set.values()].join('');
  return (
    str
      .split('')
      .map((el) => el.toLowerCase())
      .sort()
      .join('') === stringify
  );
}

console.log(isIsogram('Dermatoglyphics'));
