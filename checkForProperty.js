const fs = require('fs');
// const folderPath = './default_presets';
const folderPath = './animated_templates';
const command =
  'aws s3 sync s3://gipper-static-assets/default_presets_update default_presets';

const command2 =
  'aws s3 sync s3://gipper-static-assets/animated_templates animated_templates';

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
      if (jsonString.includes('clipPath') || jsonString.includes('round')) {
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
  fs.writeFileSync('animation_with_clippath.txt', newArr.join('\n'));
});
