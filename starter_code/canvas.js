
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {

this.ctx.clearRect(0, 0, 600, 300);

this.ctx.moveTo(300,0);
this.ctx.lineTo(600,0);
this.ctx.lineTo(600,300);
this.ctx.lineTo(0,300);
this.ctx.lineTo(0,0);
this.ctx.lineTo(300,0);

this.ctx.moveTo(125,275);
this.ctx.lineTo(150,300);
this.ctx.lineTo(100,300);
this.ctx.lineTo(125,275);
this.ctx.lineTo(125,50);
this.ctx.lineTo(250,50);
this.ctx.lineTo(250,75);

this.ctx.stroke()

//fillRect(x, y, width, height)    
//strokeRect(x, y, width, height)  
//clearRect(x, y, width, height)
//beginPath()    
//closePath()
//stroke()
//fill()
//moveTo(x, y)
//lineTo(x, y)
//arc(x, y, radius, startAngle, endAngle, anticlockwise)
//arcTo(x1, y1, x2, y2, radius)

};

HangmanCanvas.prototype.drawHead = function () {
  this.ctx.moveTo(270, 95);
  this.ctx.arc(250, 95, 20, Math.PI * 2, Math.PI * 0, true);
  this.ctx.stroke()
}

HangmanCanvas.prototype.drawBody = function () {
  this.ctx.moveTo(250, 115);
  this.ctx.lineTo(250, 200);
  this.ctx.stroke()
}

HangmanCanvas.prototype.drawRightHand = function () {
  this.ctx.moveTo(250, 125);
  this.ctx.lineTo(275, 150);
  this.ctx.stroke()
}

HangmanCanvas.prototype.drawLeftHand = function () {
  this.ctx.moveTo(250, 125);
  this.ctx.lineTo(225, 150);
  this.ctx.stroke()
}

HangmanCanvas.prototype.drawRightLeg = function () {
  this.ctx.moveTo(250, 200);
  this.ctx.lineTo(275, 225);
  this.ctx.stroke()
}

HangmanCanvas.prototype.drawLeftLeg = function () {
  this.ctx.moveTo(250, 200);
  this.ctx.lineTo(225, 225);
  this.ctx.stroke()
}

HangmanCanvas.prototype.drawLines = function () {
  console.log( this.secretWord);
  var holderLength = 20;
  var spaceBetween = 5;
  var startingX = 350;

  for(i=0;i<this.secretWord.length;i++){
    this.ctx.moveTo(startingX+spaceBetween,75);
    this.ctx.lineTo(startingX+spaceBetween+holderLength,75);
    this.ctx.stroke()
    startingX = startingX+spaceBetween+holderLength;

  };
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font="25px Arial";
  console.log('---------', 'inside writecorrectletter');
  console.log(index);
  this.ctx.fillText(hangman.secretWord[index].toUpperCase(), 360 + (index*25), 60);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font="25px Arial";
  this.ctx.fillText(letter, 260 + ((10-errorsLeft)*25), 250);
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};