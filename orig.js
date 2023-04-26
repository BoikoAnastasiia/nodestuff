const download = require('download');
const fs = require('fs');
const https = require('https');

const s3keyArray = [
  '6D2316ADD411AF182EA5818006A1E153',
  '8F75EC7D95595D083E63E33A834594D5',
  'testfordownload',
];

(async () => {
  try {
    await Promise.all(
      s3keyArray.map((url) => {
        https.get(
          `https://platform-gipper.s3.amazonaws.com/${url}.png`,
          (response) => {
            if (response.statusCode !== 200) {
              console.error(
                `Failed to load png, status code: ${response.statusCode}`
              );
              return;
            }
            download(
              `https://platform-gipper.s3.amazonaws.com/${url}.png`,
              'logos'
            );
          }
        );

        https.get(
          `https://platform-gipper.s3.amazonaws.com/${url}.jpg`,
          (response) => {
            if (response.statusCode !== 200) {
              console.error(
                `Failed to load jpg, status code: ${response.statusCode}`
              );
              return;
            }
            download(
              `https://platform-gipper.s3.amazonaws.com/${url}.jpg`,
              'logos'
            );
          }
        );

        https.get(
          `https://platform-gipper.s3.amazonaws.com/${url}.jpeg`,
          (response) => {
            if (response.statusCode !== 200) {
              console.error(
                `Failed to load jpeg, status code: ${response.statusCode}`
              );
              return;
            }
            download(
              `https://platform-gipper.s3.amazonaws.com/${url}.jpeg`,
              'logos'
            );
          }
        );
      })
    );
  } catch (error) {
    console.error(error);
  }
})();
