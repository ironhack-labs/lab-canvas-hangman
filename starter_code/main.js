$(document).ready(function(){


$("#start-game-button").on("click", function(){
  hangman = new Hangman();
  var word = hangman.secretWord;

  var canvas = new HangmanCanvas(word);
  canvas._createBoard();
  canvas._drawLines();

});
 });
