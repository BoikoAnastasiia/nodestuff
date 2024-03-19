const fs = require('fs');
const folderPath = './default_presets';

const command =
  'aws s3 sync s3://gipper-static-assets/default_presets_update default_presets';

const filterTitles = (arr) => {
  const uniqueTitles = new Set(arr);
  return [...uniqueTitles]
    .filter((el) => el !== 'NEED_TYPE_TITLE' && el)
    .sort((a, b) => a.localeCompare(b))
    .map((el) => el.trim());
};

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

  const iterateNestedObjects = (obj) => {
    try {
      if (
        obj.type === 'image' &&
        (obj.className === 'backgroundPicture' ||
          obj.className === 'logoPicture' ||
          obj.className === 'cutoutPicture')
      ) {
        titles.Media.push(obj.conrolTitle);
      }
      if (obj.type === 'image' && obj.className === 'blendPicture') {
        titles.Colors.push(obj.conrolTitle);
      }
      if (obj.type !== 'image' && obj.type !== 'textbox') {
        titles.Colors.push(obj.conrolTitle);
      }
      if (obj.type === 'textbox') {
        titles.Text.push(obj.conrolTitle);
      }
      // If this object contains other objects, iterate over them recursively
      if (obj.objects && Array.isArray(obj.objects)) {
        obj.objects.forEach(iterateNestedObjects);
      }
    } catch (innerError) {
      console.error(`Error parsing JSON in object:`, innerError);
    }
  };

  files.forEach((file) => {
    const filePath = `${folderPath}/${file}`;
    try {
      const jsonString = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(jsonString);

      if (json?.body?.objects) {
        json.body.objects.forEach(iterateNestedObjects);
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  titles.Media = filterTitles(titles.Media);
  titles.Colors = filterTitles(titles.Colors);
  titles.Text = filterTitles(titles.Text);

  const titlesJSON = JSON.stringify(titles, null, 2);
  fs.writeFileSync('titles.json', titlesJSON);
});
