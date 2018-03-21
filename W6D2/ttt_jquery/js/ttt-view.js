class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", event => {
      // const pos = $(event.target).data("pos");
      // alert(pos);
      this.makeMove($(event.target));
    });
  }

  makeMove($square) {
    const mark = this.game.currentPlayer;
    const currentPlayerClass = `player-${mark}`;
    const pos = $square.data("pos");
    try {
      this.game.playMove(pos);
      $square.text(mark);
      $square.addClass("moved");
      $square.addClass(currentPlayerClass);
    } catch(err) {
      alert(err.msg);
    }

    if (this.game.isOver()) {
      // $square.addClass(``)
      this.$el.addClass("over");
      this.$el.off();
      let msg;
      if (this.game.winner() === null) {
        msg = "It's a draw!";
      } else {
        $(`.${currentPlayerClass}`).addClass("winner");
        msg = `You win, ${mark}`;
      }

      this.$el.append(`<p>${msg}</p>`);
    }

    // if (this.game.winner() !== null) {
    //   // $square.addClass(``)
    //   $(`.${currentPlayerClass}`).addClass("winner");
    //   this.$el.addClass("over");
    //   this.$el.off();
    // }

  }

  setupBoard() {
    const $ul = $("<ul></ul>");
    $ul.addClass('game cf');
    for (let i = 0; i < 9; i++) {
      let $li = $("<li></li>");
      $li.data( "pos", [ Math.floor(i/3), i % 3 ] );
      $ul.append($li);
    }
    this.$el.html($ul);
  }

}

module.exports = View;
