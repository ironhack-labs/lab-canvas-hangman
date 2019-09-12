class HangmanCanvas {
  constructor(secretWord){
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord.split("");
  }
  createBoard(){
    this.ctx.clearRect(0,0,700,450);
    document.getElementById('start-game-button').style.visibility = "hidden";
    //retirar depois
    // this.ctx.font = "30px Georgia";
    // this.ctx.fillText("A", 215, 380);
    // this.ctx.fillText("B", 290, 380);
    ////////////////
    this.drawLines();
  }
  drawLines(){
    let x1 = 200;
    let x2 = 250;
    this.secretWord.forEach( el => {
      this.ctx.beginPath();
      this.ctx.moveTo(x1,400);
      this.ctx.lineTo(x2,400);
      this.ctx.stroke();
      this.ctx.closePath();
      x1 += 75;
      x2 += 75;
    });
  }
  writeCorrectLetter(letter){
    let x = 215;
    this.ctx.font = "30px Georgia";
    this.secretWord.forEach((secretLetter,index) => {
      if(letter.includes(secretLetter)){
        this.ctx.fillText(secretLetter, x, 380);
      }
      x += 75;
    })
  }
  writeWrongLetter(letters){
    let index = 9;
    let x = 600;
    let y = 100;
    letters.forEach( (letter) => {
      this.drawHangman(index);
      index -= 1;
      this.ctx.font = "20px Georgia";
      this.ctx.fillText(letter, x, y);
      x += 50;
    })

  }
  drawHangman(erros){
    switch(erros){
      case 9: 
        this.ctx.beginPath();
        this.ctx.moveTo(50,400);
        this.ctx.lineTo(150,400);
        this.ctx.lineTo(100,350);
        this.ctx.lineTo(50,400);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 8:
        this.ctx.fillRect(100,0,1.5,350);
        break;
      case 7: 
        this.ctx.fillRect(100,0,250,1.5);
        break;
      case 6:
        this.ctx.fillRect(350,0,1.5,30);
        break;
      case 5:
        this.ctx.beginPath();
        this.ctx.arc(350, 55, 25, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 4:
        this.ctx.beginPath();
        this.ctx.fillRect(350,80,1.5,120);
        this.ctx.closePath();
        break;
      case 3:
        this.ctx.beginPath();
        this.ctx.lineWidth = 1.5;
        this.ctx.moveTo(350,200);
        this.ctx.lineTo(375,225);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 2:
        this.ctx.beginPath();
        this.ctx.lineWidth = 1.5;
        this.ctx.moveTo(350,200);
        this.ctx.lineTo(325,225);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 1:
        this.ctx.beginPath();
        this.ctx.lineWidth = 1.5;
        this.ctx.moveTo(350,125);
        this.ctx.lineTo(385,125);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 0:
        this.ctx.beginPath();
        this.ctx.lineWidth = 1.5;
        this.ctx.moveTo(350,125);
        this.ctx.lineTo(315,125);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
    }
      
    
  } 
  gameOver(){

  }
  winner(){

  }
  clearBoard(){
    this.ctx.clearRect(0, 0, 1000, 1000);
  }
}

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
