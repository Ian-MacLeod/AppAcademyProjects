function range(start, end) {
  if (start > end) return [];
  if (start === end) return [end];

  return [start].concat(range(start + 1, end));
}

console.log(range(1, 10));

function sumRec(arr) {
  if (arr.length === 0) return 0;

  return arr[0] + sumRec(arr.slice(1));
}

let arr = [1, 2, 3, 4, 5, 6];
console.log(sumRec(arr));

function exponent(base, exp) {
  if (exp === 0) return 1;

  return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;

  if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2), 2);
  }
}


function fibonacci(n) {
  if (n === 1) return [1];
  if (n === 2) return [1, 1];

  let preFib = fibonacci(n - 1);
  return preFib.concat([preFib[preFib.length - 1] + preFib[preFib.length -2]]);
}

console.log(fibonacci(10));

const getType = function (elem) {
  return Object.prototype.toString.call(elem);
};

function deepDup(array) {
  let result = [];
  for (let el of array) {
    if (getType(el) === '[object Array]') {
      result.push(deepDup(el));
    } else {
      result.push(el);
    }
  }

  return result;
}

let array1 = [2, 5, [4,2,7], 'ifjdsfads'];
let array2 = deepDup(array1);
array2[2][0] = 'dog';
console.log(array1);
console.log(array2);

function bsearch(array, target) {
  if (array.length === 0) return -1;
  let midIdx = Math.floor(array.length / 2);
  let mid = array[midIdx];
  if (mid === target) {
    return midIdx;
  } else if (target < mid) {
    return bsearch(array.slice(0, midIdx), target);
  } else {
    let prevSearch = bsearch(array.slice(midIdx + 1), target);
    if (prevSearch === -1) {
      return -1;
    } else {
      return midIdx + 1 + prevSearch;
    }
  }
}

console.log(bsearch(arr, 5));
console.log(bsearch(arr, 10));

function mergeSort(array) {
  if (array.length <= 1) return array.slice();

  let midIdx = Math.floor(array.length / 2);
  let leftArray = array.slice(0, midIdx);
  let rightArray = array.slice(midIdx);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(arr1, arr2) {
  let merged = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }

  return merged.concat(arr1).concat(arr2);
}

arr = [5,3,7,5,2,8,9];
console.log(mergeSort(arr));


function subsets(array) {
  if (array.length === 0) return [[]];
  let preSubs = subsets(array.slice(1));
  return preSubs.map(sub => [array[0]].concat(sub)).concat(preSubs);
}

console.log(subsets([1,2,3,4]));



// end
