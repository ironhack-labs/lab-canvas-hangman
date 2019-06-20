class HangmanCanvas {
  constructor(secretWord) {
    this.word = secretWord;
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.erro = 100;
  }
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.beginPath();
  this.ctx.fillStyle = 'white';
  this.ctx.fillRect(0, 0, 1200, 800);
  this.ctx.fill();
  this.ctx.closePath();

  this.ctx.fillStyle = 'black';
  this.ctx.beginPath();
  this.ctx.lineWidth = 5;
  this.ctx.moveTo(0, 790);
  this.ctx.lineTo(200, 790);
  this.ctx.lineTo(100, 740);
  this.ctx.closePath();
  this.ctx.stroke();

  this.ctx.moveTo(100, 740);
  this.ctx.lineTo(100, 5);
  this.ctx.lineTo(500, 5);
  this.ctx.lineTo(500, 105);
  this.ctx.stroke();

  this.ctx.moveTo(250, 790);
  let posicao = 250;
  for (let i = 0; i < this.word.length; i += 1) {
    this.ctx.lineTo(posicao + 80, 790);
    this.ctx.stroke();
    posicao += 100;
    this.ctx.moveTo(posicao, 790);    
  }
  this.ctx.closePath();
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font = '100px Arial';
  let letra = this.word[index];
  let posicao = 250;
  this.ctx.fillText(letra, posicao + (index * 100), 770);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = '40px Arial';
  this.ctx.fillText(letter, 800, this.erro);
  this.erro += 40;
  if (errorsLeft === 8)
    this.drawHangman('head');
  if (errorsLeft === 6)
    this.drawHangman('left-leg');
  if (errorsLeft === 4)
    this.drawHangman('right-leg');
  if (errorsLeft === 2)
    this.drawHangman('left-arm');
  if (errorsLeft === 0)
    this.drawHangman('right-arm');
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  this.ctx.closePath();
  this.ctx.beginPath();
  if (shape === 'head') {
    this.ctx.arc(500, 155, 50, 0, 7);
    this.ctx.moveTo(500, 205);
    this.ctx.lineTo(500,405);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  if (shape === 'left-leg') {
    this.ctx.beginPath();
    this.ctx.moveTo(500, 405);
    this.ctx.lineTo(400, 505);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  if (shape === 'right-leg') {
    this.ctx.beginPath();
    this.ctx.moveTo(500, 405);
    this.ctx.lineTo(600, 505);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  if (shape === 'left-arm') {
    this.ctx.beginPath();
    this.ctx.moveTo(500, 205);
    this.ctx.lineTo(400, 305);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  if (shape === 'right-arm') {
    this.ctx.beginPath();
    this.ctx.moveTo(500, 205);
    this.ctx.lineTo(600, 305);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.gameOver = function () {
  var img = document.getElementById("loser");
  this.ctx.drawImage(img, 10, 10);
  let intervalId = setTimeout(() => {
    alert('You lose! :(');
  }, 100);

};

HangmanCanvas.prototype.winner = function () {
  var img = document.getElementById("winner");
  this.ctx.drawImage(img, 10, 10);
  let intervalId = setTimeout(() => {
    alert('You win! :)');
  }, 100);
};
