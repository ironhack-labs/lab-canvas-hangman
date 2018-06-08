var hangman;

// function Hangman() {
function Hangman(words, secretWord, letters, guessedLetter, errorsLeft) {
  this.words = [];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

// Hangman.prototype.getWord = function () {
var words = ["un", "deux", "trois", "quatre", "cinq"];
// //console.log(words.length); 
// var index = [Math.floor(Math.random() * (words.length))];
// console.log(index);
// var secretWord = words[index];
// console.log(secretWord);


Hangman.prototype.getWord = function () {
    this.secretWord = this.words[Math.floor(Math.random() * (this.words.length))];
    return ""+this.secretWord+"";
};
    
// Hangman.prototype.checkIfLetter = function (keyCode) {

//};

// Hangman.prototype.checkClickedLetters = function (key) {

// };

// Hangman.prototype.addCorrectLetter = function (i) {

// };

// Hangman.prototype.addWrongLetter = function (letter) {

// };

// Hangman.prototype.checkGameOver = function () {

// };

// Hangman.prototype.checkWinner = function () {

// };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
