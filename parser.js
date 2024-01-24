const fs = require('fs');

const st3keyArray = [
  '302BED83BA1AB0302EC0B78489613AE6',
  'FFB09EA7CC9E365204ABC5644D3902A6',
  '8B78986249F8AB8D26103BB045259DCC',
  '3697F25D5B7B0AE954307112D9B5EC7D',
  '71913D6D4D4737E1134D4A8C0B721255',
  '6E59E58B958403C929528BDB967965AE',
  '81CBC3197C2E4B633F7C94E7EC909F0C',
  '85A67F53BDC6552CF7B914537D034CF3',
  '29BF8D161F991A9A10955F1A6E5B896B',
  'AEF0708B9E13C319F21E10E9D41CAD93',
  '897102E7931533016E1DB70DBEE50530',
  '273C7408541531C5BB7D2578B87B112E',
  '08ECA52623D0BF8C5D5C303A03792B5B',
  '97D3F1804562881CCEAF54D52599FAD6',
  '5433DE39F60004A3E76C564EF13029D5',
  '9D779592A38144CACF119FFACAB56034',
  'D9F32E917E73C87C47C673668F83E0AE',
  'D149AFD184BB65D75749E1D8015C23E8',
  'C0C59AB90A779AA2BEF6D1A3D31776F6',
  '5C7C75F997EC65FC22EAAC497D9FB818',
  'DE88B352C497841532C03A37D6629202',
  '1E401546F42C9CA5160A9B068E695589',
  '12A1AA7B9930A24FDF5184AB7CD33304',
  'B27EBBC87EFDCA308C33662028B1C6E2',
  'C44F837E9597E2D43BE25E65F4C65107',
  'F0BC330B439334994AAAECE1076357C3',
  'B4474F0F0709DC9BDDEE31FCC24D7705',
  '363EF01893B8BF43667788DF0FD71FE9',
  '72A52876C3233C8F4C048034B6F4FD52',
  'F0015AC18B39DA8A1E178544F8FE6852',
  '10D63E9B6823C9BA8041FEA9025C8631',
  '9E97F8E184A986E3E70C7111C1997AD6',
  'A25CD6B08F69DCDDCC413409F29C0455',
  '9944A41CE1586AF52E720F32DC3839CD',
  '0E83E6557DC87F8304EA065B68FF6366',
  '7E777DE8350894359EA4721C78D28D6D',
  'D5DC0DA5A02B2D89AE5A204FF08E61AF',
  'EF65326428A82437FCAF93D50853F695',
  'F8D9CF96AABFE341626D9E5867ED1092',
  '2C5A3A0DBE6129FE4D5B86588271F012',
  'E79A552A9409A8B0EC21FC606D5263EA',
  '3F7FD7E70E7D29052C229041A316C761',
  'A55E5036514DBFE29086FE12BC59D015',
  '9A80104C26F72DBA9482216DE2DA93ED',
  'E656282EB0A082A132A6B524474E769B',
  '055D9BFDACE537B130122C5C5F1B61D9',
  '890664F0BCD0B5B2B7F42E19D86B3ECE',
  '3E3229B1264EC8BE421B2B56077B6D5B',
  'AF8B98E3D89308B9AF08B73B46C8AE8D',
  'B2953342F01416FFDF22043CD261FF3E',
  '8F5DC1E40DF4F66ADE394F9EB808CCE3',
  '3F317891D16371E583E93FF61538BB0B',
  'F6038D37A15E0A3D53029449B0C5B3C3',
  'F21AF85E4A67CE9B60F2040EE080AE20',
  '23C5D3281842FB6943314832D902662C',
  '106409B2C29611CF5C952EAEBF6A3DDA',
  '9E152C39674F79CDA21E92DC49D3EB49',
  'F95225E3DB237FA2358356A98BAE000D',
  'BAF7EEBF5401EBE45D8D745138F54575',
  '89CB1FAFDC49EEFE4E0A82A903741BC5',
  '7ADB4D4F2AB6905A3618E8E47CDEA983',
  '10ECF0048575F2E63F4C577DC52F6530',
  '2F01E5735C90084875896E2E34AC3C2A',
  'E00A4D20FBFD0BC5FF7CE92E3AB79773',
  'B2D644E91122AF4276B86DC19C3FD624',
  '16289EE64AF9E769BCF174054A276ED0',
  '9C7347D6552BF340BDD0A229C020E2B8',
  '60FF8D1A6F12D920ABE2F49E724432AE',
  'A6844B11893CC4B8212AA2AB642EBDAC',
  '31C73A6BD6BF91592E6020A43D2EF5DB',
  '1FE0A138F3509FD9887F91EF344DBFBA',
  '4D54256372BF95FC350F40DDBBCE59B4',
  '0CD164AFADD47F77E98F93A0C7E73BB6',
  '7D9816A5B1271BD450E8D375088F903D',
  'C785B56009E251353229EF50F7B68490',
  '09FDDA6B79E5B00D882A0104D20D1A98',
  '147636825FCF365B484C585BA50D58AA',
  '8EF974AEBA65EB158AE3177DB93D0262',
  '5E5498B8BF40C737A7022B3954B727EF',
  '8E5F995D9A1E3A2786863E7123B7E03F',
  'C2068EFFE0FB5333B3FCF1460C44B98F',
  'F9BA644D8293C2E738BA31948932CC64',
  '0084A92C53D4D8341DDAD2D56EB27106',
  'AD8F0BDF9B30AAA049669D9C7765D30C',
  '0A15664A48C70FFA03D7CC20C0A77867',
  '01E0BA5B90C9BEB96A44129B6D3EC74B',
  '4B5160440FFFA38349D0C70C8B2BAD60',
  'DFA84D4634B133006C211FEE0ECBF3E8',
  'CBCEF7F69E827CCE7DA19F16DEE3C774',
  'FCE3D25E6AFD2E39609076E29A395CFD',
  'B42E745242B7C0CAA2C113FB9B5421D1',
  'B2AF60C1644467A2BA071CDCA66DCA15',
  'D844EE5433EA241A2DA478589768229E',
  'DA9F7D083C37A3721D24EC6D59F7D6B7',
  '3ABB25B09FC5EFF8B7D7035253551D61',
  '51371C6A22910EECFA3102314C85890B',
  'BF125D8F937DBA12EFE88852BD9A29EE',
  '2625F41F16980A949DE1FA99A70FFCF6',
  '8AEBAB53CCBEE9367B5AEFD0DC34B1AC',
  '72548E8E4C8DDE327EE01AD30D831C09',
  'B8BAE7CBE4321183DA79FE443FE3F609',
];

