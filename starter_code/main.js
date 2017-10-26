$('document').ready(function() {
  document.getElementById('start-game-button').onclick = function() {
    var hangman = new Hangman();
    var canvas = new HangmanCanvas(hangman._getWord());

    document.onkeydown = function(e) {
      // keyCode -> Number
      // key --> letter
      var word = e.key.toUpperCase();
      if (hangman._checkIfLetter(e.keyCode)) {
        if (hangman._checkClickedLetters(e.keyCode)) {
          if (hangman._checkIfExists(word)) {
            var indices = [];
            for (var i = 0; i < hangman.secretWord.length; i++) {
              if (hangman.secretWord[i] === word)
                indices.push(i);
            }
            for (var x = 0; x < indices.length; x++) {
              canvas._writeCorrectLetter(indices[x]);
            }
            hangman._addCorrectLetter(indices[0]);
            if (hangman._checkWinner()) {
              console.log('winner');
              canvas._winner();
            };
          } else {
            if (hangman._checkGameOver()){
              canvas._gameOver();
            } else {
              canvas._writeWrongLetter(word, hangman.errorsLeft);
              hangman._addWrongLetter(word);
            }
          }
        } else {
          console.log('key repeated do nothing');
        }

      };
    };
  };
});
