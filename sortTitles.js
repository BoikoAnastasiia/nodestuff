const fs = require('fs');
const folderPath = './default_presets';

const command =
  'aws s3 sync s3://gipper-static-assets/default_presets_update default_presets';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const titles = {
    Media: [],
    Colors: [],
    Text: [],
    Location: [
      'Home Color',
      'Away Color',
      'Neutral Color',
      'Scrimmage Color',
      'Location 1',
      'Location 2',
    ],
    'Additional Elements': ['Photo', 'Text Box: ', 'Cutout', 'Logo'],
    'Sponsor Logo': ['Sponsor Logo'],
  };

  files.forEach((file) => {
    const filePath = `${folderPath}/${file}`;
    try {
      const jsonString = fs.readFileSync(filePath, 'utf8');

      const json = JSON.parse(jsonString);

      if (json?.body?.objects) {
        json.body.objects.forEach((obj) => {
          try {
            if (
              obj.type === 'image' &&
              (obj.width > 2048 || obj.height > 2048)
            ) {
              newArr.push(file);
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

  fs.writeFileSync('big_images.txt', newArr.join('\n'));
});
