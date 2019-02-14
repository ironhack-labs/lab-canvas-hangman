function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
  this.ctx.lineWidth = 2;
  this.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {
  var word = this.secretWord;
  this.ctx.beginPath()
  this.ctx.moveTo(220, 700)
  this.ctx.lineTo(220 + word.length * 60, 700)
  this.ctx.setLineDash([40, 20])
  this.ctx.stroke()
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  var word = this.secretWord;
  this.ctx.fillStyle = "blue"
  this.ctx.font = '50px Arial'
  this.ctx.fillText(word[index], 220+index*60, 690)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = "40px Arial";
  this.ctx.fillStyle = "purple";
  this.ctx.fillText(errorsLeft -1 , 200, 100);
  this.ctx.font = "60px Arial";
  this.ctx.fillText(letter.toUpperCase(), 460 + 60 * (10 - errorsLeft), 500);
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  this.ctx.beginPath();
  this.ctx.setLineDash([0])
  switch (shape) {
    case 10:
      this.ctx.moveTo(80, 700)
      this.ctx.lineTo(170, 700)
      this.ctx.lineTo(125, 650)
      this.ctx.lineTo(80, 700)
      this.ctx.stroke()
      break;
    case 9:
      this.ctx.moveTo(125, 650)
      this.ctx.lineTo(125, 200)
      this.ctx.stroke()
      break;
    case 8:
      this.ctx.moveTo(125, 200)
      this.ctx.lineTo(375, 200)
      this.ctx.stroke()
      break;
    case 7:
      this.ctx.moveTo(375, 200)
      this.ctx.lineTo(375, 250)
      this.ctx.stroke()
      break;
    case 6:
      this.ctx.arc(375, 290, 40, 0, (Math.PI/180)*360)
      this.ctx.stroke()
      break;
    case 5:
      this.ctx.moveTo(375, 330)
      this.ctx.lineTo(375, 480)
      this.ctx.stroke()
      break;
    case 4:
      this.ctx.moveTo(375, 350)
      this.ctx.lineTo(420, 420)
      this.ctx.stroke()
      break;
    case 3:
      this.ctx.moveTo(375, 350)
      this.ctx.lineTo(330, 420)
      this.ctx.stroke()
      break;
    case 2:
      this.ctx.moveTo(375, 480)
      this.ctx.lineTo(420, 550)
      this.ctx.stroke()
      break;
    case 1:
      this.ctx.moveTo(375, 480)
      this.ctx.lineTo(330, 550)
      this.ctx.stroke()
      break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
