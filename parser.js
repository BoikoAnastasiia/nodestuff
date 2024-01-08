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
      if (el.id === 'group_for_logo_1') {
        el.width = 175;
        el.height = 51;
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
