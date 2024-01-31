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

      if (json?.body?.objects) {
        json.body.objects.filter((obj) => obj.backgroundColor !== null).length >
          0 && newArr.push(file);
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('background.txt', newArr.join('\n'));
});
