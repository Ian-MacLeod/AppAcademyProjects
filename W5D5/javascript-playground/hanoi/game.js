// class Hanoi {
//   run() {
//     // until all the disks are on a single tower And the first tower is empty
//     //   get player's move
//     //   make move if legal
//   }
// }
//

const HanoiGame = require('./hanoi.js');

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let game = new HanoiGame(reader);

function completionCallback() {
  console.log("Congrats");
  reader.question("Would you like to play again? ", (res) => {
    if (res === "yes") {
      game = new HanoiGame(reader);
      game.run(completionCallback);
    } else if (res === "no") {
      reader.close();
    } else {
      completionCallback();
    }
  });
}



game.run(completionCallback);
