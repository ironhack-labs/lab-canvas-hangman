var hangman;

// function Hangman() {

// }

// Hangman.prototype.getWord = function () {

// };

// Hangman.prototype.checkIfLetter = function (keyCode) {

// };

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

// document.getElementById('start-game-button').onclick = function () {
//   hangman = new Hangman();
// };


// document.onkeydown = function (e) {

// };



var hangman;

function Hangman() {
	this.words = ["france", "perou", "coupe", "monde"];
	this.secretWord = "coupe";
	this.letters = [];
	this.guessedLetter = "";
	this.errorsLeft = 10;
}

Hangman.prototype.getWord = function () {
	return this.words[Math.floor(Math.random()* this.words.length)]
};

Hangman.prototype.checkIfLetter = function (keyCode) {
	return 65 < keyCode && 90 > keyCode;
};

Hangman.prototype.checkClickedLetters = function (key) {
	return this.letters.indexOf(key) === -1;
};

Hangman.prototype.addCorrectLetter = function (i) {
	this.guessedLetter += this.secretWord[i].toUpperCase();
	this.checkWinner();
};

Hangman.prototype.addWrongLetter = function (letter) {
	this.errorsLeft--;
	this.checkGameOver();
};

Hangman.prototype.checkGameOver = function () {
	return this.errorsLeft === 0;
};

Hangman.prototype.checkWinner = function () {
	return this.guessedLetter.length === this.secretWord.length;
};

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
  hangmanCtx = new HangmanCanvas(hangman.secretWord);
  hangmanCtx.createBoard();
  hangmanCtx.drawLines();
  hangmanCtx.writeCorrectLetter(4);
  hangmanCtx.writeWrongLetter("A", 9);
  hangmanCtx.drawHangman(10);
};


document.onkeydown = function (e) {

};