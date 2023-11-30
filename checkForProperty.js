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
      const data = fs.readFileSync(filePath, 'utf8');

      // console.log(testJSON(data));

      const jsonString = JSON.stringify(data);
      // console.log(jsonString);
      if (jsonString.includes('flexibleTemplate')) {
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
  fs.writeFileSync('flexible.txt', newArr.join('\n'));
});
