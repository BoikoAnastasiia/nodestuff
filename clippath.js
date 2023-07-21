const fs = require('fs');

const st3keyArray = [
  '1CBAFC6B263E8C120EFC0479BA1962A2',
  'B6DA973113589F2560C78018A25B7F25',
  'E79B551E9890AE0DF2E5689694521366',
];

st3keyArray.map((key) => {
  const data = fs.readFileSync(`./presets/${key}.json`);
  const json = JSON.parse(data);

  if (json.body) {
    json.body.objects.forEach((el, index, array) => {
      // const indexar1 = array.findIndex((el) => el.id === 'foreground_photo');

      if (el.id === 'background_photo') {
        const clipPath = {
          type: 'path',
          originX: 'left',
          originY: 'top',
          left: 454.5,
          top: -0.1,
          width: 1014,
          height: 1080,
          scaleX: 0.5005,
          scaleY: 0.5005,
          path: [
            ['M', 0.5, 740],
            ['L', 0.5, 0.5],
            ['L', 1014, 0.5],
            ['L', 1014, 1081.5],
            ['C', 936.5, 1081.5, 167, 1081, 167, 1081],
            ['C', 167, 1081, 35, 959.5, 0.5, 740],
            ['Z'],
          ],
          absolutePositioned: true,
        };
        el.clipPath = clipPath;
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
