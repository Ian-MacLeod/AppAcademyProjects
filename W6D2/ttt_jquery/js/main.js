const View = require("./ttt-view.js"); // require appropriate file
const Game = require("./game.js"); // require appropriate file

$( () => {
  // Your code here
  const $el = $("figure.ttt");
  const game = new Game;
  const view = new View(game, $el);
});
