const fs = require('fs');

const st3keyArray = [
  '802EB3C4B2246FA866BB3919C14AA7A3',
  'CEC0168BF19C7B1466DA7845F26F4752',
  'B2079FD5441F881F62B64AD30F112A3E',
  'sdGun8gHOtNiVO6PGUjsrjZs',
  'KmirVr3LmH9vYSXpRHFGftOq',
  'spSBD1aeuLK5HsU3I1LmDFUs',
  'yIESJjCmCfrXLc9om7LEPxB5',
  'ABC9C70A199C9DA29139D053459D183E',
  'reW3gLVkDm9Z5rdw6b7mXBEE',
  '9yKhrHbQNIzVl6qaVO3jNiiZ',
  '02C21AF3DF9F391F91A834663AA78C1B',
  '0005CA402B7CD77D157CDBAB44F8C7B9',
  '551DF99632D2F2551A4C7D42481A43DE',
  'E6A3F583C0507371C7E39F4BD1DF5918',
  '468D2F619E03085ACD9D1446D8B3543D',
  'BC05A3ED7A1149A7E5FDCCA87FFB9FFC',
];

st3keyArray.map((key) => {
  const data = fs.readFileSync(`./presets/${key}.json`);
  const json = JSON.parse(data);

  if (json.body) {
    json.body.objects.forEach((el, index, array) => {
      if (el.id === 'wave_2') {
        delete el.clipPath;
        el.src = 'https://dzfa1uifb0sb6.cloudfront.net/stock_images/dddd.png';
        el.top = 0;
        el.left = 0;
      }
    });
  }

  const newJson = JSON.stringify(json);

  fs.writeFileSync(`./presets/${key}.json`, newJson, (err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log(`done ${key}`);
});
