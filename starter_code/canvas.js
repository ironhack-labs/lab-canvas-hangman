
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
  this.createBoard();
  this.drawLines();
}

HangmanCanvas.prototype.createBoard = function () {

  this.ctx.clearRect(0, 0, 1200, 800);


};

HangmanCanvas.prototype.drawLines = function () {

  var numberLines = this.secretWord.length;
  this.ctx.beginPath();
  var x = 500;
  var y = 700;
  console.log("hola")

  for (var i = 0; i<numberLines; i++){

    this.ctx.moveTo(x, y);
    x += 50
    this.ctx.lineTo(x, y);
    x += 10;

    this.ctx.stroke()
  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  
  var x = 525;
  var y = 670;

  this.ctx.fillText(this.secretWord[index],x+60*index,y)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

  var x = 720;
  var y = 100;

  this.ctx.fillText(letter, (x+(8-errorsLeft-1)*60)



};

HangmanCanvas.prototype.drawHangman = function (shape) {



};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
