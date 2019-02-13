var hangman;

 function Hangman() {
this.words = ["uno","dos","tres"];
this.secretWord = "";
this.letters = [];
this.guessedLetter = "";
this.errorsLeft = 10;
 };

 Hangman.prototype.getWord = function () {
 var nro = Math.floor(Math.random() * this.words.length);
 var palabra = this.words[nro];
 return palabra;
 };

Hangman.prototype.checkIfLetter = function (keyCode) {
if (keyCode >= 65 && keyCode <= 90) {return true}
 return false
 };

 Hangman.prototype.checkClickedLetters = function (key) {
var n = this.letters.includes(key)
return !n
 };

Hangman.prototype.addCorrectLetter = function (i) {
//this.guessedLetter += i
//var res = this.secretWord.charAt(i)
let letra = this.secretWord.charAt(i)
this.guessedLetter += letra.toUpperCase()
 };

 Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft = this.errorsLeft -1;
 
};

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
