// The intent of this file is to reverse
// the string using built in functions.

function reverse(str) {
  const array = str.split('');
  const reverseArray = array.reverse();
  const joinArray = reverseArray.join('');
  return joinArray;
}

module.exports = reverse;
