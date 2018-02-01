
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord=secretWord;
}

//1200px X 800px
HangmanCanvas.prototype.createBoard = function () {
    this.ctx.clearRect(0,0, 1200, 800)
    this.lineWidth= 1.2;
};

HangmanCanvas.prototype.drawLines = function () {
       
        this.ctx.beginPath(); 
        this.ctx.setLineDash([15, 5]) 
        var x = this.secretWord.length * 20;
        this.ctx.moveTo(0, 50);
        this.ctx.lineTo(100, 50);
        this.ctx.stroke();
      
      
    
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
