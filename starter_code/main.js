window.onload = function() {
  document.getElementById("start-game-button").onclick = function(){
    var hangman = new Hangman();
    var canvas = new HangmanCanvas(hangman.secretWord);
    console.log(hangman.secretWord);
    document.onkeydown = function(e) {
      if(!hangman._checkIfLetter(e.keyCode) || !hangman._checkClickedLetters(e.key)) {
        console.log(e.key);
        console.log(e.keyCode);
        console.log('tecla no válida');
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
    };
  };
};
