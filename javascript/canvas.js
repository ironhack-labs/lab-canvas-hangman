let xOrigin = 200;
let yOrigin = 500;
let underlineLength = 50;
let errorsX = 500;
let errorsY = 200;

class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.secretWord = secretWord;
  }

  // First, we must clear the board from the previous game. Then we draw the lines to set up the new game.

  createBoard() {
    this.ctx.clearRect(0, 0, 1600, 1200);
    this.drawLines();
    this.drawHangman(10);
  }

  // We draw the starting lines of the word we're guessing by drawing mini lines for each letter. We draw rectangles. The loop starts at our origin, draws a rectangle, and then the underlineOrigin moves double the length of the rectangle to the right, then draws another one, and so on.

  drawLines() {
    let underlineOrigin = xOrigin;
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.fillRect(underlineOrigin, yOrigin + 25, underlineLength, 10);
      underlineOrigin += underlineLength * 2;
    }
  }

  // To write teh correct letter, we use fillText, get the index of our secret word, then write that letter. the yOrigin remains the same.

  writeCorrectLetter(index) {
    this.ctx.font = "bold 44px Arial";
    this.ctx.fillText(
      this.secretWord[index],
      xOrigin + underlineLength * 2 * index,
      yOrigin
    );
  }

  // When we write an incorrect letter, we want to write it in the top right of our canvas. We set a 'frame' for this using new variables. We then right our letter relative to this (the letter is passed in )

  writeWrongLetter(letter, errorsLeft) {
      this.ctx.font = "bold 44px arial";
      this.ctx.fillText(letter, errorsX, errorsY);
      errorsX += 40;
  }

  // Draw the hangman. We can use the switch/case synthangmanOriginX to outline what happens at each number of errors.

  drawHangman(errorsLeft) {
    let hangmanOriginX = 50;
    let hangmanOriginY = 550;

    switch (errorsLeft) {
      case 10:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX, hangmanOriginY);
        this.ctx.lineTo(hangmanOriginX + 100, hangmanOriginY);
        this.ctx.lineTo(hangmanOriginX + 50, hangmanOriginY - 50);
        this.ctx.lineTo(hangmanOriginX, hangmanOriginY);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 9:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX + 50, hangmanOriginY - 50);
        this.ctx.lineTo(hangmanOriginX + 50, hangmanOriginY - 500);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 8:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX + 50, hangmanOriginY - 500);
        this.ctx.lineTo(hangmanOriginX + 300, hangmanOriginY - 500);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 7:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX + 300, hangmanOriginY - 500);
        this.ctx.lineTo(hangmanOriginX + 300, hangmanOriginY - 450);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 6:
        this.ctx.beginPath();
        this.ctx.arc(hangmanOriginX + 300, hangmanOriginY - 400, 50, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 5:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX + 300, hangmanOriginY - 350);
        this.ctx.lineTo(hangmanOriginX + 300, hangmanOriginY - 250);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 4:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX + 300, hangmanOriginY - 350);
        this.ctx.lineTo(hangmanOriginX + 250, hangmanOriginY - 300);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 3:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX + 300, hangmanOriginY - 350);
        this.ctx.lineTo(hangmanOriginX + 350, hangmanOriginY - 300);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 2:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX + 300, hangmanOriginY - 250);
        this.ctx.lineTo(hangmanOriginX + 250, hangmanOriginY - 200);
        this.ctx.stroke();
        this.ctx.closePath();
        break;

      case 1:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX + 300, hangmanOriginY - 250);
        this.ctx.lineTo(hangmanOriginX + 350, hangmanOriginY - 200);
        this.ctx.stroke();
        this.ctx.closePath();
        break;
      case 0:
        this.ctx.beginPath();
        this.ctx.moveTo(hangmanOriginX + 300, hangmanOriginY - 250);
        this.ctx.lineTo(hangmanOriginX + 250, hangmanOriginY - 200);
        this.ctx.stroke();
        this.ctx.closePath();
    }
  }

  gameOver() {
    const image = new Image();
    const ctx = this.ctx;
    const canvas = document.getElementById("hangman")
    image.src = "./images/gameover.png";
    image.onload = function () {
      ctx.drawImage(image, 0, 0, canvas.width * 0.7, canvas.height * 0.8);
    };
  }

  winner() {
    const image = new Image();
    const canvas = document.getElementById("hangman")
    const ctx = this.ctx;
    image.src = "./images/awesome.png";
    image.onload = function () {
      ctx.drawImage(image, 0, 0, canvas.width * 0.7, canvas.height * 0.8);
    };
  }
}
