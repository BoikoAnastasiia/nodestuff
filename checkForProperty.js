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
      const jsonString = fs.readFileSync(filePath, 'utf8');

      const json = JSON.parse(jsonString);

      if (json?.body?.objects) {
        json.body.objects.forEach((obj) => {
          try {
            if (obj.className === 'multiGroup') {
              const indexGroup = obj.objects.findIndex(
                (el) => el.className == 'containerForPicture'
              );
              const subgroup = obj.objects.find(
                (el) => el.className == 'containerForPicture'
              );
              console.log(subgroup);
              const hasvideo = subgroup.objects[0].canUseVideo;
              if (obj.objects[indexGroup + 1] && hasvideo) {
                newArr.push(file);
              }
            }
          } catch (innerError) {
            console.error(`Error parsing JSON in file ${file}:`, innerError);
          }
        });
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('specificalGroup.txt', newArr.join('\n'));
});
