function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById("hangman").getContext("2d");
  this.secretWord = secretWord;
  this.start = 0;
}

HangmanCanvas.prototype.createBoard = function() {
  this.ctx.clearRect(0, 0, 1200, 800);
  console.log(this.secretWord);
  this.start = 0;
};

HangmanCanvas.prototype.drawLines = function() {
  for (i = 0; i < this.secretWord.length; i++) {
    x = i * 130;
    this.ctx.beginPath();
    this.ctx.moveTo(100 + x, 500);
    this.ctx.lineTo(200 + x, 500);
    this.ctx.stroke();
    this.ctx.closePath();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function(index) {
  let x;
  let letter = this.secretWord[index];
  for (l in this.secretWord) {
    if (this.secretWord[l] === letter) {
      console.log(letter);
      x = 125 + l * 130;
      this.ctx.font = "85px serif";
      this.ctx.fillText(letter, x, 495);
    }
  }
};

HangmanCanvas.prototype.writeWrongLetter = function(letter, errorsLeft) {
  if (errorsLeft > 0) {
    let e = 9 - errorsLeft;
    console.log(`e=${e} el=${errorsLeft}`);
    let x = 560 + e * 60;
    this.ctx.font = "50px serif";
    this.ctx.fillText(letter, x, 100);
    this.drawHangman(e);
  } else {
    this.gameOver();
  }
};

HangmanCanvas.prototype.drawHangman = function(shape) {
  switch (shape) {
    case 0:
      this.ctx.beginPath();
      this.ctx.moveTo(10, 500);
      this.ctx.lineTo(80, 500);
      this.ctx.lineTo(45, 470);
      this.ctx.fill();
      this.ctx.closePath();
      break;
    case 1:
      this.ctx.beginPath();
      this.ctx.moveTo(45, 470);
      this.ctx.lineTo(45, 50);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 2:
      this.ctx.beginPath();
      this.ctx.moveTo(45, 50);
      this.ctx.lineTo(450, 50);
      this.ctx.lineTo(450, 100);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 3:
      this.ctx.beginPath();
      this.ctx.arc(450, 130, 30, 0, Math.PI * 2, true);
      this.ctx.stroke();
      break;
    case 4:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 160);
      this.ctx.lineTo(450, 300);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 5:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 300);
      this.ctx.lineTo(400, 370);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 6:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 300);
      this.ctx.lineTo(500, 370);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 7:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 200);
      this.ctx.lineTo(400, 210);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    case 8:
      this.ctx.beginPath();
      this.ctx.moveTo(450, 200);
      this.ctx.lineTo(500, 210);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function() {
  this.start = 1;
  console.log("Game Over");
  this.ctx.font = "10px arial";
  this.ctx.strokeText("X   X", 437, 125);
  this.ctx.beginPath();
  this.ctx.moveTo(437, 140);
  this.ctx.lineTo(463, 140);
  this.ctx.stroke();
  this.ctx.closePath();
  let img = new Image();
  img.src = "./images/gameover.png";
  img.onload = function() {
    this.ctx.drawImage(img, 300, 250, 600, 300);
  }.bind(this); //this is not this!!!!
};

HangmanCanvas.prototype.winner = function() {
  this.start = 1;
  let img = new Image();
  img.src = "./images/awesome.png";
  img.onload = () => {
    this.ctx.drawImage(img, 200, 100, 800, 600);
  };
};
