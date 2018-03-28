class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    this.bindEvents();
  }

  bindEvents() {

  }

  makeMove($square) {

  }

  setupTowers() {
    const $div = $("<div></div>");
    $div.addClass("hanoi-board");
    for (var i = 0; i < 3; i++) {
      let $ul = $("<ul></ul>");
      $div.append($ul);
      $ul.addClass(`tower${i}`);
      $ul.data( "idx", i);
      if (i === 0) {
        for (var j = 0; j < 3; j++) {
          let $li = $("<li></li>");
          $li.addClass(`blk${j}`);
          $ul.append($li);
          $li.data( "size", j);
        }
      }
    }
    this.$el.html($div);
  }
}

module.exports = View;
