const fs = require('fs');
const { DOMParser, XMLSerializer } = require('xmldom');

const st3keyArray = ['single', 'cat'];

st3keyArray.map((key) => {
  // Read the HTML file
  const htmlContent = fs.readFileSync(
    `./newsletters_presets_dev/${key}.html`,
    'utf-8'
  );

  // Parse HTML content
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');

  // handle single images
  const allElements = doc.getElementsByTagName('div');
  const singleImagesArray = Array.from(allElements).filter((element) => {
    return (
      element.getAttribute('class') &&
      element.getAttribute('class').includes('image_single')
    );
  });
  const oldSingleImagesArray = singleImagesArray.filter(
    (el) => !el.getAttribute('style').includes('width')
  );

  console.log(oldSingleImagesArray);

  // const originalDiv = doc.getElementById('image_component-2_content');

  // // Create a new div with a modified ID
  // const newDivId = `${originalDiv.getAttribute('id')}-${key}`;
  // const newDiv = doc.createElement('div');
  // newDiv.setAttribute('id', newDivId);
  // newDiv.setAttribute('class', originalDiv.getAttribute('class'));
  // newDiv.setAttribute('style', originalDiv.getAttribute('style'));

  // // Create a new div wrapper for the images
  // const imageWrapper = doc.createElement('div');
  // imageWrapper.setAttribute(
  //   'class',
  //   'image_component_wrapper image_two-images'
  // );

  // // Move every other image to the new div wrapper
  // const images = originalDiv.getElementsByClassName('newsletter_image');
  // for (let i = 0; i < images.length; i++) {
  //   if (i % 2 !== 0) {
  //     imageWrapper.appendChild(images[i].cloneNode(true));
  //   }
  // }

  // // Append the new div wrapper to the new div
  // newDiv.appendChild(imageWrapper);

  // // Append the new div to the original div's parent
  // originalDiv.parentNode.insertBefore(newDiv, originalDiv.nextSibling);

  // // Remove every other image from the original div wrapper
  // while (originalDiv.getElementsByClassName('newsletter_image')[1]) {
  //   originalDiv.removeChild(
  //     originalDiv.getElementsByClassName('newsletter_image')[1]
  //   );
  // }

  // Serialize the modified DOM back to HTML
  const serializer = new XMLSerializer();
  const modifiedHTML = serializer.serializeToString(doc);

  // Save the modified HTML content to a new file
  fs.writeFileSync(`./modified_html/${key}.html`, modifiedHTML, 'utf-8');

  console.log(`${key}.html has been successfully created.`);
});
