function HangmanCanvas(secretWord) {
  this.canvas = document.getElementById("hangman");
  this.ctx = this.canvas.getContext("2d");
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.fillStyle = "gray";
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

HangmanCanvas.prototype.drawLines = function() {
  var x = 600;
  var y = 700;
  for (var i = 0; i < this.secretWord.length; i++) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + 25, y);
    this.ctx.lineWidth = 4;
    this.ctx.stroke();
    x += 50;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  //obtener posicion a imprimir
  var letter = this.secretWord[index];
  this.ctx.beginPath();
  this.ctx.font = "60px serif";
  this.ctx.fillStyle = 'black';
  this.ctx.fillText(letter, 600 + index * 47, 680);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  var x = 1000;
  var y = 400;
  this.ctx.beginPath();
  this.ctx.font = "60px serif";
  this.ctx.fillStyle = 'black';
  this.ctx.fillText(letter, x - (errorsLeft * 50), y);
};

HangmanCanvas.prototype.drawHangman = function(error) {
  switch (error) {
    case 0:
      this.ctx.beginPath();
      this.ctx.moveTo(500, 400);
      this.ctx.lineTo(550, 450);
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      break;

    case 1:
      this.ctx.beginPath();
      this.ctx.moveTo(500, 400);
      this.ctx.lineTo(450, 450);
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      break;

    case 2:
      this.ctx.beginPath();
      this.ctx.moveTo(500, 250);
      this.ctx.lineTo(500, 400);
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      break;

    case 3:
      this.ctx.beginPath();
      this.ctx.arc(500, 200, 50, 0, 2 * Math.PI);
      this.ctx.stroke();
      break;

    case 4:
      this.ctx.beginPath();
      this.ctx.moveTo(500, 100);
      this.ctx.lineTo(500, 150);
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      break;

    case 5:
      this.ctx.beginPath();
      this.ctx.moveTo(175, 100);
      this.ctx.lineTo(500, 100);
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      break;

    case 6:
      this.ctx.beginPath();
      this.ctx.moveTo(175, 650);
      this.ctx.lineTo(175, 100);
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      break;

    case 7:
      this.ctx.beginPath();
      this.ctx.moveTo(250, 700);
      this.ctx.lineTo(175, 650);
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      break;

    case 8:
      this.ctx.beginPath();
      this.ctx.moveTo(100, 700);
      this.ctx.lineTo(175, 650);
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      break;

    case 9:
      this.ctx.beginPath();
      this.ctx.moveTo(100, 700);
      this.ctx.lineTo(250, 700);
      this.ctx.lineWidth = 6;
      this.ctx.stroke();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function() {
  var img = new Image();
  img.src = "./images/gameover.png";
  img.onload = function() {
    hangmanCanvas.ctx.drawImage(img, 0, 0, 1200, 800);
  };
};

HangmanCanvas.prototype.winner = function() {
  var img = new Image();
  img.src = "./images/awesome.png";
  img.onload = function() {
    hangmanCanvas.ctx.drawImage(img, 0, 0, 1200, 800);
  };
};
