
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.words = []
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function () {
  var xIni = 350
  var yIni = 400
  for (var i = 0; i < secretWord.length; i++) {
    this.ctx.beginPath()
    this.ctx.moveTo(xIni. yIni)
    this.ctx.lineWidth = '2'
    this.ctx.lineTo(xIni + 50, yIni)
    this.ctx.stroke()
    xIni += 60
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  var xIni = 360 + (60 * index)
  var yIni = 380
  this.ctx.font = "30px American Typewriter"
  this.ctx.fillText(secretWord[index], xIni, yIni)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  var xIni = 800 - (errorsLeft * 30)
  var yIni = 200
  this.ctx.font = "20px American Typewriter"
  this.ctx.fillText(letter, xIni, yIni)
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch (shape) {
    case "base":
    this.ctx.beginPath();
    this.ctx.moveTo(20, 400);
    this.ctx.lineTo(120, 400);
    this.ctx.lineTo(70, 350);
    this.ctx.closePath()
    this.ctx.stroke();
    break;
    case "verticalPost":
    this.ctx.beginPath();
    this.ctx.moveTo(70, 350);
    this.ctx.lineTo(70, 40);
    this.ctx.stroke();
    break;
    case "horizontalPost":
    this.ctx.beginPath();
    this.ctx.moveTo(70, 40);
    this.ctx.lineTo(250, 40);
    this.ctx.stroke();
    break;
    case "smallPost":
    this.ctx.beginPath();
    this.ctx.moveTo(250, 40);
    this.ctx.lineTo(250, 80);
    this.ctx.stroke();
    break;
    case "head":
    this.ctx.beginPath();
    this.ctx.arc(250, 110, 30, 0, 2 * Math.PI, false);
    this.ctx.stroke();
    break;
    case "body":
    this.ctx.beginPath();
    this.ctx.moveTo(250, 140);
    this.ctx.lineTo(250, 260);
    this.ctx.stroke();
    break;
    case "leftLeg":
    this.ctx.beginPath();
    this.ctx.moveTo(200, 350);
    this.ctx.lineTo(250, 260);
    this.ctx.stroke();
    break;
    case "rightLeg":
    this.ctx.beginPath();
    this.ctx.moveTo(300, 350);
    this.ctx.lineTo(250, 260);
    this.ctx.stroke();
    break;
    case "leftArm":
    this.ctx.beginPath();
    this.ctx.moveTo(200, 200);
    this.ctx.lineTo(250, 140);
    this.ctx.stroke();
    break;
    case "rightArm":
    this.ctx.beginPath();
    this.ctx.moveTo(300, 200);
    this.ctx.lineTo(250, 140);
    this.ctx.stroke();
    break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
