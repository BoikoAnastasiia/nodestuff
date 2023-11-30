const fs = require('fs');

// Read the first JSON file
const file1Data = require('./templates3.json');

const file2Data = fs
  .readFileSync('./flexible.txt', 'utf-8')
  .split('\n')
  .filter(Boolean);

// Filter out objects with names from the second file
const filteredData = file1Data.filter((obj) => {
  const className = obj['templates.class_name'];
  return !file2Data.includes(className) && className.includes('template_');
});

// Write the modified data to a new JSON file
const outputFilePath = './output.json';
fs.writeFileSync(outputFilePath, JSON.stringify(filteredData, null, 2));
