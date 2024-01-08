const fs = require('fs');

const st3keyArray = [
  '3231296CDAD05FEEF51B523A1DBDACD9',
  'BA151ED808E3BC227014FE996F3EFF15',
  'EC96828F649555D71448DF9C17D2E802',
];

st3keyArray.map((key) => {
  const data = fs.readFileSync(`./presets/${key}.json`);
  const json = JSON.parse(data);

  if (json.body) {
    json.body.objects.forEach((el, index, array) => {
      if (el.componentType === 'ImageComponent' && el.gridType === 'single') {
        el.gridType = '1';

        switch (el.singleTypeSize) {
          case 'l':
            el.singleTypeSize = '9';
            break;
          case 's':
            el.singleTypeSize = '1';
            break;
          case 'm':
            el.singleTypeSize = '5';
            break;
          default:
            break;
        }
      }

      if (el.componentType === 'ImageComponent' && el.gridType === 'full') {
        el.gridType = '1';
        el.singleTypeSize = '10';
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
