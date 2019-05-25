


class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }
  //Clears the canvas when a new game starts
  createBoard() {
    this.ctx.clearRect(0, 0, 1200, 800);
  }
  //Draws the lines for each character of the word according to their length
  //and spacing
  drawLines() {
    let startPoint = 100;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(startPoint, 200);
      //+20 represents the width of the line
      this.ctx.lineTo(startPoint + 20, 200);
      //If there is a space it wont draw a line but leave the space
      if (this.secretWord.charAt(i) !== " ") {
        this.ctx.stroke();
      }
      //This value gets updated each time to skip 20 of the line with + 10
      //to leave a space in between each line drawn.
      startPoint += 30;
    }
  }
  //This method displays the letter over it's corresponding line if the letter is correct
  writeCorrectLetter(letter) {
    let drawnLetters = [];
    if (!drawnLetters.includes(letter)) {
      drawnLetters.push(letter);
      for (let i = 0; i < this.secretWord.length; i++) {
        if (this.secretWord.charAt(i) === letter) {
          this.ctx.font = "20px serif";
          //The x value (starting point of the line) gets updated
          //depending on the index of the letter
          this.ctx.fillText(letter, 100 + 30 * i, 195);
        }
      }
    }
  }
  writeWrongLetter(letter, errorsLeft) {
    console.log(errorsLeft);
    this.ctx.font = "20px serif";
    this.ctx.fillText(letter, 200 + 15 * errorsLeft, 20);
  }
  drawHangman(errors) {
    let caso = errors + 1;
    switch (caso) {
      //Draw the base of the pole
      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(100, 500);
        this.ctx.lineTo(150, 470);
        this.ctx.lineTo(200, 500);
        this.ctx.fill();
        break;
      //Draws the pole
      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(150, 470);
        this.ctx.lineTo(150, 300);
        this.ctx.stroke();
        break;
      //Draws the horizontal part or the pole
      case 3:
        this.ctx.lineTo(230, 300);
        break;
      //draws the rope
      case 4:
        this.ctx.lineTo(230, 350);
        this.ctx.stroke();
        this.ctx.closePath();
      case 5:
        this.ctx.beginPath();
        let x = 230;
        let y = 350;
        let radio = 20;
        let anguloInicial = 0;
        let anguloFinal = Math.PI * 2;
        this.ctx.arc(x, y, radio, anguloInicial, anguloFinal);
        this.ctx.fill();
        this.ctx.closePath();
        break;
      case 6:
        this.ctx.beginPath();
        this.ctx.moveTo(230, 370);
        this.ctx.lineTo(230, 420);
        this.ctx.stroke();
        break;
      case 7:
        this.ctx.lineTo(220, 450);
        this.ctx.stroke();
        break;
      case 8:
        this.ctx.moveTo(230, 420);
        this.ctx.lineTo(240, 450);
        this.ctx.stroke();
        break;
      case 9:
        this.ctx.moveTo(230, 380);
        this.ctx.lineTo(220, 415);
        this.ctx.stroke();
        break;
      case 10:
        this.ctx.moveTo(230, 380);
        this.ctx.lineTo(240, 415);
        this.ctx.stroke();
        break;
    }
  }

  //Display gameOverImage on screen when the player has lost
  gameOver() {
    var gameOverImage = new Image();
    gameOverImage.src = "images/gameover.png";
    Image.onload = () =>{
      this.ctx.drawImage(gameOverImage, 0, 0);
    }
    
    console.log("gameOver");
  }

  //Display another image on screen when the player has won
  winner() {
    var winnerImage = new Image();
    winnerImage.src = "images/awesome.png";
    this.ctx.drawImage(winnerImage, 0, 0, 300, 300);
    this.ctx.fillText('Winner!',250,300);
  }
}








