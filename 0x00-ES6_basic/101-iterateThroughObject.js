export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  let count = 0;

  for (; count < reportWithIterator.length; count += 1) {
    if (count === 0) {
      string += reportWithIterator[count];
    } else {
      string += ` | ${reportWithIterator[count]}`;
    }
  }
  return string;
}
