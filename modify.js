const fs = require('fs');

const st3keyArray = [
  'tYWEMHpE0vsooSx90u10d98D',
  '89D701C74D6C265F930348F6964B123F',
  '4weSnHjOGnd4WmHxIvQjCFbF',
  '325B89738A27A2A0F1F05A863B30C6C1',
  'E0AACF1EC7A7DCC9754B27A922B0F3D8',
  'A7450DE68F185D9FDD3B6DF0E8D38815',
  '22FB889F05D4998AECFDF4DEF8316F2D',
  '3EEA5AA5EC9B819A28923E046948EC9C',
  'E27FE2FD4ED13BB0BDBA2FB679071B22',
  '7FD6762C267516AB5ADD0D19F81F82CE',
  '02FCFDD19A4E71F8CE4DAF029782DD5F',
  'hvFXTLxqEx2AuSvz79qICO6r',
  'uOt6WR9yGjlik46pU2n82pKr',
  'P8j1W2NdNyeIdmJ0nBupDjgB',
  'YbbcHK5AAkmSOJxHknuhoLzK',
  'm2qVyM3BRg5mFKx9dTmvAoTV',
  'Dags1z7WOTnBpedKynEdNR0Q',
  'vVFKcxruFNRUx9LkPfw4Rz6Z',
  '793D39A17E9C79E45330A1A4C2BE384F',
  'PtZnWggplfVRDC8AxvsDLJgT',
  '2A96F06352E45BCB12C272F469962FF1',
  '897751AA7873D2F9ACE979E7D3A7B7EF',
  '575962F321791B5EBA359BFB5623951A',
  'oKUBcyWVWu7csdEXxRBy2zoj',
  'HsU2b0OB6iHQdiTFqZtHtp3u',
  '20BEA213BB2C1C19D7AA0FF48CC246D3',
  'AD98B3ECD4750FB14DB2249696187871',
  '6C4845D502C590B8D5CF5CA91C6335CB',
  '01DC709ECE169B87FC5FB8FE77F25B61',
  'F477F19A2253C0B4C4095EB8F8614AB5',
  '49D5E2BB2D5F4F122F47CE4860F54A9F',
  'uTK1vX05JggWh8Mw5ajhNeRE',
  '4457AFFFB3485E54D49BE781E0BF4B1F',
  'd9MbnaGul0TLZsmdFNsVaWz4',
  '0F048AC8FA25105CE5396DBAC8D078F6',
  'DF5A0EB53DB2093FF23CF8385CFD59AB',
  '1MiMS7too1csG5BdlrjFXcvR',
  '638B5A1BADAD591EE9BE36D99882728F',
  '7BaQTqjTC3KDhPvp1QxrSoqe',
  'DB01FB3CDDEBADDB35B1159F172371FF',
  'IKDnF6weKOqGkJVqRAvPdYBM',
  '260F58951E2B54ACD61BBD30D80C1F2D',
  '8igR1VvM9c8uVRdgZac5wTPE',
  'B3D2067301CFA65D4C3012DFC036D0C7',
  '8BC799CE67AD43EC4A221299D3DEC450',
  'Qb6Zcs69eKXfzX2V5ZXX5THQ',
  '14EF42948DBE4620B8C94CBE53F61E8A',
  'jfRKAcJKRa6musbtRS3jZ0bT',
  'hYKfX43jRRmxCVTQNAmCm3pY',
  'Diwd918wdz5KI72JAVAtNj8E',
  '5BAlA0vu9f7Rt1QYipmGCoLM',
  'F06030714D91719FECEA1D21A910B207',
  '328C1F628794CFBA3626D83743F023E9',
  'tNELyCpDiteGoSU4jiiUOinL',
  'iwbOAz6ldPl1jDUdT5l2DL66',
  'B1EAC8076EDECFBB148FF13C88995E81',
  '8FD9FFCA03515F295DF661F7275ED889',
  'B01240CAC7AC23D6076674501A725E89',
  'MNgoWgaHH9GwkAIUo2cyUYVq',
  'DBAB3CC3C9742E769306ED7700FAABBC',
  'E4A5D3532B20B6C57AB1E58F5A112459',
  'Ze0ATgkTno7ZMYXl3dpKFHAB',
  '20D3E2B4175BED996D5B4A7566C18063',
  'BKka0LLDLq0JJ8r7KbnFpgAG',
  '4296BB10F517ED4E7EFF5B0E01E41B71',
  'RcacN5RDlXpQ4wDAwZIrh917',
  'LKpaVHx7LtfbgoDJ3Elqajc9',
  '3EC71FDB98939DFBEA529533744F0624',
  '8MLWpzQ0nb315RCvibFL99Bq',
  '050C515A4C0C766E7A75A1DEC82AC823',
  'DCD99169A79066A6E0E440CB0A5FDD21',
  'C2139B128D3325846841EA93651FDBFB',
  '1D3686553239BDE084FEEF388F4C86A2',
  'B9YcQ1y7SQUDn7ZIZU4Wncrk',
  '6953F125746C3BFEFD71869500684506',
  'Q8lb9IOSvwP64CogGsz3ZYKj',
  '511a4dd7a99478554f645acf945da82d',
];

st3keyArray.map((key) => {
  const data = fs.readFileSync(`./presets/${key}.json`);
  const json = JSON.parse(data);

  if (json.body) {
    json.body.objects.forEach((el, index, array) => {
      if (el.id.includes('bg_glitch_')) {
        el.className = 'staticMedia';
        delete el.appliedFilters;
        delete el.filters;
      }
      if (el.id.includes('gradient_panel_group')) {
        el.objects[0].className = 'staticMedia';
        delete el.objects[0].appliedFilters;
        delete el.objects[0].filters;
      }
    });
  }

  const newJson = JSON.stringify(json);

  fs.writeFileSync(`./presets/${key}.json`, newJson, (err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log(`done ${key}`);
});
