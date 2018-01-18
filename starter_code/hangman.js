var hangman;

function Hangman() {
  this.words = ['a', 'b,', 'c'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  return this.words[Math.floor(Math.random()*this.words.length)];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if(((typeof(keyCode) == 'number') && (keyCode >= 65) && (keyCode <= 90))){
    return true
  } else { return false }
};
//Key Code de 65 a 90
Hangman.prototype.checkClickedLetters = function (key) {
   if(this.letters.includes(key)){
     return false;
   } return true;
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase()
};

Hangman.prototype.addWrongLetter = function (letter) {
   
};

Hangman.prototype.checkGameOver = function () {
   if(this.letters >= this.errorsLeft){
     return true;
   } return false;
};

Hangman.prototype.checkWinner = function () {
  if(this.letters == this.errorsLeft){
    return true;
  } return false;
};


document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
