$(document).ready(function() {
  var word, canvas;
  $("#start-game-button").click(function() {
    hangman = new Hangman();
    word = hangman._getWord();
    canvas = new HangmanCanvas(word);
    canvas._createBoard();
    canvas._drawLines();

    $(window).keypress(function(e) {
      if (hangman._checkIfLetter(e.keyCode)) {
        var letter = String.fromCharCode(e.keyCode);
        if (hangman._checkClickedLetters(letter)) {
          if (hangman.secretWord.includes(letter)) {
            // FUNCTION TO DRAW REPEATED LETTERS!!
            var arr = hangman.secretWord.split("");
            // Create new array filtering the repeated letters.
            var newArr = arr.filter(function(e) {
              if (e == hangman.letters[hangman.letters.length - 1]) return e;
            })
            // Add the correct letter 3 times.
            for (var i = 0; i < newArr.length; i++) {
              hangman._addCorrectLetter(hangman.secretWord.indexOf(letter, i));
            }
            // Draw the letter enough times.
            for (var j = 0; j < arr.length; j++) {
              canvas._writeCorrectLetter(canvas.secretWord.indexOf(letter, j));
            }
            // REPEATER DRAWING FUNCTION ENDS HERE.
            if (hangman._checkWinner()) canvas._winner();
          } else {
            canvas._writeWrongLetter(letter, hangman.errorsLeft);
            hangman._addWrongLetter();
            if (hangman._checkGameOver()) canvas._gameOver();
          }
        }
      }
    });
  });
});
