// The intent of this file is to reverse the string using iterators (for, foreach)


const reverse = (str) => {
  let j = str.length - 1;
  let ans = '';
  for (j = str.length - 1; j >= 0; j -= 1) {
    ans += str[j];
  }
  return ans;
};

module.exports = reverse;
