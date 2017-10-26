$(document).ready(function(){

$("#start-game-button").click(function(){
  hangman = new Hangman();
  var word = hangman._getWord();
  var canvas = new HangmanCanvas(word);
  canvas._createBoard();
  canvas._drawLines();
});


$(window).keypress(function(e){
  if(hangman._checkIfLetter(e.keyCode)) {

var letter = String.fromCharCode(e.keyCode);
//hangman.__checkClickedLetters(letter);
console.log(hangman.__checkClickedLetters(letter));
console.log(hangman.guessedLetter);



  }
});





























});
