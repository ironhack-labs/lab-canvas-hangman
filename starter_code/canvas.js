"use strict";

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
};

HangmanCanvas.prototype.createBoard = function () {
  // clear whole canvas
  this.ctx.clearRect(0, 0, 1200, 800);
  // draw lines secret word
  this.drawLines();
  this.ctx.font = "48px arial";
  this.ctx.lineWidth = 3;
  this.ctx.strokeStyle = "black";
};

HangmanCanvas.prototype.drawLines = function () {
  var nrLines = hangman.secretWord.length;
  // drawing lines. 50px wide with 10px inbetween
  var startX = 200;
  var startY = 650;
  this.ctx.beginPath();
  this.ctx.moveTo(startX, startY);
  for (var i = 0; i < nrLines; i++) {
    startX += 50;
    this.ctx.lineTo(startX, startY);
    startX += 10;
    this.ctx.moveTo(startX, startY);
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (index, letter) {
  // index is an array of index-places of the correct letter in secretWord
  index.forEach(element => {
    this.ctx.beginPath();
    this.ctx.textAlign = "center"
    // + 25 for center text (each line is 50px wide)
    this.ctx.fillText(letter.toUpperCase(), 200 + 25 + 60 * element, 645);
    this.ctx.closePath();
  })
};

HangmanCanvas.prototype.writeWrongLetter = function (letter) {
  this.ctx.beginPath();
  this.ctx.textAlign = "start";
  this.ctx.clearRect(600, 150, 600, 80); // removing previous letters (overlapping letters became boldish)
  this.ctx.fillText(letter, 600, 200);
  this.ctx.closePath();
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  //this.ctx.beginPath();
  switch (shape) {
    case 9:
      this.ctx.moveTo(100, 620);
      this.ctx.lineTo(50, 650);
      this.ctx.lineTo(150, 650);
      this.ctx.lineTo(100, 620);
      break;
    case 8:
      this.ctx.moveTo(100, 620);
      this.ctx.lineTo(100, 100);
      break;
    case 7:
      this.ctx.moveTo(100, 100);
      this.ctx.lineTo(400, 100);
      break;
    case 6:
      this.ctx.moveTo(400, 100);
      this.ctx.lineTo(400, 150);
      break;
    case 5:
      this.ctx.moveTo(400, 150);
      this.ctx.arc(400, 200, 50, 1.5 * Math.PI, 3.5 * Math.PI);
      break;
    case 4:
      this.ctx.moveTo(400, 250);
      this.ctx.lineTo(400, 400);
      break;
    case 3:
      this.ctx.moveTo(300, 320);
      this.ctx.lineTo(400, 320);
      break;
    case 2:
      this.ctx.moveTo(400, 320);
      this.ctx.lineTo(500, 320);
      break;
    case 1:
      this.ctx.moveTo(400, 400);
      this.ctx.lineTo(300, 500);
      break;
    case 0:
      this.ctx.moveTo(400, 400);
      this.ctx.lineTo(500, 500);
      // left
      this.ctx.moveTo(365, 165 + 10);
      this.ctx.lineTo(385, 185 + 10);
      this.ctx.moveTo(385, 165 + 10);
      this.ctx.lineTo(365, 185 + 10);
      // right  
      this.ctx.moveTo(415, 165 + 10);
      this.ctx.lineTo(435, 185 + 10);
      this.ctx.moveTo(435, 165 + 10);
      this.ctx.lineTo(415, 185 + 10);
      // middle
      this.ctx.moveTo(370, 220);
      this.ctx.lineTo(430, 220);
      // gameover
      this.gameOver();
      break;
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.gameOver = function () {
  var img = new Image();
  var that = this;
  img.onload = function () {
    that.ctx.drawImage(img, 200, 300);
  }
  img.src = "images/gameover.png";
  hangman.status = false;
};

HangmanCanvas.prototype.winner = function () {
  var imgWin = new Image();
  var that = this;
  imgWin.onload = function () {
    that.ctx.drawImage(imgWin, 50, 0);
  }
  imgWin.src = "images/awesome.png";
  hangman.status = false;
};

