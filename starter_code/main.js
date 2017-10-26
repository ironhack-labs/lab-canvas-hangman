
document.getElementById("start-game-button").onclick = function(){
  hangman = new Hangman();
  hangman.secretWord = hangman._getWord();
  board = new HangmanCanvas(hangman.secretWord);
};


document.onkeydown = function(e) {
  //If the pressed char is among 65 and 90 (A-Z)
  if(hangman._checkIfLetter(e.keyCode)){
    if(!hangman._checkClickedLetters(e.key)){//For check and adding letters not introduced
      //If the pressed char is included into the correct word
      if(hangman._checkLetter(e.keyCode)){
        //Over array for repeated letters
        if(!hangman.guessedLetter.split('').includes(e.key.toUpperCase())){
          for(var x = 0; x < hangman.secretWord.length; x++){
            if(hangman.secretWord[x] == e.key.toUpperCase()){
              board._writeCorrectLetter(x);
              hangman.guessedLetter += e.key.toUpperCase();
            }
          }
        }
        //Compare if secret word and guessed are equal
        if(hangman._checkWinner())board._winner();
      } else{
        hangman._addWrongLetter();
        board._writeWrongLetter(e.key.toUpperCase(), hangman.errorsLeft);
        //If counter is zero paint Game over //Do 9, not 10
        if(hangman._checkGameOver())board._gameOver();
      }
    }
  }
};
