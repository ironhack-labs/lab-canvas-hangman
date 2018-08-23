class HangmanCanvas{
  constructor(secret) {
  this.secret = secret;
  this.ctx = document.getElementById('hangman').getContext('2d')
  this.drawLines(secret);
  }
drawTriangle(){
  // console.log(this)
  this.ctx.beginPath();
  this.ctx.moveTo(150, 550); //top
  this.ctx.lineTo(200, 600); //right bottom
  this.ctx.lineTo(100, 600); //left bottom
  this.ctx.lineTo(150, 550); //top
  this.ctx.stroke();
}

drawPole(){
  // console.log('pole')
  this.ctx.beginPath();
  this.ctx.moveTo(150, 550);
  this.ctx.lineTo(150, 50);
  this.ctx.lineTo(350, 50);
  this.ctx.lineTo(350, 100);
  this.ctx.stroke(); 
}

drawHead() {
  this.ctx.beginPath();
  var x = 350; // x coordinate
  var y = 150; // y coordinate
  var radius = 50; // Arc radius
  var startAngle = 0; // Starting point on circle
  var endAngle = Math.PI*2; // End point on circle
  this.ctx.arc(x, y, radius, startAngle, endAngle, true);
  this.ctx.stroke();
}

drawBody() {
  this.ctx.beginPath();
  this.ctx.moveTo(350, 200);
  this.ctx.lineTo(350, 400);
  this.ctx.stroke(); 
}

drawArms(){
  this.ctx.beginPath();
  this.ctx.moveTo(300, 300);
  this.ctx.lineTo(400, 300);
  this.ctx.stroke(); 
}
drawLegs() {
  this.ctx.beginPath();
  this.ctx.moveTo(300, 500);
  this.ctx.lineTo(350, 400);
  this.ctx.lineTo(400, 500);
  this.ctx.stroke(); 
}
drawIt(index){
  let that=this;
  let drawing = [this.drawTriangle.bind(that), this.drawPole.bind(that) ,this.drawHead.bind(that), this.drawBody.bind(that), this.drawArms.bind(that),this.drawLegs.bind(that)];
  drawing[index]();
}
drawLines(word){
  let numLines = word.length;
  let x=410;
  let y=600;
  let lineLength=50;
  let lineSeparation=70;
    for (let i=0; i<word.length; i++){
      this.ctx.beginPath();
      this.ctx.moveTo(x+(i*lineSeparation), y);
      this.ctx.lineTo(x+lineLength+(lineSeparation*i), y);
      this.ctx.lineWidth=4;
      this.ctx.stroke(); 
    }
  }
  drawText(letter,index){
    let lineSeparation=70;
    this.ctx.font = '48px serif';
    this.ctx.fillStyle = 'blue';
    this.ctx.fillText(letter, 420+(index*lineSeparation), 580);
  }
  drawWrongLetters(letter,index){
    let lineSeparation=50;
    this.ctx.font = '48px serif';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText(letter, 500+(lineSeparation*index), 380);
  }
} // end of HangmanCanvas

// function HangmanCanvas(secretWord) {
//   this.ctx = document.getElementById('hangman').getContext('2d');
// }

// HangmanCanvas.prototype.createBoard = function () {

// };

// HangmanCanvas.prototype.drawLines = function () {

// };

// HangmanCanvas.prototype.writeCorrectLetter = function (index) {

// };

// HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

// };

// HangmanCanvas.prototype.drawHangman = function (shape) {

// };

// HangmanCanvas.prototype.gameOver = function () {

// };

// HangmanCanvas.prototype.winner = function () {

// };
