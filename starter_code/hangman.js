var hangman;

function Hangman() {
  this.words = ['secret', 'palabra', 'nombre'];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;

}

 Hangman.prototype.getWord = function () {

  return this.words[Math.floor(Math.random()* this.words.length)];
 };

Hangman.prototype.checkIfLetter = function (keyCode) {
    if(keyCode>64 && keyCode<91){
    return true 
  }else{
    return false
  }
};

Hangman.prototype.checkClickedLetters = function (key) {
  var arr = this.letters
  return arr.indexOf(key)===-1;
  
};

Hangman.prototype.addCorrectLetter = function () {
   
  return this.guessedLetter += this.letters

};

Hangman.prototype.addWrongLetter = function (letter) {

};

Hangman.prototype.checkGameOver = function () {

};

Hangman.prototype.checkWinner = function () {

};

var myHangman = new Hangman();
myHangman.checkIfLetter(5);



document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();

};


document.onkeydown = function (e) {

};
