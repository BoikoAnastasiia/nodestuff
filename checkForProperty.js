const fs = require('fs');
const folderPath = './newslettes_presets';
const commandDownloadAllHtmlPresetsProd =
  'aws s3 cp s3://platform-gipper/presets/ newsletters_presets --recursive --exclude "*" --include "*.html"';

const commandDownloadAllHtmlPresetsDev =
  'aws s3 cp s3://gipper-college-logos-development/presets/ newsletters_presets_dev --recursive --exclude "*" --include "*.html"';

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
      if (jsonString.includes('2x2') || jsonString.includes('3x3')) {
        newArr.push(file);
        return;
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });
  fs.writeFileSync('2x2&&3x3.txt', newArr.join('\n'));
});