for (let i = 0; i < st3keyArray.length; i++) {
  const key = st3keyArray[i];
  const data = fs.readFileSync(`./newsletters_presets/json/${key}.json`);
  const json = JSON.parse(data);

  const changeImageWidth = (el) => {
    if (el.singleTypeSize === 'l') {
      el.singleImageWidth = 70;
    } else if (el.singleTypeSize === 's') {
      el.singleImageWidth = 30;
    } else if (el.singleTypeSize === 'm') {
      el.singleImageWidth = 40;
    }
  };

  if (json.content) {
    for (let index = 0; index < json.content.length; index++) {
      const el = json.content[index];
      const paddings = {
        paddingRight:
          el.backgroundStyling?.paddingRight ?? el.backgroundStyling?.paddingLR,
        paddingLeft:
          el.backgroundStyling?.paddingLeft ?? el.backgroundStyling?.paddingLR,
        paddingTop:
          el.backgroundStyling?.paddingTop ?? el.backgroundStyling?.paddingTB,
        paddingBottom:
          el.backgroundStyling?.paddingBottom ??
          el.backgroundStyling?.paddingTB,
      };

      el.backgroundStyling = { ...el.backgroundStyling, ...paddings };
      delete el.backgroundStyling.paddingLR;
      delete el.backgroundStyling.paddingTB;
      delete el.paddingLR;
      delete el.paddingTB;
      delete el.image;

      if (el.componentType === 'ImageComponent' && el.gridType === 'single') {
        el.gridType = '1';
        changeImageWidth(el);
        delete el.singleTypeSize;
      }

      if (el.componentType === 'LogoComponent') {
        if (el.logoSize === 'l') {
          el.logoWidth = 60;
        } else if (el.logoSize === 's') {
          el.logoWidth = 30;
        } else if (el.logoSize === 'm') {
          el.logoWidth = 40;
        }
        // You can add more conditions if needed

        delete el.logoSize;
      }

      if (el.componentType === 'ImageComponent' && el.gridType === 'full') {
        el.gridType = '1';
        el.singleImageWidth = 100;
        delete el.singleTypeSize;
      }

      if (el.componentType === 'ImageComponent' && el.gridType === '2x2') {
        el.gridType = '2';
        delete el.singleTypeSize;
        el.singleImageWidth = 50;
        const el2 = JSON.parse(JSON.stringify(el));
        el.images.splice(2, 2);
        el2.images.splice(0, 2);
        el2.id = el.id + '-2';
        json.content.splice(index + 1, 0, el2);
      }

      if (el.componentType === 'ImageComponent' && el.gridType === '3x3') {
        el.gridType = '3';
        delete el.singleTypeSize;
        const el2 = JSON.parse(JSON.stringify(el));
        const el3 = JSON.parse(JSON.stringify(el));
        el.singleImageWidth = 50;
        el.images.splice(3, 6);
        el2.images.splice(0, 3);
        el2.images.splice(3, 3);
        el3.images.splice(0, 6);
        el2.id = el.id + '-2';
        el3.id = el.id + '-3';
        json.content.splice(index + 1, 0, el2, el3);
      }
    }
  } else console.log('download', key, '.json');

  const newJson = JSON.stringify(json);

  fs.writeFileSync(`./newsletters_presets/modified/${key}.json`, newJson);

  console.log(`Done processing ${key}`);
}
