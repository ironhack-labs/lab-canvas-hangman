let canvas = document.getElementById('hangman');


function HangmanCanvas(secretWord) {
  this.context = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.context.clearRect(0, 0, canvas.width, canvas.height)
  this.context.lineWidth = 10
  this.context.beginPath()
  this.context.moveTo(0, 0)
  this.context.lineTo(canvas.width, 0)
  this.context.lineTo(canvas.width, canvas.height)
  this.context.lineTo(0, canvas.height)
  this.context.lineTo(0, 0)
  this.context.stroke()
};

HangmanCanvas.prototype.drawLines = function (secretWord) {
  let aux = canvas.width / 4;
  for (let i = 0; i < secretWord.length; i++) {  
    this.context.lineWidth = 10  
    this.context.beginPath()
    this.context.moveTo(aux, 700)
    this.context.lineTo(aux+50, 700)
    this.context.stroke()
    aux += 70
  }
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

let hangmanCanvas = new HangmanCanvas()

hangmanCanvas.createBoard()
hangmanCanvas.drawLines('Edgar')