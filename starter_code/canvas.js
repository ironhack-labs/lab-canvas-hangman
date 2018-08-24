function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secretWord = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.beginPath();
  this.ctx.moveTo(50,468);
  this.ctx.lineTo(150,468);
  this.ctx.lineTo(100,437);
  this.ctx.lineTo(50,468);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(100,437);
  this.ctx.lineTo(100,125);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(100,125);
  this.ctx.lineTo(250,125);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.moveTo(250,125);
  this.ctx.lineTo(250,187);
  this.ctx.stroke();
};

HangmanCanvas.prototype.drawLines = function () {
  var arrayWords = this.secretWord.split('');
  var pointStart = 200, y = 468;  
  var newContext = this.ctx;
  arrayWords.forEach(function(){
    newContext.beginPath();
    newContext.moveTo(pointStart,y);
    newContext.lineTo(pointStart + 30,y);
    newContext.stroke();
    pointStart = pointStart + 50;
  });
};

HangmanCanvas.prototype.writeCorrectLetter = function (index) {

};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

};

HangmanCanvas.prototype.drawHangman = function (shape) {

  this.ctx.beginPath();
  switch(shape){
    case "head":
      var endAngle = Math.PI*2;
      this.ctx.arc(250, 200, 13, 0, endAngle, true);
      break;
    case "body":
      this.ctx.moveTo(250,213);
      this.ctx.lineTo(250,283);
      break;
    case "leftLeg":
      this.ctx.moveTo(250,283);
      this.ctx.lineTo(230,300);
      break;
    case "rightLeg":
      this.ctx.moveTo(250,283);
      this.ctx.lineTo(270,300);
      break;
    case "leftArm":
      this.ctx.moveTo(250,233);
      this.ctx.lineTo(230,250);
      break;
    case "rightArm":    
      this.ctx.moveTo(250,233);
      this.ctx.lineTo(270,250);
      break;
    case "tie":
      this.ctx.moveTo(220,213);
      this.ctx.lineTo(280,213);
      break;
    default:
      break;
  }
  this.ctx.stroke();
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};
