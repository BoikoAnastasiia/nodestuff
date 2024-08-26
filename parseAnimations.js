const fs = require('fs').promises;
const path = require('path');

async function processFiles(animatedDir, templateDir, outputDir) {
  try {
    // Read all files in the animated and template directories
    const [animatedFiles, templateFiles] = await Promise.all([
      fs.readdir(animatedDir),
      fs.readdir(templateDir),
    ]);

    // Filter for JSON files
    const jsonAnimatedFiles = animatedFiles.filter(
      (file) => path.extname(file).toLowerCase() === '.json'
    );

    for (const animatedFile of jsonAnimatedFiles) {
      const animatedPath = path.join(animatedDir, animatedFile);
      const templatePath = path.join(templateDir, animatedFile); // Assuming matching names

      // Check if corresponding template file exists
      if (!templateFiles.includes(animatedFile)) {
        console.warn(`No matching template found for ${animatedFile}`);
        continue;
      }

      // Read both animated and template files
      const [animatedContent, templateContent] = await Promise.all([
        fs.readFile(animatedPath, 'utf8').then(JSON.parse),
        fs.readFile(templatePath, 'utf8').then(JSON.parse),
      ]);

      // Create a map of indices to ids and a map of special identifiers
      const idMap = {};
      const specialMap = {};
      templateContent.body.objects.forEach((obj, index) => {
        idMap[index] = obj.id;
        if (obj.className) specialMap[obj.className] = obj.id;
        if (obj.conrolTitle) specialMap[obj.conrolTitle.toLowerCase()] = obj.id;
      });

      // Transform the animated content
      const transformedContent = transformContent(
        animatedContent,
        idMap,
        specialMap
      );

      // Write the transformed content to the output directory
      const outputPath = path.join(outputDir, animatedFile);
      await fs.writeFile(
        outputPath,
        JSON.stringify(transformedContent, null, 2)
      );

      console.log(`Processed ${animatedFile} successfully.`);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

function transformContent(content, idMap, specialMap) {
  return content.map((item) => {
    if (item.animation_params && item.animation_params.animation_objects) {
      item.animation_params.animation_objects =
        item.animation_params.animation_objects.map((obj) => {
          if (
            typeof obj.target_query === 'number' &&
            idMap[obj.target_query] !== undefined
          ) {
            obj.target_query = idMap[obj.target_query];
          } else if (typeof obj.target_query === 'string') {
            // Check if it's a special identifier
            if (specialMap[obj.target_query.toLowerCase()]) {
              obj.target_query = specialMap[obj.target_query.toLowerCase()];
            }
            // If not found in specialMap, keep the original string
          } else if (
            typeof obj.target_query === 'object' &&
            obj.target_query.index !== undefined
          ) {
            if (idMap[obj.target_query.index] !== undefined) {
              obj.target_query.index = idMap[obj.target_query.index];
            } else if (
              typeof obj.target_query.index === 'string' &&
              specialMap[obj.target_query.index.toLowerCase()]
            ) {
              obj.target_query.index =
                specialMap[obj.target_query.index.toLowerCase()];
            }
          }
          return obj;
        });
    }
    return item;
  });
}

// Usage
const animatedDir = './old_animations';
const templateDir = './default_presets';
const outputDir = './new_animations';

// Ensure output directory exists
fs.mkdir(outputDir, { recursive: true })
  .then(() => processFiles(animatedDir, templateDir, outputDir))
  .catch((error) => console.error('Error creating output directory:', error));
