const download = require('download');

const st3keyArray = [
  '3231296CDAD05FEEF51B523A1DBDACD9',
  'BA151ED808E3BC227014FE996F3EFF15',
  'EC96828F649555D71448DF9C17D2E802',
];
(async () => {
  await Promise.all(
    st3keyArray.map((file) =>
      download(
        `https://d1txs74qdv0iht.cloudfront.net/presets/${file}.json`,
        './presets'
      )
    )
  );
})();
