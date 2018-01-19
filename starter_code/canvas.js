
function HangmanCanvas(secretWord) {
  this.canvas=document.getElementById('hangman');
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord=secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
};

HangmanCanvas.prototype.drawLines = function () {
  this.ctx.beginPath();
  this.ctx.moveTo(300, 700);
  for (var i=0; i< this.secretWord.length; i++){
    this.ctx.moveTo(300+i*75, 700); 
    this.ctx.lineTo(350+i*75, 700);
  }
  
};
HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  switch (this.errorsLeft){
    case 9 :this.ctx.moveTo(75, 700);
    this.ctx.lineTo(200, 700);
    this.ctx.lineTo(137.5, 650);
    this.ctx.lineTo(75, 700);
    this.ctx.stroke();
    break;
    case 8 :this.ctx.moveTo(137.5, 650);
    this.ctx.lineTo(137.5, 100);
    break;
    case 7 :this.ctx.moveTo(137.5, 100);
    this.ctx.lineTo(450, 100);
    break;
    case 6:  this.ctx.moveTo(450, 100);
    this.ctx.lineTo(450, 150);
    break;
    case 5: this.ctx.moveTo(480, 180);
    this.ctx.arc(450, 180, 30, 0, Math.PI*2, true);
    break;
    case 4: this.ctx.moveTo(450, 210);
    this.ctx.lineTo(450, 350);
    break;
    case 3: this.ctx.moveTo(450, 350);
    this.ctx.lineTo(500, 420);
    break;
    case 2:  this.ctx.moveTo(450, 350);
    this.ctx.lineTo(400, 420);
    break;
    case 1: this.ctx.moveTo(450, 250);
    this.ctx.lineTo(500, 320);
    break;
    case 0:  this.ctx.moveTo(450, 250);
    this.ctx.lineTo(400, 320);
    break;
  }
  
};

HangmanCanvas.prototype.gameOver = function () {
  
};

HangmanCanvas.prototype.winner = function () {

   // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    var img = new Image();   
    img.src = 'images/awesome.png'
    this.ctx.drawImage(img,0,0, this.canvas.height, this.canvas.width)

};
