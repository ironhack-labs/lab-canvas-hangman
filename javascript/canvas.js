class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  createBoard() {
    let canvasWidth = document.querySelector("#hangman").width;
    let canvasHeight = document.querySelector("#hangman").height;
    this.context.clearRect(0, 0, canvasWidth, canvasHeight);
    this.drawLines();
  }

  drawLines() {
    let xCoord = 300;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(xCoord, 480);
      this.context.lineTo(xCoord + 50, 480);
      this.context.closePath();
      this.context.stroke();
      xCoord += 60;
    }
  }

  writeCorrectLetter(index) {
    let letterGuessed = this.secretWord[index];
    this.context.font = "32px Roboto";
    this.context.fillText(letterGuessed, 315 + 60 * index, 460);
  }

  writeWrongLetter(letter, errorsLeft) {
    let wrongLettersNumber = 10 - errorsLeft;
    this.context.font = "32px Roboto";
    this.context.fillText(letter, 700 + 30 * wrongLettersNumber, 100);
    this.context.clearRect(700, 0, 1200, 60);
    this.context.fillText(`Errors left : ${errorsLeft}`, 700, 50);
  }

  drawHangman(errorsLeft) {
    switch (errorsLeft) {
      case 9:
        // Bottom triangle
        this.context.beginPath();
        this.context.moveTo(100, 480);
        this.context.lineTo(200, 480);
        this.context.lineTo(150, 450);
        this.context.closePath();
        this.context.stroke();
        break;
      case 8:
        // Long vertical line
        this.context.beginPath();
        this.context.moveTo(150, 450);
        this.context.lineTo(150, 100);
        this.context.closePath();
        this.context.stroke();
        break;
      case 7:
        //Horizontal Line
        this.context.beginPath();
        this.context.moveTo(150, 100);
        this.context.lineTo(400, 100);
        this.context.closePath();
        this.context.stroke();
        break;
      case 6:
        // Small vertical Line
        this.context.beginPath();
        this.context.moveTo(400, 100);
        this.context.lineTo(400, 150);
        this.context.closePath();
        this.context.stroke();
        break;
      case 5:
        // Head
        this.context.beginPath();
        this.context.arc(400, 180, 30, 0, Math.PI * 2);
        this.context.closePath();
        this.context.stroke();
        break;
      case 4:
        // Body
        this.context.beginPath();
        this.context.moveTo(400, 210);
        this.context.lineTo(400, 300);
        this.context.closePath();
        this.context.stroke();
        break;
      case 3:
        // Leg 1
        this.context.beginPath();
        this.context.moveTo(400, 300);
        this.context.lineTo(450, 370);
        this.context.closePath();
        this.context.stroke();
        break;
      case 2:
        // Leg 2
        this.context.beginPath();
        this.context.moveTo(400, 300);
        this.context.lineTo(350, 370);
        this.context.closePath();
        this.context.stroke();
        break;
      case 1:
        // Arm 1
        this.context.beginPath();
        this.context.moveTo(400, 250);
        this.context.lineTo(350, 200);
        this.context.closePath();
        this.context.stroke();
        break;
      case 0:
        //Arm 2
        this.context.beginPath();
        this.context.moveTo(400, 250);
        this.context.lineTo(450, 200);
        this.context.closePath();
        this.context.stroke();
        break;
    }
  }

  gameOver() {
    let img = new Image();
    img.src = "/images/gameover.png"
    img.addEventListener('load', () => {
      this.context.drawImage(img, 200, 0, 600, 400);
    })
  }

  winner() {
    let img = new Image();
    img.src = "/images/awesome.png"
    img.addEventListener('load', () => {
      this.context.drawImage(img, 200, 0, 600, 400);
    })
  }
}
