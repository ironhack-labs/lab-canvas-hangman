var hangman;

function Hangman() {
 this.words =['coche','perro','amigo']
 this.secretWord = ''
 this.letters = []
 this.guessedLetter = ''
 this.errorsLeft = ''
 
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random() * this.words.length)]

};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode >= 60 && keyCode <= 90);
};

 Hangman.prototype.checkClickedLetters = function (key) {
     if (this.letters.includes(key)) {
       return true
     }
     else {return false}

 };

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter = i

};

Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft = this.errorsLeft -1
};

Hangman.prototype.checkGameOver = function () {
if (this.errorsLeft==0){
  return true
}
else {return false}
};

Hangman.prototype.checkWinner = function () {
  if (this.secretWord = this.guessedLetter){return false
  }
  else {return true}
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
