Array.prototype.myEach = function(callback) {
  for (let el of this) {
    callback(el);
  }
};

let arr = [1,2,3,4];
arr.myEach(el => console.log(el * 2));

Array.prototype.myMap = function(callback) {
  let newArray = [];
  this.myEach(el => newArray.push(callback(el)));
  return newArray;
};

console.log(arr.myMap(el => el * 2));

Array.prototype.myReduce = function(callback, initialValue) {
  let idx = 0;
  let acc = initialValue;
  if (initialValue === undefined) {
    idx = 1;
    acc = this[0];
  }
  for (; idx < this.length; idx++) {
    acc = callback(acc, this[idx]);
  }

  return acc;
};

console.log(arr.myReduce((a, b) => a + b ));
console.log(arr.myReduce(
  ((a, b) => a + b ), 3
));
