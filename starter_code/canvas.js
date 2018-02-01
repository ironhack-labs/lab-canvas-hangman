
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord=secretWord;
}

//1200px X 800px
HangmanCanvas.prototype.createBoard = function () {
    this.ctx.clearRect(0,0, 1200, 800)
    this.ctx.lineWidth= 4.0;
   
};

HangmanCanvas.prototype.drawLines = function () {
     
  this.ctx.beginPath();
  //Set Line Dash to 15px and Whitespace to 5 px for Each Segment
  this.ctx.setLineDash([15, 5]);
  //Start Point of Word
  this.ctx.moveTo(200, 500);
  //Length of Word in Pixels
  var x = this.secretWord.length * 20;
  this.ctx.lineTo(x, 500);
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {  
        var y = 200 + (20 * index);
        this.ctx.font= '16px Arial';
        this.ctx.fillText((this.secretWord[index]), y, 500)
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font= '16px Arial';
  var x = 500;
  this.ctx.fillText(letter, x, 50)
};

HangmanCanvas.prototype.drawHangman = function (shape) {
  var y = 500;
  var x = 200; 
  
        switch(shape){
          case 'triangle': 
          this.ctx.beginPath();
          this.ctx.moveTo(x, y);
          this.ctx.lineTo((x-50), (y+50));
          this.ctx.lineTo((x+100), (y+50));
          this.ctx.lineTo(x, y);
          this.ctx.stroke();
          break;
          
          case 'lines':
          this.ctx.beginPath();
          this.ctx.moveTo(x,y)
          this.ctx.lineTo(x, y-500);
          this.ctx.lineTo(x+300, y-500);
          this.ctx.lineTo(x+300, y-450);
          this.ctx.stroke();
          break;

          case 'circle':
          this.ctx.beginPath();
          this.ctx.arc(x+300, y-400, 50, 0, Math.PI*2)
          this.ctx.stroke();
          break;


          case 'body':
          this.ctx.beginPath();
          this.ctx.moveTo(x+300, y-350);
          this.ctx.lineTo(x+300, y-150);
          this.ctx.lineTo(x+250, y-50);
          this.ctx.moveTo(x+300, y-150);
          this.ctx.lineTo(x+350, y-50);
          this.ctx.stroke();
          break;
          
          default: 
          break;
          }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
