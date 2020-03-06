class HangmanCanvas {
  constructor(secretWord, errorsLeft) {
    
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
    this.errorsLeft = errorsLeft;
    // ... your code goes here
  }

  createBoard() {
   this.context.clearRect(0, 0, 1200, 800);
   this.drawLines();
   
  }

  drawLines() {

    let inicio = 20;
    let fim = 80;
    console.log(this.secretWord);
    for(let i = 0; i < this.secretWord.length; i += 1){
    this.context.beginPath();
    this.context.moveTo(inicio,400);
    this.context.lineTo(fim,400);
    this.context.stroke();
  
  inicio += 100;  
  fim += 100;
  
  }

  this.drawHangman();
  }
  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(this.errorsLeft) {
  let ctx = this.context;
 let hangInitialX = 0;
 let hangInitialY = 0;
 let radius = 30;
 switch(this.errorsLeft){
 case 10:
 this.context.beginPath();
 this.context.lineWidth = 3;
 this.context.moveTo(hangInitialX, hangInitialY);
 this.context.lineTo(hangInitialX + 205, hangInitialY + 200);
//  ctx.stroke();
//  ctx.lineTo(hangInitialX, hangInitialY - 75);
//  ctx.stroke();
//  ctx.lineTo(hangInitialX + 75, hangInitialY);
//  ctx.stroke();
//  ctx.lineTo(hangInitialX, hangInitialY);
 ctx.stroke();
 break;
 case 8:
 ctx.beginPath();
 ctx.lineWidth = 3;
 ctx.moveTo(hangInitialX, hangInitialY - 75);
 ctx.lineTo(hangInitialX, hangInitialY - 400);
 ctx.stroke();
 break;
 case 7:
 ctx.beginPath();
 ctx.lineWidth = 3;
 ctx.moveTo(hangInitialX, hangInitialY - 400);
 ctx.lineTo(hangInitialX + 250, hangInitialY - 400);
 ctx.stroke();
 break;
 case 6:
 ctx.beginPath();
 ctx.lineWidth = 3;
 ctx.moveTo(hangInitialX + 250, hangInitialY - 400);
 ctx.lineTo(hangInitialX + 250, hangInitialY - 350);
 ctx.stroke();
 break;
 case 5:
 ctx.beginPath();
 ctx.lineWidth = 3;
 ctx.arc(hangInitialX + 250, hangInitialY + radius - 350, radius, 0, Math.PI * 2, true);
 ctx.stroke();
 break;
 case 4:
 ctx.beginPath();
 ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 350);
 ctx.lineTo(hangInitialX + 250, hangInitialY + 2 * radius - 250);
 ctx.stroke();
 break;
 case 3:
 ctx.beginPath();
 ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 250);
 ctx.lineTo(hangInitialX + 200, hangInitialY + 2 * radius - 200);
 ctx.stroke();
 break;
 case 2:
 ctx.beginPath();
 ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 250);
 ctx.lineTo(hangInitialX + 300, hangInitialY + 2 * radius - 200);
 ctx.stroke();
 break;
 case 1:
 ctx.beginPath();
 ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 325);
 ctx.lineTo(hangInitialX + 200, hangInitialY + 2 * radius - 275);
 ctx.stroke();
 break;
 case 0:
 ctx.beginPath();
 ctx.moveTo(hangInitialX + 250, hangInitialY + 2 * radius - 325);
 ctx.lineTo(hangInitialX + 300, hangInitialY + 2 * radius - 275);
 ctx.stroke();
 break;
 }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
