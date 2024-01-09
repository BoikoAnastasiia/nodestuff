const fs = require('fs');

const st3keyArray = ['example', 'example2'];

st3keyArray.map((key) => {
  const data = fs.readFileSync(`./newsletters_presets/${key}.json`);
  const json = JSON.parse(data);

  if (json) {
    json.content.forEach((el, index, array) => {
      if (el.componentType === 'ImageComponent' && el.gridType === 'single') {
        el.gridType = '1';

        switch (el.singleTypeSize) {
          case 'l':
            el.singleImageWidht = '90';
            break;
          case 's':
            el.singleImageWidht = '10';
            break;
          case 'm':
            el.singleImageWidht = '50';
            break;
          default:
        }
        delete el.singleTypeSize;
      }

      if (el.componentType === 'ImageComponent' && el.gridType === 'full') {
        el.gridType = '1';
        el.singleImageWidht = '10';
        delete el.singleTypeSize;
      }

      if (el.componentType === 'ImageComponent' && el.gridType === '2x2') {
        el.gridType = '2';
        delete el.singleTypeSize;
        el.singleImageWidht = 50;
        const el2 = JSON.parse(JSON.stringify(el));
        el.images.splice(2, 2);
        el2.images.splice(0, 2);
        el2.id = el.id + '-2';
        array.splice(index + 1, 0, el2);
      }

      if (el.componentType === 'ImageComponent' && el.gridType === '3x3') {
        el.gridType = '3';
        delete el.singleTypeSize;
        const el2 = JSON.parse(JSON.stringify(el));
        const el3 = JSON.parse(JSON.stringify(el));
        el.singleImageWidht = 50;
        el.images.splice(3, 6);
        el2.images.splice(0, 3);
        el2.images.splice(6, 3);
        el3.images.splice(0, 6);
        el2.id = el.id + '-2';
        el3.id = el.id + '-3';
        array.splice(index + 1, 0, el2, el3);
      }

      if (
        el.backgroundStyling.paddingLR >= 0 &&
        el.backgroundStyling.paddingRight >= 0 &&
        el.backgroundStyling.paddingLeft >= 0
      ) {
        delete el.backgroundStyling.paddingLR;
      }

      if (
        el.backgroundStyling.paddingLR >= 0 &&
        !el.backgroundStyling.paddingRight &&
        !el.backgroundStyling.paddingLeft
      ) {
        el.backgroundStyling.paddingRight = el.backgroundStyling.paddingLR;
        el.backgroundStyling.paddingLeft = el.backgroundStyling.paddingLR;
        delete el.backgroundStyling.paddingLR;
      }

      if (
        el.backgroundStyling.paddingTB >= 0 &&
        el.backgroundStyling.paddingTop >= 0 &&
        el.backgroundStyling.paddingBottom >= 0
      ) {
        delete el.backgroundStyling.paddingTB;
      }

      if (
        el.backgroundStyling.paddingTB >= 0 &&
        !el.backgroundStyling.paddingTop &&
        !el.backgroundStyling.paddingBottom
      ) {
        el.backgroundStyling.paddingTop = el.backgroundStyling.paddingTB;
        el.backgroundStyling.paddingBottom = el.backgroundStyling.paddingTB;
        delete el.backgroundStyling.paddingTB;
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
