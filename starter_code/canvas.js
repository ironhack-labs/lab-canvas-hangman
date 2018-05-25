
function HangmanCanvas(secretWord) {
  this.space=600;
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord=secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200, 1200);
  this.ctx.beginPath();
  this.ctx.moveTo(150,650);//triangle top
  this.ctx.lineTo(100,700);
  this.ctx.lineTo(200,700);
  this.ctx.lineTo(150,650);
  this.ctx.lineTo(150,120);
  this.ctx.lineTo(500,120);
  this.ctx.lineTo(500,150);
  this.ctx.stroke();
  
};


HangmanCanvas.prototype.drawLines = function () {
  let len=this.secretWord.length;
  console.log(this.secretWord);
  let x1=250;
  for(let i=0;i<len;i++){
    this.ctx.beginPath();
    this.ctx.moveTo(x1,700);
    this.ctx.lineTo(x1+40,700);
    this.ctx.stroke();
    x1+=60;
  }
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font='20px serif';
  this.ctx.fillText(this.secretWord[index],18*index,200);
  

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font='20px serif';
  this.ctx.fillText(letter,this.space,200);
  this.space+=18;
};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
