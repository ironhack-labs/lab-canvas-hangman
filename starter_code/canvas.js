function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
this.secret=secretWord;
 }
 
 HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0,0,1200,800);
 };
 
 HangmanCanvas.prototype.drawLines = function () {
  var that = this;
  var startingX= 500;
  var startingY= 700;
  var lineWidth=50;
  this.ctx.lineWidth=4;
  this.ctx.beginPath();

  this.secret.split('').forEach(function(eachLetter, index){
    that.ctx.moveTo(startingX, startingY);
    that.ctx.lineTo(startingX+lineWidth, startingY);
    startingX +=distanceBetween;
  });
  this.ctx.stroke();
 }
 
 HangmanCanvas.prototype.writeCorrectLetter = function (index) {
  var that = this;
  var startingX=500;
  var startingY=680;
  var ditanceBetween = 75;
  this.ctx.font='48 px serif';

 wordInProgress.forEach(function(eachLEtter){
for (var i=0, i<wordInProgress.length, i++){
  if(wordInProgress[i]){
  that.ctx.fillText(eachLetter, startingX, startingY);
}
startingX += distanceBetween;
 })
 };
 
 HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {
 
 };
 
 HangmanCanvas.prototype.drawHangman = function (shape) {

  var canvas = document.getElementById('hangman');
  var ctx = canvas.getContext('2d');
if (shape=='triangle'){
  //Triangle
ctx.beginPath();
ctx.moveTo(50,700);
ctx.lineTo(200,700);
ctx.lineTo(120,645);
ctx.lineTo(50, 700);
ctx.fill();
ctx.closePath();
}
else if (shape=='long vertical line'){
//Long Vertical Line
ctx.beginPath();
ctx.lineTo(120,645);
ctx.lineTo(120,200);
ctx.stroke();
ctx.closePath();
}
else if (shape=='horizontal line'){
//Horizontal Line
ctx.beginPath();
ctx.lineTo(120,200);
ctx.lineTo(380,200);
ctx.stroke();
ctx.closePath();
}
else if (shape=='short vertical line'){
//Short Vertical Line
ctx.beginPath();
ctx.lineTo(380,200);
ctx.lineTo(380,250);
ctx.stroke();
ctx.closePath();
}

    //  Circle for Head 
    //  if shape = head; {...} in checkletter if wrong call this function (shape) an array of shapes if 
    //  call canv.hangman that array []
     else if (shape=='head'){
     ctx.beginPath();
     var x = 380; // x coordinate
     var y = 300; // y coordinate
     var radius = 48; // Arc radius
     var startAngle = 0; // Starting point on circle
     var endAngle = Math.PI*2; // End point on circle
     ctx.arc(x, y, radius, startAngle, endAngle, true);
     ctx.moveTo(290,75)
     ctx.stroke();
     ctx.closePath();
    }
   else if (shape == 'body'){
     //Body Line
     ctx.beginPath();
       ctx.moveTo(380,350);
       ctx.lineTo(380,525);
       ctx.stroke();
       ctx.closePath();
   }
   else if (shape == 'left leg'){
     //(our view) Left Leg
     ctx.beginPath();
       ctx.moveTo(380,525);
       ctx.lineTo(310,630);
       ctx.stroke();
       ctx.closePath();
      }
       else if (shape == 'right leg'){
     //(our view) Right Leg
     ctx.beginPath();
       ctx.moveTo(380,525);
       ctx.lineTo(460,630);
       ctx.stroke();
       ctx.closePath();
       }
       else if (shape == 'left arm'){
     //(our view) Left Arm
     ctx.beginPath();
       ctx.moveTo(380, 390);
       ctx.lineTo(310, 480);
       ctx.stroke();
       ctx.closePath();
       }
       else if (shape == 'right arm'){
     //(our view) Right Arm
     ctx.beginPath();
       ctx.moveTo(380, 390);
       ctx.lineTo(450, 480);
       ctx.stroke();
       ctx.closePath();
      }
       
};

 
 HangmanCanvas.prototype.gameOver = function () {
 
 };
 
 HangmanCanvas.prototype.winner = function () {
 
 };
 