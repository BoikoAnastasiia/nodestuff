const download = require('download');

const st3keyArray = [
  '1CBAFC6B263E8C120EFC0479BA1962A2',
  'B6DA973113589F2560C78018A25B7F25',
  'E79B551E9890AE0DF2E5689694521366',
];
(async () => {
  await Promise.all(
    st3keyArray.map((file) =>
      download(
        `https://platform-gipper.s3.amazonaws.com/presets/${file}.json`,
        './presets'
      )
    )
  );
})();
