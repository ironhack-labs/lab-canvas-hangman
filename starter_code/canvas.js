
$("button").click(function() {
  $('html,body').animate({
      scrollTop: $("canvas").offset().top},
      'slow');
});

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d'); 
  this.word = secretWord;
  this.winnerPic = document.createElement('img');
  this.winnerPic.src = './images/awesome.png'
  this.looserPic = document.createElement('img');
  this.looserPic.src = './images/gameover.png'
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, canvas.width, canvas.height)

}

HangmanCanvas.prototype.drawLines = function () {
  var x = 500
  var y = 800
  for (var i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x+60,y);
    this.ctx.closePath();
    this.ctx.stroke();
    x += 70;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font = '30px Arial'
  this.ctx.fillText(this.secretWord[index], 440 + index*50, 670)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = '30px Arial';
  var xWrong = 800;
  var yWrong = 100 + errorsLeft * 60;
  this.ctx.fillText(letter, xWrong, yWrong)
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

HangmanCanvas()