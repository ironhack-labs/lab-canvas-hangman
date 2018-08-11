
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.canvas = document.getElementById('hangman');
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, this.width, this.height)
};

HangmanCanvas.prototype.drawLines = function () {

  var x = 40;
  var y = 70;

  for (var i = 0; i < this.secretWord.length; i++) {
  this.ctx.beginPath();
  this.ctx.moveTo(x, y);
  this.ctx.lineTo(x+40,y);
  this.ctx.closePath();
  this.ctx.stroke();
  x += 50;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
    this.ctx.font = "50px sans-serif";
    this.ctx.fillText(this.secretWord[index], 45 + index*50, 65);
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
    var x = 400;
    var index = 10 - hangman.errorsLeft;
    console.log(index);
    if (index > 4) {
      this.ctx.fillText(letter, x + (index-5)*50, 250)}
    else {this.ctx.font = "50px sans-serif";
    this.ctx.fillText(letter, x + index*50, 200);
    }
};

HangmanCanvas.prototype.drawHangman = function (shape) {
    
    if (hangman.errorsLeft === 9) {
      this.ctx.beginPath();
      this.ctx.moveTo(50,550);
      this.ctx.lineTo(200,550);
      this.ctx.lineTo(125,500);
      this.ctx.closePath();
      this.ctx.stroke();}

    if (hangman.errorsLeft === 8) {
    
     this.ctx.beginPath();
     this.ctx.moveTo(125,500);
     this.ctx.lineTo(125,175);
     this.ctx.closePath();
     this.ctx.stroke();}

    if (hangman.errorsLeft === 7) {


     this.ctx.beginPath();
     this.ctx.moveTo(125,175);
     this.ctx.lineTo(300,175);
     this.ctx.closePath();
     this.ctx.stroke();}

     if (hangman.errorsLeft === 6) {


     this.ctx.beginPath();
     this.ctx.moveTo(300,175);
     this.ctx.lineTo(300,250);
     this.ctx.closePath();
     this.ctx.stroke();}

     if (hangman.errorsLeft === 5) {


     this.ctx.beginPath();
     this.ctx.lineTo(300,250);
     this.ctx.arc(300, 270, 20, 2*Math.PI,0, false);
     this.ctx.fill();}

     if (hangman.errorsLeft === 4) {

     this.ctx.beginPath();
     this.ctx.moveTo(300,290);
     this.ctx.lineTo(300,375);
     this.ctx.closePath();
     this.ctx.stroke();}

     if (hangman.errorsLeft === 3) {


     this.ctx.beginPath();
     this.ctx.moveTo(300,315);
     this.ctx.lineTo(250,285);
     this.ctx.closePath();
     this.ctx.stroke();}

     if (hangman.errorsLeft === 2) {


     this.ctx.beginPath();
     this.ctx.moveTo(300,315);
     this.ctx.lineTo(350,285);
     this.ctx.closePath();
     this.ctx.stroke();}

     if (hangman.errorsLeft === 1) {


     this.ctx.beginPath();
     this.ctx.moveTo(300,375);
     this.ctx.lineTo(250,415);
     this.ctx.closePath();
     this.ctx.stroke();}

     if (hangman.errorsLeft === 0) {


     this.ctx.beginPath();
     this.ctx.moveTo(300,375);
     this.ctx.lineTo(350,415);
     this.ctx.closePath();
     this.ctx.stroke();}
};

HangmanCanvas.prototype.gameOver = function () {
  var backgroundGameOver = new Image();
  backgroundGameOver.src = "images/gameover.png";
  this.ctx.drawImage(backgroundGameOver, 0,0,this.width,this.height);
 
};

HangmanCanvas.prototype.winner = function () {
  var backgroundWinner = new Image();
  backgroundWinner.src = "images/awesome.png";
  this.ctx.drawImage(backgroundWinner, 0,0,this.width,this.height);
  
};
