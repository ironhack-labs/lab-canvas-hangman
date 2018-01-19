var hangman;

function Hangman() {
  var self = this;
  self.words = ['cheese', 'tomato', 'table'];
  self.secretWord = '';

};

Hangman.prototype.getWord = function () { 
  var self = this;
  var n = Math.floor(Math.random() * self.words.length);
  choosenWord = self.words[n];
  return choosenWord;
};

Hangman.prototype.checkIfLetter = function (keyCode) {

if (64 < keyCode < 91) {//keyCode.length === 1 && keyCode.match(/[a-z]/i)) {
  return true;
} else { 
 return false; 
}

};

 Hangman.prototype.checkClickedLetters = function (key) {

};

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
