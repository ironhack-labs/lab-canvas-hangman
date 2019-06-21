
class HangmanCanvas {
  constructor(secretWord) {
   this.cx = document.getElementById('hangman').getContext('2d');
   this.word = secretWord;
  }
}

// let connect = new Hangman();

HangmanCanvas.prototype.createBoard = function () {
  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(140, 600);
  this.cx.lineTo(240, 600);
  this.cx.stroke();
  this.cx.moveTo(140, 600);
  this.cx.lineTo(190, 540);
  this.cx.moveTo(240, 600);
  this.cx.lineTo(190, 540);
  this.cx.stroke();
  this.cx.closePath();
};

HangmanCanvas.prototype.drawLines = function () {
  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(290, 600);
  this.cx.lineTo(335, 600);
  this.cx.stroke()
  this.cx.closePath();
  
  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(350, 600);
  this.cx.lineTo(395, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(410, 600);
  this.cx.lineTo(455, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(470, 600);
  this.cx.lineTo(515, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(530, 600);
  this.cx.lineTo(575, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(590, 600);
  this.cx.lineTo(635, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(650, 600);
  this.cx.lineTo(695, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(710, 600);
  this.cx.lineTo(755, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(770, 600);
  this.cx.lineTo(815, 600);
  this.cx.stroke()
  this.cx.closePath();

  this.cx.beginPath();
  this.cx.lineWidth = 2;
  this.cx.moveTo(830, 600);
  this.cx.lineTo(875, 600);
  this.cx.stroke()
  this.cx.closePath();
  

};

HangmanCanvas.prototype.writeCorrectLetter = function (newLetter) {
  this.cx.font = '80px Roboto';
  let letter = this.word[newLetter];
  let position = 310
  this.cx.fillText(letter, (position + 100) * index, 400);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.cx.font = '50px Roboto';
  this.cx.fillText(letter, 600 + (50 * (10 - errorsLeft)), 300)
  if (errorsLeft === 9) {
    this.drawHangman('first')
  } else if (errorsLeft === 8) {
    this.drawHangman('second')
  } else if (errorsLeft === 7) {
    this.drawHangman('third')
  } else if (errorsLeft === 6) {
    this.drawHangman('head')
  } else if (errorsLeft === 5) {
    this.drawHangman('body')
  } else if (errorsLeft === 4) {
    this.drawHangman('right arm')
  } else if (errorsLeft === 3) {
    this.drawHangman('left arm')
  } else if (errorsLeft === 2) {
    this.drawHangman('right leg')
  } else if (errorsLeft === 1) {
    this.drawHangman('left leg')
  }
};

HangmanCanvas.prototype.drawHangman = function (shape) {

  if (shape === 'first') {
    this.cx.beginPath();
    this.cx.moveTo(190, 540);
    this.cx.lineTo(190, 100);
    this.cx.stroke();
    this.cx.closePath();
  }

  if (shape === 'second') {
    this.cx.beginPath();
    this.cx.moveTo(190, 100);
    this.cx.lineTo(450, 100);
    this.cx.stroke();
    this.cx.closePath();
  }

  if (shape === 'third') {
    this.cx.beginPath();
    this.cx.moveTo(450, 100);
    this.cx.lineTo(450, 150);
    this.cx.stroke();
    this.cx.closePath();
  }

  if (shape === 'head') {
  this.cx.beginPath();
  this.cx.arc(450, 200, 50, 90, (Math.PI/180) * 90, true);
  this.cx.stroke();
  this.cx.closePath();
  }

  if (shape === 'body') {
  this.cx.beginPath();
  this.cx.moveTo(450, 250);
  this.cx.lineTo(450, 380);
  this.cx.stroke();
  this.cx.closePath();
  }

  if (shape === 'right arm') {
  this.cx.beginPath();
  this.cx.moveTo(450, 250);
  this.cx.lineTo(400, 300);
  this.cx.stroke();
  this.cx.closePath();
  }
  
  if (shape === 'left arm') {
  this.cx.beginPath();
  this.cx.moveTo(450, 250);
  this.cx.lineTo(500, 300);
  this.cx.stroke();
  this.cx.closePath();
  }

  if (shape === 'right leg') {
  this.cx.beginPath();
  this.cx.moveTo(450, 380);
  this.cx.lineTo(490, 480);
  this.cx.stroke();
  this.cx.closePath();
  }

  if (shape === 'left leg') {
  this.cx.beginPath();
  this.cx.moveTo(450, 380);
  this.cx.lineTo(420, 480);
  this.cx.stroke();
  this.cx.closePath();
  }
};

HangmanCanvas.prototype.gameOver = function () {
  alert('You lose!')
};

HangmanCanvas.prototype.winner = function () {
  alert('You win!')
};

