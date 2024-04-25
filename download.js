const download = require('download');

const st3keyArray = [
  '5A9FB1355175E545B60C92BA3A79A8F9',
  'E21D41E8811BA8201FC9E71852503999',
  'FA66F67B1CEDF79997AF9B8E1317A676',
  '552A8B01532C70B1DEA248DCBCE86F24',
  '7670616A1138D734E6345D5F8B9CAC1D',
  '694199F02F02EF048E5C23EA1FE688A8',
  '7DAD62CB684CC90B658D1E7A74110802',
  'ef7959534c80246742d055cad038b5b7',
];

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
