const fs = require('fs');
const cheerio = require('cheerio');

// Read the HTML file
const htmlContent = fs.readFileSync('your_file.html', 'utf-8');

// Load HTML content using Cheerio
const $ = cheerio.load(htmlContent);

// Select the original div with id="image_component-2_content"
const originalDiv = $('#image_component-2_content');

// Create a new div with a modified ID
const newDivId = 'image_component-2_content-2';
const newDiv = $('<div>', {
  id: newDivId,
  class: originalDiv.attr('class'),
  style: originalDiv.attr('style'),
});

// Create a new div wrapper for the images
const imageWrapper = $('<div>', {
  class: 'image_component_wrapper image_two-images',
});

// Move every other image to the new div wrapper
originalDiv.find('.image_component_wrapper img:odd').appendTo(imageWrapper);

// Append the new div wrapper to the new div
newDiv.append(imageWrapper);

// Append the new div to the original div's parent
originalDiv.after(newDiv);

// Remove every other image from the original div wrapper
originalDiv.find('.image_component_wrapper img:even').remove();

// Save the modified HTML content to a new file
fs.writeFileSync('modified_file.html', $.html(), 'utf-8');

console.log('HTML file has been successfully modified.');
