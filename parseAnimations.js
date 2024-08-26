const fs = require('fs').promises;
const path = require('path');

async function processFiles(animatedDir, templateDir, outputDir) {
  try {
    const [animatedFiles, templateFiles] = await Promise.all([
      fs.readdir(animatedDir),
      fs.readdir(templateDir),
    ]);

    const jsonAnimatedFiles = animatedFiles.filter(
      (file) => path.extname(file).toLowerCase() === '.json'
    );

    for (const animatedFile of jsonAnimatedFiles) {
      const animatedPath = path.join(animatedDir, animatedFile);
      const templatePath = path.join(templateDir, animatedFile);

      if (!templateFiles.includes(animatedFile)) {
        console.warn(`No matching template found for ${animatedFile}`);
        continue;
      }

      const [animatedContent, templateContent] = await Promise.all([
        fs.readFile(animatedPath, 'utf8').then(JSON.parse),
        fs.readFile(templatePath, 'utf8').then(JSON.parse),
      ]);

      const idMap = {};
      const specialMap = {};
      templateContent.body.objects.forEach((obj, index) => {
        idMap[index] = obj.id;
        if (obj.className) specialMap[obj.className] = obj.id;
        if (obj.conrolTitle) specialMap[obj.conrolTitle.toLowerCase()] = obj.id;
      });

      const transformedContent = transformContent(
        animatedContent,
        idMap,
        specialMap
      );

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
          let newObj = { ...obj };
          if (
            typeof obj.target_query === 'number' &&
            idMap[obj.target_query] !== undefined
          ) {
            newObj.id = idMap[obj.target_query];
          } else if (typeof obj.target_query === 'string') {
            newObj.id =
              specialMap[obj.target_query.toLowerCase()] || obj.target_query;
          } else if (typeof obj.target_query === 'object') {
            if (obj.target_query.index !== undefined) {
              let newId;
              if (
                typeof obj.target_query.index === 'number' &&
                idMap[obj.target_query.index] !== undefined
              ) {
                newId = idMap[obj.target_query.index];
              } else if (
                typeof obj.target_query.index === 'string' &&
                specialMap[obj.target_query.index.toLowerCase()]
              ) {
                newId = specialMap[obj.target_query.index.toLowerCase()];
              } else {
                newId = obj.target_query.index;
              }
              newObj.id = {
                id: newId,
                element: obj.target_query.element,
              };
            } else {
              newObj.id = obj.target_query;
            }
          }
          delete newObj.target_query;
          return newObj;
        });
    }
    return item;
  });
}

// Usage
const animatedDir = './old_animations';
const templateDir = './default_presets';
const outputDir = './new_animations';

fs.mkdir(outputDir, { recursive: true })
  .then(() => processFiles(animatedDir, templateDir, outputDir))
  .catch((error) => console.error('Error creating output directory:', error));
