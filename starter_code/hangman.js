var hangman;

function Hangman() {
  this.words = ["hola", "adios"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
    var secretWord = this.words[Math.floor(Math.random()*this.words.length)];
    return secretWord
};

Hangman.prototype.checkIfLetter = function (keyCode) {
    if(keyCode > 64 && keyCode <91 ) return true;
    return false;
  
};

Hangman.prototype.checkClickedLetters = function (key) {
    
    if (this.letters.includes(key) ) {
      return false
    } else {
      return true 
    }
};

Hangman.prototype.addCorrectLetter = function (i) {
  return this.guessedLetter = this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(this.letter)
  this.errorsLeft--;
  if(this.errorsLeft === 0){
    return this.checkGameOver
  }
  return this.errorsLeft
};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0){
    return true
  } else{
    return false
  }
};

Hangman.prototype.checkWinner = function () {
  if(this.secretWord.indexOf(this.guessedLetter) && this.secretWord.length === this.guessedLetter.length){
    return true
  } else {
    return false
  }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};