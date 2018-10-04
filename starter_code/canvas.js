function HangmanCanvas(secretWord) {
  this.secretWord = secretWord;
  this.letterPossitionx = [];
  this.canvas = document.getElementById("hangman");
  this.ctx = document.getElementById("hangman").getContext("2d");
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

HangmanCanvas.prototype.drawLines = function() {
  var x = 250;
  var x2 = 300;
  for (var i = 0; i < this.secretWord.length; i++) {
    this.letterPossitionx.push(x);
    this.ctx.beginPath();
    this.ctx.moveTo(x, 780);
    this.ctx.lineTo(x2, 780);
    this.ctx.stroke();
    x += 70;
    x2 += 70;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(x, letter) {
  this.ctx.font = "bold 50px arial";
  this.ctx.fillText(letter, x, 760);
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  this.ctx.font = "bold 50px arial";
  this.ctx.fillText(hangman.wrongLetter, 800, 100);
};

HangmanCanvas.prototype.drawHangman = function(shape) {
  if (shape === 9) {
    this.ctx.beginPath();
    this.ctx.moveTo(150, 780);
    this.ctx.lineTo(20, 780);
    this.ctx.lineTo(85, 700);
    this.ctx.lineTo(150, 780);
    this.ctx.stroke();
    this.ctx.closePath();
  } else if (shape === 8) {
    this.ctx.beginPath();
    this.ctx.moveTo(85, 700);
    this.ctx.lineTo(85, 200);
    this.ctx.stroke();
    this.ctx.closePath();
  } else if (shape === 7) {
    this.ctx.beginPath();
    this.ctx.moveTo(85, 200);
    this.ctx.lineTo(400, 200);
    this.ctx.stroke();
    this.ctx.closePath();
  } else if (shape === 6) {
    this.ctx.beginPath();
    this.ctx.moveTo(400, 200);
    this.ctx.lineTo(400, 250);
    this.ctx.stroke();
    this.ctx.closePath();
  } else if (shape === 5) {
    this.ctx.beginPath();
    this.ctx.arc(400, 300, 50, 0, Math.PI * 2, true);
    this.ctx.stroke();
    this.ctx.closePath();
  } else if (shape === 4) {
    this.ctx.beginPath();
    this.ctx.moveTo(400, 350);
    this.ctx.lineTo(400, 550);
    this.ctx.stroke();
    this.ctx.closePath();
  } else if (shape === 3) {
    this.ctx.beginPath();
    this.ctx.moveTo(400, 370);
    this.ctx.lineTo(460, 470);
    this.ctx.stroke();
    this.ctx.closePath();
  } else if (shape === 2) {
    this.ctx.beginPath();
    this.ctx.moveTo(400, 370);
    this.ctx.lineTo(340, 470);
    this.ctx.stroke();
    this.ctx.closePath();
  } else if (shape === 1) {
    this.ctx.beginPath();
    this.ctx.moveTo(400, 550);
    this.ctx.lineTo(460, 650);
    this.ctx.stroke();
    this.ctx.closePath();
  } else if (shape === 0) {
    this.ctx.beginPath();
    this.ctx.moveTo(400, 550);
    this.ctx.lineTo(340, 650);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.arc(380, 280, 14, 0, Math.PI * 2, true);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.arc(420, 280, 14, 0, Math.PI * 2, true);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(430, 290);
    this.ctx.lineTo(410, 270);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(410, 290);
    this.ctx.lineTo(430, 270);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(390, 290);
    this.ctx.lineTo(370, 270);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(390, 270);
    this.ctx.lineTo(370, 290);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.moveTo(420, 330);
    this.ctx.lineTo(380, 330);
    this.ctx.stroke();
    this.ctx.closePath();
  }
};

HangmanCanvas.prototype.gameOver = function() {
   this.createBoard()
  var img = new Image();

  img.onload = function() {
    hangmanCanvas.ctx.drawImage(img, 0, 0,1200,800);
};
img.src = "./images/gameover.png"; 
};

HangmanCanvas.prototype.winner = function() {
  this.createBoard()
  var img = new Image();

  img.onload = function() {
    hangmanCanvas.ctx.drawImage(img, 0, 0,1200,800);
    };
    img.src="./images/awesome.png";
 

       };