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

      // console.log(testJSON(data));

      const jsonString = JSON.stringify(data);
      // console.log(jsonString);
      if (jsonString.includes('"strokeWidth": 7')) {
        newArr.push(file);
        return;
      }

      // const json = JSON.parse(data);

      // if (json?.body?.objects) {
      //   json.body.objects.filter((obj) => obj.type != 'image' && obj.clipPath)
      //     .length > 0 && newArr.push(file);
      // }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });
  fs.writeFileSync('circle.txt', newArr.join('\n'));
});
