class HangmanCanvas {
  constructor(correctWord){
    this.correctWord= "";
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.wrongXCordinate = 600;
  }

  drawHangman(){
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(500, 100);
    this.ctx.lineTo(500, 50);
    this.ctx.lineTo(100, 50);
    this.ctx.lineTo(100, 650);
    this.ctx.lineTo(10, 700);
    this.ctx.lineTo(190, 700);
    this.ctx.lineTo(100, 650);
    this.ctx.stroke();
  }

  draw1() {
  // head
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.arc(500, 150, 50, 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  draw2() {
  // body
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(500, 200);
    this.ctx.lineTo(500, 450);
    this.ctx.stroke();
  }
    
  draw3() {
  // arm1
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(500, 250);
    this.ctx.lineTo(600, 300);
    this.ctx.stroke();
  }
  
  draw4() {
  // arm2
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(500, 250);
    this.ctx.lineTo(400, 300);
    this.ctx.stroke();
  }
  
  draw5() {
  // leg1
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(500, 450);
    this.ctx.lineTo(600, 550);
    this.ctx.stroke();
  }

  draw6() {
  // leg2
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(500, 450);
    this.ctx.lineTo(400, 550);
    this.ctx.stroke();
  }
    
  draw7() {
  //hands
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.arc(600, 300, 10, 0, 2 * Math.PI);
    this.ctx.stroke();  
    this.ctx.beginPath();
    this.ctx.arc(400, 300, 10, 0, 2 * Math.PI);
    this.ctx.stroke();  
  }
  
  draw8() {
  //feet
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.arc(400, 550, 10, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(600, 550, 10, 0, 2 * Math.PI);
    this.ctx.stroke();
  }
    
  draw9() {
  //9-hair
    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(500, 100);
    this.ctx.lineTo(600, 200);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(500, 100);
    this.ctx.lineTo(400, 200);
    this.ctx.stroke();
  }

  draw10() {
  //oh-no
    var img = new Image();
    var imgScale = 640/480;

    img.onload = function() {
    var ctx = document.getElementById('hangman').getContext('2d');
    console.log(ctx);
    ctx.drawImage(img, 410, 140,150*imgScale,150);
    }
    img.src = 'https://i.redd.it/sg3ke7p3pm511.png';
  }

  writeLetters(letter) {
    this.ctx.font = '48px Courier';
    this.ctx.fillText(letter, this.wrongXCordinate, 150);
    this.wrongXCordinate += 35;
  }

}



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
