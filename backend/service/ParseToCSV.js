function ValidatingJSON(json) {
  try {
    JSON.parse(json);
  } catch {
    return false;
  }
  return true;
}

function TakeKeys(objectsVector, object, type) {
  let csvString = '';
  if (type === 'body') {
    Object.keys(objectsVector).forEach(item => {
      csvString += `${object[item]},`;
    });
    csvString = `${csvString.replace(/, *$/, '')}\n`;
    return csvString;
  }
  Object.keys(objectsVector).forEach(item => {
    csvString += `${item},`;
  });
  csvString = `${csvString.replace(/, *$/, '')}\n`;
  return csvString;
}

export default function ParseToCSV(json) {
  let csvString = '';
  if (!ValidatingJSON(json)) {
    return 'error';
  }
  const parsedJSON = JSON.parse(json);
  if (Array.isArray(parsedJSON)) {
    csvString += TakeKeys(parsedJSON[0], '', 'head');
    parsedJSON.forEach(item => {
      csvString += TakeKeys(parsedJSON[0], item, 'body');
    });
    return csvString;
  }
  csvString += TakeKeys(parsedJSON, '', 'head');
  csvString += TakeKeys(parsedJSON, parsedJSON, 'body');
  return csvString;
}
