const fs = require('fs');
const folderPath = './default_presets';
const editedFolderPath = './edited_presets';

// Ensure the edited_presets directory exists
if (!fs.existsSync(editedFolderPath)) {
  fs.mkdirSync(editedFolderPath);
}

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((file) => {
    const filePath = `${folderPath}/${file}`;
    try {
      const jsonString = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(jsonString);

      // Check condition and possibly delete clipPath
      // console.log(json.clipPath, json.width, json.height);
      if (
        json.body.clipPath &&
        (json.width !== json.body.clipPath.width ||
          json.height !== json.body.clipPath.height)
      ) {
        delete json.body.clipPath;
        console.log(file);

        // Only write the modified json to a new file if clipPath was deleted
        const editedFilePath = `${editedFolderPath}/${file}`;
        fs.writeFileSync(editedFilePath, JSON.stringify(json, null, 2), 'utf8');
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });
});
