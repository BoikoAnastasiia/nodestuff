const fs = require('fs');

const st3keyArray = ['63EF9653C035135AD8BCC19C8FDF6672'];

st3keyArray.map((key) => {
  const data = fs.readFileSync(`./newsletters_presets/json/${key}.json`);
  const json = JSON.parse(data);

  const changeImageWidth = (el) => {
    switch (el.singleTypeSize) {
      case 'l':
        el.singleImageWidth = 30;
        break;
      case 's':
        el.singleImageWidth = 10;
        break;
      case 'm':
        el.singleImageWidth = 20;
        break;
      default:
    }
  };

  if (json) {
    json.content.forEach((el, index, array) => {
      if (el.componentType === 'ImageComponent' && el.gridType === 'single') {
        el.gridType = '1';
        changeImageWidth(el);
        delete el.singleTypeSize;
      }

      if (el.componentType === 'LogoComponent') {
        console.log(el.logoSize);
        switch (el.logoSize) {
          case 'l':
            el.logoWidth = 50;
            break;
          case 's':
            el.logoWidth = 20;
            break;
          case 'm':
            el.logoWidth = 40;
            break;
          default:
        }
        delete el.logoSize;
      }

      if (el.componentType === 'ImageComponent' && el.gridType === 'full') {
        el.gridType = '1';
        el.singleImageWidth = 100;
        delete el.singleTypeSize;
      }

      if (el.componentType === 'ImageComponent' && el.gridType === '2x2') {
        el.gridType = '2';
        delete el.singleTypeSize;
        el.singleImageWidth = 50;
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
        el.singleImageWidth = 50;
        el.images.splice(3, 6);
        el2.images.splice(0, 3);
        el2.images.splice(3, 3);
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

  fs.writeFileSync(
    `./newsletters_presets/modified/${key}.json`,
    newJson,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
  console.log(`done ${key}`);
});
