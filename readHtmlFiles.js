const fs = require('fs');
const path = require('path');

const folderPath = './newsletters_presets_dev';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  const htmlFiles = files.filter((file) => path.extname(file) === '.html');

  const fileNamesWithoutExtension = htmlFiles.map((file) =>
    path.basename(file, '.html')
  );

  const rootFolderPath = path.join(__dirname, '.');
  const outputPath = path.join(rootFolderPath, 'arrayOfS3keysDev.txt');

  fs.writeFileSync(
    outputPath,
    JSON.stringify(fileNamesWithoutExtension, null, 2)
  );

  console.log('Array of file names written to arrayOfS3keysDev.txt');
});
