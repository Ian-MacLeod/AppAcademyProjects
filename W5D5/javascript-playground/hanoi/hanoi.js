
class HanoiGame {
  constructor(reader) {
    this.stacks = [[3, 2, 1], [], []];
    this.reader = reader;
  }


  promptMove(callback) {
    this.print();

    this.reader.question("Where would you like to grab? ", (start) => {
      this.reader.question("Where would you like to place? ", (end) => {
        callback(start, end);
        // this.reader.close();
      });
    });
  }

  isValidMove(grabIdx, placeIdx) {
    if (!this.isValidStack(grabIdx) || !this.isValidStack(placeIdx) ) {
      return false;
    }

    if (this.stacks[grabIdx].length === 0) return false;


    if (this.stacks[placeIdx].length === 0) return true;

    return this.stacks[grabIdx][this.stacks[grabIdx].length - 1] < this.stacks[placeIdx][this.stacks[placeIdx].length - 1];
  }

  isValidStack(idx) {
    return (idx >= 0  && idx <= 2);
  }

  move(grabIdx, placeIdx) {
    const validity = this.isValidMove(grabIdx, placeIdx);

    if (validity) {
      this.stacks[placeIdx].push(this.stacks[grabIdx].pop());
    }
    return validity;
  }

  print() {
    console.log(JSON.stringify(this.stacks));
  }

  isWon() {
    return this.stacks[0].length === 0 && this.stacks.some(el => el.length === 3);
  }

  run(completionCallback) {
    if (this.isWon()) {
      completionCallback();
    } else {
      this.promptMove((start, end) => {
        if (!this.move(start, end)) {
          console.log("Invalid move");
        }
        this.run(completionCallback);
      });
    }
  }
}


module.exports = HanoiGame;
