var hangman;

function Hangman() {
  this.words = ["hello","goodnight","sleep","tired","javascript"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function (words){
  return this.words[Math.floor(Math.random()*(this.words.length))]
  }

Hangman.prototype.checkIfLetter = function (keyCode) {
  	if (keyCode>64 && keyCode<91) {
  		return true
  	} else {
		return false
  	}
  };

Hangman.prototype.checkClickedLetters = function (key) {
      if (this.guessedLetter == this.letters){
      	return false
      }else{
      	return true
      }
  };

Hangman.prototype.addCorrectLetter = function (i) {

return i+
 };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
