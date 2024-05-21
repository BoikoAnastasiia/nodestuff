const fs = require('fs');
const folderPath = './animations';

const command =
  'aws s3 sync s3://gipper-static-assets/animated_templates animations';

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

      if (jsonString.includes('round')) {
        newArr.push(file);
      }

      const json = JSON.parse(jsonString);
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('counter.txt', newArr.join('\n'));
});
