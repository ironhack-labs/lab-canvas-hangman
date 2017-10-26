$(document).ready(function() {


  // document.getElementById("start-game-button").onclick = function(){
  $("#start-game-button").on("click", function() {
    hangman = new Hangman();
    var word = hangman.secretWord;
    var canvas = new HangmanCanvas(word);
    canvas._createBoard();
    canvas._drawLines();

    document.onkeydown = function(e) {

      if (hangman._checkIfLetter(e.keyCode) == true) {
          console.log(e.keyCode)
      }
    }

  });
});
