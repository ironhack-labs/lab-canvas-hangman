$(function(){
  $('#start-game-button').click(function(){
    // Initiate our objects
    var hangman = new Hangman();
    var secret = hangman.words[0];
    var canvas = new HangmanCanvas(secret);

    // Hide main menu
    $(this).css('display','none');
    $('.game-logo').css('display','none');

    // Draw bases of our pole
    canvas._drawHangman(errorsDraw[0]);
    canvas._drawHangman(errorsDraw[1]);
  });
});

document.onkeydown = function(e) {
    var hangman = new Hangman();
    var secret = hangman.words[0];
    var canvas = new HangmanCanvas(secret);

    hangman._checkIfLetter();
    hangman.guessedLetter = e.key;
    console.log(e.key);

    if(hangman._checkClickedLetters() == false){
      console.log('guay!');
    } else {
      losePoints();
    }
};

function losePoints(){
  // Get length of secret word
  hangman.errorsLeft = secret.length;

  // If bad letter
  hangman.errorsLeft--;
  var errors = 0;
  errors++;
  canvas._drawHangman(errorsDraw[errors]);
}
