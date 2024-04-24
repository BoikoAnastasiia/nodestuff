const fs = require('fs');
const folderPath = './presets';

const filterTitles = (dict) => {
  return Object.keys(dict)
    .filter((el) => el !== 'NEED_TYPE_TITLE' && el)
    .sort((a, b) => a.localeCompare(b))
    .map((el) => ({ title: el.trim(), count: dict[el] }));
};

const iterateNestedObjects = (obj, titlesCount) => {
  try {
    if (obj.conrolTitle && typeof obj.conrolTitle === 'string') {
      let titleCategory = null;
      if (
        obj.type === 'image' &&
        (obj.className === 'backgroundPicture' ||
          obj.className === 'logoPicture' ||
          obj.className === 'cutoutPicture')
      ) {
        titleCategory = titlesCount.Media;
      } else if (obj.type === 'image' && obj.className === 'blendPicture') {
        titleCategory = titlesCount.Colors;
      } else if (obj.type !== 'image' && obj.type !== 'textbox') {
        titleCategory = titlesCount.Colors;
      } else if (obj.type === 'textbox') {
        titleCategory = titlesCount.Text;
      }

      if (titleCategory) {
        const trimmedTitle = obj.conrolTitle.trim();
        if (titleCategory[trimmedTitle]) {
          titleCategory[trimmedTitle]++;
        } else {
          titleCategory[trimmedTitle] = 1;
        }
      }
    }

    if (obj.objects && Array.isArray(obj.objects)) {
      obj.objects.forEach((nestedObj) =>
        iterateNestedObjects(nestedObj, titlesCount)
      );
    }
  } catch (innerError) {
    console.error(`Error parsing JSON in object:`, innerError);
  }
};

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const titlesCount = {
    Media: {},
    Colors: {},
    Text: {},
    // Initialize other categories as needed here
  };

  files.forEach((file) => {
    const filePath = `${folderPath}/${file}`;
    try {
      const jsonString = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(jsonString);

      if (json?.body?.objects) {
        json.body.objects.forEach((obj) =>
          iterateNestedObjects(obj, titlesCount)
        );
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  const finalTitles = {
    Media: filterTitles(titlesCount.Media),
    Colors: filterTitles(titlesCount.Colors),
    Text: filterTitles(titlesCount.Text),
    // Process other categories as needed
  };

  const titlesJSON = JSON.stringify(finalTitles, null, 2);
  fs.writeFileSync('titles.json', titlesJSON);
});
