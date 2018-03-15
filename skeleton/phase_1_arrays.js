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
  this.forEach(function(num, idx) {
    if (this.slice(idx + 1).includes(-num)) {
      result.push(idx, idx);
    }
  });

  return result;
};

console.log([1,2,3,4,5,2,4,1].uniq());
