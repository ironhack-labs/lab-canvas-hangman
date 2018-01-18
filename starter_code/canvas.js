

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,800,1200);
  this.ctx.lineWidth(3);
  this.ctx.lineCap(round);
  this.ctx.lineJoin(round);
};

HangmanCanvas.prototype.drawLines = function () {
  var sWord = hangman.secretWord;
  var lines ="";
  for(i = 0, xValue = 200; i < sWord.length; i++, xValue += 50){
    console.log(sWord)
    lines += "_ ";
  }
  
  this.ctx.font = "48px serif";
  this.ctx.fillText(lines,300, 600)
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
