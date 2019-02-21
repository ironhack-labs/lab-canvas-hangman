function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.cordinatesLines = [];
}

HangmanCanvas.prototype.createBoard = function () {

  this.ctx.rect(300, 100, 600, 600);
  this.ctx.stroke();
  this.ctx.beginPath();
  this.ctx.moveTo(400, 670);
  this.ctx.lineTo(340, 695);
  this.ctx.lineTo(460, 695);
  this.ctx.closePath();
  this.ctx.stroke();
  this.ctx.lineWidth = 10;
  this.ctx.strokeStyle = '#666666';
  this.ctx.stroke();
  this.ctx.fillStyle = "#FFCC00";
  this.ctx.fill();
  this.ctx.fillStyle = "#FFCC00";
  this.ctx.fill();
  this.ctx.beginPath();
  this.ctx.moveTo(600, 250);
  this.ctx.lineTo(600, 200);
  this.ctx.lineTo(400, 200);
  this.ctx.lineTo(400, 670);
  this.ctx.stroke();
};

HangmanCanvas.prototype.drawLines = function () {

  var lengthSecretWord = this.secretWord.length;

  var i = 0;
  var x = 450;
  var y = 600;

  while (i < lengthSecretWord) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + 30, y);
    this.ctx.stroke();
    this.cordinatesLines.push([x, y]);
    x += 60;
    i++;
  }

};


var x = 10;
HangmanCanvas.prototype.writeCorrectLetter = function (index, letter) {

  arrayOfLines = this.cordinatesLines[index];
  this.ctx.fillStyle = "green";

  this.ctx.font = "bold 25px Georgia";
  this.ctx.fillText(letter, arrayOfLines[0], arrayOfLines[1] - 5);
 
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.fillStyle = "red";
  this.ctx.font = "bold 25px Georgia";
  this.ctx.fillText(letter, 300+x, 150);
x=x+20;

};

HangmanCanvas.prototype.drawHangman = function (shape) {

  switch (shape) {
    case "circleHead":
      this.ctx.beginPath();
      this.ctx.arc(600, 280, 30, 0, 2 * Math.PI);
      this.ctx.stroke();
      break;
    case "line1":
      this.ctx.beginPath();
      this.ctx.moveTo(600, 310);
      this.ctx.lineTo(600, 410);
      this.ctx.stroke();
      break;
    case "line2":
      this.ctx.beginPath();
      this.ctx.moveTo(600, 410);
      this.ctx.lineTo(550, 440);
      this.ctx.stroke();
      break;
    case "line3":
      this.ctx.beginPath();
      this.ctx.moveTo(600, 410);
      this.ctx.lineTo(650, 440);
      this.ctx.stroke();
      break;
    case "line4":
      this.ctx.beginPath();
      this.ctx.moveTo(600, 320);
      this.ctx.lineTo(550, 350);
      this.ctx.stroke();
      break;
    case "line5":
      this.ctx.beginPath();
      this.ctx.moveTo(600, 320);
      this.ctx.lineTo(650, 350);
      this.ctx.stroke();
      break;
    case "dot1":
      this.ctx.beginPath();
      this.ctx.rect(585, 265, 1, 1);
      this.ctx.stroke();
      break;
    case "dot2":
      this.ctx.beginPath();
      this.ctx.rect(615, 265, 1, 1);
      this.ctx.stroke();
      break;
    case "dot3":
      this.ctx.beginPath();
      this.ctx.rect(600, 280, 1, 1);
      this.ctx.stroke();
      break;
    case "arc":
      this.ctx.beginPath();
      this.ctx.arc(600, 300, 10, 1.1 * Math.PI, 1.9 * Math.PI);
      this.ctx.lineWidth = 5;
      this.ctx.strokeStyle = 'red';
      this.ctx.stroke();
      break;
  }

};

HangmanCanvas.prototype.gameOver = function () {

  var newEl = document.createElement('div');
  var gameOverImg = document.createElement('img');
  gameOverImg.setAttribute("src", "./images/gameover.png");
  newEl.classList.add("img-container","over");
  newEl.appendChild(gameOverImg);
  document.getElementById("container").appendChild(newEl);
  

};

HangmanCanvas.prototype.winner = function () {

  var newEl = document.createElement('div');
  var gameOverImg = document.createElement('img');
  gameOverImg.setAttribute("src", "./images/awesome.png");
  newEl.classList.add("img-container");
  newEl.appendChild(gameOverImg);
  document.getElementById("container").appendChild(newEl);

};