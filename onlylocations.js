const fs = require('fs');

// Read the sorted and cleaned JSON file
fs.readFile('sortedLockations.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Array to store all locations
    let allLocations = [];

    // Iterate over each key (link) in the object
    Object.keys(jsonData).forEach((link) => {
      // Iterate over each preset in the link
      jsonData[link].forEach((preset) => {
        // Extract locations and add them to the allLocations array
        if (Array.isArray(preset.Locations)) {
          allLocations = allLocations.concat(
            preset.Locations.filter((location) => location !== '')
          );
        }
      });
    });

    // Remove duplicates from the allLocations array
    allLocations = Array.from(new Set(allLocations));

    // Convert the allLocations array to string
    const allLocationsString = JSON.stringify(allLocations, null, 2);

    // Write the allLocations array to a new file
    fs.writeFile('all_locations.json', allLocationsString, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('All locations written to file successfully!');
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
