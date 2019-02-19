
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
}

HangmanCanvas.prototype.createBoard = function () {
  this.createBoard = this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function (obj) {
  var baseline = 400
  for (i = 0; i < obj.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(baseline, 700);
    this.ctx.lineTo(baseline+50, 700);
    this.ctx.stroke();
    baseline += 60;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  var baseline = 407;
  var position = 60;
  this.ctx.font = '49px serif';
  this.ctx.fillText('H', baseline + (index*position), 690);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  var baseline = 800;
  this.ctx.font = '49px serif';
  this.ctx.fillText(letter, baseline, 250);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  //draw the base
  this.ctx.beginPath();
  this.ctx.moveTo(150, 700);
  this.ctx.lineTo(350, 700);
  this.ctx.lineTo(250, 600);
  this.ctx.lineTo(150, 700);
  this.ctx.stroke();
  this.ctx.closePath()
  //draw the column
  this.ctx.beginPath();
  this.ctx.moveTo(250, 600);
  this.ctx.lineTo(250, 100);
  this.ctx.stroke();
  this.ctx.closePath();
  //draw the bar
  this.ctx.beginPath();
  this.ctx.moveTo(250, 100);
  this.ctx.lineTo(500, 100);
  this.ctx.stroke();
  this.ctx.closePath();
  //draw the robe
  this.ctx.beginPath();
  this.ctx.moveTo(500, 100);
  this.ctx.lineTo(500, 160);
  this.ctx.stroke();
  this.ctx.closePath();
  //draw the head
  this.ctx.beginPath();
  this.ctx.arc(500, 200, 40, 0, Math.PI*2, true);
  this.ctx.stroke();
  this.ctx.closePath();
  //draw the body*/
  this.ctx.beginPath();
  this.ctx.moveTo(500, 240);
  this.ctx.lineTo(500, 450);
  this.ctx.stroke();
  this.ctx.closePath();
  //draw 1st leg
  this.ctx.beginPath();
  this.ctx.moveTo(500, 450);
  this.ctx.lineTo(610, 550);
  this.ctx.stroke();
  this.ctx.closePath();
  //draw 2nd leg
  this.ctx.beginPath();
  this.ctx.moveTo(500, 450);
  this.ctx.lineTo(390, 550);
  this.ctx.stroke();
  this.ctx.closePath();
  //draw 1st arm
  this.ctx.beginPath();
  this.ctx.moveTo(500, 330);
  this.ctx.lineTo(400, 330);
  this.ctx.stroke();
  this.ctx.closePath();
  //draw 2nd arm
  this.ctx.beginPath();
  this.ctx.moveTo(500, 330);
  this.ctx.lineTo(600, 330);
  this.ctx.stroke();
  this.ctx.closePath();
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
