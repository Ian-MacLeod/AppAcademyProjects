class Board {
  constructor() {
    this.grid = [[null, null, null],
                 [null, null, null],
                 [null, null, null]];
  }

  isWon() {
    let rowBoolean = this.grid.map((row) => {
      return row.every((el) => el === 'X') || row.every((el) => el === 'Y');
    });
    return rowBoolean.some((el) => el);

  }

  winner() {

  }

  getTripleWinner(triple) {
    let tripSet = new Set(triple);
    if ()
  }

  diagonals() {
    let diags = [[0,0],[1,1],[2,2],
                 [0,2],[1,1],[2,0]];
    return diags.map((diag) => {

    })
  }

  columns () {
    let cols = [];
    for(let i = 0; i < 3; i++) {
      let col = [];
      for(let j = 0; j < 3; j++) {
        col.push([j, i]);
      }
      cols.push(col);
    }
    return cols;
  }

  isEmpty(pos) {
    return this.grid[pos[0]][pos[1]] === null;
  }

  placeMark(pos, mark) {
    if (!this.isEmpty(pos)) throw "Invalid move";
    this.grid[pos[0]][pos[1]] = mark;
  }
}

let cols = [];
let rows = [];
for(let i = 0; i < 3; i++) {
  let row = [];
  let col = [];
  for(let j = 0; j < 3; j++) {
    row.push([i, j]);
  }
  rows.push(row);
}
console.log(rows);
