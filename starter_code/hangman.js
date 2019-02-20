var hangman;

 function Hangman() {
this.words = ["JavaScript", "kata", "Ironhack", "iteration", "Madrid", "Miami", "Barcelona", "Berlin", "Sao Paolo", "Mexico DF", "Paris"];
this.secretWord = this.words[Math.floor(Math.random() * this.words.length)];

this.letters = [];
this.guessedLetter = '';
this.errorsLeft = 10;
 }

 Hangman.prototype.getWord = function () {

 secretWord = this.secretWord;

 return secretWord;

};

    Hangman.prototype.checkIfLetter = function (keyCode) {

      if(keyCode >= 65 && keyCode <= 90){
    //   return String.fromCharCode(keyCode);
      return true;
      } else {
        return false;
      }
    
  };

 Hangman.prototype.checkClickedLetters = function (key) {

 
  if (this.letters.includes(key)) {
    return false;
  } else {
    return true;
  }

 };
 
Hangman.prototype.addCorrectLetter = function (i) {


this.guessedLetter = this.guessedLetter + this.secretWord[i].toUpperCase();
this.checkWinner();

};

 Hangman.prototype.addWrongLetter = function (letter) {

 this.errorsLeft--;

 this.checkGameOver();
 };

Hangman.prototype.checkGameOver = function () {

  if (this.errorsLeft === 0) {
    return true;
  } else {
    return false;
  }

};

Hangman.prototype.checkWinner = function () {

  if (this.guessedLetter.length == this.secretWord.length) {
    return true;
  } else {
    return false;
  }

 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
