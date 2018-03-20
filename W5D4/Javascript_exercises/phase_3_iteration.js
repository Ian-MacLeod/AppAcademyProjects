Array.prototype.bubbleSort = function() {
  let sorted = false;
  let sortedArray = this.slice();

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < sortedArray.length - 1; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[i + 1];
        sortedArray[i + 1] = temp;
        sorted = false;
      }
    }
  }

  return sortedArray;
};

let array = [5,3,7,5,2,8,9];
console.log(array.bubbleSort());

String.prototype.substrings = function() {
  let result = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j <= this.length; j++) {
      result.push(this.slice(i, j));
    }
  }
  return result;
};

let s = "abcdefg";
console.log(s.substrings());
