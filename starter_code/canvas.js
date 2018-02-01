var wrongLetter = 0;

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function (num) {
  this.ctx.beginPath();
  for (var i = 0; i < num; i++) {
    this.ctx.fillRect(200 + (i * 75), 700, 50, 5);
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

  for (let i = 0; i < hangman.secretWord.length; i++) {
    if (hangman.secretWord[i] === index) {
      this.ctx.font = '45px sans-serif';
      this.ctx.fillText(index.toString(), 215 + (i * 73), 690);
    } 
  }
};


HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
    var baseY = 180;
    var baseX = 515;
    if (!hangman.checkIfLetter(letter.charCodeAt())) {
      return false;
    }
    if (wrongLetter == 5) {
      baseY = 280;
      wrongLetter = 0;
    }
    this.ctx.font = '45px sans-serif';
    this.ctx.fillText(letter, baseX + (wrongLetter * 73), baseY);
    wrongLetter += 1;
    this.drawHangman();
};

HangmanCanvas.prototype.drawHangman = function () {
  switch (hangman.errorsLeft) {
    case 9:
      this.ctx.beginPath();
      this.ctx.moveTo(90,705);
      this.ctx.lineTo(190,705);
      this.ctx.lineTo(140,655);
      this.ctx.fill();
      break;
    case 8:
      this.ctx.beginPath();
      this.ctx.fillRect(137.5,255,5,405);
      break;
    case 7:
      this.ctx.beginPath();
      this.ctx.fillRect(137.5,255,200,5);
      break;
    case 6:
      this.ctx.beginPath();
      this.ctx.fillRect(337.5,255,5,100);
      break;
    case 5:
      this.ctx.beginPath();
      this.ctx.lineWidth = 3;
      this.ctx.arc(337.5,385,30,0,2*Math.PI);
      this.ctx.stroke();
      break;
    case 4:
      this.ctx.beginPath();
      this.ctx.fillRect(337.5,415,3,100);
      break;
    case 3:
      this.ctx.beginPath();
      this.ctx.strokeStyle = "black";
      this.ctx.moveTo(337.5,415,3,100);
      this.ctx.lineTo(357.5,455,3,100);
      this.ctx.stroke();
      break;
    case 2: 
      this.ctx.beginPath()
      this.ctx.strokeStyle = "black";
      this.ctx.moveTo(340.5, 415, 3, 100);
      this.ctx.lineTo(320.5, 455, 3, 100);
      this.ctx.stroke();
      break;
    case 1:
      this.ctx.beginPath();
      this.ctx.strokeStyle = "black";
      this.ctx.moveTo(337.5, 505, 3 ,100);
      this.ctx.lineTo(360.5, 545, 3 ,100);
      this.ctx.stroke();
      break;
    case 0:
      this.ctx.beginPath();
      this.ctx.strokeStyle = "black";
      this.ctx.moveTo(337.5, 505, 3 ,100);
      this.ctx.lineTo(320.5, 545, 3 ,100);
      this.ctx.stroke();
      break;
  }
};

HangmanCanvas.prototype.gameOver = function () {
  var img = new Image();
  img.src = 'images/gameover.png';
  // this.ctx.clearRect(0,0,1200,800);
  img.onload = function() {
    hangmanCanvas.ctx.drawImage(img,200,200);
  };
};

HangmanCanvas.prototype.winner = function () {
  var img = new Image();
  img.src = 'images/awesome.png';
  // this.ctx.clearRect(0,0,1200,800);
  img.onload = function() {
    hangmanCanvas.ctx.drawImage(img,200,200);
  };
};
