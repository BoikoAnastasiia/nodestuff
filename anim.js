const fs = require('fs');

const st3keyArray = [
  'template_eight_hundred_seventy_four',
  'template_eight_hundred_seventy_three',
  'template_eighty_five',
  'template_eighty_six',
  'template_five_hundred_eight',
  'template_five_hundred_eighteen',
  'template_five_hundred_fifteen',
  'template_five_hundred_fourteen',
  'template_five_hundred_nineteen',
  'template_five_hundred_seven',
  'template_five_hundred_seventeen',
  'template_five_hundred_six',
  'template_five_hundred_sixteen',
  'template_five_hundred_thirteen',
  'template_five_hundred_twenty',
  'template_five_hundred_twenty_one',
  'template_four_hundred_eighty_eight',
  'template_four_hundred_eighty_five',
  'template_four_hundred_eighty_four',
  'template_four_hundred_eighty_nine',
  'template_four_hundred_eighty_seven',
  'template_four_hundred_eighty_six',
  'template_four_hundred_eighty_three',
  'template_four_hundred_eighty_two',
  'template_four_hundred_fifty_five',
  'template_four_hundred_fifty_four',
  'template_four_hundred_fifty_three',
  'template_four_hundred_forty_five',
  'template_four_hundred_forty_four',
  'template_four_hundred_forty_seven',
  'template_four_hundred_forty_six',
  'template_four_hundred_forty_three',
  'template_four_hundred_forty_two',
  'template_four_hundred_ninety',
  'template_four_hundred_ninety_one',
  'template_four_hundred_ninety_three',
  'template_four_hundred_ninety_two',
  'template_four_hundred_seventy',
  'template_four_hundred_seventy_eight',
  'template_four_hundred_seventy_five',
  'template_four_hundred_seventy_four',
  'template_four_hundred_seventy_one',
  'template_four_hundred_seventy_seven',
  'template_four_hundred_seventy_six',
  'template_four_hundred_seventy_three',
  'template_four_hundred_seventy_two',
  'template_four_hundred_sixty_eight',
  'template_four_hundred_sixty_nine',
  'template_four_hundred_sixty_seven',
  'template_ninety_eight',
  'template_one_hundred',
  'template_one_hundred_five',
  'template_one_hundred_four',
  'template_one_hundred_two',
  'template_one_thousand_eight_hundred_forty_five',
  'template_one_thousand_eight_hundred_seventy_four',
  'template_one_thousand_nine_hundred_fifty_five',
  'template_one_thousand_nine_hundred_fifty_six',
  'template_one_thousand_one_hundred_four',
  'template_one_thousand_one_hundred_nineteen',
  'template_one_thousand_one_hundred_twenty',
  'template_one_thousand_three_hundred_thirty_eight',
  'template_one_thousand_three_hundred_thirty_nine',
  'template_one_thousand_three_hundred_thirty_seven',
  'template_seven_hundred_eighty',
  'template_seven_hundred_eighty_one',
  'template_seven_hundred_eighty_two',
  'template_two_thousand_five_hundred_thirty_two',
  'template_two_thousand_four_hundred_forty_six',
  'template_two_thousand_seven_hundred_thirty_three',
  'template_two_thousand_six_hundred_eighty_two',
  'template_two_thousand_six_hundred_forty_eight',
  'template_two_thousand_six_hundred_ninety_three',
  'template_two_thousand_six_hundred_sixty_nine',
  'template_two_thousand_three_hundred_fourty_one',
];

st3keyArray.map((key) => {
  const data = fs.readFileSync(`./anim/${key}.json`);
  const json = JSON.parse(data);

  json.additionalElementsHidden = true;
  // if (json.body) {
  //   json.body.objects.forEach((el, index, array) => {
  // const detailIndex = array.findIndex((el) => el.id === 'add_info');
  // if (el.className === 'multiGroup') {
  //   delete el.objects[0].clipPath.crossOrigin;
  //   delete el.objects[0].clipPath.src;
  //   el.objects[0].clipPath.type = 'path';
  //   el.objects[0].clipPath.scaleX = 1;
  //   el.objects[0].clipPath.scaleY = 1;
  //   el.objects[0].clipPath.width = 375;
  //   el.objects[0].clipPath.height = 325;
  //   el.objects[0].clipPath.path = [
  //     ['M', 280.581, 0],
  //     ['L', 92.3886, 0],
  //     ['L', 0, 161.888],
  //     ['L', 92.3886, 325.068],
  //     ['L', 280.581, 325.068],
  //     ['L', 375, 161.888],
  //     ['L', 280.581, 0],
  //     ['Z'],
  //   ];
  // }
  //     if (el.id === 'media') {
  //       el.clipPath.type = 'path';
  //       delete el.clipPath.crossOrigin;
  //       delete el.clipPath.src;
  //       delete el.clipPath.orderIndex;
  //       el.clipPath.path = [
  //         ['M', 119.5, -0.5],
  //         ['C', 398.5, -0.5, 677.5, -0.5, 956.5, -0.5],
  //         ['C', 956.5, 359.5, 956.5, 719.5, 956.5, 1079.5],
  //         ['C', 664.833, 1079.5, 373.167, 1079.5, 81.5, 1079.5],
  //         ['C', 32.2979, 937.829, 4.96452, 792.162, -0.5, 642.5],
  //         ['C', -0.5, 605.5, -0.5, 568.5, -0.5, 531.5],
  //         ['C', 5.94474, 346.611, 45.9447, 169.278, 119.5, -0.5],
  //         ['Z'],
  //       ];
  //     }
  //   });
  // }

  const newJson = JSON.stringify(json);

  fs.writeFileSync(`./anim/${key}.json`, newJson, (err) => {
    if (err) {
      console.error(err);
    }
  });
  console.log(`done ${key}`);
});
