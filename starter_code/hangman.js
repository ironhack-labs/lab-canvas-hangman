var hangman;

function Hangman() {
  this.words = ["dog", "cat", "mouse"];
  this.secretWord = "dog";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var randomIndex = Math.floor(Math.random()*this.words.length);
  var randomWord = this.words[randomIndex];
  return randomWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if(keyCode > 64 && keyCode < 91) return true;
  return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  var index = this.letters.indexOf(key.toUpperCase());

  if(index<0){
    return true;
  }else{
    return false;
  }
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += i;
  this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.letters.push(letter);
  this.errorsLeft--;

};

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft == 0) return true;
  return false;
};

Hangman.prototype.checkWinner = function () {
  
  if(this.guessedLetter.length === this.secretWord.length) return true;
  return false;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
