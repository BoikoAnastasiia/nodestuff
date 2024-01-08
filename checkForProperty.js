const fs = require('fs');
const folderPath = './newslettes_presets';
const commandDownloadAllHtmlPresets =
  'aws s3 cp s3://platform-gipper/presets/ newsletters_presets --recursive --exclude "*" --include "*.html"';

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

      const jsonString = JSON.stringify(data);
      if (jsonString.includes('"strokeWidth": 7')) {
        newArr.push(file);
        return;
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });
  fs.writeFileSync('circle.txt', newArr.join('\n'));
});
