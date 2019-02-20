
var wrongLetterBaseline = 740;

function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
}

HangmanCanvas.prototype.createBoard = function () {
  this.createBoard = this.ctx.clearRect(0, 0, 1200, 800);
};

HangmanCanvas.prototype.drawLines = function (obj) {
  var baseline = 400
  for (i = 0; i < obj.secretWord.length; i++){
    this.ctx.beginPath();
    this.ctx.moveTo(baseline, 700);
    this.ctx.lineTo(baseline+50, 700);
    this.ctx.stroke();
    baseline += 60;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index, letter) {
  var baseline = 407;
  var position = 60;
  this.ctx.font = '49px serif';
  this.ctx.fillText(letter.toUpperCase(), baseline + (index*position), 690);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  wrongLetterBaseline += 60;
  this.ctx.font = '49px serif';
  this.ctx.fillText(letter, wrongLetterBaseline, 250);
  console.log("You have " + errorsLeft + " errors left");
};

HangmanCanvas.prototype.drawHangman = function (num) {
  //draw the base
  if (num === 9){
  this.ctx.beginPath();
  this.ctx.moveTo(150, 700);
  this.ctx.lineTo(350, 700);
  this.ctx.lineTo(250, 600);
  this.ctx.lineTo(150, 700);
  this.ctx.stroke();
  this.ctx.closePath();}
  //draw the column
  else if (num === 8){
  this.ctx.beginPath();
  this.ctx.moveTo(250, 600);
  this.ctx.lineTo(250, 100);
  this.ctx.stroke();
  this.ctx.closePath();}
  //draw the bar
  else if (num === 7){
  this.ctx.beginPath();
  this.ctx.moveTo(250, 100);
  this.ctx.lineTo(500, 100);
  this.ctx.stroke();
  this.ctx.closePath();}
  //draw the robe
  else if (num === 6){
  this.ctx.beginPath();
  this.ctx.moveTo(500, 100);
  this.ctx.lineTo(500, 160);
  this.ctx.stroke();
  this.ctx.closePath();}
  //draw the head
  else if (num === 5){
  this.ctx.beginPath();
  this.ctx.arc(500, 200, 40, 0, Math.PI*2, true);
  this.ctx.stroke();
  this.ctx.closePath();}
  //draw the body*/
  else if (num === 4){
  this.ctx.beginPath();
  this.ctx.moveTo(500, 240);
  this.ctx.lineTo(500, 450);
  this.ctx.stroke();
  this.ctx.closePath();}
  //draw 1st leg
  else if (num === 3){
  this.ctx.beginPath();
  this.ctx.moveTo(500, 450);
  this.ctx.lineTo(610, 550);
  this.ctx.stroke();
  this.ctx.closePath();}
  //draw 2nd leg
  else if (num === 2){
  this.ctx.beginPath();
  this.ctx.moveTo(500, 450);
  this.ctx.lineTo(390, 550);
  this.ctx.stroke();
  this.ctx.closePath();}
  //draw 1st arm
  else if (num === 1){
  this.ctx.beginPath();
  this.ctx.moveTo(500, 330);
  this.ctx.lineTo(400, 330);
  this.ctx.stroke();
  this.ctx.closePath();}
  //draw 2nd arm
  else if (num === 0){
  this.ctx.beginPath();
  this.ctx.moveTo(500, 330);
  this.ctx.lineTo(600, 330);
  this.ctx.stroke();
  this.ctx.closePath();}
};

HangmanCanvas.prototype.gameOver = function () {
  this.ctx.clearRect(0, 0, 1200, 800);
  var img = new Image();
  img.src = 'images/gameover.png';
  img.onload = function() {
    this.ctx.drawImage(img, 200, 200, 400, 300);
  };
};

HangmanCanvas.prototype.winner = function () {
  var ctx = this.ctx.clearRect(0, 0, 1200, 800);
  var img = new Image();
  img.src = 'images/awesome.png';
  img.onload = function() {
    ctx.drawImage(img, 200, 200, 400, 300);
  };
};
