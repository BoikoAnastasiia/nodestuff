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
      if (
        json.clipPath &&
        (json.width !== json.clipPath.width ||
          json.height !== json.clipPath.height)
      ) {
        delete json.clipPath;
      }

      // Write the modified json back to a new file in the edited_presets folder
      const editedFilePath = `${editedFolderPath}/${file}`;
      fs.writeFileSync(editedFilePath, JSON.stringify(json, null, 2), 'utf8');
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });
});
