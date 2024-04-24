const download = require('download');

const st3keyArray = [];
async function downloadWithRetry(file, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      await download(
        `https://d1txs74qdv0iht.cloudfront.net/presets/${file}.json`,
        './presets'
      );
      console.log(`Downloaded: ${file}`);
      break; // Break the loop if download is successful
    } catch (error) {
      console.error(
        `Failed to download ${file}, attempt ${i + 1}/${retries}: ${
          error.message
        }`
      );
      if (i === retries - 1) throw error;
    }
  }
}

(async () => {
  try {
    await Promise.all(st3keyArray.map((file) => downloadWithRetry(file)));
    console.log('All files downloaded successfully');
  } catch (error) {
    console.error('Some files failed to download:', error);
  }
})();
