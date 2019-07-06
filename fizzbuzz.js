function fizzbuzz(num) {
  if (!num) {
    return [];
  }

  let arr = [];
  for (let i = 1; i <= num; i++) {
    t = "";
    if (i % 3 == 0) t += "fizz";
    if (i % 5 == 0) t += "buzz";
    if (!t) {
      let iStr = i.toString();
      index3 = iStr.indexOf("3");
      index5 = iStr.indexOf("5");
      if (index3 == -1) index3 = iStr.length
      if (index5 == -1) index5 = iStr.length 
      if (index3 < index5) {
        t = "fizz";
      } else if (index5 < index3) {
        t = "buzz";
      } else {  // equal
        t = i;
      }
    }
    arr.push(t);
  }

  return arr;
}

module.exports = {
  fizzbuzz
};
