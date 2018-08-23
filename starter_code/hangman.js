var hangman;

function Hangman() {
  this.words=["uno","dos", "tres"];
  this.secretWord='';
  this.letters=[];
  this.guessedLetter='';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var numero = Math.floor(Math.random()*this.words.length);
  this.secretWord = this.words[numero].toString();
  return this.secretWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 90){
    return true;
    }
    return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.includes(key)){
    return false;
  }else{
    return true;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  console.log("que esto",String.fromCharCode(i))
  if (this.checkIfLetter(i) && this.checkClickedLetters(i)){
    this.guessedLetter = String.fromCharCode(i);
  } 
};

Hangman.prototype.addWrongLetter = function (letter) {
  if (!this.letters.includes(letter)){
    this.errorsLeft -=1;
    }
};

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft==0){
    return true;
    }
    return false;
};

Hangman.prototype.checkWinner = function () {
  if (this.guessedLetter.length == this.secretWord.length){
    return true;
  }
    return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};