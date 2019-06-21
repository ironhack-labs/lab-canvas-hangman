// class HangmanCanvas{
//   this.ctx = document.getElementById('hangman').getContext('2d');

//   this.createBoard = function () {
//   };
  
//   this.drawLines = function () {
//   };
  
//   this.writeCorrectLetter = function (index) {
//   };
  
//   this.writeWrongLetter = function (letter, errorsLeft) {
//   };
  
//   this.drawHangman = function (shape) {
  
//   };
  
//   this.gameOver = function () {
  
//   };
  
//   this.winner = function () {
  
//   };

// }


//function drawBase(){}
function drawBase(){
  var canvas = document.getElementById('hangman');
  // if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(125, 650);
    ctx.lineTo(75, 700);
    ctx.lineTo(175, 700);
    ctx.lineTo(125, 650);
    ctx.stroke();
    ctx.closePath();
  // }
}
drawBase();

//function drawStandVertical(){}
function drawStandVertical(){
  var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(125, 650);
    ctx.lineTo(125, 275);
    ctx.stroke();
    ctx.closePath();
}
drawStandVertical();

//function drawStandHorizontal(){}
function drawStandHorizontal(){
  var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(125, 275);
    ctx.lineTo(325, 275);
    ctx.stroke();
    ctx.closePath();
}
drawStandHorizontal();

function drawStandNub(){
  var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(325, 275);
    ctx.lineTo(325, 300);
    ctx.stroke();
    ctx.closePath();
}

drawStandNub();


//function drawHead(){}
function drawHead(){
  var canvas = document.getElementById('hangman');  
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(325, 340, 40, 0 , 2 * Math.PI);
    ctx.stroke();


}
drawHead();

//function drawBody(){}
function drawBody(){
  var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(325, 380);
    ctx.lineTo(325, 550);
    ctx.stroke();
    ctx.closePath();
}
drawBody();

//function drawLeftArm(){}
function drawLeftArm(){
  var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(325, 425);
    ctx.lineTo(255, 375);
    ctx.stroke();
    ctx.closePath();
}
drawLeftArm();


//function drawRightArm(){}
function drawRightArm(){
  var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(325, 425);
    ctx.lineTo(395, 375);
    ctx.stroke();
    ctx.closePath();
}
drawRightArm();

//function drawLeftLeg(){}
function drawLeftLeg(){
  var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(325, 550);
    ctx.lineTo(280, 625);
    ctx.stroke();
    ctx.closePath();
}
drawLeftLeg();


//function drawReftLeg(){}
function drawRightLeg(){
  var canvas = document.getElementById('hangman');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(325, 550);
    ctx.lineTo(370, 625);
    ctx.stroke();
    ctx.closePath();
}
drawRightLeg();
