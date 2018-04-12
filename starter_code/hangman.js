function Hangman() {
  this.words = ["diego","hugo","tsuki","bliss","ori","joss"];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;  
}

Hangman.prototype.getWord = function () {
 var letra = Math.floor(Math.random()*this.words.length)
 return this.words[letra];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  this.letters.push(keyCode);
  if(keyCode >= 65 && keyCode <= 90){
    return true 
  }
  return false;
};

Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.indexOf(key) !== -1){
    return true;
  }
  return false;
};


Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft --;  
}; 

Hangman.prototype.checkGameOver = function () {
  if(this.errorsLeft === 0 ){
    return true;
  }
  return false;
};

Hangman.prototype.checkWinner = function () {
  if(this.guessedLetter.length === this.secretWord.length){
    return true;
  }
  return false;
};

document.getElementById('start-game-button').onclick = function () {

};

document.onkeydown = function (e) {

};