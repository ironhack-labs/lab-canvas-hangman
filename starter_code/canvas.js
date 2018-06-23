
function HangmanCanvas(secretWord) {
  this.ctx = document.getElementById('hangman').getContext('2d');
  this.secret = secretWord;
 }
 
 HangmanCanvas.prototype.createBoard = function () {
  this.ctx.clearRect(0, 0, 900, 500);
 };
 
 HangmanCanvas.prototype.drawLines = function (aWord) {
  // var canvas = document.getElementById('hangman');
  // var ctx = canvas.getContext('2d');

  //cannot do this inside of forEach loop, need a variable to define
  var that = this;
  var startingX = 350;
  var startingY = 350;
  var lineWidth = 50; //difference between lineWidth and startingX += is the distance between the lines
  var distanceBetween = lineWidth + 25;

  that.ctx.beginPath();
  this.secret.split('').forEach (function(eachLetter, index){ // first argument is actual element in your array. 2nd is index

    that.ctx.moveTo(startingX, startingY);
    that.ctx.lineTo(startingX + lineWidth, startingY);
    startingX += distanceBetween;

    });
    this.ctx.stroke();

    
      //Lines for words


      // if (aWord.length  > 0) {
      //   //line 1
      // ctx.beginPath();
      // ctx.moveTo(350,350);
      // ctx.lineTo(390,350);
      // ctx.stroke();
      // }
      // if (aWord.length > 1) {
      //   //line 2
      // ctx.beginPath();
      // ctx.moveTo(400,350);
      // ctx.lineTo(440,350);
      // ctx.stroke();
      // } 
      // if (aWord.length > 2) {
      // //line 3
      // ctx.beginPath();
      // ctx.moveTo(450,350);
      // ctx.lineTo(490,350);
      // ctx.stroke();
      // }
      // if (aWord.length > 3) {
      // //line 4
      // ctx.beginPath();
      // ctx.moveTo(500,350);
      // ctx.lineTo(540,350);
      // ctx.stroke();
      // }
      // if (aWord.length > 4) {
      // //line 5
      // ctx.beginPath();
      // ctx.moveTo(550,350);
      // ctx.lineTo(590,350);
      // ctx.stroke();
      // } 
      // if (aWord.length > 5) {
      // //line 6
      // ctx.beginPath();
      // ctx.moveTo(600,350);
      // ctx.lineTo(640,350);
      // ctx.stroke();
      // } 
      // if (aWord.length > 6) {
      // //line 7
      // ctx.beginPath();
      // ctx.moveTo(650,350);
      // ctx.lineTo(690,350);
      // ctx.stroke();
      // }
      // if (aWord.length > 7) {
      // //line 8
      // ctx.beginPath();
      // ctx.moveTo(700,350);
      // ctx.lineTo(740,350);
      // ctx.stroke();
      // }
      // if (aWord.length > 8) {
      // //line 9
      // ctx.beginPath();
      // ctx.moveTo(750,350);
      // ctx.lineTo(790,350);
      // ctx.stroke();
      // }
      // if (aWord.length > 9) {
      // ctx.beginPath(); 
      // ctx.moveTo(800,350);
      // ctx.lineTo(840,350);
      // ctx.stroke();
      // }
 
    
 };
 

HangmanCanvas.prototype.writeCorrectLetter = function (wordInProgress) { //writes correct letter on line 

  var that = this;
  var startingX = 350;
  var startingY = 330;  
  var distanceBetween = 75;
  this.ctx.font = "40px serif";

  for(var i = 0; i < wordInProgress.length; i++){
    if (wordInProgress[i]){
      that.ctx.fillText(wordInProgress[i], startingX, startingY);
    }
    startingX += distanceBetween; 
  }
}

// wordInProgress.forEach(function(eachLetter){

// if (eachLetter) {
//   that.ctx.fillText(eachLetter, startingX, startingY);
// }
// startingX += distanceBetween; //Move out of the loop because if it exists, it will start on the first line

// });

HangmanCanvas.prototype.writeWrongLetter = function (letter, errorsLeft) {

  var that = this;
  var startingX = 600;
  var startingY = 100;
  var distanceBetween = 50;
  var difference = 10 - errorsLeft;
  this.ctx.font = "40px serif";
  

  if (difference <=5){ 
  this.ctx.fillText(letter, startingX + (distanceBetween * difference), startingY);
  } else {this.ctx.fillText(letter, startingX + (distanceBetween * (difference - 5)), startingY + distanceBetween);
  }
};

HangmanCanvas.prototype.drawHangman = function (shape) {

  var canvas = document.getElementById('hangman');
  var ctx = canvas.getContext('2d');

    //Triangle

    if (shape == 'triangle'){
    ctx.beginPath();
      ctx.moveTo(50,350);
      ctx.lineTo(200,350);
      ctx.lineTo(120,322.5);
      ctx.lineTo(50, 350);
      ctx.stroke();
      ctx.closePath();
    } else if (shape == 'pole') {
    //Long Vertical Line
    ctx.beginPath();
      ctx.lineTo(120,322.5);
      ctx.lineTo(120,100);
      ctx.stroke();
      ctx.closePath();
    } else if (shape == 'horizontal') {
    //Horizontal Line
    ctx.beginPath();
      ctx.lineTo(120,100);
      ctx.lineTo(380,100);
      ctx.stroke();
      ctx.closePath();
    } else if (shape == 'rope') {
    //Short Vertical Line
    ctx.beginPath();
      ctx.lineTo(380,100);
      ctx.lineTo(380,125);
      ctx.stroke();
      ctx.closePath();
    } else if(shape == 'head'){ 
// Circle for Head
  ctx.beginPath();
  var x = 380; // x coordinate
  var y = 157; // y coordinate
  var radius = 30; // Arc radius
  var startAngle = 0; // Starting point on circle
  var endAngle = Math.PI*2; // End point on circle
  ctx.arc(x, y, radius, startAngle, endAngle, true);
  ctx.moveTo(290,75)
  ctx.stroke();
  ctx.closePath(); 

} else if (shape == 'body') {

  //Body Line
  ctx.beginPath();
    ctx.moveTo(380,184);
    ctx.lineTo(380,260);
    ctx.stroke();
    ctx.closePath();

  } else if ( shape == 'left-leg') {

  //(our view) Left Leg
  ctx.beginPath();
    ctx.moveTo(380,260);
    ctx.lineTo(290,290);
    ctx.stroke();
    ctx.closePath();

  } else if ( shape == 'right-leg') {

  //(our view) Right Leg
  ctx.beginPath();
    ctx.moveTo(380,260);
    ctx.lineTo(460,310);
    ctx.stroke();
    ctx.closePath();

  } else if (shape == 'left-arm') {

  //(our view) Left Arm
  ctx.beginPath();
    ctx.moveTo(380, 185);
    ctx.lineTo(310, 230);
    ctx.stroke();
    ctx.closePath();

  } else if (shape == 'right-arm') {

  //(our view) Right Arm
  ctx.beginPath();
    ctx.moveTo(380, 185);
    ctx.lineTo(450, 230);
    ctx.stroke();
    ctx.closePath();

  }
  

};

HangmanCanvas.prototype.gameOver = function () {

};

HangmanCanvas.prototype.winner = function () {

};

var canv = new HangmanCanvas();



