const fs = require('fs');

const content = {
  width: 960,
  height: 540,
  body: {
    objects: [
      {
        type: 'rect',
        left: 0,
        top: 0,
        width: 960,
        height: 540,
        fill: '#002554',
        id: 'main_background',
        selectable: false,
        evented: false,
        valueToRestore: {
          main_background: { styles: { background: 'fill' } }
        },
        additionalValueToRestore: { savePreset: true },
        hiddenContros: true
      },
      {
        type: 'image',
        originX: 'left',
        originY: 'top',
        left: -190.1701004948718,
        top: -1.5061577216330306,
        width: 2048,
        height: 1365,
        scaleX: 0.4008981551271689,
        scaleY: 0.4008981551271689,
        id: 'template_photo',
        idToRestore: 'template_photo',
        className: 'backgroundPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/blue_footbal_team_mini.jpeg',
        clipPath: {
          type: 'rect',
          originX: 'left',
          originY: 'top',
          left: 0,
          top: 1,
          width: 484,
          height: 542,
          selectable: false,
          absolutePositioned: true
        },
        conrolTitle: 'Media',
        canUseVideo: true
      },
      {
        type: 'image',
        originX: 'left',
        originY: 'top',
        left: 484.96830744689714,
        top: -12.5,
        width: 665,
        height: 788,
        scaleX: 0.7172932330827068,
        scaleY: 0.7172932330827068,
        id: 'template_image_bg',
        idToRestore: 'template_image_bg',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlueWhite)-01.png',
        clipPath: {
          type: 'rect',
          originX: 'left',
          originY: 'top',
          left: 489,
          top: 0,
          width: 477,
          height: 540,
          absolutePositioned: true
        },
        valueToRestore: {
          overlay_for_logo: {
            styles: {
              background: {
                styleName: 'appliedFilters',
                params: 'color',
                name: 'blend_filter'
              }
            }
          }
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#002554', mode: 'tint', alpha: 0.9 }
          }
        },
        conrolTitle: 'Background Photo'
      },
      {
        type: 'rect',
        left: 0,
        top: 278.35753513401323,
        width: 354,
        height: 141,
        scaleX: 1.351318188174027,
        scaleY: 1.871345891197555,
        fill: {
          type: 'linear',
          coords: {
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
          },
          colorStops: [
            { offset: 0, color: '#000001', opacity: 1 },
            { offset: 1, color: '#000000', opacity: 0 }
          ],
          offsetX: 0,
          offsetY: 0,
          gradientUnits: 'percentage',
          gradientTransform: [1, 0, 0, 1, 0, 0]
        },

        id: 'gradient_color',
        selectable: false,
        evented: false,
        valueToRestore: {
          gradient_color: { styles: { background: 'gradient' } }
        },
        conrolTitle: 'Gradient Color'
      },
      {
        type: 'image',
        originX: 'left',
        originY: 'top',
        left: -182,
        top: 0,
        width: 960,
        height: 540,
        id: 'template_texture',
        idToRestore: 'template_texture',
        className: 'backgroundPicture',
        selectable: false,
        evented: false,
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/template_456_texture_paper.png',
        clipPath: {
          type: 'rect',
          originX: 'left',
          originY: 'top',
          left: 0,
          top: 0,
          width: 488,
          height: 540,
          absolutePositioned: true
        },
        appliedFilters: {
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0.8, 0
              ]
            }
          }
        },
        conrolTitle: 'Background Texture'
      },
      {
        type: 'textbox',
        originX: 'center',
        originY: 'top',
        left: 237.07667632684792,
        top: 391.7615146046505,
        width: 418,
        height: 16,
        fill: '#FFFFFF',
        text: 'GIPPER UNIVERSITY BASKETBALL',
        fontSize: 17,
        fontWeight: 400,
        fontFamily: 'Druk-Wide-Medium',
        lineHeight: 1,
        textAlign: 'center',
        charSpacing: 15,
        minWidth: 20,
        id: 'headline',
        valueToRestore: {
          headline: {
            styles: {
              color: 'fill',
              fontSize: 'fontSize',
              top: { style: 'top', calcPosition: '0.7615146046504719' },
              left: { style: 'left', calcPosition: '0.0766763268479167' }
            },
            dataValue: { innerText: 'text' }
          },
          select_font_for_headline: { dataValue: { value: 'fontFamily' } }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Headline:'
      },
      {
        type: 'textbox',
        originX: 'center',
        originY: 'top',
        left: 238.5320520975134,
        top: 392.2386416919288,
        width: 430,
        fill: '#5A97D7',
        text: '2022 SCHEDULE',
        fontSize: 148,
        fontWeight: 400,
        fontFamily: 'Druk-XCond-Super',
        lineHeight: 1,
        textAlign: 'center',
        charSpacing: 20,
        minWidth: 20,
        id: 'title',
        valueToRestore: {
          title: {
            styles: {
              color: 'fill',
              fontSize: 'fontSize',
              top: { style: 'top', calcPosition: '-7.7613583080711805' },
              left: { style: 'left', calcPosition: '-1.4679479024865998' }
            },
            dataValue: { innerText: 'text' }
          },
          select_font_for_title: { dataValue: { value: 'fontFamily' } }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Title:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 30.318188922571824,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_1',
        valueToRestore: {
          general_information_text_1: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_1: {
            styles: {
              top: { style: 'top', calcPosition: '-5' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_1: { styles: { display: 'visible' } },
          select_font_for_general_information_text_1: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 1 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 53.076385498046875,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        charSpacing: 1,
        minWidth: 20,
        id: 'additional_information_text_1',
        valueToRestore: {
          additional_information_text_1: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_1: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_1: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_1: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 1 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 30.318188922571824,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_2',
        valueToRestore: {
          general_information_text_2: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_2: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_2: { styles: { display: 'visible' } },
          select_font_for_general_information_text_2: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 2 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 53.076385498046875,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_2',
        valueToRestore: {
          additional_information_text_2: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_2: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_2: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_2: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 2 Additional Information:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 76.11366122900128,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_3',
        valueToRestore: {
          general_information_text_3: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_3: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_3: { styles: { display: 'visible' } },
          select_font_for_general_information_text_3: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 3 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 98.05902099609375,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_3',
        valueToRestore: {
          additional_information_text_3: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_3: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_3: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_3: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 3 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 76.11366122900128,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_4',
        valueToRestore: {
          general_information_text_4: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_4: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_4: { styles: { display: 'visible' } },
          select_font_for_general_information_text_4: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 4 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 98.05902099609375,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_4',
        valueToRestore: {
          additional_information_text_4: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_4: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_4: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_4: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 4 Additional Information:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 120.90913353543075,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_5',
        valueToRestore: {
          general_information_text_5: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_5: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_5: { styles: { display: 'visible' } },
          select_font_for_general_information_text_5: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 5 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 143.04165649414062,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_5',
        valueToRestore: {
          additional_information_text_5: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_5: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_5: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_5: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 5 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 120.90913353543075,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_6',
        valueToRestore: {
          general_information_text_6: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_6: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_6: { styles: { display: 'visible' } },
          select_font_for_general_information_text_6: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 6 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 143.04165649414062,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_6',
        valueToRestore: {
          additional_information_text_6: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_6: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_6: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_6: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 6 Additional Information:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 166.15909446128597,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_7',
        valueToRestore: {
          general_information_text_7: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_7: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_7: { styles: { display: 'visible' } },
          select_font_for_general_information_text_7: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 7 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 188.0242919921875,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_7',
        valueToRestore: {
          additional_information_text_7: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_7: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_7: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_7: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 7 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 166.15909446128597,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_8',
        valueToRestore: {
          general_information_text_8: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_8: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_8: { styles: { display: 'visible' } },
          select_font_for_general_information_text_8: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 8 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 188.0242919921875,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_8',
        valueToRestore: {
          additional_information_text_8: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_8: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_8: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_8: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 8 Additional Information:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 210.96604229822105,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_9',
        valueToRestore: {
          general_information_text_9: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_9: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_9: { styles: { display: 'visible' } },
          select_font_for_general_information_text_9: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 9 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 233.0069580078125,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_9',
        valueToRestore: {
          additional_information_text_9: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_9: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_9: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_9: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 9 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 210.96604229822105,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_10',
        valueToRestore: {
          general_information_text_10: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_10: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_10: { styles: { display: 'visible' } },
          select_font_for_general_information_text_10: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 10 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 233.0069580078125,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_10',
        valueToRestore: {
          additional_information_text_10: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_10: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_10: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_10: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 10 Additional Information:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 256.2,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_11',
        valueToRestore: {
          general_information_text_11: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_11: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_11: { styles: { display: 'visible' } },
          select_font_for_general_information_text_11: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 11 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 277.9895935058594,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_11',
        valueToRestore: {
          additional_information_text_11: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_11: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_11: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_11: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 11 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 256.2,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_12',
        valueToRestore: {
          general_information_text_12: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_12: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_12: { styles: { display: 'visible' } },
          select_font_for_general_information_text_12: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 12 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 277.9895935058594,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_12',
        valueToRestore: {
          additional_information_text_12: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_12: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_12: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_12: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 12 Additional Information:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 300.4614364563608,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_13',
        valueToRestore: {
          general_information_text_13: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_13: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_13: { styles: { display: 'visible' } },
          select_font_for_general_information_text_13: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 13 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 322.9721984863281,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_13',
        valueToRestore: {
          additional_information_text_13: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_13: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_13: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_13: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 13 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 300.4614364563608,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_14',
        valueToRestore: {
          general_information_text_14: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_14: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_14: { styles: { display: 'visible' } },
          select_font_for_general_information_text_14: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 14 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 322.9721984863281,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_14',
        valueToRestore: {
          additional_information_text_14: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_14: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_14: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_14: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 14 Additional Information:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 345.80242014336454,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_15',
        valueToRestore: {
          general_information_text_15: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_15: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_15: { styles: { display: 'visible' } },
          select_font_for_general_information_text_15: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 15 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 367.9548645019531,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_15',
        valueToRestore: {
          additional_information_text_15: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_15: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_15: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_15: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 15 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 345.80242014336454,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_16',
        valueToRestore: {
          general_information_text_16: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_16: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_16: { styles: { display: 'visible' } },
          select_font_for_general_information_text_16: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 16 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 367.9548645019531,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_16',
        valueToRestore: {
          additional_information_text_16: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_16: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_16: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_16: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 16 Additional Information:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 391.1434038303684,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_17',
        valueToRestore: {
          general_information_text_17: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_17: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_17: { styles: { display: 'visible' } },
          select_font_for_general_information_text_17: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 17 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 412.9375305175781,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_17',
        valueToRestore: {
          additional_information_text_17: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_17: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_17: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_17: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 17 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 391.1434038303684,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_18',
        valueToRestore: {
          general_information_text_18: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_18: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_18: { styles: { display: 'visible' } },
          select_font_for_general_information_text_18: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 18 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 412.9375305175781,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_18',
        valueToRestore: {
          additional_information_text_18: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_18: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_18: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_18: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 18 Additional Information:'
      },
      {
        type: 'textbox',
        left: 562.5,
        top: 435.4048402867293,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_19',
        valueToRestore: {
          general_information_text_19: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_19: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_19: { styles: { display: 'visible' } },
          select_font_for_general_information_text_19: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 19 General Information:'
      },
      {
        type: 'textbox',
        left: 567.1557439233401,
        top: 457.9201354980469,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_19',
        valueToRestore: {
          additional_information_text_19: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_19: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_19: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_19: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 19 Additional Information:'
      },
      {
        type: 'textbox',
        left: 784.4965209960938,
        top: 435.4048402867293,
        width: 143.60627912349855,
        height: 24,
        fill: '#FFFFFF',
        text: 'GIPPER EAST HIGH',
        fontSize: 24,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'general_information_text_20',
        valueToRestore: {
          general_information_text_20: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          general_information_wrapper_20: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_20: { styles: { display: 'visible' } },
          select_font_for_general_information_text_20: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 20 General Information:'
      },
      {
        type: 'textbox',
        left: 788.9080615738116,
        top: 457.9201354980469,
        width: 145.6328955915451,
        height: 13,
        fill: '#5A97D7',
        text: 'NOV. 1 ??? 4:30 PM ??? GIPPER ARENA',
        fontSize: 14,
        fontWeight: 400,
        fontFamily: 'UnitedSansCond-Heavy',
        lineHeight: 1,
        textAlign: 'left',
        minWidth: 20,
        id: 'additional_information_text_20',
        valueToRestore: {
          additional_information_text_20: {
            styles: { color: 'fill', fontSize: 'fontSize' },
            dataValue: { innerText: 'text' }
          },
          additional_information_wrapper_20: {
            styles: {
              top: { style: 'top', calcPosition: '0' },
              left: { style: 'left', calcPosition: '0' }
            }
          },
          table_item_20: { styles: { display: 'visible' } },
          select_font_for_additional_information_text_20: {
            dataValue: { value: 'fontFamily' }
          }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Event 20 Additional Information:'
      },
      {
        type: 'image',
        left: 523.4935299645774,
        top: 32.72486084002024,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_1',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 32.72486084002024,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_2',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#5A97D7', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 523.4935299645775,
        top: 77.24560198737252,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_3',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 77.24560198737252,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_4',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#898889', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 523.4935299645775,
        top: 123.33762174361017,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_5',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#5A97D7', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 123.33762174361017,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_6',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 523.4935299645775,
        top: 167.61385502058528,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_7',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#5A97D7', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 167.61385502058528,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_8',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 523.4935299645775,
        top: 212.5928572543001,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_9',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 212.5928572543001,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_10',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#5A97D7', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 523.4935299645775,
        top: 257.5718594880149,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_11',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#5A97D7', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 257.5718594880149,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_12',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 523.4935299645775,
        top: 302.5508617217297,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_13',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 302.5508617217297,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_14',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#5A97D7', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 523.4935299645775,
        top: 347.52986395544445,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_15',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#898889', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 347.52986395544445,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_16',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 523.4935299645775,
        top: 392.5088661891593,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_17',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 392.5088661891593,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_18',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 523.4935299645775,
        top: 437.4878684228741,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_19',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 745.4750755462484,
        top: 437.4878684228741,
        width: 720,
        height: 711,
        cornerSize: 9,
        scaleX: 0.05140686120950704,
        scaleY: 0.05140686120950704,
        id: 'item_table_background_20',
        className: 'blendPicture',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
        shadow: {
          color: '#000000',
          blur: 4.8,
          offsetX: 0,
          offsetY: 0,
          nonScaling: true
        },
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#898889', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        },
        valueToRestore: {
          table_item_9: {
            styles: { display: 'visible', top: 'top', left: 'left' },
            item_table_background_9: { styles: { fill: 'fill' } }
          }
        },
        hiddenContros: true
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 39.08332824707031,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_1',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_1',
          container: 'logo_item_1_container'
        },
        valueToRestore: {
          table_item_1: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 1 Logo'
      },
      {
        type: 'image',
        left: 753.5370277392012,
        top: 39.08332824707031,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_2',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_2',
          container: 'logo_item_2_container'
        },
        valueToRestore: {
          table_item_2: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 2 Logo'
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 84.06597900390625,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_3',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_3',
          container: 'logo_item_3_container'
        },
        valueToRestore: {
          table_item_3: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 3 Logo'
      },
      {
        type: 'image',
        left: 753.5370277392012,
        top: 84.06597900390625,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_4',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_4',
          container: 'logo_item_4_container'
        },
        valueToRestore: {
          table_item_4: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 4 Logo'
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 129.13629969685377,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_5',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_5',
          container: 'logo_item_5_container'
        },
        valueToRestore: {
          table_item_5: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 5 Logo'
      },
      {
        type: 'image',
        left: 753.5370277392012,
        top: 129.13629969685377,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_6',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_6',
          container: 'logo_item_6_container'
        },
        valueToRestore: {
          table_item_6: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 6 Logo'
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 174.56830614500632,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_7',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_7',
          container: 'logo_item_7_container'
        },
        valueToRestore: {
          table_item_7: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 7 Logo'
      },
      {
        type: 'image',
        left: 753.5370277392012,
        top: 174.56830614500632,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_8',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_8',
          container: 'logo_item_8_container'
        },
        valueToRestore: {
          table_item_8: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 8 Logo'
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 219.01390075683594,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_9',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_9',
          container: 'logo_item_9_container'
        },
        valueToRestore: {
          table_item_9: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 9 Logo'
      },
      {
        type: 'image',
        left: 753.5370277392012,
        top: 219.01390075683594,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_10',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_10',
          container: 'logo_item_10_container'
        },
        valueToRestore: {
          table_item_10: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 10 Logo'
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 263.9965362548828,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_11',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_11',
          container: 'logo_item_11_container'
        },
        valueToRestore: {
          table_item_11: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 11 Logo'
      },
      {
        type: 'image',
        left: 753.5370277392012,
        top: 263.9965362548828,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_12',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_12',
          container: 'logo_item_12_container'
        },
        valueToRestore: {
          table_item_12: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 12 Logo'
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 308.9791717529297,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_13',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_13',
          container: 'logo_item_13_container'
        },
        valueToRestore: {
          table_item_13: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 13 Logo'
      },
      {
        type: 'image',
        left: 753.5370277392012,
        top: 308.9791717529297,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_14',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_14',
          container: 'logo_item_14_container'
        },
        valueToRestore: {
          table_item_14: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 14 Logo'
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 353.96180725097656,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_15',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_15',
          container: 'logo_item_15_container'
        },
        valueToRestore: {
          table_item_15: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 15 Logo'
      },
      {
        type: 'image',
        left: 753.5370277392012,
        top: 353.96180725097656,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_16',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_16',
          container: 'logo_item_16_container'
        },
        valueToRestore: {
          table_item_16: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 16 Logo'
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 399.0000781482897,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_17',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_17',
          container: 'logo_item_17_container'
        },
        valueToRestore: {
          table_item_17: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 17 Logo'
      },
      {
        type: 'image',
        left: 753.5370277392012,
        top: 399.97558675304697,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_18',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_18',
          container: 'logo_item_18_container'
        },
        valueToRestore: {
          table_item_18: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 18 Logo'
      },
      {
        type: 'image',
        left: 531.4524311481555,
        top: 445.3495846554367,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_19',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_19',
          container: 'logo_item_19_container'
        },
        valueToRestore: {
          table_item_19: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 19 Logo'
      },
      {
        type: 'image',
        left: 754.0784193703289,
        top: 445.3495846554367,
        width: 409,
        height: 484,
        scaleX: 0.05513812387898665,
        scaleY: 0.05513812387898665,
        id: 'logo_item_20',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlue)-01.png',
        idsToRestore: {
          image: 'logo_item_20',
          container: 'logo_item_20_container'
        },
        valueToRestore: {
          table_item_20: { styles: { display: 'visible' } }
        },
        conrolTitle: 'Event 20 Logo'
      },
      {
        type: 'image',
        left: 309.02117737393644,
        top: -6.477300945273896,
        width: 1920,
        height: 1920,
        scaleX: 0.15525270080921097,
        scaleY: 0.2879971884846603,
        selectable: false,
        evented: false,
        src: 'https://platform.gogipper.com/pictures/proxy_image/?url=https://s3.amazonaws.com/gipper-static-assets/stock_images/IG_RippedPaper_Shadow.png',
        className: 'staticMedia'
      },
      {
        type: 'image',
        left: 656.7747000680797,
        top: 552.0279202584245,
        width: 1080,
        height: 1080,
        scaleX: 0.30792769402699494,
        scaleY: 0.5107857730171725,
        angle: 180,
        selectable: false,
        evented: false,
        src: 'https://platform.gogipper.com/pictures/proxy_image/?url=https://s3.amazonaws.com/gipper-static-assets/stock_images/Award_RippedPaper_Edge_IG.png',
        className: 'staticMedia'
      },

      {
        type: 'textbox',
        originX: 'right',
        originY: 'top',
        left: 923.3860104370478,
        top: 507.75019537072427,
        width: 94,
        height: 10,
        fill: '#FFFFFF',
        text: '#GOGIPPER',
        fontSize: 11,
        fontWeight: 400,
        fontFamily: 'Druk-Wide-Medium',
        lineHeight: 1,
        textAlign: 'right',
        charSpacing: 5,
        minWidth: 20,
        id: 'hashtag',
        valueToRestore: {
          hashtag: {
            styles: {
              color: 'fill',
              fontSize: 'fontSize',
              top: { style: 'top', calcPosition: '0.7501953707242706' },
              left: { style: 'left', calcPosition: '1.3860104370478439' }
            },
            dataValue: { innerText: 'text' }
          },
          select_font_for_hashtag: { dataValue: { value: 'fontFamily' } }
        },
        additionalValueToRestore: { reduceContainerWidth: true },
        conrolTitle: 'Hashtag:'
      },
      {
        type: 'group',
        left: 521.738343027286,
        top: 500.18019537072433,
        width: 200,
        height: 20,
        id: 'legend_wrapper',
        className: 'svgGroup',
        valueToRestore: {
          legend_wrapper: {
            styles: {
              top: { style: 'top', calcPosition: '-3.9996362815994644' },
              left: { style: 'left', calcPosition: '-5.5' }
            }
          }
        },
        objects: [
          {
            type: 'textbox',
            originX: 'left',
            originY: 'center',
            left: -68,
            top: -1,
            width: 24,
            height: 12,
            fill: '#FFFFFF',
            text: 'HOME',
            fontSize: 13,
            fontWeight: 400,
            fontFamily: 'UnitedSansCond-Heavy',
            lineHeight: 1,
            textAlign: 'left',
            minWidth: 20,
            id: 'legend_item_text_home',
            className: 'home',
            valueToRestore: {
              legend_item_text_home: {
                styles: { color: 'fill', fontSize: 'fontSize' },
                dataValue: { innerText: 'text' }
              },
              select_font_family_for_legend_item_text_home: {
                dataValue: { value: 'fontFamily' }
              },
              legent_container_home: { styles: { display: 'visible' } }
            },
            conrolTitle: 'Category 1 Title:'
          },
          {
            type: 'image',
            originX: 'center',
            originY: 'center',
            left: -83,
            top: 0,
            width: 720,
            height: 711,
            scaleX: 0.027518837820967295,
            scaleY: 0.027518837820967295,
            id: 'legend_icon_home',
            className: 'blendPicture',
            valueToRestore: {
              legend_icon_home: { styles: { fill: 'fill' } },
              legent_container_home: { styles: { display: 'visible' } }
            },
            hiddenContros: true,
            src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
            appliedFilters: {
              blend_filter: {
                value: 'BlendColor',
                params: { color: '#FFFFFF', mode: 'multiply', alpha: 1 }
              },
              opacity_filter: {
                value: 'ColorMatrix',
                params: {
                  matrix: [
                    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
                  ]
                }
              }
            }
          },
          {
            type: 'textbox',
            originX: 'left',
            originY: 'center',
            left: -2,
            top: -1,
            width: 23,
            height: 12,
            fill: '#FFFFFF',
            text: 'AWAY',
            fontSize: 13,
            fontWeight: 400,
            fontFamily: 'UnitedSansCond-Heavy',
            lineHeight: 1,
            textAlign: 'left',
            minWidth: 20,
            id: 'legend_item_text_away',
            className: 'away',
            valueToRestore: {
              legend_item_text_away: {
                styles: { color: 'fill', fontSize: 'fontSize' },
                dataValue: { innerText: 'text' }
              },
              select_font_family_for_legend_item_text_away: {
                dataValue: { value: 'fontFamily' }
              },
              legent_container_away: { styles: { display: 'visible' } }
            },
            conrolTitle: 'Category 2 Title:'
          },
          {
            type: 'image',
            originX: 'center',
            originY: 'center',
            left: -17,
            top: 0,
            width: 720,
            height: 711,
            scaleX: 0.027518837820967295,
            scaleY: 0.027518837820967295,
            id: 'legend_icon_away',
            className: 'blendPicture',
            valueToRestore: {
              legend_icon_away: { styles: { fill: 'fill' } },
              legent_container_away: { styles: { display: 'visible' } }
            },
            hiddenContros: true,
            src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
            appliedFilters: {
              blend_filter: {
                value: 'BlendColor',
                params: { color: '#5A97D7', mode: 'multiply', alpha: 1 }
              },
              opacity_filter: {
                value: 'ColorMatrix',
                params: {
                  matrix: [
                    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
                  ]
                }
              }
            }
          },
          {
            type: 'textbox',
            originX: 'left',
            originY: 'center',
            left: 62,
            top: -1,
            width: 36,
            height: 12,
            fill: '#FFFFFF',
            text: 'NEUTRAL',
            fontSize: 13,
            fontWeight: 400,
            fontFamily: 'UnitedSansCond-Heavy',
            lineHeight: 1,
            textAlign: 'left',
            minWidth: 20,
            id: 'legend_item_text_neutral',
            className: 'neutral',
            valueToRestore: {
              legend_item_text_neutral: {
                styles: { color: 'fill', fontSize: 'fontSize' },
                dataValue: { innerText: 'text' }
              },
              select_font_family_for_legend_item_text_neutral: {
                dataValue: { value: 'fontFamily' }
              },
              legent_container_neutral: { styles: { display: 'visible' } }
            },
            conrolTitle: 'Category 3 Title:'
          },
          {
            type: 'image',
            originX: 'center',
            originY: 'center',
            left: 47,
            top: 0,
            width: 720,
            height: 711,
            scaleX: 0.027518837820967295,
            scaleY: 0.027518837820967295,
            id: 'legend_icon_neutral',
            className: 'blendPicture',
            valueToRestore: {
              legend_icon_neutral: { styles: { fill: 'fill' } },
              legent_container_neutral: { styles: { display: 'visible' } }
            },
            hiddenContros: true,
            src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/stain.png',
            appliedFilters: {
              blend_filter: {
                value: 'BlendColor',
                params: { color: '#898889', mode: 'multiply', alpha: 1 }
              },
              opacity_filter: {
                value: 'ColorMatrix',
                params: {
                  matrix: [
                    1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
                  ]
                }
              }
            }
          }
        ]
      },
      {
        type: 'image',
        left: 190.32422953160324,
        top: -54.67762336291227,
        width: 1024,
        height: 768,
        scaleX: 1.006144790763781,
        scaleY: 0.9889211098014047,
        clipPath: {
          type: 'rect',
          originX: 'left',
          originY: 'top',
          left: -207,
          top: -329,
          width: 484,
          height: 545,
          absolutePositioned: false
        },
        id: 'paint_splatter_2',
        selectable: false,
        evented: false,
        className: 'blendPicture',
        valueToRestore: {
          paint_splatter_2: { styles: { fill: 'fill' } }
        },
        conrolTitle: 'Paint Splatter Color',
        src: 'https://gipper-static-assets.s3.amazonaws.com/stock_images/paint_splatter_1010.png',
        appliedFilters: {
          blend_filter: {
            value: 'BlendColor',
            params: { color: '#5A97D7', mode: 'multiply', alpha: 1 }
          },
          opacity_filter: {
            value: 'ColorMatrix',
            params: {
              matrix: [
                1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0
              ]
            }
          }
        }
      },
      {
        type: 'image',
        left: 201.07974645957512,
        top: 316.4887589143635,
        width: 665,
        height: 788,
        scaleX: 0.09022556390977443,
        scaleY: 0.09022556390977443,
        className: 'logoPicture',
        id: 'logo',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/StockLogo(DarkBlueWhite)-01.png',
        idsToRestore: { image: 'logo', container: 'logo_wrapper' },
        conrolTitle: 'Logo'
      },
      {
        type: 'image',
        left: 10,
        top: 10,
        width: 670,
        height: 669,
        scaleX: 0.075,
        scaleY: 0.075,
        visible: false,
        id: 'logo_sponsor',
        className: 'logoPicture',
        src: 'https://s3.amazonaws.com/gipper-static-assets/stock_images/template_seventy_three_Outlook.png',
        idsToRestore: {
          image: 'logo_sponsor',
          container: 'sponsor_container'
        },
        conrolTitle: 'Sponsor Logo'
      }
    ]
  }
};

content.body.objects.forEach(async el => {});

// content.body.objects.forEach((el, index, array) => {
//   //   obj.left = newObj.body.objects[index].left;
//   //   obj.top = newObj.body.objects[index].top;
//   //   // if (obj.type === 'rect') {
//   //   //   obj.strokeWidth = 0;
//   //   // }

//   }
// });

// let newContent = [];

// for (let i = 0; i < 12; i++) {
//   content.forEach(element => {
//     if (element.id == `column_1_number_${i + 1}`) newContent.push(element);
//     if (element.id == `column_3_text_${i + 1}`) newContent.push(element);
//     if (element.id == `column_4_number_${i + 1}`) newContent.push(element);
//     if (element.id == `column_5_number_${i + 1}`) newContent.push(element);
//   });
// }

// content.body.objects.forEach(el => {
//   // const matchID = el.id.match(/\d/gm);
//   if (el.type == 'text') {
//     delete el.height;
//   }
//   if (el.id.includes('shadow_')) {
//     el.visible = false;
//     el.fill = null;
//   }
//   if (
//     el.src &&
//     el.src.includes(
//       'https://gipper-static-assets.s3.amazonaws.com/stock_images/Baseball_Player.jpg'
//     )
//   ) {
//     el.src =
//       'https://gipper-static-assets.s3.amazonaws.com/stock_images/Baseball_Player_red_mini.jpeg';
//     el.shadow = {
//       color: '#000000BA',
//       blur: 122.85000000000001,
//       offsetX: 54.6,
//       offsetY: 0,
//       affectStroke: false,
//       nonScaling: false
//     };
//     el.scaleX = 0.08859137534274321;
//     el.scaleY = 0.08859137534274321;
//     el.width = 1365;
//     el.height = 2048;
//   }
// });

//   if (el.id.includes('event_') && el.type == 'textbox') {
//     const matchID = el.id.match(/\d/gm);
//     el.conrolTitle = `Event ${matchID} Time:`;
//   }
//   if (el.id.includes('info_') && el.type == 'textbox') {
//     const matchID = el.id.match(/\d/gm);
//     el.conrolTitle = `Event ${matchID} Information:`;
//   }
// });
// content.body.objects.forEach((obj, index) => {
//   if (obj.type === "textbox") {
//     obj.left = newObj.body.objects[index].left;
//     obj.top = newObj.body.objects[index].top;
//   }
// });

// const array = [];
// array.length = 8;
// array.fill(content);

// newArray = [...array].flat();

// const newArray = [];

// for (let i = 0; i <= 7; i++) {
//   content.forEach(it => {
//     const replacer = match => +match + i;
//     const newId = it.id.replace(/\d/gm, replacer);
//     const newIt = { ...it };
//     newIt.id = newId;

//     newArray.push(newIt);
//   });
// }

const newobj = JSON.stringify(content);
