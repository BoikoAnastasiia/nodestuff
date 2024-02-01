const fs = require('fs');
const folderPath = './default_presets';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  let newArr = [];

  files.forEach((file) => {
    const filePath = `${folderPath}/${file}`;
    try {
      const jsonString = fs.readFileSync(filePath, 'utf8');

      const json = JSON.parse(jsonString);

      if (json?.body?.objects) {
        json.body.objects.forEach((obj) => {
          try {
            if (obj.fill.colorStops[0].color !== obj.fill.colorStops[1].color) {
              newArr.push(file);
            }
            if (obj.objects) {
              const hasDifferentGradient = obj.objects.some((el) => {
                try {
                  return (
                    el.fill.colorStops[0].color !== el.fill.colorStops[1].color
                  );
                } catch (innerError) {
                  console.error(
                    `Error parsing JSON in nested object of file ${file}:`,
                    innerError
                  );
                  return false; // Continue with other objects in the array
                }
              });

              if (hasDifferentGradient) {
                newArr.push(file);
              }
            }
          } catch (innerError) {
            console.error(`Error parsing JSON in file ${file}:`, innerError);
          }
        });
      }
    } catch (parseError) {
      console.error(`Error parsing JSON in file ${file}:`, parseError);
    }
  });

  fs.writeFileSync('gradientsCrooked.txt', newArr.join('\n'));
});
