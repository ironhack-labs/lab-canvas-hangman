
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.cleanBoard = function() {
  this.ctx.clearRect(0,0,1200,800);
}

HangmanCanvas.prototype.createBoard = function (secretWord) {
  this.ctx.linejoin = "miter";
  this.ctx.lineWidth = 3;
  this.drawLines(secretWord);
};

HangmanCanvas.prototype.drawLines = function (secretWord) {
  this.ctx.beginPath();
  var increment = 0;
  for (var i= 0; i < secretWord.length; i++) {
    this.ctx.moveTo( 250 + increment, 700);
    this.ctx.lineTo(300 + increment,700);
    this.ctx.stroke()
    increment += 60;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (secretWord,letter,i) {
  var position = i;
  var index = secretWord.indexOf(letter,position);  
  if (index >= 0) {
    this.ctx.font = '32px monospace';
    this.ctx.fillText(letter, 250 + 65*index, 690);
    this.writeCorrectLetter(secretWord,letter,index +1 );
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = '32px monospace';
  this.ctx.fillText(letter,700 + 25*(9 - errorsLeft),400);

};

HangmanCanvas.prototype.gameOver = function () {
  var ctx = this.ctx;
  var img = new Image();
  img.src = "images/gameover.png";
  img.onload = function() {
    ctx.drawImage(img,350, 250, 500, 400);
  }
  

};

HangmanCanvas.prototype.winner = function () {
  var ctx = this.ctx;
  var img = new Image();
  img.src = "images/awesome.png";
  img.onload = function() {
    ctx.drawImage(img,350, 250, 500, 400);
  }

};

HangmanCanvas.prototype.base = function () {
  this.ctx.beginPath();
  this.ctx.moveTo(100,700);
  this.ctx.lineTo(200,700);
  this.ctx.lineTo(150,650);
  this.ctx.lineTo(100,700);
  this.ctx.fill();
}

HangmanCanvas.prototype.vertical1 = function () {
  this.ctx.beginPath();
  this.ctx.moveTo(150,650);
  this.ctx.lineTo(150,100);
  this.ctx.stroke();
}

HangmanCanvas.prototype.horizontal = function () {
  this.ctx.moveTo(150,100);
  this.ctx.lineTo(350,100);
  this.ctx.stroke();
}

HangmanCanvas.prototype.vertical2 = function () {
  this.ctx.moveTo(350,100);
  this.ctx.lineTo(350,200);
  this.ctx.stroke()
}

HangmanCanvas.prototype.head = function () {
  this.ctx.moveTo(350,200);
  this.ctx.arc(350,220,20,0,Math.PI*2,false);
  this.ctx.stroke();
}

HangmanCanvas.prototype.body = function () {
  this.ctx.moveTo(350,240);
  this.ctx.lineTo(350,320);
  this.ctx.stroke();
}

HangmanCanvas.prototype.armL = function () {
  this.ctx.moveTo(350,260);
  this.ctx.lineTo(320,290);
  this.ctx.stroke();
}

HangmanCanvas.prototype.armR = function () {
  this.ctx.moveTo(350,260);
  this.ctx.lineTo(380,290);
  this.ctx.stroke();
}

HangmanCanvas.prototype.legL = function () {
  this.ctx.moveTo(350,320);
  this.ctx.lineTo(320,360);
  this.ctx.stroke();
}

HangmanCanvas.prototype.legR = function () {
  this.ctx.moveTo(350,320);
  this.ctx.lineTo(380,360);
  this.ctx.stroke();
}

HangmanCanvas.prototype.drawHangman = function (index) {
  switch (index) {
    case 1:
      this.base();
      break;
    case 2:
      this.vertical1();
      break;
    case 3:
      this.horizontal();
      break;
    case 4:
      this.vertical2();
      break;
    case 5: 
      this.head();
      break;
    case 6:
      this.body();
      break;
    case 7:
      this.armL();
      break;
    case 8:
      this.armR();
      break;
    case 9:
      this.legL();
      break;
    case 10:
      this.legR();
      break;  
  }
};