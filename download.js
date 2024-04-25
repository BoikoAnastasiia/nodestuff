const download = require('download');

const st3keyArray = [
  'oJA8X0F5KpA5RWp7VziJjN2o',
  '0D1360309E98DD86A97CC824D39A537F',
  '30495DC358DC957E8733DBF9B6FDE561',
  '92178B614EB9801EA7BE2464072A3291',
  '48187B2300A5D89C6044BABBA8E52CB1',
  '4FDF2051BCD8263322E021EF67A37E01',
  'KxSdgavX0XXU1C4pGuxAtfPK',
  '626CCE894418D828EFB099D86FD7A060',
  '171E041ACFF32514332B113070677A70',
  'g1aUQF7L5K8weH0a4qt6Zk4n',
  '6C584EBC00A3C1DBFBB69A5EF245A812',
  'cd88bG7Nz3hWHuM84VvHuaWP',
  'WtxEbdfD9D9x5zD9lb0orsKm',
  '14B95D74717DD984EFB3DFCB15536610',
  'A98ABE3EFE71687E17728044B82577CF',
  'F58FFEB81F54554A4FC43566BCBE35BE',
  '1F7AC8D0DF1877C93099AD981046575F',
  '76071E38DD17D8A958FD869AB948155B',
  'C4A9D408E45DC918131E3479755C0F93',
  'MuH16vjk1LyB808zLO4MuSjd',
  'FctfYFU4iQqrl1dfwGV5p5zB',
  'ksuOrZ2J7AWXYeSVXNNi5T2c',
  '1F5278D4FCF23E9998227B6BC05D66EF',
  '146BC3F7C2EBB7DC5F43A0662B67B57B',
  'iIq2LzN7CiAEaZh34U7STHaU',
  'C099D6DFEA340E955FB4EFB53099ADC6',
  'A2251E65FDCCD48E68EB9FC9002A543C',
  '7FA0F2EE3A03AB78FD60B30AFB0B16EE',
  '9ts2pw5R0z3eUafEA6ZLUtgN',
  '7021C95020DD8C62D034FB0948DCA0AA',
  '4B76C2D4E32DD0B05006475254CA1309',
  '3470147B0CFBFD40CE240C558C8170B9',
  '660001BAA211B755E180BDCC9AD35243',
  '6A3FAE3B22BB5BB0BB946AD71340ADD7',
  '973ae16ff71e9dfe3dea522691762ed6',
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
