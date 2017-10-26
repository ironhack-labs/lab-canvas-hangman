var hangman
var canvas



document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  canvas = new HangmanCanvas("Hola");

  hangman._getWord();
  canvas._drawHangman();
};



document.onkeydown = function(e) {
hangman._checkIfLetter(e);

  canvas._writeCorrectLetter(e);


};
