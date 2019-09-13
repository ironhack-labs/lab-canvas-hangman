const hangman = new Hangman();
const secretWord = hangman.getWord();
const board = new HangmanCanvas(secretWord);
document.getElementById('start-game-button').onclick = function() {
  board.createBoard();
  board.drawLines();
};

document.onkeyup = function(e) {
  board.writeCorrectLetter(e.key);
  board.writeWrongLetter(e.key);
  board.drawLines();
  board.drawHangman();
};
