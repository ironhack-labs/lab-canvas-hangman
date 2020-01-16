
  class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.canvas=document.querySelector('canvas')
    
  }
  
  createBoard() {
  //Clear de board, esto no va :v
  //document.querySelector('.game-logo').remove('active') 
  //document.querySelector('#start-game-button').remove('active') 
  //Draw canva limits
  this.ctx.strokeStyle = "green";
  this.ctx.lineWidth = 5;
  this.ctx.strokeRect(0,0,this.canvas.width,this.canvas.height)
  
  
}

  drawLines() {
    console.log(hangman.secretWord.length)
   for(let i=0;i<hangman.secretWord.length;i++){
    this.ctx.fillRect(365+(i*89),680,85,5); 
   }
  }

  writeCorrectLetter(index) {

  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {
  this.ctx.strokeStyle = "black";
  this.ctx.lineWidth = 3;
  //draw base
  this.ctx.beginPath();
  this.ctx.moveTo(225, 570);
  this.ctx.lineTo(125,685);
  this.ctx.lineTo(325,685);
  this.ctx.lineTo(225,570);
  this.ctx.stroke();
  this.ctx.closePath();
  //Draw Line 1
  this.ctx.moveTo(225, 570);
  this.ctx.lineTo(225,150);
  this.ctx.stroke();
  //Draw Line 2
  this.ctx.moveTo(225, 150);
  this.ctx.lineTo(470,150);
  this.ctx.stroke();
  //Draw Line 3
  this.ctx.moveTo(470, 150);
  this.ctx.lineTo(470,245);
  this.ctx.stroke();
  //Draw Head
  this.ctx.beginPath();
  this.ctx.arc(470, 285, 40, 0, Math.PI * 2);
  this.ctx.stroke();
  this.ctx.closePath();
  //Draw Body
  this.ctx.moveTo(470, 325);
  this.ctx.lineTo(470,470);
  this.ctx.stroke();
  //Draw Left Hand
  this.ctx.moveTo(470, 325);
  this.ctx.lineTo(406,404);
  this.ctx.stroke();
  //Draw Right Hand
  this.ctx.moveTo(470, 325);
  this.ctx.lineTo(534,404);
  this.ctx.stroke();
  //Draw Left Leg
  this.ctx.moveTo(470, 470);
  this.ctx.lineTo(430,545);
  this.ctx.stroke();
  //Draw Right Leg
  this.ctx.moveTo(470, 470);
  this.ctx.lineTo(510,545);
  this.ctx.stroke();
  }

  gameOver() {

  }

  winner() {

  }

}