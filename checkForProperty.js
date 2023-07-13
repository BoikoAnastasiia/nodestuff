const fs = require('fs');
const folderPath = './default_presets';
// const folderPath = './test';
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
      const data = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(data);
      const jsonString = JSON.stringify(json);

      if (jsonString.includes('skewY') && !jsonString.includes('"skewY":0')) {
        newArr.push(file);
        return;
      }

      if (jsonString.includes('skewX') && !jsonString.includes('"skewX":0')) {
        newArr.push(file);
        return;
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });
  fs.writeFileSync('propertyList.txt', newArr.join('\n'));
  // console.log('Results written to propertyList.txt');
});
