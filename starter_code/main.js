document.addEventListener("DOMContentLoaded", function() {
  var hangman = new Hangman();
  hangman.canvas.createBoard();
  hangman.canvas.drawLines();
});