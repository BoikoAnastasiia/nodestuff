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
      let json = JSON.parse(jsonString);

      // Initialize a flag to track if the file has been edited
      let fileModified = false;

      if (json.body && Array.isArray(json.body.objects)) {
        json.body.objects.forEach((el) => {
          if (
            (el.type === 'group' || el.type === 'path') &&
            el.stroke &&
            el.fill === undefined
          ) {
            el.fill = null; // Make the modification
            if (el.pathlink) {
              delete el.objects;
            }
            fileModified = true; // Set the flag since a modification was made
          }
        });

        // Check if the file was modified and thus needs to be saved
        if (fileModified) {
          const editedFilePath = `${editedFolderPath}/${file}`;
          fs.writeFileSync(
            editedFilePath,
            JSON.stringify(json, null, 2),
            'utf8'
          );
        }
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });
});
