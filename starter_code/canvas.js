
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secret=secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,800,1200);
  var y = 1200;
  var x = 800;
  this.ctx.beginPath();
   this.ctx.moveTo(350,200);
   this.ctx.lineTo(350,150);
   this.ctx.lineTo(200,150);
   this.ctx.lineTo(200,600);
   this.ctx.moveTo(50,600);
   this.ctx.lineTo(350,600);
   this.ctx.stroke();
   
  this.drawLines();
   
};

HangmanCanvas.prototype.drawLines = function () {
  console.log('drawing')
  console.log(this.secret.length);
  var dist = 50;
  var wordL = this.secret.length*2*dist;
// Dashed line drawn with distance for each letter ;-) 
 this.ctx.setLineDash([dist,dist]);
 this.ctx.beginPath();
 this.ctx.moveTo(450,200);
 this.ctx.lineTo(450+wordL,200);
 this.ctx.stroke();
 this.ctx.setLineDash([]);
};
  
  
 // var d = 40;
 // this.ctx.moveTo(450,200);
 // for (let i =0 ; i<this.secret.length;i++){
 // this.ctx.lineTo(450+d,200);
 // this.ctx.stroke();
 // this.ctx.moveTo(450+2*d,200);
 // d += d;
 //console.log(d)
 // }

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
