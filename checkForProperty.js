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

      if (jsonString.toLowerCase().includes('schedule')) {
        newArr.push(file);
      }

      const json = JSON.parse(jsonString);
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('game.txt', newArr.join('\n'));
});
