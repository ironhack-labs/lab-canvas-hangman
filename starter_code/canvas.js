function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,document.getElementById('hangman').width,document.getElementById('hangman').height)
};

HangmanCanvas.prototype.drawLines = function () {
  var x = 400
  for(var i = 0; i < this.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(x,750);
    this.ctx.lineTo(x + 50,750);
    this.ctx.stroke()
    this.ctx.closePath()
    x += 70 
    console.log(x)
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


