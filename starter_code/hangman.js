var hangman;

function Hangman() {
  this.words = ["coding", "enjoy", "basketball", "wizard", "beer", "barman", "parties", "lesson", "codewars", "downhill", "forest", "function", "friends", "athlete", "design", "canvas", "compass", "html", "background", "limitless", "infinite", "foodie", "springroll", "summer", "pumpkin", "science", "nature", "parachute"];
  this.secretWord = "";
  this.letters = [];
  this.guessedLetter = "";
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
  var word = Math.floor(Math.random() * this.words.length)
  return this.words[word];
};

Hangman.prototype.checkIfLetter = function (keyCode) {
  return (keyCode >= 65 && keyCode <= 90) ? true : false
};

Hangman.prototype.checkClickedLetters = function (key) {
  return (this.letters.includes(key) === true) ? false : true
};

Hangman.prototype.addCorrectLetter = function (i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
  return this.checkGameOver;
};

Hangman.prototype.addWrongLetter = function (letter) {
  this.errorsLeft--;
  this.letters.push(letter);
};

Hangman.prototype.checkGameOver = function () {
  return (this.errorsLeft === 0) ? true : false
};

Hangman.prototype.checkWinner = function () {
  var letterSet = new Set(this.secretWord);
  return (letterSet.size === this.guessedLetter.length) ? true : false
};

window.onload = function(){

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangman.secretWord = hangman.getWord()
  hangmanCanvas = new HangmanCanvas(hangman.secretWord)
  hangmanCanvas.createBoard();
  hangmanCanvas.drawLines(hangmanCanvas);
  hangmanCanvas.drawHangman();
};


document.onkeydown = function (e) {

};

};
