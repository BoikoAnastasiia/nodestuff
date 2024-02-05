const extractColorsFromObject = (jsonData) => {
  let colorDict = {};
  extractColors(jsonData.body, colorDict);

  // Convert the dictionary into an array of [key, value] pairs
  let entries = Object.entries(colorDict);

  // Sort the entries based on the length of the value arrays (descending order)
  entries.sort((a, b) => b[1].length - a[1].length);

  // Reconstruct the dictionary from the sorted entries
  let sortedColorDict = {};
  for (let [key, value] of entries) {
    sortedColorDict[key] = value;
  }

  return sortedColorDict;
};

const extractColors = (obj, colorDict) => {
  const processColor = (colorValue, isShadow = false) => {
    if (typeof colorValue !== 'string' || !colorValue.trim()) {
      return;
    }

    let color = colorValue.trim().toLowerCase();

    if (color.startsWith('rgb')) {
      color = rgbToHex(color).toUpperCase();
    } else {
      if (!color.startsWith('#')) {
        color = '#' + color;
      }
      color = color.slice(0, 7).toUpperCase();
    }

    if (['#NONE', '#TRANSPARENT', '#000000'].includes(color) && isShadow) {
      return;
    }

    addToColorDict(colorDict, color, obj);
  };

  const processGradient = (gradient) => {
    if (gradient.colorStops) {
      gradient.colorStops.forEach((colorStop) => {
        if (colorStop.color) {
          processColor(colorStop.color);
        }
      });
    }
  };

  let ownFill = obj.fill && typeof obj.fill === 'string' ? obj.fill : null;
  let ownStroke =
    obj.stroke && typeof obj.stroke === 'string' ? obj.stroke : null;

  if (obj.type === 'group') {
    let groupHasDifferentColor = false;
    if (obj.objects) {
      groupHasDifferentColor = obj.objects.some((childObj) => {
        let childFill =
          childObj.fill && typeof childObj.fill === 'string'
            ? childObj.fill
            : null;
        let childStroke =
          childObj.stroke && typeof childObj.stroke === 'string'
            ? childObj.stroke
            : null;
        return (
          (ownFill && ownFill !== childFill) ||
          (ownStroke && ownStroke !== childStroke)
        );
      });
    }

    if (!groupHasDifferentColor) {
      processColor(ownFill);
      processColor(ownStroke);
    }
  } else {
    ['fill', 'stroke', 'backgroundColor'].forEach((prop) => {
      if (obj[prop]) {
        if (typeof obj[prop] === 'string') {
          processColor(obj[prop]);
        } else if (typeof obj[prop] === 'object' && obj[prop].colorStops) {
          processGradient(obj[prop]);
        }
      }
    });

    if (obj.shadow && obj.shadow.color) {
      processColor(obj.shadow.color, true);
    }

    if (obj.appliedFilters) {
      Object.values(obj.appliedFilters).forEach((filter) => {
        if (filter.params && filter.params.color) {
          processColor(filter.params.color);
        }
      });
    }
  }

  // Recursively handle nested objects and groups
  if (obj.objects) {
    obj.objects.forEach((nestedObj) => {
      extractColors(nestedObj, colorDict);
    });
  }
};

const addToColorDict = (colorDict, color, obj) => {
  if (!obj.id || obj.className === 'static') {
    return;
  }
  if (!colorDict[color]) {
    colorDict[color] = [];
  }
  colorDict[color].push(obj);
};

const rgbToHex = (rgb) => {
  let [r, g, b] = rgb.match(/\d+/g);
  return (
    '#' +
    ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b))
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
};

module.exports = {
  extractColorsFromObject,
};
