document.getElementById("start-game-button").onclick = function(){
  var hangman = new Hangman();
};


document.onkeydown = function(e) {

};

//COMPARE GUESSED LETTERS TO SECRET word
// var lettersArr = this.secretWord.split('');
// var that = this;
// function isInGuessedLetters(letter) {
//   return that.guessedLetter.indexOf(letter) !== -1;
// }
// return lettersArr.every(isInGuessedLetters);
