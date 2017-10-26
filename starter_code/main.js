var hangman = new Hangman();
var canvas = new HangmanCanvas("ironhack");

console.log(canvas.secretWord);

$(function() {
  $('#start-game-button').click(function() {
    // Hide main menu, start game
    $(this).css('display', 'none');
    $('.game-logo').css('display', 'none');

    // Draw bases of our hanging pole
    canvas._drawHangman(errorsDraw[0]); // triangle
    canvas._drawHangman(errorsDraw[1]); // first line up
  });
});

document.onkeydown = function(e) {
  if (hangman._checkIfLetter(e.keyCode)) {
    if (canvas.secretWord.indexOf(e.key) == -1) {
      console.log('wrong letter: [' + e.key + ']');
      hangman._addWrongLetter();
      canvas._writeWrongLetter(e.key, hangman.errorsLeft)
      console.log('errors left: ' + hangman.errorsLeft);
    }
    else {
      hangman._addCorrectLetter(1);
      canvas._writeCorrectLetter(canvas.secretWord.indexOf(e.key));
      console.log('Right letter [' + e.key + ']');
    }
  }

  if (hangman.errorsLeft == 1){
    canvas._gameOver();
  }


};
