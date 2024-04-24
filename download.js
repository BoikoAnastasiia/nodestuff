const download = require('download');

const st3keyArray = [
  '43C20D1759E86E85AD230919F7B8E69F',
  'F6F62BD58FE068E24EA59F5832E155F0',
  'BDA9CC5510874E3273B74991D685EE9E',
  'A8F085839589292EE49A6776FFDA2686',
  '67D1FC000513360BC0EC90F96FC15EC4',
  'D0A54E22F081B80B1091B52B8C056EDD',
  '7D7B21F243491F84B74D3E9FEA593CE6',
  'mERdBIWucPxO8tYUeqLPPGEa',
  '9CF6DB3084B7B5F944D4B49BA6411943',
  'EF01F264E1B01F17A2933536FD993B8A',
  '3C85FEB89DB79BF2028F16EDFA8127FF',
  '9096889F47A49BB07C1FA5BA1A62F718',
  'AB7BAC17FADBDB693227993335D539C8',
  '9866D7C5986242374D6A3AB0B6F23EAD',
  '80B047ABB785F46F211D4CF57C6D265D',
  'E1A349D4EC264D62BAA590C5DE057D85',
  'weRdN3gQL5dJjVEcLNSeLGsv',
  'D740D7C8AE25CB5E9F5E53E31CC74CC7',
  '3874BC2582AAC0FF524A08DF70386DAB',
  '22144BD73CAD772CF18CAD17505BBE06',
  'C24EE27DA5F387A3B3CEB813F4E90FA1',
  'DAB4610D98CDCB5A9AF0612A0134937A',
  'D3457E34D8D1E985426AE90C5DFB0586',
  '23DD5F076863D9855329F208A18A9943',
  'E0F0465E4F8426421DB5F08540E74AA3',
  'F2CC5BB93C9E24C252F8D7380D1CDB57',
  '6625B7589F841C7C0F3A376A89A2AF5E',
  'AAD263AF7259667BA2FAC8F9D26EADE7',
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
