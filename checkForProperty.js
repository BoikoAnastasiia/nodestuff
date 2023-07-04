const fs = require('fs');
const folderPath = './default_presets';
const propertyName = 'skew';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonArray = [];

  files.forEach((file) => {
    const filePath = `${folderPath}/${file}`;

    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(data);
      const jsonString = JSON.stringify(json);

      if (jsonString.includes(propertyName)) {
        jsonArray.push(file);
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('propertyList.txt', jsonArray.join('\n'));
  console.log('Results written to propertyList.txt');
});
