var hangman;

function Hangman() {
  this.words = ["ironhack","ironhacker","avocado","condor","multiplex","cobol"];
  this.secretWord="";
  this.letters=[];
  this.guessedLetter="";
  this.errorsLeft=10;
}

Hangman.prototype.getWord = function () {
  var random=Math.floor(Math.random()*this.words.length)
  return this.words[random];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  if(keyCode > 64 && keyCode < 91){
    return true
  }
  return false
};

Hangman.prototype.checkClickedLetters = function (key) {
  
  return !this.letters.includes(key);
  
  
};

Hangman.prototype.addCorrectLetter = function (i) {
this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
};

Hangman.prototype.checkGameOver = function () {
  return this.errorsLeft==0;
};

Hangman.prototype.checkWinner = function () {
  var self=this
  var total = this.secretWord.toUpperCase().split('').reduce(function(acc,letter) {
    if(self.guessedLetter.indexOf(letter) > -1){
      return acc + 1
    }
    return 0
  },0);
  return total==this.secretWord.length;
};

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
// };


document.onkeydown = function (e) {

};
