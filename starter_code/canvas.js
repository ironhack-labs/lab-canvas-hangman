
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord
}

HangmanCanvas.prototype.createBoard = function () {
  console.log('Clear Board')
  this.ctx.clearRect(0, 0, 1200, 800)
  this.ctx.lineWidth = 8;
  this.ctx.strokeStyle = 'black';

}

HangmanCanvas.prototype.drawLines = function () {
  console.log('Draw Lines')
let x = 100
let y = 700


for(let i = 0; i <this.secretWord.length; i++)  {
  this.ctx.beginPath()
  this.ctx.moveTo(x , y)
  this.ctx.lineTo(x + 60 , y)
  this.ctx.stroke()
  this.ctx.closePath()
  x = x + 85 
 // console.log(x,y)
}
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
