const fs = require('fs');
const folderPath = './default_presets';

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

      // if (jsonString.includes('staticMedia')) {
      //   newArr.push(file);
      // }

      if (json.body.objects) {
        json.body.objects.forEach((obj) => {
          if (obj.additionalPicture && obj.className !== 'logoPicture') {
            newArr.push(file);
          }
        });
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('removeBG.txt', newArr.join('\n'));
});
