var hangman
var canvas



document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  canvas = new HangmanCanvas("Ironhack");

  canvas._getWord();
  canvas._drawHangman();
};



document.onkeydown = function(e) {
canvas._checkIfLetter(e);
canvas._writeCorrectLetter(e);
};
