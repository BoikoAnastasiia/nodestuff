const fs = require('fs');
const folderPath = './default_presets';
const command =
  'aws s3 sync s3://gipper-static-assets/default_presets_update default_presets';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  let newArr = [];

  files.forEach((file) => {
    const filePath = `${folderPath}/${file}`;
    try {
      const jsonString = fs.readFileSync(filePath, 'utf8');

      const json = JSON.parse(jsonString);

      if (json?.body?.objects) {
        json?.body?.objects.forEach((obj) => {
          if (obj.fill.colorStops[0].color !== obj.fill.colorStops[1].color) {
            newArr.push(file);
          }
          if (obj.objects) {
            obj.objects.some((el) => {
              el.fill.colorStops[0].color !== el.fill.colorStops[1].color;
            }) && newArr.push(file);
          }
        });
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('gradientsCrooked.txt', newArr.join('\n'));
});
