// findColors.js

const fs = require('fs');
const { extractColorsFromObject } = require('./sortColors');
const folderPath = './default_presets';

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
        try {
          const dictionary = extractColorsFromObject(json);
          const numberOfColors = Object.keys(dictionary).length;
          if (numberOfColors > 5) {
            newArr.push({ file, numberOfColors }); // Include the file name in the result
          }
        } catch (innerError) {
          console.error(`Error parsing JSON in file ${file}:`, innerError);
        }
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  // Convert newArr to a JSON string with proper indentation
  const outputJson = JSON.stringify(newArr, null, 2);

  // Write the JSON string to the file
  fs.writeFileSync('moreThan5Colors.json', outputJson);

  console.log('Output written to moreThan5Colors.json');
});
