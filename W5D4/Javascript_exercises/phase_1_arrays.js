Array.prototype.uniq = function() {
  let newArray = [];
  for (let el of this) {
    if (!newArray.includes(el)) {
      newArray.push(el);
    }
  }

  return newArray;
};

Array.prototype.twoSum = function() {
  let result = [];
  this.forEach( (num, idx) => {
    this.slice(0, idx).forEach( (num2, idx2) => {
      if (num + num2 === 0) {
        result.push([idx, idx2]);
      }
    });
  });

  return result;
};

console.log([0, 1, 3, -1, -3].twoSum());


Array.prototype.transpose = function() {
  let transposed = [];
  for (let i = 0; i < this[0].length; i++) {
    let row = [];
    for (let j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }
    transposed.push(row);
  }
  return transposed;
};

let arr = [[1, 2, 3], [4, 5, 6]];
console.log(arr.transpose());
