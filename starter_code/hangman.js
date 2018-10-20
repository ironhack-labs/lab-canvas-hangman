var hangman;

function Hangman() {
  this.words = ["Dracofeu","Tortank","Florizare","Raichu"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10 ;
};

 Hangman.prototype.getWord = function (word) {
  var randomWord = this.words[Math.floor(Math.random() * this.words.length)];
  return randomWord;
 };
 
 Hangman.prototype.checkIfLetter = function (keyCode) {
   return keyCode > 64 && keyCode < 91;
 };
 
 Hangman.prototype.checkClickedLetters = function (key) {
  if (this.letters.indexOf(key) === -1){
    return true;
  }
    else {
      return false;
    }
 };

 Hangman.prototype.addCorrectLetter = function (i) {
    this.guessedLetter += i ;
 };
 
 Hangman.prototype.addWrongLetter = function (letter) {}
 
 Hangman.prototype.checkGameOver = function () {}
 
 Hangman.prototype.checkWinner = function () {}
 ;

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
//this.letters.push(clickedLetter);
    //clickedLetter = this.letters.indexOf(key, clickedLetter + 1);
  