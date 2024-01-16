const fs = require('fs');
const { DOMParser, XMLSerializer } = require('xmldom');

const st3keyArray = ['single', 'cat', '0A0DA3C0745EF3060201BCDC40DFC0BF'];

st3keyArray.map((key) => {
  // Read the HTML file
  const htmlContent = fs.readFileSync(
    `./newsletters_presets_dev/${key}.html`,
    'utf-8'
  );

  // Parse HTML content
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');

  const allElements = doc.getElementsByTagName('div');

  // handle single images
  const singleImagesArray = Array.from(allElements).filter((element) => {
    return (
      element.getAttribute('class') &&
      element.getAttribute('class').includes('image_single')
    );
  });
  const oldSingleImagesArray = singleImagesArray.filter(
    (el) => !el.getAttribute('style').includes('width')
  );

  oldSingleImagesArray.forEach((divElement) => {
    const imgElements = divElement.getElementsByTagName('img');

    // Check if there are any img elements
    if (imgElements.length > 0) {
      const imgClass = imgElements[0].getAttribute('class');

      // Check the class of the img element and set style accordingly
      if (imgClass.includes('small')) {
        divElement.setAttribute('style', 'width: 10%');
      } else if (imgClass.includes('medium')) {
        divElement.setAttribute('style', 'width: 20%');
      } else if (imgClass.includes('large')) {
        divElement.setAttribute('style', 'width: 30%');
      }
    }
  });

  // handle full image
  const fullSizeImagesArray = Array.from(allElements).filter((element) => {
    return (
      element.getAttribute('class') &&
      element.getAttribute('class').includes('image_full')
    );
  });

  fullSizeImagesArray.forEach((div) => {
    div.setAttribute('style', 'width: 100%');
    div.setAttribute(
      'class',
      'image_component_wrapper image_single image_alignment_center'
    );
  });

  // handle 2x2 images
  const imageComponentArray = Array.from(allElements).filter(
    (div) =>
      div.getAttribute('class') &&
      div.getAttribute('class').includes('image_component')
  );

  const allImageDivArray2x2 = imageComponentArray.filter(
    (imageComponentDiv) => {
      // Check if the image_componentDiv contains nested divs with class image_grid-2x2
      const nestedGridDivs = Array.from(
        imageComponentDiv.getElementsByTagName('div')
      ).filter(
        (nestedDiv) =>
          nestedDiv.getAttribute('class') &&
          nestedDiv.getAttribute('class').includes('image_grid-2x2')
      );

      return nestedGridDivs.length > 0;
    }
  );
  console.log(allImageDivArray2x2);

  // Serialize the modified DOM back to HTML
  const serializer = new XMLSerializer();
  const modifiedHTML = serializer.serializeToString(doc);

  // Save the modified HTML content to a new file
  fs.writeFileSync(`./modified_html/${key}.html`, modifiedHTML, 'utf-8');

  console.log(`${key}.html has been successfully created.`);
});
