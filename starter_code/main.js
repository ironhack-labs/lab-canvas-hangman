$(document).ready(function() {
  $("#start-game-button").on('click', function() {
    var hangman = new Hangman();
    var game = new HangmanCanvas('HOLA');
    // Painting the initial board.
    game._drawHangman(errorsDraw[0]);
    game._drawHangman(errorsDraw[1]);
    game._drawHangman(errorsDraw[2]);
    game._drawHangman(errorsDraw[3]);
    // Pressing buttons
    $(window).keypress(function(e){
      if (hangman._checkIfLetter(e.keyCode)){
        var letter = String.fromCharCode(e.keyCode);
        if(hangman._checkClickedLetters(letter)){
            game._writeCorrectLetter(game.secretWord.indexOf(letter));
        }
      }
    });
  });
});
