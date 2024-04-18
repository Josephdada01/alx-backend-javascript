export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  let result = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      result += (result.length > 0 ? '-' : '') + value.slice(startString.length);
    }
  }
  return result;
}
