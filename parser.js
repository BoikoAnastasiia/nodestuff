const fs = require('fs');

const st3keyArray = ['example'];

st3keyArray.map((key) => {
  const data = fs.readFileSync(`./newsletters_presets/${key}.json`);
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

      if (el.componentType === 'ImageComponent' && el.gridType === '2x2') {
        el.gridType = '2';
        const el2 = { ...el };
        el.images.slice(2, 3);
        el2.images.slice(0, 1);
        array.splice(index + 1, 0, el2);
      }

      if (el.componentType === 'ImageComponent' && el.gridType === '3x3') {
        el.gridType = '3';
        const el2 = ({ ...el } = el3);
        el.images.slice(2, 3, 4, 5);
        el2.images.slice(0, 1, 4, 5);
        el3.images.slice(0, 1, 2, 3);
        array.splice(index + 1, 0, el2, el3);
      }
    });
  }

  const newJson = JSON.stringify(json);

  fs.writeFileSync(`./newsletters_presets/${key}.json`, newJson, (err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log(`done ${key}`);
});