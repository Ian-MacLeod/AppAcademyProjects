const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum = 0, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("What number would you like to add? ", (res) => {
      console.log(`${sum} + ${res} = ${sum + parseInt(res)}`);
      sum += parseInt(res);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    reader.close();
  }
}

const completionCallback = (sum) => {
  console.log(`Your sum is ${sum}`);
};

addNumbers(0, 4, completionCallback);
