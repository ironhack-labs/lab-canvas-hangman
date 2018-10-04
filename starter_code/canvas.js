
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.beginPath();
  this.ctx.moveTo(210, 605);
  this.ctx.lineTo(113, 677);
  this.ctx.lineTo(306, 677);
  this.ctx.lineTo(210, 605);
  this.ctx.stroke();
  this.ctx.closePath();

  this.drawHangman();
  this.drawLines();
};

HangmanCanvas.prototype.drawLines = function () {
  var x = 358;
  var y = 677;
  var long = 45;
  var gap = 15;

  this.ctx.beginPath();
  for(var i = 0; i < hangman.secretWord.length; i++) {
    var newX = x + ((gap + long) * i);
    this.ctx.moveTo(newX , y);
    this.ctx.lineTo(newX + long, y);
  }
  this.ctx.stroke();
  this.ctx.closePath();

  window.x = x;
  window.y = y;
  window.gap = gap;
  window.long = long;
};

HangmanCanvas.prototype.writeCorrectLetter = function (letter, index) {
  var letterXPos = window.x + ((window.gap + window.long) * index) + 5;
  var letterYPos = window.y - 8;
  this.ctx.font = '48px sans-serif';
  this.ctx.fillText(letter, letterXPos, letterYPos);
};

var wrongLXPos = 0;
var wrongLYPos = 0;

HangmanCanvas.prototype.writeWrongLetter = function (letter, letterYPos) {
  this.ctx.font = '48px sans-serif';
  this.ctx.fillText(letter, 705 + wrongLXPos, 178 + (letterYPos * 60));
  wrongLXPos = wrongLXPos + 55;
  if(wrongLXPos > 479) {
    wrongLXPos = 0;
    wrongLYPos = wrongLYPos + 1;
  }
};
var step = 1;
HangmanCanvas.prototype.drawHangman = function (shape) {
  if(shape === 1){
    this.ctx.beginPath();
    this.ctx.moveTo(210, 605);
    this.ctx.lineTo(210, 108);
    this.ctx.stroke();
    this.ctx.closePath();
  }
  if(shape === 2) {
    this.ctx.lineTo(547, 108);
  }
  if(shape === 3) {
    this.ctx.lineTo(547, 178);
  }
  if(shape === 4) {
    this.ctx.moveTo(591, 222);
    this.ctx.arc(547, 222, 44, 0, Math.PI*2, true);
    // this.ctx.stroke();
  }
  /* this.ctx.moveTo(547, 266); 
  this.ctx.lineTo(547, 434); // body
  this.ctx.lineTo(490, 511); // left leg
  this.ctx.moveTo(547, 434); 
  this.ctx.lineTo(605, 511); // right leg
  this.ctx.moveTo(490, 316); 
  this.ctx.lineTo(547, 316); // left arm
  this.ctx.lineTo(604, 316); // right arm */
  this.ctx.stroke();
  console.log("step " + shape);
  step = step + 1;
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

var btn = document.getElementById("start-game-button");
btn.addEventListener("click", function() {
  hangman.getWord();
  var cnvas = new HangmanCanvas();
  cnvas.createBoard();
  window.cnvas = cnvas;
})

document.addEventListener("keyup", function(e) {
  if(hangman !== undefined) {
    var letterPressed = String.fromCharCode(e.keyCode);
    var wordUppercase = hangman.secretWord.toUpperCase();
    var letterIndex = wordUppercase.indexOf(letterPressed);
    if(hangman.checkIfLetter(e.keyCode) && hangman.checkClickedLetters(letterPressed)) {
      console.log(letterPressed);
      
    }
    if(letterIndex > -1) {
      hangman.addCorrectLetter(letterPressed);
      window.cnvas.writeCorrectLetter(letterPressed, letterIndex);
    } else {
      hangman.addWrongLetter(letterPressed);
      window.cnvas.writeWrongLetter(letterPressed, wrongLYPos);
      window.cnvas.drawHangman(step);
    }
    console.log(hangman);
  }
})