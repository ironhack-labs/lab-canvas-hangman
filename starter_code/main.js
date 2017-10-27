var secretWord;
var canvas;
var hangman;
document.getElementById("start-game-button").onclick = function() {
  hangman = new Hangman();
  secretWord = hangman._getWord().toUpperCase();
  console.log(secretWord);
  canvas = new HangmanCanvas(secretWord);
};


document.onkeydown = function(e) {
  var keyPressed = e.key.toUpperCase();

  // IF LETTER AND NO PRESSED BEFORE
  if (hangman._checkClickedLetters(keyPressed) && hangman._checkIfLetter(e.keyCode)) {
    hangman._addLetter(keyPressed);
    // If correct letter
    if (secretWord.indexOf(keyPressed) != -1) {
      var re = new RegExp(keyPressed, 'g');
      var occ = (secretWord.match(re)).length;
      var next = 0;
      for (var i = 0; i < occ; i++) {
        canvas._writeCorrectLetter(secretWord.indexOf(keyPressed, next));
        hangman._addCorrectLetter(secretWord.indexOf(keyPressed, next));
        next = secretWord.indexOf(keyPressed, next) + 1;
      };

      if (hangman._checkWinner()) {
        canvas._winner();
      }

    } else {
      canvas._writeWrongLetter(keyPressed, hangman.errorsLeft);
      hangman._addWrongLetter();
      if (hangman._checkGameOver()) {
        canvas._gameOver();
      }
    }


  }
};
