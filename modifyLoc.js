const fs = require('fs');
const fileLoc = './locations.json';

// Read the JSON file
fs.readFile(fileLoc, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Iterate over each key (link) in the object
    Object.keys(jsonData).forEach((link) => {
      // Filter out empty strings from the "Locations" array
      if (Array.isArray(jsonData[link][1].Locations)) {
        jsonData[link][1].Locations = jsonData[link][1].Locations.filter(
          (location) => location !== ''
        );
      }
    });

    const sortedJsonData = Object.keys(jsonData)
      .sort()
      .reduce((acc, key) => {
        acc[key] = jsonData[key];
        return acc;
      }, {});

    // Convert the sorted JSON object back to string
    const sortedJsonString = JSON.stringify(sortedJsonData, null, 2);

    // Write the sorted JSON data back to file
    fs.writeFile('sortedLockations.json', sortedJsonString, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('JSON data sorted and written to file successfully!');
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
