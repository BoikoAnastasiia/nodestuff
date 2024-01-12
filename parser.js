const fs = require('fs');

const st3keyArray = ['517D1880688693B7578D68316B82E01E'];

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
            el.logoWidth = 60;
            break;
          case 's':
            el.logoWidth = 30;
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

      const paddings = {
        paddingRight:
          el.backgroundStyling.paddingRight ?? el.backgroundStyling.paddingLR,
        paddingLeft:
          el.backgroundStyling.paddingLeft ?? el.backgroundStyling.paddingLR,
        paddingTop:
          el.backgroundStyling.paddingTop ?? el.backgroundStyling.paddingTB,
        paddingBottom:
          el.backgroundStyling.paddingBottom ?? el.backgroundStyling.paddingTB,
      };

      el.backgroundStyling = { ...el.backgroundStyling, ...paddings };
      delete el.backgroundStyling.paddingLR;
      delete el.backgroundStyling.paddingTB;
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
