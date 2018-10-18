var hangman;

function Hangman() {
  this.words = ["chien", "biche", "chat"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var x = Math.floor(Math.random()*this.words.length);
  return this.secretWord = this.words[x];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if (keyCode >= 65 && keyCode <= 122 ) {return true;}
  else {return false;}
};

Hangman.prototype.checkClickedLetters = function (key) {
   if (this.letters.indexOf(key.toString()) === -1) {return true;}
   else {return false;}
};

Hangman.prototype.addCorrectLetter = function (i) {
  var correctLetter = this.secretWord[i];
  this.guessedLetter[i] = correctLetter;
    
  
  return ""+this.guessedLetter;

};

// Hangman.prototype.addWrongLetter = function (letter) {

// };

Hangman.prototype.checkGameOver = function () {
  if (this.errorsLeft == 0) { return true;}
  else {return false;}
};


Hangman.prototype.checkWinner = function () {
    if (this.secretWord.length == this.guessedLetter.length) {
   
      for (var i=0; i <= this.secretWord.length; i++) {
   
        if (this.secretWord.indexOf(this.guessedLetter[i]) == -1) { return false; }
        else {return true;}
      }
   
    }
   
    else {  return false; }
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
