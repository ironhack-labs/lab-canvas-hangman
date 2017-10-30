window.onload = function() {
  function gameOver() {
    document.getElementById('game-over').classList.remove('hidden');
  };

  function winner() {
    document.getElementById('winner').classList.remove('hidden');
  };

  document.getElementById("start-game-button").onclick = function(){
    var hangman = new Hangman();
    var canvas = new HangmanCanvas(hangman.secretWord);

    console.log(hangman.secretWord);

    document.onkeydown = function(e) {
      if(!hangman._checkIfLetter(e.keyCode) || !hangman._checkClickedLetters(e.key)) {
        return;
      }

      var index = hangman.secretWord.indexOf(e.key);
      if(index !== -1) {
        hangman._addCorrectLetter(index);
        canvas._writeCorrectLetter(index);
      } else {
        hangman.letters.push(e.key);
        canvas._writeWrongLetter(e.key, hangman.errorsLeft);
        hangman._addWrongLetter();
      }

      if(hangman._checkGameOver()) {
        gameOver();
      }

      if(hangman._checkWinner()) {
        winner();
      }
    };
  };
};
