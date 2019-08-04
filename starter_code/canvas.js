class HangmanCanvas {
  constructor(secretWord){
    this.secretWord=hangman.secretWord;
    this.canvas=document.querySelector('#hangman');
    this.ctx = document.getElementById('hangman').getContext('2d');
    this.beginX=100;
    this.beginY=750;
    this.positionX=this.beginX;
    this.positionY=this.beginY;
    this.textPositionX= this.beginX + 200
    this.textPositionY = this.beginY -10
    this.textWrongX=this.beginX+200;
    this.textWrongY=this.beginY-650;
    this.count = 0;
  }

  createBoard(){
    this.ctx.clearRect(0, 0, 1200, 800)
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 3;
    
    this.ctx.beginPath();
    this.ctx.moveTo(this.beginX, this.beginY);
    this.ctx.lineTo(this.beginX+150/2, this.beginY-50);
    this.ctx.stroke();
    this.ctx.moveTo(this.beginX, this.beginY);
    this.positionX+=150;
    this.ctx.lineTo(this.positionX, this.positionY);
    this.ctx.stroke();
    this.positionX-= 75;
    this.positionY-=50;
    this.ctx.lineTo(this.positionX, this.positionY)
    this.ctx.stroke();
    this.positionY-=500;
    this.ctx.lineTo(this.positionX, this.positionY);
    this.ctx.stroke();
    this.positionX+=300;
    this.ctx.lineTo(this.positionX, this.positionY);
    this.ctx.stroke();
    this.positionY+=50;
    this.ctx.lineTo(this.positionX, this.positionY);
    this.ctx.stroke();

    this.ctx.closePath();

  }

  drawLines(){
    let beginX=this.textPositionX
    let beginY=this.beginY
    for(let i = 0; i<this.secretWord.length; i++){
      this.ctx.strokeStyle = 'black';
      this.ctx.lineWidth = 3;
      this.ctx.beginPath();
      this.ctx.moveTo(beginX, beginY);
      this.ctx.lineTo(beginX+50, beginY);
      this.ctx.stroke();
      this.ctx.closePath();
      beginX+=100;
      console.log('draw lines')
    }
    
  }

  writeCorrectLetter(letter){
    this.count = 0;
      for(let i=0; i<hangman.secretWord.length; i++){
        if(hangman.secretWord[i]===letter){
          this.ctx.fillStyle='black'
          this.ctx.font = '50px arial'
          let letterX = this.textPositionX + 100*i;
          this.ctx.fillText(letter.toUpperCase(), letterX, this.textPositionY)
          this.count+=1;
        }
      }
     

  }


  writeWrongLetter(letter, error){
    console.log('errou')
    this.ctx.fillStyle='red'
    this.ctx.font = '50px arial'
    this.ctx.fillText(letter.toUpperCase(), this.textWrongX, this.textWrongY)
    this.textWrongX += 50;

  }

  drawHangman(errorleft){
    switch(errorleft) {
      case 9:
        this.ctx.beginPath();
        this.positionY+=50
        this.ctx.arc(this.positionX, this.positionY, 50,  0,  Math.PI*2); // ctx.arc(x, y, radius, startAngle, endAngle)
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 8:
        this.ctx.beginPath()
        this.ctx.moveTo(this.positionX-25, this.positionY-20);
        this.ctx.lineTo(this.positionX-5, this.positionY-20);
        this.ctx.stroke();
        this.ctx.closePath();
        
        break;

      case 7:
          this.ctx.beginPath()
          this.ctx.moveTo(this.positionX+25, this.positionY-20);
          this.ctx.lineTo(this.positionX+5, this.positionY-20);
          this.ctx.stroke();
          this.ctx.closePath();

      break;

      case 6: 
      this.ctx.beginPath()
      this.ctx.arc(this.positionX, this.positionY, 5,  0,  Math.PI*2); // ctx.arc(x, y, radius, startAngle, endAngle)
      this.ctx.stroke();
      this.ctx.closePath();

      break;

      case 5:
          this.ctx.beginPath()
          this.ctx.arc(this.positionX, this.positionY+95, 70,  Math.PI+Math.PI*(4/10),  Math.PI*2-Math.PI*(4/10)); // ctx.arc(x, y, radius, startAngle, endAngle)
          this.ctx.stroke();
          this.ctx.closePath();

      break;

      case 4: 
      this.ctx.beginPath();
      this.positionY+=50;
      this.ctx.moveTo(this.positionX, this.positionY);
      this.positionY+=200
      this.ctx.lineTo(this.positionX, this.positionY);
      this.ctx.stroke();
      break;

      case 3:
        this.ctx.beginPath();
        this.ctx.moveTo(this.positionX, this.positionY-175);
        this.ctx.lineTo(this.positionX-75, this.positionY-100);
        this.ctx.stroke();
        this.ctx.closePath();
      break;

      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(this.positionX, this.positionY-175);
        this.ctx.lineTo(this.positionX+75, this.positionY-100);
        this.ctx.stroke();
        this.ctx.closePath();
      break;

      case 1: 
      this.ctx.beginPath();
      this.ctx.moveTo(this.positionX, this.positionY);
      this.ctx.lineTo(this.positionX-75, this.positionY+100);
      this.ctx.stroke();
      this.ctx.closePath();
      break;

      case 0: 
      this.ctx.beginPath();
      this.ctx.moveTo(this.positionX, this.positionY);
      this.ctx.lineTo(this.positionX+75, this.positionY+100);
      this.ctx.stroke();
      this.ctx.closePath();
      break;
    }
  }

  winner(){
    const image = new Image; // Using optional size for image
    image.onload = drawImageActualSize; // Draw when image has loaded
    
    // Load an image of intrinsic size 300x227 in CSS pixels
    image.src = './images/awesome.png';
    
    function drawImageActualSize() {
    
      // Will draw the image as 300x227, ignoring the custom size of 60x45
      // given in the constructor
      hangmancanvas.ctx.drawImage(this, 150, 100);
    }
  }

  looser(){
    const image = new Image; // Using optional size for image
    image.onload = drawImageActualSize; // Draw when image has loaded
    
    // Load an image of intrinsic size 300x227 in CSS pixels
    image.src = './images/gameover.png';
    
    function drawImageActualSize() {
      // Use the intrinsic size of image in CSS pixels for the canvas element
    
      // Will draw the image as 300x227, ignoring the custom size of 60x45
      // given in the constructor
      hangmancanvas.ctx.drawImage(this, 300, 300);
    }
  }


} // end of hangmanCanvas constructor


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
