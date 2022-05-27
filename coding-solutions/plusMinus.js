function plusMinus (arr) {
  let pos = 0;
  let neg = 0;
  let zero = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else {
      zero++;
    }
  }
  console.log(pos / len);
  console.log(neg / len);
  console.log(zero / len);
}