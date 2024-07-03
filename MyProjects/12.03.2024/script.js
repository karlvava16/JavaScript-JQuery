let board = [];
let emptyTile = { row: 0, col: 0 };
let timerInterval;
let time = 0;

function initializeBoard() {
  board = Array.from({ length: 4 }, (_, row) =>
    Array.from({ length: 4 }, (_, col) => row * 4 + col + 1)
  );
  board[3][3] = null;
  emptyTile = { row: 3, col: 3 };
  shuffleBoard();
  renderBoard();
}

function shuffleBoard() {
  for (let i = 0; i < 1000; i++) {
    const moves = getPossibleMoves();
    const move = moves[Math.floor(Math.random() * moves.length)];
    makeMove(move);
  }
}

function renderBoard() {
  const $board = $("#board");
  $board.empty();
  board.forEach((row, rowIndex) => {
    row.forEach((tile, colIndex) => {
      const $tile = $("<div>").addClass("tile");
      if (tile === null) {
        $tile.addClass("empty");
      } else {
        $tile.text(tile).on("click", () => handleTileClick(rowIndex, colIndex));
      }
      $board.append($tile);
    });
  });
}

function handleTileClick(row, col) {
  if (canMoveTile(row, col)) {
    makeMove({ row, col });
    renderBoard();
    if (isSolved()) {
      clearInterval(timerInterval);
      $("#dialog-message").text(`Puzzle solved in ${time} seconds!`);
      $("#dialog").dialog({
        modal: true,
        buttons: {
          "New Game": function () {
            $(this).dialog("close");
            initializeBoard();
            startTimer();
          },
        },
      });
    }
  }
}

function getPossibleMoves() {
  const moves = [];
  if (emptyTile.row > 0)
    moves.push({ row: emptyTile.row - 1, col: emptyTile.col });
  if (emptyTile.row < 3)
    moves.push({ row: emptyTile.row + 1, col: emptyTile.col });
  if (emptyTile.col > 0)
    moves.push({ row: emptyTile.row, col: emptyTile.col - 1 });
  if (emptyTile.col < 3)
    moves.push({ row: emptyTile.row, col: emptyTile.col + 1 });
  return moves;
}

function canMoveTile(row, col) {
  const rowDiff = Math.abs(row - emptyTile.row);
  const colDiff = Math.abs(col - emptyTile.col);
  return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
}

function makeMove({ row, col }) {
  board[emptyTile.row][emptyTile.col] = board[row][col];
  board[row][col] = null;
  emptyTile = { row, col };
}

function isSolved() {
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      if (row === 3 && col === 3) return true;
      if (board[row][col] !== row * 4 + col + 1) return false;
    }
  }
}

function startTimer() {
  time = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    time++;
    $("#time").text(time);
  }, 1000);
}

$("#new-game").on("click", () => {
  initializeBoard();
  startTimer();
});

$(document).ready(() => {
  initializeBoard();
  startTimer();
});
