const download = require('download');

const st3keyArray = [
  'C6F813BD157F0B0044495781582E70CA',
  '7BFB02968A87200724C81D388B646306',
  'b4b8424ded4ac6eb478f2c4891a91d47',
  // 'F285A9059F368F2A7E8983ED158C3A53',
  // '5AB447C8AFED843D0254C1FF96A9F8AD',
  // '439B11AFE354AFC14CC9969244179A07',
  // '7k4RvzDcSc2Fi5Y7zGG1mj39',
  // '523QAzKJdqjEJUpABSZYBLkj',
  // 'AO6vLZ4jwNklfFOpDdqvNVQH',
  // 'QDzWouCud1dZUwKCNqYhht1P',
  // '29X320oBO4aCZ7mWMEWzyzM1',
  // 'A7AEDFA0ACAD42ADD8A28C0133992D8C',
  // 'C01DEBF100B3C75AF3282EBB8BDAA967',
  // 'E9A058E6518A6C37274062752103E1A9',
  // '27E9D9CD0BD2CA0C2ECE0335FED5F278',
  // '9F88047DBAACAB6C961B70F19539484C',
  // 'ABB05E62757E2D0934510C7BEC201DFD',
  // 'sZk3toknBSdaRfIM3bDroE85',
  // 'E694328B89F481B10D6FEE14F23EFF40',
  // 'vq5v07ITUI2eaFLxMv9fEh9R',
  // '806FA3E889A93C4538CB9BDC55E995F1',
  // '070Vr9MBfiGWrKPCFbUUtpgY',
  // 'IJwUok27PoPz412Nvo8QRnrS',
  // 'gHrjFQTiXIKJhlBen4CZu6OS',
  // 'XOihQ37PlNedViqaaoxISrsN',
  // 'EAVkR3zlNWq4hMJIgkFhxzp0',
  // 'F1paBWcvzblMYnspfFKdQWKR',
  // '78Uc0IjF7fd4jfLGQYNRTYt2',
  // '461D85C45709FF6F522F5862B013B8E6',
  // '5173FAF1A9CCB15B40F0D60971A76E42',
  // '933233112D64F42F4BAFDF9E68D3541E',
  // '5C45402E332B9887BB19D2B56C6EBCD1',
  // 'F285A9059F368F2A7E8983ED158C3A53',
  // '5AB447C8AFED843D0254C1FF96A9F8AD',
  // '439B11AFE354AFC14CC9969244179A07',
  // '7k4RvzDcSc2Fi5Y7zGG1mj39',
  // '523QAzKJdqjEJUpABSZYBLkj',
  // 'AO6vLZ4jwNklfFOpDdqvNVQH',
  // 'QDzWouCud1dZUwKCNqYhht1P',
  // '29X320oBO4aCZ7mWMEWzyzM1',
  // 'A7AEDFA0ACAD42ADD8A28C0133992D8C',
  // 'C01DEBF100B3C75AF3282EBB8BDAA967',
  // 'E9A058E6518A6C37274062752103E1A9',
  // '27E9D9CD0BD2CA0C2ECE0335FED5F278',
  // '9F88047DBAACAB6C961B70F19539484C',
  // 'ABB05E62757E2D0934510C7BEC201DFD',
  // 'sZk3toknBSdaRfIM3bDroE85',
  // 'E694328B89F481B10D6FEE14F23EFF40',
  // 'vq5v07ITUI2eaFLxMv9fEh9R',
  // '806FA3E889A93C4538CB9BDC55E995F1',
  // '070Vr9MBfiGWrKPCFbUUtpgY',
  // 'IJwUok27PoPz412Nvo8QRnrS',
  // 'gHrjFQTiXIKJhlBen4CZu6OS',
  // 'XOihQ37PlNedViqaaoxISrsN',
  // 'EAVkR3zlNWq4hMJIgkFhxzp0',
  // 'F1paBWcvzblMYnspfFKdQWKR',
  // '78Uc0IjF7fd4jfLGQYNRTYt2',
  // '461D85C45709FF6F522F5862B013B8E6',
  // '5173FAF1A9CCB15B40F0D60971A76E42',
  // '933233112D64F42F4BAFDF9E68D3541E',
  // '5C45402E332B9887BB19D2B56C6EBCD1',
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
