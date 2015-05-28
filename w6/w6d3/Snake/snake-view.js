(function() {

  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var View = SnakeGame.View = function(board, grid) {
    this.board = board;
    this.snake = this.board.snake;
    this.grid = grid;
    this.buildBoard();
    this.bindEvents();
    this.step();
  };

  View.prototype.buildBoard = function() {
    for (var i = 0; i < 50; i++) {
      var $row = $("<div>").addClass("row").addClass("group");
      this.grid.append($row);
      for (var j = 0; j < 50; j++) {
        var position = i + "-" + j;
        $row.append($("<div>").addClass("square").attr("id", position));
      }
    }
  };

  View.prototype.bindEvents = function() {
    var that = this;
    $(".square").keydown(function(event) {
      switch (event.which) {
        case 40:
          that.snake.dir = "S";
          break;
        case 39:
          that.snake.dir = "E";
          break;
        case 38:
          that.snake.dir = "N";
          break;
        case 37:
          that.snake.dir = "W";
          break;
      }
    });
  };

  View.prototype.step = function() {
    var that = this;
    setInterval(function() {
      that.snake.move();
      var grid = that.grid;
      that.board.render();
    }, 500);
  };
})();
