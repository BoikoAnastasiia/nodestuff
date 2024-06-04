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

      // if (
      //   !jsonString.toLowerCase().includes('backgroundpicture') &&
      //   !jsonString.toLowerCase().includes('cutoutpicture')
      // ) {
      //   newArr.push(file);
      // }

      const json = JSON.parse(jsonString);
      json.body.objects.forEach((el) => {
        if (el.strokeWidth > 0 && el.shadow) {
          newArr.push(file);
        }
      });
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('stroke.txt', newArr.join('\n'));
});
