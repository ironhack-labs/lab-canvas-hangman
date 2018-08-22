
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,800); 
  this.ctx.strokeRect(0,0,1200,800)
};

HangmanCanvas.prototype.drawLines = function () {
this.ctx.beginPath();

console.log(this.secretWord)


};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};


var nuevo = new HangmanCanvas;
nuevo.createBoard();
nuevo.drawLines();


