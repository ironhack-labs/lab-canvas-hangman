var secretWord;
var canvas;
var hangman;
document.getElementById("start-game-button").onclick = function(){
   hangman = new Hangman();
  secretWord = hangman._getWord().toUpperCase();
  console.log(secretWord);
   canvas = new HangmanCanvas(secretWord);
};


document.onkeydown = function(e) {
  console.log(secretWord);
  console.log(e.key.toUpperCase());
  if(secretWord.indexOf(e.key.toUpperCase()) != -1 ){
    canvas._writeCorrectLetter(secretWord.indexOf(e.key.toUpperCase()));
    hangman._addCorrectLetter(secretWord.indexOf(e.key.toUpperCase()));
    if (hangman._checkWinner()) {
      canvas._winner();
    }

  } else {
      canvas._writeWrongLetter(e.key.toUpperCase(), hangman.errorsLeft);
      hangman._addWrongLetter();
  }
};
