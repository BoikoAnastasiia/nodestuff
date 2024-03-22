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
        json.body.objects.forEach((obj) => {
          try {
            if (obj.type === 'group' && obj.stroke && obj.fill === undefined) {
              newArr.push(file);
            }
          } catch (innerError) {
            console.error(`Error parsing JSON in file ${file}:`, innerError);
          }
        });
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('fillstroke.txt', newArr.join('\n'));
});
