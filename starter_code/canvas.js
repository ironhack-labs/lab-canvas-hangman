function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secret = secretWord;
}

HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,800);
};

HangmanCanvas.prototype.drawLines = function () {
  var that = this;
  var startingX = 400;
  var startingY = 700;
  var lineWidth = 50;
  var distanceBetween = lineWidth + 25;
  this.ctx.lineWidth = 5;
  this.ctx.beginPath(); 
  this.secret.split('').forEach(function(eachLetter, index){
    that.ctx.moveTo(startingX, startingY);
    that.ctx.lineTo(startingX+lineWidth, startingY);
    startingX += distanceBetween;
  });
  this.ctx.stroke();
};

HangmanCanvas.prototype.writeCorrectLetter = function (wordInProgress) {
  var that = this;
  var startingX = 410;
  var startingY = 680;
  var distanceBetween = 75;
  this.ctx.font = '40px serif';
  for(var i = 0; i < wordInProgress.length; i++ ){
    if(wordInProgress[i]){
      that.ctx.fillText(wordInProgress[i], startingX, startingY);
    }
    startingX += distanceBetween;
  }
};

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
  this.ctx.font = '40px serif';

  var startingX = 800;
  var startingY = 200;
  var distanceBetween = 50;
  var difference = 10 - errorsLeft;

  if(difference <= 5){
    this.ctx.fillText(letter, startingX + (distanceBetween*difference), startingY);
  }else{
    this.ctx.fillText(letter, startingX + (distanceBetween*(difference - 5)), startingY+distanceBetween);
  }
};

HangmanCanvas.prototype.drawHangMan = function (shape) {
  switch (shape){
    case 'triangle':
    this.ctx.beginPath();
     this.ctx.moveTo(50,700);
     this.ctx.lineTo(200,700);
     this.ctx.lineTo(120,645);
     this.ctx.lineTo(50, 700);
     this.ctx.fill();
     this.ctx.closePath();
    break;
    case 'firstLine':
    this.ctx.beginPath();
     this.ctx.lineTo(120,645);
     this.ctx.lineTo(120,200);
     this.ctx.stroke();
     this.ctx.closePath();
    break;
    case 'secondLine': 
    this.ctx.beginPath();
     this.ctx.lineTo(120,200);
     this.ctx.lineTo(380,200);
     this.ctx.stroke();
     this.ctx.closePath();
    break;
    case 'thirdLine':
    this.ctx.beginPath();
    this.ctx.lineTo(380,200);
    this.ctx.lineTo(380,250);
    this.ctx.stroke();
    this.ctx.closePath();
    break;
    case 'head':
    this.ctx.beginPath();
    var x = 380; // x coordinate
    var y = 300; // y coordinate
    var radius = 50; // Arc radius
    var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI*2; // End point on circle
    this.ctx.arc(x, y, radius, startAngle, endAngle, true);
    this.ctx.moveTo(290,75)
    this.ctx.fill();
    this.ctx.closePath();
    break;
    case 'torso':
    this.ctx.beginPath();
       this.ctx.moveTo(380,350);
       this.ctx.lineTo(380,525);
       this.ctx.stroke();
       this.ctx.closePath();
    break;
    case 'leftLeg':
    this.ctx.beginPath();
       this.ctx.moveTo(380,525);
       this.ctx.lineTo(310,630);
       this.ctx.stroke();
       this.ctx.closePath();
    break;
    case 'rightLeg':
    this.ctx.beginPath();
       this.ctx.moveTo(380,525);
       this.ctx.lineTo(460,630);
       this.ctx.stroke();
       this.ctx.closePath();
    break;
    case 'leftArm':
    this.ctx.beginPath();
       this.ctx.moveTo(380, 390);
       this.ctx.lineTo(310, 480);
       this.ctx.stroke();
       this.ctx.closePath();
    break;
    case 'rightArm':
    this.ctx.beginPath();
       this.ctx.moveTo(380, 390);
       this.ctx.lineTo(450, 480);
       this.ctx.stroke();
       this.ctx.closePath();
    break;
  }
};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};