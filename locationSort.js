const fs = require('fs');
const folderPath = './presets';
const locationsFile = './locations.json';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Failed to read directory:', err);
    return;
  }

  const Locations = [];
  const baseUrl = 'https://platform.gogipper.com/templates/';
  const templateId = '3834';

  files.forEach((file) => {
    const filePath = `${folderPath}/${file}`;
    try {
      const jsonString = fs.readFileSync(filePath, 'utf8');
      const json = JSON.parse(jsonString);

      if (json?.body?.objects) {
        json.body.objects.forEach((obj) => {
          if (obj.conrolTitle === 'Location:') {
            Locations.push(obj.text);
          }
        });
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  try {
    const currentLocations = JSON.parse(fs.readFileSync(locationsFile, 'utf8'));
    currentLocations[baseUrl + templateId] = [
      { presets: Locations.length },
      { Locations },
    ];

    fs.writeFileSync(
      locationsFile,
      JSON.stringify(currentLocations, null, 2),
      'utf8'
    );
  } catch (error) {
    console.error('Error reading or writing locations file:', error);
  }
});
