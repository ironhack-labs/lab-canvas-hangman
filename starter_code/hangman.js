var hangman=['Father', 'Mother', 'Child'];

function Hangman() {
this.words= hangman;
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;
}
 Hangman.prototype.getWord = function () {
   var letra = hangman[Math.floor(Math.random()* this.words.length - 1)] 
   return letra;
 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
this.letters.push(keyCode);
  if ( keyCode > 64 && keyCode < 123 ){
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
this.guessedLetter += this.secretWord[i].toUpperCase();
 };

 Hangman.prototype.addWrongLetter = function (letter) {
if (this.guessedLetter === false){
  return this.errorsLeft.length - this.letters.length;
}


 };


 Hangman.prototype.checkGameOver = function () {

 };

 Hangman.prototype.checkWinner = function () {

 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
