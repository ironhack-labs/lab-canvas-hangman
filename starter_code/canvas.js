class HangmanCanvas {
  constructor(secretWord) {
    this.secretWord = secretWord;
    this.cx = document.getElementById("hangman").getContext("2d");
  }

  createBoard() {
    this.cx.clearRect(0, 0, 1000, 1500);
  }

  drawLines() {
    // //linha horizonhal
    // this.cx.beginPath();
    // this.cx.strokeStyle = 'black';
    // this.cx.moveTo(150, 150);
    // this.cx.lineTo(500, 150);
    // this.cx.stroke();
    // this.cx.closePath();

    // //linha comprida vertical
    // this.cx.beginPath();
    // this.cx.strokeStyle = 'black';
    // this.cx.moveTo(150, 150);
    // this.cx.lineTo(150, 600);
    // this.cx.stroke();
    // this.cx.closePath();

    // //linha pequena
    // this.cx.beginPath();
    // this.cx.strokeStyle = 'black';
    // this.cx.moveTo(500, 150);
    // this.cx.lineTo(500, 200);
    // this.cx.stroke();
    // this.cx.closePath();

    //circulo
    // this.cx.beginPath();
    // this.cx.strokeStyle = 'black';
    // this.cx.arc(500, 250, 40, 0, Math.PI * 2);
    // this.cx.stroke();
    // this.cx.closePath();

    //linha palavra
    let x = 300;
    let secret = this.secretWord;
    for (let i = 0; i < secret.length; i += 1) {
      this.cx.beginPath();
      this.cx.strokeStyle = "black";
      this.cx.moveTo(x, 600);
      this.cx.lineTo(x + 30, 600);
      x += 70;
      this.cx.stroke();
      this.cx.closePath();
    }
  }

  writeCorrectLetter(index) { }

  writeWrongLetter(letter, errorsLeft) {
    console.log('print')
    this.cx.font = '48px serif';
    this.cx.fillText(letter, 10, 50);
    this.cx.font = '48px serif';
    this.cx.strokeText(letter, 10, 100);

  }

  // HangmanCanvas.prototype.drawHangman = function (shape) {

  // };

  // HangmanCanvas.prototype.gameOver = function () {

  // };

  // HangmanCanvas.prototype.winner = function () {
}
// const canvasHangman = new HangmanCanvas();

// canvasHangman.drawLines();
