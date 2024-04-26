const download = require('download');

const st3keyArray = [
  'E64CD00BC24900FF94DF220FC2927ECF',
  '39F6F4F5002F14E57581ACAEE81F6EE1',
  'WghKFhkiQc7GCh8l6iwWjp9F',
  '4079BE9976E94E7C048E59EB808EEA64',
  'lGRko3QqaTkcDPThqZnlA2dN',
  '5CE5B7D2294A5723EC1A741DDC6CB341',
  '45D78EE84042C6C6460A80FBB860E63D',
  'A6ViEIOYk9XRPuxqYDhvIRXw',
  'T0f0bPpy9hICs5453ocysB10',
  'DiUS8eJAGdQZoEZvNzTYXcpl',
  '62ipB4KXO2IV4XrlHyvOXN2x',
  'FB4856D60D309B65058D3780F32780BD',
  'aqD1kcF6Nv3nSBkBBC7rGSHd',
  'tJhSScb5mlkHQH70f7gmOGAu',
  'PL7BmgcqCUgow5DhpRWxYT0l',
  'F92418ED49BA242415C1C3427CB065C9',
  'AA581543F1204D65923921D54B13F55C',
  'B781362FE04D0554221675277608CDC8',
  'ddd19e050e0e4c7361875d398a70057a',
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
