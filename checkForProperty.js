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

      if (
        jsonString.includes('.svg') &&
        !jsonString.includes(
          'https://gipper-static-assets.s3.amazonaws.com/icons/move_cursor.svg'
        )
      ) {
        newArr.push(file);
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('svg.txt', newArr.join('\n'));
});
