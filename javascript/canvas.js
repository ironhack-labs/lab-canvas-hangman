class HangmanCanvas {
  constructor(secretWord, errorsLeft) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.canvas = document.getElementById("hangman");
    this.secretWord = secretWord;
    this.errorsLeft = errorsLeft;

    this.startPointX = 400;
    this.startPointY = 100;
    this.lineWidth = 20;
    this.startPointsX_arr = [this.startPointX];

    for (let i = 1; i <= this.secretWord.length; i++) {
      this.startPointsX_arr.push((this.startPointX += this.lineWidth + 25));
    }
  }

  createBoard() {
    // ... your code goes here
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i++) {
      this.context.beginPath();
      this.context.moveTo(this.startPointsX_arr[i], this.startPointY);
      this.context.lineTo(
        this.startPointsX_arr[i] + this.lineWidth,
        this.startPointY
      );
      this.context.stroke();
      this.context.closePath();
    }
    this.context.beginPath();
    this.context.font = "30px Arial";
    this.context.fillText("Mistakes left: ", 400, 200);
    this.context.font = "red";
    this.context.fillText(this.errorsLeft, 590, 200);
    this.context.closePath();
  }

  writeCorrectLetter(index) {
    // ... your code goes herevar canvas = document.getElementById("myCanvas");
    this.context.font = "30px Arial";
    // schleife
    // index = schleifenzählen
    // schreib rein an stelle
    this.context.fillText(
      this.secretWord[index],
      this.startPointsX_arr[index],
      this.startPointY - 5
    );
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.beginPath();
    this.context.clearRect(580, 150, 100, 100);
    this.context.font = "red";
    this.context.fillText(errorsLeft, 590, 200);
    this.context.closePath();
  }

  drawHangman(errorsLeft) {
    const startX = 50;
    const startY = 250;

    switch (errorsLeft) {
      case 9:
        this.context.beginPath();
        this.context.moveTo(startX, startY);
        this.context.lineTo(startX + 100, startY);
        this.context.stroke();
        this.context.closePath();
        break;
      case 8:
        this.context.beginPath();
        this.context.moveTo(startX, startY);
        this.context.lineTo(startX + 50, startY - 50);
        this.context.stroke();
        this.context.closePath();
        break;

      case 7:
        this.context.beginPath();
        this.context.moveTo(startX + 100, startY);
        this.context.lineTo(startX + 50, startY - 50);
        this.context.stroke();
        this.context.closePath();
        break;

      case 6:
        this.context.beginPath();
        this.context.moveTo(startX + 50, startY - 50);
        this.context.lineTo(startX + 50, startY - 250);
        this.context.stroke();
        this.context.closePath();
        break;

      case 5:
        this.context.beginPath();
        this.context.moveTo(startX + 50, startY - 250);
        this.context.lineTo(startX + 170, startY - 250);
        this.context.stroke();
        this.context.closePath();
        break;

      case 4:
        this.context.beginPath();
        this.context.moveTo(startX + 170, startY - 250);
        this.context.lineTo(startX + 170, startY - 220);
        this.context.stroke();
        this.context.closePath();
        break;

      case 3:
        this.context.beginPath();
        this.context.arc(startX + 170, startY - 200, 20, 0, Math.PI * 2, true);
        this.context.stroke();
        this.context.closePath();
        break;

      case 2:
        this.context.beginPath();
        this.context.moveTo(startX + 170, startY - 180);
        this.context.lineTo(startX + 170, startY - 120);
        this.context.stroke();
        this.context.closePath();
        break;

      case 1:
        this.context.beginPath();
        this.context.moveTo(startX + 170, startY - 120);
        this.context.lineTo(startX + 150, startY - 100);
        this.context.moveTo(startX + 170, startY - 120);
        this.context.lineTo(startX + 190, startY - 100);
        this.context.stroke();
        this.context.closePath();
        break;

      case 0:
        this.context.beginPath();
        this.context.moveTo(startX + 150, startY - 160);
        this.context.lineTo(startX + 190, startY - 160);
        this.context.stroke();
        this.context.closePath();
        break;
    }
  }

  // this.context.beginPath();
  // this.context.moveTo(215, 190);
  // this.context.lineTo(205, 200);
  // this.context.moveTo(205, 190);

  // this.context.lineTo(215, 190);
  // this.context.stroke();
  // this.context.closePath();

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
