export default function cleanSet(set, startString) {
  let string = '';

  if (startString === '') {
    return string;
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      if (string === '') {
        string += value.replace(startString, '');
      } else {
        string += `-${value.replace(startString, '')}`;
      }
    }
  }

  return string;
}
