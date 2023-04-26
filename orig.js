const download = require('download');
const https = require('https');

const s3keyArray = [
  '6D2316ADD411AF182EA5818006A1E153',
  '8F75EC7D95595D083E63E33A834594D5',
  'testfordownload',
];

const formats = ['png', 'jpeg', 'jpg'];

(async () => {
  try {
    await Promise.all(
      s3keyArray.map((url) => {
        formats.map((format) => {
          https.get(
            `https://platform-gipper.s3.amazonaws.com/${url}.${format}`,
            (response) => {
              if (response.statusCode !== 200) {
                console.error(`Failed to load ${format}, for: ${url}`);
                return;
              }
              download(
                `https://platform-gipper.s3.amazonaws.com/${url}.${format}`,
                'logos'
              );
            }
          );
        });
      })
    );
  } catch (error) {
    console.error(error);
  }
})();
