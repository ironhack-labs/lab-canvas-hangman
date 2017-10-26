var hangman;

function Hangman() {
  this.words = ['andrei','papu','yaiza','avello','manu','marknoesta'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype._getWord = function () {
  var random = Math.round(Math.random() * this.words.length);
  this.secretWord = this.words[random];
  return this.words[random];
};

Hangman.prototype._checkIfLetter = function(keyCode) {
  return Number.isInteger(keyCode) ? keyCode <= 90 && keyCode >= 65 : false;
};

Hangman.prototype._checkClickedLetters = function(key) {
  return this.letters.includes(key) ? false : true;
};

Hangman.prototype._addCorrectLetter = function(i){
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype._addWrongLetter = function (){
  this.errorsLeft -- ;
  this._checkGameOver();
};

Hangman.prototype._checkGameOver = function() {
  return this.errorsLeft == 0 ? false : true;
};

Hangman.prototype._checkWinner = function() {
  var auxArray = this.secretWord.split("");
  var that = this;
  console.log(auxArray);
  var isComplete = true;
  auxArray.forEach(function(letter){
    console.log(that.guessedLetter);
    if (!that.guessedLetter.includes(letter)){
       console.log("comparando :" +letter+" resultado: "+!that.guessedLetter.includes(letter));
       isComplete = false;
     }
   }); // CHECK WITH FUNCTION EVERY
  return isComplete;
};
