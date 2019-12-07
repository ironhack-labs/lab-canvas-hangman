class HangmanCanvas {
  constructor(secretWord) {
    this.ctx = document.getElementById("hangman").getContext("2d");
    this.canvas = document.getElementById("hangman");
    this.ctx = this.canvas.getContext("2d");
    this.createBoard();
    this.drawHangman();
  }

  //
  createBoard() {
    //Height 800 Width 1200px;
    //Triangle
    this.ctx.beginPath(); // start the path
    this.ctx.moveTo(150, 700); // starting position is x=150, y=700
    this.ctx.lineTo(350, 700);
    this.ctx.lineTo(250, 600);
    this.ctx.closePath(); // close the path
    this.ctx.stroke();

    //Straight vertical line
    this.ctx.beginPath();
    this.ctx.moveTo(250, 600);
    this.ctx.lineTo(250, 100);
    this.ctx.closePath();
    this.ctx.stroke();

    //Straight horizontal line
    this.ctx.beginPath();
    this.ctx.moveTo(250, 100);
    this.ctx.lineTo(600, 100);
    this.ctx.closePath();
    this.ctx.stroke();

    //Straight/short vertical line
    this.ctx.beginPath();
    this.ctx.moveTo(600, 100);
    this.ctx.lineTo(600, 150);
    this.ctx.closePath();
    this.ctx.stroke();
  }
  //Draw the secret word lines. One line for each of the letters
  drawLines() {}
  // Put correct words under lines.
  writeCorrectLetter(index) {}
  //Display wrong words upper right.
  writeWrongLetter(letter, errorsLeft) {}
  //Lines and circle
  drawHangman(shape) {
    //Circle
    this.ctx.beginPath();
    this.ctx.arc(600, 200, 50, 0, 2 * Math.PI);
    this.ctx.stroke();

    //Body
    this.ctx.beginPath();
    this.ctx.moveTo(600, 250);
    this.ctx.lineTo(600, 450);
    this.ctx.closePath();
    this.ctx.stroke();

    //Left Arm
    this.ctx.beginPath();
    this.ctx.moveTo(600, 350);
    this.ctx.lineTo(500, 350);
    this.ctx.closePath();
    this.ctx.stroke();

    //Right Arm
    this.ctx.beginPath();
    this.ctx.moveTo(600, 350);
    this.ctx.lineTo(700, 350);
    this.ctx.closePath();
    this.ctx.stroke();

    //Left Leg
    this.ctx.beginPath();
    this.ctx.moveTo(600, 450);
    this.ctx.lineTo(500, 550);
    this.ctx.closePath();
    this.ctx.stroke();

    //Right Leg
    this.ctx.beginPath();
    this.ctx.moveTo(600, 450);
    this.ctx.lineTo(700, 550);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  gameOver() {}

  winner() {}
}
