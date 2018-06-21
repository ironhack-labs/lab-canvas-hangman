
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

  HangmanCanvas.prototype.createBoard = function () {
    this.ctx.clearRect(0,0,1200,800);
    /*this.ctx.beginPath();
    this.ctx.moveTo(70,600);
    this.ctx.lineTo(110,550);
    this.ctx.lineTo(150,600);
    this.ctx.lineTo(70,600);
    this.ctx.stroke();  */
};

HangmanCanvas.prototype.drawLines = function () {
  for (var i = 0; i < this.secretWord.length; i++){
    this.ctx.moveTo(300+50*i,575);
    this.ctx.lineTo(340+50*i,575);
    this.ctx.stroke();
  }

};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  this.ctx.font= "48px serif";
  this.ctx.fillText(this.secretWord[index], 305+50*index,555);

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font= "48px serif";
  this.ctx.fillText(letter, 800, 100);

};

HangmanCanvas.prototype.drawHangman = function (shape) {


};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
