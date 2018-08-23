
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  hangman.secretWord = secretWord.toLowerCase();  
}

HangmanCanvas.prototype.createBoard = function (x, y) {

  this.ctx.beginPath();
  this.ctx.moveTo(x, y);
  this.ctx.lineTo(x-50, y+40);
  this.ctx.lineTo(x+50, y+40);
  this.ctx.lineTo(x, y);
  this.ctx.lineTo(x, y-450);
  this.ctx.moveTo(x-80, y-350);
  this.ctx.lineTo(x+350, y-500);
  this.ctx.moveTo(x+300, y-495);
  this.ctx.lineTo(x+300, y-350);
  this.ctx.arc(x+285, y-329, 25, Math.PI*1.7, Math.PI*0.3, false);
  this.ctx.arc(x+315, y-329, 25, Math.PI*0.7, Math.PI*1.3, false);
  this.ctx.stroke();
};

HangmanCanvas.prototype.drawLines = function (x, y) {
  
  this.ctx.beginPath();
  x+=90;
  for(i=0; i<hangman.secretWord.length; i++){
    x+=5;
    this.ctx.moveTo(x, y);
    x+=30;
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

  var wrongLetters = '';
  letter.forEach(element => {
    wrongLetters += element.toUpperCase();    
  });
  this.ctx.font = '40px serif';
  this.ctx.fillText(wrongLetters, 700, 200);
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {
  var img = new Image();   // Create new img element
  img.src = './images/gameover.png'; // Set source path
  img.onload = function(){
    board.ctx.drawImage(img, 315, 280, 570, 240);
  }
};

HangmanCanvas.prototype.winner = function () {
  var img = new Image();   // Create new img element
  img.src = './images/awesome.png'; // Set source path
  img.onload = function(){
     board.ctx.drawImage(img, 164, 91, 872, 618);
  }
};
