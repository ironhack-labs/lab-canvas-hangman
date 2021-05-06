//Coordinates for writing used letters
const letterBoardStartingPointX = 400;

let letterBoardIndexX = letterBoardStartingPointX;
let letterBoardIndexY = 100;

//Coordinates for drawing lines and writing letters over the lines
const lineLength = 50;
const spaceBetweenLines = 15;
const linesStartingPoint = 125;

class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    this.context.clearRect(0,0,800,1200);
  }

  drawLines() {
    this.context.beginPath();

    let indexX = linesStartingPoint;

    for (let index = 0; index < this.secretWord.length; index++) {
      this.context.moveTo(indexX, 700);
      this.context.lineTo(indexX+lineLength, 700);
      
      indexX+=(lineLength+spaceBetweenLines);
    }

    this.context.stroke();
    this.context.closePath();
    
  }

  writeCorrectLetter(letter) {
    this.context.font = "50px Arial";

    //Starting point for the letters writing
    let indexX = linesStartingPoint+10;

    //Loop through the secret word and write all the letters that match the correct letter
    this.secretWord.split('').forEach(element => {
      if(letter===element) {
        this.context.fillText(letter.toUpperCase(), indexX, 685);
      }
      indexX+=(lineLength+spaceBetweenLines);
    });

  }

  writeWrongLetter(letter) {
    //write the letter on the board
    this.context.fillText(letter.toUpperCase(), letterBoardIndexX, letterBoardIndexY);

    //Set the coordinates for the next letter to be writen
    //If index X is on the edge, make a line jump
    if(letterBoardIndexX > 700) {
      letterBoardIndexX=letterBoardStartingPointX;
      letterBoardIndexY+=80;
    }
    else {
      letterBoardIndexX += 80
    }
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        //Hanging pole line 1
        this.context.beginPath();
        this.context.moveTo(50,650);
        this.context.lineTo(0,700);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        //Hanging pole line 1
        this.context.beginPath();
        this.context.moveTo(0,700);
        this.context.lineTo(100,700);
        this.context.stroke();
        this.context.closePath();
        break;
      case 7:
        //Hanging pole line 2
        this.context.beginPath();
        this.context.moveTo(100,700);
        this.context.lineTo(50,650);
        this.context.stroke();
        this.context.closePath();
        break;
      case 6:
        //Hanging pole line 3
        this.context.beginPath();
        this.context.moveTo(50,650);
        this.context.lineTo(50,25);
        this.context.stroke();
        this.context.closePath();
        break;
      case 5:
        //Hanging pole line 4
        this.context.beginPath();
        this.context.moveTo(50,25);
        this.context.lineTo(200,25);
        this.context.stroke();
        this.context.closePath();
        break;
      case 4:
        //Hanging pole line 5
        this.context.beginPath();
        this.context.moveTo(200,25);
        this.context.lineTo(200,100);
        this.context.stroke();
        this.context.closePath();
        break;
      case 3:
        //Cabeza
        this.context.beginPath();
        this.context.arc(200, 150, 50, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
        break;
      case 2:
        //Cuerpo
        this.context.beginPath();
        this.context.moveTo(200,200);
        this.context.lineTo(200,400);
        this.context.stroke();
        this.context.closePath();
        break;
      case 1:
        //Pie 1
        this.context.beginPath();
        this.context.moveTo(200,400);
        this.context.lineTo(150,500);
        this.context.stroke();
        this.context.closePath();
        break;
      case 0:
        //Pie 2
        this.context.beginPath();
        this.context.moveTo(200,400);
        this.context.lineTo(250,500);
        this.context.stroke();
        this.context.closePath();
        break;
    }
  }

  gameOver() {
    const image = new Image();
    const ctx = this.context;
    const canvas = this.canvas;

    image.src = "../images/gameover.png"
    
    image.onload = function(){
      ctx.drawImage(image, 0, 0, canvas.width*0.7, canvas.height*0.8);
    }
  }

  winner() {
    const image = new Image();
    const ctx = this.context;
    const canvas = this.canvas;

    image.src = "../images/awesome.png"

    image.onload = function(){
      ctx.drawImage(image, 0, 0, canvas.width*0.7, canvas.height*0.8);
    }
  }
}
