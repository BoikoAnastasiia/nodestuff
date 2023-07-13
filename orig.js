const download = require('download');

const st3keyArray = [
  '0D046AF7EFCD08559C0F527CBA9E7556',
  'E81C41911C3AA55B9357A8DAC6AAF7FD',
  '894EE58DA16254EF7C1A3DF04BB049A1',
](async () => {
  await Promise.all(
    st3keyArray.map((file) =>
      download(
        `https://platform-gipper.s3.amazonaws.com/presets/${file}.json`,
        './presets'
      )
    )
  );
})();
